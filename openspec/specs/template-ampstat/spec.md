# Template: Ampstat (Music)

## Purpose

A music template with hero, song, tours, app section, featured albums and news sections. Recreation of ColorLib "Music" template as a React 19 + Vite + Tailwind 4 + TypeScript app.

- Source: https://colorlib.com/wp/template/music/
- Preview: https://preview.colorlib.com/theme/music/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/music-free-fullscreen-musician-website-template.jpg
- New name: `ampstat` (apps/ampstat, @free-react-templates/ampstat)
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens (extracted from live preview CSS)

| Token                | Value                      | Usage                                     |
| -------------------- | -------------------------- | ----------------------------------------- |
| Primary brand green  | `#2ac275`                  | Buttons, accents, selection highlight     |
| Header / news band   | `linear-gradient(to right, #2457d7, #3b125d)` | Header (134 px → 75 px on scroll) and Latest News; the newsletter band is **white**, not purple |
| Header underline     | `linear-gradient(to right, #eeff2d, #2ac275)` | `.header::after`, 2 px tall               |
| Hero geometry        | `863px` tall · `h1` `110px/600` uppercase  | `.home`; `h1 span` in `#eeff2d`           |
| `LIVE` badge         | `#e830fe`, 90 px circle, `right:-72px`     | `.home_title.islive::after`               |
| Button measure       | `200×56px`, radius `22px`, gradient `#2ac275 → #cbdc0b → #2ac275` | `.button` / `.button::after` |
| Newsletter input     | `56px` tall, radius `22px`, `2px solid #e0e7ee` | `.newsletter_input`                  |
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
| Card border-radius   | `15px` ×2, `50%` ×8        | `.player_title`/`.news_post_date` pills and circular controls — the sheet declares only three radii (22px ×6, 15px ×2, 50% ×8); **no 12px anywhere** |
| Overlay              | `rgba(0,0,0,0.66)`         | **Featured-album caption bar only** (`.featured_list ul li > div:first-of-type`) — the sheet paints NO overlay on the hero, the song parallax band or the footer |

## Page structure (section order, from live preview DOM)

1. **Navbar** — Fixed transparent header. Logo: 5 equalizer bars (yellow-green-pink-green-yellow) + "music" text. Desktop nav: Home, Artists, Download Music, News, Contact. Login/Register links. Mobile hamburger menu.
2. **Hero** — Fullscreen background image with dark overlay. Centered heading "your music." with yellow highlight. Ticket booking form: event dropdown + ticket input + "get your tickets" pill button. Social sidebar (follow label + icon row). Scroll-down indicator.
3. **Song** — Parallax background with dark overlay. "Song of the Week" heading. Album art image. Play/pause button. Artist name. Progress bar with timestamps. Volume controls (mute + slider).
4. **Tours** — Two-column layout. Left: promotional card with background image, overlay frame, year/title/subtitle, CTA button. Right: "Tour Dates" list with date/venue/location per row, each with ticket button. "See All Tour Dates" link.
5. **App Section** — Light background. Two-column: app image left, "Get Your Music Right Now!" heading + description + App Store/Google Play badges right.
6. **Featured Albums** — Light background. Centered heading. 3-column album grid with album art, play button overlay, title, artist, year/track count.
7. **News** — **Purple/blue gradient band** (`.news` = `linear-gradient(to right, #2457d7, #3b125d)`). "Latest News" heading in white. 3-column news cards with image, date pill (#2ac275, radius 15px), title, white excerpt. Second card has reversed image/text layout.
8. **Newsletter** — **White background** (`.newsletter` = `#ffffff`). Two-column: "Subscribe & Follow" heading + text left, email input (56px, radius 22px, 2px #e0e7ee border) + subscribe button right.
9. **Footer** — Background image `images/footer.jpg` (inline `style`, **no CSS overlay**). Logo (equalizer bars + "music"). Social icon row (46px #2ac275 circles). Copyright bar — the reference credits Colorlib; the recreation links https://www.componentdock.com/ instead.

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
(lines 1480, 2270, 2271) collapse onto ONE live design. This prep (`ampstat`, rows 1480/2270) reproduces the design the directory
actually serves — the `music-2` rebuild — not the musician page its thumbnail
shows. Every measured token below comes from that directory's sheet, so the
palette is right; the *attribution* on the row is what does not match, and the
musician design has nothing left to build from.

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

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/ampstat/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/ampstat/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Header SHALL display logo and navigation — the logo shows equalizer-bar icon and "music" text
- [ ] Hero section SHALL render a fullscreen slider — a fullscreen background image is displayed
- [ ] Song section SHALL render an audio player — a parallax background is displayed
- [ ] Tours section SHALL display tour dates — a promotional card shows background image with year, title, subtitle
- [ ] App section SHALL promote app downloads — an app screenshot image is displayed
- [x] Featured Albums section SHALL render album grid — the heading reads "Featured Albums"
- [x] News section SHALL display news cards — the heading reads "Latest News"
- [x] Newsletter section SHALL provide subscription form — the heading reads "Subscribe & Follow"
