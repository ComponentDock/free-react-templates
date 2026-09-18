# Template: HireDesk (Job Board / Recruitment)

## Purpose

Recreation of the ColorLib **Jobpply** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source slug:** `jobpply`
- **ColorLib page:** https://colorlib.com/wp/template/jobpply/
- **Live preview:** https://preview.colorlib.com/theme/jobpply/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/jobpply-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, lucide-react (icons), `packages/ui` shared components where possible.

## Design tokens (extracted from live preview HTML/CSS)

| Token | Value | Notes |
|---|---|---|
| Primary brand color | `#007bff` (Bootstrap primary blue) | Service section background, primary buttons, "Post a Job" CTA |
| Dark background | `#343a40` (Bootstrap dark) | Navbar, footer background |
| Warning accent | `#ffc107` (Bootstrap warning) | "Fulltime" job badges |
| Info accent | `#17a2b8` (Bootstrap info) | "Freelance" job badges |
| Secondary accent | `#6c757d` (Bootstrap secondary) | "Internship" job badges, search button |
| Danger accent | `#dc3545` (Bootstrap danger) | Heart icon in footer |
| Text primary | `#000000` | Headings, body text |
| Text muted | `#6c757d` | Secondary text, metadata |
| Background alt | `#f8f9fa` (Bootstrap light) | Hot jobs section, blog section |
| Background primary | `#ffffff` | Main content background |
| Font family | `"Nunito Sans", sans-serif` | Loaded via Google Fonts CDN (weights 200-900) |
| Button style | Bootstrap `.btn-primary` / `.btn-secondary` | Standard Bootstrap rounded buttons |
| Hero overlay | Dark semi-transparent overlay on parallax image | |
| Section spacing | Standard Bootstrap section padding (~80px vertical) | |

## Gherkin requirements

### Navbar
```gherkin
Feature: Navbar

  Scenario: Dark sticky navbar with brand and CTAs
    Given the user is on the page
    Then a dark (#343a40) navbar is visible at the top
    And the brand text reads "HireDesk"
    And the nav links are: Home, About, Candidates, Blog, Contact
    And two CTA buttons are visible: "Post a Job" (outlined) and "Want a Job" (colored/filled)

  Scenario: Mobile hamburger menu
    Given the viewport is narrow (< 992px)
    When the user taps the hamburger icon
    Then the navigation menu collapses open with all links visible
```

### Hero / Search Section
```gherkin
Feature: Hero Section

  Scenario: Hero displays on load
    Given the user is on the page
    Then a full-height hero section is visible with a dark overlay on a background image
    And an illustration (SVG or placeholder) is displayed on the right side
    And a counter reads "We have 200,000 great job offers you deserve!"
    And the main heading reads "Largest Job Site In The World"

  Scenario: Tab-based search form
    Given the hero section is visible
    Then two tabs are displayed: "Find a Job" and "Find a Candidate"
    And the "Find a Job" tab is active by default
    And the search form has fields: keyword, category (select), location, and a "Search" button

  Scenario: Switch to Find a Candidate tab
    Given the hero section is visible
    When the user clicks the "Find a Candidate" tab
    Then the form fields change to: candidate name, category (select), location, and "Search" button
```

### Services
```gherkin
Feature: Services Section

  Scenario: Four service cards on blue background
    Given the user scrolls past the hero
    Then a blue (#007bff) background section is visible
    And four service items are displayed in a row
    And each service has an icon, title, and description
    And the services are: Search Millions of Jobs, Easy To Manage Jobs, Top Careers, Search Expert Candidates

  Scenario: Service card hover
    Given the service cards are visible
    When the user hovers over a card
    Then the card lifts slightly with a shadow effect
```

### Top Categories
```gherkin
Feature: Top Categories

  Scenario: Category grid with job counts
    Given the user scrolls to the categories area
    Then the heading reads "Top Categories"
    And a 4-column grid displays job categories
    And each category shows: name, open position count, and a forward arrow
    And categories include: Web Development (354), Graphic Designer (143), Multimedia (100), etc.

  Scenario: Category hover
    Given the category list is visible
    When the user hovers over a category
    Then the category row highlights with a color change
```

### Browse by Specialism
```gherkin
Feature: Browse by Specialism

  Scenario: Parallax search section
    Given the user scrolls past categories
    Then a parallax background section is visible
    And the heading reads "Browse Job by Specialism"
    And a search icon and "Search Job" subheading are displayed
```

### Hot Jobs
```gherkin
Feature: Hot Jobs Section

  Scenario: Job listing cards
    Given the user scrolls to the hot jobs area
    Then the heading reads "Hot Jobs"
    And 5 job listing items are displayed in a vertical list
    And each job card has: title, employment type badge, company name, location, heart icon, and "Apply Job" button

  Scenario: Badge color coding
    Given the job listings are visible
    Then "Partime" badges are blue (primary)
    And "Fulltime" badges are yellow (warning)
    And "Freelance" badges are teal (info)
    And "Internship" badges are gray (secondary)

  Scenario: Apply button click
    Given a job listing is visible
    When the user clicks the "Apply Job" button
    Then the button triggers a navigation or action
```

### Counter Stats
```gherkin
Feature: Counter Stats

  Scenario: Animated statistics
    Given the user scrolls to the counter section
    Then a parallax background section is visible
    And four stat items are displayed: 435,000 Jobs, 40,000 Members, 30,000 Resumes, 10,500 Companies
    And each stat has an icon and animated count-up number

  Scenario: Number animation on scroll
    Given the counter section enters the viewport
    When the section becomes visible
    Then the numbers animate from 0 to their target values
```

### Testimonials
```gherkin
Feature: Testimonials

  Scenario: Customer testimonial carousel
    Given the user scrolls to the testimonials area
    Then the heading reads "Happy Clients"
    And a carousel shows customer testimonials
    And each testimonial has a circular photo, quote icon, review text, name, and position
    And navigation dots are present

  Scenario: Carousel auto-advance
    Given the testimonials section is visible
    When the user waits
    Then the carousel automatically advances to the next testimonial
```

### Latest Candidates
```gherkin
Feature: Latest Candidates

  Scenario: Candidate profile carousel on blue background
    Given the user scrolls to the candidates section
    Then a blue (#007bff) background section is visible
    And the heading reads "Latest Candidates"
    And a carousel shows candidate profiles
    And each profile has a circular photo, name, and location

  Scenario: Candidate click
    Given a candidate profile is visible
    When the user clicks on a candidate
    Then the candidate link navigates to a profile page
```

### Blog
```gherkin
Feature: Blog Section

  Scenario: Four blog post cards
    Given the user scrolls to the blog area
    Then the heading reads "Recent Blog"
    And four blog cards are displayed in a row
    And each card has a featured image, date, author, comment count, and title

  Scenario: Blog card hover
    Given the blog cards are visible
    When the user hovers over a card
    Then the card image lifts slightly with a transition effect
```

### Newsletter
```gherkin
Feature: Newsletter Subscription

  Scenario: Email subscription form
    Given the user scrolls to the newsletter area
    Then a parallax background section is visible
    And the heading reads "Subscribe to our Newsletter"
    And an email input field and "Subscribe" button are displayed

  Scenario: Empty email validation
    Given the newsletter form is visible
    When the user clicks "Subscribe" without entering an email
    Then the form shows a validation error or does not submit
```

### Footer
```gherkin
Feature: Footer

  Scenario: Multi-column footer layout
    Given the user reaches the page bottom
    Then a dark (#343a40) footer is visible
    And the footer has four columns: About, Employers, Workers, Have a Questions?
    And the About column has social media icon links (Twitter, Facebook, Instagram)
    And the Employers column lists: How it works, Register, Post a Job, Advance Skill Search, Recruiting Service, Blog, Faq
    And the Workers column lists: How it works, Register, Post Your Skills, Job Search, Employer Search
    And the "Have a Questions?" column has address, phone, and email

  Scenario: Footer copyright
    Given the footer is visible
    Then the copyright line is present
    And a link to https://www.componentdock.com/ ("Component Dock") is present (replacing ColorLib attribution)
```

## Verification checklist

- [ ] All sections render in correct order: Navbar → Hero/Search → Services → Categories → Browse by Specialism → Hot Jobs → Counter → Testimonials → Candidates → Blog → Newsletter → Footer
- [ ] Nunito Sans font loaded via Google Fonts `<link>` in index.html
- [ ] Primary blue `#007bff` used for services background, primary buttons, candidates section
- [ ] Dark `#343a40` used for navbar and footer backgrounds
- [ ] Badge colors: blue (Partime), yellow (Fulltime), teal (Freelance), gray (Internship)
- [ ] Tab-based search form in hero toggles between "Find a Job" and "Find a Candidate"
- [ ] Counter section animates numbers on scroll into view
- [ ] Testimonial carousel auto-advances with dot navigation
- [ ] Candidate carousel displays on blue background
- [ ] Responsive: hamburger nav on mobile, single-column layouts on small screens
- [ ] Footer links to https://www.componentdock.com/ (branded "Component Dock")
- [ ] No references to ColorLib in app source (provenance only in spec)
- [ ] Placeholder images via `https://picsum.photos/seed/hiredesk-<n>/<w>/<h>`
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Typecheck passes (`npx tsc --noEmit`)
- [ ] Lint passes (`npx oxlint src/`)
- [ ] Build succeeds (`npx vite build`)
