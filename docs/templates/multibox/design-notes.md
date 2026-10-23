# Multibox — Implementation Tasks & Design Notes

## Source mapping

| Field | Value |
|-------|-------|
| ColorLib slug | `multiselect-19` |
| ColorLib URL | https://colorlib.com/wp/template/multiselect-19/ |
| Preview URL | https://preview.colorlib.com/theme/bootstrap/multiselect-19/ |
| New name | `multibox` |
| App path | `apps/multibox` |
| Package | `@free-react-templates/multibox` |

## Structure order (matching original)

1. **Page wrapper** — full-viewport centered container with `#efefef` background, `7rem` vertical padding
2. **Heading** — centered `h2` "Multi-Select #9" (Roboto, 20px)
3. **Multi-select component** — centered column (max-width ~50% on desktop), contains:
   - Input area (placeholder "Select Categories")
   - Selected tags (cream/yellow pills with × close buttons)
   - Dropdown panel (shadow 0 15px 30px rgba(0,0,0,0.2), border-radius 4px)
   - Search input inside the dropdown

## Design fidelity notes

### Color tokens to use in `index.css` `@theme`

```css
@theme {
  --color-bg: #efefef;
  --color-multibox-tag: #e5e4cc;      /* variant-1: cream */
  --color-multibox-tag-2: #c7f0db;    /* variant-2: green */
  --color-multibox-tag-3: #d3f4ff;    /* variant-3: blue */
  --color-multibox-active: #5897fb;   /* active border */
  --color-multibox-highlight: #3875d7; /* dropdown highlight */
  --color-multibox-text: #b3b3b3;     /* paragraph text */
}
```

### Typography

- Load **Roboto** (weights 300, 400) via Google Fonts `<link>` in `index.html`
- Body: Roboto 400, 16px default
- Headings: Roboto, matched to original sizes (h2 = 20px)
- Paragraphs: Roboto 300, color #b3b3b3

### Component architecture

- **MultiSelect** component (custom, replaces Chosen.js):
  - Props: `options: string[]`, `placeholder?: string`, `variant?: 'cream' | 'green' | 'blue'`, `onChange?: (selected: string[]) => void`
  - State: `selected: string[]`, `isOpen: boolean`, `searchQuery: string`
  - Renders: input area + tag chips + dropdown + search
  - Keyboard accessible: arrow keys, enter to select, escape to close
- **App.tsx** — simple layout: centered content with heading + MultiSelect
- **Variants** — cycle through cream/green/blue tag backgrounds

### Layout details

- Content container: `padding: 7rem 0`, centered
- Multi-select max-width: ~50% on desktop (Bootstrap col-md-5 equivalent)
- On mobile: full width with padding
- Dropdown: absolute positioned below input, full width of container

### Component Dock footer

Per conventions, add a minimal footer: "Made with Component Dock" linking to https://www.componentdock.com/

## Files to create

```
apps/multibox/
  public/CNAME          → multibox.free.componentdock.com
  package.json          → @free-react-templates/multibox
  vite.config.ts        → standard Vite config with injectUiSource()
  index.html            → Google Fonts (Roboto) link
  src/
    main.tsx            → entry
    App.tsx             → page layout + heading + MultiSelect
    index.css           → Tailwind entry + @theme tokens
    components/
      MultiSelect.tsx   → custom multi-select component
      MultiSelect.test.tsx
    test/setup.ts       → jest-dom import
```

## Test plan (TDD)

1. **MultiSelect.test.tsx**
   - Renders with placeholder text
   - Opens dropdown on click
   - Shows all options in dropdown
   - Selects option → creates tag, removes from dropdown
   - Removes tag → option reappears
   - Filters options via search input
   - Supports variant color prop
   - Keyboard navigation (arrow, enter, escape)
   - Accessible: aria-labels, role attributes

2. **App.test.tsx**
   - Renders heading
   - Renders MultiSelect component
   - Has correct background styling
