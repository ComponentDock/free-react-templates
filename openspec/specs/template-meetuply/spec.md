# Template: Meetuply (Event Conference Landing)

## Purpose

Recreation of ColorLib's **Eventalk** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript application.

- **ColorLib source:** https://colorlib.com/wp/template/eventalk/
- **Preview URL:** https://preview.colorlib.com/theme/eventalk/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/eventalk-free-template.jpg
- **New name:** `meetuply` (package: `@free-react-templates/meetuply`)
- **Deploy target:** `meetuply.free.componentdock.com`

## Requirements

### Requirement: Navbar displays correctly

The navbar SHALL be sticky with a dark charcoal background, contain 6 navigation links (Home, About, Speakers, Schedule, Blog, Contact), and a "Buy Ticket" CTA button with brand styling.

#### Scenario: Navbar renders all elements

- **WHEN** the page loads
- **THEN** the navbar is visible at the top with a dark background
- **AND** it contains links: Home, About, Speakers, Schedule, Blog, Contact
- **AND** there is a "Buy Ticket" CTA button with brand purple-blue border

#### Scenario: Navbar mobile menu toggle

- **WHEN** the user clicks the mobile menu button
- **THEN** the mobile menu opens with all navigation links
- **AND** clicking a link closes the menu

### Requirement: Hero section fills viewport

The hero section SHALL be full viewport height with a background image, purple-blue gradient overlay, countdown timer, heading, date/location subtext, and a "Buy Ticket" button.

#### Scenario: Hero renders heading and countdown

- **WHEN** the user views the hero section
- **THEN** a large heading "Developer Conference 2025" is displayed
- **AND** a countdown timer shows days, hours, minutes, seconds
- **AND** a "Buy Ticket" CTA button is visible

### Requirement: Venue section with feature cards

The venue section SHALL display a "Venue" heading and 4 feature cards (Venue, Transport, Hotel, Restaurant) with icons and descriptions.

#### Scenario: Venue renders all cards

- **WHEN** the user scrolls to the Venue section
- **THEN** 4 feature cards are displayed in a grid
- **AND** each card has an icon, title, and description

### Requirement: Fun Facts section

The fun facts section SHALL display a "Fun Facts" heading and descriptive paragraph.

#### Scenario: Fun facts renders content

- **WHEN** the user scrolls to the Fun Facts section
- **THEN** the heading "Fun Facts" is visible
- **AND** a descriptive paragraph is displayed

### Requirement: Counter statistics with animated count-up

The counters section SHALL display 4 statistics (Speakers, Sponsors, Total Seats, Topics) with animated count-up on scroll.

#### Scenario: Counters animate on scroll

- **WHEN** the counters section scrolls into view
- **THEN** each statistic animates from 0 to its target value
- **AND** the final values are displayed with appropriate labels

### Requirement: Speakers section with responsive grid

The speakers section SHALL display speaker cards in a responsive grid with image, name, role, and social overlay.

#### Scenario: Speakers renders all cards

- **WHEN** the user scrolls to the Speakers section
- **THEN** 4 speaker cards are displayed in a responsive grid
- **AND** each card has an image, name, and role

### Requirement: Schedule section with day tabs

The schedule section SHALL display tabbed day navigation (Day 01-04) with event listings per day.

#### Scenario: Schedule day switching

- **WHEN** the user clicks a day tab
- **THEN** the corresponding day's events are displayed
- **AND** each event shows time, title, description, and speaker

### Requirement: Testimony section with parallax

The testimony section SHALL have a dark brown background with parallax effect and a blockquote.

#### Scenario: Testimony renders quote

- **WHEN** the user scrolls to the Testimony section
- **THEN** a testimonial quote is displayed with author attribution

### Requirement: Pricing section with tier cards

The pricing section SHALL display 3 pricing tiers (Small Team, Family Pack, Enterprise) with prices, feature lists, and "Buy Ticket" buttons.

#### Scenario: Pricing renders all tiers

- **WHEN** the user scrolls to the Pricing section
- **THEN** 3 pricing cards are displayed
- **AND** each card shows price, features, and a "Buy Ticket" button
- **AND** the "Family Pack" tier is highlighted as "Most Popular"

### Requirement: Blog section with entry grid

The blog section SHALL display blog entry cards with date badges, titles, and excerpts.

#### Scenario: Blog renders entries

- **WHEN** the user scrolls to the Blog section
- **THEN** 3 blog entry cards are displayed in a grid
- **AND** each card has a date badge, title, and excerpt

### Requirement: Newsletter CTA with email input

The newsletter section SHALL have a dark brown parallax background, heading, email input, and subscribe button.

#### Scenario: Newsletter form submission

- **WHEN** the user enters an email and clicks Subscribe
- **THEN** the form is submitted and the email field is cleared

### Requirement: Footer with Component Dock link

The footer SHALL have a dark charcoal background, brand name, Useful Links column, contact info column, social icons, and a link to https://www.componentdock.com/.

#### Scenario: Footer links to Component Dock

- **WHEN** the user scrolls to the footer
- **THEN** a link to "Component Dock" is visible
- **AND** it points to https://www.componentdock.com/

### Requirement: Mobile responsiveness

The template SHALL be fully responsive across all screen sizes.

#### Scenario: Mobile layout

- **WHEN** the viewport is narrow (mobile)
- **THEN** the navbar collapses to a hamburger menu
- **AND** all sections stack vertically

### Requirement: Accessibility

The template SHALL meet WCAG AA accessibility standards.

#### Scenario: Heading hierarchy and alt text

- **WHEN** the page is rendered
- **THEN** all images have alt text
- **AND** the page has proper heading hierarchy (h1 > h2 > h3)
