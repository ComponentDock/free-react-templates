# OrderCraft — Implementation Tasks & Design Notes

## Source

- **ColorLib template**: Wizard 5 (`colorlib-wizard-5`)
- **Category**: Bootstrap Wizard Templates — 4-step order/checkout wizard
- **Preview**: `https://preview.colorlib.com/theme/colorlib-wizard-5/` (404 at prep time)
- **Screenshot analyzed**: Yes — split layout, warm beige bg, orange accent, 4-step progress bar

## Design Notes (from screenshot analysis)

### Layout Structure (top to bottom)

1. **Full-page background**: Warm beige/sand (`#e8d5c0`)
2. **Split layout container** (centered, max-width ~1200px):
   - **Left half (50%)**: Decorative 3D room scene image
     - Minimalist modern room: olive-green floor lamp, pale cyan wall corner,
       yellow side table with bird figurines, dark green palm frond, matte grey
       donut object. Soft diffused lighting, clean geometric shapes.
     - In React: use `https://picsum.photos/seed/ordercraft-hero/800/1000`
   - **Right half (50%)**: White form card with subtle drop shadow
     - Elevated from background with rounded corners (12px)

### Form Card Structure

1. **Step title**: "Billing Details" — dark charcoal (`#26282b`), semibold, 24px
2. **Progress bar**: Horizontal line with 4 equal segments
   - Active segments: warm orange (`#e67e22`)
   - Inactive segments: light gray (`#e0e0e0`)
   - Thin height (~4px), rounded ends
3. **Form fields** (stacked vertically with ~16px gap):
   - Row 1: First Name * | Last Name * (side by side, 50/50)
   - Row 2: Company Name (full width, optional)
   - Row 3: Country * (dropdown select, full width)
   - Row 4: Address * (placeholder: "Street address", full width)
   - Row 5: Address line 2 (placeholder: "Apartment, suite, unit etc. (optional)", full width)
   - Row 6: Town / City * (full width)
   - All inputs: white bg, `#ddd` border, 6px radius, 14px font
   - Labels: 14px, medium weight, dark gray
   - Required marker: `*` after label text
4. **Action button**: "Next →"
   - Bottom-right aligned
   - Warm orange bg (`#e67e22`), white text, 6px radius
   - 500 font weight, 16px font size
   - Right arrow icon (→) after text

### Step Content (4 steps total)

| Step | Title | Fields |
|------|-------|--------|
| 1 | Billing Details | First Name, Last Name, Company Name, Country, Address, Address 2, Town/City |
| 2 | Shipping Details | Similar address fields for shipping |
| 3 | Order Summary | Line items, subtotal, total |
| 4 | Payment | Card Number, Cardholder Name, Expiry Date, CVV, "Place Order" button |

### Responsive Behavior

- Desktop (>=768px): 50/50 split side by side
- Mobile (<768px): Stacked vertically — image on top, form card below
- Form fields stack to full-width on mobile

## Implementation Tasks

### Phase 1: Project Setup
- [ ] Create `apps/ordercraft/` from simplest existing app template
- [ ] Rename package to `@free-react-templates/ordercraft`
- [ ] Set up `public/CNAME` with `ordercraft.free.componentdock.com`
- [ ] Set `homepage` in package.json
- [ ] Register `injectUiSource()` in `vite.config.ts`
- [ ] Run `npm install` at repo root to register workspace

### Phase 2: Design Tokens
- [ ] Create `src/index.css` with Tailwind `@theme` block:
  - `--color-sand`: `#e8d5c0` (page bg)
  - `--color-amber`: `#e67e22` (accent/CTA)
  - `--color-amber-dark`: `#d35400` (hover)
  - `--color-charcoal`: `#26282b` (heading text)
  - `--color-muted`: `#4b4b4b` (label text)
  - `--color-input-border`: `#dddddd`
  - `--color-progress-inactive`: `#e0e0e0`
  - Font family: Poppins via Google Fonts `<link>` in index.html

### Phase 3: Components (TDD)
- [ ] `ProgressBar.tsx` — 4-segment horizontal indicator
- [ ] `FormField.tsx` — Reusable input with label, required marker, error state
- [ ] `SelectField.tsx` — Dropdown select with label
- [ ] `WizardStep.tsx` — Container for step content with transition
- [ ] `StepBilling.tsx` — Step 1: billing address fields
- [ ] `StepShipping.tsx` — Step 2: shipping address fields
- [ ] `StepSummary.tsx` — Step 3: order summary display
- [ ] `StepPayment.tsx` — Step 4: payment card fields
- [ ] `DecoImage.tsx` — Left-side decorative image placeholder
- [ ] `WizardCard.tsx` — Right-side white card container
- [ ] `OrderCraft.tsx` — Main layout composing split + wizard logic
- [ ] `Footer.tsx` — Component Dock footer link

### Phase 4: Wizard State
- [ ] Implement step state management (current step index)
- [ ] Implement form data state (all fields across steps)
- [ ] Implement validation per step
- [ ] Implement navigation (next/back)
- [ ] Implement progress bar sync with current step

### Phase 5: Responsive
- [ ] Desktop: 50/50 split layout
- [ ] Mobile: stacked layout with image on top
- [ ] Form fields full-width on mobile

### Phase 6: Testing
- [ ] Unit tests for each component (100% coverage)
- [ ] Wizard navigation tests
- [ ] Form validation tests
- [ ] Responsive behavior tests
- [ ] Accessibility tests (aria labels, semantic elements)

### Phase 7: Final
- [ ] Verify no ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] CNAME + homepage configured
- [ ] Build succeeds
- [ ] All tests pass with 100% coverage
