# CrapeCraft — Implementation Tasks & Design Notes

Source: ColorLib Go Crepe (https://preview.colorlib.com/theme/go-crepe/)
Spec: openspec/specs/template-crepecraft/spec.md

## Section Order (top → bottom)

1. **Header/Navbar** — sticky, logo left, nav right, hamburger for mobile
2. **Hero Banner** — full-width slider with gradient overlay, white text, CTA
3. **Features** — 6 cards in 2×3 grid, gradient icons, uppercase titles
4. **Our Story** — split layout (title left on gradient, content right)
5. **Amazing Works** — horizontal carousel of portfolio items
6. **Our Story 2** — mirrored split layout
7. **Brand Logos** — horizontal row of 5 partner logos
8. **Newsletter** — centered title, pill-shaped email input + button
9. **Footer Widget** — 3-column contact info, gradient bg
10. **Footer** — copyright + social icons + Component Dock link

## Component Breakdown

- `Navbar.tsx` — Header with logo, nav links, mobile hamburger toggle
- `HeroBanner.tsx` — Full-width hero with gradient bg, heading, subtext, CTA
- `Features.tsx` — 6-card grid section, each card: icon + title + description
- `StorySection.tsx` — Reusable split layout component (props: title position left/right)
- `AmazingWorks.tsx` — Carousel of portfolio items (image + caption)
- `BrandLogos.tsx` — Row of placeholder logo images
- `Newsletter.tsx` — Subscription form with pill-shaped input
- `FooterWidgets.tsx` — 3-column contact info with gradient background
- `Footer.tsx` — Copyright, social icons, Component Dock link

## Design Fidelity Notes

### Color System
- Primary gradient: teal-to-purple (#49e3ce → #9920ed) at 135deg
- Used in: hero overlay, story section backgrounds, footer widget bg, icon pseudo-elements, button hover state
- Body text: #777777, Headings: #222222, Accent: #3c408f
- Section alternating: white / #f9f9ff

### Typography
- Poppins via Google Fonts, weights 300/500/600
- Body: 14px/300, Headings: 500 weight, uppercase used for subtitles

### Buttons
- Pill-shaped (border-radius: 20px)
- Transparent bg + white border
- On hover: gradient fill via pseudo-element transition
- Arrow icon inline

### Sections
- Featured area: white bg, 3-col grid ×2 rows
- Amazing works: #f9f9ff bg, horizontal scroll carousel
- Story sections: gradient bg overlay with content box on white card
- Subscription: white bg, input with #f9f9ff fill and pill shape
- Footer widgets: gradient bg, 3-col icon boxes with white semi-transparent borders

### Images
- All images → picsum.photos placeholders
- Brand logos → 5 separate placeholder images
- No copied assets from ColorLib
