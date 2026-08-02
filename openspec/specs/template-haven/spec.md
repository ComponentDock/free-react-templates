# Template: Haven (Animals & Pets — Shelter Landing)

## Purpose

Haven is a single-page animal shelter website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Animal
Shelter" website template design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a complete animals-and-pets website template with a
sleek look: a navigation bar, a hero introducing the shelter, an about area,
sections presenting adoptable animals and testimonials, a call to action for
volunteers, and a footer. Haven follows the same structure and adds the repo's
standard dark-mode toggle and accessible patterns.

Haven lives in `apps/haven` and uses shared components from `packages/ui`
(Button, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar
The system SHALL render a navigation bar with the site name "Haven", links to
the page's sections, and a dark-mode toggle button. On small screens the links
SHALL collapse behind a toggleable menu.

#### Scenario: Desktop navigation
- **GIVEN** the Haven page is rendered on a desktop viewport
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Haven", links to Home, About, Adopt, and Volunteers, and a dark-mode toggle button
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
- **THEN** it SHALL contain the headline, the subtitle, and a "Find a pet" button linking to the adopt section
- **AND** it SHALL show a pet illustration with an accessible label

### Requirement: About section with stats
The system SHALL render an About section with a short mission statement and a
set of stats (animals rescued, adoptions, volunteers).

#### Scenario: About content
- **GIVEN** the page is rendered
- **WHEN** the About section is displayed
- **THEN** it SHALL show the mission statement
- **AND** it SHALL show three stats with numeric values and labels

### Requirement: Adopt section
The system SHALL render an Adopt section with a heading and a grid of adoptable
pet cards, each with a name, a short description, and a badge.

#### Scenario: Pet cards grid
- **GIVEN** the page is rendered
- **WHEN** the Adopt section is displayed
- **THEN** it SHALL show the section heading
- **AND** it SHALL show at least three pet cards, each with a name, a description, and a badge

### Requirement: Testimonials section
The system SHALL render a Testimonials section with a heading and a set of
quote cards, each with text and an author name.

#### Scenario: Testimonial cards
- **GIVEN** the page is rendered
- **WHEN** the Testimonials section is displayed
- **THEN** it SHALL show at least three testimonials, each with a quote and an author

### Requirement: Volunteers section
The system SHALL render a Volunteers call-to-action section with a heading, a
short message, and a button that links to the page root.

#### Scenario: Volunteers content
- **GIVEN** the page is rendered
- **WHEN** the Volunteers section is displayed
- **THEN** it SHALL show a heading and a short message
- **AND** it SHALL show a "Become a volunteer" button linking to the page root

### Requirement: Footer
The system SHALL render a footer with the site name, a short tagline, and
social links.

#### Scenario: Footer content
- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Haven" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition
The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render
- **GIVEN** the Haven app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose all sections: the Navbar in the banner landmark, Hero, About, Adopt, Testimonials, and Volunteers in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Haven — Animal Shelter Template"
