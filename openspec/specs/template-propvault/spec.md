# Template: PropVault (Real Estate)

## Purpose

PropVault is a real estate property listing website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Holmes" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Holmes" — real estate property listing template
  (source: https://colorlib.com/wp/template/holmes/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/holmes/
  (HTTP 200 — full rendered DOM + `css/main.css` (66 KB) extracted;
  Bootstrap 4 + owl.carousel + Linearicons + Font Awesome + ion.rangeSlider).
  The TEMPLATES.md screenshot (`holmes-free-template.jpg`) matches this
  reconstruction.
- **Section order (1:1):**
  1. **Top bar** (light lavender `#f9f9ff` bg): phone number, "Sell / Rent
     Property", "login / register" — right-aligned list.
  2. **Main navbar** (white bg, box-shadow): logo image + nav links: Home,
     Properties, About, Blog (dropdown), Pages (dropdown), Contact. Active
     item gets coral `#ea6c5d` text.
  3. **Hero / Banner** (full-screen background image with dark overlay
     `rgba(0,0,0,0.18)`): headline "We're Real Estate King" at bottom.
  4. **Search form** (white bg, overlapping hero bottom): "Search Properties
     For" heading + Sell/Rent toggle switch, 4 selects (Location, Property
     Type, Bedrooms x2), Price Range slider, Area Range slider, coral
     "Search Properties" button with arrow icon.
  5. **Properties** (white bg, `section-gap` padding): heading "Properties
     in Various Cities" + subtext. 3-column grid of property cards, each
     with: image + "For Sale" badge, title + price row, bed/bath/area row,
     amenity row (Pool/Internet/Cleaning with green/red spans), likes +
     comments row.
  6. **About** (light lavender `#f9f9ff` bg): split layout — left: 3 text
     blocks ("Why Choose Us", "Our Properties", "Legal Notice") each with
     heading + paragraph. Right: large image.
  7. **Cities** (white bg, `section-gap`): heading "Properties in Various
     Cities" + subtext. Image grid: 1 tall left column (San Francisco),
     1 large right top (New York), 2 smaller right bottom (Boston, LA).
     Each with dark overlay + title text, hover fade-in effect.
  8. **Testimonials** (light lavender `#f9f9ff` bg): heading "Feedback from
     our real clients" + subtext. Carousel of testimonials: rounded avatar,
     quote text, name, title. 3 unique testimonials (Helena Phillips/CEO at
     Facebook, Cordelia Barton/CEO at Twitter, Carrie Reese/CEO at Google).
  9. **Blog** (white bg, `section-gap`): heading "Feedback from our real
     clients" (reused heading from original — keep as-is for fidelity) +
     subtext. 3-column cards: thumbnail image, title link, excerpt paragraph,
     meta row (date, likes, comments).
  10. **Footer** (dark `#222222` bg, `section-gap`): 4-column layout —
      About Us (text), Newsletter (email input + arrow submit), Instagram
      Feed (8 small thumbnail grid), Follow Us (social icons: Facebook,
      Twitter, Dribbble, Behance). Bottom bar centered: copyright text +
      Component Dock link.

- **Design tokens extracted from `main.css`:**
  - Primary **coral `#ea6c5d`** (primary-btn, active nav items, hover
    accents, border-color accents).
  - Secondary cyan **`#4cd3e3`**, blue **`#38a4ff`**, yellow **`#f4e700`**
    (genric-btn color variants — available but primary coral dominates).
  - Top bar bg **`#f9f9ff`** (light lavender).
  - About / testimonials section bg **`#f9f9ff`**.
  - Footer bg **`#222222`** (dark charcoal).
  - Hero overlay **`rgba(0,0,0,0.18)`**; banner overlay-bg **`rgba(0,0,0,0.48)`**.
  - Body text **`#777777`**; heading text **`#222222`**; links **`#ea6c5d`**.
  - Fonts: **"Poppins"**, sans-serif (Google Font, weights 100-700).
  - Buttons: `.primary-btn` — height 40px, border-radius **25px** (pill),
    bg `#ea6c5d`, white text, weight 500, arrow icon on right with
    translateX hover.
  - Property card images: no border-radius; badges "For Sale" overlay.
  - City images: overlay with `content-overlay` + `fadeInBottom` hover.
  - Section gap: `padding: 120px 0` desktop / 80px tablet / 60px mobile.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/propvault-<n>/<w>/<h>`); icons → lucide-react;
  carousel → embla (NOT owl-carousel); range sliders → native range inputs;
  nice-select → native selects styled with Tailwind; forms prevent default
  (no backend); no assets copied. Footer links to Component Dock.

## Requirements

### Requirement: Top bar
The system SHALL render a thin top bar above the main navbar with a light
lavender background, containing a phone number, a "Sell / Rent Property"
link, and a "login / register" link, all right-aligned.

#### Scenario: Top bar content
- **GIVEN** the PropVault page is rendered
- **WHEN** the top bar is visible
- **THEN** it SHALL display the phone number "+880 1234 654 953"
- **AND** it SHALL display "Sell / Rent Property" link
- **AND** it SHALL display "login / register" link

#### Scenario: Top bar styling
- **GIVEN** the top bar is rendered
- **WHEN** the page is displayed
- **THEN** the top bar background SHALL be light lavender (`#f9f9ff`)
- **AND** all items SHALL be right-aligned

### Requirement: Navigation bar
The system SHALL render a main navigation bar below the top bar with a
white background, a logo, and navigation links including dropdown submenus.

#### Scenario: Navbar content
- **GIVEN** the PropVault page is rendered
- **WHEN** the navbar is visible
- **THEN** the navbar SHALL display a logo image on the left
- **AND** it SHALL display nav links: Home, Properties, About, Blog, Pages, Contact
- **AND** Blog link SHALL have a dropdown with "Blog Home" and "Blog Single"
- **AND** Pages link SHALL have a dropdown with "Agents" and "Elements"

#### Scenario: Active nav styling
- **GIVEN** the navbar is rendered
- **WHEN** the Home link is the active item
- **THEN** the active link text SHALL be coral (`#ea6c5d`)

#### Scenario: Sticky navbar
- **GIVEN** the page is scrolled past the hero
- **WHEN** the user scrolls down
- **THEN** the navbar SHALL become sticky at the top of the viewport

### Requirement: Hero section
The system SHALL render a full-screen hero section with a background image,
a dark overlay, and a headline positioned at the bottom of the viewport.

#### Scenario: Hero content
- **GIVEN** the PropVault page is rendered
- **WHEN** the hero section is visible
- **THEN** the hero SHALL display the headline "We're Real Estate King"
- **AND** the headline SHALL be positioned at the bottom center of the hero

#### Scenario: Hero overlay
- **GIVEN** the hero section is rendered
- **WHEN** the hero section is visible
- **THEN** the hero SHALL have a dark semi-transparent overlay (`rgba(0,0,0,0.18)`)

### Requirement: Property search form
The system SHALL render a search form overlapping the hero bottom with a
white background, containing a Sell/Rent toggle, four select dropdowns,
two range sliders, and a search button.

#### Scenario: Search form fields
- **GIVEN** the PropVault page is rendered
- **WHEN** the search form is visible
- **THEN** the form SHALL display a "Search Properties For" heading
- **AND** the form SHALL contain a Sell/Rent toggle switch
- **AND** the form SHALL contain selects for: Location, Property Type,
  Bedrooms (x2)
- **AND** the form SHALL contain a Price Range slider
- **AND** the form SHALL contain an Area Range slider
- **AND** the form SHALL contain a "Search Properties" button with arrow icon

#### Scenario: Search button styling
- **GIVEN** the search form is rendered
- **WHEN** the search button is visible
- **THEN** the button SHALL have coral background (`#ea6c5d`)
- **AND** the button SHALL have pill shape (border-radius 25px)

### Requirement: Featured properties
The system SHALL render a 3-column grid of property cards, each showing
an image with a badge, property details, amenities, and engagement metrics.

#### Scenario: Property cards content
- **GIVEN** the PropVault page is rendered
- **WHEN** the properties section is visible
- **THEN** it SHALL display a "Properties in Various Cities" heading
- **AND** it SHALL display 3 property cards in a row
- **AND** each card SHALL show a property image with a "For Sale" badge
- **AND** each card SHALL display a title and price (e.g. "04 Bed Duplex" / "$3.5M")
- **AND** each card SHALL display bed, bath, and area details
- **AND** each card SHALL display amenity status (Pool, Internet, Cleaning)
  with green/red indicators
- **AND** each card SHALL display likes and comments counts

#### Scenario: Property card styling
- **GIVEN** a property card is rendered
- **WHEN** the card is visible
- **THEN** the card image SHALL have no border radius
- **AND** the "For Sale" badge SHALL overlay the image

### Requirement: About section
The system SHALL render a split about section with a light lavender
background, containing three text blocks on the left and an image on the right.

#### Scenario: About content
- **GIVEN** the PropVault page is rendered
- **WHEN** the about section is visible
- **THEN** it SHALL display 3 text blocks on the left: "Why Choose Us",
  "Our Properties", and "Legal Notice" — each with heading and paragraph
- **AND** it SHALL display a large image on the right

#### Scenario: About styling
- **GIVEN** the about section is rendered
- **WHEN** the page is displayed
- **THEN** the section background SHALL be light lavender (`#f9f9ff`)

### Requirement: Cities grid
The system SHALL render an asymmetric image grid of city properties with
dark overlays and title text that fades in on hover.

#### Scenario: Cities content
- **GIVEN** the PropVault page is rendered
- **WHEN** the cities section is visible
- **THEN** it SHALL display a "Properties in Various Cities" heading
- **AND** it SHALL display 4 city cards: San Francisco (tall left),
  New York (large top-right), Boston (bottom-right-left),
  Los Angeles (bottom-right-right)

#### Scenario: Cities hover effect
- **GIVEN** a city card is rendered
- **WHEN** the user hovers over the card
- **THEN** the city title SHALL fade in from the bottom

### Requirement: Testimonials carousel
The system SHALL render a testimonial carousel with client avatars,
quotes, names, and titles on a light lavender background.

#### Scenario: Testimonials content
- **GIVEN** the PropVault page is rendered
- **WHEN** the testimonials section is visible
- **THEN** it SHALL display a "Feedback from our real clients" heading
- **AND** it SHALL show at least 3 testimonial cards in a carousel
- **AND** each card SHALL display a circular avatar, quote text,
  client name, and title

#### Scenario: Testimonials styling
- **GIVEN** the testimonials section is rendered
- **WHEN** the page is displayed
- **THEN** the section background SHALL be light lavender (`#f9f9ff`)
- **AND** avatar images SHALL be circular (`rounded-full`)

### Requirement: Blog section
The system SHALL render a 3-column grid of blog post cards, each showing
an image, title, excerpt, and engagement metadata.

#### Scenario: Blog cards content
- **GIVEN** the PropVault page is rendered
- **WHEN** the blog section is visible
- **THEN** it SHALL display 3 blog cards in a row
- **AND** each card SHALL have a thumbnail image, title link, excerpt text,
  and a meta row with date, likes count, and comments count

### Requirement: Footer
The system SHALL render a dark footer with four columns (About Us,
Newsletter, Instagram Feed, Follow Us) and a copyright bar linking to
Component Dock.

#### Scenario: Footer content
- **GIVEN** the PropVault page is rendered
- **WHEN** the footer is visible
- **THEN** it SHALL display an "About Us" column with description text
- **AND** it SHALL display a "Newsletter" column with email input and submit
- **AND** it SHALL display an "Instagram Feed" column with a grid of images
- **AND** it SHALL display a "Follow Us" column with social icons
  (Facebook, Twitter, Dribbble, Behance)
- **AND** the bottom bar SHALL display copyright text and link to Component Dock

#### Scenario: Footer styling
- **GIVEN** the footer is rendered
- **WHEN** the page is displayed
- **THEN** the footer background SHALL be dark charcoal (`#222222`)
- **AND** footer headings SHALL be white
- **AND** footer text SHALL be light/muted

### Requirement: Responsive design
The system SHALL render all sections responsively, stacking columns on
mobile and showing multi-column layouts on desktop.

#### Scenario: Mobile layout
- **GIVEN** the PropVault page is rendered on a viewport < 768px
- **WHEN** the page is displayed
- **THEN** all multi-column sections SHALL stack into a single column
- **AND** the navbar SHALL collapse into a hamburger menu

#### Scenario: Tablet layout
- **GIVEN** the PropVault page is rendered on a viewport 768px-1024px
- **WHEN** the page is displayed
- **THEN** property cards SHALL display 2 columns or stacked
- **AND** section padding SHALL reduce to 80px

## Verification checklist

- [ ] All 10 sections render correctly in order
- [ ] Design tokens match: coral `#ea6c5d`, lavender `#f9f9ff`, footer `#222222`
- [ ] Font: "Poppins" from Google Fonts
- [ ] Top bar shows phone, sell/rent, login/register links
- [ ] Navbar has logo + 6 links with dropdowns
- [ ] Hero has full-screen bg image + overlay + headline at bottom
- [ ] Search form has toggle, 4 selects, 2 sliders, search button
- [ ] Property cards show "For Sale" badge + details + amenities
- [ ] About section is split layout (text left, image right)
- [ ] Cities grid has 4 cards with hover fade-in
- [ ] Testimonials carousel works with circular avatars
- [ ] Blog section shows 3 cards with meta row
- [ ] Footer has 4 columns + Component Dock link
- [ ] Responsive: mobile stacks, hamburger menu works
- [ ] No ColorLib references in app code
- [ ] Footer link to https://www.componentdock.com/
