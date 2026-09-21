---
name: ironpulse
description: Crossfit & Fitness landing page template — recreation of ColorLib Crossbody
template: ironpulse
original: crossbody
original_url: https://colorlib.com/wp/template/crossbody/
preview_url: https://preview.colorlib.com/theme/crossbody/
---

## Purpose

IronPulse is a free crossfit and fitness landing page template built with React 19, Tailwind CSS 4, and TypeScript. It recreates the ColorLib Crossbody design under a new, original name. The template provides a complete gym/fitness website with hero, pricing, programs, stats, coaches, testimonials, blog, contact form, gallery, and footer sections.

## Requirements

### Requirement: Navbar with navigation and mobile menu

The template SHALL display a fixed dark top navbar with the brand name "IRONPULSE" and navigation links (Home, Program, Coaches, Schedule, About, Blog, Contact). On mobile, a hamburger button SHALL toggle the mobile menu.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads on desktop
- **THEN** the brand "IRONPULSE" is visible
- **AND** all navigation links are visible

#### Scenario: Mobile menu toggles on hamburger click

- **WHEN** the hamburger button is clicked
- **THEN** the mobile menu expands
- **AND** all navigation links are visible

### Requirement: Hero section with headline and video play

The template SHALL display a full-height hero section with a background image, dark overlay, large "Iron Pulse" headline, subtitle "Crossfit. Working Harder", and a play button that opens a video overlay.

#### Scenario: Hero renders headline and CTA

- **WHEN** the page loads
- **THEN** the "Iron Pulse" headline is visible
- **AND** the subtitle "Crossfit. Working Harder" is visible
- **AND** a play button is visible

#### Scenario: Play button opens video overlay

- **WHEN** the play button is clicked
- **THEN** a video overlay dialog appears

### Requirement: Pricing section with 3 course cards

The template SHALL display a "Pricing For Courses" section with 3 pricing cards (Weight Lifting, Crossfit Training, Cardio Blast) each showing a price of $240 and an "Enroll Now" CTA button.

#### Scenario: Pricing cards render

- **WHEN** the page loads
- **THEN** 3 pricing cards are visible
- **AND** each card has an "Enroll Now" button

### Requirement: Programs section with 5 fitness programs

The template SHALL display a split-layout programs section with 5 programs (Crossfit, Aerobic Classes, Fitness, Yoga Classes, Cardio Training) on the left and an image on the right.

#### Scenario: Programs render

- **WHEN** the page loads
- **THEN** 5 program items are visible

### Requirement: Stats counter with 4 statistics

The template SHALL display a dark-background stats section with 4 counters: 5000+ Happy Customers, 4560+ Perfect Bodies, 570+ Working Hours, 900+ Success Stories.

#### Scenario: Stats render

- **WHEN** the page loads
- **THEN** all 4 stat values are visible

### Requirement: Coaches section with 4 trainer cards

The template SHALL display an "Our Coaches" section with 4 coach cards (Travor James, Leonard Smith, James Buffer, Maricar Collins) each with social media icons.

#### Scenario: Coaches render

- **WHEN** the page loads
- **THEN** 4 coach cards are visible

### Requirement: Testimonials section

The template SHALL display a dark-background testimonials section with 3 testimonial cards containing quotes and avatars.

#### Scenario: Testimonials render

- **WHEN** the page loads
- **THEN** testimonial quotes are visible

### Requirement: Blog section with 3 posts

The template SHALL display a "Recent Blog" section with 3 blog cards showing date, author, comments count, title, and excerpt.

#### Scenario: Blog posts render

- **WHEN** the page loads
- **THEN** 3 blog posts are visible

### Requirement: Contact form with fields

The template SHALL display a contact form with First Name, Last Name, Email, Phone, and Message fields plus an "Appointment" submit button. On submit, a thank-you message SHALL appear.

#### Scenario: Contact form renders

- **WHEN** the page loads
- **THEN** a form with all input fields is visible

#### Scenario: Form submission shows confirmation

- **WHEN** the form is filled and submitted
- **THEN** a thank-you message is displayed

### Requirement: Gallery with 4 images

The template SHALL display a 4-column image gallery with search icon overlay on hover.

#### Scenario: Gallery renders

- **WHEN** the page loads
- **THEN** 4 gallery images are visible

### Requirement: Footer with Component Dock link

The template SHALL display a dark 4-column footer (About, Recent Blog, Services, Contact) with a bottom bar linking to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** the footer contains a link to Component Dock
