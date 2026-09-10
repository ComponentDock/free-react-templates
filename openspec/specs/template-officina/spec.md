# Template: Officina (Business / Corporate)

## Purpose

Officina is a full-page multi-section business/corporate template in the
free-react-templates monorepo. It is a React recreation of the ColorLib
"Bizpro" free template (source: https://colorlib.com/wp/template/bizpro/),
built under a DIFFERENT name (**Officina**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 3 + jQuery site with a Revolution Slider hero,
filterable portfolio (MixItUp), testimonial carousel (Owl Carousel), and
a dark-themed navbar/footer scheme. Officina preserves the section order,
layout, and design token palette while replacing all frameworks with
modern React equivalents.

**WHAT MAKES OFFICINA DISTINCT (signature characteristics):**

1. **Fullscreen video-slider hero with three identical slides.** Each slide
   shows "HELLO WE'RE BizPro" (h1, white, centered) with a subtitle
   "Sub Head, Motto or Mission subtitle" (h6, white) over a
   video/parallax background. The source uses Revolution Slider with
   three slides that have identical text but different background media.
   The recreation uses a single hero section with a static background
   image (picsum placeholder) and the headline + subtitle.

2. **Four icon-circle "About" feature boxes.** "ABOUT OUR BIZPRO" section
   with four `col-lg-3` cards: each has a round-border icon (50% radius),
   a colored icon background cycling through brand colors (#d73e4d coral,
   #007ab9 blue, #179680 teal, #d6973d gold), an h5 title, and a short
   description. The icon circles use `border-radius: 50%` with a colored
   background that changes on hover.

3. **Six-column services grid.** "SERVICES WE PROVIDE" with six service
   cards in a 3x2 grid: Web Design, Photography, Web Development, Online
   Marketing, Digital Media, Support. Each card has an icon, h6 title,
   and a brief paragraph. Cards have a white background with subtle shadow.

4. **Filterable portfolio gallery.** "OUR AWESOME PROJECTS" with a filter
   toolbar (All, Web Design, Photography, Web Development, Online Marketing,
   Digital Media, Support) and a 3x3 grid of project cards. Each card
   shows a placeholder image with an overlay (title + icon) on hover.
   Filtering uses CSS classes (mix items tagged with category classes).

5. **Dark CTA banner.** A full-width banner section with a background
   image and dark overlay (rgba(0,0,0,0.8)), displaying "We Create
   Creative & Best Unique Design" as an h3 with a "Meet our Team"
   link button.

6. **Three-member team grid.** "Meet our Team" with three team member
   cards in a row. Each card shows a circular avatar photo, name (h4),
   role (h6), and social media icon links. Social icons have colored
   backgrounds matching brand palette colors.

7. **Testimonial client slider.** "OUR HAPPY CLIENTS" with an owl-style
   carousel showing client testimonials: quote text, client name
   (h6), and client company/role. Three visible testimonial cards.

8. **Three-tier pricing table.** Basic ($9.99/mo), Advanced ($39.99/mo),
   Premium ($59.99/mo) — each with a feature list (3,600 Keywords,
   50 Social Accounts, 25 Analytics Campaigns). The "PREMIUM" column
   is highlighted with a different background color.

9. **Three-column blog grid.** "OUR LATEST Blog" with three blog post
   cards: thumbnail image, date, title (h6), excerpt, and "Read More"
   link.

10. **Contact section with map and form.** Three columns: Contact Info
    (address, phone, email with icons), Our Location (embedded map area),
    Send Message (name, email, subject, message textarea, submit button).

11. **Dark footer with social icons.** Dark (#1e1e1e) footer with
    colored social media icons (each icon in a different brand color),
    copyright text. Replaced with Component Dock attribution per
    monorepo convention.

## Naming

The ColorLib source name "Bizpro" is FORBIDDEN as the app name.
**Officina** is the new, original name — single lowercase word,
kebab-case, no collision with `apps/`, `openspec/specs/`,
`docs/templates/`, or any TEMPLATES.md name (verified: zero hits for
"officina" in all locations). Source slug + preview URL are recorded
below.

## Design reference (replication findings)

- **Original:** ColorLib "Bizpro" (page title: "Bizpro"). Listed in
  TEMPLATES.md line 912.
- **Live preview — REACHABLE (verified by direct fetch):**
  `https://preview.colorlib.com/theme/bizpro/` returns HTML (51,830 bytes).
  Stylesheets: `css/style.css` (42,763 bytes), `css/responsive.css`.
  Fonts loaded: Google Fonts Raleway. No external JS frameworks
  detected in the preview HTML beyond the Revolution Slider markup.

- **Live DOM structure (from the fetched HTML + CSS):**
  - `body` → `div.main-page-wrapper` → `header` → `nav.navbar` (dark
    `#1e1e1e`, transparent on top, solid on scroll) → hero/banner
    (fullscreen Revolution Slider with 3 slides)
  - Sections in order:
    1. **Navbar** — fixed/sticky, dark bg `#1e1e1e`, transparent initially;
       links: HOME, ABOUT, SERVICES, PORTFOLIO, TEAM, Skill, CLIENTS,
       Pricing, BLOG, Blog Details, CONTACT
    2. **Hero/Banner** — fullscreen, 3 slides with identical text
       "HELLO WE'RE BizPro" + subtitle over video/parallax backgrounds
    3. **About** (`#about-us`) — "ABOUT OUR BIZPRO" h2; 4 feature boxes
       (col-lg-3): round-border icons (50% radius), h5 titles:
       Web Development, Photography, Digital Media, Online Marketing;
       icon colors cycle through coral, blue, teal, gold
    4. **Services** — "SERVICES WE PROVIDE" h2; 6 service cards
       (col-lg-4): icon + h6 title + paragraph for Web Design,
       Photography, Web Development, Online Marketing, Digital Media, Support
    5. **Portfolio** (`#project`) — "OUR AWESOME PROJECTS" h2; filter
       toolbar + 3x3 grid of project items (mixItUp-style filtering);
       each card shows image + "Sweet Photo" overlay on hover
    6. **CTA Banner** — full-width bg image with dark overlay; h3:
       "We Create Creative & Best Unique Design"; "Meet our Team" link
    7. **Team** — "Meet our Team" h2; 3 members (Gonzalez Gina,
       Holly Vincenzini, Ramirez Minita) with avatar, name, role, social icons
    8. **Clients** (`#client-say`) — "OUR HAPPY CLIENTS" h2; testimonial
       slider with client quotes, names ("Spryte Loriano")
    9. **Pricing** — 3 tiers: Basic $9.99, Advanced $39.99, Premium $59.99;
       each with feature list (3,600 Keywords, 50 Social Accounts,
       25 Analytics Campaigns); Premium highlighted
    10. **Blog** — "OUR LATEST Blog" h2; 3 post cards (thumbnail, date,
        title, excerpt, "Read More")
    11. **Contact** — 3-column: Contact Info (address, phone, email),
        Our Location (map), Send Message (form: name, email, subject,
        message, submit)
    12. **Footer** — dark `#1e1e1e` bg, social icons in brand colors,
        copyright text

- **Design tokens extracted from `css/style.css`:**

  | Token | Value | Notes |
  |-------|-------|-------|
  | `--font-body` | `'Raleway', sans-serif` | Google Fonts, base body font |
  | `--color-brand` | `#007ab9` | Primary blue (links, accents, hover) |
  | `--color-brand-coral` | `#d73e4d` / `#d8545d` | Primary red/coral (CTA, pricing highlight) |
  | `--color-brand-teal` | `#179680` | Accent teal (icon bg) |
  | `--color-brand-gold` | `#d6973d` | Accent gold (icon bg) |
  | `--color-accent-blue` | `#5ecbf3` / `#70c2e9` | Light accent blues (footer icons, accents) |
  | `--color-accent-purple` | `#677fb5` / `#375099` | Muted purple-blue (footer icon, accents) |
  | `--color-accent-pink` | `#ff3ba4` / `#e299c2` | Pink accents (footer icons) |
  | `--color-accent-orange` | `#faaa5e` | Orange accent (footer icon) |
  | `--color-dark` | `#1e1e1e` / `#232a34` | Navbar + footer backgrounds |
  | `--color-light-bg` | `#f9f9f9` / `#f7f8f4` | Section alternate backgrounds |
  | `--color-muted-bg` | `#e6e6e6` | Subtle grey backgrounds |
  | `--color-text` | `#292929` / `#373a3f` / `#424040` | Body text colors |
  | `--color-white` | `#fff` | Card backgrounds, hero text |
  | `--radius-circle` | `50%` | Round icon containers, team avatars |
  | `--radius-card` | `5px` | Card borders, buttons |
  | `--radius-round` | `15px` | Larger rounded elements |
  | `--btn-radius` | `0` (default) | Default buttons are square |

## Requirements

### Requirement: Navbar

The system SHALL render a sticky dark navbar that becomes solid on scroll.

#### Scenario: Navbar rendering

- **GIVEN** the Officina app is rendered on a desktop viewport
- **THEN** a fixed navbar SHALL render at the top with dark background
  `#1e1e1e` (transparent on initial load, transitioning to solid on scroll)
- **AND** it SHALL contain navigation links: Home, About, Services,
  Portfolio, Team, Clients, Pricing, Blog, Contact
- **AND** the brand logo/name SHALL be visible on the left

#### Scenario: Navbar scroll behavior

- **GIVEN** the page is scrolled past the hero section
- **WHEN** the navbar transitions from transparent to solid
- **THEN** the background SHALL become `#1e1e1e` with a subtle shadow
- **AND** the navbar SHALL remain fixed/sticky at the top

#### Scenario: Mobile navbar

- **GIVEN** the viewport is at or below 768px
- **THEN** the navbar SHALL collapse into a hamburger menu
- **AND** clicking the hamburger SHALL toggle a mobile menu overlay

### Requirement: Hero banner

The system SHALL render a fullscreen hero section with a background image
and headline text.

#### Scenario: Hero rendering

- **GIVEN** the Officina app is rendered on a desktop viewport
- **THEN** a fullscreen hero section SHALL render with a background image
  (picsum placeholder matching the original's video/parallax)
- **AND** centered white text SHALL display: "HELLO WE'RE Officina" (h1)
  and a subtitle "Sub Head, Motto or Mission subtitle" (h6)
- **AND** the text SHALL be vertically centered within the hero

#### Scenario: Hero responsive

- **GIVEN** the viewport is at or below 768px
- **THEN** the hero SHALL maintain fullscreen height with readable text
  sizing

### Requirement: About section

The system SHALL render a four-column feature section with colored
round icons.

#### Scenario: About features

- **GIVEN** the user scrolls to the About section
- **THEN** an h2 "ABOUT OUR [BrandName]" SHALL display
- **AND** four feature boxes SHALL render in a row (4 columns on desktop):
  each with a round (50% radius) icon container in a brand color
  (coral, blue, teal, gold cycling), an h5 title, and a short description
- **AND** the four features SHALL be: Web Development, Photography,
  Digital Media, Online Marketing

#### Scenario: About icon hover

- **GIVEN** a feature icon is in its default state
- **WHEN** the user hovers over the icon
- **THEN** the icon background SHALL transition and the icon color
  SHALL invert (white on colored background)

### Requirement: Services section

The system SHALL render a six-card services grid.

#### Scenario: Services grid

- **GIVEN** the user scrolls to the Services section
- **THEN** an h2 "SERVICES WE PROVIDE" SHALL display
- **AND** six service cards SHALL render in a 3x2 grid on desktop:
  Web Design, Photography, Web Development, Online Marketing,
  Digital Media, Support
- **AND** each card SHALL have an icon, h6 title, and a short paragraph

### Requirement: Portfolio / Projects section

The system SHALL render a filterable gallery grid with category tabs.

#### Scenario: Portfolio gallery

- **GIVEN** the user scrolls to the Portfolio section
- **THEN** an h2 "OUR AWESOME PROJECTS" SHALL display
- **AND** a filter toolbar SHALL show tabs: All, Web Design, Photography,
  Web Development, Online Marketing, Digital Media, Support
- **AND** a 3x3 grid of project cards SHALL render with placeholder images
- **AND** each card SHALL show an overlay on hover with the project title

#### Scenario: Portfolio filtering

- **GIVEN** the portfolio gallery is displayed
- **WHEN** the user clicks a category filter tab
- **THEN** only cards matching that category SHALL be visible
- **AND** non-matching cards SHALL be hidden with a transition
- **WHEN** the user clicks "All"
- **THEN** all cards SHALL be visible

### Requirement: CTA banner

The system SHALL render a full-width call-to-action banner with a dark
overlay.

#### Scenario: CTA banner rendering

- **GIVEN** the user scrolls to the CTA section
- **THEN** a full-width banner with a background image and dark overlay
  (`rgba(0,0,0,0.8)`) SHALL render
- **AND** it SHALL display the text "We Create Creative & Best Unique
  Design" as a centered h3
- **AND** a "Meet our Team" link/button SHALL be present

### Requirement: Team section

The system SHALL render a three-member team grid with avatars and
social links.

#### Scenario: Team members

- **GIVEN** the user scrolls to the Team section
- **THEN** an h2 "Meet our Team" SHALL display
- **AND** three team member cards SHALL render in a row
- **AND** each card SHALL show a circular avatar image (50% radius),
  the member's name (h4), role (h6), and social media icon links
- **AND** social icons SHALL have colored backgrounds from the brand palette

### Requirement: Client testimonials

The system SHALL render a testimonial slider section.

#### Scenario: Testimonials

- **GIVEN** the user scrolls to the Clients section
- **THEN** an h2 "OUR HAPPY CLIENTS" SHALL display
- **AND** a testimonial slider/carousel SHALL show client quotes
- **AND** each testimonial SHALL include the quote text, client name,
  and optionally a company/role

#### Scenario: Testimonial navigation

- **GIVEN** the testimonial slider is displayed
- **WHEN** the user interacts with navigation dots or arrows
- **THEN** the slider SHALL transition to the next/previous testimonial

### Requirement: Pricing section

The system SHALL render a three-tier pricing table.

#### Scenario: Pricing tiers

- **GIVEN** the user scrolls to the Pricing section
- **THEN** three pricing cards SHALL render: Basic ($9.99/mo),
  Advanced ($39.99/mo), Premium ($59.99/mo)
- **AND** each card SHALL show: tier name, tagline ("The best to start"),
  price with "/monthly" suffix, and a feature list (3,600 Keywords,
  50 Social Accounts, 25 Analytics Campaigns)
- **AND** the Premium tier SHALL be visually highlighted (different
  background color or border)

#### Scenario: Pricing call-to-action

- **GIVEN** a pricing card is displayed
- **THEN** each card SHALL have a "Get Started" or similar CTA button

### Requirement: Blog section

The system SHALL render a three-column blog post grid.

#### Scenario: Blog posts

- **GIVEN** the user scrolls to the Blog section
- **THEN** an h2 "OUR LATEST Blog" SHALL display
- **AND** three blog post cards SHALL render in a row
- **AND** each card SHALL show: a thumbnail image, publication date,
  title (h6), excerpt text, and a "Read More" link

### Requirement: Contact section

The system SHALL render a contact section with info, map, and form.

#### Scenario: Contact layout

- **GIVEN** the user scrolls to the Contact section
- **THEN** three columns SHALL render:
  1. Contact Info: address, phone number, email with icons
  2. Our Location: a map placeholder (static image or embedded map)
  3. Send Message: a form with name, email, subject, message textarea,
     and submit button

#### Scenario: Contact form

- **GIVEN** the contact form is displayed
- **WHEN** the user fills in name, email, subject, and message
- **AND** clicks Submit
- **THEN** the form SHALL prevent default submission (no real backend)
- **AND** a success confirmation SHALL be displayed

### Requirement: Footer

The system SHALL render a dark footer with social links and copyright.

#### Scenario: Footer rendering

- **GIVEN** the Officina app is rendered
- **THEN** a dark footer (`#1e1e1e`) SHALL render at the bottom
- **AND** social media icon links SHALL display in brand palette colors
  (each icon in a different color: blue, coral, teal, gold, pink, orange)
- **AND** copyright text SHALL be present

#### Scenario: Component Dock attribution

- **GIVEN** the footer is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics throughout all sections.

#### Scenario: Semantic HTML

- **GIVEN** the Officina app is rendered
- **THEN** sections SHALL use semantic elements: `<nav>`, `<main>`,
  `<section>`, `<footer>`
- **AND** images SHALL have meaningful alt text
- **AND** form inputs SHALL have associated labels (`<label htmlFor>`)
- **AND** interactive elements SHALL have visible focus-visible rings

### Requirement: Responsive design

The system SHALL be fully responsive across desktop, tablet, and mobile.

#### Scenario: Mobile layout

- **GIVEN** the viewport is at or below 768px
- **THEN** multi-column grids SHALL stack to single-column layouts
- **AND** the navbar SHALL collapse to a hamburger menu
- **AND** text sizes SHALL scale appropriately for readability

## Verification checklist

- [ ] `npm run verify:app -- officina` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/bizpro/:
      dark navbar, fullscreen hero with "HELLO WE'RE" headline,
      4-column about with colored round icons, 6-card services grid,
      filterable 3x3 portfolio, CTA banner, 3-member team,
      testimonial slider, 3-tier pricing, 3-column blog, contact
      form, dark footer with colored social icons.
- [ ] Behavior check: navbar scroll transition, portfolio filtering,
      testimonial slider navigation, contact form submission handling,
      mobile hamburger menu toggle.
- [ ] Responsive check at 768px (stacked columns, hamburger nav,
      readable text sizing, no horizontal overflow).
- [ ] Component Dock footer link present and visible.
