# Formview — Design Notes & Task Outline

Source: ColorLib Contact Form 09
Preview: https://preview.colorlib.com/theme/contact-form-09/ (404 — design from screenshot)

## Section order (top to bottom)

1. **Page title** — centered "Contact Form #09" (white on dark)
2. **Icon row** — 3 circular gold icons with contact labels
3. **Contact info** — Address, Phone, Email in a row
4. **Form** — "Get in touch with us" + stacked fields + full-width button
5. **Footer** — Component Dock link

## Structure details

### Page background
- Entire page: very dark (#1A1A1A), no card container
- Everything centered on the page

### Page title
- Centered text, serif font (Playfair Display), white, ~28px

### Icon row
- Three items centered in a horizontal row
- Each: circular gold icon container (~60px)
  - Location pin, Phone, Paper plane icons (dark on gold)

### Contact info
- Three items below icons, centered in a row
- Address, Phone, Email with bold labels + regular values

### Form (centered, ~50% max-width)
- "Get in touch with us" heading: serif, white, ~24px
- Full-width stacked inputs:
  - Name (dark bg #2A2A2A, gray placeholder)
  - Email
  - Subject
  - Message textarea (tall)
- "SEND MESSAGE" button: full width, gold bg (#C4A76C), dark text

## Fidelity notes

- Match the full dark page background (no card container)
- Match the gold/tan accent: #C4A76C for button and icons
- Match the full-width button spanning the form
- Match the centered single-column layout
- Match the dark input backgrounds with gray placeholders
- Match the typography: Playfair Display for headings, Poppins for body

## Component plan

- `src/App.tsx` — compose page (dark bg container)
- `src/components/PageTitle.tsx` — centered white title
- `src/components/IconRow.tsx` — 3 gold circular icons
- `src/components/ContactInfo.tsx` — Address, Phone, Email row
- `src/components/ContactForm.tsx` — stacked inputs + full-width gold button

## Tasks

- [ ] Scaffold app from template-starter
- [ ] Install Google Fonts (Playfair Display + Poppins) in index.html
- [ ] Create PageTitle component
- [ ] Create IconRow (3 gold circular icons)
- [ ] Create ContactInfo (3 items in a row)
- [ ] Create ContactForm (stacked dark inputs + full-width gold button)
- [ ] Style with Tailwind: dark bg, gold, fonts, responsive
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh
- [ ] Commit + open PR
