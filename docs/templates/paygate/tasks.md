# PayGate — Design Notes & Tasks

Source: ColorLib "Colorlib Wizard 25"
Preview: https://preview.colorlib.com/theme/colorlib-wizard-25/ (404 — screenshot used as primary reference)
Spec: openspec/specs/template-paygate/spec.md

## Section Order (from reference)

1. Header — "Create Payment Account" heading + description
2. Step Indicator — 3 numbered circles with connecting lines
3. Step 1: Personal Information — full name, email, phone
4. Step 2: Bank Information — card number, expiry, CVV, cardholder name
5. Step 3: Confirmation — summary of entered data + submit
6. Navigation Actions — Previous (gray) + Next/Submit (blue) buttons
7. Footer — Component Dock link

## Structure Notes

- Single centered white card on light gray (#f6f6f6) background
- Card: ~10px border-radius, drop shadow
- Step indicators: ~48px circles, 50% border-radius, inactive = #ccc, active = #1a73e8 blue
- Connectors: thin lines between step circles, gray inactive, blue when completed
- Content area: white bg with padding
- Inputs: full border style with labels
- Focus state: blue border (#1a73e8)
- Buttons: blue primary (#1a73e8), gray secondary (#999)

## Color Palette

- Primary blue: #1a73e8 (accent, active steps, buttons, links)
- Green accent: #77CC6D (icon highlights)
- Green dark: #09aa59 (secondary accent)
- Body text: #26282b
- Muted text: #666
- Background: #f6f6f6
- Card white: #fff
- Border light: #eee
- Step inactive: #ccc / #999
- Button secondary: #999 (hover: #666)

## Component Breakdown

- `App.tsx` — root wrapper with background, centers card
- `WizardHeader.tsx` — "Create Payment Account" heading + description
- `StepIndicator.tsx` — 3-step progress bar with numbered circles + connectors
- `WizardCard.tsx` — white card container with shadow
- `Step1Personal.tsx` — personal information (3 fields)
- `Step2Bank.tsx` — bank card fields (4 fields)
- `Step3Confirm.tsx` — summary view + submit
- `NavigationActions.tsx` — Previous/Next/Submit buttons

## Fidelity Notes

- Background: solid #f6f6f6 (no image — clean, minimal design)
- Fonts: system sans-serif stack (no Google Fonts needed)
- Icons: use `lucide-react` equivalents (User for personal, CreditCard for bank, CheckCircle for confirmation)
- Step indicator: custom component with numbered circles
- Blue underline on active step: transition effect
- Inputs: standard bordered inputs with labels above
- Card number input: format with spaces every 4 digits
- Expiry date: MM/YY format input
- CVV: password-type input with max 4 chars
- Confirmation: display masked card (**** **** **** 1234)
- Responsive: stack to single column on mobile (≤575px)

## Tasks

- [ ] Set up app scaffold (copy from simplest existing app, rename package)
- [ ] Create StepIndicator component (3-step with numbered circles)
- [ ] Create WizardCard + WizardHeader containers
- [ ] Implement Step 1 (Personal Information) with form fields
- [ ] Implement Step 2 (Bank Information) with card fields
- [ ] Implement Step 3 (Confirmation) with summary view
- [ ] Implement navigation logic (Previous/Next/Submit with state management)
- [ ] Add form validation (required fields on each step)
- [ ] Style all components to match design tokens
- [ ] Add responsive breakpoints (575px, 767px, 991px)
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh and fix any issues
