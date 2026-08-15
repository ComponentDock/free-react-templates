# Template: Septet (Bootstrap Checkbox Overflow Demo)

## Purpose

Septet is a single-page UI-component demo template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 17"
Bootstrap component template design
(source: https://colorlib.com/wp/template/checkbox-17/), built under a
DIFFERENT name (**Septet** — "septet" = a group of seven, matching the demo's
branding "Checkbox #7" and continuing the codrops sub-series naming pattern
Duo (#2) → Trio (#3) → Quartet (#4) → Quintet (#5) → Sextet (#6) → Septet
(#7); per the monorepo naming mandate — never reuse the ColorLib source name),
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a tiny, self-contained demo: a white page with a centered
narrow column containing a dark left-aligned heading "Checkbox #7" and four
stacked **codrops "overflow"** custom checkboxes that demonstrate every
checkbox state: one checked, one unchecked, one disabled, and one
disabled-and-checked. The widget is the classic codrops **overflow** checkbox
pattern (`label.custom-control.overflow-checkbox` + `display: none`
`input[type=checkbox]` + `span.overflow-control-indicator` + description
span), where the checked state draws a **CSS border-drawn checkmark** in the
accent **teal `#00909e`** that **overflows the top edge of the 16×16px box**,
with a white diagonal mask notching the box border where the tick crosses it
(the signature "overflow" look). This is NOT the codrops `.control` widget of
sibling Checkbox #6 (Sextet, Bootstrap blue `#007bff`), NOT the Material
widget of Checkbox #5 (Quintet, hot pink `#e13a9d`), and NOT the purple
codrops widget of Checkbox #4 (Quartet, `#7e0cf5`) — it is the `overflow`
widget variant with its own teal accent and its own tick construction.

> NAMING NOTE: the ColorLib source name "Checkbox 17" is FORBIDDEN as the app
> name. **Septet** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-15 against `git ls-tree origin/main`).
> Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Checkbox 17" — the seventeenth of the "Bootstrap
  Checkboxes (20)" series in TEMPLATES.md (line 747 — mark that line `[x]`
  when done; single row, no duplicate rows). Sibling items Checkbox 11–16
  were prepped as Quadly / Duo / Trio / Quartet / Quintet / Sextet.
  **NUMBERING QUIRK (verified 2026-08-15):** the preview server hosts TWO
  distinct sub-series. Entries 01–10 map to `/theme/bootstrap/checkbox-01/`…
  `/checkbox-10/` and serve custom designs branded "Checkbox #01"…"#10".
  Entries 11–20 map to `/theme/bootstrap/checkbox-11/`…`/checkbox-20/` and
  serve a SEPARATE sub-series of codrops-sourced demos branded
  "BS4 Custom Checkbox #1"…"#9": checkbox-11 → "#1" (Quadly, Bootstrap
  `custom-control` widget), checkbox-12 → "#2" (Duo, codrops `.control`
  widget, Bootstrap blue `#007bff`), checkbox-13 → "#3" (Trio), checkbox-14 →
  "#4" (Quartet, codrops `.control` widget, purple `#7e0cf5`), checkbox-15 →
  "#5" (Quintet, MATERIAL widget, hot pink `#e13a9d`), checkbox-16 → "#6"
  (Sextet, codrops `.control` widget, Bootstrap blue `#007bff`),
  **checkbox-17 → "#7" (THIS template, codrops OVERFLOW widget, teal
  `#00909e`)**, checkbox-18 → "#8", checkbox-19 → "#9", checkbox-20 →
  duplicate "#9". So entry "Checkbox 17" = the demo branded "Checkbox #7" —
  its OWN widget (overflow) AND its own accent color (teal), DIFFERENT from
  every sibling; do NOT reuse a sibling app's component.
- **Preview URL caveat:** the naive pattern
  `https://preview.colorlib.com/theme/checkbox-17/` returns **HTTP 404**.
  These "Checkbox NN" demos are sub-pages of ColorLib's big Bootstrap theme,
  so the real live preview is
  `https://preview.colorlib.com/theme/bootstrap/checkbox-17/`
  (HTTP 200, 17.3 KB HTML, verified 2026-08-15). The ColorLib template page
  (https://colorlib.com/wp/template/checkbox-17/) links this exact sub-path.
  Page stylesheet (small, page-specific — contains the WHOLE widget):
  `https://preview.colorlib.com/theme/bootstrap/checkbox-17/css/style.css`
  (2,818 bytes / 87 lines — body/font/heading overrides + the complete
  `.overflow-checkbox` widget CSS; fully extracted for tokens). The page ALSO
  links `css/bootstrap.min.css`, `css/owl.carousel.min.css` and
  `fonts/icomoon/style.css`, but the body uses zero `owl-`/icomoon classes —
  the shell loads them for the surrounding ColorLib theme; only `style.css`
  styles the demo content. libs: bootstrap 4, jquery, popper. **Google Font
  Roboto** (body font stack — NOT Poppins). Document title: "Checkbox #7".
- **Screenshot cross-check:** TEMPLATES.md screenshot `checkbox-17.jpg`
  (1200×972, browser-viewed 2026-08-15) matches the live DOM exactly:
  heading "Checkbox #7" + four 4-state checkboxes with a teal/cyan
  (`#00909e`) border and a checkmark on the checked rows; the disabled rows
  show grey borders/ticks and greyed label text; the browser chrome shows a
  `preview.colorlib.com` component-preview origin, confirming this sub-series
  is codrops-sourced. The demo brands itself "Checkbox #7"; the recreation
  uses the NEW name **Septet**.
- **Visual design (from DOM + CSS tokens + screenshot + live computed
  styles):** clean, minimalist demo page on a pure **white** background.
  Centered narrow column (`col-lg-3`, ≈255–280px) with generous vertical
  padding (112px, `7rem 0`): an `h2.my-5.text-left` heading "Checkbox #7"
  (20px, dark, left-aligned within the centered column, 3rem=48px top+bottom
  margins) followed by FOUR stacked `label.custom-control.overflow-checkbox`
  rows (each a 16×16px 3px-radius 2px-bordered square indicator, absolutely
  positioned 4px from the label top + 18–24px left padding, 16px label text):
  1. **First checkbox** — `checked`, enabled → teal `#00909e` border + CSS
     border-drawn teal checkmark overflowing the box's top edge, white notch
     at the border crossing
  2. **Second checkbox** — unchecked, enabled → teal `#00909e` border, no
     tick
  3. **Disabled** — unchecked + `disabled` → grey `#ccc` border at 50%
     opacity, no tick, not interactive
  4. **Disabled & checked** — checked + `disabled` → grey `#ccc` border at
     50% opacity, grey `#ccc` tick, not interactive
     The demo page has NO navbar and NO footer — just the single `.content`
     block.
- **Section order (1:1, from live demo DOM):**
  1. `<body>` → `div.content` (padding 7rem 0 = 112px vertical):
  2. `div.container.text-left` (Bootstrap container, centered):
  3. `div.row.justify-content-center` → `div.col-lg-3` (≈255–280px centered
     narrow column):
  4. `h2.my-5.text-left` "Checkbox #7" (20px, dark, left-aligned, 3rem
     vertical margins)
  5. Four `label.custom-control.overflow-checkbox` rows, each:
     - `<input type="checkbox" class="overflow-control-input">` with
       `checked` / `disabled` attributes per state — `display: none` in the
       source (NOT keyboard-accessible; see Recreation decisions)
     - `<span class="overflow-control-indicator">` (16×16px, 3px radius,
       2px solid `#00909e` border, absolute top 4px left 0)
     - `<span class="overflow-control-description">` (the label text, e.g.
       "First checkbox")
- **Design tokens extracted from `css/style.css` + live computed styles:**
  - Accent (border + tick) color: **`#00909e`** (teal) — `border: 2px solid
#00909e` on the indicator; tick borders `4px solid #00909e`
  - Tick (`.overflow-control-indicator::after`): CSS-drawn L — element
    10px × 16px with `border-bottom: 4px solid #00909e` +
    `border-right: 4px solid #00909e`, `border-radius: 3px`; base state
    `transform: rotateZ(90deg) scale(0)`; checked state
    `transform: rotateZ(45deg) scale(1); top: -6px; left: 5px` → the
    checkmark **overflows the box's top edge** (the tick's upper tip sits
    ≈6px above the 16px box). Transition `0.3s` on all properties.
  - White mask (`.overflow-control-indicator::before`): element 10px × 16px
    with `border-right: 7px solid #fff`, `border-radius: 3px`,
    `transform: rotateZ(45deg) scale(1); top: -4px; left: 5px`,
    `opacity: 0` → `1` when checked — the diagonal white bar **notches the
    box border** where the tick crosses it (the tick appears to pass
    THROUGH the border). Transition `0.3s`.
  - Indicator: **16×16px**, inline-block, absolute `top: 4px; left: 0`,
    **border-radius: 3px**, **2px solid `#00909e`** border, transparent
    background
  - Disabled: `:disabled ~ .overflow-control-indicator` →
    `opacity: .5; border: 2px solid #ccc`; disabled tick
    (`::after` on disabled) → `border-bottom: 4px solid #ccc;
border-right: 4px solid #ccc` (grey tick); the white mask stays (its
    `opacity: 1` comes from `:checked`, which the disabled-checked row also
    has)
  - No hover/focus rule in the source (the source input is `display: none`
    so it cannot receive focus) — the recreation ADDS a focus-visible ring
    per the repo a11y conventions (see Recreation decisions)
  - Row: `label.custom-control.overflow-checkbox` — Bootstrap 4
    `.custom-control` base: `position: relative; display: block;
min-height: 1.5rem (24px); padding-left: 1.5rem (24px)`; the
    `.overflow-control-description` span inherits the body size
    (16px = 1rem), dark `#212529`, Roboto
  - Input: `display: none` (source) — see Recreation decisions
  - Page: body background **`#fff`**, font **Roboto** system stack
    (`"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
"Helvetica Neue", Arial, "Noto Sans", sans-serif`); `.content` padding
    **7rem 0** (112px); `h2` **20px** (Bootstrap default weight 500, dark
    `#212529`); `h2.my-5` = 48px vertical margins; `p` (unused in demo)
    `#b3b3b3` weight 300.
- **Recreation decisions:** no copied assets — the tick is pure CSS
  (border-right + border-bottom rotated 45°, same technique as the source),
  the white mask is a rotated white bar (pure CSS), Roboto via Google Fonts
  `<link>` in `index.html`; no external libs (plain React state per
  checkbox; `disabled` variants not toggleable). **Accessibility note:** the
  source hides the native input with `display: none` — it is NOT exposed to
  assistive tech and NOT keyboard-focusable. Per the repo accessibility
  conventions, the recreation keeps the native input in the DOM
  visually-hidden but focusable (e.g. `sr-only`-style: absolute, 1px clip,
  or `opacity: 0` + `z-index: -1` like the Sextet spec) wired to the
  indicator via `peer` + `peer-checked:` sibling selectors, so the exact
  visuals AND keyboard/screen-reader accessibility are preserved (this is a
  deliberate, documented improvement over the source; visuals unchanged).
  Add a `focus-visible` ring on the indicator (e.g. `ring-2 ring-offset-1`)
  since the source has no focus style at all. Demo copy: keep the four
  labels verbatim ("First checkbox", "Second checkbox", "Disabled",
  "Disabled & checked") — they are the design itself; keep the heading
  "Checkbox #7" exactly as the reference renders it (this is the demo's own
  branding; the checklist row "Checkbox 17" is the mapping record, not
  on-screen copy). The demo has no footer; per repo rules every template
  MUST still include a minimal footer with the mandated Component Dock link
  (https://www.componentdock.com/).

Septet lives in `apps/septet` and uses shared components from `packages/ui`
(Button, ButtonLink, cn, etc.).

## Requirements

### Requirement: Demo section with heading

The system SHALL render a single centered demo block with a dark left-aligned
heading "Checkbox #7" on a white background.

#### Scenario: Section and heading

- **GIVEN** the Septet page is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show one content block with generous vertical
  padding (≈112px top and bottom)
- **AND** the block SHALL contain a centered narrow column (≈255–280px on
  desktop)
- **AND** the column SHALL show a heading "Checkbox #7" (20px, dark,
  left-aligned within the column, ≈48px vertical margins)

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
- **AND** each row SHALL show a 16×16px rounded-square indicator (3px
  radius) with a 2px teal border followed by its 16px label text (≈24px
  left padding, Bootstrap `custom-control` row layout)

#### Scenario: Checked state visuals

- **GIVEN** the "First checkbox" row
- **WHEN** it is checked
- **THEN** its indicator SHALL show a 2px solid teal `#00909e` border with
  a transparent background
- **AND** a CSS border-drawn checkmark SHALL appear (two 4px bars rotated
  45°, no icon font) in the same teal `#00909e`
- **AND** the checkmark SHALL overflow the box's top edge (its upper tip
  extends above the 16px box — the codrops "overflow" signature)
- **AND** a white diagonal mask SHALL notch the box border where the
  checkmark crosses it, so the tick appears to pass through the border
- **AND** the tick SHALL animate in over ≈0.3s (rotate 90°→45°, scale
  0→1)

#### Scenario: Unchecked state visuals

- **GIVEN** the "Second checkbox" row
- **WHEN** it is unchecked
- **THEN** its indicator SHALL show a 2px solid teal `#00909e` border
- **AND** SHALL contain no checkmark and no white mask

#### Scenario: Disabled states

- **GIVEN** the "Disabled" row
- **WHEN** it is rendered
- **THEN** its indicator SHALL show a 2px solid `#ccc` border at 50%
  opacity with no checkmark
- **AND** the user SHALL NOT be able to toggle it (native disabled
  attribute)
- **GIVEN** the "Disabled & checked" row
- **WHEN** it is rendered
- **THEN** its indicator SHALL show the `#ccc` border at 50% opacity with a
  grey `#ccc` checkmark (white mask still present — the checked selector
  applies)
- **AND** the user SHALL NOT be able to toggle it

### Requirement: Checkbox interaction and accessibility

The system SHALL make every enabled checkbox toggleable via click and
keyboard, with the native input kept visually-hidden but focusable (the
source's `display: none` is NOT accessible — the recreation uses the repo's
visually-hidden pattern instead, preserving exact visuals).

#### Scenario: Toggle by click and keyboard

- **GIVEN** an enabled checkbox row ("First checkbox" / "Second checkbox")
- **WHEN** the user clicks the label or indicator
- **THEN** the checkbox SHALL toggle between checked and unchecked, and the
  indicator SHALL switch between the checked style (teal border + overflow
  tick + white mask) and the unchecked style (teal border only)
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
- **AND** the focused checkbox SHALL show a visible focus indication (e.g.
  focus-visible ring on the indicator) — the source has none (its input is
  `display: none`); this is a deliberate a11y improvement

### Requirement: Page composition

The system SHALL compose the demo block and a minimal footer in a single page
with a main landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Septet app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show the demo block in the main landmark
- **AND** the page SHALL show a minimal footer with a link to
  https://www.componentdock.com/ ("Component Dock")
- **AND** the document title SHALL be "Septet — Checkbox UI Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh septet` passes: typecheck + lint + vitest with
      100% coverage + build
- [ ] Section order matches the demo 1:1 (`.content` → centered container →
      `col-lg-3` narrow column: "Checkbox #7" heading + four-state list)
- [ ] Design tokens in `@theme`: accent `#00909e` (teal), disabled border
      `#ccc`, page bg `#fff`
- [ ] Font: Roboto (system stack) via Google Fonts
- [ ] Checkbox anatomy: 16×16px indicator, 3px radius, 2px border, 24px left
      padding, 16px label text; tick = CSS border-drawn (two 4px bars,
      rotated 45°) — NOT an icon font, NOT a copied asset
- [ ] Four rows in order: First checkbox (checked), Second checkbox
      (unchecked), Disabled, Disabled & checked; heading copy "Checkbox #7"
      kept verbatim from the reference
- [ ] Signature "overflow" effect: checked tick overflows the box top edge +
      white diagonal mask notches the border (keep BOTH pseudoelements'
      geometry: tick `top: -6px; left: 5px`, mask `top: -4px; left: 5px`,
      45° rotation)
- [ ] Tick animates in over ≈0.3s (rotate 90°→45°, scale 0→1)
- [ ] Disabled rows cannot toggle; enabled rows toggle by click and Space
- [ ] Accessible: visually-hidden-but-focusable native input + label
      (accessible name = label text) — the source's `display: none` is
      deliberately replaced with the repo visually-hidden pattern; add a
      focus-visible ring (source has none)
- [ ] No copied assets, no icon font (pure CSS tick + white mask bar)
- [ ] Footer: minimal, links https://www.componentdock.com/ (repo mandate —
      the demo itself has no footer)
- [ ] `TEMPLATES.md` line 747 updated by the implementer (`[~]` → `[x]` +
      surge URL) — NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
