# Template: Glissade (Creative Agency)

## Purpose

Glissade is a single-page creative agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Bobsled" design, built under the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

- **Source slug:** `bobsled`
- **ColorLib page:** https://colorlib.com/wp/template/bobsled/
- **Preview URL:** https://preview.colorlib.com/theme/bobsled/
- **Package:** `@free-react-templates/glissade`
- **Surge target:** `glissade.free.componentdock.com`

## Design reference (replication findings)

- **Original:** ColorLib "Bobsled" — free creative agency website template
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/bobsled/`
- **Section order (1:1):**
  1. Navbar — logo left, nav links (Home, Generic, Elements) right, hamburger on mobile
  2. Hero — full-width gradient background (#3e69fe → #4cd4e3), white headline + subtext + "Get Started" CTA button
  3. Working Process — centered title "Our Working Process", 4 steps (Researching → Wireframing → Prototyping → Final Design) with icon boxes and arrow connectors
  4. Features — gradient background (#3e69fe → #4cd4e3), centered title "Our Exclusive Features", 3 feature cards with icon + description + button
  5. Remarkable Works — white background, centered title "Remarkable Works", 3 project cards with image, title, and "View Details" button; cards have box-shadow
  6. Story — background image with overlay, heading "From the part of beginning", descriptive text + "Read More" button
  7. Newsletter — light gray (#f9f9ff) background, centered title "Subscribe for our Newsletter", email input + submit button
  8. Contact Form — gradient background (#3e69fe → #4cd4e3), centered white title "Keep in Touch" + subtitle, form with name/email/message fields and submit button
  9. Footer Widgets — 3 columns: Address, Email Address, Phone Number
  10. Footer Bottom — copyright text + social icon links (Facebook, Twitter, Dribbble, Behance) + Component Dock link

- **Design tokens:**
  - Brand gradient: #3e69fe → #4cd4e3 (0deg bottom-to-top)
  - Font: Poppins (weights 300, 500, 600)
  - Button: border-radius 20px, transparent bg, white border, gradient on hover
  - Card shadow: 0px 15px 50px rgba(0,0,0,0.1)
  - Section padding: 100px 0
  - Neutral text: #777777
  - Dark text: #222222
  - Light bg: #f9f9ff
  - Border: #eee

## Requirements

### Requirement: Navbar

The system SHALL render a top navigation bar with the site name "Glissade",
nav links (Home, Generic, Elements), and a mobile hamburger menu.

#### Scenario: Navbar content

- **GIVEN** the Glissade page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Glissade"
- **AND** it SHALL show navigation links "Home", "Generic", and "Elements"
- **AND** on mobile, a hamburger menu button SHALL be visible

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on mobile viewport
- **WHEN** the hamburger button is clicked
- **THEN** the mobile navigation menu SHALL expand with links
- **AND** clicking again SHALL collapse the menu

### Requirement: Hero

The system SHALL render a full-width hero section with a blue-to-cyan
gradient background, a headline, a description paragraph, and a "Get
Started" CTA button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a gradient background from #3e69fe to #4cd4e3
- **AND** it SHALL display a headline in white uppercase text
- **AND** it SHALL show a "Get Started" pill-shaped button

### Requirement: Working Process

The system SHALL render a "Our Working Process" section with four
process steps displayed horizontally with icons and arrow connectors.

#### Scenario: Process steps

- **GIVEN** the page is rendered
- **WHEN** the working process section is displayed
- **THEN** the heading "Our Working Process" SHALL be visible
- **AND** 4 steps SHALL be displayed: "1. Researching", "2. Wireframing", "3. Prototyping", "4. Final Design"
- **AND** each step SHALL have an icon above its label

### Requirement: Features

The system SHALL render an "Our Exclusive Features" section on a
gradient background with three feature cards.

#### Scenario: Feature cards

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** the heading "Our Exclusive Features" SHALL be visible
- **AND** 3 feature cards SHALL be displayed: "Creative Design", "Appropriate UX", "Super Clean Code"
- **AND** each card SHALL have an image, title, description, and a "Read More" button
- **AND** the section SHALL have a blue-to-cyan gradient background

### Requirement: Remarkable Works

The system SHALL render a "Remarkable Works" section with three
project cards that have images, titles, and descriptions.

#### Scenario: Project cards

- **GIVEN** the page is rendered
- **WHEN** the remarkable works section is displayed
- **THEN** the heading "Remarkable Works" SHALL be visible
- **AND** 3 project cards SHALL be displayed with alternating layouts
- **AND** each card SHALL have a "View Project" button
- **AND** cards SHALL have a box shadow

### Requirement: Story

The system SHALL render a story section with a background image,
a heading, descriptive text, and a "Get Started" button.

#### Scenario: Story content

- **GIVEN** the page is rendered
- **WHEN** the story section is displayed
- **THEN** it SHALL show the heading "From the part of beginning"
- **AND** it SHALL display descriptive text
- **AND** it SHALL show a "Get Started" button

### Requirement: Newsletter

The system SHALL render a newsletter subscription section with an
email input and a submit button.

#### Scenario: Newsletter form

- **GIVEN** the page is rendered
- **WHEN** the newsletter section is displayed
- **THEN** the heading "Subscribe for our Newsletter" SHALL be visible
- **AND** an email input field SHALL be displayed
- **AND** a submit button SHALL be displayed

#### Scenario: Newsletter validation

- **GIVEN** the newsletter form is rendered
- **WHEN** the user submits with an invalid email
- **THEN** a validation error message SHALL appear

#### Scenario: Newsletter success

- **GIVEN** the newsletter form is rendered
- **WHEN** the user submits with a valid email
- **THEN** a confirmation message SHALL appear

### Requirement: Contact Form

The system SHALL render a contact form section on a gradient background
with name, email, and message fields.

#### Scenario: Contact form fields

- **GIVEN** the page is rendered
- **WHEN** the contact form section is displayed
- **THEN** the heading "Keep in Touch" SHALL be visible
- **AND** input fields for name, email, and message SHALL be displayed
- **AND** a "Send Message" button SHALL be displayed

#### Scenario: Contact form validation

- **GIVEN** the contact form is rendered
- **WHEN** the user submits without filling required fields
- **THEN** validation error messages SHALL appear for empty fields

#### Scenario: Contact form submission

- **GIVEN** the contact form is rendered
- **WHEN** the user fills all fields with valid data and submits
- **THEN** a success message SHALL be displayed

### Requirement: Footer

The system SHALL render a footer with three widget columns (Address,
Email Address, Phone Number), social media links, and a Component Dock
link.

#### Scenario: Footer widgets

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** 3 widget columns SHALL be visible: Address, Email Address, Phone Number
- **AND** email addresses SHALL be displayed as mailto links
- **AND** phone numbers SHALL be displayed as tel links

#### Scenario: Social links and Component Dock

- **GIVEN** the page is rendered
- **WHEN** the footer bottom is displayed
- **THEN** social icon links for Facebook, Twitter, Dribbble, and Behance SHALL be present
- **AND** a link to https://www.componentdock.com/ labeled "Component Dock" SHALL be present

### Requirement: Page composition

The system SHALL render all sections in the correct order as a single
page application.

#### Scenario: Full page render

- **GIVEN** the Glissade app is loaded
- **WHEN** the page renders
- **THEN** all sections SHALL be present in order: Navbar, Hero, WorkingProcess, Features, RemarkableWorks, Story, Newsletter, Contact, Footer
- **AND** no ColorLib references SHALL appear in any app source code

#### Scenario: Design tokens

- **GIVEN** the page is rendered
- **WHEN** visual styles are applied
- **THEN** the font family SHALL be Poppins
- **AND** brand colors SHALL use the gradient #3e69fe → #4cd4e3
- **AND** buttons SHALL have border-radius 20px (pill shape)
