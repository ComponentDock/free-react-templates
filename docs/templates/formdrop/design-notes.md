# Formdrop — Design Notes & Task Outline

Source: ColorLib Contact Form 04
Preview: https://preview.colorlib.com/theme/contact-form-04/ (404 — design from screenshot)

## Section order (top to bottom)

1. **Page title** — centered "Contact Form #04" above the card
2. **Two-column card**
   - Left: form panel (purple bg)
   - Right: contact info panel (white bg)
3. **Footer** — Component Dock link

## Structure details

### Page title
- Centered text, serif font (Playfair Display), ~24–28px
- Light gray page background (#F5F5F5)

### Left panel — Form (purple, ~45% width)
- Deep purple background (#6C63FF), white text
- "Send us a message" heading: serif font, white, ~22px
- Form fields (underline style — bottom border only, light on purple):
  - Name input (placeholder: "Name")
  - Email input (placeholder: "Email")
  - Subject input (placeholder: "Subject")
  - Message textarea (placeholder: "Message", ~120px tall)
  - All fields stacked vertically (no side-by-side)
- "Send Message" button: pink/magenta bg (#E91E63), white text, 3px radius

### Right panel — Contact Info (white, ~55% width)
- White background
- "Contact us" heading: serif font, dark, ~22px, with a short pink underline decoration
- Subtext: "We're open for any suggestion or just to have a chat" — gray, smaller
- Four contact items, each with:
  - Circular gray icon container (~40px)
  - Icon in dark gray (map pin, phone, paper plane, globe)
  - Label in bold dark + value in regular gray
  - Items: Address, Phone, Email, Website

## Fidelity notes

- Match the purple color: #6C63FF for form panel
- Match the pink accent: #E91E63 for button and heading underline
- Match the heading underline decoration on "Contact us"
- Match the vertical stacking of all form fields (no side-by-side)
- Match the underline input style with light borders on purple
- Match the gray circular icon containers on the info side
- Match the typography: Playfair Display for headings, Poppins for body

## Component plan

- `src/App.tsx` — compose page
- `src/components/PageTitle.tsx` — centered page title
- `src/components/ContactCard.tsx` — two-column card wrapper
- `src/components/ContactForm.tsx` — form with underline inputs + pink button
- `src/components/ContactInfo.tsx` — white info panel with heading, subtext, 4 items
- `src/components/ContactItem.tsx` — single icon + text row
- `src/components/HeadingUnderline.tsx` — pink underline decoration component

## Tasks

- [ ] Scaffold app from template-starter
- [ ] Install Google Fonts (Playfair Display + Poppins) in index.html
- [ ] Create PageTitle component
- [ ] Create ContactCard layout (two columns)
- [ ] Create ContactForm (underline inputs + pink button, all stacked)
- [ ] Create ContactInfo (white panel, heading with underline, subtext, 4 items)
- [ ] Create ContactItem (gray icon circle + text)
- [ ] Create HeadingUnderline (pink decoration)
- [ ] Style with Tailwind: purple, pink, fonts, responsive
- [ ] Add responsive stacking for mobile
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh
- [ ] Commit + open PR
