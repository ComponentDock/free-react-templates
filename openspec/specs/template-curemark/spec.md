# Template: Curemark (Medical & Healthcare)

## Purpose

Curemark is a full-page MEDICAL & HEALTHCARE landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Medart" free template (source:
https://colorlib.com/wp/template/medart/), built under a DIFFERENT name
(**Curemark**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4

- TypeScript.

The original is a Bootstrap-based medical website with a hero slider,
info boxes (opening hours, emergency, appointment form), a 3x3 grid of
department cards, patient testimonials, blog/news cards, newsletter signup,
and a multi-column footer. Design tokens: Raleway font, cyan-to-blue
gradient (#32c8fa → #587de4), body text #404040, accent #18a3eb, section
backgrounds #f0f4f8 / #f3f3f3 / #eaf1f3.

## Requirements

### Requirement: Navbar with logo, navigation, and emergency CTA

The template SHALL display a fixed-position navbar with the "Curemark"
logo, navigation links (Home, About, Services, News, Contact), and an
emergency CTA button showing a phone icon and phone number.

#### Scenario: Desktop navbar renders all elements

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar SHALL display the "Curemark" logo text
- **AND** navigation links for Home, About, Services, News, Contact SHALL be visible
- **AND** an emergency CTA button with phone number SHALL be visible

#### Scenario: Mobile hamburger toggle

- **WHEN** the page loads on a mobile viewport
- **THEN** a hamburger menu button SHALL be visible
- **AND** navigation links SHALL be hidden by default
- **WHEN** the user clicks the hamburger button
- **THEN** the mobile navigation menu SHALL become visible

### Requirement: Hero banner with background image and CTA

The template SHALL display a full-width hero section with a background
image, dark overlay, headline "The Best Medical Services", subtitle text,
and a "Read More" gradient button.

#### Scenario: Hero renders headline and CTA

- **WHEN** the hero section is rendered
- **THEN** the heading "The Best Medical Services" SHALL be visible
- **AND** a subtitle paragraph SHALL be visible
- **AND** a "Read More" button with gradient background SHALL be present

### Requirement: Information boxes (hours, emergency, appointment)

The template SHALL display a 3-column responsive layout with Opening
Hours, Emergency contact, and an Appointment booking form.

#### Scenario: Opening hours schedule

- **WHEN** the info boxes section is rendered
- **THEN** "Opening Hours" heading SHALL be visible
- **AND** a schedule list with Mon-Thu 8-19, Fri 8-18:30, Sat 9:30-17, Sun 9:30-15 SHALL be displayed

#### Scenario: Emergency contact CTA

- **WHEN** the info boxes section is rendered
- **THEN** "Emergency" heading SHALL be visible
- **AND** a gradient CTA button with phone number SHALL be present

#### Scenario: Appointment form

- **WHEN** the info boxes section is rendered
- **THEN** "Make an Appointment" heading SHALL be visible
- **AND** a form with department select, doctor select, name input, phone input, and submit button SHALL be present

### Requirement: Department cards in 3x3 grid

The template SHALL display a heading "Our Departments" followed by a
responsive 3-column grid of 9 department cards, each with an icon,
title, description, and "read more" link.

#### Scenario: All 9 departments rendered

- **WHEN** the departments section is rendered
- **THEN** the heading "Our Departments" SHALL be visible
- **AND** 9 department cards SHALL be rendered
- **AND** each card SHALL display an icon, title, description, and "read more" link

#### Scenario: Department names

- **WHEN** the departments section is rendered
- **THEN** the following departments SHALL be present: Cardiology, Gastroenterology, Medical Lab, Dental Care, Surgery, Neurology, Orthopaedy, Pediatry, Ophthalmology

### Requirement: Patient testimonials

The template SHALL display a "Patient's Testimonials" heading followed
by testimonial cards with quote text, avatar image, name, and affiliation.

#### Scenario: Testimonials rendered

- **WHEN** the testimonials section is rendered
- **THEN** the heading "Patient's Testimonials" SHALL be visible
- **AND** at least 3 testimonial cards SHALL be displayed
- **AND** each card SHALL show a quote, avatar, name, and affiliation

### Requirement: News/blog posts

The template SHALL display a "The News" heading followed by 3 blog post
cards with image, title, meta information (date, author, comments), and
excerpt.

#### Scenario: News cards rendered

- **WHEN** the news section is rendered
- **THEN** the heading "The News" SHALL be visible
- **AND** 3 blog post cards SHALL be displayed
- **AND** each card SHALL show an image, title, date, author, comments count, and excerpt

### Requirement: Newsletter subscription

The template SHALL display a gradient-background newsletter section with
a heading, email input, and subscribe button.

#### Scenario: Newsletter form

- **WHEN** the newsletter section is rendered
- **THEN** the heading "Subscribe to our newsletter" SHALL be visible
- **AND** an email input SHALL be present
- **AND** a "Subscribe" button SHALL be present

#### Scenario: Successful subscription

- **WHEN** the user enters a valid email and clicks Subscribe
- **THEN** a "Thank you for subscribing!" confirmation message SHALL be displayed

### Requirement: Footer with contact info and Component Dock link

The template SHALL display a 3-column footer with about section, contact
information, and useful links. The footer MUST link
https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer columns

- **WHEN** the footer is rendered
- **THEN** an about section with logo and description SHALL be present
- **AND** contact information (address, phone, email) SHALL be visible
- **AND** useful links (Home, About, Departments, Contact, FAQ, Testimonials) SHALL be listed

#### Scenario: Component Dock credit

- **WHEN** the footer is rendered
- **THEN** a link to https://www.componentdock.com/ branded "Component Dock" SHALL be present
