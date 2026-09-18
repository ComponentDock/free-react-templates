# Template: Zenasana (Yoga Studio)

## Purpose

Recreation of ColorLib's "Yogalife" template as a React 19 + Vite + Tailwind 4 + TypeScript yoga studio website.

- **Source**: ColorLib "Yogalife" — https://colorlib.com/wp/template/yogalife/
- **Preview**: https://preview.colorlib.com/theme/yogalife/
- **Stack**: Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category**: Wellness / Yoga Studio

## Design tokens

Extracted from the live preview's stylesheets (`css/style.css`).

### Fonts

| Role             | Font family                          | Weights        |
| ---------------- | ------------------------------------ | -------------- |
| Body / UI        | Work Sans, sans-serif                | 300, 400, 700  |
| Serif headings   | Playfair Display, serif              | 400, 700       |

Use Google Fonts `<link>` for both families.

### Colors

| Token               | Hex / Value           | Usage                                        |
| ------------------- | --------------------- | -------------------------------------------- |
| brand / accent      | `#87e5da` (teal/mint) | Button primary bg, pricing featured overlay, link hover, section accents |
| background          | `#FFFFFF` (white)      | Main content areas                           |
| light bg            | `#f8f9fa`             | `.bg-light` sections (programs, schedule)    |
| text primary        | `#000000`             | Headings, body text                          |
| text muted          | `rgba(0,0,0,0.5)`    | Body paragraph text                          |
| hero overlay        | `rgba(0,0,0,0.6)`    | Hero image overlay                           |
| hero caption        | `#FFFFFF` (white)     | Hero subtitle text, caption uppercase        |
| button primary      | `#87e5da`             | CTA buttons (pill shape)                     |
| button primary text | `#FFFFFF`             | CTA button text                              |
| pricing featured    | `rgba(135,229,218,0.9)` | Teal overlay on featured pricing card      |
| footer bg           | `rgba(0,0,0,0.8)` over image | Dark overlay on background image      |
| footer text         | `rgba(255,255,255,0.5)` | Footer paragraph text                    |
| footer link         | `rgba(255,255,255,0.3)` | Footer links                              |
| footer link hover   | `#FFFFFF`             | Footer link hover                           |
| footer heading      | `#FFFFFF`             | Footer section headings                     |
| border dashed       | `#cccccc`             | Pricing card borders (non-featured)         |

### Buttons

- **Pill buttons** (`.btn.pill`): `border-radius: 30px`. `.btn-primary`: bg `#87e5da`, text white, padding varies by context.
- **Outline white**: border `#fff`, text white (used in pricing).
- **Caption badge**: uppercase, letter-spacing 0.2em, 12px font, 7px 10px padding, white text.

### Layout

- **Navbar**: White bg (`.bg-light`), sticky, logo left (2 cols), nav right (10 cols). Mobile hamburger toggle.
- **Hero**: Full-width carousel (Owl Carousel), background images with dark overlay, centered text (caption + h1).
- **Welcome section**: Split layout — left image (50%), right text (50%) with Playfair Display heading, teal caption "Hello there!", paragraph, CTA button.
- **Programs**: 3-column grid (6 items total, 2 rows), each with image, heading link.
- **Video section**: Embedded video (left 6 cols) + text description (right 5 cols).
- **Pricing**: 4-column cards, dashed border. Featured card has image bg with teal overlay. Each: title, price, feature list, CTA button.
- **Features**: 4-column grid (Peace of Mind, Mindfulness, Meditation, Yoga Carpet) with icon + heading + text.
- **Gallery**: Image grid with hover effects.
- **Events**: List of upcoming events with image + heading + date.
- **Testimonials**: Carousel of testimonial cards with avatar, name, quote.
- **Location**: Map section.
- **Footer**: Dark bg with image, 80% black overlay, 3-4 columns (About, Quick Links, Social, Newsletter), copyright.

### Section backgrounds

| Section          | Background                                    |
| ---------------- | --------------------------------------------- |
| Body             | `#FFFFFF`                                     |
| Navbar           | `#f8f9fa` (light)                             |
| Hero             | Image + `rgba(0,0,0,0.6)` overlay             |
| Welcome          | White (left image, right text)                |
| Programs         | `#f8f9fa` (light)                             |
| Video            | White                                         |
| Pricing          | White (cards have dashed border)              |
| Features         | `#f8f9fa` (light)                             |
| Gallery          | White                                         |
| Events           | White                                         |
| Testimonials     | `#f8f9fa` (light)                             |
| Location         | White                                         |
| Footer           | Image + `rgba(0,0,0,0.8)` overlay             |

## Gherkin requirements

```gherkin
Feature: Zenasana yoga studio website

  Background:
    Given the user loads the Zenasana page

  Scenario: Navbar displays logo and navigation
    Then a white sticky navbar is visible
    And the logo "Zenasana" is shown on the left
    And navigation links appear on the right: Home, Yoga Classes, Events, About Studio, Contact
    And "Yoga Classes" has a dropdown with sub-items

  Scenario: Hero carousel displays
    Then a full-width hero carousel shows background images
    And each slide has a dark overlay
    And each slide shows a teal uppercase caption and white heading
    And navigation arrows appear on hover

  Scenario: Welcome section
    Then a split section shows an image on the left and text on the right
    And the heading "Welcome To Zenasana" uses Playfair Display font
    And a teal caption "Hello there!" appears above the paragraph
    And a teal pill CTA button reads "See The Yoga Pricing"

  Scenario: Programs section
    Then a 3-column grid shows 6 yoga program cards
    And each card has an image and a heading link
    And the section has a light background

  Scenario: Pricing section shows 4 cards
    Then 4 pricing cards are displayed in a row
    And each card has a dashed border
    And the first card has a teal overlay on an image background
    And each card shows a title, price, feature list, and CTA button
    And the featured card CTA is white outline

  Scenario: Features section
    Then 4 feature items are shown: Peace of Mind, Mindfulness, Meditation, Yoga Carpet
    And each has an icon, heading, and description text

  Scenario: Gallery section displays images
    Then a grid of gallery images is shown
    And images have hover effects

  Scenario: Events section
    Then a list of upcoming events is displayed
    And each event shows an image, heading, and date

  Scenario: Testimonials carousel
    Then a testimonial carousel shows 4 reviews
    And each review has an avatar, name, and quote

  Scenario: Footer
    Then a dark footer with background image is displayed
    And the footer has columns: About, Quick Links, Social, Newsletter
    And footer links point to Component Dock
    And a copyright notice is shown

  Scenario: Responsive behavior
    When the viewport is below 960px
    Then the navbar collapses to a hamburger menu
    And multi-column grids stack to single column
```

## Verification checklist

- [ ] Sticky white navbar with logo + nav links + mobile hamburger
- [ ] Hero carousel with background images, dark overlay, captions, arrows
- [ ] Welcome split section (image + text with Playfair Display heading)
- [ ] Programs 3-column grid (6 items)
- [ ] Video section with embedded player + description
- [ ] Pricing 4-column cards (dashed border, featured teal overlay)
- [ ] Features 4-column grid (icons + headings)
- [ ] Gallery image grid with hover effects
- [ ] Events list with images + dates
- [ ] Testimonials carousel (avatars, names, quotes)
- [ ] Location/map section
- [ ] Dark footer with image bg, columns, Component Dock link
- [ ] Brand teal #87e5da used consistently
- [ ] Work Sans + Playfair Display fonts loaded
- [ ] Responsive at 960px breakpoint
- [ ] No ColorLib references in app code
