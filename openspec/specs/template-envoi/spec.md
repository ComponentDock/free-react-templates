# Template: Envoi (Footer)

## Purpose

Envoi is a footer-component demo in the free-react-templates monorepo. It is
an original React recreation of the ColorLib free "Bootstrap Footer 03"
design (source: https://colorlib.com/wp/template/bootstrap-footer-03/), built
under a DIFFERENT name (**Envoi** — the concluding part of a poem or book, a
fitting name for a footer template, continuing the back-matter naming of the
sibling Footer 01/02 recreations "Colophon" and "Epilogue"; a single lowercase
word, kebab-case, no collision with `apps/`, `openspec/specs/` or
`docs/templates/` — verified 2026-08-16), per the monorepo naming mandate,
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The
page is a footer-only component demo: a light-gray `70vh` filler area
(labeled "Footer #3" in the source) → the footer itself — a **white** band
(`#fff`, `border-top: 1px solid #efefef`, `padding: 4rem 0`) with three rows:
brand + six brand-colored social circles, two nav-link rows (Privacy/Policy
left, Home/Our works/About/Blog/Contact right), and a centered copyright bar
split by a hairline border.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Footer 03" — one of the free "Bootstrap
  Footer" series (footer-only component demos; the page body is a 70vh filler
  strip so the footer is the deliverable). Source page:
  https://colorlib.com/wp/template/bootstrap-footer-03/. TEMPLATES.md has ONE
  copy (line 779, `- [ ]` unchecked). This prep: Bootstrap Footer 03 →
  **Envoi**. When the implementer finishes, that row gets bookkept `[x]`.
- **PREVIEW PATH QUIRK (same as Footer 01/02 — verified for 03):** the
  standard `https://preview.colorlib.com/theme/bootstrap-footer-03/` returns
  **HTTP 404** ("Not Found"). The "Bootstrap *" series is served under the
  **`/theme/bft/`** prefix: the real preview is
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-03/`.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-03/` (HTTP 200,
  17,681 bytes HTML, `<title>Footer 03</title>`). Stylesheets:
  `fonts/icomoon/style.css` (icon font), `css/bootstrap.min.css` (**Bootstrap
  v4.5.3**, 160,392 bytes), `css/style.css` (the template CSS — **2,509
  bytes / 75 lines**, all custom rules below are from it). No JS libs; no
  Google Fonts `<link>` (Roboto/Poppins come from system stacks in the
  source — the recreation adds the Google Fonts `<link>` in index.html).
- **Visual design (from live DOM + CSS tokens + TEMPLATES.md screenshot
  `bootstrap-footer-03.jpg`, 1200×972, viewed in browser):** matches the live
  DOM/CSS (minor variance: the screenshot's Instagram circle reads as a
  pink/purple gradient and the fifth circle reads as pink "g+" — the CSS is
  authoritative: flat brand colors, see tokens). Large light-gray (`#f8f9fa`)
  demo area with "Footer #3" centered in dark text; below it the **white**
  footer — row 1: black bold **"Colorlib"** logo left + six **40×40px round
  social circles** right (Facebook dark blue `#3b579b`, Twitter light blue
  `#00a0fb`, Instagram magenta `#c31574`, Behance blue `#394cff`, Dribbble
  pink `#ff2e6e`, YouTube red `#fa2614` with a white play triangle); row 2:
  "Privacy Policy" as two adjacent links left + inline nav (Home / Our works
  / About / Blog / Contact) right, both 14px gray `#777`; row 3: centered
  small copyright "Copyright 2019. All Rights Reserved." in `#777`,
  separated by a faint `#efefef` hairline.
- **Structure (DOM order, 1:1):**
  `div.content.d-flex.align-items-center.bg-light` (height `70vh`,
  `h2.w-100.text-center` "Footer #3") → `footer.footer-59391` (bg `#fff`,
  `border-top: 1px solid #efefef`, font **Poppins**, `padding: 4rem 0`) →
  `div.container`:
  1. `div.row.mb-5`:
     - `div.col-md-4` — `div.site-logo > a` **"Colorlib"** (30px, `#000`,
       `font-weight: 900`)
     - `div.col-md-8.text-md-right` — `ul.list-unstyled.social-icons`: six
       `li > a[class] > span.icon-*`:
       `a.fb` (icon-facebook), `a.tw` (icon-twitter), `a.in` (icon-instagram),
       `a.be` (icon-behance), `a.dr` (icon-dribbble), `a.yt` (icon-play)
  2. `div.row.mb-5`:
     - `div.col-md-6` — `ul.nav-links.list-unstyled.nav-left`: two
       `li > a` — **"Privacy"**, **"Policy"** (two adjacent links that read
       as "Privacy Policy")
     - `div.col-md-6.text-md-right` — `ul.nav-links.list-unstyled.nav-right`:
       five `li > a` — **Home, Our works, About, Blog, Contact**
  3. `div.row` — `div.col` — `div.copyright` (`border-top: 1px solid
#efefef`, `padding-top: 50px`, `text-align: center`, color `#777`) →
     `p > small` **"Copyright 2019. All Rights Reserved."**
- **Grid behavior (Bootstrap 4.5.3, reproduce responsively):** row 1 is
  `col-md-4` + `col-md-8` (logo 33.3% / socials 66.7% on md+, right-aligned
  via `text-md-right`); row 2 is two `col-md-6` (50/50 on md+, links
  right-aligned); row 3 is full-width centered. Below md each row's columns
  stack full-width (logo above socials, Privacy/Policy above the nav, and
  the `text-md-right` alignment drops).
- **Nav padding quirks (media queries):** `@media (max-width: 1199.98px)`:
  `.nav-left li:first-child a { padding-left: 0 }` AND
  `.nav-right li:first-child a { padding-left: 0 }` (both lists flush-left
  below xl). Always: `.nav-right li:last-child a { padding-right: 0 }`
  (flush-right edge).

## Design tokens (from the reference)

| Token             | Value                                                                                                                                                                                         | Source                                    |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| Font family       | **Roboto** — body + headings stack (`"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", ...`); the footer band uses **Poppins** (`font-family: "Poppins", sans-serif`)                  | `css/style.css` `body`, `.footer-59391`   |
| Footer background | **`#fff`** (white) — footer band, `border-top: 1px solid #efefef`, `padding: 4rem 0` (NOT the 7rem used by Footers 01/02)                                                                     | `.footer-59391`                           |
| Logo              | **30px, `#000`, `font-weight: 900`** (`.site-logo a`; the `.site-logo` `color:#fff` rule is a dead leftover — the anchor rule wins)                                                           | `.footer-59391 .site-logo a`              |
| Social circles    | **40×40px, `border-radius: 50%`, brand color per platform, white glyph** centered via absolute `top:50%; left:50%; translate(-50%,-50%)`; `li` inline-block; hover `transition: .3s all ease` | `.footer-59391 .social-icons li a`        |
| — Facebook        | **`#3b579b`** (dark blue) — `a.fb`, glyph `icon-facebook`                                                                                                                                     | `.social-icons li a.fb`                   |
| — Twitter         | **`#00a0fb`** (light blue) — `a.tw`, glyph `icon-twitter`                                                                                                                                     | `.social-icons li a.tw`                   |
| — Instagram       | **`#c31574`** (magenta/pink) — `a.in`, glyph `icon-instagram`                                                                                                                                 | `.social-icons li a.in`                   |
| — Behance         | **`#394cff`** (blue) — `a.be`, glyph `icon-behance`                                                                                                                                           | `.social-icons li a.be`                   |
| — Dribbble        | **`#ff2e6e`** (pink/red) — `a.dr`, glyph `icon-dribbble`                                                                                                                                      | `.social-icons li a.dr`                   |
| — YouTube         | **`#fa2614`** (red) — `a.yt`, glyph `icon-play` (play-triangle)                                                                                                                               | `.social-icons li a.yt`                   |
| Nav links         | **14px, `#777`, `padding: 10px`**; `li` inline-block; hover `transition: .3s all ease`; padding quirks per the media queries above                                                            | `.footer-59391 .nav-links li a`           |
| Copyright         | **`#777`, centered, `border-top: 1px solid #efefef`, `padding-top: 50px`**; `p > small`; source text "Copyright 2019. All Rights Reserved."                                                   | `.footer-59391 .copyright`                |
| Light filler      | **`#f8f9fa`** (Bootstrap `light`) — the 70vh demo area above the footer                                                                                                                       | Bootstrap `bg-light` / `.content`         |
| Section rhythm    | Filler 70vh; footer `padding: 4rem 0`; `row.mb-5` spacing between the three footer rows; copyright `padding-top: 50px`                                                                        | `.content`, `.footer-59391`, `.copyright` |
| Mobile behavior   | Below md: each row's columns stack; `text-md-right` alignment drops; nav padding-left-0 quirks apply below xl (1199.98px)                                                                     | Bootstrap classes + media queries         |

## Requirements

### Requirement: Page composition

The system SHALL render the footer-component demo with a main landmark, a
document title, and the mandatory footer landmark.

#### Scenario: Full page render

- **GIVEN** the Envoi app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the filler area and the footer inside the
  main landmark
- **AND** the document title SHALL be "Envoi — Footer"

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
  **"Footer #3"** — the recreation may show the template's own name as the
  demo label; keep the same kind of filler content)

### Requirement: Brand and social row

The system SHALL render the first row with the renamed brand logo left and
six brand-colored social circles right, matching the source's glyph set and
colors.

#### Scenario: Logo and social circles render

- **GIVEN** the filler area is rendered
- **WHEN** the footer's first row loads
- **THEN** a brand link SHALL read **"Envoi"** in black, 30px,
  `font-weight: 900` on the left (the source brands "Colorlib" — provenance
  stays out of app code)
- **AND** six **40×40px round** (`border-radius: 50%`) social buttons SHALL
  be visible on the right, each with its brand color and a white glyph:
  1. **Facebook** — `#3b579b`
  2. **Twitter** — `#00a0fb`
  3. **Instagram** — `#c31574`
  4. **Behance** — `#394cff`
  5. **Dribbble** — `#ff2e6e`
  6. **YouTube** — `#fa2614` (play-triangle glyph)
- **AND** each button SHALL be a link with an accessible name (the source
  uses bare icon-font spans — the recreation SHALL add `aria-label`s)
- **NOTE (lucide-react limitation):** lucide-react REMOVED brand icons
  (Facebook/Twitter/Instagram/Behance/Dribbble are `undefined` exports) —
  render the five brand glyphs as inline SVGs (simple-icons paths) and the
  YouTube play triangle as an inline SVG polygon (or lucide `Play`), matching
  the skill's brand-icon guidance. Probe every icon import with the `typeof`
  check before committing.

### Requirement: Navigation link rows

The system SHALL render the second row with the source's exact link sets —
the Privacy/Policy pair left and the five-link nav right.

#### Scenario: Nav links render with source copy

- **GIVEN** the brand row is rendered
- **WHEN** the user inspects the second row
- **THEN** two link lists SHALL be visible, each with **14px `#777` links**
  and `padding: 10px` per item:
  1. Left list: **"Privacy"** and **"Policy"** as two adjacent links (the
     source splits "Privacy Policy" into two anchors — keep the two-link
     structure so the pair reads as "Privacy Policy")
  2. Right list (right-aligned on md+): **Home, Our works, About, Blog,
     Contact**
- **AND** the left list's first item SHALL have `padding-left: 0` and the
  right list's last item SHALL have `padding-right: 0`
- **AND** below the xl breakpoint (1199.98px) the first item of BOTH lists
  SHALL drop its left padding (flush-left)

### Requirement: Copyright bar

The system SHALL render the bottom bar with the source's hairline border,
centered copyright text, and the mandatory Component Dock credit.

#### Scenario: Copyright bar renders with credit

- **GIVEN** the nav rows are rendered
- **WHEN** the user scrolls to the bottom bar
- **THEN** a hairline **`#efefef`** top border SHALL separate the bar
  (`padding-top: 50px`), with centered `#777` text
- **AND** the bar SHALL show the copyright line "Copyright <current year>.
  All Rights Reserved." (the source shows a static "Copyright 2019" — the
  recreation keeps the same phrasing with the live year)
- **AND** the footer SHALL contain a link to
  `https://www.componentdock.com/` branded as "Component Dock" (e.g. a
  "Made with Component Dock" line in the copyright bar — the monorepo
  mandate per conventions.md; the source has no such slot)

### Requirement: Responsive layout

The system SHALL reproduce the source's responsive grid behavior.

#### Scenario: Rows adapt across breakpoints

- **GIVEN** the footer is rendered
- **WHEN** the viewport is at the md breakpoint (≥768px)
- **THEN** the first row SHALL split logo (1/3) and socials (2/3,
  right-aligned), and the second row SHALL split the two link lists 50/50
  with the nav right-aligned
- **AND** below 768px each row SHALL stack full-width (logo above socials,
  Privacy/Policy above the nav) with the right-alignment dropped
- **AND** below the xl breakpoint the first nav item of both lists SHALL be
  flush-left (padding-left: 0)

### Requirement: Accessibility

The system SHALL expose semantic landmarks, accessible social links, and
keyboard-operable interactivity.

#### Scenario: Screen reader exposure

- **GIVEN** the page is rendered
- **WHEN** assistive technology inspects the page
- **THEN** the page SHALL have a main landmark and a semantic `<footer>`
  landmark
- **AND** all icon-only social buttons SHALL have `aria-label`s (Facebook,
  Twitter, Instagram, Behance, Dribbble, YouTube)
- **AND** all interactive elements SHALL be focusable and SHALL show a
  focus-visible ring

## Verification checklist

- [ ] `npm run verify:app envoi` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Document title "Envoi — Footer"
- [ ] Filler: `#f8f9fa` area (~70vh) with a centered demo label
- [ ] Footer: WHITE `#fff` bg, `border-top: 1px solid #efefef`,
      `padding: 4rem 0`, font Poppins
- [ ] Row 1: brand "Envoi" 30px black `font-weight: 900` left; six 40×40
      round social circles right — Facebook `#3b579b`, Twitter `#00a0fb`,
      Instagram `#c31574`, Behance `#394cff`, Dribbble `#ff2e6e`, YouTube
      `#fa2614` (inline SVG brand glyphs per lucide limitation; `aria-label`s)
- [ ] Row 2: left list "Privacy" + "Policy" (two adjacent links); right list
      Home / Our works / About / Blog / Contact (right-aligned md+); 14px
      `#777` links, 10px padding, first/last-item padding quirks per source
- [ ] Row 3: centered copyright "Copyright <year>. All Rights Reserved." in
      `#777`, `border-top: 1px solid #efefef`, `padding-top: 50px`; Component
      Dock link `https://www.componentdock.com/` in the copyright bar
- [ ] Responsive: 1/3 + 2/3 and 50/50 splits on md+; rows stack below 768px;
      nav lists flush-left below xl (1199.98px)
- [ ] Fonts: Roboto + Poppins via Google Fonts `<link>` in `index.html`
- [ ] NO images needed (the source footer is image-free — no picsum
      placeholders required); NO ColorLib reference anywhere in `apps/envoi`
      (provenance lives only here + TEMPLATES.md + PR)
