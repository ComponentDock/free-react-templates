---
name: Counsel
description: >
  Law firm landing page template — recreation of ColorLib "Ariclaw"
  (https://colorlib.com/wp/template/ariclaw/). A single-page attorney
  website with navbar, hero, about, services, case studies, team,
  consultation CTA, testimonials, blog preview, and footer.
---

# Counsel — Law Firm Landing Page

## Purpose

Counsel is a professional law firm landing page template providing a
single-page website for attorneys and legal practices. It showcases
legal services, team members, case studies, client testimonials, and
blog content with a warm, authoritative design using gold/tan brand
colors and serif typography.

## Requirements

### Requirement: Page renders with correct title

The page SHALL display a document title containing "Counsel".

#### Scenario: Document title on load

- **WHEN** the page loads
- **THEN** the document title contains "Counsel"

### Requirement: Navbar displays all navigation links

The navbar SHALL display links for Home, About, Services, Attorneys, Blog, and Contact, plus a "Let's Talk" CTA button.

#### Scenario: Navigation links present

- **GIVEN** the navbar is visible
- **THEN** links for Home, About, Services, Attorneys, Blog, and Contact are present
- **AND** a "Let's Talk" button is visible

### Requirement: Hero section displays headline

The hero section SHALL display the heading "Finest And Strongest Law Firm Win The World" with a "More About Us" button.

#### Scenario: Hero heading visible

- **WHEN** I view the page
- **THEN** the heading "Finest And Strongest Law Firm Win The World" is visible
- **AND** a "More About Us" button is visible

### Requirement: Services section shows four services

The services section SHALL display four service cards: Get Law Advice, Review The Case, Winning Guarantee, and Fully Support.

#### Scenario: Four service cards rendered

- **WHEN** I scroll to the services section
- **THEN** four service cards are visible
- **AND** each card has a title and description

### Requirement: Team section shows three attorneys

The team section SHALL display three attorney cards with names, roles, and hover interactions.

#### Scenario: Three team members displayed

- **WHEN** I scroll to the team section
- **THEN** three team member cards are visible
- **AND** each card shows a name and role

### Requirement: Footer links to Component Dock

The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Component Dock attribution

- **GIVEN** the footer is visible
- **THEN** a link to "https://www.componentdock.com/" is present
- **AND** the link text mentions "Component Dock"

### Requirement: All sections compose correctly

The App component SHALL compose all sections in the correct order within the main landmark.

#### Scenario: All sections present

- **WHEN** the App renders
- **THEN** a banner (navbar) landmark is present
- **AND** a main landmark is present
- **AND** a contentinfo (footer) landmark is present
- **AND** headings for Hero, About, Services, Case Studies, Team, Testimonials, and Blog are visible
