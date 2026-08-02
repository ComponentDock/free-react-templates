# Template: Guardian (Pet Care & Animal Welfare Landing)

## Purpose

Guardian is a single-page pet care & animal welfare website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Thepetcare" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Thepetcare" — pet care / animal welfare services
  (source: https://colorlib.com/wp/template/thepetcare/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/thepetcare/
  (HTTP 200, full rendered DOM + `assets/css/style.css` (62.6KB) extracted).
  The TEMPLATES.md screenshot (`thepetcare-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and CSS
  tokens.
- **Section order (1:1):** Top bar (address + phone) → Navbar (Home,
  Services, About, Blog, Contact + Get Quote) → Hero ("Saving Animals
  Changing Live" + Our Services) → About (The Kind of Care Your Pets
  Deserve) → Services (Our Pet Care Services: Pet Traning, Hygienic Care,
  Pet Treatment) → Video band (Play the video to see more) → About 2
  (Animals has come to mean so much in t live + Learn More) → Emergency CTA
  (For Emergency care Just Call Us + hours + phone) → Testimonials (Pete
  Sariya — Happy dog owner) → Volunteer CTA (We looking for helping hand:
  Learn More + Make a Donation) → Footer (Navigation, Services, Subscribe
  newsletter, social, copyright).
- **Design tokens extracted from `style.css`:**
  - Primary **pink `#FF3E7E`** — `.btn` background; hover `#eb3773`.
  - Dark navy `#140C40` footer; light backgrounds `#f9f9ff`, `#f0e9ff`.
  - Fonts: **"DM Sans"** (body) + **"Fredoka One"** (display headings)
    (Google Fonts).
  - Buttons: pink bg, white text, capitalized, 5px radius.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/guardian-<n>/<w>/<h>`); icons → lucide-react; forms
  prevent default (no backend); no assets copied.

Guardian lives in `apps/guardian` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Top bar

The system SHALL render a slim top bar above the navbar with an address and a
phone number.

#### Scenario: Top bar content

- **GIVEN** the Guardian page is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL show an address and a phone number

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Guardian",
anchor links to the page's sections, a "Get Quote" button, and a dark-mode
toggle button.

#### Scenario: Navbar content

- **GIVEN** the Guardian page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Guardian" and links to Home, Services, About, Blog, and Contact
- **AND** the navbar SHALL show a "Get Quote" button and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, and an
"Our Services" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Saving Animals Changing Live"
- **AND** it SHALL show a supporting blurb and an "Our Services" button

### Requirement: About section

The system SHALL render an about section with a heading "The Kind of Care Your
Pets Deserve" and an image.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a level-2 heading "The Kind of Care Your Pets Deserve"
- **AND** it SHALL show an image

### Requirement: Services section

The system SHALL render a services section with a heading and at least three
service cards, each with an image, a title, and a description.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Our Pet Care Services"
- **AND** it SHALL show service cards titled Pet Traning, Hygienic Care, and Pet Treatment
- **AND** each card SHALL have an image and a description

### Requirement: Video band

The system SHALL render a video band with a play-button thumbnail and a "Play
the video to see more" label.

#### Scenario: Video band content

- **GIVEN** the page is rendered
- **WHEN** the video band is displayed
- **THEN** it SHALL show a play button over a video thumbnail with the label "Play the video to see more"

### Requirement: Story section

The system SHALL render a story section with a heading, two paragraphs, and a
"Learn More" button.

#### Scenario: Story content

- **GIVEN** the page is rendered
- **WHEN** the story section is displayed
- **THEN** it SHALL contain a heading "Animals has come to mean so much in t live"
- **AND** it SHALL show supporting paragraphs and a "Learn More" button

### Requirement: Emergency CTA section

The system SHALL render an emergency-care band with a heading, opening hours,
and a phone number.

#### Scenario: Emergency CTA content

- **GIVEN** the page is rendered
- **WHEN** the emergency CTA section is displayed
- **THEN** it SHALL contain the heading "For Emergency care Just Call Us"
- **AND** it SHALL show opening hours and a phone number

### Requirement: Testimonials section

The system SHALL render a testimonials section with a customer quote and the
author's name and role.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show a customer quote and the author name "Pete Sariya"

### Requirement: Volunteer section

The system SHALL render a volunteer/donation section with a heading, a blurb,
a "Learn More" button, and a "Make a Donation" button.

#### Scenario: Volunteer content

- **GIVEN** the page is rendered
- **WHEN** the volunteer section is displayed
- **THEN** it SHALL contain a heading "We looking for helping hand"
- **AND** it SHALL show "Learn More" and "Make a Donation" buttons

### Requirement: Footer

The system SHALL render a footer with an about blurb, navigation links,
service links, a newsletter widget, social links, and a copyright line;
submitting the newsletter SHALL NOT navigate away.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Guardian" and an about blurb
- **AND** it SHALL show navigation links and service links
- **AND** it SHALL show a "Subscribe newsletter" widget with an email input and social links (GitHub, X, LinkedIn) and a copyright line

#### Scenario: Newsletter submit

- **GIVEN** the newsletter form is displayed
- **WHEN** the user submits the form
- **THEN** the form SHALL NOT navigate away (no backend)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Guardian app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Guardian — Pet Care Template"
