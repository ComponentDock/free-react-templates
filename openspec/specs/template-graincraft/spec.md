# Graincraft — Woodworking Company Landing Template

## Purpose

Recreate the ColorLib **Woodwork** template (https://colorlib.com/wp/template/woodwork/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page landing template for a woodworking and construction company. The app lives at `apps/graincraft/` under the package name `@free-react-templates/graincraft`.

## Requirements

### Requirement: Navbar with branding and navigation

The page SHALL display a sticky dark (#111111) navbar with the "GRAINCRAFT" logo (gold accent), navigation links (Home, About, Services, Portfolio, FAQ, Contact), and a gold (#bfb332) "Get a Quote" CTA button. On mobile, a hamburger menu SHALL toggle open/closed.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** I see the GRAINCRAFT logo, all 6 nav links, and the "Get a Quote" button

#### Scenario: Mobile menu toggles

- **WHEN** I tap the hamburger menu button on mobile
- **THEN** the mobile nav overlay opens with all navigation links
- **WHEN** I tap a link in the mobile menu
- **THEN** the menu closes

### Requirement: Hero section with background imagery

The page SHALL display a full-width hero section with a dark overlay, a woodworking background image, the heading "New Construction, Remodeling, Additions", and a gold "Contact Us" CTA button.

#### Scenario: Hero renders heading and CTA

- **WHEN** I view the hero section
- **THEN** I see the heading text and a "Contact Us" button

### Requirement: About section with stats

The page SHALL display an about section with a photo grid on the left, the subtitle "About Woodworking", the heading "30 Years of Woodworking Experience", descriptive text, 3 stat counters (1800+ Projects, 1200+ Clients, 150+ Offices), and a "Contact Us" button.

#### Scenario: About section renders all elements

- **WHEN** I view the about section
- **THEN** I see the heading, description text, 3 stat counters, and the "Contact Us" button

### Requirement: Services section with 4 service cards

The page SHALL display a services section on a dark background with 4 service cards: Design Solutions, Exterior Design, Moldings & Trim, and Office Furniture.

#### Scenario: Services section renders 4 cards

- **WHEN** I view the services section
- **THEN** I see 4 service card titles

### Requirement: Testimonials section with client quotes

The page SHALL display a testimonials section on a light background (#faf5f0) with client photos, quotes, and names, with previous/next navigation.

#### Scenario: Testimonials renders client quotes

- **WHEN** I view the testimonials section
- **THEN** I see at least 2 client names and quotes

#### Scenario: Testimonials navigation wraps

- **WHEN** I click the "Previous" button on the first testimonial
- **THEN** the last testimonial is shown
- **WHEN** I click the "Next" button on the last testimonial
- **THEN** the first testimonial is shown

### Requirement: Portfolio gallery

The page SHALL display a portfolio section with a grid of 6 project images.

#### Scenario: Portfolio renders image grid

- **WHEN** I view the portfolio section
- **THEN** I see at least 6 project images

### Requirement: Choose Us section with 4 reasons

The page SHALL display a "Why Choose Us?" section with 4 reason cards: Highly Professional Staff, Latest Machinery, Certified Material, and Affordable Cost, each with an icon and description.

#### Scenario: Choose Us renders 4 reasons

- **WHEN** I view the Choose Us section
- **THEN** I see 4 reason titles

### Requirement: FAQ accordion

The page SHALL display a FAQ section with 3 expandable questions. Clicking a question SHALL toggle its answer open/closed.

#### Scenario: FAQ renders 3 questions

- **WHEN** I view the FAQ section
- **THEN** I see 3 question headings

#### Scenario: FAQ accordion toggles

- **WHEN** I click a FAQ question
- **THEN** the answer expands
- **WHEN** I click the same question again
- **THEN** the answer collapses

### Requirement: Footer with Component Dock link

The page SHALL display a dark footer with the GRAINCRAFT logo, address, phone, email, quick links, social icons, and a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer renders all elements

- **WHEN** I view the footer
- **THEN** I see the logo, contact info, quick links, and a "Component Dock" link

### Requirement: App renders all sections in order

The App component SHALL compose all sections in order: Navbar, Hero, About, Services, Testimonials, Portfolio, Choose Us, FAQ, Footer.

#### Scenario: All sections render

- **WHEN** the page loads
- **THEN** all 9 sections render in the correct order
- **AND** the document title is "Graincraft — Woodworking Company"
