# Searchbreeze — Design Notes & Task Outline

## Source

- **ColorLib name:** Colorlib Search Form V9
- **ColorLib slug:** colorlib-search-9
- **Preview URL:** https://preview.colorlib.com/theme/colorlib-search-9/ (404 — design based on screenshot)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-9.jpg

## Section order (top to bottom)

1. Full-viewport wrapper (pale ice blue `#dce8ef` background)
2. Search card (white, centered, rounded corners, subtle shadow)
3. Top: keyword search input ("Type Keywords") + magnifying glass icon
4. Cyan divider line (`#5bc0c7`)
5. "ADVANCED SEARCH" label (uppercase, small, gray)
6. 6 filter dropdowns in 3×2 grid: Accessories, Color, Size, Sale, Time, Type
7. Footer row: "108 results" (cyan), "RESET" text, "SEARCH" button (cyan)

## Fidelity notes

- **Layout:** Centered card on full-viewport background. No header/navbar —
  this is a standalone search form component.
- **Card:** White background, ~4-6px border-radius, subtle box-shadow. Two-part
  internal structure: top (keyword) and bottom (advanced filters) separated
  by a thin cyan divider line.
- **Search input:** "Type Keywords" placeholder, no visible border on the
  input itself (clean look). Magnifying glass icon on the right side, likely
  in gray or cyan.
- **Divider:** Thin horizontal line in cyan/teal (`#5bc0c7`), full width of
  card inner padding.
- **Filter grid:** 3 columns × 2 rows. Each cell has a small label above a
  styled select dropdown with a down chevron. Dropdowns have light gray
  borders (`#e0e0e0`), rounded corners, consistent padding.
- **Footer row:** Left-aligned "108 results" text in cyan. Right-aligned:
  "RESET" as a text/link button (gray), "SEARCH" as a filled button
  (cyan background, white text, uppercase, rounded).
- **Typography:** Poppins throughout. "ADVANCED SEARCH" is uppercase, smaller
  size, gray. Dropdown labels are regular weight, small.
- **Colors differ from Search 7:** Search 7 used sky blue `#5BC0DE` background
  with green accents; Search 9 uses pale ice blue `#dce8ef` background with
  cyan/teal accents. Search 7 had a 2×3 grid; Search 9 has a 3×2 grid.
  Search 7 had "Delete" text; Search 9 has "RESET" text.

## Task outline

- [ ] Copy simplest existing search app as base (e.g. `apps/searchpeak`)
- [ ] Rename package to `@free-react-templates/searchbreeze`
- [ ] Set up `public/CNAME` with `searchbreeze.free.componentdock.com`
- [ ] Set `homepage` in `package.json`
- [ ] Create `src/App.tsx` composing sections:
  - [ ] `SearchCard` component (centered white card)
  - [ ] `KeywordSearch` (input + icon)
  - [ ] `CyanDivider`
  - [ ] `AdvancedSearch` (label + 3×2 filter grid)
  - [ ] `FooterRow` (results count, reset, search button)
- [ ] Configure Tailwind theme tokens (`@theme` in `index.css`)
- [ ] Write tests (100% coverage) for each component
- [ ] Verify: typecheck + lint + test:coverage + build via `scripts/verify-app.sh searchbreeze`
- [ ] Update `TEMPLATES.md` — mark `[~]` when implementing, `[x]` when done
- [ ] Commit, push, open PR, merge
