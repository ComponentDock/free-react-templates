# SearchDock — Design Notes & Task Outline

Source: ColorLib colorlib-search-8
Preview: https://colorlib.com/etc/searchf/colorlib-search-8/
New name: searchdock

## Section Order (fidelity reference)

1. Full-page container (flex center, background image)
2. Search form wrapper (max-width 790px, centered)
3. Basic search input (white, box-shadow, magnifying glass icon)
4. Advanced search panel (black bg, expandable)
   - "Advanced Search" label
   - Row 1: ACCESSORIES, COLOR, SIZE dropdowns
   - Row 2: SALE, TIME, TYPE dropdowns
   - Row 3: Results count + Reset + Search buttons

## Component Structure

```
src/
  App.tsx              — composes SearchDock
  components/
    SearchDock.tsx     — main container (full-page bg, flex center)
    BasicSearch.tsx    — search input + magnifying glass icon
    AdvancedSearch.tsx — expandable panel with 6 dropdowns + actions
    FilterSelect.tsx   — reusable dropdown (accepts label + options)
    ResultCount.tsx    — "108 results" display
    ActionBar.tsx      — Reset + Search buttons
  index.css            — Tailwind entry + @theme tokens
```

## Design Token Notes (for index.css @theme)

```
--color-brand: #e45c27;        /* orange accent */
--color-brand-hover: #d7501b;  /* darker orange */
--font-family: 'Roboto', sans-serif;
--radius: 3px;
--shadow-card: 0 8px 20px rgba(0,0,0,0.15);
```

## Fidelity Notes

- Background image: use picsum.photos placeholder, dark overlay feel
- Input: white bg, 70px height, 3px radius, right-aligned magnifying glass (lucide-react Search icon)
- Advanced panel: black bg, 40px padding, 3px radius, box-shadow
- Dropdowns: transparent bg, white text, 2px solid #ccc bottom border, custom chevron
- Results count: bold, orange number, white label text
- Reset: transparent bg, white text, bold, no border
- Search: orange bg (#e45c27), white text, bold, hover darkens to #d7501b
- Responsive: at <768px, dropdowns stack to single column, input padding shrinks

## Tasks

- [ ] Scaffold app from existing template (copy simplest app, rename package)
- [ ] Set up Tailwind theme tokens in index.css
- [ ] Implement SearchDock container (full-page bg, flex center)
- [ ] Implement BasicSearch (input + icon)
- [ ] Implement AdvancedSearch (toggle, 6 dropdowns, results, actions)
- [ ] Implement FilterSelect reusable component
- [ ] Add responsive styles (<768px breakpoint)
- [ ] Add footer with Component Dock link
- [ ] Write tests (100% coverage)
- [ ] Set CNAME and homepage
- [ ] Run verify-app.sh
