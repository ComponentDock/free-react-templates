# Template: Gatherly (Event/Conference)

## Purpose

Recreation of ColorLib "Agenda" event/conference template.
- **Source:** https://colorlib.com/wp/template/agenda/
- **Preview:** https://preview.colorlib.com/theme/agenda/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from the live preview stylesheet (`style.css`):

| Token | Value | Usage |
| --- | --- | --- |
| Brand gradient start | `#AA00FF` (vivid purple) | Button gradient, CTA backgrounds |
| Brand gradient end | `#581687` (deep plum) | Button gradient, CTA backgrounds |
| Brand solid | `#9a24c1` (purple) | Button border, dark-purple variant |
| Dark primary | `#232127` | Button text, dark backgrounds |
| Dark secondary | `#231e23` | Dark button backgrounds |
| Dark accent | `#08011e` | Footer, dark sections |
| Light background | `#f3f8f9` | Section alternating backgrounds |
| White | `#fff` | Primary background |
| Body text | `#2f2f2f` | Paragraph/body text |
| Font family | Calibri (sans-serif) | Body, headings |
| Button radius | 50px (pill) | All `.btn` elements |
| Card radius | 6px | Event cards |
| Image radius | 10px | Featured event images |
| Avatar radius | 50% | Rating badges |

**Gradient class:** `.gradient-bg` — linear-gradient top-to-bottom from `#AA00FF` to `#581687`.

## Visual design notes

Dark-themed event/conference site with rich purple gradient accents on a near-black background. The hero is a full-width image slider with countdown timer. Featured events use a masonry-style grid with overlapping card positioning. Upcoming events are 3-column cards with rating badges. A regional events section uses a carousel with hover overlay links. Partners logo strip below. Newsletter section and footer round out the page.

## Section structure (in page order)

1. **Navbar** — Logo left, nav links (Home, About us, Events, News, Contact), "Buy Tickets" button right
2. **Hero** — Full-width image slider with countdown timer (Days/Hours/Minutes/Seconds), headline, CTA "Order here"
3. **Info** — Logo left, heading "What is Agenda and why choose our services?", description, two CTAs ("Read More" gradient, "Register Now" dark)
4. **FeaturedEvents** — Masonry grid of event cards (title + date), some half-width, with featured images
5. **NextEvents** — Section header + 3-column cards with image, rating badge, title, date, description, "Buy Tickets" link
6. **RegionalEvents** — Location dropdown, horizontal carousel of event cards with hover overlay, partners logo strip
7. **Newsletter** — Heading, name + email inputs, "Subscribe" gradient button
8. **Footer** — Logo, nav links, social icons (Pinterest, LinkedIn, Instagram, Facebook, Twitter), Component Dock link

## Gherkin requirements

### Navbar
- Scenario: Navbar displays logo, nav links, and Buy Tickets button
  - Given the user is on the Gatherly page
  - Then a navigation bar is visible with logo on the left
  - And links "Home", "About us", "Events", "News", "Contact" are shown
  - And a "Buy Tickets" button is visible on the right

- Scenario: Navbar is sticky/overlaying the hero
  - Given the user scrolls down the page
  - Then the header bar remains visible (positioned absolute over hero)

### Hero
- Scenario: Hero slider displays with countdown
  - Given the user views the hero section
  - Then a countdown timer shows Days, Hours, Minutes, Seconds
  - And a headline "We have the best events. Get your tickets now!" is displayed
  - And an "Order here" gradient button is visible

- Scenario: Hero has prev/next navigation arrows
  - Given the user is on the hero slider
  - Then prev and next arrow buttons are present for slider navigation

### Info
- Scenario: Info section shows logo and description
  - Given the user scrolls to the info section
  - Then a logo image is displayed on the left
  - And a heading "What is Gatherly and why choose our services?" is shown
  - And a description paragraph is visible

- Scenario: Info section has two CTA buttons
  - Given the user is in the info section
  - Then a "Read More" gradient button is visible
  - And a "Register Now" dark button is visible

### FeaturedEvents
- Scenario: Featured events grid displays event cards
  - Given the user scrolls to the featured events section
  - Then multiple event cards are shown in a masonry-like grid
  - Each card shows an image, event title, and posted date

### NextEvents
- Scenario: Next events section shows 3-column cards
  - Given the user scrolls to the next events section
  - Then a heading "Our next events" is displayed
  - And three event cards are shown in a row
  - Each card has an image, rating badge, title, date, description, and "Buy Tickets" link

- Scenario: Rating badge displays on each event card
  - Given the user views a next event card
  - Then a circular rating badge with a numeric score is displayed

### RegionalEvents
- Scenario: Regional events shows location dropdown and carousel
  - Given the user scrolls to the regional events section
  - Then a heading "Events in New York" is displayed
  - And a location dropdown is visible
  - And a horizontal carousel of event cards is shown

- Scenario: Partners logos strip is displayed
  - Given the user is in the regional events section
  - Then a "Partners" heading is shown
  - And partner logo images are displayed in a row

### Newsletter
- Scenario: Newsletter section shows subscription form
  - Given the user scrolls to the newsletter section
  - Then a heading "Subscribe to our newsletter" is displayed
  - And name and email input fields are visible
  - And a "Subscribe" gradient button is shown

### Footer
- Scenario: Footer displays logo, nav, social, and Component Dock link
  - Given the user scrolls to the footer
  - Then the logo is displayed
  - And nav links (Home, About us, Events, News, Contact) are shown
  - And social media icons (Pinterest, LinkedIn, Instagram, Facebook, Twitter) are visible
  - And a link to https://www.componentdock.com/ labeled "Component Dock" is present

## Verification checklist

- [ ] All 8 sections implemented in correct page order
- [ ] Design tokens applied: purple gradient buttons, Calibri font, dark theme
- [ ] Navbar with logo, 5 nav links, Buy Tickets button
- [ ] Hero with countdown timer and slider navigation
- [ ] Info section with 2-column layout and 2 CTA buttons
- [ ] Featured events masonry grid
- [ ] Next events 3-column cards with rating badges
- [ ] Regional events carousel with location dropdown
- [ ] Partners logo strip
- [ ] Newsletter subscription form
- [ ] Footer with logo, nav, social icons, Component Dock link
- [ ] 100% test coverage
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] App name "gatherly" — no collision with existing apps
