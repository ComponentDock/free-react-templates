# Template: GiveAid (Charity & Child Adoption)

> Recreation of ColorLib "Adopted" (https://colorlib.com/wp/template/adopted/)

## Purpose

GiveAid is a single-page charity/child adoption landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Adopted" design, built with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a warm, family-oriented adoption page: a top bar with social
icons + login CTA, a white navbar with brand + dropdown navigation, a full-bleed
hero carousel with child photos and "Adopt Now" buttons, an about section with
SVG illustration + "Steps to adopt" heading, a 7-step accordion, a "Waiting
Children" card grid, a "Featured Stories" overlay grid, a newsletter subscription
form, and a coral-colored footer. GiveAid recreates that structure section-for-
section with matching layout, colors, typography, and content types (no ColorLib
assets copied).

## Design Tokens

| Token       | Value               | Usage                                               |
| ----------- | ------------------- | --------------------------------------------------- |
| brand       | #bc5148             | Warm coral — primary buttons, active nav, footer bg |
| cta-gold    | #f4b214             | Amber — top bar login button                        |
| topbar-bg   | #dee2e6             | Light gray top bar                                  |
| text-gray   | #868e96             | Body text                                           |
| dark        | #000                | Headings                                            |
| white       | #fff                | Navbar bg, hero text                                |
| mist        | #f8f9fa             | Waiting Children section bg                         |
| font-body   | Open Sans (300–700) | Body text                                           |
| font-accent | Sacramento cursive  | Child name in hero                                  |

## Requirements

### Requirement: TopBar renders social links and login CTA

The template SHALL display a top bar with social media icons (Twitter, Facebook,
Instagram, LinkedIn), a "Sponsor" text link, and a gold "Login" CTA button.

#### Scenario: TopBar renders all social icon links

- **GIVEN** the page loads
- **THEN** the top bar shows links for Twitter, Facebook, Instagram, and LinkedIn

#### Scenario: TopBar renders Sponsor and Login

- **GIVEN** the page loads
- **THEN** the top bar shows a "Sponsor" link and a "Login" button with gold background

### Requirement: Navbar renders brand and navigation links

The template SHALL display a sticky navbar with the brand name "GiveAid", links
for Home, Adoption (with dropdown), Success Stories, About, and Contact.

#### Scenario: Navbar renders brand and all links

- **GIVEN** the page loads
- **THEN** the navbar shows "GiveAid" brand text and 5 navigation links

#### Scenario: Adoption dropdown shows sub-items

- **GIVEN** the user hovers over the Adoption link
- **THEN** a dropdown appears with "Adoption", "Waiting Children", and "How to Adopt"

#### Scenario: Mobile menu toggle works

- **GIVEN** the viewport is narrow
- **WHEN** the user clicks the hamburger button
- **THEN** the mobile navigation menu opens

### Requirement: Hero carousel displays children for adoption

The template SHALL display a full-width hero section with a background image,
child name in cursive font, heading, description text, and a primary CTA button.
The carousel auto-advances every 6 seconds with dot navigation.

#### Scenario: Hero renders first slide content

- **GIVEN** the page loads
- **THEN** the hero shows the heading "Needs a Caring Parents" and "Adopt Her Now!" button

#### Scenario: Hero carousel advances on dot click

- **WHEN** the user clicks the second dot
- **THEN** the hero transitions to the second slide with "Needs a Loving Parents"

### Requirement: About section and Steps accordion

The template SHALL display an about section with a heart illustration, descriptive
text, and an outline "Adopt a child now" button, followed by a 7-step adoption
process accordion.

#### Scenario: About section renders

- **GIVEN** the page loads
- **THEN** the about section shows "Steps to adopt & foster a child" heading and "Adopt a child now" button

#### Scenario: Accordion expands and collapses

- **WHEN** the user clicks the first accordion step
- **THEN** the step content toggles visibility

### Requirement: Waiting Children section displays child cards

The template SHALL display a section with heading "Waiting Children", 5 child
cards with photos and names/ages, and a "Find More Waiting Children" button.

#### Scenario: Waiting Children renders

- **GIVEN** the page loads
- **THEN** the section shows 5 child cards with names (Edward, Mellisa, Mark, Jessa, Ben) and ages

#### Scenario: Find More button is present

- **GIVEN** the page loads
- **THEN** a "Find More Waiting Children" button is visible

### Requirement: Featured Stories section displays story overlays

The template SHALL display a 3-column grid of featured story cards with date,
title, and hover overlay effect.

#### Scenario: Featured Stories renders 3 cards

- **GIVEN** the page loads
- **THEN** 3 story cards are visible with dates and titles

### Requirement: Newsletter subscription form

The template SHALL display a newsletter section with name input, email input,
and a "Subscribe" button.

#### Scenario: Newsletter form renders

- **GIVEN** the page loads
- **THEN** the form shows name and email inputs plus a "Subscribe" button

#### Scenario: Newsletter form accepts input

- **WHEN** the user types in the name and email fields
- **THEN** the fields display the entered values

### Requirement: Footer with Component Dock link

The template SHALL display a coral-colored footer with 4 columns (About, Contact
& Address, Quick Links, Social icons) and a copyright line linking to Component
Dock.

#### Scenario: Footer renders all sections

- **GIVEN** the page loads
- **THEN** the footer shows About, Contact & Address, Quick Links, and Social sections

#### Scenario: Footer links to Component Dock

- **GIVEN** the page loads
- **THEN** the copyright line contains a "Component Dock" link pointing to https://www.componentdock.com/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/giveaid/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/giveaid/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] TopBar renders social links and login CTA — the top bar shows links for Twitter, Facebook, Instagram, and LinkedIn
- [ ] Navbar renders brand and navigation links — the navbar shows "GiveAid" brand text and 5 navigation links
- [ ] Hero carousel displays children for adoption — the hero shows the heading "Needs a Caring Parents" and "Adopt Her Now!" button
- [ ] About section and Steps accordion — the about section shows "Steps to adopt & foster a child" heading and "Adopt a child now" button
- [ ] Waiting Children section displays child cards — the section shows 5 child cards with names (Edward, Mellisa, Mark, Jessa, Ben) and ages
- [ ] Featured Stories section displays story overlays — 3 story cards are visible with dates and titles
- [ ] Newsletter subscription form — the form shows name and email inputs plus a "Subscribe" button
