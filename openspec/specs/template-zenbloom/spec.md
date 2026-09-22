# Template: Zenbloom (Yoga Studio Landing)

## Purpose

Zenbloom is a single-page yoga studio landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Yogabest" template
(preview: https://preview.colorlib.com/theme/yogabest/ — yoga studio landing),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original (see docs/replication.md):

- Brand green `#6cae22` (accent subheadings, icons, counters)
- Accent orange `#F96D00` (loader, CTA hover)
- Typeface: Poppins (Google Fonts via `<link>`) + Reenie Beanie (display font)
- Dark overlays on background images; alternating white / light gray sections
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Zenbloom lives in `apps/zenbloom` and uses shared components from `packages/ui`
(cn, Button).

## Requirements

### Requirement: Top bar

The system SHALL render a top bar with phone number, email address, and social
links (Facebook, Twitter, Instagram, Dribbble).

#### Scenario: Contact info

- **GIVEN** the page is rendered
- **WHEN** the top bar is displayed
- **THEN** it SHALL show "Phone no:" with a clickable phone link
- **AND** it SHALL show "email us:" with a clickable email link

#### Scenario: Social links

- **GIVEN** the page is rendered
- **WHEN** the top bar social icons are displayed
- **THEN** it SHALL show Facebook, Twitter, Instagram, and Dribbble links

### Requirement: Navigation bar

The system SHALL render a dark navigation bar with the brand name "Zenbloom",
section links (Home, About, Trainers, Classes, Schedule, Blog, Contact), and a
hamburger toggle that opens a mobile menu on small screens.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the brand name "Zenbloom" linking to `#home`
- **AND** it SHALL show links to Home, About, Trainers, Classes, Schedule, Blog, and Contact

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered
- **WHEN** the hamburger button is clicked
- **THEN** the mobile menu SHALL become visible
- **AND** clicking a mobile link SHALL close the menu

### Requirement: Hero section

The system SHALL render a full-height hero section with a background image,
overlay, heading "Yoga Enhances Your Life", subheading "Zenbloom Studio", and a
video play button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is visible
- **THEN** it SHALL display the heading "Yoga Enhances Your Life"
- **AND** it SHALL show the subheading "Zenbloom Studio"
- **AND** it SHALL show a "Play introduction video" button

### Requirement: Services section

The system SHALL render a services section on light background with three
service items: "Outdoor Activities", "Experienced Trainers", and "Happy
Environment", each with an icon and description.

#### Scenario: Service items

- **GIVEN** the page is rendered
- **WHEN** the services section is visible
- **THEN** it SHALL display three service cards
- **AND** each card SHALL have a heading and description

### Requirement: About section

The system SHALL render an about section with an image, "42 Years Experience"
counter overlay, heading "Life in Divine Yoga", and a "Learn More" button.

#### Scenario: Experience counter

- **GIVEN** the page is rendered
- **WHEN** the about section is visible
- **THEN** it SHALL show the number "42" with "Years Experience" label
- **AND** it SHALL show the heading "Life in Divine Yoga"

### Requirement: Features section

The system SHALL render a features section with dark background image, heading
"Control Your Body To Free Your Soul", and three feature items: "Body & Mind
Balance", "Healthy Daily Life", and "Improves Flexibility".

#### Scenario: Feature items

- **GIVEN** the page is rendered
- **WHEN** the features section is visible
- **THEN** it SHALL display the heading "Control Your Body To Free Your Soul"
- **AND** it SHALL show three feature items with headings

### Requirement: Counter section

The system SHALL render a counter section with four statistics: "150 Yoga
Classes", "1,000 Yoga Conducted", "65 Years Experienced", and "71,650 Happy
Customers".

#### Scenario: Statistics display

- **GIVEN** the page is rendered
- **WHEN** the counter section is visible
- **THEN** it SHALL display four statistic values and labels

### Requirement: Classes section

The system SHALL render a classes section with six class cards: "Vinyasa Flow",
"Power Yoga", "Hatha Yoga", "Yin Yoga", "Ashtanga Yoga", and "Restorative
Yoga", each with trainer name, time, and category.

#### Scenario: Class cards

- **GIVEN** the page is rendered
- **WHEN** the classes section is visible
- **THEN** it SHALL display six class cards with titles
- **AND** each card SHALL show a trainer name

### Requirement: Testimonials section

The system SHALL render a testimonials section with heading "What They Are
Saying", two mini features ("Certified Instructors", "Personalized Programs"),
and testimonial cards with star ratings.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is visible
- **THEN** it SHALL show the heading "What They Are Saying"
- **AND** it SHALL show mini feature items

### Requirement: Schedule section

The system SHALL render a schedule section with a 7-column weekly timetable
(Monday through Sunday) showing class names, trainers, and time slots.

#### Scenario: Weekly timetable

- **GIVEN** the page is rendered
- **WHEN** the schedule section is visible
- **THEN** it SHALL display all seven day headers
- **AND** it SHALL show time slots

### Requirement: Trainers section

The system SHALL render a trainers section with four trainer cards: Elizabeth
Nelson, Scarlett Torres, Victoria Wright, and Stella Perry, each with "Owner /
Head Coach" label and social links.

#### Scenario: Trainer cards

- **GIVEN** the page is rendered
- **WHEN** the trainers section is visible
- **THEN** it SHALL display four trainer cards with names
- **AND** each card SHALL show "Owner / Head Coach" role

### Requirement: Blog section

The system SHALL render a blog section with three blog entries: "Treat Your
Body Like A Temple", "Morning Yoga Routines For Energy", and "Mindfulness And
Meditation Tips", each with a date and read-more link.

#### Scenario: Blog entries

- **GIVEN** the page is rendered
- **WHEN** the blog section is visible
- **THEN** it SHALL display three blog cards with titles and dates

### Requirement: Footer

The system SHALL render a footer with logo, social links, recent blog entries,
explore navigation links, contact information, and a copyright bar linking to
Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is visible
- **THEN** it SHALL show the "Zenbloom" logo
- **AND** it SHALL link to Component Dock (https://www.componentdock.com/)
- **AND** it SHALL show contact information
