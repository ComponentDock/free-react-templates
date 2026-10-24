# Template: Motif (App Landing Page)

## Purpose

Motif is a single-page creative-business landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Mosh" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Mosh" — creative business template
  (source: https://colorlib.com/wp/template/mosh/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/mosh/
  (HTTP 200, full rendered DOM + `style.css` (33KB) extracted).
  The TEMPLATES.md screenshot (`mosh-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, About Us, Services, Portfolio,
  Blog, Contact + Login / Register) → Hero ("A Clean and Modern Template" +
  Get your freebie template now!) → Numbered highlights (01. No1 in Sales!
  ... 06. Modern Design + Discover More) → Clients ("clients / All our
  clients love our work") → Services ("What you get if you start your
  business with us" + Development, Design, SEO) → Feature cards (No1 in
  Sales!, Documentation inside, Modern Design, Marketing Strategist) →
  Portfolio ("Our Work / See our Online Portfolio") → Workflow ("This is
  how we work on Projects" + numbered steps) → Call-to-action ("give us a
  shout / Are you Ready to have a Talk?" + Contact Us) → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **blue `#4a7aec`** with light blue `#a2baff`.
  - Dark text `#211b31`, `#404551`; light gray backgrounds.
  - Font: **"Roboto"** (Google Fonts).
  - Blue buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/motif-<n>/<w>/<h>`); icons → lucide-react; no assets
  copied.

Motif lives in `apps/motif` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Design tokens

<!-- brand-claim:2026-10-23 -->
| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Brand (stated in this prep) | `#4a7aec` | live sheet paints it ×38 — `border-color` on `.mosh-preloader`; style.css (33,510 B, sha256 ead508f65cb9) · <https://preview.colorlib.com/theme/mosh/> |

Recorded so the palette is machine-readable: the prep already states this colour in its design notes, and this row carries the same value with the live-sheet evidence.

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Motif",
anchor links to the page's sections, a "Login" link, and a dark-mode toggle
button.

#### Scenario: Navbar content

- **GIVEN** the Motif page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Motif" and links to Home, About, Services, Portfolio, and Contact
- **AND** the navbar SHALL show a "Login" link and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a "Get your
freebie template now!" call-to-action.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "A Clean and Modern Template"
- **AND** it SHALL show a "Get your freebie template now!" call-to-action

### Requirement: Highlights section

The system SHALL render a highlights section with at least four numbered
items.

#### Scenario: Highlights content

- **GIVEN** the page is rendered
- **WHEN** the highlights section is displayed
- **THEN** it SHALL show numbered items including "No1 in Sales!", "Online Marketing", and "Modern Design"

### Requirement: Clients section

The system SHALL render a clients section with a heading and a row of client
logos.

#### Scenario: Clients content

- **GIVEN** the page is rendered
- **WHEN** the clients section is displayed
- **THEN** it SHALL contain a heading "All our clients love our work"
- **AND** it SHALL show at least four client logo images

### Requirement: Services section

The system SHALL render a services section with a heading and at least three
service items.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "What you get if you start your business with us"
- **AND** it SHALL show services titled "Development", "Design", and "SEO"

### Requirement: Feature cards section

The system SHALL render a feature-cards section with at least three cards
titled with value propositions.

#### Scenario: Feature cards content

- **GIVEN** the page is rendered
- **WHEN** the feature cards section is displayed
- **THEN** it SHALL show cards titled "No1 in Sales!", "Documentation inside", and "Modern Design"

### Requirement: Portfolio section

The system SHALL render a portfolio section with a heading and a grid of
project cards.

#### Scenario: Portfolio content

- **GIVEN** the page is rendered
- **WHEN** the portfolio section is displayed
- **THEN** it SHALL contain a heading "See our Online Portfolio"
- **AND** it SHALL show at least four project cards with images

### Requirement: Workflow section

The system SHALL render a workflow section with a heading and four steps.

#### Scenario: Workflow content

- **GIVEN** the page is rendered
- **WHEN** the workflow section is displayed
- **THEN** it SHALL contain a heading "This is how we work on Projects"
- **AND** it SHALL show four steps including "This is the first step"

### Requirement: Call-to-action section

The system SHALL render a call-to-action band with a heading and a "Contact
Us" button.

#### Scenario: Call-to-action content

- **GIVEN** the page is rendered
- **WHEN** the call-to-action section is displayed
- **THEN** it SHALL contain a heading "Are you Ready to have a Talk?"
- **AND** it SHALL show a "Contact Us" button

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

- **GIVEN** the Motif app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Motif — App Landing Template"

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
`apps/motif/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/motif/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navigation bar — the navbar SHALL show the site name "Motif" and links to Home, About, Services, Portfolio, and Contact
- [ ] Hero section — it SHALL contain a level-1 heading "A Clean and Modern Template"
- [x] Highlights section — it SHALL show numbered items including "No1 in Sales!", "Online Marketing", and "Modern Design"
- [x] Clients section — it SHALL contain a heading "All our clients love our work"
- [x] Services section — it SHALL contain a heading "What you get if you start your business with us"
- [x] Feature cards section — it SHALL show cards titled "No1 in Sales!", "Documentation inside", and "Modern Design"
- [x] Portfolio section — it SHALL contain a heading "See our Online Portfolio"
- [x] Workflow section — it SHALL contain a heading "This is how we work on Projects"
- [x] Call-to-action section — it SHALL contain a heading "Are you Ready to have a Talk?"
- [ ] Footer — it SHALL show link columns and a copyright line
- [ ] Page composition — the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
