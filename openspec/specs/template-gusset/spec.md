# Template: Gusset (Bootstrap Accordion / SaaS FAQ)

## Purpose

Gusset is a single-page accordion FAQ template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Accordion 07"
free template (source: https://colorlib.com/wp/template/accordion-07/), built
under a DIFFERENT name (**Gusset** — a folded insert of material, evoking the
accordion's folding panels; per the monorepo naming mandate — never reuse the
ColorLib source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a clean SaaS-style FAQ accordion: a light-gray (`#fafafa`)
page with a centered "Accordion #07" heading and a single white accordion
card (soft shadow) containing four Q&A panels — **How many events can I
create?** (open by default), **How many collaborators can I invite?**,
**Transparent and simple pricing**, and **Is my data safe?** (all closed).
The only color accent is a purple `#654ede` used for the active panel's left
border and its circular toggle icon (which turns white-glyph-on-purple when
open). Gusset recreates that structure 1:1 with matching layout, tokens,
typography, and content kinds (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Accordion 07" is FORBIDDEN as the
> app name. **Gusset** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Accordion 07". Listed in TEMPLATES.md under
  **Bootstrap Accordions (20)** (line 645). Free accordion/FAQ component
  template.
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default preview
  URL `https://preview.colorlib.com/theme/accordion-07/` returns 404; the
  REAL preview URL is `https://preview.colorlib.com/theme/bac/accordion-07/`
  (HTTP 200, 11,969 bytes HTML — same `/bac/` subpath pattern as Accordion
  01–06). Stylesheets: `css/style.css` (221.6KB — bootstrap + custom; token
  source), `https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.5.6/css/ionicons.min.css`
  (toggle glyphs via the Ionicons font-family trick). Structure, copy, and
  tokens below are from the live DOM + `style.css`. Screenshot
  (`accordion-07.jpg`, 1200×972, browser-verified 2026-08-14) confirms the
  aesthetic: light-gray page, centered white card with rounded corners and a
  subtle drop shadow, "Accordion #07" dark heading, four SaaS-Q&A panels,
  active panel with a thin purple left border and a solid purple circular
  icon (white glyph), closed panels with light-gray circles and dark-gray
  down chevrons.
- **Visual design (screenshot + live DOM):** modern, clean, professional —
  a typical SaaS FAQ section. Near-white gray page (`#fafafa`), dark
  charcoal/`#000` headers, medium gray body copy, monochrome palette with a
  SINGLE purple accent `#654ede` reserved for the active state (left border +
  icon circle). Flat design with one subtle shadow on the card. No images
  anywhere — pure typography + one accordion card. Sans-serif (Poppins)
  throughout.
- **Section order (1:1 from live DOM):**
  1. **Page heading** — `section.ftco-section` (padding 7em 0, page bg
     `#fafafa`) → `div.container` → `div.row` → `div.col-md-12.text-center`
     → centered `h2.heading-section.mb-5.pb-md-4` "Accordion #07" (28px,
     `#000`, text-center).
  2. **Accordion card** — `div.row.justify-content-center` →
     `div.col-md-6` (centered, ~50% width desktop — NARROWER than Accordion
     01's `col-md-8 col-lg-6`) → `div#accordion.myaccordion.w-100`:
     margin auto, `box-shadow: 0px 10px 24px -11px rgba(0,0,0,0.27)`,
     `border-radius: 0`, `overflow: hidden`.
  3. **Panel 1 — "How many events can I create?"** — `div.card` (border
     none, transparent bg) → `div.card-header.p-0` → full-width toggle
     button `d-flex px-4 py-3 align-items-center justify-content-between
btn btn-link` (`data-toggle="collapse"`, `aria-expanded="true"`,
     `aria-controls="collapseOne"`; NOT `.collapsed`) → left `div.heading
d-flex align-items-center` with `h3.mb-0` (16px, weight 300, text-left)
     - right `div.icon d-flex align-items-center justify-content-center`
       with `<i class="fa">` (30px circle). Body `div.collapse.show` →
       `div.card-body.p-4.pt-md-3` (bg `rgba(0,0,0,0.02)`,
       `border-left: 2px solid #654ede`, margin-bottom 1px) → `<p>` lorem
       paragraph. **OPEN by default.**
  4. **Panel 2 — "How many collaborators can I invite?"** — same card
     structure, `.collapsed` (closed), body `div.collapse` without `.show`.
  5. **Panel 3 — "Transparent and simple pricing"** — same structure,
     closed.
  6. **Panel 4 — "Is my data safe?"** — same structure, closed.
  7. **Footer** — the original has NO footer; per monorepo convention add a
     minimal attribution footer linking `https://www.componentdock.com/`
     ("Component Dock") so every shipped template carries the required link.
- **JS behaviors (original):** Bootstrap collapse with `data-parent` (only
  ONE panel open at a time; default = first panel), `aria-expanded` on the
  toggle, `.collapsed` class swaps the glyph: open = Ionicons `\f3d8`
  (arrow-up, `ion-ios-arrow-up`), closed = `\f3d0` (arrow-down,
  `ion-ios-arrow-down`). Expanded button also gets `background:
rgba(0,0,0,0.02)`, `border-left: 2px solid #654ede`; its `.icon` circle
  turns `#654ede` and the glyph turns `#fff`. Recreate with React state: one
  `openIndex` (default 0), buttons toggle, icon swaps between
  `ChevronUp`/`ChevronDown` (lucide-react), `aria-expanded` +
  `aria-controls`, panels are `role="region"` / labelled by their header
  button. FAQ copy is static presentational content (no backend).

## Design tokens (verified from live stylesheet `css/style.css`)

- **Brand colors:**
  - `#fafafa` — page background (`body { background: #fafafa }`).
  - `#654ede` — THE brand accent (purple): `a` link color; expanded
    button's `border-left: 2px solid #654ede`; expanded icon circle
    background; `.card-body` `border-left: 2px solid #654ede`.
  - `#000000` — page heading (`.heading-section`, 28px) and accordion toggle
    button text (`.myaccordion .btn`).
  - `#ffffff` — icon circle background (closed state) and collapsed button
    background (`.myaccordion .btn .icon { background: #fff }`,
    `button[aria-expanded="false"] { background-color: #fff }`).
  - `rgba(0,0,0,0.02)` — expanded button background and card-body
    background (subtle tinted panels).
  - `rgba(0,0,0,0.05)` — panel separator (`border-bottom: 1px solid
rgba(0,0,0,0.05)` on the toggle button) and icon circle border
    (`border: 1px solid rgba(0,0,0,0.05)`).
  - `rgba(0,0,0,0.3)` / `rgba(0,0,0,0.4)` — closed icon glyph color
    (`.myaccordion .fa { color: rgba(0,0,0,0.3) }`, `.btn .icon i { color:
rgba(0,0,0,0.4) }`).
  - `gray` — default body copy color (Poppins 15px / 1.8); FAQ answer
    paragraphs render in this default gray.
  - `#fff` — open-state glyph color (`button[aria-expanded="true"] .fa {
color: #fff !important }`).
  - Shadow tint `rgba(0,0,0,0.27)` — card shadow (`0px 10px 24px -11px`).
- **Fonts:** **Poppins** (body + headings; `body { font-family: "Poppins",
Arial, sans-serif; font-size: 15px; line-height: 1.8; font-weight:
normal }`) — loaded via Google Fonts `<link>` in `index.html`. Heading
  "Accordion #07" 28px; toggle button 18px; panel title `h3` 16px weight
  300; FAQ body copy 15px/1.8. (No font `<link>` in the original HTML head —
  it relies on an inherited Poppins; the recreation loads Poppins from Google
  Fonts per repo convention.)
- **Buttons:** the accordion header IS the button — full width, `#000` text,
  18px, padding `px-4 py-3` (1.5rem / 0.75rem), letter-spacing 0,
  `border-radius: 0`, no border except `border-bottom: 1px solid
rgba(0,0,0,0.05)`; hover/focus remove underline. Expanded state: bg
  `rgba(0,0,0,0.02)` + `border-left: 2px solid #654ede`. No pill buttons.
- **Radii:** card `border-radius: 0` (square); ONLY the icon circle is round
  (`border-radius: 50%`).
- **Shadows:** card `0px 10px 24px -11px rgba(0,0,0,0.27)` (soft floating
  shadow).
- **Spacing rhythm:** section padding `7em 0`; heading `mb-5 pb-md-4`;
  toggle padding `px-4 py-3`; card body `p-4 pt-md-3` (1.5rem all around,
  1rem top); card-body `margin-bottom: 1px`; centered column `col-md-6`
  (~50% of container, centered); icon circle 30×30px.
- **Icons:** lucide-react `ChevronUp` (open panel) / `ChevronDown` (closed
  panel) inside a 30px circular badge — the original's Ionicons glyph font
  (`\f3d8` / `\f3d0`) is NOT copied.
- **No images** in this template — pure typography/cards, so no picsum seeds
  are needed (the card needs no imagery to be faithful).

## Requirements

### Requirement: Page heading

The system SHALL render a centered page heading "Accordion #07" at the top of
the page, styled 28px `#000` Poppins with generous bottom spacing, on the
`#fafafa` page background.

#### Scenario: Heading layout

- **GIVEN** the Gusset page is rendered
- **WHEN** the page loads
- **THEN** an `h2` SHALL show the text "Accordion #07" centered at the top of
  the `#fafafa` page
- **AND** the heading SHALL be 28px, `#000`, with a large bottom margin
  (mb-5 + pb-md-4 equivalent), matching the reference

### Requirement: Accordion card container

The system SHALL render a single white accordion card, centered at ~50%
container width on desktop, with the reference square corners and soft
floating shadow.

#### Scenario: Card layout

- **GIVEN** the Gusset page is rendered
- **WHEN** the user views below the heading
- **THEN** a single card SHALL be centered in a `col-md-6`-equivalent column
  with `border-radius: 0` (square corners) and
  `box-shadow: 0px 10px 24px -11px rgba(0,0,0,0.27)`
- **AND** the card SHALL contain four stacked panels with no outer borders
  (transparent card backgrounds, separators only between headers)

### Requirement: Accordion structure and default state

The system SHALL render an accordion with four FAQ panels — "How many events
can I create?" (open by default), "How many collaborators can I invite?",
"Transparent and simple pricing", and "Is my data safe?" (all closed) — with
only one panel open at a time.

#### Scenario: Four panels with default states

- **GIVEN** the accordion card is rendered
- **WHEN** the page loads
- **THEN** panel 1 SHALL be titled "How many events can I create?" and be
  OPEN
- **AND** panels 2–4 SHALL be titled "How many collaborators can I invite?",
  "Transparent and simple pricing", and "Is my data safe?" and be CLOSED
- **AND** the open panel SHALL show a `ChevronUp` icon and the closed panels
  a `ChevronDown` icon on the right of their headers

#### Scenario: Single-open behavior

- **GIVEN** panel 1 is open and panels 2–4 are closed
- **WHEN** the user activates the "Transparent and simple pricing" toggle
- **THEN** that panel SHALL open and panel 1 SHALL close (only one panel
  open at a time, per the reference's `data-parent` behavior)

### Requirement: Toggle interaction

Each panel header SHALL be a full-width button that toggles its panel, with
correct `aria-expanded` / `aria-controls` and a swapping icon + active-state
styling.

#### Scenario: Toggling a panel

- **GIVEN** the accordion card is displayed
- **WHEN** the user clicks a panel header button
- **THEN** the panel SHALL toggle open/closed and the button's `aria-expanded`
  SHALL flip accordingly
- **AND** the icon SHALL swap between `ChevronUp` (open) and `ChevronDown`
  (closed)
- **AND** the button SHALL be full width, `#000` text, 18px, with no
  underline on hover/focus

#### Scenario: Active-state styling

- **GIVEN** a panel is open
- **WHEN** the user views its header button
- **THEN** the button SHALL show a 2px `#654ede` left border and a
  `rgba(0,0,0,0.02)` background
- **AND** the 30px circular icon badge SHALL be `#654ede` with a white glyph
- **AND** closed panels SHALL keep a white circle with a light-gray border
  and a dark-gray glyph

#### Scenario: Keyboard accessibility

- **GIVEN** the accordion card is displayed
- **WHEN** the user tabs to a panel header button and presses Enter/Space
- **THEN** the panel SHALL toggle the same way as a click
- **AND** the open panel body SHALL be exposed to assistive tech
  (`role="region"` with `aria-labelledby` pointing at its header button)

### Requirement: FAQ panel body

Each open panel SHALL render a paragraph of muted placeholder copy (same
content kind as the original's "Far far away, behind the word mountains…"
blurb), on the reference tinted body background with the purple left border.

#### Scenario: Body content and styling

- **GIVEN** a panel is open
- **WHEN** the user views its body
- **THEN** the body SHALL show a paragraph of paraphrased placeholder copy
- **AND** the body SHALL have background `rgba(0,0,0,0.02)`, a 2px `#654ede`
  left border, and `p-4 pt-md-3`-equivalent padding

### Requirement: Responsive behavior

The system SHALL adapt the card column for mobile viewports.

#### Scenario: Mobile layout (≤768px)

- **GIVEN** the Gusset page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the accordion card SHALL fill the viewport width (the
  `col-md-6` centering collapses to a single column)
- **AND** section padding SHALL reduce (the reference's `7em` is large;
  scale down for mobile per repo conventions)

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Gusset page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded as
  "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so it
  does not disturb the minimal reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-gusset`
- [ ] `scripts/verify-app.sh gusset` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with reference): centered heading "Accordion #07"
      → white accordion card (square corners, soft shadow) → panel 1 "How
      many events can I create?" (open, purple accent) → panels 2–4 (closed,
      gray chevrons) → minimal Component Dock footer
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#fafafa` page,
      `#654ede` accent, `#000` heading/toggle text, `#fff` circle,
      `rgba(0,0,0,0.02)` tints, `rgba(0,0,0,0.05)` separators; card shadow
      `0 10px 24px -11px rgba(0,0,0,.27)`
- [ ] Font: Poppins via Google Fonts `<link>` in `index.html`; title
      "Gusset — SaaS FAQ Accordion"
- [ ] No images needed (pure typography template — faithful); icons from
      lucide-react (`ChevronUp`/`ChevronDown`) — no copied assets
- [ ] Only one panel open at a time; `aria-expanded`/`aria-controls` +
      `role="region"`; keyboard operable
- [ ] Active panel: 2px `#654ede` left border on button AND body; icon circle
      turns `#654ede` with white glyph when open
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark the "Accordion 07" row, line 645 —
      Bootstrap Accordions category)
