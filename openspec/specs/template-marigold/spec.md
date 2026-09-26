# Template: Marigold (Personal Portfolio)

## Purpose

Marigold is a personal portfolio / developer landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Schmidt" design (see TEMPLATES.md), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a personal portfolio for a UI/UX designer & developer. It
features a split hero (text on left, person photo carousel on right over a
golden-yellow overlay), an About section with stats counters and personal
info, Skills with progress bars, Testimonials carousel, Services with icon
cards, Pricing plans, and a minimal footer with copyright. Marigold recreates
that structure section-for-section as a single-page layout with matching
layout, colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Schmidt" — free personal portfolio template
  (source: https://colorlib.com/wp/template/schmidt/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/schmidt/`
  (HTTP 200, 10.1KB — home page only, multi-page site with about, services,
  contact pages). Stylesheet `css/style.css` (65.5KB) analyzed for tokens.
  The TEMPLATES.md screenshot confirms the visual design (dark hero with
  golden overlay, person portrait).
- **Section order (single-page consolidation):**
  1. Navbar: brand "Schmt." (→ "Marigold"), links (Home, About, Services,
     Experiences, Works, Blog, Contact), transparent overlay on hero.
  2. Hero (full viewport): background image, right-half golden overlay
     (#d5c455), left text: subheading "UI/UX Designer & Developer", h1
     "I'm John Schmidt" (→ personalized), two CTAs ("More About Me" primary,
     "Hire Me" white), copyright line at bottom.
  3. About: stats counters (5000 Happy Clients, 1200 Projects Done, 500 Cups
     of Coffee, 587 Working Hours) + personal info (Name, DOB, Address, Zip,
     Email, Phone) + "Download CV" CTA + 6 skill progress bars (Photoshop 90%,
     Figma 95%, Illustrator 90%, JavaScript 85%, HTML5 95%, CSS3 90%,
     WordPress 70%, Adobe XD 80%, SEO 80%).
  4. Services: 8 service cards (UI/UX Design, Web Development, Graphic Design,
     Branding, Marketing, Mobile App Design, Visual Editor, IT Consultancy)
     with flaticon icons and short descriptions.
  5. Pricing: 4 tiers (Personal $49, Professional $79, Medium Business $109,
     Gigantic Business $149) with feature list and "Get Started" CTA.
  6. Testimonials: carousel with avatar, name, position, quote text.
  7. Footer: simple copyright line with heart icon + "Component Dock" link.
- **Design tokens extracted from `css/style.css`:**
  - Brand accent color: **#d5c455** (golden yellow) — used on hero overlay,
    subheading text, active nav link, toggler hover.
  - Dark text: **#222222** (h1, body).
  - White: **#fff** (hero text, button-white, navbar brand on dark state).
  - Navbar dark state background: **#222222**.
  - Light section backgrounds: **#f8f9fa** (bg-light utility).
  - Font: **"Poppins"** (weights 300, 400, 500, 600, 700) via Google Fonts.
  - Buttons: Bootstrap 5 `btn-primary` (blue #0d6efd) + `btn-white` (white
    with border). Rounded corners (0.25rem). Primary buttons have padding
    `p-4 py-3` (hero) or `py-3 px-4` (other sections).
  - Hero overlay: right 50% width, solid `#d5c455`, z-index -1; hidden on
    mobile (opacity: 0 below 768px).
  - Subheading: uppercase, 700 weight, 16px, letter-spacing 1px,
    color `#d5c455`.
  - H1: 700 weight, `#222222`, 80px font-size, 1.2 line-height.
  - Footer: simple text copyright, no dark background.
- **Recreation decisions:** Single-page SPA consolidating all sections.
  Navbar with "Marigold" brand + nav links + dark-mode toggle. Hero with
  seeded picsum background, golden overlay right half, headline + two CTAs.
  About with animated counters and skill bars. Services with lucide icons.
  Pricing cards. Testimonials carousel. Footer with "Component Dock" link.
  All images picsum-seeded. Google Fonts Poppins via `<link>`.

Marigold lives in `apps/marigold` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Marigold",
links (Home, About, Services, Experiences, Works, Blog, Contact), and a
dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Marigold page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Marigold" and navigation links
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero

The system SHALL render a full-viewport hero with a background image, a
golden-yellow overlay on the right half, a subheading, a level-1 headline,
and two call-to-action buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a subheading (e.g. "UI/UX Designer & Developer")
- **AND** it SHALL show a level-1 headline (e.g. "I'm [Name]")
- **AND** it SHALL show a "More About Me" primary button and a "Hire Me" white button
- **AND** it SHALL show a golden-yellow (#d5c455) overlay covering the right half

#### Scenario: Hero overlay color

- **GIVEN** the hero section is displayed
- **WHEN** inspecting the right-half overlay
- **THEN** the overlay background color SHALL be #d5c455

### Requirement: About section

The system SHALL render an about section with animated stats counters and
personal information details.

#### Scenario: Stats counters

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show at least four stat counters (Happy Clients, Projects Done, Cups of Coffee, Working Hours)

#### Scenario: Personal info

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show personal info fields (Name, Date of birth, Address, Email, Phone)
- **AND** it SHALL show a "Download CV" button

### Requirement: Skills section

The system SHALL render a skills section with at least six progress bars.

#### Scenario: Skill progress bars

- **GIVEN** the page is rendered
- **WHEN** the skills section is displayed
- **THEN** it SHALL show the heading "My Skills"
- **AND** it SHALL render at least six progress bars with skill names and percentages

### Requirement: Services section

The system SHALL render a services section with at least six service cards
containing icons and descriptions.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show at least six service cards
- **AND** each card SHALL have an icon and a short description

### Requirement: Pricing section

The system SHALL render a pricing section with at least three pricing tier
cards.

#### Scenario: Pricing cards

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Choose Your Pricing Plan"
- **AND** it SHALL render at least three pricing cards with a price, a plan name, feature list, and a "Get Started" CTA

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least two testimonial
cards in a carousel.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the heading "Happy Guests"
- **AND** it SHALL render at least two testimonial cards with an avatar, name, position, and quote

### Requirement: Footer

The system SHALL render a footer with copyright text and a "Component Dock"
link.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show copyright text with the current year
- **AND** it SHALL include a link to https://www.componentdock.com/ branded as "Component Dock"

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Marigold app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Marigold — Personal Portfolio Template"
