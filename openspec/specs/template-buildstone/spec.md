# Template: Buildstone (Construction Company Landing)

## Purpose

Buildstone is a single-page construction company template. It is an original
React recreation of the ColorLib free "Topbuilder" template
(preview: https://preview.colorlib.com/theme/topbuilder/ — construction company
landing), built under a different name with the monorepo stack: Vite + React 19
+ Tailwind CSS 4 + TypeScript.

Design tokens captured from the original (verified 2026-09-16 via direct fetch):

- Brand gold/yellow `#f6b60b` (buttons, highlights, section accents)
- Primary dark `#111f29` (nav background, dark sections)
- Secondary dark `#222222` (body text, button text)
- Light gray `#f5f5f5` (section backgrounds)
- White `#ffffff` / `#fefefe` (content areas, text on dark)
- Font: Roboto (Google Fonts via `<link>` — used throughout)
- Headings font: Oswald (Google Fonts — used in hero banners)
- Buttons: solid gold `#f6b60b` background, 180px wide, uppercase Roboto bold
  18px/59px, `#222222` text; on hover, dark `#222222` background scales in
  from center (scaleY animation), text turns white
- Rounded corners: 10px on cards, 50% on avatar circles
- Section backgrounds alternate: white → light gray `#f5f5f5` → dark
  parallax (`#111f29` with background image + `rgba(0,0,0,0.8)` overlay)
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Buildstone lives in `apps/buildstone` and uses shared components from
`packages/ui`.

## Requirements

### Requirement: Top header bar

The system SHALL render a dark top header bar with contact info (phone, email,
hours) on the left and social media icon links (Facebook, Twitter, Google+,
Instagram, Pinterest, LinkedIn) on the right.

#### Scenario: Contact info rendering

- **GIVEN** the page is rendered
- **WHEN** the top header bar is displayed
- **THEN** it SHALL show phone number, email, and business hours

#### Scenario: Social icons

- **GIVEN** the page is rendered
- **WHEN** the top header bar is displayed
- **THEN** it SHALL show social media icon links

### Requirement: Navigation bar

The system SHALL render a white navbar with the Buildstone logo and navigation
links: Home, About Us, Services, Portfolio, Team, Blog, Contact, with a mobile
hamburger toggle.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show links to Home, About Us, Services, Portfolio, Team,
  Blog, and Contact

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on mobile
- **WHEN** the user clicks the hamburger button
- **THEN** the mobile menu SHALL expand
- **AND** clicking a link SHALL close the menu

### Requirement: Hero slider

The system SHALL render a full-width hero slider with background images, dark
overlay, subtitle "Welcome to our", heading "CLEAN, MODERN, MULTIPURPOSE
THEME", descriptive paragraph, and a "Read More" gold CTA button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero slider is displayed
- **THEN** it SHALL show the subtitle "Welcome to our"
- **AND** it SHALL show the heading "CLEAN, MODERN, MULTIPURPOSE THEME"
- **AND** it SHALL show a descriptive paragraph
- **AND** it SHALL show a "Read More" CTA button

### Requirement: Professional builder features bar

The system SHALL render a 4-column features bar with icons and titles:
Professional Builder, We Deliver Quality, Always On Time, We Are Passionate.

#### Scenario: Features rendering

- **GIVEN** the page is rendered
- **WHEN** the features bar is displayed
- **THEN** it SHALL show 4 feature items each with an icon, title, and
  short description

### Requirement: About Us section

The system SHALL render an "About Us" section with a centered heading,
a two-column layout: left side has "Who We Are" text with a "Contact Now"
gold button; right side has a team/client image.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the About Us section is displayed
- **THEN** it SHALL show the heading "ABOUT US"
- **AND** it SHALL show "WHO WE ARE" subheading
- **AND** it SHALL show a "Contact Now" button
- **AND** it SHALL show a client/team image

### Requirement: What We Offer section

The system SHALL render a "What We Offer" section with a 3-column grid of
construction services (Building Construction, Project Planning, Interior
Design), each with an image, icon, title link, and description.

#### Scenario: Services rendering

- **GIVEN** the page is rendered
- **WHEN** the What We Offer section is displayed
- **THEN** it SHALL show 3 service cards each with an image, icon, title,
  and description

### Requirement: Our Features section

The system SHALL render a "Why Choose Us" section with a left-side image
of a worker and a right-side list of features (30+ Years of Experience,
Building the Future, Unique Building Design), each with an icon, title,
and description.

#### Scenario: Features list

- **GIVEN** the page is rendered
- **WHEN** the Our Features section is displayed
- **THEN** it SHALL show 3 feature items each with an icon, title, and
  description

### Requirement: Our Services portfolio

The system SHALL render a "Our Services" section with a filterable portfolio
gallery (filter tabs: All, Architecture, Building, Construction, Design,
Painting) and a grid of project images with hover overlays showing project
name.

#### Scenario: Portfolio gallery

- **GIVEN** the page is rendered
- **WHEN** the services portfolio is displayed
- **THEN** it SHALL show filter tabs for All, Architecture, Building,
  Construction, Design, and Painting
- **AND** it SHALL show a grid of project images

#### Scenario: Portfolio hover

- **GIVEN** the portfolio is displayed
- **WHEN** the user hovers over a project image
- **THEN** it SHALL show a dark overlay with the project name

### Requirement: Our Team section

The system SHALL render a "Our Team" section with a 4-column grid of team
member cards, each with a photo, social media links (Facebook, Twitter,
LinkedIn), name, and role.

#### Scenario: Team members

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show 4 team member cards each with a photo, name,
  role, and social media icon links

### Requirement: Our Achievements section

The system SHALL render a dark parallax "Our Achievements" section with
4 counter stats: Projects Completed (800), House Renovations (230),
Workers Employed (1390), Awards Won (125), each with an icon.

#### Scenario: Stats rendering

- **GIVEN** the page is rendered
- **WHEN** the achievements section is displayed
- **THEN** it SHALL show 4 stat items with icons and numbers
- **AND** the background SHALL be dark with a parallax image

### Requirement: Testimonials section

The system SHALL render a "Our Testimonials" section with a carousel of
testimonial cards, each with a circular avatar photo, name, role, quote
icon, and testimonial text.

#### Scenario: Testimonial rendering

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show testimonial cards with avatar, name, role, and
  quote text

### Requirement: Featured Works section

The system SHALL render a dark parallax "Our Featured Works" section with
a 4-column gallery grid of project images with hover overlays showing
project name and "VIEW PROJECT" link.

#### Scenario: Gallery grid

- **GIVEN** the page is rendered
- **WHEN** the featured works section is displayed
- **THEN** it SHALL show 4 gallery items with hover overlays

### Requirement: Latest Blog section

The system SHALL render a "Our Latest Blog" section with a 3-column grid
of blog post cards, each with an image, title link, author/date info,
and excerpt with "Read More" link.

#### Scenario: Blog cards

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show 3 blog cards each with an image, title, author,
  date, excerpt, and "Read More" link

### Requirement: Partners section

The system SHALL render an "Our Partners" section with a carousel/slider
of partner logo images.

#### Scenario: Partner logos

- **GIVEN** the page is rendered
- **WHEN** the partners section is displayed
- **THEN** it SHALL show partner logo images in a slider

### Requirement: Booking CTA bar

The system SHALL render a full-width gold booking CTA bar with heading
"Booking now if you need build your dream home", descriptive paragraph,
and a "BOOK NOW" gold button.

#### Scenario: Booking CTA content

- **GIVEN** the page is rendered
- **WHEN** the booking CTA bar is displayed
- **THEN** it SHALL show the heading text and a "BOOK NOW" button

### Requirement: Footer

The system SHALL render a dark 4-column footer with: About Our Company
(logo, description, social icons), Quick Links, Twitter Feed, and Contact
Us (email, phone, address). A copyright bar at the bottom links to
Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show 4 columns of footer content
- **AND** the copyright bar SHALL link to Component Dock

### Requirement: Accessibility

The system SHALL use semantic HTML, aria labels on icon-only controls,
and focus-visible rings on interactive elements.

#### Scenario: Keyboard navigation

- **GIVEN** the page is rendered
- **WHEN** the user navigates with keyboard
- **THEN** all interactive elements SHALL receive visible focus indicators

## Verification checklist

- [ ] Spec matches section order from live preview: Top Header → Navbar →
  Hero Slider → Professional Builder Bar → About Us → What We Offer →
  Our Features → Our Services (Portfolio) → Our Team → Achievements →
  Testimonials → Featured Works → Latest Blog → Partners → Booking CTA →
  Footer
- [ ] Design tokens match: brand gold #f6b60b, dark #111f29, Roboto + Oswald
  fonts, 10px card radius, 50% avatar radius
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] Footer links to Component Dock
- [ ] All images use picsum.photos seeded placeholders
- [ ] Icons from lucide-react (not Font Awesome)
- [ ] Mobile responsive with hamburger menu
- [ ] Accessibility: semantic HTML, aria labels, focus-visible
