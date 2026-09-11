# Rivet — Design Notes

## Replication Source

- ColorLib Construct: https://preview.colorlib.com/theme/construct/
- Font: Open Sans via CloudFlare/Google Fonts
- Bootstrap-based grid layout in original

## Token Extraction

- Primary/accent: steel blue (buttons, CTAs, links)
- Body text: dark gray #26282b
- Headings: uppercase, bold, border-bottom underline
- Section backgrounds: white (default), light gray (#f8f9fa) for news
- Footer: dark charcoal #2d2d2d
- Buttons: solid primary (filled), outline primary (border only), outline white (for dark bg)
- Card style: image + overlay on hover (works section)

## Section Layout Details

- Hero: full-width background image, centered text, max-width container
- CTA overlap: positioned to overlap hero bottom, white bg, flex row
- Services: 3-col grid, centered icon above text, outline buttons
- Works: 3-col no-gap grid, image with overlay on hover (title + plus icon)
- News: horizontal scroll/carousel of cards
- Testimonials: 2-col, centered avatar, blockquote
- Footer: 4-col grid, dark bg, copyright bar at bottom

## Differences from Original

- No carousel/slider JS (static hero, single slide shown)
- No Bootstrap (Tailwind CSS 4)
- No jQuery/animations (CSS transitions only)
- Placeholder images via picsum.photos
- Footer branded Component Dock instead of ColorLib
