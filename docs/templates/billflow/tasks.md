# Billflow — Implementation Tasks & Design Notes

Source: ColorLib Wizard 5 (`https://colorlib.com/wp/template/colorlib-wizard-5/`)
Preview: `https://preview.colorlib.com/theme/colorlib-wizard-5/` (unreachable — design from screenshot)
Name: `billflow`

## Design Notes

### Layout
- Full-viewport split screen: left illustration panel + right form card
- Warm peach-beige background (`#F2D7B9`) across the entire viewport
- Bottom footer strip in darker beige (`#E6C6A6`)
- On mobile (<768px): stacks vertically, illustration on top or hidden

### Color Palette
- Background: `#F2D7B9` (warm peach-beige)
- Footer strip: `#E6C6A6` (darker beige)
- Active step: `#D98E56` (orange-peach)
- Form card: `#FFFFFF` (white)
- Headings: `#333333`
- Labels/body: `#555555`
- Placeholder: `#999999`
- Input borders: `#E0E0E0`
- Required asterisk: `#E04040`
- Inactive step: `#D0D0D0`

### Typography
- Font: Poppins (Google Fonts)
- Title "Billing Details": bold, dark grey
- Labels: regular weight, dark grey
- Button text: bold, dark grey

### Illustration (Left Panel)
- Original has a 3D isometric room scene
- For recreation: use a decorative image from picsum or SVG illustration
- Complementary warm/cool tones (olive green lamp, yellow table, blue floor, green plants)

### Form Card (Right Panel)
- White card with subtle drop shadow
- Step indicator: 5-segment horizontal bar
- Form fields in two-column and single-column layout
- "Next →" button at bottom-right, peach-beige background

## Component Structure

```
apps/billflow/
  src/
    App.tsx              — Composes the wizard layout
    components/
      WizardLayout.tsx   — Split-screen container (illustration + card)
      IllustrationPanel.tsx — Left decorative panel
      StepIndicator.tsx  — 5-segment progress bar
      WizardForm.tsx     — Form card with field rendering per step
      StepBilling.tsx    — Step 1: Billing details fields
      StepShipping.tsx   — Step 2: Shipping details (placeholder)
      StepPayment.tsx    — Step 3: Payment details (placeholder)
      StepReview.tsx     — Step 4: Order review (placeholder)
      StepConfirm.tsx    — Step 5: Confirmation (placeholder)
      NavigationButtons.tsx — Back / Next / Submit buttons
    index.css            — Tailwind entry + @theme tokens
    main.tsx             — Entry point
    test/
      setup.ts           — jest-dom import
```

## Tasks

1. [ ] Copy boilerplate app (pick simplest existing app), rename to `billflow`
2. [ ] Set up `@theme` tokens in `index.css` with the color palette
3. [ ] Add Poppins font via Google Fonts link in `index.html`
4. [ ] Create `WizardLayout` with split-screen responsive layout
5. [ ] Create `IllustrationPanel` with placeholder image/SVG
6. [ ] Create `StepIndicator` — 5-segment progress bar with active/inactive states
7. [ ] Create `WizardForm` — manages step state, renders current step component
8. [ ] Create `StepBilling` with first name, last name, company, country, address, city fields
9. [ ] Create placeholder step components (Steps 2-5)
10. [ ] Create `NavigationButtons` with Back/Next/Submit logic
11. [ ] Add form validation (required fields, inline error messages)
12. [ ] Make layout responsive (stack on mobile)
13. [ ] Add footer with Component Dock link
14. [ ] Write tests for all components (100% coverage)
15. [ ] Run typecheck + lint + tests + build

## Fidelity Notes

- Section order is just the wizard itself — single-page, no multi-section layout
- The 5-step indicator is a defining visual feature — must match the horizontal segmented bar style
- Button style: solid peach-beige, not outlined — match the warm color feel
- Input styling: clean minimal with thin borders, small radius — not chunky
- The split layout is important — illustration on left, form on right (not just centered card)
- Mobile: illustration can be hidden or shown as a banner above the form
