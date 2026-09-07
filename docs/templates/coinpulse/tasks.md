# CoinPulse — Implementation Tasks

Source: Colorlib Bitcoin (cryptocurrency landing page)
New name: `coinpulse`
Preview: https://preview.colorlib.com/theme/bitcoin/ (reachable)

## Structure order (matching original)

1. **Navbar** — Fixed top nav with logo, menu items (Home, Convert, Feature, Price, Blog)
2. **Hero/Banner** — Full-screen hero with dark overlay, price display, CTA
3. **ConvertSection** — Currency converter with gradient background and inputs
4. **SimpleServices** — 3-column service cards with icons
5. **AboutSection** — Split layout: image carousel left, text right, dark bg
6. **FeatureGrid** — 6-item feature grid with Linearicons icons
7. **StatSection** — Chart image + stats text, light bg
8. **CallToAction** — Gradient banner with CTA button
9. **PricingSection** — 3 pricing cards (Ripple, Ethereum, Bitcoin)
10. **BlogSection** — 3 blog post cards with author info
11. **Footer** — Dark footer with widgets and social links

## Design notes

- Dark theme hero: overlay `rgba(4,9,30,0.85)` on background image
- Font: Poppins (Google Fonts, weights 300-700)
- Accent: orange `#f78f3d` for CTAs, links, hover states
- Primary button: gradient `#f3c400` → `#f88845`, border-radius 25px (pill)
- Banner button: border-radius 3px (square-ish)
- About section: dark `#222` background
- Stats section: light `#f9f9ff` background
- Footer: very dark `#04091e`
- Convert section: orange gradient background
- Icons: Linearicons (lnr-user, lnr-license, lnr-phone, lnr-rocket, lnr-diamond, lnr-bubble)
- Smooth transitions: 0.3s ease on all interactive elements
- Section spacing: 120px vertical padding

## Fidelity notes (from live preview)

- Preview URL is reachable — CSS and HTML fully analyzed
- Banner is full-screen with centered text and large price display ($12,356)
- Converter section overlaps the banner (negative margin -105px, z-index 2)
- About section uses Owl Carousel for image slider
- Pricing cards have border, hover effect (gradient background on bottom)
- Blog cards show thumbnail, title, excerpt, author avatar + name + date
- Footer has 4 widget columns with newsletter form, nav links, social icons

## Tasks

- [ ] Copy simplest existing app as scaffold
- [ ] Rename package to `@free-react-templates/coinpulse`
- [ ] Set up `public/CNAME` and `homepage` in package.json
- [ ] Implement Navbar with logo and menu items
- [ ] Implement Hero/Banner with dark overlay and price display
- [ ] Implement ConvertSection with gradient background and inputs
- [ ] Implement SimpleServices (3-column cards)
- [ ] Implement AboutSection with split layout
- [ ] Implement FeatureGrid (6 items with icons)
- [ ] Implement StatSection with chart placeholder
- [ ] Implement CallToAction banner
- [ ] Implement PricingSection (3 cards)
- [ ] Implement BlogSection (3 posts)
- [ ] Implement Footer with widgets and social links
- [ ] Add smooth scroll navigation
- [ ] Add responsive layout (hamburger menu, stacking)
- [ ] Write tests for all components (100% coverage)
- [ ] Verify with `scripts/verify-app.sh coinpulse`
