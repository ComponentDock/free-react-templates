## Purpose

Spectra is a personal portfolio/freelance developer template, recreating the ColorLib Niko design. It provides a single-page portfolio with navbar, hero section, about section, skills with progress bars, project gallery, blog posts, contact form, and a branded footer.

## Design reference (replication findings)

- **Source:** ColorLib "Niko" — https://colorlib.com/wp/template/niko/
- **Source slug:** `niko`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/niko/ — **HTTP 200**, 32,446 B, fetched 2026-10-23 (page `<title>`: "Niko - Free Bootstrap 4 Template by Colorlib"). The slug-only path is the demo itself — no alias was needed.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/niko/css/style.css`, fetched 2026-10-23): brand `#0075f6`, `#9ff669`, `#31de79`, `#007bff`; dominant neutrals `#000000`, `#6c757d`, `#212529`; type Segoe UI, SFMono-Regular, Poppins. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/niko-free-template.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/spectra` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: Navbar with scroll-aware styling

The template SHALL display a fixed dark navbar with brand logo "S", navigation links (Home, About, Skills, Projects, Blog, Contact), and a mobile hamburger toggle. The navbar SHALL apply a backdrop blur effect when the user scrolls past 50px.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar displays all six navigation links

#### Scenario: Mobile menu toggles on button click

- **WHEN** the user clicks the hamburger toggle button
- **THEN** the mobile menu expands showing all navigation links
- **AND** the button aria-expanded attribute is true

#### Scenario: Mobile menu closes when a link is clicked

- **WHEN** the mobile menu is open and the user clicks a navigation link
- **THEN** the mobile menu closes

#### Scenario: Navbar adds scroll effect

- **WHEN** the user scrolls past 50px
- **THEN** the navbar applies a backdrop blur and shadow class

### Requirement: Hero section with greeting and CTA

The template SHALL display a full-width hero section with a background image, a "Hello" subheading, a main heading with the developer name, a subtitle, and a "Hire me" button linking to the contact section.

#### Scenario: Hero displays greeting and name

- **WHEN** the page loads
- **THEN** the hero section shows "Hello" subheading
- **AND** shows "I'm Alex Morgan" heading
- **AND** shows "A Freelance Web Developer" subtitle

#### Scenario: Hero CTA links to contact

- **WHEN** the user clicks "Hire me"
- **THEN** the page scrolls to the contact section

### Requirement: About section with services and counter

The template SHALL display an about section with a photo, "Welcome" subheading, "About Me" heading, description paragraph, two service cards (Web Design, Web Application), and a counter showing "200 Finished Projects".

#### Scenario: About displays services

- **WHEN** the about section renders
- **THEN** service cards for "Web Design" and "Web Application" are visible

#### Scenario: About displays project counter

- **WHEN** the about section renders
- **THEN** the counter shows "200" and "Finished Projects"

### Requirement: Skills section with progress bars

The template SHALL display a skills section on a light background with four progress bars: Photoshop (75%), jQuery (60%), HTML5 (85%), CSS3 (90%). Each progress bar SHALL have proper ARIA attributes.

#### Scenario: Skills renders all progress bars

- **WHEN** the skills section renders
- **THEN** four progress bars are visible with correct percentages

#### Scenario: Progress bars have accessible attributes

- **WHEN** the skills section renders
- **THEN** each progress bar has role="progressbar" with aria-valuenow, aria-valuemin, and aria-valuemax

### Requirement: Projects gallery with hover overlay

The template SHALL display a projects section with six project cards in a responsive grid. Each card SHALL show an image with a hover overlay containing the project title and an icon.

#### Scenario: Projects displays all cards

- **WHEN** the projects section renders
- **THEN** six project cards are visible with titles

### Requirement: Blog section with posts

The template SHALL display a blog section with three blog post cards. Each card SHALL show an image, date, author, title, and a "Read more" link.

#### Scenario: Blog displays all posts

- **WHEN** the blog section renders
- **THEN** three blog posts are visible with dates and titles

### Requirement: Contact section with form

The template SHALL display a contact section with contact information (address, phone, email) and a form with name, email, subject, message fields, and a submit button. On submit, a success message SHALL replace the form.

#### Scenario: Contact form submits successfully

- **WHEN** the user fills all form fields and clicks "Send Message"
- **THEN** a "Thank you!" success message is displayed

### Requirement: Footer with Component Dock link

The template SHALL display a blue footer with brand name, description, social icons (Twitter, GitHub, LinkedIn), navigation links, latest projects, and a copyright line. The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer links to Component Dock

- **WHEN** the footer renders
- **THEN** a link to https://www.componentdock.com/ is visible with text "Component Dock"
- **AND** the link opens in a new tab

#### Scenario: Footer has accessible social links

- **WHEN** the footer renders
- **THEN** social links have aria-labels for Twitter, GitHub, and LinkedIn

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/spectra/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/spectra/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
