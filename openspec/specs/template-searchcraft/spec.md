# Template: Searchcraft (Search Form Bar)

## Purpose

Searchcraft is a single-component SEARCH FORM BAR in the
free-react-templates monorepo. It is a React recreation of the
ColorLib "Search Form Bar 07" free template
(source: https://colorlib.com/wp/template/search-form-bar-07/),
built under a DIFFERENT name (**Searchcraft**), with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a compact horizontal search form bar designed for
real-estate listing sites. It sits on a light gray page background,
with a centered title above a white card containing four form fields
and a prominent pink/magenta CTA button. The preview page is
currently 404 (unreachable); all tokens are extracted from the
ColorLib screenshot at
https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-07.jpg.

**WHAT MAKES SEARCHCRAFT DISTINCT (signature behaviors):**

1. **Horizontal four-field + CTA layout.** The form renders as a
   single horizontal row (flexbox) with four equal-width fields
   (Location text input, Property Type dropdown, Property Status
   dropdown, Price Limit dropdown) followed by a tall pink/magenta
   SEARCH AVAILABILITY button that spans the full height of the
   field row. This is a real-estate search pattern, not a generic
   contact/search form.

2. **Pink/magenta brand color (#E91E63) on labels and CTA.**
   Field labels render in uppercase pink/magenta text above each
   input. The SEARCH AVAILABILITY button has a pink/magenta
   background with white text, creating a strong visual anchor
   on the right side of the form.

3. **Minimal structure — title + form bar only.** The template
   is a pure search bar component: a page title
   ("Search Form/Form #07") followed by the form bar. There are
   NO hero sections, NO navigation, NO footer sections, NO
   images, NO additional content blocks. The design is focused
   entirely on the search form UI.

4. **Mixed input types: text + selects.** The Location field is
   a text input with a magnifying glass icon and placeholder
   "City/Locality Name"; the other three fields are select
   dropdowns with chevron indicators and placeholder/default
   values ("Type" for Property Type and Property Status,
   "$5,000" for Price Limit).

5. **Light gray page background with white card.** The page
   background is a very light gray (#f5f5f5 or similar), and the
   form bar sits in a white card/container with subtle shadow or
   border, creating a clean elevated appearance.

## Design tokens

| Token               | Value                              | Source                                  |
| ------------------- | ---------------------------------- | --------------------------------------- |
| Brand color         | `#E91E63` (Material pink 500)      | Screenshot labels + CTA button          |
| Page background     | `#f5f5f5` (very light gray)        | Screenshot page background              |
| Card background     | `#ffffff` (white)                  | Screenshot form card                    |
| Title text color    | `#333333` (dark gray)              | Screenshot heading                      |
| Label text color    | `#E91E63` (pink/magenta, uppercase)| Screenshot field labels                 |
| Input placeholder   | `#999999` (medium gray)            | Screenshot placeholder text             |
| Input border        | `#e0e0e0` (light gray)             | Screenshot input borders                |
| Input text color    | `#333333` (dark gray)              | Screenshot input value text             |
| CTA button bg       | `#E91E63` (pink/magenta)           | Screenshot SEARCH AVAILABILITY button   |
| CTA button text     | `#ffffff` (white)                   | Screenshot button text                  |
| CTA subtitle text   | `#ffffff` (white, smaller)          | Screenshot "Best Price Guaranteed!"    |
| Font family         | System sans-serif stack             | Screenshot (no distinctive font visible)|
| Button radius       | 0px (sharp corners)                 | Screenshot CTA button                   |
| Card border-radius  | 4px (subtle rounding)               | Screenshot form card                    |

## Requirements

### Requirement: Page shell

The system SHALL render the light gray page with a centered title
and a white card containing the search form bar.

#### Scenario: Light gray page with title

- **GIVEN** the Searchcraft app is rendered on a desktop viewport
- **THEN** the page background SHALL be the light gray `#f5f5f5`
  with no photo, gradient, or pattern
- **AND** a centered heading SHALL display the text
  "Search Form/Form #07" in dark gray (`#333`), large font size,
  medium weight
- **AND** below the heading, a white card SHALL render with subtle
  border-radius (4px) and containing the four-field search form

### Requirement: Form fields layout

The form SHALL render four fields in a horizontal row with equal
width, followed by the CTA button.

#### Scenario: Four-field horizontal layout

- **GIVEN** the Searchcraft form is rendered on a desktop viewport
- **THEN** four form fields SHALL render in a horizontal flex row
  with equal width:
  1. Location (text input)
  2. Property Type (select dropdown)
  3. Property Status (select dropdown)
  4. Price Limit (select dropdown)
- **AND** the SEARCH AVAILABILITY button SHALL render to the right
  of the four fields, spanning the full height of the field row
- **AND** no other fields, links, or navigation SHALL exist

#### Scenario: Responsive stacking

- **GIVEN** a viewport at or below 768px
- **THEN** the four fields and the CTA button SHALL stack
  vertically, each taking full width
- **AND** the CTA button SHALL remain full width below the fields

### Requirement: Location text input

The Location field SHALL be a text input with a search icon and
appropriate placeholder.

#### Scenario: Location field rendering

- **GIVEN** the Location field is rendered
- **THEN** it SHALL display the label "LOCATION" in uppercase
  pink/magenta (`#E91E63`) text above the input
- **AND** the input SHALL show the placeholder "City/Locality Name"
  in gray (`#999`)
- **AND** a magnifying glass icon SHALL appear at the right end of
  the input (inside the input area)
- **AND** the input SHALL have a light gray (`#e0e0e0`) border and
  white background

### Requirement: Select dropdown fields

The Property Type, Property Status, and Price Limit fields SHALL
render as select dropdowns with appropriate options.

#### Scenario: Property Type dropdown

- **GIVEN** the Property Type field is rendered
- **THEN** it SHALL display the label "PROPERTY TYPE" in uppercase
  pink/magenta (`#E91E63`) text above the select
- **AND** the select SHALL show the placeholder "Type" in gray
- **AND** a chevron-down icon SHALL appear at the right end of the
  select
- **AND** options SHALL include typical property types
  (e.g. "Apartment", "House", "Villa", "Office")

#### Scenario: Property Status dropdown

- **GIVEN** the Property Status field is rendered
- **THEN** it SHALL display the label "PROPERTY STATUS" in uppercase
  pink/magenta (`#E91E63`) text above the select
- **AND** the select SHALL show the placeholder "Type" in gray
- **AND** a chevron-down icon SHALL appear at the right end
- **AND** options SHALL include typical statuses
  (e.g. "For Sale", "For Rent", "Sold")

#### Scenario: Price Limit dropdown

- **GIVEN** the Price Limit field is rendered
- **THEN** it SHALL display the label "PRICE LIMIT" in uppercase
  pink/magenta (`#E91E63`) text above the select
- **AND** the select SHALL show the default "$5,000" value
- **AND** a chevron-down icon SHALL appear at the right end
- **AND** options SHALL include price tiers
  (e.g. "$1,000", "$5,000", "$10,000", "$50,000", "$100,000+")

### Requirement: Search Availability CTA button

The CTA button SHALL be a prominent pink/magenta button with two
lines of text.

#### Scenario: CTA button rendering

- **GIVEN** the SEARCH AVAILABILITY button is rendered
- **THEN** it SHALL have a pink/magenta (`#E91E63`) background with
  no border-radius (sharp corners)
- **AND** the primary text "SEARCH AVAILABILITY" SHALL render in
  white, bold, uppercase
- **AND** the secondary text "Best Price Guaranteed!" SHALL render
  below in white, smaller font size
- **AND** the button SHALL span the full height of the adjacent
  form fields
- **WHEN** the user hovers the button
- **THEN** the background SHALL darken slightly (e.g. `#C2185B`
  pink 700 or a 10% opacity overlay)

### Requirement: Form interaction

The form SHALL support basic search form interactions.

#### Scenario: Text input typing

- **GIVEN** the Location input is focused
- **WHEN** the user types a location name
- **THEN** the typed text SHALL appear in the input field
- **AND** the placeholder SHALL disappear while typing

#### Scenario: Select dropdown interaction

- **GIVEN** a select dropdown field is rendered
- **WHEN** the user clicks the dropdown
- **THEN** the available options SHALL appear
- **WHEN** the user selects an option
- **THEN** the selected value SHALL display in the dropdown

### Requirement: Semantics and accessibility

#### Scenario: Semantic structure

- **GIVEN** the Searchcraft app is rendered
- **THEN** the form SHALL use `<form>` element
- **AND** each input/select SHALL have an associated `<label>` via
  `htmlFor` attribute
- **AND** the CTA button SHALL be a `<button type="submit">`
- **AND** the page heading SHALL use an `<h1>` element

#### Scenario: Component Dock credit

- **GIVEN** the Searchcraft app footer is rendered
- **THEN** a link to `https://www.componentdock.com/` SHALL appear
  with the text "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- searchcraft` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the ColorLib screenshot: light gray `#f5f5f5` page,
      centered "Search Form/Form #07" title, white form card with four
      horizontal fields (Location text + 3 selects), pink/magenta CTA
      button with "SEARCH AVAILABILITY" / "Best Price Guaranteed!".
- [ ] Behavior check: Location input accepts typing with search icon,
      dropdowns open and select values, CTA button has hover darkening,
      responsive stacking at 768px.
- [ ] No ColorLib references in any app file; footer links
      https://www.componentdock.com/.
- [ ] Icon exports probed with
      `node -e "console.log(typeof require('lucide-react').X)"`
      for every mapped icon before use (Search, ChevronDown).

## Icon mapping (source → lucide)

| Source glyph        | Recreation            |
| ------------------- | --------------------- |
| Magnifying glass    | lucide `Search`       |
| Dropdown chevron    | lucide `ChevronDown`  |

No brand icons needed. No photos needed — no picsum placeholders
(this is a pure search form component).
