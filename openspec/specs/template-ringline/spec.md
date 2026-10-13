# Template: Ringline (Call Center / Customer Support)

## Purpose

Recreation of ColorLib **Callcenter** template
(preview: https://preview.colorlib.com/theme/callcenter/,
source: https://colorlib.com/wp/template/callcenter/).

Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript (strict).
Name: **Ringline** (`apps/ringline`, package `@free-react-templates/ringline`).

## Design tokens (extracted from live preview)

| Token                | Value                          | Usage                                           |
| -------------------- | ------------------------------ | ----------------------------------------------- |
| Brand primary        | `#8490ff` (periwinkle blue)    | CTA buttons, links, highlights, footer accents  |
| Accent cyan          | `#4cd3e3`                      | Skill-bar fills, secondary accents              |
| Accent blue          | `#38a4ff`                      | Skill-bar fills                                 |
| Accent yellow        | `#f4e700`                      | Skill-bar fills                                 |
| Accent red           | `#f44a40`                      | Skill-bar fills                                 |
| Section bg (light)   | `#f9f9ff`                      | Feature, service, testimonial section backgrounds|
| Footer bg            | `#222`                         | Footer area background                          |
| Dark bg              | `#111111`                      | Footer bottom strip                             |
| Text primary         | `#111`                         | Headings, body                                  |
| Text muted           | `#777`                         | Body text, captions                             |
| Font family          | `"Poppins", sans-serif`        | All text                                        |
| Button radius        | `20px` (`.genric-btn.circle`)  | Primary CTA buttons                             |
| Default btn radius   | `3px`                          | Default buttons                                 |
| Section gap          | `section-gap` class (~80px)    | Vertical spacing between sections               |

## Section structure (from live DOM, order preserved)

1. **Navbar** — Logo left ("Call Center" wordmark), nav links right: Home, Feature, We Offer, About, Contact, Pages (dropdown). Sticky/top bar, white bg.
2. **Banner/Hero** — Split layout: left image (call center agent photo + blue watercolor brush overlay), right text: subtitle "Discover the Colorful World", h1 "Efficiency Booster", body copy, CTA button "Discover Now" (blue rounded pill).
3. **Features (3-col)** — "24/7 Round the Clock", "Online Support", "Handling All Issues". Each: icon, h4 title, description. Light #f9f9ff bg.
4. **Testimonials** — Owl-carousel slider. Each testimonial: avatar photo, h4 name, body quote, star rating. White bg with blue accent.
5. **Services (6-grid)** — "Our Offered Services" heading. 6 service cards in 3×2 grid: "Content Synchronization", "Strategy & Research", "Optimization", "Market Analysis", "Finance & Consultancy", "Technical Skills". Each: icon, h4, description. #f9f9ff bg.
6. **Stats/Counters** — Dark bg strip with 4 counter items: "2536 Happy Clients", "6784 Projects", "1059 Cups Coffee", "2239 Active Clients". Animated count-up numbers.
7. **Why Choose Us (Testimonial carousel)** — "Some Awesomeness that should share" heading. Slide testimonials with avatar, name, description. Includes skill bars: "Expert Technicians" 90%, "Professional Service" 80%, "Great Support" 70%, "Technical Skills" 85%, "Highly Recommended" 95%, "Positive Reviews" 60%.
8. **About/CTA Split** — Left: "Responsible Customer Support" text block. Right: "We Believe that Interior beautifies the Total Architecture" with decorative blue brush-stroke graphic. #f9f9ff bg.
9. **Contact** — "If you need, Just drop us a line". Contact form (name, email, subject, message) + Google Maps embed placeholder. White bg.
10. **Footer** — 4-column: About Us, Contact Us, Newsletter (email input + "Subscribe" button), social icons. Dark #222 bg. Footer bottom: copyright + social links strip.

## Requirements

### Navbar

#### Scenario: Sticky navbar with logo and navigation links

- **GIVEN** the user loads the Ringline page
- **THEN** a navigation bar is visible at the top
- **AND** the logo reads "Ringline" (or equivalent branding)
- **AND** links for Home, Feature, We Offer, About, and Contact are present
- **AND** the navbar is sticky (stays on scroll)

#### Scenario: Navbar links navigate to sections

- **GIVEN** the user clicks "Feature" in the navbar
- **THEN** the page scrolls to the Features section

### Banner / Hero

#### Scenario: Hero section displays with split layout

- **GIVEN** the user views the page
- **THEN** a hero section is visible
- **AND** it contains a subtitle "Discover the Colorful World"
- **AND** an h1 heading "Efficiency Booster"
- **AND** body text describing the service
- **AND** a "Discover Now" CTA button with blue rounded-pill style

#### Scenario: Hero image area shows call center visual

- **GIVEN** the user views the hero section
- **THEN** an image area is visible on the left side
- **AND** it uses a placeholder call-center-themed image from picsum

### Features

#### Scenario: Three feature cards in a row

- **GIVEN** the user scrolls to the Features section
- **THEN** 3 feature cards are displayed side by side
- **AND** each card has an icon, a title, and a description
- **AND** the titles are "Online Support", "24/7 Round the Clock", "Handling All Issues"

#### Scenario: Feature section has light background

- **GIVEN** the user views the Features section
- **THEN** the background color is #f9f9ff

### Testimonials (Carousel)

#### Scenario: Testimonial carousel with multiple items

- **GIVEN** the user scrolls to the Testimonials section
- **THEN** at least 2 testimonial items are visible
- **AND** each has an avatar image, name heading, and quote text
- **AND** navigation dots or arrows allow cycling through items

### Services

#### Scenario: Six service cards in grid layout

- **GIVEN** the user scrolls to the Services section
- **THEN** 6 service cards are displayed in a 3-column grid
- **AND** each card has an icon, title, and description
- **AND** the section heading reads "Our Offered Services"

#### Scenario: Services section has light background

- **GIVEN** the user views the Services section
- **THEN** the background color is #f9f9ff

### Stats / Counters

#### Scenario: Animated counter strip

- **GIVEN** the user scrolls to the Stats section
- **THEN** 4 counter items are displayed in a row
- **AND** each shows a number with a label
- **AND** the numbers animate (count up) on scroll into view
- **AND** the section has a dark/contrasting background

#### Scenario: Counter items show expected labels

- **GIVEN** the user views the Stats section
- **THEN** labels include "Happy Clients", "Projects", "Cups Coffee", "Active Clients"

### Why Choose Us

#### Scenario: Why Choose Us section with skill bars

- **GIVEN** the user scrolls to the "Why Choose Us" section
- **THEN** a heading "Some Awesomeness that should share" is visible
- **AND** at least 2 testimonial slides are present
- **AND** skill bars display with percentage values and labels
- **AND** skill bar labels include "Expert Technicians", "Professional Service"

### About / CTA Split

#### Scenario: About section with split layout

- **GIVEN** the user scrolls to the About section
- **THEN** a two-column layout is displayed
- **AND** the left column has a heading "Responsible Customer Support"
- **AND** the right column has heading text about interior architecture
- **AND** a decorative blue brush-stroke visual is present

### Contact

#### Scenario: Contact form with fields

- **GIVEN** the user scrolls to the Contact section
- **THEN** a heading "If you need, Just drop us a line" is visible
- **AND** a form with Name, Email, Subject, and Message fields is present
- **AND** a submit button is present

#### Scenario: Contact form validation

- **GIVEN** the user submits the contact form with empty fields
- **THEN** validation errors appear for required fields

### Footer

#### Scenario: Footer with columns and newsletter

- **GIVEN** the user scrolls to the footer
- **THEN** 4 columns are visible: About Us, Contact Us, Newsletter, Social
- **AND** the Newsletter column has an email input and Subscribe button
- **AND** the footer background is dark (#222)

#### Scenario: Footer links to Component Dock

- **GIVEN** the user inspects the footer
- **THEN** a link to "https://www.componentdock.com/" is present
- **AND** it is labeled "Component Dock"

## Verification checklist

- [ ] All sections present in the same order as the ColorLib original
- [ ] Brand color `#8490ff` used for CTA buttons, links, highlights
- [ ] Font family Poppins applied site-wide
- [ ] Button pill shape (border-radius: 20px) on primary CTAs
- [ ] Section backgrounds match (#f9f9ff for light sections, #222 for footer)
- [ ] Counter animation works on scroll
- [ ] Testimonial carousel cycles through items
- [ ] Skill bars render with correct percentages
- [ ] Contact form validates required fields
- [ ] Footer links to componentdock.com
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] Placeholder images via picsum.photos/seed/ringline-*
- [ ] `public/CNAME` contains `ringline.free.componentdock.com`
- [ ] `homepage` in package.json is `https://ringline.free.componentdock.com`
