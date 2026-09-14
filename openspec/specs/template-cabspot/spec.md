# Template: CabSpot (Taxi / Transportation Service)

## Purpose

CabSpot is a single-page taxi booking website template in the
free-react-templates monorepo. It is a faithful React recreation of the
ColorLib "Taxi" free template (source: https://colorlib.com/wp/template/taxi/
, preview: https://preview.colorlib.com/theme/taxi/), built under a
DIFFERENT name (**CabSpot**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap-based taxi service landing page with a full-screen
hero banner (dark overlay on background image), a booking form panel,
about section, service cards, image gallery, customer reviews, CTA banner
(yellow overlay), blog previews, and a dark footer.

## Design tokens

Extracted from the ColorLib preview CSS (`css/main.css`):

| Token             | Value                                  | Notes                                    |
| ----------------- | -------------------------------------- | ---------------------------------------- |
| Brand color       | `#f9d700` (taxi yellow)               | Primary button, CTA overlay, highlights  |
| Title color       | `#222222` (near-black)                | Headings, CTA text                       |
| Text color        | `#777777` (gray)                      | Body copy                                |
| Font family       | `"Poppins", sans-serif`               | Google Font, weights 300-700             |
| Button radius     | `0px` (square/flat)                   | `.primary-btn` has no border-radius      |
| Button bg         | `#f9d700`                             | Solid yellow, white text on hover        |
| Banner overlay    | `rgba(0,0,0,0.8)`                     | Semi-transparent black on hero           |
| CTA overlay       | `rgba(249,215,0,0.9)`                 | Yellow tint on call-to-action section    |
| Section bg alt    | `#f9f9ff` (very light blue-gray)      | Alternating section backgrounds          |
| Footer bg         | `#000000` (black)                     | Dark footer                              |
| Secondary colors  | `#4cd3e3` (cyan), `#38a4ff` (blue)   | Service card accents                     |
| Card radius       | `3px` (subtle)                        | Card corners                             |
| Select radius     | `20px` (pill)                         | Custom select dropdowns                  |

## Gherkin requirements

### Feature: CabSpot — Taxi Service Landing Page

  As a visitor to CabSpot,
  I want to learn about taxi services and book a ride,
  So that I can arrange reliable transportation.

  Scenario: Page loads with hero banner
    Given I am on the CabSpot homepage
    Then I see a full-screen hero banner with a dark overlay background
    And the heading text reads "Need a ride? just call" or similar taxi CTA
    And a phone number is prominently displayed
    And a "Call for taxi" primary button is visible

  Scenario: Booking form is functional
    Given I see the booking form in the hero area
    When I fill in "Your name", "Email address", "Phone number"
    And I select a "From" destination from the dropdown
    And I select a "To" destination from the dropdown
    And I enter a date and time
    And I click "Make reservation"
    Then the form validates required fields
    And an error message appears for any empty required field

  Scenario: Navigation menu works
    Given I see the top navigation bar with a logo
    When I click "Home" I scroll to the hero banner
    When I click "About" I scroll to the about section
    When I click "Services" I scroll to the services section
    When I click "Gallery" I scroll to the image gallery
    When I click "Blog" I see blog-related links in a dropdown
    When I click "Contact" I scroll to the footer/contact area

  Scenario: About section displays content
    Given I scroll to the about section
    Then I see a heading about the taxi service
    And there is descriptive text about the company
    And a "Learn more" or similar CTA button is present

  Scenario: Services section shows service cards
    Given I scroll to the services section
    Then I see 3 service cards with icons
    And each card has a title, icon, and short description
    And cards have a colored accent (yellow, cyan, or blue)

  Scenario: Image gallery displays photos
    Given I scroll to the image gallery section
    Then I see a grid of taxi/transportation-related images
    And images have hover effects (overlay or zoom)

  Scenario: Reviews section shows testimonials
    Given I scroll to the reviews section
    Then I see customer review testimonials
    And each review has a name and description text

  Scenario: CTA banner is visible
    Given I scroll to the call-to-action section
    Then I see a full-width banner with a yellow overlay background
    And it contains a heading and a primary CTA button

  Scenario: Blog section shows recent posts
    Given I scroll to the blog section
    Then I see 3 blog post cards
    And each card has an image, date, title, and short excerpt

  Scenario: Footer contains links and branding
    Given I scroll to the footer
    Then I see the footer on a black background
    And it contains navigation links, social links, and copyright text
    And it links to https://www.componentdock.com/ as "Component Dock"

## Verification checklist

- [ ] Hero banner renders with dark overlay on background image
- [ ] Booking form has all fields: name, email, phone, from, to, date/time
- [ ] Form validates required fields and shows errors
- [ ] Navigation links scroll to corresponding sections
- [ ] About section with heading, text, and CTA button
- [ ] Services section with 3 colored accent cards
- [ ] Image gallery grid with hover effects
- [ ] Reviews/testimonials section
- [ ] CTA banner with yellow overlay
- [ ] Blog section with 3 post cards
- [ ] Footer on black background with Component Dock link
- [ ] Poppins font loaded from Google Fonts
- [ ] Brand color #f9d700 used for buttons and highlights
- [ ] Mobile responsive (hamburger menu, stacked layout)
- [ ] No references to ColorLib in app code (only in spec/TEMPLATES.md/PR)
- [ ] Footer links to https://www.componentdock.com/
