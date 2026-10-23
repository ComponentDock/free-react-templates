# Template: Forger (Personal)

## Purpose

Recreate the ColorLib "Niko" freelance developer portfolio template as a React 19 + Vite + Tailwind CSS 4 app named "Forger". The template features a dark navbar, hero with background image, about section with services, skills with progress bars, service columns, CTA banner, project grid, blog cards, contact form, and a dark footer with Component Dock branding.

## Design reference (replication findings)

- **Source:** ColorLib "Niko" — https://colorlib.com/wp/template/niko/
- **Source slug:** `niko`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/niko/ — **HTTP 200**, 32,446 B, fetched 2026-10-23 (page `<title>`: "Niko - Free Bootstrap 4 Template by Colorlib"). The slug-only path is the demo itself — no alias was needed.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/niko/css/style.css`, fetched 2026-10-23): brand `#0075f6`, `#9ff669`, `#31de79`, `#007bff`; dominant neutrals `#000000`, `#6c757d`, `#212529`; type Segoe UI, SFMono-Regular, Poppins. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/niko-free-template.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/forger` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: Navbar with navigation and mobile toggle

The app SHALL render a sticky dark navbar with brand logo "F", navigation links (Home, About, Skills, Projects, Blog, Contact), a "Hire me" button, and a mobile hamburger toggle.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar displays the brand link "F", all six navigation links, and the "Hire me" button

#### Scenario: Mobile toggle opens and closes menu

- **WHEN** the user clicks the mobile menu toggle button
- **THEN** the mobile navigation menu appears with all links
- **WHEN** the user clicks a link in the mobile menu
- **THEN** the mobile menu closes

### Requirement: Hero section with greeting and CTA

The app SHALL render a full-width hero section with a background image, "Hello" badge, name heading "Alex Forger", subtitle "A Freelance Web Developer", and a "Hire me" call-to-action button.

#### Scenario: Hero displays greeting and name

- **WHEN** the page loads
- **THEN** the hero section shows "Hello" badge, "Alex Forger" heading, and "A Freelance Web Developer" subtitle

#### Scenario: Hero has call-to-action

- **WHEN** the page loads
- **THEN** a "Hire me" link is visible in the hero section

### Requirement: About Me section with services and counter

The app SHALL render an About section with an image, "About Me" heading, two service cards (Web Design, Web Application), and a counter showing "200 Finished Projects".

#### Scenario: About section displays services

- **WHEN** the page loads
- **THEN** the About section shows "Web Design" and "Web Application" service headings

#### Scenario: About section shows project counter

- **WHEN** the page loads
- **THEN** the counter displays "200" and "Finished Projects"

### Requirement: Skills section with progress bars

The app SHALL render a Skills section with 6 progress bars: Photoshop (75%), jQuery (60%), HTML5 (85%), CSS3 (90%), WordPress (70%), SEO (80%).

#### Scenario: All skill bars render with correct values

- **WHEN** the page loads
- **THEN** 6 progress bars are rendered with aria-valuenow values of 75, 60, 85, 90, 70, and 80 respectively

### Requirement: What I Do service columns

The app SHALL render 3 service columns (Explore, Create, Learn) each with an icon and a list of sub-services.

#### Scenario: Service columns display correctly

- **WHEN** the page loads
- **THEN** headings "Explore", "Create", and "Learn" are visible with their respective service items

### Requirement: Hire Me CTA banner

The app SHALL render a blue banner with "I'm Available For Freelancing" text and a white "Hire me" button.

#### Scenario: CTA banner renders

- **WHEN** the page loads
- **THEN** the text "Available" and "For Freelancing" are visible with a "Hire me" link

### Requirement: Projects grid

The app SHALL render 5 project cards in a responsive grid layout with background images, overlay, title, and category label.

#### Scenario: Projects display correctly

- **WHEN** the page loads
- **THEN** 5 project cards with "Branding & Illustration Design" titles are rendered

### Requirement: Blog section with 3 entries

The app SHALL render 3 blog cards with images, dates, authors, comment counts, titles, and excerpts.

#### Scenario: Blog entries render

- **WHEN** the page loads
- **THEN** 3 blog article elements are rendered with titles and metadata

### Requirement: Contact form

The app SHALL render a contact form with Name, Email, Subject, Message fields and a "Send Message" button. On submit, a success message appears.

#### Scenario: Form fields are interactive

- **WHEN** the user types in the form fields
- **THEN** the field values update accordingly

#### Scenario: Form submission shows success

- **WHEN** the user clicks "Send Message"
- **THEN** a thank-you message is displayed

### Requirement: Footer with Component Dock link

The app SHALL render a dark footer with brand section, navigation links, services links, contact information, and a copyright line linking to componentdock.com.

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** a link to https://www.componentdock.com/ with text "Component Dock" is present in the footer

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/forger/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/forger/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar with navigation and mobile toggle — the navbar displays the brand link "F", all six navigation links, and the "Hire me" button
- [ ] Hero section with greeting and CTA — the hero section shows "Hello" badge, "Alex Forger" heading, and "A Freelance Web Developer" subtitle
- [ ] About Me section with services and counter — the About section shows "Web Design" and "Web Application" service headings
- [ ] Skills section with progress bars — 6 progress bars are rendered with aria-valuenow values of 75, 60, 85, 90, 70, and 80 respectively
- [ ] What I Do service columns — headings "Explore", "Create", and "Learn" are visible with their respective service items
- [ ] Hire Me CTA banner — the text "Available" and "For Freelancing" are visible with a "Hire me" link
- [ ] Projects grid — 5 project cards with "Branding & Illustration Design" titles are rendered
- [ ] Blog section with 3 entries — 3 blog article elements are rendered with titles and metadata
- [ ] Contact form — the field values update accordingly
