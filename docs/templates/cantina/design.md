# Cantina — Design Notes

ColorLib source: https://colorlib.com/wp/template/luigis/
Preview: https://preview.colorlib.com/theme/luigis/

## Section order (top to bottom)

1. Navbar
2. Hero (full-width slider)
3. Our Story (two-column)
4. Best Sellers (dark bg, product cards)
5. Our Menu (tab-filtered grid)
6. Footer

## Section-by-section fidelity notes

### 1. Navbar
- Logo: display font "Beyond the Mountains" — use Playfair Display as Google Fonts fallback
- Phone number CTA on the right side (red button style)
- Nav links: Home, About Us, Services, News, Contact
- Sticky/fixed on scroll, dark semi-transparent background

### 2. Hero
- Full-width background image (use picsum.photos seed for pizza/pasta hero)
- Overlay text centered vertically and horizontally
- Subtitle: "BEST IN TOWN" in uppercase, small letter-spacing
- Heading: "Pizza & Pasta" in display font, large
- CTA: "SEE TODAYS MENU" — filled red button (#EF0031, 3px radius, 55px height)
- Bottom: triangle-up CSS decoration (use clip-path or SVG)
- Height: ~900px on desktop

### 3. Our Story
- Two-column layout (col-md-6 each)
- Left column: heading "Our Story" + two paragraphs of body text
- Right column: food/restaurant image (use picsum.photos)
- Side decorative panels: absolute-positioned image strips on left/right edges (visible only on lg+ screens)
- Light background

### 4. Best Sellers
- Full-width dark section with parallax food background image
- Triangle decorations at top (triangle-bottom) and bottom (triangle-up)
- 4-column grid of product cards (8 total, 2 rows)
- Each card:
  - Circular product image (200x200px, border-radius: 50%)
  - Ribbon label: "OFFER" (red), "SPECIALITY" (green #1F8330), "PLUS SIZE" (red)
  - Product name in display font
  - Price in heading style
  - "Order Now" border button (#EF0031 border, 2px radius, 45px height)
- "SEE TODAYS MENU" CTA at bottom center

### 5. Our Menu
- Tab bar: ALL, PIZZA, PASTA, SALADS, DESERTS
- ALL tab active by default
- Grid of menu items (4 per row on desktop)
- Each item: small square image (120x120), item name, price, short description
- "SEE TODAYS MENU" CTA button at bottom

### 6. Footer
- Dark background
- Three-column layout: Address, Phone, Email
- Copyright line at bottom
- Replace Colorlib attribution with "Made with Component Dock" linking to componentdock.com

## Color palette reference

| Name | Hex | Where used |
|------|-----|------------|
| Brand Red | #EF0031 | Primary buttons, accents, ribbons |
| Green Accent | #1F8330 | Secondary buttons, speciality ribbon |
| White | #FFFFFF | Text on dark backgrounds |
| Black | #111111 | Body text, dark section backgrounds |
| Light Gray | #EEEEEE | Subtle separators |
