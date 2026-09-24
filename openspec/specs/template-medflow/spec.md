# Spec: Medflow — Medical Clinic Landing Template

Recreation of ColorLib Medi (https://colorlib.com/wp/template/medi/).
Preview: https://preview.colorlib.com/theme/medi/

## Purpose

Medflow is a medical clinic landing page template featuring a hero banner with blue gradient overlay, welcome section with checklist, tabbed department showcase, doctor profiles, appointment booking form, quality health features, emergency contact banner, and a dark footer with department listings and hours.

## Design Tokens

- **Heading font:** Work Sans (Google Fonts)
- **Body font:** Roboto (Google Fonts)
- **Heading color:** #191d34
- **Body text:** #5c5c5c
- **Primary blue:** #0181f5 → #5db2ff (linear gradient left)
- **Hero overlay:** rgba(0, 28, 100, 0.8) → rgba(0, 53, 187, 0.3)
- **Emergency section bg:** rgba(0, 171, 231, 0.8) (cyan overlay)
- **Footer bg:** #152538 (dark blue-gray)
- **Footer text:** #b8bdc3
- **CTA button gradient:** #24c0f1 → #4c9afe
- **Section spacing:** ~100px vertical padding

## Requirements

### Requirement: Navbar displays navigation and booking CTA

Users SHALL see a sticky navbar with logo, navigation links (Home, About, Departments, Doctors, Contact), and a "Book Appointment" button.

#### Scenario: Desktop navbar shows all links

- **WHEN** the user views the page on a desktop viewport
- **THEN** the navbar shows the logo, 5 navigation links, and a "Book Appointment" button

#### Scenario: Mobile hamburger toggles menu

- **WHEN** the user clicks the hamburger icon on mobile
- **THEN** a mobile navigation menu opens with links and a "Book Appointment" button
- **AND** clicking a link closes the menu

### Requirement: Hero section displays clinic tagline

Users SHALL see a full-width hero with blue gradient overlay, tagline "the best medical center", and headline "Bringing health to life for the whole family."

#### Scenario: Hero renders headline and CTA

- **WHEN** the user views the hero section
- **THEN** the headline "Bringing health to life for the whole family." is displayed
- **AND** a "Discover More" button is visible

### Requirement: Welcome section shows clinic intro

Users SHALL see a 2-column layout with an image on the left and "Welcome To Modern Clinic." text with checklist items on the right.

#### Scenario: Welcome shows checklist and about button

- **WHEN** the user scrolls to the Welcome section
- **THEN** 3 checklist items with check icons are displayed
- **AND** an "About Us" button is visible

### Requirement: Departments tabbed showcase

Users SHALL see 6 department tabs (Dentistry, Cardiology, ENT Specialists, Neurology, Blood Screening, More) that switch content on click.

#### Scenario: Default tab shows Dentistry

- **WHEN** the user views the Departments section
- **THEN** the Dentistry tab is active by default
- **AND** the Dentistry content with image and description is shown

#### Scenario: Clicking a tab switches content

- **WHEN** the user clicks the Cardiology tab
- **THEN** the Cardiology content is displayed
- **AND** the Dentistry content is hidden

### Requirement: Doctor profiles grid

Users SHALL see 3 doctor cards in a row with photo, name, specialty, and social links (Facebook, LinkedIn, Twitter).

#### Scenario: Doctor cards render correctly

- **WHEN** the user views the Doctors section
- **THEN** 3 doctor cards are displayed with names, specialties, and social link icons

### Requirement: Appointment booking form

Users SHALL see a right-aligned form with doctor select dropdown, name, age, phone, email, date, time fields, and a submit button.

#### Scenario: Form fields are interactive

- **WHEN** the user fills in the form fields
- **THEN** each field updates its value
- **AND** the form can be submitted

### Requirement: Quality Health feature cards

Users SHALL see 3 feature cards: Health Consultation, Find Health, and Search Doctor with icons.

#### Scenario: Feature cards render with icons

- **WHEN** the user views the Quality Health section
- **THEN** 3 cards are displayed with icons, titles, and descriptions

### Requirement: Emergency contact banner

Users SHALL see a cyan overlay banner with "We are here for you", "Book Appointment" button, and phone number.

#### Scenario: Emergency banner shows contact info

- **WHEN** the user views the Emergency section
- **THEN** the text "Emergency Medical Care" and phone number "+1-465 4545" are visible

### Requirement: Footer with departments and hours

Users SHALL see a dark footer with logo, description, social links, departments list, and operating hours. The copyright line SHALL link to Component Dock.

#### Scenario: Footer links to Component Dock

- **WHEN** the user views the footer copyright line
- **THEN** a "Component Dock" link pointing to https://www.componentdock.com/ is present

#### Scenario: Footer shows departments and hours

- **WHEN** the user views the footer
- **THEN** department names and operating hours for Monday-Friday, Saturday, and Sunday are displayed
