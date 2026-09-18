# Formcatch — Design Notes & Task Outline

Source: ColorLib Contact Form 03
Preview: https://preview.colorlib.com/theme/contact-form-03/ (404 — design from screenshot)

## Section order (top to bottom)

1. **Page title** — centered "Contact Form #03"
2. **Info bar** — horizontal row of 4 contact items with teal circular icons
3. **Two-column card**
   - Left: form panel (white bg)
   - Right: image panel (full-height placeholder)
4. **Footer** — Component Dock link

## Structure details

### Page title
- Centered text, serif font (Playfair Display), ~24–28px
- Light gray page background (#F5F5F5)

### Info bar
- Horizontal row, 4 items evenly spaced
- Each item: circular teal icon (~50px) above text
  - Label (bold, dark) + value (teal colored, smaller)
  - Items: Address, Phone, Email, Website
- Icons: white icon on teal (#7EC8E3) circle

### Two-column card — Form (white, ~50% width)
- White background
- "Contact Us" heading: serif font, dark, ~22px
- Form fields (underline style — bottom border only):
  - Row 1: FULL NAME + EMAIL ADDRESS (side by side, 50/50)
  - Row 2: SUBJECT (full width)
  - Row 3: MESSAGE (full width, ~120px tall)
  - Row 4: Send Message button (teal bg, white text, 3px radius)
- Labels: uppercase, small, dark/medium gray

### Two-column card — Image (right, ~50% width)
- Full-height image filling the right column
- Use `https://picsum.photos/seed/formcatch-1/600/600` as placeholder
- Original shows a B&W cat photo — use a similar portrait-style image

## Fidelity notes

- Match the info bar layout: 4 items in a horizontal row with circular icons
- Match the teal color: #7EC8E3 for icons, button, and link accents
- Match the two-column card: form left, image right
- Match the underline input style (no border boxes)
- Match the uppercase labels above inputs
- Match the typography: Playfair Display for headings, Poppins for body
- Image panel should fill the full height of the card

## Component plan

- `src/App.tsx` — compose page
- `src/components/PageTitle.tsx` — centered page title
- `src/components/InfoBar.tsx` — horizontal row of 4 contact items
- `src/components/InfoBarItem.tsx` — single icon + text in info bar
- `src/components/ContactCard.tsx` — two-column card wrapper
- `src/components/ContactForm.tsx` — form with underline inputs + button
- `src/components/ImagePanel.tsx` — right column with placeholder image

## Tasks

- [ ] Scaffold app from template-starter
- [ ] Install Google Fonts (Playfair Display + Poppins) in index.html
- [ ] Create PageTitle component
- [ ] Create InfoBar (horizontal row, 4 items)
- [ ] Create InfoBarItem (circular icon + text)
- [ ] Create ContactCard (two columns: form + image)
- [ ] Create ContactForm (underline inputs + button)
- [ ] Create ImagePanel (placeholder image filling height)
- [ ] Style with Tailwind: colors, fonts, responsive
- [ ] Add responsive stacking for mobile
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh
- [ ] Commit + open PR
