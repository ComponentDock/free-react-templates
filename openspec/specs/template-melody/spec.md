# Template: Melody (Fullscreen Music Website)
<!-- prep-status: shipped-as=ampstat -->
> **SHIPPED-UNDER** — the ColorLib `music` design this prep describes already
> ships as `apps/ampstat` (<https://ampstat.free.componentdock.com>).
> Do not scaffold `apps/melody`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-ampstat/spec.md`.

## Purpose

Melody is a single-page fullscreen music website in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Music" free
template (source: https://colorlib.com/wp/template/music/), built under a
DIFFERENT name (**Melody**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a fullscreen musician/band website: a dark purple-to-blue
gradient header with logo and navigation, a full-viewport owl-carousel hero
slider ("your music.") with a ticket search form overlaid, a parallax
"Song of the Week" audio player section, a two-column Tour Dates list with
a promotional "world tour" card, a "Get Your Music Right Now!" app download
section, a Featured Albums playlist grid, a Latest News 3-column blog card
grid, a "Subscribe & Follow" newsletter section, and a dark footer with
logo + social icons. The aesthetic is bold, colorful, and music-industry
themed — neon green (#2ac275) accents on a purple (#3b125d) / blue (#2457d7)
gradient base, with bright yellow (#eeff2d) and magenta (#e830fe) highlights.
Josefin Sans is the sole font. Pill-shaped buttons (22px radius) with a
green-to-yellow gradient.

**Preview URL:** https://preview.colorlib.com/theme/music/

## Naming

The ColorLib source name "Music" is FORBIDDEN as the app name. The NEW
name is **Melody** (single lowercase word, music-related, no collision with
`ls apps/` or `openspec/specs/`). Source slug: `music`.

- App folder: `apps/melody`
- Package: `@free-react-templates/melody`
- CNAME: `melody.free.componentdock.com`
- Homepage: `https://melody.free.componentdock.com`

## Design Tokens (extracted from live preview CSS)

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| Brand green | `#2ac275` | Primary accent, active nav dot, social circles, player bar (buttons paint a 3-stop gradient, not this flat) |
| Dark purple | `#3b125d` | Header background, menu background |
| Deep blue | `#2457d7` | Header gradient left, menu gradient left |
| Bright yellow | `#eeff2d` | Header scroll state, button gradient, extra_year |
| Lime yellow | `#cbdc0b` | Button gradient center |
| Magenta/pink | `#e830fe` | `LIVE` badge circle (90px, `right:-72px`) and the logo's centre bar — **not** the nav marker |
| Coral/salmon | `#ffa07f` | Paragraph link bottom border (`p a`), and its hover fill — not a section background |
| Tomato red | `#ff1a4b` | `.jp-state-playing .jp-play` (playing button fill + border) and `.album_play_button` |
| Body text dark | `#2a2a2a` | Headings, primary text |
| Body text medium | `#6d6d6d` | Secondary text |
| Body text light | `#a5a5a5` | Placeholder, muted text |
| Page background | `#FFFFFF` | Body background |
| Section background | `#eef2f6` | Light gray section backgrounds |

### Gradients
| Name | Value |
|------|-------|
| Header/menu | `linear-gradient(to right, #2457d7, #3b125d)` |
| Button | `linear-gradient(to right, #2ac275, #cbdc0b, #2ac275)` |
| Header underline | `linear-gradient(to right, #eeff2d, #2ac275)` — `.header::after`, a **2px rule**, not the scrolled state (scrolling only shrinks the header 134px → 75px) |

### Typography
| Token | Value |
|-------|-------|
| Font family | `'Josefin Sans', sans-serif` (Google Fonts) |
| Body text | 14px, `#a5a5a5` |
| Headings (h1) | Section titles, large bold |
| Logo text | Lowercase, bold |

### Buttons
| Property | Value |
|----------|-------|
| Border radius | `22px` (pill shape) |
| Background | `linear-gradient(to right, #2ac275, #cbdc0b, #2ac275)` via `.button::after` (200×56px, radius 22px; the flat `#2ac275` is the fallback `background-color`) |
| Text color | `#ffffff` |
| Hover | Gradient underline effect via `::after` pseudo-element |
| Button variants | `.button`, `.extra_button`, `.tour_button`, `.newsletter_button` |

### Misc
| Property | Value |
|----------|-------|
| Border radius (cards) | `15px` |
| Border radius (social icons) | `50%` (circular) |
| Overlay | `rgba(0,0,0,0.66)` on the **featured-album caption bar only** — the hero, the song parallax band and the footer paint no overlay |
| Semi-transparent white | `rgba(255,255,255,0.14)` and `rgba(255,255,255,0.63)` |

## Visual Design (from TEMPLATES.md screenshot)

The screenshot shows a dark, moody musician website with:
- Full-viewport hero slider with a dark background image and large
  white "your music." headline text centered, with a ticket search
  form overlay
- Bold neon green (#2ac275) accents throughout
- Purple-to-blue gradient header bar with "music" logo text and
  horizontal navigation
- Clean, bold typography (Josefin Sans) in white on dark backgrounds
- Music player controls in a parallax section
- Tour dates list with green pill "get your tickets" buttons
- App download section with phone mockup images
- 3-column news cards
- Newsletter subscription with green button
- Dark footer with social icon circles

## Section Structure (page order from live preview)

1. **Header** — logo (5-bar graphic + "music" text) + main nav (Home,
   Artists, Download Music, News, Contact) + login/register links
2. **Hero Slider** — owl-carousel, 3 slides, each with:
   - Full-viewport background image (dark overlay `rgba(0,0,0,0.66)`)
   - Centered white h1 "your music." (with green span)
   - Ticket search form: Event dropdown + Tickets input + Search button
   - Social links sidebar ("follow" text + icon list)
   - Scroll-down arrow
3. **Song of the Week** — parallax background section:
   - Audio player controls (play/stop buttons)
   - Song image (album art)
   - Progress bar with current time / duration
   - Artist name "Michael Smith"
   - Volume controls with mute button
4. **Tour Dates** — two-column layout:
   - Left (col-lg-8): "Tour Dates" title + list of tour dates
     (date, venue name, location, "get your tickets" button per row)
     + "See All Tour Dates" link
   - Right (col-lg-4): Promotional card with background image,
     "it's awesome" text, "2019" year, "world tour" title,
     "november 2018" subtitle, "get your tickets" button
5. **App Download** — two-column layout:
   - Left: phone/device image
   - Right: "Get Your Music Right Now!" title + description text
     + App Store + Google Play download buttons
6. **Featured Albums** — centered section:
   - "Featured Albums" title (centered)
   - Playlist grid (jplayer playlist with album images)
7. **Latest News** — three-column card grid:
   - Each card: image (alternating top/bottom), date, title, text
   - Cards: "Music Seminary at Festival", "Festival list for 2019",
     "New album release in 2019"
8. **Newsletter** — two-column layout:
   - Left: "Subscribe & Follow" title + description text
   - Right: Email input + "subscribe" green pill button
9. **Footer** — dark background image:
   - Logo (same 5-bar + text)
   - Social icons row (Pinterest, Facebook, Twitter, Dribbble, Behance)
   - Copyright bar

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
(lines 1480, 2270, 2271) collapse onto ONE live design. This prep (`melody`) reproduces the design the directory actually serves — the
`music-2` rebuild — and is superseded by `ampstat` (see SHIPPED-UNDER above).
The musician page its thumbnail shows has no demo and no archive, so it is not
a buildable target and must not be scaffolded.

## Requirements

### Hero Slider

Feature: Hero Slider
As a visitor, I want to see a fullscreen hero slider so I can discover the music site.

#### Scenario: Hero slider renders with background images

- **GIVEN** the page loads
- **THEN** a fullscreen hero section is visible
- **AND** the hero has a dark overlay on the background image
- **AND** the headline "your music." is displayed in large white text

#### Scenario: Ticket search form is present

- **GIVEN** the hero slider is visible
- **THEN** an Event dropdown selector is displayed
- **AND** a Tickets text input is displayed
- **AND** a Search button is displayed

#### Scenario: Social links sidebar is visible

- **GIVEN** the hero slider is visible
- **THEN** a "follow" label is displayed
- **AND** social media icon links are displayed in a vertical list

#### Scenario: Scroll down indicator is visible

- **GIVEN** the hero slider is visible
- **THEN** a scroll-down arrow/link is displayed at the bottom

### Song of the Week Player

Feature: Song of the Week Player
As a visitor, I want to play a featured song so I can preview the music.

#### Scenario: Player section renders with parallax background

- **GIVEN** the Song of the Week section is in the viewport
- **THEN** a parallax background image is displayed
- **AND** the section title "song of the week" is visible

#### Scenario: Player controls are interactive

- **GIVEN** the audio player is displayed
- **THEN** a play button is visible
- **AND** a stop button is visible
- **AND** a progress bar with current time and duration is visible
- **AND** an artist name is displayed

#### Scenario: Volume controls are present

- **GIVEN** the audio player is displayed
- **THEN** a mute/volume button is visible
- **AND** a volume slider bar is visible

### Tour Dates

Feature: Tour Dates
As a visitor, I want to see upcoming tour dates so I can attend concerts.

#### Scenario: Tour dates list renders

- **GIVEN** the Tour Dates section is visible
- **THEN** the title "Tour Dates" is displayed
- **AND** at least 4 tour date entries are listed
- **AND** each entry shows date, venue name, and location
- **AND** each entry has a "get your tickets" button

#### Scenario: Tour promotional card renders

- **GIVEN** the Tour Dates section is visible
- **THEN** a promotional card is displayed on the right side
- **AND** the card shows "it's awesome" text
- **AND** the card shows a year, title "world tour", and subtitle
- **AND** the card has a "get your tickets" button

#### Scenario: See All Tour Dates link is visible

- **GIVEN** the Tour Dates section is visible
- **THEN** a "See All Tour Dates" link is displayed below the list

### App Download

Feature: App Download
As a visitor, I want to download the music app so I can listen on mobile.

#### Scenario: App section renders with device image

- **GIVEN** the App Download section is visible
- **THEN** a phone/device image is displayed
- **AND** the title "Get Your Music Right Now!" is displayed

#### Scenario: Store download buttons are visible

- **GIVEN** the App Download section is visible
- **THEN** an App Store download button/image is displayed
- **AND** a Google Play download button/image is displayed

### Featured Albums

Feature: Featured Albums
As a visitor, I want to browse featured albums so I can discover music.

#### Scenario: Featured Albums section renders

- **GIVEN** the Featured Albums section is visible
- **THEN** the title "Featured Albums" is centered
- **AND** a grid/list of album entries is displayed

### Latest News

Feature: Latest News
As a visitor, I want to read the latest news so I can stay updated.

#### Scenario: News grid renders with 3 cards

- **GIVEN** the Latest News section is visible
- **THEN** the title "Latest News" is displayed
- **AND** 3 news post cards are displayed in a grid
- **AND** each card has an image, date, title, and text excerpt

#### Scenario: News cards have alternating image positions

- **GIVEN** the Latest News section is visible
- **THEN** the first card has the image on top
- **AND** the second card has the image on bottom
- **AND** the third card has the image on top

### Newsletter

Feature: Newsletter Subscription
As a visitor, I want to subscribe to the newsletter so I get updates.

#### Scenario: Newsletter form renders

- **GIVEN** the Newsletter section is visible
- **THEN** the title "Subscribe & Follow" is displayed
- **AND** description text is displayed
- **AND** an email input field is displayed
- **AND** a "subscribe" button is displayed

#### Scenario: Newsletter form validates email

- **GIVEN** the Newsletter section is visible
- **WHEN** I click "subscribe" without entering an email
- **THEN** the form shows a validation error

### Footer

Feature: Footer
As a visitor, I want to see the footer so I can find social links.

#### Scenario: Footer renders with logo and social icons

- **GIVEN** the footer is visible
- **THEN** the logo is displayed
- **AND** social media icon links are displayed (Pinterest, Facebook,
Twitter, Dribbble, Behance)

#### Scenario: Footer has copyright

- **GIVEN** the footer is visible
- **THEN** a copyright notice is displayed in the footer bar
- **AND** the copyright links to Component Dock

## Verification checklist

- [ ] All 9 sections render in correct order (Header → Hero → Song → Tours → App → Featured → News → Newsletter → Footer)
- [ ] Hero slider: fullscreen, dark overlay, "your music." headline, ticket form, social sidebar, scroll indicator
- [ ] Song player: parallax background, play/stop controls, progress bar, artist name, volume controls
- [ ] Tour Dates: list of 4+ dates with venue/location/button, promotional card with year/title/subtitle, "See All" link
- [ ] App Download: device image, title, description, App Store + Google Play buttons
- [ ] Featured Albums: centered title, album grid/list
- [ ] Latest News: 3 cards in grid, alternating image positions, date/title/text
- [ ] Newsletter: title, description, email input, subscribe button, validation
- [ ] Footer: logo, social icons, copyright with Component Dock link
- [ ] Design tokens: Josefin Sans font, #2ac275 green primary, #3b125d purple header, pill buttons (22px radius)
- [ ] Responsive layout: mobile-friendly, hamburger menu, stacked columns
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to Component Dock
