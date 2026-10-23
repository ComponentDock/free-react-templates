# Template: Framecast (Personal)

## Purpose

A personal template with header navigation, hero, portfolio, services and blog sections. Recreation of ColorLib's "Portfolio 2" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page portfolio website for creative agencies and freelancers.

- **Source template:** Portfolio 2 — https://colorlib.com/wp/template/portfolio-2/
- **Live preview:** https://preview.colorlib.com/theme/portfolio2/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/portfolio2-free-template.jpg
- **Category:** Personal / Portfolio Website Template
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)

## Requirements

### Requirement: Header navigation renders all links

The header shows a "FRAMECAST" wordmark logo and navigation links.

#### Scenario: Header renders logo and nav links

- **WHEN** the user loads the page
- **THEN** the header displays "FRAMECAST" logo text
- **AND** the nav contains links: Home, About, Blog, Pages, Contact

### Requirement: Hero section displays headline and subtitle

The hero section has a dark navy background with a blue subtitle and large white heading.

#### Scenario: Hero section renders correctly

- **WHEN** the user loads the page
- **THEN** the hero section has a dark navy background
- **AND** displays "Welcome to Framecast" as a subtitle in blue
- **AND** displays the main heading about research capabilities in white

### Requirement: Portfolio grid shows project items with hover effects

A masonry-style grid with 9 project items and hover overlays.

#### Scenario: Portfolio grid renders project cards

- **WHEN** the user loads the page
- **THEN** the portfolio section displays 9 project image cards in a grid
- **AND** each card has a hover overlay showing category and project name
- **AND** a "More Works" link is visible below the grid

### Requirement: Services section shows three service cards

A services section with 3 service cards including icon, title, and description.

#### Scenario: Services section renders 3 cards

- **WHEN** the user loads the page
- **THEN** the services section displays 3 cards
- **AND** the cards are labeled "3D Modeling", "UI/UX Design", "Architectural Design"
- **AND** each card has an icon and description text

### Requirement: Blog section shows articles

A blog section with article cards.

#### Scenario: Blog section renders article cards

- **WHEN** the user loads the page
- **THEN** the blog section heading reads "Our Creative Articles"
- **AND** 4 blog post cards are visible
- **AND** each card shows an image, date, and title
- **AND** a "More Blogs" button is present

### Requirement: Testimonials section displays quotes

A testimonials section with quotes and navigation dots.

#### Scenario: Testimonials section renders quotes

- **WHEN** the user loads the page
- **THEN** the testimonials section shows a quote with author name and role
- **AND** navigation dots are present for the slider

### Requirement: CTA section encourages project discussion

A full-width blue CTA section with a "Start Talking" button.

#### Scenario: CTA section renders call-to-action

- **WHEN** the user loads the page
- **THEN** a blue full-width section displays a call-to-action
- **AND** a "Start Talking" button is visible

### Requirement: Footer shows site information

A dark footer with 4 columns, copyright, and Component Dock link.

#### Scenario: Footer renders with all columns

- **WHEN** the user loads the page
- **THEN** the footer has a dark background
- **AND** it contains 4 columns: logo/description, Services, Useful Links, Follow Us
- **AND** a copyright bar appears at the bottom
- **AND** the footer links to https://www.componentdock.com/

### Requirement: Responsive layout adapts to mobile

Mobile hamburger menu, stacked grid, stacked footer on small screens.

#### Scenario: Responsive layout on mobile

- **WHEN** the user loads the page on a 375px viewport
- **THEN** the nav collapses to a hamburger menu
- **AND** the portfolio grid stacks to single column
- **AND** services stack vertically
- **AND** the footer columns stack vertically

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/framecast/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/framecast/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Design Tokens

| Token            | Value                   | Usage                                                      |
| ---------------- | ----------------------- | ---------------------------------------------------------- |
| `--brand`        | `#0181F5`               | Primary blue — buttons, links, CTA accents, hero subtitle  |
| `--dark`         | `#040E27`               | Very dark navy — hero/banner background, footer background |
| `--light-bg`     | `#f9f9ff`               | Off-white/light lavender — section alternating background  |
| `--text`         | `#26282b`               | Body text color                                            |
| `--text-muted`   | `#596672`               | Secondary text, copyright                                  |
| `--white`        | `#ffffff`               | Card backgrounds, button text on hover                     |
| `--heading-font` | `"Poppins", sans-serif` | Headings                                                   |
| `--body-font`    | `"Roboto", sans-serif`  | Body text                                                  |
| `--btn-font`     | `"Alata", sans-serif`   | Button labels                                              |
| Button radius    | `3px`                   | Subtle rounded corners on buttons                          |
| Card radius      | `0`                     | Sharp rectangular portfolio items                          |

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Header navigation renders all links — the header displays "FRAMECAST" logo text
- [ ] Hero section displays headline and subtitle — the hero section has a dark navy background
- [ ] Portfolio grid shows project items with hover effects — the portfolio section displays 9 project image cards in a grid
- [ ] Services section shows three service cards — the services section displays 3 cards
- [ ] Blog section shows articles — the blog section heading reads "Our Creative Articles"
- [ ] Testimonials section displays quotes — the testimonials section shows a quote with author name and role
- [ ] CTA section encourages project discussion — a blue full-width section displays a call-to-action
- [ ] Responsive layout adapts to mobile — the nav collapses to a hamburger menu
