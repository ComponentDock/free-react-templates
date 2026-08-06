# Template: Landing Page (WordPress Themes Collection)

## Purpose

Landing Page is a single-page app landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Landing Page
Wordpress Themes" entry in TEMPLATES.md (App Landing Page category), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Landing Page Wordpress Themes" — a landing-page
  website template from the free catalog
  (source: https://colorlib.com/wp/template/landing-page-wordpress-themes/).
  NOTE: the URL 301-redirects to a roundup article ("42 Best Landing Page
  WordPress Themes (Free & Premium)"), so the item is treated as a single
  landing-page design; the TEMPLATES.md screenshot is the reference.
- **Live preview UNREACHABLE (re-verified 2026-08-06):**
  `https://preview.colorlib.com/theme/landing-page-wordpress-themes/`
  returned HTTP 404 (variants `landing-page-wordpress`, `landing-page-themes`,
  `landing-page` also 404; note `/theme/landing/` returns 200 but belongs to
  the separate "Landing" checklist item). Per `docs/replication.md`, the
  design is reconstructed from the TEMPLATES.md screenshot
  (`landing-page-themes.jpg`, HTTP 200) as the sole visual reference.
- **Design reference (from screenshot, programmatic color analysis):** the
  screenshot (1200×891) shows a classic marketing landing page — white/very
  light-gray background (`#ffffff`, `#f4f4f4`, `#fafafa`) with a **violet
  brand color** (23712 violet-dominant pixels sampled):
  - Deep violet `#7020c0` / `#6020b0` (buttons/CTAs)
  - Mid violet `#7c44d6` (average of all violet pixels — primary)
  - Light violet `#8060e0` / `#9050e0` (gradients/accents)
    Structure (from screenshot + genre): top navigation with logo and menu
    links, hero with headline + CTA button, feature/service cards with icons,
    an about split, and a footer.
- **Recreation decisions:** standard landing structure (Navbar → Hero →
  Features → About split → CTA band → Footer); photos → seeded picsum
  placeholders (`picsum.photos/seed/landing-<n>/<w>/<h>`); icons →
  lucide-react; violet primary in `@theme`; "Poppins" (Google Fonts) as the
  display/body font (approximation — not extractable from a screenshot); no
  assets copied.

Landing Page lives in `apps/landing` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Landing",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Landing page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Landing" and links to Home, Features, About, and Contact
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

### Requirement: About split section

The system SHALL render an about split section with a heading, a blurb, and
a call-to-action button.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
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

- **GIVEN** the Landing app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Landing — App Landing Template"
