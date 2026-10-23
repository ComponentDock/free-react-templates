# Template: Bumble (Construction Company)

## Purpose

Recreation of the ColorLib "Bee" template as a construction company landing page.

- **Source template:** [Bee](https://colorlib.com/wp/template/bee/)
- **Live preview:** https://preview.colorlib.com/theme/bee/
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/bee-free-template.jpg` (AVIF on server; visual analysis based on live preview DOM + CSS)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `bumble` (apps/bumble, package `@free-react-templates/bumble`)

## Design Tokens

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary (amber) | `#fda729` | CTA buttons, accents, quote-form header bar |
| Bootstrap primary | `#007bff` | Secondary buttons, link hovers |
| Dark | `#343a40` | Navbar background, footer background |
| Body text | `#000000` | Headings, body copy |
| Muted text | `#6c757d` | Secondary text, meta info |
| Light background | `#f8f9fa` | Alternating section backgrounds (`bg-light`) |
| White | `#ffffff` | Default section backgrounds |
| Footer dark | Bootstrap `.ftco-bg-dark` (~`#212529`) | Footer background |

### Typography

| Element | Font | Weight |
|---------|------|--------|
| Headings | "Poppins", Arial, sans-serif | 700 |
| Body | "Nunito Sans", Arial, sans-serif | 400 |
| Accent / subheadings | "Poppins", Arial, sans-serif | 400 |

### Button / CTA

- Primary CTA: `bg-primary` mapped to `#fda729`, white text, `border-radius: 50px` (pill shape)
- Padding: generous (`px-4 py-3` on CTA)
- Hover: darken slightly

### Section Backgrounds

- Hero slider: parallax background images with dark overlay
- Intro CTA: parallax background image with dark overlay
- Counter: parallax background image with dark overlay
- Services, About, Team, Projects, Testimonials, Blog: white (`#ffffff`)
- Blog section: light gray (`bg-light` / `#f8f9fa`)
- Footer: dark (`ftco-bg-dark` / `#212529`)

### Spacing / Layout

- Max container width: Bootstrap default (1140px)
- Section padding: `5em 0` (standard ftco-section)
- Grid: Bootstrap 12-column, responsive (col-md-3/4/6/8)
- Counter section: 4-column stat grid
- Team: 4-column grid (col-lg-3)
- Projects: masonry-style grid (mixed col sizes)

## Section Order (1:1 fidelity with source)

1. **Top Info Bar** — Contact info strip (phone, email, hours) above navbar; 3 columns with icons
2. **Navbar** — Dark background (`bg-dark`), logo "Bumble" with flaticon-bee icon, nav links (Home, About, Services, Projects, Blog, Contact), search form
3. **Hero Slider** — Owl-carousel-style slider with 2 slides; parallax background images; text overlay with heading + subtext on right half (`col-md-6`)
4. **About + Quote Form** — Left side: heading "We Are Highly Recommendable Construction Firm" + body text; Right side: "Request A Quote" form (bg-primary/amber header, form fields, submit button)
5. **Services Grid** — 4-column cards (Construction, House Renovation, Painting, Architecture Design); each with icon + title + description
6. **Intro CTA** — Full-width parallax section; "Let's Build Your Dream Together" heading + CTA button
7. **Team** — 4 team member cards (Daren Wilson, Warren Parker, Eva Gustavo, Mike Henderson); photo + name + title + social icons
8. **Projects Gallery** — 2-column masonry grid of 8 project images with hover overlay
9. **Counter Stats** — Parallax background; 4 stats (30 Years Experienced, 1500 Projects Successful, 100 Professional Expert, 300 Happy Customers)
10. **Services Detail** — "Experience Great Services" section; 3 items (Expert & Professional, High Quality Work, 24/7 Help Support) with icons
11. **Blog** — 3-column blog cards; each with image, date overlay, title, excerpt, "Read More" button
12. **Footer** — Dark background; 4 columns: logo + social, Services links, Recent Blog posts, Newsletter signup form; copyright bar

## Requirements

### Feature: Bumble Construction Template

#### Scenario: Top Info Bar renders contact details

- **GIVEN** the user loads the page
- **THEN** the top bar displays phone number, email address, and business hours
- **AND** each item has an icon beside it

#### Scenario: Navbar navigation

- **GIVEN** the user loads the page
- **THEN** a dark navbar displays with the logo "Bumble"
- **AND** navigation links include Home, About, Services, Projects, Blog, Contact
- **AND** a search form is present

#### Scenario: Hero slider displays construction imagery

- **GIVEN** the user loads the page
- **THEN** a hero slider shows parallax background images
- **AND** each slide has a heading and subtext overlay
- **AND** the text is positioned on the right half of the slide

#### Scenario: About section with quote form

- **GIVEN** the user scrolls to the about section
- **THEN** a heading reads "We Are Highly Recommendable Construction Firm"
- **AND** body text describes the company
- **AND** a "Request A Quote" form appears on the right with amber header
- **AND** the form contains input fields and a submit button

#### Scenario: Services grid shows 4 service types

- **GIVEN** the user scrolls to the services section
- **THEN** 4 service cards are displayed in a row
- **AND** each card has an icon, heading, and description
- **AND** the services are Construction, House Renovation, Painting, Architecture Design

#### Scenario: Intro CTA parallax section

- **GIVEN** the user scrolls past services
- **THEN** a full-width parallax section displays "Let's Build Your Dream Together"
- **AND** a primary CTA button reads "Know more about us"

#### Scenario: Team section shows 4 members

- **GIVEN** the user scrolls to the team section
- **THEN** 4 team member cards are displayed
- **AND** each card has a photo, name, title, and social media icons

#### Scenario: Projects gallery grid

- **GIVEN** the user scrolls to the projects section
- **THEN** a masonry-style grid of project images is displayed
- **AND** hovering over a project shows an overlay effect

#### Scenario: Counter stats section

- **GIVEN** the user scrolls to the counter section
- **THEN** 4 statistics are displayed: Years Experienced, Projects Successful, Professional Expert, Happy Customers
- **AND** each stat has an animated number counter
- **AND** the section has a parallax background image

#### Scenario: Services detail section

- **GIVEN** the user scrolls to the services detail section
- **THEN** the heading reads "Experience Great Services"
- **AND** 3 service items are shown: Expert & Professional, High Quality Work, 24/7 Help Support
- **AND** each has an icon and description

#### Scenario: Blog section

- **GIVEN** the user scrolls to the blog section
- **THEN** 3 blog post cards are displayed in a row
- **AND** each card has an image, date overlay, title, excerpt, and "Read More" button

#### Scenario: Footer layout

- **GIVEN** the user scrolls to the footer
- **THEN** the footer has a dark background
- **AND** it contains 4 columns: logo + social icons, services links, recent blog posts, newsletter signup
- **AND** the newsletter has an email input and subscribe button
- **AND** the copyright line links to Component Dock

#### Scenario: Responsive layout

- **GIVEN** the user views on mobile
- **THEN** the navbar collapses to a hamburger menu
- **AND** the 4-column grids stack to single column
- **AND** the hero slider text remains readable

## Verification checklist

- [ ] Top info bar renders with 3 contact items + icons
- [ ] Dark navbar with logo, nav links, and search form
- [ ] Hero slider with 2 parallax slides and text overlays
- [ ] About section with heading + quote form (amber header)
- [ ] 4-column services grid with icons
- [ ] Parallax intro CTA section
- [ ] 4 team member cards with photos + social icons
- [ ] Projects masonry grid with hover effects
- [ ] Counter stats with animated numbers + parallax bg
- [ ] 3-column services detail section
- [ ] 3-column blog cards with date overlay
- [ ] Dark footer with 4 columns + newsletter + copyright
- [ ] Brand color `#fda729` used consistently for CTAs
- [ ] Poppins font for headings, Nunito Sans for body
- [ ] Pill-shaped buttons (border-radius: 50px)
- [ ] Parallax backgrounds on hero, intro, counter sections
- [ ] Responsive: mobile hamburger, stacking grids
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
