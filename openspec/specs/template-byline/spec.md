# Spec: Byline — Blog & Magazine Template

**Recreation of:** ColorLib "Nikki" (https://colorlib.com/wp/template/nikki/)
**Preview URL:** https://preview.colorlib.com/theme/nikki/

## Purpose

Byline is a free React blog and magazine template that recreates the ColorLib Nikki design. It features a hero carousel with featured posts, a two-column blog layout with sidebar widgets, an Instagram photo feed, and a dark footer with social links and Component Dock branding. Built with React 19, Tailwind CSS 4, and TypeScript.

## Requirements

### Requirement: Navbar with brand, navigation, and social links

The template SHALL display a sticky navbar with the "Byline" brand name, navigation links (Home, About, Contact), a search button, and social media icons (Facebook, Twitter, Instagram). The navbar SHALL collapse to a hamburger menu on mobile with a toggleable mobile menu.

#### Scenario: Renders navbar with brand and navigation

- **WHEN** the page loads
- **THEN** the navbar displays "Byline" brand, Home/About/Contact links, search button, and social icons

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the mobile menu toggle button
- **THEN** the mobile navigation menu opens showing duplicated nav links
- **AND** clicking a mobile nav link closes the menu

### Requirement: Hero section with featured post

The template SHALL display a full-width hero section with a featured post including a background image, date, title, excerpt, and a "Read More" button.

#### Scenario: Renders hero with featured content

- **WHEN** the page loads
- **THEN** the hero section displays a post title, date, excerpt, and Read More button

### Requirement: Blog content area with posts and sidebar

The template SHALL display a two-column layout with an 8-column main area and a 4-column sidebar. The main area SHALL contain a full-width featured post (image, date, title, excerpt, author, comments, social share) and a 2-column grid of blog post cards. The sidebar SHALL contain About, Categories, Latest Posts, Newsletter, and Tags widgets.

#### Scenario: Renders featured post and blog grid

- **WHEN** the page loads
- **THEN** the featured post title, author, and share icons are visible
- **AND** blog post cards are displayed in a grid

#### Scenario: Renders sidebar widgets

- **WHEN** the page loads
- **THEN** the sidebar shows About Byline, Categories, Latest Posts, Newsletter, and Tags sections

### Requirement: Newsletter subscription form

The sidebar SHALL include a newsletter signup form with an email input and a Subscribe button. The form SHALL accept email input without errors.

#### Scenario: Newsletter form interaction

- **WHEN** the user enters an email and clicks Subscribe
- **THEN** the form submits without error

### Requirement: Instagram photo feed

The template SHALL display 8 square Instagram placeholder images in a row with a hover overlay showing an Instagram icon.

#### Scenario: Renders Instagram feed

- **WHEN** the page loads
- **THEN** 8 Instagram images are displayed with hover overlays

### Requirement: Footer with social links and Component Dock branding

The template SHALL display a dark footer with social media links (Facebook, Twitter, LinkedIn, Instagram, YouTube) and a copyright line that links to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer renders social links and attribution

- **WHEN** the page loads
- **THEN** the footer shows social links and a "Component Dock" link to https://www.componentdock.com/
- **AND** the copyright year is displayed
