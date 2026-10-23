# Template: Assembly (Conference / Event)

## Purpose

Recreation of ColorLib "Convention" template.
- Source: https://colorlib.com/wp/template/convention/
- Preview: https://preview.colorlib.com/theme/convention/
- Stack: React 19, Vite, Tailwind CSS 4, TypeScript
- New name: `assembly` (apps/assembly, @free-react-templates/assembly)

## Design tokens (extracted from preview stylesheet)

- Fonts: "Barlow" (body), "Barlow Condensed" (headings, subheadings) via Google Fonts
- Primary blue: #007bff (buttons, links)
- Purple accent: #423ead (team section overlay top half)
- Pink/magenta: #ed03be (focus ring accents)
- Dark surfaces: #232429, #1e1f23, #141b25, #000
- Light section bg: #f8f9fa (bg-light), #f4f5f9
- Gray text: #6c757d (secondary), #495057, #212529 (primary text)
- Border radius: 0.25rem default (Bootstrap), 30px for specific pill shapes
- Buttons: rounded 0.25rem, blue bg, white text, hover darken
- Navbar: dark bg (#232429), white text, transparent on scroll

## Requirements

### Feature: Assembly template behaviour

#### Scenario: Top bar displays contact info and CTA

- **GIVEN** the page loads
- **THEN** a top bar shows phone number and email
- **AND** social media icons (Facebook, Twitter, Instagram, Dribbble) appear
- **AND** a "Buy Ticket" button is visible

#### Scenario: Navbar navigation

- **GIVEN** the page loads
- **THEN** a dark navbar displays "Assembly" as brand
- **AND** nav links: Home, About, Pricing, Schedule, Speakers, Blog, Contact
- **AND** the navbar is responsive with a hamburger toggle

#### Scenario: Hero section with countdown

- **GIVEN** the page loads
- **THEN** a full-width hero with background image and dark overlay appears
- **AND** heading reads "Biggest Developer Conference 2021"
- **AND** location and date are shown below the heading
- **AND** a countdown timer displays days, hours, minutes, seconds

#### Scenario: About section

- **GIVEN** the hero section is visible
- **THEN** an about section shows an image on the left
- **AND** "Welcome to Convention" subheading with description text on the right
- **AND** a "Year Established" stat badge with calendar icon

#### Scenario: Counter stats

- **GIVEN** the about section is visible
- **THEN** a parallax counter section shows 4 stat blocks
- **AND** stats include: Places (301), Events (102), Photos (1050), Speakers (61)
- **AND** each stat has an icon and animated number

#### Scenario: Schedule section with day tabs

- **GIVEN** the counter section is visible
- **THEN** a schedule section with light background appears
- **AND** 4 day tabs (Day 01-04) control visible content
- **AND** each day shows 3 session cards with speaker image, time, title, description, speaker name and position

#### Scenario: Speakers section

- **GIVEN** the schedule section is visible
- **THEN** a speakers section with purple overlay header appears
- **AND** 5 speaker cards show staff image, name, position, and social icons on hover

#### Scenario: Gallery section

- **GIVEN** the speakers section is visible
- **THEN** an 8-image gallery grid (4x2) displays event photos
- **AND** clicking an image opens a lightbox popup

#### Scenario: Testimonials carousel

- **GIVEN** the gallery section is visible
- **THEN** a testimonials section with light background appears
- **AND** a carousel shows quote text, star rating, user image, name, and position

#### Scenario: Blog section

- **GIVEN** the testimonials section is visible
- **THEN** 3 blog cards show featured image, date, author, comment count, title, and excerpt

#### Scenario: Registration CTA

- **GIVEN** the blog section is visible
- **THEN** a CTA section with background image displays "Book Your Tickets Now"
- **AND** a registration form with First Name, Last Name, Phone, Price select, and Register Now button

#### Scenario: Footer

- **GIVEN** the registration section is visible
- **THEN** a footer shows 5 columns: logo+social, Explore links, Info links, Buy Ticket CTA, Contact info
- **AND** a black copyright bar at the bottom replaces Colorlib attribution with Component Dock link

## Verification checklist

- [ ] `npm run verify:app -- assembly` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 12 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
      - Assembly template behaviour
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [ ] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [ ] Footer links https://www.componentdock.com/ ("Component Dock").
