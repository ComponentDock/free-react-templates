# Template: Blitz (Cleaning Company)

## Purpose

Recreation of ColorLib's **Cleanex** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app.

- **Source**: https://colorlib.com/wp/template/cleanex/
- **Preview**: https://preview.colorlib.com/theme/cleanex/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/cleanex-template.jpg
- **New name**: `blitz` (apps/blitz, @free-react-templates/blitz)

## Design tokens (extracted from live preview CSS)

| Token | Value | Notes |
|-------|-------|-------|
| `--brand` | `#225ae1` | Primary blue — hover states, icon highlights, CTA accents |
| `--accent` | `#fedd32` | Yellow/gold — accent highlights, section counter numbers |
| `--dark-navy` | `#161655` | Dark navy — overlay text contrast |
| `--text-primary` | `#212529` | Body text |
| `--text-secondary` | `#6c757d` | Muted text, secondary buttons |
| `--text-white` | `#ffffff` | Text on dark/image backgrounds |
| `--bg-white` | `#ffffff` | Default section background |
| `--bg-light` | `#f7f7f7` | Light section backgrounds (testimonials, blog, about) |
| `--bg-gray` | `#f8f9fa` | Top bar, alternating sections |
| `--overlay-dark` | `rgba(0,0,0,0.5)` | Image overlay on hero, counter, flow, CTA |
| Font family | `Roboto, Arial, sans-serif` | Google Fonts — weights 300, 400, 500, 700 |
| Button radius | Rounded (Bootstrap `.btn-secondary` default, ~4px) | Gray default, blue on hover |
| CTA button | `.btn-secondary` → gray `#6c757d`, hover `#5a6268` | Primary action style |
| Services card hover | Blue border-left `#225ae1`, shadow | Hover lifts card up |

## Section structure (order from live preview)

1. **Top Bar** — email, phone, hours, social icons (light gray bg)
2. **Navbar** — dark bg, logo "Blitz", nav links (Home, About, Pricing, Services, Blog, Contact), CTA button "Request A Quote"
3. **Hero** — full-width background image, dark overlay, subheading "Introducing Blitz", headline "A Clean Home is A Happy Home", body text, CTA button
4. **About** — "About Company" / "Most Awarded Cleaning Company Since 2000", two-column text
5. **Why Choose Us** — 4-column grid: "Highly Trained Staff", "Best Equipments", "100% Warranty", "Fast & Effective Service" (each with icon)
6. **Counter** — background image with overlay, 4 stat counters (team, projects, happy clients, awards)
7. **Industries We Serve** — "Services" subheading, 4-column service list with icons (home, office, industry, car)
8. **Our Services** — 6 service cards in 3-column grid with icon + title + description + arrow link
9. **How it Works** — background image, 3-step process with icons and descriptions
10. **Testimonials** — light bg, carousel with avatar, name, quote
11. **Pricing** — 3 pricing cards (Basic, Premium, Pro) with price, features list, CTA
12. **CTA Banner** — full-width background image, "Need to clean your house? Just hire us!"
13. **Blog** — light bg, 3-column blog cards with image, date, title, excerpt
14. **Footer** — background image, 4-column: logo/description, recent posts, explore links, contact info + newsletter

## Gherkin requirements

### TopBar
```gherkin
Feature: Top Bar
  Scenario: Displays contact info and social links
    Given the user visits the Blitz homepage
    Then a top bar shows an email address, phone number, and business hours
    And social media icon links are visible (Twitter, Facebook, Instagram)
```

### Navbar
```gherkin
Feature: Navbar
  Scenario: Navigation links are present
    Given the user visits the Blitz homepage
    Then a navbar shows links for Home, About, Pricing, Services, Blog, Contact
    And a "Request A Quote" CTA button is visible
  Scenario: Mobile responsive
    Given the user views the navbar on a mobile viewport
    Then a hamburger menu toggle appears
    And the nav links are hidden until toggled
```

### Hero
```gherkin
Feature: Hero Section
  Scenario: Hero displays headline and CTA
    Given the user visits the Blitz homepage
    Then a full-width hero section shows with a background image
    And a subheading "Introducing Blitz" is visible
    And a headline "A Clean Home is A Happy Home" is visible
    And a "Request A Quote" button is present
```

### About
```gherkin
Feature: About Section
  Scenario: About content is displayed
    Given the user scrolls to the About section
    Then a subheading "About Company" is shown
    And a heading "Most Awarded Cleaning Company Since 2000" is displayed
    And two columns of descriptive text are shown
```

### WhyChooseUs
```gherkin
Feature: Why Choose Us
  Scenario: Four feature cards are shown
    Given the user scrolls to the Why Choose Us section
    Then 4 feature items are displayed in a row
    And each item has an icon, a title, and a description
    And titles are "Highly Trained Staff", "Best Equipments", "100% Warranty", "Fast & Effective Service"
```

### Counter
```gherkin
Feature: Counter Section
  Scenario: Stats are displayed
    Given the user scrolls to the counter section
    Then a background image with dark overlay is shown
    And 4 stat counters are displayed (team members, projects, happy clients, awards)
    And each counter shows a number and a label
```

### Industries
```gherkin
Feature: Industries We Serve
  Scenario: Industry list is shown
    Given the user scrolls to the Industries section
    Then a subheading "Services" and heading "Industries We Serve" are visible
    And 4 industry items are listed with icons (home, office, industry, car)
```

### Services
```gherkin
Feature: Our Services
  Scenario: Service cards are displayed
    Given the user scrolls to the Services section
    Then 6 service cards are shown in a 3-column grid
    And each card has an icon, title, and description
    And each card has a hover effect lifting the card and showing a blue accent
```

### HowItWorks
```gherkin
Feature: How it Works
  Scenario: 3-step process is shown
    Given the user scrolls to the How it Works section
    Then a background image with dark overlay is shown
    And 3 steps are displayed: "Pick a suitable plan", "Set your schedule", "Get things done"
    And each step has an icon and a description
```

### Testimonials
```gherkin
Feature: Testimonials
  Scenario: Client testimonials are shown
    Given the user scrolls to the Testimonials section
    Then a testimonial carousel is displayed on a light background
    And each testimonial shows an avatar, client name, and quote
```

### Pricing
```gherkin
Feature: Pricing
  Scenario: Pricing cards are shown
    Given the user scrolls to the Pricing section
    Then 3 pricing cards are displayed
    And each card shows a plan name, price, feature list, and a CTA button
    And the cards are arranged in a row
```

### CTABanner
```gherkin
Feature: CTA Banner
  Scenario: Call-to-action banner is displayed
    Given the user scrolls to the CTA banner
    Then a full-width background image with overlay is shown
    And a heading "Need to clean your house? Just hire us!" is visible
    And a CTA button is present
```

### Blog
```gherkin
Feature: Blog Section
  Scenario: Recent blog posts are shown
    Given the user scrolls to the Blog section
    Then 3 blog cards are displayed in a row on a light background
    And each card shows an image, date, title, and excerpt
```

### Footer
```gherkin
Feature: Footer
  Scenario: Footer content is complete
    Given the user scrolls to the footer
    Then a background image is shown
    And the footer has 4 columns: logo/description, recent posts, explore links, contact info
    And social media icon links are present
    And a newsletter subscription form is shown
    And a "Made with Component Dock" link is present
    And the footer links to https://www.componentdock.com/
```

## Verification checklist

- [ ] All 14 sections render in correct order
- [ ] Design tokens match: brand #225ae1, accent #fedd32, font Roboto
- [ ] Hero full-width background with overlay
- [ ] Counter section with animated numbers
- [ ] 6 service cards with hover lift effect
- [ ] 3-step "How it Works" on background image
- [ ] Testimonial carousel with avatar
- [ ] 3 pricing cards with feature lists
- [ ] CTA banner with background image
- [ ] 3 blog cards with images
- [ ] Footer with 4 columns, background image, Component Dock link
- [ ] Mobile responsive navbar with hamburger
- [ ] All placeholder images use picsum.photos/seed/blitz-*
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
