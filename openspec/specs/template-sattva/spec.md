# Template: Sattva (Yoga Studio)

## Purpose

Sattva is a single-page yoga studio website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Yogalax" entry in
TEMPLATES.md (first occurrence: Beauty category, line ~236; duplicated under
Fashion ~line 1737 and Health Fitness ~line 1893), built under a different name
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Yogalax" — a yoga/wellness studio marketing template
  (source: https://colorlib.com/wp/template/yogalax/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/yogalax/
  (HTTP 200, full rendered DOM + `css/style.css` (~70KB) extracted). The
  TEMPLATES.md screenshot (`yogalax-free-template.jpg`, 1200×946) is the visual
  reference; the design below is reconstructed from the DOM structure, CSS
  tokens and the screenshot.
- **Visual design (from screenshot + DOM):** clean, airy, minimal wellness
  aesthetic with generous whitespace. Hero is a split layout: left side soft
  pink gradient (`#d291bc` fading to white) with a large thin-sans headline
  ("Do Yoga today for a better tomorrow") and a pill CTA ("15 Day Free Trial");
  right side a lifestyle photo of a woman seated in lotus pose (hands in
  prayer). Below, an intro section with a photo of a woman in a backbend on the
  left and a "Why You Should Go To Yoga" checklist on the right. Rounded card
  sections with soft shadows, pink accents throughout, thin (200–300 weight)
  typography, uppercase letter-spaced subheadings. Footer is solid pink.
- **Section order (1:1):** Navbar → Hero → Intro (Why You Should Go To Yoga) →
  Services (4 cards) → Classes (Choose Your Level & Focus, 6 cards) → Pricing
  (Membership Cards, 3 tiers) → Testimonials (Successful Stories) → Counter →
  Blog (Recent Posts) → Gallery (See the latest photos) → Footer.

## Design tokens (extracted from `css/style.css`)

- **Font:** `font-family: "Work Sans", ...sans-serif` — used for everything.
  Headings are thin: `font-weight: 200–300`. Brand is uppercase with
  `letter-spacing: 2px`. Google Fonts via `<link>` in `index.html`.
- **Brand pink (primary):** `#d291bc` — buttons, footer background, active nav
  link, pricing price numbers, counter icon borders, carousel dots, brand icon.
- **Cyan accent:** `#78d5ef` (Bootstrap `btn-primary` bg), hover `#56caeb`,
  active `#4ac7ea` — used on the default button class; the template's own
  `.btn.btn-primary` overrides to pink `#d291bc`.
- **Text:** headings `#000`; body `#212529`; card text `#4d4d4d`; muted
  `#999999`; subheadings `#b3b3b3` uppercase with `letter-spacing: 3px`.
- **Section backgrounds:** white; light gray `#f8f9fa` (`bg-light` sections:
  services, pricing, blog); hero = photo bg + 45° gradient overlay from
  `#d291bc` (opacity .3) on the left ~68%; counter = dark photo bg
  (`ftco-bg-dark`, parallax); footer = solid `#d291bc`.
- **Buttons:** pill — `border-radius: 30px`; primary = pink bg `#d291bc`,
  white text, `text-transform: uppercase`, `font-weight: 600`,
  `letter-spacing: 1px`; hover = transparent bg + pink border. Hero variant:
  white translucent border, hover → white bg + black text.
- **Pricing cards (`.block-7`):** white bg, `box-shadow: 0 24px 48px -13px
rgba(0,0,0,.05)` (hover .11), price number `font-size: 60px`, `font-weight:
500`, pink `#d291bc`, `sup` 24px.
- **Headings (`.heading-section`)**: `h2` `font-size: 60px` (28px mobile),
  `font-weight: 300`; `.subheading` 16px uppercase `letter-spacing: 3px`
  `#b3b3b3`.
- **Navbar (`.ftco-navbar-light`)**: transparent absolute over hero, brand
  black with pink 28px icon span; scrolled state → fixed white bg + soft
  shadow, links black, active link pink.
- **Counter**: number 50px white weight 500; icon in 80px diamond (bordered
  square rotated 45°) pink; hover → icon square rotates 135° and fills pink.
- **Footer (`.ftco-footer`)**: bg `#d291bc`, text `rgba(255,255,255,.7)`,
  headings white; social icons in 50px circles `rgba(255,255,255,.05)`.

## Requirements

### Requirement: Navigation bar

The system SHALL render a fixed navigation bar with the site name "Sattva",
the page navigation, and a dark-mode toggle.

#### Scenario: Navbar content

- **GIVEN** the Sattva page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Sattva" with a lotus/flower
  icon in the brand pink
- **AND** the navbar SHALL show navigation links for Home, Classes, Schedule,
  About, Blog and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

#### Scenario: Scroll behavior

- **GIVEN** the page is scrolled down
- **WHEN** the navbar leaves the hero area
- **THEN** the navbar SHALL switch to a fixed white background with a soft
  shadow

### Requirement: Mobile menu

The system SHALL show a hamburger menu on small screens that opens an overlay
with the same navigation links.

#### Scenario: Open mobile menu

- **GIVEN** the page is rendered on a small screen
- **WHEN** the user clicks the hamburger icon
- **THEN** a menu overlay SHALL open listing Home, Classes, Schedule, About,
  Blog and Contact

### Requirement: Hero section

The system SHALL render a full-height hero with a headline, subtext and a
trial CTA over a lifestyle photo with a pink gradient overlay.

#### Scenario: Hero content

- **GIVEN** the Sattva page is rendered
- **WHEN** the hero is displayed
- **THEN** the hero SHALL show the headline "Do Yoga today for a better
  tomorrow" in a thin large font
- **AND** the hero SHALL show a "15 Day Free Trial" pill button
- **AND** the hero SHALL show a yoga-pose photo (placeholder image) on the
  right with a pink gradient overlay on the left

### Requirement: Intro section (Why You Should Go To Yoga)

The system SHALL render an intro section with a photo and a checklist of yoga
benefits.

#### Scenario: Intro content

- **GIVEN** the Sattva page is rendered
- **WHEN** the intro section is displayed
- **THEN** the section SHALL show the heading "Why You Should Go To Yoga"
- **AND** the section SHALL show a short intro paragraph
- **AND** the section SHALL list at least five benefits: Yoga boosts brain
  power, Yoga helps you to breathe better, Yoga improves your strength, Yoga
  helps you to focus, Yoga helps give meaning to your day

### Requirement: Services section

The system SHALL render a light-background services grid with four service
cards, each with an icon, title and blurb.

#### Scenario: Services content

- **GIVEN** the Sattva page is rendered
- **WHEN** the services section is displayed
- **THEN** the section SHALL show four cards titled Healthy Lifestyle, Body &
  Mind Balance, Meditation Practice and Edeology
- **AND** each card SHALL show an icon and a short descriptive blurb

### Requirement: Classes section

The system SHALL render a classes grid with six class cards under the heading
"Choose Your Level & Focus".

#### Scenario: Classes content

- **GIVEN** the Sattva page is rendered
- **WHEN** the classes section is displayed
- **THEN** the section SHALL show the subheading "Yoga Classes" and the heading
  "Choose Your Level & Focus"
- **AND** the section SHALL show six class cards: Group Lessons, Yoga For
  Beginners, Yoga For Pregnant, Yoga For Couples, Bikram Yoga and Yoga Barre
- **AND** each card SHALL show a title and a short blurb

### Requirement: Pricing section

The system SHALL render a pricing section with three membership cards, each
with a price, feature list and a Get Started button.

#### Scenario: Pricing content

- **GIVEN** the Sattva page is rendered
- **WHEN** the pricing section is displayed
- **THEN** the section SHALL show the subheading "Pricing Tables" and the
  heading "Membership Cards"
- **AND** the section SHALL show three cards: Year Card ($449, For 1 Year),
  Monthly Card ($200, For 1 Month) and Weekly Card ($85, For 1 Week)
- **AND** each card SHALL show a feature list (e.g. Enjoy All The Features,
  Group Trainer, Fitness Orientation) and a Get Started button

### Requirement: Testimonials section

The system SHALL render a carousel of at least four student testimonials, each
with a quote, name, role and photo.

#### Scenario: Testimonials content

- **GIVEN** the Sattva page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** the section SHALL show the subheading "Testimony" and the heading
  "Successful Stories"
- **AND** the section SHALL show at least four testimonial slides, each with a
  quote, avatar, name and position

### Requirement: Counter section

The system SHALL render a dark photo-background counter strip with four
animated statistics.

#### Scenario: Counter content

- **GIVEN** the Sattva page is rendered
- **WHEN** the counter section is displayed
- **THEN** the section SHALL show four counters: 5000 Happy Customers, 4560
  Yoga Workshops, 570 Years of Experience and 900 Lesson Conducted
- **AND** each counter SHALL show a pink icon and a large white number with a
  label

### Requirement: Blog section

The system SHALL render a blog section with three recent-post cards, each with
a date, title and excerpt.

#### Scenario: Blog content

- **GIVEN** the Sattva page is rendered
- **WHEN** the blog section is displayed
- **THEN** the section SHALL show the subheading "Blog" and the heading
  "Recent Posts"
- **AND** the section SHALL show three post cards, each with a date, a title
  (yoga-related, e.g. "Young Women Doing Yoga") and an excerpt

### Requirement: Gallery section

The system SHALL render a gallery grid of at least four photos under the
heading "See the latest photos".

#### Scenario: Gallery content

- **GIVEN** the Sattva page is rendered
- **WHEN** the gallery section is displayed
- **THEN** the section SHALL show the subheading "Gallery" and the heading
  "See the latest photos"
- **AND** the section SHALL show at least four yoga/studio photos in a grid

### Requirement: Footer

The system SHALL render a solid-pink footer with the site name, address,
social icons and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the Sattva page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL show the site name "Sattva" with the pink lotus
  icon
- **AND** the footer SHALL show an address line (placeholder street address)
- **AND** the footer SHALL show circular social icons (Facebook, Twitter/X,
  Instagram)
- **AND** the footer SHALL show a copyright line in the bottom bar

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Sattva app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Sattva — Yoga Studio Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec.
- [ ] App renders all sections 1:1 in the order above (navbar → hero → intro →
      services → classes → pricing → testimonials → counter → blog → gallery →
      footer).
- [ ] Design tokens match the reference: Work Sans thin (200–300) headings,
      brand pink `#d291bc` primary in `@theme`, cyan `#78d5ef` accent, pill
      buttons (rounded-full, uppercase, letter-spaced), `#f8f9fa` light
      sections, solid-pink footer.
- [ ] 100% Vitest coverage on `apps/sattva` (lines/functions/branches/
      statements).
- [ ] Per-app gate `scripts/verify-app.sh sattva` passes.
- [ ] PR description includes: source template (ColorLib Yogalax), preview URL
      (https://preview.colorlib.com/theme/yogalax/), design tokens used, and
      what differs (renames, placeholder images via
      `https://picsum.photos/seed/sattva-<n>/<w>/<h>`, lucide-react icons).
