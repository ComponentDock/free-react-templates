# Brightmind — Implementation Tasks

Source design: **Genius** (`https://colorlib.com/wp/template/genius/`) → recreation name **brightmind**. Shipped at https://brightmind.free.componentdock.com.

Scope: An education and university landing page template featuring courses, teachers, events, testimonials, and a newsletter signup. Recreation of ColorLib "Genius" (https://colorlib.com/wp/template/genius/).

## Component breakdown

Render order as composed in `apps/brightmind/src/App.tsx`:

### 1. Navbar
- The template SHALL display a dark navigation bar with the "Brightmind" brand and links to all sections.
- Scenario — Desktop navigation links:
  - **WHEN** the page loads
  - **THEN** the navbar displays "Brightmind" brand and links: Home, About, Courses, Teachers, Blog, Events, Contact
- Scenario — Mobile menu toggle:
  - **WHEN** I am on a mobile viewport and tap the hamburger button
  - **THEN** the mobile menu opens showing all nav links
  - **AND** tapping a link closes the menu

### 2. Hero
- The template SHALL display a full-width hero with a gradient overlay background, headline, and two CTA buttons.
- Scenario — Hero content:
  - **WHEN** the page loads
  - **THEN** the hero shows the headline "No Nation Can Prosper In Life Without Education"
  - **AND** an "Apply Now" button linking to #apply
  - **AND** a "View Courses" button linking to #courses

### 3. SearchCourse
- The template SHALL display a search section with a study interest input and a featured article card.
- Scenario — Search form:
  - **WHEN** the page loads
  - **THEN** a search input and "See all courses" link are visible
  - **AND** submitting the form does not navigate away

### 4. Services
- The template SHALL display three service cards (Admission, Notice Board, Scholarship).
- Scenario — Service cards rendered:
  - **WHEN** the page loads
  - **THEN** three service cards are visible with icons and descriptions

### 5. Stats
- The template SHALL display statistics counters for students, courses, and advisors.
- Scenario — Statistics displayed:
  - **WHEN** the page loads
  - **THEN** the counters show Satisfied Students, Courses Completed, and Expert Advisors

### 6. Testimonials
- The template SHALL display student testimonial cards with quotes and avatars.
- Scenario — Testimonials rendered:
  - **WHEN** the page loads
  - **THEN** testimonial cards are visible with quotes and author names

### 7. Teachers
- The template SHALL display teacher/advisor cards with photos and subjects.
- Scenario — Teacher cards:
  - **WHEN** the page loads
  - **THEN** teacher cards are visible with names and subjects

### 8. FreeTrial
- The template SHALL display a gold banner with a trial course CTA.
- Scenario — Free trial CTA:
  - **WHEN** the page loads
  - **THEN** a "Try our free trial course" heading and "Join now!" button are visible

### 9. Courses
- The template SHALL display course cards with category, title, price, and enroll link.
- Scenario — Course cards:
  - **WHEN** the page loads
  - **THEN** course cards are visible with category badges, titles, and "Enroll Now" links

### 10. Blog
- The template SHALL display recent blog post cards.
- Scenario — Blog posts:
  - **WHEN** the page loads
  - **THEN** blog post cards are visible with dates, titles, and excerpts

### 11. Events
- The template SHALL display upcoming event cards.
- Scenario — Event cards:
  - **WHEN** the page loads
  - **THEN** event cards are visible with dates and titles

### 12. Newsletter
- The template SHALL display a newsletter subscription form with email input and submit button.
- Scenario — Newsletter form:
  - **WHEN** the page loads
  - **THEN** an email input and "Subscribe" button are visible
  - **AND** submitting the form does not navigate away

### 13. Footer
- The template SHALL display a dark footer with brand, social links, recent blog, contact info, and Component Dock attribution.
- Scenario — Footer content:
  - **WHEN** the page loads
  - **THEN** the footer shows "Brightmind" brand
  - **AND** social links (Facebook, Twitter, Instagram, LinkedIn) open in new tabs
  - **AND** a "Made with Component Dock" link points to https://www.componentdock.com/

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/brightmind/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/brightmind/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/brightmind` ships on https://brightmind.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/brightmind/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/brightmind/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/brightmind/public/CNAME` = `brightmind.free.componentdock.com`
  and the package `homepage` = `https://brightmind.free.componentdock.com`.
