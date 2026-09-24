# Template: LifeClinic (Medical & Healthcare Landing)

## Purpose

LifeClinic is a medical & healthcare landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Medilife" template
(preview: https://preview.colorlib.com/theme/medilife/ — medical & healthcare landing),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original (see docs/replication.md):

- Font: Roboto (Google Fonts via `<link>`)
- Primary brand: `#006cff` (blue — CTA hover, active nav, emergency bg)
- Top bar bg: `#081f3e` (dark navy)
- CTA button bg: `#ff0000` (red — emergency CTA)
- Footer bg: `#020f20` (very dark navy)
- Light section bg: `#f5f7f9`
- Body text: `#1d1d1d` / `#57595c`

Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons.

LifeClinic lives in `apps/lifeclinic` and uses shared components from `packages/ui`
(cn, Button).

## Requirements

### Requirement: Top bar

The system SHALL render a dark navy top bar with a welcome message, opening hours, and contact phone number.

#### Scenario: Display welcome and contact info

- **GIVEN** the page is rendered
- **WHEN** the top bar is displayed
- **THEN** it SHALL show "Welcome to LifeClinic" with "LifeClinic" highlighted in blue
- **AND** it SHALL show opening hours "Monday to Saturday - 8am to 10pm"
- **AND** it SHALL show a contact phone number highlighted in blue

### Requirement: Navigation bar

The system SHALL render a semi-transparent blue overlay navbar with logo, navigation links, and a red emergency CTA button. The navbar SHALL become sticky with dark navy background on scroll and SHALL show a hamburger menu on mobile.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the brand name "LifeClinic"
- **AND** it SHALL show nav links: Home, Pages, About Us, Services, News, Contact
- **AND** it SHALL show a red "For emergencies Click here" CTA button

#### Scenario: Sticky dark navbar on scroll

- **GIVEN** the user scrolls past the hero section
- **WHEN** the navbar detects scroll position
- **THEN** the navbar SHALL have a dark navy background with shadow

#### Scenario: Mobile hamburger menu

- **GIVEN** the user is on a viewport less than 999px wide
- **WHEN** the hamburger button is clicked
- **THEN** the mobile nav links SHALL expand vertically

### Requirement: Hero carousel

The system SHALL render a full-width hero carousel with background images, headings, descriptions, and CTAs. The carousel SHALL auto-advance and support manual navigation via arrows and indicator dots.

#### Scenario: Display carousel slides

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a background image from picsum.photos
- **AND** it SHALL show the heading "Medical Services that You can Trust 100%"
- **AND** it SHALL show a descriptive paragraph
- **AND** it SHALL show a "Discover" CTA link

#### Scenario: Carousel navigation

- **GIVEN** the hero carousel is displayed
- **WHEN** the user clicks the next/previous arrows
- **THEN** the carousel SHALL transition to the next/previous slide

#### Scenario: Auto-advance

- **GIVEN** the user stays on the page
- **WHEN** 5 seconds pass without interaction
- **THEN** the carousel SHALL advance to the next slide automatically

#### Scenario: Indicator dots

- **GIVEN** the hero carousel is displayed
- **WHEN** the indicator dots are shown
- **THEN** the active dot SHALL be highlighted in blue and the user can click a dot to navigate

### Requirement: Appointment booking form

The system SHALL render an appointment section with a dark navy left panel containing a form and a right panel with contact information.

#### Scenario: Display appointment form

- **GIVEN** the page is rendered
- **WHEN** the appointment section is displayed
- **THEN** it SHALL show "Make an Appointment" heading
- **AND** it SHALL show a speciality dropdown with options
- **AND** it SHALL show a doctors dropdown with options
- **AND** it SHALL show a "Make an Appointment" submit button

#### Scenario: Contact info alongside form

- **GIVEN** the appointment section is displayed
- **WHEN** the right panel is shown
- **THEN** it SHALL display opening hours, phone number, email, and address

### Requirement: About Us section

The system SHALL render an about section with a heading, description, service link, and a 2x2 grid of service items.

#### Scenario: Display about content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show "We always put our patients first" heading
- **AND** it SHALL show a descriptive paragraph
- **AND** it SHALL show a "View the services +" link
- **AND** it SHALL show 4 service items: The Best Doctors, Baby Nursery, Laboratory, Emergency Room

### Requirement: Cool facts statistics

The system SHALL render a statistics section with 4 counters in a row.

#### Scenario: Display statistics

- **GIVEN** the page is rendered
- **WHEN** the cool facts section is displayed
- **THEN** it SHALL show "5632 Blood donations"
- **AND** it SHALL show "23k Patients"
- **AND** it SHALL show "25 Specialities"
- **AND** it SHALL show "723 Doctors"

### Requirement: Gallery section

The system SHALL render a gallery grid of images with hover effects and a "See More +" overlay button.

#### Scenario: Display gallery images

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show a grid of 6 images from picsum.photos
- **AND** each image SHALL have a hover effect

### Requirement: Features section

The system SHALL render a features section with two columns: a thumbnail image on the left and descriptive content on the right.

#### Scenario: Display features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show a thumbnail image on the left
- **AND** it SHALL show "A new way to treat patients in a revolutionary facility" heading on the right
- **AND** it SHALL show descriptive paragraphs
- **AND** it SHALL show a "View the services +" link

### Requirement: Blog section

The system SHALL render a blog section with "Latest News" heading and a 3-column grid of blog cards with date overlays.

#### Scenario: Display blog cards

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show "Latest News" heading
- **AND** it SHALL show 3 blog cards in a grid
- **AND** each card SHALL have a thumbnail image with date overlay
- **AND** each card SHALL show a title, excerpt, and "3 Comments" link

### Requirement: Emergency helpline section

The system SHALL render a full-width blue banner with emergency contact information and 4 location cards.

#### Scenario: Display emergency contact

- **GIVEN** the page is rendered
- **WHEN** the emergency section is displayed
- **THEN** it SHALL show "For Emergency calls" heading with a phone icon
- **AND** it SHALL show the phone number "+12-823-611-8721"
- **AND** it SHALL show 4 location cards: London, New Castle, Manchester, Bristol

### Requirement: Footer

The system SHALL render a dark navy footer with 4 columns and a bottom bar with copyright and Component Dock link.

#### Scenario: Display footer columns

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a logo and social icons in the first column
- **AND** it SHALL show "Latest News" in the second column
- **AND** it SHALL show a contact form in the third column
- **AND** it SHALL show a newsletter subscription form in the fourth column

#### Scenario: Footer copyright and credit

- **GIVEN** the footer is displayed
- **WHEN** the bottom bar is shown
- **THEN** it SHALL show copyright text
- **AND** it SHALL show "More templates at Component Dock" linking to https://www.componentdock.com/

#### Scenario: Newsletter subscription

- **GIVEN** the newsletter form is displayed
- **WHEN** the user enters an email and clicks subscribe
- **THEN** a confirmation message SHALL be shown
