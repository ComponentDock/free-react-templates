---
name: template-medpact
description: >
  Recreate the ColorLib "Medicare" hospital & clinics website template as
  "Medpact" — React 19 + Vite + Tailwind CSS 4 + TypeScript.
  Preview: https://preview.colorlib.com/theme/medicare/
version: 1.0.0
governance:
  owner: ComponentDock
  status: draft
  risk_level: low
  requires_council: false
metadata:
  template: true
  template_name: medpact
  colorlib_slug: medicare
  colorlib_url: https://colorlib.com/wp/template/medicare/
---

# Medpact — Hospital & Clinics Website Template

## Purpose

Recreate the ColorLib "Medicare" hospital & clinics website template as "Medpact" — a clean, professional medical landing page with navigation, hero, services, departments, doctors, appointment form, testimonials, blog, and footer.

## Design Tokens

- **Primary brand:** #007bff (vibrant blue, buttons, accents)
- **Secondary/accent:** #00b894 (teal-green, feature icons, highlights)
- **Dark text:** #2d3436 (headings)
- **Muted text:** #636e72 (body/secondary text)
- **Section bg:** #f8f9fa (light gray sections)
- **Footer bg:** #2d3436 (dark footer)
- **Card border:** #e9ecef
- **Font headings:** Poppins (Google Fonts)
- **Font body:** Open Sans (Google Fonts)

## Requirements

### Requirement: Navigation bar

The page SHALL display a sticky navigation bar with the site logo, nav links (Home, About, Departments, Doctors, Blog, Contact), and an appointment CTA button.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar shows the Medpact logo, all 6 nav links, and the appointment button

#### Scenario: Mobile navigation toggles

- **WHEN** the user clicks the hamburger menu on mobile
- **THEN** the mobile navigation panel opens with all links
- **AND** clicking a link closes the panel

### Requirement: Hero section

The page SHALL display a hero section with a headline, description, and two CTA buttons (primary: Make Appointment, secondary: Our Services).

#### Scenario: Hero renders content

- **WHEN** the user views the hero section
- **THEN** they see the headline "Welcome to Medpact Hospital", a description, and two CTA buttons

### Requirement: Feature strip

The page SHALL display a feature strip with 4 icon cards (Emergency Help, Appointment, Qualified Doctors, 24/7 Service).

#### Scenario: Feature strip renders 4 cards

- **WHEN** the user views the feature strip
- **THEN** they see exactly 4 feature cards with icons and labels

### Requirement: About section

The page SHALL display an about section with a heading, description, image, and checkmark list.

#### Scenario: About section content

- **WHEN** the user views the about section
- **THEN** they see the heading "Why Choose Us", a description, an image, and checklist items

### Requirement: Services section

The page SHALL display a services section with 4 service cards (Cardiology, General Checkup, Neurology, Orthopedics).

#### Scenario: Services renders 4 cards

- **WHEN** the user views the services section
- **THEN** they see exactly 4 service cards with icons and descriptions

### Requirement: Departments section

The page SHALL display a departments section with a grid of department cards.

#### Scenario: Departments renders grid

- **WHEN** the user views the departments section
- **THEN** they see 6 department cards with icons and descriptions

### Requirement: Doctors section

The page SHALL display a doctors section with profile cards showing image, name, and specialty.

#### Scenario: Doctors renders profile cards

- **WHEN** the user views the doctors section
- **THEN** they see 4 doctor cards with images, names, and specialties

### Requirement: Appointment form

The page SHALL display an appointment booking form with name, email, phone, department, date, and message fields.

#### Scenario: Form validation

- **WHEN** the user submits the form without filling required fields
- **THEN** browser validation errors appear

#### Scenario: Form submission

- **WHEN** the user fills all required fields and submits
- **THEN** a confirmation message appears

#### Scenario: Name field input

- **WHEN** the user types in the name field
- **THEN** the field updates with the typed text

### Requirement: Testimonials section

The page SHALL display a testimonials section with patient testimonial cards.

#### Scenario: Testimonials render

- **WHEN** the user views the testimonials section
- **THEN** they see 3 testimonial cards with names and quotes

### Requirement: Blog section

The page SHALL display a blog section with post cards showing image, category, date, title, and excerpt.

#### Scenario: Blog renders posts

- **WHEN** the user views the blog section
- **THEN** they see 3 blog post cards with images, dates, and Read More links

### Requirement: Footer

The page SHALL display a footer with the site logo, quick links, services links, newsletter form, and copyright with a Component Dock link.

#### Scenario: Footer newsletter subscription

- **WHEN** the user submits the newsletter form with an email
- **THEN** a confirmation message appears

#### Scenario: Component Dock credit

- **WHEN** the user views the footer copyright line
- **THEN** they see a link to componentdock.com labeled "Component Dock"

### Requirement: Accessibility

The page SHALL be accessible via keyboard navigation and screen readers.

#### Scenario: Keyboard navigation

- **WHEN** the user navigates via keyboard
- **THEN** all interactive elements are focusable with visible focus rings

#### Scenario: Screen reader support

- **WHEN** the user uses a screen reader
- **THEN** all sections have proper headings and ARIA labels

### Requirement: Responsive design

The page SHALL be responsive and work on mobile devices.

#### Scenario: Mobile layout

- **WHEN** the user views the page on a mobile viewport
- **THEN** the layout stacks vertically and the nav collapses to a hamburger menu
