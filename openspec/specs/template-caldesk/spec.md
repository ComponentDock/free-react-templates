# Template: CalDesk (Bootstrap Calendars)

## Purpose

A professional desktop datepicker and calendar widget template featuring a dual-calendar grid layout with month navigation. It also includes and a minimal branded footer. Recreation of ColorLib Calendar 14 (`https://colorlib.com/wp/template/calendar-14/`).
- **Source design:** ColorLib "Calendar 14" — https://colorlib.com/wp/template/calendar-14/

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/bootstrap/calendar-14/ (HTTP 200, 1,146 B, fetched 2026-10-23) and its theme stylesheet `theme/bootstrap/calendar-14/css/style.css` (11,192 B, sha256 `fd751b920d3b…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#0056b3` | 1 declarations — `a:hover` |
| Surface | `#ffffff` | 8 declarations — `.rd-container`, `.rd-day-selected` |
| Ink / dark surface | `#212529` | 2 declarations — `body`, `.table` |
| Typeface | `"Roboto", sans-serif` (2 rules — body)<br>`-apple-system, sans-serif` (1 rule — body) | `font-family` declarations in the theme sheet |
| Radii | `.25rem`, `50%` | `.25rem` (.cl-form-control); `50%` (.rd-day-selected) |

Palette in order of use: `#ffffff` ×8, `#6c757d` ×5, `#212529` ×2, `#495057` ×2, `#0056b3` ×1, `#007bff` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Datepicker input with calendar popup

The CalDesk page SHALL display a datepicker input field with a calendar icon. Clicking the input or icon SHALL toggle a calendar popup open/closed. Selecting a date SHALL populate the input and close the popup.

#### Scenario: Clicking input opens calendar popup

- **WHEN** the user clicks the datepicker input field
- **THEN** the calendar popup becomes visible

#### Scenario: Selecting a date populates input and closes popup

- **WHEN** the user clicks a day in the calendar
- **THEN** the input displays the selected date and the popup closes

### Requirement: Interactive calendar grid with month navigation

Each calendar instance SHALL display a month/year header flanked by previous and next navigation buttons, a weekday abbreviations row (Su Mo Tu We Th Fr Sa), and a 7-column date grid with correct alignment.

#### Scenario: Calendar renders correct day grid

- **WHEN** the calendar displays a given month
- **THEN** it shows the correct number of day buttons with empty cells before the 1st

#### Scenario: Month navigation with year rollover

- **WHEN** the user clicks the previous or next button at the boundary of January/December
- **THEN** the year increments or decrements accordingly

### Requirement: Footer with Component Dock branding

The footer SHALL display copyright information and a link to `https://www.componentdock.com/` branded as "Component Dock". No references to ColorLib SHALL appear in the application code.

#### Scenario: Footer renders Component Dock link

- **WHEN** the user views the footer
- **THEN** it contains a link to componentdock.com branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- caldesk` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 5 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
      - Datepicker input with calendar popup
      - Interactive calendar grid with month navigation
      - Footer with Component Dock branding
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [x] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [x] Footer links https://www.componentdock.com/ ("Component Dock").
- [ ] Datepicker input with calendar popup — the calendar popup becomes visible
- [ ] Interactive calendar grid with month navigation — it shows the correct number of day buttons with empty cells before the 1st
