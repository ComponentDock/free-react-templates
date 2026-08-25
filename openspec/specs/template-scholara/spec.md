# Template: Scholara (Education / University Landing)

## Purpose

Scholara is a single-page education/university landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Universityedu" website template design, built under a
DIFFERENT name (**Scholara**) with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

**Source:** ColorLib "Universityedu"
https://colorlib.com/wp/template/universityedu/
**Preview analyzed:** https://preview.colorlib.com/theme/universityedu/
(HTTP 200, 28 KB HTML, title "Education | Template")

## Design reference (replication findings)

- **Demo DOM analyzed:** https://preview.colorlib.com/theme/universityedu/
  Stylesheets: `css/style.css` (103 KB, compiled from SCSS, Chivo font
  via Google Fonts `@import` at top) + Bootstrap 4 + plugin libs
  (owl.carousel, slicknav, animate, magnific-popup, font-awesome,
  themify-icons, slick, nice-select, counterup, waypoints). Bootstrap 4
  grid + utility classes throughout. No section IDs; sections identified
  by class names.

- **Screenshot:** `universityedu-colorlib-template.jpg` (TEMPLATES.md line 633) — education template with: dark overlay hero with countdown timer
  banner, sticky nav, about section with warm cream bg, programs grid
  (2-col with images), resources accordion list, top stories (3-col
  card grid), partner logos carousel, green split "Trusted" section,
  grey footer with newsletter + social.

- **Visual design (from DOM + CSS tokens):** clean education/university
  landing — warm cream sections (`#FCF2EB`) alternating with white and
  light blue-gray (`#F1FBFF`), dark hero with image overlay. Font:
  **Chivo** (Google Fonts, weights 300/400/700/900), clean sans-serif.
  Primary green `#007A5C` (buttons, accent, scroll-to-top, theme color).
  Coral accent `#F15B43` (secondary buttons in other variants but NOT
  used in this template's homepage). Dark slate headings `#32404D`.
  Grey body text `#5D646A`. Primary `.btn_1` = green bg, white text,
  NO border-radius (square), padding 11px 20px. `.browse-btn` = green
  underline link style. The demo brands itself with a logo "Education";
  recreation uses the NEW name **Scholara**.

## Design tokens (from css/style.css)

| Token              | Value                | Where                                                                                                                                          |
| ------------------ | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary green      | `#007A5C`            | `.btn_1` bg, `.browse-btn` color+underline, `.theme-bg`, `.theme-color`, `#scrollUp` bg                                                        |
| Heading color      | `#32404D`            | `h1-h6`, `.section-tittle h2`                                                                                                                  |
| Body text          | `#5D646A`            | `p`                                                                                                                                            |
| Body text (muted)  | `#777777`            | `.section-tittle p`                                                                                                                            |
| Section bg (cream) | `#FCF2EB`            | `.section-bg` (about area)                                                                                                                     |
| Gray bg            | `#F1FBFF`            | `.gray-bg` (footer wrapper)                                                                                                                    |
| Brand bg (light)   | `#EFF6F0`            | `.brand-bg`                                                                                                                                    |
| Dark green bg      | `#305534`            | `.section-bg2`                                                                                                                                 |
| White              | `#fff`               | `.white-bg`, card backgrounds                                                                                                                  |
| Font family        | Chivo 300–900        | Google Fonts `@import`; `body`, `h1-h6`, `p`                                                                                                   |
| Primary button     | `.btn_1`             | bg `#007A5C`, color `#fff`, border-radius **0** (square), padding `11px 20px`, font-size 18px, font-weight 400, border `1px solid transparent` |
| Button hover       | `.btn_1:hover`       | bg `none`, border `1px solid #fff`, color `#fff`                                                                                               |
| Browse link btn    | `.browse-btn`        | color `#007A5C`, font-weight 500, 16px, underline via `::before`                                                                               |
| Browse btn (white) | `.browse-btn2`       | color `#fff`, `::before` bg `#fff`                                                                                                             |
| Scroll-to-top      | `#scrollUp`          | bg `#007A5C`, 50×50px circle, white arrow                                                                                                      |
| Section padding    | `.section-padding`   | `100px 0` desktop, `70px 0` mobile                                                                                                             |
| Section title h2   | `.section-tittle h2` | color `#32404D`, font-size 40px, weight 900, uppercase, line-height 1.2, margin-bottom 30px                                                    |

## Structure (1:1 section order)

1. **Header** `header.header-area` → top bar + sticky nav:
   - **Top bar** `.header-top`: centered countdown timer banner (40 Days,
     18 Hours, 46 Minutes, 32 Seconds) + "Learn More" white link btn
     `.browse-btn2`. Text: "ENDS TOMORROW: Join Teachable for $4,800 in
     bonus content". Dark background.
   - **Sticky nav** `.header-bottom.header-sticky`: logo left, nav center
     (Home | About | Programs | Blog (dropdown) | Contact), right side:
     "Call Us: 0 (78) 675 3674" link + social icons row (Facebook,
     Twitter, LinkedIn, YouTube, Email). Mobile hamburger menu.

2. **Hero / Slider** `section.slider-area`: full-width background image
   with dark overlay (`.hero-overly`), left-aligned text content:
   - Label: "EDUCATION & SCHOOL"
   - Headline: "SHOWCASE COURSES, EVENTS AND MORE!"
   - Subtext: lorem ipsum
   - CTA: `.btn_1` green square button "Get Started Now"
   - Animated fade-in on scroll (wow.js fadeInUp)

3. **About** `section.about-area.section-bg` (cream `#FCF2EB` bg):
   Left image (`.about-img`), right text (`.about-caption`):
   - Section title: "A comprehensive teaching approach"
   - Two paragraphs of lorem ipsum
   - `.browse-btn` "Learn More" link

4. **Programs (Blog-style grid)** `section.home-blog`:
   - Section title centered: "Programs we Offer" + subtitle
   - 2-column grid of cards: image on top, text below
   - Card 1: "Faculty of Science" — image + description + "Learn More"
   - Card 2: "Faculty of Arts" — image + description + "Learn More"

5. **Services** `section.services-area`:
   - (This section may exist between Programs and Resources — check DOM
     carefully for any additional services/features section.)

6. **Essential Resources** `section.visit-three` (split layout):
   - Left: `.tailor-details` — title "Essential resources" + 3 accordion
     items (`.single-gallery`): "First year students", "Tuition & fees",
     "International students" — each with title, description, arrow link
   - Right: `.visit-team` — background image

7. **Top Stories** `section.class-offer-area` (border-bottom):
   - Section title: "Top Stories" with "More Stories" link right-aligned
   - 3-column card grid (`.properties`): image on top, centered title below
   - All 3 cards share the same headline text (linguistics alumna article)

8. **Partners** `section.brand-area`:
   - Section title centered: "Our Partners" + subtitle
   - Logo carousel (`.brand-active`): 6 brand logos (brand1–brand4,
     repeated)

9. **Trusted Section** `section.visit-one` (split, dark green `#305534` bg):
   - Left: `.visit-team` — background image with wrapper overlay
   - Right: `.tailor-details` — white text:
     - Title: "TRUSTED BY OVER 6000+ STUDENTS"
     - Two paragraphs lorem ipsum
     - `.browse-btn2` white underline "Join Now"

10. **Footer** `footer`:
    - `.footer-wrapper.gray-bg` (`#F1FBFF`): 5-column layout:
      - Col 1: Footer logo
      - Col 2: "Quick Links" (Work, Services, Products, Tips & Tricks)
      - Col 3: "Programs" (Air freight, Ocean freight, Large projects)
      - Col 4: "Resources" (FAQ, Submit Ticket, Contact Us)
      - Col 5: "Newsletter" — email input + send icon button + social
        icons (Facebook, Instagram, LinkedIn, YouTube)
    - `.footer-bottom-area`: copyright line "All rights reserved | This
      template is made with ❤ by Colorlib" (replaced with Component Dock
      attribution)

## Requirements

### Requirement: Hero section renders correctly

The hero SHALL display a background image with dark overlay, the headline, the label, and a green CTA button.

#### Scenario: Hero displays all elements

- **WHEN** the user opens the page
- **THEN** the hero section displays a background image with dark overlay
- **AND** the headline "SHOWCASE COURSES, EVENTS AND MORE!" is visible
- **AND** the label "EDUCATION & SCHOOL" is visible above the headline
- **AND** a green "Get Started Now" button is displayed

### Requirement: Countdown banner is visible

The top bar SHALL show countdown timer digits for Days, Hours, Minutes, Seconds.

#### Scenario: Countdown digits render

- **WHEN** the user opens the page
- **THEN** the top bar shows countdown timer digits for Days, Hours, Minutes, Seconds
- **AND** the text "ENDS TOMORROW" is visible

### Requirement: Sticky navigation

The navigation bar SHALL become sticky at the top when scrolled past the hero.

#### Scenario: Nav becomes sticky on scroll

- **WHEN** the user scrolls down past the hero
- **THEN** the navigation bar becomes sticky at the top
- **AND** the logo, nav links, and call-to-action are visible

### Requirement: About section displays

The about section SHALL have a cream background with image, heading, and browse link.

#### Scenario: About section renders

- **WHEN** the user views the about section
- **THEN** the heading "A comprehensive teaching approach" is visible
- **AND** an image appears to the left of the text

### Requirement: Programs section shows two cards

The programs section SHALL display 2 program cards in a grid.

#### Scenario: Programs grid renders

- **WHEN** the user views the programs section
- **THEN** the "Programs we Offer" section title is visible
- **AND** exactly 2 program cards are displayed

### Requirement: Essential Resources section displays

The resources section SHALL show 3 resource items with descriptions.

#### Scenario: Resources list renders

- **WHEN** the user views the resources section
- **THEN** the "Essential resources" title is visible
- **AND** 3 resource items are listed

### Requirement: Top Stories section shows three cards

The top stories section SHALL display 3 story cards.

#### Scenario: Stories grid renders

- **WHEN** the user views the top stories section
- **THEN** the "Top Stories" title is visible
- **AND** exactly 3 story cards are displayed

### Requirement: Partners section displays logos

The partners section SHALL display partner logos.

#### Scenario: Partners render

- **WHEN** the user views the partners section
- **THEN** the "Our Partners" section title is visible

### Requirement: Trusted section renders split layout

The trusted section SHALL display a heading with dark green background and join button.

#### Scenario: Trusted section renders

- **WHEN** the user views the trusted section
- **THEN** the "TRUSTED BY OVER 6000+ STUDENTS" heading is visible
- **AND** a "Join Now" button is displayed

### Requirement: Footer contains all elements

The footer SHALL show columns, newsletter form, social links, and Component Dock copyright.

#### Scenario: Footer renders

- **WHEN** the user views the footer
- **THEN** the footer shows Quick Links, Programs, Resources columns
- **AND** a newsletter email input is visible
- **AND** the copyright line links to Component Dock

### Requirement: Mobile responsiveness

At 375px viewport, navigation SHALL collapse to hamburger and columns SHALL stack.

#### Scenario: Mobile layout adapts

- **WHEN** the viewport width is 375px
- **THEN** the navigation collapses to a hamburger menu

### Requirement: Scroll-to-top button

A scroll-to-top button SHALL appear when scrolling down.

#### Scenario: Scroll-to-top appears

- **WHEN** the user scrolls down
- **THEN** a scroll-to-top button appears

## Verification checklist

- [ ] Hero: background image + dark overlay, headline + label + green button
- [ ] Countdown timer digits visible in top bar
- [ ] Sticky nav: logo + 5 nav items + call-to-action + social icons
- [ ] About: cream bg, image left, title + 2 paragraphs + browse link
- [ ] Programs: centered title, 2 image cards with titles + descriptions
- [ ] Resources: split layout, 3 accordion-style items, image right
- [ ] Top Stories: 3-column card grid, title with right-aligned link
- [ ] Partners: centered title, logo carousel
- [ ] Trusted: dark green split section, white text, "Join Now" button
- [ ] Footer: 5-column layout, newsletter form, social icons, copyright
- [ ] Mobile (375px): hamburger nav, stacked columns, tappable buttons
- [ ] Footer links to Component Dock (NOT ColorLib)
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Tests at 100% coverage for all sections
- [ ] TypeScript strict, no `any` types
