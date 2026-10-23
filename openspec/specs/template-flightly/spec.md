# Template: Flightly (Flight Search Form)

Recreation of ColorLib "Colorlib Search 20" (https://colorlib.com/wp/template/colorlib-search-20/).

## Purpose

A full-screen flight search form hero template with a background image, dark overlay, centered heading, and a white card containing a multi-field search form (from, to, dates, passengers) with a branded search button.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://colorlib.com/etc/searchf/colorlib-search-20/ (HTTP 200, 6,007 B, fetched 2026-10-23) and its theme stylesheet `etc/searchf/colorlib-search-20/css/style.css` (13,170 B, sha256 `dda486d80ed1…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#6c7ae0` | 3 declarations — `#btn-add-room`, `.plus:hover` |
| Surface | `#ffffff` | 6 declarations — `.btn-submit`, `.label` |
| Typeface | `"Poppins", sans-serif` (2 rules — body)<br>`"Lato", sans-serif` (1 rule — .dropdown-select) | `font-family` declarations in the theme sheet |
| Radii | `10px`, `50%` | `10px` (.btn-submit); `50%` (.minus) |

Palette in order of use: `#cccccc` ×7, `#ffffff` ×6, `#6c7ae0` ×3, `#555555` ×2, `#666666` ×2, `#808080` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Hero section with background image

The template SHALL display a full-viewport hero section with a background image and a semi-transparent dark overlay.

#### Scenario: Hero renders on page load

- **WHEN** the page loads
- **THEN** a full-screen hero section is visible
- **AND** a background image is displayed covering the full viewport

### Requirement: Search heading

The template SHALL display a prominent heading "Search Flights" in the hero section.

#### Scenario: Heading is visible

- **WHEN** the page loads
- **THEN** a heading with text "Search Flights" is displayed
- **AND** the heading is white and centered

### Requirement: Search form card

The template SHALL provide a white card with rounded corners containing the flight search form.

#### Scenario: Card renders with correct styling

- **WHEN** the page loads
- **THEN** a white card is visible with border-radius of 10px
- **AND** the card is centered on the page

### Requirement: Flight search form fields

The template SHALL provide a search form containing From text input, To text input, Depart date input, Return date input, Passengers dropdown, and a Search button.

#### Scenario: Search form renders all fields

- **WHEN** the page loads
- **THEN** a text input with placeholder "City, Region or Airport" is present for From
- **AND** a text input with placeholder "City, Region or Airport" is present for To
- **AND** a Depart date input is present
- **AND** a Return date input is present
- **AND** a Passengers control is present

#### Scenario: User can type in From input

- **WHEN** the user types "New York" in the From input
- **THEN** the input value updates to "New York"

#### Scenario: User can type in To input

- **WHEN** the user types "London" in the To input
- **THEN** the input value updates to "London"

#### Scenario: User can set departure date

- **WHEN** the user enters a departure date
- **THEN** the date value updates

#### Scenario: User can set return date

- **WHEN** the user enters a return date
- **THEN** the date value updates

#### Scenario: Passengers controls

- **WHEN** the page loads
- **THEN** the passengers section shows "1 Adult, 0 Children"
- **WHEN** the user clicks the plus button for adults
- **THEN** the adult count increases to 2
- **WHEN** the user clicks the minus button for adults
- **THEN** the adult count decreases back to 1

#### Scenario: Form submission is handled

- **WHEN** the user clicks the Search button
- **THEN** the form submission is prevented (no page reload)

### Requirement: Footer with Component Dock link

The template SHALL display a footer with a link to componentdock.com branded as "Component Dock".

#### Scenario: Footer renders with link

- **WHEN** the page loads
- **THEN** a footer is visible
- **AND** the footer contains a link to https://www.componentdock.com/
- **AND** the link text mentions "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/flightly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/flightly/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Hero section with background image — a full-screen hero section is visible
- [x] Search heading — a heading with text "Search Flights" is displayed
- [ ] Search form card — a white card is visible with border-radius of 10px
- [x] Flight search form fields — a text input with placeholder "City, Region or Airport" is present for From
