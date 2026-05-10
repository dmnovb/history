import { useState, useMemo } from 'react'
import { MapContainer } from './map/MapContainer'
import { EventList } from './events/EventList'
import { EventPanel } from './events/EventPanel'
import { COUNTRY_NAMES } from './data/countries'
import { events } from './data/events'
import { figures } from './data/figures'
import type { HistoricalFigure } from './events/types'

function App() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null)

  const eventCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const e of events) counts[e.country] = (counts[e.country] ?? 0) + 1
    return counts
  }, [])

  const countryEvents = useMemo(
    () => (selectedCountry ? events.filter((e) => e.country === selectedCountry) : []),
    [selectedCountry],
  )

  const selectedEvent = useMemo(
    () => events.find((e) => e.id === selectedEventId) ?? null,
    [selectedEventId],
  )

  function handleCountryClick(code: string) {
    setSelectedCountry(code)
    setSelectedEventId(null)
  }

  function handleClosePanel() {
    setSelectedCountry(null)
    setSelectedEventId(null)
  }

  const panelOpen = selectedCountry !== null

  return (
    <div className="map-root">
      <MapContainer
        selectedCountry={selectedCountry}
        onCountryClick={handleCountryClick}
        eventCounts={eventCounts}
      />

      <div className="map-brand">
        <span className="map-brand-sigil">✦</span>
        <div>
          <div className="map-brand-name">history</div>
          <div className="map-brand-sub">Historical Map</div>
        </div>
      </div>

      <div className={`map-panel ${panelOpen ? 'map-panel--open' : ''}`}>
        {selectedCountry && !selectedEvent && (
          <EventList
            countryName={COUNTRY_NAMES[selectedCountry] ?? selectedCountry}
            countryCode={selectedCountry}
            events={countryEvents}
            onEventClick={setSelectedEventId}
            onBack={handleClosePanel}
          />
        )}
        {selectedEvent && (
          <EventPanel
            event={selectedEvent}
            figures={
              selectedEvent.figures
                .map((id) => figures.find((f) => f.id === id))
                .filter(Boolean) as HistoricalFigure[]
            }
            countryName={COUNTRY_NAMES[selectedCountry!] ?? selectedCountry!}
            onBack={() => setSelectedEventId(null)}
          />
        )}
      </div>
    </div>
  )
}

export default App
