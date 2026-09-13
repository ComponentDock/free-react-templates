# Podwave — Podcast Template

Recreation of ColorLib "Podca" (https://colorlib.com/wp/template/podca/)

## Purpose

Podwave is a podcast website template featuring a hero section with a featured
episode, a list of recent podcast episodes with audio players, a team section
("Behind The Mic"), a newsletter subscribe section, and a multi-column footer
with navigation, social links, and copyright linking to Component Dock.

Source: ColorLib "Podca" — https://preview.colorlib.com/theme/podca/

### Design Tokens

| Token             | Value   | Usage                                   |
| ----------------- | ------- | --------------------------------------- |
| Brand red         | #f23a2e | Primary buttons, active states, accents |
| Body text         | #4d4d4d | Paragraph text                          |
| Footer background | #333333 | Dark footer                             |
| Footer text       | #737373 | Footer paragraphs                       |
| Footer links      | #999999 | Footer link text                        |
| Footer headings   | #ffffff | Footer section titles                   |
| Section bg light  | #f4f5f9 | Alternating section background          |
| Font family       | Poppins | Weights: 200, 300, 400, 700             |

## Requirements

### Requirement: Navbar with logo and navigation

The template SHALL display a transparent navigation bar with the "Podwave"
logo, desktop navigation links (Home, Episodes, About, Contact), and a
hamburger menu for mobile viewports.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar displays "Podwave" logo text
- **AND** navigation links for Home, Episodes, About, and Contact are visible

#### Scenario: Mobile hamburger toggles menu

- **WHEN** the page loads on a mobile viewport
- **AND** the user clicks the hamburger menu button
- **THEN** a mobile navigation menu opens with all nav links
- **AND** clicking a link closes the mobile menu

### Requirement: Hero section with featured episode

The template SHALL display a hero section with a full-width background image,
dark overlay, featured episode title, author/date/duration metadata, a "Read
The Transcript" CTA button, and an audio player indicator.

#### Scenario: Featured episode is displayed

- **WHEN** the page loads
- **THEN** the hero shows a featured episode title
- **AND** author name, date, and duration are visible
- **AND** a "Read The Transcript" button is present
- **AND** an audio player indicator is visible

### Requirement: Recent Podcasts listing

The template SHALL display a list of recent podcast episodes with images,
titles, descriptions, and audio player indicators. It SHALL include pagination
controls.

#### Scenario: Episode cards render correctly

- **WHEN** the page loads
- **THEN** 5 episode cards are displayed
- **AND** each card has an image, title, author/date, description, and audio indicator

#### Scenario: Pagination is functional

- **WHEN** the page loads
- **THEN** pagination controls show pages 1-5
- **AND** page 1 is marked as current

### Requirement: Behind The Mic team section

The template SHALL display a team section with 3 team members, each showing
a photo, name, role, bio, and social media links (Facebook, Twitter, LinkedIn).

#### Scenario: Team members render with social links

- **WHEN** the page loads
- **THEN** 3 team members are displayed with names, roles, and photos
- **AND** each member has Facebook, Twitter, and LinkedIn social links

### Requirement: Subscribe section

The template SHALL display a subscribe section with a full-width background
image, heading, description, email input, and Send button.

#### Scenario: Subscribe form renders

- **WHEN** the page loads
- **THEN** a "Subscribe" heading is visible
- **AND** an email input field with placeholder "Enter Email" is present
- **AND** a "Send" button is present
- **AND** the email input is required

### Requirement: Footer with navigation and newsletter

The template SHALL display a dark footer with three columns: About Podwave +
Recent Podcasts, Quick Menu + Follow Us social links, and Watch Video +
Subscribe Newsletter. The copyright line SHALL link to Component Dock.

#### Scenario: Footer sections render correctly

- **WHEN** the page loads
- **THEN** the footer shows "About Podwave", "Quick Menu", "Follow Us",
  "Watch Video", and "Subscribe Newsletter" sections
- **AND** the copyright links to https://www.componentdock.com/

#### Scenario: Footer newsletter form handles submission

- **WHEN** the user submits the footer newsletter form
- **THEN** the form handles the submission without navigating away

### Requirement: Accessibility

The template SHALL use semantic HTML with ARIA landmarks, descriptive alt text
on images, and labeled form inputs.

#### Scenario: ARIA landmarks are present

- **WHEN** the page loads
- **THEN** banner, main, and contentinfo ARIA landmarks exist
- **AND** images have descriptive alt text
- **AND** form inputs have associated labels or aria-labels
