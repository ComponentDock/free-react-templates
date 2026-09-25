# Template: Crafty (Art & Creative Agency Landing)

## Purpose

Crafty is a single-page creative agency template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Five Star"
template (art/crafting/acting website), built under a DIFFERENT name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Design tokens captured from the original:

- Brand color `#f5204b` (red/rose) — buttons, links, highlights
- Typeface: Poppins (Google Fonts via `<link>`)
- Body text `#777777` (muted), headings `#222222` (dark)
- Button: primary-btn with white text on `#f5204b` bg, hover inverts to
  white bg + `#f5204b` text
- Overlay: dark (`#0f0f0f` with opacity) on banner, video, carousel areas
- Section padding: `100px 0 70px 0`
- Footer: dark bg, 4 columns

Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons.

Crafty lives in `apps/crafty` and uses shared components from `packages/ui`.

## Design reference (replication findings)

- **Original:** ColorLib "Five Star". Free art/crafting/acting website template
  for creatives (artists, craftsman, actors, musicians, dancers, tattoo artists).
  Source: https://colorlib.com/wp/template/five-star/
- **Preview URL:** https://preview.colorlib.com/theme/five-star/
- **Fonts:** Poppins (Google Fonts), loaded via `<link>`.
- **Icons:** the original uses custom SVG vector illustrations — replaced with
  `lucide-react` equivalents; no icon font files copied.
- **Section order (1:1 from live DOM):**
  1. Navbar — Logo 'Crafty' + nav links (Home, Generic, Elements)
  2. Hero/Banner — Fullscreen dark overlay, 'Crafting Best Experience' h1,
     'Art and Crafting / Acting and Philosophy' subtitle, "View Details" button
  3. Experience section — Two images left, content right: 'From the root of
     experience / We dig out the best talent' h2, description text, View Details button
  4. Carousel/Service — Dark overlay, testimonial carousel with prev/next arrows
  5. Services grid — 4 centered cards with icons (Vector Illustration ×4)
     in 4-column grid
  6. Video section — Dark bg, video thumbnail left with play button,
     'From the root of experience We dig out the best talent' text right
  7. Services horizontal — 3 horizontal cards with icons, row layout
  8. Contact section — Address/Email/Phone left, contact form (name, email,
     message, send) right
  9. Footer — Dark bg, 4 cols: About Agency links, Newsletter signup,
     Instafeed (8 images), social icons. Bottom: copyright + Component Dock link

## Requirements

### Requirement: Navbar

The system SHALL render a sticky navbar with the site logo "Crafty" on the left
and navigation links (Home, Generic, Elements) on the right. The navbar SHALL
support a mobile hamburger menu.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "Crafty" as a link
- **AND** it SHALL show links to Home, Generic, and Elements

#### Scenario: Mobile menu

- **GIVEN** the page is rendered
- **WHEN** the user presses the hamburger toggle
- **THEN** the mobile menu SHALL become visible and the toggle SHALL report
  `aria-expanded="true"`
- **AND** pressing the toggle again SHALL hide the menu
- **AND** clicking a mobile link SHALL close the menu

### Requirement: Hero / Banner

The system SHALL render a fullscreen hero section with a dark overlay
(`#0f0f0f` with opacity), a large heading "Crafting Best Experience", a
subtitle "Art and Crafting / Acting and Philosophy", and a "View Details"
button with the primary brand style.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero banner is displayed
- **THEN** it SHALL show the heading "Crafting Best Experience" (h1)
- **AND** it SHALL show the subtitle "Art and Crafting / Acting and Philosophy"
- **AND** it SHALL show a "View Details" button with white text on `#f5204b`
  background

#### Scenario: Hero overlay

- **GIVEN** the page is rendered
- **WHEN** the hero banner is displayed
- **THEN** the banner background SHALL have a dark overlay (`#0f0f0f` with
  opacity) over the background image

### Requirement: Experience section

The system SHALL render an experience section with two images on the left side
and content on the right side including a heading, description text, and a
"View Details" button.

#### Scenario: Experience content

- **GIVEN** the page is rendered
- **WHEN** the experience section is displayed
- **THEN** it SHALL show two images on the left side
- **AND** it SHALL show the heading "From the root of experience" (h2)
- **AND** it SHALL show the subheading "We dig out the best talent"
- **AND** it SHALL show a descriptive paragraph
- **AND** it SHALL show a "View Details" button with primary brand style

### Requirement: Carousel / Testimonials

The system SHALL render a carousel section with a dark overlay background and
testimonial slides with previous/next navigation arrows.

#### Scenario: Carousel display

- **GIVEN** the page is rendered
- **WHEN** the carousel section is displayed
- **THEN** it SHALL show a testimonial slide with content
- **AND** it SHALL have a dark overlay background (`#0f0f0f` with opacity)

#### Scenario: Carousel navigation

- **GIVEN** the carousel section is displayed
- **WHEN** the user clicks the previous arrow
- **THEN** the carousel SHALL navigate to the previous slide
- **AND** when the user clicks the next arrow
- **THEN** the carousel SHALL navigate to the next slide

### Requirement: Services grid

The system SHALL render a services section with 4 centered service cards in a
4-column grid layout. Each card SHALL display an icon (vector illustration)
and a service title.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services grid is displayed
- **THEN** it SHALL contain 4 service cards
- **AND** each card SHALL show an icon (replaced by lucide-react equivalent)
- **AND** each card SHALL show a service title

#### Scenario: Services layout

- **GIVEN** the page is rendered
- **WHEN** the services grid is displayed
- **THEN** the cards SHALL be arranged in a 4-column grid
- **AND** each card SHALL be centered within its column

### Requirement: Video section

The system SHALL render a video section with a dark background, a video
thumbnail with a play button on the left, and descriptive text on the right.

#### Scenario: Video content

- **GIVEN** the page is rendered
- **WHEN** the video section is displayed
- **THEN** it SHALL show a video thumbnail image on the left
- **AND** it SHALL show a play button overlay on the thumbnail
- **AND** it SHALL show the heading "From the root of experience" on the right
- **AND** it SHALL show the subheading "We dig out the best talent" on the
  right
- **AND** it SHALL show a descriptive paragraph on the right

#### Scenario: Video section styling

- **GIVEN** the page is rendered
- **WHEN** the video section is displayed
- **THEN** the section background SHALL be dark (`#0f0f0f` or equivalent)

### Requirement: Services horizontal

The system SHALL render a second services section with 3 horizontal service
cards in a row layout. Each card SHALL display an icon and a service title.

#### Scenario: Horizontal services content

- **GIVEN** the page is rendered
- **WHEN** the horizontal services section is displayed
- **THEN** it SHALL contain 3 service cards
- **AND** each card SHALL show an icon (replaced by lucide-react equivalent)
- **AND** each card SHALL show a service title

#### Scenario: Horizontal services layout

- **GIVEN** the page is rendered
- **WHEN** the horizontal services section is displayed
- **THEN** the cards SHALL be arranged in a single row (3-column layout)

### Requirement: Contact section

The system SHALL render a contact section with contact information on the left
(address, email, phone) and a contact form on the right (name, email, message
fields and a send button).

#### Scenario: Contact information

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show the heading "Contact Us" (h2)
- **AND** it SHALL show an address on the left
- **AND** it SHALL show an email address on the left
- **AND** it SHALL show a phone number on the left

#### Scenario: Contact form

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show a form on the right with fields for name, email,
  and message
- **AND** the form SHALL have a "Send" submit button with primary brand style
- **AND** the send button SHALL have white text on `#f5204b` background

### Requirement: Footer

The system SHALL render a dark footer with 4 columns: About Agency links,
Newsletter signup, Instafeed grid (8 images), and social icons. A bottom bar
SHALL show copyright text and a link to Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a dark background
- **AND** it SHALL show an "About Agency" column with links
- **AND** it SHALL show a "Newsletter" column with an email signup form
- **AND** it SHALL show an "Instafeed" column with 8 images
- **AND** it SHALL show a social icons column
- **AND** it SHALL show a copyright notice in the bottom bar
- **AND** it SHALL link to https://www.componentdock.com/ with text
  "Component Dock"

### Requirement: Page composition

The system SHALL compose all sections in order (Navbar, HeroBanner, Experience,
Carousel, ServicesGrid, VideoSection, ServicesHorizontal, Contact, Footer) and
set the document title.

#### Scenario: Full page render

- **GIVEN** the Crafty app is rendered
- **WHEN** the page loads
- **THEN** all sections SHALL be present in the correct order
- **AND** the document title SHALL be "Crafty — Art & Creative Agency Template"
