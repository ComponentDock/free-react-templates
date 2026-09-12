# Template: Homestead (Real Estate / Property)

## Purpose

Homestead is a single-page real-estate website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Estate" website template
(source: https://colorlib.com/wp/template/estate/ — "Real Estate | HTML Template"),
built under a DIFFERENT name (Homestead), per the monorepo naming mandate
(never reuse the ColorLib source name).

## Design reference (replication findings)

- **Original:** ColorLib "Estate" — page title "Real Estate | HTML Template".
  Bootstrap 4 based with Sarabun Google Font, teal accent color.
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/estate/` —
  HTTP 200, ~28 KB HTML (REACHABLE). Stylesheet: `css/style.css` (~28 KB).
  Screenshot `estate-free-template.jpg` viewed.

- **Section order (1:1 from live DOM):**
  1. **Header/navbar** (`header.header-section`): brand logo image left,
     nav links right: Home, About Us, Property, Developments, News, Contact.
     Hamburger toggler for mobile.
  2. **Hero** (`section.hero-section`): background slider with 3 slides,
     each showing a property headline (e.g. "3 Modern homes for modern
     thinking people."). Social icons on right side (Facebook, LinkedIn,
     Twitter, YouTube, Instagram). Bottom details slider showing bedroom
     versions (3/4/6 bedrooms), availability, and price ($145,000).
  3. **Features icons** (`div.features-icons-section`): 9 icon items in a
     horizontal row — Easy Buying, Ready to Move, Great Location, Community
     Pool, 30% Park, Sunny Location, Modern Design, Parking Spaces, Garage
     Included. Light background, subtle icon+text pairs.
  4. **Intro/Our Houses** (`section.intro-section`): "Our Houses" heading,
     two rows of image+text alternating (8-col image + 4-col text, then
     reversed). Each row has a villa title, image, description paragraph,
     and "MORE INFO" button.
  5. **Design/Gallery** (`section.design-section`): dark background, "Our
     Houses" heading (light variant), image carousel with lightbox-style
     icons, two text columns below (Interior, Environment Friendly) with
     descriptions.
  6. **Location** (`section.location-section`): "Location" heading, tabbed
     section with large images and play button overlays, 4 thumbnail tabs
     below (Surroundings, Interior Design, Community Pool, Views).
  7. **Features** (`section.features-section`): "Features" heading, carousel
     of feature boxes each with icon, title, and description (Eco-Friendly
     Homes, Secure Area, Free Parking, Community Pool, Best Deals).
  8. **Call to Action** (`section.call-to-action-section`): background image,
     centered white text CTA ("Ask our top consultants for a personalized
     offer today"), "CALL 800-1-5141" button.
  9. **Footer** (`footer.footer-section`): logo left, 3 link columns (Company,
     Legal, Social), copyright bar.

- **Design tokens (from css/style.css):**
  - Brand teal: **#12c7b8** (buttons, accents, hero detail panels)
  - Dark navy: **#081624** (header bg, dark sections)
  - Body text: **#73778e** (muted gray-blue)
  - Light bg: **#f2f3f4** (section backgrounds)
  - White: **#fff** (text on dark, backgrounds)
  - Divider: **#e0e1e8**
  - Subtle text: **#83869b**, **#8f8fa8**, **#7e7f8f**
  - Font: **Sarabun**, sans-serif (Google Fonts)
  - Buttons: rounded (border-radius 60px), outlined teal or solid teal
  - Hero detail panels: white bg, teal price text
  - Section padding: generous (spad = ~110px vertical)

- **Recreation decisions:**
  - Tailwind re-implementation (NO Bootstrap dependency)
  - Sarabun via Google Fonts `<link>` in index.html
  - Brand teal `#12c7b8` + dark navy `#081624` in `@theme`
  - Images via seeded picsum placeholders
  - Icons from lucide-react
  - Hero as a static display (not a real carousel — shows first slide)
  - Location tabs as controlled state (not Bootstrap tabs)
  - Feature carousel as static grid (no auto-scroll)
  - CTA button and form submissions use preventDefault
  - Footer links to Component Dock
  - No ColorLib references in app source

## Requirements

### Requirement: Header / Navbar

The system SHALL render a header with a brand logo on the left and six
nav links on the right, with a hamburger toggler on mobile.

#### Scenario: Header content

- **GIVEN** the Homestead page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the brand wordmark "HOMESTEAD" on the left
- **AND** the nav SHALL show links Home, About Us, Property, Developments,
  News, Contact

#### Scenario: Mobile navigation

- **GIVEN** the Homestead page is rendered on a small viewport
- **WHEN** the hamburger toggler is clicked
- **THEN** the nav links SHALL toggle open/closed

### Requirement: Hero section

The system SHALL render a hero section with a background image, a headline,
social icons, and a details panel showing property information.

#### Scenario: Hero content

- **GIVEN** the Homestead page is rendered
- **WHEN** the hero is visible
- **THEN** a full-width background image SHALL be shown
- **AND** a headline "3 Modern homes for modern thinking people." SHALL overlay the image
- **AND** social media icons (Facebook, LinkedIn, Twitter, YouTube, Instagram)
  SHALL be shown on the right side
- **AND** a details panel at the bottom SHALL show bedroom info, availability
  text, and a price

### Requirement: Feature icons row

The system SHALL render a horizontal row of 9 feature icon items, each with
an icon and label text.

#### Scenario: Feature icons display

- **GIVEN** the Homestead page is rendered
- **WHEN** the features icons section is visible
- **THEN** 9 items SHALL be shown: Easy Buying, Ready to Move, Great
  Location, Community Pool, 30% Park, Sunny Location, Modern Design,
  Parking Spaces, Garage Included
- **AND** each item SHALL have an icon above its label

### Requirement: Intro / Our Houses section

The system SHALL render an "Our Houses" section with two alternating
image+text rows.

#### Scenario: Intro rows

- **GIVEN** the Homestead page is rendered
- **WHEN** the intro section is visible
- **THEN** the heading "Our Houses" SHALL be shown
- **AND** row 1 SHALL show an image (8 cols) and text (4 cols) with a
  villa title, description, and "MORE INFO" button
- **AND** row 2 SHALL show the image on the right and text on the left
  (reversed layout)

### Requirement: Design / Gallery section

The system SHALL render a dark-background gallery section with image
thumbnails and two text columns.

#### Scenario: Gallery display

- **GIVEN** the Homestead page is rendered
- **WHEN** the design section is visible
- **THEN** a dark-background section SHALL be shown with a light heading
- **AND** a row of gallery images SHALL be displayed
- **AND** two text columns (Interior, Environment Friendly) with descriptions
  SHALL appear below the gallery

### Requirement: Location section

The system SHALL render a tabbed location section with large images and
thumbnail navigation tabs.

#### Scenario: Location tabs

- **GIVEN** the Homestead page is rendered
- **WHEN** the location section is visible
- **THEN** the heading "Location" SHALL be shown
- **AND** a large image SHALL be displayed for the active tab
- **AND** 4 thumbnail tabs SHALL be shown: Surroundings, Interior Design,
  Community Pool, Views
- **AND** clicking a thumbnail SHALL switch the displayed image

### Requirement: Features section

The system SHALL render a features carousel with icon boxes.

#### Scenario: Features display

- **GIVEN** the Homestead page is rendered
- **WHEN** the features section is visible
- **THEN** the heading "Features" SHALL be shown
- **AND** feature boxes SHALL be shown with icons, titles, and descriptions:
  Eco-Friendly Homes, Secure Area, Free Parking, Community Pool, Best Deals

### Requirement: Call to Action section

The system SHALL render a CTA section with a background image, heading,
and action button.

#### Scenario: CTA content

- **GIVEN** the Homestead page is rendered
- **WHEN** the CTA section is visible
- **THEN** a background image SHALL be shown
- **AND** the heading "Ask our top consultants for a personalized offer
  today." SHALL be centered in white
- **AND** a "CALL 800-1-5141" button SHALL be shown

### Requirement: Footer

The system SHALL render a dark footer with brand logo, link columns,
social icons, and a copyright bar linking Component Dock.

#### Scenario: Footer content

- **GIVEN** the Homestead page is rendered
- **WHEN** the footer is visible
- **THEN** the brand logo SHALL be shown on the left
- **AND** link columns (Company, Legal) SHALL be shown
- **AND** social icons SHALL be displayed
- **AND** the copyright bar SHALL link https://www.componentdock.com/
  branded as "Component Dock"

### Requirement: Responsive behavior

The system SHALL stack all multi-column layouts to single columns on
small viewports.

#### Scenario: Mobile layout

- **GIVEN** the Homestead page is rendered on a small viewport
- **WHEN** the page is displayed
- **THEN** all grid rows SHALL stack to single columns
