# OptSeek — Implementation TODO

Recreation of ColorLib "Multiselect 10"
Source: https://colorlib.com/wp/template/multiselect-10/
Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-10/

## Structure order (from reference)

1. **Section wrapper** — full-page centered layout (`ftco-section` equivalent)
2. **Heading** — "OptSeek" centered, 28px bold black
3. **Dropdown container** — elevated card with box-shadow
   - **Dropdown button** — white, full-width, shows label + quantity + chevron
   - **Dropdown list** (hidden by default)
     - Search input — light gray background, filters list
     - Scrollable checkbox list — custom-styled checkboxes

## Design fidelity notes

### Colors
- Brand/accent: `#ff5959` (coral-red) — used for quantity counter, chevron icon, and checked checkboxes
- Text label: `gray` for "States" label
- Heading: `#000` black
- Backgrounds: all `#fff` white
- Search input: `rgba(0, 0, 0, 0.05)` light gray background

### Typography
- Font: "Lato" via Google Fonts (weights 300, 400, 700)
- Dropdown base size: 14px
- Heading: 28px bold

### Dropdown behavior
- Toggle: click button to show/hide list
- Search: real-time filter on input, case-insensitive substring match
- Checkboxes: custom FontAwesome icons (unchecked: \f0c8 gray, checked: \f14a coral-red)
- Quantity: shows count of checked items, "Any" when zero
- Scroll: max-height 200px on the list

### Layout
- Section padding: 7em vertical
- Dropdown column: col-md-5 (centered via justify-content-center)
- Box-shadow: `0px 10px 30px -4px rgba(0, 0, 0, 0.15)`
- Border-radius: 5px on container, 4px on search input

### Implementation approach
- Use `packages/ui` components where possible (Button, etc.)
- Custom dropdown component with React state for open/close, search, and selection
- US states data as a static JSON array (name + abbreviation)
- Tailwind classes for layout; brand color in `@theme`
- lucide-react icons for chevron (replace FontAwesome)
- Custom checkbox styling via Tailwind (no FontAwesome dependency)

### Footer
- Must include "Component Dock" link: https://www.componentdock.com/
