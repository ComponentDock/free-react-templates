# Template: Jobpulse (Job Search Form Bar)

## Purpose

A full-viewport job search form template with a solid blue background, centered heading, and a horizontal search bar containing keyword input, location input, budget dropdown, and a search button. Recreates the ColorLib "Search Form Bar 08" design.

## Source

- **Source slug:** `search-form-bar-08`
- Preview URL: `https://preview.colorlib.com/theme/bootstrap/search-form-bar-08/` — **HTTP 200**,
  4,963 B (the slug-only `preview.colorlib.com/theme/search-form-bar-08/` answers **404**; the
  `search-form-bar-*` family lives under the `/theme/bootstrap/` prefix). The live DOM is the
  reference, not the screenshot: 1 anchor (the dead `#` CTA), one `<form>`, 2 inputs + 1 `<select>`.
- Sheet: `css/style.css?v=1b7b7dc0` — 15,416 B, sha256 `84ad4e04c002…`, identical to the copy
  inside `downloads/free/search-form-bar-08.zip` (256,693 B) ⇒ live preview verified, the
  archive is its un-versioned twin.
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-08.jpg`

## Design Tokens (from screenshot)

- **Background**: Solid blue **`#1089ff`** covering the full viewport (`body { background: #1089ff }`,
  9 sheet literals). The screenshot's bed pixel-samples `#3d89f7` — a marketing re-render; when a
  `body` rule exists the sheet wins. The app ships `#4a90d9` (see `## App deltas (as shipped)`).
- **Font**: Poppins (Google Fonts)
- **Heading**: White, large, centered
- **Input fields**: White background, light gray border, rounded corners, search icon
- **Budget dropdown**: White 40px field with a blue chevron; **five** options —
  `$100 - $200`, `$200 - $300`, `$300 - $400`, `$400 - $500`, `$500 - $600`
- **Search button**: Black `#000`, 40px tall, 4px corners, uppercase 500, white text — `.booking-form .cl-btn-primary` overrides the bundled Bootstrap `#007bff` base rule
- **Footer**: White text on blue, links to Component Dock
- **Surface (measured):** `#1089ff` — paints it ×9 — `background` on `body`; style.css?v=1b7b7dc0 (15,416 B, sha256 84ad4e04c002) · <https://preview.colorlib.com/theme/bootstrap/search-form-bar-08/>

## Requirements

### Feature: Jobpulse template behaviour

#### Scenario: Jobpulse

1. **Full-viewport blue background** — The template SHALL render a solid blue background covering the entire viewport.
2. **Centered heading** — The template SHALL display "Find For A Jobs" in large white text, centered.
3. **Search form** — The template SHALL provide a horizontal search form with keyword input, location input, budget dropdown, and search button.
4. **Keyword input** — The search form SHALL include a text input for job keywords with placeholder "Keywords (e.g Job Title, Position...)" and a search icon.
5. **Location input** — The search form SHALL include a text input for location with placeholder "Location (City, Country...)" and a search icon.
6. **Budget dropdown** — The search form SHALL include a dropdown select for budget range with the reference's five options, `$100 - $200` through `$500 - $600`.
7. **Search button** — The search form SHALL include a "Search Job" submit button styled with black background and white text.
8. **Form submission** — The search form SHALL call an onSearch callback with keywords, location, and budget values on submit.
9. **Responsive layout** — The search form SHALL stack vertically on small screens and display horizontally on larger screens.
10. **Footer** — The template SHALL include a footer linking to https://www.componentdock.com/ branded as "Component Dock".
11. **Accessibility** — The search form SHALL use semantic HTML with proper labels and ARIA attributes.

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/jobpulse/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/jobpulse/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Scenarios

### Scenario: Renders search form with all fields

- Given the template is rendered
- Then a search form is visible
- And a keyword input field is present
- And a location input field is present
- And a budget dropdown is present
- And a "Search Job" button is present

### Scenario: User can type in keyword field

- Given the template is rendered
- When the user types "developer" in the keyword field
- Then the keyword field contains "developer"

### Scenario: User can type in location field

- Given the template is rendered
- When the user types "New York" in the location field
- Then the location field contains "New York"

### Scenario: User can select budget option

- Given the template is rendered
- When the user selects "Budget: $400 - $600" from the budget dropdown
- Then the budget dropdown shows "Budget: $400 - $600"

### Scenario: Form submission triggers callback

- Given the template is rendered with an onSearch callback
- When the user fills in keywords "designer", location "London", budget "Budget: $600 - $800"
- And clicks "Search Job"
- Then onSearch is called with { keywords: "designer", location: "London", budget: "Budget: $600 - $800" }

### Scenario: Form submits with empty fields

- Given the template is rendered with an onSearch callback
- When the user clicks "Search Job" without entering any values
- Then onSearch is called with empty keywords, empty location, and default budget

### Scenario: Footer links to Component Dock

- Given the template is rendered
- Then a "Component Dock" link is visible in the footer
- And the link points to https://www.componentdock.com/
- And the link opens in a new tab

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Jobpulse template behaviour — 1. **Full-viewport blue background** — The template render a solid blue background covering the entire viewport
