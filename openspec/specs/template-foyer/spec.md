# Template: Foyer (Interior Design Template)

## Purpose

Foyer is a single-page interior design landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Interior" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Interior" — interior design template
  (source: https://colorlib.com/wp/template/interior/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/interior/
  (HTTP 200, full rendered DOM + `css/main.css` extracted).
  The TEMPLATES.md screenshot (`interior-free-template-1.jpg`) is the
  visual reference; the design below is reconstructed from the DOM
  structure and CSS tokens.
- **Section order (1:1):** Navbar (Home, About, Services, Projects, Blog,
  Contact) → Banner hero ("Precise concept design for stylish living" +
  Get Started) → Services ("What we offer to our clients" + Interior
  Design, Architecture Design, Concept Design) → Gallery ("Our Recent
  Works may impress you" + Lavendar ambient interior) → Features ("Some
  Features that Made us Unique" + Expert Technicians) → Testimonials →
  Call to action ("Request quote now") → Blog → Brands → Footer.
- **Design tokens extracted from `css/main.css`:**
  - Primary **gold `#c6b069`** (buttons, accents).
  - Light backgrounds `#f9f9ff`; dark text `#222222`.
  - Font: **"Poppins"** (Google Fonts).
  - Gold buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/foyer-<n>/<w>/<h>`); icons → lucide-react; forms
  prevent default (no backend); no assets copied.

Foyer lives in `apps/foyer` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Design tokens

<!-- brand-claim:2026-10-23 -->
| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Brand (stated in this prep) | `#c6b069` | live sheet paints it ×68 — `background-color` on `::selection`; main.css (48,526 B, sha256 83ac25047542) · <https://preview.colorlib.com/theme/interior/> |
| Surface (measured) | `#4cd3e3` | paints it ×7 — `background` on `.genric-btn.success`; main.css (48,526 B, sha256 83ac25047542) · <https://preview.colorlib.com/theme/interior/> |

Recorded so the palette is machine-readable: the prep already states this colour in its design notes, and this row carries the same value with the live-sheet evidence.

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Foyer",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Foyer page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Foyer" and links to Home, About, Services, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a "Get
Started" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show a "Get Started" button

### Requirement: Services section

The system SHALL render a services section with a heading and at least three
service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "What we offer to our clients"
- **AND** it SHALL show at least three service cards with titles (Interior Design, Architecture Design, Concept Design) and blurbs

### Requirement: Gallery section

The system SHALL render a gallery section with a heading and a project
gallery.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL contain a heading "Our Recent Works may impress you"
- **AND** it SHALL show at least three project images with captions

### Requirement: Features section

The system SHALL render a features section with a heading and feature cards.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Some Features that Made us Unique"
- **AND** it SHALL show at least three feature cards with titles and blurbs

### Requirement: Call to action

The system SHALL render a call-to-action band with a "Request quote now"
button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the call-to-action section is displayed
- **THEN** it SHALL show a "Request quote now" button

### Requirement: Footer

The system SHALL render a footer with link columns, social links, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns and a copyright line
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Foyer app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Foyer — Interior Design Template"

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
`apps/foyer/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/foyer/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navigation bar — the navbar SHALL show the site name "Foyer" and links to Home, About, Services, and Contact
- [ ] Hero section — it SHALL contain a level-1 heading
- [x] Services section — it SHALL contain a heading "What we offer to our clients"
- [x] Gallery section — it SHALL contain a heading "Our Recent Works may impress you"
- [x] Features section — it SHALL contain a heading "Some Features that Made us Unique"
- [x] Call to action — it SHALL show a "Request quote now" button
- [ ] Footer — it SHALL show link columns and a copyright line
- [ ] Page composition — the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
