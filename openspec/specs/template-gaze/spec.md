# Spec: Gaze — Photography Gallery Template

## Purpose

Recreate the ColorLib "The Look" photography gallery template as a React 19 + Tailwind CSS 4 + TypeScript app named "Gaze". The template features a hero image slider, two-column portfolio gallery, blog section, and contact form footer.

**Source:** https://colorlib.com/wp/template/thelook/
**Preview:** https://preview.colorlib.com/theme/thelook/

## Design Tokens

- **Font:** Lato (Google Fonts), weights 300/400/700
- **Brand color:** #081624 (dark navy) — header, footer, buttons, headings
- **Secondary text:** #5c5c5c
- **Light text on dark:** #c1c1c1, #fff
- **Button style:** pill-shaped (border-radius: 60px), transparent with border, dark text on light bg; white on dark bg
- **Section backgrounds:** white (body), dark (#081624) footer, dark overlays on hero images

## Requirements

### Requirement: Navbar

The template SHALL render a sticky navigation bar with logo and links.

#### Scenario: Renders logo and navigation links

- **WHEN** the page loads
- **THEN** the navbar displays the "Gaze" logo
- **AND** displays 6 navigation links: Home, Gallery, Artists, Shop, News, Contact
- **AND** each link has the correct href anchor (#home, #gallery, #artists, #shop, #news, #contact)

### Requirement: Hero Section

The template SHALL render a full-width hero section with background image, overlay, heading, subtitle, and call-to-action button.

#### Scenario: Renders hero content

- **WHEN** the page loads
- **THEN** the hero displays the heading "Gaze Gallery"
- **AND** displays the subtitle "Photography Showcase"
- **AND** displays a "Read More" button linking to the gallery section

### Requirement: Gallery Section

The template SHALL render a two-column gallery section with a photography quote, 6 gallery items, and a "See All Galleries" call-to-action.

#### Scenario: Renders gallery items

- **WHEN** the page loads
- **THEN** the gallery displays a quote about photography
- **AND** displays 6 gallery items (3 left column, 3 right column)
- **AND** each gallery item has an image, title, artist name, and "View Gallery" button
- **AND** displays a "See All Galleries" button

### Requirement: Blog Section

The template SHALL render a blog section with the latest posts.

#### Scenario: Renders blog posts

- **WHEN** the page loads
- **THEN** the blog section displays the heading "Latest from the Blog"
- **AND** displays 2 blog posts with thumbnail, category, title, date, excerpt, and "Read More" button

### Requirement: Footer

The template SHALL render a dark footer with contact form and Component Dock attribution.

#### Scenario: Renders contact form

- **WHEN** the page loads
- **THEN** the footer displays "Get in Touch" heading
- **AND** displays a contact form with name, email, subject, and message fields
- **AND** displays a "Send Message" button

#### Scenario: Renders Component Dock attribution

- **WHEN** the page loads
- **THEN** the footer displays a link to https://www.componentdock.com/ labeled "Component Dock"

#### Scenario: Form submission is prevented

- **WHEN** the user submits the contact form
- **THEN** the default form submission is prevented (no page reload)

### Requirement: App Integration

The template SHALL compose all sections in the correct order and set the document title.

#### Scenario: Sections render in order

- **WHEN** the page loads
- **THEN** sections render in order: Navbar, Hero, Gallery, Blog, Footer

#### Scenario: Document title is set

- **WHEN** the page loads
- **THEN** the document title is "Gaze — Photography Gallery Template"
