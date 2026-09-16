# Formrelay — Design Notes & Task Outline

Source: ColorLib Contact Form 06
Preview: https://preview.colorlib.com/theme/contact-form-06/ (404 — design from screenshot)

## Section order (top to bottom)

1. **Page title** — centered "Contact Form #06"
2. **Two-column card**
   - Left: form panel (white bg)
   - Right: map image panel
3. **Contact info row** — 4 items with large circular navy icons
4. **Footer** — Component Dock link

## Structure details

### Page title
- Centered text, serif font (Playfair Display), ~24–28px
- Light gray page background (#F5F5F5)

### Left panel — Form (white, ~50% width)
- White background
- "Contact Us" heading: serif font, dark, ~22px
- Form fields (bordered box style — full border around inputs):
  - Row 1: FULL NAME + EMAIL ADDRESS (side by side, 50/50)
  - Row 2: SUBJECT (full width)
  - Row 3: MESSAGE (full width, ~120px tall textarea)
  - Row 4: Send Message button (navy bg #2C3E7B, white text, 3px radius)
- Labels: uppercase, small, dark, bold
- Input borders: light gray (#E0E0E0)

### Right panel — Map (right, ~50% width)
- Full-height image filling the right column
- Original shows Google Maps view of New York area
- Use `https://picsum.photos/seed/formrelay-map/600/600` as placeholder
- Could also use an embedded static map image

### Contact info row (below card)
- Four items centered in a horizontal row
- Each item:
  - Large circular navy icon container (~60px)
  - White icon inside (map pin, phone, paper plane, globe)
  - Label in bold dark + value text below
  - Items: Address, Phone, Email (teal link), Website (teal link)

## Fidelity notes

- Match the navy blue color: #2C3E7B for button and icon circles
- Match the bordered-box input style (not underline)
- Match the map in the right column
- Match the contact info row below the card with large circular icons
- Match the uppercase labels above inputs
- Match the typography: Playfair Display for headings, Poppins for body

## Component plan

- `src/App.tsx` — compose page
- `src/components/PageTitle.tsx` — centered page title
- `src/components/ContactCard.tsx` — two-column card wrapper
- `src/components/ContactForm.tsx` — form with bordered inputs + navy button
- `src/components/MapPanel.tsx` — right column with map placeholder
- `src/components/ContactInfoRow.tsx` — horizontal row of 4 items below card
- `src/components/ContactInfoItem.tsx` — single large icon circle + text

## Tasks

- [ ] Scaffold app from template-starter
- [ ] Install Google Fonts (Playfair Display + Poppins) in index.html
- [ ] Create PageTitle component
- [ ] Create ContactCard (two columns: form + map)
- [ ] Create ContactForm (bordered inputs + navy button)
- [ ] Create MapPanel (map placeholder image)
- [ ] Create ContactInfoRow (horizontal row, 4 items)
- [ ] Create ContactInfoItem (large navy icon circle + text)
- [ ] Style with Tailwind: navy, teal, fonts, responsive
- [ ] Add responsive stacking for mobile
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh
- [ ] Commit + open PR
