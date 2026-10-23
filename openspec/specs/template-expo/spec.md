# Template: Expo (SEO / Digital Marketing Landing Page)

## Purpose

Expo is an SEO / digital marketing landing page. It recreates the ColorLib **Expo** design (https://colorlib.com/wp/template/expo/, preview: https://preview.colorlib.com/theme/expo/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Overview

Expo is a single-page SEO and digital marketing landing page template.
It features a sticky transparent navbar, hero with CTA, trusted-by brand logos,
about section, services/features grid, project showcase, pricing cards,
call-to-action banner, and a dark-purple footer.

## Requirements

### Navbar

Feature: Sticky transparent navbar

#### Scenario: Navbar renders logo and navigation links

- **GIVEN** the page is loaded
- **THEN** the navbar contains the text "Expo"
- **AND** the navbar contains links for "Home", "About", "Services", "Blog", "Contact"
- **AND** the navbar contains a phone CTA button

#### Scenario: Navbar is sticky

- **GIVEN** the page is loaded
- **THEN** the navbar element has role "banner"

### Hero

Feature: Hero section

#### Scenario: Hero displays heading and CTA

- **GIVEN** the page is loaded
- **THEN** the hero section displays "Build audience and grow your brand"
- **AND** the hero section displays an "Explore Us" button

#### Scenario: Hero has background image

- **GIVEN** the page is loaded
- **THEN** the hero section contains an image from picsum.photos

### Brands

Feature: Trusted brands section

#### Scenario: Brands heading and logos are shown

- **GIVEN** the page is loaded
- **THEN** the brands section displays "Trusted by over 3,000 world's leading companies"
- **AND** the brands section shows 6 brand logo placeholders

### About

Feature: About section

#### Scenario: About displays heading and description

- **GIVEN** the page is loaded
- **THEN** the about section displays "We take a steps to build a successful business"
- **AND** the about section displays an "Explore Us" button
- **AND** the about section displays an image from picsum.photos

### Features

Feature: Features / Services section

#### Scenario: Features shows heading and 4 cards

- **GIVEN** the page is loaded
- **THEN** the features section displays "How we can help"
- **AND** the features section displays cards for "Digital marketing", "Social media marketing", "Content create", "Web design"
- **AND** each feature card has a check icon

### ProjectUs

Feature: Project Us section

#### Scenario: ProjectUs displays heading and image

- **GIVEN** the page is loaded
- **THEN** the project-us section displays "We are here to help you for better solutions"
- **AND** the project-us section displays an image from picsum.photos

### Pricing

Feature: Pricing section

#### Scenario: Pricing displays 3 plans

- **GIVEN** the page is loaded
- **THEN** the pricing section displays "Affordable pricing plan"
- **AND** the pricing section displays plans "Basic", "Standard", "Premium"
- **AND** each plan has price "$700"
- **AND** each plan has a "Get Started Now" button

### CallToAction

Feature: Call to Action section

#### Scenario: CTA displays heading and button

- **GIVEN** the page is loaded
- **THEN** the cta section displays "Let's talk about your project"
- **AND** the cta section displays a "Start Talking" button

### Footer

Feature: Footer

#### Scenario: Footer has logo, columns, and copyright

- **GIVEN** the page is loaded
- **THEN** the footer contains the text "Expo"
- **AND** the footer displays navigation links
- **AND** the footer displays service links
- **AND** the footer displays contact information
- **AND** the footer contains a link to "Component Dock" pointing to "https://www.componentdock.com/"

#### Scenario: No ColorLib references in the app

- **GIVEN** the page is loaded
- **THEN** no visible text contains "ColorLib"
- **AND** no visible text contains "colorlib"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/expo/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/expo/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
