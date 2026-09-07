# OptBundle — Design Notes

## Template mapping

- **New name**: OptBundle
- **ColorLib source**: Multiselect 08
- **Source URL**: https://colorlib.com/wp/template/multiselect-08/
- **Preview URL**: https://preview.colorlib.com/theme/bootstrap/multiselect-08/

## Component structure

```
src/
  App.tsx              — composes the page
  components/
    Hero.tsx           — centered heading section
    CategoryMultiselect.tsx — main multiselect component
    SearchInput.tsx    — search/filter within dropdown
    OptionGroup.tsx    — optgroup header + items
    OptionItem.tsx     — single selectable item
    SelectionChip.tsx  — chip for selected item
  index.css            — Tailwind + theme tokens
```

## Tasks

1. **Scaffold app** — copy simplest existing app, rename to optbundle
2. **Set up theme tokens** — Lato font, brand color #a7d129, body/text colors
3. **Build Hero component** — centered heading, section padding
4. **Build CategoryMultiselect** — core component:
   - State: selected items, open/closed, search query
   - Renders trigger button with placeholder text
   - Renders dropdown overlay with optgroups
   - Renders selection chips below trigger
5. **Build OptionGroup** — renders group header + list of OptionItems
6. **Build OptionItem** — selectable item with checked state
7. **Build SelectionChip** — chip with item label + remove button
8. **Build SearchInput** — text input that filters visible items
9. **Write data model** — football teams in 8 conference groups
10. **Wire up interactions** — click to select/deselect, search filter, chip add/remove
11. **Add ARIA attributes** — roles, labels, keyboard navigation
12. **Write tests** — 100% coverage per TDD
13. **Footer** — Component Dock link

## Design fidelity notes

- Original uses Chosen.js — we build a custom React component mimicking its UX
- Original uses Bootstrap 4 — we use Tailwind equivalents
- Brand color #a7d129 (lime green) on: dropdown border, highlighted item bg, links
- Font: Lato via Google Fonts (weights 300, 400, 700)
- White background, gray body text, black headings
- Dropdown: 4px border radius, 1px solid green border
- Group headers: light gray background (rgba(0,0,0,0.05))
- Selected chips: light background (rgba(0,0,0,0.1)), no border, 2px radius
- Large section padding (7em top/bottom)
- Centered layout, single section, no nav/footer in original
