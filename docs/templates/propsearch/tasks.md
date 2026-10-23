# Propsearch — Implementation Tasks

Source design: **Search Form Bar 07** (`https://colorlib.com/wp/template/search-form-bar-07/`) → recreation name **propsearch**. Shipped at https://propsearch.free.componentdock.com.

Scope: A real estate property search form with four filter fields (Location, Property Type, Property Status, Price Limit) and a branded search button. Recreation of ColorLib **Search Form Bar 07**.

## Component breakdown

Render order as composed in `apps/propsearch/src/App.tsx`:

### 1. BookingForm
- No dedicated spec block — hold this band to the design notes.
- Anchors: Property search form · Location · Property Type · Property Status · Price Limit · Search Availability

### 2. Footer
- The template SHALL render a footer linking to componentdock.com.
- Scenario — Footer link:
  - **WHEN** the page loads
  - **THEN** a link to "https://www.componentdock.com/" labeled "Component Dock" is present in the footer

### Cross-cutting requirements

- **Page Structure** — The template SHALL render a single centered section with a heading and a booking form.
  - Scenario — Page renders heading: **WHEN** the page loads; **THEN** a heading "PropSearch" is visible
  - Scenario — Document title is set: **WHEN** the page loads; **THEN** the document title is "PropSearch — Property Search Form"
- **Location Input** — The form SHALL include a text input for location with a search icon.
  - Scenario — Location field renders: **WHEN** the page loads; **THEN** a text input labeled "Location" is present with placeholder "City/Locality Name"
  - Scenario — User types location: **WHEN** the user types "New York" in the location field; **THEN** the input value is "New York"
- **Property Type Dropdown** — The form SHALL include a select dropdown for property type.
  - Scenario — Property type options: **WHEN** the page loads; **THEN** the Property Type dropdown contains options: Type, Commercial, - Office, Residential, Villa, Condominium, Apartment
  - Scenario — User selects property type: **WHEN** the user selects "Apartment" from Property Type; **THEN** the select value is "apartment"
- **Property Status Dropdown** — The form SHALL include a select dropdown for property status.
  - Scenario — Property status options: **WHEN** the page loads; **THEN** the Property Status dropdown contains options: Type, Rent, Sale
  - Scenario — User selects status: **WHEN** the user selects "Sale" from Property Status; **THEN** the select value is "sale"
- **Price Limit Dropdown** — The form SHALL include a select dropdown for price limit with values from $5,000 to $2,000,000.
  - Scenario — Price limit options: **WHEN** the page loads; **THEN** the Price Limit dropdown contains options from $5,000 to $2,000,000
  - Scenario — User selects price: **WHEN** the user selects "$500,000" from Price Limit; **THEN** the select value is "500000"
- **Search Button** — The form SHALL include a search button with brand color styling.
  - Scenario — Search button renders: **WHEN** the page loads; **THEN** a button labeled "Search Availability" with subtitle "Best Price Guaranteed!" is visible
  - Scenario — Button has brand color: **WHEN** the page loads; **THEN** the search button has the brand pink background color
- **Form Submission** — The form SHALL call an onSearch callback with form data when submitted.
  - Scenario — Submit with data: **WHEN** the user fills Location "Miami", Property Type "villa", Property Status "sale", Price Limit "$1,000,000" and clicks Search; **THEN** onSearch is called with { location: "Miami", propertyType: "villa", propertyStatus: "sale", priceLimit: "1000000" }
  - Scenario — Submit empty form: **WHEN** the user clicks Search without filling any fields; **THEN** onSearch is called with { location: "", propertyType: "", propertyStatus: "", priceLimit: "" }
- **Accessibility** — All form fields SHALL have associated labels and the form SHALL have an accessible name.
  - Scenario — Form accessible name: **WHEN** the page loads; **THEN** the form has aria-label "Property search form"
  - Scenario — Labels associated: **WHEN** the page loads; **THEN** all form fields (Location, Property Type, Property Status, Price Limit) have associated labels
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/propsearch/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/propsearch/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/propsearch` ships on https://propsearch.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/propsearch/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/propsearch/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/propsearch/public/CNAME` = `propsearch.free.componentdock.com`
  and the package `homepage` = `https://propsearch.free.componentdock.com`.
