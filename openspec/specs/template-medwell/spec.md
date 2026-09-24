# Template: Medwell (Medical / Healthcare)

## Purpose

Medwell is a single-page medical/healthcare landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Medcare" free template (source:
https://colorlib.com/wp/template/medcare/), built under a DIFFERENT name
(**Medwell**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

**Preview URL:** https://preview.colorlib.com/theme/medcare/

## Requirements

### Requirement: Header displays top info bar and main navigation

Users SHALL see a top info bar with email and location plus social icons,
and a main navigation bar with logo and links (Home, About, Department,
Doctors, Blog, Contact). The navigation becomes sticky with white background
on scroll.

#### Scenario: Top bar renders contact and social

- **GIVEN** the page loads
- **THEN** a top info bar shows email "medical@example.com" and location
- **AND** social icon links are present

#### Scenario: Navbar renders all nav items

- **GIVEN** the page loads
- **THEN** the navbar shows logo "Medwell" and links for Home, About, Department, Doctors, Blog, Contact

#### Scenario: Navigation becomes sticky on scroll

- **GIVEN** the page is scrolled past 50px
- **THEN** the navigation bar gets a white background and shadow

### Requirement: Hero banner displays main heading and CTAs

Users SHALL see a full-width hero banner with background image, heading
"Making Health Care Better Together", descriptive text, and two CTA buttons.

#### Scenario: Hero renders heading and CTAs

- **GIVEN** the page loads
- **THEN** the hero shows heading "Making Health Care Better Together"
- **AND** two buttons appear: "Make an Appointment" and "View Department"

### Requirement: Feature strip shows three feature cards

Users SHALL see three feature cards (Primary Care, Emergency Cases, Online
Appointment) with icons, titles, and subtitles.

#### Scenario: Feature strip renders three cards

- **GIVEN** the page loads
- **THEN** three feature cards appear with icons and descriptions

### Requirement: Services section displays three service items

Users SHALL see a services heading "Awesome Health Service" and three
service cards (Neurology, Dental, Plastic Surgery) with icons, titles,
descriptions, and "Learn More" links.

#### Scenario: Services section renders three items

- **GIVEN** the page loads
- **THEN** three service cards display with titles and descriptions
- **AND** each card has a "Learn More" link

### Requirement: About section displays company info

Users SHALL see an about section with heading, subtitle, paragraph, and
"Learn More" link with decorative background.

#### Scenario: About section renders content

- **GIVEN** the page loads
- **THEN** the about section shows heading and description text
- **AND** a "Learn More" link is present

### Requirement: Team section shows doctor cards

Users SHALL see a team heading and three doctor cards with photos, names,
specialties, phone numbers, and social icons.

#### Scenario: Team section renders three doctor cards

- **GIVEN** the page loads
- **THEN** three doctor cards display with names and specialties
- **AND** each card shows a phone number and social icons

### Requirement: Appointment section has FAQ and contact form

Users SHALL see an appointment section with FAQ accordion (5 items) on the
left and a contact form (Full Name, Email, Message) on the right.

#### Scenario: FAQ accordion opens and closes

- **GIVEN** the appointment section is visible
- **WHEN** the user clicks a FAQ question
- **THEN** the answer expands or collapses

#### Scenario: Contact form has required fields

- **GIVEN** the appointment form is visible
- **THEN** fields for Full Name, Email, and Message are present
- **AND** a "Make an Appointment" submit button is present

### Requirement: Testimonials section displays quotes

Users SHALL see testimonial quotes with author names and circular avatars
on a decorative background.

#### Scenario: Testimonials render quotes and authors

- **GIVEN** the page loads
- **THEN** three testimonial quotes with author names display

### Requirement: Hotline section shows emergency contact

Users SHALL see an emergency hotline section with dark background, heading,
phone number, and support message.

#### Scenario: Hotline renders phone and heading

- **GIVEN** the page loads
- **THEN** "Emergency Hotline" heading and phone number are visible

### Requirement: Blog section shows three post cards

Users SHALL see a blog heading "Get Every Single Update Here" and three
blog cards with thumbnails, tags, titles, and comment/like counts.

#### Scenario: Blog section renders three posts

- **GIVEN** the page loads
- **THEN** three blog cards display with thumbnails and metadata

### Requirement: Brands section displays partner logos

Users SHALL see a brands section with placeholder partner logos.

#### Scenario: Brands section renders

- **GIVEN** the page loads
- **THEN** the brands section displays five partner brand placeholders

### Requirement: Footer links to Component Dock

Users SHALL see a footer with four link columns (Top Products, Quick Links,
Features, Resources), newsletter signup, copyright, and a link to
Component Dock (https://www.componentdock.com/).

#### Scenario: Footer renders columns and Component Dock link

- **GIVEN** the page loads
- **THEN** footer columns and newsletter form are present
- **AND** a link to https://www.componentdock.com/ is visible

### Requirement: Responsive design

The page SHALL be responsive with hamburger navigation on mobile, stacked
card layouts, and proper spacing at all viewport widths.

#### Scenario: Mobile navigation works

- **GIVEN** the viewport width is less than 768px
- **WHEN** the user taps the hamburger menu
- **THEN** the mobile navigation menu opens
