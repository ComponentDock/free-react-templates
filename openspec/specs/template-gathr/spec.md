# Template: Gathr (Event Conference Landing)

## Purpose

Gathr is a single-page event/conference landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Evento" free template (source:
https://colorlib.com/wp/template/evento/), built under a DIFFERENT name
(**Gathr**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap-based event landing page with a hero slider,
event info cards, countdown timer, speaker gallery, pricing table, event
calendar, partner logos, and a multi-column footer. Brand color is
`#f50136` (vivid red), dark backgrounds `#18181c`, font is Montserrat.

## Requirements

### Requirement: Navbar

The system SHALL render a fixed-top navigation bar with logo text and
nav links.

#### Scenario: Desktop navbar

- **GIVEN** the Gathr app is rendered on a desktop viewport
- **THEN** a fixed-top navbar SHALL display with the logo text "Gathr"
- **AND** nav links SHALL include: Home, Speakers, Events, News, Contact
- **AND** the navbar background SHALL be dark (`#18181c`)

#### Scenario: Mobile navbar toggle

- **GIVEN** the viewport is at or below 768px
- **THEN** a hamburger menu button SHALL be visible
- **AND** the nav links SHALL be collapsed by default
- **WHEN** the hamburger button is clicked
- **THEN** the nav links SHALL become visible

### Requirement: Hero section

The system SHALL render a full-screen hero with event headline, date,
and CTA button.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **THEN** the headline "Prepare yourself for the conference" SHALL
  be displayed
- **AND** the event date "15-17 March 2026 — San Francisco, CA" SHALL
  be displayed
- **AND** a "Get Tickets" CTA button SHALL be rendered with rounded
  style and primary brand color (`#f50136`)

#### Scenario: Hero background

- **GIVEN** the hero section is rendered
- **THEN** a dark background with image overlay SHALL be displayed
- **AND** the text SHALL be white and centered

### Requirement: Event info cards

The system SHALL render 4 event info cards in a row.

#### Scenario: Info cards content

- **GIVEN** the event info section is rendered
- **THEN** 4 cards SHALL be displayed: Date, Location, Speakers, Tickets
- **AND** each card SHALL have an icon, a label, and detail text

### Requirement: Countdown timer

The system SHALL render a countdown section with a timer counting down
to a target date.

#### Scenario: Countdown display

- **GIVEN** the countdown section is rendered
- **THEN** a heading "Countdown to the big event" SHALL be displayed
- **AND** 4 countdown units SHALL be shown: Days, Hours, Minutes, Seconds
- **AND** the section SHALL have a dark background with overlay

### Requirement: About section

The system SHALL render an "About the Event" section with descriptive
text.

#### Scenario: About content

- **GIVEN** the about section is rendered
- **THEN** the heading "About the Event" SHALL be displayed
- **AND** two columns of descriptive paragraph text SHALL be shown

### Requirement: Features grid

The system SHALL render 4 feature cards with icons.

#### Scenario: Feature cards

- **GIVEN** the features section is rendered
- **THEN** 4 cards SHALL be displayed in a row
- **AND** each card SHALL have an icon, title, description, and
  "read more" link
- **AND** the features are: Expert Speakers, All-Day Summit,
  Live Broadcast, Early Bird

### Requirement: Speakers gallery

The system SHALL render a speakers section with speaker cards.

#### Scenario: Speaker cards

- **GIVEN** the speakers section is rendered
- **THEN** the heading "Our Speakers" SHALL be displayed
- **AND** 8 speaker cards SHALL be shown in a 4-column grid
- **AND** each card SHALL have a placeholder image, name, and role

### Requirement: Pricing table

The system SHALL render 3 pricing tiers with feature lists.

#### Scenario: Pricing cards

- **GIVEN** the pricing section is rendered
- **THEN** 3 pricing cards SHALL be displayed
- **AND** the tiers are: Early Bird ($65), Standard ($85),
  Corporate ($95)
- **AND** Early Bird SHALL be visually highlighted as recommended
- **AND** each card SHALL have a feature list and "Purchase" button

### Requirement: Event calendar table

The system SHALL render an upcoming events table.

#### Scenario: Calendar rows

- **GIVEN** the calendar section is rendered
- **THEN** a table with 3 event rows SHALL be displayed
- **AND** each row SHALL have: event image, date, title, time,
  speaker name, and "Buy Now" link

### Requirement: Partners section

The system SHALL render partner logos on a gray background.

#### Scenario: Partner logos

- **GIVEN** the partners section is rendered
- **THEN** the heading "Our Partners" SHALL be displayed
- **AND** partner logo placeholders SHALL be shown in a row

### Requirement: CTA banner

The system SHALL render a full-width dark CTA section.

#### Scenario: CTA content

- **GIVEN** the CTA banner is rendered
- **THEN** the heading "Get Your Tickets" SHALL be displayed
- **AND** descriptive text and a "Buy Now" CTA button SHALL be shown
- **AND** the section SHALL have a dark background image with overlay

### Requirement: Footer

The system SHALL render a 3-column footer with brand info, instagram
grid, and newsletter form.

#### Scenario: Footer columns

- **GIVEN** the footer is rendered
- **THEN** 3 columns SHALL be displayed
- **AND** column 1 SHALL have logo, description, and social icons
- **AND** column 2 SHALL show an instagram photo grid
- **AND** column 3 SHALL have a newsletter subscription form with
  email input and "Subscribe" button

#### Scenario: Footer attribution

- **GIVEN** the footer copyright area is rendered
- **THEN** it SHALL include a link to https://www.componentdock.com/
  branded as "Component Dock"
- **AND** nav links (Home, Speakers, Events, News, Contact) SHALL
  be displayed

### Requirement: No ColorLib references

The system SHALL NOT contain any reference to "ColorLib" or
"colorlib.com" in any app source file, comment, or metadata.

#### Scenario: Clean source

- **GIVEN** any source file under apps/gathr/
- **THEN** the file SHALL NOT contain the string "colorlib" or
  "ColorLib" in any case

### Requirement: Component Dock footer link

The system SHALL link to https://www.componentdock.com/ in the
footer, branded as "Component Dock".

#### Scenario: Footer link present

- **GIVEN** the footer copyright is rendered
- **THEN** a link to https://www.componentdock.com/ SHALL be present
- **AND** the link text SHALL contain "Component Dock"
