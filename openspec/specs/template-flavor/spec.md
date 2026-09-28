# Flavor — Restaurant Website Template

## Purpose

Recreation of ColorLib "Luto" (https://colorlib.com/wp/template/luto/)
Preview: https://preview.colorlib.com/theme/luto/

Flavor is a restaurant one-pager with warm orange (#FF6107) branding, Poppins + Lora fonts, full-screen hero, tabbed menu, reservation form, and testimonials.

## Requirements

### Requirement: Header with navigation

Users SHALL see a fixed transparent navbar with the brand name "Flavor" and navigation links (Home, About, Specialties, Menu, Reservation, Contact).

#### Scenario: Header renders logo and nav links

- **WHEN** the page loads
- **THEN** the header displays the "Flavor" logo and all navigation links

#### Scenario: Mobile hamburger menu

- **WHEN** the user clicks the hamburger button on mobile
- **THEN** a slide-in menu panel opens with all nav links

### Requirement: Hero section with call-to-action

Users SHALL see a full-screen hero banner with a background image, heading "Special & Fresh Food", description text, and a "Book a table" CTA button.

#### Scenario: Hero displays heading and CTA

- **WHEN** the page loads
- **THEN** the hero section shows the heading and a "Book a table" button

### Requirement: Info bar with contact details

Users SHALL see a 4-column info bar with Address, Opening Time, Phone, and Email, each with a lucide icon.

#### Scenario: InfoBar shows 4 columns

- **WHEN** the page loads
- **THEN** four info items are displayed with icons

### Requirement: About section

Users SHALL see a two-column about section with "Welcome to Flavor" heading, description, and two food images.

#### Scenario: About section renders heading and description

- **WHEN** the page loads
- **THEN** the about section shows the heading and descriptive text

### Requirement: Specialties section

Users SHALL see a "Our Delicious Specialties" section with three dish cards showing images and titles.

#### Scenario: Specialties displays 3 dish cards

- **WHEN** the page loads
- **THEN** three specialty dish cards are rendered

### Requirement: Parallax introduction

Users SHALL see a parallax background section with "Foods you love to taste" heading and a "Watch Video" button.

#### Scenario: Parallax intro renders content

- **WHEN** the page loads
- **THEN** the parallax section displays the heading and CTA

### Requirement: Tabbed menu

Users SHALL see a menu section with tabs (Main, Desserts, Drinks) showing dish items with images, prices, and categories.

#### Scenario: Menu tabs switch content

- **WHEN** the user clicks a different tab
- **THEN** the corresponding menu items are displayed

### Requirement: Testimonials

Users SHALL see a "Our Customer Says" section with testimonial blockquotes on a parallax background.

#### Scenario: Testimonials render blockquotes

- **WHEN** the page loads
- **THEN** testimonial quotes with author names are displayed

### Requirement: Reservation form

Users SHALL see a reservation form with name, email, phone, date, time, and person count fields.

#### Scenario: Reservation form renders all fields

- **WHEN** the page loads
- **THEN** the reservation form displays all required input fields

### Requirement: Footer with Component Dock link

Users SHALL see a footer with 4 columns (About, Latest Blog, Instagram, Newsletter) and a copyright line linking to https://www.componentdock.com/.

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** the footer contains a link to componentdock.com branded as "Component Dock"
