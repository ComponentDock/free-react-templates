# Template: Festpoint (Landing Page)

## Purpose

Festpoint is a conference and event landing page template, recreated from the ColorLib "Eventalk" design. It provides a modern, responsive template for promoting tech conferences, with sections for hero, services, speaker showcase, schedule, blog, and contact.

## Design reference (replication findings)

- **Source:** ColorLib "Eventalk" — https://colorlib.com/wp/template/eventalk/
- **Source slug:** `eventalk`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/eventalk/ — **HTTP 200**, 50,395 B, fetched 2026-10-23 (page `<title>`: "Eventalk - Free Bootstrap 4 Template by Colorlib"). The slug-only path is the demo itself — no alias was needed.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/eventalk/css/style.css`, fetched 2026-10-23): brand `#6b75ff`, `#59b7ff`, `#6b76ff`, `#78d5ef`; dominant neutrals `#000000`, `#6c757d`, `#212529`; type Work Sans, SFMono-Regular. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/eventalk-free-template.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/festpoint` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: Navbar with responsive mobile menu

Users SHALL see a fixed dark navbar with the "Festpoint." branding, navigation links (Home, About, Speakers, Schedule, Blog, Contact), and a "Buy Ticket" CTA button. On mobile, the menu SHALL collapse into a hamburger toggle that opens/closes the mobile navigation.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads on desktop
- **THEN** the navbar displays all navigation links and the Buy Ticket button

#### Scenario: Mobile menu toggles open and closed

- **WHEN** the user taps the hamburger menu button
- **THEN** the mobile navigation panel opens
- **WHEN** the user taps a navigation link or Buy Ticket
- **THEN** the mobile navigation panel closes

### Requirement: Hero section with countdown

Users SHALL see a full-screen hero section with a background image, conference title "Developer Conference 2025", date information, a countdown timer display, and a "Get Started" CTA button.

#### Scenario: Hero displays conference information

- **WHEN** the page loads
- **THEN** the hero section shows the conference title, date, countdown values, and CTA button

### Requirement: Services section with 4 service cards

Users SHALL see a services section with 4 cards (Venue, Transport, Hotel, Restaurant), each with an icon, title, and description.

#### Scenario: All service cards render

- **WHEN** the services section is visible
- **THEN** 4 service cards are displayed with their respective icons and descriptions

### Requirement: Counter / Fun Facts section

Users SHALL see a split layout with an image on the left and 4 stat cards on the right showing Speakers (30), Sponsors (200), Total Seats (2,500), and Topics (40).

#### Scenario: Stat values are displayed

- **WHEN** the counter section is visible
- **THEN** all 4 stat values and labels are rendered

### Requirement: Speakers section with speaker cards

Users SHALL see a speakers section displaying 4 speaker cards, each with a photo, name, role, and social media links.

#### Scenario: All speakers render

- **WHEN** the speakers section is visible
- **THEN** 4 speaker cards with photos, names, and roles are displayed

### Requirement: Schedule section with day tabs

Users SHALL see a schedule section with day tabs (Day 1–4) that switch between different session lists. Each session shows time, title, speaker, and location.

#### Scenario: Day tabs switch sessions

- **WHEN** the user clicks a different day tab
- **THEN** the sessions for that day are displayed and previous sessions are hidden

### Requirement: Blog section with post cards

Users SHALL see a blog section with 3 post cards, each with an image, date, title, excerpt, and "Read More" link.

#### Scenario: Blog posts render

- **WHEN** the blog section is visible
- **THEN** 3 blog post cards are displayed

### Requirement: Footer with Component Dock link

Users SHALL see a dark footer with contact widgets (Address, Email, Phone), a logo, copyright text, and a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer renders with Component Dock branding

- **WHEN** the footer is visible
- **THEN** the "Component Dock" link points to https://www.componentdock.com/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/festpoint/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/festpoint/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
