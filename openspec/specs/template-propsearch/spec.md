# Template: PropSearch (Real Estate Search Form)

## Purpose

A real estate property search form with four filter fields (Location, Property Type, Property Status, Price Limit) and a branded search button. Recreation of ColorLib "Search Form Bar 07".

- **Source:** https://colorlib.com/wp/template/search-form-bar-07/
- **Preview:** https://preview.colorlib.com/theme/search-form-bar-07/ (404 — spec based on downloaded source + screenshot)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-07.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/bootstrap/search-form-bar-07/ (HTTP 200, 7,077 B, fetched 2026-10-23) and its theme stylesheet `theme/bootstrap/search-form-bar-07/css/style.css` (16,099 B, sha256 `1709aed14388…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#007bff` | 5 declarations — `.cl-btn-primary`, `.cl-btn-primary.disabled` |
| Other chromatic values | `#ff62a5`, `#0062cc` | `#ff62a5` × 4 (a); `#0062cc` × 2 (.cl-btn-primary:hover) |
| Surface | `#ffffff` | 14 declarations — `body`, `.cl-form-control` |
| Ink / dark surface | `#000000` | 4 declarations — `.heading-section`, `h2` |
| Typeface | `"Poppins", sans-serif` (3 rules — body)<br>`-apple-system, sans-serif` (1 rule — body) | `font-family` declarations in the theme sheet |
| Radii | `0.25rem`, `2px` | `0.25rem` (.cl-form-control); `2px` (.cl-form-control) |

Palette in order of use: `#ffffff` ×14, `#007bff` ×5, `#000000` ×4, `#6c757d` ×4, `#ff62a5` ×4, `#212529` ×3.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Page Structure

The template SHALL render a single centered section with a heading and a booking form.

#### Scenario: Page renders heading

- **WHEN** the page loads
- **THEN** a heading "PropSearch" is visible

#### Scenario: Document title is set

- **WHEN** the page loads
- **THEN** the document title is "PropSearch — Property Search Form"

### Requirement: Location Input

The form SHALL include a text input for location with a search icon.

#### Scenario: Location field renders

- **WHEN** the page loads
- **THEN** a text input labeled "Location" is present with placeholder "City/Locality Name"

#### Scenario: User types location

- **WHEN** the user types "New York" in the location field
- **THEN** the input value is "New York"

### Requirement: Property Type Dropdown

The form SHALL include a select dropdown for property type.

#### Scenario: Property type options

- **WHEN** the page loads
- **THEN** the Property Type dropdown contains options: Type, Commercial, - Office, Residential, Villa, Condominium, Apartment

#### Scenario: User selects property type

- **WHEN** the user selects "Apartment" from Property Type
- **THEN** the select value is "apartment"

### Requirement: Property Status Dropdown

The form SHALL include a select dropdown for property status.

#### Scenario: Property status options

- **WHEN** the page loads
- **THEN** the Property Status dropdown contains options: Type, Rent, Sale

#### Scenario: User selects status

- **WHEN** the user selects "Sale" from Property Status
- **THEN** the select value is "sale"

### Requirement: Price Limit Dropdown

The form SHALL include a select dropdown for price limit with values from $5,000 to $2,000,000.

#### Scenario: Price limit options

- **WHEN** the page loads
- **THEN** the Price Limit dropdown contains options from $5,000 to $2,000,000

#### Scenario: User selects price

- **WHEN** the user selects "$500,000" from Price Limit
- **THEN** the select value is "500000"

### Requirement: Search Button

The form SHALL include a search button with brand color styling.

#### Scenario: Search button renders

- **WHEN** the page loads
- **THEN** a button labeled "Search Availability" with subtitle "Best Price Guaranteed!" is visible

#### Scenario: Button has brand color

- **WHEN** the page loads
- **THEN** the search button has the brand pink background color

### Requirement: Form Submission

The form SHALL call an onSearch callback with form data when submitted.

#### Scenario: Submit with data

- **WHEN** the user fills Location "Miami", Property Type "villa", Property Status "sale", Price Limit "$1,000,000" and clicks Search
- **THEN** onSearch is called with { location: "Miami", propertyType: "villa", propertyStatus: "sale", priceLimit: "1000000" }

#### Scenario: Submit empty form

- **WHEN** the user clicks Search without filling any fields
- **THEN** onSearch is called with { location: "", propertyType: "", propertyStatus: "", priceLimit: "" }

### Requirement: Footer

The template SHALL render a footer linking to componentdock.com.

#### Scenario: Footer link

- **WHEN** the page loads
- **THEN** a link to "https://www.componentdock.com/" labeled "Component Dock" is present in the footer

### Requirement: Accessibility

All form fields SHALL have associated labels and the form SHALL have an accessible name.

#### Scenario: Form accessible name

- **WHEN** the page loads
- **THEN** the form has aria-label "Property search form"

#### Scenario: Labels associated

- **WHEN** the page loads
- **THEN** all form fields (Location, Property Type, Property Status, Price Limit) have associated labels

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/propsearch/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/propsearch/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Page Structure — a heading "PropSearch" is visible
- [x] Location Input — a text input labeled "Location" is present with placeholder "City/Locality Name"
- [ ] Property Type Dropdown — the Property Type dropdown contains options: Type, Commercial, - Office, Residential, Villa, Condominium, Apartment
- [ ] Property Status Dropdown — the Property Status dropdown contains options: Type, Rent, Sale
- [ ] Price Limit Dropdown — the Price Limit dropdown contains options from $5,000 to $2,000,000
- [x] Search Button — a button labeled "Search Availability" with subtitle "Best Price Guaranteed!" is visible
- [ ] Form Submission — onSearch is called with { location: "Miami", propertyType: "villa", propertyStatus: "sale", priceLimit: "1000000" }
- [x] Accessibility — the form has aria-label "Property search form"
