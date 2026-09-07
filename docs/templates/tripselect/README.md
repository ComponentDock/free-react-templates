# Tripselect — Implementation Notes

## Source

ColorLib "Multiselect 20" → https://colorlib.com/wp/template/multiselect-20/
Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-20/
Title: "Multi Select #10"

## Structure (section order)

1. **Page wrapper** — full viewport, `#efefef` background, Roboto font
2. **Content area** — centered, `7rem` vertical padding
3. **Heading** — `<h2>` centered, "Multi-Select #10 (Limit to 5)", 20px, Roboto
4. **Widget row 1** — `col-md-5` centered column, `.color-1` wrapper (beige tags)
5. **Widget row 2** — `col-md-5` centered column, `.color-2` wrapper (green tags)
6. **Widget row 3** — `col-md-5` centered column, `.color-3` wrapper (blue tags)
7. **Footer** — Component Dock attribution (replaces original no-footer)

## Design fidelity notes

### Layout

- Single-section page: heading + three stacked widget rows, no navbar/hero/sections
- Each widget in its own `col-md-5` centered row via Bootstrap grid (`row justify-content-center`)
- `mb-3` spacing between rows (Bootstrap margin-bottom ~1rem)
- Generous vertical padding (`7rem 0`) — lots of whitespace
- Responsive: widgets stack at full width on mobile

### Widget (Chosen plugin behavior — replicate in React)

- Click to open dropdown; click again or click outside to close
- Selected items shown as tags/chips inside the container
- Each tag has an "x" close button (positioned top-right)
- Search input embedded in the tag container
- Dropdown shows unselected options in a scrollable list
- Container: `border-radius: 4px`, `box-shadow: 0 1px 4px 0 rgba(0,0,0,0.1)`
- Dropdown: `border-radius: 4px`, `box-shadow: 0 15px 30px 0 rgba(0,0,0,0.2)`
- **Tag colors differ per widget:**
  - Widget 1 (color-1): `#e5e4cc` (warm beige)
  - Widget 2 (color-2): `#c7f0db` (soft green)
  - Widget 3 (color-3): `#d3f4ff` (light blue)
- **Selection limit:** 5 items max per widget (enforced in React, not in original JS)

### Typography

- Font: Roboto (300/400) via Google Fonts
- Heading: 20px, centered
- Paragraph: `#b3b3b3`, weight 300

### Colors

- Background: `#efefef` (light grey)
- Text: `#333` default (Bootstrap), `#b3b3b3` for paragraphs
- Tag backgrounds: per-widget beige/green/blue
- No gradients, no images, no decorative elements

## Data

8 flat options per widget (no groups):

1. Design
2. HTML5
3. CSS3
4. jQuery
5. BS4
6. Bootstrap
7. WordPress
8. FrontEnd

## Component architecture

```
src/
  App.tsx              — page layout (heading + three TripSelect widgets)
  components/
    TripSelectWidget.tsx — single Chosen-style multi-select component (reused 3x)
  index.css            — Tailwind entry + theme tokens
```

### TripSelectWidget component

- Props: `options: string[]`, `placeholder?: string`, `limit?: number`, `tagColor?: string`
- Internal state: `selected: string[]`, `isOpen: boolean`, `search: string`
- Renders: tag container (with selected chips + search input) + dropdown
- Tag color: passed as prop (per-widget color), not cycled
- Keyboard: Escape closes dropdown, arrow keys navigate options
- Accessibility: `role="listbox"`, `aria-expanded`, `aria-label`
- **Limit enforcement:** when `selected.length >= limit`, prevent adding more tags

## Differences from Pickbag (Multiselect 19)

| Aspect          | Pickbag             | Tripselect                          |
| --------------- | ------------------- | ----------------------------------- |
| Widget count    | 1                   | 3 stacked                           |
| Selection limit | None                | 5 per widget                        |
| Tag colors      | Cycling palette     | Fixed per-widget (beige/green/blue) |
| Layout          | Single col-md-5 row | Three col-md-5 rows with mb-3       |
| Title           | "Multi-Select #9"   | "Multi-Select #10 (Limit to 5)"     |
