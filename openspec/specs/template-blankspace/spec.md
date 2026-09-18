# Template: Blankspace (SaaS Agency Landing)

## Purpose

Blankspace is a single-page SaaS/agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Whitespace" website template (source:
https://colorlib.com/wp/template/whitespace/), built under a
DIFFERENT name (**Blankspace**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Whitespace" — SaaS/agency landing template
  (source: https://colorlib.com/wp/template/whitespace/).
- **Preview URL:** https://preview.colorlib.com/theme/whitespace/ (HTTP 200,
  full rendered DOM analyzed).
- **CSS analyzed:** `css/style.css` from the preview (2948 lines, Bootstrap 4
  based with custom FTCO styles).
- **TEMPLATES.md screenshot:** `whitespace-free-template.jpg` — shows the
  hero area with split layout (text left, video/image right) and a dark
  navy-brown color scheme with light blue accents.
- **Section order (1:1 from DOM):**
  1. **Navbar** — dark bg (`bg-dark`), links: Home, About, Work, Pricing,
     Blog, Contact. Brand text "Whitespace".
  2. **Hero** — split layout: left text column with "Welcome" subheading,
     "We Help to Build You the Product" h1, "Business Solution" h2, "Get
     in touch" CTA button; right column with full-height background image
     (`bg_1.jpg`, 750px) and optional YouTube video background.
  3. **About** — split: right image (`about.jpg`), left text column with
     "What We Can Do for You" heading and 4 service rows (Market Research,
     Financial Services, Online Marketing, 24/7 Support) each with icon +
     title + description. Services are right-aligned on desktop.
  4. **Services** — 4-column grid: Business Strategy, Data Analysis,
     Graphic Design, Creative. Each card has centered icon + title +
     description, `align-self-stretch`.
  5. **Counter/Stats** — parallax background image (`bg_3.jpg`), white text
     overlays. Left: "Interesting Facts" heading. Right: 4 counters —
     2000 Done Works, 300 Happy Customers, 100 Coffee, 1000 Work Hours.
  6. **Projects** — 6 project cards in asymmetric grid (3-col + 8-col, then
     8-col + 4-col stacked). Each card: background image, dark overlay,
     arrow link button, title + category label.
  7. **Testimony** — owl-carousel slider of 5 testimonials. Each: circular
     avatar, quote icon, testimonial text, name + role. Below carousel:
     "My satisfied customer says" heading.
  8. **Blog/Case Study** — 3 blog cards in equal columns. Each: background
     image preview, meta line (date, author, comment count), title.
  9. **Pricing** — 4 pricing cards on light grey (`#f8f9fa`) background:
     Free ($0), Startup ($19), Premium ($49), Pro ($99). Each: plan name,
     price, excerpt, CTA button (primary for first, outline for rest),
     feature list.
  10. **Partners** — 5 partner logos in a row (grayscale, on white bg).
  11. **Footer** — dark brown background (`#3c312e`), 4 columns: brand
      name + social links, Useful Links, Quick Links, Have a Questions?
      (address, phone, email). Copyright line at bottom.

## Design tokens

| Token                | Value                                       | Notes                                                        |
| -------------------- | ------------------------------------------- | ------------------------------------------------------------ |
| `--color-brand`      | `#78d5ef`                                   | Primary light blue — buttons, accents, links, counters       |
| `--color-brand-hover`| `#56caeb` / `#4ac7ea`                       | Button hover states                                          |
| `--color-bg-dark`    | `#3c312e`                                   | Footer background (dark brown)                               |
| `--color-bg-light`   | `#f8f9fa`                                   | Pricing section background (`.bg-light`)                     |
| `--color-text`       | `#212529`                                   | Body text                                                    |
| `--color-text-muted` | `#6c757d`                                   | Secondary/muted text                                         |
| `--color-white`      | `#fff`                                      | Hero text, counter text, navbar text                         |
| `--color-price-accent`| `#fcd307`                                  | Pricing dollar sign accent (yellow)                          |
| `--font-body`        | `"Work Sans", sans-serif`                   | Google Fonts; weights 300–900 used                           |
| `--font-heading`     | `"Poppins", sans-serif`                     | Used for headings (loaded via Cloudflare Fonts in preview)   |
| `--radius-btn`       | `0.25rem`                                   | Standard Bootstrap 4 button radius                           |
| `--radius-card`      | `0` (none)                                  | Project cards, pricing cards have no border-radius           |
| `--btn-primary`      | bg `#78d5ef`, color `#212529`               | Bootstrap primary button class                               |
| `--btn-outline`      | border `#78d5ef`, color `#78d5ef`, bg `transparent` | Outline variant (pricing)                        |
| `--hero-split`       | 4/12 text + 8/12 image (`.forth` + `.third`)| Asymmetric hero split; right image 750px tall                |
| `--counter-bg`       | Parallax image (`bg_3.jpg`)                 | White text, animated counters                                |
| `--project-overlay`  | Dark overlay on project cards               | Shows on hover with arrow button + title                     |
| `--partner-opacity`  | Grayscale partner logos                      | Standard partner/logo strip treatment                        |

## Requirements

### Requirement: Navigation bar
The system SHALL render a dark-background top navigation bar with the brand
name "Blankspace" and anchor links to the page sections.

#### Scenario: Navbar content
- **GIVEN** the Blankspace page is rendered
- **WHEN** the navbar is displayed
- **THEN** the navbar SHALL show the brand name "Blankspace" on the left
- **AND** it SHALL show navigation links: Home, About, Work, Pricing, Blog, Contact
- **AND** the navbar SHALL have a dark background
- **AND** the navbar SHALL be responsive with a mobile hamburger toggle

#### Scenario: Navbar responsiveness
- **GIVEN** the viewport is at or below 992px
- **WHEN** the navbar is displayed
- **THEN** the navigation links SHALL collapse into a hamburger menu
- **AND** clicking the hamburger SHALL toggle the menu visibility

### Requirement: Hero section
The system SHALL render a split-layout hero with text on the left and an
image on the right.

#### Scenario: Hero content
- **GIVEN** the Blankspace page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the subheading "Welcome" above the main heading
- **AND** it SHALL show the h1 "We Help to Build You the Product"
- **AND** it SHALL show the h2 "Business Solution"
- **AND** it SHALL show a "Get in touch" CTA button

#### Scenario: Hero layout
- **GIVEN** the hero section is displayed on a desktop viewport
- **WHEN** the layout is rendered
- **THEN** the text column SHALL occupy approximately 33% of the width on the left
- **AND** the image column SHALL occupy approximately 67% on the right
- **AND** the image SHALL fill the full height of the hero
- **AND** the text SHALL be white on the dark image background

#### Scenario: Hero responsive
- **GIVEN** the viewport is at or below 768px
- **WHEN** the hero is displayed
- **THEN** the layout SHALL stack vertically with text above and image below

### Requirement: About section
The system SHALL render a split about section with an image on the right
and four service items on the left.

#### Scenario: About content
- **GIVEN** the Blankspace page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the subheading "Providing"
- **AND** it SHALL show the heading "What We Can Do for You"
- **AND** it SHALL display four service items: Market Research, Financial
  Services, Online Marketing, 24/7 Support

#### Scenario: About layout
- **GIVEN** the about section is displayed
- **WHEN** the layout is rendered
- **THEN** each service item SHALL have an icon, a title, and a description
- **AND** the service items SHALL be right-aligned on desktop
- **AND** the image SHALL appear on the right side (or below on mobile)

### Requirement: Services grid
The system SHALL render a four-column services grid with centered cards.

#### Scenario: Services content
- **GIVEN** the Blankspace page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show four service cards: Business Strategy, Data Analysis,
  Graphic Design, Creative
- **AND** each card SHALL have a centered icon, title, and description

#### Scenario: Services layout
- **GIVEN** the services grid is displayed on desktop
- **WHEN** the layout renders
- **THEN** the four cards SHALL be in a single row (4 columns on lg+)
- **AND** each card SHALL stretch to equal height
- **AND** the cards SHALL be centered horizontally on the page

### Requirement: Counter/stats section
The system SHALL render a parallax-background statistics section with four
animated counters.

#### Scenario: Counter content
- **GIVEN** the Blankspace page is rendered
- **WHEN** the counter section is displayed
- **THEN** it SHALL show the subheading "Some"
- **AND** it SHALL show the heading "Interesting Facts"
- **AND** it SHALL display four counters: Done Works (2000), Happy Customers
  (300), Coffee (100), Work Hours (1000)

#### Scenario: Counter appearance
- **GIVEN** the counter section is displayed
- **WHEN** the layout renders
- **THEN** the section SHALL have a dark parallax background image
- **AND** all text and numbers SHALL be white
- **AND** the counters SHALL be displayed in a row on desktop

### Requirement: Projects gallery
The system SHALL render an asymmetric grid of six project cards with hover
overlays.

#### Scenario: Projects content
- **GIVEN** the Blankspace page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL show the subheading "Projects"
- **AND** it SHALL show the heading "Recents Projects"
- **AND** it SHALL display six project cards in an asymmetric grid

#### Scenario: Project card behavior
- **GIVEN** a project card is displayed
- **WHEN** the user hovers over the card
- **THEN** the card SHALL show a dark overlay
- **AND** an arrow link button SHALL appear
- **AND** the project title and category label SHALL be visible

### Requirement: Testimonials carousel
The system SHALL render a testimonial carousel with customer quotes.

#### Scenario: Testimonials content
- **GIVEN** the Blankspace page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the subheading "Testimony"
- **AND** it SHALL show the heading "My satisfied customer says"
- **AND** it SHALL display at least 3 testimonial slides, each with:
  a circular avatar, quote text, customer name, and role

#### Scenario: Testimonials carousel behavior
- **GIVEN** the testimonials carousel is displayed
- **WHEN** the carousel auto-plays
- **THEN** it SHALL cycle through the testimonials automatically
- **AND** users SHALL be able to navigate between slides

### Requirement: Blog/case study section
The system SHALL render a three-column blog card grid.

#### Scenario: Blog content
- **GIVEN** the Blankspace page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the subheading "Our latest update"
- **AND** it SHALL show the heading "Case Study"
- **AND** it SHALL display three blog cards, each with:
  a background image, date, author, comment count, and article title

### Requirement: Pricing section
The system SHALL render four pricing cards on a light background.

#### Scenario: Pricing content
- **GIVEN** the Blankspace page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the subheading "Pricing Plans"
- **AND** it SHALL show the heading "Our Best Pricing"
- **AND** it SHALL display four pricing tiers:
  Free ($0), Startup ($19), Premium ($49), Pro ($99)

#### Scenario: Pricing card structure
- **GIVEN** a pricing card is displayed
- **WHEN** the card renders
- **THEN** each card SHALL show the plan name, price with dollar sign,
  a short excerpt, a "Get Started" CTA button, a "Enjoy All The Features"
  sub-heading, and a feature list

#### Scenario: Pricing visual
- **GIVEN** the pricing section is displayed
- **WHEN** the layout renders
- **THEN** the section background SHALL be light grey (`#f8f9fa`)
- **AND** the Free plan button SHALL be solid primary (light blue bg)
- **AND** the other plan buttons SHALL be outline style (light blue border)

### Requirement: Partner logos strip
The system SHALL render a row of partner/client logos.

#### Scenario: Partners content
- **GIVEN** the Blankspace page is rendered
- **WHEN** the partners section is displayed
- **THEN** it SHALL display 5 partner logo placeholders in a row
- **AND** the logos SHALL be displayed at equal width

### Requirement: Footer
The system SHALL render a dark-background footer with four columns.

#### Scenario: Footer content
- **GIVEN** the Blankspace page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show four columns:
  (1) Brand name "Blankspace" + description + social icons (Twitter,
  Facebook, Instagram),
  (2) Useful Links (Home, About, Work, Pricing, Blog),
  (3) Quick Links (About Us, Practice Areas, Appointment, Terms & Conditions, FAQ),
  (4) Have a Questions? (address, phone, email)
- **AND** the footer background SHALL be dark brown (`#3c312e`)
- **AND** the footer text SHALL be white/light
- **AND** the copyright line SHALL link to Component Dock

#### Scenario: Footer branding
- **GIVEN** the footer is displayed
- **WHEN** the user reads the copyright line
- **THEN** the copyright line SHALL include a link to `https://www.componentdock.com/`
  branded as "Component Dock"
- **AND** there SHALL be NO reference to ColorLib in the footer

## Verification checklist

- [ ] Spec validated with `npm run spec:validate`
- [ ] All 11 sections implemented matching the DOM structure 1:1
- [ ] Work Sans + Poppins fonts loaded from Google Fonts
- [ ] Brand color `#78d5ef` used for buttons and accents via `@theme`
- [ ] Dark brown footer `#3c312e` matches original
- [ ] Split hero layout: 1/3 text + 2/3 image
- [ ] Counter section has parallax background and white text
- [ ] Project cards show overlay + arrow on hover
- [ ] Pricing section on `#f8f9fa` background
- [ ] All photos replaced with seeded picsum placeholders
- [ ] Icons from lucide-react (replacing flaticon/ionicons)
- [ ] No ColorLib references in app code (comments included)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] `public/CNAME` contains `blankspace.free.componentdock.com`
- [ ] `homepage` in `package.json` set to `https://blankspace.free.componentdock.com`
- [ ] Responsive: mobile hamburger nav, stacked hero, single-column projects
- [ ] Dark mode toggle present
- [ ] 100% test coverage achieved
