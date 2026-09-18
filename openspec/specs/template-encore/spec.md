# Template: Encore (Music / Fullscreen Musician)

## Purpose

Recreation of the ColorLib **Music** template as a single-page React app.
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

## Gherkin Requirements

### Header

```gherkin
Feature: Header navigation

  Scenario: Header displays logo and navigation
    Given the user loads the page
    Then the header contains the logo text "encore"
    And the header navigation shows links: Home, Artists, Download Music, News, Contact
    And the header background is dark purple (#3b125d)
    And the header is centered with flex layout

  Scenario: Mobile hamburger menu
    Given the viewport is narrow (mobile)
    When the user taps the hamburger icon
    Then a full-screen menu overlay appears with all navigation links
    And the overlay has a dark purple background
    And the overlay has a close button (X icon)
```

### Home Hero

```gherkin
Feature: Home hero section

  Scenario: Hero displays fullscreen slider
    Given the user loads the page
    Then a fullscreen hero slider is visible
    And each slide shows a background image
    And the heading reads "your music." with "music." as an accent span
    And a ticket form is displayed below the heading

  Scenario: Ticket form functionality
    Given the hero section is visible
    Then the ticket form has an Event dropdown selector
    And the ticket form has a text input for "Tickets"
    And the ticket form has a "get your tickets" button
    And the button has a green gradient background on hover

  Scenario: Slider navigation
    Given the hero slider is active
    Then slider navigation arrows are visible
    And the user can navigate between slides
```

### Song / Music Player

```gherkin
Feature: Music player section

  Scenario: Player displays with parallax background
    Given the user scrolls to the song section
    Then a parallax background image is visible
    And the music player widget is displayed
    And the player shows a song image (square with white border)
    And the player shows song title and artist info
    And the player has play/pause, previous, and next controls

  Scenario: Player controls are interactive
    Given the music player is visible
    Then play/pause button toggles playback state
    And a progress bar shows current playback position
    And volume controls include a mute button and volume slider
```

### Tours

```gherkin
Feature: Tour dates section

  Scenario: Tour list displays on white background
    Given the user scrolls to the tours section
    Then the section has a white background
    And a "Tour Dates" section title is displayed
    And multiple tour date entries are listed
    And each tour entry shows date, venue, and location
    And each entry has a "add" link to add the event

  Scenario: Tour link hover effect
    Given a tour entry is displayed
    When the user hovers over the "add" link
    Then the link color transitions to green (#2ac275)
```

### App Download

```gherkin
Feature: App download section

  Scenario: App section on light gray background
    Given the user scrolls to the app section
    Then the section has a light gray background (#eef2f6)
    And an app screenshot image is displayed
    And app description text is shown
    And the section promotes downloading the companion app
```

### Featured Artists

```gherkin
Feature: Featured artists section

  Scenario: Featured list on white background
    Given the user scrolls to the featured section
    Then the section has a white background
    And a "Featured" section title is displayed
    And a list of featured artists/tracks is shown
    And each entry has play functionality
    And artist names are displayed with track info
```

### News / Blog

```gherkin
Feature: News section

  Scenario: News posts on dark purple background
    Given the user scrolls to the news section
    Then the section has a dark purple background (#3b125d)
    And a "News" section title is displayed in white
    And three news post cards are shown in a grid
    And each card has a date badge (green circle)
    And each card has a post title, text excerpt, and image
    And post titles link to full articles

  Scenario: News card layout
    Given news posts are displayed
    Then some cards show image on top with content below
    And some cards show image on the side with content beside it
```

### Newsletter

```gherkin
Feature: Newsletter subscription

  Scenario: Newsletter form on white background
    Given the user scrolls to the newsletter section
    Then the section has a white background
    And a "Newsletter" title and description text are shown
    And an email input field is displayed with rounded border (22px radius)
    And a "subscribe" button is shown with green background
    And the button has a gradient hover effect
```

### Footer

```gherkin
Feature: Footer

  Scenario: Footer with logo and social links
    Given the user scrolls to the footer
    Then the footer contains the logo text "encore"
    And social media icon links are displayed (Facebook, Instagram, Spotify, Twitter)
    And a "Component Dock" attribution link is present
```

## Verification Checklist

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
