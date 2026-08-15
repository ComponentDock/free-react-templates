# Template: Quadly (Bootstrap Checkbox States Demo)

## Purpose

Quadly is a single-page UI-component demo template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 11"
Bootstrap component template design
(source: https://colorlib.com/wp/template/checkbox-11/), built under a
DIFFERENT name (**Quadly** — "quad" for the four checkbox states the demo
showcases + the "-ly" suffix used across this Checkbox series; per the
monorepo naming mandate — never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a tiny, self-contained demo: a white page with a centered
narrow column containing a dark heading "BS4 Custom Checkbox #1" and four
stacked Bootstrap 4 custom checkboxes that demonstrate every checkbox state:
one checked, one unchecked, one disabled, and one disabled-and-checked. This
is the default-styled BS4 `custom-control custom-checkbox` demo — the first of
the "BS4 Custom Checkbox #N" sub-series (the eleventh of the "Bootstrap
Checkboxes (20)" catalog series).

> NAMING NOTE: the ColorLib source name "Checkbox 11" is FORBIDDEN as the app
> name. **Quadly** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-15; note `quad` IS taken by another template,
> `quadly` is free). Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Checkbox 11" — the eleventh of the "Bootstrap
  Checkboxes (20)" series in TEMPLATES.md (line 741 — mark that line `[x]`
  when done; single row, no duplicate rows). Sibling items Checkbox 01–10
  were prepped as Tickbox / Picks / Ticktag / Checkly / Tickwell / Toggly /
  Switchly / Soluna / Taskly / Moodly. **NUMBERING QUIRK (verified
  2026-08-15):** the preview server hosts TWO distinct sub-series. Entries
  01–10 map to `/theme/bootstrap/checkbox-01/`…`/checkbox-10/` and serve the
  custom designs branded "Checkbox #01"…"#10" (Tickbox's 6 colored checkboxes,
  Taskly's strikethrough checklist, Moodly's smiley mood-toggle, etc.).
  Entries 11–20 map to `/theme/bootstrap/checkbox-11/`…`/checkbox-20/` and
  serve a SEPARATE sub-series of codrops-sourced demos branded "BS4 Custom
  Checkbox #1"…"#9" (checkbox-11 → "BS4 Custom Checkbox #1", checkbox-12 →
  "#2", … checkbox-19 → "#9", checkbox-20 → duplicate "#9"). So entry
  "Checkbox 11" = the demo branded "BS4 Custom Checkbox #1". It is a
  DIFFERENT design from Tickbox (Checkbox 01) — do NOT reuse the Tickbox app
  blindly; this variant is the plain 4-state default BS4 checkbox group.
- **Preview URL caveat:** the naive pattern
  `https://preview.colorlib.com/theme/checkbox-11/` returns **HTTP 404**.
  These "Checkbox NN" demos are sub-pages of ColorLib's big Bootstrap theme,
  so the real live preview is
  `https://preview.colorlib.com/theme/bootstrap/checkbox-11/`
  (HTTP 200, 17 KB HTML, verified 2026-08-15). The ColorLib template page
  (https://colorlib.com/wp/template/checkbox-11/) links this exact sub-path.
  Page stylesheet (small, page-specific):
  `https://preview.colorlib.com/theme/bootstrap/checkbox-11/css/style.css`
  (771 bytes — body/font/heading overrides). The checkbox widget styling
  comes from Bootstrap 4's `css/bootstrap.min.css` (216 KB — the
  `.custom-control` / `.custom-checkbox` classes; tokens extracted below).
  libs: bootstrap 4, jquery, popper. **Google Font Roboto** (body + headings
  via the page stylesheet's font stack — NOT Poppins; this sub-series page
  loads its own small stylesheet). `js/main.js` (354 bytes) is an unused
  accordion helper (no accordion exists on this page) — nothing to replicate.
  Cross-checked against the TEMPLATES.md screenshot (`checkbox-11.jpg`,
  1200×972, browser-viewed 2026-08-15) — the screenshot matches the live DOM
  exactly: heading "BS4 Custom Checkbox #1" + the four 4-state checkboxes
  (the screenshot's browser chrome shows the demo's codrops origin,
  `ui-preview.codrops.com`, confirming this sub-series is codrops-sourced).
  The demo brands itself "BS4 Custom Checkbox #1"; the recreation uses the
  NEW name **Quadly**.
- **Visual design (from DOM + CSS tokens + screenshot):** clean, minimalist
  demo page on a white background (page stylesheet `body { background-color:
#fff }`; renders near-white/off-white in the screenshot). Centered narrow
  column (`div.content` 7rem vertical padding → `div.container` →
  `div.row.justify-content-center` → `div.col-lg-3`, ≈25% of the container on
  lg+ screens, full-width below lg) containing an `h2.my-5.text-left`
  heading "BS4 Custom Checkbox #1" (20px, dark, left-aligned within the
  centered column, 3rem top+bottom margins) followed by FOUR stacked
  Bootstrap 4 `custom-control custom-checkbox` rows (each a 16px rounded
  square indicator + label):
  1. **First checkbox** — `id="checked"`, `checked`, enabled → solid
     Bootstrap blue `#007bff` square with a white checkmark.
  2. **Second checkbox** — `id="unchecked"`, unchecked, enabled → white
     square with a 1px `#adb5bd` gray border.
  3. **Disabled** — `id="disabled"`, `disabled`, unchecked → light-gray
     `#e9ecef` square with a gray border, label text gray `#6c757d`.
  4. **Disabled & checked** — `id="disabled-checked"`, `disabled` + `checked`
     → faded-blue `rgba(0,123,255,0.5)` square with a faint white checkmark,
     label text gray `#6c757d`.
     No navbar, no footer, no images — pure form-component typography.
- **Section order (1:1, from live demo DOM):**
  1. `div.content` (padding 7rem 0 = 112px vertical) → `div.container`
     (Bootstrap container, centered, max-width ~1140px):
  2. `div.row.justify-content-center` → `div.col-lg-3` (≈25% column on lg+,
     centered; full-width below lg) — page has no other wrapper sections.
  3. `h2.my-5.text-left` "BS4 Custom Checkbox #1" (20px, `#000`-ish dark,
     `my-5` = 3rem top AND bottom margins).
  4. Four `div.custom-control.custom-checkbox` rows, each:
     `<input type="checkbox" class="custom-control-input" id="…">` +
     `<label class="custom-control-label" for="…">Text</label>`, stacked
     vertically (no gap between rows; each row min-height 1.5rem).
     The demo page has NO navbar and NO footer — just this single section.
- **JS behaviors (original):** none relevant — the inputs are native BS4
  custom controls (pure CSS; state comes from the `checked` / `disabled`
  attributes). `js/main.js` is an unused accordion helper. In React, model
  rows 1–2 as controlled checkbox state (checked by default for row 1),
  rows 3–4 as static `disabled` inputs; styling via Tailwind conditional
  classes with the reference's 0.15s ease-in-out transition on the indicator.

## Design tokens (verified from live stylesheet `css/bootstrap.min.css`)

- **Brand colors:**
  - `#007bff` — Bootstrap 4 primary blue, THE brand accent: the CHECKED
    indicator background + border (`.custom-control-input:checked ~
.custom-control-label::before { border-color: #007bff; background-color:
#007bff }`).
  - `#fff` — page background (`body { background-color: #fff }`, page
    stylesheet) and the unchecked indicator fill; white checkmark glyph.
  - `#adb5bd` — gray, the UNCHECKED indicator border (`border: #adb5bd solid
1px`).
  - `#e9ecef` — light gray, the DISABLED indicator background
    (`.custom-control-input:disabled ~ .custom-control-label::before`).
  - `#6c757d` — gray, the DISABLED label text color
    (`.custom-control-input:disabled ~ .custom-control-label { color:
#6c757d }`).
  - `rgba(0,123,255,0.5)` — 50% alpha blue, the DISABLED+CHECKED indicator
    background (`.custom-control-input:disabled:checked ~
.custom-control-label::before`).
  - `#80bdff` — light blue, the UNCHECKED focus border; `#b3d7ff` the
    ACTIVE (pressed) indicator background/border; focus ring
    `rgba(0,123,255,0.25)` (0 0 0 0.2rem box-shadow).
- **Fonts:** **Roboto** (body + headings; page stylesheet stack `"Roboto",
-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
Arial, "Noto Sans", sans-serif`) — load via Google Fonts `<link>` in
  `index.html` (regular 400 + medium 500). Heading "BS4 Custom Checkbox #1"
  20px (page stylesheet `h2 { font-size: 20px }`); checkbox labels inherit
  body size (16px default).
- **Widget anatomy (`.custom-control`, from bootstrap.min.css):**
  - `.custom-control`: `position: relative; display: block; min-height:
1.5rem; padding-left: 1.5rem` — the row; indicator occupies the 1.5rem
    left padding slot.
  - `.custom-control-input`: `position: absolute; z-index: -1; opacity: 0`
    (visually hidden, still focusable + label-wired).
  - `.custom-control-label`: `position: relative; margin-bottom: 0;
vertical-align: top` — label text sits to the right of the indicator.
  - Indicator `.custom-control-label::before`: `position: absolute; top:
0.25rem; left: -1.5rem; width: 1rem; height: 1rem` (16×16px),
    `background-color: #fff; border: #adb5bd solid 1px`; `border-radius:
0.25rem` (4px, via `.custom-checkbox .custom-control-label::before`).
  - Checkmark `.custom-control-label::after`: same 1rem box, `background:
no-repeat 50% / 50% 50%`; CHECKED →
    `background-image: url("data:image/svg+xml,… path fill='%23fff'
d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z' …")` —
    a white checkmark occupying the center 50% of the indicator.
  - CHECKED: `:checked ~ .custom-control-label::before { color: #fff;
border-color: #007bff; background-color: #007bff }`.
  - DISABLED: label color `#6c757d`; indicator background `#e9ecef`;
    DISABLED+CHECKED indicator background `rgba(0,123,255,0.5)`.
  - FOCUS: `:focus ~ .custom-control-label::before { box-shadow: 0 0 0
0.2rem rgba(0,123,255,0.25) }`; unchecked focus border `#80bdff`.
  - ACTIVE: `:not(:disabled):active ~ .custom-control-label::before { color:
#fff; background-color: #b3d7ff; border-color: #b3d7ff }`.
  - Transition: `background-color 0.15s ease-in-out, border-color 0.15s
ease-in-out, box-shadow 0.15s ease-in-out` on indicator + label;
    `@media (prefers-reduced-motion: reduce)` suppresses all transitions
    (state still flips).
- **Radii:** `0.25rem` (4px) — the checkbox indicator corner radius.
- **Spacing rhythm:** section padding `7rem 0` (≈112px); heading `my-5`
  (3rem top AND bottom margins); centered column `col-lg-3` (≈25% of the
  1140px container on lg+ screens, full-width below lg); each checkbox row
  `min-height: 1.5rem` with `padding-left: 1.5rem` (indicator slot) and no
  gap between stacked rows; label margin-bottom 0.
- **Icons:** the checkmark is a white SVG path (~50% of the 16px indicator,
  i.e. ~8px) — reproduce with lucide-react `Check` (strokeWidth ~3,
  ~10–12px, white) sized/positioned to fill the indicator's center; NOT
  font-awesome (repo convention). Verify the `Check` export with the typeof
  probe before shipping.
- **No images** in this template — pure form-component typography, so no
  picsum seeds are needed.

## Requirements

### Requirement: Demo section with heading

The system SHALL render a single centered demo section with the dark heading
"BS4 Custom Checkbox #1" on a white background.

#### Scenario: Section and heading

- **GIVEN** the Quadly page is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show one section with generous vertical padding
  (≈112px top and bottom)
- **AND** the section SHALL show the heading "BS4 Custom Checkbox #1" in
  dark text (20px) on the white background
- **AND** the heading SHALL carry ≈3rem top and bottom margins (the
  reference's `my-5`)
- **AND** the content SHALL be confined to a centered narrow column
  (≈25% of the container on lg+ screens, matching the reference `col-lg-3`)

### Requirement: Four checkbox rows with exact states

The system SHALL render exactly four stacked Bootstrap-style checkbox rows,
in this order, with these labels and states: "First checkbox" (checked),
"Second checkbox" (unchecked), "Disabled" (unchecked + disabled), "Disabled &
checked" (checked + disabled).

#### Scenario: Rows, labels and states

- **GIVEN** the Quadly page is rendered
- **WHEN** the user views the centered column
- **THEN** exactly four checkbox rows SHALL appear stacked vertically under
  the heading (no gap between rows)
- **AND** the first row SHALL be labeled "First checkbox" and SHALL be
  checked and enabled
- **AND** the second row SHALL be labeled "Second checkbox" and SHALL be
  unchecked and enabled
- **AND** the third row SHALL be labeled "Disabled" and SHALL be unchecked
  and disabled
- **AND** the fourth row SHALL be labeled "Disabled & checked" and SHALL be
  checked and disabled
- **AND** each row SHALL expose a real checkbox input visually hidden but
  label-associated with its visible label text

### Requirement: Indicator styling per state

Each row SHALL render the reference 16px rounded-square indicator: checked =
solid `#007bff` blue with a white checkmark; unchecked = white with a 1px
`#adb5bd` border; disabled = `#e9ecef` gray fill with `#6c757d` label text;
disabled+checked = `rgba(0,123,255,0.5)` faded blue with a white checkmark
and `#6c757d` label text.

#### Scenario: Checked indicator

- **GIVEN** the "First checkbox" row is rendered
- **WHEN** the row is checked
- **THEN** the indicator SHALL be a 16×16px square with 4px corner radius
  filled solid `#007bff`
- **AND** a white checkmark SHALL appear in the indicator's center (~8px)

#### Scenario: Unchecked indicator

- **GIVEN** the "Second checkbox" row is rendered unchecked
- **WHEN** the user views the row
- **THEN** the indicator SHALL be a white 16×16px square with a 1px solid
  `#adb5bd` border and no checkmark

#### Scenario: Disabled indicators

- **GIVEN** the "Disabled" and "Disabled & checked" rows are rendered
- **WHEN** the user views them
- **THEN** both SHALL be visually muted: the "Disabled" indicator SHALL be
  filled `#e9ecef` and the "Disabled & checked" indicator SHALL be filled
  `rgba(0,123,255,0.5)` with a faint white checkmark
- **AND** both labels SHALL be gray `#6c757d`

### Requirement: Toggle interaction (enabled rows)

Clicking or keyboard-activating an enabled row SHALL toggle its checked
state, flipping the indicator between the blue+checkmark and white+gray-border
appearances with the reference 0.15s ease-in-out transition.

#### Scenario: Click toggles a row

- **GIVEN** the "Second checkbox" row is rendered unchecked
- **WHEN** the user clicks its label
- **THEN** the row SHALL become checked — the indicator SHALL flip to solid
  `#007bff` with a white checkmark, with the reference 0.15s ease-in-out
  transition
- **AND** clicking again SHALL uncheck it, flipping back to white with the
  `#adb5bd` border (toggle semantics)
- **AND** the "First checkbox" row SHALL toggle symmetrically the other way
  (checked → unchecked)

#### Scenario: Focus ring

- **GIVEN** an enabled row is rendered
- **WHEN** the user focuses its hidden checkbox input (Tab or click)
- **THEN** the indicator SHALL show the reference focus treatment — a
  `rgba(0,123,255,0.25)` ring (0 0 0 0.2rem box-shadow) and the unchecked
  focus border `#80bdff` (repo accessibility convention, matching BS4)

#### Scenario: Reduced motion

- **GIVEN** the page is rendered with `prefers-reduced-motion: reduce`
- **WHEN** an enabled row is toggled
- **THEN** the state change SHALL still occur instantly with the transition
  suppressed

### Requirement: Disabled rows stay inert

The "Disabled" and "Disabled & checked" rows SHALL carry the `disabled`
attribute: they SHALL NOT toggle on click or keyboard, SHALL NOT receive
focus, and SHALL remain in their rendered visual states.

#### Scenario: Disabled rows do not toggle

- **GIVEN** the "Disabled" row is rendered disabled and unchecked
- **WHEN** the user clicks its label or attempts to focus/activate its input
- **THEN** the row SHALL remain unchecked
- **AND** the "Disabled & checked" row SHALL remain checked under the same
  interaction attempts
- **AND** neither SHALL show a focus ring

### Requirement: Responsive behavior

The system SHALL adapt the centered column for smaller viewports.

#### Scenario: Mobile layout (<992px)

- **GIVEN** the Quadly page is rendered on a viewport below the `lg` breakpoint
- **WHEN** the page is displayed
- **THEN** the column SHALL fill the viewport width (the `col-lg-3` centering
  collapses to full width, matching Bootstrap's behavior)
- **AND** section padding SHALL reduce gracefully for mobile (the reference's
  `7rem` is large; scale down per repo conventions)

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Quadly page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded as
  "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so it
  does not disturb the minimal reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-quadly`
- [ ] `scripts/verify-app.sh quadly` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with reference): centered heading "BS4 Custom
      Checkbox #1" (20px, dark, ≈3rem top/bottom margins) → four stacked
      checkbox rows (First checkbox checked / Second checkbox unchecked /
      Disabled / Disabled & checked) → minimal Component Dock footer
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#fff` page,
      `#007bff` checked indicator, `#adb5bd` unchecked border,
      `#e9ecef` + `#6c757d` disabled, `rgba(0,123,255,0.5)` disabled+checked,
      `#80bdff`/`rgba(0,123,255,0.25)` focus, `#b3d7ff` active
- [ ] Font: Roboto via Google Fonts `<link>` in `index.html` (this sub-series
      uses Roboto, NOT Poppins); title "Quadly — Checkbox States" (or similar)
- [ ] Checkmark: lucide-react `Check` (white, ~10–12px) centered in the
      16px indicator — NOT font-awesome (repo convention); probe the export
      with the typeof check before shipping; no copied assets
- [ ] No images (pure CSS widget — faithful); no picsum seeds needed
- [ ] Real visually-hidden checkbox inputs (`opacity-0`/`sr-only`, focusable +
      label-associated); "First checkbox" checked by default; enabled rows
      toggle with the reference 0.15s ease-in-out transition; disabled rows
      carry `disabled` and stay inert; focus-visible ring matches the
      reference `rgba(0,123,255,0.25)` glow; honors `prefers-reduced-motion`
- [ ] NOT the Tickbox design (6 colored checkboxes), NOT the Taskly
      strikethrough checklist, NOT the Moodly smiley mood-toggle — this
      variant is the plain 4-state default BS4 custom checkbox group
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark the "Checkbox 11" row, line 741 —
      Bootstrap Checkboxes category, single row, no duplicates)
