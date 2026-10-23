# Template: Searchpad (Search Form Bar)

## Purpose

Recreation of ColorLib "Colorlib Search Form V21" — an expandable search form page with two stacked search inputs. The first input is round (pill-shaped) and expands from a 60px circle to full width on focus with a clear button. The second input is square (rounded corners) and expands from a small width to full width on focus. Both inputs sit on a light blue background and are centered vertically and horizontally.

> Source: https://colorlib.com/wp/template/colorlib-search-21/
> Preview: https://colorlib.com/etc/searchf/colorlib-search-21/

## Requirements

### Requirement: Page layout and background

The page SHALL render a centered, full-viewport container with a light blue (#d8f4fe) background and Poppins font.

#### Scenario: Page loads with correct background

- **WHEN** the page loads
- **THEN** the viewport background color is light blue
- **AND** the form is centered both vertically and horizontally

### Requirement: Two stacked search inputs

The form SHALL contain two search inputs stacked vertically with 80px spacing between them.

#### Scenario: Two inputs are visible

- **WHEN** the page loads
- **THEN** two search input fields are visible
- **AND** the inputs are stacked vertically

### Requirement: First input is expandable and round

The first input SHALL start as a 60×60px circle with a search icon, and expand to full width on focus. A clear button SHALL appear when text is entered.

#### Scenario: First input starts collapsed

- **WHEN** the page loads
- **THEN** the first input is 60px wide with rounded corners (pill shape)

#### Scenario: First input expands on focus

- **WHEN** I click on the first input
- **THEN** the first input expands to the full form width

#### Scenario: Clear button appears on input

- **WHEN** I type "hello" into the first input
- **THEN** the clear button becomes visible

#### Scenario: Clear button removes text

- **GIVEN** I have typed "hello" into the first input
- **WHEN** I click the clear button
- **THEN** the first input becomes empty

#### Scenario: First input collapses on blur

- **GIVEN** the first input is focused
- **WHEN** I click outside the form
- **THEN** the first input collapses back to 60px

### Requirement: Second input is expandable and square

The second input SHALL start as a 60px-wide square with a search icon on the right, and expand to full width on focus.

#### Scenario: Second input starts collapsed

- **WHEN** the page loads
- **THEN** the second input is 60px wide with minimal border radius

#### Scenario: Second input expands on focus

- **WHEN** I click on the second input
- **THEN** the second input expands to the full form width

### Requirement: Form submission

The form SHALL prevent default submission on Enter key.

#### Scenario: Submitting the form does not reload the page

- **WHEN** I type "query" into any input and press Enter
- **THEN** the page does not reload

### Requirement: Accessibility

The form SHALL use semantic HTML with proper labels and ARIA attributes.

#### Scenario: Inputs are accessible

- **WHEN** I inspect the form
- **THEN** each input has a visible label or aria-label
- **AND** the clear button has an accessible label

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
`apps/searchpad/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/searchpad/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Page layout and background — the viewport background color is light blue
- [ ] Two stacked search inputs — two search input fields are visible
- [ ] First input is expandable and round — the first input is 60px wide with rounded corners (pill shape)
- [ ] Second input is expandable and square — the second input is 60px wide with minimal border radius
- [ ] Form submission — the page does not reload
- [ ] Accessibility — each input has a visible label or aria-label
