# Reign — Creative Portfolio Template

## Purpose

Recreate the ColorLib Monarchy template as a React 19 + Tailwind CSS 4 + TypeScript single-page creative portfolio/agency template. Named "Reign" to evoke the royal/monarchy theme without matching the source name.

## Requirements

### Requirement: Navigation bar with sticky behavior

The template SHALL display a fixed navigation bar with the "Reign" logo and links to Home, Portfolio, About, Services, Blog, and Contact sections.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar shows the Reign logo and six navigation links

#### Scenario: Mobile menu toggle

- **WHEN** the page loads on a mobile viewport
- **THEN** a hamburger menu button is visible
- **AND** clicking it reveals the mobile navigation drawer

### Requirement: Hero section with headline and video play button

The template SHALL display a full-width hero section with a background image overlay, the headline "Do What You Love", a subtitle, and a play button.

#### Scenario: Hero renders headline and play button

- **WHEN** the page loads
- **THEN** the hero section shows "Do What You Love" as the main heading
- **AND** a play button with an accessible "Play video" label is present

### Requirement: Services section with three service cards

The template SHALL display a three-column services section with Interface Design, Product Design, and Quality Results cards, each with an icon, title, and description.

#### Scenario: Services render three cards

- **WHEN** the user scrolls to the services section
- **THEN** three service cards are visible with icons, titles, and descriptions

### Requirement: Portfolio grid with six project images

The template SHALL display a six-item portfolio grid with images and hover overlay effects.

#### Scenario: Portfolio shows six items

- **WHEN** the user scrolls to the portfolio section
- **THEN** six portfolio images are displayed in a responsive grid
- **AND** hovering reveals a "View Project" overlay

### Requirement: Testimonials section with four client quotes

The template SHALL display a four-column testimonials section with client photos, names, roles, and quote text.

#### Scenario: Testimonials render four cards

- **WHEN** the user scrolls to the testimonials section
- **THEN** four testimonial cards are visible with photos, names, roles, and quotes

### Requirement: Blog section with two post cards

The template SHALL display a two-column blog section with post cards containing images, dates, titles, and author info.

#### Scenario: Blog shows two post cards

- **WHEN** the user scrolls to the blog section
- **THEN** two blog post cards are visible with images, dates, titles, and authors

### Requirement: Client logos section

The template SHALL display a client logos section on a light background with four brand placeholders.

#### Scenario: Client logos render

- **WHEN** the user scrolls to the client logos section
- **THEN** four client brand names are visible

### Requirement: Footer with Component Dock link and copyright

The template SHALL display a footer with the Reign logo, description, contact links, navigation columns, social icons, copyright text, and a link to Component Dock.

#### Scenario: Footer renders all elements

- **WHEN** the user scrolls to the footer
- **THEN** the Reign logo, contact info, navigation links, social icons, and copyright are visible
- **AND** a link to https://www.componentdock.com/ labeled "Component Dock" is present
