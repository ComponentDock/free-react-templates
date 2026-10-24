# Template: BtnVibe (Bootstrap Buttons)

Recreation of ColorLib Bootstrap Buttons 06 under the original name **BtnVibe**.

## Purpose

Btnvibe is a bootstrap button component page. It recreates the ColorLib "Bootstrap Buttons 06" design (https://colorlib.com/wp/template/bootstrap-buttons-06/, preview: https://preview.colorlib.com/theme/bb/bootstrap-buttons-06/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template. ⚠️ Prep note: this slug's demo is NOT on the slug-only preview path — the live preview URL above is the authoritative one.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/bb/bootstrap-buttons-06/ (HTTP 200, 3,514 B, fetched 2026-10-23) and its theme stylesheet `theme/bb/bootstrap-buttons-06/css/style.css` (15,541 B, sha256 `6906f1c37c4f…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#007bff` | 6 declarations — `.cl-btn-primary`, `.cl-btn-primary.disabled` |
| Other chromatic values | `#17a2b8`, `#28a745`, `#dc3545` | `#17a2b8` × 5 (.cl-btn-info); `#28a745` × 5 (.cl-btn-success); `#dc3545` × 5 (.cl-btn-danger) |
| Surface | `#ffffff` | 34 declarations — `.cl-btn-primary`, `.cl-btn-primary:hover` |
| Ink / dark surface | `#212529` | 13 declarations — `.cl-btn`, `.cl-btn:hover` |
| Typeface | `"Roboto", sans-serif` (2 rules — body)<br>`-apple-system, sans-serif` (1 rule — body) | `font-family` declarations in the theme sheet |
| Radii | `4px`, `.25rem`, `.2rem` | `4px` (.cl-btn); `.25rem` (.cl-btn); `.2rem` (.cl-btn-sm) |

Palette in order of use: `#ffffff` ×34, `#212529` ×13, `#007bff` ×6, `#17a2b8` ×5, `#28a745` ×5, `#dc3545` ×5.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement 1: Navigation Bar

#### Scenario: Navigation Bar

- Navbar with brand logo ("BtnVibe"), navigation links (Showcase, Outline, Shapes, Sizes, Icons, Playground), and dark mode toggle.

### Requirement 2: Hero Section

#### Scenario: Hero Section

- Engaging header presenting BtnVibe as a modern bootstrap button showcase with quick action buttons.

### Requirement 3: Solid Buttons Section

#### Scenario: Solid Buttons Section

- Showcase of solid-colored button variants across standard intents.

### Requirement 4: Outline & Ghost Buttons Section

#### Scenario: Outline & Ghost Buttons Section

- Showcase of transparent/outline button variants.

### Requirement 5: Shape & Size Variants

#### Scenario: Shape & Size Variants

- Rounded, pill, square, small, medium, large, and disabled state variations.

### Requirement 6: Interactive Playground

#### Scenario: Interactive Playground

- Live playground where users can customize button properties and copy snippet code.

### Requirement 7: Component Dock Footer

#### Scenario: Component Dock Footer

- Footer linking to https://www.componentdock.com/ ("Made with Component Dock").

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/btnvibe/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/btnvibe/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navigation Bar — Navbar with brand logo ("BtnVibe"), navigation links (Showcase, Outline, Shapes, Sizes, Icons, Playground), and dark mode toggle
- [ ] Hero Section — Engaging header presenting BtnVibe as a modern bootstrap button showcase with quick action buttons
- [ ] Solid Buttons Section — Showcase of solid-colored button variants across standard intents
- [ ] Outline & Ghost Buttons Section — Showcase of transparent/outline button variants
- [ ] Shape & Size Variants — Rounded, pill, square, small, medium, large, and disabled state variations
- [ ] Interactive Playground — Live playground where users can customize button properties and copy snippet code
