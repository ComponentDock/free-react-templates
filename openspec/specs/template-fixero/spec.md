# Fixero — Handyman & Construction Landing Template

Recreation of ColorLib "Handyman" (https://colorlib.com/wp/template/handyman/)

## Purpose

Provide a free, production-ready handyman and construction landing page template built with React 19, Tailwind CSS 4, and TypeScript. Faithfully recreates the ColorLib "Handyman" design under the name "Fixero" with matching sections, layout, and design tokens.

## Requirements

### Requirement: Navbar with logo and navigation links

The template SHALL display a fixed navigation bar with the "Fixero" logo (orange dot accent), navigation links (Home, About, Services, Projects, Blog, Contact), and a dark mode toggle.

#### Scenario: Logo and links are visible

- **WHEN** the page loads
- **THEN** I see "Fixero" with an orange dot in the logo area
- **AND** I see navigation links: Home, About, Services, Projects, Blog, Contact

#### Scenario: Dark mode toggle works

- **WHEN** I click the dark mode toggle button
- **THEN** the page switches to dark mode
- **AND** the toggle shows a light mode option

#### Scenario: Navbar scrolls with background change

- **WHEN** I scroll down the page
- **THEN** the navbar background changes from transparent to dark

### Requirement: Hero section with background image

The template SHALL display a full-width hero section with a dark overlay on a background image and the heading "Perfection is always in our mind."

#### Scenario: Hero heading is visible

- **WHEN** the page loads
- **THEN** I see the heading "Perfection is always in our mind."
- **AND** the hero has a background image with dark overlay

### Requirement: Quotation form section

The template SHALL display a split layout with descriptive text on the left and a contact form (Name, Email, Message fields, Send Message button) on the right.

#### Scenario: Form fields are present

- **WHEN** the page loads
- **THEN** I see Name, Email, and Message input fields
- **AND** I see a "Send Message" button

#### Scenario: Form submission shows confirmation

- **WHEN** I fill in the form and click Send Message
- **THEN** I see a thank you confirmation message

### Requirement: Services section with 6 service cards

The template SHALL display 6 service cards on a lavender background (#dedffe) with icons, titles, and descriptions: Renovation, Finishing, Building Construction, House Build, Fence Construction, Bridge Construct.

#### Scenario: All service cards are visible

- **WHEN** the page loads
- **THEN** I see 6 service cards with icons and descriptions

### Requirement: About section with tabbed content

The template SHALL display a tabbed "We Are Leader In The Construction World" section with 3 tabs: Technology, Quality, Staff. Each tab shows an image and descriptive text.

#### Scenario: Tabs switch content

- **WHEN** I click the Quality tab
- **THEN** I see the Quality image and description
- **AND** the Technology content is no longer visible

### Requirement: Testimonials section

The template SHALL display 2 testimonial cards with blockquotes, avatars, names, and roles on a light gray background.

#### Scenario: Testimonials are visible

- **WHEN** the page loads
- **THEN** I see 2 testimonial cards with quotes and avatars

### Requirement: Projects gallery section

The template SHALL display 6 project cards with images that show an overlay with category and title on hover.

#### Scenario: Project cards are visible

- **WHEN** the page loads
- **THEN** I see 6 project cards with images

### Requirement: Blog section

The template SHALL display 3 blog post cards with images, titles, dates, authors, and excerpts.

#### Scenario: Blog posts are visible

- **WHEN** the page loads
- **THEN** I see 3 blog post cards with titles and excerpts

### Requirement: Footer with Component Dock link

The template SHALL display a dark footer with About Us text, 4 Quick Links columns, and a "Component Dock" attribution linking to https://www.componentdock.com/.

#### Scenario: Footer has Component Dock link

- **WHEN** the page loads
- **THEN** I see a "Component Dock" link in the footer
- **AND** the link opens https://www.componentdock.com/

#### Scenario: Footer has Quick Links

- **WHEN** the page loads
- **THEN** I see 4 columns of Quick Links in the footer
