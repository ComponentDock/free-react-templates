# Template: Duo (Bootstrap Checkbox States Demo)

## Purpose

Duo is a single-page UI-component demo template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 12"
Bootstrap component template design
(source: https://colorlib.com/wp/template/checkbox-12/), built under a
DIFFERENT name (**Duo** — "duo" for the SECOND entry ("Checkbox #2") of the
"BS4 Custom Checkbox" sub-series the demo belongs to, a pair/two connotation;
per the monorepo naming mandate — never reuse the ColorLib source name), with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a tiny, self-contained demo: a white page with a centered
narrow column containing a dark heading "Checkbox #2" and four stacked
CSS-only custom checkboxes that demonstrate every checkbox state: one checked,
one unchecked, one disabled, and one disabled-and-checked. The widget is the
classic **codrops "Custom Checkbox" pattern** (`label.control.control--checkbox`

- `div.control__indicator` — a pure-CSS custom checkbox driven by sibling
  selectors), NOT Bootstrap's `custom-control` widget.

> NAMING NOTE: the ColorLib source name "Checkbox 12" is FORBIDDEN as the app
> name. **Duo** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-15). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Checkbox 12" — the twelfth of the "Bootstrap
  Checkboxes (20)" series in TEMPLATES.md (line 742 — mark that line `[x]`
  when done; single row, no duplicate rows). Sibling items Checkbox 01–10
  were prepped as Tickbox / Picks / Ticktag / Checkly / Tickwell / Toggly /
  Switchly / Soluna / Taskly / Moodly; Checkbox 11 was prepped as Quadly.
  **NUMBERING QUIRK (verified 2026-08-15):** the preview server hosts TWO
  distinct sub-series. Entries 01–10 map to `/theme/bootstrap/checkbox-01/`…
  `/checkbox-10/` and serve custom designs branded "Checkbox #01"…"#10".
  Entries 11–20 map to `/theme/bootstrap/checkbox-11/`…`/checkbox-20/` and
  serve a SEPARATE sub-series of codrops-sourced demos branded
  "BS4 Custom Checkbox #1"…"#9" — BUT each entry is its OWN demo with its own
  heading and widget. **Checkbox 11 → "BS4 Custom Checkbox #1" uses
  Bootstrap's `custom-control custom-checkbox` widget (Quadly). Checkbox 12 →
  "Checkbox #2" (this template) uses the DIFFERENT codrops `.control`
  custom-checkbox widget — do NOT reuse the Quadly app/component; the widget
  anatomy, sizes (20px indicators), spacing (15px row gap) and the icomoon
  checkmark differ.** Verify each entry's DOM individually before assuming
  any two are identical.
- **Preview URL caveat:** the naive pattern
  `https://preview.colorlib.com/theme/checkbox-12/` returns **HTTP 404**.
  These "Checkbox NN" demos are sub-pages of ColorLib's big Bootstrap theme,
  so the real live preview is
  `https://preview.colorlib.com/theme/bootstrap/checkbox-12/`
  (HTTP 200, 16,837 bytes, verified 2026-08-15). The ColorLib template page
  (https://colorlib.com/wp/template/checkbox-12/) links this exact sub-path.
  Page stylesheet (page-specific):
  `https://preview.colorlib.com/theme/bootstrap/checkbox-12/css/style.css`
  (2,217 bytes — body/font/heading overrides + the whole `.control` widget
  CSS). The page ALSO links `css/bootstrap.min.css` (216 KB),
  `css/owl.carousel.min.css` and `fonts/icomoon/style.css`, but the body uses
  NONE of Bootstrap's widget classes and zero `owl-`/`icon-` classes — the
  shell loads them for the surrounding ColorLib theme; only `style.css`
  styles this demo (plus the icomoon glyph `\e5ca` used as the checkmark).
  Scripts: `js/jquery-3.3.1.min.js`, `js/popper.min.js`,
  `js/bootstrap.min.js`, `js/main.js` (theme-shell scripts; NO page-specific
  JS — the checkboxes are pure CSS via `:checked` / `:disabled` sibling
  selectors). Cross-checked against the TEMPLATES.md screenshot
  (`checkbox-12.jpg`, 1200×972, browser-viewed 2026-08-15) — the screenshot
  matches the live DOM exactly: heading "Checkbox #2" + the four 4-state
  checkboxes (the screenshot's browser chrome shows a component-preview
  origin, confirming this sub-series is codrops-sourced). The demo brands
  itself "Checkbox #2"; the recreation uses the NEW name **Duo**.
- **Visual design (from DOM + CSS tokens + screenshot):** clean, minimalist
  demo page on a solid white background (`body { background-color: #fff }`).
  Centered narrow column (`div.content` 7rem vertical padding →
  `div.container.text-left` → `div.row.justify-content-center` →
  `div.col-lg-3`, ≈25% of the container on lg+ screens, full-width below lg)
  containing an `h2.my-5.text-left` heading "Checkbox #2" (20px, dark,
  left-aligned within the centered column, 3rem top+bottom margins) followed
  by FOUR stacked codrops custom-checkbox rows (each a 20×20px square
  indicator + label):
  1. **First checkbox** — `checked`, enabled → solid Bootstrap blue `#007bff`
     square with a white checkmark.
  2. **Second checkbox** — unchecked, enabled → light-gray `#e6e6e6` square
     (no border).
  3. **Disabled** — `disabled`, unchecked → `#e6e6e6` square at 60% opacity
     (`opacity: 0.6`), `pointer-events: none`.
  4. **Disabled & checked** — `disabled` + `checked` → `#007bff` square at
     20% opacity (`opacity: .2`) with the white checkmark.
     Hover/focus: indicator turns `#ccc` (any row); checked+hover/focus turns
     `#1a88ff`. No navbar, no footer, no images — pure form-component typography.
- **Section order (1:1, from live demo DOM):**
  1. `div.content` (padding 7rem 0 = 112px vertical) → `div.container.text-left`
     (Bootstrap container, centered, max-width ~1140px):
  2. `div.row.justify-content-center` → `div.col-lg-3` (≈25% column on lg+,
     centered; full-width below lg) — page has no other wrapper sections.
  3. `h2.my-5.text-left` "Checkbox #2" (20px, dark, `my-5` = 3rem top AND
     bottom margins).
  4. Four stacked `label.control.control--checkbox` rows, each:
     `<label>Text<input type="checkbox" …/><div class="control__indicator"></div></label>`
     — the label wraps BOTH the visually-hidden input and the indicator div.
     Row order/labels: "First checkbox" (checked), "Second checkbox"
     (unchecked), "Disabled" (disabled), "Disabled & checked" (disabled +
     checked). 15px margin between rows (`.control { margin-bottom: 15px }`).
     The demo page has NO navbar and NO footer — just this single section.
- **JS behaviors (original):** none — the widget is pure CSS (state comes
  from the `checked` / `disabled` attributes via sibling selectors;
  `js/main.js` is an unused theme-shell accordion helper). In React, model
  rows 1–2 as controlled checkbox state (checked by default for row 1),
  rows 3–4 as static `disabled` inputs; styling via Tailwind conditional
  classes.

## Design tokens (verified from live stylesheet `css/style.css`)

- **Brand colors:**
  - `#007bff` — Bootstrap 4 primary blue, THE brand accent: the CHECKED
    indicator background (`.control input:checked ~ .control__indicator {
background: #007bff }`).
  - `#fff` — page background (`body { background-color: #fff }`) and the
    white checkmark glyph.
  - `#e6e6e6` — light gray, the UNCHECKED and DISABLED indicator background
    (`.control__indicator { background: #e6e6e6 }`; disabled rows add
    `opacity: 0.6`).
  - `#ccc` — gray, the HOVER/FOCUS indicator background
    (`.control:hover input ~ .control__indicator, .control input:focus ~
.control__indicator { background: #ccc }`).
  - `#1a88ff` — lighter blue, the CHECKED hover/focus indicator background
    (`.control:hover input:not([disabled]):checked ~ .control__indicator,
.control input:checked:focus ~ .control__indicator { background: #1a88ff }`).
  - DISABLED+CHECKED: same `#007bff` background at `opacity: .2`
    (`.control--checkbox input:disabled:checked ~ .control__indicator {
background-color: #007bff; opacity: .2 }`).
- **Fonts:** **Roboto** (body + headings; `style.css` stack `"Roboto",
-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
Arial, "Noto Sans", sans-serif, …`) — load via Google Fonts `<link>` in
  `index.html` (regular 400 + medium 500). Heading "Checkbox #2" 20px
  (`h2 { font-size: 20px }`); checkbox labels 18px
  (`.control { font-size: 18px }`).
- **Widget anatomy (`.control`, from style.css):**
  - `.control`: `display: block; position: relative; padding-left: 30px;
margin-bottom: 15px; cursor: pointer; font-size: 18px` — the row; the
    30px left padding is the indicator slot.
  - `.control input`: `position: absolute; z-index: -1; opacity: 0`
    (visually hidden, still focusable + label-wired).
  - `.control__indicator`: `position: absolute; top: 2px; left: 0; height:
20px; width: 20px; background: #e6e6e6` — a 20×20px square, NO border,
    NO corner radius (the `--radio` variant gets `border-radius: 50%`, but
    this template is `--checkbox` = square).
  - Checkmark `.control__indicator:after`: `font-family: 'icomoon';
content: '\e5ca'; position: absolute; display: none` — shown only when
    checked (`.control input:checked ~ .control__indicator:after { display:
block; color: #fff }`), centered via
    `top: 50%; left: 50%; transform: translate(-50%, -52%)`.
  - CHECKED: indicator background `#007bff`.
  - DISABLED: indicator stays `#e6e6e6` with `opacity: 0.6` +
    `pointer-events: none`; DISABLED+CHECKED indicator `#007bff` at
    `opacity: .2` (checkmark still white).
  - HOVER/FOCUS: unchecked/focus → `#ccc`; checked hover/focus → `#1a88ff`.
  - No transition on the indicator (unlike Bootstrap's custom-control) —
    state flips instantly.
- **Radii:** none — the checkbox indicator is a sharp 20×20px square.
- **Spacing rhythm:** section padding `7rem 0` (≈112px); heading `my-5`
  (3rem top AND bottom margins); centered column `col-lg-3` (≈25% of the
  1140px container on lg+ screens, full-width below lg); each checkbox row
  `margin-bottom: 15px` (last row included), `padding-left: 30px` (indicator
  slot), indicator `top: 2px` offset; label text 18px.
- **Icons:** the checkmark is the icomoon glyph `\e5ca` (a check) rendered
  white at the indicator's center (~50% of the 20px square, i.e. ~10px) —
  reproduce with lucide-react `Check` (strokeWidth ~3, ~12px, white)
  sized/positioned to fill the indicator's center; NOT font-awesome / NOT
  icomoon (repo convention — never copy assets). Verify the `Check` export
  with the typeof probe before shipping.
- **No images** in this template — pure form-component typography, so no
  picsum seeds are needed.

## Requirements

### Requirement: Demo section with heading

The system SHALL render a single centered demo section with the dark heading
"Checkbox #2" on a white background.

#### Scenario: Section and heading

- **GIVEN** the Duo page is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show one section with generous vertical padding
  (≈112px top and bottom)
- **AND** the section SHALL show the heading "Checkbox #2" in dark text
  (20px) on the white background
- **AND** the heading SHALL carry ≈3rem top and bottom margins (the
  reference's `my-5`)
- **AND** the content SHALL be confined to a centered narrow column
  (≈25% of the container on lg+ screens, matching the reference `col-lg-3`)

### Requirement: Four checkbox rows with exact states

The system SHALL render exactly four stacked custom-checkbox rows, in this
order, with these labels and states: "First checkbox" (checked), "Second
checkbox" (unchecked), "Disabled" (unchecked + disabled), "Disabled & checked"
(checked + disabled). Each row SHALL be a label-wrapped control with a
visually-hidden real checkbox input and a 20×20px square indicator (no border,
no radius).

#### Scenario: Four rows render in order with correct labels

- **GIVEN** the Duo page is rendered
- **THEN** exactly four checkbox rows SHALL appear stacked vertically under
  the heading, with 15px between rows
- **AND** the first row SHALL be labeled "First checkbox" and SHALL be
  checked
- **AND** the second row SHALL be labeled "Second checkbox" and SHALL be
  unchecked
- **AND** the third row SHALL be labeled "Disabled" and SHALL be unchecked
  and disabled
- **AND** the fourth row SHALL be labeled "Disabled & checked" and SHALL be
  checked and disabled
- **AND** each row SHALL expose a real checkbox input visually hidden but
  focusable and label-associated

#### Scenario: Indicator colors per state

- **GIVEN** the four checkbox rows are rendered
- **THEN** the checked row's indicator SHALL be Bootstrap blue `#007bff` with
  a white checkmark
- **AND** the unchecked row's indicator SHALL be light gray `#e6e6e6` with no
  checkmark
- **AND** the disabled row's indicator SHALL be light gray `#e6e6e6` at 60%
  opacity with no checkmark
- **AND** the disabled-and-checked row's indicator SHALL be `#007bff` at 20%
  opacity with a white checkmark

### Requirement: Checkbox interaction

The system SHALL toggle the first two rows on click (matching the reference's
enabled checkboxes), keep rows 3–4 permanently disabled, and SHALL show the
hover/focus indicator colors.

#### Scenario: Toggling enabled rows

- **GIVEN** the "First checkbox" row is rendered checked
- **WHEN** the user clicks the "First checkbox" label
- **THEN** the row SHALL become unchecked and its indicator SHALL switch from
  `#007bff` to `#e6e6e6`
- **AND** the checkmark SHALL disappear

- **GIVEN** the "Second checkbox" row is rendered unchecked
- **WHEN** the user clicks the "Second checkbox" label
- **THEN** the row SHALL become checked and its indicator SHALL switch to
  `#007bff` with the white checkmark

#### Scenario: Disabled rows ignore interaction

- **GIVEN** the "Disabled" and "Disabled & checked" rows are rendered
- **WHEN** the user clicks either disabled label
- **THEN** the row state SHALL NOT change

#### Scenario: Hover and focus indicator colors

- **GIVEN** any enabled checkbox row is rendered
- **WHEN** the user hovers it (or focuses its hidden input via Tab/click)
- **THEN** the indicator SHALL turn `#ccc` when unchecked
- **AND** the indicator SHALL turn `#1a88ff` when checked
- **AND** the state colors SHALL return when hover/focus leaves

### Requirement: No navbar, no footer, no images

The demo SHALL be a single self-contained section with no navbar, no footer,
and no images (matching the reference).

#### Scenario: Minimal single-section page

- **GIVEN** the Duo page is rendered
- **THEN** the page SHALL NOT contain a navbar
- **AND** the page SHALL NOT contain a footer
- **AND** the page SHALL NOT load any images

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-duo`
- [ ] Heading "Checkbox #2" (20px dark text, `my-5` margins, centered narrow
      column ≈25% on lg+)
- [ ] Four rows in exact order: First checkbox (checked) / Second checkbox
      (unchecked) / Disabled / Disabled & checked — labels verbatim
- [ ] Real focusable checkbox inputs, visually hidden (`sr-only`/opacity-0),
      label-wrapped like the reference (label wraps text + input + indicator)
- [ ] Indicator: 20×20px square, `#e6e6e6` unchecked, `#007bff` checked,
      white checkmark; disabled = `opacity-0.6`, disabled+checked = blue at
      20% opacity
- [ ] Hover/focus: `#ccc` unchecked, `#1a88ff` checked
- [ ] Row spacing 15px, indicator slot 30px left padding, indicator top 2px
- [ ] 100% coverage (lines/functions/branches/statements) in
      `apps/duo/src/**` tests
- [ ] Footer links https://www.componentdock.com/ (repo mandate) — see
      docs/conventions.md; no ColorLib references in app code
- [ ] `public/CNAME` = `duo.free.componentdock.com`, homepage
      `https://duo.free.componentdock.com`
