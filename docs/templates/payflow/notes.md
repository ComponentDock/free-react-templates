# Payflow — Implementation Notes

Source: Colorlib Wizard 5 (`https://colorlib.com/wp/template/colorlib-wizard-5/`)
Demo: `https://colorlib.com/etc/bwiz/colorlib-wizard-5/index.html`
Preview: unreachable at prep time — fell back to screenshot + source HTML/CSS

## Design Notes

### Layout Structure (top to bottom)

1. **Split-screen wrapper** — full viewport height
   - Left (~40%): decorative 3D illustration placeholder (use picsum.photos)
   - Right (~60%): white card with rounded corners containing the wizard
2. **Progress indicator** — horizontal bar at top of card, 4 segments
   - Active segment: peach (#f3d4b7)
   - Inactive segment: light gray (#e6e6e6)
   - Completed segments get a "checked" class
3. **Form card** — white background, padding, contains step sections

### Section Order (4 steps)

| Step | Title              | Fields                                                                                    |
|------|--------------------|-------------------------------------------------------------------------------------------|
| 1    | Billing Details    | First Name*, Last Name* (side-by-side), Company Name, Country* (select), Address* (2 inputs), Town/City* |
| 2    | Shipping Info      | County*, Postcode/Zip*, Phone*, Email*, Order Notes (textarea), Create Account checkbox   |
| 3    | Order Review       | Product items (thumb + name + qty + price), Subtotal, Shipping note, Total                |
| 4    | Payment Method     | Radio: Direct Bank Transfer, Check Payments, Cash on Delivery (with tooltips)            |

### Color Palette

- Background: #f3d4b7 (warm peach)
- Card: #ffffff
- Brand/active: #f3d4b7
- Darker accent: #d9bda3
- Text: #333 (primary), #666 (body), #999 (muted)
- Input borders: #e6e6e6 default, #f3d4b7 focus
- Radio/checkbox: #ebebeb unchecked, #666666 checked

### Typography

- Headings/labels: Poppins SemiBold (600)
- Body: Poppins Regular (400)
- Button/total: Poppins Medium (500) or Muli Bold
- Google Fonts link for Poppins

### Component Notes

- **WizardStepContainer** — manages active step, fade transitions (500ms)
- **ProgressIndicator** — horizontal bar, 4 segments, peach active, gray inactive
- **BillingForm** (Step 1) — two-column name row, single-column rest
- **ShippingForm** (Step 2) — single-column fields + checkbox
- **OrderReview** (Step 3) — product card list + summary totals
- **PaymentMethods** (Step 4) — radio group with tooltip descriptions
- **NavigationButtons** — Previous/Next, "Place Order" on last step

### Fidelity Notes

- Original uses jQuery Steps plugin for wizard behavior — replace with React state
- Original uses Material Design Iconic Font for dropdown caret — use lucide-react ChevronDown
- Original background image (`form-wizard-bg.jpg`) is a 3D illustration — use a placeholder or describe via CSS
- Tooltip expand on payment options: original uses CSS `:checked + .tooltip` — use controlled state
- Responsive: original stacks on <768px with `padding: 70px 20px 40px`
- Product items have thumbnails (100x90px with border) — use picsum.photos placeholders

## Task Outline

1. [ ] Set up `apps/payflow` workspace (copy simplest existing app, rename package)
2. [ ] Create `src/components/WizardContainer.tsx` — step state management, fade transitions
3. [ ] Create `src/components/ProgressIndicator.tsx` — 4-step horizontal bar
4. [ ] Create `src/components/BillingForm.tsx` — Step 1 fields
5. [ ] Create `src/components/ShippingForm.tsx` — Step 2 fields + checkbox
6. [ ] Create `src/components/OrderReview.tsx` — Step 3 product list + totals
7. [ ] Create `src/components/PaymentMethods.tsx` — Step 4 radio buttons + tooltips
8. [ ] Create `src/components/NavigationButtons.tsx` — Previous/Next/Place Order
9. [ ] Create `src/components/SplitLayout.tsx` — split-screen wrapper
10. [ ] Compose `src/App.tsx` with all sections
11. [ ] Add theme tokens to `src/index.css` (peach palette, Poppins font)
12. [ ] Write tests for each component (100% coverage)
13. [ ] Verify: typecheck + lint + build + test:coverage
14. [ ] Commit as `feat: payflow (Colorlib Wizard 5) — 4-step checkout wizard`
