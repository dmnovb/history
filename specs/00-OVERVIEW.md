# Historical Events Map — MVP Overview

## The Problem

User needs comprehensive, contextual historical knowledge without fragmented research across Wikipedia. Solution: a gamified, map-based historical knowledge app.

## The Solution

**Map → Country → Events → Event Panel**

Users click a country on a map, see major historical events there, click an event, read a rich 3-5 paragraph narrative with linked figures — all in-app, no context switching.

Why the map? It gamifies discovery and provides a natural geographic entry point.

## MVP Scope at a Glance

- **Time Period:** 1 AD - Present (2000 years)
- **Geography:** Europe + US only (interactive on map)
- **Events:** 75-100 major historical events
- **Figures:** 100-200 historical figures
- **Features:** Map navigation → Event list → Event detail panel
- **Not included:** Figure detail panels, event-to-event linking, search, tagging

## Key Tech Decisions

- **Frontend:** React 19 + Vite + Mapbox GL JS
- **Data:** Hardcoded JSON (like `seedPeople.ts`)
- **Design:** Keep warm Warp aesthetic, customize Mapbox
- **Content:** Wikipedia sourced + AI curated (3-5 paragraphs per event)

## Quick Links

- [Design System](./design/DESIGN_SYSTEM.md)
- [Data Model](./data/DATA_MODEL.md)
- [Technical Architecture](./technical/ARCHITECTURE.md)
- [Content Sourcing](./content/SOURCING.md)
- [Implementation Roadmap](./ROADMAP.md)

## First Steps

1. Read [Data Model](./data/DATA_MODEL.md) to understand structure
2. Read [Architecture](./technical/ARCHITECTURE.md) for build approach
3. Set up Mapbox account
4. Build vertical slice: one country, 5-10 events end-to-end
