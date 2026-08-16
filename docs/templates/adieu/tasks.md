# Adieu (ColorLib Bootstrap Footer 16) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-adieu`.

## Design notes (replication findings)

- **Original:** ColorLib "Bootstrap Footer 16" — free responsive Bootstrap
  4.3.1 footer-component demo (source:
  https://colorlib.com/wp/template/bootstrap-footer-16/). TEMPLATES.md line
  792, single `- [ ]` row. This prep: Bootstrap Footer 16 → **Adieu**.
  Bookkeep that row `[x]` when the app ships.
- **Preview URL quirk (series-wide):**
  `https://preview.colorlib.com/theme/bootstrap-footer-16/` returns 404. Use
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-16/` (lives under
  the `/theme/bft/` prefix — NOT `/theme/bootstrap/`). Returns HTTP 200
  (11,032 bytes), `<title>Footer 06</title>`.
- **Fidelity references (all verified 2026-08-16):**
  - Live DOM: `https://preview.colorlib.com/theme/bft/bootstrap-footer-16/`
    (curl, HTTP 200)
  - Tokens: `css/style.css` (224,476 bytes; `.footer-06` block + shared FTCO
    helpers)
  - Screenshot: `bootstrap-footer-16.jpg` (1200×972 AVIF, viewed in browser —
    matches live DOM, NO variance; only the JS copyright year differs: static
    capture shows 2021, live shows the current year)
- **Design summary:** DARK PURPLE variant of the footer series — band
  `#302939` with a faint `#d7b8ff` radial glow (20%), two-tone newsletter
  band (`#322b3c` left / `#372f42` right), white pill subscribe form with a
  dark `#352d3f` TEXT "Submit" button, THREE link columns (Information /
  Application / API) with `rgba(255,255,255,.5)` checkmark-bulleted links,
  and a right-side copyright block (logo + "made with ♥"). **Poppins**
  typeface (body 15px/1.8, headings 400/1.5). **NO images, NO social chips,
  NO bottom bar, NO legal links** — the simplest footer since the early
  series entries (contrast with Ultimo/footer-15's four content columns and
  green accents). The ONLY interactive element is the static newsletter form
  (`action="#"`, no JS handler in source).
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict); Vitest +
  Testing Library 100% coverage; packages/ui `cn()`.

## Structure order (1:1 with source DOM)

1. **Filler section** — `section.ftco-section` (`padding: 12em 0`, white, no
   bg) → `div.container` → `div.row.justify-content-center` →
   `div.col-md-6.text-center` → `h2` "Footer #06" (`mb-0`). Recreation: demo
   label may be the template's own name.
2. **Footer band** — `footer.footer-06` (`background: #302939`, `padding-top:
0 !important` — overrides base `footer { padding: 7em 0 }` top; bottom
   stays 7em; `position: relative; overflow: hidden; z-index: 0`) →
   `div.container`:
   - **Newsletter band** — `div.row.align-items-center.align-items-stretch.mb-5`:
     - Left `col-md-4.py-4.py-md-5.aside-stretch.d-flex.align-items-center`
       (bg `#322b3c`; `:after` extends the color full-bleed to the LEFT
       viewport edge — `position: absolute; right: 100%; width: 360%`) →
       `div.w-100` → `span.subheading` **"Subscribe to our"** (uppercase,
       `letter-spacing: 2px`, `rgba(255,255,255,.3)`) → `h3.heading-section`
       **"Newsletter"** (30px, white, uppercase)
     - Right `col-md-8.py-4.py-md-5.d-flex.align-items-center.pl-md-5.aside-stretch-right`
       (bg `#372f42`; `:after` extends full-bleed to the RIGHT) →
       `form.subscribe-form.w-100` (`action="#"`; **white pill** —
       `border-radius: 40px; background: #fff; padding: 3px`) →
       `div.form-group.d-flex` (`position: relative; margin-bottom: 0;
border-radius: 0`):
       - email `input.form-control.rounded-left` — type text,
         `placeholder="Enter email address"`, **transparent bg, `border:
none`, `outline: none`**, 16px, `color: rgba(0,0,0,.3)`, height
         56px, radius 0; no focus shadow; add visually-hidden label /
         aria-label (bare placeholder in source)
       - `button.form-control.submit` (type submit) — **TEXT button**
         **"Submit"**: `color: #fff`, `width: 150px`, `height: 56px`,
         `font-size: 14px`, `background: #352d3f`, `border: none`,
         `letter-spacing: 1px`, `text-transform: uppercase`,
         `border-radius: 40px` (pill) — NOT an icon button (contrast with
         footer-15's 52×52 square paper-plane button)
   - **Links row** — `div.row.pt-4`:
     - **Right block (FIRST in DOM)** — `div.col-md-3.col-lg-6.order-md-last`
       → `div.row.justify-content-end` → `div.col-md-12.col-lg-9.text-md-right.mb-md-0.mb-4`
       → `h2.footer-heading` → `a.logo` **"Colorlib"** (white, 20px) →
       `p.copyright` — "Copyright © <current year> All rights reserved | This
       template is made with ♥ by Colorlib.com" (heart `i.ion-ios-heart`,
       `aria-hidden`; text `rgba(255,255,255,.3)`; recreation: heart
       `aria-hidden` + Component Dock link per convention)
     - **Left block (SECOND in DOM)** — `div.col-md-9.col-lg-6` →
       `div.row` → THREE `div.col-md-4.mb-md-0.mb-4`:
       - **Col 1 — Information:** `h2.footer-heading` **"Information"** →
         `ul.list-unstyled` → FIVE `li` → `a.py-1.d-block` →
         `span.ion-ios-checkmark-circle-outline.mr-2` + text **"Our
         Company"**, **"Data"**, **"Pricing"**, **"Contact Us"**,
         **"Support"**
       - **Col 2 — Application:** **"Application"** → THREE links:
         **"Download"**, **"Bike Provider"**, **"How to Used"**
       - **Col 3 — API:** **"API"** → THREE links: **"Documentation"**,
         **"Credential"**, **"Developer info"**
       - (all link text `rgba(255,255,255,.5)` via
         `.footer-06 .list-unstyled li a`; checkmark glyphs inherit; `py-1` =
         0.25rem vertical padding per link)

## Section-by-section fidelity notes

- **Filler:** white with `12em 0` rhythm — the footer is the deliverable;
  the filler is demo scaffolding. `mb-0` on the centered h2.
- **Footer band:** the ONLY colors are the purple scale `#302939` (band),
  `#322b3c` (left panel), `#372f42` (right panel), `#352d3f` (submit button),
  plus the white pill and muted white text (`rgba(255,255,255,.3/.5)`). Faint
  radial glow `#d7b8ff` at 20% in the center (z-index -1 overlay). No
  gradients in the panels (solid colors + full-bleed `:after` pseudo
  elements — the recreation can simply use full-width panels or note that the
  stretch only matters when the container is narrower than the viewport).
- **Font:** **Poppins** (body 15px/1.8; headings weight 400/1.5). Load 400
  via Google Fonts `<link>` (300–900 available; 400 suffices).
- **Headings:** `.footer-heading` 20px white weight 400 `mb-20px` — NOT
  uppercase, NO underline (same as footer-15). The band heading
  (`heading-section`) IS 30px white uppercase; the subheading is uppercase
  letterspaced `rgba(255,255,255,.3)`.
- **Newsletter:** white pill (`border-radius: 40px`, `padding: 3px`) wraps
  input + button. Input is transparent with NO border (unlike footer-15's
  2px green border). Button is a 150px-wide TEXT "Submit" pill — not an icon
  button. Form has no JS handler in source — a static form suffices, but add
  the label for a11y.
- **Link columns:** THREE columns, `col-md-4` each. Every link is
  block-level (`py-1`) with a small checkmark-circle bullet at ~0.5rem right
  margin. Copy is short utility links — keep the same kind of content.
- **Copyright block:** DOM-FIRST but `order-md-last` pushes it right on md+
  (3/12 at md, 6/12 at lg+); below md it stacks FIRST (before the link
  columns). Inner column is `col-md-12 col-lg-9` with `text-md-right`.
- **Mobile:** newsletter panels stack below md AND their backgrounds turn
  transparent (`<md` media query: `background: transparent`, `:after {
display: none }`) — the band sits directly on the `#302939` footer bg. Link
  columns stack with `mb-4` gaps. No order flips beyond the copyright block
  described above, no horizontal overflow.
- **NO images anywhere** — no picsum seeds needed in this variant.

## Implementation tasks (TDD)

1. [ ] Scaffold `apps/adieu` (copy simplest existing app; package
       `@free-react-templates/adieu`; `public/CNAME` =
       `adieu.free.componentdock.com`; homepage
       `https://adieu.free.componentdock.com`; `injectUiSource()` in
       vite.config.ts; MemoryStorage polyfill in test setup if jsdom 30)
2. [ ] `npm install` at root so package-lock.json registers the workspace
3. [ ] `src/index.css`: `@theme` tokens — `--color-plum: #302939`,
       `--color-plum-dark: #322b3c`, `--color-plum-light: #372f42`,
       `--color-plum-ink: #352d3f`, `--color-plum-glow: #d7b8ff`; Poppins via
       Google Fonts `<link>` in `index.html` (400)
4. [ ] Components (colocated tests, scenario-style per spec): `Filler` (demo
       label), `Footer` (band + container + glow), `NewsletterBand`
       (subheading + heading + `SubscribeForm` white pill),
       `LinkColumns` (Information / Application / API lists with checkmark
       bullets), `CopyrightBlock` (logo + copyright + heart + Component Dock
       link)
5. [ ] `src/App.tsx` composes Filler + Footer; document title "Adieu —
       Footer"
6. [ ] Run `npm run verify:app adieu` until green (typecheck + lint +
       knip + fallow + 100% coverage + build)
7. [ ] Commit `feat: Adieu — footer component demo (ColorLib Bootstrap
 Footer 16)`; PR + immediate squash merge; then TEMPLATES.md line 792
       `[~]`→`[x]` + surge URL + homepage + `npm run readme:status`, push

## Verification (pre-merge, from the spec)

- [ ] `verify:app adieu` green (100% coverage)
- [ ] Filler white `12em 0` + centered label; footer `#302939` `padding-top:
    0`; Poppins; main + footer landmarks; faint `#d7b8ff` radial glow
- [ ] Newsletter band: 4/8 split, `align-items-stretch`; left `#322b3c`
      (uppercase letterspaced "Subscribe to our" + 30px white "Newsletter"),
      right `#372f42` white-pill form — labeled transparent input
      (placeholder "Enter email address", 56px) + TEXT "Submit" button
      (150×56, `#352d3f`, white, 14px, uppercase, pill)
- [ ] Link columns: Information (5 links), Application (3), API (3); white
      20px headings; `rgba(255,255,255,.5)` block links with CheckCircle2
      bullets
- [ ] Copyright block: DOM-first, `order-md-last` right on md+; logo
      wordmark; "Copyright © <year> All rights reserved | This template is
      made with ♥ by Component Dock" (heart aria-hidden, Component Dock link
      → `https://www.componentdock.com/`); NO ColorLib strings in apps/adieu
- [ ] NO images, NO social chips, NO legal links in this variant
- [ ] Responsive: newsletter stacked + transparent panels <md; link columns
      3-across md+; copyright 3/12 md, 6/12 lg+, first-below-md; no h-scroll
