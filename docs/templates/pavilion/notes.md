# Pavilion — Template Implementation Notes

## Source mapping

- **ColorLib original:** Marian (https://colorlib.com/wp/template/marian/)
- **Preview:** https://preview.colorlib.com/theme/marian/
- **New name:** Pavilion (`apps/pavilion`)

## Design tokens (from assets/css/style.css)

- Brand/accent: #dca73a (gold)
- Headings: #0b1c39 (dark navy)
- Body text: #778090 (gray)
- Links: #1696e7 (blue)
- Footer: dark/black
- Fonts: Lato (body, sans-serif) + Noto Serif (headings, serif)

## Section order

1. Navbar — Logo + 6 nav links + Book Online CTA
2. Hero — Background image + "Top Hotel in the City" + "Hotel & Resort"
3. BookingBar — Date inputs + dropdowns + Book Now
4. About — Split: customer images (left) + text (right)
5. Rooms — 3-col grid, 6 cards ($150/night each)
6. Dining — Two alternating image+text sections
7. Testimonials — Quote + stars + author
8. Blog — 3-col grid, 3 cards
9. Gallery — Horizontal image strip
10. Footer — 4-col: logo/social, links, reservations, location/newsletter

## Component breakdown

- Navbar.tsx
- Hero.tsx
- BookingBar.tsx
- About.tsx
- Rooms.tsx
- Dining.tsx
- Testimonials.tsx
- Blog.tsx
- Gallery.tsx
- Footer.tsx

## Decisions

- Static booking form (no date picker library)
- Placeholder images via picsum.photos seeded
- Footer links to https://www.componentdock.com/
- No ColorLib references in app code
