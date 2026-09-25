---
name: Draftly
description: Personal portfolio / CV template — recreation of ColorLib Clyde
source: https://colorlib.com/wp/template/clyde/
preview: https://preview.colorlib.com/theme/clyde/
design_tokens:
  font: Poppins (Google Fonts)
  primary: "#007bff" (Bootstrap blue)
  dark_bg: "#000000" (navbar, hero overlay)
  light_bg: "#f8f9fa" (alternating sections)
  footer_bg: "#000000" (dark footer)
  text: "#999999" (body), "#000000" (headings)
  accent: "#007bff" (buttons, progress bars, CTA)
---

## Purpose

Recreate ColorLib "Clyde" (https://colorlib.com/wp/template/clyde/) as a
React 19 + Vite + Tailwind CSS 4 + TypeScript single-page personal portfolio
template under the name "Draftly". The template showcases a creative UI/UX
designer's profile with skills, services, projects, testimonials, blog, and
contact form.

## Requirements

### Requirement: Navbar with navigation links

The app SHALL render a dark sticky navbar with the brand "Draftly" and
navigation links: Home, About, Skills, Services, Projects, Blog, Contact.
A hamburger menu SHALL toggle mobile navigation.

#### Scenario: Desktop navigation renders all links

- **GIVEN** the page loads on a desktop viewport
- **WHEN** the navbar renders
- **THEN** all seven navigation links are visible

#### Scenario: Mobile hamburger toggles menu

- **GIVEN** the page loads on a mobile viewport
- **WHEN** the user clicks the hamburger button
- **THEN** the mobile menu opens with all navigation links

### Requirement: Hero section with CTA buttons

The app SHALL render a full-screen hero with background image, dark overlay,
heading "Creative UI/UX Designer & Developer", and two CTA buttons
(Hire me + Download CV).

#### Scenario: Hero renders heading and buttons

- **GIVEN** the page loads
- **WHEN** the hero section is visible
- **THEN** the heading contains "Creative" and "UI/UX" text
- **AND** "Hire me" links to #contact
- **AND** "Download CV" links to #about

### Requirement: Counter stats section

The app SHALL render four statistics: 750 Projects, 568 Happy Clients,
478 Cups of Coffee, 10 Years Experienced.

#### Scenario: All four stats render with correct numbers

- **GIVEN** the page loads
- **WHEN** the counter section renders
- **THEN** the numbers 750, 568, 478, and 10 are visible

### Requirement: About section with personal info

The app SHALL render a split layout with an image on the left and personal
info (name, DOB, address, zip, email, phone) plus interest tags on the right.

#### Scenario: Personal info and interests display

- **GIVEN** the page loads
- **WHEN** the about section renders
- **THEN** personal info fields are visible
- **AND** interest tags (Music, Travel, Movie, Sports) are shown

### Requirement: Skills section with circular progress

The app SHALL render six skill cards with circular SVG progress indicators:
CSS 95%, HTML 98%, jQuery 68%, Photoshop 85%, WordPress 90%, SEO 75%.

#### Scenario: All six skills render

- **GIVEN** the page loads
- **WHEN** the skills section renders
- **THEN** all six skill names and percentages are visible

### Requirement: Services grid

The app SHALL render eight service cards in a responsive grid: Web Design,
Web Application, Web Development, Banner Design, Branding, Icon Design,
Graphic Design, SEO.

#### Scenario: All eight services render

- **GIVEN** the page loads
- **WHEN** the services section renders
- **THEN** all eight service titles are visible

### Requirement: CTA banner

The app SHALL render a dark banner with "Have a project on your mind?"
heading and a "Contact me" button linking to the contact section.

#### Scenario: CTA banner renders

- **GIVEN** the page loads
- **WHEN** the CTA banner renders
- **THEN** the heading text is visible
- **AND** the contact button links to #contact

### Requirement: Projects gallery

The app SHALL render eight project cards with images, titles, and category
labels with hover overlay effect.

#### Scenario: All eight projects render

- **GIVEN** the page loads
- **WHEN** the projects section renders
- **THEN** eight project images are visible

### Requirement: Testimonials carousel

The app SHALL render client testimonials on a blue background with prev/next
navigation. Testimonials SHALL cycle through three entries.

#### Scenario: Testimonial navigation

- **GIVEN** the page loads with the first testimonial showing
- **WHEN** the user clicks the next button
- **THEN** the second testimonial displays

### Requirement: Blog posts

The app SHALL render three blog post cards with image, date, title, and
description.

#### Scenario: Blog posts render

- **GIVEN** the page loads
- **WHEN** the blog section renders
- **THEN** three blog posts are visible with dates and titles

### Requirement: Contact form

The app SHALL render a contact form with Full Name, Email, Subject, Message
fields and a Send Message submit button.

#### Scenario: Form fields accept input

- **GIVEN** the contact form is visible
- **WHEN** the user types in the name field
- **THEN** the field value updates

### Requirement: Footer with Component Dock link

The app SHALL render a dark footer with four columns (About Us, Links,
Services, Questions) and a copyright line linking to
https://www.componentdock.com/.

#### Scenario: Footer renders Component Dock link

- **GIVEN** the page loads
- **WHEN** the footer renders
- **THEN** a link to componentdock.com is visible
- **AND** the link text includes "Component Dock"
