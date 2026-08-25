# Template: Stately (Business Agency Landing)

## Purpose

Stately is a single-page business/agency template — a faithful React recreation
of the ColorLib free "Stodeo" template
(preview: https://preview.colorlib.com/theme/stodeo/ — business/agency landing),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Source mapping:

- ColorLib slug: `stodeo`
- Preview URL: https://preview.colorlib.com/theme/stodeo/
- TEMPLATES.md entry: `- [ ] **Stodeo**`

Design tokens captured from the original (see docs/replication.md):

- Brand primary `#3369e7` (buttons, links)
- Dark accent `#133ea1` (welcome box background)
- Highlight/counter `#00aaff` (counter numbers, outline button borders)
- Body text `#222` (dark), muted `#777` / `#888`
- Footer background `#efefef`
- Typeface: "Noto Sans JP", sans-serif (loaded via Cloudflare in original;
  use Google Fonts `<link>` in the recreation)
- Buttons: primary = pill-shaped (border-radius 30px), `#3369e7` background,
  white text; outline variants = transparent with `#00aaff` border
- Section padding: 7rem top/bottom
- Social icons: 30px round circles, `#777` background, white icons
- AOS fade-up / fade-right animations on sections

Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons.

Stately lives in `apps/stately` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navbar with the site name "Stately", desktop nav
links (Home, Why Stately [dropdown with Menu One, Menu Two, Dropdown > Sub
Menu One/Two/Three], Our Services, Gallery, About, Contact Us), and a hamburger
toggle that opens a mobile menu on small screens.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed on a desktop viewport
- **THEN** it SHALL show the site name "Stately" linking to `#`
- **AND** it SHALL show links to Home, Why Stately, Our Services, Gallery,
  About, and Contact Us
- **AND** "Why Stately" SHALL have a dropdown with sub-items

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on a mobile viewport
- **WHEN** the user presses the hamburger toggle
- **THEN** the mobile menu SHALL become visible
- **AND** pressing the toggle again SHALL hide the menu
- **AND** clicking a mobile link SHALL close the menu

### Requirement: Hero section

The system SHALL render a centered hero with a subheading "Welcome To Our Site",
a heading "We have the best solution for your business to grow.", a supporting
paragraph, and a "Get started" primary button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the subheading "Welcome To Our Site" in uppercase
- **AND** it SHALL show the heading "We have the best solution for your business
  to grow."
- **AND** it SHALL show a paragraph of descriptive text
- **AND** it SHALL show a "Get started" primary pill button

### Requirement: Welcome section

The system SHALL render a split welcome section with an image on the left and a
dark blue (#133ea1) box on the right containing descriptive text and an
"About us" outline button.

#### Scenario: Welcome layout

- **GIVEN** the page is rendered
- **WHEN** the welcome section is displayed
- **THEN** it SHALL show a large image on the left side
- **AND** it SHALL show a dark blue box on the right with a paragraph and an
  "About us" outline button with arrow icon

### Requirement: Why Choose Us section

The system SHALL render a "Why Choose Us" section with a left sidebar containing
counters (years of experience, team members), a "Why Stately" button, and a
right content area with a heading, paragraph, and 4 feature cards in a row.

#### Scenario: Why Choose Us layout

- **GIVEN** the page is rendered
- **WHEN** the why-choose-us section is displayed
- **THEN** it SHALL show a sidebar with counter numbers and labels
- **AND** it SHALL show a "Why Stately" outline button
- **AND** it SHALL show the heading "Why Stately?" and a descriptive paragraph
- **AND** it SHALL show 4 feature cards: Web Design, Web Development,
  Branding & Identity, Graphic Design — each with an icon, title, and arrow

#### Scenario: Feature card hover

- **GIVEN** the page is rendered
- **WHEN** the user hovers over a feature card
- **THEN** the card SHALL show a dark overlay background transition

### Requirement: Grow Your Business section

The system SHALL render a split section with an image on the left and a dark
background box on the right containing the heading "Grow your business", a
paragraph, and 2 service items with icons.

#### Scenario: Grow Your Business content

- **GIVEN** the page is rendered
- **WHEN** the grow-business section is displayed
- **THEN** it SHALL show a large image on the left
- **AND** it SHALL show a dark box on the right with heading "Grow your business"
  in white
- **AND** it SHALL show 2 service items (icon + title + description) in a
  2-column grid

### Requirement: Recent Blog Posts section

The system SHALL render a blog section with the heading "Recent Blog Posts" and
3 post-entry cards, each with a date, title, excerpt, and "Read more" link.

#### Scenario: Blog post cards

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the subheading "Our Blogs" and heading "Recent Blog Posts"
- **AND** it SHALL show 3 post-entry cards in a 3-column grid
- **AND** each card SHALL contain a date label, a linked title, a paragraph
  excerpt, and a "Read more" link

### Requirement: Why Us section

The system SHALL render a "Why Us" section with a left column containing the
heading "Why Are We Awesome?", a descriptive paragraph, and 4 service-v2 items
(icon + title) in a 2x2 grid, plus a right column with an image.

#### Scenario: Why Us content

- **GIVEN** the page is rendered
- **WHEN** the why-us section is displayed
- **THEN** it SHALL show the subheading "Why Us" and heading "Why Are We Awesome?"
- **AND** it SHALL show 4 service items: Photography, Find it here,
  Inspire Photography, Fly Your Dreams — each with an icon and title
- **AND** it SHALL show an image on the right side

### Requirement: Testimonials section

The system SHALL render a testimonials section with a centered heading
"Happy Clients" and a slider of testimonial cards, each with a portrait image,
blockquote quote, person name, and title.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the subheading "Testimonial" and heading "Happy Clients"
- **AND** it SHALL show testimonial cards with an avatar image, quote text,
  name (e.g. "Carl Anderson"), and title (e.g. "CEO, Co-Founder")
- **AND** the testimonials SHALL cycle or be navigable via a slider

### Requirement: Footer

The system SHALL render a footer with a light grey (#efefef) background containing
an "About Stately" widget with description, social icon links (Instagram, Twitter,
Facebook, LinkedIn, Pinterest, Dribbble), navigation links, services links, and
contact information (address, phone, email).

#### Scenario: Footer layout

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show "About Stately" heading with description
- **AND** it SHALL show social media icon links as round circles
- **AND** it SHALL show navigation links and services links
- **AND** it SHALL show contact info (address, phone, email)
- **AND** the footer MUST link to https://www.componentdock.com/

#### Scenario: Footer attribution

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL include a "Made with Component Dock" link to
  https://www.componentdock.com/
