# Template: Appco (App Landing Page)

## Purpose

Appco is a multi-section app landing page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Appco"
design (see TEMPLATES.md), built under a different name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a purple app-promo landing page: hero with a "Get
things done with Appco" headline, four feature cards, three service blocks,
a video/demo strip, a three-tier pricing table, testimonials, an FAQ, a
download CTA, an integrations strip, metrics, and a multi-column footer.
Appco follows the same structure and adds the repo's standard dark-mode
toggle and accessible patterns. All imagery is recreated with seeded
placeholder images (no assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Appco" — free app landing page template
  (source: https://colorlib.com/wp/template/appco/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/appco/`
  (HTTP 200) + `assets/css/style.css` (HTTP 200).
- **Structure (1:1, section order):**
  1. Header — nav: Home, Feature, Services, Pricing, Pages, Blog, Contact +
     "Download" button.
  2. Hero — h1 "Get things done with Appco", supporting copy, "Download"
     buttons, app/phone imagery (slider).
  3. Features (`best-features-area`) — h2 "Some of the best features Of Our
     App!"; four cards: Easy to Costomize, Extreme Security, Customer
     Support, Creative Design.
  4. Services (`service-area sky-blue`) — h2 "How Can We Help Your with
     Appco!"; three blocks: Easily Manage, Get Payments Easily, Quick
     Messaging.
  5. Video demo (`video-demo-area`) — "See Appco in Action" + "Applic Apps
     Screenshot" gallery.
  6. Pricing (`best-pricing`) — h2 "Choose Your Very Best Pricing Plan.";
     three plans $9/month, $29/month, $99/month with "Get Started".
  7. Testimonials — h2 "What Our Customers Have to Say"; Sarah Johnson,
     Michael Chen, Emily Rodriguez, David Kim.
  8. FAQ (`faq-area`) — h2 "Frequently Asked Questions"; six questions (How
     do I get started with Appco?, Is there a free trial available?, Can I
     switch between plans?, Is my data secure?, What payment methods do you
     accept?, How can I contact support?).
  9. Download CTA — h2 "Our App Available For Any Device Download now".
  10. Integrations (`integrations-area`) — h2 "Integrates With Your Favorite
      Tools"; tool logo grid.
  11. Metrics (`metrics-area`) — h2 "Say Hello To The Collaboration Hub.";
      stats 50K+, 250K+, 4.9, 120+.
  12. Footer — about blurb, Quick Links / Support / Newsletter columns,
      bottom bar.
- **Design tokens extracted from the stylesheet (`assets/css/style.css`):**
  - Brand color: **#8f1bdc** (purple — primary buttons/accents) with pink
    accent **#f9218d** (secondary highlights).
  - Text/background: **#222222**/**#415094** (headings), **#999999**/
    **#828bb2** (muted), **#f9f9ff** / **#f0e9ff** (light sections),
    `sky-blue` service band, white sections.
  - Fonts: **"Poppins"** + **"Nunito"** via Google Fonts.
  - Buttons: filled purple `btn` (rounded, uppercase).
- **Recreation decisions:** the repo-standard Navbar (with dark-mode toggle)
  wraps the header; sections recreated with Tailwind tokens
  (`--color-brand` = `#8f1bdc`, purple scale + `#f9218d` accent in
  `@theme`); placeholder images via `https://picsum.photos/seed/appco-<n>/<w>/<h>`;
  icons from lucide-react; FAQ accordion as stateful component; social icons
  inline SVG; no assets copied.

Appco lives in `apps/appco` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a navigation bar with the site name "Appco", links
to the main sections, a "Download" button, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Appco page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Appco" and links to the main sections
- **AND** the navbar SHALL show a "Download" button and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a hero section with the headline "Get things done
with Appco", supporting copy, and download CTA buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL contain a level-1 heading matching "Get things done with Appco"
- **AND** it SHALL show a supporting paragraph and download CTA buttons

### Requirement: Features section

The system SHALL render a features section titled "Some of the best features
Of Our App!" with four cards: Easy to Costomize, Extreme Security, Customer
Support, and Creative Design.

#### Scenario: Feature cards

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show the heading "Some of the best features Of Our App!"
- **AND** it SHALL show the four feature cards, each with an icon, title, and copy

### Requirement: Services section

The system SHALL render a services section titled "How Can We Help Your with
Appco!" with three blocks: Easily Manage, Get Payments Easily, and Quick
Messaging.

#### Scenario: Service blocks

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "How Can We Help Your with Appco!"
- **AND** it SHALL show the three service blocks with titles

### Requirement: Video/demo section

The system SHALL render a video demo section titled "See Appco in Action"
with a screenshot gallery.

#### Scenario: Demo content

- **GIVEN** the page is rendered
- **WHEN** the video demo section is displayed
- **THEN** it SHALL show the heading "See Appco in Action"
- **AND** it SHALL show a play button and app screenshots

### Requirement: Pricing section

The system SHALL render a pricing section titled "Choose Your Very Best
Pricing Plan." with three plans at $9/month, $29/month, and $99/month.

#### Scenario: Pricing plans

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Choose Your Very Best Pricing Plan."
- **AND** it SHALL show the three plans with their prices and "Get Started" buttons

### Requirement: Testimonials section

The system SHALL render a "What Our Customers Have to Say" section with at
least two testimonial cards.

#### Scenario: Testimonial cards

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the heading "What Our Customers Have to Say"
- **AND** it SHALL show at least two testimonial cards with quotes and names

### Requirement: FAQ section

The system SHALL render a "Frequently Asked Questions" section with at least
three expandable question items.

#### Scenario: FAQ items

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL show the heading "Frequently Asked Questions"
- **AND** it SHALL show at least three question items with answers

### Requirement: Download CTA section

The system SHALL render a download CTA section with the heading "Our App
Available For Any Device Download now" and a download button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the download CTA section is displayed
- **THEN** it SHALL show the heading "Our App Available For Any Device Download now"
- **AND** it SHALL show a download button

### Requirement: Metrics section

The system SHALL render a metrics section titled "Say Hello To The
Collaboration Hub." with at least four stats.

#### Scenario: Metric stats

- **GIVEN** the page is rendered
- **WHEN** the metrics section is displayed
- **THEN** it SHALL show the heading "Say Hello To The Collaboration Hub."
- **AND** it SHALL show at least four stat counters

### Requirement: Footer

The system SHALL render a footer with an about blurb, link columns (Quick
Links, Support), a Newsletter signup, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Appco" and an about blurb
- **AND** it SHALL show link columns, a newsletter input, and social links

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Appco app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Appco — App Landing Page Template"
