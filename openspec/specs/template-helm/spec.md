---
name: Helm
description: >
  Technology company landing page recreated from ColorLib "Cruise"
  (https://colorlib.com/wp/template/cruise/). DM Sans font, coral-orange
  primary (#ff5533), dark footer, centered logo navbar, full-width hero
  overlay, 3-column feature cards, alternating split features, testimonial,
  4-column blog grid, newsletter footer.
tags: [landing, technology, corporate]
---

# Template: Helm (Technology Landing)

Recreation of ColorLib "Cruise" (https://preview.colorlib.com/theme/cruise/).

## Purpose

Helm is a free technology company landing page template built with React 19,
Tailwind CSS 4, and TypeScript. It recreates the ColorLib "Cruise" design
under the name "Helm" with a centered logo navbar, full-width hero overlay,
3-column feature cards, alternating split features, a testimonial block,
4-column blog grid, and a newsletter footer. All designs use picsum.photos
placeholders and DM Sans via Google Fonts.

## Design tokens

<!-- brand-claim:2026-10-23 -->
| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Brand (stated in this prep) | `#ff5533` | live sheet paints it ×17 — `border-color` on `.form-control:active, .form-control:focus`; style.css (20,351 B, sha256 b2a05d8ba61e) · <https://preview.colorlib.com/theme/cruise/> |

Recorded so the palette is machine-readable: the prep already states this colour in its design notes, and this row carries the same value with the live-sheet evidence.

## Requirements

### Requirement: Navbar displays all navigation links

The navbar SHALL render a centered "Helm" logo with left navigation (Home,
Technology, Careers) and right navigation (About, Blog, Contact).

#### Scenario: Left navigation links

- **GIVEN** I am on the Helm page
- **WHEN** I look at the left navigation
- **THEN** I see "Home", "Technology", and "Careers" links

#### Scenario: Right navigation links

- **GIVEN** I am on the Helm page
- **WHEN** I look at the right navigation
- **THEN** I see "About", "Blog", and "Contact" links

#### Scenario: Logo

- **GIVEN** I am on the Helm page
- **WHEN** I look at the center of the navbar
- **THEN** I see the "Helm" logo text

### Requirement: Hero displays the main headline

The hero section SHALL display a full-width background image with a centered
heading and subtitle.

#### Scenario: Hero heading

- **GIVEN** I am on the Helm page
- **WHEN** I look at the hero section
- **THEN** I see the heading "We can make it together"

#### Scenario: Hero subtitle

- **GIVEN** I am on the Helm page
- **WHEN** I look below the hero heading
- **THEN** I see a subtitle paragraph

### Requirement: What We Do section shows three feature cards

The What We Do section SHALL display a section label, heading, subtitle, and
three feature cards with images, titles, descriptions, and "Learn More" links.

#### Scenario: Section label and heading

- **GIVEN** I scroll to the What We Do section
- **WHEN** I look at the section
- **THEN** I see "What We do" label and a heading

#### Scenario: Three feature cards

- **GIVEN** I scroll to the What We Do section
- **WHEN** I count the feature cards
- **THEN** I see three cards each with an image, title, and "Learn More" link

### Requirement: Features section shows two split rows

The Our Features section SHALL display two alternating rows, each with a
large image and a numbered text sidebar.

#### Scenario: Numbered captions

- **GIVEN** I scroll to the Our Features section
- **WHEN** I look at the captions
- **THEN** I see "01." and "02."

#### Scenario: Feature images

- **GIVEN** I scroll to the Our Features section
- **WHEN** I count the images
- **THEN** I see two large images

### Requirement: Future Design section shows four feature boxes

The Design for the Future section SHALL display four feature boxes in a
2x2 grid with titles and descriptions.

#### Scenario: Feature titles

- **GIVEN** I scroll to the Design for the future section
- **WHEN** I look at the feature titles
- **THEN** I see "Creative Technology", "World-class Quality" (twice), and "Deep Resources"

### Requirement: Testimonial section displays a quote

The testimonial section SHALL display a blockquote with a quote icon,
testimonial text, and attribution.

#### Scenario: Testimonial quote

- **GIVEN** I scroll to the testimonial section
- **WHEN** I look at the blockquote
- **THEN** I see the quote text and attribution "Mike Dorney — CEO and Co-Founder"

### Requirement: Blog section shows four post cards

The blog section SHALL display four blog post cards with images, dates,
titles, and "Read More" links.

#### Scenario: Four blog cards

- **GIVEN** I scroll to the blog section
- **WHEN** I count the blog cards
- **THEN** I see four cards each with an image, date, title, and "Read More" link

### Requirement: Footer renders all columns

The footer SHALL display About Us, Features, Newsletter, and social links
with a copyright line linking to Component Dock.

#### Scenario: Footer headings

- **GIVEN** I scroll to the footer
- **WHEN** I look at the headings
- **THEN** I see "About Us", "Features", and "Subscribe to Newsletter"

#### Scenario: Newsletter form

- **GIVEN** I scroll to the footer
- **WHEN** I enter an email and click Subscribe
- **THEN** the input clears

#### Scenario: Component Dock link

- **GIVEN** I scroll to the footer
- **WHEN** I look at the copyright line
- **THEN** I see a link to "Component Dock" at https://www.componentdock.com/

### Requirement: Footer links to Component Dock

Every template's footer MUST link https://www.componentdock.com/ branded as
"Component Dock".

#### Scenario: Component Dock attribution

- **GIVEN** I am on the Helm page
- **WHEN** I scroll to the footer
- **THEN** I see a link labeled "Component Dock" pointing to https://www.componentdock.com/

### Requirement: Design tokens match the ColorLib Cruise source

The template SHALL use DM Sans font, coral-orange primary (#ff5533), dark
teal-gray body text (#364d59), light section backgrounds (#f8f9fa), and a
black footer.

#### Scenario: Primary color

- **GIVEN** I inspect the rendered page
- **WHEN** I look at accent elements
- **THEN** they use coral-orange (#ff5533) primary color

#### Scenario: Font family

- **GIVEN** I inspect the rendered page
- **WHEN** I check the font
- **THEN** it uses DM Sans via Google Fonts

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/helm/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/helm/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar displays all navigation links — I see "Home", "Technology", and "Careers" links
- [x] Hero displays the main headline — I see the heading "We can make it together"
- [x] What We Do section shows three feature cards — I see "What We do" label and a heading
- [ ] Features section shows two split rows — I see "01." and "02."
- [x] Future Design section shows four feature boxes — I see "Creative Technology", "World-class Quality" (twice), and "Deep Resources"
- [x] Testimonial section displays a quote — I see the quote text and attribution "Mike Dorney — CEO and Co-Founder"
- [x] Blog section shows four post cards — I see four cards each with an image, date, title, and "Read More" link
