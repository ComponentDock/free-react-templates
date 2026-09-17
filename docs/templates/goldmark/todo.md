# Goldmark — Implementation Notes

Source: ColorLib Contact Form 09
Preview: https://preview.colorlib.com/theme/bootstrap/contact-form-09/

## Section order (top to bottom)

1. **Section heading** — centered, white Poppins text "Contact Form"
2. **Contact info row** — three equal-width columns, each with:
   - Circular gold icon (60px, #bc9864 bg, black icon glyph)
   - Label in gold uppercase (bold)
   - Value in white/muted text
3. **Contact form card** — centered, "Get in touch with us" heading in white
   - Name input (full width)
   - Email input (full width)
   - Subject input (full width)
   - Message textarea (full width, resizable)
   - "Send Message" button (full width, gold, uppercase, rounded)
4. **Footer** — Component Dock attribution

## Structure notes

- The original uses Bootstrap 4 grid (col-md-4, col-lg-8). Replace with
  Tailwind grid/flex: `grid grid-cols-1 md:grid-cols-3 gap-4` for the info
  row, single column for the form wrapper.
- The original wraps the form in `.contact-wrap` with `.wrapper` container.
- Form validation in the original uses jQuery validate; use React state +
  basic validation (required fields, email regex) instead.

## Fidelity notes

- Match the exact dark-on-dark aesthetic: near-black bg, transparent inputs
- The three info boxes are equal-width in a row on desktop, stacked on mobile
- Icon circles are perfectly round, centered, with the gold background
- Button has a subtle box-shadow that deepens on hover
- Form inputs have no visible border by default; border appears on focus
  with the gold color
- The placeholder text is very low-opacity white (0.3 alpha)
- Error messages are pink (#f65c78), success is green (#28a745)
- Use picsum.photos for any placeholder imagery if needed (unlikely for
  a contact form, but for social icons or similar)

## Component breakdown

- `App.tsx` — composes Heading, ContactInfo, ContactForm, Footer
- `components/Heading.tsx` — section title
- `components/ContactInfo.tsx` — three info boxes (icon, label, value)
- `components/ContactForm.tsx` — the form with validation logic
- `components/Footer.tsx` — Component Dock link

## Design tokens for Tailwind `@theme`

```
--color-brand: #bc9864;
--color-brand-hover: #a57f48;
--color-bg-dark: #0c0c0c;
--color-text-body: #666666;
--color-input-bg: rgba(255,255,255,0.03);
--color-input-focus: rgba(255,255,255,0.1);
--color-error: #f65c78;
--color-success: #28a745;
```

## Open questions for implementer

- Original uses Font Awesome 4.7 for icons; use lucide-react equivalents:
  MapPin, Phone, Send (or similar)
- The original uses jQuery validate; React form validation with onChange
  handlers is the equivalent
