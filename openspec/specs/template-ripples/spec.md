# Template: Ripples (Interactive Accordion Showcase & FAQ)

## Purpose

An Interactive Accordion Showcase & FAQ template with interactive accordion and footer brand sections. Recreation of ColorLib **Accordion 11** (`https://colorlib.com/wp/template/accordion-11/`), preview URL: `https://preview.colorlib.com/theme/bac/accordion-11/`.

Design category: UI Component Showcase & FAQ / Interactive Accordion.
New app name: `ripples` (`@free-react-templates/ripples`).

## Design Tokens

- **Brand Colors**: Primary blue (`#007bff` / `#2563eb`), dark slate headers (`#1e293b`), crisp white backgrounds (`#ffffff`), soft neutral gray wrapper (`#f8fafc`).
- **Typography**: Clean sans-serif font family (Inter / Roboto / Poppins via Google Fonts).
- **Radii**: Smooth rounded corners (`rounded-lg` / `rounded-xl`).
- **Components**: Multi-item collapsible accordion panels with smooth transition states, chevron/plus-minus toggle indicators, distinct active states.

## Requirements

### Feature: Interactive Accordion Sections

#### Scenario: User toggles accordion items

- **GIVEN** the Ripples template is loaded with FAQ / accordion items
- **WHEN** the user clicks an accordion header
- **THEN** the corresponding panel expands to reveal its content
- **AND** the chevron icon rotates or updates state accordingly

#### Scenario: Multiple or exclusive accordion behavior

- **GIVEN** accordion sections are present
- **WHEN** the user clicks another accordion item
- **THEN** that item expands smoothly

### Feature: Footer Brand Link

#### Scenario: Footer Brand Link

- **GIVEN** the Ripples template is displayed
- **WHEN** the user scrolls to the footer
- **THEN** a prominent "Made with Component Dock" link pointing to `https://www.componentdock.com/` is visible and accessible

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/ripples/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/ripples/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] App builds successfully with Vite + React 19 + Tailwind v4 + TypeScript.
- [ ] 100% test coverage with Vitest + Testing Library.
- [ ] Footer contains Component Dock link (`https://www.componentdock.com/`).
- [ ] CNAME set to `ripples.free.componentdock.com`.
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Interactive Accordion Sections — the corresponding panel expands to reveal its content
