# Template: Roost (Real Estate Home Services)

## Purpose

Roost is a single-page real estate home services template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Stayhome" template
(preview: https://preview.colorlib.com/theme/stayhome/ — real estate landing page),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original (see docs/replication.md):

- Brand blue `#007bff` (primary buttons, accents), dark section `#232931`, light bg `#f3f5fb`
- Typeface: Poppins (Google Fonts via `<link>`)
- Pill buttons (border-radius: 40px), white content areas, dark testimonial section
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Roost lives in `apps/roost` and uses shared components from `packages/ui`
(Button, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky white navbar with the site name "Roost", section
links (Home, Services, Listing, About, How it works, Agent, Blog, Contact),
Sign Up and Sign In buttons, and a hamburger toggle that opens a mobile menu on
small screens.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "Roost" linking to `#home`
- **AND** it SHALL show links to Home, Services, Listing, About, How it works, Agent, Blog, Contact

#### Scenario: Mobile menu

- **GIVEN** the page is rendered
- **WHEN** the user presses the hamburger toggle
- **THEN** the mobile menu SHALL become visible
- **AND** pressing the toggle again SHALL hide the menu
- **AND** clicking a mobile link SHALL close the menu

### Requirement: Hero section

The system SHALL render a full-width hero with a background image, headline
"Get your way home worldwide", a subtitle, and a search bar with a
"Search Places" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain the headline "Get your way home worldwide"
- **AND** it SHALL contain a search input
- **AND** it SHALL contain a "Search Places" button

### Requirement: Services section

The system SHALL render a "Our Services" section with four service cards
(Find Places, We Have Agents, Buy & Rent, Making Money), each with an icon,
title, and description.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the "Our Services" heading
- **AND** it SHALL show cards for Find Places, We Have Agents, Buy & Rent, Making Money

### Requirement: Property listings

The system SHALL render an "Our Property" section with four property cards,
each showing an image, title, price, location, beds, and baths.

#### Scenario: Property cards

- **GIVEN** the page is rendered
- **WHEN** the property listings section is displayed
- **THEN** it SHALL show the "Our Property" heading
- **AND** it SHALL show property cards with prices, bed counts, and bath counts

### Requirement: Search CTA banner

The system SHALL render a full-width banner with a background image, headline
"Choose Your Dream House", description text, and a "Search Places" button.

#### Scenario: Search CTA content

- **GIVEN** the page is rendered
- **WHEN** the search CTA is displayed
- **THEN** it SHALL show the "Choose Your Dream House" heading
- **AND** it SHALL show a "Search Places" link

### Requirement: About section

The system SHALL render a two-column "Roost Real Estate Agency" section with
description text on the left and an image on the right, plus "Book now" and
"Contact us" buttons.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the "Roost Real Estate Agency" heading
- **AND** it SHALL show "Book now" and "Contact us" buttons

### Requirement: How it works section

The system SHALL render a "How it works" section with three numbered steps:
Evaluate Property, Meet Agent, Close the Deal.

#### Scenario: Three steps

- **GIVEN** the page is rendered
- **WHEN** the how-it-works section is displayed
- **THEN** it SHALL show the "How it works" heading
- **AND** it SHALL show steps titled Evaluate Property, Meet Agent, Close the Deal

### Requirement: Agent CTA banner

The system SHALL render a full-width banner with headline
"Choose Your House for Only $120,000" and an "Advance Search" button.

#### Scenario: Agent CTA content

- **GIVEN** the page is rendered
- **WHEN** the agent CTA is displayed
- **THEN** it SHALL show the "$120,000" heading
- **AND** it SHALL show an "Advance Search" link

### Requirement: Agents section

The system SHALL render an "Our Agents" section with three agent cards,
each showing a photo, name, and listing count.

#### Scenario: Agent cards

- **GIVEN** the page is rendered
- **WHEN** the agents section is displayed
- **THEN** it SHALL show the "Our Agents" heading
- **AND** it SHALL show three agent cards with names and listing counts

### Requirement: Blog section

The system SHALL render an "Our Blog" section with three blog post cards,
each showing an image, title, excerpt, and "Read More" link.

#### Scenario: Blog cards

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the "Our Blog" heading
- **AND** it SHALL show three blog cards with "Read More" links

### Requirement: Testimonials section

The system SHALL render a dark-background testimonials section with a quote,
author name, and author image.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the "What Client Says" heading
- **AND** it SHALL show a quote and the author name "Jeff Freshman"

### Requirement: Contact section

The system SHALL render a "Contact Me" section with four contact info cards:
Address, Contact Number, Email Address, Website.

#### Scenario: Contact info

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show the "Contact Me" heading
- **AND** it SHALL show cards for Address, Contact Number, Email Address, Website

### Requirement: Footer

The system SHALL render a footer with the site name "Roost", a tagline,
navigation links, and a "Made with Component Dock" link pointing to
https://www.componentdock.com/.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Roost"
- **AND** it SHALL show a link to https://www.componentdock.com/ with text mentioning "Component Dock"

### Requirement: Page composition

The system SHALL compose all sections in order (Navbar, Hero, Services,
PropertyListings, SearchCTA, About, HowItWorks, AgentCTA, Agents, Blog,
Testimonials, Contact, Footer) inside a main landmark, and set the document
title.

#### Scenario: Full page render

- **GIVEN** the Roost app is rendered
- **WHEN** the page loads
- **THEN** all sections SHALL be present in the main landmark
- **AND** the document title SHALL be "Roost — Real Estate Home Services"
