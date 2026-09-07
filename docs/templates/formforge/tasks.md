# FormForge — Implementation Tasks & Design Notes

## Template Identity
- **New name:** FormForge
- **ColorLib source:** Colorlib Wizard 28
- **Source slug:** `colorlib-wizard-28`
- **Preview URL:** https://colorlib.com/etc/bwiz/colorlib-wizard-28/index.html
- **Deploy URL:** `formforge.free.componentdock.com`
- **Package:** `@free-react-templates/formforge`

## Structure Order (fidelity to original)

The original is a single-page card wizard. Section order:

1. **Full-page gradient background** — the entire viewport has the diagonal gradient
2. **Centered card** — white, shadow, rounded corners, fixed max-width
3. **Card heading** — absolutely positioned above/overlapping the card top-left
4. **Progress bar** — pill-shaped, green fill on gray track
5. **Step indicators** — numbered circles (visually hidden in original, used for nav)
6. **Step 1 form** — Personal info (name, email, phone)
7. **Step 2 form** — Address (building, street, town, zip)
8. **Step 3 form** — Payment (cardholder, card number, CVC, expiry)

## Component Architecture

```
src/
  App.tsx               — Page wrapper with gradient, centers Card
  components/
    FormWizard.tsx       — Main wizard state machine (current step, progress %)
    ProgressBar.tsx      — Animated progress bar with percentage label
    StepIndicator.tsx    — Numbered step dots (accessibility + visual)
    StepPersonalInfo.tsx — Step 1: name, email, phone + Next
    StepAddress.tsx      — Step 2: building, street, town, zip + Back/Next
    StepPayment.tsx      — Step 3: cardholder, card#, CVC, expiry + Back/Submit
    FormInput.tsx        — Reusable labeled input with focus styling
    WizardButton.tsx     — Styled button (green primary, gray secondary)
```

## Design Fidelity Notes

### Background
- Original: `.bg-img-1` with `linear-gradient(316deg, #4158d0, #c850c0, #ffcc70)`
- Implementation: Tailwind `bg-gradient-to-br` with custom colors in `@theme`
- The gradient angle 316deg ≈ `to bottom right` with slight rotation

### Card
- White background, `border-radius: 5px`, `box-shadow: 0px 8px 20px rgba(0,0,0,0.15)`
- Padding: `40px 30px 30px`
- Max-width: `690px`, centered with `margin: 0 auto`

### Heading
- Position: absolute, `left: -109px`, `top: -49px` (overlaps card top-left)
- Font: Montserrat, 55px, bold, uppercase, white at 60% opacity
- On mobile: repositioned to `left: 0`, `top: -54px`, font-size 40px

### Progress Bar
- Track: `height: 35px`, `border-radius: 17.5px`, background `#f5f5f5`, border `1px solid #e5e5e5`
- Fill: green `#36c240`, `border-radius: 17.5px`, animated width transition (0.6s)
- Label: white, 15px, bold, centered in fill

### Buttons
- Next/Submit: green `#36c240`, pill shape (`border-radius: 22.5px`), white text, 16px, shadow
- Back: gray `#999`, pill shape, no shadow
- Hover: green darkens to `#22ae2c`, gray darkens to `#666`
- Mobile: buttons become full-width blocks

### Inputs
- Border: `1px solid #e5e5e5`, `border-radius: 3px`
- Focus: border changes to `#36c240`
- Text: `#333`, bold weight 700, 15px
- Labels: `#666`, 15px, capitalized
- Placeholder: `#999`
- Icon inputs (card#, CVC): left padding with card icon

### Fonts
- Body: Roboto 400
- Heading: Montserrat 700
- Load via Google Fonts `<link>` in index.html

## Implementation Pitfalls

1. **Step state management** — the wizard hides/shows tab panes. Use React state
   for current step; do NOT use CSS-only toggling. Preserve form data when
   navigating back.

2. **Progress bar animation** — the width transition (0.6s ease) must be smooth.
   Calculate percentage based on current step: step 1 = 40%, step 2 = 70%,
   step 3 = 100%.

3. **Heading positioning** — the absolute positioning with negative offsets is
   tricky. On desktop it sits above-left of the card; on mobile it repositions.
   Use responsive Tailwind classes.

4. **Step indicators are hidden** — the original has `<ul class="nav nav-tab">`
   with `height: 0; visibility: hidden`. Include them for accessibility but
   keep them visually hidden.

5. **No images** — this template has no images, only gradient background and
   form elements. Use `picsum.photos` only if decorative elements are needed.

6. **Input icons** — card number and CVC fields have a card icon (`zmdi-card`).
   Use `lucide-react` CreditCard icon positioned absolutely inside the input wrapper.

7. **Form validation** — the original uses jQuery Validate. In React, use
   controlled inputs with local state; validation is optional for the spec
   but the form should handle basic required-field checks.
