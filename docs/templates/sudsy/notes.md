# Sudsy — Car Wash & Detailing Template

## Source
- **ColorLib slug:** carwash
- **Preview:** https://preview.colorlib.com/theme/carwash/
- **Source page:** https://colorlib.com/wp/template/carwash/

## Design notes

### Section order (match 1:1)
1. **Navbar** — sticky header, logo left, nav center-right, phone CTA right
2. **Hero slider** — full-width image carousel with dark overlay, headline "Car Wash & Detailing", subtext, 2 CTA buttons
3. **Services** — "We have the latest equipment" heading, 4-column grid of icon + title + description cards
4. **Pricing** — 3 cards (Car wash $50, Detailing $100, Wash & Detailing $200), each with feature list + CTA
5. **Testimonials** — carousel of customer quotes with avatars
6. **Categories** — colored buttons (green, purple, pink, orange) linking to service categories
7. **Video CTA** — dark section, "Why take our services?", feature bullets, popup video button
8. **Footer** — dark bg, logo, about text, opening hours, nav links, social icons, Component Dock link

### Key design tokens
- Fonts: Work Sans (body/headings), Poppins (secondary)
- Primary gradient: #0BC6FF → #0d80f3 → #0BC6FF (buttons)
- Outline accent: #007AFF
- Button shape: fully rounded (border-radius: 30px)
- Section backgrounds: #f7f7f7 (pricing), #fbf9ff (testimonials), #010A44 / #101A31 (footer/video)
- Category button colors: #73fbaf (green), #a367e7 (purple), #e66686 (pink), #f09359 (orange)

### Fidelity notes
- Hero slider can be simplified to a single hero or a lightweight carousel (no need for owl.carousel)
- Pricing cards: clean 3-column layout, each with icon, title, price, feature list, CTA
- Testimonials: horizontal scroll or simple carousel
- Category buttons: horizontal row of colored pill buttons
- Video section: dark bg, list of benefits, a play-button popup
- Mobile: hamburger nav, stacked sections
- No assets from ColorLib — use picsum.photos placeholders, lucide-react icons, Google Fonts
