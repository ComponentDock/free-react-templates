# Template: TalentGate (Job Portal)

## Purpose

TalentGate is a single-page job portal landing page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Jobportal" free
template (source: https://colorlib.com/wp/template/jobportal/), built under a
DIFFERENT name ("TalentGate") with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Jobportal" — job portal landing page
  (source: https://colorlib.com/wp/template/jobportal/).
- **Live preview:** https://preview.colorlib.com/theme/jobportal/
- **Design tokens:** Primary brand #157efb (blue), secondary #5dd28e (green),
  cyan accent #78d5ef, dark overlay #3c312e, footer #222831, light bg #f8f9fa.
  Fonts: "Work Sans" (primary), "Nunito Sans" (secondary).
- **Section order (1:1, from preview):**
  1. Navbar: Dark bg, "TalentGate" brand, "Post a Job" (outline) and "Want a Job" (colored) CTAs. Collapses on mobile.
  2. Hero: Full-height background image with dark overlay, counter text ("We have 850,000 great job offers"), h1 "Your Dream Job is Waiting", CTA button.
  3. Search tabs: Tabbed search form ("Find Job" / "Find Candidate") with form fields (keyword, location, job type).
  4. Services: Light bg, four service cards with blue icons, titles, descriptions.
  5. Job listings: White cards with company logo, title, type badge, company, location, "Apply Job" button, heart/favorite button.
  6. Stats counter: Parallax background, four counter items (Happy Clients, Total Jobs, Job Seekers, Employers).
  7. Testimonials: Carousel with circular user photos, quotes, names, auto-rotation.
  8. Blog grid: Four blog cards with images, dates, authors, titles, excerpts.
  9. Newsletter: Parallax dark background, email input, green subscribe button.
  10. Footer: Dark blue-gray, three columns (About + social icons, Employers links, Workers links), "Made with Component Dock" link.

## Design tokens

<!-- brand-claim:2026-10-23 -->
| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Brand (stated in this prep) | `#157efb` | live sheet paints it ×24 — `background` on `.ftco-navbar-light .navbar-nav > .nav-item.cta > a`; style.css (71,587 B, sha256 8384bbbc64c3) · <https://preview.colorlib.com/theme/jobportal/> |

Recorded so the palette is machine-readable: the prep already states this colour in its design notes, and this row carries the same value with the live-sheet evidence.

## Requirements

### Requirement: Navigation bar

The system SHALL render a fixed dark navigation bar with the site name "TalentGate", navigation links, and two CTA buttons.

#### Scenario: Navbar content

- **GIVEN** the TalentGate page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "TalentGate" and links to Services, Jobs, and Blog
- **AND** the navbar SHALL show "Post a Job" (outline style) and "Want a Job" (solid blue) CTA buttons

#### Scenario: Navbar mobile collapse

- **GIVEN** the page is rendered on a mobile viewport
- **WHEN** the user taps the hamburger menu button
- **THEN** the mobile navigation menu SHALL toggle open/closed

### Requirement: Hero section

The system SHALL render a full-height hero section with a background image, overlay, headline text, and CTA button.

#### Scenario: Hero content

- **GIVEN** the TalentGate page is rendered
- **WHEN** the hero section is visible
- **THEN** it SHALL display the headline "Your Dream Job is Waiting"
- **AND** it SHALL show the counter text "We have 850,000 great job offers"
- **AND** it SHALL include a "Get Started" CTA button linking to the search section

### Requirement: Job search tabs

The system SHALL render a tabbed search form with "Find Job" and "Find Candidate" tabs.

#### Scenario: Tab switching

- **GIVEN** the search tabs section is rendered
- **WHEN** the page loads
- **THEN** the "Find Job" tab SHALL be active by default
- **WHEN** the user clicks "Find Candidate"
- **THEN** the "Find Candidate" tab SHALL become active

#### Scenario: Search form fields

- **GIVEN** the "Find Job" tab is active
- **WHEN** the search form is displayed
- **THEN** it SHALL show input fields for keyword, location, and job type
- **AND** it SHALL include a "Search" button

### Requirement: Services section

The system SHALL render four service feature cards on a light background.

#### Scenario: Service cards

- **GIVEN** the services section is rendered
- **WHEN** the section is visible
- **THEN** it SHALL display four service cards
- **AND** each card SHALL have a blue icon, title, and description

### Requirement: Job listings

The system SHALL render job post cards with company info, location, and action buttons.

#### Scenario: Job card content

- **GIVEN** the job listings section is rendered
- **WHEN** the section is visible
- **THEN** it SHALL display job cards with title, type badge, company name, and location
- **AND** each card SHALL have an "Apply Job" button and a heart/favorite button

### Requirement: Stats counter

The system SHALL render four animated counter items on a parallax background.

#### Scenario: Counter animation

- **GIVEN** the stats section is rendered
- **WHEN** the section enters the viewport
- **THEN** the counter numbers SHALL animate from 0 to their target values
- **AND** the section SHALL display: Happy Clients, Total Jobs, Job Seekers, Employers

### Requirement: Testimonials carousel

The system SHALL render an auto-rotating testimonial carousel.

#### Scenario: Testimonial display

- **GIVEN** the testimonials section is rendered
- **WHEN** the section is visible
- **THEN** it SHALL display a testimonial with a circular user photo, quote, name, and role
- **AND** the carousel SHALL auto-rotate every 5 seconds
- **AND** navigation dots SHALL allow manual switching

### Requirement: Blog grid

The system SHALL render four blog post cards in a grid layout.

#### Scenario: Blog card content

- **GIVEN** the blog section is rendered
- **WHEN** the section is visible
- **THEN** it SHALL display four blog cards with thumbnail image, date, author, title, and excerpt

### Requirement: Newsletter section

The system SHALL render a newsletter subscribe section with a parallax background.

#### Scenario: Newsletter form

- **GIVEN** the newsletter section is rendered
- **WHEN** the section is visible
- **THEN** it SHALL show a heading "Subscribe to our Newsletter"
- **AND** it SHALL include an email input field and a green "Subscribe" button

### Requirement: Footer

The system SHALL render a dark footer with three columns and a Component Dock link.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the footer is visible
- **THEN** it SHALL display three columns: About (with social icons), Employers (link list), Workers (link list)
- **AND** it SHALL include a link to "https://www.componentdock.com/" labeled "Component Dock"

### Requirement: Design fidelity

The system SHALL use the original design's color tokens and typography.

#### Scenario: Color tokens

- **GIVEN** the TalentGate page is rendered
- **WHEN** the design tokens are inspected
- **THEN** the primary brand color SHALL be #157efb
- **AND** the secondary brand color SHALL be #5dd28e
- **AND** the footer background SHALL be #222831
- **AND** the primary font SHALL be "Work Sans"

### Requirement: No ColorLib references in app code

The system SHALL NOT contain any references to ColorLib in application source files.

#### Scenario: Provenance isolation

- **GIVEN** the app source files are inspected
- **WHEN** searching for "colorlib" in apps/talentgate/src/
- **THEN** no matches SHALL be found

## Verification checklist

- [ ] `npm run verify:app -- talentgate` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 14 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
      - Navigation bar
      - Hero section
      - Job search tabs
      - Services section
      - Job listings
      - Stats counter
      - Testimonials carousel
      - Blog grid
      - Newsletter section
      - Footer
      - Design fidelity
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [x] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [x] Footer links https://www.componentdock.com/ ("Component Dock").
