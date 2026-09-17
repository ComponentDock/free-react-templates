# Reachform — Implementation Notes

## Source

- ColorLib: Contact Form 17
- Slug: `contact-form-17`
- Preview: https://preview.colorlib.com/theme/bootstrap/contact-form-17/

## Section order (top to bottom)

1. **Contact card** — centered container with box-shadow
2. **Form panel** (left column, 8/12) — white background
   - Heading: "Send us a message"
   - Name field (required)
   - Email field (required)
   - Phone field (optional)
   - Company field (optional)
   - Message textarea (required)
   - "Send Message" button
   - Success/warning message area
3. **Contact info panel** (right column, 4/12) — dark navy background
   - Heading: "Contact Information"
   - Description text
   - Address row (icon + text)
   - Phone row (icon + text)
   - Email row (icon + text)

## Design fidelity notes

### Colors
- Brand primary: #35477d (navy) — button bg, form heading, contact-info bg
- Body bg: #fff
- Top decorative overlay: #8bbabb (teal pseudo-element, top 50vh)
- Body text: #8c8c8c
- Headings: #000
- Form labels: #b3b3b3
- Contact info text: rgba(255,255,255,0.5)
- Contact info icons: #fff

### Typography
- Font: Roboto (Google Fonts), weights 400, 700, 900
- Body line-height: 1.9
- Form heading: 20px, Roboto
- Button text: 12px, uppercase, letter-spacing 0.2rem

### Layout
- Bootstrap-like grid (use Tailwind grid/flex)
- .container > .row > .col-md-8 + .col-md-4
- .align-items-stretch for equal column heights
- .no-gutters (no column padding)
- .contact-wrap has box-shadow

### Form inputs
- No visible border — bottom border only (1px solid #ccc)
- On focus: border-color changes to #000
- No border-radius
- Height: 45px
- Label: 14px, color #b3b3b3, margin-bottom 10px

### Button
- .btn-primary: bg #35477d, color #fff
- border-radius: 0 (square corners)
- text-transform: uppercase
- letter-spacing: 0.2rem
- font-size: 12px
- padding: 15px 20px
- height: 45px

### Contact info panel
- Background: #35477d (same as brand primary)
- h3: white, 20px, margin-bottom 30px
- Body text: rgba(255,255,255,0.5)
- Icons: white, 20px
- List items: flex layout, icon left + text right, margin-bottom 15px

### Box shadow
- contact-wrap: 0 0 20px 0 rgba(0,0,0,0.2)

### Icons
- Original uses icomoon font (icon-room, icon-phone, icon-envelope)
- Recreate with lucide-react: MapPin, Phone, Mail

### Responsive
- Below md breakpoint: columns stack vertically
- Form panel on top, contact-info below

## Component structure

```
src/App.tsx
src/components/ContactCard.tsx
src/components/ContactForm.tsx
src/components/ContactInfo.tsx
src/index.css (Tailwind + @theme tokens)
src/main.tsx
src/test/setup.ts
```

## Dependencies

- lucide-react: MapPin, Phone, Mail icons
- packages/ui: cn() utility
- No additional dependencies needed
