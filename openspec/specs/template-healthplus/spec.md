# Template: HealthPlus (Medical/Health)

## Purpose

HealthPlus is a single-page medical/health website template in the
free-react-templates monorepo. It is a React recreation of the ColorLib
"Health" free template (source:
https://colorlib.com/wp/template/health/), built under a DIFFERENT name
(**HealthPlus**), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a Bootstrap 4 + jQuery medical site with a fixed two-tier
header (top utility bar + green navigation bar), full-width hero with
background image, 3-column info boxes (2 service cards + 1 appointment
form), parallax CTA section, 6 icon-box service cards, department
carousel, FAQ accordion + latest news split, and a parallax footer with
contact form + opening hours.

**WHAT MAKES HEALTHPLUS DISTINCT (signature behaviors):**

1. **Two-tier fixed header.** Top bar (white bg) with logo "HEALTH+"
   (the "+" is green `#32c69a`), utility links (Help Desk | Emergency
   Services | Appointment), and a phone number with green phone icon.
   Below it: green `#32c69a` nav bar with 5 uppercase links (HOME,
   ABOUT US, SERVICES, NEWS, CONTACT) and a white search input on the
   right. Header scrolls with the page (no sticky behavior in the
   source — the `.scrolled` class exists but is never triggered).

2. **Full-width hero with background image.** Hero section with a
   blurred hospital/medical background image, white heading "Medical
   Services that you can trust" (60px, weight 600), subtitle paragraph,
   and a green "READ MORE" button. Content is left-aligned within a
   container.

3. **Three-column info boxes (2 cards + 1 form).** Two service cards
   (Free Consultations, Emergency Care) each with an image, title
   (20px, #404040), description, and green "READ MORE" button. The
   third column is an appointment form (Department select, Doctor select,
   Name input, Phone input, green "MAKE AN APPOINTMENT" submit button)
   on a `#e5ecf1` background.

4. **Parallax CTA section.** Full-width parallax background image with
   white text "Make an appointment with one of our professional Doctors"
   and a green "CALL NOW" button.

5. **6 icon-box service grid.** 3×2 grid of service cards (Cardiology,
   Gastroenterology, Medical Lab, Dental Care, Surgery, Neurology),
   each with an SVG icon + title + description. Centered green "READ
   MORE" button below.

6. **Department carousel.** Horizontal slider of department cards
   (Neonatology, Dentistry, Orthopedics, Laboratory) with images,
   titles, and "Read More" links. Cards have hover effect (shadow +
   overlay + green bottom border). Green slider nav button on the right.

7. **FAQ accordion + Latest News split.** Left column: "Faq & Stuff"
   title + 3 accordion items (green active state with +/- toggle).
   Right column: "Latest News" title + 3 blog post cards with thumbnail
   images, titles, author/date info, and comment counts.

8. **Parallax footer.** Full-width parallax background with 3 columns:
   logo + about text + social icons (left), Quick Contact form (center),
   Opening Hours table (right, dark semi-transparent overlay). Bottom
   bar with nav links, utility links, and phone number on dark
   semi-transparent background.

## Naming

The ColorLib source name "Health" is FORBIDDEN as the app name. **HealthPlus**
is the new, original name — single lowercase word, kebab-case, no
collision with `apps/`, `openspec/specs/`, `docs/templates/`, or any
TEMPLATES.md name. Source slug: `health`, preview URL recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Health" (page title: "Health"). Listed in
  TEMPLATES.md under the Health/Healthcare category (line 2236). Source
  URL: https://colorlib.com/wp/template/health/

- **Live preview — REACHABLE (verified 2026-09-24 by direct fetch):**
  `https://preview.colorlib.com/theme/health/` returns a full page
  (598 lines, 24,765 bytes, `<title>Health</title>`). Stylesheets:
  `styles/bootstrap4/bootstrap.min.css` (Bootstrap 4), `plugins/font-awesome-4.7.0/css/font-awesome.min.css`
  (Font Awesome 4 icons — REPLACE with lucide-react, do NOT ship the
  font), `plugins/OwlCarousel2-2.2.1/owl.carousel.css` + `owl.theme.default.css`
  + `animate.css` (OwlCarousel2 — replace with a React carousel library
  or CSS-based slider), `styles/main_styles.css` (1,697 lines — ALL
  custom styling), `styles/responsive.css`. Scripts: jQuery 3.3.1,
  Bootstrap 4, OwlCarousel2, easing.js, parallax.js, custom.js. Fonts:
  Google Fonts **Montserrat** (300, 300i, 400, 400i, 500, 500i, 600,
  600i, 700, 700i, 800, 900 — only 400/500/600/700 actually used in
  the CSS).

- **Live DOM structure (from the fetched HTML + CSS):**
  - `div.super_container` → `div.home` (full-width hero with bg image)
    → `header.header` (absolute, top 0, white bg, z-index 100)
    - Top bar: `div.header_top` (91px height) → logo "health+"
      (24px bold `#404040`, "+" at 36px `#32c69a`), utility nav
      (`#838383`, 14px 500, pipe-separated), phone icon+number
      (`#32c69a` icon, `#404040` text)
    - Nav bar: `div.header_nav` → green `#32c69a` bg, 78px height →
      main nav (13px 600 uppercase white links, 70px gap), search
      form (337px wide, white bg input)
  - Hero: `div.home_container` (absolute, top 38%) → heading (60px
    600 white), subtitle (16px 600 white, 1.875 line-height), green
    button
  - Info section: `div.info` (white bg, 100px padding) → 3 columns:
    - Free Consultations card (`#f4f8fb` bg, image + title + text +
      button)
    - Emergency Care card (same pattern)
    - Appointment form (`#e5ecf1` bg): title, 2 selects (Department,
      Doctor), Name input, Phone input, green submit button
  - CTA: `div.cta` (parallax bg image) → title (30px 600 white),
    subtitle (14px 500, white 0.76 opacity), green button
  - Services: `div.services` (`#f4f8fb` bg, 99px padding) → section
    title + 6 icon boxes in 3-col grid (icon 49×49px + title 20px 600
    `#404040` + description 14px 500 `#838383`), centered green button
  - Departments: `div.departments` (white bg) → section title + slider
    (OwlCarousel2) of dept cards (image + content with green 4px
    bottom border on hover, shadow `0px 20px 46px rgba(0,0,0,0.1)`)
  - FAQ & News: `div.stuff` (`#f4f8fb` bg) → split layout:
    - Left: FAQ accordions (white bg, 49px height, 50px green left
      bar with +/- icon, active = green bg `#32c69a` + white text)
    - Right: Latest News (3 blog posts with 73×73px thumbnails, title,
      author/date meta, comment count)
  - Footer: `footer.footer` (parallax bg image) → 3 columns:
    - About: logo + text (`#d3d3d3`) + social icons (white) + copyright
    - Contact: form (Name, Email inputs + Message textarea on `#6a6d72`
      bg, green submit button)
    - Hours: dark overlay (`rgba(22,22,23,0.61)`), hours list (white
      text)
    - Bottom bar: dark overlay (`rgba(18,17,17,0.66)`), nav links
      (`#a0a1a1`), utility links (pipe-separated), phone number
      (`#32c69a`)

- **Screenshot (viewed 2026-09-24 in the browser):** White top bar with
  bold "HEALTH+" logo (dark text, green "+"), utility links and phone
  number. Green `#32c69a` navigation bar with white uppercase links and
  a white search box on the right. Large hero section with a blurred
  hospital/medical background photo and a female doctor with stethoscope
  prominently featured. White heading "Medical Services that you can
  trust" left-aligned, white subtitle text below, and a green "READ
  MORE" button. Below the hero: three info cards in a row (two with
  images and one grey form card). Clean, professional medical aesthetic
  with a teal/green and white color palette. Montserrat font throughout.

## Design tokens

| Token              | Value                                  | Notes                                                                     |
| ------------------ | -------------------------------------- | ------------------------------------------------------------------------- |
| `--color-brand`    | `#32c69a`                              | Primary green/teal — nav bar bg, buttons, active accordion, hover states, phone icon, logo "+" accent |
| `--color-brand-alt`| `#329fec`                              | Secondary blue — hamburger hover only                                      |
| `--color-ink`      | `#404040`                              | Headings, logo text, phone number, accordion text, dept titles            |
| `--color-ink-dim`  | `#838383`                              | Body text, nav utility links, accordion subtitle, service descriptions, news meta |
| `--color-ink-body` | `#929191`                              | Paragraph body text                                                       |
| `--color-bg`       | `#FFFFFF`                              | Page background, header top bar, info section, departments, accordion items |
| `--color-bg-light` | `#f4f8fb`                              | Info boxes bg, services bg, FAQ & news section bg                         |
| `--color-bg-form`  | `#e5ecf1`                              | Appointment form container bg                                             |
| `--color-bg-footer-input` | `#6a6d72`                      | Footer contact form input bg                                              |
| `--color-footer-hours` | `rgba(22,22,23,0.61)`               | Opening hours dark overlay                                                |
| `--color-footer-bar` | `rgba(18,17,17,0.66)`                | Bottom footer bar dark overlay                                            |
| `--color-error`    | `#db5246`                              | Form-control error text                                                   |
| `--color-accent`   | `#ffa07f`                              | Link hover underline (salmon)                                             |
| `--color-link-active` | `rgba(255,255,255,0.75)`           | Active nav link (dimmed white)                                            |
| `--font-body`      | 'Montserrat', sans-serif               | Google Fonts; used weights: 400/500/600/700 (source imports 300-900)     |
| `--btn`            | `#32c69a` bg, white text              | 137×54px, uppercase, 11px 500, 0.2em letter-spacing; 400ms hover         |
| `--btn-submit`     | `#32c69a` bg, white text              | Full-width (appointment + footer contact), 54px height, uppercase 11px   |
| `--section-py`     | `99px–100px`                           | Top/bottom padding for sections                                           |
| `--header-top-h`   | `91px`                                 | Top utility bar height                                                    |
| `--header-nav-h`   | `78px`                                 | Green navigation bar height                                               |
| `--hero-h`         | `874px`                                | Full hero section height                                                  |
| `--dept-hover`     | shadow + `#f4f8fb` bg + overlay       | `box-shadow: 0px 20px 46px rgba(0,0,0,0.1)`, bg `#f4f8fb`, image overlay `rgba(0,0,0,0.49)` |
| `--dept-border`    | `#32c69a` 4px bottom                  | Green accent line on dept card content                                    |
| `--faq-active`     | `#32c69a` bg + white text             | Active accordion item; +/- icon on 50px left bar (`#32c69a` bg)           |

## Requirements

### Requirement: Two-tier header

The system SHALL render a fixed two-tier header with a white top utility
bar and a green navigation bar below it.

#### Scenario: Top utility bar

- **GIVEN** the HealthPlus app is rendered on a desktop viewport
- **THEN** a white header bar SHALL render at the top of the page with:
  - Logo "health" + green "+" accent (24px bold `#404040`, "+" at 36px
    `#32c69a`)
  - Utility links (Help Desk | Emergency Services | Appointment) in
    `#838383`, 14px 500, pipe-separated
  - Phone icon (green `#32c69a`) + phone number (16px 600 `#404040`)
    right-aligned

#### Scenario: Green navigation bar

- **GIVEN** the HealthPlus app is rendered
- **THEN** a green `#32c69a` navigation bar SHALL render below the
  utility bar (78px height) with 5 uppercase white links (HOME, ABOUT
  US, SERVICES, NEWS, CONTACT) at 13px 600 weight
- **AND** a white search input SHALL render on the right side of the
  nav bar (337px wide, 37px height)

#### Scenario: Responsive header

- **GIVEN** a viewport at or below 991px
- **THEN** the main nav links SHALL collapse and a hamburger menu icon
  SHALL appear (hidden on desktop, visible on mobile)

### Requirement: Hero section

The system SHALL render a full-width hero section with a background
image, white heading, subtitle, and a green CTA button.

#### Scenario: Hero rendering

- **GIVEN** the HealthPlus app is rendered on a desktop viewport
- **THEN** a full-width hero section SHALL render with a background
  image (medical/hospital scene, replaced with picsum placeholder)
- **AND** a white heading "Medical Services that you can trust" SHALL
  render (60px, weight 600, max-width 570px, left-aligned)
- **AND** a white subtitle paragraph SHALL render below (16px, weight
  600, max-width 480px, 1.875 line-height)
- **AND** a green "READ MORE" button SHALL render below the subtitle

### Requirement: Info boxes (3-column layout)

The system SHALL render 3 info columns: 2 service cards and 1
appointment form.

#### Scenario: Service cards

- **GIVEN** the info section is rendered
- **THEN** 2 service cards SHALL render side by side, each with:
  - An image placeholder (picsum)
  - A title (20px, 600, `#404040`)
  - Description text (14px, 500, `#838383`, 1.95 line-height)
  - A green "READ MORE" button
- **AND** the card background SHALL be `#f4f8fb`

#### Scenario: Appointment form

- **GIVEN** the info section is rendered
- **THEN** a third column SHALL render with a "Make an Appointment"
  form on a `#e5ecf1` background
- **AND** the form SHALL contain:
  - Department select dropdown
  - Doctor select dropdown
  - Name text input
  - Phone text input
  - Full-width green "MAKE AN APPOINTMENT" submit button (54px height,
    uppercase 11px, 600 weight, 0.2em letter-spacing)
- **AND** all form inputs SHALL be 47px height, white background, no
  border, 12px italic placeholder text

### Requirement: CTA parallax section

The system SHALL render a parallax background CTA section with white
text and a green button.

#### Scenario: CTA rendering

- **GIVEN** the CTA section is rendered
- **THEN** a full-width section SHALL render with a parallax background
  image (replaced with picsum placeholder)
- **AND** a white heading (30px, 600) SHALL read "Make an appointment
  with one of our professional Doctors."
- **AND** a subtitle (14px, 500, white at 0.76 opacity) SHALL render
  below
- **AND** a green "CALL NOW" button SHALL render

### Requirement: Services icon grid

The system SHALL render a 3×2 grid of 6 service icon boxes.

#### Scenario: Service grid rendering

- **GIVEN** the services section is rendered on a `#f4f8fb` background
- **THEN** 6 icon boxes SHALL render in a 3-column grid:
  Cardiology, Gastroenterology, Medical Lab, Dental Care, Surgery,
  Neurology
- **AND** each box SHALL have a 49×49px icon (lucide-react), a title
  (20px, 600, `#404040`), and a description (14px, 500, `#838383`,
  2.14 line-height)
- **AND** a centered green "READ MORE" button SHALL render below the
  grid

### Requirement: Department carousel

The system SHALL render a horizontal slider of department cards.

#### Scenario: Department carousel rendering

- **GIVEN** the departments section is rendered on a white background
- **THEN** a section title "Our Departments" + subtitle "to choose
  from" SHALL render
- **AND** a horizontal slider of department cards SHALL render:
  Neonatology, Dentistry, Orthopedics, Laboratory
- **AND** each card SHALL have an image, a title (20px, 600,
  `#404040`), and a "Read More" link
- **AND** on hover, a card SHALL show a shadow (`0px 20px 46px
  rgba(0,0,0,0.1)`), background change to `#f4f8fb`, image overlay
  (`rgba(0,0,0,0.49)`), and a green 4px bottom border on the content
- **AND** a green slider navigation button SHALL appear on the right

### Requirement: FAQ accordion + Latest News

The system SHALL render a split section with FAQ accordions on the left
and blog posts on the right.

#### Scenario: FAQ accordion

- **GIVEN** the FAQ section is rendered on a `#f4f8fb` background
- **THEN** a left column SHALL render with "Faq & Stuff" title (36px,
  600, `#404040`) and 3 accordion items
- **AND** each accordion item SHALL be 49px height, white background,
  with a 50px left bar showing "+" icon (green `#32c69a` bg, white
  text)
- **WHEN** an accordion item is clicked
- **THEN** it SHALL expand to show its content text (14px, 500,
  `#838383`, 2.14 line-height)
- **AND** the active item SHALL have green background (`#32c69a`) with
  white text and the icon SHALL change to "-"

#### Scenario: Latest News

- **GIVEN** the news section is rendered
- **THEN** a right column SHALL render with "Latest News" title (36px,
  600, `#404040`) and 3 blog post cards
- **AND** each card SHALL have a 73×73px thumbnail image, a title link
  (16px, 500, `#404040`), author/date info (12px, 500, `#838383`),
  and a comment count link (12px, 500, `#32c69a`)
- **AND** on hover, links SHALL transition to `#32c69a`

### Requirement: Parallax footer

The system SHALL render a multi-column footer with parallax background.

#### Scenario: Footer columns

- **GIVEN** the footer is rendered
- **THEN** a parallax background image SHALL render behind the footer
  (replaced with picsum placeholder)
- **AND** 3 columns SHALL render:
  1. Logo + about text (`#d3d3d3`) + social icons (white) + copyright
  2. Quick Contact form (Name, Email inputs + Message textarea on
     `#6a6d72` bg, green submit button)
  3. Opening Hours table (dark overlay `rgba(22,22,23,0.61)`, white
     text, Mon-Thu 8:00–19:00, Fri 8:00–18:30, Sat 9:30–17:00,
     Sun 9:30–15:00)

#### Scenario: Footer bottom bar

- **GIVEN** the footer is rendered
- **THEN** a bottom bar SHALL render with dark overlay
  (`rgba(18,17,17,0.66)`) containing:
  - Nav links (Home, About Us, Services, News, Contact) in `#a0a1a1`,
    11px 500 uppercase
  - Utility links (Help Desk | Emergency Services | Appointment) in
    `#a0a1a1`, 11px 500
  - Phone number (14px 600 `#32c69a`) right-aligned

### Requirement: Component Dock footer

The system SHALL include the required attribution footer.

#### Scenario: Component Dock credit

- **GIVEN** the HealthPlus app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- healthplus` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/health/: two-tier header (white
      top bar + green nav), full-width hero with background image,
      3-column info boxes (2 cards + form), parallax CTA, 6 service
      icon boxes, department carousel, FAQ + news split, parallax
      footer with contact form + hours.
- [ ] Behavior check: accordion expand/collapse with green active state,
      department card hover effects (shadow + overlay + border), nav
      links active state, form inputs functional, search input renders.
- [ ] Responsive check at 991px (hamburger menu appears, nav collapses,
      layout stacks appropriately).
