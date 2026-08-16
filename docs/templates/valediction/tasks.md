# Valediction (ColorLib Bootstrap Footer 17) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-valediction`.

## Design notes (replication findings)

- **Original:** ColorLib "Bootstrap Footer 17" — free responsive Bootstrap
  4.3.1 footer-component demo (source:
  https://colorlib.com/wp/template/bootstrap-footer-17/). TEMPLATES.md line
  793, single `- [ ]` row. This prep: Bootstrap Footer 17 → **Valediction**.
  Bookkeep that row `[x]` when the app ships.
- **Preview URL quirk (series-wide):**
  `https://preview.colorlib.com/theme/bootstrap-footer-17/` returns 404. Use
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-17/` (lives under
  the `/theme/bft/` prefix — NOT `/theme/bootstrap/`). Returns HTTP 200
  (8,956 bytes), `<title>Footer 07</title>`.
- **Fidelity references (all verified 2026-08-16):**
  - Live DOM: `https://preview.colorlib.com/theme/bft/bootstrap-footer-17/`
    (curl, HTTP 200)
  - Tokens: `css/style.css` (220,421 bytes; `.footer-07` block + shared FTCO
    helpers)
  - Screenshot: `bootstrap-footer-17.jpg` (1200×972 AVIF, viewed in browser —
    matches live DOM, NO variance; only the JS copyright year differs: static
    capture shows 2021, live shows the current year)
- **Design summary:** NEAR-BLACK variant of the footer series — band
  `#121212` with a **lime-green accent** `#a3de83` (all links + the social
  chips' circular outline borders), a single centered column of: white 30px
  weight-700 logo wordmark **"Colorlib.com"** → SIX uppercase menu links
  (Home / Agent / About / Listing / Blog / Contact,
  `rgba(255,255,255,.6)`, letter-spacing 1px) → THREE circular social chips
  (40×40, transparent bg + `1px solid #a3de83` lime outline, 20px brand
  icons Twitter/Facebook/Instagram; hover turns the icon white) → copyright
  row (`rgba(255,255,255,.3)` + ♥ + link). **Poppins** typeface (body
  15px/1.8, headings weight 400/1.5 — the logo heading is weight 700).
  **NO newsletter form, NO link columns, NO images** — the simplest footer in
  the whole series (contrast with Adieu/footer-06's two-tone newsletter band
  and three link columns). The ONLY interactivity is the social chips' hover
  (white icon) and the source's Bootstrap tooltips (recreation: `aria-label`
  - `title` suffice).
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict); Vitest +
  Testing Library 100% coverage; packages/ui `cn()`.

## Structure order (1:1 with source DOM)

1. **Filler section** — `section.ftco-section` (`padding: 12em 0`, white, no
   bg) → `div.container` → `div.row.justify-content-center` →
   `div.col-md-6.text-center` → `h2` "Footer #07" (`mb-0`). Recreation: demo
   label may be the template's own name.
2. **Footer band** — `footer.footer-07` (`background: #121212`; base
   `footer { padding: 7em 0 }` applies FULLY — top AND bottom, NO
   `padding-top: 0` override like footer-06) → `div.container`:
   - **Row 1 — Logo/menu/socials** — `div.row.justify-content-center` →
     `div.col-md-12.text-center`:
     - `h2.footer-heading` (`font-size: 30px; color: #fff; font-weight: 700;
margin-bottom: 30px`) → `a.logo` **"Colorlib.com"** (white — the
       recreation may use its own brand name)
     - `p.menu` (`margin-bottom: 30px`) → SIX `a` links: **"Home"**,
       **"Agent"**, **"About"**, **"Listing"**, **"Blog"**, **"Contact"**
       (all `color: rgba(255,255,255,.6); margin: 0 10px; text-transform:
uppercase; letter-spacing: 1px`)
     - `ul.ftco-footer-social.p-0` → THREE `li.ftco-animate` (scroll-anim
       hook only — skip in the recreation):
       - `li` → `a` (Bootstrap tooltip `title="Twitter"`) →
         `span.ion-logo-twitter` — **Twitter** (recreation: `aria-label` +
         `title`)
       - `li` → `a` (`title="Facebook"`) → `span.ion-logo-facebook` —
         **Facebook**
       - `li` → `a` (`title="Instagram"`) → `span.ion-logo-instagram` —
         **Instagram**
       - chips: `li` `display: inline-block; margin: 0 10px 0 0`; `a` 40×40
         circle — `border-radius: 50%; background: transparent; border:
1px solid #a3de83` (lime outline; footer-07 overrides the base
         `rgba(0,0,0,.05)` bg); `span` 20px icon centered absolutely;
         **hover: icon turns white** (`.ftco-footer-social li a:hover
{ color: #fff }`; border stays lime)
   - **Row 2 — Copyright** — `div.row.mt-5` → `div.col-md-12.text-center` →
     `p.copyright` — "Copyright © <current year> All rights reserved | This
     template is made with ♥ by Colorlib.com" (heart `i.ion-ios-heart`,
     `aria-hidden`; `p` color `rgba(255,255,255,.3)`; the Colorlib link
     `target="_blank"` renders lime `#a3de83`; recreation: heart
     `aria-hidden` + Component Dock link per convention)

## Section-by-section fidelity notes

- **Filler:** white with `12em 0` rhythm — the footer is the deliverable;
  the filler is demo scaffolding. `mb-0` on the centered h2 inside
  `col-md-6` (narrower centered box on md+).
- **Footer band:** the ONLY colors are near-black `#121212` (band), white
  (logo heading), muted whites (`rgba(255,255,255,.3)` copyright /
  `.6` menu), and the lime accent `#a3de83` (all links + chip borders). No
  gradients, no glow overlay (contrast with footer-06's `#d7b8ff` radial
  glow). Full `7em` padding top AND bottom — do NOT zero the top.
- **Font:** **Poppins** (body 15px/1.8; headings weight 400/1.5; the logo
  heading is weight 700). Load 400 + 700 via Google Fonts `<link>` (300–900
  available; 400 + 700 suffice).
- **Logo:** `.footer-heading` 30px white weight 700 `mb-30px` — NOT
  uppercase, no underline. The link itself is white (not the accent).
- **Menu:** `p.menu` `mb-30px`; links uppercase, letter-spacing 1px,
  `rgba(255,255,255,.6)`, `margin: 0 10px`. NO hover color change in source
  (global `a:hover` only removes the underline). Six links: Home, Agent,
  About, Listing, Blog, Contact — keep the same kind of content.
- **Social chips:** THREE circular chips, `inline-block`, `margin-right:
10px`, 40×40, transparent bg + **1px lime outline** (`#a3de83`), 20px icon
  centered. Icons are BRAND logos (Twitter/Facebook/Instagram) — lucide has
  deprecated `Twitter`/`Facebook`/`Instagram` exports: **probe each with a
  `typeof` check** (per the skill's icon guidance) and fall back to inline
  SVG paths if the installed lucide-react dropped them. Hover: icon → white
  (`#fff`), border stays lime. Add `aria-label` + `title` per chip (source
  relies on Bootstrap tooltips).
- **Copyright:** `row.mt-5` → centered `p` in `rgba(255,255,255,.3)`:
  "Copyright © <year> All rights reserved | This template is made with ♥ by
  Component Dock" — heart `aria-hidden` (lucide `Heart` or ♥ text glyph),
  "Component Dock" links to `https://www.componentdock.com/`. NO ColorLib
  reference anywhere in `apps/valediction`.
- **Mobile:** nothing reflows — single full-width centered column at every
  breakpoint; menu links wrap naturally (inline, `margin: 0 10px`); chips
  stay inline and centered; `row.mt-5` keeps the copyright separated. No
  order flips, no horizontal scroll.
- **NO images anywhere** — no picsum seeds needed in this variant. **NO
  newsletter form, NO link columns.**

## Implementation tasks (TDD)

1. [ ] Scaffold `apps/valediction` (copy simplest existing app; package
       `@free-react-templates/valediction`; `public/CNAME` =
       `valediction.free.componentdock.com`; homepage
       `https://valediction.free.componentdock.com`; `injectUiSource()` in
       vite.config.ts; MemoryStorage polyfill in test setup if jsdom 30)
2. [ ] `npm install` at root so package-lock.json registers the workspace
3. [ ] `src/index.css`: `@theme` tokens — `--color-ink: #121212` (band),
       `--color-lime: #a3de83` (accent), muted whites
       (`rgba(255,255,255,.3/.6)` as needed)
4. [ ] `index.html`: Poppins Google Fonts `<link>` (400 + 700); document
       title "Valediction — Footer"
5. [ ] Tests FIRST (red): `App.test.tsx` + `Footer.test.tsx` — page
       composition, filler label, band bg, logo/menu/socials, copyright,
       responsive (no h-overflow), a11y
6. [ ] `src/components/Navbar.tsx` — NOT needed (no navbar in this variant)
7. [ ] `src/components/Hero.tsx` — NOT needed
8. [ ] `src/components/Footer.tsx` — filler section + footer band:
       logo heading + menu (6 links) + social chips (3) + copyright row
9. [ ] `src/App.tsx` — compose Footer (filler + band)
10. [ ] Green: run `npm run verify:app valediction` until 100% coverage
11. [ ] Self-review (docs/self-review.md); commit `feat: valediction — Footer
   template (ColorLib Bootstrap Footer 17)`; PR + immediate squash merge
12. [ ] Bookkeep TEMPLATES.md line 793 `[x]` + surge URL + homepage + `npm
   run readme:status` (in the IMPLEMENTER's post-merge commit — NOT the
        prep stream)

## Verification (pre-merge, from the spec)

- [ ] `verify:app valediction` green (100% coverage)
- [ ] Filler white `12em 0` + centered label (col-md-6 on md+); footer
      `#121212` FULL `7em` padding top AND bottom; Poppins; main + footer
      landmarks
- [ ] Centered `col-md-12 text-center`: white 30px weight-700 logo wordmark
      (mb-30px); SIX uppercase letterspaced menu links (Home, Agent, About,
      Listing, Blog, Contact) `rgba(255,255,255,.6)` `margin: 0 10px`
      mb-30px; THREE 40×40 circular chips (transparent bg + `1px solid
    #a3de83` outline, 20px brand icons Twitter/Facebook/Instagram) — hover
      → icon white
- [ ] Copyright `row.mt-5` centered: "Copyright © <year> All rights reserved
      | This template is made with ♥ by Component Dock"
      (`rgba(255,255,255,.3)`; heart aria-hidden; Component Dock link →
      `https://www.componentdock.com/`); NO ColorLib strings in
      apps/valediction
- [ ] NO newsletter form, NO link columns, NO images in this variant
- [ ] Responsive: single centered column at every breakpoint; menu links
      wrap; chips inline/centered; no h-scroll
