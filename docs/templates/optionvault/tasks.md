# OptionVault — Implementation Tasks & Design Notes

## Source
- **ColorLib slug:** multiselect-08
- **Preview:** https://preview.colorlib.com/theme/bootstrap/multiselect-08/
- **Description:** Centered multiselect dropdown with categorized optgroups (NFL teams)

## Tasks

### 1. Scaffold app
- [ ] Copy simplest existing app as base (e.g. `apps/zest/` or similar minimal)
- [ ] Rename package to `@free-react-templates/optionvault`
- [ ] Update `public/CNAME` to `optionvault.free.componentdock.com`
- [ ] Update `homepage` in package.json
- [ ] Run `npm install` at repo root to register workspace

### 2. Page layout
- [ ] Create `src/App.tsx` — centered section with padding (7em vertical)
- [ ] Add heading "Multiselect #08" (styled as .heading-section: 28px, black, font-weight 400)

### 3. Multiselect component
- [ ] Build `src/components/MultiSelect.tsx` — custom React multiselect dropdown
- [ ] Props: options grouped by category, placeholder text, onChange callback
- [ ] Features: search input, category group headers, tag chips for selected items
- [ ] Selected items shown as removable chips with × button
- [ ] Dropdown opens below input, highlights lime-green on hover
- [ ] Search filters visible options within groups

### 4. Data
- [ ] Create `src/data/teams.ts` — NFL teams organized by 8 division optgroups
- [ ] NFC EAST, NFC NORTH, NFC SOUTH, NFC WEST, AFC EAST, AFC NORTH, AFC SOUTH, AFC WEST
- [ ] 4 teams per division (32 total)

### 5. Styling (design tokens → Tailwind)
- [ ] Font: Lato via Google Fonts `<link>` in index.html
- [ ] Brand color: #a7d129 → `@theme` as `--color-brand`
- [ ] Body text: gray (#6c757d)
- [ ] Headings: #000, font-weight 400
- [ ] Border radius: 4px on container & dropdown
- [ ] Chip background: rgba(0,0,0,0.1)
- [ ] Group header background: rgba(0,0,0,0.05)

### 6. Accessibility
- [ ] Keyboard navigation: arrow keys, Enter to select, Escape to close
- [ ] ARIA: role="listbox", aria-expanded, aria-selected on options
- [ ] Screen reader announcements for selection changes
- [ ] Focus management between input and dropdown

### 7. Footer
- [ ] Add Component Dock link in footer

### 8. Tests
- [ ] Rendering: heading visible, placeholder text shown
- [ ] Open/close dropdown
- [ ] Select single option → chip appears
- [ ] Select multiple options → multiple chips
- [ ] Deselect option → chip removed
- [ ] Search/filter functionality
- [ ] Keyboard navigation
- [ ] Empty state (no chips when nothing selected)
- [ ] 100% coverage

### 9. Verification
- [ ] Run `npm run verify:app optionvault`
- [ ] Ensure no ColorLib references in app code
- [ ] Check CNAME and homepage are correct

## Design fidelity notes

### Structure order (from preview)
1. Full-page section with vertical padding
2. Centered container row
3. Centered heading (col-md-6, text-center, mb-5)
4. Centered multiselect (col-lg-6, d-flex, justify-content-center, align-items-center)

### Styling fidelity
- The original uses Bootstrap 4 grid + Chosen.js jQuery plugin
- React recreation uses Tailwind CSS grid instead
- Chosen.js multi-select behavior replicated in pure React
- Brand lime-green (#a7d129) is the key differentiator — used for borders, highlights, and links
- Clean white background, minimal design — this is a component demo, not a full landing page
- Lato font (300, 400, 700) loaded from Google Fonts
