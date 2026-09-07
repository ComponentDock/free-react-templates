# WizardForm — Implementation Tasks & Design Notes

## Source mapping

| Field | Value |
|-------|-------|
| New name | `wizardform` |
| ColorLib source | Colorlib Wizard 25 |
| Source slug | `colorlib-wizard-25` |
| Preview URL | `https://preview.colorlib.com/theme/colorlib-wizard-25/` (404 at prep; screenshot used) |
| Screenshot | `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-25.jpg` |

## Design notes

### Overall layout
- Full-page dark background (`#1a1a2e` navy)
- Centered card container (`#16213e` deep blue) with `border-radius: 8px`
- Card is max-width ~600px, vertically centered on page
- Step indicator bar sits above the form fields inside the card

### Section order (top to bottom inside card)
1. **Step indicator bar** — 3 horizontal steps: "Personal Information", "Bank Information", "Confirm Details"
   - Each step has an icon (checkmark for completed, number/default for future)
   - Active step has accent color background/text; inactive steps are muted
2. **Step 1: Personal Information** — Form with first name, last name, DOB, email, phone
3. **Step 2: Bank Information** — Card number, cardholder name, expiry date, CVV
4. **Step 3: Confirm Details** — Read-only summary of all entered data; card number masked (****)
5. **Navigation arrow** — Bottom-right "Next" button (arrow icon →), top-right "Back" (←) for steps 2–3

### Color palette (from screenshot analysis)
- Page BG: `#1a1a2e`
- Card BG: `#16213e`
- Input BG: `#0f3460`
- Input border: `#2a2a4a`
- Text primary: `#ffffff`
- Text muted: `#a0a0b8`
- Accent (CTA/active step): `#e94560`
- Accent hover: `#c73e54`
- Success/checkmark: `#4caf50`

### Typography
- Font: Poppins (Google Fonts)
- Headings: 1.5rem–2rem, weight 600
- Body/labels: 0.875rem, weight 400
- Input text: 0.875rem

### Interactions
- Step transitions: smooth CSS transition (opacity + slight translateX)
- Form validation: inline field errors below each required input
- Card number masking in confirmation: show only last 4 digits

## Component structure

```
apps/wizardform/src/
  App.tsx                   — main layout (dark bg + centered card)
  components/
    StepIndicator.tsx       — horizontal step bar with icons
    WizardForm.tsx          — state machine for step navigation
    PersonalInfoStep.tsx    — step 1 form fields
    BankInfoStep.tsx        — step 2 form fields
    ConfirmationStep.tsx    — step 3 summary view
    FormField.tsx           — reusable input wrapper with validation
  index.css                 — Tailwind + @theme tokens
  main.tsx                  — entry point (excluded from coverage)
```

## Implementation tasks

1. [ ] Scaffold app folder from simplest existing app, rename package
2. [ ] Set up `index.css` with Tailwind `@theme` tokens (colors, font)
3. [ ] Add Poppins font link to `index.html`
4. [ ] Implement `FormField.tsx` — reusable input with label, error state
5. [ ] Implement `StepIndicator.tsx` — 3-step horizontal bar
6. [ ] Implement `PersonalInfoStep.tsx` — 5 field form
7. [ ] Implement `BankInfoStep.tsx` — 4 field form
8. [ ] Implement `ConfirmationStep.tsx` — read-only summary
9. [ ] Implement `WizardForm.tsx` — step state machine + transitions
10. [ ] Compose in `App.tsx` — dark bg + centered card + wizard
11. [ ] Write tests for each component (TDD: red → green)
12. [ ] Verify 100% coverage
13. [ ] Add footer with Component Dock link
14. [ ] Set `public/CNAME` and `homepage` in `package.json`
15. [ ] Run `npm install` at root to register workspace in lockfile
16. [ ] Typecheck + lint + build
