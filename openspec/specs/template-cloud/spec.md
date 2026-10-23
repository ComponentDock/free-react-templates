# Template: Cloud (404 Error Page — Minimalist Cloud)

Recreation of ColorLib "Colorlib Error 404 V14" (https://colorlib.com/wp/template/colorlib-error-404-14/).

## Purpose

Cloud is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V14" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a clean, light, minimalist error page with fun elements:
a cloud motif, great adaptation to different screen sizes, a home button, and
social icons. Cloud follows the same structure and adds the repo's standard
dark-mode toggle and accessible patterns. The cloud motif is recreated as an
original inline SVG illustration (no assets copied).

Cloud lives in `apps/cloud` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Design reference (replication findings)

- **Source:** ColorLib "Colorlib Error 404 V14" — https://colorlib.com/wp/template/colorlib-error-404-14/
- **Source slug:** `colorlib-error-404-14`
- **Preview URL analyzed:** https://colorlib.com/etc/404/colorlib-error-404-14/ — **HTTP 200**, 3,963 B, fetched 2026-10-23 (page `<title>`: "404 HTML Template by Colorlib"). The slug-only path `https://preview.colorlib.com/theme/colorlib-error-404-14/` answers **404**; the live demo is the catalog alias above, recorded so the next prep does not repeat the probe.
- **Design tokens read from the live stylesheet** (`https://colorlib.com/etc/404/colorlib-error-404-14/css/style.css?v=d620e5ed`, fetched 2026-10-23): brand `#18e06f`; dominant neutrals `#f3f3f3`, `#151515`, `#fafbfd`; type Quicksand. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-error-404-14.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/cloud` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: Navigation bar
The system SHALL render a top navigation bar with the site name "Cloud", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content
- **GIVEN** the Cloud page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Cloud" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle
- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section with cloud illustration
The system SHALL render a centered error section with a cloud illustration, a
large "404" heading, a "Page not found" subheading, a short explanatory
message, a "Back to home" button that links to the page root, and social icon
links.

#### Scenario: Cloud illustration
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL show a cloud illustration with an accessible label

#### Scenario: Error content
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading "404" and a level-2 heading "Page not found"
- **AND** it SHALL show an explanatory message
- **AND** it SHALL show a "Back to home" button linking to the page root

#### Scenario: Social links
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL show social icon links (GitHub, X, LinkedIn) with accessible names

### Requirement: Footer
The system SHALL render a minimal footer with the site name, a short tagline,
and social links.

#### Scenario: Footer content
- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Cloud" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition
The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render
- **GIVEN** the Cloud app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Cloud — Error Page Template"

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/cloud/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/cloud/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navigation bar — the navbar SHALL show the site name "Cloud" and a "Home" link pointing to the page root
- [ ] Error section with cloud illustration — it SHALL show a cloud illustration with an accessible label
- [x] Footer — it SHALL show the site name "Cloud" and a tagline
- [ ] Page composition — the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
