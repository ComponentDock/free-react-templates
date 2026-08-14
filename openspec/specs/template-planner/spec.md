# Template: Planner (Calendar / Utility Widget — Minimalist Monthly Calendar)

## Purpose

Planner is a single-page minimalist calendar widget template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Calendar 01" free template (source:
https://colorlib.com/wp/template/calendar-01/), built under a DIFFERENT name
(**Planner** — evoking the template's single function: a clean, manageable
monthly planning calendar; per the monorepo naming mandate — never reuse the
ColorLib source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a **minimalist, single-widget page**: no navbar, no hero, no
images, no other sections — one centered calendar card on a very light
grey-blue background. ColorLib's own description: "A simple and
straightforward free Bootstrap calendar template that keeps things clear and
easily manageable. If you like the minimalist approach, this one will do you
well." The page renders ONE interactive component (from the live reference
structure):

1. **Title** — **"Calendar #01"**, dark near-black sans-serif, centered
   above the widget.
2. **Month navigation row** — left chevron (`‹`), centered month/year label
   **"December 2020"** in blue, right chevron (`›`).
3. **Day-name header bar** — a solid blue bar (`#3d88f7`) with the seven
   weekday abbreviations **Sun Mon Tue Wed Thu Fri Sat** in white, centered,
   in 7 equal columns.
4. **Date grid** — a white 7-column × 5-row grid for the month, thin light
   grey cell separators, dates centered per cell; **19 December 2020** is
   circled in solid blue with white text (the screenshot was captured on
   that date — the reference's "today" indicator). Dates before it render
   light grey (`#7c7d81`), dates after it render near-black; leading empty
   cells (Sunday/Monday of the first week of December 2020) render blank.
5. **No footer** in the reference — the recreation appends the minimal
   "Component Dock" footer per repo convention.

The defining signature of this template is its **restraint**: ONE widget,
ONE accent color, flat design, no gradients, no photography. The blue
(`#3d88f7`) is used in exactly two places (the day-header bar and the
selected-date circle); the month label uses a darker blue (`#1371e6`); the
page background is `#f7f8fc`. Recreate the widget 1:1 with matching tokens,
typography, and interaction (month navigation + date selection — the
arrows and cells are clickable in the original Bootstrap build; the
recreation SHALL make them functional).

> NAMING NOTE: the ColorLib source name "Calendar 01" is FORBIDDEN as the
> app name. **Planner** is the new, original name — single lowercase word,
> no collision with `apps/`, `openspec/specs/`, `docs/templates/` or the
> shipped-app names embedded in TEMPLATES.md (verified 2026-08-14: no
> `apps/planner` on origin/main, no `template-planner` spec, no `planner`
> in `docs/templates/`, no `[planner](...)` shipped link in TEMPLATES.md).
> Source slug + preview URL are recorded below.

> PREVIEW UNREACHABLE (fallback: screenshot): the default preview URL
> `https://preview.colorlib.com/theme/calendar-01/` returns **HTTP 404**
> (verified 2026-08-14 via curl AND headless browser; the page is empty).
> Nested-subpath probes (`/theme/cal/calendar-01/`,
> `/theme/calendar/calendar-01/`, `/theme/calendars/calendar-01/`,
> `colorlib.com/preview/theme/calendar-01/`, trailing-slash variants) all
> return 404, and the Wayback Machine has NO snapshot of the preview page
> (only of the colorlib.com template landing page). Per docs/replication.md
> the **TEMPLATES.md screenshot is the sole reference** — noted in the PR
> description. All design tokens below were extracted from the screenshot
> (`calendar-01.jpg`, 1200×972 AVIF → PNG, browser-verified 2026-08-14)
> by pixel sampling; exact hexes are ground truth where stated.

## Design reference (replication findings)

- **Original:** ColorLib "Calendar 01". Listed in TEMPLATES.md under
  **Bootstrap Calendars (20)** (line 685). Free Bootstrap calendar widget
  template (author Colorlib; post dated December 21, 2020; license
  CC BY 3.0). The `calendar-01` slug appears exactly once in TEMPLATES.md
  (no duplicate rows to mark).
- **Live preview DOM — UNREACHABLE (verified 2026-08-14):** all preview
  hosts return 404 (see the PREVIEW UNREACHABLE note above); no stylesheet
  could be fetched. Fallback reference = TEMPLATES.md screenshot,
  analyzed 2026-08-14 (browser visual inspection of the 1200×972 image +
  pixel sampling).
- **Visual design (screenshot, verified 2026-08-14):** a browser window
  showing a single centered widget on a very light grey-blue background
  (`#f7f8fc`). Top to bottom: centered dark title **"Calendar #01"**; a
  month-navigation row (light periwinkle-grey chevrons flanking the blue
  label **"December 2020"**); a solid blue (`#3d88f7`) weekday bar with
  `Sun Mon Tue Wed Thu Fri Sat` in white; a white date grid of 7 columns ×
  5 rows with thin light-grey (`#e6e6e6`) cell separators, dates centered:
  1–18 light grey (`#7c7d81`), **19 in a solid blue circle with white
  text**, 20–31 near-black. The page ends after the grid — no footer, no
  other sections.
- **Section order (1:1 from the reference render):** single widget —
  title → month nav → weekday bar → date grid (→ Component Dock footer
  appended per repo convention).
- **December 2020 layout facts (for the initial render):** 1 December 2020
  was a **Tuesday**, so the first grid row has two leading empty cells
  (Sun, Mon) followed by 1–5; 19 December 2020 was a **Saturday** (last
  column); 31 December 2020 was a Thursday; the month fills 5 rows.
- **Copy is fixed and minimal:** "Calendar #01" (title), "December 2020"
  (month label — "MMMM yyyy" format), "Sun Mon Tue Wed Thu Fri Sat" (day
  header). No lorem, no uppercase body text.

## Design tokens

### Colors

Palette (pixel-sampled from the screenshot — the token source):

| Token            | Hex       | Usage                                                          |
| ---------------- | --------- | -------------------------------------------------------------- |
| page background  | `#f7f8fc` | very light grey-blue page bg around the widget                 |
| card background  | `#ffffff` | the calendar card itself                                       |
| accent blue      | `#3d88f7` | weekday header bar + selected/today date circle                |
| month label blue | `#1371e6` | "December 2020" month/year text                                |
| chevron grey     | `#b9cae7` | prev/next month chevrons (light periwinkle grey)               |
| past-date grey   | `#7c7d81` | dates before the selected date                                 |
| future-date dark | `#111111` | dates after the selected date (sampled `#000003` — near-black) |
| title dark       | `#111111` | "Calendar #01" title (same near-black family)                  |
| grid line        | `#e6e6e6` | thin cell separators                                           |
| on-accent text   | `#ffffff` | weekday names + selected-date number                           |

No gradients, no shadows on the card, no secondary accent — the design is
flat and monochrome-plus-one-blue.

### Fonts

- **Sans-serif** — the screenshot's typeface is a clean geometric sans
  (Helvetica/Arial-like); the exact family could NOT be extracted because
  the preview (and its stylesheet) is unreachable. Recommend **Poppins**
  via Google Fonts `<link>` in `index.html` (the repo default for ColorLib
  recreations and era-appropriate for ColorLib's 2020 Bootstrap line); note
  the substitution in the PR description.
- Title "Calendar #01": ~28–32px, weight 600, dark, centered.
- Month label: ~18–20px, weight 500–600, `#1371e6`, centered.
- Weekday names: ~13–14px, weight 500, white, centered.
- Date numbers: ~14–16px, weight 400, centered.

### Radii / shapes

- **Selected/today date = full circle** (`border-radius: 9999px`) in
  `#3d88f7`, white number inside, roughly the cell size.
- Weekday bar: square corners (no radius).
- No card shadow, no card radius (flat white card on `#f7f8fc`).

### Layout

- Page: `#f7f8fc` background; the widget is centered horizontally and
  vertically in the viewport with comfortable padding.
- Card: white, fixed max-width (~460–520px — the reference widget is
  compact), `mx-auto`, generous vertical padding (`py-16`+).
- Title → nav row → weekday bar → grid, stacked with small gaps
  (title→nav ~24px, nav→bar ~16px).
- Nav row: chevron (left) — month label — chevron (right), evenly spaced;
  chevrons ~20px hit targets with padding.
- Weekday bar: 7 equal columns, white text centered.
- Grid: 7 equal columns; each cell a square-ish aspect ratio; `#e6e6e6`
  1px separators (grid lines) on the white card; dates centered.
- Reference is a static desktop widget; the recreation SHALL be responsive:
  7 columns preserved at all widths (cells shrink), no horizontal overflow,
  widget stays centered.

## Requirements

### Requirement: Page structure

The system SHALL render the Planner page as a single centered calendar
widget on the `#f7f8fc` background, with a minimal footer appended (repo
convention).

#### Scenario: Default render

- **GIVEN** the Planner page is rendered
- **WHEN** the user views the page
- **THEN** the page background SHALL be `#f7f8fc`
- **AND** a white calendar card SHALL be centered horizontally and
  vertically in the viewport
- **AND** the card SHALL contain, in order: the title **"Calendar #01"**,
  the month navigation row, the weekday header bar, and the date grid
- **AND** there SHALL be no navbar, no hero, and no images
- **AND** a footer SHALL render at the bottom (see "Footer" requirement)

### Requirement: Title

The system SHALL render the widget title **"Calendar #01"** centered above
the month navigation.

#### Scenario: Title render

- **GIVEN** the Planner page is rendered
- **WHEN** the user views the top of the calendar card
- **THEN** the title SHALL read **"Calendar #01"** (source-exact, including
  the `#01` suffix — do NOT "fix" it to another number)
- **AND** the title SHALL be centered, dark near-black, sans-serif,
  ~28–32px, weight 600

### Requirement: Month navigation

The system SHALL render a month navigation row with prev/next chevrons and
a month label, and SHALL switch months when the chevrons are clicked.

#### Scenario: Initial month label

- **GIVEN** the Planner page is rendered
- **WHEN** the user views the month navigation row
- **THEN** the label SHALL read **"December 2020"** (`MMMM yyyy` format) in
  `#1371e6`, centered
- **AND** a left chevron SHALL render to its left and a right chevron to
  its right, both in `#b9cae7`

#### Scenario: Previous month

- **GIVEN** the Planner page is rendered showing December 2020
- **WHEN** the user clicks the left (previous) chevron
- **THEN** the label SHALL update to **"November 2020"**
- **AND** the grid SHALL re-render November 2020's dates (30 days;
  1 November 2020 was a Sunday, so no leading blank cells)

#### Scenario: Next month

- **GIVEN** the Planner page is rendered showing December 2020
- **WHEN** the user clicks the right (next) chevron
- **THEN** the label SHALL update to **"January 2021"**
- **AND** the grid SHALL re-render January 2021's dates (31 days;
  1 January 2021 was a Friday, so four leading blank cells)

#### Scenario: Year rollover

- **GIVEN** the Planner page is rendered showing December 2020
- **WHEN** the user clicks next once and previous twice
- **THEN** the label SHALL read **"November 2020"** (year rollover handled
  correctly across the December→January boundary)

- **AND** both chevrons SHALL be keyboard-focusable buttons with
  `aria-label` "Previous month" / "Next month" and a visible `focus-visible`
  ring

### Requirement: Weekday header bar

The system SHALL render a solid blue weekday bar with seven equal columns.

#### Scenario: Day names

- **GIVEN** the Planner page is rendered
- **WHEN** the user views the weekday header bar
- **THEN** the bar SHALL have a solid `#3d88f7` background
- **AND** it SHALL list the seven weekday abbreviations in order — `Sun`,
  `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat` — in white, centered, in 7
  equal-width columns

### Requirement: Date grid

The system SHALL render the visible month as a 7-column grid with blank
leading cells, thin grey separators, and correct date styling relative to
the selected date.

#### Scenario: December 2020 initial grid

- **GIVEN** the Planner page is rendered showing December 2020
- **WHEN** the user views the date grid
- **THEN** the grid SHALL have 7 columns and 5 rows
- **AND** the first row SHALL have two leading blank cells (Sun, Mon —
  1 December 2020 was a Tuesday) followed by 1–5
- **AND** dates 1–18 SHALL render in light grey `#7c7d81` (before the
  selected date)
- **AND** dates 20–31 SHALL render in near-black `#111111` (after the
  selected date)
- **AND** each cell SHALL be separated by thin `#e6e6e6` lines
- **AND** all dates SHALL be centered in their cells

### Requirement: Selected date

The system SHALL highlight the selected date with a solid blue circle and
SHALL move the selection when a date is clicked.

#### Scenario: Initial selection

- **GIVEN** the Planner page is rendered showing December 2020
- **WHEN** the user views the date 19
- **THEN** the date 19 SHALL render as white text inside a solid `#3d88f7`
  circle (the reference's screenshot-date "today" indicator — recreated as
  the SELECTED date so the initial render matches the screenshot 1:1)

#### Scenario: Click to select

- **GIVEN** the Planner page is rendered showing December 2020
- **WHEN** the user clicks the date 5
- **THEN** the blue circle SHALL move to date 5
- **AND** dates before 5 (1–4) SHALL re-render in `#7c7d81` and dates after
  5 (6–31) in `#111111`

#### Scenario: Selection persists across months

- **GIVEN** the Planner page is rendered showing December 2020 with 19
  selected
- **WHEN** the user navigates to November 2020 and back to December 2020
- **THEN** the selection (19) SHALL be preserved on return

- **AND** every date cell SHALL be a button with an accessible label (e.g.
  "19 December 2020") and `aria-selected`/`aria-current` on the selected
  one; `focus-visible` rings per repo a11y convention

### Requirement: Responsive behavior

The system SHALL keep the calendar usable at all viewport widths (the
reference is a compact desktop widget; the recreation must not overflow on
phones).

#### Scenario: Mobile layout

- **GIVEN** the Planner page is rendered on a viewport ≤480px
- **WHEN** the page is displayed
- **THEN** the card SHALL fit the viewport width without horizontal
  overflow (cells shrink, 7 columns preserved)
- **AND** the widget SHALL remain centered with reduced page padding

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Planner page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so it
  does not disturb the minimalist widget reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-planner`
- [ ] `scripts/verify-app.sh planner` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Single widget page (1:1 with reference): "Calendar #01" title →
      month nav ("December 2020" + chevrons) → solid blue weekday bar
      (Sun–Sat, white) → 7×5 date grid → minimal Component Dock footer;
      `#f7f8fc` page bg, white card, NO navbar/hero/images
- [ ] Brand tokens in `@theme`, used via Tailwind classes: accent
      `#3d88f7`, month label `#1371e6`, chevron `#b9cae7`, past date
      `#7c7d81`, future date `#111111`, grid line `#e6e6e6`, page bg
      `#f7f8fc`, white `#ffffff`
- [ ] Font: sans-serif via Google Fonts `<link>` in `index.html`
      (recommended Poppins — exact family unverifiable, preview 404; note
      the substitution in the PR); title ~28–32px/600, month label
      ~18–20px, weekday ~13–14px, dates ~14–16px
- [ ] Initial render matches the screenshot 1:1: "December 2020", two
      leading blank cells (Tue start), 1–18 grey, **19 in solid `#3d88f7`
      circle with white text**, 20–31 near-black
- [ ] Interactions functional: prev/next chevrons switch months (label +
      grid, year rollover correct); clicking a date moves the blue circle;
      past/future colors recompute around the selection; selection survives
      month round-trips
- [ ] Grid: 7 equal columns, thin `#e6e6e6` separators, dates centered
- [ ] A11y: chevron buttons `aria-label` "Previous month"/"Next month";
      date cells are buttons with accessible labels ("19 December 2020")
      and `aria-selected`/`aria-current`; `focus-visible` rings everywhere
- [ ] Responsive: no horizontal overflow at ≤480px, 7 columns preserved,
      widget centered
- [ ] `cn()` imported from `@free-react-templates/ui` (packages/ui — knip
      gate); packages/ui `Button`/`ButtonLink` reused where they fit
- [ ] No Bootstrap, no jquery, no copied CSS/HTML — re-implement with
      Tailwind tokens; no ColorLib strings anywhere in `apps/planner`
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`
      done by implementer at ship time (mark the "Calendar 01" row, line
      685 — Bootstrap Calendars (20) category; single row, no dups)
