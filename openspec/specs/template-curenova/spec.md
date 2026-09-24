# CureNova — Medical & Healthcare Center Template

## Purpose

Recreation of ColorLib "Healthcare" (https://colorlib.com/wp/template/healthcare/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript template. A full-featured medical center landing page with hero, statistics, services, about section, features, doctor profiles, testimonials, blog, and footer with appointment form.

## Requirements

### Requirement: Navbar with logo and navigation

The template SHALL display a sticky navigation bar with the brand name "Curenova" and links to Home, Doctors, Services, Departments, Blog, and Contact sections.

#### Scenario: Navbar renders on page load

- **WHEN** the page loads
- **THEN** the navbar is visible with the "Curenova" logo and all navigation links

#### Scenario: Navbar becomes sticky on scroll

- **WHEN** the user scrolls down the page
- **THEN** the navbar remains fixed at the top of the viewport

### Requirement: Hero section with call to action

The template SHALL display a full-width hero section with a background image, dark overlay, headline text, and a "Make an Appointment" CTA button.

#### Scenario: Hero renders with headline and CTA

- **WHEN** the page loads
- **THEN** a hero section is visible with the headline "Your Health is always in the first place" and a "Make an Appointment" button

### Requirement: Statistics counter section

The template SHALL display a statistics section with 4 counter items: Satisfied Customer (3,297), Hospitals (378), Qualified Doctor (400), and Departments (30).

#### Scenario: Stats section displays all counters

- **WHEN** the page loads
- **THEN** 4 stat items are visible with their respective icons, numbers, and labels

### Requirement: Services grid

The template SHALL display a services section with a heading "Comprehensive services for our patients" and service items including Diagnostics, Home Appointments, Pharmacy, Lab Research, and Medical Transport.

#### Scenario: Services section renders all items

- **WHEN** the page loads
- **THEN** the services section is visible with all service items and icons

### Requirement: About section with accordion

The template SHALL display a split about section with an image on one side and an accordion with three panels (Our Mission, Our Vision, Why Choose Us) on the other.

#### Scenario: About accordion expands and collapses

- **WHEN** the user clicks an accordion header
- **THEN** the corresponding panel expands and other panels collapse

### Requirement: Features highlight section

The template SHALL display a features section with a background image and 4 feature items: Qualified Doctors, Free Consultation, Online Enrollment, and Modern Facilities.

#### Scenario: Features section renders all items

- **WHEN** the page loads
- **THEN** 4 feature items are visible with icons, titles, and descriptions

### Requirement: Doctor profiles section

The template SHALL display doctor profiles with names, specialties, descriptions, and action buttons (Email us, Make an appointment).

#### Scenario: Doctors section renders all profiles

- **WHEN** the page loads
- **THEN** 3 doctor profiles are visible with names, specialties, and action buttons

### Requirement: Testimonials section

The template SHALL display patient testimonials with avatar images, names, quotes, and 5-star ratings.

#### Scenario: Testimonials section renders all testimonials

- **WHEN** the page loads
- **THEN** testimonial cards are visible with quotes, names, and star ratings

### Requirement: Blog section

The template SHALL display 3 blog cards with images, author/date metadata, titles, excerpts, and "Read more" links.

#### Scenario: Blog section renders all cards

- **WHEN** the page loads
- **THEN** 3 blog cards are visible with titles and excerpts

### Requirement: Footer with appointment form and Component Dock attribution

The template SHALL display a footer with columns for Head Office info, Departments, Useful Links, Support, and an appointment form. The footer MUST link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer renders all columns

- **WHEN** the page loads
- **THEN** the footer contains contact info, navigation links, and an appointment form

#### Scenario: Footer appointment form validates input

- **WHEN** the user submits the form with empty or invalid fields
- **THEN** an error message is displayed

#### Scenario: Footer contains Component Dock link

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/ labeled "Component Dock"
