# Template: Smilecraft (Dental Clinic)

## Purpose

Recreation of ColorLib's "Dentacare" template as a React 19 + Vite + Tailwind 4 + TypeScript dental clinic website.

- **Source**: ColorLib "Dentacare" — https://colorlib.com/wp/template/dentacare/
- **Preview**: https://preview.colorlib.com/theme/dentacare/
- **Stack**: Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category**: Medical / Dental Clinic

## Design tokens

Extracted from the live preview's stylesheets (`css/style.css`).

### Fonts

| Role      | Font family           | Weights       |
| --------- | --------------------- | ------------- |
| Body / UI | Work Sans, sans-serif | 300, 400, 700 |

Use Google Fonts `<link>` for Work Sans.

### Colors

| Token          | Hex / Value            | Usage                                    |
| -------------- | ---------------------- | ---------------------------------------- |
| primary        | `#78d5ef` (light blue) | Buttons, links, section accents          |
| price blue     | `#2f89fc` (blue)       | Pricing amounts, parallax gradient start |
| gradient teal  | `#2cbcbc` (teal)       | Parallax gradient end, secondary accent  |
| gradient green | `#00dc94` (green)      | Section overlay gradient end             |
| background     | `#FFFFFF` (white)      | Main content sections                    |
| dark brown     | `#3c312e`              | Dark section backgrounds                 |
| footer bg      | `#191919` (charcoal)   | Footer background                        |
| text primary   | `#212529`              | Body text                                |
| text muted     | `#6c757d`              | Secondary text                           |
| light bg       | `#f8f9fa`              | Light section backgrounds                |

### Layout

- **Navbar**: Transparent overlay on hero (desktop). Black bg on mobile. Logo "Smilecraft" white.
- **Hero**: Full-width background image with rgba(0,0,0,0.2) overlay. White heading + paragraph + CTA button.
- **Emergency/Hours strip**: Dark brown bg (`#3c312e`), two columns.
- **Appointment form**: Dark bg with form fields. White text, bottom-border inputs.
- **Services**: 4-column grid (Teeth Whitening, Teeth Cleaning, Quality Brackets, Modern Anesthetic).
- **About**: Image left + text right with 3 feature cards.
- **Team**: 4-column grid of dentist cards.
- **Achievements**: Counter/stats section with gradient bg (blue→teal).
- **Pricing**: 4 cards. Light border, blue price. Premium has gradient overlay.
- **Newsletter**: Gradient bg (blue→green). Email input.
- **Testimonials**: Carousel of review cards.
- **Blog**: 3-column blog cards.
- **Footer**: Dark bg (#191919), 4 columns. Copyright bar. Links to Component Dock.

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Smilecraft", anchor links to the page sections, and a mobile hamburger toggle.

#### Scenario: Navbar content on desktop

- **GIVEN** the Smilecraft page is rendered
- **WHEN** the page loads
- **THEN** the navbar shows the logo "Smilecraft" in white
- **AND** nav links appear: Home, About, Services, Doctors, Pricing, Blog, Contact
- **AND** the navbar is transparent over the hero

#### Scenario: Mobile navbar toggle

- **GIVEN** the Smilecraft page is rendered on a mobile viewport
- **WHEN** the user taps the hamburger menu button
- **THEN** the mobile navigation menu opens
- **AND** the navbar background becomes black

### Requirement: Hero section

The system SHALL render a full-width hero section with background images, white text overlay, and a call-to-action button.

#### Scenario: Hero content

- **GIVEN** the Smilecraft page is rendered
- **WHEN** the hero section is visible
- **THEN** the heading "Modern Dentistry in a Calm and Relaxed Environment" is displayed
- **AND** a descriptive paragraph is shown below the heading
- **AND** a "Make an Appointment" button is displayed
- **AND** breadcrumbs appear above the heading

### Requirement: Emergency and hours strip

The system SHALL display a dark brown strip with emergency contact information and clinic opening hours.

#### Scenario: Emergency strip content

- **GIVEN** the Smilecraft page is rendered
- **WHEN** the emergency strip is visible
- **THEN** "Emergency Cases" heading is shown with phone number "+123-456-7890"
- **AND** "Opening Hours" shows the clinic schedule (Mon-Fri 8-19, Sat 10-17, Sun 10-16)
- **AND** the strip uses dark brown (#3c312e) background

### Requirement: Appointment form

The system SHALL render an appointment booking form with fields for department, name, email, date, time, and phone.

#### Scenario: Form fields

- **GIVEN** the Smilecraft page is rendered
- **WHEN** the appointment form section is visible
- **THEN** form inputs are displayed: Department dropdown, Name, Email, Date, Time, Phone
- **AND** a submit button styled with primary blue is shown

### Requirement: Services section

The system SHALL display a services section with a heading and four service cards in a grid layout.

#### Scenario: Services grid

- **GIVEN** the Smilecraft page is rendered
- **WHEN** the services section is visible
- **THEN** the heading "Our Service Keeps You Smile" is displayed
- **AND** 4 service cards are shown: Teeth Whitening, Teeth Cleaning, Quality Brackets, Modern Anesthetic
- **AND** each card has an icon, heading, and description

### Requirement: About section

The system SHALL display an about section with an image and feature cards describing the clinic's strengths.

#### Scenario: About content

- **GIVEN** the Smilecraft page is rendered
- **WHEN** the about section is visible
- **THEN** the heading "Smilecraft with a Personal Touch" is shown
- **AND** 3 feature cards appear: Well Experience Dentist, High Technology Facilities, Comfortable Clinics

### Requirement: Team section

The system SHALL display a team section showing dentist profiles in a grid layout.

#### Scenario: Team grid

- **GIVEN** the Smilecraft page is rendered
- **WHEN** the team section is visible
- **THEN** the heading "Meet Our Experienced Dentist" is displayed
- **AND** 4 dentist cards are shown with photos and names
- **AND** the names are: Tom Smith, Mark Wilson, Patrick Jacobson, Ivan Dorchsner

### Requirement: Achievements counter

The system SHALL display a gradient section with achievement counters.

#### Scenario: Achievements content

- **GIVEN** the Smilecraft page is rendered
- **WHEN** the achievements section is visible
- **THEN** a gradient section (blue→teal) shows counter stats
- **AND** the stats include: 1500+ Happy Patients, 50+ Expert Doctors, 30+ Awards, 24/7 Emergency Care

### Requirement: Pricing section

The system SHALL display four pricing cards with different tiers.

#### Scenario: Pricing cards

- **GIVEN** the Smilecraft page is rendered
- **WHEN** the pricing section is visible
- **THEN** 4 pricing cards are displayed: Basic, Standard, Premium, Platinum
- **AND** each card has a light border (#f0f0f0)
- **AND** prices are shown in blue (#2f89fc)
- **AND** the Premium card has a gradient overlay

### Requirement: Newsletter section

The system SHALL display a newsletter subscription section with a gradient background.

#### Scenario: Newsletter form

- **GIVEN** the Smilecraft page is rendered
- **WHEN** the newsletter section is visible
- **THEN** the heading "Subscribe to our Newsletter" is shown
- **AND** a gradient background (blue→green) is displayed
- **AND** an email input with subscribe button is provided

### Requirement: Testimonials section

The system SHALL display a testimonials section with review cards.

#### Scenario: Testimonials content

- **GIVEN** the Smilecraft page is rendered
- **WHEN** the testimonials section is visible
- **THEN** the heading "What Our Patients Say" is displayed
- **AND** review cards with quotes, names, and star ratings are shown

### Requirement: Blog section

The system SHALL display a blog section with article preview cards.

#### Scenario: Blog grid

- **GIVEN** the Smilecraft page is rendered
- **WHEN** the blog section is visible
- **THEN** the heading "Latest Blog" is shown
- **AND** 3 blog cards are displayed with images, dates, and titles

### Requirement: Footer

The system SHALL display a dark footer with link columns and a Component Dock attribution.

#### Scenario: Footer content

- **GIVEN** the Smilecraft page is rendered
- **WHEN** the footer is visible
- **THEN** a dark footer (#191919) is displayed
- **AND** columns show: About, Quick Links, Services, Newsletter
- **AND** a "Made with Component Dock" link points to https://www.componentdock.com/
- **AND** a copyright bar is shown

### Requirement: Responsive design

The system SHALL be responsive across desktop and mobile viewports.

#### Scenario: Mobile layout

- **GIVEN** the Smilecraft page is rendered on a viewport below 992px
- **WHEN** the page loads
- **THEN** the navbar switches to a mobile hamburger menu
- **AND** multi-column grids stack to fewer columns
