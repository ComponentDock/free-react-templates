# Template: Sift (Multiselect Dropdown)

## Purpose

Sift is a single-page multiselect-dropdown component demo in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Multiselect 20" free template (source:
https://colorlib.com/wp/template/multiselect-20/), built under a DIFFERENT
name (**Sift** — the twentieth of the selection/separating-themed names for
this series, continuing the grain-processing chain after Husk (16), Groat
(17), Chaff (18), and Tare (19); once the chaff and the tare weed seeds have
been winnowed out, the cleaned grain is _sifted_ — passed through a sieve —
to separate fine from coarse, making it the natural twentieth member of the
separation chain), with the monorepo stack: Vite + React 19 + Tailwind CSS 4

- TypeScript.

The original is a minimal, centered demo page (Bootstrap 4 grid + the
**Harvest Chosen v1.8.7 plugin** + jQuery 3.3.1) in the same layout family
as its siblings "Multiselect 16" (→ Husk), "Multiselect 17" (→ Groat),
"Multiselect 18" (→ Chaff), and "Multiselect 19" (→ Tare): a `div.content`
(padding 7rem 0) on a **light-gray `#efefef` page** with a centered `h2`
reading **"Multi-Select #10 (Limit to 5)"** and **THREE multi-select
widgets**, each in its own centered `col-md-5` column (445px widget width at
≥768px viewport), stacked vertically.

**WHAT MAKES SIFT DIFFERENT FROM ITS SIBLING TARE (and the plugin family):**

1. **It is the SECOND Harvest Chosen member** (same `css/chosen.css` +
   `js/chosen.jquery.min.js` as Tare, NOT bootstrap-select, NOT Semantic UI,
   NOT Select2, NOT jQuery-MultiSelect). Chosen 1.8.7's interaction model is
   shared verbatim with Tare: inline text-input search, flat chips, blue
   `#3875d7` row highlight, dimmed-but-present picked rows, close-on-select.
2. **THREE widgets on one page** (Tare has ONE). Each widget is fed by an
   identical `select.chosen-select` with the same eight options, and each is
   wrapped in a per-widget tint wrapper that recolors the chips:
   - Widget 1 → `.color-1` → chips **`#e5e4cc`** (pale beige/tan)
   - Widget 2 → `.color-2` → chips **`#c7f0db`** (pale mint green)
   - Widget 3 → `.color-3` → chips **`#d3f4ff`** (pale sky blue)
     These are the SAME three `.color-N` chip-tint classes defined in
     `style.css` that Tare's page did NOT use — HERE they are applied. This is
     the page's only visual variation between widgets; the box, menu, and
     every other token are identical across all three.
3. **`max_selected_options: 5` — THE "Limit to 5" from the heading.** `js/main.js`
   is `$(function(){ $(".chosen-select").chosen({ max_selected_options: 5,
width: '100%' }); })` — the ONLY Chosen member with a configured limit.
   Live-verified 2026-08-18: with 5 chips present, clicking a 6th option
   does NOTHING visible (no chip, no flash, no error row) — Chosen fires its
   internal `chosen:maxselected` event which the demo does not listen to, and
   the search input is NOT disabled (typing/filtering still works). The
   limit is silent.
4. **`width: '100%'`** in the options object — the widget box fills its
   column (Tare used Chosen's default width). The col-md-5 is 445px at
   ≥768px, so the boxes are 445px wide, full-width on mobile.
5. **The heading wraps a `<label for="multiple-label-example">`** targeting
   the FIRST widget's select (`id="multiple-label-example"`), so clicking the
   heading focuses/opens widget 1. The label is inline in the h2 text.
6. **All three selects carry `tabindex="8"`** and
   `data-placeholder="Select Categories"`; only widget 1 has the id.

## Naming

The ColorLib source name "Multiselect 20" is FORBIDDEN as the app name.
**Sift** is the new, original name — single lowercase word, kebab-case, no
collision with `apps/`, `openspec/specs/`, `docs/templates/`, or any
TEMPLATES.md name (verified 2026-08-18: zero hits for `sift` in TEMPLATES.md,
`ls apps/`, `ls openspec/specs/`). It continues the winnowing/separating
chain: ... Chaff (18, husk matter) → Tare (19, weed seed) → **Sift (20,
separating fine from coarse)**. Sibling candidates considered and rejected:
"Riddle" and "Screen" (both free but describe the tool, not the act — "Sift"
matches the verb-based chain), "Fan" (tools-based, weaker fit). Source slug +
preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Multiselect 20" (marketing title in the page title
  tag: "Multi Select #10"; the h2 reads **"Multi-Select #10 (Limit to 5)"**).
  Listed in TEMPLATES.md under **Bootstrap Multiselect (20)** (section header
  line 821; row at line 842 — `multiselect-20` appears exactly ONCE in
  TEMPLATES.md, no dup rows to mark). Series siblings: 01 → Picker,
  02 → Sifter, 03 → Winnow, 04 → Cull, 05 → Glean, 06 → Garner, 07 → Reap,
  08 → Pluck (Semantic UI), 09 → Thresh (Select2, DARK), 10 → Sickle,
  11 → Scythe, 12 → Sheaf, 13 → Sieve (Select2), 14 → Fanner, 15 → Bolter
  (jQuery-MultiSelect), 16 → Husk, 17 → Groat, 18 → Chaff (bootstrap-select),
  19 → Tare (Chosen, single widget, NO limit). **Multiselect 20 → Sift is the
  SECOND Chosen member** — the nearest sibling is Tare; the plugin, tokens,
  and interaction model are identical except for the three tinted widgets and
  the 5-option limit. Do NOT cross-contaminate with the bootstrap-select or
  Select2 members (no comma-joined button text, no optgroups, no green
  accent — Chosen's only color accents are the blue row highlight and the
  default focus ring).
- **Live preview DOM — REACHABLE (verified 2026-08-18 by direct fetch AND
  real-browser interaction — live chip adds via real clicks, limit-block
  test, chip removal, computed-style extraction):** the naive
  `https://preview.colorlib.com/theme/multiselect-20/` returns 404 ("Not
  Found", 9 bytes); the REAL preview is
  **`https://preview.colorlib.com/theme/bootstrap/multiselect-20/`** (HTTP
  200, 17,832 bytes, 99 lines — tiny page), `<title>Multi Select #10</title>`.
  Stylesheets: `fonts/icomoon/style.css` (loaded, but NO icomoon glyphs
  appear in the DOM — do not ship it), `css/chosen.css` (Chosen v1.8.7 base,
  12,188 bytes), `css/bootstrap.min.css` (Bootstrap 4 grid — used only for
  the centered column layout), and `css/style.css` (the per-demo token tail,
  2,095 bytes — see tokens below). Fonts via cf-fonts @font-face blocks in
  the head: **Roboto 300/400** (used; Poppins and Source Serif Pro are
  loaded but NOT referenced by any style rule — ignore them). Scripts:
  `js/jquery-3.3.1.min.js`, `js/popper.min.js` (loaded, unused),
  `js/bootstrap.min.js` (loaded, unused — no Bootstrap JS components here),
  `js/chosen.jquery.min.js` (the plugin, v1.8.7), and `js/main.js`:
  ```js
  $(function () {
    $('.chosen-select').chosen({
      max_selected_options: 5,
      width: '100%',
    })
  })
  ```
  ALL behavior is Chosen defaults (with the two options above): no `data-`
  config attributes.
- **Live DOM structure (1:1):**
  - `div.content` (custom: `padding: 7rem 0` ≈ 112px vertical; body bg
    `#efefef`) → `h2.text-center` **"Multi-Select #10 (Limit to 5)"**
    (custom: `font-size: 20px`, Roboto, color `#212529` family, centered,
    computed weight 400) — the h2 text is wrapped in a
    `<label for="multiple-label-example">` (label is INLINE inside the h2,
    not a separate element; the label's `for` targets the FIRST widget's
    select `id="multiple-label-example"`) → `div.container.text-left`
    (Bootstrap container, max-width 1140px) → **THREE stacked
    `div.row.justify-content-center.mb-3` groups** (3 rows, 1rem
    margin-bottom spacing between them), each containing:
    - `div.col-md-5` (grid: 5/12 of the 1110px row; live computed widget
      width **445px** at 1280px viewport — same as Tare's col-md-5):
      - `div.color-1` (widget 1) / `div.color-2` (widget 2) /
        `div.color-3` (widget 3) — the tint wrapper.
      - `select.chosen-select[data-placeholder="Select Categories"][tabindex="8"]`
        — widget 1 also has `id="multiple-label-example"`; hidden by the
        plugin (`display: none`), containing **EIGHT plain `<option>`s (NO
        optgroups, NO values)**: Design, HTML5, CSS3, jQuery, BS4, Bootstrap,
        WordPress, FrontEnd.
    - The plugin replaces each select at load with the SAME structure as
      Tare's:
      - `div.chosen-container.chosen-container-multi` (the wrapper; live
        size **445 × auto** — `width: '100%'` fills the col; custom
        style.css: `border: none`):
        - `ul.chosen-choices` (the widget box — live computed: background
          `#fff` gradient removed (`background-image: none`), `border: none
!important`, `border-radius: 4px`, `box-shadow: 0 1px 4px 0
rgba(0,0,0,.1) !important`, `padding: 7px`, `cursor: text`):
          - `li.search-choice` per picked option — the CHIP (live computed
            on widget 1: **background `#e5e4cc`**; widget 2: `#c7f0db`;
            widget 3: `#d3f4ff` — set by the `.color-N` wrapper rules in
            style.css; all else identical to Tare: `border: none`,
            `border-radius: 3px`, `box-shadow: none`, `padding:
7px 26px 7px 10px`, color `#333`, `line-height: 13px`, `margin:
3px 5px 3px 0`): the option name + `a.search-choice-close` (the
            × — 12×12 background sprite positioned `top: 9px; right: 8px`
            per custom style.css; clicking it removes the chip and restores
            the row to full strength in the list).
          - `li.search-field` → `input[type="text"]` — the INLINE SEARCH
            (live computed: `height: 32px` (custom), `font-size: 14px`
            (custom), `color: #999`, `border: 0`, transparent background,
            `width: 25px` auto-growing). With zero chips the input is the
            only element and shows the placeholder **"Select Categories"** —
            Chosen renders it into the input's VALUE (the `placeholder`
            attribute is not set; the input value === "Select Categories"
            with `#999` color — live-verified on widgets 2/3). After a pick
            the input keeps focus (still `#999` when empty but chips are
            present — no placeholder text). When the widget is ACTIVE
            (focus/open), the input text color flips to `#222`.
        - `div.chosen-drop` (the menu; live computed: `position: absolute`,
          `top: 100%`, `z-index: 1010`, width 100% → **445px (SAME as the
          widget — flush)**, background `#fff`, **`border: none !important`**,
          `border-radius: 4px`, **`margin-top: 3px`**,
          **`box-shadow: 0 15px 30px 0 rgba(0,0,0,.2) !important`**):
          - `ul.chosen-results` (`max-height: 240px` + `overflow-y: auto`
            internal scrollbar, `margin: 0 4px 4px 0`) → **8 `li` rows per
            widget**:
            - Unpicked rows: `li.active-result` — live computed: `padding:
5px 6px`, `line-height: 15px`, `font-size: 13px` (Chosen
              base), color `#444`, `list-style: none`, cursor pointer.
            - Picked rows: `li.result-selected` — SAME row position and
              text, but **color `#ccc`** and `cursor: default` (dimmed,
              not clickable — the list keeps the row).
            - Hovered/keyboard-active row: `li.highlighted` — Chosen's
              gradient **`linear-gradient(#3875d7 20%, #2a62bc 90%)`**
              background with **white text** (the only colored element in
              the whole demo besides the default focus ring).
            - Filter match failure: `li.no-results` — **"No results match
              <query>"**, color `#777`, background `#f4f4f4`.
  - **Footer:** the original has NO footer; per monorepo convention add a
    minimal attribution footer linking `https://www.componentdock.com/`
    ("Component Dock") so every shipped template carries the required link.
- **Design tokens (all verified 2026-08-18 from the live stylesheets +
  live computed styles):**
  - **Page background:** `#efefef` (light gray) — `css/style.css` body
    rule, live-computed rgb(239,239,239).
  - **Fonts:** Roboto 400 (body/headings; 300 loaded but unused on the
    page). Load Roboto 300/400 via Google Fonts `<link>` in `index.html`.
  - **Heading:** h2 **"Multi-Select #10 (Limit to 5)"** → recreate as
    **"Sift (Limit to 5)"** (the source's h2 is the series counter + the
    limit feature label; keep the content-kind — a short centered title —
    with the new name and keep the "(Limit to 5)" suffix since the limit IS
    replicated): 20px, weight 400, color `#212529`, centered. The h2 text
    SHALL be wrapped in a `<label htmlFor>` targeting widget 1's select.
  - **Widget columns:** three centered `col-md-5` columns (445px content
    width at ≥768px; full-width on mobile), stacked vertically with ~1rem
    vertical spacing between the rows.
  - **Widget box:** white `#fff`, **no border**, `border-radius: 4px`,
    `box-shadow: 0 1px 4px 0 rgba(0,0,0,.1)`, `padding: 7px` inside,
    `cursor: text`, 445px wide (width 100% of the column).
  - **Chips:** flat tinted background per widget — widget 1 **`#e5e4cc`**,
    widget 2 **`#c7f0db`**, widget 3 **`#d3f4ff`** — `border: none`,
    `border-radius: 3px`, `box-shadow: none`, `padding: 7px 26px 7px 10px`,
    color `#333`, 13px line-height, `margin: 3px 5px 3px 0`; × close 12×12
    at `top: 9px; right: 8px`.
  - **Inline search input:** `height: 32px`, `font-size: 14px`, color
    `#999` (placeholder "Select Categories" / empty-with-chips), `border: 0`,
    transparent bg, auto-grow width; active state text `#222`.
  - **Menu:** white `#fff`, **no border**, `border-radius: 4px`,
    `margin-top: 3px`, **`box-shadow: 0 15px 30px 0 rgba(0,0,0,.2)`**, same
    width as the widget, `max-height: 240px` + internal scroll.
  - **Menu rows:** `padding: 5px 6px`, `line-height: 15px`, `font-size:
13px`; unselected `#444`; picked-rows-in-list `#ccc` (dimmed, cursor
    default); hover/keyboard-active gradient `#3875d7 → #2a62bc` with WHITE
    text; no-results row `#777` on `#f4f4f4`.
  - **Focus/active state:** `.chosen-container-active .chosen-choices` gets
    `box-shadow: 0 0 5px rgba(0,0,0,.3)` (the `#5897fb` border is suppressed
    by the custom `border: none !important`); input text flips to `#222`.
  - **Spacing:** page content padding `7rem 0` (112px) vertical.
- **Behaviors (live-verified 2026-08-18 on the real preview in a browser
  with REAL mouse clicks + scripted native-event picks — Chosen 1.8.7
  defaults with the limit option):**
  - **Open:** clicking a widget (the choices box / inline input) opens that
    widget's dropdown; typing in the inline input ALSO auto-opens the
    dropdown while filtering. Clicking the heading label focuses/opens
    widget 1.
  - **Pick: real-click on an option row adds its chip and CLOSES the
    dropdown** (live-verified on widget 1: clicking Design → beige chip +
    dropdown closed). The picked row STAYS in the list, dimmed `#ccc`
    (`.result-selected`, not clickable — verified via DOM: all 8 rows
    persist with the picked row carrying `result-selected`).
  - **Limit (THE signature behavior):** with **5 chips** present (verified:
    Design, HTML5, CSS3, jQuery, BS4 → chip count 5, all
    rgb(229,228,204)), clicking/activating a 6th option (Bootstrap) is
    **silently ignored** — the selection list still contains exactly 5; NO
    chip is added, no flash, no error row, and the search input is NOT
    disabled (filtering still works). Chosen only fires its internal
    `chosen:maxselected` event, which the demo does not handle. Note:
    clicking a chip's × to remove one frees a slot — the 6th option becomes
    pickable again.
  - **Close:** outside click, Escape, or Enter-on-highlighted closes; the
    input KEEPS FOCUS after a pick (typing reopens instantly).
  - **Filter:** typing in the inline input filters the 8 rows live by
    case-insensitive substring; a query matching nothing renders the single
    row **"No results match <query> "** (`#777` on `#f4f4f4`). The filter
    input value is cleared after a pick.
  - **Remove:** clicking a chip's × removes the chip and restores that
    option to full-strength `#444` in the list. Removing ALL chips from a
    widget returns its input to placeholder "Select Categories".
  - **Widget independence:** the three widgets are fully independent —
    picks, filters, the limit, and chip colors apply per widget; picking in
    widget 1 does not affect widgets 2/3.
  - **Keyboard:** arrows move the `.highlighted` row (same blue gradient +
    white text), Enter picks/activates the highlighted row, Escape closes.
    Arrow-key nav + Enter behave like an equivalent click (pick + close).
  - **Persistence:** selections persist across open/close and filter cycles.
  - **No select-all, no optgroups, no comma-joined button text, no brand
    accent color** — the ONLY colors are the three pastel chip tints, the
    blue row highlight, the default focus ring, and the gray/muted palette.
  - **Live computed values captured:** body bg rgb(239,239,239); h2 20px
    color rgb(33,37,41); content padding 112px 0; widget 445px; widget box
    bg white, border-width 0, radius 4px, shadow rgba(0,0,0,0.1) 0 1px 4px
    0, padding 7px; widget-1 chip bg rgb(229,228,204) = `#e5e4cc`,
    widget-2 chip bg rgb(199,240,219) = `#c7f0db`, widget-3 chip bg
    rgb(211,244,255) = `#d3f4ff`; chip border 0, radius 3px, shadow none,
    padding 7px 26px 7px 10px; chip × 12×12 at top 9px right 8px; input
    height 32px, 14px, color #999 (active #222); placeholder VALUE
    "Select Categories" (widgets 2/3 at rest); menu shadow
    rgba(0,0,0,0.2) 0 15px 30px 0, radius 4px, mt 3px, border 0; row padding
    5px 6px, color #444 / picked #ccc / hover rgb(56,117,215) bg =
    `#3875d7` gradient white text; no-results rgb(119,119,119) on
    rgb(244,244,244); limit blocks at 5 with input still enabled.
- **Screenshot (`multiselect-20.jpg`, 1200×972 AVIF, browser-verified
  2026-08-18):** LIGHT-GRAY page, centered dark 20px "Multi-Select #10
  (Limit to 5)" heading, and THREE stacked widgets in the same centered
  column: the top widget shows two chips (**CSS3, jQuery**), the middle one
  chip (**Design**), and the bottom one three chips (**jQuery, CSS3,
  FrontEnd**) with its dropdown OPEN beneath it (rows Design, HTML5, CSS3,
  jQuery, Bootstrap, WordPress, FrontEnd — a highlighted row among them).
  All chips appear as pale pastel tags with small × icons; the boxes are
  white, rounded, with the soft drop shadow. Per the stylesheet (used in
  this demo, unlike Multiselect 19) the tint order is widget 1 beige
  `#e5e4cc`, widget 2 mint `#c7f0db`, widget 3 sky `#d3f4ff` — the
  screenshot's pastel chips match these classes. (The pre-picked chip sets
  in the screenshot are a demo state — the live page loads with zero picks;
  the visible behavior matches the live DOM.) Do NOT hard-code the
  screenshot's picked values as initial state; widgets start empty like the
  live preview.

## Design tokens

| Token                | Value                        | Notes                                                                           |
| -------------------- | ---------------------------- | ------------------------------------------------------------------------------- |
| `--color-page`       | `#efefef`                    | Light-gray page background                                                      |
| `--color-ink`        | `#212529`                    | Heading text                                                                    |
| `--color-chip-1`     | `#e5e4cc`                    | Widget 1 chip background (`.color-1` — pale beige/tan)                          |
| `--color-chip-2`     | `#c7f0db`                    | Widget 2 chip background (`.color-2` — pale mint green)                         |
| `--color-chip-3`     | `#d3f4ff`                    | Widget 3 chip background (`.color-3` — pale sky blue)                           |
| `--color-chip-text`  | `#333`                       | Chip label color (all widgets)                                                  |
| `--color-input`      | `#999`                       | Inline search input text / placeholder "Select Categories" (active: `#222`)     |
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
| `--max-selections`   | `5`                          | Per-widget selection limit (silent block at 6th pick)                           |
| `--options`          | 8 items                      | Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd (no optgroups) |

## Requirements

### Requirement: Page layout

The system SHALL render a single-page centered layout on a light-gray
background with a heading and THREE stacked multiselect widget columns.

#### Scenario: Page shell

- **GIVEN** the Sift app is rendered
- **THEN** the page background SHALL be `#efefef`
- **AND** the page font SHALL be Roboto (300/400, loaded from Google Fonts)
- **AND** the content area SHALL have `7rem` (112px) vertical padding

#### Scenario: Centered heading

- **GIVEN** the Sift app is rendered
- **THEN** a centered h2 heading reading **"Sift (Limit to 5)"** SHALL
  render at 20px, color `#212529`
- **AND** the heading text SHALL be wrapped in a `<label htmlFor>` that
  targets the FIRST widget's select (clicking the heading focuses widget 1)
- **AND** the heading SHALL sit directly above the widget columns

#### Scenario: Three widget columns

- **GIVEN** the Sift app is rendered
- **THEN** exactly THREE multiselect widgets SHALL render stacked
  vertically, each in a centered column equivalent to Bootstrap's
  `col-md-5` (≈445px content width at desktop, full width on small screens)
- **AND** the vertical spacing between the three widget rows SHALL be ~1rem

### Requirement: Option list

The system SHALL offer the eight categories of the original as a single
ungrouped list in each widget, with no optgroups and no values.

#### Scenario: Eight ungrouped options per widget

- **GIVEN** the Sift app is rendered
- **WHEN** the user opens any widget's dropdown
- **THEN** the menu SHALL list exactly these eight options in order:
  **Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd**
- **AND** the list SHALL have NO optgroup headers and NO dividers

#### Scenario: Menu is a scrollable dropdown

- **GIVEN** a widget's menu is open
- **THEN** the menu SHALL be a white box with NO border, `4px` corner
  radius, `margin-top: 3px`, and a `0 15px 30px rgba(0,0,0,.2)` drop shadow
- **AND** the menu width SHALL equal the widget box width
- **AND** the menu SHALL cap at `240px` height with an internal vertical
  scrollbar
- **AND** unpicked rows SHALL render at `5px 6px` padding, 13px, color
  `#444`

### Requirement: Widget boxes and tinted chips

The system SHALL render three identical Chosen-style borderless widget boxes
whose chips are tinted per-widget (`#e5e4cc` beige, `#c7f0db` mint,
`#d3f4ff` sky), each with an inline search input.

#### Scenario: Borderless widget box (all three)

- **GIVEN** the Sift app is rendered
- **THEN** each widget SHALL be a white box with NO border, `4px` corner
  radius, a `0 1px 4px rgba(0,0,0,.1)` drop shadow, and `7px` inner padding

#### Scenario: Per-widget chip tint

- **GIVEN** at least one option is picked in each widget
- **THEN** the first widget's chips SHALL render with background
  `#e5e4cc` (pale beige)
- **AND** the second widget's chips SHALL render with background `#c7f0db`
  (pale mint green)
- **AND** the third widget's chips SHALL render with background `#d3f4ff`
  (pale sky blue)

#### Scenario: Chip appearance (shared)

- **GIVEN** at least one option is picked
- **THEN** each chip SHALL render flat (`NO` border, NO shadow, `3px`
  radius, `7px 26px 7px 10px` padding, dark `#333` text) on its widget's
  tint
- **AND** each chip SHALL carry a small × close control at its right edge
  (12×12, positioned `top: 9px; right: 8px`)
- **AND** the chips SHALL sit left-to-right inside the widget box in pick
  order, with the inline search input after them

#### Scenario: Inline search input

- **GIVEN** the Sift app is rendered
- **THEN** each widget SHALL contain an inline text input (32px tall, 14px
  font, `#999` text) after the chips
- **AND** with zero chips the input SHALL show the placeholder **"Select
  Categories"**
- **AND** the input SHALL keep focus after a pick so typing filters the
  list immediately
- **AND** when the widget is active, the input text SHALL flip to `#222`

### Requirement: Selection limit (Limit to 5)

The system SHALL enforce a per-widget maximum of FIVE selections; the sixth
pick SHALL be silently ignored without disabling the widget.

#### Scenario: Five selections allowed

- **GIVEN** a widget with fewer than five chips
- **WHEN** the user picks an option
- **THEN** the pick SHALL succeed (chip added, row dimmed, dropdown closed)

#### Scenario: Sixth pick silently blocked

- **GIVEN** a widget with exactly five chips present
- **WHEN** the user clicks/activates a sixth option
- **THEN** no new chip SHALL appear
- **AND** the selection count SHALL remain five
- **AND** the search input SHALL remain enabled (filtering still works)
- **AND** no error message, flash, or visual feedback SHALL appear

#### Scenario: Limit freed by removal

- **GIVEN** a widget at the five-chip limit
- **WHEN** the user removes one chip via its ×
- **THEN** a previously blocked option SHALL become pickable again

### Requirement: Interactions

The system SHALL replicate the Chosen 1.8.7 interaction model: open on
click/type, close-on-select, live filtering, chip removal, keyboard
navigation, and widget independence.

#### Scenario: Open and close

- **GIVEN** the Sift app is rendered
- **WHEN** the user clicks a widget box or types in its inline input
- **THEN** that widget's dropdown SHALL open
- **AND** the dropdown SHALL close on outside click, Escape, or
  Enter-on-highlighted

#### Scenario: Pick closes the dropdown

- **GIVEN** a widget's dropdown is open
- **WHEN** the user clicks an unpicked option row
- **THEN** the option SHALL be added as a chip
- **AND** the dropdown SHALL close
- **AND** the picked row SHALL stay in the list, dimmed `#ccc` and not
  clickable

#### Scenario: Live filter

- **GIVEN** a widget's dropdown is open
- **WHEN** the user types in the inline input
- **THEN** the rows SHALL filter live by case-insensitive substring
- **AND** a query matching nothing SHALL render the single row **"No
  results match &lt;query&gt;"** in `#777` on `#f4f4f4`
- **AND** the filter input value SHALL be cleared after a pick

#### Scenario: Chip removal

- **GIVEN** a widget with at least one chip
- **WHEN** the user clicks a chip's ×
- **THEN** the chip SHALL be removed
- **AND** its option SHALL return to full-strength `#444` in the list
- **AND** removing the last chip SHALL restore the "Select Categories"
  placeholder

#### Scenario: Keyboard navigation

- **GIVEN** a widget's dropdown is open
- **WHEN** the user presses arrow keys
- **THEN** the blue-gradient highlight SHALL move between rows
- **AND** pressing Enter SHALL pick the highlighted row (chip + close,
  equivalent to a click)
- **AND** pressing Escape SHALL close the dropdown

#### Scenario: Widget independence

- **GIVEN** chips are picked in one widget
- **WHEN** the user interacts with another widget
- **THEN** widgets SHALL share no state (picks, filters, and the limit are
  enforced per widget)

### Requirement: Accessibility

The system SHALL expose the multiselect widgets accessibly while keeping the
source's visible behavior.

#### Scenario: Accessible comboboxes

- **GIVEN** the Sift app is rendered
- **THEN** each widget SHALL expose `role="combobox"` (or equivalent
  listbox pattern) with `aria-expanded` reflecting its menu state
- **AND** the heading label SHALL be programmatically associated with the
  first widget's combobox (`htmlFor`/`id` pairing)
- **AND** each chip's × SHALL be an accessible button with an aria-label
  (e.g. "Remove Design")

### Requirement: Footer

The system SHALL include the required attribution footer.

#### Scenario: Component Dock credit

- **GIVEN** the Sift app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/ branded
  as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- sift` green: typecheck → lint → vitest (100%
      coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/bootstrap/multiselect-20/:
      heading (20px, `#212529`, centered, label-bound), three 445px white
      boxes with 4px radius + soft shadows, chips tinted beige `#e5e4cc` /
      mint `#c7f0db` / sky `#d3f4ff`, 8 rows per menu (`#444`, 13px, 5px
      6px), blue gradient row highlight, `#ccc` dimmed picked rows, "No
      results match <query>", placeholder "Select Categories" (`#999`).
- [ ] Live behavior: click-pick closes dropdown; 5 picks then 6th silently
      blocked (input still usable); × removes chip and frees a slot; filter
      typing; arrow+Enter pick; Escape/outside close; widgets independent.
- [ ] No ColorLib strings anywhere under `apps/sift` (source/provenance
      lives only in this spec + TEMPLATES.md + the PR). Footer links
      https://www.componentdock.com/.
- [ ] `public/CNAME` = `sift.free.componentdock.com`; `"homepage"` =
      `https://sift.free.componentdock.com`.
- [ ] Workspace registered in `package-lock.json` (`grep -c
    "free-react-templates/sift" package-lock.json` ≥ 1) after `npm
    install` at root.
- [ ] PR `feat/template-sift` description includes: source URL
      (https://colorlib.com/wp/template/multiselect-20/), preview URL (the
      `/theme/bootstrap/` one), the token list, and what differs (renames,
      paraphrased heading "Sift (Limit to 5)", no icomoon, Roboto Google
      Font, lucide/CSS close ×, Component Dock footer).
