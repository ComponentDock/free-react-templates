# Template: Tumbler (Locksmith Services)

## Purpose

Tumbler is a single-page locksmith services template in the
free-react-templates monorepo. It is a React recreation of the
ColorLib "Locksmith" free template (source:
https://colorlib.com/wp/template/locksmith/), built under a
DIFFERENT name (**Tumbler**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 locksmith service website with an off-canvas
menu, hero slider, filter search bar, services grid, statistics counter,
product cards, testimonials, blog posts, CTA banner, and footer.
Preview URL: https://preview.colorlib.com/theme/locksmith/

**WHAT MAKES TUMBLER DISTINCT:**
1. Dark navy (#052336) theme with gold (#ffc446) accents
2. Off-canvas menu slides from right with mobile navigation
3. Filter search bar with dropdowns for location, service type, date
4. Statistics counter section with animated numbers
5. Rajdhani + Open Sans font pairing
6. Testimonial carousel with customer photos and ratings

## Design Tokens (extracted from preview CSS)

| Token | Value | Notes |
|---|---|---|
| Heading font | `"Rajdhani", sans-serif` | Service/section headings |
| Body font | `"Open Sans", sans-serif` | Body text, paragraphs |
| Body bg | `#FFFFFF` | White page background |
| Body text | `#444444` | Gray body text |
| Heading text | `#111111` | Near-black for headings |
| Dark text | `#1b2839` | Dark navy for some headings |
| Primary / accent | `#ffc446` | Gold — buttons, icons, highlights |
| Dark bg | `#052336` | Very dark navy — header, footer, CTA |
| Light gray bg | `#f2f2f2` | Section backgrounds, counters |
| Secondary text | `#888888` | Lighter gray for secondary content |
| White text | `#ffffff` | On dark backgrounds |
| Button radius | `60px` | Pill-shaped CTA buttons |
| Counter bg | `#f2f2f2` | Light gray for counter section |
| Testimonial bg | `#052336` | Dark navy for testimonial section |
| Footer bg | `#052336` | Dark navy footer |
| Star rating | `#ffc446` | Gold stars |

## Section Order (from live preview DOM)

1. Page Preloader (loading spinner)
2. Off-canvas Menu (slides from right, logo + mobile nav + phone)
3. Header (logo, nav: Home/About/Services/Shop/Pages dropdown/News/Contact, phone, hamburger)
4. Hero Slider (3 slides with background images, heading, subheading, CTA button)
5. Filter Search (search form with location, service type, date inputs)
6. Services (3 items: Locksmith Services, Safes & Locks, Emergency Service)
7. Choose Us (why choose us section with description)
8. Counter (4 stats: years, clients, projects, awards)
9. Product (product cards grid)
10. Testimonial (customer reviews carousel)
11. Latest (latest news/blog posts)
12. Call To Action (banner with heading + button)
13. Footer (logo, about, services links, newsletter, social, copyright)

## Visual Design Notes

From the ColorLib preview DOM analysis:

- **Off-canvas menu:** Slides from right, contains logo, mobile nav links,
  and phone number. Dark overlay behind.
- **Header:** Dark navy (#052336) background, logo left, horizontal nav
  right (Home active, About, Services, Shop, Pages dropdown, News,
  Contact), phone number, hamburger icon on mobile.
- **Hero Slider:** Full-width with dark background images, centered white
  text: span label ("Best locksmith"), h2 heading ("We Provide Best
  Locksmith Services All Over World"), gold (#ffc446) "Contact us" button
  with pill shape (radius 60px). 3 slides with different backgrounds.
- **Filter Search:** Light gray bar with 3-column form: Location select,
  Service Type select, Date input, gold Search button.
- **Services:** 3-column grid, each with icon, title, description text.
  White background with top padding.
- **Choose Us:** Description section with text content about why choose
  the service.
- **Counter:** Light gray (#f2f2f2) background, 4 stats in a row:
  Years of Experience, Number of Clients, Number of Projects, Awards.
- **Product:** Product cards with images, titles, prices.
- **Testimonial:** Dark navy (#052336) background, customer reviews with
  photos, names, ratings (gold stars).
- **Latest:** Blog/news posts with images, titles, dates.
- **Call To Action:** Dark navy banner with heading and gold button.
- **Footer:** Dark navy (#052336), 4 columns: About (logo + description),
  Services links, Quick Links, Contact info. Social icons. Copyright bar.

## Gherkin Requirements

```gherkin
Feature: Tumbler Locksmith Services Template

  Background:
    Given the user visits the Tumbler homepage

  # ── Page Preloader ──

  Scenario: Page shows preloader while loading
    Then a loading spinner should be visible
    And it should disappear after page loads

  # ── Off-Canvas Menu ──

  Scenario: Off-canvas menu is hidden by default
    Then the sidebar menu should not be visible

  Scenario: Clicking hamburger opens off-canvas menu
    When the user clicks the hamburger icon
    Then the off-canvas menu should slide in from the right
    And it should show the site logo
    And mobile navigation links
    And a phone number

  # ── Header ──

  Scenario: Header displays logo and navigation
    Then the header should show the site logo
    And nav links: Home (active), About, Services, Shop, Pages, News, Contact
    And a phone number

  Scenario: Pages menu shows dropdown
    When the user hovers over "Pages"
    Then a dropdown should appear with: Cart, Checkout, Wishlist, Product Details

  # ── Hero Slider ──

  Scenario: Hero slider shows 3 slides
    Then the hero slider should display 3 slides
    And each slide should have a background image
    And a label text (e.g. "Best locksmith")
    And a heading (e.g. "We Provide Best Locksmith Services")
    And a "Contact us" button with gold (#ffc446) background

  # ── Filter Search ──

  Scenario: Filter search shows search form
    Then a search bar should be visible
    And it should have a Location dropdown
    And a Service Type dropdown
    And a Date input
    And a Search button with gold accent

  # ── Services ──

  Scenario: Services section shows 3 service items
    Then the "Services We Offer" section should display 3 items
    And each item should have an icon, title, and description
    And items: Locksmith Services, Safes & Locks, Emergency Service

  # ── Choose Us ──

  Scenario: Choose Us section displays content
    Then a "Why Choose Us" section should be visible
    And it should contain descriptive text about the service

  # ── Counter ──

  Scenario: Counter shows 4 statistics
    Then 4 counter items should be displayed
    And each should show a number and label
    And items: Years Experience, Clients, Projects, Awards

  # ── Product ──

  Scenario: Product section shows product cards
    Then product cards should be displayed in a grid
    And each card should show an image, title, and price

  # ── Testimonial ──

  Scenario: Testimonial section shows customer reviews
    Then a testimonials carousel should be visible
    And each review should show a customer photo, name, and rating

  # ── Latest ──

  Scenario: Latest section shows blog posts
    Then the "Latest News" section should display blog post cards
    And each card should show an image, title, and date

  # ── Call To Action ──

  Scenario: CTA banner displays heading and button
    Then a call-to-action banner should be visible
    And it should have a dark navy (#052336) background
    And a heading text
    And a gold (#ffc446) button

  # ── Footer ──

  Scenario: Footer displays 4 columns
    Then the footer should show 4 columns
    And columns: About, Services, Quick Links, Contact
    And social media icons
    And a copyright bar

  Scenario: Footer has Component Dock attribution
    Then the footer should link to https://www.componentdock.com/
    And display "Component Dock" as the brand name
```

## Verification Checklist

- [ ] All 13 sections render in correct order
- [ ] Off-canvas menu slides from right with dark overlay
- [ ] Hero slider shows 3 slides with gold CTA buttons
- [ ] Filter search bar has 3 inputs + search button
- [ ] Services section shows 3 items with icons
- [ ] Counter section displays 4 animated statistics
- [ ] Product cards display in grid
- [ ] Testimonials carousel works with customer photos
- [ ] Latest news section shows blog cards
- [ ] CTA banner has dark navy bg + gold button
- [ ] Footer has 4 columns + social icons + Component Dock link
- [ ] Gold accent (#ffc446) used consistently for buttons, icons, highlights
- [ ] Dark navy (#052336) used for header, footer, testimonial, CTA backgrounds
- [ ] Rajdhani font for headings, Open Sans for body text
- [ ] Pill-shaped buttons (border-radius: 60px)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] All placeholder images use picsum.photos/seed/tumbler-<n>/<w>/<h>
- [ ] 100% test coverage (lines, functions, branches, statements)
