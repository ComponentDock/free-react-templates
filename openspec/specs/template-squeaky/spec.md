# Template: Squeaky (Cleaning Services Landing)

## Purpose

Recreation of ColorLib "Cleanex" — a cleaning company website template.

- **Source slug:** `cleanex`
- **Preview URL:** https://preview.colorlib.com/theme/cleanex/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/cleanex-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Category:** Cleaning Services / Home Services

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) and DOM analysis.

### Colors

| Token              | Value     | Usage                                                     |
| ------------------ | --------- | --------------------------------------------------------- |
| `brand-primary`    | `#225ae1` | Primary blue — overlays, pricing header, process section, flow backgrounds |
| `brand-accent`     | `#fedd32` | Yellow — pricing price text, subheading accents           |
| `brand-dark`       | `#161655` | Navy — service card titles, dark text on light bg         |
| `brand-footer`     | `#1947b7` | Footer overlay blue (opacity 0.9 over image)             |
| `btn-primary`      | `#007bff` | Bootstrap primary button (submit, phone, email)          |
| `btn-secondary`    | `#6c757d` | Bootstrap secondary — "Request A Quote" nav button       |
| `text-body`        | `#212529` | Main body text color                                      |
| `text-light`       | `rgba(255,255,255,0.8)` | Hero, counter, CTA, footer text              |
| `bg-light`         | `#f7f7f7` / `#fafafa` | Light section backgrounds (testimonials, blog)   |
| `bg-service-card`  | `#f4f5f0` | Off-white for service card button bg                     |

### Typography

| Token          | Value                                |
| -------------- | ------------------------------------ |
| Font family    | `"Roboto", Arial, sans-serif`        |
| Heading weight | 600–700                              |
| Body weight    | 400                                  |
| Subheading     | 14px, 700, uppercase, with left line accent (40px line + border) |
| Service h3     | 22px, 500                            |

### Spacing & Shape

| Token         | Value                                         |
| ------------- | --------------------------------------------- |
| Card radius   | 5px (service cards, pricing)                  |
| Button radius | Standard Bootstrap (default — ~4px)           |
| Service icon  | 60×60px, circular, radial gradient border     |
| Process icon  | 80×80px, circular                             |
| Pricing price | 28px, 900 weight, yellow `#fedd32`            |
| Counter stat  | 30px, 600 weight, white                       |

### Background Patterns

- Hero: full-height background image with dark overlay
- Counter section: parallax background image
- Process ("How it Works") section: solid blue overlay `#225ae1` at 0.9 opacity
- Testimonials: light gray `bg-light`
- CTA section: blue overlay `#225ae1` at 0.8 opacity over background image
- Footer: blue overlay `#1947b7` at 0.9 opacity over background image
- Blog section: light gray `bg-light`

## Section Structure (in page order)

1. **Navbar** — Dark/transparent over hero, brand logo text, nav links (Home, About, Pricing, Services, Blog, Contact), "Request A Quote" secondary button
2. **Hero** — Full-height background image, dark overlay, subheading "Professional Cleaning", h1 "A Clean Home is A Happy Home", body text, CTA buttons
3. **About + Appointment Form** — Split layout: left = booking form (first name, last name, service dropdown, phone, date, time, submit), right = company description text + 4 feature icons (Trained Staff, Best Equipment, 100% Warranty, Fast & Effective)
4. **Counter Stats** — Parallax background, 4 animated stats (4,800 Projects, 14,000 Employees, 200 Clients, 71,650 Awards) with flaticon icons
5. **Services Grid** — 3×2 grid of service cards, each with background image, title, starting price, circular arrow button (Residential, Commercial, Construction, Windows, Carpet, Furniture)
6. **3-Step Process** — "How it Works" heading on blue background, 3 numbered steps with circular icons (Pick Plan → Set Schedule → Get Things Done)
7. **Testimonials** — Carousel with customer avatar, name, location, quote text; light bg
8. **Pricing** — 4 cards (Basic $29, Standard $59, Premium $79, Ultimate $89.50), blue header bar, yellow price, feature list, "Sign Up" button; Premium highlighted
9. **CTA** — "Need to clean your house? Just hire us!" on blue overlay with contact info (phone + email buttons)
10. **Blog** — 3 blog post cards with image, date, author, comment count, title
11. **Footer** — Logo + description, social links (Twitter/Facebook/Instagram), Recent Posts with thumbnails, contact info (phone, email, address); "Made with Component Dock"

## Requirements

### Navbar

Feature: Navbar

#### Scenario: Renders navigation links

- **GIVEN** the page loads
- **THEN** a navigation bar is visible
- **AND** it contains links: Home, About, Pricing, Services, Blog, Contact
- **AND** a "Request A Quote" button is present

#### Scenario: Responsive collapse

- **GIVEN** the viewport is mobile width
- **THEN** the nav collapses into a hamburger menu
- **AND** tapping the hamburger reveals the nav links

### Hero

Feature: Hero Section

#### Scenario: Displays headline and CTA

- **GIVEN** the page loads
- **THEN** the hero shows a subheading "Professional Cleaning"
- **AND** an h1 "A Clean Home is A Happy Home"
- **AND** descriptive paragraph text
- **AND** CTA button(s) visible

#### Scenario: Full-height background

- **GIVEN** the page loads
- **THEN** the hero section spans the full viewport height
- **AND** a background image is displayed with a dark overlay

### About + Appointment Form

Feature: About and Appointment Form

#### Scenario: Split layout renders correctly

- **GIVEN** the page loads
- **THEN** the about section shows a split layout
- **AND** the left side contains a booking form
- **AND** the right side shows company description text

#### Scenario: Booking form fields

- **GIVEN** the about section is visible
- **THEN** the form has fields: First Name, Last Name, Service Select, Phone, Date, Time
- **AND** a "Submit Details" button is present

#### Scenario: Feature highlights

- **GIVEN** the about section is visible
- **THEN** 4 feature items are displayed: Highly Trained Staff, Best Equipments, 100% Warranty, Fast & Effective Service
- **AND** each feature has an icon and description text

### Counter Stats

Feature: Counter Stats

#### Scenario: Displays animated stats

- **GIVEN** the page loads
- **THEN** the counter section shows 4 stat blocks
- **AND** each stat has a number and label
- **AND** the numbers animate on scroll into view

### Services Grid

Feature: Services Grid

#### Scenario: Displays 6 service cards in a grid

- **GIVEN** the page loads
- **THEN** 6 service cards are displayed in a 3-column grid
- **AND** each card has a background image, title, starting price, and arrow button
- **AND** the service types are: Residential, Commercial, Construction, Windows, Carpet, Furniture

#### Scenario: Service card hover

- **GIVEN** a service card is visible
- **WHEN** the user hovers over it
- **THEN** the card lifts slightly with a shadow transition

### 3-Step Process

Feature: 3-Step Process

#### Scenario: Displays 3 numbered steps

- **GIVEN** the page loads
- **THEN** a "How it Works" section is visible with blue background
- **AND** 3 steps are displayed: "Pick a suitable plan", "Set your schedule", "Get things done"
- **AND** each step has a numbered circle icon and description text

### Testimonials

Feature: Testimonials

#### Scenario: Carousel of testimonials

- **GIVEN** the page loads
- **THEN** a testimonials section is visible on light background
- **AND** testimonial cards show customer avatar, name, location, and quote
- **AND** the testimonials cycle via carousel navigation

#### Scenario: Carousel navigation

- **GIVEN** the testimonial carousel is visible
- **WHEN** the user clicks next/prev
- **THEN** the displayed testimonial changes

### Pricing

Feature: Pricing

#### Scenario: Displays 4 pricing tiers

- **GIVEN** the page loads
- **THEN** 4 pricing cards are visible: Basic, Standard, Premium, Ultimate
- **AND** each card has a blue header with tier name
- **AND** each card shows a yellow price with "/ session" suffix
- **AND** each card lists features with checkmarks
- **AND** a "Sign Up" button is present on each card

#### Scenario: Premium card is highlighted

- **GIVEN** the pricing section is visible
- **THEN** the Premium card has an "active" visual treatment

### CTA Section

Feature: Call to Action

#### Scenario: Displays CTA with contact options

- **GIVEN** the page loads
- **THEN** a CTA section is visible with blue overlay
- **AND** it shows "Need to clean your house? Just hire us!"
- **AND** phone number and email buttons are present

### Blog

Feature: Blog Section

#### Scenario: Displays recent blog posts

- **GIVEN** the page loads
- **THEN** 3 blog post cards are visible
- **AND** each card has an image, date, author, comment count, and title

### Footer

Feature: Footer

#### Scenario: Displays footer content

- **GIVEN** the page loads
- **THEN** a footer is visible with blue overlay background
- **AND** it contains the logo and description text
- **AND** social media links (Twitter, Facebook, Instagram) are present
- **AND** recent posts with thumbnails are shown
- **AND** contact information (phone, email, address) is displayed
- **AND** a "Made with Component Dock" link is present

## Verification checklist

- [ ] Navbar renders all nav links and CTA button
- [ ] Navbar collapses to hamburger on mobile
- [ ] Hero displays full-height with background image and overlay
- [ ] Hero shows subheading, h1, paragraph, CTA
- [ ] About section shows split layout with form and description
- [ ] Booking form has all fields: name, service select, phone, date, time
- [ ] 4 feature highlights render with icons
- [ ] Counter section shows 4 stats with animated numbers
- [ ] Services grid shows 6 cards in 3×2 layout
- [ ] Service cards have image, title, price, arrow button
- [ ] Service cards have hover lift effect
- [ ] 3-step process section renders on blue background
- [ ] Each step has numbered icon, title, description
- [ ] Testimonials carousel displays and cycles
- [ ] Pricing shows 4 tiers with blue headers and yellow prices
- [ ] Premium card is visually highlighted
- [ ] CTA section displays with blue overlay and contact info
- [ ] Blog section shows 3 post cards
- [ ] Footer renders with logo, social links, recent posts, contact
- [ ] Footer includes "Made with Component Dock" link
- [ ] All colors match design tokens
- [ ] Roboto font is loaded and used
- [ ] Responsive at mobile/tablet/desktop breakpoints
- [ ] 100% test coverage for all components
