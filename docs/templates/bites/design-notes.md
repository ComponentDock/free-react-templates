# Bites — Design Notes

## Source

ColorLib Foodbar: https://preview.colorlib.com/theme/foodbar/

## Design Tokens

- **Fonts:** Oswald (headings), Roboto (body)
- **Brand:** #f42f2c (red) — CTAs, accents
- **Dark:** #222222 (headings)
- **Body:** #777777 (secondary text)
- **Light BG:** #f9f9ff (hero left, alt sections)
- **Navy:** #04091e (footer)
- **Border:** #eeeeee

## Section Order

1. Navbar (fixed, logo + links + hamburger)
2. Hero (full viewport, split: text left + decorative circles right)
3. Top Dishes (3-column card grid)
4. Menu (2-column list with prices)
5. Gallery (masonry-style grid with hover overlay)
6. Testimonials (3 reviewer cards)
7. Reservation (form: name, email, phone, date, event, submit)
8. Footer (5 columns: links + newsletter, Component Dock link)

## Differences from Original

- Decorative shapes use CSS circles instead of PNG assets
- Brand icons (Facebook, Twitter, Dribbble, LinkedIn) use inline SVGs
- Images use picsum.photos placeholders
- Footer links to Component Dock instead of Colorlib
