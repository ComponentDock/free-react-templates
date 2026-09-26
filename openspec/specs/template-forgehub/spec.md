# Spec: ForgeHub

> Recreation of ColorLib "Create" (https://colorlib.com/wp/template/create/)
> Preview: https://preview.colorlib.com/theme/create/

## Purpose

ForgeHub is a creative agency and portfolio template featuring a dark top bar with contact info, a white sticky navbar, a full-width hero with parallax background, services overview cards, a portfolio grid with hover overlays, a dark features section, testimonials, a services list, about section, team members, blog cards, a contact form, a CTA banner, and a dark footer with newsletter signup and Component Dock link.

## Requirements

### Requirement: TopBar

The template SHALL render a dark background top bar with phone and email contact info on the left and social media icons on the right.

#### Scenario: Contact info and social links visible

- **WHEN** the page loads
- **THEN** the phone number "+1 234 5678 9101" is displayed
- **THEN** the email "info@yourdomain.com" is displayed
- **THEN** social media icons for Facebook, Twitter, Instagram, and LinkedIn are displayed

### Requirement: Navbar

The template SHALL render a white sticky navbar with the "ForgeHub" brand logo (with teal dot accent) and navigation links for Home, Work, Services, About, Blog, and Contact.

#### Scenario: Brand and navigation visible

- **WHEN** the page loads
- **THEN** the brand "ForgeHub" is displayed
- **THEN** all 6 navigation links are visible

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger menu button
- **THEN** the navigation links become visible in a dropdown
- **WHEN** the user clicks a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero Section

The template SHALL render a full-width hero section with a background image, the heading "We Love To Build", and a "Watch Video" CTA button.

#### Scenario: Hero content

- **WHEN** the page loads
- **THEN** the heading "We Love To Build" is displayed
- **THEN** a "Watch Video" button is visible
- **THEN** a background image is displayed

### Requirement: ServicesOverview

The template SHALL render three service overview cards (Innovate, Create, Scale) with numbered badges and checklist items.

#### Scenario: Service cards visible

- **WHEN** the page loads
- **THEN** three service cards are displayed with titles "Innovate", "Create", and "Scale"
- **THEN** numbered badges "01", "02", "03" are displayed
- **THEN** checklist items are visible for each card

### Requirement: Portfolio

The template SHALL render a "Our Works" section with a 3-column grid of 6 portfolio items, each with an image, title, and category overlay on hover.

#### Scenario: Portfolio grid

- **WHEN** the page loads
- **THEN** the heading "Our Works" is displayed
- **THEN** 6 portfolio items are displayed in a grid
- **THEN** each item shows a title and category

### Requirement: Features

The template SHALL render a dark background features section with an image and 4 feature items (Strategy, Web Development, Art Direction, Copywriting) with icons and Read More links.

#### Scenario: Feature items visible

- **WHEN** the page loads
- **THEN** a dark background section is displayed
- **THEN** 4 feature items are displayed with titles and descriptions
- **THEN** "Read More" links are visible for each feature

### Requirement: Testimonials

The template SHALL render a testimonials section with quotes, author names, and avatar images.

#### Scenario: Testimonials content

- **WHEN** the page loads
- **THEN** the heading "Testimonials" is displayed
- **THEN** testimonial quotes are visible
- **THEN** author names and avatar images are displayed

### Requirement: Services

The template SHALL render a "Our Services" section with 6 service items in a 3-column grid, each with an icon, title, description, and "Learn More" link.

#### Scenario: Service items visible

- **WHEN** the page loads
- **THEN** the heading "Our Services" is displayed
- **THEN** 6 service items are displayed
- **THEN** "Learn More" links are visible for each service

### Requirement: About

The template SHALL render an "About Us" section with a heading, description text, an image, and 2 sub-feature items (Web & Mobile Specialties, Intuitive Thinkers).

#### Scenario: About content

- **WHEN** the page loads
- **THEN** the heading "About Us" is displayed
- **THEN** a description paragraph is visible
- **THEN** 2 sub-feature items are displayed

### Requirement: Team

The template SHALL render a "Our Team" section with 3 team member cards, each showing a circular photo, name, role, description, and social media links.

#### Scenario: Team members visible

- **WHEN** the page loads
- **THEN** the heading "Our Team" is displayed
- **THEN** 3 team members are displayed with names, roles, and descriptions
- **THEN** social media links are visible for each member

### Requirement: Blog

The template SHALL render a "Blog" section with 3 blog cards, each with an image, title, author, date, category, excerpt, and "Continue Reading" link.

#### Scenario: Blog posts visible

- **WHEN** the page loads
- **THEN** the heading "Blog" is displayed
- **THEN** 3 blog posts are displayed
- **THEN** "Continue Reading" links are visible

### Requirement: Contact

The template SHALL render a "Contact Us" section with a contact form (first name, last name, email, subject, message fields) and a sidebar with address, phone, and email info.

#### Scenario: Contact form and info

- **WHEN** the page loads
- **THEN** the heading "Contact Us" is displayed
- **THEN** a form with first name, last name, email, subject, and message fields is visible
- **THEN** a "Send Message" submit button is visible
- **THEN** address, phone, and email info are displayed in the sidebar

### Requirement: CTA Banner

The template SHALL render a teal background CTA banner with the heading "Let's Get Started".

#### Scenario: CTA banner visible

- **WHEN** the page loads
- **THEN** a teal background banner with "Let's Get Started" is displayed

### Requirement: Footer

The template SHALL render a dark background footer with About Us, Features links, Follow Us social icons, a newsletter signup form, a Component Dock link, and copyright text.

#### Scenario: Footer content

- **WHEN** the page loads
- **THEN** "About Us", "Features", and "Follow Us" sections are displayed
- **THEN** a newsletter signup form is visible
- **THEN** a "Component Dock" link pointing to https://www.componentdock.com/ is displayed
- **THEN** copyright text is displayed
