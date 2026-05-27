import type { HistoricalEvent, HistoricalFigure, DateRange } from './types'

interface Props {
  event: HistoricalEvent
  figures: HistoricalFigure[]
  countryName: string
  onBack: () => void
  onFigureClick: (id: string) => void
}

function formatDate(date: number | DateRange): string {
  if (typeof date === 'number') {
    return date < 0 ? `${Math.abs(date)} BC` : `${date} AD`
  }
  const fmt = (y: number) => (y < 0 ? `${Math.abs(y)} BC` : String(y))
  return `${fmt(date.start)} – ${fmt(date.end)}`
}

export function EventPanel({ event, figures, countryName, onBack, onFigureClick }: Props) {
  const paragraphs = event.narrative.trim().split(/\n\n+/)

  return (
    <div className="event-panel">
      {/* Header image / gradient banner */}
      <div
        className="event-panel-header"
        style={
          event.headerImage
            ? { backgroundImage: `url(${event.headerImage})` }
            : undefined
        }
      >
        <div className="event-panel-header-veil" />
        <div className="event-panel-header-content">
          <button className="panel-back-btn event-back-btn" onClick={onBack}>
            ← {countryName}
          </button>
          <div className="event-panel-era">{event.era}</div>
          <h1 className="event-panel-title">{event.title}</h1>
          <div className="event-panel-date">{formatDate(event.date)}</div>
        </div>
      </div>

      {/* Scrollable body */}
      <div className={`event-panel-body${figures.length > 0 ? ' event-panel-body--split' : ''}`}>
        <div className="event-panel-narrative">
          {paragraphs.map((p, i) => (
            <p key={i} className="event-paragraph">
              {p}
            </p>
          ))}
        </div>

        {figures.length > 0 && (
          <aside className="event-figures-col">
            <div className="event-figures-label">Figures Involved</div>
            <ul className="event-figures-list">
              {figures.map((fig) => (
                <li key={fig.id}>
                  <button className="event-figure-row" onClick={() => onFigureClick(fig.id)}>
                    <span className="event-figure-name">{fig.name}</span>
                    <span className="event-figure-role">{fig.role}</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>
    </div>
  )
}
