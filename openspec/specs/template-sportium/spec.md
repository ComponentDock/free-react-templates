---
name: sportium
description: Fitness & gym landing page with hero, features, about, testimonials, gallery, courses, and blog sections
template: colorlib-sportsfit
source: https://preview.colorlib.com/theme/sportsfit/
---

## Purpose

Recreation of ColorLib Sportsfit (https://colorlib.com/wp/template/sportsfit/) — a fitness/gym landing page. The new name is "Sportium".

### Design Tokens

- Font: Montserrat (Google Fonts)
- Primary brand color: #f98c00 (orange)
- Hover brand color: #ff9711 (lighter orange)
- Accent color: #db5246 (coral/red — form focus)
- Body text: #535353
- Muted text: #a5a5a5
- Headings: #262626
- Background: #FFFFFF (white)
- Star rating: #fba40e (gold)
- Button border-radius: 22px (fully rounded)

## Requirements

### Requirement: Navbar with logo and navigation

The page SHALL render a sticky header with the Sportium logo (Dumbbell icon + brand name), desktop navigation links (Home, About Us, Classes & Services, Blog, Contact), and a phone number.

#### Scenario: Logo links to home

- **WHEN** the page loads
- **THEN** the logo link points to #home

#### Scenario: Navigation links are present

- **WHEN** the page loads
- **THEN** links for Home, About Us, Classes & Services, Blog, and Contact are visible

### Requirement: Hero section with CTA

The page SHALL render a full-width hero section with a background image overlay, "Get fit with us" headline, subtitle about classes, and a "Join Now" CTA button.

#### Scenario: Hero renders headline and CTA

- **WHEN** the page loads
- **THEN** the h1 heading says "Get fit with us" and a "Join Now" link is present

#### Scenario: Video link present

- **WHEN** the page loads
- **THEN** a "See Workout Video" link is visible

### Requirement: Feature boxes

The page SHALL render 3 feature boxes (Pilates with trainer, Swimming Pool, Healthy diet plan) each with an icon, title, description, and learn-more link.

#### Scenario: Three features shown

- **WHEN** the page loads
- **THEN** feature titles "Pilates with trainer", "Swimming Pool", and "Healthy diet plan" are visible

### Requirement: About section

The page SHALL render a split about section with subtitle, title, description text, CTA button, and an image.

#### Scenario: About section renders

- **WHEN** the page loads
- **THEN** the heading "About Sportium" and a "Join Now" button are present

### Requirement: Testimonials section

The page SHALL render 3 testimonial cards with avatar images, names, roles, text, and star ratings on a parallax background.

#### Scenario: Three testimonials shown

- **WHEN** the page loads
- **THEN** testimonial names "Diane Smith", "Mark Johnson", and "Sarah Williams" are visible with star ratings

### Requirement: Gallery section

The page SHALL render a horizontally scrollable gallery of 5 images.

#### Scenario: Five gallery images

- **WHEN** the page loads
- **THEN** 5 images are rendered in the gallery

### Requirement: Courses section

The page SHALL render 6 course cards (Weight Loss Class, Yoga Classes, Spinning Class, Private Fit Class, Nutrition Classes, Pilates Class) in a grid layout.

#### Scenario: Six courses shown

- **WHEN** the page loads
- **THEN** all 6 course titles are visible

### Requirement: Blog section

The page SHALL render 3 blog post cards with images, titles, dates, descriptions, and "Read More" links on a parallax background.

#### Scenario: Three blog posts shown

- **WHEN** the page loads
- **THEN** 3 articles with "Read More" links are visible

### Requirement: Footer with newsletter and branding

The page SHALL render a footer with logo, navigation links, newsletter email form, and a "Made with Component Dock" copyright link to https://www.componentdock.com/.

#### Scenario: Footer renders logo and nav

- **WHEN** the page loads
- **THEN** the footer logo and navigation links are present

#### Scenario: Newsletter form submits

- **WHEN** a user enters an email and clicks "go"
- **THEN** the form submits and the input is cleared

#### Scenario: Component Dock link present

- **WHEN** the page loads
- **THEN** a link to https://www.componentdock.com/ labeled "Component Dock" is in the footer
