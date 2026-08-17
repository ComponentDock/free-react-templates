# Template: Glean (Multiselect Dropdown)

## Purpose

Glean is a single-page multiselect-dropdown component demo in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Multiselect 05" free template (source:
https://colorlib.com/wp/template/multiselect-05/), built under a DIFFERENT
name (**Glean** — the fifth of the selection-themed names for this Bootstrap
Multiselect UI series, after Picker/Sifter/Winnow/Cull; "to glean" is to
gather or select, fitting a widget that picks several options from a list —
per the monorepo naming mandate: never reuse the ColorLib source name), with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a minimal, centered demo page (Bootstrap 4.3.1 + the select2
4.0.4 jQuery plugin — NOTE: unlike Multiselect 01–04, which use the
bootstrap-multiselect plugin, **Multiselect 05 uses select2**): a
`section.ftco-section` with a centered `h2.heading-section` "Multiselect #05",
and below it a single select2 multiselect — a `select.js-select2[multiple]`
(13 options: Option1..Option13) that the plugin turns into a searchable
combobox: a light selection box (soft shadow) containing selected options as
gray chips ("Option1" ×), an inline search textbox ("Click to select an
option" placeholder), and an orange clear-all ×; opening shows a white
dropdown panel where every option has a custom 20×20 square checkbox that
fills soft-orange `#fd5f00` with a white check when selected. Selecting does
NOT close the panel (`closeOnSelect: false`); typing filters options; the
`tags: true` option lets the user create new options on the fly. The whole
template is ONE interactive surface — the multiselect control. Glean
recreates that structure 1:1 with matching layout, tokens, typography, and
content (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Multiselect 05" is FORBIDDEN as the
> app name. **Glean** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-17). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Multiselect 05". Listed in TEMPLATES.md under
  **Bootstrap Multiselect (20)** (section header line 822; row at line 827).
  Free multiselect-dropdown component template. The `multiselect-05` slug
  appears exactly ONCE in TEMPLATES.md (no dup rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-17 by direct fetch AND
  live browser interaction):** the default preview URL
  `https://preview.colorlib.com/theme/multiselect-05/` returns 404 (9
  bytes); the REAL preview URL (same `/theme/bootstrap/` prefix as the rest
  of the Bootstrap UI series, e.g. Multiselect 01–04, Modal 01–20) is
  `https://preview.colorlib.com/theme/bootstrap/multiselect-05/` (HTTP 200,
  4,097 bytes — the entire page is ~60 lines). Stylesheets: `css/style.css`
  (221,864 bytes = **CUSTOMIZED Bootstrap 4.3.1** + a custom select2 token
  tail — the last ~160 lines are the real token source, extracted below),
  `https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.4/css/select2.min.css`
  (plugin defaults), and font-awesome 4.7 (only for the `fa-check` glyph in
  the checked checkbox — lucide's `Check` replaces it). **Lato** (300/400/700)
  via cf-fonts @font-face blocks in the head — loaded for headings
  (`h1–h6 { font-family: "Lato", Arial, sans-serif; font-weight: 400;
line-height: 1.5; color: #000 }`); body stays on the Bootstrap default
  system stack. Scripts: `js/jquery.min.js`, `js/popper.js`,
  `js/bootstrap.min.js`, select2 4.0.4 (cdnjs), and `js/main.js` — the whole
  demo logic:
  `$(".js-select2").select2({ closeOnSelect: false, placeholder: "Click to
select an option", allowHtml: true, allowClear: true, tags: true })`
  (Russian comment in the source: "создает новые опции на лету" = creates
  new options on the fly; the `.icons_select2` block in main.js is unused on
  this page — no `.icons_select2` element exists in the markup, so no badges
  render despite the options' `data-badge` attributes). Screenshot
  (`multiselect-05.jpg`, 1200×972, browser-verified 2026-08-17): white page,
  centered dark "Multiselect #05" heading, and the select2 widget OPEN: a
  light selection box with three selected chips (Option1, Option2, Option4,
  each with its ×) and a small ORANGE clear-all × at the right, and below it
  the white dropdown panel listing options each with a square checkbox —
  checked ones filled ORANGE `#fd5f00` with a white check, unchecked ones
  empty squares — clean, utilitarian component-demo aesthetic.
- **Live DOM structure (1:1):**
  - `section.ftco-section` (custom: `padding: 7em 0` — nothing else; page
    bg stays Bootstrap `#fff`) → `div.container` → two
    `div.row.justify-content-center`:
    1. `div.col-md-7.text-center.mb-5` → `h2.heading-section` —
       "Multiselect #05" (custom: `font-size: 28px; color: #000`; inherits
       Lato, weight 400).
    2. `div.col-lg-4.d-flex.justify-content-center.align-items-center` →
       `select.js-select2[multiple]` with 13 `<option>`s — Option1..Option13
       (`value="O1".."O13"`, each `data-badge=""`) — rendered invisible; the
       plugin replaces it with the combobox below.
  - **Combobox (plugin-rendered):** `span.select2.select2-container
.select2-selection--multiple` (custom: container `min-width: 600px`
    — `100%` under `max-width: 991.98px`; selection box custom:
    `border-width: 2px; border-color: transparent; padding: 5px 10px;
line-height: 1.6; transition: 0.3s; margin-bottom: 10px; box-shadow:
0px 3px 22px -15px rgba(0,0,0,0.63)`; `:focus` → `border-color: #fd5f00`).
    Inside: selected chips `li.select2-selection__choice` (custom:
    `border: none; background: rgba(0,0,0,0.1); font-size: 15px; padding:
2px 10px; color: gray`, remove × `margin-right: 5px`), a clear-all
    button `span.select2-selection__clear` (custom: `color: #fd5f00`), and
    an inline search `input.select2-search__field` with placeholder "Click
    to select an option". Combobox has `aria-expanded` state.
  - **Panel (plugin-rendered):** `div.select2-dropdown.select2-dropdown--below`
    (custom: `padding: 10px 0; border-radius: 4px; border: none; box-shadow:
0px 3px 22px -15px rgba(0,0,0,0.63)`; when the container is open below:
    `border-radius: 4px; box-shadow: 0px 3px 22px -15px rgba(0,0,0,0.8)`)
    with `ul.select2-results__options` of
    `li.select2-results__option` rows — Option1..Option13 (custom:
    `padding-right: 20px; vertical-align: middle`) each with a custom square
    checkbox `:before` (custom: 20×20, `border: 2px solid rgba(0,0,0,0.2)`,
    `border-radius: 4px`, transparent fill, `margin-right: 15px;
margin-left: 10px`). Checked row
    `[aria-selected=true]:before` (custom: `content: "\f00c"` fa-check
    glyph, `color: #fff; background-color: #fd5f00; border: 0`). Selected
    AND highlighted rows keep **white** background + `#000` text (custom
    overrides of select2's default blue highlight).
  - **Footer:** the original has NO footer; per monorepo convention add a
    minimal attribution footer linking `https://www.componentdock.com/`
    ("Component Dock") so every shipped template carries the required link.
- **QUIRK — hidden `<select>`:** the visible control is entirely
  plugin-rendered; the native `select[multiple]` exists only as the data
  source (semantics are lost). In the recreation, build the listbox from
  real state: combobox trigger with `aria-haspopup="listbox"` +
  `aria-expanded`, a `role="listbox"` (or checkbox-group) panel whose
  options expose real `aria-selected`/checked state (documented improvement
  over the source).
- **QUIRK — panel stays open while selecting (VERIFIED live 2026-08-17):**
  `closeOnSelect: false` — clicking Option1 then Option2 keeps the panel
  open; both appear as chips in the box and get orange checkboxes in the
  list. Only outside-click / Escape closes it. Recreate exactly.
- **QUIRK — tags: true:** the user can TYPE a new value into the search
  field and press Enter to create a brand-new option on the fly (source
  comment "создает новые опции на лету"). It becomes a chip like any other.
  Recreate this behavior (this is the defining difference vs Multiselect
  01–04).
- **QUIRK — allowClear: true:** a small orange × sits at the right of the
  selection box and clears ALL selections at once (distinct from the per-chip
  ×). Recreate.
- **QUIRK — inline search:** select2's multiple-mode search is a textbox
  INSIDE the selection box (placeholder "Click to select an option"),
  filtering the option list as you type. Recreate with a real input.
- **QUIRK — no Select-all row:** unlike the bootstrap-multiselect variants
  (Multiselect 01–04 have a "Select all" option), this select2 variant has
  NO select-all control — only clear-all. Do not add one.
- **QUIRK — unused badges:** options carry `data-badge=""` and main.js has
  an `iformat` badge renderer, but it is wired only to `.icons_select2`
  (absent from this page) — NO badges render for this widget. Do not add
  badges.
- **Visual design (screenshot + live browser):** minimal white page, one
  centered dark 28px heading, and ONE floating control: a light selection
  box (2px TRANSPARENT border — the perceived edge is the soft shadow
  `0 3px 22px -15px rgba(0,0,0,0.63)`), gray chips (`rgba(0,0,0,0.1)` bg,
  15px, `gray` text) with per-chip ×, an orange `#fd5f00` clear-all ×,
  placeholder "Click to select an option"; open panel: white, 4px radius,
  no border, same soft shadow, 13 rows with 20px square checkboxes.
  Signature color: the soft-orange `#fd5f00` checked fill with white check
  (DIFFERENT from Multiselect 01–04's green `#52de97`). Grays carry the
  rest: chips `rgba(0,0,0,0.1)`/`gray`, checkbox border `rgba(0,0,0,0.2)`.
- **Section order (1:1 from live DOM):**
  1. **Heading section** — full-width centered `h2.heading-section`
     "Multiselect #05" (recreate as the brand name "Glean", like the sibling
     recreations rename their demo heading).
  2. **Multiselect control** — select2-style combobox: selection box (2px
     transparent border → orange on focus, 5px/10px padding, line-height
     1.6, mb-10px, soft shadow) with chips ("Option1" ×) + clear-all ×
     (#fd5f00) + inline search ("Click to select an option"); dropdown panel
     (white, 4px radius, no border, same soft shadow, py-10px) with 13
     checkbox options (20×20, 2px `rgba(0,0,0,0.2)` border, 4px radius,
     15px/10px margins), checked → `#fd5f00` fill + white check.
  3. **Footer** — no footer in source; minimal Component Dock footer per
     convention.
- **Design tokens:**
  - Brand accent: **`#fd5f00`** (soft orange — checked-checkbox fill with
    white check, focus border color, clear-all × color; the source's only
    hue — DIFFERENT from Multiselect 01–04's `#52de97` green).
  - Selection box: **white** bg, `border-width: 2px; border-color:
transparent` (2px invisible border — focus turns it `#fd5f00`), radius
    **4px** (inherits select2 default on the open container), `padding:
5px 10px`, `line-height: 1.6`, `margin-bottom: 10px`, shadow
    `0px 3px 22px -15px rgba(0,0,0,0.63)`, `transition: 0.3s`.
  - Chips: **`rgba(0,0,0,0.1)`** bg, `border: none`, `font-size: 15px`,
    `padding: 2px 10px`, color **gray**, remove × `margin-right: 5px`.
  - Clear-all ×: color **`#fd5f00`**.
  - Dropdown panel: **white** bg, radius **4px**, `border: none`, `width:
100%`, `padding: 10px 0`, shadow `0px 3px 22px -15px rgba(0,0,0,0.63)`;
    open-container shadow `0px 3px 22px -15px rgba(0,0,0,0.8)`.
  - Checkbox: **20×20** square, `border: 2px solid rgba(0,0,0,0.2)`, radius
    **4px**, transparent fill, `margin-right: 15px; margin-left: 10px`.
    Checked: fill **`#fd5f00`**, white `Check` glyph, border removed.
  - Option rows: `padding-right: 20px`, `vertical-align: middle`, text
    `#212529` (Bootstrap body default); selected AND highlighted rows keep
    white bg + `#000` text (custom overrides — no blue highlight).
  - Search field: inline textbox in the selection box, placeholder "Click
    to select an option".
  - Heading: **28px**, **`#000`**, Lato weight 400, line-height 1.5.
  - Font: **Lato** (300/400/700 via Google Fonts `<link>` — the source
    loads 300/400/700; headings use weight 400).
  - Rhythm: `section.ftco-section` `padding: 7em 0` (≈112px vertical);
    centered column `col-md-7` (heading) / `col-lg-4` (control ≈ 28rem);
    `mb-5` (48px) gap under the heading; select2 container `min-width:
600px` on desktop, `100%` under 992px — recreate with a centered
    `max-w-xl`-ish container and a widget that is `w-full` on mobile and
    ~600px min on desktop.
- **Recreation approach:** single page, `min-h-screen` white section with
  ~112px top/bottom padding, centered: h2 "Glean" (28px, #000, Lato 400)
  with `mb-12`-ish gap, then the select2-style control — state-driven React
  (no Bootstrap, no jQuery): a combobox `button`/`div` (2px transparent
  border turning `#fd5f00` on focus-visible, rounded-[4px], px-[10px]
  py-[5px], leading-6, soft shadow `0 3px 22px -15px rgba(0,0,0,0.63)`,
  `aria-haspopup="listbox"` `aria-expanded`) that contains selected chips
  (gray `rgba(0,0,0,0.1)` bg, 15px, rounded, per-chip `X` remove), a
  clear-all `X` (`#fd5f00`) when anything is selected, and an inline search
  `input` (placeholder "Click to select an option") that filters options;
  panel `role="listbox"` (white, 4px radius, no border, same soft shadow,
  py-10px) with 13 options (Option1..Option13 — 16px/400, pr-20px) each a
  20×20 square checkbox (2px `rgba(0,0,0,0.2)` border, 4px radius, 15px/10px
  margins) filling `#fd5f00` with a white `Check` when selected. Selecting
  does NOT close the panel (`closeOnSelect: false`); typing Enter creates a
  new tag (`tags: true`); outside-click / Escape / re-toggling closes it;
  selections persist. Plus the mandatory minimal Component Dock footer.
  Icons: lucide-react (`X`, `Check`, `Search` — probe exports before use —
  see tasks.md). No images at all (the source has none).
- **ColorLib vs the rest of the series:** Multiselect 01–04 (Picker/Sifter/
  Winnow/Cull specs) use the bootstrap-multiselect plugin (green `#52de97`,
  "Select all" row, 6 language options, `numberDisplayed` label rules);
  Multiselect 05 (Glean) uses **select2** (orange `#fd5f00`, 13 generic
  options, search + tags + clear-all, no select-all). Do NOT copy the
  sibling specs' token values — this template's tokens are the ones above.

## Requirements

### Requirement: Heading section

The system SHALL render a centered heading section on a white page.

#### Scenario: Centered heading

- **GIVEN** the Glean app is rendered
- **WHEN** the page loads
- **THEN** a white page SHALL show a centered heading "Glean" (the new
  brand name in place of the source's "Multiselect #05" demo label) at
  ~28px in `#000`
- **AND** the heading SHALL use the Lato font family at weight 400 with
  line-height 1.5
- **AND** the page SHALL have generous vertical padding (~112px — the
  source's `ftco-section` 7em) above and below the content
- **AND** the content column SHALL be centered horizontally with a
  comfortable max width (~28rem, mirroring `col-lg-4`)

### Requirement: Multiselect control

The system SHALL render a searchable multiselect combobox.

#### Scenario: Selection box with placeholder

- **GIVEN** the heading renders
- **WHEN** the control area displays
- **THEN** a white selection box SHALL render (2px transparent border,
  ~5px/10px padding, line-height 1.6, soft shadow `0 3px 22px -15px
rgba(0,0,0,0.63)`)
- **AND** an inline search textbox SHALL sit inside it with the placeholder
  "Click to select an option"
- **AND** the control SHALL have `aria-haspopup="listbox"` and
  `aria-expanded="false"` initially
- **AND** when the control is focused, its border SHALL turn the brand
  orange `#fd5f00` (2px)

#### Scenario: Dropdown opens with thirteen options

- **WHEN** the user activates the control (or focuses the search field)
- **THEN** a white dropdown panel SHALL appear below the box (4px radius,
  no border, width 100%, soft shadow `0 3px 22px -15px rgba(0,0,0,0.63)`,
  ~10px vertical padding)
- **AND** `aria-expanded` SHALL flip to `true`
- **AND** the panel SHALL list the 13 options Option1 through Option13
- **AND** every option SHALL show a 20×20 square checkbox with a 2px
  `rgba(0,0,0,0.2)` border, 4px radius, ~15px gap to the label text, and
  ~10px left margin
- **AND** option rows SHALL render at ~16px with ~20px right padding

### Requirement: Selection behavior

The system SHALL toggle options as checkboxes and render selected options as
chips, keeping the panel open (the source's `closeOnSelect: false`).

#### Scenario: Selecting options

- **GIVEN** the dropdown is open
- **WHEN** the user clicks the Option1 row and then the Option2 row
- **THEN** both checkboxes SHALL fill with the soft-orange `#fd5f00` and
  show a white check mark
- **AND** the dropdown SHALL STAY open (the source's `closeOnSelect: false`
  — picking an option never closes the panel)
- **AND** a chip "Option1" and a chip "Option2" SHALL appear in the
  selection box (gray `rgba(0,0,0,0.1)` background, ~15px text, each with a
  per-chip remove ×)
- **AND** each option SHALL expose its selected state accessibly
  (`aria-selected`/checked semantics)

#### Scenario: Deselecting options

- **WHEN** the user clicks a checked option (or its chip's ×)
- **THEN** its checkbox SHALL return to the empty square (transparent fill,
  2px `rgba(0,0,0,0.2)` border)
- **AND** its chip SHALL disappear from the selection box

#### Scenario: Clear all

- **WHEN** at least one option is selected and the user clicks the clear-all
  button (the orange `#fd5f00` × at the right of the box)
- **THEN** ALL selections SHALL be cleared at once (every checkbox empty,
  no chips)
- **AND** the clear-all button SHALL no longer render when nothing is
  selected

### Requirement: Tag creation

The system SHALL let the user create a new option on the fly (the source's
`tags: true`).

#### Scenario: Typing a new tag

- **GIVEN** the control is focused
- **WHEN** the user types "Custom" into the search field and presses Enter
- **THEN** a new chip "Custom" SHALL appear in the selection box as a
  selected value
- **AND** "Custom" SHALL behave like any other selected option (per-chip ×
  removal, included in clear-all)

### Requirement: Search filter

The system SHALL filter the option list as the user types.

#### Scenario: Filtering options

- **GIVEN** the dropdown is open
- **WHEN** the user types "5" into the search field
- **THEN** the panel SHALL show only matching options (Option5, Option15 if
  created, etc.)
- **AND** options that do not match SHALL be hidden
- **WHEN** the search text is cleared
- **THEN** all 13 options SHALL be visible again

### Requirement: Dropdown dismissal

The system SHALL close the dropdown on outside interaction while preserving
selections.

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

- **GIVEN** the Glean app is rendered
- **WHEN** the page loads
- **THEN** the heading and the multiselect control SHALL render in the main
  landmark
- **AND** the document title SHALL be "Glean — Multiselect Dropdown"

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Glean app is rendered
- **WHEN** the footer displays
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text)

## Verification checklist

- [ ] `openspec/specs/template-glean/spec.md` exists on main with the full
      section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/glean/tasks.md` exists on main with design notes and
      the implementation task outline.
- [ ] Fidelity: structure matches the Multiselect 05 preview DOM 1:1
      (centered 28px black heading → select2-style selection box (2px
      transparent border → `#fd5f00` on focus, 5px/10px padding, leading-6,
      soft shadow `0 3px 22px -15px rgba(0,0,0,0.63)`) with gray chips +
      orange clear-all × + inline search ("Click to select an option") →
      white dropdown panel (4px radius, no border, soft shadow, "Option1"..
      "Option13" with 20×20 4px-radius square checkboxes) → minimal
      Component Dock footer).
- [ ] Tokens used in the app: brand orange `#fd5f00` (checked fill + white
      `Check`, focus border, clear-all ×), chips `rgba(0,0,0,0.1)`/`gray`,
      checkbox border 2px `rgba(0,0,0,0.2)`, panel shadow `0 3px 22px -15px
    rgba(0,0,0,0.63)`, heading `#000` 28px; Lato 400 via Google Fonts
      `<link>`. (NOT the green `#52de97` of Multiselect 01–04.)
- [ ] No ColorLib references in `apps/glean` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] NO images (the source has none); icons only via lucide-react
      (`X`, `Check`, `Search` — probed before use).
- [ ] Source behavior honored (all verified live): panel stays open while
      selecting (`closeOnSelect: false`); chips + per-chip ×; orange
      clear-all × (`allowClear: true`); typing a new value + Enter creates a
      new tag (`tags: true`); search filters options; no Select-all row.
- [ ] Documented deviations (a11y fixes): hidden `<select>` semantics
      rebuilt as an accessible listbox with `aria-haspopup`/`aria-expanded`
      and per-option selected state; label/placeholder association for the
      search input.
- [ ] Implementer gate: `scripts/verify-app.sh glean` (typecheck + lint +
      100% coverage tests + build) and `npm run spec:validate`.
