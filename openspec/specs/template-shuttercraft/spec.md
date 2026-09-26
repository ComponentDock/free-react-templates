# Template: Shuttercraft (Photography Portfolio)

## Purpose

Recreation of ColorLib Photography (`https://colorlib.com/wp/template/photography/`). A photographer portfolio/personal site featuring a hero carousel with full-bleed background images, about section with portrait + text, dark-themed masonry gallery, call-to-action banner, blog grid, split contact form with image, and a dark footer. Built with React 19, Tailwind CSS 4, and TypeScript.

## Requirements

### Requirement: Navbar with navigation links

The template SHALL render a navigation bar with the site name "Shuttercraft" and links to Home, About, Gallery, Blog, and Contact sections.

#### Scenario: Desktop navigation renders all links

- **GIVEN** the page loads
- **THEN** the navbar displays the "Shuttercraft" brand name
- **AND** links to Home, About, Gallery, Blog, and Contact are visible

#### Scenario: Mobile menu toggle

- **GIVEN** the viewport is narrow (mobile)
- **WHEN** the user clicks the hamburger menu button
- **THEN** a mobile navigation menu opens with all links
- **AND** clicking a link closes the mobile menu

### Requirement: Hero carousel with slides

The template SHALL render a hero section with a full-bleed background image carousel containing 3 slides with headings and subtitles, prev/next navigation, and auto-advance.

#### Scenario: First slide displays by default

- **GIVEN** the page loads
- **THEN** the hero section shows the heading "Wildlife Photography"
- **AND** a descriptive subtitle is visible

#### Scenario: Navigation between slides

- **WHEN** the user clicks the next slide button
- **THEN** the heading changes to the next slide content
- **WHEN** the user clicks the previous slide button
- **THEN** the heading changes to the previous slide content

#### Scenario: Auto-advance slides

- **GIVEN** the page has loaded
- **WHEN** 5 seconds pass without interaction
- **THEN** the slide advances to the next one automatically

### Requirement: About section with portrait and text

The template SHALL render an about section with a portrait image on the left and a heading, description paragraph, and "Hire Me Now" button on the right.

#### Scenario: About content renders correctly

- **GIVEN** the page loads
- **THEN** the about section displays a heading about photography
- **AND** a descriptive paragraph is visible
- **AND** a portrait image with alt text is shown
- **AND** a "Hire Me Now" button links to the contact section

### Requirement: Gallery section with masonry grid

The template SHALL render a dark-background gallery section with a heading and a masonry-style grid of 16 images.

#### Scenario: Gallery displays all images

- **GIVEN** the page loads
- **THEN** the gallery section shows the heading "My Recent Photos"
- **AND** 16 images are rendered with descriptive alt text
- **AND** images have lazy loading enabled

### Requirement: Call-to-action banner

The template SHALL render a gradient call-to-action section with a heading and a button.

#### Scenario: CTA section renders

- **GIVEN** the page loads
- **THEN** a "Let's Work Together" heading is visible
- **AND** a "Get in Touch" button links to the contact section

### Requirement: Blog section with post cards

The template SHALL render a blog section with a heading and 3 blog post cards, each containing an image, title, excerpt, author info, date, and like/comment counts.

#### Scenario: Blog posts display correctly

- **GIVEN** the page loads
- **THEN** the blog section shows the heading "Our Recent Blogs"
- **AND** 3 blog article cards are rendered
- **AND** each card has a title, excerpt, author name, date, like count, and comment count

### Requirement: Contact section with form

The template SHALL render a contact section with an image on the left and a form on the right with name, email, and message fields.

#### Scenario: Contact form renders all fields

- **GIVEN** the page loads
- **THEN** a "Send Me a Message" heading is visible
- **AND** inputs for name, email, and message are present with labels
- **AND** a "Send Message" submit button is visible

#### Scenario: Form accepts user input

- **WHEN** the user types in the name, email, and message fields
- **THEN** the field values update to reflect the typed text

### Requirement: Footer with Component Dock link

The template SHALL render a footer with copyright text, a link to Component Dock, and social media icons.

#### Scenario: Footer content renders

- **GIVEN** the page loads
- **THEN** the footer displays copyright text with the current year
- **AND** a "Component Dock" link points to https://www.componentdock.com/
- **AND** the link opens in a new tab with noopener noreferrer
- **AND** social media icon links are present

### Requirement: App composition and title

The template SHALL compose all sections in the correct order and set the document title.

#### Scenario: All sections render in order

- **GIVEN** the page loads
- **THEN** Navbar, Hero, About, Gallery, CallToAction, Blog, Contact, and Footer are all rendered
- **AND** the document title is set to "Shuttercraft — Photography Portfolio"
