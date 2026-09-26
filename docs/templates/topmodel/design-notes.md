# TopModel — Implementation Notes

Source: ColorLib Mona (https://preview.colorlib.com/theme/mona/)

## Section Order (top to bottom)

1. Header (transparent navbar, logo + nav links + search)
2. Hero Carousel (model name, subtitle, CTA, social links, portrait, arrows)
3. About Us (20+ years heading, 4 feature icons, portrait images)
4. Models/Portfolio (tabbed carousel: All Models / Model / Actors / Singers)
5. Client Testimonials (quote carousel, star ratings, avatar)
6. CTA ("Do You Want To Be A Model?" + Contact Us button)
7. Blog / Latest News (card grid)
8. Footer (4 columns: About, Links, Contact, Newsletter; social; copyright)

## Design Fidelity Notes

- Hero: huge heading (100px desktop), model name in black, subtitle in gray, pill-shaped CTA with white border, social links as text labels
- Navbar: transparent overlay on hero, transitions to white bg on scroll (use IntersectionObserver or scroll listener)
- Model cards: circular thumbnail (50% border-radius), name below, role in smaller text
- Buttons: pill shape (40px radius), 50px height, 180px min-width, 2px border. Default = white bg + white border. Variant btn-2 = white bg + pink border + pink text → hover = pink bg + white text
- Colors: hot pink #ed489d as primary brand, #f6a4ce light pink accent, #232323 dark text, #f0f0f0 light gray bg
- Font: "HK Grotesk" from Google Fonts
- Sections: 80px vertical padding (section-padding-80)
- Testimonials: star ratings (FontAwesome), dot navigation, circular client avatars
- Footer: dark background (#232323), 4-column grid, newsletter input with black bg

## Component Outline

- `Navbar.tsx` — transparent-on-hero, white-on-scroll, logo, nav links, search toggle
- `HeroCarousel.tsx` — auto-advancing carousel, model name + subtitle + CTA + social + portrait
- `AboutUs.tsx` — heading + 4 feature items grid
- `ModelPortfolio.tsx` — tabbed section with carousel per tab
- `ModelCard.tsx` — circular thumbnail + name + role
- `Testimonials.tsx` — quote carousel with ratings + avatars
- `CtaSection.tsx` — heading + description + pink CTA button
- `BlogSection.tsx` — "Latest News" heading + card grid
- `Footer.tsx` — 4-column layout + Component Dock link

## Placeholder Images

Use `https://picsum.photos/seed/topmodel-hero/<w>/<h>` for hero portraits, `https://picsum.photos/seed/topmodel-model-<n>/200/200` for circular model thumbnails, etc.
