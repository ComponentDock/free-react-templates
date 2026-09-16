# Formspot — Design Notes & Task Outline

Source: ColorLib Contact Form 08
Preview: https://preview.colorlib.com/theme/contact-form-08/ (404 — design from screenshot)

## Section order (top to bottom)

1. **Page title** — centered "Contact Form #08"
2. **Two-column card**
   - Left: form panel (white bg)
   - Right: image panel (full-height placeholder)
3. **Footer** — Component Dock link

## Structure details

### Page title
- Centered text, serif font (Playfair Display), ~24–28px
- Light gray page background (#F5F5F5)

### Left panel — Form (white, ~55% width)
- White background
- "Get in touch with us" heading: serif font, dark, ~24px
- Form fields (bordered box style — full border around inputs):
  - Row 1: FULL NAME + EMAIL ADDRESS (side by side, 50/50)
  - Row 2: SUBJECT (full width)
  - Row 3: MESSAGE (full width, ~120px tall textarea)
  - Row 4: Send Message button (olive green bg #7C9A5E, white text, 3px radius)
- Labels: uppercase, small, dark, bold
- Input borders: light gray (#E0E0E0)

### Right panel — Image (right, ~45% width)
- Full-height image filling the right column
- Original shows ivy/vines on a white wall with a window
- Use `https://picsum.photos/seed/formspot-1/600/600` as placeholder

## Fidelity notes

- Match the olive green button: #7C9A5E
- Match the bordered-box input style (not underline)
- Match the two-column layout: form left, image right
- Match the uppercase labels above inputs
- Match the typography: Playfair Display for headings, Poppins for body
- Image panel should fill the full height of the card
- This is a simpler layout than Form 05 (no social links, no info row)

## Component plan

- `src/App.tsx` — compose page
- `src/components/PageTitle.tsx` — centered page title
- `src/components/ContactCard.tsx` — two-column card wrapper
- `src/components/ContactForm.tsx` — form with bordered inputs + olive button
- `src/components/ImagePanel.tsx` — right column with placeholder image

## Tasks

- [ ] Scaffold app from template-starter
- [ ] Install Google Fonts (Playfair Display + Poppins) in index.html
- [ ] Create PageTitle component
- [ ] Create ContactCard (two columns: form + image)
- [ ] Create ContactForm (bordered inputs + olive button)
- [ ] Create ImagePanel (placeholder image filling height)
- [ ] Style with Tailwind: olive, fonts, responsive
- [ ] Add responsive stacking for mobile
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh
- [ ] Commit + open PR
