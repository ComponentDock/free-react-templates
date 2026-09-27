# Template: Homelink (Real Estate Template)

## Purpose

Homelink is a single-page real-estate landing template in the
free-react-templates monorepo. It is a React recreation of the ColorLib
free "Homespace" website template design, built under a different name
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Homespace" — real estate / property listing template
  (source: https://colorlib.com/wp/template/homespace/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/homespace/
  (HTTP 200, full rendered DOM + `css/style.css` (22KB) extracted).
  The TEMPLATES.md screenshot (`homespace-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Top bar (phone, email, social links) → Navbar
  ("HomeSpace." logo, nav links) → Hero slider (property images with
  overlay text, address, price, rooms info) → Features (3 icon cards:
  "Wide Range of Properties", "Rent or Sale", "Property Location") →
  New Properties (6 property cards in a 3-column grid, each with image,
  price, address, area/beds/baths/garages) → Our Services (4 service
  cards: Research Suburbs, Sold Houses, Security Priority, plus one more)
  → Our Blog (3 blog post cards) → Our Agents (3 agent cards with
  circular avatar, name, role) → Footer (About, Navigations, Follow Us
  columns + copyright).
- **Design tokens extracted from `css/style.css`:**
  - Primary accent: **orange `#f89d13`** (buttons, highlights).
  - Dark backgrounds: `#25262a` (footer bg), `#333333`.
  - Light section backgrounds: `#edf0f5`, `#f8f9fa`, `#f9f9f9`.
  - Gray text: `#777`, `#737373`.
  - Borders: `#e6e6e6`, `#cccccc`.
  - Fonts: **"Nunito Sans"** (body, sans-serif stack) +
    **"Roboto Mono"** (monospace accent).
  - Border-radius: mostly `0%` (sharp corners), `50%` for circular avatars.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/homelink-<n>/<w>/<h>`); icons → lucide-react;
  forms prevent default (no backend); no assets copied.
  Footer MUST link `https://www.componentdock.com/` (branded "Component Dock").
  No reference to ColorLib in app code — provenance only in spec and PR.

Homelink lives in `apps/homelink` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Top bar

The system SHALL render a thin top bar above the navbar with phone number,
email address, and social media icon links (Facebook, Twitter, LinkedIn).

#### Scenario: Top bar content

- **GIVEN** the Homelink page is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL display a phone number and email address on the left
- **AND** the top bar SHALL display social media icon links (Facebook, Twitter, LinkedIn) on the right
- **AND** the top bar SHALL have a white background with a bottom border

### Requirement: Navigation bar

The system SHALL render a sticky navigation bar with the brand name
"Homelink" and anchor links to page sections.

#### Scenario: Navbar content

- **GIVEN** the Homelink page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the brand name "Homelink" on the left
- **AND** the navbar SHALL show navigation links: Home, About, Properties, Services, Blog, Agents, Contact
- **AND** the navbar SHALL show a mobile hamburger menu on small screens
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero slider

The system SHALL render a full-width hero carousel displaying property
images with overlay text including address, price, and room details.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero slider is displayed
- **THEN** it SHALL show at least 2 property slides
- **AND** each slide SHALL contain a property address, price, and room details (beds, baths)
- **AND** each slide SHALL have a "See Properties" CTA button
- **AND** the hero SHALL have a semi-transparent dark overlay on the text

### Requirement: Features section

The system SHALL render a 3-column features section on a light background
highlighting key property categories.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show 3 feature cards: "Wide Range of Properties", "Rent or Sale", "Property Location"
- **AND** each card SHALL have an icon, a heading, and a short description
- **AND** the section SHALL have a light gray background

### Requirement: New Properties section

The system SHALL render a property listing grid showing 6 property cards
with images, prices, addresses, and room details.

#### Scenario: Property cards content

- **GIVEN** the page is rendered
- **WHEN** the properties section is displayed
- **THEN** it SHALL show 6 property cards in a 3-column grid
- **AND** each card SHALL display a property image, price (e.g. "$1,930,000"), and address
- **AND** each card SHALL show area, beds, baths, and garages info
- **AND** each card SHALL have a "More Details" link

#### Scenario: Section heading

- **GIVEN** the page is rendered
- **WHEN** the properties section is displayed
- **THEN** it SHALL have a heading "New Properties for You"

### Requirement: Services section

The system SHALL render a 4-column services section on a light background.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show 4 service cards: "Research Suburbs", "Sold Houses", "Security Priority", and one additional service
- **AND** each card SHALL have an icon, a heading, and a description
- **AND** each card SHALL have a "Learn More" link
- **AND** the section SHALL have a light background

### Requirement: Blog section

The system SHALL render a blog post grid showing 3 blog cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show 3 blog post cards
- **AND** each card SHALL have a post image, a heading, and a brief excerpt
- **AND** each card SHALL link to the full post

### Requirement: Agents section

The system SHALL render a team/agents section showing 3 agent cards
with circular avatars.

#### Scenario: Agents content

- **GIVEN** the page is rendered
- **WHEN** the agents section is displayed
- **THEN** it SHALL show 3 agent cards
- **AND** each card SHALL have a circular avatar image, agent name, and role
- **AND** the section SHALL have a dark background

### Requirement: Footer

The system SHALL render a multi-column footer with about text,
navigation links, and social follow links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL have 3 columns: "About Homelink", "Navigations", "Follow Us"
- **AND** the navigation column SHALL contain: Home, Buy, Rent, Properties, About Us, Privacy Policy, Contact Us, Terms
- **AND** the footer SHALL have a dark background with light text
- **AND** the footer SHALL contain a "Made with Component Dock" attribution link to `https://www.componentdock.com/`

## Verification checklist

- [ ] All 9 sections rendered in correct order: Top bar → Navbar → Hero slider → Features → Properties → Services → Blog → Agents → Footer
- [ ] Top bar has phone, email, social icons
- [ ] Navbar has brand name "Homelink" + 7 nav links + mobile menu
- [ ] Hero slider has property slides with address, price, rooms, CTA
- [ ] Features section has 3 cards on light background
- [ ] Properties section has 6 cards in 3-column grid with price/address/rooms
- [ ] Services section has 4 cards with icons + "Learn More" links
- [ ] Blog section has 3 post cards
- [ ] Agents section has 3 cards with circular avatars on dark background
- [ ] Footer has 3 columns + Component Dock attribution link
- [ ] Dark mode toggle works via `.dark` class on document root
- [ ] Mobile hamburger menu opens/closes
- [ ] No reference to ColorLib in app code (only spec, TEMPLATES.md, PR)
- [ ] All placeholder images use seeded picsum URLs
- [ ] Design tokens match: orange `#f89d13` accent, Nunito Sans font, dark `#25262a` footer
