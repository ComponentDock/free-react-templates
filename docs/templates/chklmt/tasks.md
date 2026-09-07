# Chklmt — Tasks & Design Notes

## Source mapping

- **ColorLib source:** "Multiselect 17"
- **Source slug:** `multiselect-17`
- **Source URL:** https://colorlib.com/wp/template/multiselect-17/
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/multiselect-17/
- **New name:** `chklmt`
- **Package:** `@free-react-templates/chklmt`

## Section order (single-section layout)

1. **Wrapper** — `.content` div with `padding: 7rem 0`, centered
2. **Heading** — `<h2>` centered: "Multi-Select #7 (Limit to 7 selection)"
3. **Container** — Bootstrap-style grid: `container` > `row justify-content-center` > `col-md-5`
4. **Multiselect widget** — single `<select multiple>` with 50 US state options, rendered via Bootstrap Select plugin

## Fidelity notes

### Layout

- Single centered column (`col-md-5`) on a grey background
- No navbar, no hero, no footer beyond Component Dock attribution
- Vertical padding: `7rem 0` on the content wrapper
- Heading: centered, `font-size: 20px`, Roboto font

### Multiselect behavior

- Bootstrap Select plugin replaces `<select multiple>` with:
  - A button trigger showing "Nothing selected" (or selected item labels)
  - A dropdown panel with:
    - Search input at top
    - "Select All" / "Deselect All" action buttons
    - Scrollable list of checkbox options with green check marks
  - Button text updates on selection change
- **KEY FEATURE:** `data-max-options="7"` enforces a 7-item selection limit
  - Once 7 items are checked, remaining unchecked options disable
  - Deselecting any item re-enables the rest
  - "Select All" selects up to the limit, not all 50

### Design tokens (from preview CSS)

- Font: Roboto (Google Fonts, weights 300/400/500)
- Body background: `#efefef` (light grey)
- Paragraph text: `#b3b3b3`, weight 300
- Check mark / selected text: `#8cba51` (green)
- Heading: 20px, Roboto
- Bootstrap 4 defaults for form controls, grid, dropdowns

### Implementation approach

- Use a React custom select component (NOT the Bootstrap Select jQuery plugin)
- Implement checkbox list with check marks (lucide-react `Check` icon)
- Implement search filtering on option labels
- Implement Select All / Deselect All buttons
- Implement selection limit (max 7) with disabled state on remaining options
- Use picsum.photos for any placeholder imagery (none expected — pure form)
- Footer: Component Dock attribution link only

### What differs from original

- React + Tailwind instead of jQuery + Bootstrap 4
- No jQuery dependency
- No Bootstrap Select plugin dependency
- Same visual layout and behavior
- Same 50 US state options
- Same 7-item selection limit
