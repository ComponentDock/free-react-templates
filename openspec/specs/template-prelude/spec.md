# Template: Prelude (Coming Soon Page)

> Recreation of ColorLib "01 Comming Soon" (https://colorlib.com/wp/template/01-comming-soon/)

## Purpose

A split-screen coming soon page template — dark left panel with countdown timer
and email signup, right panel with background image. The preview at
https://preview.colorlib.com/theme/01-comming-soon/ was unavailable; design
based on the ColorLib page description ("split-screen design") and the screenshot.

Design tokens:

- Dark navy background `#1a1a2e` on left panel
- White text for headings, gray `#9ca3af` for body text
- Poppins font (Google Fonts)
- White pill button for email submit
- Picsum.photos seeded placeholder for right panel image
- Assets are NOT copied — placeholder images + Tailwind utilities

Prelude lives in `apps/prelude` and uses shared components from `packages/ui`.

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **01 Comming Soon** — https://colorlib.com/wp/template/01-comming-soon/
- **Preview**: https://colorlib.com/etc/cs/01-comming-soon.html — HTTP 200 on 2026-10-23; measured `01-comming-soon/css/style.css` (14,814 bytes). Title served: "TITLE".
- **Path note**: No `/theme/` demo exists (`https://preview.colorlib.com/theme/01-comming-soon/` is 404). The live page is the catalog entry's own `url` for `01-comming-soon` in `assets/js/catalog-products-*.js`; it still carries the placeholder `<title>TITLE</title>`.
- **Measured how**: hex-literal census of `01-comming-soon/css/style.css`; the count column is the number of literal occurrences in that sheet (smaller than the number of rules that use it when a declaration repeats the value).

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Body ink | `#292b2c` | 1 | `body` colour |
| Link blue | `#0275d8` | 1 | `a` colour |
| Link hover | `#014c8c` | 1 | `a:hover`/`a:focus` |
| Hover accent | `#e45f74` | 1 | shared `:hover` colour for `a` and `button` |
| Facebook | `#2a61d6` | 2 | social icon stroke on `.footer-icons` |
| Twitter | `#3aa4f8` | 2 | social icon stroke |
| Google+ | `#f43846` | 2 | social icon stroke |
| Instagram | `#8f614a` | 2 | social icon stroke |
| Pinterest | `#e1c013` | 2 | social icon stroke |
| Field grey | `#f1f2f3` | 1 | email input fill |

### Typography

| Element | Family | Evidence |
| ------- | ------ | -------- |
| Body | `Open Sans` | 4 declarations |
| Display | `Poppins` | 4 declarations (`.title`) |
| Fallback | Bootstrap 4 system stack | `-apple-system, system-ui, BlinkMacSystemFont…` |

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Radii | `40px` (2 — email input pill, icon circles), `0 40px 40px 0` (1 — submit button right cap) |
| Layout | 50/50 split: `.left-section` copy column left, `.right-section` photo panel right; `.left-section` centres its content with `display-table` |
| Form | single email input + `NOTIFY US` button docked to its right edge as one 40px pill |

### Section order (shipped app, 1:1 with the reference)

`SplitHero -> Footer`

Reference bands: left-section (under-construction copy, countdown, email pill, social icons) -> right-section (photo).

### Delta vs shipped app

- The app is a single split hero + footer, matching the reference's two-panel layout.
- The reference's only chromatic UI colour is the `#e45f74` hover; its other literals are social-brand icon strokes and Bootstrap link defaults. The app declares no hex tokens at all (`@theme` has only `--font-sans`).
- The demo page has a `ClassyCountdown` block (days/hours/minutes/seconds) that the shipped app does not render.

## Requirements

### Requirement: Split-screen hero layout

The template SHALL render a full-viewport-height split-screen layout with a dark
content panel on the left (50% width) and a background image on the right (50% width).

#### Scenario: Hero layout renders split panels

- **WHEN** the page loads
- **THEN** the heading "Coming Soon" is visible
- **AND** a subheading describing the upcoming launch is visible
- **AND** the right panel displays a background image

### Requirement: Countdown timer

The template SHALL display a live countdown timer with days, hours, minutes, and
seconds until a target date.

#### Scenario: Countdown displays four time units

- **WHEN** the page loads
- **THEN** the labels "Days", "Hours", "Minutes", and "Seconds" are visible
- **AND** each unit displays a numeric value

#### Scenario: Countdown updates every second

- **WHEN** one second elapses
- **THEN** the countdown values update

### Requirement: Email signup form

The template SHALL provide an email signup form with an input field and a
"Notify Me" submit button.

#### Scenario: Email form renders

- **WHEN** the page loads
- **THEN** an email input field with placeholder "Enter your email" is visible
- **AND** a "Notify Me" button is visible

#### Scenario: Successful email submission

- **WHEN** the user enters a valid email and clicks "Notify Me"
- **THEN** a success message "Thank you" is displayed
- **AND** the email input is no longer visible

### Requirement: Footer with Component Dock link

The template SHALL display a footer linking to https://www.componentdock.com/.

#### Scenario: Footer renders Component Dock link

- **WHEN** the page loads
- **THEN** the footer displays a link to componentdock.com
- **AND** the link text mentions "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/prelude/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/prelude/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Split-screen hero layout — the heading "Coming Soon" is visible
- [x] Countdown timer — the labels "Days", "Hours", "Minutes", and "Seconds" are visible
- [x] Email signup form — an email input field with placeholder "Enter your email" is visible
