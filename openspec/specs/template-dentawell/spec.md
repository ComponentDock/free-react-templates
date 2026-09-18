# Template: Dentawell (Dental / Medical Landing)

## Purpose

Dentawell is a single-page dental/medical clinic landing template — a faithful
React recreation of the ColorLib free "Dr.care" template
(preview: https://preview.colorlib.com/theme/drcare/ — medical/dental clinic
landing), built under a different name with the monorepo stack: Vite + React 19
+ Tailwind CSS 4 + TypeScript.

**Source mapping:** `apps/dentawell` recreates
`https://colorlib.com/wp/template/drcare/` (ColorLib slug: `drcare`).

Design tokens captured from the original (see docs/replication.md):

- Brand blue `#2f89fc` (services strip, department pills, CTA overlay, pricing
  borders, testimonial quotes, blog date badges, footer subscribe button)
- Accent orange `#ff8000` (secondary/CTA buttons, staff social hover, pricing
  card hover)
- Dark backgrounds: `#343a40` (main navbar), `#141313` (footer)
- Light background: `#fafafa` (alternate sections, tab content)
- Typeface: Work Sans (Google Fonts, weights 100–900, loaded via
  `<link>` in `index.html`)
- Button shape: pill / rounded-full (`border-radius: 40px`)
  - Primary button: bg `#2f89fc`, border `#2f89fc`, white text
  - Secondary button: bg `#ff8000`, border `#ff8000`, white text
- Services strip: solid blue background with white text, circular icon badges
  (80px, `border-radius: 50%`)
- Department tabs: horizontal pill nav, active state blue background with
  downward arrow indicator
- Staff cards: image top, text bottom, social links slide up on hover
- Footer: very dark (`#141313`) with white/70% opacity text, social icons
  circular

Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons.

Dentawell lives in `apps/dentawell` and uses shared components from `packages/ui`
(Button, cn).

## Requirements

### Requirement: Top info bar

The system SHALL render a light-background top bar with the brand name
"Denta" (with "well" highlighted) and three contact info items: address,
email, and phone, each with an icon.

#### Scenario: Desktop info bar

- **GIVEN** the page is rendered on desktop
- **WHEN** the top bar is displayed
- **THEN** it SHALL show the brand name "Dentawell"
- **AND** it SHALL display address, email, and phone items with icons

### Requirement: Main navigation bar

The system SHALL render a dark-background navbar with nav links (Home, About,
Doctor, Departments, Pricing, Blog, Contact) and a "Make An Appointment"
secondary (orange) button. The navbar SHALL be sticky on scroll.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the main navbar is displayed
- **THEN** it SHALL show links: Home, About, Doctor, Departments, Pricing,
  Blog, Contact
- **AND** it SHALL show a "Make An Appointment" button styled as a pill

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a mobile viewport
- **WHEN** the user presses the hamburger toggle
- **THEN** the mobile menu SHALL become visible and the toggle SHALL report
  `aria-expanded="true"`
- **AND** pressing the toggle again SHALL hide the menu
- **AND** clicking a mobile link SHALL close the menu

### Requirement: Hero slider

The system SHALL render a hero section with a background image, dark overlay,
headline text with a highlighted span, subheading, and a "View our works"
secondary (orange) pill button. The hero SHALL support at least two slides with
automatic or manual navigation.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero slider is displayed
- **THEN** it SHALL contain a headline ("Helping Your Stay Happy One")
- **AND** it SHALL contain a subheading
- **AND** it SHALL show a "View our works" pill button
- **AND** the background SHALL have a dark overlay for text legibility

#### Scenario: Slide navigation

- **GIVEN** the hero is displayed with multiple slides
- **WHEN** the user navigates between slides
- **THEN** the visible slide content SHALL change accordingly

### Requirement: Services strip

The system SHALL render a full-width services strip with a blue (`#2f89fc`)
background, containing four service cards in a row. Each card SHALL have a
circular icon badge, a heading, and a short description.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services strip is displayed
- **THEN** it SHALL show four cards: "Qualified Doctors", "Emergency Care",
  "Outdoor Checkup", "24 Hours Service"
- **AND** each card SHALL have a circular icon badge and description text
- **AND** the strip background SHALL be blue (`#2f89fc`)

### Requirement: About section

The system SHALL render a two-column about section with an image on the left and
text content on the right. The right column SHALL include a subheading, heading,
description paragraph, and a 2x2 grid of feature cards (Primary Care, Lab Test,
Symptom Check, Heart Rate) each with an icon and description.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the subheading "About Dentawell"
- **AND** it SHALL display the four feature cards in a 2-column grid
- **AND** the image SHALL occupy the left column

### Requirement: CTA banner

The system SHALL render a full-width CTA banner with a parallax background
image, a blue overlay, a headline ("We Provide Free Health Care Consultation"),
subtitle text, and a "Free Consultation" pill button.

#### Scenario: CTA banner content

- **GIVEN** the page is rendered
- **WHEN** the CTA banner is displayed
- **THEN** it SHALL show the headline "We Provide Free Health Care Consultation"
- **AND** it SHALL show a "Free Consultation" secondary (orange) pill button

### Requirement: Departments section

The system SHALL render a departments section with horizontal pill-style tabs
(Neurology, Surgical, Dental, Ophthalmology, Cardiology). Each tab SHALL
display a two-column layout: a department image and a description with the same
2x2 feature card grid seen in the about section.

#### Scenario: Department tabs

- **GIVEN** the page is rendered
- **WHEN** the departments section is displayed
- **THEN** it SHALL show five tabs: Neurology, Surgical, Dental,
  Ophthalmology, Cardiology
- **AND** the first tab (Neurology) SHALL be active by default
- **AND** clicking a different tab SHALL switch the visible department content

#### Scenario: Department content

- **GIVEN** a department tab is active
- **WHEN** the tab content is displayed
- **THEN** it SHALL show a department heading, description paragraph, and
  four feature cards
- **AND** it SHALL show a department image

### Requirement: Doctor/Staff section

The system SHALL render a staff section with four doctor cards. Each card SHALL
have an image on top, a name, a specialty/position label, and social links that
slide up on hover.

#### Scenario: Staff cards

- **GIVEN** the page is rendered
- **WHEN** the staff section is displayed
- **THEN** it SHALL show four doctor cards
- **AND** each card SHALL have an image, name, and position text
- **AND** hovering a card SHALL reveal social link icons

### Requirement: Testimonials section

The system SHALL render a testimonials section with a light (`#fafafa`)
background and a carousel of testimonial entries. Each entry SHALL have a quote
icon, a user image, a name, a position label, and testimonial text.

#### Scenario: Testimonial carousel

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show at least one testimonial entry
- **AND** it SHALL have navigation dots or arrows for multiple testimonials

### Requirement: Counter/Stats section

The system SHALL render a full-width counter/stats section with a parallax
background image, dark overlay, and animated number counters (e.g., number of
patients, doctors, staff, years of experience).

#### Scenario: Stats display

- **GIVEN** the page is rendered
- **WHEN** the counter section is displayed
- **THEN** it SHALL show at least three stat counters with icons and labels
- **AND** the numbers SHALL animate on scroll into view

### Requirement: Blog section

The system SHALL render a blog section on a light background with three blog
entry cards. Each card SHALL have a date badge, an image, a title, a short
excerpt, and metadata (author, comments).

#### Scenario: Blog cards

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show three blog entry cards
- **AND** each card SHALL have a date badge, image, heading, and excerpt

### Requirement: Footer

The system SHALL render a dark (`#141313`) footer with four columns: brand
name with social icons, a categories/links list, recent posts with thumbnails,
and an open hours / subscribe form. The footer SHALL include a bottom bar with
copyright text and a link to ComponentDock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand name "Dentawell"
- **AND** it SHALL show social icons (Facebook, Twitter, Instagram, etc.)
- **AND** it SHALL show an open hours section
- **AND** the copyright bar SHALL link to ComponentDock (`https://www.componentdock.com/`)

### Requirement: Accessibility

The system SHALL meet WCAG 2.1 AA for all interactive elements.

#### Scenario: Keyboard navigation

- **GIVEN** the page is rendered
- **WHEN** the user navigates with keyboard only
- **THEN** all interactive elements SHALL be reachable via Tab
- **AND** focus-visible rings SHALL be visible on focused elements

#### Scenario: ARIA labels

- **GIVEN** the page is rendered
- **WHEN** interactive controls are rendered
- **THEN** icon-only buttons SHALL have `aria-label`
- **AND** the mobile menu toggle SHALL have `aria-expanded` and
  `aria-controls`

## Verification checklist

- [ ] All sections render correctly on desktop (1280px+)
- [ ] All sections render correctly on mobile (375px)
- [ ] Hero slider navigates between slides
- [ ] Department tabs switch content
- [ ] Staff cards reveal social links on hover
- [ ] Counter numbers animate on scroll
- [ ] Mobile hamburger menu toggles correctly
- [ ] Footer links to ComponentDock
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] All images use picsum.photos placeholders
- [ ] Work Sans font loaded via Google Fonts
- [ ] Brand blue `#2f89fc` and orange `#ff8000` used consistently
- [ ] Pill button shape (`border-radius: 40px`) on all CTA buttons
