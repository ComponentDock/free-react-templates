# Carnivor — Steakhouse Landing Template

Recreation of ColorLib "Steakshop" (https://colorlib.com/wp/template/steakshop/)

## Purpose

A free, production-ready React steakhouse landing page template featuring a right-sidebar navigation, hero banner, food courses, reservation form, chef spotlight, food gallery, brand partners, and a footer with newsletter signup.

## Requirements

### Requirement: Navigation

Users SHALL see a fixed right-sidebar navigation with the brand name and links to all sections.

#### Scenario: Desktop sidebar visible

- **WHEN** the page loads on a desktop viewport
- **THEN** a right sidebar navigation is visible with links: Home, About, Menu, Book Table, Chefs, Contact

#### Scenario: Mobile hamburger toggle

- **WHEN** the page loads on a mobile viewport
- **THEN** a hamburger button is visible
- **WHEN** the user taps the hamburger button
- **THEN** the sidebar slides in and an overlay appears
- **WHEN** the user taps the overlay or presses Escape
- **THEN** the sidebar closes

### Requirement: Hero Section

Users SHALL see a full-screen hero banner with a headline, description, and call-to-action button.

#### Scenario: Hero content renders

- **WHEN** the page loads
- **THEN** a heading with "best steaks in town" is displayed
- **AND** an "Explore Menu" CTA button links to the menu section

### Requirement: Food Courses

Users SHALL see two food course sections with images and descriptive text.

#### Scenario: Course sections render

- **WHEN** the page loads
- **THEN** two course sections are displayed with headings and food images
- **AND** a "See Full Menu" CTA button is present

### Requirement: Reservation Form

Users SHALL be able to fill out and submit a reservation form with validation.

#### Scenario: Form renders all fields

- **WHEN** the page loads
- **THEN** fields for name, email, phone, party size, date/time, and event type are displayed

#### Scenario: Validation on empty submit

- **WHEN** the user clicks "Make Reservation" without filling fields
- **THEN** validation error messages appear for required fields

#### Scenario: Successful reservation

- **WHEN** the user fills all required fields with valid data and submits
- **THEN** a confirmation message is displayed with the reservation details

### Requirement: Chef Section

Users SHALL see a chef spotlight with a portrait and specialty items.

#### Scenario: Chef content renders

- **WHEN** the page loads
- **THEN** a chef portrait image and 4 specialty item thumbnails are displayed

### Requirement: Food Gallery

Users SHALL see a grid of food photography images.

#### Scenario: Gallery renders

- **WHEN** the page loads
- **THEN** 6 food images are displayed in a responsive grid

### Requirement: Brand Partners

Users SHALL see a section listing partner brands.

#### Scenario: Brands render

- **WHEN** the page loads
- **THEN** 5 partner brand names are displayed

### Requirement: Footer

Users SHALL see a footer with quick links, contact info, social icons, newsletter signup, and a Component Dock attribution link.

#### Scenario: Footer content

- **WHEN** the page loads
- **THEN** quick links, contact details, and social icons are displayed
- **AND** a newsletter email form is present
- **AND** a link to https://www.componentdock.com/ with text "Component Dock" is present

#### Scenario: Newsletter validation

- **WHEN** the user clicks Subscribe without entering an email
- **THEN** a validation error is shown

#### Scenario: Newsletter success

- **WHEN** the user enters a valid email and clicks Subscribe
- **THEN** a thank-you message is displayed
