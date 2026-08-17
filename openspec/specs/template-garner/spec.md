# Template: Garner (Multiselect Dropdown)

## Purpose

Garner is a single-page multiselect-dropdown component demo in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Multiselect 06" free template (source:
https://colorlib.com/wp/template/multiselect-06/), built under a DIFFERENT
name (**Garner** — the sixth of the selection-themed names for this Bootstrap
Multiselect UI series, after Picker/Sifter/Winnow/Cull/Glean; "to garner" is
to gather or collect, fitting a widget that picks several options from a
list — per the monorepo naming mandate: never reuse the ColorLib source
name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a minimal, centered demo page (Bootstrap 4.3.1 + a CUSTOM
jQuery widget — NOTE: unlike Multiselect 01–04, which use the
bootstrap-multiselect plugin (green `#52de97`, "Select all" row), and unlike
Multiselect 05, which uses select2 (orange `#fd5f00`, search + tags +
clear-all), **Multiselect 06 uses a third widget style**: a bespoke
`.selectMultiple` built by `js/main.js`): a `section.ftco-section` with a
centered `h2.heading-section` "Multiselect #06", and below it a single custom
multiselect — a 240px-wide WHITE rounded box (soft navy-tinted shadow) that
shows a grey-blue placeholder "Add Language" and, once picked, selected
options as soft blue-grey chips (each with an orange `#f16821` ×); a chevron
built from two CSS bars sits at the right (down when closed, up when open).
Opening shows a white dropdown panel below with a drop-shadow where every
option row (Javascript, jQuery, HTML, Wordpress, PHP) gets an orange
`#f16821` hover fill; clicking an option animates it out of the list and into
the box as a chip; clicking a chip's × animates it back into the list. There
is NO search box, NO clear-all, and NO select-all (this variant is the
simplest of the series). The whole template is ONE interactive surface — the
multiselect control. Garner recreates that structure 1:1 with matching
layout, tokens, typography, and content (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Multiselect 06" is FORBIDDEN as the
> app name. **Garner** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-17). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Multiselect 06". Listed in TEMPLATES.md under
  **Bootstrap Multiselect (20)** (section header line 821; row at line 828).
  Free multiselect-dropdown component template. The `multiselect-06` slug
  appears exactly ONCE in TEMPLATES.md (no dup rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-17 by direct fetch AND
  screenshot cross-check):** the default preview URL
  `https://preview.colorlib.com/theme/multiselect-06/` returns 404 (9
  bytes); the REAL preview URL (same `/theme/bootstrap/` prefix as the rest
  of the Bootstrap UI series, e.g. Multiselect 01–05, Modal 01–20) is
  `https://preview.colorlib.com/theme/bootstrap/multiselect-06/` (HTTP 200,
  3,373 bytes — the entire page is ~50 lines). Stylesheets: `css/style.css`
  (231,275 bytes = **CUSTOMIZED Bootstrap 4.3.1** + a custom `.selectMultiple`
  token tail — the last ~320 lines, from ~line 8136 on, are the real token
  source, extracted below) and font-awesome 4.7 (loaded but UNUSED — the
  widget's chevron/× glyphs are pure CSS bars, no FA icons render; lucide
  replacements are fine). **Lato** (300/400/700) via cf-fonts @font-face
  blocks in the head — the custom tail sets `body { font-family: "Lato",
Arial, sans-serif; font-size: 16px; line-height: 1.8; background: #fafafa;
color: gray }` and `h1–h5 { line-height: 1.5; font-weight: 400;
font-family: "Lato", Arial, sans-serif; color: #000 }`. Scripts:
  `js/jquery.min.js`, `js/popper.js`, `js/bootstrap.min.js`, and `js/main.js`
  — the whole demo logic builds the `.selectMultiple` widget from the hidden
  `select[multiple]` (details below). Screenshot (`multiselect-06.jpg`,
  1200×972, browser-verified 2026-08-17): light `#fafafa` page, centered dark
  "Multiselect #06" heading, and the widget OPEN: the white selection box
  with the light-grey "Add Language" placeholder and an up-chevron, and below
  it the white dropdown panel with a soft drop-shadow listing Javascript,
  jQuery, HTML, Wordpress (hovered — solid orange `#f16821` fill), PHP —
  clean, utilitarian component-demo aesthetic; no chips visible (nothing
  selected when the shot was taken).
- **Live DOM structure (1:1):**
  - `section.ftco-section` (custom: `padding: 7em 0` — nothing else; page
    bg stays `#fafafa`) → `div.container` → two `div.row.justify-content-center`:
    1. `div.col-md-7.text-center.mb-5` → `h2.heading-section` —
       "Multiselect #06" (custom: `font-size: 28px; color: #000`; inherits
       Lato, weight 400).
    2. `div.col-lg-4.d-flex.justify-content-center.align-items-center` →
       `select[multiple]` with `data-placeholder="Add Language"` and 5
       `<option>`s — Javascript, jQuery, HTML, Wordpress, PHP (a sixth
       option, `<option selected>Framer X</option>`, is COMMENTED OUT in the
       source — the demo starts with NO selection). The native select is
       hidden (`display: none`) by the plugin CSS.
  - **Widget (plugin-rendered):** `div.selectMultiple` (custom: `width:
240px; position: relative`) wraps the hidden select and contains:
    - `div` (the box): `position: relative; z-index: 2; padding: 8px 12px
2px 12px; border-radius: 8px; background: #fff; font-size: 14px;
min-height: 44px; box-shadow: 0 4px 16px 0 rgba(22, 42, 90, 0.12)`;
      hover shadow `0 4px 24px -1px rgba(22, 42, 90, 0.16)`; open-state
      shadow `0 4px 20px -1px rgba(22, 42, 90, 0.12)`. Inside:
      - `span` (placeholder): absolute, `left: 12px; top: 8px;
line-height: 28px`, color **`#99A3BA`**; `.hide` → `opacity: 0;
visibility: hidden; translate(-4px, 0)` (shown ONLY while nothing is
        selected).
      - selected chips `a` (one per selected option): `padding: 0 24px 6px
8px; line-height: 28px; color: #000; display: inline-block; margin: 0 6px
0 0` with `em` = label (`font-style: normal; white-space: nowrap`) and `i`
        = remove × (24×28 block; two 2px×10px bars, `background: #f16821`,
        `border-radius: 1px`, rotated ±45°). The chip's soft background is a
        `:before` (`background: rgba(228, 236, 250, 0.7); border-radius:
4px; z-index: -1`).
      - `div.arrow`: absolute right (`width: 28px`); two 2px×8px bars with
        `border-bottom: 8px solid #99A3BA`, closed rotate ±130° (chevron
        pointing DOWN), open rotate ±50° (pointing UP).
    - `ul` (the dropdown panel): `position: absolute; top: 100%; left: 0;
right: 0; list-style: none; border-radius: 8px`; closed `visibility:
hidden; opacity: 0; transform: translate(0, 20px) scale(0.8);
transform-origin: 0 0; filter: drop-shadow(0 12px 20px rgba(22, 42, 90,
0.08))`; open `.open > ul` → `transform: translate(0, 12px) scale(1);
opacity: 1; visibility: visible; filter: drop-shadow(0 16px 24px rgba(22,
42, 90, 0.16))`. Rows `li`: `color: #000; background: #fff; padding: 12px
16px; cursor: pointer`; first row `border-radius: 8px 8px 0 0`, last `0 0
8px 8px`; hover → `background: #f16821; color: #fff`; removal plays a
      "ripple" keyframe (a 6px `rgba(0,0,0,0.4)` dot scaling ~30× and fading,
      0.4s ease-out).
  - **Footer:** the original has NO footer; per monorepo convention add a
    minimal attribution footer linking `https://www.componentdock.com/`
    ("Component Dock") so every shipped template carries the required link.
- **QUIRK — hidden `<select>`:** the visible control is entirely
  plugin-rendered; the native `select[multiple]` exists only as the data
  source (semantics are lost). In the recreation, build the listbox from
  real state: a trigger with `aria-haspopup="listbox"` + `aria-expanded`, a
  `role="listbox"` panel whose options expose real selected state
  (documented improvement over the source).
- **QUIRK — open/close is NOT toggle-on-box-click:** the "open" class toggles
  only on clicks of the arrow OR the placeholder span (per main.js
  `$(document).on('click', '.selectMultiple > div .arrow, .selectMultiple >
div span', ...)`); clicking the empty box area itself does NOT open it.
  Recreate at least the arrow toggle; the wider clickable box in the React
  version is an acceptable documented lift (bigger hit target, same
  behavior).
- **QUIRK — selecting REMOVES the row from the list:** clicking an `li`
  animates it away from the dropdown and into the box as a chip; the
  dropdown shows ONLY the not-yet-selected options (the list IS the
  unselected set). Deselecting (chip ×) re-inserts the option into the list
  (with its own small show animation). The dropdown stays OPEN across
  selections — nothing in main.js closes it on select.
- **QUIRK — placeholder visibility:** the "Add Language" span shows only
  while NOTHING is selected; the first selected chip hides it, and it
  returns when the last chip is removed.
- **QUIRK — no search / no clear-all / no select-all:** unlike Multiselect 05
  (inline search, orange clear-all ×, tags) and Multiselect 01–04 ("Select
  all" row), this variant has NO search field, NO bulk-clear button, and NO
  select-all row. Selecting is per-row only. Do not add any of them.
- **Visual design (screenshot + CSS):** minimal `#fafafa` page, one centered
  dark 28px Lato heading, and ONE floating control: a 240px white box (8px
  radius, min-height 44px, soft navy-tinted shadow `0 4px 16px 0 rgba(22,42,
90,0.12)`), grey-blue `#99A3BA` placeholder, chips `rgba(228,236,250,0.7)`
  with black text and orange `#f16821` ×; open panel white, 8px radius,
  drop-shadow `0 16px 24px rgba(22,42,90,0.16)`, 5 rows (12px/16px padding),
  hover = solid orange `#f16821` with white text. Signature color: the
  orange **`#f16821`** hover/× accent (DIFFERENT from Multiselect 01–04's
  green `#52de97` AND from Multiselect 05's orange `#fd5f00` — this variant's
  orange is deeper/more saturated). Greys carry the rest: placeholder/arrow
  `#99A3BA`, chip tint `rgba(228,236,250,0.7)`, page `#fafafa`, body text
  `gray`.
- **Section order (1:1 from live DOM):**
  1. **Heading section** — full-width centered `h2.heading-section`
     "Multiselect #06" (recreate as the brand name "Garner", like the
     sibling recreations rename their demo heading).
  2. **Multiselect control** — the custom `selectMultiple` widget: white box
     (8px radius, min-height 44px, 8px/12px padding, soft shadow) with
     grey-blue placeholder ("Add Language") + chevron (down closed / up open)
     - selected chips (soft `rgba(228,236,250,0.7)` bg, black label, orange
       `#f16821` ×); dropdown panel (white, 8px radius, drop-shadow, 5 rows
       Javascript/jQuery/HTML/Wordpress/PHP, orange hover) listing ONLY the
       unselected options.
  3. **Footer** — no footer in source; minimal Component Dock footer per
     convention.
- **Design tokens:**
  - Brand accent: **`#f16821`** (deep orange — dropdown row hover fill with
    white text, and the per-chip remove × bars; also the demo's `a` link
    color and `.bg-primary`. The source's ONLY hue — DIFFERENT from
    Multiselect 01–04's `#52de97` green AND from Multiselect 05's `#fd5f00`
    soft orange).
  - Selection box: **white** bg, radius **8px**, `min-height: 44px`,
    `padding: 8px 12px 2px 12px`, `font-size: 14px`, shadow
    `0 4px 16px 0 rgba(22, 42, 90, 0.12)` (hover `0 4px 24px -1px rgba(22,
42, 90, 0.16)`; open `0 4px 20px -1px rgba(22, 42, 90, 0.12)`).
  - Placeholder + chevron: **`#99A3BA`** (grey-blue; chevron = two 2px×8px
    bars with `border-bottom: 8px solid #99A3BA`, ±130° closed / ±50° open).
  - Chips: `padding: 0 24px 6px 8px`, `line-height: 28px`, text **`#000`**,
    background **`rgba(228, 236, 250, 0.7)`** with radius **4px**, remove ×
    bars **`#f16821`** (2px×10px, radius 1px, ±45°), `margin: 0 6px 0 0`.
  - Dropdown panel: **white** bg, radius **8px** (first/last row rounded),
    closed `filter: drop-shadow(0 12px 20px rgba(22, 42, 90, 0.08))`, open
    `filter: drop-shadow(0 16px 24px rgba(22, 42, 90, 0.16))`, open
    `transform: translate(0, 12px) scale(1)` from `translate(0, 20px)
scale(0.8)` origin 0 0.
  - Option rows: `padding: 12px 16px`, text **`#000`** on white; hover →
    bg **`#f16821`**, text **`#fff`**; remove transition 0.3s ease + ripple
    dot `rgba(0,0,0,0.4)`.
  - Heading: **28px**, **`#000`**, Lato weight 400, line-height 1.5.
  - Body: **`#fafafa`** background, Lato 16px line-height 1.8, text **gray**,
    links `#f16821`.
  - Font: **Lato** (300/400/700 via Google Fonts `<link>` — the source loads
    300/400/700; headings use weight 400).
  - Rhythm: `section.ftco-section` `padding: 7em 0` (≈112px vertical);
    centered columns — heading `col-md-7`, control `col-lg-4`; `mb-5` (48px)
    gap under the heading; widget **`width: 240px`** (fixed, as in the
    source) centered in its column. No images at all (the source has none).
- **Recreation approach:** single page, `min-h-screen` `#fafafa` section with
  ~112px top/bottom padding, centered: h2 "Garner" (28px, #000, Lato 400)
  with `mb-12`-ish gap, then the custom multiselect widget — state-driven
  React (no Bootstrap, no jQuery): a trigger `div` (white, `rounded-[8px]`,
  `min-h-[44px]`, `px-3 pb-0.5 pt-2`, soft shadow
  `0 4px 16px 0 rgba(22,42,90,0.12)`, `aria-haspopup="listbox"`
  `aria-expanded={open}`) containing the placeholder span ("Add Language",
  `#99A3BA`, hidden once ≥1 selection), the selected chips (soft
  `rgba(228,236,250,0.7)` bg `rounded`, black label, orange `X` remove), and
  a down/up chevron (`#99A3BA` — lucide `ChevronDown`/`ChevronUp` or CSS
  bars); panel `role="listbox"` (white, `rounded-[8px]`, drop-shadow, 5
  rows Javascript/jQuery/HTML/Wordpress/PHP, orange `#f16821` hover = white
  text) listing ONLY the unselected options (selecting removes the row and
  adds the chip; chip × re-inserts the row; dropdown STAYS open while
  selecting). Toggle open: click trigger/arrow; close: outside click,
  Escape, or re-toggle. Selections persist across open/close; placeholder
  returns when the last chip is removed. Plus the mandatory minimal Component
  Dock footer. Icons: lucide-react (`X`, `ChevronDown`/`ChevronUp` — probe
  exports before use — see tasks.md). No images at all (the source has
  none).
- **ColorLib vs the rest of the series:** Multiselect 01–04 (Picker/Sifter/
  Winnow/Cull specs) use the bootstrap-multiselect plugin (green `#52de97`,
  "Select all" row, 6 language options, `numberDisplayed` label rules);
  Multiselect 05 (Glean) uses **select2** (orange `#fd5f00`, 13 generic
  options, search + tags + clear-all, no select-all). THIS template uses a
  **custom jQuery widget** (deep-orange `#f16821`, 5 language options, NO
  search / NO clear-all / NO select-all, chips-with-× only, list = unselected
  set). Do NOT copy the sibling specs' token values — this template's tokens
  are the ones above.

## Requirements

### Requirement: Heading section

The system SHALL render a centered heading section on an off-white page.

#### Scenario: Centered heading

- **GIVEN** the Garner app is rendered
- **WHEN** the page loads
- **THEN** an off-white (`#fafafa`) page SHALL show a centered heading
  "Garner" (the new brand name in place of the source's "Multiselect #06"
  demo label) at ~28px in `#000`
- **AND** the heading SHALL use the Lato font family at weight 400 with
  line-height 1.5
- **AND** the page SHALL have generous vertical padding (~112px — the
  source's `ftco-section` 7em) above and below the content
- **AND** the content column SHALL be centered horizontally with the control
  sized ~240px wide (the source's fixed widget width)

### Requirement: Multiselect control

The system SHALL render the closed multiselect box with a placeholder and a
chevron.

#### Scenario: Closed selection box with placeholder

- **GIVEN** the heading renders
- **WHEN** the control area displays
- **THEN** a white selection box SHALL render (radius ~8px, min-height ~44px,
  ~8px/12px padding, soft shadow `0 4px 16px 0 rgba(22,42,90,0.12)`)
- **AND** the grey-blue (`#99A3BA`) placeholder text "Add Language" SHALL be
  visible (no selections yet)
- **AND** a chevron SHALL sit at the right of the box pointing DOWN
  (closed state)
- **AND** the control SHALL have `aria-haspopup="listbox"` and
  `aria-expanded="false"` initially
- **AND** NO chips SHALL render (the demo starts with no selection — the
  source's `Framer X` option is commented out)

#### Scenario: Dropdown opens with five options

- **WHEN** the user activates the control (click on the box/arrow)
- **THEN** a white dropdown panel SHALL appear below the box (radius ~8px,
  drop-shadow `0 16px 24px rgba(22,42,90,0.16)`)
- **AND** `aria-expanded` SHALL flip to `true`
- **AND** the chevron SHALL point UP
- **AND** the panel SHALL list the 5 options Javascript, jQuery, HTML,
  Wordpress, and PHP (each row ~12px/16px padding, `#000` text on white)
- **AND** NO option SHALL be selected initially (no hover accent applied)

### Requirement: Selection behavior

The system SHALL render selected options as chips, remove them from the
dropdown list, and keep the panel open while selecting.

#### Scenario: Selecting options

- **GIVEN** the dropdown is open
- **WHEN** the user clicks the "Javascript" row and then the "PHP" row
- **THEN** a chip "Javascript" and a chip "PHP" SHALL appear in the box
  (soft `rgba(228,236,250,0.7)` background, ~4px radius, black label, each
  with an orange `#f16821` remove ×)
- **AND** the rows "Javascript" and "PHP" SHALL disappear from the dropdown
  list (the list shows ONLY the unselected options)
- **AND** the dropdown SHALL STAY open (the source never closes on select)
- **AND** the placeholder "Add Language" SHALL hide once at least one option
  is selected
- **AND** each option SHALL expose its selected state accessibly
  (`aria-selected` semantics)

#### Scenario: Deselecting options

- **GIVEN** at least one chip is in the box
- **WHEN** the user clicks a chip's × (or the option row if the panel is
  open)
- **THEN** the chip SHALL disappear from the box
- **AND** its option row SHALL re-appear in the dropdown list
- **AND** when the LAST chip is removed, the placeholder "Add Language"
  SHALL become visible again

### Requirement: Dropdown dismissal

The system SHALL close the dropdown on outside interaction while preserving
selections.

#### Scenario: Close interactions

- **GIVEN** the dropdown is open with one or more selections
- **WHEN** the user clicks outside the control, presses Escape, or activates
  the trigger again
- **THEN** the panel SHALL close, the chevron SHALL point DOWN again, and
  `aria-expanded` SHALL return to `false`
- **AND** selections SHALL be preserved across open/close cycles (closing
  never clears state)

### Requirement: No search / no clear-all / no select-all

The system SHALL NOT add controls the source does not have.

#### Scenario: Absent controls

- **GIVEN** the Garner app is rendered
- **WHEN** the control opens
- **THEN** the box SHALL contain NO search textbox (unlike Multiselect 05's
  select2 variant)
- **AND** the widget SHALL have NO clear-all button (no bulk ×)
- **AND** the panel SHALL have NO "Select all" row (unlike Multiselect 01–04)

### Requirement: Page composition

The system SHALL compose the page with a main landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Garner app is rendered
- **WHEN** the page loads
- **THEN** the heading and the multiselect control SHALL render in the main
  landmark
- **AND** the document title SHALL be "Garner — Multiselect Dropdown"

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Garner app is rendered
- **WHEN** the footer displays
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text)

## Verification checklist

- [ ] `openspec/specs/template-garner/spec.md` exists on main with the full
      section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/garner/tasks.md` exists on main with design notes and
      the implementation task outline.
- [ ] Fidelity: structure matches the Multiselect 06 preview DOM 1:1
      (centered 28px black Lato heading → custom selectMultiple box (white,
      8px radius, min-height 44px, `0 4px 16px 0 rgba(22,42,90,0.12)`
      shadow, grey-blue `#99A3BA` "Add Language" placeholder + CSS-bar
      chevron) → chips (soft `rgba(228,236,250,0.7)` bg, black label, orange
      `#f16821` ×) → white dropdown panel (8px radius, drop-shadow
      `0 16px 24px rgba(22,42,90,0.16)`, 5 options Javascript/jQuery/HTML/
      Wordpress/PHP, hover `#f16821` + white text) → minimal Component Dock
      footer).
- [ ] Tokens used in the app: brand orange `#f16821` (row hover, chip ×
      bars), placeholder/chevron `#99A3BA`, chip tint `rgba(228,236,250,0.7)`,
      page `#fafafa`, panel shadows `rgba(22,42,90,…)`, heading `#000` 28px;
      Lato 400 via Google Fonts `<link>`. (NOT the green `#52de97` of
      Multiselect 01–04, NOT the `#fd5f00` of Multiselect 05.)
- [ ] No ColorLib references in `apps/garner` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] NO images (the source has none); icons only via lucide-react
      (`X`, `ChevronDown`/`ChevronUp` — probed before use).
- [ ] Source behavior honored (all verified in main.js + CSS): selecting a
      row REMOVES it from the list and adds a chip; dropdown STAYS open
      while selecting; chip × re-inserts the row; placeholder hides with
      ≥1 chip and returns at 0; open toggles on arrow/placeholder click;
      NO search, NO clear-all, NO select-all.
- [ ] Documented deviations (a11y fixes): hidden `<select>` semantics rebuilt
      as an accessible listbox with `aria-haspopup`/`aria-expanded` and
      per-option selected state; keyboard toggling (Enter/Space on trigger,
      Escape to close); whole-box click as the open trigger (source only
      wires arrow + placeholder span).
- [ ] Implementer gate: `scripts/verify-app.sh garner` (typecheck + lint +
      100% coverage tests + build) and `npm run spec:validate`.
