# Template Tasks & Research: `crest` (ColorLib Victor)

## Source Reference

- **Source Template**: Victor (`https://colorlib.com/wp/template/victor/`)
- **Live Preview**: `https://preview.colorlib.com/theme/victor/`
- **Preview CSS**: `https://preview.colorlib.com/theme/victor/assets/css/style.css`
- **Category**: Business / Consulting Agency
- **New Name**: `crest` (`@free-react-templates/crest`, app folder `apps/crest`)

## Design Research & Notes

- **Color Palette**:
  - Primary accent orange: `#FF6D21` (buttons, links, hover states, scroll-to-top)
  - Dark navy: `#232F55` (headings, footer gradient end, dark section backgrounds)
  - Navy gray: `#454E6D` (body text, footer gradient start)
  - Light gray: `#F8FAFC` (gray-bg sections)
  - White: `#ffffff`
- **Typography**: `DM Sans` (Google Fonts, weights 300–700) for both body and headings.
- **Buttons**:
  - Primary: Orange `#FF6D21`, border-radius `5px`, white text, dark navy `#232F55` slide-in on hover.
  - White/Outline: White bg, orange text, orange slide-in on hover.
  - Hero: Larger padding version of primary.
  - Browse link: Orange text with underline bar.
- **Layout & Section Order**:
  1. Header/Navbar — Transparent over hero, sticky with gradient on scroll. Logo, 6 nav items (Home, About, Services, Portfolio, Blog+submenu, Contact), phone number, "Get Free Consultant" button.
  2. Hero — Background image, headline "Get the help you need, every step of the way", subtitle, "Get Started" CTA, hero shape image on right side.
  3. Client Highlights — 3 cards: "Happier customers", "Faster growth", "Connected workflow" with images.
  4. About/Project (Accordion) — Title "Flexible support to suit your business needs", description, left image, right accordion (4 items, FAQ-style).
  5. Services Area — Gray bg `#F8FAFC`, title "Improved Digital Experience", 2 service cards with SVG icons + "Learn More" links, right banner image.
  6. Emergency/Testimonial — Parallax background image, quote card with "Barb Dwyer, CEO of Victor" attribution.
  7. Featured Projects — Title "Handpicked by Victor", carousel of split-layout project cards (image + logo + heading + "View Project" link).
  8. Support Company — Title "Professional who works to help with your business.", description, "Get Started" CTA, right illustration.
  9. Footer — Gradient `#454e6d` → `#232f55`, 4 columns (logo+social, services, navigation, contact), copyright with Component Dock link.

## Implementation Plan for Implementer Stream

1. Scaffold `apps/crest` using template generator / copy base app structure.
2. Set up `public/CNAME` with `crest.free.componentdock.com`.
3. Configure `package.json` with name `@free-react-templates/crest`.
4. Configure `vite.config.ts` with `injectUiSource()`.
5. Set up `src/index.css` with `@theme` tokens: `--color-brand: #FF6D21`, `--color-navy: #232F55`, `--color-navy-gray: #454E6D`, `--color-gray-bg: #F8FAFC`.
6. Add Google Fonts link for DM Sans in `index.html`.
7. Implement components in section order:
   - `Navbar.tsx` — Transparent sticky header with gradient on scroll
   - `Hero.tsx` — Background image, headline, CTA, hero shape
   - `ClientHighlights.tsx` — 3-column card grid
   - `AboutAccordion.tsx` — Section title + accordion FAQ + image
   - `ServicesArea.tsx` — Gray bg, service cards, banner image
   - `Testimonial.tsx` — Parallax bg, quote card
   - `FeaturedProjects.tsx` — Carousel of project cards
   - `SupportCompany.tsx` — Title + description + CTA + image
   - `Footer.tsx` — Dark gradient, 4-column layout, Component Dock link
8. Write robust unit tests with Vitest achieving 100% test coverage.
9. Verify with `scripts/verify-app.sh crest`.
