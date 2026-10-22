# Template: Mentorly (Consulting — Life Coach)
<!-- prep-status: shipped-as=northstar -->
> **SHIPPED-UNDER** — the ColorLib `coach` design this prep describes already
> ships as `apps/northstar` (<https://northstar.free.componentdock.com>).
> Do not scaffold `apps/mentorly`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-northstar/spec.md`.

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

## Requirements

### Feature: Mentorly — Life Coaching Template

#### Scenario: Navbar renders with all navigation links

- **GIVEN** the page loads
- **THEN** the navbar displays links: Home, About, Our Training, Testimonials, Gallery, Blog, Contact
- **AND** the logo text "Mentorly" is visible
- **AND** on mobile a hamburger menu toggle is visible

#### Scenario: Hero section displays correctly

- **GIVEN** the page loads
- **THEN** the hero section has a yellow (#ffdd40) background
- **AND** the hero heading is displayed in large bold text
- **AND** a "Contact us" call-to-action button is visible
- **AND** the hero occupies at least 80vh height

#### Scenario: About section shows founder info

- **GIVEN** the user scrolls to the About section
- **THEN** a founder heading is visible
- **AND** three bio paragraphs are displayed
- **AND** an "Upcoming Speaking Gigs" list shows at least 4 events
- **AND** 4 team member cards are displayed with names and descriptions

#### Scenario: Training section shows training programs

- **GIVEN** the user scrolls to the Training section
- **THEN** the section has a light gray background
- **AND** 6 training cards are displayed in a 2-column (mobile) / 3-column (desktop) grid
- **AND** each card has an image, heading, and description

#### Scenario: Services section shows service offerings

- **GIVEN** the user scrolls to the Services section
- **THEN** 6 service cards are displayed in a grid
- **AND** each card has a heading and description

#### Scenario: Gallery section displays images in grid

- **GIVEN** the user scrolls to the Gallery section
- **THEN** at least 12 gallery images are displayed
- **AND** images are arranged in a responsive grid (2→3→4 columns)
- **AND** images have rounded corners (border-radius 7px)
- **AND** images have hover opacity transition

#### Scenario: Testimonials section shows customer quotes

- **GIVEN** the user scrolls to the Testimonials section
- **THEN** at least 3 testimonial quotes are displayed
- **AND** each quote shows the author name

#### Scenario: Blog section shows recent posts

- **GIVEN** the user scrolls to the Blog section
- **THEN** 4 blog post cards are displayed
- **AND** each card has an image, date, title, excerpt, and "Read More" link

#### Scenario: Contact section has info and newsletter form

- **GIVEN** the user scrolls to the Contact section
- **THEN** address, phone, and email information are displayed
- **AND** a newsletter subscription form with email input and submit button is present

#### Scenario: Footer renders with all sections

- **GIVEN** the user scrolls to the Footer
- **THEN** the footer has a dark (#333333) background
- **AND** "About Us", "Quick Links", and "Follow Us" columns are present
- **AND** a newsletter subscription form is present
- **AND** a copyright line with Component Dock link is displayed

#### Scenario: Responsive layout adapts to mobile

- **GIVEN** the page is viewed on a 375px viewport
- **THEN** the navbar collapses to a hamburger menu
- **AND** multi-column grids collapse to single or two columns
- **AND** the hero heading font size reduces to 2rem

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
