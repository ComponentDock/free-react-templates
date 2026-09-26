# Template: Elitaire (Photography Portfolio)

## Purpose

Recreation of the ColorLib "Elit" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source slug:** `elit`
- **Source URL:** https://colorlib.com/wp/template/elit/
- **Preview URL:** https://preview.colorlib.com/theme/elit/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/elit-free-template.jpg
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/elitaire`
- **Surge target:** `elitaire.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) at https://preview.colorlib.com/theme/elit/

| Token | Value | Usage |
|-------|-------|-------|
| Brand accent | `#df0e62` | Pink/magenta accent, active states, section bars |
| Dark bg | `#000000` | Body background, header sidebar, hero overlay |
| Dark alt | `#1a1a1a` | Darkened section backgrounds (bio, contact) |
| White text | `#FFFFFF` | Primary text on dark backgrounds |
| Muted text | `gray` / `#737373` | Secondary text, meta info |
| Light text | `#cccccc` | Dimmed text |
| Font primary | `Quicksand`, sans-serif | Body text, nav links |
| Font heading | `Oswald`, sans-serif | Headings (h1, h2, h3) |
| Font icon | `icomoon` / `flaticon` | Icon fonts |
| Button shape | Pill (border-radius: 30px) | All CTA buttons |
| Button primary | `#df0e62` bg, white text | CTA buttons, active states |
| Button size | 15px 30px padding, 14px font, uppercase | `.btn-md` |
| Form style | Bottom border only (2px gray border) | All form inputs |
| Section padding | 7em 0 (desktop), 5em 0 (tablet) | `.site-section` |
| Section bar | 100px wide, 4px tall, `#df0e62` | Decorative bar on darken-bg sections |
| Photo hover | Dark overlay + search icon | Gallery item hover state |
| Hero overlay | `rgba(0,0,0,0.4)` | Hero background overlay |
| Header width | 250px fixed left sidebar | Desktop layout |

## Section Structure (in page order)

### 1. Header (Fixed Sidebar)
- Fixed left sidebar (250px wide, full height, black background)
- Logo: "Elit Photo" text (white, uppercase, bold)
- Nav links: Home, Photos, Biography, Blog, Contact (white text, uppercase, small)
- Social icons: Facebook, Twitter, Instagram (below nav)
- Active link color: pink accent (`#df0e62`)
- Hamburger menu on mobile (replaces sidebar with offcanvas)
- Offcanvas mobile menu: slide-in from right, white bg, nav + social + copyright

### 2. Hero
- Full-screen parallax background image with dark overlay (`rgba(0,0,0,0.4)`)
- Centered content: "Welcome" heading (Oswald, uppercase, 4rem), subtitle paragraph, "Contact Me" button
- Button: pill shape (border-radius: 30px), primary pink bg, white text, uppercase
- AOS fade-up animations

### 3. Photos (Gallery)
- Full-width grid (no container padding)
- 9 photo items in a 3-column × 3-row grid (col-lg-4)
- Each item: image (300px height, object-fit cover) + dark overlay on hover + search icon
- Lightbox integration (Fancybox) on click
- AOS fade-up animations with staggered delays

### 4. Testimonials
- Dark background (`#000`)
- Section heading: "Testimonial" (Oswald, uppercase, white)
- OwlCarousel slider with 2 testimonials
- Each testimonial: circular photo (25% width), name (bold), blockquote text (white)
- Carousel navigation (prev/next arrows)

### 5. Biography
- Dark background (`#1a1a1a`) with pink accent bar (top-left, 100px × 4px)
- Section heading: "Biography" (Oswald, uppercase, white)
- Two-column layout: photo (50% width, rounded) + text content
- Text: "Hi I'm Jed" heading, paragraphs, "Photographer for 10 years" subheading
- Two-column checklist with green checkmarks (ul-check success)

### 6. Blog
- White background
- Section heading: "Blog" (Oswald, uppercase)
- 4 blog posts in a single-column list
- Each post: image (250px fixed width) + text (title, meta, excerpt) in horizontal layout
- All posts titled "My New Photography Has Been Featured in Forbes"
- Meta: "Posted by Ben Jones on Jan 18, 2019"
- Pagination: 1, 2, 3, ..., 7 (numbered, pink hover)

### 7. Contact
- Dark background (`#1a1a1a`) with pink accent bar (top-left)
- Section heading: "Contact" (Oswald, uppercase, white)
- Single-column form (col-md-8 centered): First Name, Last Name, Email, Subject, Message textarea, "Send Message" button
- Form inputs: bottom border only (2px gray), white text, no background
- Button: primary pink, pill shape

### 8. Footer
- Centered copyright text with "Component Dock" link (replacing Colorlib attribution)
- Simple text-only footer

## Gherkin Requirements

```gherkin
Feature: Elitaire — Photography Portfolio Template

  Scenario: Fixed sidebar header renders
    Given the user is on a desktop viewport
    Then a fixed left sidebar (250px wide) with black background is visible
    And the logo "Elit Photo" is displayed in white uppercase text
    And navigation links "Home", "Photos", "Biography", "Blog", "Contact" are visible
    And social icons (Facebook, Twitter, Instagram) are visible below the nav

  Scenario: Sidebar active link highlights in pink
    Given the user scrolls to the Photos section
    Then the "Photos" nav link in the sidebar is highlighted in pink (#df0e62)

  Scenario: Mobile offcanvas menu works
    Given the user is on a mobile viewport
    When the user clicks the hamburger menu icon
    Then an offcanvas menu slides in from the right
    And navigation links and social links are visible in the menu

  Scenario: Hero displays with parallax
    Given the hero section is in the viewport
    Then a full-screen parallax background image with dark overlay is visible
    And the heading "Welcome" is displayed in large uppercase text
    And a "Contact Me" pill-shaped pink button is visible

  Scenario: Photos gallery shows 9 items
    Given the photos section is scrolled into view
    Then 9 photo items are displayed in a 3-column grid
    And each photo has a hover overlay with search icon
    And clicking a photo opens a lightbox

  Scenario: Testimonials carousel works
    Given the testimonial section is scrolled into view
    Then the heading "Testimonial" is visible
    And a carousel with at least one testimonial is shown
    And each testimonial has a circular photo, name, and quote

  Scenario: Biography section renders
    Given the biography section is scrolled into view
    Then the heading "Biography" is visible on dark background
    And a pink accent bar is visible at the top-left
    And a photo and text content are displayed side by side
    And a checklist with green checkmarks is visible

  Scenario: Blog section shows posts
    Given the blog section is scrolled into view
    Then the heading "Blog" is visible
    And 4 blog post entries are displayed in a list
    And each entry has an image, title, meta, and excerpt
    And pagination numbers are visible at the bottom

  Scenario: Contact form renders
    Given the contact section is scrolled into view
    Then the heading "Contact" is visible on dark background
    And a form with First Name, Last Name, Email, Subject, and Message fields is displayed
    And a "Send Message" pink pill button is visible

  Scenario: Footer renders correctly
    Given the footer is in the viewport
    Then a copyright notice is displayed
    And a link to "https://www.componentdock.com/" is present

  Scenario: Responsive layout adapts
    Given the user is on a mobile viewport (width < 992px)
    Then the sidebar becomes a fixed top bar with hamburger
    And the main content takes full width
    And photo grid stacks to fewer columns
```

## Verification Checklist

- [ ] All 8 sections render in correct page order
- [ ] Brand accent color `#df0e62` used for buttons, active states, section bars
- [ ] Quicksand font loaded for body text
- [ ] Oswald font loaded for headings
- [ ] Fixed left sidebar (250px) on desktop with logo, nav, social
- [ ] Offcanvas mobile menu with slide-in
- [ ] Hero with parallax bg, "Welcome" heading, "Contact Me" button
- [ ] Photos gallery with 9 items in 3-col grid + hover overlays
- [ ] Testimonials carousel with 2 items
- [ ] Biography section with photo + text + checklist
- [ ] Blog section with 4 posts + pagination
- [ ] Contact form with bottom-border inputs + pink button
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Responsive: sidebar collapses on mobile, grid adapts
- [ ] Pill-shaped buttons (border-radius: 30px) for CTAs
- [ ] Placeholder images via `picsum.photos/seed/elitaire-<n>/...`
