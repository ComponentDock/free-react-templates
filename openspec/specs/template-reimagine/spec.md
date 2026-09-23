# Template: Reimagine (Creative Agency)

## Purpose

Reimagine is a single-page creative agency template in the
free-react-templates monorepo. It is a React recreation of the
ColorLib "Dinomuz" free template (source:
https://colorlib.com/wp/template/dinomuz/), built under a
DIFFERENT name (**Reimagine**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap-based creative agency site with a pink-to-orange
gradient accent, full-width service cards, a portfolio carousel, and a
newsletter subscription form. The signature look: gradient banner, gradient
service/story sections, Poppins font, and a distinct pink (#e66686) brand
with orange (#f09359) secondary.

**WHAT MAKES REIMAGINE DISTINCT (signature behaviors):**

1. **Pink-to-orange gradient as the primary accent.** The gradient
   `linear-gradient(0deg, #e66587 0%, #f09458 100%)` is applied to the
   banner area, service area, story area, and primary buttons — making it
   the dominant visual identity, not a subtle accent.
2. **Full-width gradient banner (600px height).** The hero is a tall
   gradient-filled section with white uppercase text and a single CTA
   button, NO background image — the gradient IS the hero visual.
3. **8-card service grid with hover overlays.** Services are displayed in
   a 4-column grid (8 items total) with image thumbnails, dark overlay on
   hover revealing a "Get Started" CTA button, and white title/description
   text below each card.
4. **Story section with gradient left accent.** The "Our Untold Story"
   section uses the same gradient as a background, with a 3/9 column split:
   title on the left, content + CTA on the right.
5. **Newsletter subscription with gradient button.** A centered email input
   with a gradient-background submit button, on a light lavender (`#f9f9ff`)
   background.

## Naming

The ColorLib source name "Dinomuz" is FORBIDDEN as the app name.
**Reimagine** is the new, original name — single lowercase word, kebab-case,
no collision with `apps/`, `openspec/specs/`, `docs/templates/`, or any
TEMPLATES.md name (verified 2026-08-18: zero hits for `reimagine` in
TEMPLATES.md, `ls apps/`, `openspec/specs/`, `docs/templates/`).
Source slug: `dinomuz`. Preview URL: https://preview.colorlib.com/theme/dinomuz/

## Design reference (replication findings)

- **Original:** ColorLib "Dinomuz" (page title: "Dinomuz"). Creative agency
  template with gradient accent, services grid, portfolio carousel, and
  newsletter.
- **Live preview — REACHABLE (verified 2026-09-23):**
  `https://preview.colorlib.com/theme/dinomuz/` returns HTTP 200.
  Stylesheets: `css/main.css` (full styling, Bootstrap-based).
  Fonts: Poppins (300, 500, 600) via Cloudflare Fonts @font-face.
  Scripts: jQuery 2.2.4, Popper.js, Bootstrap, owl.carousel, nice-select,
  magnific-popup, ajaxchimp, main.js.
- **Live DOM structure (from the fetched HTML + CSS):**
  - `body` → `div.main-wrapper-first` (68.75% width, centered)
    - `header` → `.header-wrap` → `.header-top` (logo + `.main-menubar` nav)
    - `.banner-area` (gradient bg, height 600px) → `.banner-content`
      (centered: "Re-imagining the way" + h1 "We grow money, Guaranteed"
      - primary-btn CTA)
  - `.featured-area` (white bg) → 3-column row:
    - `.single-feature` (icon + title + description) ×3
  - `div.main-wrapper` → `.service-area` (gradient bg)
    - Section title: "Our Offered Services" + "Re-imagining the way"
    - 8 `.single-service` cards in 4-col grid:
      - `.thumb` (image bg) with `.overlay` hover → primary-btn
      - `.desc` (h6 title + p description, white text)
  - `div.main-wrapper` → `.amazing-works-area` (light bg)
    - Section title: "Our Amazing Works" + "Re-imagining the way"
    - `.active-works-carousel` (owl carousel): 5 `.item` cards
      (image + centered caption)
  - `div.main-wrapper` → `.story-area` (gradient bg)
    - 3/9 column split: `.story-title` (left) + `.story-box` (right)
    - Title: "Our Untold Story" + "Re-imagining the way"
    - Content: heading + paragraph + primary-btn CTA
  - `.subscription-area` (bg #f9f9ff)
    - Section title: "Subscribe for our Newsletter"
    - Email input + primary-btn submit
  - `.footer-widget-area` (gradient bg)
    - 3-column row: Address / Email / Phone (each with icon + text)
  - `footer` (light bg)
    - Logo + copyright + social icons (facebook, twitter, dribbble, behance)

## Design tokens

| Token                  | Value                                                                | Notes                                                               |
| ---------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `--color-brand`        | `#e66686`                                                            | Primary pink — buttons, bold emphasis                               |
| `--color-brand-light`  | `#e66587`                                                            | Gradient start (slight variation from brand)                        |
| `--color-accent`       | `#f09359`                                                            | Orange secondary — gradient end, secondary buttons                  |
| `--color-accent-light` | `#f09458`                                                            | Gradient end (slight variation from accent)                         |
| `--gradient-primary`   | `linear-gradient(0deg, #e66587, #f09458)`                            | Pink-to-orange gradient: banner, service-area, story-area, buttons  |
| `--color-bg`           | `#fff`                                                               | Page base, featured area, works area                                |
| `--color-bg-alt`       | `#f9f9ff`                                                            | Light lavender — subscription area background                       |
| `--color-ink`          | `#222222`                                                            | Headings (h1–h6), strong text                                       |
| `--color-body`         | `#777777`                                                            | Body text, paragraphs, links                                        |
| `--color-white`        | `#fff`                                                               | Text on gradient backgrounds                                        |
| `--font-body`          | 'Poppins', sans-serif                                                | Google Fonts / Cloudflare 300/500/600; body 14px/1.5 weight 300     |
| `--btn-radius`         | `0` (default), `3px` (.radius), `20px` (.circle)                     | Button border-radius variants; primary-btn uses default (0)         |
| `--section-padding`    | `100px 0`                                                            | service-area, subscription-area                                     |
| `--banner-height`      | `600px`                                                              | Full-width gradient hero                                            |
| `--container-width`    | `68.75%` (desktop), `75%` (≥1200px), `90%` (≤1199px), `97%` (≤767px) | Responsive wrapper widths (`.main-wrapper-first` / `.main-wrapper`) |

## Requirements

### Requirement: Navbar

The system SHALL render a responsive navbar with logo and navigation links.

#### Scenario: Desktop navbar

- **GIVEN** the Reimagine app is rendered on a desktop viewport
- **THEN** a navbar SHALL display with a logo image on the left
- **AND** navigation links "Home", "Generic", "Elements" on the right
- **AND** the navbar SHALL be centered within the responsive wrapper

#### Scenario: Mobile hamburger menu

- **GIVEN** the viewport is at or below 768px
- **THEN** the nav links SHALL collapse and a hamburger menu icon SHALL
  appear
- **WHEN** the hamburger is clicked
- **THEN** the nav links SHALL expand into a dropdown/overlay

### Requirement: Banner / Hero

The system SHALL render a full-width gradient hero section with centered
white text and a CTA button.

#### Scenario: Hero content

- **GIVEN** the Reimagine app is rendered
- **THEN** a 600px-tall section with the pink-to-orange gradient background
  SHALL render
- **AND** it SHALL display the subtitle "Re-imagining the way" (uppercase,
  12px, white)
- **AND** the heading "We grow money, Guaranteed" (uppercase, white, h1)
- **AND** a "Get Started" primary button (gradient bg, white text, arrow
  icon) centered below the heading

#### Scenario: Hero responsive

- **GIVEN** the viewport is at or below 768px
- **THEN** the banner height SHALL shrink and text SHALL remain centered
  with no horizontal overflow

### Requirement: Features section

The system SHALL render a 3-column feature cards section on a white
background.

#### Scenario: Feature cards

- **GIVEN** the Reimagine app is rendered
- **THEN** a white-background section SHALL render with 3 feature cards
  in a row
- **AND** each card SHALL have a gradient-background circular icon, a
  title, and a description paragraph
- **AND** the three features SHALL be: "Stunning Visuals", "Clean Code",
  "Punctuality"

### Requirement: Services section

The system SHALL render an 8-card service grid on a gradient background
with hover overlays.

#### Scenario: Service cards layout

- **GIVEN** the Reimagine app is rendered
- **THEN** a gradient-background section SHALL display "Our Offered Services"
  as the section title with "Re-imagining the way" subtitle
- **AND** 8 service cards SHALL render in a 4-column grid (2 rows)
- **AND** each card SHALL have a thumbnail image area, a dark hover overlay
  with a "Get Started" CTA button, and a white title + description below

#### Scenario: Service hover interaction

- **GIVEN** a service card thumbnail is rendered
- **WHEN** the user hovers over the thumbnail
- **THEN** a dark overlay SHALL appear with the "Get Started" CTA button

### Requirement: Portfolio / Amazing Works section

The system SHALL render a portfolio carousel with work items.

#### Scenario: Works carousel

- **GIVEN** the Reimagine app is rendered
- **THEN** a section titled "Our Amazing Works" with subtitle
  "Re-imagining the way" SHALL render
- **AND** a horizontal carousel SHALL display work items, each with an
  image thumbnail and a centered caption (title + description)
- **AND** the carousel SHALL support horizontal scrolling/navigation

### Requirement: Story section

The system SHALL render a story section with gradient background and
a 2-column layout.

#### Scenario: Story content

- **GIVEN** the Reimagine app is rendered
- **THEN** a gradient-background section SHALL render with "Our Untold Story"
  as the left-column title and "Re-imagining the way" subtitle
- **AND** the right column SHALL have a heading, paragraph, and "Get
  Started" CTA button
- **AND** the layout SHALL be approximately 25% left / 75% right

### Requirement: Newsletter subscription

The system SHALL render a newsletter signup form on a light background.

#### Scenario: Subscription form

- **GIVEN** the Reimagine app is rendered
- **THEN** a light lavender (`#f9f9ff`) section SHALL display
  "Subscribe for our Newsletter" with subtitle "Re-imagining the way"
- **AND** an email input field SHALL render with placeholder "Email address"
- **AND** a gradient "Get Started" submit button SHALL be adjacent to the
  input

### Requirement: Footer widgets

The system SHALL render a 3-column footer widget area with contact info.

#### Scenario: Footer widgets

- **GIVEN** the Reimagine app is rendered
- **THEN** a gradient-background section SHALL display 3 contact widgets:
  Address (with pin icon), Email Address (with globe icon), Phone Number
  (with phone icon)
- **AND** each widget SHALL have an icon circle, a title, and content

### Requirement: Footer

The system SHALL render a footer with logo, copyright, and social links,
plus the required Component Dock attribution.

#### Scenario: Footer content

- **GIVEN** the Reimagine app is rendered
- **THEN** a footer SHALL display with a logo, copyright text, and social
  media icon links (facebook, twitter, dribbble, behance — replaced with
  lucide icons)
- **AND** the footer SHALL link to https://www.componentdock.com/ branded
  as "Component Dock"

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics throughout.

#### Scenario: Semantics

- **GIVEN** the Reimagine app is rendered
- **THEN** semantic HTML elements SHALL be used (`<header>`, `<nav>`,
  `<main>`, `<section>`, `<footer>`, `<button>`, `<label>`)
- **AND** interactive elements SHALL have visible focus-visible rings
- **AND** image areas SHALL have descriptive `alt` text or `aria-label`

## Verification checklist

- [ ] `npm run verify:app -- reimagine` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/dinomuz/: gradient hero,
      3-column features, 8-card service grid with hover overlays,
      portfolio carousel, gradient story section, newsletter form,
      3-column footer widgets, footer with social icons.
- [ ] Behavior check: service card hover overlays appear, carousel
      scrolls, newsletter form has email validation.
- [ ] Responsive check at 768px (hamburger nav, single-column layouts,
      no horizontal overflow).
- [ ] Footer links to https://www.componentdock.com/ ("Component Dock").
