# Template: Nucleus (Business Website)

## Purpose

Nucleus is a full-page BUSINESS WEBSITE template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Atomic" free template (source: https://colorlib.com/wp/template/atomic/), built under a DIFFERENT name (**Nucleus**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a multi-section business/corporate website template: a dark navbar with logo + links, a full-width hero with background image and video play button, feature cards, a portfolio grid, a services section, a blog section, an animated counter strip, and a footer. The design features a clean blue-white palette (#0389FF primary, white backgrounds, light gray sections), Work Sans typography, card-based layouts, and scroll-reveal animations (AOS).

**WHAT MAKES NUCLEUS DISTINCT (signature behaviors):**

1. **Dark navbar with mobile hamburger.** A dark (near-black) header with white logo "Nucleus" on the left, horizontal nav links on the right (Home, About, Services, Gallery, Blog, Contact), and a hamburger menu for mobile that toggles a dropdown.
2. **Full-width hero with video overlay.** A large hero section with a background image (replaced by picsum), a centered video play button icon, a headline ("Design a better website template."), descriptive subtext, and a "Free Download" CTA button in blue.
3. **Three feature cards.** A section with 3 columns: each has an icon, a heading (e.g. "Intuitive Thinking", "Infinite Possibilities"), and a short description. White background.
4. **Portfolio grid.** A centered heading ("Good Design is a Good Start") followed by a responsive image grid with hover overlays.
5. **Services grid (light gray background).** A 6-item grid with icons and titles: "Regular Update", "Infinite Posibilities", "Good Security", "Orange for Carrots", "Intuitive Thinking", "Play Video". Gray background (#f8f9fa).
6. **Blog section.** Article cards with image, date, title, and excerpt in a responsive grid.
7. **Animated counter strip (blue background).** A full-width section in primary blue (#0389FF) with 3 counter items: "Lines of Codes" (99399), "Number of Projects" (99), "Happy Clients" (124) that animate on scroll.
8. **Footer (light gray).** A 3-column footer with brand info, quick links, and a subscribe form.

## Source mapping

- **ColorLib source:** Atomic
- **Preview URL:** https://preview.colorlib.com/theme/atomic/ (reachable)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/atomic-free-template.jpg
- **New name:** nucleus
- **Category:** Business Website

## Design tokens

Extracted from the live preview CSS (https://preview.colorlib.com/theme/atomic/css/style.css).

### Colors

| Token                   | Value     | Usage                                                    |
| ----------------------- | --------- | -------------------------------------------------------- |
| `--color-primary`       | `#0389FF` | Brand blue — buttons, links, counter background, accents |
| `--color-primary-hover` | `#006ecf` | Button/link hover state                                  |
| `--color-bg`            | `#fff`    | Page background                                          |
| `--color-bg-light`      | `#f8f9fa` | Light gray sections (services, footer)                   |
| `--color-text`          | `#212529` | Default body text                                        |
| `--color-text-muted`    | `#6c757d` | Secondary/muted text                                     |
| `--color-heading`       | `#000`    | Section headings (h1-h5)                                 |
| `--color-border`        | `#dee2e6` | Dividers and card borders                                |
| `--color-white`         | `#fff`    | Card backgrounds, navbar text                            |
| `--color-dark`          | `#000`    | Navbar background                                        |
| `--color-accent-warm`   | `#ffc107` | Secondary accent (sparingly)                             |

### Typography

| Element   | Font      | Weight | Size    | Usage                          |
| --------- | --------- | ------ | ------- | ------------------------------ |
| Body      | Work Sans | 400    | 16px    | Default text, line-height 1.5  |
| Headings  | Work Sans | 400    | 28px    | `.heading` class, h1-h5        |
| Lead text | Work Sans | 300    | 1.25rem | Hero subtext, intro paragraphs |
| Labels    | Work Sans | 500    | 14px    | Counter labels, nav links      |

### Shapes & Spacing

| Token           | Value                                | Usage                              |
| --------------- | ------------------------------------ | ---------------------------------- |
| Button radius   | 4px (Bootstrap default)              | CTA buttons                        |
| Section padding | 7em 0                                | `.templateux-section` vertical pad |
| Hero height     | ~600px (viewport-based)              | Cover section                      |
| Card shadow     | `0 10px 23px -16px rgba(0,0,0,0.14)` | Subtle card elevation              |
| Counter strip   | full-width, bg #0389FF               | Animated number counters           |

### Section backgrounds (in order)

1. Navbar: solid black `#000`
2. Hero: background image (full-width cover)
3. Features: solid white `#fff`
4. Portfolio: solid white `#fff`
5. Services: light gray `#f8f9fa`
6. Blog: solid white `#fff`
7. Counter strip: primary blue `#0389FF`
8. Footer: light gray `#f8f9fa`

## Requirements

### Scenario: Page renders with navbar

- **Given** the user visits the Nucleus page
- **Then** a dark navbar is visible at the top with the "Nucleus" logo on the left
- **And** navigation links "Home", "About", "Services", "Gallery", "Blog", "Contact" are visible on the right

### Scenario: Navbar mobile toggle

- **Given** the viewport is mobile (< 768px)
- **When** the user clicks the hamburger menu icon
- **Then** the navigation links dropdown appears
- **When** the user clicks the hamburger menu icon again
- **Then** the navigation links dropdown is hidden

### Scenario: Hero section renders

- **Given** the user scrolls to the hero section
- **Then** a full-width background image is visible
- **And** a video play button icon is centered over the image
- **And** the heading "Design a better website template." is displayed
- **And** a "Free Download" CTA button in primary blue is visible

### Scenario: Feature cards render

- **Given** the user scrolls past the hero
- **Then** 3 feature cards are displayed in a row
- **And** each card has an icon, a heading, and a description paragraph

### Scenario: Portfolio grid renders

- **Given** the user scrolls to the portfolio section
- **Then** a centered heading "Good Design is a Good Start" is visible
- **And** a responsive grid of 4 portfolio images is displayed
- **And** hovering over an image shows an overlay effect

### Scenario: Services section renders

- **Given** the user scrolls to the services section
- **Then** 6 service items are displayed on a light gray background
- **And** each item has an icon and a title (e.g. "Regular Update", "Infinite Posibilities")

### Scenario: Blog section renders

- **Given** the user scrolls to the blog section
- **Then** 4 blog article cards are displayed in a responsive grid
- **And** each card shows an image, a date, a title, and an excerpt

### Scenario: Counter strip animates

- **Given** the user scrolls to the counter strip (blue background)
- **Then** 3 counter items are displayed: "Lines of Codes", "Number of Projects", "Happy Clients"
- **And** the numbers animate from 0 to their target values (99399, 99, 124)
- **And** the animation triggers when the strip enters the viewport

### Scenario: Footer renders

- **Given** the user scrolls to the bottom
- **Then** a footer on a light gray background is visible
- **And** it contains a brand section, quick links, and a subscribe form
- **And** a "Component Dock" link is present in the footer

### Scenario: Responsive layout

- **Given** the user resizes the viewport to mobile width
- **Then** the navbar collapses to a hamburger menu
- **And** the hero text is centered
- **And** feature cards stack vertically
- **And** the portfolio grid adjusts to fewer columns
- **And** the footer columns stack vertically
