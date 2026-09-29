# SearchArc — Design Notes & Task Outline

**Source:** ColorLib "Colorlib Search 3" (slug: `colorlib-search-3`)
**Preview:** https://preview.colorlib.com/theme/colorlib-search-3/ (404 — using downloaded ZIP + screenshot)
**New name:** `searcharc`

## Structure order

1. **Full-viewport background** — solid `#a598ee` lavender, flexbox centering
2. **Form card** — white, max-width 790px, box-shadow, border-radius 3px, flex row
3. **Category dropdown** — left segment, 200px wide, right border separator
4. **Text input** — center segment, flex-grow, "Enter Keywords?" placeholder
5. **Search button** — right segment, 74px wide, green `#63c76a`, magnifying glass SVG
6. **Footer** — Component Dock link

## Section-by-section fidelity notes

### Background
- Solid color `#a598ee`, not an image. Full viewport with flexbox centering.
- `padding: 15px` on the wrapper.

### Form card
- White background, `box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15)`.
- Border-radius 3px (very subtle rounding).
- Flex row layout: `justify-content: space-between`, `align-items: center`.

### Category dropdown (first-wrap)
- Fixed width 200px, `border-right: 1px solid rgba(0, 0, 0, 0.1)`.
- Native `<select>` element with custom styling (no framework).
- Options: Category (placeholder), New Arrivals, Sale, Ladies, Men, Clothing, Footwear, Accessories.
- Chevron arrow: `#e5e5e5` color, positioned via `::after` pseudo-element.
- Font: Poppins 400, 14px, color `#888`.

### Text input (second-wrap)
- `flex-grow: 1` — fills remaining space.
- Height: 68px (desktop), 50px (≤992px).
- Transparent background, no border.
- Text color `#555`, placeholder color `#888`, font-size 16px.
- Padding: `10px 32px`.
- Focus/hover: no outline, no box-shadow, no border change.

### Search button (third-wrap)
- Fixed width 74px, height matches input (68px).
- Background: `#63c76a` (green), hover: `#50c058`.
- White magnifying glass SVG icon, 16px wide.
- Transition: `all .2s ease-out, color .2s ease-out`.
- No border, cursor pointer.

### Responsive behavior
- ≤992px: input height reduces to 50px.
- ≤767px: flex-wrap, segments stack vertically.
  - Each gets `border-bottom: 1px solid rgba(0, 0, 0, 0.1)`.
  - Form card gets `padding: 20px`.
  - Text input gets `border: 1px solid rgba(255, 255, 255, 0.3)`.
  - Dropdown and button take full width.

## Implementation tasks

1. Create `apps/searcharc/` — copy simplest existing search app, rename package
2. Set up `src/index.css` with Tailwind + theme tokens (`--color-brand: #a598ee`, `--color-btn: #63c76a`, `--color-btn-hover: #50c058`)
3. Build `SearchForm.tsx` — the main card component with flex layout
4. Build `CategoryDropdown.tsx` — native select with custom styling
5. Build `SearchInput.tsx` — text input with placeholder
6. Build `SearchButton.tsx` — green button with magnifying glass icon
7. Build `Footer.tsx` — Component Dock link
8. Compose in `App.tsx` — full-viewport background + form + footer
9. Add responsive breakpoints (≤992px height, ≤767px stack)
10. Write tests (Vitest + Testing Library) — 100% coverage
11. Run `scripts/verify-app.sh searcharc`
12. Update `TEMPLATES.md` — mark `[x]`
