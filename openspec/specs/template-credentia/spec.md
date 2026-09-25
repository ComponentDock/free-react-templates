# Template: Credentia (CV Resume)

## Purpose

Credentia is a single-page CV/resume template — a personal portfolio template
for showcasing work experience, education, skills, and contact information.
It is an original React recreation of the ColorLib free "Civic" template
(preview: https://preview.colorlib.com/theme/civic/ — CV/resume one-page),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original:

- Font: Josefin Sans (Google Fonts via `<link>`)
- Primary dark: `#40424a` (headings, text, button borders)
- Accent red: `#ff0f3c` (hover states)
- Light background: `#f2f7f8` (alternate sections)
- Paragraph text: `#808181`
- Border/gray: `#cacaca`
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Credentia lives in `apps/credentia` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Header

The system SHALL render a sticky header with the site name "Credentia", a tagline
"Enhance your online presence", and two CTA buttons ("Download CV" and "Discover me").

#### Scenario: Desktop header

- **GIVEN** the page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show "Credentia" as the site name
- **AND** it SHALL show the tagline "Enhance your online presence"
- **AND** it SHALL show "Download CV" and "Discover me" buttons

### Requirement: Hero section

The system SHALL render a two-column hero with the person's name, bio paragraph,
general info list (Date of Birth, Address, Email, Phone), and a portrait image.

#### Scenario: Hero content

- **GIVEN** the hero section renders
- **WHEN** I read the left column
- **THEN** I SHALL see the name "Maria Williams"
- **AND** I SHALL see a bio paragraph
- **AND** I SHALL see general info with DOB, Address, Email, Phone

#### Scenario: Hero portrait

- **GIVEN** the hero section renders
- **WHEN** I look at the right column
- **THEN** I SHALL see a portrait image

### Requirement: Social links section

The system SHALL render a social links section with 5 social media icons
(Pinterest, LinkedIn, Instagram, Facebook, Twitter) and a "My Social Profiles"
heading.

#### Scenario: Social icons

- **GIVEN** the social section renders
- **WHEN** I count the social icons
- **THEN** I SHALL see exactly 5 icons
- **AND** the heading "My Social Profiles" SHALL be present

### Requirement: Work experience section

The system SHALL render a work experience section with the heading "Work Experience"
and a timeline list of work entries (year range, company name, role, description).

#### Scenario: Work entries

- **GIVEN** the work experience section renders
- **WHEN** I count the entries
- **THEN** I SHALL see 2 work experience items
- **AND** each item SHALL have a year range, company, role, and description

### Requirement: Education section

The system SHALL render an education section with the heading "Education" and a
timeline list of education entries (year, diploma name, school, description) on
an alternate background.

#### Scenario: Education entries

- **GIVEN** the education section renders
- **WHEN** I count the entries
- **THEN** I SHALL see 2 education items
- **AND** each item SHALL have a year, diploma, school, and description

### Requirement: References section

The system SHALL render a references section with the heading "References" and
a grid of testimonial cards (quote, name, role).

#### Scenario: Reference cards

- **GIVEN** the references section renders
- **WHEN** I count the testimonial cards
- **THEN** I SHALL see 3 reference cards
- **AND** each card SHALL have a quote, name, and role

### Requirement: Portfolio section

The system SHALL render a portfolio section with the heading "Portfolio", a
"See All Portfolio" button, and a 4-column grid of portfolio items (image,
title, category).

#### Scenario: Portfolio items

- **GIVEN** the portfolio section renders
- **WHEN** I count the items
- **THEN** I SHALL see 4 portfolio items
- **AND** each item SHALL have an image, title, and category label

#### Scenario: Portfolio CTA

- **GIVEN** the portfolio section renders
- **WHEN** I look for the call-to-action
- **THEN** I SHALL see a "See All Portfolio" button

### Requirement: Extra skills section

The system SHALL render an extra skills section with the heading "Extra Skills"
and circular progress indicators (percentage + label) alongside stat boxes
(years of experience, happy clients, awards won).

#### Scenario: Skill indicators

- **GIVEN** the extra skills section renders
- **WHEN** I look for progress indicators
- **THEN** I SHALL see at least 2 circular progress percentages
- **AND** I SHALL see stat boxes with numbers and labels

### Requirement: Contact section

The system SHALL render a contact section with the heading "Get In Touch", a
contact form (name, email, subject, message fields + submit button), and
contact information (address, phone, email).

#### Scenario: Contact form

- **GIVEN** the contact section renders
- **WHEN** I look for the form
- **THEN** I SHALL see name, email, subject, and message fields
- **AND** I SHALL see a submit button

#### Scenario: Contact info

- **GIVEN** the contact section renders
- **WHEN** I look for contact details
- **THEN** I SHALL see address, phone, and email information

### Requirement: Footer

The system SHALL render a footer with copyright text and a link to
https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer attribution

- **GIVEN** the footer renders
- **WHEN** I look for the attribution
- **THEN** I SHALL see a link to https://www.componentdock.com/
- **AND** the link text SHALL mention "Component Dock"
