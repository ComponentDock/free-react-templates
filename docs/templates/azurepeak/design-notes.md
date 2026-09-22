# AzurePeak — Design Notes

## Replication Source

- ColorLib "The Grand Azure" — https://colorlib.com/wp/template/the-grand-azure/
- Live preview analyzed: https://preview.colorlib.com/theme/grandazure/

## Design Tokens

- Primary: blue-800 (#1e40af), blue-900 (#1e3a8a), blue-400 (#60a5fa)
- Accent: amber-500 (#f59e0b), amber-400 (#fbbf24)
- Heading font: Playfair Display (Google Fonts)
- Body font: Plus Jakarta Sans (Google Fonts)
- Dark mode: class-based (.dark on html), persisted in localStorage

## Section Order

1. Navbar (sticky, backdrop-blur, logo, nav links, CTA, dark toggle, mobile hamburger)
2. Hero (full-viewport, ocean bg, gradient overlay, booking form with glass-morphism)
3. Stats Bar (4 metrics: 5+ Years, 10000+ Guests, 150+ Rooms, 25+ Awards)
4. Rooms & Suites (3 cards: Deluxe Ocean Room, Premium Suite, Presidential Villa)
5. Amenities (6 items: Infinity Pool, Full-Service Spa, Fine Dining, Fitness Center, Private Beach, Concierge)
6. Dining (3 venues: The Azure, Coral Bar, Sunrise Cafe)
7. Gallery (image grid with picsum.photos seeds)
8. Testimonials (3 cards with star ratings)
9. FAQ (accordion, one-open-at-a-time)
10. CTA (gradient bg, email input + Subscribe)
11. Footer (dark bg, 4 columns, social icons, Component Dock link)

## Differences from Original

- Placeholder images via picsum.photos (no asset copying)
- Brand icons as inline SVGs (lucide-react dropped brand icons)
- Footer links to Component Dock instead of external attribution
- No ColorLib references in app code (provenance only in spec/TEMPLATES.md/PR)
