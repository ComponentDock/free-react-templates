# Reflexly — Design Notes

Recreation of ColorLib Phozogy (https://colorlib.com/wp/template/phozogy/)

## Design Tokens

| Token            | Value           | Usage                  |
| ---------------- | --------------- | ---------------------- |
| Brand            | #009603         | Buttons, accents, CTAs |
| Brand hover      | #007a02         | Button hover state     |
| Heading font     | Quantico        | h1–h6, buttons, nav    |
| Body font        | Open Sans       | Paragraphs, body text  |
| Text primary     | #111111         | Headings               |
| Text secondary   | #666666         | Body paragraphs        |
| Text muted       | #999999         | Subtle text            |
| Background light | #f5f5f5         | Services carousel bg   |
| Background dark  | #111111         | Header, footer         |
| Overlay          | rgba(0,0,0,0.5) | Portfolio hover        |

## Sections

1. Header — Logo "Reflexly" + nav + search icon
2. Hero — Full-width with background image, "Photography Studio" heading, CTA
3. Services — 3-column: Shooting, Videos, Editing
4. Categories — Carousel of photo categories
5. Portfolio — Filterable masonry grid with hover overlay
6. Footer — 4-column: about, Instagram, links, subscribe + Component Dock copyright

## Differences from Source

- No carousel/slider JS (static hero, CSS-only categories scroll)
- Brand icons use inline SVGs (lucide-react removed brand icons)
- Images use picsum.photos seeded placeholders
- Footer links to Component Dock instead of ColorLib
