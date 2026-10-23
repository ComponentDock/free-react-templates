---
name: powergrip
description: Gym & fitness landing template — recreation of ColorLib "Robust"
source: https://colorlib.com/wp/template/robust/
preview: https://preview.colorlib.com/theme/robust/
---

## Purpose

PowerGrip is a gym and fitness landing page template that recreates the ColorLib "Robust" design as a React 19 + Vite + Tailwind CSS 4 + TypeScript application. It features a hero slider, program cards, services, class schedule, testimonials, trainers, classes, events, blog, newsletter, and a footer with Component Dock branding.

## Requirements

### Requirement: Navbar navigation

Users SHALL see a sticky dark navbar with the "PowerGrip" logo and navigation links (Home, Classes, Schedule, Trainers, Events, Blog, Contact).

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads on desktop
- **THEN** the user sees the "PowerGrip" logo and all seven navigation links

#### Scenario: Mobile menu opens and closes

- **WHEN** the user taps the hamburger button on mobile
- **THEN** a full-screen mobile menu opens with all nav links
- **WHEN** the user taps a link in the mobile menu
- **THEN** the menu closes

### Requirement: Hero slider

Users SHALL see a full-width hero section with a background image, dark overlay, motivational headline, and a "Join Classes" CTA button that auto-advances.

#### Scenario: First slide is displayed by default

- **WHEN** the page loads
- **THEN** the hero shows the first slide title and CTA button

#### Scenario: Navigation controls work

- **WHEN** the user clicks the next/previous arrow
- **THEN** the hero advances to the next/previous slide
- **WHEN** the user clicks a dot indicator
- **THEN** the hero navigates to that slide

### Requirement: Intro programs

Users SHALL see three program cards (Body Building, Yoga Program, Aerobics Classes) each with an image, description, and price.

#### Scenario: All three programs render

- **WHEN** the user scrolls to the programs section
- **THEN** three program cards are visible with titles and prices

### Requirement: Services section

Users SHALL see four service cards (Cardio, Body Building, Karate, Boxing) with icons and descriptions.

#### Scenario: All four services render

- **WHEN** the user scrolls to the services section
- **THEN** four service cards are visible with headings and descriptions

### Requirement: Class schedule

Users SHALL see a weekly schedule with day tabs and class entries.

#### Scenario: Day tabs switch active state

- **WHEN** the user clicks a day tab
- **THEN** that tab becomes active and class entries are displayed

### Requirement: Testimonials

Users SHALL see three testimonial cards with quotes and avatars over a parallax background.

#### Scenario: All testimonials render

- **WHEN** the user scrolls to the testimonials section
- **THEN** three testimonial cards with names and quotes are visible

### Requirement: Trainers

Users SHALL see four trainer cards with photos and specialties.

#### Scenario: All trainers render

- **WHEN** the user scrolls to the trainers section
- **THEN** four trainer cards are visible with names and images

### Requirement: Classes

Users SHALL see three class cards with images, prices, titles, and "Learn More" links.

#### Scenario: All classes render

- **WHEN** the user scrolls to the classes section
- **THEN** three class cards are visible with "Learn More" links

### Requirement: Events

Users SHALL see three event cards with dates, organizers, titles, and locations.

#### Scenario: All events render

- **WHEN** the user scrolls to the events section
- **THEN** three event cards are visible with dates and locations

### Requirement: Blog

Users SHALL see three blog cards with images, dates, authors, titles, and excerpts.

#### Scenario: All blog posts render

- **WHEN** the user scrolls to the blog section
- **THEN** three blog cards are visible with authors and titles

### Requirement: Newsletter

Users SHALL see an email subscription form with an input field and subscribe button.

#### Scenario: Email form accepts input

- **WHEN** the user types an email address
- **THEN** the input field displays the typed email

### Requirement: Footer

Users SHALL see a four-column footer (About, Quick Links, Recent Posts, Contact) with a Component Dock copyright link.

#### Scenario: Footer columns render

- **WHEN** the user scrolls to the footer
- **THEN** all four columns are visible with the Component Dock link

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/powergrip/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/powergrip/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
