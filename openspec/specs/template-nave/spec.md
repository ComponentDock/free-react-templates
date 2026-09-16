# Template: Nave (Church Ministry)

## Purpose

Recreation of ColorLib's **Advent** template (church/religious ministry site).

- **ColorLib source:** https://colorlib.com/wp/template/advent/
- **Preview URL:** https://preview.colorlib.com/theme/advent/
- **New name:** `nave` (the central part of a church building)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/advent-free-template.jpg

## Design tokens (from reference CSS + preview)

| Token | Value |
|---|---|
| Brand color (primary) | `#ffc107` (gold/amber) |
| Button accent | `#ffce3a` (lighter gold) |
| Dark background | `#262626` |
| Body font | `"Open Sans", Arial, sans-serif` |
| Heading font | `"Playfair Display", Times, serif` |
| Button border-radius | `0` (sharp/square) |
| Body text on dark | `#b3b3b3` |
| Body text on light | `#000000` |
| Heading color | `#ffffff` (on dark bg) |
| Section heading badge | `#ffc107` bg, white text |
| Countdown box bg | `#ffc107` |
| Social icon color | `rgba(255,255,255,0.5)` |
| Circular avatar | `border-radius: 50%` |

**Note:** The template uses both `#ffc107` and `#ffce3a` for the gold accent. Standardize on `#ffc107` as the single brand token in `@theme`.

## Section structure (from preview HTML)

1. **Navbar** — transparent navbar over hero, "NAVE" logo (uppercase, letterspaced), links: Home, Who We Are, Ministries (dropdown), Events, Contact. Dark bg on scroll.
2. **Hero Slider** — full-width parallax background images (worship scenes with warm amber tones), centered text ("Arise, Shine" / "Explore Our Weekend Services"), subtitle, white outlined "EXPLORE NOW" button, owl-carousel dots.
3. **Upcoming Events** — dark bg (#262626), left side: yellow badge "UPCOMING EVENTS", heading quote, event meta (date/location/pastor), right side: countdown timer (weeks/days/hr/min/sec) in yellow boxes with white text.
4. **Worship Time** — split layout (text left, image right on md+), heading "Worship Time", service schedule/details.
5. **Listen Our Sermons** — centered heading, 3 sermon cards in a row, each with circular avatar image, sermon title, play button, audio player (3 audio elements).
6. **Events & Ministries** — 3-column grid of event/ministry cards with images, titles, short descriptions.
7. **Footer** — dark bg, 3-column layout: "About The Advent" (logo + text + social icons), Quick Links, Contact Info.

## Gherkin requirements

### Navbar
```gherkin
Feature: Navbar
  Scenario: Renders navigation links
    Given the page loads
    Then a navigation bar is visible
    And it contains links: Home, Who We Are, Ministries, Events, Contact
    And the brand name "NAVE" is displayed

  Scenario: Ministries dropdown
    Given the user hovers over "Ministries"
    Then a dropdown menu appears
    And it contains ministry sub-links

  Scenario: Mobile hamburger menu
    Given the viewport is mobile-width
    Then the navbar collapses to a hamburger toggle
    And tapping the toggle shows the menu
```

### Hero Slider
```gherkin
Feature: Hero Slider
  Scenario: Renders hero section
    Given the page loads
    Then a full-width hero section is visible
    And it displays a heading text
    And it displays a subtitle text
    And an "Explore Now" button is shown

  Scenario: Button styling
    Given the hero renders
    Then the button has a white border outline
    And the button has square corners (no border-radius)
    And the button text is uppercase

  Scenario: Carousel navigation
    Given the hero renders
    Then carousel dot indicators are shown
    And clicking a dot navigates to that slide
```

### Upcoming Events
```gherkin
Feature: Upcoming Events
  Scenario: Renders event highlight
    Given the page loads
    Then an "Upcoming Events" section is visible
    And it has a yellow badge label
    And an event heading/quote is displayed
    And event metadata (date, location, pastor) is shown

  Scenario: Countdown timer
    Given the upcoming events section renders
    Then a countdown timer is displayed
    And it shows weeks, days, hours, minutes, seconds
    And each countdown unit has a gold (#ffc107) background
```

### Worship Time
```gherkin
Feature: Worship Time
  Scenario: Renders worship section
    Given the page loads
    Then a "Worship Time" section is visible
    And it uses a split layout (text + image)

  Scenario: Responsive layout
    Given the viewport is desktop-width
    Then text appears on the left and image on the right
    Given the viewport is mobile-width
    Then the text and image stack vertically
```

### Sermons
```gherkin
Feature: Sermons
  Scenario: Renders sermon cards
    Given the page loads
    Then a "Listen Our Sermons" section is visible
    And 3 sermon cards are displayed
    And each card has a circular avatar image
    And each card has a title and play button

  Scenario: Audio playback
    Given a sermon card is rendered
    Then clicking play starts audio playback
    And clicking pause stops playback
```

### Events & Ministries
```gherkin
Feature: Events & Ministries
  Scenario: Renders ministry cards
    Given the page loads
    Then an "Events & Ministries" section is visible
    And 3 cards are displayed in a grid
    And each card has an image, title, and description
```

### Footer
```gherkin
Feature: Footer
  Scenario: Renders footer
    Given the page loads
    Then a footer section is visible with dark background
    And it contains an "About" column with logo and text
    And it contains a "Quick Links" column
    And it contains a "Contact Info" column
    And social media icon links are shown

  Scenario: Component Dock link
    Given the footer renders
    Then a link to "https://www.componentdock.com/" is present
    And the link text mentions "Component Dock"
```

## Verification checklist

- [ ] Navbar: transparent over hero, collapses on mobile, dropdown for Ministries
- [ ] Hero: parallax background, centered text, white outlined square button, carousel dots
- [ ] Upcoming Events: dark bg, yellow badge, event meta, countdown timer with gold boxes
- [ ] Worship Time: split layout (text/image), responsive stacking
- [ ] Sermons: 3 cards with circular avatars, play buttons, audio players
- [ ] Events & Ministries: 3-column grid cards with images and descriptions
- [ ] Footer: 3-column dark bg, About/Quick Links/Contact, social icons, Component Dock link
- [ ] Brand color #ffc107 used consistently (gold accent throughout)
- [ ] Heading font: Playfair Display (serif); body: Open Sans (sans-serif)
- [ ] Square button corners (border-radius: 0) on primary CTA buttons
- [ ] Placeholder images via picsum.photos/seed/nave-<n>
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] Footer links to componentdock.com
- [ ] Public/CNAME: nave.free.componentdock.com
- [ ] Package name: @free-react-templates/nave
