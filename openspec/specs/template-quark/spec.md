# Template: Quark (Creative Agency / Portfolio)

## Purpose

Quark is a single-page multi-section CREATIVE AGENCY / PORTFOLIO template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib "Atomic" free template (source:
https://colorlib.com/wp/template/atomic/), built under a DIFFERENT name
(**Quark**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 + jQuery template with an Owl Carousel slider,
Animsition page transitions, and Ionicons. The recreation replaces all
framework-specific libraries with React equivalents and lucide-react icons.

**WHAT MAKES QUARK DISTINCT (signature behaviors):**

1. **Split hero with overlapping image.** A full-width hero section with a
   light beige (`#f2f0eb`) left half containing the headline, subtext, and
   a bright-blue CTA button, and a right half occupied by a plant/succulent
   photo. A circular play button overlays the image. The hero has a layered
   box-shadow at its bottom edge creating depth against the features section.

2. **Three-column icon features with subtle shadow layering.** Below the hero,
   a white section with a `templateux-overlap` shadow row contains three
   icon+heading+description blocks (Intuitive Thinking, Orange for Carrots,
   Infinite Posibilities). Each icon is a light-gray outline style.

3. **Two-column "about" section with image + three small features.** A
   `templateux-section` with a 2-column layout (image left, text right) under
   the heading "Good Design is a Good Start", followed by three small
   feature blocks (Regular Update, Infinite Posibilities, Good Security)
   each with a small icon.

4. **Image gallery carousel.** A full-width Owl Carousel slider showing
   portfolio images (slider-2, slider-3, slider-4) with navigation arrows.

5. **Four-card portfolio grid (bg-light).** Four thumbnail-content blocks on
   a `#f8f9fa` light background, each with an image, a heading, and a
   short description.

6. **Blue counter/stats section with play-video CTA.** A `bg-primary`
   (`#0389FF`) section containing a "Play Video" heading, a subtext block,
   and three stat counters (0 / 0 / 0 in the original) in white on blue.

7. **Testimonial carousel.** A section with testimonial quotes in a slider,
   each with an author attribution and a "Download for free" CTA button.

8. **Five-column footer widget grid.** A `bg-light` footer with five widget
   columns: About, Learn More, Support, About Us, and a Connect With Us
   social block.

## Naming

The ColorLib source name "Atomic" is FORBIDDEN as the app name. **Quark**
is the new, original name — single lowercase word, kebab-case, no collision
with `apps/`, `openspec/specs/`, `docs/templates/`, or any TEMPLATES.md name
(verified: zero hits for `quark` in `ls apps/`, `ls openspec/specs/`).
Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Atomic" (page title: "Atomic"). Listed in
  TEMPLATES.md at line 897 (first unchecked item). The
  `wp/template/atomic/` slug appears exactly ONCE.
- **Live preview — REACHABLE (verified by direct fetch):**
  **`https://preview.colorlib.com/theme/atomic/`** (HTTP 200, 19,204 bytes).
  Stylesheets: `css/style.css` (132,719 bytes — Bootstrap 4 base + custom
  Atomic styles). Fonts: "Work Sans" via Google Fonts `<link>`, Ionicons
  icon font (REPLACE with lucide-react, do NOT ship). Scripts: jQuery,
  Owl Carousel, Animsition (REPLACE with React equivalents).
- **Live DOM structure (from fetched HTML + CSS):**
  - `body` (Work Sans, 1rem, `#212529`, white bg) →
    `div#site-wrap.js-animsition.animsition` →
    `header.templateux-navbar.dark` (fixed, transparent overlaying hero):
      `div.container` → `div.row` → `div.col-3.templateux-logo` ("Atomic",
      bold, dark) + `nav.col-9.site-nav` (links: Home, About, Services,
      Gallery, Blog, Contact — all uppercase, light gray `#888888`,
      active in dark `#222222`).
    - `div.templateux-cover` (hero, min-height 800px):
      `div.container` → `div.row.align-items-lg-center` →
      `div.col-lg-6.text-center.order-lg-2` (right image column:
        plant/succulent photo, circular play button overlay) +
      `div.col-lg-6.order-lg-1` (left text column):
        `h1.heading` ("Design a better website template.", 50px, black)
        + `<p>` subtext + `a.btn.btn-primary.py-3.px-4` ("Free Download",
          `#0389FF` bg, white text, 0.25rem radius).
    - `div.templateux-section` (features, white bg):
      `div.container` → `div.row` → `div.col-md-12.templateux-overlap`
        (shadow layer) → `div.row` → three `div.col-md-4` each with
        `div.media.block-icon-1` (outline icon + `h3.h5` heading +
        `<p>` description). Headings: Intuitive Thinking, Orange for
        Carrots, Infinite Posibilities.
    - `div.templateux-section` (about, white bg):
      `h2.heading` ("Good Design is a Good Start", 30px) + 2-column
        layout (image left, text right with heading + paragraph + 3 small
        feature blocks with icons).
    - `div.owl-carousel.wide-slider` (gallery carousel): images
      slider-2.jpg, slider-3.jpg, slider-4.jpg with nav arrows.
    - `div.templateux-section.bg-light` (portfolio, `#f8f9fa` bg):
      four `div.block-thumbnail-content` blocks (image + heading +
        short paragraph).
    - `div.templateux-section.bg-primary` (stats/counter, `#0389FF` bg):
      heading + description + three `div.templateux-counter.text-center`
        (`span.templateux-number` 50px white + `span.templateux-label`
        uppercase white opacity 0.5).
    - `div.templateux-section` (testimonials):
      `div.col-md-8.testimonial-wrap` →
        `div.owl-carousel.wide-slider-testimonial` → quote blocks with
        author attribution + `a.btn.btn-primary` ("Download for free").
    - `footer.templateux-footer.bg-light` (`#f8f9fa`):
      five `div.block-footer-widget` columns: About (text + social links),
        Learn More (How it works? Useful Tools Pricing Sitemap FAQ),
        Support (Contact Us Help Desk Knowledgebase), About Us (About Us
        Careers), Connect With Us (social icons). Copyright line at bottom.
- **Screenshot (`atomic-free-template.jpg`), viewed in analysis:**
  minimalist, modern, warm-professional aesthetic. Split hero balancing
  digital text and organic plant imagery. Layered shadows between sections
  creating a 3D page feel. Clean sans-serif typography. Bright blue
  accent (`#1e90ff` in screenshot / `#0389FF` in live CSS) for CTAs.
  Overall: balanced, approachable, design-focused brand feel.

## Design tokens

| Token                | Value                            | Notes                                                                          |
| -------------------- | -------------------------------- | ------------------------------------------------------------------------------ |
| `--color-primary`    | `#0389FF`                        | CTA buttons, bg-primary section, link hover; CSS var `--primary:#0389FF`       |
| `--color-primary-hover` | `#006ecf`                     | Button hover state                                                             |
| `--color-hero-bg`    | `#f2f0eb`                        | Hero section left-column background (warm light beige from screenshot)         |
| `--color-page-bg`    | `#ffffff`                        | Body and features section background                                           |
| `--color-light-bg`   | `#f8f9fa`                        | Portfolio grid section + footer bg (`bg-light`)                                |
| `--color-ink`        | `#212529`                        | Body text color                                                                |
| `--color-heading`    | `#000`                           | h1 heading color (50px, font-weight 500)                                       |
| `--color-muted`      | `#888888`                        | Nav link text, secondary headings                                               |
| `--color-desc`       | `#999999`                        | Description paragraphs, feature text                                           |
| `--color-icon`       | `#cccccc`                        | Outline feature icons                                                          |
| `--font-body`        | "Work Sans", arial, sans-serif   | Google Fonts `<link>`; source loads via CSS @import; body 1rem/1.5              |
| `--font-heading`     | inherit (Work Sans)              | h1: 50px, weight 500; h2: 30px; h3: h5 (18px); heading class: 30px/50px/18px |
| `--btn-radius`       | `0.25rem` (4px)                  | Default Bootstrap `.btn` radius                                                 |
| `--btn-padding`      | `0.375rem 0.75rem`               | Default; hero CTA uses `.py-3.px-4` (larger)                                   |
| `--shadow-hero`      | layered box-shadow               | Creates depth between hero and features section                                |
| `--counter-size`     | `50px`                           | Stat counter number size                                                       |
| `--counter-label`    | uppercase, white, opacity 0.5    | Stat counter label                                                             |

## Requirements

### Requirement: Page shell and navigation

The system SHALL render the fixed transparent navbar overlaying the hero
section, with the brand name on the left and navigation links on the right.

#### Scenario: Navbar rendering

- **GIVEN** the Quark app is rendered on a desktop viewport
- **THEN** a fixed navbar SHALL overlay the hero with transparent background
- **AND** the brand "Quark" SHALL render on the left in bold dark text
- **AND** navigation links SHALL render on the right: Home, About, Services,
  Gallery, Blog, Contact — all uppercase, light gray `#888888`
- **AND** the active/home link SHALL be dark `#222222`

#### Scenario: Responsive navbar

- **GIVEN** a viewport at or below 768px
- **THEN** the navigation links SHALL collapse into a hamburger menu
- **AND** the menu SHALL be toggleable

### Requirement: Split hero section

The hero SHALL display a split layout with text content on the left and a
photograph on the right, with a circular play button overlay and a
bright-blue CTA button.

#### Scenario: Hero layout

- **GIVEN** the Quark app is rendered on a desktop viewport
- **THEN** the hero SHALL span full width with minimum height 800px
- **AND** the left column (order-lg-1) SHALL contain:
  - h1 heading "Design a better website template." (50px, black, bold)
  - A descriptive paragraph in gray `#999999`
  - A bright-blue `#0389FF` CTA button ("Free Download") with white text
    and `py-3 px-4` padding
- **AND** the right column (order-lg-2) SHALL display a placeholder image
  (use `https://picsum.photos/seed/quark-hero/800/800` — a succulent/plant
  style image)
- **AND** a circular play button (light gray `#e0e0e0` bg, white play icon)
  SHALL overlay the image
- **AND** the hero background on the left side SHALL be the warm beige
  `#f2f0eb`

#### Scenario: Hero responsive

- **GIVEN** a viewport at or below 768px
- **THEN** the columns SHALL stack vertically (image below text)
- **AND** no horizontal overflow SHALL occur

### Requirement: Three-column icon features

Below the hero, a white section with a shadow layer SHALL display three
feature blocks each with an outline icon, heading, and description.

#### Scenario: Features rendering

- **GIVEN** the Quark app is rendered
- **THEN** three feature blocks SHALL render in a row (3-column grid)
- **AND** each block SHALL contain:
  - A light-gray `#cccccc` outline icon (use lucide: Lightbulb, Scissors,
    Infinity — matching the source's iconography)
  - A heading (e.g. "Intuitive Thinking", "Orange for Carrots",
    "Infinite Posibilities")
  - A description paragraph in `#999999`
- **AND** the section SHALL have a subtle layered shadow at its top edge
  (the `templateux-overlap` effect)

### Requirement: About section

A two-column "about" section with an image on the left and text content
on the right, followed by three small feature blocks.

#### Scenario: About layout

- **GIVEN** the Quark app is rendered
- **THEN** an h2 heading "Good Design is a Good Start" (30px) SHALL render
- **AND** a 2-column layout SHALL follow: image left, text right
- **AND** the text side SHALL contain a heading, a paragraph, and a link
- **AND** below the 2-column layout, three small feature blocks SHALL
  render (Regular Update, Infinite Posibilities, Good Security) each with
  an icon, heading, and short description

### Requirement: Gallery carousel

A full-width image carousel SHALL display portfolio images with navigation.

#### Scenario: Gallery rendering

- **GIVEN** the Quark app is rendered
- **THEN** an image carousel/slider SHALL render with at least 3 images
- **AND** navigation arrows SHALL be present for prev/next
- **AND** placeholder images SHALL use deterministic picsum URLs
  (e.g. `https://picsum.photos/seed/quark-gal-1/1200/600`)

### Requirement: Portfolio grid (bg-light)

Four thumbnail-content blocks SHALL render on a light background.

#### Scenario: Portfolio cards

- **GIVEN** the Quark app is rendered
- **THEN** four portfolio cards SHALL render in a 2-column grid on a
  `#f8f9fa` background
- **AND** each card SHALL contain an image, a heading, and a short
  description paragraph
- **AND** cards SHALL use deterministic picsum placeholder images

### Requirement: Stats/counter section

A bright-blue stats section SHALL display with a "Play Video" heading
and three animated stat counters.

#### Scenario: Stats rendering

- **GIVEN** the Quark app is rendered
- **THEN** a `#0389FF` blue background section SHALL render
- **AND** it SHALL contain a "Play Video" heading + subtext on the left
- **AND** three stat counters SHALL render on the right, each with a
  large white number (50px) and an uppercase white label (opacity 0.5)
- **AND** the counters SHALL animate (count up from 0) when scrolled
  into view

### Requirement: Testimonial carousel

A testimonial section with quotes in a slider and a CTA button.

#### Scenario: Testimonials rendering

- **GIVEN** the Quark app is rendered
- **THEN** a testimonial carousel SHALL render with at least 2 testimonials
- **AND** each testimonial SHALL contain a quote and an author attribution
- **AND** a "Download for free" CTA button (`#0389FF`) SHALL render
  below the testimonials

### Requirement: Footer

A five-column footer widget grid on a light background with a copyright
line and a Component Dock attribution link.

#### Scenario: Footer rendering

- **GIVEN** the Quark app is rendered
- **THEN** a footer SHALL render on a `#f8f9fa` background
- **AND** it SHALL contain five widget columns:
  1. About (company description + social links)
  2. Learn More (How it works?, Useful Tools, Pricing, Sitemap, FAQ)
  3. Support (Contact Us, Help Desk, Knowledgebase)
  4. About Us (About Us, Careers)
  5. Connect With Us (social media icons)
- **AND** a copyright line SHALL render at the bottom

#### Scenario: Component Dock credit

- **GIVEN** the Quark app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics.

#### Scenario: Semantics

- **GIVEN** the Quark app is rendered
- **THEN** all sections SHALL use semantic HTML (nav, main, section, footer)
- **AND** the navbar SHALL use `<nav>` with an `aria-label`
- **AND** images SHALL have descriptive `alt` text
- **AND** interactive elements SHALL have focus-visible rings
- **AND** the carousel SHALL have `aria-label` and keyboard navigation

## Verification checklist

- [ ] `npm run verify:app -- quark` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/atomic/:
      split hero with beige bg + plant image, three-column icon features,
      about section, gallery carousel, portfolio grid, blue counter section,
      testimonials, five-column footer.
- [ ] Behavior check: navbar fixed + transparent, hero split layout,
      carousel navigation, counter animation, responsive stacking at 768px.
- [ ] Responsive check at 768px (columns stack, no horizontal overflow,
      hamburger menu).
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md).
- [ ] Footer links to https://www.componentdock.com/.
