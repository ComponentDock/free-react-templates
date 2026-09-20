# Spec — Erudit (recreation of ColorLib "Knowledge")

## Purpose

Erudit is a free React online learning and education template that recreates the
ColorLib "Knowledge" design under a new, original name. It provides a complete
landing page for an online learning platform with courses, instructors, events,
testimonials, and newsletter subscription.

## Requirements

### Requirement: Navigation

The template SHALL display a sticky navbar with logo, navigation links, and a CTA button.

#### Scenario: Navbar displays logo and navigation links

- **GIVEN** the user loads the page
- **THEN** the navbar shows "Erudit" as the logo
- **AND** navigation links include Home, Courses, Teachers, About, Events, News, Contact
- **AND** a "Get started" CTA button is visible

### Requirement: Hero Slider

The template SHALL display a hero slider with 4 rotating slides.

#### Scenario: Hero slider shows slides

- **GIVEN** the user loads the page
- **THEN** 4 hero slides are rendered
- **AND** each slide has a heading, subtitle, and CTA button

### Requirement: Course Search

The template SHALL provide a search bar for filtering courses.

#### Scenario: Search bar allows filtering

- **GIVEN** the user loads the page
- **THEN** a keyword search input is visible
- **AND** a category dropdown with options is visible
- **AND** a difficulty dropdown is visible
- **AND** a "Search course" button is visible

### Requirement: Services Display

The template SHALL display 6 service categories with icons.

#### Scenario: Services section displays categories

- **GIVEN** the user loads the page
- **THEN** 6 service items are displayed with icons and labels
- **AND** a "Discover Courses" button is visible

### Requirement: Popular Courses

The template SHALL display popular courses in a horizontal layout.

#### Scenario: Popular courses shows course cards

- **GIVEN** the user loads the page
- **THEN** 5 popular course cards are displayed
- **AND** each card shows teacher name, course title, and price

### Requirement: About Section

The template SHALL display an about section with animated counters.

#### Scenario: About section shows counters

- **GIVEN** the user loads the page
- **THEN** the "Who Are We" section is displayed
- **AND** 4 counters are visible (Courses, Students, Teachers online, Countries)

### Requirement: Testimonials

The template SHALL display student testimonials with quotes.

#### Scenario: Testimonials section shows quotes

- **GIVEN** the user loads the page
- **THEN** 5 testimonial cards are displayed
- **AND** each card shows a quote, avatar, and name

### Requirement: Instructors

The template SHALL display instructor profiles.

#### Scenario: Instructors section shows instructor cards

- **GIVEN** the user loads the page
- **THEN** 4 instructor cards are displayed
- **AND** each card shows a photo, name, and role

### Requirement: Course Grid

The template SHALL display courses in a 3-column grid.

#### Scenario: Our courses grid shows course cards

- **GIVEN** the user loads the page
- **THEN** 6 course cards are displayed in a grid
- **AND** each card shows teacher name, course title, and price

### Requirement: Events and Blog

The template SHALL display upcoming events and recent blog posts.

#### Scenario: Events and blog section shows entries

- **GIVEN** the user loads the page
- **THEN** 4 upcoming event entries are displayed
- **AND** 4 blog post entries are displayed

### Requirement: Newsletter

The template SHALL provide a newsletter subscription form.

#### Scenario: Newsletter section allows subscription

- **GIVEN** the user loads the page
- **THEN** an email input is visible
- **AND** a "Subscribe Now" button is visible

### Requirement: Footer

The template SHALL display a footer with contact info and Component Dock link.

#### Scenario: Footer contains contact info and Component Dock link

- **GIVEN** the user loads the page
- **THEN** the footer shows contact information
- **AND** the footer links to https://www.componentdock.com/

## Source

- ColorLib template: Knowledge
- URL: https://colorlib.com/wp/template/knowledge/
- Preview: https://preview.colorlib.com/theme/knowledge/

## Design Tokens

- Font family: Rubik (Google Fonts, weights 300–900)
- Primary brand color: #4586FF (blue)
- Accent/highlight: #F7AF1D (golden)
- Dark text: #333333
- Secondary text: #555555, #999999
- Light backgrounds: #f0f0f0 (alternating sections)
- White backgrounds: #fff
- Button: blue primary (#4586FF), rounded, with hover darkening
