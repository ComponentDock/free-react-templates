# Spec: Propwise (recreation of ColorLib Real Estate)

## Purpose

Propwise is a single-page real estate agency website template in the
free-react-templates monorepo. It is an original React recreation of
the ColorLib free "Real Estate" website template
(source: https://colorlib.com/wp/template/real-estate/,
preview: https://preview.colorlib.com/theme/real-estate/ — 404 at
time of prep; screenshot used as primary reference), built under a
DIFFERENT name (Propwise — a property-focused name; single lowercase
word, no collision with apps/ or existing specs) per the monorepo
naming mandate.

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Reference & provenance

- ColorLib slug: `real-estate`
- Preview URL: https://preview.colorlib.com/theme/real-estate/ (404)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/realestate-free-realstate-website-template.jpg
- Design category: Real Estate / Agency

## Design tokens

Extracted from screenshot analysis (preview unreachable, tokens inferred):

- Font: Poppins (Google Fonts, weights 400/500/600/700) — standard ColorLib
  real-estate typeface
- Heading color: #1a1a2e (dark navy/near-black) for section headings
- Body text: #666666 (medium gray) for descriptions
- Primary brand color: #e74c3c (warm red/coral) — used on "Sell" badge,
  search button, price range highlights
- Secondary accent: #f39c12 (warm amber/gold) — range slider thumbs,
  warm overlay tones
- Hero overlay: warm golden/amber gradient over cityscape photo
- Card background: #ffffff (white) with subtle shadow
- Section background: #f8f9fa (light gray) for alternating sections
- Navbar: transparent over hero, solid white on scroll
- Button radius: ~4px (slightly rounded, rectangular)
- Hero text: white, bold, uppercase, large (approx 48px)

## Requirements

### Requirement: Top utility bar renders contact and auth links
The template SHALL display a thin top utility bar above the main navbar
with a phone number, "Sell / Rent Property" link, and "Login / Register"
link, right-aligned.

#### Scenario: Desktop utility bar renders
- **WHEN** the page loads on desktop
- **THEN** the top bar shows a phone number ("+12312-3-1209" or similar)
- **AND** a "Sell / Rent Property" link is visible
- **AND** a "Login / Register" link is visible

#### Scenario: Utility bar is hidden on mobile
- **WHEN** the page loads on mobile
- **THEN** the top utility bar is hidden or collapsed

### Requirement: Navbar renders navigation links
The template SHALL display a sticky navbar with a logo ("Propwise" or
similar brand mark) and navigation links (Home, Service, Property,
Contact).

#### Scenario: Desktop nav shows all links
- **WHEN** the page loads on desktop
- **THEN** the navbar shows Home, Service, Property, and Contact links
- **AND** the logo is visible on the left

#### Scenario: Mobile menu toggles open and closed
- **WHEN** the user clicks the hamburger button
- **THEN** the mobile navigation menu opens with all nav links
- **AND** clicking a link closes the menu

### Requirement: Hero section displays headline and property search
The template SHALL display a full-width hero section with a cityscape
background image, a warm golden overlay, a bold white heading
("We're Real Estate King"), and a property search form card.

#### Scenario: Hero heading renders
- **WHEN** the page loads
- **THEN** the hero shows "We're Real Estate King" in bold white uppercase
- **AND** a cityscape background image is visible

#### Scenario: Search form renders with fields
- **WHEN** the page loads
- **THEN** a white search card overlays the hero with dropdowns for
  location, property type, and bedrooms
- **AND** price range and area range sliders are visible
- **AND** a "Search Properties" button is rendered

#### Scenario: Sell/Rent toggle works
- **WHEN** the user clicks the "Sell" or "Rent" toggle in the search form
- **THEN** the active state toggles between Sell and Rent
- **AND** the active option is highlighted in the brand red color

### Requirement: Features section shows three service cards
The template SHALL display a "Why we are the best" section with three
feature cards in a row: Expert Technicians, Professional Service, and
Great Support, each with an icon, heading, and description.

#### Scenario: Three feature cards render
- **WHEN** the page loads
- **THEN** three feature cards are visible: Expert Technicians,
  Professional Service, Great Support
- **AND** each card has an icon, a heading, and a short description

#### Scenario: Section heading and subtitle render
- **WHEN** the page loads
- **THEN** "Why we are the best" heading is visible
- **AND** the subtitle "Who are in extremely love with eco friendly system"
  (or similar) is visible

### Requirement: Property listings section displays properties
The template SHALL display a property listings section with property
cards showing an image, price, location, and key details (bedrooms,
bathrooms, area).

#### Scenario: Property cards render
- **WHEN** the page loads
- **THEN** at least 6 property cards are displayed in a grid
- **AND** each card shows an image, price, location, and property details

#### Scenario: Property card hover effect
- **WHEN** the user hovers over a property card
- **THEN** a subtle hover effect (shadow or scale) is applied

### Requirement: About/CTA section renders
The template SHALL display a call-to-action section with a background
image, heading, description, and action button.

#### Scenario: CTA section renders
- **WHEN** the page loads
- **THEN** a CTA section with a heading and button is visible

### Requirement: Footer links to Component Dock
The template SHALL display a footer with navigation links, company info,
and a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer Component Dock link
- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text mentions "Component Dock"

#### Scenario: Footer has navigation columns
- **WHEN** the page loads
- **THEN** the footer shows column sections (About, Quick Links, etc.)
