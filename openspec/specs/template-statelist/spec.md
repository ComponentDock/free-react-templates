# Template: Statelist (Multiselect Dropdown with States)

## Purpose

Statelist is a single-page multiselect-dropdown component demo in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Multiselect 10" free template (source:
https://colorlib.com/wp/template/multiselect-10/), built under a DIFFERENT
name (**Statelist** — a single lowercase word evoking the dropdown's US
states list, per the monorepo naming mandate: never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a minimal, centered demo page (Bootstrap 4.3.1 + custom JS):
a `section.ftco-section` with a centered `h2.heading-section` "Multiselect
#10", and below it a custom dropdown widget: a white trigger box with label
"States", quantity indicator "(Any)", a FontAwesome chevron-down icon, and
on click a white dropdown panel with a search input and a list of 50 US
states as checkboxes. This is a **light theme** (page `#f8f9fd`, white
control, red `#ff5959` accents). Distinctive behaviors: the dropdown
**toggles open/closed on click** (not Select2), checkboxes are custom
FontAwesome squares (unchecked = empty gray square `\f0c8`, checked = red
checkmark `\f14a`), the quantity indicator shows the count or "Any", and a
search input filters the state list. Statelist recreates that structure 1:1
with matching layout, tokens, typography, and content (no ColorLib assets
copied).

> NAMING NOTE: the ColorLib source name "Multiselect 10" is FORBIDDEN as
> the app name. **Statelist** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/`
> or any TEMPLATES.md name (verified 2026-09-07). Source slug + preview
> URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Multiselect 10". Listed in TEMPLATES.md under
  **Bootstrap Multiselect (20)** (section header line 821; row at line
  834). Free multiselect-dropdown component template.
- **Live preview DOM — REACHABLE (verified 2026-09-07):** the default
  preview URL `https://preview.colorlib.com/theme/bootstrap/multiselect-10/`
  returns HTTP 200 (3,145 bytes — 57 lines). Stylesheets:
  `css/style.css` (customized Bootstrap 4.3.1 + a custom token tail).
  Scripts: `js/jquery.min.js`, `js/popper.js`, `js/bootstrap.min.js`
  (loaded, unused), lodash 3.5.0 (used for `_.template` + `_.each`), and
  `js/main.js` (the demo logic).
  Screenshot (`multiselect-10.jpg`): light gray page, centered black
  "Multiselect #10" heading, ONE white dropdown control with "States"
  label, red "(Any)" quantity, red chevron-down.
- **Live DOM structure (1:1):**
  - `section.ftco-section` (custom: `padding: 7em 0`; page bg `#f8f9fd`) →
    `div.container` (max-width 1140px) → two `div.row.justify-content-center`:
    1. `div.col-md-6.text-center.mb-5` → `h2.heading-section` —
       "Multiselect #10" (custom: `font-size: 28px; color: #000`; inherits
       Lato, weight 400, line-height 1.5).
    2. `div.col-md-5.d-flex.justify-content-center.align-items-center` →
       `div.dropdown-container` (width 100%, border-radius 5px,
       `box-shadow: 0px 10px 30px -4px rgba(0,0,0,0.15)`, overflow auto,
       font-size 14px, sans-serif):
       - `div.dropdown-button.noselect.w-100` (white bg, padding 15px 20px,
         cursor pointer, no border):
         - `div.dropdown-label` — "States" (gray, weight 700)
         - `div.dropdown-quantity` — "(Any)" or "(N)" (gray weight 700, with
           the quantity span in red `#ff5959`)
         - `i.fa.fa-chevron-down` — red `#ff5959` icon, 16px
       - `div.dropdown-list` (initially `display: none`, toggles on click):
         - `input[type="search"].dropdown-search` — placeholder "Search states",
           padding 5px 10px, full width, no border, bg `rgba(0,0,0,0.05)`,
           radius 4px
         - `ul` (margin-top 20px, max-height 200px, overflow-y auto) —
           populated by lodash `_.each(usStates, ...)` with 50 `<li>` items,
           each containing a `label.checkbox-wrap` with a hidden checkbox
           input + a `span.checkmark` (FontAwesome `\f0c8` = empty square
           in gray `rgba(0,0,0,0.1)`, `\f14a` = checked square in red
           `#ff5959`)
- **Footer:** the original has NO footer; per monorepo convention add a
  minimal Component Dock footer.
- **Design tokens:**
  - Page background: **`#f8f9fd`** (light gray).
  - Brand accent: **`#ff5959`** (red — quantity text, chevron icon, checked
    checkbox fill, `bg-primary`).
  - Trigger: **white** `#fff` bg, padding **15px 20px**, no border, cursor
    pointer; box-shadow **`0px 10px 30px -4px rgba(0,0,0,0.15)`**, border-radius
    **5px**.
  - Label: **gray** (`#808080`), weight **700**, font-size **14px**.
  - Quantity text: gray weight 700 for "(Any)" wrapper, red `#ff5959` for
    the count number.
  - Chevron icon: red `#ff5959`, 16px, floated right.
  - Dropdown list: white `#fff` bg, padding **10px 20px**, no top border.
  - Search input: padding **5px 10px**, full width, no border, bg
    **`rgba(0,0,0,0.05)`**, radius **4px**, no outline on focus.
  - List: margin-top **20px**, max-height **200px**, overflow-y auto,
    padding 0.
  - Checkbox items: list-style none, custom checkbox-wrap (35px left padding,
    12px margin-bottom, font-size 16px, weight 500, cursor pointer).
  - Unchecked checkbox: FontAwesome `\f0c8` (empty square), color
    **`rgba(0,0,0,0.1)`**, 20px font-size, transition 0.3s.
  - Checked checkbox: FontAwesome `\f14a` (checked square), color
    **`#ff5959`**, border none, transition 0.3s.
  - Heading: **28px**, **`#000`**, Lato weight 400, line-height 1.5,
    centered, ~42–48px gap below.
  - Body text: color **gray** (`#808080`), 16px, line-height 1.8.
  - Font: **Lato** (300/400/700 loaded by the source; only **400** is used
    by this template's rules — loading 400 via Google Fonts `<link>` is
    faithful).
  - Rhythm: `section.ftco-section` `padding: 7em 0` (≈112px vertical);
    centered columns (`col-md-6` heading, `col-md-5` ≈400px control
    column).
- **States data:** 50 US states (Alabama through Wyoming) with abbreviation
  codes (AL through WY). The original uses lodash `_.each` + `_.template`
  to render them — recreation uses React state + map.
- **Recreation approach:** single page, `min-h-screen` light section
  (`bg-[#f8f9fd]`) with ~112px top/bottom padding, centered: h2 "Statelist"
  (28px, `#000`, Lato 400) with ~42–48px gap, then a `max-w-md` (~448px)
  centered column with a state-driven React dropdown (no Bootstrap, no jQuery,
  no lodash): trigger `div` (white bg, padding 15px 20px, `rounded-lg`,
  shadow `0px 10px 30px -4px rgba(0,0,0,0.15)`) with label "States" (gray
  700), quantity "(Any)" or "(N)" (count in red), and a `ChevronDown` icon
  (lucide-react, red) floated right; clicking toggles the dropdown list
  (white bg, padding 10px 20px) with a search input (`bg-black/5 rounded
text-sm px-2.5 py-1.5`) that filters the 50 states below; each state is
  a checkbox row (custom checkbox square: 20×20, `2px solid rgba(0,0,0,0.1)`
  unchecked, red `#ff5959` fill + white check when checked, transition 0.3s)
  with the state name text; the list scrolls at max-height 200px; outside
  click / Escape closes the panel and selections persist. Plus the mandatory
  minimal Component Dock footer. Icons: lucide-react (`ChevronDown`, `Check`
  for checked checkbox). No images.

## Requirements

### Requirement: Heading section

The system SHALL render a centered heading section on the light page.

#### Scenario: Centered heading

- **GIVEN** the Statelist app is rendered
- **WHEN** the page loads
- **THEN** a light page (`#f8f9fd`) SHALL show a centered heading "Statelist"
  at ~28px in `#000`
- **AND** the heading SHALL use the Lato font family at weight 400 with
  line-height 1.5
- **AND** the page SHALL have generous vertical padding (~112px) above
  and below the content
- **AND** the content SHALL be centered horizontally inside a comfortable
  container with the control column capped at ~448px

### Requirement: Dropdown trigger

The system SHALL render a white dropdown trigger with label, quantity, and
chevron icon.

#### Scenario: Trigger renders with label and quantity

- **GIVEN** the heading renders
- **WHEN** the control area displays
- **THEN** a white trigger SHALL show below the heading with:
  - Label "States" in gray weight 700
  - Quantity indicator "(Any)" in gray weight 700, with the count text
    in red `#ff5959`
  - A chevron-down icon (lucide-react `ChevronDown`) in red `#ff5959`,
    floated right
- **AND** the trigger SHALL have a white background, padding 15px 20px,
  border-radius 5px, and box-shadow `0px 10px 30px -4px rgba(0,0,0,0.15)`

#### Scenario: Trigger toggles dropdown

- **WHEN** the user clicks the trigger
- **THEN** the dropdown list SHALL toggle open/closed

### Requirement: Dropdown with search and checkbox options

The system SHALL open a white dropdown listing 50 US states with checkboxes
and a search filter.

#### Scenario: Dropdown opens with 50 states

- **WHEN** the user activates the trigger
- **THEN** a white dropdown list SHALL appear below the trigger
- **AND** the list SHALL contain 50 US state checkbox items
  (Alabama through Wyoming in alphabetical order)
- **AND** each item SHALL render a custom checkbox square (20×20px,
  `2px solid rgba(0,0,0,0.1)` unchecked, red `#ff5959` fill + white check
  when checked) to the left of its state name text
- **AND** a search input SHALL appear at the top of the list with
  placeholder "Search states"

#### Scenario: Search filters the list

- **GIVEN** the dropdown is open
- **WHEN** the user types in the search input
- **THEN** only states whose names contain the search text SHALL be visible
- **AND** when the search input is cleared, all states SHALL reappear

#### Scenario: Checking states

- **WHEN** the user checks a state checkbox
- **THEN** that checkbox SHALL fill with red `#ff5959` and show a white check
- **AND** the quantity indicator SHALL update to show the count (e.g. "(3)")
  or "Any" if none are checked

### Requirement: Quantity indicator

The system SHALL display the number of selected states or "Any".

#### Scenario: No selections

- **GIVEN** no checkboxes are checked
- **WHEN** the page renders
- **THEN** the quantity SHALL show "(Any)"

#### Scenario: Selections exist

- **GIVEN** some checkboxes are checked
- **WHEN** the count updates
- **THEN** the quantity SHALL show the count in parentheses (e.g. "(5)")

#### Scenario: All deselected

- **GIVEN** some checkboxes are checked
- **WHEN** the user unchecks all of them
- **THEN** the quantity SHALL return to "(Any)"

### Requirement: Dropdown dismissal

The system SHALL close the dropdown on outside interaction while keeping
selections.

#### Scenario: Close interactions

- **GIVEN** the dropdown is open
- **WHEN** the user clicks outside the control
- **THEN** the dropdown list SHALL close
- **AND** the checked selections SHALL be preserved

### Requirement: Page composition

The system SHALL compose the page with a main landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Statelist app is rendered
- **WHEN** the page loads
- **THEN** the heading and the dropdown control SHALL render in the main
  landmark
- **AND** the document title SHALL be "Statelist — Multiselect Dropdown"

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` (branded "Component Dock").

#### Scenario: Component Dock attribution

- **GIVEN** the Statelist app is rendered
- **WHEN** the footer displays
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock"
- **AND** the footer SHALL be visually unobtrusive (small muted text)
