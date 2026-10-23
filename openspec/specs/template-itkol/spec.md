# Template: Itkol (App Landing Page)

## Purpose

Itkol is a single-page IT-services landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "IT-Solution" (Itkol) website template design (see
TEMPLATES.md), built under a different name with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "IT-Solution" — IT services / tech solutions site
  (source: https://colorlib.com/wp/template/itkol/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/itkol/
  (HTTP 200, full rendered DOM + `assets/css/style.css` (67KB) extracted).
  The TEMPLATES.md screenshot (`itkol-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, Services, About, Case Study, Blog,
  Contact + Get Free Quote) → Hero ("We provide best IT solution" + Naxly
  blurb) → Services ("Our Services — IT solutions for startup and
  enterprises" + Managed IT services, Backup and recovery, Cyber security)
  → New Features ("New Features / You have received notification / Grow
  your business fast." + Engage Teammates, Level Up Productivity + Learn
  More) → Industries ("Industries We Serve — IT services customized for
  your industry" + Industries & Manufacturing, Education & Health, Retail &
  Ecommerce, Travel & Hospitality) → CTA ("Need a Technology support?" +
  Get Started Now) → About ("ITKol - Partner for Your Business" + Request a
  Quote + stats 2500+/350+/20+) → Case studies ("Some of Our Great Stuffs"
  - inspire design studio x3) → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **pink `#FF4495`** with **navy `#232F55`** and dark violet
    `#140C40`.
  - Light section backgrounds `#f9f9ff`.
  - Fonts: **"Josefin Sans"** + **"Mulish"** (Google Fonts).
  - Pink rounded buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/itkol-<n>/<w>/<h>`); icons → lucide-react; forms
  prevent default (no backend); no assets copied.

Itkol lives in `apps/itkol` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Design tokens

<!-- brand-claim:2026-10-23 -->
| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Brand (stated in this prep) | `#ff4495` | live sheet paints it ×41 — `background` on `.boxed-btn:hover`; style.css (67,801 B, sha256 a0bc29d7d120) · <https://preview.colorlib.com/theme/itkol/> |

Recorded so the palette is machine-readable: the prep already states this colour in its design notes, and this row carries the same value with the live-sheet evidence.

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Itkol",
anchor links to the page's sections, a "Get Free Quote" button, and a
dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Itkol page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Itkol" and links to Home, Services, About, and Contact
- **AND** the navbar SHALL show a "Get Free Quote" button and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a blurb.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "We provide best IT solution"
- **AND** it SHALL show a supporting blurb

### Requirement: Services section

The system SHALL render a services section with a heading and three service
cards: "Managed IT services", "Backup and recovery", and "Cyber security".

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "IT solutions for startup and enterprises"
- **AND** it SHALL show cards titled "Managed IT services", "Backup and recovery", and "Cyber security"

### Requirement: Features section

The system SHALL render a features section with a heading and two feature
tiles: "Engage Teammates" and "Level Up Productivity", each with a "Learn
More" link.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Grow your business fast."
- **AND** it SHALL show tiles titled "Engage Teammates" and "Level Up Productivity" with "Learn More" links

### Requirement: Industries section

The system SHALL render an industries section with a heading and four
industry cards.

#### Scenario: Industries content

- **GIVEN** the page is rendered
- **WHEN** the industries section is displayed
- **THEN** it SHALL contain a heading "IT services customized for your industry"
- **AND** it SHALL show cards for "Industries & Manufacturing", "Education & Health", "Retail & Ecommerce", and "Travel & Hospitality"

### Requirement: About section

The system SHALL render an about section with a heading, a "Request a
Quote" button, and stats.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "ITKol - Partner for Your Business"
- **AND** it SHALL show a "Request a Quote" button and at least three stats

### Requirement: CTA band

The system SHALL render a full-width call-to-action band with the heading
"Innovative IT Solution for your Business & Startup" and a "Get Started Now"
button.

#### Scenario: CTA band content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL contain the heading "Innovative IT Solution for your Business & Startup"
- **AND** it SHALL show a "Get Started Now" button

### Requirement: Case studies

The system SHALL render a case-studies section with the heading "Some of Our
Great Stuffs" and three case-study cards.

#### Scenario: Case studies content

- **GIVEN** the page is rendered
- **WHEN** the case-studies section is displayed
- **THEN** it SHALL contain the heading "Some of Our Great Stuffs"
- **AND** it SHALL show three case-study cards

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

- **GIVEN** the Itkol app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Itkol — App Landing Template"

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
`apps/itkol/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/itkol/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navigation bar — the navbar SHALL show the site name "Itkol" and links to Home, Services, About, and Contact
- [x] Hero section — it SHALL contain a level-1 heading "We provide best IT solution"
- [x] Services section — it SHALL contain a heading "IT solutions for startup and enterprises"
- [x] Features section — it SHALL contain a heading "Grow your business fast."
- [x] Industries section — it SHALL contain a heading "IT services customized for your industry"
- [x] About section — it SHALL contain a heading "ITKol - Partner for Your Business"
- [x] CTA band — it SHALL contain the heading "Innovative IT Solution for your Business & Startup"
- [x] Case studies — it SHALL contain the heading "Some of Our Great Stuffs"
- [ ] Footer — it SHALL show link columns and a copyright line
- [ ] Page composition — the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
