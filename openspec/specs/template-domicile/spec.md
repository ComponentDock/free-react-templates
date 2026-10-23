## Purpose

Domicile is a real estate property listing landing page with search filters and a property grid. It recreates the ColorLib **Homespace** design (https://colorlib.com/wp/template/homespace/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app.

## Requirements

### Requirement: Complete page composition

The app SHALL render all sections: TopBar, Navbar, Hero, SearchFilter, Properties, Services, Blog, and Footer.

#### Scenario: Full page renders all sections

- **WHEN** the app loads
- **THEN** all section headings are present in the DOM

### Requirement: Brand identity

The app SHALL display "Domicile" as the brand name with a red dot accent in navbar and footer.

#### Scenario: Brand name visible

- **WHEN** the page renders
- **THEN** "Domicile" appears in navbar and footer

### Requirement: Property listings

The Properties section SHALL display 6 property cards with title, location, price, beds, baths, and sqft.

#### Scenario: All properties rendered

- **WHEN** the page renders
- **THEN** all 6 property cards are visible with prices

### Requirement: Search filters

The SearchFilter SHALL provide dropdown filters for Lot Area, Bedrooms, Bathrooms, and Price Range.

#### Scenario: Filter dropdowns

- **WHEN** the page renders
- **THEN** all 4 filter dropdowns are visible

### Requirement: Footer Component Dock link

The footer SHALL link to https://www.componentdock.com/ with target="_blank".

#### Scenario: Component Dock link

- **WHEN** the page renders
- **THEN** a link to componentdock.com with target="_blank" is present

### Requirement: 100% test coverage

All source files under src/ (excluding main.tsx, test files, CSS, and configs) SHALL have 100% coverage.

#### Scenario: Coverage gate passes

- **WHEN** verify-app.sh domicile runs
- **THEN** coverage is 100%

### Requirement: Per-app verification gate

The app SHALL pass typecheck, lint, tests with 100% coverage, and build.

#### Scenario: Verification gate

- **WHEN** scripts/verify-app.sh domicile runs
- **THEN** all steps pass

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/domicile/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/domicile/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
