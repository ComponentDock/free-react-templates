# Template: JobSpot (Job Board)

## Purpose

Recreation of the ColorLib **JobPro** template as a modern React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source slug:** `jobpro`
- **Source URL:** https://colorlib.com/wp/template/jobpro/
- **Preview URL:** https://preview.colorlib.com/theme/jobpro/
- **Stack:** Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/jobspot`
- **Deploy target:** `jobspot.free.componentdock.com`

## Design tokens (extracted from preview)

| Token | Value | Notes |
|---|---|---|
| Brand primary | `#007bff` | Bootstrap blue — buttons, links, accents |
| Brand secondary | `#91c235` | Lime green — CTA button on navbar, nav accent |
| Dark background | `#171717` | Footer darken, overlay panels |
| Navbar bg | `#1d2124` | Dark charcoal navbar |
| Light section bg | `#f7f7f7` / `#f8f9fa` | Alternating light gray sections |
| Parallax bg | `#46b3e6` | Newsletter/parallax section fallback color |
| Font family | `Source Sans Pro`, Arial, sans-serif | Google Font — all headings + body |
| Button radius | `0.25rem` | Subtle rounded corners |
| Section padding | `6em 0` | Generous vertical rhythm |
| Overlay opacity | `rgba(0,0,0,0.45)` approx | Hero + testimonial image overlays |

## Section structure (in page order)

1. **Navbar** — Dark (`#1d2124`), logo left ("JobSpot."), nav links right (Home, Find Jobs, Candidates, Blog, Contact), "Post a Job" CTA button styled with secondary green (`#91c235`). Collapses on mobile.
2. **Hero** — Full-height background image with dark overlay. Center-aligned text: subtitle ("Love what you do? Thousands are looking for you!"), headline with job count ("10,650+ Jobs Listed Here!"), descriptive paragraph, two CTAs: "Contact us" (primary blue) and "Search Job" (secondary).
3. **Job Search Bar** — Dark secondary section (`#6c757d` background). Two tabs: "Find a Job" and "Find a Candidate" (pill-style nav). Each tab has a form row: keyword input, location select, category select, salary select, Search button.
4. **Services** — White background. 4-column grid, each with icon + heading + description: "Search Millions of Jobs", "Easy To Manage Jobs", "Top Careers", "Search Expert Candidates".
5. **Categories** — Carousel/slider (Owl Carousel original). Heading: "Explore by Category". 6+ category cards each with icon, category name, and open position count (e.g. "Website & Software — 143 Open positions").
6. **Featured Jobs** — Light background. Heading: "Featured Jobs Posts For This Week". List of job cards, each with: job type badge (Partime/Fulltime), job title, company name, location, category tag, post date, salary, "Apply Job" button, heart/favorite icon.
7. **CTA Banner** — Simple centered text: "Get Started Your New Job With Us", description paragraph, "Get Started" button (secondary).
8. **Testimonials** — Dark background image with overlay. Heading: "Happy Clients". Carousel of testimonial cards: quote text, avatar circle image, name, position.
9. **Latest Candidates** — White background. Heading: "Latest Candidates". Carousel of candidate cards: profile photo, name, location, short bio.
10. **Recent Blog** — Light background. Heading: "Recent Blog". 4-column grid of blog cards: thumbnail image, date/author/comments meta, title, excerpt.
11. **Newsletter** — Parallax background image with blue fallback (`#46b3e6`). Centered: heading "Subscribe to our Newsletter", description, email input + "Subscribe" button.
12. **Footer** — Dark background (`#1d2124`). 5 columns: Brand blurb + social icons, Employers links, Candidate links, Account links, Contact info. Copyright bar at bottom.

## Gherkin requirements

```gherkin
Feature: JobSpot homepage

  Background:
    Given the user opens the JobSpot homepage

  Scenario: Navbar renders with all navigation links
    Then the navbar displays the "JobSpot." brand
    And the navbar contains links: Home, Find Jobs, Candidates, Blog, Contact
    And the navbar contains a "Post a Job" CTA button
    And the navbar collapses into a hamburger menu on mobile viewports

  Scenario: Hero section displays job count and CTAs
    Then the hero shows a subtitle about finding jobs
    And the hero shows a headline with a job count number
    And the hero shows a descriptive paragraph
    And the hero has a "Contact us" primary button
    And the hero has a "Search Job" secondary button

  Scenario: Job search bar has two tab modes
    Then the search bar shows "Find a Job" and "Find a Candidate" tabs
    And the "Find a Job" tab is active by default
    And the active tab shows keyword, location, category, and salary fields
    And switching tabs shows the corresponding form fields
    And each form has a "Search" button

  Scenario: Services section shows four feature cards
    Then 4 service cards are displayed in a row
    And each service card has an icon, heading, and description
    And the headings are: "Search Millions of Jobs", "Easy To Manage Jobs", "Top Careers", "Search Expert Candidates"

  Scenario: Categories section shows job categories with counts
    Then the heading reads "Explore by Category"
    And category cards display name and open position count
    And at least 6 categories are visible

  Scenario: Featured jobs section lists job postings
    Then the heading reads "Featured Jobs Posts For This Week"
    And each job card shows a type badge, title, company, location, and salary
    And each job card has an "Apply Job" button
    And each job card has a heart/favorite icon

  Scenario: CTA banner encourages sign-up
    Then the heading reads "Get Started Your New Job With Us"
    And a "Get Started" button is displayed

  Scenario: Testimonials section shows client reviews
    Then the heading reads "Happy Clients"
    And testimonial cards show a quote, avatar, name, and position

  Scenario: Latest candidates section shows candidate profiles
    Then the heading reads "Latest Candidates"
    And candidate cards show a photo, name, location, and bio

  Scenario: Recent blog section shows four blog posts
    Then the heading reads "Recent Blog"
    And 4 blog cards are displayed
    And each blog card has a thumbnail, date, author, comment count, title, and excerpt

  Scenario: Newsletter section collects email subscriptions
    Then the heading reads "Subscribe to our Newsletter"
    And an email input field is displayed
    And a "Subscribe" button is displayed

  Scenario: Footer contains brand info and link columns
    Then the footer shows the "JobSpot." brand and description
    And the footer shows social media icons
    And the footer shows Employer, Candidate, and Account link columns
    And the footer shows contact information
    And the footer links to https://www.componentdock.com/
```

## Verification checklist

- [ ] Navbar: dark bg, logo, all nav links, green "Post a Job" CTA, mobile hamburger
- [ ] Hero: full-height bg image, dark overlay, centered text, job count, two CTAs
- [ ] Search bar: dark bg, two pill tabs, form fields per tab, Search buttons
- [ ] Services: 4-column grid, icons (lucide-react), headings match
- [ ] Categories: carousel with category cards, icon + name + count
- [ ] Featured Jobs: job cards with badge, title, company, location, salary, Apply button, heart icon
- [ ] CTA Banner: centered text + secondary button
- [ ] Testimonials: dark bg image, overlay, carousel of quote cards with avatars
- [ ] Candidates: carousel of candidate profile cards
- [ ] Blog: 4-column grid of blog cards with meta
- [ ] Newsletter: parallax bg, email input + subscribe button
- [ ] Footer: 5 columns, brand + social + links + contact, copyright
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] All placeholder images use picsum.photos
- [ ] Google Font "Source Sans Pro" loaded via index.html
- [ ] 100% test coverage
- [ ] vite.config.ts has injectUiSource()
- [ ] public/CNAME = jobspot.free.componentdock.com
- [ ] package.json homepage = https://jobspot.free.componentdock.com
