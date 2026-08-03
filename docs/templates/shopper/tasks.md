# Shopper (Colorlib Shopper) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cloud PR (#7) awaits review.
> Implementation ships later on `feat/template-shopper`.

## Design notes (replication findings)

- **Original:** ColorLib "Shopper" — fashion / e-commerce store landing
  template (source: https://colorlib.com/wp/template/shopper/).
- **Demo DOM analyzed:** https://shopper-colorlib.pages.dev/ (HTTP 200, full
  rendered DOM + `/_astro/Base.Dc8UlFQE.css` (47KB, minified) extracted;
  `https://preview.colorlib.com/theme/shopper/` returns 404 — preview portal
  loads demos from `<slug>-colorlib.pages.dev`, confirmed via
  `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + CSS tokens):** premium fashion store landing,
  **fuchsia/purple** brand color (`#d946ef`/`#c026d3` scale), Outfit display
  - Inter body fonts, rounded product cards with sale badges, pill buttons,
    gray-50/white alternating sections, dark-gray (`#111827`) newsletter band
    and footer, full dark mode.
- **Structure (1:1, section order):**
  1. Sticky navbar (white/95 blur): "Shopper" logo + Shop, Categories, New
     Arrivals, Sale, About + cart count + "My Account".
  2. Hero (`min-h-[90vh]` image): "Elevate Your Everyday Style" + "Shop
     Collection" / "Browse Categories"; trust badges (rating, 500+
     products, free shipping, secure checkout).
  3. Service bar: Free Shipping, Secure Payment, Easy Returns, 24/7
     Support.
  4. Featured Products: 8 cards (jacket, sweater, sunglasses, sneakers,
     watch, pendant, overcoat, running sneakers) + "View All Products".
  5. Shop by Category: 6 cards (Clothing 124, Accessories 86, Footwear 52,
     Bags 38, Jewelry 64, Watches 28) + "Shop Now".
  6. New Arrivals: 4 cards (sweater, sneakers, silk scarf, chelsea boots)
     - "See All New".
  7. Season Sale (gradient primary-600→800): "Up to 50% off" + countdown
     (Days/Hours/Minutes) + 4 discounted products + "Shop All Sale".
  8. Testimonials: 3 quotes (Alexandra Chen, Marcus Johnson, Sophie
     Williams).
  9. Newsletter band (bg-gray-900): "Get 20% Off Your First Order" + 4
     benefits + subscribe form.
  10. Footer: "Join Our Newsletter" (15% off) + Shop / Help / About columns
      - copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **fuchsia scale** — #d946ef (500), #c026d3 (600 primary;
    dark #a21caf, #86198f, #701a75; light #e879f9, #f0abfc, #f5d0fe,
    #fae8ff, #fdf4ff); sale gradient primary-600 → primary-800.
  - Neutrals: gray scale — #f3f4f6 → #111827 (newsletter/footer).
  - Fonts: **"Outfit"** (display) + **"Inter"** (body) via Google Fonts.
  - Shapes: rounded cards, pill buttons, sale badges; section padding
    `py-16 lg:py-24`.
- **Recreation name:** Shopper (kept — matches ColorLib name). App folder
  `apps/shopper`, package `@free-react-templates/shopper`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/shopper-<n>/<w>/<h>`); lucide-react icons (Truck,
  ShieldCheck, RotateCcw, Headphones, Star, ShoppingCart, Heart, Clock,
  ChevronRight, Sparkles, Mail); Outfit + Inter via Google Fonts;
  repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-shopper/spec.md` (Gherkin requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/shopper` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/shopper`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-shopper`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
