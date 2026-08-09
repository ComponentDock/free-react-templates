# Template: Belle (Beauty Salon Landing)

## Purpose

Belle is a single-page beauty-salon landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Diva" design (see TEMPLATES.md, Beauty category), built under
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a bold, high-contrast black / hot-pink / white salon page: a
black top nav with a script logo and a "Book an Appointment" button, a
split hero slider ("Be bold. Be beautiful." + "See Offers" CTA over a makeup
portrait photo), a brand logo strip, a "Why Choose Us?" section with a
circular-progress stats row (+3500 Happy Clients, 12 New Locations, +175
Great Employees, 56K Instagram Followers), a hot-pink "Our Services" band
with 6 white-text service cards (Hair Dressing, Zen Massage, Manicure &
Pedicure, Make Up, Tanning Bed, Spa Treatments), a photo-background "Client
Testimonials" slider ("Maria Parker — Regular Client"), and a dark footer
with an about widget, a services link list, a "Make an appointment" form
(name / e-mail / service / date / message + Submit), footer nav, and a
copyright line. Belle recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Diva" — free beauty salon website template
  (source: https://colorlib.com/wp/template/diva/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/diva/`
  (HTTP 200, 14.8KB) + stylesheet `css/style.css` (26.8KB, CRLF line
  endings). The rendered DOM is the reference below; the TEMPLATES.md
  screenshot (`diva-free-template.jpg`, 1200×946) confirms the visual
  design: black nav bar with white script logo "Diva" + "Beauty Salon"
  subtitle in small sans, nav links (Home active with pink background),
  phone `+345 322 445 7789` in a pink-outlined box, solid pink "Book an
  Appointment" button; split hero — dark left half with "Be bold. Be
  beautiful." in large white uppercase headings, a pink dash accent above
  the headline, lorem paragraph, pink rectangular "See Offers" button, and
  "01 / 02" slider indicators (01 highlighted pink), right half a makeup
  portrait photo; overall aesthetic is chic, luxurious, high-contrast
  black / hot pink / white.
- **Section order (1:1):**
  1. Header (black bar): logo image `img/logo.png` (script "Diva" +
     "Beauty Salon" subtitle), nav links Home (active, pink bg), About Us,
     Services, News, Contact; phone number in pink-outlined box; "Book an
     Appointment" `.site-btn` (solid pink).
  2. `hero-section` (`class="hero-section set-bg"`, `data-setbg="img/bg.jpg"`,
     dark bg image; padding 121px top / 190px bottom): `hero-slider
owl-carousel` (`.hero-slider` = `border: 2px solid #e22b63; background:
#1e1e1e`) with 2 slides, each `hs-preview set-bg` (`img/hero-slider/1.jpg`):
     `hs-content h2` "Be bold. Be beautiful." (75px, line-height .95,
     uppercase, bold geometric sans; pink dash accent line above), lorem
     paragraph, "See Offers" `.site-btn`; slider indicators "01" (active,
     pink) / "02".
  3. `brands-section` (padding 105px 0): `brands-slider` of 5 client brand
     logos (`img/brands/1.png` … `5.png`).
  4. `intro-section spad set-bg` (`data-setbg="img/intro-bg.jpg"`): h2 "Why
     Choose Us?" (55–75px, `padding-top: 50px`) + two lorem paragraphs +
     stats row of 4 `circle-progress` counters (circular progress bars):
     "+3500 Happy Clients", "12 New Locations", "+175 Great Employees",
     "56K Instagram Followers" (`.fact h2` 48px, weight 900, Futura LT
     Bold).
  5. `services-section spad set-bg` (`data-setbg="img/service-bg.png"`,
     `background-color: #e22b63` — pink band with subtle pattern overlay):
     section title "Our Services" + 6 cards `col-lg-4 col-md-6 service
text-white` (3×2 grid): flaticon icon `i` (50px) + h2 + paragraph —
     Hair Dressing, Zen Massage, Manicure & Pedicure, Make Up, Tanning Bed,
     Spa Treatments.
  6. `testimonials-section set-bg` (`data-setbg="img/review-bg.jpg"`;
     padding 110px top / 81px bottom): "Client Testimonials" + slider with
     big quote mark, quote paragraph (lorem), `h4` "Maria Parker" +
     "Regular Client".
  7. `footer-section set-bg` (`data-setbg="img/footer-bg.jpg"`; dark,
     `padding-top: 135px`): footer widgets — about text widget; "Our
     Services" link list (Manicure, Pedicure, Massage, Hair Dressing, Spa,
     Beauty treatments, Wedding Hair, Botox, Slimming); "Make an
     appointment" contact widget: `form.fw-contact-form` with inputs "Your
     Name", "Your E-mail", "Service you need", "Date" (datepicker),
     textarea "Your Message", Submit `.site-btn`; `footer-nav` links (Home,
     About us, Services, News, Contact); `footer-bottom` copyright line
     ("Copyright © All rights reserved | This template is made with by
     Colorlib" → replace with repo-standard footer credit).
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#e22b63** (hot pink / magenta) — `.site-btn` bg +
    border, `services-section` background, `.hero-slider` 2px border,
    active nav link bg, links, `.service.popular-item a` (28+ usages).
  - Neutrals: black **#1e1e1e / #212121 / #000** (nav, hero-slider bg,
    footer, text), white **#fff** (text on dark/pink), greys **#b0b0b0 /
    #7e7e7e / #6d6d6d** (secondary text), light greys #e2e2e2/#b6b5b5.
  - Fonts: **'Futura LT' / 'Futura LT Bold'** (geometric sans — commercial;
    NOT on Google Fonts; use free stand-in **Jost** (closest geometric
    Futura-like) or Montserrat via Google Fonts `<link>`; headings bold,
    uppercase; body/nav regular). Logo is a script-style image — recreate
    as text "Belle" in an elegant script font (e.g. Dancing Script /
    Great Vibes) with "Beauty Salon" in small sans below.
  - Buttons `.site-btn`: `font-size: 16px; color: #fff; padding: 12px 30px;
min-width: 145px; border: 2px solid #e22b63; background: #e22b63;
transition: all 0.3s` (hover keeps white text; rectangular, no radius).
  - Headings: base `h2` 36px; `.hs-content h2` (hero) 75px,
    `line-height: 0.95`, `padding-top: 25px`; `.intro-content h2` (Why
    Choose Us) 55–75px, `padding-top: 50px`; `.section-title h2` 55–74px;
    `.fact h2` (stats) 48px weight 900.
  - Spacing: `.spad` 110px/110px; hero 121px/190px; brands 105px;
    testimonials 110px/81px; footer `padding-top: 135px`.
  - Section backgrounds: hero = dark photo (bg.jpg) + dark slider panel
    (#1e1e1e, pink border); intro = photo (intro-bg.jpg); services = solid
    pink #e22b63 + pattern overlay (service-bg.png); testimonials = photo
    (review-bg.jpg); footer = photo (footer-bg.jpg) over dark.
  - Stats: `circle-progress` circular bars with 48px bold numbers and
    labels.
- **Recreation decisions:** repo-standard navbar (dark bg, site name
  "Belle" in script + "Beauty Salon" subtitle, links Home (active pink
  pill)/About Us/Services/News/Contact, phone + repo-standard dark-mode
  toggle) — keep the pink "Book an Appointment" `.site-btn` in the header;
  hero = split panel with 2-slide carousel ("Be bold. Be beautiful.",
  pink dash accent, lorem, "See Offers" button, 01/02 indicators); brands
  strip (5 grayscale logos); Why Choose Us (photo bg + 2 paragraphs + 4
  circular-progress stats with picsum-based or pure-CSS circles); services
  pink band 3×2 white cards (lucide icons: Scissors, Flower2/Sparkles,
  Hand, Brush/Palette, Sun, Waves); testimonials photo band with quote
  carousel ("Maria Parker — Regular Client"); dark footer with about
  widget, services link list, appointment form (validated; success state),
  footer nav, copyright; all images picsum-seeded
  (`picsum.photos/seed/belle-N/w/h`); Google Fonts via `<link>` (Jost +
  script accent); icons via lucide-react.

Belle lives in `apps/belle` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Header / navigation

The system SHALL render a dark header bar with the site name, primary
navigation, a phone number, and a "Book an Appointment" button.

#### Scenario: Header content

- **GIVEN** the Belle page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show the site name "Belle" styled as an elegant
  script-style logo with a "Beauty Salon" subtitle
- **AND** it SHALL show nav links Home (styled as the active item with a
  pink background), About Us, Services, News, and Contact
- **AND** it SHALL show a phone number (e.g. +345 322 445 7789)
- **AND** it SHALL show a "Book an Appointment" button with a solid pink
  background and white text

### Requirement: Hero slider

The system SHALL render a full-width hero with a two-slide carousel, a
headline, supporting copy, a CTA button, and slide indicators.

#### Scenario: Hero slide content

- **GIVEN** the page is rendered
- **WHEN** the hero slider is displayed
- **THEN** it SHALL show the headline "Be bold. Be beautiful." in large
  uppercase bold geometric sans with a pink dash accent above it
- **AND** it SHALL show a supporting paragraph and a "See Offers" button
- **AND** it SHALL show slide indicators "01" and "02" with "01" styled
  active

#### Scenario: Slide navigation

- **GIVEN** the hero slider is displayed
- **WHEN** the user advances the slider
- **THEN** the active indicator SHALL change accordingly
- **AND** the slide content SHALL be replaced by the next slide

### Requirement: Brand strip

The system SHALL render a strip of client brand logos below the hero.

#### Scenario: Brand logos

- **GIVEN** the page is rendered
- **WHEN** the brands section is displayed
- **THEN** it SHALL show at least five brand logos in a row (grayscale or
  muted styling)

### Requirement: Why Choose Us with stats

The system SHALL render a "Why Choose Us" section with supporting copy and
four circular-progress stat counters.

#### Scenario: Stats row

- **GIVEN** the page is rendered
- **WHEN** the Why Choose Us section is displayed
- **THEN** it SHALL show a heading "Why Choose Us?" and two paragraphs of
  copy
- **AND** it SHALL show four stats, each with a circular progress indicator
  and a number + label: +3500 Happy Clients, 12 New Locations, +175 Great
  Employees, 56K Instagram Followers

### Requirement: Services band

The system SHALL render a hot-pink services band with six service cards in
a 3×2 grid, each with an icon, a title, and a description.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL have a hot pink (#e22b63) background with white text
- **AND** it SHALL show a heading "Our Services"
- **AND** it SHALL render six cards in a 3×2 grid: Hair Dressing, Zen
  Massage, Manicure & Pedicure, Make Up, Tanning Bed, and Spa Treatments
- **AND** each card SHALL show an icon, a title, and a short description

### Requirement: Testimonials

The system SHALL render a "Client Testimonials" section on a photo
background with a quote carousel.

#### Scenario: Testimonial slides

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show a heading "Client Testimonials"
- **AND** it SHALL show a quote, an author name (e.g. "Maria Parker"), and
  a role ("Regular Client")

### Requirement: Footer

The system SHALL render a dark footer with an about widget, a services
link list, an appointment form, footer navigation, and a copyright line.

#### Scenario: Footer widgets

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an about text widget
- **AND** it SHALL show a "Our Services" link list (Manicure, Pedicure,
  Massage, Hair Dressing, Spa, Beauty treatments, Wedding Hair, Botox,
  Slimming)
- **AND** it SHALL show a "Make an appointment" form with inputs for name,
  e-mail, service, date, a message textarea, and a "Submit" button
- **AND** it SHALL show footer nav links (Home, About us, Services, News,
  Contact) and a copyright line

#### Scenario: Appointment form submit

- **GIVEN** the appointment form is displayed
- **WHEN** the user submits the form with a valid e-mail and the required
  fields filled
- **THEN** the form SHALL show a success message
- **AND** the input fields SHALL no longer be present

#### Scenario: Appointment form validation

- **GIVEN** the appointment form is displayed
- **WHEN** the user submits the form with an invalid e-mail or empty
  required fields
- **THEN** the form SHALL show validation errors
- **AND** it SHALL NOT show a success message

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Belle app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, hero slider, brand strip, Why
  Choose Us, services, testimonials, and footer inside the main landmark
  in the original's order
- **AND** the document title SHALL be "Belle — Beauty Salon"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- belle` passes: typecheck → lint → vitest (100%
      coverage) → build.
- [ ] Section order matches the original 1:1 (header → hero slider →
      brands → Why Choose Us + stats → services → testimonials → footer
      with appointment form).
- [ ] Design tokens applied: brand pink #e22b63 (buttons, services band,
      hero-slider border, active nav), dark #1e1e1e/#000 (nav, hero panel,
      footer), white text on dark/pink, greys #b0b0b0/#7e7e7e for secondary
      text, geometric sans headings (Jost, bold/uppercase) + script logo
      accent, rectangular buttons (min-width 145px, 2px pink border).
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Diva), preview URL, tokens,
      and renames.
