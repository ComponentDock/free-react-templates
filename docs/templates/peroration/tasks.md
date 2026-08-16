# Peroration (ColorLib Bootstrap Footer 20) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-peroration`.

## Design notes (replication findings)

- **Original:** ColorLib "Bootstrap Footer 20" — free responsive Bootstrap
  4.3.1 footer-component demo (source:
  https://colorlib.com/wp/template/bootstrap-footer-20/). TEMPLATES.md line
  796, single `- [ ]` row. This prep: Bootstrap Footer 20 → **Peroration**
  ("the concluding part of a speech" — the FINAL word in the footer series'
  ending-themed naming: … Farewell → Swansong → **Peroration**). Bookkeep
  that row `[x]` when the app ships.
- **Preview URL quirk (series-wide):**
  `https://preview.colorlib.com/theme/bootstrap-footer-20/` returns 404. Use
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-20/` (lives under
  the `/theme/bft/` prefix — NOT `/theme/bootstrap/`). Returns HTTP 200
  (17,636 bytes), `<title>Footer 10</title>` — the variant label, not the
  series number.
- **Fidelity references (all verified 2026-08-16):**
  - Live DOM: `https://preview.colorlib.com/theme/bft/bootstrap-footer-20/`
    (curl, HTTP 200)
  - Tokens: `css/style.css` (222,587 bytes; `.footer-10` block + shared FTCO
    helpers) + `css/ionicons.min.css`
  - Screenshot: `bootstrap-footer-20.jpg` (1200×972 AVIF, viewed in browser —
    matches live DOM structurally, NO variance; minor text drift: screenshot
    shows "info@colorlib.com", live DOM has "info@email.com" — live wins; the
    JS-written copyright year differs: static capture 2021, live current year)
- **Design summary:** DARK, minimal variant of the footer series — a flat
  **charcoal `#222222` band** (`padding: 0 0 4em 0` — top padding REMOVED,
  overrides the base `footer { padding: 7em 0 }`), FIVE zones: **(1)** THREE
  near-black contact tiles (`#1e1e1e`/`#1c1c1c`/`#252525`, `py-5`, 3-across
  `col-md-4`) each with a **50px bright-blue `#1089ff` circular icon** (phone
  / mail / pin) + white 80%-alpha text; **(2–4)** THREE link columns
  (About ×4 links, Company ×4, Resources ×3) — 18px white headings, links
  `rgba(255,255,255,0.2)` → `#fff` on hover, NO bullets/icons; **(5)**
  Subscribe — **white** input + **130×52 blue "Subscribe" button** + 13px
  subheading. Bottom: `border-top` (`rgba(255,255,255,0.1)`) copyright bar —
  left "Copyright © [year] All rights reserved. | This template is made with
  ♥ by Colorlib.com" (→ Component Dock per convention), right THREE 40px
  circular social chips (Twitter/Facebook/Instagram on
  `rgba(255,255,255,0.1)`). **Poppins** (body 15px/1.8, headings 400/1.5;
  Nunito Sans @font-face is loaded but NEVER used — skip it). The ONLY
  saturated color is `#1089ff`. NO images anywhere (text/icon-only footer).
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict); Vitest +
  Testing Library 100% coverage; packages/ui `cn()`.

## Structure order (1:1 with source DOM)

1. **Filler section** — `section.ftco-section` (`padding: 12em 0`, white, no
   bg) → `div.container` → `div.row.justify-content-center` →
   `div.col-md-6.text-center` → `h2` "Footer #10" (`mb-0`). Recreation: demo
   label may be the template's own name.
2. **Footer band** — `footer.footer-10` (`background: #222222; padding: 0 0
4em 0` — TOP PADDING REMOVED vs base `footer { padding: 7em 0 }`) →
   `div.container`:
3. **Contact-card band** — `div.row.mb-5.pb-3.no-gutters` → THREE
   `div.col-md-4.mb-md-0.mb-4.d-flex` → `div.con.con-N.w-100.py-5` →
   `div.con-info.w-100.text-center`:
   - `div.icon` (50×50, `#1089ff`, `border-radius: 50%`, centered) →
     glyph (lucide Phone / Mail / MapPin, white, 24px)
   - `div.text > span` — "(+00) 1234 5678" / "info@email.com" / "203 Fake St.
     Mountain View, San Francisco, California, USA" (`rgba(255,255,255,0.8)`)
   - tile bgs: con-1 `#1e1e1e`, con-2 `#1c1c1c`, con-3 `#252525`
4. **Links + Subscribe row** — `div.row` → `div.col-md-7` + `div.col-md-5`:
   - `div.col-md-7 > div.row` → THREE `div.col-md-4.mb-md-0.mb-4`:
     - `h2.footer-heading` (18px, `#fff`, mb-30px, no icon): **About** /
       **Company** / **Resources**
     - `ul.list-unstyled` → `li > a.d-block[href=#]` (`rgba(255,255,255,0.2)`,
       hover `#fff`): About → Out story / Awards / Our Team / Career;
       Company → Our services / Clients / Contact / Press; Resources → Blog /
       Newsletter / Privacy Policy
   - `div.col-md-5.mb-md-0.mb-4`:
     - `h2.footer-heading` **Subscribe**
     - `form.subscribe-form` (`action="#"`, static) →
       `div.form-group.d-flex` → `input.form-control.rounded-left` (WHITE bg,
       no border, radius 0, placeholder "Enter email address",
       `rgba(0,0,0,0.3)`) + `button.form-control.submit.rounded-right`
       (**130×52, `#1089ff`, white text "Subscribe"**, radius 0)
     - `span.subheading` — "Get digital marketing updates in your mailbox"
       (13px, `rgba(255,255,255,0.3)`, mt-5px)
5. **Copyright bar** — `div.row.mt-5.pt-4.border-top` (`border-color:
rgba(255,255,255,0.1)`):
   - `div.col-md-6.col-lg-8` → `p.copyright.mb-0` — "Copyright © [year] All
     rights reserved. | This template is made with ♥ by **Component Dock**"
     (source: "…by Colorlib.com", link `#1089ff`; heart `aria-hidden`)
   - `div.col-md-6.col-lg-4.text-md-right` → `ul.ftco-footer-social.p-0` →
     THREE `li` → `a[href=#]` (40×40 circle, `rgba(255,255,255,0.1)` bg,
     white glyph, `aria-label` Twitter/Facebook/Instagram) — inline SVG brand
     glyphs (lucide removed brand icons)

## Grid behavior to reproduce

- Contact tiles: 3-across on md+ (`col-md-4`), stacked full-width below md.
- Links + subscribe: `col-md-7` / `col-md-5` side-by-side on md+, stacked
  below md; link columns `col-md-4` → 3-across on md+.
- Copyright bar: `col-md-6 col-lg-8` / `col-md-6 col-lg-4 text-md-right` —
  side-by-side on md+ (right aligned), stacked below md.
- No order flips, no horizontal scroll.

## Implementation tasks

- [ ] Scaffold app: copy simplest existing app → `apps/peroration`, package
      `@free-react-templates/peroration`, `public/CNAME` +
      `peroration.free.componentdock.com`, homepage URL. `npm install` at
      root so package-lock.json registers the workspace.
- [ ] `src/index.css`: `@theme` tokens — `--color-brand: #1089ff`,
      charcoal `#222222`, tile tones `#1e1e1e`/`#1c1c1c`/`#252525`, Poppins
      font family (Google Fonts link in index.html — Poppins 400/600 only;
      SKIP Nunito Sans — unused in source).
- [ ] Components: `Navbar` (none in source — footer-only demo), `Filler`
      (12em white strip + centered h2 label), `ContactTiles` (3 tiles:
      lucide Phone/Mail/MapPin in 50px `#1089ff` circles), `LinkColumns`
      (About/Company/Resources data-driven lists), `SubscribeForm` (white
      input + blue 130×52 button + subheading, static `onSubmit` prevent),
      `CopyrightBar` (credit line + Component Dock link + 3 SVG social
      chips). Assemble in `App.tsx`.
- [ ] Accessibility: input label, `aria-label` on social/contact icon links,
      `aria-hidden` on decorative glyphs + heart, focus-visible rings.
- [ ] TDD: tests for every section + scenarios from the spec; 100% coverage.
- [ ] Gate: `bash scripts/verify-app.sh peroration`.
- [ ] PR: source (ColorLib Bootstrap Footer 20), `/theme/bft/` preview URL,
      tokens, what differs (Component Dock footer link, current-year
      copyright, distinct placeholder email, inline-SVG socials, focus
      rings). Bookkeep TEMPLATES.md line 796 `[x]` + surge URL after merge.
