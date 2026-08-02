# Template: Nuzzle (Pets & Pet Care Landing)

## Purpose

Nuzzle is a single-page pet care website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Anipat"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a cute, modern, and sophisticated pet care website
template: a navigation bar, a hero introducing the service, a services area,
an about section with stats, a testimonials area, and a functional contact
form. Nuzzle follows the same structure and adds the repo's standard dark-mode
toggle and accessible patterns.

Nuzzle lives in `apps/nuzzle` and uses shared components from `packages/ui`
(Button, Card, cn) plus the zod-based validated form pattern established by
Aurora.

## Requirements

### Requirement: Navigation bar
The system SHALL render a navigation bar with the site name "Nuzzle", links to
the page's sections, and a dark-mode toggle button. On small screens the links
SHALL collapse behind a toggleable menu.

#### Scenario: Desktop navigation
- **GIVEN** the Nuzzle page is rendered on a desktop viewport
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Nuzzle", links to Home, Services, About, and Contact, and a dark-mode toggle button
- **AND** the links SHALL scroll to their target sections

#### Scenario: Mobile menu
- **GIVEN** the page is rendered on a mobile viewport
- **WHEN** the user presses the menu toggle
- **THEN** the nav links SHALL become visible
- **AND** pressing the toggle again SHALL hide them

#### Scenario: Dark mode toggle
- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section
The system SHALL render a hero section with a headline, a short subtitle, a
call-to-action button, and a pet illustration with an accessible label.

#### Scenario: Hero content
- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL contain the headline, the subtitle, and a "Book a visit" button linking to the contact section
- **AND** it SHALL show a pet illustration with an accessible label

### Requirement: Services section
The system SHALL render a Services section with a heading and a grid of service
cards, each with a title and a description.

#### Scenario: Services grid
- **GIVEN** the page is rendered
- **WHEN** the Services section is displayed
- **THEN** it SHALL show the section heading
- **AND** it SHALL show at least three service cards, each with a title and a description

### Requirement: About section with stats
The system SHALL render an About section with a short description and a set of
stats (happy pets, years of experience, specialists).

#### Scenario: About content
- **GIVEN** the page is rendered
- **WHEN** the About section is displayed
- **THEN** it SHALL show the description text
- **AND** it SHALL show three stats with numeric values and labels

### Requirement: Testimonials section
The system SHALL render a Testimonials section with a heading and a set of
quote cards, each with text and an author name.

#### Scenario: Testimonial cards
- **GIVEN** the page is rendered
- **WHEN** the Testimonials section is displayed
- **THEN** it SHALL show at least three testimonials, each with a quote and an author

### Requirement: Contact form
The system SHALL render a contact section with a validated form (name, email,
message). Submitting a valid form SHALL show a success message; invalid input
SHALL show field errors and SHALL NOT submit.

#### Scenario: Validation errors
- **GIVEN** the contact form is displayed
- **WHEN** the user submits the form with an empty name, an invalid email, or an empty message
- **THEN** the form SHALL show an error message for each invalid field
- **AND** the success message SHALL NOT be shown

#### Scenario: Successful submission
- **GIVEN** the contact form is displayed
- **WHEN** the user fills in a valid name, email, and message and submits
- **THEN** a success message SHALL be displayed
- **AND** the form fields SHALL be cleared

### Requirement: Footer
The system SHALL render a footer with the site name, a short tagline, and
social links.

#### Scenario: Footer content
- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Nuzzle" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition
The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render
- **GIVEN** the Nuzzle app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose all sections: the Navbar in the banner landmark, Hero, Services, About, Testimonials, and Contact in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Nuzzle — Pet Care Template"
