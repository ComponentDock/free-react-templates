# Template: Barber (Barber Shop Landing)

## Purpose

Barber is a single-page barber-shop landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Barber"
design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a bold landing page with a pink-to-purple gradient brand: a
full-screen banner with a headline and CTA, a services grid, a photo gallery,
a features grid, an about strip with video, a team row, three pricing plans, a
contact form, and a footer with newsletter. Barber recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Barber" — barber shop website template
  (source: https://colorlib.com/wp/template/barber/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/barber/`
  (HTTP 200, 32.3KB) + stylesheet `css/main.css` (34.9KB). The rendered DOM
  is the reference below; the TEMPLATES.md screenshot
  (`barber-free-barber-website-template.jpg`) confirms the visual design
  (gradient accents, light sections).
- **Section order (1:1):**
  1. Header (`default-header`, gradient background): logo + nav (Home,
     Service, Team, Price, Contact, Pages).
  2. Banner (`banner-area`, gradient background): left "HairStyle is a Must
     try Fashion for all Occasion" headline + blurb + "View More Changes"
     button; right hero image.
  3. Services (`service-area`): "What We Can Do for You" + 4 icon service
     rows: Beard Trimming · Quality Gel Shave · Effective Body Massage ·
     Stylish Hair Cutting.
  4. Gallery (`gallery-area`): full-width photo strip with hover captions
     ("Upper Cutting").
  5. Features (`feature-area`): "Some Features that Made us Unique" + 6
     icon feature cards: Expert Technicians · Professional Service · Great
     Support · Technical Skills · Highly Recomended · Positive Reviews.
  6. About (`about-area`): "We Believe that Interior beautifies the Total
     Architecture" + paragraphs + "See Details" button; right image with
     play button.
  7. Team (`team-area`): "Experienced Mentor Team" + 4 member cards (photo,
     name, role, social icons): Ethel Davis · Rodney Cooper · Dora Walker ·
     Lena Keller.
  8. Pricing (`price-area`): "Choose the Perfect Plan for you" + 3 plans
     (Standard £199 · Business £399 · Ultimate £499) each with 5 features +
     "Purchase Plan" button.
  9. Contact (`contact-area`): "If you need, Just drop us a line" + 4
     contact info columns (Visit Our Office · Let's call us · Let's Email Us
     · Customer Support) + form (name, email, subject, message) + "Send
     Message" button.
  10. Footer (`footer-area`): About Us blurb + Newsletter form + Follow Us
      social icons + copyright bar.
- **Design tokens extracted from `css/main.css`:**
  - Brand color: pink→purple gradient **#f61daf → #691cff** — header,
    banner, primary buttons, hover accents.
  - Text: **#222222** headings, **#777777** body on white/light
    (`#f9f9ff`) backgrounds.
  - Font: **"Poppins"** (Google Fonts) — body and headings.
  - Buttons: pill `primary-btn` (border-radius 25px) with gradient
    background, white text, arrow icon.
  - Section rhythm: light gray (`#f9f9ff`) sections with `section-gap`
    padding; gradient banner and footer.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; banner uses a seeded picsum photo and the
  headline with a gradient CTA; services/features use lucide icons; gallery
  is a photo strip; team cards with initials avatars; pricing cards with
  gradient hover; contact form client-side with zod; newsletter input in the
  footer. All images picsum-seeded, icons lucide-react (no assets copied).

Barber lives in `apps/barber` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Barber", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Barber page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Barber" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Banner

The system SHALL render a full-width banner with a headline, a blurb, and a
call-to-action button.

#### Scenario: Banner content

- **GIVEN** the page is rendered
- **WHEN** the banner is displayed
- **THEN** it SHALL show a headline (e.g. "HairStyle is a Must try Fashion")
- **AND** it SHALL show a "View More Changes" button

### Requirement: Services

The system SHALL render a "What We Can Do for You" section with four service
items.

#### Scenario: Service items

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "What We Can Do for You"
- **AND** it SHALL render four service items (Beard Trimming, Quality Gel Shave, Effective Body Massage, Stylish Hair Cutting)

### Requirement: Features

The system SHALL render a "Some Features that Made us Unique" section with six
feature cards.

#### Scenario: Feature cards

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show the heading "Some Features that Made us Unique"
- **AND** it SHALL render six feature cards (Expert Technicians, Professional Service, Great Support, Technical Skills, Highly Recomended, Positive Reviews)

### Requirement: Team

The system SHALL render an "Experienced Mentor Team" section with four member
cards.

#### Scenario: Team cards

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the heading "Experienced Mentor Team"
- **AND** it SHALL render four team cards with names and roles

### Requirement: Pricing

The system SHALL render a "Choose the Perfect Plan for you" section with three
pricing plans.

#### Scenario: Pricing plans

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Choose the Perfect Plan for you"
- **AND** it SHALL render three plans (Standard, Business, Ultimate) with prices and at least three features each
- **AND** each plan SHALL show a "Purchase Plan" button

### Requirement: Contact form

The system SHALL render a contact section with name, email, subject, and
message fields plus a submit button.

#### Scenario: Form fields

- **GIVEN** the page is rendered
- **WHEN** the contact form is displayed
- **THEN** the form SHALL contain labeled inputs for name, email, and subject
- **AND** the form SHALL contain a message textarea and a "Send Message" button
- **AND** submitting the form SHALL NOT reload the page (client-side only)

### Requirement: Footer

The system SHALL render a footer with the site name, a short tagline, a
newsletter field, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Barber" and a newsletter input
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Barber app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Barber — Barber Shop Template"
