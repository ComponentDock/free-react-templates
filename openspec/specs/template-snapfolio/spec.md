# Template: Snapfolio (Gallery)

## Purpose

Recreation of ColorLib Capture photography gallery template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source template:** Capture
- **Source slug:** capture
- **Source URL:** https://colorlib.com/wp/template/capture/
- **Preview URL:** https://preview.colorlib.com/theme/capture/
- **Category:** Gallery (Photography Portfolio)
- **Stack:** Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design Tokens

### Colors
- **Primary accent:** #78d5ef (light blue) — buttons, links, highlights
- **Secondary:** #6c757d (gray) — secondary text, borders
- **Background:** #ffffff (white) — main content area
- **Text:** #212529 (dark gray) — body text
- **Footer background:** #343a40 (dark charcoal) — footer section
- **Overlay:** #000000 with opacity transitions — gallery item hover
- **Loader accent:** #F96D00 (orange) — loading spinner

### Typography
- **Body font:** "Work Sans", sans-serif
- **Heading font:** "Poppins", "Montserrat", sans-serif (loaded via Google Fonts)
- **Base size:** 1rem (16px)
- **Line height:** 1.5

### Spacing & Layout
- **Sidebar width:** 20% (desktop), 270px (mobile, slide-in)
- **Gallery grid:** 3 columns (Bootstrap col-md-4)
- **Gallery item height:** 280px
- **Section padding:** Standard Bootstrap container with px-md-5

### Components
- **Buttons:** Sharp corners (border-radius: 0), solid background
- **Gallery cards:** Background image with dark overlay on hover
- **Navigation:** Vertical sidebar with underline hover effect
- **Footer:** 3-column layout (categories, archives, contact)
- **Surface (measured):** `#f67e7d` — paints it ×11 — `background` on `#colorlib-aside`; style.css (57,218 B, sha256 66b4eaddfcc6) · <https://preview.colorlib.com/theme/capture/>

## Requirements

### Feature: Sidebar Navigation

  As a visitor
  I want to navigate the site via a fixed sidebar
  So that I can access different sections easily

#### Scenario: Sidebar displays on desktop

- **GIVEN** I am viewing the site on a desktop viewport
- **THEN** the sidebar should be visible on the left side
- **AND** it should contain the logo with camera icon
- **AND** it should show navigation links: Home, Gallery, About, Blog, Contact
- **AND** it should display social media icons at the bottom

#### Scenario: Sidebar toggles on mobile

- **GIVEN** I am viewing the site on a mobile viewport
- **WHEN** I tap the hamburger menu icon
- **THEN** the sidebar should slide in from the left
- **AND** the main content should shift right

### Feature: Photography Gallery Grid

  As a visitor
  I want to browse photography work in a grid layout
  So that I can view the portfolio

#### Scenario: Gallery displays images in grid

- **GIVEN** I am on the home page
- **THEN** I should see a 3-column grid of photography entries
- **AND** each entry should have a background image
- **AND** each entry should be 280px tall

#### Scenario: Gallery items show overlay on hover

- **GIVEN** I hover over a photography entry
- **THEN** a dark overlay should appear with 0.7 opacity
- **AND** the entry title should become visible
- **AND** the category tag should become visible

#### Scenario: Gallery items display content

- **GIVEN** a photography entry is rendered
- **THEN** it should show a title (e.g., "Work 01")
- **AND** it should show a category tag (e.g., "Model", "Nature")
- **AND** the text should be white colored

### Feature: Footer

  As a visitor
  I want to see footer information
  So that I can find contact details and categories

#### Scenario: Footer displays categories

- **GIVEN** I scroll to the footer
- **THEN** I should see a "Category" section
- **AND** it should list photography categories with counts

#### Scenario: Footer displays archives

- **GIVEN** I scroll to the footer
- **THEN** I should see an "Archives" section
- **AND** it should list monthly archives with post counts

#### Scenario: Footer displays contact info

- **GIVEN** I scroll to the footer
- **THEN** I should see a "Have a Questions?" section
- **AND** it should show address, phone, and email

#### Scenario: Footer has dark background

- **GIVEN** I view the footer
- **THEN** it should have a dark background (#343a40)
- **AND** the text should be light colored

### Feature: Responsive Design

  As a visitor on any device
  I want the layout to adapt to my screen size
  So that content is readable and accessible

#### Scenario: Mobile layout adjusts sidebar

- **GIVEN** I am on a mobile device
- **THEN** the sidebar should be hidden by default
- **AND** the main content should take full width

#### Scenario: Tablet layout adjusts grid

- **GIVEN** I am on a tablet device
- **THEN** the gallery grid should show 2 columns

## Verification checklist

- [ ] Sidebar navigation renders with logo, menu items, and social links
- [ ] Sidebar toggles on mobile with hamburger menu
- [ ] Photography grid displays in 3-column layout
- [ ] Gallery items show hover overlay effect with title and tag
- [ ] Gallery items are 280px height
- [ ] Footer displays categories, archives, and contact sections
- [ ] Footer has dark background
- [ ] Responsive design works on mobile, tablet, and desktop
- [ ] All interactive elements have proper accessibility attributes
- [ ] Color tokens match the original design (#78d5ef primary, #343a40 footer)
- [ ] Typography uses Work Sans and Poppins/Montserrat fonts
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to Component Dock website
- [ ] Template runs with 100% test coverage
