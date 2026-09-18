# Template: Healwise (ColorLib Drcare Recreation)

## Purpose

Recreation of ColorLib **Drcare** (`https://colorlib.com/wp/template/drcare/`, preview: `https://preview.colorlib.com/theme/drcare/`). Built as a modern React 19 + Tailwind CSS 4 healthcare/medical landing page.

## Requirements

### Requirement: Navbar displays contact info and navigation

Users SHALL see a top info bar with address, email, and phone number, and a dark navbar with the Healwise logo, navigation links (Home, About, Doctor, Departments, Pricing, Blog, Contact), and a "Make Appointment" CTA button.

#### Scenario: Top info bar displays contact information

- **WHEN** the page loads
- **THEN** the top info bar shows address, email, and phone number

#### Scenario: Dark navbar shows logo and navigation links

- **WHEN** the page loads
- **THEN** the navbar displays "Healwise" as the logo
- **AND** navigation links include Home, About, Doctor, Departments, Pricing, Blog, Contact
- **AND** a "Make Appointment" button is visible

### Requirement: Hero section displays headline and CTA

Users SHALL see a hero section with a healthcare headline, subheading, and a CTA button.

#### Scenario: Hero section displays headline and CTA

- **WHEN** the page loads
- **THEN** the hero section shows a healthcare headline
- **AND** a subheading about patient care
- **AND** a "View our works" CTA button

### Requirement: Services section shows 4 service cards

Users SHALL see 4 service cards with icons and descriptions.

#### Scenario: Four service cards are displayed

- **WHEN** the page loads
- **THEN** 4 service cards are visible
- **AND** they show Qualified Doctors, Emergency Care, Outdoor Checkup, 24 Hours Service
- **AND** each card has an icon and description

### Requirement: About section shows split layout

Users SHALL see a split layout with an image and text content including 4 mini-features.

#### Scenario: About section shows split layout

- **WHEN** the page loads
- **THEN** the about section has an image on the left
- **AND** text content on the right with "About Healwise" subheading
- **AND** 4 mini-feature items: Primary Care, Lab Test, Symptom Check, Heart Rate

### Requirement: CTA banner displays consultation offer

Users SHALL see a full-width banner with a consultation offer and button.

#### Scenario: CTA banner displays consultation offer

- **WHEN** the page loads
- **THEN** a full-width banner shows "We Provide Free Health Care Consultation"
- **AND** a "Free Consultation" button is visible

### Requirement: Department tabs switch content

Users SHALL see 5 department tabs that switch content when clicked.

#### Scenario: Department tabs switch content

- **WHEN** the page loads
- **THEN** 5 department tabs are visible: Neurology, Surgical, Dental, Ophthalmology, Cardiology
- **WHEN** the user clicks "Surgical"
- **THEN** the Surgical department content is displayed
- **AND** the Neurology content is hidden

### Requirement: Testimonials section shows cards

Users SHALL see testimonial cards with names and positions.

#### Scenario: Testimonials section shows cards

- **WHEN** the page loads
- **THEN** testimonial cards with names and positions are visible

### Requirement: Stats counter shows 4 metrics

Users SHALL see 4 stat items with counters.

#### Scenario: Stats counter shows 4 metrics

- **WHEN** the page loads
- **THEN** 4 stat items are visible: Years of Experience, Happy Patients, Number of Doctors, Number of Staff

### Requirement: Pricing section shows 4 plans

Users SHALL see 4 pricing cards with prices and CTA buttons.

#### Scenario: Pricing section shows 4 plans

- **WHEN** the page loads
- **THEN** 4 pricing cards are visible: Basic, Standard, Premium, Platinum
- **AND** each card shows a price and "Get Offer" button

### Requirement: Blog section shows 3 posts

Users SHALL see 3 blog post cards with images, dates, titles, and read more links.

#### Scenario: Blog section shows 3 posts

- **WHEN** the page loads
- **THEN** 3 blog post cards are visible
- **AND** each has an image, date, title, author, and "Read More" button

### Requirement: Footer displays brand and navigation

Users SHALL see a dark footer with logo, contact info, navigation links, and a Component Dock link.

#### Scenario: Footer displays brand and navigation

- **WHEN** the page loads
- **THEN** the footer shows the Healwise logo
- **AND** contact information
- **AND** navigation links
- **AND** services list
- **AND** a "More templates at Component Dock" link to componentdock.com
