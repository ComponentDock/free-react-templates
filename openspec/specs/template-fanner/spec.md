# Template: Fanner (Multiselect Dropdown)

## Purpose

Fanner is a single-page multiselect-dropdown component demo in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Multiselect 14" free template (source:
https://colorlib.com/wp/template/multiselect-14/), built under a DIFFERENT
name (**Fanner** — the fourteenth of the selection/separating-themed names
for this Bootstrap Multiselect UI series, after Picker (01), Sifter (02),
Winnow (03), Cull (04), Glean (05), Garner (06), Reap (07), Pluck (08),
Thresh (09), Sickle (10), Scythe (11), Sheaf (12), Sieve (13); a fanner
separates grain from chaff with a fan/winnowing basket — exactly what a
multiselect filter does — per the monorepo naming mandate: never reuse the
ColorLib source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a minimal, centered demo page (Bootstrap 4 grid + the
**jQuery-MultiSelect v2.4.18 plugin by Patrick Springstubbe / nobleclem** +
jQuery 3.3.1 + Popper): a `div.content` (padding 7rem 0) on a **light-gray
`#efefef` page** with a centered `h2` "Multi-Select #4" and a SINGLE
multi-select widget in a narrow centered `col-md-3` column. The widget is a
custom-styled `<button>` (white, **NO border, 4px radius**, 40px tall, tiny
shadow) showing either the placeholder "Select States" (gray `#aaa`) or the
comma-joined list of selected states (dark `#333`, or **"N selected"** once
the joined text overflows the button or more than 10 are selected); clicking
the button toggles a **floating white panel** (NO border, 4px radius,
`min-width: 320px` so it overflows the narrow column to the right, offset
`left: 16px`, big `0 15px 30px` shadow, `padding: 20px`) that contains a
**search box** ("Search States", underline-only bottom border), an
uppercase gray **"SELECT ALL"** toggle, and the **US-states list laid out in
2 CSS columns** (50 options, Alabama → Wyoming, each row a label + native
checkbox; selected rows get `#efefef` bg + 4px radius; hover same). Key
plugin behaviors (live-verified): the panel **STAYS OPEN while you pick
options** (unlike the Select2 members which close on selection); typing in
the search box filters the rows by case-insensitive substring (250ms
debounce); SELECT ALL checks every visible row and flips its own label to
"Unselect all"; selecting everything shows "50 selected" in the button.
Fanner recreates that structure 1:1 with matching layout, tokens,
typography, and content (no ColorLib assets copied; the 50 state names are
public knowledge).

> NAMING NOTE: the ColorLib source name "Multiselect 14" is FORBIDDEN as
> the app name. **Fanner** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/`
> or any TEMPLATES.md name (verified 2026-08-17: zero hits for `fanner` /
> `template-fanner` across all namespaces, git history included). Source
> slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Multiselect 14" (marketing title: "Multi Select
  #4" — the page title tag). Listed in TEMPLATES.md under **Bootstrap
  Multiselect (20)** (section header line 821; row at line 836 —
  `multiselect-14` appears exactly ONCE in TEMPLATES.md, no dup rows to
  mark). Series siblings already prepped: Multiselect 01 → Picker, 02 →
  Sifter, 03 → Winnow, 04 → Cull (Semantic UI); 05 → Glean, 06 → Garner, 07
  → Reap, 08 → Pluck (Semantic UI variants); 09 → Thresh (Select2, DARK
  theme), 10 → Sickle (vanilla jQuery, light coral), 11 → Scythe (Select2,
  LIGHT theme, purple `#65587f`), 12 → Sheaf (Select2, LIGHT-GRAY page,
  coral `#f67280`, US-states theme), 13 → Sieve (Select2, LIGHT-GRAY page,
  **teal** `#29c7ac`, names theme, fully square). **Multiselect 14 is the
  FIRST member of a NEW engine family — the jQuery-MultiSelect plugin
  (nobleclem v2.4.18) — with a US-states theme in a 2-column panel, a
  gray/minimal zero-saturation look (no brand color!), a bordered-button
  replaced by a borderless shadowed 4px-radius button, and a panel that
  stays open while selecting.** (Multiselect 15+ are the same plugin family
  — prepped next.)
- **Live preview DOM — REACHABLE (verified 2026-08-17 by direct fetch AND
  browser interaction):** the default preview URL
  `https://preview.colorlib.com/theme/multiselect-14/` returns 404 (`Not
Found`, 9 bytes); the REAL preview URL (same `/theme/bootstrap/` prefix
  as the rest of the Bootstrap UI series) is
  `https://preview.colorlib.com/theme/bootstrap/multiselect-14/` (HTTP 200,
  18,443 bytes, 101 lines — tiny page). Title tag: "Multi Select #4".
  Stylesheets: `css/jquery.multiselect.css` (3,191 bytes — the plugin's
  widget base styles), `css/bootstrap.min.css` (Bootstrap 4 grid),
  `css/style.css` (2,669 bytes — the custom token tail: page bg, typography,
  and the button/panel overrides described below; THIS is the real token
  source), and `fonts/icomoon/style.css` (loaded, but NO icomoon glyphs
  appear anywhere in the DOM — do not ship it). Fonts via cf-fonts
  @font-face blocks in the head: **Roboto 300** (used by the page), plus
  Poppins (300/400/500) and Source Serif Pro (400/600) which are loaded but
  NOT referenced by any style.css rule — ignore them. Scripts:
  `js/jquery-3.3.1.min.js`, `js/popper.min.js`, `js/bootstrap.min.js`
  (loaded, unused — no Bootstrap components on this page),
  `js/jquery.multiselect.js` (40,081 bytes — the plugin, v2.4.18 header
  "Display a nice easy to use multiselect list" by Patrick Springstubbe),
  and `js/main.js` (the whole demo config):
  ```js
  $(function () {
    $('select[multiple].active.3col').multiselect({
      columns: 2,
      placeholder: 'Select States',
      search: true,
      searchOptions: {
        default: 'Search States',
      },
      selectAll: true,
    })
  })
  ```
  Screenshot (`multiselect-14.jpg`, 1200×972 AVIF, browser-verified
  2026-08-17): LIGHT-GRAY page, centered dark 20px "Multi-Select #4"
  heading, one white widget button reading **"6 selected"** with a small
  down-chevron on the right, and the OPEN floating white panel below: search
  box ("Search States"), "SELECT ALL" (uppercase, gray), and the state list
  in TWO columns with native checkboxes — several rows visibly selected
  (checkbox blue/checked, row highlighted). Exactly matches the live widget.
- **Live DOM structure (1:1):**
  - `div.content` (custom: `padding: 7rem 0` ≈ 112px vertical; page body bg
    is the customized **`#efefef`** — light gray) → `h2.text-center` —
    "Multi-Select #4" (custom: `font-size: 20px`, Roboto, dark `#212529`)
    → `div.container.text-left` (max-width 1140px) → `div.row.justify-content-center`
    → `div.col-md-3` (≈25% of the 1110px row ≈ 285px, minus gutters ≈
    **255px** — the widget's narrow column, centered on the page):
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
13px`, `color: #aaa` placeholder state / `#333` when selections
          exist, `text-align: left`, `position: relative`, `width: 100%`,
          subtle shadow `0 1px 1px rgba(0,0,0,0.1)`; hover + active →
          `0 2px 10px rgba(0,0,0,0.1)`; `outline: none`; z-index 2):
          - `span` — the display text (placeholder "Select States", the
            comma-joined selection list, or the "N selected" counter)
          - `::after` caret — 6px CSS triangle, `border-top-color: #999`,
            positioned `right: 10px`, `top: 50%`, `margin-top: -3px`
        - `div.ms-options` (the floating panel; custom: **`border: none
!important`**, `border-radius: 4px`, `min-width: 320px` —
          OVERFLOWS the 255px column, `left: 16px` offset from button left,
          `padding: 20px`, **`box-shadow: 0 15px 30px 0 rgba(0,0,0,0.1)`**,
          z-index 1; plugin base: absolute, `background: white`, `width:
100%`, `margin-top: 1px`, `margin-bottom: 20px`, `overflow: auto`,
          `visibility: hidden` unless the wrap has `ms-active`; min-height
          200px, max-height window-based):
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
2`, `column-gap: 0` from the config — options flow down column 1
            then column 2) — 50 `li[data-search-term]` rows, one per state
            (`data-search-term` = lowercased state name):
            - `label[for=ms-opt-N]` (plugin: `position: relative`,
              `display: inline-block`, `width: 100%`, `padding: 4px 4px 4px
20px` — 20px room for the checkbox; custom: `border-radius:
4px`, `border: none`, `padding-top/bottom: 5px`; hover /
              `.focused`: bg `#efefef` (plugin) with custom border none;
              `li.selected label`: bg `#efefef`, `border-radius: 4px`)
              containing:
              - `input[type=checkbox][value=XX][title=State]` — native
                checkbox (plugin: `position: absolute`, `left: 4px`, `top:
7px`, `margin: 0 5px 0 0`; id `ms-opt-N` matching the
                label's `for`)
              - the state name text node
  - **Footer:** the original has NO footer; per monorepo convention add a
    minimal attribution footer linking `https://www.componentdock.com/`
    ("Component Dock") so every shipped template carries the required link.
- **Behaviors (main.js config + plugin v2.4.18 source + live browser
  verification — all verified on the live preview 2026-08-17):**
  - **Open/close:** clicking the button (mousedown, left click only)
    toggles `.ms-active` on the wrap → panel appears. Only one panel can be
    open at a time; clicking outside ANY widget or pressing **Escape**
    closes it (document-level handlers). Enter/Space on the focused button
    also toggles.
  - **Stay-open select:** clicking a state row toggles its checkbox +
    `li.selected` and **the panel STAYS OPEN** (live-verified: after
    clicking California and New York the panel was still `ms-active`) —
    this is OPPOSITE to the Select2 members (Scythe/Sheaf/Sieve) which
    close on every selection. Recreate the stay-open behavior.
  - **Button text:** the button `span` shows the comma-joined selected
    names ("California, New York" — live-verified with 2 picks); when
    nothing is selected it shows the placeholder "Select States" (gray);
    once the joined text is wider than the button OR more than
    `maxPlaceholderOpts` (10) states are selected, it switches to the
    **"N selected"** counter (`selectedOptions` suffix = " selected" →
    "50 selected" with all 50; the screenshot shows "6 selected" — the
    joined list at 6 was already too wide for the ~255px button).
  - **Search filter:** typing in the search box filters the rows by
    lowercase substring of the state name (`data-search-term`), evaluated
    after a 250ms debounce, case-insensitive, live-verified ("Ca" kept
    California, North Carolina, South Carolina and hid the other 47);
    clearing the box restores all rows. Rows hidden via `.ms-hidden`.
  - **SELECT ALL:** the link selects every VISIBLE (non-hidden) row —
    adds `li.selected` + checks boxes — and rewrites its own text to
    "Unselect all" (live-verified: with no search filter it selected all
    50, button showed "50 selected", link read "Unselect all"). Clicking
    "Unselect all" clears all and restores the "Select all" label. With an
    active search filter it only affects the visible subset (plugin logic).
  - **Wheel isolation:** the plugin isolates wheel/touch scrolling inside
    the panel so the page doesn't scroll when the list overflows.
  - **Live computed styles (browser-verified):** body bg
    `rgb(239,239,239)`; h2 20px `rgb(33,37,41)` Roboto centered; content
    padding `112px 0`; button 40px tall, 13px, 4px radius, `border: 0px
none`, shadow `rgba(0,0,0,0.1) 0 2px 10px` (active), color `rgb(51,51,51)`
    with selections; caret `#999`; panel `border: 0px none`, 4px radius,
    320px wide, padding 20px, `left: 16px`, shadow `rgba(0,0,0,0.1) 0 15px
30px`; selected label bg `rgb(239,239,239)`, 4px radius, padding `5px
4px 5px 20px`; checkbox absolute left 4px top 7px; search input
    border-bottom `1px solid rgb(239,239,239)`; list `column-count: 2`,
    column-gap 0; wrapper width 255px vs panel 320px (deliberate overflow).
- **QUIRK — preview URL:** the default
  `https://preview.colorlib.com/theme/multiselect-14/` 404s; the real URL
  is under `/theme/bootstrap/`. (Same as every member of this UI series.)
- **QUIRK — engine family switch:** 01–08 were Semantic UI, 09–13 were
  Select2 v4, **14 is the first jQuery-MultiSelect (nobleclem v2.4.18)
  member** — distinct plugin DOM (`.ms-options-wrap`, `.ms-options`,
  `.ms-search`, `.ms-selectall`), a BUTTON (not an input box), and a
  checkbox-per-row list. Do NOT copy the Select2 members' structure.
- **QUIRK — NO brand color:** unlike Scythe (purple `#65587f`), Sheaf
  (coral `#f67280`) and Sieve (teal `#29c7ac`), this member is
  **zero-saturation**: everything is white / `#efefef` / `#333` / `#aaa` /
  `#999` gray. The only saturated color is the native browser checkbox blue
  when checked. Do not invent a brand color.
- **QUIRK — borderless shadowed button:** the plugin's default bordered
  button (`1px solid #aaa`) is overridden to **`border: none !important`**
  with a soft shadow + **4px radius** (NOT square like Sieve, NOT
  outlined like Select2). Hover/active deepen the shadow.
- **QUIRK — panel stays open while selecting:** every Select2 sibling
  (Scythe/Sheaf/Sieve) closes the dropdown after each pick; this plugin
  keeps it open so you can tick several boxes in a row. Verify in tests.
- **QUIRK — panel overflows its column:** the widget column is `col-md-3`
  (~255px) but the panel is `min-width: 320px` with `left: 16px` — it
  deliberately sticks out to the right like a floating card. Recreate that
  (a `min-w-[320px]` panel in a ~255px column).
- **QUIRK — no chips, no ×, no clear-all:** selections are shown as text in
  the button (or the "N selected" counter). There are NO tag chips and NO
  per-tag remove buttons — that is the design (opposite of the Select2
  members). To deselect, reopen and uncheck rows / use Unselect all.
- **QUIRK — "N selected" counter:** `maxPlaceholderOpts` default 10 plus a
  width check: joined text that doesn't fit the button OR >10 selections →
  "N selected". The screenshot (6 picks) and the live run (50 picks) both
  show the counter. Recreate both triggers (width overflow AND count > 10).
- **QUIRK — redundant `3col` class and `active` class:** the select carries
  `class="3col active form-control"`; `active` is only the plugin's jQuery
  selector hook, and `3col` is a leftover (the config actually uses
  `columns: 2`). Nothing in the CSS or plugin reads `.3col` — do not ship
  it, and do not "fix" it to 3 columns; the rendered layout is TWO.
- **QUIRK — selected rows:** `li.selected label` gets bg `#efefef` plus the
  custom 4px radius; hover also `#efefef`. The screenshot's checked rows
  read as light-blue at a glance because of the native blue checkbox pixels
  — the live computed row background is gray `#efefef`; use the live value.
- **Visual design (screenshot + live browser):** minimal LIGHT-GRAY page
  (`#efefef`), one centered dark 20px heading, ONE widget in a narrow
  centered ~255px column: a white 40px-tall borderless button (4px radius,
  soft shadow, right chevron caret) showing "Select States" / selections /
  "N selected"; a floating white panel (borderless, 4px radius, 320px
  min-width, `0 15px 30px` shadow, 20px padding) with a bottom-rule search
  box, uppercase gray "SELECT ALL", and the state list in TWO columns of
  label+checkbox rows (selected/hover rows `#efefef`, 4px radius). Clean
  flat gray component demo — the zero-saturation "workhorse" member of the
  series. Signature palette: `#efefef` page, white surfaces, `#333` text,
  `#aaa`/`#999` muted accents, native blue checkboxes.
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
  1. **Heading section** — full-width centered `h2` "Multi-Select #4"
     (recreate as the brand name "Fanner", like the other members rename
     their demo headings) at 20px, dark, Roboto, on the `#efefef` page with
     ~112px vertical padding.
  2. **Multiselect control** — NO label (source has none; add `aria-label`
     "Select states" for a11y): the borderless white button (placeholder
     "Select States" → comma-joined selections → "N selected", caret +
     focus shadow) toggling a floating panel with search box ("Search
     States"), SELECT ALL toggle, and the 50 US-state checkbox rows in 2
     columns (selected rows `#efefef`); panel stays open while selecting,
     closes on outside click / Escape; search filters rows live.
  3. **Footer** — no footer in source; minimal Component Dock footer per
     convention.
- **Design tokens:**
  - Page background: **`#efefef`** (customized body bg — light gray, NOT
    white).
  - NO brand accent — zero-saturation grayscale: white surfaces, `#333`
    selected-button text, `#aaa` placeholder / select-all text, `#999`
    caret, `#efefef` selected/hover rows. Native blue browser checkboxes
    are the only saturated pixels (and may be styled with `accent-color`
    or left native — document the choice).
  - Heading: **20px**, dark `#212529` (Bootstrap default), Roboto,
    centered; `div.content` `padding: 7rem 0` (≈112px vertical page
    padding).
  - Font: **Roboto** (300 loaded by the source; body + headings) — load
    Roboto 300 + 400 via Google Fonts `<link>` in `index.html` (Poppins /
    Source Serif Pro / icomoon loaded by the source but unused — do not
    ship).
  - Widget button (`.ms-options-wrap > button`): background **`#fff`**,
    **`border: none !important`** (plugin default 1px `#aaa` overridden —
    NOT a bordered box!), **`border-radius: 4px`** (custom — not square),
    `height: 40px`, `padding: 5px 20px 5px 10px` (custom overrides
    left/right to 10px), `font-size: 13px`, `text-align: left`,
    `white-space: nowrap`, `position: relative`, `width: 100%`, z-index 2,
    `outline: none`; shadow **`0 1px 1px rgba(0,0,0,0.1)`** resting →
    **`0 2px 10px rgba(0,0,0,0.1)`** hover AND while `.ms-active`; `.3s`
    transition; caret `::after`: 6px up-pointing-border triangle with
    `border-top-color: #999`, `right: 10px`, `top: 50%`, `margin-top: -3px`.
  - Button text: `color: #aaa` + placeholder "Select States" when empty;
    `color: #333` + comma-joined names when 1–~7 selected (if it fits the
    button width); **"N selected"** when the join overflows the button
    width OR more than 10 are selected (`texts.selectedOptions` suffix
    " selected").
  - Panel (`.ms-options`): background **`#fff`**, **`border: none
!important`**, **`border-radius: 4px`**, **`min-width: 320px`**,
    `left: 16px`, `padding: 20px`, **`box-shadow: 0 15px 30px 0
rgba(0,0,0,0.1)`**, z-index 1 (below the button), absolute, `width:
100%`, `margin-top: 1px`, `margin-bottom: 20px`, `overflow: auto`,
    min-height 200px (+ window-based max-height), `visibility: hidden`
    unless open (`.ms-active` on the wrap).
  - Search input (`.ms-search input`): `width: 100%`, `padding: 4px 5px`,
    `border: none`, **`border-bottom: 1px solid #efefef`**, `outline:
none`, placeholder "Search States".
  - SELECT ALL (`.ms-selectall`): inline-block, `color: #aaaaaa`,
    `text-transform: uppercase`, `font-size: 11px`, hover → `#000`; text
    flips to "Unselect all" when everything visible is selected.
  - Options list (`ul`): list-style none, margin/padding 0,
    **`column-count: 2`**, `column-gap: 0` — rows flow down column 1 first.
  - Option rows (`li > label`): `position: relative` (checkbox anchor),
    `display: inline-block`, `width: 100%`, `padding: 4px 4px 4px 20px`
    (custom bumps top/bottom to 5px), `margin: 1px 0`, **`border-radius:
4px`**, `border: none` (plugin default `1px dotted transparent`
    overridden); hover / focus: background **`#efefef`**; selected
    (`li.selected label`): background **`#efefef`**, `border-radius: 4px`.
  - Checkbox (`input[type=checkbox]`): native control — absolute `left:
4px`, `top: 7px`, `margin: 0 5px 0 0`; checked = browser default blue.
  - Column layout: `col-md-3` ≈ **255px** centered column (of the 1140px
    container); the panel's 320px min-width deliberately overflows it.
    Recreate with a centered `max-w-[260px]` column and a `min-w-[320px]`
    panel — or match the exact px values with arbitrary-value Tailwind
    classes.
- **Recreation approach:** single page, `min-h-screen` light-gray section
  (**`bg-[#efefef]`** — NOT white) with ~112px top/bottom padding,
  centered: h2 "Fanner" (20px, dark, Roboto), then a centered
  `max-w-[260px]` column with a React multi-select (no Bootstrap, no
  jQuery, no plugin): a `<button>` styled like `.ms-options-wrap > button`
  (white, **NO border**, 4px radius, h-10, 13px, shadow
  `shadow-[0_1px_1px_rgba(0,0,0,0.1)]`, `hover:shadow-[0_2px_10px_rgba(0,0,0,0.1)]`,
  `aria-haspopup="listbox"` `aria-expanded`, caret via a lucide `ChevronDown`
  icon or a CSS triangle at right-10) showing the placeholder "Select
  States" (gray) / comma-joined selections (`text-[#333]`) / "N selected";
  when open, an absolutely-positioned (or in-flow) floating panel
  (`bg-white`, **NO border**, 4px radius, `min-w-[320px]`, `left-4` in the
  column's negative space, `p-5`, `shadow-[0_15px_30px_rgba(0,0,0,0.1)]`,
  z-index below the button) containing: a search input (borderless with
  `border-b border-[#efefef]`, placeholder "Search States") whose value
  filters the rows by case-insensitive substring (instant — no debounce
  needed, or a small one); a "SELECT ALL" toggle (`text-[11px] uppercase
text-[#aaa] hover:text-black`), flipping to "Unselect all"/"Select all"
  based on whether all VISIBLE rows are selected; and a 2-column list
  (`columns-2 gap-0`) of 50 state rows as `<label>`+native checkbox (or a
  styled checkbox) — rows `rounded-[4px] px-1 py-[5px] pl-5`, selected /
  hover `bg-[#efefef]`; click toggles selection and **KEEPS THE PANEL
  OPEN**; outside click / Escape closes it. The button text recomputes on
  every change (join ≤ fits-width or ≤10 selections, else "N selected").
  Plus the mandatory minimal Component Dock footer. Icons: lucide-react
  `ChevronDown` for the caret (probe exports before use); no images at all
  (the source has none).
- **Fidelity deviations (documented):** plugin's native-checkbox rows →
  React state with real `<input type="checkbox">` or a styled checkbox
  (keep native for fidelity; add `aria-label` on the widget for a11y);
  source has NO label/aria — recreation adds `aria-label`; source has no
  footer — recreation adds the mandatory Component Dock footer; the plugin's
  250ms debounce on search is an implementation detail — instant filter is
  behaviorally equivalent (document it); the plugin's window-based panel
  max-height — recreation may fix a comfortable max-height (e.g. `max-h-[400px]`
  with scroll) since the source computes it against the viewport; the
  `3col`/`active` classes are temporary jQuery hooks — not shipped; the
  select-all label swaps ("Select all"/"Unselect all") are plugin strings —
  keep verbatim; source shows selections inside a single button — recreation
  keeps that single-button pattern (no chips).

## Requirements

### Requirement: Heading and container

The system SHALL render a centered heading on the light-gray page with
generous vertical padding and a narrow centered column for the widget.

#### Scenario: Centered heading and page shell

- **GIVEN** the Fanner app is rendered
- **WHEN** the page loads
- **THEN** a light-gray page (`#efefef`) SHALL show a centered heading
  "Fanner" (the new brand name in place of the source's "Multi-Select #4"
  demo label) at ~20px in dark text (`#212529`) using the Roboto font
  family
- **AND** the page SHALL have generous vertical padding (~112px — the
  source's `div.content` 7rem) above and below the content
- **AND** the widget SHALL sit inside a NARROW centered column
  (≈255px — the source's `col-md-3`) inside a comfortable container
  (≈1140px)
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

- **GIVEN** the user has selected California and New York
- **THEN** the button SHALL display **"California, New York"** (comma +
  space separation, source order of selection, dark `#333` text)
- **AND** the placeholder SHALL NOT be visible while selections exist

#### Scenario: Button shows the N-selected counter

- **GIVEN** the user has selected more states than fit the button width
  OR more than 10 states
- **THEN** the button SHALL display **"N selected"** (e.g. "6 selected"
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

#### Scenario: Panel opens and overflows the column

- **GIVEN** the widget is rendered in its ~255px column
- **WHEN** the user clicks the button
- **THEN** a white floating panel SHALL appear below the button (clicking
  again closes it)
- **AND** the panel SHALL have **NO border**, a **4px border radius**, a
  **min-width of 320px** (deliberately WIDER than the 255px column — it
  overflows to the right), `left: 16px` offset from the button, `padding:
20px`, and a **`0 15px 30px rgba(0,0,0,0.1)`** drop shadow
- **AND** the panel content area SHALL scroll internally when it exceeds
  its max height

#### Scenario: Panel closes on outside click and Escape

- **GIVEN** the panel is open
- **WHEN** the user clicks anywhere outside the widget or presses Escape
- **THEN** the panel SHALL close
- **AND** all selections SHALL be preserved across close/reopen

### Requirement: State list

The system SHALL render all 50 US states as checkbox rows in two columns.

#### Scenario: All 50 states render in two columns

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
- **AND** the rows SHALL be arranged in TWO columns (CSS multi-column,
  zero gap — column 1 fills top-to-bottom first)
- **AND** each row SHALL be a label + native checkbox pair with ~20px left
  padding for the checkbox, ~4px border radius, and `#efefef` background on
  hover and on selected rows

### Requirement: Selecting and deselecting states

The system SHALL toggle a state's selection when its row is clicked and
KEEP the panel open (faithful to the plugin — unlike the Select2 members).

#### Scenario: Toggling a row keeps the panel open

- **GIVEN** the panel is open
- **WHEN** the user clicks the California row
- **THEN** the California checkbox SHALL become checked and its row SHALL
  get the selected treatment (`#efefef` background, 4px radius)
- **AND** the panel SHALL REMAIN OPEN (live-verified plugin behavior —
  multiple rows can be ticked in a row without reopening)
- **WHEN** the user clicks the California row again
- **THEN** the checkbox SHALL uncheck and the row SHALL return to the
  default look
- **AND** the button text SHALL update immediately on every toggle

#### Scenario: Selection updates the button

- **WHEN** the user selects California and then New York
- **THEN** the button SHALL read "California, New York"
- **WHEN** the user then deselects New York
- **THEN** the button SHALL read "California"
- **WHEN** the user deselects the last state
- **THEN** the button SHALL return to the gray placeholder "Select States"

### Requirement: Search filter

The system SHALL filter the state rows as the user types in the search box.

#### Scenario: Filtering narrows the list

- **GIVEN** the panel is open
- **WHEN** the user types "Ca" into the search box
- **THEN** only matching rows SHALL remain visible: California, North
  Carolina, South Carolina (case-insensitive substring match — verified
  live on the source)
- **AND** all other rows SHALL be hidden
- **WHEN** the user clears the search box
- **THEN** all 50 rows SHALL reappear
- **AND** a search with no matches (e.g. "zzz") SHALL leave the list empty
  without error

#### Scenario: Search placeholder

- **GIVEN** the panel is open
- **THEN** the search input SHALL show the placeholder **"Search States"**
  and SHALL be styled with only a bottom border (`1px solid #efefef`), no
  full border/outline

### Requirement: Select all / Unselect all

The system SHALL select or clear every visible row via the panel's toggle
link.

#### Scenario: Select all checks every visible row

- **GIVEN** the panel is open with no search text
- **WHEN** the user clicks SELECT ALL
- **THEN** all 50 checkboxes SHALL become checked and every row SHALL show
  the selected treatment
- **AND** the button SHALL read "50 selected"
- **AND** the link text SHALL flip to **"Unselect all"**
- **WHEN** the user clicks "Unselect all"
- **THEN** every checkbox SHALL uncheck, the button SHALL return to
  "Select States", and the link SHALL flip back to "Select all"

#### Scenario: Select all respects the search filter

- **GIVEN** the search box filters the list to "Ca" matches
- **WHEN** the user clicks SELECT ALL
- **THEN** only the visible (filtered) rows SHALL be selected (the hidden
  rows stay unselected)

### Requirement: Select-all control styling

The system SHALL render the select-all link per the custom token.

#### Scenario: Select-all link style

- **GIVEN** the panel is open
- **THEN** the select-all link SHALL render as inline text in uppercase
  gray (`#aaaaaa`) at ~11px with no underline, darkening to black on hover

### Requirement: Accessibility and composition

The system SHALL make the widget keyboard- and screen-reader-accessible and
compose the page with proper landmarks.

#### Scenario: Full page render

- **GIVEN** the Fanner app is rendered
- **WHEN** the page loads
- **THEN** the heading, the widget button, and (when open) the panel SHALL
  render inside the main landmark
- **AND** the document title SHALL be "Fanner — Multiselect Dropdown"
- **AND** the widget SHALL be operable by keyboard (button focusable;
  Enter/Space toggles the panel; Escape closes it)
- **AND** the rows SHALL expose checkbox semantics to assistive tech
  (real checkboxes or `role="checkbox"` with the same keyboard contract)

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Fanner app is rendered
- **WHEN** the footer displays
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text)

## Verification checklist

- [ ] `openspec/specs/template-fanner/spec.md` exists on main with the full
      section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/fanner/tasks.md` exists on main with design notes and
      the implementation task outline.
- [ ] Fidelity: structure matches the Multiselect 14 preview DOM 1:1
      (light-gray `#efefef` page → centered 20px dark heading → single
      widget in a narrow centered ~255px column: borderless white button
      (40px, 4px radius, tiny shadow, right caret, placeholder "Select
      States" / comma-joined selections / "N selected") toggling a floating
      borderless 4px-radius 320px-min-width shadowed panel with search box
      ("Search States", bottom-rule only), uppercase gray SELECT ALL, and
      the 50 US states in TWO columns of checkbox rows — selected/hover
      rows `#efefef` + 4px radius — plus the minimal Component Dock footer).
- [ ] Tokens used in the app: page `#efefef`; NO brand color (grayscale
      only: white surfaces, `#333` selected-button text, `#aaa` placeholder + select-all text, `#999` caret, `#efefef` selected/hover rows,
      native blue checkboxes); heading 20px dark Roboto; button white +
      NO border + 4px radius + 40px + 13px + `0 1px 1px` shadow
      (hover/active `0 2px 10px`); caret right-10; panel white + NO border +
      4px radius + 320px min-width + left 16px + 20px padding +
      `0 15px 30px rgba(0,0,0,0.1)` shadow; search input border-bottom
      `#efefef`; select-all 11px uppercase `#aaa` (hover `#000`); label
      rows `1px 0` margin, 5px vertical padding, 20px left padding,
      4px radius, `#efefef` hover/selected; list `columns-2` gap 0; Roboto
      300/400 via Google Fonts `<link>`.
- [ ] No ColorLib references in `apps/fanner` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] NO images (the source has none); icons only via lucide-react
      (a `ChevronDown`/caret for the button — probed before use). NO
      Bootstrap, NO jQuery, NO jQuery-MultiSelect plugin, NO Select2, NO
      icomoon, NO font-awesome shipped — pure React state.
- [ ] Source behaviors honored: panel opens/closes on button click and
      stays open while selecting (OPPOSITE of Scythe/Sheaf/Sieve — test
      it); outside click + Escape close; button text switches from
      placeholder "Select States" → comma-joined names → "N selected"
      (width overflow OR >10 selections — verify BOTH triggers); search
      filters rows by case-insensitive substring and clears restore all;
      SELECT ALL checks every VISIBLE row and flips its label to "Unselect
      all"; clicking again unselects all; selections persist across
      close/reopen; caret + hover/active shadow states.
- [ ] All 50 US states present in source order with correct (ABBR, Name)
      pairings — the list is fixed, no fetch, no images.
- [ ] Documented deviations (a11y/framework fixes): widget receives an
      `aria-label`; footer added per convention; plugin 250ms search
      debounce → instant filter (behaviorally equivalent); window-based
      max-height → fixed comfortable max-height with scroll; `3col`/`active`
      jQuery-hook classes not shipped; plugin text strings ("Select
      States", "Search States", "Select all"/"Unselect all", " selected")
      kept verbatim; checkbox rendering keeps native browser defaults.
- [ ] Implementer gate: `scripts/verify-app.sh fanner` (typecheck + lint +
      100% coverage tests + build) and `npm run spec:validate`.
