# QuestBar — Design Notes & Task Outline

**Source:** ColorLib Search Form Bar 05
**Source slug:** search-form-bar-05
**Preview:** https://preview.colorlib.com/theme/search-form-bar-05/ (404 at spec time)
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-05.jpg

## Visual Design (from screenshot)

- **Layout:** Single centered search bar, vertically centered on a plain white page. Title "Search Form/Bar #05" above the bar in dark sans-serif.
- **Color palette:** White background, teal/turquoise `#4ecdc4` accent on interactive elements.
- **Typography:** Clean sans-serif (assumed Poppins, standard for ColorLib form templates).
- **Bar components (left to right):**
  1. Category dropdown button — teal bg, white text "ALL PRODUCT ↓", dropdown chevron
  2. Search text input — white bg, thin gray border, "Search..." placeholder
  3. Search submit button — teal bg, white magnifying glass icon
- **Shadow:** Subtle box shadow around the entire bar (`0 2px 8px rgba(0,0,0,0.1)`).
- **Edges:** Sharp/square buttons (no border-radius).
- **Bar width:** ~500px max, centered with auto margins.

## Structure Order

1. Page wrapper (full viewport, white bg, flex center)
2. Title heading
3. Search form bar (flex row):
   - Category dropdown button
   - Search text input
   - Search submit button

## Section-by-Section Fidelity Notes

### Title
- Centered heading above the search bar
- Dark gray `#333` color, medium weight
- Font size ~24px

### Search Bar Container
- Horizontal flex layout
- Subtle shadow for elevation
- Max-width ~500px, centered

### Category Dropdown
- Teal background `#4ecdc4`
- White text, uppercase, small font
- Dropdown arrow icon
- Opens a menu of product categories on click
- Default: "ALL PRODUCT"

### Search Input
- White background
- Light gray border (`1px solid #e0e0e0`)
- Padding inside for comfortable typing
- "Search..." placeholder in light gray

### Search Button
- Teal background matching dropdown
- White magnifying glass icon (use `lucide-react` `Search` icon)
- Same height as input
- Square edges (no border-radius)

## Task Outline

1. [ ] Create app scaffold (`apps/questbar/`) from simplest existing template
2. [ ] Set up `index.css` with brand color `#4ecdc4` in `@theme`
3. [ ] Implement `QuestBar.tsx` component (dropdown + input + button in flex row)
4. [ ] Implement `CategoryDropdown.tsx` (toggleable dropdown with category list)
5. [ ] Add `lucide-react` Search icon to the search button
6. [ ] Style with Tailwind: teal bg, square edges, shadow, centering
7. [ ] Add form submission handling (on button click + Enter key)
8. [ ] Write tests (100% coverage)
9. [ ] Add `public/CNAME` with `questbar.free.componentdock.com`
10. [ ] Add footer with Component Dock link
11. [ ] Verify: typecheck, lint, test, build
