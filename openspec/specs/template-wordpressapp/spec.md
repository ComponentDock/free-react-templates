# Template: WordpressApp (App Themes Collection)

## Purpose

WordpressApp is a single-page app landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Wordpress App
Themes" entry in TEMPLATES.md (App Landing Page category), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Wordpress App Themes" — an app WordPress theme
  from the free catalog (source: https://colorlib.com/wp/template/wordpress-app-themes/).
- **Live preview UNREACHABLE:** `https://preview.colorlib.com/theme/wordpress-app-themes/`
  returned HTTP 404. Per `docs/replication.md`, the design is reconstructed
  from the TEMPLATES.md screenshot (`app-wordpress-themes.jpg`) as the sole
  visual reference.
- **Design reference (from screenshot):** a classic marketing/app landing page —
  top navigation with logo and menu links, a full-viewport hero over a deep
  **purple→violet gradient** (`#6a1b9a` → `#4a148c`) with a large white
  headline, white blurb, a **hot-pink** (`#ec2d8e`) "BUY NOW" button and a
  transparent white-bordered "MORE INFO" button, a smartphone mockup showing a
  calendar app, and a white wave transition into a light content area.
  Below: feature/service cards with icons on white, an app showcase split on
  light gray, and a footer with link columns.
- **Recreation decisions:** standard landing structure (Navbar → Hero with
  phone mockup → Features → App split → Footer); photos → seeded picsum
  placeholders (`picsum.photos/seed/wordpressapp-<n>/<w>/<h>`); icons →
  lucide-react; brand purple + hot-pink accent in `@theme`; no assets copied.

WordpressApp lives in `apps/wordpressapp` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"WordpressApp", anchor links to the page's sections, and a dark-mode toggle
button.

#### Scenario: Navbar content

- **GIVEN** the WordpressApp page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "WordpressApp" and links to Home, Features, About, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, and a
call-to-action button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show a supporting blurb and a call-to-action button

### Requirement: Features section

The system SHALL render a features section with a heading and at least three
feature cards, each with an icon, a title, and a blurb.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading
- **AND** it SHALL show at least three feature cards with titles and blurbs

### Requirement: App split section

The system SHALL render an app showcase split section with a heading, a
blurb, and a call-to-action button.

#### Scenario: App split content

- **GIVEN** the page is rendered
- **WHEN** the app split section is displayed
- **THEN** it SHALL contain a heading and a blurb
- **AND** it SHALL show a call-to-action button

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

- **GIVEN** the WordpressApp app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "WordpressApp — App Landing Template"

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
`apps/wordpressapp/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/wordpressapp/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
