# Trolley (ColorLib Dropdown 05) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-trolley`.

## Design notes (replication findings)

- **Original:** ColorLib "Dropdown 05" — fifth of the "Bootstrap Dropdowns
  (20)" series (source: https://colorlib.com/wp/template/dropdown-05/).
  TEMPLATES.md has ONE copy (line 758). Series siblings: Dropdown 01 was
  prepped as **Menubar**, Dropdown 02 as **Popmenu**, Dropdown 03 as
  **Skycast**, Dropdown 04 as **Chime** (see `docs/templates/menubar/`,
  `docs/templates/popmenu/`, `docs/templates/skycast/`,
  `docs/templates/chime/`).
- **Demo DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bootstrap/dropdown-05/`
  (HTTP 200, 15.7 KB). IMPORTANT: the naive
  `https://preview.colorlib.com/theme/dropdown-05/` returns 404 — the
  dropdown demos live under the `/theme/bootstrap/` subpath (the ColorLib
  template page links the correct preview). Stylesheet: `css/style.css`
  (222 KB ftco-style Bootstrap 4 theme; the template-specific rules are the
  LAST ~90 lines, ~8135+), libs: jquery, popper, bootstrap.min.js,
  ionicons 4.5.6. Google Font **Roboto** (weights 400/500/700) via
  Cloudflare `/cf-fonts/s/roboto/` @font-face block — SAME font as Chime
  (Dropdown 04); do NOT copy Poppins from Skycast.
- **Screenshot:** `dropdown-05.jpg` (1200×972, viewed in browser) — flat
  very-light-gray page (`#fafafa`), centered dark heading "Dropdown #05",
  salmon-pink cart bar with "Cart [3]" white text on the left and a white
  cart icon on the right (deeper-pink 60×60 split square), menu OPEN
  directly below: white card with soft shadow, three product rows (shoe
  thumbnails, name, pink price, gray quantity), bottom-center "VIEW ALL →"
  in pink. The screenshot shows the menu in its default (open) state —
  matches CSS exactly. No footer in the source.
- **Visual design (DOM + CSS tokens + screenshot):** minimalist
  component-showcase page. Body bg `#fafafa`, Roboto base 18px/1.8.
  Section `padding: 7em 0`; container max-width 1140px. Heading
  `.heading-section` 28px **#000** (black — unlike Chime's white-on-
  periwinkle), `mb-5 pb-md-4` margins.
- **Cart bar** `div.btn-group.justify-content-between.align-items-center`
  (Bootstrap base keeps `position: relative; display: inline-flex`):
  `min-width: 25rem` (400px), `background: #fa697c`, `border-radius: 4px`,
  `padding-left: 20px`. Left: `p.text-left.mb-0.heading` "Cart [3]" in
  WHITE (`[3]` is a `span`). Right: the trigger
  `a.split.dropdown-toggle.dropdown-toggle-split.d-flex.align-items-center.justify-content-center`
  — 60×60, `background: #f83851`, `border-radius: 0 4px 4px 0`, white
  `ion-ios-cart` icon (`span.icon`), hover/focus `#f95066`. Bootstrap caret
  suppressed (`.dropdown-toggle::after { display: none }`) — NO caret on
  the trigger. `aria-haspopup="true"`, `aria-expanded="false"`.
- **Menu card** `.btn-group .dropdown-menu`: `min-width: 25rem` (400px;
  22rem on ≤767.98px), border none, bg #fff, padding 0, `margin-top: 80px`
  (NOTE: 80px — NOT 60px like Chime), centered under the bar
  (`left: 50% !important; transform: translateX(-50%) !important`),
  shadow `0 10px 34px -20px rgba(0,0,0,.41)`, caret near top-RIGHT
  (`right: 20px`; `.dropdown-menu:after` `top: -.7em`, `border-width:
0 .7em .8em .7em`, `border-bottom-color: #fff`; `:before` duplicate at
  `top: -.8em`, `border-bottom-color: rgba(0,0,0,.02)` casts a soft shadow;
  both `z-index: -1`). NOTE: caret is top-RIGHT, NOT top-center (Chime
  differs!).
- **Rows** `div.dropdown-item.d-flex.align-items-start` (16px,
  `rgba(0,0,0,.7)`, weight 400, `padding: 20px`, `border-bottom: 1px solid
rgba(0,0,0,.05)` — last row none, `white-space: normal`, hover
  `background: transparent`):
  - `div.img` 60×60 square (`background-size: cover`) — product photo in
    the original (footwear); use deterministic placeholders.
  - `div.text.pl-3` (`width: calc(100% - 60px)`, `pl-3` = 12px gap):
    `h4` = product name (18px, weight 500, `rgba(0,0,0,.8)`,
    `margin-bottom: 0`); then `p.mb-0` with the price as an `<a href="#">`
    (pink `#fa697c`) + `span.quantity.ml-3` "Quantity: NN"
    (`rgba(0,0,0,.3)`).
  - Order + copy (verbatim from the DOM):
    1. Casual Shoes X340 — $25.99 — Quantity: 01 (tan casual sneakers)
    2. Sport Shoes N700 — $30.89 — Quantity: 02 (blue athletic sneakers)
    3. Casual Shoes ADS20 — $22.50 — Quantity: 01 (dark casual sneakers)
    (The screenshot's third price reads ~$22.95 at thumbnail size but the
       DOM says `$22.50` — DOM wins.)
- **Footer row** `div.dropdown-item.text-center.btn-link`: "View All" +
  `i.ion-ios-arrow-round-forward` — uppercase, 13px, weight 500, color
  `#fa697c` (the ftco brand link color, also on plain `a` tags).

## Implementation tasks (TDD, in order)

1. **Scaffold** `apps/trolley` (copy the simplest existing app, e.g. the
   Chime app; rename package to `@free-react-templates/trolley`; add
   `public/CNAME` = `trolley.free.componentdock.com`, `"homepage"` =
   `https://trolley.free.componentdock.com`). Run `npm install` at the repo
   root and verify `grep -c "free-react-templates/trolley" package-lock.json`.
2. **Setup** `src/test/setup.ts` (jest-dom; copy the MemoryStorage polyfill
   from an existing app's setup if jsdom 30 lacks `localStorage`),
   `src/index.css` with `@theme` tokens: `--color-brand: #fa697c`,
   `--color-accent: #f83851` (split button, hover `#f95066`), page bg
   `#fafafa`, Roboto font stack via Google Fonts `<link>` in `index.html`.
   Register `injectUiSource()` in `vite.config.ts` (copy the pattern from
   any existing app — never use a relative `@source`).
3. **App shell + tests** — `App.tsx` composes `<DemoSection />` + `<Footer />`;
   document title "Trolley — Shopping Cart Dropdown" (see spec). Tests: full
   page render, heading, footer Component Dock link.
4. **DemoSection + tests** — the `ftco-section` equivalent: heading
   "Dropdown #05" (black, centered, Roboto), the 400px salmon bar with
   white "Cart [3]" label left + 60×60 `#f83851` split trigger right
   (white `ShoppingCart` icon, radius `0 4px 4px 0`), 400px white menu card
   with top-right caret, `aria-haspopup`/`aria-expanded`. Tests: render,
   open on click, close on outside click / Escape / item click,
   `aria-expanded` flips.
5. **CartItem + tests** — 60×60 thumbnail (`picsum.photos/seed/trolley-<n>/120/120`),
   name/price/quantity text block with the reference colors; row separators;
   keyboard focusable. Screen the picsum seeds for product-like subjects
   (the originals are footwear — see the replication skill's seed-screening
   method; a 60×60 thumb is forgiving but prefer a non-landscape seed).
6. **ViewAll row + tests** — centered uppercase "View All" + `ArrowRight`
   icon in `#fa697c`.
7. **Footer** — mandatory Component Dock link
   (`https://www.componentdock.com/`), no ColorLib references anywhere in
   app code (provenance lives only in the spec / TEMPLATES.md / PR).
8. **Gate + ship** — `npm run verify:app trolley` must pass (typecheck +
   lint + knip + fallow + 100% coverage + build); commit conventionally,
   open PR to main, merge immediately with `gh pr merge --squash
--delete-branch`, then bookkeeping: `[x]` + surge URL + homepage in
   TEMPLATES.md line 758 + `npm run readme:status`, push.

## Fidelity pitfalls (learned from the Dropdown series)

- **Preview URL:** always use the `/theme/bootstrap/` subpath for the
  Dropdown series; the naive URL 404s. Verify with curl before writing
  tokens.
- **Font is Roboto** (same as Chime/Dropdown 04 — not Poppins like
  Dropdown 03).
- **No trigger caret** — Bootstrap's `dropdown-toggle::after` is suppressed
  in the reference; only the menu card has a caret.
- **Caret is top-RIGHT** (`right: 20px`), NOT top-center like Chime —
  it sits roughly under the split button.
- **Menu `margin-top: 80px`** (Chime uses 60px — do not copy Chime's value).
- **The trigger is the 60×60 split button ONLY** — the "Cart [3]" label is
  a static `<p>`, not part of the button. The whole bar is
  `justify-content-between`: label left, split button right.
- **Menu is centered** under the bar (`left: 50%` + `translateX(-50%)`),
  NOT right-aligned like Dropdown 03's `dropdown-menu-right`.
- **Heading is BLACK on light gray** (`#000` on `#fafafa`) — the inverse of
  Chime's white-on-periwinkle. Do not transpose the palettes.
- **Menu item hover keeps `background: transparent`** (no hover fill on
  rows).
- **Product copy is verbatim** (names/prices/quantities above); the third
  price is `$22.50` per the DOM, not the screenshot's misread value.
