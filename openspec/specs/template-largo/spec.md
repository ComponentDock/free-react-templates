# Template: Largo (Musician Portfolio)

## Purpose

Recreation of the ColorLib **Musico** musician portfolio template as a React 19
+ Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/musico/
- **Preview:** https://preview.colorlib.com/theme/musico/
- **New name:** `largo` (apps/largo, @free-react-templates/largo)
- **Deploy target:** https://largo.free.componentdock.com
- **Category:** Music / Portfolio
- **Screenshot reference:** https://colorlib.com/wp/wp-content/uploads/sites/2/musico-free-template.jpg

## Visual Design Notes (from screenshot)

The screenshot shows a dark-themed musician portfolio with a full-width hero
banner featuring a musician silhouette against a moody background. Below the
hero is an overlapping audio player card with an artist photo. The palette is
dark navy (#001D38) with red (#ED1B1B) accent buttons. The overall aesthetic
is moody, professional, and music-focused — dark backgrounds with white text
and red highlights. The footer is dark navy with a two-column layout.

## Design Tokens

Extracted from the live preview stylesheet (style.css at preview.colorlib.com/theme/musico/):

### Colors

| Token                    | Value                          | Usage                                |
| ------------------------ | ------------------------------ | ------------------------------------ |
| `--color-primary`        | `#ED1B1B`                      | Red accent — buttons, links, icons   |
| `--color-navy`           | `#001D38`                      | Dark navy — header, footer, overlays |
| `--color-heading`        | `#1F1F1F`                      | Headings / strong text               |
| `--color-body`           | `#727272`                      | Body text                            |
| `--color-body-light`     | `#7e7e7e`                      | Secondary text                       |
| `--color-white`          | `#fff`                         | Text on dark backgrounds             |
| `--color-border`         | `#cccccc`                      | Input placeholders, subtle borders   |
| `--color-footer-text`    | `#C7C7C7`                      | Footer paragraph / link text         |
| `--color-footer-muted`   | `#D5D5D5`                      | Footer list items                    |
| `--color-overlay`        | `rgba(0,0,0,0.4) → black`     | Hero gradient overlay (top to bottom)|
| `--color-contact-overlay`| `rgba(0,29,56,0.6) → #001d38` | Contact RSVP gradient overlay        |

### Fonts

| Role    | Family                        | Usage                     |
| ------- | ----------------------------- | ------------------------- |
| Headings| `'Josefin Sans', sans-serif` | Navbar, section titles, h3/h4 |
| Body    | `'Muli', sans-serif`          | Paragraphs, body text     |

### Buttons

**Boxed button (`.boxed-btn`):**
- Background: transparent
- Border: `1px solid #ED1B1B`
- Text color: `#ED1B1B`
- Font: Josefin Sans, 16px, weight 600
- Padding: `12px 42px`
- Text transform: capitalize
- Border-radius: 0 (square/rectangular — no rounding)
- Hover: background `#ED1B1B`, text `#fff`, border stays `#ED1B1B`
- Focus: outline none

**Filled button (`.boxed-btn3`):**
- Background: `#ED1B1B`
- Text: `#fff`
- Border: `1px solid transparent`
- Font: Josefin Sans, 16px, weight 400
- Padding: `12px 42px`
- Border-radius: 0 (square)
- Hover: transparent bg, red text, red border
- Transition: 0.5s

### Section Backgrounds

- **Hero:** Full-width banner image with dark gradient overlay (`rgba(0,0,0,0.4)` to `black`)
- **Music player area:** Overlaps hero (negative margin-top: -148px), white/light bg
- **About area:** Light/white background
- **Video gallery:** Light background
- **Latest tracks:** Light background
- **Image gallery:** Light background
- **Contact RSVP:** Background image with navy gradient overlay (`rgba(0,29,56,0.6)` → `#001d38`)
- **Footer top:** `#001D38` (dark navy)
- **Footer bottom (copyright):** White with top border

## Section Structure (DOM order)

1. **Navbar** — Sticky header with logo, navigation links (Home, About, Tracks, Blog dropdown, Pages dropdown, Contact), social icons (Facebook, Twitter, Instagram) right-aligned. Mobile: hamburger menu.
2. **Hero / Slider** — Full-width banner image with dark gradient overlay. Centered heading: "Musician".
3. **Music Player Area** — Overlaps hero (negative margin). White card: artist photo thumbnail + artist name ("Frando Kally") + date + HTML5 audio player + "buy albam" CTA button (boxed-btn).
4. **About** — Two-column: left = artist photo, right = name ("Jack Kalib"), bio paragraph, signature image.
5. **Video Gallery** — 4 video thumbnails in a row (3×col-xl-3). Each has a play icon overlay and hover info (show name + video title). Pop-up video links.
6. **Latest Tracks** — Section heading "Latest Tracks". Three rows of audio players, each with: artist photo, name/date, audio player, "buy albam" button.
7. **Image Gallery** — Section heading "Image Galleries". 5 images in a responsive grid (col-5/col-7 top row, col-4/col-4/col-4 bottom row). Each has hover overlay with plus icon for lightbox popup.
8. **Contact RSVP** — Full-width background image with dark navy gradient overlay. Centered: "Contact For RSVP" heading + "Contact Me" CTA button (boxed-btn3, filled red).
9. **Footer** — Dark navy (#001D38) top section with two columns: left = "Services" title + subscribe form (email input + submit button) + description text; right = "Contact Me" title + contact info list (email, phone, address) + social icons (Facebook, Google+, Twitter, YouTube, Instagram). Bottom copyright bar: copyright text + "Made with Component Dock" link + footer nav links (home, about, tracks, blog, contact).

## Requirements

### Requirement: Navbar

The system SHALL render a sticky top navigation bar with logo "Largo", navigation
links (Home, About, Tracks, Blog, Pages, Contact), and social icons (Facebook,
Twitter, Instagram) right-aligned.

#### Scenario: Navbar links

- **GIVEN** the page is loaded
- **WHEN** the navbar is displayed
- **THEN** it SHALL show navigation links: Home, About, Tracks, Blog, Contact
- **AND** the navbar SHALL be sticky at the top of the page
- **AND** social icons SHALL be visible on the right (desktop)

#### Scenario: Mobile navbar

- **GIVEN** the viewport is mobile-sized (< 768px)
- **WHEN** the navbar is displayed
- **THEN** it SHALL show a hamburger menu toggle
- **AND** navigation links SHALL be hidden until toggled

### Requirement: Hero section

The system SHALL render a full-width hero section with a background image, a dark
gradient overlay, and a centered heading "Musician".

#### Scenario: Hero content

- **GIVEN** the page is loaded
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the heading "Musician" centered
- **AND** it SHALL have a dark gradient overlay over a background image

### Requirement: Music Player Area

The system SHALL render a music player area that overlaps the hero section
(white card with negative top margin), containing an artist photo, artist
name, date, an HTML5 audio player, and a "buy albam" CTA button.

#### Scenario: Music player card

- **GIVEN** the page is loaded
- **WHEN** the music player area is displayed
- **THEN** it SHALL show an artist photo thumbnail
- **AND** it SHALL show artist name and date
- **AND** it SHALL render an HTML5 audio player
- **AND** it SHALL show a "buy albam" button with red border (boxed-btn style)

### Requirement: About section

The system SHALL render a two-column about section with an artist photo on the
left and bio text with a signature on the right.

#### Scenario: About content

- **GIVEN** the page is loaded
- **WHEN** the about section is displayed
- **THEN** it SHALL show an artist photo on the left
- **AND** it SHALL show the artist name "Jack Kalib" and a bio paragraph on the right
- **AND** it SHALL show a signature image below the bio

### Requirement: Video Gallery

The system SHALL render a video gallery section with 4 video thumbnails in a
responsive grid, each with a play icon overlay and hover info.

#### Scenario: Video thumbnails

- **GIVEN** the page is loaded
- **WHEN** the video gallery is displayed
- **THEN** it SHALL show 4 video thumbnails
- **AND** each SHALL have a play icon overlay
- **AND** each SHALL show a show name and video title on hover

### Requirement: Latest Tracks

The system SHALL render a "Latest Tracks" section with 3 audio player rows,
each containing an artist photo, name, date, audio player, and "buy albam"
button.

#### Scenario: Track listing

- **GIVEN** the page is loaded
- **WHEN** the latest tracks section is displayed
- **THEN** it SHALL show heading "Latest Tracks"
- **AND** it SHALL display 3 track rows
- **AND** each row SHALL have an artist photo, name, date, audio player, and CTA button

### Requirement: Image Gallery

The system SHALL render an "Image Galleries" section with 5 images in a
responsive grid layout with hover overlay and lightbox popup.

#### Scenario: Gallery grid

- **GIVEN** the page is loaded
- **WHEN** the image gallery is displayed
- **THEN** it SHALL show heading "Image Galleries"
- **AND** it SHALL display 5 gallery images in a responsive grid
- **AND** each image SHALL have a hover overlay with a plus icon

### Requirement: Contact RSVP

The system SHALL render a full-width contact RSVP section with a background
image, dark navy gradient overlay, centered heading "Contact For RSVP", and a
filled red "Contact Me" CTA button.

#### Scenario: Contact section

- **GIVEN** the page is loaded
- **WHEN** the contact RSVP section is displayed
- **THEN** it SHALL show heading "Contact For RSVP" centered
- **AND** it SHALL show a "Contact Me" button with filled red background (boxed-btn3 style)
- **AND** it SHALL have a dark navy gradient overlay over a background image

### Requirement: Footer

The system SHALL render a dark navy footer with two columns (subscribe form +
contact info + social links) and a bottom copyright bar with Component Dock
link.

#### Scenario: Footer content

- **GIVEN** the page is loaded
- **WHEN** the footer is displayed
- **THEN** it SHALL show a dark navy (#001D38) background
- **AND** it SHALL show a subscribe form with email input and "Subscribe" button
- **AND** it SHALL show contact information (email, phone, address)
- **AND** it SHALL show social icons (Facebook, Google+, Twitter, YouTube, Instagram)
- **AND** the copyright bar SHALL include a link to https://www.componentdock.com/

#### Scenario: Footer responsiveness

- **GIVEN** the viewport is mobile-sized
- **WHEN** the footer is displayed
- **THEN** the two columns SHALL stack vertically
- **AND** all text SHALL remain readable

## Verification checklist

- [ ] All 9 sections render in correct DOM order
- [ ] Navbar is sticky with correct links and social icons
- [ ] Hero has dark gradient overlay and centered heading
- [ ] Music player area overlaps hero with negative margin
- [ ] Audio players are functional (HTML5 audio element)
- [ ] About section has two-column layout with photo and bio
- [ ] Video gallery shows 4 thumbnails with play overlays
- [ ] Latest Tracks shows 3 audio player rows
- [ ] Image gallery has 5 images in responsive grid with hover
- [ ] Contact RSVP has dark navy overlay and filled red CTA
- [ ] Footer is dark navy with subscribe form, contact info, social icons
- [ ] Footer copyright includes Component Dock link
- [ ] All buttons use square corners (no border-radius)
- [ ] Color palette matches: red #ED1B1B, navy #001D38, body #727272
- [ ] Fonts: Josefin Sans (headings), Muli (body)
- [ ] Responsive: hamburger nav on mobile, stacked columns
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Placeholder images use picsum.photos/seed/largo-*
