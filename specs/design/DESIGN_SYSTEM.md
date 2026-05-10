# Design System

## Aesthetic Direction

**Keep the warm Warp-inspired design** from the recent app redesign.

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| Primary Text | #faf9f6 | Headings, main content |
| Secondary Text | #afaeac | Body text, secondary info |
| Tertiary Text | #868584 | Muted labels, metadata |
| Muted Text | #666469 | Very subtle text, disabled state |
| Button Background | #353534 | CTA buttons |
| Border | rgba(226, 226, 226, 0.35) | Cards, separators |
| Subtle Border | rgba(226, 226, 226, 0.15) | Internal dividers |
| Overlay Veil | rgba(255, 255, 255, 0.04) | Hover/active states |
| Background | #1a1714 | Page background |
| Surface | #232018 | Cards, panels |

### Typography

- **Font Family:** Inter (Regular 400, Medium 500 only)
- **Body:** 16-18px, line-height 1.5-1.6
- **Headings:** 24-48px, weight 400 (no bold)
- **Labels:** 12-14px, uppercase, letter-spacing 0.15em-0.2em

## Component Styling

### Map Container
- Mapbox dark style customized to match warm palette
- Replace cold grays with warm grays (#868584, #afaeac)
- Interactive countries: Highlight in warm accent color
- Non-interactive countries: Muted/grayed out
- Hover effect: Subtle opacity shift (no color change)

### Event Count Badge
- Small pill (12px height)
- Rounded (50px radius)
- Text: Tertiary gray (#868584)
- Background: Subtle border only or translucent surface
- Position: Overlay on country polygon

### Event Panel Header
- **Height:** 200-250px
- **Image:** Full-bleed, rounded bottom corners (12px)
- **Title Overlay:** At bottom, white text on semi-transparent dark background
- **Style Inspiration:** Civilization 6 (rich, detailed historical artwork)

### Event Panel Content
- **Max Width:** 600-800px (comfortable reading)
- **Padding:** 24-32px
- **Typography:** 
  - Title: 32-40px, weight 400
  - Date/Location: 14px, tertiary gray, uppercase
  - Narrative: 18px, line-height 1.6
  - Figures heading: 14px, uppercase, tertiary gray

### Figures Section

```
FIGURES INVOLVED (uppercase, tertiary gray, 14px)
---
Julius Caesar — Roman General and Statesman
Pompey — Roman General and Statesman
Cleopatra — Queen of Egypt
```

Format: `**Name** — Role/Description`

### Buttons & Links

- **Pill Button:** Background #353534, padding 10px 20px, radius 50px
- **Text Link:** Underline, color #868584, hover to #faf9f6
- **Back Button:** Ghost style, text-only, no background

## Responsive Behavior

**MVP is desktop-first.** Mobile optimization is Phase 2.

Desktop breakpoint: 1024px+
- Full Mapbox with event counts visible
- Side panel for events/details

Tablet/Mobile (Phase 2):
- Map takes full width
- Events as overlay or bottom sheet
- Stacked layout

## Accessibility

- Color contrast: All text meets WCAG AA (4.5:1 minimum)
- Focus states: Visible outline (1-2px border or ring)
- Hover states: Opacity shift, not color-only (works for colorblind users)
- Icons: All icons have aria-labels or accompanying text

## Design Tokens (Tailwind Config Update)

If adding Tailwind theme overrides:

```js
module.exports = {
  theme: {
    colors: {
      'warm-bg': '#1a1714',
      'warm-surface': '#232018',
      'warm-text-primary': '#faf9f6',
      'warm-text-secondary': '#afaeac',
      'warm-text-tertiary': '#868584',
      'warm-button': '#353534',
    },
  },
};
```

## Visual Hierarchy

1. **Main heading (event title):** 40px, primary text, weight 400
2. **Subheading (date, location):** 14px, tertiary text, uppercase
3. **Body narrative:** 18px, primary text, 1.6 line-height
4. **Figure names:** 16px, weight 500, primary text
5. **Figure roles:** 14px, tertiary text
6. **Metadata:** 12px, muted text, uppercase

## References

- Existing app redesign: See `src/index.css`
- Civ 6 aesthetic: Rich, detailed header images with slight vignette/overlay
- Warp inspiration: Warm, editorial, lifestyle-brand feel (not corporate)
