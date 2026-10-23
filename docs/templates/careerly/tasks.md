# Careerly — Implementation Tasks

Source design: **Jobfinder** (`https://colorlib.com/wp/template/jobfinder/`) → recreation name **careerly**. Shipped at https://careerly.free.componentdock.com.

Scope: A Job Board & Career Portal template with hero search, popular categories, recent jobs, featured jobs and cta banner sections. Recreation of ColorLib "Jobfinder" (https://colorlib.com/wp/template/jobfinder/).

## Component breakdown

Render order as composed in `apps/careerly/src/App.tsx`:

### 1. Navbar
- The navbar displays the "Careerly" logo and navigation links.
- Scenario — Logo and links rendered:
  - **WHEN** the page loads
  - **THEN** the navbar shows the "Career" logo text and links: "For Candidates", "For Employers", "About", "Contact"
- Scenario — Mobile menu toggle:
  - **WHEN** the viewport is narrow
  - **THEN** a hamburger menu button is visible with label "Toggle menu"

### 2. Hero
- The hero section displays a search form for finding jobs.
- Scenario — Heading displayed:
  - **WHEN** the hero section renders
  - **THEN** the heading "Find Your Dream Job" is displayed
- Scenario — Search form inputs:
  - **WHEN** the hero form renders
  - **THEN** there is a keyword input labeled "Search keywords", a location input labeled "Location", and a "Search" submit button
- Scenario — Form submission prevention:
  - **WHEN** the user clicks the Search button
  - **THEN** the default form submission is prevented
- Scenario — Category browse links:
  - **WHEN** the hero renders
  - **THEN** "browse by category" links for Accounting, Healthcare, and Technology are shown

### 3. Categories
- The categories section displays a grid of job category cards.
- Scenario — Category cards rendered:
  - **WHEN** the categories section loads
  - **THEN** 8 category cards are displayed: Accounting/Finance, Automotive, Construction, Telecommunications, Healthcare, Design/Multimedia, Transportation, Restaurant/Food
- Scenario — Category job counts:
  - **WHEN** a category card renders
  - **THEN** it shows the category name and job count (e.g. "10,391 jobs")

### 4. RecentJobs
- The recent jobs section lists available job postings.
- Scenario — Job listings rendered:
  - **WHEN** the recent jobs section loads
  - **THEN** 5 job postings are displayed with title, company, location, salary, and type
- Scenario — Job tags:
  - **WHEN** a job listing renders
  - **THEN** it displays relevant tags (e.g. "Food", "JavaScript", "React")

### 5. FeaturedJobs
- The featured jobs section shows highlighted job cards.
- Scenario — Featured cards rendered:
  - **WHEN** the featured jobs section loads
  - **THEN** 4 featured job cards are displayed with title, company, salary, and description
- Scenario — Bookmark buttons:
  - **WHEN** a featured card renders
  - **THEN** it has a bookmark button with an accessible label (e.g. "Bookmark Restaurant Crew")

### 6. Testimonials
- The testimonials section displays user reviews.
- Scenario — Testimonial cards rendered:
  - **WHEN** the testimonials section loads
  - **THEN** 3 testimonial cards are displayed with name, role, quote, and avatar image

### 7. CtaBanner
- The call-to-action banner encourages job search.
- Scenario — CTA heading:
  - **WHEN** the CTA section renders
  - **THEN** the heading "Your Dream Job is Waiting" is displayed
- Scenario — CTA button:
  - **WHEN** the CTA renders
  - **THEN** a "Browse Jobs" button/link is visible

### 8. Footer
- The footer provides site navigation and branding.
- Scenario — Footer sections:
  - **WHEN** the footer renders
  - **THEN** it shows the "Careerly" logo, about text, Quick Links, For Candidates, and For Employers sections
- Scenario — Component Dock attribution:
  - **WHEN** the footer renders
  - **THEN** a link to "Component Dock" at https://www.componentdock.com/ is present
- Scenario — Copyright:
  - **WHEN** the footer renders
  - **THEN** a copyright line with the current year is displayed

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/careerly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/careerly/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/careerly` ships on https://careerly.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/careerly/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/careerly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/careerly/public/CNAME` = `careerly.free.componentdock.com`
  and the package `homepage` = `https://careerly.free.componentdock.com`.
