# Template: ApertureX (Photography Portfolio — Sidebar Layout)

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

## Gherkin Requirements

```gherkin
Feature: ApertureX — Photography Portfolio Template (Sidebar Layout)

  Scenario: Sidebar renders correctly on desktop
    Given the user is on a desktop viewport (>= 992px)
    Then a fixed left sidebar is visible with width 250px
    And the logo "ApertureX" is visible at the top of the sidebar
    And navigation links "Home", "Photos", "Biography", "Blog", "Contact" are visible
    And social icons (Facebook, Twitter, Instagram) are visible below the nav

  Scenario: Sidebar collapses to top bar on mobile
    Given the user is on a mobile viewport (< 992px)
    Then the sidebar is replaced by a fixed top bar (70px height)
    And the logo is visible in the top bar
    And a hamburger menu icon is visible

  Scenario: Mobile menu opens on hamburger click
    Given the user is on a mobile viewport
    When the user clicks the hamburger menu icon
    Then an offcanvas menu slides in from the right
    And navigation links are visible in the mobile menu
    And a close button is visible

  Scenario: Mobile menu closes on close click
    Given the mobile menu is open
    When the user clicks the close button
    Then the mobile menu slides out

  Scenario: Hero section displays correctly
    Given the user is on any viewport
    Then a full-viewport hero background image is displayed
    And a dark overlay (40% opacity) covers the hero
    And the heading "Welcome" is visible and centered
    And a "Contact Me" pill button is visible below the heading

  Scenario: Photo gallery displays 18 images in a grid
    Given the user scrolls to the Photos section
    Then 18 photo items are displayed in a 3-column grid
    And each photo has object-fit cover with 300px height
    And hovering over a photo shows a dark overlay with a search icon

  Scenario: Photo hover overlay appears
    Given the user is on the Photos section
    When the user hovers over a photo item
    Then a dark overlay fades in over the image
    And a centered search icon becomes visible

  Scenario: Testimonials carousel works
    Given the user scrolls to the Testimonial section
    Then the heading "Testimonial" is visible
    And a carousel of testimonial cards is displayed
    And each card shows a circular portrait, author name, and blockquote
    And navigation dots are visible at the bottom
    And the user can navigate between testimonials

  Scenario: Biography section displays correctly
    Given the user scrolls to the Biography section
    Then the section has a dark background (#1a1a1a)
    And a magenta accent line is visible at the top-left
    And the heading "Biography" is visible
    And a portrait image is displayed
    And bio text paragraphs are visible
    And a two-column checklist with green checkmarks is visible

  Scenario: Blog section displays 4 entries
    Given the user scrolls to the Blog section
    Then the heading "Blog" is visible
    And 4 blog entries are displayed
    And each entry has a side image, title, metadata, and description
    And pagination links are visible at the bottom

  Scenario: Contact form renders correctly
    Given the user scrolls to the Contact section
    Then the section has a dark background
    And the heading "Contact" is visible
    And form fields for First Name, Last Name, Email, Subject, and Message are visible
    And a "Send Message" pill button is visible
    And form inputs have bottom-border-only styling

  Scenario: Footer renders correctly
    Given the user scrolls to the footer
    Then a copyright line is visible
    And the copyright mentions "Component Dock" with a link

  Scenario: Sidebar navigation links scroll to sections
    Given the user is on a desktop viewport
    When the user clicks a sidebar navigation link
    Then the page scrolls to the corresponding section

  Scenario: Section animations trigger on scroll
    Given the user scrolls down the page
    Then elements animate into view using AOS (fade-up)
    And animations have staggered delays for grouped items
```

## Verification Checklist

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
