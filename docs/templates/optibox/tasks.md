# Optibox — Implementation Tasks & Design Notes

## Source mapping

| Field             | Value                                                    |
| ----------------- | -------------------------------------------------------- |
| ColorLib template | Multiselect 17                                           |
| ColorLib slug     | `multiselect-17`                                         |
| ColorLib URL      | https://colorlib.com/wp/template/multiselect-17/         |
| Preview URL       | https://preview.colorlib.com/theme/multiselect-17/ (404) |
| New name          | `optibox`                                                |
| App path          | `apps/optibox`                                           |
| Package           | `@free-react-templates/optibox`                          |
| Deploy URL        | https://optibox.free.componentdock.com                   |

## Section structure (order of implementation)

1. **Page wrapper** — centered container, white background, full viewport height
2. **Heading** — centered title "Multiselect 17" (or similar), large font
3. **Dropdown label** — "Select Items" or equivalent, above the control
4. **Dropdown trigger** — clickable button showing selected count / placeholder, gray border
5. **Dropdown menu** — expandable list of items with checkboxes
6. **Selection logic** — max limit enforcement, count tracking, disable overflow
7. **Selected tags/chips** — visual display of selected items with remove buttons
8. **Footer** — Component Dock attribution link

## Component architecture

```
src/
  App.tsx                    — Page layout (centered container + heading + Optibox)
  components/
    Optibox.tsx              — Main component: trigger + dropdown + selection state
    OptiboxTrigger.tsx       — The clickable button showing count/placeholder
    OptiboxMenu.tsx          — The expanded dropdown list with items
    OptiboxItem.tsx          — Individual item with checkbox + label
    OptiboxTag.tsx           — Selected item chip/tag with remove button
  index.css                  — Tailwind entry + theme tokens (@theme block)
  main.tsx                   — Entry point (excluded from coverage)
  test/
    setup.ts                 — jest-dom import
```

## Design tokens for Tailwind @theme

```css
@theme {
  --color-brand: #1a73e8;
  --color-brand-hover: #1464cc;
  --color-body: #26282b;
  --color-border: #e6e6e6;
  --color-surface: #ffffff;
  --color-disabled: #cccccc;
  --font-family-sans: 'Inter', system-ui, -apple-system, sans-serif;
}
```

## Fidelity notes

- **Layout**: Single centered section, no hero/sidebar complexity. Focus is the form component.
- **Dropdown behavior**: Must support multi-select with a configurable max limit. This is the core differentiator from a plain select.
- **Visual marking**: Selected items get a blue highlight (brand color). Checked checkboxes are visually distinct.
- **Count display**: Trigger shows "N Selected" or similar, updating in real-time.
- **Disable overflow**: When max reached, remaining unchecked items become non-interactive (disabled checkbox or click ignored).
- **Remove mechanism**: Each selected tag has an "x" button to deselect.
- **No heavy styling**: Clean, minimal Bootstrap-like aesthetic. No gradients, no complex backgrounds.
- **Accessibility**: Keyboard navigation (arrow keys, space/enter to toggle, escape to close), ARIA roles (combobox/listbox/option), screen reader announcements.

## Testing strategy

- Unit test each sub-component in isolation
- Integration test the full Optibox component:
  - Renders with correct initial state
  - Opens/closes on click
  - Selects/deselects items
  - Enforces max limit
  - Shows tags for selected items
  - Removes items via tag "x" button
  - Keyboard navigation works
  - ARIA attributes are correct
- Mock event handlers, verify call counts and arguments
- Test edge cases: 0 items, 1 item, max=1, max=all items

## Open questions

- Exact item labels/options: will use generic placeholder list (e.g. "Frontend", "Backend", "Design", "DevOps", "Marketing", "Sales", "HR", "Finance")
- Default max limit: 3 (configurable via props)
- Dropdown animation: simple CSS transition (opacity + transform) or instant
