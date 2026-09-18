---
title: Lumen — Creative Agency / Portfolio Template
slug: lumen
colorlib_source: glint
colorlib_url: https://colorlib.com/wp/template/glint/
preview_url: https://preview.colorlib.com/theme/glint/
status: in_progress
---

# Lumen — Creative Agency / Portfolio Template

## Purpose

Recreate the ColorLib "Glint" creative agency portfolio template as a React 19 +
Tailwind CSS 4 + TypeScript app. The design features a dark (near-black)
background with green (#39b54a) accent, Montserrat headings, and Lora body
text. Sections: hero, about with stats, services grid, portfolio works,
clients, contact form, and footer.

## Requirements

### Requirement: Navbar renders with logo and navigation links

The template SHALL render a fixed top navbar with the logo "Lumen" and links
to Home, About, Services, Works, Clients, and Contact. On mobile, a hamburger
button SHALL toggle the navigation menu.

#### Scenario: Desktop navbar shows all links

- **WHEN** the page loads on a wide viewport
- **THEN** the navbar displays the "Lumen" logo and links to all six sections

#### Scenario: Mobile hamburger toggles menu

- **WHEN** the user clicks the hamburger button on a narrow viewport
- **THEN** the mobile menu opens with all navigation links visible
- **WHEN** the user clicks a link in the mobile menu
- **THEN** the menu closes

### Requirement: Hero section with headline, subtitle, CTAs, and social links

The hero section SHALL display "Welcome to Lumen" as the headline, a subtitle
describing the agency, two CTA buttons ("Start a Project" and "More About Us"),
social media icon links, and a scroll-down indicator.

#### Scenario: Hero renders headline and CTAs

- **WHEN** the hero section renders
- **THEN** the headline "Welcome to Lumen" is visible
- **AND** both CTA buttons are present and link to the correct sections

### Requirement: About section with heading and stat counters

The about section SHALL display "Hello There" / "We Are Lumen" headings,
a description paragraph, and three stat counters: Awards Received, Cups of
Coffee, and Projects Completed.

#### Scenario: About shows stats

- **WHEN** the about section renders
- **THEN** all three stat counters display their labels and values

### Requirement: Services section with six service cards

The services section SHALL display six service items: Brand Identity,
Illustration, Marketing, Web Design, Packaging Design, and Web Development.
Each card SHALL have an icon, title, and description.

#### Scenario: All six services render

- **WHEN** the services section renders
- **THEN** all six service titles are visible with their descriptions

### Requirement: Works section with portfolio grid

The works section SHALL display six portfolio items in a responsive grid.
Each item SHALL show an image with a hover overlay displaying the project title.

#### Scenario: Works grid displays all items

- **WHEN** the works section renders
- **THEN** six portfolio images with correct alt text are visible

### Requirement: Clients section with client name grid

The clients section SHALL display a grid of client names with the heading
"Our Clients" and a subtitle about honoring partnerships.

#### Scenario: All client names render

- **WHEN** the clients section renders
- **THEN** all six client names are visible

### Requirement: Contact section with form and contact info

The contact section SHALL display a form with name, email, subject, and
message fields, plus a contact info sidebar showing address, email, and
phone. The form SHALL validate required fields before submission.

#### Scenario: Contact form submits on valid input

- **WHEN** the user fills in name, email, and message and clicks Send Message
- **THEN** a success message is displayed

#### Scenario: Contact form blocks on missing fields

- **WHEN** the user clicks Send Message without filling required fields
- **THEN** no success message is shown

### Requirement: Footer with Component Dock link and back-to-top

The footer SHALL display the logo, navigation links, copyright, a "Component
Dock" attribution linking to https://www.componentdock.com/, and a back-to-top
button.

#### Scenario: Footer links to Component Dock

- **WHEN** the footer renders
- **THEN** a link to https://www.componentdock.com/ with text "Component Dock" is present
- **AND** a back-to-top link is present
