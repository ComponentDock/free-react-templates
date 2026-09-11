# Template: Coincast (Cryptocurrency Agency Landing)

## Purpose

Coincast is a cryptocurrency agency landing page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Coinbuzz" free
template (source: https://colorlib.com/wp/template/coinbuzz/), built under a
DIFFERENT name (**Coincast**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a multi-section crypto agency template defined by an orange
(`#ff7700`) accent color, Open Sans / Roboto fonts, dark header, hero slider
with owl-carousel, crypto feature cards, service grid, counter stats,
testimonials carousel, contact form with background image, team section,
blog cards, and a dark footer. The source has 12 HTML pages; this recreation
focuses on the homepage (`index.html`).

## Design tokens (from live preview stylesheet, verified 2026-09-10)

| Token         | Value                                | Use                                                                 |
| ------------- | ------------------------------------ | ------------------------------------------------------------------- |
| Font primary  | 'Open Sans', sans-serif              | Body text, paragraphs, general UI                                   |
| Font heading  | 'Roboto', sans-serif                 | Headings, titles                                                    |
| Brand orange  | `#ff7700`                            | Primary accent, buttons, logo "Buzz" text, CTA, hover states, stars |
| Dark bg       | `#242424`                            | Header bottom bar, footer background, dark sections                 |
| White         | `#fff`                               | Text on dark, button text, backgrounds on light sections            |
| Light gray bg | `#f4f4f4`                            | Featured area, service area, about area, blog area backgrounds      |
| Border gray   | `#e5e5e5`                            | Card borders, dividers                                              |
| Medium gray   | `#616162`                            | Secondary text                                                      |
| Body bg       | `#fff`                               | Page default background                                             |
| Orange hover  | `#ff8d29`                            | Button hover state                                                  |
| Button style  | bg `#ff7700`, white text, 4px radius | Uppercase, bold, 14px vertical / 24px horizontal padding            |
| Section title | 36px, weight 700, centered           | "Why Choose Bitcoin", "Our Team", etc. with orange underline image  |
| Card shadow   | 0px 5px 20px rgba(0,0,0,0.05)        | Featured cards, service items, blog cards                           |

## Section structure (from live homepage DOM)

1. **Header** (two bars):
   - Top bar: contact info (phone, email) right-aligned on white bg
   - Bottom bar: logo ("Coin" white + "Buzz" orange) left, nav links
     (Home, About, Service, Blog, Pages, Contact) center, "Get a Quote"
     orange button right — all on `#242424` dark bg

2. **Hero Slider** (owl-carousel, 2 slides):
   - Full-width background images with dark overlay
   - Content: "We Are Everyone's Coinbuzz Agency" heading (white, orange
     span) + paragraph + "Read More" button
   - Alternating text alignment (left / right)

3. **Featured** (3 cards on `#f4f4f4` bg):
   - 3 equal-width cards with rounded images, icon badges (orange circle),
     title, paragraph, "Read More" link
   - Cards have shadow and hover lift

4. **About Content** (dark bg `#242424`):
   - Left: text content ("Coinbuzz" heading, paragraph, feature list with
     check icons, "Learn More" button)
   - Right: large image (hidden on mobile)

5. **Services** ("Why Choose Bitcoin" — white bg):
   - Section title with orange underline image
   - 3-column layout: left = text + "Free Consultation" CTA; middle =
     2 stacked service items (icon + title + desc); right = 2 stacked
     service items
   - Icons: flaticon crypto icons → lucide equivalents

6. **About/Stats** (dark bg `#242424`):
   - Left: image; right: 4 stat counters in a 2×2 grid
   - Counters: 1454, 759, 1250, 2391 with labels

7. **Testimonials** (owl-carousel on white bg):
   - Avatar image (left) + quote content (right): name, star rating,
     testimonial paragraph, quote icon

8. **Special** (orange bg `#ff7700`):
   - CTA section with heading, "Join Now" white button

9. **Resources** (white bg):
   - Section title + 3 resource cards (icon + title + description)

10. **Expert** (dark bg):
    - Team member cards with photos, names, roles, social icons

11. **Contact** (split layout):
    - Left: background image (hidden mobile); right: "Request A Call Back"
      form (name, email, phone, subject, message, submit button)

12. **Team** (white bg):
    - "Our Team" section with team member cards (photo, name, role, social)

13. **Investments** (white bg):
    - CTA section: "Need to take care of your Currency Investments" +
      "View Services" / "Contact Us" buttons + side image

14. **Blog** (`#f4f4f4` bg):
    - 3 blog cards (image, date badge, title, excerpt, "Read More")

15. **Footer** (dark bg `#242424`):
    - 3-column widgets (About, Quick Links, Latest News)
    - Copyright bar with social icons

## Requirements

### Requirement: Two-bar header

The system SHALL render a header with a top contact bar and a bottom
navigation bar.

#### Scenario: Header renders on desktop

- **GIVEN** the Coincast app is rendered on desktop (≥992px)
- **THEN** a top bar SHALL display contact information (phone, email)
  right-aligned on a white background
- **AND** a bottom bar SHALL display on `#242424` dark background with:
  logo ("Coin" white + "Buzz" orange) left, navigation links center
  (Home, About, Service, Blog, Pages, Contact — white, uppercase,
  weight 700, 14px), "Get a Quote" orange button right

### Requirement: Hero slider

The system SHALL render a hero section with background images and text
overlays, cycling between slides.

#### Scenario: Slider renders

- **GIVEN** the hero slider is rendered
- **THEN** a full-width background image SHALL display with a dark overlay
- **AND** the heading "We Are Everyone's Coinbuzz Agency" SHALL render
  (white, orange accent on "Everyone's")
- **AND** a paragraph and "Read More" button SHALL follow
- **AND** navigation dots/arrows SHALL allow slide switching

### Requirement: Featured crypto cards

The system SHALL render 3 feature cards on a light background with icons,
titles, and descriptions.

#### Scenario: Feature cards render

- **GIVEN** the featured section is rendered on desktop
- **THEN** 3 cards SHALL appear in a row on `#f4f4f4` background
- **AND** each card SHALL have a rounded image, an orange circular icon
  badge, a title, a paragraph, and a "Read More" link
- **AND** cards SHALL have shadow and lift on hover

### Requirement: Service grid

The system SHALL render a "Why Choose Bitcoin" service section with a
3-column asymmetric layout.

#### Scenario: Services render

- **GIVEN** the services section is rendered on desktop
- **THEN** a centered section title "Why Choose Bitcoin" SHALL render
  with an orange underline
- **AND** the left column SHALL show introductory text + "Free
  Consultation" CTA button
- **AND** the middle column SHALL show 2 stacked service items (icon +
  title + description)
- **AND** the right column SHALL show 2 stacked service items

### Requirement: Counter stats

The system SHALL render a stats section with 4 animated counters.

#### Scenario: Stats display

- **GIVEN** the stats section is rendered
- **THEN** 4 counters SHALL display in a 2×2 grid: 1454, 759, 1250,
  2391
- **AND** each counter SHALL have a label below the number
- **AND** the background SHALL be dark (`#242424`)

### Requirement: Testimonials carousel

The system SHALL render a testimonial carousel with avatar, quote, and
star rating.

#### Scenario: Testimonials render

- **GIVEN** the testimonial section is rendered
- **THEN** testimonial slides SHALL show: avatar image (left), name,
  star rating (4/5), quote paragraph, quote icon (right)

### Requirement: Contact form with background

The system SHALL render a contact form section with a background image
and a form overlay.

#### Scenario: Contact form renders

- **GIVEN** the contact section is rendered on desktop
- **THEN** a background image SHALL display on the left (hidden on mobile)
- **AND** a form SHALL appear on the right with fields: Name, Email,
  Phone, Subject, Message textarea, "Submit Now" button
- **AND** the heading SHALL read "Request A Call Back"

### Requirement: Blog cards

The system SHALL render 3 blog post cards on a light background.

#### Scenario: Blog cards render

- **GIVEN** the blog section is rendered on desktop
- **THEN** 3 blog cards SHALL display on `#f4f4f4` background
- **AND** each card SHALL have an image, an orange date badge, title,
  excerpt, and "Read More" link

### Requirement: Footer

The system SHALL render a dark footer with 3-column widgets and copyright.

#### Scenario: Footer renders

- **GIVEN** the footer is rendered
- **THEN** the background SHALL be `#242424`
- **AND** 3 widget columns SHALL display (About, Quick Links, Latest News)
- **AND** a copyright bar SHALL render with social icons
- **AND** the footer SHALL link to https://www.componentdock.com/

### Requirement: Accessibility and semantics

The system SHALL ensure accessible, semantic HTML throughout the application.

#### Scenario: Semantic landmarks

- **GIVEN** the Coincast app is rendered
- **THEN** the header SHALL use `<header>` element
- **AND** navigation SHALL use `<nav>` element
- **AND** form inputs SHALL have associated `<label>` elements
- **AND** images SHALL have descriptive alt text

### Requirement: Responsive behavior

The system SHALL provide responsive layouts that adapt to mobile viewports.

#### Scenario: Mobile layout

- **GIVEN** the viewport is ≤767px
- **THEN** the nav links SHALL be hidden (hamburger menu)
- **AND** all grid sections SHALL stack vertically
- **AND** the hero slider text SHALL remain readable
- **AND** the contact background image SHALL be hidden

## Verification checklist

- [ ] `npm run verify:app -- coincast` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/coinbuzz/coinbuzz/index.html:
      dark header with orange accent, hero slider, 3 feature cards,
      service grid, counter stats, testimonials, contact form with
      background, blog cards, dark footer.
- [ ] Design tokens match: Open Sans / Roboto fonts, brand orange
      `#ff7700`, dark `#242424`, button radius 4px, section titles
      centered with orange underline.
- [ ] Responsive check at 767px: nav hidden, sections stack, images hidden.
- [ ] No ColorLib references in any app file; footer links
      https://www.componentdock.com/.
