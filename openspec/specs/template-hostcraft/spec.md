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

## Requirements (Gherkin)

### Navbar

```gherkin
Feature: Navigation Bar
  Scenario: Desktop navbar displays all links and CTA
    Given the user is on desktop viewport
    Then the logo "Hostcraft" is visible on the left
    And navigation links (Home, About, Domain, Hosting, Blog, Contact) are visible
    And a "Get started" CTA button with purple border is visible
    And the navbar background is transparent

  Scenario: Mobile navbar toggles on hamburger click
    Given the user is on mobile viewport
    When the user clicks the hamburger menu button
    Then the navigation links become visible
    And the navbar background is dark

  Scenario: Nav link hover shows purple color
    Given the user hovers over a navigation link
    Then the link color changes to purple
```

### Hero Section

```gherkin
Feature: Hero Section
  Scenario: Hero displays heading and illustration
    Given the user loads the homepage
    Then the subheading "Isometric Hosting" is visible in purple
    And the heading "Design, Development, Hosting" is displayed prominently
    And a "Get in touch" primary button is visible
    And an illustration image is visible on the right/left

  Scenario: Hero is full-height
    Given the user is on the homepage
    Then the hero section fills approximately 750px height
```

### Domain Search

```gherkin
Feature: Domain Search
  Scenario: Domain search form is functional
    Given the user scrolls to the domain search section
    Then a heading "Search Your Domain Name" is visible
    And a text input with placeholder "Enter your domain name..." is visible
    And a domain extension dropdown (.com, .net, .biz, .co, .me) is visible
    And a "Search" button is visible

  Scenario: Domain prices are displayed
    Given the user is on the domain search section
    Then domain prices are listed (.com $9.75, .net $9.50, etc.)
```

### Features (Why Choose Us)

```gherkin
Feature: Why Choose Us
  Scenario: Six feature cards are displayed
    Given the user scrolls to the features section
    Then the heading "Why Choose Us" is visible
    And 6 service cards are displayed in a grid
    And each card has an icon, a title, and a description
    And the section has a light background

  Scenario: Feature cards alternate icon placement
    Given the user views the feature cards
    Then odd cards show the icon on the right
    And even cards show the icon on the left
```

### Counter Stats

```gherkin
Feature: Counter Statistics
  Scenario: Stats are displayed on purple background
    Given the user scrolls to the counter section
    Then the subheading "More than 12,000 websites trusted hosted" is visible
    And 4 stat counters are visible
    And the section background is purple

  Scenario: Stat counters show correct values
    Given the user views the counter section
    Then the counters display: 12000 CMS Installation, 100 Awards Won, 10000 Registered Domains, 9000 Satisfied Customers
    And counter numbers are white and large
```

### Main Services

```gherkin
Feature: Main Services
  Scenario: Services section shows illustration and cards
    Given the user scrolls to the main services section
    Then the heading "Our Main Services" is visible
    And an illustration image is visible on the left
    And 4 service cards (Cloud VPS, Share, VPS, Dedicated) are displayed in a 2x2 grid
    And each card has a border and centered text
```

### Pricing

```gherkin
Feature: Pricing Plans
  Scenario: Four pricing tiers are displayed
    Given the user scrolls to the pricing section
    Then the heading "Our Best Pricing" is visible
    And 4 pricing cards are visible: Free ($0/mo), Startup ($19/mo), Premium ($49/mo), Pro ($99/mo)
    And each card shows a feature list
    And each card has a "Choose Plan" button

  Scenario: Pricing cards have consistent layout
    Given the user views the pricing cards
    Then each card has: plan name (uppercase), price (large), excerpt, feature list, CTA button
    And cards have white background with 30px padding
```

### Testimonials

```gherkin
Feature: Testimonials
  Scenario: Testimonial carousel displays customer quotes
    Given the user scrolls to the testimonials section
    Then the subheading "Customer Says" is visible
    And testimonial cards show: circular avatar, quote, name, position
    And the carousel auto-scrolls through testimonials
```

### How It Works (Tabbed)

```gherkin
Feature: Tabbed Services
  Scenario: Tab navigation switches content
    Given the user scrolls to the how-it-works section
    Then 3 tabs are visible: "Next gen VPS", "Performance", "Effectiveness"
    And the first tab is active by default
    And each tab shows an illustration + heading + description + CTA button

  Scenario: Clicking a tab changes the displayed content
    Given the user is on the how-it-works section
    When the user clicks the "Performance" tab
    Then the Performance content panel becomes visible
    And the other panels are hidden
```

### Blog

```gherkin
Feature: Recent Blog
  Scenario: Three blog cards are displayed
    Given the user scrolls to the blog section
    Then the heading "Recent Blog" is visible
    And 3 blog cards are displayed in a row
    And each card has: rounded-top thumbnail image, meta (date, author, comments), heading
```

### Partners

```gherkin
Feature: Partner Logos
  Scenario: Partner logos are displayed
    Given the user scrolls to the partners section
    Then 5 partner logo images are visible in a row
```

### Footer

```gherkin
Feature: Footer
  Scenario: Footer displays CTA banner and multi-column info
    Given the user scrolls to the footer
    Then a CTA banner shows "Sign Up For Web Hosting Today!" with price "$4.50/mo"
    And a "Get started now" button is visible
    And 4 footer columns are visible: Brand/Social, Useful Links, Navigational, Office
    And social icons (Twitter, Facebook, Instagram) are visible
    And office address, phone, and email are displayed
    And a copyright line is visible at the bottom

  Scenario: Footer brand widget has purple background
    Given the user views the footer
    Then the brand column has a purple (#6927ff) background
```

---

## Verification Checklist

- [ ] Navbar is transparent on desktop, dark on mobile
- [ ] Nav links turn purple on hover
- [ ] "Get started" CTA has purple border, white text
- [ ] Hero is ~750px height with illustration + text overlay
- [ ] Hero subheading is purple, uppercase, letter-spaced
- [ ] Hero heading is large (60px), bold
- [ ] Domain search has input + dropdown + search button
- [ ] Domain prices are listed below the form
- [ ] Features section has 6 cards in alternating layout
- [ ] Counter section has purple background with 4 stats
- [ ] Counter numbers are white, large (40px)
- [ ] Main services has illustration + 4 bordered cards
- [ ] Pricing section has 4 cards: Free, Startup, Premium, Pro
- [ ] Pricing cards have sharp corners (0 radius), white bg
- [ ] Testimonials carousel shows avatar + quote + name
- [ ] Tabbed section switches between 3 service panels
- [ ] Blog section shows 3 cards with rounded-top thumbnails
- [ ] Partner logos displayed in a row
- [ ] Footer CTA banner with price and button
- [ ] Footer has 4 columns: brand (purple bg), links, nav, office
- [ ] Footer social icons visible
- [ ] All fonts are Work Sans
- [ ] Primary buttons are blue (#007bff) with 5px radius
- [ ] Mobile responsive (hamburger nav, stacked layouts)
