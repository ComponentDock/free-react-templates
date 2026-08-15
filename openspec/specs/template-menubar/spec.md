# Template: Menubar (Bootstrap Dropdowns Demo)

## Purpose

Menubar is a single-page UI-component demo template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Dropdown 01" demo design
(source: https://colorlib.com/wp/template/dropdown-01/), built under a
DIFFERENT name (Menubar) per the monorepo naming mandate, with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The page showcases the
four Bootstrap dropdown menu directions (down / up / right / left) as plain
and split-button variants — a minimal, functional component-showcase page.

## Design reference (replication findings)

- **Original:** ColorLib "Dropdown 01" — first demo in the "Bootstrap
  Dropdowns (20)" series. TEMPLATES.md has ONE copy (line 754).
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/bootstrap/dropdown-01/`
  (HTTP 200, 13.2 KB HTML). NOTE: the naive
  `https://preview.colorlib.com/theme/dropdown-01/` 404s — the dropdown
  demos live under the `/theme/bootstrap/` subpath; the ColorLib template
  page (`colorlib.com/wp/template/dropdown-01/`) links the correct preview.
  Master stylesheet `css/style.css` (221 KB, ftco-style Bootstrap 4 theme,
  fully extracted for tokens); libs: jquery, popper, bootstrap.min.js,
  ionicons. Google Font **Poppins**. Cross-checked against the TEMPLATES.md
  screenshot (`dropdown-01.jpg`, 1200×972, viewed in browser) — all match.
  The demo brands itself "Dropdown #01"; the recreation uses the NEW name
  **Menubar** (brand blue #0075f6).
- **Visual design (from DOM + CSS tokens + screenshot):** clean minimalist
  component-showcase page on a light `#fafafa` background. Centered black
  heading "Dropdown #01" (28px Poppins) with generous bottom margin; below
  it a row of four equal columns (Bootstrap `col-md-3`), each headed by a
  small 18px gray label ("Dropdown Variation", "Dropup Variation",
  "Dropright Variation", "Dropleft Variation") and containing TWO blue
  buttons side by side: a plain `btn btn-primary dropdown-toggle` ("Dropdown"
  / "Dropup" / "Dropright" / "Dropleft") and a SPLIT button (main label
  "Split Dropdown" / "Split dropup" / "Split dropright" / "Split dropleft"
  - a separate caret toggle). Buttons are solid brand blue `#0075f6` with
    white text, radius 5px, soft shadow `0 10px 20px -6px rgba(0,0,0,.12)`.
    Dropdown menus are white, borderless, `overflow: hidden`, shadow
    `0 10px 34px -20px rgba(0,0,0,.41)`, containing 14px items
    (rgba(0,0,0,.7)) with an `.active` item and a `dropdown-divider`; item
    hover/active turns brand blue with white text. Screenshot shows the menus
    closed (default state) — menu styling was captured from CSS instead.
    Section padding is `7em 0`; container max-width 1140px. No header, no
    footer, no hero image — the page is purely the demo section.
- **Section order (1:1, from live demo DOM):**
  1. Section (`section.ftco-section`, padding 7em 0) → `div.container`.
  2. Header row (`div.row` → `div.col-md-12.text-center`): `h2.heading-section
mb-5 pb-md-4` "Dropdown #01" (28px, #000, centered).
  3. Demo row (`div.row`): four `div.col-md-3` columns, each with:
     - `h2.heading-section.mb-4` containing `<br><small>` label —
       "Dropdown Variation" / "Dropup Variation" / "Dropright Variation" /
       "Dropleft Variation" (small: 18px).
     - `.btn-group` 1 — plain `button.btn.btn-primary.dropdown-toggle`
       (label: "Dropdown" / "Dropup" / "Dropright" / "Dropleft").
     - `.btn-group` 2 — SPLIT: `button.btn.btn-primary` (label: "Split
       Dropdown" / "Split dropup" / "Split dropright" / "Split dropleft") +
       `button.btn.btn-primary.dropdown-toggle.dropdown-toggle-split` with a
       `<span class="sr-only">Toggle Dropdown</span>` caret.
     - `.dropdown-menu` (per button group): `a.dropdown-item` "Dropdown" /
       "Action", `a.dropdown-item.active` "Active", `a.dropdown-item`
       "Something else here", `div.dropdown-divider`, `a.dropdown-item`
       "Separated link". Direction class on the group: (none) / `.dropup` /
       `.dropright` / `.dropleft`.
  4. (Monorepo addition, source has none) minimal footer with the mandatory
     Component Dock credit link — see conventions.md.

## Design tokens (from the reference)

| Token                | Value                                                                           | Source                                               |
| -------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------- |
| Brand blue (primary) | `#0075f6`                                                                       | `btn-primary` override (Bootstrap default `#007bff`) |
| Brand hover/dark     | `#005dc3`                                                                       | `btn-primary:hover`                                  |
| Page background      | `#fafafa`                                                                       | `body` background                                    |
| Body text            | `gray` (`#6c757d` family)                                                       | `body` color, 14px, line-height 1.8                  |
| Heading color        | `#000`                                                                          | `.heading-section` (28px), small 18px                |
| Dropdown item text   | `rgba(0,0,0,.7)`                                                                | `.dropdown-item` (14px, py 10px)                     |
| Menu hover/active    | bg `#0075f6`, text `#fff`                                                       | `.dropdown-item:hover/:active`                       |
| Font family          | `"Poppins", Arial, sans-serif`                                                  | body / heading                                       |
| Button shape         | padding `12px 16px`, radius `5px`, 14px, weight 400                             | `.btn` (ftco override)                               |
| Button shadow        | `0 10px 20px -6px rgba(0,0,0,.12)`                                              | `.btn`                                               |
| Menu shadow          | `0 10px 34px -20px rgba(0,0,0,.41)`, border none, `overflow: hidden`, bg `#fff` | `.dropdown-menu`                                     |
| Section rhythm       | `7em 0` padding; container max-width 1140px                                     | `.ftco-section`, `.container`                        |

## Requirements

### Requirement: Page composition

The system SHALL render a single-page demo with the demo content in a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Menubar app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the demo section inside the main landmark
- **AND** the document title SHALL be "Menubar — Dropdown UI Demo"

### Requirement: Section heading

The system SHALL render the page heading centered at the top of the section,
mirroring the reference heading "Dropdown #01".

#### Scenario: Page heading

- **GIVEN** the page is rendered
- **WHEN** the demo section loads
- **THEN** a level-2 heading SHALL be visible, centered, with the text
  "Dropdown #01"
- **AND** the heading SHALL use the brand font (Poppins), black color, and
  a generous bottom margin (mb-5 + pb-md-4 equivalent)

### Requirement: Variation columns

The system SHALL render four equal-width columns that stack on mobile, each
headed by its variation label and containing a plain dropdown button group
and a split dropdown button group.

#### Scenario: Four variation columns

- **GIVEN** the demo section is rendered
- **WHEN** the column row loads
- **THEN** exactly four columns SHALL be visible side by side on desktop
  (grid-cols-4 equivalent, stacking to one column below `md`)
- **AND** each column SHALL show its small label: "Dropdown Variation",
  "Dropup Variation", "Dropright Variation", "Dropleft Variation" in that
  order
- **AND** each column SHALL contain a plain dropdown button and a split
  dropdown button (labels "Dropdown"/"Split Dropdown",
  "Dropup"/"Split dropup", "Dropright"/"Split dropright",
  "Dropleft"/"Split dropleft")

#### Scenario: Buttons match reference styling

- **GIVEN** any demo button is rendered
- **THEN** it SHALL be solid brand blue `#0075f6` with white text,
  border-radius 5px, and the reference soft shadow
- **AND** a caret icon (lucide ChevronDown / rotated per direction) SHALL
  appear on the toggle; split buttons SHALL show their caret in a separate
  toggle segment (visually joined)

### Requirement: Dropdown menu behavior

The system SHALL open each menu on toggle click, close on outside click or
Escape, and support all four reference directions (down, up, right, left).

#### Scenario: Open and close a dropdown

- **GIVEN** a dropdown toggle button with `aria-haspopup="menu"`
- **WHEN** the user clicks the toggle
- **THEN** the menu SHALL open below the button (default direction) and the
  toggle SHALL set `aria-expanded="true"`
- **AND** the menu SHALL contain, in order: item "Action", active item
  "Active", item "Something else here", a divider, and item "Separated link"
- **WHEN** the user clicks outside the menu or presses Escape
- **THEN** the menu SHALL close and `aria-expanded` SHALL return to `false`
- **AND** only one menu SHALL be open at a time

#### Scenario: Dropup / dropright / dropleft directions

- **GIVEN** the dropup column button is rendered
- **WHEN** the user clicks its toggle
- **THEN** the menu SHALL open ABOVE the button
- **AND** the dropright menu SHALL open to the RIGHT and the dropleft menu
  to the LEFT of their toggles

#### Scenario: Split button toggle

- **GIVEN** a split dropdown button group
- **WHEN** the user clicks the main action button
- **THEN** no menu SHALL open (action button only)
- **WHEN** the user clicks the separate caret toggle segment
- **THEN** the menu SHALL open with the toggle's accessible name indicating
  the purpose (e.g. "Toggle Dropdown")

#### Scenario: Active and hover item states

- **GIVEN** an open dropdown menu
- **WHEN** an item is hovered or focused, or the active item is rendered
- **THEN** the item SHALL get the brand blue background `#0075f6` with white
  text, matching the reference hover/active state
- **AND** the "Active" item SHALL render in that state by default

### Requirement: Accessibility

The system SHALL expose dropdown semantics to assistive technology.

#### Scenario: ARIA attributes

- **GIVEN** any dropdown toggle
- **THEN** it SHALL have `aria-haspopup` and a dynamic `aria-expanded`
  attribute
- **AND** the menu SHALL be `role="menu"` with `role="menuitem"` items (or
  equivalent accessible grouping) and the divider SHALL be non-focusable
- **AND** the split toggle's caret span SHALL carry a sr-only accessible
  label

### Requirement: Footer

The system SHALL include the mandatory monorepo footer crediting Component
Dock (the reference demo has no footer — this is a repo convention).

#### Scenario: Component Dock credit

- **GIVEN** the page is rendered
- **WHEN** the footer loads
- **THEN** a footer SHALL be present in the contentinfo landmark
- **AND** it SHALL link to `https://www.componentdock.com/` ("Component
  Dock") and never reference ColorLib

## Verification checklist

- [ ] `apps/menubar` exists with package name `@free-react-templates/menubar`
- [ ] `vite.config.ts` registers `injectUiSource()` (see docs/conventions.md)
- [ ] Brand blue `#0075f6` / hover `#005dc3` defined in `@theme`; Poppins
      Google Font `<link>` in index.html
- [ ] Section order matches the reference 1:1 (centered heading → 4
      variation columns with plain + split button groups → footer)
- [ ] Menus open in the correct direction per column (down/up/right/left);
      close on outside click / Escape; one open at a time
- [ ] ARIA: `aria-haspopup`, dynamic `aria-expanded`, sr-only split-toggle
      label; 100% coverage on all interaction scenarios
- [ ] Per-app gate passes: `scripts/verify-app.sh menubar` (typecheck +
      lint + 100% coverage tests + build)
- [ ] Full gate passes on merge (CI `npm run gate`), nightly sweep green
- [ ] TEMPLATES.md: mark line 754 (Dropdown 01) `[~]` → `[x]` + Surge URL +
      homepage after merge
- [ ] `npm run readme:status` regenerates README Templates status table after merge
- [ ] PR description states: source template (ColorLib Dropdown 01), preview
      URL, design tokens, what differs (rename, lucide carets, picsum-free
      demo, added Component Dock footer)
