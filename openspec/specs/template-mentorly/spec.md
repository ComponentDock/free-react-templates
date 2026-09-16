# Template: Mentorly (Consulting — Life Coach)

## Purpose

Recreation of the ColorLib "Coach" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** [ColorLib Coach](https://colorlib.com/wp/template/coach/)
- **Preview:** https://preview.colorlib.com/theme/coach/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/coach-free-template.jpg
- **New name:** `mentorly` (no collision with existing apps/ or specs/)
- **Package:** `@free-react-templates/mentorly`
- **Deploy target:** `mentorly.free.componentdock.com`

## Design Tokens (extracted from live preview)

| Token              | Value                         | Usage                                    |
| ------------------ | ----------------------------- | ---------------------------------------- |
| `brand-primary`    | `#037ef3` (blue)              | Buttons, nav active/hover, form focus     |
| `brand-hero`       | `#ffdd40` (yellow)            | Hero section background                  |
| `brand-orange`     | `#fd7e14` (orange)            | Hero body links                          |
| `surface-light`    | `#f8f9fa` (Bootstrap bg-light)| Training section background              |
| `surface-dark`     | `#333333` (dark gray)         | Footer background                        |
| `text-body`        | `gray`                        | Body paragraph text                      |
| `text-heading`     | `#000000` (black)             | All headings (h1–h6)                     |
| `font-heading`     | `Playfair Display` (Google Fonts) | All heading elements                 |
| `font-body`        | `Open Sans` (Google Fonts)    | Body text, form controls, nav            |
| `heading-weight`   | `900`                         | Hero h1                                  |
| `hero-font-size`   | `4rem` (2rem mobile)          | Hero heading                             |
| `section-padding`  | `5em 0` (desktop) / `2.5em 0` (mobile) | Standard section spacing     |
| `image-radius`     | `7px`                         | Gallery items, training figures          |
| `btn-radius`       | `5px`                         | Form controls (buttons inherit)          |
| `overlay`          | `rgba(0,0,0,0.2)`            | Offcanvas menu overlay                   |

## Section Structure (from live preview — order is sacred)

1. **Navbar** — Fixed/absolute top. Logo text "Coach" (left). Nav links: Home, About, Our Training, Testimonials, Gallery, Blog, Contact. Mobile hamburger with offcanvas menu.
2. **Hero** — Full-height (80vh, min 400px). Yellow `#ffdd40` background. Large black heading "We are" (Playfair Display, 400 weight 900, 4rem). Subtext paragraph. "Contact us" CTA button (blue `#037ef3`).
3. **About** — Two-column layout. Left: founder image. Right: heading "Hey there, I'm John The Founder" + 3 paragraphs of bio text. Below that: "Upcoming Speaking Gigs" list (4 events with title + date + location). Below: 4 team member cards (image + name + blurb) in a row.
4. **Training** — Light gray background (`bg-light`). Heading "Our Training" + subtext. 2×3 grid of training cards. Each card: image (rounded 7px) + heading + description.
5. **Services** — White background. Heading "Our Services" + subtext. 2×3 grid of service cards (same layout as training but no images — just icon/title/description).
6. **Gallery** — Heading "Gallery" + subtext. Masonry-like grid of 12 images (2-col on mobile, 3-col on md, 4-col on xl). Images have rounded corners (7px) and hover opacity effect.
7. **Testimonials** — Heading "Happy Customers". Carousel/slider of 4 testimonial quotes. Each: quote text + author name.
8. **Blog** — Heading "Our Blog" + subtext. 4 blog post cards in a row. Each: image + date + title + excerpt + "Read More.." link.
9. **Contact** — Three-column info (Address, Phone, Email Address). Below: newsletter subscription form with email input + "Send" button.
10. **Footer** — Dark `#333333` background. Three columns: About Us text, Quick Links (nav anchors), Follow Us (social icons) + Subscribe Newsletter (email input + button). Copyright line.

## Gherkin Requirements

### Feature: Mentorly — Life Coaching Template

  Scenario: Navbar renders with all navigation links
    Given the page loads
    Then the navbar displays links: Home, About, Our Training, Testimonials, Gallery, Blog, Contact
    And the logo text "Mentorly" is visible
    And on mobile a hamburger menu toggle is visible

  Scenario: Hero section displays correctly
    Given the page loads
    Then the hero section has a yellow (#ffdd40) background
    And the hero heading is displayed in large bold text
    And a "Contact us" call-to-action button is visible
    And the hero occupies at least 80vh height

  Scenario: About section shows founder info
    Given the user scrolls to the About section
    Then a founder heading is visible
    And three bio paragraphs are displayed
    And an "Upcoming Speaking Gigs" list shows at least 4 events
    And 4 team member cards are displayed with names and descriptions

  Scenario: Training section shows training programs
    Given the user scrolls to the Training section
    Then the section has a light gray background
    And 6 training cards are displayed in a 2-column (mobile) / 3-column (desktop) grid
    And each card has an image, heading, and description

  Scenario: Services section shows service offerings
    Given the user scrolls to the Services section
    Then 6 service cards are displayed in a grid
    And each card has a heading and description

  Scenario: Gallery section displays images in grid
    Given the user scrolls to the Gallery section
    Then at least 12 gallery images are displayed
    And images are arranged in a responsive grid (2→3→4 columns)
    And images have rounded corners (border-radius 7px)
    And images have hover opacity transition

  Scenario: Testimonials section shows customer quotes
    Given the user scrolls to the Testimonials section
    Then at least 3 testimonial quotes are displayed
    And each quote shows the author name

  Scenario: Blog section shows recent posts
    Given the user scrolls to the Blog section
    Then 4 blog post cards are displayed
    And each card has an image, date, title, excerpt, and "Read More" link

  Scenario: Contact section has info and newsletter form
    Given the user scrolls to the Contact section
    Then address, phone, and email information are displayed
    And a newsletter subscription form with email input and submit button is present

  Scenario: Footer renders with all sections
    Given the user scrolls to the Footer
    Then the footer has a dark (#333333) background
    And "About Us", "Quick Links", and "Follow Us" columns are present
    And a newsletter subscription form is present
    And a copyright line with Component Dock link is displayed

  Scenario: Responsive layout adapts to mobile
    Given the page is viewed on a 375px viewport
    Then the navbar collapses to a hamburger menu
    And multi-column grids collapse to single or two columns
    And the hero heading font size reduces to 2rem

## Verification Checklist

- [ ] All 10 sections render in correct order
- [ ] Brand yellow (#ffdd40) used on hero background only
- [ ] Brand blue (#037ef3) used for buttons and interactive accents
- [ ] Playfair Display font loaded for headings
- [ ] Open Sans font loaded for body text
- [ ] Gallery images use rounded corners (7px radius)
- [ ] Footer uses dark (#333333) background
- [ ] No ColorLib references in any app source file (provenance only in spec)
- [ ] Footer links to Component Dock
- [ ] Responsive: hamburger nav on mobile, grid columns collapse
- [ ] All placeholder images use picsum.photos URLs
- [ ] `public/CNAME` contains `mentorly.free.componentdock.com`
- [ ] `homepage` in package.json set to deploy URL
