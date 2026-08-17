# Template: Scythe (Multiselect Tags)

## Purpose

Scythe is a single-page multiselect-tags component demo in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Multiselect 11" free template (source:
https://colorlib.com/wp/template/multiselect-11/), built under a DIFFERENT
name (**Scythe** — the eleventh of the selection-themed names for this
Bootstrap Multiselect UI series, after Picker (01), Sifter (02), Winnow
(03), Cull (04), Glean (05), Garner (06), Reap (07), Pluck (08), Thresh
(09), Sickle (10); a scythe is the long-handled larger harvesting blade
that a sickle pairs with — fitting the harvest/selection theme — per the
monorepo naming mandate: never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a minimal, centered demo page (customized Bootstrap 4 +
**Select2 v4** + jQuery 3.3.1 + FontAwesome-free (icomoon loaded but
unused)): a `div.content` (padding 7rem 0) with a centered `h2` "Multi-Select
#1", a hint paragraph "Tags seperate with comma ','", and a single
**Select2 multi-select with free tags**: a white input box (1px `#aaa`
border, 4px radius) with placeholder "Select a tags"; clicking opens a
white dropdown (1px `#aaa` border, 4px radius, 200px max-height scroll)
listing 8 preset options (Design, HTML5, CSS3, jQuery, BS4, Bootstrap,
WordPress, FrontEnd); clicking an option adds it as a **purple tag chip**
(`#65587f` bg, white 14px text, × remove button on the left) and closes
the dropdown; typing in the inline search filters the options
(case-insensitive substring), and typing a comma or space
(`tokenSeparators: [',', ' ']`) creates a **custom tag** from the typed
text. Distinctive behaviors (live-verified): the dropdown **closes after
each selection**; custom tags are created by comma OR space; the placeholder
text only shows when there are no chips; selected options in the list keep
a light `#f4f4f4` selected state (hover `#ddd`); the box border turns
**solid black on focus**. Scythe recreates that structure 1:1 with
matching layout, tokens, typography, and content (no ColorLib assets
copied; the 8 preset tags are the same public tech names).

> NAMING NOTE: the ColorLib source name "Multiselect 11" is FORBIDDEN as
> the app name. **Scythe** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/`
> or any TEMPLATES.md name (verified 2026-08-17). Source slug + preview
> URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Multiselect 11". Listed in TEMPLATES.md under
  **Bootstrap Multiselect (20)** (section header line 821; row at line
  833). Free multiselect tags component template. The `multiselect-11`
  slug appears exactly ONCE in TEMPLATES.md (no dup rows to mark). Series
  siblings already prepped: Multiselect 01 → Picker, 02 → Sifter, 03 →
  Winnow, 04 → Cull, 05 → Glean, 06 → Garner, 07 → Reap, 08 → Pluck (ALL
  Semantic UI based), 09 → Thresh (Select2 based, DARK theme), 10 →
  Sickle (vanilla jQuery, light coral theme). **Multiselect 11 is the
  second Select2 member prepped — but LIGHT themed with a purple brand**:
  back to the white-page UI-kit look like the Semantic members, with
  Select2's chip/option shapes re-tinted by a custom CSS tail.
- **Live preview DOM — REACHABLE (verified 2026-08-17 by direct fetch AND
  browser interaction):** the default preview URL
  `https://preview.colorlib.com/theme/multiselect-11/` returns 404 (`Not
Found`, 9 bytes); the REAL preview URL (same `/theme/bootstrap/` prefix
  as the rest of the Bootstrap UI series) is
  `https://preview.colorlib.com/theme/bootstrap/multiselect-11/` (HTTP
  200, 16,508 bytes, 59 lines — the whole page is tiny). Stylesheets:
  `css/bootstrap.min.css` (Bootstrap 4, minimal usage), `css/select2.min.css`
  (14,965 bytes — Select2 v4 default widget shapes), `css/style.css`
  (2,116 bytes — the custom token tail that re-tints Select2: THIS is the
  real token source), and `fonts/icomoon/style.css` (loaded, but NO icomoon
  glyphs appear anywhere in the DOM — do not ship it). Fonts via cf-fonts
  @font-face blocks in the head: **Roboto 300** (used by the page — the
  `body`/`h1–h6` font-family is Roboto with system fallbacks), plus
  Poppins (300/400/500) and Source Serif Pro (400/600) which are loaded
  but NOT referenced by any style.css rule — ignore them. Scripts:
  `js/jquery-3.3.1.min.js`, `js/popper.min.js`, `js/bootstrap.min.js`
  (loaded, unused — no Bootstrap components on this page),
  `js/select2.min.js` (USED), and `js/main.js` (137 bytes — the whole
  demo config):
  ```js
  $('.js-multiple-select').select2({
    tags: true,
    tokenSeparators: [',', ' '],
    placeholder: 'Select a tags',
  })
  ```
  Screenshot (`multiselect-11.jpg`, 1200×972 AVIF, browser-verified
  2026-08-17): plain WHITE page, centered dark "Multi-Select #1" heading,
  light-gray hint "Tags separate with comma ','" beneath it, and one
  Select2 box: thin light-gray border (`#aaa`), rounded 4px corners,
  placeholder "Select a tags" in gray, and the dropdown OPEN below showing
  the 8 tech options with one option highlighted in a muted
  purple/indigo (`#65587f` family) with white text. Clean, flat, minimal
  component-demo aesthetic — the classic white UI-kit look (Thresh was the
  dark outlier; Scythe is the light + purple Select2 member).
- **Live DOM structure (1:1):**
  - `div.content` (custom: `padding: 7rem 0`; page bg is the customized
    body `#fff`) → `h2.text-center` — "Multi-Select #1" (custom:
    `font-size: 20px`, Roboto; Bootstrap h2 default color `#1a1a1a` /
    inherit black) → `div.container.text-left` (max-width 1140px) →
    `div.row.justify-content-center` → `div.col-7.text-center` (≈58.3% of
    the 1110px content row ≈ 647px — the widget's column):
    - `p.text-black` — "Tags seperate with comma ','" (custom `p` color
      `#b3b3b3` overrides the Bootstrap `.text-black` for color, but
      font-weight 300 shows it light gray; the SOURCE TYPO "seperate" is
      in the original text — recreate verbatim or fix spelling as a
      documented deviation).
    - `select.js-multiple-select.form-control[multiple]` — replaced by
      Select2 with a `.select2-container--default` widget:
      - `.select2-selection--multiple` (the visible box: background
        `#fff`, `border: 1px solid #aaa`, `border-radius: 4px`,
        `cursor: text`; on focus the container gets
        `.select2-container--focus` → `border: solid black 1px`,
        `outline: 0`):
        - `.select2-selection__rendered` (list of chips, `padding: 0 5px`,
          width 100%) — each selected tag is a
          `.select2-selection__choice`: background **`#65587f`**, border
          none (`border-color: rgba(101,88,127,0.2)` then overridden to
          none), `font-size: 14px`, `color: #fff`, `padding: 2px 10px`,
          containing an `<a class="select2-selection__choice__remove">×</a>`
          (remove button appears FIRST/LEFT: color
          `rgba(255,255,255,0.5)`, `margin-right: 10px`, border none,
          no shadow, `.3s` transition, hover → `#fff`) followed by the tag
          text; when there are no chips a `.select2-selection__placeholder`
          ("Select a tags") shows in the rendered list.
        - `.select2-search--inline` input — transparent bg, no
          border/outline/shadow, `position: relative; top: 2px; left: 4px`
          (custom) — the typing surface for filtering AND for creating
          free tags.
      - `.select2-dropdown` (the open panel: background `#fff`,
        `border: 1px solid #aaa`, `border-radius: 4px`, positioned under
        the box, `width: 100%`):
        - `.select2-results__options` (list, no padding/margin,
          `max-height: 200px`, `overflow-y: auto`) — 8 `.select2-results__option`
          rows (Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress,
          FrontEnd): default transparent bg + black text; option with
          `[aria-selected=true]` (previously picked): background `#f4f4f4`
          (hover → `#ddd`, `color: #000` — custom); option being
          highlighted (`.select2-results__option--highlighted[aria-selected]`):
          background **`#65587f`**, `color: #fff` (custom).
  - **Footer:** the original has NO footer; per monorepo convention add a
    minimal attribution footer linking `https://www.componentdock.com/`
    ("Component Dock") so every shipped template carries the required link.
- **Behaviors (main.js + live browser verification):**
  - **Open/close:** clicking the box opens the dropdown; selecting an
    option **closes it** (live-verified: after picking CSS3 and jQuery the
    dropdown collapsed each time). The dropdown also closes on outside
    click / Escape (Select2 default). Typing does NOT close it.
  - **Select preset:** clicking an option adds it as a chip (purple
    `#65587f`), marks it `[aria-selected=true]` in the list, and closes the
    dropdown (live-verified with CSS3 and jQuery).
  - **Free tags:** typing in the inline search then pressing comma `,` OR
    space ` ` (`tokenSeparators: [',', ' ']`) creates a NEW chip from the
    typed text (live-verified: typing "React," → a "React" chip). Select2
    dedupes exact-duplicate tags; empty tokens are ignored. The typed text
    is NOT added if it exactly matches an existing chip.
  - **Filter-as-you-type:** typing in the inline search filters the option
    list by case-insensitive substring (Select2 v4 default matcher);
    clearing the text restores all 8 options.
  - **Remove:** clicking the × (left of a chip) removes that chip; the
    placeholder "Select a tags" returns when the last chip is removed.
  - **Focus:** the box border turns from `#aaa` to solid black while the
    widget has focus (Select2 `.select2-container--focus`).
- **QUIRK — preview URL:** the default
  `https://preview.colorlib.com/theme/multiselect-11/` 404s; the real URL
  is under `/theme/bootstrap/`. (Same as every member of this UI series.)
- **QUIRK — light theme + purple brand:** page `#fff`, black 20px heading,
  light-gray hint `#b3b3b3`, brand purple **`#65587f`** on chips and the
  highlighted option. (Thresh/09 was the dark Select2 outlier; Scythe is
  the light Select2 member.)
- **QUIRK — closes on selection:** unlike Sickle (10, vanilla, stays
  open), selecting a tag in this Select2 member closes the dropdown every
  time. Recreate that behavior.
- **QUIRK — no clear-all, no count:** there is no "clear all" control and
  no selection counter — the only selection UI is the chips themselves and
  the × on each chip. (Yes — that IS the design.)
- **QUIRK — remove button on the LEFT:** Select2 renders the chip's ×
  BEFORE the label text (margin-right 10px). The screenshot and live
  widget both show × on the left. Keep this quirk or document the swap.
- **Visual design (screenshot + live browser):** minimal white page
  (`#fff`), one centered black 20px heading, one light-gray 300-weight
  hint line, ONE full-width Select2 box in a centered ~647px column: white
  4px-radius box (1px `#aaa` border, focus → 1px black), placeholder
  "Select a tags", purple `#65587f` tag chips (white 14px text, 2px/10px
  padding, left × at 50% white), dropdown panel (white, 4px radius, 1px
  `#aaa` border, 200px scroll) with 8 tech options — hover/highlight
  purple `#65587f`/white, previously-selected `#f4f4f4`/black. Signature
  color: dusty purple **#65587f**; text gray `#b3b3b3` / black heading.
- **Section order (1:1 from live DOM):**
  1. **Heading + hint section** — full-width centered `h2` "Multi-Select
     #1" (recreate as the brand name "Scythe", like the other members
     rename their demo headings) at 20px, with the hint paragraph "Tags
     seperate with comma ','" (`#b3b3b3`, weight 300) below it.
  2. **Multiselect tags control** — the Select2-style widget with NO label
     (source has none; add `aria-label` "Select tags" for a11y): white
     box (1px `#aaa`, 4px radius, focus → 1px black) with placeholder
     "Select a tags", inline search field; dropdown of 8 preset options
     (purple highlight; selected state `#f4f4f4`) that filters as you
     type, closes on selection; free tags created by comma OR space;
     purple chips with left × remove; placeholder returns when empty.
  3. **Footer** — no footer in source; minimal Component Dock footer per
     convention.
- **Design tokens:**
  - Page background: **`#fff`** (customized body bg — plain white).
  - Brand accent: **`#65587f`** (dusty purple — tag chips bg, highlighted
    dropdown option bg).
  - Heading: **20px**, black (Bootstrap default), Roboto, centered,
    `div.content` `padding: 7rem 0` (≈112px vertical page padding).
  - Hint text: **`#b3b3b3`**, font-weight **300**, Roboto, ~Bootstrap p
    size (16px), centered under the heading with default margin
    (≈0 0 16px — recreate as ≈`mb-4`).
  - Widget box (`.select2-selection--multiple`): background **`#fff`**,
    `border: 1px solid #aaa`, `border-radius: 4px`, `cursor: text`;
    focus (`.select2-container--focus`) → `border: solid black 1px`,
    `outline: 0`.
  - Placeholder: Select2 default placeholder color (`#999`-ish) styled
    with the box's font; text "Select a tags" — shows only when no chips.
  - Tag chips (`.select2-selection__choice`): background **`#65587f`**,
    border none, `font-size: 14px`, `color: #fff`, `padding: 2px 10px`;
    remove × (`.select2-selection__choice__remove`): color
    `rgba(255,255,255,0.5)`, `margin-right: 10px`, border none, no
    shadow, `.3s` transition, hover → `#fff`; chip row list
    (`__rendered`) `padding: 0 5px`, `padding-bottom: 1px`.
  - Inline search input (`.select2-search--inline .select2-search__field`):
    transparent background, no border, no outline, no box-shadow,
    `position: relative; top: 2px; left: 4px`; the typing surface for
    filtering AND tag creation.
  - Dropdown (`.select2-dropdown`): background **`#fff`**, `border: 1px
solid #aaa`, `border-radius: 4px`, `width: 100%`, positioned flush
    under the box.
  - Options list (`.select2-results__options`): list-style none, margin 0,
    padding 0, **max-height: 200px**, `overflow-y: auto`.
  - Option rows (`.select2-results__option`): default transparent bg +
    black text (~Bootstrap/Select2 default 16px); selected
    (`[aria-selected=true]`): background **`#f4f4f4`** (hover → `#ddd`,
    `color: #000`); highlighted (`.select2-results__option--highlighted`):
    background **`#65587f`**, `color: #fff`.
  - Font: **Roboto** (300 loaded by the source; body and headings) — load
    Roboto 300 + 400 via Google Fonts `<link>` in `index.html`.
  - Body text: default dark (`#1a1a1a`-ish via Bootstrap), 16px; hints
    `#b3b3b3` weight 300.
  - Rhythm: `div.content` `padding: 7rem 0` (≈112px vertical); centered
    column `col-7` ≈647px (of the 1140px container) — recreate with a
    centered `max-w-2xl` container and a centered column capped around
    `max-w-[640px]` (or `max-w-xl` = 36rem ≈ 576px) holding the widget.
- **Recreation approach:** single page, `min-h-screen` white section with
  ~112px top/bottom padding, centered: h2 "Scythe" (20px, black, Roboto),
  hint "Tags separate with comma ','" (`text-[#b3b3b3] font-light`,
  `mb-4`), then a centered `max-w-[640px]` column with a state-driven
  React tags multiselect (no Bootstrap, no jQuery, no Select2): a
  `div`-container styled like `.select2-selection--multiple` (white bg,
  `border border-[#aaa] rounded`, `cursor-text`, `focus-within:border-black`)
  containing: chips (`bg-[#65587f] text-white text-sm px-2.5 py-0.5
rounded-sm` — probe lucide `X` for the remove button, left-aligned
  before the text) + an inline `input` (flex-1, transparent bg, no
  border/outline, placeholder "Select a tags" shown only when empty) that
  filters the option list by case-insensitive substring while typing;
  when the input value contains `,` or a space, the fragment(s) are added
  as chips (dedupe, ignore empty); below the box, when focused/open, a
  dropdown panel (`bg-white border border-[#aaa] rounded max-h-[200px]
overflow-y-auto` absolute or in-flow) listing the 8 preset options —
  click adds the chip and closes the panel; already-selected options show
  `bg-[#f4f4f4]` (hover `#ddd`); the focused/active option shows
  `bg-[#65587f]text-white`; the panel closes on selection AND on
  outside-click/Escape (faithful Select2 defaults); selected chips persist
  (they are the permanent state while options re-open to add more). Plus
  the mandatory minimal Component Dock footer. Icons: lucide-react `X`
  for chip remove (probe exports before use). No images at all (the
  source has none).
- **Fidelity deviations (documented):** source chip × is Select2's plain
  `×` anchor glyph (replaced with a lucide `X` or a styled × span);
  source placeholder grammar "Select a tags" and hint typo "seperate" are
  kept verbatim OR fixed with corrected spelling (pick one per
  implementer preference and note it in the PR); source has NO label/aria
  — recreation adds `aria-label` on the widget for a11y; source has no
  footer — recreation adds the mandatory Component Dock footer; source
  uses Select2's JS-driven filtering/creation — recreation uses React
  state (same visible behavior).

## Requirements

### Requirement: Heading and hint section

The system SHALL render a centered heading and hint paragraph on the white
page.

#### Scenario: Centered heading and hint

- **GIVEN** the Scythe app is rendered
- **WHEN** the page loads
- **THEN** a white page (`#fff`) SHALL show a centered heading "Scythe"
  (the new brand name in place of the source's "Multi-Select #1" demo
  label) at ~20px in black using the Roboto font family
- **AND** a hint paragraph SHALL sit below it reading "Tags separate with
  comma ','" (or the verbatim source text "Tags seperate with comma ','" —
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
  has none; an `aria-label` "Select tags" SHALL be present for assistive
  tech) with a ~4px border radius, a `1px solid #aaa` border, and a
  `cursor: text` affordance
- **AND** when empty, the box SHALL show the placeholder "Select a tags"
  in gray
- **AND** the box SHALL contain an inline search input with no visible
  border/outline/shadow (transparent background)

#### Scenario: Dropdown opens with all preset options

- **WHEN** the user clicks the widget box
- **THEN** a white dropdown panel SHALL appear flush below the box
  (`#fff`, 1px `#aaa` border, ~4px radius, `max-height: 200px` with
  internal scroll)
- **AND** the panel SHALL list all 8 preset options in source order:
  Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd
- **AND** the panel SHALL scroll internally beyond 200px of content if
  more options existed (the 8 fit — the scroll style is structural)

#### Scenario: Filter as you type

- **WHEN** the panel is open and the user types "boot" into the inline
  search
- **THEN** only the Bootstrap option SHALL remain visible
- **AND** filtering SHALL be case-insensitive substring matching (e.g.
  "html" matches HTML5)
- **AND** clearing the search SHALL restore all 8 options
- **AND** typing text that matches no option SHALL leave the panel empty
  (the typed text can still be committed as a free tag — see tag creation)

### Requirement: Selecting preset options as chips

The system SHALL turn a clicked preset option into a tag chip and close
the dropdown.

#### Scenario: Select preset adds chip and closes panel

- **GIVEN** the panel is open
- **WHEN** the user clicks the CSS3 option
- **THEN** a chip SHALL appear in the box labeled "CSS3" with a purple
  `#65587f` background, white text at ~14px, and ~2px/10px padding
- **AND** the placeholder SHALL disappear (chips are present)
- **AND** the dropdown panel SHALL close (Select2 behavior — verified live;
  each selection closes the panel)
- **AND** the CSS3 option SHALL be marked as selected in the list
  (selected-state background `#f4f4f4`) when the panel next opens

#### Scenario: Multiple selections accumulate

- **WHEN** the user selects CSS3 and then jQuery (re-opening the panel
  between picks)
- **THEN** the box SHALL show two chips: "CSS3" and "jQuery"
- **AND** each chip SHALL show a remove button (×) on its LEFT side
  (faithful to Select2) in semi-transparent white
  `rgba(255,255,255,0.5)` with a ~10px gap before the label
- **AND** selecting the same option twice SHALL NOT duplicate the chip

### Requirement: Free-tag creation

The system SHALL let the user create custom tags by typing a value and
pressing comma or space (Select2 `tokenSeparators: [',', ' ']`).

#### Scenario: Comma creates a tag

- **GIVEN** the widget is focused and the panel is open
- **WHEN** the user types "React," into the inline search
- **THEN** a new chip "React" SHALL be added (live-verified against the
  source)
- **AND** the search input SHALL clear after the token is committed

#### Scenario: Space creates a tag

- **WHEN** the user types "Vue " (trailing space) into the inline search
- **THEN** a new chip "Vue" SHALL be added
- **AND** partial text without a comma/space SHALL NOT create a chip until
  a separator is typed

#### Scenario: Duplicate and empty tokens are ignored

- **WHEN** the user types a comma with no text (",") or a tag that already
  exists as a chip
- **THEN** no new chip SHALL be created and no error SHALL surface

### Requirement: Chip removal

The system SHALL remove a chip when its × button is activated.

#### Scenario: Remove a chip

- **GIVEN** the box contains chips "CSS3" and "jQuery"
- **WHEN** the user activates the × on the "CSS3" chip
- **THEN** the "CSS3" chip SHALL be removed and the "jQuery" chip SHALL
  remain
- **WHEN** the user removes the last chip
- **THEN** the placeholder "Select a tags" SHALL reappear

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

- **GIVEN** the Scythe app is rendered
- **WHEN** the page loads
- **THEN** the heading, hint, and the multiselect control SHALL render in
  the main landmark
- **AND** the document title SHALL be "Scythe — Multiselect Tags"

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Scythe app is rendered
- **WHEN** the footer displays
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text)

## Verification checklist

- [ ] `openspec/specs/template-scythe/spec.md` exists on main with the full
      section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/scythe/tasks.md` exists on main with design notes and
      the implementation task outline.
- [ ] Fidelity: structure matches the Multiselect 11 preview DOM 1:1
      (white page → centered 20px black heading → light-gray 300-weight
      hint "Tags separate with comma ','" → Select2-style tags widget in a
      centered ~640px column (white box, 1px `#aaa` 4px radius, focus →
      1px black, placeholder "Select a tags") with inline search, 8 preset
      options (purple `#65587f` highlight), purple chips with left ×,
      200px-scroll dropdown — plus the minimal Component Dock footer).
- [ ] Tokens used in the app: page `#fff`, brand purple `#65587f` (chips +
      highlighted option), hint `#b3b3b3` weight 300, heading 20px black,
      box/dropdown `#fff` + `1px solid #aaa` + 4px radius, focus border
      black, selected option bg `#f4f4f4` (hover `#ddd`), chips `14px`
      white text `2px 10px` padding, remove × `rgba(255,255,255,0.5)`
      left-aligned with 10px gap; Roboto 300/400 via Google Fonts
      `<link>`.
- [ ] No ColorLib references in `apps/scythe` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] NO images (the source has none); icons only via lucide-react (an `X`
      for chip removal — probed before use). NO Select2, NO Bootstrap, NO
      jQuery, NO icomoon, NO font-awesome shipped — pure React state.
- [ ] Source behaviors honored: panel opens on click; selecting a preset
      adds a chip and CLOSES the panel (each selection closes — Sickle did
      the opposite, this member closes); inline search filters by
      case-insensitive substring; comma OR space creates free tags
      (tokenSeparators `[',', ' ']`, dedupe, ignore empty); × removes a
      chip; placeholder returns when empty; panel closes on outside click
      and Escape; chips persist across close/reopen; focus border turns
      black.
- [ ] All 8 preset options present in source order: Design, HTML5, CSS3,
      jQuery, BS4, Bootstrap, WordPress, FrontEnd.
- [ ] Documented deviations (a11y/framework fixes): Select2 × glyph →
      lucide `X`/styled span; source hint typo "seperate" and placeholder
      grammar "Select a tags" kept verbatim or corrected (documented in
      PR); widget got an `aria-label`; footer added per convention;
      Select2 JS behavior → React state.
- [ ] Implementer gate: `scripts/verify-app.sh scythe` (typecheck + lint +
      100% coverage tests + build) and `npm run spec:validate`.
