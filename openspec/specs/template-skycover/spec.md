# Template: Skycover (Construction / Roofing Services)

## Purpose

Skycover is a single-page construction/roofing services landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Roofing" free template (source:
https://colorlib.com/wp/template/roofing/), built under a DIFFERENT name
(**Skycover**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 single-page template with a full-height hero
carousel (owl-carousel), a tabbed about/quote section, animated counters,
tabbed services, a project gallery with magnific-popup lightbox, testimonials
carousel, blog cards, a 4-tier pricing grid, and a dark 4-column footer.
The brand color is a distinctive gold/yellow `#d9ba2b` used on buttons,
counters, tab accents, and active pricing highlights. Font is Poppins
(Google Fonts). The navbar sits below a social-media top bar, stacked on
mobile via flex-md-column-reverse.

**WHAT MAKES SKYCOVER DISTINCT (signature behaviors):**

1. **Dual navigation bar.** A thin top bar with social media icons (Facebook,
   Twitter, Instagram, Dribbble) sits above a dark (`#343a40`) Bootstrap
   navbar with pill-style nav items. On desktop both are visible; on mobile
   the navbar reverses above the hero via `flex-md-column-reverse`.
2. **Full-height hero carousel.** Two slides with `height: 700px`, background
   images with dark overlay (`opacity: 0.2`), centered white text: h2
   (gold `#d9ba2b`, uppercase, letter-spacing 4px, Poppins 600) as a tagline
   above an h1 (60px, weight 300, white). Each slide has a gold "Book an
   appointment" CTA button. Owl-carousel navigation arrows appear on hover.
3. **About section with tab pills + quote form.** A two-column layout: left
   has a heading, paragraph, and a 3-tab pill nav (Our Mission / Our Vision /
   Our Value) with rounded pill links (`border-radius: 4px`, shadow, gold
   active state); right has a white card with a gold header bar ("Get a Quote")
   containing a form (service dropdown, name, email, date, time, message,
   submit button). The form card has `margin-top: -85px` overlap on desktop.
4. **Gold counter band.** Full-width `#d9ba2b` background with 4 centered
   counters in white circles: Years of Experience (45), Projects Completed
   (8500), Happy Clients (2342), Business Partners (30). Each counter has a
   white 80px circle icon container with a gold icon inside.
5. **Tabbed services with side image.** Left column: vertical pill tabs
   (Skylights, Waterproofing, Industrial/Residential/Gutter/Commercial
   Roofing) with gold active accent; right column: tab content with heading,
   paragraphs, and check-icon bullet list (gold `#d9ba2b` check icons). Far
   right: a background-image side panel.
6. **Full-width project gallery.** 8 images in a `no-gutters` 4-column grid
   (`height: 270px` each), with hover overlay (black `opacity: 0.8`) revealing
   project title + category. Magnific-popup lightbox on click (circle icon
   top-right, gold icon).
7. **Testimonials carousel on light bg.** `bg-light` (`#ebecf1`) section with
   owl-carousel of testimonial cards: quote-left icon, paragraph text, user
   avatar, name, position.
8. **Blog cards.** 3-column layout with blog image (hover zoom), author
   avatar + name + date, and post title.
9. **4-tier pricing grid.** Cards on `bg-light`: Standard ($49), Basic ($79,
   active/highlighted), Standard ($109), Professional ($149). Active card
   gets gold price bar. Each card has feature list with check icons and a
   "Get Started" CTA.
10. **Dark 4-column footer.** Background `#252525`, columns: logo + social
    icons, services list, business hours, contact info (address, phone,
    email). Gold accent on headings and hover states.

## Naming

The ColorLib source name "Roofing" is FORBIDDEN as the app name. **Skycover**
is the new, original name — single lowercase word, kebab-case `skycover`, no
collision with `apps/`, `openspec/specs/`, `docs/templates/`, or any
TEMPLATES.md name (verified: zero hits for `skycover` in `ls apps/` or
`openspec/specs/`). Source slug `roofing` + preview URL recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Roofing" (page title: "Roofing - Free Bootstrap 4
  Template by Colorlib"). Listed in TEMPLATES.md at line 1355 under the
  construction section. Source: https://colorlib.com/wp/template/roofing/
- **Live preview — REACHABLE (verified by direct fetch):**
  https://preview.colorlib.com/theme/roofing/ — returns full HTML (828 lines),
  `<title>Roofing - Free Bootstrap 4 Template by Colorlib</title>`. Stylesheet:
  `css/style.css` (3,250 lines, mostly Bootstrap 4.2.1 + custom template
  styles at line ~1900+). Fonts: Poppins (Google Fonts/Cloudflare, weights
  200–900), Font Awesome 4.7 (icon font — replace with lucide-react).
  Scripts: jQuery, Bootstrap 4, owl-carousel, magnific-popup, waypoints,
  animateNumber, datepicker, timepicker, scrollax, Google Maps (unused).
- **Live DOM structure (from fetched HTML):**
  - `body` → `div.wrap` (top social bar: logo with flaticon + social icons)
    → `section.menu-wrap` (flex-md-column-reverse) containing:
    - `nav.navbar` (dark bg, toggler, nav items: Home, About, Services,
      Project, Blog, Contact)
    - `div.hero-wrap` → `div.home-slider.owl-carousel` (2 slides, each:
      `div.slider-item` with bg-image, `.overlay`, centered text: h2 tagline
      (gold) + h1 headline + CTA button)
  - `section.ftco-section.ftco-no-pt.ftco-no-pb.bg-light.ftco-appointment`
    (about + quote form, 2-column: 7/5 split)
  - `section.ftco-counter` (gold bg, 4 counter blocks)
  - `section.ftco-section` (services: tabbed nav-pills left + content right +
    side image)
  - `section.ftco-section.ftco-no-pb.ftco-no-pt` (projects gallery, full-width
    4-col grid)
  - `section.ftco-section.testimony-section.bg-light` (testimonials carousel)
  - `section.ftco-section` (blog, 3 cards)
  - `section.ftco-section.bg-light` (pricing, 4 cards)
  - `footer.footer.ftco-section` (dark bg, 4 columns)
- **Behaviors (verified from CSS + HTML):**
  - Hero: owl-carousel auto-plays, two slides, 700px height, overlay opacity
    0.2, nav arrows appear on hover
  - About tabs: Bootstrap tab pills, `data-toggle="tab"`, content swaps in
    `.tab-content`
  - Services tabs: vertical pill nav, active state = gold text + white bg,
    content in right column
  - Projects: hover overlay (opacity 0 → 0.8) reveals title + category,
    magnific-popup lightbox
  - Testimonials: owl-carousel with auto-play
  - Counters: animateNumber.js counts up on scroll (waypoints trigger)
  - Pricing: hover effect lifts card shadow, active card has gold price bar
- **Screenshot (from TEMPLATES.md):** Construction/roofing theme with a
  full-width hero showing a house roof, gold accent color prominent. The
  template has a professional, industrial feel with dark nav and footer
  bookending lighter content sections.

## Design tokens

| Token                | Value                              | Notes                                                                            |
| -------------------- | ---------------------------------- | -------------------------------------------------------------------------------- |
| `--color-brand`      | `#d9ba2b`                          | Gold/yellow — buttons, counters, tab accents, active pricing, heading subwords   |
| `--color-bg`         | `#fff`                             | Page and card backgrounds                                                        |
| `--color-bg-light`   | `#ebecf1`                          | Section backgrounds (about, testimonials, pricing)                               |
| `--color-nav`        | `#343a40`                          | Navbar dark background                                                           |
| `--color-footer`     | `#252525`                          | Footer dark background                                                           |
| `--color-text`       | `#000000`                          | Body text, headings, input text                                                  |
| `--color-text-white` | `#fff`                             | Text on dark backgrounds, hero text                                              |
| `--color-text-muted` | `rgba(255,255,255,0.7)`           | Footer text, counter labels                                                      |
| `--color-overlay`    | `rgba(0,0,0,0.2)`                 | Hero image overlay                                                               |
| `--font-body`        | 'Poppins', Arial, sans-serif       | Google Fonts, all weights 200–900; primary weight 400/500/600/700                |
| `--btn-radius`       | `4px`                              | Button border-radius                                                             |
| `--btn-text`         | uppercase, 11px, letter-spacing 1px, weight 600 | Button text styling                                         |
| `--card-shadow`      | `0px 24px 48px -13px rgba(0,0,0,0.05)` | Pricing card shadow                                                    |
| `--card-hover-shadow`| `0px 24px 48px -13px rgba(0,0,0,0.11)` | Pricing card hover shadow                                             |
| `--hero-height`      | `700px`                            | Hero carousel height                                                             |
| `--counter-bg`       | `#d9ba2b`                          | Counter section full-width gold background                                       |
| `--counter-circle`   | `80px`, radius 50%, white bg       | Counter icon circles                                                             |
| `--gallery-item-h`   | `270px`                            | Project gallery item height                                                      |
| `--form-radius`      | `4px`                              | Form input border-radius                                                         |

## Requirements

### Requirement: Top social bar + navigation

The system SHALL render a social media top bar and a dark responsive navbar
with the site's navigation links.

#### Scenario: Desktop navigation

- **GIVEN** the Skycover app is rendered on a desktop viewport (≥992px)
- **THEN** a thin top bar SHALL display the site logo (roof icon + "Skycover")
  on the left and social icons (Facebook, Twitter, Instagram, Dribbble) on the
  right
- **AND** below it, a dark (`#343a40`) navbar SHALL render with nav items:
  Home, About, Services, Project, Blog, Contact
- **AND** the nav items SHALL be white text on dark background

#### Scenario: Mobile navigation

- **GIVEN** the viewport is below 992px
- **THEN** the navbar SHALL show a hamburger toggler
- **AND** the navbar SHALL reverse above the hero via flex-md-column-reverse

#### Scenario: Navbar scroll behavior

- **GIVEN** the user scrolls past the hero
- **THEN** the navbar SHOULD become sticky/fixed (matching source behavior
  via Bootstrap scrollspy + waypoints)

### Requirement: Hero carousel

The system SHALL render a full-height hero section with an image carousel.

#### Scenario: Hero slides

- **GIVEN** the Skycover app is rendered
- **THEN** a carousel SHALL display with at least 2 slides, each with a
  background image (use `picsum.photos` placeholders), dark overlay
  (`rgba(0,0,0,0.2)`), and centered white text
- **AND** each slide SHALL show a gold uppercase tagline (h2, Poppins 600,
  letter-spacing 4px) and a white headline (h1, 60px weight 300 on desktop,
  40px on mobile)
- **AND** each slide SHALL have a "Book an appointment" CTA button (gold bg,
  uppercase, rounded 4px)

#### Scenario: Carousel navigation

- **GIVEN** the user hovers over the hero carousel
- **THEN** prev/next arrow buttons SHALL appear (opacity transition)

### Requirement: About section with tab pills and quote form

The system SHALL render a two-column about section with tabbed content and
an appointment request form.

#### Scenario: About content with tabs

- **GIVEN** the about section is rendered
- **THEN** the left column SHALL show a heading ("We help more than 45 years
  installing your roof"), a descriptive paragraph, and a 3-tab pill nav
  (Our Mission / Our Vision / Our Value)
- **AND** the active tab pill SHALL have gold (`#d9ba2b`) background with
  white text
- **AND** inactive tab pills SHALL have white background with dark text and
  a subtle shadow
- **AND** clicking a tab SHALL switch the visible content panel

#### Scenario: Quote form

- **GIVEN** the right column is rendered
- **THEN** a white card SHALL display with a gold header bar ("Get a Quote")
- **AND** the form SHALL contain: service dropdown (Skylights, Waterproofing,
  Industrial Roofing, Residential Roofing, Gutter Cleaning, Commercial
  Roofing), name input, email input, date input, time input, message
  textarea, and submit button
- **AND** the card SHALL have `margin-top: -85px` overlap on desktop (positive
  z-index)

### Requirement: Counter band

The system SHALL render a full-width gold counter section with animated
statistics.

#### Scenario: Counter display

- **GIVEN** the counter section is rendered
- **THEN** a full-width gold (`#d9ba2b`) background SHALL display with 4
  counters in a row
- **AND** each counter SHALL have a white 80px circle icon container with a
  gold icon inside
- **AND** the counters SHALL show: Years of Experience (45), Projects
  Completed (8500), Happy Clients (2342), Business Partners (30)
- **AND** the number values SHALL animate/count up when the section enters
  the viewport

### Requirement: Tabbed services section

The system SHALL render a services section with a vertical tabbed sidebar
and content panels.

#### Scenario: Services tabs

- **GIVEN** the services section is rendered
- **THEN** a heading ("Our Best Services") SHALL center above a 2-column layout
- **AND** the left column SHALL have vertical pill tabs for each service
  (Skylights, Waterproofing, Industrial Roofing, Residential Roofing,
  Gutter Cleaning, Commercial Roofing) with icons
- **AND** the active tab SHALL have gold text and white background
- **AND** the right column SHALL show the active service's heading, paragraphs,
  and a check-icon bullet list (gold check icons)
- **AND** a side image SHALL render in a third column (lg:3 width)

### Requirement: Project gallery

The system SHALL render a full-width project gallery with hover effects.

#### Scenario: Gallery grid

- **GIVEN** the projects section is rendered
- **THEN** a heading ("Done Projects") with "Projects" subheading SHALL
  center above the gallery
- **AND** 8 project images SHALL render in a 4-column grid (each 270px tall)
  using `picsum.photos` placeholders
- **AND** each item SHALL have a dark hover overlay revealing the project
  title and category
- **AND** a magnific-popup-style lightbox SHALL open on click (implemented
  as a React modal/overlay — do NOT ship magnific-popup JS)

### Requirement: Testimonials carousel

The system SHALL render a testimonials section with a quote carousel on a
light background.

#### Scenario: Testimonial cards

- **GIVEN** the testimonials section is rendered on a light (`#ebecf1`)
  background
- **THEN** a heading ("Happy Clients & Feedbacks") with "Testimonies"
  subheading SHALL center above the carousel
- **AND** each testimonial card SHALL show a quote-left icon, a paragraph
  of text, a circular user avatar, the user's name, and their position
- **AND** the carousel SHALL auto-rotate through testimonials

### Requirement: Blog section

The system SHALL render a blog cards section with 3 posts.

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **THEN** a heading ("Latest news from our blog") with "News & Blog"
  subheading SHALL center above 3 blog cards
- **AND** each card SHALL have a background image, author avatar with name
  and date, and a post title
- **AND** images SHALL use `picsum.photos` placeholders

### Requirement: Pricing grid

The system SHALL render a 4-tier pricing section with one highlighted plan.

#### Scenario: Pricing cards

- **GIVEN** the pricing section is rendered on a light (`#ebecf1`) background
- **THEN** a heading ("Pricing") with "Price & Plans" subheading SHALL center
  above 4 pricing cards
- **AND** the plans SHALL be: Standard ($49), Basic ($79), Standard ($109),
  Professional ($149)
- **AND** the "Basic" card (second) SHALL be visually highlighted with a
  gold (`#d9ba2b`) price bar (active state)
- **AND** each card SHALL have: plan name (uppercase, 11px, letter-spacing
  2px, weight 600), price with dollar sign, feature list with check icons,
  and a "Get Started" CTA button
- **AND** hovering a card SHALL increase the shadow and turn the price bar gold

### Requirement: Footer

The system SHALL render a dark 4-column footer with business information.

#### Scenario: Footer content

- **GIVEN** the footer is rendered on a dark (`#252525`) background
- **THEN** column 1 SHALL show the site logo (roof icon + "Skycover"), a
  brief description, and social media icon links (Twitter, Facebook,
  Instagram) as circular buttons
- **AND** column 2 SHALL list services with check icons
- **AND** column 3 SHALL show business hours (Monday–Friday 9am–8pm,
  Saturday 9am–5pm, closed Sundays and holidays)
- **AND** column 4 SHALL show contact information (address, phone, email)
- **AND** the bottom SHALL include a Component Dock attribution linking to
  https://www.componentdock.com/

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics.

#### Scenario: Semantics

- **GIVEN** the Skycover app is rendered
- **THEN** the navbar SHALL use `<nav>` with `aria-label`
- **AND** the hero carousel SHALL have `aria-roledescription="carousel"` and
  each slide `aria-roledescription="slide"`
- **AND** all interactive elements SHALL have visible focus-visible rings
- **AND** images SHALL have meaningful `alt` text
- **AND** the form SHALL have proper `<label htmlFor>` associations
- **AND** tab panels SHALL expose proper ARIA tab/tabpanel semantics

## Verification checklist

- [ ] `npm run verify:app -- skycover` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/roofing/:
      gold `#d9ba2b` brand color, dark nav + footer, full-height hero carousel,
      tabbed about section with quote form, gold counter band, tabbed services,
      8-item project gallery, testimonials, 3 blog cards, 4-tier pricing,
      dark 4-column footer.
- [ ] Behavior check: hero carousel auto-plays with nav arrows on hover;
      tab pills switch content; services tabs switch content; counters
      animate on scroll; pricing cards highlight on hover; project gallery
      hover overlay works; form has proper labels and validation.
- [ ] Responsive check at 768px (navbar collapses to hamburger, hero text
      scales down, grid columns stack, pricing cards stack).
- [ ] Footer includes Component Dock attribution link.
