# Template: Celestial (Creative Agency Portfolio)

## Purpose

Celestial is a creative/branding agency portfolio landing page in the
free-react-templates monorepo. It is a React recreation of the ColorLib free
"Stellar" website template design
(source: https://colorlib.com/wp/template/stellar/), built under a DIFFERENT
name (Celestial — star-themed, evoking the cosmic "Stellar" feel without
reusing the source name) per the monorepo naming mandate, with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **ColorLib source slug:** `stellar`
- **Preview URL:** https://preview.colorlib.com/theme/stellar/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/stellar-free-template.jpg

## Design Reference (Replication Findings)

### Preview DOM Analysis

The preview at `https://preview.colorlib.com/theme/stellar/` returns HTTP 200
(~35 KB HTML). CSS files: `css/base.css`, `css/vendor.css`, `css/main.css`
(~68 KB). The page is a single-page creative agency portfolio with parallax
backgrounds and a dark/light alternating section rhythm.

### Section Structure (in order)

1. **Navbar** — transparent overlay on hero, positioned absolute at top
2. **Hero** (`#home`, `.s-home`) — full-viewport parallax background image
   (`images/hero-bg.jpg`), dark overlay (`rgba(0,0,0,0.4)`), centered headline
   "We provide creative solutions to turn your ideas into digital reality",
   two CTA buttons ("More About Us" + "Play Video"), scroll indicator,
   social links (Facebook, Twitter, Instagram, Behance, Dribbble)
3. **About** (`#about`, `.s-about`) — light bg (`#FFFFFF`), numbered subhead
   "01. Who We Are", heading, 2 paragraphs of intro copy, 4-column process
   grid (Planning, Branding, Implementation, Documentation) each with
   descriptive icon + title + lorem text
4. **Services** (`#services`, `.s-services`) — dark bg (`#151515` at 65%
   opacity overlay on `images/services-bg.jpg` parallax image), white text,
   numbered subhead "02. What We Do", heading, intro paragraph, 3-column grid
   of 6 services (Brand Identity, Illustration, Web Design, Product Strategy,
   UI/UX Design, Mobile Design) each with title + description
5. **Works/Portfolio** (`#works`, `.s-works`) — light bg (`#FFFFFF`),
   numbered subhead "03. Recent Works", heading, 4-column grid of 8 portfolio
   items with overlay hover effect (image + title + description)
6. **Testimonials** — light bg (`#F1F1F1`), centered heading "What Clients
   Are Saying...", slider with 3 testimonials (quote + author + role),
   prev/next arrows
7. **Clients** (`#clients`, `.s-clients`) — light bg, numbered subhead
   "04. Selected Clients", heading, grid of 8 client logos (greyscale)
8. **Stats** (`#stats`, `.s-stats`) — dark parallax bg (`images/stats-bg.jpg`
   with `#151515` at 60% opacity overlay), 4-column stat counters (213
   Projects, 179 Happy Clients, 35 Awards, 2319 Cups of Coffee)
9. **Contact** (`#contact`, `.s-contact`) — light bg, numbered subhead
   "05. Get In Touch", heading with intro text, 3-column layout:
   - Left: address (1600 Amphitheatre Parkway, Mountain View, CA 94043)
   - Center: email subscribe form + social links (Facebook, Twitter, Instagram)
   - Right: contact info (info email, 2 phone numbers) + "Let's Talk" button
10. **Footer** — copyright with "Component Dock" link

### Design Tokens (Extracted from CSS)

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#F26522` | Buttons, subhead underlines, links, accent |
| Dark background | `#151515` | Services section, Stats section overlays |
| Dark alt | `#2a2a2b` | Secondary dark surfaces |
| Body text | `#2a2a2b` | Body copy on light sections |
| White | `#FFFFFF` | Light section backgrounds, text on dark |
| Light grey bg | `#F1F1F1` | Testimonials section |
| Teal accent | `#035D5C` | Contact section link color |
| Heading font | `Montserrat` (Google Fonts) | All headings, nav, buttons, display text |
| Body font | `Merriweather` (Google Fonts) | Body copy, paragraphs |
| Subhead font | `Montserrat` 600, uppercase, 1.6rem | Numbered section subheads |
| Display heading | `Montserrat` 600, 4.6rem | Section main headings |
| Button font | `Montserrat` | All buttons |
| Button style | `#F26522` bg, white text, `border-radius: 3px`, uppercase | Primary CTA buttons |
| Button hover | `#b8b8b8` bg + border | Secondary hover state |
| Border radius | 3px (buttons), 50%/100% (circular elements) | Minimal rounding |
| Parallax overlays | `rgba(0,0,0,0.4)` hero, `rgba(0,0,0,0.5)` services, `rgba(0,0,0,0.45)` stats | Dark image overlays |
| Header | Transparent, absolute positioned, 72px height, shrinks on scroll | Floating navbar |

### Visual Design (from Screenshot Analysis)

The screenshot shows a dark, sophisticated creative agency aesthetic:
- Full-viewport hero with a dark landscape/building photo and bold white text
- Orange accent color (`#F26522`) on buttons and subhead underlines
- Alternating light (white) and dark (near-black with image overlays) sections
- Montserrat geometric sans-serif for all headings, Merriweather serif for body
- Numbered subheads with "01.", "02." etc. prefix and orange underline
- Portfolio grid with hover overlay effects
- Clean, professional, modern agency vibe with generous white space
- Stats section with parallax dark background and large numbers

## Gherkin Requirements

### Feature: Celestial Creative Agency Portfolio

  As a visitor to a creative agency website,
  I want to explore the agency's work, services, and contact information,
  So that I can evaluate whether to hire them.

  Background:
    Given the user opens the Celestial landing page
    And the page is fully loaded

  # --- Navbar ---
  Scenario: Transparent navbar overlays the hero
    Then the navbar should be visible and overlay the hero section
    And the navbar should show the site logo on the left
    And the navbar should show navigation links on the right
    And the navbar should become sticky with a dark background on scroll

  # --- Hero ---
  Scenario: Hero section displays full-viewport parallax background
    Then the hero should occupy the full viewport height
    And the hero should display a parallax background image with dark overlay
    And the hero should show a headline about creative solutions
    And the hero should show two CTA buttons
    And the hero should show a scroll indicator
    And the hero should show social media links

  Scenario: Hero CTA buttons are clickable
    When the user clicks the "More About Us" button
    Then the page should scroll smoothly to the About section

  # --- About ---
  Scenario: About section displays agency info and process
    Then the About section should display a numbered subhead "01."
    And the About section should show a heading "Who We Are"
    And the About section should show introductory paragraphs
    And the About section should show 4 process steps in a grid
    And the 4 process steps should be: Planning, Branding, Implementation, Documentation
    And each process step should have a title and description

  # --- Services ---
  Scenario: Services section displays service offerings on dark background
    Then the Services section should have a dark background with parallax image
    And the Services section should display a numbered subhead "02."
    And the Services section should show a heading "What We Do"
    And the Services section should show 6 services in a 3-column grid
    And the 6 services should be: Brand Identity, Illustration, Web Design, Product Strategy, UI/UX Design, Mobile Design
    And each service should have a title and description
    And all text in the Services section should be white

  # --- Works/Portfolio ---
  Scenario: Portfolio section displays recent works
    Then the Works section should display a numbered subhead "03."
    And the Works section should show a heading "Recent Works"
    And the Works section should show 8 portfolio items in a 4-column grid
    And each portfolio item should have an image and title
    And each portfolio item should show an overlay on hover

  # --- Testimonials ---
  Scenario: Testimonials section shows client feedback
    Then the Testimonials section should display a heading "What Clients Are Saying..."
    And the Testimonials section should show a slider with 3 testimonials
    And each testimonial should have a quote, author name, and role
    And the slider should have previous/next navigation arrows

  Scenario: Testimonials slider navigates between items
    When the user clicks the next arrow
    Then the slider should advance to the next testimonial
    When the user clicks the previous arrow
    Then the slider should return to the previous testimonial

  # --- Clients ---
  Scenario: Clients section displays partner logos
    Then the Clients section should display a numbered subhead "04."
    And the Clients section should show a heading about selected clients
    And the Clients section should show a grid of client logos
    And the client logos should be displayed in greyscale

  # --- Stats ---
  Scenario: Stats section displays counter metrics on dark background
    Then the Stats section should have a dark background with parallax image
    And the Stats section should show 4 statistics in a row
    And the statistics should be: Projects Completed, Happy Clients, Awards Received, Cups of Coffee
    And each statistic should show a large number and a label

  # --- Contact ---
  Scenario: Contact section provides multiple contact methods
    Then the Contact section should display a numbered subhead "05."
    And the Contact section should show a heading "Get In Touch"
    And the Contact section should show a 3-column layout
    And the left column should show the office address
    And the center column should show a subscribe form and social links
    And the right column should show email and phone contact info
    And the Contact section should have a "Let's Talk" button
    And the subscribe form should have an email input and submit button

  Scenario: Contact subscribe form validates email
    When the user submits the subscribe form with an empty email
    Then the form should show a validation error
    When the user enters a valid email and submits
    Then the form should accept the submission

  # --- Footer ---
  Scenario: Footer shows copyright and branding
    Then the footer should display a copyright notice
    And the footer should link to Component Dock (https://www.componentdock.com/)

## Verification Checklist

- [ ] All 10 sections render in correct order matching the original
- [ ] Navbar is transparent over hero, sticky on scroll
- [ ] Hero is full-viewport with parallax background
- [ ] About section has 4 process steps in grid
- [ ] Services section has dark bg with 6 services in 3-col grid
- [ ] Portfolio has 8 items in 4-col grid with hover overlays
- [ ] Testimonials slider works with 3 items and prev/next navigation
- [ ] Clients section shows logo grid in greyscale
- [ ] Stats section has dark parallax bg with 4 counters
- [ ] Contact section has 3-column layout with form
- [ ] Footer links to Component Dock
- [ ] Design tokens match: brand orange #F26522, Montserrat headings, Merriweather body
- [ ] Parallax effects work on hero, services, and stats sections
- [ ] Responsive layout at mobile/tablet/desktop breakpoints
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Placeholder images use picsum.photos URLs
