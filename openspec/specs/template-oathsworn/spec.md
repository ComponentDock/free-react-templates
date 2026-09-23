# Template: Oathsworn (Notary / Legal Services)

## Purpose

Oathsworn is a single-page notary/legal services landing page in the
free-react-templates monorepo. It is a React recreation of the ColorLib
"Notary" free template (source: https://colorlib.com/wp/template/notary/),
built under a DIFFERENT name (**Oathsworn**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a professional notary/law firm website with: a full-viewport
hero (parallax bg image + dark overlay, split layout with intro text left
and a booking form card right), a practice areas section (6 cards in a 3×2
grid on light background), an about/why-us section (two images left,
heading + text + CTA right), a testimonials section (3 cards on light
background), a "legal solutions" section (image left, text + checklist
middle, accordion FAQ right), and a dark-background footer with social
icons and multi-column links. Uses Playfair Display for headings and
Roboto for body text, with a warm sandy accent (`#fee2b3`).

**WHAT MAKES OATHSWORN DISTINCT (signature behaviors):**

1. **Hero with booking form card.** Full-viewport hero with parallax bg
   image and dark overlay. Left side: heading "Notary Public & Legal
   Solutions" + paragraph. Right side: a white card (`border-radius: 7px`,
   padding 40px, shadow) with a "Book an Appointment" form containing Name,
   Email, Date (with datepicker icon), and a "Book Appointment" submit
   button. The form card overlaps the hero section (negative margin
   `-300px` on mobile) creating a distinctive floating-card effect.
2. **Six practice area cards with icon circles.** White cards with shadow
   (`0 3px 6px rgba(0,0,0,0.1)`), each containing a large icon (50px,
   with a circular background decoration via `::before`), h3 title, and
   description. Areas: Bankruptcy Law, Business Law, Civil Rights Law,
   Criminal Law, Immigration Law, Family Law.
3. **About/why-us section with dual images.** Two attorney images in a
   2-column row on the left (~7/12 width), heading + text + CTA on the
   right (~4/12). The heading reads "We Provide Highly Reliable & Effective
   Legal Solutions".
4. **Testimonials with avatar cards.** Three testimonial cards on a light
   background, each with a circular avatar (50px), name + role, and a
   blockquote. Cards have 7px radius and heavy shadow (`0 15px 30px`).
5. **Legal solutions + accordion FAQ.** Three-column layout: image left,
   text + checklist (ul-check with green check icons) middle, custom
   accordion FAQ right. The accordion has 3 items with collapsible bodies.
6. **Dark footer with parallax bg.** Footer uses a dark background image
   (parallax), with 5-column layout: About Us + social icons, Quick Links,
   Resources, Support, Company. White text, semi-transparent links.

## Naming

The ColorLib source name "Notary" is FORBIDDEN as the app name. **Oathsworn**
is the new, original name — single lowercase word, kebab-case, no collision
with `apps/`, `openspec/specs/`, `docs/templates/`, or any TEMPLATES.md name
(verified: no existing `oathsworn` in apps/ or specs/). Source slug + preview
URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Notary" (TEMPLATES.md line 2133; section
  "## Lawyer (23)"). Source URL: https://colorlib.com/wp/template/notary/
- **Preview URL — REACHABLE (verified by direct fetch):**
  https://preview.colorlib.com/theme/notary/ (HTTP 200, 442 lines, `<title>
  Notary — Free Website Template by Colorlib</title>`).
- **Preview CSS:** `css/style.css` (585 lines) + Bootstrap + AOS + Fancybox +
  Owl Carousel + datepicker. Main styles in `css/style.css`. Fonts:
  Playfair Display 400/700 (headings) + Roboto (body, via Bootstrap
  defaults).
- **Live DOM structure (from fetched HTML + CSS):**
  - `header.site-navbar` — sticky nav: logo "Notary" (Playfair Display bold)
    left, nav links right (Home, Practice Areas [dropdown with 6 items],
    Testimonials, About, Contact). Mobile hamburger toggle.
  - `.hero.overlay` — full-viewport hero with parallax bg image + dark
    overlay. Two-column row: left `.col-lg-5.intro` (h1 "Notary Public &
    Legal Solutions" + paragraph), right `.col-lg-5` (`.book-form` card:
    white bg, 7px radius, 40px padding, h3 "Book an Appointment", Name
    input, Email input, Date input with calendar icon, "Book Appointment"
    submit button).
  - `.site-section.bg-light` — Practice Areas: centered heading "Practice
    Areas" with strong tag, 3×2 grid of `.practicing` cards (white bg,
    shadow, 40px padding, 50px icon, h3, description). Six areas:
    Bankruptcy Law (museum icon), Business Law (shield), Civil Rights Law
    (help), Criminal Law (revolver), Immigration Law (luggage), Family Law
    (house).
  - `.site-section` — About/Why-Us: 2 attorney images left (2-col row),
    heading + text + "Book an appointment" CTA right.
  - `.site-section.bg-light` — Happy Customers: centered heading, 3
    `.testimonial-2` cards (7px radius, white bg, heavy shadow, circular
    avatar 50px, name + role, blockquote). Three testimonials: Lina Gold,
    Mike Fisher, Sheen Yu.
  - `.site-section` — Legal Solutions: 3-column layout — image left,
    heading "We Have Legal Solutions" + text + ul-check middle, custom
    accordion FAQ right (3 collapsible items).
  - `footer.site-footer` — dark bg image, 5-column layout: About Us (text
    + social icons), Quick Links, Resources, Support, Company. Copyright
    line with social icons.
- **Screenshot (`notary-free-template.jpg`):** AVIF image — visual
  description based on DOM analysis: professional notary/law firm aesthetic,
  warm sandy accent color, Playfair Display serif headings, clean white
  cards with shadows, parallax hero with floating booking form card.

## Design tokens

| Token                | Value                              | Notes                                                          |
| -------------------- | ---------------------------------- | -------------------------------------------------------------- |
| `--color-brand`      | `#364d59`                          | Dark teal/slate — primary text, headings, brand                |
| `--color-accent`     | `#fee2b3`                          | Warm sandy/peach — button bg, highlights                       |
| `--color-green`      | `#71bc42`                          | Green accent (check icons in ul-check)                         |
| `--color-ink`        | `#999`                             | Body/secondary text, card descriptions                         |
| `--color-heading`    | `#000`                             | Card h3 headings                                               |
| `--color-white`      | `#fff`                             | Card backgrounds, hero text, footer text                       |
| `--color-bg-light`   | `#f8f9fa`                          | `.bg-light` sections, accordion active bg                      |
| `--color-border`     | `#efefef`                          | Accordion button borders                                       |
| `--color-muted`      | `#ccc`                             | Testimonial role text                                          |
| `--color-overlay`    | `rgba(0,0,0,0.2–0.5)`             | Hero overlay, dark sections                                    |
| `--font-heading`     | 'Playfair Display' 400/700         | Serif headings (Google Fonts)                                  |
| `--font-body`        | 'Roboto' (sans-serif)              | Body text (via Bootstrap defaults)                             |
| `--btn-primary`      | `#fee2b3` bg, 12px 25px padding    | Warm sandy button; color inherited from Bootstrap              |
| `--card-radius`      | `7px`                              | Form card, testimonial cards, accordion items                  |
| `--card-shadow`      | `0 3px 6px rgba(0,0,0,0.1)`       | Practice area cards                                            |
| `--card-shadow-lg`   | `0 15px 30px rgba(0,0,0,0.1)`     | Testimonial cards                                              |
| `--icon-size`        | `50px`                             | Practice area icons                                            |

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky top navigation bar with the logo and
menu links.

#### Scenario: Desktop navigation

- **GIVEN** the Oathsworn app is rendered on a desktop viewport
- **THEN** a sticky navigation bar SHALL render with the logo "Oathsworn"
  on the left (Playfair Display bold)
- **AND** nav links SHALL appear on the right: Home, Practice Areas (with
  dropdown), Testimonials, About, Contact
- **AND** the active link (Home) SHALL be highlighted
- **AND** Practice Areas SHALL have a dropdown with sub-items

#### Scenario: Mobile navigation

- **GIVEN** a viewport at or below 991px
- **THEN** the nav links SHALL collapse into a hamburger menu toggle

### Requirement: Hero section with booking form

The system SHALL render a full-viewport hero with a parallax background
image, dark overlay, and a split layout: intro text left + booking form
card right.

#### Scenario: Hero rendering

- **GIVEN** the Oathsworn app is rendered on a desktop viewport
- **THEN** a full-viewport hero section SHALL display with a background
  image (placeholder via picsum) and a dark overlay
- **AND** the left side SHALL have the heading "Notary Public & Legal
  Solutions" (h1, bold, white) and a description paragraph
- **AND** the right side SHALL have a white booking form card
  (`border-radius: 7px`, padding 40px, shadow)
- **AND** the card SHALL contain: h3 "Book an Appointment", Name input,
  Email input, Date input with calendar icon, and a "Book Appointment"
  submit button

#### Scenario: Booking form fields

- **GIVEN** the booking form is rendered
- **THEN** the Name field SHALL be a text input with placeholder "Name"
- **AND** the Email field SHALL be an email input with placeholder "Email"
- **AND** the Date field SHALL be a text input with placeholder "Select
  Date" and a calendar icon
- **AND** the submit button SHALL read "Book Appointment"
- **AND** form submission SHALL be mocked (no real network request)

#### Scenario: Hero responsive

- **GIVEN** a mobile viewport
- **THEN** the hero text and form card SHALL stack vertically
- **AND** the form card SHALL overlap the section below (negative margin)

### Requirement: Practice areas section

The system SHALL render a 3×2 grid of practice area cards on a light
background.

#### Scenario: Practice area cards

- **GIVEN** the Oathsworn app is rendered
- **THEN** a section with light background (`#f8f9fa`) SHALL display with
  the heading "Practice Areas" (centered, with bold "Practice")
- **AND** six practice area cards SHALL appear in a responsive 3-column grid
- **AND** each card SHALL have a large icon (50px, lucide-react: Landmark,
  Shield, Scale, Gavel, Plane, Users), h3 title, and description paragraph
- **AND** the six areas SHALL be: Bankruptcy Law, Business Law, Civil Rights
  Law, Criminal Law, Immigration Law, Family Law
- **AND** cards SHALL have white background, 7px radius, and subtle shadow

### Requirement: About/why-us section

The system SHALL render a two-column about section with images and text.

#### Scenario: About layout

- **GIVEN** the Oathsworn app is rendered
- **THEN** a section SHALL display with two attorney images on the left
  (in a 2-column sub-grid, using picsum placeholders)
- **AND** the right side SHALL have the heading "We Provide Highly
  Reliable & Effective Legal Solutions" (with "Reliable & Effective" bold)
- **AND** a description paragraph and a "Book an appointment" CTA button
  SHALL be present

### Requirement: Testimonials section

The system SHALL render a testimonials section with three cards on a light
background.

#### Scenario: Testimonial cards

- **GIVEN** the Oathsworn app is rendered
- **THEN** a section with light background SHALL display with the centered
  heading "Happy Customers" (bold)
- **AND** three testimonial cards SHALL appear in a responsive grid
- **AND** each card SHALL have a circular avatar (50px, picsum placeholder),
  name + role, and a blockquote
- **AND** cards SHALL have white background, 7px radius, and heavy shadow
  (`0 15px 30px rgba(0,0,0,0.1)`)
- **AND** the three testimonials SHALL be: Lina Gold (Owner, Ford), Mike
  Fisher (Owner, Ford), Sheen Yu (Owner, Ford)

### Requirement: Legal solutions + accordion section

The system SHALL render a three-column section with an image, text +
checklist, and an accordion FAQ.

#### Scenario: Legal solutions layout

- **GIVEN** the Oathsworn app is rendered
- **THEN** a section SHALL display with three columns:
  1. Left: an attorney image (picsum placeholder)
  2. Middle: heading "We Have Legal Solutions" (with "Legal Solutions"
     bold), description paragraphs, and a checklist (3 items with green
     check icons)
  3. Right: a custom accordion with 3 FAQ items

#### Scenario: Accordion behavior

- **GIVEN** the accordion is rendered
- **THEN** the first item SHALL be expanded by default
- **AND** clicking an accordion header SHALL toggle its body visibility
- **AND** only one item SHALL be open at a time (or allow multiple —
  match the source behavior)

### Requirement: Footer

The system SHALL render a dark-background footer with multi-column links
and social icons.

#### Scenario: Footer layout

- **GIVEN** the Oathsworn app is rendered
- **THEN** a dark-background footer SHALL display (parallax bg image or
  solid dark color)
- **AND** the footer SHALL have 5 columns: About Us (description + social
  icons), Quick Links, Resources, Support, Company
- **AND** social icons SHALL include Facebook, Instagram, Twitter, LinkedIn
  (using lucide-react icons)
- **AND** a copyright line SHALL appear below the columns
- **AND** the footer SHALL link to https://www.componentdock.com/ branded
  as "Component Dock"

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics throughout.

#### Scenario: Semantics

- **GIVEN** the Oathsworn app is rendered
- **THEN** all sections SHALL use semantic HTML (header, nav, main, section,
  footer)
- **AND** images SHALL have alt text
- **AND** form fields SHALL have associated labels or accessible placeholders
- **AND** interactive elements SHALL have visible focus rings
- **AND** the accordion SHALL expose aria-expanded and aria-controls

## Verification checklist

- [ ] `npm run verify:app -- oathsworn` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/notary/:
      full-viewport hero with booking form card, 6 practice area cards,
      about section with dual images, testimonials, legal solutions +
      accordion, dark footer.
- [ ] Behavior check: nav dropdown works, booking form validates, accordion
      toggles, mobile responsive.
- [ ] Responsive check at 768px (stacked layouts, no horizontal overflow).
