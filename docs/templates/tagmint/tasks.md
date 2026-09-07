# Tagmint — Implementation Tasks

Recreation of ColorLib Multiselect 20 as a React multi-select component showcase.

## Task checklist

### Phase 1: Scaffolding

- [ ] Create `apps/tagmint/` from simplest existing app (copy + rename)
- [ ] Rename package to `@free-react-templates/tagmint`
- [ ] Update `public/CNAME` to `tagmint.free.componentdock.com`
- [ ] Update `homepage` in `package.json` to `https://tagmint.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile

### Phase 2: Component architecture

- [ ] Create `src/App.tsx` — page layout with centered heading + 3 sections
- [ ] Create `src/components/MultiSelectSection.tsx` — reusable section with variant prop
- [ ] Create `src/components/TagChip.tsx` — individual tag chip with close button
- [ ] Create `src/components/MultiSelectDropdown.tsx` — dropdown trigger + option list
- [ ] Create `src/index.css` — Tailwind entry + theme tokens (3 tag colors, page bg)

### Phase 3: Multi-select functionality

- [ ] Implement state management for selected items per section
- [ ] Implement dropdown open/close toggle
- [ ] Implement option selection → tag chip rendering
- [ ] Implement tag chip close button → item deselection
- [ ] Implement placeholder text when no items selected
- [ ] Add "Limit to 5" selection cap per section

### Phase 4: Styling (fidelity)

- [ ] Page background: #efefef
- [ ] Heading: Roboto, 20px, centered
- [ ] Body text: Roboto, 300 weight, #b3b3b3
- [ ] Section 1 tags: #e5e4cc background
- [ ] Section 2 tags: #c7f0db background
- [ ] Section 3 tags: #d3f4ff background
- [ ] Tag chips: 7px padding, no border, 4px border-radius
- [ ] Tag close button: positioned top-right (26px right padding on chip)
- [ ] Dropdown: white background, 4px radius, shadow 0 15px 30px rgba(0,0,0,0.2)
- [ ] Tag chip shadow: 0 1px 4px rgba(0,0,0,0.1)
- [ ] Search input: 32px height, 14px font

### Phase 5: Footer + compliance

- [ ] Add Component Dock footer link
- [ ] Remove any ColorLib references from code
- [ ] Verify no `colorlib.com` or `preview.colorlib.com` strings in app files

### Phase 6: Tests (TDD)

- [ ] Test: page renders heading
- [ ] Test: three sections render
- [ ] Test: placeholder text when empty
- [ ] Test: selecting items shows tag chips with correct color
- [ ] Test: deselecting via close button removes chip
- [ ] Test: limit 5 selections enforced
- [ ] Test: keyboard navigation
- [ ] Achieve 100% coverage

### Phase 7: Build + deploy

- [ ] Typecheck passes
- [ ] Lint passes
- [ ] All tests pass with 100% coverage
- [ ] Build succeeds
- [ ] Commit: `feat: add tagmint (multi-select component showcase)`
- [ ] Push and merge PR
