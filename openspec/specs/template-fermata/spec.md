# Template: Fermata (Footer)

## Purpose

Fermata is a footer-component demo in the free-react-templates monorepo. It
is an original React recreation of the ColorLib free "Bootstrap Footer 09"
design (source: https://colorlib.com/wp/template/bootstrap-footer-09/), built
under a DIFFERENT name (**Fermata** — a musical notation symbol indicating
that a note or rest should be held/paused beyond its written duration, most
commonly marking the end of a piece or phrase, continuing the footer series'
ending-themed naming: Colophon → Envoi → Epilogue → Coda → Outro → Finale →
Postlude → Stretto → **Fermata**; a single lowercase word, kebab-case, no
collision with `apps/`, `openspec/specs/` or `docs/templates/` — verified
2026-08-16), per the monorepo naming mandate, with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript. The page is a footer-only component
demo: a light-gray `70vh` filler area (labeled "Footer #9" in the source) →
the footer itself — a TRANSPARENT band (no background color — the white page
shows through; `padding: 7rem 0`), Poppins, with a SINGLE CENTERED column
(`col-md-9`): a big centered brand logo in electric violet `#4200ff` (2rem,
weight 900) → a horizontal row of SEVEN INLINE nav links (About / Services /
Press / Careers / FAQ / Legal / Contact; black, hover → `#4200ff`) → a
"Stay in touch" heading (bold 18px) above FIVE icon-only social links —
unusually for this series each brand glyph is COLORED with its brand color
(Instagram `#df588a`, Facebook `#3742d0`, Twitter `#15b8ff`, Pinterest
`#dd4d5a`, Dribbble `#fa38c1`) → a small centered copyright line in `#999`.
The design is LIGHT and airy: white background, one violet accent (`#4200ff`)
used for the logo and link hovers, black inline nav links, brand-colored
social glyphs, gray copyright. No images, no text buttons, no subscribe form.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Footer 09" — one of the free "Bootstrap
  Footer" series (footer-only component demos; the page body is a 70vh
  filler strip so the footer is the deliverable). Source page:
  https://colorlib.com/wp/template/bootstrap-footer-09/. TEMPLATES.md has ONE
  copy (line 785, `- [ ]` unchecked). This prep: Bootstrap Footer 09 →
  **Fermata**. When the implementer finishes, that row gets bookkept `[x]`.
- **PREVIEW PATH QUIRK (same as the rest of the series — see the colophon
  prep):** `https://preview.colorlib.com/theme/bootstrap-footer-09/` returns
  **HTTP 404** ("Not Found"). The footer series is served under the
  **`/theme/bft/`** prefix (NOT `/theme/bootstrap/`): the live preview is
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-09/`.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-09/` (HTTP 200,
  17,243 bytes HTML, `<title>Footer 09</title>`). Stylesheets:
  `fonts/icomoon/style.css` (icon font), `css/bootstrap.min.css`
  (**Bootstrap v4.5.3**, shared with the series), `css/style.css` (1,808
  bytes — a DEDICATED sheet containing ONLY the `.footer-16371` rules;
  verified: no other `footer-\d+` class anywhere in the HTML or the sheet).
  No JS behavior needed (jquery/popper/bootstrap.min.js are loaded but the
  footer is static — the recreation needs none of them). The `<head>` inlines
  cf-fonts `@font-face` blocks for **Roboto**, **Poppins** and **Source Serif
  Pro** (no Google Fonts `<link>`); the body declares Roboto and the footer
  overrides to Poppins — **Source Serif Pro is loaded but never used in this
  footer's CSS** (it is a leftover from the theme — the recreation does NOT
  need it). The recreation ADDS Google Fonts `<link>`s for Roboto (body) +
  Poppins (footer) in index.html.
- **Visual design (from live DOM + CSS tokens + TEMPLATES.md screenshot
  `bootstrap-footer-09.jpg`, viewed in browser):** light, minimal, centered.
  Screenshot matches the live DOM (NO variance): light-gray (`#f8f9fa`)
  demo area with "Footer #9" centered; below it a WHITE footer band. All
  content is centered in a single column: at the top the brand logo
  "Colorlib" in bold uppercase-ish violet (`#4200ff`, ~2rem, weight 900);
  below it a single horizontal row of seven small black inline links
  (About, Services, Press, Careers, FAQ, Legal, Contact); below that a
  small bold black "Stay in touch" heading with five circular brand-colored
  social icons in a row; at the very bottom tiny gray copyright text.
  Clean, generous whitespace, no borders, no background image, no cards.
  The ONE violet accent (`#4200ff`) is the only non-neutral color at rest
  (besides the colored social glyphs).
- **Structure (DOM order, 1:1):** `div.content.d-flex.align-items-center.bg-light`
  (height 70vh, `h2.w-100.text-center` "Footer #9") →
  `footer.footer-16371` (`padding: 7rem 0`, Poppins, transparent/white bg)
  → `div.container` → `div.row.justify-content-center` →
  `div.col-md-9.text-center`:
  1. `div.footer-site-logo.mb-4` — `a` "Colorlib" (centered, `font-size:
2rem`, `font-weight: 900`, `color: #4200ff`; `mb-4` = 1.5rem below)
  2. `ul.list-unstyled.nav-links.mb-5` — SEVEN INLINE links (`li` =
     `display: inline-block`; `a` = `padding: 10px`, `color: #000`, hover →
     `#4200ff`): About, Services, Press, Careers, FAQ, Legal, Contact
     (note: this is a single horizontal row — NOT stacked columns like
     footer-08/Stretto; `mb-5` = 3rem below)
  3. `div.social.mb-4` — `h3` "Stay in touch" (bold, `font-size: 18px`,
     `color: #000`) + `ul.list-unstyled` with FIVE icon-only social links
     (`li` = `display: inline-block`; `a` = `display: inline-block`,
     `padding: 10px`), each glyph colored with its BRAND color:
     - `li.in` (Instagram) — `color: #df588a`
     - `li.fb` (Facebook) — `color: #3742d0`
     - `li.tw` (Twitter) — `color: #15b8ff`
     - `li.pin` (Pinterest) — `color: #dd4d5a`
     - `li.dr` (Dribbble) — `color: #fa38c1`
  4. `div.copyright` — `p.mb-0 > small` "© Colorlib. All Rights Reserved."
     (`color: #999999`, Bootstrap `small` = 80% font-size)
- **Grid behavior (Bootstrap 4.5.3, reproduce responsively):** the footer's
  only grid is `row.justify-content-center` → `col-md-9` — a single centered
  column taking 9/12 on md+ (≥768px) and full width below md. Everything
  inside is centered text. No multi-column layout, no order flips, no
  horizontal scroll. The nav links stay inline at every breakpoint (they
  wrap naturally if space runs out). This is the SIMPLEST grid in the
  footer series.
- **Icons:** icomoon (FontAwesome 4 codepoints): `icon-instagram` `\f16d`,
  `icon-twitter` `\f099`, `icon-facebook` `\f09a`, `icon-pinterest` `\f0d2`,
  `icon-dribbble` `\f17d` — brand glyphs only. **lucide-react REMOVED brand
  icons** (Twitter/Facebook/Instagram/Pinterest/Dribbble are NOT reliable
  exports — probe every import with the `typeof` check; per the skill's
  brand-icon guidance render the brand glyphs as inline SVGs (simple-icons
  paths) with `aria-label`s).

## Design tokens (from the reference — `.footer-16371` only)

| Token             | Value                                                                                                                                                                                                                                                                                                           | Source                                                       |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| Font family       | **Poppins** — `.footer-16371` sets `font-family: "Poppins", sans-serif` (body/h1-h6 stack is Roboto; the footer overrides). NOT loaded via a Google `<link>` in the preview (cf-fonts inline) — the recreation adds Google Fonts `<link>`s for Roboto + Poppins in index.html                                   | `css/style.css` `.footer-16371`                              |
| Footer background | **Transparent/white** — NO background color, NO image, NO overlay on `.footer-16371`; the white page shows through; `padding: 7rem 0` (this is the LIGHT variant of the series — contrast footer-08/Stretto's dark photo band)                                                                                  | `.footer-16371`                                              |
| Brand accent      | **`#4200ff`** (electric violet) — used on the site logo (`color: #4200ff`) AND as the nav-link hover color (`li a:hover { color: #4200ff }`); the only non-neutral color at rest besides the social glyphs                                                                                                      | `.footer-16371 .footer-site-logo a`, `.nav-links li a:hover` |
| Site logo         | `.footer-site-logo`: **`text-align: center`, `font-size: 2rem`, `font-weight: 900`**; the `a` inside is `color: #4200ff`; rendered with Bootstrap `mb-4` (1.5rem bottom margin)                                                                                                                                 | `.footer-16371 .footer-site-logo`                            |
| Nav links         | `li` **`display: inline-block`** (horizontal row, NOT stacked); `a` **`padding: 10px`, `color: #000`**, hover → **`#4200ff`** (brand violet, not white)                                                                                                                                                         | `.footer-16371 .nav-links li`, `li a`, `li a:hover`          |
| Social heading    | `h3` "Stay in touch": **`font-weight: bold`, `font-size: 18px`, `color: #000`**                                                                                                                                                                                                                                 | `.footer-16371 .social h3`                                   |
| Social icons      | `li` **`display: inline-block`**; `a` **`display: inline-block`, `padding: 10px`**; EACH glyph colored with its BRAND color: Instagram `#df588a`, Facebook `#3742d0`, Twitter `#15b8ff`, Pinterest `#dd4d5a`, Dribbble `#fa38c1` (no monochrome gray here — the colored glyphs are the design's playful accent) | `.footer-16371 .social ul li a` (+ per-class colors)         |
| Copyright         | `.copyright`: **`color: #999999`**; DOM: `p.mb-0 > small` (Bootstrap `small` = 80% font-size); source text "© Colorlib. All Rights Reserved." → recreation **"© <current year> Fermata"** + Component Dock link                                                                                                 | `.footer-16371 .copyright` + DOM                             |
| Filler area       | `.content`: `height: 70vh`, Bootstrap `bg-light` = **`#f8f9fa`**, `d-flex align-items-center` with a centered `h2.w-100.text-center` label "Footer #9"                                                                                                                                                          | `.content` + Bootstrap classes                               |
| Link transition   | `a { transition: .3s all ease; }`; `a, a:hover { text-decoration: none !important; }` (global)                                                                                                                                                                                                                  | `css/style.css` top rules                                    |
| Icons             | icomoon (FontAwesome 4 codepoints): `icon-instagram` `\f16d`, `icon-twitter` `\f099`, `icon-facebook` `\f09a`, `icon-pinterest` `\f0d2`, `icon-dribbble` `\f17d` — brand glyphs only; lucide brand icons removed → inline SVG (simple-icons) + `aria-label`                                                     | `fonts/icomoon/style.css`                                    |
| Mobile behavior   | Single centered column: `col-md-9` (9/12 centered) on md+ (≥768px), full-width below md; inline nav links wrap naturally; no multi-column layout anywhere — no horizontal scroll                                                                                                                                | Bootstrap classes                                            |

## Requirements

### Requirement: Page composition

The system SHALL render the footer-component demo with a main landmark, a
document title, and the mandatory footer landmark.

#### Scenario: Full page render

- **GIVEN** the Fermata app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the filler area and the footer inside the
  main landmark
- **AND** the document title SHALL be "Fermata — Footer"

### Requirement: Filler demo area

The system SHALL render the light-gray filler strip above the footer,
matching the source's demo-content role.

#### Scenario: Filler renders with a centered label

- **GIVEN** the page is rendered
- **WHEN** the top of the page loads
- **THEN** a `#f8f9fa` light-gray area SHALL be visible filling the viewport
  above the footer (the source uses `height: 70vh`; the recreation may use a
  similar min-height so the footer still peeks into the first viewport)
- **AND** a centered level-2 heading SHALL label the demo (the source shows
  **"Footer #9"** — the recreation may show the template's own name as the
  demo label; keep the same kind of filler content)

### Requirement: Light footer band

The system SHALL render the transparent/white footer band with the source's
padding and Poppins typeface (this variant has NO background image, NO
overlay, NO dark treatment).

#### Scenario: Footer band renders light

- **GIVEN** the filler area is rendered
- **WHEN** the user inspects the footer
- **THEN** a semantic `<footer>` SHALL render with `padding: 7rem 0` and
  `font-family: "Poppins", sans-serif`
- **AND** the footer SHALL have NO background color, NO background image and
  NO overlay — the white page background shows through (the LIGHT variant;
  do NOT copy Stretto/footer-08's dark photo band)
- **AND** all footer content SHALL be centered (the source wraps it in
  `row.justify-content-center` → `col-md-9.text-center`)

### Requirement: Brand logo

The system SHALL render the large centered violet site-logo link at the top
of the footer.

#### Scenario: Site logo renders

- **GIVEN** the footer band is rendered
- **WHEN** the user inspects the top of the footer
- **THEN** a centered logo link SHALL render with `font-size: 2rem`,
  `font-weight: 900`, `color: #4200ff` and ~1.5rem bottom margin — the
  source shows **"Colorlib"** → the recreation uses its own brand name
  **"Fermata"** (NO ColorLib reference in app code)

### Requirement: Inline nav links

The system SHALL render the seven horizontal inline nav links with the
source's exact copy, black color, and violet hover.

#### Scenario: Nav links render as a horizontal row

- **GIVEN** the brand logo is rendered
- **WHEN** the user inspects below the logo
- **THEN** a single horizontal row SHALL render (NOT stacked columns) of
  seven inline-block links, each with `10px` padding, `color: #000`,
  hover → `#4200ff`, in this exact order:
  1. **About**
  2. **Services**
  3. **Press**
  4. **Careers**
  5. **FAQ**
  6. **Legal**
  7. **Contact**
- **AND** the list SHALL have ~3rem bottom margin (the source uses `mb-5`)
- **AND** links SHALL use `transition: .3s all ease` and no underlines

### Requirement: Social icons

The system SHALL render the "Stay in touch" heading and five icon-only
social links, each glyph tinted with its brand color per the reference
tokens, with accessible names (the source uses bare icon spans).

#### Scenario: Social icons render in brand colors

- **GIVEN** the nav links are rendered
- **WHEN** the user inspects below the nav row
- **THEN** a bold 18px BLACK heading **"Stay in touch"** SHALL render
- **AND** five inline-block icon-only social links SHALL render below it,
  each `display: inline-block` with `10px` padding, glyph color per the
  reference (NOT monochrome — brand colors are the design's accent):
  1. **Instagram** — `#df588a`
  2. **Facebook** — `#3742d0`
  3. **Twitter** — `#15b8ff`
  4. **Pinterest** — `#dd4d5a`
  5. **Dribbble** — `#fa38c1`
- **NOTE (lucide-react limitation):** lucide-react REMOVED brand icons
  (Twitter/Facebook/Instagram/Pinterest/Dribbble are `undefined` exports) —
  render the brand glyphs as inline SVGs (simple-icons paths), matching the
  skill's brand-icon guidance. Probe every icon import with the `typeof`
  check before committing.

### Requirement: Copyright line

The system SHALL render the centered small copyright text with the renamed
brand plus the mandatory Component Dock credit.

#### Scenario: Copyright renders centered

- **GIVEN** the social icons are rendered
- **WHEN** the user inspects the bottom of the footer
- **THEN** a small (80%-scale) gray `#999999` text line SHALL render
  centered reading **"© <current year> Fermata"** (the source shows a fixed
  "© Colorlib. All Rights Reserved.")
- **AND** the footer SHALL contain a link to
  `https://www.componentdock.com/` branded as "Component Dock" (e.g. in the
  copyright line)

### Requirement: Responsive layout

The system SHALL reproduce the source's single-centered-column grid: 9/12
centered on md+, full-width below md.

#### Scenario: Column adapts across breakpoints

- **GIVEN** the footer is rendered
- **WHEN** the viewport is at the md breakpoint (≥768px)
- **THEN** the footer content SHALL be constrained to 9/12 width and
  centered (the source uses `row.justify-content-center` → `col-md-9`)
- **AND** below md the content SHALL be full-width, still centered
- **AND** the inline nav links SHALL wrap naturally rather than overflow
- **AND** the page SHALL never overflow horizontally

### Requirement: Accessibility

The system SHALL expose semantic landmarks, accessible social controls, and
keyboard-operable interactivity.

#### Scenario: Screen reader exposure

- **GIVEN** the page is rendered
- **WHEN** assistive technology inspects the page
- **THEN** the page SHALL have a main landmark and a semantic `<footer>`
  landmark
- **AND** the five icon-only social links SHALL have accessible names
  (Instagram, Facebook, Twitter, Pinterest, Dribbble)
- **AND** all interactive elements SHALL be focusable and SHALL show a
  focus-visible ring

## Verification checklist

- [ ] `npm run verify:app fermata` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Document title "Fermata — Footer"
- [ ] Filler: `#f8f9fa` area (~70vh) with a centered demo label
- [ ] Footer band: LIGHT — white/transparent background (NO image, NO
      overlay, NO dark treatment); `padding: 7rem 0`, Poppins; semantic
      `<footer>` + main landmark; content centered (`col-md-9` equivalent)
- [ ] Brand logo: centered "Fermata" link (2rem, weight 900, `#4200ff`,
      ~1.5rem bottom margin)
- [ ] Inline nav row: About, Services, Press, Careers, FAQ, Legal, Contact —
      exact copy; inline-block links, 10px padding, `#000`, hover `#4200ff`,
      ~3rem bottom margin, `.3s` transition, no underlines
- [ ] Social: bold 18px BLACK "Stay in touch" heading + five icon-only links
      (Instagram `#df588a`, Facebook `#3742d0`, Twitter `#15b8ff`, Pinterest
      `#dd4d5a`, Dribbble `#fa38c1`) — inline SVG brand icons per lucide
      limitation, `aria-label`s
- [ ] Copyright: `#999999` small text centered "© <current year> Fermata" +
      Component Dock link `https://www.componentdock.com/`
- [ ] Responsive: content 9/12 centered on md+ / full-width below md; nav
      links wrap naturally; no horizontal overflow
- [ ] Roboto (body) + Poppins (footer) via Google Fonts `<link>` in
      `index.html` (Source Serif Pro NOT needed — loaded but unused in the
      source footer)
- [ ] ZERO images (this variant has none); NO ColorLib reference anywhere in
      `apps/fermata` (provenance lives only here + TEMPLATES.md + PR)
