# Template: AxleKit (Automotive Garage)

## Purpose

AxleKit is a single-page automotive garage website template in the
free-react-templates monorepo. It is a React recreation of the
ColorLib "Automotive" free template (source:
https://colorlib.com/wp/template/automotive/), built under a
DIFFERENT name (**AxleKit**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 + jQuery automotive service garage landing
page: dark industrial photo hero, four alternating service cards, a
split-image "why choose us" section, a four-column product shop grid,
a testimonial carousel, stat counters on a dark parallax background,
three blog cards, and a multi-column footer with contact/quick links/news
and address blocks. Brand accent is blue-purple `#5F67FF`, body font is
Public Sans (Google Fonts), and the overall aesthetic is professional
industrial — dark imagery + clean white sections + blue-purple accents.

**WHAT MAKES AXLEKIT DISTINCT (signature behaviors):**

1. **Dark industrial photo hero.** Full-width dark automotive photo
   background (`set-bg` pattern), white "Welcome To" / "Auto-Motive
   Garage" headline left-aligned, subtext, and a blue-purple `.primary-btn`
   CTA ("Our Services"). No carousel/slider — single static hero.
2. **Alternating services grid.** Four service items (Engine Overhaul,
   Power Steering, Oil Change, Upgrades Car) in a 4-column grid where
   each item alternates between text+icon and a photo. The text column
   has a small icon, bold title, and description; the photo column has a
   full-bleed automotive photo. Ordering is: text1, photo1, text2,
   photo2, text3, photo3, text4, photo4 (with Bootstrap `order-lg-*`
   classes creating the alternating pattern).
3. **Split-image "Choose Us" section.** Full-width `container-fluid`
   with a left half (`offset-lg-5`) being a background photo, and the
   right half (`col-lg-7 offset-lg-5`) containing the section title,
   a checklist of four items (icon_check + text), and a CTA button.
4. **Product shop grid.** Four product cards in a responsive grid
   (4 cols on lg, 3 on md, 2 on sm) with product images, hover overlay
   actions (heart, eye, exchange icons), product name, price ($800.00),
   and "+Add To Cart" link.
5. **Testimonial carousel.** Owl-carousel with three quote blocks: a
   quotation mark icon (blue-purple `#5F67FF`), a testimonial paragraph,
   and dot navigation below. White background section.
6. **Stat counters on dark parallax.** Four counter items (All Project,
   Project Completed, Customers Action, Awards Winner — all showing 560+)
   on a dark background image with blue-purple numbers and white labels.
7. **Three-column latest news.** Blog cards with background images,
   author/date overlay, title, excerpt, and "Continue Reading" link.
8. **Multi-column footer.** Three top contact items (Booking/Phone/Location)
   in a row, then a four-column footer body (About/logo + Quick Links +
   News items + Address/contact info), plus a copyright bar with social
   icons.

## Naming

The ColorLib source name "Automotive" is FORBIDDEN as the app
name. **AxleKit** is the new, original name — kebab-case, no collision
with `apps/`, `openspec/specs/`, `docs/templates/`, or any TEMPLATES.md
name (verified: zero hits for `axlekit` in those locations). Source slug
+ preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Automotive" (page title: "AutoMotive | Template").
  Listed in TEMPLATES.md at line 899 (first unchecked item).
- **Live preview — REACHABLE (verified by direct fetch):**
  `https://preview.colorlib.com/theme/automotive/` (HTTP 200, 37,024 bytes).
  Stylesheets: `css/style.css` (42,561 bytes — ALL custom styling on top
  of Bootstrap 4), `css/bootstrap.min.css`, `css/font-awesome.min.css`,
  `css/elegant-icons.css`, `css/nice-select.css`, `css/jquery-ui.min.css`,
  `css/magnific-popup.css`, `css/owl.carousel.min.css`, `css/slicknav.min.css`.
  Scripts: `js/jquery-3.3.1.min.js`, `js/bootstrap.min.js`, `js/owl.carousel.min.js`,
  `js/main.js`. Fonts: **Public Sans** (Google Fonts, weights 400–900).
- **Live DOM structure (from the fetched HTML + style.css):**
  - `body` (Public Sans, #111111) → Header (top bar + nav) → Hero
    (full-width dark bg image) → Services (4 alternating items) →
    Choose Us (split image+text) → Products (4 cards) → Testimonial
    (carousel) → Counter (4 stats on dark bg) → Latest News (3 blog
    cards) → Footer (3 top items + 4-col body + copyright bar)
  - **Section order (verbatim from HTML comments):**
    1. Header Section (top bar: phone, hours, social icons; nav: Home,
       Services, Shop, Pages dropdown, Blog; search + cart icons)
    2. Hero Section (full-width `set-bg` photo, "Welcome To /
       Auto-Motive Garage", subtext, `.primary-btn` "Our Services")
    3. Services Section ("What We Do?" title, 4 service items with
       alternating text+image columns via `order-lg-*`)
    4. Chooseus Section (`container-fluid`, left photo, right text
       with checklist + `.primary-btn` "About Us")
    5. Products Section ("Our Products" title, 4 product cards with
       hover overlay actions)
    6. Testimonial (owl-carousel, 3 quote items)
    7. Counter Section ("About Our Statistics", 4 counter items on
       dark `set-bg` photo)
    8. Latest News Section (3 blog cards with `set-bg` images)
    9. Footer Section (3 top contact items + 4-col footer body)
    10. Footer copyright bar (social icons)
- **Screenshot (automotive-free-template.jpg, viewed in browser):**
  Professional automotive garage site. Dark industrial hero photo with
  white text and blue-purple CTA button. Clean white services section
  with alternating text/image cards. Split-image "choose us" section.
  Four product cards with hover effects. Testimonial carousel on white.
  Dark parallax counter section. Three blog cards. Multi-column dark
  footer. Overall: industrial, professional, blue-purple accent on
  dark/white contrast.

## Design tokens

| Token                | Value                              | Notes                                                                          |
| -------------------- | ---------------------------------- | ------------------------------------------------------------------------------ |
| `--color-brand`      | `#5F67FF`                          | Blue-purple primary accent: buttons, testimonial icons, counter numbers        |
| `--color-ink`        | `#111111`                          | Body text (Public Sans, base)                                                  |
| `--color-ink-light`  | `#727171`                          | Secondary/muted text                                                           |
| `--color-heading`    | `#353535`                          | Section headings, testimonial text, widget headings                            |
| `--color-white`      | `#ffffff`                          | Card backgrounds, section backgrounds, button text                             |
| `--color-dark-bg`    | `#25282C`                          | Footer widget background, dark sections                                        |
| `--color-dark-mid`   | `#353535`                          | Counter section overlay, testimonial active dot                                |
| `--color-muted-dot`  | `#b5b5b5`                          | Testimonial inactive carousel dots                                             |
| `--color-footer-text`| `#8d8d8d`                          | Footer secondary text                                                          |
| `--color-footer-dim` | `#b4b4b4`                          | Footer top item labels                                                         |
| `--font-body`        | 'Public Sans', sans-serif          | Google Fonts 400–900; body base 14px/1.6                                       |
| `--btn-primary`      | bg `#5F67FF`, text `#ffffff`       | `.primary-btn`; border-radius: 2px (sharp corners)                             |
| `--section-padding`  | `.spad` = padding-top/bottom 60px  | Standard section spacing                                                       |
| `--section-title`    | h2 + p below                       | Centered section headers with subtitle                                         |
| `--card-radius`      | none (square)                      | Product cards have no border-radius                                            |
| `--footer-bg`        | dark image `set-bg` pattern        | Background image with dark overlay                                             |
| `--counter-bg`       | dark image `set-bg` pattern        | Background image with dark overlay for counter section                         |

## Requirements

### Requirement: Header

The system SHALL render a two-tier header: a dark top contact bar and a
white main navigation bar.

#### Scenario: Top contact bar

- **GIVEN** the AxleKit app is rendered on a desktop viewport
- **THEN** a narrow dark bar SHALL render at the top with:
  - Left: phone icon + "(+123) 4567-7890-123", clock icon +
    "Mon-Sat: 10:00 - 16:00 / Sunday Close"
  - Right: "Find us on map →" link, social icons (Facebook, Twitter,
    Vimeo, Pinterest)
- **AND** the bar SHALL have white text/icons on a dark background

#### Scenario: Main navigation

- **GIVEN** the header is rendered
- **THEN** a white navigation bar SHALL render below the contact bar
  with:
  - Left: logo/gear icon + "AxleKit" brand text
  - Center: nav links — "Home" (active, with underline), "Services",
    "Shop", "Pages" (dropdown), "Blog"
  - Right: search icon + cart icon
- **AND** the active link SHALL have a blue-purple `#5F67FF` underline

### Requirement: Hero section

#### Scenario: Hero with dark photo background

- **GIVEN** the AxleKit app is rendered
- **THEN** a full-width hero section SHALL render with a dark automotive
  photo background
- **AND** white text SHALL overlay the image: "Welcome To" (smaller),
  "Auto-Motive Garage" (large heading), descriptive subtext
- **AND** a blue-purple `.primary-btn` "Our Services" SHALL render
  below the text
- **AND** the button SHALL have `#5F67FF` background, white text,
  and `border-radius: 2px`

### Requirement: Services section

#### Scenario: Four alternating service items

- **GIVEN** the hero section is rendered
- **THEN** a "What We Do?" section SHALL render with a centered title
  and subtitle
- **AND** four service items SHALL render in a grid: Engine Overhaul,
  Power Steering, Oil Change, Upgrades Car
- **AND** each item SHALL alternate between text (icon + title +
  description) and a photo, creating a checkerboard pattern
- **AND** the layout SHALL use `order-lg-*` classes to achieve the
  alternating text/image arrangement on desktop

### Requirement: Choose Us section

#### Scenario: Split image and text layout

- **GIVEN** the services section is rendered
- **THEN** a full-width section SHALL render with:
  - Left half: a background photo (set-bg pattern)
  - Right half (`col-lg-7 offset-lg-5`): section title "We Have 20
    Years Of Experience In Auto Car", subtitle, four checklist items
    (icon_check + lorem text), and a "About Us" `.primary-btn`
- **AND** the checklist items SHALL use a checkmark icon

### Requirement: Products section

#### Scenario: Four product cards

- **GIVEN** the choose-us section is rendered
- **THEN** an "Our Products" section SHALL render with four product
  cards in a responsive grid (4 cols lg, 3 cols md, 2 cols sm)
- **AND** each card SHALL have: product image, hover overlay with
  heart/eye/exchange icons, product name, price "$800.00", and
  "+Add To Cart" link
- **AND** the four products SHALL be: High Flow Fuel, Revolution
  Wheels, Tone Interior Kit, Matte Gunmetal

### Requirement: Testimonial section

#### Scenario: Carousel with quotes

- **GIVEN** the products section is rendered
- **THEN** a white-background testimonial section SHALL render with an
  owl-carousel containing three testimonial items
- **AND** each item SHALL have a blue-purple `#5F67FF` quotation mark
  icon and a testimonial paragraph
- **AND** dot navigation SHALL render below with active dot in `#353535`
  and inactive dots in `#b5b5b5`

### Requirement: Counter section

#### Scenario: Four stat counters on dark background

- **GIVEN** the testimonial section is rendered
- **THEN** an "About Our Statistics" section SHALL render on a dark
  background image
- **AND** four counter items SHALL display: All Project (560+),
  Project Completed (560+), Customers Action (560+), Awards Winner
  (560+)
- **AND** counter numbers SHALL be blue-purple `#5F67FF` and labels
  SHALL be white

### Requirement: Latest News section

#### Scenario: Three blog cards

- **GIVEN** the counter section is rendered
- **THEN** a "Latest News" section SHALL render with three blog cards
- **AND** each card SHALL have: background image with author/date
  overlay, article title, excerpt text, and "Continue Reading" link
- **AND** all three cards SHALL use the same structure and layout

### Requirement: Footer

#### Scenario: Multi-column footer

- **GIVEN** the latest news section is rendered
- **THEN** a dark-background footer SHALL render with:
  - Top row: three contact items (Booking/Appointment, Phone/
    123-4567-7890, Location/Find us on map)
  - Four-column body: About (logo + description + Contact Us button),
    Quick Links (5 links), News (3 items with dates), Address (street
    + fax/mobile/email)
- **AND** a copyright bar SHALL render below with social icons

#### Scenario: Component Dock attribution

- **GIVEN** the footer is rendered
- **THEN** the footer SHALL include a link to
  `https://www.componentdock.com/` branded as "Component Dock"
- **AND** the original ColorLib attribution SHALL NOT appear

### Requirement: Placeholder images

#### Scenario: Picsum placeholders

- **GIVEN** the template uses photographic images
- **THEN** all placeholder images SHALL use `https://picsum.photos/
  seed/axlekit-<n>/<w>/<h>` (deterministic per template)
- **AND** no ColorLib assets or image URLs SHALL be referenced
- **AND** the footer logo placeholder SHALL use a picsum seed as well

## Verification checklist

- [ ] Spec folder: `openspec/specs/template-axlekit/spec.md`
- [ ] Docs folder: `docs/templates/axlekit/tasks.md`
- [ ] New name "AxleKit" does not appear in apps/ or openspec/specs/
  (pre-implementation check)
- [ ] All design tokens documented: `#5F67FF` brand, Public Sans font,
  dark sections `#25282C`, section structure order
- [ ] All sections from the source DOM are accounted for in requirements
- [ ] Gherkin scenarios cover: header, hero, services, choose-us,
  products, testimonial, counter, latest-news, footer
- [ ] Placeholder image plan documented (picsum seeds)
- [ ] Component Dock footer requirement included
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
