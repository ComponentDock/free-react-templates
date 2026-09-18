# Template: PowerWash (Service Business — Pressure Washing)

## Purpose

Recreation of the ColorLib **Pressure Washing** template.
- **Source slug:** `pressurewashing`
- **ColorLib page:** https://colorlib.com/wp/template/pressure-washing/
- **Live preview:** https://preview.colorlib.com/theme/pressurewashing/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Design category:** Service business — local pressure washing company site

## Design tokens (extracted from preview CSS)

| Token | Value | Usage |
| --- | --- | --- |
| `--brand-blue` | `#207dff` | Primary brand color — CTAs, links, accents, navbar brand |
| `--accent-yellow` | `#ffd31d` | Accent/highlight — stars, hover states, secondary highlights |
| `--btn-primary` | `#007bff` | Button primary background (Bootstrap default) |
| `--text-dark` | `#212529` | Body text, headings |
| `--text-gray` | `#6c757d` | Secondary/muted text |
| `--bg-light` | `#f8f9fa` | Light section backgrounds (testimonials, alternating sections) |
| `--white` | `#ffffff` | Card backgrounds, text on dark backgrounds |
| `--black` | `#000000` | Overlay darkness on hero/CTA images |
| Font family | System sans-serif stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` | All text |
| Border radius | `0.25rem` (4px) — Bootstrap default | Buttons, form inputs, cards |
| Button style | Rounded Bootstrap `.btn-primary` — solid blue bg, white text, padding 0.375rem 0.75rem | All CTAs |

## Sections (order from live preview)

1. **Navbar** — top bar with phone/email + social icons, then sticky nav: Brand "PowerWash" | Home · About · Services · Gallery · Blog · Contact
2. **Hero** — full-width background image (parallax), dark overlay, right-aligned headline "Professional Power Washing Services" with subtext and two CTA buttons (Get a Quote / Our Services)
3. **About / Why Choose Us** — split layout: left image, right text "Why Choose Us?" with 4 bullet items (50 Years of Service, Professional & Experienced Staff, High Quality & Reliable Service, Customer Service & Expert Advice)
4. **Stats Counter** — 4-column animated counters on dark background (50+ Years, 8500+ Customers, 20+ Products, 50+ Pets Hosted) — adapt labels to pressure washing context
5. **Services** — 8 service cards in 2-row grid on dark background image: House Washing, Roof Cleaning, Driveway Cleaning, Gutter Cleaning, Patio Cleaning, Building Cleaning, Concrete Cleaning, Sidewalk Cleaning — each with icon + heading + short blurb
6. **Before & After** — tabbed interface: left side shows before/after images, right side vertical tab list of service names (House Washing, Roof Cleaning, Driveway Cleaning, Gutter Cleaning, Patio Cleaning, Building Cleaning)
7. **Testimonials** — light background, carousel of client testimonials with circular avatar, star rating (5 stars), quote text, client name + profession
8. **Free Consultation Form** — parallax background image, dark overlay, form with: service dropdown, name input, email input, date picker, submit button "Request A Quote"
9. **Footer** — 4 columns: brand description + social icons, Latest News (2 blog previews), Quick Links, Newsletter signup; bottom copyright bar

## Gherkin requirements

### Feature: PowerWash template

```gherkin
Feature: PowerWash — Pressure washing service business template
  As a visitor to a power washing company website
  I want to see professional services, trust signals, and easy contact options
  So that I can evaluate and book a pressure washing service

  Background:
    Given the template is loaded at the root URL
    And the page displays the PowerWash brand

  # ── Navbar ──────────────────────────────────────────
  Scenario: Top bar shows contact info and social links
    Given the top bar is visible
    Then I see a phone number and email address
    And I see Twitter, Facebook, and Instagram icon links

  Scenario: Sticky navigation bar
    Given I scroll past the hero section
    Then the navigation bar sticks to the top of the viewport
    And the nav links are: Home, About, Services, Gallery, Blog, Contact

  Scenario: Brand link returns to top
    When I click the "PowerWash" brand text
    Then the page scrolls to the top

  # ── Hero ────────────────────────────────────────────
  Scenario: Hero section displays with parallax background
    Given the hero section is in view
    Then I see a background image with dark overlay
    And I see the headline "Professional Power Washing Services"
    And I see a descriptive subtext paragraph
    And I see two CTA buttons: "Get a Quote" and "Our Services"

  Scenario: Hero CTA buttons navigate correctly
    When I click "Get a Quote"
    Then the page scrolls to the consultation form section
    When I click "Our Services"
    Then the page scrolls to the services section

  # ── About / Why Choose Us ───────────────────────────
  Scenario: About section shows split layout
    Given the about section is in view
    Then I see an image on the left half
    And I see "Why Choose Us?" heading on the right half
    And I see 4 trust points listed

  Scenario: Trust points are displayed
    Then I see "50 Years of Service"
    And I see "Professional & Experienced Staff"
    And I see "High Quality & Reliable Service"
    And I see "Customer Service & Expert Advice"

  # ── Stats Counter ───────────────────────────────────
  Scenario: Counter section animates numbers
    Given the counter section scrolls into view
    Then I see 4 stat blocks
    And the numbers animate from 0 to their target values
    And the stat labels are displayed below each number

  # ── Services ────────────────────────────────────────
  Scenario: Services grid displays 8 service cards
    Given the services section is in view
    Then I see the heading "Power Washing Services"
    And I see 8 service cards in a grid layout

  Scenario: Each service card has icon, heading, and description
    Then each service card shows an icon
    And each service card shows a heading
    And each service card shows a short description paragraph

  Scenario: Service names are correct
    Then I see cards for: House Washing, Roof Cleaning, Driveway Cleaning,
      Gutter Cleaning, Patio Cleaning, Building Cleaning,
      Concrete Cleaning, Sidewalk Cleaning

  # ── Before & After ──────────────────────────────────
  Scenario: Before & After section has tabbed layout
    Given the before & after section is in view
    Then I see the heading "Before & After Services"
    And I see a vertical tab list on the right with service names
    And I see an image panel on the left

  Scenario: Clicking a tab switches the image
    When I click the "Roof Cleaning" tab
    Then the image panel updates to show roof cleaning content
    And the "Roof Cleaning" tab is visually active

  # ── Testimonials ────────────────────────────────────
  Scenario: Testimonials carousel displays client feedback
    Given the testimonials section is in view
    Then I see the heading "Happy Clients & Feedbacks"
    And I see a carousel with client testimonial cards
    And each card shows a circular avatar image
    And each card shows a 5-star rating
    And each card shows a quote paragraph
    And each card shows the client name and profession

  # ── Consultation Form ───────────────────────────────
  Scenario: Free consultation form is displayed
    Given the consultation form section is in view
    Then I see a parallax background image with dark overlay
    And I see the heading "Free Consultation"
    And I see a form with service dropdown, name, email, and date fields
    And I see a "Request A Quote" submit button

  Scenario: Form validation prevents empty submission
    When I click "Request A Quote" without filling any fields
    Then the form shows validation errors
    And the form is not submitted

  Scenario: Form accepts valid input
    Given I select a service from the dropdown
    And I enter a name in the name field
    And I enter an email in the email field
    And I select a date
    When I click "Request A Quote"
    Then the form submits successfully

  # ── Footer ──────────────────────────────────────────
  Scenario: Footer has 4 columns
    Given the footer is visible
    Then I see a brand description column with social icons
    And I see a "Latest News" column with 2 blog post previews
    And I see a "Quick Links" column with navigation links
    And I see a newsletter signup column

  Scenario: Footer Quick Links navigation
    Then I see links for: Home, About, Services, Works, Blog, Contact

  Scenario: Footer copyright and Component Dock link
    Then I see a copyright notice in the footer bottom bar
    And I see a link to "https://www.componentdock.com/" branded as "Component Dock"
```

## Verification checklist

- [ ] All 9 sections present in correct order matching the live preview
- [ ] Brand color `#207dff` used as primary accent throughout
- [ ] Accent color `#ffd31d` used for stars and highlights
- [ ] System sans-serif font stack (no custom font imports needed)
- [ ] Hero uses parallax background image with dark overlay
- [ ] About section has 2-column split layout (image + text)
- [ ] Counter section has 4 animated stat blocks
- [ ] Services grid shows 8 cards with icons, headings, descriptions
- [ ] Before & After section has tabbed interface switching images
- [ ] Testimonials carousel with avatars, stars, quotes, names
- [ ] Consultation form with dropdown, name, email, date, submit
- [ ] Footer has 4 columns + copyright bar + Component Dock link
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] All placeholder images use `https://picsum.photos/seed/powerwash-<n>/<w>/<h>`
- [ ] Footer links to `https://www.componentdock.com/`
