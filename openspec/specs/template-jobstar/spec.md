# Template: Jobstar (Job Board / Careers)

## Purpose

Recreation of ColorLib **JobPro** template.

- Source slug: `jobpro`
- Preview URL: https://preview.colorlib.com/theme/jobpro/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/jobpro-free-template.jpg
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from `css/style.css` on the live preview:

| Token              | Value                          | Notes                                                      |
| ------------------ | ------------------------------ | ---------------------------------------------------------- |
| Font family        | `"Source Sans Pro", Arial, sans-serif` | Primary body/heading font                         |
| Brand primary      | `#46b3e6`                      | Blue/teal — buttons, active states, links, accents         |
| Accent green       | `#91c235`                      | Lime green — secondary buttons, CTA backgrounds, badges    |
| Overlay gradient   | `#207ce5 → #499bea`           | Hero and section overlay gradient (IE fallback)             |
| Dark background    | `#1d1d1d` / `#171717`         | Navbar, dark sections                                      |
| Light background   | `#f8f9fa` / `#f7f7f7`         | bg-light sections (featured jobs, etc.)                    |
| Search bar bg      | `#207ce5` (bg-secondary)      | Job search form section background                          |
| Muted text         | `#b3b3b3`                     | Secondary/meta text                                        |
| Body text          | `#1d1d1d`                     | Default paragraph color                                    |
| White              | `#fff`                        | Card backgrounds, hero text                                |
| Button radius      | `5px`                         | Standard Bootstrap-like rounded corners                     |
| Overlay bg         | `rgba(0,0,0,0.5)`             | Semi-transparent over hero/section images                   |

## Visual design (from screenshot reference)

The template is a **job board / careers portal** with a professional Bootstrap-based layout. Full-height hero with a job-related photo background and dark overlay, centered headline with animated counter, two CTA buttons. Blue-background job search section with tabbed form (pill tabs for different search types). Four-column feature cards. Category carousel with icons and open position counts. Featured job listings with badges (Part-time/Full-time), salary, and Apply button. Green CTA banner. Testimonial carousel with background image. Candidate cards carousel. Dark footer with 4 link columns.

## Requirements (Gherkin)

### Feature: Navbar

- **Scenario:** Logo and navigation links are visible
  - Given the user loads the page
  - Then the navbar shows the logo "Jobstar." on the left
  - And navigation links: Home, Browse Categories, Browse Jobs, Talent Pool, Pages
  - And a "Contact" button is visible on the right (desktop only)

- **Scenario:** Mobile menu toggle works
  - Given the viewport is below lg breakpoint
  - Then the hamburger menu icon is visible
  - And clicking it opens the mobile navigation drawer

### Feature: Hero section

- **Scenario:** Hero displays headline with animated counter and CTAs
  - Given the user is on the homepage
  - Then a full-height hero section shows with a background image and dark overlay
  - And the subheading "Love what you do? Thousands are looking for you!" is centered
  - And the headline "10650+ Job Listed Here!" is displayed with an animated counter
  - And two CTA buttons are visible: "Contact us" (blue primary) and "Search Job" (secondary)

- **Scenario:** Hero is responsive
  - Given the viewport changes to mobile
  - Then the hero section adjusts height and text remains centered

### Feature: Job Search

- **Scenario:** Tabbed search form with pill navigation
  - Given the search section is visible (blue background)
  - Then two pill tabs are displayed: "Search for your next job" and "Find the perfect candidate"
  - And the first tab is active by default

- **Scenario:** Search form has four fields
  - Given the first search tab is active
  - Then four form fields are displayed: Keyword input, Location select, Job type select, Date input
  - And a "Search" button is visible at the end

- **Scenario:** Tab switching works
  - Given the search section is visible
  - When the user clicks the second pill tab
  - Then the second tab becomes active and shows its own form fields

### Feature: Services section

- **Scenario:** Four service feature cards are displayed
  - Given the services section is visible
  - Then four feature cards are shown in a row: "Search Millions of Jobs", "Easy To Manage Jobs", "Top Careers", "Top Talents"
  - And each card has an icon, heading, and description text

### Feature: Explore by Category

- **Scenario:** Category carousel with job counts
  - Given the category section is visible
  - Then a heading "Explore by Category" with subheading "Job Categories" is shown
  - And a carousel displays category cards: "Website & Software" (143), "Education & Training" (300), "Graphic & UI/UX Design" (143), "Accounting & Finance" (143)
  - And each card has an icon, category name, and open position count

### Feature: Featured Jobs

- **Scenario:** Job listing cards with details
  - Given the featured jobs section is visible (light background)
  - Then a heading "Featured Jobs Posts For This Week" with subheading "Recently Added Jobs" is shown
  - And job cards are displayed with: badge (Partime/Fulltime), job title, company name, location, salary, days posted
  - And each card has a heart icon and "Apply Job" button

- **Scenario:** Job badges have correct variants
  - Given the job listings are visible
  - Then Partime badges are styled differently from Fulltime badges

### Feature: CTA Intro

- **Scenario:** Green CTA banner with heading
  - Given the intro section is visible
  - Then a heading "Get Started Your New Job With Us" is displayed
  - And a green "Get Started" button is centered below

### Feature: Testimonials

- **Scenario:** Testimonial carousel with background image
  - Given the testimonials section is visible
  - Then a background image with dark overlay is shown
  - And a heading "Happy Clients" with subheading "Testimonial" is displayed
  - And a carousel shows testimonial cards with: quote text, person name, person title, person photo

### Feature: Latest Candidates

- **Scenario:** Candidate carousel with profile cards
  - Given the candidates section is visible
  - Then a heading "Latest Candidates" with subheading "Candidates" is shown
  - And a carousel displays candidate cards with: photo, name, location, description text

### Feature: Footer

- **Scenario:** Four-column footer with links
  - Given the user scrolls to the footer
  - Then four columns are displayed: Brand description + social links, Employers links, Candidate links, Account links
  - And a copyright line with "© 2026" and "Component Dock" link is at the bottom

- **Scenario:** Footer links are accessible
  - Given the footer is visible
  - Then all footer links have visible text and are keyboard navigable

## Verification checklist

- [ ] Navbar renders with correct links and responsive toggle
- [ ] Hero section shows animated counter and two CTA buttons
- [ ] Job search section has tabbed form with pill navigation
- [ ] Services section shows 4 feature cards in a row
- [ ] Category carousel displays job categories with counts
- [ ] Featured jobs show listing cards with badges, salary, and Apply button
- [ ] CTA banner shows green button on white background
- [ ] Testimonials carousel shows cards with person photos
- [ ] Candidates carousel shows profile cards
- [ ] Footer has 4 link columns and Component Dock attribution
- [ ] All sections match the original ColorLib layout and token colors
- [ ] 100% test coverage on all components
- [ ] Template builds without errors
- [ ] No ColorLib references in app code
