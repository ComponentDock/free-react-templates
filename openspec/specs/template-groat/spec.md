# Template: Groat (Multiselect Dropdown)

## Purpose

Groat is a single-page multiselect-dropdown component demo in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Multiselect 17" free template (source:
https://colorlib.com/wp/template/multiselect-17/), built under a DIFFERENT
name (**Groat** — the seventeenth of the selection/separating-themed names for
this series, after Picker (01), Sifter (02), Winnow (03), Cull (04), Glean
(05), Garner (06), Reap (07), Pluck (08), Thresh (09), Sickle (10), Scythe
(11), Sheaf (12), Sieve (13), Fanner (14), Bolter (15), Husk (16); a groat is
a hulled (dehusked) grain kernel — the literal next physical step in the
grain-processing chain after the husk is stripped away at threshing,
continuing the winnowing metaphor per the monorepo naming mandate: never
reuse the ColorLib source name), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a minimal, centered demo page (Bootstrap 4 grid + the
**bootstrap-select v1.13.9 plugin by SnapAppointments** + jQuery 3.3.1 +
Popper) with the EXACT same shape as its sibling "Multiselect 16" (→ Husk):
a `div.content` (padding 7rem 0) on a **light-gray `#efefef` page** with a
centered `h2` reading **"Multi-Select #7 (Limit to 7 selection)"** and a
SINGLE multi-select widget in a centered `col-md-5` column (445px content
width at ≥1200px viewport). The widget is a **bootstrap-select multiple**
rendered as a _bordered input-style button_ (white, **1px `#d3d9df` border,
4px radius**, 38px tall, 16px Roboto text) showing the placeholder
**"Nothing selected"** (gray `#999`) or the comma-joined list of selected
states (dark `#212529`, in selection order); clicking the button toggles a
**floating white dropdown menu** (1px `rgba(0,0,0,.15)` border, 4px radius,
**NO shadow**, same 445px width as the button, `max-height: 373px` with an
internal scrollbar) listing all 50 US states in a single alphabetical column
(plain rows, no search box, no select-all, no actions box).

**THE TWO THINGS THAT MAKE GROAT DIFFERENT FROM HUSK (16):**

1. **A 7-selection limit.** The `<select>` carries **`data-max-options="7"`**
   (all other options use bootstrap-select's defaults). Once 7 states are
   selected, any further pick is **rejected**: the button text stays at the 7
   names and a transient **"Limit reached (7 items max)"** notice appears
   (bootstrap-select's default `maxOptionsText`; live-verified 2026-08-17 by
   both keyboard Enter and a full mouse mousedown/mouseup/click sequence on
   the 8th row). Deselecting below 7 re-enables picking.
2. **A green accent.** The custom `css/style.css` tail overrides the
   selection styling: `.dropdown-menu li.selected > a.selected { color:
#8cba51 }` and `.check-mark { color: #8cba51 }` — selected rows' TEXT and
   the checkmark are **moss-green `#8cba51`** instead of Husk's dark
   `#212529`. This is the FIRST bootstrap-select member with a colored
   accent (Husk's selection styling was all-dark). The rest is identical to
   Husk: checkmark-only selection indicator (no row background, no bold, no
   checkbox), stay-open-while-picking, comma-joined button text in selection
   order, outside-click/Escape close, selections persist.

Groat recreates that structure 1:1 with matching layout, tokens, typography,
and content (no ColorLib assets copied; the 50 state names are public
knowledge).

> NAMING NOTE: the ColorLib source name "Multiselect 17" is FORBIDDEN as the
> app name. **Groat** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or any
> TEMPLATES.md name (verified 2026-08-17: zero hits for `groat` across all
> namespaces; candidates Bran, Grist, Quern, Kernel, Meal, Millet, Rye were
> all rejected — Bran/Grist/Kernel/Meal are mill-floor terms that come AFTER
> the kernel leaves the husk stage, Millet/Rye are crop names rather than
> processed-grain stages, and Groat is the cleanest single-word fit: the
> hulled kernel that exists the moment the husk is gone — the natural next
> step after Husk's outer shell). Like Husk (16), the official preview page
> is reached via the `/theme/bootstrap/` prefix (see below) — the bare
> `/theme/multiselect-17/` URL returns a 9-byte "Not Found". Source slug +
> preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Multiselect 17" (marketing title: "Multi Select
  #7" — the page title tag; the h2 says "Multi-Select #7 (Limit to 7
  selection)" with a hyphen in "Multi-Select" and the limit hint in
  parentheses). Listed in TEMPLATES.md under **Bootstrap Multiselect (20)**
  (section header line 821; row at line 839 — `multiselect-17` appears
  exactly ONCE in TEMPLATES.md, no dup rows to mark). Series siblings
  already prepped: Multiselect 01 → Picker, 02 → Sifter, 03 → Winnow, 04 →
  Cull (Semantic UI); 05 → Glean, 06 → Garner, 07 → Reap, 08 → Pluck
  (Semantic UI variants); 09 → Thresh (Select2, DARK theme), 10 → Sickle
  (vanilla jQuery, light coral), 11 → Scythe (Select2, LIGHT theme, purple
  `#65587f`), 12 → Sheaf (Select2, LIGHT-GRAY page, coral `#f67280`), 13 →
  Sieve (Select2, LIGHT-GRAY page, teal `#29c7ac`, names theme, fully
  square), 14 → Fanner and 15 → Bolter (jQuery-MultiSelect v2.4.18,
  LIGHT-GRAY page, US-states theme, stay-open panel, no brand color), 16 →
  Husk (bootstrap-select v1.13.9, LIGHT-GRAY page, US-states theme,
  stay-open menu, all-dark selection styling — no accent color, NO selection
  limit). **Multiselect 17 is the SECOND member of the bootstrap-select
  (SnapAppointments v1.13.9) family and the ONLY one so far with BOTH a
  colored accent (`#8cba51` green) AND a `data-max-options` selection
  limit.** Like Multiselect 16, its preview URL carries the `/theme/bootstrap/`
  prefix: the default `https://preview.colorlib.com/theme/multiselect-17/`
  returns 404 (`Not Found`, 9 bytes); the REAL preview URL is
  `https://preview.colorlib.com/theme/bootstrap/multiselect-17/` (HTTP 200,
  18,491 bytes, 106 lines — tiny page, same shape as the 16 page).
- **Live preview DOM — REACHABLE (verified 2026-08-17 by direct fetch AND
  real-browser interaction incl. keyboard-driven selection, full mouse-event
  clicks, and computed-style extraction):** title tag "Multi Select #7".
  Stylesheets: `fonts/icomoon/style.css` (loaded, but NO icomoon glyphs
  appear in the DOM — do not ship it), `css/bootstrap-select.min.css` (the
  widget's base styles), `css/bootstrap.min.css` (Bootstrap 4.6 grid +
  form/button/dropdown components — gives the widget its INPUT-BOX look),
  and `css/style.css` (the custom token tail: page bg `#efefef`, Roboto
  stack, `7rem` content padding, `h2 { font-size: 20px }`, the GREEN accent
  rules `.dropdown-menu li.selected > a.selected { color: #8cba51 }` and
  `.check-mark { color: #8cba51; font-size: 12px; margin-top: 2px; position:
relative; }`). Fonts via cf-fonts @font-face blocks in the head: **Roboto
  300 + 400** (used by the page) plus Poppins and Source Serif Pro (loaded,
  NOT referenced by any style rule — ignore them). Scripts:
  `js/jquery-3.3.1.min.js`, `js/popper.min.js`, `js/bootstrap.min.js`
  (loaded, unused — no Bootstrap JS components on this page),
  `js/bootstrap-select.min.js` (the plugin, v1.13.9 header
  "SnapAppointments bootstrap-select"), and `js/main.js` (22 bytes — EMPTY:
  `$(function() { });` — the widget is initialized purely by the
  `selectpicker` class + `data-max-options="7"` on the `<select>`; no other
  options, so ALL behavior is bootstrap-select's DEFAULTS plus the limit:
  no search, no select-all, no title, values text format).
- **Live DOM structure (1:1):**
  - `div.content` (custom: `padding: 7rem 0` ≈ 112px vertical; body bg
    `#efefef`) → `h2.text-center` **"Multi-Select #7 (Limit to 7
    selection)"** (custom: `font-size: 20px`, Roboto, dark `#212529`, weight
    500 — live computed) → `div.container.text-left` (Bootstrap container,
    max-width 1140px) → `div.row.justify-content-center` → `div.col-md-5`
    (grid: 5/12 of the 1110px row; live computed width 475px at 1280px
    viewport — the widget column):
    - `select.selectpicker.form-control[multiple][data-max-options="7"]` —
      hidden by the plugin (`display: none`), containing all 50 US states as
      `<option value="AL">Alabama</option>` … `<option value="WY">Wyoming</option>`
      (alphabetical, 2-letter codes; full list below). The plugin replaces
      it at load with:
      - `div.dropdown.bootstrap-select.form-control` (the wrapper; live size
        **445 × 38px** — col-md-5 minus its 15px paddings;
        `form-control`-style height `calc(1.5em + 0.75rem + 2px)`):
        - `button.btn.btn-light.dropdown-toggle.form-control` (the visible
          control — the INPUT-BOX: live computed: width 100%, height 38px,
          `border: 1px solid #d3d9df` (rgb(211,217,223)),
          `border-radius: 4px` (0.25rem), background `#f8f9fa` resting
          (btn-light) / rgb(218,224,229) while the menu is open (`.show`
          active tint, Bootstrap's `#dae0e5`), color `#212529`, `font-size:
16px`, `font-weight: 400`, `padding: 6px 12px`, `text-align:
left`, `white-space: nowrap`, **no box-shadow**):
          - `span.filter-option > span.filter-option-inner > span.filter-option-inner-inner`
            — the display text: placeholder **"Nothing selected"** (color
            `#999` via `.bs-placeholder`) or the comma-joined selected names
            (`#212529` once the `.bs-placeholder` class is removed)
          - `::after` caret — Bootstrap 4's standard caret triangle
            (`border-top: 4px solid #212529`, live computed, dark
            `rgb(33,37,41)`), pushed to the right edge by the toggle's
            `justify-content: space-between` flex layout
        - `div.dropdown-menu` (shown when open: `.dropdown-menu.show`;
          live computed: `position: absolute`, `min-width: 100%` →
          **445px wide (SAME as the button — flush, no side offset)**,
          background `#fff`, **`border: 1px solid rgba(0,0,0,.15)`**,
          `border-radius: 4px`, `padding: 8px 0`, **`box-shadow: none`**,
          **`max-height: 373px` with an internal scrollbar** (the menu box
          itself computes `overflow: hidden`; the inner `div.inner` scrolls,
          `overflow-y: auto`; top edge sits directly below the button):
          - `div.inner.show` (static, borderless, padding 0 — the scroll
            box) → `ul` → 50 `li` rows, one per state, each:
            - `a.dropdown-item` (live computed: `padding: 4px 24px`,
              `font-size: 16px`, `font-weight: 400`, color `#212529`
              resting; Bootstrap hover → `#f8f9fa`; bootstrap-select
              keyboard-focus → `li.active a` gets Bootstrap's
              `.dropdown-item.active`: **background `#007bff`, white text**
              — live computed rgb(0,123,255)/rgb(255,255,255)):
              - `span.bs-ok-default.check-mark` — the checkmark glyph
                (bootstrap-select CSS: `.bs-ok-default:after` —
                `content:''; display:block; width:.5em; height:1em;
border-style:solid; border-width:0 .26em .26em 0;
transform:rotate(45deg)` — a rotated-square check drawn in
                the span's `color`; live computed ~6×12px at 16px font;
                **hidden (`display: none`) on unselected rows**,
                `display: inline-block; position: absolute; right: 15px;
top: 5px` on `li.selected` — the wrapper auto-adds
                `show-tick` for multiple selects; **GREEN `#8cba51`** per
                the custom style.css — NOT dark like Husk's)
              - `span.text` — the state name (on `li.selected > a.selected`
                it is **GREEN `#8cba51`** per the custom style.css — the
                only selected-row text change; no background, no bold)
  - **Footer:** the original has NO footer; per monorepo convention add a
    minimal attribution footer linking `https://www.componentdock.com/`
    ("Component Dock") so every shipped template carries the required link.
- **Design tokens (extracted from the preview's stylesheets + live computed
  styles, all verified 2026-08-17):**
  - **Page background:** `#efefef` (light gray) — declared in
    `css/style.css` and live-computed rgb(239,239,239).
  - **Fonts:** Roboto 400 (body/headings; 300 loaded but unused on the
    page). No serif, no Poppins in use. Load Roboto 300/400 via Google
    Fonts `<link>` in `index.html`.
  - **Heading:** h2 "Multi-Select #7 (Limit to 7 selection)" → recreate as
    **"Groat (Limit to 7 selections)"**: 20px, weight 500, color `#212529`,
    centered.
  - **Widget column:** `col-md-5` grid column (475px outer / 445px inner at
    ≥768px; full-width on mobile), centered on the page.
  - **Button:** btn-light resting bg `#f8f9fa` (reads white), open/active
    bg `#dae0e5` (rgb(218,224,229)), `1px solid #d3d9df` border,
    `border-radius: 4px`, height 38px, `padding: 6px 12px`, `font-size:
16px`, color `#212529` (values) / `#999` (placeholder "Nothing
    selected"), no shadow, dark `#212529` caret triangle at the right edge.
  - **Menu:** white `#fff`, `1px solid rgba(0,0,0,.15)` border,
    `border-radius: 4px`, **no box-shadow**, padding `8px 0`, same width as
    the button, `max-height: 373px` + internal scroll (inner div).
  - **Rows:** `padding: 4px 24px`, color `#212529`, font-size 16px, hover
    background `#f8f9fa` (Bootstrap default), keyboard-active background
    `#007bff` with white text (Bootstrap `.dropdown-item.active`).
    **Selected rows: GREEN text `#8cba51`, no background, no bold, no
    checkbox** — selection is shown by the green text + the green
    checkmark (`bs-ok-default` rotated square, `right: 15px; top: 5px`,
    color `#8cba51`).
  - **Selection limit:** **max 7 selections** (`data-max-options="7"`).
  - **Spacing:** page content padding `7rem 0` (112px) vertical.
- **Behaviors (live-verified 2026-08-17 on the real preview in a browser):
  **
  - **Open/close:** clicking the button toggles the menu (`aria-expanded`
    true + `.show` class, live-verified). Clicking anywhere outside closes
    it (live-verified by dispatching a click on the heading); pressing
    **Escape** closes it (live-verified: `aria-expanded` flipped to false).
    Re-clicking the button closes it too. Only the default bootstrap-select
    behavior — no custom JS on this page (`main.js` is empty).
  - **Stay-open select:** clicking a state row toggles its selection
    (`li.selected` + visible green checkmark) and **the menu STAYS OPEN**
    (live-verified: after picking Alabama then Alaska, `aria-expanded` was
    still true and the menu remained visible) — the same behavior as Husk/
    Fanner/Bolter and OPPOSITE to the Select2 members (Scythe/Sheaf/Sieve)
    which close on every pick.
  - **Deselect:** clicking a selected row unselects it (checkmark hidden,
    name removed from the button text — live-verified: deselecting Alabama
    from a 7-state pick changed the text to the remaining 6) and the menu
    stays open.
  - **Button text:** placeholder **"Nothing selected"** (`#999`) with zero
    picks; with picks, the comma-joined names in **selection order**
    (live-verified: "Alabama, Alaska" after picking both; the official
    screenshot shows "Alaska, California, Illinois, Maine"). Because this
    demo sets no options, there is **NO "N selected" counter** and **NO
    title** — the raw comma-joined list is shown.
  - **7-selection limit (THE signature behavior):** with `data-max-options="7"`
    on the select, picking a 7th state works normally and the button shows
    all 7 names. Attempting an 8th pick is **rejected**: live-verified via
    (a) keyboard — ArrowDown to the 8th row + Enter: the row did NOT gain
    `li.selected`, the selected count stayed 7, and the button text remained
    the 7 names; and (b) a full mouse mousedown/mouseup/click sequence on
    the 8th row: the row briefly gained `selected` but the button text
    stayed at 7 names and a transient **"Limit reached (7 items max)"**
    message appeared (bootstrap-select's default `maxOptionsText`, rendered
    as a floating notice). Deselecting below 7 re-enables picking.
  - **No search / no select-all:** this member has NEITHER the
    jQuery-MultiSelect search box NOR the Select All link NOR an actions box
    — the plain bootstrap-select default menu with a scrollable list.
  - **Persistence:** selections persist across close/reopen cycles
    (live-verified: after Escape-close, reopening showed all 6 prior picks
    still selected with green checkmarks).
  - **Live computed values captured:** body bg rgb(239,239,239); h2 20px
    rgb(33,37,41) weight 500; content padding 112px 0; wrapper/button
    445×38px; button border rgb(211,217,223) = `#d3d9df`, radius 4px,
    padding 6px 12px; menu 445×373px (max), `border: 1px solid
rgba(0,0,0,0.15)`, radius 4px, shadow none; item padding 4px 24px,
    resting color rgb(33,37,41); selected text color rgb(140,186,81) =
    `#8cba51`; checkmark color rgb(140,186,81) `#8cba51`, right 15px top
    5px, ~6×12px; keyboard-active row bg rgb(0,123,255) = `#007bff` with
    rgb(255,255,255) text; caret `::after` border-top 4px solid
    rgb(33,37,41).
- **Screenshot (`multiselect-17.jpg`, 1200×972 AVIF, browser-verified
  2026-08-17):** LIGHT-GRAY page, centered dark 20px "Multi-Select #7
  (Limit to 7 selection)" heading, one white **bordered input-style** widget
  button reading **"Alaska, California, Illinois, Maine"** with a dark
  down-caret on the right, and the OPEN white dropdown below: a single
  scrollable column of states with **four selected rows (Alaska,
  California, Illinois, Maine) marked by a GREEN checkmark on the right edge
  AND GREEN (light olive) row text**; all other rows plain black text with
  no checkmarks; the mouse cursor hovers over "Mississippi" on a light
  highlight. No search box, no select-all, no row backgrounds. Matches the
  live widget 1:1.

## Design tokens

| Token                 | Value                         | Notes                                                                               |
| --------------------- | ----------------------------- | ----------------------------------------------------------------------------------- |
| `--color-page`        | `#efefef`                     | Light-gray page background                                                          |
| `--color-ink`         | `#212529`                     | Heading, unselected row text, values, caret                                         |
| `--color-muted`       | `#999`                        | Placeholder "Nothing selected" (`.bs-placeholder`)                                  |
| `--color-field`       | `#f8f9fa`                     | Button resting bg (btn-light; reads white); menu bg `#fff`                          |
| `--color-field-open`  | `#dae0e5`                     | Button bg while the menu is open (`.show` tint)                                     |
| `--color-border`      | `#d3d9df`                     | Button border (Bootstrap input family; ~`#ced4da`)                                  |
| `--color-menu-border` | `rgba(0,0,0,.15)`             | Menu border (1px)                                                                   |
| `--color-hover`       | `#f8f9fa`                     | Row hover background (Bootstrap default)                                            |
| `--color-active`      | `#007bff`                     | Keyboard-active row bg (Bootstrap `.dropdown-item.active`) — white text             |
| `--color-accent`      | `#8cba51`                     | **Moss-green accent: selected row TEXT + checkmark (this member's signature)        |
| `--font-body`         | Roboto, sans-serif            | Body + headings (300/400)                                                           |
| `--radius-field`      | `4px` (0.25rem)               | Button + menu corner radius                                                         |
| `--h-field`           | `38px`                        | Button height (`calc(1.5em + .75rem + 2px)`)                                        |
| `--shadow-field`      | none                          | NO button shadow, NO menu shadow                                                    |
| `--menu-max-h`        | `373px`                       | Menu max height with internal scroll                                                |
| `--row-pad`           | `4px 24px`                    | Dropdown item padding                                                               |
| `--content-pad-y`     | `7rem` (~112px)               | Page vertical padding                                                               |
| `--max-selections`    | `7`                           | `data-max-options` hard limit — reject 8th+ picks                                   |
| `--limit-message`     | "Limit reached (7 items max)" | Transient notice on over-limit attempts (bootstrap-select default `maxOptionsText`) |

## Requirements

### Requirement: Page layout

The system SHALL render a single-page centered layout on a light-gray
background with a heading and one multiselect widget column.

#### Scenario: Page shell

- **GIVEN** the Groat app is rendered
- **THEN** the page background SHALL be `#efefef`
- **AND** the page font SHALL be Roboto (300/400, loaded from Google Fonts)
- **AND** the content area SHALL have `7rem` (112px) vertical padding

#### Scenario: Centered heading

- **GIVEN** the Groat app is rendered
- **THEN** a centered h2 heading reading **"Groat (Limit to 7 selections)"**
  SHALL render at 20px, weight 500, color `#212529`
- **AND** the heading SHALL sit directly above the widget column

#### Scenario: Widget column

- **GIVEN** the Groat app is rendered
- **THEN** the multiselect widget SHALL render in a centered column
  equivalent to Bootstrap's `col-md-5` (≈445px content width at desktop,
  475px with grid padding; full width on small screens)

### Requirement: State list

The system SHALL offer all 50 US states as selectable rows in a single
alphabetical column.

#### Scenario: All 50 states render

- **GIVEN** the menu is open
- **THEN** all 50 US states SHALL render as rows in a single column in
  alphabetical order: Alabama, Alaska, Arizona, Arkansas, California,
  Colorado, Connecticut, Delaware, Florida, Georgia, Hawaii, Idaho, Illinois,
  Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland,
  Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,
  Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North
  Carolina, North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode
  Island, South Carolina, South Dakota, Tennessee, Texas, Utah, Vermont,
  Virginia, Washington, West Virginia, Wisconsin, Wyoming
- **AND** each row SHALL show the state name at 16px in `#212529` with
  `4px 24px` padding

#### Scenario: Menu is a scrollable dropdown

- **GIVEN** the menu is open
- **THEN** the menu SHALL be a white box with a `1px solid
rgba(0,0,0,.15)` border, `4px` corner radius, and NO box shadow
- **AND** the menu width SHALL equal the widget button width
- **AND** the menu SHALL cap at `373px` height with an internal vertical
  scrollbar for the remaining rows

### Requirement: Toggle open and close

The system SHALL open and close the dropdown menu on demand.

#### Scenario: Open and close by clicking the button

- **GIVEN** the Groat app is rendered
- **WHEN** the user clicks the widget button
- **THEN** the menu SHALL open (`aria-expanded` true) directly below the
  button
- **AND** clicking the button again SHALL close the menu

#### Scenario: Close by outside click and Escape

- **GIVEN** the menu is open
- **WHEN** the user clicks anywhere outside the widget
- **THEN** the menu SHALL close
- **AND** when the user instead presses the Escape key
- **THEN** the menu SHALL close
- **AND** any selections made before closing SHALL remain selected

### Requirement: Selecting states

The system SHALL let the user select and deselect states without closing
the menu.

#### Scenario: Selecting a state keeps the menu open

- **GIVEN** the menu is open
- **WHEN** the user clicks "Alabama"
- **THEN** the Alabama row SHALL show a green checkmark (rotated square,
  `#8cba51`, pinned to the right edge of the row)
- **AND** the Alabama row text SHALL turn green `#8cba51`
- **AND** no background or bold SHALL be applied to the selected row
- **AND** the menu SHALL STAY OPEN
- **AND** the button text SHALL read "Alabama"

#### Scenario: Selecting multiple states joins names in selection order

- **GIVEN** the menu is open
- **WHEN** the user clicks "Alabama" and then "Alaska"
- **THEN** the button text SHALL read "Alabama, Alaska" (comma-joined,
  selection order)

#### Scenario: Deselecting a state

- **GIVEN** Alabama and Alaska are selected
- **WHEN** the user clicks "Alabama" again
- **THEN** the Alabama row SHALL lose its checkmark and turn back to dark
  `#212529`
- **AND** the button text SHALL read "Alaska"
- **AND** the menu SHALL STAY OPEN

#### Scenario: No search and no select-all

- **GIVEN** the menu is open
- **THEN** the menu SHALL NOT contain a search box, a select-all control,
  or an actions box (this member of the series has none)

### Requirement: Seven-selection limit

The system SHALL cap selections at 7 and reject further picks while at the
limit, mirroring the original's `data-max-options="7"`.

#### Scenario: The seventh pick is allowed

- **GIVEN** the user has selected 6 states
- **WHEN** the user clicks a 7th state
- **THEN** the 7th state SHALL become selected
- **AND** the button text SHALL show all 7 names in selection order

#### Scenario: The eighth pick is rejected with a limit notice

- **GIVEN** the user has selected exactly 7 states
- **WHEN** the user clicks or keyboard-selects an 8th state
- **THEN** the 8th state SHALL NOT be added to the selection
- **AND** the button text SHALL remain the 7 names
- **AND** a transient notice reading **"Limit reached (7 items max)"**
  SHALL appear
- **AND** the menu SHALL STAY OPEN (matching the original)

#### Scenario: Deselecting below the limit re-enables picking

- **GIVEN** the user has 7 states selected
- **WHEN** the user deselects one state
- **THEN** the remaining 6 selections SHALL be shown in the button text
- **AND** picking a new 7th state SHALL be allowed again

#### Scenario: The limit notice never shows under the limit

- **GIVEN** the user has fewer than 7 states selected
- **WHEN** the user picks another state
- **THEN** the pick SHALL succeed
- **AND** NO "Limit reached" notice SHALL appear

### Requirement: Placeholder text

The system SHALL show a placeholder while nothing is selected.

#### Scenario: Placeholder when empty

- **GIVEN** the Groat app is rendered with no state selected
- **THEN** the widget button SHALL read **"Nothing selected"** in gray
  `#999`
- **AND** the caret arrow SHALL still be visible on the right edge

### Requirement: Component Dock footer

The system SHALL render the mandatory footer.

#### Scenario: Footer links Component Dock

- **GIVEN** the Groat app is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a minimal footer SHALL link to
  `https://www.componentdock.com/` (branded "Component Dock")
- **AND** no other external/attribution links SHALL appear in the footer

### Requirement: Accessibility

The widget SHALL expose accessible semantics equivalent to the original
native `<select multiple>` it replaces.

#### Scenario: Button semantics

- **GIVEN** the Groat app is rendered
- **THEN** the widget button SHALL be a real `<button>` with an
  `aria-haspopup="listbox"` attribute and a dynamically updated
  `aria-expanded` attribute
- **AND** the menu SHALL be reachable and operable with the keyboard
  (arrow keys move between options, Enter toggles a pick, Escape closes)
- **AND** selected options SHALL expose `aria-selected` state

## Verification checklist

- [ ] `npm run verify:app groat` passes (typecheck + lint + knip + fallow + vitest 100% coverage + build)
- [ ] Page bg is `#efefef` (light gray) with `7rem` (112px) vertical padding
- [ ] Centered h2 "Groat (Limit to 7 selections)" (20px, weight 500,
      `#212529`, Roboto — Roboto loaded via Google Fonts link)
- [ ] Centered widget column ≈445px wide (Bootstrap `col-md-5` equivalent);
      widget fills the column width
- [ ] Button is the INPUT-BOX look: btn-light bg `#f8f9fa` (open `#dae0e5`),
      `1px solid #d3d9df`, 4px radius, 38px tall, 16px text,
      `padding: 6px 12px`, NO shadow, dark `#212529` caret at the right edge
- [ ] Placeholder **"Nothing selected"** (`#999`) → comma-joined names
      (`#212529`, selection order) as states are picked
- [ ] Menu: white, `1px solid rgba(0,0,0,.15)` border, 4px radius, NO
      shadow, same width as the button, `max-height: 373px` + internal
      scroll; sits flush below the button
- [ ] 50 states in ONE alphabetical column, `padding: 4px 24px`, 16px,
      hover `#f8f9fa`, keyboard-active `#007bff` bg + white text
- [ ] **Selected rows: GREEN `#8cba51` text + GREEN right-edge checkmark**
      (no background, no bold, no checkbox); menu STAYS OPEN; deselect
      removes both and menu stays open
- [ ] **Max 7 selections: the 8th pick is rejected, button text stays at 7
      names, transient "Limit reached (7 items max)" notice shows; deselect
      re-enables picking**
- [ ] NO search box, NO select-all, NO actions box anywhere in the menu
- [ ] Outside click and Escape close the menu; selections persist
- [ ] Arrow-key navigation + Enter toggle + Escape close all work
- [ ] Footer links https://www.componentdock.com/ ("Component Dock")
- [ ] No ColorLib string in any app file; provenance only in this spec /
      TEMPLATES.md / PR
- [ ] `public/CNAME` = `groat.free.componentdock.com`,
      `homepage` = `https://groat.free.componentdock.com`, root
      `package-lock.json` registers the workspace
- [ ] README status regenerated via `npm run readme:status` after merge
