# Template: Weft (Creative Agency / Portfolio)

## Purpose

Weft is a CREATIVE AGENCY / PORTFOLIO template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Cocoon" free
template (source: https://colorlib.com/wp/template/cocoon/), built under a
DIFFERENT name (**Weft**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

- **Source slug:** `cocoon`
- **Source URL:** https://colorlib.com/wp/template/cocoon/
- **Preview URL:** https://preview.colorlib.com/theme/cocoon/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/cocoon-free-template.jpg
- **New name:** `weft` (apps/weft, @free-react-templates/weft)
- **Deploy target:** https://weft.free.componentdock.com
- **Category:** Creative Agency / Portfolio
- **Description (from ColorLib):** "Cocoon is a free creative agency website
  template with a one-of-a-kind look. If you would genuinely like to appear
  in the online space in a way distancing yourself from the average, you came
  to the right place."

## Design Tokens

Extracted from the live preview stylesheet
(`https://preview.colorlib.com/theme/cocoon/assets/css/main.css`).

### Colors

| Token                    | Value              | Usage                                      |
| ------------------------ | ------------------ | ------------------------------------------ |
| `--color-sidebar`        | `#18181c`          | Side menu background (dark charcoal)       |
| `--color-accent`         | `#99896e`          | Accent/brand color (warm taupe/gold-brown) |
| `--color-text`           | `#9c9ca9`          | Body text (muted gray)                     |
| `--color-heading`        | `#18181c`          | Heading text (near-black)                  |
| `--color-bg`             | `#ffffff`          | Main content background (white)            |
| `--color-bg-loader`      | `#f7f7f7`          | Preloader background                       |
| `--color-btn-default`    | `#18181c`          | Default button bg (dark)                   |
| `--color-btn-primary`    | `#99896e`          | Primary button bg (taupe)                  |
| `--color-white`          | `#ffffff`          | Button text, nav text on dark              |
| `--color-overlay`        | `rgba(0,0,0,0.1)`  | Button hover shadow                        |

### Fonts

| Font     | Family                                | Usage                           |
| -------- | ------------------------------------- | ------------------------------- |
| All text | `'Montserrat', sans-serif`            | Everything (300, 300i, 400, 500)|

**Font weights used:** 300 (body, paragraphs), 400 (headings h3-h5, links),
500 (section titles, filter labels, copyright).

### Button Shape

- **Default:** square (`border-radius: 0`), dark bg `#18181c`, white text,
  `padding: 15px 50px`, `letter-spacing: 1px`, `text-transform: capitalize`.
  Hover: white bg, dark text.
- **Primary:** `#99896e` bg, white text, `border: 1px solid #99896e`.
  Hover: `#18181c` bg, white text.
- **Primary outline:** transparent bg, `#99896e` border and text.
  Hover: `#99896e` bg, white text.
- **Rounded variant:** `border-radius: 50px` (applicable to any button style).

### Section Title Accent

- Section titles (`h4`) have a `::after` pseudo-element:
  `height: 2px; width: 30px; background-color: #99896e;` positioned
  `absolute; left: 2px; bottom: -10px`.

## Section Structure (DOM order)

This template uses a **unique two-column layout**: a FIXED dark sidebar on the
left with navigation and filters, and a scrollable content area on the right.

### Left Sidebar (fixed, ~16.67% width on desktop)

1. **Logo** — Centered "Weft" text/logo at top of sidebar
2. **Main Navigation** — Vertical menu: Home, About Us, Services, Portfolio,
   Blog, Contact. Active item has `#99896e` background. Hover also shows
   `#99896e` bg.
3. **Filter Menu** — "Filter By:" label (`#99896e` text) followed by filter
   items: All, Branding, Design, Photography, Architecture. Active item has
   `#99896e` bg. Controls the portfolio grid via Isotope.js filtering.
4. **Social Icons** — Instagram, Facebook, Twitter, Pinterest icons in
   `#99896e`, centered, at bottom of sidebar area.
5. **Copyright** — "Copyright ©2018 All rights reserved | This template is
   made with ♡ by Colorlib" → replace with Component Dock credit.

### Right Content Area (scrollable)

6. **Portfolio Grid (Home)** — Masonry-style grid of project images. Images
   have varying sizes (some tall, some wide). Hover shows overlay with
   project details. Uses Isotope.js for layout and filtering. Categories
   match the filter menu items.

**Note from original HTML:** The template is multi-page (index.html,
about.html, services.html, portfolio.html, blog.html, contact.html).
For the React recreation, all sections should be combined into a single
SPA with smooth-scroll navigation. The implementer should create sections
for: About, Services, Portfolio, Blog, Contact — all accessible via the
sidebar nav.

7. **About Section** — Content about the agency, with images and text.
8. **Services Section** — Service offerings with icons/descriptions.
9. **Portfolio Section** — Extended portfolio gallery (may overlap with #6).
10. **Blog Section** — Blog post previews with images, titles, excerpts.
11. **Contact Section** — Contact form + info.
12. **Footer/Copyright** — Component Dock credit.

### Mobile Behavior

- On screens ≤768px, the sidebar collapses to a fixed left position with
  `margin-left: -250px` (hidden off-screen).
- A floating hamburger button (`.menu-btn`) appears at bottom-right:
  60×60px circle, white bg, `#99896e` icon, with shadow. Tapping toggles
  the sidebar open/closed via `.sidebar_closed` class on body.
- Sidebar slides in from the left with `transition: all 0.4s ease-in-out`.

## Requirements

### Requirement: Side navigation

The system SHALL render a fixed dark sidebar on the left with the brand name,
navigation links, portfolio filter controls, social icons, and copyright.

#### Scenario: Sidebar content

- **GIVEN** the page is loaded
- **WHEN** the sidebar is displayed
- **THEN** it SHALL show the brand name "Weft" at the top
- **AND** it SHALL show navigation links: Home, About Us, Services, Portfolio,
  Blog, Contact
- **AND** the active link SHALL have a `#99896e` background
- **AND** hover on any link SHALL show `#99896e` background

#### Scenario: Sidebar filters

- **GIVEN** the sidebar is displayed
- **WHEN** the filter section is visible
- **THEN** it SHALL show a "Filter By:" label in `#99896e`
- **AND** it SHALL show filter options: All, Branding, Design, Photography,
  Architecture
- **AND** the "All" filter SHALL be active by default
- **AND** clicking a filter SHALL update the portfolio grid

#### Scenario: Sidebar social icons

- **GIVEN** the sidebar is displayed
- **WHEN** the social section is visible
- **THEN** it SHALL show social media icons (Instagram, Facebook, Twitter,
  Pinterest) in `#99896e`
- **AND** hovering a social icon SHALL change its color to white

#### Scenario: Sidebar mobile toggle

- **GIVEN** the viewport is ≤768px wide
- **WHEN** the page is loaded
- **THEN** the sidebar SHALL be hidden off-screen (margin-left: -250px)
- **AND** a floating hamburger button SHALL appear at bottom-right
- **AND** tapping the hamburger SHALL slide the sidebar into view
- **AND** tapping again SHALL hide it

### Requirement: Portfolio grid

The system SHALL render a masonry-style portfolio grid in the main content area
with filterable project images.

#### Scenario: Portfolio items

- **GIVEN** the page is loaded
- **WHEN** the portfolio grid is displayed
- **THEN** it SHALL show multiple project images in a masonry layout
- **AND** images SHALL have varying sizes (some tall, some wide)
- **AND** each image SHALL have a category tag matching a filter option

#### Scenario: Portfolio filtering

- **GIVEN** the portfolio grid is displayed with "All" filter active
- **WHEN** the user clicks "Branding" in the sidebar filter
- **THEN** only branding-tagged items SHALL be visible
- **AND** non-matching items SHALL be hidden with a smooth transition

#### Scenario: Portfolio hover

- **GIVEN** a portfolio image is displayed
- **WHEN** the user hovers over the image
- **THEN** an overlay SHALL appear with project details (title, category)

### Requirement: About section

The system SHALL render an about section with agency description content.

#### Scenario: About content

- **GIVEN** the page is loaded
- **WHEN** the about section is displayed
- **THEN** it SHALL show a heading with the section title accent underline
  (2px `#99896e` line below heading)
- **AND** it SHALL show descriptive text about the agency
- **AND** it SHALL include relevant imagery

### Requirement: Services section

The system SHALL render a services section with service offerings.

#### Scenario: Services content

- **GIVEN** the page is loaded
- **WHEN** the services section is displayed
- **THEN** it SHALL show service items with icons, titles, and descriptions
- **AND** the section heading SHALL have the `#99896e` accent underline

### Requirement: Blog section

The system SHALL render a blog section with post previews.

#### Scenario: Blog posts

- **GIVEN** the page is loaded
- **WHEN** the blog section is displayed
- **THEN** it SHALL show blog post cards with images, titles, and excerpts
- **AND** each post SHALL have a date or metadata

### Requirement: Contact section

The system SHALL render a contact section with a form.

#### Scenario: Contact form

- **GIVEN** the page is loaded
- **WHEN** the contact section is displayed
- **THEN** it SHALL show a form with name, email, subject, and message fields
- **AND** it SHALL show a submit button with the primary style (`#99896e` bg)
- **AND** it SHALL show contact information

### Requirement: Copyright / Footer

The system SHALL render a copyright line in the sidebar with Component Dock
attribution.

#### Scenario: Copyright content

- **GIVEN** the sidebar is displayed
- **WHEN** the copyright area is visible
- **THEN** it SHALL show credit text linking to https://www.componentdock.com/
- **AND** it SHALL NOT reference ColorLib or the original template source

### Requirement: Design token fidelity

The system SHALL use the exact design tokens from the original template.

#### Scenario: Color consistency

- **GIVEN** any element is rendered
- **WHEN** the user views the page
- **THEN** the sidebar background SHALL be `#18181c`
- **AND** the accent color SHALL be `#99896e`
- **AND** body text SHALL be `#9c9ca9`
- **AND** headings SHALL be `#18181c`
- **AND** the main content background SHALL be `#ffffff`

#### Scenario: Typography

- **GIVEN** any text is rendered
- **WHEN** the user views the page
- **THEN** all text SHALL use the Montserrat font family
- **AND** body text SHALL use weight 300
- **AND** headings SHALL use weight 400
- **AND** section titles and labels SHALL use weight 500

#### Scenario: Button styles

- **GIVEN** a button is rendered
- **WHEN** the user views the button
- **THEN** default buttons SHALL be square with `#18181c` bg and white text
- **AND** primary buttons SHALL have `#99896e` bg
- **AND** button padding SHALL be `15px 50px`
- **AND** letter-spacing SHALL be `1px`

## Verification Checklist

- [ ] Sidebar renders with dark `#18181c` background
- [ ] Sidebar shows "Weft" brand name
- [ ] Sidebar nav links: Home, About Us, Services, Portfolio, Blog, Contact
- [ ] Active nav link has `#99896e` background
- [ ] Filter menu shows "Filter By:" with All, Branding, Design, Photography, Architecture
- [ ] Filter controls the portfolio grid (Isotope-style filtering)
- [ ] Social icons render in `#99896e` with hover to white
- [ ] Copyright links to https://www.componentdock.com/
- [ ] Portfolio grid shows masonry layout with varying image sizes
- [ ] Portfolio items have category tags for filtering
- [ ] Portfolio hover shows overlay with details
- [ ] About section has heading with `#99896e` accent underline
- [ ] Services section renders service items
- [ ] Blog section shows post previews
- [ ] Contact section has form with fields
- [ ] All text uses Montserrat font family
- [ ] Mobile: sidebar collapses, hamburger button appears
- [ ] Mobile: hamburger toggles sidebar slide-in
- [ ] No ColorLib references in app code
- [ ] All design tokens match the reference exactly
- [ ] Placeholder images use picsum.photos/seed/weft-*/w/h pattern
