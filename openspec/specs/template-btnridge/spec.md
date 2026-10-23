# Template: Btnridge (Bootstrap Buttons 12)

## Purpose

Btnridge is a bootstrap button component page. It recreates the ColorLib **Bootstrap Buttons 12** design (https://colorlib.com/wp/template/bootstrap-buttons-12/, preview: https://preview.colorlib.com/theme/bb/bootstrap-buttons-12/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template. ⚠️ Prep note: this slug's demo is NOT on the slug-only preview path — the live preview URL above is the authoritative one.

## Overview

Recreation of ColorLib "Bootstrap Buttons V12" (`https://colorlib.com/wp/template/bootstrap-buttons-12/`) under the original name `btnridge`.

- Aesthetic: Dark theme showcase of sleek, modern Bootstrap-inspired buttons, featuring dark/black gradients, multiple sizes, rounded/pill/outline styles, and social buttons.
- Design tokens: Dark background (`#111827`, `#1f2937`), sleek border effects, vibrant accent glow (`#3b82f6` blue / `#6366f1` indigo).
- Footer: Component Dock brand link (`https://www.componentdock.com/`).

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Bootstrap Buttons 12** — https://colorlib.com/wp/template/bootstrap-buttons-12/
- **Preview**: slug-only path `https://preview.colorlib.com/theme/bootstrap-buttons-12/` returns **HTTP 404**; the authoritative demo is `https://preview.colorlib.com/theme/bb/bootstrap-buttons-12/` — HTTP 200 on 2026-10-23, title "Button 02", measured `css/style.css` (40,302 bytes).
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-buttons-12.jpg
- **Measured how**: hex-literal census of `https://preview.colorlib.com/theme/bb/bootstrap-buttons-12/css/style.css?v=ed38b1d6`.

### Colors

| Token           | Value     | Occurrences | Role                                              |
| --------------- | --------- | ----------- | ------------------------------------------------- |
| Primary indigo  | `#494ca2` | 15          | Primary button fill (the demo's signature indigo) |
| Secondary olive | `#94aa2a` | 13          | Secondary / success button fill                   |
| Accent crimson  | `#f0134d` | 13          | Accent / destructive button fill                  |
| Dark grey       | `#343a40` | 24          | Dark button fill and hover                        |
| Ink             | `#212529` | 17          | Text and dark outline borders                     |
| Off-white       | `#f8f9fa` | 13          | Light button fill                                 |
| White           | `#fff`    | 58          | Page canvas                                       |

### Typography

| Element | Family    | Evidence                                           |
| ------- | --------- | -------------------------------------------------- |
| All UI  | `Poppins` | 6 `font-family` rules; the demo loads Poppins only |

### Shapes & rhythm

| Property | Reference value                                                         |
| -------- | ----------------------------------------------------------------------- |
| Radii    | `0.25rem` (2), `40px` pill (2), `0.3rem` (1)                            |
| Sizes    | size scale from xs to full-width, per the demo's own scale              |
| Layout   | header -> size scale -> colour palette grid -> full-width row -> footer |

### Section order (shipped app, 1:1 with the reference)

`Header -> SizeScale -> ColorPalette -> FullWidth -> Footer`

### Delta vs shipped app

- `apps/btnridge` ships the stock Bootstrap palette (`--color-primary: #0d6efd`, `#dc3545`, `#198754`, ...) and Inter — `#0d6efd` occurs **0 times** in the demo stylesheet. The reference palette is `#494ca2` / `#94aa2a` / `#f0134d` / `#343a40` with Poppins.
- The screenshot shows the swatch buttons on a dark canvas; the app renders them on `bg-white`/`bg-slate-*` — verify the canvas treatment in a fidelity pass.

## Requirements

### Feature: template-btnridge template behaviour

#### Scenario: template-btnridge

- Gherkin feature scenarios covering Header, SizeScale, ColorPalette, SocialButtons, and Footer sections.
- 100% test coverage.
- Fully accessible with proper ARIA labels and semantic markup.
- `injectUiSource()` in `vite.config.ts`.
- `public/CNAME` with `btnridge.free.componentdock.com`.

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/btnridge/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/btnridge/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] template-btnridge template behaviour — Gherkin feature scenarios covering Header, SizeScale, ColorPalette, SocialButtons, and Footer sections
