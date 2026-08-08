# Vendora (ColorLib Shopper) — Tasks & Design Notes

> Recreation of ColorLib "Shopper"
> (https://colorlib.com/wp/template/shopper/) under the NEW name
> **Vendora**, per the monorepo naming mandate (never reuse the ColorLib
> source name). Replaces the stale `template-shopper` prep (forbidden source
> name), same as Shieldguard→Coverly / Shieldnet→Aegis / Pipelineiq→Dealflow.

## Design notes (replication findings)

- **Original:** ColorLib "Shopper" — fashion / e-commerce store landing
  Astro template.
- **Demo DOM analyzed:** https://shopper-colorlib.pages.dev/ (HTTP 200,
  ~110 KB HTML + `/_astro/Base.Dc8UlFQE.css` ~47 KB parsed for tokens; the
  official `https://preview.colorlib.com/theme/shopper/` returns 404 — demo
  hosted on Cloudflare Pages per the ColorLib preview portal, same pattern
  as Dealflow/Coverly/Aegis). The demo brand is "Luxe"; our recreation is
  Vendora.
- **Visual design (screenshot `shopper-template-1770211205661.jpg`):**
  modern, sleek, premium fashion store. Thin magenta/fuchsia promo strip on
  top ("Free shipping on orders over $100 | Use code LUXE20 for 20% off"),
  clean white header with shopping-bag logo, dark moody boutique-interior
  hero photo with white text, vivid pink/fuchsia primary ("Shop Collection"
  button + highlighted headline word "Everyday"), dark "Browse Categories"
  button, trust badges bottom-right (Free Shipping / Secure Checkout),
  "SCROLL" indicator. Bold sans typography (Outfit display + Inter body),
  rounded product cards, pill badges (red -25%, amber Bestseller, green New).
- **Structure (1:1, section order):**
  1. Promo bar — thin fuchsia strip, free-shipping + discount-code copy
     (adapt code to brand, e.g. VENDORA20).
  2. Sticky navbar (white/95 blur): shopping-bag logo + Vendora, links Shop,
     Categories, New Arrivals, Sale, About; search/account icons; cart
     count badge; dark-mode toggle; mobile hamburger drawer (duplicate
     links in DOM — tests use getAllByRole, index mobile last).
  3. Hero (min-h-[90vh], boutique photo bg, dark overlay): kicker
     "Spring/Summer 2022 Collection", H1 "Elevate Your Everyday Style"
     (highlight tail in primary), blurb, "Shop Collection" (primary pill)
     - "Browse Categories" (dark pill), 4 trust badges (Average Rating /
       500+ Premium Products / Free Shipping over $100 / Secure Checkout),
       SCROLL indicator.
  4. Service bar (border-y, white): Free Shipping / Secure Payment / Easy
     Returns / 24/7 Support — icon + h3 + blurb each.
  5. Featured Products (white, py-16/24): h2 + blurb + 8 product cards
     (Minimal Leather Jacket $299 -25%, Cashmere Crewneck Sweater $189 New,
     Aviator Sunglasses $145, Minimalist Leather Sneakers $165 Bestseller,
     Automatic Dress Watch $495, Diamond Pendant Necklace $350, Italian Wool
     Overcoat $425 -19%, Performance Running Sneakers $145 New) with
     category/rating/price/compare-at/sale badge/Add to Cart; "View All
     Products".
  6. Shop by Category (gray-50): 6 cards — Clothing 124, Accessories 86,
     Footwear 52, Bags 38, Jewelry 64, Watches 28 — each "Shop Now".
  7. New Arrivals (gray-50): Cashmere Crewneck Sweater, Minimalist Leather
     Sneakers, Printed Silk Scarf, Suede Chelsea Boots + "See All New".
  8. Season Sale (gradient from-primary-600 to-primary-800): "Season Sale —
     Up to 50% off" + countdown Days/Hours/Minutes + 4 discounted products
     - "Shop All Sale".
  9. Testimonials (white): "What Our Customers Say" + 3 quotes (Alexandra
     Chen, Marcus Johnson, Sophie Williams).
  10. Newsletter band (gray-900): "Get 20% Off Your First Order" + benefits
      (Exclusive Offers / New Arrivals First / Free Returns / Style Tips) +
      subscribe form.
  11. Footer: "Join Our Newsletter" (15% off) + subscribe; brand blurb +
      Shop / Help / About columns + copyright.

## Design tokens

- Primary: fuchsia-600 `#c026d3` (scale `#d946ef`→`#701a75`, tints
  `#fdf4ff`–`#f0abfc`). Put in `@theme` as `primary`.
- Accents: orange `#f97316` (sale), red-500 (discount badges), green-500
  (New badges). Neutrals: gray 100–950 (`#f3f4f6`–`#111827`); dark sections
  gray-900/950.
- Fonts: Outfit (display) + Inter (body) via Google Fonts `<link>` in
  index.html.
- Shapes: rounded-xl/2xl product cards, `rounded-full` badges/CTAs, `border-y`
  service bar, gradient sale band.

## Implementation tasks

1. Scaffold `apps/vendora` (copy simplest existing app; rename package to
   `@free-react-templates/vendora`; register in root workspaces if needed).
2. `@theme` tokens: primary fuchsia-600 scale, fonts (Outfit/Inter).
3. Tests-first per section (TDD, 100% coverage):
   - Promo bar + Navbar (links, cart badge, dark-mode toggle, mobile drawer)
   - Hero (H1, CTAs, trust badges)
   - Service perks (4)
   - Featured products (8 cards, badges, compare-at, Add to Cart)
   - Shop by category (6 cards, counts, Shop Now)
   - New arrivals (4 cards, See All New)
   - Season sale (countdown, 4 discounted, gradient bg)
   - Testimonials (3 quotes)
   - Newsletter (form, benefits; success message unmounts input — assert
     queryByLabelText absent)
   - Footer (columns, newsletter prompt, copyright)
   - Composition (landmarks, document title "Vendora — Fashion Store
     Template")
4. Placeholder images: `https://picsum.photos/seed/vendora-<n>/<w>/<h>`
   (deterministic per template).
5. Icons from lucide-react (ShoppingBag, Truck, ShieldCheck, RotateCcw,
   Headphones, Star, ShoppingCart, Heart, Clock, ChevronRight, Sparkles,
   Mail, Menu, Sun/Moon). NO brand icons (lucide removed them — inline SVG
   if needed).
6. Run `scripts/verify-app.sh vendora` until green (typecheck + lint +
   100% coverage + build).
7. Update README status via `npm run readme:status` after merge; PR
   description must list source template, preview URL, tokens, differences.

## Pitfalls

- jsdom 30: no `localStorage` — use `window.localStorage` + Storage
  polyfill in `src/test/setup.ts` (Keyhaven pattern).
- Dark-mode persistence must reference `window.localStorage`.
- knip: import Button/ButtonLink/Badge/Card/cn from `packages/ui` in the
  app, else CI deploy fails with "Unused dependencies".
- Desktop + mobile navs duplicate links in DOM — `getAllByRole`, index the
  mobile one last.
- Forms that swap to a success message unmount the input — assert
  `queryByLabelText(...)` is absent.
