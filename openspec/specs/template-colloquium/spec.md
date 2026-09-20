# Colloquium — Conference & Event Website Template

Recreation of ColorLib Convention (https://colorlib.com/wp/template/convention/)

## Overview

A single-page conference/event website template with a dark, high-energy design.
Sections flow top-to-bottom: top bar, navbar, hero with countdown, about, stats
counter, tabbed schedule, speakers grid, gallery, testimonials, pricing, blog,
CTA registration form, and a multi-column footer.

## Design Tokens

| Token             | Value            | Notes                                      |
| ----------------- | ---------------- | ------------------------------------------ |
| Primary accent    | #ff2d9b          | Hot pink — CTAs, headings, badges          |
| Dark background   | #1a1a2e          | Hero overlay, counter section, CTA section |
| Light background  | #f8f9fa          | Schedule section alternating bg            |
| Footer background | #0d0d1a          | Near-black footer                          |
| Text primary      | #ffffff          | On dark backgrounds                        |
| Text secondary    | #a0a0b0          | Subtitles, body on dark                    |
| Text dark         | #333333          | Body on light backgrounds                  |
| Font heading      | Barlow Condensed | Bold condensed headings                    |
| Font body         | Barlow           | Regular body text                          |

## Sections (top to bottom)

### 1. TopBar

- Left: phone number + email
- Right: social icons (Facebook, Twitter, Instagram, Dribbble) + "Buy Ticket" pink button

### 2. Navbar

- Brand: "Colloquium" (logo text)
- Nav links: Home, About, Pricing, Schedule, Speakers, Blog, Contact
- Sticky on scroll, dark background

### 3. Hero

- Full-width background image with dark overlay
- Subtitle: "Hurry Up! Don't Waste Time"
- Heading: "Biggest Developer Conference 2025"
- Location + date badges
- Countdown timer (days, hours, minutes, seconds)

### 4. About

- Two-column: image left, text right
- Pink subtitle "Welcome to Colloquium"
- Heading "Biggest Developer Conference 2025"
- Body paragraph
- "20 Year of Experience" badge with calendar icon

### 5. CounterStats

- Dark background with background image + overlay
- 4 stat blocks: Places (301), Events (102), Photos (1050), Speakers (61)
- Animated count-up on scroll

### 6. Schedule

- Light background
- Tabbed interface: Day 01–04 with dates
- Each tab shows 3 session cards with speaker photo, time, title, description

### 7. Speakers

- Dark background with overlay
- 5-column grid of speaker cards
- Each card: photo, name, role, social icons on hover

### 8. Gallery

- 4x2 grid of images with search icon overlay on hover

### 9. Testimonials

- Light background
- Carousel of testimonial cards with quote, name, role

### 10. Pricing

- 3-tier pricing cards (Basic $29, Standard $49, Premium $79)
- Center card highlighted with pink accent

### 11. Blog

- 3-column blog cards with image, date/author/comments meta, title, excerpt

### 12. CTA

- Dark background with background image
- "Book Your Tickets Now" heading
- Registration form: First Name, Last Name, Phone, Price Select, Register Now button

### 13. Footer

- Multi-column: brand + about, Explore links, Info links, Get Your Seat CTA, Contact info
- Copyright bar with Component Dock link

## Test Scenarios (Gherkin)

```gherkin
Feature: Colloquium template renders all sections

  Scenario: Page renders all major sections
    Given I render the Colloquium App
    Then I see a navigation bar with "Colloquium" brand
    And I see a hero section with "Biggest Developer Conference" heading
    And I see a countdown timer with days, hours, minutes, seconds
    And I see an about section with "Welcome to Colloquium" subtitle
    And I see stats counters for Places, Events, Photos, Speakers
    And I see a schedule section with 4 day tabs
    And I see a speakers section with speaker cards
    And I see a gallery section
    And I see a testimonials section
    And I see a pricing section with 3 plans
    And I see a blog section
    And I see a CTA form section
    And I see a footer with Component Dock link

  Scenario: Countdown timer displays time units
    Given I render the Colloquium App
    Then I see countdown units for days, hours, minutes, and seconds

  Scenario: Schedule tabs switch content
    Given I render the Colloquium App
    When I click the "Day 02" tab
    Then I see sessions for Day 02

  Scenario: Pricing cards show correct plans
    Given I render the Colloquium App
    Then I see "Basic" plan at "$29"
    And I see "Standard" plan at "$49"
    And I see "Premium" plan at "$79"

  Scenario: Footer links to Component Dock
    Given I render the Colloquium App
    Then the footer contains a link to "https://www.componentdock.com/"

  Scenario: Navbar has correct navigation links
    Given I render the Colloquium App
    Then I see navigation links for "Home", "About", "Pricing", "Schedule", "Speakers", "Blog", "Contact"
```
