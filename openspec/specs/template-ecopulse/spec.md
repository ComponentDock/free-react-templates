# Template: EcoPulse (Environmental Organization)

## Purpose

EcoPulse is a single-page environmental organization landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Environmentalorganization" design (see TEMPLATES.md), built
under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is an environmental/charity website with green (#09cc7f)
accents: a sticky header, full-width hero slider, about section with video
play button, 3 service cards, support section with floating counter badges,
3 case study cards with animated progress bars, 2 blog post cards, and a
dark 4-column footer. EcoPulse recreates that structure section-for-section
with matching layout, colors, typography, and content types (no ColorLib
assets copied).

- **Source**: [ColorLib Environmentalorganization](https://colorlib.com/wp/template/environmentalorganization/)
- **Preview**: https://preview.colorlib.com/theme/environmentalorganization/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/environmentalorganization-free-template.jpg
- **Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name**: `ecopulse` (apps/ecopulse, `@free-react-templates/ecopulse`)

## Design reference (replication findings)

- **Original:** ColorLib "Environmentalorganization" — environmental/charity website template
  (source: https://colorlib.com/wp/template/environmentalorganization/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/environmentalorganization/`
- **Section order (1:1):**
  1. Header — Sticky white bar: logo left, nav links (Home, About, What We Do, Projects, Blog, Contact), "Make a Donation" CTA button right. Mobile hamburger menu.
  2. Hero Slider — Full-width image carousel (3 slides), dark overlay, large white heading, subtitle, CTA button with pill border, dot navigation on right side.
  3. About — Split layout: left text column (subtitle + heading + paragraph + image with video play button overlay). Background: #EEFFFA light green.
  4. Services — 3 service cards: Clean Water, Renewable Energy, Protect Animals. Each with icon, title, description.
  5. Support — Split layout: left image with floating counter badges (950 Poaching cases, 230 Volunteers worldwide); right heading + description + "Join Us Now" outline button.
  6. Cases — 3 case study cards: Wildlife in Danger (70%), Our Green Projects (25%), Water Conservation (50%). Each with image, title, description, animated progress bar, stat counter.
  7. Blog — 2 blog post cards: image + title + excerpt.
  8. Footer — Dark footer: logo + description + social icons (Twitter, Facebook, Instagram), 3 link columns (Our Solutions, Company, Contact Us), copyright bar with Component Dock link.
- **Design tokens extracted:**
  - Brand primary: **#09cc7f** (green) — buttons, accents, progress bars
  - Gradient CTA: **linear-gradient(to left, #46C0BE, #6DD56F, #46C0BE)** — button background
  - Subtitle green: **#70D76A** — uppercase section subtitles
  - Heading text: **#425140** (dark green-gray)
  - Body text: **#10285d** (dark navy)
  - Nav links: **#072366** (dark blue)
  - Hero overlay: **rgba(35, 39, 35, 0.4)**
  - Light section bg: **#EEFFFA**
  - Font: **Montserrat** (200–700) via Google Fonts
  - Buttons: pill-shaped (30px border-radius)
- **Recreation decisions:** 8-section layout matching original; navbar uses `<nav>` with hamburger for mobile; hero uses dot navigation; about section has video play button; services use lucide-react icons; cases use IntersectionObserver for animated progress bars; all images are picsum.photos seeded; Google Fonts via `<link>`.

EcoPulse lives in `apps/ecopulse` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky top navigation bar with the site name "EcoPulse" and links to all major sections, with a hamburger toggle for mobile viewports.

#### Scenario: Navbar content on desktop

- **WHEN** the user views the page on a desktop viewport
- **THEN** the logo "EcoPulse" is visible in the top-left
- **AND** navigation links "Home", "About", "What We Do", "Projects", "Blog", "Contact" are visible
- **AND** a "Make a Donation" button is visible in the header

#### Scenario: Mobile hamburger toggle

- **WHEN** the user is on a mobile viewport and clicks the hamburger menu button
- **THEN** the mobile navigation menu opens
- **AND** all navigation links and the donation button are visible
- **WHEN** the user clicks a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero slider

The system SHALL render a full-width hero section with a rotating image carousel, dark overlay, heading, subtitle, CTA buttons, and dot navigation.

#### Scenario: Hero content renders

- **WHEN** the page loads
- **THEN** a full-width hero image is displayed with a dark overlay
- **AND** a large heading is visible
- **AND** a subtitle is visible below the heading
- **AND** "Learn More" and "Get Involved" CTA buttons are visible
- **AND** dot navigation indicators are visible

#### Scenario: Slide navigation

- **WHEN** the user clicks the next arrow
- **THEN** the heading text changes to the next slide's content
- **WHEN** the user clicks a dot indicator
- **THEN** the corresponding slide is displayed
- **WHEN** the user clicks the previous arrow on the first slide
- **THEN** the carousel wraps to the last slide

### Requirement: About section

The system SHALL render an about section with a light green background (#EEFFFA), split layout with text and image, and a video play button overlay.

#### Scenario: About section displays

- **WHEN** the user scrolls to the about section
- **THEN** a section with light green background (#EEFFFA) is visible
- **AND** the section subtitle "About Us" is displayed in uppercase green text
- **AND** a heading "We Are The Reason For Change" is visible
- **AND** a descriptive paragraph is present
- **AND** a video play button overlay is visible on an image

### Requirement: Services section

The system SHALL render three service cards in a row with icons, titles, and descriptions.

#### Scenario: Services display

- **WHEN** the user scrolls to the services section
- **THEN** three service cards are visible
- **AND** each card has an icon, title, and description
- **AND** the titles are "Clean Water", "Renewable Energy", "Protect Animals"

### Requirement: Support section

The system SHALL render a support section with floating counter badges and a "Join Us Now" outline button.

#### Scenario: Support section displays stats

- **WHEN** the user scrolls to the support section
- **THEN** a heading "Why You Should Join Us" is visible
- **AND** a "Join Us Now" outline button is visible
- **AND** two counter badges are visible: "950+" and "230+"

### Requirement: Cases section

The system SHALL render three case study cards with images, titles, descriptions, and animated progress bars.

#### Scenario: Cases section displays progress bars

- **WHEN** the user scrolls to the cases section
- **THEN** three case study cards are visible
- **AND** each card has an image, title, description, and progress bar
- **AND** the progress bars animate to their target percentages when scrolled into view

### Requirement: Blog section

The system SHALL render two blog post cards with images, titles, and excerpts.

#### Scenario: Blog section displays

- **WHEN** the user scrolls to the blog section
- **THEN** two blog post cards are visible
- **AND** each card has an image, title, and excerpt

### Requirement: Footer

The system SHALL render a dark footer with logo, social media icons, three link columns, copyright, and Component Dock attribution.

#### Scenario: Footer renders correctly

- **WHEN** the user scrolls to the footer
- **THEN** the footer displays the "EcoPulse" logo and description
- **AND** social media icons are visible (Twitter, Facebook, Instagram)
- **AND** three link columns are visible: "Our Solutions", "Company", "Contact Us"
- **AND** a copyright line is visible
- **AND** a "Component Dock" attribution link is present linking to https://www.componentdock.com/

### Requirement: Mobile responsiveness

The system SHALL collapse navigation to a hamburger menu and stack sections vertically on narrow viewports.

#### Scenario: Mobile layout

- **WHEN** the viewport is narrower than 768px
- **THEN** the navigation collapses to a hamburger menu
- **AND** sections stack vertically
