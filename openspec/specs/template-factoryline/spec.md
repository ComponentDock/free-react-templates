# Template: FactoryLine (Industrial / Manufacturing)
<!-- prep-status: shipped-as=cogwork -->
> **SHIPPED-UNDER** — the ColorLib `industries` design this prep describes already
> ships as `apps/cogwork` (<https://cogwork.free.componentdock.com>).
> Do not scaffold `apps/factoryline`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-cogwork/spec.md`.

## Purpose

Recreation of the ColorLib **Industries** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source slug:** `industries`
- **ColorLib page:** https://colorlib.com/wp/template/industries/
- **Live preview:** https://preview.colorlib.com/theme/industries/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/industries-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, lucide-react (icons), `packages/ui` shared components where possible.

## Design tokens (extracted from live preview CSS)

| Token | Value | Notes |
|---|---|---|
| Primary brand color | `#fd5f00` (orange) | CTA buttons, accent elements |
| Primary dark | `#d75100` / `#ca4c00` | Button hover states |
| Text primary | `#212529` | Headings, body text |
| Text muted | `#6c757d` | Secondary text, metadata |
| Text secondary | `#495057` | Paragraphs, descriptions |
| Pink accent | `#e83e8c` | Testimonial quote marks |
| Border accent | `#ffae7e` | Testimonial border |
| Background light | `#e9ecef` / `#f8f9fa` | Alternating section backgrounds |
| Background white | `#ffffff` | Main content background |
| Font primary | `"Montserrat", sans-serif` | Headings (weights 400, 700) |
| Font secondary | `"Oxygen", sans-serif` | Body text (weights 400, 700) |
| Button style | `.btn-outline-white` / `.btn-primary` | Orange fill for primary CTAs, white outline for secondary |
| Hero | Full-width slider with background images, dark overlay, play button for video | Multiple slides with auto-advance |

## Requirements

### Navbar

Feature: Navbar

#### Scenario: Dark sticky navbar

- **GIVEN** the user is on the page
- **THEN** a dark (#343a40) navbar is visible at the top
- **AND** the nav links are: Home, About, Services, Projects, Blog, Contact
- **AND** the navbar is responsive with a hamburger toggle on mobile

#### Scenario: Mobile hamburger menu

- **GIVEN** the viewport is narrow (< 992px)
- **WHEN** the user taps the hamburger icon
- **THEN** the navigation menu collapses open with all links visible

### Hero Slider

Feature: Hero Slider

#### Scenario: Hero slider displays on load

- **GIVEN** the user is on the page
- **THEN** a full-width hero slider is visible with background images
- **AND** each slide has a heading: "We Are Industrial Company" or "Create, Enhance and Sustain"
- **AND** each slide has a play button for a video (Vimeo link)
- **AND** navigation dots are present

#### Scenario: Slider auto-advance

- **GIVEN** the hero slider is visible
- **WHEN** the user waits
- **THEN** the slider automatically transitions to the next slide

### Services

Feature: Services Section

#### Scenario: Three service cards

- **GIVEN** the user scrolls past the hero
- **THEN** a light gray (#f8f9fa) background section is visible
- **AND** three service cards are displayed in a row
- **AND** each card has an icon, title, and description
- **AND** the services are: Automotive Parts, Maintenance Services, Green Energy

#### Scenario: Service card hover

- **GIVEN** the service cards are visible
- **WHEN** the user hovers over a card
- **THEN** the card lifts slightly with a shadow effect

### About / Engineering

Feature: About Engineering Section

#### Scenario: Two-column about section

- **GIVEN** the user scrolls to the about area
- **THEN** the heading reads "We Are Reliable Engineering In House"
- **AND** a left column shows a framed image (industrial scene)
- **AND** the layout is two-column with image on left, content on right

#### Scenario: Feature highlights

- **GIVEN** the about section is visible
- **THEN** four feature items are listed: Green Energy, Precision Mechanics, Construction Machines, Reliable and Stable
- **AND** each feature has a title and brief description

### Parallax Quote

Feature: Parallax Quote Section

#### Scenario: Full-width parallax with quote

- **GIVEN** the user scrolls past the features
- **THEN** a full-width parallax background section is visible
- **AND** the heading reads "Create, Enhance and Sustain"

### Projects

Feature: Projects Section

#### Scenario: Project portfolio grid

- **GIVEN** the user scrolls to the projects area
- **THEN** the heading reads "Our Latest Projects"
- **AND** six project cards are displayed in a 3-column grid
- **AND** each project has an image and title
- **AND** projects include: Ducting Design in Colorado, Tanks Project In California, Structural Design in New York, Stacks Design, Intercate Custom, Banker Design

#### Scenario: Project hover effect

- **GIVEN** the project cards are visible
- **WHEN** the user hovers over a project
- **THEN** an overlay appears with the project title

### Testimonials

Feature: Testimonials

#### Scenario: Customer testimonials

- **GIVEN** the user scrolls to the testimonials area
- **THEN** the heading reads "Happy Clients"
- **AND** a carousel shows customer testimonials
- **AND** each testimonial has a name (e.g. "John Smith", "Joshua Darren") and review text
- **AND** navigation dots are present

#### Scenario: Testimonial auto-advance

- **GIVEN** the testimonials section is visible
- **WHEN** the user waits
- **THEN** the carousel automatically advances to the next testimonial

### Blog

Feature: Blog Section

#### Scenario: Four blog post cards

- **GIVEN** the user scrolls to the blog area
- **THEN** the heading reads "Blog Posts"
- **AND** four blog cards are displayed in a row
- **AND** each card has an image and title link

#### Scenario: Blog hover effect

- **GIVEN** the blog cards are visible
- **WHEN** the user hovers over a card
- **THEN** an overlay or shadow effect appears

### CTA

Feature: CTA Section

#### Scenario: Download CTA section

- **GIVEN** the user scrolls past the blog
- **THEN** a blue (#007bff) background section is visible
- **AND** the heading reads "Create, Enhance and Sustain"
- **AND** a "Download This Template" white outline button is displayed

### Footer

Feature: Footer

#### Scenario: Footer layout

- **GIVEN** the user reaches the page bottom
- **THEN** a dark footer is visible
- **AND** the footer has three columns: About Us (with description and social icons), Contact Info (address, phone, email), Quick Links (About, Terms, Disclaimers, Contact)
- **AND** social media icon links are present (Twitter, Facebook, LinkedIn, Instagram)

#### Scenario: Footer copyright

- **GIVEN** the footer is visible
- **THEN** the copyright line is present
- **AND** a link to https://www.componentdock.com/ ("Component Dock") is present (replacing ColorLib attribution)

## Verification checklist

- [ ] All sections render in correct order: Navbar → Hero Slider → Services → About → Parallax Quote → Projects → Testimonials → Blog → CTA → Footer
- [ ] Montserrat + Oxygen fonts loaded via Google Fonts in index.html
- [ ] Primary orange `#fd5f00` used for CTA buttons and accent elements
- [ ] Text colors `#212529` (primary) and `#6c757d` (muted) applied correctly
- [ ] Pink accent `#e83e8c` used for testimonial quote marks
- [ ] Hero slider with auto-advance, play button, and navigation dots
- [ ] Projects grid with 6 items in 3-column layout
- [ ] Testimonials carousel with auto-advance
- [ ] Blog cards with hover overlays
- [ ] Blue CTA section at bottom
- [ ] Responsive: hamburger nav on mobile, stacked layouts on small screens
- [ ] Footer links to https://www.componentdock.com/ (branded "Component Dock")
- [ ] No references to ColorLib in app source (provenance only in spec)
- [ ] Placeholder images via `https://picsum.photos/seed/factoryline-<n>/<w>/<h>`
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Typecheck passes (`npx tsc --noEmit`)
- [ ] Lint passes (`npx oxlint src/`)
- [ ] Build succeeds (`npx vite build`)
