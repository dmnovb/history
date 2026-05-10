# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev          # start dev server (Vite, hot reload)
bun run build    # type-check then bundle (tsc -b && vite build)
bun run lint     # ESLint across all files
bun run preview  # serve the production build locally
```

## Architecture

Single-page React 19 app built with Vite + TypeScript + Tailwind v4. No routing library — state lives entirely in `App.tsx`.

**Data flow:**
- `src/data/seedPeople.ts` — static array of `Person` objects (the only data source for now)
- `App.tsx` — owns all state: `query` (search string) and `selectedId`. Derives `filtered` list via `useMemo`, resolves `selected` person, and renders the two-pane layout
- `src/people/PersonRow.tsx` — list item button in the left sidebar
- `src/people/PersonDetail.tsx` — right-side detail panel; renders sorted infobox key/value pairs
- `src/people/types.ts` — `Person` type: `{ id, displayName, wikiUrl, infobox: Record<string, string> }`

**Styling:** Tailwind v4 utility classes applied inline; dark mode via `dark:` variants (no JS toggle, relies on OS preference). No component library.

**Adding people:** Extend the `seedPeople` array in `src/data/seedPeople.ts` with the `Person` shape.
