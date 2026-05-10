# Agent Handoff: Historical Events Map

## Project Summary

Building a **Mapbox-based historical knowledge app** where users explore European and US history by clicking countries on a map, discovering historical events with rich narratives, and learning about the figures involved.

**Core value:** Comprehensive, interconnected historical knowledge without context-switching to external sites.

**Current status:** Design phase complete. Ready for implementation.

---

## What's Done

### Design & Specifications
- ✅ Complete problem discovery (via grill-me session)
- ✅ MVP scope locked in (75-100 events, 100-200 figures, Europe/US only)
- ✅ Full spec documentation in `/specs/` folder:
  - `00-OVERVIEW.md` — Start here
  - `data/DATA_MODEL.md` — TypeScript interfaces
  - `design/DESIGN_SYSTEM.md` — Warm Warp aesthetic
  - `technical/ARCHITECTURE.md` — Tech stack & file structure
  - `technical/IMPLEMENTATION.md` — Detailed checklist
  - `content/SOURCING.md` — How to curate events/figures
  - `ROADMAP.md` — Phases 2-6

### Design System
- ✅ Warm Warp-inspired aesthetic implemented in `src/index.css`
- ✅ Colors, typography, components all styled
- ✅ App redesigned and tested in browser

### Timeline Structure
- ✅ Century + Era format finalized (e.g., "16th Century (Early Modern)")
- ✅ Even distribution across 7 time buckets (15th-21st centuries)

---

## What Needs to Happen

### Phase 1: Mapbox Integration & Core UI (Start here)

**Goal:** Get the map working with event navigation.

1. **Mapbox Setup**
   - [ ] Install: `bun add mapbox-gl @types/mapbox-gl`
   - [ ] Create `.env.local` with `VITE_MAPBOX_TOKEN=...`
   - [ ] Create `src/map/MapContainer.tsx` component

2. **Data Files**
   - [ ] Create `src/data/countries.ts` (30-40 Europe/US countries)
   - [ ] Create `src/data/events.ts` (stub with 5-10 sample events)
   - [ ] Create `src/data/figures.ts` (figures for sample events)

3. **Event Components**
   - [ ] Create `src/events/EventList.tsx` (list of events for a country)
   - [ ] Create `src/events/EventPanel.tsx` (detail panel with Civ 6 header, narrative, figures)

4. **App State Management**
   - [ ] Update `src/App.tsx` with state for selectedCountry, selectedEventId
   - [ ] Wire up navigation between map → country list → event detail

5. **Test**
   - [ ] Mapbox loads
   - [ ] Click Europe/US countries
   - [ ] See event list
   - [ ] See event detail panel

### Phase 2: Content Population

**Goal:** Populate MVP with real historical data.

1. **Event Narratives** (~50-100 hours)
   - [ ] Identify 75-100 major European/US events (1 AD - present)
   - [ ] For each: research → extract → AI rewrite → manual review
   - [ ] Add to `src/data/events.ts`

2. **Figures** 
   - [ ] Create figure entries (100-200 figures)
   - [ ] Link to events (bidirectional references)
   - [ ] Add to `src/data/figures.ts`

3. **Images**
   - [ ] Find/create Civ 6-style header images for key events
   - [ ] Optimize and store in `public/images/events/`
   - [ ] Add URLs to event objects

### Phase 3: Polish & Test

- [ ] Performance optimization
- [ ] Accessibility checklist
- [ ] Cross-browser testing
- [ ] Warm design system verification

---

## Key Files & Directories

```
history/
├── specs/                          # All design documentation (read-only)
│   ├── 00-OVERVIEW.md
│   ├── data/DATA_MODEL.md
│   ├── design/DESIGN_SYSTEM.md
│   ├── technical/
│   │   ├── ARCHITECTURE.md
│   │   └── IMPLEMENTATION.md
│   ├── content/SOURCING.md
│   └── ROADMAP.md
│
├── src/
│   ├── data/                       # Data files (to create)
│   │   ├── countries.ts
│   │   ├── events.ts
│   │   └── figures.ts
│   │
│   ├── map/                        # Mapbox integration (to create)
│   │   └── MapContainer.tsx
│   │
│   ├── events/                     # Event UI (to create)
│   │   ├── EventPanel.tsx
│   │   └── EventList.tsx
│   │
│   ├── App.tsx                     # Update: add state management
│   └── index.css                   # Already styled (don't modify)
│
├── public/images/events/           # Event header images (to populate)
│
├── .env.local                      # Create: Mapbox token (gitignore!)
├── CLAUDE.md                       # Update: new architecture
└── AGENT_HANDOFF.md               # This file
```

---

## Tech Stack (No Changes Needed)

- **React 19** + Vite + TypeScript + Tailwind v4
- **New:** Mapbox GL JS (client-side map)
- **Data:** Hardcoded JSON in TypeScript files
- **Design:** Warm Warp aesthetic (already in CSS)

Build commands (unchanged):
```bash
bun dev          # Start dev server
bun run build    # Type-check + bundle
bun run lint     # ESLint
```

---

## Critical Details

### Data Model

**Event schema** (from `specs/data/DATA_MODEL.md`):
```typescript
{
  id: "french-revolution",
  title: "The French Revolution",
  date: { start: 1789, end: 1799 },
  era: "18th Century (Enlightenment)",
  century: 18,
  country: "france",
  summary: "2-3 sentence summary",
  narrative: "3-5 paragraph narrative",
  headerImage: "/images/events/french-revolution.jpg",
  figures: ["robespierre", "napoleon", ...],
  sources: ["https://en.wikipedia.org/..."]
}
```

**Figure schema:**
```typescript
{
  id: "napoleon",
  name: "Napoleon Bonaparte",
  birth: 1769,
  death: 1821,
  era: "18th-19th Century",
  role: "French Military Commander & Emperor",
  events: ["french-revolution", "napoleonic-wars", ...],
  countries: ["france"]
}
```

**Country schema:**
```typescript
{
  id: "france",
  name: "France",
  code: "FR",
  isInteractive: true,
  eventCount: 12
}
```

### Design System (No Changes Needed)

All colors, typography, and components are defined in `src/index.css`.

**Key tokens:**
- Primary text: `#faf9f6` (Warm Parchment)
- Secondary text: `#afaeac` (Ash Gray)
- Button: `#353534` (Earth Gray)
- Border: `rgba(226, 226, 226, 0.35)` (Mist Border)
- Background: `#1a1714` (Deep Void)

Mapbox must be customized to match this warm palette (dark style with warm grays).

### Timeline: Century + Era Format

Events are organized by century with era context:

| Century | Era | Years |
|---------|-----|-------|
| 15th | Late Medieval/Renaissance | 1400-1499 |
| 16th | Early Modern | 1500-1599 |
| 17th | Early Modern | 1600-1699 |
| 18th | Enlightenment | 1700-1799 |
| 19th | Industrial & Nationalism | 1800-1899 |
| 20th | Modern | 1900-1999 |
| 21st | Contemporary | 2000-present |

---

## Content Sourcing Overview

See `specs/content/SOURCING.md` for detailed process.

**Quick workflow per event:**
1. Find Wikipedia article
2. Extract 2-3 key paragraphs
3. Use Claude prompt to rewrite into 3-5 cohesive paragraphs
4. Manually review for accuracy
5. Find header image (Wikimedia Commons, etc.)
6. Add to `events.ts`

**Estimated effort:** 50-100 hours for full MVP (parallelizable).

---

## Starting the Implementation

### Step 1: Read the Specs
- Start with `specs/00-OVERVIEW.md`
- Then read `specs/technical/IMPLEMENTATION.md` (checklist)
- Refer to other specs as needed

### Step 2: Set Up Mapbox
1. `bun add mapbox-gl @types/mapbox-gl`
2. Create `.env.local` with token
3. Create `src/map/MapContainer.tsx`
4. Test map loads in browser

### Step 3: Build Core Components
1. Create data files (stubs with 5-10 sample events)
2. Create `EventList.tsx` and `EventPanel.tsx`
3. Update `App.tsx` state management
4. Wire up navigation

### Step 4: Test MVP Flow
- Map loads ✓
- Click country → see events ✓
- Click event → see detail panel ✓
- Navigate back ✓

### Step 5: Populate Content
- Follow `specs/content/SOURCING.md`
- Build up to 75-100 events
- Add 100-200 figures
- Gather/optimize images

---

## Debugging & Reference

### If Mapbox Doesn't Load
- Check `.env.local` for token
- Restart dev server (`bun dev`)
- Verify Mapbox GL CSS imported in `index.css`

### If Navigation Breaks
- Check App.tsx state logic (selectedCountry, selectedEventId)
- Verify event/figure IDs match between data files
- Use browser DevTools to inspect React state

### Key References
- Mapbox docs: https://docs.mapbox.com/mapbox-gl-js/
- Natural Earth (if adding historical borders): https://naturalearthdata.com/
- Design system details: `specs/design/DESIGN_SYSTEM.md`

---

## No Time Pressure

This is a personal project. No deadlines. Build at your own pace. 

**Iterative approach:** Start with Phase 1 MVP, validate the experience, then expand.

---

## Next Agent/Person

When handing off to another agent or person:
1. Point them to this file
2. Have them read `specs/00-OVERVIEW.md` and `specs/technical/IMPLEMENTATION.md`
3. Ensure they understand the data model and design system
4. Start them on Phase 1 implementation checklist

---

**Last Updated:** 2026-05-10  
**Status:** Ready for implementation  
**Owner:** @boyan
