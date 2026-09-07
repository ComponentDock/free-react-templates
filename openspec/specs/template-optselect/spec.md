# Spec: OptSelect — Multiselect Dropdown Template

Recreation of ColorLib Multiselect 06
(https://colorlib.com/wp/template/multiselect-06/).

## Summary

A clean, accessible multiselect dropdown component with checkbox selection,
select-all/clear-all toggle, keyboard navigation, and a count indicator.
Minimalist design with a green accent palette on a light background.

## Design Tokens

- Background: `#f8f9fd` (light gray-blue)
- Card: `#fff`
- Border: `#e5e5e5`
- Text: `#666`
- Text muted: `#999`
- Accent: `#4f8cff` (blue)
- Accent bg: `#eef4ff`
- Hover: `#f5f5f5`
- Font: Inter, system sans-serif

## Sections (in order)

1. **Card container** — centered, rounded, bordered, with shadow
2. **Dropdown trigger** — button showing placeholder or count, chevron icon
3. **Dropdown panel** — appears below trigger when open
   - Select All / Clear All bar at top
   - List of options with checkboxes
4. **Selected count** — shows below the dropdown when items are selected
5. **Footer** — "Made with Component Dock" link

## Scenarios

### Rendering

- Given the page loads
- Then the heading "Select Options" is visible
- And a dropdown trigger button is visible
- And the trigger shows "Select options" placeholder

### Opening the dropdown

- Given the dropdown is closed
- When the user clicks the trigger
- Then the dropdown panel opens
- And the trigger shows aria-expanded=true

### Selecting an option

- Given the dropdown is open
- When the user clicks an option
- Then the checkbox is checked
- And the selected count updates

### Select All

- Given the dropdown is open and no items are selected
- When the user clicks "Select All"
- Then all items are selected

### Clear All

- Given all items are selected
- When the user clicks "Clear All"
- Then all items are deselected

### Keyboard navigation

- Given the dropdown is open
- When the user presses ArrowDown
- Then focus moves to the next option
- When the user presses Enter
- Then the focused option is toggled

### Closing

- Given the dropdown is open
- When the user clicks outside
- Then the dropdown closes
- When the user presses Escape
- Then the dropdown closes

### Footer

- Given the page loads
- Then the footer shows "Made with Component Dock"
- And the footer links to https://www.componentdock.com/
