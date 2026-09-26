---
name: LensVault
description: Photography portfolio template with filterable gallery, testimonials, services, and Instagram feed
source: https://colorlib.com/wp/template/bitmap/
preview: https://preview.colorlib.com/theme/bitmap/
status: in-progress
---

# LensVault — Photography Portfolio Template

Recreation of ColorLib "Bitmap" (https://colorlib.com/wp/template/bitmap/)

## Purpose

LensVault is a photography portfolio website template featuring a sticky navigation bar, a full-width hero banner with parallax overlay, a filterable 4-column photo gallery, client testimonials, a services grid, an Instagram feed, and a dark footer with newsletter signup and Component Dock attribution. It recreates the ColorLib "Bitmap" design faithfully using React, Tailwind CSS, and TypeScript.

## Requirements

### Requirement: Navigation bar

The template SHALL display a sticky top navigation bar with logo text, navigation links, and a search icon button.

#### Scenario: Desktop navbar renders with all elements

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar is visible with the logo "LensVault", navigation links (Home, Gallery, Services, About, Contact), and a search icon button

#### Scenario: Mobile navbar toggles

- **WHEN** the user taps the hamburger menu button on mobile
- **THEN** the mobile navigation menu expands showing all links

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open and the user clicks a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero banner

The template SHALL display a full-width hero banner with a dark background image, centered heading, subtitle, and a CTA button.

#### Scenario: Hero renders heading and CTA

- **WHEN** the page loads
- **THEN** the hero section displays "LensVault Photography" as a heading, a subtitle about photography, and an "Explore Gallery" button

### Requirement: Filterable photo gallery

The template SHALL display a 4-column grid of 12 photography items with filter tabs, hover overlays, and a "Load More" button.

#### Scenario: Gallery renders all 12 items

- **WHEN** the gallery section loads
- **THEN** 12 photo cards are displayed in a responsive grid (1 column on mobile, 2 on tablet, 4 on desktop)

#### Scenario: Filter tabs are present

- **WHEN** the gallery section loads
- **THEN** filter tabs for "All", "Featured", "Portrait", and "Landscape" are visible

#### Scenario: Clicking a filter tab shows matching items

- **WHEN** the user clicks the "Portrait" filter tab
- **THEN** only portrait category items are displayed

#### Scenario: Clicking "All" restores all items

- **WHEN** a filter is active and the user clicks "All"
- **THEN** all 12 gallery items are displayed again

#### Scenario: Gallery cards have hover overlay

- **WHEN** the user hovers over a gallery card
- **THEN** a dark overlay appears with the item title and an expand icon

### Requirement: Client testimonials

The template SHALL display a two-column testimonials section with a heading and multiple testimonial entries.

#### Scenario: Testimonials section renders

- **WHEN** the testimonials section loads
- **THEN** a "Client's Feedback" heading is displayed along with at least 3 testimonial entries, each showing an avatar, quote, name, and role

### Requirement: Services section

The template SHALL display a services section with a heading and 6 service cards in a 3-column grid.

#### Scenario: Services section renders all cards

- **WHEN** the services section loads
- **THEN** a "Why Choose Us" heading is displayed and 6 service cards are rendered, each with a title and description

### Requirement: Instagram feed

The template SHALL display an Instagram feed section with a follow button and a row of 6 images.

#### Scenario: Instagram section renders

- **WHEN** the Instagram section loads
- **THEN** a "Follow Us on Instagram" button and 6 images in a horizontal row are displayed

### Requirement: Footer

The template SHALL display a dark footer with three columns: About Me, Newsletter, and Follow Me, plus a Component Dock attribution link.

#### Scenario: Footer renders all columns

- **WHEN** the footer loads
- **THEN** "About Me", "Newsletter", and "Follow Me" columns are displayed with appropriate content

#### Scenario: Newsletter has email input

- **WHEN** the footer loads
- **THEN** an email input field and a submit button are present

#### Scenario: Social links are present

- **WHEN** the footer loads
- **THEN** social media icon links (Facebook, Twitter, Dribbble, Instagram) are displayed

#### Scenario: Component Dock attribution

- **WHEN** the footer loads
- **THEN** a link to https://www.componentdock.com/ labeled "Component Dock" is displayed
