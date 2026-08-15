# Template: Trio (Bootstrap Checkbox States Demo — Round Variant)

## Purpose

Trio is a single-page UI-component demo template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 13"
Bootstrap component template design
(source: https://colorlib.com/wp/template/checkbox-13/), built under a
DIFFERENT name (**Trio** — "trio" for the THIRD entry ("Checkbox #3") of the
"BS4 Custom Checkbox" sub-series the demo belongs to, a group-of-three
connotation; per the monorepo naming mandate — never reuse the ColorLib source
name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a tiny, self-contained demo: a white page with a centered
narrow column containing a dark heading "Checkbox #3" and four stacked
CSS-only custom checkboxes that demonstrate every checkbox state: one checked,
one unchecked, one disabled, and one disabled-and-checked. The widget is the
classic **codrops "Custom Checkbox" pattern** (`label.control.control--checkbox`

- `div.control__indicator` — a pure-CSS custom checkbox driven by sibling
  selectors), NOT Bootstrap's `custom-control` widget. **Unlike sibling
  Checkbox 12 (Duo), the indicator here is a ROUND circle
  (`border-radius: 50%` + drop shadow), the checked color is CORAL
  `#f67280` (not Bootstrap blue `#007bff`), and the checkmark is 14px with a
  `.3s` fade-in transition — see Design reference for the full diff.**

> NAMING NOTE: the ColorLib source name "Checkbox 13" is FORBIDDEN as the app
> name. **Trio** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-15). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Checkbox 13" — the thirteenth of the "Bootstrap
  Checkboxes (20)" series in TEMPLATES.md (line 743 — mark that line `[x]`
  when done; single row, no duplicate rows). Sibling items Checkbox 01–10
  were prepped as Tickbox / Picks / Ticktag / Checkly / Tickwell / Toggly /
  Switchly / Soluna / Taskly / Moodly; Checkbox 11 as Quadly; Checkbox 12 as
  Duo.
  **NUMBERING QUIRK (verified 2026-08-15):** the preview server hosts TWO
  distinct sub-series. Entries 01–10 map to `/theme/bootstrap/checkbox-01/`…
  `/checkbox-10/` and serve custom designs branded "Checkbox #01"…"#10".
  Entries 11–20 map to `/theme/bootstrap/checkbox-11/`…`/checkbox-20/` and
  serve a SEPARATE sub-series of codrops-sourced demos — each entry is its
  OWN demo with its own heading and widget. **Checkbox 11 → "BS4 Custom
  Checkbox #1" uses Bootstrap's `custom-control custom-checkbox` widget
  (Quadly). Checkbox 12 → "Checkbox #2" uses the codrops `.control` widget
  with SQUARE 20×20px indicators and Bootstrap blue `#007bff` (Duo).
  Checkbox 13 → "Checkbox #3" (THIS template) uses the SAME codrops `.control`
  widget BUT with ROUND indicators (`border-radius: 50%`), a `0 1px 2px`
  drop shadow, and the coral brand color `#f67280` — verify each entry's DOM
  individually before assuming any two are identical.**
- **Preview URL caveat:** the naive pattern
  `https://preview.colorlib.com/theme/checkbox-13/` returns **HTTP 404**.
  These "Checkbox NN" demos are sub-pages of ColorLib's big Bootstrap theme,
  so the real live preview is
  `https://preview.colorlib.com/theme/bootstrap/checkbox-13/`
  (HTTP 200, 16,837 bytes, verified 2026-08-15). The ColorLib template page
  (https://colorlib.com/wp/template/checkbox-13/) links this exact sub-path.
  Page stylesheet (page-specific):
  `https://preview.colorlib.com/theme/bootstrap/checkbox-13/css/style.css`
  (2,453 bytes — body/font/heading overrides + the whole `.control` widget
  CSS). The page ALSO links `css/bootstrap.min.css` (216 KB),
  `css/owl.carousel.min.css` and `fonts/icomoon/style.css`, but the body uses
  NONE of Bootstrap's widget classes and zero `owl-`/`icon-` classes — the
  shell loads them for the surrounding ColorLib theme; only `style.css`
  styles this demo (plus the icomoon glyph `\e5ca` used as the checkmark).
  Scripts: `js/jquery-3.3.1.min.js`, `js/popper.min.js`,
  `js/bootstrap.min.js`, `js/main.js` (theme-shell scripts; NO page-specific
  JS — the checkboxes are pure CSS via `:checked` / `:disabled` sibling
  selectors). Cross-checked against the TEMPLATES.md screenshot
  (`checkbox-13.jpg`, 1200×972, browser-viewed 2026-08-15) — the screenshot
  matches the live DOM exactly: heading "Checkbox #3" + four round 4-state
  checkboxes (coral checked circles with white checkmarks; the screenshot's
  browser chrome shows a component-preview origin, confirming this sub-series
  is codrops-sourced). The demo brands itself "Checkbox #3"; the recreation
  uses the NEW name **Trio**.
- **Visual design (from DOM + CSS tokens + screenshot):** clean, minimalist
  demo page on a solid white background (`body { background-color: #fff }`).
  Centered narrow column (`div.content` 7rem vertical padding →
  `div.container.text-left` → `div.row.justify-content-center` →
  `div.col-lg-3`, ≈25% of the container on lg+ screens, full-width below lg)
  containing an `h2.my-5.text-left` heading "Checkbox #3" (20px, dark,
  left-aligned within the centered column, 3rem top+bottom margins) followed
  by FOUR stacked codrops custom-checkbox rows (each a 20×20px ROUND
  indicator + label):
  1. **First checkbox** — `checked`, enabled → solid coral `#f67280` circle
     with a white checkmark.
  2. **Second checkbox** — unchecked, enabled → light-gray `#e6e6e6` circle
     (no border, but a `0 1px 2px 0 rgba(0,0,0,.5)` drop shadow gives it a
     subtle outline).
  3. **Disabled** — `disabled`, unchecked → `#e6e6e6` circle at 60% opacity
     (`opacity: 0.6`), `pointer-events: none`.
  4. **Disabled & checked** — `disabled` + `checked` → `#f67280` circle at
     20% opacity (`opacity: .2`) with the white checkmark.
     Hover/focus: indicator turns `#ccc` (any row); checked+hover/focus turns
     `#f88a96`. No navbar, no footer, no images — pure form-component
     typography.
- **Section order (1:1, from live demo DOM):**
  1. `div.content` (padding 7rem 0 = 112px vertical) → `div.container.text-left`
     (Bootstrap container, centered, max-width ~1140px):
  2. `div.row.justify-content-center` → `div.col-lg-3` (≈25% column on lg+,
     centered; full-width below lg) — page has no other wrapper sections.
  3. `h2.my-5.text-left` "Checkbox #3" (20px, dark, `my-5` = 3rem top AND
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
  - `#f67280` — CORAL/pink-red, THE brand accent (replaces Bootstrap blue
    from the Checkbox 12 sibling): the CHECKED indicator background
    (`.control input:checked ~ .control__indicator { background: #f67280 }`)
    and the disabled+checked background (at `opacity: .2`).
  - `#fff` — page background (`body { background-color: #fff }`) and the
    white checkmark glyph.
  - `#e6e6e6` — light gray, the UNCHECKED and DISABLED indicator background
    (`.control__indicator { background: #e6e6e6 }`; disabled rows add
    `opacity: 0.6`).
  - `#ccc` — gray, the HOVER/FOCUS indicator background
    (`.control:hover input ~ .control__indicator, .control input:focus ~
.control__indicator { background: #ccc }`).
  - `#f88a96` — lighter coral, the CHECKED hover/focus indicator background
    (`.control:hover input:not([disabled]):checked ~ .control__indicator,
.control input:checked:focus ~ .control__indicator { background: #f88a96 }`).
  - DISABLED+CHECKED: same `#f67280` background at `opacity: .2`
    (`.control--checkbox input:disabled:checked ~ .control__indicator {
background-color: #f67280; opacity: .2 }`).
  - Shadow: `0 1px 2px 0 rgba(0, 0, 0, 0.5)` on the indicator
    (`-webkit-box-shadow` + `box-shadow`), which gives the unchecked gray
    circle its subtle outline in the screenshot.
- **Fonts:** **Roboto** (body + headings; `style.css` stack `"Roboto",
-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
Arial, "Noto Sans", sans-serif, …`) — load via Google Fonts `<link>` in
  `index.html` (regular 400 + medium 500). Heading "Checkbox #3" 20px
  (`h2 { font-size: 20px }`); checkbox labels 18px
  (`.control { font-size: 18px }`). (The theme shell also loads Poppins and
  Source Serif Pro font-faces, but the demo body uses only Roboto.)
- **Widget anatomy (`.control`, from style.css):**
  - `.control`: `display: block; position: relative; padding-left: 30px;
margin-bottom: 15px; cursor: pointer; font-size: 18px` — the row; the
    30px left padding is the indicator slot.
  - `.control input`: `position: absolute; z-index: -1; opacity: 0`
    (visually hidden, still focusable + label-wired).
  - `.control__indicator`: `position: absolute; top: 2px; left: 0; height:
20px; width: 20px; background: #e6e6e6; border-radius: 50%; box-shadow:
0 1px 2px 0 rgba(0,0,0,.5)` — a 20×20px **CIRCLE** (ROUND — unlike the
    square Checkbox 12 indicator), subtle drop shadow, NO border.
  - Checkmark `.control__indicator:after`: `font-family: 'icomoon';
content: '\e5ca'; position: absolute; display: none; font-size: 14px;
transition: .3s all ease` — shown only when checked
    (`.control input:checked ~ .control__indicator:after { display:
block; color: #fff }`), centered via
    `top: 50%; left: 50%; transform: translate(-50%, -50%)`. The `.3s all
ease` transition gives the checkmark a fade-in on state change (unlike
    Checkbox 12, which has NO transition).
  - CHECKED: indicator background `#f67280`.
  - DISABLED: indicator stays `#e6e6e6` with `opacity: 0.6` +
    `pointer-events: none`; DISABLED+CHECKED indicator `#f67280` at
    `opacity: .2` (checkmark still white; a vestigial
    `.control--checkbox input:disabled ~ .control__indicator:after {
border-color: #7b7b7b }` rule exists but has no visual effect on the font
    glyph).
  - HOVER/FOCUS: unchecked/focus → `#ccc`; checked hover/focus → `#f88a96`.
- **Radii:** 50% — the checkbox indicator is a ROUND circle (the ONLY
  significant geometry difference vs Checkbox 12's square).
- **Spacing rhythm:** section padding `7rem 0` (≈112px); heading `my-5`
  (3rem top AND bottom margins); centered column `col-lg-3` (≈25% of the
  1140px container on lg+ screens, full-width below lg); each checkbox row
  `margin-bottom: 15px` (last row included), `padding-left: 30px` (indicator
  slot), indicator `top: 2px` offset; label text 18px.
- **Icons:** the checkmark is the icomoon glyph `\e5ca` (`icon-check2` in the
  icomoon stylesheet — a Material check) rendered white at the circle's
  center at 14px font-size — reproduce with lucide-react `Check`
  (strokeWidth ~3, ~12px, white) sized/positioned to fill the indicator's
  center; NOT font-awesome / NOT icomoon (repo convention — never copy
  assets). Verify the `Check` export with the typeof probe before shipping.
- **No images** in this template — pure form-component typography, so no
  picsum seeds are needed.

## Requirements

### Requirement: Demo section with heading

The system SHALL render a single centered demo section with the dark heading
"Checkbox #3" on a white background.

#### Scenario: Section and heading

- **GIVEN** the Trio page is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show one section with generous vertical padding
  (≈112px top and bottom)
- **AND** the section SHALL show the heading "Checkbox #3" in dark text
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
visually-hidden real checkbox input and a 20×20px ROUND indicator (50%
radius, subtle drop shadow, no border).

#### Scenario: Four rows render in order with correct labels

- **GIVEN** the Trio page is rendered
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
- **THEN** the checked row's indicator SHALL be a ROUND circle in coral
  `#f67280` with a white checkmark
- **AND** the unchecked row's indicator SHALL be a ROUND circle in light gray
  `#e6e6e6` with the `0 1px 2px rgba(0,0,0,.5)` drop shadow and no checkmark
- **AND** the disabled row's indicator SHALL be a ROUND circle in light gray
  `#e6e6e6` at 60% opacity with no checkmark
- **AND** the disabled-and-checked row's indicator SHALL be a ROUND circle in
  `#f67280` at 20% opacity with a white checkmark

### Requirement: Checkbox interaction

The system SHALL toggle the first two rows on click (matching the reference's
enabled checkboxes), keep rows 3–4 permanently disabled, and SHALL show the
hover/focus indicator colors.

#### Scenario: Toggling enabled rows

- **GIVEN** the "First checkbox" row is rendered checked
- **WHEN** the user clicks the "First checkbox" label
- **THEN** the row SHALL become unchecked and its indicator SHALL switch from
  `#f67280` to `#e6e6e6`
- **AND** the checkmark SHALL disappear

- **GIVEN** the "Second checkbox" row is rendered unchecked
- **WHEN** the user clicks the "Second checkbox" label
- **THEN** the row SHALL become checked and its indicator SHALL switch to
  `#f67280` with the white checkmark

#### Scenario: Disabled rows ignore interaction

- **GIVEN** the "Disabled" and "Disabled & checked" rows are rendered
- **WHEN** the user clicks either disabled label
- **THEN** the row state SHALL NOT change

#### Scenario: Hover and focus indicator colors

- **GIVEN** any enabled checkbox row is rendered
- **WHEN** the user hovers it (or focuses its hidden input via Tab/click)
- **THEN** the indicator SHALL turn `#ccc` when unchecked
- **AND** the indicator SHALL turn `#f88a96` when checked
- **AND** the state colors SHALL return when hover/focus leaves

### Requirement: No navbar, no footer, no images

The demo SHALL be a single self-contained section with no navbar, no footer,
and no images (matching the reference).

#### Scenario: Minimal single-section page

- **GIVEN** the Trio page is rendered
- **THEN** the page SHALL NOT contain a navbar
- **AND** the page SHALL NOT contain a footer
- **AND** the page SHALL NOT load any images

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-trio`
- [ ] Heading "Checkbox #3" (20px dark text, `my-5` margins, centered narrow
      column ≈25% on lg+)
- [ ] Four rows in exact order: First checkbox (checked) / Second checkbox
      (unchecked) / Disabled / Disabled & checked — labels verbatim
- [ ] Real focusable checkbox inputs, visually hidden (`sr-only`/opacity-0),
      label-wrapped like the reference (label wraps text + input + indicator)
- [ ] Indicator: 20×20px ROUND circle (border-radius 50%), `#e6e6e6`
      unchecked, `#f67280` checked, white checkmark; disabled = `opacity-0.6`,
      disabled+checked = coral at 20% opacity
- [ ] Indicator drop shadow `0 1px 2px 0 rgba(0,0,0,.5)` (the unchecked
      circle's subtle outline)
- [ ] Hover/focus: `#ccc` unchecked, `#f88a96` checked
- [ ] Checkmark fades in with ~.3s transition on state change
- [ ] Row spacing 15px, indicator slot 30px left padding, indicator top 2px
- [ ] 100% coverage (lines/functions/branches/statements) in
      `apps/trio/src/**` tests
- [ ] Footer links https://www.componentdock.com/ (repo mandate) — see
      docs/conventions.md; no ColorLib references in app code
- [ ] `public/CNAME` = `trio.free.componentdock.com`, homepage
      `https://trio.free.componentdock.com`
