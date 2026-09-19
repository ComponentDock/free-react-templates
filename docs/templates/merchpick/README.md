# Merchpick — Design Notes & Implementation Tasks

## Source
- **ColorLib template:** Product
- **Preview URL:** https://preview.colorlib.com/theme/product/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/product-free-template.jpg

## Design Reference Summary

### Visual Design
- Clean, modern e-commerce layout
- Hero with full-width background image slider
- Teal-green brand color (#0fb78d) throughout
- Sharp/square button edges (border-radius: 0)
- Pill-shaped input fields (border-radius: 30px)
- Product cards with hover effects
- Dark footer (#303030) with 4-column layout
- Serif font (Libre Baskerville) for product titles and deal section

### Section Order (must match 1:1)
1. Sticky Navbar (logo, nav links, search/profile/cart icons)
2. Hero Slider (carousel with background images)
3. Features Strip (3 columns: Delivery, Payments, Returns)
4. Product Grid (3x2 grid of product cards with badges)
5. Weekly Deal Banner (background image + discount text + CTA)
6. Popular Items Carousel (owl-carousel with product cards)
7. Footer (4 columns: Help, About, Shop, Newsletter; copyright)

### Key Visual Details
- Logo: "Merchpick" with teal period character
- Product badges: "New" (teal bg), "Sale" (amber bg)
- Cart icon shows item count badge
- Hero CTA: "Explore now" outline button
- Deal section: "Limited Offers 20% OFF" subtitle, "Week Deal" heading, "Shop Now" black button
- Newsletter input: white background, pill shape, "Subscribe" black button

## Implementation Tasks

### Phase 1: Project Setup
- [ ] Copy simplest existing app as base (e.g. `apps/showcase` or similar small e-commerce app)
- [ ] Rename package to `@free-react-templates/merchpick`
- [ ] Update `vite.config.ts` with `injectUiSource()`
- [ ] Update `index.html` title to "Merchpick — Free React Template"
- [ ] Add Google Fonts link for Muli (Mulish) and Libre Baskerville in `index.html`

### Phase 2: Component Structure
- [ ] `src/App.tsx` — Compose all sections
- [ ] `src/components/Navbar.tsx` — Sticky navbar with logo, nav links, search/profile/cart icons
- [ ] `src/components/HeroSlider.tsx` — Full-width carousel with background images
- [ ] `src/components/FeaturesStrip.tsx` — 3-column feature highlights
- [ ] `src/components/ProductGrid.tsx` — 3x2 product card grid
- [ ] `src/components/WeeklyDeal.tsx` — Background image deal banner
- [ ] `src/components/PopularCarousel.tsx` — Product carousel with navigation
- [ ] `src/components/Footer.tsx` — 4-column footer with newsletter signup

### Phase 3: Styling
- [ ] Define design tokens in `index.css` @theme
- [ ] Brand teal: `--color-brand: #0fb78d`
- [ ] Footer dark: `--color-footer: #303030`
- [ ] Button styles: sharp edges (no border-radius) for primary
- [ ] Input styles: pill shape (border-radius: 30px)
- [ ] Product card hover effects
- [ ] Badge styles: New (teal), Sale (amber)

### Phase 4: Content & Assets
- [ ] Placeholder images via `picsum.photos/seed/merchpick-<n>/<w>/<h>`
- [ ] Lucide-react icons replacing Bootstrap icons (Truck, ShieldCheck, RotateCcw, Search, User, ShoppingCart, ArrowLeft, ArrowRight, Heart)
- [ ] Product data array (6 items with name, price, original price, badge, image)
- [ ] Footer links data (Help, About, Shop sections)

### Phase 5: Tests
- [ ] Navbar renders logo, nav links, cart badge
- [ ] HeroSlider renders background image and CTA button
- [ ] FeaturesStrip renders 3 feature items with icons
- [ ] ProductGrid renders 6 product cards with correct badges
- [ ] WeeklyDeal renders discount text and CTA
- [ ] PopularCarousel renders product cards with navigation
- [ ] Footer renders 4 sections and Component Dock link
- [ ] 100% coverage on all components

### Phase 6: Verification
- [ ] `scripts/verify-app.sh merchpass` passes
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] Conventional commit + push
