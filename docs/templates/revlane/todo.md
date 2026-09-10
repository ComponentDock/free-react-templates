# Revlane — Prep Notes

**Source:** ColorLib "Carrentals" — https://colorlib.com/wp/template/carrentals/
**Preview:** https://preview.colorlib.com/theme/carrentals/
**New name:** Revlane
**Category:** Car Rental Service Landing Page

## Task Outline

1. **Copy a starter app** (simplest existing app) into `apps/revlane/`
2. **Rename package** to `@free-react-templates/revlane`
3. **Create `public/CNAME`** with `revlane.free.componentdock.com`
4. **Set `homepage`** in package.json
5. **Add Google Fonts link** for Roboto (400, 700, 900) in `index.html`
6. **Define theme tokens** in `index.css` (`@theme` block):
   - `--color-primary: #0779e4`
   - `--color-bg: #ffffff`
   - `--color-bg-light: #f8f9fa`
   - `--font-family-roboto: "Roboto", sans-serif`
7. **Implement components** (section by section):
   - `Navbar.tsx` — sticky, logo + 6 nav links, mobile hamburger
   - `Hero.tsx` — full-vh bg image, heading, trip search form
   - `HowItWorks.tsx` — 3 step cards with circular numbers
   - `PromoSplit.tsx` — image left, text + CTA right
   - `CarListings.tsx` — 6 car cards in 3-col grid, bg-light section
   - `Features.tsx` — 6 feature cards with circular icons
   - `Testimonials.tsx` — 3 testimonial cards, bg-light section
   - `CtaBanner.tsx` — blue bg, white heading + button
   - `Footer.tsx` — 5-column footer with social icons
8. **Wire up App.tsx** composing all sections in order
9. **TDD:** write tests per component (Vitest + Testing Library), 100% coverage
10. **Verify:** `scripts/verify-app.sh revlane` passes

## Design Fidelity Notes

### Section order (match 1:1)
1. Navbar
2. Hero (full-vh, bg image)
3. How It Works (3 steps)
4. Promo Split (image + text)
5. Car Listings (6 cards, bg-light)
6. Features (6 cards with icons)
7. Testimonials (3 cards, bg-light)
8. CTA Banner (blue, full-width)
9. Footer (5 columns)

### Key fidelity points
- Hero must be 100vh with background-image cover
- Trip search form: dropdown + 2 date inputs + full-width button
- Step numbers are circular (border-radius 50%), blue text-primary
- Car listing cards: horizontal layout (image left, content right)
- Listing cards have border-radius 7px, border-bottom divider for specs
- Feature icons are circular with 50% radius
- Testimonials use blockquote pattern
- CTA banner: bg-primary (blue) with white text + white button variant
- Footer: 4 link columns + About Us with social icons
- Font: Roboto only, weights 400/700/900
- Primary color: #0779e4 consistently for buttons, links, accents

### Placeholder assets
- Hero bg: `https://picsum.photos/seed/revlane-hero/1920/1080`
- Car images: `https://picsum.photos/seed/revlane-car-1/600/400` through `-6`
- Feature image: `https://picsum.photos/seed/revlane-feature/800/600`
- Testimonial avatars: `https://picsum.photos/seed/revlane-person-1/100/100`
  through `-3`
