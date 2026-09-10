# Wizlane — Implementation TODO & Design Notes

## Source

- **ColorLib**: Colorlib Wizard 8 (`colorlib-wizard-8`)
- **Category**: Bootstrap Wizard Templates / Food Store Checkout
- **Description**: 4-step food store checkout wizard with green accent stepper, centered white card on warm background

## Structure Order (section-by-section)

1. **App shell** — `App.tsx` composes the full-page centered card layout
2. **Background** — warm off-white/beige textured background (CSS gradient or noise texture)
3. **WizardCard** — centered white card with rounded corners + drop shadow containing:
   - **StepIndicator** — 4 connected green circles with icons (cart, lock, truck, card) + gray connecting line
   - **StepHeading** — "BASIC DETAILS" / "ACCOUNT" / "SHIPPING" / "PAYMENT" in bold uppercase
4. **Step1 — BasicDetails** — 2-column grid:
   - First Name + Last Name (person icons)
   - Email ID + User ID (mail + ID card icons)
   - Country + State + City (3-column row, flag/pin icons)
   - Password field + eye toggle (active/filled state)
5. **Step2 — AccountSecurity** — password confirmation, security questions, username display
6. **Step3 — ShippingDetails** — delivery address fields (street, apartment, zip, city, state)
7. **Step4 — PaymentInfo** — card number, expiry, CVV, cardholder name
8. **SuccessScreen** — order confirmation message + "Start New Order" button
9. **Footer** — "Made with Component Dock" link to componentdock.com

## Design Notes

### Colors

- Primary green accent: `#77CC6D` (stepper, icons, buttons)
- Secondary green: `#09aa59` (active step fill, borders)
- Card background: `#ffffff` (white)
- Page background: warm off-white `#f5f0eb` (beige paper texture feel)
- Text primary: `#000000` / `#222222` (headings)
- Text secondary: `#4B4B4B` (body)
- Input borders: `#e0e0e0` (light gray)
- Input active fill: `#e8f0fe` (light blue-grey)
- Connector line: `#d0d0d0` (gray)

### Typography

- Headings: system sans-serif, bold/semibold, uppercase, ~18-24px
- Form labels: system sans-serif, regular weight, ~14px
- Buttons: system sans-serif, uppercase, bold, ~14px, letter-spacing 1px
- Stepper labels: system sans-serif, small, ~12px, uppercase

### Layout

- Full viewport centered card (`min-h-screen flex items-center justify-center`)
- Card max-width: ~700px, padding: 40px, border-radius: ~12-16px
- Card shadow: `0 4px 24px rgba(0,0,0,0.08)`
- Form: 2-column grid on desktop (gap: 16px), single column on mobile
- 3-column row for Country/State/City on desktop
- Full-width password field row
- Buttons: full-width row, BACK left-aligned, CONTINUE right-aligned, flex justify-between

### Wizard Behavior

- State managed in `WizardCard` with `currentStep` (1-4) and `formData` object
- Step transitions: simple CSS transition (fade or slide)
- Form data persisted across steps via parent state
- Back button restores previous step values
- Validation runs before advancing; errors shown below invalid fields
- Step 4 SUBMIT triggers success screen

### Stepper Details

- 4 circles (40px diameter), connected by horizontal line (2px height)
- Active step: filled `#77CC6D` background, white icon
- Incomplete step: `#77CC6D` border, `#77CC6D` icon outline, transparent fill
- Completed step: filled `#77CC6D` background, white checkmark or filled icon
- Each circle has a label below: "STEP 01", "STEP 02", etc.
- Icons: `ShoppingCart`, `Lock`, `Truck`, `CreditCard` from lucide-react

### Button Styling

- Background: `#77CC6D`
- Text: white, uppercase, bold, letter-spacing
- Border-radius: 24px (pill shape)
- Padding: 12px 32px
- Hover: slightly darker green (`#66b85c`)

### Fidelity Notes from Screenshot

- The original uses food-themed decorative elements around the card (bowl with chopsticks, peppercorns, green leaves, tomatoes) — these can be decorative picsum images or omitted in favor of a clean implementation
- The card is cleanly centered with generous whitespace
- Form inputs have green icons INSIDE the input field on the right side
- The password field shows a filled/active state (light blue-grey background) with an eye toggle icon
- Step labels say "STEP 01", "STEP 02", "STEP 03", "STEP 04" in small uppercase text below each circle

### Images

- Background decorative (optional): `https://picsum.photos/seed/wizlane-food-bg/1920/1080` (as subtle background)
- No other images needed — this is a form-focused template

### Dependencies

- No new dependencies expected
- Use `packages/ui` Button/ButtonLink components
- lucide-react icons: `ShoppingCart`, `Lock`, `Truck`, `CreditCard`, `User`, `Mail`, `IdCard`, `MapPin`, `Flag`, `Eye`, `EyeOff`, `Check`
