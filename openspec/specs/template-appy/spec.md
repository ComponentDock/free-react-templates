# Template: Appy (App Landing Page)

## Purpose

Appy is a single-page app landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Appy"
website template design (see TEMPLATES.md), built under a different name
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Appy" — modern mobile app landing page for iOS &
  Android (source: https://colorlib.com/wp/template/appy/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/appy/
  (HTTP 200, full rendered DOM + `style.css` (33KB) extracted).
  The TEMPLATES.md screenshot (`appy-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, About, Features, Gallery, Pricing,
  FAQ, Blog, Contacts + Sign Up) → Hero ("Start your amazing stuff through
  appy." + Download App) → About ("About Appy" + Our Progress) → Split
  ("Great Application Ever" + Learn More) → Video Features ("Great
  Application Ever" + Learn More) → Features ("Powerful Features As Always"
  - 6 tiles: Fast & Powerful, Easily Editable, Cloud Storage, Easy
    Notifications, Fully Responsive, Editable Layout) → Testimonials ("Our
    Clients Love Us" + Ashekur Rahman, Art Dirrector) → Screenshots
    ("Screenshot 01" + Learn More) → Our Features ("Our Approach to Design is
    Pretty Simple and Clear" + Easy Notifications, Fully Responsive, Editable
    Layout) → Download ("Download The App" + Apple Store / Play Store) →
    Pricing ("Our Awesome Pricing Plan" + Free $0 / Medium $49 / Business $99
  - Purchase) → FAQ ("Frequently Asked Questions" + 3 Q&A) → Subscribe →
    Footer (About, Solutions, Why Appy, Resources, Company + copyright).
- **Design tokens extracted from `style.css`:**
  - Primary **blue `#5e88fc`** (buttons, accents) with supporting
    `#4a7aff`, `#768ede`, `#8790af`.
  - Light section backgrounds `#f5f6ff`, `#f2f3fc`; dark text `#434345`.
  - Font: **"Open Sans"** (Google Fonts) + Linearicons for icons.
  - Blue rounded buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/appy-<n>/<w>/<h>`); icons → lucide-react; the video
  section → styled play button; no assets copied.

Appy lives in `apps/appy` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Appy",
anchor links to the page's sections, a "Sign Up" button, and a dark-mode
toggle button.

#### Scenario: Navbar content

- **GIVEN** the Appy page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Appy" and links to Home, About, Features, Pricing, FAQ, and Contact
- **AND** the navbar SHALL show a "Sign Up" button and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, a phone
mockup illustration, and a download button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Start your amazing stuff through appy."
- **AND** it SHALL show a supporting blurb and a "Download App" button

### Requirement: About section

The system SHALL render an about section with the heading "About Appy", a
blurb, and progress indicators.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "About Appy" and a blurb
- **AND** it SHALL show progress indicators labeled "Our Progress"

### Requirement: Split sections

The system SHALL render two split sections with the heading "Great
Application Ever", each with a blurb and a "Learn More" button.

#### Scenario: Split content

- **GIVEN** the page is rendered
- **WHEN** a split section is displayed
- **THEN** it SHALL contain a heading "Great Application Ever"
- **AND** it SHALL show a blurb and a "Learn More" button

### Requirement: Features section

The system SHALL render a features section with a heading and six feature
tiles, each with an icon, a title, and a blurb.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Powerful Features As Always"
- **AND** it SHALL show tiles titled "Fast & Powerful", "Easily Editable", "Cloud Storage", "Easy Notifications", "Fully Responsive", and "Editable Layout"

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading, a quote, and
a reviewer.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Our Clients Love Us"
- **AND** it SHALL show a quote from "Ashekur Rahman", Art Director

### Requirement: Screenshots section

The system SHALL render a screenshots section with a heading and a row of
screenshot placeholder images.

#### Scenario: Screenshots content

- **GIVEN** the page is rendered
- **WHEN** the screenshots section is displayed
- **THEN** it SHALL contain a heading "Screenshot 01"
- **AND** it SHALL show at least three screenshot placeholder images and a "Learn More" button

### Requirement: Download section

The system SHALL render a download section with a heading, a blurb, and two
store buttons.

#### Scenario: Download content

- **GIVEN** the page is rendered
- **WHEN** the download section is displayed
- **THEN** it SHALL contain a heading "Download The App" and a blurb
- **AND** it SHALL show "Apple Store" and "Play Store" buttons

### Requirement: Pricing section

The system SHALL render a pricing section with three plans, each with a
name, a price, a feature list, and a purchase button.

#### Scenario: Pricing plans

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Our Awesome Pricing Plan"
- **AND** it SHALL show plans "Free" ($0), "Medium" ($49), and "Business" ($99), each with a feature list and a "Purchase" button

### Requirement: FAQ section

The system SHALL render an FAQ section with a heading and at least three
questions.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show at least three expandable questions with answers

### Requirement: Footer

The system SHALL render a footer with link columns, social links, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns for about, solutions, and company
- **AND** it SHALL show social links (GitHub, X, LinkedIn) and a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Appy app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Appy — App Landing Template"
