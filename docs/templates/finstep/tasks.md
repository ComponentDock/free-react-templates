# FinStep — Design Notes & Tasks

Source: ColorLib "Colorlib Wizard 24"
Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-24/index.html
Spec: openspec/specs/template-finstep/spec.md

## Section Order (from reference)

1. Header — "Sign Up To Financial" heading + description
2. Step Indicator Bar — 4 circular step icons with gradient connectors
3. Step 1: About (Personal Information) — first name, last name, address, zip code, phone
4. Step 2: Account — radio toggle, email, password, confirm password
5. Step 3: Ownership (More About Yourself) — name, position, business area, DOB
6. Step 4: Financing — inventory dropdown, financing checkbox, business name, balance
7. Navigation Actions — Previous (gray) + Next (gradient) buttons

## Structure Notes

- Single centered white card (780px) on full-screen background image
- Card: 10px border-radius, drop shadow
- Step indicators: 60px circles, 50% border-radius, inactive = #ccc, active/done = orange-pink-purple gradient
- Connectors: 108px width, 2px height, #e5e5e5 inactive, gradient active
- Content area: white bg with shadow, 5px border-radius, 35px/55px/60px padding
- Floating label pattern: labels animate up on input focus, green underline animation
- Inputs: bottom border only (#e5e5e5), no full border
- Focus state: bottom border turns green (#6bc734), label moves up

## Color Palette

- Gradient accent: rgb(242,113,33) orange → rgb(233,64,87) pink → rgb(138,35,135) purple
- Gradient hover: darker variant
- Focus green: #6bc734
- Card white: #fff
- Heading: #333
- Muted text: #666
- Step inactive: #999
- Connector: #e5e5e5
- Previous button: #999 (hover: #666)

## Component Breakdown

- `App.tsx` — root wrapper with background image, centers card
- `WizardHeader.tsx` — "Sign Up To Financial" heading + description
- `StepIndicator.tsx` — 4-step progress bar with gradient circles + connectors
- `WizardCard.tsx` — white card container with shadow
- `Step1About.tsx` — personal information (5 fields with floating labels)
- `Step2Account.tsx` — account toggle + email/password (4 fields)
- `Step3Ownership.tsx` — name, dropdowns, DOB (6 fields)
- `Step4Financing.tsx` — inventory, financing, business fields (4 fields)
- `FloatingInput.tsx` — reusable floating label input component
- `NavigationActions.tsx` — Previous/Next buttons

## Fidelity Notes

- Background: use `https://picsum.photos/seed/finstep-bg/1920/1080` placeholder
- Fonts: Open Sans + Roboto from Google Fonts (links in index.html)
- Icons: use `lucide-react` equivalents (User for about, Lock for account, FileText for ownership, DollarSign for financing)
- Floating labels: CSS-only animation pattern (label transforms on :focus/:valid)
- Green underline: scaleX(0) → scaleX(1) transition on focus
- Gradient: use CSS `linear-gradient(0deg, #f27121, #e94057, #8a2387)` for buttons and active steps
- Step indicator: custom component with gradient backgrounds
- Date of Birth: 3 small dropdowns side by side
- Radio/checkbox: custom styled with labels
- Responsive: stack to single column on mobile (≤575px), center steps on tablet (≤991px)

## Tasks

- [ ] Set up app scaffold (copy from simplest existing app, rename package)
- [ ] Add Open Sans + Roboto fonts to index.html
- [ ] Create FloatingInput reusable component
- [ ] Create StepIndicator component (4-step gradient)
- [ ] Create WizardCard + WizardHeader containers
- [ ] Implement Step 1 (About) with floating labels
- [ ] Implement Step 2 (Account) with radio + password fields
- [ ] Implement Step 3 (Ownership) with dropdowns + DOB
- [ ] Implement Step 4 (Financing) with dropdown + checkbox + inputs
- [ ] Implement navigation logic (Previous/Next with state management)
- [ ] Add form validation (required fields on each step)
- [ ] Style all components to match design tokens
- [ ] Add responsive breakpoints (575px, 767px, 991px, 1199px)
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh and fix any issues
