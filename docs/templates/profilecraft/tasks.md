# ProfileCraft — Implementation Tasks

Source: Colorlib Breed2 (personal portfolio/profile)
New name: `profilecraft`
Preview: https://preview.colorlib.com/theme/breed2/ (reachable)

## Structure order (matching original)

1. **Navbar** — Fixed top nav with logo, menu items (Home, About, Portfolio, Pages, Blog, Contact)
2. **HeroBanner** — Full banner with greeting, name, subtitle, social icons, CTA
3. **Statistics** — 3 counter items with gradient text (15k+, 12k+, 9/10)
4. **AboutSection** — Split layout: image left, text + "Download CV" right
5. **ServicesSection** — 3 service cards with icons, hover purple background
6. **TestimonialSlider** — Client testimonials with photos, quotes, star ratings
7. **PortfolioGrid** — Filter tabs + image grid with hover overlay
8. **BlogSection** — Blog post cards with date badges
9. **Footer** — Dark footer with social icons in circular buttons

## Design notes

- Font: Roboto (Google Fonts, weights 300-700)
- Primary gradient: blue `#1345e6` → pink `#ed239f` (for CTAs, underlines, accents)
- Heading color: dark teal `#05364d`
- Body text: gray `#797979`
- Stats background: very light blue `#f8faff`
- Service cards: light blue default, purple `#5f30ff` on hover
- Footer: very dark `#021017`
- Buttons: 5px border-radius, uppercase, gradient background
- Section title accent: blurred pink line
- Star ratings: yellow `#ffd804` active, gray `#aeb9be` inactive
- Portfolio overlay: blue `rgba(19,69,230,0.9)`
- Blog date badge: blue `#1345e6` background
- Transitions: 0.4s ease on all interactive elements
- Section padding: 140px vertical

## Fidelity notes (from live preview)

- Preview URL is reachable — CSS and HTML fully analyzed
- Hero has transparent navbar that becomes white on scroll
- Stats section overlaps the hero (negative margin -121px)
- About image is positioned with right offset on large screens
- Service cards have centered layout with icon image, title, description
- Testimonials use Owl Carousel with dot navigation
- Portfolio has filter tabs (All, Branding, Photography, etc.)
- Portfolio items show overlay with title on hover
- Blog cards have date badge overlapping the image
- Footer has centered social icons in circular buttons

## Tasks

- [ ] Copy simplest existing app as scaffold
- [ ] Rename package to `@free-react-templates/profilecraft`
- [ ] Set up `public/CNAME` and `homepage` in package.json
- [ ] Implement Navbar with logo and menu items
- [ ] Implement HeroBanner with greeting, name, social icons, CTA
- [ ] Implement Statistics section with gradient-text counters
- [ ] Implement AboutSection with image and "Download CV" button
- [ ] Implement ServicesSection (3 cards with hover effects)
- [ ] Implement TestimonialSlider with star ratings
- [ ] Implement PortfolioGrid with filter tabs and hover overlay
- [ ] Implement BlogSection with date badges
- [ ] Implement Footer with circular social icons
- [ ] Add smooth scroll navigation
- [ ] Add responsive layout (hamburger menu, stacking)
- [ ] Write tests for all components (100% coverage)
- [ ] Verify with `scripts/verify-app.sh profilecraft`
