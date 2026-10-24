# Template: Encore (Music / Fullscreen Musician)
<!-- prep-status: shipped-as=ampstat -->
> **SHIPPED-UNDER** — the ColorLib `music` design this prep describes already
> ships as `apps/ampstat` (<https://ampstat.free.componentdock.com>).
> Do not scaffold `apps/encore`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-ampstat/spec.md`.

## Purpose

Recreation of the ColorLib "Music" template as a single-page React app.
- **ColorLib source:** https://colorlib.com/wp/template/music/
- **Preview:** https://preview.colorlib.com/theme/music/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/music-free-fullscreen-musician-website-template.jpg
- **New name:** `encore` (apps/encore, @free-react-templates/encore)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Music / Fullscreen Musician Website

## Design Tokens (extracted from preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| Font family | Josefin Sans (Google Fonts, weights 300/400/600/700) | Body, headings, nav |
| Brand green | #2ac275 | Buttons, accents, links, hover states |
| Dark purple | #3b125d | Header background, news section background |
| Yellow-green accent | #eeff2d | Button hover gradient, accent highlights |
| Lime accent | #cbdc0b | Button gradient mid-stop, featured list hover |
| Body text | #6d6d6d | Paragraphs, secondary text |
| Muted text | #a5a5a5 | Body default |
| Link underline | #ffa07f | Paragraph link bottom border |
| Light gray bg | #eef2f6 | App download section background |
| White | #ffffff | Tours, Featured, Newsletter sections |
| Border radius | 22px | Buttons, inputs, newsletter input |
| Border radius | 50% | Player controls, circular elements |
| Button height | 56px | Ticket form button, newsletter button |

### Section backgrounds

| Section | Background |
|---------|-----------|
| Header | #3b125d (dark purple) |
| Home hero | Fullscreen background image (parallax) |
| Song / Player | Parallax background image |
| Tours | White #ffffff |
| App download | #eef2f6 light gray |
| Featured | White #ffffff |
| News | #3b125d (dark purple) |
| Newsletter | White #ffffff |
| Footer | White #ffffff |

## Requirements

### Header

Feature: Header navigation

#### Scenario: Header displays logo and navigation

- **GIVEN** the user loads the page
- **THEN** the header contains the logo text "encore"
- **AND** the header navigation shows links: Home, Artists, Download Music, News, Contact
- **AND** the header background is dark purple (#3b125d)
- **AND** the header is centered with flex layout

#### Scenario: Mobile hamburger menu

- **GIVEN** the viewport is narrow (mobile)
- **WHEN** the user taps the hamburger icon
- **THEN** a full-screen menu overlay appears with all navigation links
- **AND** the overlay has a dark purple background
- **AND** the overlay has a close button (X icon)

### Home Hero

Feature: Home hero section

#### Scenario: Hero displays fullscreen slider

- **GIVEN** the user loads the page
- **THEN** a fullscreen hero slider is visible
- **AND** each slide shows a background image
- **AND** the heading reads "your music." with "music." as an accent span
- **AND** a ticket form is displayed below the heading

#### Scenario: Ticket form functionality

- **GIVEN** the hero section is visible
- **THEN** the ticket form has an Event dropdown selector
- **AND** the ticket form has a text input for "Tickets"
- **AND** the ticket form has a "get your tickets" button
- **AND** the button has a green gradient background on hover

#### Scenario: Slider navigation

- **GIVEN** the hero slider is active
- **THEN** slider navigation arrows are visible
- **AND** the user can navigate between slides

### Song / Music Player

Feature: Music player section

#### Scenario: Player displays with parallax background

- **GIVEN** the user scrolls to the song section
- **THEN** a parallax background image is visible
- **AND** the music player widget is displayed
- **AND** the player shows a song image (square with white border)
- **AND** the player shows song title and artist info
- **AND** the player has play/pause, previous, and next controls

#### Scenario: Player controls are interactive

- **GIVEN** the music player is visible
- **THEN** play/pause button toggles playback state
- **AND** a progress bar shows current playback position
- **AND** volume controls include a mute button and volume slider

### Tours

Feature: Tour dates section

#### Scenario: Tour list displays on white background

- **GIVEN** the user scrolls to the tours section
- **THEN** the section has a white background
- **AND** a "Tour Dates" section title is displayed
- **AND** multiple tour date entries are listed
- **AND** each tour entry shows date, venue, and location
- **AND** each entry has a "add" link to add the event

#### Scenario: Tour link hover effect

- **GIVEN** a tour entry is displayed
- **WHEN** the user hovers over the "add" link
- **THEN** the link color transitions to green (#2ac275)

### App Download

Feature: App download section

#### Scenario: App section on light gray background

- **GIVEN** the user scrolls to the app section
- **THEN** the section has a light gray background (#eef2f6)
- **AND** an app screenshot image is displayed
- **AND** app description text is shown
- **AND** the section promotes downloading the companion app

### Featured Artists

Feature: Featured artists section

#### Scenario: Featured list on white background

- **GIVEN** the user scrolls to the featured section
- **THEN** the section has a white background
- **AND** a "Featured" section title is displayed
- **AND** a list of featured artists/tracks is shown
- **AND** each entry has play functionality
- **AND** artist names are displayed with track info

### News / Blog

Feature: News section

#### Scenario: News posts on dark purple background

- **GIVEN** the user scrolls to the news section
- **THEN** the section has a dark purple background (#3b125d)
- **AND** a "News" section title is displayed in white
- **AND** three news post cards are shown in a grid
- **AND** each card has a date badge (green circle)
- **AND** each card has a post title, text excerpt, and image
- **AND** post titles link to full articles

#### Scenario: News card layout

- **GIVEN** news posts are displayed
- **THEN** some cards show image on top with content below
- **AND** some cards show image on the side with content beside it

### Newsletter

Feature: Newsletter subscription

#### Scenario: Newsletter form on white background

- **GIVEN** the user scrolls to the newsletter section
- **THEN** the section has a white background
- **AND** a "Newsletter" title and description text are shown
- **AND** an email input field is displayed with rounded border (22px radius)
- **AND** a "subscribe" button is shown with green background
- **AND** the button has a gradient hover effect

### Footer

Feature: Footer

#### Scenario: Footer with logo and social links

- **GIVEN** the user scrolls to the footer
- **THEN** the footer contains the logo text "encore"
- **AND** social media icon links are displayed (Facebook, Instagram, Spotify, Twitter)
- **AND** a "Component Dock" attribution link is present

## Verification checklist

- [ ] Header: dark purple bg, centered nav, logo with equalizer bars icon
- [ ] Hero: fullscreen slider, "your music." heading, ticket form with dropdown + input + button
- [ ] Song: parallax bg, music player with controls, progress bar, volume
- [ ] Tours: white bg, tour date list with date/venue/location + "add" links
- [ ] App: light gray bg, app screenshot + description
- [ ] Featured: white bg, featured artist/track list with play buttons
- [ ] News: dark purple bg, 3-column grid of blog cards with date badges
- [ ] Newsletter: white bg, email input (22px radius) + subscribe button
- [ ] Footer: logo, social icons, Component Dock link
- [ ] Font: Josefin Sans loaded via Google Fonts
- [ ] Colors: green #2ac275, purple #3b125d, yellow-green #eeff2d
- [ ] Responsive: hamburger menu on mobile, stacked layouts
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
