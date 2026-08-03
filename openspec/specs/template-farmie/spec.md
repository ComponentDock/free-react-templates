# Template: Farmie (Farm & Organic Shop Website)

## Purpose

Farmie is a multi-section farm and organic-shop website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Farmie" design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a green-and-white agricultural landing page: hero with
a farm headline, four benefit blocks, an about story, a "farm to table"
process strip, produce categories, product cards with prices, a newsletter
band, farming practices, testimonials, a contact form, news posts, trust
badges, and a multi-column footer. Farmie follows the same structure and adds
the repo's standard dark-mode toggle and accessible patterns. All imagery is
recreated with seeded placeholder images (no assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Farmie" — free agriculture/farm shop website
  template (source: https://colorlib.com/wp/template/farmie/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/farmie/`
  (HTTP 200) + `style.css` (HTTP 200, ~324 KB, Bootstrap 5 based; the
  `css/style.css` path 404s — the root `style.css` is the real stylesheet).
- **Structure (1:1, section order):**
  1. Header (`header-area`) — logo, nav (Home, About, Pages, Shop, News,
     Contact), cart badge "Your Cart (2)", "Contact Us" button.
  2. Hero — h2 "The hearth of the farm is the true center of our universe.",
     supporting copy, CTA buttons, farm imagery (slider).
  3. Benefits (`famie-benefits-area`) — four blocks: Best Services, Farm
     Experiences, 100% Natural, Farm Equipment (icon + title + copy).
  4. About (`about-us-area`) — h2 "Let Us Tell You Our Story" + copy +
     "Read More" + image.
  5. Farm to Table (`farm-to-table-area bg-gray`) — h2 "From Farm To Your
     Table"; four numbered steps: Grow, Harvest, Quality Check, Deliver.
  6. Services (`services-area`) — h2 "Our Produce Is Mainstay For Us"; four
     category cards: Fruit & Vegetable, Meat & Eggs, Milk & Cheese, Rice &
     Corn.
  7. Products (`our-products-area`) — h2 "Our Product Are Highest Quality";
     product cards with prices ($17.99, $9.99, $59.99, $29.99 → $19.99 sale),
     "Go to Store" button.
  8. Newsletter (`newsletter-area`, jarallax bg image) — h2 "Our Produce Is
     Mainstay For Us" + email input + "Subscribe" button.
  9. Farming Practices (`farming-practice-area`) — h2 "Farming Practices To
     Preserve Land & Water"; six items: Chicken Farmed For Meat, Pig Farm
     Management, Beef Cattle Farming, Improved Rice Cultivation, Soil
     Improvement Techniques, Intensive Fruit Farming.
  10. Testimonials (`testimonial-area`, jarallax bg image) — quote slider:
      Mrs Lara Sullivan (Customer), Ajoy Das (Client), Akash Khan (Customer).
  11. Contact (`contact-area`) — h2 "Get In Touch With Us"; contact form
      (Send Message) + contact details.
  12. News (`news-area bg-gray`) — four posts with meta "Post on 18 Aug 2018
      / <author>".
  13. Trust Badges (`trust-badges-area bg-gray`) — h2 "Our Certifications &
      Guarantees"; badges: USDA Organic, Non-GMO, Fair Trade, Eco-Friendly,
      Quality Assured.
  14. Footer (`footer-area`) — about + address (120 Raymond Rd, New York ·
      info.deercreative@gmail.com · +84 223 9000), QUICK LINK column, RECENT
      NEWS column, STAY CONNECTED (social links), bottom copyright bar.
- **Design tokens extracted from the stylesheet (`style.css`):**
  - Brand color: **#77b122** (green — primary buttons, icons, headings
    accents, hover states).
  - Text/background: **#303030**/**#212529** (headings/dark), **#707070**/
    **#6c757d**/**#b7b7b7** (muted), **#f8f9fa**/**#f2f4f5** (`bg-gray`
    sections), white sections.
  - Fonts: **"Karla"** (400/700, body + headings) via Google Fonts
    (`@import` in the stylesheet).
  - Buttons: filled green `btn` (rounded); section alternation white/gray;
    two full-bleed parallax (jarallax) bands with image overlays.
- **Recreation decisions:** the repo-standard Navbar (with dark-mode toggle)
  wraps the header; sections recreated with Tailwind tokens
  (`--color-brand` = `#77b122`, green scale in `@theme`); placeholder images
  via `https://picsum.photos/seed/farmie-<n>/<w>/<h>`; icons from
  lucide-react; parallax bands simplified to fixed image backgrounds;
  newsletter + contact forms with client-side validation (zod); social icons
  inline SVG; no assets copied.

Farmie lives in `apps/farmie` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a navigation bar with the site name "Farmie", links
to the main sections (Home, About, Pages, Shop, News, Contact), a cart
badge, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Farmie page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Farmie" and links to the main sections
- **AND** the navbar SHALL show a cart badge and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a hero section with the headline "The hearth of the
farm is the true center of our universe.", supporting copy, and CTA buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL contain a level-2 heading matching "The hearth of the farm is the true center of our universe."
- **AND** it SHALL show a supporting paragraph and CTA buttons

### Requirement: Benefits section

The system SHALL render a benefits section with four blocks: Best Services,
Farm Experiences, 100% Natural, and Farm Equipment.

#### Scenario: Benefit blocks

- **GIVEN** the page is rendered
- **WHEN** the benefits section is displayed
- **THEN** it SHALL show the four benefit titles, each with an icon and copy

### Requirement: About section

The system SHALL render an about section titled "Let Us Tell You Our Story"
with an image, descriptive copy, and a "Read More" button.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "Let Us Tell You Our Story"
- **AND** it SHALL show an image with an accessible label, copy, and a "Read More" button

### Requirement: Farm-to-table section

The system SHALL render a "From Farm To Your Table" section with four steps:
Grow, Harvest, Quality Check, and Deliver.

#### Scenario: Process steps

- **GIVEN** the page is rendered
- **WHEN** the farm-to-table section is displayed
- **THEN** it SHALL show the heading "From Farm To Your Table"
- **AND** it SHALL show the four steps in order

### Requirement: Services section

The system SHALL render a services section titled "Our Produce Is Mainstay
For Us" with four category cards: Fruit & Vegetable, Meat & Eggs, Milk &
Cheese, and Rice & Corn.

#### Scenario: Category cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Our Produce Is Mainstay For Us"
- **AND** it SHALL show the four category cards with titles

### Requirement: Products section

The system SHALL render a products section titled "Our Product Are Highest
Quality" with at least four product cards, each showing a name, a price, and
a "Go to Store" button.

#### Scenario: Product cards

- **GIVEN** the page is rendered
- **WHEN** the products section is displayed
- **THEN** it SHALL show the heading "Our Product Are Highest Quality"
- **AND** it SHALL show at least four product cards with prices

### Requirement: Newsletter section

The system SHALL render a newsletter section with a heading, an email input,
and a "Subscribe" button.

#### Scenario: Newsletter signup

- **GIVEN** the page is rendered
- **WHEN** the newsletter section is displayed
- **THEN** it SHALL show a newsletter heading and an email input with a "Subscribe" button

### Requirement: Farming practices section

The system SHALL render a "Farming Practices To Preserve Land & Water"
section with six practice items.

#### Scenario: Practice items

- **GIVEN** the page is rendered
- **WHEN** the farming practices section is displayed
- **THEN** it SHALL show the heading "Farming Practices To Preserve Land & Water"
- **AND** it SHALL show the six practice items with titles

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least three quotes
(named customers).

#### Scenario: Testimonial quotes

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show at least three testimonial quotes with customer names

### Requirement: Contact section

The system SHALL render a contact section titled "Get In Touch With Us" with
a contact form (submit button) and contact details.

#### Scenario: Contact form

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show the heading "Get In Touch With Us"
- **AND** it SHALL show a contact form with a submit button and contact details

### Requirement: News section

The system SHALL render a news section with at least four posts, each with
meta text, a title, and an excerpt.

#### Scenario: News posts

- **GIVEN** the page is rendered
- **WHEN** the news section is displayed
- **THEN** it SHALL show at least four news posts with meta text and titles

### Requirement: Trust badges section

The system SHALL render a "Our Certifications & Guarantees" section with at
least four badges (USDA Organic, Non-GMO, Fair Trade, Eco-Friendly).

#### Scenario: Badge list

- **GIVEN** the page is rendered
- **WHEN** the trust badges section is displayed
- **THEN** it SHALL show the heading "Our Certifications & Guarantees"
- **AND** it SHALL show the badge names

### Requirement: Footer

The system SHALL render a footer with the site name, an about blurb with
address, quick links, recent news, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Farmie" and an about blurb
- **AND** it SHALL show quick links, recent news, and social links

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Farmie app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Farmie — Farm & Organic Shop Website Template"
