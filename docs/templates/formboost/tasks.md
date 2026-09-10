# FormBoost — Implementation Tasks & Design Notes

Source: ColorLib Wizard 5
Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-5/index.html
New name: formboost
App folder: apps/formboost

## Component structure (suggested order)

```
src/
  main.tsx                  — entry (excluded from coverage)
  App.tsx                   — composes FormBoost wizard
  index.css                 — Tailwind entry + @theme tokens
  components/
    FormBoostWizard.tsx     — main wizard container, step state management
    StepIndicator.tsx       — 4-segment progress bar
    StepTitle.tsx           — step heading text (Billing Details, etc.)
    StepNavigation.tsx      — Previous / Next buttons
    steps/
      BillingDetails.tsx    — Step 1: name, company, country, address, city
      AdditionalInfo.tsx    — Step 2: county, postcode, phone, email, notes, checkbox
      YourOrder.tsx         — Step 3: product list, subtotal, shipping, total
      BillingMethod.tsx     — Step 4: payment radio group with tooltips
    ProductItem.tsx         — single product row (thumbnail, name, qty, price)
  test/
    setup.ts                — vitest setup (jest-dom import)
    FormBoostWizard.test.tsx
    StepIndicator.test.tsx
    StepNavigation.test.tsx
    BillingDetails.test.tsx
    AdditionalInfo.test.tsx
    YourOrder.test.tsx
    BillingMethod.test.tsx
    ProductItem.test.tsx
```

## Section-by-section fidelity notes

### Overall layout

- Split 51%/49%: decorative image left, white form card right
- Image: use `https://picsum.photos/seed/formboost/600/800` as placeholder
- Form card: white bg, padding 107px top / 75px sides / 65px bottom, min-height 834px
- Page background: warm peach solid (#f5e6d3) as fallback for original image background

### Step indicator

- 4 horizontal segments, each ~20% width + 10px gap
- 7px height, pill shape (border-radius 3.5px)
- Active: #f3d4b7, inactive: #e6e6e6
- Step title renders above the bar (not via ::before pseudo-element; use a real heading)

### Navigation buttons

- Previous: left-aligned, bg #e6e6e6, text #333, arrow-left icon, hidden when disabled (step 1)
- Next: right-aligned, bg #f3d4b7, text #333, arrow-right icon, hover #d9bda3
- Next button hidden on last step (step 4)
- Icon wobble animation on hover (optional — match timing: 1s ease-in-out)

### Step 1 — Billing Details

- First Name + Last Name in a flex row (50% each with 21px gap)
- Company Name full-width
- Country: select dropdown with custom styling (no native appearance)
- Address Line 1 + Line 2 full-width
- Town/City full-width
- Input: height 42px, border 1px solid #e6e6e6, padding 0 18px, focus border #f3d4b7
- Labels: block display, margin-bottom 8px

### Step 2 — Additional Information

- County, Postcode/Zip full-width
- Phone + Email in a flex row (50% each)
- Order Notes textarea, ~149px tall, placeholder text
- Create an account? checkbox (custom styled, 12×13px, border-radius 2px)

### Step 3 — Your Order

- Product items: flex row with thumbnail (100×90px, border 1px solid #f2f2f2), product info, price
- Separator: 1px solid #e6e6e6 between items
- Subtotal/Shipping/Total summary block
- Total price: font-family "Muli" (bold), color #333

### Step 4 — Billing Method

- Radio buttons: circular (50% border-radius), 14×14px, dot fill #666666
- Labels: color #999, padding-left 26px
- Tooltips: bg #f2f2f2, top arrow (border trick), line-height 1.8
- Default selected: Direct bank transfer

### Responsive behavior

- <991px: image hidden, form 60% width centered
- <767px: stacked, image on top (full width), form below, padding reduced, paired fields vertical
- <1500px: height 100vh wrapper

## Notes for implementer

- Use lucide-react icons (ArrowLeft, ArrowRight, ChevronDown for select)
- Wizard state: React useState with currentStep (0–3)
- No external wizard library needed — simple conditional rendering per step
- Keep component state in FormBoostWizard, pass down as props
- Step titles: "Billing Details", "Additional Information", "Your Order", "Billing Method"
- Product data can be hardcoded in a const array (matches original)
- For tooltips: controlled via selected radio value (show only for selected)
