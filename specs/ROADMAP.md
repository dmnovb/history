# Roadmap: MVP → Phase 2+

## MVP (Current)

**Status:** Design phase  
**Scope:** Map → Country → Events → Event panel

### MVP Features

- Mapbox world map with Europe/US interactive
- Event count badges per country
- Click country → list events
- Click event → detail panel (Civ 6 header, 3-5 paragraph narrative, figures)
- Back navigation

### MVP Data

- 75-100 events (Europe/US, 1 AD - present)
- 100-200 figures (mix of ancient + new)
- ~20-30 header images

### Success Criteria

- ✅ Mapbox loads smoothly
- ✅ Events display in readable panels
- ✅ No context switching (all in-app)
- ✅ Warm design aesthetic maintained
- ✅ Navigation flows naturally

---

## Phase 2: Figure Details & Deeper Linking

### New Features

**Figure Detail Panels**
- Click figure name in event → view figure's full biography
- Show all events figure is involved in
- Add figure description (expanded bio)

**Event-to-Event Linking**
- Show "Related Events" in event panel
  - Events that caused this one
  - Events this one caused
  - Concurrent events in other regions
- Create bidirectional links between events

**Improved Navigation**
- Breadcrumb trail: Map → Country → Event → Figure → (linked Event)
- Better "back" logic (go back to previous context, not just home)

### Data Changes

- Add `relatedEvents: string[]` to Event schema
- Expand figure `description` field (optional in MVP)
- Potentially expand event count (100+ events)

### Implementation

1. Create `src/figures/FigurePanel.tsx`
2. Add state for selected figure in App.tsx
3. Wire up click handlers on figure names
4. Manually curate event-to-event relationships
5. Update back/navigation logic

---

## Phase 3: Search, Filtering & Obsidian-like Tagging

### New Features

**Full-Text Search**
- Search events by title, narrative content
- Search figures by name, role
- Show results with context snippets

**Filtering & Tags**
- Add `tags: string[]` to events
  - Examples: "war", "culture", "politics", "technology", "science"
- Filter events by tag
- Show tag cloud or filter UI

**Knowledge Graph View**
- Visual graph showing event and figure connections
- Click nodes to navigate
- Zoom/pan through history

**Advanced Navigation**
- Timeline view: horizontal timeline showing events chronologically
- By category: filter events by theme (wars, cultural movements, etc.)
- By era: Medieval, Renaissance, Industrial, etc.

### Data Changes

- Add comprehensive tags to all events
- Potentially expand data volume (200+ events)

### Implementation

1. Implement Fuse.js for client-side full-text search
2. Create search UI component
3. Add filtering logic to event list
4. Create tag cloud/filter interface
5. Consider graph visualization library (D3, Cytoscape, or simple canvas)

---

## Phase 4: Timeline & Geographic Expansion

### New Features

**Timeline View**
- Horizontal timeline showing events chronologically
- Hover to see event summary
- Click to navigate to event panel

**Geographic Expansion**
- Add Middle East, Asia, Africa, Americas (pre-1776)
- Show global context for European/US events
- Understand how regions influenced each other

**Compare Regions**
- Side-by-side view of concurrent events in different regions
- Answer: "What was happening in China when Rome fell?"

### Data Changes

- Expand event count to 300+ (global history)
- Add more figure links between regions
- Better geographical tagging

### Implementation

1. Mapbox: Make all countries interactive
2. Create timeline component (React timeline library or custom)
3. Expand data (50-100 hours of content curation)
4. Add "compare regions" feature

---

## Phase 5: Mobile, Persistence & Social

### New Features

**Mobile Responsive**
- Touch-friendly UI
- Bottom sheet for event details (instead of side panel)
- Mobile map controls

**Persistence**
- Save favorite events/figures
- Create personal timelines
- Bookmark "paths" through history
- Local storage or user accounts

**Sharing & Social**
- Share events on social media
- Generate shareable "history cards"
- Collaborative learning features

### Data Changes

- User data model (bookmarks, preferences)
- Sharing metadata

### Implementation

1. Responsive design: mobile breakpoints
2. Local storage or backend for user data
3. Share buttons, card generation
4. Potential social features (comments, collections)

---

## Phase 6: AI & Personalization

### Potential Features

**AI-Powered Narrative Generation**
- Generate event narratives automatically from sources
- Keep curated narratives as "canon", AI as fallback

**Personalized Learning Paths**
- "Tell me about wars in France" → AI creates curated timeline
- Adaptive recommendations based on browsing history

**Interactive Timelines**
- "What if" scenarios (historical counterfactuals)
- Branching timelines exploring alternate histories

**Voice & Conversational**
- Ask questions about history in natural language
- AI explains connections and context

### Implementation

- Requires Claude API or similar
- Significant architectural changes
- User account system required

---

## Dependency Graph

```
MVP (Map + Events + Figures)
  ├→ Phase 2 (Figure Panels + Event Linking)
  │   ├→ Phase 3 (Search + Tags + Graph)
  │   └→ Phase 4 (Timeline + Geographic Expansion)
  │       └→ Phase 5 (Mobile + Persistence + Social)
  │           └→ Phase 6 (AI + Personalization)
  └→ Content Expansion (runs in parallel)
      ├→ 75-100 events (MVP)
      ├→ 150-200 events (Phase 2-3)
      ├→ 300+ events (Phase 4)
      └→ Global history coverage (Phase 5+)
```

---

## Priority Tiers

### Must-Have (MVP)
- Map interface
- Event detail panels
- Warm design aesthetic
- Basic navigation

### Should-Have (Phase 2-3)
- Figure detail panels
- Event-to-event linking
- Search functionality
- Tags/filtering

### Nice-to-Have (Phase 4+)
- Timeline view
- Geographic expansion
- Mobile support
- User persistence
- AI features

### Nice-to-Have-Later (Phase 5+)
- Social sharing
- Collaborative learning
- Voice interface
- Advanced AI

---

## Resource Requirements by Phase

| Phase | Dev Work | Content Work | Complexity |
|-------|----------|--------------|------------|
| MVP | Mapbox setup, components, state | 75-100 events, 100-200 figures | Medium |
| Phase 2 | Figure panels, event linking | Curate relationships | Medium |
| Phase 3 | Search, filtering, tags | Tag all events | Medium-High |
| Phase 4 | Timeline view, map expansion | 200+ events globally | High |
| Phase 5 | Mobile UI, persistence layer | Social/sharing features | High |
| Phase 6 | AI integration | Automated narratives | Very High |

---

## Open Questions for Future Phases

1. **Geographic scope:** Should we eventually cover all of human history globally?
2. **Depth vs. breadth:** More events with shallow coverage, or fewer events with deep dives?
3. **Multimedia:** Should we add video, images, audio (primary source readings)?
4. **Collaboration:** Should users contribute content or is this curated-only?
5. **Monetization:** Is this a personal project or a product? (Affects Phase 5+ decisions)

---

## Notes

- **Parallelizable:** Content curation can happen while dev builds features
- **Flexible scope:** Can add/remove features based on interest and time
- **User feedback:** MVP should be tested with actual users before committing to Phase 2
- **Personal project:** No deadline pressure — iterate based on learning, not metrics
