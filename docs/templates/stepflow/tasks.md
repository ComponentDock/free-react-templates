# StepFlow — Design & Implementation Notes

## Source
- **ColorLib:** Colorlib Wizard 5
- **Slug:** `colorlib-wizard-5`
- **Preview URL:** `https://preview.colorlib.com/theme/colorlib-wizard-5/` (404 — unavailable at time of prep)
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-5.jpg`
- **Analysis method:** Screenshot only (preview was 404)

## Structure Order (top-to-bottom)
1. Split-column layout (full viewport height)
   - Left: decorative image (lifestyle scene — lamp, table, plant, figurines)
   - Right: white card form, vertically centered
2. Form card internals:
   a. "Billing Details" heading
   b. 4-step progress indicator (horizontal lines)
   c. Form fields: First Name / Last Name (row), Company Name, Country (select), Address (two fields), Town/City
   d. "Next →" button (bottom-right)

## Design Notes

### Colors
- Page bg: `#F2E6DC` (warm peach/beige, solid)
- Card bg: `#FFFFFF` (white, subtle shadow)
- Accent: `#F5C8AA` (soft peach — active step + CTA button)
- Inactive step: `#D1D1D1` (light gray)
- Text: `#333333` (dark charcoal)
- Input border: `#E0E0E0`

### Typography
- Clean sans-serif (Roboto or similar)
- Title: bold/semi-bold, larger
- Labels: regular weight, smaller
- Button: regular/medium weight

### Button
- Rounded corners (~4px border-radius)
- Peach background, dark text
- Arrow icon (→) on right

### Layout
- ~45/55 split (image/form)
- Vertically centered form card
- Significant whitespace around card
- Responsive: stacks on mobile

## Implementation Outline

### Components
- `StepFlow.tsx` — main page (split layout)
- `StepForm.tsx` — form card with step state management
- `ProgressIndicator.tsx` — 4-step horizontal bar
- `Step1Billing.tsx` — billing fields (step 1)
- `Step2Shipping.tsx` — shipping fields (step 2, TBD)
- `Step3Payment.tsx` — payment fields (step 3, TBD)
- `Step4Confirm.tsx` — confirmation/review (step 4, TBD)

### State Management
- `useState` for current step index (0-3)
- `useState` for form data (typed interface per step)
- Validation on "Next" click — block if required fields empty
- State preserved when navigating back/forth

### Dependencies
- `lucide-react` for arrow icon
- `packages/ui` for shared components (Button, cn)
- No new dependencies expected
