---
name: Tidal
description: Travel agency landing page — recreation of ColorLib "Pacific" (https://colorlib.com/wp/template/pacific/)
stack: React 19 + Vite + Tailwind CSS 4 + TypeScript
---

# Tidal — Travel Agency Landing Template

**Source:** ColorLib "Pacific" — https://colorlib.com/wp/template/pacific/
**Preview:** https://preview.colorlib.com/theme/pacific/

## Design Tokens (from CSS analysis)

| Token          | Value                      | Notes                            |
| -------------- | -------------------------- | -------------------------------- |
| Brand color    | `#f15d30` (orange-red)     | CTA buttons, accents, highlights |
| Primary blue   | `#007bff`                  | Secondary actions, links         |
| Font family    | Poppins, Arial, sans-serif | Google Fonts via `<link>`        |
| Dark bg        | `#33313b`                  | Footer, dark sections            |
| Text primary   | `#212529`                  | Headings, body text              |
| Text secondary | `#6c757d`                  | Subtitles, descriptions          |
| Light bg       | `#e9ecef`                  | Alternating section backgrounds  |
| White          | `#fff`                     | Cards, primary backgrounds       |

## Sections (in order)

1. **Navbar** — Logo "Tidal", links: Home, About, Destination, Tour, Blog, Contact; transparent over hero, solid on scroll
2. **Hero** — Full-height background image, heading "Discover Your Favorite Place with Us", subtitle "Travel to any corner of the world, without going around in circles", CTA "Search Destination"
3. **Search Bar** — Pill/tabbed search (Tour | Hotel | Destination) with check-in date, check-out date, price range slider, search button
4. **Services** — "It's time to start your adventure" + 4 icon cards: Activities, Travel Arrangements, Private Guide, Location Manager
5. **Destination Select** — Parallax background, "Select Your Destination", grid of 5 country cards: Philippines, Canada, Thailand, Australia, Greece with images
6. **Tour Packages** — Grid of tour cards with image, duration, title, location, icon stats (group size, duration), price
7. **About (Parallax)** — Background image with overlay text
8. **About Us** — "Make Your Tour Memorable and Safe With Us", content + stats/feature list
9. **Testimonials** — "Tourist Feedback" on parallax background, carousel/card of reviews
10. **Blog** — Recent posts grid (3 cards with image, date, title, excerpt)
11. **Footer CTA** — "We Are Tidal, A Travel Agency" intro banner
12. **Footer** — 4-column: About text, Information links, Customer Care links, Contact info + Component Dock attribution

## Fidelity Rules

- Match section order 1:1 with the original
- Use `#f15d30` as primary brand color in `@theme`
- Use Poppins font via Google Fonts `<link>` in index.html
- Placeholder images via `picsum.photos/seed/tidal-<n>/<w>/<h>`
- Icons via `lucide-react`
- Footer links to `https://www.componentdock.com/` (branded "Component Dock")
- No ColorLib references in app source code

## Scenarios

### Navigation

- Given the page loads, when I look at the navbar, then I see "Tidal" logo and links: Home, About, Destination, Tour, Blog, Contact
- Given I scroll down, when the navbar becomes sticky, then it has a solid background

### Hero

- Given I land on the page, when I see the hero section, then I see heading "Discover Your Favorite Place with Us" with a CTA button

### Search

- Given I see the search bar, when I click Tour/Hotel/Destination tabs, then the active tab highlights
- Given I see the search form, when I view it, then I see date inputs and a search button

### Services

- Given I scroll to services, when I see the section, then I see 4 service cards with icons

### Destinations

- Given I scroll to destinations, when I see the grid, then I see 5 country cards with images and names

### Tour Packages

- Given I scroll to tours, when I see the grid, then I see tour cards with price, duration, and location

### About

- Given I scroll to about, when I see the section, then I see "Make Your Tour Memorable and Safe With Us" heading with descriptive text

### Testimonials

- Given I scroll to testimonials, when I see the section, then I see review cards with names and quotes

### Blog

- Given I scroll to blog, when I see the section, then I see 3 blog post cards with dates and titles

### Footer

- Given I reach the footer, when I look at it, then I see 4 columns of links and a "Component Dock" attribution link
