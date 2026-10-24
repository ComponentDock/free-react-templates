# Template: CoursePlex (Education)
<!-- prep-status: shipped-as=eduforge -->
> **SHIPPED-UNDER** — the ColorLib `edusite` design this prep describes already
> ships as `apps/eduforge` (<https://eduforge.free.componentdock.com>).
> Do not scaffold `apps/courseplex`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-eduforge/spec.md`.

## Purpose

Recreation of the ColorLib "Edusite" education template as a React 19 + Vite + Tailwind 4 + TypeScript application.

- **Source:** [ColorLib Edusite](https://colorlib.com/wp/template/edusite/)
- **Preview:** https://preview.colorlib.com/theme/edusite/
- **New name:** courseplex (apps/courseplex, @free-react-templates/courseplex)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design Tokens (extracted from preview CSS)

| Token | Value | Notes |
|-------|-------|-------|
| Body text | `#798696` | Muted blue-grey, default text color |
| Headers | `#374050` | Dark navy-slate, used for h1–h4 and nav |
| Primary / accent | `#FF6700` | Vivid orange — buttons, links, active states, price badges |
| Grey / border | `#EBEBEB` | Light grey — borders, dividers |
| Overlay gradient | `linear-gradient(to bottom, #374050, #798696)` | Parallax overlay on hero, CTA, contact sections |
| Footer background | `#374050` | Same dark navy-slate |
| Button shape | `border-radius: 40px` | Pill-shaped buttons |
| Button style | bg `#FF6700`, text `#FFF`; hover: bg `#FFF`, border `2px solid #FF6700`, text `#FF6700` | Reversible pill button |
| Font — headings / nav | Montserrat | Weights: 400, 600 |
| Font — body / content | Lato | Weight: 700 |
| Card border | `1px solid #EBEBEB`, `border-radius: 4px` | Course cards have subtle border + radius |
| Social icons | FontAwesome style circles (`border-radius: 50%`, border `#EBEBEB`) | Footer social row |

## Section Structure (from preview DOM, in order)

1. **Navbar** — transparent overlay nav; logo (left) + nav links (right): Home, About, Courses, Blog, Contact; mobile toggle hamburger.
2. **Hero** — full-width parallax background image with gradient overlay; left-aligned heading "Edusite Free Online Training Courses" + lead paragraph + pill "Get Started!" CTA button.
3. **About** — two-column layout: left column has section header + 3 feature items (Online Courses, Expert Teachers, Community — each with icon + title + blurb); right column has about image.
4. **Courses** — centered section header + 8 course cards in a 4-column responsive grid (2 rows of 4). Each card: image thumbnail with link overlay icon, title, details row (category label + price badge: "Free" or "Premium"). "More Courses" center button below.
5. **Call to Action** — full-width parallax background with gradient overlay; left-aligned heading + lead paragraph + pill "Get Started!" CTA button.
6. **Why Us** — centered section header + 3 feature items in a 3-column grid (Online Courses, Expert Teachers, Community — same icon/title/blurb pattern as About).
7. **Contact CTA** — full-width parallax background with gradient overlay; centered heading "Contact Us" + lead paragraph + pill "Contact Us Now" CTA button.
8. **Footer** — dark background (#374050); top row: logo (left) + nav links (right); bottom row: copyright text (left) + social media icon circles (right: Facebook, Twitter, Google+, Instagram, YouTube, LinkedIn).

## Requirements

### Feature: Navbar

#### Scenario: Desktop navbar renders all links

- **GIVEN** the page loads on a desktop viewport
- **THEN** the navbar displays the logo
- **AND** the navbar shows links: Home, About, Courses, Blog, Contact

#### Scenario: Navbar is transparent over hero

- **GIVEN** the hero section is in view
- **THEN** the navbar background is transparent

#### Scenario: Mobile hamburger toggle

- **GIVEN** the page loads on a mobile viewport
- **THEN** a hamburger toggle button is visible
- **WHEN** the user taps the toggle
- **THEN** the mobile nav menu expands

### Feature: Hero Section

#### Scenario: Hero displays heading and CTA

- **GIVEN** the hero section is visible
- **THEN** the heading reads "Edusite Free Online Training Courses" (or equivalent)
- **AND** a lead paragraph is displayed below the heading
- **AND** a pill-shaped "Get Started!" button is visible

#### Scenario: Hero has parallax background with overlay

- **GIVEN** the hero section is visible
- **THEN** a background image is displayed with a gradient overlay (dark-to-light)

### Feature: About Section

#### Scenario: About section shows 3 features

- **GIVEN** the about section is visible
- **THEN** 3 feature items are displayed: Online Courses, Expert Teachers, Community
- **AND** each feature has an icon, title, and description paragraph

#### Scenario: About section has image on the right

- **GIVEN** the about section is visible
- **THEN** a decorative image is displayed in the right column

### Feature: Courses Section

#### Scenario: Courses grid shows 8 course cards

- **GIVEN** the courses section is visible
- **THEN** 8 course cards are displayed in a 4-column grid
- **AND** each card shows: image thumbnail, title, category label, price badge

#### Scenario: Course price badge variants

- **GIVEN** a course card is rendered
- **THEN** the price badge shows "Free" or "Premium"
- **AND** "Free" badges use the primary accent color

#### Scenario: More Courses button

- **GIVEN** the courses section is visible
- **THEN** a centered "More Courses" button is displayed below the grid

### Feature: Call to Action Section

#### Scenario: CTA section displays heading and button

- **GIVEN** the CTA section is visible
- **THEN** a heading and lead paragraph are displayed
- **AND** a pill-shaped "Get Started!" button is visible
- **AND** the section has a parallax background with gradient overlay

### Feature: Why Us Section

#### Scenario: Why Us shows 3 feature cards

- **GIVEN** the Why Us section is visible
- **THEN** 3 feature items are displayed in a 3-column grid
- **AND** each feature has an icon, title, and description

### Feature: Contact CTA Section

#### Scenario: Contact CTA displays centered content

- **GIVEN** the Contact CTA section is visible
- **THEN** "Contact Us" heading is displayed centered
- **AND** a lead paragraph is shown
- **AND** a pill-shaped "Contact Us Now" button is visible
- **AND** the section has a parallax background with gradient overlay

### Feature: Footer

#### Scenario: Footer displays logo and nav

- **GIVEN** the footer is visible
- **THEN** the logo is displayed on the left
- **AND** nav links (Home, About, Courses, Blog, Contact) are on the right

#### Scenario: Footer has social icons and copyright

- **GIVEN** the footer is visible
- **THEN** social media icon circles are displayed (Facebook, Twitter, Instagram, YouTube, LinkedIn)
- **AND** a copyright notice is shown
- **AND** the footer links to https://www.componentdock.com/ ("Component Dock")

### Feature: Responsive Design

#### Scenario: Mobile layout stacks columns

- **GIVEN** the page loads on a mobile viewport (< 768px)
- **THEN** the navbar collapses to a hamburger menu
- **AND** the about section stacks the features above the image
- **AND** the courses grid becomes 1-column
- **AND** the Why Us features stack vertically

## Verification checklist

- [ ] All 8 sections rendered in correct order
- [ ] Navbar transparent over hero, links functional
- [ ] Hero parallax background with gradient overlay
- [ ] About: 3 features with icons + image
- [ ] Courses: 8 cards, 4-col grid, Free/Premium badges
- [ ] CTA: parallax background + pill button
- [ ] Why Us: 3 features in 3-col grid
- [ | Contact CTA: centered content + parallax
- [ ] Footer: logo, nav, social icons, copyright, Component Dock link
- [ ] Responsive: hamburger, stacked columns on mobile
- [ ] Design tokens match: #FF6700 primary, #374050 dark, #798696 body, Montserrat + Lato fonts, pill buttons
- [ ] No ColorLib references in app code
- [ ] Tests at 100% coverage
- [ ] CNAME + homepage configured
