# Precept — Implementation Tasks

Source design: **Education** (`https://colorlib.com/wp/template/education/`) → recreation name **precept**. Shipped at https://precept.free.componentdock.com.

Scope: An Education & Courses template with hero, features, popular courses, cta, reviews and search course sections.

## Component breakdown

Render order as composed in `apps/precept/src/App.tsx`:

### 1. Navbar
- The system SHALL render a fixed navbar with a dark top bar (social icons, phone, email), the site name "Precept" with an orange left border, and navigation links (Home, About, Courses, Events, Blog, Contact) with a mobile hamburger toggle.
- Scenario — Desktop navigation:
  - **GIVEN** the page is rendered
  - **WHEN** the navbar is displayed
  - **THEN** it SHALL show the site name "Precept" as a link
  - **AND** it SHALL show links to Home, About, Courses, Events, Blog, and Contact
- Scenario — Mobile menu toggle:
  - **GIVEN** the page is rendered on a mobile viewport
  - **WHEN** the user clicks the hamburger button
  - **THEN** the mobile menu SHALL become visible and the toggle SHALL report `aria-expanded="true"`
  - **AND** clicking a mobile link SHALL close the menu

### 2. Hero
- The system SHALL render a full-height hero banner with a dark overlay background image, a headline "We Ensure Better Education for a Better World", supporting paragraph, and an orange "Get Started" CTA button.
- Scenario — Hero content:
  - **GIVEN** the page is rendered
  - **WHEN** the hero is displayed
  - **THEN** it SHALL contain the headline text
  - **AND** it SHALL contain a "Get Started" button

### 3. Features
- The system SHALL render a 3-column feature section with cards for "Learn Online Courses", "No.1 of Universities", and "Huge Library", each with a description and a "Join Now" link.
- Scenario — Feature cards:
  - **GIVEN** the page is rendered
  - **WHEN** the features section is displayed
  - **THEN** it SHALL show three feature cards with titles and "Join Now" links

### 4. PopularCourses
- The system SHALL render a course carousel section titled "Popular Courses We Offer" with course cards showing an image, user/comment counts, price, title, and description.
- Scenario — Course cards:
  - **GIVEN** the page is rendered
  - **WHEN** the courses section is displayed
  - **THEN** it SHALL show at least three course cards with prices and titles
  - **AND** each card SHALL display user and comment counts

### 5. CtaSection
- The system SHALL render a call-to-action section with a background image, dark overlay, headline "Enhance Your Skills With Best Online Courses", and an "Enroll Now" button.
- Scenario — CTA content:
  - **GIVEN** the page is rendered
  - **WHEN** the CTA section is displayed
  - **THEN** it SHALL show the headline and an "Enroll Now" button

### 6. Reviews
- The system SHALL render an instructor/testimonial section titled "Our Expert Instructors" with instructor cards showing an avatar, name, role, star rating, and review text.
- Scenario — Instructor cards:
  - **GIVEN** the page is rendered
  - **WHEN** the reviews section is displayed
  - **THEN** it SHALL show instructor cards with names and star ratings

### 7. SearchCourse
- The system SHALL render a search section with a dark overlay background, heading "Search For Available Courses", and a search input with submit button.
- Scenario — Search input:
  - **GIVEN** the page is rendered
  - **WHEN** the user types in the search input
  - **THEN** the input value SHALL update to reflect the typed text
  - **AND** submitting the form SHALL not cause a page reload

### 8. UpcomingEvents
- The system SHALL render an events section titled "Upcoming Events" with event cards showing an image, title, date/time, and venue.
- Scenario — Event cards:
  - **GIVEN** the page is rendered
  - **WHEN** the events section is displayed
  - **THEN** it SHALL show event cards with titles, dates, and venues

### 9. Blog
- The system SHALL render a blog section titled "Latest Posts From Blog" with post cards showing an image, author, date, comment count, title, excerpt, and a "View More" button.
- Scenario — Blog posts:
  - **GIVEN** the page is rendered
  - **WHEN** the blog section is displayed
  - **THEN** it SHALL show blog post cards with titles and "View More" buttons

### 10. Newsletter
- The system SHALL render a newsletter subscription section with an orange background, heading "Subscribe to Get Updated Information", email input, and a "Subscribe" button.
- Scenario — Newsletter form:
  - **GIVEN** the page is rendered
  - **WHEN** the user types an email and clicks Subscribe
  - **THEN** the form SHALL submit without page reload

### 11. Footer
- The system SHALL render a dark navy footer with the site name "Precept", link columns (Quick Links, Resources, Contact), and a bottom bar with a "Made with ❤ by Component Dock" link pointing to `https://www.componentdock.com/`.
- Scenario — Component Dock link:
  - **GIVEN** the page is rendered
  - **WHEN** the footer is displayed
  - **THEN** it SHALL contain a link to `https://www.componentdock.com/` with target `_blank`
  - **AND** the link text SHALL include "Component Dock"
- Scenario — No ColorLib references:
  - **GIVEN** the page is rendered
  - **WHEN** the footer text is inspected
  - **THEN** it SHALL NOT contain the string "colorlib" (case-insensitive)

## Verification

- [x] `apps/precept` ships on https://precept.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/precept/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/precept/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/precept/public/CNAME` = `precept.free.componentdock.com`
  and the package `homepage` = `https://precept.free.componentdock.com`.
