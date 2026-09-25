# Template: Tonecraft (Music Artist Landing)

## Purpose

Tonecraft is a music artist landing page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Musico"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Musico" — music artist landing / musician portfolio
  template (source: https://colorlib.com/wp/template/musico/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/musico/
  (HTTP 200, full rendered DOM + `css/style.css` (144KB) extracted).
  The TEMPLATES.md screenshot (`musico-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Header (transparent sticky: Logo, nav links
  Home/About/Tracks/Blog/Pages/Contact, social icons right) → Hero slider
  (full-width concert photo background, "MUSICIAN" heading, dark overlay) →
  Music Player Bar (artist avatar + name + date + audio player + "Buy Album"
  CTA, black background) → About (2-column: artist photo left, name + bio
  + signature right) → Video Gallery (4-column grid of video thumbnails with
  play button hover overlay) → Latest Tracks (section title + 3 track rows
  each with artist avatar + name + date + audio player + "Buy Album" CTA) →
  Image Gallery (masonry-style 5-image grid with purple hover overlay + plus
  icon) → Contact RSVP (parallax background, "Contact For RSVP" heading +
  "Contact Me" CTA button) → Footer (dark navy #001D38: subscribe form +
  contact info + social links) → Copyright bar (bottom: copyright text +
  nav links).
- **Design tokens extracted from `css/style.css`:**
  - Font: **"Josefin Sans"** (sans-serif, primary), **"Muli"** (sans-serif,
    secondary).
  - Brand/accent **red `#ED1B1B`** (button fills, hover states, play button
    overlay, boxed-btn3).
  - Dark navy **`#001D38`** (section titles, footer background).
  - Black **`#000`** (music_area background).
  - Light background **`#f9f9ff`** (body/section backgrounds).
  - Gallery hover overlay: **`rgba(97, 92, 253, 0.4)`** (purple, `#615CFD`).
  - Buttons:
    - `.boxed-btn`: transparent, `color: #131313`, border, hover → `background: #ED1B1B`, `color: #fff`.
    - `.boxed-btn3`: `background: #ED1B1B`, `color: #fff`, hover → transparent, red border.
  - Section titles: `font-size: 50px`, `font-weight: 400`, `color: #001D38`.
  - Hero: full-width background image, 900px height, dark overlay (`.overlay2`).
  - Contact RSVP: parallax background image.
  - Footer social links: colored circles (Facebook `#3B5797`, Google+ `#DB4337`,
    Twitter `#00ACED`, YouTube `#BB0000`, Instagram `#AC907A`).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/tonecraft-<n>/<w>/<h>`); icons → lucide-react; audio
  player → HTML5 `<audio>` element (no custom JS player); forms prevent default
  (no backend); no assets copied; video thumbnails → picsum seeds.

Tonecraft lives in `apps/tonecraft` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Header / Navbar

The system SHALL render a transparent sticky header with the site name
"Tonecraft", navigation links, and social media icons.

#### Scenario: Navbar content

- **GIVEN** the Tonecraft page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL display the logo text "Tonecraft"
- **AND** it SHALL show links to Home, About, Tracks, Blog, and Contact
- **AND** it SHALL show social media icons (Facebook, Twitter, Instagram)
  on the right side

#### Scenario: Navbar is sticky on scroll

- **GIVEN** the page is scrolled past the hero
- **WHEN** the user scrolls down
- **THEN** the navbar SHALL remain fixed at the top with a transparent
  background that becomes solid on scroll

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element

### Requirement: Hero section

The system SHALL render a full-width hero with a dark concert photo background,
a dark overlay, and a centered "MUSICIAN" heading.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a full-width background image (concert/musician photo)
- **AND** it SHALL display the heading "MUSICIAN" centered in large white text
- **AND** it SHALL have a dark overlay effect over the background image

### Requirement: Music Player Bar

The system SHALL render a music player bar section with a dark background,
artist avatar, artist info, audio controls, and a "Buy Album" CTA.

#### Scenario: Music Player content

- **GIVEN** the page is rendered
- **WHEN** the music player bar is displayed
- **THEN** it SHALL show an artist avatar image on the left
- **AND** it SHALL display the artist name "Frando Kally" and date
- **AND** it SHALL include an HTML5 audio player control
- **AND** it SHALL show a "Buy Album" button with red border style
- **AND** the section SHALL have a black (#000) background

### Requirement: About section

The system SHALL render an about section with an artist photo on the left
and artist bio + signature on the right.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a placeholder artist image on the left column
- **AND** it SHALL display the artist name "Jack Kalib" as a heading
- **AND** it SHALL show a bio paragraph describing the artist
- **AND** it SHALL display a signature image below the bio
- **AND** the section SHALL have a white background

### Requirement: Video Gallery section

The system SHALL render a 4-column video gallery grid with thumbnail images
and hover play button overlays.

#### Scenario: Video Gallery content

- **GIVEN** the page is rendered
- **WHEN** the video gallery is displayed
- **THEN** it SHALL show 4 video thumbnail cards in a row
- **AND** each card SHALL display a thumbnail image
- **AND** each card SHALL have a play button overlay on hover (red circle)
- **AND** each card SHALL show a show/event name and video title on hover
- **AND** the section SHALL have a light background (#f9f9ff)

### Requirement: Latest Tracks section

The system SHALL render a tracks listing section with a section title and
multiple track rows, each with artist info, audio player, and CTA.

#### Scenario: Latest Tracks content

- **GIVEN** the page is rendered
- **WHEN** the latest tracks section is displayed
- **THEN** it SHALL show the section heading "Latest Tracks"
- **AND** it SHALL display 3 track rows, each containing:
  - Artist avatar image
  - Artist name and date
  - HTML5 audio player
  - "Buy Album" button (red border style)
- **AND** the section SHALL have a black (#000) background

### Requirement: Image Gallery section

The system SHALL render a masonry-style image gallery with hover overlays.

#### Scenario: Image Gallery content

- **GIVEN** the page is rendered
- **WHEN** the image gallery is displayed
- **THEN** it SHALL show the section heading "Image Galleries"
- **AND** it SHALL display 5 images in a masonry-style grid layout
  (mix of column widths: 5-col, 7-col, 4-col, 4-col, 4-col)
- **AND** each image SHALL have a purple hover overlay (`rgba(97,92,253,0.4)`)
- **AND** each image SHALL show a plus icon on hover

### Requirement: Contact RSVP section

The system SHALL render a parallax contact call-to-action section with
a heading and CTA button.

#### Scenario: Contact RSVP content

- **GIVEN** the page is rendered
- **WHEN** the contact RSVP section is displayed
- **THEN** it SHALL show the heading "Contact For RSVP" centered
- **AND** it SHALL show a "Contact Me" button (red filled, `.boxed-btn3` style)
- **AND** the section SHALL have a parallax background image
- **AND** the section SHALL have significant vertical padding (~184px)

### Requirement: Footer

The system SHALL render a dark navy footer with subscribe form, contact
info, social links, and copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL have a dark navy (#001D38) background
- **AND** it SHALL show a subscribe form with email input and "Subscribe" button
- **AND** it SHALL show contact information (email, phone, address)
- **AND** it SHALL show social media icon links (colored circles)
- **AND** it SHALL display a copyright bar at the bottom
- **AND** the copyright bar SHALL include a "Made with ❤ by Component Dock"
  link (replacing the Colorlib attribution)
- **AND** it SHALL show footer navigation links (home, about, tracks, blog, contact)

## Verification checklist

- [ ] Header renders with logo, nav links, and social icons
- [ ] Hero displays full-width background image with "MUSICIAN" heading
- [ ] Music player bar shows artist info, audio player, and CTA
- [ ] About section shows artist photo, name, bio, and signature
- [ ] Video gallery shows 4 cards with hover play overlays
- [ ] Latest Tracks shows 3 track rows with audio players
- [ ] Image gallery shows 5 images in masonry grid with purple hover
- [ ] Contact RSVP shows parallax background with heading and CTA
- [ ] Footer shows subscribe form, contact info, social links, copyright
- [ ] Footer links to componentdock.com
- [ ] Dark mode toggle works
- [ ] Responsive layout works on mobile
- [ ] All placeholder images use picsum seeds (no ColorLib assets)
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] 100% test coverage
