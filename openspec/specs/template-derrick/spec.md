# Template: Derrick (Construction Company)

## Purpose

Recreation of the ColorLib **Vertex** construction company template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source:** [ColorLib Vertex](https://colorlib.com/wp/template/vertex/)
- **Preview:** https://preview.colorlib.com/theme/vertex/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/vertex-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript · packages/ui
- **Deploy target:** https://derrick.free.componentdock.com

## Design tokens (extracted from preview CSS)

| Token                    | Value                     | Usage                                                           |
| ------------------------ | ------------------------- | --------------------------------------------------------------- |
| `--color-primary`        | `#0962ea`                 | Buttons, links, slider overlay, footer background               |
| `--color-primary-hover`  | `#0853c5`                 | Button hover state                                              |
| `--color-text-dark`      | `#212529`                 | Body text                                                       |
| `--color-text-muted`     | `#6c757d`                 | Secondary text, nav links                                       |
| `--color-bg-light`       | `#f8f9fa`                 | Counter section, portfolio section, pricing section backgrounds |
| `--color-bg-dark`        | `#0962ea`                 | Footer background (same as primary)                             |
| `--color-white`          | `#ffffff`                 | Slider text, card backgrounds                                   |
| `--color-pricing-border` | `#dbe9fe`                 | Pricing card borders                                            |
| `--color-pricing-icon`   | `#609df9`                 | Pricing icon color                                              |
| `--font-heading`         | `"Quicksand", sans-serif` | All headings, body text                                         |
| `--radius`               | `0px`                     | Buttons (square corners via Bootstrap)                          |
| `--btn-padding`          | Default Bootstrap         | Standard button padding                                         |

## Sections (in order)

1. **Navbar** — Dark background, "Derrick" brand, nav links: Home, What We Do, Projects, Pricing, Blog, About, Contact. Sticky on scroll.
2. **Hero Slider** — Full-viewport background images with blue overlay (#0962ea, opacity 0.8), white text. Two slides: "Bringing to life most complex projects" / "Constructing is our life business". Subtitle: "We're Derrick, Construction and Development".
3. **Stats Counter** — Light background, 4-column grid: Years on Market (1000), Operational Brigades (12000), Engineering Units (10000), Employees (12921). Animated counting.
4. **Features/Services** — 4-column grid: Construction Management, Pre-Construction Services, Construction Services, General Constructing. Each with icon + title + description.
5. **Portfolio/Projects** — Light background, asymmetric grid (1 large + 2 medium images). Hover overlay with search icon.
6. **CTA Parallax** — Background image with overlay, "Experience Our Advance Equipments" heading, "Request a Quote" button.
7. **Testimonials** — Carousel with avatar images, quote text, name, position. "Love using Derrick" heading.
8. **Pricing** — Light background, 3-column cards: Basic ($29/mo), Standard ($29/mo), Premium ($29/mo). Dashed borders, building icon, "Get started" button.
9. **Blog** — Carousel of 4 blog cards: date, author, title, "Read more" link, comment count.
10. **Footer** — Blue background (#0962ea), 4 columns: brand description, Quick Links, Contact Information, Social icons. Bottom: "More templates at Component Dock".

## Scenarios

### Gherkin requirements

```gherkin
Feature: Derrick Construction Company Template

  Scenario: Page renders all sections
    Given I visit the Derrick homepage
    Then I should see the navigation bar
    And I should see the hero section with construction headline
    And I should see the stats counter section
    And I should see the services section with 4 service cards
    And I should see the portfolio section
    And I should see the CTA parallax section
    And I should see the testimonials section
    And I should see the pricing section with 3 plans
    And I should see the blog section
    And I should see the footer

  Scenario: Navigation links are accessible
    Given I visit the Derrick homepage
    Then the navbar should have links for Home, What We Do, Projects, Pricing, Blog, About, and Contact

  Scenario: Stats display correct numbers
    Given I visit the Derrick homepage
    Then I should see "1,000" years on market
    And I should see "12,000" operational brigades
    And I should see "10,000" engineering units
    And I should see "12,921" employees

  Scenario: Services section shows 4 items
    Given I visit the Derrick homepage
    Then I should see "Construction Management" service
    And I should see "Pre-Construction Services" service
    And I should see "Construction Services" service
    And I should see "General Constructing" service

  Scenario: Pricing shows 3 plans
    Given I visit the Derrick homepage
    Then I should see "Basic Plan" at $29 per month
    And I should see "Standard Plan" at $29 per month
    And I should see "Premium Plan" at $29 per month

  Scenario: Footer links to Component Dock
    Given I visit the Derrick homepage
    Then the footer should contain a link to componentdock.com

  Scenario: Quote form modal opens
    Given I visit the Derrick homepage
    When I click the "Request a Quote" button
    Then a modal with a quote form should appear
    And the form should have fields for Full Name, Email, Date, Time, and Message
```
