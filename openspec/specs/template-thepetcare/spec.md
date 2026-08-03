# Template: Thepetcare (Animal Care & Donation Website)

## Purpose

Thepetcare is a multi-section animal-care website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Thepetcare" design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a pink-and-navy animal-care landing page: hero with a
"Saving Animals Changing Live" headline, an about block, three pet care
services, a video block, an emergency call band, a volunteer/donation CTA,
and a footer with a newsletter signup. Thepetcare follows the same structure
and adds the repo's standard dark-mode toggle and accessible patterns. All
imagery is recreated with seeded placeholder images (no assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Thepetcare" — free animal care website template
  (source: https://colorlib.com/wp/template/thepetcare/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/thepetcare/`
  (HTTP 200) + `assets/css/style.css` (HTTP 200).
- **Structure (1:1, section order):**
  1. Header — nav: Home, Services, About, Blog, Contact + "Get Quote"
     button.
  2. Hero — h1 "Saving Animals Changing Live", supporting copy, "Our
     Services" button.
  3. About — h2 "The Kind of Care Your Pets Deserve" + "Learn More".
  4. Services — h2 "Our Pet Care Services"; three cards: Pet Traning,
     Hygienic Care, Pet Treatment (icon + copy).
  5. Video block — "Play the video to see more" (video/play button).
  6. Quote/about — "Animals has come to mean so much in t live" (image +
     copy).
  7. Emergency band — "For Emergency care Just Call Us" + phone
     +10 (89) 837 3678 + "Learn More".
  8. Volunteer — h2 "We looking for helping hand" + "Make a Donation" CTA.
  9. Footer — about blurb, Navigation / Services / Subscribe newsletter
     columns, bottom bar.
- **Design tokens extracted from the stylesheet (`assets/css/style.css`):**
  - Brand color: **#FF3E7E** (pink — primary buttons/accents); dark navy
    **#140C40** / **#232F55** / **#023C5A** (headings, alt sections).
  - Text/background: **#415094**/**#023C5A** (headings), **#999999**
    (muted), **#f9f9ff** / **#f0e9ff** (light sections), white sections.
  - Fonts: **"Fredoka One"** (display headings) + **"DM Sans"** (body) via
    Google Fonts.
  - Buttons: filled pink `btn` (rounded, uppercase).
- **Recreation decisions:** the repo-standard Navbar (with dark-mode toggle)
  wraps the header; sections recreated with Tailwind tokens
  (`--color-brand` = `#FF3E7E`, navy scale in `@theme`); placeholder images
  via `https://picsum.photos/seed/thepetcare-<n>/<w>/<h>`; icons from
  lucide-react; newsletter form with client-side validation (zod); social
  icons inline SVG; no assets copied.

Thepetcare lives in `apps/thepetcare` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a navigation bar with the site name "Thepetcare",
links to the main sections, a "Get Quote" button, and a dark-mode toggle
button.

#### Scenario: Navbar content

- **GIVEN** the Thepetcare page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Thepetcare" and links to the main sections
- **AND** the navbar SHALL show a "Get Quote" button and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a hero section with the headline "Saving Animals
Changing Live", supporting copy, and an "Our Services" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL contain a level-1 heading matching "Saving Animals Changing Live"
- **AND** it SHALL show a supporting paragraph and an "Our Services" button

### Requirement: About section

The system SHALL render an about section titled "The Kind of Care Your Pets
Deserve" with descriptive copy and a "Learn More" button.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "The Kind of Care Your Pets Deserve"
- **AND** it SHALL show descriptive copy and a "Learn More" button

### Requirement: Services section

The system SHALL render a services section titled "Our Pet Care Services"
with three cards: Pet Traning, Hygienic Care, and Pet Treatment.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Our Pet Care Services"
- **AND** it SHALL show the three service cards, each with an icon, title, and copy

### Requirement: Video block

The system SHALL render a video block with "Play the video to see more" text
and a play button with an accessible label.

#### Scenario: Video block content

- **GIVEN** the page is rendered
- **WHEN** the video block is displayed
- **THEN** it SHALL show the video text and a play button with an accessible label

### Requirement: Quote section

The system SHALL render a quote section with the heading "Animals has come
to mean so much in t live" and an image with copy.

#### Scenario: Quote content

- **GIVEN** the page is rendered
- **WHEN** the quote section is displayed
- **THEN** it SHALL show the heading "Animals has come to mean so much in t live"
- **AND** it SHALL show an image with an accessible label and descriptive copy

### Requirement: Emergency section

The system SHALL render an emergency band with "For Emergency care Just Call
Us", a phone number, and a "Learn More" button.

#### Scenario: Emergency content

- **GIVEN** the page is rendered
- **WHEN** the emergency section is displayed
- **THEN** it SHALL show the emergency text and a phone number
- **AND** it SHALL show a "Learn More" button

### Requirement: Volunteer section

The system SHALL render a volunteer section titled "We looking for helping
hand" with a "Make a Donation" call-to-action.

#### Scenario: Volunteer content

- **GIVEN** the page is rendered
- **WHEN** the volunteer section is displayed
- **THEN** it SHALL show the heading "We looking for helping hand"
- **AND** it SHALL show a "Make a Donation" button

### Requirement: Footer

The system SHALL render a footer with an about blurb, link columns
(Navigation, Services), a "Subscribe newsletter" signup, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Thepetcare" and an about blurb
- **AND** it SHALL show link columns, a newsletter input, and social links

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Thepetcare app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Thepetcare — Animal Care & Donation Website Template"
