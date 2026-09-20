# Template: GatherVenue (Events / Conference)

## Purpose

Recreation of ColorLib's **Event** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript application.

- **ColorLib source:** https://colorlib.com/wp/template/event/
- **Preview URL:** https://preview.colorlib.com/theme/event/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/event-free-template.jpg
- **New name:** `gathervenue` (package: `@free-react-templates/gathervenue`)
- **Deploy target:** `gathervenue.free.componentdock.com`

## Design tokens (extracted from preview stylesheet `css/style.css`)

| Token | Value | Notes |
|-------|-------|-------|
| Brand primary | `#dd0a37` | Red — used on buttons, accents, section title second word |
| Dark navy | `#0b0f28` | Navbar background, dark text |
| White | `#FFF` / `#fff` | Button text, section backgrounds |
| Light gray | `#F9F9FA` | Speakers section background |
| Body text | `#444` | Paragraph text |
| Font family | `'Poppins', sans-serif` | All text |
| Button radius | `2px` | Nearly square, slightly rounded |
| Button padding | `14px 50px` | Large CTA buttons |
| Button hover | `opacity: 0.8` | Subtle fade on hover |

### Section backgrounds

| Section | Background |
|---------|-----------|
| Navbar | Dark navy `#0b0f28` |
| Hero | Full-viewport background image |
| About | White `#FFF` |
| Numbers | White (inside About) |
| Gallery | White, owl-carousel |
| Video CTA | Parallax background image |
| Schedule | White `#FFF` |
| Speakers | Light gray `#F9F9FA` |
| Sponsors | White `#FFF` |
| CTA | Parallax background image |
| Contact | White `#FFF` |
| Map | Map embed (380px height) |
| Footer | White `#FFF` |

### Section title pattern

Two `<span>` elements inside `<h3 class="title">`: first word in default color, second word in `#dd0a37`. Example: "About **Event**", "Our **Speakers**", "Contact **Info**".

## Gherkin requirements

```gherkin
Feature: GatherVenue — Event/Conference Landing Page

  Background:
    Given the user visits "gathervenue.free.componentdock.com"
    And the page has loaded completely

  Scenario: Navbar displays correctly
    Then the navbar is visible at the top
    And it contains links: "Home", "About", "Schedule", "Speakers", "Sponsors", "Contact"
    And there is a "Buy Ticket" CTA button in the navbar
    And the navbar has a dark background (#0b0f28)

  Scenario: Hero section fills viewport
    Then the hero section is 100vh tall
    And it displays a large heading
    And it displays a subtext paragraph
    And it has a background image

  Scenario: About section content
    When the user scrolls to the About section
    Then the section title shows "About Event" with the second word in brand red
    And there is a paragraph describing the event
    And 4 statistic counters are visible (Hours, Venues, Country, Speakers)

  Scenario: Gallery carousel
    When the user scrolls to the Gallery section
    Then an image carousel is displayed
    And it shows gallery images in a horizontal carousel layout

  Scenario: Video CTA section
    When the user scrolls to the Video CTA section
    Then a play button icon is displayed
    And the heading reads "Watch this video"
    And the section has a parallax background image

  Scenario: Schedule section lists events
    When the user scrolls to the Schedule section
    Then the section title shows "Event Schedule"
    And events are listed with date, time, title, description, and speaker name
    And there is a "Download Schedule" button

  Scenario: Speakers section displays speaker cards
    When the user scrolls to the Speakers section
    Then the section title shows "Our Speakers"
    And speaker cards are displayed in a 3-column grid
    And each card shows an image, name, role, and social icons
    And clicking a speaker opens a modal with details

  Scenario: Sponsors section
    When the user scrolls to the Sponsors section
    Then the section title shows "Our Sponsors"
    And sponsor logos are displayed in a 4-column grid (8 total)

  Scenario: CTA section
    When the user scrolls to the CTA section
    Then the heading reads "Get Ticket Now!"
    And a "Buy Ticket" button is displayed
    And the section has a parallax background image

  Scenario: Contact section
    When the user scrolls to the Contact section
    Then the section title shows "Contact Info"
    And 3 contact columns are visible: Address, Phone, Email

  Scenario: Map placeholder
    When the user scrolls to the Map section
    Then a map area is displayed (placeholder for Google Maps)

  Scenario: Footer
    When the user scrolls to the footer
    Then the Component Dock logo and link are present
    And social media icons are displayed (Facebook, Twitter, Instagram, LinkedIn)
    And a copyright line is shown

  Scenario: All sections use Poppins font
    Then all text elements use the Poppins font family

  Scenario: Brand color consistency
    Then all CTA buttons use background #dd0a37 with white text
    And accent words in section titles use #dd0a37
```

## Verification checklist

- [ ] Navbar: sticky, dark bg, correct nav links, "Buy Ticket" CTA
- [ ] Hero: 100vh, background image, heading + subtext
- [ ] About: section title with brand accent, description paragraph
- [ ] Numbers: 4 stat counters with animated count-up
- [ ] Gallery: owl-carousel-style horizontal image carousel
- [ ] Video CTA: parallax bg, play icon, heading + subtext
- [ ] Schedule: events list with date/time/title/speaker, "Download Schedule" button
- [ ] Speakers: 3-column grid, speaker cards with image overlay, modal on click
- [ ] Sponsors: 4-column logo grid
- [ ] CTA: parallax bg, "Get Ticket Now!" heading, "Buy Ticket" button
- [ ] Contact: 3-column (Address, Phone, Email)
- [ ] Map: placeholder area
- [ ] Footer: Component Dock link, social icons, copyright
- [ ] Typography: Poppins throughout
- [ ] Colors: #dd0a37 brand, #0b0f28 dark, #F9F9FA speakers bg
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] 100% test coverage
- [ ] Deployed to gathervenue.free.componentdock.com
