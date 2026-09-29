# Searchbox — Design Notes & Implementation Outline

Source: ColorLib Search Form V7
Preview: https://colorlib.com/etc/searchf/colorlib-search-7/
Original slug: colorlib-search-7

## Structure (section order)

1. **Full-page background** — `min-h-screen bg-brand-blue flex items-center justify-center`
2. **Search card** — white card, shadow, centered, max-width ~790px
3. **Main search bar** — icon + input + result count (inside card, top)
4. **Advanced search panel** — label + 6 dropdowns in 2×3 grid (inside card, below)
5. **Action buttons** — Search + Delete (bottom of card)

## Component breakdown

- `App.tsx` — renders the single `SearchBox` component
- `components/SearchBox.tsx` — main container (full-screen bg + card)
- `components/MainSearchBar.tsx` — search icon, input, result count
- `components/AdvancedSearch.tsx` — label + dropdown grid + buttons
- `components/SearchDropdown.tsx` — single custom select with underline style
- `components/ActionButton.tsx` — green Search button / text Delete button

## Fidelity notes

- The original uses a `Choices.js` library for custom selects. We replicate this with native `<select>` + custom CSS to match the underline style and chevron.
- The chevron icon is an inline SVG (material-style down arrow), fill #999.
- The dropdown background is transparent, with a 2px solid #ccc bottom border.
- The main search input is 70px tall — use `h-[70px]`.
- Card shadow is `shadow-[0px_8px_20px_0px_rgba(0,0,0,0.15)]`.
- Result count: the number part is green (#57b846), "results" is dark gray.
- Search button: green bg, white text, bold, min-width 100px, h-10, radius 3px.
- Delete button: transparent bg, gray text (#555), bold, hover → black.
- Font: Google Fonts Roboto (400 + 700).
- Responsive: at <768px, dropdown rows become single-column (flex-col).

## Tokens for @theme

```
--brand-blue: #00b5e9
--brand-green: #57b846
--brand-green-hover: #4ea63f
--card-bg: #ffffff
--text-primary: #555555
--text-secondary: #666666
--text-muted: #999999
--border-default: #cccccc
```

## Implementation order

1. Set up app scaffold (copy from simplest existing app, rename)
2. Configure Tailwind theme tokens in `index.css`
3. Build `SearchBox` wrapper (full-screen bg + centered card)
4. Build `MainSearchBar` (icon, input, result count)
5. Build `AdvancedSearch` (label, 6 `SearchDropdown` components)
6. Build `SearchDropdown` (custom select with underline style + chevron)
7. Build `ActionButton` (Search + Delete variants)
8. Wire up `App.tsx`
9. Add responsive styles
10. Tests (Vitest + RTL) — 100% coverage
