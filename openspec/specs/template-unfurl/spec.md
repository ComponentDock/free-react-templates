# Spec: Unfurl — Portfolio & Personal Template

Recreation of ColorLib "Unfold" (https://colorlib.com/wp/template/unfold/).

## Purpose

A dark-themed portfolio and personal website template for creative professionals, featuring a full-viewport hero, isotope-style portfolio grid, skills progress bars, testimonials, blog journal, and contact form.

## Requirements

### Requirement: Navigation

The template SHALL display a fixed top navigation bar with the logo "Unfurl", desktop navigation links (Home, Portfolio, About, Services, Skills, Testimonials, Journal, Contact), a dark mode toggle, and a mobile hamburger menu.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on desktop viewport
- **THEN** the navbar displays the "Unfurl" logo and all 8 navigation links

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the mobile navigation menu opens with all links and a dark mode toggle

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open and the user clicks a navigation link
- **THEN** the mobile menu closes

#### Scenario: Dark mode toggle

- **WHEN** the user clicks the dark mode toggle button
- **THEN** the html element's dark class is toggled

### Requirement: Hero Section

The template SHALL display a full-viewport hero section with a dark background image, the heading "Unfurl", a subtitle describing the designer, and a scroll-down indicator.

#### Scenario: Hero renders heading and subtitle

- **WHEN** the page loads
- **THEN** the hero section displays "Unfurl" as the heading and the designer subtitle

#### Scenario: Scroll indicator links to portfolio

- **WHEN** the user clicks the scroll indicator
- **THEN** the page navigates to the portfolio section

### Requirement: Portfolio Grid

The template SHALL display a 3-column grid of 9 portfolio items, each with an image and a hover overlay showing the title and category tags.

#### Scenario: Portfolio renders 9 items

- **WHEN** the portfolio section is visible
- **THEN** 9 portfolio items are displayed in a grid

#### Scenario: Hover overlay appears

- **WHEN** the user hovers over a portfolio item
- **THEN** an overlay with the item title and category tags becomes visible

#### Scenario: Hover overlay disappears on mouse leave

- **WHEN** the user moves the mouse away from a portfolio item
- **THEN** the overlay becomes hidden again

### Requirement: About Section

The template SHALL display an about section with a heading, description text, a portrait image, and a "Download my CV" button.

#### Scenario: About section renders content

- **WHEN** the about section is visible
- **THEN** it displays "About Me" heading, description text, and a "Download my CV" button

### Requirement: Services Section

The template SHALL display a 3x2 grid of 6 service cards, each with an icon, title, and description.

#### Scenario: Services renders 6 cards

- **WHEN** the services section is visible
- **THEN** 6 service cards are displayed with titles: Digital Strategy, Web Design, User Experience, Web Development, WordPress Solutions, Mobile Applications

### Requirement: Skills Section

The template SHALL display progress bars for 4 skills with labels and percentage values.

#### Scenario: Skills renders 4 bars

- **WHEN** the skills section is visible
- **THEN** 4 skill bars are displayed: WordPress (85%), HTML/CSS (95%), JavaScript (80%), Design (90%)

### Requirement: Testimonials Section

The template SHALL display 3 testimonial cards with a quote, avatar, name, and role.

#### Scenario: Testimonials renders 3 cards

- **WHEN** the testimonials section is visible
- **THEN** 3 testimonial cards are displayed with names and roles

### Requirement: Journal Section

The template SHALL display 3 blog post cards with an image, title, author, and read time.

#### Scenario: Journal renders 3 posts

- **WHEN** the journal section is visible
- **THEN** 3 blog post cards are displayed

### Requirement: Contact Section

The template SHALL display a contact form (Name, Email, Message fields with Submit button) and contact information (Email, Phone, Address).

#### Scenario: Contact form renders

- **WHEN** the contact section is visible
- **THEN** a form with Name, Email, and Message fields and a "Send Message" button is displayed

#### Scenario: Contact form submission

- **WHEN** the user fills in all fields and clicks Submit
- **THEN** a success message "Your message was sent, thank you!" is displayed

#### Scenario: Contact info displays

- **WHEN** the contact section is visible
- **THEN** email, phone, and address information are displayed

### Requirement: Footer

The template SHALL display a footer with the logo, social media icons (Facebook, Twitter, Instagram, Dribbble), and a copyright line with a "Made with Component Dock" link.

#### Scenario: Footer renders social links

- **WHEN** the footer is visible
- **THEN** social media links for Facebook, Twitter, Instagram, and Dribbble are displayed

#### Scenario: Footer links to Component Dock

- **WHEN** the footer is visible
- **THEN** a link to https://www.componentdock.com/ labeled "Component Dock" is displayed

#### Scenario: Footer shows copyright

- **WHEN** the footer is visible
- **THEN** the current year and "All rights reserved" text are displayed
