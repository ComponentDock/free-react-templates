# Template: Precept (Education & Courses Landing)

## Purpose

Precept is a single-page education template — an original React recreation of
the ColorLib free "Education" template
(preview: https://preview.colorlib.com/theme/education/ — education/courses landing),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original:

- Brand orange `#f7631b` (CTAs, accents, highlights), navy `#04091e` (header top bar, footer), light grey `#f9f9ff` (section backgrounds)
- Typeface: Poppins (Google Fonts via `<link>`)
- Orange primary buttons with white text; uppercase section headings
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Precept lives in `apps/precept` and uses shared components from `packages/ui`.

## Requirements

### Requirement: Navigation bar

The system SHALL render a fixed navbar with a dark top bar (social icons, phone, email), the site name "Precept" with an orange left border, and navigation links (Home, About, Courses, Events, Blog, Contact) with a mobile hamburger toggle.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "Precept" as a link
- **AND** it SHALL show links to Home, About, Courses, Events, Blog, and Contact

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on a mobile viewport
- **WHEN** the user clicks the hamburger button
- **THEN** the mobile menu SHALL become visible and the toggle SHALL report `aria-expanded="true"`
- **AND** clicking a mobile link SHALL close the menu

### Requirement: Hero section

The system SHALL render a full-height hero banner with a dark overlay background image, a headline "We Ensure Better Education for a Better World", supporting paragraph, and an orange "Get Started" CTA button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain the headline text
- **AND** it SHALL contain a "Get Started" button

### Requirement: Features section

The system SHALL render a 3-column feature section with cards for "Learn Online Courses", "No.1 of Universities", and "Huge Library", each with a description and a "Join Now" link.

#### Scenario: Feature cards

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show three feature cards with titles and "Join Now" links

### Requirement: Popular courses section

The system SHALL render a course carousel section titled "Popular Courses We Offer" with course cards showing an image, user/comment counts, price, title, and description.

#### Scenario: Course cards

- **GIVEN** the page is rendered
- **WHEN** the courses section is displayed
- **THEN** it SHALL show at least three course cards with prices and titles
- **AND** each card SHALL display user and comment counts

### Requirement: CTA section

The system SHALL render a call-to-action section with a background image, dark overlay, headline "Enhance Your Skills With Best Online Courses", and an "Enroll Now" button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL show the headline and an "Enroll Now" button

### Requirement: Reviews section

The system SHALL render an instructor/testimonial section titled "Our Expert Instructors" with instructor cards showing an avatar, name, role, star rating, and review text.

#### Scenario: Instructor cards

- **GIVEN** the page is rendered
- **WHEN** the reviews section is displayed
- **THEN** it SHALL show instructor cards with names and star ratings

### Requirement: Search course section

The system SHALL render a search section with a dark overlay background, heading "Search For Available Courses", and a search input with submit button.

#### Scenario: Search input

- **GIVEN** the page is rendered
- **WHEN** the user types in the search input
- **THEN** the input value SHALL update to reflect the typed text
- **AND** submitting the form SHALL not cause a page reload

### Requirement: Upcoming events section

The system SHALL render an events section titled "Upcoming Events" with event cards showing an image, title, date/time, and venue.

#### Scenario: Event cards

- **GIVEN** the page is rendered
- **WHEN** the events section is displayed
- **THEN** it SHALL show event cards with titles, dates, and venues

### Requirement: Blog section

The system SHALL render a blog section titled "Latest Posts From Blog" with post cards showing an image, author, date, comment count, title, excerpt, and a "View More" button.

#### Scenario: Blog posts

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show blog post cards with titles and "View More" buttons

### Requirement: Newsletter section

The system SHALL render a newsletter subscription section with an orange background, heading "Subscribe to Get Updated Information", email input, and a "Subscribe" button.

#### Scenario: Newsletter form

- **GIVEN** the page is rendered
- **WHEN** the user types an email and clicks Subscribe
- **THEN** the form SHALL submit without page reload

### Requirement: Footer

The system SHALL render a dark navy footer with the site name "Precept", link columns (Quick Links, Resources, Contact), and a bottom bar with a "Made with ❤ by Component Dock" link pointing to `https://www.componentdock.com/`.

#### Scenario: Component Dock link

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain a link to `https://www.componentdock.com/` with target `_blank`
- **AND** the link text SHALL include "Component Dock"

#### Scenario: No ColorLib references

- **GIVEN** the page is rendered
- **WHEN** the footer text is inspected
- **THEN** it SHALL NOT contain the string "colorlib" (case-insensitive)
