# Selectrack — Design Notes & Tasks

Source: ColorLib Multiselect 10
Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-10/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-10.jpg

## Visual Design (from preview + screenshot)

A minimal, clean form-component demo page. Light gray (#f8f9fd) background,
centered content. The primary feature is a single white dropdown container
with subtle shadow, containing a multiselect checkbox list with live search.
Coral-red (#ff5959) accent color used on links, the quantity badge, the
chevron icon, and checked checkboxes. Font is Lato at 16px/1.8 line-height.
Very simple — just a heading and one interactive component.

## Section Order

1. Page wrapper (full viewport, centered)
2. Title heading ("States" or similar)
3. Dropdown container (trigger + list + search)
4. Footer with Component Dock link

## Component Architecture

```
Selectrack (App)
├── PageLayout (wrapper: centered, light gray bg)
│   ├── TitleSection (heading)
│   ├── DropdownContainer
│   │   ├── DropdownTrigger (button: label + quantity + chevron)
│   │   └── DropdownList (conditionally rendered)
│   │       ├── SearchInput (live filter)
│   │       └── CheckboxList (scrollable ul of state checkboxes)
│   └── Footer (Component Dock link)
```

## State Management

- `isOpen: boolean` — dropdown visibility
- `selectedStates: Set<string>` — currently checked states
- `searchQuery: string` — current search filter text
- `filteredStates` — derived from states array filtered by searchQuery

## Fidelity Notes

- Match the single-section centered layout exactly
- Match the dropdown container styling: white bg, 5px radius, box-shadow
- Match the trigger: gray bold label, coral quantity, coral chevron
- Match the search input: light bg, 4px radius, no border
- Match checkbox styling: custom checkmark with coral checked state
- Use lucide-react ChevronDown icon (replaces FontAwesome fa-chevron-down)
- Use lucide-react CheckSquare/Check icons for checkbox styling
- Use picsum.photos for any placeholder imagery (though this template has none)
- Lato font via Google Fonts link in index.html

## Implementation Tasks

- [ ] Create app scaffold: `apps/selectrack/` from simplest existing app
- [ ] Rename package to `@free-react-templates/selectrack`
- [ ] Add Lato font to `index.html`
- [ ] Build PageLayout with centered content + #f8f9fd background
- [ ] Build DropdownContainer with trigger button
- [ ] Build DropdownList with search input + checkbox list
- [ ] Implement open/close toggle on trigger click
- [ ] Implement outside-click-to-close behavior
- [ ] Implement live search filtering
- [ ] Implement checkbox selection + quantity counter
- [ ] Build Footer with Component Dock link
- [ ] Add Tailwind theme tokens (primary: #ff5959, bg: #f8f9fd)
- [ ] Write tests for all components (100% coverage)
- [ ] Verify build + typecheck + lint pass
