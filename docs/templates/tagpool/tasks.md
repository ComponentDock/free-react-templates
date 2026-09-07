# Tagpool — Implementation Tasks

Source: ColorLib "Multiselect 20" → https://colorlib.com/wp/template/multiselect-20/
Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-20/
New name: Tagpool

## Section-by-section fidelity notes

### Page structure (top to bottom)

1. **Page wrapper** — light grey background `#efefef`, full-viewport vertical padding `7rem 0`
2. **Heading** — centered H2: "Multi-Select #10 (Limit 5)", Roboto 20px, Bootstrap default text color
3. **Color-1 widget** — `col-md-5` centered, grey chip variant (`#e5e4cc`)
4. **Color-2 widget** — `col-md-5` centered, green chip variant (`#c7f0db`), `mb-3` spacing
5. **Color-3 widget** — `col-md-5` centered, blue chip variant (`#d3f4ff`), `mb-3` spacing

### Key differentiator from Multiselect 19

- **Selection limit of 5** — the title says "(Limit to 5)" and the JS enforces max 5 selections
- Three vertical rows (vs. single widget in Multiselect 19)
- Same Chosen.js multi-select pattern with chip tags

### Component breakdown

| Component | Notes |
|-----------|-------|
| `App.tsx` | Page layout: heading + 3 widget instances |
| `MultiSelectWidget.tsx` | Reusable chip-select widget with configurable limit |
| `ChipTag.tsx` | Individual chip with label + × close button |
| `DropdownList.tsx` | Scrollable dropdown with options, disabled state at limit |

### Design tokens to replicate

- Background: `#efefef`
- Font: Roboto (weights 300, 400, 500)
- Input container: border-radius 4px, box-shadow `0 1px 4px 0 rgba(0,0,0,0.1)`
- Dropdown: border-radius 4px, box-shadow `0 15px 30px 0 rgba(0,0,0,0.2)`
- Chip colors: `#e5e4cc` (grey), `#c7f0db` (green), `#d3f4ff` (blue)
- Chip padding: 7px top/bottom, 10px left, 26px right (for × button)
- Input field height: 32px, font-size: 14px

### Implementation order

1. Create `apps/tagpool/` (copy simplest existing app, rename package)
2. Build `MultiSelectWidget` with chip selection + limit logic
3. Build `ChipTag` component
4. Build `DropdownList` with disabled-at-limit behavior
5. Compose in `App.tsx` with 3 color variants
6. Add Tailwind theme tokens for chip colors
7. Write tests (Vitest + RTL) covering all spec scenarios
8. Verify 100% coverage
9. Add footer with Component Dock link
10. Add `public/CNAME` and update `homepage`
