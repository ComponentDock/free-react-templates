# Treadly (ColorLib Solestyle) — Tasks & Design Notes

> **SHIPPED** — this prep's design shipped as `apps/treadly`
> (<https://treadly.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

> Recreation of ColorLib "Solestyle"
> (https://colorlib.com/wp/template/solestyle/) under the NEW name
> **Treadly** (a playful nod to shoe treads), per the monorepo naming
> mandate (never reuse the ColorLib source name — the stale prep at
> `openspec/specs/template-solestyle/` was deleted, see spec NOTE).

## Design notes (replication findings)

- **Original:** ColorLib "Solestyle" — footwear / sneaker store landing
  template (Astro category). Demo's internal store brand is "Stride";
  the recreation brands itself **Treadly**.
- **Demo DOM analyzed:** `https://solestyle-colorlib.pages.dev/` (HTTP
  200, ~93 KB HTML + `/_astro/Base.B5hAE-Ox.css` ~54 KB parsed for
  tokens; the official `https://preview.colorlib.com/theme/solestyle/`
  returned 404 at prep time — demo was hosted on Cloudflare Pages, same pattern as
  Serenite→Sooth / Saasify→Zenith, confirmed via
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md
  screenshot (`solestyle-template-1770211411401.jpg`, HTTP 200) matches
  the live demo: dark hero, orange running shoe on a light gradient
  disc, orange accents, product grid.

✅ **Pointer status — live reference re-probed 2026-10-13d (bot wall
lifted):** the demo is served by the ColorLib preview host —
`https://preview.colorlib.com/theme/solestyle/` answers **HTTP 200**,
103,427 B `text/html; charset=utf-8` (92,942 B, sha256 `088004117492…` after
stripping the injected print-media `@font-face` block and the Insights
beacon); its stylesheet
`https://preview.colorlib.com/theme/solestyle/_astro/Base.JnIPZxPi.css` is
54,072 B sha256 `25a4fa332406…`; 12 of the 13 hex tokens recorded below are
present in it and the remaining 1 are absent from both the live sheet and
the live page — re-check the token table before reusing them (the sheet's
Astro hash differs from the mirror's prep-time `Base.B5hAE-Ox.css` — a
rebuild). The Cloudflare Pages mirror `https://solestyle-colorlib.pages.dev`
is still **NXDOMAIN** (re-checked 2026-10-13d). ⚠️ `apps/treadly` was built
from the mirror's tokens before the migration, so it follows the mirror, not
today's preview host.
- **Visual design (live render):** energetic sneaker store on a dark
  hero (gray-950) with a bold **orange** brand (`#f97316`/`#ea580c`),
  Outfit display + Inter body fonts, rounded product cards with star
  ratings and "Add to Cart" pills, gray-100/white alternating light
  sections, dark testimonials + footer, orange app-CTA band.
- **Structure (1:1, section order):**
  1. Promo bar (dark): "Free shipping on orders over $75" + "Use code
     STRIDE20 for 20% off your first order".
  2. Sticky navbar (white/95 blur, border-b): "Stride" logo + Shop,
     Categories, New Arrivals, Sale, About; cart count + Wishlist +
     "My Account"; mobile hamburger.
  3. Hero (bg-gray-950): H1 "Step Into Your Best", blurb, trust row
     (4.9 stars, 300+ styles, free shipping, easy returns), "Shop Now"
     - "Browse Categories", hero sneaker image on gradient disc.
  4. Shop by Category: 6 cards — Running 48, Sneakers 86, Basketball
     32, Casual 64, Boots 28, Sandals 24 (+ "Shop Now" link each).
  5. Featured Collection: 7 products — Velocity Runner Pro, Streetwise
     Classic, Court Dominator X, Trail Blazer GTX, Marathon Elite,
     Cloud 9 Recovery, Court Legacy Low (+ "View All Featured").
  6. Service bar: Free Shipping / 60-Day Returns / Size Guarantee /
     Secure Checkout (icon + title + blurb).
  7. New Arrivals: 4 cards — Court Dominator X, Summer Slide Sport,
     Marathon Elite, Cloud 9 Recovery (+ "Shop New Arrivals").
  8. Testimonials (bg-gray-950): "What Our Customers Say" — 3 quotes
     (Marathon Runner, Fitness Instructor, Sneaker Enthusiast) + stats
     row (500K+ pairs shipped, 4.9/5, 120+ brands, 98% recommend).
  9. App CTA (bg-primary-600): "Ready to Step Up Your Game?" — 15% off
     - App Store / Google Play buttons + phone mockup.
  10. Newsletter: "Join the Treadly Club" — 15% off + email input +
      "Subscribe".
  11. Footer (bg-gray-950): "Treadly" blurb + socials; SHOP (New
      Arrivals, Sale, Categories, Gift Cards) / HELP (FAQ, Shipping &
      Returns, Size Guide, Contact Us, Track Order) / ABOUT (Our Story,
      Sustainability, Athletes, Careers, Store Locator); copyright +
      Privacy / Terms.
- **Design tokens extracted from the live CSS + DOM (verified
  2026-08-09):**
  - Brand colors: **orange scale** — #f97316 (500, main accent),
    #ea580c (600 primary / app CTA band), dark #c2410c, #9a3412,
    #7c2d12, #431407; light #fb923c, #fed7aa, #ffedd5, #fff7ed.
  - Neutrals: #030712 (gray-950 hero/testimonials/footer), #f3f4f6
    (gray-100 light sections), #111827 (dark text/cards).
  - Fonts: **"Outfit"** (display) + **"Inter"** (body) via Google Fonts
    (`family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800`).
  - Shapes: pill buttons (rounded-full), cards rounded-xl/2xl/3xl,
    sale badges, `--radius-lg`; section padding `py-20 lg:py-28`
    (`py-24` variants).
  - Dark mode: `.dark` on root, toggle in navbar, persisted to
    localStorage; hero/dark sections are gray-950 in both modes.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/treadly-<n>/<w>/<h>`); lucide-react icons (Truck,
  RotateCcw, Ruler, ShieldCheck, Star, ShoppingCart, Heart, ChevronRight,
  Sparkles, Mail, Smartphone, Apple, Menu); Outfit + Inter via Google
  Fonts; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Rename demo brand "Stride" → "Treadly" everywhere (logo wordmark,
  promo code paraphrase, "Join the Treadly Club"). Product names and
  copy kinds stay the same kind of content; text may be paraphrased.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn) — apps MUST
  import these from `packages/ui` or knip/CI deploy fails.

## Tasks

- [ ] Implementer: copy the simplest existing app → `apps/treadly`
      (package `@free-react-templates/treadly`), wire the Tailwind v4
      theme tokens per the spec.
- [ ] Implementer: write tests (red) per spec scenarios, then
      implementation (green) — 100% coverage (vitest + Testing Library).
- [ ] Sections in order: promo bar, navbar, hero, shop by category,
      featured collection, service bar, new arrivals, testimonials,
      app CTA, newsletter, footer.
- [ ] Hero: dark gray-950, headline, trust row, two CTAs, sneaker image
      (picsum seed). Category cards 6-up with counts.
- [ ] Product cards: image, name, price, star rating, Add to Cart pill.
      Featured = 7 cards; New Arrivals = 4 cards.
- [ ] Testimonials: dark section, 3 quote cards + stats row.
- [ ] App CTA: bg-primary-600 band, 15% offer, App Store / Google Play
      buttons, phone mockup.
- [ ] Newsletter form: heading "Join the Treadly Club", email input +
      Subscribe (client-side only).
- [ ] Footer: 3 link columns + socials + copyright; landmarks
      banner/main/contentinfo; document title "Treadly — Sneaker Store".
- [ ] `scripts/verify-app.sh treadly` until green (typecheck + lint +
      vitest 100% + build).
- [ ] Implementer: mark `[~]` → `[x]` in TEMPLATES.md + surge URL,
      `npm run readme:status`, PR + immediate squash merge.

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/treadly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/treadly/public/CNAME` = `treadly.free.componentdock.com`
  and the package `homepage` = `https://treadly.free.componentdock.com`.
