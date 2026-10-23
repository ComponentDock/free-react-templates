# Template: Seekform (Full-page Search Form)

## Purpose

A full-page search hero with a prominent search input, category pills, and a lifestyle background image. Recreation of ColorLib "Search Form 6" (https://colorlib.com/wp/template/colorlib-search-6/).

## Requirements

### Requirement: Heading display

The template SHALL display a bold white heading "What are you looking for?" centered over the hero background.

#### Scenario: Heading is visible

- **WHEN** the user visits the Seekform page
- **THEN** a heading "What are you looking for?" is visible

### Requirement: Search input

The template SHALL provide a large, rounded search input with a magnifying glass icon that accepts user text.

#### Scenario: Search input is present and interactive

- **WHEN** the user visits the Seekform page
- **THEN** a search input is visible
- **WHEN** the user types "shoes" in the search input
- **THEN** the search input displays "shoes"

#### Scenario: Search submission

- **WHEN** the user types "test query" in the search input
- **AND** the user presses Enter
- **THEN** the search form is submitted

### Requirement: Category pills

The template SHALL display 5 category filter pills (New Arrivals, Ladies, Mens, Accessories, Sale) below the search input.

#### Scenario: All category pills are rendered

- **WHEN** the user visits the Seekform page
- **THEN** 5 category pills are visible: "New Arrivals", "Ladies", "Mens", "Accessories", "Sale"

#### Scenario: Pill click triggers callback

- **WHEN** the user clicks a category pill
- **THEN** the onSelect callback is called with the category name

### Requirement: Background image

The template SHALL display a full-screen background image with a dark overlay for text readability.

#### Scenario: Background is displayed

- **WHEN** the user visits the Seekform page
- **THEN** a full-screen background image is displayed

### Requirement: Footer

The template SHALL include a footer with a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer contains Component Dock link

- **WHEN** the user visits the Seekform page
- **THEN** a link to "https://www.componentdock.com/" is present in the footer
- **AND** the text "Component Dock" is visible

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/seekform/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/seekform/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Heading display — a heading "What are you looking for?" is visible
- [ ] Search input — a search input is visible
- [ ] Category pills — 5 category pills are visible: "New Arrivals", "Ladies", "Mens", "Accessories", "Sale"
- [ ] Background image — a full-screen background image is displayed
