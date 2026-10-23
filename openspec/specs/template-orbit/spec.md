# Template: Orbit (404 Error Page — Space Theme)

Recreation of ColorLib "Colorlib Error 404 V10" (https://colorlib.com/wp/template/colorlib-error-404-10/).

## Purpose

Orbit is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 10" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a clean, creative, space-themed error page on a light
background: a rocket/planet illustration beside a large "404" display, a short
"page not found" message, a way back to the home page, and a minimal footer.
Orbit follows the same structure and adds the repo's standard dark-mode toggle
and accessible patterns.

Orbit lives in `apps/orbit` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Design reference (replication findings)

- **Source:** ColorLib "Colorlib Error 404 V10" — https://colorlib.com/wp/template/colorlib-error-404-10/
- **Source slug:** `colorlib-error-404-10`
- **Preview URL analyzed:** https://colorlib.com/etc/404/colorlib-error-404-10/ — **HTTP 200**, 777 B, fetched 2026-10-23 (page `<title>`: "404 HTML Tempalte by Colorlib"). The slug-only path `https://preview.colorlib.com/theme/colorlib-error-404-10/` answers **404**; the live demo is the catalog alias above, recorded so the next prep does not repeat the probe.
- **Design tokens read from the live stylesheet** (`https://colorlib.com/etc/404/colorlib-error-404-10/css/style.css?v=8a94e77a`, fetched 2026-10-23): brand `#0046d5`; type Montserrat. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-error-404-10.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/orbit` had no recorded reference (docs/replication.md requires one).

## Design tokens

<!-- brand-claim:2026-10-23 -->
| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Brand (stated in this prep) | `#0046d5` | live sheet paints it ×3 — `background` on `.notfound a`; style.css?v=8a94e77a (5,870 B, sha256 d921480e31a2) · <https://colorlib.com/etc/404/colorlib-error-404-10/> |

Recorded so the palette is machine-readable: the prep already states this colour in its design notes, and this row carries the same value with the live-sheet evidence.

## Requirements

### Requirement: Navigation bar
The system SHALL render a top navigation bar with the site name "Orbit", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content
- **GIVEN** the Orbit page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Orbit" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle
- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section with space illustration
The system SHALL render a centered error section with a space-themed
illustration (rocket or planet), a large "404" heading, a "Page not found"
subheading, a short explanatory message, and a "Back to home" button that links
to the page root.

#### Scenario: Error content
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading "404" and a level-2 heading "Page not found"
- **AND** it SHALL show an explanatory message
- **AND** it SHALL show a space-themed illustration with an accessible label
- **AND** it SHALL show a "Back to home" button linking to the page root

### Requirement: Footer
The system SHALL render a minimal footer with the site name, a short tagline,
and social links.

#### Scenario: Footer content
- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Orbit" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition
The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render
- **GIVEN** the Orbit app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Orbit — Error Page Template"

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
`apps/orbit/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/orbit/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navigation bar — the navbar SHALL show the site name "Orbit" and a "Home" link pointing to the page root
- [ ] Error section with space illustration — it SHALL contain a level-1 heading "404" and a level-2 heading "Page not found"
- [x] Footer — it SHALL show the site name "Orbit" and a tagline
- [ ] Page composition — the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
