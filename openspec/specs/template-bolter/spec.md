# Template: Bolter (Multiselect Dropdown)

## Purpose

Bolter is a single-page multiselect-dropdown component demo in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Multiselect 15" free template (source:
https://colorlib.com/wp/template/multiselect-15/), built under a DIFFERENT
name (**Bolter** — the fifteenth of the selection/separating-themed names
for this series, after Picker (01), Sifter (02), Winnow (03), Cull (04),
Glean (05), Garner (06), Reap (07), Pluck (08), Thresh (09), Sickle (10),
Scythe (11), Sheaf (12), Sieve (13), Fanner (14); a bolter is a machine
that sifts and separates grain/flour by bolting (sieving) through a cloth —
exactly what a multiselect filter does — and continues the winnowing
metaphor right after Fanner (a winnowing basket), per the monorepo naming
mandate: never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a minimal, centered demo page (Bootstrap 4 grid + the
**jQuery-MultiSelect v2.4.18 plugin by Patrick Springstubbe / nobleclem** +
jQuery 3.3.1 + Popper): a `div.content` (padding 7rem 0) on a **light-gray
`#efefef` page** with a centered `h2` "Multi-Select #5" and a SINGLE
multi-select widget in a centered `col-md-5` column (≈475px — WIDER than
Fanner's `col-md-3`). The widget is a custom-styled `<button>` (white, **NO
border, 4px radius**, 40px tall, tiny shadow) showing either the
placeholder "Select States" (gray `#aaa`) or the comma-joined list of
selected states (dark `#333`, or **"N selected"** once the joined text
overflows the button or more than 10 are selected); clicking the button
toggles a **floating white panel** (NO border, 4px radius, SAME width as
the button — NO min-width overflow like Fanner, `margin-top: 12px`, big
`0 15px 30px` shadow, `padding: 20px`) that contains a **search box**
("Search States", underline-only bottom border), an uppercase gray
**"SELECT ALL"** toggle, and the **US-states list laid out in 3 CSS
columns** (50 options, Alabama → Wyoming, each row a label + native
checkbox; selected rows get the LIGHT-BLUE **`#e1f2fb`** background + 4px
radius, hover rows near-white `#f7f7f7`). Key plugin behaviors
(live-verified 2026-08-17 on the real preview): the panel **STAYS OPEN
while you pick options** (same as Fanner, opposite of the Select2
members); typing in the search box filters the rows by case-insensitive
substring (250ms debounce); SELECT ALL checks every visible row and flips
its own label to "Unselect all"; selecting everything shows "50 selected"
in the button; Escape (keyCode 27) closes the panel. Bolter recreates that
structure 1:1 with matching layout, tokens, typography, and content (no
ColorLib assets copied; the 50 state names are public knowledge).

> NAMING NOTE: the ColorLib source name "Multiselect 15" is FORBIDDEN as
> the app name. **Bolter** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/`
> or any TEMPLATES.md name (verified 2026-08-17: zero hits for `bolter` /
> `template-bolter` across all namespaces; candidates Riddle/Riddler,
> Shaker, Cribble, Siever, Winnower were rejected — Riddle/Riddler collide
> with the ColorLib "Riddle" template row, the rest are not as clean a fit
> for the winnowing theme). Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Multiselect 15" (marketing title: "Multi Select
  #5" — the page title tag). Listed in TEMPLATES.md under **Bootstrap
  Multiselect (20)** (section header line 821; row at line 837 —
  `multiselect-15` appears exactly ONCE in TEMPLATES.md, no dup rows to
  mark). Series siblings already prepped: Multiselect 01 → Picker, 02 →
  Sifter, 03 → Winnow, 04 → Cull (Semantic UI); 05 → Glean, 06 → Garner, 07
  → Reap, 08 → Pluck (Semantic UI variants); 09 → Thresh (Select2, DARK
  theme), 10 → Sickle (vanilla jQuery, light coral), 11 → Scythe (Select2,
  LIGHT theme, purple `#65587f`), 12 → Sheaf (Select2, LIGHT-GRAY page,
  coral `#f67280`, US-states theme), 13 → Sieve (Select2, LIGHT-GRAY page,
  **teal** `#29c7ac`, names theme, fully square), 14 → Fanner
  (jQuery-MultiSelect, LIGHT-GRAY page, US-states theme, 2-column panel,
  NO brand color, borderless shadowed button, panel stays open).
  **Multiselect 15 is the SECOND member of the jQuery-MultiSelect
  (nobleclem v2.4.18) family** and the first with a color: LIGHT-BLUE
  selected-row highlight `#e1f2fb`, a WIDER `col-md-5` column with NO panel
  overflow, a **3-column** state list, near-white `#f7f7f7` hover rows, and
  a 12px gap between the button and the panel. (Multiselect 16+ are the
  same family — prepped next.)
- **Live preview DOM — REACHABLE (verified 2026-08-17 by direct fetch AND
  browser interaction):** the default preview URL
  `https://preview.colorlib.com/theme/multiselect-15/` returns 404 (`Not
Found`, 9 bytes); the REAL preview URL (same `/theme/bootstrap/` prefix
  as the rest of the Bootstrap UI series) is
  `https://preview.colorlib.com/theme/bootstrap/multiselect-15/` (HTTP 200,
  18,463 bytes, 105 lines — tiny page, almost identical size to
  multiselect-14's 18,443). Title tag: "Multi Select #5". Stylesheets:
  `css/jquery.multiselect.css` (3,191 bytes — the plugin's widget base
  styles), `css/bootstrap.min.css` (Bootstrap 4 grid), `css/style.css`
  (2,705 bytes — the custom token tail: page bg, typography, button/panel
  overrides, AND the blue selected-row highlight; THIS is the real token
  source), and `fonts/icomoon/style.css` (loaded, but NO icomoon glyphs
  appear anywhere in the DOM — do not ship it). Fonts via cf-fonts
  @font-face blocks in the head: **Roboto 300 + 400** (used by the page),
  plus Poppins (300/400/500) and Source Serif Pro (400/600) which are
  loaded but NOT referenced by any style.css rule — ignore them. Scripts:
  `js/jquery-3.3.1.min.js`, `js/popper.min.js`, `js/bootstrap.min.js`
  (loaded, unused — no Bootstrap components on this page),
  `js/jquery.multiselect.js` (40,081 bytes — the plugin, v2.4.18 header
  "Display a nice easy to use multiselect list" by Patrick Springstubbe),
  and `js/main.js` (the whole demo config):
  ```js
  $(function () {
    $('select[multiple].active.3col').multiselect({
      columns: 3,
      placeholder: 'Select States',
      search: true,
      searchOptions: { default: 'Search States' },
      selectAll: true,
    })
  })
  ```
  Screenshot (`multiselect-15.jpg`, 1200×972 AVIF, browser-verified
  2026-08-17): LIGHT-GRAY page, centered dark 20px "Multi-Select #5"
  heading, one white widget button reading **"12 selected"** with a small
  down-chevron on the right, and the OPEN floating white panel below:
  search box ("Search States"), "SELECT ALL" (uppercase, gray per CSS —
  reads slightly blue-tinted in the compressed JPEG, CSS is authoritative:
  `#aaaaaa`), and the state list in THREE columns with native checkboxes —
  several rows visibly selected with a **LIGHT-BLUE row highlight**
  (Alabama, Alaska, Georgia, Oregon, Pennsylvania among them), checkbox
  filled blue with a white checkmark. Exactly matches the live widget.
- **Live DOM structure (1:1):**
  - `div.content` (custom: `padding: 7rem 0` ≈ 112px vertical; page body bg
    is the customized **`#efefef`** — light gray) → `h2.text-center` —
    "Multi-Select #5" (custom: `font-size: 20px`, Roboto, dark `#212529`)
    → `div.container.text-left` (max-width 1140px) → `div.row.justify-content-center`
    → `div.col-md-5` (≈ 5/12 of the 1110px row ≈ **475px** — WIDER than
    Fanner's `col-md-3`; live computed width 475px):
    - `select[name="basic[]"][multiple].3col.active.form-control` — all 50
      US states as `<option value="AL">Alabama</option>` … `<option
value="WY">Wyoming</option>` (alphabetical; full list below). The
      native select is REPLACED by the plugin at load (the plugin adds
      `jqmsLoaded` class and hides/ignores it) with:
      - `div#ms-list-1.ms-options-wrap` (classes added live:
        `ms-active` when open, `ms-has-selections` when ≥1 selected):
        - `button[type=button]` (custom: white bg, **`border: none
!important`** — the plugin default 1px `#aaa` is overridden, 4px
          radius, `height: 40px`, `padding-left/right: 10px`, `font-size:
13px`, `text-align: left`, `position: relative`, `width: 100%`,
          subtle shadow `0 1px 1px rgba(0,0,0,0.1)`; hover + active →
          `0 2px 10px rgba(0,0,0,0.1)`; `outline: none`; z-index 2; live
          computed width 445px):
          - `span` — the display text (placeholder "Select States", the
            comma-joined selection list, or the "N selected" counter)
          - `::after` caret — 6px CSS triangle, `border-top-color: #999`,
            positioned `right: 10px`, `top: 50%`, `margin-top: -3px`
        - `div.ms-options` (the floating panel; custom: **`border: none
!important`**, `border-radius: 4px`, **NO min-width and NO left
          offset — width is 100% of the 475px column, SAME width as the
          button** (live computed: width 475px, left 0), **`margin-top:
12px`** (a deliberate gap Fanner does NOT have — 14 keeps the
          plugin's 1px), `padding: 20px`, **`box-shadow: 0 15px 30px 0
rgba(0,0,0,0.1)`**, z-index 1 (below the button); plugin base:
          absolute, `background: white`, `width: 100%`, `margin-bottom:
20px`, `overflow: auto`, `visibility: hidden` unless the wrap has
          `ms-active`; min-height 200px, max-height window-based (live
          computed height 360px at a 1080p viewport)):
          - `div.ms-search > input[type=text][placeholder="Search States"]`
            (custom: `border-bottom: 1px solid #efefef`; plugin base:
            `width: 100%`, `padding: 4px 5px`, `border: none`, `outline:
none`) — ONLY rendered because `search: true`.
          - `a.ms-selectall` — "Select all" link (custom: `color: #aaaaaa`,
            `text-transform: uppercase`, `font-size: 11px`, hover → `#000`;
            plugin base: inline-block, `.9em`, no underline; the plugin
            REWRITES its text to "Unselect all" when every visible option
            is selected) — ONLY rendered because `selectAll: true`.
          - `ul` (plugin: list-style none, padding/margin 0; `column-count:
3`, `column-gap: 0` from the config — options flow down column
            1 then column 2 then column 3; live computed: column-count 3,
            column-gap 0px) — 50 `li[data-search-term]` rows, one per state
            (`data-search-term` = lowercased state name):
            - `label[for=ms-opt-N]` (plugin: `position: relative`,
              `display: inline-block`, `width: 100%`, `padding: 4px 4px 4px
20px` — 20px room for the checkbox; custom: `border-radius:
4px`, `border: none`, `padding-top/bottom: 5px`; hover /
              `.focused`: bg **`#f7f7f7`** (CUSTOM override — Fanner's
              `#efefef` is replaced with a near-white here; live computed
              rgba(0,0,0,0) resting → `#f7f7f7` on hover);
              `li.selected label`: bg **`#e1f2fb`** (LIGHT BLUE — the
              signature color of this member; live computed
              rgb(225,242,251), color rgb(33,37,41) dark, radius 4px,
              padding 5px 4px 5px 20px)):
              - `input[type=checkbox][value=XX][title=State]` — native
                checkbox (plugin: `position: absolute`, `left: 4px`, `top:
7px`, `margin: 0 5px 0 0`; id `ms-opt-N` matching the
                label's `for`; checked = browser default blue, no custom
                accent-color)
              - the state name text node
  - **Footer:** the original has NO footer; per monorepo convention add a
    minimal attribution footer linking `https://www.componentdock.com/`
    ("Component Dock") so every shipped template carries the required link.
- **Behaviors (main.js config + plugin v2.4.18 source + live browser
  verification — all verified on the live preview 2026-08-17):**
  - **Open/close:** clicking the button (mousedown, left click only)
    toggles `.ms-active` on the wrap → panel appears. Only one panel can be
    open at a time; clicking outside ANY widget or pressing **Escape**
    closes it (document-level keydown handler, keyCode 27 — live-verified:
    pressing Escape set `.ms-active` false and panel `visibility: hidden`).
    Enter/Space on the focused button also toggles (placeholder keydown
    handler triggers `mousedown`).
  - **Stay-open select:** clicking a state row toggles its checkbox +
    `li.selected` and **the panel STAYS OPEN** (live-verified: after
    clicking California and North Carolina the panel was still
    `ms-active`) — same as Fanner, OPPOSITE to the Select2 members
    (Scythe/Sheaf/Sieve) which close on every selection. Recreate the
    stay-open behavior.
  - **Button text:** the button `span` shows the comma-joined selected
    names ("California, North Carolina" — live-verified with 2 picks; the
    exact join depends on which rows are picked since the 3-column flow
    differs from alphabetical DOM order); when nothing is selected it shows
    the placeholder "Select States" (gray); once the joined text is wider
    than the button OR more than `maxPlaceholderOpts` (10) states are
    selected, it switches to the **"N selected"** counter (`selectedOptions`
    suffix = " selected" → "50 selected" with all 50; the screenshot shows
    "12 selected" — the wider button shows more names than Fanner's before
    the counter kicks in, but the counter logic is identical).
  - **Search filter:** typing in the search box filters the rows by
    lowercase substring of the state name (`data-search-term`), evaluated
    after a 250ms debounce, case-insensitive, live-verified ("Ca" kept
    California, North Carolina, South Carolina and hid the other 47);
    clearing the box restores all rows. Rows hidden via `.ms-hidden`.
  - **SELECT ALL:** the link selects every VISIBLE (non-hidden) row —
    adds `li.selected` + checks boxes — and rewrites its own text to
    "Unselect all" (live-verified: with the previous test state of 2 picks
    - a "Ca" filter the link already read "Unselect all" because all 3
      visible rows were selected; a full select-all run checked all 50,
      button showed "50 selected", link read "Unselect all"). Clicking
      "Unselect all" clears all and restores the "Select all" label. With an
      active search filter it only affects the visible subset (plugin logic).
  - **Wheel isolation:** the plugin isolates wheel/touch scrolling inside
    the panel so the page doesn't scroll when the list overflows.
  - **Live computed styles (browser-verified):** body bg
    rgb(239,239,239); h2 20px rgb(33,37,41) Roboto centered; content
    padding 112px 0; button 40px tall, 13px, 4px radius, `border: 0px
none`, shadow `rgba(0,0,0,0.1) 0 2px 10px` (open state), color
    rgb(170,170,170) with no selections / rgb(51,51,51) with selections,
    width 445px; caret `#999` right 10px 6px triangle; panel `border: 0px
none`, 4px radius, width 475px (SAME as the column — NO overflow),
    `left: 0`, `margin-top: 12px`, padding 20px, shadow `rgba(0,0,0,0.1) 0
15px 30px`, z-index 1, height 360px (window-limited); search input
    border-bottom `1px solid rgb(239,239,239)`; list `column-count: 3`,
    column-gap 0; select-all rgb(170,170,170) uppercase 11px; selected
    label bg **rgb(225,242,251) = #e1f2fb**, 4px radius, padding `5px 4px
5px 20px`, text color rgb(33,37,41); checkbox absolute left 4 top 7.
- **QUIRK — preview URL:** the default
  `https://preview.colorlib.com/theme/multiselect-15/` 404s; the real URL
  is under `/theme/bootstrap/`. (Same as every member of this UI series.)
- **QUIRK — engine family:** 01–08 were Semantic UI, 09–13 were Select2
  v4, **14+ are jQuery-MultiSelect (nobleclem v2.4.18)** — distinct plugin
  DOM (`.ms-options-wrap`, `.ms-options`, `.ms-search`, `.ms-selectall`),
  a BUTTON (not an input box), and a checkbox-per-row list. Do NOT copy
  the Select2 members' structure; the closest structural sibling is
  **Fanner (14)** — copy its React widget architecture and change the
  tokens (3 columns, blue selected rows, wider column, 12px panel gap).
- **QUIRK — the first COLOR in the jQuery-MultiSelect family:** Fanner
  (14) is zero-saturation grayscale; **Bolter (15) introduces the
  LIGHT-BLUE `#e1f2fb` selected-row highlight** (and `#f7f7f7` hover).
  The page itself is still grayscale (`#efefef` bg, white surfaces,
  `#333`/`#aaa`/`#999` text) — the blue lives ONLY on selected rows + the
  native blue checkboxes. Do not spread the blue anywhere else.
- **QUIRK — wide column, NO overflow:** unlike Fanner's `col-md-3`
  (~255px) with a `min-width: 320px` panel that overflows right, Bolter
  sits in `col-md-5` (~475px) and the panel is the SAME width as the
  button (width: 100%, left: 0, NO min-width, NO left offset). Simpler
  geometry — recreate with a centered `max-w-[480px]` column and a
  same-width panel.
- **QUIRK — 3-column flow:** `columns: 3` in the config means
  `column-count: 3` — the DOM order is still alphabetical Alabama→Wyoming,
  but rows fill COLUMN 1 (≈17 rows) top-to-bottom first, then column 2,
  then column 3. The visual arrangement differs from Fanner's 2 columns.
  The `3col` CLASS on the select happens to match the config here (Fanner
  was `3col` with `columns: 2`) — the class is still only a jQuery
  selector hook (`$('select[multiple].active.3col')`), the plugin reads
  `options.columns`. Ship `columns-3`, not the class.
- **QUIRK — 12px panel gap:** style.css sets `.ms-options { margin-top:
12px }` — the panel floats 12px below the button (Fanner keeps the
  plugin default 1px). Recreate with `mt-3` on the panel.
- **QUIRK — no chips, no ×, no clear-all:** selections are shown as text
  in the button (or the "N selected" counter). There are NO tag chips and
  NO per-tag remove buttons — that is the design (opposite of the Select2
  members). To deselect, reopen and uncheck rows / use Unselect all.
- **QUIRK — "N selected" counter:** `maxPlaceholderOpts` default 10 plus a
  width check: joined text that doesn't fit the button OR >10 selections →
  "N selected". The screenshot (12 picks) and the live run (2 picks →
  joined names, 50 picks → "50 selected") both show the behavior. Recreate
  both triggers (width overflow AND count > 10).
- **QUIRK — selected-row text stays DARK:** the screenshot's selected rows
  read as having blue text at a glance, but the live computed color is
  **rgb(33,37,41) `#212529`** — only the ROW BACKGROUND is blue. Use the
  live value (dark text on `#e1f2fb`).
- **QUIRK — Select-all link color:** the screenshot renders "SELECT ALL"
  slightly blue-tinted in the compressed AVIF, but the CSS is
  unambiguous: **`color: #aaaaaa`**, uppercase, 11px, hover `#000`. Use
  the CSS value.
- **Visual design (screenshot + live browser):** minimal LIGHT-GRAY page
  (`#efefef`), one centered dark 20px heading, ONE widget in a centered
  ~475px column: a white 40px-tall borderless button (4px radius, soft
  shadow, right chevron caret) showing "Select States" / selections /
  "N selected"; a floating white panel (borderless, 4px radius, same
  width as the button, 12px below it, `0 15px 30px` shadow, 20px padding)
  with a bottom-rule search box, uppercase gray "SELECT ALL", and the
  state list in THREE columns of label+checkbox rows (selected rows
  **light blue `#e1f2fb`** with 4px radius, hover `#f7f7f7`). Clean flat
  component demo — the first colored member of the jQuery-MultiSelect
  family. Signature palette: `#efefef` page, white surfaces, `#333` text,
  `#aaa`/`#999` muted accents, **`#e1f2fb` selected rows**, native blue
  checkboxes.
- **Full option list (50 US states, alphabetical, live DOM order):**
  Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut,
  Delaware, Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa,
  Kansas, Kentucky, Louisiana, Maine, Maryland, Massachusetts, Michigan,
  Minnesota, Mississippi, Missouri, Montana, Nebraska, Nevada, New
  Hampshire, New Jersey, New Mexico, New York, North Carolina, North
  Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South
  Carolina, South Dakota, Tennessee, Texas, Utah, Vermont, Virginia,
  Washington, West Virginia, Wisconsin, Wyoming. (Values AL, AK, AZ, AR,
  CA, CO, CT, DE, FL, GA, HI, ID, IL, IN, IA, KS, KY, LA, ME, MD, MA, MI,
  MN, MS, MO, MT, NE, NV, NH, NJ, NM, NY, NC, ND, OH, OK, OR, PA, RI, SC,
  SD, TN, TX, UT, VT, VA, WA, WV, WI, WY.)
- **Section order (1:1 from live DOM):**
  1. **Heading section** — full-width centered `h2` "Multi-Select #5"
     (recreate as the brand name "Bolter", like the other members rename
     their demo headings) at 20px, dark, Roboto, on the `#efefef` page
     with ~112px vertical padding.
  2. **Multiselect control** — NO label (source has none; add `aria-label`
     "Select states" for a11y): the borderless white button (placeholder
     "Select States" → comma-joined selections → "N selected", caret +
     focus shadow) toggling a floating panel with search box ("Search
     States"), SELECT ALL toggle, and the 50 US-state checkbox rows in 3
     columns (selected rows `#e1f2fb`, hover `#f7f7f7`); panel stays open
     while selecting, closes on outside click / Escape; search filters
     rows live.
  3. **Footer** — no footer in source; minimal Component Dock footer per
     convention.

## Design tokens

- Page background: **`#efefef`** (customized body bg — light gray, NOT
  white).
- Brand accent: **`#e1f2fb`** (light blue) — used ONLY on selected rows
  (`.ms-options > ul li.selected label` background) + native blue
  checkboxes. Everything else is grayscale: white surfaces, `#333`
  selected-button text, `#aaa` placeholder / select-all text, `#999`
  caret, `#f7f7f7` hover rows, `#efefef` page/search-underline.
- Heading: **20px**, dark `#212529` (Bootstrap default), Roboto,
  centered; `div.content` `padding: 7rem 0` (≈112px vertical page
  padding).
- Font: **Roboto** (300 + 400 loaded by the source; body + headings) —
  load Roboto 300 + 400 via Google Fonts `<link>` in `index.html`
  (Poppins / Source Serif Pro / icomoon loaded by the source but unused —
  do not ship).
- Widget column: `col-md-5` ≈ **475px** centered column (of the 1140px
  container) — live computed 475px; button live width 445px. The panel is
  the SAME width (475px) — NO min-width, NO overflow.
- Widget button (`.ms-options-wrap > button`): background **`#fff`**,
  **`border: none !important`** (plugin default 1px `#aaa` overridden —
  NOT a bordered box!), **`border-radius: 4px`**, `height: 40px`,
  `padding: 5px 20px 5px 10px` (custom overrides left/right to 10px),
  `font-size: 13px`, `text-align: left`, `white-space: nowrap`, `position:
relative`, `width: 100%`, z-index 2, `outline: none`; shadow
  **`0 1px 1px rgba(0,0,0,0.1)`** resting → **`0 2px 10px
rgba(0,0,0,0.1)`** hover AND while `.ms-active`; `.3s` transition; caret
  `::after`: 6px up-pointing-border triangle with `border-top-color:
#999`, `right: 10px`, `top: 50%`, `margin-top: -3px`.
- Button text: `color: #aaa` + placeholder "Select States" when empty;
  `color: #333` + comma-joined names when 1–N selected (if it fits the
  button width); **"N selected"** when the join overflows the button width
  OR more than 10 are selected (`texts.selectedOptions` suffix " selected").
- Panel (`.ms-options`): background **`#fff`**, **`border: none
!important`**, **`border-radius: 4px`**, **width 100% of the column
  (≈475px), `left: 0`, NO min-width overflow**, **`margin-top: 12px`**
  (deliberate gap below the button), `padding: 20px`, **`box-shadow: 0
15px 30px 0 rgba(0,0,0,0.1)`**, z-index 1 (below the button), absolute,
  `margin-bottom: 20px`, `overflow: auto`, min-height 200px (+
  window-based max-height), `visibility: hidden` unless open (`.ms-active`
  on the wrap).
- Search input (`.ms-search input`): `width: 100%`, `padding: 4px 5px`,
  `border: none`, **`border-bottom: 1px solid #efefef`**, `outline: none`,
  placeholder "Search States".
- SELECT ALL (`.ms-selectall`): inline-block, `color: #aaaaaa`,
  `text-transform: uppercase`, `font-size: 11px`, hover → `#000`; text
  flips to "Unselect all" when everything visible is selected.
- Options list (`ul`): list-style none, margin/padding 0,
  **`column-count: 3`**, `column-gap: 0` — rows flow down column 1 first
  (≈17 rows), then column 2, then column 3.
- Option rows (`li > label`): `position: relative` (checkbox anchor),
  `display: inline-block`, `width: 100%`, `padding: 4px 4px 4px 20px`
  (custom bumps top/bottom to 5px), `margin: 1px 0`, **`border-radius:
4px`**, `border: none` (plugin default `1px dotted transparent`
  overridden); hover / focus: background **`#f7f7f7`** (near-white);
  selected (`li.selected label`): background **`#e1f2fb`** (LIGHT BLUE),
  `border-radius: 4px`, text stays **`#212529`** (dark).
- Checkbox (`input[type=checkbox]`): native control — absolute `left:
4px`, `top: 7px`, `margin: 0 5px 0 0`; checked = browser default blue
  (the source applies no accent-color — keep native).
- Column layout: `col-md-5` ≈ **475px** centered column (of the 1140px
  container); the panel matches it 1:1. Recreate with a centered
  `max-w-[480px]` column and a same-width panel — or match the exact px
  values with arbitrary-value Tailwind classes.
- Paragraphs: source styles `p` as `color: #b3b3b3`, `font-weight: 300`
  — the page has NO `<p>` elements; skip.

## Recreation approach

Single page, `min-h-screen` light-gray section (**`bg-[#efefef]`** — NOT
white) with ~112px top/bottom padding, centered: h2 "Bolter" (20px, dark,
Roboto), then a centered `max-w-[480px]` column with a React multi-select
(no Bootstrap, no jQuery, no plugin): a `<button>` styled like
`.ms-options-wrap > button` (white, **NO border**, 4px radius, h-10,
13px, shadow `shadow-[0_1px_1px_rgba(0,0,0,0.1)]`,
`hover:shadow-[0_2px_10px_rgba(0,0,0,0.1)]`, `aria-haspopup="listbox"`
`aria-expanded`, caret via a lucide `ChevronDown` icon or a CSS triangle
at right-10) showing the placeholder "Select States" (gray) /
comma-joined selections (`text-[#333]`) / "N selected"; when open, an
absolutely-positioned (or in-flow) floating panel (`bg-white`, **NO
border**, 4px radius, **same width as the column**, **`mt-3` (12px gap)**,
`p-5`, `shadow-[0_15px_30px_rgba(0,0,0,0.1)]`, z-index below the button)
containing: a search input (borderless with `border-b border-[#efefef]`,
placeholder "Search States") whose value filters the rows by
case-insensitive substring (instant — no debounce needed, or a small
one); a "SELECT ALL" toggle (`text-[11px] uppercase text-[#aaa]
hover:text-black`), flipping to "Unselect all"/"Select all" based on
whether all VISIBLE rows are selected; and a **3-column** list
(`columns-3 gap-0`) of 50 state rows as `<label>`+native checkbox (or a
styled checkbox) — rows `rounded-[4px] px-1 py-[5px] pl-5`, hover
`bg-[#f7f7f7]`, selected **`bg-[#e1f2fb]`**; click toggles selection and
**KEEPS THE PANEL OPEN**; outside click / Escape closes it. The button
text recomputes on every change (join ≤ fits-width or ≤10 selections,
else "N selected"). Plus the mandatory minimal Component Dock footer.
Icons: lucide-react `ChevronDown` for the caret (probe exports before
use); no images at all (the source has none).

## Fidelity deviations (documented)

- Plugin's native-checkbox rows → React state with real `<input
type="checkbox">` or a styled checkbox (keep native for fidelity; add
  `aria-label` on the widget for a11y).
- Source has NO label/aria — recreation adds `aria-label`.
- Source has no footer — recreation adds the mandatory Component Dock
  footer.
- The plugin's 250ms debounce on search is an implementation detail —
  instant filter is behaviorally equivalent (document it).
- The plugin's window-based panel max-height — recreation may fix a
  comfortable max-height (e.g. `max-h-[400px]` with scroll) since the
  source computes it against the viewport.
- The `3col`/`active` classes are temporary jQuery hooks — not shipped;
  the config's `columns: 3` is what sets the real 3-column layout.
- The select-all label swaps ("Select all"/"Unselect all") are plugin
  strings — keep verbatim.
- Source shows selections inside a single button — recreation keeps that
  single-button pattern (no chips).

## Requirements

### Requirement: Heading and container

The system SHALL render a centered heading on the light-gray page with
generous vertical padding and a centered column for the widget.

#### Scenario: Centered heading and page shell

- **GIVEN** the Bolter app is rendered
- **WHEN** the page loads
- **THEN** a light-gray page (`#efefef`) SHALL show a centered heading
  "Bolter" (the new brand name in place of the source's "Multi-Select #5"
  demo label) at ~20px in dark text (`#212529`) using the Roboto font
  family
- **AND** the page SHALL have generous vertical padding (~112px — the
  source's `div.content` 7rem) above and below the content
- **AND** the widget SHALL sit inside a centered WIDE column (≈475px —
  the source's `col-md-5`) inside a comfortable container (≈1140px)
- **AND** no hint/subtitle paragraph SHALL render (the source has none —
  only the heading and the widget)

### Requirement: Widget button

The system SHALL render the custom-styled multiselect trigger button with
placeholder, selection, and counter states.

#### Scenario: Button renders with placeholder

- **GIVEN** the page loads with no selections
- **THEN** a white button SHALL render (no border element — the source
  overrides the plugin border away — **4px border radius**, ~40px height,
  13px text, subtle `0 1px 1px rgba(0,0,0,0.1)` shadow, `cursor: pointer`,
  `aria-label` "Select states", `aria-haspopup="listbox"`,
  `aria-expanded="false"`)
- **AND** the button SHALL display the placeholder **"Select States"** in
  gray (`#aaa`)
- **AND** a small downward caret SHALL sit at the button's right edge
  (gray `#999`, ~10px from the right)

#### Scenario: Button shows comma-joined selections

- **GIVEN** the user has selected California and North Carolina
- **THEN** the button SHALL display **"California, North Carolina"**
  (comma + space separation, source order of selection, dark `#333` text)
- **AND** the placeholder SHALL NOT be visible while selections exist

#### Scenario: Button shows the N-selected counter

- **GIVEN** the user has selected more states than fit the button width
  OR more than 10 states
- **THEN** the button SHALL display **"N selected"** (e.g. "12 selected"
  as in the source screenshot, "50 selected" with all states) instead of
  the joined names
- **AND** the count SHALL equal the number of selected states

#### Scenario: Button hover and active shadow

- **WHEN** the user hovers the button or the panel is open
- **THEN** the button shadow SHALL deepen to `0 2px 10px rgba(0,0,0,0.1)`
- **AND** no outline SHALL appear on focus (the source removes it)

### Requirement: Dropdown panel

The system SHALL open a floating panel below the button containing the
search box, the select-all control, and the state list.

#### Scenario: Panel opens at the button's width

- **GIVEN** the widget is rendered in its ~475px column
- **WHEN** the user clicks the button
- **THEN** a white floating panel SHALL appear below the button (clicking
  again closes it)
- **AND** the panel SHALL have **NO border**, a **4px border radius**, the
  **SAME width as the column** (≈475px — NO overflow, unlike Fanner's
  320px min-width panel), a **12px gap** below the button
  (`margin-top: 12px`), `padding: 20px`, and a **`0 15px 30px
rgba(0,0,0,0.1)`** drop shadow
- **AND** the panel content area SHALL scroll internally when it exceeds
  its max height

#### Scenario: Panel closes on outside click and Escape

- **GIVEN** the panel is open
- **WHEN** the user clicks anywhere outside the widget or presses Escape
- **THEN** the panel SHALL close
- **AND** all selections SHALL be preserved across close/reopen

### Requirement: State list

The system SHALL render all 50 US states as checkbox rows in three columns.

#### Scenario: All 50 states render in three columns

- **GIVEN** the panel is open with no search text
- **THEN** all 50 US state rows SHALL render in source order: Alabama,
  Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,
  Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas,
  Kentucky, Louisiana, Maine, Maryland, Massachusetts, Michigan, Minnesota,
  Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire, New
  Jersey, New Mexico, New York, North Carolina, North Dakota, Ohio,
  Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina, South
  Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West
  Virginia, Wisconsin, Wyoming
- **AND** the rows SHALL be arranged in THREE columns (CSS multi-column,
  zero gap — column 1 fills top-to-bottom first, then columns 2 and 3)
- **AND** each row SHALL be a label + native checkbox pair with ~20px left
  padding for the checkbox, ~4px border radius, and **`#f7f7f7` background
  on hover**

#### Scenario: Selected rows get the light-blue highlight

- **GIVEN** the user selects Alabama
- **THEN** the Alabama row SHALL show a **light-blue `#e1f2fb`**
  background with a 4px border radius and dark `#212529` text
- **AND** its checkbox SHALL be checked (native blue check)
- **AND** the panel SHALL STAY OPEN (selections do not close the panel)

### Requirement: Search filter

The system SHALL filter the state rows by typed text.

#### Scenario: Search filters rows case-insensitively

- **GIVEN** the panel is open
- **WHEN** the user types "Ca" in the search box
- **THEN** only California, North Carolina, and South Carolina SHALL
  remain visible
- **AND** the other 47 rows SHALL be hidden (not removed)
- **AND** clearing the search box SHALL restore all 50 rows

#### Scenario: Search with no matches

- **GIVEN** the panel is open
- **WHEN** the user types "xyz" in the search box
- **THEN** no rows SHALL be visible
- **AND** the panel SHALL remain open with no error

### Requirement: Select all

The system SHALL provide a select-all / unselect-all toggle that respects
the search filter.

#### Scenario: Select all checks every visible row

- **GIVEN** the panel is open with no search text
- **WHEN** the user clicks the "Select all" link
- **THEN** all 50 checkboxes SHALL be checked and every row SHALL get the
  `#e1f2fb` selected style
- **AND** the button SHALL display **"50 selected"**
- **AND** the link text SHALL flip to **"Unselect all"**

#### Scenario: Unselect all clears everything

- **GIVEN** all rows are selected and the link reads "Unselect all"
- **WHEN** the user clicks the "Unselect all" link
- **THEN** all checkboxes SHALL be unchecked and the selected styles SHALL
  be removed
- **AND** the button SHALL return to the placeholder "Select States"
- **AND** the link text SHALL flip back to "Select all"

#### Scenario: Select all respects the search filter

- **GIVEN** the user has typed a filter that leaves 3 rows visible
- **WHEN** the user clicks select all
- **THEN** ONLY the 3 visible rows SHALL be selected
- **AND** the hidden rows SHALL remain unselected

### Requirement: Component Dock footer

The system SHALL render the mandatory footer.

#### Scenario: Footer links Component Dock

- **GIVEN** the Bolter app is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a minimal footer SHALL link to
  `https://www.componentdock.com/` (branded "Component Dock")
- **AND** no other external/attribution links SHALL appear in the footer

## Verification checklist

- [ ] `npm run verify:app bolter` passes (typecheck + lint + knip + fallow + vitest 100% coverage + build)
- [ ] Page bg is `#efefef` (light gray, not white) with ~112px vertical
      padding
- [ ] Centered h2 "Bolter" (20px, `#212529`, Roboto)
- [ ] Borderless white 40px button, 4px radius, subtle shadow that
      deepens on hover/open, gray caret at right-10
- [ ] Placeholder "Select States" (#aaa) → comma-joined names (#333) →
      "N selected" counter (width overflow or >10 picks) — all three
      states tested
- [ ] Panel: same width as column, 12px gap below button, 4px radius, no
      border, `0 15px 30px rgba(0,0,0,0.1)` shadow, internal scroll
- [ ] Search box "Search States" with only a bottom border; typing filters
      rows case-insensitively; clearing restores all
- [ ] SELECT ALL: uppercase #aaa 11px, hover #000; checks visible rows;
      flips to "Unselect all"; unselect-all restores placeholder
- [ ] 50 state rows in **3 columns** (column-gap 0), label+checkbox per
      row, 4px radius, 5px top/bottom padding, 20px left padding
- [ ] Selected row bg **#e1f2fb** (light blue) with dark text; hover row
      bg **#f7f7f7**; panel stays open while selecting
- [ ] Escape and outside click close the panel; selections persist
- [ ] Footer links https://www.componentdock.com/ ("Component Dock")
- [ ] No ColorLib string in any app file; provenance only in this spec /
      TEMPLATES.md / PR
- [ ] `public/CNAME` = `bolter.free.componentdock.com`,
      `homepage` = `https://bolter.free.componentdock.com`, root
      `package-lock.json` registers the workspace
- [ ] README status regenerated via `npm run readme:status` after merge
