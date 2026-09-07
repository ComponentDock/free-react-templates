# Multiform — Implementation Notes

Source: ColorLib Multiselect V15 (multiselect-15)
Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-15/

## Structure (section order)

1. Page wrapper — light gray bg (#efefef), centered content, 7rem vertical padding
2. Heading — centered "State Selector" in Roboto, 20px, bold
3. Multiselect component — the main/only component:
   - Trigger button (click to open/close)
   - Dropdown panel (elevated shadow, rounded)
     - Search input (top of panel)
     - Select-all toggle (uppercase small text)
     - State list (checkbox-style items, 50 US states)

## Component architecture

```
src/
  App.tsx              — Page layout (centered container)
  components/
    Navbar.tsx         — Minimal or absent (original has no navbar)
    StateSelector.tsx  — Main multiselect component
      - TriggerButton  — shows "None selected" / "N selected"
      - DropdownPanel  — positioned below trigger, elevated
      - SearchInput    — filters list in real time
      - SelectAll      — toggle all items
      - StateList      — renders 50 state items with checkbox indicators
  index.css            — Tailwind entry + @theme tokens
```

## Design tokens to define in index.css (@theme)

```css
@theme {
  --color-page-bg: #efefef;
  --color-text-primary: #26282b;
  --color-text-secondary: #b3b3b3;
  --color-dropdown-bg: #ffffff;
  --color-dropdown-border: #aaaaaa;
  --color-selected-bg: #e1f2fb;
  --color-hover-bg: #f7f7f7;
  --color-selectall-text: #aaaaaa;
  --radius-dropdown: 4px;
  --shadow-rest: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  --shadow-active: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  --shadow-panel: 0 15px 30px 0 rgba(0, 0, 0, 0.1);
}
```

## Fidelity notes

- **Original uses jQuery multiselect plugin** — React implementation should use
  native state management (useState/useReducer) for selection, search, and open/close.
  No jQuery dependency.
- **Original uses Bootstrap grid** — Replace with Tailwind flex utilities.
- **Font**: Load Roboto (body) and Poppins (headings) via Google Fonts link in index.html.
- **Arrow indicator**: Original uses CSS triangle border trick. In React, use a
  Lucide ChevronDown icon for cleaner UX.
- **No images needed** — Pure form component, no placeholder images required.
- **State data**: Hardcode 50 US states as [{value: "AL", label: "Alabama"}, ...].
- **Search**: Filter items by label (case-insensitive substring match).
- **Select-all**: When all visible items are selected, show as active; otherwise
  show as available to click.
- **Colorlib theme name was "Multi-Select #5"** — we rename to "State Selector"
  to avoid any original naming. No ColorLib references in app code.
