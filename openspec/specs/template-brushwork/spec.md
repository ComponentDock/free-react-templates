## Purpose

Recreate the ColorLib "Five Star" art and crafting website template as a React
19 + Tailwind CSS 4 + TypeScript application named "Brushwork". The template
features a fullscreen hero banner, experience showcase, testimonial carousel,
services grid, video section, contact form, and a newsletter footer.

## Requirements

### Requirement: Navbar navigation

The template SHALL render a sticky top navigation bar with the brand name
"Brushwork", navigation links (Home, About, Services, Contact), and a mobile
hamburger menu toggle.

#### Scenario: Desktop navbar

- **WHEN** the page loads on a wide viewport
- **THEN** the navigation links "Home", "About", "Services", "Contact" are visible
- **AND** the brand name "Brushwork" is displayed

#### Scenario: Mobile hamburger toggle

- **WHEN** the user clicks the hamburger menu button
- **THEN** the mobile navigation menu is expanded

### Requirement: Hero banner

The template SHALL render a fullscreen hero section with a dark overlay on a
background image, a heading "Crafting Best Experience", and a subtitle.

#### Scenario: Hero content

- **WHEN** the hero section renders
- **THEN** the heading "Crafting Best Experience" is visible
- **AND** the subtitle "Art and Crafting / Acting and Philosophy" is visible

### Requirement: Experience section

The template SHALL render an experience section with two images on the left
and descriptive content with a "View Details" button on the right.

#### Scenario: Experience content

- **WHEN** the experience section renders
- **THEN** the heading "From the root of experience We dig out the best talent" is visible
- **AND** a "View Details" button is present

### Requirement: Testimonials carousel

The template SHALL render a dark-background testimonial carousel with
prev/next navigation arrows to cycle through slides.

#### Scenario: Testimonial navigation

- **WHEN** the testimonials section renders
- **THEN** the first testimonial heading is visible
- **AND** prev/next arrow buttons are present

### Requirement: Services grid

The template SHALL render a 4-column services grid with icon cards for
Vector Illustration services.

#### Scenario: Services display

- **WHEN** the services section renders
- **THEN** 4 service cards are visible with "Vector Illustration" titles

### Requirement: Video showcase

The template SHALL render a dark-background video section with a play button
placeholder and descriptive text.

#### Scenario: Video content

- **WHEN** the video section renders
- **THEN** a play button is visible
- **AND** the heading about experience/talent is displayed

### Requirement: Compact services

The template SHALL render a 3-column compact services section with horizontal
icon + text cards.

#### Scenario: Compact services display

- **WHEN** the compact services section renders
- **THEN** 3 service cards are visible with icons and descriptions

### Requirement: Contact form

The template SHALL render a contact section with address/email/phone info on
the left and a validated contact form on the right.

#### Scenario: Contact form submission

- **WHEN** the user fills in name, email, and message fields and submits
- **THEN** the form shows a success confirmation message

#### Scenario: Contact form validation

- **WHEN** the user submits the contact form with an invalid email
- **THEN** a validation error message is displayed

### Requirement: Footer with Component Dock

The template SHALL render a dark footer with three columns (About links,
Newsletter signup, Instafeed grid) and a bottom copyright bar linking to
Component Dock.

#### Scenario: Footer content

- **WHEN** the footer renders
- **THEN** the newsletter signup form is present
- **AND** a link to "https://www.componentdock.com/" with text "Component Dock" is visible

#### Scenario: Newsletter subscription

- **WHEN** the user enters a valid email and clicks Subscribe
- **THEN** a success message "Thanks for subscribing!" is displayed
