# Hearthside — ColorLib Eatery Replication

## Source

- **ColorLib**: Eatery (https://colorlib.com/wp/template/eatery/)
- **Preview**: https://preview.colorlib.com/theme/eatery/
- **Category**: Restaurant / Food / Dining

## Design Tokens Summary

- Brand red: #cf1d16 (CTAs, price badges, active states, decorative bars)
- Hover red: #e9362f (button hover)
- Font: Open Sans (300, 400, 700, 800)
- Body text: #868e96
- Headings: #000
- Button style: 0px radius, uppercase, 0.2em letter-spacing, 2px border
- Footer: dark background (#111)
- Decorative back-text: 200px watermark behind section headings

## Section Order (fidelity to original)

1. Navbar (transparent overlay, dark bg on mobile, red CTA)
2. Hero Slider (full-viewport, background images, centered text, outline button)
3. Features (4-column icon grid, light bg: Drinks, Sea Foods, Cup Coffees, Fresh Salad)
4. Special Dishes (carousel, dark overlay, circular price badge, decorative heading with red bar)
5. Our Menu (2-column, alternating text/image rows, prices, light bg)
6. Testimonials (3-column, blockquotes, circular avatar, author info)
7. Newsletter (email input + subscribe button, light bg)
8. Footer (dark, About Us + social icons, Opening Hours, Contact Info, Quick Links)

## Implementation Notes

- Use a CSS-only or simple state-based slider for the hero (no heavy carousel library needed)
- The "Special Dishes" section can use a horizontal scrollable container or a lightweight carousel
- "Our Menu" section uses alternating flex rows (text/image swap via flex order)
- Decorative back-text (watermark heading) uses absolute positioning + large font
- The 2px red decorative bar above headings uses a `:before` pseudo-element
- Price badges use circular red background with white text
- Social icons in footer use Lucide equivalents
- All placeholder images via picsum.photos with deterministic seeds

## Component Outline

```
src/
  App.tsx
  components/
    Navbar.tsx         — fixed/absolute navbar with dropdown + CTA
    HeroSlider.tsx     — full-viewport background-image slides
    Features.tsx       — 4-column icon feature grid
    SpecialDishes.tsx  — carousel with overlaid text/price
    OurMenu.tsx        — 2-column alternating menu items
    Testimonials.tsx   — 3-column blockquote cards
    Newsletter.tsx     — email subscription form
    Footer.tsx         — dark footer with columns
```
