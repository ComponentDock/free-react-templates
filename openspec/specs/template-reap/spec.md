# Template: Reap (Bootstrap Multiselect — Semantic UI Widget)

## Purpose

Reap is a single-page multiselect-dropdown component demo in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Multiselect 07" free template (source:
https://colorlib.com/wp/template/multiselect-07/), built under a DIFFERENT
name (**Reap** — the seventh of the selection-themed names for this Bootstrap
Multiselect UI series, after Picker/Sifter/Winnow/Cull/Glean/Garner; "to
reap" is to gather or harvest, fitting a widget that collects several options
from a list — per the monorepo naming mandate: never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a minimal, centered demo page (Bootstrap 4.3.1 + **Semantic
UI 2.2.13** — NOTE: unlike Multiselect 01–04, which use the
bootstrap-multiselect plugin (green `#52de97`, "Select all" row), unlike
Multiselect 05, which uses select2 (orange `#fd5f00`, search + tags +
clear-all), and unlike Multiselect 06, which uses a custom hand-rolled
`.selectMultiple` jQuery widget (deep orange `#f16821`), **Multiselect 07
uses Semantic UI's dropdown widget** (rose `#e8647c`) — a FOURTH widget
family in the series): a `section.ftco-section` with a centered
`h2.heading-section` "Multiselect #07", a field label "Select Topics", and
below it a single Semantic UI `ui selection fluid dropdown` multiselect —
one white rounded box (1px `rgba(34,36,38,0.15)` border, ~4.6px radius)
showing the grey default placeholder "Select Topics" until options are
picked; picked options become rose `#e8647c` chips with white labels and a
white ×; a chevron icon sits at the right (down when closed, up when open).
Opening the dropdown turns the box border AND its text rose `#e8647c`
(radius 4px) and the menu below fills solid rose `#e8647c` with a soft
offset shadow; every option row (Family, Family Law, Friends, Co-workers,
Startup, Work, Basketball, Baseball, Investors, US Embassy) renders with
WHITE text and a small hollow-circle icon, separated by lighter-rose
`#ef90a2` row rules, and hovering a row inverts it to white background with
rose text. Selecting an option removes it from the menu and adds a chip to
the box; clicking a chip's × moves the option back into the menu. There is
NO search box, NO clear-all, and NO select-all. The whole template is ONE
interactive surface — the multiselect control. Reap recreates that structure
1:1 with matching layout, tokens, typography, and content (no ColorLib
assets copied).

> NAMING NOTE: the ColorLib source name "Multiselect 07" is FORBIDDEN as the
> app name. **Reap** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-17). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Multiselect 07". Listed in TEMPLATES.md under
  **Bootstrap Multiselect (20)** (section header line 821; row at line 829).
  Free multiselect-dropdown component template. The `multiselect-07` slug
  appears exactly ONCE in TEMPLATES.md (no dup rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-17 by direct fetch AND
  screenshot cross-check):** the default preview URL
  `https://preview.colorlib.com/theme/multiselect-07/` returns 404 (9
  bytes); the REAL preview URL (same `/theme/bootstrap/` prefix as the rest
  of the Bootstrap UI series, e.g. Multiselect 01–06, Modal 01–20) is
  `https://preview.colorlib.com/theme/bootstrap/multiselect-07/` (HTTP 200,
  4,000 bytes — the entire page is ~60 lines). Stylesheets: `css/style.css`
  (222,822 bytes = **CUSTOMIZED Bootstrap 4.3.1** + a custom Semantic-UI
  token tail — the last ~180 lines, from ~line 8135 on, are the real token
  source, extracted below), Semantic UI 2.2.13 from the jsdelivr CDN
  (`semantic.min.css` — the widget's default chrome: box border/radius,
  chips, menu, icons), and font-awesome 4.7 (loaded and USED for the menu
  row bullet: `content: '\f192'` = `fa-circle-thin`, a small hollow circle —
  replace with lucide `Circle`). **Lato** (300/400/700) via cf-fonts
  @font-face blocks in the head — the custom tail sets `body { font-family:
"Lato", Arial, sans-serif; font-size: 16px; line-height: 1.8; background:
#fff; color: gray }` and `h1–h5 { line-height: 1.5; font-weight: 400;
font-family: "Lato", ...; color: #000 }`. Scripts: `js/jquery.min.js`,
  `js/popper.js`, `js/bootstrap.min.js`, Semantic UI 2.2.13 `semantic.min.js`
  (CDN), and `js/main.js` — which does ONE thing: `$('.label.ui.dropdown')
.dropdown();` (plus no-op handlers for `.no.label.ui.dropdown` and
  `.ui.button` that match nothing on this page). All dropdown behavior is
  stock Semantic UI 2.2 multiple-selection semantics (no custom widget code
  — unlike Multiselect 06's hand-rolled `main.js`). Screenshot
  (`multiselect-07.jpg`, 1200×972, browser-verified 2026-08-17): white page,
  centered dark "Multiselect #07" heading, "Select Topics" label, and the
  widget OPEN with THREE chips already selected — Co-workers, Baseball,
  Startup (rose `#e8647c` chips, white labels + ×) — and the solid-rose menu
  below listing only the UNselected options (Family, Family Law, Friends,
  Work [hovered → white bg, rose text], Basketball, Investors, US Embassy)
  with white text and hollow-circle bullets; clean, utilitarian
  component-demo aesthetic; the rose `#e8647c` is the only hue.
- **Live DOM structure (1:1):**
  - `section.ftco-section` (`padding: 7em 0` — nothing else; page bg stays
    `#fff`) → `div.container` → two `div.row.justify-content-center`:
    1. `div.col-md-6.text-center.mb-5` → `h2.heading-section` —
       "Multiselect #07" (custom: `font-size: 28px; color: #000`; inherits
       Lato, weight 400).
    2. `div.col-lg-4.col-md-6.d-flex.justify-content-center.align-items-center`
       → `div.inline.w-100.field` → `label` "Select Topics" → a native
       `select[name="skills"][multiple]` styled with Semantic classes
       `label ui selection fluid dropdown` (the visible widget; Semantic
       hides the raw select after init). Options: `<option value="">Select
Topics</option>` (placeholder) then 10 real options — Family (1),
       Family Law (2), Friends (3), Co-workers (4), Startup (5), Work (6),
       Basketball (7), Baseball (8), Investors (9), US Embassy (10).
  - No navbar, no other sections, no footer in the source (the mandatory
    Component Dock footer is a monorepo-convention addition).
- **Widget chrome (Semantic UI 2.2 defaults + the custom tail):**
  - Closed box `.ui.selection.dropdown`: `border: 1px solid
rgba(34,36,38,0.15)`, `border-radius: 0.28571429rem` (~4.6px), custom
    `padding: 8px 10px`, `transition: 0.3s`; hover (`:hover`) →
    `border: 1px solid #e8647c` and the `.text` turns `#e8647c`; `:focus` →
    `border-color: #e8647c`. The visible text `.ui.dropdown > .text` is
    custom `font-size: 14px !important`; the default (placeholder) text uses
    Semantic's muted default gray (rgba(191,191,191,0.87)-ish).
  - Chevron: Semantic's own "dropdown" icon font glyph, right-aligned,
    custom `top: 14px` (`.ui.selection.dropdown > .dropdown.icon`); points
    down when closed, up when open (Semantic rotate). Replace with lucide
    `ChevronDown`/`ChevronUp`.
  - Active (open) box `.ui.selection.active.dropdown`: `border-color:
#e8647c !important; border-radius: 4px !important;` the `.text` turns
    `#e8647c`.
  - Open menu `.ui.selection.active.dropdown .menu`: `background: #e8647c`,
    `border-radius: 4px`, `margin-top: 4px`, `border-color: #e8647c`,
    `box-shadow: 0 3px 19px -15px rgba(0,0,0,0.41)`; custom tail sets
    `max-height: none` for the active menu (Semantic's default menu is
    `max-height: 14.28571429rem; overflow-y: auto` — the screenshot shows a
    scrollbar, so keep a sensible `max-height` + `overflow-y: auto` on the
    React menu to match the screenshot).
  - Option rows `.ui.selection.dropdown .menu > .item`: `color: #fff`,
    `font-size: 16px !important`, `border-top: 1px solid #ef90a2`,
    `padding: 15px 15px 15px 35px !important`, `position: relative`; a
    `::after` renders the hollow-circle bullet (FA `\f192`, absolute left
    15px, vertically centered, 12×12, `font-size: 12px`). Hover
    `.ui.dropdown .menu > .item:hover`: `background: #fff; color: #e8647c`
    (0.3s transition).
  - Selected chips `.ui.multiple.dropdown > .label` (`.ui.label`): custom
    `background: #e8647c`; `box-shadow: none`; the remove link
    `.ui.label a` is `color: #fff; padding: 6px 8px !important` (the ×),
    `.ui.label > .delete.icon { opacity: 1 }`; chip labels inherit white
    text on the rose background.
  - Field label above the box: Semantic `.field > label` default (bold-ish
    dark gray; reads grey in the screenshot).
- **QUIRK — hidden native `<select>`:** the visible control is entirely
  Semantic-rendered; the native `select[multiple]` exists only as the data
  source (its semantics are the closest thing to a real listbox in the
  source). In the recreation, build the listbox from real state: a trigger
  with `aria-haspopup="listbox"` + `aria-expanded`, a `role="listbox"`
  panel whose options expose real selected state (documented improvement
  over the source, same as the sibling Garner spec).
- **QUIRK — the menu shows ONLY the unselected set (VERIFIED in the
  screenshot):** three options were already selected (Co-workers, Baseball,
  Startup) and ALL THREE were absent from the open menu — Semantic 2.2
  multiple selection moves picked rows out of the menu into chips. Selecting
  a row removes it from the menu + adds a chip; chip × re-inserts the row
  into the menu. The list IS the unselected set (same interaction as the
  Multiselect 06 custom widget, but via stock Semantic behavior).
- **QUIRK — the menu STAYS OPEN while selecting:** Semantic 2.2 multiple
  dropdowns do not close on selection (single dropdowns do). It closes on
  outside click (Semantic binds a document click-outside handler), Escape,
  or re-toggling the trigger. Recreate all three close paths.
- **QUIRK — placeholder visibility:** the "Select Topics" placeholder text
  (the `<option value="">`) shows only while NOTHING is selected; the first
  chip hides it, and it returns when the last chip is removed. Note there
  are TWO "Select Topics" strings: the static field `label` ABOVE the box
  (always visible) and the in-box placeholder (conditional).
- **QUIRK — no search / no clear-all / no select-all:** Semantic dropdowns
  only render a search box when the `search` class is present — this demo's
  select has NO `search` class and main.js never adds one; there is no
  clear-all button and no "Select all" row. Do not add any of them.
- **QUIRK — scrollable menu:** Semantic's default menu `max-height:
14.28571429rem; overflow-y: auto` is overridden to `max-height: none` in
  the ACTIVE state by the custom tail, yet the screenshot shows a
  scrollbar — implement the menu with `max-height` (~14.3rem) +
  `overflow-y: auto` so 10 rows scroll like the shot, and note the
  discrepancy (source CSS vs screenshot) in the PR.
- **Visual design (screenshot + CSS):** pure white `#fff` page, one centered
  dark 28px Lato heading, a "Select Topics" field label, and ONE floating
  control: a white box (1px `rgba(34,36,38,0.15)` border, ~4.6px radius,
  8px/10px padding, 14px text) that turns rose on hover/focus/open; the
  open menu is SOLID rose `#e8647c` (4px radius, `0 3px 19px -15px
rgba(0,0,0,0.41)` shadow) with white option rows (16px, 15px/35px padding),
  `#ef90a2` row rules and hollow-circle bullets, hovered row inverts to
  white/rose; selected chips are rose `#e8647c` with white text + white ×.
  Signature color: the rose **`#e8647c`** (DIFFERENT from 01–04's green
  `#52de97`, 05's orange `#fd5f00`, AND 06's deep orange `#f16821` — this
  variant's accent is a pink/rose). The page itself is WHITE (not `#fafafa`
  like 06) and the dropdown CONTAINS the brand color (06's dropdown was
  white with an orange hover only).
- **Section order (1:1 from live DOM):**
  1. **Heading section** — full-width centered `h2.heading-section`
     "Multiselect #07" (recreate as the brand name "Reap", like the sibling
     recreations rename their demo heading).
  2. **Multiselect control** — field label "Select Topics" + the Semantic
     multiple-selection dropdown: white box (1px border, ~4.6px radius,
     chevron right) with grey placeholder "Select Topics" (hidden once ≥1
     selection) and rose `#e8647c` chips (white label + white ×); open menu
     solid rose with white circled rows, `#ef90a2` row rules, scroll, hover
     invert — listing ONLY the unselected options.
  3. **Footer** — no footer in source; minimal Component Dock footer per
     convention.
- **Design tokens:**
  - Brand accent: **`#e8647c`** (rose/salmon pink — the open-menu fill with
    white text, the chip background, the active box border + text color, the
    box hover/focus border, the hovered-row text color, and the demo's `a`
    link color / `.bg-primary`. The source's ONLY hue — DIFFERENT from 01–04
    `#52de97` green, 05 `#fd5f00` orange, and 06 `#f16821` deep orange).
  - Row rule: **`#ef90a2`** (lighter rose — `border-top` between menu rows).
  - Box: **white** bg, 1px `rgba(34,36,38,0.15)` border, radius ~4.6px
    (active 4px), `padding: 8px 10px`, text `font-size: 14px`.
  - Menu: **`#e8647c`** fill, radius **4px**, `margin-top: 4px`, shadow
    `0 3px 19px -15px rgba(0,0,0,0.41)`, `max-height: ~14.3rem` +
    `overflow-y: auto` (per screenshot), rows `padding: 15px 15px 15px 35px`,
    `font-size: 16px`, white text, hollow-circle bullet (12px, left 15px).
  - Chips: **`#e8647c`** bg (`box-shadow: none`), white label, white ×
    (`padding: 6px 8px`).
  - Heading: **28px**, **`#000`**, Lato weight 400, line-height 1.5.
  - Body: **`#fff`** background, Lato 16px line-height 1.8, text **gray**,
    links `#e8647c`.
  - Field label: Semantic default dark gray (bold-ish), above the box.
  - Font: **Lato** (300/400/700 via Google Fonts `<link>` — the source loads
    300/400/700; headings use weight 400).
  - Rhythm: `section.ftco-section` `padding: 7em 0` (≈112px vertical);
    centered columns — heading `col-md-6`, control `col-lg-4 col-md-6`;
    `mb-5` (48px) gap under the heading; the dropdown is FLUID (`width:
100%` of the `col-lg-4` column, ~255–447px depending on breakpoint — not
    a fixed 240px like Multiselect 06). No images at all (the source has
    none).
- **Recreation approach:** single page, `min-h-screen` `#fff` section with
  ~112px top/bottom padding, centered: h2 "Reap" (28px, #000, Lato 400)
  with `mb-12`-ish gap, the "Select Topics" field label, then the Semantic
  UI multiple-selection dropdown reimplemented as state-driven React (no
  Bootstrap, no Semantic, no jQuery): a trigger `div` (`role` +
  `aria-haspopup="listbox"` `aria-expanded={open}`, keyboard-activatable)
  styled as the white box (1px `rgba(34,36,38,0.15)` border, `rounded`,
  ~4.6px radius, `px-2.5 py-2`, `text-sm`, hover/focus/open → rose border
  `#e8647c`) containing the placeholder "Select Topics" (muted grey, hidden
  once ≥1 selection), the rose chips (`bg-[#e8647c]` white label + white ×
  remove button with aria-label), and a chevron right (`ChevronDown`/`Up`,
  `top-14px`-ish); panel `role="listbox"` (`bg-[#e8647c]`, `rounded`,
  `mt-1`, shadow `0 3px 19px -15px rgba(0,0,0,0.41)`, `max-h` +
  `overflow-y-auto`) listing ONLY the unselected options as white rows
  (16px, `py-[15px] pl-[35px] pr-[15px]`, hollow-circle bullet via lucide
  `Circle` 12px, `border-t border-[#ef90a2]`, hover → white bg + rose text).
  Select → chip appears + row leaves the list (menu STAYS open); chip × →
  row returns; placeholder returns when empty. Close: outside click, Escape,
  re-toggle. Selections persist across open/close. Plus the mandatory
  minimal Component Dock footer. Icons: lucide-react (`X`, `ChevronDown`,
  `ChevronUp`, `Circle` — probe exports before use — see tasks.md). No
  images at all (the source has none).
- **ColorLib vs the rest of the series:** Multiselect 01–04 (Picker/Sifter/
  Winnow/Cull specs) use the bootstrap-multiselect plugin (green `#52de97`,
  "Select all" row, 6 language options); Multiselect 05 (Glean) uses
  **select2** (orange `#fd5f00`, 13 generic options, search + tags +
  clear-all, no select-all); Multiselect 06 (Garner) uses a **custom jQuery
  widget** (`#f16821`, 5 language options, 240px fixed-width box, chips-with-
  × only); **THIS template uses Semantic UI 2.2.13** (rose `#e8647c`, FLUID
  box width, field label above, 10 options about relationships/life topics,
  white page `#fff`, hollow-circle row bullets, solid-rose open menu). Do
  NOT copy the sibling specs' token values — this template's tokens are the
  ones above.

## Requirements

### Requirement: Heading section

The system SHALL render a centered heading section on a white page.

#### Scenario: Centered heading

- **GIVEN** the Reap app is rendered
- **WHEN** the page loads
- **THEN** a white (`#fff`) page SHALL show a centered heading "Reap" (the
  new brand name in place of the source's "Multiselect #07" demo label) at
  ~28px in `#000`
- **AND** the heading SHALL use the Lato font family at weight 400 with
  line-height 1.5
- **AND** the page SHALL have generous vertical padding (~112px — the
  source's `ftco-section` 7em) above and below the content
- **AND** the heading SHALL be followed by a "Select Topics" field label
  (visible at all times) and the control column SHALL be centered
  horizontally and fluid (~`col-lg-4` width, not fixed like 06's 240px)

### Requirement: Multiselect control

The system SHALL render the closed multiselect box with a placeholder, a
chevron, and a field label above it.

#### Scenario: Closed selection box with placeholder

- **GIVEN** the heading renders
- **WHEN** the control area displays
- **THEN** a white selection box SHALL render (1px `rgba(34,36,38,0.15)`
  border, ~4.6px radius, ~8px/10px padding, 14px text)
- **AND** a "Select Topics" field label SHALL sit ABOVE the box (visible
  always, muted dark gray)
- **AND** the grey placeholder text "Select Topics" SHALL be visible inside
  the box (no selections yet)
- **AND** a chevron SHALL sit at the right of the box pointing DOWN
  (closed state)
- **AND** the control SHALL have `aria-haspopup="listbox"` and
  `aria-expanded="false"` initially
- **AND** NO chips SHALL render (the demo starts with no selection)

#### Scenario: Dropdown opens revealing the unselected options

- **WHEN** the user activates the control (click on the box or chevron)
- **THEN** the box border AND its text SHALL turn rose `#e8647c` (radius
  4px), `aria-expanded` SHALL flip to `true`, and the chevron SHALL point UP
- **AND** a rose `#e8647c` menu SHALL appear below the box (radius 4px,
  `margin-top 4px`, shadow `0 3px 19px -15px rgba(0,0,0,0.41)`,
  `max-height` + `overflow-y: auto` per the screenshot)
- **AND** the menu SHALL list the 10 options — Family, Family Law, Friends,
  Co-workers, Startup, Work, Basketball, Baseball, Investors, US Embassy —
  each with WHITE text (16px), a hollow-circle bullet (12px, left-aligned),
  `#ef90a2` top rule, and ~15px/35px padding
- **AND** NO option SHALL be pre-selected initially (no chips — the demo
  starts empty; the three chips in the screenshot were added interactively)

### Requirement: Selection behavior

The system SHALL render selected options as rose chips, remove them from the
menu, and keep the panel open while selecting.

#### Scenario: Selecting options

- **GIVEN** the dropdown is open
- **WHEN** the user clicks the "Family" row and then the "Startup" row
- **THEN** a chip "Family" and a chip "Startup" SHALL appear in the box
  (rose `#e8647c` background, white label, each with a white remove × that
  has an accessible name)
- **AND** the rows "Family" and "Startup" SHALL disappear from the menu
  (the menu shows ONLY the unselected options — verified in the source
  screenshot: chips Co-workers/Baseball/Startup were all absent from the
  open menu)
- **AND** the dropdown SHALL STAY open (Semantic 2.2 multiple dropdowns do
  not close on selection)
- **AND** the placeholder "Select Topics" SHALL hide once at least one
  option is selected
- **AND** hovering a menu row SHALL invert it (white background, rose
  `#e8647c` text)

#### Scenario: Deselecting options

- **GIVEN** at least one chip is in the box
- **WHEN** the user clicks a chip's ×
- **THEN** the chip SHALL disappear from the box
- **AND** its option row SHALL re-appear in the menu
- **AND** when the LAST chip is removed, the placeholder "Select Topics"
  SHALL become visible again

### Requirement: Dropdown dismissal

The system SHALL close the dropdown on outside interaction, Escape, or
re-toggle while preserving selections.

#### Scenario: Close interactions

- **GIVEN** the dropdown is open with one or more selections
- **WHEN** the user clicks outside the control, presses Escape, or activates
  the trigger again
- **THEN** the panel SHALL close, the box border/text SHALL return to the
  default (1px `rgba(34,36,38,0.15)` border, dark text), the chevron SHALL
  point DOWN again, and `aria-expanded` SHALL return to `false`
- **AND** selections SHALL be preserved across open/close cycles (closing
  never clears state)

### Requirement: No search / no clear-all / no select-all

The system SHALL NOT add controls the source does not have.

#### Scenario: Absent controls

- **GIVEN** the Reap app is rendered
- **WHEN** the control opens
- **THEN** the widget SHALL contain NO search textbox (Semantic only renders
  one with the `search` class — this demo has none; unlike Multiselect 05's
  select2 variant)
- **AND** the widget SHALL have NO clear-all button (no bulk ×)
- **AND** the panel SHALL have NO "Select all" row (unlike Multiselect 01–04)

### Requirement: Page composition

The system SHALL compose the page with a main landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Reap app is rendered
- **WHEN** the page loads
- **THEN** the heading, the field label, and the multiselect control SHALL
  render in the main landmark
- **AND** the document title SHALL be "Reap — Multiselect Dropdown"

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Reap app is rendered
- **WHEN** the footer displays
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text)

## Verification checklist

- [ ] `openspec/specs/template-reap/spec.md` exists on main with the full
      section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/reap/tasks.md` exists on main with design notes and
      the implementation task outline.
- [ ] Fidelity: structure matches the Multiselect 07 preview DOM 1:1
      (centered 28px black Lato heading → "Select Topics" field label →
      Semantic multiple-selection dropdown (white box, 1px
      `rgba(34,36,38,0.15)` border, ~4.6px radius, 14px text, chevron) →
      rose `#e8647c` chips → solid-rose menu (4px radius,
      `0 3px 19px -15px rgba(0,0,0,0.41)` shadow, white 16px rows with
      hollow-circle bullets + `#ef90a2` rules, hover invert, scroll) on a
      white `#fff` page with `ftco-section`-style 7em padding.
- [ ] Design tokens captured: brand `#e8647c` rose (menu fill/chips/active
      border + text/hover text), row rule `#ef90a2`, page `#fff`, heading
      `#000` 28px Lato 400, body gray Lato 16px/1.8, placeholder muted grey,
      box border `rgba(34,36,38,0.15)`, menu shadow `0 3px 19px -15px
    rgba(0,0,0,0.41)`.
- [ ] Behavior captured: menu = unselected set (verified via screenshot),
      menu stays open on select, chip × re-inserts row, placeholder hides
      while ≥1 selection, close on outside/Escape/re-toggle, selections
      persist, NO search/clear-all/select-all (Semantic `search` class
      absent), native select hidden (listbox a11y lift).
- [ ] Name collision check: `reap` free in `apps/`, `openspec/specs/`,
      `docs/templates/`, TEMPLATES.md (verified 2026-08-17).
