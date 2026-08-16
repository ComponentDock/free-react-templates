# Template: Finale (Footer)

## Purpose

Finale is a footer-component demo in the free-react-templates monorepo. It
is an original React recreation of the ColorLib free "Bootstrap Footer 06"
design (source: https://colorlib.com/wp/template/bootstrap-footer-06/), built
under a DIFFERENT name (**Finale** — the concluding section of a piece of
music or a performance, continuing the footer series' ending-themed naming:
Colophon → Envoi → Epilogue → Coda → Outro → **Finale**; a single lowercase
word, kebab-case, no collision with `apps/`, `openspec/specs/` or
`docs/templates/` — verified 2026-08-16), per the monorepo naming mandate,
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The
page is a footer-only component demo: a light-gray `70vh` filler area
(labeled "Footer #6" in the source) → the footer itself — a TRANSPARENT band
(no background color — the white page shows through; `padding: 7rem 0`) with
a centered block of FIVE link columns (Discover / About / Services / Buy /
Help), a thin top-border divider row, then a bottom row (two gray social
icons left | small centered copyright | App Store + Google Store links
right). One brand color, `#4200ff` (electric violet), used ONLY for link
hovers and social hovers — the resting design is monochrome (dark headings,
gray links, light-gray icons). No images, no text buttons, no subscribe form.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Footer 06" — one of the free "Bootstrap
  Footer" series (footer-only component demos; the page body is a 70vh
  filler strip so the footer is the deliverable). Source page:
  https://colorlib.com/wp/template/bootstrap-footer-06/. TEMPLATES.md has ONE
  copy (line 782, `- [ ]` unchecked). This prep: Bootstrap Footer 06 →
  **Finale**. When the implementer finishes, that row gets bookkept `[x]`.
- **PREVIEW PATH QUIRK (same as the rest of the series — see the colophon
  prep):** `https://preview.colorlib.com/theme/bootstrap-footer-06/` returns
  **HTTP 404** ("Not Found"). The footer series is served under the
  **`/theme/bft/`** prefix (NOT `/theme/bootstrap/`): the live preview is
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-06/`.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-06/` (HTTP 200,
  18,922 bytes HTML, `<title>Footer 06</title>`). Stylesheets:
  `fonts/icomoon/style.css` (icon font), `css/bootstrap.min.css`
  (**Bootstrap v4.5.3**, shared with the series), `css/style.css` (1,504
  bytes — a DEDICATED sheet containing ONLY the `.footer-95942` rules, unlike
  footer-05's shared multi-footer sheet; verified: no other `footer-\d+`
  class anywhere in the HTML or the sheet). No JS behavior needed
  (jquery/popper/bootstrap.min.js are loaded but the footer is static — the
  recreation needs none of them). No Google Fonts `<link>` — the footer
  declares `"Poppins", sans-serif` which falls back to a system stack in the
  preview; the recreation ADDS the Google Fonts Poppins `<link>` in
  index.html.
- **Visual design (from live DOM + CSS tokens + TEMPLATES.md screenshot
  `bootstrap-footer-06.jpg`, viewed in browser):** clean, corporate, airy,
  MONOCHROME, LIGHT. Screenshot matches the live DOM exactly (NO variance):
  light-gray (`#f8f9fa`) demo area with "Footer #6" centered; below it a
  WHITE (transparent) footer. Top: five equal columns of links — bold dark
  headings (Discover / About / Services / Buy / Help) above lists of medium
  gray links, centered as an 8-of-12 block. A faint horizontal divider line.
  Bottom row: two faint gray social icons (Twitter, Facebook) left; small
  centered copyright "Colorlib © All Rights Reserved."; "App Store" and
  "Google Store" links with small icons right. No visible brand color at
  rest — `#4200ff` appears only on hover. Clean sans-serif throughout
  (Poppins declared on the footer).
- **Structure (DOM order, 1:1):** `div.content.d-flex.align-items-center.bg-light`
  (height 70vh, `h2.w-100.text-center` "Footer #6") →
  `footer.footer-95942` (NO background, `padding: 7rem 0`, Poppins) →
  `div.container` →
  `div.row.justify-content-center` → `div.col-md-8` → `div.row`:
  1. FIVE link columns `div.col-sm-6.col-md.mb-4.mb-md-0`, each `h3` heading
     - `ul.list-unstyled.nav-links` (stacked links):
     1. **Discover** — Website editors, Online retail, Get started, Services
        (4 links)
     2. **About** — Contact, Services, Team (3 links)
     3. **Services** — Events, News, Awards (3 links)
     4. **Buy** — Where to Buy, Shop Online (2 links)
     5. **Help** — FAQ, Support, Knowledge Base (3 links)
        then `div.row.py-3` → `div.col-md-12.pb-3` → `div.border-top`
        (thin divider line),
        then `div.row.align-items-center`:
  2. `div.col-md-4` — `ul.list-unstyled.social.mb-0.pb-0.nav-left`: TWO
     icon-only social links (`span.icon-twitter`, `span.icon-facebook`)
  3. `div.col-md-4.text-center` — `span.small` "Colorlib © All Rights
     Reserved." (brand → recreation **"© <current year> Finale"**)
  4. `div.col-md-4.text-right` — `ul.list-unstyled.social.app.mb-0.pb-0.nav-right`:
     TWO store links with leading icons: `span.icon-apple.mr-3` + "App
     Store", `span.icon-play.mr-3` + "Google Store"
- **Grid behavior (Bootstrap 4.5.3, reproduce responsively):** The five
  columns sit in `col-md-8` centered via `row.justify-content-center`. Inside,
  each column is `col-sm-6 col-md`: on md+ (≥768px) the five columns share
  equal widths (`col-md` = equal flex basis) in one row; on sm (576–767px)
  they wrap 2-up (`col-sm-6`, so 2-2-1); below sm each is full-width.
  `mb-4 mb-md-0` gives bottom margins on mobile only. The bottom row is 3×
  `col-md-4`: side-by-side on md+ (socials left | copyright center | stores
  right), stacked full-width below md. No order flips in this design (unlike
  footer-05).

## Design tokens (from the reference — `.footer-95942` only)

| Token             | Value                                                                                                                                                                                                                               | Source                                                      |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Font family       | **Poppins** — `.footer-95942` sets `font-family: "Poppins", sans-serif` (body/h1-h6 stack is Roboto; the footer overrides). NOT loaded in the preview (system fallback) — the recreation adds the Google Fonts `<link>` for Poppins | `css/style.css` `.footer-95942`                             |
| Footer background | **NONE (transparent)** — the white page shows through; `padding: 7rem 0`; NO `border-top` on the footer itself (unlike footer-05)                                                                                                   | `.footer-95942`                                             |
| Brand color       | **`#4200ff`** (electric violet/indigo) — nav-link hover AND social-link hover only; nothing at rest is branded                                                                                                                      | `.footer-95942 .nav-links li a:hover`, `.social li a:hover` |
| Column headings   | `h3`: **16px, `font-weight: bold`, `margin-bottom: 20px`**, default heading color (dark `#212529`)                                                                                                                                  | `.footer-95942 h3`                                          |
| Nav links         | `li` **`display: block`, `margin-bottom: 10px`**; `a` **14px, `#777`**, hover → **`#4200ff`**                                                                                                                                       | `.footer-95942 .nav-links li`, `li a`                       |
| Social icons      | `li` inline-block; `a` **inline-block, `padding: 10px`, color `#ccc`**, hover → **`#4200ff`**; `.social.nav-left li:first-child a` `padding-left: 0`; `.social.nav-right li:last-child a` `padding-right: 0`                        | `.footer-95942 .social li a`                                |
| Store links row   | `.social.app`: **`font-size: 13px`**; leading icon spans with Bootstrap `mr-3` (`margin-right: 1rem`) gap between icon and label; same `#ccc` / hover `#4200ff` treatment                                                           | `.footer-95942 .social.app`                                 |
| Divider           | Bootstrap `.border-top` = **1px solid `#dee2e6`**, wrapped in `div.row.py-3` → `div.col-md-12.pb-3` (vertical rhythm 1rem top / 1rem bottom + 1rem bottom padding)                                                                  | Bootstrap classes on the wrapper                            |
| Copyright         | `span.small` (Bootstrap `small` = 80% font-size, `#212529` inherits) — centered; source text "Colorlib © All Rights Reserved." → recreation **"© <current year> Finale"** + Component Dock link                                     | DOM + Bootstrap classes                                     |
| Filler area       | `.content`: `height: 70vh`, Bootstrap `bg-light` = **`#f8f9fa`**, `d-flex align-items-center` with a centered `h2.w-100.text-center` label "Footer #6"                                                                              | `.content` + Bootstrap classes                              |
| Link transition   | `a { transition: .3s all ease; }`; `a, a:hover { text-decoration: none !important; }` (global)                                                                                                                                      | `css/style.css` top rules                                   |
| Icons             | icomoon (FontAwesome codepoints): `icon-twitter` `\f099`, `icon-facebook` `\f09a`, `icon-apple` `\f179`, `icon-play` `\f04b` — brand glyphs only                                                                                    | `fonts/icomoon/style.css`                                   |
| Mobile behavior   | Link columns: md+ 5-equal-across, sm 2-up (2-2-1), below sm stacked; bottom row stacks below md; `mb-4`/`mb-md-0` margins on mobile — no horizontal scroll                                                                          | Bootstrap classes                                           |

## Requirements

### Requirement: Page composition

The system SHALL render the footer-component demo with a main landmark, a
document title, and the mandatory footer landmark.

#### Scenario: Full page render

- **GIVEN** the Finale app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the filler area and the footer inside the
  main landmark
- **AND** the document title SHALL be "Finale — Footer"

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
  **"Footer #6"** — the recreation may show the template's own name as the
  demo label; keep the same kind of filler content)

### Requirement: Link columns

The system SHALL render the five centered link columns with the source's
exact headings, exact link copy, and stacked-link styling.

#### Scenario: Five columns render with headings and links

- **GIVEN** the filler area is rendered
- **WHEN** the user inspects the top of the footer
- **THEN** five columns SHALL render as a centered 8-of-12 block
  (`justify-content-center` + `col-md-8`), in this order, each with a bold
  16px heading (`margin-bottom: 20px`) above a stacked list of 14px `#777`
  links (hover → `#4200ff`):
  1. **Discover** — Website editors, Online retail, Get started, Services
  2. **About** — Contact, Services, Team
  3. **Services** — Events, News, Awards
  4. **Buy** — Where to Buy, Shop Online
  5. **Help** — FAQ, Support, Knowledge Base
- **AND** each link list item SHALL be block-displayed with a 10px bottom
  margin (the source's stacked column look, NOT inline links)

### Requirement: Divider row

The system SHALL render the thin divider line between the link columns and
the bottom row.

#### Scenario: Divider renders

- **GIVEN** the link columns are rendered
- **WHEN** the user inspects the footer between the columns and the bottom
  row
- **THEN** a 1px `#dee2e6` top border SHALL render across the full column
  width, with ~1rem vertical spacing above and below (the source wraps it in
  `row.py-3` → `col-md-12.pb-3`)

### Requirement: Social icons row

The system SHALL render the two icon-only social links on the left of the
bottom row, styled per the reference tokens, with accessible names (the
source uses bare icon spans).

#### Scenario: Social icons render

- **GIVEN** the divider row is rendered
- **WHEN** the user inspects the left of the footer's bottom row
- **THEN** two social links SHALL render, left-aligned, each an inline-block
  link with `10px` padding, glyph color `#ccc`, hover → `#4200ff`:
  1. **Twitter**
  2. **Facebook**
- **AND** the first link SHALL have `padding-left: 0`
- **NOTE (lucide-react limitation):** lucide-react REMOVED brand icons
  (Twitter/Facebook are `undefined` exports) — render the brand glyphs as
  inline SVGs (simple-icons paths), matching the skill's brand-icon guidance.
  Probe every icon import with the `typeof` check before committing.

### Requirement: Copyright line

The system SHALL render the centered small copyright text with the renamed
brand plus the mandatory Component Dock credit (the source brands "Colorlib
© All Rights Reserved." — the Component Dock link is the monorepo addition
per conventions.md; NO ColorLib reference in app code).

#### Scenario: Copyright renders centered

- **GIVEN** the social icons are rendered
- **WHEN** the user inspects the center of the footer's bottom row
- **THEN** a small (80%-scale) text line SHALL render centered reading
  **"© <current year> Finale"** (the source shows a fixed "Colorlib © All
  Rights Reserved.")
- **AND** the footer SHALL contain a link to
  `https://www.componentdock.com/` branded as "Component Dock" (e.g. in the
  copyright line or brand column)

### Requirement: Store links

The system SHALL render the two app-store links on the right of the bottom
row with leading icons, styled per the reference tokens.

#### Scenario: Store links render

- **GIVEN** the copyright line is rendered
- **WHEN** the user inspects the right of the footer's bottom row
- **THEN** two links SHALL render, right-aligned, at 13px, each with a small
  leading icon and a ~1rem gap between icon and label (the source uses
  Bootstrap `mr-3`):
  1. **App Store** (Apple glyph — inline SVG; lucide's `Apple` is the fruit,
     not the brand)
  2. **Google Store** (Play glyph — lucide `Play` is a valid match)
- **AND** glyphs SHALL be `#ccc`, hover → `#4200ff`, and the last link SHALL
  have `padding-right: 0`

### Requirement: Responsive layout

The system SHALL reproduce the source's responsive grid behavior: the
centered column block, the 2-up sm wrap, and the stacking bottom row.

#### Scenario: Columns adapt across breakpoints

- **GIVEN** the footer is rendered
- **WHEN** the viewport is at the md breakpoint (≥768px)
- **THEN** the five link columns SHALL render side by side in one row
  (equal widths, `col-md` inside the centered `col-md-8` block) and the
  bottom row SHALL render socials | copyright | stores side by side
  (`col-md-4` ×3)
- **AND** at the sm range (576–767px) the link columns SHALL wrap 2-up
  (rows of 2-2-1) with `mb-4` bottom margins
- **AND** below sm the link columns SHALL stack full-width, and below md the
  bottom row SHALL stack full-width
- **AND** the page SHALL never overflow horizontally

### Requirement: Accessibility

The system SHALL expose semantic landmarks, accessible social controls, and
keyboard-operable interactivity.

#### Scenario: Screen reader exposure

- **GIVEN** the page is rendered
- **WHEN** assistive technology inspects the page
- **THEN** the page SHALL have a main landmark and a semantic `<footer>`
  landmark
- **AND** the two icon-only social links SHALL have accessible names
  (Twitter, Facebook)
- **AND** all interactive elements SHALL be focusable and SHALL show a
  focus-visible ring

## Verification checklist

- [ ] `npm run verify:app finale` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Document title "Finale — Footer"
- [ ] Filler: `#f8f9fa` area (~70vh) with a centered demo label
- [ ] Footer band: TRANSPARENT (no bg — white page shows through), `padding:
    7rem 0`, Poppins; semantic `<footer>` + main landmark
- [ ] Five link columns in a centered 8-of-12 block: Discover (4 links),
      About (3), Services (3), Buy (2), Help (3) — exact copy; bold 16px
      headings (`mb 20px`); stacked 14px `#777` links (`block` li, 10px
      bottom margin), hover `#4200ff`
- [ ] Divider: 1px `#dee2e6` top border with ~1rem vertical spacing
- [ ] Bottom row: Twitter + Facebook icon-only links left (`#ccc`, padding
      10px, first `padding-left: 0`, hover `#4200ff`, inline SVG brand icons
      per lucide limitation, `aria-label`s); "© <current year> Finale" small
      text centered + Component Dock link `https://www.componentdock.com/`;
      App Store + Google Store links right (13px, leading Apple/Play icons,
      ~1rem gap, last `padding-right: 0`)
- [ ] Responsive: 5 equal columns on md+ / 2-up on sm / stacked below sm;
      bottom row 3× `col-md-4` side-by-side on md+, stacked below md; no
      horizontal overflow
- [ ] Poppins via Google Fonts `<link>` in `index.html`
- [ ] NO images needed (the source footer is image-free — no picsum
      placeholders required); NO ColorLib reference anywhere in `apps/finale`
      (provenance lives only here + TEMPLATES.md + PR)
