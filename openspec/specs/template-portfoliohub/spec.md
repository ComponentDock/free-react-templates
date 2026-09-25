---
name: portfoliohub
description: >
  CV / personal portfolio onepage template recreating ColorLib "Cvportfolio"
  under a different name.
source:
  colorlib: https://colorlib.com/wp/template/cvportfolio/
  preview: https://preview.colorlib.com/theme/cvportfolio/
---

# PortfolioHub — CV / Portfolio Template

## Purpose

PortfolioHub is a personal CV / portfolio onepage template. It recreates the
ColorLib "Cvportfolio" design under a different name with React 19, Tailwind
CSS 4, and TypeScript. The template showcases a full personal resume page
with sections for contact header, intro/profile, portfolio gallery, about
me with skill progress, work experience, education timeline, counters, and
footer.

## Design Tokens

Extracted from the live preview CSS (`01-cv-portfolio/css/styles.css`):

| Token             | Value                   | Usage                                 |
| ----------------- | ----------------------- | ------------------------------------- |
| brand-primary     | `#FFA804` (amber)       | accent color, section headings bar, download button, social icon hover, education timeline dot, portfolio filter active |
| brand-secondary   | `#FFAD01` (goldenrod)   | header background bar                 |
| brand-yellow-alt  | `#FFA600`               | `.font-yellow` utility class          |
| brand-dark        | `#28023D` (deep purple) | experience section background, footer background |
| brand-purple-mute | `#887392` (muted purple)| social icon default background        |
| text-primary      | `#333`                  | body text, headings                   |
| text-secondary    | `#777`                  | paragraph text, subheadings           |
| text-muted        | `#999`                  | `.font-lite-black` utility class      |
| text-white        | `#fff`                  | header text, experience section text  |
| text-semi-white   | `#ddd`                  | `.font-semi-white` utility class      |
| font-body         | Poppins, serif, 400     | body text                             |
| font-headings     | Poppins, cursive        | h1–h3                                 |
| font-accent       | Allura                  | script/cursive accent (not used in CSS but loaded) |
| border-radius-sm  | 4–5px                   | header bar, buttons                   |
| border-radius-pill| 20px                    | social icon circles                   |
| border-radius-full| 100px                   | profile image circle                  |

## Section Order (from live preview DOM)

1. **Header** — contact info bar (location, phone, email) + "Download CV" button
2. **Intro** — profile image, name, title, personal info list, social icons
3. **Portfolio** — heading + category filter tabs (ALL / WEB DESIGN / BRANDING / GRAPHIC DESIGN) + masonry image grid
4. **About** — heading + bio paragraph + radial progress skill charts (HTML5 & CSS3, jQuery, Photoshop, Illustrator)
5. **Experience** — dark purple background, heading + work experience entries with bullet lists
6. **Education** — heading + timeline entries with amber dots
7. **Counter** — background image with overlay, animated number counters (Degrees, Projects, Clients, Finished Projects)
8. **Footer** — dark purple background, copyright text

## Requirements

### Requirement: Header renders contact info and download button

The template SHALL render a floating amber header bar with contact details and a download CV button.

#### Scenario: Header shows location info

- **WHEN** the page loads
- **THEN** the header displays a location icon with address "3008 Sarah Drive, Franklin, LA 70538"

#### Scenario: Header shows phone info

- **WHEN** the page loads
- **THEN** the header displays a phone icon with number "337-4139538" and "MON - FRI, 8AM - 7PM"

#### Scenario: Header shows email info

- **WHEN** the page loads
- **THEN** the header displays an email icon with "contact@portfoliohub.com" and "REPLY IN 24 HOURS"

#### Scenario: Header shows download button

- **WHEN** the page loads
- **THEN** the header displays a "Download CV" button

### Requirement: Intro section displays profile and personal info

The template SHALL render an intro section with a profile image, name, title, personal details, and social icons.

#### Scenario: Intro shows profile image

- **WHEN** the page loads
- **THEN** a circular profile image is displayed

#### Scenario: Intro shows name and title

- **WHEN** the page loads
- **THEN** the name "Michel Smith" and title "Key Account Manager" are displayed

#### Scenario: Intro shows personal info list

- **WHEN** the page loads
- **THEN** personal info items (Birthday, Email, Marital Status) are listed

#### Scenario: Intro shows social icons

- **WHEN** the page loads
- **THEN** social icon links (Pinterest, LinkedIn, Instagram, Facebook, Twitter) are displayed as round purple circles that turn amber on hover

### Requirement: Portfolio section displays filterable gallery

The template SHALL render a portfolio section with category filter tabs and a masonry-style image grid.

#### Scenario: Portfolio shows heading

- **WHEN** the page loads
- **THEN** the section displays "Portfolio" heading with "MY WORK" subheading and an amber accent bar

#### Scenario: Portfolio shows filter tabs

- **WHEN** the page loads
- **THEN** filter tabs are displayed: ALL, WEB DESIGN, BRANDING, GRAPHIC DESIGN

#### Scenario: Portfolio shows image grid

- **WHEN** the page loads
- **THEN** a grid of portfolio images is displayed in a 3-column masonry layout

### Requirement: About section displays bio and skill progress

The template SHALL render an about section with a bio paragraph and radial progress charts for skills.

#### Scenario: About shows heading

- **WHEN** the page loads
- **THEN** "About me" heading with "PROFESSIONAL PATH" subheading is displayed

#### Scenario: About shows skill progress

- **WHEN** the page loads
- **THEN** radial progress charts are displayed for HTML5 & CSS3 (97%), jQuery, Photoshop, and Illustrator

### Requirement: Experience section displays work history on dark background

The template SHALL render an experience section with a dark purple background and work experience entries.

#### Scenario: Experience shows on dark background

- **WHEN** the page loads
- **THEN** the experience section has a deep purple (#28023D) background

#### Scenario: Experience shows work entries

- **WHEN** the page loads
- **THEN** work experience entries are displayed with title, company, date range, description, and bullet list

#### Scenario: Experience uses dot markers

- **WHEN** the page loads
- **THEN** each bullet point in the experience list has a white-bordered circular marker

### Requirement: Education section displays academic timeline

The template SHALL render an education section with a vertical timeline and dot markers.

#### Scenario: Education shows heading

- **WHEN** the page loads
- **THEN** "Education" heading with "ACADEMIC CAREER" subheading is displayed

#### Scenario: Education shows timeline entries

- **WHEN** the page loads
- **THEN** education entries are displayed with degree, institution, graduation date, and description

#### Scenario: Education uses amber timeline dots

- **WHEN** the page loads
- **THEN** each education entry has an amber (#FFAB00) dot on a vertical timeline line

### Requirement: Counter section displays animated stats

The template SHALL render a counter section with a background image overlay and animated number counters.

#### Scenario: Counter shows background image

- **WHEN** the page loads
- **THEN** the counter section has a background image with dark overlay

#### Scenario: Counter shows stat items

- **WHEN** the page loads
- **THEN** four counter items are displayed: Degrees, Projects Completed, Satisfied Clients, Finished Projects

#### Scenario: Counter animates numbers

- **WHEN** the user scrolls to the counter section
- **THEN** the numbers animate from 0 to their target values

### Requirement: Footer renders copyright

The template SHALL render a footer with copyright text on a dark purple background.

#### Scenario: Footer shows copyright

- **WHEN** the page loads
- **THEN** a footer with copyright text is displayed on a deep purple background

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** the footer contains a link to "https://www.componentdock.com/"

## Verification Checklist

- [ ] All 8 sections present in correct order
- [ ] Header: amber bar, contact info, download button
- [ ] Intro: circular profile image, name, title, info list, social icons
- [ ] Portfolio: filter tabs, 3-column masonry grid
- [ ] About: bio text, radial progress charts
- [ ] Experience: dark purple background, work entries, bullet markers
- [ ] Education: timeline with amber dots
- [ ] Counter: background image, 4 animated counters
- [ ] Footer: copyright, Component Dock link
- [ ] Design tokens: #FFA804 accent, #28023D dark, Poppins font, rounded elements
- [ ] Responsive layout (mobile-friendly)
- [ ] 100% test coverage
