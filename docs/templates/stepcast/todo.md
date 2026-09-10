# StepCast — Implementation Todo

## Setup
- [ ] Scaffold app from simplest existing template (copy + rename package)
- [ ] Set package name to @free-react-templates/stepcast
- [ ] Set CNAME to stepcast.free.componentdock.com
- [ ] Add Google Fonts Lato (weights 400, 700, 900) to index.html
- [ ] Configure Tailwind theme tokens (brand colors, fonts, radius)
- [ ] Set up vitest + testing-library, verify 100% coverage baseline

## Components
- [ ] StepIndicator — 4-step horizontal progress with active/inactive states
- [ ] BasicDetailsForm — Step 1: 9 inputs in 2/3-col grid with icons
- [ ] PasswordChangeForm — Step 2: 4 password fields with toggle
- [ ] CartTable — Step 3: product rows with thumbnails, quantity stepper, remove
- [ ] CartTotals — Step 4: subtotal, shipping radio, service, total
- [ ] WizardButton — shared Back/Continue button component
- [ ] StepCast (root) — state machine for step navigation

## Features
- [ ] Step forward/backward navigation
- [ ] Active step visual state (fill vs outline)
- [ ] Input focus border color transition (#8eb852)
- [ ] Password visibility toggle (Eye/EyeOff)
- [ ] Quantity +/- stepper with live total recalc
- [ ] Product row removal from cart
- [ ] Shipping radio toggle (Free / Local pickup)
- [ ] Responsive: single-column at ≤767px, full-width card

## Polish
- [ ] Food-themed background image (picsum.photos placeholder)
- [ ] Uppercase headings with Lato Black, letter-spacing 2px
- [ ] Button hover state (#a1d15e)
- [ ] Footer with Component Dock link
- [ ] Remove BACK button on final step

## Verification
- [ ] typecheck passes
- [ ] lint passes
- [ ] 100% test coverage (Vitest)
- [ ] build succeeds
- [ ] No ColorLib references in app code
- [ ] PR description includes source, preview URL, design tokens
