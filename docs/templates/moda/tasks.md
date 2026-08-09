# Moda (ColorLib Shopper) — Tasks & Design Notes

> Prep artifacts committed on `main` (prep stream). Implementation ships
> later on `feat/template-moda` (implementer stream).

## Design notes (replication findings)

- **Original:** ColorLib "Shopper" — free fashion/lifestyle e-commerce
  website template (source: https://colorlib.com/wp/template/shopper/,
  slug `shopper`; categories E-commerce, Fashion; images from Unsplash).
- **Preview:** `https://preview.colorlib.com/theme/shopper/` → 404 "Not
  Found". The ColorLib preview hub (`preview.colorlib.com/assets/js/products.js`)
  maps the slug to the REACHABLE official Cloudflare Pages demo
  **`https://shopper-colorlib.pages.dev/`** (Astro rebuild, title "Luxe -
  Modern Fashion & Lifestyle"). ALL structure/copy/tokens below are from
  that live demo + its `/_astro/Base.Dc8UlFQE.css`, cross-checked against
  the TEMPLATES.md screenshot (`shopper-template-1770211205661.jpg`, AVIF
  2400×1892): above-the-fold matches 1:1 (announcement bar, LUXE wordmark +
  bag logo, nav, hero photo/headline/CTAs/stats).
- **Visual design:** clean modern minimalist fashion e-commerce. Fuchsia
  brand accent (`#C026D3`) on white/gray; thin fuchsia announcement bar;
  sticky white header; full-bleed hero photo of a boutique store with
  left-to-right dark gradient overlay; white bold headline with accent word
  in light fuchsia; stats row + floating trust chips; 4-col trust bar;
  8-card featured-products grid (portrait 3:4, badges, ratings, prices with
  strikethrough, color swatches, Add to Cart); 6 category cards; New
  Arrivals row; fuchsia gradient Season Sale with live countdown; 3
  testimonials + trust row; dark newsletter (20% off) with 4-feature row;
  light footer with mini newsletter (15% off), 3 link columns, payment
  chips. **Dark mode supported** (toggle in header, `dark:` variants).
- **Section order (1:1):**
  1. Announcement bar (bg `#C026D3`, white text): "Free shipping on orders
     over $100 | Use code LUXE20 for 20% off" (code bold).
  2. Header (sticky, `bg-white/95 backdrop-blur`, border-b): logo wordmark
     "Moda" + ShoppingBag icon; nav Shop / Categories / New Arrivals / Sale
     / About; icons Search, dark-mode toggle, Account, Cart (badge);
     mobile hamburger → links + My Account (aria-expanded, Escape closes).
  3. Hero (`min-h-[90vh]`): fashion-store photo + `bg-gradient-to-r
from-gray-900/90 via-gray-900/70 to-gray-900/40`; pill badge
     "Spring/Summer 2032 Collection"; H1 "Elevate Your Everyday Style"
     ("Everyday" in `#E879F9`); sub; CTAs "Shop Collection" (primary
     `rounded-lg` px-8 py-4) + "Browse Categories" (glass
     `bg-white/10 border-2 border-white/30`); stats 50K+ / 4.9 / 500+;
     trust chips Free Shipping + Secure Checkout; animated "Scroll".
  4. Trust bar (`border-y bg-white py-12`): Free Shipping, Secure Payment,
     Easy Returns, 24/7 Support (icon + title + sub).
  5. Featured Products (`bg-white py-16 lg:py-24`): heading + sub + "View
     All Products"; grid `sm:grid-cols-2 lg:grid-cols-4 gap-6`; 8 cards:
     `aspect-[3/4]` image, badge (New/Bestseller/-25%), category, title,
     star + rating, price (+ strikethrough), 3 color swatches, Add to Cart.
  6. Shop by Category (`bg-gray-50`): 6 cards — Clothing 124, Accessories
     86, Footwear 52, Bags 38, Jewelry 64, Watches 28 (image, name, count,
     Shop Now).
  7. Just Dropped / New Arrivals (`bg-gray-50`): heading + sub + "See All
     New"; 4 new-arrival cards.
  8. Season Sale (`bg-gradient-to-br from-primary-600 to-primary-800`):
     "Limited Time Offer" / "Season Sale" / "Up to 50% off" / "Shop All
     Sale"; countdown boxes (`rounded-xl bg-white/20 font-display h-16
w-16`) Days : Hours : Minutes : Seconds ticking down; 4 sale cards
     with -25%/-18%/-17%/-19% badges.
  9. Testimonials (`bg-white`): "What Our Customers Say"; 3 cards (5 stars,
     quote, name + location, Verified) + trust row (Trustpilot, SSL
     Secured, Verified Reviews).
  10. Newsletter (`bg-gray-900`): "Get 20% Off Your First Order"; email +
      Subscribe; consent line; features Exclusive Offers / New Arrivals
      First / Free Returns / Style Tips.
  11. Footer (`bg-gray-50`): mini newsletter "Join Our Newsletter" (15%
      off) + Subscribe; brand blurb; Shop / Help / About columns; bottom
      bar © 2026 + Privacy + Terms + VISA/AMEX chips.
- **Design tokens (real values from the demo CSS):**
  - Primary fuchsia `#C026D3` (600); 400 `#E879F9` (hero accent), 500
    `#D946EF`, 700 `#A21CAF` (hover), 100 `#FAE8FF` (icon chips), 800
    `#86198F` (gradient end).
  - Accent orange `#F97316` (500) — sale badges; 400 `#FB923C`.
  - Neutrals: white; gray-50 (sections/footer), gray-100 (borders),
    gray-300 (hero sub), gray-600 (secondary text), gray-900 (dark
    section), gray-950 (dark bg).
  - Fonts: **Outfit** (display/headings/countdown) + **Inter** (body) via
    Google Fonts.
  - Buttons: CTAs `rounded-lg` px-8 py-4 semibold white; primary
    bg-primary-600 hover bg-primary-700 + shadow-primary-500/25; hero
    secondary glass. Pill `rounded-full` only for badges/chips. NOTE:
    screenshot shows pill hero CTAs — live rebuild is `rounded-lg`; follow
    the live rebuild.
  - Rhythm: `py-16 lg:py-24`, container `max-w-7xl px-4 lg:px-8`, product
    grid 4-col lg / 2-col sm, `aspect-[3/4]` images.
- **Recreation name:** Moda (single lowercase word; Italian/Spanish
  "fashion" — fits the brand; NO collision with `apps/` or existing spec
  folders). App folder `apps/moda`, package `@free-react-templates/moda`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/moda-<n>/<w>/<h>`; hero 1920×1080, products
  800×1000, categories 600×400); lucide-react icons (ShoppingBag, Search,
  Moon, Sun, User, Heart, ShoppingCart, Star, Truck, Lock, RotateCcw,
  Headphones, ArrowRight, Menu, X — VERIFY exports; VISA/AMEX as inline
  text/SVG chips, no new deps); Outfit + Inter via Google Fonts; dark mode
  with `window.localStorage` persistence (Keyhaven pattern — jsdom 30 needs
  the in-memory Storage polyfill in `src/test/setup.ts`); countdown =
  client-side timer to a fixed future date; newsletter forms client-side
  validated with inline success; mobile menu with aria-expanded; repo
  standard extras (skip link, back-to-top, cookie banner, scroll-reveal).
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn). Fidelity
  decisions for the PR: single-page landing only (source is a multipage
  shop — product/category detail pages out of scope), logo recreated as
  text (never the source logo asset), "View All"/"See All"/"Shop All"
  links anchor to `#`/inert placeholders.

## Tasks

- [x] Write `openspec/specs/template-moda/spec.md` (Gherkin requirements +
      scenarios reflecting the sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/moda` (copy a simple e-commerce-ish card-grid app — e.g.
      Coverly/Aegis-style; rename package to `@free-react-templates/moda`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Gate: `scripts/verify-app.sh moda` (typecheck → lint → 100% coverage
      tests → build) + `npm run spec:validate`.
- [ ] Push `feat/template-moda`, open PR (source template, preview URL,
      design tokens, what differs, pages.dev-reference note), merge
      immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main), `npm run readme:status`.
