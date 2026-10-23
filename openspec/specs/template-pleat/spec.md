# Template: Pleat (Interactive Accordion Showcase)

## Purpose

Recreation of ColorLib **Accordion 13** (`https://colorlib.com/wp/template/accordion-13/`), preview URL: `https://preview.colorlib.com/theme/bac/accordion-13/`. Built with Vite, React 19, Tailwind CSS 4, and TypeScript. Styled as a modern minimalist interactive accordion component showcase featuring smooth collapsible panels, chevron icons, active green state (#72c02c), and clean Roboto typography.

## Design Tokens

- **Brand Primary / Active Color:** `#72c02c` (vibrant green)
- **Background Color:** `#ffffff` (white)
- **Text Color (Body / Paragraphs):** `#b3b3b3` (light gray)
- **Text Color (Headings):** `#333333`
- **Border Color (Inactive):** `#efefef`
- **Border Color (Active):** `#72c02c`
- **Font Family:** `"Roboto", sans-serif`
- **Border Radius:** `4px` (`rounded`)
- **Accordion Body Text:** `#888888`
- **Brand stated:** `#72c02c` — live sheet paints it ×3 — `color` on `.custom-accordion .cl-accordion-item .cl-btn-link[aria-expanded="true"]:before`; style.css?v=92579d65 (8,988 B, sha256 e1e89fa9fb0f) · <https://preview.colorlib.com/theme/bac/accordion-13/>

## Requirements

### Feature: Interactive Accordion Panels

As a visitor, I want to expand and collapse accordion items so that I can read detailed answers cleanly without clutter.

#### Scenario: Default initial state

- **GIVEN** the accordion page is loaded
- **WHEN** the user views the accordion items
- **THEN** all accordion items are collapsed by default
- **AND** each item shows a down-chevron icon and gray border (`#efefef`)

#### Scenario: Expanding a collapsed item

- **GIVEN** the user is viewing the accordion component
- **WHEN** the user clicks on a collapsed accordion item header
- **THEN** that item expands to reveal its content body
- **AND** its header transitions to the active green border (`#72c02c`) with green text and up-chevron icon
- **AND** other items remain in their previous state (multiple items can be open)

#### Scenario: Collapsing an expanded item

- **GIVEN** the user has expanded an accordion item
- **WHEN** the user clicks on the expanded item header again
- **THEN** the item collapses and the content is hidden
- **AND** the header returns to gray border and gray text with down-chevron

#### Scenario: Component Footer attribution

- **GIVEN** the accordion page is rendered
- **WHEN** the user scrolls to the bottom of the page
- **THEN** a footer is visible containing copyright information and a link to `https://www.componentdock.com/` ("Component Dock")

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/pleat/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/pleat/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Vite + React 19 + Tailwind CSS 4 setup is fully typed and clean
- [ ] Accordion items support smooth open/close toggle state
- [ ] Active item styling matches design tokens (`#72c02c` border/text, green chevron)
- [ ] First accordion item expanded by default (matching original)
- [x] Footer links to Component Dock (`https://www.componentdock.com/`)
- [ ] 100% test coverage with Vitest & Testing Library
- [ ] Passes per-app verification (`scripts/verify-app.sh pleat`)
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
