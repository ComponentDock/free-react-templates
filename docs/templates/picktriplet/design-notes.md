# PickTriplet — Design Notes & Tasks

Source: ColorLib "Multiselect V20" (slug: multiselect-20)
Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-20/

## Structure (section order, top → bottom)

1. **Page wrapper** — full-viewport light gray (#efefef) background, centered content with 7rem vertical padding
2. **Heading** — h2 "Multi-Select #10 (Limit to 5)", centered, 20px Roboto
3. **Dropdown Row 1** — centered col-md-5, `color-1` wrapper, multi-select with tan (#e5e4cc) chips
4. **Dropdown Row 2** — centered col-md-5, `color-2` wrapper, multi-select with green (#c7f0db) chips
5. **Dropdown Row 3** — centered col-md-5, `color-3` wrapper, multi-select with blue (#d3f4ff) chips
6. **Footer** — Component Dock link (per repo rules)

## Section-by-section fidelity notes

### Page wrapper
- Background: #efefef (Tailwind: `bg-[#efefef]`)
- Content area: `py-28` (7rem = 112px) vertical padding
- Use `min-h-screen` for full viewport height

### Heading
- h2 with a `<label>` element (for accessibility)
- Font: Roboto, 20px, centered
- Text color: dark (inherited, not #b3b3b3 — that's for paragraphs)

### Multi-select dropdowns
- The original uses the "chosen" jQuery plugin for multi-select enhancement
- In React, implement as a custom multi-select component with:
  - Clickable input area showing "Select Categories" placeholder
  - Dropdown list with checkboxes or clickable items
  - Selected items shown as removable chips/pills
  - Search/filter input within the dropdown
- Each dropdown wrapped in a color-coded container:
  - color-1: chips bg #e5e4cc (tan/olive)
  - color-2: chips bg #c7f0db (soft green)
  - color-3: chips bg #d3f4ff (light blue)
- Dropdown container styling:
  - White background, no border
  - Box-shadow: 0 1px 4px 0 rgba(0,0,0,0.1)
  - Border-radius: 4px
  - Padding: 7px
- Open dropdown:
  - Box-shadow: 0 15px 30px 0 rgba(0,0,0,0.2)
  - Border-radius: 4px
  - White background
- Selected chips:
  - No border, no background-image
  - Padding: 7px top/bottom, 10px left, 26px right (for close button)
  - Close button positioned top-right
- Highlighted option: bg #3875d7 (blue)

### Category options (all 3 dropdowns)
- Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd
- Placeholder: "Select Categories"
- No selection limit (despite the heading saying "Limit to 5", no JS limit enforced)

## Component architecture

```
src/
  App.tsx              — Page layout (wrapper + heading + 3 dropdowns + footer)
  components/
    MultiSelectDropdown.tsx — Custom multi-select component
    SelectedChip.tsx        — Individual chip/pill with close button
    DropdownList.tsx        — Open dropdown with option list + search
  index.css           — Tailwind entry + @theme tokens for chip colors
```

## Implementation tasks

- [ ] Create workspace `apps/picktriplet/` with package `@free-react-templates/picktriplet`
- [ ] Set up Tailwind with @theme tokens for 3 chip colors
- [ ] Implement `SelectedChip` component (renders a removable pill)
- [ ] Implement `DropdownList` component (open dropdown with search + option list)
- [ ] Implement `MultiSelectDropdown` component (combines input, chips, dropdown)
- [ ] Compose `App.tsx` with heading, 3 dropdowns, footer
- [ ] Add Roboto font via Google Fonts link in index.html
- [ ] Write tests for all components (100% coverage)
- [ ] Set up `public/CNAME` with `picktriplet.free.componentdock.com`
- [ ] Set `homepage` in package.json
- [ ] Run `npm install` at root to register workspace
- [ ] Run `npm run test:coverage` — verify 100%
- [ ] Run `scripts/verify-app.sh picktriplet` — verify gate passes
