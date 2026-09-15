# Studiohaus — Implementation Notes

## Source mapping
- ColorLib source: `theinterior`
- Preview: https://preview.colorlib.com/theme/theinterior/
- New name: `studiohaus`
- App folder: `apps/studiohaus`
- Package: `@free-react-templates/studiohaus`
- Deploy URL: `https://studiohaus.free.componentdock.com`

## Section implementation order

1. **Navbar** — Transparent sticky header. Use `cn()` for sticky state toggle.
   Logo text "Studiohaus". Nav links array. CTA button with `#c6a16e` bg.

2. **HeroSlider** — Full-width image slider with 2 slides. Dark overlay
   `rgba(1,10,28,0.3)`. Use a simple CSS-based slider (no heavy lib).
   Heading: `Barlow` font, 70px desktop / 35px mobile, uppercase, bold 900.
   Animated arrow indicator at bottom.

3. **InfoStats** — 4-column row. Background image with dark overlay. Each
   column: icon/number + label. Use `picsum.photos` for bg.

4. **ProfessionalServices** — Full-width background image banner. Left-aligned
   text + CTA button. Hidden on mobile (`d-none d-md-block`). Dark overlay.

5. **ServicesGrid** — 3-column grid. Cards with `#fafafa` bg, hover → white.
   Each: image + h4 title (with `#ffe7ca` underline accent via `::before`)
   + paragraph. Responsive: 1 col mobile, 2 col tablet, 3 col desktop.

6. **Gallery** — 6 images in masonry-style 3-col grid. `picsum.photos` for
   images. Overflow hidden on items.

7. **Team** — 3 team member cards. Image with gradient overlay
   (transparent → `rgba(2,26,71,0.6)` bottom). Name + role at bottom-left.
   Hover: image zoom to 1.1 scale.

8. **Testimonials** — Dark bg section. Large white quote text. Founder
   circular image + name. Dot navigation. Simple CSS-only carousel or
   state-based slide.

9. **BrandLogos** — 6 partner logos in horizontal row. Use SVG placeholders
   or lucide-react icons styled as logos. Border separators.

10. **WantToWorkCTA** — Full-width `#c6a16e` bar. Large white headline.
    Dark "GET STARTED" button on right side.

11. **Blog** — 2-column blog cards. Image with dark overlay at bottom.
    Gold date badge. Title, excerpt, "more" link. Responsive: 1 col mobile.

12. **Footer** — Deep navy `#010b1d` bg. 4-column layout: logo/description,
    quick links, footer links, Instagram gallery grid. Bottom bar with
    copyright + social icons (lucide-react). Must link Component Dock.

## Design token mapping to Tailwind

```css
/* src/index.css @theme */
--color-brand: #c6a16e;        /* primary gold */
--color-brand-light: #ffe7ca;   /* warm peach accent */
--color-navy: #0b1c39;         /* heading color */
--color-navy-dark: #010b1d;    /* footer bg */
--color-navy-deep: #16161a;    /* dark accent */
--color-text: #506172;         /* body text */
--color-hero-overlay: rgba(1,10,28,0.3);
--color-cta-red: #e6373d;      /* button hover sweep */
```

## Key implementation details

- Hero heading font: Google Fonts "Barlow" (import in `index.html`)
- Body font: Replace "Great Vibes" (cursive script) with a clean sans-serif
  (e.g., "Josefin Sans" or "Inter") for better React rendering
- Button hover: CSS `::before` pseudo-element with `scaleX` transition
  using `#e6373d` — implement via Tailwind arbitrary or inline styles
- Team gradient overlay: Use a div with absolute positioning + gradient
- Gallery: CSS grid with `grid-template-rows: masonry` or fixed aspect ratios
- Testimonials: State-based slide with dot indicators (no heavy carousel lib)

## Fidelity notes

- Match section order exactly: Header → Hero → Info → Services Banner →
  Services → Gallery → Team → Testimonials → Brands → CTA → Blog → Footer
- The original uses `data-background` for background images — in React use
  inline `style={{ backgroundImage: ... }}` or Tailwind `bg-[url(...)]`
- Professional Services section is hidden on mobile — replicate this
- The hero arrow animation is a subtle left-right slide using `@keyframes`
- Service card h4 underline accent: `::before` pseudo-element with
  `#ffe7ca` background, positioned below text
