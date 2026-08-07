# Template: Catwalk (Model Agency Landing)

## Purpose

Catwalk is a single-page model agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Topmodel" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Topmodel" — model agency landing page template
  (source: https://colorlib.com/wp/template/topmodel/).
- **Live preview analyzed (HTTP 200):** https://preview.colorlib.com/theme/topmodel/
  (`topmodel.html` + `css/style.css` fetched and parsed). The TEMPLATES.md
  screenshot (`topmodel-free-template.jpg`) confirms the visual design.
- **Visual design (screenshot + DOM):** elegant model-agency landing with a
  muted dusty-rose/terracotta accent (#daa592) on white, a full-bleed photo
  hero with dark overlay, a terracotta model-search bar, circular icon
  services, tall photo model cards with hover overlay + stats, testimonial
  carousel, split image+text events block, blog case-study cards, and a
  peach (#cd866c) footer. All-Poppins typography (300–700), white text on
  photo sections.
- **Section order (1:1):**
  1. Navbar: "TopModel" brand (accent span) + Home, About, Models, Blog,
     Contact links (dark, white links).
  2. Hero (full-height split, photo bg with black overlay 0.3): eyebrow
     "Top Model", H1 "Your Career of A Model", sub "We Are Professional
     Model Agency Based in London", "Contact Us" button (btn-custom with
     arrow).
  3. Model search bar (bg-primary #daa592): "Search A Model" + 5 selects —
     Height (5.5–6), Bust (85–110cm), Weist (65–90), Hips (90–115), Eye
     (Amber/Blue/Brown/Gray/Green/Black) — + "Search" button.
  4. Services: 4 icon cards — Finding Agency, Types of Modeling, Freelance,
     Search Models — circular icons, "Even the all-powerful Pointing…" blurb.
  5. Counter strip (photo bg + overlay): Models, Agency, Awards, Events
     (animated count-up in source; static numbers fine).
  6. About: "Welcome to Top Model" eyebrow + "We Are Model Agency" + 3
     features — Fashion Shows, Photosessions, Model Video (icon + title +
     blurb).
  7. Popular Model: 6 photo cards — Patricia Becket, Emily Stewart, Sofia
     Scott, Chloe Johnson, Victoria Henderson, Ella Turner — each with
     hover overlay (#daa592) revealing stats (Age 18, Height 179, Bust 85,
     Waist 65, Hips 90, Shoes 39, Eyes Blue).
  8. Testimonials: "My satisfied customer says" — carousel of quotes
     (Garreth Smith, Agent, …).
  9. Events (bg-light, split): left image, right "Events" eyebrow +
     "Latest Fashion Shows" + 2 paragraphs.
  10. Case Study: "Our latest update" + "Case Study" + 3 blog cards (date
      "sept. 17, 2019", "Admin", 3 comments, title "The Most Attractive
      Persons of the Hollywood").
  11. Footer (bg #cd866c): About Me / Popular Links / Quick Links / Have a
      Questions? (203 Fake St., Mountain View, San Francisco, CA, USA · +2
      392 3929 210 · info@yourdomain.com) + copyright line.
- **Design tokens extracted from the CSS (`css/style.css`):**
  - Brand color: **#daa592** (dusty rose / terracotta; `.bg-primary`,
    `.btn.btn-primary`, hover overlays, subheadings).
  - Brand scale: #cd866c (footer bg, btn-custom text), #d59883
    (btn-custom:after), #dfb2a1 (btn-custom underline), #000000 (hero
    overlay at 0.3 opacity).
  - Neutrals: white (#fff), #6c757d, #212529, #f8f9fa (bg-light), #000.
  - Font: **"Poppins"** (weights 300–700) — single family for body +
    headings; hero H1 ~6vw weight 700 white.
  - Buttons: `.btn-primary` = #daa592 bg + white text, 1px border; custom
    CTA = transparent with 4px bottom border #dfb2a1, text #cd866c,
    letter-spacing 1px, arrow accent.
  - Shapes: circular icon containers (services), tall model cards (600px)
    with image bg + hover overlay, no rounded cards.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/catwalk-<n>/<w>/<h>`); icons → lucide-react; Poppins
  via Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer chrome;
  search bar as a client-side filter form (no backend); counter strip as
  static stats; testimonial carousel as a simple index-based slider.

Catwalk lives in `apps/catwalk` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Catwalk",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Catwalk page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Catwalk" and links to
  About, Models, and Blog
- **AND** the navbar SHALL show a "Contact Us" button and a dark-mode
  toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width photo hero with an eyebrow label, a
headline, a subheadline, and a call-to-action button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain an eyebrow "Top Model", a level-1 heading
  "Your Career of A Model", and the subheadline "We Are Professional Model
  Agency Based in London"
- **AND** it SHALL show a "Contact Us" button linking to the contact
  section

### Requirement: Model search bar

The system SHALL render a search bar with five attribute selects and a
search button.

#### Scenario: Search bar content

- **GIVEN** the page is rendered
- **WHEN** the search bar is displayed
- **THEN** it SHALL contain a "Search A Model" label and selects for
  Height, Bust, Weist, Hips, and Eye
- **AND** it SHALL show a "Search" button

#### Scenario: Search filters models

- **GIVEN** the search bar is rendered with model cards below
- **WHEN** the user selects a Height of "5.8" and presses Search
- **THEN** the model list SHALL show only models matching the selected
  Height

### Requirement: Services section

The system SHALL render a services section with four icon cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show cards for Finding Agency, Types of Modeling,
  Freelance, and Search Models
- **AND** each card SHALL have an icon and a short description

### Requirement: Stats strip

The system SHALL render a stats strip with four counters.

#### Scenario: Stats content

- **GIVEN** the page is rendered
- **WHEN** the stats strip is displayed
- **THEN** it SHALL show counts for Models, Agency, Awards, and Events

### Requirement: About section

The system SHALL render an about section with an eyebrow, a heading, and
three feature items.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain "Welcome to Catwalk" and a heading "We Are
  Model Agency"
- **AND** it SHALL show features for Fashion Shows, Photosessions, and
  Model Video

### Requirement: Model cards

The system SHALL render a popular models section with at least six model
cards, each with stats.

#### Scenario: Model card content

- **GIVEN** the page is rendered
- **WHEN** the popular models section is displayed
- **THEN** it SHALL contain a heading "Popular Model"
- **AND** it SHALL show cards for Patricia Becket, Emily Stewart, and
  Chloe Johnson
- **AND** each card SHALL show stats including Age, Height, Bust, Waist,
  Hips, Shoes, and Eyes

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least one quote and
navigation controls.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "My satisfied customer says"
- **AND** it SHALL show at least one testimonial quote with an author name

#### Scenario: Testimonial navigation

- **GIVEN** the testimonials section is displayed
- **WHEN** the user activates the next control
- **THEN** the displayed quote SHALL change to the next testimonial

### Requirement: Events section

The system SHALL render an events section with an image, an eyebrow, a
heading, and descriptive paragraphs.

#### Scenario: Events content

- **GIVEN** the page is rendered
- **WHEN** the events section is displayed
- **THEN** it SHALL contain an eyebrow "Events" and a heading "Latest
  Fashion Shows"
- **AND** it SHALL show at least one descriptive paragraph

### Requirement: Blog section

The system SHALL render a blog section with at least three post cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a heading "Case Study"
- **AND** it SHALL show at least three post cards with a date, author,
  and comment count

### Requirement: Footer

The system SHALL render a footer with link columns, contact details, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns About Me, Popular Links, and Quick
  Links
- **AND** it SHALL show a "Have a Questions?" block with address, phone,
  and email
- **AND** it SHALL show a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Catwalk app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Catwalk — Model Agency Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `npm run verify:app catwalk` (typecheck + lint + 100% coverage tests + build) passes in FAST_MODE; full `npm run gate` in CI on merge
- [ ] Section order matches the original 1:1 (11 sections above)
- [ ] Brand token #daa592 used via `@theme`; Poppins via Google Fonts
- [ ] Placeholder images seeded (`picsum.photos/seed/catwalk-<n>/<w>/<h>`);
      no ColorLib assets copied
- [ ] New name "Catwalk" (never the ColorLib source name "Topmodel")
