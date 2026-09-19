# Spec: Bloomfield (recreation of ColorLib Florist)

## Purpose

Bloomfield is a single-page florist shop website template in the
free-react-templates monorepo. It is an original React recreation of
the ColorLib free "Florist" website template
(source: https://preview.colorlib.com/theme/florist/), built under a
DIFFERENT name (Bloomfield — evokes floral/garden; single lowercase word,
no collision with apps/ or existing specs) per the monorepo naming mandate.

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design tokens

- Font: Quicksand (Google Fonts, body), Libre Baskerville (headings)
- Primary color: #f45d96 (pink)
- Heading color: #111111
- Body text: #444444
- Button style: pill/rounded-full (50px radius), uppercase, bold, tracking-widest
- Primary button: #f45d96 bg, white text
- White button variant: white bg, #f45d96 text
- Border button variant: transparent bg, #f45d96 border, #111111 text
- Section spacing: py-20 (80px)

## Requirements

### Requirement: Navbar renders navigation and actions

The template SHALL display a sticky navbar with the Bloomfield logo and
navigation links (Home, About, Shop, Blog, Contact) and action icons
(search, wishlist, cart) with a mobile hamburger toggle.

#### Scenario: Desktop nav shows all links

- **WHEN** the page loads on desktop
- **THEN** the navbar shows Home, About, Shop, Blog, and Contact links
- **AND** search, wishlist, and cart icons are visible

#### Scenario: Mobile menu toggles

- **WHEN** the user clicks the hamburger button
- **THEN** the mobile navigation menu opens
- **AND** clicking the button again closes it

### Requirement: Hero section displays main heading and CTA

The template SHALL display a full-width hero with background image,
tagline "Fresh Flower & Gift Shop", heading "Making beautiful flowers a
part of your life.", and a "Shop now" CTA button.

#### Scenario: Hero renders heading and CTA

- **WHEN** the page loads
- **THEN** the hero shows "Fresh Flower & Gift Shop" tagline
- **AND** the heading "Making beautiful flowers a part of your life." is visible
- **AND** a "Shop now" link points to #shop

### Requirement: Benefits section shows four benefit cards

The template SHALL display a 4-column grid of benefit items:
100% Freshness, Made by artist, Own courier, 100% Quality.

#### Scenario: All four benefits render

- **WHEN** the page loads
- **THEN** four benefit cards are visible with their titles and descriptions

### Requirement: Categories section shows four category cards

The template SHALL display a 4-column grid of category cards with
background images: Fresh Flower (25 items), Succulent plants (162 items),
Cactus plants (58 items), Furniture tree (25 items).

#### Scenario: All four categories render

- **WHEN** the page loads
- **THEN** four category cards are visible with names and item counts

### Requirement: About section displays two-column layout

The template SHALL display an about section with a heading, description
text, video placeholder with play button, sub-heading, and "Contact us" CTA.

#### Scenario: About section renders

- **WHEN** the page loads
- **THEN** "We provide all kinds of fresh flower services" heading is visible
- **AND** a video play button is present
- **AND** a "Contact us" link points to #contact

### Requirement: New Arrivals section displays product grid with filters

The template SHALL display filter tabs (All, Bouquet, Flower box, Flower
shelf, Basket, Gift combos) and a product grid. Clicking a tab filters
the displayed products.

#### Scenario: All products shown by default

- **WHEN** the page loads
- **THEN** 10 product cards are visible with "Fly Me To The Moon" names

#### Scenario: Tab filtering works

- **WHEN** the user clicks the "Bouquet" tab
- **THEN** only Bouquet products are shown (2 items)

### Requirement: Call to Action section displays CTA buttons

The template SHALL display a full-width CTA banner with "Custom flower"
tagline, heading, "Order Now" button, and "Contact Us" button.

#### Scenario: CTA renders

- **WHEN** the page loads
- **THEN** "Order Now" link points to #shop
- **AND** "Contact Us" link points to #contact

### Requirement: Blog section shows three blog posts

The template SHALL display a 3-column grid of blog posts with tags,
dates, and a "View all posts" link.

#### Scenario: Blog posts render

- **WHEN** the page loads
- **THEN** three blog post cards are visible with titles and tags

### Requirement: Testimonials section shows carousel

The template SHALL display a testimonial carousel with quote text, name,
role, and prev/next navigation buttons.

#### Scenario: First testimonial renders

- **WHEN** the page loads
- **THEN** "Alejandro Houston" and "Businessman" are visible

#### Scenario: Navigation works

- **WHEN** the user clicks "Next testimonial"
- **THEN** "Sarah Mitchell" becomes visible

### Requirement: Instagram feed shows five images

The template SHALL display a 5-column grid of Instagram images with
hover overlay showing "Follow us @bloomfield".

#### Scenario: Five images render

- **WHEN** the page loads
- **THEN** five Instagram post links are visible

### Requirement: Footer includes ComponentDock attribution

The template SHALL display a footer with logo, description, social links,
Company/Account columns, newsletter form, and "More templates at
Component Dock" link to https://www.componentdock.com/.

#### Scenario: Footer renders ComponentDock link

- **WHEN** the page loads
- **THEN** a "Component Dock" link pointing to https://www.componentdock.com/ is visible
- **AND** social links (Facebook, Twitter, Instagram, LinkedIn) open in new tabs
- **AND** a newsletter email input and Subscribe button are present
