# Template: Peakform (Health Fitness)

Recreation of ColorLib "Ironmuscle" (https://colorlib.com/wp/template/ironmuscle/).

## Purpose

Peakform is a gym and fitness landing page template, recreating the ColorLib Ironmuscle design in React 19 + Vite + Tailwind CSS 4 + TypeScript. It showcases gym services, class schedules, trainers, and testimonials with a bold red brand palette.

## Design reference (replication findings)

- **Source:** ColorLib "Ironmuscle" — https://colorlib.com/wp/template/ironmuscle/
- **Source slug:** `ironmuscle`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/ironmuscle/ — **HTTP 200**, 43,705 B, fetched 2026-10-23 (page `<title>`: "IronMuscle — Colorlib Website Template"). The slug-only path is the demo itself — no alias was needed.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/ironmuscle/css/style.css`, fetched 2026-10-23): brand `#f23a2e`, `#28a745`; dominant neutrals `#edf0f5`, `#4d4d4d`, `#343a40`; type Roboto Mono, Nunito Sans. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/ironmuscle-free-template.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/peakform` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: Navbar renders logo, navigation links, and dropdown

The navbar SHALL display the brand logo "peakform" and navigation links including Home, Classes (with dropdown), Services, News, About, and Contact. The mobile menu toggle SHALL work on small screens.

#### Scenario: Renders logo and navigation links

- **WHEN** the page loads
- **THEN** the navbar displays "peakform" logo text and links for Home, Classes, Services, News, About, Contact

#### Scenario: Mobile menu toggle works

- **WHEN** the user clicks the mobile menu toggle button
- **THEN** the mobile navigation menu becomes visible

#### Scenario: Dropdown appears on hover

- **WHEN** the user hovers over the Classes navigation item
- **THEN** a dropdown menu appears with Running, Yoga, Boxing, Weight Lifting options

### Requirement: Hero section displays rotating slides

The hero section SHALL display full-width slides with background images and centered headlines, auto-rotating between slides.

#### Scenario: Renders hero slides with headings

- **WHEN** the page loads
- **THEN** the hero section displays a headline with "Get In Shape" text

#### Scenario: Slides rotate via indicators

- **WHEN** the user clicks a slide indicator button
- **THEN** the displayed slide changes to show the corresponding headline

### Requirement: Feature blocks display gym categories

The features section SHALL display 4 gym categories (Yoga, Weight Lifting, Boxing, Running) in a responsive grid with icons and descriptions.

#### Scenario: Renders 4 feature items

- **WHEN** the page loads
- **THEN** 4 feature items are displayed with Yoga, Weight Lifting, Boxing, and Running titles

### Requirement: About section shows gym information

The about section SHALL display a heading, descriptive text, checklist items, a Read More button, and an accompanying image.

#### Scenario: Renders heading, checklist, and button

- **WHEN** the page loads
- **THEN** the about section shows "All About Our Gym" heading, checklist items, and a "Read More" button

### Requirement: Featured classes show class cards

The featured classes section SHALL display horizontally scrollable class cards with images, titles, descriptions, and instructor names.

#### Scenario: Renders class cards

- **WHEN** the page loads
- **THEN** class cards are displayed with class titles, descriptions, and instructor names

### Requirement: Schedule shows day-based class timetable

The schedule section SHALL display a dark overlay background with day tabs (Sunday through Friday) and class schedule rows showing class name, time, instructor, and a Join Now button.

#### Scenario: Renders day tabs and schedule content

- **WHEN** the page loads
- **THEN** day tabs are displayed with Sunday selected by default, showing class schedule rows

#### Scenario: Tab switching changes displayed schedule

- **WHEN** the user clicks a different day tab
- **THEN** the schedule content updates to show classes for that day

### Requirement: Testimonials display client quotes

The testimonials section SHALL display a carousel of client testimonials with avatars, names, roles, and blockquote text.

#### Scenario: Renders testimonial cards

- **WHEN** the page loads
- **THEN** testimonials are displayed with avatar images, names, and quote text

### Requirement: Trainers section shows trainer profiles

The trainers section SHALL display trainer cards in a grid with photos and hover overlays showing name, description, and social icons.

#### Scenario: Renders trainer cards

- **WHEN** the page loads
- **THEN** trainer cards are displayed with names and roles

### Requirement: Footer links to Component Dock

The footer SHALL display About text, Quick Menu links, Contact info, Social icons, and a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Renders Component Dock link

- **WHEN** the page loads
- **THEN** the footer contains a link to componentdock.com branded as "Component Dock"

#### Scenario: Renders contact info and social links

- **WHEN** the page loads
- **THEN** the footer displays contact information and social media icons

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/peakform/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/peakform/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar renders logo, navigation links, and dropdown — the navbar displays "peakform" logo text and links for Home, Classes, Services, News, About, Contact
- [ ] Hero section displays rotating slides — the hero section displays a headline with "Get In Shape" text
- [ ] Feature blocks display gym categories — 4 feature items are displayed with Yoga, Weight Lifting, Boxing, and Running titles
- [ ] About section shows gym information — the about section shows "All About Our Gym" heading, checklist items, and a "Read More" button
- [ ] Featured classes show class cards — class cards are displayed with class titles, descriptions, and instructor names
- [ ] Schedule shows day-based class timetable — day tabs are displayed with Sunday selected by default, showing class schedule rows
- [ ] Testimonials display client quotes — testimonials are displayed with avatar images, names, and quote text
- [ ] Trainers section shows trainer profiles — trainer cards are displayed with names and roles
