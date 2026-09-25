# Template: Credence (CV/Portfolio Personal Page)

## Purpose

Credence is a personal CV/portfolio landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Cvportfolio" design, built under the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a clean personal CV page with an orange accent: a top contact
bar (address, phone, email), a hero section with a desk/laptop background
image, a circular profile photo centered, the person's name and role, personal
details (born, email, marital status), social media icons, and a "Download CV"
button. Below the hero is a portfolio grid with category filter tabs (All,
Web Design, Branding, Graphic Design) and a masonry-style image grid. Credence
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Cvportfolio" — free CV/portfolio website template
  (source: https://colorlib.com/wp/template/cvportfolio/).
- **Live preview:** `https://preview.colorlib.com/theme/cvportfolio/`
- **Section order (1:1):**
  1. Contact bar: Full-width orange bar with 3 columns — address, phone/hours, email/response time.
  2. Hero: Full-width background image (desk/laptop), centered circular profile photo, name in bold, role in orange, personal info (Born, Email, Marital Status), social media icon row, "Download CV" orange button.
  3. Portfolio: "Portfolio" heading with "MY WORK" subtitle, filter tabs (All, Web Design, Branding, Graphic Design), masonry grid of portfolio images.
  4. Footer: Simple dark footer with "More templates at Component Dock" link.
- **Design tokens:**
  - Brand/accent: **#f5a623** (orange/amber) — buttons, role text, active tab, contact bar bg.
  - Background: **#fff** (white) for main sections.
  - Text: **#333** (dark gray) for body text.
  - Social icons: **#555** (medium gray) circles.
  - Contact bar text: **#fff** on orange bg.
  - Font: **"Open Sans"** (Google Fonts) — clean sans-serif.
  - Buttons: Orange filled, uppercase, rounded.
  - Profile photo: Circular with border.
- **Recreation decisions:** repo-standard Footer with "More templates at Component Dock" link; hero with seeded picsum photo background; circular profile with initials; portfolio grid with seeded images; filter tabs with active state; all images picsum-seeded; Google Fonts via `<link>`.

Credence lives in `apps/credence` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Contact bar

The system SHALL render a full-width orange contact bar at the top with three
columns: address, phone/hours, and email/response time.

#### Scenario: Contact bar content

- **GIVEN** the Credence page is rendered
- **WHEN** the contact bar is visible
- **THEN** it SHALL display an address ("3008 Sarah Drive, FrankinLA 70538"), phone number ("337-4139539"), hours ("MIN - FRI,8AM - 7PM"), and email ("contact@colorlib.com") with "REPLY IN 24 HOURS"

### Requirement: Hero section with profile

The system SHALL render a hero section with a background image, a centered
circular profile photo, the person's name, role, personal details, social
links, and a "Download CV" button.

#### Scenario: Hero content

- **GIVEN** the Credence page is rendered
- **WHEN** the hero section is visible
- **THEN** it SHALL display the name "Michel SMITH", role "Key Account Manager" in orange, Born date, email, marital status, social media icons, and a "Download CV" button

#### Scenario: Profile photo

- **GIVEN** the hero is rendered
- **THEN** the profile photo SHALL be displayed as a circle (rounded-full)

### Requirement: Portfolio section with filter tabs

The system SHALL render a portfolio section with category filter tabs and an
image grid.

#### Scenario: Portfolio heading

- **GIVEN** the Credence page is rendered
- **WHEN** the portfolio section is visible
- **THEN** it SHALL display "Portfolio" as the heading and "MY WORK" as the subtitle

#### Scenario: Filter tabs

- **GIVEN** the portfolio section is rendered
- **THEN** it SHALL display filter tabs: "ALL", "WEB DESIGN", "BRANDING", "GRAPHIC DESIGN"
- **AND** "ALL" SHALL be the default active tab (orange underline/text)

#### Scenario: Portfolio grid

- **GIVEN** the portfolio section is rendered
- **THEN** it SHALL display a grid of portfolio images (minimum 6 images)

### Requirement: Footer

The system SHALL render a footer that links to Component Dock.

#### Scenario: Footer content

- **GIVEN** the Credence page is rendered
- **WHEN** the footer is visible
- **THEN** it SHALL contain a link to "https://www.componentdock.com/" branded as "Component Dock"
