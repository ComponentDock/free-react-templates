# ChoiceStack — Design Notes & Implementation Tasks

## Source

- **ColorLib:** Multiselect V02 (multiselect-02)
- **URL:** https://colorlib.com/wp/template/multiselect-02/
- **Category:** Bootstrap Multiselect (form component snippet)
- **Description:** "A minimalist free Bootstrap 4 multiselect dropdown snippet"
- **Preview status:** Unreachable (404) — falling back to page description + design tokens

## Design Analysis

### Visual Design

"Minimalist" Bootstrap 4 multiselect dropdown — even cleaner than V01:
- Single-line trigger with dropdown arrow
- Options list drops down below the trigger
- Checkmarks on selected items
- Selected count or labels shown in trigger area
- No card shadows, minimal borders
- Bootstrap 4 conventions: 4px border-radius, standard padding
- Blue accent (#1a73e8) for focus and selected states
- Pure white background, #eeeeee borders where needed
- System sans-serif font, 16px base

### Differentiation from OptionPicker (V01)

| Aspect          | OptionPicker (V01)        | ChoiceStack (V02)           |
| --------------- | ------------------------- | --------------------------- |
| Visual weight   | Card with shadow          | Flat, no shadow             |
| Selection UI    | Tags/chips                | Checkmarks + count          |
| Search          | Filterable                | Pure dropdown (no search)   |
| Border radius   | Subtle (4-6px)            | Bootstrap default (4px)     |
| Spacing         | Standard                  | Compact                     |

## Section Order (Demo Page)

1. **Header** — Minimal template title
2. **Default Demo** — Basic multiselect in collapsed state
3. **Interaction Demo** — Click to open, select multiple, see count update
4. **Variants** — Disabled state, pre-selected options, different sizes
5. **Integration Note** — How to embed in a form
6. **Footer** — Component Dock link

## Component Structure

```
src/
  main.tsx              — Entry
  App.tsx               — Demo page
  components/
    ChoiceStack.tsx     — Main multiselect component
    ChoiceStack.test.tsx
  index.css             — Tailwind + theme
  test/
    setup.ts
```

### ChoiceStack Component API

```typescript
interface ChoiceStackProps {
  options: { label: string; value: string }[];
  value?: string[];
  onChange?: (selected: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}
```

## Fidelity Notes

- Minimalist aesthetic — no shadows, no heavy borders
- Bootstrap 4 border-radius: 4px (0.25rem)
- Focus ring: 2px outline offset with #1a73e8
- Checkmark icon: simple ✓ character or SVG, blue when selected
- Trigger shows "N selected" text when items chosen
- Dropdown: white bg, 1px #eeeeee border, max-height with scroll
- Hover: rgba(0,0,0,0.03) on options
- No search input — pure click-to-select

## Tasks

- [ ] Create app scaffold from simplest existing app
- [ ] Implement ChoiceStack component
- [ ] Build demo page with interactive showcase
- [ ] Write tests (selection, deselection, keyboard, a11y)
- [ ] Verify 100% coverage
- [ ] Typecheck + lint + build
- [ ] CNAME + homepage
- [ ] Commit and push
