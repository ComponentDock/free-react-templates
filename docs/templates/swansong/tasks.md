# Swansong (ColorLib Bootstrap Footer 19) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-swansong`.

## Design notes (replication findings)

- **Original:** ColorLib "Bootstrap Footer 19" — free responsive Bootstrap
  4.3.1 footer-component demo (source:
  https://colorlib.com/wp/template/bootstrap-footer-19/). TEMPLATES.md line
  795, single `- [ ]` row. This prep: Bootstrap Footer 19 → **Swansong**.
  Bookkeep that row `[x]` when the app ships.
- **Preview URL quirk (series-wide):**
  `https://preview.colorlib.com/theme/bootstrap-footer-19/` returns 404. Use
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-19/` (lives under
  the `/theme/bft/` prefix — NOT `/theme/bootstrap/`). Returns HTTP 200
  (12,724 bytes), `<title>Footer 09</title>`.
- **Fidelity references (all verified 2026-08-16):**
  - Live DOM: `https://preview.colorlib.com/theme/bft/bootstrap-footer-19/`
    (curl, HTTP 200)
  - Tokens: `css/style.css` (223,848 bytes; `.footer-09` block + shared FTCO
    helpers) + `css/ionicons.min.css` (46,816 bytes)
  - Screenshot: `bootstrap-footer-19.jpg` (1200×972, viewed in browser —
    matches live DOM, NO variance; only the JS-written copyright year
    differs: static capture shows 2021, live shows the current year)
- **Design summary:** DARK variant of the footer series — a deep purple →
  violet gradient band (`linear-gradient(45deg, #2a1a5e 0%, #5126a7 100%)`,
  keeps the base `footer { padding: 7em 0 }`), FOUR `col-md-6 col-lg-3`
  columns: **About** (circular icon + contact rows + newsletter subscribe
  form with a square light-pink `#fe8ce3` button), **Latest News** (TWO
  80×80-thumbnail posts with 16px heading + 12px meta), **Information**
  (FIVE plain links, no bullets), **Instagram** (3×2 square tile grid). Then
  a `border-top` (`rgba(255,255,255,0.1)`) copyright bar with the two credit
  lines. **Poppins** typeface (body 15px/1.8, headings 400/1.5). Pink
  `#fe59d7` = all links + the 40px circular heading icons; light pink
  `#fe8ce3` = subscribe input border + submit button. NO social chips, NO
  contact form (contrast with footer-18/farewell); the ONLY interactive
  elements are the static subscribe form (`action="#"`, no JS handler) and
  the links.
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict); Vitest +
  Testing Library 100% coverage; packages/ui `cn()`.

## Structure order (1:1 with source DOM)

1. **Filler section** — `section.ftco-section` (`padding: 12em 0`, white, no
   bg) → `div.container` → `div.row.justify-content-center` →
   `div.col-md-6.text-center` → `h2` "Footer #09" (`mb-0`). Recreation: demo
   label may be the template's own name.
2. **Footer band** — `footer.footer-09` (`background: linear-gradient(45deg,
#2a1a5e 0%, #5126a7 100%)`; base `footer { padding: 7em 0 }` KEPT — this
   variant does NOT override it, unlike footer-08) → `div.container` →
   `div.row` → FOUR `div.col-md-6.col-lg-3.mb-md-0.mb-4`:
   - **About** — `h2.footer-heading.d-flex` → `span.icon.d-flex.align-items-center.justify-content-center`
     → `i.ion-logo-ionic` + **"About"** → `div.block-23.mb-3` → `ul` → THREE
     `li` (table-cell layout, `margin-bottom: 15px`):
     - `li` → `span.icon.ion-ios-pin` + `span.text` **"203 Fake St. Mountain
       View, San Francisco, California, USA"**
     - `li` → `a` → `span.icon.ion-ios-call` + `span.text` **"+2 392 3929
       210"**
     - `li` → `a` → `span.icon.ion-ios-send` + `span.text`
       **"info@yourdomain.com"**
     - (rows `rgba(255,255,255,0.5)`; icon column 40px wide, 18px glyph)
       → `form.subscribe-form` (`action="#"`) → `div.form-group.d-flex`:
     - `input.form-control.rounded-left` placeholder **"Enter email
       address"** — bg `rgba(0,0,0,0.05)`, `2px solid #fe8ce3` border,
       `border-radius: 0`, 16px, text `rgba(255,255,255,0.3)`
     - `button.form-control.submit.rounded-right` → `span.sr-only`
       **"Submit"** + `i.ion-ios-send` — 52×52, bg `#fe8ce3`, white, radius 0
   - **Latest News** — `h2.footer-heading.d-flex.align-items-center` →
     `span.icon` → `i.ion-ios-list-box` + **"Latest News"** → TWO
     `div.block-21.mb-4.d-flex`:
     - `a.img.mr-4.rounded` (80×80 bg-image cover; recreation: picsum seed)
     - `div.text` (`width: calc(100% - 100px)`) → `h3.heading` → `a` — title
       (source repeats "Even the all-powerful Pointing has no control about"
       TWICE — recreation uses TWO distinct headlines of the same kind; 16px
       400/1.4, `rgba(255,255,255,0.5)`)
     - `div.meta` → THREE `div` → `a` → `span.icon-calendar` **"Oct. 16,
       2019"** / `span.icon-person` **"Admin"** / `span.icon-chat` **"19"**
       (12px, `rgba(255,255,255,0.3)`, `margin-right: 5px`; the glyph classes
       are UNSTYLED in the source sheet — recreation may add lucide
       Calendar/User/MessageCircle glyphs or plain text)
   - **Information** — `h2.footer-heading.d-flex.align-items-center` →
     `span.icon` → `i.ion-ios-document` + **"Information"** →
     `ul.list-unstyled` → FIVE `li` → `a.py-1.d-block`: **"About"**,
     **"Products"**, **"Blog"**, **"Contact"**, **"Help & Support"**
     (`rgba(255,255,255,0.5)`, NO bullets)
   - **Instagram** — `h2.footer-heading.d-flex.align-items-center` →
     `span.icon` → `i.ion-logo-instagram` + **"Instagram"** →
     `div.block-24` → `div.row.no-gutters` → SIX `div.col-4.col-md-4.p-1` →
     `a.img.rounded` (width 100%, height 100px, cover; recreation: picsum
     seeds) — 3×2 grid
3. **Copyright bar** — `div.row.mt-5.pt-4.border-top` (`rgba(255,255,255,0.1)`):
   - `div.col-md-6.col-lg-8` → `p.copyright` **"Copyright © All rights
     reserved."** (JS writes the year in source; screenshot shows 2021 —
     recreation may render the current year)
   - `div.col-md-6.col-lg-4.text-md-right` → `p.copyright` **"This template
     is made with ♥ by Colorlib.com"** (heart `i.ion-ios-heart`,
     `aria-hidden`; Colorlib.com link `#fe59d7`; recreation: ♥ `aria-hidden`
     - Component Dock link per convention)

## Section-by-section fidelity notes

- **Filler:** white with `12em 0` rhythm — the footer is the deliverable;
  the filler is demo scaffolding. `mb-0` on the centered h2.
- **Footer band:** the ONLY saturated colors are the pink accents — all
  links `#fe59d7` (hover `rgba(255,255,255,0.9)`), the four circular heading
  icons (40×40, radius 50%, 1px `#fe59d7` border, pink glyph), and the
  subscribe input border + submit button `#fe8ce3`. Everything else is the
  white/rgba-white text scale on the dark gradient. Tailwind: `bg-[linear-gradient(45deg,#2a1a5e,#5126a7)]`
  (or two `@theme` colors + `bg-gradient-to-br`), `text-white` / `text-white/50`
  / `text-white/30`.
- **Font:** **Poppins** (body 15px/1.8; headings weight 400/1.5 — the FTCO
  headings rule `h1..h5 { line-height: 1.5; font-weight: 400; font-family:
"Poppins", ... }` overrides bootstrap's 500/1.2). Load 400 via Google
  Fonts `<link>` in `index.html`.
- **Headings:** `.footer-heading` 22px, `#fff`, `margin-bottom: 30px`,
  weight 400 — NOT uppercase, NO underline. Each has a leading circular icon
  (`margin-right: 10px`). Recreation: icon `aria-hidden` (decorative).
- **Contact rows (block-23):** table-cell two-column rows — icon column
  40px wide with an 18px glyph (`padding-top: 2px`), text column
  `vertical-align: top`; `line-height: 1.5`, `margin-bottom: 15px`. Address
  row is a bare `li` (not a link) — phone + email rows are links.
- **Subscribe form:** dark translucent input (`rgba(0,0,0,0.05)`) with the
  2px light-pink border and SQUARE corners (the source's `.rounded-left`/
  `.rounded-right` bootstrap radii are overridden to 0 by the `.footer-09`
  rules) — the input + 52×52 pink button sit side by side (`d-flex`).
  `border-radius: 0` matters — do NOT round the input/button. Source strips
  the focus outline — the recreation MUST add a visible focus-visible ring.
  The input placeholder is the only text — add a visually-hidden `<label>`
  or `aria-label` for a11y.
- **News posts (block-21):** `a.img` 80×80, `mr-4` (1.5rem) gap, `rounded`
  (0.25rem); text column `calc(100% - 100px)`; heading 16px 400/1.4; meta
  12px with `margin-right: 5px` inline-blocks. Source repeats the SAME title
  - meta on both posts — recreate TWO distinct news items (different
    headlines; vary date/author/comment counts sensibly).
- **Information:** FIVE plain block links (`py-1`) in `rgba(255,255,255,0.5)`
  — NO bullet glyphs (contrast with footer-06's checkmarks). Keep the same
  kind of utility links.
- **Instagram grid:** `row.no-gutters` → six `col-4` cells with `p-1`
  (0.25rem) padding; each tile a square link ~100px tall, `rounded`.
- **Copyright bar:** `mt-5 pt-4` (3rem/1.5rem) + `border-top`
  `rgba(255,255,255,0.1)`; left line full-width on xs, right line
  `text-md-right` on md+. Recreation: heart ♥ `aria-hidden`, "Component
  Dock" link → `https://www.componentdock.com/` (pink). NO ColorLib
  reference anywhere in `apps/swansong` (provenance lives only here +
  TEMPLATES.md + PR).
- **Mobile:** footer columns 2×2 on md (`col-md-6`), 4-across on lg+
  (`col-lg-3`); stacked full-width below md with `mb-4` gaps. Copyright bar
  side-by-side on md+, stacked on xs. No order flips, no horizontal
  overflow.
- **Images:** 2 news thumbs (80×80) + 6 instagram tiles — seeded picsum
  placeholders (`picsum.photos/seed/swansong-<n>/<w>/<h>`); verify each seed
  renders a suitable scene (news/people + food/square tiles) before pinning.

## Implementation tasks (TDD)

1. [ ] Scaffold `apps/swansong` (copy simplest existing app; package
       `@free-react-templates/swansong`; `public/CNAME` =
       `swansong.free.componentdock.com`; homepage
       `https://swansong.free.componentdock.com`; `injectUiSource()` in
       vite.config.ts; MemoryStorage polyfill in test setup if jsdom 30)
2. [ ] `npm install` at root so package-lock.json registers the workspace
3. [ ] `src/index.css`: `@theme` tokens — `--color-royal: #2a1a5e`,
       `--color-violet: #5126a7`, `--color-pink: #fe59d7`, `--color-blush:
    #fe8ce3`; Poppins via Google Fonts `<link>` in `index.html` (400)
4. [ ] Components (colocated tests, scenario-style per spec): `Filler` (demo
       label), `Footer` (gradient band + container), `AboutCol` (heading
       icon + `ContactRows` + `SubscribeForm`), `NewsCol` (TWO `NewsPost`s),
       `InfoCol` (5 plain links), `InstaCol` (6-tile grid), `CopyrightBar`
       (two credit lines + heart + Component Dock link)
5. [ ] `src/App.tsx` composes Filler + Footer; document title "Swansong —
       Footer"
6. [ ] Run `npm run verify:app swansong` until green (typecheck + lint +
       knip + fallow + 100% coverage + build)
7. [ ] Commit `feat: Swansong — footer component demo (ColorLib Bootstrap
 Footer 19)`; PR + immediate squash merge; then TEMPLATES.md line 795
       `[~]`→`[x]` + surge URL + homepage + `npm run readme:status`, push

## Verification (pre-merge, from the spec)

- [ ] `verify:app swansong` green (100% coverage)
- [ ] Filler white `12em 0` + centered label; footer gradient
      `45deg #2a1a5e → #5126a7` with `7em 0` padding; Poppins; main + footer
      landmarks
- [ ] About column: 22px white heading + 40px circular 1px-pink icon
      (aria-hidden); THREE contact rows (address / phone link / email link,
      `rgba(255,255,255,0.5)`, 40px icon column); subscribe form — email
      input (translucent bg, 2px `#fe8ce3` border, SQUARE corners,
      placeholder "Enter email address", labeled) + 52×52 pink `#fe8ce3`
      submit with accessible name; static form (no navigation)
- [ ] Latest News: TWO posts — 80×80 rounded picsum thumb, 16px heading link
      (`rgba(255,255,255,0.5)`), 12px meta (date / author / comments,
      `rgba(255,255,255,0.3)`)
- [ ] Information: FIVE plain links (About, Products, Blog, Contact, Help &
      Support), `py-1` block links, NO bullets
- [ ] Instagram: 3×2 grid of six rounded square picsum tiles (~100px tall)
- [ ] Copyright bar: `border-top rgba(255,255,255,0.1)`, "Copyright © <year>
      All rights reserved." + "This template is made with ♥ by Component
      Dock" (heart aria-hidden, Component Dock link →
      `https://www.componentdock.com/`, pink); NO ColorLib strings in
      apps/swansong
- [ ] Responsive: 2×2 columns on md, 4-across on lg+, stacked below md with
      `mb-4` gaps; copyright lines side-by-side md+ / stacked xs; no h-scroll
- [ ] Focus-visible rings on ALL interactive elements (input, button, links)
