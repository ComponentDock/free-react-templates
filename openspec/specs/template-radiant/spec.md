# Spec: Radiant (recreation of ColorLib Quantum)

## Purpose

Radiant is a business/agency landing page template in the
free-react-templates monorepo. It is an original React recreation of
the ColorLib free "Quantum" website template
(source: https://preview.colorlib.com/theme/quantum/), built under a
DIFFERENT name (Radiant — evokes brightness and innovation; single lowercase word,
no collision with apps/ or existing specs) per the monorepo naming mandate.

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design tokens

- Heading font: Libre Baskerville (Google Fonts, weights 400/700)
- Body font: Mulish (Google Fonts, weights 400/600/700)
- Brand/primary: #5cccc9 (teal) — buttons, icons, accents
- Primary hover: #6cd1ce
- Black/dark: #000000 — nav, dark backgrounds
- White/light: #ffffff — body, section backgrounds
- Muted text: #7b7b7b
- Pricing color-1: teal border (Free tier)
- Pricing color-2: black border (Premium tier)
- Pricing color-3: teal border (Enterprise tier)

## Requirements

### Requirement: Navbar renders navigation links

The template SHALL display a sticky navbar with the logo "Radiant."
(teal dot accent), navigation links, search button, and social icons.

#### Scenario: Desktop nav shows all links

- **WHEN** the page loads on desktop
- **THEN** the navbar shows Radiant. logo, and links: Home, Features, Pricing, Services, About, Contact
- **AND** a search button and social icons (Twitter, Facebook) are visible

### Requirement: Hero section displays headline and feature cards

The template SHALL display a split hero with a headline on the left,
two feature cards (Creative, Design), and an image with "Modern Design" overlay on the right.

#### Scenario: Hero renders headline and features

- **WHEN** the page loads
- **THEN** the hero shows the headline "Design is not just what it looks like and how it feels. Design is how it works."
- **AND** two feature cards are visible: Creative and Design

#### Scenario: Hero shows image overlay

- **WHEN** the page loads
- **THEN** a hero image is visible with "Modern Design" overlay text

### Requirement: About Us section shows three feature columns

The template SHALL display an About Us section with subtitle,
heading, and three feature columns (Years of Experience, Innovative, Solutions).

#### Scenario: Three columns render

- **WHEN** the page scrolls to About Us
- **THEN** three feature headings are visible: Years of Experience, Innovative, Solutions
- **AND** the "15 years" highlight is displayed

### Requirement: Gallery renders masonry grid of images

The template SHALL display a masonry-style image gallery with 5 placeholder images.

#### Scenario: Five gallery images render

- **WHEN** the page loads
- **THEN** five gallery images are visible in a grid layout

### Requirement: Pricing section shows three plans

The template SHALL display a pricing section with three plans:
Free ($0.00), Premium ($99.00), Enterprise ($180.00),
each with feature lists and "Get started" CTA buttons.

#### Scenario: Three pricing plans render

- **WHEN** the page loads
- **THEN** three pricing cards are visible with plan names Free, Premium, Enterprise
- **AND** prices $0.00, $99.00, $180.00 are displayed

#### Scenario: Each plan has a CTA button

- **WHEN** the page loads
- **THEN** three "Get started" buttons are visible

### Requirement: Features split section displays two feature cards

The template SHALL display a split layout with a heading on the left
and two feature cards (Creativity, Solutions) on the right.

#### Scenario: Two feature cards render

- **WHEN** the page scrolls to the Features section
- **THEN** Creativity and Solutions headings are visible

### Requirement: Testimonial section shows a quote

The template SHALL display a split testimonial with a background image
on the left and a blockquote with person name and role on the right.

#### Scenario: Testimonial renders with attribution

- **WHEN** the page loads
- **THEN** a testimonial quote is visible from "James Wilson", CEO, Co-Founder

### Requirement: Footer links to Component Dock

The template SHALL display a footer with four columns (Help, About, Support, Subscribe)
and a copyright line linking to https://www.componentdock.com/ as "Component Dock".

#### Scenario: Footer has four columns

- **WHEN** the page loads
- **THEN** four footer columns are visible: Help, About, Support, Subscribe

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text mentions "Component Dock"
