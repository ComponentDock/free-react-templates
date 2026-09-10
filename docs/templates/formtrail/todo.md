# FormTrail — Task Outline

## Phase 1: Setup
- [ ] Create `apps/formtrail/` from simplest existing app (copy + rename)
- [ ] Set package name to `@free-react-templates/formtrail`
- [ ] Set `public/CNAME` to `formtrail.free.componentdock.com`
- [ ] Set `homepage` in `package.json` to `https://formtrail.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile

## Phase 2: Theme & Layout
- [ ] Add Poppins font via Google Fonts link in `index.html`
- [ ] Configure `@theme` in `index.css` with brand tokens:
  - `--color-brand: #3377c0`
  - `--color-brand-hover: #3b87d9`
  - `--color-text-primary: #333333`
  - `--color-text-secondary: #999999`
  - `--color-border: #cccccc`
  - `--color-grid-inactive: #b3b3b3`
- [ ] Create full-screen background wrapper (picsum.photos placeholder)
- [ ] Create centered WizardCard container (max-width 819px, white bg)

## Phase 3: Components (TDD)
- [ ] `StepIndicator` — displays "N / 3", accepts `currentStep` prop
- [ ] `WizardHeading` — uppercase, brand blue, centered
- [ ] `FormField` — label + input with left icon, 42px height
- [ ] `FormRow` — 2-column flex layout
- [ ] `StepOne` (User Profile) — 6 fields in 3 rows
- [ ] `StepTwo` (Residential Address) — 6 fields in 3 rows
- [ ] `StepThree` (Category Grid) — 3x2 selectable cards
- [ ] `CategoryCard` — thumbnail + vertical text sidebar
- [ ] `WizardNav` — Previous (outlined) + Next (filled) buttons
- [ ] `ValidationMsg` — shown when fields empty

## Phase 4: Wizard Logic
- [ ] State management: `currentStep` (1-3), form data per step
- [ ] Step transitions with Previous/Next
- [ ] Category selection toggling (step 3)
- [ ] Validation: disable Next when required fields empty
- [ ] Form field value persistence across steps

## Phase 5: Responsive
- [ ] Breakpoint at 767px: single-column form, 2-column grid, no bg image
- [ ] Adjust card padding for mobile

## Phase 6: Footer & Polish
- [ ] Add Component Dock footer (link to componentdock.com)
- [ ] Remove any ColorLib references from comments
- [ ] Verify no ColorLib strings in any app file

## Phase 7: Testing
- [ ] Unit tests for all components (Vitest + RTL)
- [ ] Test wizard navigation (step forward, step back)
- [ ] Test category selection toggling
- [ ] Test validation message visibility
- [ ] Test responsive behavior
- [ ] Achieve 100% coverage
