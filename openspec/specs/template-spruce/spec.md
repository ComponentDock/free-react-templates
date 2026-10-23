# Template: Spruce (Bootstrap 5)

Recreation of ColorLib "Olla" (https://colorlib.com/wp/template/olla/).

## Purpose

A free business & web development landing template with a hero, services section, about split, brand logos, FAQ accordion, pricing tabs, testimonials, project gallery, call-to-action, and footer — built with React, Tailwind CSS, and TypeScript.

## Requirements

### Requirement: Top bar announcement strip

The template SHALL render a dark navy announcement bar at the top with informational text and a call-to-action button.

#### Scenario: Renders announcement text and CTA

- **WHEN** the page loads
- **THEN** the top bar displays announcement text and a "Learn More" link with href="#learn-more"

### Requirement: Sticky navigation bar

The template SHALL render a sticky navigation bar with logo, desktop nav links, and a "Free Quote" CTA button.

#### Scenario: Renders all navigation elements

- **WHEN** the page loads
- **THEN** the navbar displays the "Spruce" logo, 6 nav links (Home, About, Services, Portfolio, Blog, Contact), and a "Free Quote" button

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger toggle button on mobile
- **THEN** the mobile menu opens (aria-expanded=true) and shows all nav links
- **AND** clicking a nav link closes the menu

#### Scenario: Sticky shadow on scroll

- **WHEN** the user scrolls past 50px
- **THEN** the navbar header gains a shadow-md class

### Requirement: Hero section

The template SHALL render a hero section with a headline, subtitle, email input form, and hero image.

#### Scenario: Renders hero content

- **WHEN** the page loads
- **THEN** the hero displays "Build your website in record time", an email input, and a "Get Free Quote" submit button

#### Scenario: Form submission prevents default

- **WHEN** the user submits the email form
- **THEN** the default form submission is prevented

### Requirement: Services section

The template SHALL render a 3-column services section with icon cards.

#### Scenario: Renders 3 service cards

- **WHEN** the page loads
- **THEN** three service cards are displayed: "Unlimited Components", "Awesome Support", "Responsive Design"

### Requirement: About section

The template SHALL render a two-column about section with an image and feature list.

#### Scenario: Renders about content

- **WHEN** the page loads
- **THEN** the about section displays the heading "All the features you'd expect" and 3 feature items

### Requirement: Brand logos section

The template SHALL render a branded section with a dark blue background and partner logos.

#### Scenario: Renders brand section

- **WHEN** the page loads
- **THEN** the brand section displays "You'll be in good company", 6 brand placeholders, and a "Meet Our Customers" button

### Requirement: FAQ accordion

The template SHALL render an accordion with expandable/collapsible items.

#### Scenario: Accordion toggles

- **WHEN** the user clicks an accordion header
- **THEN** its answer expands and other items collapse

#### Scenario: Only one item open at a time

- **WHEN** a new accordion header is clicked
- **THEN** the previously open item collapses

### Requirement: Pricing section

The template SHALL render a pricing section with tabbed pricing (Yearly/Monthly).

#### Scenario: Tab switching

- **WHEN** the user clicks "Monthly"
- **THEN** the price changes from $20 to $05

#### Scenario: Default to yearly

- **WHEN** the page loads
- **THEN** the Yearly tab is active and shows $20/month

### Requirement: Testimonials section

The template SHALL render a testimonial with author info and quote.

#### Scenario: Renders testimonial

- **WHEN** the page loads
- **THEN** the testimonial section displays a quote, author "Bob Frapples", and role "CEO at TechCorp"

### Requirement: Project gallery

The template SHALL render a 3-column project gallery with hover overlays.

#### Scenario: Renders gallery items

- **WHEN** the page loads
- **THEN** 3 project cards are displayed: "Mobile App", "E-Commerce Platform", "Corporate Website"

### Requirement: Call-to-action strip

The template SHALL render a CTA strip with heading and button.

#### Scenario: Renders CTA

- **WHEN** the page loads
- **THEN** the CTA displays "Create your amazing website with Spruce" and a "Start Free Trial" button

### Requirement: Footer

The template SHALL render a footer with Quick Links, Support links, Newsletter form, social icons, and copyright.

#### Scenario: Footer links and form

- **WHEN** the page loads
- **THEN** the footer displays Quick Links, Support links, a newsletter form, social icons, and a copyright line linking to Component Dock

#### Scenario: Newsletter form prevents default

- **WHEN** the user submits the newsletter form
- **THEN** the default form submission is prevented

### Requirement: App-level rendering

The template SHALL render all sections in the correct order and set the page title.

#### Scenario: All sections present

- **WHEN** the page loads
- **THEN** all sections render in order: TopBar, Navbar, Hero, Services, About, Brands, FAQ, Pricing, Testimonials, Gallery, CTA, Footer

#### Scenario: Document title

- **WHEN** the page loads
- **THEN** the document title is "Spruce — Business Web Development Template"

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/spruce/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/spruce/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Top bar announcement strip — the top bar displays announcement text and a "Learn More" link with href="#learn-more"
- [x] Sticky navigation bar — the navbar displays the "Spruce" logo, 6 nav links (Home, About, Services, Portfolio, Blog, Contact), and a "Free Quote" button
- [x] Hero section — the hero displays "Build your website in record time", an email input, and a "Get Free Quote" submit button
- [x] Services section — three service cards are displayed: "Unlimited Components", "Awesome Support", "Responsive Design"
- [x] About section — the about section displays the heading "All the features you'd expect" and 3 feature items
- [x] Brand logos section — the brand section displays "You'll be in good company", 6 brand placeholders, and a "Meet Our Customers" button
- [ ] FAQ accordion — its answer expands and other items collapse
- [ ] Pricing section — the price changes from $20 to $05
- [x] Testimonials section — the testimonial section displays a quote, author "Bob Frapples", and role "CEO at TechCorp"
- [ ] Project gallery — 3 project cards are displayed: "Mobile App", "E-Commerce Platform", "Corporate Website"
- [x] Call-to-action strip — the CTA displays "Create your amazing website with Spruce" and a "Start Free Trial" button
- [ ] App-level rendering — all sections render in order: TopBar, Navbar, Hero, Services, About, Brands, FAQ, Pricing, Testimonials, Gallery, CTA, Footer
