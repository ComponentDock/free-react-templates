# Template: ApertureX (Photography Portfolio — Sidebar Layout)
<!-- prep-status: shipped-as=lens -->
> **SHIPPED-UNDER** — the ColorLib `elit` design this prep describes already
> ships as `apps/lens` (<https://lens.free.componentdock.com>).
> Do not scaffold `apps/aperturex`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-lens/spec.md`.

## Purpose

Recreation of the ColorLib "Elit" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source slug:** `elit`
- **Source URL:** https://colorlib.com/wp/template/elit/
- **Preview URL:** https://preview.colorlib.com/theme/elit/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/elit-free-template.jpg
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/aperturex`
- **Surge target:** `aperturex.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) at https://preview.colorlib.com/theme/elit/

| Token | Value | Usage |
|-------|-------|-------|
| Primary/accent | `#df0e62` | Magenta/pink — active nav links, carousel dots, hover states, section accent line, link hover |
| Body bg | `#000000` | Black page background |
| Section dark bg | `#1a1a1a` | Biography, Blog, Contact section backgrounds |
| Body text | `gray` | Default paragraph text |
| Heading color | `#ffffff` | All headings on dark backgrounds |
| Selection | `#000` bg / `#fff` text | Text highlight color |
| Hero overlay | `rgba(0,0,0,0.4)` | Dark overlay on hero background image |
| Section accent line | `#df0e62`, 100px × 4px | Decorative top-left line on dark sections (pseudo-element) |
| Photo hover overlay | `rgba(0,0,0,0.6)` | Dark overlay on gallery images on hover |
| Form border | `2px solid gray` | Bottom border only on form inputs |
| Form focus border | `#ffffff` | White bottom border on focused inputs |
| Carousel dots inactive | `#333333` | Inactive testimonial carousel dots |
| Carousel dots active | `#df0e62` | Active testimonial carousel dot |
| Blog meta text | `#737373` | Blog entry metadata text |
| Sidebar bg | `#000000` | Fixed left sidebar background |
| Sidebar text | `#ffffff` | Sidebar nav links and logo |
| Sidebar active link | `#df0e62` | Active/hovered sidebar nav link |
| Social hover | `#df0e62` | Social icon hover color |
| Font headings | `Oswald`, arial, sans-serif | All headings (h1–h3, section titles) |
| Font body | `Quicksand`, sans-serif | Body text, nav links, UI elements |
| Button shape | `border-radius: 30px` | Pill-shaped buttons |
| Button style | `padding: 15px 30px`, `font-size: 14px`, `font-weight: bold`, `text-transform: uppercase`, `letter-spacing: 0.1em` | CTA buttons (Contact Me, Send Message) |
| Mobile menu | White bg, 300px wide, slides from right | Offcanvas mobile nav |
| Pagination | Circular links (50% radius), hover → `#df0e62` bg | Blog section pagination |
| Accent (measured) | `#8bc34a` | paints it ×1 — `color` on `.ul-check.success li:before`; style.css (14,049 B, sha256 c749c31c84d3) · <https://preview.colorlib.com/theme/elit/> |

## Section Structure (in page order)

### 1. Sidebar Header (Fixed Left)
- Fixed position, left side, 250px wide, full viewport height, black background
- Logo text: "ApertureX" (white, uppercase, bold, 20px)
- Navigation links: Home, Photos, Biography, Blog, Contact (uppercase, white, 0.8rem)
- Social icons below nav: Facebook, Twitter, Instagram (white, hover → `#df0e62`)
- On mobile (< 992px): collapses to a top bar (70px height, fixed top) with hamburger toggle
- Hamburger menu opens offcanvas menu sliding from right

### 2. Hero Section
- Full viewport height (100vh, min 500px), background image with cover
- Dark overlay: `rgba(0,0,0,0.4)` covering entire hero
- Centered content: "Welcome" heading (Oswald, uppercase, 4rem desktop / 2.5rem mobile)
- Subtext paragraph (white, lead style)
- "Contact Me" pill button (magenta accent, `border-radius: 30px`)
- Scroll offset accounts for the fixed sidebar on desktop

### 3. Photo Gallery
- Full-width container (container-fluid, no side padding on desktop)
- 3-column grid layout (col-6 col-md-6 col-lg-4)
- 18 photo items displayed in grid rows
- Each photo: object-fit cover, 300px height (200px on mobile)
- Hover effect: dark overlay (`rgba(0,0,0,0.6)`) fades in + centered search icon appears
- Click opens lightbox (Fancybox-style modal)
- Staggered AOS fade-up animations

### 4. Testimonials
- Centered section, max-width container (col-md-8)
- "Testimonial" heading (Oswald, uppercase, white, 4rem)
- Carousel with testimonial cards (Owl Carousel equivalent)
- Each card: circular portrait photo (25% width, rounded-full), author name (white, bold), blockquote text (white)
- Navigation dots at bottom (active: `#df0e62`, inactive: `#333333`)
- Prev/next arrow buttons (semi-transparent white circles, hover → `#df0e62`)

### 5. Biography
- Dark background section (`#1a1a1a`)
- Accent line: 100px × 4px magenta (`#df0e62`) at top-left (CSS pseudo-element)
- "Biography" heading (Oswald, uppercase, white, 4rem)
- Portrait image (50% width, rounded corners)
- "Hi I'm Jed" subheading + bio paragraphs (white text)
- "Photographer for 10 years" subheading
- Two-column checklist with green checkmarks (ul-check success class)
- Each column: 3 bullet items

### 6. Blog
- Dark background section (same `#1a1a1a`)
- "Blog" heading (Oswald, uppercase, white)
- 4 blog entries, each with:
  - Side-by-side layout on desktop (image left 250px, text right)
  - Blog title (24px, white, linked)
  - Metadata line: "Posted by [Author] on [Date]" (gray, uppercase, 13px)
  - Description paragraph
- Pagination: numbered links (1, 2, 3, ..., 7) with circular styling

### 7. Contact
- Dark background section (`#1a1a1a`)
- "Contact" heading (white, 4rem)
- Form with fields:
  - First Name + Last Name (side-by-side on desktop)
  - Email (full width)
  - Subject (full width)
  - Message textarea (30 cols × 7 rows)
  - All inputs: white text, bottom border only (2px solid gray), no background, focus → white border
- "Send Message" submit button (magenta pill button)
- Form action="#" (non-functional, static)

### 8. Footer
- Centered, simple layout
- Copyright line: "Copyright © [year] All rights reserved | Made with ❤ by Component Dock"
- Links to https://www.componentdock.com/

## Requirements

### Feature: ApertureX template behaviour

Feature: ApertureX — Photography Portfolio Template (Sidebar Layout)

#### Scenario: Sidebar renders correctly on desktop

- **GIVEN** the user is on a desktop viewport (>= 992px)
- **THEN** a fixed left sidebar is visible with width 250px
- **AND** the logo "ApertureX" is visible at the top of the sidebar
- **AND** navigation links "Home", "Photos", "Biography", "Blog", "Contact" are visible
- **AND** social icons (Facebook, Twitter, Instagram) are visible below the nav

#### Scenario: Sidebar collapses to top bar on mobile

- **GIVEN** the user is on a mobile viewport (< 992px)
- **THEN** the sidebar is replaced by a fixed top bar (70px height)
- **AND** the logo is visible in the top bar
- **AND** a hamburger menu icon is visible

#### Scenario: Mobile menu opens on hamburger click

- **GIVEN** the user is on a mobile viewport
- **WHEN** the user clicks the hamburger menu icon
- **THEN** an offcanvas menu slides in from the right
- **AND** navigation links are visible in the mobile menu
- **AND** a close button is visible

#### Scenario: Mobile menu closes on close click

- **GIVEN** the mobile menu is open
- **WHEN** the user clicks the close button
- **THEN** the mobile menu slides out

#### Scenario: Hero section displays correctly

- **GIVEN** the user is on any viewport
- **THEN** a full-viewport hero background image is displayed
- **AND** a dark overlay (40% opacity) covers the hero
- **AND** the heading "Welcome" is visible and centered
- **AND** a "Contact Me" pill button is visible below the heading

#### Scenario: Photo gallery displays 18 images in a grid

- **GIVEN** the user scrolls to the Photos section
- **THEN** 18 photo items are displayed in a 3-column grid
- **AND** each photo has object-fit cover with 300px height
- **AND** hovering over a photo shows a dark overlay with a search icon

#### Scenario: Photo hover overlay appears

- **GIVEN** the user is on the Photos section
- **WHEN** the user hovers over a photo item
- **THEN** a dark overlay fades in over the image
- **AND** a centered search icon becomes visible

#### Scenario: Testimonials carousel works

- **GIVEN** the user scrolls to the Testimonial section
- **THEN** the heading "Testimonial" is visible
- **AND** a carousel of testimonial cards is displayed
- **AND** each card shows a circular portrait, author name, and blockquote
- **AND** navigation dots are visible at the bottom
- **AND** the user can navigate between testimonials

#### Scenario: Biography section displays correctly

- **GIVEN** the user scrolls to the Biography section
- **THEN** the section has a dark background (#1a1a1a)
- **AND** a magenta accent line is visible at the top-left
- **AND** the heading "Biography" is visible
- **AND** a portrait image is displayed
- **AND** bio text paragraphs are visible
- **AND** a two-column checklist with green checkmarks is visible

#### Scenario: Blog section displays 4 entries

- **GIVEN** the user scrolls to the Blog section
- **THEN** the heading "Blog" is visible
- **AND** 4 blog entries are displayed
- **AND** each entry has a side image, title, metadata, and description
- **AND** pagination links are visible at the bottom

#### Scenario: Contact form renders correctly

- **GIVEN** the user scrolls to the Contact section
- **THEN** the section has a dark background
- **AND** the heading "Contact" is visible
- **AND** form fields for First Name, Last Name, Email, Subject, and Message are visible
- **AND** a "Send Message" pill button is visible
- **AND** form inputs have bottom-border-only styling

#### Scenario: Footer renders correctly

- **GIVEN** the user scrolls to the footer
- **THEN** a copyright line is visible
- **AND** the copyright mentions "Component Dock" with a link

#### Scenario: Sidebar navigation links scroll to sections

- **GIVEN** the user is on a desktop viewport
- **WHEN** the user clicks a sidebar navigation link
- **THEN** the page scrolls to the corresponding section

#### Scenario: Section animations trigger on scroll

- **GIVEN** the user scrolls down the page
- **THEN** elements animate into view using AOS (fade-up)
- **AND** animations have staggered delays for grouped items

## Verification checklist

- [ ] Fixed sidebar renders at 250px on desktop, collapses to top bar on mobile
- [ ] Sidebar logo and nav links are visible and functional
- [ ] Social icons are visible in the sidebar
- [ ] Mobile hamburger toggles offcanvas menu
- [ ] Hero fills viewport with background image + dark overlay
- [ ] "Welcome" heading and "Contact Me" button render in hero
- [ ] Photo gallery shows 18 images in 3-column grid
- [ ] Photo hover overlay with search icon works
- [ ] Testimonials carousel scrolls through cards
- [ ] Biography section has dark bg, accent line, portrait, bio text, checklist
- [ ] Blog section shows 4 entries with pagination
- [ ] Contact form renders all fields with correct styling
- [ ] "Send Message" pill button renders
- [ ] Footer has copyright with Component Dock link
- [ ] AOS animations trigger on scroll
- [ ] Responsive layout works at all breakpoints
- [ ] No ColorLib references in app code
- [ ] 100% test coverage (lines, functions, branches, statements)
