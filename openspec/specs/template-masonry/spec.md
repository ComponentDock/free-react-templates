# Template: Masonry (Architecture Template)

## Purpose

Masonry is a single-page architecture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Astral" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Astral" — architecture template
  (source: https://colorlib.com/wp/template/astral/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/astral/
  (HTTP 200, full rendered DOM + `css/style.css` (67KB) extracted).
  The TEMPLATES.md screenshot (`astral-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, About, Services, Portfolio,
  Contact + dark-mode toggle) → Hero ("Precise Created Only For You" +
  blurb + get started) → About ("We Are Creating Since 1990" + fact boxes
  "1990 Projects done") → Services ("Our Service Offerings" + Total
  Architecture / Interior Solution / Construction Guideline + view all
  services) → Portfolio ("Our Portfolio Museum" + Featured Projects +
  view all projects) → Testimonials ("Falcon Astle" quote slider) →
  Contact ("Send Us Messages" + view contact info) → Footer (Recent Blog
  Posts, link columns, social links, copyright).
- **Design tokens extracted from `style.css`:**
  - Primary **yellow `#f9cc41`** (buttons, accents), darker yellow
    `#f8b600`.
  - Dark text `#222222`; light backgrounds `#f9f9ff`, `#ffffff`.
  - Accent `#4cd3e3` (cyan) and `#38a4ff` (blue) used sparingly.
  - Footer background `#000410` (near-black navy).
  - Fonts: **"Oswald"** (display, serif) + **"Roboto"** (body).
  - Square (border-radius 0) yellow buttons with white text, 50px tall.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/astral-<n>/<w>/<h>`); icons → lucide-react; forms
  prevent default (no backend); no assets copied.

Masonry lives in `apps/masonry` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Masonry",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Masonry page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Masonry" and links to Home, About, Services, Portfolio, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, and a
"Get Started" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show a blurb and a "Get Started" button

### Requirement: About section

The system SHALL render an about section with a heading and fact boxes.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "We Are Creating Since 1990"
- **AND** it SHALL show at least two fact boxes with a number and a label

### Requirement: Services section

The system SHALL render a services section with a heading and at least three
service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Our Service Offerings"
- **AND** it SHALL show at least three service cards with titles (Total
  Architecture, Interior Solution, Construction Guideline) and blurbs
- **AND** it SHALL show a "View All Services" button

### Requirement: Portfolio section

The system SHALL render a portfolio section with a heading and a project
gallery.

#### Scenario: Portfolio content

- **GIVEN** the page is rendered
- **WHEN** the portfolio section is displayed
- **THEN** it SHALL contain a heading "Our Portfolio Museum"
- **AND** it SHALL show at least three project images with captions

### Requirement: Testimonials section

The system SHALL render a testimonials section with a quote slider.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show at least one quote with an author name

### Requirement: Contact section

The system SHALL render a contact section with a heading and contact info.

#### Scenario: Contact content

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL contain a heading "Send Us Messages"
- **AND** it SHALL show contact details and a "View Contact Info" button

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

- **GIVEN** the Masonry app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Masonry — Architecture Template"

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
`apps/masonry/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/masonry/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] `npm run spec:validate`
- [ ] `bash scripts/verify-app.sh masonry` (typecheck + lint + 100% coverage tests + build)
- [ ] Screenshot review: sections, order, yellow brand, Oswald/Roboto fonts
- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navigation bar — the navbar SHALL show the site name "Masonry" and links to Home, About, Services, Portfolio, and Contact
- [ ] Hero section — it SHALL contain a level-1 heading
- [x] About section — it SHALL contain a heading "We Are Creating Since 1990"
- [x] Services section — it SHALL contain a heading "Our Service Offerings"
- [x] Portfolio section — it SHALL contain a heading "Our Portfolio Museum"
- [ ] Testimonials section — it SHALL show at least one quote with an author name
- [x] Contact section — it SHALL contain a heading "Send Us Messages"
- [ ] Footer — it SHALL show link columns and a copyright line
- [ ] Page composition — the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
