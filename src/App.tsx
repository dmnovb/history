import { useState, useMemo } from 'react'
import { MapContainer } from './map/MapContainer'
import { EventList } from './events/EventList'
import { EventPanel } from './events/EventPanel'
import { FigurePanel } from './events/FigurePanel'
import { COUNTRY_NAMES } from './data/countries'
import { events } from './data/events'
import { figures } from './data/figures'
import type { HistoricalEvent, HistoricalFigure } from './events/types'

function isHistoricalEvent(event: HistoricalEvent | undefined): event is HistoricalEvent {
  return event !== undefined
}

function isHistoricalFigure(figure: HistoricalFigure | undefined): figure is HistoricalFigure {
  return figure !== undefined
}

function App() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null)
  const [selectedFigureId, setSelectedFigureId] = useState<string | null>(null)

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

  const selectedFigure = useMemo(
    () => figures.find((f) => f.id === selectedFigureId) ?? null,
    [selectedFigureId],
  )

  const selectedFigureEvents = useMemo(
    () => selectedFigure?.events
      .map((id) => events.find((e) => e.id === id))
      .filter(isHistoricalEvent) ?? [],
    [selectedFigure],
  )

  function handleCountryClick(code: string) {
    setSelectedCountry(code)
    setSelectedEventId(null)
    setSelectedFigureId(null)
  }

  function handleClosePanel() {
    setSelectedCountry(null)
    setSelectedEventId(null)
    setSelectedFigureId(null)
  }

  function handleEventClick(id: string) {
    setSelectedEventId(id)
    setSelectedFigureId(null)
  }

  function handleRelatedEventClick(id: string) {
    const event = events.find((e) => e.id === id)
    if (!event) return
    setSelectedCountry(event.country)
    setSelectedEventId(event.id)
    setSelectedFigureId(null)
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
            onEventClick={handleEventClick}
            onBack={handleClosePanel}
          />
        )}
        {selectedEvent && !selectedFigure && (
          <EventPanel
            event={selectedEvent}
            figures={
              selectedEvent.figures
                .map((id) => figures.find((f) => f.id === id))
                .filter(isHistoricalFigure)
            }
            countryName={COUNTRY_NAMES[selectedCountry!] ?? selectedCountry!}
            onBack={() => setSelectedEventId(null)}
            onFigureClick={setSelectedFigureId}
          />
        )}
        {selectedFigure && (
          <FigurePanel
            figure={selectedFigure}
            events={selectedFigureEvents}
            countryNames={COUNTRY_NAMES}
            onBack={() => setSelectedFigureId(null)}
            onEventClick={handleRelatedEventClick}
          />
        )}
      </div>
    </div>
  )
}

export default App
