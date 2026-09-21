# Template: FitNova (Health Fitness / Yoga Studio)

## Purpose

FitNova is a single-page yoga/fitness studio website in the
free-react-templates monorepo. It is a React recreation of the ColorLib
"Ahana" free template (source: https://colorlib.com/wp/template/ahana/),
built under a DIFFERENT name (**FitNova**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a multi-section single-page site with a coral-to-peach
gradient hero, Playfair Display serif headings, Open Sans body text,
carousel-based classes/trainers/testimonials, pricing cards, a sign-up
form with embedded map, an Instagram-style gallery, and a 4-column
footer. The aesthetic is warm, feminine, yoga-focused — coral/peach
gradient throughout, pill-shaped buttons, rounded elements, and soft
pink-beige section backgrounds.

## Naming

The ColorLib source name "Ahana" is FORBIDDEN as the app name. **FitNova**
is the new, original name — single lowercase word (kebab-case: `fitnova`),
no collision with `apps/`, `openspec/specs/`, or `docs/templates/`
(verified: zero hits). Source slug: `ahana`. Preview URL:
https://preview.colorlib.com/theme/ahana/

## Design reference (replication findings)

- **Original:** ColorLib "Ahana" (page title: "Ahana | Yoga HTML
  Template"). Listed in TEMPLATES.md under **Health Fitness (72)**
  (line 1829). Single-page yoga studio site with carousel-driven
  content sections.

- **Live preview — REACHABLE (verified by direct fetch):**
  `https://preview.colorlib.com/theme/ahana/` returns HTTP 200.
  Stylesheets: `css/style.css` (4,236 lines — ALL custom styling,
  no Bootstrap theme overrides). External deps: Bootstrap grid,
  Font Awesome, Owl Carousel, Nice Select, Magnific Popup, SlickNav,
  Animate.css. Fonts: Google Fonts "Playfair Display" (headings) +
  "Open Sans" (body). Material Icons for UI glyphs.

- **Live DOM structure (from fetched HTML + CSS):**
  - `body` (Open Sans, 14px, #333) → `header.header-section` →
    `div.header-top` (white bg, address/phone/hours/language row) →
    `div.header-bottom` (transparent over hero, logo left, nav center,
    search + hamburger right)
  - `section.hero-section` (coral-peach gradient bg, Owl Carousel slider,
    social links column left, dot navigation right, scroll arrow bottom)
  - `section.about-section` (white bg, centered section title with logo
    icon + heading + subtitle, 2-col: image left, 3 feature items right
    with circular icon + heading + description, "explore more" CTA)
  - `section.classes-section` (white bg, Owl Carousel of class cards:
    image + title + schedule/time meta + description + trainer avatar
    + "book now" CTA)
  - `section.trainer-section` (white bg, Owl Carousel of trainer cards:
    circular portrait + name + title + description + social icon row)
  - `section.review-section` (full-width background image with coral
    overlay, Owl Carousel of testimonials: circular avatar + quote text
    + name + title)
  - `section.event-section` (white bg, 2-col: video thumbnail with play
    button left, event list right with image + title + metadata icons)
  - `section.pricing-section` (warm pink-beige bg #f9f2f0, 4 pricing
    cards: Beginner $59 / Intermediate $99 / Advanced $159 /
    Professional $199, each with feature list + "Get started" line btn)
  - `section.signup-section` (white bg, 2-col: Google Map left, sign-up
    form right with first/last name + email + phone + message textarea
    + "Get started" gradient CTA)
  - `div.gallery-section` (Owl Carousel of Instagram-style images with
    hover overlay showing Instagram icon + handle)
  - `footer.footer-section` (white bg, 4-col: company info with logo +
    contact list, Company links, About Us links, Open hours + email
    subscribe form; bottom row: social icons left, copyright right)

- **Screenshot (viewed via fetched image):**
  Full-width hero with a coral-to-peach diagonal gradient
  (#f65d5d → #fdb07d). Two women in yoga poses (partner yoga, standing
  backbend) overlaid on the gradient with a large semi-transparent
  "YOGA" text watermark. White top bar with address and phone. Logo
  "AHANA" in serif font on white header bar. Below hero: white section
  with "WELCOME TO AHANA" heading, subtitle, and feature icons. Warm,
  inviting, feminine aesthetic. **Color palette is dominated by the
  coral #f65d5d and peach #fdb07d gradient.**

## Design tokens

| Token                | Value                                     | Notes                                                                        |
| -------------------- | ----------------------------------------- | ---------------------------------------------------------------------------- |
| `--color-brand`      | `#f65d5d`                                 | Primary coral/salmon — hero gradient start, buttons, links, icons            |
| `--color-accent`     | `#fdb07d`                                 | Secondary peach/orange — hero gradient end, button gradient                  |
| `--gradient-brand`   | `linear-gradient(145deg, #f65d5d, #fdb07d)` | Hero bg, button bg, CTA backgrounds (also reversed variant)               |
| `--color-text`       | `#333333`                                 | Primary body text                                                            |
| `--color-text-muted` | `#666666`                                 | Secondary/description text                                                   |
| `--color-text-light` | `#999999`                                 | Meta text, placeholder text                                                  |
| `--color-bg`         | `#ffffff`                                 | Page/section backgrounds                                                     |
| `--color-bg-warm`    | `#f9f2f0`                                 | Pricing section background (warm pink-beige)                                 |
| `--color-bg-light`   | `#fafafa`                                 | Light section background                                                     |
| `--font-heading`     | 'Playfair Display', serif                 | All headings (h2, h3, h4, h6) — Google Fonts                                 |
| `--font-body`        | 'Open Sans', sans-serif                   | Body text, paragraphs, navigation — Google Fonts                             |
| `--btn-radius`       | `50px`                                    | Pill-shaped buttons                                                          |
| `--btn-padding`      | `14px 30px`                               | Button vertical/horizontal padding                                           |
| `--btn-min-width`    | `167px`                                   | Minimum button width                                                         |
| `--btn-font`         | `16px, 600, uppercase`                    | Button text styling                                                          |
| `--btn-gradient`     | `linear-gradient(145deg, #fdb07d, #f65d5d)` | Gradient button bg (reversed from hero — peach→coral)                     |
| `--card-radius`      | `12px`–`15px`                             | Pricing cards, class cards                                                   |
| `--avatar-radius`    | `50%`                                     | Trainer portraits, testimonial avatars, social circles                       |
| `--section-padding`  | `spad` class                              | Consistent vertical section spacing                                          |
| `--social-radius`    | `50%`                                     | Social icon circles (white bg)                                               |

## Requirements

### Requirement: Header

The system SHALL render a two-part header: a white top bar with contact
info and a navigation bar with the logo and main menu.

#### Scenario: Top bar content

- **GIVEN** the FitNova app is rendered on desktop
- **THEN** a white top bar SHALL display address ("184 Main Collins
  Street"), phone number ("(965) 436 3274"), business hours
  ("Mon - Fri: 6:30am - 07:45pm"), and a language selector ("EN")
- **AND** Material Icons SHALL be used for map, phone, alarm, and
  language glyphs (or lucide equivalents)

#### Scenario: Navigation bar

- **GIVEN** the header bottom bar is rendered
- **THEN** the FitNova logo (text-based, serif font) SHALL appear on
  the left
- **AND** the main navigation SHALL list: Home, About, Classes, Trainers,
  Events, Blog, Contact
- **AND** a search icon and hamburger menu icon SHALL appear on the right
- **AND** the nav bar SHALL overlay the hero section (transparent
  background) on desktop

#### Scenario: Responsive header

- **GIVEN** a viewport at or below 768px
- **THEN** the top bar contact info (address, phone, hours) SHALL be
  hidden on mobile
- **AND** the navigation SHALL collapse to a hamburger toggle

### Requirement: Hero section

The system SHALL render a full-width hero with the coral-peach gradient,
carousel slides, social links, and dot navigation.

#### Scenario: Hero gradient and layout

- **GIVEN** the hero section is rendered on desktop
- **THEN** the background SHALL be a diagonal gradient from coral
  `#f65d5d` to peach `#fdb07d`
- **AND** a full-width image SHALL fill the hero area
- **AND** a large semi-transparent "YOGA" watermark text SHALL overlay
  the image
- **AND** social media icon links (Facebook, Instagram, Twitter, YouTube)
  SHALL render in a vertical column on the left edge
- **AND** carousel dot indicators SHALL render on the right edge
- **AND** a scroll-down arrow SHALL appear at the bottom center

#### Scenario: Hero content per slide

- **GIVEN** a hero slide is displayed
- **THEN** it SHALL show a yoga-themed image with the gradient overlay
- **AND** a heading and subheading SHALL be centered on the slide
- **AND** a CTA button (pill-shaped, gradient bg) SHALL be present

### Requirement: About section

The system SHALL render a two-column about section with a welcome heading,
image, and feature items.

#### Scenario: About layout

- **GIVEN** the about section is rendered
- **THEN** a centered section title SHALL display with a logo icon,
  "Welcome to FitNova" heading (Playfair Display), and a subtitle
- **AND** the left column SHALL show a yoga practice image
- **AND** the right column SHALL list 3 feature items, each with a
  circular icon, a heading (h4, Playfair Display), and a description
- **AND** features are: "Full Rejuvenation", "Extension of Spring",
  "Against Aging"
- **AND** a "Explore More" pill button (gradient bg) SHALL appear below
  the features

### Requirement: Classes section

The system SHALL render a carousel of yoga class cards.

#### Scenario: Class cards

- **GIVEN** the classes section is rendered
- **THEN** a centered section title SHALL display ("Popular Classes")
- **AND** a carousel SHALL show class cards, each containing:
  - A class image
  - A class title (h4, Playfair Display, linked)
  - Schedule metadata (days + time with Material Icon glyphs)
  - A short description
  - A trainer avatar (circular) + name + role at the bottom
  - A "Book Now" gradient pill button
- **AND** at least 3 class cards SHALL be visible (Artistic Yoga,
  Traditional Hatha, Yoga Therapy)

### Requirement: Trainer section

The system SHALL render a carousel of trainer profile cards.

#### Scenario: Trainer cards

- **GIVEN** the trainer section is rendered
- **THEN** a centered section title SHALL display ("Our Trainer Yoga")
- **AND** a carousel SHALL show trainer cards, each containing:
  - A circular portrait image
  - Name (h4, Playfair Display)
  - Title "Yoga Trainer" (h6)
  - A certification description
  - Social icon row (Facebook, Instagram, Twitter, LinkedIn)
- **AND** at least 3 trainers SHALL be present

### Requirement: Review/Testimonial section

The system SHALL render a full-width testimonial carousel with a
background image and coral overlay.

#### Scenario: Testimonial layout

- **GIVEN** the review section is rendered
- **THEN** a full-width background image SHALL display with a coral
  overlay (`#f65d5d` at partial opacity)
- **AND** a centered carousel SHALL show testimonial cards, each with:
  - A circular avatar image
  - A quote paragraph (white text)
  - The person's name (h4, white)
  - Their title/role (h6, white)
- **AND** dot navigation SHALL allow slide switching

### Requirement: Events section

The system SHALL render an events section with a video thumbnail and
an event list.

#### Scenario: Events layout

- **GIVEN** the events section is rendered
- **THEN** a centered section title SHALL display ("Upcoming Events")
- **AND** the left column SHALL show a video thumbnail image with a
  play button overlay (coral circle, white triangle)
- **AND** the right column SHALL list 3 events, each with:
  - A thumbnail image
  - Event title (h4, Playfair Display, linked)
  - Metadata: organizer name, date, and location (with Material Icons)

### Requirement: Pricing section

The system SHALL render 4 pricing cards on a warm pink-beige background.

#### Scenario: Pricing cards

- **GIVEN** the pricing section is rendered
- **THEN** the section background SHALL be warm pink-beige `#f9f2f0`
- **AND** a centered section title SHALL display ("Pricing Plans")
- **AND** 4 pricing cards SHALL render in a row:
  1. Beginner — $59/month
  2. Intermediate — $99/month
  3. Advanced — $159/month
  4. Professional — $199/month
- **AND** each card SHALL contain:
  - Plan name (h4)
  - Price (h3, large)
  - "Per month" subtitle
  - Feature list (4 items: classes count, availability, towels, expiry)
  - "Get Started" button (line-gradient variant: gradient border,
    white interior, gradient text)

### Requirement: Sign-up section

The system SHALL render a sign-up form alongside a map embed.

#### Scenario: Sign-up layout

- **GIVEN** the sign-up section is rendered
- **THEN** the left column SHALL show an embedded Google Map (iframe)
- **AND** the right column SHALL display a heading ("Sign Up for Our
  Classes"), a subtitle, and a form with:
  - First Name, Last Name, Email, Phone Number inputs
  - A Message textarea
  - A "Get Started" gradient pill button
- **AND** form inputs SHALL have rounded corners and border styling
  matching the design

### Requirement: Gallery section

The system SHALL render an Instagram-style image gallery carousel.

#### Scenario: Gallery carousel

- **GIVEN** the gallery section is rendered
- **THEN** a horizontal carousel of square/landscape images SHALL display
- **AND** each image SHALL show an Instagram icon + handle overlay on
  hover
- **AND** at least 6 gallery images SHALL be present

### Requirement: Footer

The system SHALL render a 4-column footer with company info, links,
hours, and a newsletter form.

#### Scenario: Footer columns

- **GIVEN** the footer is rendered
- **THEN** column 1 SHALL show the FitNova logo, a short description,
  and contact info (phone, email, address with Material Icons)
- **AND** column 2 SHALL list "Company" links
- **AND** column 3 SHALL list "About Us" links
- **AND** column 4 SHALL show "Open time" hours and an email subscribe
  form (input + send button)
- **AND** a footer bottom row SHALL show social icons (Facebook,
  Instagram, Twitter, LinkedIn) on the left and copyright text on the
  right

#### Scenario: Component Dock attribution

- **GIVEN** the footer is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics throughout all sections.

#### Scenario: Semantic HTML

- **GIVEN** the FitNova app is rendered
- **THEN** the header SHALL use `<header>` with a `<nav>` for navigation
- **AND** each content section SHALL use `<section>` with appropriate
  headings
- **AND** the footer SHALL use `<footer>`
- **AND** all images SHALL have descriptive `alt` text
- **AND** interactive elements SHALL have visible focus-visible rings
- **AND** carousel controls SHALL be keyboard-accessible with
  `aria-label` attributes

### Requirement: Responsive design

The system SHALL be responsive across desktop, tablet, and mobile.

#### Scenario: Mobile layout

- **GIVEN** a viewport at or below 768px
- **THEN** the hero text and content SHALL stack vertically
- **AND** multi-column layouts (about, events, pricing, sign-up, footer)
  SHALL collapse to single-column
- **AND** carousels SHALL show one card at a time on mobile
- **AND** the top bar SHALL be hidden on mobile

## Verification checklist

- [ ] `npm run verify:app -- fitnova` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/ahana/: coral-peach gradient
      hero, "WELCOME TO FITNOVA" about section, class cards carousel,
      trainer carousel, testimonial section with background image,
      events with video, 4 pricing cards on #f9f2f0, sign-up form
      with map, gallery carousel, 4-column footer.
- [ ] Behavior check: hero carousel auto-plays and responds to dots;
      classes/trainers/testimonials carousels scroll; pricing cards
      render correct prices; form has all fields; gallery images show
      hover overlay.
- [ ] Responsive check at 768px and 375px (stacked columns, hidden top
      bar, single-card carousels, no horizontal overflow).
- [ ] Footer links to https://www.componentdock.com/ ("Component Dock").
