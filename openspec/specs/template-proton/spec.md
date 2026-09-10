# Template: Proton (Business / Agency)

## Purpose

Recreation of ColorLib "Atomic" — a clean, professional business/agency website
template with hero video CTA, overlapping features, service grid, portfolio
masonry, stats counter, testimonials, and multi-column footer.

- **Source:** ColorLib Atomic — https://colorlib.com/wp/template/atomic/
- **Preview:** https://preview.colorlib.com/theme/atomic/
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **New name:** `proton` (packages/ui + apps/proton)

## Design Tokens

Extracted from `https://preview.colorlib.com/theme/atomic/css/style.css`:

| Token            | Value                                 | Notes                                        |
| ---------------- | ------------------------------------- | -------------------------------------------- |
| Font family      | `Work Sans` (Google Fonts)            | 300, 400, 700 weights                        |
| Primary color    | `#0389FF`                             | Bright blue — buttons, navbar, counter bg    |
| Primary hover    | `#0075dc` / `#36a1ff`                 | Darker/lighter blue on hover                  |
| Body text        | `#999999`                             | Muted gray                                   |
| Headings         | `#000`                                | Solid black                                  |
| Links            | `#000`                                | Dark, transitions to `#000` on hover         |
| Background       | `#fff`                                | White page background                        |
| Light bg         | `#f8f9fa` (Bootstrap --light)         | Services section, footer                     |
| Button radius    | `0` (square)                          | No border-radius on buttons                  |
| Button style     | uppercase, 14px, letter-spacing 0.1em | No box-shadow                                |
| Black button     | `#000` bg, `#fff` text                | Secondary CTA style                          |
| Section padding  | `7em 0`                               | Generous vertical rhythm                     |
| Overlap card     | margin-top: -13em, bg: #fff           | border-radius: 7px, shadow: 0 10px 20px      |
| Thumbnail cards  | 500px height, bg-cover, overlay: 0.1  | Hover overlay to 0.5, text slides in         |
| Counter section  | `#0389FF` background                  | White text, numbers 50px, labels uppercase   |
| Testimonial      | 100px quote mark, 18px text, #000     | Centered, carousel                           |
| Footer           | Light bg, uppercase h3 (15px, #ccc)   | Multi-column link list + social icons         |

## Section Order

1. **Navbar** — logo "Proton" left, nav links right (Home, About, Services,
   Gallery, Blog, Contact). Mobile hamburger. Transparent over hero, solid
   blue on scroll.
2. **Hero / Cover** — full-viewport background image. Left side: headline
   ("Design a better website"), lead subtext, "Free Download" primary button.
   Right side: circular play button (video placeholder).
3. **Features Overlap** — 3-column icon cards (Intuitive Thinking, Orange for
   Carrots, Infinite Posibilities) inside a white card overlapping the hero
   by -13em. Each card: Ionicons-style icon + h5 title + paragraph.
4. **About / Text** — centered h2 heading "Good Design is a Good Start",
   two-column text (lead paragraph + body text).
5. **Image Carousel** — full-width image slider (3 images), no controls
   visible.
6. **Services Grid** — 6 icon cards (3x2 grid) on light background: Regular
   Update, Infinite Possibilities, Good Security, Orange for Carrots,
   Intuitive Thinking, Play Video. "More Features" black CTA button centered.
7. **Portfolio Thumbnails** — 2 rows of asymmetric image cards:
   Row 1: 1/3 + 2/3 | Row 2: 2/3 + 1/3. Overlay darkens on hover, text
   slides in from top.
8. **Stats Counter** — blue background (#0389FF), 3 columns: Lines of Code
   (99399), Number of Projects (99), Number of Clients (124). Animated
   count-up.
9. **Testimonials** — centered quote carousel with large quotation mark,
   blockquote text, auto-rotate.
10. **Footer** — light background, 4 columns: About (text + description),
    Learn More (links), Support (links), About Us (links + Download button
    + social icons). Copyright line at bottom. "Component Dock" link replaces
    Colorlib attribution.

## Gherkin Requirements

### Feature: Proton — Business Website Template

  Scenario: Navbar renders with correct navigation links
    Given the page loads
    Then the navbar displays the logo "Proton"
    And navigation links "Home", "About", "Services", "Gallery", "Blog", "Contact" are visible
    And the navbar is transparent over the hero section
    And on mobile a hamburger menu toggle is visible

  Scenario: Hero section displays headline and CTA
    Given the page loads
    Then the hero section shows a background image
    And a headline "Design a better website" is displayed
    And a lead paragraph is visible below the headline
    And a "Free Download" primary button is displayed
    And a play button is visible on the right side

  Scenario: Features overlap card renders three feature items
    Given the page loads
    When I scroll to the features overlap section
    Then a white card overlaps the hero section
    And three feature cards are displayed in a row
    And each card shows an icon, a title, and a description

  Scenario: About section displays heading and two-column text
    Given the page loads
    When I scroll to the about section
    Then a centered heading "Good Design is a Good Start" is shown
    And a two-column text layout is displayed below the heading

  Scenario: Image carousel renders three images
    Given the page loads
    When I scroll to the image carousel section
    Then three images are displayed in a full-width carousel

  Scenario: Services grid shows six service cards on light background
    Given the page loads
    When I scroll to the services section
    Then six service cards are displayed in a 3x2 grid
    And each card has an icon, title, and description
    And the section has a light background
    And a "More Features" black button is centered below the grid

  Scenario: Portfolio thumbnails render in asymmetric grid
    Given the page loads
    When I scroll to the portfolio section
    Then four image cards are displayed in two rows
    And row 1 shows a 1/3 and a 2/3 width card
    And row 2 shows a 2/3 and a 1/3 width card
    And hovering a card reveals a dark overlay and text slides in

  Scenario: Stats counter displays three metrics on blue background
    Given the page loads
    When I scroll to the counter section
    Then three stats are displayed: Lines of Code, Projects, Clients
    And the section has a blue (#0389FF) background
    And white text is displayed for numbers and labels
    And numbers animate counting up from zero

  Scenario: Testimonials section renders a quote carousel
    Given the page loads
    When I scroll to the testimonials section
    Then a large quotation mark is displayed
    And at least one blockquote testimonial is visible
    And testimonials rotate automatically

  Scenario: Footer displays multi-column layout with links
    Given the page loads
    When I scroll to the footer
    Then four columns are displayed: About, Learn More, Support, About Us
    And each column shows relevant navigation links
    And a download CTA button is present
    And social media icon links are shown
    And a copyright line with "Component Dock" link is at the bottom

## Verification Checklist

- [ ] Navbar renders transparent over hero, solid on scroll
- [ ] Mobile hamburger menu toggles open/close
- [ ] Hero section: background image, headline, subtext, CTA button, play button
- [ ] Features overlap card: 3 items with icons, titles, descriptions
- [ ] About section: centered heading, two-column text
- [ ] Image carousel: 3 images, full-width
- [ ] Services grid: 6 cards (3x2), light bg, "More Features" CTA
- [ ] Portfolio thumbnails: 4 cards in 2 asymmetric rows, hover overlay
- [ ] Stats counter: blue bg, 3 metrics, animated count-up
- [ ] Testimonials: quote mark, blockquote carousel
- [ ] Footer: 4-column links, CTA button, social icons, Component Dock link
- [ ] All design tokens match original: Work Sans, #0389FF primary, square buttons
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Tests pass with 100% coverage
- [ ] Build succeeds
