# Optlatch — Implementation Tasks

## Source

- ColorLib: Multiselect 10 — https://colorlib.com/wp/template/multiselect-10/
- Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-10/
- New name: `optlatch`

## Task Outline

### Phase 1: Project Setup

- [ ] Copy simplest existing app as scaffold (e.g. apps/pickset)
- [ ] Rename package to `@free-react-templates/optlatch`
- [ ] Update `public/CNAME` to `optlatch.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://optlatch.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile

### Phase 2: Design Tokens & Theme

- [ ] Add Lato font via Google Fonts `<link>` in `index.html`
- [ ] Set Tailwind theme tokens in `src/index.css`:
  - `--color-brand: #ff5959` (coral red)
  - `--color-surface: #ffffff`
  - `--color-page: #f8f9fd`
  - Font family: Lato

### Phase 3: Components (TDD)

- [ ] `DropdownButton.tsx` — clickable trigger showing label + count + chevron
- [ ] `DropdownList.tsx` — search input + scrollable checkbox list
- [ ] `StateCheckbox.tsx` — custom checkbox item with label
- [ ] `MultiSelect.tsx` — orchestrator combining button + list + state logic
- [ ] `App.tsx` — page layout: centered heading + MultiSelect component

### Phase 4: State Management

- [ ] Selected states as `Set<string>` in parent state
- [ ] Search query as controlled input
- [ ] Open/closed toggle state
- [ ] Filter logic: filter states by search string (case-insensitive contains)
- [ ] Count derived from selected set size

### Phase 5: Styling (match reference tokens)

- [ ] Page background: `bg-[#f8f9fd]`
- [ ] Dropdown container: white bg, `rounded-[5px]`, shadow `0px 10px 30px -4px rgba(0,0,0,0.15)`
- [ ] Dropdown button: white bg, padding 15px 20px, flex between label and chevron
- [ ] Quantity text: brand color `#ff5959`
- [ ] Chevron icon: brand color, rotates on open
- [ ] Search input: `bg-black/5`, rounded `4px`, no border
- [ ] Checkbox list: `max-height: 200px`, overflow-y auto
- [ ] Custom checkbox: unchecked = light gray square, checked = coral red square with check
- [ ] Transitions: 0.3s ease on dropdown show/hide

### Phase 6: Footer

- [ ] Add minimal footer with Component Dock link

### Phase 7: Testing (100% coverage)

- [ ] Test: page renders heading + dropdown button
- [ ] Test: button click toggles dropdown open/closed
- [ ] Test: search input filters visible states
- [ ] Test: no-match search shows empty list
- [ ] Test: checkbox selection updates count display
- [ ] Test: multiple selection shows correct count
- [ ] Test: deselection decrements count
- [ ] Test: search clears when dropdown closes and reopens
- [ ] Test: keyboard navigation through checkboxes
- [ ] Test: visual styling (bg color, font, shadow)

### Phase 8: Verification

- [ ] `scripts/verify-app.sh optlatch` passes (typecheck + lint + 100% coverage + build)
- [ ] No ColorLib references in `apps/optlatch/`
- [ ] Footer links to Component Dock
