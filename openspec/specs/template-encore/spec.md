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
| Dark purple | #3b125d | Header + news band gradient stop (`linear-gradient(to right, #2457d7, #3b125d)`) |
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
| Header | `linear-gradient(to right, #2457d7, #3b125d)` + 2px `linear-gradient(to right, #eeff2d, #2ac275)` underline (`.header::after`) |
| Home hero | Fullscreen background image (parallax) |
| Song / Player | Parallax background image |
| Tours | White #ffffff |
| App download | #eef2f6 light gray |
| Featured | White #ffffff |
| News | `linear-gradient(to right, #2457d7, #3b125d)` |
| Newsletter | White #ffffff |
| Footer | White #ffffff |

<!-- role-rule-tokens: music/body -->
**Role rule (measured 2026-10-25):** 1 rule(s) own body; strongest `body{color:#a5a5a5}` — the design declares `#a5a5a5`; this prep states `#6d6d6d`, which no rule that owns the body text colour declares. The sibling prep `melody` states the measured value.
<!-- /role-rule-tokens -->

## Reference identity — catalogue URL collision (measured 2026-10-24)

Two catalogue keys resolve to `https://preview.colorlib.com/theme/music/` in the
preview host's own 1,889-entry map
(`assets/js/catalog-products-20261009-trace-developer.js`):

| catalogue key | `details` post | that entry's `img` |
| --- | --- | --- |
| `music` (bare slug) | `/wp/template/music-2/` — "Music – Free Mobile-Ready Music Website Template **2026**" (published 2019-01-19, modified 2026-09-05) | `music-free-template.jpg` — the blue/purple **"YOUR MUSIC."** page |
| `catalog-141301` | `/wp/template/music/` — "Music – Free Creative Musician Website Template" (published 2018-01-12, modified 2026-09-05) | `music-free-fullscreen-musician-website-template.jpg` — the magenta/violet **"MUSIC IS LIFE"** fullscreen page |

The newer post owns the shared directory (the `-24t`/`-24u` tell): the bare-slug
`music` key's `details` is `/template/music-2/`, and the directory renders **that**
design. Measured chain (all fetched 2026-10-24, `curl -4`, Chrome/124 UA):

| Fact | Reading |
| --- | --- |
| demo dir | `theme/music/` HTTP **200**, **24,529 B**; `theme/music/index.html` 200, same 24,529 B — a no-op link, never a 404 |
| theme sheet | `styles/main_styles.css` **32,427 B**, sha256 `beba86a028d7b404b7686646afef111662cd0b8e0de7cfd6aca8b7ea44fd63d9`; `styles/responsive.css` **7,381 B**, sha256 `9f91b001d0c12e8aca6b309c3ca85fd48caa0f08f94176fcdf35c6113d0a6048` |
| vendor | `styles/bootstrap-4.1.2/bootstrap.min.css` **142,041 B**, sha256 `cd5525bc887734465161af57feaa4d63c3f5681cb477816b23b6e17d94995707`; jQuery 3.3.1, OwlCarousel 2.3.4, **jPlayer** (`plugins/jPlayer/jquery.jplayer.min.js` 60,950 B), ScrollMagic/TweenMax/parallax — the 2019 build the `music-2` post ships |
| faces | one `@import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,600,700')` (line 28 of the sheet); **no self-hosted face** |
| nav labels | `Home · Artists · Download Music · News · Contact` + `Login / Register` — what the `music-2` thumbnail shows, and **not** the musician page's hamburger-only chrome |
| h1 set | `your music.` ×3 (three owl-carousel slides, each `background-image:url(images/index.jpg)`), then `Tour Dates`, `Get Your Music Right Now!`, `Featured Albums`, `Latest News`, `Subscribe & Follow` |
| pages | **4 live pages, all 200**: `index.html` 24,529 B · `artists.html` 26,880 B · `blog.html` 15,422 B · `contact.html` 9,726 B (`about.html` **404**) |
| anchors | index holds **46** anchors — **35 dead `href="#"`**, 8 real page links (`index.html`/`artists.html`/`blog.html`/`contact.html` ×2 each), 2 `get.adobe.com/flashplayer` (the jPlayer "Update Required" decoy), 1 `colorlib.com` |
| forms | hero `form.tickets_form` ×3 (one per slide): `input[type=text] placeholder="Tickets" required` + `button.tickets_form_button`; the "Event" control is a **div** (`custom_dropdown` → `Event 1/2/3`), *not* a `<select>`; newsletter `form#newsletter_form`: `input[type=email] placeholder="Your E-mail" required` + `button.newsletter_button` |
| archive | `downloads/free/music.zip` **404** and `downloads/free/music-2.zip` **404** — the live directory is the only reference that exists |

The `music` post's row thumbnail is the **undemo'd variant**:
`music-free-fullscreen-musician-website-template.jpg` (1200×967) is a magenta→violet
radial page — pixel samples, never CSS declarations: nav band `#aa1ddd`→`#e01cbc`
at y≈60, hero `#8a1ced`→`#d61ebe` at y≈250, `#691cff`→`#aa1ddb` at y≈800, white
`MUSIC IS LIFE` headline over three dancers, hamburger top-right and **no nav
links**. Every prefix tried → **404**: `theme/music-2/`, `theme/music2/`,
`theme/fullscreen-music/`, `theme/fullscreen-musician/`, `theme/musician/`,
`theme/bootstrap/music/`, `theme/bb/music/`, `theme/etc/music/`,
`colorlib.com/etc/music/index.html`; both archives 404. No DOM, no stylesheet, no
archive — that design cannot be measured, so it is **unbuildable from a live
reference**.

**Consequence:** the three `**Music**`/`**Music 2**` rows in `TEMPLATES.md`
(lines 1480, 2270, 2271) collapse onto ONE live design. This prep (`encore`) reproduces the design the directory actually serves — the
`music-2` rebuild — and is superseded by `ampstat` (see SHIPPED-UNDER above).
The musician page its thumbnail shows has no demo and no archive, so it is not
a buildable target and must not be scaffolded.

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
