# Gearline — Implementation Notes

## Source
- ColorLib "Watch": https://colorlib.com/wp/template/watch/
- Preview: https://preview.colorlib.com/theme/watch/
- Author: codepixer

## Section Order (implementation sequence)

1. **Header** — Sticky nav, logo placeholder, links to section anchors
2. **Hero** — Full-viewport background image (picsum), gradient overlay optional, headline + CTA
3. **VideoAbout** — Two-column: text left (headline + body + CTA), video thumbnail right with play icon overlay
4. **TopCourses** — Center product image + 4 surrounding feature cards with lucide-react icons
5. **HomeAbout** — Full-width split: image left, text + CTA right
6. **Services** — 3×2 grid of service cards, each with lucide icon, title, description
7. **UniqueFeatures** — Dark bg section, 4 product cards (image + name + price + "Pre Order" CTA)
8. **Reviews** — 3×2 grid of review cards with star ratings (lucide Star icons)
9. **FAQ** — Accordion with 4 items, use React state for toggle (no Bootstrap dependency)
10. **Footer** — 3 columns: About Us, Newsletter form, Social links (lucide icons), Component Dock attribution

## Fidelity Notes

### Colors
- Primary: #235ee7 (blue) — buttons, selections, hover states
- Accent: #4ae7fa (cyan) — gradient endpoint
- Gradient: linear-gradient(0deg, #235ee7, #4ae7fa) — all primary buttons
- Dark bg: #04091e — unique features section
- Card bg: #f9f9ff — service cards, course cards
- Body text: #777777, Headings: #222222

### Typography
- Font: Poppins (300, 400, 500, 600, 700) via Google Fonts
- h1: 36px, h2: 30px, h3: 24px, h4: 18px, h5: 16px, h6: 14px
- Body: 14px, weight 300, line-height 1.625

### Buttons
- Primary: pill shape (border-radius 25px), gradient bg, white text, 36px line-height
- Dark variant: black bg + white text (video section CTA)
- White variant: white bg + border (home about CTA)

### Layout
- Section gap: 120px vertical padding
- Container: Bootstrap-like 1200px max-width
- Grid: 12-column, responsive (col-lg-3/4/6, col-md-6)

### Unique Features Section
- Dark background (#04091e) with white heading text
- Product cards: white bg, image + name + price + "Pre Order" CTA
- On hover: show primary-btn (gradient)

### FAQ
- Left column only (right column empty in original)
- Accordion: click question toggles answer
- Card headers use gradient background

### Footer
- 3 columns: About Us (col-5), Newsletter (col-5), Social (col-2)
- Newsletter: email input + arrow submit button (gradient)
- Social: icon links with gradient hover effect
- Attribution: replace Colorlib with Component Dock link

## Assets (placeholders)
- Hero bg: `https://picsum.photos/seed/gearline-hero/1920/1080`
- Video thumbnail: `https://picsum.photos/seed/gearline-video/600/400`
- Center product image: `https://picsum.photos/seed/gearline-product/500/600`
- About section image: `https://picsum.photos/seed/gearline-about/800/600`
- Product cards: `https://picsum.photos/seed/gearline-prod-N/400/400` (N=1..4)
- Feature icons: lucide-react (Rocket, Cog, Building, Phone, Diamond, MessageCircle)
