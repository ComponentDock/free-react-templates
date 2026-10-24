# Template: BugGuard (Pest Control Service)

## Purpose

Recreation of the ColorLib "Pestcontrol" template
(https://colorlib.com/wp/template/pestcontrol/) as a single-page React
application. Live preview analyzed:
https://preview.colorlib.com/theme/pestcontrol/

**Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)

## Requirements

### Requirement: Header navigation and contact bar

The template SHALL display a top bar with address, hours, phone, and social icons, and a main navigation bar with logo, links, and Appointment CTA.

#### Scenario: Top bar displays contact info

- **WHEN** the page loads
- **THEN** the header top bar shows the address "450 Strand, Charing Cross"
- **AND** the header top bar shows hours "08:00 - 19:00"
- **AND** the header top bar shows phone "(+800) 1234 56781"
- **AND** social icons (Facebook, Twitter, Instagram, LinkedIn) are visible

#### Scenario: Main navigation links

- **WHEN** the page loads
- **THEN** the navbar contains links: Home, Services, About, Pages, Blog, Contact
- **AND** an "Appointment" pill button is visible

### Requirement: Hero section with background image

The template SHALL display a full-width hero with background image, dark overlay, subtitle, heading, tagline, and CTA button.

#### Scenario: Hero displays headline and CTA

- **WHEN** the page loads
- **THEN** the hero section shows subtitle "Pest Control"
- **AND** the hero section shows heading "Keep your House clean & Safe"
- **AND** the hero section shows tagline "Trusted. Experienced. Dedicated."
- **AND** a "Learn More" pill button is visible

### Requirement: About section with image gallery

The template SHALL display a two-column about section with heading, description, info sub-items, CTA button, and image gallery.

#### Scenario: About displays welcome text and info items

- **WHEN** the page loads
- **THEN** the about section shows heading "Welcome to the Pest Control Services Company"
- **AND** two info sub-items are displayed: "How Does It Work?" and "Services We Offer"
- **AND** an "About Us" pill button is visible
- **AND** the about section shows 3 images from picsum.photos

### Requirement: Services section with 8 pest control cards

The template SHALL display a 2x4 grid of 8 service cards, each with a circular icon, title, and description.

#### Scenario: Services grid displays 8 service cards

- **WHEN** the page loads
- **THEN** the services section heading is "Our Services"
- **AND** 8 service cards are displayed in a grid
- **AND** each card has a circular icon, title, and description
- **AND** the service titles are: Cockroaches, Ants, Rodents, Scorpion, Silver Fish, Millipedes, Spiders, Centipede

### Requirement: Choose Us section with features

The template SHALL display a three-column layout with heading, description, CTA, image, and 3 feature items.

#### Scenario: Choose Us displays features

- **WHEN** the page loads
- **THEN** the section heading is "Why People Choose Pest Control"
- **AND** a description paragraph is shown
- **AND** a "Read More" pill button is visible
- **AND** 3 feature items are displayed: Comfortable Price, Safe And Clean, Friendly Customer Service

### Requirement: Counter statistics bar

The template SHALL display a full-width blue background bar with 4 stat columns.

#### Scenario: Counter displays 4 stats

- **WHEN** the page loads
- **THEN** the counter section has a blue background
- **AND** 4 stat items are displayed: "50+" Years Of Experience, "1254+" Satisfied Clients, "2000+" Happy Customers, "42+" Awards & Certificates

### Requirement: Testimonials section

The template SHALL display a heading, rating widget, and testimonial quotes.

#### Scenario: Testimonials displays heading and rating

- **WHEN** the page loads
- **THEN** the section heading is "Testimonials"
- **AND** a rating widget shows "4.7" with star icons
- **AND** "3000 Rating" text is displayed
- **AND** at least 3 testimonial quotes are displayed with author names

### Requirement: Latest Blog section

The template SHALL display a 2-column blog layout with 1 featured post and 3 smaller posts.

#### Scenario: Blog displays posts

- **WHEN** the page loads
- **THEN** the section heading is "Latest Blog Post"
- **AND** 1 large featured post is shown on the left
- **AND** 3 smaller list posts are shown on the right
- **AND** each post has an image, date, title, and excerpt

### Requirement: Footer with 4 columns and Component Dock link

The template SHALL display a dark footer with 4 columns, copyright bar, and link to Component Dock.

#### Scenario: Footer displays 4 columns

- **WHEN** the page loads
- **THEN** the footer has a dark background
- **AND** column 1 shows logo, description, phone, and "Request An Appointment" button
- **AND** column 2 shows "Useful Links" with 5 navigation links
- **AND** column 3 shows "Our Services" with 5 service links
- **AND** column 4 shows "Contact Us" with address, fax, email, hours

#### Scenario: Footer copyright and social links

- **WHEN** the page loads
- **THEN** a copyright bar is displayed at the bottom
- **AND** social icon links (Facebook, Twitter, LinkedIn, RSS) are visible
- **AND** the footer links to Component Dock (https://www.componentdock.com/)

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/bugguard/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/bugguard/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Design tokens

| Token            | Value                   | Usage                                    |
| ---------------- | ----------------------- | ---------------------------------------- |
| Brand primary    | `#d7553b` (orange-red)  | Buttons, accents, date highlights, links |
| Brand secondary  | `#1c6ab8` (medium blue) | Counter section background               |
| Text heading     | `#0d0d0d` (near-black)  | h2–h6, strong text                       |
| Text body        | `#111111` (dark gray)   | Paragraph text                           |
| Text muted       | `#4e4e4e` (medium gray) | Secondary/descriptive copy               |
| Background white | `#ffffff`               | Cards, body, service items               |
| Background light | `#f2f4f5` (off-white)   | Alternate section bg                     |
| Background dark  | `#222222`               | Footer                                   |
| Font family      | `"Lato", sans-serif`    | Global body + headings (300/400/700/900) |
| Button radius    | `60px` (pill)           | Pill shape buttons                       |

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Header navigation and contact bar — the header top bar shows the address "450 Strand, Charing Cross"
- [x] Hero section with background image — the hero section shows subtitle "Pest Control"
- [x] About section with image gallery — the about section shows heading "Welcome to the Pest Control Services Company"
- [x] Services section with 8 pest control cards — the services section heading is "Our Services"
- [x] Choose Us section with features — the section heading is "Why People Choose Pest Control"
- [ ] Counter statistics bar — the counter section has a blue background
- [x] Testimonials section — the section heading is "Testimonials"
- [x] Latest Blog section — the section heading is "Latest Blog Post"
