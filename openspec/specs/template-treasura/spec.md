# Template: Treasura (Banking & Finance)

## Purpose

Treasura is a single-page banking/finance landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Banker" free template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Banker" — banking/finance template
  (source: https://colorlib.com/wp/template/banker/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/banker/
  (HTTP 200, full rendered DOM + `css/style.css` (80KB) extracted).
  The TEMPLATES.md screenshot (`banker-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (logo "Banker.", links: Home, About Us
  [dropdown: Team, Pricing, FAQ, Gallery, Services, Testimonials, More
  Links], Blog, Contact, social icons) → Hero slider (full-viewport
  background image with warm-beige overlay, 3-slide carousel: "Banking
  Solutions", "Financing Solutions", "Savings Accounts" + mouse scroll
  indicator) → Features (3 icon cards: Money Savings, Online Shoppings,
  Credit/Debit Cards) → About (image with circle decoration +
  "Amortization Computation" heading + green check list + email form) →
  Team (8 member cards in 4-col grid with social icon overlays) → Gallery
  (filterable 4-column grid: All / Events / Party / Holidays + 12 images
  with hover search icon) → How It Works (split layout: image carousel
  left + numbered steps right with "Learn More" buttons) → Services
  (6 service cards in 3-col grid: Business Consulting, Credit Card,
  Income Monitoring, Insurance Consulting, Financial Investment, Financial
  Management) → Testimonials (carousel with 4 testimonials + avatars) →
  Pricing (3 pricing cards: Basic $47/yr, Premium $200/yr (popular),
  Professional with feature checklists) → Blog (nav-referenced) → FAQ
  (nav-referenced) → Contact (nav-referenced) → Footer (dark bg, links,
  newsletter).
- **Design tokens extracted from `css/style.css`:**
  - Primary **orange `#fd7e14`** (buttons, active links, accents, dropdown
    border-top, focus ring).
  - Body text **gray** (`color: gray`).
  - Headings **black `#000`** (`.text-black`).
  - Footer background **dark grey `#343a40`**, text
    `rgba(255,255,255,0.7)`, headings white.
  - Hero overlay **warm beige `rgba(184, 178, 166, 0.7)`** over hero image.
  - Green check marks **`#71bc42`** (`.ul-check.success`).
  - Circle decoration background **`#f8f9fa`**.
  - Light section backgrounds: Bootstrap `bg-light` (white + subtle grey
    `#e9ecef`).
  - Fonts: **"Open Sans"** (weights 300, 400, 700) for all text.
  - Buttons: **border-radius 30px** (pill-shaped), padding 10px 30px,
    btn-primary = `#fd7e14` bg + white text.
  - Form controls: height 43px, border-radius 30px, focus border-color
    `#fd7e14`.
  - Section padding: 8em 0 (desktop), 2.5em 0 (mobile).
  - Hero min-height: 600px, height: 100vh.
  - AOS animations: fade-up, fade throughout all sections.
  - Navbar: transparent overlay on hero (white text), sticky white bg
    with shadow when scrolled (black text, orange logo).
  - Dropdowns: border-top 2px solid `#fd7e14`, white bg, box-shadow.
  - Pricing popular card: `.pricing-popular` modifier class.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/treasura-<n>/<w>/<h>`); icons → lucide-react;
  forms prevent default (no backend); no assets copied. Team social
  icons → lucide-react (Facebook, Twitter, LinkedIn, Instagram).
  Gallery filter → client-side state (no external library). Testimonials
  → simple state-driven carousel (no Owl Carousel). Pricing toggle
  → "Buy Now" buttons with prev/next to cycle.

Treasura lives in `apps/treasura` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Treasura"
(with an orange dot suffix), anchor links to page sections, and social
media icon links.

#### Scenario: Navbar content

- **GIVEN** the Treasura page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Treasura" with an orange dot
- **AND** the navbar SHALL show links to Home, About, Blog, and Contact
- **AND** the navbar SHALL show social media icons (Facebook, Twitter, LinkedIn)

#### Scenario: Sticky navbar on scroll

- **GIVEN** the page is scrolled past the hero
- **WHEN** the sticky threshold is reached
- **THEN** the navbar background SHALL change from transparent to white
- **AND** the logo color SHALL change from white to orange `#fd7e14`
- **AND** the link text SHALL change from white to black
- **AND** a subtle box-shadow SHALL appear

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-viewport hero with a background image,
a warm-beige overlay, and a text carousel with three slides.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a background image with a warm-beige overlay
- **AND** it SHALL display a level-1 heading (cycling through "Banking
  Solutions", "Financing Solutions", "Savings Accounts")
- **AND** it SHALL show a subtitle paragraph beneath the heading
- **AND** it SHALL display a mouse-scroll indicator at the bottom

#### Scenario: Hero slide cycling

- **GIVEN** the hero section is displayed
- **WHEN** the carousel advances
- **THEN** the heading text SHALL change to the next slide heading
- **AND** the transition SHALL use a fade animation

### Requirement: Features section

The system SHALL render a row of three feature cards with icons, titles,
and descriptions.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show three feature cards: "Money Savings",
  "Online Shoppings", and "Credit / Debit Cards"
- **AND** each card SHALL have an icon, a title, and a short description

### Requirement: About section

The system SHALL render a two-column about section with an image
(decorated with a circle background), a heading, a green check list,
and an email signup form.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a heading "Amortization Computation"
- **AND** it SHALL show a paragraph description
- **AND** it SHALL show a green check list with at least three items
- **AND** it SHALL show an email input field and a "Submit Email" button

#### Scenario: Email form interaction

- **GIVEN** the about section is displayed
- **WHEN** the user types an email and clicks "Submit Email"
- **THEN** the form SHALL prevent default submission (no backend)

### Requirement: Team section

The system SHALL render a team section with a heading and member cards
in a multi-column grid.

#### Scenario: Team content

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show a heading "Meet Team"
- **AND** it SHALL show a subtitle paragraph
- **AND** it SHALL show at least four team member cards
- **AND** each card SHALL have a photo, name, and position
- **AND** each card SHALL show social media icon overlay on hover

### Requirement: Gallery section

The system SHALL render a filterable image gallery with filter buttons.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show a heading "Gallery"
- **AND** it SHALL show filter buttons: "All", "Events", "Party", "Holidays"
- **AND** it SHALL show at least eight gallery images in a 4-column grid

#### Scenario: Gallery filtering

- **GIVEN** the gallery is displayed with "All" selected
- **WHEN** the user clicks the "Events" filter button
- **THEN** only images tagged as "Events" SHALL be visible
- **AND** the "Events" button SHALL be marked as active

### Requirement: How It Works section

The system SHALL render a split-layout section with an image carousel
on the left and numbered steps on the right.

#### Scenario: How It Works content

- **GIVEN** the page is rendered
- **WHEN** the How It Works section is displayed
- **THEN** it SHALL show a heading "How It Works"
- **AND** it SHALL show a subtitle paragraph
- **AND** it SHALL show three numbered steps: "01. Online Applications",
  "02. Get an approval", "03. Card delivery"
- **AND** each step SHALL have a title, description, and "Learn More" button

#### Scenario: How It Works step navigation

- **GIVEN** the How It Works section is displayed
- **WHEN** the user navigates between steps
- **THEN** the corresponding step image SHALL display on the left
- **AND** the step text SHALL change on the right

### Requirement: Services section

The system SHALL render a services section with a heading and service
cards in a three-column grid.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show a heading "Our Services"
- **AND** it SHALL show six service cards: Business Consulting,
  Credit Card, Income Monitoring, Insurance Consulting, Financial
  Investment, Financial Management
- **AND** each card SHALL have an icon, title, description, and
  "Learn More" link

### Requirement: Testimonials section

The system SHALL render a testimonials carousel with customer quotes
and avatars.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show a heading "Happy Customers"
- **AND** it SHALL show at least three testimonials
- **AND** each testimonial SHALL have a blockquote, avatar image,
  and customer name

#### Scenario: Testimonial cycling

- **GIVEN** the testimonials section is displayed
- **WHEN** the carousel advances
- **THEN** the displayed testimonial SHALL change with a fade transition

### Requirement: Pricing section

The system SHALL render a pricing section with three pricing cards.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show a heading "Pricing"
- **AND** it SHALL show three pricing cards: Basic ($47/yr), Premium
  ($200/yr), Professional
- **AND** each card SHALL have a title, price, feature checklist, and
  "Buy Now" button
- **AND** the Premium card SHALL be visually highlighted as popular
- **AND** inactive features SHALL be shown with a strikethrough style

### Requirement: Blog section

The system SHALL render a blog section with article cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show a heading "Blog"
- **AND** it SHALL show at least two blog post cards
- **AND** each card SHALL have an image, title, date, and excerpt

### Requirement: FAQ section

The system SHALL render an FAQ section with expandable questions.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL show a heading "Frequently Ask Questions"
- **AND** it SHALL show at least three FAQ items
- **AND** each item SHALL have a question and an expandable answer

#### Scenario: FAQ accordion interaction

- **GIVEN** the FAQ section is displayed
- **WHEN** the user clicks a question
- **THEN** the answer SHALL toggle open/closed

### Requirement: Contact section

The system SHALL render a contact section with a form and contact info.

#### Scenario: Contact content

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show a heading "Contact Us"
- **AND** it SHALL show a contact form with name, email, subject,
  and message fields
- **AND** it SHALL show contact information (address, phone, email)

#### Scenario: Contact form interaction

- **GIVEN** the contact section is displayed
- **WHEN** the user fills out and submits the contact form
- **THEN** the form SHALL prevent default submission (no backend)

### Requirement: Footer

The system SHALL render a dark footer with the company name, links,
and a "Made with Component Dock" attribution.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the template name "Treasura"
- **AND** it SHALL show footer link columns (Quick Links, Services,
  Newsletter)
- **AND** it SHALL show a "Made with Component Dock" attribution link
  to https://www.componentdock.com/

#### Scenario: Footer links

- **GIVEN** the footer is displayed
- **WHEN** the user clicks a footer link
- **THEN** the link SHALL navigate to the appropriate section or page

### Requirement: Responsive design

The system SHALL be fully responsive across mobile, tablet, and desktop.

#### Scenario: Mobile layout

- **GIVEN** the page is rendered on a viewport width less than 768px
- **WHEN** the page is displayed
- **THEN** the navbar SHALL collapse to a hamburger menu
- **AND** all grid layouts SHALL stack to single-column
- **AND** the hero heading SHALL reduce to 2rem

#### Scenario: Tablet layout

- **GIVEN** the page is rendered on a viewport width between 768px and
  1199px
- **WHEN** the page is displayed
- **THEN** the layout SHALL use 2-column grids where appropriate

## Verification checklist

- [ ] All sections render in the correct order (Navbar → Hero → Features
  → About → Team → Gallery → How It Works → Services → Testimonials
  → Pricing → Blog → FAQ → Contact → Footer)
- [ ] Design tokens match: brand orange `#fd7e14`, Open Sans font,
  pill-shaped buttons (border-radius 30px), dark footer `#343a40`
- [ ] Hero has 100vh height with warm-beige overlay and text carousel
- [ ] Gallery filtering works for All/Events/Party/Holidays
- [ ] Testimonials carousel cycles through quotes
- [ ] Pricing shows three cards with Premium highlighted as popular
- [ ] FAQ accordion toggles open/closed
- [ ] Contact form prevents default submission
- [ ] Responsive: hamburger menu on mobile, stacked grids
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Tests pass with 100% coverage
- [ ] Build succeeds with no TypeScript errors
