# Template: EcoGrove (Real Estate)

## Purpose

EcoGrove is a real estate website template in the free-react-templates monorepo.
It is an original React recreation of the ColorLib free "Ecoverde" website
template design (see TEMPLATES.md), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Ecoverde" — real estate agency template
  (source: https://colorlib.com/wp/template/ecoverde/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/ecoverde/
  (HTTP 200 — full rendered DOM + `css/style.css` (78 KB) extracted;
  Bootstrap 4 + owl.carousel + flaticon icon fonts + Font Awesome).
  The TEMPLATES.md screenshot (`ecoverde-free-template.jpg`) matches this
  reconstruction.
- **Section order (1:1):**
  1. Navbar (dark bg): logo "Ecoverde" + Home, About, Properties, Blog,
     Agents, Contact links + hamburger icon.
  2. Hero (background image, overlay): "Find Perfect House From Your Area."
     + blurb + "View all properties" CTA button (blue).
  3. Search bar (dark navy bg `#21243d`, overlapping hero bottom): 4-column
     form — Keyword, Property Type, Price Range, Location + search button.
  4. Services row (green `#24A148` bg, 4 columns): "Trusted by Thousands",
     "Wide Range of Properties", "Financing Made Easy", "Locked in Pricing"
     — each with icon + heading + blurb.
  5. Featured Properties (carousel): property cards with image, price badge
     (Sale/Rent), bed/bath/sqft icons, agent name + photo, "2 weeks ago".
  6. Cities grid (3 columns): Miami (24 Properties), Chicago (20), Illinois
     (15) — background images with overlay text.
  7. How it works (dark bg `bg-darken`, 4 steps): numbered 01–04 with blob
     icon — "Evaluate Property", "Meet Your Agent", "Close the Deal",
     "Have Your Property".
  8. Stats counter (parallax bg): 1000 Area Population, 2500 Total
     Properties, 500 Average House, 67 Total Branches.
  9. Testimonials (light bg, carousel): quote + name + position cards.
  10. Our Agents (4 columns): agent photo + name + listing count per card.
  11. Recent Blog (4 columns): blog cards with image, date, author, comment
      count, title.
  12. Footer (dark `#0f101c` bg): brand + Community/About/Company link
      columns + contact info + social icons + Component Dock link.
- **Design tokens extracted from `style.css`:**
  - Primary **green `#24A148`** (services bg, subheading accents).
  - Green variants: **`#219442`** (darken), **`#229944`** (lighten).
  - Bootstrap blue **`#007bff`** (btn-primary, bg-primary).
  - Search wrap bg **`#21243d`** (dark navy).
  - Footer bg **`#0f101c`** (near-black).
  - Light section bg **`#f8f9fa`**; dark text **`#000000`**; muted text
    **`#6c757d`**; dark heading **`#212529`**.
  - Fonts: **"Nunito Sans"**, Arial, sans-serif (Google Font).
  - Buttons: Bootstrap `.btn-primary` — blue `#007bff`, white text,
    rounded (Bootstrap default radius ~4px).
  - Section backgrounds: green services row, dark navy search wrap,
    light gray testimonials, dark "how it works" section, parallax stats,
    near-black footer.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/ecogrove-<n>/<w>/<h>`); icons → lucide-react;
  carousel → embla (NOT owl-carousel); forms prevent default (no backend);
  no assets copied. Footer links to Component Dock.

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "EcoGrove",
anchor links to the page sections, and a hamburger menu for mobile.

#### Scenario: Navbar content

- **GIVEN** the EcoGrove page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "EcoGrove" and links to Home,
  About, Properties, Blog, Agents, and Contact
- **AND** the navbar SHALL display a hamburger icon on mobile

#### Scenario: Sticky navbar behavior

- **GIVEN** the page is scrolled past the hero
- **WHEN** the user scrolls down
- **THEN** the navbar SHALL become visible/sticky at the top of the viewport

### Requirement: Hero section

The system SHALL render a full-width hero section with a background image,
a headline, a blurb paragraph, and a "View all properties" CTA button.

#### Scenario: Hero content

- **GIVEN** the EcoGrove page is rendered
- **WHEN** the hero section is visible
- **THEN** the hero SHALL display the headline "Find Perfect House From Your Area."
- **AND** the hero SHALL display a descriptive paragraph below the headline
- **AND** the hero SHALL display a "View all properties" button

#### Scenario: Hero overlay

- **GIVEN** the hero section is rendered
- **WHEN** the hero section is visible
- **THEN** the hero SHALL have a semi-transparent overlay over the background image

### Requirement: Property search bar

The system SHALL render a search form with four fields (Keyword, Property
Type, Price Range, Location) and a search button, styled with a dark navy
background and overlapping the hero section.

#### Scenario: Search form fields

- **GIVEN** the EcoGrove page is rendered
- **WHEN** the search bar section is visible
- **THEN** the search form SHALL contain a Keyword text input
- **AND** the search form SHALL contain a Property Type select dropdown
- **AND** the search form SHALL contain a Price Range select dropdown
- **AND** the search form SHALL contain a Location select dropdown
- **AND** the search form SHALL contain a search button

#### Scenario: Search form styling

- **GIVEN** the search bar is rendered
- **WHEN** the page is displayed
- **THEN** the search wrap SHALL have a dark navy background (`#21243d`)
- **AND** the search bar SHALL visually overlap the hero section bottom

### Requirement: Services features row

The system SHALL render a 4-column row of service features on a green
background, each with an icon, heading, and description.

#### Scenario: Services content

- **GIVEN** the EcoGrove page is rendered
- **WHEN** the services row is visible
- **THEN** it SHALL display 4 feature cards: "Trusted by Thousands",
  "Wide Range of Properties", "Financing Made Easy", and "Locked in Pricing"
- **AND** each card SHALL have an icon, heading, and description text

#### Scenario: Services styling

- **GIVEN** the services row is rendered
- **WHEN** the page is displayed
- **THEN** the services row background SHALL be green (`#24A148`)
- **AND** alternating cards SHALL use slightly different green shades

### Requirement: Featured properties carousel

The system SHALL render a carousel of featured property cards, each showing
an image, price badge (Sale/Rent), bed/bath/sqft details, property name,
location, and agent info.

#### Scenario: Property cards

- **GIVEN** the EcoGrove page is rendered
- **WHEN** the Featured Properties section is visible
- **THEN** it SHALL display at least 3 property cards in a carousel
- **AND** each card SHALL show a property image, price badge, bed/bath/sqft
  icons, property name, location, and agent name with photo

#### Scenario: Property card badges

- **GIVEN** a property card is rendered
- **WHEN** the card is visible
- **THEN** each card SHALL display either a "Sale" or "Rent" badge
- **AND** the card SHALL display the property price

### Requirement: Cities grid

The system SHALL render a 3-column grid of city cards with background images
and overlay text showing city name and property count.

#### Scenario: Cities content

- **GIVEN** the EcoGrove page is rendered
- **WHEN** the Cities section is visible
- **THEN** it SHALL display 3 city cards: Miami (24 Properties),
  Chicago (20 Properties), and Illinois (15 Properties)
- **AND** each card SHALL have a background image with text overlay

### Requirement: How it works steps

The system SHALL render a 4-step process section on a dark background, each
step with a number, icon, title, and description.

#### Scenario: Steps content

- **GIVEN** the EcoGrove page is rendered
- **WHEN** the "How it works" section is visible
- **THEN** it SHALL display 4 steps: "Evaluate Property" (01),
  "Meet Your Agent" (02), "Close the Deal" (03), "Have Your Property" (04)
- **AND** each step SHALL have a numbered badge and descriptive text

#### Scenario: Steps styling

- **GIVEN** the "How it works" section is rendered
- **WHEN** the page is displayed
- **THEN** the section background SHALL be dark
- **AND** the subheading "Work flow" SHALL appear in green accent color

### Requirement: Statistics counter

The system SHALL render a statistics section with 4 counters on a parallax
background, showing: 1000 Area Population, 2500 Total Properties, 500
Average House, and 67 Total Branches.

#### Scenario: Counter content

- **GIVEN** the EcoGrove page is rendered
- **WHEN** the stats counter section is visible
- **THEN** it SHALL display 4 stat items with numbers and labels
- **AND** the numbers SHALL be: 1000, 2500, 500, 67

#### Scenario: Counter styling

- **GIVEN** the stats counter is rendered
- **WHEN** the page is displayed
- **THEN** the section SHALL have a parallax background image

### Requirement: Testimonials carousel

The system SHALL render a testimonials section with a carousel of client
quotes, each showing a quote, client name, and position.

#### Scenario: Testimonials content

- **GIVEN** the EcoGrove page is rendered
- **WHEN** the Testimonials section is visible
- **THEN** it SHALL display a "Testimonial" subheading and "Happy Clients" heading
- **AND** it SHALL show at least 3 testimonial cards in a carousel

#### Scenario: Testimonial card structure

- **GIVEN** a testimonial card is rendered
- **WHEN** the card is visible
- **THEN** it SHALL display a quote icon, a paragraph of text, the client
  name, and their position

### Requirement: Our agents

The system SHALL render a 4-column grid of agent cards, each showing a
photo, name, listing count, and detail count.

#### Scenario: Agents content

- **GIVEN** the EcoGrove page is rendered
- **WHEN** the Our Agents section is visible
- **THEN** it SHALL display 4 agent cards: Carlos Henderson, Mike Bochs,
  Jessica Moore, and Sarah Geronimo
- **AND** each card SHALL show a photo, name, and "10 Properties" detail

### Requirement: Recent blog

The system SHALL render a 4-column grid of blog post cards, each showing
an image, date, author, comment count, and title.

#### Scenario: Blog cards

- **GIVEN** the EcoGrove page is rendered
- **WHEN** the Recent Blog section is visible
- **THEN** it SHALL display 4 blog cards in a row
- **AND** each card SHALL have a background image, date, author name,
  comment count, and article title

### Requirement: Footer

The system SHALL render a dark footer with brand info, link columns (Community,
About Us, Company, Have a Questions?), social icons, and a Component Dock link.

#### Scenario: Footer content

- **GIVEN** the EcoGrove page is rendered
- **WHEN** the footer is visible
- **THEN** it SHALL display the brand name "EcoGrove" with a description
- **AND** it SHALL show link columns: Community, About Us, Company, Questions
- **AND** it SHALL show social media icons (Twitter, Facebook, Instagram)
- **AND** it SHALL link to Component Dock

#### Scenario: Footer styling

- **GIVEN** the footer is rendered
- **WHEN** the page is displayed
- **THEN** the footer background SHALL be near-black (`#0f101c`)
- **AND** footer text SHALL be white/light with muted link colors

### Requirement: Responsive design

The system SHALL render all sections responsively, stacking columns on
mobile and showing multi-column layouts on desktop.

#### Scenario: Mobile layout

- **GIVEN** the EcoGrove page is rendered on a viewport < 768px
- **WHEN** the page is displayed
- **THEN** all multi-column sections SHALL stack into a single column
- **AND** the navbar SHALL collapse into a hamburger menu

## Verification checklist

- [ ] All 12 sections render correctly in order
- [ ] Design tokens match: green `#24A148`, blue `#007bff`, navy `#21243d`, footer `#0f101c`
- [ ] Font: "Nunito Sans" from Google Fonts
- [ ] Property cards show Sale/Rent badges
- [ ] Cities grid has 3 items with overlay text
- [ ] Steps section shows numbered 01-04
- [ ] Counters display correct numbers
- [ ] Testimonials carousel works
- [ ] Agents section shows 4 cards
- [ ] Blog section shows 4 cards
- [ ] Footer links to Component Dock
- [ ] Responsive: mobile stacks, hamburger menu works
- [ ] No ColorLib references in app code
- [ ] Footer link to https://www.componentdock.com/
