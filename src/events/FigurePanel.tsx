import type { HistoricalEvent, HistoricalFigure, DateRange } from './types'

interface Props {
  figure: HistoricalFigure
  events: HistoricalEvent[]
  countryNames: Record<string, string>
  onBack: () => void
  onEventClick: (id: string) => void
}

function formatYear(year: number | null): string {
  if (year === null) return 'Present'
  return year < 0 ? `${Math.abs(year)} BC` : String(year)
}

function formatLifespan(figure: HistoricalFigure): string {
  if (figure.birth === null && figure.death === null) return figure.era
  return `${formatYear(figure.birth)} – ${formatYear(figure.death)}`
}

function startYear(date: number | DateRange): number {
  return typeof date === 'number' ? date : date.start
}

function formatDate(date: number | DateRange): string {
  if (typeof date === 'number') {
    return date < 0 ? `${Math.abs(date)} BC` : `${date} AD`
  }
  const fmt = (y: number) => (y < 0 ? `${Math.abs(y)} BC` : String(y))
  return `${fmt(date.start)} – ${fmt(date.end)}`
}

export function FigurePanel({ figure, events, countryNames, onBack, onEventClick }: Props) {
  const sortedEvents = [...events].sort((a, b) => startYear(a.date) - startYear(b.date))
  const countries = figure.countries?.map((code) => countryNames[code] ?? code) ?? []

  return (
    <div className="figure-panel">
      <div className="figure-panel-header">
        <button className="panel-back-btn" onClick={onBack} aria-label="Back to event">
          ← Event
        </button>
        <div className="figure-panel-era">{figure.era}</div>
        <h1 className="figure-panel-title">{figure.name}</h1>
        <div className="figure-panel-role">{figure.role}</div>
      </div>

      <div className="panel-rule" />

      <div className="figure-panel-body">
        <section className="figure-summary">
          <div className="figure-meta-grid">
            <div>
              <div className="figure-meta-label">Lifespan</div>
              <div className="figure-meta-value">{formatLifespan(figure)}</div>
            </div>
            {countries.length > 0 && (
              <div>
                <div className="figure-meta-label">Countries</div>
                <div className="figure-meta-value">{countries.join(', ')}</div>
              </div>
            )}
          </div>

          {figure.description && (
            <p className="figure-description">{figure.description}</p>
          )}
        </section>

        {sortedEvents.length > 0 && (
          <section className="figure-related">
            <div className="figure-section-label">Related Events</div>
            <ul className="figure-event-list">
              {sortedEvents.map((event) => (
                <li key={event.id}>
                  <button className="figure-event-row" onClick={() => onEventClick(event.id)}>
                    <div>
                      <div className="figure-event-title">{event.title}</div>
                      <div className="figure-event-country">
                        {countryNames[event.country] ?? event.country}
                      </div>
                    </div>
                    <div className="figure-event-date">{formatDate(event.date)}</div>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  )
}
