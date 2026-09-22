# Portlight — Design Notes

Recreation of ColorLib "Harbor Lights" hotel reservation template.

## Source

- **ColorLib slug:** harbor-lights
- **Preview URL:** https://preview.colorlib.com/theme/harborlights/
- **Note:** Preview was fetched via curl (browser unavailable). Screenshot analyzed for visual reference.

## Design Tokens (extracted from preview CSS)

| Token                 | Value       | Usage                                    |
| --------------------- | ----------- | ---------------------------------------- |
| Brand primary (green) | `#21cc7a`   | CTA buttons, accents, check availability |
| Brand blue            | `#2f89fc`   | Links, some headings                     |
| Text dark             | `#000000`   | Headings, strong text                    |
| Text muted            | `#6c757d`   | Body text, descriptions                  |
| Background light      | `#f8f9fa`   | Alternating section backgrounds          |
| Background white      | `#ffffff`   | Main section backgrounds                 |
| Dark background       | `#000000`   | Navbar, footer                           |
| Font family           | Nunito Sans | Google Fonts, sans-serif                 |

## Sections (in order)

1. Navbar — dark, transparent on hero, solid on scroll
2. Hero — full-width slider, tropical resort images, dark overlay
3. BookingBar — form: dates, room type, guests, green CTA button
4. About — split layout: image left, text right
5. Services — 5 cards in a row with icons
6. Testimonials — carousel with customer quotes
7. Rooms — 4 room cards with images and prices
8. Restaurant — menu items with food images and prices
9. Blog — 3-column grid of recent posts
10. Footer — dark with background image, 4 columns

## What differs from original

- Name changed from "Harbor Lights" to "Portlight"
- Images replaced with picsum.photos seeded placeholders
- Font changed to Nunito Sans (was Nunito Sans in original — kept same)
- Footer links to Component Dock instead of ColorLib
- No ColorLib references in source code
