import { useMemo } from 'react'
import type { HistoricalEvent, DateRange } from './types'

function startYear(date: number | DateRange): number {
  return typeof date === 'number' ? date : date.start
}

interface Props {
  countryName: string
  countryCode: string
  events: HistoricalEvent[]
  onEventClick: (id: string) => void
  onBack: () => void
}

function formatDate(date: number | DateRange): string {
  if (typeof date === 'number') {
    return date < 0 ? `${Math.abs(date)} BC` : `${date} AD`
  }
  const fmt = (y: number) => (y < 0 ? `${Math.abs(y)} BC` : String(y))
  return `${fmt(date.start)} – ${fmt(date.end)}`
}

export function EventList({ countryName, countryCode, events, onEventClick, onBack }: Props) {
  const sorted = useMemo(
    () => [...events].sort((a, b) => startYear(a.date) - startYear(b.date)),
    [events],
  )

  return (
    <div className="country-panel">
      <div className="country-panel-header">
        <button className="panel-back-btn" onClick={onBack} aria-label="Back to map">
          ← Map
        </button>
        <div>
          <div className="panel-eyebrow">Historical Events</div>
          <h1 className="panel-country-name">{countryName}</h1>
        </div>
        <div className="panel-country-code">{countryCode}</div>
      </div>

      <div className="panel-rule" />

      {events.length === 0 ? (
        <div className="panel-empty">
          <div className="panel-empty-glyph">◈</div>
          <p className="panel-empty-title">No events yet</p>
          <p className="panel-empty-sub">Events for {countryName} will appear here.</p>
        </div>
      ) : (
        <ul className="event-list">
          {sorted.map((event, i) => (
            <li key={event.id}>
              <button
                className="event-row"
                style={{ animationDelay: `${i * 40}ms` }}
                onClick={() => onEventClick(event.id)}
              >
                <div className="event-row-main">
                  <div className="event-row-era">{event.era}</div>
                  <div className="event-row-title">{event.title}</div>
                  <div className="event-row-summary">{event.summary}</div>
                </div>
                <div className="event-row-date">{formatDate(event.date)}</div>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
