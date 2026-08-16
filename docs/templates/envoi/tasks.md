# Envoi (ColorLib Bootstrap Footer 03) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-envoi`.

## Design notes (replication findings)

- **Original:** ColorLib "Bootstrap Footer 03" — a free footer-only component
  demo from the "Bootstrap Footer" series (source:
  https://colorlib.com/wp/template/bootstrap-footer-03/). The page body is a
  70vh light-gray filler strip; the deliverable is the footer. TEMPLATES.md
  has ONE copy (line 779, `- [ ]` unchecked — bookkeep `[x]` + surge URL when
  done). This prep: Bootstrap Footer 03 → **Envoi** (the concluding part of a
  poem or book — continues the back-matter series: Footer 01 → Colophon,
  Footer 02 → Epilogue; no collision with `apps/`, `openspec/specs/`,
  `docs/templates/` — verified 2026-08-16).
- **PREVIEW PATH QUIRK (same as Footer 01/02 — verified for 03):**
  `https://preview.colorlib.com/theme/bootstrap-footer-03/` returns **HTTP
  404**. The "Bootstrap *" series is served under the **`/theme/bft/`**
  prefix: the real preview is
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-03/` (HTTP 200,
  17,681 bytes, `<title>Footer 03</title>`).
- **Preview DOM analyzed (LIVE, fetched via curl):** stylesheets
  `fonts/icomoon/style.css` (icon font), `css/bootstrap.min.css` (Bootstrap
  **v4.5.3**), `css/style.css` (custom, only **2,509 bytes / 75 lines** —
  every custom token below comes from it). No JS libs; Roboto + Poppins via
  system stacks (no Google Fonts link in the source — add the Google Fonts
  `<link>` in the recreation's index.html).
- **Screenshot:** `bootstrap-footer-03.jpg` (viewed in browser, 1200×972) —
  light-gray demo area with "Footer #3" centered; WHITE footer: black bold
  "Colorlib" logo + six round brand-colored social circles right (Facebook
  dark blue, Twitter light blue, Instagram magenta, Behance blue, Dribbble
  pink, YouTube red with play triangle); row 2 "Privacy Policy" (two links)
  left + Home/Our works/About/Blog/Contact right; centered small copyright
  under a faint hairline. **Screenshot matches the live DOM/CSS** (the only
  variance is cosmetic: the screenshot renders the Instagram circle as a
  gradient and the fifth circle as a "g+" — follow the flat CSS colors as
  authoritative).
- **Design rhythm:** COMPONENT template, not a landing page — no navbar, no
  hero, no images, no forms. Page = light filler (70vh) + white footer with
  three stacked rows. Distinct from its siblings: **white** background (not
  dark), **`padding: 4rem 0`** (not 7rem), six social circles (not five),
  and NO CTA band.
- **Row 1:** `.row.mb-5` → `div.col-md-4` (brand) + `div.col-md-8.text-md-right`
  (socials). Brand `.site-logo a`: **30px, `#000`, `font-weight: 900`**
  (the `.site-logo { color:#fff }` rule is a dead leftover — the anchor wins).
  Socials `ul.list-unstyled.social-icons`: six `li` inline-block, each
  `a` a **40×40px circle** (`border-radius: 50%`, white glyph centered via
  absolute translate(-50%,-50%)): `a.fb` `#3b579b` (Facebook), `a.tw`
  `#00a0fb` (Twitter), `a.in` `#c31574` (Instagram), `a.be` `#394cff`
  (Behance), `a.dr` `#ff2e6e` (Dribbble), `a.yt` `#fa2614` (YouTube —
  `icon-play` play triangle).
- **Row 2:** `.row.mb-5` → `div.col-md-6` (`ul.nav-links.nav-left`: **Privacy**
  - **Policy** as TWO adjacent links) + `div.col-md-6.text-md-right`
    (`ul.nav-links.nav-right`: **Home, Our works, About, Blog, Contact**).
    Links **14px `#777`, padding 10px**; `transition: .3s all ease`.
    Padding quirks: below xl (1199.98px) `li:first-child a` gets
    `padding-left: 0` on BOTH lists; always `nav-right li:last-child a`
    `padding-right: 0`.
- **Row 3:** `div.row` → `div.col` → `div.copyright`: `border-top: 1px solid
#efefef`, `padding-top: 50px`, `text-align: center`, `#777`, `p > small`
  "Copyright 2019. All Rights Reserved." → "Copyright <year>. All Rights
  Reserved." + the mandatory Component Dock link
  (`https://www.componentdock.com/`, "Made with Component Dock" line — the
  natural slot is the copyright bar).
- **Icons:** lucide-react REMOVED brand icons (Facebook/Twitter/Instagram/
  Behance/Dribbble are `undefined` exports — probe with `typeof`) → render
  the five brand glyphs as inline SVGs (simple-icons paths); YouTube play
  triangle as inline SVG polygon (or lucide `Play`). Add `aria-label`s
  (source uses bare icon-font spans).
- **A11y:** semantic `<footer>` + main landmark; icon-only socials need
  accessible names; focus-visible rings (source has none of this — the
  recreation adds it per monorepo conventions).
- **Images:** NONE — the template is image-free; no picsum placeholders
  needed.

## Structure order (1:1)

1. `main` → filler `.content` (`#f8f9fa`, ~70vh, centered demo label —
   source: "Footer #3").
2. `footer.footer-59391` (`#fff`, `border-top: 1px solid #efefef`, Poppins,
   `padding: 4rem 0`):
   a. `.row.mb-5` — `col-md-4` brand "Envoi" (30px black 900) + `col-md-8
   text-md-right` six round brand-color social circles.
   b. `.row.mb-5` — `col-md-6` Privacy/Policy (two links) + `col-md-6
   text-md-right` Home / Our works / About / Blog / Contact.
   c. `.row` — centered copyright bar (hairline `#efefef` top border,
   `padding-top: 50px`, `#777` small text + Component Dock link).

## Implementation tasks

- [ ] Scaffold `apps/envoi` (copy simplest existing app; package
      `@free-react-templates/envoi`; `public/CNAME` =
      `envoi.free.componentdock.com`; homepage =
      `https://envoi.free.componentdock.com`); register the workspace in
      `package-lock.json`
- [ ] `index.html`: title "Envoi — Footer", Roboto + Poppins Google Fonts
      `<link>`
- [ ] `src/index.css` tokens: `#fff` (footer bg), `#efefef` (hairline
      borders), `#000` (logo), `#777` (nav links + copyright), `#f8f9fa`
      (filler bg), six brand colors (`#3b579b`, `#00a0fb`, `#c31574`,
      `#394cff`, `#ff2e6e`, `#fa2614`)
- [ ] Components: `Filler` (light ~70vh demo strip), `Footer` (brand row +
      socials, nav rows, copyright bar)
- [ ] Brand "Envoi" 30px black `font-weight: 900`; copyright "Copyright
      <year>. All Rights Reserved."; Component Dock link
      `https://www.componentdock.com/`; NO ColorLib references in app code
- [ ] Socials: 6 round 40px circles with per-platform brand colors —
      Facebook / Twitter / Instagram / Behance / Dribbble as inline SVG brand
      icons (lucide removed them — probe exports with `typeof`), YouTube play
      triangle inline SVG (or lucide `Play`); `aria-label` each
- [ ] Nav rows: Privacy + Policy (two adjacent links) left; Home / Our works
      / About / Blog / Contact right (right-aligned on md+); 14px `#777`,
      10px padding, first/last-item padding quirks (flush-left below xl)
- [ ] Responsive grid: row 1 `md:grid-cols-3` (1/3 + 2/3, socials
      right-aligned), row 2 `md:grid-cols-2` (50/50, nav right-aligned);
      stack below md
- [ ] Tests: 100% coverage (filler label, brand + 6 socials with
      aria-labels + brand colors, nav link sets exact, copyright + Component
      Dock link, responsive classes present)
- [ ] `npm run verify:app envoi` passes; commit `feat: add envoi …`;
      PR + immediate squash merge; then TEMPLATES.md bookkeeping — line 779
      (Bootstrap Footer 03) → `[x]` + surge URL +
      `npm run readme:status`

## Verification checklist (from spec)

- [ ] Filler: `#f8f9fa` ~70vh + centered demo label
- [ ] Footer: WHITE `#fff`, `border-top: 1px solid #efefef`, `padding: 4rem
    0`; semantic footer + main landmark; focus-visible rings
- [ ] Brand: "Envoi" 30px black 900; six 40×40 round socials — Facebook
      `#3b579b`, Twitter `#00a0fb`, Instagram `#c31574`, Behance `#394cff`,
      Dribbble `#ff2e6e`, YouTube `#fa2614` (inline SVG glyphs, aria-labels)
- [ ] Nav rows: Privacy/Policy (two links) + Home / Our works / About / Blog
      / Contact, 14px `#777`, padding quirks per source
- [ ] Copyright: centered `#777` small text under `#efefef` hairline
      (`padding-top: 50px`); Component Dock link
      (`https://www.componentdock.com/`)
- [ ] Responsive: 1/3+2/3 and 50/50 splits on md+, stacked below 768px, nav
      flush-left below xl
- [ ] Roboto + Poppins Google Fonts links; no images; no ColorLib anywhere in
      `apps/envoi`
- [ ] `npm run verify:app envoi` green; TEMPLATES.md line 779 bookkept `[x]`
