# Template: Chaff (Multiselect Dropdown)

## Purpose

Chaff is a single-page multiselect-dropdown component demo in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Multiselect 18" free template (source:
https://colorlib.com/wp/template/multiselect-18/), built under a DIFFERENT
name (**Chaff** — the eighteenth of the selection/separating-themed names for
this series, continuing the grain-processing chain after Husk (16, the outer
shell) and Groat (17, the hulled kernel); chaff is the dry husk matter
separated (winnowed) out of the grain — the literal material the earlier
series names separate, and a fitting name for a demo whose whole point is
SEPARATING options into limited GROUPS), with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The original is a minimal, centered demo page (Bootstrap 4 grid + the
**bootstrap-select v1.13.9 plugin by SnapAppointments** + jQuery 3.3.1 +
Popper) with the same layout family as its siblings "Multiselect 16" (→ Husk)
and "Multiselect 17" (→ Groat): a `div.content` (padding 7rem 0) on a
**light-gray `#efefef` page** with a centered `h2` reading **"Multi-Select #8
(Limit selection on groups)"** and a SINGLE multi-select widget in a centered
`col-md-5` column (445px content width at ≥1200px viewport). The widget is a
**bootstrap-select multiple** rendered as a _bordered input-style button_
(btn-light `#f8f9fa` resting, **1px `#d3d9df` border, 4px radius, 38px tall,
16px Roboto text**) showing the placeholder **"Nothing selected"** (gray
`#999`) or the comma-joined list of selected states (dark `#212529`, in
selection order); clicking the button toggles a **floating white dropdown
menu** (1px `rgba(0,0,0,.15)` border, 4px radius, **NO shadow**, same 445px
width as the button, `max-height: 373px` with an internal scrollbar).

**WHAT MAKES CHAFF DIFFERENT FROM GROAT (17) AND HUSK (16):**

1. **The 50 US states are organized into FOUR optgroups with PER-GROUP
   selection limits** (`data-max-options` on each `<optgroup>`, NOT on the
   select): **Group A (Limit 2)** — 4 states (Alabama, Alaska, Arizona,
   Arkansas); **Group B (Limit 4)** — 11 states (California…Iowa); **Group C
   (Limit 7)** — 13 states (Kansas…Nevada); **Group D (Limit 4)** — 22 states
   (New Hampshire…Wyoming). Selecting within a group is capped at that
   group's limit: once a group has its limit of picks, any further pick in
   THAT group is rejected (other groups are unaffected). Deselecting inside
   the group frees its quota. Live-verified 2026-08-18: with Alabama + Alaska
   selected in Group A (limit 2), clicking Arizona was rejected and the
   button text stayed "Alabama, Alaska"; after deselecting Alabama, clicking
   Arizona succeeded ("Alaska, Arizona").
2. **The dropdown shows group structure: four `dropdown-header` rows**
   ("Group A (Limit 2)", "Group B (Limit 4)", "Group C (Limit 7)", "Group D
   (Limit 4)" — gray `#6c757d`, padding 8px 24px) with `dropdown-divider`
   rows between groups, each followed by its member states in alphabetical
   order.
3. **The green moss accent `#8cba51`** (selected row TEXT + checkmark — same
   custom tail as Groat; Husk had no accent). This is the THIRD
   bootstrap-select member (after Husk at 16 and Groat at 17) and the only
   one with BOTH grouped options AND per-group limits.

Chaff recreates that structure 1:1 with matching layout, tokens, typography,
and content (no ColorLib assets copied; the 50 state names are public
knowledge).

> NAMING NOTE: the ColorLib source name "Multiselect 18" is FORBIDDEN as the
> app name. **Chaff** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or any
> TEMPLATES.md name (verified 2026-08-18: zero hits for `chaff` across all
> namespaces; candidate "Meal" was rejected — a TEMPLATES.md ColorLib item
> named Meal exists; Bran/Grist/Kernel were already ruled out by the Groat
> prep as mill-floor terms; Chaff is the cleanest fit: the winnowed husks
> separated from the grain, mirroring this demo's group-separated
> selections). Like Husk and Groat, the official preview page is reached via
> the `/theme/bootstrap/` prefix (see below) — the bare
> `/theme/multiselect-18/` URL returns a 9-byte "Not Found". Source slug +
> preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Multiselect 18" (marketing title in the page title
  tag: "Multi Select #8"; the h2 reads **"Multi-Select #8 (Limit selection on
  groups)"**). Listed in TEMPLATES.md under **Bootstrap Multiselect (20)**
  (section header line 821; row at line 840 — `multiselect-18` appears
  exactly ONCE in TEMPLATES.md, no dup rows to mark). Series siblings already
  prepped: 01 → Picker, 02 → Sifter, 03 → Winnow, 04 → Cull (Semantic UI);
  05 → Glean, 06 → Garner, 07 → Reap, 08 → Pluck (Semantic UI variants);
  09 → Thresh (Select2, DARK), 10 → Sickle (vanilla jQuery, light coral),
  11 → Scythe (Select2 LIGHT, purple `#65587f`), 12 → Sheaf (Select2
  LIGHT-GRAY, coral `#f67280`), 13 → Sieve (Select2 LIGHT-GRAY, teal
  `#29c7ac`, square), 14 → Fanner and 15 → Bolter (jQuery-MultiSelect
  v2.4.18), 16 → Husk (bootstrap-select v1.13.9, all-dark selection styling,
  no limit), **17 → Groat (bootstrap-select, green `#8cba51` accent +
  SELECT-level `data-max-options="7"` limit)**. **Multiselect 18 is the
  THIRD bootstrap-select member: Groat's green accent plus GROUPED options
  with PER-GROUP limits.** Like 16/17, the preview lives under the
  `/theme/bootstrap/` prefix: `https://preview.colorlib.com/theme/multiselect-18/`
  returns 404 (`Not Found`, 9 bytes); the REAL preview is
  `https://preview.colorlib.com/theme/bootstrap/multiselect-18/` (HTTP 200,
  18,825 bytes, 117 lines — tiny page).
- **Live preview DOM — REACHABLE (verified 2026-08-18 by direct fetch AND
  real-browser interaction incl. live group-limit click tests and
  computed-style extraction):** title tag "Multi Select #8". Stylesheets:
  `fonts/icomoon/style.css` (loaded, but NO icomoon glyphs appear in the DOM —
  do not ship it), `css/bootstrap-select.min.css` (widget base styles),
  `css/bootstrap.min.css` (Bootstrap 4.6 grid + form/button/dropdown
  components — gives the widget its INPUT-BOX look), and `css/style.css` (the
  per-demo token tail, 932 bytes — see tokens below). Fonts via cf-fonts
  @font-face blocks in the head: **Roboto 300 + 400** (used; Poppins and
  Source Serif Pro are loaded but NOT referenced by any style rule — ignore
  them). Scripts: `js/jquery-3.3.1.min.js`, `js/popper.min.js`,
  `js/bootstrap.min.js` (loaded, unused — no Bootstrap JS components here),
  `js/bootstrap-select.min.js` (the plugin, v1.13.9 header "SnapAppointments
  bootstrap-select"), and `js/main.js` (EMPTY: `$(function() { });` — the
  widget is initialized purely by the `selectpicker` class + the optgroup
  `data-max-options` attributes; ALL behavior is bootstrap-select's defaults:
  no search, no select-all, no title).
- **Live DOM structure (1:1):**
  - `div.content` (custom: `padding: 7rem 0` ≈ 112px vertical; body bg
    `#efefef`) → `h2.text-center` **"Multi-Select #8 (Limit selection on
    groups)"** (custom: `font-size: 20px`, Roboto, dark `#212529`, weight
    500 — live computed) → `div.container.text-left` (Bootstrap container,
    max-width 1140px) → `div.row.justify-content-center` → `div.col-md-5`
    (grid: 5/12 of the 1110px row; live computed width 475px at 1280px
    viewport — the widget column):
    - `select.selectpicker.form-control[multiple]` — hidden by the plugin
      (`display: none`), containing **four `<optgroup>` blocks covering all
      50 US states as `<option value="XX">Name</option>`**:
      1. `<optgroup label="Group A (Limit 2)" data-max-options="2">` —
         Alabama (AL), Alaska (AK), Arizona (AZ), Arkansas (AR).
      2. `<optgroup label="Group B (Limit 4)" data-max-options="4">` —
         California (CA), Colorado (CO), Connecticut (CT), Delaware (DE),
         Florida (FL), Georgia (GA), Hawaii (HI), Idaho (ID), Illinois (IL),
         Indiana (IN), Iowa (IA).
      3. `<optgroup label="Group C (Limit 7)" data-max-options="7">` —
         Kansas (KS), Kentucky (KY), Louisiana (LA), Maine (ME), Maryland
         (MD), Massachusetts (MA), Michigan (MI), Minnesota (MN),
         Mississippi (MS), Missouri (MO), Montana (MT), Nebraska (NE),
         Nevada (NV).
      4. `<optgroup label="Group D (Limit 4)" data-max-options="4">` —
         New Hampshire (NH), New Jersey (NJ), New Mexico (NM), New York
         (NY), North Carolina (NC), North Dakota (ND), Ohio (OH), Oklahoma
         (OK), Oregon (OR), Pennsylvania (PA), Rhode Island (RI), South
         Carolina (SC), South Dakota (SD), Tennessee (TN), Texas (TX), Utah
         (UT), Vermont (VT), Virginia (VA), Washington (WA), West Virginia
         (WV), Wisconsin (WI), Wyoming (WY).
    - The plugin replaces the select at load with (same skeleton as
      Husk/Groat):
      - `div.dropdown.bootstrap-select.form-control` (the wrapper; live size
        **445 × 38px** — col-md-5 minus its 15px paddings):
        - `button.btn.btn-light.dropdown-toggle.form-control` (the visible
          control — the INPUT-BOX: live computed: width 100%, height 38px,
          `border: 1px solid #d3d9df` (rgb(211,217,223)),
          `border-radius: 4px` (0.25rem), background `#f8f9fa` resting
          (btn-light) / rgb(218,224,229) while the menu is open (`.show`
          active tint, Bootstrap `#dae0e5`), color `#212529`, `font-size:
16px`, `font-weight: 400`, `padding: 6px 12px`, `text-align:
left`, `white-space: nowrap`, **no box-shadow**):
          - `span.filter-option` — the display text: placeholder
            **"Nothing selected"** (color `#999` via `.bs-placeholder`) or
            the comma-joined selected names (`#212529`, selection order,
            across ALL groups — groups are NOT marked in the button text).
          - `::after` caret — Bootstrap 4's standard caret triangle
            (`border-top: 4px solid #212529`, live computed), pushed to the
            right edge by the toggle's `justify-content: space-between`
            flex layout.
        - `div.dropdown-menu` (open: `.dropdown-menu.show`; live computed:
          `position: absolute`, `min-width: 100%` → **445px wide (SAME as
          the button — flush)**, background `#fff`, **`border: 1px solid
rgba(0,0,0,.15)`**, `border-radius: 4px`, `padding: 8px 0`,
          **`box-shadow: none`**, **`max-height: 373px` + internal
          scrollbar** (the `div.inner` scrolls, `overflow-y: auto`):
          - `div.inner.show` (static, borderless, padding 0) → `ul` → **57
            `li` rows total**: 4 × group header + 50 × state + 3 × divider:
            - Group headers: `li.dropdown-header.optgroup-N` —
              **"Group A (Limit 2)"** / "Group B (Limit 4)" / "Group C
              (Limit 7)" / "Group D (Limit 4)" — live computed: color
              `#6c757d` (Bootstrap gray), `padding: 8px 24px`, 14px
              (Bootstrap `.dropdown-header` default), no background.
            - Dividers: `li.dropdown-divider.optgroup-Ndiv` — Bootstrap's
              1px `#e9ecef` divider row between groups.
            - State rows: `li.optgroup-N` → `a.opt.dropdown-item`
              (live computed: `padding: 4px 24px`, `font-size: 16px`,
              `font-weight: 400`, color `#212529` resting; Bootstrap hover →
              `#f8f9fa`; bootstrap-select keyboard-focus → `li.active a`
              gets Bootstrap's `.dropdown-item.active`: background
              `#007bff`, white text):
              - `span.bs-ok-default.check-mark` — the checkmark glyph
                (bootstrap-select CSS `.bs-ok-default:after` =
                `content:''; display:block; width:.5em; height:1em;
border-style:solid; border-width:0 .26em .26em 0;
transform:rotate(45deg)` — a rotated-square check drawn in
                the span's `color`, ~6×12px at 16px font; **hidden on
                unselected rows**, `display: inline-block; position:
absolute; right: 15px; top: 5px` on selected rows;
                **GREEN `#8cba51`** per custom style.css).
              - `span.text` — the state name (on selected rows **GREEN
                `#8cba51`** per the custom style.css — the only selected-row
                change; no background, no bold, no checkbox).
  - **Footer:** the original has NO footer; per monorepo convention add a
    minimal attribution footer linking `https://www.componentdock.com/`
    ("Component Dock") so every shipped template carries the required link.
- **Design tokens (all verified 2026-08-18 from the live stylesheets + live
  computed styles):**
  - **Page background:** `#efefef` (light gray) — `css/style.css` body rule,
    live-computed rgb(239,239,239).
  - **Fonts:** Roboto 400 (body/headings; 300 loaded but unused on the
    page). Load Roboto 300/400 via Google Fonts `<link>` in `index.html`.
  - **Heading:** h2 **"Multi-Select #8 (Limit selection on groups)"** →
    recreate as **"Chaff (Limit selection on groups)"**: 20px, weight 500,
    color `#212529`, centered.
  - **Widget column:** `col-md-5` (475px outer / 445px inner at ≥768px;
    full-width on mobile), centered.
  - **Button:** btn-light resting bg `#f8f9fa`, open/active bg `#dae0e5`,
    `1px solid #d3d9df` border, `border-radius: 4px`, height 38px,
    `padding: 6px 12px`, `font-size: 16px`, color `#212529` (values) / `#999`
    (placeholder "Nothing selected"), no shadow, dark `#212529` caret
    triangle at the right edge.
  - **Menu:** white `#fff`, `1px solid rgba(0,0,0,.15)` border,
    `border-radius: 4px`, **no box-shadow**, padding `8px 0`, same width as
    the button, `max-height: 373px` + internal scroll (inner div).
  - **Group headers:** `dropdown-header` rows — color `#6c757d`, padding
    `8px 24px`, Bootstrap 14px; separators `dropdown-divider` (1px
    `#e9ecef`) between groups.
  - **Rows:** `padding: 4px 24px`, color `#212529`, font-size 16px, hover
    background `#f8f9fa`, keyboard-active background `#007bff` with white
    text. **Selected rows: GREEN text `#8cba51`, no background, no bold, no
    checkbox** — selection shown by green text + green checkmark
    (`bs-ok-default` rotated square, `right: 15px; top: 5px`, color
    `#8cba51`).
  - **Group limits:** A = 2, B = 4, C = 7, D = 4 (optgroup
    `data-max-options`). NO select-level limit.
  - **Spacing:** page content padding `7rem 0` (112px) vertical.
- **Behaviors (live-verified 2026-08-18 on the real preview in a browser):**
  - **Open/close:** clicking the button toggles the menu (`aria-expanded`
    true + `.show`); clicking outside closes it; Escape closes it;
    re-clicking the button closes it. Only default bootstrap-select
    behavior — no custom JS (`main.js` empty).
  - **Stay-open select:** clicking a state row toggles its selection
    (`li.selected` + visible green checkmark) and **the menu STAYS OPEN**.
  - **Deselect:** clicking a selected row unselects it (checkmark hidden,
    name removed from the button text) and the menu stays open.
  - **Button text:** placeholder **"Nothing selected"** (`#999`) with zero
    picks; with picks, comma-joined names in **selection order** across all
    groups (live-verified: "Alabama, Alaska"; then after deselect +
    reselect, "Alaska, Arizona").
  - **Group limits (THE signature behavior):** within each group, picks are
    capped at the group's `data-max-options` (A:2, B:4, C:7, D:4).
    Live-verified: with Alabama + Alaska selected in Group A (limit 2), a
    click on Arizona was **rejected** — button text stayed "Alabama, Alaska"
    and Arizona did NOT gain `li.selected`. Other groups' limits are
    independent (B/C/D keep accepting picks up to their own limits).
    Deselecting inside a group below its limit re-enables picking in that
    group (live-verified: deselecting Alabama then re-clicking Arizona
    succeeded → "Alaska, Arizona"). bootstrap-select also renders its
    default `maxOptionsText` notice on over-limit attempts (family default;
    the Groat prep captured "Limit reached (7 items max)" for the
    select-level limit — implement the rejection as the hard requirement and
    an optional transient notice/aria-live hint with the group's limit).
  - **No search / no select-all:** NO search box, NO Select All, NO actions
    box — the plain bootstrap-select default menu with a scrollable list.
  - **Persistence:** selections persist across close/reopen cycles.
  - **Live computed values captured:** body bg rgb(239,239,239); h2 20px
    rgb(33,37,41) weight 500; content padding 112px 0; wrapper/button
    445×38px; button border rgb(211,217,223) = `#d3d9df`, radius 4px,
    padding 6px 12px; menu 445×373px (max), `border: 1px solid
rgba(0,0,0,0.15)`, radius 4px, shadow none; menu rows 57 total (4
    headers + 50 states + 3 dividers); header color rgb(108,117,125) =
    `#6c757d`, padding 8px 24px; item padding 4px 24px, resting color
    rgb(33,37,41); selected text rgb(140,186,81) = `#8cba51`; checkmark
    color `#8cba51`, right 15px top 5px, ~6×12px; keyboard-active row bg
    rgb(0,123,255) = `#007bff` with white text; caret `::after` border-top
    4px solid rgb(33,37,41).
- **Screenshot (`multiselect-18.jpg`, 1200×972 AVIF, browser-verified
  2026-08-18):** LIGHT-GRAY page, centered dark 20px "Multi-Select #8
  (Limit selection on groups)" heading, the light-gray input-style widget
  button reading a comma-joined selected list
  ("Alaska, Arizona, Colorado, Connecticut, Delaware, Florida, ...") with a
  dark down-caret on the right, and the OPEN white dropdown below showing
  FOUR groups: headers "Group A (Limit 2)", "Group B (Limit 4)", "Group C
  (Limit 7)" and (cut off) "Group D (Limit 4)", with selected rows in each
  group (Alaska + Arizona in A; Colorado, Connecticut, Delaware, Florida in
  B — exactly at B's 4 limit; seven states in C — exactly at C's 7 limit)
  marked by a GREEN checkmark on the right edge AND GREEN (light olive) row
  text; unselected rows plain black; no search box, no select-all. Matches
  the live widget 1:1.

## Design tokens

| Token                  | Value                 | Notes                                                                          |
| ---------------------- | --------------------- | ------------------------------------------------------------------------------ |
| `--color-page`         | `#efefef`             | Light-gray page background                                                     |
| `--color-ink`          | `#212529`             | Heading, unselected row text, values, caret                                    |
| `--color-muted`        | `#999`                | Placeholder "Nothing selected" (`.bs-placeholder`)                             |
| `--color-field`        | `#f8f9fa`             | Button resting bg (btn-light); menu bg `#fff`                                  |
| `--color-field-open`   | `#dae0e5`             | Button bg while the menu is open (`.show` tint)                                |
| `--color-border`       | `#d3d9df`             | Button border (Bootstrap input family)                                         |
| `--color-menu-border`  | `rgba(0,0,0,.15)`     | Menu border (1px)                                                              |
| `--color-hover`        | `#f8f9fa`             | Row hover background (Bootstrap default)                                       |
| `--color-active`       | `#007bff`             | Keyboard-active row bg (Bootstrap `.dropdown-item.active`) — white text        |
| `--color-accent`       | `#8cba51`             | **Moss-green accent: selected row TEXT + checkmark (this member's signature)** |
| `--color-group-header` | `#6c757d`             | Group header (dropdown-header) text                                            |
| `--color-divider`      | `#e9ecef`             | Divider row color between groups                                               |
| `--font-body`          | Roboto, sans-serif    | Body + headings (300/400 via Google Fonts)                                     |
| `--radius-field`       | `4px` (0.25rem)       | Button + menu corner radius                                                    |
| `--h-field`            | `38px`                | Button height (`calc(1.5em + .75rem + 2px)`)                                   |
| `--shadow-field`       | none                  | NO button shadow, NO menu shadow                                               |
| `--menu-max-h`         | `373px`               | Menu max height with internal scroll                                           |
| `--row-pad`            | `4px 24px`            | Dropdown item padding                                                          |
| `--header-pad`         | `8px 24px`            | Group header (dropdown-header) padding                                         |
| `--content-pad-y`      | `7rem` (~112px)       | Page vertical padding                                                          |
| `--group-limits`       | A:2 · B:4 · C:7 · D:4 | Per-group `data-max-options` caps — reject picks beyond each group's limit     |

## Requirements

### Requirement: Page layout

The system SHALL render a single-page centered layout on a light-gray
background with a heading and one multiselect widget column.

#### Scenario: Page shell

- **GIVEN** the Chaff app is rendered
- **THEN** the page background SHALL be `#efefef`
- **AND** the page font SHALL be Roboto (300/400, loaded from Google Fonts)
- **AND** the content area SHALL have `7rem` (112px) vertical padding

#### Scenario: Centered heading

- **GIVEN** the Chaff app is rendered
- **THEN** a centered h2 heading reading **"Chaff (Limit selection on
  groups)"** SHALL render at 20px, weight 500, color `#212529`
- **AND** the heading SHALL sit directly above the widget column

#### Scenario: Widget column

- **GIVEN** the Chaff app is rendered
- **THEN** the multiselect widget SHALL render in a centered column
  equivalent to Bootstrap's `col-md-5` (≈445px content width at desktop,
  full width on small screens)

### Requirement: Grouped state list

The system SHALL offer all 50 US states grouped into four optgroups with
headers and dividers, replicating the original's optgroup structure.

#### Scenario: Four groups with headers

- **GIVEN** the menu is open
- **THEN** the menu SHALL show four group headers in order reading
  **"Group A (Limit 2)"**, **"Group B (Limit 4)"**, **"Group C (Limit 7)"**,
  and **"Group D (Limit 4)"** (gray `#6c757d`, padding `8px 24px`)
- **AND** a divider SHALL separate each group from the next

#### Scenario: Group membership

- **GIVEN** the menu is open
- **THEN** Group A SHALL list Alabama, Alaska, Arizona, Arkansas
- **AND** Group B SHALL list California through Iowa (11 states,
  alphabetical)
- **AND** Group C SHALL list Kansas through Nevada (13 states, alphabetical)
- **AND** Group D SHALL list New Hampshire through Wyoming (22 states,
  alphabetical)
- **AND** within each group the states SHALL render alphabetically at 16px
  in `#212529` with `4px 24px` padding

#### Scenario: Menu is a scrollable dropdown

- **GIVEN** the menu is open
- **THEN** the menu SHALL be a white box with a `1px solid
rgba(0,0,0,.15)` border, `4px` corner radius, and NO box shadow
- **AND** the menu width SHALL equal the widget button width
- **AND** the menu SHALL cap at `373px` height with an internal vertical
  scrollbar

### Requirement: Toggle open and close

The system SHALL open and close the dropdown menu on demand.

#### Scenario: Open and close by clicking the button

- **GIVEN** the Chaff app is rendered
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

The system SHALL let the user select and deselect states without closing the
menu.

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
  selection order, across group boundaries — groups are NOT marked in the
  button text)

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

### Requirement: Per-group selection limits

The system SHALL cap selections per GROUP (A:2, B:4, C:7, D:4) and reject
further picks within a group that is at its limit, mirroring the original's
optgroup `data-max-options` attributes.

#### Scenario: Picks within a group's limit are allowed

- **GIVEN** Group A has fewer than 2 states selected
- **WHEN** the user clicks a Group A state
- **THEN** the state SHALL become selected
- **AND** the state's name SHALL appear in the button text in selection
  order

#### Scenario: A pick at the group limit is rejected

- **GIVEN** Group A has exactly 2 states selected (its limit)
- **WHEN** the user clicks a third Group A state
- **THEN** the third state SHALL NOT be added to the selection
- **AND** the button text SHALL remain the two names
- **AND** a transient limit notice (bootstrap-select's default
  `maxOptionsText`, e.g. "Limit reached (2 items max)") SHALL appear or the
  rejection SHALL at minimum be silent-and-blocking (matching the live
  widget)
- **AND** the menu SHALL STAY OPEN

#### Scenario: Limits are independent per group

- **GIVEN** Group A is at its 2-item limit
- **WHEN** the user clicks states in Group B (limit 4) and Group D (limit 4)
- **THEN** those picks SHALL succeed up to each group's own limit
- **AND** Group A's full state SHALL NOT block picks in other groups

#### Scenario: Deselecting inside a group frees its quota

- **GIVEN** Group A has 2 states selected (its limit)
- **WHEN** the user deselects one Group A state
- **THEN** the button text SHALL drop that name
- **AND** picking a new Group A state SHALL be allowed again (up to the
  limit)

### Requirement: Placeholder text

The system SHALL show a placeholder while nothing is selected.

#### Scenario: Placeholder when empty

- **GIVEN** the Chaff app is rendered with no state selected
- **THEN** the widget button SHALL read **"Nothing selected"** in gray
  `#999`
- **AND** the caret arrow SHALL still be visible on the right edge

### Requirement: Component Dock footer

The system SHALL render the mandatory footer.

#### Scenario: Footer links Component Dock

- **GIVEN** the Chaff app is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a minimal footer SHALL link to
  `https://www.componentdock.com/` (branded "Component Dock")
- **AND** no other external/attribution links SHALL appear in the footer

### Requirement: Accessibility

The widget SHALL expose accessible semantics equivalent to the original
native `<select multiple>` it replaces.

#### Scenario: Button semantics

- **GIVEN** the Chaff app is rendered
- **THEN** the widget button SHALL be a real `<button>` with an
  `aria-haspopup="listbox"` attribute and a dynamically updated
  `aria-expanded` attribute
- **AND** the menu SHALL be reachable and operable with the keyboard
  (arrow keys move between options, Enter toggles a pick, Escape closes)
- **AND** selected options SHALL expose `aria-selected` state

## Verification checklist

- [ ] `npm run verify:app chaff` passes (typecheck + lint + knip + fallow + vitest 100% coverage + build)
- [ ] Page bg is `#efefef` (light gray) with `7rem` (112px) vertical padding
- [ ] Centered h2 "Chaff (Limit selection on groups)" (20px, weight 500,
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
- [ ] **Menu shows FOUR groups with gray `#6c757d` headers "Group A (Limit
      2)", "Group B (Limit 4)", "Group C (Limit 7)", "Group D (Limit 4)" +
      dividers; 50 states in the exact group membership above**
- [ ] Rows `padding: 4px 24px`, 16px, hover `#f8f9fa`, keyboard-active
      `#007bff` bg + white text
- [ ] **Selected rows: GREEN `#8cba51` text + GREEN right-edge checkmark**
      (no background, no bold, no checkbox); menu STAYS OPEN; deselect
      removes both and menu stays open
- [ ] **Per-group limits: A=2, B=4, C=7, D=4; over-limit picks in a group
      are rejected (button text unchanged, transient limit notice), limits
      are independent per group, deselect frees the group's quota**
- [ ] NO search box, NO select-all, NO actions box anywhere in the menu
- [ ] Outside click and Escape close the menu; selections persist
- [ ] Arrow-key navigation + Enter toggle + Escape close all work
- [ ] Footer links https://www.componentdock.com/ ("Component Dock")
- [ ] No ColorLib string in any app file; provenance only in this spec /
      TEMPLATES.md / PR
- [ ] `public/CNAME` = `chaff.free.componentdock.com`,
      `homepage` = `https://chaff.free.componentdock.com`, root
      `package-lock.json` registers the workspace
- [ ] README status regenerated via `npm run readme:status` after merge
