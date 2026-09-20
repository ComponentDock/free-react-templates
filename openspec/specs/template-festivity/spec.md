# Template: Festivity (Event Conference Landing)

## Purpose

Festivity is a single-page event/conference template — a faithful React
recreation of the ColorLib free "Event" template
(preview: https://preview.colorlib.com/theme/event/ — event/conference landing),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original (see docs/replication.md):

- Brand red `#dd0a37` (buttons, section title accents, event day circles,
  counter numbers)
- Dark heading text `#0b0f28`, body text `#444`
- Backgrounds: white `#FFF` (content sections), light grey `#F9F9FA`
  (schedule section), parallax images (hero, video CTA, bottom CTA)
- Typeface: Poppins (Google Fonts, weights 400, 700, 900)
- Buttons: red `#dd0a37` background, white text, `border-radius: 2px`,
  uppercase, `padding: 14px 50px`
- Event day indicator: red circle (`border-radius: 50%`, 120px diameter,
  white text, date + month inside)
- Speaker cards: image on top, social overlay on hover (red icons),
  name + role below
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react
  icons replace Font Awesome

Festivity lives in `apps/festivity` and uses shared components from
`packages/ui` (Button, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a transparent-over-hero navbar with the site name
"Festivity", section links (Home, About, Schedule, Speakers, Sponsors,
Contact), and a hamburger toggle that opens a mobile menu on small screens.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "Festivity" linking to `#home`
- **AND** it SHALL show links to Home, About, Schedule, Speakers, Sponsors
  and Contact

#### Scenario: Mobile menu

- **GIVEN** the page is rendered
- **WHEN** the user presses the hamburger toggle
- **THEN** the mobile menu SHALL become visible and the toggle SHALL report
  `aria-expanded="true"`
- **AND** pressing the toggle again SHALL hide the menu
- **AND** clicking a mobile link SHALL close the menu

### Requirement: Hero section

The system SHALL render a full-width hero with a parallax background image,
centered headline, supporting paragraph, and a "Buy Ticket" CTA button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain the headline "Lorem ipsum dolor sit amet"
- **AND** it SHALL contain a subtitle paragraph
- **AND** it SHALL show a "Buy Ticket" button with brand red background

### Requirement: About section

The system SHALL render a white "About Event" section with a centered
description paragraph and a row of four animated counter statistics
(Hours, Venues, Countries, Speakers).

#### Scenario: About heading

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "About Event" with "Event" in brand red

#### Scenario: Counter statistics

- **GIVEN** the page is rendered
- **WHEN** the counters are displayed
- **THEN** it SHALL show four stat blocks in a row: Hours (900+),
  Venues (750+), Countries (50+), Speakers (20+)
- **AND** each stat SHALL have a number in brand red and a label in uppercase

### Requirement: Gallery section

The system SHALL render a full-width image gallery carousel showing event
photos.

#### Scenario: Gallery carousel

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show a carousel of event images
- **AND** the carousel SHALL cycle through images automatically or via
  navigation dots

### Requirement: Video CTA section

The system SHALL render a full-width parallax section with a play button
overlay, heading "Watch this video", and supporting text.

#### Scenario: Video CTA content

- **GIVEN** the page is rendered
- **WHEN** the video CTA section is displayed
- **THEN** it SHALL show a circular play button icon
- **AND** it SHALL show the heading "Watch this video"
- **AND** it SHALL show a descriptive paragraph

### Requirement: Schedule section

The system SHALL render an "Event Schedule" section on a light grey
background with a timeline of events. Each event has a circular date badge
on the left and content (time, title, description, speaker) on the right.

#### Scenario: Schedule heading

- **GIVEN** the page is rendered
- **WHEN** the schedule section is displayed
- **THEN** it SHALL show the heading "Event Schedule" with "Schedule" in
  brand red

#### Scenario: Event timeline items

- **GIVEN** the page is rendered
- **WHEN** the schedule events are displayed
- **THEN** it SHALL show at least two events, each with:
  - A circular date badge (day number + month/year) in brand red
  - A time range (e.g. "8:00 AM - 11:00 AM")
  - An event title
  - A description paragraph
  - A speaker attribution link

### Requirement: Speakers section

The system SHALL render an "Our Speakers" section with speaker cards in a
3-column grid. Each card shows a photo, social media icons on hover, and
the speaker's name and role.

#### Scenario: Speaker cards

- **GIVEN** the page is rendered
- **WHEN** the speakers section is displayed
- **THEN** it SHALL show the heading "Our Speakers" with "Speakers" in
  brand red
- **AND** it SHALL show at least three speaker cards
- **AND** each card SHALL have a photo, name, and role
- **AND** hovering over a card SHALL reveal social media icon links

### Requirement: Sponsors section

The system SHALL render an "Our Sponsors" section with sponsor logos in a
4-column grid.

#### Scenario: Sponsor logos

- **GIVEN** the page is rendered
- **WHEN** the sponsors section is displayed
- **THEN** it SHALL show the heading "Our Sponsors" with "Sponsors" in
  brand red
- **AND** it SHALL show at least four sponsor logo placeholders

### Requirement: CTA section

The system SHALL render a full-width parallax call-to-action section with
heading "Get Ticket Now!", supporting text, and a "Buy Ticket" button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL show the heading "Get Ticket Now!"
- **AND** it SHALL show a descriptive paragraph
- **AND** it SHALL show a "Buy Ticket" button with brand red background

### Requirement: Contact section

The system SHALL render a "Contact Info" section with three columns:
Address, Phone, and Email.

#### Scenario: Contact details

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show the heading "Contact Info" with "Info" in brand red
- **AND** it SHALL show three columns: Address, Phone, Email

### Requirement: Footer

The system SHALL render a dark footer with centered logo, social media
links, and a copyright line linking to Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a logo
- **AND** it SHALL show social media icon links (Facebook, Twitter,
  Instagram, LinkedIn, Pinterest)
- **AND** it SHALL show a copyright line linking to
  `https://www.componentdock.com/`

## Verification checklist

- [ ] All sections render in correct order: Navbar → Hero → About →
  Gallery → Video CTA → Schedule → Speakers → Sponsors → CTA →
  Contact → Footer
- [ ] Brand red `#dd0a37` used for buttons, section title accents,
  event day circles, counter numbers
- [ ] Poppins font loaded from Google Fonts (weights 400, 700, 900)
- [ ] Navbar transparent over hero, solid on scroll
- [ ] Mobile hamburger menu toggles correctly with aria-expanded
- [ ] Counter numbers display correctly (static values, no animation
  dependency)
- [ ] Schedule timeline items show circular date badges
- [ ] Speaker cards reveal social icons on hover
- [ ] Footer links to Component Dock
- [ ] No references to ColorLib in app code
- [ ] Placeholder images use picsum.photos with deterministic seeds
- [ ] Icons from lucide-react (not Font Awesome)
- [ ] Tests at 100% coverage
