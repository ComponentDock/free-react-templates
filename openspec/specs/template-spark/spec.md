# Template: Spark (App Landing Page)

## Purpose

Spark is a single-page app landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Appco"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Appco" — app landing page
  (source: https://colorlib.com/wp/template/appco/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/appco/
  (HTTP 200, full rendered DOM + `assets/css/style.css` (137KB) extracted).
  The TEMPLATES.md screenshot (`appco-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and CSS
  tokens.
- **Section order (1:1):** Navbar (Home, Feature, Services, Pricing, Blog,
  Contact) → Hero (App Landing Page kicker, "Get things done with Appco" +
  Download) → Features (Some of the best features Of Our App!: Easy to
  Costomize, Extreme Security, Customer Support, Creative Design) → Services
  (How Can We HelpYour with Appco!: Easily Manage, Get Payments Easily,
  Quick Messaging) → Video demo (See Appco in Action + screenshots) →
  Pricing (Choose Your Very Best Pricing Plan.: Starter $9, Professional
  $29, Enterprise $99) → Testimonials (What Our Customers Have to Say: 4
  quotes) → FAQ (Frequently Asked Questions: 6 Q&As) → CTA (Our App
  Available For Any Device Download now) → Integrations (Say Hello To The
  Collaboration Hub + 8 tools) → Metrics (50K+, 250K+, 4.9, 120+) → Footer
  (Quick Links, Support, Newsletter, social, copyright).
- **Design tokens extracted from `style.css`:**
  - Primary **purple `#8f1bdc`** — buttons, headings, accents; accent pink
    `#f9218d`.
  - Fonts: **"Nunito"** + **"Poppins"** (Google Fonts).
  - Light section backgrounds `#f9f9ff`, `#f0e9ff`; dark text `#222222`;
    rounded purple buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/spark-<n>/<w>/<h>`); icons → lucide-react; FAQ uses
  accessible disclosure; forms prevent default (no backend); no assets
  copied.

Spark lives in `apps/spark` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Spark",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Spark page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Spark" and links to Home, Features, Services, Pricing, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a kicker, a headline, a blurb,
and a "Download" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a kicker "App Landing Page" and a level-1 heading "Get things done with Spark"
- **AND** it SHALL show a supporting blurb and a "Download" button

### Requirement: Features section

The system SHALL render a features section with a heading and four feature
cards, each with an icon, a title, and a description.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Some of the best features Of Our App!"
- **AND** it SHALL show features titled Easy to Costomize, Extreme Security, Customer Support, and Creative Design
- **AND** each feature SHALL have an icon and a description

### Requirement: Services section

The system SHALL render a services section with a heading and three services,
each with an icon, a title, and a description.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "How Can We HelpYour with Spark!"
- **AND** it SHALL show services titled Easily Manage, Get Payments Easily, and Quick Messaging

### Requirement: Video demo section

The system SHALL render a video demo section with a heading, a blurb, and a
video placeholder with playback badges.

#### Scenario: Video demo content

- **GIVEN** the page is rendered
- **WHEN** the video demo section is displayed
- **THEN** it SHALL contain a heading "See Spark in Action"
- **AND** it SHALL show a video placeholder and at least one playback badge

### Requirement: Pricing section

The system SHALL render a pricing section with a heading and three plans
(Starter, Professional, Enterprise), each with a price, a feature list, and a
"Get Started" button.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Choose Your Very Best Pricing Plan."
- **AND** it SHALL show three plans: Starter ($9/month), Professional ($29/month), and Enterprise ($99/month)
- **AND** each plan SHALL show a feature list and a "Get Started" button

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading and at least two
customer quotes with names.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Our Customers Have to Say"
- **AND** it SHALL show at least two quotes, each with a customer name

### Requirement: FAQ section

The system SHALL render a "Frequently Asked Questions" section with at least
four questions, each expandable to reveal an answer.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show at least four questions

#### Scenario: FAQ answer reveal

- **GIVEN** an FAQ question is displayed
- **WHEN** the user activates the question
- **THEN** its answer SHALL become visible

### Requirement: Integrations section

The system SHALL render an integrations section with a heading, a subheading,
a "Contact Us" button, and at least six tool names.

#### Scenario: Integrations content

- **GIVEN** the page is rendered
- **WHEN** the integrations section is displayed
- **THEN** it SHALL contain a heading "Integrates With Your Favorite Tools"
- **AND** it SHALL show at least six tools, including Slack, GitHub, and Stripe

### Requirement: Metrics section

The system SHALL render a metrics strip with at least four stats.

#### Scenario: Metrics content

- **GIVEN** the page is rendered
- **WHEN** the metrics section is displayed
- **THEN** it SHALL show at least four stats with labels

### Requirement: Footer

The system SHALL render a footer with the site name, quick links, support
links, a newsletter widget, social links, and a copyright line; submitting the
newsletter SHALL NOT navigate away.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Spark" and quick links
- **AND** it SHALL show support links and a newsletter widget with an email input
- **AND** it SHALL show social links (GitHub, X, LinkedIn) and a copyright line

#### Scenario: Newsletter submit

- **GIVEN** the newsletter form is displayed
- **WHEN** the user submits the form
- **THEN** the form SHALL NOT navigate away (no backend)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Spark app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Spark — App Landing Template"
