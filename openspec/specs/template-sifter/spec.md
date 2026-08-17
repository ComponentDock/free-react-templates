# Template: Sifter (Multiselect Dropdown)

## Purpose

Sifter is a single-page multiselect-dropdown component demo in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Multiselect 02" free template (source:
https://colorlib.com/wp/template/multiselect-02/), built under a DIFFERENT
name (**Sifter** — the second of the selection-themed names for this
Bootstrap Multiselect UI series, after "Picker" took Multiselect 01; a
"sifter" is a tool that picks fine particles out of a mixture — exactly what
a multiselect widget does — per the monorepo naming mandate: never reuse the
ColorLib source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a minimal, centered demo page (customized Bootstrap 4.3.1 +
**Semantic UI 2.2.13** — note: this series member uses Semantic's dropdown
plugin, NOT the bootstrap-multiselect jQuery plugin of Multiselect 01): a
`section.ftco-section` with a centered `h2.heading-section` "Multiselect
#02", and below it a single multiselect field — a `label` "Select Topics"
above a `select[multiple]` (12 options: `All` with an empty value + Topic 1
through Topic 11) that Semantic's `$('.label.ui.dropdown').dropdown()` call
transforms into a fully-rendered `.ui.selection.fluid.dropdown.multiple`
widget: a white trigger (thin `#e6e6e6` border, 4px radius, 10px padding)
with a faded "All" placeholder text and a dark-gray dropdown caret; opening
it reveals a white menu (soft drop shadow, 4px bottom corners) whose 11
rows ("Topic 1".."Topic 11") are separated by 1px `#e6e6e6` top borders and
highlight rose `#e8647c` with white text on hover; picking options does NOT
close the menu (multi-select), and every selection renders as a rose
`#e8647c` pill label tag (white text, 4px radius, 8px 10px padding, 12px
font) with a white × delete icon inside the trigger — once at least one
topic is chosen the "All" placeholder hides. The whole template is ONE
interactive surface — the multiselect control. Sifter recreates that
structure 1:1 with matching layout, tokens, typography, and content (no
ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Multiselect 02" is FORBIDDEN as the
> app name. **Sifter** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-17). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Multiselect 02". Listed in TEMPLATES.md under
  **Bootstrap Multiselect (20)** (section header line 822; row at line 824).
  Free multiselect-dropdown component template. The `multiselect-02` slug
  appears exactly ONCE in TEMPLATES.md (no dup rows to mark). Sibling in the
  series already prepped: Multiselect 01 → `apps/picker` spec
  (`openspec/specs/template-picker/`).
- **Live preview DOM — REACHABLE (verified 2026-08-17 by direct fetch AND
  browser interaction):** the default preview URL
  `https://preview.colorlib.com/theme/multiselect-02/` returns 404 (`Not
Found`, 9 bytes); the REAL preview URL (same `/theme/bootstrap/` prefix as
  the rest of the Bootstrap UI series, e.g. Multiselect 01, Modal 01–20) is
  `https://preview.colorlib.com/theme/bootstrap/multiselect-02/` (HTTP 200,
  4,027 bytes — the entire page is 61 lines). Stylesheets: `css/style.css`
  (221.3KB = **CUSTOMIZED Bootstrap 4.3.1** + a custom token tail starting
  at ~219.7KB — the custom tail is the real token source, ~80 lines),
  `https://cdn.jsdelivr.net/npm/semantic-ui@2.2.13/dist/semantic.min.css`
  (the widget engine's styles: dropdown, label, icon fonts), and
  `https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css`
  (LOADED but UNUSED — the live DOM has no `fa-` classes; Semantic's delete
  × comes from Semantic's own `Dropdown`/icon font, and the caret from the
  `Dropdown` font too; do NOT load font-awesome in the recreation). **Lato**
  (300/400/700) via cf-fonts @font-face blocks in the head — the template's
  loaded font; only weight 400 is used by this page's rules (body
  `font-family: "Lato", Arial, sans-serif; font-size: 16px; line-height:
1.8; color: gray; background: #fff`; `h1–h5 { line-height: 1.5;
font-weight: 400; font-family: "Lato", Arial, sans-serif; color: #000 }`).
  Scripts: `js/jquery.min.js`, `js/popper.js`, `js/bootstrap.min.js`
  (loaded, unused — no Bootstrap components on this page),
  `https://cdn.jsdelivr.net/npm/semantic-ui@2.2.13/dist/semantic.min.js`
  (the dropdown engine), and `js/main.js` — the whole demo logic:
  `$('.label.ui.dropdown').dropdown()` (Semantic defaults → `useLabels:
true`, so selections render as label tags; the file also contains a
  `.no.label.ui.dropdown` `useLabels: false` init and a `.ui.button`
  restore-defaults handler — dead code, no matching DOM on this page).
  Screenshot (`multiselect-02.jpg`, 1200×972 AVIF, browser-verified
  2026-08-17): stark-white centered page, dark "Multiselect #02" 28px
  heading, gray "Select Topics" label, white trigger (thin light-gray
  border, dark-gray caret), the dropdown OPEN below: white list with "All"
  as the FIRST row then Topic 1–N separated by thin gray dividers, the row
  under the cursor (Topic 4) highlighted rose `#e8647c` with white text,
  and a scrollbar on the right (11 items overflow) — clean, utilitarian
  component-demo aesthetic. NOTE: the screenshot shows "All" as a menu row,
  but live Semantic demotes the `value=""` option to the trigger's
  placeholder text and removes it from the menu (live DOM is authoritative;
  see quirks).
- **Live DOM structure (1:1):**
  - `section.ftco-section` (custom: `padding: 7em 0`; page bg stays
    Bootstrap `#fff`) → `div.container` (max-width 1140px) → two
    `div.row.justify-content-center`:
    1. `div.col-md-6.text-center.mb-5` → `h2.heading-section` —
       "Multiselect #02" (custom: `font-size: 28px; color: #000`; inherits
       Lato, weight 400, line-height 1.5; observed `mb-5` ≈ 42–48px gap
       below).
    2. `div.col-lg-4.col-md-6.d-flex.justify-content-center.align-items-center`
       (observed ≈ 380px wide at lg) → `div.inline.w-100.field` (observed
       ≈ 350px wide):
       - `label` — "Select Topics" (custom body color `gray` = #808080;
         16px, weight 400, ~7px margin-bottom; NOT associated with the
         control — no `for` attribute, and it does not wrap the select).
       - `select[name="skills"][multiple]` with class
         `label ui selection fluid dropdown` and 12 `<option>`s: `All`
         (value=""), Topic 1…Topic 11 (values 1–11). The plugin replaces
         it with the widget below.
  - **Widget (plugin-rendered, from the live DOM):**
    `div.label.ui.selection.fluid.dropdown.multiple[tabindex="0"]`
    containing:
    - the original `<select>` (kept hidden as the data source — Semantic
      syncs selected options into it).
    - `i.dropdown.icon` — the caret (Semantic `Dropdown` font glyph, a
      down chevron; computed: size ~10.3px, color `rgba(0,0,0,0.87)`,
      absolutely positioned `top: 15px; right: ~10.3px`; custom CSS rule
      `.ui.selection.dropdown > .dropdown.icon { top: 15px }`).
    - `div.default.text` — "All" (computed: font-size 12px, weight 700,
      color `rgba(191,191,191,0.87)` — faded placeholder; `display:
inline-block` with zero selections, `display: none` after the first
      selection).
    - `div.menu[tabindex="-1"]` — the dropdown panel: `position:
absolute; top: 100%` of the trigger (observed top ≈ 52px, height ≈
      54px trigger), white bg, **no visible border** (this customized
      Semantic build strips the default `rgba(34,36,38,.15)` border —
      computed `border: ""`), radius `0 0 4px 4px`, box-shadow `0 3px
19px -15px rgba(0,0,0,0.41)` (custom rule on
      `.ui.selection.active.dropdown .menu`), max-height ~224px,
      `overflow-y: auto` (scrollbar present with 11 items), padding 0.
      Children: eleven `div.item[data-value="1..11"]` — "Topic 1"…"Topic
      11" (computed: padding `11px 16px`, color `rgba(0,0,0,0.95)`,
      transparent bg; custom rule `.ui.selection.dropdown .menu > .item {
border-top: 1px solid #e6e6e6 }` — thin gray dividers between
      rows; custom rule `.ui.dropdown .menu > .item:hover { background:
#e8647c; color: #fff }` — rose highlight on hover; Semantic's
      "selected" item also gets the rose treatment).
    - Selected items (after clicking topics, `useLabels: true`):
      `a.ui.label.transition.visible[data-value="N"]` tags rendered in
      the trigger — "Topic N" text plus `i.delete.icon` (white ×).
      Computed: background `rgb(232,100,124)` = **#e8647c**, color #fff,
      radius 4px, padding `8px 10px`, font-size 12px. Clicking × removes
      the tag and unchecks the option. The trigger's height grows with
      the tags (observed ≈ 33px min-height, ≈ 54px with two tags;
      font-size inside is 12px — Semantic's label scale; the trigger
      border stays `1px solid #e6e6e6` and radius relaxes to
      `4px 4px 0 0` while the menu is open).
  - **Footer:** the original has NO footer; per monorepo convention add a
    minimal attribution footer linking `https://www.componentdock.com/`
    ("Component Dock") so every shipped template carries the required link.
- **QUIRK — preview URL:** the default
  `https://preview.colorlib.com/theme/multiselect-02/` 404s; the real URL is
  under `/theme/bootstrap/`. (Same as every member of this UI series.)
- **QUIRK — "All" is NOT a menu row live:** the raw markup's first option
  `All` (value="") is consumed by Semantic as the trigger's _default text_
  (placeholder) and removed from the menu. The static screenshot shows it
  as the first menu row (pre-interaction rendering), but live behavior
  (verified in-browser) is placeholder. Ask for "select all" via the
  placeholder text. Recreate: placeholder "All" in the trigger, 11 topic
  rows in the menu.
- **QUIRK — label association:** the source `label` "Select Topics" has no
  `for` and does not wrap the select. In the recreation, associate the
  label with the trigger button (`htmlFor`/`id` or an `aria-label`) for
  a11y (documented fix).
- **QUIRK — hidden `<select>`:** the visible widget is entirely
  plugin-rendered; the native `select[multiple]` exists only as the data
  source (semantics are lost; even its name attribute survives only on the
  hidden element). In the recreation, build the listbox from real state:
  trigger `button` with `aria-haspopup="listbox"` + `aria-expanded`, a
  `role="listbox"` panel whose rows expose `aria-selected` (or checkbox
  semantics per option), and the hidden native semantics replaced by real
  DOM state (documented improvement over the source).
- **QUIRK — tag-based selection UI:** unlike Picker/Multiselect 01
  (checkboxes in the panel), this widget shows selections as rose _label
  tags inside the trigger_ with per-tag × delete icons (Semantic
  `useLabels: true` default). The panel rows are plain text items (no
  checkboxes). Recreate the tags exactly.
- **Visual design (screenshot + live browser):** minimal white page, one
  centered dark 28px heading, gray "Select Topics" label, and ONE floating
  control: white trigger (thin `#e6e6e6` border, 4px radius, 10px padding,
  faded-gray "All" placeholder + dark-gray caret at right ~10px / top
  15px); open panel: white, no border, soft diffuse shadow
  `0 3px 19px -15px rgba(0,0,0,0.41)`, bottom-only 4px radius, rows divided
  by 1px `#e6e6e6` lines, rose `#e8647c` hover/selected fill with white
  text. Signature color: rose **#e8647c** (tag fill, hover fill, link
  color). Grays carry the rest: placeholder `rgba(191,191,191,0.87)`,
  caret `rgba(0,0,0,0.87)`, rows `rgba(0,0,0,0.95)`, label/dividers
  `#808080`/`#e6e6e6`.
- **Section order (1:1 from live DOM):**
  1. **Heading section** — full-width centered `h2.heading-section`
     "Multiselect #02" (recreate as the brand name "Sifter", like Picker
     renames its demo heading).
  2. **Multiselect control** — label "Select Topics" (gray, 16px) above a
     full-width trigger (white, 1px `#e6e6e6` border, 4px radius, 10px
     padding, "All" placeholder, dark-gray caret right) + dropdown panel
     (white, bottom radius 4px, soft shadow, Topic 1–11 rows with 1px gray
     dividers, rose `#e8647c` hover) + rose label tags with × in the
     trigger for each selection.
  3. **Footer** — no footer in source; minimal Component Dock footer per
     convention.
- **Design tokens:**
  - Brand accent: **`#e8647c`** (rose/pink — label-tag fill with white
    text, menu-row hover/selected fill with white text, `a` link color,
    `.bg-primary` override). No other hue in the template.
  - Trigger: **white** bg, border **1px solid `#e6e6e6`** (both states;
    custom `!important` on active), radius **4px** (relaxes to
    `4px 4px 0 0` while open), **padding: 10px**, min-height ≈33px (grows
    with tag rows; ≈54px with two tags), **box-shadow: none** when closed
    (customized build strips Semantic's default; `:focus` also
    `box-shadow: none`, border `#e6e6e6`), text/rows font-size 12px inside
    (Semantic label scale).
  - Caret: Semantic `Dropdown` font down-chevron, size ≈10.3px, color
    **`rgba(0,0,0,0.87)`**, absolute **top 15px / right ≈10px** of the
    trigger (lucide `ChevronDown` replaces the font glyph).
  - Placeholder text: "All", font-size **12px**, weight **700**, color
    **`rgba(191,191,191,0.87)`**; hidden (`display: none`) once ≥1 topic is
    selected.
  - Menu: **white** bg, **no border**, radius **0 0 4px 4px**, box-shadow
    **`0 3px 19px -15px rgba(0,0,0,0.41)`** (only while open — the custom
    rule lives on `.ui.selection.active.dropdown .menu`), **max-height
    ≈224px** with `overflow-y: auto` (scrollbar with 11 rows), `position:
absolute; top: 100%` (flush under the trigger), padding 0.
  - Menu rows: padding **11px 16px**, color **`rgba(0,0,0,0.95)`**,
    transparent bg; every row has **`border-top: 1px solid #e6e6e6`**
    (divider); hover/selected → bg **`#e8647c`**, text **#fff**.
  - Selected tags: bg **`#e8647c`**, text **#fff**, radius **4px**,
    padding **8px 10px**, font-size **12px**, delete icon **white ×**
    (lucide `X` replaces the font glyph).
  - Field label: "Select Topics", color **gray** (`#808080`), **16px**,
    weight 400, ~7px margin-bottom, left-aligned above the control.
  - Heading: **28px**, **`#000`**, Lato weight 400, line-height 1.5,
    centered, ~42–48px gap below.
  - Font: **Lato** (300/400/700 loaded by the source; only **400** is used
    by this template's rules — loading 400 via Google Fonts `<link>` is
    faithful) for body (16px, line-height 1.8, color gray, bg #fff) and
    headings.
  - Rhythm: `section.ftco-section` `padding: 7em 0` (≈112px vertical);
    centered columns (`col-md-6` heading, `col-lg-4 col-md-6` ≈380px →
    control field ≈350px wide); recreate with a centered `max-w-2xl`
    (1140px) container, `text-center` heading, and the control column
    capped around `max-w-sm` (24rem ≈ 384px) with `w-full` field.
- **Recreation approach:** single page, `min-h-screen` white section with
  ~112px top/bottom padding, centered: h2 "Sifter" (28px, #000, Lato 400)
  with ~42–48px gap, then a `max-w-sm` (~24rem) centered column: label
  "Select Topics" (`text-gray-500` → `#808080`, 16px, mb ~7px, with
  `htmlFor` association) above a state-driven React multiselect (no
  Bootstrap, no Semantic, no jQuery): trigger `button` (white, 1px
  `#e6e6e6` border, rounded-4px, py-10px px-10px, min-h ~33px,
  `aria-haspopup="listbox"` `aria-expanded`, `ChevronDown`
  `rgba(0,0,0,0.87)` absolute right ~10px top 15px) showing the faded
  "All" placeholder when nothing is selected, else the rose tag list; panel
  `role="listbox"` (white, no border, `rounded-b-4px`, shadow
  `0 3px 19px -15px rgba(0,0,0,0.41)`, max-h ~224px overflow-y-auto,
  `top-full` anchored) with 11 rows "Topic 1".."Topic 11" (py-11px
  px-16px, `border-t` 1px `#e6e6e6`, hover → bg `#e8647c` text-white);
  selecting keeps the panel open and appends a `#e8647c` tag (white text,
  4px radius, 8px 10px padding, 12px, `X` delete icon) per topic; × removes
  the tag; outside-click / Escape / trigger toggle closes the panel and
  selections persist. Plus the mandatory minimal Component Dock footer.
  Icons: lucide-react (`ChevronDown`, `X` — probe exports before use — see
  tasks.md). No images at all (the source has none).

## Requirements

### Requirement: Heading section

The system SHALL render a centered heading section on a white page.

#### Scenario: Centered heading

- **GIVEN** the Sifter app is rendered
- **WHEN** the page loads
- **THEN** a white page SHALL show a centered heading "Sifter" (the new
  brand name in place of the source's "Multiselect #02" demo label) at
  ~28px in `#000`
- **AND** the heading SHALL use the Lato font family at weight 400 with
  line-height 1.5
- **AND** the page SHALL have generous vertical padding (~112px — the
  source's `ftco-section` 7em) above and below the content
- **AND** the content SHALL be centered horizontally inside a comfortable
  container (≈1140px) with the control column capped at ~24rem

### Requirement: Multiselect control

The system SHALL render a labeled multiselect trigger button that opens a
dropdown panel.

#### Scenario: Label and trigger

- **GIVEN** the heading renders
- **WHEN** the control area displays
- **THEN** a gray label "Select Topics" SHALL show above the control at
  ~16px with ~7px bottom margin
- **AND** the label SHALL be programmatically associated with the control
  (the source's bare `label` has no association — fixed in the recreation
  for a11y)
- **AND** a white trigger button SHALL sit below the label with a 1px
  `#e6e6e6` border, 4px border radius, ~10px padding, and no box-shadow
  when closed
- **AND** the trigger SHALL show the faded placeholder text "All"
  (12px, weight 700, `rgba(191,191,191,0.87)`) when nothing is selected
- **AND** a dark-gray (`rgba(0,0,0,0.87)`) chevron-down caret SHALL sit at
  the right edge (~10px inset, ~15px from the top) of the trigger
- **AND** the trigger SHALL have `aria-haspopup="listbox"` and
  `aria-expanded="false"` initially

#### Scenario: Dropdown opens with eleven topic options

- **WHEN** the user activates the trigger
- **THEN** a white dropdown panel SHALL appear flush below the trigger
  (bottom-only 4px radius, no border, same width, soft shadow `0 3px 19px
-15px rgba(0,0,0,0.41)`, max-height ~224px with a vertical scrollbar if
  needed)
- **AND** `aria-expanded` SHALL flip to `true`
- **AND** the panel SHALL list the eleven options Topic 1 through Topic 11
  in order (the source's "All" row does NOT appear in the live menu — it is
  the trigger placeholder; verified live)
- **AND** every row SHALL render at ~11px 16px padding in
  `rgba(0,0,0,0.95)` with a 1px `#e6e6e6` border-top divider between the
  rows

### Requirement: Selection behavior

The system SHALL select topics as rose label tags and keep the panel open.

#### Scenario: Selecting topics

- **GIVEN** the dropdown is open
- **WHEN** the user clicks "Topic 1" and then "Topic 2"
- **THEN** the dropdown SHALL STAY open (the source's multi-select
  pattern — picking an option never closes the panel)
- **AND** each selection SHALL render as a rose `#e8647c` label tag
  inside the trigger with white text, 4px radius, ~8px 10px padding, ~12px
  font-size, and a white × delete icon
- **AND** the placeholder "All" SHALL hide once at least one topic is
  selected
- **AND** the trigger border SHALL stay 1px `#e6e6e6` while the panel is
  open and its radius SHALL relax to `4px 4px 0 0`
- **AND** the selected rows SHALL reflect their state accessibly
  (`aria-selected` or checkbox semantics per row)

#### Scenario: Removing tags

- **WHEN** the user clicks the × on a selected tag
- **THEN** that tag SHALL be removed from the trigger and its row SHALL
  return to the unselected state
- **AND** when the last tag is removed the placeholder "All" SHALL return

### Requirement: Dropdown dismissal

The system SHALL close the dropdown on outside interaction.

#### Scenario: Close interactions

- **GIVEN** the dropdown is open
- **WHEN** the user clicks outside the control, presses Escape, or
  activates the trigger again
- **THEN** the panel SHALL close and `aria-expanded` SHALL return to
  `false`
- **AND** the selected tags SHALL be preserved across open/close cycles
  (closing never clears state)

### Requirement: Page composition

The system SHALL compose the page with a main landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Sifter app is rendered
- **WHEN** the page loads
- **THEN** the heading and the multiselect control SHALL render in the main
  landmark
- **AND** the document title SHALL be "Sifter — Multiselect Dropdown"

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Sifter app is rendered
- **WHEN** the footer displays
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text)

## Verification checklist

- [ ] `openspec/specs/template-sifter/spec.md` exists on main with the full
      section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/sifter/tasks.md` exists on main with design notes and
      the implementation task outline.
- [ ] Fidelity: structure matches the Multiselect 02 preview DOM 1:1
      (centered 28px black heading → label "Select Topics" (gray, 16px) +
      white trigger (1px #e6e6e6 border, 4px radius, 10px padding, "All"
      placeholder, dark-gray caret right ~10px) → white dropdown panel
      (bottom radius 4px, shadow `0 3px 19px -15px rgba(0,0,0,0.41)`,
      Topic 1–11 rows with 1px #e6e6e6 dividers, rose #e8647c hover) →
      rose #e8647c label tags with × inside the trigger → minimal Component
      Dock footer).
- [ ] Tokens used in the app: brand rose `#e8647c` (tag fill + hover fill +
      white `X`), trigger/panel `#fff`, border `#e6e6e6`, placeholder
      `rgba(191,191,191,0.87)`, caret `rgba(0,0,0,0.87)`, rows
      `rgba(0,0,0,0.95)`, label gray; radius 4px; Lato 400 via Google Fonts
      `<link>`.
- [ ] No ColorLib references in `apps/sifter` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] NO images (the source has none); icons only via lucide-react
      (`ChevronDown`, `X` — probed before use). NO font-awesome, NO
      Semantic UI, NO Bootstrap shipped.
- [ ] Source behavior honored: panel stays open while selecting; selections
      render as rose tags with per-tag × removal; "All" is the placeholder
      (NOT a menu row — live-verified); placeholder hides after the first
      selection and returns when all tags are removed.
- [ ] Documented deviations (a11y fixes): `label` got real association
      (`htmlFor`/`aria-label`); hidden `<select>` semantics rebuilt as an
      accessible listbox with `aria-haspopup`/`aria-expanded` and per-row
      selected state.
- [ ] Implementer gate: `scripts/verify-app.sh sifter` (typecheck + lint +
      100% coverage tests + build) and `npm run spec:validate`.
