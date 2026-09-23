# Pediment — Design Notes

## Source Template

Recreation of ColorLib **Staging** (`https://colorlib.com/wp/template/staging/`).

## Design Tokens (from preview CSS)

| Token        | Value     | Usage                                           |
| ------------ | --------- | ----------------------------------------------- |
| Brand gold   | `#dfa667` | Primary buttons, links, accents, section labels |
| Body text    | `#111111` | Headings, paragraphs                            |
| Muted text   | `#707070` | Secondary text, descriptions                    |
| Dark bg      | `#1b1b1b` | Footer, testimonials, CTA                       |
| Footer muted | `#b7b7b7` | Footer text                                     |
| Section bg   | `#f8f8f8` | Projects, team sections                         |
| Border       | `#c4c4c4` | Dividers                                        |
| White        | `#ffffff` | Hero buttons, navbar text                       |

## Fonts

- **Body:** Poppins (300, 400, 500, 600, 700)
- **Display/headings:** Aldrich (400)

## Section Order

1. Navbar — fixed dark top bar, logo, nav, phone
2. Hero — full-viewport, dark overlay, gold CTA, social icons
3. About — 2-column, text + image
4. Projects — 4-column grid with hover overlays
5. Services — 4-column icons + counter stats
6. Testimonials — dark bg, quotes, avatars, logos
7. Team — 3-column with gradient overlays
8. CTA — dark bg with image, centered text
9. Blog — 3-column cards
10. Footer — dark, newsletter, 4-column, Component Dock link

## Differences from Source

- Brand icons use inline SVGs (lucide-react dropped brand glyphs)
- Placeholder images via picsum.photos with deterministic seeds
- No slider/carousel (static first slide shown)
- Footer links to Component Dock instead of ColorLib attribution
