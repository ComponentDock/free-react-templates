# Template: Thresh (Multiselect Dropdown)

## Purpose

Thresh is a single-page multiselect-dropdown component demo in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Multiselect 09" free template (source:
https://colorlib.com/wp/template/multiselect-09/), built under a DIFFERENT
name (**Thresh** — the ninth of the selection-themed names for this
Bootstrap Multiselect UI series, after Picker (01), Sifter (02), Winnow
(03), Cull (04), Glean (05), Garner (06), Reap (07), Pluck (08); "to
thresh" is to beat the grain from the husk and separate the good kernels —
exactly what a multiselect filter does — per the monorepo naming mandate:
never reuse the ColorLib source name), with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The original is a minimal, centered demo page (customized Bootstrap 4.3.1 +
**Select2 4.0.4**): a `section.ftco-section` with a centered
`h2.heading-section` "Multiselect #09", and below it a single full-width
`select.js-select2[multiple]` with 13 options (Option1..Option13, values
O1..O13, all with an EMPTY `data-badge=""`) that Select2
(`$(".js-select2").select2(...)`) transforms into a fully-rendered dark
dropdown widget. Unlike the Semantic UI members of the series (Sifter /
Winnow / etc.), this member uses **Select2** and is a **dark theme** (page
`#343434`, black control, yellow `#f6c523` accents). This is the FIRST
Select2-based series member to be prepped. Distinctive behaviors: the
dropdown **stays open while selecting** (`closeOnSelect: false`), every
row has a 20×20 custom **checkbox square** (checked → yellow fill +
black check mark), selections render as **yellow tag chips** with a
per-chip × remove, a yellow **clear-all ×** sits in the trigger, and
`tags: true` lets the user **type a brand-new option on the fly** (the
inline search field doubles as a tag-creation input — the series
differentiator vs. every other member prepped so far). Thresh recreates
that structure 1:1 with matching layout, tokens, typography, and content
(no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Multiselect 09" is FORBIDDEN as
> the app name. **Thresh** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/`
> or any TEMPLATES.md name (verified 2026-08-17). Source slug + preview
> URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Multiselect 09". Listed in TEMPLATES.md under
  **Bootstrap Multiselect (20)** (section header line 821; row at line
  831). Free multiselect-dropdown component template. The
  `multiselect-09` slug appears exactly ONCE in TEMPLATES.md (no dup rows
  to mark). Series siblings already prepped: Multiselect 01 → Picker
  (`openspec/specs/template-picker/`), 02 → Sifter
  (`openspec/specs/template-sifter/`), 03 → Winnow
  (`openspec/specs/template-winnow/`), 04 → Cull, 05 → Glean, 06 →
  Garner, 07 → Reap, 08 → Pluck — ALL of those are Semantic UI based;
  **Multiselect 09 is the first Select2-based member prepped**.
- **Live preview DOM — REACHABLE (verified 2026-08-17 by direct fetch AND
  browser interaction):** the default preview URL
  `https://preview.colorlib.com/theme/multiselect-09/` returns 404 (`Not
Found`, 9 bytes); the REAL preview URL (same `/theme/bootstrap/` prefix
  as the rest of the Bootstrap UI series) is
  `https://preview.colorlib.com/theme/bootstrap/multiselect-09/` (HTTP
  200, 4,097 bytes — the whole page is 57 lines). Stylesheets:
  `css/style.css` (222,604 bytes = **CUSTOMIZED Bootstrap 4.3.1** + a
  custom token tail at the end — the tail is the real token source),
  `https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.4/css/select2.min.css`
  (the widget engine styles), and
  `https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css`
  (**USED on this page — unlike the Semantic members where it was dead
  code**: the custom CSS check-mark rule renders the checkbox glyph via
  `font-family: 'fontAwesome'; content: "\f00c"`; in the recreation use a
  lucide `Check` icon instead — do NOT ship font-awesome). **Lato**
  (300/400/700) via cf-fonts @font-face blocks in the head — only weight
  400 is used by this page's rules (body `font-family: "Lato", Arial,
sans-serif; font-size: 16px; line-height: 1.8; color: gray; background:
#343434`; `h1–h5 { line-height: 1.5; font-weight: 400; font-family:
"Lato", Arial, sans-serif; color: #000 }`). Scripts: `js/jquery.min.js`,
  `js/popper.js`, `js/bootstrap.min.js` (loaded, unused — no Bootstrap
  components on this page),
  `https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.4/js/select2.min.js`
  (the widget engine), and `js/main.js` (837 bytes) — the demo logic:
  `$(".js-select2").select2({ closeOnSelect: false, placeholder: "Click to
select an option", allowHtml: true, allowClear: true, tags: true })`
  (THE live init — comment in source: "создает новые опции на лету" =
  creates new options on the fly) plus a SECOND init
  `$('.icons_select2').select2({...templateSelection: iformat,
templateResult: iformat...})` with an `iformat` badge renderer — **dead
  code on this page** (no `.icons_select2` element exists; the options'
  `data-badge` attributes are all empty). Do NOT recreate the icon/badge
  machinery.
  Screenshot (`multiselect-09.jpg`, 1200×972 AVIF, browser-verified
  2026-08-17): medium-dark-gray page (`≈#343434`), centered WHITE
  "Multiselect #09" heading, and ONE floating control: a black trigger
  box holding two gold/mustard tag chips ("Option2", "Option4" — gold
  bg, black text, small × remove) and a clear × at the right; the dropdown
  OPEN below: black panel, rows "Option1".."Option5" visible, each with a
  20px square checkbox — unchecked = thin white outline on transparent,
  checked = gold-filled square with a check; selected rows' text is gold —
  clean, high-contrast, dark utilitarian component-demo aesthetic. The
  screenshot's checked-state rendering (gold squares, gold row text)
  matches the live CSS token tail exactly (verified in the stylesheet AND
  via computed styles on live selected rows).
- **Live DOM structure (1:1):**
  - `section.ftco-section` (custom: `padding: 7em 0`; page bg stays the
    customized body `#343434`) → `div.container` (max-width 1140px) →
    two `div.row.justify-content-center`:
    1. `div.col-md-6.text-center.mb-5` → `h2.heading-section` —
       "Multiselect #09" (custom: `font-size: 28px; color: #fff`; inherits
       Lato, weight 400, line-height 1.5; observed `mb-5` ≈ 42–48px gap
       below).
    2. `div.col-lg-5.d-flex.justify-content-center.align-items-center`
       (NO label row — this member has no field label, unlike Winnow's
       "Select Language") → `select.js-select2[multiple]` with 13
       `<option>`s: Option1 (O1) … Option13 (O13), every one carrying an
       empty `data-badge=""`. The plugin replaces it with the widget.
  - **Widget (plugin-rendered, live-verified in browser):**
    `span.select2.select2-container--default` wrapping the hidden select
    (`display: none`-accessible) + the visible control:
    - `span.select2-selection--multiple` — the trigger (computed live:
      background `rgba(0,0,0,0.8)`, border `2px solid rgba(0,0,0,0.1)`
      while focused/open, radius `4px`, padding `5px 10px`, line-height
      1.6, margin-bottom 10px, box-shadow `0px 3px 22px -15px
rgba(0,0,0,0.63)` closed / `rgba(0,0,0,0.8)` open; custom CSS sets
      the border to 2px `transparent` at rest and `rgba(0,0,0,0.1)` on
      `.select2-container--focus`; min-width 100% on `.select2-container`).
    - Inside, `span.select2-selection__rendered` contains:
      - `span.select2-selection__clear` — the **clear-all ×** (computed
        live: color `#f6c523`, weight 700, transparent bg) — renders
        whenever ≥1 selection exists and clears everything (Select2
        `allowClear: true`).
      - per selection: `li.select2-selection__choice` — the **tag chip**
        (computed live: background `#f6c523`, color `#000`, radius `4px`,
        font-size `15px`, padding `2px 10px`, border none; custom CSS
        `border: none; background: #f6c523; font-size: 15px; padding: 2px
10px; color: #000`) containing the option text + a
        `span.select2-selection__choice__remove` × (custom: `margin-right:
5px; color: #000`) that removes just that chip.
      - `li.select2-search--inline > input.select2-search__field` — the
        **inline search/tag input** (type=search; computed live: color
        `rgba(255,255,255,0.8)`; placeholder "Click to select an option"
        while empty; shrinks to `width: 0.75em` once chips exist). With
        `tags: true`, typing here + Enter **creates a brand-new option
        chip** on the fly (series differentiator).
    - `div.select2-dropdown--below` — the panel (computed live:
      background `#000`, border `0px none`, radius `4px`, padding `10px
0`, box-shadow `0px 3px 22px -15px rgba(0,0,0,0.63)`), positioned
      below the trigger (Select2 default). Children — 13
      `div.select2-results__option` rows (computed live: padding `6px 20px
6px 6px` (custom `padding-right: 20px`), color `gray` at rest,
      font-size 16px, weight 400, `vertical-align: middle`):
      - every row's `::before` is the **custom checkbox square** (computed
        live: 20×20px, `2px solid rgba(255,255,255,0.18)`, radius `4px`,
        transparent bg, `margin: 0 15px 0 10px`, inline-block, vertical
        middle; custom rule `.select2-results__option:before`).
      - checked row `::before` (custom
        `.select2-results__option[aria-selected=true]:before`): content
        `\f00c` (fontAwesome check), color `#000`, background `#f6c523`
        (yellow fill), border 0, line-height 1.2, padding-left 2px,
        transition 0.3s.
      - highlighted (hover/keyboard) row (custom
        `.select2-results__option--highlighted[aria-selected]`):
        background `rgba(255,255,255,0.1)`, color `#f6c523` (computed
        live on the first row right after opening).
      - selected row (custom
        `.select2-container--default .select2-results__option[aria-selected=true]`):
        background `#000` wait — the custom rule sets background `#000`
        and color `#f6c523`; live, a row that is BOTH selected and
        highlighted shows the later-in-file highlighted rule
        (`rgba(255,255,255,0.1)` bg + `#f6c523` text) — document both;
        when not hovered, selected rows are `#000` bg + `#f6c523` text.
      - all transitions 0.3s, disabled under `prefers-reduced-motion`.
  - **Footer:** the original has NO footer; per monorepo convention add a
    minimal attribution footer linking `https://www.componentdock.com/`
    ("Component Dock") so every shipped template carries the required link.
- **QUIRK — preview URL:** the default
  `https://preview.colorlib.com/theme/multiselect-09/` 404s; the real URL
  is under `/theme/bootstrap/`. (Same as every member of this UI series.)
- **QUIRK — Select2 engine (not Semantic):** this member uses Select2
  4.0.4, not the Semantic UI dropdown of Multiselect 01–08. The widget
  structure, checkbox UI, chips, and clear button are all Select2's with
  the custom token tail — recreate these, do NOT copy the Semantic widget
  shapes from Sifter/Winnow.
- **QUIRK — dark theme:** page `#343434`, panel `#000`, white heading,
  yellow `#f6c523` accents — the OPPOSITE treatment of the light Semantic
  members. Do not lighten it; the contrast (dark page / yellow accents) is
  the signature.
- **QUIRK — `tags: true` (series differentiator):** the inline search
  field doubles as a tag-creation input: typing text and pressing Enter
  creates a NEW selectable/selected option chip that was not in the source
  list. Recreate this behavior exactly (tests must cover creating a custom
  tag). `allowHtml` is on in the source but the page content is plain
  text — render text only.
- **QUIRK — `closeOnSelect: false`:** picking an option NEVER closes the
  panel (same pattern as Winnow); the user keeps clicking checkboxes until
  they click outside / press Escape / re-activate the trigger.
- **QUIRK — no label:** unlike Winnow's "Select Language" label, this
  member has NO label element at all — the control stands alone under the
  heading. In the recreation, give the trigger an `aria-label`
  ("Select options" / "Options") for a11y (documented fix, no visual
  change).
- **QUIRK — debug junk in the source CSS:** the rule
  `.select2-selection .select2-selection--multiple:after { content:
'hhghgh' }` is leftover debug output that never renders (broken nested
  selector) — ignore it, do NOT recreate.
- **QUIRK — dead badge machinery:** the second `main.js` init
  (`.icons_select2` + `iformat` badge renderer) targets an element that
  does not exist and reads empty `data-badge` attributes — dead code. No
  badges, no icons in the options, no `templateResult`/`templateSelection`
  in the recreation.
- **Visual design (screenshot + live browser):** minimal dark page
  (`#343434`), one centered white 28px heading, ONE floating control:
  black trigger (bg `rgba(0,0,0,0.8)`, 2px border
  transparent→`rgba(0,0,0,0.1)` focus, 4px radius, 5px/10px padding, soft
  shadow `0 3px 22px -15px rgba(0,0,0,0.63)`, placeholder text
  `rgba(255,255,255,0.8)`); selected→ yellow tag chips (`#f6c523` bg,
  black 15px text, black × remove) + yellow clear-all ×; open panel:
  `#000` bg, no border, 4px radius, `10px 0` padding, soft shadow; rows
  with 20×20 checkbox squares (unchecked: 2px `rgba(255,255,255,0.18)`
  outline; checked: `#f6c523` fill + black check), hollow hover
  `rgba(255,255,255,0.1)`, selected/hover text `#f6c523`. Signature
  colors: yellow **#f6c523** (accent: chips, clear ×, links, selected
  text, checked boxes, `bg-primary`) on black/near-black surfaces
  (`#000`, `rgba(0,0,0,0.8)`) over the dark page **#343434**.
- **Section order (1:1 from live DOM):**
  1. **Heading section** — full-width centered `h2.heading-section`
     "Multiselect #09" (recreate as the brand name "Thresh", like the
     other members rename their demo headings).
  2. **Multiselect control** — the Select2-style dark widget with NO
     label: trigger (black `rgba(0,0,0,0.8)`, 2px transparent border →
     `rgba(0,0,0,0.1)` focus, 4px radius, `5px 10px` padding, shadow
     `0 3px 22px -15px rgba(0,0,0,0.63)`, placeholder "Click to select
     an option") → selected rows become yellow chips (× removable) +
     yellow clear-all → open panel (`#000`, radius 4px, padding `10px 0`,
     shadow `0 3px 22px -15px rgba(0,0,0,0.63)`) with 13 checkbox rows
     (Option1..Option13) that stay open while selecting, check marks via
     `#f6c523` squares, hover `rgba(255,255,255,0.1)`/`#f6c523` text,
     selected rows `#000`/`#f6c523` text; typing + Enter creates custom
     tags.
  3. **Footer** — no footer in source; minimal Component Dock footer per
     convention.
- **Design tokens:**
  - Page background: **`#343434`** (customized body bg — dark gray).
  - Brand accent: **`#f6c523`** (yellow — tag chips, clear ×, links, `a`
    color, `.bg-primary`, checked checkbox fill, selected/hover row text).
  - Trigger: background **`rgba(0,0,0,0.8)`**, **border: 2px solid
    transparent** at rest → **`rgba(0,0,0,0.1)`** on focus/open, radius
    **4px**, padding **5px 10px**, line-height 1.6, margin-bottom 10px,
    box-shadow **`0px 3px 22px -15px rgba(0,0,0,0.63)`** (closed) /
    **`rgba(0,0,0,0.8)`** (open), min-width 100% of the column.
  - Placeholder / inline search text: **`rgba(255,255,255,0.8)`**
    ("Click to select an option"); search input shrinks to ~0.75em once
    chips exist.
  - Clear-all ×: color **`#f6c523`**, weight **700**, appears when ≥1
    selection, clears all.
  - Tag chips (`choice`): background **`#f6c523`**, color **`#000`**,
    radius **4px**, font-size **15px**, padding **2px 10px**, border none;
    per-chip remove × color **`#000`**, `margin-right: 5px`.
  - Open panel (`dropdown--below`): background **`#000`**, **no border**,
    radius **4px**, padding **10px 0**, box-shadow
    **`0px 3px 22px -15px rgba(0,0,0,0.63)`**.
  - Rows: padding **6px 20px 6px 6px** (custom `padding-right: 20px`),
    color **gray** (`#808080`) at rest, font-size **16px**, weight 400,
    `vertical-align: middle`; **::before checkbox square**: 20×20px,
    **2px solid rgba(255,255,255,0.18)**, radius **4px**, transparent bg,
    `margin: 0 15px 0 10px`.
  - Checked checkbox: **`#f6c523`** fill, **`#000`** check glyph, border
    0, line-height 1.2, padding-left 2px (source uses fontAwesome `\f00c`;
    recreation: lucide `Check` at ~12px or an inline SVG).
  - Highlighted (hover) row: background **`rgba(255,255,255,0.1)`**,
    color **`#f6c523`**; selected row (not hovered): background **`#000`**,
    color **`#f6c523`**. All transitions 0.3s (respect
    `prefers-reduced-motion`).
  - Heading: **28px**, **`#fff`**, Lato weight 400, line-height 1.5,
    centered, ~42–48px gap below.
  - Body text: color **gray** (`#808080`), 16px, line-height 1.8.
  - Font: **Lato** (300/400/700 loaded by the source; only **400** is used
    by this template's rules — loading 400 via Google Fonts `<link>` is
    faithful) for body and headings.
  - Rhythm: `section.ftco-section` `padding: 7em 0` (≈112px vertical);
    centered columns (`col-md-6` heading, `col-lg-5` ≈460px control
    column); recreate with a centered `max-w-2xl` (1140px) container,
    `text-center` heading, and the control column capped around
    `max-w-md` (28rem ≈ 448px) with a `w-full` widget.
- **Recreation approach:** single page, `min-h-screen` dark section
  (`bg-[#343434]`) with ~112px top/bottom padding, centered: h2 "Thresh"
  (28px, `#fff`, Lato 400) with ~42–48px gap, then a `max-w-md` (~28rem)
  centered column with a state-driven React multiselect (no Bootstrap, no
  Select2, no jQuery): trigger `button` or a focusable container styled as
  the Select2 selection box (bg `rgba(0,0,0,0.8)`, 2px transparent border
  → `rgba(0,0,0,0.1)` focus, `rounded-4px`, px-2.5 py-1-ish, shadow
  `0 3px 22px -15px rgba(0,0,0,0.63)`, `aria-haspopup="listbox"`
  `aria-expanded`, `aria-label` "Select options") showing the placeholder
  "Click to select an option" (`rgba(255,255,255,0.8)`) when empty, else
  the selected **yellow chip list** (each chip: `bg-[#f6c523]` `text-black`
  `text-[15px]` `px-2.5 py-0.5 rounded` with an `×` remove button) plus a
  yellow clear-all ×; an inline search/type input (only visually when the
  trigger is open/focused, `bg-transparent` `text-white/80` — matches the
  Select2 inline field) that doubles as the tag-creation box; panel
  `role="listbox"` (`bg-black`, `rounded-4px`, px-0 py-2.5, shadow
  `0 3px 22px -15px rgba(0,0,0,0.63)`, `top-full` anchored) with 13
  checkbox rows Option1..Option13 (`py-1.5 pr-5 pl-1.5`, 16px gray text)
  — each row a real 20×20 checkbox square (2px `rgba(255,255,255,0.18)`
  border, `rounded`, unchecked transparent; checked `bg-[#f6c523]` with a
  black lucide `Check`), hover `bg-white/10` + `text-[#f6c523]`, selected
  rows `text-[#f6c523]`; selecting toggles the row, KEEPS the panel open,
  updates the chips; clicking a chip's × removes it; the clear-all ×
  empties everything; typing + Enter creates a NEW custom tag (with the
  typed text, next available value); outside-click / Escape / trigger
  toggle closes the panel and selections persist. Plus the mandatory
  minimal Component Dock footer. Icons: lucide-react (`Check`, `X`,
  `ChevronDown` if a caret is used — the Select2 trigger has no caret, the
  clear/chip × marks carry the UI; probe exports before use — see
  tasks.md). No images at all (the source has none).
- **Fidelity deviations (documented):** source checkbox check glyph is
  fontAwesome (replaced with lucide `Check`); source has NO label/aria —
  recreation adds `aria-label` on the trigger for a11y; source has no
  footer — recreation adds the mandatory Component Dock footer; source
  `allowHtml: true` is unused (plain text options) — render text only;
  source `data-badge`/icon badges are dead — omitted.

## Requirements

### Requirement: Heading section

The system SHALL render a centered heading section on the dark page.

#### Scenario: Centered heading

- **GIVEN** the Thresh app is rendered
- **WHEN** the page loads
- **THEN** a dark page (`#343434`) SHALL show a centered heading "Thresh"
  (the new brand name in place of the source's "Multiselect #09" demo
  label) at ~28px in `#fff`
- **AND** the heading SHALL use the Lato font family at weight 400 with
  line-height 1.5
- **AND** the page SHALL have generous vertical padding (~112px — the
  source's `ftco-section` 7em) above and below the content
- **AND** the content SHALL be centered horizontally inside a comfortable
  container (≈1140px) with the control column capped at ~28rem

### Requirement: Multiselect trigger

The system SHALL render a dark multiselect trigger with a placeholder and
clear-all affordance.

#### Scenario: Trigger and placeholder

- **GIVEN** the heading renders
- **WHEN** the control area displays
- **THEN** a dark trigger SHALL show below the heading (no label — the
  source has none; an `aria-label` "Select options" SHALL be present for
  assistive tech)
- **AND** the trigger SHALL have a near-black background
  (`rgba(0,0,0,0.8)`), a 2px border that is transparent at rest and
  `rgba(0,0,0,0.1)` on focus/open, ~4px border radius, ~5px/10px padding,
  and a soft shadow (`0 3px 22px -15px rgba(0,0,0,0.63)`)
- **AND** when nothing is selected the trigger SHALL show the placeholder
  text "Click to select an option" in `rgba(255,255,255,0.8)`
- **AND** the trigger SHALL have `aria-haspopup="listbox"` and
  `aria-expanded="false"` initially

#### Scenario: Clear-all button

- **WHEN** at least one option is selected
- **THEN** a clear-all × SHALL appear in the trigger in the yellow accent
  `#f6c523` at weight 700
- **AND** activating it SHALL clear every selection at once
- **AND** the placeholder SHALL return and the clear-all × SHALL disappear
  when the last selection is removed

### Requirement: Dropdown with checkbox options

The system SHALL open a black dropdown listing the thirteen options as
checkbox rows.

#### Scenario: Dropdown opens with thirteen options

- **WHEN** the user activates the trigger
- **THEN** a black dropdown panel SHALL appear flush below the trigger
  (`#000` background, no border, ~4px radius, ~10px vertical padding, soft
  shadow `0 3px 22px -15px rgba(0,0,0,0.63)`)
- **AND** `aria-expanded` SHALL flip to `true`
- **AND** the panel SHALL list the thirteen options Option1, Option2, …
  Option13 in that order
- **AND** every row SHALL render a 20×20 checkbox square (2px
  `rgba(255,255,255,0.18)` border, ~4px radius, transparent background)
  to the left of its gray 16px text
- **AND** rows SHALL highlight on hover/keyboard focus with a translucent
  white background (`rgba(255,255,255,0.1)`) and yellow `#f6c523` text

#### Scenario: Checking options

- **WHEN** the user selects a row
- **THEN** that row's checkbox SHALL fill with the yellow accent
  `#f6c523` and show a black check mark
- **AND** the row text SHALL turn yellow `#f6c523` (on `#000` when not
  hovered)
- **AND** the option SHALL be reflected with `aria-selected`

### Requirement: Selection behavior

The system SHALL render selections as removable yellow tag chips and keep
the panel open while selecting.

#### Scenario: Selecting options

- **GIVEN** the dropdown is open
- **WHEN** the user clicks "Option1" and then "Option2"
- **THEN** the dropdown SHALL STAY open (the source's
  `closeOnSelect: false` — picking an option never closes the panel)
- **AND** each selected option SHALL render inside the trigger as a yellow
  tag chip (`#f6c523` background, black ~15px text, ~4px radius, ~2px/10px
  padding) with its own × remove control (black)
- **AND** the placeholder SHALL disappear while the chips occupy the
  trigger
- **AND** the inline search/type input SHALL shrink to a minimal width
  once chips exist

#### Scenario: Removing a single selection

- **WHEN** the user activates a chip's × remove control
- **THEN** that chip SHALL be removed and its option deselected
- **AND** the remaining chips SHALL stay untouched
- **AND** when the last chip is removed the placeholder SHALL return

### Requirement: Custom tag creation

The system SHALL let the user create a brand-new option by typing
(the source's `tags: true` — the series differentiator vs. every other
prepped member).

#### Scenario: Typing a new tag

- **GIVEN** the trigger is focused / the dropdown is open
- **WHEN** the user types e.g. "Custom" into the inline input and presses
  Enter
- **THEN** a new chip labeled "Custom" SHALL be created and selected
  alongside the existing ones
- **AND** the new custom option SHALL participate in the same checkbox
  row state (visible if the panel reopens, deselectable, removable)
- **AND** the input SHALL clear after the tag is created

### Requirement: Dropdown dismissal

The system SHALL close the dropdown on outside interaction while keeping
selections.

#### Scenario: Close interactions

- **GIVEN** the dropdown is open
- **WHEN** the user clicks outside the control, presses Escape, or
  activates the trigger again
- **THEN** the panel SHALL close and `aria-expanded` SHALL return to
  `false`
- **AND** the selected chips SHALL be preserved across open/close cycles
  (closing never clears selections)

### Requirement: Page composition

The system SHALL compose the page with a main landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Thresh app is rendered
- **WHEN** the page loads
- **THEN** the heading and the multiselect control SHALL render in the main
  landmark
- **AND** the document title SHALL be "Thresh — Multiselect Dropdown"

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Thresh app is rendered
- **WHEN** the footer displays
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text)

## Verification checklist

- [ ] `openspec/specs/template-thresh/spec.md` exists on main with the full
      section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/thresh/tasks.md` exists on main with design notes and
      the implementation task outline.
- [ ] Fidelity: structure matches the Multiselect 09 preview DOM 1:1
      (centered 28px WHITE heading on `#343434` → dark Select2-style
      trigger with placeholder "Click to select an option"/yellow chips +
      yellow clear-all → black dropdown panel (radius 4px, shadow `0 3px
    22px -15px rgba(0,0,0,0.63)`, padding 10px 0) with 13 checkbox rows
      Option1..Option13 (20×20 checkbox squares, hover
      `rgba(255,255,255,0.1)`/`#f6c523`, selected `#000`/`#f6c523`) →
      minimal Component Dock footer).
- [ ] Tokens used in the app: page `#343434`, accent yellow `#f6c523`
      (chips, clear ×, links, checked checkboxes, selected/hover text),
      trigger bg `rgba(0,0,0,0.8)`, border 2px transparent →
      `rgba(0,0,0,0.1)` focus, panel `#000`, placeholder/search text
      `rgba(255,255,255,0.8)`, rows gray 16px, chip text `#000` 15px;
      radius 4px; Lato 400 via Google Fonts `<link>`.
- [ ] No ColorLib references in `apps/thresh` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] NO images (the source has none); icons only via lucide-react
      (`Check` for the checked checkbox, `X` for chip remove / clear-all —
      probed before use). NO font-awesome, NO Select2, NO Bootstrap, NO
      jQuery shipped.
- [ ] Source behavior honored: panel STAYS open while selecting
      (`closeOnSelect: false`); selections render as yellow TAG CHIPS with
      per-chip × remove + yellow clear-all ×; **`tags: true` — typing +
      Enter creates a brand-new custom tag** (the series differentiator);
      checkbox UI with 20×20 squares (checked = yellow fill + black
      check); placeholder "Click to select an option"; clear-all empties
      everything; chips persist across open/close.
- [ ] Documented deviations (a11y fixes): no label exists in the source —
      trigger got an `aria-label`; fontAwesome check glyph replaced with a
      lucide `Check`; dead `.icons_select2` badge/icon machinery omitted;
      debug CSS (`content: 'hhghgh'`) omitted; footer added per
      convention.
- [ ] Implementer gate: `scripts/verify-app.sh thresh` (typecheck + lint +
      100% coverage tests + build) and `npm run spec:validate`.
