# Data Model

## Schema Definitions

### HistoricalEvent

```typescript
interface HistoricalEvent {
  id: string;                    // Unique identifier (e.g., "protestant-reformation")
  title: string;                 // Event name (e.g., "Protestant Reformation")
  date: string | DateRange;      // "1517" or {start: 1517, end: 1555}
  era: string;                   // "16th Century (Early Modern)", "18th Century (Enlightenment)"
  century: number;               // 15, 16, 17, 18, 19, 20, 21 (for sorting)
  country: string;               // Primary location (ISO country code or name)
  summary: string;               // 2-3 sentence summary
  narrative: string;             // 3-5 paragraph comprehensive narrative
  headerImage?: string;          // URL or local path to Civ 6-style image
  figures: string[];             // Array of figure IDs involved
  sources?: string[];            // Wikipedia URLs or citations
}
```

### HistoricalFigure

```typescript
interface HistoricalFigure {
  id: string;                    // Unique identifier (e.g., "julius-caesar")
  name: string;                  // Full name
  birth: number | null;          // Birth year (or null if unknown)
  death: number | null;          // Death year (or null if still alive in era)
  era: string;                   // "Ancient", "Medieval", "Modern"
  role: string;                  // "Roman General", "American President", etc.
  description?: string;          // Brief bio (optional for MVP)
  events: string[];              // Event IDs this figure appears in
  countries?: string[];          // Countries associated with figure
}
```

### Country (for map)

```typescript
interface Country {
  id: string;                    // Unique identifier (e.g., "france")
  name: string;                  // Display name
  code: string;                  // ISO 3166-1 alpha-2 (e.g., "FR")
  isInteractive: boolean;        // True for Europe/US only
  eventCount?: number;           // Computed: total events in this country
}
```

## File Organization

```
src/data/
├── events.ts          # Array<HistoricalEvent> (~75-100 events)
├── figures.ts         # Array<HistoricalFigure> (~100-200 figures)
├── countries.ts       # Array<Country> (Europe/US + world list)
└── seedPeople.ts      # Keep existing ancient figures
```

## Relationships

- **Event → Figures:** Event.figures = array of figure IDs
- **Figure → Events:** Figure.events = array of event IDs
- **Event → Country:** Event.country = country ID
- **Figure → Countries:** Figure.countries = array of country IDs (optional)

## Example Data

### Event Example

```typescript
{
  id: "french-revolution",
  title: "The French Revolution",
  date: { start: 1789, end: 1799 },
  era: "18th Century (Enlightenment)",
  century: 18,
  country: "france",
  summary: "A period of social upheaval that overthrew the French monarchy, abolished feudalism, and established the Declaration of the Rights of Man.",
  narrative: "The French Revolution (1789-1799) was a transformative period...[3-5 full paragraphs]...",
  headerImage: "/images/events/french-revolution.jpg",
  figures: ["marie-antoinette", "robespierre", "napoleon", "louis-xvi"],
  sources: ["https://en.wikipedia.org/wiki/French_Revolution"]
}
```

### Figure Example

```typescript
{
  id: "napoleon",
  name: "Napoleon Bonaparte",
  birth: 1769,
  death: 1821,
  era: "Modern",
  role: "French Military Commander & Emperor",
  description: "French military leader who rose to power during the French Revolution...",
  events: ["french-revolution", "napoleonic-wars", "congress-of-vienna"],
  countries: ["france"]
}
```

## MVP Data Requirements

- **Events:** 75-100 major events across Europe/US, 1 AD - present
- **Figures:** 100-200 figures, mix of ancient (existing) + new Europe/US figures
- **Countries:** ~30-40 countries (Europe/US interactive, others grayed out)

## Phase 2 Extensions

- **relatedEvents:** Event-to-event linking (event A causes/relates to event B)
- **tags:** Thematic tags for filtering ("war", "culture", "politics", "technology")
- **backlinks:** Figure → Events that mention them, Events → Figures affected
- **timeline:** Chronological data for timeline view
