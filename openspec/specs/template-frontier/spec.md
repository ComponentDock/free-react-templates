# Template: Frontier (Travel / Hotel Booking)

## Purpose

Recreation of ColorLib **Martine** — a travel agency / hotel booking template.

- **Source slug:** `martine`
- **Source URL:** https://colorlib.com/wp/template/martine/
- **Preview URL:** https://preview.colorlib.com/theme/martine/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **New name:** `frontier` (apps/frontier, package `@free-react-templates/frontier`)
- **Deploy target:** `https://frontier.free.componentdock.com`

## Visual design notes (from screenshot + preview)

Martine is a clean, professional travel/hotel booking template with a warm
color palette. The hero banner features a full-width background image with a
centered headline and CTA button. Below the hero, a white booking form bar
sits overlapping the banner (-80px margin-top). The "Top Places" section
shows a grid of destination cards with image overlays on hover. An events
section displays upcoming travel packages with date/cost/organizer metadata.
Hotel/restaurant cards follow. A testimonial slider provides social proof.
A "Best Services" grid highlights 4 offerings (Transportation, Guidance,
Accommodation, Discover World). The footer has 3 columns: destination links,
newsletter signup, and contact info. The overall aesthetic is clean and
bright with a cream (#f0eed4) mobile background and navy (#0c3e72) accents.

## Design tokens

Extracted from the live preview CSS (`css/style.css`):

| Token               | Value       | Usage                                        |
| ------------------- | ----------- | -------------------------------------------- |
| Primary (orange)    | `#fe5c24`   | CTA buttons, accent elements, hover states   |
| Secondary (blue)    | `#2493e0`   | Primary buttons, form submit, links          |
| Dark (navy)         | `#0c3e72`   | Card overlays, dark backgrounds, text        |
| Cream bg            | `#f0eed4`   | Banner fallback bg (mobile), light sections  |
| White               | `#ffffff`   | Card backgrounds, booking form bar           |
| Light gray bg       | `#f9f9ff`   | Section alternate backgrounds                |
| Purple tint         | `#f0e9ff`   | Accent backgrounds                           |
| Gray text           | `#888888`   | Body text, secondary labels                  |
| Font family         | Open Sans   | Global body + headings                       |
| Button radius       | `0` (flat)  | All buttons — square corners                 |
| Button padding      | `13px 30px` | Standard button size                         |
| Section padding     | `120px 0`   | `.section_padding` class                     |

## Requirements

### Feature: Frontier — Travel / Hotel Booking Template

  Background:
- **GIVEN** the Frontier template is served at its deploy URL
- **AND** the browser viewport is 1280x800

**--- Top Bar ---**

#### Scenario: Top bar displays contact info and social icons

- **GIVEN** I scroll to the very top of the page
- **THEN** I see a top bar with phone number "4156, New garden, New York, USA"
- **AND** I see social media icon links (Facebook, Twitter, Instagram, Google+)

**--- Navbar ---**

#### Scenario: Navbar shows logo and navigation links

- **GIVEN** I am at the top of the page
- **THEN** I see the "Frontier" logo text on the left
- **AND** I see navigation links: "Home", "About", "Pages", "Blog", "Contact"
- **AND** the "Pages" and "Blog" links have dropdown menus

#### Scenario: Navbar becomes sticky on scroll

- **GIVEN** I scroll down past the hero banner
- **THEN** the navbar sticks to the top of the viewport
- **AND** it has a white background

**--- Hero Banner ---**

#### Scenario: Hero banner displays headline and CTA

- **GIVEN** I view the hero section
- **THEN** I see a full-width banner with a background image
- **AND** I see the headline "Frontier"
- **AND** I see the subtitle "Let's start your journey with us, your dream will come true"
- **AND** I see a "Discover Now" call-to-action button in orange (#fe5c24)

**--- Booking Form ---**

#### Scenario: Booking form bar overlays the hero

- **GIVEN** I view the booking section
- **THEN** I see a white card overlapping the hero banner
- **AND** it contains two tabs: "Booking" and "Restaurant"
- **AND** the Booking tab is active by default
- **AND** I see form fields: "Choose place" (dropdown), "Check in date" (date picker), "Person" (dropdown)
- **AND** I see a "Book Now" submit button in blue (#2493e0)

#### Scenario: Restaurant tab shows alternate form

- **GIVEN** I click the "Restaurant" tab
- **THEN** the restaurant form becomes visible
- **AND** the booking form is hidden

**--- Top Places ---**

#### Scenario: Top Places section shows destination cards

- **GIVEN** I scroll to the "Top Places to visit" section
- **THEN** I see a heading "Top Places to visit"
- **AND** I see 4 destination cards in a grid layout
- **AND** each card has an image, an overlay with destination name on hover
- **AND** the card destinations are: "Saintmartine Iceland", "Maldeve - Asia", and 2 others

#### Scenario: Destination cards have hover overlay effect

- **GIVEN** I hover over a destination card
- **THEN** a navy (#0c3e72) overlay appears with the destination name

**--- Upcoming Event ---**

#### Scenario: Event section displays travel packages

- **GIVEN** I scroll to the "Upcoming Event" section
- **THEN** I see a heading "Upcoming Event"
- **AND** I see 3 event cards each showing: destination name, date, cost, organizer, rating

**--- Hotel & Restaurants ---**

#### Scenario: Hotel section shows accommodation listings

- **GIVEN** I scroll to the "Top Hotel & Restaurants" section
- **THEN** I see a heading "Top Hotel & Restaurants"
- **AND** I see a descriptive paragraph
- **AND** I see 3 hotel cards with images and names (e.g. "Hotel Polonia")

**--- Client Reviews ---**

#### Scenario: Testimonial slider displays reviews

- **GIVEN** I scroll to the "What they said" section
- **THEN** I see a heading "What they said"
- **AND** I see testimonial quotes with author names
- **AND** the testimonials can be navigated (slider/carousel)

**--- Best Services ---**

#### Scenario: Services section shows 4 service cards

- **GIVEN** I scroll to the "We offered best services" section
- **THEN** I see a heading "We offered best services"
- **AND** I see 4 service cards: "Transportation", "Guidance", "Accommodation", "Discover World"
- **AND** each card has an icon, title, and short description

**--- Footer ---**

#### Scenario: Footer has three columns

- **GIVEN** I scroll to the footer
- **THEN** I see a "Discover Destination" column with city links
- **AND** I see a "Subscribe Newsletter" column with an email input and submit button
- **AND** I see a "Contact Us" column with address, phone, and email
- **AND** I see a copyright line referencing the current year
- **AND** the footer links to "https://www.componentdock.com/" branded as "Component Dock"

**--- Responsive ---**

#### Scenario: Mobile layout stacks sections vertically

- **GIVEN** I resize the browser to 375px width
- **THEN** the navbar collapses into a hamburger menu
- **AND** the booking form stacks fields vertically
- **AND** the destination grid becomes single-column
- **AND** the footer columns stack vertically

**--- Accessibility ---**

#### Scenario: All interactive elements are keyboard accessible

- **GIVEN** I navigate the page using only the Tab key
- **THEN** I can reach all navigation links, form fields, buttons, and slider controls
- **AND** focus indicators are visible on each focused element

## Verification checklist

- [ ] `npm run verify:app -- frontier` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 15 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
      - Frontier — Travel / Hotel Booking Template
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [ ] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [ ] Footer links https://www.componentdock.com/ ("Component Dock").
