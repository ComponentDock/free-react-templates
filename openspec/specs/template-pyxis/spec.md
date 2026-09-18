# Template: Pyxis (Business / Agency Landing)

## Purpose

Pyxis is a single-page business/agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Ozberk" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original Ozberk template is a fullscreen business landing page with a
dark-overlay hero banner, team section, feature grid, video CTA, testimonial
counter, service grid, contact info, and newsletter footer. The recreation
uses the NEW name **Pyxis** and replaces all ColorLib references with
original content.

## Design reference (replication findings)

- **Original:** ColorLib "Ozberk" — business/agency landing template
  (source: https://colorlib.com/wp/template/ozberk/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/ozberk/
  (HTTP 200, full rendered DOM + `css/main.css` extracted).
- **Section order (1:1):** Navbar (logo + Home, About, Services, Portfolio, Contact) → Banner (fullscreen hero with dark overlay, heading, CTA) → TeamForce (image + heading + paragraph + CTA) → Features (2×3 grid: Responsive Layout, Light & Dark Themes, Parallax Support, Retina Ready Graphics, HTML5 Video, Powerful Performance) → VideoSection (dark overlay, play button, heading + subtitle) → TestimonialSection (counter 5962+ + Projects Completed + testimonial carousel) → ServiceSection (image left + 2×3 service grid right) → ContactSection (4 columns: office, phone, email, support) → Footer (newsletter form + 4-col links + social icons + Component Dock copyright).
- **Design tokens extracted from `css/main.css`:**
  - Font: **Poppins** (weights 300, 500, 600) via Google Fonts.
  - Brand/accent color: **#edbf3a** (gold/amber) — selection highlight, bold, CTA buttons.
  - Body text: **#777777** (gray).
  - Headings: **#222222** (dark).
  - Buttons: rounded-full CTA with arrow icon, brand-colored fill.
  - Dark overlays on hero and video sections.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/pyxis-<n>/<w>/<h>`); icons → lucide-react;
  social icons → inline SVGs (brand icons removed from lucide-react);
  forms prevent default (no backend); no assets copied.

Pyxis lives in `apps/pyxis` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky top navigation bar with the site name "Pyxis" and anchor links to the page sections.

#### Scenario: Navbar content

- **GIVEN** the Pyxis page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the logo text "Pyxis"
- **AND** the navbar SHALL show links to Home, About, Services, Portfolio, and Contact

#### Scenario: Mobile menu toggle

- **GIVEN** the viewport is mobile-sized
- **WHEN** the user clicks the hamburger menu button
- **THEN** a mobile navigation menu SHALL open showing the same links
- **AND** the toggle button label SHALL change to "Close menu"
- **WHEN** the user clicks the close button
- **THEN** the mobile navigation menu SHALL close

### Requirement: Hero banner

The system SHALL render a fullscreen hero banner with a background image, dark overlay, heading text, and a CTA button.

#### Scenario: Banner content

- **GIVEN** the Pyxis page is rendered
- **WHEN** the page loads
- **THEN** the banner SHALL show the heading "Effective Sleek and Clean Design for User Interface"
- **AND** the banner SHALL show a "Get Started" CTA button
- **AND** the banner SHALL have a background image with a dark overlay

### Requirement: Team section

The system SHALL render a team section with a heading, paragraph, image, and CTA button.

#### Scenario: Team section content

- **GIVEN** the Pyxis page is rendered
- **WHEN** I scroll to the team section
- **THEN** the section SHALL show the heading "Meet Our Team"
- **AND** the section SHALL show a descriptive paragraph
- **AND** the section SHALL show a "View More" CTA button
- **AND** the section SHALL show a team image

### Requirement: Features grid

The system SHALL render a 2-column grid of 6 feature cards, each with an icon, title, and description.

#### Scenario: Feature cards

- **GIVEN** the Pyxis page is rendered
- **WHEN** I scroll to the features section
- **THEN** I SHALL see 6 feature cards
- **AND** each card SHALL have an icon, a title, and a description
- **AND** the titles SHALL be: Responsive Layout, Light & Dark Themes, Parallax Support, Retina Ready Graphics, HTML5 Video, Powerful Performance

### Requirement: Video section

The system SHALL render a video section with a dark overlay background, play button, heading, and subtitle.

#### Scenario: Video section content

- **GIVEN** the Pyxis page is rendered
- **WHEN** I scroll to the video section
- **THEN** the section SHALL show a play button
- **AND** the section SHALL show the heading "Being Unique Is the Preference Now-a-Days"
- **AND** the section SHALL show the subtitle "Watch our story unfold"

### Requirement: Testimonial section

The system SHALL render a testimonial section with a counter and a testimonial card.

#### Scenario: Counter and testimonial

- **GIVEN** the Pyxis page is rendered
- **WHEN** I scroll to the testimonial section
- **THEN** the section SHALL show the counter "5962+" and "Projects Completed"
- **AND** the section SHALL show a testimonial quote with author name and company

### Requirement: Service section

The system SHALL render a service section with a background image and a 2×3 grid of service items.

#### Scenario: Service items

- **GIVEN** the Pyxis page is rendered
- **WHEN** I scroll to the service section
- **THEN** I SHALL see 6 service items with icons and titles
- **AND** the titles SHALL be: Responsive Framework, Geniusly Transformable, Powerfully Customizable, Industrial Support, Extensively Extendable, Beautifully Presented

### Requirement: Contact section

The system SHALL render a contact section with 4 columns of contact information.

#### Scenario: Contact columns

- **GIVEN** the Pyxis page is rendered
- **WHEN** I scroll to the contact section
- **THEN** I SHALL see 4 contact columns: Visit Our Office, Let's Call Us, Let's Email Us, Customer Support
- **AND** each column SHALL contain relevant contact details

### Requirement: Footer

The system SHALL render a footer with a newsletter form, link columns, social icons, and a Component Dock copyright link.

#### Scenario: Footer content

- **GIVEN** the Pyxis page is rendered
- **WHEN** I scroll to the footer
- **THEN** the footer SHALL show a newsletter subscription form with email input and "Subscribe" button
- **AND** the footer SHALL show link columns (Top Products, Navigation, Compare)
- **AND** the footer SHALL show social media icon links
- **AND** the footer SHALL show a copyright line with a link to https://www.componentdock.com/

#### Scenario: Newsletter form submission

- **GIVEN** the footer newsletter form is rendered
- **WHEN** the user clicks "Subscribe"
- **THEN** the form SHALL prevent default submission (no backend)

### Requirement: App composition

The system SHALL render all sections in the correct order within the App component.

#### Scenario: All sections present

- **GIVEN** the Pyxis App is rendered
- **WHEN** the page loads
- **THEN** all sections SHALL be present in order: Navbar, Banner, TeamForce, Features, VideoSection, TestimonialSection, ServiceSection, ContactSection, Footer
