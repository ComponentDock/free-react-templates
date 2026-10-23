# Jobnest — Implementation Tasks

Source design: **Job Board 2** (`https://colorlib.com/wp/template/job-board-2/`) → recreation name **jobnest**. Shipped at https://jobnest.free.componentdock.com.

Scope: JobNest is a single-page job board landing page in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Job Board 2" free template (source: https://colorlib.com/wp/template/job-board-2/), built under a DIFFERENT name (**JobNest**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/jobnest/src/App.tsx`:

### 1. Navbar
- The navbar SHALL display the JobNest brand logo, navigation links (Home, Browse Job, Pages, Blog, Contact), a "Log in" text link, and a "Post a Job" green button. The navbar SHALL be sticky at the top of the viewport. When the user scrolls past the hero, the navbar SHALL gain a shadow. On viewports under 1024px, the nav links SHALL be hidden and a hamburger icon SHALL be visible. Tapping the hamburger SHALL toggle the mobile menu open/closed.
- Scenario — Navbar renders brand and links:
  - **WHEN** the user visits the page
  - **THEN** the navbar SHALL show the brand logo text "JobNest"
  - **AND** it SHALL have links: Home, Browse Job, Pages, Blog, Contact
  - **AND** a "Log in" link and "Post a Job" button SHALL be visible on the right
- Scenario — Navbar is sticky on scroll:
  - **WHEN** the user scrolls past the hero
  - **THEN** the navbar SHALL remain fixed at the top of the viewport
- Scenario — Mobile hamburger menu:
  - **WHEN** the viewport is under 1024px wide
  - **THEN** the nav links SHALL be hidden
  - **AND** a hamburger icon SHALL be visible
  - **WHEN** the user taps the hamburger
  - **THEN** the mobile menu SHALL open with nav links visible

### 2. Hero
- The hero section SHALL display a job count subheading (e.g. "4536+ Jobs listed"), the main headline "Find your Dream Job", a descriptive paragraph, and an "Upload your Resume" green button. The hero SHALL have a dark gradient background image.
- Scenario — Hero displays headline and CTA:
  - **WHEN** the user visits the page
  - **THEN** a job count subheading SHALL be visible
  - **AND** the main headline "Find your Dream Job" SHALL be visible
  - **AND** an "Upload your Resume" button SHALL be present

### 3. JobSearchBar
- The job search bar SHALL show a keyword text input, a location select dropdown, a category select dropdown, and a "Find Job" green button in a 4-column responsive grid. Below the form, popular search tags SHALL be displayed (Design & Creative, Marketing, Administration, Customer Service, Finance, Teaching). The form SHALL prevent default submission.
- Scenario — Search bar shows all filter inputs:
  - **WHEN** the user visits the page
  - **THEN** a keyword text input SHALL be visible
  - **AND** a location dropdown SHALL be visible
  - **AND** a category dropdown SHALL be visible
  - **AND** a "Find Job" button SHALL be present
- Scenario — Popular search tags display:
  - **WHEN** the user visits the page
  - **THEN** "Popular Search:" label SHALL be visible
  - **AND** category tags SHALL be shown
- Scenario — Search form prevents default submit:
  - **WHEN** the user clicks "Find Job" without filling fields
  - **THEN** the form SHALL NOT navigate away

### 4. PopularCategories
- The popular categories section SHALL display 8 category cards in a 4-column responsive grid. Each card SHALL show a category icon, category name, and position count (e.g. "50 Available position"). Cards SHALL be white with rounded corners and shadow.
- Scenario — Category grid displays 8 categories:
  - **WHEN** the user visits the page
  - **THEN** 8 category cards SHALL be displayed
  - **AND** each card SHALL show a category name and position count

### 5. JobListings
- The job listings section SHALL display a "Job Listing" heading, a "Browse More Job" outlined button, and at least 5 job cards. Each card SHALL show a company icon, job title, location, job type, heart icon (favorite button), "Apply Now" button, and deadline date. Cards SHALL have hover effects.
- Scenario — Job listing section displays heading:
  - **WHEN** the user visits the page
  - **THEN** "Job Listing" heading SHALL be visible
  - **AND** a "Browse More Job" button SHALL be present
- Scenario — Job cards show required info:
  - **WHEN** the user views the job listing section
  - **THEN** at least 5 job cards SHALL be displayed
  - **AND** each card SHALL show: company icon, job title, location, job type, Apply Now button, deadline
- Scenario — Job cards have favorite button:
  - **WHEN** the user views a job card
  - **THEN** a heart icon (favorite) button SHALL be visible

### 6. FeaturedCandidates
- The featured candidates section SHALL display a "Featured Candidates" heading and a horizontal scrollable carousel of candidate cards. Each card SHALL show a circular avatar, name, and role title.
- Scenario — Featured candidates carousel renders:
  - **WHEN** the user visits the page
  - **THEN** a "Featured Candidates" heading SHALL be visible
  - **AND** a carousel of candidate cards SHALL be displayed
  - **AND** each card SHALL show: avatar, name, role

### 7. TopCompanies
- The top companies section SHALL display a "Top Companies" heading, a "Browse More Job" button, and company cards in a 4-column responsive grid. Each card SHALL show a company icon, company name, and position count.
- Scenario — Top companies section renders:
  - **WHEN** the user visits the page
  - **THEN** a "Top Companies" heading SHALL be visible
  - **AND** a "Browse More Job" button SHALL be present
  - **AND** company cards SHALL be displayed in a grid

### 8. CtaBanner
- The CTA banner SHALL display a blue (#2B9BFF) background with two columns: "Looking for a Job?" with a "Browse Job" green button, and "Looking for a Expert?" with a "Post a Job" green button.
- Scenario — CTA banner shows two CTAs:
  - **WHEN** the user visits the page
  - **THEN** a blue background banner SHALL be visible
  - **AND** "Looking for a Job?" with "Browse Job" button SHALL be shown
  - **AND** "Looking for a Expert?" with "Post a Job" button SHALL be shown

### 9. Testimonials
- The testimonials section SHALL display a "Testimonial" heading and a horizontal scrollable carousel of testimonial cards. Each card SHALL show a circular author avatar, quote icon, testimonial text, and author name.
- Scenario — Testimonial carousel renders:
  - **WHEN** the user visits the page
  - **THEN** a "Testimonial" heading SHALL be visible
  - **AND** a carousel of testimonial cards SHALL be displayed
  - **AND** each card SHALL show: author avatar, quote icon, testimonial text, author name

### 10. Footer
- The footer SHALL display a dark navy (#001D38) background with 4 columns: logo + description + social icons, Company links, Category links, and Newsletter form (email input + Subscribe button). The copyright bar SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock". No ColorLib attribution SHALL appear.
- Scenario — Footer displays all columns:
  - **WHEN** the user views the footer
  - **THEN** a dark-background footer SHALL be visible
  - **AND** it SHALL contain: logo + social icons, Company links, Category links, Newsletter form
- Scenario — Newsletter form exists:
  - **WHEN** the user views the footer
  - **THEN** an email input SHALL be visible
  - **AND** a "Subscribe" button SHALL be present
- Scenario — Footer has Component Dock attribution:
  - **WHEN** the user views the footer copyright bar
  - **THEN** a link to componentdock.com SHALL be present
  - **AND** no ColorLib attribution SHALL be shown

### Cross-cutting requirements

- **Design token compliance** — The template SHALL use brand green #00D363 for primary buttons and accents, Roboto font family, 5px border radius on cards and buttons, and light grey (#F5F7FA) section backgrounds for job listings, featured candidates, and top companies sections.
  - Scenario — Design tokens applied: **WHEN** the user views any section; **THEN** brand green buttons SHALL use #00D363; **AND** the Roboto font SHALL be loaded via Google Fonts; **AND** cards SHALL have 5px border radius
- **Responsive layout** — The template SHALL be responsive: mobile hamburger menu, stacked layouts on small screens, 4-column grids that collapse to 2 or 1 column on smaller viewports.
  - Scenario — Responsive layouts: **WHEN** the viewport is under 768px wide; **THEN** category grids SHALL collapse to 1 column; **AND** job cards SHALL stack vertically; **AND** footer columns SHALL stack vertically
- **No ColorLib references in app code** — The template SHALL NOT reference "colorlib" anywhere in apps/jobnest source files, comments, or data. ColorLib provenance SHALL exist ONLY in the spec, TEMPLATES.md, and the PR.
  - Scenario — No ColorLib strings in app: **WHEN** searching apps/jobnest for "colorlib"; **THEN** zero matches SHALL be found
- **Footer links to Component Dock** — Every template's footer MUST link https://www.componentdock.com/ branded as "Component Dock".
  - Scenario — Component Dock link present: **WHEN** the user views the footer; **THEN** a link to https://www.componentdock.com/ SHALL be present; **AND** the link text SHALL include "Component Dock"

## Verification

- [x] `apps/jobnest` ships on https://jobnest.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/jobnest/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/jobnest/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/jobnest/public/CNAME` = `jobnest.free.componentdock.com`
  and the package `homepage` = `https://jobnest.free.componentdock.com`.
