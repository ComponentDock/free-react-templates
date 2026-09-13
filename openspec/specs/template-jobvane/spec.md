# Template: JobVane (Job Board / Recruitment)

## Purpose

Recreation of ColorLib's **Jobpply** template
(preview: https://preview.colorlib.com/theme/jobpply/).

JobVane is a job board / recruitment marketplace single-page website with a
blue hero feature bar, category browsing, job listings, recruitment agencies,
testimonials, candidate profiles, newsletter subscription, and a dark footer.
Built with React 19, Vite, Tailwind CSS 4, and TypeScript.

Source slug: `jobpply`
Preview URL: https://preview.colorlib.com/theme/jobpply/

## Design tokens

Extracted from the ColorLib preview stylesheet (`css/style.css`):

| Token | Value | Notes |
|-------|-------|-------|
| Brand primary | `#007bff` | Bootstrap blue, used on `.bg-primary`, `.btn-primary` |
| Accent / CTA | `#6c63ff` | Vibrant violet-purple, used on navbar CTA button, parallax section bg |
| CTA colored bg | `#6c63ff` | Navbar "Want a Job" button background |
| Text primary | `#212529` | Near-black body text |
| Body background | `#fff` | White |
| Light section bg | `#f8f9fa` | Off-white for alternating sections |
| Dark footer bg | `#343a40` | Dark gray for footer (`.ftco-bg-dark`) |
| Font family | `Nunito Sans`, Arial, sans-serif | Google Font — rounded sans-serif |
| Icons | Flaticon (`flaticon-*`), Ionicons (`ion-*`), Open Iconic | lucide-react in React version |
| Button radius | `0.25rem` (Bootstrap default) | Standard rounded corners |
| Section padding | `4rem 0` (`.ftco-section`) | Consistent vertical rhythm |
| Primary CTA | `#ff6347` (tomato red) | Used on `.cta-colored` hover |

## Section structure (top to bottom)

1. **Navbar** — Dark, transparent initially, white bg on scroll. Logo text
   "JobVane" left, nav links right (Home, About, Candidates, Blog, Contact).
   Two CTA buttons: "Post a Job" (default) and "Want a Job" (purple accent
   #6c63ff).

2. **Feature bar** — Full-width blue (#007bff) section with 4 feature cards
   in a row: Search Millions of Jobs, Easy To Manage Jobs, Top Careers,
   Search Expert Candidates. Each has an icon + heading + description.

3. **Top Categories** — Light bg. Centered heading "Top Categories". 4-column
   grid of category cards with icon, category name, and open position count
   (e.g. Web Development 354, Graphic Designer 143, etc.).

4. **Browse by Specialism** — Full-width background image with search overlay.
   Heading "Browse Job by Specialism" with description text.

5. **Hot Jobs** — Light bg. Left column: heading "Hot Jobs" with job listing
   cards (job title, badge for type, location, company, salary). Right column:
   sidebar with "Top Recruitments" agency cards (company image, name, open
   positions count).

6. **Testimonials** — White bg. Heading "Happy Clients". Carousel of
   testimonial cards with user photo, quote, name, and star rating.

7. **Candidates** — Blue (#007bff) bg. Heading "Latest Candidates". Carousel
   of candidate profile cards with photo, name, and location.

8. **Newsletter** — Full-width purple (#6c63ff) parallax section. Heading
   "Subscribe to our Newsletter" with email input + subscribe button.

9. **Footer** — Dark bg (#343a40). 4-column layout: About + social icons,
   Employers links, Workers links, Contact info (address, phone, email).
   Copyright line at bottom.

## Gherkin requirements

### Navbar

```gherkin
Feature: Navigation bar

  Scenario: Navbar renders with brand and links
    Given the page loads
    Then the navbar displays "JobVane" as brand text
    And navigation links include "Home", "About", "Candidates", "Blog", "Contact"
    And two CTA buttons are visible: "Post a Job" and "Want a Job"

  Scenario: Navbar becomes opaque on scroll
    Given the page is scrolled past the hero
    Then the navbar background changes from transparent to white

  Scenario: Mobile hamburger toggle
    Given the viewport is mobile width
    Then the hamburger menu button is visible
    And clicking it toggles the mobile nav open/closed
```

### Feature bar

```gherkin
Feature: Feature highlight bar

  Scenario: Four features render
    Given the feature bar is visible
    Then 4 feature cards are displayed on a blue (#007bff) background
    And each card has an icon, heading, and description
    And headings are "Search Millions of Jobs", "Easy To Manage Jobs", "Top Careers", "Search Expert Candidates"
```

### Top Categories

```gherkin
Feature: Job categories

  Scenario: Categories render with counts
    Given the categories section is visible
    Then the heading reads "Top Categories"
    And 4 category items are displayed in a grid
    And each category shows a name and open position count
```

### Browse by Specialism

```gherkin
Feature: Specialism search

  Scenario: Specialism section renders
    Given the specialism section is visible
    Then the heading reads "Browse Job by Specialism"
    And a background image with overlay is displayed
    And descriptive text is shown below the heading
```

### Hot Jobs

```gherkin
Feature: Job listings

  Scenario: Job cards render
    Given the Hot Jobs section is visible
    Then the heading reads "Hot Jobs"
    And job listing cards are displayed with title, type badge, location, and company

  Scenario: Sidebar shows recruitment agencies
    Given the Hot Jobs section is visible
    Then a sidebar displays "Top Recruitments"
    And agency cards show company image, name, and open positions count
```

### Testimonials

```gherkin
Feature: Client testimonials

  Scenario: Testimonial carousel renders
    Given the testimonials section is visible
    Then the heading reads "Happy Clients"
    And testimonial cards show a user photo, quote, name, and star rating
    And the carousel advances through testimonials
```

### Candidates

```gherkin
Feature: Candidate profiles

  Scenario: Candidate carousel renders
    Given the candidates section is visible
    Then the heading reads "Latest Candidates"
    And candidate cards show a photo, name, and location
    And the section has a blue (#007bff) background
```

### Newsletter

```gherkin
Feature: Newsletter subscription

  Scenario: Newsletter form renders
    Given the newsletter section is visible
    Then the heading reads "Subscribe to our Newsletter"
    And an email input field and subscribe button are displayed
    And the section has a purple (#6c63ff) background
```

### Footer

```gherkin
Feature: Footer

  Scenario: Footer renders with columns
    Given the footer is visible
    Then it displays 4 columns: About + social, Employers links, Workers links, Contact info
    And social icons include Twitter, Facebook, Instagram
    And contact info shows address, phone, and email

  Scenario: Footer links to Component Dock
    Given the footer is visible
    Then a link to "https://www.componentdock.com/" is present
    And the link text mentions "Component Dock"
```

## Verification checklist

- [ ] Navbar: transparent → opaque scroll transition, two CTA buttons
- [ ] Feature bar: 4 cards on blue bg
- [ ] Categories: 4 items with position counts
- [ ] Browse by Specialism: bg image + search heading
- [ ] Hot Jobs: job listings + sidebar agencies
- [ ] Testimonials: carousel with photos and ratings
- [ ] Candidates: carousel on blue bg
- [ ] Newsletter: purple parallax section with email form
- [ ] Footer: 4-column dark layout, social icons, Component Dock link
- [ ] Responsive: all sections stack properly on mobile
- [ ] Design tokens: Nunito Sans font, #007bff primary, #6c63ff accent
- [ ] Accessibility: semantic HTML, aria-labels, focus-visible rings
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
