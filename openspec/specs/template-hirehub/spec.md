# Template: Hirehub (Astro Template)

## Purpose

Hirehub is a single-page job-board landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "HireHub" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "HireHub" — job board / careers marketplace
  template (source: https://colorlib.com/wp/template/hirehub/).
- **Demo DOM analyzed:** https://hirehub-colorlib.pages.dev/ (HTTP 200;
  `https://preview.colorlib.com/theme/hirehub/` returns 404 — the preview
  portal loads demos from `<slug>-colorlib.pages.dev` per
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md screenshot
  (`hirehub-template.jpg`) is the visual reference; the design below is
  reconstructed from the DOM structure and Tailwind classes.
- **Section order (1:1):**
  1. Navbar: Jobs, Companies, About, Pricing, Blog, Contact + "Post a Job"
     button.
  2. Hero: "Find Your Dream Job" (badge "2,500+ Jobs Available"), job search
     input + "Search Jobs" + "Advanced Filters" buttons, level filter chips
     (Entry Level, Mid Level, Senior, Lead, Executive).
  3. Latest Opportunities (featured-jobs): 6 job cards — Senior React
     Developer (TechFlow Inc., San Francisco CA, $140K–$180K), Lead UX
     Designer (DesignCraft Studio, Remote, $120K–$160K), Data Scientist
     (DataVault Analytics, New York NY, $130K–$170K), DevOps Engineer
     (CloudPeak Systems, Austin TX, $125K–$165K), Product Marketing Manager
     (GrowthLab Marketing, Remote, $110K–$145K), Financial Analyst (FinEdge
     Capital, Chicago IL, $95K–$125K) — each with skill tags + "Apply Now".
  4. Explore by Category (categories): 8 cards — Technology (840), Design
     (320), Marketing (275), Finance (190), Healthcare (210), Education
     (165), Sales (230), Engineering (310) open positions.
  5. Companies Hiring Now (companies): 6 company cards — TechFlow Inc.
     (Software Development, San Francisco), DesignCraft Studio (Creative
     Agency, New York), DataVault Analytics (Data & Analytics, Seattle),
     CloudPeak Systems (Cloud Infrastructure, Austin), GrowthLab Marketing
     (Digital Marketing, Remote), FinEdge Capital (Financial Services,
     Chicago) — with open-position counts.
  6. How It Works (how-it-works): "Your Path to Success" — For Job Seekers
     (Create Your Profile, Discover Opportunities, Apply & Get Hired) and
     For Employers (Post Your Opening, Review Candidates, Hire Top Talent).
  7. Success Stories (testimonials): quote cards from job seekers/employers.
  8. Frequently Asked Questions (faq): 5 questions (free for job seekers,
     how to post a job, time to get hired, remote search, candidate
     matching).
  9. Newsletter: "Never Miss an Opportunity" — email input + "Get Job
     Alerts" ("Free forever. Unsubscribe anytime. No spam.").
  10. CTA: "Ready to Take the Next Step?" — "Find Jobs Now" + "Post a Job".
  11. Footer: contact info (phone, email, address) + columns For Job
      Seekers / For Employers / Resources / Company + copyright + cookie
      notice.
- **Design tokens extracted from the DOM + CSS:**
  - Brand color: **#4f46e5** (indigo-600; scale #6366f1, #818cf8, #4338ca,
    #312e81, #a5b4fc, #c7d2fe, #eef2ff) — primary buttons, links, badges,
    gradient hero accents.
  - Accent: emerald **#059669** / #047857 (success, "open positions"
    markers).
  - Neutrals: white / gray-50…gray-900 / black; light surfaces with dark
    mode variants.
  - Fonts: **"Inter"** (300–800) via Google Fonts.
  - Shapes: rounded-full pill buttons and badges, rounded-xl company
    logos/avatars, rounded-2xl cards, rounded-lg inputs.
  - Gradients: `linear-gradient(90deg,#312e81,#4f46e5)` (hero/CTA) and
    `linear-gradient(90deg,#c7d2fe,#6366f1)`.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/hirehub-<n>/<w>/<h>`); icons → lucide-react; Inter
  via Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer chrome.

Hirehub lives in `apps/hirehub` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Hirehub",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Hirehub page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Hirehub" and links to
  Featured Jobs, Categories, and Companies
- **AND** the navbar SHALL show a "Post a Job" button and a dark-mode toggle
  button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a job search
input, and search buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Find Your Dream Job"
- **AND** it SHALL show a job search input with "Search Jobs" and "Advanced
  Filters" buttons

### Requirement: Featured jobs section

The system SHALL render a featured jobs section with at least six job cards.

#### Scenario: Featured jobs content

- **GIVEN** the page is rendered
- **WHEN** the featured jobs section is displayed
- **THEN** it SHALL contain a heading "Latest Opportunities"
- **AND** it SHALL show cards for Senior React Developer, Lead UX Designer,
  Data Scientist, DevOps Engineer, Product Marketing Manager, and Financial
  Analyst
- **AND** each card SHALL show a company, location, salary range, and an
  "Apply Now" link

### Requirement: Categories section

The system SHALL render a categories section with at least six category
cards.

#### Scenario: Categories content

- **GIVEN** the page is rendered
- **WHEN** the categories section is displayed
- **THEN** it SHALL contain a heading "Explore by Category"
- **AND** it SHALL show cards for Technology, Design, Marketing, and Finance

### Requirement: Companies section

The system SHALL render a companies section with at least four company
cards.

#### Scenario: Companies content

- **GIVEN** the page is rendered
- **WHEN** the companies section is displayed
- **THEN** it SHALL contain a heading "Companies Hiring Now"
- **AND** it SHALL show cards for TechFlow Inc. and DesignCraft Studio

### Requirement: How It Works section

The system SHALL render a "how it works" section with job-seeker and
employer steps.

#### Scenario: How It Works content

- **GIVEN** the page is rendered
- **WHEN** the how-it-works section is displayed
- **THEN** it SHALL contain a heading "Your Path to Success"
- **AND** it SHALL show "Create Your Profile", "Discover Opportunities", and
  "Apply & Get Hired" steps

### Requirement: FAQ section

The system SHALL render an FAQ section with at least three questions.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show at least three question buttons

### Requirement: Newsletter section

The system SHALL render a newsletter section with an email input and a
subscribe button.

#### Scenario: Newsletter content

- **GIVEN** the page is rendered
- **WHEN** the newsletter section is displayed
- **THEN** it SHALL contain a heading "Never Miss an Opportunity"
- **AND** it SHALL show an email input with a "Get Job Alerts" button

### Requirement: Footer

The system SHALL render a footer with link columns, contact details, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns and a copyright line
- **AND** it SHALL show contact details including an email address

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Hirehub app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Hirehub — Job Board Template"
