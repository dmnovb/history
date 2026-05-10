import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import { INTERACTIVE_CODES, COUNTRY_CENTROIDS } from '../data/countries'

interface Props {
  selectedCountry: string | null
  onCountryClick: (code: string) => void
  eventCounts: Record<string, number>
}

const COLOR_INTERACTIVE = '#242018'
const COLOR_SELECTED = '#4a3825'
const BORDER_SUBTLE = 'rgba(226,226,226,0.12)'
const BORDER_SELECTED = 'rgba(226,226,226,0.35)'

const WORLDVIEW_FILTER = ['==', ['get', 'worldview'], 'all'] as const
const INTERACTIVE_FILTER = ['in', ['get', 'iso_3166_1'], ['literal', [...INTERACTIVE_CODES]]] as const

export function MapContainer({ selectedCountry, onCountryClick, eventCounts }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<mapboxgl.Map | null>(null)
  const styleReady = useRef(false)
  const markersRef = useRef<mapboxgl.Marker[]>([])
  // Keep callback ref to avoid re-initialising the map
  const onClickRef = useRef(onCountryClick)
  onClickRef.current = onCountryClick

  useEffect(() => {
    if (mapRef.current || !containerRef.current) return

    const token = import.meta.env.VITE_MAPBOX_TOKEN
    if (!token) {
      console.error('[MapContainer] VITE_MAPBOX_TOKEN not set — add it to .env.local')
      return
    }

    mapboxgl.accessToken = token

    // Intercept Mapbox telemetry before it hits the network — avoids ad-blocker
    // console errors without actually sending analytics data.
    const _fetch = window.fetch.bind(window)
    window.fetch = function mapboxFetch(input, init) {
      const url = input instanceof Request ? input.url : String(input)
      if (url.startsWith('https://events.mapbox.com')) {
        return Promise.resolve(new Response('', { status: 200 }))
      }
      return _fetch(input, init)
    }

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [14, 47],
      zoom: 3.5,
      minZoom: 1.5,
      maxZoom: 10,
      attributionControl: false,
      logoPosition: 'bottom-right',
    })

    mapRef.current = map

    map.on('load', () => {
      // Warm up the base map to reduce cold-blue tones
      const warmLayers = ['land', 'landuse', 'landuse-shadow', 'national-park']
      for (const id of warmLayers) {
        if (!map.getLayer(id)) continue
        try { map.setPaintProperty(id, 'background-color', '#14120e') } catch { /* skip */ }
        try { map.setPaintProperty(id, 'fill-color', '#161310') } catch { /* skip */ }
      }

      map.addSource('borders', {
        type: 'vector',
        url: 'mapbox://mapbox.country-boundaries-v1',
      })

      // Interactive country base fill (warm dark tint)
      map.addLayer({
        id: 'c-interactive',
        type: 'fill',
        source: 'borders',
        'source-layer': 'country_boundaries',
        filter: ['all', WORLDVIEW_FILTER, INTERACTIVE_FILTER],
        paint: {
          'fill-color': COLOR_INTERACTIVE,
          'fill-opacity': 0.85,
        },
      })

      // Selected highlight
      map.addLayer({
        id: 'c-selected',
        type: 'fill',
        source: 'borders',
        'source-layer': 'country_boundaries',
        filter: ['==', ['get', 'iso_3166_1'], selectedCountry ?? ''],
        paint: {
          'fill-color': COLOR_SELECTED,
          'fill-opacity': 1,
        },
      })

      // Border for interactive countries
      map.addLayer({
        id: 'c-border',
        type: 'line',
        source: 'borders',
        'source-layer': 'country_boundaries',
        filter: ['all', WORLDVIEW_FILTER, INTERACTIVE_FILTER],
        paint: {
          'line-color': BORDER_SUBTLE,
          'line-width': 0.6,
        },
      })

      // Border for selected country
      map.addLayer({
        id: 'c-selected-border',
        type: 'line',
        source: 'borders',
        'source-layer': 'country_boundaries',
        filter: ['==', ['get', 'iso_3166_1'], selectedCountry ?? ''],
        paint: {
          'line-color': BORDER_SELECTED,
          'line-width': 1,
        },
      })

      // ── Event count badges ───────────────────────────────────────────────
      for (const [code, count] of Object.entries(eventCounts)) {
        if (count === 0) continue
        const coords = COUNTRY_CENTROIDS[code]
        if (!coords) continue

        const el = document.createElement('div')
        el.className = 'map-event-badge'
        el.textContent = String(count)

        const marker = new mapboxgl.Marker({ element: el, anchor: 'center' })
          .setLngLat(coords)
          .addTo(map)

        markersRef.current.push(marker)
      }

      // ── Cursor ──────────────────────────────────────────────────────────
      map.on('mousemove', 'c-interactive', () => {
        map.getCanvas().style.cursor = 'pointer'
      })
      map.on('mouseleave', 'c-interactive', () => {
        map.getCanvas().style.cursor = ''
      })

      // ── Click handler ───────────────────────────────────────────────────
      map.on('click', 'c-interactive', (e) => {
        const code = e.features?.[0]?.properties?.iso_3166_1 as string | undefined
        if (code) onClickRef.current(code)
      })

      styleReady.current = true
    })

    return () => {
      window.fetch = _fetch
      markersRef.current.forEach((m) => m.remove())
      markersRef.current = []
      map.remove()
      mapRef.current = null
      styleReady.current = false
    }
  }, []) // run once

  // Sync selected-country highlight whenever prop changes
  useEffect(() => {
    if (!styleReady.current || !mapRef.current) return
    const code = selectedCountry ?? ''
    mapRef.current.setFilter('c-selected', ['==', ['get', 'iso_3166_1'], code])
    mapRef.current.setFilter('c-selected-border', ['==', ['get', 'iso_3166_1'], code])
  }, [selectedCountry])

  return <div ref={containerRef} className="map-canvas" />
}
