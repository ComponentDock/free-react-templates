# Template: Crema (Coffee Shop Landing)

## Purpose

Crema is a single-page coffee shop landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Coffee Blend" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a dark-themed coffee shop page with warm gold/tan accents:
a full-width hero slider with background images, a contact info bar,
an "Our Story" about section with split layout, services icons, a menu
overview, a parallax counter/stats section, best-selling products grid,
a photo gallery, a product menu with tabbed categories, a testimonial
carousel, a blog section, a "Book a Table" appointment/CTA section, and
a dark footer with social links. Crema recreates that structure
section-for-section with matching layout, colors, typography, and
content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Coffee Blend" — free coffee shop website template
  (source: https://colorlib.com/wp/template/coffee-blend/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/coffeeblend/`
  (HTTP 200, 48KB — the rendered page) + stylesheet `css/style.css` (282KB).
  The TEMPLATES.md screenshot (`coffee-free-template-1.jpg`) confirms the
  visual design (dark backgrounds, warm gold accents, full-width hero slider).
- **Section order (1:1):**
  1. Navbar (`ftco-navbar`): dark background, brand "CoffeeBlend" (with
     "Blend" in smaller text), nav links: Home, Menu, Services, Blog,
     About, Shop (dropdown: Shop, Single Product, Cart, Checkout),
     Contact, cart icon.
  2. Hero Slider (`home-slider swiper`): full-width image slider with
     overlay, 3 slides each with: "Welcome" subheading, large headline
     ("The Best Coffee Testing Experience" / "Amazing Taste & Beautiful
     Place" / "Creamy Hot and Ready to Serve"), description paragraph,
     "Order Now" primary button + "View Menu" white outline button.
  3. Intro/Contact Bar (`ftco-intro`): 4-column row — Phone number
     (000 (123) 456 7890), Address (198 West 21th Street, Mountain View),
     Hours (Mon-Fri 8:00am-9:00pm), "Book a Table" link.
  4. About/Story (`ftco-about`): split layout with background image on
     left, text on right — "Discover Our Story" heading, description
     paragraph about the coffee shop.
  5. Services (`ftco-services`): 3-column — "Easy to Order", "Fastest
     Delivery", "Quality Coffee", each with icon + heading + description.
  6. Menu Overview (`ftco-section`): "Discover Our Menu" heading,
     description, "View Full Menu" link.
  7. Counter/Stats (`ftco-counter ftco-bg-dark`): dark background image
     with 4 animated counters — Coffee Branches, Number of Awards,
     Happy Customer, Staff.
  8. Best Sellers (`ftco-section`): "Discover Best Coffee Sellers"
     heading, description, grid of coffee product cards with name,
     description, price, "Add to Cart" button.
  9. Gallery (`ftco-gallery`): image gallery grid.
  10. Product Menu (`ftco-menu`): "Discover Our Products" heading,
      tabbed categories (Main Dish, Drinks, Desserts), product cards
      with image, name, description, price, "Add to cart" button.
  11. Testimonials (`ftco-section img`): "Testimony" / "Customers Says"
      heading, description, testimonial carousel with quote, name,
      star rating.
  12. Blog (`ftco-section`): "Recent from blog" heading, description,
      3 blog cards with image, date, author, comment count, title,
      excerpt.
  13. Appointment/CTA (`ftco-appointment`): "Book a Table" heading,
      "About Us" subheading, description, 3-column footer with About Us,
      Recent Blog, Services links, social icons, and copyright.
  14. Footer: dark overlay background, 3 columns (About Us + social
      links, Recent Blog, Services), Component Dock attribution.

- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#c49b63** (warm gold/tan) — buttons, accents, links.
  - Secondary gold: **#f8b500** (amber — used sparingly for highlights).
  - Dark backgrounds: **#000**, **#030202**, **#0d0d0d**, **#120f0f**,
    **#141414**, **#151111** (near-black warm tints for sections).
  - Light backgrounds: **#fafafa**, **#fcfaf7** (warm off-white).
  - Text dark: **#212529** (headings).
  - Text muted: **#6c757d** (body text).
  - Fonts: **Poppins** (300, 400, 700) for body, **Josefin Sans** (400,
    700) for headings, **Great Vibes** (400) for script accent text.
  - Buttons: rounded (border-radius: ~30px), primary = #c49b63 bg + white
    text; white variant = white bg + dark text (outline style).
  - Footer: dark overlay background image, white text, social icons
    (Twitter, Facebook, Instagram).

- **Recreation decisions:** Navbar with mobile toggle; hero slider with
  3 seeded picsum backgrounds and gold CTA buttons; intro bar with 4
  columns of contact info; about section with split layout (image left,
  text right); services with 3 icon cards; menu overview section; counter
  stats with animated numbers on dark background; best sellers product
  grid; gallery with seeded images; tabbed product menu; testimonial
  carousel; blog cards; appointment CTA; dark footer with social links
  and Component Dock attribution; all images picsum-seeded
  (`picsum.photos/seed/crema-N/w/h`); Google Fonts via `<link>`.

Crema lives in `apps/crema` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navbar

The system SHALL render a fixed dark navbar with the brand name "Crema"
and navigation links.

#### Scenario: Navbar content

- **GIVEN** the Crema page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the brand name "Crema" (with "ma" in a lighter/smaller style)
- **AND** it SHALL show navigation links for Home, Menu, Services, Blog, About, Shop, and Contact
- **AND** it SHALL show a cart icon link

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on a mobile viewport
- **WHEN** the user taps the menu toggle button
- **THEN** the mobile navigation menu SHALL open
- **AND** tapping the toggle again SHALL close the menu

### Requirement: Hero Slider

The system SHALL render a full-width hero image slider with 3 slides,
each containing a headline, description, and two CTA buttons.

#### Scenario: Slider content

- **GIVEN** the page is rendered
- **WHEN** the hero slider is displayed
- **THEN** it SHALL show 3 slides with background images
- **AND** each slide SHALL have a "Welcome" subheading
- **AND** each slide SHALL have a unique headline
- **AND** each slide SHALL have a description paragraph

#### Scenario: Slider CTAs

- **GIVEN** the hero slider is displayed
- **WHEN** a slide is visible
- **THEN** it SHALL show an "Order Now" primary button
- **AND** it SHALL show a "View Menu" white outline button

### Requirement: Intro Contact Bar

The system SHALL render a 4-column contact information bar below the hero.

#### Scenario: Contact bar content

- **GIVEN** the page is rendered
- **WHEN** the intro section is displayed
- **THEN** it SHALL show a phone number column
- **AND** it SHALL show an address column
- **AND** it SHALL show business hours column
- **AND** it SHALL show a "Book a Table" link column

### Requirement: About/Story Section

The system SHALL render a split-layout "Our Story" section with a
background image on one side and text on the other.

#### Scenario: About section content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a "Discover Our Story" heading
- **AND** it SHALL show a description paragraph about the coffee shop

### Requirement: Services Section

The system SHALL render a 3-column services section with icons,
headings, and descriptions.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show 3 service items: "Easy to Order", "Fastest Delivery", "Quality Coffee"
- **AND** each service SHALL have an icon, heading, and description

### Requirement: Menu Overview Section

The system SHALL render a menu overview section with heading and CTA.

#### Scenario: Menu overview content

- **GIVEN** the page is rendered
- **WHEN** the menu overview is displayed
- **THEN** it SHALL show a "Discover Our Menu" heading
- **AND** it SHALL show a "View Full Menu" link

### Requirement: Counter/Stats Section

The system SHALL render a dark-background counter section with 4
animated stat counters.

#### Scenario: Counter content

- **GIVEN** the page is rendered
- **WHEN** the counter section is displayed
- **THEN** it SHALL show 4 counters: Coffee Branches, Number of Awards, Happy Customer, Staff
- **AND** each counter SHALL have an animated number

### Requirement: Best Sellers Section

The system SHALL render a product grid of best-selling coffee items.

#### Scenario: Best sellers content

- **GIVEN** the page is rendered
- **WHEN** the best sellers section is displayed
- **THEN** it SHALL show a "Discover Best Coffee Sellers" heading
- **AND** it SHALL show product cards with name, description, price, and "Add to Cart" button

### Requirement: Gallery Section

The system SHALL render a photo gallery grid.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show a grid of images

### Requirement: Product Menu Section

The system SHALL render a tabbed product menu with categories.

#### Scenario: Menu tabs

- **GIVEN** the page is rendered
- **WHEN** the product menu is displayed
- **THEN** it SHALL show category tabs: Main Dish, Drinks, Desserts
- **AND** selecting a tab SHALL filter the displayed products

#### Scenario: Menu products

- **GIVEN** a category tab is selected
- **WHEN** the products are displayed
- **THEN** each product SHALL show an image, name, description, price, and "Add to cart" button

### Requirement: Testimonial Section

The system SHALL render a testimonial carousel with customer quotes.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonial section is displayed
- **THEN** it SHALL show a "Testimony" / "Customers Says" heading
- **AND** it SHALL show a quote with customer name and star rating

### Requirement: Blog Section

The system SHALL render a blog section with 3 recent post cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show a "Recent from blog" heading
- **AND** it SHALL show 3 blog cards with image, date, author, comment count, title, and excerpt

### Requirement: Appointment/CTA Section

The system SHALL render a "Book a Table" call-to-action section.

#### Scenario: Appointment content

- **GIVEN** the page is rendered
- **WHEN** the appointment section is displayed
- **THEN** it SHALL show a "Book a Table" heading

### Requirement: Footer

The system SHALL render a dark footer with About Us, blog links,
services links, social icons, and Component Dock attribution.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an "About Us" column with description
- **AND** it SHALL show a "Recent Blog" column with blog links
- **AND** it SHALL show a "Services" column with service links
- **AND** it SHALL show social media icons (Twitter, Facebook, Instagram)
- **AND** it SHALL show a Component Dock attribution link

## Verification checklist

- [ ] All 12 sections + navbar + footer render correctly
- [ ] Hero slider cycles through 3 slides
- [ ] Counter numbers animate on scroll into view
- [ ] Product menu tabs filter correctly
- [ ] Testimonial carousel navigates between quotes
- [ ] Mobile responsive: navbar collapses, sections stack
- [ ] All images use picsum.photos seeded URLs
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] 100% test coverage
- [ ] Build succeeds
