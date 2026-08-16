# Template: Adieu (Footer)

## Purpose

Adieu is a footer-component demo in the free-react-templates monorepo. It is
an original React recreation of the ColorLib free "Bootstrap Footer 16"
design (source: https://colorlib.com/wp/template/bootstrap-footer-16/), built
under a DIFFERENT name (**Adieu** — French for "farewell, goodbye", the
sixteenth entry in the footer series' ending-themed naming: Colophon → Envoi
→ Epilogue → Coda → Outro → Finale → Postlude → Stretto → Fermata → Finis →
Tailpiece → Terminus → Capstone → Omega → Ultimo → **Adieu**; a single
lowercase word, kebab-case, no collision with `apps/`, `openspec/specs/` or
`docs/templates/` — verified 2026-08-16), per the monorepo naming mandate,
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The
page is a footer-only component demo: a white filler section (source labels
it "Footer #06", `padding: 12em 0`) → the footer — a **DARK PURPLE** band
(`background: #302939`; base `footer { padding: 7em 0 }` with `padding-top:
0 !important` so the band hugs the filler; a subtle radial glow overlay
`#d7b8ff` at 20% opacity in the center), **Poppins** typeface (body 15px /
line-height 1.8). The footer splits into TWO stacked rows: (1) **Newsletter
band** — `row.align-items-center.align-items-stretch.mb-5` with a **4/8
split**: left `col-md-4.py-4.py-md-5.aside-stretch` (solid `#322b3c`) holding
`span.subheading` "Subscribe to our" (uppercase, letter-spacing 2px,
`rgba(255,255,255,.3)`) + `h3.heading-section` "Newsletter" (30px, white,
uppercase); right `col-md-8.py-4.py-md-5.aside-stretch-right` (solid
`#372f42`) holding `form.subscribe-form.w-100` — a **white pill**
(`border-radius: 40px`, `background: #fff`, `padding: 3px`) with a flex row
of `input.form-control.rounded-left` (transparent bg, no border, 16px,
`rgba(0,0,0,.3)` text, placeholder "Enter email address", 56px tall) and a
**text** `button.form-control.submit` (**"Submit"**, `150px × 56px`,
`background: #352d3f`, white, 14px, uppercase, letter-spacing 1px, pill
radius — a TEXT button, NOT an icon button); (2) **Links row** —
`row.pt-4` with a **reverse-order split** (`col-md-3.col-lg-6.order-md-last`
copyright block first in DOM, `col-md-9.col-lg-6` link columns second): the
right-side block holds `row.justify-content-end` → `col-md-12.col-lg-9.text-md-right`
→ `h2.footer-heading` → `a.logo` "Colorlib" + `p.copyright` "Copyright ©
<year> All rights reserved | This template is made with ♥ by Colorlib.com"
(recreation replaces the Colorlib attribution with the Component Dock link
per convention); the left-side block holds THREE `col-md-4` columns —
**Information** (5 links: Our Company, Data, Pricing, Contact Us, Support),
**Application** (3 links: Download, Bike Provider, How to Used), **API** (3
links: Documentation, Credential, Developer info) — each link a
`a.py-1.d-block` with a `span.ion-ios-checkmark-circle-outline.mr-2` glyph,
colored `rgba(255,255,255,.5)`. This variant has **NO images, NO social
chips, NO bottom bar and NO legal links** — the simplest footer since the
early series entries; the ONLY interactive element is the static newsletter
form (no JS handler in source). No navbar, no hero; no behavior beyond the
static form.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Footer 16" — one of the free "Bootstrap
  Footer" series (footer-only component demos; the page body is a filler
  strip so the footer is the deliverable). Source page:
  https://colorlib.com/wp/template/bootstrap-footer-16/. TEMPLATES.md has ONE
  copy (line 792, `- [ ]` unchecked). This prep: Bootstrap Footer 16 →
  **Adieu**. When the implementer finishes, that row gets bookkept `[x]`.
- **PREVIEW PATH QUIRK (series-wide — see the colophon/terminus/capstone/
  omega/ultimo preps):** `https://preview.colorlib.com/theme/bootstrap-footer-16/`
  returns **HTTP 404** ("Not Found" — a 9-byte body). The footer series is
  served under the **`/theme/bft/`** prefix (NOT `/theme/bootstrap/`): the
  live preview is `https://preview.colorlib.com/theme/bft/bootstrap-footer-16/`.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-16/` (HTTP 200,
  11,032 bytes HTML, `<title>Footer 06</title>` — the title is the variant
  label, not the series number). Stylesheets: `css/ionicons.min.css` (icon
  font — glyphs `ion-ios-checkmark-circle-outline`, `ion-ios-heart`) +
  `css/style.css` (224,476 bytes — the FULL shared FTCO sheet bundling rules
  for many variants; only the `.footer-06` block and the shared helpers apply
  to this page). No Google Fonts `<link>` — cf-fonts inline `@font-face`
  blocks load **Poppins**; body rule: `font-family: "Poppins", Arial,
sans-serif`, `font-size: 15px`, `line-height: 1.8` (headings: same family,
  weight 400, line-height 1.5). No JS behavior needed (jquery/popper/
  bootstrap.min.js load but the footer is static; the newsletter form has
  `action="#"` and no handler — none needed in the recreation).
- **Visual design (from live DOM + CSS tokens + TEMPLATES.md screenshot
  `bootstrap-footer-16.jpg`, 1200×972 AVIF, viewed in browser):** screenshot
  matches the live DOM (NO variance — only the JS-rendered copyright year
  differs: static capture shows 2021, live shows the current year). A white
  demo area with "Footer #06" centered; below it a solid **dark purple**
  footer band with a faint purple radial glow. Top: a **two-tone newsletter
  band** — left panel (darker `#322b3c`) with small letterspaced "SUBSCRIBE
  TO OUR" + big "NEWSLETTER"; right panel (lighter `#372f42`) with a **white
  pill form**: rounded email field + a **dark pill "SUBMIT" button**
  (`#352d3f`, white text). Below: on the left THREE link columns headed
  "Information" / "Application" / "API" (white headings, muted
  `rgba(255,255,255,.5)` links with tiny checkmark-circle bullets), on the
  right a white "Colorlib" logo wordmark + the copyright line ("...made with
  ♥ by Colorlib.com"). Clean, minimal, modern dark-purple aesthetic; the ONLY
  colors are the purple scale `#302939` / `#322b3c` / `#372f42` / `#352d3f`
  plus the white pill and muted white text. NO images anywhere in the footer.
- **Structure (DOM order, 1:1):**
  `section.ftco-section` (`padding: 12em 0`; no background — white),
  `div.container` → `div.row.justify-content-center` →
  `div.col-md-6.text-center` → `h2` "Footer #06", `margin-bottom: 0`) →
  `footer.footer-06` (`background: #302939`; `padding-top: 0 !important` —
  overrides the base `footer { padding: 7em 0 }` top; `position: relative;
overflow: hidden; z-index: 0`) → `div.container`:
  - **Newsletter band** — `div.row.align-items-center.align-items-stretch.mb-5`:
    - `div.col-md-4.py-4.py-md-5.aside-stretch.d-flex.align-items-center`
      (`background: #322b3c` via `.footer-06 .aside-stretch`; the
      `.aside-stretch:after` pseudo-element extends the color full-bleed to
      the left viewport edge — `position: absolute; top: 0; right: 100%;
bottom: 0; width: 360%`) → `div.w-100` → `span.subheading`
      **"Subscribe to our"** (uppercase, letter-spacing 2px,
      `rgba(255,255,255,.3)`) → `h3.heading-section` **"Newsletter"** (30px,
      white, uppercase)
    - `div.col-md-8.py-4.py-md-5.d-flex.align-items-center.pl-md-5.aside-stretch-right`
      (`background: #372f42` via `.footer-06 .aside-stretch-right`; `:after`
      extends full-bleed to the RIGHT) → `form.subscribe-form.w-100`
      (`action="#"`; `border-radius: 40px; background: #fff; padding: 3px`)
      → `div.form-group.d-flex` (`position: relative; margin-bottom: 0;
border-radius: 0`) → `input.form-control.rounded-left` (type text,
      `placeholder="Enter email address"`, `background: transparent
!important; border: none !important; outline: none !important; color:
rgba(0,0,0,.3) !important`, 16px, height 56px, radius 0) +
      `button.form-control.submit` (type submit, **"Submit"** text — `color:
#fff !important; display: block; width: 150px; height: 56px; font-size:
14px; background: #352d3f !important; border: none; letter-spacing:
1px; text-transform: uppercase; border-radius: 40px`)
  - **Links row** — `div.row.pt-4`:
    - **Right block (first in DOM)** — `div.col-md-3.col-lg-6.order-md-last`
      → `div.row.justify-content-end` →
      `div.col-md-12.col-lg-9.text-md-right.mb-md-0.mb-4` → `h2.footer-heading`
      → `a.logo` **"Colorlib"** (white via `.footer-06 .footer-heading .logo`)
      → `p.copyright` — **"Copyright © <year> All rights reserved | This
      template is made with ♥ by Colorlib.com"** (heart `i.ion-ios-heart`,
      `aria-hidden`; text `rgba(255,255,255,.3)` via `.footer-06 p`;
      recreation replaces the Colorlib attribution with the Component Dock
      link per convention)
    - **Left block (second in DOM)** — `div.col-md-9.col-lg-6` →
      `div.row` → THREE `div.col-md-4.mb-md-0.mb-4`:
      - **Col 1 — Information** — `h2.footer-heading` **"Information"** →
        `ul.list-unstyled` → FIVE `li` → `a.py-1.d-block` →
        `span.ion-ios-checkmark-circle-outline.mr-2` + text **"Our Company"**,
        **"Data"**, **"Pricing"**, **"Contact Us"**, **"Support"**
      - **Col 2 — Application** — `h2.footer-heading` **"Application"** →
        THREE links: **"Download"**, **"Bike Provider"**, **"How to Used"**
      - **Col 3 — API** — `h2.footer-heading` **"API"** → THREE links:
        **"Documentation"**, **"Credential"**, **"Developer info"**
      - (all link text `rgba(255,255,255,.5)` via
        `.footer-06 .list-unstyled li a`; checkmark glyphs inherit that color;
        `py-1` = 0.25rem vertical padding per link)
- **Grid behavior (Bootstrap 4.3.1, reproduce responsively):** Newsletter
  band — `col-md-4` + `col-md-8` (4/8 split on md+, stacked full-width below
  md; `align-items-stretch` keeps both panels equal height; `py-4 py-md-5`
  panel padding). Links row — right block `col-md-3 col-lg-6 order-md-last`
  - left block `col-md-9 col-lg-6`: on md 9/3 split (links left, copyright
    right), on lg+ 6/6 split; below md `order-md-last` does NOT apply, so the
    DOM order rules: copyright block stacks FIRST, then the link columns. The
    THREE link columns are `col-md-4` → 3-across on md+, stacked full-width
    below md with `mb-4` gaps. Copyright inner column `col-md-12 col-lg-9
text-md-right`. No horizontal scroll. On mobile (<md) the aside-stretch
    panel backgrounds turn transparent (media query) so the band sits directly
    on the `#302939` footer bg.
- **Icons:** ionicons — `ion-ios-checkmark-circle-outline` (link bullets in
  ALL THREE link columns; lucide `CheckCircle2` — probe it with the `typeof`
  check per the skill's icon guidance), `ion-ios-heart` (copyright heart →
  lucide `Heart` or a ♥ text glyph, `aria-hidden`). NO brand icons in this
  variant (no social chips).
- **Images:** **NONE** — this variant has no thumbnails, no product, no
  instagram grid, no backgrounds. No picsum placeholders needed at all.

## Design tokens (from the reference — `.footer-06` + shared helpers)

| Token             | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Source                                                      |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Font family       | **Poppins** — `body { font-family: "Poppins", Arial, sans-serif; font-size: 15px; line-height: 1.8; font-weight: normal; }`; headings: same family, weight 400, line-height 1.5 (cf-fonts loads weights 300–900; recreation needs 400; `.footer-heading` is weight 400 — NOT 600)                                                                                                                                                                                                                                                                                                                                                                     | `css/style.css` body + headings rules                       |
| Footer background | **`#302939`** (dark purple) — `.footer-06 { background: #302939; padding-top: 0 !important; position: relative; overflow: hidden; z-index: 0; }` (overrides the base `footer { padding: 7em 0 }` TOP only; bottom stays 7em)                                                                                                                                                                                                                                                                                                                                                                                                                          | `.footer-06` + `footer`                                     |
| Radial glow       | **`#d7b8ff` at 20% opacity** — `.footer-06:after` full-bleed overlay (`position: absolute; top/left/right/bottom: 0; opacity: .2; z-index: -1; background: radial-gradient(ellipse at center, #d7b8ff 0%, rgba(255,255,255,0) 100%)`) — a faint purple glow in the center of the band                                                                                                                                                                                                                                                                                                                                                                 | `.footer-06:after`                                          |
| Panel left        | **`#322b3c`** (darker purple) — `.footer-06 .aside-stretch { background: #322b3c; }` (+ `:after` extends the color 360% width beyond the container to the LEFT viewport edge)                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `.footer-06 .aside-stretch`                                 |
| Panel right       | **`#372f42`** (lighter purple) — `.footer-06 .aside-stretch-right { background: #372f42; }` (+ `:after` extends 360% to the RIGHT viewport edge)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `.footer-06 .aside-stretch-right`                           |
| Submit button     | **`#352d3f`** (darkest purple) — `button.submit { background: #352d3f !important; }` (the ONLY saturated element besides the white pill)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `.footer-06 .subscribe-form .form-group .submit`            |
| Subheading        | `span.subheading`: **uppercase, `letter-spacing: 2px`, `color: rgba(255,255,255,.3)`** (no explicit font-size — inherits body 15px)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `.footer-06 .subheading`                                    |
| Band heading      | `h3.heading-section`: **`font-size: 30px`, `color: #fff`, uppercase** (the newsletter band's big heading)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `.footer-06 .heading-section`                               |
| Column headings   | `.footer-heading`: **`font-size: 20px`, `color: #fff`, `margin-bottom: 20px`, weight 400** — NO `:after` underline, NOT uppercase (same as footer-15/ultimo)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `.footer-06 .footer-heading`                                |
| Muted text        | **`rgba(255,255,255,.3)`** — `.footer-06 p` (copyright line)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `.footer-06 p`                                              |
| Link text         | **`rgba(255,255,255,.5)`** — `.footer-06 .list-unstyled li a` (all link columns)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `.footer-06 .list-unstyled li a`                            |
| Links (general)   | `.footer-06 a { color: #fff; }` (e.g. the logo link); `a { transition: .3s all ease; }`; `a:hover, a:focus { text-decoration: none !important; outline: none !important; }` (global)                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `.footer-06 a`, `css/style.css` top rules                   |
| Subscribe pill    | `form.subscribe-form`: **`border-radius: 40px` (pill), `background: #fff`, `padding: 3px`** — a white pill wrapping the input + button                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `.footer-06 .subscribe-form`                                |
| Subscribe input   | `input.form-control.rounded-left`: **`background: transparent !important`, `border: none !important`, `outline: none !important`, `color: rgba(0,0,0,.3) !important`, 16px, height 56px, radius 0** (placeholder `rgba(0,0,0,.3)`); no focus shadow/outline (`box-shadow: none` on focus)                                                                                                                                                                                                                                                                                                                                                             | `.footer-06 .subscribe-form .form-group input` (+ `:focus`) |
| Subscribe button  | `button.form-control.submit` (type submit): **TEXT button "Submit" — `color: #fff !important; width: 150px; height: 56px; font-size: 14px; background: #352d3f !important; border: none; letter-spacing: 1px; text-transform: uppercase; border-radius: 40px`** (pill; contrast with footer-15's 52×52 square ICON button)                                                                                                                                                                                                                                                                                                                            | `.footer-06 .subscribe-form .form-group .submit`            |
| Form group        | `div.form-group.d-flex` — `position: relative; margin-bottom: 0; border-radius: 0` (input + button side by side inside the white pill)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `.footer-06 .subscribe-form .form-group`                    |
| Link list items   | `a.py-1.d-block` — `padding: 0.25rem 0` per link, block-level, with a `span.ion-ios-checkmark-circle-outline.mr-2` bullet glyph (inherits `rgba(255,255,255,.5)`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | DOM classes + `.footer-06 .list-unstyled li a`              |
| Filler area       | `.ftco-section`: **`padding: 12em 0`**, NO background (white), centered `h2` "Footer #06" (`margin-bottom: 0`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `.ftco-section`, `.ftco-section h2`                         |
| Icons             | ionicons: `ion-ios-checkmark-circle-outline` (link bullets ×11 → lucide `CheckCircle2` — probe with `typeof`), `ion-ios-heart` (copyright → lucide `Heart` or ♥ text, `aria-hidden`). NO brand icons (no social chips in this variant)                                                                                                                                                                                                                                                                                                                                                                                                                | `css/ionicons.min.css` classes in DOM                       |
| Images            | **NONE** — no image roles in this variant (no news thumbs, no product, no instagram grid, no backgrounds). No picsum seeds needed                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | DOM                                                         |
| Mobile behavior   | Newsletter band: `col-md-4` + `col-md-8` stacked below md (`align-items-stretch` keeps equal heights on md+); on <md the `.aside-stretch`/`aside-stretch-right` backgrounds become **transparent** (`background: transparent; :after { display: none }`) so the band sits on the `#302939` bg. Links row: right block `col-md-3 col-lg-6 order-md-last` + left block `col-md-9 col-lg-6` — md 9/3, lg+ 6/6; below md the copyright block stacks FIRST (DOM order, `order-md-last` inactive). THREE link columns `col-md-4`: 3-across on md+, stacked below md (`mb-4` gaps). Copyright inner `col-md-12 col-lg-9 text-md-right`. No horizontal scroll | Bootstrap classes + `.footer-06` media queries              |

## Requirements

### Requirement: Page composition

The system SHALL render the footer-component demo with a main landmark, a
document title, and the mandatory footer landmark.

#### Scenario: Full page render

- **GIVEN** the Adieu app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the filler section and the footer inside the
  main landmark
- **AND** the document title SHALL be "Adieu — Footer"

### Requirement: Filler demo area

The system SHALL render the white filler strip above the footer, matching the
source's demo-content role.

#### Scenario: Filler renders with a centered label

- **GIVEN** the page is rendered
- **WHEN** the top of the page loads
- **THEN** a white section SHALL be visible above the footer with the
  source's `padding: 12em 0` rhythm (the recreation may use a similar
  min-height so the footer band still peeks into the first viewport)
- **AND** a centered level-2 heading SHALL label the demo (the source shows
  **"Footer #06"** — the recreation may show the template's own name as the
  demo label; keep the same kind of filler content)

### Requirement: Dark purple footer band

The system SHALL render the dark purple footer band with the source's
background, padding, radial glow, and Poppins typeface.

#### Scenario: Footer band renders purple

- **GIVEN** the filler section is rendered
- **WHEN** the user inspects the footer
- **THEN** a semantic `<footer>` SHALL render with `background: #302939` and
  `padding-top: 0` (the source overrides the base 7em top padding; bottom
  stays 7em)
- **AND** the font family SHALL be Poppins (body 15px, line-height 1.8;
  headings weight 400, line-height 1.5)
- **AND** a faint radial glow SHALL render centered in the band (`#d7b8ff`
  at ~20% opacity, `ellipse at center` fading to transparent — a subtle
  purple vignette)
- **AND** the page SHALL have a main landmark and a semantic `<footer>`
  landmark

### Requirement: Newsletter band

The system SHALL render the two-tone newsletter band: a 4/8 split with the
subheading + heading on the left panel and the white pill subscribe form on
the right panel.

#### Scenario: Newsletter band renders

- **GIVEN** the footer band is rendered
- **WHEN** the user inspects the top of the footer
- **THEN** a row SHALL render with two equal-height panels
  (`align-items-center align-items-stretch`):
  - a **left panel** (`col-md-4`, `background: #322b3c`) with the uppercase
    letterspaced subheading **"Subscribe to our"**
    (`rgba(255,255,255,.3)`, letter-spacing 2px) and the 30px white uppercase
    heading **"Newsletter"**
  - a **right panel** (`col-md-8`, `background: #372f42`) with a real
    `<form>` (no backend needed — the source uses `action="#"` with no
    handler) wrapping a **white pill** (`border-radius: 40px`,
    `background: #fff`, `padding: 3px`) containing:
    - an email input (transparent background, no border, 16px,
      `rgba(0,0,0,.3)` text, placeholder **"Enter email address"**, 56px
      tall)
    - a **TEXT submit button** labeled **"Submit"** (150px × 56px,
      `background: #352d3f`, white, 14px, uppercase, letter-spacing 1px,
      pill radius) — NOT an icon button (contrast with footer-15)
- **AND** the email input SHALL have a programmatic label (the source uses a
  bare placeholder — the recreation adds a visually-hidden `<label>` or
  `aria-label`)

### Requirement: Link columns

The system SHALL render the three link columns — Information, Application,
API — with the source's heading, link list, and checkmark bullets.

#### Scenario: Link columns render

- **GIVEN** the newsletter band is rendered
- **WHEN** the user inspects the lower part of the footer
- **THEN** THREE `col-md-4` columns SHALL render side by side on md+ (stacked
  below md), each with a white 20px `.footer-heading` and an unordered list
  of links in `rgba(255,255,255,.5)`:
  - **"Information"** — FIVE links: **"Our Company"**, **"Data"**,
    **"Pricing"**, **"Contact Us"**, **"Support"**
  - **"Application"** — THREE links: **"Download"**, **"Bike Provider"**,
    **"How to Used"** (keep the same kind of content; the source's grammar
    quirk may be normalized)
  - **"API"** — THREE links: **"Documentation"**, **"Credential"**,
    **"Developer info"**
- **AND** every link SHALL carry a small checkmark-circle bullet
  (lucide `CheckCircle2` — probe it with `typeof`) at ~0.5rem right margin
  (the source uses `span.ion-ios-checkmark-circle-outline.mr-2`)
- **AND** each link SHALL be a block-level link with ~0.25rem vertical
  padding (the source uses `py-1`)

### Requirement: Copyright block

The system SHALL render the right-side copyright block with the logo
wordmark, the copyright line, the heart, and the mandatory Component Dock
link.

#### Scenario: Copyright block renders

- **GIVEN** the link columns are rendered
- **WHEN** the user inspects the right side of the footer
- **THEN** a block SHALL render (right-aligned on md+: the source uses
  `col-md-3 col-lg-6 order-md-last` + `text-md-right`; below md it stacks
  FIRST, before the link columns) containing:
  - a logo wordmark link **"Colorlib"** (white, 20px — the recreation may
    use its own brand name)
  - the copyright line in `rgba(255,255,255,.3)`: **"Copyright © <current
    year> All rights reserved | This template is made with ♥ by Component
    Dock"** (the source shows "...made with ♥ by Colorlib.com"; the heart
    SHALL be `aria-hidden` (decorative) and the "Component Dock" text SHALL
    link to `https://www.componentdock.com/` per convention — ColorLib must
    NOT appear anywhere in `apps/adieu`)

### Requirement: Responsive layout

The system SHALL reproduce the source's grid: newsletter band 4/8 split, link
columns 3-across on md+, copyright block right on md+ (first in DOM order
below md), no horizontal overflow.

#### Scenario: Grid adapts across breakpoints

- **GIVEN** the footer is rendered
- **WHEN** the viewport is at the lg breakpoint (≥992px)
- **THEN** the newsletter band SHALL show the 4/8 panel split (left panel
  `#322b3c` subheading+heading, right panel `#372f42` white pill form), the
  THREE link columns SHALL render side by side, and the copyright block SHALL
  render on the right (6/12)
- **AND** at the md breakpoint (≥768px) the link columns SHALL render
  3-across and the copyright block SHALL render right at 3/12 (links take
  9/12)
- **AND** below md the newsletter panels SHALL stack full-width with the
  panel backgrounds turning transparent (the band sits directly on the
  `#302939` footer bg), the copyright block SHALL stack FIRST (DOM order —
  `order-md-last` does not apply below md), and the link columns SHALL stack
  with ~1.5rem gaps (`mb-4`)
- **AND** the page SHALL never overflow horizontally

### Requirement: Accessibility

The system SHALL expose semantic landmarks, an accessible newsletter form,
and keyboard-operable interactivity.

#### Scenario: Screen reader exposure

- **GIVEN** the page is rendered
- **WHEN** assistive technology inspects the page
- **THEN** the page SHALL have a main landmark and a semantic `<footer>`
  landmark
- **AND** the newsletter email input SHALL have a programmatic label (the
  source uses a bare placeholder — the recreation adds a visually-hidden
  `<label>` or `aria-label`)
- **AND** the submit button SHALL have an accessible name (its visible
  "Submit" text suffices)
- **AND** the decorative heart SHALL carry `aria-hidden`
- **AND** all links SHALL have visible text (the source's links all carry
  text — no icon-only links in this variant)
- **AND** all interactive elements SHALL be focusable and SHALL show a
  focus-visible ring

## Verification checklist

- [ ] `npm run verify:app adieu` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Document title "Adieu — Footer"
- [ ] Filler: white section (source `padding: 12em 0`) with a centered demo
      label
- [ ] Footer band: DARK PURPLE — `background: #302939`, `padding-top: 0`
      (bottom 7em); faint `#d7b8ff` 20% radial glow overlay; semantic
      `<footer>` + main landmark; Poppins (body 15px/1.8, headings weight
      400/1.5)
- [ ] Newsletter band: `align-items-center align-items-stretch` row — left
      panel `#322b3c` (uppercase letterspaced subheading "Subscribe to our"
      `rgba(255,255,255,.3)` + 30px white uppercase "Newsletter"), right
      panel `#372f42` with real `<form>` → white pill (`radius 40px`,
      `bg #fff`, `padding 3px`) → labeled email input (transparent, no
      border, 16px, placeholder "Enter email address", 56px) + TEXT "Submit"
      button (150×56, `#352d3f`, white, 14px, uppercase, letter-spacing 1px,
      pill) — NOT an icon button
- [ ] Link columns: THREE `col-md-4` — Information (5 links: Our Company,
      Data, Pricing, Contact Us, Support), Application (3 links: Download,
      Bike Provider, How to Used), API (3 links: Documentation, Credential,
      Developer info); white 20px headings; links `rgba(255,255,255,.5)`,
      block-level `py-1`, each with a `CheckCircle2` bullet (~mr-2)
- [ ] Copyright block: `col-md-3 col-lg-6 order-md-last` + inner
      `col-md-12 col-lg-9 text-md-right` — white logo wordmark link; "Copyright
      © <current year> All rights reserved | This template is made with ♥ by
      Component Dock" (heart `aria-hidden`, Component Dock link →
      `https://www.componentdock.com/`); NO ColorLib reference anywhere in
      `apps/adieu` (provenance lives only here + TEMPLATES.md + PR)
- [ ] NO images anywhere in the footer (this variant has no thumbnails, no
      product, no instagram grid — no picsum needed)
- [ ] NO social chips and NO legal links in this variant
- [ ] Responsive: newsletter 4/8 split on md+ (stacked below md, panel bgs
      transparent <md); link columns 3-across on md+ (stacked <md with
      `mb-4` gaps); copyright block right on md+ (9/3 at md, 6/6 at lg+),
      FIRST in DOM order below md; no horizontal overflow
- [ ] Poppins via Google Fonts `<link>` in `index.html` (weight 400 suffices;
      the source loads 300–900)
- [ ] Icons: lucide `CheckCircle2` (link bullets — probe with `typeof`),
      `Heart` (aria-hidden) or ♥ text glyph for the copyright line; no brand
      icons needed
