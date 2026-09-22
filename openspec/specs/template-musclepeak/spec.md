---
name: musclepeak
description: Gym trainer personal landing page with hero, training categories, gallery, pricing, about, and blog
template: colorlib-zacson
source: https://preview.colorlib.com/theme/zacson/
---

## Purpose

Recreation of ColorLib Zacson (https://colorlib.com/wp/template/zacson/) — a gym trainer personal landing page with hero slider, training categories, gallery, pricing plans, about section, and blog. The new name is "Musclepeak".

### Design Tokens

- Fonts: Oswald (headings) + Roboto Condensed (body text) — Google Fonts
- Primary brand color: #f04e3c / #f44a40 (vivid red-orange — CTAs, highlights)
- Dark red gradient: linear-gradient(to bottom, #950101, #630102, #3d0302) — hero overlays
- Dark background: #111111 (dark sections)
- Body text: #555555, #777777
- Muted text: #999999
- Light backgrounds: #f9f9ff, #fbf9ff (very light purple tint), #f7f7f7, #eeeeee
- White: #ffffff
- Button primary: #f04e3c bg, white text
- Button border: transparent with border outline
- Button hover: red gradient
- Overlay: rgba(0,0,0,0.3), rgba(0,0,0,0.5) on images
- Gallery overlay: rgba(0,0,0,0.5) with white text

## Requirements

### Requirement: Header with transparent navigation

The page SHALL render a transparent header with the Musclepeak logo, desktop navigation links (Home, About, Courses, Pricing, Gallery, Blog, Contact), and a "Contact me" button.

#### Scenario: Navigation links are present

- **WHEN** the page loads
- **THEN** links for Home, About, Courses, Pricing, Gallery, Blog, and Contact are visible

#### Scenario: Contact button

- **WHEN** the page loads
- **THEN** a "Contact me" button is visible in the header

### Requirement: Hero section with slider

The page SHALL render a full-height hero section with a background image, greeting text, "Gym Trainer" heading, and a "My Courses" CTA button.

#### Scenario: Hero heading renders

- **WHEN** the page loads
- **THEN** the heading "Gym Trainer" is visible

#### Scenario: Greeting text

- **WHEN** the page loads
- **THEN** a "Hi This is Musclepeak" greeting text is visible

#### Scenario: My Courses button

- **WHEN** the page loads
- **THEN** a "My Courses" button is visible

### Requirement: Training Categories section

The page SHALL render 2 training category cards (Personal training, Group training) on a dark background, each with an image, title, description, and "View Courses" button.

#### Scenario: Two training categories

- **WHEN** the page loads
- **THEN** titles "Personal training" and "Group training" are visible with descriptions

#### Scenario: View Courses buttons

- **WHEN** the page loads
- **THEN** "View Courses" buttons are visible on each category card

### Requirement: Gallery section

The page SHALL render a masonry-style gallery grid with fitness/gym images and overlay titles.

#### Scenario: Gallery images render

- **WHEN** the page loads
- **THEN** gallery items with "Muscle gaining" titles are visible

### Requirement: Pricing section

The page SHALL render 3 pricing cards, each showing a duration (6 month), price ($30/m), feature list, and "Join Now" button.

#### Scenario: Pricing heading renders

- **WHEN** the page loads
- **THEN** the heading "Pricing" is visible

#### Scenario: Three pricing plans

- **WHEN** the page loads
- **THEN** 3 pricing cards with "$30/m" price and feature lists are visible

#### Scenario: Join Now buttons

- **WHEN** the page loads
- **THEN** "Join Now" buttons are visible on each pricing card

### Requirement: About Me section

The page SHALL render a split about section with text and a "My Courses" CTA button on the left, and an image on the right.

#### Scenario: About heading renders

- **WHEN** the page loads
- **THEN** the heading "About Me" is visible

#### Scenario: My Courses button

- **WHEN** the page loads
- **THEN** a "My Courses" button is visible in the about section

### Requirement: Blog section

The page SHALL render 3 blog post cards, each with an image, category tag, and title.

#### Scenario: Blog heading renders

- **WHEN** the page loads
- **THEN** the heading "From Blog" is visible

#### Scenario: Blog cards render

- **WHEN** the page loads
- **THEN** blog post titles and "Gym & Fitness" category tags are visible

### Requirement: Footer

The page SHALL render a footer with contact information (location, phone, email), navigation links, and a copyright bar.

#### Scenario: Footer contact info

- **WHEN** the page loads
- **THEN** contact details (address, phone numbers, email) are visible in the footer

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/

## Verification Checklist

- [ ] Oswald + Roboto Condensed fonts loaded from Google Fonts
- [ ] Transparent header with nav and Contact button
- [ ] Hero section with "Gym Trainer" heading and CTA
- [ ] 2 training category cards on dark background
- [ ] Gallery masonry grid with overlay titles
- [ ] 3 pricing cards with feature lists
- [ ] About Me section with CTA
- [ ] 3 blog post cards
- [ ] Footer with contact info and Component Dock link
- [ ] All brand colors match tokens (#f04e3c, #950101, #111111)
- [ ] Dark red gradient on hero/sections
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] 100% test coverage
- [ ] Builds without errors
