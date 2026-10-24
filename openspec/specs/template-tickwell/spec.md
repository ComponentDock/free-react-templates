# Template: Tickwell (Bootstrap Checkboxes)

Recreation of ColorLib Checkbox 05 (https://colorlib.com/wp/template/checkbox-05/).

## Purpose

Tickwell is a modern animated checkmark checkbox UI component template. It provides
a clean, interactive checkbox experience with smooth SVG stroke-dashoffset animation
for the checkmark drawing effect, indigo brand accent color, and a minimal centered layout.
- **Source design:** ColorLib "Checkbox 05" — https://colorlib.com/wp/template/checkbox-05/

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/bootstrap/checkbox-05/ (HTTP 200, 1,382 B, fetched 2026-10-23) and its theme stylesheet `theme/bootstrap/checkbox-05/css/style.css` (10,844 B, sha256 `bdc8b3d87d4a…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#c400c6` | 2 declarations — `ul.ks-cboxtags li input[type="checkbox"]:checked + label` |
| Surface | `#ffffff` | 5 declarations — `ul.ks-cboxtags li label span`, `ul.ks-cboxtags li input[type="checkbox"]:checked + label::before` |
| Ink / dark surface | `#000000` | 3 declarations — `.heading-section`, `h2` |
| Typeface | `"Poppins", sans-serif` (2 rules — body)<br>`"FontAwesome"` (1 rule — ul.ks-cboxtags li label::before) | `font-family` declarations in the theme sheet |
| Radii | `30px`, `4px` | `30px` (ul.ks-cboxtags li label span); `4px` (ul.ks-cboxtags li label) |

Palette in order of use: `#ffffff` ×5, `#000000` ×3, `#c400c6` ×2, `#212529` ×1, `#f9e090` ×1, `#fafafa` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Animated Checkbox Component

Tickwell SHALL render individual checkbox items with an animated SVG checkmark that
draws in when checked and retracts when unchecked.

#### Scenario: Checkbox renders unchecked by default

- **WHEN** an AnimatedCheckbox is rendered without defaultChecked
- **THEN** the checkbox input is unchecked, the square shows a gray border, and no checkmark is visible

#### Scenario: Checkbox toggles on click

- **WHEN** the user clicks an unchecked AnimatedCheckbox
- **THEN** the checkbox becomes checked, the square fills with indigo, and the checkmark animates in

#### Scenario: Checkbox respects defaultChecked

- **WHEN** an AnimatedCheckbox is rendered with defaultChecked={true}
- **THEN** the checkbox is checked immediately with indigo fill and visible checkmark

#### Scenario: Checkbox supports keyboard interaction

- **WHEN** the user presses Space on a focused AnimatedCheckbox
- **THEN** the checkbox toggles its checked state

### Requirement: Showcase Section

Tickwell SHALL display a centered section with a heading, subtitle, and a vertical
list of three animated checkbox items.

#### Scenario: Heading renders correctly

- **WHEN** the CheckboxShowcase section loads
- **THEN** it displays "Checkbox #05" as the main heading

#### Scenario: Subtitle renders correctly

- **WHEN** the CheckboxShowcase section loads
- **THEN** it displays "Animated checkmark checkboxes" as the subtitle

#### Scenario: Three checkboxes render

- **WHEN** the CheckboxShowcase section loads
- **THEN** it renders exactly 3 checkbox items with labels

### Requirement: Footer with Component Dock

Tickwell SHALL include a footer with the template name and a link to Component Dock.

#### Scenario: Footer shows template name

- **WHEN** the Footer component renders
- **THEN** it displays "Tickwell"

#### Scenario: Footer links to Component Dock

- **WHEN** the Footer component renders
- **THEN** it contains a link to https://www.componentdock.com/ labeled "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/tickwell/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/tickwell/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Animated Checkbox Component — the checkbox input is unchecked, the square shows a gray border, and no checkmark is visible
- [ ] Showcase Section — it displays "Checkbox #05" as the main heading
