# Template: Odonto (Medical / Healthcare / Dental Clinic)

## Purpose

A dental clinic template with top bar, hero, info cards, services, appointment booking, team and testimonials sections. Recreation of ColorLib **Toothcare** (`https://colorlib.com/wp/template/toothcare/`, preview: `https://preview.colorlib.com/theme/toothcare/`) as a modern, responsive React 19 + TypeScript + Tailwind CSS 4 application named `@free-react-templates/odonto`.

## Design tokens (Extracted from reference)

- **Primary / Brand color**: Cyan / Teal (`#00bcd4`, gradient `#00bcd4` to `#65c4cf`)
- **Backgrounds**: Light gray `#f8f9fa` (`bg-light`), pure white `#ffffff`, dark footer slate `#1a252f`
- **Text colors**: Dark slate `#212529` for headings/body, muted gray `#6c757d` for secondary text, white `#ffffff` on dark/brand banners
- **Typography**: Clean sans-serif (`Poppins`, system fallback)
- **Buttons & UI**: Rounded-full / rounded-lg CTA buttons with hover transitions and teal accent highlights

## Section structure (1:1 with reference)

1. **Top Bar**: Contact info (phone, email, working hours) + social media icons.
2. **Navbar**: Brand logo ("Odonto"), navigation links (Home, About, Services, Doctors, Pricing, Blog, Contact), and "Make an Appointment" CTA button.
3. **Hero / Slider**: Engaging headline ("Dentist Services that You Can Trust"), subheading, and primary action buttons with background overlay.
4. **Info / Intro Bar**: Quick booking / emergency contact cards with icons.
5. **About / Intro Section**: "Toothcare is a Dental Clinic and Innovative Approach to Treatment", outlining modern facilities and expert care.
6. **Services Section**: Grid of dental services (Tooth Protection, Dental Implants, Teeth Whitening, Tooth Removal, etc.) with icons and descriptions.
7. **Appointment Booking Section**: Interactive appointment form ("Make An Appointment / Easy Booking") with date/time pickers and service selection.
8. **Counter / Stats Section**: Statistics counters (Happy Customers, Qualified Dentists, Years of Experience).
9. **Team / Doctors Section**: Qualified dentist profiles (Dr. Lloyd Wilson, Dr. Rachel Parker, Dr. Ian Smith, Dr. Alicia Henderson) with photos and social links.
10. **Testimonials Section**: Happy customers feedback carousel/grid.
11. **Blog / News Section**: Recent blog articles on dental health and care.
12. **CTA Banner**: "Do not wait make an appointment today!" banner with action button.
13. **Footer**: Comprehensive footer with about snippet, services links, quick links, recent posts, newsletter signup, and mandatory Component Dock link (`https://www.componentdock.com/`).

## Requirements

### Feature: Navbar & Navigation

#### Scenario: User views navigation bar

- **GIVEN** the Odonto application is loaded
- **WHEN** the user inspects the header
- **THEN** they see the brand logo "Odonto" and navigation links
- **AND** a prominent "Make an Appointment" button

### Feature: Hero Banner

#### Scenario: User views hero section

- **GIVEN** the hero banner is displayed
- **WHEN** the user reads the main headline
- **THEN** they see professional dental care messaging and call-to-action buttons

### Feature: Services Grid

#### Scenario: User explores dental services

- **GIVEN** the services section is visible
- **WHEN** the user views the service cards
- **THEN** they see icons, titles, and descriptions for each dental procedure

### Feature: Appointment Booking

#### Scenario: User submits appointment form

- **GIVEN** the appointment section is displayed
- **WHEN** the user fills out name, email, service, and date
- **THEN** submitting shows a success confirmation message

### Feature: Team Section

#### Scenario: User views doctors/dentists

- **GIVEN** the team section is loaded
- **WHEN** the user browses dentist profiles
- **THEN** they see names, titles, and social links for each qualified practitioner

### Feature: Footer Compliance

#### Scenario: Footer contains Component Dock link

- **GIVEN** the page is scrolled to the bottom
- **WHEN** the user inspects the footer
- **THEN** they see a link to `https://www.componentdock.com/` branded as Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/odonto/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/odonto/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar & Navigation — they see the brand logo "Odonto" and navigation links
- [ ] Hero Banner — they see professional dental care messaging and call-to-action buttons
- [ ] Services Grid — they see icons, titles, and descriptions for each dental procedure
- [ ] Appointment Booking — submitting shows a success confirmation message
- [ ] Team Section — they see names, titles, and social links for each qualified practitioner
