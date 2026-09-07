# Stepflow — Implementation Notes

## Source mapping

| Item                | Value                                                        |
| ------------------- | ------------------------------------------------------------ |
| ColorLib slug       | `colorlib-wizard-28`                                         |
| ColorLib name       | Colorlib Wizard 28                                           |
| Original title      | Au Form Wizard                                               |
| Preview URL         | https://colorlib.com/etc/bwiz/colorlib-wizard-28/index.html  |
| Template page       | https://colorlib.com/wp/template/colorlib-wizard-28/         |
| Screenshot          | https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-28.jpg |
| New name            | Stepflow                                                     |
| App folder          | `apps/stepflow`                                              |
| Package             | `@free-react-templates/stepflow`                             |

## Section structure (top to bottom)

1. **Full-viewport gradient background** — `linear-gradient(316deg, #4158d0, #c850c0, #ffcc70)`, covers entire viewport
2. **Card heading** — "Form Wizard" text, absolutely positioned above-left of card (`left:-109px; top:-49px`), Montserrat 55px bold uppercase white at 60% opacity; on mobile (`max-width: 767px`) repositions to `left:0`
3. **Card container** — 690px max-width (`.wrapper--w690`), white background, 5px border-radius, shadow `0px 8px 20px rgba(0,0,0,0.15)`
4. **Progress bar** — 35px height, pill shape (17.5px radius), `#f5f5f5` track with `#e5e5e5` border, green `#36c240` fill; starts at 40% on step 1; percentage label (15px bold white centered)
5. **Step indicators** (hidden) — `.nav-tab` list with 3 numbered items; hidden via `height:0; visibility:hidden`
6. **Tab content area** — 3 step panels, only active one visible:
   - Step 1: Full name (required), Email (required), Phone number (required) + Next button
   - Step 2: Building Number, Street, A Town, Zip code + Back/Next buttons
   - Step 3: Card Holder Name, Card Number (icon input), CVC (icon input), Expiration + Back/Submit buttons
7. **Buttons** — Pill-shaped (22.5px radius), 14px Roboto:
   - Next/Submit: green `#36c240` bg, white text, hover `#22ae2c`
   - Back: grey `#999` bg, white text, hover `#666`

## Design fidelity notes

- **Gradient background**: The original uses `-webkit-linear-gradient` prefixes plus `-moz-` and `-o-`; Tailwind handles this automatically via `bg-gradient-to-br` with custom colors
- **Card heading outside card**: The original uses absolute positioning relative to the card wrapper. In React, use `relative` on the card wrapper and `absolute` on the heading, or a negative-margin approach
- **Hidden step indicators**: The `.nav-tab` list is rendered but hidden. In React, we can either omit them entirely (they're invisible) or keep them for DOM structure fidelity
- **Progress bar width**: jQuery sets `style="width: 40%"` inline. In React, use state to track the current step and calculate progress percentage dynamically
- **Input icons (Step 3)**: The original uses `zmdi` material-design iconic font for card/CVC icons. Use `lucide-react` CreditCard icon instead
- **jQuery validation**: Original uses jquery.validate. In React, use native form validation or a lightweight library; match the visual error state (red border on invalid)
- **No footer in original**: The original template has no footer. Add a minimal Component Dock footer per monorepo rules
- **Responsive**: Original has `@media (max-width: 767px)` that repositions the heading and adjusts card width

## Component outline

```
src/
  App.tsx              — Root layout (gradient bg + card wrapper)
  components/
    ProgressStep.tsx   — Progress bar (percentage display + animated fill)
    StepIndicator.tsx  — Hidden step indicator list (optional, can skip)
    Step1.tsx          — Contact info fields (name, email, phone)
    Step2.tsx          — Address fields (building, street, town, zip)
    Step3.tsx          — Payment fields (card name, number, CVC, expiry)
    FormWizard.tsx     — Main wizard logic (step state, navigation)
  index.css            — Tailwind entry + @theme tokens for brand colors
```

## Testing notes

- Test that progress bar starts at 40%
- Test that step 1 shows correct fields
- Test navigation between steps (Next/Back buttons)
- Test that step 3 shows Submit button
- Test form validation on required fields (step 1)
- Test responsive heading repositioning
- Ensure 100% coverage on all component lines
