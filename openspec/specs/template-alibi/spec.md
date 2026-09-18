# Template: Alibi (Lawyer Landing)

## Purpose

Alibi is a single-page lawyer landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Marco 2"
design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky dark navigation bar with the site name
"Alibi", navigation links (Home, About Me, Practice Areas, Legal Team, Blog,
Contact), a "Contact Me" CTA button, and a mobile hamburger toggle.

#### Scenario: Navbar content

- **GIVEN** the Alibi page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the brand name "Alibi" linked to #home
- **AND** the navbar SHALL show links for Home, About Me, Practice Areas, Legal Team, Blog, and Contact
- **AND** the navbar SHALL show a "Contact Me" button linking to #contact

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered in a mobile viewport
- **WHEN** the user clicks the mobile menu toggle button
- **THEN** the mobile navigation menu SHALL open
- **AND** clicking a link in the mobile menu SHALL close the menu

### Requirement: Hero section

The system SHALL render a split hero section with text on the left ("Hello,
I'm Marco Sebastián", "A Corporate Lawyer", Contact Me button) and a
background image with a play button overlay on the right.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** the hero SHALL show heading text "Marco Sebastián"
- **AND** the hero SHALL show heading text "A Corporate Lawyer"
- **AND** the hero SHALL show a "Contact Me" button linking to #contact
- **AND** the hero SHALL display a background image from picsum.photos

### Requirement: Consultation form

The system SHALL render an inline consultation form with Name, Email, and
Categories fields and a Contact submit button.

#### Scenario: Form fields

- **GIVEN** the page is rendered
- **WHEN** the consultation form is displayed
- **THEN** the form SHALL contain a Name text input
- **AND** the form SHALL contain an Email Address input
- **AND** the form SHALL contain a Categories dropdown with options
- **AND** the form SHALL contain a Contact submit button

#### Scenario: Category selection

- **GIVEN** the form is displayed
- **WHEN** the user selects "Criminal Law" from the Categories dropdown
- **THEN** the dropdown value SHALL be "Criminal Law"

### Requirement: Services section

The system SHALL render a services section with three service cards: Legal
Consultation, Trial Representation, and Case Review.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** the section SHALL show a "Our Services" heading
- **AND** the section SHALL contain three cards with titles "Legal Consultation", "Trial Representation", and "Case Review"

### Requirement: Counter section

The system SHALL render a counter/stats section with four stat blocks:
18 Years Experience, 450 Case Won, 56 Practice Areas, 1,000+ Happy Clients.

#### Scenario: Stats display

- **GIVEN** the page is rendered
- **WHEN** the counter section is displayed
- **THEN** the section SHALL show the value "18" with label "Years Experience"
- **AND** the section SHALL show "450" with label "Case Won"
- **AND** the section SHALL show "56" with label "Practice Areas"
- **AND** the section SHALL show "1,000+" with label "Happy Clients"

### Requirement: Practice areas section

The system SHALL render a practice areas section with three image cards:
Family Law, Drug Offense, and Assault.

#### Scenario: Practice area cards

- **GIVEN** the page is rendered
- **WHEN** the practice areas section is displayed
- **THEN** the section SHALL show a "Practice Areas" heading
- **AND** the section SHALL contain three cards for "Family Law", "Drug Offense", and "Assault"
- **AND** each card SHALL display an image from picsum.photos

### Requirement: Testimonials section

The system SHALL render a testimonials section with a carousel of three
testimonials, each showing a quote, star rating, avatar, name, and role.

#### Scenario: First testimonial

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** the section SHALL show a "Testimonials" heading
- **AND** the first testimonial from "David Williams" SHALL be visible

#### Scenario: Switch testimonial

- **GIVEN** the testimonials section is displayed
- **WHEN** the user clicks the avatar button for "Jennifer Martinez"
- **THEN** the testimonial from "Jennifer Martinez" SHALL be displayed

### Requirement: Contact CTA section

The system SHALL render a contact CTA section with four social media links:
Twitter, Facebook, Google, and Instagram.

#### Scenario: Social links

- **GIVEN** the page is rendered
- **WHEN** the contact CTA section is displayed
- **THEN** the section SHALL contain links for Twitter, Facebook, Google, and Instagram

### Requirement: Blog section

The system SHALL render a blog section with three blog entry cards, each
showing an image, date, title, excerpt, and a Read More link.

#### Scenario: Blog entries

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** the section SHALL show a "Latest From Blog" heading
- **AND** the section SHALL contain three blog entries with titles
- **AND** each entry SHALL have a "Read More" link

### Requirement: Footer

The system SHALL render a dark four-column footer with About Me, Useful Links,
Quick Links, and Have a Questions? sections. The footer SHALL link to
Component Dock (https://www.componentdock.com/) and show a copyright line
with the current year.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL show "About Me" section
- **AND** the footer SHALL show "Useful Links" and "Quick Links" sections
- **AND** the footer SHALL show "Have a Questions?" with contact info
- **AND** the footer SHALL contain a link to https://www.componentdock.com/ with target="_blank"
- **AND** the footer SHALL show a copyright line containing the current year
