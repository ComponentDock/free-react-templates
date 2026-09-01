# Pulldown Template — Design Notes

## Source Analysis

**Source**: ColorLib Dropdown 01 (`https://colorlib.com/wp/template/dropdown-01/`)
**Preview**: `https://preview.colorlib.com/theme/bootstrap/dropdown-01/`
**Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/dropdown-01.jpg`

## Visual Design Summary

The template is a **component showcase page** demonstrating Bootstrap 4 dropdown variations in four directions. It's not a traditional landing page but a UI component reference page.

### Page Structure (Top to Bottom)

1. **Main Heading**: "Dropdown #01" centered, black, 28px Poppins
2. **4-Column Grid** (`.col-md-3` each, stacks on mobile):
   - Column 1: Dropdown Variation (downward menus)
   - Column 2: Dropup Variation (upward menus)
   - Column 3: Dropright Variation (rightward menus)
   - Column 4: Dropleft Variation (leftward menus)
3. **Each Column Contains**:
   - Sub-heading: "Dropdown Variation" / "Dropup Variation" / etc. (with `<small>` tag)
   - Two button groups:
     - Regular dropdown button + menu
     - Split dropdown button (label + separate toggle)

### Color Palette

| Role            | Hex                | Usage                                     |
| --------------- | ------------------ | ----------------------------------------- |
| Primary         | `#0075f6`          | All button backgrounds, active menu items |
| Primary Hover   | `#005dc3`          | Button hover/focus, menu item hover       |
| Menu BG         | `#ffffff`          | Dropdown menu background                  |
| Menu Item Text  | `rgba(0,0,0,0.7)`  | Default menu item text                    |
| Divider         | `rgba(0,0,0,0.15)` | Horizontal divider in menus               |
| Page BG         | `#ffffff`          | Page/section background                   |
| Heading         | `#000000`          | Main heading and sub-headings             |
| Shadow (menu)   | `rgba(0,0,0,0.41)` | Dropdown menu elevation                   |
| Shadow (button) | `rgba(0,0,0,0.12)` | Button subtle elevation                   |

### Typography

- **Font**: Poppins (loaded via Cloudflare fonts CDN in original)
- **Heading**: 28px, bold
- **Sub-heading small**: 18px
- **Button text**: 14px, weight 400
- **Menu item**: 14px, weight 400

### Button Design

- **Shape**: Rounded corners (5px border-radius)
- **Padding**: 12px 16px
- **Shadow**: `0px 10px 20px -6px rgba(0, 0, 0, 0.12)` — subtle lift
- **Transition**: 0.3s ease all
- **States**: Default → Hover/Focus → Active (progressively darker blue)

### Dropdown Menu Design

- **Background**: White
- **Border**: None
- **Shadow**: `0px 10px 34px -20px rgba(0, 0, 0, 0.41)` — prominent elevation
- **Padding**: 0 (items edge-to-edge)
- **Items**: 10px vertical padding, dark gray text
- **Active**: Primary blue bg + white text
- **Hover**: Primary blue bg + white text
- **Divider**: 1px line, `rgba(0,0,0,0.15)`

### Grid & Responsive

- **Desktop (≥768px)**: 4 equal columns side by side
- **Mobile (<768px)**: Single column, stacked vertically
- **Section padding**: 7em top/bottom (very generous)

## Implementation Notes

### New Name: "Pulldown"

- Single lowercase kebab-case word
- Descriptive of dropdown/pull-down action
- No collision with existing apps or specs
- Thematic fit for dropdown variations

### Component Architecture

Since this is a component showcase (not a traditional page), the component structure focuses on reusable dropdown primitives:

1. **Button** — Base button with all variants/states
2. **DropdownToggle** — Button with chevron icon, direction prop
3. **DropdownMenu** — Accessible menu with keyboard nav, portal positioning
4. **DropdownItem** — Menu item with active/hover/divider variants
5. **DropdownVariation** — Composes trigger + menu for one direction
6. **SplitDropdownVariation** — Label button + separate toggle button
7. **VariationColumn** — Header + two dropdown variations (regular + split)
8. **PulldownSection** — 4-column grid of VariationColumns
9. **Footer** — Component Dock link

### Direction Handling

Four directions needed:

- `down` (dropdown) — menu below trigger
- `up` (dropup) — menu above trigger
- `right` (dropright) — menu to right of trigger
- `left` (dropleft) — menu to left of trigger

Use a positioning library or custom logic with `getBoundingClientRect` for menu placement. Since this is a showcase with static menus (not truly interactive in the original), we'll implement real interactive dropdowns.

### Icons

Use `lucide-react` for chevron icons:

- `ChevronDown` — dropdown
- `ChevronUp` — dropup
- `ChevronRight` — dropright
- `ChevronLeft` — dropleft

For split buttons, the toggle shows only the icon (with `aria-label` for screen readers).

### Accessibility Requirements

Critical for dropdown components:

- `aria-haspopup="true"` on triggers
- `aria-expanded="true/false"` toggled on open/close
- `role="menu"` on menu container
- `role="menuitem"` on items
- `tabIndex=-1` on items, roving tabindex for keyboard nav
- Escape closes menu, returns focus to trigger
- Arrow Up/Down navigate (wrap at ends)
- Enter/Space selects item (closes menu)
- Focus trap within open menu

### Font Loading

Original uses Cloudflare-hosted Poppins. For our implementation:

- Add `<link rel="preconnect" href="https://fonts.googleapis.com">` + `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`
- `<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">`
- Or self-host via `@font-face` in CSS (preferred for offline/performance)

### Placeholder Images

Not needed — this template has no images, only UI components.

### No ColorLib References

- App code must not contain "colorlib", "preview.colorlib.com", or source slug
- Provenance only in spec, TEMPLATES.md, and PR description
- Design token comments should reference the values, not the source

### Footer

Must link to `https://www.componentdock.com/` with text "Component Dock" or "More templates at Component Dock".

## Verification Against Screenshot

Key visual matches to verify:

- [ ] White page background
- [ ] Black centered "Pulldown" heading (28px)
- [ ] 4 columns with correct headers
- [ ] Blue buttons with 5px radius, subtle shadow
- [ ] Chevron icons on all toggles (correct direction)
- [ ] Split buttons have separate icon-only toggle
- [ ] Dropdown menus: white, elevated shadow, no border
- [ ] Menu items: dark gray text, 10px padding
- [ ] Active item: blue bg, white text
- [ ] Dividers: light gray lines
- [ ] Hover states darken buttons/items
- [ ] Responsive stacking on mobile
- [ ] Footer with Component Dock link

## Deviations from Source

1. **Real interactivity**: Original is static HTML showcase; we build fully interactive dropdowns with keyboard support
2. **Font loading**: Using Google Fonts instead of Cloudflare fonts CDN
3. **Menu positioning**: Using proper portal/positioning logic instead of Bootstrap's Popper.js
4. **Split button toggle**: Original uses `dropdown-toggle-split` class; we'll use a separate button with icon-only
5. **Accessibility**: Full ARIA + keyboard support (original has basic Bootstrap attributes only)

These are improvements, not deviations from visual fidelity.
