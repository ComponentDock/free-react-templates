---
name: fabricate
description: >
  Recreation of the ColorLib "Industry" template — an industrial/manufacturing
  company landing page with hero banner, feature hexagons, about + quote form,
  service sectors, stats counter, project gallery, testimonials carousel, blog
  cards, and newsletter footer.
source: https://colorlib.com/wp/template/industry/
preview: https://preview.colorlib.com/theme/industry/
---

# Spec — Fabricate

## Purpose

Recreation of ColorLib "Industry" (https://colorlib.com/wp/template/industry/)
as "Fabricate" — an industrial/manufacturing company landing page. The template
includes a navbar, hero banner, feature hexagons, about section with quote form,
service market sectors, animated stats counter, project gallery, testimonials,
blog cards, and a footer with newsletter and Component Dock attribution.

Design tokens: Poppins font (Google Fonts), brand yellow #fab700, paper #f9f9ff,
ink #222222, mist #777777, accent colors #38a4ff (blue), #4cd3e3 (teal),
#f4e700 (lime), #f44a40 (red).

## Requirements

### Requirement: Navbar with navigation and contact info

The page SHALL display a sticky navbar with a top bar (social icons, phone,
email), logo, and navigation links (Home, About, Service, Projects, Blog
with dropdown, Contact). Mobile view SHALL show a hamburger toggle.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on desktop
- **THEN** the navbar shows the Fabricate logo, Home, About, Service, Projects, Blog, and Contact links

#### Scenario: Mobile menu toggles open and closed

- **WHEN** the user clicks the hamburger button
- **THEN** the mobile menu opens with all nav links visible
- **WHEN** the user clicks a nav link in the mobile menu
- **THEN** the mobile menu closes

### Requirement: Hero banner with CTA

The page SHALL display a full-width hero banner with dark overlay background,
headline "We're Industrial Solution", subtitle text, and a "Get Started" CTA
button styled with brand yellow.

#### Scenario: Hero renders headline and CTA

- **WHEN** the page loads
- **THEN** the hero section shows the headline and a "Get Started" button

### Requirement: Features section with hexagonal icons

The page SHALL display three feature cards (Maintenance, Residential Service,
Commercial Service) each with a colored hexagonal icon background.

#### Scenario: Three feature cards render

- **WHEN** the page loads
- **THEN** the features section shows Maintenance, Residential Service, and Commercial Service cards

### Requirement: About section with quote form

The page SHALL display a split layout with descriptive text on the left and a
"Request a Quote" form on the right with service select, name, phone, email,
message fields, and a submit button.

#### Scenario: Quote form renders all fields

- **WHEN** the page loads
- **THEN** the about section shows a service select, name, phone, email, and message input

#### Scenario: Form fields accept input

- **WHEN** the user types into the name field
- **THEN** the field updates with the entered value

### Requirement: Services section with image cards

The page SHALL display three service cards (Automotive Engineering,
Construction & Engineering, Industrial Engineering) each with a placeholder
image and description.

#### Scenario: Three service cards render

- **WHEN** the page loads
- **THEN** the services section shows three cards with images and titles

### Requirement: Stats counter section

The page SHALL display four animated stat counters (Projects, Employees,
Clients, Tickets) on a dark overlay background. Counters SHALL animate from
zero to their target value when scrolled into view.

#### Scenario: Stats counters render

- **WHEN** the page loads
- **THEN** the stats section shows Projects Completed, Total Employees, Happy Clients, and Tickets Submitted labels

#### Scenario: Stats animate on scroll

- **WHEN** the stats section comes into view
- **THEN** the counters animate from 0 to their target values

### Requirement: Projects gallery

The page SHALL display a grid of project images in a 2-column layout.

#### Scenario: Project images render

- **WHEN** the page loads
- **THEN** the projects section shows four project images

### Requirement: Testimonials section

The page SHALL display customer testimonials with star ratings on a dark
overlay background.

#### Scenario: Testimonials render

- **WHEN** the page loads
- **THEN** the testimonials section shows customer names and review text

### Requirement: Blog section

The page SHALL display three blog cards with images, author names, dates,
likes, comments, titles, and excerpts.

#### Scenario: Blog cards render

- **WHEN** the page loads
- **THEN** the blog section shows three article cards with titles and authors

### Requirement: Footer with Component Dock link

The page SHALL display a footer with About Us, Newsletter (email input),
Follow Us (social icons), and copyright. The footer SHALL link to
https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer renders all sections

- **WHEN** the page loads
- **THEN** the footer shows About Us, Newsletter, and Follow Us sections

#### Scenario: Footer links to Component Dock

- **WHEN** the user checks the footer
- **THEN** a link to https://www.componentdock.com/ is present with text "Component Dock"
