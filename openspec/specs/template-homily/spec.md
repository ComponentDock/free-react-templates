# Template: Homily (Church / Nonprofit)

## Purpose

Recreation of ColorLib **Faith 2** template for church/nonprofit websites.
- **Source slug:** `faith-2` (also `faith2`)
- **Preview URL:** https://preview.colorlib.com/theme/faith2/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/faith2-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens (extracted from preview CSS)

| Token            | Value                                  | Notes                                 |
| ---------------- | -------------------------------------- | ------------------------------------- |
| `--brand`        | `#ac8a74`                              | Warm brown/tan — buttons, accents     |
| `--dark`         | `#1b1b1b`                              | Headings, top bar, overlays           |
| `--body-text`    | `#5a5a5a`                              | Body paragraph text                   |
| `--light-text`   | `#a6a6a6`                              | Secondary/muted text                  |
| `--white`        | `#ffffff`                              | Hero text, button text                |
| `--font-family`  | `"Poppins", sans-serif`                | Google Fonts — load via `index.html`  |
| `--btn-radius`   | `30px`                                 | Pill-shaped buttons                   |
| `--overlay-dark` | `rgba(0, 0, 0, 0.6)`                  | Hero section overlay                  |
| `--overlay-deep` | `rgba(0, 0, 0, 0.91)`                 | Footer overlay                        |

## Section Order (top → bottom)

1. **TopBar** — Dark (#1b1b1b) countdown timer bar: "Next Big Event: X Days HH:MM:SS"
2. **Navbar** — White bg, logo left, nav links center (Home, Pages dropdown, Ministries, Sermons, Contact), search icon, "Send Donations" pill button (#ac8a74). Sticky on scroll.
3. **Hero** — Full-width image carousel (3 slides) with dark overlay. Left-aligned content: date badge (#ac8a74 bg, white text, small rounded), subtitle, large heading, body text. Top-right: floating "Sunday Workshop: 10:30 AM" button. Prev/next arrows + dot indicators.
4. **CTA** — Full-width brown (#ac8a74) banner: headline text left, "Visitors Info" pill button right.
5. **AboutQuote** — White bg, centered layout. Cross/star icon at top, large italic bible quote, description paragraph below.
6. **ChurchActivities** — White bg, two-column layout:
   - Left: "Upcoming Events" — list of 4 events, each with date badge (day/month/year stacked), thumbnail image, title, time/location. "See All Events" button at bottom.
   - Right: "Latest Sermons" — list of 3 sermons, each with thumbnail, title, author, date, inline audio player, "See More" link.
7. **Donate** — Dark image overlay bg, carousel of donation cards (image + title + subtitle + "Donate" pill button). 4 cause cards.
8. **Blog** — White bg, "Latest News" heading with cross icon. 3-column grid of blog cards: thumbnail with floating date badge, title, excerpt, "Read More" link.
9. **Footer** — Dark image overlay bg, 4-column layout:
   - Col 1: Logo + social icons (Google+, Pinterest, Facebook, Twitter) + copyright
   - Col 2: Contact info (Address, Phone, Email)
   - Col 3: Useful Links list
   - Col 4: "Why Choose Us?" text + "Sunday Workshop" button
10. **FooterBottom** — Copyright bar (not shown explicitly in original but implied)

## Gherkin Requirements

```gherkin
Feature: Homily Church Template
  As a church visitor
  I want to find service times, events, sermons, and donation options
  So that I can engage with the community

  Background:
    Given I visit the Homily homepage

  # ── TopBar ──
  Scenario: Countdown timer displays
    Then I see a dark top bar with "Next Big Event" label
    And I see a countdown showing days, hours, minutes, seconds

  # ── Navbar ──
  Scenario: Navigation links present
    Then I see links: Home, Ministries, Sermons, Contact
    And I see a Pages dropdown menu
    And I see a search icon
    And I see a "Send Donations" button with brand color background

  Scenario: Navbar becomes sticky on scroll
    When I scroll down past the hero
    Then the navbar remains fixed at the top of the viewport

  # ── Hero ──
  Scenario: Hero carousel shows slides
    Then I see a large hero image with dark overlay
    And I see a date badge, subtitle, heading, and description text
    And I see carousel navigation arrows and dot indicators

  Scenario: Workshop button visible
    Then I see a "Sunday Workshop: 10:30 AM" button in the hero area

  Scenario: Carousel auto-advances
    When I wait for the slide interval
    Then the hero slide changes automatically

  # ── CTA ──
  Scenario: CTA banner displays
    Then I see a brown banner with text on the left
    And I see a "Visitors Info" button on the right

  # ── About Quote ──
  Scenario: Bible quote section visible
    Then I see a cross/star icon centered
    And I see a large quoted bible verse
    And I see a descriptive paragraph below the quote

  # ── Church Activities ──
  Scenario: Upcoming events listed
    Then I see "Upcoming Events" heading
    And I see 4 events each with date badge, thumbnail, title, and time

  Scenario: See All Events button present
    Then I see a "See All Events" button below the events list

  Scenario: Latest sermons listed
    Then I see "Latest Sermons" heading
    And I see 3 sermons each with thumbnail, title, author, and date
    And each sermon has an audio player

  # ── Donate ──
  Scenario: Donation cards displayed
    Then I see "Donate to our Charities" heading
    And I see a carousel of donation cause cards
    And each card has an image, title, subtitle, and "Donate" button

  Scenario: Donate carousel navigable
    When I click the next arrow
    Then the donate carousel advances to the next card

  # ── Blog ──
  Scenario: Blog posts shown
    Then I see "Latest News" heading
    And I see 3 blog cards in a 3-column grid
    And each card has a thumbnail with date badge, title, excerpt, and "Read More" link

  # ── Footer ──
  Scenario: Footer contains contact info
    Then I see a dark footer with logo and social icons
    And I see contact details: address, phone, email
    And I see useful links list
    And I see a "Why Choose Us?" section with a button
    And I see a copyright notice linking to Component Dock
```

## Verification Checklist

- [ ] TopBar countdown timer renders and counts down
- [ ] Navbar links match original (Home, Pages, Ministries, Sermons, Contact)
- [ ] Navbar is sticky on scroll
- [ ] "Send Donations" button uses brand color (#ac8a74) with pill radius
- [ ] Hero carousel has 3 slides with prev/next arrows and dot indicators
- [ ] Hero overlay, date badge, heading, and subtitle match design
- [ ] CTA banner is full-width brown with text + button
- [ ] About section has centered cross icon + quote + description
- [ ] Church Activities: 2-column layout, events left, sermons right
- [ ] Events have stacked date badges (day/month/year) + thumbnails
- [ ] Sermons have audio players
- [ ] Donate section: dark overlay bg, carousel of cause cards
- [ ] Blog: 3-column card grid with date badges on thumbnails
- [ ] Footer: 4 columns, dark overlay bg, social icons, contact, links, copyright
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] `packages/ui` components reused where applicable (Button, cn)
- [ ] 100% test coverage on new components
- [ ] Spec folder at `openspec/specs/template-homily/spec.md`
- [ ] Docs at `docs/templates/homily/`
