# Template: Pivot (Personal Developer Portfolio)

## Purpose

Pivot is a single-page personal developer portfolio template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Martin" design (see TEMPLATES.md — line 2526), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a personal developer portfolio with a yellow accent identity:
a minimal top navbar ("P." logo), a full-height hero section with carousel
slides showing background images and developer intro text, a services section
with three icon cards ("What I Do"), a work/case study carousel, a newsletter
section with a resume link and email subscription form, and a two-column
footer with contact info and copyright.

## Requirements

### Requirement: Navbar with logo, navigation links, and mobile menu

The template SHALL display a fixed top navbar with the "P." logo on the left and navigation links (Home, About, Services, Work, Blog, Contact). The navbar SHALL include a hamburger toggle button that opens a full-screen mobile menu overlay. When a nav link is clicked in the mobile menu, the menu SHALL close.

#### Scenario: Navbar renders logo and links

- **WHEN** the page loads
- **THEN** the navbar displays the "P." logo and navigation links (Home, About, Services, Work, Blog, Contact)

#### Scenario: Mobile menu toggle

- **WHEN** the hamburger button is clicked
- **THEN** the mobile menu overlay opens with all navigation links visible

#### Scenario: Mobile menu closes on link click

- **GIVEN** the mobile menu is open
- **WHEN** a navigation link is clicked
- **THEN** the mobile menu closes

### Requirement: Hero section with carousel and social links

The template SHALL display a full-height hero section with a background image carousel that auto-advances every 5 seconds. The hero SHALL show a developer intro headline and a "Hire me now" CTA button. Social media links (Twitter, Facebook, Instagram, Dribbble) SHALL be displayed in a sidebar.

#### Scenario: Hero renders headline and CTA

- **WHEN** the page loads
- **THEN** the hero section displays a developer intro headline and a "Hire me now" button

#### Scenario: Hero displays social media links

- **WHEN** the page loads
- **THEN** the hero section shows Twitter, Facebook, Instagram, and Dribbble links

#### Scenario: Hero carousel advances

- **WHEN** 5 seconds elapse
- **THEN** the hero carousel advances to the next slide

### Requirement: Services section with three icon cards

The template SHALL display a "What I Do" heading with "Strategy, design and a bit of magic" subtitle. Three service cards (Explore, Create, Learn) SHALL be displayed, each with an icon, title, and list of sub-services.

#### Scenario: Services section renders heading and cards

- **WHEN** the page loads
- **THEN** the services section displays "What I Do" heading and three service cards (Explore, Create, Learn)

#### Scenario: Service cards display sub-services

- **WHEN** the services section is visible
- **THEN** each card shows an icon, title, and list of sub-services

### Requirement: Work section with portfolio items

The template SHALL display a "Work" heading with "Happy spending my time to this projects" subtitle. Portfolio items SHALL show an image, tag, title, description, and a "See details" button.

#### Scenario: Work section renders portfolio items

- **WHEN** the page loads
- **THEN** the work section displays portfolio items with images, tags, titles, and descriptions

#### Scenario: Work items have See details buttons

- **WHEN** the work section is visible
- **THEN** each portfolio item has a "See details" button

### Requirement: Newsletter section with email subscription form

The template SHALL display a newsletter section with a bio paragraph, "Read my resume here" link, "Subscribe Newsletter" heading, and an email subscription form with "Subscribe Now" button. Submitting the form SHALL clear the email input.

#### Scenario: Newsletter renders heading and form

- **WHEN** the page loads
- **THEN** the newsletter section displays "Subscribe Newsletter" heading and an email input with "Subscribe Now" button

#### Scenario: Newsletter form clears on submission

- **GIVEN** an email address is entered in the form
- **WHEN** the "Subscribe Now" button is clicked
- **THEN** the email input is cleared

### Requirement: Footer with contact info and Component Dock attribution

The template SHALL display a two-column footer with "Lets Talk" section (description + CTA) and "Info" section (email, phone, address, social links). The copyright SHALL link to Component Dock (https://www.componentdock.com/).

#### Scenario: Footer renders contact sections

- **WHEN** the page loads
- **THEN** the footer displays "Lets Talk" and "Info" sections with contact details

#### Scenario: Footer links to Component Dock

- **WHEN** the footer is visible
- **THEN** the copyright includes a link to Component Dock (https://www.componentdock.com/)
