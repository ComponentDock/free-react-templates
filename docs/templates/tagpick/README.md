# Tagpick — Implementation Notes

Source: ColorLib Multiselect 19 (multiselect-19)
Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-19/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-19.jpg

## Structure (section order)

1. Page wrapper — light gray bg (#efefef), centered content, 7rem vertical padding
2. Heading — centered "Category Picker" in Roboto, 20px, bold
3. Multi-select tag picker — the main/only component:
   - Input container (white bg, rounded 4px, soft shadow)
     - Tag chips (color-coded pills with × close button)
     - Search text input (hidden until focused)
   - Dropdown panel (elevated shadow, rounded 4px, appears below input)
     - List of 8 category options

## Component architecture

```
src/
  App.tsx              — Page layout (centered container)
  components/
    CategoryPicker.tsx — Main multi-select tag picker component
      - TagChip        — Individual colored tag with close button
      - DropdownList   — Filterable option list
      - SearchInput    — Inline search within the input area
  index.css            — Tailwind entry + @theme tokens
```

## Design tokens to define in index.css (@theme)

```css
@theme {
  --color-page-bg: #efefef;
  --color-text-heading: #26282b;
  --color-text-secondary: #b3b3b3;
  --color-input-bg: #ffffff;
  --color-tag-1: #e5e4cc;
  --color-tag-2: #c7f0db;
  --color-tag-3: #d3f4ff;
  --color-dropdown-shadow: rgba(0, 0, 0, 0.2);
  --radius-tag: 4px;
  --shadow-input: 0 1px 4px rgba(0, 0, 0, 0.1);
  --shadow-dropdown: 0 15px 30px rgba(0, 0, 0, 0.2);
}
```

## Fidelity notes

- **Original uses jQuery Chosen plugin** — React implementation should use
  native state management (useState) for selection, search, and open/close.
  No jQuery dependency.
- **Original uses Bootstrap grid** — Replace with Tailwind flex utilities.
- **Font**: Load Roboto via Google Fonts link in index.html (weights 300, 400).
- **Tag colors**: Cycle through three pastel colors (#e5e4cc, #c7f0db, #d3f4ff)
  as tags are added. Use modulo arithmetic on selection index.
- **Close button**: Original uses `.search-choice-close` with CSS positioning.
  In React, use a Lucide X icon inside each tag chip.
- **No images needed** — Pure form component, no placeholder images required.
- **Category data**: Hardcode 8 categories: Design, HTML5, CSS3, jQuery, BS4,
  Bootstrap, WordPress, FrontEnd.
- **Search**: Filter dropdown options by label (case-insensitive substring match).
  When typing, only matching options appear in the dropdown.
- **Dropdown shadow**: The original uses `0 15px 30px rgba(0,0,0,0.2)` for
  the elevated dropdown panel — match this exactly.
- **Input shadow**: The choices container uses `0 1px 4px rgba(0,0,0,0.1)`.
- **No navbar, no footer in the original** — add a minimal Component Dock footer
  as required by project conventions.
- **Colorlib theme name was "Multi-Select #9"** — we rename to "Category Picker"
  to avoid any original naming. No ColorLib references in app code.
