# Technical Architecture

## Tech Stack

| Layer | Technology | Version | Notes |
|-------|-----------|---------|-------|
| Framework | React | 19 | Existing |
| Build | Vite | Latest | Existing |
| Styling | Tailwind CSS | v4 | Existing |
| Map | Mapbox GL JS | 3.x | New |
| State | React Hooks | Built-in | useState, useMemo, useEffect |
| Language | TypeScript | Latest | Enforce types |
| Package Manager | Bun | Latest | Existing |

## File Structure (Post-Implementation)

```
history/
├── src/
│   ├── data/
│   │   ├── countries.ts
│   │   ├── events.ts
│   │   ├── figures.ts
│   │   └── seedPeople.ts
│   │
│   ├── map/
│   │   └── MapContainer.tsx     # Mapbox initialization & controls
│   │
│   ├── events/
│   │   ├── EventPanel.tsx       # Detail panel for single event
│   │   └── EventList.tsx        # List of events for country
│   │
│   ├── components/
│   │   ├── Header.tsx           # Keep existing
│   │   └── ...existing
│   │
│   ├── App.tsx                  # Main app + state management
│   ├── index.css                # Keep existing warm design
│   └── main.tsx
│
├── public/
│   └── images/
│       └── events/              # Event header images
│
├── specs/
│   ├── 00-OVERVIEW.md
│   ├── data/
│   │   └── DATA_MODEL.md
│   ├── design/
│   │   └── DESIGN_SYSTEM.md
│   ├── technical/
│   │   ├── ARCHITECTURE.md (this file)
│   │   └── IMPLEMENTATION.md
│   ├── content/
│   │   └── SOURCING.md
│   └── ROADMAP.md
│
├── .env.local                   # Mapbox token (gitignore!)
├── CLAUDE.md                    # Update with new architecture
└── package.json
```

## Component Structure

### App.tsx State Management

```typescript
function App() {
  // Navigation state
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  // Derived state
  const selectedEvent = useMemo(
    () => events.find(e => e.id === selectedEventId) || null,
    [selectedEventId]
  );

  const countryEvents = useMemo(
    () => selectedCountry ? events.filter(e => e.country === selectedCountry) : [],
    [selectedCountry]
  );

  return (
    <div className="app">
      <MapContainer
        countries={countries}
        onCountryClick={(code) => {
          setSelectedCountry(code);
          setSelectedEventId(null); // Reset event selection
        }}
      />
      {selectedCountry && (
        <EventList
          country={selectedCountry}
          events={countryEvents}
          selectedEventId={selectedEventId}
          onEventClick={setSelectedEventId}
          onBack={() => setSelectedCountry(null)}
        />
      )}
      {selectedEvent && (
        <EventPanel
          event={selectedEvent}
          figures={selectedEvent.figures.map(id => figures.find(f => f.id === id))}
          onBack={() => setSelectedEventId(null)}
        />
      )}
    </div>
  );
}
```

### MapContainer Component

```typescript
interface MapContainerProps {
  countries: Country[];
  onCountryClick: (countryCode: string) => void;
}

function MapContainer({ countries, onCountryClick }: MapContainerProps) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return;

    // Initialize Mapbox
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11', // Customize this
      center: [10, 45], // Europe center
      zoom: 3,
      accessToken: import.meta.env.VITE_MAPBOX_TOKEN,
    });

    // Add data source and layer
    // Add click handlers for interactive countries
    // Add event count badges
  }, []);

  return <div ref={mapContainer} style={{ width: '100%', height: '100vh' }} />;
}
```

### EventPanel Component

```typescript
interface EventPanelProps {
  event: HistoricalEvent;
  figures: HistoricalFigure[];
  onBack: () => void;
}

function EventPanel({ event, figures, onBack }: EventPanelProps) {
  return (
    <div className="event-panel">
      {/* Header image */}
      <div
        className="event-header"
        style={{ backgroundImage: `url(${event.headerImage})` }}
      />

      {/* Content */}
      <div className="event-content">
        <button onClick={onBack}>← Back</button>
        <h1>{event.title}</h1>
        <p className="event-meta">{event.date} · {event.country}</p>
        <div className="event-narrative">{event.narrative}</div>

        {/* Figures */}
        <div className="event-figures">
          <h3>FIGURES INVOLVED</h3>
          <ul>
            {figures.map(figure => (
              <li key={figure.id}>
                <strong>{figure.name}</strong> — {figure.role}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
```

## Data Flow

```
MapContainer (click country)
    ↓
App.tsx (setSelectedCountry)
    ↓
EventList renders (filtered events for country)
    ↓
EventList (click event)
    ↓
App.tsx (setSelectedEventId)
    ↓
EventPanel renders (selected event + figures)
```

## Dependencies to Add

```bash
bun add mapbox-gl
bun add --dev @types/mapbox-gl
```

## Environment Setup

1. **Mapbox API Key:**
   ```bash
   echo "VITE_MAPBOX_TOKEN=your_token" > .env.local
   ```

2. **Add to .gitignore:**
   ```
   .env.local
   ```

3. **TypeScript Support:**
   - Ensure `@types/mapbox-gl` is installed
   - Import types in components: `import mapboxgl from 'mapbox-gl'`

## Build & Development

**No changes to build commands:**
```bash
bun dev          # Start dev server
bun run build    # Type-check + bundle
bun run lint     # ESLint
bun run preview  # Serve production build
```

## Performance Considerations

- **Mapbox initialization:** Load asynchronously, show loading state
- **Event data:** Keep JSON file size reasonable (~75-100 events, ~150KB max)
- **Images:** Optimize header images (compress to <200KB each)
- **Re-renders:** Use useMemo for derived state, avoid inline object/array creation
- **Map updates:** Only update Mapbox layers on actual data changes (not on every render)

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile: Phase 2 (not required for MVP)

## Deployment

- No changes to existing deployment pipeline
- Mapbox token should be injected at build time (environment variable)
- Static site deployment works (Mapbox is client-side only)
