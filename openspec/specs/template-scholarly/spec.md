# Template: Scholarly (Education)

## Purpose

Scholarly is a single-page education/university landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Education Wordpress Themes" website template design
(https://colorlib.com/wp/template/education-wordpress-themes/), built under
a **different name** with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Education Wordpress Themes" — Free education
  WordPress theme collection page
  (source: https://colorlib.com/wp/template/education-wordpress-themes/).
- **Demo DOM:** https://preview.colorlib.com/theme/education-wordpress-themes/
  returned HTTP 404 — the preview is unreachable for this template.
  **Fallback: screenshot-only analysis** from
  `education-website-designs.jpg` (1200x930 JPEG).
- **Section order (1:1, from screenshot):** Top bar (dark background, contact
  info + utility links + green CTA button) → Navbar (white background,
  university logo/crest + "Kingster University" + nav links: Home, Pages,
  Academics, Admissions, Courses, Athletics, University Life + search icon)
  → Hero (full-width student study image, "The Best University Of The State"
  green subtext, "Kingster University" large white headline, "Take A Tour"
  white-bordered CTA button) → Feature bar (white background, 4 icon items:
  University Life, Graduation, Athletics, Social) → Admission section (split
  layout: left image of professor, right dark panel with "Apply for Admission"
  heading, "Fall 2019 applications are now open" green accent text,
  description paragraph).
- **Design tokens extracted from screenshot visual analysis:**
  - **Dark navy** top bar and admission panel background: approximately
    `#1a1a2e` / `#222222`.
  - **Green accent** for CTA button, active nav underline, and subtext:
    approximately `#4CAF50` / `#28a745` (bright green).
  - **White** `#fff` for navbar background, feature bar, hero text.
  - **Typography:** Serif display font for "Kingster University" heading
    (likely Playfair Display or similar), sans-serif for body text
    (likely Roboto or Open Sans).
  - **Buttons:** White-bordered transparent button ("Take A Tour") with
    white text; green filled button ("Support KU") with white text.
  - **Feature icons:** line-style icons above text labels in a 4-column row.
  - **Hero:** full-width cover image with text overlay (no solid background).
  - **Section backgrounds:** alternating white and dark (navy) panels.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/scholarly-<n>/<w>/<h>`); icons → lucide-react;
  university crest → styled text logo; no assets copied.

Scholarly lives in `apps/scholarly` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Top bar

The system SHALL render a top utility bar with contact information on the
left and utility links + a CTA button on the right, on a dark background.

#### Scenario: Top bar content

- **GIVEN** the Scholarly page is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL display an email address and phone number on the
  left, and "Alumni", "Calendar", "Portal" links plus a green "Support"
  CTA button on the right

#### Scenario: Top bar styling

- **GIVEN** the top bar is visible
- **WHEN** the user views the top bar
- **THEN** it SHALL have a dark navy background with white/light text and
  the CTA button SHALL be green with white text

### Requirement: Navigation bar

The system SHALL render a white navigation bar with a university logo/crest,
site name, navigation links, and a search icon.

#### Scenario: Navbar content

- **GIVEN** the Scholarly page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show a university crest/logo, the site name
  "Scholarly", and links to Home, About, Academics, Admissions, Courses,
  Athletics, and Campus Life

#### Scenario: Navbar active state

- **GIVEN** the navbar is rendered
- **WHEN** the user views the Home link
- **THEN** the Home link SHALL have a green underline indicating the active state

### Requirement: Hero banner

The system SHALL render a full-width hero section with a background image,
headline text, subtext, and a call-to-action button.

#### Scenario: Hero content

- **GIVEN** the Scholarly page is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL display a background image of a student studying,
  the subtext "The Best University Of The State" in green, the headline
  "Scholarly University" in large white text, and a "Take A Tour" CTA button

#### Scenario: Hero CTA button style

- **GIVEN** the hero section is visible
- **WHEN** the user views the CTA button
- **THEN** the button SHALL have a transparent background with a white border
  and white text

### Requirement: Feature bar

The system SHALL render a horizontal feature bar with 4 icon+label items
on a white background.

#### Scenario: Feature bar content

- **GIVEN** the feature bar is rendered
- **WHEN** the page loads
- **THEN** four feature items SHALL be displayed: Campus Life, Graduation,
  Athletics, and Community, each with an icon above and a short label below

#### Scenario: Feature bar layout

- **GIVEN** the feature bar is visible
- **WHEN** the user views the feature items
- **THEN** they SHALL be arranged in a single horizontal row, evenly spaced,
  with line-style icons and text labels

### Requirement: Admission section

The system SHALL render a split-layout admission section with an image on
the left and informational content on the right.

#### Scenario: Admission section layout

- **GIVEN** the admission section is rendered
- **WHEN** the page loads
- **THEN** the left side SHALL show an image (professor/educator) and the
  right side SHALL have a dark background with admission content

#### Scenario: Admission section content

- **GIVEN** the admission section is visible
- **WHEN** the user views the right panel
- **THEN** it SHALL display the heading "Apply for Admission", an accent
  text line "Applications are now open" in green, and a description paragraph

### Requirement: Footer

The system SHALL render a footer with university information and a link to
Component Dock.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL display university contact information, quick
  links, and a copyright notice

#### Scenario: Footer Component Dock link

- **GIVEN** the footer is rendered
- **WHEN** the user views the footer
- **THEN** a link to "https://www.componentdock.com/" SHALL be present,
  branded as "Component Dock"

## Verification checklist

- [ ] Top bar renders with contact info, utility links, and green CTA
- [ ] Navbar renders with logo, site name, nav links, and search icon
- [ ] Hero banner has background image, green subtext, white headline, CTA
- [ ] Feature bar shows 4 items with icons and labels
- [ ] Admission section has split layout with image and dark content panel
- [ ] Footer has university info and Component Dock link
- [ ] Green accent color (#4CAF50) applied correctly
- [ ] Dark navy backgrounds on top bar and admission panel
- [ ] No ColorLib references in app code
- [ ] Tests pass with 100% coverage
