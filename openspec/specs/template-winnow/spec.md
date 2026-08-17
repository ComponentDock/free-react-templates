# Template: Winnow (Multiselect Dropdown)

## Purpose

Winnow is a single-page multiselect-dropdown component demo in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Multiselect 03" free template (source:
https://colorlib.com/wp/template/multiselect-03/), built under a DIFFERENT
name (**Winnow** — the third of the selection-themed names for this
Bootstrap Multiselect UI series, after "Picker" took Multiselect 01 and
"Sifter" took Multiselect 02; "to winnow" is to blow the chaff from the
grain and keep the good — exactly what a multiselect filter does — per the
monorepo naming mandate: never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a minimal, centered demo page (customized Bootstrap 4.3.1 +
**Semantic UI 2.2.13**): a `section.ftco-section` with a centered
`h2.heading-section` "Multiselect #03", and below it a single multiselect
field — a `label` "Select Language" above a `select[multiple]` with 10
options (`All` with an empty value + PHP, Javascript, Java, jQuery, SQL,
Wordpress, Python, .Net, HTML, CSS) that Semantic's
`$('.no.label.ui.dropdown').dropdown({ useLabels: false })` call transforms
into a fully-rendered `.ui.fluid.selection.dropdown.multiple` widget. The
`no label` class makes this series member DIFFERENT from Sifter (Multiselect
02): **selections do NOT render as tag pills** — instead the trigger shows a
Semantic summary text ("2 selected" — "N selected" while items are chosen,
faded "All" placeholder when empty), and the chosen rows are marked with
blue `#3e64ff` text in the open menu. This template is the one interactive
surface: the multiselect control. Winnow recreates that structure 1:1 with
matching layout, tokens, typography, and content (no ColorLib assets
copied).

> NAMING NOTE: the ColorLib source name "Multiselect 03" is FORBIDDEN as the
> app name. **Winnow** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-17). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Multiselect 03". Listed in TEMPLATES.md under
  **Bootstrap Multiselect (20)** (section header line 821; row at line 825).
  Free multiselect-dropdown component template. The `multiselect-03` slug
  appears exactly ONCE in TEMPLATES.md (no dup rows to mark). Siblings in
  the series already prepped: Multiselect 01 → `apps/picker` spec
  (`openspec/specs/template-picker/`), Multiselect 02 → `apps/sifter` spec
  (`openspec/specs/template-sifter/`).
- **Live preview DOM — REACHABLE (verified 2026-08-17 by direct fetch AND
  browser interaction):** the default preview URL
  `https://preview.colorlib.com/theme/multiselect-03/` returns 404 (`Not
Found`, 9 bytes); the REAL preview URL (same `/theme/bootstrap/` prefix as
  the rest of the Bootstrap UI series) is
  `https://preview.colorlib.com/theme/bootstrap/multiselect-03/` (HTTP 200,
  3,950 bytes — the whole page is 59 lines). Stylesheets: `css/style.css`
  (220.8 KB = **CUSTOMIZED Bootstrap 4.3.1** + a custom token tail at the
  end — the tail is the real token source),
  `https://cdn.jsdelivr.net/npm/semantic-ui@2.2.13/dist/semantic.min.css`
  (the widget engine's styles), and
  `https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css`
  (LOADED but UNUSED — the live DOM has zero `fa-` classes; the caret comes
  from Semantic's own `Dropdown` icon font; do NOT load font-awesome in the
  recreation). **Lato** (300/400/700) via cf-fonts @font-face blocks in the
  head — only weight 400 is used by this page's rules (body
  `font-family: "Lato", Arial, sans-serif; font-size: 16px; line-height:
1.8; color: gray; background: #fff`; `h1–h5 { line-height: 1.5;
font-weight: 400; font-family: "Lato", Arial, sans-serif; color: #000 }`).
  Scripts: `js/jquery.min.js`, `js/popper.js`, `js/bootstrap.min.js`
  (loaded, unused — no Bootstrap components on this page),
  `https://cdn.jsdelivr.net/npm/semantic-ui@2.2.13/dist/semantic.min.js`
  (the dropdown engine), and `js/main.js` — the demo logic:
  `$('.label.ui.dropdown').dropdown()` (dead on this page — no matching
  DOM) and `$('.no.label.ui.dropdown').dropdown({ useLabels: false })`
  (THE live init — the `no label` class on the select is what activates it;
  what was dead code in Sifter's main.js is the ACTIVE path here) plus a
  `.ui.button` restore-defaults handler (dead code, no matching DOM).
  Screenshot (`multiselect-03.jpg`, 1200×972 AVIF, browser-verified
  2026-08-17): stark-white centered page, dark "Multiselect #03" 28px
  heading, gray "Select Language" label, white trigger (thin light-gray
  border, "All" text + dark-gray caret right), the dropdown OPEN below:
  white list with "All" as the FIRST row then PHP / Javascript / Java /
  jQuery / SQL / Wordpress… separated by thin gray dividers, the row under
  the cursor (jQuery) highlighted with a light-blue tint, and a scrollbar
  on the right (10 items overflow the ~224px panel) — clean, utilitarian
  component-demo aesthetic. NOTE: as with Sifter, the static screenshot
  shows "All" as a menu row, but live Semantic demotes the `value=""`
  option to the trigger's placeholder (live DOM is authoritative); the
  screenshot's light-blue hover tint is from a pre-customization render —
  the live custom CSS hovers with TRANSPARENT background + blue `#3e64ff`
  text (verified in the stylesheet AND on the selected `active` row via
  computed styles).
- **Live DOM structure (1:1):**
  - `section.ftco-section` (custom: `padding: 7em 0`; page bg stays
    Bootstrap `#fff`) → `div.container` (max-width 1140px) → two
    `div.row.justify-content-center`:
    1. `div.col-md-6.text-center.mb-5` → `h2.heading-section` —
       "Multiselect #03" (custom: `font-size: 28px; color: #000`; inherits
       Lato, weight 400, line-height 1.5; observed `mb-5` ≈ 42–48px gap
       below).
    2. `div.col-md-6.col-lg-4.d-flex.justify-content-center.align-items-center`
       (observed ≈ 380px wide at lg) → `div.inline.w-100.field` (observed
       ≈ 350px wide):
       - `label` — "Select Language" (custom body color `gray` = #808080;
         16px, weight 400, ~7px margin-bottom; NOT associated with the
         control — no `for` attribute, and it does not wrap the select).
       - `select[name="skills"][multiple]` with class
         `ui fluid selection dropdown no label` and 11 `<option>`s: `All`
         (value=""), PHP (1), Javascript (2), Java (3), jQuery (4), SQL
         (5), Wordpress (6), Python (7), .Net (8), HTML (9), CSS (10). The
         plugin replaces it with the widget below.
  - **Widget (plugin-rendered, from the live DOM):**
    `div.ui.fluid.selection.dropdown.no.label.multiple[tabindex="0"]`
    (~350×47px) containing:
    - the original `<select>` (kept hidden — `display: none` — as the data
      source; Semantic syncs selected options into it).
    - `i.dropdown.icon` — the caret (Semantic `Dropdown` font glyph, a
      down chevron; computed: size ~10.3px, color `rgba(0,0,0,0.87)`,
      absolutely positioned `top: 15px; right: ~10.3px`; custom CSS rule
      `.ui.selection.dropdown > .dropdown.icon { top: 15px }`).
    - `div.default.text` — "All" (computed: font-size 12px, weight 700,
      color `rgba(191,191,191,0.87)` — faded placeholder; `display:
inline-block` with zero selections; REPLACED entirely once ≥1 item is
      selected — see summary text below).
    - `div.menu[tabindex="-1"]` — the dropdown panel: `position: absolute;
top: 100%` of the trigger, white bg, **no visible border** (the
      customized Semantic build strips the default — computed border width
      0; the custom tail only sets `border-color` on it), radius
      `0 0 4px 4px`, box-shadow `0 3px 19px -15px rgba(0,0,0,0.41)` (while
      active), max-height 224.4px, `overflow-y: auto` (scrollbar with 10
      items), padding 0. Children: ten `div.item[data-value="1..10"]` —
      "PHP"…"CSS" (computed: padding `11px 16px`, color `black`, font-size
      13px, weight 400, transparent bg; custom rule
      `.ui.selection.dropdown .menu > .item { border-top: 1px solid #e6e6e6 }`
      — thin gray dividers between rows; custom rule
      `.ui.dropdown .menu > .item:hover { background: transparent; color:
#3e64ff }` — blue TEXT on transparent bg (no fill — differs from
      Sifter's rose fill); custom rule `.ui.dropdown .menu .active.item {
color: #3e64ff }` — the SELECTED row keeps blue `#3e64ff` text).
    - Selection summary (after picking PHP + Javascript, `useLabels:
false`): the `.default.text` is GONE and ONE `div.text` shows
      **"2 selected"** — Semantic's multiple-selection summary text.
      Computed: font-size 12px, weight 700 (custom rule
      `.ui.selection.visible.dropdown > .text:not(.default) { font-weight:
700 }`), color `rgba(0,0,0,0.8)`, Lato, `inline-block`. The summary
      is NOT interactive; deselecting happens by re-opening the panel and
      clicking the active (blue) row, which toggles it off and decrements
      the count (at zero the "All" placeholder returns). The hidden select
      syncs (selectedOptions = clicked values).
  - **Footer:** the original has NO footer; per monorepo convention add a
    minimal attribution footer linking `https://www.componentdock.com/`
    ("Component Dock") so every shipped template carries the required link.
- **QUIRK — preview URL:** the default
  `https://preview.colorlib.com/theme/multiselect-03/` 404s; the real URL
  is under `/theme/bootstrap/`. (Same as every member of this UI series.)
- **QUIRK — "All" is NOT a menu row live:** the raw markup's first option
  `All` (value="") is consumed by Semantic as the trigger's _default text_
  (placeholder) and removed from the menu. The static screenshot shows it
  as the first menu row (pre-interaction rendering) — live behavior
  (verified in-browser) is placeholder. Recreate: placeholder "All" in the
  trigger, 10 language rows in the menu.
- **QUIRK — summary-text selection UI (the series differentiator):** this
  member uses `useLabels: false` (via the `no label` class), so selections
  do NOT render as rose tag pills (that was Sifter/Multiselect 02). The
  trigger instead shows "N selected" (or "1 selected") in bold 12px
  `rgba(0,0,0,0.8)`; the menu rows are plain text — selected rows get blue
  `#3e64ff` text (`active` class). Recreate the summary text exactly.
- **QUIRK — trigger border color is stateful:** on a fresh load (closed,
  unfocused) the trigger border is Semantic's default `1px solid
rgba(34,36,38,0.15)`; once interacted with (custom `!important` on
  `.ui.selection.active.dropdown`) the border is `#e6e6e6` and can stick
  after closing. Recreate: closed border `rgba(34,36,38,0.15)`, open border
  `#e6e6e6` (radius `4px 4px 0 0` while open) — document as an intentional
  simplification that the closed-border state is the fresh-load one.
- **QUIRK — label association:** the source `label` "Select Language" has
  no `for` and does not wrap the select. In the recreation, associate the
  label with the trigger button (`htmlFor`/`id` or an `aria-label`) for
  a11y (documented fix).
- **QUIRK — hidden `<select>`:** the visible widget is entirely
  plugin-rendered; the native `select[multiple]` exists only as the data
  source (semantics are lost). In the recreation, build the listbox from
  real state: trigger `button` with `aria-haspopup="listbox"` +
  `aria-expanded`, a `role="listbox"` panel whose rows expose
  `aria-selected`, and the hidden native semantics replaced by real DOM
  state (documented improvement over the source).
- **Visual design (screenshot + live browser):** minimal white page, one
  centered dark 28px heading, gray "Select Language" label, and ONE
  floating control: white trigger (~350×47px, thin light-gray border, 4px
  radius, 10px padding, faded-gray "All" placeholder + dark-gray caret at
  right ~10px / top 15px); open panel: white, no border, soft diffuse
  shadow `0 3px 19px -15px rgba(0,0,0,0.41)`, bottom-only 4px radius, rows
  divided by 1px `#e6e6e6` lines, hover/selected rows in blue `#3e64ff`
  text on transparent bg. Signature color: blue **#3e64ff** (row
  hover/selected text, link color). Grays carry the rest: placeholder
  `rgba(191,191,191,0.87)`, caret `rgba(0,0,0,0.87)`, items `black`,
  summary `rgba(0,0,0,0.8)`, label `#808080`, dividers `#e6e6e6`, trigger
  border `rgba(34,36,38,0.15)` (fresh) / `#e6e6e6` (active).
- **Section order (1:1 from live DOM):**
  1. **Heading section** — full-width centered `h2.heading-section`
     "Multiselect #03" (recreate as the brand name "Winnow", like Picker
     and Sifter rename their demo headings).
  2. **Multiselect control** — label "Select Language" (gray, 16px) above
     a full-width trigger (white, 1px `rgba(34,36,38,0.15)` border
     closed / `#e6e6e6` open, 4px radius → `4px 4px 0 0` open, 10px
     padding, "All" placeholder, dark-gray caret right) + dropdown panel
     (white, no border, bottom radius 4px, shadow `0 3px 19px -15px
rgba(0,0,0,0.41)`, PHP…CSS rows with 1px gray dividers and blue
     `#3e64ff` hover/selected text) + "N selected" summary text in the
     trigger.
  3. **Footer** — no footer in source; minimal Component Dock footer per
     convention.
- **Design tokens:**
  - Brand accent: **`#3e64ff`** (blue — menu-row hover text on transparent
    bg, selected-row `active` text, `a` link color, `.bg-primary`
    override). Unlike Sifter the accent is TEXT-ONLY, never a fill.
  - Trigger: **white** bg, **10px padding**, min-height ≈47px (fixed;
    grows only if the summary wraps), **border: 1px solid
    `rgba(34,36,38,0.15)`** (fresh/closed; `#e6e6e6` while active —
    custom `!important`), radius **4px** (relaxes to `4px 4px 0 0` while
    open), **box-shadow: none** when closed (customized build strips
    Semantic's default; `:focus` also `box-shadow: none`, border
    `#e6e6e6`), font-size 12px / weight 700 inside (Semantic label scale).
  - Caret: Semantic `Dropdown` font down-chevron, size ≈10.3px, color
    **`rgba(0,0,0,0.87)`**, absolute **top 15px / right ≈10px** of the
    trigger (lucide `ChevronDown` replaces the font glyph).
  - Placeholder text: "All", font-size **12px**, weight **700**, color
    **`rgba(191,191,191,0.87)`**; replaced by the summary text once ≥1
    item is selected (returns when all are deselected).
  - Summary text: **"N selected"** (e.g. "2 selected"), font-size **12px**,
    weight **700**, color **`rgba(0,0,0,0.8)`**, `inline-block`, NOT
    interactive.
  - Menu: **white** bg, **no border**, radius **0 0 4px 4px**, box-shadow
    **`0 3px 19px -15px rgba(0,0,0,0.41)`** (only while open), **max-height
    ≈224px** with `overflow-y: auto` (scrollbar with 10 rows), `position:
absolute; top: 100%` (flush under the trigger), padding 0.
  - Menu rows: padding **11px 16px**, color **black**, font-size **13px**,
    weight 400, transparent bg; every row has **`border-top: 1px solid
#e6e6e6`** (divider); hover / selected → text **`#3e64ff`** on
    transparent bg (NO fill).
  - Field label: "Select Language", color **gray** (`#808080`), **16px**,
    weight 400, ~7px margin-bottom, left-aligned above the control.
  - Heading: **28px**, **`#000`**, Lato weight 400, line-height 1.5,
    centered, ~42–48px gap below.
  - Font: **Lato** (300/400/700 loaded by the source; only **400** is used
    by this template's rules — loading 400 via Google Fonts `<link>` is
    faithful) for body (16px, line-height 1.8, color gray, bg #fff) and
    headings.
  - Rhythm: `section.ftco-section` `padding: 7em 0` (≈112px vertical);
    centered columns (`col-md-6` heading, `col-md-6 col-lg-4` ≈380px →
    control field ≈350px wide, trigger ≈350×47px); recreate with a
    centered `max-w-2xl` (1140px) container, `text-center` heading, and
    the control column capped around `max-w-sm` (24rem ≈ 384px) with
    `w-full` field.
- **Recreation approach:** single page, `min-h-screen` white section with
  ~112px top/bottom padding, centered: h2 "Winnow" (28px, #000, Lato 400)
  with ~42–48px gap, then a `max-w-sm` (~24rem) centered column: label
  "Select Language" (`text-gray-500` → `#808080`, 16px, mb ~7px, with
  `htmlFor` association) above a state-driven React multiselect (no
  Bootstrap, no Semantic, no jQuery): trigger `button` (white, 1px
  `rgba(34,36,38,0.15)` border closed / `#e6e6e6` open, rounded-4px →
  `rounded-b-none` open, py-10px px-10px, min-h ~47px,
  `aria-haspopup="listbox"` `aria-expanded`, `ChevronDown`
  `rgba(0,0,0,0.87)` absolute right ~10px top 15px) showing the faded
  "All" placeholder when nothing is selected, else the bold "N selected"
  summary; panel `role="listbox"` (white, no border, `rounded-b-4px`,
  shadow `0 3px 19px -15px rgba(0,0,0,0.41)`, max-h ~224px overflow-y-auto,
  `top-full` anchored) with 10 rows PHP…CSS (py-11px px-16px, text-13px
  black, `border-t` 1px `#e6e6e6`, hover/selected → text `#3e64ff`,
  transparent bg); selecting toggles the row, KEEPS the panel open,
  updates "N selected" and the hidden-state-equivalent (real React state);
  clicking a selected row again deselects it (count decrements; "All"
  placeholder returns at zero); outside-click / Escape / trigger toggle
  closes the panel and selections persist. Plus the mandatory minimal
  Component Dock footer. Icons: lucide-react (`ChevronDown` — probe export
  before use — see tasks.md; NO X/delete icon is needed: there are no
  tags). No images at all (the source has none).

## Requirements

### Requirement: Heading section

The system SHALL render a centered heading section on a white page.

#### Scenario: Centered heading

- **GIVEN** the Winnow app is rendered
- **WHEN** the page loads
- **THEN** a white page SHALL show a centered heading "Winnow" (the new
  brand name in place of the source's "Multiselect #03" demo label) at
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
- **THEN** a gray label "Select Language" SHALL show above the control at
  ~16px with ~7px bottom margin
- **AND** the label SHALL be programmatically associated with the control
  (the source's bare `label` has no association — fixed in the recreation
  for a11y)
- **AND** a white trigger button SHALL sit below the label with a 1px
  border (`rgba(34,36,38,0.15)` when closed — the source's fresh-load
  state), 4px border radius, ~10px padding, and no box-shadow when closed
- **AND** the trigger SHALL show the faded placeholder text "All"
  (12px, weight 700, `rgba(191,191,191,0.87)`) when nothing is selected
- **AND** a dark-gray (`rgba(0,0,0,0.87)`) chevron-down caret SHALL sit at
  the right edge (~10px inset, ~15px from the top) of the trigger
- **AND** the trigger SHALL have `aria-haspopup="listbox"` and
  `aria-expanded="false"` initially

#### Scenario: Dropdown opens with ten language options

- **WHEN** the user activates the trigger
- **THEN** a white dropdown panel SHALL appear flush below the trigger
  (bottom-only 4px radius, no border, same width, soft shadow `0 3px 19px
-15px rgba(0,0,0,0.41)`, max-height ~224px with a vertical scrollbar if
  needed)
- **AND** the trigger border SHALL turn `#e6e6e6` and its radius SHALL
  relax to `4px 4px 0 0` while the panel is open
- **AND** `aria-expanded` SHALL flip to `true`
- **AND** the panel SHALL list the ten options PHP, Javascript, Java,
  jQuery, SQL, Wordpress, Python, .Net, HTML, CSS in that order (the
  source's "All" row does NOT appear in the live menu — it is the trigger
  placeholder; verified live)
- **AND** every row SHALL render at ~11px 16px padding in black at ~13px
  with a 1px `#e6e6e6` border-top divider between the rows

### Requirement: Selection behavior

The system SHALL select options and summarize them as an "N selected"
count, keeping the panel open.

#### Scenario: Selecting options

- **GIVEN** the dropdown is open
- **WHEN** the user clicks "PHP" and then "Javascript"
- **THEN** the dropdown SHALL STAY open (the source's multi-select
  pattern — picking an option never closes the panel)
- **AND** the placeholder "All" SHALL be replaced by a bold summary text
  "2 selected" (12px, weight 700, `rgba(0,0,0,0.8)`) inside the trigger
  ("1 selected" for one, "N selected" for N — the source's Semantic
  `useLabels: false` summary; there are NO tag pills in this template)
- **AND** the selected rows SHALL show blue `#3e64ff` text on transparent
  backgrounds in the open panel (the source's `active` item state)
- **AND** each row SHALL reflect its state accessibly (`aria-selected`)
- **AND** the hidden `select[multiple]` semantics of the source SHALL be
  replaced by real React state that mirrors the same values (1–10)

#### Scenario: Deselecting options

- **WHEN** the user clicks an already-selected (blue-text) row in the open
  panel
- **THEN** that row SHALL toggle back to its unselected state
- **AND** the summary text SHALL decrement ("2 selected" → "1 selected")
- **AND** when the last selection is removed the placeholder "All" SHALL
  return

### Requirement: Dropdown dismissal

The system SHALL close the dropdown on outside interaction.

#### Scenario: Close interactions

- **GIVEN** the dropdown is open
- **WHEN** the user clicks outside the control, presses Escape, or
  activates the trigger again
- **THEN** the panel SHALL close and `aria-expanded` SHALL return to
  `false`
- **AND** the selected state SHALL be preserved across open/close cycles
  (closing never clears selections)

### Requirement: Page composition

The system SHALL compose the page with a main landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Winnow app is rendered
- **WHEN** the page loads
- **THEN** the heading and the multiselect control SHALL render in the main
  landmark
- **AND** the document title SHALL be "Winnow — Multiselect Dropdown"

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Winnow app is rendered
- **WHEN** the footer displays
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text)

## Verification checklist

- [ ] `openspec/specs/template-winnow/spec.md` exists on main with the full
      section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/winnow/tasks.md` exists on main with design notes and
      the implementation task outline.
- [ ] Fidelity: structure matches the Multiselect 03 preview DOM 1:1
      (centered 28px black heading → label "Select Language" (gray, 16px) +
      white trigger (1px rgba(34,36,38,0.15) border closed / #e6e6e6 open,
      4px radius, 10px padding, "All" placeholder, dark-gray caret right
      ~10px) → white dropdown panel (bottom radius 4px, shadow `0 3px 19px
    -15px rgba(0,0,0,0.41)`, PHP…CSS rows with 1px #e6e6e6 dividers and
      blue #3e64ff hover/selected text) → "N selected" summary in the
      trigger → minimal Component Dock footer).
- [ ] Tokens used in the app: brand blue `#3e64ff` (row hover/selected TEXT
      only, never a fill), trigger/panel `#fff`, trigger border
      `rgba(34,36,38,0.15)` closed / `#e6e6e6` open + dividers, placeholder
      `rgba(191,191,191,0.87)`, caret `rgba(0,0,0,0.87)`, rows black 13px,
      summary `rgba(0,0,0,0.8)`, label gray; radius 4px; Lato 400 via
      Google Fonts `<link>`.
- [ ] No ColorLib references in `apps/winnow` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] NO images (the source has none); icons only via lucide-react
      (`ChevronDown` — probed before use; no X/delete icon needed). NO
      font-awesome, NO Semantic UI, NO Bootstrap shipped.
- [ ] Source behavior honored: panel stays open while selecting; selections
      summarized as "N selected" (NOT tag pills — that is Sifter's variant;
      this member is `useLabels: false`); "All" is the placeholder (NOT a
      menu row — live-verified); placeholder returns when the last
      selection is removed; re-clicking a selected row deselects it.
- [ ] Documented deviations (a11y fixes): `label` got real association
      (`htmlFor`/`aria-label`); hidden `<select>` semantics rebuilt as an
      accessible listbox with `aria-haspopup`/`aria-expanded` and per-row
      `aria-selected`; closed-trigger border simplified to the fresh-load
      value `rgba(34,36,38,0.15)` (the source's border sticks at `#e6e6e6`
      after interaction due to a `!important` — a UI bug, not a feature).
- [ ] Implementer gate: `scripts/verify-app.sh winnow` (typecheck + lint +
      100% coverage tests + build) and `npm run spec:validate`.
