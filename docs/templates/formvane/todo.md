# FormVane — Implementation Todo

## Phase 1: Scaffold

- [ ] Create `apps/formvane/` (copy minimal existing app, rename package to `@free-react-templates/formvane`)
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Set up `src/index.css` with Tailwind v4 entry + `@theme` tokens (brand blue `#3377c0`, button hover `#3b87d9`)
- [ ] Add Google Fonts link (Poppins: 400, 500, 600) in `index.html`
- [ ] Create `public/CNAME` with `formvane.free.componentdock.com`
- [ ] Set `homepage` in `package.json` to `https://formvane.free.componentdock.com`

## Phase 2: Components

- [ ] `FormInput.tsx` — reusable input with left icon, label, 42px height, sharp corners, blue focus border
- [ ] `SelectInput.tsx` — dropdown with chevron-down icon, custom styling
- [ ] `StepIndicator.tsx` — "N / 3" display, absolute top-right, large number + small suffix
- [ ] `StepHeading.tsx` — blue uppercase heading (Poppins SemiBold 35px)
- [ ] `UserProfileForm.tsx` — Step 1: 6 fields (Full Name, Education Level, Email ID, Phone Number, Specialization, Date of Birth) in 2-column grid
- [ ] `AddressForm.tsx` — Step 2: Country dropdown + 5 fields (Street Address, Apartment, Town/City, County, Postcode/Zip with password toggle)
- [ ] `CategoryGrid.tsx` — Step 3: 3x2 selectable category cards with image thumbnails and vertical text labels
- [ ] `ActionButtons.tsx` — BACK (outlined) + NEXT (filled) buttons, disabled state with helper text
- [ ] `FormVane.tsx` — root component: full-viewport bg, centered card, step state, composed steps

## Phase 3: State & Interaction

- [ ] Step navigation state (current step index: 1, 2, 3)
- [ ] NEXT button: increment step (validate all fields filled before advancing)
- [ ] BACK button: decrement step (hidden on step 1)
- [ ] Step indicator updates reactively (1/3 → 2/3 → 3/3)
- [ ] Category card selection (single-select, toggle active class)
- [ ] Country dropdown with default "United States"
- [ ] Postcode/Zip password show/hide toggle
- [ ] Disabled state: when fields empty, hide buttons, show helper text

## Phase 4: Testing

- [ ] Test page renders centered card with step indicator "1 / 3"
- [ ] Test Step 1 renders 6 input fields with correct labels and icons
- [ ] Test input focus changes border to blue
- [ ] Test NEXT button advances to Step 2
- [ ] Test Step 2 renders Country dropdown and 5 input fields
- [ ] Test Country dropdown has correct options
- [ ] Test Postcode/Zip password toggle works
- [ ] Test BACK button returns to Step 1 from Step 2
- [ ] Test Step 3 renders 6 category cards in 3-column grid
- [ ] Test category card selection (click to activate, single-select)
- [ ] Test category card hover opacity effect
- [ ] Test BACK button absent on Step 1
- [ ] Test disabled state when fields are empty
- [ ] Test responsive layout (single column on mobile)
- [ ] Achieve 100% coverage

## Phase 5: Polish & Deploy

- [ ] Ensure footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code (comments, strings, or data)
- [ ] Replace category images with `picsum.photos/seed/formvane-N/W/H`
- [ ] `npm install` at root for lockfile registration
- [ ] Verify with `scripts/verify-app.sh formvane`
- [ ] Commit, push, open PR, merge
