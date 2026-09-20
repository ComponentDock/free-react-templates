---
name: edubloom
description: Education and online courses landing page
category: Education
source: ColorLib Edusmart
source_url: https://colorlib.com/wp/template/edusmart/
preview_url: https://preview.colorlib.com/theme/edusmart/
---

# Edubloom — Education / Online Courses Template

Recreation of ColorLib "Edusmart" (https://colorlib.com/wp/template/edusmart/) as a React 19 + Vite + Tailwind 4 + TypeScript template.

## Purpose

Provide a free, production-ready education landing page template with hero, features, departments, courses, facts, testimonials, registration, events, and footer sections. Built for online course platforms, training providers, and education businesses.

## Design Tokens (extracted from preview CSS)

| Token            | Value                              | Notes                                           |
| ---------------- | ---------------------------------- | ----------------------------------------------- |
| font-heading     | Montserrat                         | sans-serif, weight 600                          |
| font-body        | Crimson Text                       | serif, weight 600                               |
| color-primary    | #00aee0                            | cyan/teal brand accent                          |
| color-secondary  | linear-gradient(90deg, #00aee0, #00fedc) | cyan to teal-green gradient               |
| color-accent-1   | linear-gradient(90deg, #e94086, #e5925a) | pink to orange gradient (feature 1)       |
| color-accent-2   | linear-gradient(90deg, #7349cc, #e163e4) | purple to magenta gradient (feature 2)    |
| color-body       | #777777                            | gray body text                                  |
| color-heading    | #222222                            | dark headings                                   |
| color-bg-light   | #f9f9f9                            | light gray section backgrounds                  |
| color-footer-bg  | #000000                            | black footer background                         |
| button-radius    | 0px                                | square corners                                  |
| button-shadow    | 0px 20px 50px rgba(0,175,224,0.3) | primary button box-shadow                       |
| banner-overlay   | rgba(0,0,0,0.4)                   | dark overlay on hero background image           |

## Requirements

### Requirement: Header / Navbar

The template SHALL render a header with top bar (contact info, login) and a navigation bar with logo and menu links.

#### Scenario: Top bar contact info
- **WHEN** the page loads
- **THEN** the header top bar displays a phone number and email address
- **AND** a "Login" link is visible on the right

#### Scenario: Navigation links
- **WHEN** the page loads
- **THEN** the navbar shows Home, About, Pages (dropdown), Blog (dropdown), Contact, and a search icon

#### Scenario: Mobile menu toggle
- **WHEN** the user clicks the hamburger menu button
- **THEN** the mobile navigation menu opens
- **AND** clicking a link closes the menu

### Requirement: Hero / Banner section

The template SHALL render a hero banner with a dark overlay background image, headline, description, and a course search form.

#### Scenario: Hero heading
- **WHEN** the page loads
- **THEN** the hero displays "We Rank the Best Courses on the Web" as the main heading

#### Scenario: Hero search form
- **WHEN** the page loads
- **THEN** a search input with placeholder "Search Courses" and a "Search" button are visible in the hero

### Requirement: Features section

The template SHALL render a features section with three feature cards positioned to the right of the hero.

#### Scenario: Feature cards
- **WHEN** the page loads
- **THEN** three feature items are shown: "New Classes", "Top Courses", "Full E-Books"
- **AND** each has an icon and description text

#### Scenario: Feature gradient backgrounds
- **WHEN** the page loads
- **THEN** feature 1 uses a pink-to-orange gradient background
- **AND** feature 2 uses a purple-to-magenta gradient background
- **AND** feature 3 uses the primary cyan-to-teal gradient background

### Requirement: Department / Categories section

The template SHALL render a department section with department category cards showing icons and labels.

#### Scenario: Department cards
- **WHEN** the page loads
- **THEN** six department category cards are displayed in a grid
- **AND** each card shows an icon and a label (e.g., "Languages", "Literature", etc.)

### Requirement: Popular Courses section

The template SHALL render a popular courses section with course cards.

#### Scenario: Course cards
- **WHEN** the page loads
- **THEN** multiple course cards are shown with thumbnail, title, and metadata (price, mentor, etc.)

### Requirement: Facts section

The template SHALL render a facts section with an overlay background and three fact cards.

#### Scenario: Facts heading
- **WHEN** the page loads
- **THEN** the section displays "Facts that Make us Unique" as the heading

#### Scenario: Fact cards
- **WHEN** the page loads
- **THEN** three fact items are shown: "Expert Mentors", "25000+ Courses", and a third fact
- **AND** each has an icon and description text

### Requirement: Testimonials section

The template SHALL render a testimonials section with a carousel of testimonial cards.

#### Scenario: Testimonial cards
- **WHEN** the page loads
- **THEN** at least two testimonial cards are visible with a quote icon, name, star rating, and review text
- **AND** carousel navigation dots are present

### Requirement: Registration section

The template SHALL render a registration section with a countdown timer and a registration form.

#### Scenario: Countdown timer
- **WHEN** the page loads
- **THEN** a countdown timer displays Days, Hours, Minutes, and Seconds

#### Scenario: Registration form
- **WHEN** the page loads
- **THEN** a registration form is visible with fields for Name, Phone Number, and Email Address
- **AND** a submit button is present

### Requirement: Events section

The template SHALL render an events section with upcoming event cards.

#### Scenario: Event cards
- **WHEN** the page loads
- **THEN** the section displays "Upcoming Events" as the heading
- **AND** at least two event cards are shown with thumbnail image, date, title, and description

### Requirement: Footer

The template SHALL render a footer with link columns, newsletter signup, and social links.

#### Scenario: Footer columns
- **WHEN** the page loads
- **THEN** the footer shows four link columns: "Top Products", "Quick Links", "Features", "Resources"

#### Scenario: Newsletter signup
- **WHEN** the page loads
- **THEN** a newsletter signup form with email input and "subscribe" button is visible in the footer

#### Scenario: Social links
- **WHEN** the page loads
- **THEN** social media icon links (Facebook, Twitter, Dribbble, Behance) are displayed in the footer bottom

#### Scenario: Footer attribution
- **WHEN** the page loads
- **THEN** the footer bottom includes a link to https://www.componentdock.com/

## Verification checklist

- [ ] Navbar renders with all navigation links and mobile toggle
- [ ] Hero banner displays heading, description, and search form
- [ ] Features section shows three gradient-colored feature cards
- [ ] Department section displays six category cards in a grid
- [ ] Popular courses section renders course cards with metadata
- [ ] Facts section shows three fact cards with icons
- [ ] Testimonials section renders carousel with navigation
- [ ] Registration section has countdown timer and form fields
- [ ] Events section shows event cards with thumbnails
- [ ] Footer has link columns, newsletter form, and social icons
- [ ] Footer links to https://www.componentdock.com/
- [ ] All design tokens match the extracted values
- [ ] No references to ColorLib in app code
- [ ] 100% test coverage (lines, functions, branches, statements)
