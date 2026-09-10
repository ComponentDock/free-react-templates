# WizPath — Implementation Todo

## Phase 1: Scaffold

- [ ] Create `apps/wizpath/` (copy minimal existing app, rename package to `@free-react-templates/wizpath`)
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Set up `src/index.css` with Tailwind v4 entry + `@theme` tokens (brand green `#78a44e`, page bg `#f5f2ed`, etc.)
- [ ] Add Google Fonts link (Roboto) in `index.html`
- [ ] Create `public/CNAME` with `wizpath.free.componentdock.com`

## Phase 2: Components

- [ ] `ProgressIndicator.tsx` — 4-step horizontal bar with active/inactive states
- [ ] `FormInput.tsx` — reusable input with icon, label, active highlight
- [ ] `BasicDetailsForm.tsx` — Step 1 form with all fields in grid layout
- [ ] `StepContent.tsx` — Steps 2–4 placeholder content
- [ ] `StepForm.tsx` — switches displayed step content
- [ ] `WizPath.tsx` — root component: card, progress indicator, step form, buttons

## Phase 3: State & Interaction

- [ ] Step navigation state (current step index)
- [ ] BACK button: decrement step (disabled on step 1)
- [ ] CONTINUE button: increment step (validate required fields on step 1)
- [ ] Progress indicator updates reactively

## Phase 4: Testing

- [ ] Test progress indicator renders 4 steps, highlights active
- [ ] Test step navigation (continue/back)
- [ ] Test form fields render with icons and correct labels
- [ ] Test password show/hide toggle
- [ ] Test responsive layout (single column on mobile)
- [ ] Achieve 100% coverage

## Phase 5: Polish & Deploy

- [ ] Ensure footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code
- [ ] `npm install` at root for lockfile registration
- [ ] Verify with `scripts/verify-app.sh wizpath`
- [ ] Commit, push, open PR, merge
