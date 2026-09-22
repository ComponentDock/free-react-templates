# Template: Gymforge (Fitness / Gym)

## Purpose

Recreation of ColorLib **Gym** — a fitness/gym HTML template.

- **Source:** https://colorlib.com/wp/template/gym/
- **Preview:** https://preview.colorlib.com/theme/gym/
- **New name:** `gymforge`
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/gymforge`

## Requirements

### Requirement: Header displays top bar and navigation

The header SHALL display a top bar with tagline and phone number, plus a sticky navigation menu with logo and links.

#### Scenario: Desktop header layout

- **GIVEN** the page is loaded on a desktop viewport
- **THEN** I see a top bar with tagline "We believe we helps people for happier lives"
- **AND** I see a centered logo
- **AND** I see a phone number "+880 123 12 658 439"
- **AND** I see a navigation menu with links: "Home", "we offer", "Top Course", "Schedule", "Trainer", "Plan", "Pages"

#### Scenario: Mobile menu toggle

- **GIVEN** the page is loaded on a mobile viewport
- **WHEN** I click the hamburger menu button
- **THEN** the mobile navigation menu opens
- **AND** I see all navigation links

### Requirement: Hero section shows fitness headline with overlay

The hero section SHALL display a full-screen banner with background image, dark overlay, headline, tagline, and CTA button.

#### Scenario: Hero content

- **GIVEN** the page is loaded
- **THEN** I see "Real Fitness Depends on Exercise" as the main headline
- **AND** I see "Shape your body well." tagline
- **AND** the section has a dark overlay on top of the background image

### Requirement: Offer section displays three services

The offer section SHALL display a heading, subheading, and three service cards in a grid.

#### Scenario: Offer content

- **GIVEN** the page is loaded
- **THEN** I see "We care about what we offer" heading
- **AND** I see three service cards: "Regular Exercise", "Training on the go", "Body Building Packages"
- **AND** each card has an image, title, and description

### Requirement: Convert section provides BMI calculator

The convert section SHALL display a heading and a BMI calculator form with height/weight inputs and a calculate button.

#### Scenario: BMI calculator form

- **GIVEN** the page is loaded
- **THEN** I see "Calculate Your Body Mass Index" heading on a pink background
- **AND** I see a height input with placeholder "Your Height (inches)"
- **AND** I see a weight input with placeholder "Your Weight (ibs)"
- **AND** I see a "Calculate Your BMI" button

#### Scenario: BMI calculation

- **GIVEN** the BMI form is displayed
- **WHEN** I enter height "70" and weight "150"
- **AND** I click "Calculate Your BMI"
- **THEN** a BMI result is displayed

### Requirement: Top courses section displays course cards

The top courses section SHALL display a heading and a grid of course cards with images, titles, and prices.

#### Scenario: Course cards

- **GIVEN** the page is loaded
- **THEN** I see "Top Courses That are open for Students" heading
- **AND** I see six course cards with images
- **AND** each card shows a "Course Available" badge
- **AND** each card has a course name and price (e.g., "Running Classes $275")

### Requirement: Feature section shows gym features

The feature section SHALL display a dark background with two side-by-side feature blocks, each with an image and text.

#### Scenario: Feature content

- **GIVEN** the page is loaded
- **THEN** I see a dark background section
- **AND** I see two feature blocks side by side
- **AND** each block has a heading "Basic Revolutions" and description text
- **AND** each block has a fitness image

### Requirement: Schedule section displays class timetable

The schedule section SHALL display a weekly class timetable table.

#### Scenario: Schedule table

- **GIVEN** the page is loaded
- **THEN** I see "Schedule your Fitness Process" heading
- **AND** I see a table with columns: "Course name", "mon", "tue", "wed", "thu", "fri"
- **AND** I see rows for "Fitness Aero" and "Senior Fitness" with class times

### Requirement: Team section shows trainers

The team section SHALL display a heading and a grid of trainer cards with photos, social links, and names.

#### Scenario: Trainer cards

- **GIVEN** the page is loaded
- **THEN** I see "Our Experienced Trainers" heading
- **AND** I see four trainer cards
- **AND** each card has a photo, social media links (Facebook, Twitter, LinkedIn)
- **AND** each card shows a name and role (e.g., "Ethel Davis", "Managing Director (Sales)")

### Requirement: Price section displays pricing plans

The price section SHALL display three pricing plan cards with features and purchase buttons.

#### Scenario: Pricing plans

- **GIVEN** the page is loaded
- **THEN** I see "Choose the Perfect Plan for you" heading
- **AND** I see three pricing cards: "Standard" (£199), "Business" (£399), "Ultimate" (£499)
- **AND** each card shows features list and a "Purchase Plan" button

### Requirement: Brand section shows partner logos

The brand section SHALL display a row of partner/client logos.

#### Scenario: Partner logos

- **GIVEN** the page is loaded
- **THEN** I see a row of five logo images

### Requirement: Call-to-action section promotes membership

The call-to-action section SHALL display a background image with overlay, heading, description, and membership button.

#### Scenario: CTA content

- **GIVEN** the page is loaded
- **THEN** I see "Huge Transaction in last Week" heading
- **AND** I see descriptive paragraph text
- **AND** I see a "Become a Member" button
- **AND** the section has a dark overlay on top of the background image

### Requirement: Footer displays contact and newsletter

The footer SHALL display four columns: About Us, Contact Us, Newsletter, and additional info.

#### Scenario: Footer content

- **GIVEN** the page is loaded
- **THEN** I see an "About Us" column with description
- **AND** I see a "Contact Us" column with phone numbers
- **AND** I see a "Newsletter" column with email signup form
- **AND** I see a "Made with Component Dock" credit link

## Design tokens

| Token | Value | Use |
| ----- | ----- | ----- |
| Primary brand | `#f6214b` (red/pink) | CTA buttons, section backgrounds, accent color |
| Secondary | `#4cd3e3` (teal) | Brand area accent |
| Accent | `#38a4ff` (blue) | Feature links, hover states |
| Light bg | `#f9f9ff` | Section alternate backgrounds |
| Dark bg | `#222` | Feature area background |
| Yellow | `#f4e700` | Accent highlight |
| Font | Poppins (sans-serif) | Body text, headings |
| Button radius | 25px | Primary buttons (pill shape) |
| Overlay | `rgba(0, 0, 0, 0.5)` | Hero and CTA section overlays |

## Verification checklist

- [ ] Header: top bar, logo, phone, nav links, mobile menu
- [ ] Hero: full-screen banner, overlay, headline, tagline
- [ ] Offer: 3 service cards with images
- [ ] Convert: BMI calculator form with inputs and button
- [ ] Top courses: 6 course cards with badges and prices
- [ ] Feature: dark bg, 2 feature blocks with images
- [ ] Schedule: weekly timetable table
- [ ] Team: 4 trainer cards with social links
- [ ] Price: 3 pricing plans with features
- [ ] Brand: row of 5 logos
- [ ] CTA: background image, overlay, heading, button
- [ ] Footer: 4 columns, Component Dock credit
- [ ] Responsive: mobile menu, stacked layouts
- [ ] Accessibility: semantic HTML, aria labels
- [ ] Tests: 100% coverage
