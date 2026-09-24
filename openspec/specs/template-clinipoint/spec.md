# Spec: Clinipoint — Health & Medical Landing Template

Recreation of ColorLib Medica (https://colorlib.com/wp/template/medica/).
Preview: https://preview.colorlib.com/theme/medica/

## Purpose

Clinipoint is a health and medical clinic landing page template featuring a gradient top bar, sticky navbar, hero banner with dark overlay, contact info cards, three-column welcome cards (emergency/doctors/appointment), services grid on gradient background, doctor profiles, testimonials on dark background, stats counter, appointment booking form, partner logos, and a dark footer.

## Design Tokens

- **Heading font:** Open Sans (Google Fonts)
- **Body font:** Roboto (Google Fonts)
- **Heading color:** #1d1d1d
- **Body text:** #5f5f5f
- **Primary blue:** #2f88fd
- **Accent cyan:** #3de6fa
- **Gradient:** linear-gradient(to right, #3de6fa, #243eff)
- **Hero overlay:** rgba(0, 28, 100, 0.85)
- **Services overlay:** rgba(0, 28, 100, 0.85)
- **Testimonials overlay:** rgba(0, 0, 0, 0.8)
- **Footer bg:** #172538
- **Footer bottom:** #0b131e
- **Footer text:** #b8bdc3 (light gray)
- **CTA button border:** #2f88fd
- **Section spacing:** 80px vertical padding

## Requirements

### Requirement: Gradient top bar displays social links and quick menu

Users SHALL see a gradient top bar (cyan to blue) with social media icons on the left and quick links (FAQ, Book, Appointment, Contacts, email) on the right.

#### Scenario: Top bar renders on desktop

- **WHEN** the user views the page on desktop
- **THEN** a gradient bar with social icons and 5 menu items is visible above the navbar

### Requirement: Sticky navbar with logo and navigation

Users SHALL see a sticky navbar with the Clinipoint logo, navigation links (Home, About, Services, Doctors, Contact), and a search icon.

#### Scenario: Desktop navbar shows all links

- **WHEN** the user views the page on a desktop viewport
- **THEN** the navbar shows the logo, 5 navigation links, and a search icon

#### Scenario: Mobile hamburger toggles menu

- **WHEN** the user clicks the hamburger icon on mobile
- **THEN** a mobile navigation menu opens with links

### Requirement: Hero section displays medical services tagline

Users SHALL see a full-width hero with dark overlay, headline "We provide top medical services", subtitle "More than 30 professionals", and two CTA buttons.

#### Scenario: Hero renders headline and CTAs

- **WHEN** the user views the hero section
- **THEN** the headline "We provide top medical services" is displayed
- **AND** "Make an Appointment" and "Read More" buttons are visible

### Requirement: Contact info section shows 3 info cards

Users SHALL see a contact info bar with 3 cards: operating hours, phone numbers, and address.

#### Scenario: Contact info shows hours, phone, address

- **WHEN** the user scrolls to the contact info section
- **THEN** 3 contact info cards are visible with hours, phone, and address details

### Requirement: Welcome section with 3 feature cards and about text

Users SHALL see a section with 3 stacked cards (emergency info, doctors info, appointment form) and a "Welcome to Clinipoint Health Center" text area with specialty list and doctor image.

#### Scenario: Welcome section shows cards and text

- **WHEN** the user scrolls to the welcome section
- **THEN** 3 cards are visible (emergency, doctors, appointment)
- **AND** the "Welcome to Clinipoint Health Center" heading is displayed
- **AND** a list of 8 medical specialties is shown

### Requirement: Services section displays 6 services on gradient background

Users SHALL see a gradient-background section with 6 service cards (Ambulatory Care, Laboratory, Ambulance Service, Radiology, Emergency Care, Pharmacy) and a "See All Services" button.

#### Scenario: Services section renders all 6 services

- **WHEN** the user scrolls to the services section
- **THEN** 6 service cards are visible with icons, titles, and descriptions

### Requirement: Doctors section shows 4 doctor profiles

Users SHALL see 4 doctor cards with photos, names, specialties, and social links.

#### Scenario: Doctors section renders 4 profiles

- **WHEN** the user scrolls to the doctors section
- **THEN** 4 doctor cards are visible with name, specialty, and social icons

### Requirement: Testimonials section on dark background

Users SHALL see a dark-background testimonials section with patient quotes and author info.

#### Scenario: Testimonials section renders

- **WHEN** the user scrolls to the testimonials section
- **THEN** testimonial quotes and author names are visible

### Requirement: Stats counter section with 4 metrics

Users SHALL see a gradient section with 4 counter cards: Patients since opening, Specialist Doctors, Years of Experience, Pro Bono Works.

#### Scenario: Stats section renders all 4 counters

- **WHEN** the user scrolls to the stats section
- **THEN** 4 counter values and labels are visible

### Requirement: Appointment booking form with image

Users SHALL see a two-column layout with an appointment form (name, specialty, phone, doctor, email, date) on the left and a medical illustration on the right.

#### Scenario: Appointment form renders all fields

- **WHEN** the user scrolls to the appointment section
- **THEN** the form shows Name, Specialty, Phone, Doctor, Email, and Date fields
- **AND** a "Make an Appointment" submit button is visible

### Requirement: Partners section displays logo row

Users SHALL see a row of 5 partner logos.

#### Scenario: Partners section renders

- **WHEN** the user scrolls to the partners section
- **THEN** 5 partner logo images are visible

### Requirement: Footer with 4 columns and Component Dock link

Users SHALL see a dark footer with 4 columns (logo+description, latest news, quick links, contact info) and a bottom bar with copyright and Component Dock link.

#### Scenario: Footer renders all columns

- **WHEN** the user scrolls to the footer
- **THEN** 4 footer columns are visible
- **AND** the "Component Dock" link points to https://www.componentdock.com/

#### Scenario: Footer bottom bar shows copyright

- **WHEN** the user views the footer bottom
- **THEN** the copyright year and "More templates at Component Dock" text is visible
