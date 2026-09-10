# Bitrift — Design Notes

Source: ColorLib Bitcoin (https://colorlib.com/wp/template/bitcoin/)
Preview: https://preview.colorlib.com/theme/bitcoin/
Category: Cryptocurrency Landing Page

## Design Aesthetic
- Modern, corporate tech-finance vibe
- Dark hero with physical bitcoin imagery + dark overlay
- Warm yellow-orange gradient as the signature accent throughout
- Clean Poppins sans-serif typography at generous weights
- High contrast: dark sections (#222, #04091e) alternating with white/light (#f9f9ff)

## Section Order (11 sections)

1. Navbar
2. Hero / Banner (full-width, dark overlay)
3. Converter (gradient card overlapping hero)
4. Simple Services (3-column)
5. About Us (dark bg, 2-col, carousel)
6. Features (6-item grid)
7. Stats / Chart (light bg, 2-col)
8. Call to Action (gradient bg)
9. Pricing (3 crypto cards)
10. Blog (3 cards)
11. Footer (dark bg, newsletter)

## Fidelity Notes

### Navbar
- Transparent at top, becomes sticky on scroll
- Logo left, nav links right
- "Pages" has a dropdown (Generic, Elements) — simplify to a simple dropdown or omit for React version
- Mobile: hamburger toggle

### Hero
- Full-width background image with dark overlay (rgba(4,9,30,0.85))
- Subheading "Currently Purchase Rate" — white, uppercase, small
- Large price "$12,356" — very bold, huge
- Description paragraph — white
- "Buy Bitcoin" button — orange gradient, pill shape (border-radius: 25px)
- On mobile: button radius becomes 3px (square)

### Converter
- Negative margin (-105px) overlaps hero bottom, z-index: 2
- Gradient bg: linear-gradient(0deg, #f3c400 0%, #f88845 100%)
- Bitcoin icon + 4 inputs + calculate button
- White heading, white subtext
- Button: white bg, dark text, pill shape

### Simple Services
- White bg, 3 equal columns
- Each: icon image + heading link + paragraph
- Use placeholder icons from lucide-react

### About Us
- Dark bg (#222), full-width container-fluid
- Left: image carousel with owl-style up/down navigation arrows
- Right: Bitcoin icon, large white heading, description
- For React: use a simple image slider or static image

### Features
- White bg, centered header
- 6 items in 3×2 grid
- Each: linear icon (lnr-*) + title + description
- Use lucide-react icons as replacements for linearicons

### Stats
- Light bg (#f9f9ff), 2-column
- Left: chart image (use placeholder)
- Right: heading, description, "View Details" button
- Button: orange border on hover, transparent bg

### Call to Action
- Full-width gradient bg (#f3c400 → #f88845)
- Centered white heading + description + white button
- Button: white bg, dark text, pill shape

### Pricing
- White bg, centered header
- 3 cards: each with top (name), description, bottom (price + button)
- Button: dark bg (#222), hover: gradient (#ca9814)
- Price display: huge font-weight-300, dollar sign superscript
- Cards have border (#eee), hover effect on bottom section

### Blog
- White bg, centered header
- 3 cards: thumbnail, title, excerpt, author (photo + name + date)
- Title color changes to orange on hover

### Footer
- Very dark bg (#04091e), 3 columns
- About Us text, Top Products links, Newsletter form
- Bottom: copyright + social icons (dark square bg, orange hover)
- Replace Colorlib credit with Component Dock link

## Component Map

| Section          | Component File        | Notes                          |
| ---------------- | --------------------- | ------------------------------ |
| Navbar           | `Navbar.tsx`          | Sticky, transparent → solid    |
| Hero             | `Hero.tsx`            | Full-width, overlay, price     |
| Converter        | `Converter.tsx`       | Gradient card, form inputs     |
| SimpleServices   | `SimpleServices.tsx`  | 3-col grid, icons              |
| About            | `About.tsx`           | Dark bg, carousel              |
| Features         | `Features.tsx`        | 6-item grid, icons             |
| Stats            | `Stats.tsx`           | Chart + text, light bg         |
| CallToAction     | `CallToAction.tsx`    | Gradient section, CTA          |
| Pricing          | `Pricing.tsx`         | 3 crypto cards                 |
| Blog             | `Blog.tsx`            | 3 post cards                   |
| Footer           | `Footer.tsx`          | Dark, newsletter, social       |
