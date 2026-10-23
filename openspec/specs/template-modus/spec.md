# Template: Modus (Interior Design)

> Recreation of ColorLib [Interd](https://colorlib.com/wp/template/interd/).
> Preview: https://preview.colorlib.com/theme/interd/

## Purpose

Modus is an interior design company landing page template that recreates the ColorLib "Interd" design with React, Tailwind CSS 4, and TypeScript. It features a hero, services, about, testimonials, gallery, accordion, CTA, and footer sections using a warm peach/salmon gradient brand palette with Heebo and Mulish fonts.

## Requirements

### Requirement: Page renders all sections in correct order

The template SHALL render all nine sections (Navbar, Hero, Services, About, Testimonials, Gallery, Accordion, CTA Banner, Footer) in the correct visual order.

#### Scenario: All sections present on page load

- **WHEN** the user opens the Modus page
- **THEN** the navbar with "Modus" brand is visible
- **AND** the hero with headline "Let's Make your Interior Better" is visible
- **AND** the "What We Do" services section is visible
- **AND** the "We design with aesthetic sense" about section is visible
- **AND** the testimonials section with author names is visible
- **AND** the "Our Work" gallery section is visible
- **AND** the accordion section is visible
- **AND** the CTA banner "Let's discuss about your interior" is visible
- **AND** the footer with "Component Dock" link is visible

### Requirement: Navigation links scroll to sections

The navbar SHALL contain links to Home, Services, Work, About, and Contact sections.

#### Scenario: Navigation links are present and functional

- **WHEN** the user views the navbar
- **THEN** links for Home, Services, Work, About, and Contact are visible
- **AND** each link targets the corresponding section via anchor

### Requirement: Services section shows three service cards

The services section SHALL display three service cards with images, titles, and descriptions.

#### Scenario: Three service cards render

- **WHEN** the services section is visible
- **THEN** three service cards are displayed
- **AND** each card has an image, title, and description

### Requirement: Accordion toggles expand and collapse

The accordion section SHALL allow users to expand and collapse individual items.

#### Scenario: Clicking an accordion header toggles its content

- **WHEN** the user clicks an accordion header
- **THEN** the accordion content expands or collapses
- **AND** the aria-expanded attribute updates accordingly

### Requirement: Footer links to Component Dock

The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Component Dock link is present in footer

- **WHEN** the user scrolls to the footer
- **THEN** there is a link to "https://www.componentdock.com/" with text "Component Dock"
- **AND** the link opens in a new tab

### Requirement: Design tokens match ColorLib Interd

The template SHALL use the original design tokens: Heebo + Mulish fonts, brand gradient #ff8a7a to #ffc99e, navy headings #232F55.

#### Scenario: Design tokens are applied correctly

- **WHEN** the page renders
- **THEN** headings use the Heebo font family
- **AND** body text uses the Mulish font family
- **AND** CTA buttons use the brand gradient colors

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/modus/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/modus/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
