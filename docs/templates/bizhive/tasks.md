# BizHive — Implementation Notes

Source: ColorLib Busicol → https://preview.colorlib.com/theme/busicol/
New name: bizhive

## Section Order (from preview DOM analysis)

1. **TopBar** — dark strip, social icons (left), email + phone (right)
2. **Navbar** — white bg, green triangle logo, nav links, "Get a Quote" CTA
3. **HeroSlider** — full-height carousel, dark overlay, headline + subtitle + 2 CTAs
4. **Services** — "Explore Our Solutions" heading, 3 image cards with hover
5. **About** — two-column: image left, text + features + CTA right
6. **Counter** — dark bg, 3 stat counters (green numbers)
7. **Portfolio** — "Our Recent Works" heading, 2×3 grid, category labels
8. **FeatureCards** — 3 icon+text cards (Unlimited Control, Rapidly Growth, Problem Solving)
9. **FinancialCTA** — heading "Gives you the best Financial solution", description
10. **Testimonials** — carousel, quote + name + role
11. **CTASection** — dark bg, "Do you Have any Project?" heading, white outline button
12. **Footer** — dark (#1F1F1F), 4 columns, copyright bar

## Design Tokens (from css/style.css)

- Primary: #28AE60 (green)
- Dark bg: #1F1F1F (footer), #2C2C2C (overlays)
- Light bg: #fbf9ff
- Font: Poppins
- Button radius: 5px
- Card radius: 12px

## Fidelity Notes

- Match section order 1:1
- Hero: carousel with auto-rotation, dark overlay on bg images, left-aligned text
- Services: 3 cards with background images + hover green overlay
- Counter: dark bg, animated numbers on scroll
- Portfolio: 2-column grid, 3 rows, dark overlay on hover
- Testimonials: carousel with quotes
- Footer: 4-column layout, dark background
- Use picsum.photos for placeholder images
- Use lucide-react for icons (replace Font Awesome / Themify)
- CTA button: green solid (#28AE60), hover #28AE61, rounded 5px
- White outline button variant for dark sections

## Component Structure

```
src/
  App.tsx
  components/
    TopBar.tsx
    Navbar.tsx
    HeroSlider.tsx
    Services.tsx
    About.tsx
    Counter.tsx
    Portfolio.tsx
    FeatureCards.tsx
    FinancialCTA.tsx
    Testimonials.tsx
    CTASection.tsx
    Footer.tsx
```

## Implementation Priority

1. TopBar + Navbar (header group)
2. HeroSlider (standalone, most visual impact)
3. Services (3 cards)
4. About (two-column)
5. Counter (stats)
6. Portfolio (grid)
7. FeatureCards + FinancialCTA (simple sections)
8. Testimonials (carousel)
9. CTASection + Footer (bottom)
