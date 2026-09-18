# Orchid — Implementation Notes

Source: ColorLib Contact Form V14
Preview: https://preview.colorlib.com/theme/contact-form-v14/ (404 — screenshot reference only)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v14.jpg

## Section order (top to bottom)

1. Full-viewport gradient background (pink → purple)
2. Centered white card
   a. "Contact Us" heading
   b. Name fields (first + last, side-by-side)
   c. Email address field
   d. Phone number field
   e. Message textarea
   f. Submit button

## Component structure

```
src/
  App.tsx                  — layout: gradient bg + centered card
  components/
    ContactForm.tsx        — form container, validation logic, submit handler
    FormField.tsx          — reusable underline-style input with label + validation indicator
    TextAreaField.tsx      — textarea variant of FormField
    ValidationIcon.tsx     — green ✓ / red ✗ indicator
```

## Design tokens for Tailwind @theme

```css
@theme {
  --color-brand-pink: #E91E8C;
  --color-brand-purple: #8B5CF6;
  --color-card-bg: #FFFFFF;
  --color-text-heading: #1A1A2E;
  --color-text-label: #6B7280;
  --color-input-border: #D1D5DB;
  --color-input-focus: #1A1A2E;
  --color-valid: #10B981;
  --color-error: #EF4444;
  --color-button-bg: #1A1A2E;
  --font-family-heading: "Poppins", sans-serif;
}
```

## Fidelity notes

- Gradient is the dominant visual feature — must be full viewport, smooth
  pink-to-purple linear gradient (left to right or slight diagonal).
- Card is clean white with generous padding (~48px) and subtle shadow.
- Inputs use ONLY underline borders — no background, no box border, no ring.
  Focus state darkens the underline.
- Labels are uppercase, small, gray — positioned above each input.
- Name fields use CSS grid or flexbox: two columns on desktop, one on mobile.
- Validation icons (✓/✗) appear inline to the right of each field.
- Submit button: `rounded-full`, dark bg, white text, small right-arrow icon
  (use lucide-react `ArrowRight`).
- No navbar. No footer in original — but per repo rules, add a minimal footer
  with Component Dock link.
- Typography: Poppins (Google Fonts) — load via `<link>` in index.html.
