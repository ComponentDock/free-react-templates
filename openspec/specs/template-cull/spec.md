# Template: Cull (Multiselect Dropdown)

## Purpose

Cull is a single-page multiselect-dropdown component demo in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Multiselect 04" free template (source:
https://colorlib.com/wp/template/multiselect-04/), built under a DIFFERENT
name (**Cull** — the fourth of the selection-themed names for this Bootstrap
Multiselect UI series, after "Picker" took Multiselect 01, "Sifter" took
Multiselect 02, and "Winnow" took Multiselect 03; "to cull" is to select and
gather the best from a group — exactly what a multiselect widget does — per
the monorepo naming mandate: never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a minimal, centered demo page (customized Bootstrap 4.3.1 +
**bootstrap-select 1.13.1** — NOT Semantic UI like series members 01–03): a
`section.ftco-section` with a centered `h2.heading-section` "Multiselect #04",
and below it ONE multiselect field — a bare
`select.selectpicker[multiple]` with **3 options** (Toronto, Bucharest,
Paris — no "All", no `value` attrs, and NO label element, unlike Winnow's
"Select Language") that bootstrap-select auto-initializes on DOM ready
(`.selectpicker` class) into a `.dropdown.bootstrap-select.show-tick`
widget: a `btn-light` trigger button showing "Nothing selected" (gray
placeholder) or the selected cities joined with ", ", plus a dropdown menu
whose selected rows get a **pink `#f30e5c` checkmark** (the custom
stylesheet override `.bootstrap-select .bs-ok-default:after { color:
#f30e5c }` — the series differentiator: Winnow/Sifter tint the row TEXT blue
`#3e64ff`, Cull leaves the row text dark `#212529` and marks selection with
a pink check on the right). Cull recreates that structure 1:1 with matching
layout, tokens, typography, and content (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Multiselect 04" is FORBIDDEN as the
> app name. **Cull** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-17). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Multiselect 04". Listed in TEMPLATES.md under
  **Bootstrap Multiselect (20)** (section header line 821; row at line 826).
  Free multiselect-dropdown component template. The `multiselect-04` slug
  appears exactly ONCE in TEMPLATES.md (no dup rows to mark). Siblings in
  the series already prepped: Multiselect 01 → `apps/picker` spec
  (`openspec/specs/template-picker/`), Multiselect 02 → `apps/sifter` spec
  (`openspec/specs/template-sifter/`), Multiselect 03 → `apps/winnow` spec
  (`openspec/specs/template-winnow/`).
- **Live preview DOM — REACHABLE (verified 2026-08-17 by direct fetch AND
  browser interaction):** the default preview URL
  `https://preview.colorlib.com/theme/multiselect-04/` returns 404 ("Not
  Found", 9 bytes); the REAL preview URL (same `/theme/bootstrap/` prefix as
  the rest of the Bootstrap UI series) is
  `https://preview.colorlib.com/theme/bootstrap/multiselect-04/` (HTTP 200,
  3,508 bytes — the whole page is 47 lines). Stylesheets: `css/style.css`
  (219 KB = **CUSTOMIZED Bootstrap 4.3.1** + a custom token tail at the
  end — the tail is the real token source: `body { font-family: "Lato",
Arial, sans-serif; font-size: 16px; line-height: 1.8; background: #fff;
color: gray }`, `h1–h5 { line-height: 1.5; font-weight: 400; font-family:
"Lato"; color: #000 }`, `a { color: #f30e5c }`, `.bg-primary { background:
#f30e5c !important }`, `.ftco-section { padding: 7em 0 }`,
  `.heading-section { font-size: 28px; color: #000 }`, and the CUSTOM
  widget tweak `.bootstrap-select .bs-ok-default:after { color: #f30e5c;
font-size: 12px; margin-top: 5px }`),
  `https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.min.css`
  (the widget engine's styles), and
  `https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css`
  (LOADED but UNUSED — zero `fa-` classes in the live DOM; bootstrap-select
  1.13.1 draws its check with a CSS border check, not a font icon; do NOT
  load font-awesome in the recreation). **Lato** (300/400/700) via cf-fonts
  @font-face blocks in the head — only weight 400 is used by this page's
  rules. Scripts: `js/jquery.min.js`, `js/popper.js`, `js/bootstrap.min.js`
  (loaded, unused — no Bootstrap JS components on this page),
  `https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.min.js`
  (THE engine — auto-initializes every `select.selectpicker` on DOM ready),
  and `js/main.js` — which is **DEAD CODE on this page**: it defines a
  custom `Multiselect` class targeting `#countries.multiselect` (a
  `> .title`/`option` widget from ANOTHER ColorLib template — the demo sets
  `new Multiselect("#countries")`), and nothing in the live DOM matches it.
  The visible widget is 100% bootstrap-select's own render. (Do NOT port
  main.js; its `"select"`/`, "` join logic happens to describe the visible
  ", "-joined text, but it never runs here.)
- **Screenshot analyzed:** `multiselect-04.jpg` (1200×972 AVIF, ~~4.7 KB,
  downloaded + viewed in browser): a browser-window capture (taken at
  ui-preview.colorlib.com) of the OPEN, nothing-selected state — white
  page, centered dark sans-serif "Multiselect #04" heading, light-gray
  trigger (~~#e5e5e5 — an OLDER render; the LIVE fresh-state bg computes to
  Bootstrap `btn-light` `#f8f9fa`; live is authoritative) with "Nothing
  selected" text and a small dark caret at the right edge, and the open
  menu below: Toronto / Bucharest / Paris in black text on white rows, the
  hovered row (Bucharest) tinted light gray, NO checkmarks (correct —
  checkmarks only appear on selected rows). The screenshot matches the live
  behavior exactly (the live render is the authoritative reference).
- **Live DOM structure (1:1):**
  - `section.ftco-section` (custom: `padding: 7em 0` ≈ 112px vertical;
    page bg stays Bootstrap `#fff`) → `div.container` (max-width 1140px)
    → two `div.row.justify-content-center`:
    1. `div.col-md-6.text-center.mb-5` → `h2.heading-section` —
       "Multiselect #04" (custom: `font-size: 28px; color: #000`; inherits
       Lato, weight 400, line-height 1.5 → 42px; observed `mb-5` gap below
       = 48px / 3rem).
    2. `div.col-md-6.col-lg-4.d-flex.justify-content-center.align-items-center`
       (observed ≈380px wide at lg; row at top ≈210px, column height = the
       control's 38px) → the raw `select.selectpicker[multiple]` with NO
       wrapper div — bootstrap-select wraps the select itself:
  - **Widget (plugin-rendered, from the live DOM):**
    `div.dropdown.bootstrap-select.show-tick` — observed **exactly 220px
    wide × 38px tall**, centered in the column by the flex container
    (bootstrap-select's default `.bootstrap-select:not([class*=col-])…
{ width: 220px }`; the source does not set a custom width), containing:
    - the original `<select class="selectpicker" multiple>` (kept in the
      DOM as the data source: `position: absolute; bottom: 0; left: 50%;
width: .5px; height: 100%; opacity: 0; border: none` — invisible but
      present, `tabindex="-98"`).
    - `button.btn.dropdown-toggle.btn-light` (width 100%, height 38px;
      class also carries `bs-placeholder` while nothing is selected):
      - `div.filter-option` (absolute, `top/left 0`, full width/height,
        `text-align: left`) → `div.filter-option-inner` (padding-right
        inherit) → `div.filter-option-inner-inner` (`overflow: hidden`) —
        text: **"Nothing selected"** (placeholder, color `#999`) or the
        selected values joined with `", "` (e.g. "Toronto, Bucharest";
        also mirrored into the `title` attribute).
      - NO caret `<span>` — bootstrap-select 1.13.1's `showCaret` renders
        none; the visible dark arrow is Bootstrap 4's
        `.dropdown-toggle::after` (border triangle: `border-top: 4px solid`,
        ≈8×4px, `margin-left/vertical-align: .255em`, `display:
inline-block`, sits in the button flow at the right edge via
        `text-align: right` and shows through the transparent
        filter-option). Its color inherits the button text color: `#999`
        (placeholder state) / `#212529` (selected state).
    - `div.dropdown-menu.show` (observed: `position: absolute; top: 0;
left: 0; transform: translate3d(0, 38px, 0)` — flush below the
      button; `min-width: 100%` → 220px; bg `#fff`; border `1px solid
rgba(0,0,0,0.15)`; radius `4px`; `padding: 8px 0`; `box-shadow: none`;
      `max-height: 307px`) → `div.inner.show[role="listbox"]` (max-height
      289px, `overflow-y: auto` — no scrollbar with only 3 options) →
      `ul.dropdown-menu.inner.show` → three `li` → `a.dropdown-item[role=
"option"][tabindex="0"]` (one per city; observed padding `4px 24px`,
      color `#212529`, Lato 16px weight 400, line-height 1.8 → 28.8px,
      bg transparent; hover/focus = Bootstrap 4 default `background:
#f8f9fa`; selected rows carry class `selected` + `aria-selected=
"true"`):
      - `span.bs-ok-default.check-mark` — the check indicator: `display:
none` by default; when the row is selected AND the menu is open it
        becomes `display: inline-block; position: absolute; right: 15px;
top: 5px`; the check itself is drawn by `.bs-ok-default:after` —
        a CSS border check (`content: ""; width: .5em; height: 1em;
border-width: 0 .26em .26em 0; transform: rotate(45deg)`) colored
        **`#f30e5c`** by the custom tail (`font-size: 12px; margin-top:
5px` — live-computed `rgb(243, 14, 92)` verified). Rows reserve
        room via `.bootstrap-select.show-tick .dropdown-menu li a
span.text { margin-right: 34px }`.
      - `span.text` — the option label ("Toronto", …).
  - **Footer:** the original has NO footer; per monorepo convention add a
    minimal attribution footer linking `https://www.componentdock.com/`
    ("Component Dock") so every shipped template carries the required link.
- **QUIRK — preview URL:** the default
  `https://preview.colorlib.com/theme/multiselect-04/` 404s; the real URL
  is under `/theme/bootstrap/`. (Same as every member of this UI series.)
- **QUIRK — the widget engine changed mid-series:** Multiselect 01–03 are
  Semantic UI dropdowns; **04 is bootstrap-select 1.13.1**. Because of
  that, the UI language is Bootstrap 4: `btn-light` pill trigger (not a
  Semantic field), Bootstrap `.dropdown-menu`/`.dropdown-item` widgets,
  and a checkmark instead of colored row text. The visible surface has NO
  tag pills (bootstrap-select multiple shows a ", "-joined text summary,
  not pills — the same `useLabels: false`-style behavior as Winnow), and
  unlike Winnow there is NO label above the control at all.
- **QUIRK — "Nothing selected" placeholder semantics:** with nothing
  selected, the trigger shows the literal placeholder text "Nothing
  selected" (bootstrap-select's `noneSelectedText` default) in `#999`
  (class `bs-placeholder`). Once ≥1 city is picked, the class drops and
  the trigger shows the values joined with ", " (bootstrap-select
  `multipleSeparator` default) in `#212529`. The `title` attribute mirrors
  the same text. There is NO "All"/empty-value option in this member, so
  there is no placeholder-vs-option subtlety like Winnow had.
- **QUIRK — trigger border is invisible when fresh:** the closed, fresh
  trigger computes border-color `#f8f9fa` — the SAME as its `btn-light`
  background — so the "border" only becomes visible on hover/open
  (btn-light hover styles: bg ≈ `#e2e6ea` — observed `#dadfe5` while open;
  border `#d3d9df`; radius stays 4px; no box-shadow ever). Recreate the
  fresh state faithfully (borderless light-gray pill) and the hover/open
  state (slightly darker pill + visible border).
- **QUIRK — selection keeps the menu open (live-verified):** clicking
  "Toronto" then "Bucharest" left the menu open (bootstrap-select multiple
  default — `closeOnSelect` not enabled), updated the trigger text to
  "Toronto, Bucharest" + `title`, and the checkmarks appeared on the two
  selected rows only while the menu is open (the check is a
  menu-scoped `.show-tick` style — the trigger itself shows no check).
  Clicking a selected row toggles it off (text + title update, check
  disappears); clicking outside/hitting the trigger closes the menu;
  closing NEVER clears selections.
- **Visual design (screenshot + live browser):** minimal white page, one
  centered dark 28px black heading, and ONE floating control: a
  `btn-light` pill (220×38px, `#f8f9fa` bg, invisible border fresh, 4px
  radius, 6px 12px padding, "Nothing selected" in gray `#999` + gray
  caret at right) with a Bootstrap dropdown menu below (white, 1px
  `rgba(0,0,0,0.15)` border, 4px radius, 8px 0 padding): three rows
  Toronto / Bucharest / Paris (dark `#212529` text, 16px, line-height 1.8,
  `4px 24px` padding, light-gray `#f8f9fa` row hover) and a **pink
  `#f30e5c` checkmark** on the right of each selected row. Signature
  color: raspberry pink **#f30e5c** (the checkmark — the only accent
  visible on this page; also the site `a` color and `.bg-primary`, unused
  here). Grays carry the rest: placeholder `#999`, text `#212529`, hover
  fill `#f8f9fa`, menu border `rgba(0,0,0,0.15)`.
- **Section order (1:1 from live DOM):**
  1. **Heading section** — full-width centered `h2.heading-section`
     "Multiselect #04" (recreate as the brand name "Cull", like Picker,
     Sifter, and Winnow rename their demo headings).
  2. **Multiselect control** — the 220px bootstrap-select widget centered
     in the column: trigger pill ("Nothing selected" gray placeholder →
     ", "-joined city list dark) + dropdown panel (3 city rows, pink
     checkmarks on selected rows).
  3. **Footer** — no footer in source; minimal Component Dock footer per
     convention.
- **Design tokens:**
  - Brand accent: **`#f30e5c`** (raspberry pink — the SELECTED-ROW
    CHECKMARK color via the custom `.bs-ok-default:after` override; also
    `a` link color and `.bg-primary` in the stylesheet, unused on this
    page). This is the series differentiator — the accent is applied to
    the check indicator, NOT to row text (Winnow/Sifter tinted row text
    blue `#3e64ff`; Cull leaves it dark `#212529`).
  - Trigger (closed, fresh): **`#f8f9fa`** bg (btn-light), border **1px
    solid `#f8f9fa`** (same as bg — visually borderless), radius **4px**,
    padding **6px 12px**, height **38px**, `box-shadow: none`;
    text-align right (for the caret); hover/open: bg ≈**`#e2e6ea`**
    (observed `#dadfe5` open) with border **`#d3d9df`**.
  - Trigger text: placeholder **"Nothing selected"** in **`#999`**
    (bs-placeholder), else the values joined with **", "** in **`#212529`**
    (Lato 16px, weight 400, line-height 24px).
  - Caret: Bootstrap `.dropdown-toggle::after` border triangle — `border-
top: 4px solid`, ≈8×4px, color = button text color (`#999`
    placeholder / `#212529` selected), right edge of the button.
  - Menu: **white** bg, border **1px solid `rgba(0,0,0,0.15)`**, radius
    **4px**, `padding: 8px 0`, `box-shadow: none`, `min-width: 100%`
    (220px), `position: absolute` flush under the trigger, max-height
    ≈307px (inner list scrolls, `overflow-y: auto` — no scrollbar with 3
    options).
  - Menu rows: `padding: 4px 24px`, color **`#212529`**, Lato **16px**
    weight 400, line-height 1.8 (28.8px), bg transparent; hover/focus
    bg **`#f8f9fa`** (Bootstrap 4 default); selected rows add class
    `selected` + `aria-selected="true"` + visible checkmark; row text
    keeps a right margin of **34px** (room for the check).
  - Checkmark: CSS border check (`.bs-ok-default:after` — `width: .5em;
height: 1em; border-width: 0 .26em .26em 0; transform: rotate(45deg)`),
    color **`#f30e5c`**, `font-size: 12px; margin-top: 5px`, positioned
    **absolute right 15px / top 5px** of the row, `display: none` unless
    the row is selected (and the menu is open).
  - Heading: **28px**, **`#000`**, Lato weight 400, line-height 1.5 (42px),
    centered, **48px** gap below (`mb-5`).
  - Font: **Lato** (300/400/700 loaded by the source; only **400** is used
    by this template's rules — loading 400 via Google Fonts `<link>` is
    faithful) for body (16px, line-height 1.8, color gray `#808080`, bg
    `#fff`) and headings.
  - Rhythm: `section.ftco-section` `padding: 7em 0` (≈112px vertical);
    centered columns (`col-md-6` heading, `col-md-6 col-lg-4` ≈380px →
    control widget exactly **220px** wide, centered by the column flex);
    recreate with a centered `max-w-2xl` (1140px) container, `text-center`
    heading, and the control column capped around `max-w-xs`/`max-w-sm`
    with the widget fixed at `w-[220px]`.
- **Recreation approach:** single page, `min-h-screen` white section with
  ~112px top/bottom padding, centered: h2 "Cull" (28px, #000, Lato 400)
  with a 48px gap, then a centered ~380px column (`max-w-sm`) holding a
  state-driven React multiselect (no Bootstrap, no bootstrap-select, no
  jQuery): trigger `button` (`bg-[#f8f9fa]`, borderless-fresh look via
  border `#f8f9fa` → hover `#e2e6ea`/`#d3d9df`, `rounded-4px`, `h-[38px]`,
  `px-3 py-1.5`, Lato 16px, `aria-haspopup="listbox"` `aria-expanded`,
  `aria-label` like "Select cities", `ChevronDown` lucide icon at the
  right edge colored `#999` placeholder / `#212529` selected) showing
  "Nothing selected" in `#999` when empty, else the ", "-joined city
  names in `#212529`; panel `role="listbox"` (white, 1px
  `rgba(0,0,0,0.15)` border, `rounded-4px`, `py-2`, `w-full`, `top-full`
  anchored, flush below) with 3 rows Toronto / Bucharest / Paris
  (`px-6 py-1`, 16px `#212529`, line-height 1.8, hover bg `#f8f9fa`,
  `aria-selected`); a `Check`-style pink `#f30e5c` indicator on the right
  (right 15px / top 5px, rows get `pr-[34px]`-ish room) showing only on
  selected rows while the panel is open; clicking a row toggles it and
  KEEPS the panel open; trigger toggle / outside click / Escape close it;
  selections persist across open/close cycles; the `title`-attr mirror is
  replicated as an HTML `title` on the trigger. Plus the mandatory minimal
  Component Dock footer. Icons: lucide-react (`ChevronDown`, `Check` —
  probe exports before use — see tasks.md). No images at all (the source
  has none).

## Requirements

### Requirement: Heading section

The system SHALL render a centered heading section on a white page.

#### Scenario: Centered heading

- **GIVEN** the Cull app is rendered
- **WHEN** the page loads
- **THEN** a white page SHALL show a centered heading "Cull" (the new
  brand name in place of the source's "Multiselect #04" demo label) at
  ~28px in `#000`
- **AND** the heading SHALL use the Lato font family at weight 400 with
  line-height 1.5
- **AND** the page SHALL have generous vertical padding (~112px — the
  source's `ftco-section` 7em) above and below the content
- **AND** the content SHALL be centered horizontally inside a comfortable
  container (≈1140px) with the control column capped at ~24rem

### Requirement: Multiselect control

The system SHALL render a multiselect trigger button that opens a dropdown
panel listing the three cities.

#### Scenario: Trigger and empty state

- **GIVEN** the heading renders
- **WHEN** the control area displays
- **THEN** a light-gray (`#f8f9fa`) trigger pill SHALL sit centered in the
  column at ~220px wide and ~38px tall with a 4px border radius and no
  box-shadow (the source's fresh `btn-light` state; the visible border is
  the same `#f8f9fa` as the background — visually borderless)
- **AND** the trigger SHALL show the gray (`#999`) placeholder text
  "Nothing selected" when nothing is chosen (the source's
  `bs-placeholder` state)
- **AND** a caret SHALL sit at the right edge of the trigger, colored
  `#999` in the placeholder state (`#212529` once something is selected)
- **AND** the trigger SHALL expose `aria-haspopup="listbox"`,
  `aria-expanded="false"`, and an accessible name (the source has NO
  visible label — an `aria-label` like "Select cities" is the a11y fix)
- **AND** there SHALL be no label element above the control (the source
  has none — unlike Winnow/Multiselect 03)

#### Scenario: Dropdown opens with three city options

- **WHEN** the user activates the trigger
- **THEN** a white dropdown panel SHALL appear flush below the trigger
  (1px `rgba(0,0,0,0.15)` border, 4px radius, ~8px vertical padding, same
  width as the trigger)
- **AND** the trigger SHALL subtly darken to the hover state (bg ≈
  `#e2e6ea`, border `#d3d9df`) and `aria-expanded` SHALL flip to `true`
- **AND** the panel SHALL list the three options Toronto, Bucharest, Paris
  in that order (plain `#212529` text at 16px, line-height 1.8, ~4px 24px
  padding, light-gray `#f8f9fa` hover fill — Bootstrap 4 dropdown items;
  NO row dividers, NO "All" row)
- **AND** every row SHALL expose `aria-selected="false"` and NO visible
  checkmark while unselected

### Requirement: Selection behavior

The system SHALL select options, mark them with a pink checkmark, and
summarize them as a comma-separated list, keeping the panel open.

#### Scenario: Selecting options

- **GIVEN** the dropdown is open
- **WHEN** the user clicks "Toronto" and then "Bucharest"
- **THEN** the dropdown SHALL STAY open (bootstrap-select multiple
  behavior — picking an option never closes the panel)
- **AND** the trigger text SHALL become "Toronto, Bucharest" (values
  joined with ", " — the source's `multipleSeparator`), colored `#212529`,
  and the gray placeholder SHALL be gone
- **AND** the trigger `title` attribute SHALL mirror the same text
- **AND** the selected rows SHALL show the pink `#f30e5c` checkmark at
  the right edge and `aria-selected="true"`
- **AND** unselected rows SHALL stay dark-texted with no checkmark (the
  accent marks ONLY the check — never the row text; this is the Cull
  series differentiator vs Winnow/Sifter's blue text)
- **AND** the source's invisible native `<select>` semantics SHALL be
  replaced by real React state holding the selected city names

#### Scenario: Deselecting options

- **WHEN** the user clicks an already-selected row in the open panel
- **THEN** that row SHALL toggle back to its unselected state (checkmark
  disappears, `aria-selected="false"`)
- **AND** the trigger text SHALL update to the remaining selections
- **AND** when the last selection is removed the trigger SHALL return to
  the gray "Nothing selected" placeholder

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

- **GIVEN** the Cull app is rendered
- **WHEN** the page loads
- **THEN** the heading and the multiselect control SHALL render in the main
  landmark
- **AND** the document title SHALL be "Cull — Multiselect Dropdown"

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Cull app is rendered
- **WHEN** the footer displays
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text)

## Verification checklist

- [ ] `openspec/specs/template-cull/spec.md` exists on main with the full
      section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/cull/tasks.md` exists on main with design notes and
      the implementation task outline.
- [ ] Fidelity: structure matches the Multiselect 04 preview DOM 1:1
      (centered 28px black heading → 220px `btn-light` trigger pill
      ("Nothing selected" #999 → ", "-joined cities #212529) → white
      dropdown panel (1px rgba(0,0,0,0.15) border, 4px radius, 3 rows
      Toronto / Bucharest / Paris, `#f8f9fa` hover, pink `#f30e5c`
      checkmark on selected rows) → minimal Component Dock footer).
- [ ] Tokens used in the app: brand pink `#f30e5c` (checkmark ONLY),
      trigger `#f8f9fa` / hover `#e2e6ea` + border `#d3d9df`, placeholder
      `#999`, text `#212529`, hover fill `#f8f9fa`, menu border
      `rgba(0,0,0,0.15)`; radius 4px; Lato 400 via Google Fonts `<link>`.
- [ ] No ColorLib references in `apps/cull` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] NO images (the source has none); icons only via lucide-react
      (`ChevronDown`, `Check` — probed before use). NO font-awesome, NO
      Bootstrap, NO bootstrap-select, NO jQuery shipped.
- [ ] Source behavior honored: panel stays open while selecting; trigger
      shows ", "-joined values (NOT tag pills — bootstrap-select multiple
      never renders pills); "Nothing selected" placeholder in #999
      returns when the last selection is removed; checkmarks visible ONLY
      on selected rows and only while the panel is open; re-clicking a
      selected row deselects it; closing never clears selections.
- [ ] Documented deviations (a11y fixes): trigger got `aria-haspopup`/
      `aria-expanded` + `aria-label` (the source's control has no
      accessible name); invisible native `<select>` semantics rebuilt as
      an accessible listbox with per-row `aria-selected`; the fresh
      trigger's invisible border (`#f8f9fa` on `#f8f9fa`) is replicated
      as the default state with a real border appearing on hover/open.
- [ ] Implementer gate: `scripts/verify-app.sh cull` (typecheck + lint +
      100% coverage tests + build) and `npm run spec:validate`.
