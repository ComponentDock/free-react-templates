# Template: Ampstat (Music)

## Purpose

Recreation of ColorLib **Music** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

- Source: https://colorlib.com/wp/template/music/
- Preview: https://preview.colorlib.com/theme/music/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/music-free-fullscreen-musician-website-template.jpg
- New name: `ampstat` (apps/ampstat, @free-react-templates/ampstat)
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens (extracted from live preview CSS)

| Token                | Value                      | Usage                                     |
| -------------------- | -------------------------- | ----------------------------------------- |
| Primary brand green  | `#2ac275`                  | Buttons, accents, selection highlight     |
| Dark purple          | `#3b125d`                  | Newsletter background                     |
| Blue accent          | `#2457d7`                  | Secondary accent                          |
| Yellow accent        | `#cbdc0b` / `#eeff2d`      | Logo bars, hover states, highlighted text |
| Pink accent          | `#e830fe`                  | Logo bar center                           |
| Red accent           | `#ff1a4b`                  | Accent                                    |
| Light background     | `#eef2f6`                  | App section background                    |
| Text dark            | `#2a2a2a`                  | Headings                                  |
| Text muted           | `#6d6d6d`                  | Body paragraphs                           |
| Text light           | `#a5a5a5`                  | Secondary text                            |
| Font family          | `Josefin Sans`, sans-serif | Global font                               |
| Button border-radius | `22px` (pill shape)        | All CTA buttons                           |
| Card border-radius   | `15px` / `12px`            | Cards, album art                          |
| Overlay              | `rgba(0,0,0,0.66)`         | Hero, song, footer overlays               |

## Page structure (section order, from live preview DOM)

1. **Navbar** — Fixed transparent header. Logo: 5 equalizer bars (yellow-green-pink-green-yellow) + "music" text. Desktop nav: Home, Artists, Download Music, News, Contact. Login/Register links. Mobile hamburger menu.
2. **Hero** — Fullscreen background image with dark overlay. Centered heading "your music." with yellow highlight. Ticket booking form: event dropdown + ticket input + "get your tickets" pill button. Social sidebar (follow label + icon row). Scroll-down indicator.
3. **Song** — Parallax background with dark overlay. "Song of the Week" heading. Album art image. Play/pause button. Artist name. Progress bar with timestamps. Volume controls (mute + slider).
4. **Tours** — Two-column layout. Left: promotional card with background image, overlay frame, year/title/subtitle, CTA button. Right: "Tour Dates" list with date/venue/location per row, each with ticket button. "See All Tour Dates" link.
5. **App Section** — Light background. Two-column: app image left, "Get Your Music Right Now!" heading + description + App Store/Google Play badges right.
6. **Featured Albums** — Light background. Centered heading. 3-column album grid with album art, play button overlay, title, artist, year/track count.
7. **News** — White background. "Latest News" heading. 3-column news cards with image, date, title, excerpt. Second card has reversed image/text layout.
8. **Newsletter** — Purple background. Two-column: "Subscribe & Follow" heading + text left, email input + subscribe button right.
9. **Footer** — Background image with dark overlay. Logo (equalizer bars + "music"). Social icon row. Copyright bar with Component Dock link.

## Requirements

### Requirement: Header SHALL display logo and navigation

The navbar MUST show the equalizer-bar logo, navigation links, login/register on desktop, and a hamburger on mobile.

#### Scenario: Navbar content

- **WHEN** the page loads
- **THEN** the logo shows equalizer-bar icon and "music" text
- **AND** the nav links are "Home", "Artists", "Download Music", "News", "Contact"
- **AND** login/register links are visible on desktop
- **AND** a hamburger menu icon appears on mobile

### Requirement: Hero section SHALL render a fullscreen slider

The hero MUST display a fullscreen background image with heading, ticket form, social sidebar, and scroll indicator.

#### Scenario: Hero content

- **WHEN** the user is on the home page
- **THEN** a fullscreen background image is displayed
- **AND** the heading reads "your music."
- **AND** a ticket form has an event dropdown and ticket input
- **AND** a "get your tickets" CTA button is present
- **AND** social icons (Pinterest, Facebook, Twitter, Dribbble, Behance) are displayed
- **AND** a scroll-down indicator is visible

### Requirement: Song section SHALL render an audio player

The song section MUST display a parallax background with album art, play/pause controls, progress bar, artist name, and volume controls.

#### Scenario: Audio player controls

- **WHEN** the user scrolls to the Song section
- **THEN** a parallax background is displayed
- **AND** the heading reads "song of the week"
- **AND** album art image is shown
- **AND** play and stop buttons are rendered
- **AND** a progress bar with current time and duration is visible
- **AND** an artist name label is displayed
- **AND** volume controls (mute + slider) are present

### Requirement: Tours section SHALL display tour dates

The tours section MUST show a promotional card and a list of tour dates with venue info and ticket buttons.

#### Scenario: Tour listing

- **WHEN** the user scrolls to the Tours section
- **THEN** a promotional card shows background image with year, title, subtitle
- **AND** a "get your tickets" CTA button appears on the card
- **AND** a list of tour dates shows date, venue name, and location per row
- **AND** each row has a "get your tickets" button
- **AND** a "See All Tour Dates" link is present

### Requirement: App section SHALL promote app downloads

The app section MUST display an app screenshot, heading, description, and App Store/Google Play badges.

#### Scenario: App promo

- **WHEN** the user scrolls to the App section
- **THEN** an app screenshot image is displayed
- **AND** the heading reads "Get Your Music Right Now!"
- **AND** a description paragraph is shown
- **AND** App Store and Google Play badge links are present

### Requirement: Featured Albums section SHALL render album grid

The featured section MUST display a grid of albums with play controls.

#### Scenario: Album grid

- **WHEN** the user scrolls to the Featured section
- **THEN** the heading reads "Featured Albums"
- **AND** an album playlist is rendered with play controls

### Requirement: News section SHALL display news cards

The news section MUST show 3 news cards in a grid with image, date, title, and excerpt.

#### Scenario: News grid

- **WHEN** the user scrolls to the News section
- **THEN** the heading reads "Latest News"
- **AND** 3 news cards are displayed in a grid
- **AND** each card shows an image, date, title, and excerpt
- **AND** the second card has reversed image/text layout

### Requirement: Newsletter section SHALL provide subscription form

The newsletter MUST display a heading, description, email input, and subscribe button.

#### Scenario: Subscribe form

- **WHEN** the user scrolls to the Newsletter section
- **THEN** the heading reads "Subscribe & Follow"
- **AND** an email input field is present
- **AND** a "subscribe" button is present

### Requirement: Footer SHALL display branding and copyright

The footer MUST show a background image with overlay, logo, social icons, copyright, and Component Dock link.

#### Scenario: Footer content

- **WHEN** the user scrolls to the footer
- **THEN** the footer shows a background image with overlay
- **AND** the logo (equalizer bars + "music") is displayed
- **AND** social icons are shown
- **AND** a copyright line is present
- **AND** a Component Dock link is present
