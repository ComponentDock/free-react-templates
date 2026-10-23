# Template: KeyForge (Locksmith Services Landing)

Recreation of ColorLib "Locksmith" (https://colorlib.com/wp/template/locksmith/)

## Purpose

KeyForge is a locksmith services landing page with a hero slider, a quote request form, a services grid, an about band and testimonials.

It recreates the ColorLib **Locksmith** design (https://colorlib.com/wp/template/locksmith/, preview: https://preview.colorlib.com/theme/locksmith/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Overview

A professional locksmith and security services landing page with a hero slider,
quote request form, services grid, about section, and testimonials.

## Design Tokens (from preview screenshot analysis)

- **Brand accent:** golden yellow `#f0a500` / `#e6a200`
- **Dark navy:** `#1a1a2e` for headings and nav
- **Body text:** `#555555`
- **Muted text:** `#999999`
- **Background:** white `#ffffff`
- **Section alt bg:** `#f9f9f9` light gray
- **Font heading:** 'Cinzel' serif (Google Fonts)
- **Font body:** 'Poppins' sans-serif (Google Fonts)

## Sections (top to bottom)

1. **Navbar** — white sticky bar; logo "KeyForge" left; nav links (Home, About, Services, Shop, Pages, News, Contact) center; gold phone CTA button right; mobile hamburger menu
2. **Hero Slider** — full-width background image with dark overlay; small gold label "BEST LOCKSMITH"; large white heading "We Provide Best Locksmith Services All Over World"; gold "CONTACT US" button; left/right carousel arrows; 3 slides auto-rotating
3. **Quote Form Bar** — white card overlapping hero bottom; "GET A QUOTE" heading; Name input, Phone input, Services dropdown, gold "GET A QUOTE" submit button
4. **Services Section** — "OUR SERVICES" gold small text; "SERVICES WE OFFER" dark heading; 6-item grid (Locksmith Services, Safes & Locks, Access Control, Security Doors, Alarm System, Video Surveillance); each with gold diamond icon, bold title, lorem description
5. **About Section** — two-column: image left, text right with "WHY CHOOSE US" heading, description, feature list with checkmarks
6. **Testimonials** — customer quotes with avatar, name, role; carousel dots
7. **Footer** — dark background; 4-column grid (About, Quick Links, Services, Contact); Component Dock attribution; back-to-top button

## Requirements

### Navbar

#### Scenario: Navbar

- Renders brand name "KeyForge"
- Shows all nav links
- Phone CTA button visible on desktop
- Mobile hamburger toggles menu

### Hero Slider

#### Scenario: Hero Slider

- Displays slide heading and description
- Auto-rotates every 5 seconds
- Prev/next buttons navigate slides
- CONTACT US button visible

### Quote Form

#### Scenario: Quote Form

- Shows all three input fields
- Submit button triggers form
- Validates required fields

### Services

#### Scenario: Services

- Renders all 6 service cards
- Each card shows icon, title, description

### About

#### Scenario: About

- Shows heading and feature list
- Displays image placeholder

### Testimonials

#### Scenario: Testimonials

- Shows customer quotes
- Displays avatar and name

### Footer

#### Scenario: Footer

- Links to Component Dock
- Shows contact info
- Back-to-top button present

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
`apps/keyforge/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/keyforge/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
