# Template: Appson (App Landing Page)

## Purpose

Appson is a single-page app landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Appson"
website template design (see TEMPLATES.md), built under a different name
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Appson" — apps landing HTML template
  (source: https://colorlib.com/wp/template/appson/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/appson/
  (HTTP 200). The wrapper preview page is a product showcase, so the **real
  theme DOM** was fetched from
  `https://preview.colorlib.com/theme/appson/appson/index.html`
  (HTTP 200, 42KB, "Appson || App Landing Html Template") together with
  `assets/css/style.css` (32KB) and `assets/css/typography.css`.
  Re-fetched and confirmed 2026-08-05 during implementation. The
  TEMPLATES.md screenshot (`appson-free-template.jpg`) is the visual
  reference.
- **Section order (1:1):** Navbar (Home, About, Features, Screenshot,
  download, Pricing, Review, Contact) → Hero ("Perfect Landing Page" + "The
  Best Template For Your Mobile App To Showcase And Acquire New Customers
  All" + phone mockup + Download Now) → About ("Work the way you live" +
  blurbs + feature list + mobile screen image) → Features (orange band
  "Best Features": .Unlimited Features / .Cloud Storage / .Modern Design /
  Android Platform / Strategy Solutions / Fully Responsive Design) →
  Screenshots ("Screenshots", 4 phone screens) → Download (orange band
  "Download Appson" + store buttons) → Pricing ("Pricing Plan": Basic
  $50/m, Premium $150/m, Unlimited $250/m, each with 10 User / 50 Email
  Accounts / 100 MB Disk Space / 2 Subdomains / Free Updates / Support 24/7
  - purchase) → Team ("Meet my team", 4 members e.g. John Deo —
    front-end developer) + stats (20K / 5K / 30K / 50) → Testimonial
    ("Testimonial", quote by John Deo — CEO Of iphone) → Blog ("Our Latest
    Blog", 3 posts "Work For Success" + Read More) → Contact ("Contact US",
    form: Your Name / Your Email address / Your Subject / Your Message) →
    Newsletter ("Subscribe to our Newsletter" + Sign Up) → Footer (copyright
  - Colorlib credit).
- **Design tokens extracted from `style.css` / `typography.css`:**
  - Primary brand **orange `#ff6818`** (`.bg-theme` section backgrounds —
    Features and Download bands — plus buttons/accents); shades `#fe5f1b`,
    `#ff6719`, `#ff5700`.
  - Supporting blue accent `#00b0ff`; dark headings `#272727`; muted body
    text `#666666` / `#696969`; light section background `#f3f3f3`, white.
  - Font: **"Montserrat"** (body via `body { font-family: 'Montserrat' }`
    in typography.css), Google Fonts.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/appson-<n>/<w>/<h>`); icons → lucide-react; store
  buttons → ButtonLink with lucide icons; no assets copied.

Appson lives in `apps/appson` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Appson",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Appson page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Appson" and links to Home, About, Features, Screenshot, Pricing, Review, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a hero with a headline, a blurb, a phone mockup,
and a download button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Perfect Landing Page"
- **AND** it SHALL show a blurb mentioning the mobile app template
- **AND** it SHALL show a "Download Now" button

### Requirement: About section

The system SHALL render an about section with a heading, blurbs, a feature
list, and a screen image.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a level-2 heading "Work the way you live"
- **AND** it SHALL list the features "Fully Responsive Design", "Android Platform", and "Strategy Solutions"

### Requirement: Features section

The system SHALL render a features band on the brand background with a
heading and six feature tiles.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Best Features"
- **AND** it SHALL show tiles "Unlimited Features", "Cloud Storage", "Modern Design", "Android Platform", "Strategy Solutions", and "Fully Responsive Design"

### Requirement: Screenshots section

The system SHALL render a screenshots section with a heading and four phone
screens.

#### Scenario: Screenshots content

- **GIVEN** the page is rendered
- **WHEN** the screenshots section is displayed
- **THEN** it SHALL contain a heading "Screenshots"
- **AND** it SHALL show four screen images with accessible labels

### Requirement: Download band

The system SHALL render a download band on the brand background with a
heading and store buttons.

#### Scenario: Download content

- **GIVEN** the page is rendered
- **WHEN** the download band is displayed
- **THEN** it SHALL contain a heading "Download Appson"
- **AND** it SHALL show "App Store" and "Google Play" buttons

### Requirement: Pricing section

The system SHALL render three pricing plans, each with a name, a price, a
feature list, and a purchase button.

#### Scenario: Pricing plans

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Pricing Plan"
- **AND** it SHALL show plans "Basic" ($50/m), "Premium" ($150/m), and "Unlimited" ($250/m), each with a feature list and a "Purchase" button

### Requirement: Team and stats section

The system SHALL render a team section with four members and a stats row.

#### Scenario: Team content

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL contain a heading "Meet my team"
- **AND** it SHALL show four team members with names and roles
- **AND** it SHALL show stats for 20K, 5K, 30K, and 50

### Requirement: Testimonial section

The system SHALL render a testimonial with a quote and an author.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonial section is displayed
- **THEN** it SHALL contain a heading "Testimonial" and a quote
- **AND** it SHALL show the author "John Deo" with the role "CEO Of iphone"

### Requirement: Blog section

The system SHALL render a blog section with a heading and three posts.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a heading "Our Latest Blog"
- **AND** it SHALL show three posts titled "Work For Success" with "Read More" links

### Requirement: Contact section

The system SHALL render a contact section with a heading, a form, and a
newsletter signup.

#### Scenario: Contact content

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL contain a heading "Contact US" with fields for Name, Email address, Subject, and Message
- **AND** it SHALL show a newsletter heading "Subscribe to our Newsletter" with a "Sign Up" button

#### Scenario: Newsletter signup

- **GIVEN** the contact section is displayed
- **WHEN** the user submits the newsletter form with an email
- **THEN** the form SHALL submit and clear the input

### Requirement: Footer

The system SHALL render a footer with a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Appson app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Appson — App Landing Template"
