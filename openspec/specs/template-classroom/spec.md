# Template: Classroom (school & education landing)

Recreation of ColorLib "Oneschool" (https://colorlib.com/wp/template/oneschool/).

## Purpose

Recreate the ColorLib "Oneschool" school/education landing page as a React 19 + Tailwind CSS 4 + TypeScript template under the name "Classroom". The template serves as a free, production-ready education website landing page with courses, programs, teachers, testimonials, and contact form sections.

## Design reference (replication findings)

- **Source:** ColorLib "Oneschool" — https://colorlib.com/wp/template/oneschool/
- **Source slug:** `oneschool`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/oneschool/ — **HTTP 200**, 35,314 B, fetched 2026-10-23 (page `<title>`: "OneSchool — Online and Classroom Courses With Expert Teachers"). The slug-only path is the demo itself — no alias was needed.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/oneschool/css/style.min.css?v=3.0.0`, fetched 2026-10-23): brand `#7971ea`, `#f23a2e`, `#8bc34a`, `#f89d13`; dominant neutrals `#212529`, `#6c757d`, `#343a40`; type Mulish. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/oneschool-free-template.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/classroom` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: Navigation bar

The template SHALL display a sticky navigation bar with the "Classroom" logo, navigation links (Home, Courses, Programs, Teachers), and a "Contact Us" CTA button.

#### Scenario: Desktop navigation

- **WHEN** the page loads on desktop
- **THEN** the navbar shows logo "Classroom", nav links, and Contact Us button

#### Scenario: Mobile navigation toggle

- **WHEN** the user clicks the hamburger menu on mobile
- **THEN** the mobile menu opens showing nav links and Contact Us

### Requirement: Hero section

The template SHALL display a hero section with background image, headline "Learn From The Expert", description text, "Admission Now" CTA button, and a sign-up form.

#### Scenario: Hero renders

- **WHEN** the page loads
- **THEN** the hero section shows headline, CTA button, and sign-up form with email/password fields

### Requirement: Courses section

The template SHALL display a courses section with a carousel of 6 course cards showing price, lessons, title, description, student count, and comment count with prev/next navigation.

#### Scenario: Course cards render

- **WHEN** the courses section loads
- **THEN** 3 course cards are visible with price, title, and student count

#### Scenario: Course navigation

- **WHEN** the user clicks Next
- **THEN** the next set of courses is displayed

### Requirement: Programs section

The template SHALL display an "Our Programs" section with 3 alternating image+text rows, each with icon stats (graduates, universities).

#### Scenario: Programs render

- **WHEN** the programs section loads
- **THEN** 3 program rows are visible with titles and stats

### Requirement: Teachers section

The template SHALL display an "Our Teachers" section with 3 teacher cards showing circular photos, names, and roles.

#### Scenario: Teachers render

- **WHEN** the teachers section loads
- **THEN** 3 teacher cards are visible with names and Physics Teacher role

### Requirement: Testimonial section

The template SHALL display a testimonial section with a dark overlay background image, person photo, name, and quote.

#### Scenario: Testimonial renders

- **WHEN** the testimonial section loads
- **THEN** the person name "Jerome Jensen" and quote text are visible

### Requirement: Why Choose Us section

The template SHALL display a "Why Choose Us" section with a features list and image.

#### Scenario: Features render

- **WHEN** the Why Choose Us section loads
- **THEN** 6 feature items are visible including "22,931 Yearly Graduates"

### Requirement: Contact form

The template SHALL display a "Message Us" contact form with first name, last name, subject, email, message fields, and a "Send Message" button.

#### Scenario: Contact form renders

- **WHEN** the contact section loads
- **THEN** all form fields and Send Message button are visible

### Requirement: Footer

The template SHALL display a footer with "About Classroom" text, navigation links, subscribe form, and a copyright line linking to https://www.componentdock.com/.

#### Scenario: Footer renders

- **WHEN** the footer loads
- **THEN** "About Classroom" text, links, subscribe form, and Component Dock link are visible

#### Scenario: Component Dock link

- **WHEN** the user views the footer
- **THEN** the "Component Dock" link points to https://www.componentdock.com/ with target="_blank"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/classroom/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/classroom/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
