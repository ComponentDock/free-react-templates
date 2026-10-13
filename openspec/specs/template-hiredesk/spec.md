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

## Requirements

### Navbar

Feature: Navbar

#### Scenario: Dark sticky navbar with brand and CTAs

- **GIVEN** the user is on the page
- **THEN** a dark (#343a40) navbar is visible at the top
- **AND** the brand text reads "HireDesk"
- **AND** the nav links are: Home, About, Candidates, Blog, Contact
- **AND** two CTA buttons are visible: "Post a Job" (outlined) and "Want a Job" (colored/filled)

#### Scenario: Mobile hamburger menu

- **GIVEN** the viewport is narrow (< 992px)
- **WHEN** the user taps the hamburger icon
- **THEN** the navigation menu collapses open with all links visible

### Hero / Search Section

Feature: Hero Section

#### Scenario: Hero displays on load

- **GIVEN** the user is on the page
- **THEN** a full-height hero section is visible with a dark overlay on a background image
- **AND** an illustration (SVG or placeholder) is displayed on the right side
- **AND** a counter reads "We have 200,000 great job offers you deserve!"
- **AND** the main heading reads "Largest Job Site In The World"

#### Scenario: Tab-based search form

- **GIVEN** the hero section is visible
- **THEN** two tabs are displayed: "Find a Job" and "Find a Candidate"
- **AND** the "Find a Job" tab is active by default
- **AND** the search form has fields: keyword, category (select), location, and a "Search" button

#### Scenario: Switch to Find a Candidate tab

- **GIVEN** the hero section is visible
- **WHEN** the user clicks the "Find a Candidate" tab
- **THEN** the form fields change to: candidate name, category (select), location, and "Search" button

### Services

Feature: Services Section

#### Scenario: Four service cards on blue background

- **GIVEN** the user scrolls past the hero
- **THEN** a blue (#007bff) background section is visible
- **AND** four service items are displayed in a row
- **AND** each service has an icon, title, and description
- **AND** the services are: Search Millions of Jobs, Easy To Manage Jobs, Top Careers, Search Expert Candidates

#### Scenario: Service card hover

- **GIVEN** the service cards are visible
- **WHEN** the user hovers over a card
- **THEN** the card lifts slightly with a shadow effect

### Top Categories

Feature: Top Categories

#### Scenario: Category grid with job counts

- **GIVEN** the user scrolls to the categories area
- **THEN** the heading reads "Top Categories"
- **AND** a 4-column grid displays job categories
- **AND** each category shows: name, open position count, and a forward arrow
- **AND** categories include: Web Development (354), Graphic Designer (143), Multimedia (100), etc

#### Scenario: Category hover

- **GIVEN** the category list is visible
- **WHEN** the user hovers over a category
- **THEN** the category row highlights with a color change

### Browse by Specialism

Feature: Browse by Specialism

#### Scenario: Parallax search section

- **GIVEN** the user scrolls past categories
- **THEN** a parallax background section is visible
- **AND** the heading reads "Browse Job by Specialism"
- **AND** a search icon and "Search Job" subheading are displayed

### Hot Jobs

Feature: Hot Jobs Section

#### Scenario: Job listing cards

- **GIVEN** the user scrolls to the hot jobs area
- **THEN** the heading reads "Hot Jobs"
- **AND** 5 job listing items are displayed in a vertical list
- **AND** each job card has: title, employment type badge, company name, location, heart icon, and "Apply Job" button

#### Scenario: Badge color coding

- **GIVEN** the job listings are visible
- **THEN** "Partime" badges are blue (primary)
- **AND** "Fulltime" badges are yellow (warning)
- **AND** "Freelance" badges are teal (info)
- **AND** "Internship" badges are gray (secondary)

#### Scenario: Apply button click

- **GIVEN** a job listing is visible
- **WHEN** the user clicks the "Apply Job" button
- **THEN** the button triggers a navigation or action

### Counter Stats

Feature: Counter Stats

#### Scenario: Animated statistics

- **GIVEN** the user scrolls to the counter section
- **THEN** a parallax background section is visible
- **AND** four stat items are displayed: 435,000 Jobs, 40,000 Members, 30,000 Resumes, 10,500 Companies
- **AND** each stat has an icon and animated count-up number

#### Scenario: Number animation on scroll

- **GIVEN** the counter section enters the viewport
- **WHEN** the section becomes visible
- **THEN** the numbers animate from 0 to their target values

### Testimonials

Feature: Testimonials

#### Scenario: Customer testimonial carousel

- **GIVEN** the user scrolls to the testimonials area
- **THEN** the heading reads "Happy Clients"
- **AND** a carousel shows customer testimonials
- **AND** each testimonial has a circular photo, quote icon, review text, name, and position
- **AND** navigation dots are present

#### Scenario: Carousel auto-advance

- **GIVEN** the testimonials section is visible
- **WHEN** the user waits
- **THEN** the carousel automatically advances to the next testimonial

### Latest Candidates

Feature: Latest Candidates

#### Scenario: Candidate profile carousel on blue background

- **GIVEN** the user scrolls to the candidates section
- **THEN** a blue (#007bff) background section is visible
- **AND** the heading reads "Latest Candidates"
- **AND** a carousel shows candidate profiles
- **AND** each profile has a circular photo, name, and location

#### Scenario: Candidate click

- **GIVEN** a candidate profile is visible
- **WHEN** the user clicks on a candidate
- **THEN** the candidate link navigates to a profile page

### Blog

Feature: Blog Section

#### Scenario: Four blog post cards

- **GIVEN** the user scrolls to the blog area
- **THEN** the heading reads "Recent Blog"
- **AND** four blog cards are displayed in a row
- **AND** each card has a featured image, date, author, comment count, and title

#### Scenario: Blog card hover

- **GIVEN** the blog cards are visible
- **WHEN** the user hovers over a card
- **THEN** the card image lifts slightly with a transition effect

### Newsletter

Feature: Newsletter Subscription

#### Scenario: Email subscription form

- **GIVEN** the user scrolls to the newsletter area
- **THEN** a parallax background section is visible
- **AND** the heading reads "Subscribe to our Newsletter"
- **AND** an email input field and "Subscribe" button are displayed

#### Scenario: Empty email validation

- **GIVEN** the newsletter form is visible
- **WHEN** the user clicks "Subscribe" without entering an email
- **THEN** the form shows a validation error or does not submit

### Footer

Feature: Footer

#### Scenario: Multi-column footer layout

- **GIVEN** the user reaches the page bottom
- **THEN** a dark (#343a40) footer is visible
- **AND** the footer has four columns: About, Employers, Workers, Have a Questions?
- **AND** the About column has social media icon links (Twitter, Facebook, Instagram)
- **AND** the Employers column lists: How it works, Register, Post a Job, Advance Skill Search, Recruiting Service, Blog, Faq
- **AND** the Workers column lists: How it works, Register, Post Your Skills, Job Search, Employer Search
- **AND** the "Have a Questions?" column has address, phone, and email

#### Scenario: Footer copyright

- **GIVEN** the footer is visible
- **THEN** the copyright line is present
- **AND** a link to https://www.componentdock.com/ ("Component Dock") is present (replacing ColorLib attribution)

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
