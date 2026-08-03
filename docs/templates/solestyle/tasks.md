# Solestyle (Colorlib Solestyle) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cloud PR (#7) awaits review.
> Implementation ships later on `feat/template-solestyle`.

## Design notes (replication findings)

- **Original:** ColorLib "Solestyle" — footwear / sneaker store landing
  template (source: https://colorlib.com/wp/template/solestyle/).
- **Demo DOM analyzed:** https://solestyle-colorlib.pages.dev/ (HTTP 200,
  full rendered DOM + `/_astro/Base.*.css` (54KB, minified) extracted;
  `https://preview.colorlib.com/theme/solestyle/` returns 404 — preview
  portal loads demos from `<slug>-colorlib.pages.dev`, confirmed via
  `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + CSS tokens):** energetic sneaker store landing
  on a dark hero, **orange** brand color (`#f97316`/`#ea580c` scale), Outfit
  display + Inter body fonts, rounded product cards with sale badges, pill
  buttons, gray-50/white alternating sections, dark-gray (`#111827`)
  sections and footer, full dark mode.
- **Structure (1:1, section order):**
  1. Sticky navbar (white/95 blur): "Stride" logo + Shop, Categories, New
     Arrivals, Sale, About + cart count + Wishlist + "My Account".
  2. Hero (`bg-gray-950`): "Step Into Your Best" + "Shop Now" / "Browse
     Categories"; trust badges (rating, 300+ styles, free shipping,
     easy returns).
  3. Shop by Category: 6 cards (Running 48, Sneakers 86, Basketball 32,
     Casual 64, Boots 28, Sandals 24) + "Shop Now".
  4. Featured Collection: 7 product cards (Velocity Runner Pro, Streetwise
     Classic, Court Dominator X, Trail Blazer GTX, Marathon Elite, Cloud 9
     Recovery, Court Legacy Low) + "View All Featured".
  5. Service bar: Free Shipping, 60-Day Returns, Size Guarantee, Secure
     Checkout.
  6. New Arrivals: 4 cards (Court Dominator X, Summer Slide Sport, Marathon
     Elite, Cloud 9 Recovery) + "Shop New Arrivals".
  7. Testimonials (`bg-gray-950`): 3 quotes (Marathon Runner, Fitness
     Instructor, Sneaker Enthusiast) + stats.
  8. App CTA (`bg-primary-600`): "Ready to Step Up Your Game?" — 15% off +
     App Store / Google Play buttons.
  9. Newsletter: "Join the Stride Club" — 15% off + subscribe form.
  10. Footer: "Stride" blurb + Shop / Help / About columns + copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **orange scale** — #f97316 (500), #ea580c (600 primary;
    dark #c2410c, #9a3412, #7c2d12, #431407; light #fb923c, #fed7aa,
    #ffedd5, #fff7ed); app CTA band bg-primary-600; hero bg-gray-950.
  - Neutrals: gray scale — #f3f4f6 → #030712.
  - Fonts: **"Outfit"** (display) + **"Inter"** (body) via Google Fonts.
  - Shapes: rounded cards, pill buttons, sale badges; section padding
    `py-20 lg:py-28`.
- **Recreation name:** Solestyle (kept — matches ColorLib name; store brand
  "Stride" per demo). App folder `apps/solestyle`, package
  `@free-react-templates/solestyle`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/solestyle-<n>/<w>/<h>`); lucide-react icons (Truck,
  RotateCcw, Ruler, ShieldCheck, Star, ShoppingCart, Heart, ChevronRight,
  Sparkles, Mail, Smartphone, Apple); Outfit + Inter via Google Fonts;
  repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-solestyle/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/solestyle` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/solestyle`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-solestyle`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
