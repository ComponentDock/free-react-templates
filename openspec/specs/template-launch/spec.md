# Template: Launch (App Landing Page)

## Purpose

Launch is a single-page product landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Launch"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Launch" — product landing page template
  (source: https://colorlib.com/wp/template/launch/).
- **Demo DOM analyzed (this run):** https://preview.colorlib.com/theme/launch/
  (HTTP 200, 60,757-byte rendered DOM; `css/style.css` 253,423 bytes
  extracted). The TEMPLATES.md screenshot (`launch-free-template.jpeg`) is the
  visual reference.
- **Section order (1:1):** Auth modal (Welcome Back sign in / Create Account
  sign up, with Continue with Google / GitHub) → Navbar (Launch., Home,
  Testimonials, Features, Pricing, About, Contact + Sign in / Register) →
  Hero ("Promote Your Products by Colorlib" + blurb + See Features / Pricing
  buttons) → Pricing (eyebrow "Digital Services", h2 "Simple, Transparent
  Pricing", Monthly/Yearly toggle with "Save 20%", Starter $0 / Pro $29 "Most
  Popular" / Enterprise $99 plans) → Features ("Advantage of using our
  products" + 4 cards: Grow Your Business, Build Products, Success Every Day,
  Bring Ideas to Life) → Testimonials ("Our Customers Feedbck" + quote cards,
  e.g. James Anderson — Facebook, Product Lead) → About ("About Us" + "Our
  News" blog cards) → Contact ("Let's Start a Conversation" + First name /
  Last name / Email address / Message form + Visit Us / Call Us / Email Us /
  Follow Us info cards) → Footer (About Launch., Connect, Projects, Services,
  Contact columns + copyright).
- **Design tokens extracted from `css/style.css`:**
  - Primary **blue `#407BFF`** (buttons, accents; hero/CTA gradients
    `linear-gradient(135deg, #407BFF 0%, #0d58ff 100%)` / `#004bf3`).
  - Dark navy sections/footer `#16213e` (gradient `#1a1a2e → #16213e`).
  - Dark text `#212529`, muted `#6c757d`, light bg `#f8f9fa`, white.
  - Font: **"Nunito"** (Google Fonts, 400/700).
  - Rounded buttons (radius 30px pills on CTAs, 12px cards).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/launch-<n>/<w>/<h>`); icons → lucide-react (brand
  icons via inline SVG); auth/contact forms prevent default (no backend); no
  assets copied.

Launch lives in `apps/launch` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Launch.",
anchor links to the page's sections, a "Sign in" button, and a dark-mode
toggle button.

#### Scenario: Navbar content

- **GIVEN** the Launch page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Launch." and links to Home, Features, Pricing, Testimonials, About, and Contact
- **AND** the navbar SHALL show a "Sign in" button and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

#### Scenario: Opening the auth modal

- **GIVEN** the page is rendered
- **WHEN** the user presses "Sign in"
- **THEN** the auth modal SHALL open with a "Welcome Back" sign-in form

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, and two
call-to-action buttons on a blue gradient background.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Promote Your Products by Colorlib"
- **AND** it SHALL show a supporting blurb, a "See Features" button, and a "Pricing" button

### Requirement: Pricing section

The system SHALL render a pricing section with a heading, a billing toggle,
and three plans.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Simple, Transparent Pricing"
- **AND** it SHALL show three plans (Starter, Pro, Enterprise) each with a price and a purchase button
- **AND** the Pro plan SHALL be marked "Most Popular"

#### Scenario: Billing toggle

- **GIVEN** the pricing section is displayed
- **WHEN** the user switches from Monthly to Yearly billing
- **THEN** the yearly prices SHALL be shown for each plan

### Requirement: Features section

The system SHALL render a features section with a heading and four feature
cards.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Advantage of using our products"
- **AND** it SHALL show four feature cards with titles such as "Grow Your Business" and "Build Products"

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading and quote
cards.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Our Customers Feedback"
- **AND** it SHALL show at least one quote with an author name and role

### Requirement: About and news section

The system SHALL render an about section with an "About Us" heading and news
cards.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "About Us"
- **AND** it SHALL show at least one news card with a title

### Requirement: Contact section

The system SHALL render a contact section with a message form and contact
info cards.

#### Scenario: Contact form

- **GIVEN** the page is rendered
- **WHEN** the user fills the contact form and presses "Send Message"
- **THEN** the form SHALL submit without navigating
- **AND** the contact info SHALL show visit, call, and email details

### Requirement: Auth modal

The system SHALL render a sign-in/sign-up modal accessible from the navbar.

#### Scenario: Sign-in form

- **GIVEN** the page is rendered
- **WHEN** the user opens the sign-in modal
- **THEN** it SHALL show a "Welcome Back" form with email and password fields, Continue with Google / GitHub buttons, and a submit button that does not navigate

#### Scenario: Sign-up form

- **GIVEN** the sign-in modal is open
- **WHEN** the user switches to the sign-up tab
- **THEN** it SHALL show a "Create Account" form with name, email, password, and confirm-password fields

### Requirement: Footer

The system SHALL render a footer with link columns, social links, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns (Projects, Services, Contact) and a copyright line
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Launch app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Launch — App Landing Template"
