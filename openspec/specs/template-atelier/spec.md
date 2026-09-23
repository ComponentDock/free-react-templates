---
name: Atelier
slug: atelier
description: Creative agency / business landing page template
source: https://colorlib.com/wp/template/design/
preview: https://preview.colorlib.com/theme/design/
---

## Purpose

Recreate the ColorLib "Design" template as "Atelier" — a creative agency landing page with navbar, hero, stats, process steps, services, testimonials, blog, and footer.

## Requirements

### Requirement: Navbar with logo, links, and mobile menu

The template SHALL render a sticky navbar with the logo "Atelier", navigation links (Home, About, Services, Blog, Contact), and a "Get Started" CTA button. On mobile, a hamburger toggle shows/hides a mobile menu.

#### Scenario: Desktop navbar renders all elements

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar displays the logo, all navigation links, and the CTA button

#### Scenario: Mobile menu toggles open and closed

- **WHEN** the user clicks the hamburger menu button
- **THEN** the mobile navigation menu becomes visible
- **AND** clicking a link closes the menu

### Requirement: Hero section with split layout

The template SHALL render a hero section with a left column containing a heading, paragraph, CTA button, and feature cards, and a right column with an image and quote overlay.

#### Scenario: Hero displays heading and CTA

- **WHEN** the hero section renders
- **THEN** the heading "Create, Code, and Published." is visible
- **AND** a "Get Started" button is present

#### Scenario: Hero displays feature cards

- **WHEN** the hero section renders
- **THEN** two feature cards with icons and descriptions are visible

### Requirement: Achievements statistics section

The template SHALL render 4 stat columns showing performance metrics.

#### Scenario: Stats are displayed

- **WHEN** the achievements section renders
- **THEN** four stat values are visible: 99.55%, 98,000+, 99.99%, and 1M+

### Requirement: How It Works process steps

The template SHALL render a 3-step process section with icons, titles, and descriptions.

#### Scenario: Three steps are shown

- **WHEN** the how-it-works section renders
- **THEN** three step cards are visible with numbered titles

### Requirement: Services section with checklist

The template SHALL render a services section with a heading, paragraph, checkmark list, and CTA on the left, and a decorative image on the right.

#### Scenario: Services content is visible

- **WHEN** the services section renders
- **THEN** a heading, paragraph, 3 checklist items, and a "Get Started" button are visible

### Requirement: Testimonial carousel

The template SHALL render a testimonial carousel with navigation dots.

#### Scenario: Default testimonial is shown

- **WHEN** the testimonial section renders
- **THEN** the first testimonial with author name and role is visible

#### Scenario: Dot navigation works

- **WHEN** the user clicks a navigation dot
- **THEN** the corresponding testimonial is displayed

### Requirement: Blog section with post cards

The template SHALL render a blog section with 5 post cards showing dates, titles, and descriptions.

#### Scenario: Blog posts are displayed

- **WHEN** the blog section renders
- **THEN** 5 blog post cards are visible with dates and titles

### Requirement: Footer with Component Dock link

The template SHALL render a footer with about text, social icons, navigation columns, and a copyright line linking to Component Dock.

#### Scenario: Footer renders all elements

- **WHEN** the footer renders
- **THEN** social media links are present
- **AND** navigation columns are visible
- **AND** the Component Dock link points to https://www.componentdock.com/
