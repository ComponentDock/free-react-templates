---
name: Molars
description: >
  Recreation of ColorLib "Dentures" dental clinic landing template.
  Source: https://colorlib.com/wp/template/dentures/
  Preview: https://preview.colorlib.com/theme/dentures/
design_tokens:
  font: Raleway (300, 400, 600, 700) via Google Fonts
  brand_color: "#12cad6" (teal/cyan)
  body_text: "#4d4d4d"
  footer_bg: "#333333"
  footer_text: "#737373"
  footer_link: "#999999"
  button_radius: none (square corners)
---

## Purpose

Molars is a dental clinic landing page recreated from the ColorLib "Dentures"
template. It features a hero with video play button, a services/features grid,
a free quote form, customer testimonials, a "why choose us" section, a team
section, and a multi-column footer. The template uses Raleway font and a teal
#12cad6 brand color.

## Requirements

### Requirement: Navbar displays brand and navigation

The navbar SHALL display the "Molars" brand logo and navigation links for Home,
About, Services, Testimonials, and Contact. The mobile menu SHALL open and close
via a toggle button.

#### Scenario: Desktop navbar renders all links

- **GIVEN** the page loads on a desktop viewport
- **WHEN** the navbar renders
- **THEN** the brand "Molars" and links for Home, About, Services, Testimonials, and Contact are visible

#### Scenario: Mobile menu toggle opens and closes menu

- **GIVEN** the page loads on a mobile viewport
- **WHEN** the user clicks the hamburger toggle
- **THEN** the mobile menu opens showing all navigation links

#### Scenario: Clicking a mobile link closes the menu

- **GIVEN** the mobile menu is open
- **WHEN** the user clicks a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero section with headline and CTAs

The hero SHALL display a background image overlay, a decorative play button,
the headline "Dental Clinic for Everyone", a subtitle, and two CTA buttons
("Check Out Our Services" and "About Us").

#### Scenario: Hero renders headline and CTAs

- **GIVEN** the page loads
- **WHEN** the hero section renders
- **THEN** the headline "Dental Clinic for Everyone" and two CTA links are visible

#### Scenario: CTA buttons link to correct sections

- **GIVEN** the hero renders
- **WHEN** the user inspects the CTA links
- **THEN** "Check Out Our Services" links to #services and "About Us" links to #about

### Requirement: Features grid displays six services

The features section SHALL render a 3x2 grid of six service cards, each with
an icon, title, and description.

#### Scenario: All six service cards render

- **GIVEN** the features section loads
- **WHEN** the page renders
- **THEN** cards for Periodontology, Tooth Whitening, Preventative Care, General Checkup, First Aid Treatment, and Tooth Alignment are visible

### Requirement: FreeQuote form with image

The free quote section SHALL display a form with name, email, and message fields,
a submit button, and a decorative image alongside.

#### Scenario: Quote form has required fields

- **GIVEN** the quote section loads
- **WHEN** the page renders
- **THEN** inputs for name, email, and message are visible with a "Get a quote now" button

#### Scenario: Submitting clears the form

- **GIVEN** the user fills in name, email, and message
- **WHEN** the user clicks "Get a quote now"
- **THEN** all form fields are cleared

### Requirement: Testimonials section with customer cards

The testimonials section SHALL display four customer cards, each with a photo,
name, "Customer" label, and a quote.

#### Scenario: All four testimonials render

- **GIVEN** the testimonials section loads
- **WHEN** the page renders
- **THEN** four customer names, photos, and quotes are visible

### Requirement: WhyChooseUs section with three features

The why choose us section SHALL display a heading "Why Choose us", a clinic
image, and three feature rows: Fast Support, Happy Customers, and 24/7 Support.

#### Scenario: All three features render

- **GIVEN** the why choose us section loads
- **WHEN** the page renders
- **THEN** Fast Support, Happy Customers, and 24/7 Support headings with descriptions are visible

### Requirement: Team section with three members

The team section SHALL display three team members, each with a photo, name,
specialty, social links (Facebook, Twitter, Instagram, LinkedIn), and a bio.

#### Scenario: All three team members render

- **GIVEN** the team section loads
- **WHEN** the page renders
- **THEN** three team members with names, specialties, social links, and bios are visible

### Requirement: Footer with navigation, news, newsletter, and social links

The footer SHALL display navigation links, recent news items with thumbnails,
a newsletter email form, social media links, and a copyright line linking to
Component Dock.

#### Scenario: Footer shows navigation and newsletter

- **GIVEN** the footer loads
- **WHEN** the page renders
- **THEN** navigation links, recent news, newsletter form, and social links are visible

#### Scenario: Newsletter form clears on submit

- **GIVEN** the user types an email in the newsletter field
- **WHEN** the user clicks "Send"
- **THEN** the email field is cleared

#### Scenario: Footer links to Component Dock

- **GIVEN** the footer renders
- **WHEN** the user inspects the copyright line
- **THEN** a link to https://www.componentdock.com/ with text "Component Dock" is present

### Requirement: App composes all sections

The App component SHALL compose Navbar, Hero, Features, FreeQuote, Testimonials,
WhyChooseUs, Team, and Footer in the correct order, and set the document title.

#### Scenario: Full page structure renders

- **GIVEN** the app loads
- **WHEN** the page renders
- **THEN** all sections are present and the document title is "Molars — Dental Clinic Landing"
