# Spec: Makely

Recreation of ColorLib "Create" (https://colorlib.com/wp/template/create/).

## Purpose

Makely is a one-page business landing page with a top bar, navbar, hero, feature cards, gallery, about dark, testimonials, services and about band. It recreates the ColorLib **Create** design (https://colorlib.com/wp/template/create/, preview: https://preview.colorlib.com/theme/create/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Overview

Makely is a creative agency / business landing page template with a teal brand
palette, Quicksand typography, and pill-shaped buttons. It features a hero with
typed text animation, numbered feature cards, a portfolio gallery, a dark
services split, testimonials carousel, services grid, about section, team
members, blog posts, contact form, CTA banner, and a dark footer.

## Design Tokens (from preview CSS)

- **Primary:** #32dbc6 (teal/mint)
- **Text:** #4d4d4d (body), #000 (headings)
- **Footer bg:** #333333
- **Border:** #edf0f5
- **Button radius:** 30px (pill shape)
- **Font:** Quicksand (Google Fonts)
- **Check icon color:** #32dbc6 (primary teal)

## Sections (in order)

1. **TopBar** — dark bg (#000), phone + email left, social icons right
2. **Navbar** — white bg, "Makely." logo (teal dot), nav: Home, Work, Services, About, Blog, Contact
3. **Hero** — background image, "We Love To Build" + typed words (Web Apps, WordPress, Mobile Apps), "Watch Video" CTA button
4. **Features** — 3 numbered columns (01. Innovate, 02. Create, 03. Scale) with teal check items
5. **Gallery** — 6-item image grid with overlay titles
6. **AboutDark** — black bg, image left, 4 service items (Strategy, Web Dev, Art Direction, Copywriting) right
7. **Testimonials** — centered heading, carousel with quotes + avatars
8. **Services** — 6 service cards with icons (Web Design, eCommerce, Web Apps, Branding, Copywriting, Mobile Apps)
9. **About** — image + text + 2 feature items (Web & Mobile Specialties, Intuitive Thinkers)
10. **Team** — 3 members with circular photos, roles, social links
11. **Blog** — 3 blog post cards with images, titles, meta, excerpts
12. **Contact** — form (first/last name, email, subject, message) + address card
13. **CTA** — teal banner "Let's Get Started"
14. **Footer** — About, Features links, Follow Us social, Newsletter form, copyright with Component Dock link

## Requirements

### Feature: TopBar

#### Scenario: Renders phone number and email address

- **Given** the page is rendered
- **When** the TopBar is inspected
- **Then** it renders phone number and email address

#### Scenario: Renders social media icon links (Facebook, Twitter, Instagram, LinkedIn)

- **Given** the page is rendered
- **When** the TopBar is inspected
- **Then** it renders social media icon links (Facebook, Twitter, Instagram, LinkedIn)

### Feature: Navbar

#### Scenario: Shows "Makely." logo with teal dot

- **Given** the page is rendered
- **When** the Navbar is inspected
- **Then** it shows "Makely." logo with teal dot

#### Scenario: Shows navigation links: Home, Work, Services, About, Blog, Contact

- **Given** the page is rendered
- **When** the Navbar is inspected
- **Then** it shows navigation links: Home, Work, Services, About, Blog, Contact

#### Scenario: Mobile menu toggle button exists

- **Given** the page is rendered
- **When** the Navbar is inspected
- **Then** mobile menu toggle button exists

### Feature: Hero

#### Scenario: Displays "We Love To Build" heading

- **Given** the page is rendered
- **When** the Hero is inspected
- **Then** it displays "We Love To Build" heading

#### Scenario: Displays typed words animation placeholder

- **Given** the page is rendered
- **When** the Hero is inspected
- **Then** it displays typed words animation placeholder

#### Scenario: "Watch Video" CTA button visible

- **Given** the page is rendered
- **When** the Hero is inspected
- **Then** "Watch Video" CTA button visible

### Feature: Features

#### Scenario: Shows 3 feature cards with numbers 01, 02, 03

- **Given** the page is rendered
- **When** the Features is inspected
- **Then** it shows 3 feature cards with numbers 01, 02, 03

#### Scenario: Each card has a heading, description, and checklist items

- **Given** the page is rendered
- **When** the Features is inspected
- **Then** each card has a heading, description, and checklist items

### Feature: Gallery

#### Scenario: Shows 6 portfolio items in a grid

- **Given** the page is rendered
- **When** the Gallery is inspected
- **Then** it shows 6 portfolio items in a grid

#### Scenario: Each item has an image and overlay title/category

- **Given** the page is rendered
- **When** the Gallery is inspected
- **Then** each item has an image and overlay title/category

### Feature: AboutDark

#### Scenario: Dark background section

- **Given** the page is rendered
- **When** the AboutDark is inspected
- **Then** Dark background section

#### Scenario: Shows image on left

- **Given** the page is rendered
- **When** the AboutDark is inspected
- **Then** it shows image on left

#### Scenario: Shows 4 service items with icons on right

- **Given** the page is rendered
- **When** the AboutDark is inspected
- **Then** it shows 4 service items with icons on right

### Feature: Testimonials

#### Scenario: Shows "Testimonials" heading

- **Given** the page is rendered
- **When** the Testimonials is inspected
- **Then** it shows "Testimonials" heading

#### Scenario: Shows testimonial quotes with author names and avatars

- **Given** the page is rendered
- **When** the Testimonials is inspected
- **Then** it shows testimonial quotes with author names and avatars

### Feature: Services

#### Scenario: Shows "Our Services" heading

- **Given** the page is rendered
- **When** the Services is inspected
- **Then** it shows "Our Services" heading

#### Scenario: Shows 6 service cards with icons and descriptions

- **Given** the page is rendered
- **When** the Services is inspected
- **Then** it shows 6 service cards with icons and descriptions

### Feature: About

#### Scenario: Shows "About Us" heading

- **Given** the page is rendered
- **When** the About is inspected
- **Then** it shows "About Us" heading

#### Scenario: Shows image and description text

- **Given** the page is rendered
- **When** the About is inspected
- **Then** it shows image and description text

#### Scenario: Shows 2 feature items with icons

- **Given** the page is rendered
- **When** the About is inspected
- **Then** it shows 2 feature items with icons

### Feature: Team

#### Scenario: Shows "Our Team" heading

- **Given** the page is rendered
- **When** the Team is inspected
- **Then** it shows "Our Team" heading

#### Scenario: Shows 3 team member cards with photos, names, roles, descriptions,…

- **Given** the page is rendered
- **When** the Team is inspected
- **Then** it shows 3 team member cards with photos, names, roles, descriptions, social links

### Feature: Blog

#### Scenario: Shows "Blog" heading

- **Given** the page is rendered
- **When** the Blog is inspected
- **Then** it shows "Blog" heading

#### Scenario: Shows 3 blog post cards with images, titles, dates, excerpts

- **Given** the page is rendered
- **When** the Blog is inspected
- **Then** it shows 3 blog post cards with images, titles, dates, excerpts

### Feature: Contact

#### Scenario: Shows "Contact Us" heading

- **Given** the page is rendered
- **When** the Contact is inspected
- **Then** it shows "Contact Us" heading

#### Scenario: Contact form with first name, last name, email, subject, message fields

- **Given** the page is rendered
- **When** the Contact is inspected
- **Then** Contact form with first name, last name, email, subject, message fields

#### Scenario: Address/phone/email info card

- **Given** the page is rendered
- **When** the Contact is inspected
- **Then** Address/phone/email info card

### Feature: CTA

#### Scenario: Teal banner with "Let's Get Started" heading

- **Given** the page is rendered
- **When** the CTA is inspected
- **Then** Teal banner with "Let's Get Started" heading

### Feature: Footer

#### Scenario: About Us text

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** About Us text

#### Scenario: Features links

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** Features links

#### Scenario: Follow Us social icons

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** Follow Us social icons

#### Scenario: Newsletter signup form

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** Newsletter signup form

#### Scenario: Copyright line with Component Dock link

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** Copyright line with Component Dock link

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

## Verification checklist

- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
