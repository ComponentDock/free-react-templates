# Template: Travenzo (Search Form Bar)

## Purpose

Recreation of ColorLib "Colorlib Search 15" — a travel/hotel booking search
form widget. Dark card overlay on a scenic background with tabbed search
(Hotels / Car / Flight), destination input, date pickers, traveller dropdown,
checkboxes, and a full-width green CTA button.

Source: https://colorlib.com/wp/template/colorlib-search-15/
Preview (screenshot only — live preview 404): ColorLib Search Form 15

## Design tokens (from screenshot analysis)

- Card background: dark navy/charcoal (#1a2238 approximately), semi-transparent
- Card border-radius: ~12px rounded corners
- Tabs: white text, active tab bolder/underlined
- Input fields: white background, rounded, subtle border
- Labels: small uppercase tracking-wide, muted gray
- Checkboxes: green accent (#28a745)
- Search button: full-width, green (#28a745), white text, rounded
- Background: scenic beach/nature image (use picsum.photos placeholder)
- Font: Inter (Google Fonts)
- Overall: single-page widget, centered on viewport

## Sections

1. **Full-page background** — scenic image (picsum.photos seed: travenzo-bg)
2. **Search Card** — centered, dark card with:
   - Tab bar: Hotels (active), Car, Flight
   - "Going To" input with location pin icon
   - "Check-In" and "Check-Out" date inputs (side by side)
   - "Travellers" dropdown (Adults, Children, Rooms)
   - "Add a flight" checkbox (default checked)
   - "Add a car" checkbox (default unchecked)
   - Full-width green "Search" button
3. **Footer** — simple footer with Component Dock link

## Design tokens

<!-- brand-claim:2026-10-23 -->
| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Brand (measured) | `#00ad5f` | live sheet paints it ×4 — `background` on `.btn-submit`; style.css?v=1d29706e (19,376 B, sha256 7d4bdf645f0b) · <https://colorlib.com/etc/searchf/colorlib-search-15/> |

Measured from the live theme stylesheet: the most-painted colour that paints a surface (background declarations first, then a button/nav/hero selector), never sampled from a screenshot. Alternates in the same sheet: #00994b x1.

## Requirements

### Render

#### Scenario: Render

- **GIVEN** the app loads, Then the document title is "Travenzo — Travel Booking Search"
- **GIVEN** the app loads, Then the "Hotels" tab is visible and active
- **GIVEN** the app loads, Then the "Car" tab is visible
- **GIVEN** the app loads, Then the "Flight" tab is visible
- **GIVEN** the app loads, Then the "Going To" input is present with placeholder "Destination, hotel name"
- **GIVEN** the app loads, Then the "Check-In" date input is present
- **GIVEN** the app loads, Then the "Check-Out" date input is present
- **GIVEN** the app loads, Then the "Travellers" dropdown shows "1 Adult, 0 Children, 1 Room"
- **GIVEN** the app loads, Then the "Add a flight" checkbox is checked
- **GIVEN** the app loads, Then the "Add a car" checkbox is unchecked
- **GIVEN** the app loads, Then the green "Search" button is present

### Interaction

#### Scenario: Interaction

- **WHEN** the user types in the "Going To" field, Then the field updates with the typed text
- **WHEN** the user clicks the "Car" tab, Then it becomes active
- **WHEN** the user clicks the "Flight" tab, Then it becomes active
- **WHEN** the user clicks the "Hotels" tab, Then it becomes active again
- **WHEN** the user toggles the "Add a flight" checkbox, Then its state changes
- **WHEN** the user toggles the "Add a car" checkbox, Then its state changes
- **WHEN** the user submits the form, Then the page does not reload

### Footer

#### Scenario: Footer

- **GIVEN** the app loads, Then the footer shows a link to https://www.componentdock.com/ labeled "Component Dock"
- **GIVEN** the app loads, Then the footer shows a copyright line

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/travenzo/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/travenzo/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Files

- `apps/travenzo/` — new app folder
- `openspec/specs/template-travenzo/spec.md` — this spec

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Render — GIVEN** the app loads, Then the document title is "Travenzo — Travel Booking Search"
- [x] Interaction — WHEN** the user types in the "Going To" field, Then the field updates with the typed text
