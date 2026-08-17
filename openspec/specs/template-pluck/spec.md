# Template: Pluck (Bootstrap Multiselect — Chosen Widget)

## Purpose

Pluck is a single-page multiselect-dropdown component demo in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Multiselect 08" free template (source:
https://colorlib.com/wp/template/multiselect-08/), built under a DIFFERENT
name (**Pluck** — the eighth of the selection-themed names for this
Bootstrap Multiselect UI series, after Picker/Sifter/Winnow/Cull/Glean/
Garner/Reap; "to pluck" is to pick or select from a group, continuing the
gathering-verb theme of the series), with the monorepo stack: Vite + React
19 + Tailwind CSS 4 + TypeScript.

The original is a minimal, centered demo page (Bootstrap 4.3.1 +
**Chosen 1.4.2** — NOTE: unlike Multiselect 01–04, which use the
bootstrap-multiselect plugin (green `#52de97`, "Select all" row), unlike
Multiselect 05, which uses select2 (orange `#fd5f00`, search + tags +
clear-all), unlike Multiselect 06, which uses a custom hand-rolled
`.selectMultiple` jQuery widget (deep orange `#f16821`), and unlike
Multiselect 07, which uses Semantic UI's dropdown widget (rose `#e8647c`),
**Multiselect 08 uses Chosen's `chosen.jquery` widget** (brand lime
`#a7d129` — a FIFTH widget family in the series): a `section.ftco-section`
with a centered `h2.heading-section` "Multiselect #08", and below it a
single Chosen multiple-select for **NFL teams** — 8 optgroups (NFC
EAST/NORTH/SOUTH/WEST + AFC EAST/NORTH/SOUTH/WEST) × 4 teams each = 32
options, with a `data-placeholder` "Your Favorite Football Teams". Picked
teams become translucent dark-grey chips (`rgba(0,0,0,0.1)`) with dark
text and an × close; the closed box and the dropdown carry a lime
`#a7d129` 1px border; hovering an option highlights it SOLID lime
`#a7d129` with white text; optgroup headers sit on a faint grey strip
(`rgba(0,0,0,0.05)`); and — unlike every sibling — the widget HAS a live
search box inside the control (Chosen always renders one in multiple
mode). A normal click-select CLOSES the dropdown (Chosen multiple
behavior, unlike Semantic 07); Ctrl/Cmd+click selects without closing.
There is NO field label above the box (the placeholder carries the
prompt, unlike 07's "Select Topics" label), NO "Select all" row, and NO
clear-all button. The whole template is ONE interactive surface — the
multiselect control. Pluck recreates that structure 1:1 with matching
layout, tokens, typography, and content (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Multiselect 08". Listed in TEMPLATES.md under
  **Bootstrap Multiselect (20)** (section header line 821; row at line
  830). Free multiselect-dropdown component template. The `multiselect-08`
  slug appears exactly ONCE in TEMPLATES.md (no dup rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-17 by direct fetch AND
  screenshot cross-check):** the default preview URL
  `https://preview.colorlib.com/theme/multiselect-08/` returns 404 (9
  bytes); the REAL preview URL (same `/theme/bootstrap/` prefix as the rest
  of the Bootstrap UI series, e.g. Multiselect 01–07, Modal 01–20) is
  `https://preview.colorlib.com/theme/bootstrap/multiselect-08/` (HTTP 200,
  5,506 bytes — the entire page is 92 lines). Stylesheets: `css/style.css`
  (**220,581 bytes = CUSTOMIZED Bootstrap 4.3.1** + a custom Chosen token
  tail — the last ~100 lines, from ~line 8135 on, are the real token
  source, extracted below), Chosen 1.4.2 `chosen.css` from the cdnjs CDN
  (the widget's default chrome: box, chips, results, icons) and
  font-awesome 4.7 (loaded in the head but **UNUSED on this page** — the
  widget's chevron/× icons come from Chosen's own `chosen-sprite.png`,
  not FA glyphs; do NOT load an icon font, use lucide icons instead).
  **Lato** (300/400/700) via cf-fonts @font-face blocks in the head — the
  custom tail sets `body { font-family: "Lato", Arial, sans-serif;
font-size: 16px; line-height: 1.8; background: #fff; color: gray }` and
  `h1–h5, .h1–.h5 { line-height: 1.5; font-weight: 400; font-family:
"Lato", ...; color: #000 }`. Scripts: `js/jquery.min.js`, `js/popper.js`,
  `js/bootstrap.min.js`, Chosen 1.4.2 `chosen.jquery.js` (CDN), and
  `js/main.js` — 189 bytes, does TWO things: `$('.chosen-select').chosen();`
  (the ONE real init — stock Chosen 1.4.2 multiple-select semantics) and a
  no-op `$('.chosen-select-deselect').chosen({ allow_single_deselect:
true })` that matches nothing on this page. All widget behavior is stock
  Chosen. Screenshot (`multiselect-08.jpg`, 1200×972, browser-verified
  2026-08-17): white page, centered dark "Multiselect #08" heading, and the
  widget OPEN — the Chosen box with a search field inside, showing the
  option list with an NFC NORTH group header on a faint grey strip, and the
  "Chicago Bears" row highlighted SOLID LIME (hover state); clean,
  utilitarian component-demo aesthetic; lime `#a7d129` is the accent hue
  (plus Chosen's default focus-blue `#5897fb` on the ACTIVE box border);
  the screenshot shows the pristine open state, no chips selected yet
  (chip appearance derived from the CSS tokens below).
- **Live DOM structure (1:1):**
  - `section.ftco-section` (`padding: 7em 0` — nothing else; page bg stays
    `#fff`) → `div.container` → two `div.row.justify-content-center`:
    1. `div.col-md-6.text-center.mb-5` → `h2.heading-section` —
       "Multiselect #08" (custom: `font-size: 28px; color: #000`; inherits
       Lato, weight 400).
    2. `div.col-lg-6.d-flex.justify-content-center.align-items-center` →
       a native `select.chosen-select[multiple]` with
       `data-placeholder="Your Favorite Football Teams"` and
       `tabindex="6"` (Chosen hides the raw select after init and renders
       the visible widget). Options: `<option value=""></option>`
       (Chosen placeholder marker — do NOT recreate; the placeholder
       string comes from `data-placeholder`) followed by 8 optgroups × 4
       teams: NFC EAST (Dallas Cowboys, New York Giants, Philadelphia
       Eagles, Washington Redskins), NFC NORTH (Chicago Bears, Detroit
       Lions, Green Bay Packers, Minnesota Vikings), NFC SOUTH (Atlanta
       Falcons, Carolina Panthers, New Orleans Saints, Tampa Bay
       Buccaneers), NFC WEST (Arizona Cardinals, St. Louis Rams, San
       Francisco 49ers, Seattle Seahawks), AFC EAST (Buffalo Bills, Miami
       Dolphins, New England Patriots, New York Jets), AFC NORTH (Baltimore
       Ravens, Cincinnati Bengals, Cleveland Browns, Pittsburgh Steelers),
       AFC SOUTH (Houston Texans, Indianapolis Colts, Jacksonville
       Jaguars, Tennessee Titans), AFC WEST (Denver Broncos, Kansas City
       Chiefs, Oakland Raiders, San Diego Chargers).
       QUIRK: the FIRST optgroup (NFC EAST) is missing its closing
       `</optgroup>` tag in the source HTML — browsers auto-close it at the
       next `<optgroup>`. Recreate the DATA as well-formed groups (8×4);
       do not replicate the malformed markup.
  - No navbar, no other sections, no footer in the source (the mandatory
    Component Dock footer is a monorepo-convention addition).
- **Widget chrome (Chosen 1.4.2 defaults + the custom tail):**
  - Closed box `.chosen-choices` (Chosen renders the multi input box as a
    `ul.chosen-choices`): CUSTOM `border: 1px solid #a7d129`, `padding:
5px 10px`, `box-shadow: none`, `background-image: none`, `line-height:
3` (TALL box — approx 3× the 14px text), `border-radius: 4px`,
    `width: 100%` (`.chosen-container { width: 100% !important }`).
    Default Chosen box shadow/background removed by the tail.
  - Placeholder text (nothing selected, search empty): grey `#999999`,
    rendered by the search-field input's default value (`.default` class)
    or the placeholder styling — muted grey, 14px input font.
  - ACTIVE (open/focused) box: **Chosen default stays — NOT lime** —
    `.chosen-container-active .chosen-choices { border: 1px solid #5897fb;
box-shadow: 0 0 5px rgba(0, 0, 0, 0.3) }` (the tail does NOT override
    this). So: closed border lime, open/focused border Chosen-blue
    `#5897fb` + soft glow — a deliberate quirk to reproduce.
  - Chevron: Chosen's sprite arrow (down closed / up open) at the right
    edge of the box (`chosen-sprite.png` background-position -42px -10px;
    rotate sprite for open state). Replace with lucide `ChevronDown` /
    `ChevronUp`.
  - Dropdown `.chosen-drop`: CUSTOM `margin-top: 2px`, `border: 1px solid
#a7d129`, `box-shadow: none`, `border-radius: 4px` (Chosen default
    shadow `0 4px 5px rgba(0,0,0,0.15)` and `0 0 3px white inset, 0 1px
1px rgba(0,0,0,0.1)` removed). White background.
  - Option rows `.chosen-results li`: CUSTOM `transition: 0.3s` (disabled
    under `prefers-reduced-motion`), `padding: 10px`, `font-size: 14px`;
    group options (teams) additionally default `padding-left: 15px`.
    No row separators (unlike 07's `#ef90a2` rules) and no per-row icons —
    plain text rows.
  - Hovered/highlighted row `.chosen-results li.highlighted`: CUSTOM flat
    `background: #a7d129` (replaces Chosen's default blue gradient
    `#3875d7`→`#2a62bc`); text stays WHITE `#fff` (Chosen default).
  - Optgroup headers `.chosen-results li.group-result`: CUSTOM
    `padding-top/bottom: 15px`, `font-size: 17px`, `background:
rgba(0,0,0,0.05)` (faint grey strip across the full menu width).
    Header rows are NOT selectable (Chosen default; non-interactive).
  - Search input `.search-field input[type="text"]`: CUSTOM `font-size:
14px`; Chosen default: height 25px, `margin: 1px 0`, transparent,
    borderless, no shadow; the input lives INSIDE the choices box at the
    left (before the chips); its placeholder text (`.default`) is `#999`;
    typed text `#444` (Chosen default).
  - Selected chips `.search-choice` (CUSTOM): `border: none`, `padding:
10px 25px 10px 10px`, `background: rgba(0,0,0,0.1)` (translucent dark
    grey pill — NOT Chosen's default `#eeeeee`-gradient chip with `#aaa`
    border, NOT lime), `background-image: none`, `box-shadow: none`,
    `border-radius: 2px`, `font-size: 14px`, text color `#333` (Chosen
    default), `margin: 3px 5px 3px 0`, inline flow before the search
    field; the × close (`.search-choice-close`, sprite) sits at
    `top: 11px; right: 8px` (custom). Hover on × uses the red sprite
    variant (`chosen-sprite.png` -42px -10px → red on hover via
    background-position swap; replace with a lucide `X`).
  - No-results row `li.no-results`: Chosen default `color: #777;
background: #f4f4f4; display: list-item`; default text "No results
    match" + the search term in a `<span>`.
- **Behavior (stock Chosen 1.4.2 multiple-select semantics, VERIFIED in
  chosen.jquery.js):**
  - The menu shows ONLY the unselected set: `include_option_in_results`
    returns false for `option.selected` in multiple mode (default
    `display_selected_options=false`) and for the empty placeholder
    option (`option.empty`). Selecting moves a row into a chip; chip ×
    re-inserts the row into the menu.
  - A normal click (or Enter) on a highlighted row selects it and then
    calls `results_hide()` — **the dropdown CLOSES on select** (unlike
    Semantic 07, which stays open). The search field is cleared
    (`search_field.val("")`).
  - **Ctrl/Cmd+click selects WITHOUT closing** (Chosen's multi-add
    power feature): `if (!((evt.metaKey || evt.ctrlKey) && this.is_multiple))
{ this.results_hide(); }` — replicate both paths.
  - Opening: clicking the box / focusing the search field shows the
    dropdown (`results_showing = true`), the box border turns Chosen
    focus-blue `#5897fb` + glow, and the chevron flips up.
  - Search: typing filters options by case-insensitive substring
    (`option.search_text`); optgroup headers remain visible while any of
    their options match; a group with no matches hides its header;
    zero matches shows the "No results match" row. Clearing the search
    restores the full list. NOTE: Chosen's search does NOT match group
    header names, only option text.
  - Keyboard: ↑/↓ move the highlight (`result_highlight`), Enter selects
    the highlighted row, Escape closes (`close_field`), Tab/blur closes,
    clicking outside the container closes (document mousedown handler).
  - Closing (Escape/outside/blur) preserves chips (selection state lives
    on the hidden select's options; chips and menu re-render from it).
  - Chips: × click removes the chip and re-inserts its row into the
    menu; the grey placeholder "Your Favorite Football Teams" shows only
    while NO chip exists (`.chosen-choices` default value) and disappears
    with the first selection.
  - NO "Select all" row (bootstrap-multiselect feature of 01–04), NO
    clear-all button (select2 feature of 05), NO max-selection limit
    (Chosen `max_selected_options` defaults to 0 = unlimited).
- **QUIRK — hidden native `<select>`:** the visible control is entirely
  Chosen-rendered; the native `select[multiple]` exists only as the data
  source. In the recreation, build the listbox from real state: a trigger
  with `aria-haspopup="listbox"` + `aria-expanded`, a `role="listbox"`
  panel whose options expose real selected state, and a real search input
  (documented improvement over the source, same as the sibling specs).
- **Quirk — deliberately mixed chrome colors:** closed box border lime
  `#a7d129` but ACTIVE box border Chosen-blue `#5897fb` + glow (the tail
  overrides only the closed state). Reproduce both states exactly; note
  the discrepancy in the PR so the implementer does not "fix" it to all-lime.
- **Design tokens (full list):** brand **`#a7d129`** (lime — closed box
  border, dropdown border, highlighted-row background [white text], link
  color, `.bg-primary`), focus/active border + glow **`#5897fb`** /
  `rgba(0,0,0,0.3)` (Chosen default, UNCHANGED), chips
  **`rgba(0,0,0,0.1)`** bg with `#333` text and 2px radius, group-header
  strip **`rgba(0,0,0,0.05)`** (17px text, 15px padding), page bg
  **`#fff`**, heading `#000` 28px Lato 400, body gray Lato 16px/1.8,
  placeholder + search text `#999999`, typed search text `#444`, no-results
  `#777` on `#f4f4f4`, option rows 14px with 10px padding (+15px left for
  group options), box `line-height: 3` + `padding: 5px 10px` + 4px radius.
- **Screenshot (`multiselect-08.jpg`, 1200×972) browser-verified
  2026-08-17:** white page, centered dark "Multiselect #08" heading, open
  Chosen dropdown with a search field in the box, an NFC NORTH group
  header on a faint grey strip, option rows, and the "Chicago Bears" row
  highlighted solid lime; NO chips selected in the shot (pristine state);
  no other page content. Lime `#a7d129` is the only page-level hue.

## Requirements

### Requirement: Heading section

The system SHALL render a centered heading section on a white page.

#### Scenario: Centered heading

- **GIVEN** the Pluck app is rendered
- **WHEN** the page loads
- **THEN** a white (`#fff`) page SHALL show a centered heading "Pluck" (the
  new brand name in place of the source's "Multiselect #08" demo label) at
  ~28px in `#000`
- **AND** the heading SHALL use the Lato font family at weight 400 with
  line-height 1.5
- **AND** the page SHALL have generous vertical padding (~112px — the
  source's `ftco-section` 7em) above and below the content
- **AND** the control column SHALL be centered horizontally and fluid
  (~`col-lg-6` width — noticeably wider than 07's `col-lg-4`) with NO
  field label (the placeholder inside the box is the prompt; there is no
  "Select Topics"-style label in this template)

### Requirement: Multiselect control

The system SHALL render the closed multiselect box with a placeholder and a
chevron.

#### Scenario: Closed selection box with placeholder

- **GIVEN** the heading renders
- **WHEN** the control area displays
- **THEN** a white selection box SHALL render with a 1px lime `#a7d129`
  border, 4px radius, ~5px/10px padding, tall `line-height` (~3), 14px
  text, and full column width (`width: 100%`)
- **AND** the grey (`#999999`) placeholder text "Your Favorite Football
  Teams" SHALL be visible inside the box (no selections yet)
- **AND** a chevron SHALL sit at the right of the box pointing DOWN
  (closed state)
- **AND** the control SHALL have `aria-haspopup="listbox"` and
  `aria-expanded="false"` initially
- **AND** NO chips SHALL render (the demo starts with no selection)

#### Scenario: Dropdown opens revealing grouped options

- **WHEN** the user activates the control (click on the box or chevron)
- **THEN** the box border SHALL turn Chosen focus-blue `#5897fb` with the
  soft glow (`0 0 5px rgba(0,0,0,0.3)`), `aria-expanded` SHALL flip to
  `true`, and the chevron SHALL point UP
- **AND** a white dropdown SHALL appear below the box (1px lime `#a7d129`
  border, 4px radius, `margin-top 2px`, NO shadow)
- **AND** the dropdown SHALL list all 32 team options grouped under 8
  optgroup headers — NFC EAST, NFC NORTH, NFC SOUTH, NFC WEST, AFC EAST,
  AFC NORTH, AFC SOUTH, AFC WEST — header rows styled on a faint grey
  strip (`rgba(0,0,0,0.05)`, 17px, ~15px vertical padding, NOT selectable)
  and team rows indented 15px (14px, 10px padding, no row rules, no icons)
- **AND** NO option SHALL be pre-selected initially (no chips)

### Requirement: Search box

The system SHALL provide a live search input inside the control (Chosen
always renders one in multiple mode — unlike the Semantic-UI sibling 07,
which has none).

#### Scenario: Filtering options by search term

- **GIVEN** the dropdown is open
- **WHEN** the user types "cow" into the search field inside the box
- **THEN** the option list SHALL filter to options whose text contains
  "cow" case-insensitively (of the 32 teams only "Dallas Cowboys" matches)
- **AND** optgroup headers SHALL remain visible only while at least one of
  their options matches (e.g. "cow" keeps only NFC EAST's header; groups
  with no match hide entirely)
- **AND** when zero options match, a "No results match" row SHALL render
  (grey `#777` text on `#f4f4f4` background)
- **AND** clearing the search SHALL restore the full 32-option list
- **AND** the search SHALL match option text only, NOT group header names

#### Scenario: Search input chrome

- **GIVEN** the Pluck app is rendered
- **WHEN** the control displays
- **THEN** the search input SHALL be borderless and transparent (14px
  text), sit at the LEFT of the choices box, and render the grey
  `#999999` placeholder "Your Favorite Football Teams" while the box is
  empty
- **AND** typed text SHALL render in Chosen default `#444`

### Requirement: Selection behavior

The system SHALL render selected options as chips, remove them from the
menu, and close the dropdown on a plain click (Chosen semantics — opposite
of the Semantic sibling 07, which stays open).

#### Scenario: Selecting an option with a plain click

- **GIVEN** the dropdown is open
- **WHEN** the user clicks the "Chicago Bears" row
- **THEN** a chip "Chicago Bears" SHALL appear in the box (translucent
  dark-grey pill `rgba(0,0,0,0.1)`, `#333` text, 2px radius, ~10px
  padding, with an × close that has an accessible name)
- **AND** the row "Chicago Bears" SHALL disappear from the menu (the menu
  shows ONLY the unselected options — verified in chosen.jquery.js
  `include_option_in_results`)
- **AND** the dropdown SHALL CLOSE (verified: Chosen calls
  `results_hide()` on a plain select in multiple mode)
- **AND** the search field SHALL clear
- **AND** the placeholder "Your Favorite Football Teams" SHALL hide once
  at least one chip exists

#### Scenario: Selecting with Ctrl/Cmd+click keeps the dropdown open

- **GIVEN** the dropdown is open
- **WHEN** the user Ctrl/Cmd+clicks the "Chicago Bears" row then the
  "Dallas Cowboys" row
- **THEN** two chips SHALL appear and the dropdown SHALL STAY open
  (verified: Chosen skips `results_hide()` when `metaKey || ctrlKey` in
  multiple mode)
- **AND** both rows SHALL disappear from the menu

#### Scenario: Deselecting options

- **GIVEN** at least one chip is in the box and the dropdown is closed
- **WHEN** the user clicks a chip's ×
- **THEN** the chip SHALL disappear from the box
- **AND** its option row SHALL re-appear in the menu (verified:
  deselection re-inserts the row)
- **AND** when the LAST chip is removed, the placeholder "Your Favorite
  Football Teams" SHALL become visible again

### Requirement: Dropdown dismissal

The system SHALL close the dropdown on Escape, outside click, or blur
while preserving selections.

#### Scenario: Close interactions

- **GIVEN** the dropdown is open with one or more selections
- **WHEN** the user presses Escape, clicks outside the control, or tabs
  away (blur)
- **THEN** the panel SHALL close, the box border SHALL return to lime
  `#a7d129` (closed state), the chevron SHALL point DOWN again, and
  `aria-expanded` SHALL return to `false`
- **AND** selections SHALL be preserved across open/close cycles (closing
  never clears chips)

### Requirement: Keyboard navigation

The system SHALL support keyboard selection via the listbox.

#### Scenario: Arrow keys and Enter

- **GIVEN** the dropdown is open
- **WHEN** the user presses ArrowDown twice then Enter on the
  "Philadelphia Eagles" row
- **THEN** the highlighted row SHALL move down with each ArrowDown
  (highlight style = solid lime `#a7d129` with white text)
- **AND** Enter SHALL select the highlighted option (chip appears, row
  leaves the menu, dropdown closes) — same as a plain click

### Requirement: No select-all / no clear-all / no max limit

The system SHALL NOT add controls the source does not have.

#### Scenario: Absent controls

- **GIVEN** the Pluck app is rendered
- **WHEN** the control opens
- **THEN** the widget SHALL contain NO "Select all" row (unlike Multiselect
  01–04's bootstrap-multiselect)
- **AND** the widget SHALL have NO clear-all button (unlike Multiselect
  05's select2 variant)
- **AND** the widget SHALL accept an unlimited number of selections (Chosen
  `max_selected_options` defaults to 0 = unlimited)

### Requirement: Page composition

The system SHALL compose the page with a main landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Pluck app is rendered
- **WHEN** the page loads
- **THEN** the heading and the multiselect control SHALL render in the
  main landmark
- **AND** the document title SHALL be "Pluck — Multiselect Dropdown"

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Pluck app is rendered
- **WHEN** the footer displays
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text)

## Verification checklist

- [ ] `openspec/specs/template-pluck/spec.md` exists on main with the full
      section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/pluck/tasks.md` exists on main with design notes and
      the implementation task outline.
- [ ] Fidelity: structure matches the Multiselect 08 preview DOM 1:1
      (centered 28px black Lato heading → fluid `col-lg-6` control column →
      Chosen multiple-select box (lime `#a7d129` 1px border, 4px radius,
      tall line-height, chevron) → white dropdown (lime border, no shadow)
      with 8 optgroup headers on `rgba(0,0,0,0.05)` strips + 32 indented
      team rows → translucent `rgba(0,0,0,0.1)` chips with ×) on a white
      `#fff` page with `ftco-section`-style 7em padding.
- [ ] Design tokens captured: brand `#a7d129` lime (closed box + dropdown
      border, highlighted-row bg with white text, link color), Chosen
      focus-blue `#5897fb` + `0 0 5px rgba(0,0,0,0.3)` glow on ACTIVE box,
      chips `rgba(0,0,0,0.1)` bg / `#333` text / 2px radius, group-header
      strip `rgba(0,0,0,0.05)`, page `#fff`, heading `#000` 28px Lato 400,
      body gray Lato 16px/1.8, placeholder/search `#999999`, typed text
      `#444`, no-results `#777` on `#f4f4f4`.
- [ ] Behavior captured: menu = unselected set (verified in
      chosen.jquery.js), plain click-select CLOSES the dropdown (unlike
      Semantic 07), Ctrl/Cmd+click keeps it open, search filters
      options/headers + "No results match", chip × re-inserts row,
      placeholder hides while ≥1 chip, close on Escape/outside/blur,
      selections persist, keyboard ArrowDown/Enter selection, NO
      select-all/clear-all/max limit, native select hidden (listbox a11y
      lift).
- [ ] Name collision check: `pluck` free in `apps/`, `openspec/specs/`,
      `docs/templates/`, TEMPLATES.md (verified 2026-08-17).
