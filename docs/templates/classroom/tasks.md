# Classroom — Implementation Tasks

Source design: **Oneschool** (`https://colorlib.com/wp/template/oneschool/`) → recreation name **classroom**. Shipped at https://classroom.free.componentdock.com.

Scope: Recreate the ColorLib "Oneschool" school/education landing page as a React 19 + Tailwind CSS 4 + TypeScript template under the name "Classroom". The template serves as a free, production-ready education website landing page with courses, programs, teachers, testimonials, and contact form sections.

## Component breakdown

Render order as composed in `apps/classroom/src/App.tsx`:

### 1. Navbar
- The template SHALL display a sticky navigation bar with the "Classroom" logo, navigation links (Home, Courses, Programs, Teachers), and a "Contact Us" CTA button.
- Scenario — Desktop navigation:
  - **WHEN** the page loads on desktop
  - **THEN** the navbar shows logo "Classroom", nav links, and Contact Us button
- Scenario — Mobile navigation toggle:
  - **WHEN** the user clicks the hamburger menu on mobile
  - **THEN** the mobile menu opens showing nav links and Contact Us

### 2. Hero
- The template SHALL display a hero section with background image, headline "Learn From The Expert", description text, "Admission Now" CTA button, and a sign-up form.
- Scenario — Hero renders:
  - **WHEN** the page loads
  - **THEN** the hero section shows headline, CTA button, and sign-up form with email/password fields

### 3. Courses
- The template SHALL display a courses section with a carousel of 6 course cards showing price, lessons, title, description, student count, and comment count with prev/next navigation.
- Scenario — Course cards render:
  - **WHEN** the courses section loads
  - **THEN** 3 course cards are visible with price, title, and student count
- Scenario — Course navigation:
  - **WHEN** the user clicks Next
  - **THEN** the next set of courses is displayed

### 4. Programs
- The template SHALL display an "Our Programs" section with 3 alternating image+text rows, each with icon stats (graduates, universities).
- Scenario — Programs render:
  - **WHEN** the programs section loads
  - **THEN** 3 program rows are visible with titles and stats

### 5. Teachers
- The template SHALL display an "Our Teachers" section with 3 teacher cards showing circular photos, names, and roles.
- Scenario — Teachers render:
  - **WHEN** the teachers section loads
  - **THEN** 3 teacher cards are visible with names and Physics Teacher role

### 6. Testimonial
- The template SHALL display a testimonial section with a dark overlay background image, person photo, name, and quote.
- Scenario — Testimonial renders:
  - **WHEN** the testimonial section loads
  - **THEN** the person name "Jerome Jensen" and quote text are visible

### 7. WhyChooseUs
- The template SHALL display a "Why Choose Us" section with a features list and image.
- Scenario — Features render:
  - **WHEN** the Why Choose Us section loads
  - **THEN** 6 feature items are visible including "22,931 Yearly Graduates"

### 8. Contact
- The template SHALL display a "Message Us" contact form with first name, last name, subject, email, message fields, and a "Send Message" button.
- Scenario — Contact form renders:
  - **WHEN** the contact section loads
  - **THEN** all form fields and Send Message button are visible

### 9. Footer
- The template SHALL display a footer with "About Classroom" text, navigation links, subscribe form, and a copyright line linking to https://www.componentdock.com/.
- Scenario — Footer renders:
  - **WHEN** the footer loads
  - **THEN** "About Classroom" text, links, subscribe form, and Component Dock link are visible
- Scenario — Component Dock link:
  - **WHEN** the user views the footer
  - **THEN** the "Component Dock" link points to https://www.componentdock.com/ with target="_blank"

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/classroom/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/classroom/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/classroom` ships on https://classroom.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/classroom/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/classroom/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/classroom/public/CNAME` = `classroom.free.componentdock.com`
  and the package `homepage` = `https://classroom.free.componentdock.com`.
