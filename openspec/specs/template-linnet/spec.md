# Linnet

## Purpose

A business/agency one-page template with dark overlay hero, tabbed content, filterable portfolio, team cards, monthly/yearly pricing. It also includes blog, animated stats, and contact form. Recreation of ColorLib "Classic" (https://colorlib.com/wp/template/classic/).

## Requirements

### Requirement: Page loads with all sections

Users SHALL see a complete one-page template with all 13 sections rendered in order.

#### Scenario: All sections present

- **WHEN** a user visits the Linnet homepage
- **THEN** the navbar, hero, about, why-choose-us, services, skills, portfolio, team, pricing, blog, stats, contact, and footer sections are all visible

### Requirement: Pricing tabs switch between monthly and yearly

Users SHALL be able to toggle between monthly and yearly pricing views.

#### Scenario: Switch to yearly pricing

- **WHEN** a user clicks the "Yearly" tab in the pricing section
- **THEN** the price cards display yearly amounts

#### Scenario: Switch back to monthly pricing

- **WHEN** a user clicks the "Monthly" tab in the pricing section
- **THEN** the price cards display monthly amounts

### Requirement: Why Choose Us tabs switch content

Users SHALL be able to switch between Mission, Vision, and Support tab content.

#### Scenario: Switch to Vision tab

- **WHEN** a user clicks the "Our Vision" tab
- **THEN** the vision content is displayed

#### Scenario: Switch to Support tab

- **WHEN** a user clicks the "Our Support" tab
- **THEN** the support content is displayed

### Requirement: Portfolio filter tabs

Users SHALL be able to filter portfolio items by category.

#### Scenario: Filter by category

- **WHEN** a user clicks a category filter button
- **THEN** only portfolio items matching that category are displayed

### Requirement: Contact form submission

Users SHALL be able to submit the contact form.

#### Scenario: Submit contact form

- **WHEN** a user fills in the form and clicks "Send Now"
- **THEN** the form submission is handled without page navigation

### Requirement: Footer links to Component Dock

Every page footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer contains Component Dock link

- **WHEN** a user views the footer
- **THEN** a link to https://www.componentdock.com/ with text "Component Dock" is present

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/linnet/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/linnet/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
