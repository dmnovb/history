import type { Person } from './types'

export function PersonDetail({ person }: { person: Person }) {
  const rows = Object.entries(person.infobox).sort(([a], [b]) =>
    a.localeCompare(b),
  )

  return (
    <div className="person-detail">
      <div className="detail-header">
        <div className="detail-name-block">
          <div className="detail-eyebrow">Historical Figure · Wikipedia</div>
          <h1 className="detail-name">{person.displayName}</h1>
          <hr className="detail-rule" />
        </div>
        <a
          className="detail-article-link"
          href={person.wikiUrl}
          target="_blank"
          rel="noreferrer"
        >
          Open Article ↗
        </a>
      </div>

      <div className="infobox-card">
        <div className="infobox-card-header">
          <span className="infobox-title">Infobox Fields</span>
          <span className="infobox-count">{rows.length} keys</span>
        </div>
        <dl className="infobox-entries">
          {rows.map(([key, value], i) => (
            <div
              key={key}
              className="infobox-entry"
              style={{ animationDelay: `${i * 0.055 + 0.05}s` }}
            >
              <dt className="infobox-key">{key}</dt>
              <dd className="infobox-value">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
