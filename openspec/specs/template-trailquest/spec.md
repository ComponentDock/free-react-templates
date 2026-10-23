# Template: Trailquest (Travel Agency)

## Purpose

A Travel Agency template with dark, hero, search tabs, features intro, featured destinations and services sections. Recreation of ColorLib's "Adventure 2" template as a React 19 + Vite + Tailwind 4 + TypeScript travel agency website.

- **Source**: ColorLib "Adventure 2" — https://colorlib.com/wp/template/adventure-2/
- **Preview**: https://preview.colorlib.com/theme/adventure2/ (note: URL uses "adventure2" without hyphen)
- **Stack**: Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category**: Travel / Tourism Agency

## Design tokens

Extracted from the live preview's stylesheets (`css/style.css`).

### Fonts

| Role               | Font family            | Weights            |
| ------------------ | ---------------------- | ------------------ |
| Headings / Display | Abril Fatface, cursive | 400                |
| Body / UI          | Poppins, sans-serif    | 300, 400, 500, 600 |
| Secondary          | Work Sans, sans-serif  | 300, 400, 500      |

Use Google Fonts `<link>` for Abril Fatface, Poppins, and Work Sans.

### Colors

| Token               | Hex / Value           | Usage                                      |
| ------------------- | --------------------- | ------------------------------------------ |
| primary accent      | `#08c299`             | Active elements, buttons, green accent     |
| active pill bg      | `#78d5ef`             | Search tab active background (light blue)  |
| scrolled nav active | `#f9be37`             | Active nav link when scrolled (amber/gold) |
| navbar bg           | `#1d2124`             | Dark navbar background                     |
| footer bg           | `#222831`             | Footer background (dark gray-blue)         |
| footer alt          | `#3c312e`             | Footer section alt background              |
| background          | `#FFFFFF` (white)     | Main content sections                      |
| light section bg    | `#f8f9fa`             | Alternate section backgrounds              |
| text primary        | `#212529`             | Body text, headings                        |
| text muted          | `#666666`             | Secondary text                             |
| text light          | `#999999`             | Light muted text                           |
| overlay             | `rgba(0,0,0,0.4-0.6)` | Hero dark overlay on background image      |
| counter text        | `#FFFFFF`             | Counter numbers and labels (on dark bg)    |

### Border radius

| Element               | Radius        |
| --------------------- | ------------- |
| Buttons (pill-shaped) | `25px`–`30px` |
| Search tab pills      | `0.25rem`     |
| Cards                 | `0.25rem`     |
| Circular avatars      | `50%`         |

## Requirements

### Requirement: Dark navbar

The system SHALL render a dark navbar with the brand name "Trailquest" (white text), and navigation links for Home, About, Places, Hotels, Blog, Contact. The navbar SHALL be sticky and darken/compact on scroll. On mobile, a hamburger toggle SHALL show/hide the collapsible nav.

#### Scenario: Desktop navbar content

- **GIVEN** the Trailquest page is loaded on a desktop viewport
- **THEN** the navbar SHALL display the brand "Trailquest" in white text
- **AND** the navbar SHALL show navigation links for Home, About, Places, Hotels, Blog, Contact

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on a mobile viewport
- **WHEN** the user taps the hamburger toggle button
- **THEN** the mobile menu SHALL open, displaying all nav links
- **AND** the toggle icon SHALL change state

#### Scenario: Scroll behavior

- **GIVEN** the page is scrolled past the hero
- **THEN** the navbar SHALL apply a scrolled style (background change, active link highlight in amber `#f9be37`)

### Requirement: Hero section

The system SHALL render a full-viewport hero section with a background image (travel/landscape), a dark overlay, the heading "Discover A new Place", and a subtitle "Find great places to stay, eat, shop, or visit from local experts".

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **THEN** the hero SHALL display the heading "Discover A new Place"
- **AND** the hero SHALL display the subtitle text
- **AND** the hero SHALL have a full-height background image with dark overlay

### Requirement: Search tabs

The system SHALL render a tabbed search widget overlapping the hero section with 3 tabs: Flight, Hotel, Car Rent. Each tab SHALL contain a search form with relevant fields (e.g., From/To/Date for Flight, Location/Date/Guests for Hotel, Pick-up/Date for Car Rent) and a "Search" button.

#### Scenario: Three search tabs

- **GIVEN** the page is rendered
- **THEN** 3 search tabs SHALL be displayed: Flight, Hotel, Car Rent
- **AND** the Flight tab SHALL be active by default
- **AND** each tab SHALL contain a search form with appropriate fields

#### Scenario: Tab switching

- **GIVEN** the page is rendered
- **WHEN** the user clicks a non-active tab
- **THEN** the clicked tab SHALL become active (background `#78d5ef`)
- **AND** the corresponding search form SHALL be displayed

### Requirement: Features intro section

The system SHALL render a features intro section (light background) with 3 numbered items: "01 Travel", "02 Experience", "03 Relax", each with a description paragraph.

#### Scenario: Three features

- **GIVEN** the page is rendered
- **THEN** 3 feature items SHALL be displayed in a row
- **AND** each item SHALL have a number (01, 02, 03), a heading, and a description

### Requirement: Featured destinations

The system SHALL render a featured destinations section with the heading "See our latest vacation ideas" and 3 image cards with dark overlays and destination names.

#### Scenario: Three featured destinations

- **GIVEN** the page is rendered
- **THEN** 3 destination image cards SHALL be displayed
- **AND** each card SHALL have a background image with overlay and a destination name

### Requirement: Services section

The system SHALL render a services section (light background) with 4 service cards: Special Activities, Travel Arrangements, Private Guide, Location Manager. Each card SHALL have a flaticon icon, heading, and description.

#### Scenario: Four services

- **GIVEN** the page is rendered
- **THEN** 4 service cards SHALL be displayed in a row
- **AND** each card SHALL have an icon, heading, and description

### Requirement: Popular destinations section

The system SHALL render a popular destinations section with the heading "Most Popular Destination" and multiple destination cards. Each card SHALL have a background image with hover icon, destination name, star rating, price, description, duration, location, and "Discover" link. Cards SHALL alternate layout (image-top vs image-bottom) on desktop.

#### Scenario: Destination cards

- **GIVEN** the page is rendered
- **THEN** multiple destination cards SHALL be displayed
- **AND** each card SHALL have an image, name, star rating, price, description, duration, location, and "Discover" link
- **AND** cards SHALL alternate between image-above-text and image-below-text layouts

### Requirement: Counter section

The system SHALL render a counter section with a dark background image, displaying 4 animated stat items: 100,000 Happy Customers, 40,000 Destination Places, 87,000 Hotels, 56,400 Restaurant. Counters SHALL animate from 0 to target values when scrolled into view.

#### Scenario: Counter animation

- **GIVEN** the counter section scrolls into view
- **THEN** the counters SHALL animate from 0 to their final values
- **AND** the numbers SHALL use the Abril Fatface font

### Requirement: Testimonials section

The system SHALL render a testimonials section with the heading "Our satisfied customer says" and a carousel of 5 testimonial cards. Each card SHALL have a circular user photo with quote icon overlay, a quote paragraph, the customer's name, and their position/title.

#### Scenario: Testimonial carousel

- **GIVEN** the page is rendered
- **THEN** a testimonial carousel SHALL be displayed
- **AND** 5 testimonial cards SHALL be available
- **AND** each card SHALL have a circular photo, quote, name, and position

### Requirement: Blog section

The system SHALL render a blog section (light background) with the heading "Tips & Articles" and 3 blog cards. Each card SHALL have a background image, category tag, title, date, author, and comment count.

#### Scenario: Three blog posts

- **GIVEN** the page is rendered
- **THEN** 3 blog cards SHALL be displayed
- **AND** each card SHALL have an image, tag, title, date, author, and comment count

### Requirement: Newsletter section

The system SHALL render a newsletter section with a parallax background image, heading "Subscribe to our Newsletter", descriptive text, and an email input with "Subscribe" button.

#### Scenario: Newsletter form

- **GIVEN** the page is rendered
- **THEN** an email input and Subscribe button SHALL be displayed
- **AND** the section SHALL have a parallax background effect

### Requirement: Footer

The system SHALL render a dark footer (`#222831` background) with 4 columns: brand name + social icons (Twitter, Facebook, Instagram), Information links (About Us, Online enquiry, Call Us, General enquiries, Booking Conditions, Privacy and Policy, Refund policy), Experience links (Beach, Adventure, Wildlife, Honeymoon, Nature, Party), and contact info (address, phone, email). A copyright line with "Made with Component Dock" link pointing to https://www.componentdock.com/ SHALL appear at the bottom.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **THEN** the footer SHALL display the brand "Trailquest" with social icons
- **AND** Information and Experience link columns SHALL be present
- **AND** contact info with address, phone, and email SHALL be displayed
- **AND** a copyright line SHALL appear at the bottom

#### Scenario: Footer Component Dock link

- **GIVEN** the footer is rendered
- **THEN** the copyright area SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock"
- **AND** no ColorLib references SHALL appear in the app code

#### Scenario: No ColorLib references

- **GIVEN** the app source code is inspected
- **THEN** no file under `apps/trailquest/` SHALL contain the string "colorlib" (case-insensitive)

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/trailquest/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/trailquest/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Dark navbar — the navbar SHALL display the brand "Trailquest" in white text
- [ ] Hero section — the hero SHALL display the heading "Discover A new Place"
- [ ] Search tabs — 3 search tabs SHALL be displayed: Flight, Hotel, Car Rent
- [ ] Features intro section — 3 feature items SHALL be displayed in a row
- [ ] Featured destinations — 3 destination image cards SHALL be displayed
- [ ] Services section — 4 service cards SHALL be displayed in a row
- [ ] Popular destinations section — multiple destination cards SHALL be displayed
- [ ] Counter section — the counters SHALL animate from 0 to their final values
- [ ] Testimonials section — a testimonial carousel SHALL be displayed
- [ ] Blog section — 3 blog cards SHALL be displayed
- [ ] Newsletter section — an email input and Subscribe button SHALL be displayed
