---
name: bezel
description: >
  Recreation of ColorLib "Watch" (https://colorlib.com/wp/template/watch/) as
  a product/landing page for smartwatches.
---

## Purpose

Bezel is a multi-section single-page smartwatch landing template. It recreates
the ColorLib "Watch" design under a new name with React 19, Tailwind CSS 4,
and TypeScript. The template features a hero banner, video intro, feature
highlights, product catalog, customer reviews, FAQ accordion, and footer.

## Requirements

### Requirement: Navbar

The template SHALL display a sticky navigation bar with logo text "Bezel" and
links to all major sections (Home, About, Services, Products, Reviews, FAQ).

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on desktop viewport
- **THEN** the navbar displays the logo and all six navigation links

#### Scenario: Mobile menu toggles

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the mobile navigation panel expands
- **WHEN** the user clicks the menu button again
- **THEN** the mobile navigation panel collapses

### Requirement: Hero Section

The template SHALL display a full-height hero banner with a background image,
subtitle text, headline "Smart New Future", and a "Buy Now" call-to-action.

#### Scenario: Hero renders content

- **WHEN** the page loads
- **THEN** the hero section displays the subtitle, headline, and CTA button
- **AND** the CTA button links to the products section

### Requirement: Video Introduction

The template SHALL display a split-layout section with text content on the left
and a video thumbnail with play button overlay on the right.

#### Scenario: Video intro renders

- **WHEN** the page loads
- **THEN** the section displays heading text and a play button

### Requirement: Feature Grid

The template SHALL display a 2x2 grid of feature cards flanking a center product
image, with icon, title, and description for each feature.

#### Scenario: Feature grid renders all cards

- **WHEN** the page loads
- **THEN** four feature cards are displayed with their titles and descriptions

### Requirement: About Split

The template SHALL display a full-width split layout with an image on the left
and text content with a CTA on the right.

#### Scenario: About section renders

- **WHEN** the page loads
- **THEN** the section displays the image, heading, and CTA button

### Requirement: Services

The template SHALL display a 3-column grid of six service cards, each with an
icon, title, and description.

#### Scenario: Services renders all items

- **WHEN** the page loads
- **THEN** six service cards are displayed

### Requirement: Product Catalog

The template SHALL display a dark-background section with four product cards,
each showing an image, name, price, and "Pre Order" button.

#### Scenario: Product catalog renders

- **WHEN** the page loads
- **THEN** four product cards are displayed with names, prices, and CTA buttons

### Requirement: Reviews

The template SHALL display a 3-column grid of six review cards, each with a
reviewer name, text, and star rating.

#### Scenario: Reviews render with ratings

- **WHEN** the page loads
- **THEN** six review cards are displayed with star ratings

### Requirement: FAQ Accordion

The template SHALL display an FAQ section with four collapsible items. Only one
answer may be expanded at a time.

#### Scenario: FAQ items toggle

- **WHEN** the user clicks a question
- **THEN** the answer expands
- **WHEN** the user clicks a different question
- **THEN** the previous answer collapses and the new one expands

### Requirement: Footer

The template SHALL display a three-column footer with About, Newsletter, and
Social sections. The footer MUST link to https://www.componentdock.com/
branded as "Component Dock".

#### Scenario: Footer renders all columns

- **WHEN** the page loads
- **THEN** the footer displays About, Newsletter, and Social columns

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/
