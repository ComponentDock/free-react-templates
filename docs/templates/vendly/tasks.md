# Vendly (ColorLib Shoppers) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-vendly`.

## Design notes (replication findings)

- **Original:** ColorLib "Shoppers" —
  `https://colorlib.com/wp/template/shoppers/` (Bootstrap category).
  TEMPLATES.md lines **493, 1602, 1729** — THREE duplicate rows, all
  `- [ ]`; mark ALL THREE `[x]` when done. Recreation uses the NEW name
  **Vendly** (single word, no collision with `ls apps/` or spec folders;
  "vendly" appears nowhere in TEMPLATES.md).
- **Preview URL:** `https://preview.colorlib.com/theme/shoppers/` — **HTTP
  200** (19.3 KB), analyzed live. Stylesheets: `css/style.css` (22.8 KB,
  all custom tokens) + customized bootstrap (`.btn-primary` =
  `#7971ea`/`#fff`, `.text-primary` = `#7971ea`, `.bg-light` = `#f8f9fa`)
  - icomoon icon font + owl.carousel (drives the featured-products row
    only). Font **Mukta** (300/400/700) is loaded via cf-fonts @font-face in
    the head — recreate with a Google Fonts `<link>`.
- **Screenshot / visual design** (`shoppers-free-template.jpg`, verified
  via browser vision): minimalist clean e-commerce aesthetic on white.
  Hero: soft mint/cyan background block with navy-blue canvas sneakers
  (white soles) left; "Finding Your Perfect Shoes" + lorem + violet SHOP
  NOW right. Violet `#7971ea` accents: SHOP NOW button, active HOME nav
  link, bordered "SHOPPERS" logo, Free Shipping truck icon. Perks strip
  below: truck / circular-arrow / question-mark icons with uppercase
  headings. Footer not visible in the screenshot — taken from the live DOM.
- **Sections (from the live DOM, in order):** top utility bar (search /
  bordered logo / user-heart-cart icons with "2" badge) → uppercase nav
  (Home+About dropdowns, Shop, Catalogue, New Arrivals, Contact) →
  full-height photo hero (right copy, Shop Now) → perks strip (Free
  Shipping / Free Returns / Customer Support) → collections (Women /
  Children / Men image cards) → Featured Products band (`bg-light`, 5
  product cards, violet `$50`) → Big Sale! split (rounded image left,
  "50% less in all items" + meta + Shop Now right) → footer (Navigations
  3 link columns / Promo / Contact Info / Subscribe form / copyright bar).
- **Notable quirks:** the featured-products row is an owl carousel — a
  5-card horizontally scrollable row is acceptable. Nav dropdowns are
  hover menus (Home: Menu One/Two/Three + Sub Menu nested; About: Menu
  One/Two/Three). Search input + subscribe form have no backend —
  client-side only; show a success state on subscribe. No social brand
  icons anywhere (credit line only). Count badge is a static "2". Buttons
  are **sharp-cornered** (radius 0), uppercase, letter-spaced; hover lifts
  (`top: -2px`) with a dark shadow. Body copy is weight 300 in gray
  `#8c92a0` — keep the light weight for fidelity.

## Build order (implementer)

1. **Scaffold** — copy the simplest existing app (e.g. `apps/altruist`),
   rename package to `@free-react-templates/vendly`, add Google Fonts
   Mukta 300/400/700 link, set `@theme` tokens: `--color-brand: #7971ea`,
   `--color-ink: #25262a`, `--color-body: #8c92a0`, band `#f8f9fa`,
   border `#edf0f5`.
2. **Top bar** — 3-col row: search (lucide `search` + input, placeholder
   "Search") left; bordered uppercase logo "Vendly" center; `user`, `heart`,
   `shopping-cart` icons + violet 24px circular badge "2" right; mobile
   hamburger.
3. **Nav** — uppercase 15px links, `#25262a`, hover `#7971ea`; Home and
   About with accessible dropdowns; mobile slide-in menu (aria-expanded,
   Escape to close).
4. **Hero** — full-height cover background (picsum seed `vendly-1` —
   VERIFY it renders a shoe/fashion subject, see seed screening below),
   right-aligned `col-md-5` copy: 50px weight-900 `#000` h1 "Finding Your
   Perfect Shoes", 20px `#333` lorem, violet "Shop Now" btn-sm.
5. **Perks** — 3 cols, lucide `truck` / `rotate-ccw` / `help-circle` in
   violet + uppercase 18px headings; `border-b #edf0f5`.
6. **Collections** — 3 image cards (women/children/men) with bottom black
   gradient (`transparent → rgba(0,0,0,0.8)`), white 12px "Collections"
   label + 40px name; hover image scale 1.1.
7. **Featured products** — `#f8f9fa` band, centered heading with violet
   40×2px top bar; 5 white cards (shadow `0 0 30px -10px rgba(0,0,0,0.1)`):
   Tank Top / Corater / Polo Shirt / T-Shirt Mockup / Corater, taglines,
   `$50` in `#7971ea` bold; horizontally scrollable row.
8. **Big Sale** — heading; rounded image left; right: h2 "50% less in all
   items", meta "By Carl Smith • September 3, 2018" (`#c4c7ce`, • separated
   with margins), lorem, "Shop Now" btn.
9. **Footer** — Navigations (3 link columns, `#5c626e` hover `#7971ea`),
   Promo card (image + "Finding Your Perfect Shoes" + "Promo from January
   15 — 25, 2019"), Contact Info (address / phone / email), Subscribe form
   (email input + "Send", success state), centered copyright credit line.
10. **Docs/bookkeeping** — `[x]` all THREE TEMPLATES.md rows (493, 1602, 1729) with the surge URL; `npm run readme:status`; PR description with
    source slug, preview URL, tokens, renames.

## Seed screening (picsum placeholders)

Picsum seeds are arbitrary photos — the hero (sneakers) and collection
subjects are part of the design, so verify before shipping:

1. `curl -L https://picsum.photos/seed/vendly-1/480/270 -o /tmp/v1.jpg` etc.
2. Rank candidates deterministically (bright/blue sky metric or fashion
   subject check) and browser-verify the top pick at full res (single
   image, one call — do not trust a montage).
3. If the default seed is wrong, pin a descriptive seed that provably
   renders the right scene (e.g. a shoes/sneakers shot) and update the
   spec + docs together.
