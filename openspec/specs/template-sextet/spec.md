# Template: Sextet (Bootstrap Checkbox States Demo)

## Purpose

Sextet is a single-page UI-component demo template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 16"
Bootstrap component template design
(source: https://colorlib.com/wp/template/checkbox-16/), built under a
DIFFERENT name (**Sextet** — "sextet" = a group of six, matching the demo's
branding "Checkbox #6" and continuing the codrops sub-series naming pattern
Duo (#2) → Trio (#3) → Quartet (#4) → Quintet (#5) → Sextet (#6); per the
monorepo naming mandate — never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a tiny, self-contained demo: a white page with a centered
narrow column containing a dark left-aligned heading "Checkbox #6" and four
stacked CSS-only **codrops** custom checkboxes that demonstrate every checkbox
state: one checked, one unchecked, one disabled, and one disabled-and-checked.
The widget is the classic codrops custom checkbox pattern
(`label.control.control--checkbox` + visually-hidden
`input[type=checkbox]` + `div.control__indicator`), where the checked state
fills the indicator solid **Bootstrap blue `#007bff`** and the tick is a
**white icon glyph** (`icomoon` font `\e5ca`) centered inside the indicator.
This is NOT the Material widget of sibling Checkbox #5 (Quintet, hot pink
`#e13a9d`, pure-CSS border L-tick), NOT the codrops widget of Checkbox #4
(Quartet, purple `#7e0cf5`), and NOT Bootstrap's `custom-control` widget of
Checkbox #1 (Quadly) — it is the codrops `.control` widget with the Bootstrap
blue `#007bff` fill, matching sibling Checkbox #2 (Duo) and Checkbox #3 (Trio)
in widget AND color.

> NAMING NOTE: the ColorLib source name "Checkbox 16" is FORBIDDEN as the app
> name. **Sextet** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-15 against `git ls-tree origin/main`).
> Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Checkbox 16" — the sixteenth of the "Bootstrap
  Checkboxes (20)" series in TEMPLATES.md (line 746 — mark that line `[x]`
  when done; single row, no duplicate rows). Sibling items Checkbox 11–15
  were prepped as Quadly / Duo / Trio / Quartet / Quintet.
  **NUMBERING QUIRK (verified 2026-08-15):** the preview server hosts TWO
  distinct sub-series. Entries 01–10 map to `/theme/bootstrap/checkbox-01/`…
  `/checkbox-10/` and serve custom designs branded "Checkbox #01"…"#10".
  Entries 11–20 map to `/theme/bootstrap/checkbox-11/`…`/checkbox-20/` and
  serve a SEPARATE sub-series of codrops-sourced demos branded
  "BS4 Custom Checkbox #1"…"#9": checkbox-11 → "#1" (Quadly, Bootstrap
  `custom-control` widget), checkbox-12 → "#2" (Duo, codrops `.control`
  widget, Bootstrap blue `#007bff`), checkbox-13 → "#3" (Trio), checkbox-14 →
  "#4" (Quartet, codrops `.control` widget, purple `#7e0cf5`), checkbox-15 →
  "#5" (Quintet, MATERIAL widget, hot pink `#e13a9d`), **checkbox-16 → "#6"
  (this template, codrops `.control` widget, Bootstrap blue `#007bff`)**,
  … checkbox-19 → "#9", checkbox-20 → duplicate "#9". So entry "Checkbox 16"
  = the demo branded "Checkbox #6" — same widget AND color family as Duo/Trio
  (#2/#3), DIFFERENT widget from Quintet (#5, Material) and DIFFERENT color
  from Quartet (#4, purple). Each 11–20 entry is its own demo with its own
  heading AND its own widget/checked color; do NOT blindly reuse a sibling
  app's component.
- **Preview URL caveat:** the naive pattern
  `https://preview.colorlib.com/theme/checkbox-16/` returns **HTTP 404**.
  These "Checkbox NN" demos are sub-pages of ColorLib's big Bootstrap theme,
  so the real live preview is
  `https://preview.colorlib.com/theme/bootstrap/checkbox-16/`
  (HTTP 200, 16.8 KB HTML, verified 2026-08-15). The ColorLib template page
  (https://colorlib.com/wp/template/checkbox-16/) links this exact sub-path.
  Page stylesheet (small, page-specific — contains the WHOLE widget):
  `https://preview.colorlib.com/theme/bootstrap/checkbox-16/css/style.css`
  (2,215 bytes / 89 lines — body/font/heading overrides + the complete
  `.control` widget CSS; fully extracted for tokens). The page ALSO links
  `css/bootstrap.min.css`, `css/owl.carousel.min.css` and
  `fonts/icomoon/style.css`, and the head preloads Poppins + Source Serif Pro
  cf-fonts, but the body uses zero `owl-`/Poppins/Serif classes — the shell
  loads them for the surrounding ColorLib theme; only `style.css` styles the
  demo content. libs: bootstrap 4, jquery, popper. **Google Font Roboto**
  (body font stack — NOT Poppins). Document title: "Checkbox #6".
- **Screenshot cross-check:** TEMPLATES.md screenshot `checkbox-16.jpg`
  (1200×972, browser-viewed 2026-08-15) matches the live DOM exactly:
  heading "Checkbox #6" + four 4-state checkboxes with a solid **Bootstrap
  blue (#007bff)** fill and white tick on the checked rows, light-faded blue
  on the disabled-and-checked row (the screenshot's browser chrome shows a
  `preview.colorlib.com` component-preview origin, confirming this sub-series
  is codrops-sourced). The demo brands itself "Checkbox #6"; the recreation
  uses the NEW name **Sextet**.
- **Visual design (from DOM + CSS tokens + screenshot):** clean, minimalist
  demo page on a pure **white** background. Centered narrow column
  (`col-lg-3`, ≈280px) with generous vertical padding (112px, `7rem 0`):
  an `h2.my-5.text-left` heading "Checkbox #6" (20px, dark, left-aligned
  within the centered column, 3rem top+bottom margins) followed by FOUR
  stacked codrops-style custom-checkbox rows (each a 20×20px rounded-square
  indicator + 18px label text, 30px left padding):
  1. **First checkbox** — `checked`, enabled → solid blue `#007bff` fill +
     white centered tick
  2. **Second checkbox** — unchecked, enabled → light grey `#ccc` border,
     transparent fill, no tick
  3. **Disabled** — unchecked + `disabled` → grey `#e6e6e6` fill at 60%
     opacity, grey border, not interactive
  4. **Disabled & checked** — checked + `disabled` → blue `#007bff` fill at
     20% opacity, blue border, faded white tick, not interactive
     The demo page has NO navbar and NO footer — just the single `.content`
     block.
- **Section order (1:1, from live demo DOM):**
  1. `<body>` → `div.content` (padding 7rem 0 = 112px vertical):
  2. `div.container.text-left` (Bootstrap container, centered):
  3. `div.row.justify-content-center` → `div.col-lg-3` (≈280px centered
     narrow column):
  4. `h2.my-5.text-left` "Checkbox #6" (20px, dark, left-aligned, 3rem
     vertical margins)
  5. Four `label.control.control--checkbox` rows, each:
     - `<input type="checkbox">` with `checked` / `disabled` attributes per
       state — `position: absolute; z-index: -1; opacity: 0` in the source
       (visually hidden but still focusable; see Recreation decisions)
     - `<div class="control__indicator">` (20×20px, 4px radius, 2px solid
       `#ccc` border, transparent background)
     - the label text node (e.g. "First checkbox")
- **Design tokens extracted from `css/style.css` + DOM:**
  - Checked color: **`#007bff`** (Bootstrap blue) — `border: 2px solid
#007bff; background: #007bff` on `input:checked ~ .control__indicator`
  - Tick: white icon glyph — `.control__indicator:after` uses
    `font-family: 'icomoon'; content: '\e5ca'` (a Material "check" glyph),
    `color: #fff`, positioned `top: 50%; left: 50%; transform:
translate(-50%, -52%)`, `display: none` until checked. The `\e5ca` glyph
    is an ICON FONT asset — do NOT copy the icomoon font (never copy assets);
    recreate with the lucide-react `Check` icon (16px, `text-white`) instead.
    The stray `.control--checkbox input:disabled ~ .control__indicator:after
{ border-color: #7b7b7b }` rule is a leftover from the original codrops
    demo (whose tick was border-drawn) and has NO visual effect on the font
    glyph — ignore it.
  - Indicator: **20×20px**, inline-block, absolute `top: 2px`, `left: 0`,
    **border-radius: 4px**, **2px solid `#ccc`** border, `background:
transparent`
  - Hover/focus: `.control:hover input ~ .control__indicator` AND
    `.control input:focus ~ .control__indicator` → `border: 2px solid
#007bff` (blue border on hover AND on keyboard focus — keep both for
    a11y)
  - Checked state: `border: 2px solid #007bff; background: #007bff` (solid
    blue fill); tick glyph `color: #fff`, centered
  - Disabled: indicator `background: #e6e6e6; opacity: 0.6;
pointer-events: none; border: 2px solid #ccc`
  - Disabled & checked: `background-color: #007bff; opacity: .2;
border: 2px solid #007bff` (faded blue fill, white tick still centered)
  - Row: `label.control` (display block, position relative,
    **padding-left: 30px**, **margin-bottom: 15px**, cursor pointer,
    **font-size: 18px**)
  - Input: `position: absolute; z-index: -1; opacity: 0` — visually hidden,
    NOT `display: none` (keyboard-focusable; keep this behavior)
  - Page: body background **`#fff`**, font **Roboto** system stack
    (`"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
"Helvetica Neue", Arial, "Noto Sans", sans-serif`); `.content` padding
    **7rem 0**; `h2` **20px** (Bootstrap default weight 500, dark);
    `h2.my-5` = 3rem vertical margins; `p` (unused in demo) `#b3b3b3`
    weight 300.
- **Recreation decisions:** no copied assets — the icon-font tick is
  recreated with lucide-react's `Check` icon (white, 16px, centered in the
  indicator); Roboto via Google Fonts `<link>` in `index.html`; no external
  libs (plain React state per checkbox; `disabled` variants not toggleable).
  **Accessibility note:** the source hides the native input with
  `opacity: 0` + `z-index: -1` (NOT `display: none`), so it stays in the DOM
  and keyboard-focusable — the recreation keeps the same pattern: a
  visually-hidden but focusable native `<input type="checkbox">` inside the
  label, wired to the indicator with `peer` + `peer-checked:` sibling
  selectors, preserving exact visuals AND keyboard/screen-reader
  accessibility (matching the repo's accessibility conventions). Demo copy:
  keep the four labels verbatim ("First checkbox", "Second checkbox",
  "Disabled", "Disabled & checked") — they are the design itself; keep the
  heading "Checkbox #6" exactly as the reference renders it (this is the
  demo's own branding; the checklist row "Checkbox 16" is the mapping record,
  not on-screen copy). The demo has no footer; per repo rules every template
  MUST still include a minimal footer with the mandated Component Dock link
  (https://www.componentdock.com/).

Sextet lives in `apps/sextet` and uses shared components from `packages/ui`
(Button, ButtonLink, cn, etc.).

## Requirements

### Requirement: Demo section with heading

The system SHALL render a single centered demo block with a dark left-aligned
heading "Checkbox #6" on a white background.

#### Scenario: Section and heading

- **GIVEN** the Sextet page is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show one content block with generous vertical
  padding (≈112px top and bottom)
- **AND** the block SHALL contain a centered narrow column (≈280px on
  desktop)
- **AND** the column SHALL show a heading "Checkbox #6" (20px, dark,
  left-aligned within the column, ≈3rem vertical margins)

### Requirement: Four-state checkbox list

The system SHALL render four stacked codrops-style custom checkboxes
demonstrating every state: checked, unchecked, disabled, and
disabled-and-checked.

#### Scenario: All four states present

- **GIVEN** the demo column is displayed
- **WHEN** the user views the checkbox list
- **THEN** the list SHALL show exactly four rows in this order: "First
  checkbox" (checked), "Second checkbox" (unchecked), "Disabled"
  (unchecked, disabled), "Disabled & checked" (checked, disabled)
- **AND** each row SHALL show a 20×20px rounded-square indicator (4px
  radius) with a 2px border followed by its 18px label text (≈30px left
  padding, 15px row spacing)

#### Scenario: Checked state visuals

- **GIVEN** the "First checkbox" row
- **WHEN** it is checked
- **THEN** its indicator SHALL be filled solid Bootstrap blue `#007bff`
  with a 2px `#007bff` border
- **AND** a white check mark SHALL appear centered inside the indicator
  (lucide `Check` icon, no external font)
- **AND** the indicator SHALL show a blue `#007bff` border on hover and on
  keyboard focus

#### Scenario: Unchecked state visuals

- **GIVEN** the "Second checkbox" row
- **WHEN** it is unchecked
- **THEN** its indicator SHALL show a 2px light grey `#ccc` border with a
  transparent background
- **AND** SHALL contain no check mark

#### Scenario: Disabled states

- **GIVEN** the "Disabled" row
- **WHEN** it is rendered
- **THEN** its indicator SHALL be grey `#e6e6e6` at 60% opacity with a
  `#ccc` border
- **AND** the user SHALL NOT be able to toggle it (native disabled
  attribute)
- **GIVEN** the "Disabled & checked" row
- **WHEN** it is rendered
- **THEN** its indicator SHALL show the blue `#007bff` fill at 20% opacity
  with a `#007bff` border and a faded white check mark
- **AND** the user SHALL NOT be able to toggle it

### Requirement: Checkbox interaction and accessibility

The system SHALL make every enabled checkbox toggleable via click and
keyboard, with the visually-hidden native input kept for accessibility
(matching the source's `opacity: 0` + `z-index: -1` pattern, which keeps the
input focusable — unlike a `display: none` input).

#### Scenario: Toggle by click and keyboard

- **GIVEN** an enabled checkbox row ("First checkbox" / "Second checkbox")
- **WHEN** the user clicks the label or indicator
- **THEN** the checkbox SHALL toggle between checked and unchecked, and the
  indicator SHALL switch between the solid blue checked style and the grey
  unchecked style
- **WHEN** the user focuses the hidden input and presses Space
- **THEN** the checkbox SHALL toggle between checked and unchecked
- **WHEN** the user attempts to toggle a disabled row
- **THEN** the checkbox SHALL NOT change state

#### Scenario: Accessible control

- **GIVEN** the checkbox list is rendered
- **WHEN** an accessibility tree is inspected
- **THEN** each checkbox SHALL be exposed as a checkbox control with an
  accessible name equal to its label text (visually-hidden native input
  inside the label, keyboard-focusable, visually replaced by the indicator)

### Requirement: Page composition

The system SHALL compose the demo block and a minimal footer in a single page
with a main landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Sextet app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show the demo block in the main landmark
- **AND** the page SHALL show a minimal footer with a link to
  https://www.componentdock.com/ ("Component Dock")
- **AND** the document title SHALL be "Sextet — Checkbox UI Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh sextet` passes: typecheck + lint + vitest with
      100% coverage + build
- [ ] Section order matches the demo 1:1 (`.content` → centered container →
      `col-lg-3` narrow column: "Checkbox #6" heading + four-state list)
- [ ] Design tokens in `@theme`: checked `#007bff` (Bootstrap blue), border
      `#ccc`, disabled fill `#e6e6e6` at 0.6 opacity, disabled-checked blue
      at 0.2 opacity; page bg `#fff`
- [ ] Font: Roboto (system stack) via Google Fonts
- [ ] Checkbox anatomy: 20×20px indicator, 4px radius, 2px border, 30px left
      padding, 18px label, 15px row spacing; tick = lucide `Check` icon
      (white, centered) — NOT a copied icon font
- [ ] Four rows in order: First checkbox (checked), Second checkbox
      (unchecked), Disabled, Disabled & checked; heading copy "Checkbox #6"
      kept verbatim from the reference
- [ ] Blue border on hover AND keyboard focus (source keeps both selectors)
- [ ] Disabled rows cannot toggle; enabled rows toggle by click and Space
- [ ] Accessible: visually-hidden native input + label (accessible name =
      label text, keyboard-focusable — source's `opacity: 0`/`z-index: -1`
      input pattern preserved)
- [ ] No copied assets, no icon font (lucide `Check` replaces the icomoon
      `\e5ca` glyph)
- [ ] Footer: minimal, links https://www.componentdock.com/ (repo mandate —
      the demo itself has no footer)
- [ ] `TEMPLATES.md` line 746 updated by the implementer (`[~]` → `[x]` +
      surge URL) — NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
