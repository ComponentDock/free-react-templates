# Template: Sickle (Multiselect Dropdown)

## Purpose

Sickle is a single-page multiselect-dropdown component demo in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Multiselect 10" free template (source:
https://colorlib.com/wp/template/multiselect-10/), built under a DIFFERENT
name (**Sickle** — the tenth of the selection-themed names for this
Bootstrap Multiselect UI series, after Picker (01), Sifter (02), Winnow
(03), Cull (04), Glean (05), Garner (06), Reap (07), Pluck (08), Thresh
(09); a sickle is a harvesting blade that cuts grain — fitting the
harvest/selection theme — per the monorepo naming mandate: never reuse the
ColorLib source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a minimal, centered demo page (customized Bootstrap 4.3.1 +
**vanilla jQuery/lodash + FontAwesome**): a `section.ftco-section` with a
centered `h2.heading-section` "Multiselect #10", and below it a single
**custom-built dropdown widget** (NO Select2, NO Semantic UI — this is the
FIRST hand-rolled vanilla member of the series): a white trigger button
reading "States (Any)" with a coral-red count and chevron; clicking toggles
a white panel containing a subtle search field ("Search states") and a
scrollable list of **56 US states + territories** (Alabama…Wyoming,
including AS, DC, FM, GU, MH, MP, PW, PR, VI), each row a custom
FontAwesome checkbox square (unchecked = faint gray outline; checked =
coral-red `#ff5959` fill). Distinctive behaviors: the dropdown **toggles
only on trigger click** (no outside-click close, no Escape handler — closing
is a pure toggle); the search input **filters rows in real time** by text
substring (case-insensitive; lodash `_.each`/`_.template`/`_.startCase`
populate the list from a `usStates` JSON array); checking a box **updates
the trigger count** immediately ("(Any)" → "(N)") and never closes the
panel. Sickle recreates that structure 1:1 with matching layout, tokens,
typography, and content (no ColorLib assets copied; US-states data is
recreated from the same public-domain fact list).

> NAMING NOTE: the ColorLib source name "Multiselect 10" is FORBIDDEN as
> the app name. **Sickle** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/`
> or any TEMPLATES.md name (verified 2026-08-17). Source slug + preview
> URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Multiselect 10". Listed in TEMPLATES.md under
  **Bootstrap Multiselect (20)** (section header line 821; row at line
  832). Free multiselect-dropdown component template. The
  `multiselect-10` slug appears exactly ONCE in TEMPLATES.md (no dup rows
  to mark). Series siblings already prepped: Multiselect 01 → Picker, 02 →
  Sifter, 03 → Winnow, 04 → Cull, 05 → Glean, 06 → Garner, 07 → Reap, 08 →
  Pluck (ALL Semantic UI based), 09 → Thresh (Select2 based). **Multiselect
  10 is the first VANILLA-jQuery member prepped — no widget library at
  all**, just jQuery event handlers + lodash templating.
- **Live preview DOM — REACHABLE (verified 2026-08-17 by direct fetch AND
  browser interaction):** the default preview URL
  `https://preview.colorlib.com/theme/multiselect-10/` returns 404 (`Not
Found`, 9 bytes); the REAL preview URL (same `/theme/bootstrap/` prefix
  as the rest of the Bootstrap UI series) is
  `https://preview.colorlib.com/theme/bootstrap/multiselect-10/` (HTTP
  200, 3,665 bytes — the whole page is 53 lines). Stylesheets:
  `css/style.css` (221,912 bytes = **CUSTOMIZED Bootstrap 4.3.1** + a
  custom token tail at the end — the tail is the real token source) and
  `https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css`
  (**USED on this page**: the chevron (`fa-chevron-down`) and the custom
  checkbox glyphs (`\f0c8` unchecked square, `\f14a` checked square) all
  come from FontAwesome; in the recreation use lucide icons instead — do
  NOT ship font-awesome). **Lato** (300/400/700) via cf-fonts @font-face
  blocks in the head — only weight 400 is used by this page's rules (body
  `font-family: "Lato", Arial, sans-serif; font-size: 16px; line-height:
1.8; color: gray; background: #f8f9fd`; `h1–h5 { line-height: 1.5;
font-weight: 400; font-family: "Lato", Arial, sans-serif; color: #000 }`).
  Scripts: `js/jquery.min.js`, `js/popper.js`, `js/bootstrap.min.js`
  (loaded, unused — no Bootstrap components on this page),
  `https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.5.0/lodash.min.js`
  (USED: `_.template`, `_.each`, `_.startCase`), and `js/main.js` (4,217
  bytes) — the demo logic: a `usStates` array of 56 objects `{ name:
'ALABAMA', abbreviation: 'AL' }`, a `stateTemplate` lodash template
  emitting `<li><label class="checkbox-wrap"><input name="<abbr>"
type="checkbox"> <span for="<abbr>"><%= capName %></span> <span
class="checkmark"></span></label></li>` (capName = `_.startCase`),
  `_.each(usStates, ...)` appends all rows to `$('ul')`, and three event
  handlers (see Behaviors below).
  Screenshot (`multiselect-10.jpg`, 1200×972 AVIF, browser-verified
  2026-08-17): very light cool-gray page (`≈#f8f9fd`), centered BLACK
  "Multiselect #10" heading, and ONE floating white card: trigger row
  "States (5)" — "States" in dark gray, "(5)" + the chevron in coral red
  `#ff5959` — and the panel OPEN below: a light-gray search field
  ("Search states"), then visible rows Georgia (unchecked), Guam
  (CHECKED — coral-red filled square with check mark), Hawaii (CHECKED),
  Idaho, Illinois (unchecked); count shows 5 because the trigger shows the
  number of CHECKED boxes (2 visible checked in the 200px scroll window,
  others scrolled out). Clean, flat, minimal component-demo aesthetic —
  the classic white-card-on-light-gray UI-kit look.
- **Live DOM structure (1:1):**
  - `section.ftco-section` (custom: `padding: 7em 0`; page bg is the
    customized body `#f8f9fd`) → `div.container` (max-width 1140px) →
    two `div.row.justify-content-center`:
    1. `div.col-md-6.text-center.mb-5` → `h2.heading-section` —
       "Multiselect #10" (custom: `font-size: 28px; color: #000`; inherits
       Lato, weight 400, line-height 1.5; `mb-5` ≈ 42–48px gap below).
    2. `div.col-md-5.d-flex.justify-content-center.align-items-center`
       (NO label row — like Thresh, no field label, the control stands
       alone under the heading) → `div.dropdown-container` (custom: width
       100%, `margin: auto 0`, font-size 14px, font-family sans-serif,
       `overflow: auto`, border-radius **5px**, box-shadow `0px 10px 30px
-4px rgba(0,0,0,0.15)`):
       - `div.dropdown-button.noselect.w-100` (custom: float left, width
         100%, background **#fff**, padding **15px 20px**, cursor pointer,
         border none) containing:
         - `div.dropdown-label` — "States" (float left, color **gray**,
           font-weight **700**)
         - `div.dropdown-quantity` — "(<span class="quantity">Any</span>)"
           (margin-left 4px, color **#ff5959**)
         - `i.fa.fa-chevron-down` (margin-top 3px, float right, font-size
           16px, color **#ff5959**)
       - `div.dropdown-list` (INLINE `style="display: none;"` initially;
         custom: float left, width 100%, `border-top: none`, padding
         **10px 20px**, background **#fff**):
         - `input[type="search"].dropdown-search` — placeholder "Search
           states" (custom: padding 5px 10px, width 100%, border none,
           border-radius **4px**, background **rgba(0,0,0,0.05)**; on
           focus: no box-shadow, no outline)
         - `<ul>` (custom: `margin: 20px 0 0 0; max-height: 200px;
overflow-y: auto; padding: 0`) — populated by JS with 56 `li`
           rows (NO hover style on rows; default `li` list-style none via
           `ul li { list-style: none }`), each:
           - `label.checkbox-wrap` (custom: display block, position
             relative, `padding-left: 35px`, `margin-bottom: 12px`, cursor
             pointer, font-size **16px**, font-weight **500**,
             user-select none) containing:
             - `input[name="<ABBR>"][type="checkbox"]` (custom: absolute,
               opaque 0, height 0, width 0 — visually replaced by the
               checkmark)
             - `<span for="<ABBR>">State Name</span>` (e.g. "Alabama")
             - `span.checkmark` (absolute, top 0, left 0; `::after`
               content `\f0c8` FontAwesome square-outline, color
               **rgba(0,0,0,0.1)**, font-size **20px**, margin-top -4px,
               transition 0.3s; `input:checked ~ .checkmark:after` →
               content `\f14a` FontAwesome check-square, color **#ff5959**,
               border none) — i.e. a 20px custom checkbox square, unchecked
               = faint gray outline, checked = coral-red filled square.
  - **Footer:** the original has NO footer; per monorepo convention add a
    minimal attribution footer linking `https://www.componentdock.com/`
    ("Component Dock") so every shipped template carries the required link.
- **Behaviors (main.js, live-verified in browser):**
  - **Toggle-only open/close:** `click` on `.dropdown-button` toggles the
    sibling `.dropdown-list` (`$(this).siblings('.dropdown-list').toggle()`).
    There is NO outside-click close and NO Escape handler — the panel stays
    open until the trigger is clicked again. (Series differentiator vs.
    Thresh's keyboard/Escape close.)
  - **Live search filter:** `input` on `.dropdown-search` lowercases the
    query; empty query → `show()` all rows; otherwise each `li`'s text is
    lowercased and `.toggle(match)` on substring `indexOf` — non-matching
    rows hide instantly, matching rows show.
  - **Live count:** `change` on any `[type="checkbox"]` counts checked
    boxes in the container and writes `container.find('.quantity').text(
numChecked || 'Any')` — the trigger shows "(Any)" when none checked,
    "(N)" otherwise. Checking NEVER closes the panel.
  - **Data:** 56 US states + territories (Alabama..Wyoming: AL, AK, AS,
    AZ, AR, CA, CO, CT, DE, DC, FM, FL, GA, GU, HI, ID, IL, IN, IA, KS,
    KY, LA, ME, MH, MD, MA, MI, MN, MS, MO, MT, NE, NV, NH, NJ, NM, NY,
    NC, ND, MP, OH, OK, OR, PW, PA, PR, RI, SC, SD, TN, TX, UT, VT, VI,
    VA, WA, WV, WI, WY) rendered title-cased ("District Of Columbia",
    "Federated States Of Micronesia", "Northern Mariana Islands", "Virgin
    Islands").
- **QUIRK — preview URL:** the default
  `https://preview.colorlib.com/theme/multiselect-10/` 404s; the real URL
  is under `/theme/bootstrap/`. (Same as every member of this UI series.)
- **QUIRK — vanilla (no widget library):** this member uses NO Select2 and
  NO Semantic UI. It is a hand-rolled jQuery + lodash + FontAwesome
  dropdown. Widget shapes come from the custom CSS token tail — recreate
  those, do NOT copy the Select2 shapes from Thresh or the Semantic shapes
  from Sifter/Winnow.
- **QUIRK — light theme:** page `#f8f9fd`, white card, BLACK heading,
  coral-red `#ff5959` accents — the classic light UI-kit look (Thresh was
  the dark outlier; Sickle returns to the light treatment of the Semantic
  members but with a completely different widget build).
- **QUIRK — toggle-only dismissal:** no outside-click close, no Escape —
  the panel closes ONLY when the trigger is clicked again. Recreate this
  faithfully; do not silently add outside-click close (if an a11y close is
  desired, it must be a documented deviation).
- **QUIRK — no hover state on rows:** unlike Select2/Semantic members,
  list rows have NO hover/highlight styling — just the checkbox + label
  text. Do not invent hover colors.
- **QUIRK — no selected state on the trigger beyond the count:** no tag
  chips, no clear-all, no placeholder swap — the trigger always reads
  "States (N)" and the selection state is ONLY the running count + the
  checked squares. (Yes — this member is visually the simplest of the
  series; that IS the design.)
- **Visual design (screenshot + live browser):** minimal light page
  (`#f8f9fd`), one centered black 28px heading, ONE floating white card:
  trigger "States (Any)" — gray 700-weight label, coral-red `#ff5959`
  count + chevron, `15px 20px` padding — and the open panel: white
  `10px 20px` body, light search field (`rgba(0,0,0,0.05)` bg, 4px
  radius), scrollable 200px list of 56 rows with 20px FontAwesome checkbox
  squares (unchecked `rgba(0,0,0,0.1)` outline; checked `#ff5959` fill),
  rows 16px / weight 500, 12px gap, 35px label indent. Signature colors:
  coral-red **#ff5959** (count, chevron, checked squares, links,
  `.bg-primary`) on white card over the light page **#f8f9fd**; text gray
  (`#808080`) / black heading.
- **Section order (1:1 from live DOM):**
  1. **Heading section** — full-width centered `h2.heading-section`
     "Multiselect #10" (recreate as the brand name "Sickle", like the
     other members rename their demo headings).
  2. **Multiselect control** — the vanilla dropdown with NO label: white
     trigger (15px/20px padding, gray 700 label "States", coral-red
     "(Any)" → "(N)" count + 16px coral chevron) → toggle opens the white
     panel (10px 20px padding): search field (rgba(0,0,0,0.05), 4px
     radius, "Search states") + 200px-scrollable 56-row list (custom
     20px checkbox squares: unchecked faint outline, checked coral fill)
     with live substring filtering and instant count updates; panel
     closes only on trigger re-click.
  3. **Footer** — no footer in source; minimal Component Dock footer per
     convention.
- **Design tokens:**
  - Page background: **`#f8f9fd`** (customized body bg — very light
    cool-gray).
  - Brand accent: **`#ff5959`** (coral-red — trigger count, chevron,
    checked checkbox fill, links/`a` color, `.bg-primary`).
  - Heading: **28px**, **`#000`**, Lato weight 400, line-height 1.5,
    centered, ~42–48px gap below (`mb-5`).
  - Card (`.dropdown-container`): width 100%, font-size **14px**,
    font-family **sans-serif**, `overflow: auto`, border-radius **5px**,
    box-shadow **`0px 10px 30px -4px rgba(0,0,0,0.15)`**.
  - Trigger (`.dropdown-button`): background **`#fff`**, padding
    **15px 20px**, cursor pointer, border none; label color **gray**
    (≈`#808080`), font-weight **700**; count color **`#ff5959`**,
    margin-left 4px; chevron margin-top 3px, float right, font-size
    **16px**, color **`#ff5959`**.
  - Panel (`.dropdown-list`): background **`#fff`**, padding **10px 20px**,
    `border-top: none`, float left, width 100%.
  - Search input: padding **5px 10px**, width 100%, border none,
    border-radius **4px**, background **`rgba(0,0,0,0.05)`**; focus →
    no shadow, no outline.
  - List: `margin: 20px 0 0 0`, **max-height: 200px**, `overflow-y: auto`,
    padding 0; rows `li { list-style: none }`, NO hover style.
  - Checkbox rows: label padding-left **35px**, margin-bottom **12px**,
    font-size **16px**, font-weight **500**, cursor pointer, user-select
    none; hidden native input (opacity 0, 0×0).
  - Custom checkbox (`.checkmark::after`): FontAwesome glyphs, font-size
    **20px**, margin-top -4px, transition 0.3s; unchecked content `\f0c8`
    color **`rgba(0,0,0,0.1)`**; checked (`input:checked ~ .checkmark`)
    content `\f14a` color **`#ff5959`** (recreate with lucide or an inline
    SVG square / check-square ~20px).
  - Body text: color **gray** (`#808080`), **16px**, line-height 1.8.
  - Font: **Lato** (300/400/700 loaded by the source; only **400** is used
    by this template's rules — loading 400 via Google Fonts `<link>` is
    faithful) for body and headings.
  - Rhythm: `section.ftco-section` `padding: 7em 0` (≈112px vertical);
    centered columns (`col-md-6` heading, `col-md-5` ≈460px control
    column); recreate with a centered `max-w-2xl` (1140px) container,
    `text-center` heading, and the control column capped around
    `max-w-md` (28rem ≈ 448px) with a `w-full` widget.
- **Recreation approach:** single page, `min-h-screen` light section
  (`bg-[#f8f9fd]`) with ~112px top/bottom padding, centered: h2 "Sickle"
  (28px, `#000`, Lato 400) with ~42–48px gap, then a `max-w-md` (~28rem)
  centered column with a state-driven React multiselect (no Bootstrap, no
  jQuery, no lodash): a `button` trigger (white bg, `px-5 py-[15px]`,
  `w-full`, `flex items-center justify-between`, `rounded-[5px]`, shadow
  `0 10px 30px -4px rgba(0,0,0,0.15)`, `aria-haspopup="listbox"`
  `aria-expanded`, `aria-label` "Select states") showing "States" (gray,
  weight 700, left) + "(Any)"/"(N)" (coral-red, left, ml-1) + a coral
  `ChevronDown` (lucide, 16px, right, rotates when open); below it the
  panel (`role="listbox"`, white, `px-5 py-2.5`, `rounded-b-[5px]` or part
  of the same card, anchored under the trigger) with a search input
  (`bg-black/5`, `rounded`, px-2.5 py-1, placeholder "Search states") and
  a `max-h-[200px] overflow-y-auto` list of 56 checkbox rows (each: hidden
  native checkbox + visible 20px custom square — unchecked
  `border-[rgba(0,0,0,0.1)]`/lucide `Square`, checked coral `SquareCheck`
  — + title-cased state name, `text-base font-medium`, `pl-[35px]`,
  `mb-3`); typing filters rows by substring (case-insensitive) in real
  time; checking toggles the count ("(Any)" → "(N)"); the panel closes
  ONLY on trigger re-click (faithful to the source). Plus the mandatory
  minimal Component Dock footer. Icons: lucide-react (`ChevronDown`,
  `Square`/`SquareCheck` or `Check` — probe exports before use — see
  tasks.md). No images at all (the source has none).
- **Fidelity deviations (documented):** source checkbox glyphs and chevron
  are FontAwesome (replaced with lucide icons); source has NO label/aria —
  recreation adds `aria-label` on the trigger for a11y; source has no
  footer — recreation adds the mandatory Component Dock footer; source
  uses lodash to generate rows from a JS array — recreation uses a React
  `useMemo`/static array over the same 56 states (hard-code the data, not
  a fetch).

## Requirements

### Requirement: Heading section

The system SHALL render a centered heading section on the light page.

#### Scenario: Centered heading

- **GIVEN** the Sickle app is rendered
- **WHEN** the page loads
- **THEN** a light page (`#f8f9fd`) SHALL show a centered heading "Sickle"
  (the new brand name in place of the source's "Multiselect #10" demo
  label) at ~28px in `#000`
- **AND** the heading SHALL use the Lato font family at weight 400 with
  line-height 1.5
- **AND** the page SHALL have generous vertical padding (~112px — the
  source's `ftco-section` 7em) above and below the content
- **AND** the content SHALL be centered horizontally inside a comfortable
  container (≈1140px) with the control column capped at ~28rem

### Requirement: Multiselect trigger

The system SHALL render a white multiselect trigger with a fixed label,
count, and chevron.

#### Scenario: Trigger renders

- **GIVEN** the heading renders
- **WHEN** the control area displays
- **THEN** a white trigger SHALL show below the heading (no label element —
  the source has none; an `aria-label` "Select states" SHALL be present
  for assistive tech)
- **AND** the trigger SHALL have a white background, ~15px/20px padding,
  full column width, ~5px border radius, and a soft shadow (`0 10px 30px
-4px rgba(0,0,0,0.15)`)
- **AND** the trigger SHALL show "States" on the left in gray at weight 700
- **AND** next to it a count in coral-red `#ff5959` SHALL read "(Any)" when
  nothing is selected
- **AND** a chevron icon (~16px, coral-red `#ff5959`) SHALL sit on the right
- **AND** the trigger SHALL have `aria-haspopup="listbox"` and
  `aria-expanded="false"` initially

### Requirement: Dropdown with searchable checkbox list

The system SHALL open a white panel listing all fifty-six US states and
territories as checkbox rows with a live search filter.

#### Scenario: Panel opens with all states

- **WHEN** the user activates the trigger
- **THEN** a white panel SHALL appear flush below/inside the trigger card
  (`#fff`, ~10px/20px padding)
- **AND** `aria-expanded` SHALL flip to `true`
- **AND** the panel SHALL list all 56 US states + territories in source
  order beginning Alabama … ending Wyoming (title-cased, e.g. "District Of
  Columbia", "Northern Mariana Islands", "Virgin Islands")
- **AND** the list SHALL scroll internally beyond 200px of items
  (`max-height: 200px`, overflow-y auto)
- **AND** every row SHALL render a 20px custom checkbox square to the left
  of its 16px / weight-500 state name (unchecked: faint gray outline
  `rgba(0,0,0,0.1)`); rows SHALL have ~12px gap and ~35px label indent
- **AND** rows SHALL have NO hover styling (faithful — the source has none)

#### Scenario: Search filters rows live

- **GIVEN** the panel is open
- **WHEN** the user types "tex" into the search field
- **THEN** only the Texas row SHALL remain visible
- **AND** clearing the search SHALL bring all rows back
- **AND** filtering SHALL be case-insensitive substring matching (e.g.
  "new" matches New Hampshire, New Jersey, New Mexico, New York)

#### Scenario: Checking updates the count and keeps panel open

- **WHEN** the user checks the Guam and Hawaii rows
- **THEN** each checked row's checkbox SHALL fill with coral-red `#ff5959`
  and show a check mark
- **AND** the trigger count SHALL read "(2)" (updates immediately on every
  change)
- **AND** the panel SHALL STAY open while checking (no close-on-select)

### Requirement: Count display

The system SHALL show the number of checked states in the trigger.

#### Scenario: Count is accurate

- **GIVEN** no states are checked
- **WHEN** the trigger displays
- **THEN** the count SHALL read "(Any)"
- **WHEN** the user checks 3 states
- **THEN** the count SHALL read "(3)"
- **WHEN** the user unchecks one of them
- **THEN** the count SHALL read "(2)"
- **WHEN** the user unchecks all of them
- **THEN** the count SHALL return to "(Any)"

### Requirement: Dropdown dismissal

The system SHALL close the dropdown only on trigger re-click (faithful to
the source — no outside-click/Escape close).

#### Scenario: Toggle-only close

- **GIVEN** the panel is open
- **WHEN** the user clicks the trigger again
- **THEN** the panel SHALL close and `aria-expanded` SHALL return to `false`
- **AND** the checked boxes and current count SHALL be preserved across
  open/close cycles (closing never clears selections)
- **AND** clicking elsewhere on the page SHALL NOT close the panel (the
  source has no outside-click handler — if an a11y close is added, it must
  be a documented deviation)

### Requirement: Page composition

The system SHALL compose the page with a main landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Sickle app is rendered
- **WHEN** the page loads
- **THEN** the heading and the multiselect control SHALL render in the main
  landmark
- **AND** the document title SHALL be "Sickle — Multiselect Dropdown"

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Sickle app is rendered
- **WHEN** the footer displays
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text)

## Verification checklist

- [ ] `openspec/specs/template-sickle/spec.md` exists on main with the full
      section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/sickle/tasks.md` exists on main with design notes and
      the implementation task outline.
- [ ] Fidelity: structure matches the Multiselect 10 preview DOM 1:1
      (centered 28px BLACK heading on `#f8f9fd` → white trigger "States
      (Any)" with coral `#ff5959` count/chevron → white panel (5px card
      radius, shadow `0 10px 30px -4px rgba(0,0,0,0.15)`) with search
      field + 200px scrollable 56-row checkbox list (unchecked faint
      outline / checked coral fill) → minimal Component Dock footer).
- [ ] Tokens used in the app: page `#f8f9fd`, accent coral `#ff5959`
      (count, chevron, checked boxes, links), heading `#000` 28px, card
      `#fff` radius 5px shadow `0 10px 30px -4px rgba(0,0,0,0.15)`,
      search bg `rgba(0,0,0,0.05)` radius 4px, rows 16px / weight 500 /
      35px indent / 12px gap, custom 20px checkbox squares; Lato 400 via
      Google Fonts `<link>`.
- [ ] No ColorLib references in `apps/sickle` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] NO images (the source has none); icons only via lucide-react
      (`ChevronDown` for the trigger chevron, `Square`/`Check`-style
      glyphs for the checkbox squares — probed before use). NO
      font-awesome, NO Select2, NO Semantic UI, NO Bootstrap, NO jQuery,
      NO lodash shipped.
- [ ] Source behavior honored: panel toggles ONLY on trigger click (no
      outside-click close, no Escape — do not add un-documented close
      behaviors); search filters rows live by case-insensitive substring;
      checking updates the count immediately ("(Any)" → "(N)") and NEVER
      closes the panel; selections persist across open/close.
- [ ] All 56 US states + territories present in the same order/title-casing
      as the source array.
- [ ] Documented deviations (a11y/framework fixes): FontAwesome glyphs →
      lucide icons; trigger got an `aria-label`; footer added per
      convention; lodash-generated rows → React static array.
- [ ] Implementer gate: `scripts/verify-app.sh sickle` (typecheck + lint +
      100% coverage tests + build) and `npm run spec:validate`.
