# Pivot — Design Notes

## Source

- ColorLib "Martin" — personal developer portfolio
- Preview: https://preview.colorlib.com/theme/martin/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/martin-free-template.jpg

## Tokens

- Font: Poppins (300–800)
- Accent: #ffdd00 (yellow) — buttons, links, active states
- Body bg: #f7f7f7 (light gray)
- Text: #1a1a1a (near-black)
- Nav overlay: rgba(0, 43, 220, 0.9) (blue)
- Footer bg: #2b2b2b (dark gray)
- Button: yellow bg, black text, 2px yellow border, hover #ffe01a

## Layout

- Hero: full-height, 3/4 image + 1/4 text overlay, carousel
- Services: 3-column grid with icons
- Work: carousel with image + description side by side
- Newsletter: dark overlay, centered text + form
- Footer: 2-column, dark background

## Replication Notes

- Original uses Bootstrap grid + Owl Carousel
- We use Tailwind grid/flex + simple React carousel state
- Images: picsum.photos seeded placeholders
- Icons: lucide-react (Search, Layers, Lightbulb)
- Brand icons: inline SVG (no lucide brand icons)
- Footer: Component Dock attribution replaces Colorlib
