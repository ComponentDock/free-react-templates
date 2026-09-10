# Talently — Implementation TODO

Source: ColorLib Careers → https://preview.colorlib.com/theme/careers/
New name: Talently
Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Section order (from preview DOM)

1. Navbar
2. Hero (search form)
3. Statistics (parallax overlay, 4 counters)
4. Job Listings (8 cards in list layout)
5. Company Logos (horizontal row)
6. Testimonials (carousel, light bg)
7. CTA (parallax overlay, sign-up)
8. Footer (4-column + social icons)

## Design tokens (from CSS)

- Primary: #1644ba (royal blue)
- Hover: #1747c3
- Warning/CTA: #ffc107 (Bootstrap warning yellow)
- Font: Nunito (Google Fonts, weights 200–700)
- Heading color: #000
- Body text: #212529
- Light bg: #f8f9fa
- Button border-radius: 0.3rem (search), 7px (job cards), 50% (social icons)

## Implementation notes

- Hero search form: 4-column grid, select dropdowns with static options
- Statistics: use `data-number` attribute style — animate numbers on scroll or show static
- Job listings: list layout (not card grid) — 2-col image, 4-col info, 3-col location, 3-col salary
- Testimonials: simple React carousel (CSS-only or state-based, no heavy lib)
- Company logos: horizontal flex row with placeholder images
- Footer: 4-column grid, social icons from lucide-react
- Parallax: use `bg-fixed` equivalent (Tailwind `bg-fixed bg-center bg-cover`)

## Component breakdown

```
src/
  App.tsx
  components/
    Navbar.tsx
    Hero.tsx
    Statistics.tsx
    JobListings.tsx
    CompanyLogos.tsx
    Testimonials.tsx
    Cta.tsx
    Footer.tsx
  index.css
  main.tsx
```

## Fidelity notes

- Navbar overlays hero (position absolute/relative)
- Hero background image with dark overlay (multiply or opacity)
- Statistics section has same hero image with primary-blue overlay
- Job items are full-width rows, not cards — separated by border-bottom
- Testimonials: centered photo (rectangular), blockquote with cite
- CTA: same parallax bg as hero, white text, yellow warning button
- Footer: dark bg, white/light text, blue circular social icons
- All overlay sections use the same background image with different overlays
