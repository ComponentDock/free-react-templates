# Template: Talently (Job Board / Career Portal)

## Purpose

Recreation of ColorLib **Careers** template.
- Source: https://colorlib.com/wp/template/careers/
- Preview: https://preview.colorlib.com/theme/careers/
- Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/careers-free-template.jpg

## Design tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Notes |
|---|---|---|
| Primary brand color | `#1644ba` | Royal blue — buttons, links, overlays, social icons |
| Primary hover | `#1747c3` | Slightly darker on hover |
| Body text | `#212529` | Dark charcoal (Bootstrap default) |
| Heading color | `#000000` | `h1, h2, h3, h4 { color: #000; }` |
| Warning/accent | `#ffc107` | Bootstrap warning — CTA "Sign Up" button |
| Badge primary | `#1644ba` | "Freelancer" tag on job listings |
| Badge warning | `#ffc107` | "Full-time" tag on job listings |
| Light background | `#f8f9fa` | Testimonial section bg |
| Dark text on white | `#343a40` | Dropdown, general text |
| Overlay section bg | hero image + `rgba(0,0,0,0.4)` with `#1644ba` tint | Statistics + CTA sections |
| Font family | `'Nunito', sans-serif` | Google Fonts — 200, 300, 400, 700 weights |
| Button border radius | `0.3rem` | Search form buttons |
| Item card border radius | `7px` | Job listing items |
| Social icon border radius | `50%` (circle) | Footer social icons, blue bg `#1644ba` |
| Nav link color | `rgba(255,255,255,0.5)` on hero | Fades to white on hover |
| Site logo | White text, `1.5rem`, `letter-spacing: 0.2rem`, uppercase | Top-left on hero |

## Sections (in order)

1. **Navbar** — Fixed-position over hero. Logo "Talently" (white, uppercase, spaced). Nav links: Home, Job Listings, About, Services, Blog. CTA "Contact Us" button (primary, white text, icon). Hamburger menu on mobile.
2. **Hero** — Full-width background image with dark overlay. Headline: "A Powerful Career Website Template". Subtext. 4-column search form: job title input, location select, type select, search button (primary). All inputs rounded (`0.3rem`).
3. **Statistics** — Parallax background (hero image) with blue overlay. Headline "Careers Statistics" + subtext. 4 stat counters: Candidates (1930), Jobs Posted (54), Jobs Filled (120), Companies (550). Large bold numbers.
4. **Job Listings** — White background. Headline "109,234 Job Listed". 8 job cards in a list layout: each row has image (2 cols), badge + title + publisher/category (4 cols), location (3 cols), salary (3 cols). Items separated by bottom border. Cards include: Dropbox Product Designer (Melbourne, $60k-$100k, Freelancer), Creative Director in Intercom (London, $60k-$100k, Full-time), FullStack Developer in Shopify (London, $60k-$100k, Full-time), etc.
5. **Company Logos** — Light border-top section. Headline "Our Candidates Work In Company". Horizontal row of company logos (carousel-style).
6. **Testimonials** — Light gray (`#f8f9fa`) background. Owl-carousel with testimonial slides: circular/rectangular person photo, blockquote text, author name with em-dash. 2 testimonials visible (Richard Anderson, Chris Peters).
7. **CTA** — Parallax background with blue overlay. "Looking For A Job?" heading. Subtext. "Sign Up" button (warning/yellow, large).
8. **Footer** — Dark background. 4 columns: Search Trending (link list), Company (link list), Support (link list), Contact Us (social icons: Facebook, Twitter, Instagram, LinkedIn — circular blue buttons). Copyright line.

## Gherkin Requirements

```gherkin
Feature: Talently — Job Board / Career Portal Template

  Background:
    Given the user visits the Talently homepage

  # ── Navbar ──

  Scenario: Navbar renders logo and navigation links
    Then the logo "Talently" is visible in the top-left
    And the nav contains links: Home, Job Listings, About, Services, Blog
    And a "Contact Us" CTA button is visible on the right

  Scenario: Navbar is positioned over the hero
    Then the navbar overlays the hero background image

  # ── Hero ──

  Scenario: Hero displays headline and search form
    Then a heading "A Powerful Career Website Template" is displayed
    And a search form with 4 fields is visible
    And field 1 is a text input with placeholder "Job title, keywords..."
    And field 2 is a select with location options (Anywhere, San Francisco, etc.)
    And field 3 is a select with job type options (Part Time, Full Time, Freelancer)
    And field 4 is a "Search Job" button with search icon

  Scenario: Hero has a background image with dark overlay
    Then the hero section has a background image
    And the hero section has a semi-transparent dark overlay

  # ── Statistics ──

  Scenario: Statistics section shows four counters
    Then four stat counters are displayed: Candidates, Jobs Posted, Jobs Filled, Companies
    And each counter has a large bold number
    And the counters have values: 1930, 54, 120, 550

  Scenario: Statistics section has parallax background with overlay
    Then the statistics section has a background image with blue overlay
    And the heading "Careers Statistics" is white text

  # ── Job Listings ──

  Scenario: Job listings section displays headline and job cards
    Then a heading "109,234 Job Listed" is displayed
    And at least 6 job listing cards are visible

  Scenario: Each job card shows image, badge, title, publisher, location, and salary
    Then each job card contains:
      | field     | example              |
      | image     | featured-listing-1   |
      | badge     | Freelancer / Full-time |
      | title     | Dropbox Product Designer |
      | publisher | John Stewart         |
      | category  | Design               |
      | location  | Melbourne, Australia |
      | salary    | $60k — $100k         |

  # ── Company Logos ──

  Scenario: Company logos section displays
    Then a heading "Our Candidates Work In Company" is displayed
    And a row of company logos is visible

  # ── Testimonials ──

  Scenario: Testimonials carousel shows quotes
    Then a testimonial section with light background is displayed
    And at least 2 testimonial slides are present
    And each slide has a person photo, blockquote text, and author name

  # ── CTA ──

  Scenario: CTA section prompts sign-up
    Then a heading "Looking For A Job?" is displayed
    And a "Sign Up" button in warning/yellow color is visible
    And the section has a parallax background with overlay

  # ── Footer ──

  Scenario: Footer has four columns and social links
    Then 4 footer columns are visible: Search Trending, Company, Support, Contact Us
    And the Contact Us column contains social icon links (Facebook, Twitter, Instagram, LinkedIn)
    And social icons are circular blue buttons

  Scenario: Footer includes Component Dock attribution
    Then a "Component Dock" link is present in the footer

  # ── Responsive ──

  Scenario: Mobile navigation shows hamburger menu
    Given the viewport is 375px wide
    Then the hamburger menu icon is visible
    And the desktop nav links are hidden
```

## Verification checklist

- [ ] All 8 sections rendered in correct order
- [ ] Search form has 4 inputs with correct types and placeholder/options
- [ ] Statistics counters display the correct values (1930, 54, 120, 550)
- [ ] Job listing cards show image, badge, title, publisher, location, salary
- [ ] Testimonial carousel displays with person photos and blockquotes
- [ ] CTA section shows "Looking For A Job?" with yellow "Sign Up" button
- [ ] Footer has 4 columns + social icons + Component Dock link
- [ ] Colors match tokens: primary `#1644ba`, warning `#ffc107`, font Nunito
- [ ] Hero has dark overlay on background image
- [ ] Statistics + CTA sections have parallax background with blue overlay
- [ ] Responsive: hamburger menu at mobile widths
- [ ] No ColorLib references in app code
- [ ] No copied assets — placeholder images, Google Fonts, lucide-react icons
