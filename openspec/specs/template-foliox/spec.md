# template-foliox

## Purpose

Foliox is a portfolio and agency website template, recreating the ColorLib F-plus design under a new original name. It provides a complete agency/portfolio site with hero, about, projects gallery, methods, clients, news, and contact sections.

## Requirements

### Requirement: Hero section with background image and CTA

The hero section SHALL display a full-viewport background image with the heading "For More Agency" and a "View Portfolio" call-to-action button that scrolls to the projects section.

#### Scenario: Hero renders heading and CTA

- **WHEN** the page loads
- **THEN** the hero section shows "For More Agency" heading
- **AND** a "View Portfolio" button linking to #projects is visible

### Requirement: Full-screen overlay navigation

The navbar SHALL show a hamburger icon that toggles a full-screen overlay menu with navigation links to all page sections.

#### Scenario: Navigation menu opens and closes

- **WHEN** the user clicks the hamburger button
- **THEN** a full-screen overlay menu opens with links: Home, About Us, Projects, Clients, Recent News, Contact
- **AND** clicking a menu item closes the overlay and scrolls to that section

### Requirement: About Us section with features

The About Us section SHALL display a split layout with an image and "Who We Are" text, followed by three feature cards: Reasonable Pricing, eCommerce Support, User-Friendly Admin.

#### Scenario: About section renders features

- **WHEN** the About Us section is visible
- **THEN** an image and "Who We Are" description are displayed
- **AND** three feature cards with icons are shown

### Requirement: Filterable projects gallery

The Projects section SHALL display a grid of portfolio items with filter buttons (All Fields, Branding, Editorial Design, Graphic Design) that filter the visible items.

#### Scenario: Projects filter by category

- **WHEN** the user clicks "Branding" filter
- **THEN** only branding items are displayed
- **WHEN** the user clicks "All Fields"
- **THEN** all items are displayed again

### Requirement: Methods video section

The Methods section SHALL display a "How We Work" heading with description text and a video placeholder with a play button.

#### Scenario: Methods section renders

- **WHEN** the Methods section is visible
- **THEN** "How We Work" heading and video play button are shown

### Requirement: Clients logo section

The Clients section SHALL display a row of client logos with grayscale styling that colorizes on hover.

#### Scenario: Clients logos render

- **WHEN** the Clients section is visible
- **THEN** a row of client logo images is displayed

### Requirement: Recent News blog cards

The Recent News section SHALL display three blog post cards with thumbnail, title, author name, and date.

#### Scenario: News cards render

- **WHEN** the Recent News section is visible
- **THEN** three blog post cards with title, author, and date are shown

### Requirement: Contact form

The Contact section SHALL display a form with Name, Email, Subject, Telephone, Message fields and a "Send Message" submit button.

#### Scenario: Contact form renders and submits

- **WHEN** the Contact section is visible
- **THEN** Name, Email, Subject, Telephone, Message fields and Send Message button are present
- **AND** submitting the form does not navigate away from the page

### Requirement: Footer with Component Dock link

The footer SHALL contain navigation links, social icons, a subscribe form, and a Component Dock attribution link pointing to https://www.componentdock.com/.

#### Scenario: Footer renders with attribution

- **WHEN** the footer is visible
- **THEN** it contains nav links, social icons, and a Component Dock link
- **AND** the Component Dock link points to https://www.componentdock.com/
