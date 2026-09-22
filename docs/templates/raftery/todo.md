# Raftery — Implementation Notes

## Source
- ColorLib slug: `roofing`
- Preview URL: `https://preview.colorlib.com/theme/roofing/`
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/roofing-free-template.jpg`

## Section Order (top → bottom)

1. TopBar — logo + social icons
2. Navbar — dark, 6 links, mobile toggle
3. HeroSlider — full-height carousel (2 slides)
4. AboutQuoteSection — 2-col: text+tabs | quote form
5. CounterSection — gold bg, 4 stat counters
6. ServicesSection — 6 service tabs + side image
7. ProjectsGallery — 8-card hover grid
8. TestimonySection — testimonial carousel
9. BlogSection — 3 blog entries
10. PricingSection — 4 pricing tiers
11. Footer — 4-col dark footer

## Fidelity Notes

- Brand color is `#d9ba2b` (gold-yellow), NOT Bootstrap's `#007bff` — override `.bg-primary` and `.btn-primary` styles
- The original uses Bootstrap 4 + jQuery + Owl Carousel — replace Owl with a React carousel or CSS snap
- Tabs in About section use Bootstrap pill tabs — implement as React controlled state
- Services section has 6 vertical tabs with icon + label — keep same layout
- Projects grid is `no-gutters` 4-column — use CSS grid or flexbox
- Testimony carousel uses Owl — replace with React carousel or simple scroll
- Counter numbers animate on scroll — use IntersectionObserver or similar
- Footer has 4 equal columns — flexbox/grid
- `flaticon-roof-*` icons → replace with `lucide-react` icons (e.g., `Home`, `Shield`, `Droplets`, `Wrench`)
- Font Awesome icons → replace with `lucide-react` equivalents

## Component Plan

```
src/
  App.tsx
  components/
    TopBar.tsx
    Navbar.tsx
    HeroSlider.tsx
    AboutQuoteSection.tsx
    CounterSection.tsx
    ServicesSection.tsx
    ProjectsGallery.tsx
    TestimonySection.tsx
    BlogSection.tsx
    PricingSection.tsx
    Footer.tsx
```
