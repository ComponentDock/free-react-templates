# Jobgrid — Implementation Tasks

Source design: **Jobhub** (`https://colorlib.com/wp/template/jobhub/`) → recreation name **jobgrid**. Shipped at https://jobgrid.free.componentdock.com.

Scope: JobGrid is a single-page job board landing page in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Jobhub" free template (source: https://colorlib.com/wp/template/jobhub/), built under a DIFFERENT name (**JobGrid**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/jobgrid/src/App.tsx`:

### 1. Navbar
- The page SHALL display a sticky navbar with the JobGrid logo, desktop navigation links (Home, Categories, Pages, Log in), and a "Post a Job" CTA button. On mobile, the navbar SHALL collapse into a hamburger menu.
- Scenario — Navbar displays logo and navigation links:
  - **WHEN** the user loads the page
  - **THEN** the navbar shows the "JobGrid" logo on the left
  - **AND** the navbar contains links: "Home", "Categories", "Pages", "Log in"
  - **AND** a "Post a Job" button is visible on the right side
- Scenario — Mobile menu toggle:
  - **WHEN** the user clicks the hamburger menu button
  - **THEN** the mobile navigation menu expands
  - **AND** the mobile menu contains the same navigation links

### 2. Hero
- The page SHALL display a hero section with a "Find your dream job" heading, a search form (keyword input, location input, category dropdown, search button), and popular search tags.
- Scenario — Hero displays heading and search form:
  - **WHEN** the user loads the page
  - **THEN** a heading "Find your dream job" is visible
  - **AND** a keyword search input is displayed
  - **AND** a location search input is displayed
  - **AND** a category dropdown is displayed
  - **AND** a "Search" button is visible
- Scenario — Popular search tags are displayed:
  - **WHEN** the user loads the page
  - **THEN** a row of popular search tags is visible below the search form
  - **AND** tags include "#User experience designer", "#Marketing", "#Programmer", "#Finance", "#UI designer"

### 3. BrandLogos
- The page SHALL display a row of 6 partner/company logos as social proof.
- Scenario — Partner logos are displayed:
  - **WHEN** the user scrolls to the brand logos section
  - **THEN** 6 partner logo placeholders are visible in a horizontal row

### 4. Services
- The page SHALL display a "Browse from over 2000+ jobs" heading and 6 category cards in a 3-column grid, each with an icon, title, description, and "Browse Job" link.
- Scenario — Category cards are rendered:
  - **WHEN** the user scrolls to the services section
  - **THEN** 6 category cards are displayed
  - **AND** each card contains an icon, title, description, and "Browse Job" link
- Scenario — Categories match the original:
  - **WHEN** the services section is visible
  - **THEN** categories include "Design & creatives", "Telecommunication", "Restaurant", "Programming", "Architecture", "Marketing"

### 5. AboutSection
- The page SHALL display an about section with a stats counter ("89027+"), a "Want to hire perfect person?" heading, description text, and a "Browse Job" CTA button.
- Scenario — Stats and heading are displayed:
  - **WHEN** the user scrolls to the about section
  - **THEN** the number "89027+" is visible
  - **AND** the text "Talented waiting for hire" is displayed
  - **AND** the heading "Want to hire perfect person?" is displayed

### 6. TopJobs
- The page SHALL display a "Browse top jobs" heading and 6 job listing cards in a 3-column grid, each with a job title, company name, and "Apply Now" button.
- Scenario — Job cards are rendered:
  - **WHEN** the user scrolls to the top jobs section
  - **THEN** 6 job cards are displayed
  - **AND** each card contains a job title and "Apply Now" button

### 7. JobPost
- The page SHALL display a dark-background section with 2 feature cards: "Post a job" and "Browse for job", each with a description and CTA button.
- Scenario — Feature cards are displayed:
  - **WHEN** the user scrolls to the job post section
  - **THEN** 2 feature cards are displayed side by side
  - **AND** the first card has heading "Post a job"
  - **AND** the second card has heading "Browse for job"

### 8. Testimonials
- The page SHALL display customer testimonials with quote text, avatar, name, role, and dot navigation for switching between testimonials.
- Scenario — Testimonial navigation:
  - **WHEN** the user clicks a testimonial navigation dot
  - **THEN** the displayed testimonial changes to the selected one
  - **AND** the testimonial shows quote, name, and role

### 9. CtaBanner
- The page SHALL display a "Start finding your dream job" banner with a description and "Browse Job" CTA button.
- Scenario — CTA banner is visible:
  - **WHEN** the user scrolls to the CTA banner
  - **THEN** the heading "Start finding your dream job" is displayed
  - **AND** a "Browse Job" CTA button is visible

### 10. Footer
- The page SHALL display a dark footer with: logo + description + social links, "Top categories" column, "For employer" column, "Company" column, newsletter subscribe form, and copyright with Component Dock link.
- Scenario — Footer columns are displayed:
  - **WHEN** the user scrolls to the footer
  - **THEN** "Top categories", "For employer", and "Company" columns are displayed
- Scenario — Newsletter form is functional:
  - **WHEN** the user enters an email and clicks "Subscribe"
  - **THEN** the form handles the submission
- Scenario — Component Dock link is present:
  - **WHEN** the user scrolls to the footer
  - **THEN** a "Component Dock" link is present
  - **AND** the link points to "https://www.componentdock.com/"

### Cross-cutting requirements

- **Responsive design** — The page SHALL be responsive across mobile, tablet, and desktop viewports.
  - Scenario — Mobile layout: **WHEN** the user views the page on a 375px viewport; **THEN** the navbar collapses into a hamburger menu; **AND** category and job cards stack vertically
- **Accessibility** — All form inputs SHALL have associated labels or aria-labels. All images SHALL have alt text.
  - Scenario — Form inputs are accessible: **WHEN** any form input is rendered; **THEN** the input has an associated label or aria-label
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/jobgrid/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/jobgrid/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/jobgrid` ships on https://jobgrid.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/jobgrid/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/jobgrid/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/jobgrid/public/CNAME` = `jobgrid.free.componentdock.com`
  and the package `homepage` = `https://jobgrid.free.componentdock.com`.
