# Template: Tare (Multiselect Dropdown)

## Purpose

Tare is a single-page multiselect-dropdown component demo in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Multiselect 19" free template (source:
https://colorlib.com/wp/template/multiselect-19/), built under a DIFFERENT
name (**Tare** — the nineteenth of the selection/separating-themed names for
this series, continuing the grain-processing chain after Husk (16), Groat
(17), and Chaff (18); a "tare" is a weed seed — e.g. vetch — that is
separated out of grain during winnowing, the next thing the winnower casts
off after the chaff, making it the natural nineteenth member of the
winnowed-out-material chain), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a minimal, centered demo page (Bootstrap 4 grid + the
**Harvest Chosen v1.8.7 plugin** + jQuery 3.3.1) in the same layout family
as its siblings "Multiselect 16" (→ Husk), "Multiselect 17" (→ Groat), and
"Multiselect 18" (→ Chaff): a `div.content` (padding 7rem 0) on a
**light-gray `#efefef` page** with a centered `h2` reading **"Multi-Select
#9"** and a SINGLE multi-select widget in a centered `col-md-5` column (445px
widget width at ≥1200px viewport).

**WHAT MAKES TARE DIFFERENT FROM ITS SIBLINGS (and the plugin family):**

1. **It uses Chosen v1.8.7** (Harvest — `css/chosen.css` +
   `js/chosen.jquery.min.js`), NOT bootstrap-select (16/17/18), NOT Semantic
   UI (01–08), NOT Select2 (09–13), NOT jQuery-MultiSelect (14/15).
   `js/main.js` is the canonical one-liner `$(".chosen-select").chosen();`
   — ALL behavior is Chosen's defaults.
2. **The widget is a WHITE, BORDERLESS box with a soft drop shadow**
   (custom style.css: border removed, `border-radius: 4px`,
   `box-shadow: 0 1px 4px 0 rgba(0,0,0,.1)`, inner padding 7px) containing
   the chips plus an **INLINE TEXT INPUT (the search field)** — the
   signature Chosen interaction: typing in it FILTERS the option list live
   (case-insensitive substring) and auto-opens the dropdown while typing.
   With nothing selected the input shows the placeholder **"Select
   Categories"** (`#999` gray, rendered as the input's VALUE — Chosen sets
   the placeholder text into the input value, not the `placeholder`
   attribute).
3. **Chips are flat light-gray** (`#eeeeee`, background gradient removed,
   `border: none`, `box-shadow: none`, `border-radius: 3px`, padding
   `7px 26px 7px 10px`; close × is a 12×12 sprite at `top: 9px; right: 8px`).
   The custom style.css defines THREE alternative chip color classes
   (`.color-1` `#e5e4cc`, `.color-2` `#c7f0db`, `.color-3` `#d3f4ff`) but
   the demo HTML does NOT apply any of them (the select has no color-N
   ancestor) — the page uses the DEFAULT gray chips (screenshot confirms).
4. **The dropdown menu** is a borderless white box (`border: none`,
   `border-radius: 4px`, `box-shadow: 0 15px 30px 0 rgba(0,0,0,.2)`,
   `margin-top: 3px`, full widget width) with rows at `padding: 5px 6px`,
   `line-height: 15px`, color `#444`, `max-height: 240px` + internal
   scroll.
5. **Already-picked rows STAY in the list but dim to `#ccc`**
   (`.result-selected`, `cursor: default`) — the list is never reordered or
   shrunk by picking; the visible selected-state feedback lives in the chips
   above, not in the list.
6. **Close-on-select:** a real mouse click on an option row adds the chip
   AND CLOSES the dropdown (live-verified 2026-08-18 with real browser
   clicks), unlike bootstrap-select members which stay open. The dropdown
   also closes on outside click, Escape, or pressing Enter on the
   highlighted row. The input keeps focus after a pick (typing a new filter
   reopens the list instantly).
7. **"No results match <query>" row** (`#777` on `#f4f4f4`) when the filter
   matches nothing (live-verified: typing "zzz" → single row "No results
   match zzz").
8. **Keyboard/hover highlight** is Chosen's gradient blue:
   `.highlighted` background `linear-gradient(#3875d7 20%, #2a62bc 90%)`
   with white text (live-verified: hovering WordPress → rgb(56,117,215)
   background).

Tare recreates that structure 1:1 with matching layout, tokens, typography,
and content (no ColorLib assets copied; the 8 option names — Design, HTML5,
CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd — are generic web-stack
terms, kept verbatim as content).

> NAMING NOTE: the ColorLib source name "Multiselect 19" is FORBIDDEN as the
> app name. **Tare** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or any
> TEMPLATES.md name (verified 2026-08-18: zero hits for `tare` in
> TEMPLATES.md, `ls apps/`, `ls openspec/specs/`, `ls docs/templates/`;
> sibling candidates already used: Bine, Fann — rejected because "fanner"
> is the 14th member's name and "bine" is a plant-stem term outside the
> winnowed-material chain; Tare is the cleanest fit: chaff is the husk
> matter winnowed out, tare is the weed seed winnowed out — the exact next
> element of the separation theme). The official preview page is reached via
> the `/theme/bootstrap/` prefix (see below) — the bare
> `/theme/multiselect-19/` URL returns a 9-byte "Not Found". Source slug +
> preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Multiselect 19" (marketing title in the page title
  tag: "Multi Select #9"; the h2 reads **"Multi-Select #9"**). Listed in
  TEMPLATES.md under **Bootstrap Multiselect (20)** (section header line
  821; row at line 841 — `multiselect-19` appears exactly ONCE in
  TEMPLATES.md, no dup rows to mark). Series siblings already prepped:
  01 → Picker, 02 → Sifter, 03 → Winnow, 04 → Cull (Semantic UI);
  05 → Glean, 06 → Garner, 07 → Reap, 08 → Pluck (Semantic UI variants);
  09 → Thresh (Select2, DARK), 10 → Sickle (vanilla jQuery, light coral),
  11 → Scythe (Select2 LIGHT, purple `#65587f`), 12 → Sheaf (Select2
  LIGHT-GRAY, coral `#f67280`), 13 → Sieve (Select2 LIGHT-GRAY, teal
  `#29c7ac`), 14 → Fanner and 15 → Bolter (jQuery-MultiSelect v2.4.18),
  16 → Husk, 17 → Groat, 18 → Chaff (bootstrap-select v1.13.9).
  **Multiselect 19 is the FIRST Chosen member of the series** — nearest
  siblings are the bootstrap-select trio but the widget, tokens, and
  interaction model are Chosen's (inline search field, flat gray chips,
  dimmed-but-present picked rows, auto-close on real click pick). Do NOT
  cross-contaminate with the bootstrap-select members (no input inside the
  button, no comma-joined button text, no green accent — Chosen has NO
  brand accent color beyond the blue row highlight).
- **Live preview DOM — REACHABLE (verified 2026-08-18 by direct fetch AND
  real-browser interaction incl. live chip adds, filter typing, chip
  removal, hover highlight, and computed-style extraction):** the naive
  `https://preview.colorlib.com/theme/multiselect-19/` returns 404 (`Not
Found`, 9 bytes); the REAL preview is
  **`https://preview.colorlib.com/theme/bootstrap/multiselect-19/`** (HTTP
  200, 16,518 bytes, 66 lines — tiny page), `<title>Multi Select #9</title>`.
  Stylesheets: `fonts/icomoon/style.css` (loaded, but NO icomoon glyphs
  appear in the DOM — do not ship it), `css/chosen.css` (Chosen v1.8.7 base,
  12,188 bytes), `css/bootstrap.min.css` (Bootstrap 4 grid — used only for
  the centered column layout; no Bootstrap JS components in the DOM), and
  `css/style.css` (the per-demo token tail, 2,235 bytes — see tokens
  below). Fonts via cf-fonts @font-face blocks in the head: **Roboto 300 +
  400** (used; Poppins and Source Serif Pro are loaded but NOT referenced by
  any style rule — ignore them). Scripts: `js/jquery-3.3.1.min.js`,
  `js/popper.min.js`, `js/bootstrap.min.js` (loaded, unused — no Bootstrap
  JS components here), `js/chosen.jquery.min.js` (the plugin, v1.8.7), and
  `js/main.js` — **the canonical Chosen one-liner**:
  `$(function(){ $(".chosen-select").chosen(); })`. ALL behavior is Chosen's
  defaults: no options object, no `data-` config attributes — nothing.
- **Live DOM structure (1:1):**
  - `div.content` (custom: `padding: 7rem 0` ≈ 112px vertical; body bg
    `#efefef`) → `h2.text-center` **"Multi-Select #9"** (custom:
    `font-size: 20px`, Roboto, color `#212529` family, centered — no 500
    weight declaration in the stylesheet, computed weight 400) →
    `div.container.text-left` (Bootstrap container, max-width 1140px) →
    `div.row.justify-content-center` → `div.col-md-5` (grid: 5/12 of the
    1110px row; live computed widget width **445px** at 1280px viewport —
    same as the bootstrap-select members' col-md-5):
    - `select.chosen-select[data-placeholder="Select Categories"][tabindex="8"]`
      — hidden by the plugin (`display: none`), containing **EIGHT plain
      `<option>`s (NO optgroups, NO limits, NO values)**: Design, HTML5,
      CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd.
    - The plugin replaces the select at load with:
      - `div.chosen-container.chosen-container-multi` (the wrapper; live
        size **445 × auto**; custom style.css: `border: none`):
        - `ul.chosen-choices` (the widget box — live computed: background
          `#fff` gradient removed (`background-image: none`), `border: none
!important`, `border-radius: 4px`, `box-shadow: 0 1px 4px 0
rgba(0,0,0,.1) !important`, `padding: 7px`, `cursor: text`):
          - `li.search-choice` per picked option — the CHIP (live computed:
            **background `#eeeeee` flat** (gradient removed), `border:
none`, `border-radius: 3px`, `box-shadow: none`, `padding:
7px 26px 7px 10px`, color `#333`, `line-height: 13px`, `margin:
3px 5px 3px 0`): the option name + `a.search-choice-close` (the
            × — a 12×12 background sprite positioned `top: 9px; right: 8px`
            per custom style.css; clicking it removes the chip and
            restores the row to full-strength in the list).
          - `li.search-field` → `input[type="text"]` — the INLINE SEARCH
            (live computed: `height: 32px` (custom), `font-size: 14px`
            (custom), `color: #999`, `border: 0`, transparent background,
            `width: 25px` auto-growing). With zero chips the input is the
            only element and shows the placeholder **"Select Categories"**
            — Chosen renders it into the input's VALUE (the `placeholder`
            attribute is not set; the input value === "Select Categories"
            with `#999` color). Typing here filters the option list
            live. After a pick the input keeps focus (still `#999` when
            empty but chips are present — no placeholder text).
        - `div.chosen-drop` (the menu; live computed: `position: absolute`,
          `top: 100%`, `z-index: 1010`, width 100% → **445px (SAME as the
          widget — flush)**, background `#fff`, **`border: none !important`**,
          `border-radius: 4px`, **`margin-top: 3px`**,
          **`box-shadow: 0 15px 30px 0 rgba(0,0,0,.2) !important`**):
          - `ul.chosen-results` (`max-height: 240px` + `overflow-y: auto`
            internal scrollbar, `margin: 0 4px 4px 0`) → **8 `li` rows**:
            - Unpicked rows: `li.active-result` — live computed: `padding:
5px 6px`, `line-height: 15px`, `font-size: 13px` (Chosen
              base; the page has no font-size override for results),
              color `#444`, `list-style: none`, cursor pointer.
            - Picked rows: `li.result-selected` — SAME row position and
              text, but **color `#ccc`** and `cursor: default` (dimmed,
              not clickable — the list keeps the row, matching the "rows
              stay after pick" behavior).
            - Hovered/keyboard-active row: `li.highlighted` — Chosen's
              gradient **`linear-gradient(#3875d7 20%, #2a62bc 90%)`**
              background with **white text** (live-verified: hovering
              WordPress → rgb(56,117,215) bg, white text; the only
              colored element in the whole demo besides the default blue
              focus ring).
            - Filter match failure: `li.no-results` — **"No results match
              <query>"**, color `#777`, background `#f4f4f4` (live-verified
              with input "zzz").
  - **Footer:** the original has NO footer; per monorepo convention add a
    minimal attribution footer linking `https://www.componentdock.com/`
    ("Component Dock") so every shipped template carries the required link.
- **Design tokens (all verified 2026-08-18 from the live stylesheets +
  live computed styles):**
  - **Page background:** `#efefef` (light gray) — `css/style.css` body
    rule, live-computed rgb(239,239,239).
  - **Fonts:** Roboto 400 (body/headings; 300 loaded but unused on the
    page). Load Roboto 300/400 via Google Fonts `<link>` in `index.html`.
  - **Heading:** h2 **"Multi-Select #9"** → recreate as **"Tare"** or
    **"Tare (#9)"** (the source's h2 is just the series counter; the
    sibling preps keep the heading content-kind — a short centered title —
    with the new name): 20px, weight 400 (stylesheet declares no weight; 400
    is the computed value), color `#212529`, centered.
  - **Widget column:** `col-md-5` (445px content width at ≥768px; full-width
    on mobile), centered.
  - **Widget box:** white `#fff`, **no border**, `border-radius: 4px`,
    `box-shadow: 0 1px 4px 0 rgba(0,0,0,.1)`, `padding: 7px` inside,
    `cursor: text`, 445px wide.
  - **Chips:** flat **`#eeeeee`**, `border: none`, `border-radius: 3px`,
    `box-shadow: none`, `padding: 7px 26px 7px 10px`, color `#333`, 13px
    line-height, `margin: 3px 5px 3px 0`; × close 12×12 at `top: 9px;
right: 8px`. (Custom style.css ALSO defines `.color-1` `#e5e4cc`,
    `.color-2` `#c7f0db`, `.color-3` `#d3f4ff` chip tints — the demo does
    NOT use them; skip them or keep as unused CSS comments.)
  - **Inline search input:** `height: 32px`, `font-size: 14px`, color
    `#999` (placeholder "Select Categories" / empty-with-chips), `border: 0`,
    transparent bg, auto-grow width.
  - **Menu:** white `#fff`, **no border**, `border-radius: 4px`,
    `margin-top: 3px`, **`box-shadow: 0 15px 30px 0 rgba(0,0,0,.2)`**, same
    width as the widget, `max-height: 240px` + internal scroll.
  - **Menu rows:** `padding: 5px 6px`, `line-height: 15px`, `font-size:
13px`; unselected `#444`; picked-rows-in-list `#ccc` (dimmed, cursor
    default); hover/keyboard-active gradient `#3875d7 → #2a62bc` with WHITE
    text; no-results row `#777` on `#f4f4f4`.
  - **Spacing:** page content padding `7rem 0` (112px) vertical.
- **Behaviors (live-verified 2026-08-18 on the real preview in a browser
  with REAL mouse clicks — the Chosen defaults):**
  - **Open:** clicking the widget (anywhere on the choices box / the inline
    input) opens the dropdown; typing in the inline input ALSO auto-opens
    the dropdown while filtering.
  - **Pick: real-click on an option row adds its chip and CLOSES the
    dropdown** (live-verified: clicking Design → chip + dropdown closed;
    re-open, click CSS3 → chip + dropdown closed). The picked row STAYS in
    the list, dimmed `#ccc` (`.result-selected`, not clickable).
  - **Close:** outside click, Escape, or Enter-on-highlighted closes; the
    input KEEPS FOCUS after a pick (typing reopens instantly).
  - **Filter (THE signature interaction):** typing in the inline input
    filters the 8 rows live by case-insensitive substring (live-verified:
    "word" → only the WordPress row remains, auto-highlighted; "" → all 8
    back). A query matching nothing renders the single row **"No results
    match <query>"** (live-verified: "zzz"). The filter input value is
    cleared after a pick.
  - **Remove:** clicking a chip's × removes the chip and restores that
    option to full-strength `#444` in the list (live-verified). Removing
    ALL chips returns the input to placeholder "Select Categories".
  - **Keyboard:** arrows move the `.highlighted` row (same blue gradient +
    white text), Enter picks/activates the highlighted row, Escape closes.
    Arrow-key nav + Enter behave like an equivalent click (pick + close).
  - **Persistence:** selections persist across open/close and filter
    cycles (chips stay; the list keeps dimming them).
  - **No select-all, no optgroups, no limits, no comma-joined button text,
    no brand accent color** — the ONLY colors are the blue row highlight,
    the blue focus ring, and the gray/muted palette.
  - **Live computed values captured:** body bg rgb(239,239,239); h2 20px
    color rgb(33,37,41); content padding 112px 0; widget 445px;
    widget box bg white, border-width 0, radius 4px, shadow
    rgba(0,0,0,0.1) 0 1px 4px 0, padding 7px; chip bg rgb(238,238,238) =
    `#eeeeee`, border 0, radius 3px, shadow none, padding 7px 26px 7px 10px;
    chip × 12×12 at top 9px right 8px; input height 32px, 14px, color
    #999; menu shadow rgba(0,0,0,0.2) 0 15px 30px 0, radius 4px, mt 3px,
    border 0; row padding 5px 6px, color #444 / picked #ccc / hover
    rgb(56,117,215) bg = `#3875d7` gradient white text; no-results
    rgb(119,119,119) on rgb(244,244,244).
- **Screenshot (`multiselect-19.jpg`, 1200×972 AVIF, browser-verified
  2026-08-18):** LIGHT-GRAY page, centered dark 20px "Multi-Select #9"
  heading, and a single widget: the white rounded box (soft shadow visible)
  with one flat light-gray chip **"CSS3"** + a small × on its right, the
  inline input to its right, and the OPEN white dropdown below showing the
  option rows Design, HTML5, CSS3, jQuery, SASS, Bootstrap, **WordPress
  (highlighted BLUE — the Chosen `#3875d7` gradient)**, Frontend. NOTE:
  the screenshot's middle rows read "jQuery, SASS" while the LIVE DOM has
  "jQuery, **BS4**" — the screenshot is of an older build (or a renamed
  option); the LIVE DOM wins (8 options: Design, HTML5, CSS3, jQuery, BS4,
  Bootstrap, WordPress, FrontEnd). Chip color in the screenshot is the
  default light gray (no color-N tint). Matches the live widget 1:1.

## Design tokens

| Token                | Value                        | Notes                                                                           |
| -------------------- | ---------------------------- | ------------------------------------------------------------------------------- |
| `--color-page`       | `#efefef`                    | Light-gray page background                                                      |
| `--color-ink`        | `#212529`                    | Heading text                                                                    |
| `--color-chip`       | `#eeeeee`                    | Flat light-gray chip background (gradient removed)                              |
| `--color-chip-text`  | `#333`                       | Chip label color                                                                |
| `--color-input`      | `#999`                       | Inline search input text / placeholder "Select Categories"                      |
| `--color-row`        | `#444`                       | Unpicked option row text                                                        |
| `--color-row-picked` | `#ccc`                       | Picked rows still listed in the menu (dimmed, cursor default)                   |
| `--color-no-results` | `#777` on `#f4f4f4`          | "No results match <query>" row                                                  |
| `--color-highlight`  | `#3875d7 → #2a62bc`          | Hover/keyboard-active row gradient (Chosen blue) — WHITE text                   |
| `--font-body`        | Roboto, sans-serif           | Body + headings (300/400 via Google Fonts)                                      |
| `--radius-widget`    | `4px`                        | Widget box + menu corner radius                                                 |
| `--radius-chip`      | `3px`                        | Chip corner radius                                                              |
| `--shadow-widget`    | `0 1px 4px rgba(0,0,0,.1)`   | Widget box drop shadow (no border)                                              |
| `--shadow-menu`      | `0 15px 30px rgba(0,0,0,.2)` | Menu drop shadow (no border, margin-top 3px)                                    |
| `--menu-max-h`       | `240px`                      | Menu max height with internal scroll                                            |
| `--row-pad`          | `5px 6px`                    | Option row padding                                                              |
| `--chip-pad`         | `7px 26px 7px 10px`          | Chip padding (space for the × at right)                                         |
| `--input-h`          | `32px` / 14px                | Inline search input height + font size                                          |
| `--content-pad-y`    | `7rem` (~112px)              | Page vertical padding                                                           |
| `--options`          | 8 items                      | Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd (no optgroups) |

## Requirements

### Requirement: Page layout

The system SHALL render a single-page centered layout on a light-gray
background with a heading and one multiselect widget column.

#### Scenario: Page shell

- **GIVEN** the Tare app is rendered
- **THEN** the page background SHALL be `#efefef`
- **AND** the page font SHALL be Roboto (300/400, loaded from Google Fonts)
- **AND** the content area SHALL have `7rem` (112px) vertical padding

#### Scenario: Centered heading

- **GIVEN** the Tare app is rendered
- **THEN** a centered h2 heading reading **"Tare"** SHALL render at 20px,
  color `#212529`
- **AND** the heading SHALL sit directly above the widget column

#### Scenario: Widget column

- **GIVEN** the Tare app is rendered
- **THEN** the multiselect widget SHALL render in a centered column
  equivalent to Bootstrap's `col-md-5` (≈445px content width at desktop,
  full width on small screens)

### Requirement: Option list

The system SHALL offer the eight categories of the original as a single
ungrouped list with no selection limits.

#### Scenario: Eight ungrouped options

- **GIVEN** the Tare app is rendered
- **WHEN** the user opens the dropdown
- **THEN** the menu SHALL list exactly these eight options in order:
  **Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd**
- **AND** the list SHALL have NO optgroup headers, NO dividers, and NO
  per-group or global selection limits

#### Scenario: Menu is a scrollable dropdown

- **GIVEN** the menu is open
- **THEN** the menu SHALL be a white box with NO border, `4px` corner
  radius, `margin-top: 3px`, and a `0 15px 30px rgba(0,0,0,.2)` drop shadow
- **AND** the menu width SHALL equal the widget box width
- **AND** the menu SHALL cap at `240px` height with an internal vertical
  scrollbar
- **AND** unpicked rows SHALL render at `5px 6px` padding, 13px, color
  `#444`

### Requirement: Widget box and chips

The system SHALL render the Chosen-style borderless widget box with flat
light-gray chips and an inline search input.

#### Scenario: Borderless widget box

- **GIVEN** the Tare app is rendered
- **THEN** the widget SHALL be a white box with NO border, `4px` corner
  radius, a `0 1px 4px rgba(0,0,0,.1)` drop shadow, and `7px` inner padding

#### Scenario: Chip appearance

- **GIVEN** at least one option is picked
- **THEN** each picked option SHALL render as a flat light-gray chip
  (`#eeeeee` background, NO border, NO shadow, `3px` radius, `7px 26px 7px
10px` padding, dark `#333` text)
- **AND** each chip SHALL carry a small × close control at its right edge
  (12×12, positioned `top: 9px; right: 8px`)
- **AND** the chips SHALL sit left-to-right inside the widget box in pick
  order, with the inline search input after them

#### Scenario: Inline search input

- **GIVEN** the Tare app is rendered
- **THEN** the widget SHALL contain an inline text input (32px tall, 14px
  font, `#999` text) after the chips
- **AND** with zero chips the input SHALL show the placeholder **"Select
  Categories"**
- **AND** the input SHALL keep focus after a pick so typing filters the
  list immediately

### Requirement: Opening and closing the dropdown

The system SHALL open and close the dropdown menu on demand.

#### Scenario: Open by click and by typing

- **GIVEN** the Tare app is rendered
- **WHEN** the user clicks anywhere on the widget box (or focuses and types
  in the inline input)
- **THEN** the dropdown menu SHALL open directly below the widget

#### Scenario: Pick closes the dropdown (Chosen close-on-select)

- **GIVEN** the dropdown is open
- **WHEN** the user clicks an unpicked option row
- **THEN** the option SHALL be added as a chip
- **AND** the dropdown SHALL CLOSE (real-click pick closes the menu — the
  Chosen default, unlike the bootstrap-select members which stay open)

#### Scenario: Close by outside click and Escape

- **GIVEN** the dropdown is open
- **WHEN** the user clicks anywhere outside the widget
- **THEN** the dropdown SHALL close
- **AND** when the user instead presses the Escape key
- **THEN** the dropdown SHALL close
- **AND** any chips picked before closing SHALL remain

### Requirement: Picking and removing options

The system SHALL let the user pick options into chips and remove them.

#### Scenario: Picking an option adds a chip

- **GIVEN** the dropdown is open
- **WHEN** the user clicks "Design"
- **THEN** a chip reading "Design" SHALL appear in the widget box
- **AND** the "Design" row SHALL remain in the list but dim to `#ccc`
  (`.result-selected`, no longer clickable)
- **AND** the dropdown SHALL close (see close-on-select requirement)

#### Scenario: Picking multiple options

- **GIVEN** the dropdown is open
- **WHEN** the user clicks "Design" and then reopens and clicks "CSS3"
- **THEN** the widget SHALL show two chips: "Design" then "CSS3" (pick
  order)
- **AND** both the Design and CSS3 rows SHALL show dimmed `#ccc` in the
  list

#### Scenario: Removing a chip restores the row

- **GIVEN** the widget has a "Design" chip
- **WHEN** the user clicks the × on the chip
- **THEN** the chip SHALL disappear
- **AND** the "Design" row SHALL return to full-strength `#444` in the list
- **AND** with ALL chips removed the inline input SHALL show "Select
  Categories" again

#### Scenario: No limit and no select-all

- **GIVEN** the Tare app is rendered
- **THEN** ALL eight options SHALL be selectable simultaneously (no
  per-group or global cap)
- **AND** the widget SHALL have NO select-all control, NO actions box, and
  NO comma-joined text anywhere (Chosen shows chips, not a text summary)

### Requirement: Live filter search

The system SHALL filter the option list live as the user types in the
inline input.

#### Scenario: Typing filters options

- **GIVEN** the dropdown is open
- **WHEN** the user types "word" into the inline input
- **THEN** the menu SHALL show only the "WordPress" row (case-insensitive
  substring match)
- **AND** that row SHALL be auto-highlighted with the blue gradient
  (`#3875d7 → #2a62bc`, white text)
- **AND** clearing the input SHALL restore all eight rows

#### Scenario: No matches

- **GIVEN** the dropdown is open
- **WHEN** the user types "zzz" into the inline input
- **THEN** the menu SHALL show a single row reading **"No results match
  zzz"** (color `#777` on `#f4f4f4`)

#### Scenario: Filtering does not remove chips

- **GIVEN** a chip ("CSS3") exists in the widget
- **WHEN** the user types a filter that excludes CSS3
- **THEN** the chip SHALL remain in the widget box
- **AND** the CSS3 row SHALL stay dimmed `#ccc` if it is still listed

### Requirement: Keyboard navigation

The system SHALL support keyboard operation of the dropdown.

#### Scenario: Arrows and Enter

- **GIVEN** the dropdown is open
- **WHEN** the user presses the Down arrow
- **THEN** the highlight SHALL move to the next row with the blue gradient
  (`#3875d7 → #2a62bc` background, white text)
- **AND** pressing Enter on the highlighted row SHALL pick it (chip added,
  dropdown closes) — equivalent to clicking that row

#### Scenario: Escape closes

- **GIVEN** the dropdown is open
- **WHEN** the user presses Escape
- **THEN** the dropdown SHALL close without picking

### Requirement: Persistence

The system SHALL keep selections intact across open/close and filter
cycles.

#### Scenario: Chips persist after closing

- **GIVEN** the dropdown is open with two chips picked
- **WHEN** the user closes the dropdown (outside click or Escape) and
  reopens it
- **THEN** the two chips SHALL still be present
- **AND** their rows SHALL still be dimmed `#ccc` in the list

### Requirement: Footer

The system SHALL render the monorepo-mandated attribution footer.

#### Scenario: Component Dock credit

- **GIVEN** the Tare app is rendered
- **THEN** the footer SHALL contain a link to
  `https://www.componentdock.com/` branded as "Component Dock"
- **AND** the footer SHALL be the only addition beyond the original's
  structure (the source has no footer)

## Verification checklist

- [ ] `apps/tare` exists; package `@free-react-templates/tare`; CNAME
      `tare.free.componentdock.com`; homepage
      `https://tare.free.componentdock.com`; workspace registered in
      `package-lock.json` (`npm install` at root).
- [ ] `src/index.css` `@theme` tokens: page `#efefef`, ink `#212529`, chip
      `#eeeeee`, chip-text `#333`, input `#999`, row `#444`, row-picked
      `#ccc`, no-results-fg `#777`, no-results-bg `#f4f4f4`, highlight
      `#3875d7`→`#2a62bc`; Roboto Google Fonts `<link>` (300/400).
- [ ] No ColorLib strings anywhere in `apps/tare` (provenance lives only in
      this spec, TEMPLATES.md, and the PR).
- [ ] Footer credit links `https://www.componentdock.com/`.
- [ ] 8-option list in exact order; no optgroups/limits/select-all.
- [ ] Widget box borderless + shadow + 4px radius; chips flat `#eeeeee`
      with ×; inline input with "Select Categories" placeholder.
- [ ] Menu borderless + `0 15px 30px rgba(0,0,0,.2)` + 3px margin-top +
      240px max-height scroll.
- [ ] Real-click pick adds chip and CLOSES the dropdown; picked rows dim to
      `#ccc` and stay in the list; × removes chip and restores row.
- [ ] Live filter (substring, case-insensitive), "No results match <query>"
      row, filter does not remove chips.
- [ ] Keyboard: arrows move blue highlight, Enter picks, Escape closes.
- [ ] Tests at 100% coverage mirroring every scenario above (jsdom note:
      the inline input is a real `<input>` — use `userEvent.type` for
      filter tests and `fireEvent.click` for chip ×; MemoryStorage polyfill
      from `apps/cura/src/test/setup.ts` if localStorage is needed).
- [ ] `npm run verify:app -- tare` green (typecheck → lint → vitest 100% →
      build).
- [ ] PR: source URL, preview URL (the `/theme/bootstrap/` one), token
      list, what differs (renames, paraphrased heading, no icomoon, no
      color-N chip tints, Roboto Google Font, lucide/CSS close ×, Component
      Dock footer).
