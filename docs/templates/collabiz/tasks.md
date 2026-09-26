# Collabiz — Design Notes & Task Outline

Source: ColorLib "Busicol" — https://colorlib.com/wp/template/busicol/
Preview: https://preview.colorlib.com/theme/busicol/
New name: collabiz

## Section Order (top → bottom)

1. Header (top bar + sticky nav)
2. Hero / Slider (full-width carousel)
3. Service Area (3 cards with hover)
4. About (split image + text)
5. Counter (3 stats)
6. Gallery (masonry grid, 5 items)
7. About Wrap (features on green bg)
8. Financial Solution (carousel + image)
9. Testimonial (carousel with avatar dots)
10. Project CTA (centered heading + button)
11. Footer (4 columns + copyright)

## Design Notes

### Header
- Top bar: social icons left (LinkedIn, Facebook, Google+), contact info right (email, phone). Hidden on mobile/tablet (d-none d-lg-block).
- Main nav: logo left, horizontal menu right. Sticky with white background on scroll. Blog + Pages have dropdown submenus.
- Mobile: hamburger menu (slicknav).

### Hero / Slider
- Owl-carousel with 3 slides (same content pattern). Each slide has a background image (cover, 900px height desktop, 100vh mobile).
- Heading: "Grow Big with Musicol Business" — 50px, capitalize, letter-spacing 2px, white.
- Two CTAs: green `.boxed-btn3` "Our Services" + white `.boxed-btn3-white` "See How it Work" with play icon.

### Service Area
- Section title centered: "Explore Our Solutions" (36px, weight 400, color #2C2C2C).
- 3 equal columns. Each card: background image (cover), SVG icon, h3 title.
- Hover: dark overlay fades in with inner content (h4 + paragraph). Transition effect.

### About
- Full-width split: image left (col-6), text right (col-6). No gap (no-gutters).
- Heading: "The Largest Business Expert".
- Body text + 3 bullet list items.
- Green `.boxed-btn3` "About Us" button.

### Counter
- Light background (#F5FBFF).
- 3 counters centered: Total Projects (520+), On Going Projects (244), Job Success (95%).
- Animated with jQuery counterUp + waypoints.

### Gallery / Portfolio
- Section title + subtitle centered.
- 5 items in Isotope masonry grid. Mix of 4-col and 8-col items.
- Each: image + hover overlay (title + category tag, dark bg).
- Green outline "More Works" button below.

### About Wrap
- Green background (#28AE60).
- 3 centered cards: icon (SVG) + h3 title + short paragraph. All white text on green.

### Financial Solution
- Split: left carousel (owl-carousel) with heading + paragraph, right image.
- 3 slides with same content pattern.

### Testimonial
- Owl-carousel with 3 slides. Each: quote paragraph + author name + role.
- Avatar-based dot navigation (images as dots).

### Project CTA
- Centered: heading "Do you Have any Project?" + paragraph + white outline "Contact Us" button.

### Footer
- Dark bg (#2C2C2C). 4 columns:
  - Logo + description + social icons (Facebook, Twitter, Instagram)
  - Services links (5 items)
  - Useful Links (4 items)
  - Address (street, phone, email)
- Copyright bar at bottom.

## Component Plan

| Component         | Sections covered              | Notes                                  |
| ----------------- | ----------------------------- | -------------------------------------- |
| Header            | 1                             | TopBar + NavBar sub-components         |
| HeroSlider        | 2                             | Carousel with slide content            |
| ServiceCards      | 3                             | 3-card grid with hover overlay         |
| AboutSection      | 4                             | Split layout                           |
| CounterStats      | 5                             | 3 animated counters                    |
| PortfolioGallery  | 6                             | Grid with hover + "More Works" button  |
| FeatureCards      | 7                             | 3 cards on green bg                    |
| FinancialSolution | 8                             | Text carousel + image                  |
| TestimonialCarousel| 9                            | Quote carousel with avatar dots        |
| ProjectCTA        | 10                            | Centered CTA section                   |
| Footer            | 11                            | 4-column footer + copyright            |

## Fidelity Priorities

1. **Color accuracy:** #28AE60 green is the dominant brand color — must match exactly.
2. **Font:** Poppins throughout, weights 300/400/500/600/700.
3. **Button styles:** No border-radius on main buttons. Green fill, white outline, green outline variants.
4. **Service card hover:** Overlay animation is key — must match the fade-in behavior.
5. **Masonry grid:** Gallery uses Isotope-style masonry — can use CSS grid or a masonry library.
6. **Carousel behavior:** Multiple carousels (hero, financial, testimonial) — use a lightweight carousel solution.
7. **Counter animation:** Animated number counting on scroll — use intersection observer + counter logic.
8. **Responsive:** Mobile hamburger nav, stacked columns, full-width hero on small screens.
