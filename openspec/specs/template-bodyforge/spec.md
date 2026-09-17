# Template: BodyForge (Fitness Center)

## Purpose

BodyForge is a single-page fitness center / gym website in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Fitzone" free template (source: https://colorlib.com/wp/template/fitzone/),
built under a DIFFERENT name (BodyForge), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 gym website with a bold dark hero banner,
multiple parallax background-image sections, featured classes grid, coach
profiles, newsletter discount, BMI calculator, testimonials, and a footer.
Brand color: hot pink/magenta (#f61b55). Fonts: Roboto (body) + Rubik (headings).

## Requirements

### Requirement: Header/Navbar

The system SHALL render a sticky navigation bar with the site name "BodyForge",
navigation links (Home, About Us, Schedule, Trainers, Blog, Contact), and a
"Book Now" CTA button.

#### Scenario: Navbar content

- **GIVEN** the BodyForge page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "BodyForge"
- **AND** the navbar SHALL show links: Home, About Us, Schedule, Trainers, Blog, Contact
- **AND** a "Book Now" CTA button SHALL be visible

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on a mobile viewport
- **WHEN** the user taps the hamburger menu button
- **THEN** the mobile menu SHALL open with all navigation links
- **AND** the toggle button SHALL change to a close icon

### Requirement: Hero banner

The system SHALL render a full-width hero banner with a background image,
large headline text "Feel Good" and "Breath", and a "Become A Member" CTA.

#### Scenario: Hero content

- **GIVEN** the hero section is displayed
- **WHEN** the user views the page
- **THEN** the heading "Feel Good" and "Breath" SHALL be displayed
- **AND** a "Become A Member" button linking to #contact SHALL be visible

### Requirement: About section

The system SHALL render an about section with a heading, descriptive paragraphs,
a "Learn More" button, and an image.

#### Scenario: About content

- **GIVEN** the about section is displayed
- **WHEN** the user scrolls to the about section
- **THEN** the heading "Welcome To Our Best Fitness Club" SHALL be visible
- **AND** two paragraphs of descriptive text SHALL be shown
- **AND** a "Learn More" button linking to #schedule SHALL be displayed

### Requirement: Featured Classes

The system SHALL render a section with three class cards in a grid layout.
Each card SHALL have an image with a hover overlay showing a "Details" button,
and a white footer with title and description.

#### Scenario: Class cards display

- **GIVEN** the featured classes section is displayed
- **WHEN** the user scrolls to the section
- **THEN** three class cards SHALL be displayed
- **AND** each card SHALL show a title and description

### Requirement: Our Service

The system SHALL render a background-image section with three service items,
each with an icon, title, and description.

#### Scenario: Service items

- **GIVEN** the services section is displayed
- **WHEN** the user scrolls to the section
- **THEN** three service items SHALL be displayed with icon, title, and description

### Requirement: Fitness Coaches

The system SHALL render a section with four coach profile cards in a grid.
Each card SHALL show a photo with social icon hover overlay, name, and specialty.

#### Scenario: Coach profiles

- **GIVEN** the coaches section is displayed
- **WHEN** the user scrolls to the section
- **THEN** four coach cards SHALL be displayed
- **AND** each card SHALL show the coach name and specialty

#### Scenario: Social links

- **GIVEN** the coaches section is displayed
- **WHEN** the user hovers over a coach card
- **THEN** social media icons (Facebook, Twitter, LinkedIn) SHALL appear

### Requirement: Discount/Newsletter

The system SHALL render a background-image section with a "25% Discount" heading,
an email input, and a "Subscribe" button.

#### Scenario: Newsletter signup

- **GIVEN** the discount section is displayed
- **WHEN** the user views the section
- **THEN** "25% Discount" heading with pink accent SHALL be visible
- **AND** an email input and "Subscribe" button SHALL be displayed

### Requirement: BMI Calculator

The system SHALL render an interactive BMI calculator with fields for age,
weight, height, gender, and a calculated BMI output.

#### Scenario: BMI calculation

- **GIVEN** the BMI section is displayed
- **WHEN** the user enters weight and height and submits
- **THEN** the BMI value SHALL be calculated and displayed

#### Scenario: Zero values

- **GIVEN** the BMI form is submitted with zero or empty weight/height
- **WHEN** the user clicks "What Is BMI"
- **THEN** the BMI output SHALL remain empty

### Requirement: Client Testimonials

The system SHALL render a section with testimonial cards showing client
photos, quotes, names, and membership titles.

#### Scenario: Testimonials display

- **GIVEN** the testimonials section is displayed
- **WHEN** the user scrolls to the section
- **THEN** three testimonial cards SHALL be displayed
- **AND** each card SHALL show a circular photo, quote, name, and title

### Requirement: CTA Area

The system SHALL render a background-image section with a "Your Gym" heading
and a "Become A Member" button.

#### Scenario: CTA content

- **GIVEN** the CTA section is displayed
- **WHEN** the user scrolls to the section
- **THEN** a "Your Gym" heading and "Become A Member" button SHALL be displayed

### Requirement: Footer

The system SHALL render a footer with three widget columns (About Us, Contact Us,
Newsletter), a copyright line, and social media icons.

#### Scenario: Footer columns

- **GIVEN** the footer is displayed
- **WHEN** the user scrolls to the footer
- **THEN** "About Us", "Contact Us", and "Newsletter" columns SHALL be visible

#### Scenario: Component Dock link

- **GIVEN** the footer is displayed
- **WHEN** the user views the copyright area
- **THEN** a link to "https://www.componentdock.com/" labeled "Component Dock" SHALL be present

### Requirement: Page composition

The system SHALL compose all sections in a single page with correct section order:
Header → Hero → About → Featured Classes → Service → Coaches → Discount → BMI → Testimonials → CTA → Footer.

#### Scenario: Section order

- **GIVEN** the BodyForge page is rendered
- **WHEN** the user scrolls through the page
- **THEN** sections SHALL appear in the correct order
- **AND** no ColorLib references SHALL appear in app code
