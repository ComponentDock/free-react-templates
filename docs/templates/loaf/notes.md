# Loaf — Design Notes

## ColorLib Source

- Template: Bakery (https://colorlib.com/wp/template/bakery/)
- Category: Food & Drink
- Style: Warm, inviting bakery landing page

## CSS Analysis

### Colors

- Primary brand: #d1ab7f (tan/gold) — used in buttons, accents, active states, borders
- Body text: #777777
- Headings: #222222
- Section bg (alternating): #f9f9ff (very light lavender)
- Footer bg: #04091e (dark navy)
- Hero overlay: rgba(4,9,30,0.5)

### Typography

- Font: Poppins (Google Fonts)
- Weights: 300 (body), 400, 500, 600 (headings), 700 (bold)
- H1: 36px, H2: 30px, H3: 24px, H4: 18px
- Line height: 1.2–1.625

### Layout

- Container max-width: standard Bootstrap container
- Section padding: 120px top/bottom (py-24 sm:py-32 in Tailwind)
- Grid: 12-column Bootstrap-like grid

### Components

- Primary button: rounded (25px), brand color bg, white text, hover inverts
- Dark button: #222 bg, white text
- Navbar: white bg, fixed, scrolls to shadow
- Cards: subtle shadows, hover effects

## Replication Notes

- Hero has parallax-like fixed background attachment
- Categories use circular images with hover scale effect
- Video section has background image with play button overlay
- Testimonials use slider-like layout (implemented as static grid for React)
- Blog cards have hover color change on titles
