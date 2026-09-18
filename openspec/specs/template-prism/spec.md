---
name: Prism
slug: prism
source: https://colorlib.com/wp/template/dup/
preview: https://preview.colorlib.com/theme/dup/
description: >
  Recreation of ColorLib "Dup" — a creative agency website template.
  Sections: navbar, hero banner, studio/about, achievements, video showcase,
  skills/progress bars, testimonials, contact, subscription, and footer.
design_tokens:
  font: Poppins (headings + body)
  brand_color: '#e0003b'
  heading_color: '#222222'
  body_color: '#777777'
  button_border_radius: 25px
  overlay_color: 'rgba(224, 0, 59, 0.8)'
  section_bg_light: '#fff'
  progress_bar_bg: '#f9f9ff'
---

## Purpose

Recreation of ColorLib "Dup" (https://preview.colorlib.com/theme/dup/) as a React + Tailwind CSS creative agency template named "Prism". The template showcases a creative agency with sections for studio introduction, achievements, video, skills, testimonials, and contact.

## Requirements

### Requirement: Navbar with navigation and mobile toggle

The template SHALL render a fixed header with the "Prism" logo and navigation links (Home, About, Services, Portfolio, Contact). On mobile, a hamburger menu toggles a mobile navigation panel.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar displays the "Prism" logo and all five navigation links

#### Scenario: Mobile menu toggle works

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the mobile navigation panel opens and the button changes to a close icon

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open and the user clicks a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero banner with CTA

The template SHALL render a hero section with the headline "Sleek and Clean with same perspective", a subtitle about metropolitan technology, and a "Get Started" CTA button.

#### Scenario: Hero renders headline and CTA

- **WHEN** the page loads
- **THEN** the hero section displays the headline, subtitle text, and a "Get Started" button linking to the studio section

### Requirement: Studio section about the agency

The template SHALL render a studio section with a red overlay background, a studio image, and a white content card about "Green Forest Studio".

#### Scenario: Studio section renders content

- **WHEN** the user scrolls to the studio section
- **THEN** the heading "Green Forest Studio" and descriptive text are visible alongside a studio image

### Requirement: Achievements grid with social proof

The template SHALL render a grid of 6 achievement items with icons and labels (Portfolio Pieces, Design Shots, Video Subscribers, Code Commits, Awards Won, Revenue Generated).

#### Scenario: All achievement items render

- **WHEN** the page loads
- **THEN** all 6 achievement items are displayed with their labels and counts

### Requirement: Video showcase section

The template SHALL render a video section with a dark red overlay, a play button, and the heading "Everyone wants to be unique".

#### Scenario: Video section renders play button and heading

- **WHEN** the user scrolls to the video section
- **THEN** a play button and the heading text are visible

### Requirement: Skills progress bars

The template SHALL render progress bars for 4 design tools: Adobe Photoshop CC (70%), Adobe Illustrator CC (60%), Adobe InDesign CC (50%), Adobe After Effects CC (40%).

#### Scenario: All progress bars render with correct values

- **WHEN** the page loads
- **THEN** 4 progress bars are displayed with the correct aria-valuenow attributes

### Requirement: Testimonials section

The template SHALL render a testimonials section with 3 client quotes, each including a name and role.

#### Scenario: Testimonial cards render

- **WHEN** the page loads
- **THEN** 3 testimonial cards are visible with client names and roles

### Requirement: Contact information section

The template SHALL render a contact section with 3 contact cards (Address, Phone, Email) each with relevant details.

#### Scenario: Contact cards render

- **WHEN** the page loads
- **THEN** the Address, Phone, and Email contact cards are displayed with their details

### Requirement: Footer with subscription and Component Dock link

The template SHALL render a footer with a newsletter subscription form, 4 columns (About Agency, Navigation Links x2, Instafeed), and a copyright line linking to Component Dock.

#### Scenario: Footer renders all columns and subscription form

- **WHEN** the page loads
- **THEN** the footer displays the subscription form, all 4 columns, and a link to Component Dock

#### Scenario: Footer subscription form clears on submit

- **WHEN** the user enters an email and clicks "Subscribe now"
- **THEN** the email input is cleared

#### Scenario: Footer copyright includes Component Dock link

- **WHEN** the page loads
- **THEN** the copyright line contains a link to https://www.componentdock.com/ labeled "Component Dock"
