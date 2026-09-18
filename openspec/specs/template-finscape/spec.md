# Template: Finscape (Finance / Banking Landing)

## Purpose

Recreation of ColorLib **Finances** (`https://colorlib.com/wp/template/finances/`).
Preview URL: `https://preview.colorlib.com/theme/finances/` (reachable — live DOM + CSS analyzed).
Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript.

A finance/banking landing page template for financial services, loan companies,
or banking institutions. Green accent palette, carousel hero, about stats,
team, gallery, how-it-works steps, services, testimonials, pricing cards,
FAQ accordion, blog, and contact form.

## Source references

- **ColorLib slug:** `finances`
- **ColorLib page:** `https://colorlib.com/wp/template/finances/`
- **Preview (reachable):** `https://preview.colorlib.com/theme/finances/`
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/finances-free-template.jpg`
- **Description (from ColorLib):** "Finances — Free Finance Website Template" (banking/financial services theme).
- **Research note:** Preview fetched successfully. HTML structure + CSS (`style.css`, ~29 KB) extracted. Design tokens extracted from stylesheet. Open Sans font used throughout. Bootstrap-based grid in original; we replicate with Tailwind.

## Design tokens

### Colors

| Token             | Hex       | Usage                                          |
| ----------------- | --------- | ---------------------------------------------- |
| `--color-primary` | `#71bc42` | Green accent — CTA buttons, highlights, links  |
| `--color-blue`    | `#007bff` | Blue accent — pricing popular badge, secondary CTA |
| `--color-dark`    | `#343a40` | Dark sections — footer background, headings    |
| `--color-dark-alt`| `#212529` | Darker variant for text on light backgrounds   |
| `--color-text`    | `#343a40` | Body text, headings                            |
| `--color-muted`   | `#6c757d` | Muted/secondary text (Bootstrap gray-600)      |
| `--color-light`   | `#dee2e6` | Light borders, subtle dividers                 |
| `--color-bg`      | `#ffffff` | Page background                                |
| `--color-bg-alt`  | `#f8f9fa` | Alternate section backgrounds (Bootstrap gray-100) |
| `--color-bg-warm` | `#eff1f3` | Warm gray section backgrounds                  |
| `--color-white`   | `#ffffff` | Text on dark backgrounds                       |

### Typography

| Element   | Font Family              | Style                              |
| --------- | ------------------------ | ---------------------------------- |
| Headings  | "Open Sans", sans-serif  | Bold/semibold, dark (#343a40)      |
| Body      | "Open Sans", sans-serif  | Regular, #343a40                   |
| Nav links | "Open Sans", sans-serif  | Regular, dark text                 |

### Border radii

| Token    | Value   | Usage                              |
| -------- | ------- | ---------------------------------- |
| `--radius-sm`  | `4px`   | Subtle rounding on cards/inputs    |
| `--radius-md`  | `7px`   | Medium rounding                    |
| `--radius-lg`  | `15px`  | Larger card elements               |
| `--radius-xl`  | `30px`  | Pill-shaped CTA buttons            |

### Buttons

- Primary: background `#71bc42` (green), color `#fff`, border-radius `30px` (pill), hover darkens
- Secondary/outline: transparent bg, border, dark text, hover fills green
- Font: "Open Sans", weight 600

### Overall aesthetic

- Clean, professional finance/banking look
- Green (#71bc42) accent against white and dark (#343a40) backgrounds
- Full-width hero carousel with dark overlay (rgba(0,0,0,0.7))
- Light section backgrounds (#f8f9fa, #eff1f3) alternate with white
- Dark footer (#343a40) with light text
- Open Sans font gives modern, clean feel
- Bootstrap-derived grid; we use Tailwind equivalents

## Gherkin requirements

### Feature: Finscape — Finance/Banking Landing Template

```gherkin
Feature: Finscape Finance Landing Template
  As a visitor to a financial services website
  I want to learn about banking solutions, view services, and get in touch
  So that I can choose financial products and contact support

  Background:
    Given the user visits the Finscape homepage
    And the page is fully loaded

  # ── Navbar ──

  Scenario: Navigation bar displays all section links
    Then the navbar contains links for Home, About Us, Team, Pricing, FAQ, Gallery, Services, Testimonials, Blog, and Contact
    And clicking each link scrolls to the corresponding section
    And the navbar becomes sticky on scroll

  Scenario: Mobile hamburger menu
    Given the viewport is 768px wide or less
    When the user taps the hamburger icon
    Then the mobile menu slides in with all navigation links
    And tapping a link closes the menu and scrolls to the section

  # ── Hero ──

  Scenario: Hero carousel displays three slides
    Then the hero section shows a carousel with three slides
    And slide 1 displays heading "Banking Solutions" with subtext and a "Get In Touch" CTA button
    And slide 2 displays heading "Financing Solutions" with subtext and a "Get In Touch" CTA button
    And slide 3 displays heading "Savings Accounts" with subtext and a "Get In Touch" CTA button

  Scenario: Hero carousel auto-advances
    Given the hero carousel is on slide 1
    When 5 seconds elapse without user interaction
    Then the carousel advances to slide 2

  Scenario: Hero carousel manual navigation
    When the user clicks the next arrow
    Then the carousel advances to the next slide
    When the user clicks the previous arrow
    Then the carousel returns to the previous slide

  Scenario: Hero has dark overlay on background image
    Then the hero section has a dark semi-transparent overlay (rgba(0,0,0,0.7))
    And the heading text is white and large

  # ── About / Stats ──

  Scenario: About section displays company info and stats
    Then the About section shows heading "About Us"
    And subheading "We Solve Your Financial Problem"
    And descriptive paragraph text about financial services
    And 4 stat cards: Money Savings, Online Shoppings, Credit / Debit Cards, Banking Solutions Is Our Priority

  # ── Team ──

  Scenario: Team section shows 3 members
    Then the Team section displays heading "Meet Team"
    And 3 team member cards are shown
    And each card shows name, role, and social media icon links
    And team members: Kaiara Spencer (Accountant), Dave Simpson (Bank Teller), Ben Thompson (Bank Teller)

  # ── Gallery ──

  Scenario: Gallery section shows image grid
    Then the Gallery section displays heading "Gallery"
    And a grid of 6 placeholder images is shown
    And clicking an image opens a lightbox/fancybox overlay

  # ── How It Works ──

  Scenario: How It Works shows 3 numbered steps
    Then the How It Works section displays heading "How It Works"
    And step 1: "Online Applications" with description and icon
    And step 2: "Get an approval" with description and icon
    And step 3: "Card delivery" with description and icon

  # ── Services ──

  Scenario: Services section lists 6 services
    Then the Services section displays heading "Our Services"
    And 6 service cards are shown in a grid
    And services: Business Consulting, Credit Card, Income Monitoring, Insurance Consulting, Financial Investment, Financial Management
    And each card has an icon, title, and short description

  # ── Testimonials ──

  Scenario: Testimonials section shows customer reviews
    Then the Testimonials section displays heading "Happy Customers"
    And at least 2 testimonial cards are shown
    And each card shows a quote, customer name, and role

  # ── Pricing ──

  Scenario: Pricing section shows 3 tiers
    Then the Pricing section displays heading "Pricing"
    And 3 pricing cards are shown: Basic ($47/year), Premium ($200/year), Professional ($750/year)
    And each card shows price, feature list, and a "Buy Now" CTA button
    And the Premium card is highlighted/popular

  # ── FAQ ──

  Scenario: FAQ section displays accordion
    Then the FAQ section displays heading "Frequently Ask Questions"
    And at least 4 FAQ items are shown as an accordion
    And clicking a question expands the answer
    And only one answer is expanded at a time

  # ── Blog ──

  Scenario: Blog section shows 3 posts
    Then the Blog section displays heading "Our Blog"
    And 3 blog post cards are shown
    And each card shows an image, title, date, and excerpt
    And clicking a post navigates to the full post (or placeholder)

  # ── Contact ──

  Scenario: Contact section with form and info
    Then the Contact section displays heading "Contact Us"
    And contact info: address, phone number, and email
    And a contact form with First Name, Last Name, Email, Subject, and Message fields
    And a "Send" submit button

  Scenario: Contact form validation
    When the user submits the form with empty required fields
    Then validation errors are shown for required fields

  # ── Footer ──

  Scenario: Footer contains company info, links, and newsletter
    Then the footer has 4 columns: About Us, Quick Links, Follow Us, Subscribe Newsletter
    And the About Us column has a short description
    And Quick Links has Terms, Policy, About Us, Services, Testimonials, Contact Us
    And Follow Us has social media icon links
    And Subscribe Newsletter has an email input and Send button
    And the copyright line links to https://www.componentdock.com/

  # ── Responsive ──

  Scenario: Mobile responsive layout
    Given the viewport is 375px wide
    Then all sections stack vertically
    And the navbar collapses to a hamburger menu
    And pricing cards stack vertically
    And the team grid shows 1 card per row

  Scenario: Tablet responsive layout
    Given the viewport is 768px wide
    Then the layout uses 2-column grids where appropriate
    And the navbar shows all links (or hamburger if needed)
```

## Verification checklist

- [ ] Navbar: sticky, all 10 section links, mobile hamburger
- [ ] Hero: 3-slide carousel, auto-advance, dark overlay, white text, CTA buttons
- [ ] About: heading, subheading, 4 stat cards
- [ ] Team: 3 member cards with name, role, social icons
- [ ] Gallery: 6-image grid, lightbox on click
- [ ] How It Works: 3 numbered steps with icons
- [ ] Services: 6 service cards in grid
- [ ] Testimonials: customer quotes with names
- [ ] Pricing: 3 tiers ($47, $200, $750), popular highlight on Premium
- [ ] FAQ: accordion with at least 4 items
- [ ] Blog: 3 post cards with image, title, date, excerpt
- [ ] Contact: info + form with validation
- [ ] Footer: 4 columns, social links, newsletter, ComponentDock link
- [ ] Responsive: mobile (375px), tablet (768px), desktop
- [ ] Accessibility: semantic HTML, aria labels, keyboard navigation
- [ ] Design tokens: green #71bc42 primary, Open Sans, pill buttons (30px radius)
- [ ] No ColorLib references in app code
- [ ] Placeholder images from picsum.photos
