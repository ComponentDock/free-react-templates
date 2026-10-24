# Template: Btnflare (Bootstrap Button Showcase & Component Library)

## Purpose

Recreation of ColorLib Bootstrap Buttons 07 (`https://colorlib.com/wp/template/bootstrap-buttons-07/`, preview: `https://preview.colorlib.com/theme/bootstrap-buttons-07/` — unreachable, 404). A clean, systematic UI component showcase featuring Bootstrap 4 inspired button variants organized by size scale (Large, Medium, Small), comprehensive color palette (18 variants: Primary, Secondary, Success, Info, Warning, Danger, Light, Orange, Indigo, Pink, Deep Orange, Aqua, Dark, Black, Purple, Blue, Brown, Blue Gray), and a full-width block button, built with React 19, Tailwind CSS 4, and TypeScript.
- **Source design:** ColorLib "Bootstrap Buttons 07" — https://colorlib.com/wp/template/bootstrap-buttons-07/

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/bb/bootstrap-buttons-07/ (HTTP 200, 3,279 B, fetched 2026-10-23) and its theme stylesheet `theme/bb/bootstrap-buttons-07/css/style.css` (18,637 B, sha256 `aacc95fc099b…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#0062cc` | 5 declarations — `.cl-btn-primary:hover`, `.cl-btn-primary:focus` |
| Other chromatic values | `#007bff`, `#dc3545`, `#ffc107` | `#007bff` × 5 (.cl-btn-primary); `#dc3545` × 5 (.cl-btn-danger); `#ffc107` × 5 (.cl-btn-warning) |
| Surface | `#ffffff` | 58 declarations — `.cl-btn-primary`, `.cl-btn-primary:hover` |
| Ink / dark surface | `#212529` | 13 declarations — `.cl-btn`, `.cl-btn:hover` |
| Typeface | `"Roboto", sans-serif` (2 rules — body)<br>`-apple-system, sans-serif` (1 rule — body) | `font-family` declarations in the theme sheet |
| Radii | `.25rem`, `.2rem`, `.3rem` | `.25rem` (.cl-btn); `.2rem` (.cl-btn-sm); `.3rem` (.cl-btn-lg) |

Palette in order of use: `#ffffff` ×58, `#212529` ×13, `#0062cc` ×5, `#007bff` ×5, `#dc3545` ×5, `#ffc107` ×5.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Size Scale Showcase

The system SHALL render a size scale section with Large, Medium, and Small button variants with proportional padding and typography, each with a size label.

#### Scenario: Viewing button sizes

- **GIVEN** the user is on the Btnflare home page
- **WHEN** the user views the size scale section
- **THEN** they SHALL see Large, Medium, and Small button variants with proportional padding and typography
- **AND** each button SHALL have a label indicating its size
- **AND** all size buttons SHALL use the Primary color variant

### Requirement: Comprehensive Color Palette

The system SHALL render a comprehensive color palette section with all 18 Bootstrap 4 semantic color variants organized in three rows.

#### Scenario: Viewing color variants row 1

- **GIVEN** the user is viewing the color palette section
- **WHEN** the user scans the first row of buttons
- **THEN** they SHALL see Primary, Secondary, Success, Info, Warning, Danger, Light, and Orange button options
- **AND** each button SHALL display its semantic color correctly
- **AND** each button SHALL have a label with its color name

#### Scenario: Viewing color variants row 2

- **GIVEN** the user is viewing the color palette section
- **WHEN** the user scans the second row of buttons
- **THEN** they SHALL see Indigo, Pink, Deep Orange, Aqua, Dark, Black, Purple, and Blue button options
- **AND** each button SHALL display its semantic color correctly
- **AND** each button SHALL have a label with its color name

#### Scenario: Viewing color variants row 3

- **GIVEN** the user is viewing the color palette section
- **WHEN** the user scans the third row of buttons
- **THEN** they SHALL see Brown and Blue Gray button options
- **AND** each button SHALL display its semantic color correctly
- **AND** each button SHALL have a label with its color name

#### Scenario: Interactive hover states on color buttons

- **GIVEN** the user is viewing any color variant button
- **WHEN** the user hovers over a button
- **THEN** the button SHALL display a subtle elevation/darken effect
- **AND** the transition SHALL be smooth (150-200ms)

### Requirement: Full Width Block Button

The system SHALL render a full-width block button section with a button that spans 100% of its container width.

#### Scenario: Viewing full width block button

- **GIVEN** the user is viewing the full width section
- **WHEN** the user checks the block button
- **THEN** it SHALL span 100% of its container width
- **AND** it SHALL use the Primary color variant
- **AND** it SHALL have a label indicating "Full width button"
- **AND** it SHALL have clear hover feedback

### Requirement: Responsive Layout and Component Dock Footer

The system SHALL render a responsive page that works on all viewports with proper attribution in the footer.

#### Scenario: Mobile responsive layout

- **GIVEN** the user views the page on a mobile viewport (640px or less)
- **WHEN** the page renders
- **THEN** button rows SHALL stack vertically or wrap gracefully
- **AND** the full-width button SHALL span the viewport width
- **AND** all text SHALL remain readable

#### Scenario: Footer attribution check

- **GIVEN** the user scrolls to the bottom of the page
- **WHEN** the footer is visible
- **THEN** the footer SHALL display "Made with Component Dock" linking to https://www.componentdock.com/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/btnflare/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/btnflare/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Size Scale Showcase — they SHALL see Large, Medium, and Small button variants with proportional padding and typography
- [ ] Comprehensive Color Palette — they SHALL see Primary, Secondary, Success, Info, Warning, Danger, Light, and Orange button options
- [ ] Full Width Block Button — it SHALL span 100% of its container width
