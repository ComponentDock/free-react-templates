# Template: Garnish (Restaurant Landing)

## Purpose

Garnish is a single-page restaurant landing template — a React recreation of the
ColorLib free "Caviar" template
(preview: https://preview.colorlib.com/theme/caviar/ — premium restaurant),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original (see docs/replication.md):

- Brand red `#ff0000` (button hovers, accents, reservation CTA), white content
  areas, light grey body `#fafafa`, dark footer `#333333`
- Typeface: Open Sans (body) + Work Sans (headings/buttons) via Google Fonts
- Square-cornered buttons (border-radius: 0) with `1px solid #b2b2b2` border,
  54px height, 180px min-width; hover turns red text
- Thumbnails with soft shadow `3px 5px 45px rgba(0,0,0,0.15)`
- Circular avatar images (border-radius: 50%) for testimonials
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Garnish lives in `apps/garnish` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a transparent navbar with the brand name "Garnish",
navigation links (Home, About Us, Menu, Awards, Testimonials, Reservation,
Contact), and a hamburger toggle that opens a mobile menu on small screens. A
search icon button SHALL be present.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "Garnish" linking to `#home`
- **AND** it SHALL show links to Home, About Us, Menu, Awards, Testimonials,
  Reservation, and Contact

#### Scenario: Mobile menu

- **GIVEN** the page is rendered
- **WHEN** the user presses the hamburger toggle
- **THEN** the mobile menu SHALL become visible and the toggle SHALL report
  `aria-expanded="true"`
- **AND** pressing the toggle again SHALL hide the menu
- **AND** clicking a mobile link SHALL close the menu

### Requirement: Hero section

The system SHALL render a full-width hero with a background image, a headline,
a descriptive paragraph, and a "Reservation" CTA button. Social media links
(Facebook, Instagram, Twitter) SHALL appear on the left side.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a headline (e.g. "Welcome to Garnish")
- **AND** it SHALL contain a descriptive paragraph about the restaurant
- **AND** it SHALL contain a "Reservation" button linking to the reservation section
- **AND** it SHALL show social media icon links on the left side

#### Scenario: Hero visual treatment

- **GIVEN** the hero is displayed
- **WHEN** viewed
- **THEN** the background image SHALL cover the full viewport height
- **AND** a dark overlay SHALL be applied for text contrast
- **AND** the content SHALL be vertically centered

### Requirement: About Us section

The system SHALL render a two-column layout with an image on one side and
text on the other. Two sub-sections SHALL appear: the first with the heading
"About Us" and a "restaurant style" subtitle, and the second with an "our
chef" subtitle and the image and text positions swapped.

#### Scenario: About Us content

- **GIVEN** the page is rendered
- **WHEN** the About Us section is displayed
- **THEN** it SHALL show the heading "About Us"
- **AND** it SHALL show a subtitle "restaurant style"
- **AND** it SHALL show a descriptive paragraph
- **AND** it SHALL show an image with a soft shadow

#### Scenario: Chef sub-section

- **GIVEN** the About Us section is displayed
- **WHEN** the second sub-section is visible
- **THEN** it SHALL show the subtitle "our chef"
- **AND** the image and text positions SHALL be swapped relative to the first
  sub-section

### Requirement: Dish Menu section

The system SHALL render a "Special" heading with three dish cards in a
three-column grid. Each card SHALL display a dish image, a dish name, and a
price. A "View The Menu" button SHALL appear below the heading.

#### Scenario: Dish cards

- **GIVEN** the page is rendered
- **WHEN** the dish menu section is displayed
- **THEN** it SHALL show the heading "Special"
- **AND** it SHALL show three dish cards, each with an image, name, and price
- **AND** it SHALL show a "View The Menu" button

### Requirement: Awards section

The system SHALL render a horizontal row of award images (5 logos) alongside
an "Awards" heading.

#### Scenario: Awards display

- **GIVEN** the page is rendered
- **WHEN** the awards section is displayed
- **THEN** it SHALL show the heading "Awards"
- **AND** it SHALL display a row of award images responsive to screen width

### Requirement: Testimonials section

The system SHALL render a carousel of testimonials. Each testimonial SHALL
show an avatar image, a name, a subtitle, and a quote paragraph.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the heading "Testimonials"
- **AND** it SHALL display at least one testimonial with an avatar, name,
  subtitle, and quote

#### Scenario: Testimonial carousel

- **GIVEN** multiple testimonials are present
- **WHEN** the user navigates between testimonials
- **THEN** the carousel SHALL transition between slides

### Requirement: Reservation section

The system SHALL render a split layout with a reservation form on one side
and a decorative image on the other. The form SHALL include fields for date,
time, number of persons, name, and message, plus a "Reserve Your Desk"
submit button.

#### Scenario: Reservation form fields

- **GIVEN** the page is rendered
- **WHEN** the reservation section is displayed
- **THEN** it SHALL show the heading "Reservation"
- **AND** it SHALL contain a date input, time input, persons input,
  name input, and message textarea
- **AND** it SHALL contain a "Reserve Your Desk" submit button

#### Scenario: Reservation layout

- **GIVEN** the reservation section is displayed
- **WHEN** viewed on desktop
- **THEN** the form and image SHALL appear side by side in a split layout

### Requirement: Footer

The system SHALL render a dark footer with the brand name "Garnish" and
a copyright line linking to Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand name "Garnish"
- **AND** it SHALL show a copyright line with a link to
  `https://www.componentdock.com/`

## Verification checklist

- [ ] Spec validates: `npm run spec:validate`
- [ ] All sections match the original Caviar section order 1:1
- [ ] Design tokens match: brand red #ff0000, Open Sans + Work Sans, square
  buttons, dark footer #333333
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to Component Dock
- [ ] Placeholder images use picsum.photos with deterministic seeds
