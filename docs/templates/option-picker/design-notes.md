# OptionPicker — Design Notes & Implementation Tasks

## Source

- **ColorLib:** Multiselect V01 (multiselect-01)
- **URL:** https://colorlib.com/wp/template/multiselect-01/
- **Category:** Bootstrap Multiselect (form component snippet)
- **Preview status:** Unreachable (404) — falling back to screenshot + page description

## Design Analysis

### Visual Design (from screenshot + page)

The original is a simple, clean multiselect dropdown form component:
- White card container with light border (#eeeeee)
- Dropdown input with placeholder text
- Dropdown list opens downward below the input
- Options have checkbox indicators
- Selected items shown as removable tag/chips
- Blue accent (#1a73e8) for focus rings, selected state, and active indicators
- System sans-serif font, 16px base, 1.8 line height
- Minimal shadows, clean edges, no decorative elements
- Functional, utilitarian aesthetic — designed for easy embedding

### Key Design Decisions

1. **Component, not page:** This is a single reusable form component, not a full
   landing page. The app will be a demo/showcase page displaying the component
   in various states.

2. **Tag-based selection display:** Selected options appear as removable
   chips/tags inside or above the input area (standard multiselect UX pattern).

3. **Search/filter:** Include a text input for filtering options when the list
   is long (common in Bootstrap multiselect implementations).

4. **Keyboard accessible:** Full arrow-key navigation, Enter to select,
   Escape to close.

## Section Order (Demo Page)

1. **Header** — Minimal header with template name
2. **Hero/Demo Section** — The multiselect component in its default state
3. **Variant Showcase** — Different sizes (sm, md, lg), disabled state, pre-selected state
4. **Usage Code** — Code snippet showing how to embed the component
5. **Features** — Key capabilities listed (searchable, keyboard nav, accessible)
6. **Footer** — Component Dock attribution link

## Component Structure

```
src/
  main.tsx              — Entry point
  App.tsx               — Demo page layout
  components/
    OptionPicker.tsx    — Main multiselect component
    OptionPicker.test.tsx
    Tag.tsx             — Removable tag/chip sub-component
    Tag.test.tsx
  index.css             — Tailwind entry + theme tokens
  test/
    setup.ts            — jest-dom import
```

### OptionPicker Component API

```typescript
interface OptionPickerProps {
  options: { label: string; value: string }[];
  value?: string[];
  onChange?: (selected: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  searchable?: boolean;
  clearable?: boolean;
}
```

## Fidelity Notes

- Match the clean, minimal aesthetic — no gradients, no heavy shadows
- Use #1a73e8 for all interactive states (focus, active, selected)
- System sans-serif font stack (no custom fonts needed)
- Border radius: subtle (4-6px) matching Bootstrap defaults
- Tag chips: light background with blue text, × remove button
- Dropdown: white background, 1px #eeeeee border, subtle shadow on open
- Hover state: rgba(0,0,0,0.03) background on options

## Tasks

- [ ] Create app scaffold (copy simplest existing app, rename package)
- [ ] Implement OptionPicker component with full keyboard nav
- [ ] Implement Tag sub-component
- [ ] Build demo page with variant showcase
- [ ] Write tests for OptionPicker (selection, deselection, keyboard, a11y)
- [ ] Write tests for Tag component
- [ ] Verify 100% coverage
- [ ] Run typecheck + lint + build
- [ ] Add CNAME + homepage for deploy
- [ ] Commit and push
