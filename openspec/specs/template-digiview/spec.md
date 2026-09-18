# Template: DigiView (Digital Agency)

## Purpose

Recreation of the ColorLib **DigiLab** template (`https://colorlib.com/wp/template/digilab/`).
Preview URL: `https://preview.colorlib.com/theme/digilab/`

Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript.

## Requirements

### Requirement: Navigation bar

The system SHALL render a dark navbar with the site name "DigiView", section links (Home, Services, Projects, About, Testimony, Blog, Contact), and a hamburger toggle that opens a mobile menu on small screens.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "DigiView" linking to `#home`
- **AND** it SHALL show links to Home, Services, Projects, About, Testimony, Blog and Contact

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on a mobile viewport
- **WHEN** the user taps the hamburger icon
- **THEN** the navigation links SHALL expand as a vertical menu
- **AND** clicking a link SHALL close the menu

### Requirement: Hero section

The system SHALL render a full-screen hero with a headline containing green-accent words, a descriptive paragraph, a green CTA button, and a large image on the right.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is visible
- **THEN** it SHALL contain a heading with "digital agency" in green
- **AND** it SHALL have a "Get in touch" button linking to `#contact`
- **AND** it SHALL display a hero image

### Requirement: Services section

The system SHALL render 6 service cards on a light background, each with a circular icon, heading, and description.

#### Scenario: Service cards display

- **GIVEN** the user scrolls to the services section
- **WHEN** the section is visible
- **THEN** 6 service cards SHALL be displayed
- **AND** each card SHALL have a circular icon, heading, and description

### Requirement: Projects section

The system SHALL render project cards on a dark overlay background with zoom hover effect.

#### Scenario: Project cards

- **GIVEN** the user scrolls to the projects section
- **WHEN** the section is visible
- **THEN** project cards SHALL be shown in a grid
- **AND** cards SHALL have a zoom hover effect

### Requirement: Stats counter

The system SHALL render animated counters on a dark background that count from 0 to their target values on scroll intersection.

#### Scenario: Counter labels

- **GIVEN** the user scrolls to the counter section
- **WHEN** the section is visible
- **THEN** 4 counter labels SHALL be displayed: Happy Clients, Projects Completed, Team Members, Years Experience
- **AND** the background SHALL be dark

### Requirement: About section

The system SHALL render a two-column about section with heading, descriptive text, a CTA button, and an image.

#### Scenario: About content

- **GIVEN** the user scrolls to the about section
- **WHEN** the section is visible
- **THEN** a heading with "About DigiView" SHALL be displayed
- **AND** a "Learn more" button linking to `#contact` SHALL be present

### Requirement: Process section

The system SHALL render numbered steps with icons, titles, and descriptions.

#### Scenario: Process steps

- **GIVEN** the user scrolls to the process section
- **WHEN** the section is visible
- **THEN** 4 steps SHALL be displayed: Discovery, Design, Development, Launch
- **AND** each step SHALL have a number, icon, title, and description

### Requirement: Clients section

The system SHALL render partner/client logo names on a light background.

#### Scenario: Client logos

- **GIVEN** the user scrolls to the clients section
- **WHEN** the section is visible
- **THEN** 6 client names SHALL be displayed

### Requirement: FAQ section

The system SHALL render an accordion Q&A section where clicking a question toggles its answer.

#### Scenario: FAQ accordion

- **GIVEN** the user scrolls to the FAQ section
- **WHEN** a question is clicked
- **THEN** the answer SHALL toggle open
- **AND** clicking another question SHALL close the previous one

### Requirement: Testimonials section

The system SHALL render a testimonial slider on a dark background with navigation controls.

#### Scenario: Testimonial navigation

- **GIVEN** the user scrolls to the testimonials section
- **WHEN** the section is visible
- **THEN** a testimonial SHALL be displayed with name, role, and text
- **AND** clicking next/previous SHALL cycle through testimonials

### Requirement: Blog section

The system SHALL render 3 blog cards with featured images, titles, and metadata.

#### Scenario: Blog cards

- **GIVEN** the user scrolls to the blog section
- **WHEN** the section is visible
- **THEN** 3 blog cards SHALL be displayed with images, titles, dates, and "Read more" links

### Requirement: Contact section

The system SHALL render a contact form with validation for name, email, subject, and message fields.

#### Scenario: Form validation

- **GIVEN** the user scrolls to the contact section
- **WHEN** the user clicks submit without filling fields
- **THEN** validation errors SHALL appear for name, email, and message
- **WHEN** the user fills all required fields and submits
- **THEN** a success message SHALL be displayed

### Requirement: Footer

The system SHALL render a dark footer with multi-column layout and a "Component Dock" attribution link.

#### Scenario: Footer content

- **GIVEN** the user scrolls to the bottom
- **WHEN** the footer is visible
- **THEN** it SHALL show about, services, help, and contact columns
- **AND** it SHALL include a link to `https://www.componentdock.com/` branded as "Component Dock"
