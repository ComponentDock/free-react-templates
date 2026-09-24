# Spec: Healix

Recreation of ColorLib **Medex** (https://colorlib.com/wp/template/medex/)

## Purpose

Build a medical and healthcare website template that faithfully recreates the ColorLib Medex design as a React 19 + Tailwind CSS 4 + TypeScript application under the name "Healix".

## Design Tokens

- **Brand color:** #2086c2 (blue), #299adc (lighter blue accent)
- **CTA green:** #3bc053
- **Font:** Roboto (Google Fonts)
- **Body text:** #666 (gray)
- **Section backgrounds:** #f2f2f2 (light gray), white, dark overlays on hero
- **Button style:** rounded, solid fills, hover opacity

## Requirements

### Requirement: TopBar with contact information

The template SHALL display a top bar with phone number, email address, and physical address.

#### Scenario: Renders contact details

- **WHEN** the page loads
- **THEN** the phone number "+1 234 567 8900" is visible
- **AND** the email "info@healix.com" is visible
- **AND** the address "123 Medical Center Dr" is visible

### Requirement: Navbar with navigation and CTA

The template SHALL display a dark navigation bar with logo, navigation links, and an emergency phone CTA.

#### Scenario: Renders all navigation links

- **WHEN** the page loads
- **THEN** the logo "Healix" is displayed
- **AND** navigation links for Home, About, Services, Doctors, Departments, Blog, Contact are visible

#### Scenario: Mobile menu toggle

- **WHEN** the hamburger button is clicked on mobile
- **THEN** the mobile menu expands showing all navigation links

### Requirement: Hero banner with appointment search

The template SHALL display a full-height hero section with headline and appointment search form.

#### Scenario: Renders hero content

- **WHEN** the page loads
- **THEN** the headline "The Most Valuable Thing is Your Health" is displayed
- **AND** a doctor selection dropdown is present
- **AND** a department selection dropdown is present
- **AND** a search button is visible

### Requirement: Appointment form section

The template SHALL display a welcome section with an appointment booking form.

#### Scenario: Renders appointment form

- **WHEN** the page loads
- **THEN** the heading "Welcome to Healix" is displayed
- **AND** form fields for name, email, department, and preferred time are present
- **AND** a submit button "Request Appointment" is visible

### Requirement: Statistics counter

The template SHALL display key statistics with animated counters.

#### Scenario: Renders all statistics

- **WHEN** the page loads
- **THEN** the stat "18+ Years of Experience" is displayed
- **AND** "450+ Happy Patients" is displayed
- **AND** "15+ Qualified Doctors" is displayed
- **AND** "45+ Awards Won" is displayed

### Requirement: About section with features

The template SHALL display an about section with clinic description and feature highlights.

#### Scenario: Renders about content

- **WHEN** the page loads
- **THEN** the heading "Your Health is Our Priority" is displayed
- **AND** feature items including "Qualified Doctors" and "Emergency Services" are visible

### Requirement: Departments grid

The template SHALL display department cards with background images.

#### Scenario: Renders all departments

- **WHEN** the page loads
- **THEN** 7 department cards are displayed (Neurology, Ophthalmology, Nuclear Magnetic, X-Ray, Surgical, Cardiology, Dental)

### Requirement: Doctor profiles

The template SHALL display doctor profiles with names and specialties.

#### Scenario: Renders doctor information

- **WHEN** the page loads
- **THEN** "Dr. Alicia Henderson" with specialty "Cardiologist" is displayed
- **AND** "Dr. James Wilson" with specialty "Neurologist" is displayed
- **AND** "Dr. Sarah Mitchell" with specialty "Ophthalmologist" is displayed

### Requirement: Blog section

The template SHALL display latest blog posts with titles, excerpts, dates, and read more links.

#### Scenario: Renders blog posts

- **WHEN** the page loads
- **THEN** 3 blog post cards are displayed with titles and read more links

### Requirement: Testimonials

The template SHALL display patient testimonials with names and quotes.

#### Scenario: Renders testimonial content

- **WHEN** the page loads
- **THEN** patient names "Jessica Torres" and "Rebecca Gray" are displayed with quotes

### Requirement: Footer with Component Dock attribution

The template SHALL display a footer with contact info, department links, and Component Dock attribution.

#### Scenario: Renders footer content

- **WHEN** the page loads
- **THEN** the footer contains the "Healix" brand name
- **AND** contact information is displayed
- **AND** a link to "https://www.componentdock.com/" with text "Component Dock" is present

### Requirement: App renders all sections

The template App component SHALL compose all sections in the correct order.

#### Scenario: Renders without crashing

- **WHEN** the App component mounts
- **THEN** all sections render in order: TopBar, Navbar, HeroBanner, AppointmentSection, StatsCounter, AboutSection, Departments, Doctors, BlogSection, Testimonials, Footer
