# Medprime — recreation of ColorLib Medi 2

## Purpose

Medprime is a medical clinic landing page template that recreates the ColorLib "Medi 2" design using React 19, Vite, Tailwind CSS 4, and TypeScript. It provides a professional medical website with sections for services, doctors, appointments, and emergency contact.

## Requirements

### Requirement: Blue-themed navigation bar

The template SHALL display a sticky navigation bar with a blue (#1a73e8) background, white logo text, navigation links (Home, About, Blog, Pages, Contact), and a white "Book Appointment" button.

#### Scenario: Desktop navigation rendering

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar shows the logo, all five navigation links, and the Book Appointment button
- **AND** the navbar has a blue background

#### Scenario: Mobile navigation toggle

- **WHEN** the hamburger menu button is clicked on a mobile viewport
- **THEN** the mobile navigation menu expands showing all links and the Book Appointment button
- **AND** clicking a link closes the menu

### Requirement: Hero section with medical imagery

The template SHALL display a full-width hero section with a dark blue overlay on a medical-themed background image, a subtitle "THE BEST MEDICAL CENTER", a heading "Bringing health to life for the whole family.", and a "Discover More" button with white border.

#### Scenario: Hero content rendering

- **WHEN** the hero section is visible
- **THEN** the subtitle, heading, and Discover More button are displayed
- **AND** the background has a dark blue gradient overlay

#### Scenario: Discover More scrolls to about

- **WHEN** the user clicks the Discover More button
- **THEN** the page scrolls smoothly to the about section

### Requirement: Welcome section with doctor image

The template SHALL display a two-column welcome section with a doctor image on the left and a "Welcome To Modern Clinic." heading with descriptive text and a "Our Departments" button on the right.

#### Scenario: Welcome content rendering

- **WHEN** the welcome section is visible
- **THEN** a doctor image, heading, paragraph, and Our Departments button are displayed

### Requirement: Department cards grid

The template SHALL display a 3-column grid of department cards (Cardiology, Neurology, Ophthalmology, Orthopedics, General Medicine, Pediatrics) with icons, titles, and descriptions on a light gray background.

#### Scenario: Department cards rendering

- **WHEN** the departments section is visible
- **THEN** six department cards are displayed with icons, titles, and descriptions

### Requirement: Doctor team cards

The template SHALL display doctor cards with photos, names, specialties, and social media icon overlays on hover.

#### Scenario: Doctor cards rendering

- **WHEN** the doctors section is visible
- **THEN** three doctor cards are shown with name, specialty, and image

### Requirement: Appointment booking form

The template SHALL display a form with fields for name, email, phone, department select, date, and message, with a submit button.

#### Scenario: Form field rendering

- **WHEN** the appointment section is visible
- **THEN** all six form fields and the submit button are displayed

#### Scenario: Form interaction

- **WHEN** the user types in the name field
- **THEN** the field value updates to reflect the typed text

### Requirement: Quality health features section

The template SHALL display four feature cards (Quality Services, 24/7 Emergency, Expert Doctors, Trusted Care) with icons and descriptions.

#### Scenario: Feature cards rendering

- **WHEN** the quality health section is visible
- **THEN** four feature cards are displayed with icons and descriptions

### Requirement: Emergency contact bar

The template SHALL display a bright blue (#00abe7) emergency contact bar with phone number, location, and working hours.

#### Scenario: Emergency contact rendering

- **WHEN** the emergency section is visible
- **THEN** phone number, address, and working hours are displayed

### Requirement: Footer with Component Dock link

The template SHALL display a dark footer (#152538) with logo, three link columns (Services, Company, Support), copyright notice, and a "Made with Component Dock" link to https://www.componentdock.com/.

#### Scenario: Footer content rendering

- **WHEN** the footer is visible
- **THEN** the logo, link columns, copyright, and Component Dock link are displayed

#### Scenario: Component Dock link target

- **WHEN** the user clicks the Component Dock link
- **THEN** it opens https://www.componentdock.com/ in a new tab
