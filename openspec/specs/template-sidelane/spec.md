# Template: Sidelane (Sidebar)

## Purpose

Sidelane is a sidebar navigation layout with a sidebar, topbar and main content. It recreates the ColorLib **Bootstrap Sidebar 05** design (https://colorlib.com/wp/template/bootstrap-sidebar-05/, preview: https://colorlib.com/etc/bootstrap-sidebar/sidebar-05/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template. ⚠️ Prep note: this slug's demo is NOT on the slug-only preview path — the live preview URL above is the authoritative one.

## Overview

A clean sidebar navigation template with a fixed left sidebar, main content area, newsletter subscribe section, and responsive mobile toggle.

## Source

- ColorLib: Bootstrap Sidebar 05
- Preview: https://preview.colorlib.com/theme/bootstrap-sidebar-05/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-sidebar-170635.jpg

## Design Tokens

- Sidebar background: `#4a6cf7` (vibrant blue/indigo)
- Sidebar text: `#ffffff` (white)
- Sidebar hover: `rgba(255,255,255,0.1)`
- Active nav accent: `#ffffff` with left border
- Page background: `#ffffff` (white)
- Heading text: `#333333`
- Body text: `#666666`
- Font: Poppins (Google Fonts)
- Newsletter input bg: `rgba(255,255,255,0.2)`
- **Surface (measured):** `#3445b4` — paints it ×7 — `background` on `#sidebar`; style.css?v=1dfc2383 (16,150 B, sha256 fb04b245985a) · <https://colorlib.com/etc/bootstrap-sidebar/sidebar-05/>
- **Brand measured:** `#3445b4` — live sheet paints it ×7 — `background` on `#sidebar`; style.css?v=1dfc2383 (16,150 B, sha256 fb04b245985a) · <https://colorlib.com/etc/bootstrap-sidebar/sidebar-05/>

## Layout

- Fixed left sidebar (w-64), full height, blue background
- Main content area with `lg:ml-64` offset
- Mobile: sidebar hidden by default, toggle via hamburger button
- Desktop: sidebar always visible

## Sections

1. **Sidebar**
   - Brand header: "Sidelane" title + "Portfolio Agency" subtitle
   - Navigation: Home, About, Works, Blog, Gallery, Services, Contacts (with lucide-react icons)
   - Newsletter subscribe: heading + email input
   - Footer: copyright + Component Dock link

2. **Topbar**
   - Hamburger menu button (mobile only)
   - No desktop nav links (sidebar handles navigation)

3. **MainContent**
   - Page heading matching original ("Sidebar #05" → "Sidelane")
   - Descriptive paragraphs

## Requirements

### Sidebar

#### Scenario: Sidebar

- renders sidebar with brand header
- renders all navigation items
- has newsletter subscribe section
- footer links to Component Dock
- is hidden on mobile by default
- toggles open via hamburger button
- closes when overlay clicked
- always visible on desktop

### Topbar

#### Scenario: Topbar

- renders hamburger menu button
- calls onMenuClick when clicked
- is hidden on desktop

### MainContent

#### Scenario: MainContent

- renders page heading
- renders descriptive paragraphs
- has white background

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
`apps/sidelane/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/sidelane/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Topbar — renders hamburger menu button
- [ ] MainContent — renders page heading
