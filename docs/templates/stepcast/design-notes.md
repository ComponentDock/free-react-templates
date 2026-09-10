# StepCast — Design Notes

## Source

- ColorLib "Colorlib Wizard 8": https://colorlib.com/wp/template/colorlib-wizard-8/
- Demo URL (extracted): https://colorlib.com/etc/bwiz/colorlib-wizard-8/index.html
- preview.colorlib.com/theme/ returned 404 — demo HTML used as primary reference

## Structure order (top → bottom)

1. **Step indicator** — 4 connected circles in a horizontal flex row, centered.
   - Active: solid #8eb852 fill + white Lucide icon
   - Inactive: #8eb852 outline + grey icon (padlock, cart, truck for steps 2–4)
   - Step label below each circle: "STEP 01" through "STEP 04", 12px uppercase #666
2. **Section heading** — centered, bold uppercase, Lato Black 20px, letter-spacing 2px, color #333
3. **Form fields** — flex rows with 2-col and 3-col grid patterns
   - Inputs: 42px height, 1px #e6e6e6 border, no background, 14px #999 text
   - Icons: absolute-positioned right side, 16px, using Lucide equivalents
   - Focus: border transitions to #8eb852
4. **Action buttons** — flex row, space-between
   - BACK: 97px wide, 42px height, #8eb852 background, white uppercase text, 3px radius
   - CONTINUE: 234px wide, same styling
   - Hover: background shifts to #a1d15e
5. **Step 3 (Cart)** — table layout
   - Columns: thumbnail (17.5%), product detail (22.5%), quantity (16.3%), total price (39.8%), remove (4%)
   - Quantity stepper: inline-flex, 105×36px, #f2f2f2 background
   - Prices in green (#92c752), Lato Bold
6. **Step 4 (Cart Totals)** — right-aligned table, 66.56% width
   - Subtotal, Shipping (radio group), Service, Total
   - Custom radio: 13px circle with #999 border

## Fidelity notes

- Background image: food-themed photo (basil, tomatoes, peppercorns, bowls on cream). Use picsum.photos placeholder.
- The original uses jQuery Steps plugin (`jquery.steps.js`). In React, implement step navigation via state machine (useState for current step).
- Material Design Iconic Font icons → replace with lucide-react equivalents:
  - zmdi-account → User
  - zmdi-email → Mail
  - zmdi-account-box-o → Contact
  - zmdi-map → Map
  - zmdi-pin → MapPin
  - zmdi-pin-drop → MapPin
  - zmdi-smartphone-android → Smartphone
  - zmdi-eye → Eye / EyeOff (toggle)
  - zmdi-lock-open → LockOpen
  - zmdi-close-circle-o → XCircle
  - Step icons: Delivery, Lock, ShoppingCart, Truck (from lucide-react)
- The form has no submit action (action=""). The wizard is purely UI.
- Password visibility toggle: implement with Eye/EyeOff icon state.

## Component breakdown

| Component | Purpose |
|-----------|---------|
| `StepCast.tsx` | Root: state machine for step navigation, renders active step |
| `StepIndicator.tsx` | Horizontal 4-step progress bar |
| `BasicDetailsForm.tsx` | Step 1: 9-field form in grid layout |
| `PasswordChangeForm.tsx` | Step 2: 4 password fields |
| `CartTable.tsx` | Step 3: product table with quantity stepper and remove |
| `CartTotals.tsx` | Step 4: subtotal/shipping/service/total |
| `WizardButton.tsx` | Shared button component for Back/Continue |

## Tailwind theme tokens

```
--color-brand: #8eb852
--color-brand-hover: #a1d15e
--color-price: #92c752
--color-text-body: #999
--color-text-heading: #333
--color-text-secondary: #666
--color-border: #e6e6e6
--color-qty-bg: #f2f2f2
--font-heading: Lato, sans-serif (weight 900)
--font-body: Lato, sans-serif (weight 400)
--radius-button: 3px
```
