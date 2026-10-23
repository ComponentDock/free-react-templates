# Template: Fitcraft (Health Fitness)

Recreation of ColorLib "GymLife" (https://colorlib.com/wp/template/gymlife/).

## Purpose

Fitcraft is a gym and fitness landing page template recreated from the ColorLib "Gymlife" design. It provides a modern, dark-themed fitness website with hero, features, classes, pricing, gallery, team, contact, and footer sections.

## Design reference (replication findings)

- **Source:** ColorLib "GymLife" — https://colorlib.com/wp/template/gymlife/
- **Source slug:** `gymlife`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/gymlife/ — **HTTP 200**, 35,158 B, fetched 2026-10-23 (page `<title>`: "Gym | Template"). The slug-only path is the demo itself — no alias was needed.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/gymlife/css/style.css`, fetched 2026-10-23): brand `#f36100`, `#f44336`, `#673ab7`, `#d49d09`; dominant neutrals `#ffffff`, `#c4c4c4`, `#363636`; type Oswald, Muli. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/gymlife-free-template.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/fitcraft` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: Header with navigation

The template SHALL render a sticky header with the FitCraft logo, navigation links (Home, About, Classes, Pricing, Gallery, Contact), and a mobile hamburger menu.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the header displays the FitCraft logo and all navigation links

#### Scenario: Mobile menu toggles

- **WHEN** the user clicks the mobile menu button
- **THEN** the mobile navigation menu opens with all links

### Requirement: Hero section

The template SHALL render a full-screen hero section with a background image, headline, subtitle, and call-to-action button.

#### Scenario: Hero displays content

- **WHEN** the page loads
- **THEN** the hero section shows the heading "Transform Your Body, Elevate Your Life" and a "Start Training Today" button

### Requirement: Features section

The template SHALL render a features section with 4 feature cards showing equipment, nutrition, hours, and trainers.

#### Scenario: All features display

- **WHEN** the page loads
- **THEN** the features section shows Quality Equipment, Health Caring, Flexible Hours, and Expert Trainers cards

### Requirement: Classes section

The template SHALL render a classes section with 5 fitness class cards.

#### Scenario: All classes display

- **WHEN** the page loads
- **THEN** the classes section shows Weightlifting, Indoor cycling, Kettlebell power, Indoor cycling, and Boxing cards

### Requirement: Banner section

The template SHALL render a banner section with a parallax background, headline, and appointment button.

#### Scenario: Banner displays content

- **WHEN** the page loads
- **THEN** the banner shows "Registration now to get more deals" and an Appointment button

### Requirement: Pricing section

The template SHALL render a pricing section with 3 plans: Basic ($39), Premium ($99), and Standard ($59).

#### Scenario: All plans display

- **WHEN** the page loads
- **THEN** the pricing section shows Basic, Premium, and Standard plans with correct prices

### Requirement: Gallery section

The template SHALL render a gallery section with 6 gym photos in a masonry-style layout.

#### Scenario: All gallery images display

- **WHEN** the page loads
- **THEN** the gallery section shows 6 images with titles

### Requirement: Team section

The template SHALL render a team section with 3 trainer cards.

#### Scenario: All trainers display

- **WHEN** the page loads
- **THEN** the team section shows Alex Morgan, Jordan Blake, and Casey Rivera

### Requirement: Contact section

The template SHALL render a contact section with address, phone, and email information.

#### Scenario: Contact information displays

- **WHEN** the page loads
- **THEN** the contact section shows the address, phone numbers, and email

### Requirement: Footer with Component Dock link

The template SHALL render a footer with about text, quick links, newsletter form, and a link to Component Dock.

#### Scenario: Footer has Component Dock link

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/ branded as "Component Dock"

#### Scenario: Newsletter form submits

- **WHEN** the user enters an email and clicks Subscribe
- **THEN** a thank-you message is displayed

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/fitcraft/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/fitcraft/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Header with navigation — the header displays the FitCraft logo and all navigation links
- [x] Hero section — the hero section shows the heading "Transform Your Body, Elevate Your Life" and a "Start Training Today" button
- [ ] Features section — the features section shows Quality Equipment, Health Caring, Flexible Hours, and Expert Trainers cards
- [ ] Classes section — the classes section shows Weightlifting, Indoor cycling, Kettlebell power, Indoor cycling, and Boxing cards
- [x] Banner section — the banner shows "Registration now to get more deals" and an Appointment button
- [ ] Pricing section — the pricing section shows Basic, Premium, and Standard plans with correct prices
- [ ] Gallery section — the gallery section shows 6 images with titles
- [ ] Team section — the team section shows Alex Morgan, Jordan Blake, and Casey Rivera
- [ ] Contact section — the contact section shows the address, phone numbers, and email
