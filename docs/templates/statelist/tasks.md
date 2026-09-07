# Statelist — Implementation Tasks

## Design notes

- ColorLib slug: `multiselect-10`
- Preview URL: `https://preview.colorlib.com/theme/bootstrap/multiselect-10/`
- Theme: light (page `#f8f9fd`, white controls, red `#ff5959` accents)
- Widget: custom dropdown with label "States", quantity "(Any)", chevron-down,
  search input, 50 US states as checkboxes
- Source uses Bootstrap 4.3.1 + jQuery + lodash — recreation is pure React
- Source uses FontAwesome custom checkboxes — recreation uses lucide-react

## Design tokens

- Page bg: `#f8f9fd` (light gray)
- Accent: `#ff5959` (red)
- Trigger: white `#fff`, padding 15px 20px, radius 5px, shadow `0px 10px 30px -4px rgba(0,0,0,0.15)`
- Label: gray `#808080`, weight 700, 14px
- Quantity: gray weight 700, count in red `#ff5959`
- Chevron: red `#ff5959`, 16px
- Dropdown list: white `#fff`, padding 10px 20px
- Search: `rgba(0,0,0,0.05)` bg, radius 4px, no border
- List: max-height 200px, overflow-y auto
- Checkbox unchecked: 20×20, `2px solid rgba(0,0,0,0.1)`, radius 4px
- Checkbox checked: `#ff5959` fill, white check
- Heading: 28px, `#000`, Lato 400, line-height 1.5
- Font: Lato 400 via Google Fonts `<link>`
- Section padding: 7em 0

## Implementation tasks

- [x] 1. Create app scaffold: copy `apps/thresh` → `apps/statelist`, rename
      package to `@free-react-templates/statelist`, set homepage + CNAME
- [ ] 2. Write spec (openspec/specs/template-statelist/spec.md) ✅ done
- [ ] 3. Write tests (RED phase)
  - App.test.tsx: heading, title, main landmark, footer
  - Footer.test.tsx: Component Dock link
  - Heading.test.tsx: brand heading, color
  - Dropdown.test.tsx: trigger render, toggle, 50 states, search filter,
    checkbox toggle, quantity update, outside click close, Escape close,
    selections persist across open/close
- [ ] 4. Implement components (GREEN phase)
  - Heading.tsx: "Statelist" heading
  - Dropdown.tsx: trigger + list + search + checkboxes + quantity
  - Footer.tsx: Component Dock link
  - App.tsx: compose all, set title, main landmark
- [ ] 5. Run tests, ensure 100% coverage
- [ ] 6. Run per-app gate: `scripts/verify-app.sh statelist`
- [ ] 7. Commit, push, open PR, merge, bookkeeping
