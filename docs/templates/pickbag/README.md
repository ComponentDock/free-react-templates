# Pickbag — Implementation Notes

## Source

ColorLib "Multiselect 19" → https://colorlib.com/wp/template/multiselect-19/
Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-19/
Title: "Multi Select #9"

## Structure (section order)

1. **Page wrapper** — full viewport, `#efefef` background, Roboto font
2. **Content area** — centered, `7rem` vertical padding
3. **Heading** — `<h2>` centered, "Multi-Select #9", 20px, Roboto
4. **Select widget** — `col-md-5` centered column, Chosen-style multi-select
5. **Footer** — Component Dock attribution (replaces original no-footer)

## Design fidelity notes

### Layout
- Single-section page: heading + centered widget, no navbar/hero/sections
- `col-md-5` centered via Bootstrap grid (`row justify-content-center`)
- Generous vertical padding (`7rem 0`) — lots of whitespace
- Responsive: stacks on mobile, widget goes full-width

### Widget (Chosen plugin behavior — replicate in React)
- Click to open dropdown; click again or click outside to close
- Selected items shown as tags/chips inside the container
- Each tag has an "x" close button (positioned top-right)
- Search input embedded in the tag container
- Dropdown shows unselected options in a scrollable list
- Container: `border-radius: 4px`, `box-shadow: 0 1px 4px 0 rgba(0,0,0,0.1)`
- Dropdown: `border-radius: 4px`, `box-shadow: 0 15px 30px 0 rgba(0,0,0,0.2)`
- Tag colors: cycling through `#e5e4cc` (beige), `#c7f0db` (green), `#d3f4ff` (blue)

### Typography
- Font: Roboto (300/400) via Google Fonts
- Heading: 20px, centered
- Paragraph: `#b3b3b3`, weight 300

### Colors
- Background: `#efefef` (light grey)
- Text: `#333` default (Bootstrap), `#b3b3b3` for paragraphs
- Tag backgrounds: beige/green/blue cycling
- No gradients, no images, no decorative elements

## Data

8 flat options (no groups, no limits):
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
  App.tsx              — page layout (heading + PickBagSelect)
  components/
    PickBagSelect.tsx  — main Chosen-style multi-select component
  index.css            — Tailwind entry + theme tokens
```

### PickBagSelect component
- Props: `options: string[]`, `placeholder?: string`, `limit?: number`
- Internal state: `selected: string[]`, `isOpen: boolean`, `search: string`
- Renders: tag container (with selected chips + search input) + dropdown
- Tag cycling: assigns colors by index modulo 3
- Keyboard: Escape closes dropdown, arrow keys navigate options
- Accessibility: `role="listbox"`, `aria-expanded`, `aria-label`

## Differences from Groupcap (Multiselect 18)

| Aspect | Groupcap | Pickbag |
|--------|----------|---------|
| Plugin | bootstrap-select | Chosen |
| Selection UI | Checkbox dropdown | Tag/chip container |
| Options | 50 US states, 4 groups | 8 categories, flat |
| Limits | Per-group caps | None |
| Title | "Multi-Select #8 (Limit selection on groups)" | "Multi-Select #9" |
