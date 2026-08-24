---
name: template-nexus
description: >
  Recreation of ColorLib "Pageone" template as the "Nexus" web agency landing page.
  Source: https://preview.colorlib.com/theme/pageone/
  Design tokens: Poppins font, #ec1e64 brand, #252837 text, zero-radius buttons.
version: 1.0
status: draft
---

# Template: Nexus (Web Agency Landing Page)

## Purpose

Nexus is a multi-section web agency landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Pageone"
website template design (source: https://colorlib.com/wp/template/pageone/),
built under a DIFFERENT name (Nexus — connection, hub) per the monorepo naming
mandate, with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design tokens (replication findings)

- **Font:** Poppins (Google Fonts) — body 14px, hero heading 80px, cards 20px
- **Primary color:** `#ec1e64` (hot pink/magenta — CTA buttons, active states, team name)
- **Text color:** `#252837` (body text, headings)
- **Button:** border-radius 0, uppercase, font-size 10px, font-weight 700, letter-spacing .1rem
- **Cards:** white bg, subtle hover shadow
- **Service hover:** box-shadow offset in brand color (#ec1e64)
- **Client cards:** white bg, 30px padding, hover shadow, client name in brand color

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky top navigation bar with the logo "Nexus.",
anchor links to page sections (Home, Services, Process, Clients, About, Contact),
and a mobile hamburger menu.

#### Scenario: Navbar content

- **GIVEN** the Nexus page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the logo text "Nexus."
- **AND** the navbar SHALL show links for Home, Services, Process, Clients, About, and Contact

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on a narrow viewport
- **WHEN** the user opens the mobile menu
- **THEN** the navigation links SHALL be revealed in a menu
- **AND** the menu SHALL be dismissible via a close button

### Requirement: Hero section

The system SHALL render a hero section with a large heading, primary category
pills, and secondary pills.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "We are web agency based in Los Angeles, CA"
- **AND** it SHALL show primary pills: Technology, Marketing, Product & Design
- **AND** it SHALL show secondary pills: Strategic Consulting, Business Synergies, Fundraising

### Requirement: Services section

The system SHALL render a services section with a heading, CTA button, and four
service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Services"
- **AND** it SHALL show a "Get in Touch" CTA button
- **AND** it SHALL show four cards: Graphic Design, Web Development, Branding, Iconography

### Requirement: Process section

The system SHALL render a process section with a heading, CTA button, and six
numbered steps.

#### Scenario: Process content

- **GIVEN** the page is rendered
- **WHEN** the process section is displayed
- **THEN** it SHALL show the heading "Our process"
- **AND** it SHALL show a "Learn More" CTA button
- **AND** it SHALL show six steps: Information Gathering, Planning, Design, Development, Testing and Delivery, Maintenance

### Requirement: Clients section

The system SHALL render a clients section with a heading and five client logo cards.

#### Scenario: Clients content

- **GIVEN** the page is rendered
- **WHEN** the clients section is displayed
- **THEN** it SHALL show the heading "Our clients"
- **AND** it SHALL show client cards: Goldline, Foxhub, Ideaa, Nirastate, Treva

### Requirement: Features section

The system SHALL render a features section with a heading and six feature cards.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show the heading "Features"
- **AND** it SHALL show six feature cards: Illustration, 24/7 Support, Easy to use, Web development, Intuitive, Documentation

### Requirement: Office and team section

The system SHALL render a team section with office description and team member cards.

#### Scenario: Team content

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the heading "Office and team"
- **AND** it SHALL show subheadings "Our Office" and "Our Team"
- **AND** it SHALL show three team members: Bradley Costa, Chanice Muir, Alisha Ellison
- **AND** each team card SHALL have social media links (Facebook, Twitter, LinkedIn)

### Requirement: Contact section

The system SHALL render a contact section with a form and map embed.

#### Scenario: Contact form

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show the heading "Contact Us"
- **AND** it SHALL show a form with First name, Last name, Email, Message fields
- **AND** it SHALL show a "Send Message" button

#### Scenario: Contact form submission

- **GIVEN** the contact form is filled out
- **WHEN** the user submits the form
- **THEN** a success message SHALL be displayed
- **AND** the form fields SHALL be replaced by the success message

### Requirement: Footer

The system SHALL render a footer with about info, page links, resources, contact
details, and Component Dock attribution.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand "Nexus."
- **AND** it SHALL show Page links: Home, Services, Process, Clients, About
- **AND** it SHALL show Resource links: Documentation, Support, Blog, Careers
- **AND** it SHALL show contact info: email, phone, address
- **AND** it SHALL show a link to Component Dock (https://www.componentdock.com/)
