# Checkset — Implementation Tasks & Design Notes

## Structure order (section-by-section)

1. **App scaffold** — copy simplest existing app (e.g. modalify), rename to `checkset`, update package name to `@free-react-templates/checkset`
2. **PageLayout** — full-page container with light blue-gray (#f8f9fd) background
3. **HeadingSection** — centered "Multiselect #01" heading (28px, black, Lato font)
4. **SelectRow** — flex row: "Select Language:" label (bold, gray, 150px) + MultiSelectDropdown
5. **MultiSelectDropdown** — custom dropdown trigger button (white bg, shadow, 4px radius, 52px height, calc(100%-150px) width)
6. **DropdownPanel** — absolute-positioned list of CheckboxOption items with soft shadow
7. **CheckboxOption** — checkbox (20x20, 2px solid rgba(0,0,0,0.2), 4px radius) + label text; active state: #52de97 bg + white checkmark
8. **Footer** — "Made with Component Dock" link to https://www.componentdock.com/

## Design fidelity notes

- **Background:** Light blue-gray #f8f9fd — NOT pure white, NOT dark. Applied to the `.ftco-section` container.
- **Typography:** Lato font family (Google Fonts), weights 300/400/700. Headings at 400 weight, options at 500.
- **Brand color:** Green #52de97 — used for active checkboxes, link color, and `bg-primary`. NOT Bootstrap blue.
- **Dropdown trigger:** White background, `0px 10px 23px -16px rgba(0,0,0,0.14)` shadow, 4px border-radius, 52px fixed height.
- **Checkbox:** 20x20px, border `2px solid rgba(0,0,0,0.2)`, border-radius 4px. Active state fills with #52de97 and shows white checkmark.
- **Options:** 16px font-size, font-weight 500, black text. Padding inside label with checkbox pseudo-element.
- **Dropdown panel:** Same shadow as trigger, absolute positioned, full width of trigger, 10px vertical padding.
- **Label:** "Select Language:" — bold, gray, fixed 150px width, aligned left.
- **Heading:** "Multiselect #01" — 28px, black, centered, `.heading-section` class.
- **No navbar, no hero, no footer in original** — single component demo. React version adds footer per AGENTS.md.

## Testing approach

- Test dropdown opens on trigger click
- Test dropdown closes on outside click and Escape key
- Test checkbox toggles on click (checked/unchecked states)
- Test multiple selections work simultaneously
- Test heading and label render correctly
- Test responsive layout on mobile viewport
- Test footer renders with Component Dock link
- Verify 100% coverage

## Component file plan

- `src/App.tsx` — compose PageLayout + HeadingSection + SelectRow + Footer
- `src/components/PageLayout.tsx` — full-page container with #f8f9fd bg
- `src/components/HeadingSection.tsx` — centered heading
- `src/components/SelectRow.tsx` — flex row: label + MultiSelectDropdown
- `src/components/MultiSelectDropdown.tsx` — dropdown trigger + DropdownPanel state
- `src/components/DropdownPanel.tsx` — list of CheckboxOption items
- `src/components/CheckboxOption.tsx` — single checkbox with label
- `src/components/Footer.tsx` — Component Dock attribution link
- `src/index.css` — Tailwind entry + @theme tokens for brand color #52de97

## Key differences from other multiselect templates

- Simplest template in the series — single component, no complex layout
- Green accent (#52de97) instead of Bootstrap blue (#007bff)
- Lato font instead of Roboto or system sans-serif
- Custom checkbox styling (20x20, 4px radius, green active fill) vs browser defaults
- Soft box-shadow on dropdown instead of hard border
