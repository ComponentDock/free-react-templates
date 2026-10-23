# Template: Brightmind (Education)

## Purpose

An education and university landing page template featuring courses, teachers, events, testimonials, and a newsletter signup. Recreation of ColorLib "Genius" (https://colorlib.com/wp/template/genius/).

### Design tokens (extracted from preview)

| Token         | Value                                               |
| ------------- | --------------------------------------------------- |
| Primary brand | #167ce9 (blue)                                      |
| Accent        | #ffc300 (gold)                                      |
| Dark bg       | #1b212c                                             |
| Light bg      | #f7f7f7                                             |
| Text          | #1b212c (dark), #8d9db9 (muted)                     |
| Font          | "Work Sans" (Google Fonts)                          |
| Hero gradient | purple #6a00ff → gold #ffd900 (overlay on bg image) |

## Requirements

### Requirement: Navbar

The template SHALL display a dark navigation bar with the "Brightmind" brand and links to all sections.

#### Scenario: Desktop navigation links

- **WHEN** the page loads
- **THEN** the navbar displays "Brightmind" brand and links: Home, About, Courses, Teachers, Blog, Events, Contact

#### Scenario: Mobile menu toggle

- **WHEN** I am on a mobile viewport and tap the hamburger button
- **THEN** the mobile menu opens showing all nav links
- **AND** tapping a link closes the menu

### Requirement: Hero section

The template SHALL display a full-width hero with a gradient overlay background, headline, and two CTA buttons.

#### Scenario: Hero content

- **WHEN** the page loads
- **THEN** the hero shows the headline "No Nation Can Prosper In Life Without Education"
- **AND** an "Apply Now" button linking to #apply
- **AND** a "View Courses" button linking to #courses

### Requirement: Search course section

The template SHALL display a search section with a study interest input and a featured article card.

#### Scenario: Search form

- **WHEN** the page loads
- **THEN** a search input and "See all courses" link are visible
- **AND** submitting the form does not navigate away

### Requirement: Services section

The template SHALL display three service cards (Admission, Notice Board, Scholarship).

#### Scenario: Service cards rendered

- **WHEN** the page loads
- **THEN** three service cards are visible with icons and descriptions

### Requirement: Stats section

The template SHALL display statistics counters for students, courses, and advisors.

#### Scenario: Statistics displayed

- **WHEN** the page loads
- **THEN** the counters show Satisfied Students, Courses Completed, and Expert Advisors

### Requirement: Testimonials section

The template SHALL display student testimonial cards with quotes and avatars.

#### Scenario: Testimonials rendered

- **WHEN** the page loads
- **THEN** testimonial cards are visible with quotes and author names

### Requirement: Teachers section

The template SHALL display teacher/advisor cards with photos and subjects.

#### Scenario: Teacher cards

- **WHEN** the page loads
- **THEN** teacher cards are visible with names and subjects

### Requirement: Free trial section

The template SHALL display a gold banner with a trial course CTA.

#### Scenario: Free trial CTA

- **WHEN** the page loads
- **THEN** a "Try our free trial course" heading and "Join now!" button are visible

### Requirement: Courses section

The template SHALL display course cards with category, title, price, and enroll link.

#### Scenario: Course cards

- **WHEN** the page loads
- **THEN** course cards are visible with category badges, titles, and "Enroll Now" links

### Requirement: Blog section

The template SHALL display recent blog post cards.

#### Scenario: Blog posts

- **WHEN** the page loads
- **THEN** blog post cards are visible with dates, titles, and excerpts

### Requirement: Events section

The template SHALL display upcoming event cards.

#### Scenario: Event cards

- **WHEN** the page loads
- **THEN** event cards are visible with dates and titles

### Requirement: Newsletter section

The template SHALL display a newsletter subscription form with email input and submit button.

#### Scenario: Newsletter form

- **WHEN** the page loads
- **THEN** an email input and "Subscribe" button are visible
- **AND** submitting the form does not navigate away

### Requirement: Footer

The template SHALL display a dark footer with brand, social links, recent blog, contact info, and Component Dock attribution.

#### Scenario: Footer content

- **WHEN** the page loads
- **THEN** the footer shows "Brightmind" brand
- **AND** social links (Facebook, Twitter, Instagram, LinkedIn) open in new tabs
- **AND** a "Made with Component Dock" link points to https://www.componentdock.com/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/brightmind/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/brightmind/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar — the navbar displays "Brightmind" brand and links: Home, About, Courses, Teachers, Blog, Events, Contact
- [ ] Hero section — the hero shows the headline "No Nation Can Prosper In Life Without Education"
- [x] Search course section — a search input and "See all courses" link are visible
- [ ] Services section — three service cards are visible with icons and descriptions
- [ ] Stats section — the counters show Satisfied Students, Courses Completed, and Expert Advisors
- [ ] Testimonials section — testimonial cards are visible with quotes and author names
- [ ] Teachers section — teacher cards are visible with names and subjects
- [x] Free trial section — a "Try our free trial course" heading and "Join now!" button are visible
- [x] Courses section — course cards are visible with category badges, titles, and "Enroll Now" links
- [ ] Blog section — blog post cards are visible with dates, titles, and excerpts
- [ ] Events section — event cards are visible with dates and titles
- [x] Newsletter section — an email input and "Subscribe" button are visible
