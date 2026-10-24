# Template: Eventide (Event/Conference)
<!-- prep-status: shipped-as=lineup -->
> **SHIPPED-UNDER** — the ColorLib `agenda` design this prep describes already
> ships as `apps/lineup` (<https://lineup.free.componentdock.com>).
> Do not scaffold `apps/eventide`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-lineup/spec.md`.

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
| Surface (measured) | `#9a28d7` | paints it ×28 — `background` on `.back-to-top`; style.css (46,724 B, sha256 ec1837ae6adb) · <https://preview.colorlib.com/theme/agenda/> |

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

## Requirements

### Navbar

#### Scenario: Navbar

- Scenario: Navbar displays logo, nav links, and Buy Tickets button
- **GIVEN** the user is on the Eventide page
- **THEN** a navigation bar is visible with logo on the left
- **AND** links "Home", "About us", "Events", "News", "Contact" are shown
- **AND** a "Buy Tickets" button is visible on the right
- Scenario: Navbar is sticky/overlaying the hero
- **GIVEN** the user scrolls down the page
- **THEN** the header bar remains visible (positioned absolute over hero)

### Hero

#### Scenario: Hero

- Scenario: Hero slider displays with countdown
- **GIVEN** the user views the hero section
- **THEN** a countdown timer shows Days, Hours, Minutes, Seconds
- **AND** a headline "We have the best events. Get your tickets now!" is displayed
- **AND** an "Order here" gradient button is visible
- Scenario: Hero has prev/next navigation arrows
- **GIVEN** the user is on the hero slider
- **THEN** prev and next arrow buttons are present for slider navigation

### Info

#### Scenario: Info

- Scenario: Info section shows logo and description
- **GIVEN** the user scrolls to the info section
- **THEN** a logo image is displayed on the left
- **AND** a heading "What is Eventide and why choose our services?" is shown
- **AND** a description paragraph is visible
- Scenario: Info section has two CTA buttons
- **GIVEN** the user is in the info section
- **THEN** a "Read More" gradient button is visible
- **AND** a "Register Now" dark button is visible

### FeaturedEvents

#### Scenario: FeaturedEvents

- Scenario: Featured events grid displays event cards
- **GIVEN** the user scrolls to the featured events section
- **THEN** multiple event cards are shown in a masonry-like grid
  - Each card shows an image, event title, and posted date

### NextEvents

#### Scenario: NextEvents

- Scenario: Next events section shows 3-column cards
- **GIVEN** the user scrolls to the next events section
- **THEN** a heading "Our next events" is displayed
- **AND** three event cards are shown in a row
  - Each card has an image, rating badge, title, date, description, and "Buy Tickets" link
- Scenario: Rating badge displays on each event card
- **GIVEN** the user views a next event card
- **THEN** a circular rating badge with a numeric score is displayed

### RegionalEvents

#### Scenario: RegionalEvents

- Scenario: Regional events shows location dropdown and carousel
- **GIVEN** the user scrolls to the regional events section
- **THEN** a heading "Events in New York" is displayed
- **AND** a location dropdown is visible
- **AND** a horizontal carousel of event cards is shown
- Scenario: Partners logos strip is displayed
- **GIVEN** the user is in the regional events section
- **THEN** a "Partners" heading is shown
- **AND** partner logo images are displayed in a row

### Newsletter

#### Scenario: Newsletter

- Scenario: Newsletter section shows subscription form
- **GIVEN** the user scrolls to the newsletter section
- **THEN** a heading "Subscribe to our newsletter" is displayed
- **AND** name and email input fields are visible
- **AND** a "Subscribe" gradient button is shown

### Footer

#### Scenario: Footer

- Scenario: Footer displays logo, nav, social, and Component Dock link
- **GIVEN** the user scrolls to the footer
- **THEN** the logo is displayed
- **AND** nav links (Home, About us, Events, News, Contact) are shown
- **AND** social media icons (Pinterest, LinkedIn, Instagram, Facebook, Twitter) are visible
- **AND** a link to https://www.componentdock.com/ labeled "Component Dock" is present

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
- [ ] App name "eventide" — no collision with existing apps
