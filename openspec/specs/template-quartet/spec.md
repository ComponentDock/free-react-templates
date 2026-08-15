# Template: Quartet (Bootstrap Checkbox States Demo)

## Purpose

Quartet is a single-page UI-component demo template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 14"
Bootstrap component template design
(source: https://colorlib.com/wp/template/checkbox-14/), built under a
DIFFERENT name (**Quartet** — "quartet" = a group of four, matching the four
checkbox states / four stacked checkboxes the demo showcases, and continuing
the codrops sub-series naming pattern Duo (#2) → Trio (#3) → Quartet (#4);
per the monorepo naming mandate — never reuse the ColorLib source name), with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a tiny, self-contained demo: a white page with a centered
narrow column containing a dark left-aligned heading "Checkbox #4" and four
stacked CSS-only custom checkboxes that demonstrate every checkbox state: one
checked, one unchecked, one disabled, and one disabled-and-checked. The widget
is the classic **codrops "Custom Checkbox" pattern**
(`label.control.control--checkbox` + `div.control__indicator` — a pure-CSS
custom checkbox driven by sibling selectors), NOT Bootstrap's
`custom-control` widget and NOT the `checkbox-wrap` widget of the Checkbox
01–10 sub-series.

> NAMING NOTE: the ColorLib source name "Checkbox 14" is FORBIDDEN as the app
> name. **Quartet** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-15 against `git ls-tree origin/main`).
> Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Checkbox 14" — the fourteenth of the "Bootstrap
  Checkboxes (20)" series in TEMPLATES.md (line 744 — mark that line `[x]`
  when done; single row, no duplicate rows). Sibling items Checkbox 01–10
  were prepped as Tickbox / Picks / Ticktag / Checkly / Tickwell / Toggly /
  Switchly / Soluna / Taskly / Moodly; Checkbox 11 as Quadly, Checkbox 12 as
  Duo, Checkbox 13 as Trio.
  **NUMBERING QUIRK (verified 2026-08-15):** the preview server hosts TWO
  distinct sub-series. Entries 01–10 map to `/theme/bootstrap/checkbox-01/`…
  `/checkbox-10/` and serve custom designs branded "Checkbox #01"…"#10".
  Entries 11–20 map to `/theme/bootstrap/checkbox-11/`…`/checkbox-20/` and
  serve a SEPARATE sub-series of codrops-sourced demos branded
  "BS4 Custom Checkbox #1"…"#9": checkbox-11 → "#1" (Bootstrap
  `custom-control` widget — Quadly), checkbox-12 → "#2" (codrops `.control`
  widget — Duo), checkbox-13 → "#3" (Trio), **checkbox-14 → "#4" (this
  template)**, … checkbox-19 → "#9", checkbox-20 → duplicate "#9". So entry
  "Checkbox 14" = the demo branded "Checkbox #4" — a DIFFERENT design from
  Tickbox (Checkbox 01); do NOT reuse the Tickbox app blindly. Each 11–20
  entry is its own demo with its own heading AND its own checked color
  (Duo/#2 = Bootstrap blue `#007bff`; this one/#4 = purple `#7e0cf5`).
- **Preview URL caveat:** the naive pattern
  `https://preview.colorlib.com/theme/checkbox-14/` returns **HTTP 404**.
  These "Checkbox NN" demos are sub-pages of ColorLib's big Bootstrap theme,
  so the real live preview is
  `https://preview.colorlib.com/theme/bootstrap/checkbox-14/`
  (HTTP 200, 16.8 KB HTML, verified 2026-08-15). The ColorLib template page
  (https://colorlib.com/wp/template/checkbox-14/) links this exact sub-path.
  Page stylesheet (small, page-specific — contains the WHOLE widget):
  `https://preview.colorlib.com/theme/bootstrap/checkbox-14/css/style.css`
  (2,353 bytes — body/font/heading overrides + the complete `.control`
  widget CSS; fully extracted for tokens). The page ALSO links
  `css/bootstrap.min.css`, `css/owl.carousel.min.css` and
  `fonts/icomoon/style.css` (the check glyph `\e5ca` is an icomoon font
  character), but the body uses no Bootstrap widget classes and zero
  `owl-`/`icon-` classes — the shell loads them for the surrounding ColorLib
  theme; only `style.css` styles the demo content. libs: bootstrap 4,
  jquery, popper. **Google Font Roboto** (body font stack — NOT Poppins).
- **Screenshot cross-check:** TEMPLATES.md screenshot `checkbox-14.jpg`
  (1200×972, browser-viewed 2026-08-15) matches the live DOM exactly:
  heading "Checkbox #4" + four 4-state checkboxes with a purple checked
  indicator (the screenshot's browser chrome shows a component-preview
  origin, confirming this sub-series is codrops-sourced). The demo brands
  itself "Checkbox #4"; the recreation uses the NEW name **Quartet**.
- **Visual design (from DOM + CSS tokens + screenshot):** clean, minimalist
  demo page on a pure **white** background. Centered narrow column
  (`col-lg-3`, ≈280px) with generous vertical padding (112px, `7rem 0`):
  an `h2.my-5.text-left` heading "Checkbox #4" (20px, dark, left-aligned
  within the centered column, 3rem top+bottom margins) followed by FOUR
  stacked codrops custom-checkbox rows (each a 20×20px rounded square
  indicator + label text):
  1. **First checkbox** — `checked`, enabled → solid purple `#7e0cf5` square
     with a white check glyph
  2. **Second checkbox** — unchecked, enabled → light grey `#e6e6e6` square,
     no glyph (hover/focus → `#ccc`)
  3. **Disabled** — unchecked + `disabled` → grey `#e6e6e6` square at
     opacity 0.9, not interactive
  4. **Disabled & checked** — checked + `disabled` → purple `#7e0cf5` at
     opacity 0.2 (faded lavender) with a white check glyph, not interactive
     The demo page has NO navbar and NO footer — just the single `.content`
     block.
- **Section order (1:1, from live demo DOM):**
  1. `<body>` → `div.content` (padding 7rem 0 = 112px vertical):
  2. `div.container.text-left` (Bootstrap container, centered):
  3. `div.row.justify-content-center` → `div.col-lg-3` (≈280px centered
     narrow column):
  4. `h2.my-5.text-left` "Checkbox #4" (20px, dark, left-aligned, 3rem
     vertical margins)
  5. Four `label.control.control--checkbox` rows, each:
     - label text (18px, default text color — e.g. "First checkbox")
     - `<input type="checkbox">` (visually hidden: absolute, `z-index: -1`,
       `opacity: 0` — still keyboard-focusable) with `checked` /
       `disabled` attributes per state
     - `<div class="control__indicator">` (20×20px square, 4px radius) —
       the check glyph (icomoon `\e5ca`, 14px, white) is absolutely centered
       inside it (`top/left 50%`, `translate(-50%,-50%)`) and only shown
       when checked (0.3s transition).
- **Design tokens extracted from `css/style.css` + DOM:**
  - Checked (enabled) indicator: **`#7e0cf5`** (purple) —
    `.control input:checked ~ .control__indicator`
  - Checked hover/focus: **`#8b24f6`** — `.control:hover input:not([disabled]):checked ~ .control__indicator`
  - Unchecked indicator: **`#e6e6e6`**; unchecked hover/focus: **`#ccc`**
  - Disabled indicator: `#e6e6e6` + `opacity: 0.9` + `pointer-events: none`
  - Disabled & checked: `#7e0cf5` at `opacity: 0.2`
  - Check glyph: icomoon `\e5ca` (Material "check"), **14px**, color
    **`#fff`** when checked; absolutely centered via
    `translate(-50%,-50%)`; transition **0.3s** ease
    (the `.control--checkbox input:disabled ~ .control__indicator:after
{ border-color: #7b7b7b }` rule is vestigial — the glyph is a font
    character, not a bordered shape; ignore it, the screenshot shows a white
    glyph on the faded-purple disabled-checked box)
  - Indicator box: **20×20px**, **border-radius 4px**, absolute `top: 2px`,
    `left: 0`
  - Row: `label.control` — display block, position relative,
    **padding-left 30px**, **margin-bottom 15px**, cursor pointer,
    **font-size 18px**; native input hidden (absolute, `z-index: -1`,
    `opacity: 0`)
  - Page: body background **`#fff`**, font **Roboto** system stack
    (`"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
"Helvetica Neue", Arial, "Noto Sans", sans-serif`); `.content` padding
    **7rem 0**; `h2` **20px** (Bootstrap default weight 500, dark);
    `h2.my-5` = 3rem vertical margins.
- **Recreation decisions:** no copied assets — icomoon glyph → **lucide-react
  `Check`** (14px, white, stroke-width ~3 for a solid look) inside the
  indicator; Roboto via Google Fonts `<link>` in `index.html`; no external
  libs (plain React state per checkbox; `disabled` variants not toggleable);
  the visually-hidden native checkbox pattern is kept for accessibility
  (real `<input type="checkbox">` absolutely positioned with `opacity: 0`
  inside the label — keyboard focusable + screen-reader friendly; indicator
  is a sibling `div` styled via `input:checked ~ .control__indicator`
  sibling selectors, exactly like the codrops pattern). Demo copy: keep the
  four labels verbatim ("First checkbox", "Second checkbox", "Disabled",
  "Disabled & checked") — they are the design itself; keep the heading
  "Checkbox #4" exactly as the reference renders it (this is the demo's own
  branding; the checklist row "Checkbox 14" is the mapping record, not
  on-screen copy). The demo has no footer; per repo rules every template
  MUST still include a minimal footer with the mandated Component Dock link
  (https://www.componentdock.com/).

Quartet lives in `apps/quartet` and uses shared components from `packages/ui`
(Button, ButtonLink, cn, etc.).

## Requirements

### Requirement: Demo section with heading

The system SHALL render a single centered demo block with a dark left-aligned
heading "Checkbox #4" on a white background.

#### Scenario: Section and heading

- **GIVEN** the Quartet page is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show one content block with generous vertical
  padding (≈112px top and bottom)
- **AND** the block SHALL contain a centered narrow column (≈280px on
  desktop)
- **AND** the column SHALL show a heading "Checkbox #4" (20px, dark,
  left-aligned within the column, ≈3rem vertical margins)

### Requirement: Four-state checkbox list

The system SHALL render four stacked custom checkboxes demonstrating every
state: checked, unchecked, disabled, and disabled-and-checked.

#### Scenario: All four states present

- **GIVEN** the demo column is displayed
- **WHEN** the user views the checkbox list
- **THEN** the list SHALL show exactly four rows in this order: "First
  checkbox" (checked), "Second checkbox" (unchecked), "Disabled"
  (unchecked, disabled), "Disabled & checked" (checked, disabled)
- **AND** each row SHALL show a 20×20px rounded (4px radius) square
  indicator followed by its 18px label text

#### Scenario: Checked state visuals

- **GIVEN** the "First checkbox" row
- **WHEN** it is checked
- **THEN** its indicator SHALL be solid purple `#7e0cf5` with a white check
  glyph centered inside it
- **WHEN** the row is hovered or the input is focused
- **THEN** the checked indicator SHALL lighten to `#8b24f6`

#### Scenario: Unchecked state visuals

- **GIVEN** the "Second checkbox" row
- **WHEN** it is unchecked
- **THEN** its indicator SHALL be light grey `#e6e6e6` with no glyph
- **WHEN** the row is hovered or the input is focused
- **THEN** the unchecked indicator SHALL darken to `#ccc`

#### Scenario: Disabled states

- **GIVEN** the "Disabled" row
- **WHEN** it is rendered
- **THEN** its indicator SHALL be grey `#e6e6e6` at 90% opacity
- **AND** the user SHALL NOT be able to toggle it (pointer-events none +
  native disabled attribute)
- **GIVEN** the "Disabled & checked" row
- **WHEN** it is rendered
- **THEN** its indicator SHALL be purple `#7e0cf5` at 20% opacity with a
  white check glyph (faded lavender look)
- **AND** the user SHALL NOT be able to toggle it

### Requirement: Checkbox interaction and accessibility

The system SHALL make every enabled checkbox toggleable via click and
keyboard, with the visually-hidden native input kept for accessibility.

#### Scenario: Toggle by click and keyboard

- **GIVEN** an enabled checkbox row ("First checkbox" / "Second checkbox")
- **WHEN** the user clicks the label or indicator
- **THEN** the checkbox SHALL toggle between checked and unchecked, and the
  indicator SHALL switch between the purple checked style and the grey
  unchecked style (0.3s transition)
- **WHEN** the user focuses the hidden input and presses Space
- **THEN** the checkbox SHALL toggle between checked and unchecked
- **WHEN** the user attempts to toggle a disabled row
- **THEN** the checkbox SHALL NOT change state

#### Scenario: Accessible control

- **GIVEN** the checkbox list is rendered
- **WHEN** an accessibility tree is inspected
- **THEN** each checkbox SHALL be exposed as a checkbox control with an
  accessible name equal to its label text (hidden native input inside the
  label, visually replaced by the indicator)

### Requirement: Page composition

The system SHALL compose the demo block and a minimal footer in a single page
with a main landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Quartet app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show the demo block in the main landmark
- **AND** the page SHALL show a minimal footer with a link to
  https://www.componentdock.com/ ("Component Dock")
- **AND** the document title SHALL be "Quartet — Checkbox UI Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh quartet` passes: typecheck + lint + vitest with
      100% coverage + build
- [ ] Section order matches the demo 1:1 (`.content` → centered container →
      `col-lg-3` narrow column: "Checkbox #4" heading + four-state list)
- [ ] Design tokens in `@theme`: checked `#7e0cf5`, checked-hover `#8b24f6`,
      unchecked `#e6e6e6`, unchecked-hover `#ccc`, disabled opacity 0.9,
      disabled-checked opacity 0.2; page bg `#fff`
- [ ] Font: Roboto (system stack) via Google Fonts
- [ ] Checkbox anatomy: 20×20px indicator, 4px radius, 30px left padding,
      15px row gap, 18px label, 14px white `Check` glyph centered, 0.3s
      transition
- [ ] Four rows in order: First checkbox (checked), Second checkbox
      (unchecked), Disabled, Disabled & checked; heading copy "Checkbox #4"
      kept verbatim from the reference
- [ ] Disabled rows cannot toggle; enabled rows toggle by click and Space
- [ ] Accessible: hidden native input + label (accessible name = label text)
- [ ] Icons: lucide-react `Check` (no icomoon/FontAwesome, no copied assets)
- [ ] Footer: minimal, links https://www.componentdock.com/ (repo mandate —
      the demo itself has no footer)
- [ ] `TEMPLATES.md` line 744 updated by the implementer (`[~]` → `[x]` +
      surge URL) — NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
