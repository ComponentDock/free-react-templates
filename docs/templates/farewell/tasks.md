# Farewell (ColorLib Bootstrap Footer 18) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-farewell`.

## Design notes (replication findings)

- **Original:** ColorLib "Bootstrap Footer 18" — free responsive Bootstrap
  4.3.1 footer-component demo (source:
  https://colorlib.com/wp/template/bootstrap-footer-18/). TEMPLATES.md line
  794, single `- [ ]` row. This prep: Bootstrap Footer 18 → **Farewell**.
  Bookkeep that row `[x]` when the app ships.
- **Preview URL quirk (series-wide):**
  `https://preview.colorlib.com/theme/bootstrap-footer-18/` returns 404. Use
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-18/` (lives under
  the `/theme/bft/` prefix — NOT `/theme/bootstrap/`). Returns HTTP 200
  (11,522 bytes), `<title>Footer 08</title>`.
- **Fidelity references (all verified 2026-08-16):**
  - Live DOM: `https://preview.colorlib.com/theme/bft/bootstrap-footer-18/`
    (curl, HTTP 200)
  - Tokens: `css/style.css` (222,389 bytes; `.footer-08` block + shared FTCO
    helpers)
  - Screenshot: `bootstrap-footer-18.jpg` (1200×972 JPEG, viewed in browser
    — matches live DOM, NO variance; only the JS copyright year differs:
    static capture shows 2021, live shows the current year)
- **Design summary:** LIGHT variant of the footer series — band `#f1f6f5`
  (pale green-grey), a 9/3 row: left block (About us + blurb + THREE
  circular social chips, then Discover/About/Resources link columns, then a
  copyright bar) and a solid **mint-green `#12cc94`** right panel with a
  white "Contact us" heading and a FOUR-field contact form (Your Name / Your
  Email / Subject / Message textarea) + **blue `#2f89fc` "Send" button**.
  **Poppins** typeface (body 15px/1.8, headings 400/1.5). Muted link/text
  color `rgba(0,0,0,.3)`. **NO images, NO checkmark bullets, NO newsletter**
  — the form is a CONTACT form (contrast with footer-06/adieu's newsletter
  pill). The ONLY interactive element is the static contact form
  (`action="#"`, no JS handler in source).
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict); Vitest +
  Testing Library 100% coverage; packages/ui `cn()`.

## Structure order (1:1 with source DOM)

1. **Filler section** — `section.ftco-section` (`padding: 12em 0`, white, no
   bg) → `div.container` → `div.row.justify-content-center` →
   `div.col-md-6.text-center` → `h2` "Footer #08" (`mb-0`). Recreation: demo
   label may be the template's own name.
2. **Footer band** — `footer.footer-08` (`background: #f1f6f5`, `padding: 0`,
   `overflow: hidden` — overrides base `footer { padding: 7em 0 }`) →
   `div.container-fluid.px-lg-5` → `div.row`:
   - **Left block** — `div.col-md-9.py-5`:
     - **Inner row** — `div.row`:
       - **About us** — `div.col-md-4.mb-md-0.mb-4` → `h2.footer-heading`
         **"About us"** → `p` "A small river named Duden flows by their place
         and supplies it with the necessary regelialia." → `ul.ftco-footer-social.p-0`
         → THREE `li.ftco-animate` → `a` (`title="Twitter"/"Facebook"/"Instagram"`)
         → `span.ion-logo-*` — recreation: inline SVG brand icons, `aria-label`
       - **Links block** — `div.col-md-8` → `div.row.justify-content-center`
         → `div.col-md-12.col-lg-9` → `div.row` → THREE
         `div.col-md-4.mb-md-0.mb-4`:
         - **Discover** — `h2.footer-heading` **"Discover"** →
           `ul.list-unstyled` → FOUR `li` → `a.py-1.d-block`: **"Buy &
           Sell"**, **"Merchant"**, **"Giving back"**, **"Help & Support"**
         - **About** — **"About"** → FOUR: **"Staff"**, **"Team"**,
           **"Careers"**, **"Blog"**
         - **Resources** — **"Resources"** → FOUR: **"Security"**,
           **"Global"**, **"Charts"**, **"Privacy"**
         - (all links `rgba(0,0,0,.3)`, block-level `py-1`, **NO bullets**)
     - **Copyright row** — `div.row.mt-md-5` → `div.col-md-12` →
       `p.copyright` — "Copyright © <current year> All rights reserved | This
       template is made with ♥ by Colorlib.com" (heart `i.ion-ios-heart`,
       `aria-hidden`; Colorlib.com link `#12cc94`; recreation: heart
       `aria-hidden` + Component Dock link per convention)
   - **Right block (contact panel)** — `div.col-md-3.py-md-5.py-4.aside-stretch-right.pl-lg-5`
     (bg `#12cc94`; `:after` extends the color full-bleed to the RIGHT
     viewport edge — `position: absolute; top: 0; left: 100%; bottom: 0;
width: 360%`) → `h2.footer-heading.footer-heading-white` **"Contact
     us"** (white on md+) → `form.contact-form` (`action="#"`, `width:
100%`) → FIVE `div.form-group`:
     - `input.form-control` (type text) placeholder **"Your Name"**
     - `input.form-control` (type text) placeholder **"Your Email"**
     - `input.form-control` (type text) placeholder **"Subject"**
     - `textarea.form-control` (cols 30, rows 3) placeholder **"Message"**
     - `button.form-control.submit.px-3` (type submit) **"Send"** —
       `background: #2f89fc !important; color: #fff`

## Section-by-section fidelity notes

- **Filler:** white with `12em 0` rhythm — the footer is the deliverable;
  the filler is demo scaffolding. `mb-0` on the centered h2.
- **Footer band:** the ONLY saturated colors are `#12cc94` (mint panel +
  link accents) and `#2f89fc` (Send button); everything else is the pale
  `#f1f6f5` band, white fields, and muted `rgba(0,0,0,.3)` text on
  `#212529`-inherited dark headings. No radial glow (contrast with
  footer-06's `#d7b8ff`). The full-bleed `:after` only matters when the
  container is narrower than the viewport — a full-width panel achieves the
  same look.
- **Font:** **Poppins** (body 15px/1.8; headings weight 400/1.5 — the FTCO
  headings rule `h1..h5 { line-height: 1.5; font-weight: 400; font-family:
"Poppins", ... }` overrides bootstrap's 500/1.2). Load 400 via Google
  Fonts `<link>` (300–900 available; 400 suffices).
- **Headings:** `.footer-heading` 18px `mb-30px`, weight 400, color inherits
  dark (`#212529`) — NOT uppercase, NO underline. The contact panel's
  heading uses `footer-heading-white` → white on md+ only (dark below md).
- **Social chips:** `ul.ftco-footer-social` — `li` inline-block with `margin:
0 10px 0 0`; each `a` is a 40×40 circle (`border-radius: 50%`,
  `background: rgba(0,0,0,.05)`, `position: relative`) with the 20px glyph
  absolutely centered; hover turns the glyph white. Source uses `title`
  tooltips — the recreation must use `aria-label` (title is not a reliable
  accessible name). lucide-react has NO brand icons — inline SVG
  (simple-icons paths) for Twitter/Facebook/Instagram.
- **Link columns:** THREE columns, `col-md-4` each, nested inside the
  `col-md-8` → `col-md-12 col-lg-9 justify-content-center` chain. Every link
  is block-level (`py-1`) with **NO bullet glyph** (contrast with
  footer-06's CheckCircle2 bullets). Copy is short utility links — keep the
  same kind of content.
- **Contact form:** FOUR fields in the source order — Your Name, Your Email
  (use `type="email"` in the recreation), Subject, Message (textarea rows
  3). All `form-control`s: height 50px, white bg, radius 5px, `border:
none`, `box-shadow: none`, 14px, text `rgba(0,0,0,.3)`. Source strips the
  focus outline — the recreation must ADD a visible focus-visible style.
  Form has no JS handler in source — a static form suffices, but add
  visually-hidden labels for a11y (bare placeholders in source).
- **Copyright bar:** `row.mt-md-5` → full-width `col-md-12` →
  `p.copyright` in `rgba(0,0,0,.3)` — "Copyright © <year> All rights
  reserved | This template is made with ♥ by Component Dock" (heart
  `aria-hidden`, Component Dock link → `https://www.componentdock.com/`).
- **Mobile:** footer row stacks below md (left block first, then the contact
  panel full-width); the `aside-stretch-right` background turns
  **transparent** <md (media query: `background: transparent`, `:after {
display: none }`) and `footer-heading-white` reverts to dark. Inner
  4/8 split and the THREE link columns stack with `mb-4` gaps. No order
  flips, no horizontal overflow.
- **NO images anywhere** — no picsum seeds needed in this variant.

## Implementation tasks (TDD)

1. [ ] Scaffold `apps/farewell` (copy simplest existing app; package
       `@free-react-templates/farewell`; `public/CNAME` =
       `farewell.free.componentdock.com`; homepage
       `https://farewell.free.componentdock.com`; `injectUiSource()` in
       vite.config.ts; MemoryStorage polyfill in test setup if jsdom 30)
2. [ ] `npm install` at root so package-lock.json registers the workspace
3. [ ] `src/index.css`: `@theme` tokens — `--color-mist: #f1f6f5`,
       `--color-mint: #12cc94`, `--color-send: #2f89fc`, muted
       `rgba(0,0,0,.3)`; Poppins via Google Fonts `<link>` in `index.html`
       (400)
4. [ ] Components (colocated tests, scenario-style per spec): `Filler` (demo
       label), `Footer` (band + container), `AboutUs` (heading + blurb +
       `SocialChips` — 3 inline-SVG brand icons with `aria-label`),
       `LinkColumns` (Discover / About / Resources plain lists, no bullets),
       `CopyrightBar` (line + heart + Component Dock link), `ContactForm`
       (4 labeled fields + blue Send button)
5. [ ] `src/App.tsx` composes Filler + Footer; document title "Farewell —
       Footer"
6. [ ] Run `npm run verify:app farewell` until green (typecheck + lint +
       knip + fallow + 100% coverage + build)
7. [ ] Commit `feat: Farewell — footer component demo (ColorLib Bootstrap
    Footer 18)`; PR + immediate squash merge; then TEMPLATES.md line 794
       `[~]`→`[x]` + surge URL + homepage + `npm run readme:status`, push

## Verification (pre-merge, from the spec)

- [ ] `verify:app farewell` green (100% coverage)
- [ ] Filler white `12em 0` + centered label; footer `#f1f6f5` `padding: 0`;
      Poppins; main + footer landmarks
- [ ] About us: 18px dark heading + Duden blurb + THREE circular social
      chips (40×40, radius 50%, `rgba(0,0,0,.05)` bg, inline-SVG glyphs,
      `aria-label`)
- [ ] Link columns: Discover (Buy & Sell, Merchant, Giving back, Help &
      Support), About (Staff, Team, Careers, Blog), Resources (Security,
      Global, Charts, Privacy); dark 18px headings; `rgba(0,0,0,.3)` block
      links, NO bullets
- [ ] Contact panel: mint `#12cc94` right panel — white "Contact us"
      heading (md+); labeled fields Your Name / Your Email (type=email) /
      Subject / Message textarea; blue "Send" button (`#2f89fc`); focus
      visible
- [ ] Copyright bar: "Copyright © <year> All rights reserved | This template
      is made with ♥ by Component Dock" (heart aria-hidden, Component Dock
      link → `https://www.componentdock.com/`); NO ColorLib strings in
      apps/farewell
- [ ] NO images in this variant
- [ ] Responsive: 9/3 + 4/8 + 3-across link columns on md+; stacked below md
      with `mb-4` gaps; mint panel transparent <md; no h-scroll
