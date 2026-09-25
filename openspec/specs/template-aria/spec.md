# Template: Aria (Music / Band Landing Page)

## Purpose

Recreation of ColorLib "Musica" (https://colorlib.com/wp/template/musica/)
as "Aria" — a music/band landing page built with React 19, Tailwind CSS 4, and
TypeScript. Live preview: https://preview.colorlib.com/theme/musica/.

## Design Tokens

| Token              | Value                                      |
| ------------------ | ------------------------------------------ |
| Font family        | Raleway (Google Fonts), sans-serif         |
| Decorative font    | Allura (Google Fonts) — hero/display text  |
| Primary gradient   | #cc1573 → #5722a9 (hot pink → deep purple) |
| Heading color      | #262626 (near-black)                       |
| Body text          | #6a6a6a (medium gray)                      |
| Link color         | #141414 (dark)                             |
| Subtitle lavender  | #c5afd9 (light lavender)                   |
| Dark section bg    | #0c0527 (very dark indigo)                 |
| Overlay dark       | rgba(21, 4, 48, 0.89)                     |
| Overlay light      | rgba(21, 4, 48, 0.5)                      |
| Button radius      | 0 (sharp rectangular)                      |
| Button primary     | gradient #cc1573 → #5722a9                |
| Button hover       | #bd177a (magenta)                          |
| White              | #ffffff                                    |

## Visual Design Notes (from live preview DOM + CSS analysis)

- Dark, moody music/band aesthetic with purple-pink gradient accents.
- Full-screen hero slider with large display text (172px desktop) and
  background images. Gradient accent bar (5px) below hero.
- Parallax-style sections with dark purple overlays on background images.
- Upcoming shows list on dark (#0c0527) background with date badges,
  venue images, and gradient "Buy Tickets" buttons.
- Music player carousel with album artwork cards and inline audio controls.
- Featured album section: split layout — album thumbnail (parallax bg)
  + track listing with audio players + "Now Playing" bar.
- Two side-by-side image cards ("Music" / "Artists") with dark overlay.
- Footer: 4-column layout with About, Links, Social nav + email subscribe.

## Requirements

### Requirement: Sticky navigation bar

The navbar SHALL be sticky/fixed at the top with a logo, navigation links
(Home, About, Pages dropdown, Gallery, Contact), and social media icons.

#### Scenario: Navbar renders on load

- **WHEN** the page loads
- **THEN** I see a sticky navigation bar with logo and menu links
- **AND** social media icons (Pinterest, Facebook, Twitter, Dribbble,
  Behance, LinkedIn) are visible
- **AND** on mobile a hamburger toggle opens the nav menu

#### Scenario: Mobile menu toggle

- **GIVEN** I am on a mobile viewport
- **WHEN** I tap the hamburger icon
- **THEN** the navigation menu slides open with all links visible

### Requirement: Hero slider with large display text

The hero area SHALL display a full-width carousel of slides, each with a
background image, a large display title, and a subtitle.

#### Scenario: Hero slides render

- **WHEN** the page loads
- **THEN** I see a full-width hero section with a background image
- **AND** a large heading (e.g. "Musica" text) is centered
- **AND** a subtitle "Music Theme" appears below the heading

#### Scenario: Gradient accent bar below hero

- **WHEN** I view the hero section
- **THEN** a 5px gradient bar (#cc1573 → #5722a9) appears below the
  hero slides

### Requirement: Artist Bio / About section

A parallax-style about section SHALL show a heading, subtitle, artist
photo on the left, and bio text with signature on the right.

#### Scenario: About section renders

- **WHEN** I scroll to the about section
- **THEN** I see a heading "Artist Bio" in white over a dark overlay
- **AND** a subtitle in lavender below it
- **AND** a split layout with an image on the left and bio text
  on the right
- **AND** a signature image below the bio text

### Requirement: Upcoming Shows list

A dark-background section SHALL display a list of upcoming concert/show
entries, each with a date badge, venue image, show name, location,
venue, time, and a "Buy Tickets" button.

#### Scenario: Shows list renders

- **WHEN** I scroll to the upcoming shows section
- **THEN** I see a heading "Upcoming shows" in white
- **AND** multiple show entries are listed vertically
- **AND** each entry has a date (day + month), thumbnail image,
  show name, city/country, venue, and time
- **AND** each entry has a gradient "Buy Tickets" button

#### Scenario: Buy Tickets button style

- **WHEN** I hover over a "Buy Tickets" button
- **THEN** the button maintains its gradient (#cc1573 → #5722a9)
  and the text stays white

### Requirement: Music Player carousel

A carousel of album/artwork cards SHALL display with inline audio
playback controls.

#### Scenario: Music player cards render

- **WHEN** I scroll to the music player section
- **THEN** I see a horizontal carousel of album artwork cards
- **AND** each card shows the album art, artist/band name, and song title
- **AND** each card has an audio player control

### Requirement: Featured Album section

A split-layout section SHALL show an album thumbnail on the left (parallax
background) and a track listing on the right with a "Now Playing" bar.

#### Scenario: Featured album renders

- **WHEN** I scroll to the featured album section
- **THEN** I see "Featured album" label and album title "Love is all Around"
- **AND** a "Buy it on iTunes" gradient button
- **AND** a list of tracks with audio players
- **AND** a "Now Playing" bar at the bottom showing the active track

#### Scenario: Now Playing bar

- **WHEN** I view the featured album
- **THEN** a sticky "Now Playing" bar shows the currently playing track
  name and an audio control

### Requirement: Music / Artists split cards

Two side-by-side image cards SHALL display — one labeled "Music" and one
labeled "Artists" — each with a dark overlay and descriptive text.

#### Scenario: Split cards render

- **WHEN** I scroll to the music/artists section
- **THEN** I see two equal-width cards side by side
- **AND** the left card says "Music" with subtitle "Search for the best music"
- **AND** the right card says "Artists" with subtitle "Search for the best artists"
- **AND** each card has a background image with a purple overlay

### Requirement: Footer with columns and subscribe form

The footer SHALL have 4 columns: logo + copyright, About links, Links,
Social links, and a Subscribe form with email input + button.

#### Scenario: Footer renders

- **WHEN** I scroll to the footer
- **THEN** I see the logo and copyright text in the first column
- **AND** "About", "Links", and "Social" navigation columns
- **AND** a "Subscribe" column with email input and subscribe button

#### Scenario: Footer links to Component Dock

- **WHEN** I view the footer
- **THEN** I see "More templates at Component Dock" linking to
  https://www.componentdock.com/

### Requirement: ColorLib attribution removed

The template SHALL NOT contain any reference to ColorLib in user-facing
code, comments, or data. Attribution lives only in the spec and PR.

#### Scenario: No ColorLib references in app code

- **WHEN** I search the app source code
- **THEN** there are zero occurrences of "colorlib" or "Colorlib"
