# Formrise — Design Notes & Task Outline

Source: ColorLib Contact Form 07
Preview: https://preview.colorlib.com/theme/contact-form-07/ (404 — design from screenshot)

## Section order (top to bottom)

1. **Page title** — centered "Contact Form #07"
2. **Dark card** — single dark container with two sections
   - Left: form section
   - Right: contact information section
   - Vertical divider between them
3. **Footer** — Component Dock link

## Structure details

### Page title
- Centered text, serif font (Playfair Display), ~24–28px
- Light gray page background (#F5F5F5)

### Dark card (centered, ~70% max-width)
- Dark charcoal background (#343A40)
- Rounded corners (~5px)
- Internal vertical divider (~1px, #4A4A4A)

### Left section — Form (~50%)
- "Write us" heading: serif font (Playfair Display), white, ~24px
- Form fields (underline style — light bottom border on dark bg):
  - Name input (placeholder: "Name")
  - Email input (placeholder: "Email")
  - Subject input (placeholder: "Subject")
  - Message textarea (placeholder: "Message", ~120px tall)
- Input borders: #555555 (light on dark)
- "Send Message" button: orange bg (#E8A838), white text, 3px radius

### Right section — Contact Info (~50%)
- "Contact information" heading: serif font, white, ~18px
- Subtext: "We're open for any suggestion or just to have a chat" — #AAAAAA
- Four contact items, each with:
  - Small icon (white/light gray)
  - Label in bold white + value in lighter gray
  - Items: Address, Phone, Email, Website

## Fidelity notes

- Match the dark card: entire card is dark (not split backgrounds)
- Match the orange button: #E8A838
- Match the vertical divider between form and info
- Match the underline input style with light borders on dark bg
- Match the typography: Playfair Display for headings, Poppins for body
- Match the card rounded corners (~5px)

## Component plan

- `src/App.tsx` — compose page
- `src/components/PageTitle.tsx` — centered page title
- `src/components/DarkCard.tsx` — dark card container with divider
- `src/components/ContactForm.tsx` — form with underline inputs + orange button
- `src/components/ContactInfo.tsx` — heading, subtext, 4 contact items
- `src/components/ContactItem.tsx` — single icon + text row

## Tasks

- [ ] Scaffold app from template-starter
- [ ] Install Google Fonts (Playfair Display + Poppins) in index.html
- [ ] Create PageTitle component
- [ ] Create DarkCard (dark bg, rounded, divider)
- [ ] Create ContactForm (underline inputs + orange button)
- [ ] Create ContactInfo (heading, subtext, 4 items)
- [ ] Create ContactItem (icon + text)
- [ ] Style with Tailwind: dark bg, orange, fonts, responsive
- [ ] Add responsive stacking for mobile
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh
- [ ] Commit + open PR
