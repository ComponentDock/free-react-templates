# Tagmint — Design Notes

## Source mapping

- **ColorLib source:** Multiselect 20 (`multiselect-20`)
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/multiselect-20/
- **Source page:** https://colorlib.com/wp/template/multiselect-20/
- **New name:** tagmint
- **Category:** Form / Multi-Select UI Component Showcase

## Section order (from preview DOM)

1. **Heading** — `<h2>` centered: "Multi-Select #10 (Limit to 5)"
2. **Section 1 (cream)** — `div.color-1 > select.chosen-select[multiple]`
   - Options: Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd
   - Tag chip color: #e5e4cc (warm cream)
3. **Section 2 (mint)** — `div.color-2 > select.chosen-select[multiple]`
   - Same options as Section 1
   - Tag chip color: #c7f0db (soft mint green)
4. **Section 3 (sky)** — `div.color-3 > select.chosen-select[multiple]`
   - Same options as Section 1
   - Tag chip color: #d3f4ff (light sky blue)

No navbar, no hero, no features section, no footer in original. Pure centered
component showcase.

## Fidelity notes

### What to match exactly

- Three vertically stacked multi-select sections, each centered
- Tag chips with colored backgrounds matching the three palettes
- Tag chips have close (×) buttons at top-right
- Dropdown with box-shadow (0 15px 30px rgba(0,0,0,0.2))
- Placeholder "Select Categories" when empty
- Roboto font, 20px heading, light body text (#b3b3b3, weight 300)
- Page background #efefef
- 4px border-radius on chips and dropdown
- Tag chip box-shadow: 0 1px 4px rgba(0,0,0,0.1)

### What to adapt for React

- **Replace Chosen jQuery plugin** with a React multi-select component.
  Options:
  - `react-select` with `isMulti` + custom styled chips
  - Custom implementation with state + CSS
  - Recommendation: `react-select` for accessibility and keyboard support
- **Replace Bootstrap grid** with Tailwind: `max-w-md mx-auto` for centering
- **Replace `<select multiple>`** with React-controlled state
- Add Component Dock footer (not in original)

### Color system for implementation

```css
/* Tailwind @theme tokens */
--color-tag-cream: #e5e4cc;
--color-tag-mint: #c7f0db;
--color-tag-sky: #d3f4ff;
--color-page-bg: #efefef;
--color-text-muted: #b3b3b3;
```

### Component structure (suggested)

```
App.tsx
├── h2 heading
├── MultiSelectSection (variant="cream")
│   └── MultiSelectDropdown
│       ├── Trigger button (shows placeholder or selected count)
│       ├── Dropdown panel (option list)
│       └── TagChips container (colored chips with × buttons)
├── MultiSelectSection (variant="mint")
│   └── (same structure)
└── MultiSelectSection (variant="sky")
    └── (same structure)
```

### Props for MultiSelectSection

```typescript
interface MultiSelectSectionProps {
  variant: 'cream' | 'mint' | 'sky'
  options: string[]
  placeholder?: string // default: "Select Categories"
  maxSelections?: number // default: 5
}
```

## Replication source

- **Preview DOM:** Fetched live at `https://preview.colorlib.com/theme/bootstrap/multiselect-20/`
- **CSS tokens:** Extracted from `css/style.css` in the preview
- **Screenshot:** Available at ColorLib template page
- **Preview status:** Reachable (200 OK)

## Implementation priority

This is a small, focused template — ideal for a quick build. The main
challenge is replicating the Chosen-style multi-select chips in React with
exact color matching across three variants. Recommend using `react-select`
with custom theme/styling to match the visual fidelity.
