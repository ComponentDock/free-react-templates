# Template: Idcraft (Personal vCard & Resume)

## Purpose

Idcraft is a single-page personal vCard / resume template — it is an original
React recreation of the ColorLib free "Vcard" template
(preview: https://preview.colorlib.com/theme/vcard/index-onepage.html),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original (see docs/replication.md):

- Brand amber `#ffb016` (buttons, section lines, active states, name)
- Heading color `#252525`, body text `#828282`
- Light background `#f3f5f8`, dark overlay `rgba(2,3,28,0.9)`
- Typeface: Poppins (Google Fonts via `<link>`)
- Solid amber buttons with no border-radius, bold, white text
- Hero: full-height background image with dark overlay, large amber name
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Idcraft lives in `apps/idcraft` and uses shared components from `packages/ui`
(Button, cn).

## Requirements

### Requirement: Navbar

The system SHALL render a transparent navbar with nav links (About, Skills,
Services, Portfolio, Contact) and an "Available for freelance work" CTA button.
The navbar SHALL become sticky with a white background and box shadow on scroll.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show links to About, Skills, Services, Portfolio, and Contact
- **AND** it SHALL show an "Available for freelance work" button

#### Scenario: Mobile navigation

- **GIVEN** the page is rendered on a small screen
- **WHEN** the user clicks the hamburger toggle
- **THEN** the mobile menu SHALL become visible
- **AND** pressing the toggle again SHALL hide the menu

### Requirement: Hero section

The system SHALL render a full-height hero section with a background image,
a dark overlay, the greeting "Hello I'm", the name "Maria Smith" in large
amber text, the subtitle "Digital Designer & Illustrator", contact info
(email, phone, website), and social icons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is visible
- **THEN** it SHALL display "Hello I'm"
- **AND** it SHALL display "Maria Smith" in amber
- **AND** it SHALL display "Digital Designer & Illustrator"
- **AND** it SHALL display email, phone, and website contact info
- **AND** it SHALL display social media icons

### Requirement: About section

The system SHALL render an about section with two columns: a heading
"Creative & Committed" on the left, and a descriptive paragraph on the right.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is visible
- **THEN** it SHALL display the heading "Creative & Committed"
- **AND** it SHALL display descriptive paragraph text

### Requirement: Skills section

The system SHALL render a skills section with 4 circular progress indicators:
Photos Taken (75%), Digital Design (83%), HTML Coding (25%), Illustrations (95%),
each with a title and description.

#### Scenario: Skills display

- **GIVEN** the page is rendered
- **WHEN** the skills section is visible
- **THEN** it SHALL display 4 skill items with percentage labels
- **AND** each item SHALL show a title and description

### Requirement: Services section

The system SHALL render a services section with 6 service cards on a dark
overlay background: Digital Design, Illustrations, Web Design, Logo Design,
Brand Identity, and Motion Graphics. Each card SHALL have an icon and
description text.

#### Scenario: Services grid

- **GIVEN** the page is rendered
- **WHEN** the services section is visible
- **THEN** it SHALL display 6 service items with titles and descriptions

### Requirement: Portfolio section

The system SHALL render a portfolio section with a filter bar
(Digital Design, Web Design, Brand Identity, Illustrations, Motion Graphics)
and a 4-column image gallery with hover overlays showing title, category,
and a zoom icon.

#### Scenario: Portfolio gallery

- **GIVEN** the page is rendered
- **WHEN** the portfolio section is visible
- **THEN** it SHALL display filter buttons
- **AND** it SHALL display portfolio items with images

### Requirement: Cool facts section

The system SHALL render a cool facts section on a dark background with 4
stat columns: Projects Completed (10+), Happy Clients (87+), Awards Won (10+),
and Coffee per day (7+).

#### Scenario: Facts stats

- **GIVEN** the page is rendered
- **WHEN** the cool facts section is visible
- **THEN** it SHALL display 4 fact items with numbers

### Requirement: Testimonials section

The system SHALL render a testimonials section with quote cards containing
a heading, testimonial text, author image, name, and role.

#### Scenario: Testimonials display

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is visible
- **THEN** it SHALL display at least one testimonial with heading, text,
  and author info

### Requirement: Contact section

The system SHALL render a contact section with a two-column layout: a
contact form (Name, Email, Subject, Message fields + Send Message button)
on the left, and a map placeholder on the right. Below SHALL be a contact
info bar with Address, Phone, and Email.

#### Scenario: Contact form

- **GIVEN** the page is rendered
- **WHEN** the contact section is visible
- **THEN** the form SHALL have Name, Email, Subject, and Message fields
- **AND** a "Send Message" button SHALL be visible
- **AND** contact information (Address, Phone, Email) SHALL be displayed

### Requirement: Footer

The system SHALL render a footer with a link to https://www.componentdock.com/
branded as "Component Dock".

#### Scenario: Footer link

- **GIVEN** the page is rendered
- **WHEN** the footer is visible
- **THEN** it SHALL contain a link to componentdock.com
