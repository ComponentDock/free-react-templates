---
name: template-kinetic
description: >
  Recreation of ColorLib "Bobsled" creative agency landing page.
  Original: https://colorlib.com/wp/template/bobsled/
  Preview: https://preview.colorlib.com/theme/bobsled/
---

## Purpose

Kinetic is a free creative agency landing page template that recreates the ColorLib "Bobsled" design under a new name. It features a gradient hero, step-by-step working process, feature cards, portfolio showcase, newsletter signup, and contact form — built with React 19, Tailwind CSS 4, and TypeScript.

## Requirements

### Requirement: Navbar with mobile menu

The template SHALL display a navigation bar with the brand name "Kinetic" and links to Home, About, Services, Portfolio, and Contact sections. On mobile viewports, a hamburger toggle SHALL show/hide the mobile navigation menu.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar displays "Kinetic" logo text and links: Home, About, Services, Portfolio, Contact

#### Scenario: Mobile menu toggle

- **WHEN** the hamburger button is clicked on a mobile viewport
- **THEN** the mobile navigation menu opens with all nav links visible

### Requirement: Hero section with gradient background

The template SHALL display a hero section with a blue-to-teal gradient background, a heading "Don't look anywhere, This is the best place on web", a subtitle paragraph, and a "Get Started" CTA button linking to the About section.

#### Scenario: Hero content renders

- **WHEN** the page loads
- **THEN** the hero heading contains "best place on web" and a "Get Started" CTA is visible

### Requirement: Working process section

The template SHALL display a "Our Working Process" section with 4 inline steps: Researching, Wireframing, Prototyping, Final Design — each with an icon.

#### Scenario: Four process steps are displayed

- **WHEN** the page loads
- **THEN** labels "Researching", "Wireframing", "Prototyping", and "Final Design" are all visible

### Requirement: Features section with cards

The template SHALL display an "Our Exclusive Features" section on a gradient background with 3 feature cards (Creative Design, Appropriate UX, Super Clean Code), each with an image, description, and "Read More" link.

#### Scenario: Three feature cards render

- **WHEN** the page loads
- **THEN** 3 feature cards are visible with "Read More" links

### Requirement: Remarkable works portfolio section

The template SHALL display a "Remarkable Works" section with 3 alternating image/text portfolio rows, each with a "View Project" link.

#### Scenario: Three portfolio items render

- **WHEN** the page loads
- **THEN** 3 portfolio items are visible with "View Project" links

### Requirement: Story section

The template SHALL display a story section on a gradient background with a "From the part of beginning" heading, description paragraph, and "Get Started" CTA linking to the Contact section.

#### Scenario: Story content renders

- **WHEN** the page loads
- **THEN** the heading contains "From the part of beginning" and a CTA links to #contact

### Requirement: Newsletter signup

The template SHALL display a newsletter section with a "Subscribe for our Newsletter" heading, an email input, and a "Get Started" submit button.

#### Scenario: Newsletter form renders

- **WHEN** the page loads
- **THEN** an email input and "Get Started" button are visible

### Requirement: Contact form

The template SHALL display a "Keep in Touch" contact form with name, email, and message inputs and a "Send Message" button. Form submission SHALL be prevented (no page reload).

#### Scenario: Contact form renders with all fields

- **WHEN** the page loads
- **THEN** name, email, and message inputs are visible with a "Send Message" button

### Requirement: Footer with Component Dock link

The template SHALL display a footer with Address, Email, and Phone info columns, a bottom bar with the brand name, copyright text, a link to https://www.componentdock.com/ branded as "Component Dock", and social media icon links.

#### Scenario: Footer renders info and Component Dock attribution

- **WHEN** the page loads
- **THEN** Address, Email, Phone sections are visible, a link to "https://www.componentdock.com/" is present, and social icons exist
