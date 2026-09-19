---
name: Cabinet
slug: cabinet
description: >
  Furniture e-commerce landing page template — recreation of ColorLib "Furn"
  (https://colorlib.com/wp/template/furn/). Warm, premium furniture brand
  aesthetic with product tabs, image-with-text sections, and a newsletter
  signup.
---

## Purpose

Cabinet is a premium furniture e-commerce landing page featuring a clean,
minimal design with warm earth tones. The template showcases products in a
tabbed interface, highlights the brand's manufacturing story, and includes
a newsletter signup and structured footer with a Component Dock link.

## Requirements

### Requirement: Announcement bar with rotating messages

The page SHALL display a full-width announcement bar with rotating promotional
messages at the top of the page.

#### Scenario: Announcement bar renders

- **WHEN** the page loads
- **THEN** an announcement bar is visible with a promotional message
- **AND** the bar has a dark navy background

#### Scenario: Messages rotate

- **WHEN** 5 seconds elapse
- **THEN** the displayed message changes to the next one in the rotation

### Requirement: Sticky navigation

The page SHALL display a sticky navigation bar with the brand name and
navigation links.

#### Scenario: Navigation renders

- **WHEN** the page loads
- **THEN** the "Cabinet" logo is visible
- **AND** navigation links Home, Shop, About, Contact are visible

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger menu button
- **THEN** a mobile navigation menu opens
- **AND** clicking a navigation link closes the menu

### Requirement: Hero section

The page SHALL display a full-width hero section with a heading, subtitle,
and call-to-action button.

#### Scenario: Hero content

- **WHEN** the page loads
- **THEN** the heading "Furniture at cost" is visible
- **AND** the eyebrow text "70% sale off" is visible
- **AND** a "Discover more" button is visible

### Requirement: Product tabs

The page SHALL display products organized in a tabbed interface with category
tabs (Sofas, Tables, Chairs, Beds, Lighting, Decor).

#### Scenario: Default tab

- **WHEN** the page loads
- **THEN** the "Sofas" tab is selected by default
- **AND** sofa products are displayed

#### Scenario: Tab switching

- **WHEN** the user clicks the "Tables" tab
- **THEN** table products are displayed
- **AND** sofa products are hidden

### Requirement: About section

The page SHALL display an image-with-text section describing the brand's
manufacturing story.

#### Scenario: About content

- **WHEN** the page loads
- **THEN** the "Manufacturer" heading is visible
- **AND** text about the workshop is visible
- **AND** a "Discover more" button is visible

### Requirement: Recommended products

The page SHALL display a grid of recommended products.

#### Scenario: Recommended products render

- **WHEN** the page loads
- **THEN** 4 recommended products are displayed in a grid

### Requirement: Newsletter signup

The page SHALL display a newsletter signup form with email input and subscribe
button.

#### Scenario: Newsletter form

- **WHEN** the page loads
- **THEN** the "Join our newsletter" heading is visible
- **AND** an email input field is visible
- **AND** a "Subscribe" button is visible

### Requirement: Footer with Component Dock link

The page SHALL display a footer with navigation links and a link to
Component Dock.

#### Scenario: Footer links

- **WHEN** the page loads
- **THEN** a footer with Quick Links and Support sections is visible
- **AND** a link to https://www.componentdock.com/ is present
- **AND** the link text contains "Component Dock"
