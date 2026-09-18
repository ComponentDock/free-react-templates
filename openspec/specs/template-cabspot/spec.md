# Template: CabSpot (Taxi / Transportation Service)

## Purpose

CabSpot is a single-page taxi booking website template in the
free-react-templates monorepo. It is a faithful React recreation of the
ColorLib "Taxi" free template (source: https://colorlib.com/wp/template/taxi/
, preview: https://preview.colorlib.com/theme/taxi/), built under a
DIFFERENT name (**CabSpot**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap-based taxi service landing page with a full-screen
hero banner (dark overlay on background image), a booking form panel,
about section, service cards, image gallery, customer reviews, CTA banner
(yellow overlay), blog previews, and a dark footer.

## Design tokens

Extracted from the ColorLib preview CSS (`css/main.css`):

| Token            | Value                              | Notes                                   |
| ---------------- | ---------------------------------- | --------------------------------------- |
| Brand color      | `#f9d700` (taxi yellow)            | Primary button, CTA overlay, highlights |
| Title color      | `#222222` (near-black)             | Headings, CTA text                      |
| Text color       | `#777777` (gray)                   | Body copy                               |
| Font family      | `"Poppins", sans-serif`            | Google Font, weights 300-700            |
| Button radius    | `0px` (square/flat)                | `.primary-btn` has no border-radius     |
| Button bg        | `#f9d700`                          | Solid yellow, white text on hover       |
| Banner overlay   | `rgba(0,0,0,0.8)`                  | Semi-transparent black on hero          |
| CTA overlay      | `rgba(249,215,0,0.9)`              | Yellow tint on call-to-action section   |
| Section bg alt   | `#f9f9ff` (very light blue-gray)   | Alternating section backgrounds         |
| Footer bg        | `#000000` (black)                  | Dark footer                             |
| Secondary colors | `#4cd3e3` (cyan), `#38a4ff` (blue) | Service card accents                    |

## Requirements

### Requirement: Hero banner renders with booking form

The page SHALL display a full-screen hero banner with a dark overlay background, a heading "Need a ride? Just Call", phone number "911 999 911", a "Call for Taxi" CTA button, and a booking form with name, email, phone, from/to selects, date/time, and "Make Reservation" button.

#### Scenario: Page loads with hero banner

- **GIVEN** I am on the CabSpot homepage
- **WHEN** the page finishes loading
- **THEN** I see the hero section with heading, phone, CTA button, and booking form

#### Scenario: Booking form accepts input

- **GIVEN** I see the booking form
- **WHEN** I type in the name, email, and phone fields
- **AND** I select destinations from the dropdowns
- **AND** I set a date and time
- **THEN** the form fields reflect my input

### Requirement: Navigation menu works

The page SHALL display a fixed top navigation bar with "CabSpot" logo and nav links (Home, About, Services, Gallery, Blog, Contact). The mobile menu SHALL toggle open/closed and close when a link is clicked. The nav SHALL change appearance on scroll.

#### Scenario: Desktop navigation renders all links

- **GIVEN** I view the page
- **WHEN** I look at the navigation
- **THEN** all navigation links are present

#### Scenario: Mobile menu toggles

- **GIVEN** I am on a mobile viewport
- **WHEN** I click the hamburger menu button
- **THEN** the mobile navigation opens
- **AND** clicking a link closes the mobile menu

#### Scenario: Scroll changes nav appearance

- **GIVEN** I am on the page
- **WHEN** I scroll past 50px
- **THEN** the navigation bar gets a white background with shadow

### Requirement: About section displays content

The page SHALL display an about section with a heading "Globally Connected by Large Network", descriptive text, and a "Get Details" CTA button.

#### Scenario: About section renders

- **GIVEN** I scroll to the about section
- **WHEN** the section is visible
- **THEN** I see the heading, descriptive text, and CTA button

### Requirement: Services section shows service cards

The page SHALL display a services section with 3 cards: "Taxi Service", "Office Pick-ups", and "Event Transportation", each with an icon and description.

#### Scenario: Services section renders 3 cards

- **GIVEN** I scroll to the services section
- **WHEN** the section is visible
- **THEN** I see 3 service cards with titles and descriptions

### Requirement: Image gallery displays photos

The page SHALL display an image gallery grid with 6 images that have hover effects.

#### Scenario: Gallery renders 6 images

- **GIVEN** I scroll to the image gallery section
- **WHEN** the section is visible
- **THEN** I see a grid of 6 images

### Requirement: Reviews section shows testimonials

The page SHALL display a reviews section with customer testimonials including names and star ratings.

#### Scenario: Reviews section renders testimonials

- **GIVEN** I scroll to the reviews section
- **WHEN** the section is visible
- **THEN** I see customer reviews with names and star ratings

### Requirement: CTA banner is visible

The page SHALL display a full-width CTA banner with a yellow overlay background, heading "Experience Great Support", and a "Reach Our Support Team" button.

#### Scenario: CTA banner renders

- **GIVEN** I scroll to the call-to-action section
- **WHEN** the section is visible
- **THEN** I see the yellow overlay banner with heading and button

### Requirement: Blog section shows recent posts

The page SHALL display a blog section with 2 blog post cards, each with an image, tags, title, excerpt, and date.

#### Scenario: Blog section renders 2 cards

- **GIVEN** I scroll to the blog section
- **WHEN** the section is visible
- **THEN** I see 2 blog post cards

### Requirement: Footer contains Component Dock link

The page SHALL display a footer on a black background with Quick Links, Features, Resources, Follow Us, and Newsletter sections. The footer SHALL link to https://www.componentdock.com/ as "Component Dock". The app code SHALL NOT reference ColorLib.

#### Scenario: Footer renders with Component Dock link

- **GIVEN** I scroll to the footer
- **WHEN** the footer is visible
- **THEN** I see all footer sections and the Component Dock link

#### Scenario: No ColorLib references in app code

- **GIVEN** I search the app source files
- **WHEN** I look for "colorlib" references
- **THEN** no matches are found in apps/cabspot/src/ or apps/cabspot/index.html

## Verification checklist

- [x] Hero banner renders with dark overlay on background image
- [x] Booking form has all fields: name, email, phone, from, to, date/time
- [x] Form validates required fields and shows errors
- [x] Navigation links scroll to corresponding sections
- [x] About section with heading, text, and CTA button
- [x] Services section with 3 colored accent cards
- [x] Image gallery grid with hover effects
- [x] Reviews/testimonials section
- [x] CTA banner with yellow overlay
- [x] Blog section with 2 post cards
- [x] Footer on black background with Component Dock link
- [x] Poppins font loaded from Google Fonts
- [x] Brand color #f9d700 used for buttons and highlights
- [x] Mobile responsive (hamburger menu, stacked layout)
- [x] No references to ColorLib in app code (only in spec/TEMPLATES.md/PR)
- [x] Footer links to https://www.componentdock.com/
