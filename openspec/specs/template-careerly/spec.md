# Careerly — Job Board & Career Portal Template

## Purpose

Recreation of ColorLib "Jobfinder" (https://colorlib.com/wp/template/jobfinder/).

A job board and career portal template with a search hero, category browsing, recent/featured job listings, testimonials, and a call-to-action banner. Brand color: `#28a745` (green). Font: 'Work Sans', sans-serif.

## Requirements

### Requirement: Navbar

The navbar displays the "Careerly" logo and navigation links.

#### Scenario: Logo and links rendered

- **WHEN** the page loads
- **THEN** the navbar shows the "Career" logo text and links: "For Candidates", "For Employers", "About", "Contact"

#### Scenario: Mobile menu toggle

- **WHEN** the viewport is narrow
- **THEN** a hamburger menu button is visible with label "Toggle menu"

### Requirement: Hero search section

The hero section displays a search form for finding jobs.

#### Scenario: Heading displayed

- **WHEN** the hero section renders
- **THEN** the heading "Find Your Dream Job" is displayed

#### Scenario: Search form inputs

- **WHEN** the hero form renders
- **THEN** there is a keyword input labeled "Search keywords", a location input labeled "Location", and a "Search" submit button

#### Scenario: Form submission prevention

- **WHEN** the user clicks the Search button
- **THEN** the default form submission is prevented

#### Scenario: Category browse links

- **WHEN** the hero renders
- **THEN** "browse by category" links for Accounting, Healthcare, and Technology are shown

### Requirement: Popular Categories

The categories section displays a grid of job category cards.

#### Scenario: Category cards rendered

- **WHEN** the categories section loads
- **THEN** 8 category cards are displayed: Accounting/Finance, Automotive, Construction, Telecommunications, Healthcare, Design/Multimedia, Transportation, Restaurant/Food

#### Scenario: Category job counts

- **WHEN** a category card renders
- **THEN** it shows the category name and job count (e.g. "10,391 jobs")

### Requirement: Recent Jobs

The recent jobs section lists available job postings.

#### Scenario: Job listings rendered

- **WHEN** the recent jobs section loads
- **THEN** 5 job postings are displayed with title, company, location, salary, and type

#### Scenario: Job tags

- **WHEN** a job listing renders
- **THEN** it displays relevant tags (e.g. "Food", "JavaScript", "React")

### Requirement: Featured Jobs

The featured jobs section shows highlighted job cards.

#### Scenario: Featured cards rendered

- **WHEN** the featured jobs section loads
- **THEN** 4 featured job cards are displayed with title, company, salary, and description

#### Scenario: Bookmark buttons

- **WHEN** a featured card renders
- **THEN** it has a bookmark button with an accessible label (e.g. "Bookmark Restaurant Crew")

### Requirement: Testimonials

The testimonials section displays user reviews.

#### Scenario: Testimonial cards rendered

- **WHEN** the testimonials section loads
- **THEN** 3 testimonial cards are displayed with name, role, quote, and avatar image

### Requirement: CTA Banner

The call-to-action banner encourages job search.

#### Scenario: CTA heading

- **WHEN** the CTA section renders
- **THEN** the heading "Your Dream Job is Waiting" is displayed

#### Scenario: CTA button

- **WHEN** the CTA renders
- **THEN** a "Browse Jobs" button/link is visible

### Requirement: Footer

The footer provides site navigation and branding.

#### Scenario: Footer sections

- **WHEN** the footer renders
- **THEN** it shows the "Careerly" logo, about text, Quick Links, For Candidates, and For Employers sections

#### Scenario: Component Dock attribution

- **WHEN** the footer renders
- **THEN** a link to "Component Dock" at https://www.componentdock.com/ is present

#### Scenario: Copyright

- **WHEN** the footer renders
- **THEN** a copyright line with the current year is displayed
