# SignFlow — Design Notes & Tasks

Source: ColorLib "Colorlib Wizard 21"
Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-21/index.html
Spec: openspec/specs/template-signflow/spec.md

## Section Order (from reference)

1. Step Indicator Bar — horizontal progress with 3 circular step icons, connecting lines
2. Step 1: Account Information — username, email, password, confirm password
3. Step 2: Payment Information — card type dropdown, card number, CVC, expiry month/year dropdowns
4. Step 3: Confirmation Summary — read-only table of all entered values
5. Navigation Actions — Previous (text link, left) + Next (circular green button, right)

## Structure Notes

- Single centered white card on full-screen background image
- Card: 851px wide, 10px border-radius, drop shadow
- Form content area: blue (#359bfa) background, 5px border-radius, 32px/115px/23px/75px padding
- Step indicator: horizontal bar above form, circles 50px diameter, 50% border-radius
- Steps connected by gray (#e5e5e5) lines, 6px height
- Active step: green (#6eba2a) circle with shadow
- Done step: green (#6eba2a) circle
- Inactive step: gray (#ccc) circle

## Component Breakdown

- `App.tsx` — root wrapper with background image, centers card
- `StepIndicator.tsx` — horizontal step bar with 3 circles + connectors
- `WizardCard.tsx` — white card container with shadow
- `Step1Account.tsx` — account information form (4 fields)
- `Step2Payment.tsx` — payment information form (5 fields)
- `Step3Confirm.tsx` — confirmation summary table
- `NavigationActions.tsx` — Previous/Next buttons

## Fidelity Notes

- Background: use `https://picsum.photos/seed/signflow-bg/1920/1080` placeholder
- Font: Raleway from Google Fonts (link in index.html)
- Icons: use `lucide-react` equivalents (User for account, CreditCard for payment, FileText for receipt)
- Step indicator: custom component matching the circular design
- Form validation: implement required field validation on Steps 1 and 2
- Confirmation: display entered values in a styled table
- Colors: match #359bfa (blue content), #2f8be0 (input blue), #6eba2a (green buttons/active), #5fa125 (green hover)
- Button shape: circular (50% border-radius), 50px diameter, green background, drop shadow
- Back button: transparent, no shadow, gray text
- Responsive: stack to single column on mobile (≤575px), reduce step connector widths

## Tasks

- [ ] Set up app scaffold (copy from simplest existing app, rename package)
- [ ] Add Raleway font to index.html
- [ ] Create StepIndicator component
- [ ] Create WizardCard container
- [ ] Implement Step 1 (Account Information) form
- [ ] Implement Step 2 (Payment Information) form
- [ ] Implement Step 3 (Confirmation Summary) table
- [ ] Implement navigation logic (Previous/Next with state management)
- [ ] Add form validation (required fields on Steps 1 & 2)
- [ ] Style all components to match design tokens
- [ ] Add responsive breakpoints
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh and fix any issues
