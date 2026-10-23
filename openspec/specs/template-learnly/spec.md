# Template: Learnly (Education / University)

Recreation of ColorLib "Academics" (https://colorlib.com/wp/template/academics/).

## Purpose

Learnly is a single-page education/university landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Academics" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Source:** ColorLib "Academics" — https://colorlib.com/wp/template/academics/
- **Source slug:** `academics`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/academics/ — **HTTP 200**, 31,754 B, fetched 2026-10-23 (page `<title>`: "Academics — Website by Colorlib"). The slug-only path is the demo itself — no alias was needed.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/academics/css/style.css`, fetched 2026-10-23): brand `#51be78`, `#183661`, `#8bc34a`, `#7697c6`; dominant neutrals `#edf0f5`, `#25262a`, `#f4f5f9`; type Muli. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/academics-free-template.jpeg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/learnly` had no recorded reference (docs/replication.md requires one).

## Design tokens

<!-- brand-claim:2026-10-23 -->
| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Brand (stated in this prep) | `#51be78` | live sheet paints it ×21 — `background` on `.sticky-wrapper.is-sticky .site-navbar .site-menu > li > a.active:after`; style.css (26,509 B, sha256 6861d08004e9) · <https://preview.colorlib.com/theme/academics/> |

Recorded so the palette is machine-readable: the prep already states this colour in its design notes, and this row carries the same value with the live-sheet evidence.

## Requirements

### Requirement: TopBar displays contact info and login/register

The template SHALL render a top bar with contact information (phone, email, question link) and login/register actions.

#### Scenario: Contact info visible on desktop

- **WHEN** the page loads on a desktop viewport
- **THEN** the top bar shows phone number "10 20 123 456", email "info@mydomain.com", and a "Have a question?" link

#### Scenario: Login and register visible

- **WHEN** the page loads
- **THEN** a "Log In" link and a green "Register" button are rendered

### Requirement: Navbar with navigation and social links

The template SHALL render a navigation bar with the brand name, desktop nav links, social icons, and a mobile hamburger menu.

#### Scenario: Desktop nav links

- **WHEN** the page loads on desktop
- **THEN** navigation links for Home, About Us, Admissions, Courses, and Contact are visible

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger menu button
- **THEN** the mobile navigation menu opens with all nav links

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open and a nav link is clicked
- **THEN** the mobile menu closes

### Requirement: Hero carousel with two slides

The template SHALL render a full-width hero carousel that cycles between two slides automatically and via indicator buttons.

#### Scenario: First slide visible by default

- **WHEN** the page loads
- **THEN** the heading "Learnly University" is displayed

#### Scenario: Slide indicator navigation

- **WHEN** the user clicks the second slide indicator
- **THEN** the heading "You Can Learn Anything" is displayed

#### Scenario: Auto-advance

- **WHEN** 5 seconds pass without user interaction
- **THEN** the carousel advances to the next slide

### Requirement: Features section with three cards

The template SHALL render a "Why Learnly Works" section with three feature cards.

#### Scenario: Feature cards rendered

- **WHEN** the features section is visible
- **THEN** cards for "Personalize Learning", "Trusted Courses", and "Tools for Students" are displayed

#### Scenario: Each card has a Learn More button

- **WHEN** the features section is visible
- **THEN** each feature card has a "Learn More" button

### Requirement: Courses section with six course cards

The template SHALL render a "Popular Courses" section with six course cards showing thumbnails, prices, categories, ratings, and enrollment buttons.

#### Scenario: Course cards displayed

- **WHEN** the courses section is visible
- **THEN** six course cards are rendered with titles, $99.00 price badges, and 5-star ratings

### Requirement: About section with background image

The template SHALL render an "About Our University" section with a parallax background image and descriptive text.

#### Scenario: About content

- **WHEN** the about section is visible
- **THEN** the heading "About Our University" and a "Read more" link are displayed

### Requirement: Testimonials section

The template SHALL render a testimonials section with four testimonial cards.

#### Scenario: Testimonial cards

- **WHEN** the testimonials section is visible
- **THEN** four testimonial cards with names, roles, and quotes are displayed

### Requirement: Philosophy section with three pillars

The template SHALL render a philosophy section with three columns: Our Philosophy, Academics Principle, and Key of Success.

#### Scenario: Philosophy pillars

- **WHEN** the philosophy section is visible
- **THEN** all three pillar titles and descriptions are displayed

### Requirement: News section with blog posts and videos

The template SHALL render a news section with a featured post, three side posts, and a campus videos sidebar.

#### Scenario: News content

- **WHEN** the news section is visible
- **THEN** the featured post "Campus Camping and Learning Session" and the heading "News & Updates" are displayed

### Requirement: Newsletter subscription form

The template SHALL render a newsletter section with an email input and submit button.

#### Scenario: Newsletter form

- **WHEN** the newsletter section is visible
- **THEN** an email input with placeholder "Enter your email" and a "Send" button are displayed

#### Scenario: Form clears on submit

- **WHEN** the user types an email and clicks Send
- **THEN** the email input is cleared

### Requirement: Footer with Component Dock link

The template SHALL render a footer with four columns, copyright text, and a link to Component Dock.

#### Scenario: Footer columns

- **WHEN** the footer is visible
- **THEN** columns for "Our Campus", "Our Courses", and "Contact" are displayed

#### Scenario: Component Dock attribution

- **WHEN** the footer is visible
- **THEN** a link to https://www.componentdock.com/ labeled "Component Dock" is present

#### Scenario: No ColorLib references

- **WHEN** the footer HTML is inspected
- **THEN** no mention of "colorlib" exists in the rendered output

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/learnly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/learnly/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] TopBar displays contact info and login/register — the top bar shows phone number "10 20 123 456", email "info@mydomain.com", and a "Have a question?" link
- [ ] Navbar with navigation and social links — navigation links for Home, About Us, Admissions, Courses, and Contact are visible
- [x] Hero carousel with two slides — the heading "Learnly University" is displayed
- [x] Features section with three cards — cards for "Personalize Learning", "Trusted Courses", and "Tools for Students" are displayed
- [ ] Courses section with six course cards — six course cards are rendered with titles, $99.00 price badges, and 5-star ratings
- [x] About section with background image — the heading "About Our University" and a "Read more" link are displayed
- [ ] Testimonials section — four testimonial cards with names, roles, and quotes are displayed
- [ ] Philosophy section with three pillars — all three pillar titles and descriptions are displayed
- [x] News section with blog posts and videos — the featured post "Campus Camping and Learning Session" and the heading "News & Updates" are displayed
- [x] Newsletter subscription form — an email input with placeholder "Enter your email" and a "Send" button are displayed
