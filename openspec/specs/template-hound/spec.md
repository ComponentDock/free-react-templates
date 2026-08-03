# Template: Hound (Dog Breeds Website)

## Purpose

Hound is a multi-section dog-breeds website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Breed" design (see TEMPLATES.md), built under a different name
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a friendly dog-focused landing page: a slider hero, a
"dog life" intro, an about section, a team, a grid of dog breed cards, recent
blog posts, and a three-column footer. Hound follows the same structure and
adds the repo's standard dark-mode toggle and accessible patterns. All imagery
is recreated with seeded placeholder images (no assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Breed" — free dog-breeds website template
  (source: https://colorlib.com/wp/template/breed/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/breed/`
  (HTTP 200) + `css/style.css`.
- **Structure (1:1, section order):**
  1. Navbar — logo/site name, section links, CTA.
  2. Hero slider (`home-slider owl-carousel`, `slider-text`) — headline
     "We Love Pets" / "Care for dogs", short copy, "Get Started" (white
     outline) + "Download" (white link) buttons.
  3. Intro section — "It's a Dog Life" heading + copy.
  4. About — "Every Dog Needs A Good Owner" heading + image + copy.
  5. Team — four member cards: Mellisa Howard, Mike Richardson,
     Charles White, Laura Smith.
  6. Dog Breed Collections — grid of six breed cards: German Shepherd,
     Labrador, Bulldog, Rottweiler, Beagle, Golden Retriever.
  7. Recent Blog Post — three post cards with "Read more" buttons.
  8. Footer — three columns: "About The Breed", "Contact Info",
     "Quick Links".
- **Design tokens extracted from the stylesheet (`css/style.css`):**
  - Brand color: **#ffc107** (yellow) with **#ffce3a** accents — buttons,
    highlights.
  - Text/background: **#262626** (text), **#f8f9fa** (light sections),
    **#868e96** (muted).
  - Fonts: **"Open Sans"** (body) via Google Fonts (headings match the
    original's clean sans pairing).
  - Buttons: `btn-white btn-outline-white` (hero), `btn-primary` (yellow,
    "Read more").
- **Recreation decisions:** the repo-standard Navbar (with dark-mode toggle)
  wraps the header; sections recreated with Tailwind tokens
  (`--color-brand` = `#ffc107`, yellow scale in `@theme`); placeholder images
  via `https://picsum.photos/seed/hound-<n>/<w>/<h>`; icons from lucide-react;
  social icons inline SVG; no assets copied.

Hound lives in `apps/hound` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a navigation bar with the site name "Hound", links to
the main sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Hound page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Hound" and links to the main sections
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero slider

The system SHALL render a hero section with the headline "We Love Pets", a
supporting paragraph, and "Get Started" and "Download" buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL contain a level-1 heading matching "We Love Pets"
- **AND** it SHALL show a supporting paragraph
- **AND** it SHALL show "Get Started" and "Download" buttons

### Requirement: Dog life intro

The system SHALL render an intro section titled "It's a Dog Life" with
descriptive copy.

#### Scenario: Intro content

- **GIVEN** the page is rendered
- **WHEN** the intro section is displayed
- **THEN** it SHALL show the heading "It's a Dog Life"
- **AND** it SHALL show descriptive copy

### Requirement: About section

The system SHALL render an about section titled "Every Dog Needs A Good
Owner" with an image and copy.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "Every Dog Needs A Good Owner"
- **AND** it SHALL show an image with an accessible label and descriptive copy

### Requirement: Team section

The system SHALL render a team section with at least four member cards (photo,
name).

#### Scenario: Team cards

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show member cards for Mellisa Howard, Mike Richardson, Charles White, and Laura Smith

### Requirement: Dog breed collections

The system SHALL render a "Dog Breed Collections" section with six breed
cards (German Shepherd, Labrador, Bulldog, Rottweiler, Beagle, Golden
Retriever), each with an image and a name.

#### Scenario: Breed cards

- **GIVEN** the page is rendered
- **WHEN** the breed collections section is displayed
- **THEN** it SHALL show the heading "Dog Breed Collections"
- **AND** it SHALL show the six breed cards with names

### Requirement: Recent blog posts

The system SHALL render a "Recent Blog Post" section with at least three post
cards, each with a title, excerpt, and a "Read more" link.

#### Scenario: Blog posts

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Recent Blog Post"
- **AND** it SHALL show post cards with titles and "Read more" links

### Requirement: Footer

The system SHALL render a footer with "About The Breed", "Contact Info", and
"Quick Links" columns plus social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the three columns (About The Breed, Contact Info, Quick Links)
- **AND** it SHALL show social links

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Hound app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Hound — Dog Breeds Website Template"
