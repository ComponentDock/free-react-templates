# Template: Conclave (Event / Conference)

## Purpose

Recreation of ColorLib's **Umeet** event/conference template.

- **Source slug:** `umeet`
- **ColorLib page:** https://colorlib.com/wp/template/umeet/
- **Live preview:** https://preview.colorlib.com/theme/umeet/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/umeet-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens (extracted from preview CSS)

| Token               | Value                    | Notes                                      |
| ------------------- | ------------------------ | ------------------------------------------ |
| Primary brand       | `#3b1d82` (deep purple)  | Used for headings, button bg, accents      |
| Accent / CTA        | `#ea0763` (hot pink)     | Hover states, highlights, pricing CTA      |
| Light bg            | `#f0e9ff` (lavender)     | Section alternates (.bg-gray equivalent)   |
| White bg            | `#fff`                   | Cards, main content                       |
| Dark footer bg      | `#111429` (navy)         | Footer background                          |
| Text primary        | `#242424`               | Headings, body text                       |
| Text muted          | `#797979` / `#999999`   | Subtitles, descriptions                   |
| Font - headings     | `"Oswald", sans-serif`   | Used for large headings, hero title        |
| Font - body         | `"Roboto", sans-serif`   | Body text, paragraphs, nav                |
| Button radius       | `4px`                    | Primary buttons                           |
| Card radius         | `12px`                   | Speaker cards, pricing cards              |
| Section spacing     | `section-padding` (80px) | Consistent vertical rhythm                |
| Hero                | Background image cover   | Full-width banner with overlay            |
| Speaker bg          | Background image cover   | Parallax-style section behind speakers    |
| Gallery bg          | Background image cover   | Behind gallery/achievements               |
| Sponsor bg          | Background image cover   | Behind sponsor logos                      |

## Section structure (order extracted from preview DOM)

1. **Navbar** — Logo left, nav links right (About, Speakers, Schedule, Gallery, Price Table, Blog, Contact)
2. **Hero Banner** — Full-width background image, date line ("20-22 January, 2019, Buffelo City"), countdown numbers, headline ("UX CONFERENCE 2019"), "Buy Ticket" CTA button
3. **Stats bar** — Light gray bg, three stat blocks (e.g. 320 Attendees, 30 Speakers, 30 Sponsors)
4. **Features ("Why Join")** — White section, 3 feature cards with icon, title, description (Always First Service, International Business, World Great Speaker)
5. **Speakers** — Dark background image section, carousel of speaker cards (photo, name, role)
6. **Schedule** — Light section, tabbed (Day 1 / Day 2), timeline of talks with speaker photo, talk title, time
7. **Gallery / Achievements** — Background image section, grid of images with captions (Previous Year achievement)
8. **Pricing** — White section, 3 pricing cards (Normal $45, Advance $50, Ultimate $60) with feature list and CTA
9. **Sponsors** — Background image section, sponsor logo grid (Gold/Silver tiers)
10. **Blog** — White section, 3 blog preview cards (image, title, excerpt)
11. **Footer** — Dark navy bg, 4-column layout: About text, Navigation links, Newsletter form, InstaFeed

## Gherkin requirements

```gherkin
Feature: Conclave event/conference template

  Background:
    Given the Conclave app is served at its local dev URL

  Scenario: Page loads with all sections
    Then the page displays the navbar
    And the hero banner is visible with event date and countdown
    And the stats bar shows attendee/speaker/sponsor counts
    And the features section shows 3 feature cards
    And the speakers section shows speaker cards
    And the schedule section shows tabbed day views
    And the gallery section shows an image grid
    And the pricing section shows 3 tier cards
    And the sponsors section shows sponsor logos
    And the blog section shows 3 blog preview cards
    And the footer displays About, Navigation, Newsletter, and InstaFeed columns

  Scenario: Navbar navigation
    When the user clicks a nav link
    Then the page scrolls to the corresponding section

  Scenario: Hero countdown
    Then the countdown displays days, hours, minutes, seconds
    And the countdown updates over time

  Scenario: Stats section displays counts
    Then each stat block shows a number and label

  Scenario: Feature cards
    Then each feature card shows an icon, title, and description

  Scenario: Speakers carousel
    When the user clicks the next arrow
    Then the next speaker card is displayed
    When the user clicks the prev arrow
    Then the previous speaker card is displayed

  Scenario: Schedule tabs
    When the user clicks the "Day 2" tab
    Then the Day 2 schedule is displayed
    And the Day 1 schedule is hidden

  Scenario: Pricing cards
    Then each pricing card shows a tier name, price, feature list, and "Buy Now" button

  Scenario: Newsletter form
    When the user enters an email and clicks submit
    Then the form validates the email input
    And an error is shown for invalid email

  Scenario: Footer links
    Then the footer contains a Component Dock link

  Scenario: Responsive layout
    When the viewport is mobile-width
    Then the navbar collapses to a hamburger menu
    And sections stack vertically
    And pricing cards stack vertically
```

## Verification checklist

- [ ] All 11 sections render in correct order
- [ ] Navbar links scroll to sections
- [ ] Hero shows countdown and CTA
- [ ] Stats bar shows numeric counts
- [ ] Feature cards show icon + title + description
- [ ] Speakers carousel navigates forward/back
- [ ] Schedule tabs switch day views
- [ ] Gallery shows image grid
- [ ] Pricing shows 3 tiers with feature lists
- [ ] Sponsors section displays logos
- [ ] Blog shows 3 preview cards
- [ ] Footer has 4 columns + Component Dock link
- [ ] Newsletter form validates email
- [ ] Responsive: hamburger nav on mobile
- [ ] Responsive: single-column stacking on mobile
- [ ] Brand colors match tokens (#3b1d82, #ea0763)
- [ ] Fonts: Oswald for headings, Roboto for body
- [ ] No ColorLib references in app code
