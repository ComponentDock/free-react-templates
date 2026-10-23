# Template: Calstack (Bootstrap Calendars)

## Purpose

An interactive calendar date picker and event scheduling interface featuring dual month grids with navigation and a minimal branded footer. Recreation of ColorLib Calendar 15 (`https://colorlib.com/wp/template/calendar-15/`).

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/bootstrap/calendar-15/ (HTTP 200, 1,456 B, fetched 2026-10-23) and its theme stylesheet `theme/bootstrap/calendar-15/css/style.css` (11,213 B, sha256 `6590312a7c9e…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#0056b3` | 1 declarations — `a:hover` |
| Surface | `#ffffff` | 7 declarations — `.rd-container`, `.rd-day-selected` |
| Ink / dark surface | `#212529` | 2 declarations — `body`, `.table` |
| Typeface | `"Roboto", sans-serif` (2 rules — body)<br>`-apple-system, sans-serif` (1 rule — body) | `font-family` declarations in the theme sheet |
| Radii | `.25rem`, `50%` | `.25rem` (.cl-form-control); `50%` (.rd-day-selected) |

Palette in order of use: `#ffffff` ×7, `#6c757d` ×5, `#212529` ×2, `#495057` ×2, `#0056b3` ×1, `#007bff` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Interactive calendar grid with month navigation

Each calendar instance SHALL display a month/year header flanked by previous and next navigation buttons, a weekday abbreviations row (Sun Mon Tue Wed Thu Fri Sat), and a 7-column date grid with correct alignment. Today's date SHALL be highlighted with an accent background.

#### Scenario: Calendar renders correct day grid

- **WHEN** the calendar displays a given month
- **THEN** it shows the correct number of day buttons with empty cells before the 1st

#### Scenario: Month navigation with year rollover

- **WHEN** the user clicks the previous or next button at the boundary of January/December
- **THEN** the year increments or decrements accordingly

#### Scenario: Today is highlighted

- **WHEN** the calendar renders the current month
- **THEN** today's date button has an accent background and includes "(today)" in its accessible label

### Requirement: Dual calendar layout

The page SHALL display two side-by-side calendar instances in a responsive grid that stacks on mobile.

#### Scenario: Both calendars render with the same initial month

- **WHEN** the page loads
- **THEN** both calendars show the current month and year

### Requirement: Footer with Component Dock branding

The footer SHALL display a link to `https://www.componentdock.com/` branded as "Component Dock". No references to ColorLib SHALL appear in the application code.

#### Scenario: Footer renders Component Dock link

- **WHEN** the user views the footer
- **THEN** it contains a link to componentdock.com branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- calstack` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 5 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
      - Interactive calendar grid with month navigation
      - Dual calendar layout
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
- [ ] Interactive calendar grid with month navigation — it shows the correct number of day buttons with empty cells before the 1st
- [ ] Dual calendar layout — both calendars show the current month and year
