# Capstone (ColorLib Bootstrap Footer 13) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-capstone`.

## Design notes (replication findings)

- **Original:** ColorLib "Bootstrap Footer 13" — free responsive Bootstrap
  4.3.1 footer-component demo (source:
  https://colorlib.com/wp/template/bootstrap-footer-13/). TEMPLATES.md line
  789, single `- [ ]` row. This prep: Bootstrap Footer 13 → **Capstone**.
  Bookkeep that row `[x]` when the app ships.
- **Preview URL quirk (series-wide):** `https://preview.colorlib.com/theme/bootstrap-footer-13/`
  returns 404. Use `https://preview.colorlib.com/theme/bft/bootstrap-footer-13/`
  (lives under the `/theme/bft/` prefix — NOT `/theme/bootstrap/`). Returns
  HTTP 200 (11,623 bytes), `<title>Footer 03</title>`.
- **Fidelity references (all verified 2026-08-16):**
  - Live DOM: `https://preview.colorlib.com/theme/bft/bootstrap-footer-13/` (curl, HTTP 200)
  - Tokens: `css/style.css` (222,289 bytes; `.footer-03` block + shared FTCO helpers)
  - Screenshot: `bootstrap-footer-13.jpg` (1200×972 AVIF, viewed in browser —
    matches live DOM, NO variance)
- **Design summary:** LIGHT variant of the footer series — pale rose
  `#f8f1f1` band, single coral-rose accent `#f17e7e` (all links, social
  glyphs, subscribe button). White filler (`padding: 12em 0`) labels
  "Footer #03". Contrast with the recent dark preps (Stretto/footer-08,
  Tailpiece/footer-11, Terminus/footer-12).
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict); Vitest +
  Testing Library 100% coverage; packages/ui `cn()`.

## Structure order (1:1 with source DOM)

1. **Filler section** — `section.ftco-section` (`padding: 12em 0`, white,
   no bg) → centered `h2` "Footer #03" (`mb-0`). Recreation: demo label may
   be the template's own name.
2. **Footer band** — `footer.footer-03` (`background: #f8f1f1`, `padding:
7em 0`, base `font-size: 14px`) → `div.container` → `div.row`:
   - **Left block** `col-md-6` → `div.row` → THREE `col-md-4 mb-md-0 mb-4`
     link columns:
     - **Men** — Jeans, Jumpers, Leather, Shorts, Boots, Watches (6 links)
     - **Women** — Dresses, Jumpsuits, Shirts, T-shirts, Sweatshirts,
       Jackets, Coats (7; source typo "Swearshirts" — fix it)
     - **Kids** — Shirts, T-shirts, Polos, Sweaters, Sweatshirts, Jackets,
       Watches (7)
     - Heading: `.footer-heading` 14px / uppercase / ls 2px / weight 500 /
       `mb-30px`, inherits dark gray (~`#212529`); links `rgba(0,0,0,.3)`,
       `py-1 d-block` rhythm, no underlines, `transition: .3s all ease`
   - **Right block** `col-md-6` → `div.row.justify-content-end` →
     `col-md-12 col-lg-11 mb-md-0 mb-4`:
     - `h2.footer-heading` **"Follow Us"** → `ul.ftco-footer-social` →
       FOUR circular buttons (40×40, `border-radius: 50%`, bg
       `rgba(0,0,0,.05)`, `margin: 0 10px 0 0`), centered 20px glyphs rose
       `#f17e7e`, hover glyph → `#fff` (source quirk: white on faint circle,
       keep faithful). Icons: Twitter / Facebook / Instagram / Linkedin —
       lucide REMOVED brand icons → tiny inline SVG brand marks or neutral
       lucide glyphs (probe imports with `typeof`). Accessible names via
       `aria-label` (source uses Bootstrap tooltip `title`).
     - `h2.footer-heading.mt-5` **"Subscribe Us"** → `form.subscribe-form`
       (action "#", no handler — static) → `div.form-group.d-flex` (mb 0):
       - email `input` — square edges, `background: rgba(0,0,0,.05)`, no
         border, 16px, text `rgba(0,0,0,.3)`, placeholder **"Enter email
         address"**, no focus shadow; add visually-hidden label / aria-label
       - submit `input` value **"Subscribe"** — 130×52, `background:
#f17e7e`, white 16px, square edges, border none
   - **Bottom bar** — `div.row.mt-5.pt-4.border-top` (`1px solid #dee2e6`):
     - Left `col-md-6 col-lg-8` → `p.copyright` (14px, `rgba(0,0,0,.4)`):
       "© <current year> Capstone. All rights reserved. Made with ♥ by
       **Component Dock**" — heart `aria-hidden` (lucide `Heart` or ♥ text),
       Component Dock link MUST point to `https://www.componentdock.com/`
       (per convention; NO ColorLib reference anywhere in `apps/capstone`)
     - Right `col-md-6 col-lg-4 text-md-right` → links **"Terms &
       Conditions"**, **"Privacy"** (`mr-md-3`), rose `#f17e7e`

## Section-by-section fidelity notes

- **Filler:** white with `12em 0` rhythm — the footer is the deliverable;
  the filler is demo scaffolding. `mb-0` on the centered h2.
- **Footer band:** the ONLY colors are `#f8f1f1` bg + `#f17e7e` accent +
  `rgba(0,0,0,.3/.4)` text + `rgba(0,0,0,.05)` chips. No gradients, no
  images, no dark footer here (LIGHT variant).
- **Link columns:** exact link lists matter (6/7/7). `py-1` vertical rhythm
  on each link (`d-block`); heading `mb-30px` is the column gap driver.
- **Social buttons:** circles NOT squares (radius 50%). Hover flips glyph to
  white (source CSS), bg stays `rgba(0,0,0,.05)` — faithful quirk.
- **Newsletter:** square edges everywhere (`border-radius: 0`) — no pills in
  this variant (contrast with Terminus/footer-12's 40px pill). Button 130×52
  fixed; form has no JS handler in source — a static form suffices, but add
  the label for a11y (bare placeholder in source).
- **Bottom bar:** `border-top` is Bootstrap default `#dee2e6` (not the faint
  white hairline of the dark variants). Copyright text uses `rgba(0,0,0,.4)`
  — not rose; only the legal links + credit link are rose.
- **Responsive:** main 6/6 split stacks below md (`mb-4` gaps, removed via
  `mb-md-0`); left three columns always side by side on md+; right inner
  `col-lg-11` aligns right on lg. No order flips, no horizontal overflow.

## Implementation tasks (TDD)

1. [ ] Scaffold `apps/capstone` (copy simplest existing app; package
       `@free-react-templates/capstone`; `public/CNAME` =
       `capstone.free.componentdock.com`; homepage
       `https://capstone.free.componentdock.com`; `injectUiSource()` in
       vite.config.ts; MemoryStorage polyfill in test setup if jsdom 30)
2. [ ] `npm install` at root so package-lock.json registers the workspace
3. [ ] `src/index.css`: `@theme` tokens — `--color-rose: #f17e7e`,
       `--color-cream: #f8f1f1`; Poppins via Google Fonts `<link>` in
       `index.html` (400 + 700)
4. [ ] Components (colocated tests, scenario-style per spec):
       `Filler` (demo label), `Footer` (band + container),
       `LinkColumn` (heading + links; Men/Women/Kids data),
       `SocialButtons` (4 circular buttons, aria-labels),
       `SubscribeForm` (labeled email input + Subscribe submit),
       `BottomBar` (copyright + heart + Component Dock link + legal links)
5. [ ] `src/App.tsx` composes Filler + Footer; document title "Capstone —
       Footer"
6. [ ] Run `npm run verify:app capstone` until green (typecheck + lint +
       knip + fallow + 100% coverage + build)
7. [ ] Commit `feat: Capstone — footer component demo (ColorLib Bootstrap
    Footer 13)`; PR + immediate squash merge; then TEMPLATES.md line 789
       `[~]`→`[x]` + surge URL + homepage + `npm run readme:status`, push

## Verification (pre-merge, from the spec)

- [ ] `verify:app capstone` green (100% coverage)
- [ ] Filler white `12em 0` + centered label; footer `#f8f1f1` `7em 0`;
      Poppins; main + footer landmarks
- [ ] Men/Women/Kids exact links, `py-1 d-block`, `rgba(0,0,0,.3)`, heading
      14px uppercase ls 2px weight 500 mb 30px
- [ ] Follow Us: 4 circles 40×40 `rgba(0,0,0,.05)` bg, rose glyphs → white
      hover, accessible names
- [ ] Subscribe Us: square form, input `rgba(0,0,0,.05)` 16px placeholder
      "Enter email address", rose 130×52 white button
- [ ] Bottom bar `#dee2e6` border-top; copyright 14px `rgba(0,0,0,.4)` with
      Component Dock link + aria-hidden heart; Terms & Conditions / Privacy
      rose `mr-md-3`; no ColorLib strings in apps/capstone
- [ ] Responsive 6/6 + 3×col-md-4 + col-lg-11 right + bottom 8/4; no h-scroll
