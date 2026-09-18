# Template: GiveHeart (Non-Profit / Charity Landing)

## Purpose

GiveHeart is a single-page non-profit / charity template — a faithful React
recreation of the ColorLib free "Charity" template
(preview: https://preview.colorlib.com/theme/charity/ — charity/non-profit
landing), built under a different name with the monorepo stack: Vite + React 19
+ Tailwind CSS 4 + TypeScript.

Design tokens captured from the original (see docs/replication.md):

- Brand golden yellow `#FDBE34` (CTA buttons, progress bars, service intro
  bar, testimonial section background, dropdown menus, links)
- Body background `#fff`, dark sections `#000` / `#333`, text color `#637381`
- Headings color `#000`, green accent `#01c632` (donation money amounts)
- Dark card background `#1a1919` (success stories section)
- Border color `#e6e5e5`
- Typeface: Lato (body, 300 weight) + Montserrat (headings, 400/700/900)
  via Google Fonts `<link>`
- Square buttons (border-radius 0), `#FDBE34` primary with white text, black
  secondary variant
- Progress bars: `#FDBE34` fill on `#e6e5e5` track, 10px border-radius
- Hero: fullscreen background image with zoom-out animation, white uppercase
  headline
- Navbar: absolute position, `#000` background, white nav links, golden CTA
  button
- Donor cards: white background, circular avatar, hover lift with shadow
- Testimony cards: white background, circular photo with white border
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react
  icons

GiveHeart lives in `apps/giveheart` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a black navbar with the site name "GiveHeart", section
links (Home, About Us, Causes, Testimonials, Contact), and a "Donate" CTA
button. A hamburger toggle SHALL open a mobile menu on small screens.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "GiveHeart" linking to `#home`
- **AND** it SHALL show links to Home, About Us, Causes, Testimonials and Contact
- **AND** it SHALL show a golden "Donate" CTA button

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on a small screen
- **WHEN** the user presses the hamburger toggle
- **THEN** the mobile menu SHALL become visible and the toggle SHALL report
  `aria-expanded="true"`
- **AND** pressing the toggle again SHALL hide the menu
- **AND** clicking a mobile link SHALL close the menu

### Requirement: Hero section

The system SHALL render a fullscreen hero section with a background image
(overlaid with a dark tint), a large uppercase heading "Donate", a subtitle
"Together we can make a difference", and a golden "Donate Now" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the heading "Donate" in large uppercase white text
- **AND** it SHALL show the subtitle "Together we can make a difference"
- **AND** it SHALL show a "Donate Now" button with golden background

#### Scenario: Hero background

- **GIVEN** the page is rendered
- **WHEN** the hero is visible
- **THEN** it SHALL display a background image covering the full viewport height
- **AND** it SHALL overlay a dark tint for text readability

### Requirement: Service intro bar

The system SHALL render a 3-column service intro bar positioned at the bottom of
the hero, with golden background and three items: "Give Donation" (wallet icon),
"Become Volunteer" (heart icon), and "Give Scholarship" (graduation cap icon).

#### Scenario: Service items

- **GIVEN** the page is rendered
- **WHEN** the service intro bar is visible
- **THEN** it SHALL show exactly 3 items in a horizontal flex row
- **AND** each item SHALL have a white icon, a bold title, and a short description
- **AND** the items SHALL have golden (#FDBE34) background
- **AND** items SHALL be separated by a subtle white border

### Requirement: Causes section

The system SHALL render a "Most Popular Causes" section with 3 cause cards in a
3-column grid. Each card SHALL display a cause image, a progress bar with
percentage, raised/goal amounts, a title, remaining time, description, and a
"Donate Now" button.

#### Scenario: Cause card structure

- **GIVEN** the page is rendered
- **WHEN** the causes section is visible
- **THEN** it SHALL show 3 cause cards in a responsive 3-column grid
- **AND** each card SHALL have: image, progress bar, raised amount, goal amount,
  title, time remaining, description, and a "Donate Now" button

#### Scenario: Progress bar

- **GIVEN** a cause card is rendered
- **WHEN** the progress bar is displayed
- **THEN** it SHALL show a golden (#FDBE34) fill on a light grey (#e6e5e5) track
- **AND** the fill percentage SHALL reflect the raised/goal ratio

#### Scenario: Responsive layout

- **GIVEN** the page is rendered on a small screen
- **WHEN** the causes section is visible
- **THEN** the cards SHALL stack vertically

### Requirement: Donors section

The system SHALL render a "Latest Donations" section with a dark background
(overlaid image), showing 4 donor cards in a row with circular avatar, name,
and donation amount in green.

#### Scenario: Donor card structure

- **GIVEN** the page is rendered
- **WHEN** the donors section is visible
- **THEN** it SHALL show 4 donor cards in a 4-column grid
- **AND** each card SHALL have a circular avatar image, donor name, and donation
  amount displayed in green (#01c632)

#### Scenario: Donor card hover

- **GIVEN** a donor card is visible
- **WHEN** the user hovers over the card
- **THEN** it SHALL lift slightly with a box-shadow transition

### Requirement: Testimonials section

The system SHALL render a "What People Say" section with a golden (#FDBE34)
background, showing testimonial cards in a carousel. Each card SHALL display an
avatar, a blockquote, and an attribution.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is visible
- **THEN** it SHALL show at least 2 testimonial cards
- **AND** each card SHALL have a circular avatar with white border, a quote, and
  an author attribution

#### Scenario: Testimonial layout

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is visible
- **THEN** cards SHALL be centered with a white background and subtle rounded
  corners

### Requirement: Success stories section

The system SHALL render a split "Success Stories" section with a large image on
the left and dark (#1a1919) background text content on the right, including a
heading, paragraph, and "Read More" button.

#### Scenario: Split layout

- **GIVEN** the page is rendered
- **WHEN** the success stories section is visible
- **THEN** it SHALL show a 50/50 split layout
- **AND** the left half SHALL contain a large image
- **AND** the right half SHALL have dark (#1a1919) background with white text,
  heading "Success Stories", description paragraph, and a "Read More" button

### Requirement: News / About / Gallery section

The system SHALL render a 3-column section with News (2 news items with date,
title, excerpt, share/comment counts), About Us (image + text + button), and
Gallery (image carousel).

#### Scenario: News column

- **GIVEN** the page is rendered
- **WHEN** the news/about/gallery section is visible
- **THEN** the left column SHALL show 2 news items with date, title, excerpt,
  and social share counts
- **AND** it SHALL include a "View all news" button

#### Scenario: About column

- **GIVEN** the page is rendered
- **WHEN** the news/about/gallery section is visible
- **THEN** the center column SHALL show an "About Us" heading, an image, a
  description, and a "Learn More" button

#### Scenario: Gallery column

- **GIVEN** the page is rendered
- **WHEN** the news/about/gallery section is visible
- **THEN** the right column SHALL show a "Gallery" heading with an image carousel
- **AND** it SHALL include a "View all gallery" button

### Requirement: Footer

The system SHALL render a 3-column footer on black background with: About Us
(social icons), Contact Info (address, email, phone), and Donation CTA. A
copyright bar SHALL appear below.

#### Scenario: Footer columns

- **GIVEN** the page is rendered
- **WHEN** the footer is visible
- **THEN** it SHALL show 3 columns on black background
- **AND** the left column SHALL have "About Us" text and social media icon links
- **AND** the center column SHALL have contact info (address, email, phone)
- **AND** the right column SHALL have a donation CTA with "Donate Now" button

#### Scenario: Copyright bar

- **GIVEN** the page is rendered
- **WHEN** the copyright bar is visible
- **THEN** it SHALL show copyright text and a "Back to top" link
- **AND** it SHALL link to Component Dock (https://www.componentdock.com/)

## Verification checklist

- [ ] Navbar renders with site name, links, and Donate CTA
- [ ] Navbar toggles mobile menu on small screens
- [ ] Hero shows fullscreen background with heading, subtitle, and CTA
- [ ] Service intro bar shows 3 items with icons and golden background
- [ ] Causes section shows 3 cards with progress bars and donation info
- [ ] Donors section shows 4 cards with circular avatars on dark background
- [ ] Testimonials section shows cards on golden background
- [ ] Success stories section shows split layout with dark right panel
- [ ] News/About/Gallery section shows 3 columns
- [ ] Footer shows 3 columns with social, contact, and CTA
- [ ] Copyright bar links to Component Dock
- [ ] All sections are responsive
- [ ] No ColorLib references in app code
- [ ] 100% test coverage (lines, functions, branches, statements)
