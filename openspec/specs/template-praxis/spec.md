# Spec: Praxis

Recreation of ColorLib "Drpro" (https://colorlib.com/wp/template/drpro/).

## Purpose

Praxis is a plastic surgery clinic landing page template. It provides a
professional, modern design with hero imagery, appointment booking, service
showcase, and clinic information — aimed at cosmetic surgery practices.

## Requirements

### Requirement: Navbar with navigation and branding

The template SHALL render a sticky header with the clinic logo ("Praxis
Plastic Surgery"), desktop navigation links (Home, About, Services, News,
Contact), working hours, phone number, "Make an Appointment" CTA, and social
icons (Instagram, Facebook, Twitter). A hamburger menu SHALL toggle on mobile.

#### Scenario: Desktop navbar renders all elements

- **WHEN** the page loads on a wide viewport
- **THEN** the logo, all nav links, working hours, phone, appointment button, and social icons are visible

#### Scenario: Mobile hamburger toggles menu

- **WHEN** the user taps the hamburger icon
- **THEN** a mobile menu opens with all nav links and the appointment button
- **WHEN** the user taps a link in the mobile menu
- **THEN** the menu closes

### Requirement: Hero section with call-to-action

The template SHALL render a full-width hero section with a background image,
subtitle "#1 Plastic Surgery Clinic", title "Love the new you", description
text, two action buttons ("Read More" and "Make an Appointment"), and three
slider indicator dots.

#### Scenario: Hero displays key content

- **WHEN** the hero section renders
- **THEN** the subtitle, title, description, and both CTA buttons are visible
- **AND** three slider dots are rendered

### Requirement: Intro section with stats and appointment form

The template SHALL render a two-column intro section. The left column SHALL
show a welcome heading, description, and three milestone statistics (5,000+
Satisfied Patients, 352 Face Liftings, 718 Injectibles). The right column
SHALL show an appointment form with Name, Email, Phone, Speciality (select),
Doctor (select), and Date fields plus a submit button.

#### Scenario: Stats display correctly

- **WHEN** the intro section renders
- **THEN** all three milestone values and labels are visible

#### Scenario: Appointment form submission

- **WHEN** the user fills all form fields and clicks submit
- **THEN** a "Thank you" confirmation message replaces the form

### Requirement: Why Choose Us section

The template SHALL render a two-column section with a clinic image on the left
and a "Why choose us?" heading, description, and three feature items (Only
Top Products, The Best Doctors, Great Feedback) with icons on the right.

#### Scenario: Features are displayed

- **WHEN** the section renders
- **THEN** all three feature titles and descriptions are visible

### Requirement: Call-to-action banner

The template SHALL render a full-width coral banner with "Make your
appointment today!" title, description text, and a clickable phone number.

#### Scenario: CTA phone link works

- **WHEN** the CTA banner renders
- **THEN** the phone number links to the tel: protocol

### Requirement: Services grid

The template SHALL render six service cards in a 3-column grid, each with an
icon, title, and description (Facial Rejuvenation, Breast Augmentation,
Rhinoplasty, Injectable Treatments, Body Contouring, Smile Makeover).

#### Scenario: All services render

- **WHEN** the services section renders
- **THEN** all six service cards with titles and descriptions are visible

### Requirement: Parallax discount section

The template SHALL render a parallax background section with a large "30%"
discount badge, "Only in August" title, description, and a "Read More" button.

#### Scenario: Discount section content

- **WHEN** the parallax section renders
- **THEN** the discount percentage, title, description, and button are visible

### Requirement: Newsletter signup

The template SHALL render a newsletter section with a coral overlay,
"Subscribe to our newsletter" heading, email input, and subscribe button.

#### Scenario: Newsletter form is interactive

- **WHEN** the user types an email and clicks subscribe
- **THEN** the form submits without page navigation

### Requirement: Footer with Component Dock link

The template SHALL render a four-column footer with About (logo +
description), Contact Info, Locations (Miami, Los Angeles), and Opening Hours.
The bottom bar SHALL include a copyright line with a link to
https://www.componentdock.com/ branded "Component Dock", plus footer nav links.

#### Scenario: Component Dock link is present

- **WHEN** the footer renders
- **THEN** a link to https://www.componentdock.com/ with text "Component Dock" exists
- **AND** the link opens in a new tab
