# Template: Pleat (Bootstrap Accordion / Spa Pricing List)

## Purpose

Pleat is a single-page accordion price-list template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Accordion 01" free template (source:
https://colorlib.com/wp/template/accordion-01/), built under a DIFFERENT name
(**Pleat** — a fold, evoking the accordion's pleated panels; per the monorepo
naming mandate — never reuse the ColorLib source name), with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a minimal, clean spa/wellness price menu: a light-gray
(`#fafafa`) page with a single centered white card (soft shadow, 5px radius)
containing a "Prices" intro block and a two-panel accordion — **Spa
Therapies** (open by default) and **Massage Therapies** (closed). Each panel
holds a 4-row price list (service name · duration · price) where prices are
the only color accent (green `#28a745`). Pleat recreates that structure 1:1
with matching layout, tokens, typography, and content kinds (no ColorLib
assets copied).

> NAMING NOTE: the ColorLib source name "Accordion 01" is FORBIDDEN as the
> app name. **Pleat** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Accordion 01". Listed in TEMPLATES.md under
  **Bootstrap Accordions (20)** (line 639). Free accordion/price-list
  component template.
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default preview
  URL `https://preview.colorlib.com/theme/accordion-01/` returns 404; the
  ColorLib template page reveals the REAL preview URL:
  `https://preview.colorlib.com/theme/bac/accordion-01/` (HTTP 200, 10.6KB
  HTML). Stylesheets: `css/style.css` (220.8KB — bootstrap + custom; token
  source), `https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.5.6/css/ionicons.min.css`
  (toggle icons). Structure, copy, and tokens below are from the live DOM +
  `style.css`. Screenshot (`accordion-01.jpg`, 1200×972, browser-verified
  2026-08-14) confirms the aesthetic: light-gray page, centered white card
  with drop shadow, "Accordion #01" title, "Prices" intro, Spa Therapies open
  with a minus (−) icon and Massage Therapies closed with a plus (+) icon,
  green price values.
- **Visual design (screenshot + live DOM):** extremely clean, modern,
  spacious. Near-white gray page (`#fafafa`), dark charcoal primary text,
  medium-gray secondary text (durations), bright green prices (`#28a745`),
  white floating card with a subtle `0 10px 29px -16px rgba(0,0,0,.12)`
  shadow. No images anywhere — the template is typography + a single
  accordion card. Sans-serif (Poppins) throughout.
- **Section order (1:1 from live DOM):**
  1. **Page heading** — `section.ftco-section` (padding 7em 0, page bg
     `#fafafa`) → `div.container` → centered `h2.heading-section.mb-5.pb-md-4`
     "Accordion #01" (28px, `#000`, text-center).
  2. **Accordion card** — `div.row.justify-content-center` →
     `div.col-md-8.col-lg-6` (centered, ~2/3 width desktop) →
     `div#accordion.myaccordion.w-100`: white `#fff` bg, `border-radius: 5px`,
     `box-shadow: 0px 10px 29px -16px rgba(0,0,0,0.12)`, margin auto.
  3. **Intro block** — `div.p-4.text-center`: `h3` "Prices" + `p` "Far far
     away, behind the word mountains, far from the countries Vokalia…"
     (paraphrase OK — same kind of content: heading + muted blurb).
  4. **Accordion panel — Spa Therapies** — `div.card` → `div.card-header.py-3.px-4`
     (transparent bg, `border-bottom-color: #e6e6e6`, text-left) → full-width
     toggle button (`.btn.btn-link`, color `#000`, font-size 20px, text-transform
     capitalize, letter-spacing 0, padding 0) "Spa Therapies" + toggle icon
     (24px; open = minus −, closed = plus +). Body `div.card-body.py-md-5.px-4`
     (bg `rgba(0,0,0,0.02)`): `ul` of 4 rows — Face Treatments 40 min. $10,
     Nail Treatments 30 min. $20, Medical Treatments 60 min. $10, Hair
     Treatments 30 min. $30.
  5. **Accordion panel — Massage Therapies** — same card structure, closed by
     default; identical 4-row list (Face 40 min. $10, Nail 30 min. $20,
     Medical 60 min. $10, Hair 30 min. $30).
  6. **Footer** — the original has NO footer; per monorepo convention add a
     minimal attribution footer linking `https://www.componentdock.com/`
     ("Component Dock") so every shipped template carries the required link.
- **JS behaviors (original):** Bootstrap collapse with `data-parent="#accordion"`
  (only ONE panel open at a time), `aria-expanded` on the toggle, `.collapsed`
  class flips the icon (Ionicons `\f1fc` minus → open, `\f102` plus → closed;
  screenshot shows − / + glyphs). Recreate with React state: one
  `openIndex` (default 0), buttons toggle, icon swaps between `Minus`/`Plus`
  (lucide-react), `aria-expanded` + `aria-controls`, panels are
  `role="region"` / labelled by their header button. Price lists are static
  presentational rows (no backend).

## Design tokens (verified from live stylesheet `css/style.css`)

- **Brand colors:**
  - `#fafafa` — page background (`body { background: #fafafa }`).
  - `#ffffff` — accordion card background (`.myaccordion { background: #fff }`).
  - `#000000` — page heading (`.heading-section`, 28px) and accordion toggle
    button text (`.myaccordion .btn`).
  - `#28a745` — the ONLY accent: price values (`.card-body ul li span:last-child`,
    green, Bootstrap success).
  - `#e6e6e6` — card-header bottom border (separator between panels).
  - `rgba(0,0,0,0.02)` — card-body background (subtle tinted panel).
  - `rgba(0,0,0,0.12)` — card shadow tint (`0px 10px 29px -16px`).
  - `gray` — default body copy color (Poppins 14px / 1.8); durations render in
    the default gray, intro paragraph muted.
- **Fonts:** **Poppins** (body + headings; `font-family: "Poppins", Arial,
sans-serif`, body 14px, line-height 1.8, weight normal) — loaded via Google
  Fonts `<link>` in `index.html`. Heading "Accordion #01" 28px; accordion
  toggle 20px; price rows 16px weight 400.
- **Buttons:** the accordion header IS the button — full width, transparent
  bg, `#000` text, 20px, text-transform capitalize, letter-spacing 0, padding
  0; hover/focus remove underline; toggle icon 24px at the far right
  (justify-content-between).
- **Radii:** card `border-radius: 5px`; panels square (0); no pill buttons.
- **Shadows:** card `0px 10px 29px -16px rgba(0,0,0,0.12)` (soft floating
  shadow).
- **Spacing rhythm:** section padding `7em 0`; heading `mb-5 pb-md-4`;
  intro block `p-4`; card header `py-3 px-4` (1rem / 1.5rem); card body
  `py-md-5 px-4` (3rem / 1.5rem desktop); price rows `margin-bottom: 15px`;
  centered column `col-md-8 col-lg-6` (~66%/50% of container, centered).
- **Price row layout:** flex row — name `width: 60%` `#000` · duration
  `width: 30%` · price `width: 10%` `#28a745`. On viewports <768px the
  original's `d-sm-flex` drops the row (spans get `margin-right: 15px` and
  wrap) — recreate with a flex-col or flex-wrap row + the same 15px gutter.
- **Icons:** lucide-react `Minus` (open panel) / `Plus` (closed panel), 24px —
  the original's Ionicons icon font is NOT copied.
- **No images** in this template — pure typography/cards, so no picsum seeds
  are needed (the card needs no imagery to be faithful).

## Requirements

### Requirement: Page heading

The system SHALL render a centered page heading "Accordion #01" at the top of
the page, styled 28px `#000` Poppins with generous bottom spacing, on the
`#fafafa` page background.

#### Scenario: Heading layout

- **GIVEN** the Pleat page is rendered
- **WHEN** the page loads
- **THEN** an `h2` SHALL show the text "Accordion #01" centered at the top of
  the `#fafafa` page
- **AND** the heading SHALL be 28px, `#000`, with a large bottom margin
  (mb-5 + pb-md-4 equivalent), matching the reference

### Requirement: Intro block

The system SHALL render a centered intro block inside the accordion card:
an `h3` "Prices" and a short muted paragraph (paraphrased placeholder copy).

#### Scenario: Intro content

- **GIVEN** the accordion card is displayed
- **WHEN** the user views the top of the card
- **THEN** an `h3` "Prices" SHALL be centered with a paragraph of muted
  placeholder copy below it (same content kind as the original: "Far far
  away, behind the word mountains…" style)
- **AND** the block SHALL be padded (`p-4` equivalent) and centered

### Requirement: Accordion structure and default state

The system SHALL render an accordion card with two panels — "Spa Therapies"
(open by default) and "Massage Therapies" (closed) — with only one panel open
at a time.

#### Scenario: Two panels with default states

- **GIVEN** the accordion card is rendered
- **WHEN** the page loads
- **THEN** panel 1 SHALL be titled "Spa Therapies" and be OPEN
- **AND** panel 2 SHALL be titled "Massage Therapies" and be CLOSED
- **AND** the open panel SHALL show a `Minus` icon and the closed panel a
  `Plus` icon on the right of its header

#### Scenario: Single-open behavior

- **GIVEN** panel 1 is open and panel 2 is closed
- **WHEN** the user activates the "Massage Therapies" toggle
- **THEN** panel 2 SHALL open and panel 1 SHALL close (only one panel open at
  a time, per the reference's `data-parent` behavior)

### Requirement: Toggle interaction

Each panel header SHALL be a full-width button that toggles its panel, with
correct `aria-expanded` / `aria-controls` and a swapping icon.

#### Scenario: Toggling a panel

- **GIVEN** the accordion card is displayed
- **WHEN** the user clicks a panel header button
- **THEN** the panel SHALL toggle open/closed and the button's `aria-expanded`
  SHALL flip accordingly
- **AND** the icon SHALL swap between `Minus` (open) and `Plus` (closed)
- **AND** the button SHALL be full width, `#000` text, 20px, capitalize, with
  no underline on hover/focus

#### Scenario: Keyboard accessibility

- **GIVEN** the accordion card is displayed
- **WHEN** the user tabs to a panel header button and presses Enter/Space
- **THEN** the panel SHALL toggle the same way as a click
- **AND** the open panel body SHALL be exposed to assistive tech
  (`role="region"` with `aria-labelledby` pointing at its header button)

### Requirement: Price list rows

Each open panel SHALL render a 4-row price list; each row SHALL show the
service name (left, `#000`, 60%), duration (middle, gray, 30%), and price
(right, `#28a745`, 10%).

#### Scenario: Price rows in Spa Therapies

- **GIVEN** the "Spa Therapies" panel is open
- **WHEN** the user views its body
- **THEN** the panel SHALL list: Face Treatments 40 min. $10, Nail Treatments
  30 min. $20, Medical Treatments 60 min. $10, Hair Treatments 30 min. $30
- **AND** each row SHALL be a flex row with the name at 60% width (`#000`),
  the duration at 30% (gray), and the price at 10% width in green `#28a745`

#### Scenario: Price rows in Massage Therapies

- **GIVEN** the "Massage Therapies" panel is open
- **WHEN** the user views its body
- **THEN** the panel SHALL list the same 4 rows (Face Treatments 40 min. $10,
  Nail Treatments 30 min. $20, Medical Treatments 60 min. $10, Hair
  Treatments 30 min. $30) with the same row layout

### Requirement: Responsive behavior

The system SHALL adapt the card column and price rows for mobile viewports.

#### Scenario: Mobile layout (≤768px)

- **GIVEN** the Pleat page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the accordion card SHALL fill the viewport width (single column;
  the `col-md-8 col-lg-6` centering collapses)
- **AND** price rows SHALL drop the fixed 60/30/10% flex widths and wrap with
  a 15px gutter between spans (matching the reference's <768px rule)
- **AND** section padding SHALL reduce (the reference's `7em` is large;
  scale down for mobile per repo conventions)

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Pleat page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded as
  "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so it
  does not disturb the minimal reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-pleat`
- [ ] `scripts/verify-app.sh pleat` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with reference): centered heading "Accordion #01"
      → white accordion card (5px radius, soft shadow) → "Prices" intro block
      → Spa Therapies panel (open, minus icon) → Massage Therapies panel
      (closed, plus icon) → minimal Component Dock footer
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#fafafa` page,
      `#fff` card, `#000` heading/toggle text, `#28a745` prices, `#e6e6e6`
      panel separators; card radius 5px; shadow `0 10px 29px -16px
    rgba(0,0,0,.12)`
- [ ] Font: Poppins via Google Fonts `<link>` in `index.html`; title
      "Pleat — Accordion Price List"
- [ ] No images needed (pure typography template — faithful); icons from
      lucide-react (`Minus`/`Plus`) — no copied assets
- [ ] Only one panel open at a time; `aria-expanded`/`aria-controls` +
      `role="region"`; keyboard operable
- [ ] Price rows 60/30/10% flex layout desktop, wrapped with 15px gutter
      ≤768px
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark the "Accordion 01" row, line 639 —
      Bootstrap Accordions category)
