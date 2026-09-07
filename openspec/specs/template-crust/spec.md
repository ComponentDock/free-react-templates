# Template: Crust (Bakery / Restaurant)

## Purpose

Crust is a bakery/restaurant website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Bakery" free
template (source: https://colorlib.com/wp/template/bakery/), built under a
DIFFERENT name (**Crust** — a bakery-related word evoking the outer layer of
bread/pastries — per the monorepo naming mandate: never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a full-page bakery website template (Bootstrap 4 + custom CSS)
with multiple sections: header with nav, hero banner with overlay, about
section with floating image, category grid, about-video section with play
button, reviews carousel, blog posts, and a dark navy footer. Uses Poppins
font and a gold/tan accent (#d1ab7f).

> NAMING NOTE: the ColorLib source name "Bakery" is FORBIDDEN as the app
> name. **Crust** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or any
> TEMPLATES.md name (verified 2026-09-07). Source slug + preview URL are
> recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Bakery". Listed in TEMPLATES.md under
  **Bakery (5)** (line 903). Free bakery/restaurant website template.
- **Live preview DOM — REACHABLE (verified 2026-09-07 by direct fetch):**
  `https://preview.colorlib.com/theme/bakery/` (HTTP 200). Full-page
  template with multiple sections. Stylesheets:
  `css/linearicons.css`, `css/font-awesome.min.css`, `css/bootstrap.css`,
  `css/magnific-popup.css`, `css/nice-select.css`, `css/animate.min.css`,
  `css/jquery-ui.css`, `css/owl.carousel.css`, `css/main.css` (custom token
  source). **Poppins** font (300/400/500/600/700) via cf-fonts.
- **Screenshot** (`bakery-free-template.jpg`, 1200×972): dark hero banner
  with bakery image overlay, white "LOVE WITH BAKING ITEMS" heading with
  gold border, gold "Check Our Menu" button, sections below with category
  circles, about section with floating image, reviews, blog posts, dark
  navy footer. Warm, inviting bakery aesthetic with gold/tan accent.
- **Design tokens:**
  - Brand accent: **#d1ab7f** (gold/tan — buttons, links, icons, prices,
    active states, borders)
  - Body text: **#777** (gray)
  - Headings: **#222** (dark)
  - Font: **Poppins** (300/400/500/600/700)
  - Page background: **#fff** (white)
  - Section backgrounds: **#f9f9ff** (light blue-gray for category area)
  - Hero overlay: **rgba(4,9,30,0.5)** (dark blue semi-transparent)
  - Footer: **#04091e** (dark navy)
  - Primary button: bg **#d1ab7f**, color **#fff**, border-radius **25px**
    (or 0px for "squire" variant)
  - Section padding: **120px 0**
  - Heading sizes: h1 36px, h2 30px, h3 24px, h4 18px
  - Banner heading: **72px** white with gold border-top/bottom

## Sections (in order, 1:1 from live DOM)

1. **Header** — fixed top, logo + nav (Home, About, Menu, Team, Blog, Elements, Contact),
   top bar with social icons + phone/email
2. **Hero banner** — full-screen with background image, dark overlay,
   centered content: "Whenever we bake, bake with our heart" subtitle,
   "Love with baking items" heading (72px white, gold border), description
   paragraph, "Check Our Menu" primary button (gold, square variant)
3. **About section** — left-aligned heading "Brand new app to blow your mind",
   paragraph text, floating image on right
4. **Category section** — centered heading "Category of available items",
   4-column grid of circular food category images with hover scale effect
5. **About-video section** — left text with "About Video Area" heading,
   play button on right with dark video background
6. **Review section** — dark background with overlay, carousel of reviews
   with star ratings
7. **Blog section** — centered heading, 3-column blog post cards with images,
   titles, metadata
8. **Footer** — dark navy (#04091e), multiple columns: logo/description,
   newsletter subscription, post links, Instagram feed, social icons

## Requirements

### Requirement: Header with navigation

The system SHALL render a fixed header with logo and navigation links.

#### Scenario: Header renders

- **GIVEN** the Crust app is rendered
- **WHEN** the page loads
- **THEN** a fixed header SHALL show with a logo and navigation menu
- **AND** the nav SHALL contain links: Home, About, Menu, Team, Blog, Contact
- **AND** a top bar SHALL show social icons (Facebook, Twitter, Dribbble, Behance)
  and contact info (phone, email)

### Requirement: Hero banner

The system SHALL render a full-screen hero section with background image and
overlay.

#### Scenario: Hero content

- **WHEN** the hero section renders
- **THEN** a background image SHALL be displayed with a dark overlay
  (rgba(4,9,30,0.5))
- **AND** the subtitle "Whenever we bake, bake with our heart" SHALL appear
  in white uppercase
- **AND** the heading "Love with baking items" SHALL render at 72px white
  with gold (#d1ab7f) top and bottom borders
- **AND** a description paragraph SHALL appear below
- **AND** a "Check Our Menu" button SHALL render in gold (#d1ab7f) with
  square corners (border-radius 0)

### Requirement: About section

The system SHALL render an about section with text and floating image.

#### Scenario: About content

- **WHEN** the about section renders
- **THEN** a heading "Brand new app to blow your mind" SHALL appear
- **AND** paragraph text SHALL describe the bakery
- **AND** a "Get Started Now" button SHALL render
- **AND** a floating image SHALL appear on the right side

### Requirement: Category grid

The system SHALL render a grid of food category items with circular images.

#### Scenario: Category items

- **WHEN** the category section renders
- **THEN** a centered heading "Category of available items" SHALL appear
- **AND** 4 category items SHALL display in a grid
- **AND** each item SHALL have a circular image (border-radius: 90px)
- **AND** hovering SHALL scale the image (transform: scale(1.07))
- **AND** hovering SHALL change the title color to gold (#d1ab7f)

### Requirement: Footer

The system SHALL render a dark navy footer with multiple columns and required
Component Dock attribution.

#### Scenario: Footer content

- **WHEN** the footer renders
- **THEN** a dark navy background (#04091e) SHALL display
- **AND** columns SHALL include: logo/description, newsletter, post links,
  Instagram feed
- **AND** social icons SHALL link to social profiles
- **AND** a footer text SHALL link to `https://www.componentdock.com/`
  branded as "Component Dock"

## Verification checklist

- [ ] `openspec/specs/template-crust/spec.md` exists on main with the full
      section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/crust/tasks.md` exists on main with design notes and
      the implementation task outline.
- [ ] Fidelity: structure matches the Bakery preview DOM 1:1 (header → hero
      banner → about → category → about-video → reviews → blog → footer).
- [ ] Tokens used in the app: accent #d1ab7f (gold), body #777, headings #222,
      page bg #fff, section bg #f9f9ff, footer #04091e, hero overlay
      rgba(4,9,30,0.5), button border-radius 25px (default) or 0 (squire),
      Poppins font.
