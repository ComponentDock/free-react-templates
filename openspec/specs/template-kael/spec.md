# Kael — Portfolio & Personal Site Template

## Purpose

Recreate the ColorLib "Satner" portfolio template (https://colorlib.com/wp/template/satner/) as a React 19 + Tailwind CSS 4 + TypeScript single-page portfolio site. Kael provides a hero section, about area, brand logos, services, filterable portfolio grid, testimonials, newsletter signup, and footer — all faithfully matching the original design tokens.

## Requirements

### Requirement: Hero section with greeting, role, and CTAs

The page SHALL render a hero section with gradient background, greeting text ("Hello"), developer name ("I am Kael"), role subtitle ("Senior Developer"), two CTA buttons (Hire Me, Get CV), and a portrait image on the right.

#### Scenario: Hero renders all elements

- **WHEN** the page loads
- **THEN** the hero section displays the greeting, name, role, both CTA buttons, and the portrait image

#### Scenario: CTA buttons are interactive

- **WHEN** the user views the hero
- **THEN** the "Hire Me" button and "Get CV" link are both visible and clickable

### Requirement: About section with bio and CV download

The page SHALL render an about section with an image on the left, a heading ("Let's Introduce About Myself"), two bio paragraphs, and a "Download CV" button.

#### Scenario: About section renders

- **WHEN** the page loads
- **THEN** the about section displays the heading, bio text, image, and CV download button

### Requirement: Brand logos and experience counter

The page SHALL render a brand logos grid (6 logos) alongside a "10 Years Experience" counter and a phone number CTA.

#### Scenario: Brands section renders

- **WHEN** the page loads
- **THEN** brand logos, experience counter, and phone number are all visible

### Requirement: Services section with four service cards

The page SHALL render a services section with a heading ("Service Offers") and four service cards (Web Development, UI/UX Design, Web Design, SEO Optimization), each with an icon, title, and description.

#### Scenario: All services render

- **WHEN** the page loads
- **THEN** all four service cards display their titles and descriptions

### Requirement: Portfolio section with filter tabs and image grid

The page SHALL render a portfolio section with filter tabs (All, Popular, Latest, Following, Upcoming) and a 3-column image grid. Clicking a tab SHALL filter the grid to show only items in that category.

#### Scenario: All items shown by default

- **WHEN** the page loads
- **THEN** all six portfolio items are visible

#### Scenario: Filtering works

- **WHEN** the user clicks the "Popular" filter tab
- **THEN** only "Popular" category items are shown

### Requirement: Testimonials section

The page SHALL render a testimonials section with a heading ("Client Say About Me") and three testimonial cards, each with a client photo, name, star rating, and quote.

#### Scenario: All testimonials render

- **WHEN** the page loads
- **THEN** three testimonial cards with names, ratings, and quotes are visible

### Requirement: Newsletter signup

The page SHALL render a newsletter section with gradient background, heading, email input, and subscribe button. Submitting with a valid email SHALL show a thank-you message. Submitting with an empty email SHALL not submit.

#### Scenario: Newsletter form works

- **WHEN** the user enters a valid email and clicks "Get Started"
- **THEN** a "Thank you for subscribing!" message appears

#### Scenario: Empty email does not submit

- **WHEN** the user submits the form with an empty email
- **THEN** the form remains visible and no thank-you message appears

### Requirement: Footer with Component Dock link

The page SHALL render a footer with the brand name, "Follow Me" heading, social links (Facebook, Twitter, Dribbble, Behance), and a copyright line that links to https://www.componentdock.com/ ("Component Dock").

#### Scenario: Footer links to Component Dock

- **WHEN** the footer renders
- **THEN** a link to https://www.componentdock.com/ is present with text "Component Dock" opening in a new tab

### Requirement: Responsive navbar with mobile menu

The page SHALL render a navbar with desktop nav links and a hamburger toggle on mobile. Clicking the hamburger SHALL open a mobile menu. Clicking a link in the mobile menu SHALL close the menu.

#### Scenario: Mobile menu toggles

- **WHEN** the user clicks the hamburger button
- **THEN** the mobile menu opens with all nav links visible

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open and a nav link is clicked
- **THEN** the mobile menu closes
