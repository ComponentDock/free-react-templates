# Template: Pranayama (Yoga/Wellness Template)

## Purpose

Pranayama is a single-page yoga/wellness website template in the free-react-templates
monorepo. It is a React recreation of the ColorLib free "Yoga Studio" website template
design (source: https://colorlib.com/wp/template/yoga-studio/), built under a DIFFERENT
name (**Pranayama** — a yogic breathing practice, matching the source's yoga studio theme)
per the monorepo naming mandate, with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Requirements

### Requirement: Header navigation

The template SHALL display a fixed navigation bar with the logo, nav links, and mobile menu toggle.

#### Scenario: Desktop navigation

- **WHEN** the page loads on a desktop viewport
- **THEN** the header displays the "Pranayama" logo on the left
- **AND** navigation links "Home", "Classes", "About", "Shop", "Contact" are visible
- **AND** the header has a dark purple/lavender (#9482AC) background

#### Scenario: Mobile navigation

- **WHEN** the viewport width is less than 768px
- **THEN** a hamburger menu toggle button is visible
- **AND** clicking it opens a mobile navigation menu

#### Scenario: Dark mode toggle

- **WHEN** the user clicks the dark mode toggle button
- **THEN** the `.dark` class is toggled on the document root

### Requirement: Hero section

The template SHALL display a full-width hero section with heading, subtitle, and CTA button.

#### Scenario: Hero content

- **WHEN** the page loads
- **THEN** a hero section with the heading "Find Your Zen" is displayed
- **AND** a subtitle description is shown below the heading
- **AND** a CTA button labeled "Explore Classes" is visible

### Requirement: Yoga classes section

The template SHALL display a section with three yoga class cards.

#### Scenario: Class cards

- **WHEN** the user scrolls to the classes section
- **THEN** a section title "Our Classes" is displayed
- **AND** three class cards are shown: Yoga, Pilates, Hatha
- **AND** each card has an icon, title, and description text

### Requirement: Different yoga section

The template SHALL display a section with motivational text and statistics.

#### Scenario: Stats display

- **WHEN** the user scrolls to the different yoga section
- **THEN** a motivational quote is displayed
- **AND** statistics are shown: 40+ Classes, 100+ Students, 15+ Trainers

### Requirement: Yoga name section

The template SHALL display a section with three yoga style names.

#### Scenario: Yoga styles

- **WHEN** the user scrolls to the yoga name section
- **THEN** three yoga styles are displayed: Hatha Yoga, Power Yoga, Ashtanga
- **AND** each style has a brief description

### Requirement: Client testimonials

The template SHALL display client testimonials with images and quotes.

#### Scenario: Testimonial content

- **WHEN** the user scrolls to the testimonials section
- **THEN** two testimonial cards are displayed
- **AND** each card shows a name, role, and quote text

### Requirement: Call to action

The template SHALL display a call-to-action section with a heading and button.

#### Scenario: CTA content

- **WHEN** the user scrolls to the CTA section
- **THEN** the heading "Take a Free Class Now" is displayed
- **AND** a "Join Now" button is visible

### Requirement: Footer with contact form

The template SHALL display a footer with contact form, contact info, and Component Dock link.

#### Scenario: Contact form

- **WHEN** the user scrolls to the footer
- **THEN** a contact form with name, email, and message fields is displayed
- **AND** a "Send Message" submit button is visible

#### Scenario: Form validation

- **WHEN** the user submits the form with an invalid email
- **THEN** an error message "Please enter a valid email address" is shown

#### Scenario: Form success

- **WHEN** the user submits the form with valid data
- **THEN** a success message is displayed
- **AND** form fields are cleared

#### Scenario: Contact info

- **WHEN** the footer renders
- **THEN** contact information is displayed (address, phone, email)
- **AND** social media links (Facebook, Instagram, Twitter) are shown
- **AND** the copyright bar includes a "Made with Component Dock" link to https://www.componentdock.com/

### Requirement: Responsive layout

The template SHALL be responsive across all breakpoints.

#### Scenario: Mobile layout

- **WHEN** the viewport width is less than 768px
- **THEN** the navigation collapses to a hamburger menu
- **AND** class cards stack vertically
- **AND** the footer contact form stacks vertically

## Design tokens

- Brand: `#9482AC` (muted purple/lavender)
- Secondary accent: `#FFDD8D` (warm yellow)
- Dark text: `#111111` (headings), `#464646` (body)
- Muted text: `#939393`
- Fonts: Montserrat (body), Playfair Display (headings)
- Buttons: pill-shaped (border-radius: 50px), brand color background
