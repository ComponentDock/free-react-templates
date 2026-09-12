# Template: Mortar (Creative Agency)

## Purpose

Recreation of the ColorLib **Grunt** creative agency template as a React 19 +
Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/grunt/
- **Preview:** https://preview.colorlib.com/theme/grunt/
- **New name:** `mortar` (apps/mortar, @free-react-templates/mortar)
- **Deploy target:** https://mortar.free.componentdock.com
- **Category:** Creative Agency / Freelancer
- **Screenshot reference:** https://colorlib.com/wp/wp-content/uploads/sites/2/grunt-free-template.jpg

## Design Tokens

Extracted from the live preview stylesheet (style.css at
preview.colorlib.com/theme/grunt/):

### Colors

| Token   | Value     | Usage                                 |
| ------- | --------- | ------------------------------------- |
| primary | `#5e72e4` | Brand blue-purple (headings, accents) |
| accent  | `#f5365c` | Red CTA accent                        |
| ink     | `#1a1a2e` | Dark text                             |
| smoke   | `#7f7f7f` | Muted body text                       |
| surface | `#ffffff` | White background                      |
| mist    | `#f7f8fc` | Light section background              |

### Fonts

| Font | Family                 | Usage                      |
| ---- | ---------------------- | -------------------------- |
| Body | `'Roboto', sans-serif` | All text (300/400/500/700) |

### Layout

- Bootstrap-based grid, single-page scrolling
- Hero: full-width background image with dark overlay + heading + CTA
- Services: 3-column responsive grid (6 items)
- About: 2-column (image + text with checklists)
- Team: 2 members side-by-side with social links
- Portfolio: 3 alternating project rows with testimonials
- Testimonials: 2-column grid on light background
- Gallery: 3-column photo grid with hover overlay
- Contact: form + info sidebar
- Footer: dark background with Component Dock link

## Requirements

### Requirement: Navbar renders with site name and navigation links

The template SHALL display a sticky navigation bar with the site name "Mortar."
and navigation links to all major sections.

#### Scenario: Navbar is visible on page load

- **WHEN** the page loads
- **THEN** the navbar is rendered with the logo "Mortar."
- **AND** navigation links for Home, Services, About, Portfolio, Gallery, Contact are present
- **AND** a dark mode toggle button is available

#### Scenario: Dark mode toggle works

- **WHEN** the user clicks the dark mode toggle
- **THEN** the page theme switches to dark mode

### Requirement: Hero section displays agency headline and CTA

The template SHALL display a hero section with a background image, heading text,
subtext, and a call-to-action button.

#### Scenario: Hero renders on page load

- **WHEN** the page loads
- **THEN** the hero section displays a heading containing "Creative"
- **AND** a subtext paragraph is visible
- **AND** a "Start a project" CTA button is present

### Requirement: Services section shows 6 service cards

The template SHALL display a services section with exactly 6 service items in a
responsive grid.

#### Scenario: All services are rendered

- **WHEN** the services section is in view
- **THEN** 6 service cards are visible
- **AND** each card has a title, description, and "Learn more" link

### Requirement: About section shows agency description

The template SHALL display an about section with an image and descriptive text.

#### Scenario: About section renders correctly

- **WHEN** the about section is in view
- **THEN** an image and heading "About us" are visible
- **AND** a checklist of services is displayed
- **AND** a video link is present

### Requirement: Team section shows member profiles

The template SHALL display a team section with 2 member profiles including
photos, roles, bios, and social links.

#### Scenario: Team members are displayed

- **WHEN** the team section is in view
- **THEN** 2 team member cards are visible
- **AND** each shows name, role, bio, and social media links

### Requirement: Portfolio showcases project work

The template SHALL display a portfolio section with 3 project showcases in
alternating layouts, each with an image, description, and testimonial.

#### Scenario: Portfolio projects render

- **WHEN** the portfolio section is in view
- **THEN** 3 project rows are visible
- **AND** each has a title, description, image, and testimonial quote

### Requirement: Testimonials section displays client quotes

The template SHALL display a testimonials section with 4 client testimonial
cards on a light background.

#### Scenario: Testimonials render correctly

- **WHEN** the testimonials section is in view
- **THEN** 4 testimonial cards are visible
- **AND** each shows a quote, client name, and role

### Requirement: Gallery shows photo grid

The template SHALL display a gallery section with a 6-item photo grid that
supports lightbox preview on click.

#### Scenario: Gallery images render

- **WHEN** the gallery section is in view
- **THEN** 6 gallery images are visible
- **AND** clicking an image opens a lightbox dialog
- **AND** the lightbox can be closed via close button or backdrop click

### Requirement: Contact form is functional

The template SHALL display a contact form with name, email, subject, and
message fields, plus a submit button.

#### Scenario: Contact form renders and submits

- **WHEN** the contact section is in view
- **THEN** all form fields (name, email, subject, message) are present
- **AND** submitting the form clears all fields

### Requirement: Footer links to Component Dock

The template footer SHALL include a link to https://www.componentdock.com/
branded as "Component Dock".

#### Scenario: Footer renders with Component Dock link

- **WHEN** the footer is visible
- **THEN** a link to https://www.componentdock.com/ is present
- **AND** the link text contains "Component Dock"
- **AND** a copyright notice is displayed
