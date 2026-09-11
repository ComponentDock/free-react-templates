# Template: ByteCraft (Digital Agency)

## Purpose

ByteCraft is a full-page digital agency website template in the
free-react-templates monorepo. It is a React recreation of the ColorLib
"Datarc" free template (source: https://colorlib.com/wp/template/datarc/),
built under a DIFFERENT name (**ByteCraft**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a single-page agency site with a sticky nav, fullscreen
hero banner, about section, services grid, filterable portfolio gallery,
team carousel, parallax studio/CTA section, pricing tables, Instagram
feed strip, blog grid, contact form, CTA bar, and a multi-column footer.
The design uses a neon-green (`#00ff8c`) accent on a white/light-gray
base with a purple-blue gradient overlay for parallax sections, Poppins
font throughout, and rounded pill-shaped buttons.

**WHAT MAKES BYTECRAFT DISTINCT (signature characteristics):**

1. **Neon-green accent (`#00ff8c`) on dark/white contrast.** The brand
   color is an electric green used for buttons, links, hover states, and
   icon strokes — set against both white backgrounds and dark
   `#222222` section backgrounds (services title-bg). The studio/CTA
   sections use a purple-blue linear gradient overlay
   (`rgba(60,64,143,0.95)` → `rgba(91,97,207,0.95)`).
2. **Fullscreen hero with dark overlay.** A dark background image with
   `overlay overlay-bg` darkens the hero; white uppercase subheadline +
   uppercase headline + green-accent CTA button.
3. **Filterable portfolio grid.** "Remarkable Works" section with
   data-filter tabs (All, Categories, Branding, Image Manipulation,
   Creative Work, Web Design) and a responsive image grid with hover
   details overlay.
4. **Team section with social icons.** Four team members in a grid, each
   with a circular photo, name, role, and Facebook/Twitter/LinkedIn
   social icons.
5. **Parallax studio/CTA section.** Full-width purple-blue gradient
   overlay with white text + green-accent CTA button.
6. **Pricing tables.** Three columns (Standard, Business, Premium) with
   dark `#4a4fad` background headers and a green-accent "Purchase" CTA.
7. **Instagram feed strip.** A row of square images at the bottom, before
   blog/contact.

## Naming

The ColorLib source name "Datarc" is FORBIDDEN as the app name.
**ByteCraft** is the new, original name — single lowercase word,
kebab-case, no collision with `apps/`, `openspec/specs/`,
`docs/templates/`, or any TEMPLATES.md name (verified: zero hits for
`bytecraft` in TEMPLATES.md, `ls apps/`, `openspec/specs/`,
`docs/templates/`).

Source slug: `datarc`
Preview URL: https://colorlib.com/wp/template/datarc/
Live preview: https://preview.colorlib.com/theme/datarc/

## Design reference (replication findings)

- **Original:** ColorLib "Datarc" (page title: "Agency"). Listed in
  TEMPLATES.md under Digital Agency templates. A single-page agency
  site with 12 sections plus header and footer.
- **Live preview — REACHABLE (verified by direct fetch):**
  `https://preview.colorlib.com/theme/datarc/` returns HTTP 200,
  ~39,500 bytes of HTML. Stylesheets: `css/linearicons.css` (icon
  font), `css/owl.carousel.css` (carousel), `css/font-awesome.min.css`
  (social icons), `css/animate.css`, `css/bootstrap.css`,
  `css/main.css` (~19,700 bytes — ALL custom styling). Font loaded
  inline via Cloudflare: **Poppins** 300/500/600.
- **Live DOM structure (from fetched HTML + CSS):**
  - `header.default-header` → `div.sticky-header` → logo + nav
    (Home, Services, Portfolio, Team, Blog, Contact) + search icon +
    social icons (Facebook, Twitter, LinkedIn)
  - `section.banner-area` — fullscreen hero with `overlay overlay-bg`,
    centered white text: uppercase subheadline + uppercase headline +
    green CTA button ("Explore Us")
  - `section.gray-bg` (About) — centered section title + full-width
    description + 3-column service cards (icon + title + description +
    "Explore" link)
  - `section.title-bg` (Services, dark `#222222` bg) — "Why Choose
    Us" white heading + 4 feature cards (Unique Design, Appropriate UX,
    Perfect Visual, Different Layout) with icon + title + description
  - `section#protfolio` (Portfolio) — "Remarkable Works" heading +
    filter tabs (All, Categories, Branding, Image Manipulation, Creative
    Work, Web Design) + responsive image grid
  - `section#team` — "Creative People" heading + 4 team members in
    grid: circular photo, name, role, social icons (Facebook, Twitter,
    LinkedIn)
  - `section.studio-area` — purple-blue gradient overlay, white text:
    "A Digital Studio Crafting Tech Business" + green CTA
  - `section` (Pricing) — 3 pricing tables (Standard, Business,
    Premium?) with dark `#4a4fad` header bg, green "Purchase" CTA
  - `section.gray-bg` (Instagram) — `ul.instafeed` row of square images
  - `section#blog` — "Latest From Blog" heading + 4 blog cards (date,
    author, title, excerpt, "Details" link)
  - `section#contact.gray-bg` — contact info (address, phone) + contact
    form (Full Name, Email, Subject, Message textarea, Send Message)
  - `section.cta-area` — purple-blue gradient, "Not yet convinced with
    our quality?" + green CTA
  - `footer` — 3 columns (About Agency blurb, Navigation Links,
    Newsletter) + footer-bottom (copyright + social icons)

- **Design tokens (extracted from `css/main.css`):**

| Token                 | Value                                              | Notes                                                        |
| --------------------- | -------------------------------------------------- | ------------------------------------------------------------ |
| `--color-brand`       | `#00ff8c`                                          | Neon green — buttons, links, hover, icon strokes, accents    |
| `--color-dark`        | `#222222`                                          | Services section bg, primary text color                      |
| `--color-gray-bg`     | `#f9f9ff`                                          | Light blue-tinted off-white section backgrounds (about, team, blog, contact, instagram) |
| `--color-text`        | `#222222`                                          | Primary body text                                           |
| `--color-text-muted`  | `#777777`                                          | Secondary/muted text                                        |
| `--color-white`       | `#ffffff`                                          | Text on dark backgrounds                                    |
| `--color-purple-start`| `rgba(60, 64, 143, 0.95)` (`#3c3f8f` at 95%)      | Studio area gradient start                                  |
| `--color-purple-end`  | `rgba(91, 97, 207, 0.95)` (`#5b61cf` at 95%)      | Studio area gradient end                                    |
| `--color-pricing-head`| `#4a4fad`                                          | Pricing table header background                             |
| `--font-body`         | 'Poppins', sans-serif                              | 300/500/600 weights; base 14px, font-weight 300             |
| `--radius-btn`        | `20px`                                             | Primary button border-radius (pill shape)                   |
| `--btn-border`        | `1px solid #00ff8c`                                | Primary button border (transparent bg, green border/hover)  |

- **Screenshot (`datarc-digital-agency-free-website-template.jpg`):
  Viewed from HTML/CSS analysis.** Dark overlay hero with white text
  and green CTA, light-gray about section with service cards, dark
  services section, portfolio grid, team with circular photos, purple
  gradient studio parallax, pricing tables, Instagram strip, blog
  grid, contact form, green-accent CTA bar, dark footer. Overall
  aesthetic: modern digital agency, clean layout, bold green accent
  against neutral tones.

## Requirements

### Requirement: Header and navigation

The system SHALL render a sticky header with logo, navigation links,
search toggle, and social icons.

#### Scenario: Desktop navigation

- **GIVEN** the ByteCraft app is rendered on a desktop viewport
- **THEN** a sticky header SHALL render at the top with a logo on the
  left and navigation links on the right
- **AND** the nav links SHALL be: Home, Services, Portfolio, Team,
  Blog, Contact
- **AND** a search icon SHALL be present that toggles a search input
- **AND** social icons (Facebook, Twitter, LinkedIn) SHALL render in
  the header

#### Scenario: Sticky behavior

- **GIVEN** the user scrolls down the page
- **THEN** the header SHALL remain fixed/sticky at the top of the
  viewport

### Requirement: Hero banner

The system SHALL render a fullscreen hero banner with dark overlay,
centered white text, and a green CTA button.

#### Scenario: Hero content

- **GIVEN** the ByteCraft app is rendered
- **THEN** the hero section SHALL occupy the full viewport height
- **AND** a dark overlay SHALL cover the background image
- **AND** centered white text SHALL display: an uppercase subheadline
  ("We work hard, we result perfect" or similar) and an uppercase
  headline ("Crafting Digital Agency Experiences" or similar)
- **AND** a CTA button with green accent (`#00ff8c`) border SHALL
  render below the headline (pill-shaped, 20px radius)

### Requirement: About section

The system SHALL render an about section with centered heading and
three service feature cards.

#### Scenario: About content

- **GIVEN** the ByteCraft app is rendered
- **THEN** a section with `gray-bg` (`#f9f9ff`) SHALL display
- **AND** a centered section title SHALL read "About Our Digital Agency"
  (or similar)
- **AND** a descriptive paragraph SHALL appear below the title
- **AND** three service cards SHALL render in a row, each with an icon,
  title, description text, and an "Explore" link with arrow icon

### Requirement: Services section (dark background)

The system SHALL render a dark-background section with four feature
cards.

#### Scenario: Services features

- **GIVEN** the ByteCraft app is rendered
- **THEN** a dark `#222222` background section SHALL display with white
  text
- **AND** the heading SHALL read "Why Choose Us" with a subheading
  about quality digital products
- **AND** four feature cards SHALL render: Unique Design, Appropriate
  UX, Perfect Visual, Different Layout — each with a green icon,
  title, and description

### Requirement: Portfolio section with filtering

The system SHALL render a filterable portfolio gallery with category
tabs and a responsive image grid.

#### Scenario: Portfolio filter tabs

- **GIVEN** the ByteCraft app is rendered
- **THEN** the "Remarkable Works" section SHALL display with filter
  tabs: All, Categories, Branding, Image Manipulation, Creative Work,
  Web Design
- **AND** the "All" tab SHALL be active by default
- **AND** clicking a tab SHALL filter the portfolio grid (show/hide
  items by category)

#### Scenario: Portfolio grid

- **GIVEN** the portfolio section is visible
- **THEN** a responsive grid of portfolio items SHALL render using
  placeholder images (`https://picsum.photos/seed/bytecraft-<n>/...`)
- **AND** each item SHALL show an image with a hover overlay

### Requirement: Team section

The system SHALL render a team section with four team member cards
in a grid.

#### Scenario: Team member cards

- **GIVEN** the ByteCraft app is rendered
- **THEN** the "Creative People" section SHALL display
- **AND** four team members SHALL render in a responsive grid
- **AND** each member SHALL have a circular photo, name (uppercase),
  role, and social icons (Facebook, Twitter, LinkedIn)
- **AND** placeholder images SHALL use
  `https://picsum.photos/seed/bytecraft-team-<n>/...`

### Requirement: Studio/parallax section

The system SHALL render a full-width parallax section with purple-blue
gradient overlay, white text, and a green CTA.

#### Scenario: Studio content

- **GIVEN** the ByteCraft app is rendered
- **THEN** a full-width section with purple-blue gradient overlay
  (`linear-gradient(to right, rgba(60,64,143,0.95), rgba(91,97,207,0.95))`)
  SHALL display
- **AND** white text SHALL read "A Digital Studio Crafting Tech
  Business" (or similar) with a green-accent CTA button

### Requirement: Pricing tables

The system SHALL render three pricing table columns with dark headers
and green CTAs.

#### Scenario: Pricing columns

- **GIVEN** the ByteCraft app is rendered
- **THEN** three pricing tables SHALL render side by side
- **AND** each SHALL have a dark `#4a4fad` header with a white
  plan name (Standard, Business, Premium or similar)
- **AND** a green "Purchase" CTA button SHALL appear in each table

### Requirement: Instagram feed strip

The system SHALL render a row of square images as an Instagram-style
feed.

#### Scenario: Instagram images

- **GIVEN** the ByteCraft app is rendered
- **THEN** a row of square placeholder images SHALL render using
  `https://picsum.photos/seed/bytecraft-inst-<n>/...`
- **AND** images SHALL be displayed in a flex-wrap row filling the
  width

### Requirement: Blog section

The system SHALL render a blog grid with four article cards.

#### Scenario: Blog cards

- **GIVEN** the ByteCraft app is rendered
- **THEN** the "Latest From Blog" section SHALL display
- **AND** four blog cards SHALL render in a responsive grid
- **AND** each card SHALL have a placeholder image, date, author name,
  title, excerpt, and a "Details" link with arrow icon

### Requirement: Contact section

The system SHALL render a contact section with address info and a
contact form.

#### Scenario: Contact form

- **GIVEN** the ByteCraft app is rendered
- **THEN** the contact section SHALL display with a `gray-bg`
  (`#f9f9ff`) background
- **AND** contact information SHALL show: physical address, phone
  numbers
- **AND** a contact form SHALL include: Full Name input, Email input,
  Subject input, Message textarea, and a "Send Message" submit button
- **AND** the form SHALL be a mock (no real backend submit)

### Requirement: CTA bar

The system SHALL render a full-width CTA section with purple-blue
gradient.

#### Scenario: CTA content

- **GIVEN** the ByteCraft app is rendered
- **THEN** a full-width section with purple-blue gradient SHALL display
- **AND** white text SHALL read "Not yet convinced with our quality?"
  (or similar)
- **AND** a green-accent CTA button SHALL render

### Requirement: Footer

The system SHALL render a multi-column footer with about text,
navigation links, and newsletter, plus a footer bottom bar.

#### Scenario: Footer columns

- **GIVEN** the ByteCraft app is rendered
- **THEN** the footer SHALL render with three columns: About Agency
  (blurb), Navigation Links (Home, Features, Services, Portfolio,
  Team, Pricing, Blog, Contact), and Newsletter (input + button)
- **AND** a footer-bottom bar SHALL show copyright text and social
  icons

#### Scenario: Component Dock credit

- **GIVEN** the ByteCraft app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics.

#### Scenario: Semantic structure

- **GIVEN** the ByteCraft app is rendered
- **THEN** the page SHALL use semantic elements: `<header>`, `<nav>`,
  `<main>`, `<section>`, `<footer>`
- **AND** all interactive elements SHALL have visible focus-visible
  rings
- **AND** the contact form SHALL have proper `<label htmlFor>`
  associations
- **AND** all images SHALL have alt text

## Verification checklist

- [ ] `npm run verify:app -- bytecraft` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/datarc/: fullscreen dark
      hero with white text, green `#00ff8c` accents, gray-bg sections,
      dark services section, filterable portfolio, team grid with
      circular photos, purple-blue gradient studio/CTA sections,
      pricing tables, Instagram strip, blog grid, contact form,
      multi-column footer.
- [ ] Behavior check: portfolio filter tabs toggle item visibility;
      sticky header remains fixed on scroll; contact form validates
      fields; smooth scroll between sections.
- [ ] Responsive check at 768px and 480px: stacked layouts, no
      horizontal overflow, mobile nav toggle.
