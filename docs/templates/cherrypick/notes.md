# CherryPick — Implementation Notes

Source: ColorLib Multiselect 01
Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-01/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-01.jpg

## Design Notes

### Visual Analysis (from preview DOM + CSS)

This is a **minimal single-section form component** — not a full-page template.
The original uses Bootstrap 4 + jQuery + bootstrap-multiselect.js plugin.
The React recreation replaces the jQuery plugin with a custom multi-select component.

**Layout**: Vertically centered on page. Single `<section>` with container → row → centered column.
The label "Select Language:" sits inline to the left of the dropdown trigger button.
The dropdown panel drops below the trigger with a shadow.

**Color palette**:

- Page bg: #f8f9fd (very light blue-gray)
- Brand/accent: #52de97 (vibrant mint green) — used for links and active checkbox
- Text: gray (#808080) for body, #000 for headings
- Button bg: #fff
- Checkbox border: rgba(0,0,0,0.2)

**Typography**: Lato font family (Google Fonts), weights 300/400/700. Headings at 400 weight.
The heading section uses 28px. Labels use 500 weight at 16px.

**Component shapes**:

- Dropdown trigger: 52px tall, white bg, 4px border-radius, subtle shadow
- Checkbox: 20×20px, 4px border-radius, 2px solid rgba border
- Active checkbox: #52de97 fill, white checkmark icon (Font Awesome \f00c)
- Dropdown panel: absolute positioned, same shadow as trigger

**Interaction patterns**:

- Click trigger to open/close dropdown panel
- Click option to toggle checkbox (multi-select)
- Click outside to close
- Keyboard: Tab to trigger, Arrow keys in dropdown, Space/Enter to toggle

## Implementation Tasks

1. **Create app scaffold**
   - Copy simplest existing app as base
   - Rename package to `@free-react-templates/cherrypick`
   - Set up vite.config.ts with injectUiSource()
   - Set public/CNAME to `cherrypick.free.componentdock.com`
   - Set homepage in package.json

2. **Design tokens in index.css**
   - @theme block with brand color #52de97
   - Background #f8f9fd
   - Font family "Lato" via Google Fonts link in index.html

3. **Build components**
   - `src/App.tsx` — Main page wrapper with section layout
   - `src/components/MultiSelect.tsx` — Custom multi-select dropdown
     - Trigger button (52px height, white bg, shadow, 4px radius)
     - Dropdown panel (absolute, shadow, option list)
     - Checkbox options (20×20px, 4px radius, green active state)
     - Label "Select Language:" inline left
   - Component should manage open/close state and selected items

4. **Options data**
   - Hardcoded array: PHP, JavaScript, Java, SQL, jQuery, .Net
   - Each option: { value: string, label: string }

5. **Footer**
   - Simple footer with "Made with Component Dock" + link to https://www.componentdock.com/

6. **Tests (TDD)**
   - MultiSelect renders with label and trigger button
   - Clicking trigger opens/closes dropdown
   - Options display with checkboxes
   - Clicking option toggles selection (checked/unchecked)
   - Multiple options can be selected simultaneously
   - Active checkbox shows green background
   - Dropdown closes on outside click
   - Keyboard navigation works
   - Accessibility: aria attributes, focus management

7. **Verification**
   - Run `scripts/verify-app.sh cherrypick`
   - 100% coverage on all component files
   - No ColorLib references in app code
   - Footer links to Component Dock

## Fidelity Notes

- The original uses jQuery + bootstrap-multiselect.js — we replace with pure React state
- The original is a single Bootstrap section — we keep it as a single-page component
- Placeholder images not needed (no images in this template)
- The original heading says "Multiselect #01" — we use "CherryPick"
- The original label says "Select Language:" — we keep this exact text
- The original options are: PHP, JavaScript, Java, SQL, jQuery, .Net — we keep these
