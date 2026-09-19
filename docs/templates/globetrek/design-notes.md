# GlobeTrek — Template Docs

**Source:** ColorLib Travelers (https://preview.colorlib.com/theme/travelers/)
**New name:** globetrek
**Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript

## Section order (top → bottom)

1. Navbar (sticky, dropdown, social icons, hamburger)
2. Hero Slider (2 slides, dark overlay, parallax)
3. Feature Cards (overlap-section, 3 cards, white bg)
4. Services Quick (3 icon rows: Air Ticketing, Cruises, Tour Packages)
5. Testimonials (bg-light, owl-carousel, image+quote cards)
6. Our Destinations (6 cards, 3-col grid, image overlays)
7. CTA Banner (full-width dark overlay, "Experience Our Outstanding Services")
8. Services Detail (6 icon items, "Our Services")
9. Blog Preview (bg-light, single card)
10. Footer (dark bg, 3-col: About, Navigations, Newsletter + Component Dock)

## Design notes

- Brand color `#ef6c57` is used for: links, buttons, accents, hover states
- All buttons and cards are square (no border-radius) — Bootstrap default
- Hero and CTA use full-width background images with dark overlays
- Feature cards overlap the hero section (negative margin / overlap style)
- Testimonials carousel shows image left + white card right
- Footer background is `#25262a` (dark charcoal)
- Font: Poppins (weights 200–900), loaded from Google Fonts

## Component breakdown

| Component       | Props / notes                                                |
|-----------------|--------------------------------------------------------------|
| Navbar          | logoText="GlobeTrek", links array, socialIcons array         |
| HeroSlider      | slides array [{image, headline, subtext, ctaText, ctaUrl}]   |
| FeatureCards    | cards array [{heading, description}]                         |
| ServiceQuick    | items array [{icon, title, description}]                     |
| Testimonials    | testimonials array [{image, quote, author}]                  |
| DestinationsGrid| destinations array [{image, name, location}]                 |
| CtaBanner       | {image, heading, subtext, ctaText, ctaUrl}                   |
| ServicesDetail  | items array [{icon, title, description}]                     |
| BlogPreview     | posts array [{image, title, excerpt, date}]                  |
| Footer          | aboutText, navLinks, newsletter config, Component Dock link  |

## Fidelity notes

- Match exact section order: hero → features → services quick → testimonials
  → destinations → CTA → services detail → blog → footer
- Feature cards must visually overlap the hero (z-index / negative margin)
- Testimonials use image+card side-by-side layout, not stacked
- CTA banner is full-viewport-width with dark overlay, not boxed
- All icons use lucide-react (no external icon fonts)
- Placeholder images: `https://picsum.photos/seed/globetrek-<n>/<w>/<h>`
