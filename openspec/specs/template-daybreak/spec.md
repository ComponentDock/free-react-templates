# Template: Daybreak (Portfolio)

Recreation of ColorLib "Sun" (https://colorlib.com/wp/template/sun/)

## Purpose

Daybreak is a clean, minimalist portfolio template featuring a filterable grid layout, two-column content sections, and a responsive navigation bar. It recreates the ColorLib "Sun" design with a modern React + Tailwind CSS implementation.

## Requirements

### Requirement: Navbar with navigation and search toggle

The template SHALL render a header with a logo, navigation links (Home, About, Portfolio, Blog, Contact), and a search toggle button.

#### Scenario: Renders logo and navigation links

- **WHEN** the page loads
- **THEN** a banner landmark is present
- **AND** a navigation landmark labeled "Main navigation" is present
- **AND** links for Home, About, Portfolio, Blog, and Contact are visible

#### Scenario: Search toggle opens and closes search input

- **WHEN** the user clicks the search button
- **THEN** a search input field appears
- **AND** the button label changes to "Close search"
- **WHEN** the user clicks the close button
- **THEN** the search input disappears

### Requirement: Portfolio filter bar

The template SHALL render filter buttons for portfolio categories: All, Post, Image, Video, Extern.

#### Scenario: All button is active by default

- **WHEN** the page loads
- **THEN** the "All" filter button has aria-pressed="true"
- **AND** other filter buttons have aria-pressed="false"

#### Scenario: Clicking a filter changes active state

- **WHEN** the user clicks the "Image" filter button
- **THEN** "Image" has aria-pressed="true"
- **AND** "All" has aria-pressed="false"

### Requirement: Portfolio grid with filterable items

The template SHALL render a 3-column grid of 6 portfolio items, each with an image and overlay label.

#### Scenario: Renders all items by default

- **WHEN** the filter is set to "All"
- **THEN** 6 portfolio items are visible
- **AND** labels CLOCK, BAG, FISH, BOTTLE, PAPER, BLUE ICE are displayed

#### Scenario: Filters items by category

- **WHEN** the active filter is "Image"
- **THEN** only 1 portfolio item is visible (BAG)

### Requirement: Two-column content split

The template SHALL render two equal columns: left "The Story" and right "Dreamers" with a CTA button.

#### Scenario: Both content sections render

- **WHEN** the page loads
- **THEN** a heading "The Story" is present
- **AND** a heading "Dreamers" is present
- **AND** a "More…" link pointing to #portfolio is present

### Requirement: Footer with Component Dock link

The template SHALL render a footer with copyright, logo, social links, and a Component Dock attribution.

#### Scenario: Footer elements render correctly

- **WHEN** the page loads
- **THEN** a contentinfo landmark is present
- **AND** copyright text includes the current year
- **AND** social links for Twitter, LinkedIn, Dribbble, and Instagram are present
- **AND** a link to https://www.componentdock.com/ labeled "Component Dock" is present

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/daybreak/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/daybreak/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
