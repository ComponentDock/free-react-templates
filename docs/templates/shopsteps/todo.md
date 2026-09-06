# ShopSteps — Implementation Tasks

## Phase 1: Setup

- [ ] Create `apps/shopsteps/` from simplest existing app template
- [ ] Rename package to `@free-react-templates/shopsteps`
- [ ] Set CNAME to `shopsteps.free.componentdock.com`
- [ ] Set homepage to `https://shopsteps.free.componentdock.com`
- [ ] Add Lato font link to index.html (Google Fonts, weights 400, 700, 900)
- [ ] Configure Tailwind theme tokens (#8eb852 green, #92c752 cart price, #e6e6e6 borders, etc.)
- [ ] Add background image placeholder to public/ (or use picsum)

## Phase 2: Components

- [ ] `src/components/StepIndicator.tsx` — 4-step progress bar with arrows
- [ ] `src/components/BasicDetailsStep.tsx` — Step 1: 8 form fields in 2-col grid with icons
- [ ] `src/components/PasswordChangeStep.tsx` — Step 2: 4 password fields
- [ ] `src/components/CartStep.tsx` — Step 3: Cart table with product rows, quantity controls, remove
- [ ] `src/components/CartTotalsStep.tsx` — Step 4: Summary table with shipping radios
- [ ] `src/components/StepNavigation.tsx` — Previous/Next buttons
- [ ] `src/components/QuantityControl.tsx` — +/- quantity input
- [ ] `src/components/FormField.tsx` — Reusable input with icon
- [ ] `src/App.tsx` — Wizard state machine composing all steps

## Phase 3: Testing

- [ ] Test StepIndicator renders 4 steps with correct labels
- [ ] Test step navigation (next/previous)
- [ ] Test BasicDetailsStep renders all 8 fields
- [ ] Test PasswordChangeStep renders 4 password fields
- [ ] Test CartStep renders 2 items with thumbnails, prices, quantity controls
- [ ] Test quantity +/- increments/decrements correctly
- [ ] Test remove item from cart
- [ ] Test CartTotalsStep shows subtotal, shipping options, total
- [ ] Test shipping radio button selection
- [ ] Test form submission on final step
- [ ] Test responsive layout at 767px breakpoint
- [ ] Test accessibility (labels, focus-visible, keyboard navigation)

## Phase 4: Verification

- [ ] `npm run test:coverage` — 100% coverage
- [ ] `npm run typecheck` — no errors
- [ ] `npm run lint` — no errors
- [ ] `npm run build` — successful build
- [ ] `scripts/verify-app.sh shopsteps` passes
