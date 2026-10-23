# Template: Medprime (Medical)

Recreation of ColorLib "Medi 2" (https://colorlib.com/wp/template/medi-2/).

## Purpose

Medprime is a medical clinic landing page template that recreates the ColorLib "Medi 2" design using React 19, Vite, Tailwind CSS 4, and TypeScript. It provides a professional medical website with sections for services, doctors, appointments, and emergency contact.

## Design reference (replication findings)

- **Source:** ColorLib "Medi 2" — https://colorlib.com/wp/template/medi-2/
- **Source slug:** `medi-2`
- **Preview URL status:** `https://preview.colorlib.com/theme/medi-2/` answered **HTTP 404** on 2026-10-23 and the preview catalog (`assets/js/catalog-products-*.js`) holds **no demo entry** for the slug, so no live token read exists. The design page https://colorlib.com/wp/template/medi-2/ still answers, and the TEMPLATES.md screenshot below is the visual reference.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/nedi-free-template.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/medprime` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: Blue-themed navigation bar

The template SHALL display a sticky navigation bar with a blue (#1a73e8) background, white logo text, navigation links (Home, About, Blog, Pages, Contact), and a white "Book Appointment" button.

#### Scenario: Desktop navigation rendering

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar shows the logo, all five navigation links, and the Book Appointment button
- **AND** the navbar has a blue background

#### Scenario: Mobile navigation toggle

- **WHEN** the hamburger menu button is clicked on a mobile viewport
- **THEN** the mobile navigation menu expands showing all links and the Book Appointment button
- **AND** clicking a link closes the menu

### Requirement: Hero section with medical imagery

The template SHALL display a full-width hero section with a dark blue overlay on a medical-themed background image, a subtitle "THE BEST MEDICAL CENTER", a heading "Bringing health to life for the whole family.", and a "Discover More" button with white border.

#### Scenario: Hero content rendering

- **WHEN** the hero section is visible
- **THEN** the subtitle, heading, and Discover More button are displayed
- **AND** the background has a dark blue gradient overlay

#### Scenario: Discover More scrolls to about

- **WHEN** the user clicks the Discover More button
- **THEN** the page scrolls smoothly to the about section

### Requirement: Welcome section with doctor image

The template SHALL display a two-column welcome section with a doctor image on the left and a "Welcome To Modern Clinic." heading with descriptive text and a "Our Departments" button on the right.

#### Scenario: Welcome content rendering

- **WHEN** the welcome section is visible
- **THEN** a doctor image, heading, paragraph, and Our Departments button are displayed

### Requirement: Department cards grid

The template SHALL display a 3-column grid of department cards (Cardiology, Neurology, Ophthalmology, Orthopedics, General Medicine, Pediatrics) with icons, titles, and descriptions on a light gray background.

#### Scenario: Department cards rendering

- **WHEN** the departments section is visible
- **THEN** six department cards are displayed with icons, titles, and descriptions

### Requirement: Doctor team cards

The template SHALL display doctor cards with photos, names, specialties, and social media icon overlays on hover.

#### Scenario: Doctor cards rendering

- **WHEN** the doctors section is visible
- **THEN** three doctor cards are shown with name, specialty, and image

### Requirement: Appointment booking form

The template SHALL display a form with fields for name, email, phone, department select, date, and message, with a submit button.

#### Scenario: Form field rendering

- **WHEN** the appointment section is visible
- **THEN** all six form fields and the submit button are displayed

#### Scenario: Form interaction

- **WHEN** the user types in the name field
- **THEN** the field value updates to reflect the typed text

### Requirement: Quality health features section

The template SHALL display four feature cards (Quality Services, 24/7 Emergency, Expert Doctors, Trusted Care) with icons and descriptions.

#### Scenario: Feature cards rendering

- **WHEN** the quality health section is visible
- **THEN** four feature cards are displayed with icons and descriptions

### Requirement: Emergency contact bar

The template SHALL display a bright blue (#00abe7) emergency contact bar with phone number, location, and working hours.

#### Scenario: Emergency contact rendering

- **WHEN** the emergency section is visible
- **THEN** phone number, address, and working hours are displayed

### Requirement: Footer with Component Dock link

The template SHALL display a dark footer (#152538) with logo, three link columns (Services, Company, Support), copyright notice, and a "Made with Component Dock" link to https://www.componentdock.com/.

#### Scenario: Footer content rendering

- **WHEN** the footer is visible
- **THEN** the logo, link columns, copyright, and Component Dock link are displayed

#### Scenario: Component Dock link target

- **WHEN** the user clicks the Component Dock link
- **THEN** it opens https://www.componentdock.com/ in a new tab

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/medprime/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/medprime/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Blue-themed navigation bar — the navbar shows the logo, all five navigation links, and the Book Appointment button
- [ ] Hero section with medical imagery — the subtitle, heading, and Discover More button are displayed
- [ ] Welcome section with doctor image — a doctor image, heading, paragraph, and Our Departments button are displayed
- [ ] Department cards grid — six department cards are displayed with icons, titles, and descriptions
- [ ] Doctor team cards — three doctor cards are shown with name, specialty, and image
- [ ] Appointment booking form — all six form fields and the submit button are displayed
- [ ] Quality health features section — four feature cards are displayed with icons and descriptions
- [ ] Emergency contact bar — phone number, address, and working hours are displayed
