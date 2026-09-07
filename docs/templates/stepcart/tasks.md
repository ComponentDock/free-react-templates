# StepCart — Implementation Tasks & Design Notes

**Source:** ColorLib Wizard 5 (`colorlib-wizard-5`)
**Preview:** https://preview.colorlib.com/theme/colorlib-wizard-5/ (404 — design inferred)
**New name:** `stepcart` (apps/stepcart, @free-react-templates/stepcart)

## Structure Order (top to bottom)

1. **Progress Indicator** — horizontal 4-step bar at top of card
2. **Step 1: Cart Review** — item list, quantities, prices, subtotal
3. **Step 2: Shipping Information** — name, email, address, city, state, zip
4. **Step 3: Payment Details** — name on card, card number, expiry, CVV
5. **Step 4: Order Confirmation** — summary of all prior steps, Place Order button
6. **Success State** — confirmation message after order placement
7. **Footer** — Component Dock link

## Component Breakdown

| Component | Purpose |
|-----------|---------|
| `ProgressIndicator.tsx` | 4-step horizontal bar with circles, connectors, checkmarks |
| `CartReview.tsx` | Step 1 — displays cart items, quantities, prices, subtotal |
| `ShippingForm.tsx` | Step 2 — shipping info form fields |
| `PaymentForm.tsx` | Step 3 — payment details form fields |
| `OrderConfirmation.tsx` | Step 4 — summary of cart, shipping, payment |
| `SuccessScreen.tsx` | Post-order confirmation view |
| `WizardLayout.tsx` | Main layout: progress bar + step content + nav buttons |
| `Footer.tsx` | Component Dock branded footer |

## Design Notes

### Fidelity Notes (preview unreachable — based on description + Bootstrap conventions)

- **4-step eCommerce order wizard** — the core concept is a multi-step checkout
- Steps follow standard eCommerce flow: Cart → Shipping → Payment → Confirm
- Horizontal progress indicator at top (Bootstrap wizard pattern)
- Clean, professional aesthetic suitable for any eCommerce site
- White card on light gray background
- Blue primary color (Bootstrap-inspired)
- Poppins font from Google Fonts
- Rounded corners on card, inputs, and buttons
- Subtle card shadow for depth

### Key Implementation Details

- Use React state (useReducer or useState) to track current step and form data
- Form validation with zod schemas per step
- Step indicator: numbered circles (1-4) connected by lines
  - Active: blue bg, white text
  - Completed: blue bg, white checkmark icon
  - Inactive: gray bg, gray text
- Navigation: Next (proceed), Back (return), Place Order (final step)
- Cart items can use hardcoded sample data (3-4 items)
- Payment fields: card number formatting (XXXX XXXX XXXX XXXX), expiry (MM/YY)
- Success state: green checkmark + "Order Placed Successfully" message
- Responsive: on mobile (<640px), form fields stack vertically, buttons go full-width

### Placeholder Images

- Cart item thumbnails: `https://picsum.photos/seed/stepcart-<n>/60/60`
- No other images needed (pure form wizard)

### What Differs from Original

- Preview was 404; design inferred from description ("4-step order template for eCommerce") + Bootstrap wizard conventions
- Original likely uses jQuery Steps library; implementation uses React state
- Original may have different exact color values; using standard Bootstrap blue (#3b82f6)
- Cart items use placeholder product images from picsum.photos
