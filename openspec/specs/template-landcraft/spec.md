---
name: landcraft
description: Landscaping company landing page — recreation of ColorLib Martxa (https://colorlib.com/wp/template/martxa/)
stack:
  - React 19
  - Vite
  - Tailwind CSS 4
  - TypeScript
---

## Purpose

Landcraft is a landscaping company landing page template. It recreates the ColorLib Martxa design as a modern React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application. The template showcases a full business landing experience: navbar, hero, about, services, statistics, portfolio with filtering, team, FAQ accordion, testimonials, blog, newsletter signup, and a branded footer.

## Requirements

### Requirement: Navigation

The page SHALL display a responsive navbar with brand name, contact information, and navigation links.

#### Scenario: Desktop navigation

- **WHEN** the user views the page on a desktop viewport
- **THEN** the navbar shows the brand "Landcraft", contact info (hours, email, phone), and horizontal navigation links (Home, About, Services, Team, Portfolio, Blog, Contact)

#### Scenario: Mobile navigation toggle

- **WHEN** the user clicks the mobile menu button
- **THEN** a vertical navigation menu appears
- **WHEN** the user clicks a link in the mobile menu
- **THEN** the menu closes

### Requirement: Hero section

The page SHALL display a hero section with a background image, heading, description, and two CTA buttons.

#### Scenario: Hero content

- **WHEN** the user views the hero section
- **THEN** the heading "Welcome to Landcraft" is visible
- **AND** two CTA buttons "Read More" and "Get Started" are displayed

### Requirement: About section

The page SHALL display an about section with an image, heading, description text, and a list of capabilities.

#### Scenario: About content

- **WHEN** the user scrolls to the about section
- **THEN** the heading "Who We Are" is visible
- **AND** a list of 7 landscaping capabilities is shown

### Requirement: Services section

The page SHALL display a services section with three service cards.

#### Scenario: Service cards

- **WHEN** the user views the services section
- **THEN** three service cards are displayed (Lawn Care, Landscape Design, Garden Maintenance)
- **AND** each card has an image, title, description, and "Read More" link

### Requirement: Fun facts section

The page SHALL display a statistics section with four numeric counters.

#### Scenario: Statistics display

- **WHEN** the user views the fun facts section
- **THEN** four statistics are shown: Projects Completed (2,157), Happy Clients (15,445), Awards Won (145), Team Members (1,200)

### Requirement: Portfolio section with filtering

The page SHALL display a portfolio section with filterable items.

#### Scenario: Show all items

- **WHEN** the user views the portfolio section with "Show All" active
- **THEN** all 6 portfolio items are displayed

#### Scenario: Filter by category

- **WHEN** the user clicks a category filter button (e.g. "Residential")
- **THEN** only items matching that category are displayed

### Requirement: Team section

The page SHALL display a team section with four team member cards.

#### Scenario: Team members

- **WHEN** the user views the team section
- **THEN** four team members are displayed with name, role, and social links

### Requirement: FAQ accordion

The page SHALL display a FAQ section with a functional accordion.

#### Scenario: Accordion interaction

- **WHEN** the user clicks a FAQ question
- **THEN** its answer is revealed
- **WHEN** the user clicks another question
- **THEN** the previous answer collapses and the new one opens

### Requirement: Testimonials

The page SHALL display a testimonials section with client reviews and star ratings.

#### Scenario: Testimonials content

- **WHEN** the user views the testimonials section
- **THEN** client testimonials with names, roles, star ratings, and quotes are displayed

### Requirement: Newsletter signup

The page SHALL display a newsletter section with an email input form.

#### Scenario: Newsletter form

- **WHEN** the user views the newsletter section
- **THEN** an email input and submit button are displayed

### Requirement: Footer with Component Dock link

The page SHALL display a footer with company info, links, Instagram grid, contact form, and a Component Dock attribution link.

#### Scenario: Footer Component Dock link

- **WHEN** the user views the footer
- **THEN** a link to https://www.componentdock.com/ is displayed with text "Component Dock"

#### Scenario: Footer contact form submission

- **WHEN** the user submits the quick contact form
- **THEN** the form prevents default submission and remains on the page
