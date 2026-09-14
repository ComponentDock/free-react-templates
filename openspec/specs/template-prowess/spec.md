# Template: Prowess (Gym & Fitness Landing Page)

## Purpose

Prowess is a single-page gym & fitness company landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Sportify" free template (source:
https://colorlib.com/wp/template/sportify/), built under a DIFFERENT name
(**Prowess**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Requirements

### Requirement: Page structure and sections

The template SHALL render a single-page landing with sections in this order:
Navbar, Hero, Intro, About, Quote, CTA, Programs, Pricing, Contact, Footer.

#### Scenario: All sections render

- **WHEN** the App component mounts
- **THEN** the page contains a navigation bar, hero section, intro section, about section, quote section, CTA section, programs section, pricing section, contact section, and footer

#### Scenario: Section headings are present

- **WHEN** I scan the page headings
- **THEN** I see headings for each major section (About, Programs, Pricing, Contact)

### Requirement: Navbar navigation

The navbar SHALL display the "Prowess" logo and navigation links (Home, About, Programs, Pricing, Contact) with a mobile menu toggle.

#### Scenario: Desktop navigation

- **WHEN** the viewport is desktop-width
- **THEN** the nav links are visible without a hamburger button

#### Scenario: Mobile menu toggle

- **WHEN** I click the mobile menu button
- **THEN** the mobile navigation panel opens
- **WHEN** I click a mobile nav link
- **THEN** the mobile menu closes

### Requirement: Hero section

The hero SHALL display a background image, subtitle "go to the gym now!", title "never limit yourself" with "never" in a circular highlight, and a "read more" CTA button.

#### Scenario: Hero content renders

- **WHEN** I view the hero section
- **THEN** I see the subtitle "go to the gym now!"
- **AND** I see the title "never limit yourself"
- **AND** I see a "read more" button

### Requirement: Intro feature boxes

The intro section SHALL display 3 feature boxes: Aerobics Program, Train Hard, Basic Program.

#### Scenario: Feature boxes render

- **WHEN** I scroll to the intro section
- **THEN** I see 3 feature boxes with icons, titles, and descriptions

### Requirement: About section

The about section SHALL display the heading "about prowess", a description, and a "train hard" CTA button alongside an image.

#### Scenario: About content renders

- **WHEN** I view the about section
- **THEN** I see the heading "about prowess"
- **AND** I see a "train hard" button

### Requirement: Quote section

The quote section SHALL display a motivational quote and author attribution.

#### Scenario: Quote renders

- **WHEN** I view the quote section
- **THEN** I see a quote and author name

### Requirement: CTA section

The CTA section SHALL display "join our gym" heading, description, image, and benefit list.

#### Scenario: CTA content renders

- **WHEN** I view the CTA section
- **THEN** I see the heading "join our gym"
- **AND** I see benefit list items

### Requirement: Programs section

The programs section SHALL display 3 program cards: Aerobics, Pilates, Yoga.

#### Scenario: Program cards render

- **WHEN** I view the programs section
- **THEN** I see 3 program cards with titles and descriptions

### Requirement: Pricing section

The pricing section SHALL display 3 pricing tiers: Beginner (Free), Pro ($29/mo), Expert ($59/mo).

#### Scenario: Pricing tiers render

- **WHEN** I view the pricing section
- **THEN** I see 3 pricing tiers with plan names and prices

### Requirement: Contact section

The contact section SHALL display phone, email, and location information.

#### Scenario: Contact info renders

- **WHEN** I view the contact section
- **THEN** I see phone number, email address, and location

### Requirement: Footer

The footer SHALL display the Component Dock link, navigation links, social icons, and copyright.

#### Scenario: Footer renders

- **WHEN** I view the footer
- **THEN** I see a link to https://www.componentdock.com/
- **AND** I see copyright text

### Requirement: Design tokens

The template SHALL use brand colors (#ff0e3b red, #190a49 navy, #7800ff purple), Open Sans font, and uppercase headings with 0.2em letter-spacing.

#### Scenario: Brand colors applied

- **WHEN** I inspect the rendered CSS
- **THEN** the brand red color is used for buttons and accents
