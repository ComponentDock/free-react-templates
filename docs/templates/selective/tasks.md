# Selective — Implementation Notes

## Source
- ColorLib: Multiselect 10
- Slug: multiselect-10
- Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-10/

## Structure (section order)
1. **Page wrapper** — full viewport section, centered vertically
2. **Heading** — "Multi-Select" (or similar), black, 28px
3. **Dropdown container** — white card with shadow, border-radius 5px
   - Dropdown button: label + quantity + chevron icon
   - Dropdown list (hidden by default):
     - Search input
     - Scrollable checkbox list (US states)

## Fidelity Notes

### Component behavior
- Toggle open/closed on button click (no outside-click close in original)
- Search filters list items in real-time (substring match)
- Checkboxes are custom-styled (FontAwesome icons: empty square → checked square)
- Quantity shows "(N)" when items selected, "(Any)" when none
- Chevron rotates or stays — original uses `fa-chevron-down` without animation

### Design token mapping to Tailwind
- Background: `bg-[#f8f9fd]`
- Text: `text-gray-500` (body), `text-black` (headings)
- Accent: `text-[#ff5959]` / `bg-[#ff5959]`
- Dropdown bg: `bg-white`
- Shadow: `shadow-[0px_10px_30px_-4px_rgba(0,0,0,0.15)]`
- Border-radius: `rounded-[5px]`
- Search input: `bg-black/5 rounded`
- Section: `py-28` (approx 7em)

### State list
- 50 US states as default data
- Filtered via simple string includes on lowercase

### Placeholder images
- None needed — this is a pure component template with no images

## Tasks

- [ ] Create `apps/selective/` workspace (copy from simplest existing app)
- [ ] Set up `src/index.css` with Tailwind + Lato font via Google Fonts
- [ ] Create `MultiSelectDropdown` component with toggle, search, checkbox list
- [ ] Create `CheckboxItem` sub-component with custom styling
- [ ] Wire up state: open/close, search filter, selection tracking
- [ ] Add US states data
- [ ] Style per design tokens (coral accent, white card, shadow)
- [ ] Add footer linking to Component Dock
- [ ] Write tests (100% coverage): toggle, search, select, deselect, quantity
- [ ] Validate spec: `npm run spec:validate`
