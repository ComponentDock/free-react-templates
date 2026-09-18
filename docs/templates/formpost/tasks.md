# Formpost — Implementation Tasks

> Recreation of ColorLib **Contact Form 06**
> Source: https://colorlib.com/wp/template/contact-form-06/
> Preview: https://preview.colorlib.com/theme/contact-form-06/ (404 — based on screenshot)

## Structure order (top → bottom)

1. Page title ("Contact Form #06") — centered heading
2. Two-column section (form card + map placeholder)
3. Contact info row (4 items with circular icons)
4. Footer (Component Dock link)

## Design notes

### Page background
- Near-white gray (#f8f9fa) — clean, minimal feel
- No header/navbar — this is a standalone contact form page

### Two-column section
- Centered container (max-width ~900px, horizontal padding)
- Left column (~55%): white card containing the form
- Right column (~45%): map placeholder (use placeholder image or static map)
- Both columns share equal height via flex or grid

### Form card
- White background, subtle padding
- "Contact Us" heading at top (dark, medium-large font size)
- Full Name + Email Address: side by side in one row (50/50 split)
- Subject: full width, single-line input
- Message: full width, multi-line textarea (taller than inputs)
- Labels: uppercase, small font, dark color, above each input
- Inputs: light border (#e0e0e0), placeholder text in gray
- Button: "Send Message", dark indigo-blue background (#435eb5), white text,
  slight border-radius (4px), positioned below Message

### Map column
- Fill entire right column height
- Use a placeholder map image (picsum or similar) or a static map embed
- Rounded corners matching the form card aesthetic

### Contact info row
- Four items evenly spaced in a horizontal flex row
- Each item: circular icon (50% radius, brand blue background, white icon)
  above the text content
- Icons from lucide-react: MapPin, Phone, Send, Globe
- Text: label prefix (Address/Phone/Email/Website) + value
- Email and Website values are clickable links (brand blue color)

### Color palette
- Primary brand: #435eb5 (indigo-blue) — used for icons, button, links
- Page background: #f8f9fa
- Card background: #ffffff
- Heading text: #1a1a2e
- Body/label text: #333333
- Placeholder text: #888888
- Input borders: #e0e0e0

### Typography
- Font family: Jost (Google Fonts), sans-serif fallback
- Page title: large, centered
- Section heading ("Contact Us"): medium-large
- Labels: small, uppercase, bold
- Body text: regular weight, ~14-16px

### Component breakdown
- `src/App.tsx` — composes PageTitle, ContactSection, ContactInfoRow, Footer
- `src/components/PageTitle.tsx` — centered "Contact Form #06"
- `src/components/ContactSection.tsx` — two-column container
- `src/components/ContactForm.tsx` — form card with fields + button
- `src/components/MapPlaceholder.tsx` — right column map area
- `src/components/ContactInfoRow.tsx` — 4-item horizontal row
- `src/components/ContactInfoItem.tsx` — single icon + text item
- `src/components/Footer.tsx` — Component Dock link

### Fidelity notes
- Match section order exactly: title → two-column → contact row → footer
- Match the card/white-container aesthetic
- Match uppercase labels
- Match button style (dark blue, white text, slight radius)
- Match circular icon style for contact info
- Do NOT use actual Google Maps — use a placeholder image
- Do NOT copy any assets — use placeholders and lucide-react icons
