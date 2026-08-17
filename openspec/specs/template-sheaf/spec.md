# Template: Sheaf (Multiselect Tags)

## Purpose

Sheaf is a single-page multiselect-tags component demo in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Multiselect 12" free template (source:
https://colorlib.com/wp/template/multiselect-12/), built under a DIFFERENT
name (**Sheaf** — the twelfth of the selection-themed names for this
Bootstrap Multiselect UI series, after Picker (01), Sifter (02), Winnow
(03), Cull (04), Glean (05), Garner (06), Reap (07), Pluck (08), Thresh
(09), Sickle (10), Scythe (11); a sheaf is the bound bundle of cut grain
stalks that a scythe (11) reaps — the natural next step in the
harvest/selection theme — per the monorepo naming mandate: never reuse the
ColorLib source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a minimal, centered demo page (customized Bootstrap 4 +
**Select2 v4** + jQuery 3.3.1 + FontAwesome-free (icomoon loaded but
unused)): a `div.content` (padding 7rem 0) on a **light-gray `#efefef`
page** with a centered `h2` "Multi-Select #2", a hint paragraph "State
seperate with comma ','", and a single **Select2 multi-select with free
tags**: a white input box (1px `#aaa` border, 4px radius) with placeholder
"Select a state"; clicking opens a white dropdown (NO border, **7px bottom
radius, large drop shadow** `0 15px 30px rgba(0,0,0,0.2)`, 200px max-height
scroll) listing **8 US-state presets** (Alaska, Hawaii, California, Nevada,
Oregon, Washington, Alabama, Utah); clicking an option adds it as a
**coral/salmon tag chip** (`#f67280` bg, white 14px text, × remove button
on the left) and closes the dropdown; typing in the inline search filters
the options (case-insensitive substring), and typing a comma or space
(`tokenSeparators: [',', ' ']`) creates a **custom tag** from the typed
text. Distinctive behaviors (live-verified): the dropdown **closes after
each selection**; custom tags are created by comma OR space; the placeholder
text only shows when there are no chips; selected options in the list keep
a light `#f4f4f4` selected state (hover `#ddd`); the box border turns
**solid black on focus**. Sheaf recreates that structure 1:1 with matching
layout, tokens, typography, and content (no ColorLib assets copied; the 8
preset states are the same public US-state names).

> NAMING NOTE: the ColorLib source name "Multiselect 12" is FORBIDDEN as
> the app name. **Sheaf** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/`
> or any TEMPLATES.md name (verified 2026-08-17: `apps/shear` and
> `template-shear` exist but `sheaf` is distinct — zero hits across all
> namespaces). Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Multiselect 12". Listed in TEMPLATES.md under
  **Bootstrap Multiselect (20)** (section header line 821; row at line
  834 — `multiselect-12` appears exactly ONCE in TEMPLATES.md, no dup
  rows to mark). Series siblings already prepped: Multiselect 01 → Picker,
  02 → Sifter, 03 → Winnow, 04 → Cull, 05 → Glean, 06 → Garner, 07 → Reap,
  08 → Pluck (ALL Semantic UI based), 09 → Thresh (Select2, DARK theme),
  10 → Sickle (vanilla jQuery, light coral theme), 11 → Scythe (Select2,
  LIGHT theme, **purple** `#65587f` brand). **Multiselect 12 is the third
  Select2 member — LIGHT gray page with a CORAL/salmon brand**
  `#f67280` and a shadowed borderless dropdown, themed around US states.
- **Live preview DOM — REACHABLE (verified 2026-08-17 by direct fetch AND
  browser interaction):** the default preview URL
  `https://preview.colorlib.com/theme/multiselect-12/` returns 404 (`Not
Found`, 9 bytes); the REAL preview URL (same `/theme/bootstrap/` prefix
  as the rest of the Bootstrap UI series) is
  `https://preview.colorlib.com/theme/bootstrap/multiselect-12/` (HTTP
  200, 16,514 bytes, 59 lines — the whole page is tiny). Title tag:
  "Multi Select #2". Stylesheets: `css/bootstrap.min.css` (Bootstrap 4,
  minimal usage), `css/select2.min.css` (14,965 bytes — Select2 v4
  default widget shapes), `css/style.css` (2,305 bytes — the custom
  token tail that re-tints Select2 AND the page: THIS is the real token
  source), and `fonts/icomoon/style.css` (loaded, but NO icomoon glyphs
  appear anywhere in the DOM — do not ship it). Fonts via cf-fonts
  @font-face blocks in the head: **Roboto 300** (used by the page — the
  `body`/`h1–h6` font-family is Roboto with system fallbacks), plus
  Poppins (300/400/500) and Source Serif Pro (400/600) which are loaded
  but NOT referenced by any style.css rule — ignore them. Scripts:
  `js/jquery-3.3.1.min.js`, `js/popper.min.js`, `js/bootstrap.min.js`
  (loaded, unused — no Bootstrap components on this page),
  `js/select2.min.js` (USED), and `js/main.js` (the whole demo config):
  ```js
  $(function () {
    $('.js-multiple-select').select2({
      tags: true,
      tokenSeparators: [',', ' '],
      placeholder: 'Select a state',
    })
  })
  ```
  Screenshot (`multiselect-12.jpg`, 1200×972 AVIF, browser-verified
  2026-08-17): LIGHT-GRAY page (not white!), centered dark "Multi-Select
  #2" heading, light-gray hint "State separate with comma ','", and one
  Select2 box: thin light-gray border, rounded 4px corners, placeholder
  "Select a state", and the dropdown OPEN below showing the US states
  with one option highlighted in salmon/coral (`#f67280` family) with
  white text. Clean, flat, minimal component-demo aesthetic on a gray
  page — the light-gray twin of Scythe, with a coral brand instead of
  purple.
- **Live DOM structure (1:1):**
  - `div.content` (custom: `padding: 7rem 0`; page bg is the customized
    body **`#efefef`** — light gray) → `h2.text-center` — "Multi-Select
    #2" (custom: `font-size: 20px`, Roboto; dark/black text) →
    `div.container.text-left` (max-width 1140px) → `div.row.justify-content-center`
    → `div.col-7.text-center` (≈58.3% of the 1110px content row ≈ 647px —
    the widget's column):
    - `p.text-black` — "State seperate with comma ','" (custom `p` color
      `#b3b3b3` overrides the Bootstrap `.text-black` for color, but
      font-weight 300 shows it light gray; the SOURCE TYPO "seperate" is
      in the original text — recreate verbatim or fix spelling as a
      documented deviation; the screenshot renders it as "separate" in
      the preview image — pick one and document).
    - `select.js-multiple-select.form-control[multiple]` — replaced by
      Select2 with a `.select2-container--default` widget:
      - `.select2-selection--multiple` (the visible box: background
        `#fff`, `border: 1px solid #aaa`, `border-radius: 4px`,
        `cursor: text`; on focus the container gets
        `.select2-container--focus` → `border: solid black 1px`,
        `outline: 0`):
        - `.select2-selection__rendered` (list of chips, `padding: 0 5px`,
          `padding-bottom: 1px` via custom css) — each selected tag is a
          `.select2-selection__choice`: background **`#f67280`**, border
          none (`border-color: rgba(246,114,128,0.2)` then overridden to
          none), `font-size: 14px`, `color: #fff`, `padding: 2px 10px`,
          containing an `<a class="select2-selection__choice__remove">×</a>`
          (remove button appears FIRST/LEFT: color
          `rgba(255,255,255,0.5)`, `margin-right: 10px`, border none,
          no shadow, `.3s` transition, hover → `#fff`) followed by the tag
          text; when there are no chips a `.select2-selection__placeholder`
          ("Select a state") shows in the rendered list.
        - `.select2-search--inline` input — transparent bg, no
          border/outline/shadow, `position: relative; top: 2px; left: 4px`
          (custom) — the typing surface for filtering AND for creating
          free tags.
      - `.select2-dropdown` (the open panel: background `#fff`,
        **`border: none`** (custom — NO 1px `#aaa` border like Scythe),
        **`box-shadow: 0 15px 30px 0 rgba(0,0,0,0.2)`** (custom — big
        drop shadow), **`border-radius: 7px`** + **`overflow: hidden`**
        (custom; live computed radius is `0 0 7px 7px` — the top corners
        are square where the dropdown meets the box), positioned under
        the box, `width: 100%`):
        - `.select2-results__options` (list, no padding/margin,
          `max-height: 200px`, `overflow-y: auto` — Select2 base) — 8
          `.select2-results__option` rows (Alaska, Hawaii, California,
          Nevada, Oregon, Washington, Alabama, Utah): default transparent
          bg + black text; option with `[aria-selected=true]` (previously
          picked): background `#f4f4f4` (hover → `#ddd`, `color: #000` —
          custom); option being highlighted
          (`.select2-results__option--highlighted[aria-selected]`):
          background **`#f67280`**, `color: #fff` (custom).
  - **Footer:** the original has NO footer; per monorepo convention add a
    minimal attribution footer linking `https://www.componentdock.com/`
    ("Component Dock") so every shipped template carries the required link.
- **Behaviors (main.js + live browser verification — all verified on the
  live preview 2026-08-17):**
  - **Open/close:** clicking the box opens the dropdown; selecting an
    option **closes it** (live-verified: after picking Hawaii the dropdown
    collapsed). The dropdown also closes on outside click / Escape (Select2
    default). Typing does NOT close it.
  - **Select preset:** clicking an option adds it as a chip (coral
    `#f67280`), marks it `[aria-selected=true]` in the list, and closes the
    dropdown (live-verified with Hawaii).
  - **Free tags:** typing in the inline search then pressing comma `,` OR
    space ` ` (`tokenSeparators: [',', ' ']`) creates a NEW chip from the
    typed text (live-verified: typing "Texas," → a "Texas" chip). Select2
    dedupes exact-duplicate tags; empty tokens are ignored. The typed text
    is NOT added if it exactly matches an existing chip.
  - **Filter-as-you-type:** typing in the inline search filters the option
    list by case-insensitive substring (live-verified: typing "cal" showed
    California and left "cal" as a free-tag candidate option); clearing
    the text restores all 8 options.
  - **Remove:** clicking the × (left of a chip) removes that chip
    (live-verified: removed the Hawaii chip via its ×); the placeholder
    "Select a state" returns when the last chip is removed.
  - **Focus:** the box border turns from `#aaa` to solid black while the
    widget has focus (Select2 `.select2-container--focus`; live computed
    `1px solid rgb(0,0,0)`).
  - **Live computed chip styles:** `rgb(246,114,128)` bg (= `#f67280`),
    white 14px text, padding `2px 10px`, × margin-right 10px — exact match
    to style.css.
- **QUIRK — preview URL:** the default
  `https://preview.colorlib.com/theme/multiselect-12/` 404s; the real URL
  is under `/theme/bootstrap/`. (Same as every member of this UI series.)
- **QUIRK — light-GRAY page + coral brand:** page **`#efefef`** (NOT white
  like Scythe/the Semantic members), dark 20px heading, light-gray hint
  `#b3b3b3`, brand coral **`#f67280`** on chips and the highlighted
  option. (Scythe/11 was the white+purple Select2 member; Sheaf is the
  gray+coral member.)
- **QUIRK — borderless shadowed dropdown:** unlike Scythe (whose dropdown
  has a `1px solid #aaa` border and 4px radius), this member's dropdown
  has **NO border**, a **7px radius** (live: only the bottom corners —
  `0 0 7px 7px`), **`overflow: hidden`**, and a large **drop shadow**
  `0 15px 30px rgba(0,0,0,0.2)`. Recreate that floating-panel look.
- **QUIRK — closes on selection:** like Scythe (and unlike Sickle which
  stays open), selecting a tag closes the dropdown every time. Recreate
  that behavior.
- **QUIRK — no clear-all, no count:** there is no "clear all" control and
  no selection counter — the only selection UI is the chips themselves and
  the × on each chip. (Yes — that IS the design.)
- **QUIRK — remove button on the LEFT:** Select2 renders the chip's ×
  BEFORE the label text (margin-right 10px). The screenshot and live
  widget both show × on the left. Keep this quirk or document the swap.
- **QUIRK — US-state theme:** the 8 presets are US states and the hint
  says "State seperate with comma" — the widget is state-themed, not
  tech-themed (Scythe/Sickle used tech labels). Keep the state theme in
  the recreation (same 8 public state names).
- **Visual design (screenshot + live browser):** minimal LIGHT-GRAY page
  (`#efefef`), one centered dark 20px heading, one light-gray 300-weight
  hint line, ONE full-width Select2 box in a centered ~647px column: white
  4px-radius box (1px `#aaa` border, focus → 1px black), placeholder
  "Select a state", coral `#f67280` tag chips (white 14px text, 2px/10px
  padding, left × at 50% white), floating dropdown panel (white, NO
  border, 7px bottom radius, `0 15px 30px` shadow, 200px scroll) with 8
  state options — hover/highlight coral `#f67280`/white, previously-selected
  `#f4f4f4`/black. Signature color: salmon/coral **#f67280**; text gray
  `#b3b3b3` / dark heading.
- **Section order (1:1 from live DOM):**
  1. **Heading + hint section** — full-width centered `h2` "Multi-Select
     #2" (recreate as the brand name "Sheaf", like the other members
     rename their demo headings) at 20px, with the hint paragraph "State
     separate with comma ','" (`#b3b3b3`, weight 300) below it.
  2. **Multiselect tags control** — the Select2-style widget with NO label
     (source has none; add `aria-label` "Select states" for a11y): white
     box (1px `#aaa`, 4px radius, focus → 1px black) with placeholder
     "Select a state", inline search field; floating dropdown of 8 preset
     states (coral highlight; selected state `#f4f4f4`) that filters as
     you type, closes on selection; free tags created by comma OR space;
     coral chips with left × remove; placeholder returns when empty.
  3. **Footer** — no footer in source; minimal Component Dock footer per
     convention.
- **Design tokens:**
  - Page background: **`#efefef`** (customized body bg — light gray, NOT
    white).
  - Brand accent: **`#f67280`** (salmon/coral — tag chips bg, highlighted
    dropdown option bg).
  - Heading: **20px**, dark/black (Bootstrap default), Roboto, centered,
    `div.content` `padding: 7rem 0` (≈112px vertical page padding).
  - Hint text: **`#b3b3b3`**, font-weight **300**, Roboto, ~Bootstrap p
    size (16px), centered under the heading with default margin
    (≈0 0 16px — recreate as ≈`mb-4`).
  - Widget box (`.select2-selection--multiple`): background **`#fff`**,
    `border: 1px solid #aaa`, `border-radius: 4px`, `cursor: text`;
    focus (`.select2-container--focus`) → `border: solid black 1px`,
    `outline: 0`.
  - Placeholder: Select2 default placeholder color (`#999`-ish) styled
    with the box's font; text "Select a state" — shows only when no chips.
  - Tag chips (`.select2-selection__choice`): background **`#f67280`**,
    border none, `font-size: 14px`, `color: #fff`, `padding: 2px 10px`;
    remove × (`.select2-selection__choice__remove`): color
    `rgba(255,255,255,0.5)`, `margin-right: 10px`, border none, no
    shadow, `.3s` transition, hover → `#fff`; chip row list
    (`__rendered`) `padding: 0 5px`, `padding-bottom: 1px`.
  - Inline search input (`.select2-search--inline .select2-search__field`):
    transparent background, no border, no outline, no box-shadow,
    `position: relative; top: 2px; left: 4px`; the typing surface for
    filtering AND tag creation.
  - Dropdown (`.select2-dropdown`): background **`#fff`**, **`border:
none`** (NO border — unlike Scythe), **`border-radius: 7px`** (live
    computed `0 0 7px 7px` — bottom corners only), **`box-shadow: 0 15px
30px 0 rgba(0,0,0,0.2)`**, **`overflow: hidden`**, `width: 100%`,
    positioned flush under the box (floating-panel look).
  - Options list (`.select2-results__options`): list-style none, margin 0,
    padding 0, **max-height: 200px**, `overflow-y: auto`.
  - Option rows (`.select2-results__option`): default transparent bg +
    black text (~Bootstrap/Select2 default 16px); selected
    (`[aria-selected=true]`): background **`#f4f4f4`** (hover → `#ddd`,
    `color: #000`); highlighted (`.select2-results__option--highlighted`):
    background **`#f67280`**, `color: #fff`.
  - Font: **Roboto** (300 loaded by the source; body and headings) — load
    Roboto 300 + 400 via Google Fonts `<link>` in `index.html`.
  - Body text: default dark (`#1a1a1a`-ish via Bootstrap), 16px; hints
    `#b3b3b3` weight 300.
  - Rhythm: `div.content` `padding: 7rem 0` (≈112px vertical); centered
    column `col-7` ≈647px (of the 1140px container) — recreate with a
    centered `max-w-2xl` container and a centered column capped around
    `max-w-[640px]` (or `max-w-xl` = 36rem ≈ 576px) holding the widget.
- **Recreation approach:** single page, `min-h-screen` light-gray section
  (**`bg-[#efefef]`** — NOT white) with ~112px top/bottom padding,
  centered: h2 "Sheaf" (20px, dark, Roboto), hint "State separate with
  comma ','" (`text-[#b3b3b3] font-light`, `mb-4`), then a centered
  `max-w-[640px]` column with a state-driven React tags multiselect (no
  Bootstrap, no jQuery, no Select2): a `div`-container styled like
  `.select2-selection--multiple` (white bg, `border border-[#aaa] rounded`,
  `cursor-text`, `focus-within:border-black`) containing: chips
  (`bg-[#f67280] text-white text-sm px-2.5 py-0.5 rounded-sm` — probe
  lucide `X` for the remove button, left-aligned before the text) + an
  inline `input` (flex-1, transparent bg, no border/outline, placeholder
  "Select a state" shown only when empty) that filters the option list by
  case-insensitive substring while typing; when the input value contains
  `,` or a space, the fragment(s) are added as chips (dedupe, ignore
  empty); below the box, when focused/open, a floating dropdown panel
  (`bg-white rounded-b-[7px] shadow-[0_15px_30px_rgba(0,0,0,0.2)]
overflow-hidden max-h-[200px] overflow-y-auto` — NO border! — absolute
  or in-flow) listing the 8 preset states — click adds the chip and closes
  the panel; already-selected options show `bg-[#f4f4f4]` (hover `#ddd`);
  the focused/active option shows `bg-[#f67280] text-white`; the panel
  closes on selection AND on outside-click/Escape (faithful Select2
  defaults); selected chips persist (they are the permanent state while
  options re-open to add more). Plus the mandatory minimal Component Dock
  footer. Icons: lucide-react `X` for chip remove (probe exports before
  use). No images at all (the source has none).
- **Fidelity deviations (documented):** source chip × is Select2's plain
  `×` anchor glyph (replaced with a lucide `X` or a styled × span); source
  placeholder grammar "Select a state" is fine but the hint typo
  "seperate" should be kept verbatim OR fixed with corrected spelling
  "separate" (pick one per implementer preference and note it in the PR;
  the screenshot renders "separate"); source has NO label/aria —
  recreation adds `aria-label` on the widget for a11y; source has no
  footer — recreation adds the mandatory Component Dock footer; source
  uses Select2's JS-driven filtering/creation — recreation uses React
  state (same visible behavior).

## Requirements

### Requirement: Heading and hint section

The system SHALL render a centered heading and hint paragraph on the
light-gray page.

#### Scenario: Centered heading and hint

- **GIVEN** the Sheaf app is rendered
- **WHEN** the page loads
- **THEN** a light-gray page (`#efefef`) SHALL show a centered heading
  "Sheaf" (the new brand name in place of the source's "Multi-Select #2"
  demo label) at ~20px in dark text using the Roboto font family
- **AND** a hint paragraph SHALL sit below it reading "State separate with
  comma ','" (or the verbatim source text "State seperate with comma ','" —
  spelling choice documented in the PR) in light gray `#b3b3b3` at
  font-weight 300
- **AND** the page SHALL have generous vertical padding (~112px — the
  source's `div.content` 7rem) above and below the content
- **AND** the content SHALL be centered horizontally inside a comfortable
  container (≈1140px) with the widget column capped around ~640px

### Requirement: Multiselect tags widget

The system SHALL render a Select2-style multi-select with an inline search
field, preset options, and free-text tags.

#### Scenario: Widget renders with placeholder

- **GIVEN** the heading and hint render
- **WHEN** the control area displays
- **THEN** a white widget box SHALL render (no label element — the source
  has none; an `aria-label` "Select states" SHALL be present for assistive
  tech) with a ~4px border radius, a `1px solid #aaa` border, and a
  `cursor: text` affordance
- **AND** when empty, the box SHALL show the placeholder "Select a state"
  in gray
- **AND** the box SHALL contain an inline search input with no visible
  border/outline/shadow (transparent background)

#### Scenario: Dropdown opens with all preset options

- **WHEN** the user clicks the widget box
- **THEN** a white floating dropdown panel SHALL appear flush below the box
  (`#fff`, **NO border**, ~7px bottom radius, `overflow: hidden`, drop
  shadow `0 15px 30px rgba(0,0,0,0.2)`, `max-height: 200px` with internal
  scroll)
- **AND** the panel SHALL list all 8 preset options in source order:
  Alaska, Hawaii, California, Nevada, Oregon, Washington, Alabama, Utah
- **AND** the panel SHALL scroll internally beyond 200px of content if
  more options existed (the 8 fit — the scroll style is structural)

#### Scenario: Filter as you type

- **WHEN** the panel is open and the user types "cal" into the inline
  search
- **THEN** only the California option SHALL remain visible (plus the typed
  text as a free-tag candidate, faithful to Select2)
- **AND** filtering SHALL be case-insensitive substring matching (e.g.
  "ala" matches both Alabama and Alaska)
- **AND** clearing the search SHALL restore all 8 options
- **AND** typing text that matches no option SHALL leave the panel empty
  (the typed text can still be committed as a free tag — see tag creation)

### Requirement: Selecting preset options as chips

The system SHALL turn a clicked preset option into a tag chip and close
the dropdown.

#### Scenario: Select preset adds chip and closes panel

- **GIVEN** the panel is open
- **WHEN** the user clicks the Hawaii option
- **THEN** a chip SHALL appear in the box labeled "Hawaii" with a coral
  `#f67280` background, white text at ~14px, and ~2px/10px padding
- **AND** the placeholder SHALL disappear (chips are present)
- **AND** the dropdown panel SHALL close (Select2 behavior — verified live;
  each selection closes the panel)
- **AND** the Hawaii option SHALL be marked as selected in the list
  (selected-state background `#f4f4f4`) when the panel next opens

#### Scenario: Multiple selections accumulate

- **WHEN** the user selects Hawaii and then Alaska (re-opening the panel
  between picks)
- **THEN** the box SHALL show two chips: "Hawaii" and "Alaska"
- **AND** each chip SHALL show a remove button (×) on its LEFT side
  (faithful to Select2) in semi-transparent white
  `rgba(255,255,255,0.5)` with a ~10px gap before the label
- **AND** selecting the same option twice SHALL NOT duplicate the chip

### Requirement: Free-tag creation

The system SHALL let the user create custom tags by typing a value and
pressing comma or space (Select2 `tokenSeparators: [',', ' ']`).

#### Scenario: Comma creates a tag

- **GIVEN** the widget is focused and the panel is open
- **WHEN** the user types "Texas," into the inline search
- **THEN** a new chip "Texas" SHALL be added (live-verified against the
  source)
- **AND** the search input SHALL clear after the token is committed

#### Scenario: Space creates a tag

- **WHEN** the user types "Ohio " (trailing space) into the inline search
- **THEN** a new chip "Ohio" SHALL be added
- **AND** partial text without a comma/space SHALL NOT create a chip until
  a separator is typed

#### Scenario: Duplicate and empty tokens are ignored

- **WHEN** the user types a comma with no text (",") or a tag that already
  exists as a chip
- **THEN** no new chip SHALL be created and no error SHALL surface

### Requirement: Chip removal

The system SHALL remove a chip when its × button is activated.

#### Scenario: Remove a chip

- **GIVEN** the box contains chips "Hawaii" and "Texas"
- **WHEN** the user activates the × on the "Hawaii" chip
- **THEN** the "Hawaii" chip SHALL be removed and the "Texas" chip SHALL
  remain
- **WHEN** the user removes the last chip
- **THEN** the placeholder "Select a state" SHALL reappear

### Requirement: Focus styling

The system SHALL show the Select2 focus treatment on the widget box.

#### Scenario: Focus border turns black

- **WHEN** the widget or its inline search gains focus
- **THEN** the box border SHALL change from `1px solid #aaa` to `1px solid
black` (verified live on the source)
- **AND** no outline SHALL appear (Select2 removes the outline)

### Requirement: Dropdown dismissal

The system SHALL close the dropdown on selection, outside click, and
Escape (Select2 defaults — faithful to the source).

#### Scenario: Panel closes on outside click and Escape

- **GIVEN** the panel is open
- **WHEN** the user clicks anywhere outside the widget or presses Escape
- **THEN** the panel SHALL close
- **AND** the chips and their order SHALL be preserved across close/reopen

### Requirement: Page composition

The system SHALL compose the page with a main landmark and a document
title.

#### Scenario: Full page render

- **GIVEN** the Sheaf app is rendered
- **WHEN** the page loads
- **THEN** the heading, hint, and the multiselect control SHALL render in
  the main landmark
- **AND** the document title SHALL be "Sheaf — Multiselect Tags"

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Sheaf app is rendered
- **WHEN** the footer displays
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text)

## Verification checklist

- [ ] `openspec/specs/template-sheaf/spec.md` exists on main with the full
      section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/sheaf/tasks.md` exists on main with design notes and
      the implementation task outline.
- [ ] Fidelity: structure matches the Multiselect 12 preview DOM 1:1
      (light-gray `#efefef` page → centered 20px dark heading → light-gray
      300-weight hint "State separate with comma ','" → Select2-style tags
      widget in a centered ~640px column (white box, 1px `#aaa` 4px radius,
      focus → 1px black, placeholder "Select a state") with inline search,
      8 preset state options (coral `#f67280` highlight), coral chips with
      left ×, borderless shadowed 200px-scroll dropdown — plus the minimal
      Component Dock footer).
- [ ] Tokens used in the app: page `#efefef`, brand coral `#f67280` (chips + highlighted option), hint `#b3b3b3` weight 300, heading 20px dark,
      box `#fff` + `1px solid #aaa` + 4px radius, focus border black,
      selected option bg `#f4f4f4` (hover `#ddd`), chips `14px` white text
      `2px 10px` padding, remove × `rgba(255,255,255,0.5)` left-aligned
      with 10px gap, dropdown `#fff` NO border + 7px bottom radius +
      `0 15px 30px rgba(0,0,0,0.2)` shadow + `overflow-hidden`; Roboto
      300/400 via Google Fonts `<link>`.
- [ ] No ColorLib references in `apps/sheaf` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] NO images (the source has none); icons only via lucide-react (an `X`
      for chip removal — probed before use). NO Select2, NO Bootstrap, NO
      jQuery, NO icomoon, NO font-awesome shipped — pure React state.
- [ ] Source behaviors honored: panel opens on click; selecting a preset
      adds a chip and CLOSES the panel (each selection closes — same as
      Scythe, opposite of Sickle); inline search filters by
      case-insensitive substring; comma OR space creates free tags
      (tokenSeparators `[',', ' ']`, dedupe, ignore empty); × removes a
      chip; placeholder returns when empty; panel closes on outside click
      and Escape; chips persist across close/reopen; focus border turns
      black.
- [ ] All 8 preset options present in source order: Alaska, Hawaii,
      California, Nevada, Oregon, Washington, Alabama, Utah.
- [ ] Documented deviations (a11y/framework fixes): Select2 × glyph →
      lucide `X`/styled span; source hint typo "seperate" kept verbatim or
      corrected to "separate" (documented in PR; screenshot shows
      "separate"); widget got an `aria-label`; footer added per
      convention; Select2 JS behavior → React state.
- [ ] Implementer gate: `scripts/verify-app.sh sheaf` (typecheck + lint +
      100% coverage tests + build) and `npm run spec:validate`.
