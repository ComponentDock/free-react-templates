# Template: Stayquest (Hotel Search Form)

Recreation of ColorLib "Colorlib Search 2" (https://colorlib.com/wp/template/colorlib-search-2/).

## Purpose

A full-screen hotel search form hero template with a background image, dark overlay, centered heading, and a multi-field search bar (location, dates, guests) with a branded search button.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://colorlib.com/etc/searchf/colorlib-search-2/ (HTTP 200, 3,195 B, fetched 2026-10-23) and its theme stylesheet `etc/searchf/colorlib-search-2/css/style.css` (12,731 B, sha256 `bd14236ff675…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#af7d51` | 1 declarations — `.s002 form .inner-form .input-field.fifth-wrap .btn-search:hover` |
| Surface | `#ffffff` | 4 declarations — `.s002 form legend`, `.s002 form .inner-form .input-field input` |
| Ink / dark surface | `#333333` | 2 declarations — `.choices[data-type*="select-one"]:after`, `.choices[data-type*="select-one"].is-open:after` |
| Typeface | `'Poppins', sans-serif` (3 rules — .s002)<br>`Poppins, sans-serif` (1 rule — .cl-sel-0) | `font-family` declarations in the theme sheet |
| Radii | `.5px`, `2.5px`, `2.5px 2.5px 0 0` | `.5px` (.s002 form .inner-form .input-field.fifth-wrap .btn-search); `2.5px` (.choices__inner); `2.5px 2.5px 0 0` (.is-open .choices__inner) |

Palette in order of use: `#ffffff` ×4, `#9a9a9a` ×3, `#333333` ×2, `#555555` ×2, `#666666` ×1, `#af7d51` ×1.

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

The template SHALL display a prominent heading "Search Hotel" in the hero section.

#### Scenario: Heading is visible

- **WHEN** the page loads
- **THEN** a heading with text "Search Hotel" is displayed
- **AND** the heading is white and centered

### Requirement: Search form bar with fields

The template SHALL provide a search form bar containing a location text input, check-in date input, check-out date input, guest count dropdown, and a search button.

#### Scenario: Search form renders all fields

- **WHEN** the page loads
- **THEN** a text input with placeholder "What are you looking for?" is present
- **AND** a check-in date input is present
- **AND** a check-out date input is present
- **AND** a guest count dropdown is present with options 1-4 adults

#### Scenario: User can type in search input

- **WHEN** the user types "Beach Resort" in the search input
- **THEN** the input value updates to "Beach Resort"

#### Scenario: User can change guest count

- **WHEN** the user selects "3" from the guest dropdown
- **THEN** the dropdown value updates to "3"

#### Scenario: User can set dates

- **WHEN** the user enters a check-in date
- **THEN** the date value updates
- **WHEN** the user enters a check-out date
- **THEN** the date value updates

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
`apps/stayquest/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/stayquest/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Hero section with background image — a full-screen hero section is visible
- [x] Search heading — a heading with text "Search Hotel" is displayed
- [x] Search form bar with fields — a text input with placeholder "What are you looking for?" is present
