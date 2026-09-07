# Choosy — Implementation Notes

**Source:** ColorLib "Multiselect 10"  
**Preview:** https://preview.colorlib.com/theme/bootstrap/multiselect-10/  
**New name:** choosy  
**Spec:** openspec/specs/template-choosy/spec.md

## Structure order

1. `App.tsx` — Root layout with page background, heading, footer
2. `components/MultiselectDropdown.tsx` — Main dropdown component (toggle button, search, checkbox list, quantity badge)
3. `components/MultiselectDropdown.test.tsx` — Tests for all dropdown states

This is a single-component template. No navbar, no hero, no multi-section layout. The entire app is a centered dropdown widget on a neutral background.

## Section-by-section fidelity notes

### Page layout
- Full viewport section, centered content
- Page background: `#f8f9fd`
- Font: Lato (loaded via Google Fonts `<link>` in index.html)
- Heading: "Multiselect #10", 28px, black, weight 400, text-center
- Dropdown centered in a ~42% width column (col-md-5 equivalent)

### Dropdown component
- Container: white bg, 5px radius, box-shadow `0px 10px 30px -4px rgba(0,0,0,0.15)`
- Toggle button: full width, padding 15px 20px, left-aligned label + quantity
  - Label: gray (#6c757d), bold (700)
  - Quantity: coral red `#ff5959`, bold (700), shows "(Any)" or "(N)"
  - Chevron: lucide ChevronDown, coral red, at right
- Dropdown list: white bg, padding 10px 20px
  - Search input: bg `rgba(0,0,0,0.05)`, 4px radius, no border, placeholder text
  - Checkbox list: max-height 200px, overflow-y auto
  - Checkbox unchecked: light gray square (use lucide Square or custom)
  - Checkbox checked: coral red `#ff5959` filled square (use lucide CheckSquare)
  - Item label: 16px, gray text

### Footer
- Simple footer with Component Dock link
- No ColorLib references

## Design tokens for @theme

```css
--color-brand: #ff5959;
--color-page-bg: #f8f9fd;
--font-family-body: "Lato", sans-serif;
```

## Dependencies
- `lucide-react` for icons (ChevronDown, Square, CheckSquare)
- Google Fonts "Lato" loaded in index.html
- No other external dependencies needed

## Implementation approach
1. Copy simplest existing app as scaffold
2. Set up Lato font in index.html
3. Create MultiselectDropdown component with useState for:
   - isOpen (dropdown open/closed)
   - searchQuery (string)
   - selectedItems (Set of selected state names)
4. Use Tailwind classes with @theme brand tokens
5. Implement search filtering: filter items array by query, case-insensitive
6. Quantity badge: selectedItems.size or "Any"
7. Keyboard: Enter/Space on toggle, Escape to close, focus management
8. ARIA: aria-expanded, aria-haspopup, aria-label on list
