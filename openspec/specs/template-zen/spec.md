# Spec: Zen (recreation of ColorLib Namaste)

## Purpose

Zen is a single-page yoga and meditation studio website template in the
free-react-templates monorepo. It is an original React recreation of
the ColorLib free "Namaste" website template
(source: https://preview.colorlib.com/theme/namaste/), built under a
DIFFERENT name (Zen — a calm meditation concept; single lowercase word,
no collision with apps/ or existing specs) per the monorepo naming mandate.

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design tokens

- Font: Montserrat (Google Fonts, weights 400/500/600/700)
- Heading color: #493365 (deep purple)
- Body text: #938e99 (muted gray-purple)
- Primary button: #f7ffa0 (pale yellow) bg, #493365 text
- Accent gradient: #7364b0 → #ffb8e7 (purple to pink) — footer, active states
- Button radius: 9px, padding 23px 40px, uppercase, letter-spacing 2px
- Section padding: ~99px top/bottom

## Requirements

### Requirement: Navbar renders navigation links
The template SHALL display a fixed navbar with logo and navigation links
(Home, About Us, Classes, Blog, Contact) and a mobile hamburger toggle.

#### Scenario: Desktop nav shows all links
- **WHEN** the page loads on desktop
- **THEN** the navbar shows Home, About Us, Classes, Blog, and Contact links

#### Scenario: Mobile menu toggles open and closed
- **WHEN** the user clicks the hamburger button
- **THEN** the mobile navigation menu opens with all nav links
- **AND** clicking a link closes the menu

### Requirement: Hero section displays main heading and CTA
The template SHALL display a full-width hero with background image,
heading "Find your inner CHI", description text, and a "Discover" button.

#### Scenario: Hero heading renders
- **WHEN** the page loads
- **THEN** the hero section shows "Find your inner CHI"
- **AND** a "Discover" button is visible

### Requirement: Courses section shows three yoga disciplines
The template SHALL display a 3-column grid of course cards for
Yoga, Hatha, and Pilates with icons and descriptions.

#### Scenario: Three course cards render
- **WHEN** the page loads
- **THEN** three course headings are visible: Yoga, Hatha, Pilates
- **AND** each shows "Beginner & Advanced" label

### Requirement: Meditation section has CTA
The template SHALL display a meditation sessions section with
background image, descriptive text, and a "Discover" CTA.

#### Scenario: Meditation section renders
- **WHEN** the page loads
- **THEN** the meditation section shows a "Discover" button

### Requirement: Timetable shows working hours and progress
The template SHALL display working hours for Monday through Sunday
and skill progress bars for Breathing, Meditation, and Flexibility.

#### Scenario: Timetable displays hours
- **WHEN** the page loads
- **THEN** the timetable shows hours for each day of the week

#### Scenario: Progress bars render
- **WHEN** the page loads
- **THEN** three progress bars are visible with percentages

### Requirement: Testimonial displays a quote
The template SHALL display a testimonial section with a quote
from a named person.

#### Scenario: Testimonial renders
- **WHEN** the page loads
- **THEN** the testimonial section shows a quote from "Maria Smith"

### Requirement: Contact section shows info
The template SHALL display a contact section with address,
phone number, and email.

#### Scenario: Contact info renders
- **WHEN** the page loads
- **THEN** the contact section displays address, phone, and email

### Requirement: Gallery renders images
The template SHALL display a horizontal scrolling gallery of images.

#### Scenario: Gallery images render
- **WHEN** the page loads
- **THEN** the gallery section renders 5 images

### Requirement: Footer links to Component Dock
The template SHALL display a gradient footer with a link to
https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer Component Dock link
- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text mentions "Component Dock"
