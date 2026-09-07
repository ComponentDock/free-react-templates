# Template: Selectify (Bootstrap Multiselect Dropdown)

## Purpose

Selectify is a single-page multiselect dropdown component demo in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Multiselect 10" free template (source:
https://colorlib.com/wp/template/multiselect-10/), built under a DIFFERENT
name (**Selectify** — the tenth of the selection-themed names for this
Bootstrap Multiselect UI series; "selectify" = to make selectable, to render
as a multiselect — per the monorepo naming mandate: never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a minimal, centered demo page (customized Bootstrap 4.3.1 +
**custom JavaScript multiselect**): a `section.ftco-section` with a centered
`h2.heading-section` "Multiselect #10", and below it a single full-width
`div.dropdown-container` with a labeled trigger showing "States (Any)" and a
chevron-down icon. Clicking the trigger opens a dropdown panel with a search
input and a scrollable list of US states (50 states + DC + territories ≈ 59
entries) rendered as custom checkbox items with FontAwesome square icons.
Checkboxes use FontAwesome `\f0c8` (unchecked square) and `\f14a` (checked
square) in the accent color. The quantity indicator updates to show the count
of checked items (or "Any" when none are checked). This member differs from
the Select2-based Multiselect 09 (Thresh) and the Semantic UI-based
Multiselect 01–08: it uses a **custom jQuery-driven dropdown with lodash
templating** and has a light theme.

> NAMING NOTE: the ColorLib source name "Multiselect 10" is FORBIDDEN as
> the app name. **Selectify** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/`
> or any TEMPLATES.md name (verified 2026-09-07). Source slug + preview
> URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Multiselect 10". Listed in TEMPLATES.md under
  **Bootstrap Multiselect (20)** (section header line 821; row at line
  834). Free multiselect-dropdown component template. The
  `multiselect-10` slug appears exactly ONCE in TEMPLATES.md (no dup rows
  to mark). Series siblings already prepped: Multiselect 09 → Thresh
  (`openspec/specs/template-thresh/`).
- **Live preview DOM — REACHABLE (verified 2026-09-07 by direct fetch):**
  the default preview URL
  `https://preview.colorlib.com/theme/multiselect-10/` returns 404 (`Not
Found`, 9 bytes); the REAL preview URL (same `/theme/bootstrap/` prefix
  as the rest of the Bootstrap UI series) is
  `https://preview.colorlib.com/theme/bootstrap/multiselect-10/` (HTTP
  200, 4,097 bytes). Stylesheets:
  `css/style.css` (customized Bootstrap 4.3.1 + custom token tail — the
  tail is the real token source),
  `https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css`
  (**USED on this page — the custom CSS check-mark rule renders the checkbox
  glyph via `font-family: 'FontAwesome'; content: "\f0c8"` for unchecked and
  `"\f14a"` for checked; in the recreation use lucide `Check` and `Square`
  icons instead — do NOT ship font-awesome). **Lato** (300/400/700) via
  cf-fonts @font-face blocks in the head — weight 400 is used by this
  page's rules (body `font-family: "Lato", Arial, sans-serif; font-size:
16px; line-height: 1.8; color: gray; background: #f8f9fd`; headings
  `h1-h5 { line-height: 1.5; font-weight: 400; font-family: "Lato", Arial,
sans-serif; color: #000 }`). Scripts: `js/jquery.min.js`,
  `js/popper.js`, `js/bootstrap.min.js` (loaded, unused — no Bootstrap
  components on this page),
  `https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.5.0/lodash.min.js`
  (used for `_.template` and `_.each` to render states), and
  `js/main.js` (568 bytes) — the demo logic: click-toggle dropdown,
  search-filter by text, checkbox-change updates quantity counter, plus
  US states JSON data rendered as checkbox list items.
  Screenshot (`multiselect-10.jpg`, 1200×972 AVIF): light-gray page
  (`#f8f9fd`), centered BLACK "Multiselect #10" heading, and ONE
  floating control: a white trigger box showing "States (Any)" with a
  coral/red chevron-down icon; below it a white dropdown panel with a
  search input ("Search states") and a scrollable list of US states
  rendered as custom checkboxes with FontAwesome square icons. Clean,
  minimal, light utilitarian component-demo aesthetic. The screenshot's
  rendering matches the live CSS token analysis exactly.
- **Live DOM structure (1:1):**
  - `section.ftco-section` (custom: `padding: 7em 0`; page bg
    `#f8f9fd`) → `div.container` (max-width 1140px) → two
    `div.row.justify-content-center`:
    1. `div.col-md-6.text-center.mb-5` → `h2.heading-section` —
       "Multiselect #10" (custom: `font-size: 28px; color: #000`;
       inherits Lato, weight 400, line-height 1.5; `mb-5` ≈ 42–48px
       gap below).
    2. `div.col-md-5.d-flex.justify-content-center.align-items-center`
       → `div.dropdown-container` (white card with shadow and border-
       radius 5px) containing:
       - `div.dropdown-button.noselect.w-100` — the trigger (white bg,
         `padding: 15px 20px`, cursor pointer, no border):
         - `div.dropdown-label` — "States" (gray, weight 700)
         - `div.dropdown-quantity` — "(Any)" (coral `#ff5959` when 0
           checked; shows count when > 0)
         - `i.fa.fa-chevron-down` — coral chevron icon (recreation: lucide
           `ChevronDown`)
       - `div.dropdown-list` (hidden by default, white bg, `padding:
10px 20px`):
         - `input[type="search"].dropdown-search` — search input
           (`padding: 5px 10px`, `border-radius: 4px`, `background:
rgba(0,0,0,0.05)`, no border, no focus shadow)
         - `ul` — scrollable list (`max-height: 200px`, `overflow-y: auto`,
           `margin: 20px 0 0 0`):
           - Each `li` contains `label.checkbox-wrap` with:
             - `input[type="checkbox"]` — native checkbox (hidden via
               absolute positioning + opacity 0)
             - `span` — state name text (e.g. "Alabama", "Alaska"...)
             - `span.checkmark` — custom checkbox indicator via
               `::after` pseudo-element:
               - Unchecked: `content: "\f0c8"` (FontAwesome empty square),
                 `color: rgba(0,0,0,0.1)`, `font-size: 20px`
               - Checked: `content: "\f14a"` (FontAwesome checked square),
                 `color: #ff5959` (coral accent), border none
               - Transition: 0.3s (respect `prefers-reduced-motion`)
  - **Footer:** the original has NO footer; per monorepo convention add a
    minimal attribution footer linking `https://www.componentdock.com/`
    ("Component Dock") so every shipped template carries the required link.
- **QUIRK — preview URL:** the default
  `https://preview.colorlib.com/theme/multiselect-10/` 404s; the real URL
  is under `/theme/bootstrap/`. (Same as every member of this UI series.)
- **QUIRK — custom jQuery dropdown (not Select2, not Semantic):** this
  member uses a custom `div.dropdown-container` with jQuery click-toggle,
  lodash template rendering, and custom checkbox CSS — not Select2 (like
  Thresh/Multiselect 09) and not Semantic UI (like Sifter/Winnow/Multiselect
  01–08). The widget structure, checkbox UI, search filtering, and quantity
  counter are all custom — recreate these with React state, do NOT copy the
  Semantic or Select2 widget shapes.
- **QUIRK — light theme:** page `#f8f9fd`, card `#fff`, black heading,
  coral `#ff5959` accents — the OPPOSITE treatment of the dark Select2
  members. Do not darken it; the contrast (light page / coral accents) is
  the signature.
- **QUIRK — US states data (NOT generic options):** unlike every other
  member that uses Option1..Option13, this member populates the list with
  US states (ALABAMA → Alabama, ALASKA → Alaska, ... WYOMING → Wyoming)
  rendered via lodash `_.template` and `_.each`. In the recreation, use a
  React array of state objects and `.map()` — do NOT use jQuery/lodash.
  Keep the same 59 entries (50 states + DC + territories).
- **QUIRK — search filtering:** the search input filters the list by
  checking `text.indexOf(search) > -1` on each `li`. In the recreation,
  use a React state-driven filter (`.toLowerCase().includes(search)`).
- **QUIRK — quantity counter:** the trigger shows "(Any)" when 0 checked,
  or "(N)" where N is the count of checked checkboxes. The quantity text
  is in the coral accent color. In the recreation, derive the count from
  React state.
- **QUIRK — no label:** like Thresh, this member has NO label element
  above the control — just the heading "Multiselect #10". The trigger's
  `.dropdown-label` says "States" (the data category name, not a form
  label). In the recreation, give the trigger an `aria-label` ("Select
  states") for a11y.
- **QUIRK — custom checkboxes (FontAwesome squares):** the CSS uses
  FontAwesome `\f0c8` (unchecked square) and `\f14a` (checked square)
  via the `::after` pseudo-element. In the recreation, use lucide `Square`
  and `Check` icons or an inline SVG — do NOT ship font-awesome. The
  custom `.checkbox-wrap` hides the native checkbox and renders the
  visual indicator via `.checkmark::after`.
- **QUIRK — dropdown stays open while selecting:** clicking checkboxes
  does NOT close the panel (same pattern as Thresh). The user keeps
  clicking checkboxes until they click the trigger again or click outside.
- **QUIRK — no tag creation:** unlike Thresh (Multiselect 09, `tags: true`),
  this member does NOT allow creating custom tags. The search input only
  filters existing options. Do NOT add tag creation behavior.
- **Visual design (screenshot + live DOM):** minimal light page
  (`#f8f9fd`), one centered black 28px heading, ONE floating control:
  white card (5px radius, shadow `0px 10px 30px -4px rgba(0,0,0,0.15)`),
  trigger with "States" label (gray, weight 700) + quantity "(Any)" (coral
  `#ff5959`) + coral chevron-down; dropdown panel (white, `padding: 10px
20px`) with search input (`rgba(0,0,0,0.05)` bg, 4px radius) and scrollable
  list (max-height 200px) of US states as custom checkboxes (unchecked:
  20px FontAwesome empty square `rgba(0,0,0,0.1)`, checked: coral `#ff5959`
  checked square); clean, minimal, light utilitarian component-demo
  aesthetic. Signature colors: coral **#ff5959** (accent: quantity, chevron,
  checked checkboxes, links) on white/near-white surfaces (`#fff`,
  `#f8f9fd`) over the light page.
- **Section order (1:1 from live DOM):**
  1. **Heading section** — full-width centered `h2.heading-section`
     "Multiselect #10" (recreate as the brand name "Selectify", like the
     other members rename their demo headings).
  2. **Multiselect control** — the custom jQuery-style dropdown with label
     "States": trigger (white bg, 15px/20px padding, gray label + coral
     quantity + coral chevron) → dropdown panel (white, `padding: 10px 20px`,
     hidden by default) with search input (`rgba(0,0,0,0.05)` bg) and
     scrollable list (max-height 200px) of 59 US states as custom
     checkboxes (unchecked: 20px `rgba(0,0,0,0.1)` square, checked: coral
     `#ff5959` checked square); selecting updates quantity, searching
     filters the list, panel stays open while selecting.
  3. **Footer** — no footer in source; minimal Component Dock footer per
     convention.
- **Design tokens:**
  - Page background: **`#f8f9fd`** (customized body bg — light gray-blue).
  - Card/container: **`#fff`** (white), **border-radius: 5px**, **box-shadow:
    0px 10px 30px -4px rgba(0,0,0,0.15)**.
  - Brand accent: **`#ff5959`** (coral/red — links, quantity text, chevron
    icon, checked checkboxes, `.bg-primary`).
  - Trigger: background **#fff**, **padding: 15px 20px**, no border, cursor
    pointer; label text **gray** (`#808080`), weight **700**; quantity text
    **#ff5959**, weight **700**, margin-left 4px; chevron icon **#ff5959**,
    16px, float right, margin-top 3px.
  - Dropdown panel: background **#fff**, **padding: 10px 20px**, hidden by
    default (toggled via click).
  - Search input: **padding: 5px 10px**, **width: 100%**, no border,
    **border-radius: 4px**, **background: rgba(0,0,0,0.05)**, no focus
    shadow/outline.
  - List: **max-height: 200px**, **overflow-y: auto**, **margin: 20px 0 0 0**,
    padding 0.
  - Checkbox items: **font-size: 16px**, **font-weight: 500**, no list-style,
    padding-left 35px (for custom indicator).
  - Checkbox unchecked indicator: FontAwesome `\f0c8` (empty square), color
    **rgba(0,0,0,0.1)**, **font-size: 20px**, transition 0.3s.
  - Checkbox checked indicator: FontAwesome `\f14a` (checked square), color
    **#ff5959**, border none, transition 0.3s.
  - Heading: **28px**, **#000**, Lato weight 400, line-height 1.5, centered,
    ~42–48px gap below.
  - Body text: color **gray** (`#808080`), 16px, line-height 1.8.
  - Font: **Lato** (300/400/700 loaded by the source; only **400** is used
    by this template's rules — loading 400 via Google Fonts `<link>` is
    faithful) for body and headings.
  - Rhythm: `section.ftco-section` `padding: 7em 0` (≈112px vertical);
    centered columns (`col-md-6` heading, `col-md-5` ≈420px control
    column); recreate with a centered `max-w-2xl` (1140px) container,
    `text-center` heading, and the control column capped around
    `max-w-md` (28rem ≈ 448px) with a `w-full` widget.
- **Recreation approach:** single page, `min-h-screen` light section
  (`bg-[#f8f9fd]`) with ~112px top/bottom padding, centered: h2 "Selectify"
  (28px, `#000`, Lato 400) with ~42–48px gap, then a `max-w-md` (~28rem)
  centered column with a state-driven React multiselect (no jQuery, no
  Bootstrap, no lodash): trigger `button` or a focusable container styled as
  the dropdown button (white bg, 15px/20px padding, gray "States" label +
  coral quantity count + coral `ChevronDown` icon, `aria-haspopup="listbox"`
  `aria-expanded`, `aria-label` "Select states") showing "(Any)" when empty
  else "(N)"; panel `role="listbox"` (white, `padding: 10px 20px`, hidden
  by default) with search input (`bg-black/5` `rounded` `px-2.5 py-1`) and
  scrollable list (max-height 200px, `overflow-y-auto`) of 59 US states as
  custom checkboxes (each row a real 20×20 checkbox square — unchecked:
  2px `rgba(0,0,0,0.1)` border, `rounded`, transparent bg; checked:
  `bg-[#ff5959]` with a white lucide `Check`); selecting toggles the row,
  KEEPS the panel open, updates the quantity count; clicking the trigger or
  clicking outside closes the panel and selections persist. Plus the
  mandatory minimal Component Dock footer. Icons: lucide-react (`Check`,
  `Square`, `ChevronDown` — probe exports before use — see tasks.md). No
  images at all (the source has none).
- **Fidelity deviations (documented):** source checkbox indicators are
  FontAwesome squares (replaced with lucide `Check`/`Square` or inline
  SVG); source has NO aria-label — recreation adds `aria-label` on the
  trigger for a11y; source has no footer — recreation adds the mandatory
  Component Dock footer; source uses jQuery + lodash — recreation uses
  React state + hooks; source uses a `<select>` with checkboxes —
  recreation uses a custom React dropdown with controlled state; source
  `data-badge`/icon badges are not present (unlike Thresh) — omitted.

## Requirements

### Requirement: Heading section

The system SHALL render a centered heading section on the light page.

#### Scenario: Centered heading

- **GIVEN** the Selectify app is rendered
- **WHEN** the page loads
- **THEN** a light page (`#f8f9fd`) SHALL show a centered heading "Selectify"
  (the new brand name in place of the source's "Multiselect #10" demo
  label) at ~28px in `#000`
- **AND** the heading SHALL use the Lato font family at weight 400 with
  line-height 1.5
- **AND** the page SHALL have generous vertical padding (~112px — the
  source's `ftco-section` 7em) above and below the content
- **AND** the content SHALL be centered horizontally inside a comfortable
  container (≈1140px) with the control column capped at ~28rem

### Requirement: Multiselect trigger

The system SHALL render a white multiselect trigger with a label, quantity
indicator, and chevron icon.

#### Scenario: Trigger and label

- **GIVEN** the heading renders
- **WHEN** the control area displays
- **THEN** a white trigger SHALL show below the heading (no label — the
  source has none; an `aria-label` "Select states" SHALL be present for
  assistive tech)
- **AND** the trigger SHALL have a white background, ~15px/20px padding,
  no border, ~5px border radius, and a soft shadow (`0px 10px 30px -4px
rgba(0,0,0,0.15)`)
- **AND** the trigger SHALL display "States" in gray (weight 700) and
  "(Any)" in coral `#ff5959` (weight 700)
- **AND** a coral `ChevronDown` icon SHALL be positioned at the right
- **AND** the trigger SHALL have `aria-haspopup="listbox"` and
  `aria-expanded="false"` initially

#### Scenario: Quantity counter updates

- **WHEN** the user selects options
- **THEN** the quantity text SHALL update from "(Any)" to "(N)" where N is
  the count of checked checkboxes
- **AND** when all selections are cleared the quantity SHALL return to
  "(Any)"

### Requirement: Dropdown with search and checkbox options

The system SHALL open a white dropdown listing US states as checkbox rows
with a search filter.

#### Scenario: Dropdown opens with state options

- **WHEN** the user activates the trigger
- **THEN** a white dropdown panel SHALL appear below the trigger
  (`#fff` background, `padding: 10px 20px`)
- **AND** `aria-expanded` SHALL flip to `true`
- **AND** the panel SHALL contain a search input with placeholder
  "Search states" (`background: rgba(0,0,0,0.05)`, `border-radius: 4px`)
- **AND** the panel SHALL list 59 US states (Alabama through Wyoming)
  in alphabetical order as custom checkbox items
- **AND** every row SHALL render a 20×20 custom checkbox indicator
  (unchecked: `rgba(0,0,0,0.1)` square, checked: coral `#ff5959`
  checked square) to the left of its text

#### Scenario: Checking state options

- **WHEN** the user selects a state checkbox
- **THEN** that row's checkbox indicator SHALL fill with the coral accent
  `#ff5959` and show a check mark
- **AND** the quantity counter SHALL increment

### Requirement: Search filtering

The system SHALL filter the state list based on search input.

#### Scenario: Search filters states

- **GIVEN** the dropdown is open
- **WHEN** the user types "cal" into the search input
- **THEN** only states containing "cal" (case-insensitive) SHALL be
  visible (e.g. "California")
- **AND** other states SHALL be hidden
- **AND** when the search input is cleared, all states SHALL be visible

### Requirement: Selection behavior

The system SHALL keep the dropdown open while selecting and update the
quantity counter.

#### Scenario: Selecting states

- **GIVEN** the dropdown is open
- **WHEN** the user checks "Alabama" and then "Alaska"
- **THEN** the dropdown SHALL STAY open (selecting never closes the panel)
- **AND** the quantity counter SHALL update to "(2)"
- **AND** the checked checkboxes SHALL show coral `#ff5959` indicators

#### Scenario: Deselecting states

- **WHEN** the user unchecks a previously checked state
- **THEN** that checkbox SHALL return to the unchecked state
- **AND** the quantity counter SHALL decrement
- **AND** when all are unchecked, the counter SHALL return to "(Any)"

### Requirement: Dropdown dismissal

The system SHALL close the dropdown on trigger click or outside click while
keeping selections.

#### Scenario: Close interactions

- **GIVEN** the dropdown is open
- **WHEN** the user clicks the trigger again or clicks outside the
  dropdown
- **THEN** the panel SHALL close and `aria-expanded` SHALL return to
  `false`
- **AND** the selected checkboxes SHALL be preserved across open/close
  cycles (closing never clears selections)

### Requirement: Page composition

The system SHALL compose the page with a main landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Selectify app is rendered
- **WHEN** the page loads
- **THEN** the heading and the multiselect control SHALL render in the main
  landmark
- **AND** the document title SHALL be "Selectify — Multiselect Dropdown"

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Selectify app is rendered
- **WHEN** the footer displays
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text)

## Verification checklist

- [ ] `openspec/specs/template-selectify/spec.md` exists on main with the full
      section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/selectify/tasks.md` exists on main with design notes and
      the implementation task outline.
- [ ] Fidelity: structure matches the Multiselect 10 preview DOM 1:1
      (centered 28px BLACK heading on `#f8f9fd` → white dropdown trigger
      with "States" label (gray, weight 700) + quantity "(Any)" (coral
      `#ff5959`) + coral chevron → white dropdown panel (padding 10px 20px)
      with search input (`rgba(0,0,0,0.05)` bg, 4px radius) and scrollable
      list (max-height 200px) of 59 US states as custom checkboxes (20px
      square indicators, checked = coral `#ff5959`) → minimal Component Dock
      footer).
- [ ] Tokens used in the app: page `#f8f9fd`, accent coral `#ff5959`
      (quantity, chevron, checked checkboxes, links), card `#fff` with 5px
      radius and shadow `0px 10px 30px -4px rgba(0,0,0,0.15)`, trigger white
      bg 15px/20px padding, panel white bg `padding: 10px 20px`, search
      `rgba(0,0,0,0.05)` bg 4px radius, checkbox unchecked
      `rgba(0,0,0,0.1)` 20px, checkbox checked `#ff5959` 20px.
