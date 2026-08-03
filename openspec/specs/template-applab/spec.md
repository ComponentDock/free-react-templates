# Template: Applab (App & SaaS Landing Page)

## Purpose

Applab is a multi-section app/SaaS landing page template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Applab" design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is an orange app-promo landing page: hero with a
"Promote your app with applab" headline, feature blocks, a three-step "how
it works", a features strip, testimonials, a three-tier pricing table, a
productivity CTA, and a multi-column footer. Applab follows the same
structure and adds the repo's standard dark-mode toggle and accessible
patterns. All imagery is recreated with seeded placeholder images (no assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Applab" — free app/SaaS landing page template
  (source: https://colorlib.com/wp/template/applab/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/applab/`
  (HTTP 200) + `css/style.css` (HTTP 200).
- **Structure (1:1, section order):**
  1. Header — nav: home, Features, Pricing, blog, Contact + "Download"
     button.
  2. Hero (slider) — h3 "Promote your app with applab" / "Save your time to
     using applab", copy, "Get Start Now" + "Download Now" buttons.
  3. Feature blocks — "Manage team in One Place", "All-powerful Pointing has
     no control", "Establish a solid online presence" (image + copy blocks).
  4. How it works — three steps: Sign Up for free, Make your profile, Enjoy
     the app.
  5. Features — "Features that give you real feel" + "Easy setup and
     management".
  6. Testimonials — "Review from our regular users" (four quote slides).
  7. Pricing — "Unlock full Power"; plans: Basic, Team, Business +
     "Get Now".
  8. CTA — "Get start from now and increase productivity" + download
     buttons.
  9. Footer — about blurb, Services (Team management, Collaboration, Todo,
     Events) / Useful Links / Downloads columns, bottom bar.
- **Design tokens extracted from the stylesheet (`css/style.css`):**
  - Brand color: **#ff5e13** (orange — primary buttons/accents) with green
    **#37ef8d** and blue **#0181f5**/**#5DB2FF** accents.
  - Text/background: **#415094** (headings), **#999999** (muted),
    **#f9f9ff** / **#f0e9ff** (light sections), white sections.
  - Fonts: **"Poppins"** (headings) + Roboto (body) via Google Fonts.
  - Buttons: filled orange `btn` (rounded, uppercase).
- **Recreation decisions:** the repo-standard Navbar (with dark-mode toggle)
  wraps the header; sections recreated with Tailwind tokens
  (`--color-brand` = `#ff5e13`, orange scale + green/blue accents in
  `@theme`); placeholder images via
  `https://picsum.photos/seed/applab-<n>/<w>/<h>`; icons from lucide-react;
  three-step "how it works" as numbered cards; social icons inline SVG; no
  assets copied.

Applab lives in `apps/applab` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a navigation bar with the site name "Applab", links
to the main sections, a "Download" button, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Applab page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Applab" and links to the main sections
- **AND** the navbar SHALL show a "Download" button and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a hero section with the headline "Promote your app
with Applab", supporting copy, and CTA buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL contain a heading matching "Promote your app with Applab"
- **AND** it SHALL show a supporting paragraph and CTA buttons

### Requirement: Feature blocks section

The system SHALL render feature blocks with at least two of: "Manage team in
One Place", "All-powerful Pointing has no control", "Establish a solid
online presence".

#### Scenario: Feature blocks

- **GIVEN** the page is rendered
- **WHEN** the feature blocks section is displayed
- **THEN** it SHALL show at least two feature blocks with headings and copy

### Requirement: How-it-works section

The system SHALL render a three-step section: Sign Up for free, Make your
profile, and Enjoy the app.

#### Scenario: Steps

- **GIVEN** the page is rendered
- **WHEN** the how-it-works section is displayed
- **THEN** it SHALL show the three steps in order

### Requirement: Features strip

The system SHALL render a features strip with "Features that give you real
feel" and "Easy setup and management".

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features strip is displayed
- **THEN** it SHALL show the feature headings with supporting copy

### Requirement: Testimonials section

The system SHALL render a "Review from our regular users" section with at
least two testimonial cards.

#### Scenario: Testimonial cards

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the heading "Review from our regular users"
- **AND** it SHALL show at least two testimonial cards with quotes and names

### Requirement: Pricing section

The system SHALL render a pricing section titled "Unlock full Power" with
three plans: Basic, Team, and Business.

#### Scenario: Pricing plans

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Unlock full Power"
- **AND** it SHALL show the Basic, Team, and Business plans with prices and "Get Now" buttons

### Requirement: CTA section

The system SHALL render a CTA section with the heading "Get start from now
and increase productivity" and download buttons.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL show the heading "Get start from now and increase productivity"
- **AND** it SHALL show download buttons

### Requirement: Footer

The system SHALL render a footer with an about blurb, link columns
(Services, Useful Links, Downloads), and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Applab" and an about blurb
- **AND** it SHALL show link columns and social links

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Applab app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Applab — App & SaaS Landing Page Template"
