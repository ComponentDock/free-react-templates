# Template: DirectoryHub (Directory / Listing)

## Purpose

DirectoryHub is a single-page directory and listing website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Listing" free template (source:
https://colorlib.com/wp/template/listing/), built under a DIFFERENT name
(**DirectoryHub**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 "Listing & Directory Website Template" with a
hero search bar, category browsing with image overlays, featured places with
rating badges, category icons (SVG), and an "Add Listing" CTA. The page uses
Roboto font (300/400/700) with a dark image-based hero, a pink/rose brand
color `#ff3a6d`, and a clean white/light-grey body with `#f3f4f7` alternating
section backgrounds.

**WHAT MAKES DIRECTORYHUB DISTINCT (signature behaviors):**

1. **Full-width dark hero with search form.** A large background image
   (dark overlay) containing a centered h1 "Discover great places in New York"
   + subtitle + a three-part search form: text input "What are you looking
   for?", text input "New York", and a pink `#ff3a6d` SEARCH button. Below
   the form: "Browse Popular or Recently Added" links.

2. **Find Places grid with hover-reveal captions.** A 3-column asymmetric
   grid (left: 1 large image; middle: 2 stacked images; right: 2 stacked
   images) with category names and listing counts in a figcaption overlay.
   Hover effect: Ruby-style caption slide from bottom with a semi-transparent
   dark overlay. Categories: Nightlife (385 Listings), Restaurants (210),
   Outdoors (114), Hotels (577), Art & Culture (79).

3. **Featured Places with color-coded rating badges.** Three equal-width
   cards each with a top image, a circular rating badge (positioned overlapping
   the image, `border-radius: 50%`), a title box with name, category, reviews,
   price level, address, phone, website, and OPEN/CLOSED status. Rating
   colors: default `#ff7474`, orange `#ffae00`, green `#46cd38`. Cards have
   a "VIEW ALL" pink button below.

4. **Browse Categories with SVG icons.** 4×2 grid of category blocks with
   SVG icons that turn pink `#ff3a6d` on hover. Categories: Automotive,
   Beauty & Spa, Hotel, Restaurant, Shopping, Coffee, Club & Bar,
   Destinations. Each block has a centered icon + label.

5. **Add Listing CTA band.** Light grey `#f3f4f7` section with centered text
   "Reach millions of People" + subtitle + a pink "ADD LISTING" button.

6. **Simple dark footer.** Dark `#252a33` footer with centered copyright
   text and three social media icon links (Facebook, Twitter, Instagram).

## Naming

The ColorLib source name "Listing" is FORBIDDEN as the app name.
**DirectoryHub** is the new, original name — single lowercase word
(kebab-case: `directoryhub`), no collision with `apps/`, `openspec/specs/`,
`docs/templates/`, or any TEMPLATES.md name (verified 2026-09-18: zero hits
for `directoryhub` in TEMPLATES.md, `ls apps/`, `openspec/specs/`,
`docs/templates/`). Source slug + preview URL are recorded below.

- **Source ColorLib slug:** `listing`
- **Source URL:** https://colorlib.com/wp/template/listing/
- **Preview URL:** https://preview.colorlib.com/theme/listing/
- **Screenshot:** `listing-free-directory-website-template.jpg`

## Design reference (replication findings)

- **Original:** ColorLib "Listing" — directory / listing website template
  (source: https://colorlib.com/wp/template/listing/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/listing/
  (HTTP 200, 587 lines HTML). Stylesheets: `css/style.css` (940 lines),
  `css/bootstrap.min.css`, `css/simple-line-icons.css`, `css/themify-icons.css`,
  `css/set1.css`. Bootstrap 4 grid. No section `id`s; sections separated by
  HTML comments (`<!--============================= SECTION NAME ====-->`).
- **Screenshot (`listing-free-directory-website-template.jpg`):** Full-width
  dark hero with search bar; below that a white section with a 5-image grid
  (categories with hover captions); then a light grey section with 3 featured
  place cards with rating badges; then a white section with 8 category icons
  in a 4×2 grid; then a light grey "Reach millions" CTA; then a dark footer.
- **Font:** Roboto (300/400/700) via Google Fonts — loaded inline in
  `<style>` with `@font-face` declarations for weights 300, 400, 700.

## Section order (1:1)

1. **Navbar** — fixed/absolute top, transparent overlay on hero. Brand
   "DirectoryHub" (white, 31px). Nav links: Explore (dropdown), Directory
   (dropdown), Pages (dropdown), About, Blog. Right: "Add Listing" button
   (white outline, themify-plus icon). Mobile: hamburger toggle.
2. **Hero / Search** — full-width dark background image. Centered:
   h1 "Discover great places in your city" (white, 72px weight-300) +
   subtitle "Let's uncover the best places to eat, drink, and shop nearest
   to you." (#909090, 28px). Search form: two text inputs + pink SEARCH
   button. Below: "Browse Popular or Recently Added" links.
3. **Find Places** — white bg. Section heading "What do you need to find?"
   (35px). 3-column grid: left = 1 tall image (Nightlife); middle = 2 stacked
   (Restaurants, Outdoors); right = 2 stacked (Hotels, Art & Culture).
   Each image has a hover-reveal figcaption (dark overlay + white text +
   listing count).
4. **Featured Places** — light grey `#f3f4f7` bg. Heading "Featured Places".
   3 equal cards: image top, circular rating badge (overlapping image edge),
   title box (name + category + reviews + price + address + phone + website
   + OPEN/CLOSED status + heart/bookmark icons). "VIEW ALL" pink button.
5. **Browse Categories** — white bg. Heading "Browse Categories". 4×2 grid:
   each cell = SVG icon (turns pink on hover) + label. Categories:
   Automotive, Beauty & Spa, Hotel, Restaurant, Shopping, Coffee,
   Club & Bar, Destinations.
6. **Add Listing CTA** — light grey `#f3f4f7` bg. Centered h2 "Reach millions
   of People" + p + pink "ADD LISTING" button with plus icon.
7. **Footer** — dark `#252a33` bg. Centered copyright text + 3 social icon
   links (Facebook, Twitter, Instagram via themify icons).

## Design tokens

| Token                | Value                          | Notes                                                                          |
| -------------------- | ------------------------------ | ------------------------------------------------------------------------------ |
| `--color-brand`      | `#ff3a6d`                      | Pink/rose — SEARCH button, ADD LISTING button, VIEW ALL button, SVG hover      |
| `--color-page`       | `#ffffff`                      | Default page background (white)                                                |
| `--color-light-bg`   | `#f3f4f7`                      | Alternating light grey sections (Featured Places, Add Listing CTA)             |
| `--color-dark-bg`    | `#252a33`                      | Footer background + sticky navbar background                                   |
| `--color-hero-overlay`| semi-transparent black         | Dark overlay on hero background image                                          |
| `--color-heading`    | `#000` (h2, h3), `#fff` (h1)  | h1 is white (on hero); h2/h3 are dark                                           |
| `--color-body`       | `#333`                         | Default body text (Bootstrap default)                                           |
| `--color-muted`      | `#909090`                      | Hero subtitle, search links, subtitle text                                     |
| `--color-card-text`  | `#9fa9b9`                      | Featured card secondary text (category, reviews, address)                      |
| `--color-rating-default` | `#ff7474`                  | Default rating badge (circular, 60×60px, radius 50%)                           |
| `--color-rating-orange`  | `#ffae00`                  | Orange rating badge variant                                                     |
| `--color-rating-green`   | `#46cd38`                  | Green rating badge variant                                                      |
| `--color-price`      | `#ffb006`                      | Price level highlight color (dollar signs)                                      |
| `--color-status-open`   | green text                   | "OPEN NOW" status text                                                          |
| `--color-status-closed` | `#ff3a6d`                    | "CLOSED NOW" status text (same as brand)                                        |
| `--font-body`        | `'Roboto', sans-serif`        | Google Fonts 300/400/700; body 15px                                             |
| `--font-heading`     | `'Roboto', sans-serif`        | h1 72px weight-300 white; h2 47px; h3 35px; h5 28px; h6 21px weight-400       |
| `--radius-btn`       | `3px`                         | All buttons (SEARCH, ADD LISTING, VIEW ALL)                                     |
| `--radius-rating`    | `50%`                         | Circular rating badges                                                          |
| `--radius-card`      | `0` (default Bootstrap)       | Featured cards have no border-radius                                            |
| `--section-padding`  | `90px 0` (desktop), `45px 0` (mobile) | `.main-block` padding                                             |
| `--navbar-brand-size`| `31px`                        | Navbar brand font size                                                          |

## Requirements

### Requirement: Navbar

The system SHALL render a top-positioned transparent navbar overlaying the
hero section, with a brand name, navigation links (some with dropdowns),
and an "Add Listing" button.

#### Scenario: Desktop navbar

- **GIVEN** the DirectoryHub app is rendered on a desktop viewport (≥992px)
- **THEN** the navbar SHALL display the brand "DirectoryHub" in white, 31px,
  positioned left
- **AND** navigation links (Explore, Directory, Pages, About, Blog) SHALL
  render in white text (16px, weight 300) with dropdown indicators on
  Explore, Directory, and Pages
- **AND** an "Add Listing" button SHALL render on the right with white
  outline border, white text, and a plus icon

#### Scenario: Sticky navbar on scroll

- **GIVEN** the user scrolls past 100px from the top
- **THEN** the navbar background SHALL transition to dark `#252a33`
  (the `.is-sticky` class behavior)

#### Scenario: Mobile navbar toggle

- **GIVEN** the viewport is at or below 992px
- **THEN** a hamburger toggle button SHALL be visible
- **AND** clicking the toggle SHALL expand/collapse the nav links

### Requirement: Hero section with search form

The system SHALL render a full-width hero section with a dark background
image, a heading, subtitle, and a three-part search form.

#### Scenario: Hero content

- **GIVEN** the DirectoryHub app is rendered
- **THEN** the hero SHALL display h1 "Discover great places in your city"
  in white, 72px, weight 300
- **AND** a subtitle "Let's uncover the best places to eat, drink, and shop
  nearest to you." SHALL render below in `#909090`, 28px
- **AND** a search form SHALL render with two text inputs and a SEARCH
  button

#### Scenario: Search form layout

- **GIVEN** the hero section is rendered
- **THEN** the first input SHALL have placeholder "What are you looking for?"
- **AND** the second input SHALL have placeholder text (e.g. a city name)
- **AND** the SEARCH button SHALL be pink `#ff3a6d` with white text and a
  magnifier icon

#### Scenario: Hero links

- **GIVEN** the hero section is rendered
- **THEN** "Browse Popular" and "Recently Added" links SHALL render below
  the search form in `#909090` color

### Requirement: Find Places section

The system SHALL render a grid of category images with hover-reveal captions
showing category names and listing counts.

#### Scenario: Find Places grid

- **GIVEN** the Find Places section is rendered
- **THEN** a heading "What do you need to find?" SHALL display centered
- **AND** 5 category images SHALL render in a 3-column asymmetric grid
  (1 tall left, 2+2 stacked middle and right)

#### Scenario: Hover caption reveal

- **GIVEN** a category image in the Find Places grid
- **WHEN** the user hovers over the image
- **THEN** a figcaption SHALL slide in from the bottom with a dark overlay
- **AND** the caption SHALL show the category name (e.g. "Nightlife") and
  listing count (e.g. "385 Listings") in white text

#### Scenario: Category labels

- **GIVEN** the Find Places section is rendered
- **THEN** the categories SHALL be: Nightlife, Restaurants, Outdoors,
  Hotels, Art & Culture (with realistic listing counts)

### Requirement: Featured Places section

The system SHALL render a row of featured place cards with images, rating
badges, details, and action icons.

#### Scenario: Featured Places cards

- **GIVEN** the Featured Places section is rendered on a light grey `#f3f4f7`
  background
- **THEN** a heading "Featured Places" SHALL display centered
- **AND** 3 place cards SHALL render in a 3-column grid

#### Scenario: Place card structure

- **GIVEN** a featured place card is rendered
- **THEN** it SHALL show a top image, a circular rating badge overlapping
  the image edge (60×60px, radius 50%), and a title box below
- **AND** the title box SHALL contain: place name (h6), category text,
  review count, price level (highlighted dollar signs), address with
  location icon, phone with phone icon, website with link icon
- **AND** an OPEN/CLOSED status indicator SHALL render at the bottom

#### Scenario: Rating badge colors

- **GIVEN** the Featured Places section is rendered
- **THEN** rating badges SHALL use color variants: default pink-red `#ff7474`,
  orange `#ffae00`, and green `#46cd38`
- **AND** each badge SHALL be circular (radius 50%) with white text

#### Scenario: View All button

- **GIVEN** the Featured Places section is rendered
- **THEN** a "VIEW ALL" button SHALL render centered below the cards
- **AND** the button SHALL be pink `#ff3a6d` with white text

### Requirement: Browse Categories section

The system SHALL render a grid of category icons that highlight on hover.

#### Scenario: Category grid

- **GIVEN** the Browse Categories section is rendered
- **THEN** a heading "Browse Categories" SHALL display centered
- **AND** 8 category blocks SHALL render in a 4×2 grid
- **AND** each block SHALL contain an SVG icon and a category label

#### Scenario: Category hover effect

- **GIVEN** a category block in the Browse Categories section
- **WHEN** the user hovers over the block
- **THEN** the SVG icon fill SHALL transition to pink `#ff3a6d`
- **AND** the block background SHALL darken slightly

#### Scenario: Category labels

- **GIVEN** the Browse Categories section is rendered
- **THEN** the categories SHALL be: Automotive, Beauty & Spa, Hotel,
  Restaurant, Shopping, Coffee, Club & Bar, Destinations

### Requirement: Add Listing CTA section

The system SHALL render a call-to-action section encouraging users to add
their business listing.

#### Scenario: CTA content

- **GIVEN** the Add Listing CTA section is rendered on a light grey `#f3f4f7`
  background
- **THEN** an h2 "Reach millions of People" SHALL display centered
- **AND** a subtitle paragraph SHALL render below
- **AND** an "ADD LISTING" button SHALL render centered with pink `#ff3a6d`
  background, white text, and a plus icon

### Requirement: Footer

The system SHALL render a dark footer with copyright text and social links.

#### Scenario: Footer content

- **GIVEN** the DirectoryHub app is rendered
- **THEN** a footer SHALL render with dark background `#252a33`
- **AND** centered copyright text SHALL be displayed
- **AND** 3 social media icon links (Facebook, Twitter, Instagram) SHALL
  render below the copyright text
- **AND** the footer SHALL link to `https://www.componentdock.com/`
  (branded as "Component Dock")

### Requirement: Responsive layout

The system SHALL be fully responsive across desktop, tablet, and mobile
viewports.

#### Scenario: Mobile layout

- **GIVEN** the DirectoryHub app is rendered on a viewport at or below 768px
- **THEN** the hero h1 SHALL scale down (to ~40px)
- **AND** the search form inputs SHALL stack vertically
- **AND** the Find Places grid SHALL reflow to a single column
- **AND** the Featured Places cards SHALL stack vertically
- **AND** the Browse Categories grid SHALL reflow to 2 columns
- **AND** the section padding SHALL reduce to 45px top/bottom

### Requirement: Accessibility

The system SHALL provide accessible markup and interactive elements.

#### Scenario: Semantic HTML

- **GIVEN** the DirectoryHub app is rendered
- **THEN** the navbar SHALL use `<nav>` with appropriate aria attributes
- **AND** the mobile toggle button SHALL have `aria-label` and
  `aria-expanded` attributes
- **AND** the search form SHALL use a `<form>` with labeled inputs
- **AND** images SHALL have descriptive alt text

#### Scenario: Keyboard navigation

- **GIVEN** the DirectoryHub app is rendered
- **THEN** all interactive elements (links, buttons, form inputs) SHALL be
  keyboard-focusable
- **AND** focus-visible rings SHALL be visible on focused elements

## Verification checklist

- [ ] Navbar renders with brand, links, dropdowns, and Add Listing button
- [ ] Sticky navbar background change on scroll (past 100px)
- [ ] Hero section: dark background, h1, subtitle, search form, links
- [ ] Search form: two inputs + SEARCH button with pink styling
- [ ] Find Places: 5 category images in asymmetric grid with hover captions
- [ ] Featured Places: 3 cards with ratings, details, OPEN/CLOSED status
- [ ] Rating badges: circular, color-coded (pink, orange, green)
- [ ] VIEW ALL button below featured cards
- [ ] Browse Categories: 8 category blocks with SVG icons + hover effect
- [ ] Add Listing CTA: heading, subtitle, pink button
- [ ] Footer: dark bg, copyright, social icons, Component Dock link
- [ ] Responsive layout across all breakpoints
- [ ] Keyboard accessibility and semantic HTML
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Placeholder images via picsum.photos
- [ ] Google Fonts (Roboto) loaded via link in index.html
- [ ] Lucide React icons (replacing themify/simple-line icons)
