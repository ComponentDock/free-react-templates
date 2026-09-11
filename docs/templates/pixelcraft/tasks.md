# PixelCraft — Implementation Tasks

Source: ColorLib Datarc (https://colorlib.com/wp/template/datarc/)
Preview: https://preview.colorlib.com/theme/datarc/
New name: pixelcraft

## Component breakdown (section order)

1. **Navbar** — Sticky header with logo, nav links, search icon, social icons. White bg on scroll.
2. **HeroBanner** — Full-screen background image, gradient overlay (purple #4a4fad → #5b61cf), heading + subheading + CTA button.
3. **AboutSection** — Light gray bg (#f9f9ff), section title, 3 service image cards with figcaption text and Explore link.
4. **ServicesSection** — Dark bg (#222222), section title, 4 feature cards with linearicons icons.
5. **PortfolioSection** — Filter tabs (All + 6 categories), 8-item gallery grid with hover overlay.
6. **TeamSection** — Section title, 4 team member cards (image, name, role, social icons).
7. **StudioSection** — Dark overlay bg, heading + text + CTA button, stats counters.
8. **ClientsSection** — Logo grid/carousel of client logos.
9. **BlogSection** — Section title, 4 blog post cards (image, title, date, excerpt).
10. **ContactSection** — Light gray bg, contact form + address info.
11. **CtaBanner** — Gradient banner with heading + CTA button.
12. **Footer** — Dark bg, 4 columns (About, Nav, Newsletter, Instafeed), copyright.

## Design notes

- Brand palette: purple #4a4fad primary, green #00ff8c accent, dark #222222
- Font: Poppins (Google Fonts, weights 300/500/600)
- Buttons: pill shape (border-radius 20px), green hover with purple box-shadow
- Section alternation: light gray (#f9f9ff) and dark (#222222) backgrounds
- Hero overlay: linear-gradient left from rgba(60,64,143,0.95) to rgba(91,97,207,0.95)
- Portfolio uses a filter/mixitup pattern (implement with React state)
- Icons: use lucide-react equivalents for linearicons (lnr-star → Star, etc.)
- Images: picsum.photos/seed/pixelcraft-<n>/<w>/<h>
- All text is uppercase in headings (use Tailwind uppercase)
