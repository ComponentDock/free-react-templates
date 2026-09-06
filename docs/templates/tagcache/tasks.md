# TagCache — Implementation Tasks & Design Notes

## Source Mapping

| Field       | Value                                                                 |
| ----------- | --------------------------------------------------------------------- |
| Template    | TagCache                                                              |
| Source      | ColorLib Multiselect 06                                               |
| Source URL  | https://colorlib.com/wp/template/multiselect-06/                      |
| Preview URL | https://preview.colorlib.com/theme/bootstrap/multiselect-06/          |
| Screenshot  | https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-06.jpg |

## Structure Order (Section-by-Section)

1. **Heading Section** — Centered `<h2>` with template name, ~28px, black, Lato font
2. **Multiselect Dropdown** — Custom dropdown component with tag-based selection

## Fidelity Notes

### Heading

- Font: Lato, 28px, weight 400, color #000
- Centered via flexbox with `text-center`
- Bottom margin ~3rem (Bootstrap mb-5)

### Multiselect Dropdown (Core Component)

- Container: 240px wide, centered in a col-lg-4
- Trigger area:
  - White background, 8px border-radius
  - Shadow: `0 4px 16px 0 rgba(22, 42, 90, 0.12)`
  - Min-height: 44px, padding: 8px 12px 2px 12px
  - Placeholder text: "Add Language", color #99A3BA, font-size 14px
  - Arrow indicator: two pseudo-elements forming a chevron, color #99A3BA
  - On open: shadow deepens, arrow rotates

- Selected tags (chips):
  - Displayed inline inside trigger area
  - Background: `rgba(228, 236, 250, 0.7)` (light blue tint)
  - Border-radius: 4px on tag background
  - Text: black, 14px
  - Close (X) icon: CSS pseudo-elements (two rotated 2px lines), color #f16821
  - Remove animation: scale(0) + opacity fade

- Dropdown list:
  - Positioned absolute below trigger
  - Border-radius: 8px
  - White background
  - Font-size: 16px
  - Items: padding 12px 16px, color #000
  - Hover: background #f16821, text #fff
  - Open animation: `translate(0, 20px) scale(0.8) opacity:0` → `translate(0, 12px) scale(1) opacity:1`
  - Easing: cubic-bezier(0.87, -0.41, 0.19, 1.44) for bouncy feel
  - Drop-shadow filter on the list panel
  - First/last items get 8px border-radius on respective corners

- Interaction flow:
  1. Click trigger → list animates open
  2. Click option → tag appears in trigger, option removed from list
  3. Click X on tag → tag removed, option returns to list
  4. Click outside / click trigger again → list closes

### Options

- Javascript, jQuery, HTML, Wordpress, PHP (5 items)
- No checkbox; selection is indicated by item disappearing from list and tag appearing

### Page Background

- `#fafafa` — very light gray
- Section padding: 7em 0

## Implementation Steps

1. Create `apps/tagcache/` workspace (copy simplest existing app)
2. Set up package.json with `@free-react-templates/tagcache`
3. Create `src/index.css` with Tailwind + Lato font import + design tokens
4. Create `src/components/MultiselectDropdown.tsx` — the core component
   - State: open/closed, selected items array
   - Trigger area with placeholder, tags, arrow
   - Dropdown list with animated entrance
   - Click handlers for select/deselect
   - Keyboard accessibility (Tab, Arrow, Space/Enter)
5. Create `src/App.tsx` — heading + centered dropdown
6. Write tests for MultiselectDropdown (100% coverage)
7. Verify: typecheck + lint + test:coverage + build
8. Add CNAME (`tagcache.free.componentdock.com`) + homepage
9. Footer with Component Dock link
