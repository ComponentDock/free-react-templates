# Astra — Design Notes

Recreation of ColorLib Stellar (branding agency landing page).

## Source Analysis

Preview: https://preview.colorlib.com/theme/stellar/
CSS: main.css — extracted tokens above.

## Layout

- Full-viewport parallax hero with dark overlay
- Numbered subheads (01-05) across sections
- Dark sections (#151515) for Services, Clients, Contact
- Light section (#F1F1F1) for Works/Portfolio
- 2×2 process grid in About
- 3×2 service card grid
- 4×2 portfolio grid with hover overlays
- 4-column stats counter row
- 3-column contact info layout

## Fonts

- Merriweather (serif) — headings, hero text
- Montserrat (sans-serif) — body, navigation, UI elements

## Colors

- Brand orange: #F26522 (CTAs, buttons)
- Dark bg: #151515 (services, clients, contact, stats)
- Teal accent: #035D5C (process section headers)
- Light gray: #F1F1F1 (portfolio bg)
- White text on dark backgrounds

## Placeholder Strategy

- Portfolio images: picsum.photos seeded per item
- Client logos: lucide-react icons in gray
- Testimonial avatars: picsum.photos seeded portraits
- Hero background: picsum.photos large landscape

## Sections

1. Navbar (sticky, hamburger mobile)
2. Hero (parallax, CTA, social sidebar)
3. About (numbered 01, process grid)
4. Services (dark bg, numbered 02, 6 cards)
5. Works (numbered 03, 8 portfolio items, testimonials)
6. Clients (dark bg, numbered 04, 8 logos)
7. Stats (4 counters)
8. Contact (dark bg, numbered 05, form + info)
9. Footer (Component Dock link, back-to-top)
