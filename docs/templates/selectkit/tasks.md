# Selectkit — Implementation Task Outline

Source: ColorLib Multiselect 07
Spec: openspec/specs/template-selectkit/spec.md
Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-07/

## Structure order (1:1 with original)

1. **Heading section** — centered "Selectkit" heading (Lato, 28px, black)
2. **Label** — "Select Topics" label above the dropdown
3. **Multi-select dropdown** — full-width Semantic UI-style selection dropdown
   - Trigger: shows "Select Topics" placeholder or selected label pills
   - Dropdown menu: pinkish-red background with white text options
   - Each option has a circle checkbox (FontAwesome circle-o style)
   - Separator lines between options
4. **Footer** — Component Dock attribution link

## Section-by-section fidelity notes

### Heading
- Original uses Bootstrap `.heading-section` (28px, black, Lato)
- Recreate with Tailwind: `text-3xl font-normal text-black text-center`
- Section padding: `py-[7em]` (from `.ftco-section`)

### Label
- Original uses Semantic UI `<label>Select Topics</label>` above the dropdown
- Style: simple text label, standard form styling

### Select dropdown
- The original uses Semantic UI `selection fluid dropdown` with `multiple` attribute
- Container: full-width within a `col-lg-4 col-md-6` centered column
- Dropdown trigger:
  - `bg-white border border-[#e8647c] rounded px-2.5 py-2` when active
  - `bg-white border border-gray-200 rounded px-2.5 py-2` when inactive
  - Transition: `0.3s ease`
  - Placeholder text: `text-sm text-gray` ("Select Topics")
- Menu (open state):
  - Background: `bg-[#e8647c]` (pinkish-red)
  - Border-radius: 4px
  - Box-shadow: `0px 3px 19px -15px rgba(0, 0, 0, 0.41)`
  - Max-height: none (no scroll constraint)
  - Margin-top: 4px below trigger

### Menu items
- Text color: `text-white`
- Font size: 16px
- Padding: `15px 15px 15px 35px` (35px left for checkbox)
- Border-top: `1px solid #ef90a2` (lighter pink separator)
- Checkbox: FontAwesome `\f192` (circle-o) icon, 12px, positioned left:15px, vertically centered
- Hover state: `bg-white text-[#e8647c]`
- Transition: `0.3s ease`

### Label pills (selected options)
- Background: `bg-[#e8647c]` (pinkish-red)
- Text color: `text-white`
- Padding: `6px 8px`
- Delete icon: opacity 1, white color
- No box-shadow (flat)

### Footer
- Simple centered text: "Made with Component Dock" linking to componentdock.com
- Follow existing template footer pattern from packages/ui

## Key implementation decisions

1. **No Semantic UI dependency** — the original uses Semantic UI CSS/JS for the dropdown. Implement as a fully custom React component using Tailwind, matching the visual appearance without importing Semantic UI.
2. **Label pills** — render as inline elements inside the trigger div, styled to match Semantic UI's `.ui.label` appearance (pinkish-red background, white text).
3. **Circle checkboxes** — use an SVG circle icon (outline when unselected, filled when selected) instead of FontAwesome to avoid the dependency.
4. **Dropdown animation** — use CSS transitions for open/close (0.3s ease matching original).
5. **State management** — `useState<string[]>` for selected options, `useState<boolean>` for open/closed. Click-outside via `useRef` + `useEffect`.
6. **Full-width** — the widget is full-width within its container (not fixed-width like Multiselect 06).

## Dependencies to reuse from packages/ui

- `cn()` for class merging
- Possible `Card` wrapper if needed (unlikely — widget is self-contained)
