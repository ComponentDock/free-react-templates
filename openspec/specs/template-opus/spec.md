# Template: Opus (Music Band)
<!-- prep-status: shipped-as=melodica -->
> **SHIPPED-UNDER** — the ColorLib `music-2` design this prep describes already
> ships as `apps/melodica` (<https://melodica.free.componentdock.com>).
> Do not scaffold `apps/opus`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-melodica/spec.md`.

## Purpose

Opus is a single-page music band website in the free-react-templates monorepo.
It is an original React recreation of the ColorLib "Music 2" free template
(source: https://colorlib.com/wp/template/music-2/), built under a DIFFERENT
name (**Opus**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a dark-themed music template for bands and artists: a full-
viewport hero section with a dark navy-to-purple background and blurred guitar
imagery, large bold headline ("YOUR MUSIC." with the word "MUSIC." in lime
green), two input fields (Event + Tickets) and a green CTA button, a social
follow bar, and a "Song of the Week" audio player widget. Navigation includes
logo + links (Home, Artists, Download Music, News, Contact, Login/Register).

**Preview URL:** https://preview.colorlib.com/theme/music/ (HTTP 200, 24,529 B, 2026-10-24 —
the shared demo directory; `theme/music-2/` itself **404s**, which is why the earlier
research called the design unreachable. See §Reference identity.)
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/music-free-template.jpg

## Design Tokens (measured from the live sheet, 2026-10-24)

Source: `theme/music/styles/main_styles.css` (32,427 B, sha256
`beba86a028d7b404b7686646afef111662cd0b8e0de7cfd6aca8b7ea44fd63d9`). CSS values are
canonical — the screenshot samples below were replaced because none of them is painted
by the page.

| Token | Value | Evidence in the sheet |
| --- | --- | --- |
| Header / news band | `linear-gradient(to right, #2457d7, #3b125d)` | `.header`, `.menu_background`, `.news` (12 `#3b125d` + 6 `#2457d7` declarations) |
| Header underline | `linear-gradient(to right, #eeff2d, #2ac275)`, 2px | `.header::after` |
| Accent green | `#2ac275` | 29 declarations — `.button::after` gradient stop, social circles, play bar, active nav dot |
| Headline highlight | `#eeff2d` | `.home_title h1 span`; logo bars |
| `LIVE` badge | `#e830fe`, 90px circle, `right:-72px` | `.home_title.islive::after` |
| Button | `200×56px`, radius `22px`, `linear-gradient(to right, #2ac275, #cbdc0b, #2ac275)` | `.button`, `.button::after` |
| Card radii | `15px` (`.player_title`, `.news_post_date`), `50%` (circles) | sheet |
| App band | `#eef2f6` | `.app` |
| Newsletter input | `56px`, radius `22px`, `2px solid #e0e7ee` | `.newsletter_input` |
| Text | `#2a2a2a` headings · `#6d6d6d` secondary · `#a5a5a5` body | `h1…h6`, `.tour_date`, `body` |
| Typeface | `'Josefin Sans', sans-serif` (one `@import`, wght 300/400/600/700) | sheet line 28 — **no Poppins anywhere** |
| Overlay | `rgba(0,0,0,0.66)` — featured-album caption bar only | `.featured_list ul li > div:first-of-type` |

## Section Structure (top to bottom)

1. **Navbar** — Logo (colored bars icon + "opus" text), nav links (Home
   with green active dot, Artists, Download Music, News, Contact),
   Login/Register link on right. Transparent/navy background overlay.

2. **Hero** — Full-viewport dark navy/purple background with blurred
   guitar imagery (dark overlay). Large centered headline: "YOUR MUSIC."
   where "YOUR" is white and "MUSIC." is lime green. Subtitle text
   below. Two pill-shaped input fields side by side ("Event" and
   "Tickets"), a lime green "GET YOUR TICKETS" pill button, and a
   green circular arrow/chevron button to the right. "LIVE" pink
   circular badge in upper-right area of headline.

3. **Follow Bar** — Dark navy strip below hero. Left-aligned "FOLLOW"
   label, row of 5 circular social media icons (Pinterest, Facebook,
   Twitter, Spotify, Bandcamp), "SCROLL DOWN" text centered/right.

4. **Song of the Week** — Dark background section. "SONG OF THE WEEK"
   green pill badge/label. Artist photo (circular or square thumbnail),
   artist name "MICHAEL SMITH" in bold white, song title "Better Days"
   in lighter text. Audio player controls: play/pause/stop buttons
   (white on dark circles), progress bar/timeline with green accent,
   volume icon, timestamp (00:00 / 02:33).

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
(lines 1480, 2270, 2271) collapse onto ONE live design. This prep (`opus`) reproduces the design the directory actually serves — the
`music-2` rebuild — and is superseded by `melodica` (see SHIPPED-UNDER above).
The musician page the sibling `music` row shows has no demo and no archive.

## Requirements

### Feature: Opus — Music Band Website Template

  Background:
- **GIVEN** the Opus template is loaded in the browser

#### Scenario: Navbar renders correctly

- **THEN** the navbar should display the logo (colored bars icon + "opus" text)
- **AND** the navbar should show navigation links: Home, Artists, Download Music, News, Contact
- **AND** the navbar should show a "Login / Register" link on the right
- **AND** the "Home" link should have an active indicator (green dot)

#### Scenario: Hero section displays correctly

- **THEN** the hero should have a full-viewport dark navy/purple background
- **AND** the hero should display the headline "YOUR MUSIC."
- **AND** the word "MUSIC." in the headline should be lime green colored
- **AND** the hero should show two pill-shaped input fields labeled "Event" and "Tickets"
- **AND** the hero should show a lime green "GET YOUR TICKETS" pill button
- **AND** the hero should show a green circular chevron button
- **AND** the hero should show a pink "LIVE" circular badge

#### Scenario: Follow bar renders correctly

- **THEN** the follow bar should display the text "FOLLOW"
- **AND** the follow bar should show 5 circular social media icons
- **AND** the follow bar should display "SCROLL DOWN" text

#### Scenario: Song of the Week section renders correctly

- **THEN** the section should show a "SONG OF THE WEEK" green pill badge
- **AND** the section should display an artist photo thumbnail
- **AND** the section should show the artist name "MICHAEL SMITH"
- **AND** the section should show the song title "Better Days"
- **AND** the section should display audio player controls (play, pause, stop)
- **AND** the section should display a progress/timeline bar with green accent
- **AND** the section should show a volume icon
- **AND** the section should show timestamps (00:00 and 02:33)

#### Scenario: Footer renders correctly

- **THEN** the footer should display a "Made with Component Dock" link
- **AND** the footer link should point to https://www.componentdock.com/

## Verification checklist

- [ ] Navbar: logo, nav links, active indicator, Login/Register
- [ ] Hero: background, headline with green accent, inputs, CTA button, LIVE badge
- [ ] Follow bar: label, social icons, scroll down text
- [ ] Song of the Week: badge, artist info, audio player controls, timeline
- [ ] Footer: Component Dock attribution link
- [ ] Dark theme consistency across all sections
- [ ] Responsive layout (mobile-friendly)
- [ ] No ColorLib references in app code
- [ ] public/CNAME contains opus.free.componentdock.com
- [ ] package.json homepage set to https://opus.free.componentdock.com
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Typecheck passes (tsc --noEmit)
- [ ] Lint passes (oxlint)
- [ ] Build succeeds (vite build)

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23, RESOLVED 2026-10-24)** — the four screenshot samples
(`#1a1147`, `#a4c400`, `#ffeb3b`, `#ff1493`) were replaced by the measured table above
(`#2457d7`/`#3b125d` gradient, `#2ac275`, `#eeff2d`, `#e830fe`, Josefin Sans). The file
kept as the record of why: a screenshot sample is not a declaration, and the demo does
paint the design — only the slug-only URL `theme/music-2/` 404s.
<!-- live-palette-unverified:end -->
