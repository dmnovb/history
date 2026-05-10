import type { Person } from './types'

const ROMAN = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV']

export function PersonRow({
  person,
  selected,
  index,
  onSelect,
}: {
  person: Person
  selected: boolean
  index: number
  onSelect: () => void
}) {
  const slug = new URL(person.wikiUrl).pathname.replace('/wiki/', '').replace(/_/g, ' ')
  const numeral = ROMAN[index] ?? String(index + 1)

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`person-row${selected ? ' selected' : ''}`}
      style={{ animationDelay: `${index * 0.045}s` }}
    >
      <div className="person-row-info">
        <div className="person-row-name">{person.displayName}</div>
        <div className="person-row-slug">{slug}</div>
      </div>
      <div className="person-row-meta">
        <span className="person-row-numeral">{numeral}</span>
        <span className="person-row-dot" aria-hidden="true" />
      </div>
    </button>
  )
}
