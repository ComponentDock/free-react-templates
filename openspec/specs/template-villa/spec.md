# Template: Villa (Interior Design Template)

## Purpose

Villa is a single-page interior design / architecture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Layal" website template design (see TEMPLATES.md), built under
a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Layal" — interior design / architecture template
  (source: https://colorlib.com/wp/template/layal/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/layal/
  (HTTP 200, full rendered DOM + `css/main.css` extracted).
  The TEMPLATES.md screenshot (`layal-free-interior-design-wwebsite-template.jpg`)
  is the visual reference; the design below is reconstructed from the DOM
  structure and CSS tokens.
- **Section order (1:1):** Navbar (Home, About, Services, Projects,
  Contact) → Hero (banner-area: headline "Design with love", intro
  paragraph, "Get Started" pill CTA, feature photo) → Feature
  ("Becoming A Dvd Repair Expert Online" numbered steps 01/02/03 on a
  black band) → Services ("Our Offred Services" + "Reasons To Choose
  Notebook" cards) → Projects ("Our latest Projects" gallery on a dark
  photo band) → Newsletter ("Subscribe Us" email band) → Footer.
- **Design tokens extracted from `css/main.css`:**
  - Primary **sky blue `#77d5f7`** (accents) + **indigo `#3c50ca`**
    (buttons/gradient partner).
  - Button hover uses the **indigo→sky gradient**
    (`linear-gradient(0deg, #3c50ca, #77d5f7)`); pill radius `20px`,
    uppercase white label.
  - Feature band: **black background** (`#000`), white headings, grey
    body text.
  - Project band: photo background with **rgba(0,0,0,0.8) overlay**,
    white headings.
  - Light backgrounds `#f9f9ff`; body text `#777777`; headings `#222222`.
  - Font: **"Poppins"** (Google Fonts).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/villa-<n>/<w>/<h>`); icons → lucide-react; forms
  prevent default (no backend); no assets copied.

Villa lives in `apps/villa` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Design tokens

<!-- brand-claim:2026-10-23 -->
| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Brand (stated in this prep) | `#77d5f7` | live sheet paints it ×37 — `background` on `.genric-btn.primary`; main.css (37,718 B, sha256 97dd6b609a16) · <https://preview.colorlib.com/theme/layal/> |
| Surface (measured) | `#4cd3e3` | paints it ×7 — `background` on `.genric-btn.success`; main.css (37,718 B, sha256 97dd6b609a16) · <https://preview.colorlib.com/theme/layal/> |

Recorded so the palette is machine-readable: the prep already states this colour in its design notes, and this row carries the same value with the live-sheet evidence.

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Villa",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Villa page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Villa" and links to Home, About, Services, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Feature section

The system SHALL render a features section on a dark band with numbered
feature steps.

#### Scenario: Feature content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show at least three numbered feature steps with titles and blurbs

### Requirement: Services section

The system SHALL render a services section with a heading and service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Our Offred Services"
- **AND** it SHALL show at least three service cards with titles and blurbs

### Requirement: Projects section

The system SHALL render a projects section with a heading and a project
gallery on a dark photo band.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL contain a heading "Our latest Projects"
- **AND** it SHALL show at least three project images with captions

### Requirement: Newsletter section

The system SHALL render a newsletter band with an email input.

#### Scenario: Newsletter content

- **GIVEN** the page is rendered
- **WHEN** the newsletter section is displayed
- **THEN** it SHALL show an email input and a subscribe button

### Requirement: Footer

The system SHALL render a footer with link columns, social links, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns and a copyright line
- **AND** it SHALL show social links (Facebook, X, LinkedIn, Instagram)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Villa app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Villa — Interior Design Template"

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
`apps/villa/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/villa/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navigation bar — the navbar SHALL show the site name "Villa" and links to Home, About, Services, and Contact
- [ ] Feature section — it SHALL show at least three numbered feature steps with titles and blurbs
- [x] Services section — it SHALL contain a heading "Our Offred Services"
- [x] Projects section — it SHALL contain a heading "Our latest Projects"
- [ ] Newsletter section — it SHALL show an email input and a subscribe button
- [ ] Footer — it SHALL show link columns and a copyright line
- [ ] Page composition — the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
