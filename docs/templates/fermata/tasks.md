# Fermata (ColorLib Bootstrap Footer 09) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-fermata`.

## Design notes (replication findings)

- **Original:** ColorLib "Bootstrap Footer 09" — a free footer-only component
  demo from the "Bootstrap Footer" series (source:
  https://colorlib.com/wp/template/bootstrap-footer-09/). The page body is a
  70vh light-gray filler strip; the deliverable is the footer. TEMPLATES.md
  has ONE copy (line 785, `- [ ]` unchecked — bookkeep `[x]` + surge URL when
  done). This prep: Bootstrap Footer 09 → **Fermata** (a music-notation
  symbol marking a held/paused note, commonly at the end of a piece —
  continues the series' ending-themed names Colophon → Envoi → Epilogue →
  Coda → Outro → Finale → Postlude → Stretto; no collision with `apps/`,
  `openspec/specs/`, `docs/templates/` — verified 2026-08-16).
- **PREVIEW PATH QUIRK (series-wide — see the colophon prep):**
  `https://preview.colorlib.com/theme/bootstrap-footer-09/` returns **HTTP
  404**. The live preview is served under the `/theme/bft/` prefix:
  **`https://preview.colorlib.com/theme/bft/bootstrap-footer-09/`**.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-09/` (HTTP 200,
  17,243 bytes, `<title>Footer 09</title>`). Stylesheets:
  `fonts/icomoon/style.css` (icon font — FontAwesome codepoints: instagram
  `\f16d`, twitter `\f099`, facebook `\f09a`, pinterest `\f0d2`, dribbble
  `\f17d`), `css/bootstrap.min.css` (Bootstrap **v4.5.3**), `css/style.css`
  (1,808 bytes — a **DEDICATED** sheet containing ONLY `.footer-16371` rules;
  verified no other `footer-\d+` class in HTML or sheet). No JS behavior
  (jquery/popper/bootstrap.min.js load but the footer is static — none needed
  in the recreation). No Google Fonts `<link>` — cf-fonts inline `@font-face`
  blocks load **Roboto** (body), **Poppins** (footer) and **Source Serif
  Pro**; Source Serif Pro is NEVER used in this footer's CSS (theme leftover)
  — the recreation adds Google Fonts `<link>`s for Roboto + Poppins only.
- **Screenshot:** `bootstrap-footer-09.jpg` (viewed in browser, 1200×972) —
  light-gray demo area with "Footer #9" centered; below it a WHITE footer
  band. Everything centered in one column: violet "Colorlib" logo (2rem,
  weight 900, `#4200ff`), one horizontal row of seven small black inline
  links (About, Services, Press, Careers, FAQ, Legal, Contact), a small bold
  black "Stay in touch" heading, five circular brand-colored social icons,
  then tiny gray copyright text. **NO variance between screenshot and live
  DOM.** Light + minimal with generous whitespace; the ONLY accents are the
  violet logo/hover color and the colored social glyphs.
- **Design rhythm:** COMPONENT template, not a landing page — no navbar, no
  hero, no text buttons, no subscribe form. Page = light filler (70vh) +
  LIGHT transparent footer. The closest cousins are Finale (footer 06 —
  same `#4200ff` accent and 10px-padded social links) and Stretto (footer 08
  — same `7rem` padding) but this variant is the SIMPLEST: a single centered
  column instead of footer-06's five-column grid or footer-08's dark photo
  band.
- **Footer band:** `.footer-16371` — `padding: 7rem 0`,
  `font-family: "Poppins", sans-serif`; **NO background color, NO image, NO
  overlay** — the white page shows through (LIGHT variant; do NOT copy
  Stretto's `rgba(0,0,0,0.7)` photo band). Content wrapper:
  `div.container` → `div.row.justify-content-center` → `div.col-md-9.text-center`.
- **Brand accent:** `#4200ff` (electric violet) — the site-logo color AND the
  nav-link hover color; the only non-neutral color at rest besides the social
  glyphs.
- **Site logo:** `div.footer-site-logo.mb-4` — centered, `font-size: 2rem`,
  `font-weight: 900`; inner `a` `color: #4200ff`; source text "Colorlib" →
  recreation **"Fermata"**.
- **Nav links:** `ul.list-unstyled.nav-links.mb-5` — SEVEN links in ONE
  horizontal row (`li` `display: inline-block`; `a` `padding: 10px`,
  `color: #000`, hover **`#4200ff`**): About, Services, Press, Careers, FAQ,
  Legal, Contact. NOT stacked columns (contrast Stretto/footer-08); `mb-5` =
  3rem below.
- **Social block:** `div.social.mb-4` — `h3` "Stay in touch" (bold, 18px,
  `#000`) + `ul.list-unstyled` with FIVE icon-only links (`li`
  `display: inline-block`; `a` `display: inline-block`, `padding: 10px`),
  each glyph in its BRAND color (the design's playful accent — NOT the
  monochrome gray of the other variants):
  - Instagram (`li.in`) — `#df588a`
  - Facebook (`li.fb`) — `#3742d0`
  - Twitter (`li.tw`) — `#15b8ff`
  - Pinterest (`li.pin`) — `#dd4d5a`
  - Dribbble (`li.dr`) — `#fa38c1`
    **lucide-react REMOVED brand icons** (probe with `typeof`) → inline SVG
    brand glyphs (simple-icons paths) + `aria-label`s.
- **Copyright:** `div.copyright` → `p.mb-0 > small` "© Colorlib. All Rights
  Reserved." (`color: #999999`; Bootstrap `small` = 80%) → recreation
  **"© <current year> Fermata"** + Component Dock link.
- **Grid (Bootstrap 4.5.3, reproduce responsively):** the ONLY grid is
  `row.justify-content-center` → `col-md-9` — a single centered column (9/12
  on md+, full-width below md). Inline nav links wrap naturally. No
  multi-column layout, no order flips, no horizontal scroll. Simplest grid
  in the series.
- **Images:** ZERO — this variant has no images at all (no background photo,
  no cards, nothing).
- **A11y:** semantic `<footer>` + main landmark; accessible names for the 5
  icon-only social links (source has bare spans — recreation adds them);
  focus-visible rings on all interactive elements.

## Structure order (1:1)

1. `main` → filler `.content` (`#f8f9fa`, ~70vh, centered demo label —
   source: "Footer #9").
2. `footer.footer-16371` (transparent/white bg, `padding: 7rem 0`, Poppins)
   → `div.container`:
   - `div.row.justify-content-center` → `div.col-md-9.text-center`:
     a. `div.footer-site-logo.mb-4` — "Fermata" logo link (2rem, weight 900,
     `#4200ff`, centered, mb 1.5rem)
     b. `ul.nav-links.mb-5` — ONE horizontal row: About, Services, Press,
     Careers, FAQ, Legal, Contact (inline-block, padding 10px, `#000`,
     hover `#4200ff`)
     c. `div.social.mb-4` — "Stay in touch" heading (bold 18px `#000`) +
     five brand-colored icon links (Instagram `#df588a`, Facebook
     `#3742d0`, Twitter `#15b8ff`, Pinterest `#dd4d5a`, Dribbble
     `#fa38c1`)
     d. `div.copyright` — small `#999999` "© <year> Fermata" + Component
     Dock link

## Implementation tasks

- [ ] Scaffold `apps/fermata` (copy simplest existing app; package
      `@free-react-templates/fermata`; `public/CNAME` =
      `fermata.free.componentdock.com`; homepage =
      `https://fermata.free.componentdock.com`); register the workspace in
      `package-lock.json`
- [ ] `index.html`: title "Fermata — Footer", Google Fonts `<link>`s for
      Roboto + Poppins (NOT Source Serif Pro)
- [ ] `src/index.css` tokens: `#4200ff` (brand accent — logo + nav hover),
      `#000` (nav links, social heading), `#999999` (copyright), `#f8f9fa`
      (filler bg), `#df588a` / `#3742d0` / `#15b8ff` / `#dd4d5a` / `#fa38c1`
      (social brand colors); `a` transition `.3s all ease`
- [ ] Components: `Filler` (light ~70vh demo strip), `Footer` (logo, inline
      nav row, "Stay in touch" + colored socials, copyright bar + Component
      Dock link)
- [ ] Footer band: transparent/white — NO background image, NO overlay;
      `padding: 7rem 0`; semantic `<footer>`; content centered (`col-md-9`
      equivalent, 9/12 on md+ / full-width below md)
- [ ] Brand logo: centered "Fermata" link (2rem, weight 900, `#4200ff`, mb
      1.5rem)
- [ ] Inline nav row: exact copy (About, Services, Press, Careers, FAQ,
      Legal, Contact); inline-block links, 10px padding, `#000`, hover
      `#4200ff`, ~3rem bottom margin; no underlines
- [ ] Socials: bold 18px black "Stay in touch" heading + five icon-only
      links in brand colors (Instagram `#df588a`, Facebook `#3742d0`,
      Twitter `#15b8ff`, Pinterest `#dd4d5a`, Dribbble `#fa38c1`); inline
      SVG brand icons (lucide removed them — probe exports with `typeof`);
      `aria-label` each
- [ ] Copyright bar: `#999999` small text centered "© <year> Fermata" +
      Component Dock link `https://www.componentdock.com/`; NO ColorLib
      references in app code
- [ ] Responsive: single centered column (9/12 md+, full-width below md);
      nav links wrap naturally; no horizontal overflow
- [ ] Tests: 100% coverage (filler label, white footer band, logo, seven
      inline nav links with exact copy + hover color, "Stay in touch"
      heading, five social links with brand colors + aria-labels, copyright + Component Dock link, responsive classes present)
- [ ] `npm run verify:app fermata` passes; commit `feat: add fermata …`; PR +
      immediate squash merge; then TEMPLATES.md bookkeeping — line 785
      (Bootstrap Footer 09) → `[x]` + surge URL +
      `npm run readme:status`

## Verification checklist (from spec)

- [ ] Filler: `#f8f9fa` ~70vh + centered demo label
- [ ] Footer LIGHT band: white/transparent (NO image, NO overlay, NO dark
      treatment); `padding: 7rem 0`, Poppins; semantic footer + main
      landmark; content centered
- [ ] Brand logo: centered "Fermata" link (2rem, weight 900, `#4200ff`, mb
      1.5rem)
- [ ] Inline nav row: About, Services, Press, Careers, FAQ, Legal, Contact —
      exact copy; inline-block, 10px padding, `#000`, hover `#4200ff`, ~3rem
      bottom margin, `.3s` transition, no underlines
- [ ] Social: bold 18px black "Stay in touch" heading + five brand-colored
      icon-only links (Instagram `#df588a`, Facebook `#3742d0`, Twitter
      `#15b8ff`, Pinterest `#dd4d5a`, Dribbble `#fa38c1`), inline SVG brand
      icons, aria-labels
- [ ] Copyright: `#999999` small centered "© <year> Fermata" + Component
      Dock link (`https://www.componentdock.com/`)
- [ ] Responsive: 9/12 centered on md+ / full-width below md; nav links wrap
      naturally; no horizontal overflow
- [ ] Roboto + Poppins Google Fonts links (no Source Serif Pro); ZERO images
      (this variant has none); no ColorLib anywhere in `apps/fermata`
- [ ] `npm run verify:app fermata` green; TEMPLATES.md line 785 bookkept `[x]`
