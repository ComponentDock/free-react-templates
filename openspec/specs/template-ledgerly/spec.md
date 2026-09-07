---
name: ledgerly
description: >
  Bookkeeping agency website template with hero image, services section,
  and business-focused content. Recreation of ColorLib "Book Keeping"
  (https://colorlib.com/wp/template/book-keeping/).
---

## Purpose

Ledgerly is a responsive bookkeeping agency website template designed for
accounting and financial services businesses. It features a professional
layout with a large hero section, services/features area, and clean
content sections with a warm gold and blue color scheme on white backgrounds.

- **Source URL:** https://colorlib.com/wp/template/book-keeping/
- **Preview URL:** `https://preview.colorlib.com/theme/book-keeping/` — **UNREACHABLE (404)**
- **Fallback reference:** Screenshot (`bookkeeping-free-template.jpg`, 1200×946 JPEG)
  analyzed via pixel analysis. No live CSS/JS available.
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Business Website Templates

## Design tokens (from screenshot pixel analysis)

| Token | Value | Use |
| --- | --- | --- |
| Page bg | `#ffffff` (white) | Main content background |
| Hero bg | Image (person working at desk) | Full-width hero section with overlay |
| Nav bg | `#f9f9f9` (off-white) | Top navigation bar |
| Nav border | `#e5e5e5` (light gray) | Bottom border on nav |
| Brand primary | `#30415b` (dark navy) | Headings, navigation text |
| Brand gold | `#b8823a` (warm gold) | Accent elements, icons, CTAs |
| Brand blue | `#4768b9` (medium blue) | Secondary accents, links |
| Body text | `#6B6B6B` (gray) | Paragraph text (from source CSS) |
| Heading text | `#333333` (dark gray) | Section headings |
| Card bg | `#ffffff` (white) | Service/feature cards |
| Card border | `#f0f0f0` (light gray) | Subtle card borders |
| Footer bg | `#f5f5f5` (light gray) | Footer background |
| Font | Open Sans 400/600/700 | Body text (from source CSS) |
| Heading font | Roboto Slab 400/700 | Section headings |
| Border radius | `4px` | Buttons, cards |
| Button bg | `#b8823a` (gold) | Primary CTA buttons |
| Button text | `#ffffff` | Button labels |
| Button hover | `#a0722e` (darker gold) | Hover state |
| Section padding | `80px 0` | Vertical section spacing |
| Container width | `1170px` (max) | Content container |
| Grid columns | 3 (services), 2 (features) | Content grid |
| Icon color | `#b8823a` (gold) | Service/feature icons |

## Requirements

### Requirement: Navigation header

The site SHALL have a responsive navigation header with logo and menu links.

#### Scenario: Desktop navigation renders

- **WHEN** the page loads on desktop viewport (≥992px)
- **THEN** a horizontal navigation bar displays with logo on the left and menu links on the right
- **AND** the nav background is off-white (#f9f9f9) with a light gray bottom border

#### Scenario: Mobile hamburger menu

- **WHEN** the page loads on mobile viewport (<992px)
- **THEN** a hamburger menu icon appears
- **AND** clicking it toggles a mobile navigation drawer

### Requirement: Hero section

The hero section SHALL display a large background image with overlaid text content.

#### Scenario: Hero content renders

- **WHEN** the hero section loads
- **THEN** a background image fills the section (person working at desk)
- **AND** overlaid text includes a headline and call-to-action button
- **AND** the section has appropriate min-height (≥500px)

#### Scenario: Hero CTA button

- **WHEN** the hero renders
- **THEN** a call-to-action button is visible with gold background (#b8823a)
- **AND** the button text is white
- **AND** hovering darkens the button to #a0722e

### Requirement: Services section

A services section SHALL display 3 service cards in a row.

#### Scenario: Three service cards

- **WHEN** the services section renders
- **THEN** three cards are displayed side by side (33% width each)
- **AND** each card has a gold icon at the top
- **AND** each card has a heading and description paragraph
- **AND** cards have white background with subtle border

### Requirement: Features section

A features section SHALL display feature highlights with icons and text.

#### Scenario: Feature items render

- **WHEN** the features section renders
- **THEN** feature items display with gold icons and descriptive text
- **AND** the layout alternates between icon-left/text-right and text-left/icon-right

### Requirement: About/Content section

A content section SHALL provide information about the bookkeeping services.

#### Scenario: Content section renders

- **WHEN** the about section loads
- **THEN** it displays a heading and descriptive paragraphs
- **AND** the background is white (#ffffff)

### Requirement: Contact/CTA section

A call-to-action section SHALL encourage visitors to get in touch.

#### Scenario: CTA section renders

- **WHEN** the CTA section loads
- **THEN** it displays a heading and a prominent CTA button
- **AND** the section has a contrasting background (light gray or subtle color)

### Requirement: Footer

The footer SHALL provide contact information and links.

#### Scenario: Footer renders

- **WHEN** the page footer loads
- **THEN** it displays company information, quick links, and contact details
- **AND** the footer background is light gray (#f5f5f5)
- **AND** the footer contains a link to Component Dock (https://www.componentdock.com/)

### Requirement: Responsive layout

The site SHALL be fully responsive across all viewport sizes.

#### Scenario: Mobile layout

- **WHEN** the viewport is <768px
- **THEN** all multi-column layouts stack vertically
- **AND** navigation collapses to hamburger menu
- **AND** hero text remains readable

#### Scenario: Tablet layout

- **WHEN** the viewport is 768px-991px
- **THEN** service cards may stack to 2 columns
- **AND** content remains centered and readable

### Requirement: Typography

The site SHALL use Open Sans for body text and Roboto Slab for headings.

#### Scenario: Font loading

- **WHEN** the page loads
- **THEN** Open Sans (400, 600, 700) is loaded via Google Fonts
- **AND** Roboto Slab (400, 700) is loaded via Google Fonts
- **AND** body text uses Open Sans at 14px base
- **AND** headings use Roboto Slab

### Requirement: Footer with Component Dock link

The footer SHALL link to https://www.componentdock.com/.

#### Scenario: Footer branding

- **WHEN** the page renders
- **THEN** the footer contains a link to Component Dock
- **AND** the link opens in a new tab

## Verification checklist

- [ ] Navigation header with logo and menu links
- [ ] Hero section with background image and CTA
- [ ] Services section with 3 cards (gold icons, headings, descriptions)
- [ ] Features section with alternating layout
- [ ] About/content section with paragraphs
- [ ] CTA section with prominent button
- [ ] Footer with contact info and Component Dock link
- [ ] Responsive: mobile (<768px) stacked, tablet (768-991px) 2-col
- [ ] Open Sans + Roboto Slab fonts via Google Fonts
- [ ] Gold accent (#b8823a), navy text (#30415b), gray body (#6B6B6B)
- [ ] No ColorLib references in app code
- [ ] `public/CNAME` = `ledgerly.free.componentdock.com`
- [ ] `package.json` `"homepage"` = `https://ledgerly.free.componentdock.com`
