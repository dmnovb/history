# Implementation Checklist

## Phase 1: Setup & Mapbox Integration

### Mapbox Setup
- [ ] Create Mapbox account at mapbox.com
- [ ] Generate access token
- [ ] Add to `.env.local`: `VITE_MAPBOX_TOKEN=...`
- [ ] Add `.env.local` to `.gitignore`

### Install Dependencies
- [ ] `bun add mapbox-gl @types/mapbox-gl`
- [ ] Verify TypeScript types load correctly

### Create Data Structures
- [ ] Create `src/data/countries.ts`
  - List all ~30-40 Europe/US countries
  - Mark `isInteractive: true` for Europe/US
  - Add `code` (ISO) and `eventCount` fields
- [ ] Create `src/data/events.ts` (stub)
  - Add 5-10 sample events for testing
  - Follow HistoricalEvent interface
- [ ] Create `src/data/figures.ts` (stub)
  - Add figures linked to sample events
  - Follow HistoricalFigure interface

### Build MapContainer Component
- [ ] Create `src/map/MapContainer.tsx`
  - Initialize Mapbox GL instance
  - Load dark map style (customize for warm aesthetic)
  - Add data source for countries
  - Add click handler for interactive countries
  - Style interactive vs. non-interactive countries differently

### Map Styling
- [ ] Customize Mapbox dark style:
  - Replace cold grays with warm grays
  - Test readability on dark background
- [ ] Add event count badge layer
  - Small pill overlays on interactive countries
  - Format: "France: 12"

### Update App.tsx
- [ ] Add state: `selectedCountry`, `selectedEventId`
- [ ] Render MapContainer with click handler
- [ ] Wire up navigation logic (set/unset selected country)

### Test
- [ ] Mapbox loads without errors
- [ ] Click interactive country → triggers handler
- [ ] Click non-interactive country → nothing happens
- [ ] Event count badges appear on interactive countries

---

## Phase 2: Event UI Components

### EventList Component
- [ ] Create `src/events/EventList.tsx`
  - Accept country code and filtered events
  - Render as scrollable list/panel
  - Show event title, date, brief summary
  - Click event → trigger onEventClick
  - Include back button

### EventPanel Component
- [ ] Create `src/events/EventPanel.tsx`
  - Accept event object and figures array
  - Render Civ 6-style header image
  - Render title, date, location
  - Render full narrative (3-5 paragraphs)
  - Render figures section: "**Name** — Role"
  - Include back button
  - Style per design system

### Navigation State
- [ ] Update App.tsx:
  - Show EventList when country selected
  - Show EventPanel when event selected
  - Handle back buttons (reset state)

### Styling
- [ ] Apply warm design system colors
  - Use #faf9f6 for primary text
  - Use #afaeac for secondary text
  - Use rgba(226, 226, 226, 0.35) for borders
- [ ] Typography: 18px body, 40px headings, weight 400
- [ ] Responsive padding/spacing
- [ ] Smooth transitions between panels

### Test
- [ ] Click country → EventList appears
- [ ] Click event → EventPanel opens
- [ ] Back button returns to EventList
- [ ] Back button from EventList returns to map
- [ ] Event narrative reads well (line length, contrast)

---

## Phase 3: Content Population

### Curate Events (50-100 hours estimated)
- [ ] Identify 75-100 major European/US historical events (1 AD - present)
- [ ] For each event:
  - [ ] Research on Wikipedia
  - [ ] Extract 2-3 key paragraphs
  - [ ] Use Claude to rewrite/expand to 3-5 cohesive paragraphs
  - [ ] Manually review for accuracy
  - [ ] Add to `src/data/events.ts`

### Populate Figures
- [ ] Identify figures involved in curated events
- [ ] Keep existing ancient figures (Julius Caesar, Cleopatra, Hannibal)
- [ ] Add new figures for Europe/US events
- [ ] For each figure:
  - [ ] Birth/death year
  - [ ] Role (e.g., "French Revolutionary", "American President")
  - [ ] Brief description (optional)
  - [ ] Link to events they're involved in
  - [ ] Add to `src/data/figures.ts`

### Source & Optimize Images
- [ ] Find/create Civ 6-style header images for ~20-30 key events
- [ ] Optimize images (compress, resize to <200KB)
- [ ] Store in `public/images/events/`
- [ ] Add URLs to event objects in `events.ts`
- [ ] Placeholder images for remaining events

### Link Events & Figures
- [ ] Update `events.ts`: add figure IDs to each event
- [ ] Update `figures.ts`: add event IDs to each figure
- [ ] Verify bidirectional linking is consistent

### Test Content
- [ ] Click France → see 10+ events
- [ ] Click event → narrative renders correctly
- [ ] Figures display with names and roles
- [ ] Images load (or graceful fallback)
- [ ] No broken references

---

## Phase 4: Polish & Optimization

### Performance
- [ ] Lazy-load images (use native loading="lazy")
- [ ] Optimize Mapbox layers (don't re-render unnecessarily)
- [ ] Check bundle size
- [ ] Test on slower networks (throttle in DevTools)

### Accessibility
- [ ] Test color contrast (WCAG AA minimum 4.5:1)
- [ ] Add alt text to images
- [ ] Add aria-labels to buttons
- [ ] Test keyboard navigation (Tab, Enter)
- [ ] Test screen reader (NVDA, JAWS, or VoiceOver)

### Design Polish
- [ ] Verify warm colors throughout (no cold blacks/whites)
- [ ] Check font sizes and line heights
- [ ] Ensure consistent spacing (8px base unit)
- [ ] Test hover/focus states on all interactive elements
- [ ] Smooth transitions between panels

### Testing
- [ ] Functional testing: all user flows work
- [ ] Edge cases: empty event list, missing images, etc.
- [ ] Cross-browser: Chrome, Firefox, Safari, Edge
- [ ] Responsive: desktop 1024px+ (mobile is Phase 2)

---

## Success Criteria (MVP Complete)

- ✅ Mapbox loads, shows world map
- ✅ Europe/US countries are interactive and highlighted
- ✅ Event count badges visible on interactive countries
- ✅ Click country → EventList appears
- ✅ Click event → EventPanel opens with full content
- ✅ Back buttons work correctly
- ✅ Warm design system applied throughout
- ✅ 75-100 events with 3-5 paragraph narratives
- ✅ 100-200 figures linked to events
- ✅ No external context switches (all content in-app)
- ✅ Performance acceptable (Mapbox doesn't lag)

---

## Common Pitfalls to Avoid

1. **Mapbox not loading:** Verify token in `.env.local` and restart dev server
2. **Stale state:** Use `useMemo` for derived state (events filtered by country)
3. **Performance:** Don't re-initialize Mapbox on every render (use `useRef`)
4. **Image loading:** Optimize before adding (compress to <200KB)
5. **Typography:** Stick to weight 400 (Regular) — no bold except emphasis
6. **Colors:** Use the warm palette consistently; no cold grays or pure white
7. **Linking:** Keep figure references consistent between `events.ts` and `figures.ts`
8. **Content rot:** Update specs when design changes; keep docs in sync

---

## Deployment Readiness

Before pushing to production:
- [ ] Mapbox token is in environment (not hardcoded)
- [ ] All images are optimized and loading correctly
- [ ] No console errors or warnings
- [ ] Performance metrics are acceptable
- [ ] Cross-browser testing passed
- [ ] Accessibility checklist completed
