# Modista (ColorLib Persuit) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-modista`. Recreation name: **Modista** (NEW name —
> the ColorLib source keeps its name "Persuit").

## Source mapping

- **ColorLib item:** "Persuit" (TEMPLATES.md line 1129)
- **Source URL:** https://colorlib.com/wp/template/persuit/
- **Preview URL — REACHABLE (verified 2026-09-13):** `https://preview.colorlib.com/theme/persuit/`
  (HTTP 200, 60,644 bytes HTML). Title: "Persuit".
- **Preview CSS:** `css/style.css` (139,307 bytes) — hand-written CSS on
  Bootstrap 4 grid. Uses Font Awesome 5, Simple Line Icons, Elegant Icons
  icon fonts. Also loads `css/bootstrap.min.css`, Revolution Slider CSS,
  Owl Carousel CSS, and `css/responsive.css`.
- **Scripts (NOT needed in React recreation):** jQuery 3.2.1, Popper.js,
  Bootstrap JS, Revolution Slider JS, Owl Carousel, Isotope, Magnific Popup.
  Replace all with React components + Tailwind.

## Reference research (done — do not redo)

### Preview DOM structure (sections in order)

1. **header_top_area** — Utility bar: language/currency selectors left,
   phone "+84 987 654 321" + email "support@yourdomain.com" center,
   social icons (FB, Twitter, Pinterest, Instagram, YouTube) + user/cart
   right.
2. **shop_header_area** — Main nav: categories dropdown, Home (with
   dropdown: Home Simple/Carousel/Fullwidth/Parallax/Boxed/Fixed),
   Pages (with dropdown: Compare/Checkout/Register/Track/Login/404),
   Shop (with dropdown: multiple grid/list/cart pages), Blog, Lookbook,
   Contact.
3. **main_slider_area** — Revolution Slider (2 slides): full-bleed
   background image, right-aligned text "Best Summer Collection",
   CTA "read more" button. Font: Montserrat 700, color #29263a.
4. **feature_add_area** — 5/4/3 column grid: 2 product images with
   hover overlays (heading + "Shop Now" link), badge labels ("Sale",
   "10% off"). Third column is standalone image.
5. **our_latest_product** — Owl Carousel of product cards (8 products
   across 4 slides of 2x2): image, compare icon, "Add To Cart" button,
   wishlist icon, product name, price (some with strikethrough).
6. **feature_big_add_area** — 6/6 column: two large promo images with
   white hover overlays (heading + "Shop Now").
7. **product_listing_area** — 3-column category listing: Men, Women,
   Accessories. Each with subcategory links + category image.
8. **feature_product_area** — 3/9 layout: left sidebar has heading
   "Featured Products" + 4 thumbnail items (image + name + price).
   Right main has filter tabs (Men's/Woman/Shoes/Bags) + carousel
   of filtered products with badge labels.
9. **from_blog_area** — "From The Blog" heading + 3 blog cards:
   image, category tag "fashion", excerpt, date "21.09.2017".
10. **footer_area** — 5-column footer: About (logo + description +
    social), Information, Customer Service, Extras, My Account.
    Copyright bar with Colorlib attribution → replace with Component Dock.

### Design tokens (extracted from css/style.css)

| Token | Hex | Notes |
|-------|-----|-------|
| brand-red | #d91522 | Primary accent, CTA hover, sale badges |
| brand-red-alt | #d42421 | checkout_btn background |
| dark-bg | #262121 | add_cart_btn background |
| footer-bg | #0b1033 | Footer area dark background |
| text-primary | #000 | Body text, nav |
| text-heading | #333333 | Headings |
| text-secondary | #666666 | Descriptions, prices |
| text-muted | #999999 | Minor labels |
| border-light | #e5e5e5 | Dividers |
| Fonts | Montserrat, Poppins, Lato, Playfair Display | Google Fonts via <link> |

### Screenshot analysis

The ColorLib screenshot (persuit-free-template.jpg) shows a clean,
modern e-commerce fashion shop layout. White background with light
grey sections. Red accent color on buttons and sale badges. Product
cards are clean with square images. The overall aesthetic is professional
fashion retail — think Zara/ASOS inspired clean minimal design with
bold typography and red accent highlights.

## Tasks outline for implementation

### Phase 1: Scaffold
- [ ] Copy simplest existing app as base (e.g., apps/aurora or similar shop template)
- [ ] Rename package to `@free-react-templates/modista`
- [ ] Update `public/CNAME` to `modista.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://modista.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile

### Phase 2: Component structure
- [ ] `src/components/TopBar.tsx` — utility bar (phone, email, social, user/cart)
- [ ] `src/components/Navbar.tsx` — main shop navigation with dropdowns
- [ ] `src/components/HeroSlider.tsx` — image carousel with overlay text + CTA
- [ ] `src/components/FeatureAds.tsx` — 3-column banner grid with hover overlays
- [ ] `src/components/LatestProducts.tsx` — product card carousel
- [ ] `src/components/PromoBanners.tsx` — 2-column large promo images
- [ ] `src/components/CategoryListing.tsx` — Men/Women/Accessories columns
- [ ] `src/components/FeaturedProducts.tsx` — sidebar + filter tabs + carousel
- [ ] `src/components/BlogSection.tsx` — 3 blog cards
- [ ] `src/components/Footer.tsx` — 5-column footer + copyright
- [ ] `src/App.tsx` — compose all sections

### Phase 3: Design tokens in index.css
- [ ] Define @theme with brand-red (#d91522), dark-bg (#262121), footer-bg (#0b1033)
- [ ] Import Google Fonts: Montserrat (400,600,700), Poppins (400,600)
- [ ] Set up Tailwind color tokens

### Phase 4: TDD
- [ ] Write tests for each component (Vitest + Testing Library)
- [ ] Ensure 100% coverage on all components
- [ ] Test responsive behavior
- [ ] Test carousel navigation (prev/next, dots)
- [ ] Test filter tab switching in FeaturedProducts

### Phase 5: Polish
- [ ] Footer: replace Colorlib attribution with "Component Dock" link
- [ ] All images use picsum.photos with deterministic seeds
- [ ] Icons from lucide-react (replace Font Awesome / Simple Line Icons)
- [ ] No ColorLib references in any app file
- [ ] Run `scripts/verify-app.sh modista` for local gate
- [ ] Commit: `feat: add Modista (ColorLib Persuit) template`
- [ ] Open PR, merge, deploy to Surge

## Fidelity notes

- The original uses Revolution Slider (complex JS animation library).
  Recreate as a simple React carousel with CSS transitions — matching
  the visual effect (fade, text overlay, dots) without the library.
- Owl Carousel → React horizontal scroll or simple carousel component.
  Preserve the card layout (2 per slide, stacked vertically).
- Isotope filtering → React state-based filter in FeaturedProducts.
  Tabs control which products are shown.
- The original uses Font Awesome 5, Simple Line Icons, and Elegant Icons
  → replace ALL with lucide-react for consistency.
- Product images in the original are actual product photography.
  Use picsum.photos with template-specific seeds for placeholders.
- The footer Colorlib attribution must become "Component Dock" per
  project rules.
- Bootstrap grid classes → Tailwind responsive utilities (grid/cols).
