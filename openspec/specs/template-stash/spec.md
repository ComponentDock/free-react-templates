# Template: Stash (Bootstrap Accordion / Cloud Storage Services)

## Purpose

Stash is a single-page accordion cloud-storage-services template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Accordion 04" free template (source:
https://colorlib.com/wp/template/accordion-04/), built under a DIFFERENT name
(**Stash** — a private store of files, evoking the design's storage-category
panels with usage counts and its golden-yellow accent; per the monorepo naming
mandate — never reuse the ColorLib source name), with the monorepo stack: Vite

- React 19 + Tailwind CSS 4 + TypeScript.

The original is a clean storage/cloud-services accordion: a near-white page
with a centered white card (5px radius, soft shadow) holding **three**
collapsible panels — **My Files** (open by default, badge `349`), **Mail**
(badge `89`), **Cloud** (badge `102`). Each header pairs a 40px circular icon
(yellow `#f2dc63` circle with a white glyph: filing cabinet / mail / cloud)
with the panel title on the left and a pill-shaped count badge on the right.
The OPEN panel's header turns a **golden-yellow gradient (`#ffe97a` →
`#f2dd63`)**, its icon circle flips to white with a black glyph, and its count
pill flips to darker gold (`#f0d74b` bg, `#ddbe12` border) with white text.
Each panel body lists **five** service rows — a faint-grey `01`–`05` number, a
service name (Dropbox, Skydrive, FTP Server, ...), and a right-aligned count
pill. **Unlike its Accordion 01/02/03 siblings there is NO chevron toggle** —
the source comments the `<i class="fa">` chevron out in all three headers, so
the pill badge is the only right-side element. Stash recreates that structure
1:1 with matching layout, tokens, typography, and content kinds (no ColorLib
assets copied).

> NAMING NOTE: the ColorLib source name "Accordion 04" is FORBIDDEN as the
> app name. **Stash** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Accordion 04". Listed in TEMPLATES.md under
  **Bootstrap Accordions (20)** (line 642). Free accordion / cloud-storage
  services component template. The `accordion-04` slug appears exactly once
  (no dup rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default preview
  URL `https://preview.colorlib.com/theme/accordion-04/` returns 404; the
  REAL preview URL (same `/bac/` subpath pattern as Accordion 01/02/03) is
  `https://preview.colorlib.com/theme/bac/accordion-04/` (HTTP 200, 14.3KB
  HTML). Stylesheets: `css/style.css` (223.6KB — bootstrap + custom; token
  source) and the IonIcons 4.5.6 CDN (`ionicons.min.css`) which supplies the
  header glyphs (`ion-ios-filing`, `ion-ios-mail`, `ion-ios-cloud`). NO
  flaticon.css, NO image assets. The `<i class="fa">` chevron is COMMENTED
  OUT in all three headers — this variant renders NO chevrons.
- **Screenshot (`accordion-04.jpg`, 1200×972, served as AVIF → converted to
  PNG and browser-verified 2026-08-14):** confirms the aesthetic — centered
  dark heading "Accordion #04" above a white card (rounded 5px corners, soft
  drop shadow); the FIRST panel header **"My Files" = pale golden-yellow
  gradient with a dark folder glyph on a white circle and a darker-gold count
  pill (349)**, panel open showing 5 rows (01 Dropbox 21 / 02 Skydrive 100 /
  03 FTP Server 8 / 04 Dropbox 1 / 05 Skyrdrive 10); "Mail" and "Cloud"
  headers collapsed — white backgrounds, yellow circle icons with dark
  glyphs, grey-bordered count pills (89 / 102). Page background reads as
  near-white (`#fafafa` / `rgba(0,0,0,0.02)` tint).
- **Visual design (screenshot + live DOM):** clean, minimal, single-accent
  storage menu. Near-white page, white card, dark primary text, gray
  secondary text, **brand golden-yellow `#f2dc63`** (icon circles + active
  header gradient end) as the ONLY accent family. Sans-serif **Poppins**
  (declared on `body` in style.css with `font-size: 14px; line-height: 1.8;
color: gray`; served via cf-fonts @font-face in the preview head — load via
  Google Fonts `<link>` in `index.html` per repo convention).
- **Section order (1:1 from live DOM):**
  1. **Page heading** — `section.ftco-section` (padding 7em 0, near-white
     page bg) → `div.container` → `div.row` → `div.col-md-12.text-center` →
     `h2.heading-section.mb-5.pb-md-4` "Accordion #04" (28px, `#000`,
     text-center).
  2. **Accordion card** — `div.row.justify-content-center` →
     `div.col-md- col-lg-6` (NOTE: the source's `col-md-` is malformed —
     missing its number; effectively only `col-lg-6` applies, so the card is
     ~50% width from lg up and full width below; recreate the INTENT with a
     centered ~half-width column on desktop, e.g. `md:max-w-2xl lg:max-w-xl
mx-auto` or a `col-md-8 col-lg-6`-equivalent) → `div#accordion
.myaccordion.w-100`: white `#fff` bg, `border-radius: 5px`,
     `overflow: hidden`, `box-shadow: 0px 10px 29px -16px rgba(0,0,0,0.12)`,
     margin auto.
  3. **Panel 1 — "My Files"** — `div.card` → `div.card-header.p-0`
     (transparent bg, no border, text-left) → `h2.mb-0` → full-width toggle
     button (`d-flex.py-3.px-4.align-items-center.justify-content-between
.btn.btn-link`, `aria-expanded="true"`, `aria-controls="collapseOne"`,
     `data-parent="#accordion"`):
     - left: `div.heading.d-flex.align-items-center` → `div.icon
.d-flex.align-items-center.justify-content-center` (40×40 circle,
       radius 50%, bg `#f2dc63`) → `<span class="ion-ios-filing"></span>`
       (20px glyph, `#fff`) + `h3.mb-0.ml-3` "My Files" (16px, text-left).
     - right: `p.mb-0.num` "349" — pill: `border: 1px solid
rgba(0,0,0,0.1)`, `border-radius: 40px`, `font-size: 16px`, `padding:
5px 15px`, `overflow: hidden`, relative.
     - NO chevron (source comments `<i class="fa">` out).
     - Body `div.card-body.p-0` (bg `rgba(0,0,0,0.02)`): `<ul>` with **5**
       `<li>` service rows (see #5). **OPEN by default** (`collapse show`).
  4. **Panels 2–3 — "Mail"**, **"Cloud"** — same card/header structure,
     icons `ion-ios-mail` / `ion-ios-cloud`, badges `89` / `102`, CLOSED by
     default (`collapsed` class, `aria-expanded="false"`), 5 service rows
     each.
  5. **Service row** — `li` (`list-style: none`, `border-bottom: 1px solid
rgba(0,0,0,0.05)`) → `a.d-flex.justify-content-between.align-items
-center` (`padding: 15px 30px`):
     - left `p` (color `rgba(0,0,0,0.8)`, `font-weight: 600`): `<span>01</span>`
       — weight 300, color `rgba(0,0,0,0.3)`, `margin-right: 10px` — followed
       by the service name ("Dropbox", "Skydrive", "FTP Server", ...).
     - right `span.num` "21" — pill: `border: 1px solid rgba(0,0,0,0.1)`,
       `border-radius: 40px`, `font-size: 16px`, `padding: 0 12px`,
       `display: inline-block`, `color: #000`.
  6. **Footer** — the original has NO footer; per monorepo convention add a
     minimal attribution footer linking `https://www.componentdock.com/`
     ("Component Dock") so every shipped template carries the required link.
- **JS behaviors (original):** Bootstrap collapse with `data-parent="#accordion"`
  on every toggle (only ONE panel open at a time — matches the screenshot),
  `aria-expanded` on the toggle button. Active styling is driven ENTIRELY by
  `[aria-expanded]` selectors (no chevron flip needed in this variant — the
  chevron is commented out): `[aria-expanded="true"]` gets the golden
  gradient + white-icon/black-glyph + gold pill; `[aria-expanded="false"]`
  gets `background-color: #fff`. Recreate with React state: one `openIndex`
  (default 0), buttons toggle, `aria-expanded`/`aria-controls` attributes for
  a11y, panels `role="region"` labelled by their header button. Service rows
  are static presentational content (the `<a href="#">` links go nowhere —
  render as rows, not navigation).
- **Demo copy caveat:** the original repeats placeholder data — the same five
  counts (21/100/8/1/10) appear in every panel, service names repeat
  (Dropbox ×2 and Skydrive ×2 inside panel 1; FTP Server/Dropbox/Skyrdrive
  repeat across panels), and panel-1 name "Skyrdrive" is misspelled. The
  implementer should write varied, plausible per-category storage services
  and counts (files / mail / cloud kinds of services), keeping the same
  _kind_ of content (01–05 numbering + service name + count) — not the
  repetition. The three category titles (My Files / Mail / Cloud) and badge
  figures (349 / 89 / 102) are real-looking usage counts; keep their meaning
  (paraphrase allowed).

## Design tokens (verified from live stylesheet `css/style.css`)

- **Brand colors:**
  - `#f2dc63` — BRAND GOLD: header icon-circle background
    (`.card-header .heading .icon`) AND the active-header gradient END color.
  - `#ffe97a` — active-header gradient START color (`[aria-expanded="true"]`:
    linear-gradient top `#ffe97a` → bottom `#f2dd63`; the lighter end of the
    same family — implement as one `brand-gold` gradient in `@theme`).
  - `#f0d74b` — ACTIVE count-pill background (`[aria-expanded="true"] .num`).
  - `#ddbe12` — ACTIVE count-pill border color.
  - `#ffffff` — collapsed header background (`[aria-expanded="false"]`),
    accordion card (`.myaccordion { background: #fff }`), ACTIVE icon-circle
    background (`.icon { background: #fff !important }`), ACTIVE glyph color
    (`.icon span { color: #000 !important }` — glyph black on white).
  - `#000000` — page heading (`.heading-section`, 28px), header button text
    (`.myaccordion .btn { color: #000 }`), ACTIVE icon glyph, row count-pill
    text (`.card-body ul li .num { color: #000 }`).
  - `#fafafa` — page background (custom `body` rule; later rule overrides it
    with `background: rgba(0,0,0,0.02)` — visually equivalent near-white;
    use one of the two).
  - `rgba(0,0,0,0.02)` — page background override AND card-body background
    (the subtle tint that reads as "light gray").
  - `rgba(0,0,0,0.8)` — service-row name text (`.card-body ul li a p`,
    weight 600).
  - `rgba(0,0,0,0.3)` — row number span (`.card-body ul li a p span`, weight
    300).
  - `rgba(0,0,0,0.1)` — pill borders (header `p.num` + row `span.num`).
  - `rgba(0,0,0,0.05)` — header bottom border (`.myaccordion .btn`
    `border-bottom: 1px solid`) and row separators
    (`.card-body ul li { border-bottom: 1px solid }`).
  - `rgba(0,0,0,0.12)` — card shadow tint (`0px 10px 29px -16px`).
  - `gray` — general body text color (custom `body` rule; Bootstrap
    `#6c757d` family).
- **Fonts:** **Poppins** on `body` (custom override `font-family: "Poppins",
Arial, sans-serif; font-size: 14px; line-height: 1.8; font-weight: normal;
color: gray` — NOTE: 14px/1.8 here, NOT the 17px/1.5 of Accordion 03; the
  preview serves the font via cf-fonts @font-face — load via Google Fonts
  `<link>` in `index.html`). Sizes: page heading 28px; header button 18px;
  panel title `h3` 16px; header count pill 16px; row names inherit body 14px
  (weight 600); row numbers weight 300; row count pills 16px.
- **Buttons:** the accordion header IS the button — full width
  (`.myaccordion .btn { width: 100% }`), `color: #000`, `font-size: 18px`,
  `border-radius: 0 !important`, `border: none` (real separator = its
  `border-bottom: 1px solid rgba(0,0,0,0.05)`), `letter-spacing: 0`, padding
  0 (real padding comes from `py-3 px-4` on the button = 0.75rem/1rem — NOTE
  `py-3`, one step tighter than Accordion 02/03's `py-4`); left = icon circle
  - title, right = count pill (`justify-content-between`). Hover/focus keep
    `text-decoration: none`.
- **Radii:** card `border-radius: 5px` (+ `overflow: hidden`); icon circles
  `border-radius: 50%` (40×40); count pills `border-radius: 40px` (full
  pill); header buttons `0`. No pill buttons beyond the count badges.
- **Shadows:** card `0px 10px 29px -16px rgba(0,0,0,0.12)` only; ACTIVE count
  pill gets an inset top shadow via `.num:after`
  (`inset 0 -10px 25px -3px rgba(0,0,0,0.75)` at `opacity: .2` — subtle
  3D shading; optional fidelity detail, may be approximated).
- **Spacing rhythm:** section padding `7em 0`; page heading `mb-5 pb-md-4`;
  header button `py-3 px-4`; header icon 40×40 with `h3.ml-3` (12px gap);
  header count pill `padding: 5px 15px`; card body `p-0` (padding lives on
  the rows); service row link `padding: 15px 30px`; row number span
  `margin-right: 10px`; row count pill `padding: 0 12px`; centered column
  `col-md- col-lg-6` (~50% width from lg up — malformed `col-md-` in source,
  see section order #2).
- **Layout:** single centered column card; headers are flex rows (icon+title
  left, pill right); service rows are flex rows (name+number left, pill
  right). No grid, no images, no chevrons.
- **Icons:** lucide-react — `FolderOpen` (My Files — the source uses
  `ion-ios-filing`), `Mail` (Mail — `ion-ios-mail`), `Cloud` (Cloud —
  `ion-ios-cloud`), 20px; white `#fff` glyph on the 40px `#f2dc63` circle
  when collapsed, black `#000` glyph on a white circle when the panel is
  open. NO chevron icons (source comments the chevron out).
- **Images:** NONE in the original — no placeholders needed.

## Requirements

### Requirement: Page heading

The system SHALL render a centered page heading "Accordion #04" at the top of
the page, styled 28px `#000` Poppins with generous bottom spacing, on the
near-white page background.

#### Scenario: Heading layout

- **GIVEN** the Stash page is rendered
- **WHEN** the page loads
- **THEN** an `h2` SHALL show the text "Accordion #04" centered at the top of
  the page
- **AND** the heading SHALL be 28px, `#000`, with a large bottom margin
  (mb-5 + pb-md-4 equivalent), matching the reference

### Requirement: Accordion card

The system SHALL render a single centered white card (5px radius, soft
shadow, clipped) containing all three storage panels.

#### Scenario: Card presentation

- **GIVEN** the Stash page is rendered
- **WHEN** the user views the main content
- **THEN** a white card (`#fff`) SHALL be centered in a ~50%-width column on
  desktop (the reference's `col-lg-6` — its `col-md-` is malformed; recreate
  the intent, e.g. `md:max-w-2xl lg:max-w-xl mx-auto`)
- **AND** the card SHALL have a soft shadow
  (`0 10px 29px -16px rgba(0,0,0,0.12)` equivalent), `border-radius: 5px`,
  `overflow: hidden`, and `margin: auto`
- **AND** the card SHALL contain exactly three accordion panels

### Requirement: Three panels with default states

The system SHALL render three panels — "My Files" (count 349), "Mail" (count
89), "Cloud" (count 102) — with the first open by default and only one open
at a time.

#### Scenario: Default state on load

- **GIVEN** the accordion card is rendered
- **WHEN** the page loads
- **THEN** panel 1 SHALL be titled "My Files" with count pill "349" and be
  OPEN
- **AND** panels 2–3 SHALL be titled "Mail" (89) and "Cloud" (102) and be
  CLOSED
- **AND** the open panel SHALL show its body list and the closed panels SHALL
  hide theirs

#### Scenario: Single-open behavior

- **GIVEN** the "My Files" panel is open and the others are closed
- **WHEN** the user activates the "Mail" toggle
- **THEN** the Mail panel SHALL open and the "My Files" panel SHALL close
  (only one panel open at a time, per the reference's `data-parent` behavior)

### Requirement: Header rows

Each panel header SHALL be a full-width button showing a 40px circular icon +
panel title on the left and a count pill on the right. The OPEN header SHALL
use the golden gradient treatment; collapsed headers SHALL be white. There
SHALL be NO chevron (the reference comments it out).

#### Scenario: Header composition

- **GIVEN** the accordion card is displayed
- **WHEN** the user views a panel header
- **THEN** the header SHALL be a full-width button, 18px `#000` text, no
  border-radius, with a `1px solid rgba(0,0,0,0.05)` bottom border
- **AND** the left side SHALL show a 40×40 circle (`border-radius: 50%`) with
  a 20px icon glyph followed by the 16px panel title
- **AND** the right side SHALL show a count pill (16px, `border-radius:
40px`, `padding: 5px 15px`, `border: 1px solid rgba(0,0,0,0.1)`)
- **AND** NO chevron SHALL be rendered on either side

#### Scenario: Open vs collapsed header appearance

- **GIVEN** the accordion card is displayed
- **WHEN** the user views the panel headers
- **THEN** the OPEN panel's header SHALL have the golden gradient background
  (`#ffe97a` → `#f2dd63`), a WHITE icon circle with a BLACK glyph, and a
  count pill with background `#f0d74b`, border `#ddbe12`, and white text
- **AND** each CLOSED panel's header SHALL have background `#fff`, a `#f2dc63`
  icon circle with a white glyph, and a count pill with a
  `rgba(0,0,0,0.1)` border and black text

#### Scenario: Styling follows state

- **GIVEN** panel 2 is closed and panel 1 is open
- **WHEN** the user opens panel 2
- **THEN** panel 2's header SHALL turn golden-gradient with white circle /
  black glyph / gold pill
- **AND** panel 1's header SHALL turn white with yellow circle / white glyph /
  plain pill (state-driven styling, as the source's `[aria-expanded]` rules)

### Requirement: Service rows

Each open panel SHALL render 5 service rows; each row SHALL show a `01`–`05`
number, a service name, and a right-aligned count pill.

#### Scenario: Row content and layout

- **GIVEN** a panel is open
- **WHEN** the user views its body
- **THEN** the panel SHALL list 5 rows, each containing:
  - a faint number span (`01`–`05`, weight 300, `rgba(0,0,0,0.3)`, 10px
    right margin)
  - a service name (weight 600, `rgba(0,0,0,0.8)`)
  - a right-aligned count pill (16px, `border-radius: 40px`, `padding: 0
12px`, `border: 1px solid rgba(0,0,0,0.1)`, black text)
- **AND** the row SHALL be a flex row (`justify-content-between`) with 15px
  30px padding, on the `rgba(0,0,0,0.02)` panel background, separated from
  the next row by a `1px solid rgba(0,0,0,0.05)` bottom border
- **AND** service names and counts SHALL be varied, plausible per-category
  storage services (the original repeats placeholder data everywhere —
  recreate the same kind of content, not the repetition)

### Requirement: Toggle interaction

Each panel header SHALL be a full-width button that toggles its panel, with
correct `aria-expanded` / `aria-controls`; only one panel open at a time.

#### Scenario: Toggling a panel

- **GIVEN** the accordion card is displayed
- **WHEN** the user clicks a panel header button
- **THEN** the panel SHALL toggle open/closed and the button's `aria-expanded`
  SHALL flip accordingly
- **AND** only one panel SHALL be open at a time

#### Scenario: Keyboard accessibility

- **GIVEN** the accordion card is displayed
- **WHEN** the user tabs to a panel header button and presses Enter/Space
- **THEN** the panel SHALL toggle the same way as a click
- **AND** the open panel body SHALL be exposed to assistive tech
  (`role="region"` with `aria-labelledby` pointing at its header button)

### Requirement: Responsive behavior

The system SHALL adapt the card column and rows for mobile viewports.

#### Scenario: Mobile layout (≤768px)

- **GIVEN** the Stash page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the accordion card SHALL fill the viewport width (single column;
  the desktop ~50% centering collapses)
- **AND** header buttons SHALL keep `py-3 px-4`-equivalent padding and remain
  fully tappable (44px+ hit area)
- **AND** section padding SHALL reduce (the reference's `7em` is large; scale
  down for mobile per repo conventions)

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Stash page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded as
  "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so it
  does not disturb the minimal reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-stash`
- [ ] `scripts/verify-app.sh stash` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with reference): centered heading "Accordion #04"
      → white accordion card (5px radius, shadow
      `0 10px 29px -16px rgba(0,0,0,.12)`) → "My Files" panel (open, golden
      gradient header, white circle / black folder glyph, gold count pill 349) → "Mail" (89) / "Cloud" (102) panels (closed, white headers,
      yellow circles, plain pills) → minimal Component Dock footer
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#f2dc63` gold
      (icon circles + gradient end), `#ffe97a` (gradient start), `#f0d74b` +
      `#ddbe12` (active pill), `#fff` card/collapsed headers/active circle,
      `#000` heading/header text/active glyph, `rgba(0,0,0,0.8)` row names,
      `rgba(0,0,0,0.3)` row numbers, `rgba(0,0,0,0.1)` pill borders,
      `rgba(0,0,0,0.05)` separators, `rgba(0,0,0,0.02)` page/panel tint; card
      radius 5px
- [ ] Font: Poppins via Google Fonts `<link>` in `index.html` (body 14px,
      line-height 1.8); title "Stash — Cloud Storage"
- [ ] 3 panels, single-open (openIndex default 0), `aria-expanded`/
      `aria-controls` + `role="region"`; keyboard operable; NO chevron icons
      anywhere (the reference comments them out)
- [ ] Header icons via lucide-react: `FolderOpen` (My Files), `Mail` (Mail),
      `Cloud` (Cloud) — 20px glyphs on 40px circles (white glyph on
      `#f2dc63`; black glyph on white when open)
- [ ] 5 service rows per panel: `01`–`05` number span (300, `rgba(0,0,0,0.3)`) + name (600, `rgba(0,0,0,0.8)`) + count pill (0 12px padding) — varied,
      plausible storage services per category, NOT the original's repeated
      placeholder data
- [ ] Mobile ≤768px: card full width, tappable headers, reduced section
      padding
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark the "Accordion 04" row, line 642 —
      Bootstrap Accordions category; slug appears once, no dup rows)
