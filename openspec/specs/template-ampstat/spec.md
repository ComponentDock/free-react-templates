# Template: Ampstat (Music)

## Purpose

Recreation of ColorLib **Music** template
(preview: https://preview.colorlib.com/theme/music/,
source: https://colorlib.com/wp/template/music/).

Fullscreen musician/band website with ticket booking, audio player, tour
dates, app download promo, featured albums, news blog, and newsletter.
Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript.

## Design tokens (extracted from preview CSS)

| Token | Value |
|-------|-------|
| Primary brand green | `#2ac275` |
| Dark purple | `#3b125d` |
| Blue accent | `#2457d7` |
| Yellow accent | `#cbdc0b` / `#eeff2d` |
| Pink accent | `#e830fe` |
| Red accent | `#ff1a4b` |
| Light background | `#eef2f6` |
| Text dark | `#000000` / `#2a2a2a` |
| Text muted | `#6d6d6d` / `#a5a5a5` |
| Font family | `'Josefin Sans', sans-serif` |
| Button border-radius | `22px` (pill shape) |
| Card border-radius | `15px` |
| Button gradients | `linear-gradient(to right, #2ac275, #cbdc0b, #2ac275)` |
| Overlay | `rgba(0,0,0,0.66)` |

## Section structure (order from preview)

1. **Header** — Logo (equalizer bars icon + "music" text), horizontal nav
   (Home, Artists, Download Music, News, Contact), login/register links,
   hamburger menu for mobile.
2. **Home Slider** — Full-screen carousel with background image, centered
   headline "your music.", ticket booking form (event dropdown + ticket
   input + CTA button), social sidebar (follow label + icon row), scroll
   down indicator.
3. **Song** — Parallax background, "Song of the Week" audio player with
   album art, play/stop controls, progress bar, artist name, volume
   controls.
4. **Tours** — Two-column layout: left side has promotional card with
   background image, overlay frame, year/title/subtitle, CTA button;
   right side has "Tour Dates" list with date/venue/location/CTA per row,
   "See All Tour Dates" link.
5. **App** — Two-column: app image left, "Get Your Music Right Now!"
   heading + description + App Store / Google Play badge links right.
6. **Featured Albums** — Centered title, playlist player with album list.
7. **News** — "Latest News" heading, 3-column grid of news cards (image +
   date + title + excerpt). Second card has reversed image/text order.
8. **Newsletter** — "Subscribe & Follow" heading + text left, email input +
   subscribe button right.
9. **Footer** — Background image overlay, logo (equalizer bars + "music"),
   social icon row, copyright bar.

## Gherkin requirements

```gherkin
Feature: Ampstat musician website

  Background:
    Given the site is loaded at the root URL

  Scenario: Header displays logo and navigation
    Then the logo shows equalizer-bar icon and "music" text
    And the nav links are "Home", "Artists", "Download Music", "News", "Contact"
    And login/register links are visible on desktop
    And a hamburger menu icon appears on mobile

  Scenario: Home slider renders fullscreen hero
    Given the user is on the home page
    Then a fullscreen carousel shows a background image
    And the heading reads "your music."
    And a ticket form has an event dropdown and ticket input
    And a "get your tickets" CTA button is present
    And social icons (Pinterest, Facebook, Twitter, Dribbble, Behance) are displayed
    And a scroll-down indicator is visible

  Scenario: Song of the Week player
    Given the user scrolls to the Song section
    Then a parallax background is displayed
    And the heading reads "song of the week"
    And album art image is shown
    And play and stop buttons are rendered
    And a progress bar with current time and duration is visible
    And an artist name label is displayed
    And volume controls (mute + slider) are present

  Scenario: Tour Dates section
    Given the user scrolls to the Tours section
    Then a promotional card shows background image with year, title, subtitle
    And a "get your tickets" CTA button appears on the card
    And a list of tour dates shows date, venue name, and location per row
    And each row has a "get your tickets" button
    And a "See All Tour Dates" link is present

  Scenario: App download section
    Given the user scrolls to the App section
    Then an app screenshot image is displayed
    And the heading reads "Get Your Music Right Now!"
    And a description paragraph is shown
    And App Store and Google Play badge links are present

  Scenario: Featured Albums section
    Given the user scrolls to the Featured section
    Then the heading reads "Featured Albums"
    And an album playlist is rendered

  Scenario: News section
    Given the user scrolls to the News section
    Then the heading reads "Latest News"
    And 3 news cards are displayed in a grid
    And each card shows an image, date, title, and excerpt
    And the second card has reversed image/text layout

  Scenario: Newsletter subscription
    Given the user scrolls to the Newsletter section
    Then the heading reads "Subscribe & Follow"
    And an email input field is present
    And a "subscribe" button is present

  Scenario: Footer
    Given the user scrolls to the footer
    Then the footer shows a background image with overlay
    And the logo (equalizer bars + "music") is displayed
    And social icons are shown
    And a copyright line is present
    And a Component Dock link is present
```

## Verification checklist

- [ ] Header renders with logo, nav links, and mobile hamburger
- [ ] Home slider is fullscreen with background image and ticket form
- [ ] Social sidebar shows follow label and icon row
- [ ] Scroll-down indicator works
- [ ] Song player has play/stop, progress bar, volume controls
- [ ] Tours section has promo card and date list
- [ ] App section has image, heading, description, store badges
- [ ] Featured Albums section renders
- [ ] News grid shows 3 cards with correct layout
- [ ] Newsletter form has email input and subscribe button
- [ ] Footer has background image, logo, social icons, copyright
- [ ] Footer links to Component Dock
- [ ] All design tokens (green #2ac275, purple #3b125d, Josefin Sans, pill buttons) applied
- [ ] Responsive layout works (mobile hamburger, stacked columns)
- [ ] No ColorLib references in app code
