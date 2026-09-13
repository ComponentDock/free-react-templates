# Pillowcraft — Implementation Notes

## Source
- **ColorLib:** Pillow Mart (https://colorlib.com/wp/template/pillow-mart/)
- **New name:** pillowcraft
- **Category:** eCommerce / Pillow Store
- **Preview:** https://preview.colorlib.com/theme/pillow-mart/ (404 as of 2026-09-13)

## Section Order (from screenshot analysis)

1. **Navbar** — Top bar (logo, nav links, cart/search icons)
2. **Hero** — Full-width hero with background image, headline, CTA
3. **Category Banners** — 2–3 image cards for product categories
4. **Featured Products** — Product grid with cards (image, name, price, add-to-cart)
5. **About / Why Us** — Value proposition with benefit icons
6. **Testimonials** — Customer review cards/carousel
7. **Newsletter** — Email signup form
8. **Footer** — Nav links, social icons, copyright, Component Dock link

## Design Notes

### Colors (estimate — verify from screenshot)
- Primary accent: brand color for CTAs (likely warm or blue tone)
- Dark: nav background, headings
- Light gray: alternate section backgrounds
- White: cards, hero overlay

### Typography
- Likely Poppins or similar sans-serif (common in ColorLib eCommerce)
- Heading weights: 600–700
- Body weight: 400

### Layout Patterns
- Full-width sections with centered container (max-width ~1140px)
- Product grid: CSS Grid or Flexbox, 3–4 columns desktop, 1–2 mobile
- Category banners: horizontal row with equal-width cards
- Hero: full-bleed background image with text overlay

### Implementation Order
1. Set up app scaffold (copy from simplest existing app)
2. Build Navbar component
3. Build Hero section
4. Build Category Banners
5. Build Featured Products grid
6. Build About / Why Us section
7. Build Testimonials
8. Build Newsletter form
9. Build Footer
10. Compose all in App.tsx
11. Write tests for each component
12. Verify 100% coverage

### Placeholder Images
- Hero: `https://picsum.photos/seed/pillowcraft-hero/1920/800`
- Category 1: `https://picsum.photos/seed/pillowcraft-cat1/600/400`
- Category 2: `https://picsum.photos/seed/pillowcraft-cat2/600/400`
- Category 3: `https://picsum.photos/seed/pillowcraft-cat3/600/400`
- Products: `https://picsum.photos/seed/pillowcraft-prod{N}/400/400`
- Testimonial avatars: `https://picsum.photos/seed/pillowcraft-av{N}/100/100`

### Caveats
- Preview URL is 404 — implementer must view the screenshot directly
- Design tokens are estimated; implementer should verify exact colors from the screenshot
- Section structure is inferred from listing description; adjust based on actual screenshot analysis
