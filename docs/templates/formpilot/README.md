# FormPilot — Implementation Tasks & Design Notes

**Source**: ColorLib Wizard 21 (`colorlib-wizard-21`)
**Preview**: `https://preview.colorlib.com/theme/colorlib-wizard-21/` (unreachable at prep time)
**New name**: `formpilot`

## Section Order (from ColorLib description + wizard-series pattern)

1. **Gradient background** — full-page gradient (blue → pink → gold), consistent with Wizard series
2. **Page title** — "FORM WIZARD" or similar, white/semi-transparent text
3. **Wizard card** — centered white card (max-width ~790px), rounded corners, shadow
4. **Sidebar step indicator** — vertical, left side of card, numbered circles with checkmarks for completed steps
5. **Form content area** — right side of card, renders current step
   - Step 1: Account Setup (email, password, confirm password)
   - Step 2: Payment Details (card holder, card number, CVC, expiration)
   - Step 3: Confirmation / Review + Submit
6. **Navigation buttons** — Back (hidden on Step 1), Next / Submit
7. **Success screen** — replaces form after submission, "Start Over" button
8. **Footer** — Component Dock branding link

## Fidelity Notes

- **Layout**: Centered card layout with vertical sidebar step indicator (same pattern as wizardry/Wizard 27)
- **Card**: White background, ~10px border-radius, subtle box-shadow (`0 3px 10px rgba(0,0,0,0.1)`)
- **Step indicator**: Left sidebar with numbered circles; active step gets brand color fill; completed steps show checkmark
- **Gradient background**: Blue → pink → gold gradient (consistent across Wizard 21–30 series)
- **Typography**: Montserrat for headings, Open Sans for body text
- **Buttons**: Rounded, indigo/blue primary color for Next/Submit; Back button in muted/secondary style
- **Form fields**: Standard text inputs with validation error messages inline
- **Responsive**: Single-column stacking on mobile (card full-width)

## Implementation Tasks

1. [ ] Scaffold app from wizardry template (copy structure, rename package)
2. [ ] Create `src/types.ts` with WizardData type and STEPS constant
3. [ ] Implement `StepIndicator` component (vertical sidebar, numbered circles, checkmarks)
4. [ ] Implement `AccountStep` component (email, password, confirm password)
5. [ ] Implement `PaymentStep` component (card holder, card number, CVC, expiration)
6. [ ] Implement `ConfirmStep` component (review summary + submit)
7. [ ] Implement `SuccessScreen` component (completion message + Start Over)
8. [ ] Implement `FormActions` component (Back / Next / Submit buttons)
9. [ ] Implement `Footer` component (Component Dock link)
10. [ ] Wire up `App.tsx` with state management, validation, step navigation
11. [ ] Add `index.css` with Tailwind theme tokens (gradient, brand colors, fonts)
12. [ ] Write unit tests for all components (100% coverage)
13. [ ] Verify: typecheck, lint, tests, build all pass

## Design Token Notes (inferred, preview unreachable)

- Primary gradient: `bg-gradient-to-br from-[#33a7d7] via-[#d76b9a] to-[#e8c547]` (blue → pink → gold)
- Card: `bg-white rounded-[10px] shadow-[0_3px_10px_rgba(0,0,0,0.1)]`
- Heading font: `'Montserrat', sans-serif`
- Body font: `'Open Sans', sans-serif`
- Step active color: `#33a7d7` (sky blue) or `#364cd2` (indigo)
- Button primary: `#364cd2` (indigo)
