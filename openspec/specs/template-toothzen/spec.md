# Template: Toothzen (Dental Clinic)

## Purpose

Recreation of ColorLib's "Dentamax" template as a React 19 + Vite + Tailwind 4 + TypeScript dental clinic website.

- **Source**: ColorLib "Dentamax" — https://colorlib.com/wp/template/dentamax/
- **Preview**: https://preview.colorlib.com/theme/dentamax/
- **Stack**: Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category**: Medical / Dental Clinic

## Design tokens

Extracted from the live preview's stylesheets (`css/style.css`).

### Fonts

| Role      | Font family        | Weights            |
| --------- | ------------------ | ------------------ |
| Body / UI | Roboto, sans-serif | 300, 400, 500, 700 |

Use Google Fonts `<link>` for Roboto.

### Colors

| Token               | Hex / Value              | Usage                                           |
| ------------------- | ------------------------ | ----------------------------------------------- |
| primary blue        | `#007bff`                | Buttons, links, primary accent                  |
| dark blue           | `#0f4883`                | Footer headings, logo text, appointment heading |
| teal accent         | `#65d8ea`                | Icon color, logo accent, service icons          |
| icon bg             | `#e1f9fb`                | Service icon circle background                  |
| hero gradient peach | `rgba(255,207,148,0.35)` | Hero overlay start (warm peach)                 |
| hero gradient tan   | `rgba(227,209,163,0.35)` | Hero overlay middle (tan)                       |
| hero gradient teal  | `#65d8ea`                | Hero overlay end (teal)                         |
| background          | `#FFFFFF` (white)        | Main content sections                           |
| text primary        | `#212529`                | Body text                                       |
| text muted          | `#6c757d`                | Secondary text                                  |
| footer text         | `#6c8faf`                | Footer paragraph and link text                  |
| footer heading      | `#0f4883`                | Footer section headings                         |
| light bg            | `#f8f9fa`                | Light section backgrounds                       |

## Requirements

### Requirement: Transparent navbar

The system SHALL render a fixed navbar with the brand name "Toothzen" (dark blue with teal accent), navigation links (Home, About, Services, Team, Blog, Contact), and an Appointment CTA button. On mobile, the navbar SHALL show a hamburger toggle that opens/closes a slide-down mobile menu.

#### Scenario: Desktop navbar content

- **GIVEN** the Toothzen page is loaded on a desktop viewport
- **THEN** the navbar SHALL show the brand "Toothzen" with teal accent
- **AND** the navbar SHALL show navigation links for Home, About, Services, Team, Blog, Contact
- **AND** the navbar SHALL show an "Appointment" button linking to #appointment

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on a mobile viewport
- **WHEN** the user taps the hamburger toggle button
- **THEN** the mobile menu SHALL open, displaying all nav links
- **AND** the toggle icon SHALL change from Menu to X

#### Scenario: Mobile menu link closes menu

- **GIVEN** the mobile menu is open
- **WHEN** the user taps any navigation link
- **THEN** the mobile menu SHALL close

### Requirement: Hero section

The system SHALL render a full-width hero section with a gradient overlay (peach → tan → teal), a background image, a headline "Achieve Desired Perfect Smile", descriptive text, and two CTA buttons ("Make an Appointment" and "Our Services").

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **THEN** the hero SHALL display the heading "Achieve Desired Perfect Smile"
- **AND** the hero SHALL display descriptive paragraph text
- **AND** the hero SHALL show a "Make an Appointment" CTA button
- **AND** the hero SHALL show a "Our Services" CTA button

#### Scenario: Hero slide navigation

- **GIVEN** the hero is rendered
- **THEN** left and right arrow buttons SHALL be present for slide navigation

### Requirement: Services strip

The system SHALL render 4 service cards (Emergency Service, Qualified Dentist, General Treatment, Online Appointment) with teal circular icons, white card backgrounds, headings, and descriptions.

#### Scenario: Four services displayed

- **GIVEN** the page is rendered
- **THEN** 4 service cards SHALL be displayed
- **AND** each card SHALL have a teal circular icon, a heading, and a description

### Requirement: Features and appointment form

The system SHALL render a "Make An Appointment" section with a gradient background, 4 feature items (Easy Booking, Experience, Flexible Schedule, Best Price Guarantee), and an appointment form with Name, Phone, Date, Time, Service fields and a submit button.

#### Scenario: Features displayed

- **GIVEN** the page is rendered
- **THEN** 4 feature items SHALL be shown with icons and descriptions

#### Scenario: Appointment form

- **GIVEN** the page is rendered
- **THEN** an appointment form SHALL be displayed with inputs for Name, Phone, Date, Time, and a Service dropdown
- **AND** a "Book Appointment" submit button SHALL be present

### Requirement: About section

The system SHALL render an About section with the heading "We Are Toothzen A Dental Clinic", a clinic image, descriptive text, and a "Get in touch with us" CTA link.

#### Scenario: About content

- **GIVEN** the page is rendered
- **THEN** the heading "We Are Toothzen A Dental Clinic" SHALL be displayed
- **AND** a clinic image SHALL be shown alongside descriptive text
- **AND** a "Get in touch with us" link SHALL be present

### Requirement: Team section

The system SHALL render a Team section with the heading "Our Qualified Dentist", 4 dentist cards with photos, names, roles, and social media icon links.

#### Scenario: Four dentist cards

- **GIVEN** the page is rendered
- **THEN** 4 dentist cards SHALL be displayed in a grid
- **AND** each card SHALL have a photo, name, role, and social media icons

### Requirement: Counter section

The system SHALL render a counter section with a background image and 3 animated stat items (Year Experience, Our Staff, Services Provided) that count up when scrolled into view.

#### Scenario: Counter values animate

- **GIVEN** the counter section scrolls into view
- **THEN** the counters SHALL animate from 0 to their final values

### Requirement: Testimonials section

The system SHALL render a Testimonials section with the heading "What Our Clients Say" and 3 testimonial cards with quotes, star ratings, and client names.

#### Scenario: Three testimonials

- **GIVEN** the page is rendered
- **THEN** 3 testimonial cards SHALL be displayed
- **AND** each card SHALL have a quote, star rating, and client name

### Requirement: Blog section

The system SHALL render a Blog section with the heading "Recent Posts" and 3 blog post cards with images, titles, dates, and "Read more" links.

#### Scenario: Three blog posts

- **GIVEN** the page is rendered
- **THEN** 3 blog post cards SHALL be displayed
- **AND** each card SHALL have an image, title, date, and "Read more" link

### Requirement: Newsletter section

The system SHALL render a Newsletter section with a background image, heading "Subscribe to our Newsletter", an email input, and a "Subscribe" button.

#### Scenario: Newsletter form

- **GIVEN** the page is rendered
- **THEN** an email input and Subscribe button SHALL be displayed

### Requirement: Footer

The system SHALL render a footer with the brand name, link columns (Toothzen, Explore, Info), copyright notice, and a "Made with Component Dock" link pointing to https://www.componentdock.com/.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **THEN** the footer SHALL display the brand name "Toothzen"
- **AND** the footer SHALL show link columns for Explore and Info
- **AND** the footer SHALL display a copyright notice
- **AND** the footer SHALL link to https://www.componentdock.com/ branded as "Component Dock"

#### Scenario: No ColorLib references

- **GIVEN** the app source code is inspected
- **THEN** no file under `apps/toothzen/` SHALL contain the string "colorlib" (case-insensitive)
