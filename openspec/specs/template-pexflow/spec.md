# Template: Pexflow (Construction / Engineering Landing)

## Purpose

Recreation of the ColorLib **Pexcon** template
(https://colorlib.com/wp/template/pexcon/) as a single-page React
application. Live preview analyzed:
https://preview.colorlib.com/theme/pexcon/

**Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)

## Requirements

### Requirement: Navbar navigation

The template SHALL display a sticky top navbar with logo, navigation links, and a "Get a Quote" CTA button, with mobile hamburger toggle.

#### Scenario: Desktop navbar shows all links

- **WHEN** the page loads on desktop
- **THEN** the navbar shows the logo "Pexflow"
- **AND** navigation links: Home, About, Services, Projects, Blog, Contact
- **AND** a "Get a Quote" CTA button is visible

#### Scenario: Mobile navbar collapses to hamburger

- **WHEN** the viewport is mobile width
- **THEN** a hamburger menu button is visible
- **AND** clicking it opens the mobile menu with all links

### Requirement: Hero / Banner section

The template SHALL display a full-width hero with light gray background, headline, subtext paragraph, and a "View project" CTA button.

#### Scenario: Hero displays headline and CTA

- **WHEN** the user views the hero section
- **THEN** a headline "Committed to Superior Quality and Results" is displayed
- **AND** a subtext paragraph is visible
- **AND** a "View project" CTA button is present

#### Scenario: Hero has light gray background

- **WHEN** the user views the hero section
- **THEN** the background color is #f7f7f7

### Requirement: About section

The template SHALL display a two-column about section with image on the left and text on the right, featuring "Engineering Your Dreams With Us" heading and two feature items.

#### Scenario: About section shows image and text

- **WHEN** the user scrolls to the about section
- **THEN** a left image and right text column are visible
- **AND** the heading reads "Engineering Your Dreams With Us"
- **AND** two feature items are displayed: "Certified Company" and "Experience Employees"

### Requirement: Services section

The template SHALL display a services section with section title "Our Services" and three service cards in columns.

#### Scenario: Services displays three cards

- **WHEN** the user scrolls to the services section
- **THEN** an "Our Services" heading is visible
- **AND** three service cards are shown: "Better Future", "Qualified Trainers", "Job Opportunity"
- **AND** each card has an icon, description text, and a "Read more" link

### Requirement: Experience / Counter section

The template SHALL display an experience section with heading, counter showing years of experience, and a right-side image.

#### Scenario: Experience section shows years counter

- **WHEN** the user scrolls to the experience section
- **THEN** a "We Are Experience in Construction" heading is visible
- **AND** a counter displays "20 years of Experience"
- **AND** a right-side image is displayed

### Requirement: Projects section with filter

The template SHALL display a projects section with filterable gallery and filter tabs for All, Buildings, Rebuild, Architecture.

#### Scenario: Projects shows filterable gallery

- **WHEN** the user scrolls to the projects section
- **THEN** an "Our Projects" heading is visible
- **AND** filter tabs are shown: All, Buildings, Rebuild, Architecture
- **AND** three project cards are displayed with hover overlay

#### Scenario: Projects filter tabs are interactive

- **WHEN** the user clicks "Buildings" filter
- **THEN** only building-type projects are shown

### Requirement: Stats / Counter strip

The template SHALL display a stats section with four counter blocks on a dark background.

#### Scenario: Stats shows four counters

- **WHEN** the user scrolls to the stats section
- **THEN** four stat blocks are displayed: "60 Satisfied Client", "10 Worldwide Branches", "80 Total Projects", "24 Work Finished"
- **AND** each block has an SVG icon

### Requirement: Reviews / Testimonials

The template SHALL display a reviews section with client testimonials in a grid layout.

#### Scenario: Reviews shows client testimonials

- **WHEN** the user scrolls to the reviews section
- **THEN** a "Some Feedback From Client" heading is visible
- **AND** testimonial cards are shown
- **AND** each card shows a client avatar, quote text, and role

### Requirement: Blog section

The template SHALL display a blog section with three recent post cards.

#### Scenario: Blog shows three posts

- **WHEN** the user scrolls to the blog section
- **THEN** a "Recent News" heading is visible
- **AND** three blog cards are shown with image, meta (comments, likes), title, and "Read more" link

### Requirement: Footer

The template SHALL display a dark footer with four columns: logo/about, services links, gallery, and contact info, plus a copyright bar with Component Dock link.

#### Scenario: Footer displays four columns

- **WHEN** the user scrolls to the footer
- **THEN** a logo + about blurb column is visible
- **AND** a "Best Services" links column is visible
- **AND** an "Our Gallery" image grid column is visible
- **AND** a "Contact Info" column with address, phone, email is visible

#### Scenario: Footer includes Component Dock link

- **WHEN** the user views the footer copyright
- **THEN** a link to https://www.componentdock.com/ labeled "Component Dock" is present

### Requirement: Design tokens

The template SHALL use the Pexflow brand palette: primary orange #ff5e13, secondary navy #001b5e, Roboto font, alternating section backgrounds #fbf9ff.

#### Scenario: Brand colors are applied correctly

- **WHEN** the template renders
- **THEN** the primary brand color is #ff5e13
- **AND** the heading color is #001b5e
- **AND** the font family is Roboto

### Requirement: Responsive Design

The template SHALL collapse the navbar to a hamburger menu and stack columns vertically on mobile.

#### Scenario: Mobile layout adapts

- **WHEN** the viewport is mobile width (< 768px)
- **THEN** the navbar collapses to a hamburger menu toggle
- **AND** service cards stack in a single column
