# Learnfold — Online Courses Education Platform

Recreation of ColorLib **Webuni** (https://colorlib.com/wp/template/webuni/).

## Purpose

Provide a free React template for online education platforms, featuring course categories, search, course listings with filtering, a teacher signup form, and a newsletter footer. Recreates the ColorLib Webuni design with crimson-red (#d82a4e) brand palette, Raleway typography, and responsive layout.

## Requirements

### Requirement: Navbar with navigation and mobile menu

The template SHALL render a top navbar with brand logo, navigation links (Home, About us, Courses, News, Contact), a Login CTA button, and a responsive hamburger menu for mobile.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads on desktop
- **THEN** the navbar shows "Learnfold" brand, all 5 nav links, and a Login button

#### Scenario: Mobile menu toggles open and closed

- **WHEN** the user taps the hamburger icon on mobile
- **THEN** the mobile menu opens showing all nav links and a Login button
- **AND** tapping the close icon hides the menu

### Requirement: Hero with signup form

The template SHALL render a hero section with a background image, heading "Get The Best Free Online Courses", subtitle, and a signup form with Name, E-mail inputs and "Sign Up Now" button.

#### Scenario: Hero displays heading and form

- **WHEN** the page loads
- **THEN** the hero heading "Get The Best Free Online Courses" is displayed
- **AND** a Name input, E-mail input, and "Sign Up Now" button are present

#### Scenario: Hero form accepts input

- **WHEN** the user types a name and email
- **THEN** the inputs reflect the typed values

### Requirement: Course categories grid

The template SHALL render a section with heading "Our Course Categories" and a 3-column grid of 6 category cards, each with an icon, title, description, and course count.

#### Scenario: Six category cards render

- **WHEN** the categories section is visible
- **THEN** 6 category cards are rendered in a grid
- **AND** each card shows a title, description, and course count

### Requirement: Search section

The template SHALL render a full-width search section with brand primary background, heading "Search your course", Course and Category inputs, and a "Search Course" button.

#### Scenario: Search form renders on brand background

- **WHEN** the search section is visible
- **THEN** the section background is brand primary
- **AND** Course and Category inputs are present
- **AND** a "Search Course" button is present

### Requirement: Featured courses with filter tabs

The template SHALL render filter tabs (All / Finance / Design / Web Development / Photography) and a 4-column grid of course cards. Each card shows a thumbnail with price badge, title, description, student count, and author info. Clicking a tab filters courses by category.

#### Scenario: All courses display by default

- **WHEN** the featured courses section loads
- **THEN** all 8 course cards are visible
- **AND** the "All" tab is active

#### Scenario: Filter tabs filter courses

- **WHEN** the user clicks the "Finance" tab
- **THEN** only finance-category courses are visible

#### Scenario: All tab restores all courses

- **WHEN** the user clicks "All" after filtering
- **THEN** all 8 courses are visible again

### Requirement: Teacher signup section

The template SHALL render a two-column signup section with brand primary background on the left (form with Name, E-mail, Phone, file upload, submit button) and a background image on the right.

#### Scenario: Signup form renders with all fields

- **WHEN** the signup section is visible
- **THEN** Name, E-mail, Phone inputs are present
- **AND** an "Upload Course" file upload button is present
- **AND** a "Submit Course" button is present

#### Scenario: File upload shows selected filename

- **WHEN** the user selects a file for upload
- **THEN** the button label changes to show the filename

### Requirement: Banner CTA section

The template SHALL render a centered CTA section with heading "Join Our Community Now!", description paragraph, and "Register Now" button linking to #register.

#### Scenario: CTA renders with button

- **WHEN** the banner section is visible
- **THEN** the heading "Join Our Community Now!" is displayed
- **AND** a "Register Now" button is present

### Requirement: Footer with widgets and newsletter

The template SHALL render a 5-column footer with Contact Info, 3 link columns (Engineering, Graphic Design, Development), and Newsletter form. Footer bottom shows Terms links, copyright, and Component Dock attribution.

#### Scenario: Footer widgets render

- **WHEN** the footer is visible
- **THEN** Contact Info with address, phone, email is shown
- **AND** 3 link columns with 5 links each are shown
- **AND** a Newsletter form with email input and Subscribe button is shown

#### Scenario: Footer bottom links to Component Dock

- **WHEN** the footer bottom is visible
- **THEN** a link to Component Dock is present
- **AND** copyright text is shown

### Requirement: Brand tokens applied consistently

The template SHALL use Raleway font, brand primary #d82a4e, secondary #edf4f6, rectangular buttons (no border-radius), and picsum.photos seeded placeholders for all images.

#### Scenario: Brand colors and font applied

- **WHEN** the template renders
- **THEN** Raleway font is loaded from Google Fonts
- **AND** brand primary color is used on buttons, search background, signup background, and footer border
