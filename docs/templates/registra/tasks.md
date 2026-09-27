# Registra — Implementation Tasks

Source: ColorLib Reg Form V1 (`colorlib-regform-1`)
Preview: https://preview.colorlib.com/theme/colorlib-regform-1/ (unreachable; screenshot used)
Name: `registra` (apps/registra)

## Structure (component order)

1. `App.tsx` — root layout: blue background + centered card
2. `components/HeroImage.tsx` — city skyline hero at card top
3. `components/RegistrationForm.tsx` — the form with all fields
4. `components/FormField.tsx` — reusable underline-style input component
5. `components/SelectField.tsx` — reusable dropdown select component
6. `components/DatePickerField.tsx` — date input with calendar icon
7. `components/SubmitButton.tsx` — green CTA button

## Fidelity notes

- **Page background**: solid `#4285F4` blue, full viewport
- **Card**: white, centered (max-width ~500px), subtle box-shadow, no border-radius
- **Hero image**: full card width, ~200px tall, city skyline in muted/grayscale tones. Use `https://picsum.photos/seed/registra-hero/800/300` for placeholder
- **Heading**: "Registration Info", dark gray, ~28px, sans-serif
- **Labels**: uppercase, small (~11px), light gray (#999), above each field
- **Inputs**: bottom-border only (underline style), no side borders, light gray (#ddd) border
- **Birthdate + Gender**: side-by-side row on desktop (50/50 split), stacked on mobile
- **Submit button**: green (#77CC6D), white text, rounded (~4px), left-aligned below fields, ~12px padding
- **Form spacing**: ~24-32px vertical gap between field groups

## Implementation steps

1. Scaffold app from simplest existing template (e.g. apps/aurora skeleton)
2. Rename package to `@free-react-templates/registra`
3. Set up `index.css` with Tailwind + `@theme` for brand colors
4. Build `App.tsx` with blue background + centered card wrapper
5. Build `HeroImage` component with placeholder image
6. Build form fields (underline style) — reuse from packages/ui if available
7. Build SubmitButton with green styling
8. Add form validation (required fields)
9. Add responsive breakpoints (birthdate/gender stack on mobile)
10. Write tests for all components (100% coverage)
11. Run `scripts/verify-app.sh registra`
12. Set up `public/CNAME` + `homepage` for Surge deploy
