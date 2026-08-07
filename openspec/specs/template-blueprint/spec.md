# Template: Blueprint (App Landing Page)

## Purpose

Blueprint is a single-page app/template-builder landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Unapp" website template design
(https://colorlib.com/wp/template/unapp/), built under a **new, original
name** with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Unapp" — app / template-builder landing page
  (source: https://colorlib.com/wp/template/unapp/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/unapp/
  (HTTP 200, full rendered DOM + `css/style.css` (38KB) extracted).
  The TEMPLATES.md screenshot (`unapp-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure,
  the stylesheet tokens, and the screenshot.
- **Section order (1:1):** Navbar (Home, Works, Services, Blog, About,
  Shop, Contact) → Hero ("Take on your biggest projects and goals" +
  "Get premium") → Feature tiles (Automatic Backup Data, Page Builder,
  Create your own template) → Split ("Collaborate with your design team
  in a new way") → Steps (Real template creation / Finish template
  creation) → Stats (1500 customers satisfied / 500 preset options /
  1200 response time) → Blog ("News from our Blog" + 3 posts) → Trust
  ("Already trusted by over 10,000 users" + subscribe form) → Pricing
  (Starter $9, Basic $27, Pro $74, Unlimited $140) → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **blue `#499bea`** with **indigo `#798eea`** (hero is a
    -45deg gradient `#499bea -> #798eea` at 0.95 opacity over a cover
    photo) and **green `#4aca85`** accents (primary buttons, hover
    `#5ed092`, pricing price color).
  - Dark text `#303133`; muted gray `#7f7f7f`.
  - Fonts: **"Nunito"** (body) + **"Poppins"** (headings) (Google Fonts).
  - Blue rounded buttons with white text; green pill CTA in the hero.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/blueprint-<n>/<w>/<h>`); icons → lucide-react;
  brand icons → inline SVG; no assets copied.

Blueprint lives in `apps/blueprint` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"Blueprint", anchor links to the page's sections, and a dark-mode toggle
button.

#### Scenario: Navbar content

- **GIVEN** the Blueprint page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Blueprint" and links to Home, Works, Services, Blog, Pricing, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width gradient hero with a headline, a
sub-headline, a "Get premium" button, and an app dashboard preview image.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Take on your biggest projects and goals"
- **AND** it SHALL show the sub-headline "with Blueprint's high quality features"
- **AND** it SHALL show a "Get premium" button
- **AND** it SHALL show a dashboard preview image with an accessible name

### Requirement: Feature tiles

The system SHALL render three feature tiles: "Automatic Backup Data",
"Page Builder", and "Create your own template", each with an icon and a
blurb.

#### Scenario: Feature tiles content

- **GIVEN** the page is rendered
- **WHEN** the feature tiles are displayed
- **THEN** it SHALL show tiles titled "Automatic Backup Data", "Page Builder", and "Create your own template"
- **AND** each tile SHALL show a blurb

### Requirement: Collaborate split section

The system SHALL render a split section with the heading "Collaborate
with your design team in a new way", a checklist, and a preview image.

#### Scenario: Split content

- **GIVEN** the page is rendered
- **WHEN** the split section is displayed
- **THEN** it SHALL contain the heading "Collaborate with your design team in a new way"
- **AND** it SHALL show at least three checklist items

### Requirement: Steps section

The system SHALL render two alternating rows: "Real template creation"
and "Finish template creation", each with a preview image, three feature
items with icons and blurbs, and a "Start collaborating" call to action.

#### Scenario: Steps content

- **GIVEN** the page is rendered
- **WHEN** the steps section is displayed
- **THEN** it SHALL contain the headings "Real template creation" and "Finish template creation"
- **AND** each row SHALL show three feature items and a "Start collaborating" button

### Requirement: Stats section

The system SHALL render three stats: 1500 customers satisfied, 500
preset options, and 1200 average response time, each with a label.

#### Scenario: Stats content

- **GIVEN** the page is rendered
- **WHEN** the stats section is displayed
- **THEN** it SHALL show the numbers 1500, 500, and 1200
- **AND** it SHALL show the labels "Of customers are satisfied with our professional support", "Amazing preset options to be mixed and combined", and "Average response time on live chat support channel"

### Requirement: Blog section

The system SHALL render a blog section with a heading and at least three
post cards, each with a title, date, and author.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a heading "News from our Blog"
- **AND** it SHALL show at least three post cards with titles, dates, and authors

### Requirement: Trust section

The system SHALL render a trust section with the heading "Already
trusted by over 10,000 users" and a subscribe form with an email input
and a "Subscribe Now" button.

#### Scenario: Trust content

- **GIVEN** the page is rendered
- **WHEN** the trust section is displayed
- **THEN** it SHALL contain the heading "Already trusted by over 10,000 users"
- **AND** it SHALL show an email input and a "Subscribe Now" button

#### Scenario: Subscribe submit

- **GIVEN** the trust section is displayed
- **WHEN** the user submits the subscribe form with an email address
- **THEN** the form SHALL clear the input

### Requirement: Pricing section

The system SHALL render a pricing section with the heading "Pricing" and
four plans: Starter $9, Basic $27, Pro $74, and Unlimited $140, each
with a "Select Plan" button.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain the heading "Pricing"
- **AND** it SHALL show plans named Starter, Basic, Pro, and Unlimited with prices $9, $27, $74, and $140
- **AND** each plan SHALL show a "Select Plan" button

### Requirement: Footer

The system SHALL render a footer with about text, link columns, recent
blog entries, contact info, social links, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand name, an information link column, recent blog entries, and contact info
- **AND** it SHALL show social links (GitHub, X, LinkedIn)
- **AND** it SHALL show a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Blueprint app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Blueprint — App Landing Template"
