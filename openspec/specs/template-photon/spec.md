# Template: Photon (Business / SaaS Landing)

## Purpose

Recreation of ColorLib "Atomic" template.
- Source slug: `atomic`
- ColorLib page: https://colorlib.com/wp/template/atomic/
- Live preview: https://preview.colorlib.com/theme/atomic/
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens (extracted from preview stylesheet `css/style.css`)

| Token             | Value                            |
| ----------------- | -------------------------------- |
| Primary color     | `#0389FF` (bright blue)          |
| Primary hover     | `#0075dc` / `#006ecf`            |
| Body text         | `#212529`                        |
| Muted text        | `#6c757d` / `#999999`           |
| Light background  | `#f8f9fa`                        |
| Dark background   | `#000` / `#212529`              |
| Border color      | `#dee2e6` / `#ccc`              |
| Font family       | `"Work Sans", arial, sans-serif` |
| Heading weight    | 600–700 (bold)                   |
| Body weight       | 400                              |
| Button radius     | `0.25rem`                        |
| Button padding    | `0.375rem 0.75rem` (Bootstrap default) |
| Section padding   | `7em 0`                          |
| Cover min-height  | `800px`                          |
| Cover font-size   | `30px` (lead), `50px` (h1)      |
| Cover text color  | `#000`                           |
| Cover sub color   | `#999999`                        |
| Play button       | 80×80 circle, 2px solid border, 50% radius |
| Counter number    | `50px`, white on blue            |
| Counter label     | uppercase, white, opacity 0.5   |
| Footer background | `#f8f9fa`                        |
| Footer padding    | `7em 0`                          |

## Visual design (from screenshot analysis)

Clean, minimalistic business landing page. White/light backgrounds throughout.
Hero section uses a full-width background image (plant/succulent) with dark
text overlay (left-aligned headline + subtext + blue CTA button). A circular
play button sits on the hero image. Features section is a 3-column icon grid
on white. About section is a 2-column split (text left, gallery right).
Full-width image carousel. Services section on light-gray bg (3 columns with
icons). Blue stat counter bar. Testimonial carousel. Light footer with
multi-column links.

## Gherkin requirements

### Navbar

```gherkin
Feature: Photon Navbar

  Scenario: Renders logo and navigation links
    Given the page loads
    Then a navigation bar is visible at the top
    And the logo text reads "Photon"
    And links "Home", "About", "Services", "Gallery", "Blog", "Contact" are present

  Scenario: Services link has dropdown
    Given the page loads
    When the user hovers over "Services"
    Then a dropdown with sub-links appears

  Scenario: Navbar is transparent over hero
    Given the page loads
    Then the navbar background is transparent
    And the navbar text is dark
```

### Hero / Cover

```gherkin
Feature: Photon Hero

  Scenario: Displays hero content
    Given the page loads
    Then a hero section with background image is visible
    And the headline reads "Design a better website template."
    And subtext starting with "Far far away" is visible below the headline

  Scenario: CTA button present
    Given the page loads
    Then a "Free Download" button is visible in the hero
    And the button has a blue background

  Scenario: Play button present
    Given the page loads
    Then a circular play button is visible on the hero image
```

### Features

```gherkin
Feature: Photon Features

  Scenario: Three feature cards displayed
    Given the page loads
    Then three feature items are shown in a row
    And each feature has an icon, title, and description
    And the titles are "Intuitive Thinking", "Orange for Carrots", "Infinite Possibilities"

  Scenario: Feature section on white background
    Given the page loads
    Then the features section has a white background
```

### About

```gherkin
Feature: Photon About

  Scenario: About section with text and media
    Given the page loads
    Then an about section is visible
    And the heading reads "Good Design is a Good Start"
    And descriptive paragraph text is present
    And a "More Features" link is present
```

### Gallery Carousel

```gherkin
Feature: Photon Gallery Carousel

  Scenario: Image carousel renders
    Given the page loads
    Then a full-width image carousel is visible
    And multiple slide items are present
    And carousel navigation is functional
```

### Services

```gherkin
Feature: Photon Services

  Scenario: Three service items on light background
    Given the page loads
    Then a services section with light gray background is visible
    And three service items are displayed
    And titles include "Regular Update", "Infinite Possibilities", "Good Security"
    And each has an icon, title, and description
```

### Counter / Stats

```gherkin
Feature: Photon Counter

  Scenario: Stats displayed on blue background
    Given the page loads
    Then a counter section with blue background is visible
    And three counters are shown: "Lines of Codes", "Number of Projects", "Number of Clients"
    And the counter numbers animate on scroll
    And the text is white on blue
```

### Testimonials

```gherkin
Feature: Photon Testimonials

  Scenario: Testimonial carousel renders
    Given the page loads
    Then a testimonials section is visible
    And testimonial quotes are displayed in a carousel
    And each quote has attribution text
```

### Footer

```gherkin
Feature: Photon Footer

  Scenario: Footer with widget columns
    Given the page loads
    Then a footer with light gray background is visible
    And footer contains an "About" text widget
    And footer contains "Learn More" links section
    And footer contains "Support" links section
    And footer contains an "About Us" column
    And a copyright bar is present at the bottom

  Scenario: Footer links to Component Dock
    Given the page loads
    Then the footer contains a link to "https://www.componentdock.com/"
```

## Section order (top → bottom)

1. Navbar (transparent, dark text)
2. Hero / Cover (full-width bg image, headline, subtext, CTA button, play button)
3. Features (3-column icon grid, white bg)
4. About (2-column: text left, image right)
5. Gallery Carousel (full-width image slider)
6. Services (3-column icons, light-gray bg)
7. Counter / Stats (blue bg, 3 animated counters)
8. Testimonials (carousel, centered)
9. Footer (light bg, multi-column links + copyright)

## Verification checklist

- [ ] Navbar: logo + 7 nav links, transparent bg, dark text
- [ ] Hero: bg image, headline, subtext, blue CTA, circular play button
- [ ] Features: 3 items, icon + title + description, white bg
- [ ] About: heading + paragraph + link, 2-column layout
- [ ] Gallery: full-width carousel with multiple slides
- [ ] Services: 3 items on light-gray bg
- [ ] Counter: blue bg, 3 counters (lines, projects, clients), white text
- [ ] Testimonials: carousel with quotes
- [ ] Footer: light bg, 4 widget columns, copyright, ComponentDock link
- [ ] Design tokens: primary #0389FF, font "Work Sans", radii 0.25rem
- [ ] All sections match 1:1 order from original
- [ ] No ColorLib references in app code
- [ ] `apps/photon/public/CNAME` → `photon.free.componentdock.com`
- [ ] `apps/photon/package.json` homepage → `https://photon.free.componentdock.com`
