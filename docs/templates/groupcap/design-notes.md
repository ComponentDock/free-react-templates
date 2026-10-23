# Groupcap — Implementation Notes

## Source
- ColorLib "Multiselect 18": https://colorlib.com/wp/template/multiselect-18/
- Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-18/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-18.jpg

## Structure (section order, top-to-bottom)
1. Single content area (`7rem 0` padding)
2. Centered heading: "Multi-Select #8 (Limit selection on groups)"
3. Bootstrap 4 grid: `container` → `row justify-content-center` → `col-md-5`
4. Multi-select widget (Bootstrap Select plugin)

## Design notes

### Layout
- Minimal: single centered column, no navbar/hero/footer sections
- `col-md-5` keeps the dropdown compact and centered
- Body padding: `7rem 0` (generous vertical whitespace)

### Multiselect widget
- Bootstrap Select plugin transforms `<select multiple>` into styled dropdown
- Button trigger: `.form-control` styled, shows "Nothing selected" placeholder
- Dropdown panel: search input, Select All / Deselect All buttons, scrollable option list
- Options grouped under `<optgroup>` headers with per-group limits
- Show-tick mode: green check marks on selected items

### Group structure (key differentiator from Chklmt)
- 4 optgroups with different `data-max-options` values:
  - Group A (Limit 2): Alabama, Alaska, Arizona, Arkansas
  - Group B (Limit 4): California through Iowa (11 states)
  - Group C (Limit 7): Kansas through Nevada (13 states)
  - Group D (Limit 4): New Hampshire through Wyoming (22 states)
- Per-group enforcement: reaching a group's limit disables unchecked options
  ONLY in that group; other groups remain fully functional

### Design tokens
- Font: Roboto (300/400)
- Background: #efefef (light grey)
- Paragraph text: #b3b3b3
- Check mark accent: #8cba51 (green)
- Heading size: 20px
- No gradients, no images, no decorative elements

### Differences from Chklmt (Multiselect 17)
- Chklmt: GLOBAL limit of 7 on entire `<select>`
- Groupcap: PER-GROUP limits on each `<optgroup>` (2, 4, 7, 4)
- The visual design and layout are otherwise identical

## Implementation tasks
1. Create app scaffold (copy simplest existing app, rename package)
2. Build MultiSelectWidget component with:
   - Dropdown trigger button
   - Dropdown panel with search, Select All/Deselect All
   - Grouped option list with optgroup headers
   - Per-group selection limit enforcement
   - Green check marks on selected items
3. Wire up 4 groups of US states with correct limits
4. Implement search filtering (preserves group structure)
5. Implement Select All / Deselect All per-group and globally
6. Style: Roboto font, #efefef background, Bootstrap-inspired form control
7. Footer with Component Dock link
8. Tests (Vitest + Testing Library, 100% coverage)
9. Public/CNAME and homepage configuration
