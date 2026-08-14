# Template: Mentha (Bootstrap Accordion / FAQ Help Center)

## Purpose

Mentha is a single-page accordion FAQ / help-center template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Accordion 03" free template (source:
https://colorlib.com/wp/template/accordion-03/), built under a DIFFERENT name
(**Mentha** — the mint genus, evoking the design's signature mint-green
`#42dca3` active-panel accent; per the monorepo naming mandate — never reuse
the ColorLib source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a clean FAQ accordion: a white page with a centered white card
(soft shadow, clipped Bootstrap card radius) holding **four** collapsible
panels whose category labels mirror a video-platform help center — **Fixed a
problem** (open by default), **Manage your account and settings**, **Create
and grow your channel**, **Policy, safety and copyright**. The OPEN panel's
header turns **mint green (`#42dca3`) with white text and a white up-chevron**;
collapsed headers stay white with dark text and a grey down-chevron. Open
panels 1–3 hold a 5-item numbered `<ol>` of support steps; panel 4 holds a
single paragraph. Unlike its sibling "Accordion 01/02" templates there are NO
category icons, NO purple banner, and NO image rows — text-only panels. Mentha
recreates that structure 1:1 with matching layout, tokens, typography, and
content kinds (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Accordion 03" is FORBIDDEN as the
> app name. **Mentha** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Accordion 03". Listed in TEMPLATES.md under
  **Bootstrap Accordions (20)** (line 641). Free accordion / FAQ component
  template. The `accordion-03` slug appears exactly once (no dup rows to
  mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default preview
  URL `https://preview.colorlib.com/theme/accordion-03/` returns 404; the
  REAL preview URL (same `/bac/` subpath pattern as Accordion 01/02) is
  `https://preview.colorlib.com/theme/bac/accordion-03/` (HTTP 200, 11.9KB
  HTML). Stylesheets: `css/style.css` (220.9KB — bootstrap + custom; token
  source) and the IonIcons 4.5.6 CDN (`ionicons.min.css`) which supplies the
  chevron glyphs via `.fa:before` content rules. NO flaticon.css, NO image
  assets, NO icon spans — this variant is text-only.
- **Screenshot (`accordion-03.jpg`, 1200×972, served as AVIF; converted to
  PNG and browser-verified 2026-08-14):** confirms the aesthetic — centered
  dark heading "Accordion #03" above a white card; the FIRST panel header
  ("Fixed a problem") is **solid mint-green `#42dca3` with white text and a
  white up-chevron** and its panel is OPEN showing a numbered 5-item list of
  dark-grey placeholder text; the other three headers are white with dark-grey
  labels and grey down-chevrons, all collapsed. Faint hairline separators run
  between headers. No icons, no colored surfaces other than the mint header.
- **Visual design (screenshot + live DOM):** clean, minimal, single-accent
  FAQ card. White page (`body { background-color: #fff }`), white card
  (`#fff`), dark charcoal primary text (`rgba(0,0,0,0.8)` labels / `#212529`
  body), **brand mint `#42dca3`** as the ONLY accent (active panel header).
  Sans-serif **Poppins** — declared on `body` (with `font-size: 17px` custom
  override; h1–h6 inherit) and served via cf-fonts @font-face in the preview
  head; load via Google Fonts `<link>` in `index.html` per repo convention.
- **Section order (1:1 from live DOM):**
  1. **Page heading** — `section.ftco-section` (padding 7em 0, white page
     bg) → `div.container` → `div.row` → `div.col-md-12.text-center` →
     `h2.heading-section.mb-5.pb-md-4` "Accordion #03" (28px, `#000`,
     text-center).
  2. **Accordion card** — `div.row.justify-content-center` →
     `div.col-md-8.col-lg-6` (centered, ~2/3 width desktop) →
     `div#accordion.myaccordion.w-100`: white `#fff` bg, `overflow: hidden`,
     `box-shadow: 0px 0px 13px -7px rgba(0,0,0,0.25)`, margin auto. Cards
     keep the Bootstrap default radius `0.25rem` (clipped by overflow
     hidden). NOTE: `.myaccordion .card, .myaccordion .card:last-child
.card-header` and `.myaccordion .card-header` set `border: none;
background: transparent` — the visible separators come from the header
     BUTTON's own `border-top`/`border-bottom` (see #3).
  3. **Panel 1 — "Fixed a problem"** — `div.card` → `div.card-header.p-0`
     (transparent bg, no border, text-left) → `h2.mb-0` → full-width toggle
     button (`d-flex.py-4.px-4.align-items-center.justify-content-between
.btn.btn-link`, `aria-expanded="true"`, `aria-controls="collapseOne"`,
     `data-parent="#accordion"`):
     - left: `p.mb-0` "Fixed a problem" (18px, weight 500 via
       `.card-header p`)
     - right: `<i class="fa" aria-hidden="true">` — 16px chevron
     - **ACTIVE STATE** — `[aria-expanded="true"] { background-color:
#42dca3; color: #fff !important; }` and `[aria-expanded="true"] .fa {
color: #fff !important; }` → mint header, white label, white up
       chevron (`\f3d8` ion-ios-arrow-up).
     - Body `div.card-body.py-5.px-4` (white bg): `<ol>` with **5** `<li>`
       items of placeholder help-copy ("Far far away, behind the word
       mountains", ...). **OPEN by default** (`collapse show`).
  4. **Panels 2–3 — "Manage your account and settings"**, **"Create and grow
     your channel"** — same card structure, CLOSED by default
     (`aria-expanded="false"` → `background-color: #fff` white header, dark
     label `rgba(0,0,0,0.8)`, grey down-chevron `\f3d0`), body `py-5 px-4`
     with an `<ol>` of 5 items each (same placeholder copy).
  5. **Panel 4 — "Policy, safety and copyright"** — CLOSED, but body is
     `card-body.py-5.px-4.px-md-5` (extra md+ horizontal padding) and holds a
     single `<p>` paragraph (NOT a list): "Far far away, behind the word
     mountains, far from the countries Vokalia and Consonantia, ..."
  6. **Footer** — the original has NO footer; per monorepo convention add a
     minimal attribution footer linking `https://www.componentdock.com/`
     ("Component Dock") so every shipped template carries the required link.
- **JS behaviors (original):** Bootstrap collapse with `data-parent="#accordion"`
  on every toggle (only ONE panel open at a time — matches the screenshot),
  `aria-expanded` on the toggle button, `.collapsed` class flips the chevron
  (IonIcons `\f3d8` up → open, `\f3d0` down → closed). NOTE: the container
  also carries `aria-multiselectable="true"` — sloppy source markup that
  CONFLICTS with `data-parent`; the observed/screenshot behavior is
  single-open, so recreate single-open (React state: one `openIndex`, default
  0). Styling driven by `aria-expanded` in the source (mint when true) —
  recreate via state-derived classes/attributes, keep the
  `aria-expanded`/`aria-controls` attributes for a11y, panels `role="region"`
  labelled by their header button.
- **Demo copy caveat:** all three `<ol>` panels repeat the same 5 lorem
  placeholder items and panel 4 repeats the same paragraph. The implementer
  should write varied, plausible per-topic help content: 5 numbered support
  steps for panels 1–3 (fixing a problem / account & settings / creating and
  growing a channel) and one short paragraph for panel 4 (policy, safety,
  copyright) — the same _kind_ of content, not the repetition. The four
  category titles are real help-center categories; keep their meaning
  (paraphrase allowed: fix-a-problem, account-settings, create-grow-channel,
  policy-safety-copyright).

## Design tokens (verified from live stylesheet `css/style.css`)

- **Brand colors:**
  - `#42dca3` — BRAND MINT: the ONLY colored surface. Active panel header
    background (`[aria-expanded="true"] { background-color: #42dca3 }`).
  - `#ffffff` — page background (`body` Bootstrap default, no override),
    accordion card (`.myaccordion { background: #fff }`), collapsed header
    background (`[aria-expanded="false"] { background-color: #fff }`), and
    active-header text (`color: #fff !important`).
  - `#000000` — page heading (`.heading-section`, 28px).
  - `rgba(0,0,0,0.8)` — panel header label text (`.myaccordion .btn { color:
rgba(0,0,0,0.8) }`; the 18px/500 comes from `.card-header p`).
  - `rgba(0,0,0,0.3)` — collapsed chevron color (`.myaccordion .fa`, 16px);
    flips to `#fff` when open.
  - `rgba(0,0,0,0.05)` — header separator lines (`.myaccordion .btn`
    `border-top` AND `border-bottom: 1px solid`, so each header is framed by
    hairlines; adjacent headers share/overlap their borders).
  - `rgba(0,0,0,0.25)` — card shadow tint (`0px 0px 13px -7px`).
  - `#212529` — body/list text (Bootstrap default body color; the `<ol>`
    items render as dark grey in the screenshot).
- **Fonts:** **Poppins** on `body` (custom override `font-family: "Poppins",
Arial, sans-serif; font-size: 17px`; h1–h6 inherit — the preview serves the
  font via cf-fonts @font-face; load via Google Fonts `<link>` in
  `index.html`). Sizes: page heading 28px; header labels 18px weight 500
  (`.card-header p { font-weight: 500; font-size: 18px }`); list items and
  panel-4 paragraph inherit body 17px; body line-height 1.5.
- **Buttons:** the accordion header IS the button — full width
  (`.myaccordion .btn { width: 100% }`), transparent-to-state background
  (white when collapsed, `#42dca3` when open), `color: rgba(0,0,0,0.8)`
  (white when open), `padding: 0` (real padding comes from `py-4 px-4` on the
  button = 1.5rem), `border-radius: 0 !important`, `letter-spacing: 0`,
  `border-top/bottom: 1px solid rgba(0,0,0,0.05)`; left = label, right =
  chevron (`justify-content-between`). NO shadow on headers in this variant
  (unlike Accordion 02's `0 8px 18px...`).
- **Radii:** card `border-radius: 0.25rem` (Bootstrap `.card` default,
  clipped by `.myaccordion { overflow: hidden }`); header buttons `0`; no
  pills, no circles (no images/icons in this variant).
- **Shadows:** card `0px 0px 13px -7px rgba(0,0,0,0.25)` only.
- **Spacing rhythm:** section padding `7em 0`; page heading `mb-5 pb-md-4`;
  header button `py-4 px-4`; panel bodies `py-5 px-4` (panel 4 additionally
  `px-md-5` — wider side padding from md up); `ol { margin-bottom: 0 }`
  (Bootstrap override); centered column `col-md-8 col-lg-6` (~66%/50% of
  container, centered).
- **Layout:** single centered column card; headers are flex rows
  (label left, chevron right). No grid, no images, no icon fonts.
- **Icons:** lucide-react — `ChevronUp` (open panel) / `ChevronDown`
  (collapsed panel), 16px, `rgba(0,0,0,0.3)` when collapsed → `#fff` when
  open (mint header). No category icons in this variant.
- **Images:** NONE in the original — no placeholders needed.

## Requirements

### Requirement: Page heading

The system SHALL render a centered page heading "Accordion #03" at the top of
the page, styled 28px `#000` Poppins with generous bottom spacing, on the
white page background.

#### Scenario: Heading layout

- **GIVEN** the Mentha page is rendered
- **WHEN** the page loads
- **THEN** an `h2` SHALL show the text "Accordion #03" centered at the top of
  the page
- **AND** the heading SHALL be 28px, `#000`, with a large bottom margin
  (mb-5 + pb-md-4 equivalent), matching the reference

### Requirement: Accordion card

The system SHALL render a single centered white card (Bootstrap-card radius,
clipped, soft shadow) containing all four FAQ panels.

#### Scenario: Card presentation

- **GIVEN** the Mentha page is rendered
- **WHEN** the user views the main content
- **THEN** a white card (`#fff`) SHALL be centered in a ~2/3-width column
  (`col-md-8 col-lg-6` equivalent)
- **AND** the card SHALL have a soft shadow
  (`0 0 13px -7px rgba(0,0,0,0.25)` equivalent), `overflow: hidden`, and a
  small clipped radius (0.25rem equivalent)
- **AND** the card SHALL contain exactly four accordion panels

### Requirement: Four panels with default states

The system SHALL render four panels — "Fixed a problem", "Manage your account
and settings", "Create and grow your channel", "Policy, safety and copyright"
— with the first open by default and only one open at a time.

#### Scenario: Default state on load

- **GIVEN** the accordion card is rendered
- **WHEN** the page loads
- **THEN** panel 1 SHALL be titled "Fixed a problem" and be OPEN
- **AND** panels 2–4 SHALL be titled "Manage your account and settings",
  "Create and grow your channel", "Policy, safety and copyright" and be
  CLOSED
- **AND** the open panel SHALL show a `ChevronUp` icon and the closed panels a
  `ChevronDown` icon at the right of each header

#### Scenario: Single-open behavior

- **GIVEN** the "Fixed a problem" panel is open and the others are closed
- **WHEN** the user activates the "Manage your account and settings" toggle
- **THEN** that panel SHALL open and the "Fixed a problem" panel SHALL close
  (only one panel open at a time, per the reference's `data-parent` behavior)

### Requirement: Active-header styling

The open panel's header SHALL be mint-green (`#42dca3`) with white label text
and a white chevron; collapsed headers SHALL be white with dark
(`rgba(0,0,0,0.8)`) labels and grey (`rgba(0,0,0,0.3)`) chevrons.

#### Scenario: Open vs collapsed header appearance

- **GIVEN** the accordion card is displayed
- **WHEN** the user views the panel headers
- **THEN** the OPEN panel's header SHALL have background `#42dca3`, label
  text `#fff`, and a `#fff` chevron
- **AND** each CLOSED panel's header SHALL have background `#fff`, label text
  `rgba(0,0,0,0.8)` (18px, weight 500), and a `rgba(0,0,0,0.3)` chevron
- **AND** every header SHALL be a full-width button with `border-radius: 0`
  and hairline separators (`1px solid rgba(0,0,0,0.05)` top and bottom)

#### Scenario: Styling follows state

- **GIVEN** panel 2 is closed and panel 1 is open
- **WHEN** the user opens panel 2
- **THEN** panel 2's header SHALL turn mint (`#42dca3`) with white text and a
  white up-chevron
- **AND** panel 1's header SHALL turn white with dark text and a grey
  down-chevron (state-driven styling, as the source's `[aria-expanded]`
  rules)

### Requirement: Panel content

Panels 1–3 SHALL each contain a 5-item numbered list of help steps; panel 4
SHALL contain a single paragraph (with slightly wider md+ horizontal
padding).

#### Scenario: List panels

- **GIVEN** panel 1, 2, or 3 is open
- **WHEN** the user views its body
- **THEN** the body SHALL show an ordered list (`<ol>`) of exactly 5
  short help steps, numbered by the browser, in body text color
  (`#212529`-family) on white
- **AND** the steps SHALL be plausible, topic-appropriate support steps (the
  original repeats one lorem placeholder — recreate the same KIND of content,
  not the repetition), with the default `<ol>` list indentation and
  `margin-bottom: 0`

#### Scenario: Paragraph panel

- **GIVEN** panel 4 ("Policy, safety and copyright") is open
- **WHEN** the user views its body
- **THEN** the body SHALL show a single paragraph of policy/help copy (no
  list)
- **AND** the body SHALL have the standard `py-5 px-4` padding plus extra
  horizontal padding from md up (`px-md-5` equivalent)

### Requirement: Toggle interaction

Each panel header SHALL be a full-width button that toggles its panel, with
correct `aria-expanded` / `aria-controls` and a swapping chevron.

#### Scenario: Toggling a panel

- **GIVEN** the accordion card is displayed
- **WHEN** the user clicks a panel header button
- **THEN** the panel SHALL toggle open/closed and the button's `aria-expanded`
  SHALL flip accordingly
- **AND** the chevron SHALL swap between `ChevronUp` (open) and `ChevronDown`
  (closed)
- **AND** only one panel SHALL be open at a time

#### Scenario: Keyboard accessibility

- **GIVEN** the accordion card is displayed
- **WHEN** the user tabs to a panel header button and presses Enter/Space
- **THEN** the panel SHALL toggle the same way as a click
- **AND** the open panel body SHALL be exposed to assistive tech
  (`role="region"` with `aria-labelledby` pointing at its header button)

### Requirement: Responsive behavior

The system SHALL adapt the card column for mobile viewports.

#### Scenario: Mobile layout (≤768px)

- **GIVEN** the Mentha page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the accordion card SHALL fill the viewport width (single column;
  the `col-md-8 col-lg-6` centering collapses)
- **AND** header buttons SHALL keep `py-4 px-4`-equivalent padding and remain
  fully tappable (44px+ hit area)
- **AND** section padding SHALL reduce (the reference's `7em` is large; scale
  down for mobile per repo conventions)

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Mentha page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded as
  "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so it
  does not disturb the minimal reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-mentha`
- [ ] `scripts/verify-app.sh mentha` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with reference): centered heading "Accordion #03"
      → white accordion card (clipped 0.25rem radius, shadow
      `0 0 13px -7px rgba(0,0,0,.25)`) → "Fixed a problem" panel (open, mint
      header, white up-chevron) → "Manage your account and settings" /
      "Create and grow your channel" / "Policy, safety and copyright" panels
      (closed, white headers, grey down-chevrons) → minimal Component Dock
      footer
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#42dca3` mint
      (open header bg + white text + white chevron), `#fff` page/card/collapsed
      headers, `#000` heading, `rgba(0,0,0,0.8)` header labels,
      `rgba(0,0,0,0.3)` collapsed chevrons, `rgba(0,0,0,0.05)` header hairline
      separators; card shadow `0 0 13px -7px rgba(0,0,0,.25)`; header radius 0
- [ ] Font: Poppins via Google Fonts `<link>` in `index.html` (body 17px);
      title "Mentha — FAQ"
- [ ] 4 panels, single-open (openIndex default 0), `aria-expanded`/
      `aria-controls` + `role="region"`; keyboard operable; chevrons
      `ChevronUp`/`ChevronDown` 16px (grey → white when open)
- [ ] Panels 1–3: 5-item numbered `<ol>` of topic-appropriate help steps;
      panel 4: single paragraph with `px-md-5`-equivalent extra padding —
      varied copy, NOT the original's repeated placeholder
- [ ] Mobile ≤768px: card full width, tappable headers, reduced section
      padding
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark the "Accordion 03" row, line 641 —
      Bootstrap Accordions category; slug appears once, no dup rows)
