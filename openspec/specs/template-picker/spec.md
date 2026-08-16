# Template: Picker (Multiselect Dropdown)

## Purpose

Picker is a single-page multiselect-dropdown component demo in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Multiselect 01" free template (source:
https://colorlib.com/wp/template/multiselect-01/), built under a DIFFERENT
name (**Picker** — the first of the selection-themed names for this Bootstrap
Multiselect UI series; a "picker" is exactly what a multiselect dropdown is:
a widget for picking several options from a list — per the monorepo naming
mandate: never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a minimal, centered demo page (Bootstrap 4.3.1 + the
bootstrap-multiselect jQuery plugin): a `section.ftco-section` with a
centered `h2.heading-section` "Multiselect #01", and below it a single
multiselect dropdown — a `strong.sl` label "Select Language:" beside a
`select[multiple]` (PHP, JavaScript, Java, SQL, Jquery, .Net) that the plugin
turns into a clickable white trigger button ("None selected" placeholder +
gray caret) opening a white dropdown panel with a "Select all" row and six
custom square-checkbox options (20×20, 4px radius) that fill soft-green
`#52de97` with a white check when selected. Selecting options does NOT close
the panel (multi-select pattern); the trigger label updates to the
comma-joined selection (plugin default `numberDisplayed: 3` — see quirks),
"N of 6 selected" when many are chosen, or "All selected". The whole template
is ONE interactive surface — the multiselect control. Picker recreates that
structure 1:1 with matching layout, tokens, typography, and content (no
ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Multiselect 01" is FORBIDDEN as the
> app name. **Picker** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-16). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Multiselect 01". Listed in TEMPLATES.md under
  **Bootstrap Multiselect (20)** (section header line 822; row at line 823).
  Free multiselect-dropdown component template. The `multiselect-01` slug
  appears exactly ONCE in TEMPLATES.md (no dup rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-16 by direct fetch AND
  browser interaction):** the default preview URL
  `https://preview.colorlib.com/theme/multiselect-01/` returns 404 (9
  bytes); the REAL preview URL (same `/theme/bootstrap/` prefix as the rest
  of the Bootstrap UI series, e.g. Modal 01–20) is
  `https://preview.colorlib.com/theme/bootstrap/multiselect-01/` (HTTP 200,
  3.6KB HTML — the entire page is 52 lines). Stylesheets: `css/style.css`
  (222.4KB = **CUSTOMIZED Bootstrap 4.3.1** + a custom token tail starting
  at ~218.7KB — the custom tail is the real token source, ~160 lines),
  `https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css`
  (only for the `fa-check` glyph in the checked checkbox — lucide's `Check`
  replaces it). **Lato** (300/400/700) via cf-fonts @font-face blocks in the
  head — the template's loaded font, used for headings
  (`h1–h6 { font-family: "Lato", Arial, sans-serif; font-weight: 400;
line-height: 1.5; color: #000 }`). Scripts: `js/jquery.min.js`,
  `js/popper.js`, `js/bootstrap.min.js`, `js/bootstrap-multiselect.js`, and
  `js/main.js` (59 bytes) — the whole demo logic:
  `$('#multiple-checkboxes').multiselect({ includeSelectAllOption: true })`
  (plugin defaults for everything else; see quirks). Screenshot
  (`multiselect-01.jpg`, 1200×972, browser-verified 2026-08-16): pale
  gray/off-white page, centered dark "Multiselect #01" heading, gray
  "Select Language:" label beside a white trigger box ("None selected" +
  small gray caret), the dropdown OPEN below it: white panel with soft
  shadow, "Select all" first with a blank square checkbox, then PHP /
  JavaScript / Java / SQL / Jquery / .Net each with a blank 20px square
  checkbox — clean, utilitarian component-demo aesthetic.
- **Live DOM structure (1:1):**
  - `section.ftco-section` (custom: `padding: 7em 0` — nothing else; page
    bg stays Bootstrap `#fff`) → `div.container` → two
    `div.row.justify-content-center`:
    1. `div.col-md-6.text-center.mb-5` → `h2.heading-section` —
       "Multiselect #01" (custom: `font-size: 28px; color: #000`; inherits
       Lato, weight 400).
    2. `div.col-md-8.col-lg-5.d-flex.justify-content-center.align-items-center`
       → `div.d-flex.text-left.align-items-center.w-100`:
       - `strong.sl` — "Select Language:" (custom: `color: gray; width:
150px`).
       - `select#multiple-checkboxes[multiple]` with 6 `<option>`s: PHP,
         JavaScript, Java, SQL, Jquery, .Net — rendered invisible; the
         plugin replaces it with the trigger + panel below.
  - **Trigger (plugin-rendered):** `div.btn-group` (custom: `height: 52px;
width: calc(100% - 150px)` — sits beside/below the fixed 150px label
    inside the flex row) → `button.multiselect.dropdown-toggle.btn` (custom:
    `border-radius: 4px; background: #fff; box-shadow: 0px 10px 23px -16px
rgba(0,0,0,0.14); padding: 0 10px; text-align: left`; `:focus` keeps the
    same shadow; caret via `button:after` — absolutely positioned, right
    **20px**, vertically centered, `color: #999999`). Text:
    `span.multiselect-selected-text` — "None selected" initially. Bootstrap
    dropdown toggles `aria-expanded` and a `.show` state; the panel opening
    does not change the caret glyph direction in the source (chevron stays
    down-caret — verified live).
  - **Panel (plugin-rendered):** `ul.multiselect-container.dropdown-menu`
    (custom: `position: absolute; width: 100%; padding: 10px 0; border:
none; box-shadow: 0px 10px 23px -16px rgba(0,0,0,0.14)`; Bootstrap
    `dropdown-menu` supplies white bg, 4px radius, `margin-top: -1px`),
    opened below the trigger:
    - First `li > a.multiselect-all` — "Select all" (custom label rule:
      `font-weight: 700; color: gray`).
    - Six `li > a > label` rows — option text (custom: `display: block;
position: relative; padding-left: 20px; margin-bottom: 12px;
font-size: 16px; font-weight: 500; user-select: none`) with a custom
      square checkbox `label:before` (custom: 20×20, `border: 2px solid
rgba(0,0,0,0.2)`, `border-radius: 4px`, transparent fill,
      `margin-right: 15px`, inline-block vertical-middle).
    - Checked row `li.active > a > label:before` (custom: `content: "\f00c"`
      fa-check glyph, `color: #fff; background-color: #52de97; border: 0`).
  - **Footer:** the original has NO footer; per monorepo convention add a
    minimal attribution footer linking `https://www.componentdock.com/`
    ("Component Dock") so every shipped template carries the required link.
- **QUIRK — label association:** the source row is `strong.sl` "Select
  Language:" + a bare `select` — no `<label for>` association at all. In
  the recreation, associate the label with the trigger button
  (`htmlFor`/`id` or an `aria-label`) for a11y (documented fix).
- **QUIRK — hidden `<select>`:** the visible control is entirely
  plugin-rendered; the native `select[multiple]` exists only as the data
  source (semantics are lost). In the recreation, build the listbox from
  real state: trigger `button` with `aria-haspopup="listbox"` +
  `aria-expanded`, a `role="listbox"` (or checkbox-group) panel whose
  options are checkboxes with `role="option"`-style semantics and real
  `aria-checked` state (documented improvement over the source).
- **QUIRK — trigger label rules (plugin defaults, not overridden by
  main.js):** 0 selected → "None selected"; ≤3 selected (default
  `numberDisplayed: 3`) → comma-joined names ("PHP,JavaScript" — verified
  live); ALL selected → "All selected"; otherwise → "N of 6 selected"
  (default `nSelectedText: 'selected'` and `allSelectedText: 'All
selected'`). Recreate this label behavior.
- **Visual design (screenshot + live browser):** minimal white page (the
  perceived pale-gray in screenshots is browser chrome/photo tone — CSS says
  `#fff`), one centered dark 28px heading, gray label, and ONE floating
  control: white trigger (4px radius, soft diffuse shadow, subtle light-gray
  edge) with near-black text and a light-gray `#999` caret at right 20px;
  open panel: white, 4px radius, faint light-gray border, same soft shadow,
  "Select all" (bold gray) + six 16px/500 rows with 20px square checkboxes.
  Signature color: the soft-green `#52de97` checked fill with white check.
  Grays carry the rest: label `gray`, caret `#999`, checkbox border
  `rgba(0,0,0,0.2)`.
- **Section order (1:1 from live DOM):**
  1. **Heading section** — full-width centered `h2.heading-section`
     "Multiselect #01" (recreate as the brand name "Picker" + demo label,
     e.g. "Picker" like the sibling recreations rename their demo heading).
  2. **Multiselect control** — label "Select Language:" (gray, 150px) +
     trigger button (white, 4px radius, 52px, soft shadow, "None selected",
     gray caret right) + dropdown panel ("Select all" + 6 checkbox options,
     green `#52de97` checked fill).
  3. **Footer** — no footer in source; minimal Component Dock footer per
     convention.
- **Design tokens:**
  - Brand accent: **`#52de97`** (soft green — checked-checkbox fill with
    white check; also the source's `.bg-primary` override). No other hue in
    the template.
  - Trigger: **white** bg, radius **4px**, height **52px**, shadow
    `0px 10px 23px -16px rgba(0,0,0,0.14)` (same on focus), `padding: 0
10px`, text left-aligned, caret **`#999999`** at right 20px,
    vertically centered, ~16px glyph. The perceived faint light-gray border
    is the shadow's edge — do NOT add a real border (source sets none).
  - Panel: **white** bg, radius **4px** (`0.25rem` Bootstrap dropdown),
    `border: none` (faint gray edge comes from the shadow), `width: 100%`,
    `padding: 10px 0`, same soft shadow, `margin-top: -1px` (sits flush
    under the trigger).
  - Checkbox: **20×20** square, `border: 2px solid rgba(0,0,0,0.2)`, radius
    **4px**, transparent fill, `margin-right: 15px`. Checked: fill
    **`#52de97`**, white `Check` glyph, border removed.
  - Option rows: font-size **16px**, weight **500**, `margin-bottom: 12px`,
    `padding-left: 20px`, text `#212529` (Bootstrap body default). "Select
    all" row: weight **700**, color **gray**.
  - Label: **gray** (`#808080`-class Bootstrap `gray`), fixed width **150px**
    in the flex row (trigger takes `calc(100% - 150px)`).
  - Heading: **28px**, **`#000`**, Lato weight 400, line-height 1.5.
  - Font: **Lato** (300/400/700 via Google Fonts `<link>` — weights 300+700
    are loaded by the source but only 400 is actually used by this
    template's rules; loading 400 (+700 for the Select-all row if desired) is
    faithful).
  - Rhythm: `section.ftco-section` `padding: 7em 0` (≈112px vertical);
    centered column (`col-md-6` for the heading, `col-md-8 col-lg-5` for the
    control); `mb-5` (48px) gap under the heading; five Bootstrap grid
    breakpoints are irrelevant — recreate with a centered `max-w-xl`
    container + `text-center` heading.
- **Recreation approach:** single page, `min-h-screen` white section with
  ~112px top/bottom padding, centered: h2 "Picker" (28px, #000, Lato 400)
  with `mb-12`-ish gap, then a flex row (label "Select Language:" `text-gray-500`
  w-150px + 52px-tall white button) — state-driven React (no Bootstrap, no
  jQuery): trigger `button` (white, rounded-4px, soft shadow
  `0 10px 23px -16px rgba(0,0,0,0.14)`, `aria-haspopup="listbox"`
  `aria-expanded`, ChevronDown `#999` absolutely right-20px) with the
  source's label rules ("None selected" → comma list → "N of 6 selected" →
  "All selected"); panel `role="listbox"` (white, 4px radius, no border,
  same shadow, `w-full`, py-10px) with "Select all" (bold gray) + six
  options (16px/500, mb-12px, pl-20px) each a 20×20 square checkbox
  (2px `rgba(0,0,0,0.2)` border, 4px radius, 15px gap) filling `#52de97`
  with a white `Check` when selected. Selecting does NOT close the panel;
  outside-click / Escape / toggling the trigger closes it. Plus the
  mandatory minimal Component Dock footer. Icons: lucide-react (`ChevronDown`,
  `Check` — probe exports before use — see tasks.md). No images at all (the
  source has none).

## Requirements

### Requirement: Heading section

The system SHALL render a centered heading section on a white page.

#### Scenario: Centered heading

- **GIVEN** the Picker app is rendered
- **WHEN** the page loads
- **THEN** a white page SHALL show a centered heading "Picker" (the new
  brand name in place of the source's "Multiselect #01" demo label) at
  ~28px in `#000`
- **AND** the heading SHALL use the Lato font family at weight 400 with
  line-height 1.5
- **AND** the page SHALL have generous vertical padding (~112px — the
  source's `ftco-section` 7em) above and below the content
- **AND** the content column SHALL be centered horizontally with a
  comfortable max width (~36rem, mirroring `col-md-8 col-lg-5`)

### Requirement: Multiselect control

The system SHALL render a labeled multiselect trigger button that opens a
checkbox dropdown panel.

#### Scenario: Label and trigger

- **GIVEN** the heading renders
- **WHEN** the control area displays
- **THEN** a gray label "Select Language:" SHALL show at a fixed width of
  150px
- **AND** a white trigger button SHALL sit beside/below it at 52px height
  with 4px border radius, `padding: 0 10px`, left-aligned text, and the
  soft shadow `0 10px 23px -16px rgba(0,0,0,0.14)`
- **AND** the trigger SHALL show the placeholder text "None selected" with
  a gray (`#999`) chevron-down caret at the right edge (~20px inset)
- **AND** the trigger SHALL have `aria-haspopup="listbox"` and
  `aria-expanded="false"` initially
- **AND** the label SHALL be programmatically associated with the control
  (the source's bare `strong` + `select` has no association — fixed in the
  recreation for a11y)

#### Scenario: Dropdown opens with select-all and six options

- **WHEN** the user activates the trigger
- **THEN** a white dropdown panel SHALL appear below the trigger (4px
  radius, no border, width 100%, same soft shadow, ~10px vertical padding)
- **AND** `aria-expanded` SHALL flip to `true`
- **AND** the panel SHALL list a "Select all" option (bold, gray) first,
  followed by the six options PHP, JavaScript, Java, SQL, Jquery, and .Net
- **AND** every option SHALL show a 20×20 square checkbox with a 2px
  `rgba(0,0,0,0.2)` border, 4px radius, and a 15px gap to its label text
- **AND** option rows SHALL render at 16px weight 500 with ~12px vertical
  spacing and ~20px left padding

### Requirement: Selection behavior

The system SHALL toggle options as checkboxes and update the trigger label
per the source's library defaults.

#### Scenario: Selecting options

- **GIVEN** the dropdown is open
- **WHEN** the user clicks the PHP option and then the JavaScript option
- **THEN** both checkboxes SHALL fill with the soft-green `#52de97` and
  show a white check mark
- **AND** the dropdown SHALL STAY open (the source's multi-select pattern —
  picking an option never closes the panel)
- **AND** the trigger label SHALL update to the comma-joined list
  "PHP,JavaScript" (the source's `numberDisplayed: 3` behavior — up to 3
  selected names are listed)
- **AND** each option SHALL expose its checked state accessibly
  (`aria-checked`/visible checkbox semantics)

#### Scenario: Deselecting options

- **WHEN** the user clicks a checked option
- **THEN** its checkbox SHALL return to the empty square (transparent fill,
  2px `rgba(0,0,0,0.2)` border)
- **AND** the trigger label SHALL reflect the removal ("None selected" when
  the last one is removed)

#### Scenario: Trigger label states

- **GIVEN** no options are selected
- **WHEN** the trigger displays
- **THEN** it SHALL read "None selected"
- **WHEN** all six options become selected
- **THEN** the label SHALL read "All selected"
- **WHEN** more than 3 (but not all) options are selected
- **THEN** the label SHALL read "N of 6 selected" (e.g. "4 of 6 selected" —
  the source's default overflow format)

#### Scenario: Select all

- **WHEN** the user clicks "Select all"
- **THEN** all six checkboxes SHALL become checked (`#52de97` + white check)
- **AND** the trigger SHALL read "All selected"
- **WHEN** the user clicks "Select all" again
- **THEN** all checkboxes SHALL become unchecked and the trigger SHALL read
  "None selected"

### Requirement: Dropdown dismissal

The system SHALL close the dropdown on outside interaction.

#### Scenario: Close interactions

- **GIVEN** the dropdown is open
- **WHEN** the user clicks outside the control, presses Escape, or activates
  the trigger again
- **THEN** the panel SHALL close and `aria-expanded` SHALL return to `false`
- **AND** selections SHALL be preserved across open/close cycles (closing
  never clears state)

### Requirement: Page composition

The system SHALL compose the page with a main landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Picker app is rendered
- **WHEN** the page loads
- **THEN** the heading and the multiselect control SHALL render in the main
  landmark
- **AND** the document title SHALL be "Picker — Multiselect Dropdown"

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Picker app is rendered
- **WHEN** the footer displays
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text)

## Verification checklist

- [ ] `openspec/specs/template-picker/spec.md` exists on main with the full
      section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/picker/tasks.md` exists on main with design notes and
      the implementation task outline.
- [ ] Fidelity: structure matches the Multiselect 01 preview DOM 1:1
      (centered 28px black heading → label "Select Language:" (gray, 150px) + 52px white trigger (4px radius, soft shadow, "None selected", #999
      caret right 20px) → white dropdown panel (4px radius, w-full, soft
      shadow, "Select all" + PHP / JavaScript / Java / SQL / Jquery / .Net
      with 20×20 4px-radius square checkboxes) → minimal Component Dock
      footer).
- [ ] Tokens used in the app: brand green `#52de97` (checked fill + white
      `Check`), trigger/panel `#fff` with shadow `0 10px 23px -16px
    rgba(0,0,0,0.14)`, radius 4px, caret `#999999`, checkbox border 2px
      `rgba(0,0,0,0.2)`, label gray, heading `#000` 28px; Lato 400 via
      Google Fonts `<link>`.
- [ ] No ColorLib references in `apps/picker` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] NO images (the source has none); icons only via lucide-react
      (`ChevronDown`, `Check` — probed before use).
- [ ] Source behavior honored: panel stays open while selecting; trigger
      label rules ("None selected" → comma list → "N of 6 selected" →
      "All selected"); selecting ≤3 shows the comma-joined names (the +
      library's `numberDisplayed: 3` default).
- [ ] Documented deviations (a11y fixes): `strong`+`select` label got real
      association (`htmlFor`/`aria-label`); hidden `<select>` semantics
      rebuilt as an accessible listbox with `aria-haspopup`/`aria-expanded`
      and per-option checked state.
- [ ] Implementer gate: `scripts/verify-app.sh picker` (typecheck + lint +
      100% coverage tests + build) and `npm run spec:validate`.
