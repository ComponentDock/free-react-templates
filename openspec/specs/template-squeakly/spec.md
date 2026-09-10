# Template: Squeakly (Cleaning Company Landing Page)

## Purpose

Recreation of ColorLib **Cleanex** (`https://colorlib.com/wp/template/cleanex/`),
a cleaning company landing page template with hero, booking form, services,
how-it-works, pricing, testimonials, blog, and footer sections.

- **Source slug:** `cleanex`
- **Preview URL:** `https://preview.colorlib.com/theme/cleanex/`
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **New name:** Squeakly (`apps/squeakly`, `@free-react-templates/squeakly`)
- **Deploy target:** `squeakly.free.componentdock.com`

## Design Tokens

Extracted from `https://preview.colorlib.com/theme/cleanex/css/style.css` and
live preview DOM analysis.

| Token | Value | Notes |
|---|---|---|
| Brand primary | `#225ae1` | Button primary bg, links, accents |
| Brand secondary | `#fedd32` | Gold/yellow accent (CTA highlights) |
| Font family | `"Roboto", Arial, sans-serif` | Google Font, loaded via `<link>` |
| Button primary bg | `#225ae1` | `border: 1px solid #225ae1; color: #fff` |
| Button primary hover | `#1947b7` | Slightly darker blue |
| Button secondary | white text, dark bg or outline | Hero CTA uses btn-secondary |
| Border radius | `0` default (sharp edges), `30px` for pill shapes, `10px`/`16px` for cards | Mix of sharp and rounded |
| Section bg (default) | `#fff` (white) | |
| Section bg (light) | `#f8f9fa` | Testimonials section |
| Counter/hero bg | Background images with dark overlay | `background-image` + `.overlay` |
| Footer bg | Background image with overlay | Dark footer with white text |
| Icons | Flaticon (`flaticon-*`) | Replace with `lucide-react` |

## Section Order (from live preview DOM)

1. **Top Bar** — Phone, email, social links on a light gray strip
2. **Navbar** — Logo left, links right: Home, About, Pricing, Services, Blog, Contact; dark bg, sticky
3. **Hero** — Full-height (`js-fullheight`) with bg image + dark overlay; left-aligned: subheading "Introducing Squeakly", h1 "A Clean Home is A Happy Home", body text, CTA button "Request A Quote"
4. **About + Booking Form** — Two-column layout: left has booking form (First Name, Last Name, Service dropdown, Date, Time, Phone, Email, Message textarea, Submit button); right has "About Company" text + "Most Awarded Cleaning Company Since 2000" heading + description
5. **Why Choose Us** — 4-column feature grid with icons: Highly Trained Staff, Best Equipments, 100% Warranty, Fast & Effective Service
6. **Industries We Serve** — Two-column checklist: Airport & Airlines, House & Offices, Auto Dealerships, Sports & Fitness Centers, Schools & Universities, Commercial Building, Medical Facilities, Entertainment Venues
7. **Our Services** — 3 cards with images: Residential Cleaning ($50), Commercial Cleaning ($50), Construction Cleaning ($50); each with image, title, price, chevron link
8. **How it Works** — 3 centered steps with icons + numbers: Pick a suitable plan (01), Set your schedule (02), Get things done (03)
9. **Counter/Stats** — Full-width bg image + overlay; 4 stats: 4,800 Projects Completed, 14,000 Employees, 200 Clients, 71,650 Awards
10. **Testimonials** — Carousel on light bg: avatar circle + name + location + quote text
11. **Pricing** — 4-tier card grid: Basic ($29/session), Standard ($59/session), Premium ($79/session), Ultimate ($89.50/session); each with feature list + Sign Up button
12. **CTA Banner** — Full-width: "Need to clean your house? Just hire us!" with phone button + email button
13. **Blog** — 3-column grid: image card + date/author/comments meta + title + excerpt
14. **Footer** — Dark bg with image overlay; columns: Logo + social, Recent Posts (3 thumbnail + title), Explore links, Contact info (address, phone, email); copyright bar at bottom

## Gherkin Requirements

### Navbar
```gherkin
Feature: Squeakly Navbar

  Scenario: Logo and navigation links render
    Given the page loads
    Then I see the "Squeakly" logo on the left
    And I see navigation links: Home, About, Pricing, Services, Blog, Contact
    And the navbar has a dark background

  Scenario: Navbar is sticky on scroll
    Given I scroll down the page
    Then the navbar remains fixed at the top of the viewport
```

### Hero
```gherkin
Feature: Squeakly Hero

  Scenario: Hero section displays headline and CTA
    Given the page loads
    Then I see a full-height hero section with a background image
    And I see the subheading "Introducing Squeakly"
    And I see the headline "A Clean Home is A Happy Home"
    And I see a "Request A Quote" CTA button

  Scenario: Hero has dark overlay on background
    Given the page loads
    Then the hero background image has a semi-transparent dark overlay
```

### About + Booking Form
```gherkin
Feature: Squeakly Booking Form

  Scenario: Booking form renders with all fields
    Given the page loads
    Then I see a "Book A Service" form
    And the form has fields: First Name, Last Name, Service (dropdown), Date, Time, Phone, Email, Message
    And the form has a Submit button

  Scenario: Service dropdown has cleaning options
    Given the booking form is visible
    When I open the service dropdown
    Then I see options: Residential Cleaning, Commercial Cleaning, Construction Cleaning, Windows Cleaning, Carpet Cleaning, Furniture Cleaning
```

### Why Choose Us
```gherkin
Feature: Squeakly Why Choose Us

  Scenario: Four feature cards render
    Given the page loads
    Then I see 4 feature cards with icons
    And the cards are: Highly Trained Staff, Best Equipments, 100% Warranty, Fast & Effective Service
```

### Industries We Serve
```gherkin
Feature: Squeakly Industries

  Scenario: Industry checklist renders
    Given the page loads
    Then I see "Industries We Serve" heading
    And I see 8 industries in a 2-column checklist:
      | Industry |
      | Airport & Airlines |
      | House & Offices |
      | Auto Dealerships |
      | Sports & Fitness Centers |
      | Schools & Universities |
      | Commercial Building |
      | Medical Facilities |
      | Entertainment Venues |
```

### Services
```gherkin
Feature: Squeakly Services

  Scenario: Three service cards render
    Given the page loads
    Then I see "Offering Best Cleaning Services" heading
    And I see 3 service cards: Residential Cleaning, Commercial Cleaning, Construction Cleaning
    And each card shows "Starting from $50"
    And each card has a chevron icon link
```

### How it Works
```gherkin
Feature: Squeakly How it Works

  Scenario: Three steps render
    Given the page loads
    Then I see "Get Amazing Cleaning in 3 Simple Ways" heading
    And I see 3 numbered steps: Pick a suitable plan, Set your schedule, Get things done
    And each step has a step number (01, 02, 03) and icon
```

### Counter/Stats
```gherkin
Feature: Squeakly Stats Counter

  Scenario: Stats section displays counters
    Given the page loads
    Then I see a full-width section with background image
    And I see 4 stat items:
      | Value | Label |
      | 4,800 | Projects Completed |
      | 14,000 | Employees |
      | 200 | Clients |
      | 71,650 | Awards |
```

### Testimonials
```gherkin
Feature: Squeakly Testimonials

  Scenario: Testimonial carousel renders
    Given the page loads
    Then I see a "Testimonial" section on light background
    And I see a carousel with testimonial cards
    And each card shows: avatar image, name, location, quote text
```

### Pricing
```gherkin
Feature: Squeakly Pricing

  Scenario: Four pricing tiers render
    Given the page loads
    Then I see "Our Plans & Pricing" heading
    And I see 4 pricing cards:
      | Plan | Price | Features |
      | Basic | $29/session | 1 Bathroom cleaning, Up to 3 bedrooms, 1 Livingroom, Carpet Cleaning, Dining Room |
      | Standard | $59/session | 1 Bathroom cleaning, Up to 3 bedrooms, 1 Livingroom, Carpet Cleaning, Dining Room |
      | Premium | $79/session | 1 Bathroom cleaning, Up to 3 bedrooms, 1 Livingroom, Carpet Cleaning, Dining Room |
      | Ultimate | $89.50/session | 1 Bathroom cleaning, Up to 3 bedrooms, 1 Livingroom, Carpet Cleaning, Dining Room |
    And each card has a "Sign Up" button
```

### CTA Banner
```gherkin
Feature: Squeakly CTA Banner

  Scenario: CTA banner displays call to action
    Given the page loads
    Then I see a full-width CTA section
    And the heading reads "Need to clean your house? Just hire us!"
    And I see a phone number button and an email button
```

### Blog
```gherkin
Feature: Squeakly Blog

  Scenario: Three blog post cards render
    Given the page loads
    Then I see a "Recent Post" heading
    And I see 3 blog cards in a 3-column grid
    And each card has: image, date, author, comment count, title, excerpt
```

### Footer
```gherkin
Feature: Squeakly Footer

  Scenario: Footer renders with all columns
    Given the page loads
    Then I see a dark footer with background image
    And I see the Squeakly logo with description and social icons (Twitter, Facebook, Instagram)
    And I see a "Recent Posts" column with 3 thumbnail posts
    And I see an "Explore" links column
    And I see a "Have a Questions?" contact column with address, phone, email
    And I see a copyright bar at the bottom

  Scenario: Footer links to Component Dock
    Given the footer is visible
    Then the copyright text links to https://www.componentdock.com/
```

## Verification Checklist

- [ ] Section order matches live preview 1:1 (14 sections)
- [ ] Brand primary color `#225ae1` used for buttons and accents
- [ ] Font is Roboto via Google Fonts `<link>`
- [ ] Booking form has all 8 fields + service dropdown with 6 options
- [ ] Pricing shows 4 tiers with correct prices
- [ ] Counter section shows 4 stats with correct numbers
- [ ] All placeholder images use `picsum.photos` with deterministic seeds
- [ ] Icons use `lucide-react` (replacing Flaticon)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] `public/CNAME` contains `squeakly.free.componentdock.com`
- [ ] `homepage` in `package.json` is `https://squeakly.free.componentdock.com`
- [ ] No references to "ColorLib" or "Cleanex" in app code
- [ ] 100% test coverage on new code
