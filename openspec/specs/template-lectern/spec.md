# Spec: Lectern — University/Education Landing Template

Recreation of ColorLib "Unica" (https://colorlib.com/wp/template/unica/).

## Purpose

Recreate the ColorLib "Unica" university template as a React 19 + Tailwind CSS 4 + TypeScript landing page under the name "Lectern". The template serves as a free, production-ready university/education website landing page with sections for services, courses, enrollment, gallery, blog, and newsletter.

## Design reference (replication findings)

- **Source:** ColorLib "Unica" — https://colorlib.com/wp/template/unica/
- **Source slug:** `unica`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/unica/ — **HTTP 200**, 35,651 B, fetched 2026-10-23 (page `<title>`: "Unica - University Template"). The slug-only path is the demo itself — no alias was needed.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/unica/css/style.css`, fetched 2026-10-23): brand `#f6783a`, `#020031`, `#f44336`, `#673ab7`; dominant neutrals `#b7b7b7`, `#111111`, `#636363`; type Rubik. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/unica-free-template.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/lectern` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: Template renders all 11 sections in correct order

The Lectern template SHALL render the following sections in order: Header, Navbar, Hero, Counter, Services, Enrollment, Courses, Gallery, Blog, Newsletter, Footer.

#### Scenario: All sections are present

- **WHEN** the page loads
- **THEN** the DOM contains elements with roles: banner (header), navigation (navbar), main (content), contentinfo (footer)
- **AND** the main content area contains Hero, Counter, Services, Enrollment, Courses, Gallery, Blog, Newsletter sections

### Requirement: Navigation provides section anchors

The navbar SHALL contain links to Home (#home), About (#about), Services (#services), Courses (#courses), Blog (#blog), Contact (#contact).

#### Scenario: Nav links navigate to sections

- **WHEN** a user clicks a nav link
- **THEN** the browser scrolls to the corresponding section anchor

### Requirement: Hero displays university branding

The Hero section SHALL display a subtitle "Award Winning University", a headline about knowledge investment, a description about education, and a "Get Started" CTA button linking to courses.

#### Scenario: Hero content renders

- **WHEN** the Hero section is rendered
- **THEN** it shows the subtitle, headline, description, and CTA button

### Requirement: Counter shows course countdown

The Counter section SHALL display a "NEXT COURSE" heading with countdown values (20 Days, 08 Hrs, 40 Mins, 56 Secs) on a dark navy background.

#### Scenario: Countdown values display

- **WHEN** the Counter section renders
- **THEN** the four countdown values and their labels (Days, Hrs, Mins, Secs) are visible

### Requirement: Services displays 6 service items

The Services section SHALL render 6 service cards: Art Studio, Great Facility, Activity Hub, Fully Qualified, Flexible Schedule, Chemistry Lab.

#### Scenario: All services render

- **WHEN** the Services section renders
- **THEN** all 6 service titles are visible

### Requirement: Enrollment shows 3 steps

The Enrollment section SHALL display 3 enrollment steps: Contact, Consulting, Register, over a background image.

#### Scenario: Enrollment steps render

- **WHEN** the Enrollment section renders
- **THEN** the three step titles are visible

### Requirement: Courses shows 5 courses with pricing

The Courses section SHALL render 5 course cards, each with a title and monthly price.

#### Scenario: All courses render

- **WHEN** the Courses section renders
- **THEN** all 5 course titles and prices are visible

### Requirement: Gallery shows 6 images

The Gallery section SHALL display a 2x3 grid of campus images with hover overlay.

#### Scenario: Gallery images render

- **WHEN** the Gallery section renders
- **THEN** 6 images with alt text are present

### Requirement: Blog shows 4 posts

The Blog section SHALL render 4 blog post cards with title, date, author, and excerpt.

#### Scenario: Blog posts render

- **WHEN** the Blog section renders
- **THEN** all 4 post titles, dates, and authors are visible

### Requirement: Newsletter form handles email submission

The Newsletter section SHALL provide an email input and Subscribe button. On submit, the email field clears.

#### Scenario: Newsletter form clears on submit

- **WHEN** a user types an email and clicks Subscribe
- **THEN** the email input value becomes empty

### Requirement: Footer links to Component Dock

The Footer SHALL link to https://www.componentdock.com/ with branded text "Component Dock" in the copyright line.

#### Scenario: Component Dock link present

- **WHEN** the Footer renders
- **THEN** a link to https://www.componentdock.com/ with text "Component Dock" is present
- **AND** the link has target="_blank"

### Requirement: Dark mode toggle works

The Navbar SHALL provide a dark mode toggle button. When clicked, it adds/removes the "dark" class on the HTML element.

#### Scenario: Dark mode toggles

- **WHEN** a user clicks the dark mode toggle
- **THEN** the html element gains the "dark" class
- **WHEN** the user clicks the toggle again
- **THEN** the html element loses the "dark" class

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/lectern/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/lectern/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
