# TopicDrop — Implementation Tasks

Recreation of ColorLib Multiselect 07 → new name: topicdrop
Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-07/

## Design Notes

### Structure order (match original)
1. Full-page centered layout (white bg)
2. Heading: "Topic Selector" (Lato, 28px, black, centered)
3. Label: "Select Topics" (above dropdown)
4. Multi-select dropdown component (the core widget)
5. Selected count indicator (below dropdown)
6. Footer: "Made with Component Dock"

### Fidelity notes
- Original uses Semantic UI's `.ui.selection.fluid.dropdown` with `multiple`
  attribute — we replace with a custom React component
- Original uses Font Awesome 4.7 circle icons for checkbox indicators —
  we use lucide-react Check/Square icons instead
- Brand color `#e8647c` (pink/rose) must be the accent for:
  - Active/focus border on the dropdown
  - Selected item highlight
  - Label styling
  - Link color
- Font: Lato (300, 400, 700) via Google Fonts
- Dropdown border-radius: 4px
- Dropdown shadow when open: `0px 3px 19px -15px rgba(0,0,0,0.41)`
- Menu items: white text on `#e8647c` bg, borders `#ef90a2`
- Item hover: white bg, `#e8647c` text

### Options list (exact from preview)
Family, Family Law, Friends, Co-workers, Startup, Work, Basketball,
Baseball, Investors, US Embassy

## Tasks

### Phase 1: Scaffold
- [ ] Create `apps/topicdrop/` from simplest existing app (e.g. optselect)
- [ ] Rename package to `@free-react-templates/topicdrop`
- [ ] Set `public/CNAME` to `topicdrop.free.componentdock.com`
- [ ] Set `homepage` in package.json
- [ ] Run `npm install` at root to register workspace

### Phase 2: Styling
- [ ] Load Lato font via Google Fonts in `index.html`
- [ ] Set up Tailwind theme with brand color `--color-brand: #e8647c`
- [ ] Style the page layout (centered, white bg, section padding)

### Phase 3: Components
- [ ] `Heading.tsx` — centered h2 "Topic Selector"
- [ ] `TopicSelector.tsx` — the main multi-select dropdown:
  - Trigger button with placeholder/count
  - Dropdown panel with options
  - Checkbox indicators per option
  - Select all / clear all controls
  - Keyboard navigation
  - Click outside to close
- [ ] `SelectedCount.tsx` — shows count below dropdown
- [ ] `Footer.tsx` — "Made with Component Dock" link

### Phase 4: Tests (TDD)
- [ ] Heading renders with correct text
- [ ] Dropdown opens/closes on click
- [ ] Options can be selected/deselected
- [ ] Multiple selection works
- [ ] Keyboard navigation (ArrowDown, ArrowUp, Enter, Escape)
- [ ] Click outside closes dropdown
- [ ] Selected count updates correctly
- [ ] Footer renders with correct link
- [ ] 100% coverage

### Phase 5: Verification
- [ ] `scripts/verify-app.sh topicdrop` passes
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
