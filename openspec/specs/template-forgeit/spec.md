---
name: forgeit
description: >
  Creative agency / web studio onepage template recreating ColorLib "Create"
  under a different name.
source:
  colorlib: https://colorlib.com/wp/template/create/
  preview: https://preview.colorlib.com/theme/create/
---

# Forgeit — Creative Agency Template

## Purpose

Forgeit is a creative agency / web studio onepage template. It recreates the
ColorLib "Create" design under a different name with React 19, Tailwind CSS 4,
and TypeScript. The template showcases a full creative agency landing page
with sections for features, portfolio, services, about, team, blog, and contact.

## Requirements

### Requirement: TopBar renders contact info and social links

The template SHALL render a dark top bar with phone number, email address, and social media icon links.

#### Scenario: TopBar shows contact details

- **WHEN** the page loads
- **THEN** the top bar displays a phone number and email address

#### Scenario: TopBar shows social icons

- **WHEN** the page loads
- **THEN** the top bar displays Facebook, Twitter, Instagram, and LinkedIn icon links

### Requirement: Navbar renders logo and navigation links

The template SHALL render a sticky white navbar with the logo "Forgeit." and navigation links.

#### Scenario: Navbar shows logo

- **WHEN** the page loads
- **THEN** the navbar displays "Forgeit" with a brand-colored period

#### Scenario: Navbar shows navigation links

- **WHEN** the page loads
- **THEN** the navbar displays links for Home, Work, Services, About, Blog, and Contact

### Requirement: Hero section displays headline with typed animation

The template SHALL render a hero section with a background image, heading text, and a CTA button.

#### Scenario: Hero shows heading

- **WHEN** the page loads
- **THEN** the hero displays "We Love To Build" as the main heading

#### Scenario: Hero shows CTA button

- **WHEN** the page loads
- **THEN** the hero displays a "Watch Video" button

### Requirement: Features section shows three feature cards

The template SHALL render a features section with three numbered feature cards.

#### Scenario: Features shows three cards

- **WHEN** the page loads
- **THEN** three feature cards are displayed with numbers 01, 02, 03

#### Scenario: Feature cards have titles

- **WHEN** the page loads
- **THEN** the feature cards show titles "Innovate", "Create", and "Scale"

### Requirement: Portfolio section shows work gallery

The template SHALL render a portfolio section with a grid of work items.

#### Scenario: Portfolio shows heading

- **WHEN** the page loads
- **THEN** the portfolio section displays "Our Works" as the heading

#### Scenario: Portfolio shows work items

- **WHEN** the page loads
- **THEN** six portfolio items are displayed with images, titles, and categories

### Requirement: Dark feature strip shows capabilities

The template SHALL render a dark background section with feature items and an image.

#### Scenario: Dark strip shows four features

- **WHEN** the page loads
- **THEN** four feature items are displayed: Strategy, Web Development, Art Direction, Copywriting

#### Scenario: Dark strip shows image

- **WHEN** the page loads
- **THEN** the dark section displays an image on the left side

### Requirement: Testimonials section shows client quotes

The template SHALL render a testimonials section with quoted text and person names.

#### Scenario: Testimonials shows heading

- **WHEN** the page loads
- **THEN** the testimonials section displays "Testimonials" as the heading

#### Scenario: Testimonials shows quotes

- **WHEN** the page loads
- **THEN** testimonial quotes with person names are displayed

### Requirement: Services section shows six service items

The template SHALL render a services section with icon-based service cards.

#### Scenario: Services shows heading

- **WHEN** the page loads
- **THEN** the services section displays "Our Services" as the heading

#### Scenario: Services shows six items

- **WHEN** the page loads
- **THEN** six service items are displayed: Web Design, eCommerce, Web Applications, Branding, Copy Writing, Mobile Applications

### Requirement: About section shows company info

The template SHALL render an about section with a heading, description, and feature cards.

#### Scenario: About shows heading and description

- **WHEN** the page loads
- **THEN** the about section displays "About Us" heading with a description paragraph

#### Scenario: About shows feature cards

- **WHEN** the page loads
- **THEN** two feature cards are displayed: Web & Mobile Specialties and Intuitive Thinkers

### Requirement: Team section shows team members

The template SHALL render a team section with member profiles.

#### Scenario: Team shows heading

- **WHEN** the page loads
- **THEN** the team section displays "Our Team" as the heading

#### Scenario: Team shows three members

- **WHEN** the page loads
- **THEN** three team members are displayed with names, titles, descriptions, and social icons

### Requirement: Blog section shows post cards

The template SHALL render a blog section with post cards.

#### Scenario: Blog shows heading

- **WHEN** the page loads
- **THEN** the blog section displays "Blog" as the heading

#### Scenario: Blog shows three posts

- **WHEN** the page loads
- **THEN** three blog post cards are displayed with titles, authors, dates, excerpts, and "Continue Reading" links

### Requirement: Contact section shows form and info

The template SHALL render a contact section with a form and contact information sidebar.

#### Scenario: Contact shows heading

- **WHEN** the page loads
- **THEN** the contact section displays "Contact Us" as the heading

#### Scenario: Contact shows form fields

- **WHEN** the page loads
- **THEN** the contact form displays fields for First Name, Last Name, Email, Subject, Message, and a Submit button

#### Scenario: Contact shows info sidebar

- **WHEN** the page loads
- **THEN** the sidebar displays Address, Phone, and Email information

### Requirement: CTA banner renders full-width call to action

The template SHALL render a full-width brand-colored CTA banner.

#### Scenario: CTA shows message

- **WHEN** the page loads
- **THEN** a full-width banner displays "Let's Get Started"

### Requirement: Footer links to Component Dock

The template SHALL render a footer with navigation, social links, newsletter form, and a link to Component Dock.

#### Scenario: Footer shows navigation sections

- **WHEN** the page loads
- **THEN** the footer displays About Us, Features, Follow Us, and Subscribe Newsletter sections

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/

#### Scenario: Footer shows copyright

- **WHEN** the page loads
- **THEN** the footer displays a copyright line

### Requirement: App renders all sections in order

The template SHALL compose all sections in the correct order and set the document title.

#### Scenario: App renders all sections

- **WHEN** the page loads
- **THEN** all major sections are rendered in order: TopBar, Navbar, Hero, Features, Portfolio, Dark Feature Strip, Testimonials, Services, About, Team, Blog, Contact, CTA, Footer

#### Scenario: App sets document title

- **WHEN** the page loads
- **THEN** the document title is set to "Forgeit — Creative Agency Template"
