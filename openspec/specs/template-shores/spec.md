# Spec: Shores — Charity & Nonprofit Landing Template

> Recreation of ColorLib "Seelife"
> (https://colorlib.com/wp/template/seelife/)
> Preview: https://preview.colorlib.com/theme/seelife/

## Purpose

A charity/nonprofit landing page template with hero banner, donation causes, about section, featured causes with progress tracking, events with countdown timers, team showcase, CTA, blog, newsletter, and 4-column footer. Design tokens extracted from the ColorLib Seelife CSS: green #60bc0f primary, yellow #fdbb00 accent, Poppins headings, Roboto body.

## Requirements

### Requirement: Navbar

The template SHALL display a transparent navigation bar with logo and navigation links (Home, About, Causes, Events, Contact).

#### Scenario: Desktop navigation

- **WHEN** the user loads the page on desktop
- **THEN** they see a transparent navbar with "Shores" logo and five navigation links

#### Scenario: Mobile navigation

- **WHEN** the user taps the mobile menu toggle
- **THEN** the navigation menu expands with all links visible

### Requirement: Hero Banner

The template SHALL display a full-width hero banner with dark overlay, subtitle, heading, description, and two CTA buttons.

#### Scenario: Hero content

- **WHEN** the user views the hero section
- **THEN** they see "Give a hand" subtitle, "to make the better world" heading, description, "Donate Now" and "See Causes" buttons

### Requirement: Causes Section

The template SHALL display three cause cards with icons, titles, and descriptions.

#### Scenario: Cause cards

- **WHEN** the user scrolls to the causes section
- **THEN** they see "Give Donation", "Give Inspiration", and "Become Volunteer" cards

### Requirement: About Section

The template SHALL display a split layout with image on the left and text on the right.

#### Scenario: About content

- **WHEN** the user scrolls to the about section
- **THEN** they see an image and text about the nonprofit team with a "Learn more" button

### Requirement: Featured Causes

The template SHALL display three cause cards with images, progress bars, raised/goal amounts, and donor counts.

#### Scenario: Featured cause cards

- **WHEN** the user scrolls to featured causes
- **THEN** each card shows title, description, progress bar, raised/goal amounts, donor count, and donate button

### Requirement: Events

The template SHALL display four event cards with images, countdown timers, and learn more buttons.

#### Scenario: Event cards

- **WHEN** the user scrolls to events
- **THEN** each card shows title, description, countdown timer (days/hours/minutes/seconds), and "Learn More" button

### Requirement: Team

The template SHALL display four team member cards with photos, names, roles, descriptions, and social links.

#### Scenario: Team member cards

- **WHEN** the user scrolls to team
- **THEN** each card shows photo, name, role, description, and social icons (Facebook, Twitter, Instagram, Email)

### Requirement: CTA Banner

The template SHALL display a full-width dark CTA section with heading, description, and join button.

#### Scenario: CTA content

- **WHEN** the user scrolls to the CTA section
- **THEN** they see "Become a volunteer" heading, description, and "Join with us" button

### Requirement: Blog

The template SHALL display three story cards with images, dates, categories, and titles.

#### Scenario: Blog cards

- **WHEN** the user scrolls to the blog section
- **THEN** each card shows image, date, category, and article title

### Requirement: Newsletter

The template SHALL display a newsletter subscription form with email input and subscribe button.

#### Scenario: Newsletter form

- **WHEN** the user views the newsletter section
- **THEN** they see a heading, email input, and "Subscribe" button

### Requirement: Footer

The template SHALL display a 4-column footer with mission, quick links, gallery, and contact information, plus a footer bottom linking to https://www.componentdock.com/.

#### Scenario: Footer columns

- **WHEN** the user scrolls to the footer
- **THEN** they see "Our Mission", "Quick Links", "Gallery", and "Contact Us" columns

#### Scenario: Component Dock link

- **WHEN** the user views the footer bottom
- **THEN** they see a link to https://www.componentdock.com/ branded "Component Dock"
