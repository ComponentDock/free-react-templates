# OptCombo — Implementation Notes

Source: ColorLib Multiselect V20 (`multiselect-20`)
Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-20/
New name: `optcombo` (apps/optcombo, @free-react-templates/optcombo)

## Structure order (section-by-section)

1. **Page wrapper** — full-viewport container with #efefef background, 7rem vertical padding
2. **Heading** — centered `<h2>` with `<label>` element: "Multi-Select #10 (Limit to 5)", Roboto 20px
3. **Dropdown 1 (color-1)** — centered row (col-md-5), wrapper div with `.color-1` class, multi-select with max 5 limit
4. **Dropdown 2 (color-2)** — same layout, `.color-2` class, no selection limit
5. **Dropdown 3 (color-3)** — same layout, `.color-3` class, no selection limit

## Component breakdown

### MultiSelect (reusable component)
Same as OptBox (template-optbox) — custom React multi-select with tag-chip display.
- Props: `options: string[]`, `placeholder?: string`, `colorVariant: 'color-1' | 'color-2' | 'color-3'`, `maxSelections?: number`
- State: `selected: Set<string>`, `isOpen: boolean`, `searchQuery: string`
- The `maxSelections` prop (default: undefined = unlimited) controls the max number of selectable items

### Color variant map
```typescript
const COLOR_VARIANTS = {
  'color-1': '#e5e4cc',  // muted yellow-green
  'color-2': '#c7f0db',  // mint green
  'color-3': '#d3f4ff',  // light blue
} as const;
```

### Max selection limit behavior
- When `maxSelections` is set and `selected.size >= maxSelections`:
  - Remaining options are visually dimmed (opacity-50)
  - Clicking a dimmed option does NOT add it
  - When a chip is removed, options re-enable
- The original uses Chosen plugin's `max_selected_options` config

### Fidelity notes vs OptBox
- OptBox (multiselect-19) has ONE dropdown, no limit
- OptCombo (multiselect-20) has THREE stacked dropdowns with different colors
- OptCombo has a max-selection limit on the first dropdown only
- The heading uses a `<label>` element for accessibility (links to first select via `for` attribute)
- Row spacing uses `mb-3` (Bootstrap class) between each row

## Files to create

```
apps/optcombo/
  src/
    main.tsx              — entry point
    App.tsx               — composes OptCombo page (3 stacked MultiSelect instances)
    components/
      MultiSelect.tsx     — reusable multi-select (shared with optbox if possible)
      MultiSelect.test.tsx — tests
    index.css             — Tailwind entry + @theme tokens
  index.html
  package.json
  vite.config.ts
  tsconfig.json
  public/
    CNAME                 — optcombo.free.componentdock.com
```

## Design tokens for Tailwind @theme

```css
@theme {
  --color-optcombo-bg: #efefef;
  --color-optcombo-text: #b3b3b3;
  --color-optcombo-heading: #26282b;
  --color-optcombo-chip-1: #e5e4cc;
  --color-optcombo-chip-2: #c7f0db;
  --color-optcombo-chip-3: #d3f4ff;
  --color-optcombo-focus: #5897fb;
  --color-optcombo-highlight: #3875d7;
  --font-family-optcombo: "Roboto", sans-serif;
}
```

## Testing strategy

- Render with 3 MultiSelect instances, verify each has correct color variant
- First dropdown: select 5 items, verify 6th is blocked
- Second/third dropdowns: select all 8, verify all chips appear
- Color variants: verify correct background color per dropdown
- Remove item from first dropdown after limit reached, verify re-enable
- Search/filter works in each dropdown independently
- Accessibility: label linked to first select, ARIA on chips
