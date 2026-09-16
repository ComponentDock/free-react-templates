# Touchbase — Design Notes & Task Outline

Source: ColorLib Contact Form 01
Preview: https://preview.colorlib.com/theme/contact-form-01/ (404 — design from screenshot)

## Section order (top to bottom)

1. **Page title** — centered "Contact Form #01" above the card
2. **Two-column card**
   - Left: form panel (white bg)
   - Right: contact info panel (blue bg)
3. **Footer** — Component Dock link

## Structure details

### Page title
- Centered text, serif font (Playfair Display), ~24–28px
- Light gray page background (#F5F5F5)

### Left panel — Form (white, ~55% width)
- White background, no visible border or shadow
- "Get in touch" heading: serif font, dark text, ~22px
- Form fields:
  - Row 1: Name input + Email input (side by side, 50/50)
  - Row 2: Subject input (full width)
  - Row 3: Message textarea (full width, ~120px tall)
  - Row 4: Send Message button (blue bg #4292E6, white text, 3px radius, left-aligned)
- Input styling: light gray border, white bg, subtle placeholder text

### Right panel — Contact Info (blue, ~45% width)
- Blue background (#4292E6), white text
- "Contact us" heading: serif font, white, ~22px
- Four contact items, each with:
  - Circular white icon container (~40px)
  - Icon in brand blue (map pin, phone, paper plane, globe)
  - Label in bold white + value in regular white
  - Items: Address, Phone, Email, Website
- Panel extends slightly taller than the left panel

## Fidelity notes

- Match the two-column layout exactly (form left, info right on desktop)
- Match the color: blue #4292E6 for info panel and button
- Match the typography: Playfair Display for headings, Poppins for body
- Match the icon style: circular white containers
- Match the form layout: Name+Email side by side, Subject full, Message tall
- Button: blue bg, white text, slight border radius (~3px)

## Component plan

- `src/App.tsx` — compose page
- `src/components/PageTitle.tsx` — centered page title
- `src/components/ContactCard.tsx` — two-column card wrapper
- `src/components/ContactForm.tsx` — form with all fields + button
- `src/components/ContactInfo.tsx` — blue info panel with 4 items
- `src/components/ContactItem.tsx` — single icon + text row

## Tasks

- [ ] Scaffold app from template-starter
- [ ] Install Google Fonts (Playfair Display + Poppins) in index.html
- [ ] Create PageTitle component
- [ ] Create ContactCard layout (two columns)
- [ ] Create ContactForm (fields + button)
- [ ] Create ContactInfo (blue panel, 4 items)
- [ ] Create ContactItem (icon circle + text)
- [ ] Style with Tailwind: colors, fonts, responsive
- [ ] Add responsive stacking for mobile
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh
- [ ] Commit + open PR
