# Template: Elixir (Pharmacy & Supplement Store)

## Purpose

Elixir is a single-page pharmacy and supplement store landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Pharma" design (see TEMPLATES.md), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a clean pharmacy e-commerce page with teal/cyan accents: a hero
("Effective Medicine, New Medicine Everyday", "Welcome To Pharma", Shop Now
button), three feature banners (Free Shipping, Season Sale, Gift Card), a
Popular Products grid (6 products with sale tags and pricing), a New Products
carousel on light background, testimonials (3 circular avatars with quotes),
two side-by-side CTA banners on dark background ("Pharma Products", "Rated by
Experts"), and a dark footer with About Us, Quick Links, Contact Info, and a
Colorlib copyright link. Elixir recreates that structure section-for-section
with matching layout, colors, typography, and content types (no ColorLib assets
copied). The footer copyright links to Component Dock instead of ColorLib.

## Design reference (replication findings)

- **Original:** ColorLib "Pharma" — free pharmacy website template
  (source: https://colorlib.com/wp/template/pharma/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/pharma/`
  (HTTP 200, 22.7KB). The rendered DOM is the reference below; the
  TEMPLATES.md screenshot (`pharma-free-template.jpg`) confirms the visual
  design (clean pharmacy layout, teal accents, product grid).
- **CSS tokens extracted** from `css/style.css` (846 lines):
  - Primary accent: `#51eaea` (teal/cyan) — buttons, links, section underlines
  - Body text: `#8c92a0` (muted gray)
  - Headings: `#25262a` (dark)
  - Logo: uppercase, letter-spacing 0.2em, font-weight 900, color black
  - Font: Rubik (body), Crimson Text (headings)
  - Light section bg: `#f8f9fa`
  - Footer link color: `#5c626e`
  - Buttons: uppercase, border-width 2px, transition 0.3s
  - btn-primary hover: transparent bg with `#51eaea` text
- **Section order (1:1):**
  1. Navbar: logo "Elixir" + nav (Home, Store, About, Contact) + search + cart badge
  2. Hero: bg image + "Effective Medicine, New Medicine Everyday" + "Welcome To Elixir" + Shop Now
  3. Feature Banners: 3-column grid (Free Shipping, Season Sale 50% Off, Buy A Gift Card)
  4. Popular Products: 3-col grid, 6 product cards with images, names, prices, sale tags + "View All Products" CTA
  5. New Products: light bg, horizontal scroll, 4 product cards
  6. Testimonials: 3 circular avatars + quotes + author names
  7. CTA Banners: 2 side-by-side image cards on dark bg ("Elixir Products", "Rated by Experts")
  8. Footer: 3-col (About Us, Quick Links, Contact Info) + copyright with Component Dock link

## Requirements

### Requirement: Navbar displays branding and navigation

The navbar SHALL display the "Elixir" logo, navigation links (Home, Store, About, Contact), a search icon button, and a shopping cart link with a badge showing item count.

#### Scenario: Desktop navbar renders all elements

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar shows the "Elixir" logo, all navigation links, a search button, and a cart link with badge

#### Scenario: Mobile hamburger toggles navigation

- **WHEN** the user taps the hamburger menu button on mobile
- **THEN** a mobile navigation panel opens with all navigation links
- **AND** the button label changes to "Close menu"

#### Scenario: Mobile navigation closes on link click

- **WHEN** the mobile navigation is open and a user taps a link
- **THEN** the mobile navigation panel closes

### Requirement: Hero section displays welcome message and CTA

The hero section SHALL display a background image, a subtitle "Effective Medicine, New Medicine Everyday", an h1 "Welcome To Elixir", and a "Shop Now" button linking to the products section.

#### Scenario: Hero renders headline and CTA

- **WHEN** the page loads
- **THEN** the hero shows "Welcome To Elixir" as the main heading
- **AND** the "Shop Now" button links to "#products"

### Requirement: Feature banners showcase store benefits

The feature banners section SHALL display three cards: Free Shipping (primary/teal background), Season Sale 50% Off (white background), and Buy A Gift Card (amber/yellow background), each with a heading and descriptive text.

#### Scenario: Three feature cards render

- **WHEN** the page loads
- **THEN** the feature banners section shows headings for "Free Shipping", "Season Sale 50% Off", and "Buy A Gift Card"

### Requirement: Popular products grid displays product cards

The popular products section SHALL display 6 product cards in a 3-column grid, each with an image, product name, and price. Products on sale SHALL show a "Sale" badge and a strikethrough original price. A "View All Products" button SHALL appear below the grid.

#### Scenario: Six products render with correct details

- **WHEN** the page loads
- **THEN** the popular products section shows 6 product cards with names (Bioderma, Chanca Piedra, Umcka Cold Care, Cetyl Pure, CLA Core, Poo Pourri) and prices

#### Scenario: Sale products show discount badge

- **WHEN** the page loads
- **THEN** products on sale display a "Sale" badge and strikethrough original price

#### Scenario: View All Products button present

- **WHEN** the page loads
- **THEN** a "View All Products" link is rendered below the product grid

### Requirement: New products section displays on light background

The new products section SHALL display 4 product cards in a horizontal scrollable layout on a light (#f8f9fa) background.

#### Scenario: New products render

- **WHEN** the page loads
- **THEN** the new products section shows 4 product cards (Umcka Cold Care, Bioderma, Chanca Piedra, Cetyl Pure)

### Requirement: Testimonials section displays customer reviews

The testimonials section SHALL display at least 3 testimonials, each with a circular avatar image, a quoted review text, and an author attribution.

#### Scenario: Three testimonials render

- **WHEN** the page loads
- **THEN** the testimonials section shows quotes from Kelly Holmes, Rebecca Morando, and Lucas Gallone

### Requirement: CTA banners display on dark background

The CTA banners section SHALL display 2 side-by-side image cards on a dark background: "Elixir Products" and "Rated by Experts", each with a heading and descriptive text.

#### Scenario: Both CTA cards render

- **WHEN** the page loads
- **THEN** the CTA section shows "Elixir Products" and "Rated by Experts" headings

### Requirement: Footer provides site information and Component Dock link

The footer SHALL display three columns (About Us, Quick Links, Contact Info) and a copyright line. The copyright line SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer columns render

- **WHEN** the page loads
- **THEN** the footer shows "Quick Links" with Supplements, Vitamins, Diet & Nutrition, Tea & Coffee
- **AND** the footer shows Contact Info with address, phone, and email

#### Scenario: Component Dock link present

- **WHEN** the page loads
- **THEN** the footer copyright contains a link to "https://www.componentdock.com/" with text "Component Dock"
