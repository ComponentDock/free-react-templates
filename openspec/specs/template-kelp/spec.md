# Template: Kelp (Bootstrap Accordion / UI Component)

## Purpose

Kelp is a free single-page UI-component template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Accordion 05"
free template (source: https://colorlib.com/wp/template/accordion-05/), built
under a DIFFERENT name (**Kelp** — a single-word ocean/teal brand word fitting
the monorepo naming mandate — never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a minimal, component-focused page: a centered dark heading
"Accordion #05" above ONE white accordion card with **three** panels —
"Manage" (gear icon, open by default, 3 numbered rows: Account / Settings /
Profile), "Location" (map-pin icon, collapsed, one lorem paragraph), and
"Hobbies" (basketball icon, collapsed, 3 unnumbered activity rows). The
signature visual is the **teal `#75d6d1` treatment**: square 60×60 teal icon
containers on every header, and the open panel's entire body rendered teal
with white text. Kelp recreates that structure 1:1 with matching layout,
colors, typography, and content kinds (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Accordion 05" is FORBIDDEN as the
> app name. **Kelp** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` (verified
> 2026-08-14). Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Accordion 05". Listed in TEMPLATES.md under
  **Bootstrap Accordions (20)** (line 643). The `accordion-05` slug appears
  exactly once (no dup rows to mark). Free single-page accordion / UI
  component template.
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default
  `https://preview.colorlib.com/theme/accordion-05/` returns **404** — the
  REAL preview is `https://preview.colorlib.com/theme/bac/accordion-05/`
  (HTTP 200, 12.2KB HTML; same `/bac/` subpath pattern as Accordion 01–04).
  Stylesheets: `css/style.css` (221.9KB = bootstrap + custom tokens) and the
  IonIcons 4.5.6 CDN (`ionicons.min.css` — header chevrons and row arrows are
  ionicons glyphs via custom `.fa:before` rules). NO Google Fonts link in the
  HTML — `"Poppins", Arial, sans-serif` is declared on `body` in style.css
  (load via Google Fonts `<link>` in `index.html`). NO flaticon.css, NO
  images anywhere — pure component page.
- **Visual design (screenshot `accordion-05.jpg`, 1200×972, AVIF, converted
  to PNG + browser-verified 2026-08-14, cross-checked against the live
  render):** near-white page (`#fafafa`); centered black heading
  "Accordion #05"; ONE white card (SQUARE corners — `border-radius: 0`, soft
  shadow `0 10px 29px -16px rgba(0,0,0,0.12)`); three white header rows, each
  with a **square 60×60 teal `#75d6d1` icon container** (white 20px glyph) on
  the left, black 18px title, and a chevron on the right (**open = teal UP
  chevron, collapsed = grey DOWN chevron**); the open "Manage" panel's body
  is a solid teal block with white rows ("01 Account", "02 Settings",
  "03 Profile", each with a white right-arrow). No rounded corners anywhere
  on the card — this variant is deliberately squarer than Accordion 04/Stash
  (which used 5px radius + gold).

### Section order (1:1 from live DOM)

1. **Page heading** — `section.ftco-section` (padding 7em 0) → `container` →
   `row` → `col-md-12.text-center` → `h2.heading-section.mb-5.pb-md-4`
   "Accordion #05" (28px, `#000`, centered; `mb-5` = 3rem bottom margin,
   `pb-md-4` extra padding-bottom on md+).
2. **Accordion card** — `row.justify-content-center` → `col-md-7.col-lg-6`
   (centered column: 58.3% width at md, 50% at lg, full width below md) →
   `div#accordion.myaccordion.w-100` (bg `#fff`, `border-radius: 0`,
   `overflow: hidden`, `box-shadow: 0px 10px 29px -16px rgba(0,0,0,0.12)`,
   `margin: 0 auto`). Three `.card` panels stacked (no borders, transparent
   card bg).
3. **Panel 1 — Manage** (OPEN by default) — header button
   (`aria-expanded="true"`, NOT `collapsed`): `div.heading.d-flex.align-items-center`
   → `div.icon` (60×60, `#75d6d1`, white 20px glyph `ion-ios-settings` =
   gear) + `h3.mb-0.ml-3` "Manage" (16px); right `<i class="fa">` chevron.
   Body `div.card-body.p-0` = `<ul>` of 3 `<li>` rows, each
   `a.d-flex.justify-content-between.align-items-center` (padding 15px 30px):
   `<p><span>01</span> Account</p>` + right `i.ion-ios-arrow-forward`.
   Rows: **01 Account / 02 Settings / 03 Profile**.
4. **Panel 2 — Location** (COLLAPSED) — header `aria-expanded="false"` +
   class `collapsed`; icon `ion-ios-pin` (map pin); title "Location". Body
   `div.card-body.p-4` = ONE paragraph: "Far far away, behind the word
   mountains, far from the countries Vokalia and Consonantia, there live the
   blind texts. Separated they live in Bookmarksgrove right at the coast of
   the Semantics, a large language ocean." (NOT a list — `p-4` padding.)
5. **Panel 3 — Hobbies** (COLLAPSED) — icon `ion-ios-basketball`; title
   "Hobbies". Body `div.card-body.p-0` = `<ul>` of 3 rows WITHOUT numbers:
   **Playing Basketball / Playing Baseball / Running** (+ right arrows).
6. **Footer** — NONE in the original. Add the mandatory muted Component Dock
   attribution footer (repo convention):
   `https://www.componentdock.com/`.

- **JS behaviors (original):** Bootstrap collapse with `data-parent="#accordion"`
  → only ONE panel open at a time; `data-toggle="collapse"` toggles
  `aria-expanded` + the `.collapsed` class; chevron glyph swaps via the
  `:before` content rule (`\f3d8` when open vs `\f3d0` when collapsed).
  Recreate with React state (`openIndex`, default `0`), chevron direction
  derived from the open state. No animations beyond a 0.3s transition.

## Design tokens (verified from live stylesheet `css/style.css`)

- **Brand color:** `#75d6d1` (teal/turquoise) — square header icon
  containers, the ENTIRE open panel body background, open chevron
  (`button[aria-expanded="true"] .fa`), and link `a` color. Do NOT use any
  other teal.
- **Page:** `body` `background: #fafafa`, text `color: gray`; font
  **Poppins**, `font-size: 15px`, `line-height: 1.8`, weight normal;
  headings `color: #000` (weight 400, Poppins, line-height 1.5).
- **Card:** `.myaccordion` bg `#fff`, `border-radius: 0` (SQUARE), shadow
  `0px 10px 29px -16px rgba(0,0,0,0.12)`, `overflow: hidden`; card borders
  none; header separators `border-bottom: 1px solid rgba(0,0,0,0.05)`.
- **Headers:** `.btn` full width, `color: #000`, `font-size: 18px`,
  `border-radius: 0`, padding 0 (real padding from the utility classes:
  `py-3`-equivalent via `heading` layout — button is `pr-4` + icon/title
  block; the compact `py-3 px-4` rhythm of the sibling Accordion 04 applies
  visually). `button[aria-expanded="true"]` → `color: #000 !important`
  (black title in BOTH states); `button[aria-expanded="false"]` →
  `background-color: #fff` (all headers white). `.heading` font-weight 300;
  title `h3` 16px, left-aligned, margin-bottom 0, `ml-3` after the icon.
- **Icon container:** `.icon` 60×60, `background: #75d6d1`, **no
  border-radius (square)**, glyph span 20px white.
- **Chevrons:** `.fa` 16px, `color: rgba(0,0,0,0.3)` (closed);
  `[aria-expanded="true"] .fa` → `color: #75d6d1 !important` (open);
  glyphs — open = `\f3d8` = ion-ios-arrow-**up**, collapsed = `\f3d0` =
  ion-ios-arrow-**down** (verified against ionicons 4.5.6 CSS); row arrows =
  `ion-ios-arrow-forward` (right).
- **Open panel body:** `.card-body` bg `#75d6d1`, `margin-bottom: 1px`
  (hairline white gap below the teal block), text `rgba(255,255,255,0.8)`.
  Row `li` `list-style: none`, `border-bottom: 1px solid rgba(255,255,255,0.2555)`;
  row `a` padding 15px 30px; row `p` white `.8` weight 600; row number
  `span` white `.5` weight 300, `margin-right: 10px`; row arrow white `.8`.
  Paragraph body (`p-4` variant) inherits white `.8` text on teal.
- **Spacing:** `ftco-section` 7em vertical padding; heading `mb-5`
  (`pb-md-4`); accordion column `col-md-7 col-lg-6` centered
  (`justify-content-center`); container 1140px.

## Requirements

### Requirement: Centered page heading

The system SHALL render a centered black "Accordion #05" heading at the top
of the page above the accordion card.

#### Scenario: Heading display

- **GIVEN** the Kelp page is rendered
- **WHEN** the page top is displayed
- **THEN** the heading "Accordion #05" SHALL be centered, black, 28px, with
  a 3rem bottom margin (section padding 7em top/bottom on the wrapper)

### Requirement: Single accordion card with three panels

The system SHALL render one white card (square corners, soft shadow,
centered ~50% width on desktop) containing exactly three accordion panels:
Manage (open by default), Location, and Hobbies.

#### Scenario: Card layout

- **GIVEN** the Kelp page is rendered
- **WHEN** the accordion card is displayed
- **THEN** the card SHALL be white with square corners
  (`border-radius: 0`), a shadow `0 10px 29px -16px rgba(0,0,0,0.12)`, and
  centered at ~50% width on desktop (full width below md)
- **AND** it SHALL contain three panels titled "Manage", "Location" and
  "Hobbies", each with a square 60×60 teal `#75d6d1` icon container
  (white 20px glyph) on the left and a chevron on the right

#### Scenario: Manage panel opens by default

- **GIVEN** the Kelp page is rendered
- **WHEN** the page first loads
- **THEN** the "Manage" panel SHALL be expanded (its body visible, teal
  background) and the other two panels SHALL be collapsed
- **AND** the "Manage" header SHALL show an UP chevron while the collapsed
  headers SHALL show DOWN chevrons

### Requirement: Manage panel with numbered rows

The system SHALL render the open "Manage" panel as a teal body with three
numbered rows, each with a right arrow.

#### Scenario: Manage rows

- **GIVEN** the "Manage" panel is expanded
- **WHEN** its body is displayed
- **THEN** the body SHALL have a solid `#75d6d1` background and SHALL list
  "01 Account", "02 Settings", "03 Profile" as rows
- **AND** each row SHALL show a light-weight number (`rgba(255,255,255,0.5)`)
  before a white semi-bold name and a right-pointing arrow on the far right
- **AND** rows SHALL be separated by hairline `rgba(255,255,255,0.2555)`
  borders with 15px 30px padding

### Requirement: Panel toggling with single-open behavior

The system SHALL toggle panels on header click, keeping at most one panel
open at a time, and SHALL expose proper ARIA state.

#### Scenario: Open another panel

- **GIVEN** the "Manage" panel is open
- **WHEN** the "Location" header is clicked
- **THEN** the "Manage" panel SHALL collapse and the "Location" panel SHALL
  expand (its teal body with the paragraph appears)
- **AND** the chevrons SHALL flip accordingly (open = up, collapsed = down)

#### Scenario: Accessibility state

- **GIVEN** the Kelp page is rendered
- **WHEN** the headers are inspected
- **THEN** each header SHALL be a `<button>` with `aria-expanded` and
  `aria-controls`, and each panel body SHALL be a region labelled by its
  header
- **AND** clicking the open panel's header SHALL collapse it (closing all
  panels)

### Requirement: Location panel with paragraph body

The system SHALL render the "Location" panel with a single lorem paragraph
in a padded teal body (no list).

#### Scenario: Location content

- **GIVEN** the "Location" panel is expanded
- **WHEN** its body is displayed
- **THEN** the body SHALL show one paragraph of lorem-style text
  ("Far far away, behind the word mountains...") in white
  `rgba(255,255,255,0.8)` on the teal background with `p-4`-style padding

### Requirement: Hobbies panel with unnumbered rows

The system SHALL render the "Hobbies" panel with three unnumbered activity
rows.

#### Scenario: Hobbies rows

- **GIVEN** the "Hobbies" panel is expanded
- **WHEN** its body is displayed
- **THEN** it SHALL list "Playing Basketball", "Playing Baseball" and
  "Running" as rows with right arrows (no leading numbers), same styling as
  the Manage rows

### Requirement: Component Dock footer

The system SHALL render a footer linking to Component Dock (repo mandate;
the original has no footer).

#### Scenario: Footer attribution

- **GIVEN** the Kelp page is rendered
- **WHEN** the page bottom is displayed
- **THEN** a muted footer SHALL link `https://www.componentdock.com/`
  ("Component Dock" attribution)

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-kelp`
- [ ] `scripts/verify-app.sh kelp` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with reference): centered heading "Accordion
      #05" → single white square-corner card (Manage open / Location
      collapsed / Hobbies collapsed) → Component Dock footer
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#75d6d1` brand
      teal, `#fafafa` page, `#ffffff` card, square corners (radius 0),
      shadow `0 10px 29px -16px rgba(0,0,0,0.12)`, `rgba(0,0,0,0.3)` closed
      chevron, `rgba(0,0,0,0.05)` header separators, white-on-teal row
      palette (`rgba(255,255,255,0.8)` names, `.5` numbers, `.2555`
      separators)
- [ ] Fonts: Poppins via Google Fonts `<link>` in `index.html` (body 15px /
      1.8), title "Kelp — Accordion #05 Reimagined"
- [ ] NO images anywhere (pure component page) — no picsum needed
- [ ] Icons from lucide-react: `Settings` (Manage), `MapPin` (Location),
      `Volleyball` (Hobbies — `Basketball` is UNDEFINED in lucide-react,
      probed 2026-08-14; Volleyball is the round-ball stand-in), `ChevronUp`
      / `ChevronDown` (header state), `ArrowRight` (row arrows) — probe
      every export with `typeof` before use
- [ ] Single-open accordion via `openIndex` state (default 0), chevrons flip
      with state; header buttons have `aria-expanded`/`aria-controls`, panel
      bodies `role="region"` + `aria-labelledby`
- [ ] Forms/interactions: none (all rows are presentational `href="#"`-style
      rows)
- [ ] Mobile nav: none (single page, no navbar)
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark the single "Accordion 05" row, line
      643, Bootstrap Accordions)
- [ ] PR description must list: source template (ColorLib Accordion 05), the
      REAL preview URL (`preview.colorlib.com/theme/bac/accordion-05/` — the
      default URL 404s), design tokens, `Volleyball`-for-basketball icon
      substitution
