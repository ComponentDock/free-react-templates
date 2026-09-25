# Template: Onair (Radio Station)

## Purpose

Recreation of the ColorLib "Eighty8" radio station template as a React 19 + Vite
+ Tailwind CSS 4 + TypeScript single-page app.

- **Source slug:** `eighty8`
- **Source URL:** https://colorlib.com/wp/template/eighty8/
- **Preview URL:** https://preview.colorlib.com/theme/eighty8/
- **New app name:** `onair` (apps/onair, @free-react-templates/onair)
- **Package:** `@free-react-templates/onair`
- **Deploy target:** https://onair.free.componentdock.com

## Design Tokens (from CSS analysis of preview)

| Token             | Value         | Notes                                         |
| ----------------- | ------------- | --------------------------------------------- |
| `--brand`         | `#ffe400`     | Bright yellow — accent, buttons, highlights   |
| `--bg-dark`       | `#191919`     | Primary section backgrounds                   |
| `--bg-darker`     | `#080808`     | Hero/overlay background                       |
| `--bg-card`       | `#212121`     | Card/item backgrounds on dark sections         |
| `--text-light`    | `#ffffff`     | Primary text on dark backgrounds              |
| `--text-dark`     | `#1b1b1b`     | Text on light/yellow backgrounds              |
| `--text-muted`    | `#7e7e7e`     | Secondary/meta text                           |
| `--font-family`   | `Roboto`      | Google Fonts — 400, 500, 700 weights          |
| `--btn-radius`    | `5px`         | `.site-btn` border-radius                     |
| `--btn-radius-lg` | `7px`         | Tab-style buttons                             |
| `--arrow-radius`  | `50%`         | Slider navigation arrows (circular)           |

**Button variants:**
- Default (`.site-btn`): yellow bg (#ffe400), dark text, border-radius 5px, font-weight 700, 18px
- Dark (`.sb-dark`): black bg, white text
- Light (`.sb-light`): white bg, dark text
- Line (`.sb-line`): transparent bg, 2px solid yellow border, yellow text

## Section Structure (from live preview DOM)

1. **Navbar** — Logo + nav links (Home, About, Charts, DJs, Blog, Contact) + social icons (Twitter, SoundCloud, Instagram, Google+, Facebook, YouTube). Dark background, sticky.
2. **Hero Section** — Full-width image slider/carousel with city names (Berlin, Bucharest, London) as locations, overlay text showing "UP NEXT" + DJ name/track. Yellow circular navigation arrows on sides. Dark background (#080808).
3. **Promotion Section** — Three equal promo cards side by side: "Our DJs", "Live Streams", "Events". Each with an icon, heading, short description, and "Learn More" link. Yellow accent on hover/active states.
4. **Latest Podcast Section** — Single featured podcast with heading "Latest Podcast", podcast title (e.g. "Hernan Cataneo - Residence #376"), and "LISTEN LIVE" yellow button. Dark background (#191919).
5. **Charts Section** — Music charts list: numbered items (1-5) with song name and artist. Tab-style filter buttons at top. Dark background.
6. **Footer Top** — Four-column grid: Locations (list of cities), Top Shows (numbered list with show names), Blog (2 article cards with title + "Continue Reading"), Contact (address, phone, email).
7. **Footer Bottom** — Copyright bar with "Made with ❤" and attribution.

## Gherkin Requirements

### Feature: Navbar

  Scenario: Logo and navigation links are visible
    Given the user loads the page
    Then the logo is displayed in the navbar
    And navigation links "Home", "About", "Charts", "DJs", "Blog", "Contact" are visible

  Scenario: Social media icons are present
    Given the user loads the page
    Then social media icons (Twitter, SoundCloud, Instagram, Facebook, YouTube) are displayed in the navbar

### Feature: Hero Section

  Scenario: Hero slider displays city and track info
    Given the user loads the page
    Then the hero section shows a full-width background image
    And a city name is displayed (e.g. "Berlin")
    And "UP NEXT" label with a DJ/track name is shown

  Scenario: Slider navigation arrows work
    Given the hero slider is visible
    When the user clicks the right arrow
    Then the next slide is displayed
    When the user clicks the left arrow
    Then the previous slide is displayed

### Feature: Promotion Section

  Scenario: Three promo cards are displayed
    Given the user loads the page
    Then three promo cards are shown: "Our DJs", "Live Streams", "Events"
    And each card has an icon, heading, and description text

### Feature: Latest Podcast

  Scenario: Featured podcast is shown
    Given the user loads the page
    Then the "Latest Podcast" heading is visible
    And a podcast title is displayed
    And a "LISTEN LIVE" button is visible with yellow styling

### Feature: Charts Section

  Scenario: Charts list displays numbered items
    Given the user loads the page
    Then the "Charts" heading is visible
    And numbered chart items (1-5) are displayed with song name and artist

### Feature: Footer

  Scenario: Footer top has four columns
    Given the user scrolls to the footer
    Then "Locations", "Top Shows", "Blog", "Contact" columns are visible
    And each column contains the relevant content items

  Scenario: Footer bottom shows copyright
    Given the user scrolls to the footer bottom
    Then a copyright notice is displayed with "Component Dock" link

### Feature: Responsive Design

  Scenario: Mobile view stacks sections vertically
    Given the user views the page on a mobile viewport
    Then all sections stack vertically
    And the navbar collapses to a hamburger menu

## Verification Checklist

- [ ] All 7 sections rendered in correct order
- [ ] Design tokens match: brand yellow #ffe400, dark bg #191919, Roboto font
- [ ] Hero slider cycles through slides with city + track info
- [ ] Navigation arrows on hero slider are circular with yellow border
- [ ] Promotion cards display icons + headings + descriptions
- [ ] Podcast section shows featured episode with "LISTEN LIVE" button
- [ ] Charts section shows numbered list of tracks
- [ ] Footer has four-column layout (Locations, Top Shows, Blog, Contact)
- [ ] Footer bottom links to Component Dock
- [ ] No ColorLib references in app code (only in spec/TEMPLATES.md)
- [ ] Responsive: mobile hamburger menu, stacked columns
- [ ] All images use picsum.photos placeholders
- [ ] 100% test coverage (lines, functions, branches, statements)
