# Template: Pinnacle (Architecture Template)

## Purpose

Pinnacle is a single-page architecture studio landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Sparsh" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Sparsh" — architecture template
  (source: https://colorlib.com/wp/template/sparsh/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/sparsh/
  (HTTP 200, full rendered DOM + `css/style.css` extracted). The
  TEMPLATES.md screenshot (`sparsh-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the live DOM and CSS
  tokens.
- **Section order (1:1):** Navbar (Home, About, Projects, Service, Contact)
  → Hero ("Dream Heaven City" carousel, 3 slides + Details) → About ("About
  our Company" / "We've been creating Awesome Since 1992" + 26 badge) →
  Overview (286+, 942+, 263+, 2000+ counters) → Portfolio ("Latest
  Completed Projects" + 4 alternating cards + Load More) → Estimate CTA
  ("Get to Know Project Estimate?" + Get Estimate) → Testimonials ("What
  People Say About Us" + Falcon Astle cards) → Footer (link columns +
  Newsletter + socials).
- **Design tokens extracted from `style.css`:**
  - Primary **yellow `#f9cc41`** (buttons, accents, section labels); dark
    navy **`#262533`** (hero/footer/overview backgrounds).
  - Light section background `#f9f9ff`; muted text `#8f8f8f`.
  - Fonts: **"Oswald"** (display, uppercase headings) + **"Roboto"** (body).
  - Buttons: yellow fill with dark text; bordered "Details"/"Read More"
    links with left/right border lines (`.btn--leftBorder`/`--rightBorder`);
    yellow CTA band `.tips-bg` with a dark "Get Estimate" button.
  - Overview cards: translucent white (`rgba(255,255,255,0.1)`) that fill
    yellow on hover.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/pinnacle-<n>/<w>/<h>`); icons → lucide-react;
  brand icons → inline SVG; no assets copied. The original hero is a
  JS carousel — recreated as a lightweight slide carousel with prev/next
  and dot indicators.

Pinnacle lives in `apps/pinnacle` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Design tokens

<!-- brand-claim:2026-10-23 -->
| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Brand (stated in this prep) | `#f9cc41` | live sheet paints it ×71 — `background` on `.section-intro__title.left-border:after`; style.css (57,448 B, sha256 af8a6aa86e32) · <https://preview.colorlib.com/theme/sparsh/> |

Recorded so the palette is machine-readable: the prep already states this colour in its design notes, and this row carries the same value with the live-sheet evidence.

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Pinnacle",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Pinnacle page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Pinnacle" and links to Home, About, Projects, Service, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero carousel with a headline and a
"Details" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Dream Heaven City"
- **AND** it SHALL show a "Details" button

#### Scenario: Hero carousel navigation

- **GIVEN** the hero carousel is rendered
- **WHEN** the user presses the next/previous buttons or a dot indicator
- **THEN** the active slide SHALL change accordingly

### Requirement: About section

The system SHALL render an about section with a heading, copy, and a "26
Years of Creativity" badge.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "We've been creating Awesome Since 1992"
- **AND** it SHALL show a "26 Years of Creativity" badge
- **AND** it SHALL show a "Read More" link

### Requirement: Overview section

The system SHALL render an overview section with four stat counters.

#### Scenario: Overview content

- **GIVEN** the page is rendered
- **WHEN** the overview section is displayed
- **THEN** it SHALL show four stat counters (286+, 942+, 263+, 2000+) with labels

### Requirement: Portfolio section

The system SHALL render a portfolio section with project cards and a
"Load More Projects" button.

#### Scenario: Portfolio content

- **GIVEN** the page is rendered
- **WHEN** the portfolio section is displayed
- **THEN** it SHALL show four project cards with dates, titles, and "Read More" links

#### Scenario: Load more projects

- **GIVEN** the portfolio section is displayed
- **WHEN** the user presses "Load More Projects"
- **THEN** additional project cards SHALL appear

### Requirement: Estimate call to action

The system SHALL render a yellow call-to-action band with a "Get Estimate"
button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the call-to-action section is displayed
- **THEN** it SHALL show a "Get to Know Project Estimate?" heading
- **AND** it SHALL show a "Get Estimate" button

### Requirement: Testimonials

The system SHALL render a testimonials section with quote cards.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show a "What People Say About Us" heading
- **AND** it SHALL show quote cards attributing "Falcon Astle"

### Requirement: Footer

The system SHALL render a footer with link columns, a newsletter form,
social links, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns (Top Products, Quick Links, Features, Resources)
- **AND** it SHALL show a newsletter form with an email field and subscribe button
- **AND** it SHALL show social links (Facebook, X, Instagram, LinkedIn)
- **AND** it SHALL show a copyright line

#### Scenario: Newsletter subscribe

- **GIVEN** the footer newsletter form is displayed
- **WHEN** the user enters an email and presses subscribe
- **THEN** a confirmation message SHALL appear

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Pinnacle app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Pinnacle — Architecture Template"

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
`apps/pinnacle/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/pinnacle/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navigation bar — the navbar SHALL show the site name "Pinnacle" and links to Home, About, Projects, Service, and Contact
- [x] Hero section — it SHALL contain a level-1 heading "Dream Heaven City"
- [x] About section — it SHALL contain a heading "We've been creating Awesome Since 1992"
- [ ] Overview section — it SHALL show four stat counters (286+, 942+, 263+, 2000+) with labels
- [x] Portfolio section — it SHALL show four project cards with dates, titles, and "Read More" links
- [x] Estimate call to action — it SHALL show a "Get to Know Project Estimate?" heading
- [x] Testimonials — it SHALL show a "What People Say About Us" heading
- [ ] Footer — it SHALL show link columns (Top Products, Quick Links, Features, Resources)
- [ ] Page composition — the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
