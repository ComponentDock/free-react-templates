# Ministry — Church Website Template

## Purpose

Ministry is a single-page church website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Salvation" church website template design, built under a
different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Salvation" — free Bootstrap 5 church website
  template (source: https://colorlib.com/wp/template/salvation/).
- **Demo DOM analyzed:** `https://preview.colorlib.com/theme/salvation/`
  returns HTTP 200. Page title: "Salvation - Church Website Template".
  Sections in order: top bar (location + social), navbar (Home, About,
  Ministries, Sermons, Events, Blog, Contact, Donate), hero slider,
  services grid (3 cards + quote), about split, counter stats, sermon
  cards (3), testimony carousel, blog cards (3), events list (3),
  gallery grid (7 images), footer (4 columns), donation modal.
- **Design tokens extracted:**
  - Font: Poppins (Google Fonts), weights 300–800
  - Brand color: #ce0f3d (deep crimson red)
  - Body text: #40415e
  - Heading color: rgba(0, 0, 0, 0.8)
  - Hero overlay: #00043c at 40% opacity
  - Button style: pill (rounded-full), brand bg, white text
  - Counter section bg: brand color
  - Testimony section bg: dark with overlay
  - Footer bg: #222
  - Light section bg: #f8f9fa

## Requirements

### Requirement: Navbar with navigation links and Donate CTA

The template SHALL render a transparent navbar with the brand name
"Ministry", navigation links (Home, About, Ministries, Sermons, Events,
Blog, Contact), and a pill-shaped "Donate" button.

#### Scenario: Navbar renders all navigation links

- **WHEN** the page loads
- **THEN** the navbar displays links for Home, About, Ministries, Sermons, Events, Blog, and Contact

#### Scenario: Donate button has pill styling

- **WHEN** the user views the navbar
- **THEN** the Donate button has a rounded-full border-radius with brand background color

### Requirement: Hero section with background image and CTA

The template SHALL render a full-viewport hero section with a background
image, dark overlay, headline, subheading, description, and a CTA button.

#### Scenario: Hero displays heading and CTA

- **WHEN** the page loads
- **THEN** the hero shows "Transforming Lives" subheading, "Total Surrender to God" heading, description text, and "Become A Volunteer" button

### Requirement: Services section with cards and quote

The template SHALL render a services section with three service cards
(Worship, Connect, God's Love) each with icon, title, subheading, and
description, plus a quote block.

#### Scenario: Three service cards are visible

- **WHEN** the user scrolls to the services section
- **THEN** three cards for Worship, Connect, and God's Love are displayed with icons and descriptions

### Requirement: About section with image and text

The template SHALL render an about section with an image, heading,
description paragraphs, and a "Learn More" button.

#### Scenario: About section displays content

- **WHEN** the user scrolls to the about section
- **THEN** the image, "Connect, Grow and Serve with Us" heading, description, and "Learn More" button are visible

### Requirement: Counter section with statistics

The template SHALL render a counter section with brand-colored background
and four statistics: Members, Pastors, Donations, Churches.

#### Scenario: Four stats are displayed

- **WHEN** the user scrolls to the counter section
- **THEN** the values 1,005,000 (Members), 65,000 (Pastors), 500,000 (Donations), and 50 (Churches) are shown

### Requirement: Sermons section with sermon cards

The template SHALL render a sermons section with three sermon cards,
each containing an image, title, speaker, categories, date, description,
and Watch/Download buttons.

#### Scenario: Three sermon cards with actions

- **WHEN** the user scrolls to the sermons section
- **THEN** three sermon cards are displayed with Watch Sermons and Download Sermons buttons

### Requirement: Testimony section with testimonials

The template SHALL render a dark-background testimony section with
testimonials showing avatars, quotes, and names.

#### Scenario: Testimonials display correctly

- **WHEN** the user scrolls to the testimony section
- **THEN** four testimonials with avatars and names are displayed

### Requirement: Blog section with blog cards

The template SHALL render a blog section with three blog cards showing
images, meta information, titles, excerpts, and Read more buttons.

#### Scenario: Three blog cards are visible

- **WHEN** the user scrolls to the blog section
- **THEN** three blog cards with images, dates, authors, and Read more buttons are displayed

### Requirement: Events section with event listings

The template SHALL render an events section with three event items
showing images, titles, dates, locations, and More Details buttons.

#### Scenario: Three events are listed

- **WHEN** the user scrolls to the events section
- **THEN** three event items with images, details, and More Details buttons are displayed

### Requirement: Gallery section with image grid

The template SHALL render a gallery section with seven images in a grid
layout with hover overlay effects.

#### Scenario: Seven gallery images in grid

- **WHEN** the user scrolls to the gallery section
- **THEN** seven images are displayed in a grid with accessible labels

### Requirement: Footer with brand, links, and contact

The template SHALL render a four-column footer with brand info and social
icons, latest news, quick links, and contact information. The footer
copyright MUST link to https://www.componentdock.com/ branded as
"Component Dock".

#### Scenario: Footer links to Component Dock

- **WHEN** the user views the footer
- **THEN** a "Component Dock" link pointing to https://www.componentdock.com/ is present in the copyright line

### Requirement: No ColorLib references in app source

The template SHALL NOT contain any references to "Colorlib" or
"colorlib.com" in source files, comments, or data within the app folder.

#### Scenario: No ColorLib strings in app code

- **WHEN** the app source files are inspected
- **THEN** no file contains the string "colorlib" (case-insensitive)
