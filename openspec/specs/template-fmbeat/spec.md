# Template: Fmbeat (DJ / Radio Station)

## Purpose

Recreation of ColorLib "Eighty8" template as a React 19 + Vite + Tailwind 4 + TypeScript app.

- **Source:** ColorLib "Eighty8" — https://colorlib.com/wp/template/eighty8/
- **Preview:** https://preview.colorlib.com/theme/eighty8/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/88-free-template.jpg
- **New name:** fmbeat (package: `@free-react-templates/fmbeat`)
- **Deploy target:** `fmbeat.free.componentdock.com`

## Requirements

### Requirement: Header displays logo, navigation, and social icons

The header SHALL display a dark background bar with the Fmbeat logo, six navigation links, and social media icons.

#### Scenario: Header renders all elements

- **WHEN** the user visits the page
- **THEN** a dark header bar is visible at the top
- **AND** the site logo "Fmbeat" is displayed on the left
- **AND** navigation links (Home, About, Charts, DJs, Blog, Contact) are visible
- **AND** social media icons (Twitter, SoundCloud, Instagram, Facebook, YouTube) are displayed on the right

#### Scenario: Header is responsive on mobile

- **WHEN** the user views on a mobile viewport
- **THEN** a hamburger menu icon is displayed
- **AND** when the user taps the hamburger icon the navigation menu opens

### Requirement: Hero section displays slider with upcoming events

The hero section SHALL display a dark background image with location badges and an auto-advancing carousel.

#### Scenario: Hero displays slider with upcoming events

- **WHEN** the user visits the page
- **THEN** a hero section with a dark background image is visible
- **AND** location badges are displayed at the top (hidden on mobile)
- **AND** a carousel slider shows items with "Up Next" label and event heading

#### Scenario: Hero slider transitions smoothly

- **WHEN** 5 seconds elapse
- **THEN** the slide advances to the next item with a fade animation

### Requirement: Promotion section displays three category cards

The promotion section SHALL display three cards in a 3-column grid with background images and overlay headings.

#### Scenario: Promotion boxes display three category cards

- **WHEN** the user scrolls to the promotion section
- **THEN** three promo boxes are displayed in a grid
- **AND** each box shows a background image with a heading overlay ("Our DJ's", "Live Streams", "Events")

### Requirement: Podcast section shows album art and audio player

The podcast section SHALL display album art, track information, a waveform visualization, and a call-to-action button.

#### Scenario: Podcast section shows album art and audio player

- **WHEN** the user scrolls to the Latest Podcast section
- **THEN** a section title "Latest Podcast" with yellow underline is visible
- **AND** an album art image is displayed on the left
- **AND** a track name, audio waveform, and "Listen Live" button are visible on the right

### Requirement: Charts section shows branded banner

The charts section SHALL display a section title with a yellow underline and a background image with logo overlay.

#### Scenario: Charts section shows branded banner

- **WHEN** the user scrolls to the Charts section
- **THEN** a section title "Charts" with yellow underline is visible
- **AND** a large background image with logo overlay is displayed

### Requirement: Footer displays four widget columns and copyright

The footer SHALL display four columns (Locations, Top Shows, Blog, Contact) and a bottom bar with Component Dock attribution.

#### Scenario: Footer displays four widget columns

- **WHEN** the user scrolls to the footer
- **THEN** a Locations column with city list is visible
- **AND** a Top Shows column with numbered list is visible
- **AND** a Blog column with thumbnail previews is visible
- **AND** a Contact column with address/phone/email is visible

#### Scenario: Footer bottom bar shows copyright

- **WHEN** the footer is visible
- **THEN** a copyright line with Component Dock attribution is displayed
- **AND** the Component Dock link points to https://www.componentdock.com/

### Requirement: Layout adapts to mobile viewport

The template SHALL be responsive and stack columns vertically on mobile viewports.

#### Scenario: Layout adapts to mobile viewport

- **WHEN** the user views the page on a 375px wide viewport
- **THEN** the location badges are hidden
- **AND** the header shows a hamburger menu
- **AND** promotion boxes stack vertically
- **AND** the podcast section stacks vertically
- **AND** footer columns stack vertically

### Requirement: Design tokens match original template

The template SHALL use the specified design tokens: brand yellow #ffe400, dark backgrounds, Roboto font, and yellow-accented buttons.

#### Scenario: Colors and typography are correct

- **WHEN** the page renders
- **THEN** the brand accent color is yellow (#ffe400)
- **AND** section backgrounds use dark palette (#212121, #191919, #1a1a1a)
- **AND** the font family is Roboto
- **AND** section titles have yellow underlines
