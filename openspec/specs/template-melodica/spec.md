# Template: Melodica (Music Artist Landing)

Recreation of ColorLib "Music 2" (https://colorlib.com/wp/template/music-2/).

## Purpose

Melodica is a dark-themed music artist/band landing page template with a deep
blue-to-purple gradient color scheme, vibrant accent colors, and music-focused
sections. It showcases an artist's brand, tracks, upcoming events, photo gallery,
and newsletter signup.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/music/ (HTTP 200, 24,529 B, fetched 2026-10-23) and its theme stylesheet `theme/music/styles/main_styles.css` (32,427 B, sha256 `beba86a028d7…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#2ac275` | 29 declarations — `.button::after`, `.header::after` (both as the gradient's green stop), social circles, play bar, active nav dot |
| Other chromatic values | `#3b125d` ×12, `#eeff2d` ×9, `#2457d7` ×6, `#2e9e7a` ×4, `#e830fe` ×3, `#ff1a4b` ×3 | `#3b125d`/`#2457d7` are the two stops of ONE gradient (`.header`, `.menu_background`, `.news`); `#eeff2d` = `.header::after` gradient stop, logo bars, `h1 span`; `#2e9e7a` = four hover states; `#e830fe` = `LIVE` badge + logo bar; `#ff1a4b` = `.jp-play` playing state, `.album_play_button` |
| Surface | `#ffffff` | 51 declarations — `body`, `.tours`, `.feature`, `.newsletter`, button labels |
| Ink / dark surface | `#3b125d` | 12 declarations — one stop of the `.header` / `.menu_background` / `.news` gradient (its partner stop is `#2457d7`) |
| Typeface | `'Josefin Sans', sans-serif` (3 rules — body) | `font-family` declaration in the theme sheet |
| Body type | `font-size: 14px; font-weight: 400; color: #a5a5a5` | `body{…}` rule |
| Radii | `50%`, `22px`, `15px` | `50%` (.main_nav ul li.active::after); `22px` (.button); `15px` (.player_title) |

Palette in order of use: `#ffffff` ×51, `#2ac275` ×29, `#3b125d` ×12, `#eeff2d` ×9, `#6d6d6d` ×8, `#2457d7` ×6, `#cbdc0b` ×4, `#2e9e7a` ×4, `#ff1a4b` ×3, `#e830fe` ×3. Radii declared: `50%` ×8, `22px` ×6, `15px` ×2 — nothing else.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

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
(lines 1480, 2270, 2271) collapse onto ONE live design. This prep (`melodica`, row 2271) is the ONE row whose source post
(`/template/music-2/`) is the design the directory serves — so the reference is
unambiguous here. The shipped app does **not** follow it: see the fidelity delta
below.

### Fidelity delta — the shipped app is NOT this design (measured 2026-10-24)

The reference's real structure (measured above: `main_styles.css`, 32,427 B, sha256
`beba86a028d7b404b7686646afef111662cd0b8e0de7cfd6aca8b7ea44fd63d9`) is:

| # | Block | Measured facts |
| --- | --- | --- |
| 1 | Header (`header`) | fixed, **`linear-gradient(to right, #2457d7, #3b125d)`**, 134 px tall → **75 px** on scroll; **2 px gradient underline** `.header::after` `linear-gradient(to right, #eeff2d, #2ac275)`; equalizer logo (5 bars, `#eeff2d`/`#2ac275`/`#e830fe`) + lowercase `music` wordmark; nav `Home · Artists · Download Music · News · Contact`; `Login / Register` right; hamburger → full-screen menu overlay (same gradient at `opacity:.95`, 36 px links) |
| 2 | Home (`home`) | **863 px** tall owl-carousel, 3 identical slides (`images/index.jpg`); `h1` **110 px / 600 / uppercase / #ffffff**, `span` **#eeff2d**; `LIVE` badge = 90 px **#e830fe** circle (`.home_title.islive::after`, `right:-72px`); ticket form = custom dropdown (`Event 1/2/3`) + `Tickets` input + **200×56 px pill (radius 22 px)** `button`; slider arrow = **54 px #2ac275** circle; `follow` label + five **32 px #2ac275** social circles; scroll arrows; **no dark overlay in CSS** |
| 3 | Song (`song`) | parallax `images/song.jpg` (`parallax-window`, `data-speed 0.8`), `.song` paints **nothing** — no CSS overlay; `song of the week` = **#2ac275** pill (30 px tall, radius 15 px); album art **119 px**, 2 px white border; play/stop = **45 px** circles with **3 px** white border, playing state **#ff1a4b**; progress track 2 px white / bar **#2ac275**; time labels 16 px white; mute + volume bar |
| 4 | Tours (`tours`) | `#ffffff`; left promo card (`images/extra_1.jpg`) `it's awesome` / `2019` / `world tour` / `november 2018` + button; right `Tour Dates` = 4 rows (`Sun, 21 Oct 2018` … `Wed, 24 Oct 2018`, all `The O2 / London, United Kingdom`), dates **30 px #2a2a2a**, venue 16 px **#6d6d6d**, row divider **2 px #d5d5d5**; `See All Tour Dates` link **#2ac275** with 1 px underline |
| 5 | App (`app`) | **#eef2f6**; `Get Your Music Right Now!` + paragraph; App Store / Google Play badges; screenshot image offset `translateX(-67px)` |
| 6 | Featured (`feature`) | `#ffffff`; `Featured Albums` (**60 px** section title); 3-column grid (`calc(100% / 3)`); caption bar **`rgba(0,0,0,0.66)`** with title + artist (this is the sheet's ONLY use of that overlay); `.album_play_button` **#ff1a4b** |
| 7 | News (`news`) | **`linear-gradient(to right, #2457d7, #3b125d)`** band; `Latest News` white; three cards — date pill **#2ac275** (radius 15 px), title **24 px / 700 white**, white excerpt; middle card reversed (image below text) |
| 8 | Newsletter (`newsletter`) | **#ffffff**; `Subscribe & Follow` left; input **56 px**, radius **22 px**, **2 px #e0e7ee** border, placeholder 16 px/600 **#6d6d6d**; button 208×56 px pill |
| 9 | Footer (`footer`) | `images/footer.jpg` background; logo + five **46 px #2ac275** circles (hover **#eeff2d**); footer bar `© … | This template is made with … by Colorlib` |

`apps/melodica` ships a **different, invented page**: components
`About / Events / Gallery / Tracks / Hero / Navbar / Newsletter / Footer`, nav
`Home, About, Tracks, Events, Gallery, Contact` plus a "Get Tickets" CTA, a hero
headline `Feel The Music` with `Explore Now` + `Watch Video` buttons, an About band
with album/fan/concert counters, and an indigo palette (`#6366f1`/`#818cf8`/
`#a5b4fc`/`#c7d2fe`/`#e0e7ff`/`#eef2ff`) that appears nowhere in the reference
sheet. Only the token table above was ever measured from the live CSS — the
requirements below describe the app, not the design.

**For a rebuild:** the token table and the table above are the reference; the
`## Requirements` set below is the app's own record and would have to be rewritten
against rows 1–9 before anyone builds "the music-2 design" from this spec.
## Requirements

### Requirement: Navigation bar with logo and section links

The template SHALL display a fixed navigation bar with a logo text, section links
(Home, About, Tracks, Events, Gallery, Contact), and a call-to-action button.

#### Scenario: Navbar renders on page load

- **WHEN** the page loads
- **THEN** I see a navigation bar at the top with the logo "Melodica" and links to all sections

#### Scenario: Navbar contains CTA button

- **WHEN** I look at the navigation bar
- **THEN** I see a call-to-action button (e.g. "Get Tickets")

### Requirement: Hero section with headline and CTAs

The template SHALL display a hero section with a large headline, subtitle text,
and two call-to-action buttons (primary filled, secondary outline).

#### Scenario: Hero displays headline and subtitle

- **WHEN** the page loads
- **THEN** I see a hero section with a large headline "Feel The Music" and a subtitle paragraph

#### Scenario: Hero has two CTA buttons

- **WHEN** I look at the hero section
- **THEN** I see two buttons: a primary "Explore Now" button and an outline "Watch Video" button

#### Scenario: Primary CTA links to tracks

- **WHEN** I click the "Explore Now" button
- **THEN** the page scrolls to the tracks section

### Requirement: About section with artist info and stats

The template SHALL display an about section with an artist image, bio text,
and statistic counters (albums, fans, concerts).

#### Scenario: About section shows artist info

- **WHEN** I scroll to the about section
- **THEN** I see an artist image and bio text describing the artist

#### Scenario: About section shows statistics

- **WHEN** I look at the about section
- **THEN** I see three stat counters: Albums, Fans, and Concerts with numeric values

### Requirement: Tracks section with featured tracks grid

The template SHALL display a tracks section with a grid of featured tracks,
each showing an image, title, and play button overlay.

#### Scenario: Tracks grid renders

- **WHEN** I scroll to the tracks section
- **THEN** I see a grid of at least 4 track cards with images and titles

#### Scenario: Track card has play button

- **WHEN** I hover over a track card
- **THEN** I see a play button icon overlay on the track image

### Requirement: Events section with upcoming shows

The template SHALL display an events section listing upcoming shows with
date, venue name, and a ticket button for each event.

#### Scenario: Events list renders

- **WHEN** I scroll to the events section
- **THEN** I see a list of upcoming events with date and venue information

#### Scenario: Event has ticket button

- **WHEN** I look at an event entry
- **THEN** I see a "Get Tickets" button next to the venue details

### Requirement: Photo gallery grid

The template SHALL display a gallery section with a responsive grid of
placeholder images arranged in 2-3 columns.

#### Scenario: Gallery renders images

- **WHEN** I scroll to the gallery section
- **THEN** I see a grid of at least 6 images in a 2-3 column layout

### Requirement: Newsletter signup section

The template SHALL display a newsletter section with a heading, email input
field, and a subscribe button.

#### Scenario: Newsletter form renders

- **WHEN** I scroll to the newsletter section
- **THEN** I see a heading "Subscribe", an email input, and a "Subscribe" button

#### Scenario: Newsletter form handles submission

- **WHEN** I enter an email address and click "Subscribe"
- **THEN** the form handles the submission (no page reload)

### Requirement: Footer with Component Dock link

The template SHALL display a footer with social media links, quick navigation
links, and a Component Dock attribution link.

#### Scenario: Footer renders

- **WHEN** I scroll to the footer
- **THEN** I see social media icons, quick links, and copyright text

#### Scenario: Footer links to Component Dock

- **WHEN** I look at the footer
- **THEN** I see a link to https://www.componentdock.com/ branded as "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/melodica/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/melodica/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navigation bar with logo and section links — I see a navigation bar at the top with the logo "Melodica" and links to all sections
- [x] Hero section with headline and CTAs — I see a hero section with a large headline "Feel The Music" and a subtitle paragraph
- [ ] About section with artist info and stats — I see an artist image and bio text describing the artist
- [ ] Tracks section with featured tracks grid — I see a grid of at least 4 track cards with images and titles
- [ ] Events section with upcoming shows — I see a list of upcoming events with date and venue information
- [ ] Photo gallery grid — I see a grid of at least 6 images in a 2-3 column layout
- [x] Newsletter signup section — I see a heading "Subscribe", an email input, and a "Subscribe" button
