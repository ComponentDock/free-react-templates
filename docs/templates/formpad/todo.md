# FormPad — Implementation Notes

Source: ColorLib Wizard 4 (colorlib-wizard-4)
Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-4/index.html

## Structure Order

1. **Page wrapper** — full-viewport dark background image, flex layout
2. **Left panel (image)** — decorative image, ≈41% width, aligned to bottom; hidden on mobile
3. **Right panel (form)** — ≈59% width, centered vertically, padding 100px sides
4. **Form header** — category tag pill (gold bg) + uppercase heading
5. **Wizard container** — white border, 10px radius, semi-transparent bg
   - Step 1: Course info (5 fields: selects + text)
   - Step 2: Personal info (datepicker, select, text inputs, radio group)
   - Step 3: Course selection (text inputs, select, checkbox)
6. **Progress bar** — horizontal bar below form, animated fill
7. **Navigation** — Previous (white, hidden step 1) / Next (green) buttons

## Section-by-Section Fidelity Notes

### Layout

- Split-screen: left image + right form. Desktop only; tablet/mobile = form-only
- Body background: dark image (use picsum with dark seed or gradient)
- Left panel: `align-self: flex-end` on desktop, `translateY(40px)` on tablet
- Right panel: `align-self: center`, padding 100px left/right

### Form Header

- Category tag: `#e4bd37` bg, white text, `border-radius: 5px`, `padding: 5px 15px`
- Heading: Poppins SemiBold, 22px, uppercase, letter-spacing 3px, margin-top 19px, margin-bottom 46px

### Wizard Container

- `border: 1px solid rgba(255,255,255,0.4)`, `border-radius: 10px`
- `background: rgba(255,255,255,0.1)`
- Padding: 47px top, 57px right, 50px bottom, 50px left

### Form Fields

- `.form-row`: flex, margin-bottom 29px, align-items center
- Label: 34.9% width, margin-right 40px
- Input/select: height 41px, bg `rgba(255,255,255,0.2)`, border `1px solid rgba(255,255,255,0.4)`, border-radius 5px
- Focus: `box-shadow: 0 0 7px rgba(255,255,255,0.7)`, border `#ceebf7`
- Placeholder: white, uppercase

### Navigation Buttons

- Next: bg `#6DAB3C`, hover `#5f9434`, white text, rounded
- Previous: bg `#fff`, text `#666`, Muli Bold, `padding-left: 57px`, hover `#e5e5e5`
- Button wobble animation on hover (icon shake)

### Progress Bar

- Track: `rgba(255,255,255,0.3)`, height 12px, border-radius 6px, width 60%
- Fill: `rgba(255,255,255,0.8)`, width advances 33%/66%/100%
- Position: absolute, bottom -69px from wizard, centered

### Responsive

- ≤1500px: form padding adjusted, wrapper height auto
- ≤1191px: wrapper 100vh, image centered, form padding 50px
- ≤991px: image hidden, form full width
- ≤767px: form/wizard padding 0, fields stacked (block), progress bar moves below buttons

## Implementation Approach

1. Copy simplest existing app as scaffold (e.g. `formstep`)
2. Create components: `FormHeader.tsx`, `StepOne.tsx`, `StepTwo.tsx`, `StepThree.tsx`, `WizardProgress.tsx`, `NavigationButtons.tsx`
3. State management: React useState for currentStep, form values
4. Progress bar: CSS transition on width property
5. Responsive: Tailwind breakpoints (lg, md, sm)
6. Form validation: required fields per step, block Next on invalid
