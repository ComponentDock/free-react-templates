# Template: Shave (Barber Shop Landing Page)

## Purpose

Recreate ColorLib "Barber" (https://colorlib.com/wp/template/barber/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript template under the name "Shave". The original is a barber shop landing page with services, gallery, features, about, team, pricing, contact, and footer sections.

## Requirements

### Requirement: Template renders all sections

The app MUST render Navbar, Hero, Services, Gallery, Features, About, Team, Pricing, Contact, and Footer sections in order.

#### Scenario: Page loads with correct title

- **WHEN** the page loads
- **THEN** the document title is "Shave — Barber Shop Landing Page"

#### Scenario: All sections are present

- **WHEN** I render the App
- **THEN** I see the banner (header)
- **AND** I see the main landmark
- **AND** I see the footer

### Requirement: Navbar with navigation

The navbar MUST show the brand name and navigation links, with a mobile hamburger toggle.

#### Scenario: Desktop navigation

- **WHEN** I render the Navbar
- **THEN** I see the "Shave" logo
- **AND** I see links for Home, Service, Gallery, Features, Team, Pricing, Contact

#### Scenario: Mobile menu toggle

- **GIVEN** I render the Navbar
- **WHEN** I click "Open menu"
- **THEN** the mobile menu is visible
- **WHEN** I click "Close menu"
- **THEN** the mobile menu is hidden

#### Scenario: Mobile link closes menu

- **GIVEN** I render the Navbar
- **WHEN** I click "Open menu" and then click a "Gallery" link
- **THEN** the mobile menu is hidden

### Requirement: Hero section

The hero section MUST display a headline, subtitle, CTA button, and hero image.

#### Scenario: Hero content

- **WHEN** I render the Hero
- **THEN** I see the heading "HairStyle is a"
- **AND** I see a "View More" button
- **AND** I see the hero image

### Requirement: Services section

The services section MUST display 4 service cards with icons, titles, and descriptions.

#### Scenario: Services display

- **WHEN** I render the Services
- **THEN** I see "Beard Trimming", "Quality Gel Shave", "Effective Body Massage", "Stylish Hair Cutting" headings

### Requirement: Gallery section

The gallery section MUST display 6 images with hover overlay labels.

#### Scenario: Gallery images

- **WHEN** I render the Gallery
- **THEN** I see 6 gallery images

### Requirement: Features section

The features section MUST display 6 feature cards with icons, titles, and descriptions.

#### Scenario: Features display

- **WHEN** I render the Features
- **THEN** I see 6 feature titles

### Requirement: About section

The about section MUST display a heading, description, CTA button, image, and play button.

#### Scenario: About content

- **WHEN** I render the About
- **THEN** I see the about heading
- **AND** I see the "See Details" button
- **AND** I see the play button

### Requirement: Team section

The team section MUST display 4 team member cards with photos, names, roles, and social links.

#### Scenario: Team members

- **WHEN** I render the Team
- **THEN** I see 4 team member cards with names and roles

### Requirement: Pricing section

The pricing section MUST display 3 pricing plans with names, prices, feature lists, and purchase buttons.

#### Scenario: Pricing plans

- **WHEN** I render the Pricing
- **THEN** I see 3 pricing plans with prices £199, £399, £499

### Requirement: Contact section

The contact section MUST display contact info cards and a contact form.

#### Scenario: Contact form

- **WHEN** I render the Contact
- **THEN** I see a form with name, email, subject, message fields and a submit button

#### Scenario: Form submission prevented

- **WHEN** I submit the contact form
- **THEN** the page does not navigate

### Requirement: Footer with Component Dock link

The footer MUST display About, Newsletter, and Social columns, and link to Component Dock.

#### Scenario: Footer content

- **WHEN** I render the Footer
- **THEN** I see "Component Dock" link to https://www.componentdock.com/
- **AND** I see social media links
- **AND** I see the newsletter form

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/shave/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/shave/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Template renders all sections — the document title is "Shave — Barber Shop Landing Page"
- [ ] Navbar with navigation — I see the "Shave" logo
- [ ] Hero section — I see the heading "HairStyle is a"
- [ ] Services section — I see "Beard Trimming", "Quality Gel Shave", "Effective Body Massage", "Stylish Hair Cutting" headings
- [ ] Gallery section — I see 6 gallery images
- [ ] Features section — I see 6 feature titles
- [ ] About section — I see the about heading
- [ ] Team section — I see 4 team member cards with names and roles
- [ ] Pricing section — I see 3 pricing plans with prices £199, £399, £499
- [ ] Contact section — I see a form with name, email, subject, message fields and a submit button
