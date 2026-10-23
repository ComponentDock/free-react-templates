# Template: BtnClick (Bootstrap Buttons 10)

Recreation of ColorLib "Bootstrap Buttons 10" (`https://colorlib.com/wp/template/bootstrap-buttons-10/`) under the original name **BtnClick**.

## Purpose

Btnclick is a bootstrap button component page. It recreates the ColorLib **Bootstrap Buttons 10** design (https://colorlib.com/wp/template/bootstrap-buttons-10/, preview: https://preview.colorlib.com/theme/bb/bootstrap-buttons-10/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template. ⚠️ Prep note: this slug's demo is NOT on the slug-only preview path — the live preview URL above is the authoritative one.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/bb/bootstrap-buttons-10/ (HTTP 200, 3,280 B, fetched 2026-10-23) and its theme stylesheet `theme/bb/bootstrap-buttons-10/css/style.css` (18,194 B, sha256 `68481860ad2b…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#007bff` | 13 declarations — `.cl-btn-primary`, `.cl-btn-primary.disabled` |
| Other chromatic values | `#17a2b8`, `#28a745`, `#dc3545` | `#17a2b8` × 7 (.cl-btn-info); `#28a745` × 7 (.cl-btn-success); `#dc3545` × 7 (.cl-btn-danger) |
| Surface | `#ffffff` | 32 declarations — `.cl-btn-primary`, `.cl-btn-primary:hover` |
| Ink / dark surface | `#212529` | 13 declarations — `.cl-btn`, `.cl-btn:hover` |
| Typeface | `"Roboto", sans-serif` (2 rules — body)<br>`-apple-system, sans-serif` (1 rule — body) | `font-family` declarations in the theme sheet |
| Radii | `.25rem`, `.2rem`, `.3rem` | `.25rem` (.cl-btn); `.2rem` (.cl-btn-sm); `.3rem` (.cl-btn-lg) |

Palette in order of use: `#ffffff` ×32, `#007bff` ×13, `#212529` ×13, `#17a2b8` ×7, `#28a745` ×7, `#6c757d` ×7.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement 1: Size Variants & Layout

#### Scenario: Size Variants & Layout

- The page displays size variant buttons (Large, Medium, Small) matching the Bootstrap 4 buttons style #10.
- Heading `#10 — Bootstrap 4 Buttons` is prominently displayed.

### Requirement 2: Color Palette Buttons

#### Scenario: Color Palette Buttons

- Displays a comprehensive set of button color variants (Primary, Secondary, Success, Info, Warning, Danger, Light, Orange, Indigo, Pink, Deep Orange, Aqua, Dark, Black, Purple, Blue, Brown, Blue Gray).

### Requirement 3: Block Button & Footer

#### Scenario: Block Button & Footer

- Includes a full-width block button.
- Includes a professional footer linking `https://www.componentdock.com/` ("Component Dock").

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/btnclick/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/btnclick/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Size Variants & Layout — The page displays size variant buttons (Large, Medium, Small) matching the Bootstrap 4 buttons style #10
- [ ] Color Palette Buttons — Displays a comprehensive set of button color variants (Primary, Secondary, Success, Info, Warning, Danger, Light, Orange, Indigo, Pink, Deep Orange, Aqua, Dark, Black, Purple…
