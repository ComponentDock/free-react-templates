# Template: Crafted (Creative Agency Landing)

## Purpose

Crafted is a single-page creative-agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Crafted" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Crafted" — creative agency website template
  (source: https://colorlib.com/wp/template/crafted/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/crafted/
  (HTTP 200 — full rendered DOM + `css/main.css` (99 KB) extracted;
  Bootstrap 4 + owl.carousel + themify/linearicons). The TEMPLATES.md
  screenshot (`crafted-free-template.jpg`) matches this reconstruction.
- **Section order (1:1):**
  1. Navbar (`main-menu`): Home, About, Service, Project, Team, Blog,
     Contact (plus dropdowns for Project/Blog detail pages).
  2. Hero (`banner-area`): "We Are Crafted. Design & Development Service
     Provider." + blurb + "More About Us" square outline button +
     "Watch Live Demo" video play button (overlay video modal).
  3. Brand strip (`brand-area`): 4+ client logo tiles.
  4. Services (`service-area`): "We Are Crafted. We Provide These Services
     to Our Customers" + 3 icon tiles (original repeats the "Story
     Boarding" placeholder title 3× with different icons and blurbs).
  5. About (`about-area` + `counter_area`): "We Are Crafted. Some Info
     About Us" + blurb + 4 counters — 500+ Qualified Lawyer, 20,650+
     Solved Cases, 2.5k+ Trusted Clients, 50+ Achievements (demo content
     keeps the legal-theme labels).
  6. Portfolio (`portfolio-area`): "Recent Portfolio Showcase" + 3 project
     cards ("Santorini Island Dream Holiday and Fun Package" placeholder
     title) + "View all Works" button.
  7. Team (`team-area`): "Our Interactive Team Mates" + carousel of member
     cards (photo, name, role, social icons; e.g. "Randy Weaver — Senior
     Barrister at law").
  8. Testimonials (`testimonial-area`): 2-slide carousel of quotes
     attributed to "Marvel Maison — Chief Executive, Amazon".
  9. CTA band (`cta-area`): "Get to Know Project Estimate?" + "Get
     Estimate for Free" button.
  10. Blog (`blog-area`): "Latest Posts From Our Blog" + 3 cards (meta
      "25 june, 2018 | By Mark Wiens", title, excerpt, Read more).
  11. Footer (`footer-area`): "About Crafted" blurb + Navigation links +
      Newsletter signup (email + subscribe) + social icons + copyright.
- **Design tokens extracted from `main.css`:**
  - Primary **blue `#4ba0f9`**, hover/accent **gradient
    `linear-gradient(90deg, #4ba0f9 0%, #85f3f9 100%)`** (`.primary-btn`
    hover, `.cta-area`, footer subscribe).
  - Accents: **yellow `#f8b600`** (underline/star accents) and **cyan
    `#4cd3e3`**.
  - Dark sections **`#222222`**; light sections **`#f9f9ff`**; counter
    band **`#f4f8ff`**; body text **`#777777`**.
  - Fonts: **"Playfair Display"** (display headings) + **"Roboto"**
    (body), Google Fonts.
  - Buttons: **square** (border-radius 0), 2px solid `#4ba0f9` border,
    transparent fill, ~40px horizontal padding, 48px line-height; hover
    fills with the blue→cyan gradient.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/crafted-<n>/<w>/<h>`); icons → lucide-react
  (PenTool, Palette, Code, Play, Quote, socials as inline SVG brand
  icons); font → Google Fonts Playfair Display + Roboto via `<link>`; no
  assets copied. Copy paraphrased keeping the same content kinds; the
  repeated "Story Boarding" placeholder becomes three distinct service
  titles in the same style (Story Boarding, Creative Design, Web
  Development) so the tiles read as a real agency site.

Crafted lives in `apps/crafted` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Crafted",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Crafted page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Crafted" and links to Home, About, Services, Projects, Team, Blog, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, and two
call-to-action buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "We Are Crafted" with a design & development service line
- **AND** it SHALL show a "More About Us" button
- **AND** it SHALL show a "Watch Live Demo" button

### Requirement: Brand strip

The system SHALL render a strip of client brand tiles between the hero and
the services section.

#### Scenario: Brand strip content

- **GIVEN** the page is rendered
- **WHEN** the brand strip is displayed
- **THEN** it SHALL show at least four client brand tiles

### Requirement: Services section

The system SHALL render a services section with a heading and three service
tiles, each with an icon, title, and blurb.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "We Provide These Services to Our Customers"
- **AND** it SHALL show tiles titled "Story Boarding", "Creative Design", and "Web Development"

### Requirement: About section with stats

The system SHALL render an about section with a heading, a blurb, and four
stat counters.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "Some Info About Us"
- **AND** it SHALL show stats "500+", "20,650+", "2.5k+", and "50+" with labels

### Requirement: Portfolio section

The system SHALL render a portfolio section with a heading, three project
cards, and a "View all Works" button.

#### Scenario: Portfolio content

- **GIVEN** the page is rendered
- **WHEN** the portfolio section is displayed
- **THEN** it SHALL contain a heading "Recent Portfolio Showcase"
- **AND** it SHALL show three project cards with image, title, and category
- **AND** it SHALL show a "View all Works" button

### Requirement: Team section

The system SHALL render a team section with a heading and member cards.

#### Scenario: Team content

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL contain a heading "Our Interactive Team Mates"
- **AND** it SHALL show member cards with name and role, including "Randy Weaver"

### Requirement: Testimonials section

The system SHALL render a testimonials carousel with quotes and controls.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show quotes attributed to "Marvel Maison"
- **AND** the visible quote SHALL change when the next arrow is pressed

### Requirement: CTA band

The system SHALL render a call-to-action band with a heading and a button.

#### Scenario: CTA band content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL contain a heading "Get to Know Project Estimate?"
- **AND** it SHALL show a "Get Estimate for Free" button

### Requirement: Blog section

The system SHALL render a blog section with a heading and three article
cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a heading "Latest Posts From Our Blog"
- **AND** it SHALL show three cards, each with a title, author, date, and excerpt

### Requirement: Footer

The system SHALL render a footer with an about blurb, navigation links, a
newsletter signup, social links, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an "About Crafted" blurb and navigation links
- **AND** it SHALL show a newsletter signup with an email input and subscribe button
- **AND** it SHALL show social links and a copyright line for "Crafted"

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Crafted app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Crafted — Creative Agency Landing Template"
