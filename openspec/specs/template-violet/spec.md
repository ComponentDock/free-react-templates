# Template: Violet (Startup Landing Page)

## Purpose

Violet is a single-page startup landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free **"Sierra"**
website template design (https://colorlib.com/wp/template/sierra/), built
under a DIFFERENT name ("Violet" — the mandatory naming rule forbids reusing
the ColorLib source name) with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Sierra" — startup / business landing template
  (source: https://colorlib.com/wp/template/sierra/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/sierra/
  (HTTP 200, 44 KB rendered DOM extracted) + `css/style.css` (51 KB)
  extracted. The TEMPLATES.md screenshot (`sierra-free-template.jpg`) is the
  visual reference.
- **Section order (1:1, from the live DOM):**
  1. Navbar (`main_menu_area`): logo + Home, About Us, Services, Portfolio,
     Blog, Contact links (multi-page in the original — collapsed to the
     page's real sections in this one-page recreation).
  2. Hero (`main_slider_area`, revolution slider): "Choose a powerful design
     for your Start-up" + "Get your freebie template now!" + **Discover**
     button (gradient blue→purple pill).
  3. Features (`feature_area`): "Discover the features" — "We are young but
     bold" + 3 cards — **Brand Identity, Online Marketing, Social Media**
     (icon + blurb + **Read More** link).
  4. Testimonials (`best_3d_area`): "They are the best" + quote +
     **Chriss Turner — CEO Enterprise** (carousel in the original).
  5. Team (`team_people_area`): "We build a strong team of great people" +
     member cards (avatar + name + role).
  6. Contact (`get_in_touch_area`): "Get in touch, send us an e-mail or call
     us" + world map area (recreated as a stylized band, no map asset).
  7. Footer (`footer_widget_area` + `footr_area`): widget columns + social +
     copyright.
- **Design tokens extracted from `css/style.css`:**
  - Primary **purple `#9b8aff`**; **blue `#6ebdfe`** (hero + buttons are a
    blue→purple gradient, e.g. `linear-gradient(left, #6ebdfe, #9b8aff)` and
    `#70bafe → #998dff → #70bafe` for buttons); dark navy `#0b1033`.
  - Muted text `#7c8d93`.
  - Fonts: **"Open Sans"** + **"Roboto"** (Google Fonts).
  - Buttons: gradient blue→purple with white text, pill radius
    (`border-radius: 35px`), hover shifts the gradient.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/violet-<n>/<w>/<h>`); icons → lucide-react; Open Sans
  - Roboto via Google Fonts `<link>`; hero slider recreated as a static
    gradient hero; the world map recreated as a stylized dotted band with
    MapPin markers; no assets copied.

Violet lives in `apps/violet` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Violet",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Violet page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Violet" and links to Home, Features, Testimonials, Team, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a freebie
subheading, and a "Discover" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Choose a powerful design for your Start-up"
- **AND** it SHALL show a "Discover" button

### Requirement: Features section

The system SHALL render a features section with a heading and three feature
cards, each with a title, a blurb, and a "Read More" link.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Discover the features"
- **AND** it SHALL show cards titled "Brand Identity", "Online Marketing", and "Social Media" with "Read More" links

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading, a quote, and
a reviewer.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show a quote "They are the best" attributed to "Chriss Turner", CEO Enterprise

### Requirement: Team section

The system SHALL render a team section with a heading and three member cards,
each with a name and a role.

#### Scenario: Team content

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL contain a heading "We build a strong team of great people"
- **AND** it SHALL show three team member cards with names and roles

### Requirement: Contact section

The system SHALL render a contact section with a heading, contact details,
and a "used worldwide" map band.

#### Scenario: Contact content

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL contain a heading "Get in touch, send us an e-mail or call us"
- **AND** it SHALL show contact details (e-mail and phone)

### Requirement: Footer

The system SHALL render a footer with link columns, social links, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns and a copyright line
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Violet app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Violet — Startup Landing Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] Per-app gate: typecheck · lint · vitest 100% coverage · build
- [ ] Lockfile registers `@free-react-templates/violet` (`grep -c "free-react-templates/violet" package-lock.json` >= 1)
- [ ] `injectUiSource()` present in `vite.config.ts`
- [ ] PR title/body records: recreation of ColorLib Sierra
      (https://colorlib.com/wp/template/sierra/), preview URL, tokens
