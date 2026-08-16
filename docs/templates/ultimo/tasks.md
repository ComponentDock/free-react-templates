# Ultimo (ColorLib Bootstrap Footer 15) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-ultimo`.

## Design notes (replication findings)

- **Original:** ColorLib "Bootstrap Footer 15" — free responsive Bootstrap
  4.3.1 footer-component demo (source:
  https://colorlib.com/wp/template/bootstrap-footer-15/). TEMPLATES.md line
  791, single `- [ ]` row. This prep: Bootstrap Footer 15 → **Ultimo**.
  Bookkeep that row `[x]` when the app ships.
- **Preview URL quirk (series-wide):**
  `https://preview.colorlib.com/theme/bootstrap-footer-15/` returns 404. Use
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-15/` (lives under
  the `/theme/bft/` prefix — NOT `/theme/bootstrap/`). Returns HTTP 200
  (13,265 bytes), `<title>Footer 05</title>`.
- **Fidelity references (all verified 2026-08-16):**
  - Live DOM: `https://preview.colorlib.com/theme/bft/bootstrap-footer-15/`
    (curl, HTTP 200)
  - Tokens: `css/style.css` (223,683 bytes; `.footer-05` block + shared FTCO
    helpers)
  - Screenshot: `bootstrap-footer-15.jpg` (1200×972 AVIF, viewed in browser —
    matches live DOM, NO variance; only the JS copyright year differs: static
    capture shows 2021, live shows the current year)
- **Design summary:** GREEN variant of the footer series — medium-green
  `#68983b` band (NOT the charcoal of footer-04/14), lighter-green `#75aa42`
  divider lines, TWO accents: pale-yellow `#fff8a1` (all links, logo
  subtitle, news headings, stars, social hover border) + lighter-green
  `#81ba4c` (social borders, input border, submit button). **Poppins**
  typeface (body 15px/1.8, headings 400/1.5) — NOT Nunito Sans. Footer
  `padding: 4em 0` (overrides base 7em). White filler (`padding: 12em 0`)
  labels "Footer #05". THREE stacked rows: bordered top row (two-tone logo +
  3 CIRCULAR social chips), FOUR columns (Brand/Contact · Latest News · Best
  Sellers · Instagram), bordered bottom bar (copyright + "made with ♥" —
  **NO legal links in this variant**). Headings are 20px white weight 400 —
  NOT uppercase, NO underline (contrast with footer-04's 13px uppercase).
  Social chips are CIRCLES (base radius 50% NOT overridden) with 1px green
  borders, unlike footer-04's squares. Subscribe button is a 52×52 `#81ba4c`
  ICON button (paper-plane + sr-only "Submit"), not a text button.
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict); Vitest +
  Testing Library 100% coverage; packages/ui `cn()`.

## Structure order (1:1 with source DOM)

1. **Filler section** — `section.ftco-section` (`padding: 12em 0`, white, no
   bg) → centered `h2` "Footer #05" (`mb-0`). Recreation: demo label may be
   the template's own name.
2. **Footer band** — `footer.footer-05` (`background: #68983b`, `padding:
4em 0 !important` — overrides base `footer { padding: 7em 0 }`) →
   `div.container`:
   - **Top row** — `div.row.border-bottom.mb-5.pb-4.align-items-center`
     (border `#75aa42`):
     - Left `col-md-6 mb-md-0 mb-4` → `h2.logo` → `a` **"Colorlib"** (28px,
       white, line-height 1.2) + `span` **"Free Templates"** (14px, block,
       `#fff8a1`; recreation may use its own brand name)
     - Right `col-md-6 mb-md-0 mb-4 text-md-right` →
       `ul.ftco-footer-social.p-0.mb-0` → THREE `li.ftco-animate` → `a`
       (title Twitter / Facebook / Instagram) → `span.ion-logo-*`: 40×40
       **CIRCULAR** chips (`border-radius: 50%` base NOT overridden;
       `background: transparent`, `border: 1px solid #81ba4c`, hover border
       `#fff8a1`), centered white 20px glyphs, `margin: 0 10px 0 0`.
       **NO Linkedin in this variant.**
   - **Main row** — `div.row` → FOUR `col-md-6 col-lg-3 mb-md-0 mb-4`:
     - **Col 1 — Brand/Contact:** `h2.footer-heading` **"Colorlib"** (20px,
       white, 400, mb 30px) → `div.block-23.mb-3` → `ul` (table-cell layout,
       40px/18px icon column, mb 15px, all `rgba(255,255,255,.5)`):
       - `li` → `span.icon.ion-ios-pin` + `span.text` **"203 Fake St.
         Mountain View, San Francisco, California, USA"** (no link)
       - `li` → `a` → `span.icon.ion-ios-call` + `span.text` **"+2 392 3929
         210"**
       - `li` → `a` → `span.icon.ion-ios-send` + `span.text`
         **"info@yourdomain.com"**
         → `form.subscribe-form` (action "#", no handler — static) →
         `div.form-group.d-flex` (mb 0):
       - email `input.form-control.rounded-left` — square edges,
         `background: rgba(0,0,0,.05)`, **`border: 2px solid #81ba4c`**,
         15px, text `rgba(255,255,255,.4)`, placeholder **"Enter email
         address"**, 52px tall, no focus shadow; add visually-hidden label /
         aria-label
       - `button.form-control.submit.rounded-right` (type submit) — **52×52**,
         `background: #81ba4c`, white, square edges; contains
         `span.sr-only` **"Submit"** + `i.ion-ios-send` (paper-plane; lucide
         `Send` — probe it). ICON button, NOT a text button.
     - **Col 2 — Latest News:** `h2.footer-heading` **"Latest News"** → TWO
       `div.block-21.mb-4.d-flex` (identical copy):
       - `a.img.mr-4.rounded` — 80×80 bg image (`image_1.jpg` /
         `image_2.jpg` → picsum `ultimo-1` / `ultimo-2`)
       - `div.text` → `h3.heading` → `a` **"Even the all-powerful Pointing
         has no control about"** (16px, 400, 1.4, `#fff8a1`) → `div.meta` →
         THREE inline `div` (12px, mr 5px, `rgba(255,255,255,.5)`):
         `span.icon-calendar` **"Oct. 16, 2019"**, `span.icon-person`
         **"Admin"**, `span.icon-chat` **"19"** (lucide `Calendar` / `User`
         / `MessageCircle` — probe them)
     - **Col 3 — Best Sellers:** `h2.footer-heading` **"Best Sellers"** →
       `div.row` → `div.col-md-12` → `div.featured`:
       - `a.img.rounded.mb-3` — **100% × 150px** bg image (`prod-1.jpg` →
         picsum `ultimo-3`)
       - `div.text` → `h3` → `a` **"Grilled Beef with potatoes"** (16px,
         `#fff8a1`) → `p.rate` → FIVE `a` → `span.ion-ios-star` (lucide
         `Star` ×5, `#fff8a1`)
     - **Col 4 — Instagram:** `h2.footer-heading` **"Instagram"** →
       `div.block-24` → `div.row.no-gutters` → SIX `div.col-4.col-md-4` →
       `a.img` (**100% × 100px**, bg `insta-1.jpg`…`insta-6.jpg` → picsum
       `ultimo-4`…`ultimo-9`) — 3×2 grid, 3-across at ALL breakpoints; each
       cell a link with accessible name
   - **Bottom bar** — `div.row.mt-5.pt-4.border-top` (`border-color:
#75aa42` — SAME green band bg, NO darker strip):
     - Left `col-md-6 col-lg-8` → `p.copyright` (text `rgba(255,255,255,.5)`):
       "Copyright © <current year> All rights reserved."
     - Right `col-md-6 col-lg-4 text-md-right` → `p.copyright`: "This
       template is made with ♥ by **Component Dock**" — heart `aria-hidden`
       (lucide `Heart` or ♥ text), Component Dock link MUST point to
       `https://www.componentdock.com/` (per convention; NO ColorLib
       reference anywhere in `apps/ultimo`)
     - **NO Terms/Privacy/Compliances legal links in this variant**

## Section-by-section fidelity notes

- **Filler:** white with `12em 0` rhythm — the footer is the deliverable;
  the filler is demo scaffolding. `mb-0` on the centered h2.
- **Footer band:** the ONLY colors are `#68983b` bg, `#75aa42` dividers,
  `#fff8a1` link accent, `#81ba4c` secondary accent, and
  `rgba(255,255,255,.5/.4)` muted text. No gradients, no full-bleed images.
  GREEN variant (contrast with Omega/footer-14's charcoal + Capstone/footer-13's
  pale rose).
- **Font:** **Poppins** (body 15px/1.8; headings weight 400/1.5) — NOT Nunito
  Sans (Omega/footer-14) and NOT 600-weight headings. Load 400 via Google
  Fonts `<link>` (300–900 available; 400 suffices).
- **Headings:** 20px white weight 400 `mb-30px` — larger than footer-04's
  13px uppercase 600; NO `:after` underline in this variant. `.footer-heading`
  has no letter-spacing and no text-transform.
- **Top row:** logo is TWO lines (28px white + 14px block pale-yellow). The
  `border-bottom` divider is `#75aa42` (lighter green) — NOT white/transparent.
- **Social chips:** CIRCLES not squares (`.footer-05` does NOT override the
  shared `border-radius: 50%` — contrast with footer-04's `4px` squares),
  transparent bg with `1px solid #81ba4c` border, hover border flips to
  `#fff8a1`, WHITE glyphs. THREE only: Twitter, Facebook, Instagram.
- **Newsletter:** square edges everywhere (`border-radius: 0`). Input has a
  **2px `#81ba4c` border** (unusual — most variants use no border) and a
  `rgba(0,0,0,.05)` translucent bg. Button is 52×52 `#81ba4c` square with a
  paper-plane ICON + sr-only "Submit" — not a text button. Form has no JS
  handler in source — a static form suffices, but add the label for a11y
  (bare placeholder in source).
- **News rows:** 80×80 rounded thumbs (flex), text block `calc(100% - 100px)`,
  16px/1.4 pale-yellow headings, 12px meta with 3 inline items. Both rows use
  identical copy in the source — keep the same kind of content (paraphrase
  allowed).
- **Featured product:** full-width 150px-tall rounded image; title 16px
  pale-yellow; FIVE stars pale-yellow (they inherit `#fff8a1` from
  `.footer-05 a`, NOT gold).
- **Instagram grid:** 3×2 at ALL breakpoints (`col-4` even on mobile),
  `no-gutters`, 100px-tall square cells. Each cell is a link — give them
  accessible names (the source has bare links).
- **Bottom bar:** same green band — the `border-top` divider is `#75aa42`
  (contrast with footer-04's `#1a1a1a` darker bar). Copyright text
  `rgba(255,255,255,.5)`. The right side carries the "made with ♥" line —
  **there are NO Terms/Privacy/Compliances links in this variant** (unlike
  footer-04/14).
- **Responsive:** top row `col-md-6` + `col-md-6 text-md-right` (stacked
  below md, socials then left-aligned); FOUR `col-md-6 col-lg-3` main columns
  — stacked below md (`mb-4` gaps), 2×2 on md, 4-across on lg+; bottom bar
  8/4 split on md+. Instagram grid stays 3-across always. No order flips, no
  horizontal overflow.

## Implementation tasks (TDD)

1. [ ] Scaffold `apps/ultimo` (copy simplest existing app; package
       `@free-react-templates/ultimo`; `public/CNAME` =
       `ultimo.free.componentdock.com`; homepage
       `https://ultimo.free.componentdock.com`; `injectUiSource()` in
       vite.config.ts; MemoryStorage polyfill in test setup if jsdom 30)
2. [ ] `npm install` at root so package-lock.json registers the workspace
3. [ ] `src/index.css`: `@theme` tokens — `--color-leaf: #68983b`,
       `--color-leaf-light: #75aa42`, `--color-lime: #81ba4c`,
       `--color-butter: #fff8a1`; Poppins via Google Fonts `<link>` in
       `index.html` (400)
4. [ ] Components (colocated tests, scenario-style per spec): `Filler` (demo
       label), `Footer` (band + container), `TopBar` (two-tone logo +
       `SocialChips`), `ContactColumn` (heading + block-23 contact list +
       `SubscribeForm`), `NewsColumn` (2 rows with thumbnail/heading/meta),
       `BestSellersColumn` (featured image + title + 5 stars),
       `InstagramGrid` (6 square linked cells), `BottomBar` (copyright +
       heart + Component Dock link)
5. [ ] `src/App.tsx` composes Filler + Footer; document title "Ultimo —
       Footer"
6. [ ] Run `npm run verify:app ultimo` until green (typecheck + lint +
       knip + fallow + 100% coverage + build)
7. [ ] Commit `feat: Ultimo — footer component demo (ColorLib Bootstrap
    Footer 15)`; PR + immediate squash merge; then TEMPLATES.md line 791
       `[~]`→`[x]` + surge URL + homepage + `npm run readme:status`, push

## Verification (pre-merge, from the spec)

- [ ] `verify:app ultimo` green (100% coverage)
- [ ] Filler white `12em 0` + centered label; footer `#68983b` `4em 0`;
      Poppins; main + footer landmarks
- [ ] Top row: `#75aa42` border-bottom; logo 28px white + 14px `#fff8a1`
      subtitle; THREE CIRCULAR 40×40 chips (transparent bg, `#81ba4c` border,
      hover `#fff8a1`, white glyphs, aria-labels)
- [ ] Contact: heading "Colorlib" 20px white 400 mb 30px; 3-item list
      `rgba(255,255,255,.5)` (pin address no-link, call phone, send email);
      subscribe form — input `rgba(0,0,0,.05)` 2px `#81ba4c` border 15px
      placeholder "Enter email address" + 52×52 `#81ba4c` icon button
      (paper-plane, sr-only "Submit")
- [ ] Latest News: 2 rows — 80×80 rounded thumb (picsum 1-2), 16px `#fff8a1`
      heading, 12px meta (Oct. 16, 2019 / Admin / 19)
- [ ] Best Sellers: 150px featured image (picsum 3), 16px `#fff8a1` title, 5
      `#fff8a1` stars
- [ ] Instagram: 6 cells 3×2 no-gutter, 100px tall, 3-across all breakpoints
      (picsum 4-9), linked with accessible names
- [ ] Bottom bar: `#75aa42` border-top on same green band; copyright left;
      "made with ♥ by Component Dock" right (heart aria-hidden, Component
      Dock link); NO legal links; no ColorLib strings in apps/ultimo
- [ ] Responsive: top 6/6 (stacked <md), 4×col-lg-3 (2×2 md, stacked <md),
      bottom 8/4; insta 3-across always; no h-scroll
