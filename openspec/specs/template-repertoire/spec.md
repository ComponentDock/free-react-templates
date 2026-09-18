---
name: repertoire
description: >
  Recreation of ColorLib "Work" — a portfolio/personal branding landing page
  with sticky sidebar navigation, hero slider, about section with accordion,
  services grid, portfolio grid, blog posts, and CTA contact section.
---

## Purpose

Recreate ColorLib [Work](https://colorlib.com/wp/template/work/) — a portfolio/personal branding landing page — as a React 19 + Vite + Tailwind CSS 4 + TypeScript template under the name **Repertoire**.

**Preview:** https://preview.colorlib.com/theme/work/
**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Requirements

### Requirement: Sticky sidebar navigation

The template SHALL display a fixed left sidebar containing the logo "Repertoire", navigation links (Home, Work, About, Services, Blog, Contact), and social media icons in the footer area.

#### Scenario: Sidebar renders all navigation links

- **WHEN** the page loads
- **THEN** the sidebar displays links for "Home", "Work", "About", "Services", "Blog", "Contact"

#### Scenario: Sidebar has Component Dock footer link

- **WHEN** the page loads
- **THEN** the footer contains a link to "https://www.componentdock.com/" branded as "Component Dock"

### Requirement: Hero section with image slider

The template SHALL display a full-viewport hero section with an auto-rotating image slider containing 3 slides with headings and a CTA button.

#### Scenario: Hero slider displays first heading

- **WHEN** the page loads
- **THEN** the hero section shows "Strategic Design for Brands"

#### Scenario: Hero slider auto-advances

- **WHEN** 5 seconds pass
- **THEN** the heading changes to "Creators of Brands Template"

#### Scenario: Hero has slide indicators

- **WHEN** the page loads
- **THEN** 3 slide indicator buttons are rendered

### Requirement: About section with accordion

The template SHALL display a two-column about section with overlapping images on the left and a heading, description, and 3-panel accordion on the right.

#### Scenario: About section renders heading

- **WHEN** the page loads
- **THEN** "Welcome & Introduce" heading is visible

#### Scenario: Accordion has 3 panels

- **WHEN** the page loads
- **THEN** 3 accordion panels are rendered ("Why choose me?", "What I do?", "My Specialties")

#### Scenario: First panel is expanded by default

- **WHEN** the page loads
- **THEN** "Why choose me?" panel is expanded

### Requirement: Services section

The template SHALL display a 2-column grid of 6 service items with icons, titles, and descriptions.

#### Scenario: Services shows 6 items

- **WHEN** the page loads
- **THEN** 6 service items are rendered

### Requirement: Portfolio section

The template SHALL display a 2-column grid of 6 project cards with background images, hover overlays, titles, tags, and action buttons.

#### Scenario: Portfolio shows 6 projects

- **WHEN** the page loads
- **THEN** 6 project cards are rendered

#### Scenario: Portfolio cards have action buttons

- **WHEN** the page loads
- **THEN** each project card has share, view, and like buttons with accessible labels

### Requirement: Blog section

The template SHALL display a 3-column grid of 3 blog post cards with images, metadata, titles, excerpts, and "Read More" links.

#### Scenario: Blog shows 3 posts

- **WHEN** the page loads
- **THEN** 3 blog post cards are rendered

### Requirement: CTA section

The template SHALL display a full-width call-to-action section with heading, description, and contact button.

#### Scenario: CTA has heading and button

- **WHEN** the page loads
- **THEN** "Get in Touch!" heading is visible and a "Contact me!" button is rendered

### Requirement: Footer with Component Dock link

The template SHALL include a footer that links to Component Dock.

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** a link to "https://www.componentdock.com/" is present with text "Component Dock"
