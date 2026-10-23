# Searchpad — Implementation TODO

Source: ColorLib "Search 10"
Preview: https://colorlib.com/etc/searchf/colorlib-search-10/
New name: searchpad

## Structure order (matches original 1:1)

1. **SearchBar** — pill-shaped gradient input with magnifying-glass icon
2. **AdvancedPanel** — white card with "ADVANCED SEARCH" label
3. **FilterGrid** — 3×2 grid of gray pill dropdowns
4. **ActionBar** — result count + RESET + SEARCH buttons
5. **ResponsiveLayout** — stacked mobile view at <768px

## Section-by-section fidelity notes

### SearchBar
- Full-width input, 70px height, border-radius 34px (pill)
- Gradient: blue (#2c6dd5) 0-28% → coral (#ff4b5a) 91-100%
- White text, Lato 18px, placeholder "Type Keywords"
- White magnifying-glass SVG icon positioned absolute-right inside bar
- Shadow: 0px 8px 20px rgba(0,0,0,0.15)
- Outer wrapper (.s010) centers the form with flexbox, bg #d9eff5

### AdvancedPanel
- White background, border-radius 10px, padding 40px
- Same shadow as search bar
- "ADVANCED SEARCH" label: #555, 14px, uppercase, block, mb 26px

### FilterGrid
- 3-column flex row, gap 20px between rows, 40px margin-bottom per row
- Each dropdown: gray (#ccc) pill bg, border-radius 20px, height 40px
- White text, Lato 14px
- Custom chevron SVG (not native select arrow), #999, 18×18
- Use `<select>` elements styled with Tailwind (appearance-none) or a custom dropdown component
- Placeholders: Accessories, Color, Size, Sale, Time, Type

### ActionBar
- Flex row: result-count (left) + group-btn (right)
- Result count: "108 results" — number in #333, text in #999, 14px
- RESET button: transparent bg, #666 text, no border-radius, 14px, hover → #000
- SEARCH button: same gradient as bar, border-radius 20px (pill), 40px height
  - Hover: reversed gradient (pink→blue via ::before pseudo)
  - Shadow: 0px 2px 5px rgba(0,0,0,0.15)
  - White text, 14px

### Responsive (≤767px)
- Dropdowns stack vertically (block layout, full width each)
- Advanced panel padding: 40px 15px
- Search input padding adjusts, icon area widens to 80px

## Implementation notes

- Use `packages/ui` for any shared Button/select components where possible
- Use `cn()` from `packages/ui` for class merging
- Colors go in `@theme` block in `index.css`
- Use `https://picsum.photos/seed/searchpad-<n>/` for any placeholder images (if needed)
- Font: load Lato from Google Fonts in `index.html`
- No navigation, no footer beyond the Component Dock link requirement
- This is a single-page widget, not a multi-section landing page
