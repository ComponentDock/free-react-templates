# Template: Carepoint (Medical)

## Purpose

Recreation of ColorLib "Caremed" — a medical/healthcare center website template.

- **Source slug:** `caremed`
- **ColorLib URL:** https://colorlib.com/wp/template/caremed/
- **Preview URL:** https://preview.colorlib.com/theme/caremed/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/caremed-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **New name:** `carepoint` (apps/carepoint, @free-react-templates/carepoint)

## Requirements

### Requirement: Top Bar

The page SHALL display a top information bar with FAQ link, appointment request link, and emergency phone number.

#### Scenario: Top bar renders contact info

- **GIVEN** a visitor loads the page
- **WHEN** they view the top bar
- **THEN** they see a FAQ link, "Request an Appointment" link, and emergency phone number "+563 47558 623"

### Requirement: Header Navigation

The page SHALL display a sticky header with the CarePoint logo, subtitle, and navigation links.

#### Scenario: Header renders navigation

- **GIVEN** a visitor loads the page
- **WHEN** they view the header
- **THEN** they see the CarePoint logo with "Health Care Center" subtitle and navigation links (Home, About us, Services, News, Contact)

#### Scenario: Mobile menu toggle

- **GIVEN** a visitor on mobile
- **WHEN** they tap the menu button
- **THEN** the mobile navigation menu opens and closes on link click

### Requirement: Hero Section

The page SHALL display a full-width hero section with the heading "Medicine made with care" and an appointment button.

#### Scenario: Hero renders heading

- **GIVEN** a visitor loads the page
- **WHEN** they view the hero section
- **THEN** they see "Medicine made with care" as the main heading

### Requirement: Info Boxes

The page SHALL display three information boxes for Working Hours, Appointments, and Emergency Cases on a green background.

#### Scenario: Info boxes render content

- **GIVEN** a visitor scrolls past the hero
- **WHEN** they view the info boxes
- **THEN** they see three cards with Working Hours, Appointments, and Emergency Cases content

### Requirement: About Section

The page SHALL display an about section with a heading, descriptive text, a "Read More" button, and an image.

#### Scenario: About section renders

- **GIVEN** a visitor views the about section
- **WHEN** they read the content
- **THEN** they see "A great medical team to help your needs" heading and descriptive text

### Requirement: Departments Section

The page SHALL display a departments section with a parallax background, department cards with doctor names, and a read more card.

#### Scenario: Departments render

- **GIVEN** a visitor views the departments section
- **WHEN** they browse the grid
- **THEN** they see three department cards (Plastic Surgery, Gastroenterology, Dentistry) with doctor names and a read more card

### Requirement: Services Section

The page SHALL display a services section with six service cards in a grid layout.

#### Scenario: Services render

- **GIVEN** a visitor views the services section
- **WHEN** they browse the service cards
- **THEN** they see six services (Free Checkups, Screening Exams, RMI Services, Dentistry, Neonatology, Biochemistry) with icons and descriptions

### Requirement: CTA Section

The page SHALL display a call-to-action section with a parallax background, heading, description, and request button.

#### Scenario: CTA renders

- **GIVEN** a visitor reaches the CTA section
- **WHEN** they see the call to action
- **THEN** they see "Need a personal health plan?" heading and a "Request a Plan" button

### Requirement: Footer

The page SHALL display a footer with contact information, useful links, recent news, and a Component Dock attribution link.

#### Scenario: Footer renders

- **GIVEN** a visitor reaches the footer
- **WHEN** they view the footer
- **THEN** they see contact info, useful links, recent news, and a link to https://www.componentdock.com/ branded as "Component Dock"

### Requirement: Responsive Layout

The page SHALL adapt to mobile viewports with appropriate responsive behavior.

#### Scenario: Mobile layout

- **GIVEN** a visitor on a mobile device
- **WHEN** they view the page
- **THEN** the layout adapts to mobile viewport width
