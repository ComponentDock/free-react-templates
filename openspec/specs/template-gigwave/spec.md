# Template: Gigwave (Music Event / Band)

## Purpose

Recreation of ColorLib "Hnband" template as a React 19 + Vite + Tailwind 4 + TypeScript app.

- **Source:** ColorLib "Hnband" — https://colorlib.com/wp/template/hnband/
- **Preview:** https://preview.colorlib.com/theme/hnband/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/hnband-free-template.jpg
- **New name:** gigwave (package: `@free-react-templates/gigwave`)
- **Deploy target:** `gigwave.free.componentdock.com`

## Design tokens

Extracted from `https://preview.colorlib.com/theme/hnband/css/style.css`:

| Token | Value | Usage |
|-------|-------|-------|
| Brand purple | `#503aca` | Button gradient start, video section bg, section accents |
| Brand magenta | `#ea34ff` | Button gradient end, section accents |
| Accent magenta | `#e934ff` | Subtitle text (Satisfy cursive) |
| Dark bg primary | `#0c0617` | About section, shows section, footer bg overlay |
| Dark bg player | `#0F0923` | Player section background |
| Dark bg video player | `#100923` | Video player panel |
| Dark bg footer top | `#191039` | Footer top form area |
| Dark bg footer | `#1f1448` | Footer section background |
| Dark bg hover | `#231d2d` | Show item hover effect |
| Dark bg mid | `#291d66` | Intermediate purple-dark |
| Text white | `#ffffff` / `#fff` | Headings on dark backgrounds |
| Text muted | `#c4c4c4` | Body paragraph text |
| Text dark | `#222222` | Headings on light backgrounds |
| Font primary | Nunito Sans (Google Fonts) | All body text and headings |
| Font cursive | Satisfy (Google Fonts) | Subtitle / section label text |
| Button gradient | `linear-gradient(45deg, #503aca, #ea34ff)` | Primary CTA buttons (no border-radius, square) |
| Button outline | gradient border-image | Outline variant of CTA button |
| Button padding | 17px 33px 15px | CTA buttons |
| Button text | uppercase, bold, white | CTA buttons |
| Loader accent | `#f44336` / `#673ab7` | Preloader spinner animation |

### Header / Navbar

- Transparent/absolute positioned (sits over hero)
- Logo image on left (col-lg-2)
- Main menu centered (col-lg-8): Home, About, Albums, Tours, Pages (dropdown), Blog, Contact
- Pages dropdown: Gallery, Ticket, Albums details, Blog single
- "Buy tickets" button on right (col-lg-2, hidden on mobile < lg)
- Mobile: hamburger (slicknav) toggles menu

### Hero Section

- Full-width dark background image (`hero-bg.png`)
- Height: ~1275px desktop, 900px mobile
- Owl Carousel slider with 2+ items, max-width 750px
- Each item: span "The electro vibe" (Satisfy cursive, 34px), h2 "Tailor Lachiri" (large, white), paragraph text, "Buy tickets" button
- Slider navigation: round buttons (50px, border-radius 50%, semi-transparent black bg)
- Text: all white

### About Section

- Background: `#0c0617` (very dark purple-black)
- Two-column layout: left = image, right = text
- "About us" subtitle (Satisfy cursive, magenta), h2 "The electro vibe", paragraph, "Contact us" button
- Negative margin overlap with hero (-255px)

### Discography Section

- Embedded within about section (negative margin -406px, padding-top 475px)
- Dark overlay background image (`discography-bg.png`)
- "Our Discography" subtitle (Satisfy cursive, magenta), h2 "newest albums & singles."
- "Buy on iTunes" button (right-aligned)
- 4x2 grid of album cards (col-lg-3 col-sm-6): album art image, title (h4), artist (p)
- 8 albums total: I'm a mess, Natural, Sweet But Psycho, Waiting For Love, So Am I, Mamma Mia, Bad Guy, Let me down slowly

### Player Section

- Background: `#0F0923`
- Split layout: left (col-lg-6) = track info + audio player, right (col-lg-6) = playlist
- Audio player: jPlayer-based with prev/play/next controls, progress bar, volume controls
- Track info: track name (h5), artist (p)
- Playlist: scrollable list of tracks

### Video Section

- Background: `#503aca` with dark overlay
- "Our Videos" subtitle, h2 "newest albums & singles."
- Split layout: left (col-lg-8) = video player (520px height), right (col-lg-4) = video playlist
- Video player with prev/play/next, progress bar, volume, playlist sidebar
- Player panel background: `#100923`

### Shows Section

- Background: `#0c0617`
- "Upcoming Shows" subtitle, h2 "WHEN WE ALL FALL ASLEEP", "View all" button
- List of show items, each with:
  - Date block (day number large h2 + month)
  - Show title (h4) + details (genre, language, age, duration)
  - Location (map marker icon + venue)
  - Time (clock icon + time)
  - "Buy tickets" button (outline variant)
- Hover: background highlight (`#231d2d`, opacity transition)
- Separator: 1px border-bottom (rgba(235,235,235,0.1))

### Footer Section

- Background: `#1f1448` with gradient overlay
- Footer top: `#191039` bg, two-column layout:
  - Left (col-lg-8): contact form (Name, Email, Message, "Send Email" button) + section title "Contact us" / "Got a Question?"
  - Right (col-lg-4): footer image
- Three-column info row:
  - Address (map marker icon)
  - Phone + email
  - Social icons (Facebook, Twitter, YouTube, Instagram)
- Copyright bar at bottom (Component Dock attribution replaces Colorlib credit)

## Gherkin scenarios

### Header / Navbar
```gherkin
Scenario: Header displays logo, nav links, and buy tickets button
  Given the user visits the page
  Then a transparent header is overlaid on the hero section
  And the site logo is displayed on the left
  And navigation links (Home, About, Albums, Tours, Pages, Blog, Contact) are visible
  And a "Buy tickets" button is visible on the right (hidden on mobile)

Scenario: Header is responsive on mobile
  Given the user views on a mobile viewport
  Then a hamburger menu icon is displayed
  When the user taps the hamburger icon
  Then the navigation menu opens as an overlay
```

### Hero Section
```gherkin
Scenario: Hero displays slider with featured event
  Given the user visits the page
  Then a hero section with a dark background image is visible
  And a carousel slider shows items with cursive subtitle and event heading
  And each item has a description paragraph and "Buy tickets" CTA button
  And the slider auto-advances between items

Scenario: Hero slider navigation
  Given the hero slider is visible
  When the user clicks the next/prev navigation button
  Then the slider transitions to the next/previous item
```

### About Section
```gherkin
Scenario: About section shows band info with image
  Given the user scrolls to the About section
  Then a two-column layout is displayed
  And the left column shows a band/performance image
  And the right column shows "About us" subtitle, heading, description, and "Contact us" button
```

### Discography Section
```gherkin
Scenario: Discography shows album grid
  Given the user scrolls to the Discography section
  Then a section title "Our Discography" with "newest albums & singles." heading is visible
  And a "Buy on iTunes" button is displayed on the right
  And 8 album cards are displayed in a 4-column grid
  And each card shows album art, title, and artist name

Scenario: Album cards are interactive
  Given the discography grid is visible
  When the user hovers over an album card
  Then the card responds with a hover effect
```

### Player Section
```gherkin
Scenario: Audio player displays track info and controls
  Given the user scrolls to the Player section
  Then a split layout shows track info on the left and playlist on the right
  And the player has prev/play/next controls
  And a progress bar and volume controls are visible
  And a scrollable playlist of tracks is displayed on the right
```

### Video Section
```gherkin
Scenario: Video section shows player and playlist
  Given the user scrolls to the Video section
  Then a section title "Our Videos" is displayed
  And a video player area is shown on the left (8 columns)
  And a video playlist sidebar is shown on the right (4 columns)
  And the player has playback controls and a progress bar
```

### Shows Section
```gherkin
Scenario: Shows list displays upcoming events
  Given the user scrolls to the Shows section
  Then a section title "Upcoming Shows" is visible with "View all" button
  And multiple show items are listed
  And each show item displays: date (day + month), title, details, venue, time, and "Buy tickets" button

Scenario: Show items respond to hover
  Given the shows list is visible
  When the user hovers over a show item
  Then the item background highlights with a transition effect
```

### Footer Section
```gherkin
Scenario: Footer displays contact form and info
  Given the user scrolls to the footer
  Then a contact form section with Name, Email, Message fields and "Send Email" button is visible
  And a footer image is displayed beside the form
  And address, phone/email, and social icons are shown below
  And a copyright line with Component Dock attribution is displayed

Scenario: Footer is responsive on mobile
  Given the user views on a mobile viewport
  Then the contact form and footer image stack vertically
  And info columns stack vertically
```

### Responsive Design
```gherkin
Scenario: Layout adapts to mobile viewport
  Given the user views the page on a 375px wide viewport
  Then the "Buy tickets" header button is hidden
  And the hero section height reduces to ~900px
  And the about section columns stack vertically
  And the discography grid becomes 2-column
  And the player section stacks vertically
  And the video section stacks vertically
  And the shows list items stack vertically
  And the footer columns stack vertically
```

## Verification checklist

- [ ] Header: transparent overlay on hero, logo + 7 nav links + dropdown + "Buy tickets" button, mobile hamburger
- [ ] Hero: dark bg image, owl-carousel-like slider, cursive subtitle + heading + description + CTA, round nav buttons
- [ ] About: dark bg (#0c0617), two-column (image + text), "About us" subtitle, "Contact us" CTA
- [ ] Discography: overlay bg, 4x2 album grid (8 cards), "Buy on iTunes" button, section title with cursive subtitle
- [ ] Player: dark bg (#0F0923), split layout, audio controls (prev/play/next), progress bar, volume, playlist
- [ ] Video: purple bg (#503aca), section title, video player (left 8col), playlist sidebar (right 4col)
- [ ] Shows: dark bg (#0c0617), "Upcoming Shows" title, list of show items with date/title/venue/time/CTA, hover effect
- [ ] Footer: contact form (Name/Email/Message/Send), footer image, address/phone/social, copyright with Component Dock
- [ ] Typography: Nunito Sans (body), Satisfy (cursive subtitles)
- [ ] Colors: purple #503aca → magenta #ea34ff gradient, dark #0c0617 bg, magenta #e934ff subtitles
- [ ] Buttons: gradient bg (no radius, square), uppercase, bold, white text; outline variant available
- [ ] Responsive: mobile-first, stacking columns, hamburger nav, reduced hero height
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Picsum photos used for placeholder images
- [ ] Lucide-react icons used (not Font Awesome)
- [ ] 100% test coverage (Vitest + Testing Library)
