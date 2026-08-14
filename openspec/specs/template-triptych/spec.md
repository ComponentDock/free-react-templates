# Template: Triptych (Calendar — Bootstrap)

## Purpose

Triptych is a single-page calendar widget template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Calendar 05" design (see TEMPLATES.md, Bootstrap Calendars
category, line 689 — no duplicate row), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict). No
ColorLib references in app code — provenance lives in this spec, TEMPLATES.md,
and the PR.

## Design reference (replication findings)

- **Original:** ColorLib "Calendar 05" — free HTML calendar widget page (one
  of a 20-item "Bootstrap Calendars" series; page `<title>` "Calendar 05";
  source: https://colorlib.com/wp/template/calendar-05/). Single page: one
  section with a centered heading and a 3-column interactive-looking date
  display (Year / Month / Day), each column showing previous / current / next
  value of today's date.
- **Live preview:** direct `/theme/calendar-05/` URL returns HTTP 404 — the
  REAL preview is a sub-page of the bootstrap theme preview:
  `https://preview.colorlib.com/theme/bootstrap/calendar-05/` (HTTP 200;
  fetched `/tmp/cal05.html`, 3,952 bytes) plus stylesheet `css/style.css`
  (`/tmp/cal05.css`, 220,623 bytes) and the TEMPLATES.md screenshot
  (`calendar-05.jpg`, 1200×972, viewed in the browser).
- **Visual design (screenshot + live DOM + CSS):** minimal, clean,
  productivity-tool aesthetic. Very light gray-lavender page background; a
  dark sans-serif heading centered at top ("Calendar #05"); below it a
  horizontal 3-panel purple gradient widget. Each panel is a column with
  three stacked cells: a small faded value on a dark overlay (previous), a
  large bright white value with an uppercase label on the panel's purple
  (current), and a small faded value on a dark overlay (next). Screenshot
  shows current date Dec 19, 2020 (2020 / 12 / 19 with YEAR / MONTH / DAY
  labels), prev 2019 / 11 / 18, next 2021 / 01 / 20. No buttons, links, or
  forms anywhere on the page (only the widget). The page is a static
  render — `js/main.js` (fetched) computes today ± 1 for year/month/day via
  moment.js and has NO click handlers.
- **Behavior:** values are computed at render: current = today
  (`YYYY` / `MM` / `DD`), previous = minus one unit, next = plus one unit,
  with month/day rollover (e.g. prevMonth of January → `12`, nextDay of Jan
  31 → `01`). Labels under the current values: "Year", "Month", "Day"
  (14px uppercase).

## Design tokens (from `css/style.css` of the live preview)

- **Page background:** `#f8f9fd` (body override, light gray-lavender). Body
  text `gray`; headings `#000`. No dark mode in the source.
- **Section (`.ftco-section`):** `padding: 7em 0` (≈112px top/bottom).
- **Heading (`.heading-section`):** `font-size: 28px`, `color: #000`,
  Lato, `font-weight: 400` (bootstrap h2 weight 500), centered above the
  widget (source text "Calendar #05" — paraphrase to "Calendar"; the "#05"
  suffix is the series index, not content).
- **Widget wrapper (`.box`):** `margin: 0 auto`, centered; width constrained
  by the Bootstrap `col-md-6` wrapper → ~50% of the 1140px container
  (≈570px) on md+ screens, full width below md.
- **Columns (`.calendar .year/.month/.day`):** three equal panels,
  `width: 33.333%`, side by side at ALL viewport widths (the component has
  no media queries — columns never stack). `text-align: center`, white text.
  Panel colors (darkest → lightest, left → right):
  - Year: `#7e0cf5` (deep violet)
  - Month: `#983df7` (purple)
  - Day: `#a555f8` (light purple)
- **Previous/next cells (`.calendar .previous/.next`):**
  `background-color: rgba(0, 0, 0, 0.5)` (dark overlay over the panel
  purple), `padding: 2.6em 0`; value `font-size: 40px`, white,
  `opacity: 0.3`.
- **Current cell (`.calendar .current`):** `padding: 2em 0`; value
  `font-size: 40px`, white, `margin: 0`; label `font-size: 14px`,
  `text-transform: uppercase`, white, below the value.
- **Font:** `"Lato", Arial, sans-serif` (Google Fonts, weights 300/400/700
  loaded in the source). Values inherit weight 400 (renders bold at 40px —
  if the recreation looks too light vs the screenshot, use 700 for the
  current value).
- **Links (not used on this page):** `a { color: #7e0cf5 }` — the brand
  purple doubles as the link color.
- **Footer:** the source page has NO footer (section + scripts only). Per
  repo convention (docs/conventions.md) the recreation ADDS a minimal
  centered footer line linking https://www.componentdock.com/ ("Component
  Dock") — deviation from source, required by monorepo rules.

## Requirements

### Requirement: Page shell and heading

The system SHALL render a single section (background `#f8f9fd`, vertical
padding ≈7em) containing a centered h2 heading "Calendar" (28px Lato, near-
black `#000`; source heading is "Calendar #05" — the "#05" series suffix is
dropped) followed by the calendar widget below it.

#### Scenario: Section and heading render

- **GIVEN** the page is rendered
- **WHEN** the main section is inspected
- **THEN** it shows the light gray-lavender background `#f8f9fd` and a
  centered 28px heading "Calendar" above the widget

### Requirement: Three-column calendar widget layout

The system SHALL render a centered widget (max ~570px on md+ screens, full
width below) containing exactly three equal-width columns (33.333% each)
side by side at every viewport width, in this order with these backgrounds:
Year `#7e0cf5` (deep violet), Month `#983df7` (purple), Day `#a555f8` (light
purple). Each column SHALL stack three cells vertically: previous (top),
current (middle), next (bottom).

#### Scenario: Widget columns

- **GIVEN** the calendar widget is rendered
- **WHEN** it is inspected
- **THEN** it shows three equal columns — Year (deep violet), Month
  (purple), Day (light purple) — each with previous, current, and next
  cells stacked vertically

#### Scenario: Columns stay side by side on small screens

- **GIVEN** a narrow (mobile) viewport
- **WHEN** the widget is inspected
- **THEN** the three columns remain in a single row of three equal widths
  (matching the source, which has no responsive stacking rules)

### Requirement: Date values and labels

The system SHALL compute the values from the current date at render time:
each current cell shows today's value (Year `YYYY`, Month `MM` zero-padded,
Day `DD` zero-padded) in 40px white text with its uppercase label beneath
("YEAR", "MONTH", "DAY" — 14px, uppercase, white); each previous cell shows
the value minus one unit and each next cell shows the value plus one unit
(40px white text at 30% opacity on a `rgba(0,0,0,0.5)` overlay, with the
same padding rhythm — previous/next cells padded 2.6em vertically, current
cell 2em), with correct month/day rollover (e.g. prev month of January is
`12`, next day of Jan 31 is `01`).

#### Scenario: Current date values

- **GIVEN** the widget is rendered on a known date (e.g. via a mocked
  clock, 2020-12-19)
- **WHEN** the current cells are inspected
- **THEN** they show `2020`, `12`, and `19` with the labels YEAR, MONTH,
  and DAY beneath them

#### Scenario: Previous and next values

- **GIVEN** the widget is rendered on a known date (e.g. 2020-12-19)
- **WHEN** the previous and next cells are inspected
- **THEN** the previous cells show 2019, 11, 18 and the next cells show
  2021, 01, 20, each rendered faded (30% opacity) on the dark overlay
  background

#### Scenario: Month/day rollover

- **GIVEN** the widget is rendered on a month boundary or year boundary
  (e.g. 2021-01-01)
- **WHEN** the previous/next values are computed
- **THEN** previous month is `12`, previous day is `31`, previous year is
  `2020`, and next year is `2022` — unit arithmetic rolls over exactly like
  the source's moment.js `subtract(1, unit)` / `add(1, unit)` calls

### Requirement: Static widget (no interactions)

The system SHALL render the date display as static content — the source
`js/main.js` populates the values once on load and registers no click
handlers, so no navigation, hover states, or animation are required on the
widget cells (values SHALL NOT change when cells are clicked).

#### Scenario: No interaction on cells

- **GIVEN** the widget is rendered
- **WHEN** any previous/current/next cell is activated
- **THEN** the displayed values do not change and no navigation occurs

### Requirement: Accessibility of the date display

The system SHALL expose the current date to assistive technology: the
widget SHALL carry an accessible label describing today's date (e.g.
`aria-label` "Today's date: December 19, 2020" on the widget group), and the
previous/next decorative values SHALL be hidden from assistive technology
(e.g. `aria-hidden`) so screen readers announce only the current date and
its three labeled parts.

#### Scenario: Screen reader label

- **GIVEN** the widget is rendered on a known date
- **WHEN** the widget group is inspected by an accessibility query
- **THEN** it exposes the current date in its accessible label and the
  previous/next values are excluded from the accessibility tree

### Requirement: Footer with Component Dock link

The system SHALL render a minimal footer at the bottom of the page (the
source has no footer — this is a monorepo-convention addition) with a
centered line such as "Made with Component Dock", where "Component Dock"
links https://www.componentdock.com/.

#### Scenario: Footer link

- **GIVEN** the page is rendered
- **WHEN** the footer is inspected
- **THEN** it shows a line containing a link to
  https://www.componentdock.com/

## Verification checklist

- [ ] `openspec/specs/template-triptych/spec.md` validated (`npm run spec:validate`)
- [ ] App folder `apps/triptych`, package `@free-react-templates/triptych`,
      no ColorLib references in app code (grep for colorlib/Calendar in
      apps/triptych)
- [ ] Footer links https://www.componentdock.com/
- [ ] Tests first, 100% coverage (Vitest + RTL, fake timers / mocked system
      date) — `bash scripts/verify-app.sh triptych`
- [ ] Section order matches the source: section (heading) → widget → footer
- [ ] Tokens in `src/index.css` `@theme`: `--color-year: #7e0cf5`,
      `--color-month: #983df7`, `--color-day: #a555f8`,
      `--color-page: #f8f9fd`, `--color-ink: #000`, `--color-overlay:
    rgba(0,0,0,0.5)`; Lato (300/400/700) Google Fonts link in
      `index.html`
- [ ] Widget: 3 equal 33.333% columns side by side at all widths; Year /
      Month / Day backgrounds in the source gradient order; prev/next cells
      `rgba(0,0,0,0.5)` with 2.6em padding and 30%-opacity 40px values;
      current cell 2em padding, 40px white value + 14px uppercase label
- [ ] Values computed from today's date: `YYYY` / `MM` / `DD`, prev = −1
      unit, next = +1 unit, with month/day/year rollover
- [ ] No click interactions on cells (source-faithful static widget)
- [ ] A11y: widget exposes today's date via accessible label; prev/next
      values `aria-hidden`
- [ ] Placeholder images: none needed (no imagery in the source — do NOT
      add decorative images); icons from `lucide-react` if any
- [ ] PR description: source template, preview URL (note the
      `/theme/bootstrap/calendar-05/` path — the direct URL 404s), design
      tokens, diffs (name, heading paraphrase "Calendar", added footer with
      Component Dock link, static widget)
