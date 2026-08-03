# Template: Doglife (Dog Care Website)

## Purpose

Doglife is a multi-section dog-care website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Doglife" design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a warm burgundy-and-white dog-care landing page: hero
with "We Love Dogs" headline, welcome/about block, "Happy Pets" and "Modern
Equipment" highlight columns, a vet intro ("Meet Jean Smith Our Dog
Veterenarian"), a pricing table, an FAQ accordion, customer testimonials, a
blog list, a six-item services grid, and a contact form + info section on a
burgundy footer. Doglife follows the same structure and adds the repo's
standard dark-mode toggle and accessible patterns. All imagery is recreated
with seeded placeholder images (no assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Doglife" — free dog-care website template
  (source: https://colorlib.com/wp/template/doglife/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/doglife/`
  (HTTP 200) + `css/style.css` (HTTP 200).
- **Structure (1:1, section order):**
  1. Navbar (`site-navbar`, sticky) — site name "DogLife." + links: Home,
     About, Doctor, Pricing, Blog, Services, Contact.
  2. Hero (`site-blocks-cover bg-light`) — h1 "We Love Dogs", supporting
     lorem copy, burgundy "Get In Touch" button, dog image.
  3. Welcome — h2 "Welcome To Our Website", copy + image ("Read More"
     button).
  4. Highlights (`bg-light trainers`) — h2 "Happy Pets" and h2 "Modern
     Equipment" columns, each with a green-check feature list (`ul-check
success`, `#71bc42`) and an image; then h2 "Meet Jean Smith Our Dog
     Veterenarian" with a portrait + copy.
  5. Pricing Table — h2 "Pricing Table"; three plans Basic ($50/year),
     Premium ($100/year), Professional ($200/year), each with a feature list
     and a "Buy Now" button (secondary on Basic, primary on Premium/
     Professional).
  6. Frequently Ask Questions — h2 + accordion of four question items.
  7. Happy Customers (`bg-light`) — testimonial cards: Ricky Fisher, Ken
     Davis, Mellisa Griffin, Robert Steward (photo, name, quote).
  8. Blog — h2 "Dogger Blog" (recreated as "Doglife Blog"), four entries
     (image, meta, title, excerpt, "Read More").
  9. Our Services — h2 + six icon blocks (`icon-paw`): Dog Checkup, Dog
     Dermatology, For Strong Teeth, Dog First Aid, Dog Dryer, Expert
     Veterinarian.
  10. Contact — h2 "Contact Form" (First Name, Last Name, Email, Subject,
      Message fields) + h2 "Contact Us" (Address: Melbourne St, South
      Birbane 4101 Austraila; Phone: +(000) 123 4567 89; Email:
      info@yourdomain.com).
  11. Footer (`site-footer`, burgundy background) — About Us, Quick Links,
      Follow Us (social links), Subscribe Newsletter (email input + button),
      bottom copyright bar.
- **Design tokens extracted from the stylesheet (`css/style.css`):**
  - Brand color: **#9c2c2c** (burgundy) — `btn-primary`, icons, footer
    background; `btn-primary` hover: **#000** (black).
  - Feature-check accent: **#71bc42** (green, `ul-check.success`); primary
    lists use **#9c2c2c** checks.
  - Text/background: **#212529**/**#343a40** (headings), **#999999**/
    **#b3b3b3** (muted), **#f8f9fa** (`bg-light` sections), white sections.
  - Fonts: **"Vollkorn"** (serif display headings) + **"Open Sans"** (body)
    via Google Fonts.
  - Buttons: filled rounded `btn-primary`/`btn-secondary` (Bootstrap radius).
- **Recreation decisions:** the repo-standard Navbar (with dark-mode toggle)
  wraps the header; sections recreated with Tailwind tokens
  (`--color-brand` = `#9c2c2c`, burgundy scale in `@theme`); placeholder
  images via `https://picsum.photos/seed/doglife-<n>/<w>/<h>`; icons from
  lucide-react (paw icon for service blocks); social icons inline SVG; no
  assets copied.

Doglife lives in `apps/doglife` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a navigation bar with the site name "Doglife", links
to the main sections (Home, About, Doctor, Pricing, Blog, Services, Contact),
and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Doglife page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Doglife" and links to the main sections
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a hero section with the headline "We Love Dogs",
supporting copy, and a primary "Get In Touch" CTA button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL contain a level-1 heading matching "We Love Dogs"
- **AND** it SHALL show a supporting paragraph and a "Get In Touch" primary button

### Requirement: Welcome section

The system SHALL render a welcome section titled "Welcome To Our Website"
with an image, descriptive copy, and a "Read More" button.

#### Scenario: Welcome content

- **GIVEN** the page is rendered
- **WHEN** the welcome section is displayed
- **THEN** it SHALL show the heading "Welcome To Our Website"
- **AND** it SHALL show an image with an accessible label, copy, and a "Read More" button

### Requirement: Highlights section

The system SHALL render a highlights section with the columns "Happy Pets"
and "Modern Equipment", each with a feature checklist and an image, followed
by a vet intro block "Meet Jean Smith Our Dog Veterenarian".

#### Scenario: Highlight columns

- **GIVEN** the page is rendered
- **WHEN** the highlights section is displayed
- **THEN** it SHALL show the headings "Happy Pets" and "Modern Equipment"
- **AND** each column SHALL show a feature checklist and an image

#### Scenario: Vet intro

- **GIVEN** the page is rendered
- **WHEN** the highlights section is displayed
- **THEN** it SHALL show the heading "Meet Jean Smith Our Dog Veterenarian"
- **AND** it SHALL show a portrait image and descriptive copy

### Requirement: Pricing section

The system SHALL render a "Pricing Table" section with three plans: Basic,
Premium, and Professional, each with a price, feature list, and a "Buy Now"
button.

#### Scenario: Pricing plans

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Pricing Table"
- **AND** it SHALL show the Basic, Premium, and Professional plans with their prices
- **AND** each plan SHALL show a feature list and a "Buy Now" button

### Requirement: FAQ section

The system SHALL render a "Frequently Ask Questions" section with at least
three expandable question items.

#### Scenario: FAQ items

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL show the heading "Frequently Ask Questions"
- **AND** it SHALL show at least three question items with answers

### Requirement: Testimonials section

The system SHALL render a "Happy Customers" section with at least two
testimonial cards (photo, name, quote).

#### Scenario: Testimonial cards

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the heading "Happy Customers"
- **AND** it SHALL show testimonial cards with the names Ricky Fisher, Ken
  Davis, Mellisa Griffin, and Robert Steward

### Requirement: Blog section

The system SHALL render a "Doglife Blog" section with at least four blog
entries, each with an image, meta text, title, excerpt, and a "Read More"
button.

#### Scenario: Blog entries

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Doglife Blog"
- **AND** it SHALL show at least four blog entries with title, excerpt, and a "Read More" button

### Requirement: Services section

The system SHALL render an "Our Services" section with six service blocks:
Dog Checkup, Dog Dermatology, For Strong Teeth, Dog First Aid, Dog Dryer, and
Expert Veterinarian.

#### Scenario: Service blocks

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Our Services"
- **AND** it SHALL show the six service blocks, each with an icon and a title

### Requirement: Contact section

The system SHALL render a contact section with a "Contact Form" (First Name,
Last Name, Email, Subject, Message fields with a submit button) and a
"Contact Us" block with address, phone, and email details.

#### Scenario: Contact form

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show the heading "Contact Form"
- **AND** it SHALL show First Name, Last Name, Email, Subject, and Message fields with a submit button

#### Scenario: Contact details

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show the heading "Contact Us"
- **AND** it SHALL show address, phone, and email details

### Requirement: Footer

The system SHALL render a footer with the site name, an "About Us" blurb,
"Quick Links" and "Follow Us" columns with social links, and a "Subscribe
Newsletter" form.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Doglife" and an about blurb
- **AND** it SHALL show Quick Links, social links, and a Subscribe Newsletter form

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Doglife app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Doglife — Dog Care Website Template"
