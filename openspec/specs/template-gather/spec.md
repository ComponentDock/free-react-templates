# Template: Gather (Accordion 10)

## Purpose

An accordion 10 template with interactive accordion steps and footer attribution sections. Gather is an interactive accordion component template inspired by ColorLib "Accordion 10" (ColorLib Accordion V10), built under a new name with Vite, React 19, Tailwind CSS 4, and TypeScript.

## Design reference

- **Original:** ColorLib "Accordion 10" (https://colorlib.com/wp/template/accordion-10/).
- **Structure:** Clean vertical accordion with steps (Step 01 Identify Your Goals, Step 02 Write Your Goals, Step 03 Need Analysis, Step 04 List Objectives), where expanding a step reveals a list of bullet points with arrow/chevron icons.
- **Tokens:** Poppins font, dark header style, clean white/gray card layout, distinct active/expanded state styling.
- **Footer:** Must link https://www.componentdock.com/ ("More templates at Component Dock").

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/bac/accordion-10/ (HTTP 200, 9,154 B, fetched 2026-10-23) and its theme stylesheet `theme/bac/accordion-10/css/style.css` (18,155 B, sha256 `6477fb72decc…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#1c2938` | 3 declarations — `.myaccordion .cl-btn`, `button[aria-expanded="true"]` |
| Other chromatic values | `#38ade0`, `#0056b3`, `#007bff` | `#38ade0` × 3 (a); `#0056b3` × 2 (a:hover); `#007bff` × 2 (a) |
| Surface | `#ffffff` | 6 declarations — `.heading-section`, `body` |
| Ink / dark surface | `#000000` | 3 declarations — `h2`, `h3` |
| Typeface | `"Ionicons"` (2 rules — [data-toggle="collapse"] .fa:before)<br>`"Poppins", sans-serif` (2 rules — body) | `font-family` declarations in the theme sheet |
| Radii | `0.25rem`, `0 !important`, `calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0` | `0.25rem` (.cl-btn); `0 !important` (.myaccordion .cl-btn); `calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0` (.cl-card-header:first-child) |

Palette in order of use: `#ffffff` ×6, `#000000` ×3, `#1c2938` ×3, `#212529` ×3, `#38ade0` ×3, `#0056b3` ×2.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Feature: Interactive Accordion Steps

#### Scenario: Interactive Accordion Steps

- The system SHALL render accordion items for Step 01 through Step 04.
- Clicking an accordion header SHALL expand that step and collapse others (or toggle state).
- Expanded steps SHALL reveal bullet points with links/descriptions.

### Feature: Footer Attribution

#### Scenario: Footer Attribution

- The footer SHALL link to https://www.componentdock.com/ with branded text "More templates at Component Dock" or similar.

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/gather/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/gather/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Interactive Accordion Steps — The system render accordion items for Step 01 through Step 04
