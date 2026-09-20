# Template: GatherVenue (Events / Conference)

## Purpose

Recreation of ColorLib's **Event** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript application.

- **ColorLib source:** https://colorlib.com/wp/template/event/
- **Preview URL:** https://preview.colorlib.com/theme/event/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/event-free-template.jpg
- **New name:** `gathervenue` (package: `@free-react-templates/gathervenue`)
- **Deploy target:** `gathervenue.free.componentdock.com`

## Requirements

### Requirement: Navbar displays correctly

The navbar SHALL be sticky, have a dark navy background, contain 6 navigation links (Home, About, Schedule, Speakers, Sponsors, Contact), and a "Buy Ticket" CTA button.

#### Scenario: Navbar renders all elements

- **WHEN** the page loads
- **THEN** the navbar is visible at the top with a dark background
- **AND** it contains links: Home, About, Schedule, Speakers, Sponsors, Contact
- **AND** there is a "Buy Ticket" CTA button

#### Scenario: Navbar mobile menu toggle

- **WHEN** the user clicks the mobile menu button
- **THEN** the mobile menu opens with all navigation links
- **AND** clicking a link closes the menu

### Requirement: Hero section fills viewport

The hero section SHALL be 100vh tall with a background image, centered heading, subtext paragraph, and a CTA button.

#### Scenario: Hero renders heading and CTA

- **WHEN** the user views the hero section
- **THEN** a large heading is displayed
- **AND** a subtext paragraph is visible
- **AND** a "Get Your Ticket" CTA button links to the ticket section

### Requirement: About section with stat counters

The about section SHALL display a section title with brand accent color, a description paragraph, and 4 statistic counters (Hours, Venues, Country, Speakers).

#### Scenario: About section renders content

- **WHEN** the user scrolls to the About section
- **THEN** the section title shows "About Event" with the second word in brand red
- **AND** a paragraph describing the event is visible
- **AND** 4 statistic counters are displayed

### Requirement: Gallery carousel

The gallery section SHALL display images in a horizontal carousel with navigation arrows and dot indicators.

#### Scenario: Gallery navigation

- **WHEN** the user clicks the next button
- **THEN** the next image is displayed
- **WHEN** the user clicks the previous button
- **THEN** the previous image is displayed
- **WHEN** the user clicks a dot indicator
- **THEN** the corresponding image is displayed

### Requirement: Video CTA section

The video CTA section SHALL have a parallax background image, a play button icon, heading, and subtext.

#### Scenario: Video CTA renders

- **WHEN** the user scrolls to the Video CTA section
- **THEN** a play button is displayed
- **AND** the heading reads "Watch This Video"
- **AND** the section has a parallax background

### Requirement: Schedule section lists events

The schedule section SHALL display events with date badges, time, title, description, speaker name, and a "Download Schedule" button.

#### Scenario: Schedule renders events

- **WHEN** the user scrolls to the Schedule section
- **THEN** events are listed with date, time, title, description, and speaker
- **AND** a "Download Schedule" button is displayed

### Requirement: Speakers section with modal

The speakers section SHALL display speaker cards in a 3-column grid with image, name, role, and social icons. Clicking a card opens a modal with full details.

#### Scenario: Speakers cards and modal

- **WHEN** the user scrolls to the Speakers section
- **THEN** speaker cards are displayed in a grid
- **AND** clicking a card opens a modal with speaker details
- **AND** clicking close dismisses the modal

### Requirement: Sponsors section

The sponsors section SHALL display sponsor logos in a 4-column grid (8 total).

#### Scenario: Sponsors renders logos

- **WHEN** the user scrolls to the Sponsors section
- **THEN** 8 sponsor logo images are displayed

### Requirement: CTA section

The CTA section SHALL have a parallax background, "Get Ticket Now!" heading, and "Buy Ticket" button.

#### Scenario: CTA renders

- **WHEN** the user scrolls to the CTA section
- **THEN** the heading reads "Get Ticket Now!"
- **AND** a "Buy Ticket" button is displayed

### Requirement: Contact section

The contact section SHALL display 3 columns: Address, Phone, Email with headings and details.

#### Scenario: Contact renders columns

- **WHEN** the user scrolls to the Contact section
- **THEN** Address, Phone, and Email columns are visible with details

### Requirement: Map placeholder

The map section SHALL display a placeholder area for a map embed.

#### Scenario: Map placeholder renders

- **WHEN** the user scrolls to the Map section
- **THEN** a map placeholder area is displayed

### Requirement: Footer with Component Dock link

The footer SHALL link to https://www.componentdock.com/ (branded "Component Dock"), display social media icons, and show a copyright line.

#### Scenario: Footer renders correctly

- **WHEN** the user scrolls to the footer
- **THEN** a Component Dock link is present
- **AND** social media icons are displayed
- **AND** a copyright line is shown

### Requirement: Typography and colors

All text SHALL use the Poppins font family. CTA buttons SHALL use background #dd0a37 with white text. Accent words in section titles SHALL use #dd0a37.

#### Scenario: Brand color consistency

- **WHEN** the user views any section
- **THEN** all CTA buttons use the brand red background
- **AND** accent words in section titles use the brand red color

## Verification checklist

- [ ] Navbar: sticky, dark bg, correct nav links, "Buy Ticket" CTA
- [ ] Hero: 100vh, background image, heading + subtext
- [ ] About: section title with brand accent, description paragraph
- [ ] Numbers: 4 stat counters
- [ ] Gallery: horizontal image carousel with navigation
- [ ] Video CTA: parallax bg, play icon, heading + subtext
- [ ] Schedule: events list with date/time/title/speaker, "Download Schedule" button
- [ ] Speakers: 3-column grid, speaker cards with image overlay, modal on click
- [ ] Sponsors: 4-column logo grid
- [ ] CTA: parallax bg, "Get Ticket Now!" heading, "Buy Ticket" button
- [ ] Contact: 3-column (Address, Phone, Email)
- [ ] Map: placeholder area
- [ ] Footer: Component Dock link, social icons, copyright
- [ ] Typography: Poppins throughout
- [ ] Colors: #dd0a37 brand, #0b0f28 dark, #F9F9FA speakers bg
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] 100% test coverage
- [ ] Deployed to gathervenue.free.componentdock.com
