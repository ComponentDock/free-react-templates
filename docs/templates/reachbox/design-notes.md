# Reachbox — Design Notes & Task Outline

Source: ColorLib Contact Form 07
Preview: https://preview.colorlib.com/theme/contact-form-07/ (404 — design from screenshot)

## Section order (top to bottom)

1. **Page title** — centered "Contact Form #07" above the card
2. **Two-column dark card**
   - Left: form panel (dark bg, "Write us")
   - Right: contact info panel (dark bg, "Contact information")
3. **Footer** — Component Dock link

## Structure details

### Page title
- Centered text, sans-serif font (Montserrat), ~24–28px
- Dark text on light gray page background (#F5F5F5)

### Card wrapper
- Dark charcoal background (#2D2D2D)
- Rounded corners (~8px)
- Subtle drop shadow
- Centered on page with horizontal padding
- Two columns: left form (~55%), right info (~45%)

### Left column — Form
- Dark background (same as card — seamless)
- "Write us" heading: white, Montserrat, ~24px, bold
- Form fields (underline style — bottom border only, no box):
  - Name input (full width)
  - Email input (full width)
  - Subject input (full width)
  - Message textarea (full width, ~100px tall)
- All inputs: transparent background, white placeholder text, subtle gray
  bottom border (#555), no border box
- "Send Message" button:
  - Orange background (#F5A623)
  - White text
  - ~4px border radius
  - Padding ~10px 24px
  - Below the textarea

### Right column — Contact Information
- Dark background (same as card — seamless)
- "Contact information" heading: white, Montserrat, ~20px, bold
- Subtext: "We're open for any suggestion or just to have a chat" — gray
  (#AAAAAA), smaller, sans-serif
- Four contact items, each with:
  - White/light icon (lucide-react: MapPin, Phone, Send, Globe)
  - Label in bold white + value in regular light gray
  - Items: Address, Phone, Email, Website
  - Vertical spacing between items (~20px)

## Fidelity notes

- Match the dark card aesthetic: #2D2D2D background throughout
- Match the form LEFT / info RIGHT column order
- Match the orange accent: #F5A623 for the Send Message button
- Match the underline input style (no border boxes)
- Match the Montserrat font family
- Match the white icons on dark background (no circular containers — flat icons)
- Match the "Write us" / "Contact information" headings
- Match the subtext under "Contact information"
- Match the card rounded corners and subtle shadow
- Match the light gray page background (#F5F5F5)

## Component plan

- `src/App.tsx` — compose page
- `src/components/PageTitle.tsx` — centered page title
- `src/components/ContactCard.tsx` — two-column dark card wrapper
- `src/components/ContactForm.tsx` — form with underline inputs + button
- `src/components/ContactInfo.tsx` — info panel with heading, subtext, 4 items
- `src/components/ContactItem.tsx` — single icon + text row

## Tasks

- [ ] Scaffold app from template-starter
- [ ] Install Google Fonts (Montserrat) in index.html
- [ ] Create PageTitle component
- [ ] Create ContactCard layout (two columns, dark bg)
- [ ] Create ContactForm (underline inputs + orange button)
- [ ] Create ContactInfo (dark panel, heading, subtext, 4 items)
- [ ] Create ContactItem (icon + text)
- [ ] Style with Tailwind: colors, fonts, responsive
- [ ] Add responsive stacking for mobile
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh
- [ ] Commit + open PR
