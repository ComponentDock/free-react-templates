# Template: Erase (Photography Portfolio Landing)

## Purpose

Erase is a single-page photography portfolio template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Erase" design (see TEMPLATES.md), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a minimalist slate-blue photography page: a full-height hero
with the site name "Erase", a testimonial/feature slider ("Make Peace With
Your Broken Pieces" by Jamie Jonson), a "Recent Blog" row with post cards
and "Read more" buttons, and a footer with Site Links / "Have a Questions?"
columns. Erase recreates that structure section-for-section with matching
layout, colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Erase" — free photography website template
  (source: https://colorlib.com/wp/template/erase/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/erase/`
  (HTTP 200, 30.5KB) + stylesheet `css/style.css` (60.9KB). The rendered DOM
  is the reference below; the TEMPLATES.md screenshot
  (`erase-free-template.jpg`) confirms the visual design (dark hero, slate
  accents, light sections).
- **Section order (1:1):**
  1. Navbar (`ftco_navbar`): site name "Erase" + nav links.
  2. Hero (`hero-wrap js-fullheight`): "Erase" headline.
  3. Feature slider (`ftco-section ftco-no-pb ftco-no-pt`): repeated
     testimonial slides "Make Peace With Your Broken Pieces" (Jamie
     Jonson).
  4. Blog (`ftco-section`): "Recent Blog" + post cards ("Even the
     all-powerful Pointing has no control about") with "Read more"
     buttons.
  5. Footer (`ftco-footer`): brand + Site Links / "Have a Questions?".
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#69779b** (slate blue — accents, buttons, headings) +
    dark **#212121** text; light **#f8f9fa** section background.
  - Font: **"Abril Fatface"** (cursive display — headings) + **"Poppins"**
    (sans — body) via Google Fonts.
  - Buttons: `btn-primary` slate-blue filled.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero = seeded picsum background photo
  with the site name; feature slider with testimonial cards; blog cards
  with seeded photos + "Read more" buttons; footer with link columns; all
  images picsum-seeded (`picsum.photos/seed/erase-N/w/h`); Google Fonts via
  `<link>`.

Erase lives in `apps/erase` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Erase", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Erase page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Erase" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Welcome hero

The system SHALL render a full-width hero section with the site name as the
headline.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the site name "Erase" as a level-1 headline

### Requirement: Feature slider

The system SHALL render a feature/testimonial slider with at least one quote
card.

#### Scenario: Slider content

- **GIVEN** the page is rendered
- **WHEN** the feature slider is displayed
- **THEN** it SHALL show a quote (e.g. "Make Peace With Your Broken Pieces")
- **AND** it SHALL show an attribution (e.g. "Jamie Jonson")

### Requirement: Recent blog

The system SHALL render a "Recent Blog" section with at least three post
cards.

#### Scenario: Blog cards

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Recent Blog"
- **AND** it SHALL render at least three post cards with "Read more" buttons

### Requirement: Footer

The system SHALL render a footer with the site name and link columns.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Erase"
- **AND** it SHALL show link columns (Site Links, "Have a Questions?")
