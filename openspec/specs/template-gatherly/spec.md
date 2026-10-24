# Template: Gatherly (Events / Conference)

## Purpose

An events and conference landing template with a hero slider, countdown, speakers, a
day-tabbed schedule, ticket tiers, blog and contact sections. Recreation of the ColorLib "MeetUp" template (https://colorlib.com/wp/template/meetup/) as a React 19 + Vite +
Tailwind CSS 4 + TypeScript single-page application.

- **Source slug:** `meetup`
- **ColorLib page:** https://colorlib.com/wp/template/meetup/
- **Live preview:** https://preview.colorlib.com/theme/meetup/
- **Diagnostic page title:** `MeetUp - Free Bootstrap 4 Template by Colorlib`
- **New name:** `gatherly` (apps/gatherly, `@free-react-templates/gatherly`)
- **Deploy target:** https://gatherly.free.componentdock.com
- **Category:** Events / Conference (TEMPLATES.md `## Events (… )` rows, 4 listings)
- **Screenshot reference:** https://colorlib.com/wp/wp-content/uploads/sites/2/meetup-free-template.jpg
- **Reference readings (2026-10-13, `curl -4`):** preview page **46,056 B**; its own
  stylesheet `css/style.css` **81,607 B**; preview answers 200 with a browser UA and
  `curl -4` alike. The page is one of the Google-font-injected ones, so **cite the byte
  count, not a raw page sha256** — the injected `@font-face` block's rule order is
  shuffled per request. The stylesheet is the token authority and is stable.

> This spec was written **after** the app shipped (the app has no `template-<name>/spec.md`
> in history — it is one of the 11 README rows that could not produce a description). It
> documents the live reference as verified on 2026-10-13 and matches the implementation
> already in `apps/gatherly`; nothing here requires new app code.

## Design Tokens

Extracted from the live preview stylesheet
(`https://preview.colorlib.com/theme/meetup/css/style.css`, 81,607 B) — token values and
their reference usage counts:

### Colors

| Token               | Value                  | Usage (reference sheet)                                                        |
| ------------------- | ---------------------- | ------------------------------------------------------------------------------ |
| `--color-primary`   | `#033fff`              | Brand blue — 39 declarations: body links, `.btn-primary` background/border, nav and slider highlights, tab pills |
| `--color-accent`    | `#fbb901`              | Amber accent — 10 declarations: heading accents, highlight backgrounds, footer hover |
| `--color-bs-primary`| `#007bff`              | Bootstrap utility primary (12 declarations; framework defaults)                 |
| `--color-text`      | `#212529`              | Body/heading text                                                              |
| `--color-muted`     | `#6c757d`              | Secondary text, meta lines                                                     |
| `--color-border`    | `#dee2e6`              | Card borders, dividers, table rules                                            |
| `--color-surface`   | `#f8f9fa`              | `bg-light` bands (schedule + blog sections)                                    |
| `--color-overlay`   | `rgba(255,255,255,0.7)`| 10 declarations — white wash over slider + subscribe background images          |
| `--color-shadow`    | `rgba(0,0,0,0.1)`      | Card/box shadows                                                               |

### Fonts

| Role     | Family                    | Notes                                                        |
| -------- | ------------------------- | ------------------------------------------------------------ |
| Body/UI  | `"Lato", Arial, sans-serif` | set on `body`, `font-size: 16px`, background `#fff`         |
| Icons    | `flaticon`, `icomoon`, `ionicons` | icon faces only — re-implement with `lucide-react`    |

### Button Shape

- **Pill CTA:** `border-radius: 30px` (the `.pricing-entry .button .btn` "Buy Ticket" buttons)
- **Default radius:** `5px` / `0.25rem` for cards, inputs and secondary buttons
- **Primary button:** solid `#033fff` background, white text; hover keeps the fill with a
  `#033fff` border
- **Circle accents:** `border-radius: 50%` (16 declarations) — avatars, countdown/icon discs

### Section Backgrounds

- Hero: full-height slider (`section.hero.js-fullheight`) — each slide carries a background
  image (`bg_1.jpg`, `bg_2.jpg`) behind a white `.overlay`
- About: `ftco-about ftco-counter ftco-no-pb img` — image `about-1.jpg`
- Gallery: 4-up image strip (`gallery-1.jpg` … `gallery-4.jpg`), no padding
- Subscribe band: `ftco-section ftco-subscribe img` with `background-image: url(bg_1.jpg)` + `.overlay`
- Speakers: `ftco-section ftco-speakers` on white
- Schedule: `ftco-section bg-light` (grey `#f8f9fa`)
- Pricing: `ftco-section` on white
- Blog: `ftco-section bg-light`
- Contact: `ftco-section contact-section ftco-no-pb`
- Map: `ftco-section ftco-no-pt ftco-no-pb` with the Google Maps iframe (`#map`)
- Footer: dark treatment with widget heading rows

## Section Structure (DOM order)

Verified against the live DOM (`id` attributes and `<section>` classes), 2026-10-13:

1. **Preloader** — `#ftco-loader`; the reference's **last** DOM element, shown first.
2. **Navbar** — `#ftco-nav`: eyebrow "Welcome to MeetUp.", brand link, links to
   `#home-section`, `#about-section`, `#speakers-section`, `#schedule-section`,
   `#pricing-section`, `#blog-section`, `#contact-section`, plus a "Buy Ticket" button.
3. **Hero** (`section.hero.js-fullheight`, `#home-section`) — two-slide owl-carousel:
   `<h1>Annual Conference 2019</h1>` / `<h1>Business Conference 2019</h1>`, each with the
   date line `<h2>November 26-30, 2019 - 08:00am-12:00pm</h2>` and two buttons —
   "Get Ticket" (primary) and "Watch Video" (magnific-popup lightbox).
4. **Countdown** (`#timer`) — four units with the ids `days`, `hours`, `minutes`, `seconds`.
5. **About** (`ftco-about ftco-counter`) — eyebrow "Welcome", `<h2>About Me</h2>`, a prose
   paragraph, a single animated counter ("0 Years Experienced", `data-number="50"`), the
   image `about-1.jpg`, and the `<h2>Join Our Event</h2>` band.
6. **Gallery** (`ftco-section ftco-no-pb ftco-no-pt`) — four full-bleed images
   `gallery-1.jpg` … `gallery-4.jpg` in a `no-gutters` 4-column row.
7. **Subscribe** (`ftco-section ftco-subscribe img`) — full-width band over `bg_1.jpg` with
   a `.overlay`, white heading block, and a `form.subscribe-form` with
   `placeholder="Enter email address"`.
8. **Speakers** (`ftco-section ftco-speakers`) — `<h2>MeetUp Speakers</h2>` and four speaker
   cards rendered twice (carousel): **John Wilson** (CEO, Founder), **Robert Wills**
   (Businessman), **Mike Smith** (Entrepreneur), **Adrian Henderson** (Web Developer) — each
   with a `staff-N.jpg` portrait and a hover overlay.
9. **Schedule** (`ftco-section bg-light`) — `<h2>Program Schedule</h2>` with a 4-pill tab nav
   (`#v-pills-1` … `#v-pills-4`, labels "Day 01 21 November 2019" … "Day 04 24 November
   2019") and one `#v-pills-tabContent` pane per day. Every row shows a time range
   (`08:00AM - 10:00AM`), a session title (`Introduction to Wordpress 5.0`,
   `Best Practices For Programming WordPress`, `Web Performance For Third Party Scripts`)
   and the speaker line `— Brett Morgan Founder of Wordpress`. The last pane is empty in the
   reference.
10. **Pricing** (`ftco-section`) — `<h2>Buy Tickets</h2>` and four ticket tiers, each with a
    "Buy Ticket" pill button: **Basic** $29.00, **Standard** $59.00, **Premium** $79.00,
    **Gold** $89.50 (Gold lists 10 events + VIP seat).
11. **Blog** (`ftco-section bg-light`) — `<h2>Our Blog</h2>` and three identical cards
    (`image_1.jpg` … `image_3.jpg`), title "Why Lead Generation is Key for Business Growth",
    each with a date/meta row and a "Read More" link.
12. **Contact** (`ftco-section contact-section`) — `<h2>Contact Me</h2>`, an info list
    (Address `198 West 21th Street, Suite 721 New York NY 10016`, Contact Number
    `+ 1235 2355 98`, Email Address `info@yoursite.com`, Website `yoursite.com`) and the
    `form.contact-form.bg-light` with placeholders `Your Name`, `Your Email`, `Subject`,
    `Message` and a submit button.
13. **Map** — `#map` iframe (`https://maps.googleapis.com/maps/api/js?key=…`) full-width.
14. **Footer** — `<h2>About MeetUp.</h2>` (brand blurb), `Links`, `Privacy` and
    `Have a Questions?` widget columns, four social icons (twitter, facebook, google-plus,
    instagram) and the copyright bar.

## Requirements

### Feature: Navbar and anchors

The template SHALL render a top navbar listing the seven section anchors and SHALL include
the Component Dock link in the footer.

#### Scenario: Navbar links

- **GIVEN** the page is loaded
- **WHEN** the navbar is displayed
- **THEN** it SHALL link to `#home-section`, `#about-section`, `#speakers-section`, `#schedule-section`, `#pricing-section`, `#blog-section` and `#contact-section`
- **AND** it SHALL expose a mobile menu toggle

### Feature: Hero slider

The template SHALL render a full-height two-slide hero behind a white overlay.

#### Scenario: Slide content

- **GIVEN** the hero section is displayed
- **WHEN** the first slide is active
- **THEN** it SHALL show the conference headline and the date line
- **AND** it SHALL show a "Get Ticket" button and a video lightbox trigger

### Feature: Countdown timer

The template SHALL render a four-unit event countdown.

#### Scenario: Countdown units

- **GIVEN** the hero region is displayed
- **WHEN** the countdown renders
- **THEN** it SHALL show days, hours, minutes and seconds in four labelled units

### Feature: About and counters

The template SHALL render the about copy, an animated experience counter and the
"Join Our Event" band.

#### Scenario: About content

- **GIVEN** the about section is displayed
- **WHEN** it is in view
- **THEN** it SHALL show the "About Me" heading, the prose paragraph and the counter
- **AND** it SHALL show the event invitation band

### Feature: Gallery strip

The template SHALL render a four-image full-bleed gallery row.

#### Scenario: Gallery images

- **GIVEN** the gallery section is displayed
- **WHEN** the images render
- **THEN** it SHALL show four images in a single row without gutters

### Feature: Subscribe band

The template SHALL render a full-width subscribe band over a background image with a
white overlay and an email input.

#### Scenario: Subscribe form

- **GIVEN** the subscribe band is displayed
- **WHEN** the form is rendered
- **THEN** it SHALL show an email input with the placeholder "Enter email address"
- **AND** it SHALL show a submit button

### Feature: Speakers

The template SHALL render the speaker cards with names and roles.

#### Scenario: Speaker cards

- **GIVEN** the speakers section is displayed
- **WHEN** the cards render
- **THEN** it SHALL show John Wilson (CEO, Founder), Robert Wills (Businessman), Mike Smith (Entrepreneur) and Adrian Henderson (Web Developer)
- **AND** each card SHALL reveal a social overlay on hover

### Feature: Program schedule tabs

The template SHALL render a four-day program schedule behind a pill tab nav.

#### Scenario: Switching day tabs

- **GIVEN** the schedule section shows "Day 01"
- **WHEN** the user selects the "Day 03" pill
- **THEN** that day's sessions SHALL be displayed
- **AND** the other days' sessions SHALL be hidden

#### Scenario: Session rows

- **GIVEN** a day pane is displayed
- **WHEN** the rows render
- **THEN** each row SHALL show a time range, a session title and the speaker line

### Feature: Ticket tiers

The template SHALL render four ticket tiers, each with a pill "Buy Ticket" button.

#### Scenario: Tier values

- **GIVEN** the pricing section is displayed
- **WHEN** the tiers render
- **THEN** it SHALL show Basic at $29.00, Standard at $59.00, Premium at $79.00 and Gold at $89.50
- **AND** the Gold tier SHALL list the VIP seat perk

### Feature: Blog cards

The template SHALL render three blog cards with image, title, meta row and a read-more link.

#### Scenario: Blog content

- **GIVEN** the blog section is displayed
- **WHEN** the cards render
- **THEN** it SHALL show three cards
- **AND** each card SHALL show a date/meta row and a read-more link

### Feature: Contact section

The template SHALL render the contact details list and a four-field contact form.

#### Scenario: Contact form fields

- **GIVEN** the contact section is displayed
- **WHEN** the form is rendered
- **THEN** it SHALL show fields for name, email, subject and message
- **AND** the info list SHALL show the address, phone, email and website entries

### Feature: Map and footer

The template SHALL render the embedded map band and the footer with its widget columns and
the Component Dock attribution link.

#### Scenario: Footer content

- **GIVEN** the page is scrolled to the footer
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand blurb, the Links and Privacy columns and the questions column
- **AND** it SHALL show four social icons
- **AND** it SHALL link to https://www.componentdock.com/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/gatherly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/gatherly/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] `apps/gatherly` renders the twelve bands in the DOM order above (preloader overlay,
      navbar, hero slider, countdown, about+counter, gallery, subscribe, speakers, schedule,
      pricing, blog, contact, map, footer).
- [ ] Hero is a two-slide carousel with the headline, the date line, a primary ticket button
      and a video trigger; the white overlay sits over the slide image.
- [ ] Countdown exposes days / hours / minutes / seconds and does not throw when the target
      date is in the past.
- [ ] Schedule tabs switch panes without a page reload and keep `aria-selected` in sync.
- [ ] Four ticket tiers render with the reference prices and pill buttons.
- [ ] Gallery shows four images in one unguttered row; about shows the counter and the
      "Join Our Event" band.
- [ ] Every anchor in the navbar resolves to a real section id (no dead `#…-section`).
- [x] Footer links to https://www.componentdock.com/ and the app's `public/CNAME` is
      `gatherly.free.componentdock.com` while `homepage` matches it.
- [x] No app file mentions ColorLib (provenance lives in this spec, TEMPLATES.md and the PR).
- [ ] `npm run verify-app.sh gatherly` green: typecheck + lint + 100 % coverage + build.
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
