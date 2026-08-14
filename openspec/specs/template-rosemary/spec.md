# Template: Rosemary (Bootstrap Accordion / FAQ)

## Purpose

Rosemary is a single-page accordion FAQ template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Accordion 14" free template (source:
https://colorlib.com/wp/template/accordion-14/), built under a DIFFERENT name
(**Rosemary** — an aromatic herb, continuing the herb/spice naming run of the
accordion series: pleat, forkful, mentha, stash, kelp, clover, gusset, crimp,
sprig, thyme, basil, oregano, anise…; per the monorepo naming mandate — never
reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a minimal, clean FAQ accordion: a light-gray page with a
centered "Bootstrap Accordion #4" heading and a three-panel accordion —
**How to download and register?** (open by default), **How to create your
paypal account?** (closed), and **How to link your paypal and bank account?**
(closed). Each panel holds a block of muted placeholder copy. The only color
accent on the page is the purple `#743beb` used for the active panel's left
edge bar (2px), its label text, and its up-chevron icon. Rosemary recreates
that structure 1:1 with matching layout, tokens, typography, and content kinds
(no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Accordion 14" is FORBIDDEN as the
> app name. **Rosemary** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Accordion 14". Listed in TEMPLATES.md under
  **Bootstrap Accordions (20)** (line 652). Free accordion/FAQ component
  template. The slug appears exactly once (no dup rows).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default preview
  URL `https://preview.colorlib.com/theme/accordion-14/` returns 404 ("Not
  Found"); the REAL preview URL (same pattern as the rest of the bootstrap
  accordion series) is `https://preview.colorlib.com/theme/bac/accordion-14/`
  (HTTP 200, 19.4KB HTML; the `/bac/` subpath = the "bootstrap accordions"
  demo index). Stylesheets: `css/style.css` (2.7KB — bootstrap + custom; token
  source), `css/bootstrap.min.css`, `css/owl.carousel.min.css` (unused on
  this page), `fonts/icomoon/style.css` (toggle chevron glyphs). Structure,
  copy, and tokens below are from the live DOM + `style.css`. Screenshot
  (`accordion-14.jpg`, 1200×972, browser-verified 2026-08-14) confirms the
  aesthetic: very light gray page, centered "Bootstrap Accordion #4" heading,
  three accordion rows — first expanded with a **purple** left edge bar + up
  chevron, the other two collapsed with gray down chevrons; no navbar, no
  footer, no imagery.
- **Visual design (screenshot + live DOM):** extremely clean, minimal,
  typography-driven. Light-gray `#efefef` page, dark-gray heading, accordion
  items on pale lavender `#f8f8fa` with white toggle buttons; active row
  picked out in purple `#743beb` (2px left bar + label + up-chevron), body
  copy muted gray. No images anywhere — pure text + one accordion.
  Sans-serif (Roboto) throughout, light weights (300).
- **Section order (1:1 from live DOM):**
  1. **Page heading** — `div.content` (padding `7rem 0`) → `div.container` →
     centered `h2.my-5.text-center` "Bootstrap Accordion #4" (20px Roboto,
     dark gray/black, generous top+bottom margin).
  2. **Accordion** — `div.container` → `div.custom-accordion#accordion_1`:
     three `div.accordion-item` blocks stacked (pale lavender `#f8f8fa` bg;
     NO card wrapper, NO intro block — the items sit directly on the page).
  3. **Panel 1 — "How to download and register?"** — header
     `h2.mb-0` → full-width `button.btn.btn-link` (padding 15px, padding-left
     40px, text-left, color `#999`, bg `#fff`, `border-radius: 0`) with
     chevron icon at left 15px; OPEN by default (`div#collapseOne.collapse.show`,
     `aria-expanded="true"`); body `div.accordion-body` (padding 20px, color
     `#888`) with placeholder copy ("Anim pariatur cliche reprehenderit…").
  4. **Panel 2 — "How to create your paypal account?"** — same structure,
     CLOSED by default (`aria-expanded="false"`, `.collapsed`), same body
     copy.
  5. **Panel 3 — "How to link your paypal and bank account?"** — same
     structure, CLOSED by default, same body copy.
  6. **Footer** — the original has NO footer; per monorepo convention add a
     minimal attribution footer linking `https://www.componentdock.com/`
     ("Component Dock") so every shipped template carries the required link.
- **JS behaviors (original):** Bootstrap collapse with `data-parent="#accordion_1"`
  (only ONE panel open at a time), `aria-expanded` on the toggle, `.collapsed`
  class flips the chevron (icomoon `\e313` keyboard_arrow_down → collapsed,
  `\e316` keyboard_arrow_up → expanded with `color: #743beb`; the active
  item's `.btn-link` also gets `color: #743beb` + `background: #f8f8fa` and a
  2px `#743beb` bar on its left edge via `.accordion-item.active:before`).
  Recreate with React state: one `openIndex` (default 0), buttons toggle,
  icon swaps between `ChevronDown`/`ChevronUp` (lucide-react), the open item's
  chevron + label + left bar turn purple `#743beb`, `aria-expanded` +
  `aria-controls`, panels are `role="region"` / labelled by their header
  button. FAQ copy is static presentational text (no backend).

## Design tokens (verified from live stylesheet `css/style.css`)

- **Brand colors:**
  - `#743beb` — the ONLY accent (a vivid violet/purple): active panel left
    edge bar (`.accordion-item.active:before`, width 2px, height 100%, left 0),
    active panel label text (`.accordion-item.active .btn-link { color:
#743beb }`), and expanded chevron
    (`.btn-link[aria-expanded="true"]:before { color: #743beb }`).
  - `#efefef` — page background (`body { background-color: #efefef }`).
  - `#f8f8fa` — accordion item background (`.accordion-item { background:
#f8f8fa }`) AND active toggle background
    (`.accordion-item.active .btn-link { background: #f8f8fa }`). A very pale
    lavender-gray.
  - `#ffffff` — collapsed toggle button background (`.btn-link { background:
#fff }`).
  - `#999` — collapsed toggle label text (`.btn-link { color: #999 }`).
  - `#888` — accordion body text (`.accordion-body { color: #888 }`).
  - `#b3b3b3` — generic paragraph color (`p { color: #b3b3b3 }`, weight 300).
  - dark gray/black — page heading "Bootstrap Accordion #4" (default heading
    color, 20px).
- **Fonts:** **Roboto** (body + all headings; `font-family: "Roboto",
-apple-system, BlinkMacSystemFont, "Segoe UI", …`) — loaded via Google Fonts
  `<link>` in `index.html`. Body/paragraph weight 300; page heading `h2` 20px;
  accordion toggle inherits Roboto (Bootstrap `.btn-link` base).
- **Buttons:** the accordion header IS the button — `display: block`, `width:
100%`, `border-radius: 0`, `padding: 15px` (with `padding-left: 40px` for the
  icon gutter), `text-align: left`, color `#999`, background `#fff`, no
  underline, `.3s all ease` transition. Active state: text + icon `#743beb`,
  background `#f8f8fa`, plus the 2px `#743beb` left bar on the item. NO border
  on the toggle (unlike the accordion-13/Anise variant which used a
  `1px solid #efefef` border) and NO radius (flat corners).
- **Radii:** none (0 everywhere — flat, sharp corners).
- **Shadows:** none (flat design — no card shadow, no drop shadows).
- **Spacing rhythm:** section padding `7rem 0` (`.content`); heading
  `my-5 text-center` (3rem top/bottom); items stacked directly (no explicit
  gap in the custom CSS; the screenshot shows tight stacking — use a small
  gap (≤ 10px) so rows stay separated); toggle padding 15px (left 40px for
  icon); body padding 20px all around; chevron icon absolutely positioned at
  `left: 15px`, vertically centered (`top: 50%; translateY(-50%)`).
- **Icons:** lucide-react `ChevronDown` (collapsed, default color) /
  `ChevronUp` (expanded, `#743beb`), ~24px, at the LEFT of the toggle label
  (the original's icomoon icon font is NOT copied).
- **No images** in this template — pure typography/accordion, so no picsum
  seeds are needed (the page needs no imagery to be faithful).

## Requirements

### Requirement: Page heading

The system SHALL render a centered page heading "Bootstrap Accordion #4" at
the top of the page, styled 20px Roboto in dark gray/black with generous
vertical margins (`my-5` equivalent), on the `#efefef` page background.

#### Scenario: Heading layout

- **GIVEN** the Rosemary page is rendered
- **WHEN** the page loads
- **THEN** an `h2` SHALL show the text "Bootstrap Accordion #4" centered at
  the top of the `#efefef` page
- **AND** the heading SHALL be 20px with large top and bottom margins
  (3rem, `my-5` equivalent), matching the reference
- **AND** the heading SHALL use the Roboto font stack

### Requirement: Accordion structure and default state

The system SHALL render an accordion with three panels — "How to download and
register?" (open by default), "How to create your paypal account?" (closed),
and "How to link your paypal and bank account?" (closed) — with only one
panel open at a time.

#### Scenario: Three panels with default states

- **GIVEN** the Rosemary page is rendered
- **WHEN** the page loads
- **THEN** panel 1 SHALL be titled "How to download and register?" and be
  OPEN
- **AND** panel 2 SHALL be titled "How to create your paypal account?" and be
  CLOSED
- **AND** panel 3 SHALL be titled "How to link your paypal and bank account?"
  and be CLOSED
- **AND** the open panel SHALL show a `ChevronUp` icon in purple `#743beb`
  with its label in `#743beb`, a `#f8f8fa` toggle background, and a 2px
  `#743beb` bar along the left edge of its item
- **AND** each closed panel SHALL show a `ChevronDown` icon with a `#999`
  label on a white `#fff` toggle background

#### Scenario: Single-open behavior

- **GIVEN** panel 1 is open and panels 2 and 3 are closed
- **WHEN** the user activates the "How to create your paypal account?" toggle
- **THEN** panel 2 SHALL open and panel 1 SHALL close (only one panel open at
  a time, per the reference's `data-parent` behavior)
- **AND** the purple active styling (left bar + label + chevron) SHALL move
  to panel 2's item

### Requirement: Toggle interaction

Each panel header SHALL be a full-width button that toggles its panel, with
correct `aria-expanded` / `aria-controls` and a swapping chevron icon on the
left.

#### Scenario: Toggling a panel

- **GIVEN** the accordion is displayed
- **WHEN** the user clicks a panel header button
- **THEN** the panel SHALL toggle open/closed and the button's
  `aria-expanded` SHALL flip accordingly
- **AND** the icon SHALL swap between `ChevronDown` (closed, default color)
  and `ChevronUp` (open, `#743beb`)
- **AND** the button SHALL be full width, left-aligned, `#999` text (or
  `#743beb` when active), flat corners, with no underline on hover/focus

#### Scenario: Keyboard accessibility

- **GIVEN** the accordion is displayed
- **WHEN** the user tabs to a panel header button and presses Enter/Space
- **THEN** the panel SHALL toggle the same way as a click
- **AND** the open panel body SHALL be exposed to assistive tech
  (`role="region"` with `aria-labelledby` pointing at its header button)

### Requirement: Panel content

Each panel SHALL show a body block of muted placeholder copy (the reference
uses the classic "Anim pariatur cliche reprehenderit…" lorem passage;
paraphrasing is allowed but the content kind — a short FAQ answer paragraph —
must match).

#### Scenario: Open panel body copy

- **GIVEN** a panel is open
- **WHEN** the user views its body
- **THEN** the body SHALL contain a paragraph of muted gray (`#888`) copy of
  the same kind as the reference (2–4 sentence answer-style lorem text)
- **AND** the body SHALL be padded 20px on all sides and sit directly under
  the toggle (no card wrapper; rows stacked with a small gap)

### Requirement: Responsive behavior

The system SHALL keep the accordion fully usable on mobile viewports.

#### Scenario: Mobile layout (≤768px)

- **GIVEN** the Rosemary page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the accordion SHALL fill the viewport width with the same small
  row gaps and 15px/20px paddings (Bootstrap container gutters collapse)
- **AND** section padding SHALL reduce from `7rem` (the reference's desktop
  value; scale down for mobile per repo conventions)
- **AND** the toggle SHALL remain full-width and touch-friendly (≥44px
  hit area with its 15px padding)

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Rosemary page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded as
  "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so it
  does not disturb the minimal reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-rosemary`
- [ ] `scripts/verify-app.sh rosemary` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with reference): centered heading "Bootstrap
      Accordion #4" → accordion of 3 items (How to download and register?
      open · How to create your paypal account? closed · How to link your
      paypal and bank account? closed) → minimal Component Dock footer
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#743beb` active
      accent (2px left bar + label + chevron), `#efefef` page bg, `#f8f8fa`
      item + active toggle bg, `#fff` collapsed toggle bg, `#999` collapsed
      label, `#888` body copy, `#b3b3b3` paragraph mute; flat corners (no
      radius), NO borders on toggles, NO shadows
- [ ] Font: Roboto via Google Fonts `<link>` in `index.html`; title
      "Rosemary — Accordion FAQ"
- [ ] No images needed (pure typography template — faithful); icons from
      lucide-react (`ChevronDown`/`ChevronUp`) — no copied assets
- [ ] Only one panel open at a time; `aria-expanded`/`aria-controls` +
      `role="region"`; keyboard operable
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark the "Accordion 14" row, line 652 —
      Bootstrap Accordions category)
