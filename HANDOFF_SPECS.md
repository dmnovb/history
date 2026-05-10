# Historical Events Map — MVP Handoff Specifications

## 1. Problem Statement

**User Pain Point:**
The user needs comprehensive, contextual historical knowledge without fragmented research across Wikipedia pages or deep reading sessions. Current approach: scattered information across poor information architecture.

**Solution:**
A **gamified, map-based historical knowledge app** that allows users to:
- Explore history by geography (click a country → see its events)
- Understand interconnections between events and figures
- Access rich, curated narratives in one place
- Stay within the app (no context switching to external sites)

**Why the Map?**
Maps provide a natural, engaging entry point that gamifies discovery. Clicking a country feels like exploration, which improves learning retention and engagement.

---

## 2. MVP Scope

### 2.1 Geographic & Temporal Scope

- **Time Period:** 1 AD - Present (2000 years of European + US history)
- **Geographic Focus:** Europe + US only
- **Map Display:** Full world map visible, but **only Europe/US countries are interactive/clickable**
- **Non-interactive regions:** Grayed out or visually distinct; clicking does nothing

### 2.2 Content Scope

**Events:** 75-100 major historical events
- Examples: Fall of Rome, Medieval period markers, Renaissance, Reformation, Industrial Revolution, American Revolution, Civil War, WWI, WWII, Cold War
- Each event includes:
  - Title and date/era
  - Location (country/region)
  - 3-5 paragraph narrative (comprehensive but focused)
  - List of key figures involved
  - Geographic anchor (which country/countries)

**Figures:** 100-200 historical figures
- Mix of ancient figures (existing: Julius Caesar, Cleopatra, Hannibal) + new Europe/US figures
- Each figure includes:
  - Name
  - Birth/death years
  - Role/occupation (short description)
  - Events they're linked to
  - Brief bio if space allows

### 2.3 MVP Features (in order of priority)

1. **Mapbox Integration**
   - Full world map visible
   - Europe/US countries clickable/interactive
   - Hover states (cursor change, subtle highlight)
   - Event count badge per country (e.g., "France: 12 events")

2. **Event Panel**
   - Triggered when user clicks a country
   - Shows list of events in that country
   - Click event → detailed event panel slides in
   - Event panel includes:
     - Civ 6-style header image
     - Event title, date, location
     - 3-5 paragraph narrative
     - **Figures Involved** section (names + role, not clickable in MVP)
     - Related context (timeline, previous/next events in that country)

3. **Navigation**
   - Back button to return to country list
   - Sticky header showing current country/event
   - Smooth panel transitions

### 2.4 NOT in MVP (Phase 2+)

- ❌ Figure detail panels (click figure name → view figure details)
- ❌ Event-to-event linking (see related events from other countries)
- ❌ Full "Obsidian-like" tagging system
- ❌ Search/filter interface
- ❌ Timeline view
- ❌ User accounts, bookmarks, or persistence
- ❌ Mobile-responsive optimization (build for desktop first)

---

## 3. Data Model

### 3.1 Data Structure

All data stored as hardcoded JSON in the repository (like `seedPeople.ts`).

#### Event Schema

```typescript
interface HistoricalEvent {
  id: string;
  title: string;
  date: string | { start: number; end: number }; // "1789" or {start: 1789, end: 1799}
  era: string; // "Medieval", "Renaissance", "Industrial Revolution", etc.
  country: string; // Single country (primary location)
  countries?: string[]; // Optional: affected regions
  summary: string; // 2-3 sentence summary
  narrative: string; // 3-5 paragraph comprehensive narrative
  headerImage?: string; // URL or path to Civ 6-style header image
  figures: string[]; // Array of figure IDs involved
  relatedEvents?: string[]; // Event IDs of related events (Phase 2)
  tags?: string[]; // Optional: thematic tags (Phase 2)
  sources?: string[]; // URLs or citations
}
```

#### Figure Schema

```typescript
interface HistoricalFigure {
  id: string;
  name: string;
  birth: number | null;
  death: number | null;
  era: string; // "Ancient", "Medieval", "Modern", etc.
  role: string; // "Roman General", "American President", "Philosopher", etc.
  description?: string; // Brief bio (optional for MVP)
  events: string[]; // Event IDs this figure is involved in
  countries?: string[]; // Countries associated with figure
}
```

#### Country Schema (for map)

```typescript
interface Country {
  id: string;
  name: string;
  code: string; // ISO 3166-1 alpha-2 (e.g., "FR", "US")
  latitude: number;
  longitude: number;
  eventCount: number; // Total events in this country
  isInteractive: boolean; // True for Europe/US only
}
```

### 3.2 Data Organization

```
src/
  data/
    events.ts          # Array of ~75-100 HistoricalEvent objects
    figures.ts         # Array of ~100-200 HistoricalFigure objects
    countries.ts       # Array of Country objects (Europe/US)
    seedPeople.ts      # Keep existing ancient figures
```

---

## 4. Technical Stack

### 4.1 Frontend

| Layer | Technology | Notes |
|-------|-----------|-------|
| Framework | React 19 | Keep existing setup |
| Build Tool | Vite | Already in use |
| Styling | Tailwind v4 | Already in use |
| Map | Mapbox GL JS | New; requires API key setup |
| State | React hooks (useState, useMemo) | Keep current pattern |
| Language | TypeScript | Enforce types for data |

### 4.2 Build & Deploy

- Same `bun dev`, `bun run build`, `bun run lint` commands
- Deploy same as current app
- Mapbox tileset: Use Mapbox's default map styles (customize for warm aesthetic)

### 4.3 Dependencies to Add

```json
{
  "mapbox-gl": "^3.x.x"
}
```

---

## 5. Design System

### 5.1 Aesthetic Direction

**Keep the warm Warp-inspired design** from the recent redesign:
- Warm dark background (#1a1714)
- Warm parchment text (#faf9f6)
- Semi-transparent borders (rgba(226, 226, 226, 0.35))
- Rounded cards (12px border-radius)
- Pill buttons (50px radius)
- Matter font family (Regular 400, Medium 500 only for emphasis)

### 5.2 Mapbox Customization

- **Base map style:** Customize Mapbox's default dark style to match warm aesthetic
  - Swap cold grays for warm grays
  - Ensure readability on dark background
  - Interactive countries: highlight in warm accent color (#afaeac or #868584)
  - Non-interactive countries: muted/grayed out

- **Event count badges:** Overlay on countries
  - Style: Small, rounded pill with event count
  - Color: Warm secondary text (#afaeac)
  - Example: "France: 12"

### 5.3 Event Panel Styling

- **Header Image:** Civ 6-inspired (rich, detailed historical artwork)
  - Height: 200-250px
  - Full-bleed, rounded bottom corners
  - Overlay title at bottom

- **Content Area:**
  - Title, date, location at top (warm parchment text)
  - Narrative in readable column (18-20px font, 1.5-1.6 line-height)
  - **Figures Involved** section: Each figure as a list item
    - Format: `**Name** — Role/Description`
    - Example: `**Julius Caesar** — Roman General and Statesman`
  - Subtle borders, generous spacing

### 5.4 Color Tokens (Reuse from existing design)

- Primary text: #faf9f6 (Warm Parchment)
- Secondary text: #afaeac (Ash Gray)
- Tertiary text: #868584 (Stone Gray)
- Button background: #353534 (Earth Gray)
- Borders: rgba(226, 226, 226, 0.35) (Mist Border)
- Background: #1a1714 (Deep Void)

---

## 6. User Flows

### 6.1 Primary User Flow

```
1. App loads
   → Full world map visible
   → Europe/US countries highlighted as interactive
   → Non-interactive regions grayed out
   → Event count badges shown on each country

2. User clicks a country (e.g., France)
   → Country zooms or is highlighted
   → Sidebar/panel appears with list of events in that country
   → Each event shows title, date, brief summary

3. User clicks an event (e.g., "French Revolution")
   → Event detail panel slides in/expands
   → Shows:
     - Civ 6 header image
     - Event title, date, location
     - 3-5 paragraph narrative
     - Figures involved (names + role)

4. User reads narrative
   → Can scroll to read full content
   → Can see figure names and roles
   → Can return to country list (back button)

5. User clicks another country
   → Previous event panel closes
   → New country's events appear
   → Cycle repeats
```

### 6.2 Interaction States

| State | Behavior |
|-------|----------|
| Map Load | Show full world, highlight Europe/US, show event counts |
| Hover Country (Interactive) | Subtle highlight, cursor changes to pointer |
| Hover Country (Non-Interactive) | Cursor stays default, no change |
| Click Country | Event list appears in side panel |
| Click Event | Event detail panel opens, shows full content |
| Back Button | Return to previous state (country list or map) |

---

## 7. Content Sourcing & Curation

### 7.1 Event Narratives (3-5 paragraphs each)

**Source:** Wikipedia articles on historical events

**Process:**
1. Identify 75-100 major European/US historical events
2. For each event, extract 2-3 Wikipedia paragraphs as base
3. Use Claude AI to:
   - Condense if needed (Wikipedia can be verbose)
   - Rewrite for clarity and engagement
   - Ensure 3-5 cohesive paragraphs
   - Keep narrative focused (no tangents)
4. Manually review and refine
   - Check for accuracy
   - Ensure readability
   - Verify figure names and roles

**Timeline:** ~50-100 hours (depending on how many you curate initially; can be iterative)

**Format:** Stored as plain strings in `events.ts`, not HTML or Markdown (simple text for now)

### 7.2 Header Images

**Source:** Public domain or licensed images

**Options:**
- Wikimedia Commons (public domain)
- Creative Commons search (with proper attribution)
- AI-generated (DALL-E, Midjourney) if budget allows
- Existing game art references (Civ 6, Europa Universalis) for style inspiration

**Note:** For MVP, you can use placeholder images or simple gradients; refine visuals in Phase 2.

### 7.3 Figure Data

**Source:** Existing `seedPeople.ts` + Wikipedia

**Process:**
1. Keep existing ancient figures (Julius Caesar, Cleopatra, Hannibal)
2. Add new figures involved in Europe/US events
3. For each figure:
   - Name, birth/death years
   - Role (e.g., "American President", "French Revolutionary")
   - List of event IDs they're involved in
   - Brief description (optional; can be Phase 2)

---

## 8. Technical Implementation Guide

### 8.1 Phase 1: Setup & Mapbox Integration

1. **Install Mapbox GL JS**
   ```bash
   bun add mapbox-gl
   ```

2. **Get Mapbox API Key**
   - Sign up at mapbox.com
   - Create access token
   - Add to `.env.local`: `VITE_MAPBOX_TOKEN=your_token`

3. **Create Map Component**
   - Location: `src/map/MapContainer.tsx`
   - Initialize Mapbox GL instance
   - Load world map
   - Highlight Europe/US countries
   - Add click handlers for interactive countries

4. **Create Country/Event Data Files**
   - `src/data/countries.ts` (list of countries with event counts)
   - `src/data/events.ts` (sample 5-10 events for testing)
   - `src/data/figures.ts` (relevant figures)

### 8.2 Phase 2: Event Panel UI

1. **Create Event Panel Component**
   - Location: `src/events/EventPanel.tsx`
   - Accept event data as prop
   - Render Civ 6-style header
   - Render narrative in readable format
   - Render figures list

2. **Update App.tsx State**
   - Add state for selected country
   - Add state for selected event
   - Add state for panel visibility
   - Manage navigation (back button, etc.)

3. **Add Styling**
   - Use Tailwind classes (consistent with existing design)
   - Ensure warm aesthetic
   - Test readability at multiple font sizes

### 8.3 Phase 3: Content Population

1. **Curate & Write Event Narratives**
   - 75-100 events, 3-5 paragraphs each
   - Source from Wikipedia + AI assist
   - Add to `events.ts`

2. **Populate Figures**
   - Link figures to events
   - Add roles and descriptions
   - Update `figures.ts`

3. **Add Images**
   - Find or create header images for events
   - Store in `public/images/events/`
   - Reference in event objects

---

## 9. File Structure (Post-Implementation)

```
history/
├── src/
│   ├── data/
│   │   ├── countries.ts        # Country list with event counts
│   │   ├── events.ts           # 75-100 historical events
│   │   ├── figures.ts          # 100-200 historical figures
│   │   └── seedPeople.ts       # Keep existing ancient figures
│   │
│   ├── map/
│   │   └── MapContainer.tsx    # Mapbox map component
│   │
│   ├── events/
│   │   ├── EventPanel.tsx      # Event detail panel
│   │   └── EventList.tsx       # List of events for a country
│   │
│   ├── App.tsx                 # Main app (update state management)
│   ├── index.css               # Keep existing warm design
│   └── main.tsx
│
├── public/
│   └── images/
│       └── events/             # Header images for events
│
├── .env.local                  # Mapbox token (gitignore)
├── HANDOFF_SPECS.md            # This file
├── CLAUDE.md                   # Update with new architecture
└── package.json
```

---

## 10. Success Criteria for MVP

- ✅ Mapbox loads and displays world map
- ✅ Europe/US countries are interactive (clickable, event counts visible)
- ✅ Clicking a country shows list of events
- ✅ Clicking an event shows full event detail panel
- ✅ Event panel displays Civ 6-style header, narrative, figures
- ✅ Back button navigates correctly
- ✅ Design is warm and cohesive (matches existing aesthetic)
- ✅ No external context switches (all content in-app)
- ✅ App is performant (Mapbox doesn't cause lag)

---

## 11. Phase 2+ Roadmap (Future)

Once MVP is solid:

1. **Figure Detail Panels** — Click figure name → see full figure bio, events involved
2. **Event-to-Event Linking** — "See also" section showing related events in other countries
3. **Timeline View** — Chronological view alongside map
4. **Search & Filter** — Find events by keyword, era, or figure
5. **Obsidian-like Tagging** — Full knowledge graph with bidirectional links
6. **Mobile Responsiveness** — Adapt map and panels for smaller screens
7. **Image Enhancements** — Better quality Civ 6-style artwork
8. **Expand Geography** — Add other regions (Asia, Africa, Americas)
9. **Expand Timeline** — Pre-1 AD ancient history, post-2000 modern events

---

## 12. Quick Reference: Key Decisions

| Aspect | Decision |
|--------|----------|
| **Scope** | 75-100 events, 1 AD - present, Europe/US only |
| **Map** | Full world visible, only Europe/US interactive |
| **Event Content** | 3-5 paragraphs per event, Wikipedia sourced + AI curated |
| **Figures** | Names + role shown in event panel (no detail panels in MVP) |
| **Tech Stack** | React 19 + Vite + Mapbox GL JS, hardcoded JSON |
| **Design** | Warm Warp aesthetic (keep existing, customize Mapbox) |
| **First Build** | Full vertical slice (one country, 5-10 events end-to-end) |
| **MVP Features** | Map, country list, event list, event detail panel |
| **Not in MVP** | Figure panels, event linking, search, tagging, mobile |

---

## 13. Next Steps

1. **Immediate:** Set up Mapbox account and API key
2. **Week 1:** Build Mapbox integration + basic country data structure
3. **Week 2:** Build event panel UI component
4. **Week 3+:** Curate content (events, figures, images)
5. **Iterate:** Test with initial data, refine UX, expand event count

---

**Document Version:** 1.0  
**Last Updated:** 2026-05-09  
**Owner:** @boyan  
**Status:** Ready for implementation
