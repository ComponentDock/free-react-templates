# Template: Jamboree (Conference / Event)

## Purpose

Jamboree is a single-page conference/event website in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Eventasia" free
template (source: https://colorlib.com/wp/template/eventasia/, preview:
https://preview.colorlib.com/theme/eventasia/), built under a DIFFERENT name
(**Jamboree**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design tokens

| Token              | Value                                                |
| ------------------ | ---------------------------------------------------- |
| Primary gradient   | `#ca2dff` → `#8e96f8` → `#52fff1` (purple-blue-cyan) |
| Selection / accent | `#C732FF` (purple)                                   |
| Font family        | `'Poppins', sans-serif`                              |
| Body text          | `#777`                                               |
| Heading color      | `#222`                                               |
| Banner overlay     | `#7f3f3b` at opacity 0.3                             |
| Footer bg          | `#222222`                                            |
| Speaker area bg    | `#f9f9ff`                                            |
| Calendar overlay   | `#222` at opacity 0.8                                |
| Button radius      | 25px (pill)                                          |

## Requirements

### Requirement: Navbar renders with logo and navigation links

The navbar SHALL display the "Jamboree" logo and navigation links for Home,
Functionalities, Speaker, and Upcoming Event sections.

#### Scenario: Navbar renders with logo and navigation

- **WHEN** the page loads
- **THEN** a navbar is visible with "Jamboree" logo
- **AND** navigation links: Home, Functionalities, Speaker, Upcoming Event are present

#### Scenario: Mobile menu toggles on hamburger click

- **WHEN** the hamburger button is clicked on mobile
- **THEN** the mobile navigation menu opens
- **AND** all navigation links are accessible

### Requirement: Hero displays conference info and countdown

The hero section SHALL display a heading, a live countdown timer with
days/hours/minutes/seconds, and a "Buy Ticket" gradient CTA button.

#### Scenario: Hero displays heading and countdown

- **WHEN** the hero section is visible
- **THEN** a heading "Our Next Event Starts in" is displayed
- **AND** a countdown timer with Days, Hours, Minutes, Seconds is visible
- **AND** a "Buy Ticket" gradient button links to the upcoming events section

### Requirement: Facilities section shows 6 service columns

The facilities section SHALL display 6 service columns with icons, headings,
and descriptions.

#### Scenario: Facilities renders all 6 services

- **WHEN** the facilities section is visible
- **THEN** 6 service columns are shown: Management, Marketing, Uniqueness, Design, Creativity, Strategy
- **AND** each column has an icon, heading, and description

### Requirement: Speakers section shows speaker grid

The speakers section SHALL display a grid of speaker cards with photos, names,
and roles, with a gradient hover overlay.

#### Scenario: Speakers renders speaker cards

- **WHEN** the speakers section is visible
- **THEN** 3 speaker cards are shown with photo, name, and role
- **AND** social links are available on hover

### Requirement: Calendar section shows upcoming events

The calendar section SHALL display a calendar widget and upcoming event cards
with a dark overlay background.

#### Scenario: Calendar renders with event dates

- **WHEN** the calendar section is visible
- **THEN** a calendar widget is displayed
- **AND** upcoming event cards are listed with dates and titles

### Requirement: Events section shows event list

The events section SHALL display event cards with images, titles, descriptions,
and engagement metrics.

#### Scenario: Events renders event cards

- **WHEN** the events section is visible
- **THEN** 6 event cards are shown with image, title, description
- **AND** like and comment counts are displayed

### Requirement: Footer links to Component Dock

The footer SHALL include a newsletter form, social links, quick links, and a
link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer contains Component Dock link

- **WHEN** the footer is visible
- **THEN** it contains a link to https://www.componentdock.com/
- **AND** the link text reads "Component Dock"

#### Scenario: Newsletter form validates email

- **WHEN** an invalid email is submitted
- **THEN** an error message is shown
- **WHEN** a valid email is submitted
- **THEN** a success message is displayed

## Verification checklist

- [x] Navbar with logo and nav links
- [x] Hero with parallax bg, countdown, gradient CTA
- [x] Facilities: 6 columns with icons
- [x] Speakers: cards with gradient hover overlay
- [x] Calendar: widget with event cards
- [x] Events: list with date badges
- [x] Footer with newsletter + Component Dock link
- [x] Purple-to-cyan gradient used for buttons and accents
- [x] No ColorLib references in app code
- [x] Placeholder images use picsum.photos/seed/jamboree-*
- [x] Font loaded via Google Fonts (Poppins)
- [x] 100% test coverage maintained
