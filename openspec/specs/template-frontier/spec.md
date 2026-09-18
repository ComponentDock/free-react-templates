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

## Gherkin requirements

### Feature: Frontier — Travel / Hotel Booking Template

  Background:
    Given the Frontier template is served at its deploy URL
    And the browser viewport is 1280x800

  # --- Top Bar ---
  Scenario: Top bar displays contact info and social icons
    Given I scroll to the very top of the page
    Then I see a top bar with phone number "4156, New garden, New York, USA"
    And I see social media icon links (Facebook, Twitter, Instagram, Google+)

  # --- Navbar ---
  Scenario: Navbar shows logo and navigation links
    Given I am at the top of the page
    Then I see the "Frontier" logo text on the left
    And I see navigation links: "Home", "About", "Pages", "Blog", "Contact"
    And the "Pages" and "Blog" links have dropdown menus

  Scenario: Navbar becomes sticky on scroll
    Given I scroll down past the hero banner
    Then the navbar sticks to the top of the viewport
    And it has a white background

  # --- Hero Banner ---
  Scenario: Hero banner displays headline and CTA
    Given I view the hero section
    Then I see a full-width banner with a background image
    And I see the headline "Frontier"
    And I see the subtitle "Let's start your journey with us, your dream will come true"
    And I see a "Discover Now" call-to-action button in orange (#fe5c24)

  # --- Booking Form ---
  Scenario: Booking form bar overlays the hero
    Given I view the booking section
    Then I see a white card overlapping the hero banner
    And it contains two tabs: "Booking" and "Restaurant"
    And the Booking tab is active by default
    And I see form fields: "Choose place" (dropdown), "Check in date" (date picker), "Person" (dropdown)
    And I see a "Book Now" submit button in blue (#2493e0)

  Scenario: Restaurant tab shows alternate form
    Given I click the "Restaurant" tab
    Then the restaurant form becomes visible
    And the booking form is hidden

  # --- Top Places ---
  Scenario: Top Places section shows destination cards
    Given I scroll to the "Top Places to visit" section
    Then I see a heading "Top Places to visit"
    And I see 4 destination cards in a grid layout
    And each card has an image, an overlay with destination name on hover
    And the card destinations are: "Saintmartine Iceland", "Maldeve - Asia", and 2 others

  Scenario: Destination cards have hover overlay effect
    Given I hover over a destination card
    Then a navy (#0c3e72) overlay appears with the destination name

  # --- Upcoming Event ---
  Scenario: Event section displays travel packages
    Given I scroll to the "Upcoming Event" section
    Then I see a heading "Upcoming Event"
    And I see 3 event cards each showing: destination name, date, cost, organizer, rating

  # --- Hotel & Restaurants ---
  Scenario: Hotel section shows accommodation listings
    Given I scroll to the "Top Hotel & Restaurants" section
    Then I see a heading "Top Hotel & Restaurants"
    And I see a descriptive paragraph
    And I see 3 hotel cards with images and names (e.g. "Hotel Polonia")

  # --- Client Reviews ---
  Scenario: Testimonial slider displays reviews
    Given I scroll to the "What they said" section
    Then I see a heading "What they said"
    And I see testimonial quotes with author names
    And the testimonials can be navigated (slider/carousel)

  # --- Best Services ---
  Scenario: Services section shows 4 service cards
    Given I scroll to the "We offered best services" section
    Then I see a heading "We offered best services"
    And I see 4 service cards: "Transportation", "Guidance", "Accommodation", "Discover World"
    And each card has an icon, title, and short description

  # --- Footer ---
  Scenario: Footer has three columns
    Given I scroll to the footer
    Then I see a "Discover Destination" column with city links
    And I see a "Subscribe Newsletter" column with an email input and submit button
    And I see a "Contact Us" column with address, phone, and email
    And I see a copyright line referencing the current year
    And the footer links to "https://www.componentdock.com/" branded as "Component Dock"

  # --- Responsive ---
  Scenario: Mobile layout stacks sections vertically
    Given I resize the browser to 375px width
    Then the navbar collapses into a hamburger menu
    And the booking form stacks fields vertically
    And the destination grid becomes single-column
    And the footer columns stack vertically

  # --- Accessibility ---
  Scenario: All interactive elements are keyboard accessible
    Given I navigate the page using only the Tab key
    Then I can reach all navigation links, form fields, buttons, and slider controls
    And focus indicators are visible on each focused element
