# Formdock — Design Notes & Task Outline

Source: ColorLib Contact Form 12
Preview: https://preview.colorlib.com/theme/contact-form-12/ (404 — design from screenshot)

## Section order (top to bottom)

1. **Two-column layout** (centered on white page)
   - Left: heading + paragraph + contact info
   - Right: form with labeled inputs
2. **Footer** — Component Dock link

## Structure details

### Page background
- White (#FFFFFF), no card, no background image
- Clean, simple aesthetic

### Left column (~50%)
- "Contact Us" heading: bold sans-serif (Poppins), black, ~36px
- Paragraph: gray text, lorem ipsum content
- Contact info items (vertically stacked, ~16px apart):
  - Building icon + "34 Street Name, City Name Here, United States"
  - Phone icon + "+1 (222) 345 6789"
  - Mail icon + "info@mywebsite.com"
  - Icons: dark gray (#555555), text: dark

### Right column (~50%)
- Form with LABELS ABOVE inputs:
  - "Name" label + bordered input
  - "Email" label + bordered input
  - "Message" label + bordered textarea (tall)
- Labels: dark text (#333333), ~14px, above each input
- Input borders: light gray (#E0E0E0)
- "Send Message" button: blue bg (#4285F4), white text, 4px radius

## Fidelity notes

- Match the labels ABOVE inputs (not placeholders)
- Match the bordered-box input style
- Match the blue button: #4285F4
- Match the contact info with icons
- Match the different address format (34 Street Name)
- Match the sans-serif typography throughout (Poppins)

## Component plan

- `src/App.tsx` — compose page
- `src/components/LeftColumn.tsx` — heading + paragraph + contact info
- `src/components/ContactInfoItem.tsx` — icon + text row
- `src/components/ContactForm.tsx` — labeled inputs + blue button

## Tasks

- [ ] Scaffold app from template-starter
- [ ] Install Google Fonts (Poppins) in index.html
- [ ] Create LeftColumn (heading + text + contact info)
- [ ] Create ContactInfoItem (icon + text)
- [ ] Create ContactForm (labeled bordered inputs + blue button)
- [ ] Style with Tailwind: blue, fonts, responsive
- [ ] Add responsive stacking for mobile
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh
- [ ] Commit + open PR
