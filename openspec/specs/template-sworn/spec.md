# Template: Sworn (Legal / Notary)

## Purpose

Sworn is a single-page LEGAL / NOTARY website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Notary" free template (source:
https://colorlib.com/wp/template/notary/), built under a DIFFERENT name
(**Sworn**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 multi-section single-page legal site with a
warm gold/tan (#fee2b3) brand palette, Playfair Display serif headings,
Roboto body text, a hero with background-image overlay and appointment
booking form, practice area cards, an about section with checklist and
accordion FAQ, testimonials, and a footer with background image. No jQuery
plugins are required for the core layout — the accordion uses Bootstrap's
collapse component.

**WHAT MAKES SWORN DISTINCT (signature behaviors):**

1. **Warm gold/tan brand palette.** The entire navbar, accent borders, and
   interactive highlights use `#fee2b3` — a soft warm gold/tan that gives the
   legal theme a refined, approachable feel. This is NOT a cold blue or red
   legal palette; the gold conveys trust and warmth.
2. **Hero with dark overlay + booking form.** The hero section has a
   background image with a dark overlay (`.hero.overlay:before`), white text
   headings (Playfair Display serif), and a 4-field appointment booking form
   (Name, Email, Date picker, Submit) sitting inline on the right side of the
   hero on desktop.
3. **Six practice area cards with flaticon icons.** A 3×2 grid of practice
   areas (Bankruptcy, Business, Civil Rights, Criminal, Immigration, Family
   Law), each with a large decorative icon, bold title, and short description.
   These use the flaticon font (replaced with lucide-react in the recreation).
4. **About section with image + checklist + CTA.** A 3-column layout: left
   image, center heading/description/checklist (gold checkmarks), right
   accordion FAQ (Bootstrap collapse). The checklist items use gold
   `#fee2b3` checkmark icons.
5. **Testimonials on light background.** Three testimonial cards on `bg-light`
   (#f8f9fa), each with a circular author photo, name, role, and quote.
6. **Footer with background image.** Dark footer with background image overlay,
   social icon links (Facebook, Instagram, Twitter, LinkedIn), and 4 columns
   of navigation links (Quick Links, Resources, Support, Company).

## Naming

The ColorLib source name "Notary" is FORBIDDEN as the app name. **Sworn** is
the new, original name — single lowercase word, kebab-case, no collision with
`apps/`, `openspec/specs/`, `docs/templates/`, or any TEMPLATES.md name
(verified 2026-09-23: zero hits for `sworn` in TEMPLATES.md, `ls apps/`,
`openspec/specs/`, `docs/templates/`). Source slug + preview URL are recorded
below.

## Design reference (replication findings)

- **Original:** ColorLib "Notary" (page title: "Notary — Free Website Template
  by Colorlib"). Listed in TEMPLATES.md under **Legal** (section header line
  2129; the row at line 2133 — `wp/template/notary/`).
- **Live preview — REACHABLE (verified 2026-09-23):**
  `https://preview.colorlib.com/theme/notary/` returns HTTP 200.
  Stylesheets: `css/style.css` (main custom CSS), `css/bootstrap.min.css`,
  `css/aos.css` (scroll animations), `css/owl.carousel.min.css` (not used on
  index), `fonts/flaticon/font/flaticon.css` (icon font — replace with
  lucide-react). Scripts: Bootstrap jQuery stack (not needed in React
  recreation). Fonts loaded via Google Fonts: **Playfair Display** (headings)
  and **Roboto** (body).
- **Live DOM structure (from fetched HTML + CSS):**
  - `body` → `div.site-wrap#home-section`
    - `header.site-navbar` (absolute, top, z-index 9, bg `#fee2b3`):
      logo (strong bold text) + nav links (Home, Practice Areas [dropdown
      with 6 sub-items], Testimonials, About, Contact)
    - `div.hero.overlay` (background-image: hero_bg_1.jpg, dark
      `:before` overlay):
      - Left column (`.col-lg-5.intro`): h1 "Notary Public & Legal
        Solutions" (white, Playfair Display), paragraph
      - Right column (`.col-lg-5`): `.book-form` with Name input, Email
        input, Date picker input (with calendar icon), "Book Appointment"
        submit button (btn-primary, full-width)
    - `div.site-section.bg-light` — Practice Areas:
      - Section heading "Practice Areas" + subtitle
      - 6 cards (3×2 on desktop): each `.practicing` → `.practicing-inner`
        → `.wrap-icon` (large flaticon icon) + h3 title + description
      - Items: Bankruptcy Law, Business Law, Civil Rights Law, Criminal
        Law, Immigration Law, Family Law
    - `div.site-section` — About:
      - 3-column layout: left image (atty_2.jpg), center heading
        "We Provide Highly Reliable & Effective Legal Solutions" + body
        text + checklist (3 items with gold checkmarks) + "Book an
        appointment" button
      - Right column: accordion FAQ (3 items: "How to download and
        register?", "How to create your paypal account?", "How to link
        your paypal and bank account?")
    - `div.site-section.bg-light` — Testimonials:
      - Heading "Happy Customers" + subtitle
      - 3 testimonial cards: circular photo, author name + role, quote
    - `footer.site-footer` (background-image: hero_bg_footer.jpg, dark
      overlay):
      - Logo + social icons (Facebook, Instagram, Twitter, LinkedIn)
      - 4 columns: Quick Links, Resources, Support, Company (each with
        4 link items)
      - Copyright line with "Component Dock" link

- **Screenshot (`notary-free-template.jpg`, viewed 2026-09-23):**
  The screenshot shows: warm gold/tan navbar at top with black logo text
  and nav links; a full-width hero with a dark law-office background image,
  large white serif heading "Notary Public & Legal Solutions" on the left,
  and a white-background booking form card on the right; below that a light
  grey section with 6 practice area cards in a 3×2 grid with large outline
  icons; a white about section with a photo on the left, heading + checklist
  in the center, and a grey accordion on the right; a light grey testimonials
  section with 3 circular author photos; a dark footer with background image,
  social icons, and link columns. Aesthetic: refined, warm, professional legal
  theme. **No imagery is copied** — placeholder images via picsum.photos.

## Design tokens

| Token                | Value                            | Notes                                                                          |
| -------------------- | -------------------------------- | ------------------------------------------------------------------------------ |
| `--color-brand`      | `#fee2b3`                        | Warm gold/tan — navbar bg, form focus border, checklist checkmarks, accent     |
| `--color-ink`        | `#364d59`                        | Body text color (muted teal-grey)                                              |
| `--color-heading`    | `#364d59`                        | Heading color (same as body, Playfair Display)                                 |
| `--color-black`      | `#000`                           | Logo text, nav links hover, strong text                                        |
| `--color-white`      | `#fff`                           | Page background, hero text, footer text, card backgrounds                      |
| `--color-bg-light`   | `#f8f9fa`                        | `.bg-light` sections (practice areas, testimonials)                            |
| `--color-border`     | `#efefef`                        | Accordion border                                                               |
| `--color-muted`      | `#888`                           | Accordion body text                                                            |
| `--color-footer-link`| `rgba(255,255,255,0.5)`          | Footer link color (white 50%)                                                  |
| `--font-heading`     | 'Playfair Display', serif        | All h1-h5 headings                                                             |
| `--font-body`        | 'Roboto', sans-serif             | Body text, form controls, nav links                                            |
| `--radius-accordion` | `4px`                            | Accordion item border-radius                                                   |
| `--btn-primary`      | padding 12px 25px                | Default Bootstrap btn-primary styling                                          |
| `--section-padding`  | 2.5em 0 (mobile), 5em 0 (desktop)| `.site-section` padding                                                        |
| `--navbar-bg`        | `#fee2b3`                        | Navbar background (absolute positioned, top of page)                           |
| `--hero-overlay`     | dark semi-transparent            | `.hero.overlay:before` dark overlay on background image                        |

## Requirements

### Requirement: Navbar

The system SHALL render a sticky/absolute navbar with the brand name, navigation
links, and a mobile hamburger menu.

#### Scenario: Desktop navbar

- **GIVEN** the Sworn app is rendered on a desktop viewport (≥992px)
- **THEN** the navbar SHALL render at the top of the page with a `#fee2b3`
  warm gold background
- **AND** the logo text SHALL be bold black (Playfair Display)
- **AND** nav links SHALL include: Home, Practice Areas (with dropdown
  containing 6 sub-items), Testimonials, About, Contact
- **AND** nav link text SHALL be `rgba(0,0,0,0.7)`, turning `#000` on hover
- **AND** the active link SHALL have `#fee2b3` color (matching brand)

#### Scenario: Mobile navbar

- **GIVEN** the viewport is below 992px
- **THEN** the nav links SHALL be hidden and a hamburger menu icon SHALL appear
- **WHEN** the user taps the hamburger icon
- **THEN** a mobile menu SHALL slide in showing all nav links stacked vertically

#### Scenario: Practice Areas dropdown

- **GIVEN** the navbar is rendered on desktop
- **WHEN** the user hovers over "Practice Areas"
- **THEN** a dropdown SHALL appear with a `#fee2b3` top border and white
  background containing the 6 practice area sub-links (Bankruptcy Law,
  Business Law, Civil Rights Law, Criminal Law, Immigration Law, Family Law)

### Requirement: Hero section

The system SHALL render a hero section with a background image, dark overlay,
white heading text, description, and an inline appointment booking form.

#### Scenario: Desktop hero layout

- **GIVEN** the Sworn app is rendered on a desktop viewport
- **THEN** the hero SHALL display a background image with a dark semi-transparent
  overlay (`:before` pseudo-element)
- **AND** the left column (~50%) SHALL show a white Playfair Display heading
  "Notary Public & Legal Solutions" and a white description paragraph
- **AND** the right column (~50%) SHALL show a white-background booking form
  card with: Name text input, Email input, Date picker input (with calendar
  icon), and a full-width "Book Appointment" submit button (btn-primary)

#### Scenario: Mobile hero layout

- **GIVEN** the viewport is below 768px
- **THEN** the hero text and form SHALL stack vertically (text above, form below)
- **AND** the form SHALL remain functional with all 4 fields

#### Scenario: Date picker

- **GIVEN** the booking form is rendered
- **WHEN** the user focuses the date input
- **THEN** a date picker SHALL be available (native HTML date input or a
  lightweight date picker component)
- **AND** the input SHALL display a calendar icon on the right

### Requirement: Practice Areas section

The system SHALL render a 3×2 grid of practice area cards on a light
background with icons, titles, and descriptions.

#### Scenario: Six practice area cards

- **GIVEN** the practice areas section is rendered
- **THEN** six cards SHALL display in a 3-column grid on desktop (2 columns on
  tablet, 1 column on mobile)
- **AND** each card SHALL contain a large icon (replaced with lucide-react),
  a bold title, and a short description paragraph
- **AND** the cards SHALL have white backgrounds with subtle shadow/hover
  effects
- **AND** the section background SHALL be `#f8f9fa` (light grey)

#### Scenario: Practice area content

- **GIVEN** the practice areas section is rendered
- **THEN** the six items SHALL be (in order): Bankruptcy Law, Business Law,
  Civil Rights Law, Criminal Law, Immigration Law, Family Law
- **AND** each SHALL have a heading "Practice Areas" with subtitle text

### Requirement: About section

The system SHALL render a 3-column about section with an image, heading +
checklist, and an accordion FAQ.

#### Scenario: About layout

- **GIVEN** the about section is rendered on desktop
- **THEN** a 3-column layout SHALL appear: left column with an image, center
  column with heading + paragraph + checklist + CTA button, right column with
  accordion FAQ
- **AND** the section background SHALL be white (`#fff`)

#### Scenario: Checklist

- **GIVEN** the about section is rendered
- **THEN** a checklist of 3 items SHALL appear below the description text
- **AND** each item SHALL have a gold `#fee2b3` checkmark icon on the left
- **AND** the checkmarks SHALL use lucide-react CheckCircle or similar icon

#### Scenario: CTA button

- **GIVEN** the about section is rendered
- **THEN** a "Book an appointment" button SHALL render below the checklist
- **AND** it SHALL use the btn-primary styling (gold `#fee2b3` or Bootstrap
  primary variant)

#### Scenario: Accordion FAQ

- **GIVEN** the about section is rendered
- **THEN** a 3-item accordion SHALL appear in the right column
- **AND** the first item SHALL be expanded by default
- **AND** each accordion item SHALL have a clickable header and collapsible
  body with description text
- **AND** accordion items SHALL have `border-radius: 4px` and `#fff` background

### Requirement: Testimonials section

The system SHALL render a testimonials section with 3 testimonial cards on a
light background.

#### Scenario: Three testimonials

- **GIVEN** the testimonials section is rendered
- **THEN** the heading "Happy Customers" SHALL display centered
- **AND** three testimonial cards SHALL render in a 3-column grid on desktop
- **AND** each card SHALL contain: a circular author photo, author name (bold),
  author role/title, and a quote paragraph
- **AND** the section background SHALL be `#f8f9fa` (light grey)

#### Scenario: Testimonial card styling

- **GIVEN** a testimonial card is rendered
- **THEN** the author photo SHALL be circular (border-radius 50%)
- **AND** the quote text SHALL be styled in a readable size with adequate
  line height

### Requirement: Footer

The system SHALL render a dark footer with a background image overlay, social
icons, navigation link columns, and a copyright line.

#### Scenario: Footer layout

- **GIVEN** the footer is rendered
- **THEN** it SHALL have a dark background image with overlay
- **AND** the left section SHALL show a logo heading and social icon links
  (Facebook, Instagram, Twitter, LinkedIn — using lucide-react icons)
- **AND** the right section SHALL show 4 columns of navigation links:
  Quick Links, Resources, Support, Company

#### Scenario: Component Dock attribution

- **GIVEN** the footer is rendered
- **THEN** the copyright line SHALL include a link to
  https://www.componentdock.com/ branded as "Component Dock"
- **AND** no other external attribution links SHALL appear

#### Scenario: Footer responsiveness

- **GIVEN** the viewport is below 768px
- **THEN** the footer columns SHALL stack vertically
- **AND** all text SHALL remain readable (white on dark background)

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics throughout.

#### Scenario: Semantics

- **GIVEN** the Sworn app is rendered
- **THEN** the navbar SHALL use `<nav>` with `role="navigation"`
- **AND** the hero SHALL use appropriate heading hierarchy (h1 for main heading)
- **AND** form fields SHALL have programmatic labels (`<label htmlFor>`)
- **AND** the accordion SHALL use `aria-expanded`, `aria-controls`, and
  `aria-labelledby` attributes
- **AND** all interactive elements SHALL have visible focus-visible rings
- **AND** images SHALL have meaningful alt text

### Requirement: Footer

The system SHALL include the required Component Dock attribution footer.

#### Scenario: Component Dock credit

- **GIVEN** the Sworn app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- sworn` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/notary/: warm gold `#fee2b3`
      navbar, hero with dark overlay + booking form, 6 practice area cards,
      about section with checklist + accordion, testimonials, dark footer
      with background image.
- [ ] Behavior check: navbar dropdown on hover, mobile hamburger menu,
      date picker functional, accordion expand/collapse, form submission
      (mock), all sections render in correct order.
- [ ] Responsive check at 768px (hero stacks, practice areas go to 2-col,
      footer stacks, no horizontal overflow).
- [ ] No ColorLib references in any `apps/sworn/` file (comments, strings,
      CSS, or config). Provenance only in spec and TEMPLATES.md.
