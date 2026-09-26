# Template: Lumier (Photography Portfolio Template)

## Purpose

Lumier is a single-page photographer portfolio template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Elit" photography website template design, built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Requirements

### Requirement: Sidebar navigation

The template SHALL display a fixed left sidebar (250px wide, black background) with logo, navigation links, and social icons.

#### Scenario: Sidebar renders all navigation links

- **WHEN** the page loads
- **THEN** the sidebar displays Home, Photos, Biography, Blog, and Contact links

#### Scenario: Sidebar highlights active section

- **WHEN** the user scrolls to a section
- **THEN** the corresponding nav link is highlighted in the brand color

#### Scenario: Sidebar smooth scrolls on click

- **WHEN** the user clicks a navigation link
- **THEN** the page smoothly scrolls to that section

#### Scenario: Sidebar logo click scrolls to hero

- **WHEN** the user clicks the logo
- **THEN** the page scrolls to the hero section

### Requirement: Mobile sidebar

The sidebar SHALL be responsive with a hamburger toggle on mobile viewports.

#### Scenario: Mobile menu opens on toggle click

- **WHEN** the viewport is mobile and the user clicks the hamburger icon
- **THEN** the sidebar slides in from the left with a dark overlay

#### Scenario: Mobile menu closes on overlay click

- **WHEN** the mobile sidebar is open and the user clicks the overlay
- **THEN** the sidebar closes

#### Scenario: Mobile menu closes on close button click

- **WHEN** the mobile sidebar is open and the user clicks the close button
- **THEN** the sidebar closes

### Requirement: Hero section

The template SHALL display a full-viewport hero section with a background image, heading, description, and call-to-action button.

#### Scenario: Hero renders heading and button

- **WHEN** the page loads
- **THEN** the hero displays the "Welcome" heading and "Contact Me" button

#### Scenario: Hero CTA scrolls to contact

- **WHEN** the user clicks "Contact Me"
- **THEN** the page scrolls to the contact section

### Requirement: Photo gallery

The template SHALL display a 3-column photo grid with hover effects and lightbox.

#### Scenario: Gallery renders 18 photos

- **WHEN** the page loads
- **THEN** 18 photo items are displayed in a grid

#### Scenario: Gallery lightbox opens on click

- **WHEN** the user clicks a photo
- **THEN** a lightbox opens showing the full-size image

#### Scenario: Gallery lightbox closes on overlay click

- **WHEN** the lightbox is open and the user clicks the overlay
- **THEN** the lightbox closes

#### Scenario: Gallery lightbox closes on close button

- **WHEN** the lightbox is open and the user clicks the close button
- **THEN** the lightbox closes

### Requirement: Testimonials carousel

The template SHALL display a testimonials section with a carousel of testimonials.

#### Scenario: Testimonials shows first item by default

- **WHEN** the page loads
- **THEN** the first testimonial is displayed with name and quote

#### Scenario: Testimonials navigates forward

- **WHEN** the user clicks the next button
- **THEN** the next testimonial is shown

#### Scenario: Testimonials navigates backward

- **WHEN** the user clicks the previous button
- **THEN** the previous testimonial is shown

#### Scenario: Testimonials navigates via dots

- **WHEN** the user clicks a dot indicator
- **THEN** that testimonial is shown

### Requirement: Biography section

The template SHALL display a biography section with portrait, bio text, and skill checklist.

#### Scenario: Biography renders all content

- **WHEN** the page loads
- **THEN** the biography heading, portrait image, name, bio paragraphs, and skill checklist are visible

### Requirement: Blog section

The template SHALL display a blog section with paginated post entries.

#### Scenario: Blog shows first page

- **WHEN** the page loads
- **THEN** 2 blog posts are displayed on page 1

#### Scenario: Blog navigates to next page

- **WHEN** the user clicks the next page button
- **THEN** page 2 posts are shown

#### Scenario: Blog navigates to previous page

- **WHEN** the user is on page 2 and clicks the previous page button
- **THEN** page 1 posts are shown

#### Scenario: Blog disables next on last page

- **WHEN** the user is on the last page
- **THEN** the next page button is disabled

#### Scenario: Blog disables previous on first page

- **WHEN** the user is on page 1
- **THEN** the previous page button is disabled

### Requirement: Contact form

The template SHALL display a contact form with name, email, subject, and message fields.

#### Scenario: Contact form renders all fields

- **WHEN** the page loads
- **THEN** First Name, Last Name, Email, Subject, Message fields and Send Message button are visible

#### Scenario: Contact form accepts input

- **WHEN** the user types in a field
- **THEN** the field value updates

#### Scenario: Contact form submits without error

- **WHEN** the user clicks Send Message
- **THEN** the form submits without throwing an error

### Requirement: Footer

The template SHALL display a footer with a Component Dock attribution link.

#### Scenario: Footer renders Component Dock link

- **WHEN** the page loads
- **THEN** the footer displays a link to https://www.componentdock.com/ labeled "Component Dock"

#### Scenario: Footer renders copyright

- **WHEN** the page loads
- **THEN** the footer displays the current year and copyright text
