# Template: Fitnest (Health Fitness)

## Purpose

Fitnest is a yoga and fitness studio landing page template, recreating the ColorLib "Zogin" design under a new name. It provides a complete single-page marketing site for a yoga studio with navigation, hero, about, services, stats, courses, gallery, instructors, appointment booking, testimonials, and footer sections.

## Design reference (replication findings)

- **Source:** ColorLib "Zogin" — https://colorlib.com/wp/template/zogin/
- **Source slug:** `zogin`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/zogin/ — **HTTP 200**, 36,437 B, fetched 2026-10-23 (page `<title>`: "Zogin | Template"). The slug-only path is the demo itself — no alias was needed.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/zogin/css/style.css`, fetched 2026-10-23): brand `#5768ad`, `#263246`, `#001943`, `#f44336`; dominant neutrals `#ffffff`, `#9b9ea3`, `#6e7580`; type DM Sans. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/zogin-free-template.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/fitnest` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: Navigation bar with contact info and social links

The template SHALL display a navigation bar with a logo ("Fitnest"), contact information (phone, email, operating hours), a "JOIN US" CTA button, navigation links (Home, About, Classes, Blog, Contact), and social media icons.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on desktop viewport
- **THEN** the navbar shows the logo, contact info, nav links, and social icons

#### Scenario: Mobile navigation toggle

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the mobile navigation menu opens with all links visible

### Requirement: Hero section with headline and CTA

The template SHALL display a hero section with a background image, subtitle "Welcome to Fitnest", heading "What hurts today makes you stronger tomorrow", and a "DISCOVER MORE" call-to-action button.

#### Scenario: Hero content renders correctly

- **WHEN** the hero section is visible
- **THEN** the heading, subtitle, and CTA button are displayed

### Requirement: About section with images and description

The template SHALL display an about section with a two-column layout: stacked images on the left and a section title "Welcome to Fitnest", a quote, descriptive paragraphs about yoga teacher training, and a "MORE ABOUT US" button on the right.

#### Scenario: About section content

- **WHEN** the about section is rendered
- **THEN** the heading, quote, description text, and CTA button are visible

### Requirement: Services section showcasing yoga disciplines

The template SHALL display 6 service items (Asana, Meditation, Mudra, Bandhas, Philosophy, Pranayama) each with an icon, heading, and short description.

#### Scenario: All 6 services render

- **WHEN** the services section is visible
- **THEN** 6 service cards are displayed with the correct names

### Requirement: Choose Us section with statistics

The template SHALL display a "Why Choose Us" section with statistics: 2146 Students, 15 Years Of Experience, 48 Branches, and 234 Expert Staff, alongside a descriptive text and an image.

#### Scenario: Stats display correctly

- **WHEN** the choose us section is visible
- **THEN** all four statistics are shown with their labels

### Requirement: Upcoming courses section

The template SHALL display 3 course cards (100 Hour, 200 Hour, 300 Hour Yoga Course) with background images, date badges, duration, instructor names, and "JOIN NOW" buttons.

#### Scenario: Three course cards render

- **WHEN** the classes section is visible
- **THEN** 3 course cards are displayed with JOIN NOW buttons

### Requirement: Gallery section with image grid

The template SHALL display 8 gallery images in a responsive grid layout.

#### Scenario: Gallery images render

- **WHEN** the gallery section is visible
- **THEN** 8 images are displayed in a grid

### Requirement: Instructors section with team members

The template SHALL display 4 instructor cards, each with a photo, name, and "Yoga Trainer" role.

#### Scenario: Four instructors render

- **WHEN** the instructors section is visible
- **THEN** 4 instructor cards are shown with names and roles

### Requirement: Appointment booking form

The template SHALL display an appointment form on a dark background with fields for Name, Email, Phone, Class selection (dropdown), Message (textarea), and a Submit button.

#### Scenario: Form renders with all fields

- **WHEN** the appointment section is visible
- **THEN** all form fields and the submit button are present

#### Scenario: Form submission

- **WHEN** the user fills all fields and clicks Submit
- **THEN** the form submission handler is called

### Requirement: Testimonials carousel

The template SHALL display a testimonials section with at least 3 testimonial items, each containing a quote, author avatar, name, and role.

#### Scenario: Testimonials render with navigation

- **WHEN** the testimonials section is visible
- **THEN** testimonial quotes and author names are displayed, and prev/next navigation works

### Requirement: Footer with Component Dock branding

The template SHALL display a footer with 4 columns (about/hours, Inspiration links, About Us links, Contact info), social icons, and a copyright line linking to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer links to Component Dock

- **WHEN** the footer is rendered
- **THEN** a link to https://www.componentdock.com/ is present with "Component Dock" text

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/fitnest/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/fitnest/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navigation bar with contact info and social links — the navbar shows the logo, contact info, nav links, and social icons
- [ ] Hero section with headline and CTA — the heading, subtitle, and CTA button are displayed
- [ ] About section with images and description — the heading, quote, description text, and CTA button are visible
- [ ] Services section showcasing yoga disciplines — 6 service cards are displayed with the correct names
- [ ] Choose Us section with statistics — all four statistics are shown with their labels
- [ ] Upcoming courses section — 3 course cards are displayed with JOIN NOW buttons
- [ ] Gallery section with image grid — 8 images are displayed in a grid
- [ ] Instructors section with team members — 4 instructor cards are shown with names and roles
- [ ] Appointment booking form — all form fields and the submit button are present
- [ ] Testimonials carousel — testimonial quotes and author names are displayed, and prev/next navigation works
