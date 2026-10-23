# Template: Spotly (Travel Services Search Form)

Recreation of ColorLib Search 16 (https://colorlib.com/wp/template/colorlib-search-16/)

## Purpose

A modern, responsive travel services search form template with a full-page hero and centered search card containing fields for destination, travel dates, and guests. Clean, minimal design with a warm amber color palette.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://colorlib.com/etc/searchf/colorlib-search-16/ (HTTP 200, 16,956 B, fetched 2026-10-23) and its theme stylesheet `etc/searchf/colorlib-search-16/css/style.css` (20,163 B, sha256 `6e06eb24b548…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#00ad5f` | 3 declarations — `.btn-submit`, `#btn-add-room` |
| Other chromatic values | `#fa4251` | `#fa4251` × 2 (.tab-list) |
| Surface | `#ffffff` | 9 declarations — `.btn-submit`, `.input-icon` |
| Typeface | `Lato, sans-serif` (4 rules — .cl-sel-0)<br>`"Lato", sans-serif` (1 rule — body) | `font-family` declarations in the theme sheet |
| Radii | `10px`, `3px`, `4px` | `10px` (.dropdown-select); `3px` (.checkmark); `4px` (.select2-container--default .select2-selection--single) |

Palette in order of use: `#ffffff` ×9, `#555555` ×8, `#cccccc` ×4, `#00ad5f` ×3, `#808080` ×2, `#999999` ×2.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Search Form Functionality

The search form SHALL display destination input, check-in date, check-out date, guests counter, and search button.

#### Scenario: Default state

- **WHEN** the page loads
- **THEN** the destination input shows placeholder "City, country, or region"
- **AND** the check-in and check-out date inputs are empty
- **AND** the guests field shows "2 Guests"

#### Scenario: Guest increment

- **WHEN** the user clicks the "+" button
- **THEN** the guest count increases by 1

#### Scenario: Guest decrement

- **WHEN** the user clicks the "−" button
- **THEN** the guest count decreases by 1

#### Scenario: Guest minimum

- **WHEN** the guest count is 1 and the user clicks "−"
- **THEN** the guest count remains at 1

#### Scenario: Form submission

- **WHEN** the user submits the form
- **THEN** the page does not reload

### Requirement: Navigation

The navbar SHALL display a logo, navigation links, and a CTA button.

#### Scenario: Navigation links

- **WHEN** the page loads
- **THEN** the navbar shows "Destinations", "Deals", and "About" links
- **AND** a "Book Now" button is visible

### Requirement: Footer

The footer SHALL display copyright text and a Component Dock link.

#### Scenario: Component Dock link

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/ labeled "Component Dock"

#### Scenario: Copyright

- **WHEN** the page loads
- **THEN** the footer shows copyright text including "Spotly"

### Requirement: Document Title

The page SHALL set the document title on mount.

#### Scenario: Title set

- **WHEN** the page loads
- **THEN** the document title is "Spotly — Travel Services Search"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/spotly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/spotly/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Search Form Functionality — the destination input shows placeholder "City, country, or region"
- [x] Navigation — the navbar shows "Destinations", "Deals", and "About" links
- [x] Document Title — the document title is "Spotly — Travel Services Search"
