# Contactly — Design Notes & Task Outline

Source: ColorLib Contact Form 02
Preview: https://preview.colorlib.com/theme/contact-form-02/ (404 — design from screenshot)

## Section order (top to bottom)

1. **Page title** — centered "Contact Form #02" above the card
2. **Two-column card**
   - Left: contact info panel (green bg)
   - Right: form panel (white bg)
3. **Footer** — Component Dock link

## Structure details

### Page title
- Centered text, serif font (Playfair Display), ~24–28px
- Light gray page background (#F5F5F5)

### Left panel — Contact Info (green, ~30% width)
- Green/teal background (#4ECDC4), white text
- "Let's get in touch" heading: serif font, white, ~22px
- Subtext: "We're open for any suggestion or just to have a chat" — white, smaller, sans-serif
- Four contact items, each with:
  - Circular white icon container (~40px)
  - Icon in green (map pin, phone, paper plane, globe)
  - Label in bold white + value in regular white
  - Items: Address, Phone, Email, Website

### Right panel — Form (white, ~70% width)
- White background
- "Get in touch" heading: serif font, dark, ~22px
- Form fields (underline style — bottom border only, no box):
  - Row 1: FULL NAME + EMAIL ADDRESS (side by side, 50/50)
  - Row 2: SUBJECT (full width)
  - Row 3: MESSAGE (full width, ~120px tall)
  - Row 4: Send Message button (green bg, white text, 3px radius)
- Labels: uppercase, small, dark/medium gray, above each input
- Placeholders: light gray

## Fidelity notes

- Match the reversed column order: info LEFT, form RIGHT (opposite of Form 01)
- Match the green color: #4ECDC4 for info panel and button
- Match the underline input style (no border boxes)
- Match the uppercase labels above inputs
- Match the typography: Playfair Display for headings, Poppins for body
- Match the icon style: circular white containers
- Match the subtext under "Let's get in touch"

## Component plan

- `src/App.tsx` — compose page
- `src/components/PageTitle.tsx` — centered page title
- `src/components/ContactCard.tsx` — two-column card wrapper
- `src/components/ContactInfo.tsx` — green info panel with heading, subtext, 4 items
- `src/components/ContactItem.tsx` — single icon + text row
- `src/components/ContactForm.tsx` — form with underline inputs + button

## Tasks

- [ ] Scaffold app from template-starter
- [ ] Install Google Fonts (Playfair Display + Poppins) in index.html
- [ ] Create PageTitle component
- [ ] Create ContactCard layout (two columns, reversed)
- [ ] Create ContactInfo (green panel, heading, subtext, 4 items)
- [ ] Create ContactItem (icon circle + text)
- [ ] Create ContactForm (underline inputs + button)
- [ ] Style with Tailwind: colors, fonts, responsive
- [ ] Add responsive stacking for mobile
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh
- [ ] Commit + open PR
