# Queryvane — Search Form Bar Template

## Purpose

Recreation of ColorLib "Search Form Bar 17"
(https://colorlib.com/wp/template/search-form-bar-17/).
A toggleable search form bar with a navbar, overlay search panel, and
Component Dock footer. Preview was unreachable; design based on screenshot analysis.

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/bootstrap/search-form-bar-17/` | HTTP 200 · 4,550 B · title `Search #1` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/search-form-bar-17/css/style.css?v=6209e455` | HTTP 200 · 17,178 B · sha256 `6a5417c8e3be` |

> ⚠️ the demo's own `<title>` reads `Search #1` though the path is `search-
> form-bar-17` — the host's titles are not reliable labels; the readings
> above are for the URL as fetched.

**Live palette** (hex × occurrences in that sheet): `#ffffff`×9,
`#007bff`×5, `#6c757d`×4, `#212529`×3, `#000000`×3, `#495057`×2,
`#0062cc`×2, `#0056b3`×1, `#ced4da`×1, `#80bdff`×1.

**Low-chroma values the sheet actually uses** — `#6c757d`, `#212529`,
`#495057`, `#ced4da`; any sampled Tailwind grey above is an approximation of
these.

## Requirements

### Requirement: Navbar displays brand and navigation

The navbar SHALL display the brand name "Queryvane" on the left and navigation links (Home, About, Contact) on the right, with a search icon toggle button.

#### Scenario: Navbar renders correctly

- **GIVEN** the page loads
- **THEN** the navbar displays "Queryvane" as the brand name
- **AND** the navbar shows Home, About, and Contact links
- **AND** a search icon button is visible

### Requirement: Search overlay toggles on icon click

The search overlay SHALL appear below the navbar when the search icon is clicked, and SHALL hide when the close button is clicked.

#### Scenario: Opening the search overlay

- **GIVEN** the search overlay is hidden
- **WHEN** the user clicks the search icon
- **THEN** the search overlay becomes visible
- **AND** the search input receives focus

#### Scenario: Closing the search overlay

- **GIVEN** the search overlay is visible
- **WHEN** the user clicks the close button
- **THEN** the search overlay becomes hidden

### Requirement: Search form functionality

The search form SHALL contain an input field with "Search..." placeholder and a "Search" submit button. Submitting with a query clears the input.

#### Scenario: Typing in search input

- **GIVEN** the search overlay is visible
- **WHEN** the user types in the search input
- **THEN** the input displays the typed text

#### Scenario: Submitting search form

- **GIVEN** the search overlay is visible with text in the input
- **WHEN** the user clicks the Search button
- **THEN** the input is cleared

### Requirement: Footer links to Component Dock

The footer SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer renders Component Dock link

- **GIVEN** the page loads
- **THEN** the footer displays a link to https://www.componentdock.com/
- **AND** the link text includes "Component Dock"
- **AND** the link opens in a new tab

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/queryvane/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/queryvane/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
