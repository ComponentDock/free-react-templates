# Bulwark — Security & IT Services Template

## Purpose

Recreation of ColorLib "Security" (https://colorlib.com/wp/template/security/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page security/IT-services landing page. Delivers a two-tier header with social icons and nav, a hero with dark overlay and CTA, service cards, a features grid, a facts/stats counter bar, a masonry gallery, blog cards, and a dark footer with newsletter form and Component Dock link.

## Requirements

### Requirement: Header with two-tier layout and navigation

The template SHALL render a two-tier header: a top bar with social icons (Facebook, Twitter, Dribbble), a phone number, and "Register / Login" link; and a nav bar with the "BULWARK" brand name, menu links (Home, About, Service, Team, Price, Blog, Contact), and a "Pages" dropdown with "Blog Single" and "Elements" sub-items. On mobile, a hamburger toggle SHALL show/hide a slide-down menu.

#### Scenario: Desktop header renders social icons and nav links

- **GIVEN** the page is loaded on a desktop viewport
- **THEN** I see social links for Facebook, Twitter, and Dribbble
- **AND** I see a phone number link "+1 (123) 456 7890"
- **AND** I see "Register / Login" link
- **AND** I see the brand name "BULWARK"
- **AND** I see nav links: Home, About, Service, Team, Price, Blog, Contact
- **AND** I see a "Pages" dropdown button

#### Scenario: Pages dropdown shows sub-items on hover

- **GIVEN** the page is loaded on desktop
- **WHEN** I hover over the "Pages" button
- **THEN** I see sub-items "Blog Single" and "Elements"

#### Scenario: Mobile menu toggles

- **GIVEN** the page is loaded on mobile
- **WHEN** I click the "Toggle menu" button
- **THEN** the mobile menu appears with all nav links

### Requirement: Hero section with background image and CTA

The template SHALL render a full-width hero section with a background image, a dark overlay (black/70), a subtitle "Security & IT Solutions", a heading "Protecting Your Digital Future", a description paragraph, and a "Get Started" CTA button with brand color background.

#### Scenario: Hero renders heading and CTA

- **GIVEN** the page is loaded
- **THEN** I see a heading "Protecting Your Digital Future"
- **AND** I see a subtitle "Security & IT Solutions"
- **AND** I see a link "Get Started" with brand color styling

### Requirement: Service section with three cards

The template SHALL render a service section with a centered title "Our Offered Services", a subtitle, and three service cards (Network Security, Data Protection, Cloud Security) each with an image, title, and description. Cards SHALL hover with brand color background.

#### Scenario: Service section renders three cards

- **GIVEN** the page is loaded
- **THEN** I see a heading "Our Offered Services"
- **AND** I see cards for "Network Security", "Data Protection", "Cloud Security"
- **AND** each card has an image with appropriate alt text

### Requirement: Feature section with six items on light background

The template SHALL render a feature section with light background (#f9f9ff), a centered title "Some Features that Made us Unique", and 6 feature items in a 3x2 grid: Expert Team, Threat Monitoring, Rapid Response, Scalable Solutions, Compliance Ready, Security Training. Each item has an icon, title, and description. Items SHALL hover with shadow and brand color.

#### Scenario: Feature section renders six items

- **GIVEN** the page is loaded
- **THEN** I see a heading "Some Features that Made us Unique"
- **AND** I see 6 feature items with their titles and descriptions

### Requirement: Facts/stats counter section

The template SHALL render a full-width facts section with brand color (#fab700) background and 5 stat items: 2536 Projects Completed, 6784 Happy Clients, 1059 Total Tasks, 2239 Cups of Coffee, 435 In House Professionals.

#### Scenario: Facts section renders all five counters

- **GIVEN** the page is loaded
- **THEN** I see the numbers 2536, 6784, 1059, 2239, 435
- **AND** I see labels: Projects Completed, Happy Clients, Total Tasks, Cups of Coffee, In House Professionals
- **AND** the section has brand color background

### Requirement: Gallery section with masonry layout

The template SHALL render a gallery section with a centered title "Latest From Our Gallery" and 7 gallery images in a CSS grid masonry layout with varied sizes. Images SHALL use picsum.photos placeholders.

#### Scenario: Gallery renders seven images

- **GIVEN** the page is loaded
- **THEN** I see a heading "Latest From Our Gallery"
- **AND** I see 7 gallery images with picsum.photos URLs

### Requirement: Blog section with four cards

The template SHALL render a blog section with light background (#f9f9ff), a centered title "Latest From Our Blog", and 4 blog cards each with an image, date badge, title, excerpt, and likes/comments meta. Cards SHALL hover with image scale and title color change.

#### Scenario: Blog section renders four cards

- **GIVEN** the page is loaded
- **THEN** I see a heading "Latest From Our Blog"
- **AND** I see 4 blog posts with titles, excerpts, date badges, and meta

### Requirement: Footer with dark background and Component Dock link

The template SHALL render a dark navy (#04091e) footer with 3 columns: About Us (text + copyright), Newsletter (email input + submit button), Follow Us (social icons). A "More templates at Component Dock" link pointing to https://www.componentdock.com/ SHALL be present.

#### Scenario: Footer renders three columns and Component Dock link

- **GIVEN** the page is loaded
- **THEN** I see "About Us", "Newsletter", "Follow Us" sections
- **AND** I see an email input with aria-label "Email for newsletter"
- **AND** I see a link "More templates at Component Dock" pointing to https://www.componentdock.com/
- **AND** the link opens in a new tab

### Requirement: Brand color and font consistency

The template SHALL use brand color #fab700 (golden yellow) for buttons, hover states, facts background, and accent elements. The font SHALL be Poppins loaded via Google Fonts.

#### Scenario: Brand color is applied consistently

- **GIVEN** the page is loaded
- **THEN** the CTA button has brand color background
- **AND** the facts section has brand color background
- **AND** hover states use brand color
