# Smokehouse — Implementation Todo & Design Notes

Source: ColorLib Steak — https://preview.colorlib.com/theme/steak/

## Section order (top to bottom)

1. Header (sticky navbar)
2. Hero (parallax full-screen)
3. About (image + text split)
4. Services (3x2 icon grid, bg-light)
5. Menu (tabbed: Breakfast/Lunch/Dinner)
6. Counters (bg-light, 3 stats)
7. News & Events (asymmetric card grid)
8. Testimonials (carousel, bg-light)
9. Reservation (hours panel + form)
10. Map (placeholder embed area)
11. Footer (4-column, dark)

## Component outline

| Component       | Notes                                                              |
| --------------- | ------------------------------------------------------------------ |
| Header          | Sticky, white/black bg toggle on scroll, hamburger for mobile      |
| Hero            | Parallax bg image, overlay #313137@0.4, play button (circle border)|
| AboutSection    | Full-width container, 5/7 split, image parallax, overlay text      |
| ServicesSection | bg-light, 6 items in 3-col, icons via lucide-react                |
| MenuSection     | 3 tabs, 6 items per tab, 2-col, circular images, price display    |
| CounterSection  | bg-light, 3 counters, animated count-up on scroll                 |
| NewsSection     | 4 cards asymmetric grid (4+8 / 8+4), hover overlay effect         |
| TestimonialSection | bg-light, carousel, quote marks, circular avatars              |
| ReservationSection | Hours panel (black bg) + form, 6 fields, bottom submit btn     |
| MapSection      | Placeholder div for map embed area                                 |
| Footer          | Dark, 4-col: about + quick links + support + about + social icons |

## Design notes

- **Font**: Playfair Display (serif) — elegant, suits fine-dining aesthetic
- **Color palette**: Golden orange (#fba83b) on white, black accents. Warm, inviting
- **Buttons**: Sharp corners (radius 0), uppercase, letter-spacing .1em, thin. Outlined variants (white/black)
- **Hero**: Full-viewport parallax with dark overlay. Play button is circular with border (not filled)
- **Menu tabs**: Pill-shaped uppercase text, 2px border, no radius. Active = black border
- **Menu items**: Thumbnail images are 100px circles. Price in primary color
- **Testimonials**: Large decorative quotation mark, centered text, circular author photos
- **Reservation**: Split layout — black hours panel left, white form right
- **Footer**: Dark bg, uppercase widget headings in gray (#ccc), social icon links
- **Fidelity**: Match section order, spacing rhythm, and dark/light alternation exactly
