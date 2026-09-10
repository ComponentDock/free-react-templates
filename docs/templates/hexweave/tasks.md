# Hexweave — Implementation Tasks

## Source

- ColorLib Wizard 5: https://colorlib.com/wp/template/colorlib-wizard-5/
- Preview: https://preview.colorlib.com/theme/colorlib-wizard-5/ (UNREACHABLE — 404, falling back to screenshot)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-5.jpg

## Design Tokens (from screenshot analysis)

- Background: #f5e6d3 (warm light peach/beige, subtle gradient)
- Accent: #e8a87c (warm peach-orange) — step bars active/completed, button fill
- Card: #ffffff (white), subtle drop-shadow, sharp corners, generous padding
- Labels: #999999 (light gray)
- Input borders: #dddddd (light gray)
- Heading: #333333 (dark gray/black)
- Step inactive: #dddddd (light gray bar)
- Button: #e8a87c fill, #ffffff text, rounded corners (~4px), right arrow icon
- Font: "Open Sans", sans-serif
- Card max-width: ~500px

## Structure (section order from screenshot)

1. Split-screen layout wrapper (illustration left, form right)
2. Illustration panel: decorative 3D scene (lamp, table, plants)
3. White form card:
   a. Heading: "Billing Details" (changes per step)
   b. Progress indicator: 4 horizontal bars (step names below)
   c. Step 1 form: First Name*, Last Name*, Company, Country*, Address fields, City*
   d. Step 2 form: Shipping Address, City, State, Postal, Phone, Email
   e. Step 3 form: Cardholder, Card Number, Expiry, CVV, Zip
   f. Step 4: Confirmation summary table
   g. Navigation: "← Previous" / "Next →" buttons (or "Submit" on step 4)
4. Footer: "Component Dock" link

## Components

1. WizardLayout — split-screen wrapper with illustration
2. StepIndicator — 4 horizontal progress bars with step labels
3. BillingStep — form fields for billing details
4. ShippingStep — form fields for shipping
5. PaymentStep — form fields for payment
6. ConfirmStep — summary table with all details
7. FormActions — Previous/Next/Submit buttons
8. Footer — Component Dock link

## Tasks

- [ ] Scaffold app: copy simplest wizard app, rename package to @free-react-templates/hexweave
- [ ] Set up index.html with Open Sans font link
- [ ] Create index.css with Tailwind + @theme tokens (peach bg, orange accent)
- [ ] Build WizardLayout with split-screen (illustration placeholder left, card right)
- [ ] Build StepIndicator with 4 bars (active/completed = orange, inactive = gray)
- [ ] Build BillingStep (First Name, Last Name, Company, Country dropdown, Address, City)
- [ ] Build ShippingStep (Address, City, State, Postal, Phone, Email)
- [ ] Build PaymentStep (Cardholder, Card Number, Expiry, CVV, Zip)
- [ ] Build ConfirmStep (summary table from all form state)
- [ ] Build FormActions (Previous/Next/Submit with arrow icon)
- [ ] Build state management for wizard (current step, form data, navigation)
- [ ] Add required field validation
- [ ] Add mobile responsive stacking (< 768px)
- [ ] Build Footer with Component Dock link
- [ ] Wire App.tsx to compose all sections
- [ ] Write tests (Vitest + RTL) — 100% coverage
- [ ] Per-app gate: typecheck + lint + tests + build
- [ ] Public/CNAME + homepage config

## Fidelity Notes

- Preview was UNREACHABLE (404). All design details derived from the screenshot.
- The illustration panel is decorative — use a placeholder illustration or simplified
  geometric shapes in warm tones (sage green, light blue, yellow, dark green).
- The progress indicator uses simple horizontal bars (not numbered circles).
- Form inputs have thin light gray borders, no heavy styling.
- The card has sharp corners (not rounded) based on screenshot.
- Country field uses a dropdown select element.
- Button text includes a right arrow (→) character or icon.
