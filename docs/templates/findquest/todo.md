# FindQuest — Implementation Todo

## Phase 1: Setup
- [ ] Copy simplest existing app as base (e.g. searchnest)
- [ ] Rename package to `@free-react-templates/findquest`
- [ ] Update `public/CNAME` to `findquest.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://findquest.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace

## Phase 2: Components
- [ ] Create `Hero.tsx` — full-viewport background image + dark overlay
- [ ] Create `SearchCard.tsx` — gradient card wrapper
- [ ] Create `FromField.tsx` — text input with label
- [ ] Create `ToField.tsx` — text input with label
- [ ] Create `PassengersField.tsx` — dropdown with passenger options
- [ ] Create `DepartDatePicker.tsx` — date picker input
- [ ] Create `ReturnDatePicker.tsx` — date picker input
- [ ] Create `SearchButton.tsx` — green CTA button
- [ ] Create `SearchForm.tsx` — compose all fields into the two-row layout
- [ ] Create `App.tsx` — compose Hero + SearchCard + SearchForm
- [ ] Update `index.css` — Tailwind theme tokens (gradient colors)

## Phase 3: Styling
- [ ] Implement gradient background (blue → purple → pink)
- [ ] Style card with rounded corners and semi-transparency
- [ ] Style white inputs with gray placeholders
- [ ] Style green Search button
- [ ] Implement responsive layout (mobile stacking)
- [ ] Add hero overlay for contrast

## Phase 4: Testing
- [ ] Write tests for Hero component
- [ ] Write tests for SearchCard component
- [ ] Write tests for SearchForm (all field interactions)
- [ ] Write tests for responsive behavior
- [ ] Achieve 100% test coverage
- [ ] Run `npm run test:coverage` — all passing

## Phase 5: Verification
- [ ] Run `scripts/verify-app.sh findquest`
- [ ] Verify no ColorLib references in app code
- [ ] Verify footer links to https://www.componentdock.com/
- [ ] Verify package.json and CNAME are correct
- [ ] Commit as `feat: add FindQuest (ColorLib Search Form V19) template`
- [ ] Open PR, merge immediately, deploy to Surge
