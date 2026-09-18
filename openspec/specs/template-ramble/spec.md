# Template: Ramble (Travel Agency)

## Purpose

Recreation of the ColorLib "Vacation" travel agency template.

- **Source:** [ColorLib Vacation](https://colorlib.com/wp/template/vacation/)
- **Preview:** [Live preview](https://preview.colorlib.com/theme/vacation/)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Name mapping:** `apps/ramble` recreates ColorLib `vacation`

## Design tokens (extracted from preview)

| Token              | Value / Notes                                                                 |
| ------------------ | ----------------------------------------------------------------------------- |
| **Primary brand**  | `#f9ab30` (amber/orange) — used on CTA buttons, search button                |
| **Primary hover**  | `#0069d9` (Bootstrap blue override — `.btn.btn-primary` → `#f9ab30`)         |
| **Search bar bg**  | `#33313b` (dark charcoal) — `.search-wrap-1`                                 |
| **Footer bg**      | `#201e25` (very dark purple-grey) — footer widget bg                         |
| **Footer alt**     | `#2f2f3b` (slightly lighter)                                                 |
| **Text on dark**   | `#fff` and `rgba(255,255,255,0.5)`                                           |
| **Text on light**  | `#000`, `#333`, `#666`                                                       |
| **Section alt bg** | `#f7f7f7` (light grey) — services section `bg-light`                         |
| **Gradient**       | `linear-gradient(45deg, #2f88fc 0%, #ff5959 100%)` — loader spinner accent   |
| **Font family**    | `Poppins` (Google Fonts), weights 300–900                                    |
| **Button radius**  | Bootstrap default `0.25rem`; search button has no extra radius                |
| **Section bg image** | Hero: `bg_2.jpg` (tropical/sea); Counter: `about.jpg`; Testimony: `bg_3.jpg` |
| **Footer bg image** | `footer-bg.jpg` (dark atmospheric)                                          |

## Page sections (order from preview DOM)

1. **Navbar** — dark bg, logo "Vacation / Travel Agency", nav links (Home, About, Destination, Blog, Contact), CTA "Book Now" button (orange)
2. **Hero** — full-height with parallax background image, play-button icon linking to Vimeo, tagline "Travel to the any corner…", heading "Make Your Tour Amazing With Us"
3. **Search bar** — overlapping dark (`#33313b`) bar with 4 fields: Destination text input, Check-in date, Check-out date, Price Limit dropdown, Search button (orange `#f9ab30`)
4. **Services** — light `#f7f7f7` bg, 2-column: left heading + description + CTA, right 2x2 grid of services (Activities, Travel Arrangements, Private Guide, Location Manager) with flaticon icons
5. **Counter / About** — split: left large image, right text + 3 animated counters (300 Successful Tours, 24000 Happy Tourist, 200 Place Explored)
6. **Best Place Destinations** — 4-card grid of destination thumbnails with overlay text (Singapore, Canada, Thailand, Australia) and tour counts
7. **Tour Destinations** — 3-column x 2-row grid of tour cards, each with image, price badge (`$300/person`), days badge, title, location, amenity icons (shower/bed/mountain)
8. **Testimonials** — parallax background image, carousel of review cards with avatar, name, position
9. **Recent Posts / Blog** — 3-column blog cards with cover image, date badge (day/month/year), title, excerpt
10. **Footer** — dark bg image, 4 columns: brand + social icons, Information links, Experience links, Contact (address, phone, email)

## Gherkin requirements

```gherkin
Feature: Ramble travel agency template

  Background:
    Given the user opens the Ramble template at its root URL

  Scenario: Navbar visibility and navigation
    Then the navbar is visible with logo text "Ramble" and subtitle
    And the navbar contains links: Home, About, Destination, Blog, Contact
    And a "Book Now" CTA button is visible in the navbar
    And the navbar becomes sticky on scroll

  Scenario: Hero section displays correctly
    Then a full-height hero section is displayed with a background image
    And a heading "Make Your Tour Amazing With Us" is visible
    And a tagline paragraph is visible above the heading
    And a circular play-button icon is visible

  Scenario: Search bar renders all fields
    Then a dark search bar is displayed overlapping the hero
    And the search bar contains a "Destination" text input
    And the search bar contains a "Check-in date" input
    And the search bar contains a "Check-out date" input
    And the search bar contains a "Price Limit" dropdown select
    And an orange "Search" submit button is visible

  Scenario: Services section shows 4 service cards
    Then a services section with light background is displayed
    And a heading "It's time to start your adventure" is visible
    And 4 service cards are shown in a 2-column grid
    And each service card has an icon, title, and description

  Scenario: Counter / About section shows stats
    Then a split section with image and stats is displayed
    And a heading "Make Your Tour Memorable and Safe With Us" is visible
    And 3 animated counter blocks are shown
    And counters display: Successful Tours, Happy Tourist, Place Explored

  Scenario: Best Place Destinations grid
    Then a 4-card destination grid is displayed
    And a heading "Best Place Destination" is visible
    And each destination card shows a name and tour count

  Scenario: Tour Destinations cards
    Then a 6-card tour grid (3 columns, 2 rows) is displayed
    And a heading "Tour Destination" is visible
    And each tour card has an image, price, duration, title, location, and amenity icons

  Scenario: Testimonials carousel
    Then a testimonials section with parallax background is displayed
    And a heading "Tourist Feedback" is visible
    And a carousel shows review cards with avatar, name, position, and quote

  Scenario: Blog / Recent Posts
    Then a blog section with 3 post cards is displayed
    And a heading "Recent Post" is visible
    And each blog card has a cover image, date badge, title, and excerpt

  Scenario: Footer layout and links
    Then a dark footer with background image is displayed
    And the footer has 4 columns: brand info, Information links, Experience links, contact info
    And social icons (Twitter, Facebook, Instagram) are visible
    And a link to https://www.componentdock.com/ is present in the footer
```

## Verification checklist

- [ ] All 10 sections present in correct order
- [ ] Navbar sticky on scroll
- [ ] Hero full-height with parallax
- [ ] Search bar with all 4 fields + button
- [ ] Services 2x2 grid with icons
- [ ] Counter section with animated numbers
- [ ] Destination grid (4 cards)
- [ ] Tour card grid (6 cards, 3-col)
- [ ] Testimonials carousel
- [ ] Blog cards (3)
- [ ] Footer 4-column with social + contact
- [ ] Brand color `#f9ab30` applied to CTAs
- [ ] Poppins font family loaded
- [ ] Dark sections use `#33313b` / `#201e25` backgrounds
- [ ] All placeholder images via `picsum.photos/seed/ramble-*`
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code
- [ ] 100% test coverage (vitest + RTL)
