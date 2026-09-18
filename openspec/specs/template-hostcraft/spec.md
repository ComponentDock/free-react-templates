# Template: Hostcraft (Web Hosting)

## Purpose

Recreation of ColorLib **Cohost** (slug: `cohost`).
Preview: https://preview.colorlib.com/theme/cohost/
ColorLib page: https://colorlib.com/wp/template/cohost/

**Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

**Category:** Web hosting / domain services — a clean, professional template with an isometric illustration hero, domain search form, feature grid, counter stats, pricing tiers, testimonials carousel, tabbed services, blog cards, partner logos, and a full footer with CTA banner.

---

## Replication Research

### Source: Live Preview DOM (https://preview.colorlib.com/theme/cohost/)

Fetched 2026-09-10. Structure extracted from rendered HTML:

1. **Navbar** — Dark-themed responsive navbar. Logo text "CoHost" left, hamburger toggle right. Nav links: Home, About, Domain, Hosting, Blog, Contact. CTA button "Get started" with purple border on the right. Transparent bg on desktop, black bg on mobile.
2. **Hero** — Full-height (750px) split layout. Left 60%: isometric illustration image. Right 40% (overlaid on desktop): subheading "Isometric Hosting" in purple, large heading "Design, Development, Hosting" (60px, weight 700), paragraph, "Get in touch" primary button.
3. **Domain Search** — Light bg section. Two-column: left = "Search Your Domain Name" heading + description; right = form with text input (.com selector dropdown + "Search" button). Domain price list below: .com $9.75, .net $9.50, .biz $8.95, .co $7.80, .me $7.95.
4. **Why Choose Us** — Light bg, centered heading + 6 service cards in 3x2 grid. Each card: icon (left or right alternating) + heading + description. Services: Super Fast Server, Daily Backups, Technical Services, Secure and Reliable, DNS Control, 24/7 Support.
5. **Counter Stats** — Purple bg (#6927ff). "More than 12,000 websites trusted hosted" subheading. 4 stat counters: 12,000 CMS Installation, 100 Awards Won, 10,000 Registered Domains, 9,000 Satisfied Customers.
6. **Our Main Services** — White bg. Two-column: left = illustration image + "Our Main Services" heading + description; right = 2x2 grid of service cards (Cloud VPS, Share, VPS, Dedicated) with borders and centered text.
7. **Pricing** — Light bg. "Our Best Pricing" heading. 4 pricing cards: Free ($0/mo), Startup ($19/mo), Premium ($49/mo), Pro ($99/mo). Each: plan name, price, excerpt, feature list, "Choose Plan" button.
8. **Testimonials** — White bg. "Customer Says" subheading + heading. Owl Carousel of testimonial cards: circular avatar image, quote icon, quote text, name, position.
9. **How It Works (Tabbed Services)** — Light bg. 3 tabs: Next gen VPS, Performance, Effectiveness. Each tab: illustration image (left) + heading + paragraphs + "Get in touch" button (right).
10. **Recent Blog** — Light bg. 3 blog cards: background-image thumbnail (275px height), meta sidebar (date, author, comments), heading.
11. **Partners** — Row of 5 partner logo images.
12. **Footer** — Dark bg. CTA banner at top: "Sign Up For Web Hosting Today!" + "$4.50/mo" price + "Get started now" button. 4-column footer: brand widget (purple bg, social icons), Useful Links, Navigational, Office (address, phone, email). Copyright at bottom.

### Design Tokens Extracted from CSS

| Token                       | Value                                             | Notes                                                                                     |
| --------------------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Font family (body)          | `"Work Sans", Arial, sans-serif`                  | Clean geometric sans-serif                                                                |
| Primary brand color         | `#6927ff`                                         | Vivid purple — nav CTA border, subheadings, counter bg, footer brand widget bg, nav hover |
| Primary button bg           | `#007bff`                                         | Bootstrap blue — primary buttons, "Choose Plan"                                           |
| Primary button hover        | `#0069d9`                                         | Darker blue on hover                                                                      |
| Hero subheading             | `#6927ff`                                         | Purple accent text                                                                        |
| Text color (primary)        | `#000`                                            | Headings, body text, nav links                                                            |
| Text color (muted)          | `#b3b3b3`                                         | Pricing excerpts, list items                                                              |
| Text color (white)          | `#fff`                                            | Counter section, footer                                                                   |
| Text color (meta)           | `#cccccc`                                         | Blog meta text                                                                            |
| Background (main)           | `#fff`                                            | Page background                                                                           |
| Background (light sections) | `#f8f9fa`                                         | Alternate section bg                                                                      |
| Background (counter)        | `#6927ff`                                         | Stats section, solid purple                                                               |
| Background (footer)         | `#333333` (ftco-bg-dark)                          | Dark footer                                                                               |
| Background (footer brand)   | `#6927ff`                                         | Purple widget bg in footer                                                                |
| Button radius               | `5px`                                             | Primary buttons                                                                           |
| Navbar CTA radius           | `5px`                                             | "Get started" nav button                                                                  |
| Pricing card                | `0` radius                                        | Sharp corners, white bg, 30px padding                                                     |
| User avatar                 | `50%`                                             | Circular testimonial avatars                                                              |
| Blog thumbnail              | `50% 50% 0 0`                                     | Rounded top corners on blog images                                                        |
| Hero heading                | `60px, weight 700, line-height 1.2`               | Large display heading                                                                     |
| Hero subheading             | `14px, weight 700, uppercase, letter-spacing 4px` | Small purple label                                                                        |
| Pricing price               | `50px, weight 700`                                | Large price number                                                                        |
| Pricing plan name           | `14px, weight 600, uppercase, letter-spacing 2px` | Plan heading                                                                              |
| Counter number              | `40px, weight 700, white`                         | Stat numbers                                                                              |
| Nav link                    | `13px, weight 500, uppercase, letter-spacing 1px` | Navigation links                                                                          |
| Services heading            | `16px`                                            | Feature card titles                                                                       |
| Blog heading                | `20px`                                            | Blog card titles                                                                          |
| Testimony name              | Bold                                              | Customer name                                                                             |
| Footer CTA heading          | `30px`                                            | Footer banner heading                                                                     |

### Visual Design Notes

- **Aesthetic:** Clean, professional, tech-corporate. Purple (#6927ff) as the dominant accent with Bootstrap blue (#007bff) for buttons. White and light gray alternating sections create rhythm.
- **Typography:** Single font (Work Sans) at multiple weights (300-900). Large hero heading (60px, weight 700). Small uppercase labels with wide letter-spacing for section markers.
- **Layout rhythm:** Alternating white and light gray (#f8f9fa) sections. Full-width purple counter/stats section breaks the pattern. Dark footer grounds the design.
- **Color accent pattern:** Purple for branding elements (subheadings, CTA borders, counter bg, footer widget). Blue for interactive buttons. Clean white cards on light backgrounds.
- **Cards/Components:** Pricing cards are sharp-cornered white boxes with clear hierarchy (plan name → price → features → CTA). Service cards use icon + text layout. Blog cards have rounded-top images.
- **Interactions:** Tab switching for services section. Owl Carousel for testimonials. Animated number counters. AOS scroll animations.

---

## Design Tokens (Tailwind Theme)

```css
@theme {
  --color-brand: #6927ff;
  --color-brand-dark: #5423c6;
  --color-primary: #007bff;
  --color-primary-hover: #0069d9;
  --color-text-primary: #000000;
  --color-text-muted: #b3b3b3;
  --color-text-meta: #cccccc;
  --color-text-white: #ffffff;
  --color-bg-main: #ffffff;
  --color-bg-light: #f8f9fa;
  --color-bg-counter: #6927ff;
  --color-bg-footer: #333333;
  --font-family-body: 'Work Sans', Arial, sans-serif;
}
```

---

## Requirements

### Requirement: Navigation Bar

The navbar SHALL display logo, navigation links, and a CTA button on desktop, and toggle a mobile menu on hamburger click.

#### Scenario: Desktop navbar displays all links and CTA

- **GIVEN** the user is on desktop viewport
- **THEN** the logo "Hostcraft" is visible on the left
- **AND** navigation links (Home, About, Domain, Hosting, Blog, Contact) are visible
- **AND** a "Get started" CTA button with purple border is visible

#### Scenario: Mobile navbar toggles on hamburger click

- **GIVEN** the user is on mobile viewport
- **WHEN** the user clicks the hamburger menu button
- **THEN** the navigation links become visible
- **AND** the navbar background is dark

### Requirement: Hero Section

The hero SHALL display a split layout with an illustration and heading text.

#### Scenario: Hero displays heading and illustration

- **GIVEN** the user loads the homepage
- **THEN** the subheading "Isometric Hosting" is visible in purple
- **AND** the heading "Design, Development, Hosting" is displayed prominently
- **AND** a "Get in touch" primary button is visible
- **AND** an illustration image is visible

### Requirement: Domain Search

The domain search section SHALL provide a form to search for domain availability.

#### Scenario: Domain search form is functional

- **GIVEN** the user scrolls to the domain search section
- **THEN** a heading "Search Your Domain Name" is visible
- **AND** a text input with placeholder "Enter your domain name..." is visible
- **AND** a domain extension dropdown (.com, .net, .biz, .co, .me) is visible
- **AND** a "Search" button is visible

#### Scenario: Domain prices are displayed

- **GIVEN** the user is on the domain search section
- **THEN** domain prices are listed (.com $9.75, .net $9.50, etc.)

### Requirement: Why Choose Us Features

The features section SHALL display 6 service cards in a grid.

#### Scenario: Six feature cards are displayed

- **GIVEN** the user scrolls to the features section
- **THEN** the heading "Why Choose Us" is visible
- **AND** 6 service cards are displayed in a grid
- **AND** each card has an icon, a title, and a description

### Requirement: Counter Statistics

The counter section SHALL display stats on a purple background.

#### Scenario: Stats are displayed on purple background

- **GIVEN** the user scrolls to the counter section
- **THEN** the subheading "More than 12,000 websites trusted hosted" is visible
- **AND** 4 stat counters are visible
- **AND** the section background is purple

### Requirement: Main Services

The services section SHALL show an illustration and 4 service cards.

#### Scenario: Services section shows illustration and cards

- **GIVEN** the user scrolls to the main services section
- **THEN** the heading "Our Main Services" is visible
- **AND** 4 service cards (Cloud VPS, Share, VPS, Dedicated) are displayed in a 2x2 grid

### Requirement: Pricing Plans

The pricing section SHALL display 4 pricing tiers.

#### Scenario: Four pricing tiers are displayed

- **GIVEN** the user scrolls to the pricing section
- **THEN** the heading "Our Best Pricing" is visible
- **AND** 4 pricing cards are visible: Free ($0/mo), Startup ($19/mo), Premium ($49/mo), Pro ($99/mo)
- **AND** each card has a "Choose Plan" button

### Requirement: Testimonials

The testimonials section SHALL display customer quotes with avatars.

#### Scenario: Testimonial cards display customer quotes

- **GIVEN** the user scrolls to the testimonials section
- **THEN** the subheading "Customer Says" is visible
- **AND** testimonial cards show: circular avatar, quote, name, position

### Requirement: Tabbed Services

The tabbed section SHALL switch between 3 service panels.

#### Scenario: Tab navigation switches content

- **GIVEN** the user scrolls to the how-it-works section
- **THEN** 3 tabs are visible: "Next gen VPS", "Performance", "Effectiveness"
- **AND** the first tab is active by default

#### Scenario: Clicking a tab changes the displayed content

- **GIVEN** the user is on the how-it-works section
- **WHEN** the user clicks the "Performance" tab
- **THEN** the Performance content panel becomes visible
- **AND** the other panels are hidden

### Requirement: Recent Blog

The blog section SHALL display 3 blog cards.

#### Scenario: Three blog cards are displayed

- **GIVEN** the user scrolls to the blog section
- **THEN** the heading "Recent Blog" is visible
- **AND** 3 blog cards are displayed in a row
- **AND** each card has: rounded-top thumbnail image, meta (date, author, comments), heading

### Requirement: Partner Logos

The partners section SHALL display partner logos in a row.

#### Scenario: Partner logos are displayed

- **GIVEN** the user scrolls to the partners section
- **THEN** 5 partner logo images are visible in a row

### Requirement: Footer

The footer SHALL display a CTA banner and multi-column information.

#### Scenario: Footer displays CTA banner and multi-column info

- **GIVEN** the user scrolls to the footer
- **THEN** a CTA banner shows "Sign Up For Web Hosting Today!" with price "$4.50/mo"
- **AND** a "Get started now" button is visible
- **AND** 4 footer columns are visible: Brand/Social, Useful Links, Navigational, Office
- **AND** social icons (Twitter, Facebook, Instagram) are visible
- **AND** office address, phone, and email are displayed
- **AND** a copyright line with Component Dock link is visible

#### Scenario: Footer brand widget has purple background

- **GIVEN** the user views the footer
- **THEN** the brand column has a purple (#6927ff) background
