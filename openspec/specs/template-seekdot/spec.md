# Template: SeekDot (Search Form Bar)

Recreation of ColorLib "Search Form/Bar V03" (https://colorlib.com/wp/template/search-form-bar-03/).

## Purpose

Recreate the ColorLib "Search Form Bar 03" design as a React 19 + Tailwind CSS 4 component. The template features a minimal search form with a distinctive coral circular search icon button, white rounded search bar with shadow, centered on a light gray background.

## Design reference (replication findings)

- **Source:** ColorLib "Search Form/Bar V03" — https://colorlib.com/wp/template/search-form-bar-03/
- **Source slug:** `search-form-bar-03`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/bootstrap/search-form-bar-03/ — **HTTP 200**, 1,947 B, fetched 2026-10-23 (page `<title>`: "Search Form/Bar 03"). The slug-only path `https://preview.colorlib.com/theme/search-form-bar-03/` answers **404**; the live demo is the catalog alias above, recorded so the next prep does not repeat the probe.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/bootstrap/search-form-bar-03/css/style.css?v=6cabd44c`, fetched 2026-10-23): brand `#80bdff`, `#ff5858`; dominant neutrals `#6c757d`, `#495057`, `#212529`; type Roboto, Poppins, Segoe UI. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-03.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/seekdot` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: Page shell

The app SHALL render a full-viewport centered layout with light gray background (#f5f5f5) using Poppins font.

#### Scenario: Renders the page structure

- **WHEN** the app loads
- **THEN** a main container with class `bg-seekdot-bg` is rendered
- **AND** the heading "SeekDot" is displayed at the top center
- **AND** the document title is set to "SeekDot — Search Form"

### Requirement: Search bar

The app SHALL render a search form with a coral circular icon button and white rounded input with drop shadow.

#### Scenario: Default search form

- **WHEN** the app loads
- **THEN** a form with aria-label "Search form" is present
- **AND** a search input with placeholder "Search..." is visible
- **AND** a search icon button with aria-label "Search" is visible

#### Scenario: Coral circular icon button

- **WHEN** the app loads
- **THEN** the search icon button has a coral background (#e86c5e)
- **AND** the button is circular (rounded-full, 50x50px)
- **AND** the icon inside is white

#### Scenario: User types in search input

- **WHEN** the user types "hello" into the search input
- **THEN** the input value updates to "hello"

#### Scenario: Form submission

- **WHEN** the user types "test query" and presses Enter
- **THEN** the onSubmit callback is called with "test query"

#### Scenario: Empty submission

- **WHEN** the user presses Enter without typing
- **THEN** the onSubmit callback is called with empty string

#### Scenario: Icon click focuses input

- **WHEN** the user clicks the search icon button
- **THEN** the search input receives focus

#### Scenario: Custom placeholder

- **WHEN** the SearchBar receives placeholder="Find something..."
- **THEN** the input shows "Find something..." as placeholder

### Requirement: Footer

The app SHALL render a footer with copyright text and a link to Component Dock.

#### Scenario: Footer content

- **WHEN** the app loads
- **THEN** the footer displays "SeekDot. All rights reserved."
- **AND** a link to https://www.componentdock.com/ is present
- **AND** the link text is "Component Dock"
- **AND** the link opens in a new tab

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/seekdot/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/seekdot/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Page shell — a main container with class `bg-seekdot-bg` is rendered
- [ ] Search bar — a form with aria-label "Search form" is present
