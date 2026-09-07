# OptGrid — Implementation Notes

**Source:** ColorLib Multiselect 20
**Preview:** https://preview.colorlib.com/theme/bootstrap/multiselect-20/
**New name:** optgrid

## Structure order (section-by-section)

1. **Page wrapper** — full-viewport gray background (#efefef), vertical centering
2. **Heading** — centered "Multi-Select #10 (Limit to 5)", 20px, dark text
3. **Color Variant 1** — centered container (col-md-5 width), gray-yellow accent chips (#e5e4cc)
4. **Color Variant 2** — centered container, mint-green accent chips (#c7f0db)
5. **Color Variant 3** — centered container, sky-blue accent chips (#d3f4ff)
6. **Footer** — Component Dock link

## Component breakdown

- `App.tsx` — page layout, passes variant configs to MultiSelect component
- `components/MultiSelect.tsx` — reusable multi-select with configurable chip color, option list, and selection limit
- `components/Footer.tsx` — simple footer with Component Dock link

## Fidelity notes

- The original uses the Chosen.js jQuery plugin (not React). We replicate the
  visual appearance with a native React multi-select component that renders
  chip tags for selected items.
- The three color variants differ ONLY in chip background color — same options,
  same layout, same behavior.
- The original has a selection limit of 5 items. Replicate this constraint.
- Chosen.js renders dropdown with `box-shadow: 0 15px 30px 0 rgba(0,0,0,0.2)`
  and border-radius 4px. Match these values.
- The chip close button is a small × positioned at `right: 8px; top: 9px`.
- The original page has NO navbar, NO hero section, NO features section —
  it is purely a form component demo. Keep it simple.
- Use Tailwind utility classes + `cn()` from `packages/ui` for styling.
- Use lucide-react for the × close icon on chips.
- Font: load "Roboto" from Google Fonts in index.html.

## Design token extraction

| Element          | CSS property     | Value                         |
| ---------------- | ---------------- | ----------------------------- |
| Page background  | background-color | #efefef                       |
| Body text        | color            | #b3b3b3                       |
| Heading          | font-size        | 20px                          |
| Heading          | color            | black (default)               |
| Chip (variant 1) | background-color | #e5e4cc                       |
| Chip (variant 2) | background-color | #c7f0db                       |
| Chip (variant 3) | background-color | #d3f4ff                       |
| Chip             | border-radius    | 4px                           |
| Chip             | padding          | 7px 10px 7px 26px             |
| Chip container   | box-shadow       | 0 1px 4px 0 rgba(0,0,0,0.1)   |
| Dropdown         | box-shadow       | 0 15px 30px 0 rgba(0,0,0,0.2) |
| Dropdown         | border-radius    | 4px                           |
| Close button     | position         | top: 9px; right: 8px          |
| Section          | padding          | 7rem 0                        |
