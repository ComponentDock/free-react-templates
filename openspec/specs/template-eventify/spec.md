# Template: Eventify (Conference / Event)

## Purpose

Recreation of the ColorLib **Evento** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page site.

- **Source:** https://colorlib.com/wp/template/evento/
- **Preview:** https://preview.colorlib.com/theme/evento/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/evento-free-template.jpg
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Category:** Conference / Event landing page

## Design tokens

Extracted from `https://preview.colorlib.com/theme/evento/assets/css/main.css`.

| Token | Value | Notes |
|-------|-------|-------|
| **brand-primary** | `#f50136` | Vivid red — buttons, accents, highlights |
| **brand-dark** | `#18181c` | Near-black — dark sections, footer, nav background |
| **text-primary** | `#18181c` | Headings |
| **text-muted** | `#838383` | Body text |
| **bg-light** | `#f7f7f7` | Light section backgrounds |
| **bg-gray** | `#f0f2f6` | Partners section background |
| **overlay-dark** | `rgba(0,0,0,0.4)` | Overlays on parallax/image sections |
| **bg-deep-1** | `#0b031b` | Countdown section dark |
| **bg-deep-2** | `#1f1039` | Dark accent |
| **bg-deep-3** | `#080113` | Darkest variant |
| **btn-radius** | `50px` | Pill-shaped buttons (`btn-rounded`) |
| **font-body** | `"Montserrat", sans-serif` | Body and most text |
| **font-heading-accent** | `Georgia, Verdana, Roboto, serif` | Section titles like "Pricing table" |

### Color palette summary

- **Primary accent:** `#f50136` (vivid red)
- **Dark background:** `#18181c`
- **Muted text:** `#838383`
- **Light surfaces:** `#f7f7f7`, `#f0f2f6`
- **CTA hover:** `#18181c` (darkens on hover)

## Section structure (from live preview DOM)

Order extracted from `https://preview.colorlib.com/theme/evento/`:

1. **Navbar** — Fixed top, logo left, nav links right (Home, Speakers, Events, News, Contact, Search icon). Dark background.
2. **Hero slider** — Full-width carousel (3 slides), dark overlay on image, centered text: "Prepare yourself for the / conference", date line, "Buy Tickets Now" pill button. Dot navigation.
3. **Event info** — 4-column icon boxes: Date, Location, Speakers, Tickets. Each with icon + title + detail text.
4. **Countdown** — Dark background with overlay, centered "Counter until the big event" heading, countdown timer.
5. **About the event** — Two-column text block, then 4 feature cards in a row (9 Speakers, 8 hrs Marathon, Live Broadcast, Early Bird) each with icon, title, blurb, "read more" link.
6. **Our speakers** — 8 speaker cards in a 4×2 grid, each with photo, name, position. Hover reveals info overlay.
7. **Pricing table** — 3 pricing cards (Early Bird $65, Start up $85, Corporate $95), middle one highlighted ("recommended"), each with features list and "Purchase" pill button.
8. **Event calendar** — Table with event rows, each showing image, date, event details (title, time, speaker), "Read More" button, "buy now" link.
9. **Our partners** — Gray background, logo carousel.
10. **Get your tickets** — Parallax/image background section, heading, description text, "buy now" pill button.
11. **Footer** — 3 columns: logo + description + social icons, Instagram image grid (6 images), newsletter subscribe form (email input + "SUBSCRIBE" pill button).
12. **Copyright footer** — Attribution line + bottom nav links.

## Gherkin scenarios

```gherkin
Feature: Eventify — Conference Event Landing Page

  Background:
    Given the user visits the Eventify homepage

  # --- Navbar ---
  Scenario: Navbar displays navigation links
    Then the navbar contains links for "Home", "Speakers", "Events", "News", "Contact"
    And the navbar is fixed at the top of the viewport
    And a search icon is visible in the navbar

  Scenario: Navbar brand logo is visible
    Then the navbar displays a logo on the left side

  # --- Hero Slider ---
  Scenario: Hero slider shows conference headline
    Given the hero section is visible
    Then a heading "Prepare yourself for the" is displayed
    And a large text "conference" is displayed
    And a date line is shown below the heading
    And a "Buy Tickets Now" button is visible

  Scenario: Hero slider has dot navigation
    Given the hero section is visible
    Then 3 dot indicators are displayed
    And the first dot is active by default

  # --- Event Info ---
  Scenario: Event info shows four key details
    Given the event info section is visible
    Then 4 icon boxes are displayed in a row
    And the icon boxes show "DATE", "LOCATION", "SPEAKERS", "TIKETS"
    And each icon box has a descriptive detail line

  # --- Countdown ---
  Scenario: Countdown section displays timer
    Given the countdown section is visible
    Then a heading "Counter until the big event" is shown
    And a countdown timer is displayed with days, hours, minutes, seconds

  # --- About the event ---
  Scenario: About section shows description and features
    Given the about section is visible
    Then a heading "About the event" is shown
    And two columns of descriptive text are displayed
    And 4 feature icon boxes are shown in a row
    And each feature box has an icon, title, description, and "read more" link

  # --- Speakers ---
  Scenario: Speakers section displays speaker grid
    Given the speakers section is visible
    Then a heading "our speakers" is shown
    And 8 speaker cards are displayed in a 4-column grid
    And each speaker card shows a photo, name, and position

  Scenario: Speaker card reveals info on hover
    Given a speaker card is visible
    When the user hovers over the speaker card
    Then an info overlay appears with the speaker's name and position

  # --- Pricing ---
  Scenario: Pricing table shows three tiers
    Given the pricing section is visible
    Then a heading "Pricing table" is shown
    And 3 pricing cards are displayed
    And the cards show "Early Bird" ($65), "Start up" ($85), "Corporate" ($95)
    And one card has a "recommended" highlight badge
    And each card lists feature items and a "Purchase" button

  # --- Event Calendar ---
  Scenario: Calendar shows upcoming events
    Given the event calendar section is visible
    Then a heading "next events calendar" is shown
    And a table displays 3 event rows
    And each row shows an image, date, event details, "Read More" button, and "buy now" link

  # --- Partners ---
  Scenario: Partners section displays brand logos
    Given the partners section is visible
    Then a heading "our partners" is shown
    And a carousel of brand logos is displayed on a gray background

  # --- Get Tickets CTA ---
  Scenario: Get tickets section has CTA
    Given the get tickets section is visible
    Then a heading "GEt your tikets" is shown
    And descriptive text is displayed
    And a "buy now" pill button is visible

  # --- Footer ---
  Scenario: Footer has three columns
    Given the footer is visible
    Then a logo column with social icons is shown
    And an Instagram grid with 6 images is shown
    And a newsletter subscribe form with email input and "SUBSCRIBE" button is shown

  Scenario: Footer copyright contains attribution
    Given the copyright footer is visible
    Then a copyright line with "Made with ❤" attribution is displayed
    And bottom navigation links for Home, Speakers, Events, News, Contact are shown
    And a link to "https://www.componentdock.com/" is present (branded "Component Dock")
```

## Verification checklist

- [ ] Navbar: fixed position, logo + 5 nav links + search icon, dark background
- [ ] Hero: full-width slider with overlay, centered headline, date, CTA pill button, dot navigation
- [ ] Event info: 4-column icon grid (date, location, speakers, tickets)
- [ ] Countdown: dark parallax background, overlay, countdown timer
- [ ] About: heading, 2-col text, 4 feature icon boxes with "read more"
- [ ] Speakers: heading, 8 speaker cards in 4×2 grid with hover info overlay
- [ ] Pricing: heading, 3 pricing cards, one highlighted, feature lists, pill buttons
- [ ] Calendar: heading, table with 3 event rows, images, dates, CTA buttons
  - [ ] Partners: heading, gray bg, logo carousel
- [ ] Get tickets: parallax bg, heading, text, pill CTA button
- [ ] Footer: 3 columns (logo+social, instagram grid, newsletter form)
- [ ] Copyright: attribution line + nav links + ComponentDock link
- [ ] Design tokens: brand red `#f50136`, Montserrat font, pill buttons `border-radius: 50px`
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Placeholder images via `https://picsum.photos/seed/eventify-<n>/<w>/<h>`
