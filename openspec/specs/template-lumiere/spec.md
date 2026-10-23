# Template: Lumiere (Photography Portfolio)

Recreation of ColorLib **Mostudio** (https://colorlib.com/wp/template/mostudio/).

## Purpose

A free photography portfolio template with sidebar navigation, featuring an alternating zigzag layout of portfolio items (image + text) and a dark sidebar with newsletter subscription.

## Design Tokens

| Token           | Value                        |
| --------------- | ---------------------------- |
| Brand accent    | `#F96D00` (vibrant orange)   |
| Sidebar bg      | `#000000` (black)            |
| Body font       | Poppins (Google Fonts)       |
| Display font    | Abril Fatface (Google Fonts) |
| Body text color | `#212529`                    |
| Muted text      | `#6c757d`                    |
| White           | `#ffffff`                    |

## Preview URL

https://preview.colorlib.com/theme/mostudio/

## Requirements

### REQ-1: Sidebar Navigation

The sidebar must be a fixed left panel with the brand name, navigation links, newsletter form, and Component Dock attribution.

#### Scenario: Sidebar renders brand and navigation

- GIVEN the page loads
- WHEN the sidebar is visible
- THEN it shows the brand name "Lumiere"
- AND it shows navigation links: Home, Gallery, About, Pricing, Contact

#### Scenario: Sidebar newsletter form

- GIVEN the sidebar newsletter section
- WHEN the user types an email and clicks subscribe
- THEN the form prevents default submission

#### Scenario: Sidebar Component Dock attribution

- GIVEN the sidebar footer
- WHEN the page loads
- THEN it shows a link to https://www.componentdock.com/ branded as "Component Dock"

### REQ-2: Portfolio Grid

The main content area must display 9 portfolio items in an alternating left-right zigzag layout.

#### Scenario: Portfolio items render

- GIVEN the page loads
- WHEN the portfolio grid is visible
- THEN it shows 9 portfolio items each with an image, category, title, description, and "View Portfolio" button

#### Scenario: Alternating layout

- GIVEN the portfolio grid
- WHEN items are rendered
- THEN odd items show image on the left and text on the right
- AND even items show text on the left and image on the right

#### Scenario: Load more button

- GIVEN the portfolio grid
- WHEN the "Load more" button is visible
- THEN it has an accessible label and icon

### REQ-3: Footer

The footer must include Component Dock branding.

#### Scenario: Footer renders Component Dock link

- GIVEN the page footer
- WHEN the page loads
- THEN it shows a link to https://www.componentdock.com/ branded as "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/lumiere/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/lumiere/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] REQ-2: Portfolio Grid — THEN it shows 9 portfolio items each with an image, category, title, description, and "View Portfolio" button
