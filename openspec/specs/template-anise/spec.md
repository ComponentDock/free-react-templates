# Template: Anise (Bootstrap Accordion / FAQ)

## Purpose

Anise is a single-page accordion FAQ template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Accordion 13" free template (source:
https://colorlib.com/wp/template/accordion-13/), built under a DIFFERENT name
(**Anise** — an aromatic spice seed, continuing the herb/spice naming run of
the accordion series: thyme, basil, oregano…; per the monorepo naming mandate
— never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a minimal, clean FAQ accordion: a white page with a centered
"Bootstrap Accordion #3" heading and a three-panel accordion — **How to
download and register?** (open by default), **How to create your paypal
account?** (closed), and **How to link your paypal and bank account?**
(closed). Each panel holds a block of muted placeholder copy. The only color
accent on the page is the green `#72c02c` used for the active panel's border,
label text, and up-chevron icon. Anise recreates that structure 1:1 with
matching layout, tokens, typography, and content kinds (no ColorLib assets
copied).

> NAMING NOTE: the ColorLib source name "Accordion 13" is FORBIDDEN as the
> app name. **Anise** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Accordion 13". Listed in TEMPLATES.md under
  **Bootstrap Accordions (20)** (line 651). Free accordion/FAQ component
  template. The slug appears exactly once (no dup rows).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default preview
  URL `https://preview.colorlib.com/theme/accordion-13/` returns 404; the
  ColorLib template page reveals the REAL preview URL:
  `https://preview.colorlib.com/theme/bac/accordion-13/` (HTTP 200, 19.4KB
  HTML; the `/bac/` subpath = the "bootstrap accordions" demo index).
  Stylesheets: `css/style.css` (2KB — bootstrap + custom; token source),
  `css/bootstrap.min.css`, `css/owl.carousel.min.css` (unused on this page),
  `fonts/icomoon/style.css` (toggle chevron glyphs). Structure, copy, and
  tokens below are from the live DOM + `style.css`. Screenshot
  (`accordion-13.jpg`, 1200×972, browser-verified 2026-08-14) confirms the
  aesthetic: light page, centered "Bootstrap Accordion #3" heading, three
  accordion rows — first expanded with a light-green border framing header +
  content, the other two with faint gray borders, chevron icons on the left,
  no navbar, no footer, no imagery.
- **Visual design (screenshot + live DOM):** extremely clean, minimal,
  typography-driven. White `#fff` page, dark-gray heading, medium-gray
  collapsed rows (`#999` labels on `#efefef` 1px borders), active row picked
  out in green `#72c02c` (border + label + up-chevron). Body copy is muted
  gray. No images anywhere — pure text + one accordion. Sans-serif (Roboto)
  throughout, light weights (300).
- **Section order (1:1 from live DOM):**
  1. **Page heading** — `div.content` (padding `7rem 0`) → `div.container` →
     centered `h2.my-5.text-center` "Bootstrap Accordion #3" (20px Roboto,
     dark gray/black, generous top+bottom margin).
  2. **Accordion** — `div.container` → `div.custom-accordion#accordion_1`:
     three `div.accordion-item` blocks stacked with `margin-bottom: 10px`
     (white bg, `border-radius: 4px`). NO intro block, NO card wrapper — the
     items sit directly on the white page.
  3. **Panel 1 — "How to download and register?"** — header
     `h2.mb-0` → full-width `button.btn.btn-link` (padding 15px, padding-left
     40px, text-left, color `#999`, `1px solid #efefef` border) with chevron
     icon at left 15px; OPEN by default (`div#collapseOne.collapse.show`,
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
  `\e316` keyboard_arrow_up → expanded with `color: #72c02c`; the active
  item's `.btn-link` also gets `border: 1px solid #72c02c` + `color: #72c02c`).
  Recreate with React state: one `openIndex` (default 0), buttons toggle,
  icon swaps between `ChevronDown`/`ChevronUp` (lucide-react), the open item's
  chevron + label + border turn green `#72c02c`, `aria-expanded` +
  `aria-controls`, panels are `role="region"` / labelled by their header
  button. FAQ copy is static presentational text (no backend).

## Design tokens (verified from live stylesheet `css/style.css`)

- **Brand colors:**
  - `#72c02c` — the ONLY accent: active panel border, active panel label
    text, and expanded chevron (`.accordion-item.active .btn-link`,
    `[aria-expanded="true"]:before`). A fresh leaf-green.
  - `#ffffff` — page background (`body { background-color: #fff }`) and
    accordion item background (`.accordion-item { background-color: #fff }`).
  - `#999` — collapsed toggle label text (`.btn-link { color: #999 }`).
  - `#efefef` — collapsed item border (`border: 1px solid #efefef`).
  - `#888` — accordion body text (`.accordion-body { color: #888 }`).
  - `#b3b3b3` — generic paragraph color (`p { color: #b3b3b3 }`, weight 300).
  - dark gray/black — page heading "Bootstrap Accordion #3" (default heading
    color, 20px).
- **Fonts:** **Roboto** (body + all headings; `font-family: "Roboto",
-apple-system, BlinkMacSystemFont, "Segoe UI", …`) — loaded via Google
  Fonts `<link>` in `index.html`. Body/paragraph weight 300; page heading
  `h2` 20px; accordion toggle inherits Roboto (Bootstrap `.btn-link` base).
- **Buttons:** the accordion header IS the button — `display: block`, `width:
100%`, `padding: 15px` (with `padding-left: 40px` for the icon gutter),
  `text-align: left`, color `#999`, `border: 1px solid #efefef`, no underline
  (`.3s all ease` transition). Active state: border + text `#72c02c`. No
  radius on the button itself (the 4px radius lives on the `.accordion-item`).
- **Radii:** accordion item `border-radius: 4px`; no pill buttons.
- **Shadows:** none (flat design — no card shadow, no drop shadows).
- **Spacing rhythm:** section padding `7rem 0` (`.content`); heading
  `my-5 text-center` (3rem top/bottom); items stacked with `margin-bottom:
10px`; toggle padding 15px (left 40px for icon); body padding 20px all
  around; chevron icon absolutely positioned at `left: 15px`,
  vertically centered.
- **Icons:** lucide-react `ChevronDown` (collapsed, default color) /
  `ChevronUp` (expanded, `#72c02c`), ~24px, at the LEFT of the toggle label
  (the original's icomoon icon font is NOT copied).
- **No images** in this template — pure typography/accordion, so no picsum
  seeds are needed (the page needs no imagery to be faithful).

## Requirements

### Requirement: Page heading

The system SHALL render a centered page heading "Bootstrap Accordion #3" at
the top of the page, styled 20px Roboto in dark gray/black with generous
vertical margins (`my-5` equivalent), on the `#fff` page background.

#### Scenario: Heading layout

- **GIVEN** the Anise page is rendered
- **WHEN** the page loads
- **THEN** an `h2` SHALL show the text "Bootstrap Accordion #3" centered at
  the top of the `#fff` page
- **AND** the heading SHALL be 20px with large top and bottom margins
  (3rem, `my-5` equivalent), matching the reference
- **AND** the heading SHALL use the Roboto font stack

### Requirement: Accordion structure and default state

The system SHALL render an accordion with three panels — "How to download and
register?" (open by default), "How to create your paypal account?" (closed),
and "How to link your paypal and bank account?" (closed) — with only one
panel open at a time.

#### Scenario: Three panels with default states

- **GIVEN** the Anise page is rendered
- **WHEN** the page loads
- **THEN** panel 1 SHALL be titled "How to download and register?" and be
  OPEN
- **AND** panel 2 SHALL be titled "How to create your paypal account?" and be
  CLOSED
- **AND** panel 3 SHALL be titled "How to link your paypal and bank account?"
  and be CLOSED
- **AND** the open panel SHALL show a `ChevronUp` icon in green `#72c02c`
  with its label and border in `#72c02c`
- **AND** each closed panel SHALL show a `ChevronDown` icon with a `#999`
  label on a `1px solid #efefef` border

#### Scenario: Single-open behavior

- **GIVEN** panel 1 is open and panels 2 and 3 are closed
- **WHEN** the user activates the "How to create your paypal account?" toggle
- **THEN** panel 2 SHALL open and panel 1 SHALL close (only one panel open at
  a time, per the reference's `data-parent` behavior)
- **AND** the green active styling SHALL move to panel 2's toggle

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
  and `ChevronUp` (open, `#72c02c`)
- **AND** the button SHALL be full width, left-aligned, `#999` text
  (or `#72c02c` when active), with no underline on hover/focus

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
  the toggle (no card wrapper, items stacked with 10px gaps)

### Requirement: Responsive behavior

The system SHALL keep the accordion fully usable on mobile viewports.

#### Scenario: Mobile layout (≤768px)

- **GIVEN** the Anise page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the accordion SHALL fill the viewport width with the same 10px
  item gaps and 15px/20px paddings (Bootstrap container gutters collapse)
- **AND** section padding SHALL reduce from `7rem` (the reference's desktop
  value; scale down for mobile per repo conventions)
- **AND** the toggle SHALL remain full-width and touch-friendly (≥44px
  hit area with its 15px padding)

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Anise page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded as
  "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so it
  does not disturb the minimal reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-anise`
- [ ] `scripts/verify-app.sh anise` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with reference): centered heading "Bootstrap
      Accordion #3" → accordion of 3 items (How to download and register?
      open · How to create your paypal account? closed · How to link your
      paypal and bank account? closed) → minimal Component Dock footer
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#72c02c` active
      accent (border + label + chevron), `#fff` page/item bg, `#999` collapsed
      label, `#efefef` collapsed border, `#888` body copy, `#b3b3b3` paragraph
      mute; item radius 4px; NO shadows (flat)
- [ ] Font: Roboto via Google Fonts `<link>` in `index.html`; title
      "Anise — Accordion FAQ"
- [ ] No images needed (pure typography template — faithful); icons from
      lucide-react (`ChevronDown`/`ChevronUp`) — no copied assets
- [ ] Only one panel open at a time; `aria-expanded`/`aria-controls` +
      `role="region"`; keyboard operable
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark the "Accordion 13" row, line 651 —
      Bootstrap Accordions category)
