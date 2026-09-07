# Picktag — Implementation Notes

**Source:** ColorLib "Multiselect 11"  
**Preview:** https://preview.colorlib.com/theme/bootstrap/multiselect-11/  
**New name:** picktag  
**Spec:** openspec/specs/template-picktag/spec.md

## Structure order

1. `App.tsx` — Root layout with page background, heading, instruction text, footer
2. `components/MultiSelect.tsx` — Main multi-select component with tag chips, dropdown, search
3. `components/MultiSelect.test.tsx` — Tests for all selection states

Single-component template: a multi-select dropdown with Select2-style tag chips.

## Section-by-section fidelity notes

### Page layout
- Full viewport section, white background
- Font: Roboto (loaded via Google Fonts `<link>` in index.html)
- Heading: "Multi-Select #1", 20px, black, text-center
- Instruction: "Tags separate with comma \",\"", color #b3b3b3, font-weight 300
- Multi-select centered in col-7 equivalent (~58% width)

### Multi-select component
- Input area: bottom border 1px solid #e6e6e6, full width
- Tag chips (selected items):
  - Background: #65587f (muted purple)
  - Text: #fff, 14px
  - Padding: 2px 10px
  - Border-radius: ~3px
  - Remove icon: semi-transparent white, hover -> full white
  - Chips laid out horizontally with flex-wrap
- Dropdown list:
  - Search input at top
  - Options: Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd
  - Selected option highlight: bg #65587f, text #fff
  - Hover: bg #f4f4f4, text #000
- Font: Roboto, weights 300/400/500

### Footer
- Simple footer with Component Dock link
- No ColorLib references

## Design tokens for @theme

```css
--color-brand: #65587f;
--color-page-bg: #ffffff;
--color-text-muted: #b3b3b3;
--font-family-body: "Roboto", sans-serif;
--color-dropdown-hover: #f4f4f4;
```

## Dependencies
- `lucide-react` for icons (X for chip remove, ChevronDown for toggle)
- Google Fonts "Roboto" loaded in index.html
- No other external dependencies needed

## Implementation approach
1. Copy simplest existing app as scaffold
2. Set up Roboto font in index.html
3. Create MultiSelect component with useState for:
   - isOpen (dropdown open/closed)
   - searchQuery (string)
   - selectedItems (Set of selected option names)
4. Static options array: ["Design", "HTML5", "CSS3", "jQuery", "BS4", "Bootstrap", "WordPress", "FrontEnd"]
5. Chip rendering: map selectedItems to purple pill components with X button
6. Dropdown rendering: filter options by search, show highlighted for selected
7. Use Tailwind classes with @theme brand tokens
8. Keyboard: Enter/Space on input toggles, Escape closes
