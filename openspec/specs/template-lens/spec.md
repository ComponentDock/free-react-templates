---
name: lens
description: Photography portfolio with fixed sidebar, full-screen hero, photo grid, testimonials, bio, blog, and contact form
source: https://colorlib.com/wp/template/elit/
preview: https://preview.colorlib.com/theme/elit/
---

# Lens — Photography Portfolio Template

## Purpose

Recreation of ColorLib "Elit" (https://colorlib.com/wp/template/elit/) as a React 19 + Tailwind CSS 4 + TypeScript photography portfolio template. The template features a fixed sidebar navigation, full-screen hero, photo grid gallery, testimonials, biography, blog, and contact form.

## Requirements

### Requirement: Sidebar Navigation

Users SHALL see a fixed left sidebar (250px wide, black background) with the logo "LENS", navigation links, and social media icons.

#### Scenario: Sidebar renders logo and navigation

- **WHEN** the page loads
- **THEN** the logo "LENS" is displayed
- **AND** navigation links are present: Home, Photos, Biography, Blog, Contact
- **AND** social icons (Facebook, Twitter, Instagram) are displayed

#### Scenario: Sidebar is responsive

- **WHEN** the viewport is less than 992px wide
- **THEN** the sidebar collapses to a hamburger menu toggle
- **AND** clicking the toggle opens/closes the sidebar

### Requirement: Hero Section

Users SHALL see a full-screen hero section with a background image, heading, subtitle, and a call-to-action button.

#### Scenario: Hero displays welcome content

- **WHEN** the page loads
- **THEN** a full-screen background image is shown
- **AND** the heading "WELCOME" is displayed in white uppercase
- **AND** a subtitle paragraph is displayed
- **AND** a "CONTACT ME" pink pill button links to the contact section

### Requirement: Photo Grid

Users SHALL see a 3-column photo grid with hover overlays.

#### Scenario: Photo grid displays images

- **WHEN** the user scrolls to the photos section
- **THEN** photos are arranged in a 3-column responsive layout
- **AND** each photo is 300px tall with object-fit cover

#### Scenario: Photo hover effect

- **WHEN** the user hovers over a photo
- **THEN** a dark overlay with a search icon appears

### Requirement: Testimonials

Users SHALL see a testimonial carousel with avatar, name, and quote.

#### Scenario: Testimonial carousel

- **WHEN** the user scrolls to the testimonials section
- **THEN** a heading "TESTIMONIAL" is shown
- **AND** a testimonial with circular avatar, name, and blockquote is displayed
- **AND** navigation dots allow switching between testimonials

### Requirement: Biography Section

Users SHALL see a biography section with dark background, portrait, and skill lists.

#### Scenario: Biography displays content

- **WHEN** the user scrolls to the biography section
- **THEN** the section has a dark background (#1a1a1a)
- **AND** a pink accent bar is positioned at top-left
- **AND** a portrait image, heading, and body text are shown
- **AND** two-column checkmark lists are displayed

### Requirement: Blog Section

Users SHALL see blog entries with images, titles, and excerpts.

#### Scenario: Blog entries

- **WHEN** the user scrolls to the blog section
- **THEN** 4 blog entries are shown
- **AND** each entry has an image, title, author/date meta, and excerpt
- **AND** pagination controls are displayed

### Requirement: Contact Form

Users SHALL see a contact form with standard fields on a dark background.

#### Scenario: Contact form fields

- **WHEN** the user scrolls to the contact section
- **THEN** fields are displayed: First Name, Last Name, Email, Subject, Message
- **AND** a "Send Message" button with pink accent is shown
- **AND** the section has a dark background

### Requirement: Footer

Users SHALL see a footer linking to Component Dock.

#### Scenario: Footer attribution

- **WHEN** the footer is displayed
- **THEN** a "More templates at Component Dock" link points to https://www.componentdock.com/

### Requirement: Accessibility

All sections SHALL use semantic HTML, proper labels, and accessible interactive elements.

#### Scenario: Semantic structure

- **WHEN** inspecting the page
- **THEN** semantic elements are used (nav, main, section, form, label)
- **AND** form labels are associated with inputs via htmlFor
- **AND** interactive elements have accessible names
