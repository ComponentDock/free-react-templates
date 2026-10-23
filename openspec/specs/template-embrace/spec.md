---
name: Embrace
slug: embrace
description: Non-profit charity & donation landing template
colorlib:
  name: Charity
  slug: charity
  url: https://colorlib.com/wp/template/charity/
  preview: https://preview.colorlib.com/theme/charity/
design_tokens:
  fonts:
    heading: Montserrat
    body: Lato
  colors:
    primary: '#e55e2a'
    dark: '#1a1a2e'
    light_bg: '#f8f9fa'
    text: '#666666'
    muted: '#999999'
    white: '#ffffff'
    progress_bar: '#e55e2a'
  layout: Bootstrap-style grid, centered container
---

# Template: Embrace (Charity & Donation)

Recreation of ColorLib "Charity" (https://colorlib.com/wp/template/charity/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript template.

## Purpose

Embrace is a charity & donation template. It recreates the ColorLib **Charity** design (https://colorlib.com/wp/template/charity/, preview: https://preview.colorlib.com/theme/charity/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Sections

### 1. Navbar

- Fixed top, transparent on hero (becomes white on scroll)
- Logo: heart icon + "Embrace" text
- Nav links: Home, About, News, Causes, Pages
- "Donate" CTA button (primary color, rounded)

### 2. Hero

- Full-width background image with dark overlay
- Heading: "Donate Together we can make a difference"
- Subtext + "Donate Now" button (white, rounded)
- Full viewport height

### 3. Service Intro

- 3-column cards overlapping hero bottom
- Icons: Wallet (Give Donation), Heart (Become Volunteer), GraduationCap (Give Scholarship)
- Each card: icon + heading + description + "Learn More" link
- White background cards with shadow

### 4. Causes (Most Popular Causes)

- Section heading + lead text
- 3 cause cards: image, progress bar, raised/goal amounts, title, date, description, "Donate Now!" button
- Data: Help Children Food ($49,112/$50,000), Help Children Health ($28,127/$30,000), Help Children Education ($21,973/$100,000)

### 5. Latest Donations

- Dark background with background image
- 4 donor profiles: circular photo, name, donation amount
- Donors: Linda Reyez ($500), Chris Worth ($1,500), Janet Morris ($250), Jessa Sy ($400)

### 6. Testimonials ("What People Says")

- Carousel of quotes
- Each: circular photo, quote text, author name
- Testimonials from Mike Fisher, Jorge Smith, Brandon White

### 7. Success Stories

- Split layout: left image, right text
- Heading + paragraph + "Read More" button

### 8. News / About / Gallery

- 3-column layout:
  - News: 2 news items with date, title, description, share/comment counts
  - About: image + text + "Learn More" button
  - Gallery: image grid/carousel with "View all gallery" button

### 9. Footer

- 3 columns:
  - About Us: text + social icons (Twitter, Facebook, Github, Dribbble, LinkedIn, YouTube)
  - Contact Info: address, email, phone with icons
  - Donation: text + "Donate Now" button
- Copyright bar: "More templates at Component Dock" + back-to-top link

## Design Tokens

- Primary: #e55e2a (coral/orange)
- Dark: #1a1a2e (navy)
- Body font: Lato, 300 weight, 14px
- Heading font: Montserrat, 700 weight
- Button style: rounded, primary color bg, white text
- Section alternating: white / light gray

## Requirements

### Feature: Navbar

- Fixed top, transparent on hero (becomes white on scroll)
- Logo: heart icon + "Embrace" text
- Nav links: Home, About, News, Causes, Pages
- "Donate" CTA button (primary color, rounded)

#### Scenario: Navbar renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Navbar band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Hero

- Full-width background image with dark overlay
- Heading: "Donate Together we can make a difference"
- Subtext + "Donate Now" button (white, rounded)
- Full viewport height

#### Scenario: Hero renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Hero band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Service Intro

- 3-column cards overlapping hero bottom
- Icons: Wallet (Give Donation), Heart (Become Volunteer), GraduationCap (Give Scholarship)
- Each card: icon + heading + description + "Learn More" link
- White background cards with shadow

#### Scenario: Service Intro renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Service Intro band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Causes (Most Popular Causes)

- Section heading + lead text
- 3 cause cards: image, progress bar, raised/goal amounts, title, date, description, "Donate Now!" button
- Data: Help Children Food ($49,112/$50,000), Help Children Health ($28,127/$30,000), Help Children Education ($21,973/$100,000)

#### Scenario: Causes (Most Popular Causes) renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Causes (Most Popular Causes) band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Latest Donations

- Dark background with background image
- 4 donor profiles: circular photo, name, donation amount
- Donors: Linda Reyez ($500), Chris Worth ($1,500), Janet Morris ($250), Jessa Sy ($400)

#### Scenario: Latest Donations renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Latest Donations band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Testimonials ("What People Says")

- Carousel of quotes
- Each: circular photo, quote text, author name
- Testimonials from Mike Fisher, Jorge Smith, Brandon White

#### Scenario: Testimonials ("What People Says") renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Testimonials ("What People Says") band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Success Stories

- Split layout: left image, right text
- Heading + paragraph + "Read More" button

#### Scenario: Success Stories renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Success Stories band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: News / About / Gallery

- 3-column layout:
  - News: 2 news items with date, title, description, share/comment counts
  - About: image + text + "Learn More" button
  - Gallery: image grid/carousel with "View all gallery" button

#### Scenario: News / About / Gallery renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the News / About / Gallery band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Footer

- 3 columns:
  - About Us: text + social icons (Twitter, Facebook, Github, Dribbble, LinkedIn, YouTube)
  - Contact Info: address, email, phone with icons
  - Donation: text + "Donate Now" button
- Copyright bar: "More templates at Component Dock" + back-to-top link

#### Scenario: Footer renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Footer band SHALL be present at its documented position with the structure, copy and tokens named above

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

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/embrace/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/embrace/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
