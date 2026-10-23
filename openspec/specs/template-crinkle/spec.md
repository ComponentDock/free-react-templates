# Template Spec: Crinkle (Accordion 18 Recreation)

## Purpose

Crinkle is a bootstrap accordion component page with an accordion and footer. It recreates the ColorLib **Accordion 18** design (https://colorlib.com/wp/template/accordion-18/, preview: https://preview.colorlib.com/theme/bac/accordion-18/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template. ⚠️ Prep note: this slug's demo is NOT on the slug-only preview path — the live preview URL above is the authoritative one.

## Overview

- **New name**: Crinkle
- **Source**: ColorLib "Bootstrap Accordion V18" (https://colorlib.com/wp/template/accordion-18/)
- **Preview**: https://preview.colorlib.com/theme/bac/accordion-18/ — ⚠️ Pointer status re-probed 2026-10-13: the bare slug path 404s (at spec time and now); the live demo is the family directory `/theme/bac/accordion-18/` (HTTP 200, 4,272 B), so the screenshot is a supporting reference, not the sole one
- **Type**: Single-purpose accordion component page (Bootstrap Accordion category)
- **Package**: @free-react-templates/crinkle

## Design Tokens (extracted from ColorLib preview CSS)

### Colors

- **Brand green**: `#72c02c` (active/expanded state)
- **Header inactive text**: `#999999` (rgb(153, 153, 153))
- **Header active text**: `#72c02c` (brand green)
- **Body text**: `#888888` (rgb(136, 136, 136))
- **Item background (inactive)**: `#f9f9f9` (rgb(249, 249, 249))
- **Header background**: `#ffffff` (white)
- **Icon background (inactive)**: `#efefef` (rgb(239, 239, 239))
- **Icon background (active)**: `#72c02c` (brand green)
- **Icon color (active)**: `#ffffff` (white)
- **Page title**: `#000000` (black)

### Typography

- **Font family**: Roboto (Google Fonts)
- **Title size**: ~28px (matching existing accordion templates)
- **Panel header size**: ~20px
- **Body text size**: ~16px (default)
- **Font weight**: 400 (normal) for headers, 400 for body

### Layout

- **Container max-width**: ~600px (centered)
- **Accordion item margin-bottom**: 10px
- **Header padding**: 15px (right padding 0 for icon area)
- **Body padding**: 20px
- **Icon size**: 18px font, padded area ~30x30px
- **Border radius**: 4px on icon area, 0 on items
- **Page title**: "Accordion #18" (matching ColorLib "Bootstrap Accordion #8" pattern)

### Component Behavior

- Single-open accordion (one panel open at a time)
- First panel open by default
- Headers are full-width toggle buttons
- Expand/collapse icon swaps: down chevron (▼) → up chevron (▲)
- Active header text color = brand green
- Inactive header text color = grey (#999)
- Body background = light grey (#f5f5f5 equivalent)
- No borders between items (10px gap)

## Section Structure (1:1 with source)

1. **Page Title** — "Accordion #18" centered, ~28px, font-medium
2. **Accordion** — Three panels:
   - Panel 1: "How to download and register?" (open by default)
   - Panel 2: "How to create your paypal account?"
   - Panel 3: "How to link your paypal and bank account?"
3. **Footer** — Component Dock attribution link

## Requirements

### Feature: Template Spec: Crinkle template behaviour

#### Scenario: Initial render shows first panel expanded

- **GIVEN** the Crinkle page loads
- **WHEN** the page renders
- **THEN** the first accordion panel is expanded
- **AND** the second and third panels are collapsed
- **AND** the first panel's header shows brand green text
- **AND** the first panel's header shows the up-chevron icon
- **AND** the second and third panels' headers show grey text
- **AND** the second and third panels' headers show the down-chevron icon

#### Scenario: Clicking a collapsed panel expands it and collapses the active one

- **GIVEN** the first panel is expanded
- **WHEN** the user clicks the second panel's header
- **THEN** the second panel becomes expanded
- **AND** the first panel becomes collapsed
- **AND** the second panel's header shows brand green text and up-chevron
- **AND** the first panel's header shows grey text and down-chevron

#### Scenario: Clicking an expanded panel collapses it

- **GIVEN** the first panel is expanded
- **WHEN** the user clicks the first panel's header
- **THEN** the first panel becomes collapsed
- **AND** no panel is expanded
- **AND** the first panel's header shows grey text and down-chevron

#### Scenario: Keyboard navigation works

- **GIVEN** focus is on the first panel's header
- **WHEN** the user presses Enter
- **THEN** the first panel toggles (expands if collapsed, collapses if expanded)
- **AND** focus remains on the header

#### Scenario: Footer links to Component Dock

- **GIVEN** the page renders
- **WHEN** the user scrolls to the footer
- **THEN** a "More templates at Component Dock" link is visible
- **AND** the link href is "https://www.componentdock.com/"

#### Scenario: Semantic accessibility

- **GIVEN** the page renders
- **THEN** each panel header is a <button> with aria-expanded and aria-controls
- **THEN** each panel body is a <div role="region"> with aria-labelledby pointing to its header
- **THEN** icons have aria-hidden="true"
- **THEN** the accordion container has no redundant wrapper

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/crinkle/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/crinkle/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Implementation Notes

- Use `packages/ui` `cn()` utility for class composition
- No ColorLib references in source code (provenance only in spec/PR)
- Placeholder images not needed (text-only component)
- Google Fonts: Roboto via `<link>` in index.html
- Icons: lucide-react `ChevronDown` / `ChevronUp` (replacing icomoon)
- Content can be paraphrased but keep same structure
- Follow existing accordion patterns in `apps/bellows`, `apps/concertina`, `apps/crank`
- Footer MUST link https://www.componentdock.com/ branded "Component Dock"

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
