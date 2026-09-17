# FormLift — Implementation Todo

## Components to build

- [ ] `src/App.tsx` — main layout with centered card
- [ ] `src/components/FormCard.tsx` — white card container with shadow
- [ ] `src/components/FullNameField.tsx` — text input with validation state
- [ ] `src/components/EmailPhoneRow.tsx` — two-column email + phone inputs
- [ ] `src/components/ServicesDropdown.tsx` — select dropdown with chevron
- [ ] `src/components/ProductTypeRadio.tsx` — radio group with 3 options
- [ ] `src/components/BudgetSlider.tsx` — range slider with formatted display
- [ ] `src/components/MessageTextarea.tsx` — textarea with label
- [ ] `src/components/SubmitButton.tsx` — full-width dark pill button
- [ ] `src/components/Footer.tsx` — Component Dock attribution

## Design tokens (for index.css @theme)

```
--color-formlift-bg: #f5f5f5;
--color-formlift-card: #ffffff;
--color-formlift-heading: #222222;
--color-formlift-label: #555555;
--color-formlift-placeholder: #aaaaaa;
--color-formlift-input-text: #333333;
--color-formlift-input-border: #e0e0e0;
--color-formlift-error: #e74c3c;
--color-formlift-success: #2ecc71;
--color-formlift-accent: #1abc9c;
--color-formlift-slider-track: #cccccc;
--color-formlift-submit-bg: #333333;
--color-formlift-submit-text: #ffffff;
```

## Key implementation details

- Card: max-w-md (or 640px), mx-auto, my-auto, p-8, rounded-xl, shadow-lg
- Labels: text-xs, uppercase, tracking-wider, font-medium, mb-1.5
- Inputs: w-full, border, rounded, px-4, py-3
- Email + Phone row: grid grid-cols-2 gap-4
- Radio: accent-color or custom teal styling
- Slider: custom range input or headless UI component
- Submit: w-full, bg-[#333333], text-white, rounded-full, py-3, font-medium
- Validation: useState for each field, show error/success conditionally
- Poppins font via Google Fonts link in index.html
