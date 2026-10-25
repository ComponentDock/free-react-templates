# Template: Dropwell (Nested Dropdown Menu)

> Recreation of ColorLib Dropdown 07 (https://colorlib.com/wp/template/dropdown-07/)

## Purpose

Provide a multi-level nested dropdown menu component showcasing expandable submenu items in a Bootstrap-style dropdown pattern.
- **Source design:** ColorLib "Dropdown 07" — https://colorlib.com/wp/template/dropdown-07/

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/bootstrap/dropdown-07/ (HTTP 200, 2,483 B, fetched 2026-10-23) and its theme stylesheet `theme/bootstrap/dropdown-07/css/style.css` (18,598 B, sha256 `a8ee94ceeccd…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#007bff` | 5 declarations — `.cl-btn-primary`, `.cl-btn-primary.disabled` |
| Other chromatic values | `#0062cc`, `#2161dd`, `#4d80e4` | `#0062cc` × 2 (.cl-btn-primary:hover); `#2161dd` × 2 (.cl-btn.cl-btn-primary:hover); `#4d80e4` × 2 (.cl-btn.cl-btn-primary) |
| Surface | `#ffffff` | 14 declarations — `body`, `.cl-form-control` |
| Ink / dark surface | `#212529` | 5 declarations — `.cl-btn`, `.cl-btn:hover` |
| Typeface | `"Roboto", sans-serif` (2 rules — body)<br>`-apple-system, sans-serif` (1 rule — body) | `font-family` declarations in the theme sheet |
| Radii | `0.25rem`, `4px`, `5px` | `0.25rem` (.cl-form-control); `4px` (.cl-form-control); `5px` (.cl-btn) |

<!-- body-role-tokens: dropdown-07/ink/dropwell -->
**Heading-ink role (measured 2026-10-25):** this prep states `#212529` — the visible section heading is #ffffff and the base h3 is #000000 (.heading-section{color:#fff}; h2,h3{color:#000}. #212529 is the body colour, not a heading), so the value is the BODY colour, not a heading colour. The sibling prep `onboard` states the value the render supports.
<!-- /body-role-tokens -->

Palette in order of use: `#ffffff` ×14, `#6c757d` ×6, `#007bff` ×5, `#212529` ×5, `#0062cc` ×2, `#2161dd` ×2.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Page renders with heading and footer

Users SHALL see a page titled "Dropdown" with a "Dropwell" branded footer linking to Component Dock.

#### Scenario: Heading is visible

- **WHEN** the page loads
- **THEN** the heading "Dropdown" is visible
- **AND** the footer shows "Dropwell"
- **AND** the footer has a link to componentdock.com

### Requirement: Toggle opens dropdown menu

Users SHALL be able to open and close the dropdown menu by clicking the toggle button.

#### Scenario: Click opens menu

- **WHEN** I click the dropdown toggle button
- **THEN** the menu is visible
- **AND** menu items are listed

#### Scenario: Click closes open menu

- **GIVEN** the dropdown menu is open
- **WHEN** I click the toggle button again
- **THEN** the menu is not visible

### Requirement: Nested submenu expands

Users SHALL be able to expand and collapse nested submenus by clicking parent items with chevron indicators.

#### Scenario: Submenu expands on click

- **GIVEN** the dropdown menu is open
- **WHEN** I click a parent menu item with submenu
- **THEN** the nested submenu is visible

#### Scenario: Submenu collapses on second click

- **GIVEN** the dropdown menu is open and a submenu is expanded
- **WHEN** I click the same parent menu item again
- **THEN** the nested submenu is not visible

### Requirement: Click outside closes menu

Users SHALL be able to close the dropdown by clicking outside of it.

#### Scenario: Click outside closes menu

- **GIVEN** the dropdown menu is open
- **WHEN** I click outside the dropdown
- **THEN** the menu is not visible

### Requirement: Escape closes menu

Users SHALL be able to close the dropdown by pressing the Escape key.

#### Scenario: Escape closes menu

- **GIVEN** the dropdown menu is open
- **WHEN** I press Escape
- **THEN** the menu is not visible

#### Scenario: Non-Escape key does not close menu

- **GIVEN** the dropdown menu is open
- **WHEN** I press ArrowDown
- **THEN** the menu is still visible

### Requirement: Footer links to Component Dock

The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link is correct

- **WHEN** I view the footer
- **THEN** the "Component Dock" link points to https://www.componentdock.com/
- **AND** the link opens in a new tab

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/dropwell/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/dropwell/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Toggle opens dropdown menu — the menu is visible
- [ ] Nested submenu expands — the nested submenu is visible
- [ ] Click outside closes menu — the menu is not visible
- [ ] Escape closes menu — the menu is not visible
