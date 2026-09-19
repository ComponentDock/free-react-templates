# Solebay — Implementation Tasks & Design Notes

Source: ColorLib "Karma" sneaker shop template
Preview: https://preview.colorlib.com/theme/karma/
Name: solebay (new, never "karma")
Category: E-Commerce / Sneaker Shop

## Section order (from live DOM)

1. **StickyHeader** — navbar (logo, nav links with dropdowns, bag + search icons)
2. **HeroBanner** — full-height carousel (bg photo, headline, CTA, product image)
3. **FeaturesStrip** — 4-column icon cards (Free Delivery, Return Policy, 24/7 Support, Secure Payment)
4. **CategoryGrid** — asymmetric 2×2 + tall card layout with overlay labels
5. **LatestProducts** — "Latest Products" carousel with product cards
6. **ExclusiveDeal** — split layout: countdown timer + bg photo left, product carousel right
7. **BrandLogos** — row of 5 brand images
8. **DealsOfWeek** — "Deals of the Week" grid of related product cards
9. **Footer** — dark bg, 4 columns (About Us, Newsletter, Instagram, Follow Us), copyright

## Component structure

```
src/
  App.tsx              — compose all sections in order
  components/
    StickyHeader.tsx   — logo, NavMenu (with Dropdown), BagIcon, SearchIcon
    HeroBanner.tsx     — carousel with slides (headline, desc, CTA, product img)
    FeaturesStrip.tsx  — 4 FeatureCard items
    CategoryGrid.tsx   — 5 CategoryCard items in asymmetric grid
    LatestProducts.tsx — section title + ProductCarousel with ProductCard items
    ExclusiveDeal.tsx  — CountdownTimer + ProductCarousel (split layout)
    BrandLogos.tsx     — 5 brand image links
    DealsOfWeek.tsx    — section title + grid of DealCard items
    Footer.tsx         — 4 columns + copyright bar
```

## Design token mapping (CSS → Tailwind @theme)

| Token | CSS value | Tailwind usage |
|-------|-----------|----------------|
| brand-gradient | `linear-gradient(90deg, #ffba00, #ff6c00)` | `bg-gradient-to-r from-amber-400 to-orange-600` |
| brand-amber | `#ffba00` | `text-amber-400`, `border-amber-400` |
| brand-orange | `#ff6c00` | `text-orange-600` |
| heading-color | `#222222` | `text-neutral-900` |
| body-color | `#777777` | `text-neutral-500` |
| footer-bg | `#222222` | `bg-neutral-900` |
| section-alt-bg | `#f9f9ff` | `bg-slate-50` |
| heading-font | Poppins | `font-heading` (Google Fonts) |
| body-font | Roboto | `font-body` (Google Fonts) |
| btn-radius | 50px | `rounded-full` |

## Fidelity notes

- The original uses Bootstrap grid (col-lg-*) — recreate with Tailwind grid/flex.
- Owl-carousel sliders → implement as simple CSS/JS carousels or a lightweight
  React carousel (consider embla-carousel or custom, no heavy deps).
- Countdown timer: static display or simple `useEffect` countdown.
- The "Add to Bag" circle button is a gradient-filled circle with a bag icon —
  use lucide-react ShoppingBag icon.
- Category overlay: dark semi-transparent overlay on hover showing the label.
- Instagram feed: 2×4 grid of placeholder images (`picsum.photos`).
- Social icons: lucide-react equivalents (Facebook, Twitter, Dribbble, Behance).
- Search bar: slide-down overlay triggered by search icon click.
- Product images: use `picsum.photos/seed/solebay-product-N/400/400`.
- Hero bg: `picsum.photos/seed/solebay-hero/1920/1080`.
- Exclusive deal bg: `picsum.photos/seed/solebay-deal/960/600`.

## Potential issues

- Countdown timer needs client-side only rendering (avoid SSR hydration mismatch).
- Carousel behavior: ensure keyboard and screen-reader accessibility.
- Sticky header needs proper z-index stacking above hero and search overlay.
