# template-soiree

## Purpose

Recreation of ColorLib "Evento" (https://colorlib.com/wp/template/evento/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript template named "Soiree". An event/conference landing page with hero, countdown, speakers, pricing, calendar, and footer sections.

## Requirements

### Requirement: Header with navigation

The template SHALL render a fixed-top navbar with logo, navigation links, and search icon.

#### Scenario: Renders logo and nav links

- **WHEN** the page loads
- **THEN** the header displays "Soiree" logo text
- **AND** navigation links: Home, Speakers, Events, News, Contact
- **AND** a search icon button

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger menu button
- **THEN** the navigation menu expands
- **AND** clicking again collapses it

### Requirement: Hero section

The template SHALL render a full-width hero with background image, heading, date, and CTA button.

#### Scenario: Hero content

- **WHEN** the page loads
- **THEN** the hero displays "Prepare yourself for the conference"
- **AND** the date "12-14 February 2025 — Los Angeles, CA"
- **AND** a "Buy Tickets Now" CTA button

### Requirement: Event info boxes

The template SHALL display 4 event information boxes in a grid.

#### Scenario: Event details

- **WHEN** the page loads
- **THEN** boxes show Date, Location, Speakers, and Tickets
- **AND** each box has an icon, label, and value

### Requirement: Countdown timer

The template SHALL display a live countdown to the event date.

#### Scenario: Countdown display

- **WHEN** the page loads
- **THEN** a countdown shows Days, Hours, Minutes, Seconds
- **AND** the timer updates every second

### Requirement: About section

The template SHALL display event description and feature cards.

#### Scenario: About content

- **WHEN** the page loads
- **THEN** the section shows "About the event" heading
- **AND** two paragraphs describing the event
- **AND** 4 feature cards: 9 Speakers, 8 hrs Marathon, Live Broadcast, Early Bird

### Requirement: Speakers section

The template SHALL display speaker cards with photos and info.

#### Scenario: Speaker cards

- **WHEN** the page loads
- **THEN** 8 speaker cards are displayed in a grid
- **AND** each card shows the speaker name and role

### Requirement: Pricing section

The template SHALL display 3 pricing tiers with features and CTA.

#### Scenario: Pricing cards

- **WHEN** the page loads
- **THEN** 3 pricing cards are shown: Early Bird ($65), Start up ($85), Corporate ($95)
- **AND** each card has a "Purchase" button
- **AND** Early Bird is highlighted as recommended

### Requirement: Calendar section

The template SHALL display upcoming events in a table.

#### Scenario: Event calendar

- **WHEN** the page loads
- **THEN** a table shows 3 upcoming events with date, title, time, and speaker
- **AND** each row has "Read More" and "buy now" links

### Requirement: Partners section

The template SHALL display partner logos on a gray background.

#### Scenario: Partner logos

- **WHEN** the page loads
- **THEN** the section shows "Our Partners" heading
- **AND** 5 partner logo placeholders are displayed

### Requirement: Get tickets section

The template SHALL display a call-to-action section with background image.

#### Scenario: Ticket CTA

- **WHEN** the page loads
- **THEN** the section shows "Get your tickets" heading
- **AND** description text about the event
- **AND** a "Buy Now" button

### Requirement: Footer

The template SHALL render a footer with about info, social links, newsletter, and copyright.

#### Scenario: Footer content

- **WHEN** the page loads
- **THEN** the footer shows about text and social icons
- **AND** an Instagram photo grid
- **AND** a newsletter subscription form with email input and "SUBSCRIBE" button
- **AND** footer navigation links

#### Scenario: Component Dock branding

- **WHEN** the footer renders
- **THEN** it displays "Made with ♥ by Component Dock"
- **AND** the Component Dock link points to https://www.componentdock.com/

### Requirement: Accessibility

The template SHALL use semantic HTML and accessible patterns.

#### Scenario: Semantic structure

- **WHEN** the page loads
- **THEN** the page uses semantic elements: header, main, section, footer
- **AND** images have alt text
- **AND** interactive elements have aria-labels

### Requirement: Design tokens

The template SHALL use consistent design tokens matching the original.

#### Scenario: Visual design

- **WHEN** the page renders
- **THEN** the font is Montserrat (Google Fonts)
- **AND** the brand color is #f50136 (red)
- **AND** headings use #18181c
- **AND** body text uses #838383
