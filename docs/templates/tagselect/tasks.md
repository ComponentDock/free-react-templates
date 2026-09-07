# TagSelect — Implementation Notes

## Source

- **ColorLib template:** Multiselect V20
- **Source slug:** `multiselect-20`
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/multiselect-20/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-20.jpg

## Section order (top to bottom)

1. **Page container** — full-width, light gray (#efefef) background, centered content with vertical padding (~7rem)
2. **Heading** — "Multi-Select #10 (Limit to 5)", centered, Roboto 20px
3. **Dropdown 1** — `color-1` theme, cream tags (#e5e4cc)
4. **Dropdown 2** — `color-2` theme, green tags (#c7f0db)
5. **Dropdown 3** — `color-3` theme, blue tags (#d3f4ff)

Each dropdown is in a `col-md-5` Bootstrap-style centered row with margin-bottom spacing.

## Component architecture

- `src/App.tsx` — page layout, heading, three `MultiSelect` instances
- `src/components/MultiSelect.tsx` — custom multi-select with:
  - Search input with placeholder
  - Tag list (selected items) with close buttons
  - Dropdown list (filtered options)
  - `maxSelections` prop (default 5)
  - `tagColor` prop (string hex for background)
- `src/components/Tag.tsx` — individual tag with close button
- `src/components/DropdownList.tsx` — filtered option list

## Design tokens for index.css `@theme`

```
--color-brand-cream: #e5e4cc;
--color-brand-green: #c7f0db;
--color-brand-blue: #d3f4ff;
--color-bg-page: #efefef;
--color-text: #333;
--color-text-muted: #b3b3b3;
--font-family: 'Roboto', sans-serif;
--radius-sm: 3px;    /* tag radius */
--radius-md: 4px;    /* container radius */
```

## Fidelity notes

- The original uses jQuery Chosen.js plugin. We replace this with a custom
  React component matching the visual appearance (tag-based multi-select).
- The original CSS has three `.color-*` classes for different tag colors.
  We pass the color as a prop instead.
- The original heading says "Multi-Select #10 (Limit to 5)" — we keep this
  exact text for fidelity.
- The original uses Bootstrap grid (`row`, `col-md-5`, `container`). We
  replicate this with Tailwind flex/grid utilities.
- The original has a max 5 selection limit on the first dropdown. We
  implement this as a configurable `maxSelections` prop.

## Dependencies

- No new external dependencies needed
- Reuse existing `cn()` from `packages/ui`
- Use `lucide-react` for close/X icons on tags
