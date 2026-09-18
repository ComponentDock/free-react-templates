# Formpeak — Design Notes & Task Outline

Source: ColorLib Contact Form 05
Preview: https://preview.colorlib.com/theme/contact-form-05/ (404 — design from screenshot)

## Section order (top to bottom)

1. **Page title** — centered "Contact Form #05" above the card
2. **Two-column card**
   - Left: form + info panel (white bg)
   - Right: image panel (full-height placeholder)
3. **Footer** — Component Dock link

## Structure details

### Page title
- Centered text, serif font (Playfair Display), ~24–28px
- Light gray page background (#F5F5F5)

### Left panel — Form & Info (white, ~55% width)
- White background
- "Contact us" heading: serif font, dark, ~22px
- Subtext: "We're open for any suggestion or just to have a chat" — gray
- Three-column contact info row:
  - ADDRESS: 198 West 21th Street, Suite 721 New York NY 10016
  - EMAIL: info@yoursite.com
  - PHONE: + 1235 2355 98
  - Labels in uppercase, dark; values in regular weight
- Form fields (underline style — bottom border only):
  - Name input
  - Email input
  - Subject input
  - Message textarea (placeholder: "Create a message here", ~120px tall)
- "Send Message" button: gold bg (#D4A574), white text, 3px radius
- Social section below button:
  - "Follow us here" heading (serif)
  - FACEBOOK | TWITTER | INSTAGRAM | DRIBBBLE links (teal #55B68A)

### Right panel — Image (right, ~45% width)
- Full-height image filling the right column
- Use `https://picsum.photos/seed/formpeak-1/600/800` as placeholder
- Original shows a room interior with plants and window

## Fidelity notes

- Match the gold/amber button color: #D4A574
- Match the teal social link color: #55B68A
- Match the three-column contact info layout
- Match the underline input style
- Match the social links section with platform names
- Match the typography: Playfair Display for headings, Poppins for body
- Image panel should fill the full height of the card

## Component plan

- `src/App.tsx` — compose page
- `src/components/PageTitle.tsx` — centered page title
- `src/components/ContactCard.tsx` — two-column card wrapper
- `src/components/ContactInfo.tsx` — heading, subtext, three-column info row
- `src/components/ContactForm.tsx` — form with underline inputs + gold button
- `src/components/SocialLinks.tsx` — "Follow us here" + platform links
- `src/components/ImagePanel.tsx` — right column with placeholder image

## Tasks

- [ ] Scaffold app from template-starter
- [ ] Install Google Fonts (Playfair Display + Poppins) in index.html
- [ ] Create PageTitle component
- [ ] Create ContactCard (two columns: form + image)
- [ ] Create ContactInfo (heading, subtext, three-column row)
- [ ] Create ContactForm (underline inputs + gold button)
- [ ] Create SocialLinks (heading + platform links)
- [ ] Create ImagePanel (placeholder image filling height)
- [ ] Style with Tailwind: gold, teal, fonts, responsive
- [ ] Add responsive stacking for mobile
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh
- [ ] Commit + open PR
