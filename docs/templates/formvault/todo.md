# FormVault — Implementation Notes

Source: ColorLib Contact Form 13
Preview: https://preview.colorlib.com/theme/bootstrap/contact-form-13/
New name: formvault

## Structure order

1. **App.tsx** — Compose page with gradient background container
2. **components/ContactInfo.tsx** — Left column: heading + description + two location blocks
3. **components/ContactForm.tsx** — Right column: white card with form
4. **components/LocationCard.tsx** — Reusable location block (city name + address/phone/email)
5. **components/Footer.tsx** — Component Dock footer link

## Section-by-section fidelity notes

### Page background
- Full-viewport gradient: `linear-gradient(120deg, #66a6ff 0%, #89f7fe 100%)`
- Use Tailwind `bg-gradient-to-br` with custom colors in `@theme`
- Map `#66a6ff` → `--color-brand-blue`, `#89f7fe` → `--color-brand-cyan`

### Contact Info (left column)
- White text on gradient background
- Heading: Poppins, bold, 2rem (font-size from CSS h3)
- Description: Roboto, #999 overridden to white, line-height 2
- Two location columns side by side (flex row, equal width)
- Each location: city name (Poppins, h5 weight), then icon+text rows
- Icons: use lucide-react — MapPin, Phone, Mail
- Icon color: white, with right margin

### Contact Form card (right column)
- White background, padding 40px 70px, box-shadow 0 15px 30px rgba(0,0,0,0.2)
- Heading: "Send us a message" — uppercase, letter-spacing, #888, 14px, centered, Poppins
- Form fields: Name (text), Email (text), Message (textarea 7 rows)
- Input styling: border #d9d9d9, border-radius 4px, height 55px
- Focus: border-color #000, no box-shadow
- Submit button: full-width, bg #ccda46, text #212529, border-radius 4px, height 55px
- Button shadow: 0 1px 5px rgba(0,0,0,0.1)
- Button hover: bg #c0d02a
- Form validation with error messages (red #B90B0B, 12px)
- Success message: #55A44E, bold, 18px, centered

### Footer
- Simple footer with Component Dock link
- White text on gradient background (or slightly darker section)

## Design tokens for Tailwind @theme

```css
@theme {
  --color-brand-blue: #66a6ff;
  --color-brand-cyan: #89f7fe;
  --color-brand-lime: #ccda46;
  --color-brand-lime-hover: #c0d02a;
  --color-brand-lime-active: #b7c628;
  --color-form-border: #d9d9d9;
  --color-form-label: #000000;
  --color-card-heading: #888888;
  --color-success: #55A44E;
  --color-error: #B90B0B;
  --font-heading: "Poppins", sans-serif;
  --font-body: "Roboto", sans-serif;
}
```
