# Template: Healnova (Medical/Hospital Landing)

## Purpose

Healnova is a single-page medical/hospital landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Medically" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a medical page with teal/blue brand accents: a hero
("We Provide High Solutions for Your Health"), a quick-contact bar (phone,
email, address), an about section ("We Are Happy To Serve You!"), a mission
video section, a services grid (General Surgery, Outpatient Services,
Respiratory Therapy, Cardiac Clinic, Laryngological Service), a doctors team
(3 members), patient testimonials, a blog/news section, and a blue footer
with departments, services, navigation, social links, and newsletter.
Healnova recreates that structure section-for-section with matching layout,
colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Medically" — free medical website template
  (source: https://colorlib.com/wp/template/medically/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/medically/`
  (HTTP 200). Sections extracted: header, hero slide, quick-contact bar,
  about, mission+video, services grid, team, testimonials, blog, footer.
- **Section order (1:1):**
  1. Header: "Medically." logo + nav (Home, Services, Departments, About,
     Blog, Contact).
  2. Hero: full-screen background image, "We Provide High Solutions for
     Your Health", "Get started" CTA.
  3. Quick Contact: three-column bar — phone (1-999-123-4567), email
     (info@medically.com), address (2918 Fake Street).
  4. About Us: image + "We Are Happy To Serve You!" heading + description
     - "Contact Us" / "Read More" CTAs.
  5. Mission/Video: "We Provide High Solutions for Your Health" with a
     play-button video area.
  6. Services: "Health Services We Provided" heading + 6 service cards
     (General Surgery, Outpatient Services, Respiratory Therapy, Cardiac
     Clinic, Laryngological Service, Respiratory Therapy).
  7. Team: "Our Dedicated Doctors" — 3 doctor cards (Dr. Jade Guzman,
     Dr. Hannah Ford, Dr. James Wilson).
  8. Testimonials: "Happy Patients" — client quote cards.
  9. Blog: "News & Updates" — 3 blog post cards.
  10. Footer (blue bg): Departments, Our Services, Navigation, Social,
      Subscribe Newsletter form.
- **Design tokens extracted from `css/style.css`:**
  - Brand: **#31b0d5** (teal/blue) primary accent.
  - Section backgrounds: white, light gray (#f7f8f9), white.
  - Footer: blue (#31b0d5).
  - Fonts: **"Open Sans"** (body) + **"Playfair Display"** (headings).
  - Buttons: teal/blue filled, white filled secondary.
- **Recreation decisions:** Standard Navbar (site name "Healnova"),
  hero with seeded picsum photo, quick-contact bar, about section with
  image, mission+video section, services grid with lucide icons,
  team cards with initials avatars, testimonials, blog cards,
  footer with newsletter form and social links. All images
  picsum-seeded (`picsum.photos/seed/healnova-N/w/h`).
  Google Fonts via `<link>`.

Healnova lives in `apps/healnova` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Healnova",
links for Home, Services, About, Team, Testimonials, and Contact, and a
dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Healnova page is rendered
- **THEN** the banner landmark contains a link with text "Healnova"
- **THEN** the navigation contains links for Home, Services, About, Team,
  Testimonials, and Contact
- **THEN** a "Get Appointment" link is visible
- **THEN** a dark-mode toggle button is present

#### Scenario: Mobile menu toggle

- **GIVEN** the Healnova page is rendered
- **WHEN** the user clicks the "Open menu" button
- **THEN** a mobile navigation appears with the same links
- **WHEN** the user clicks a link in the mobile navigation
- **THEN** the mobile navigation closes

#### Scenario: Dark mode toggle

- **GIVEN** the Healnova page is rendered
- **WHEN** the user clicks the dark-mode toggle button
- **THEN** the document root gains the "dark" class
- **WHEN** the user clicks the dark-mode toggle button again
- **THEN** the document root loses the "dark" class

### Requirement: Hero section

The system SHALL render a hero section with the headline "We Provide High
Solutions for Your Health", a "Get started" CTA button, and a background image.

#### Scenario: Hero content

- **GIVEN** the Healnova page is rendered
- **THEN** the main landmark contains a heading "We Provide High Solutions for Your Health"
- **THEN** a "Get started" link is visible

### Requirement: Quick contact bar

The system SHALL render a quick-contact bar with phone, email, and address.

#### Scenario: Quick contact content

- **GIVEN** the Healnova page is rendered
- **THEN** "Give us a call" and a phone number are visible
- **THEN** "Send us a message" and an email are visible
- **THEN** "Visit us" and an address are visible

### Requirement: About section

The system SHALL render an about section with the heading "We Are Happy To
Serve You!", a description, and "Contact Us" and "Read More" buttons.

#### Scenario: About content

- **GIVEN** the Healnova page is rendered
- **THEN** "We Are Happy To Serve You!" heading is visible
- **THEN** "Contact Us" and "Read More" buttons are visible

### Requirement: Mission section

The system SHALL render a mission section with a heading and video play button.

#### Scenario: Mission content

- **GIVEN** the Healnova page is rendered
- **THEN** "Our Mission" subheading is visible
- **THEN** a play button is visible

### Requirement: Services section

The system SHALL render a services section with 6 service cards.

#### Scenario: Services content

- **GIVEN** the Healnova page is rendered
- **THEN** "Health Services We Provided" heading is visible
- **THEN** service cards for General Surgery, Outpatient Services,
  Respiratory Therapy, Cardiac Clinic, and Laryngological Service are visible

### Requirement: Team section

The system SHALL render a team section with 3 doctor cards.

#### Scenario: Team content

- **GIVEN** the Healnova page is rendered
- **THEN** "Our Dedicated Doctors" heading is visible
- **THEN** doctor cards for Dr. Jade Guzman, Dr. Hannah Ford,
  and Dr. James Wilson are visible

### Requirement: Testimonials section

The system SHALL render a testimonials section with patient quotes.

#### Scenario: Testimonials content

- **GIVEN** the Healnova page is rendered
- **THEN** "Happy Patients" heading is visible
- **THEN** testimonial cards with quotes are visible

### Requirement: Blog section

The system SHALL render a blog section with post cards.

#### Scenario: Blog content

- **GIVEN** the Healnova page is rendered
- **THEN** "News & Updates" heading is visible
- **THEN** blog post cards are visible

### Requirement: Footer

The system SHALL render a blue footer with departments, services, navigation,
social links, and a newsletter subscription form.

#### Scenario: Footer content

- **GIVEN** the Healnova page is rendered
- **THEN** the contentinfo landmark contains departments, services, and
  navigation links
- **THEN** social media links are present
- **THEN** a newsletter form with email input and subscribe button is present

#### Scenario: Newsletter form validation

- **GIVEN** the footer newsletter form is displayed
- **WHEN** the user submits with an invalid email
- **THEN** an error message is shown
- **WHEN** the user submits with a valid email
- **THEN** a success message is shown

#### Scenario: Component Dock link

- **GIVEN** the footer is rendered
- **THEN** a link to componentdock.com is present
