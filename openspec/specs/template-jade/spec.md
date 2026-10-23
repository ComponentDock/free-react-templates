# Spec: Jade (ColorLib Accordion 20)

## Purpose

An elegant FAQ / accordion template built with React 19, TypeScript, and Tailwind CSS 4. Recreation of ColorLib Accordion 20 as **Jade**.

## Requirements

### Requirement 1: Hero & Heading

Users SHALL see a clear title and description representing the accordion showcase.

#### Scenario: Display header

- **WHEN** the user loads Jade
- **THEN** they see the main title and introduction

### Requirement 2: Interactive Accordion

Users SHALL be able to expand and collapse accordion items interactively.

#### Scenario: Expand accordion item

- **WHEN** the user clicks an accordion item header
- **THEN** the accordion item expands to reveal its content

### Requirement 3: Footer

Users SHALL see a copyright footer with a branded link to Component Dock.

#### Scenario: Display footer

- **WHEN** the user scrolls to the bottom of the page
- **THEN** they see the footer containing the Component Dock link

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
`apps/jade/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/jade/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
