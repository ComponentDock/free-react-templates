# Template: Galleryvue (Photography Gallery)

Recreation of ColorLib "Capture" (https://colorlib.com/wp/template/capture/)

## Purpose

Galleryvue is a photography gallery website template featuring a fixed sidebar navigation, a 3-column masonry-style image gallery with hover overlays, and a dark footer with categories, archives, and contact information. It recreates the ColorLib "Capture" design faithfully using React, Tailwind CSS, and TypeScript.

## Requirements

### Requirement: Sidebar navigation

The template SHALL display a fixed left sidebar (20% width on desktop, collapsible on mobile) containing a logo, navigation links, and social media icons.

#### Scenario: Desktop sidebar renders with all elements

- **WHEN** the page loads on a desktop viewport
- **THEN** the sidebar is visible at the left side with the logo "Galleryvue", navigation links (Home, Gallery, About, Blog, Contact), and social icons (Facebook, Twitter, Instagram, LinkedIn)

#### Scenario: Mobile sidebar collapses

- **WHEN** the page loads on a mobile viewport
- **THEN** the sidebar is hidden and a hamburger menu button is visible

#### Scenario: Mobile sidebar toggles

- **WHEN** the user taps the hamburger menu button
- **THEN** the sidebar slides in from the left

### Requirement: Gallery grid

The template SHALL display a responsive grid of 12 photography items with background images, dark overlays, and hover-revealed text.

#### Scenario: Gallery renders 12 items

- **WHEN** the gallery section loads
- **THEN** 12 gallery items are rendered in a 3-column grid (1 column on mobile, 2 on tablet, 3 on desktop)

#### Scenario: Gallery items show overlay on hover

- **WHEN** the user hovers over a gallery item
- **THEN** the overlay darkens and the work title and tag become visible

### Requirement: Footer

The template SHALL display a dark footer with category links, archive links, contact information, and a Component Dock attribution link.

#### Scenario: Footer renders all columns

- **WHEN** the footer section loads
- **THEN** Category, Archives, and "Have a Questions?" columns are visible

#### Scenario: Footer has Component Dock link

- **WHEN** the footer renders
- **THEN** a link to https://www.componentdock.com/ is present with text "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/galleryvue/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/galleryvue/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
