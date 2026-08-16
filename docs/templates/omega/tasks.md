# Omega (ColorLib Bootstrap Footer 14) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-omega`.

## Design notes (replication findings)

- **Original:** ColorLib "Bootstrap Footer 14" — free responsive Bootstrap
  4.3.1 footer-component demo (source:
  https://colorlib.com/wp/template/bootstrap-footer-14/). TEMPLATES.md line
  790, single `- [ ]` row. This prep: Bootstrap Footer 14 → **Omega**.
  Bookkeep that row `[x]` when the app ships.
- **Preview URL quirk (series-wide):** `https://preview.colorlib.com/theme/bootstrap-footer-14/`
  returns 404. Use `https://preview.colorlib.com/theme/bft/bootstrap-footer-14/`
  (lives under the `/theme/bft/` prefix — NOT `/theme/bootstrap/`). Returns
  HTTP 200 (10,300 bytes), `<title>Footer 04</title>`.
- **Fidelity references (all verified 2026-08-16):**
  - Live DOM: `https://preview.colorlib.com/theme/bft/bootstrap-footer-14/` (curl, HTTP 200)
  - Tokens: `css/style.css` (222,692 bytes; `.footer-04` block + shared FTCO helpers)
  - Screenshot: `bootstrap-footer-14.jpg` (1200×972 AVIF, viewed in browser —
    matches live DOM, NO variance)
- **Design summary:** DARK variant of the footer series — charcoal `#272727`
  band, darker `#1a1a1a` bottom bar, single gold accent `#f7b633` (read-more
  link, subscribe button), **Nunito Sans** typeface (NOT Poppins — first
  Nunito Sans footer in the recent series). White filler (`padding: 12em 0`)
  labels "Footer #04". FOUR columns (2×2 on md, 4-across on lg): Brand /
  Categories / Tag cloud / Subscribe+Follow us. Social chips are SQUARES
  (radius 4px, faint white border, white glyphs) — NOT circles; THREE icons
  only (no Linkedin). Subscribe button is a gold 52×52 ICON button
  (paper-plane + sr-only "Submit"), not a text button. Source heading typo:
  "Subcribe" (missing 's') — fix to "Subscribe".
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict); Vitest +
  Testing Library 100% coverage; packages/ui `cn()`.

## Structure order (1:1 with source DOM)

1. **Filler section** — `section.ftco-section` (`padding: 12em 0`, white,
   no bg) → centered `h2` "Footer #04" (`mb-0`). Recreation: demo label may
   be the template's own name.
2. **Footer band** — `footer.footer-04` (`background: #272727`, `padding:
7em 0` top but `padding-bottom: 0` — bottom bar owns the bottom; base
   `font-size: 14px`) → `div.container` → `div.row` → FOUR
   `col-md-6 col-lg-3 mb-md-0 mb-4` columns:
   - **Col 1 — Brand:** `h2.footer-heading` → `a.logo` **"Colorlib"** (16px
     white capitalize; recreation may use its own brand name) → `p`
     (rgba(255,255,255,.3) about line — "A small river named Duden flows…"
     filler copy) → gold **"read more"** link (`#f7b633`) +
     `ion-ios-arrow-round-forward` (lucide `ArrowRight`)
   - **Col 2 — Categories:** `h2.footer-heading` **"Categories"** →
     `ul.list-unstyled` → FOUR `py-1 d-block` links (rgba(255,255,255,.7)):
     **Buy & Sell, Merchant, Giving back, Help & Support**
   - **Col 3 — Tag cloud:** `h2.footer-heading` **"Tag cloud"** →
     `div.tagcloud` → EIGHT `a.tag-cloud-link` (uppercase 11px, `4px 10px`
     padding, `mb 7px mr 4px`, 4px radius, `border: 1px solid
rgba(255,255,255,.1)`, white): **dish, menu, food, sweet, tasty,
     delicious, desserts, drinks**
   - **Col 4 — Subscribe + Follow us:** `h2.footer-heading` **"Subcribe"**
     (source typo → "Subscribe") → `form.subscribe-form` (action "#", no
     handler — static) → `div.form-group.d-flex` (mb 0):
     - email `input` — square edges, `background: rgba(255,255,255,.05)`,
       no border, 16px, text `rgba(255,255,255,.3)`, placeholder **"Enter
       email address"**, no focus shadow; add visually-hidden label /
       aria-label
     - `button.form-control.submit.rounded-right` (type submit) — **52×52**,
       `background: #f7b633`, white, square edges; contains
       `span.sr-only` **"Submit"** + `i.ion-ios-send` (paper-plane; lucide
       `Send` — probe it). ICON button, NOT a text button.
     - then `h2.footer-heading.mt-5` **"Follow us"** →
       `ul.ftco-footer-social.p-0` → THREE `li.ftco-animate` → `a` (tooltip
       title Twitter / Facebook / Instagram) → `span.ion-logo-*`: 40×40
       SQUARE chips (`border-radius: 4px`, `border: 1px solid
rgba(255,255,255,.1)`, `margin: 0 10px 0 0`), centered white 20px
       glyphs. **NO Linkedin in this variant.**
   - **Bottom bar** — `div.w-100.mt-5.border-top.py-5` (`border-top` AND
     background `#1a1a1a`):
     - Left `col-md-6 col-lg-8` → `p.copyright` (text `rgba(255,255,255,.3)`):
       "© <current year> Omega. All rights reserved. Made with ♥ by
       **Component Dock**" — heart `aria-hidden` (lucide `Heart` or ♥ text),
       Component Dock link MUST point to `https://www.componentdock.com/`
       (per convention; `.copyright a` = `rgba(255,255,255,.5)`; NO ColorLib
       reference anywhere in `apps/omega`)
     - Right `col-md-6 col-lg-4 text-md-right` → THREE links **"Terms"**,
       **"Privacy"**, **"Compliances"** (`mr-md-3`,
       `rgba(255,255,255,.7)` via `.footer-04 .list-unstyled a`)

## Section-by-section fidelity notes

- **Filler:** white with `12em 0` rhythm — the footer is the deliverable;
  the filler is demo scaffolding. `mb-0` on the centered h2.
- **Footer band:** the ONLY colors are `#272727` bg + `#f7b633` gold accent +
  `rgba(255,255,255,.3/.5/.7)` text + `rgba(255,255,255,.05/.1)` chips/borders.
  No gradients, no images. DARK variant (contrast with Capstone/footer-13's
  pale rose).
- **Font:** **Nunito Sans** (body 15px/1.8; headings weight 400/1.5) — NOT
  Poppins. Load 400 + 600 via Google Fonts `<link>` (600 is used by
  `.footer-heading`).
- **Headings:** 13px (smaller than footer-13's 14px), white, uppercase,
  weight 600, 1px letter-spacing, `mb-30px`. The brand logo heading uses the
  `.logo` variant (16px, capitalize, no letter-spacing).
- **Tag cloud:** chips are bordered squares (faint white 1px border, 4px
  radius), NOT filled pills — the bg stays transparent. Uppercase 11px.
  Wrap naturally (inline-block + margins).
- **Social chips:** squares NOT circles (footer-04 overrides the shared
  circle to `border-radius: 4px`), faint white border, WHITE glyphs (not
  gold). THREE only: Twitter, Facebook, Instagram. Hover keeps white.
- **Newsletter:** square edges everywhere (`border-radius: 0`). Button is
  52×52 gold square with a paper-plane ICON + sr-only "Submit" — not a text
  button (contrast with footer-13's 130×52 "Subscribe" text button). Form
  has no JS handler in source — a static form suffices, but add the label
  for a11y (bare placeholder in source). Fix the "Subcribe" heading typo.
- **Bottom bar:** `border-top` color AND background are `#1a1a1a` (darker
  than the band). Copyright text `rgba(255,255,255,.3)`, copyright LINK
  `rgba(255,255,255,.5)` — legal links are `rgba(255,255,255,.7)` (NOT
  gold); only the read-more link and subscribe button are gold.
- **Responsive:** FOUR `col-md-6 col-lg-3` columns — stacked below md
  (`mb-4` gaps), 2×2 on md, 4-across on lg+. Bottom bar 8/4 split on md+.
  No order flips, no horizontal overflow.

## Implementation tasks (TDD)

1. [ ] Scaffold `apps/omega` (copy simplest existing app; package
       `@free-react-templates/omega`; `public/CNAME` =
       `omega.free.componentdock.com`; homepage
       `https://omega.free.componentdock.com`; `injectUiSource()` in
       vite.config.ts; MemoryStorage polyfill in test setup if jsdom 30)
2. [ ] `npm install` at root so package-lock.json registers the workspace
3. [ ] `src/index.css`: `@theme` tokens — `--color-gold: #f7b633`,
       `--color-charcoal: #272727`, `--color-onyx: #1a1a1a`; Nunito Sans via
       Google Fonts `<link>` in `index.html` (400 + 600)
4. [ ] Components (colocated tests, scenario-style per spec):
       `Filler` (demo label), `Footer` (band + container),
       `BrandColumn` (logo + about + read more),
       `LinkColumn` (Categories heading + 4 links),
       `TagCloud` (8 chips), `SubscribeForm` (labeled email input + gold
       icon submit), `SocialChips` (3 square chips, aria-labels),
       `BottomBar` (copyright + heart + Component Dock link + 3 legal links)
5. [ ] `src/App.tsx` composes Filler + Footer; document title "Omega —
       Footer"
6. [ ] Run `npm run verify:app omega` until green (typecheck + lint +
       knip + fallow + 100% coverage + build)
7. [ ] Commit `feat: Omega — footer component demo (ColorLib Bootstrap
 Footer 14)`; PR + immediate squash merge; then TEMPLATES.md line 790
       `[~]`→`[x]` + surge URL + homepage + `npm run readme:status`, push

## Verification (pre-merge, from the spec)

- [ ] `verify:app omega` green (100% coverage)
- [ ] Filler white `12em 0` + centered label; footer `#272727` `7em 0` top
      (bottom bar owns bottom); Nunito Sans; main + footer landmarks
- [ ] Brand: logo link 16px white capitalize, about `rgba(255,255,255,.3)`,
      gold "read more" + arrow
- [ ] Categories: EXACT 4 links, `py-1 d-block`, `rgba(255,255,255,.7)`,
      heading 13px white uppercase 600 ls 1px mb 30px
- [ ] Tag cloud: 8 chips uppercase 11px `4px 10px`, faint white 1px border,
      4px radius, wrapping
- [ ] Subscribe: square form, input `rgba(255,255,255,.05)` 16px placeholder
      "Enter email address", gold 52×52 icon button (paper-plane, sr-only
      "Submit"); typo fixed ("Subscribe")
- [ ] Follow us: THREE square chips 40×40 radius 4px faint white border,
      white glyphs, accessible names (Twitter/Facebook/Instagram only)
- [ ] Bottom bar `#1a1a1a` bg + border-top; copyright with Component Dock
      link + aria-hidden heart; Terms / Privacy / Compliances
      `rgba(255,255,255,.7)` `mr-md-3`; no ColorLib strings in apps/omega
- [ ] Responsive 4×col-lg-3 (2×2 md, stacked <md), bottom 8/4; no h-scroll
