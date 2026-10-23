# BizPlanner — Prep Notes

## Source

- **ColorLib template:** BizPro (`bizpro`)
- **Preview:** https://preview.colorlib.com/theme/bizpro/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bizpro-free-classic-website-template.jpg

## Section order (14 sections)

1. Navbar — horizontal one-page scroll nav (10 links)
2. Hero banner — full-width slider (3 slides) with headline + subtitle + CTA
3. About Us — 4 feature cards (icon circle + title + desc + "More Details")
4. Services — 6 items in 3×2 grid (icon heading + description)
5. Projects/Portfolio — filterable gallery with category tabs + hover overlay
6. Parallax banner — full-width image + dark overlay + heading + CTA
7. Team — 4 members on dark bg (photo + overlay + name + role + social)
8. Skills — split: image left + 5 animated progress bars right
9. Clients — testimonial carousel on dark bg
10. Pricing — 3 plan cards (Basic/Advanced/Premium)
11. Blog — 3 post cards (image + title + meta + excerpt)
12. Partners — logo carousel
13. Contact — 2-col: info + map, then contact form
14. Footer — logo + social icons + copyright + Component Dock link

## Design tokens

- Brand: #d73e4d (red)
- Headings: #292929, uppercase, bold 700
- Body: #6f6f6f, 14px, line-height 26px
- Font: Raleway (400/500/700) via Google Fonts
- Buttons: 1px border #d73e4d, square (radius 0), uppercase
- Dark sections: #232a34 (team, footer)
- Parallax overlay: rgba(0,0,0,0.8)
- Icon circles: border-radius 50%, hover fills brand color

## Component breakdown (suggested)

| Component       | Sections covered |
| --------------- | ---------------- |
| Navbar          | 1                |
| HeroBanner      | 2                |
| AboutSection    | 3                |
| ServicesSection | 4                |
| ProjectsGallery | 5                |
| ParallaxBanner  | 6                |
| TeamSection     | 7                |
| SkillsSection   | 8                |
| ClientsSection  | 9                |
| PricingSection  | 10               |
| BlogSection     | 11               |
| PartnersSection | 12               |
| ContactSection  | 13               |
| Footer          | 14               |

## Fidelity notes

- Hero: original uses Revolution Slider; implement as static hero with bg image + centered text + CTA button. No slider JS needed.
- Projects gallery: original uses mixitup.js filter; implement with React state toggle for category filtering.
- Skills: original uses custom JS animation; implement with CSS transitions + IntersectionObserver or framer-motion.
- Clients: original uses Owl Carousel; implement with CSS-only carousel or simple React carousel.
- Partners: same as clients — logo carousel.
- Contact form: original submits to PHP; implement as static form with client-side validation (zod).
- Map: original uses Google Maps; use a static placeholder or OpenStreetMap embed.
- Social icons: replace Font Awesome with lucide-react equivalents.
- Footer copyright: replace "made with Colorlib" with "Made with Component Dock" linking to https://www.componentdock.com/
