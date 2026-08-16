# Template: Stretto (Footer)

## Purpose

Stretto is a footer-component demo in the free-react-templates monorepo. It
is an original React recreation of the ColorLib free "Bootstrap Footer 08"
design (source: https://colorlib.com/wp/template/bootstrap-footer-08/), built
under a DIFFERENT name (**Stretto** — a musical term for the concluding
passage of a fugue, often marked by overlapping entries, continuing the
footer series' ending-themed naming: Colophon → Envoi → Epilogue → Coda →
Outro → Finale → Postlude → **Stretto**; a single lowercase word, kebab-case,
no collision with `apps/`, `openspec/specs/` or `docs/templates/` — verified
2026-08-16), per the monorepo naming mandate, with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript. The page is a footer-only component
demo: a light-gray `70vh` filler area (labeled "Footer #8" in the source) →
the footer itself — a DARK band over a background PHOTO (the source uses
`images/hero_1.jpg` with a `rgba(0,0,0,0.7)` overlay; the recreation uses a
picsum placeholder with the same overlay treatment; `padding: 7rem 0`),
Poppins, containing a brand column (site logo + blurb) + THREE link columns
(Discover / About / Help) + a "Follow Us" social-icon column, then a centered
copyright bar separated by a `#595959` top border. The design is
MONOCHROME-DARK: white headings, `#999`/gray links that brighten to `#fff`
on hover. A pink accent `#e42c64` exists in the source CSS (on the
`.btn.btn-tertiary` rule) but that rule is NOT used anywhere in the DOM — the
rendered footer shows no pink (documented below; the recreation may keep a
pink token for optional accents but the visible design has none). No images
other than the footer background photo, no text buttons, no subscribe form.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Footer 08" — one of the free "Bootstrap
  Footer" series (footer-only component demos; the page body is a 70vh
  filler strip so the footer is the deliverable). Source page:
  https://colorlib.com/wp/template/bootstrap-footer-08/. TEMPLATES.md has ONE
  copy (line 784, `- [ ]` unchecked). This prep: Bootstrap Footer 08 →
  **Stretto**. When the implementer finishes, that row gets bookkept `[x]`.
- **PREVIEW PATH QUIRK (same as the rest of the series — see the colophon
  prep):** `https://preview.colorlib.com/theme/bootstrap-footer-08/` returns
  **HTTP 404** ("Not Found"). The footer series is served under the
  **`/theme/bft/`** prefix (NOT `/theme/bootstrap/`): the live preview is
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-08/`.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-08/` (HTTP 200,
  18,104 bytes HTML, `<title>Footer 08</title>`). Stylesheets:
  `fonts/icomoon/style.css` (icon font), `css/bootstrap.min.css`
  (**Bootstrap v4.5.3**, shared with the series), `css/style.css` (1,866
  bytes — a DEDICATED sheet containing ONLY the `.footer-99382` rules;
  verified: no other `footer-\d+` class anywhere in the HTML or the sheet).
  No JS behavior needed (jquery/popper/bootstrap.min.js are loaded but the
  footer is static — the recreation needs none of them). The `<head>` inlines
  cf-fonts `@font-face` blocks for **Roboto**, **Poppins** and **Source Serif
  Pro** (no Google Fonts `<link>`); the body/footer declare Roboto/Poppins —
  **Source Serif Pro is loaded but never used in this footer's CSS** (it is
  a leftover from the theme — the recreation does NOT need it). The
  recreation ADDS Google Fonts `<link>`s for Roboto (body) + Poppins
  (footer) in index.html.
- **Background photo:** the footer element carries the INLINE style
  `background-image: url('images/hero_1.jpg');` (a dark moody photo — city
  or landscape, mostly obscured by the overlay) with
  `background-size: cover; background-position: center center;
background-repeat: no-repeat`, plus a `.footer-99382:before` pseudo-element
  overlay `rgba(0, 0, 0, 0.7)` spanning the full footer. Net effect: a
  near-solid dark-gray band (the photo is barely visible through the 70%
  black overlay). **The recreation MUST NOT copy the asset** — use
  `https://picsum.photos/seed/stretto-1/1600/900` (or similar dark-leaning
  placeholder) with the SAME `rgba(0,0,0,0.7)` overlay to reproduce the
  dark-band look.
- **Visual design (from live DOM + CSS tokens + TEMPLATES.md screenshot
  `bootstrap-footer-08.jpg`, viewed in browser):** dark, corporate,
  high-contrast. Screenshot matches the live DOM (NO variance): light-gray
  (`#f8f9fa`) demo area with "Footer #8" centered; below it a DARK footer
  band (photo + 70% black overlay reads as solid dark gray). Top row: brand
  column (white site-logo "Colorlib" at 1.5rem + gray paragraph blurb) on
  the left (4/12), then three link columns (Discover 5 links / About 5 /
  Help 3) with bold WHITE 16px headings and `#999` links, then a "Follow Us"
  column with five faint gray social icons (Instagram, Twitter, Facebook,
  Pinterest, Dribbble). Bottom: a centered thin copyright bar "© 2019—2020
  All Rights Reserved." in small gray text, separated by a `#595959` border.
  No brand color visible at rest — the design is monochrome dark; `#e42c64`
  exists only in the unused `.btn.btn-tertiary` rule; hovers brighten to
  `#fff`.
- **Structure (DOM order, 1:1):** `div.content.d-flex.align-items-center.bg-light`
  (height 70vh, `h2.w-100.text-center` "Footer #8") →
  `footer.footer-99382` (inline bg photo, `padding: 7rem 0`, Poppins,
  `:before` overlay) → `div.container` → `div.row`:
  1. `div.col-md-4.pr-md-5` — brand: `a.footer-site-logo.d-block.mb-4`
     "Colorlib" (1.5rem, `#fff`, block, `mb-4` = 1.5rem below) + `p` —
     one paragraph of lorem-ipsum-style copy (`#777` inherited, gray)
  2. `div.col-md` — `h3` "Discover" + `ul.list-unstyled.nav-links`: Home,
     About Us, Portfolio, Services, Contact (5 links)
  3. `div.col-md` — `h3` "About" + `ul.list-unstyled.nav-links`: Clients,
     Team, Career, Testimonials, Journal (5 links)
  4. `div.col-md` — `h3` "Help" + `ul.list-unstyled.nav-links`: Privacy
     Policy, Terms & Conditions, Partners (3 links)
  5. `div.col-md` — `h3` "Follow Us" + `ul.social.list-unstyled`: FIVE
     icon-only social links — Instagram (has class `pl-0` → `padding-left:
0`), Twitter, Facebook, Pinterest, Dribbble
     then `div.row` → `div.col-12.text-center` → `div.copyright.mt-5.pt-5`
     (top border `1px solid #595959`; `mt-5 pt-5` = 3rem above/below) →
     `p > small` "© 2019—2020 All Rights Reserved." (brand → recreation
     **"© <current year> Stretto"**)
- **Grid behavior (Bootstrap 4.5.3, reproduce responsively):** the top row
  is `col-md-4` (brand, with `pr-md-5` = 3rem right padding on md+) + FOUR
  `col-md` columns (equal flex share of the remaining 8/12). On md+ (≥768px)
  all five sit side by side; BELOW md every column is full-width and stacked
  (NOTE: unlike footer-06 there are NO `col-sm-6` classes here — no 2-up sm
  wrap; it goes straight from 5-across to stacked). The copyright row is
  `col-12` and always centered. No order flips in this design.
- **Icons:** icomoon (FontAwesome 4 codepoints): `icon-instagram` `\f16d`,
  `icon-twitter` `\f099`, `icon-facebook` `\f09a`, `icon-pinterest` `\f0d2`,
  `icon-dribbble` `\f17d` — brand glyphs only. **lucide-react REMOVED brand
  icons** (Twitter/Facebook/Instagram/Pinterest/Dribbble are NOT reliable
  exports — probe every import with the `typeof` check; per the skill's
  brand-icon guidance render the brand glyphs as inline SVGs (simple-icons
  paths) with `aria-label`s).

## Design tokens (from the reference — `.footer-99382` only)

| Token             | Value                                                                                                                                                                                                                                                                                                                                                       | Source                                                     |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Font family       | **Poppins** — `.footer-99382` sets `font-family: "Poppins", sans-serif` (body/h1-h6 stack is Roboto; the footer overrides). NOT loaded via a Google `<link>` in the preview (cf-fonts inline) — the recreation adds Google Fonts `<link>`s for Roboto + Poppins in index.html                                                                               | `css/style.css` `.footer-99382`                            |
| Footer background | **Photo + 70% black overlay**: inline `background-image: url('images/hero_1.jpg')` (→ picsum `seed/stretto-1` placeholder), `background-size: cover`, `position: center center`, `no-repeat`; `.footer-99382:before` overlay **`rgba(0, 0, 0, 0.7)`** across the whole footer; `padding: 7rem 0`; `color: #777`; `position: relative`                       | inline style + `.footer-99382`, `:before`                  |
| Brand accent      | **`#e42c64`** (raspberry pink) — declared ONLY on `.btn.btn-tertiary` (`background-color: #e42c64`, `color: #fff`, `border-radius: 30px`, `border: none`, `padding: 10px 20px`) which does **NOT appear anywhere in the DOM** → the rendered footer shows NO pink; hovers go to `#fff`. Record the token for optional accents; visible design is monochrome | `css/style.css` `.footer-99382 .btn.btn-tertiary` (unused) |
| Column headings   | `h3`: **16px, `font-weight: bold`, color `#fff`, `margin-bottom: 30px`** (note: 30px, not 20px like footer-06)                                                                                                                                                                                                                                              | `.footer-99382 h3`                                         |
| Site logo         | `.footer-site-logo`: **`font-size: 1.5rem`, `color: #fff`**; rendered as `a` with Bootstrap `d-block mb-4` (block + 1.5rem bottom margin)                                                                                                                                                                                                                   | `.footer-99382 .footer-site-logo`                          |
| Nav links         | `li` **`margin-bottom: 10px`**; `a` **`color: #999999`**, hover → **`#fff`** (no brand color on hover — white)                                                                                                                                                                                                                                              | `.footer-99382 .nav-links li`, `li a`                      |
| Blurb paragraph   | Inherits `color: #777` from the footer; one paragraph of lorem-ipsum-style copy                                                                                                                                                                                                                                                                             | `.footer-99382`                                            |
| Social icons      | `li` **`display: inline-block`**; `a` **`color: gray`, `padding: 7px`**, hover → **`#fff`**; FIRST link (`li:first-child a`, class `pl-0` in the DOM) gets `padding-left: 0` (note: padding 7px here, not 10px like footer-06)                                                                                                                              | `.footer-99382 .social li`, `li a`, DOM class `pl-0`       |
| Copyright bar     | `.copyright`: **`border-top: 1px solid #595959`**; wrapper `div.row` → `div.col-12.text-center` → `div.copyright.mt-5.pt-5` (3rem top margin + 3rem top padding) → `p > small` (Bootstrap `small` = 80% font-size, `#777`-ish inherited); source text "© 2019—2020 All Rights Reserved." → recreation **"© <current year> Stretto"** + Component Dock link  | `.footer-99382 .copyright` + DOM                           |
| Filler area       | `.content`: `height: 70vh`, Bootstrap `bg-light` = **`#f8f9fa`**, `d-flex align-items-center` with a centered `h2.w-100.text-center` label "Footer #8"                                                                                                                                                                                                      | `.content` + Bootstrap classes                             |
| Link transition   | `a { transition: .3s all ease; }`; `a, a:hover { text-decoration: none !important; }` (global)                                                                                                                                                                                                                                                              | `css/style.css` top rules                                  |
| Icons             | icomoon (FontAwesome 4 codepoints): `icon-instagram` `\f16d`, `icon-twitter` `\f099`, `icon-facebook` `\f09a`, `icon-pinterest` `\f0d2`, `icon-dribbble` `\f17d` — brand glyphs only; lucide brand icons removed → inline SVG (simple-icons) + `aria-label`                                                                                                 | `fonts/icomoon/style.css`                                  |
| Mobile behavior   | md+ (≥768px): brand 4/12 + 4 equal columns in one row; BELOW md: all five columns stack full-width (NO `col-sm-6` — no 2-up wrap in this variant); copyright row always `col-12` centered — no horizontal scroll                                                                                                                                            | Bootstrap classes                                          |

## Requirements

### Requirement: Page composition

The system SHALL render the footer-component demo with a main landmark, a
document title, and the mandatory footer landmark.

#### Scenario: Full page render

- **GIVEN** the Stretto app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the filler area and the footer inside the
  main landmark
- **AND** the document title SHALL be "Stretto — Footer"

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
  **"Footer #8"** — the recreation may show the template's own name as the
  demo label; keep the same kind of filler content)

### Requirement: Dark footer band

The system SHALL render the dark photo-background footer band with the
source's overlay treatment, padding, and Poppins typeface.

#### Scenario: Footer band renders dark over a background image

- **GIVEN** the filler area is rendered
- **WHEN** the user inspects the footer
- **THEN** a semantic `<footer>` SHALL render with `padding: 7rem 0`,
  `font-family: "Poppins", sans-serif` and `color: #777`
- **AND** the footer SHALL have a background image (the recreation uses
  `https://picsum.photos/seed/stretto-1/1600/900` — the source's
  `images/hero_1.jpg` is never copied), `cover`-sized, center-positioned,
  non-repeating
- **AND** a `rgba(0, 0, 0, 0.7)` overlay SHALL span the entire footer so the
  band reads as near-solid dark gray (the source uses a `:before`
  pseudo-element; the recreation may use an absolutely-positioned overlay
  div or a Tailwind bg-black/70 layer)

### Requirement: Brand column

The system SHALL render the site-logo link and blurb paragraph on the left
of the footer's top row.

#### Scenario: Brand column renders

- **GIVEN** the footer band is rendered
- **WHEN** the user inspects the left of the footer
- **THEN** a column SHALL render containing a white site logo link
  (`font-size: 1.5rem`, `color: #fff`, block, ~1.5rem bottom margin) —
  the source shows **"Colorlib"** → the recreation uses its own brand name
  **"Stretto"** (NO ColorLib reference in app code)
- **AND** below it a gray paragraph (`#777`) of placeholder-style copy
  (the source uses lorem ipsum; a paraphrased blurb of the same kind is
  fine)

### Requirement: Link columns

The system SHALL render the three link columns with the source's exact
headings, exact link copy, and stacked-link styling.

#### Scenario: Three link columns render with headings and links

- **GIVEN** the brand column is rendered
- **WHEN** the user inspects the middle of the footer's top row
- **THEN** three columns SHALL render side by side (on md+), in this order,
  each with a bold 16px WHITE heading (`margin-bottom: 30px`) above a
  stacked list of `#999999` links (hover → `#fff`):
  1. **Discover** — Home, About Us, Portfolio, Services, Contact
  2. **About** — Clients, Team, Career, Testimonials, Journal
  3. **Help** — Privacy Policy, Terms & Conditions, Partners
- **AND** each link list item SHALL have a 10px bottom margin (the source's
  stacked column look, NOT inline links)

### Requirement: Social icons column

The system SHALL render the five icon-only social links in the "Follow Us"
column, styled per the reference tokens, with accessible names (the source
uses bare icon spans).

#### Scenario: Social icons render

- **GIVEN** the link columns are rendered
- **WHEN** the user inspects the right of the footer's top row
- **THEN** a "Follow Us" heading SHALL render above five inline-block social
  links, each with `7px` padding, glyph color `gray`, hover → `#fff`:
  1. **Instagram** (first — `padding-left: 0`)
  2. **Twitter**
  3. **Facebook**
  4. **Pinterest**
  5. **Dribbble**
- **NOTE (lucide-react limitation):** lucide-react REMOVED brand icons
  (Twitter/Facebook/Instagram/Pinterest/Dribbble are `undefined` exports) —
  render the brand glyphs as inline SVGs (simple-icons paths), matching the
  skill's brand-icon guidance. Probe every icon import with the `typeof`
  check before committing.

### Requirement: Copyright bar

The system SHALL render the centered small copyright text with the renamed
brand plus the mandatory Component Dock credit, separated by the source's
border.

#### Scenario: Copyright bar renders centered

- **GIVEN** the social icons are rendered
- **WHEN** the user inspects the bottom of the footer
- **THEN** a bar SHALL render with a `1px solid #595959` top border and ~3rem
  spacing above and below (the source wraps it in `row` → `col-12.text-center`
  → `div.copyright.mt-5.pt-5`)
- **AND** a small (80%-scale) text line SHALL render centered reading
  **"© <current year> Stretto"** (the source shows a fixed "© 2019—2020 All
  Rights Reserved." — no "Colorlib" brand inside it)
- **AND** the footer SHALL contain a link to
  `https://www.componentdock.com/` branded as "Component Dock" (e.g. in the
  copyright line)

### Requirement: Responsive layout

The system SHALL reproduce the source's responsive grid behavior: the
5-across md+ row and the full-width stack below md (this variant has NO 2-up
sm wrap).

#### Scenario: Columns adapt across breakpoints

- **GIVEN** the footer is rendered
- **WHEN** the viewport is at the md breakpoint (≥768px)
- **THEN** the brand column SHALL take 4/12 width (with ~3rem right padding)
  and the four remaining columns SHALL share the rest equally in one row
  (`col-md` ×4)
- **AND** below md (576px and under) ALL five columns SHALL stack
  full-width — there are no `col-sm-6` classes in this variant, so no 2-up
  wrap
- **AND** the copyright row SHALL stay full-width and centered at every
  breakpoint
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
  (Instagram, Twitter, Facebook, Pinterest, Dribbble)
- **AND** all interactive elements SHALL be focusable and SHALL show a
  focus-visible ring

## Verification checklist

- [ ] `npm run verify:app stretto` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Document title "Stretto — Footer"
- [ ] Filler: `#f8f9fa` area (~70vh) with a centered demo label
- [ ] Footer band: DARK — picsum background `seed/stretto-1` (`cover`,
      center, no-repeat) + `rgba(0,0,0,0.7)` overlay spanning the footer;
      `padding: 7rem 0`, Poppins; semantic `<footer>` + main landmark
- [ ] Brand column: white "Stretto" logo link (1.5rem, block, mb ~1.5rem) +
      gray `#777` blurb paragraph; `col-md-4` with ~3rem right padding
- [ ] Three link columns: Discover (Home, About Us, Portfolio, Services,
      Contact), About (Clients, Team, Career, Testimonials, Journal), Help
      (Privacy Policy, Terms & Conditions, Partners) — exact copy; bold 16px
      WHITE headings (`mb 30px`); stacked `#999999` links (li 10px bottom
      margin), hover `#fff`
- [ ] Follow Us column: five icon-only social links (Instagram first with
      `padding-left: 0`, Twitter, Facebook, Pinterest, Dribbble) — `gray`
      glyphs, 7px padding, inline-block, hover `#fff`, inline SVG brand icons
      per lucide limitation, `aria-label`s
- [ ] Copyright bar: `1px solid #595959` top border with ~3rem vertical
      spacing; "© <current year> Stretto" small text centered + Component
      Dock link `https://www.componentdock.com/`
- [ ] Responsive: 5-across on md+ (brand 4/12 + 4 equal) / stacked
      full-width below md (NO 2-up sm wrap); copyright row always centered;
      no horizontal overflow
- [ ] Roboto (body) + Poppins (footer) via Google Fonts `<link>` in
      `index.html` (Source Serif Pro NOT needed — loaded but unused in the
      source footer)
- [ ] ONE image only: the footer background placeholder (`picsum` seed —
      never copy the source asset); NO ColorLib reference anywhere in
      `apps/stretto` (provenance lives only here + TEMPLATES.md + PR)
