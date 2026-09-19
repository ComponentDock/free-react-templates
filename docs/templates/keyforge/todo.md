# KeyForge — Implementation Notes

## Source
- ColorLib slug: `locksmith`
- Preview: https://preview.colorlib.com/theme/locksmith/
- New name: `keyforge`

## Section order (fidelity)

1. Navbar — logo left, 7 nav links + phone number right, offcanvas mobile
2. Hero — 3-slide carousel, dark image overlay, subtitle + h2 + gold CTA
3. FilterSearch — "Get a quote" card (name, phone, services dropdown, submit)
4. Services — "Our services" / "Services We Offer", 6 cards (2×3 grid)
5. ChooseUs — "Why choose us", text + CTA left, image grid right
6. Counter — dark bg, 5 stat items in a row
7. Product — "Our products" / "Our Products", 5 image cards, "View all" button
8. Testimonial — split: dark image left + testimonial carousel right (dark bg)
9. Latest — "Latest news" / "Latest News", 2-3 blog cards, "View all" button
10. CallToAction — light gray bg, heading + phone left, image right
11. Footer — dark bg, about + 3 widget columns, copyright with Component Dock

## Design tokens (from CSS)

| Token | Value |
|-------|-------|
| accent | #ffc446 (gold) |
| dark navy | #052336 |
| dark section | #1b2839 |
| light gray | #e7ebf0 |
| heading color | #0e1f24 |
| body text | #444444 |
| headings | #111111 |
| divider | #e1e1e1 |
| body font | Open Sans |
| heading font | Rajdhani |
| button radius | 60px (pill) |

## Component mapping

- `Navbar.tsx` — header with logo, nav links, phone, offcanvas toggle
- `Hero.tsx` — carousel (use a simple CSS carousel or owl-carousel equivalent)
- `FilterSearch.tsx` — quote form card
- `Services.tsx` — 6 service cards grid
- `ChooseUs.tsx` — split layout, text + images
- `Counter.tsx` — 5 stat counters on dark bg
- `Product.tsx` — 5 product cards
- `Testimonial.tsx` — split testimonial with carousel
- `Latest.tsx` — blog post cards
- `CallToAction.tsx` — split CTA section
- `Footer.tsx` — dark footer with widgets

## Fidelity notes

- Match section order exactly as listed above
- Use placeholder images from picsum.photos with seed `keyforge-N`
- Icons from lucide-react (replace flaticon originals)
- Google Fonts: Open Sans + Rajdhani via index.html link
- All buttons pill-shaped (rounded-full or border-radius: 60px)
- FilterSearch overlaps hero bottom (negative margin or relative positioning)
- Counter section has tall top padding (original: 390px) — scale proportionally
- Testimonial left side has dark image background with white text + gold phone
- Footer must link Component Dock (https://www.componentdock.com/)
- No ColorLib references in app code
