# spec: Uniwell

## Purpose

Recreation of ColorLib "Unicat" (https://colorlib.com/wp/template/unicat/)
as "Uniwell" — a free e-learning & university landing page template.
Built with React 19 + Vite + Tailwind CSS 4 + TypeScript.

Design tokens extracted from the ColorLib Unicat preview:

- Primary: #34c3eb (teal/cyan)
- Navy: #1b1b2f (dark top bar)
- Cloud: #f8f9fa (light section bg)
- Heading font: Merriweather (serif)
- Body font: Open Sans (sans-serif)

## Requirements

### Requirement: TopBar displays contact info and login link

The template MUST display a dark navy top bar with phone number, email, and a Register/Login link.

#### Scenario: User loads the page

- **WHEN** the page loads
- **THEN** the top bar shows "Have any questions?", phone "001-1234-88888", email "info@uniwell.edu", and "Register or Login"

#### Scenario: User clicks phone link

- **WHEN** the user clicks the phone number link
- **THEN** it navigates to tel:001-1234-88888

### Requirement: Navbar provides navigation and search

The navbar MUST show the Uniwell logo, navigation links, search icon, cart icon, and a mobile hamburger menu.

#### Scenario: Desktop navigation

- **WHEN** the page loads on a wide screen
- **THEN** the logo, Home/About/Courses/Blog/Page/Contact links, search and cart icons are visible

#### Scenario: Mobile menu toggle

- **WHEN** the user is on a mobile viewport and clicks the hamburger
- **THEN** a mobile menu opens showing all nav links

#### Scenario: Mobile menu close

- **WHEN** the user opens the mobile menu and clicks a nav link
- **THEN** the menu closes

### Requirement: Hero section with search bar

The hero MUST display a heading, subtitle, background image, and a course search form with keyword/category/price fields.

#### Scenario: Hero content

- **WHEN** the page loads
- **THEN** the heading "The Premium System Education", subtitle "Future Of Education Technology", and search form are visible

#### Scenario: Search form interaction

- **WHEN** the user types in the keyword field
- **THEN** the text appears in the input

### Requirement: Welcome section with feature cards

The welcome section MUST display a heading, description, and four feature cards.

#### Scenario: Welcome content

- **WHEN** the page loads
- **THEN** "Welcome To Uniwell E-Learning" heading and cards for Online Courses, Expert Instructors, Certified Programs, and Campus Life are visible

### Requirement: Course categories grid

The categories section MUST display six category cards with icons and course counts.

#### Scenario: Categories visible

- **WHEN** the page loads
- **THEN** Web Development (120), Mobile Development (85), Data Science (95), Business (110), Design (75), and Marketing (65) categories are shown

### Requirement: Popular courses grid

The courses section MUST display six course cards with images, ratings, prices, and enroll buttons.

#### Scenario: Course cards visible

- **WHEN** the page loads
- **THEN** six course cards with titles, instructor names, star ratings, student counts, durations, prices, and Enroll Now buttons are shown

#### Scenario: Enroll button interaction

- **WHEN** the user clicks an Enroll Now button
- **THEN** the button responds without navigation errors

### Requirement: Registration CTA banner

The registration banner MUST display a call-to-action with heading and Get Started button.

#### Scenario: CTA content

- **WHEN** the page loads
- **THEN** "Register for Free Today" heading and a "Get Started" button linking to #register are visible

### Requirement: Footer with Component Dock attribution

The footer MUST display brand info, quick links, categories, contact details, and a Component Dock attribution link.

#### Scenario: Footer content

- **WHEN** the page loads
- **THEN** brand name, Quick Links, Categories, Contact info, copyright with current year, and a "Component Dock" link to https://www.componentdock.com/ (opens in new tab) are visible

### Requirement: 100% test coverage

All source files MUST have 100% statement, branch, function, and line coverage.

#### Scenario: Coverage check

- **WHEN** the verification gate runs
- **THEN** all coverage thresholds are met at 100%
