# Template: Refuge (Business)

> Recreation of ColorLib "Funder" (https://colorlib.com/wp/template/funder/)

## Purpose

Refuge is a business landing page with a navbar, hero, products, about band, split feature, feature cards, impact, founders, testimonials and footer. It recreates the ColorLib **Funder** design (https://colorlib.com/wp/template/funder/, preview: https://preview.colorlib.com/theme/funder/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Source Design

- **Original:** Funder — Insurance Agency Website Template
- **Preview:** https://preview.colorlib.com/theme/funder/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/funder-free-template.jpg

## Design Tokens

- **Fonts:** Oswald (headings, bold uppercase) + Work Sans (body, 300/400/700)
- **Brand color:** `#2563eb` (blue-600) — primary buttons, CTA banner, feature icons
- **Dark headings:** `#1a202c` (gray-900)
- **Light backgrounds:** `#f8fafc` (slate-50), `#f1f5f9` (slate-100)
- **Muted text:** `#64748b` (slate-500)
- **Footer bg:** `#1a202c` (dark)
- **CTA banner bg:** `#2563eb` (blue)

## Sections (in order)

1. **Navbar** — Logo "REFUGE", nav links (Home, Insurance dropdown, Services, Blog, About, Contact), "Get A Quote" button
2. **Hero** — Two-slide carousel with background images, headline + subtitle overlay
3. **Products** — "Insurance Coverage" heading, 3 insurance cards (Home, Auto, Travel) with image + text + "Learn More" button
4. **About** — "We Are Trusted Agency Company", large image + 2-column description
5. **Split Feature (left)** — Background image left, text right ("Why Choose Us")
6. **Split Feature (right)** — Background image right, text left ("Why Choose Us")
7. **Features** — 4-column cards (24/7 Support, Trusted People, 12 Years Experience, Join With Us) with lucide-react icons
8. **Impact** — Image + text with CTA ("Thousands of Houses Damage Each Year")
9. **Founders** — 2 team members with circular photos, names, titles, bios
10. **Testimonials** — Carousel of testimonial cards with photos + quotes
11. **CTA Banner** — Blue background, headline + "Contact Us" button
12. **Footer** — About text, Quick Menu links, Insurance links, Social icons, Component Dock link

## Requirements

### Feature: Navbar

#### Scenario: Renders logo text "REFUGE"

- **Given** the page is rendered
- **When** the Navbar is inspected
- **Then** renders logo text "REFUGE"

#### Scenario: Renders nav links (Home, Insurance, Services, Blog, About, Contact)

- **Given** the page is rendered
- **When** the Navbar is inspected
- **Then** renders nav links (Home, Insurance, Services, Blog, About, Contact)

#### Scenario: Renders "Get A Quote" CTA button

- **Given** the page is rendered
- **When** the Navbar is inspected
- **Then** renders "Get A Quote" CTA button

#### Scenario: Mobile toggle shows/hides mobile menu

- **Given** the page is rendered
- **When** the Navbar is inspected
- **Then** mobile toggle shows/hides mobile menu

### Feature: Hero

#### Scenario: Renders hero section with headline and subtitle

- **Given** the page is rendered
- **When** the Hero is inspected
- **Then** renders hero section with headline and subtitle

#### Scenario: Navigates between slides

- **Given** the page is rendered
- **When** the Hero is inspected
- **Then** navigates between slides

### Feature: Products

#### Scenario: Renders section heading "Insurance Coverage"

- **Given** the page is rendered
- **When** the Products is inspected
- **Then** renders section heading "Insurance Coverage"

#### Scenario: Renders 3 insurance cards (Home, Auto, Travel)

- **Given** the page is rendered
- **When** the Products is inspected
- **Then** renders 3 insurance cards (Home, Auto, Travel)

#### Scenario: Each card has title, description, and "Learn More" button

- **Given** the page is rendered
- **When** the Products is inspected
- **Then** each card has title, description, and "Learn More" button

### Feature: About

#### Scenario: Renders "We Are Trusted Agency Company" heading

- **Given** the page is rendered
- **When** the About is inspected
- **Then** renders "We Are Trusted Agency Company" heading

#### Scenario: Renders descriptive paragraphs

- **Given** the page is rendered
- **When** the About is inspected
- **Then** renders descriptive paragraphs

### Feature: Split Features

#### Scenario: Renders two split-image sections with text

- **Given** the page is rendered
- **When** the Split Features is inspected
- **Then** renders two split-image sections with text

### Feature: Features

#### Scenario: Renders 4 feature cards with icons and titles

- **Given** the page is rendered
- **When** the Features is inspected
- **Then** renders 4 feature cards with icons and titles

### Feature: Impact

#### Scenario: Renders heading and CTA button

- **Given** the page is rendered
- **When** the Impact is inspected
- **Then** renders heading and CTA button

### Feature: Founders

#### Scenario: Renders 2 founder profiles with names and titles

- **Given** the page is rendered
- **When** the Founders is inspected
- **Then** renders 2 founder profiles with names and titles

### Feature: Testimonials

#### Scenario: Renders testimonial quotes

- **Given** the page is rendered
- **When** the Testimonials is inspected
- **Then** renders testimonial quotes

### Feature: CTA Banner

#### Scenario: Renders headline and "Contact Us" button

- **Given** the page is rendered
- **When** the CTA Banner is inspected
- **Then** renders headline and "Contact Us" button

### Feature: Footer

#### Scenario: Links to componentdock.com

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** links to componentdock.com

#### Scenario: Renders Quick Menu and Insurance columns

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** renders Quick Menu and Insurance columns

#### Scenario: Renders social icons

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** renders social icons

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/refuge/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/refuge/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar — Given** the page is rendered
- [ ] Hero — Given** the page is rendered
- [ ] Products — Given** the page is rendered
- [ ] About — Given** the page is rendered
- [ ] Split Features — Given** the page is rendered
- [ ] Features — Given** the page is rendered
- [ ] Impact — Given** the page is rendered
- [ ] Founders — Given** the page is rendered
- [ ] Testimonials — Given** the page is rendered
- [ ] CTA Banner — Given** the page is rendered
