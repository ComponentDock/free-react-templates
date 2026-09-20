# Template: Festivora (Concert / Event)

## Purpose

Recreation of ColorLib **Evento** — a conference/event landing page template.

- **ColorLib source:** https://colorlib.com/wp/template/evento/
- **Live preview:** https://preview.colorlib.com/theme/evento/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/evento-free-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name:** `festivora` (never reuse the source name "evento")

## Design Tokens (extracted from live preview CSS)

| Token | Value | Notes |
|-------|-------|-------|
| Brand / Primary | `#f50136` | Red — buttons, accent lines, social hover, countdown |
| Text headings | `#18181c` | Very dark charcoal |
| Body text | `#838383` | Medium gray |
| Background (light) | `#ffffff` / `#f7f7f7` | White sections / light gray `.bg-gray` |
| Background (dark footer) | `#18181c` | Dark charcoal footer |
| Copyright bg | `#080113` | Very dark purple-black |
| Social icon bg | `#1f1039` | Dark purple |
| Overlay | `rgba(0, 0, 0, 0.2)` | Hero slider overlay |
| Overlay (bg-img) | `rgba(0, 0, 0, 0.4)` | Countdown/tickets bg images |
| Countdown box | `#F44336` | Material Design red, white text |
| Font — All | `"Montserrat"` | sans-serif, weights 400/500/700/900 |
| Button primary | `#f50136` bg, `#fff` text | Rounded (50px), uppercase, 12px font |
| Button hover | `#18181c` bg, `#fff` text | Dark charcoal on hover |
| Section title accent | `#f50136` | 3px red top-border line on `.title` |
| Section title style | Uppercase, 36px | With red top-border pseudo-element |
| Pricing active | `#f50136` highlight badge | "recommended" label on active card |

## Section Structure (in order)

1. **Navbar** — Fixed-top dark header. Logo left, nav links right (Home, Speakers, Events, News, Contact), search icon. Collapses to hamburger on mobile.
2. **Hero Slider** — Full-viewport carousel (3 slides, dots navigation). Each slide: bg image with dark overlay (rgba(0,0,0,0.2)), centered content: heading "Prepare yourself for the", large accent text "conference", date "12-14 February 2018 - Los Angeles, CA.", "Buy Tickets Now" button (rounded red). Height 100vh, min 600px.
3. **Event Info** — 4-column grid of info cards. Each: icon (calendar, location, person, pricetag from ionicons), label (DATE, LOCATION, SPEAKERS, TICKETS), value text. Light background.
4. **Countdown** — Background image with dark overlay (rgba(0,0,0,0.4)). Centered heading "Counter until the big event". Countdown timer with 4 red boxes (days/hours/minutes/seconds) using `#F44336` bg, white text.
5. **About the Event** — Centered section title "About the event" with red top-border accent. Two-column description text (lorem ipsum).
6. **Event Features** — 4-column grid of feature cards. Each: icon (mic, rocket, bullhorn, clock from lnr icons), title ("9 Speakers", "8 hrs Marathon", "Live Broadcast", "Early Bird"), description, "read more" link.
7. **Speakers** — Section title "Our Speakers". 4-column grid of 8 speaker cards. Each: portrait image, hover-reveal info box (name + position). Images are full-width within card.
8. **Pricing Table** — Section title "Pricing Table". 3-column pricing cards. Each: optional "recommended" badge (active card), plan name, subtitle, price with dollar sign, feature list, "Purchase" button. Active card has `#f50136` highlight.
9. **Event Calendar** — Table-style layout. Header row "Next Events Calendar" with calendar icon. 3 event rows, each: event image, date (day + month), event info (title, time, speaker), "Read More" button, "buy now" link.
10. **Partners** — Light gray bg (`.bg-gray`). Section title "Our Partners". Owl-carousel of 5 partner logos (opacity 0.3, hover to 1).
11. **Get Tickets** — Background image with overlay. White heading "Get your tickets", description text, "buy now" button (rounded red).
12. **Footer** — Dark bg (`#18181c`). 3-column layout: logo + description + social icons (Pinterest, Facebook, Twitter, Dribbble, Instagram as rounded circles), Instagram image grid (6 images), Newsletter form (email input + "SUBSCRIBE" button).
13. **Copyright Footer** — Very dark bg (`#080113`). Copyright text left, footer nav links right (Home, Speakers, Events, News, Contact). Component Dock link added per convention.

## Gherkin Requirements

```gherkin
Feature: Festivora conference event template

  Background:
    Given the template is loaded at the root URL

  Scenario: Navbar displays correctly
    Then the logo is visible
    And navigation links "Home", "Speakers", "Events", "News", "Contact" are present
    And a search icon is visible

  Scenario: Hero slider renders
    Then a full-viewport image slider with 3 slides is displayed
    And dot navigation indicators are present
    And each slide shows "Prepare yourself for the" heading
    And each slide shows large "conference" text
    And a date "12-14 February 2018" is visible
    And a "Buy Tickets Now" rounded red button is present

  Scenario: Event info cards display
    Then 4 info cards are shown in a row
    And cards show DATE, LOCATION, SPEAKERS, TICKETS labels
    And each card has an icon above the label

  Scenario: Countdown section renders
    Then a background image with dark overlay is displayed
    And the heading "Counter until the big event" is visible
    And 4 countdown boxes show days, hours, minutes, seconds
    And countdown boxes have red background with white text

  Scenario: About section displays
    Then the section title "About the event" is visible
    And two columns of description text are shown
    And the title has a red top-border accent line

  Scenario: Event features render
    Then 4 feature cards are displayed in a row
    And each card shows an icon, title, description, and "read more" link
    And feature titles are "9 Speakers", "8 hrs Marathon", "Live Broadcast", "Early Bird"

  Scenario: Speakers section displays
    Then the section title "Our Speakers" is visible
    And 8 speaker cards are shown in a 4-column grid
    And each card shows a portrait image
    And hovering reveals name and position info

  Scenario: Pricing table renders
    Then the section title "Pricing Table" is visible
    And 3 pricing cards are displayed
    And the "Early Bird" card shows "$65" and has "recommended" badge
    And the "Start up" card shows "$85"
    And the "Corporate" card shows "$95"
    And each card has a "Purchase" button

  Scenario: Event calendar displays
    Then a table header "Next Events Calendar" is visible
    And 3 event rows are shown
    And each row shows an image, date, event info, and "Read More" button
    And each row has a "buy now" link

  Scenario: Partners carousel renders
    Then the section title "Our Partners" is visible
    And a carousel of 5 partner logos is displayed
    And logos are at reduced opacity, full on hover

  Scenario: Get Tickets section renders
    Then a background image with overlay is displayed
    And the heading "Get your tickets" is visible
    And a "buy now" rounded red button is present

  Scenario: Footer renders
    Then a dark footer with logo and description is displayed
    And social media icons (Pinterest, Facebook, Twitter, Dribbble, Instagram) are present
    And an Instagram image grid with 6 images is shown
    And a newsletter form with email input and "SUBSCRIBE" button is present

  Scenario: Copyright footer renders
    Then a copyright line is displayed
    And footer navigation links (Home, Speakers, Events, News, Contact) are present
    And a Component Dock attribution link is present
```

## Verification Checklist

- [ ] All 13 sections render in the correct order
- [ ] Design tokens match: `#f50136` primary, `#18181c` headings/footer, `#838383` body text
- [ ] Font: Montserrat loaded via Google Fonts in index.html
- [ ] Buttons: rounded (50px), red bg with white text, dark hover
- [ ] Hero: full-viewport slider with 3 slides, dot nav, overlay
- [ ] Countdown: 4 red boxes with day/hour/min/sec
- [ ] Speakers: 4-col grid, 8 cards, hover-reveal info
- [ ] Pricing: 3 cards, "recommended" badge on active
- [ ] Event calendar: table layout with 3 rows
- [ ] Partners: logo carousel at 30% opacity
- [ ] Footer: 3-col with social icons, Instagram grid, newsletter
- [ ] No references to ColorLib in app code
- [ ] `public/CNAME` contains `festivora.free.componentdock.com`
- [ ] `homepage` in package.json set to `https://festivora.free.componentdock.com`
