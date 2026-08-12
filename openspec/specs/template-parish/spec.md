# Template: Parish (Church Template)

## Purpose

Parish is a single-page church landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Vineyard"
church website template (see TEMPLATES.md, Bootstrap section, line 526;
duplicate row at line 1306 — mark EVERY copy `[x]` when done), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The reference is a modern church landing ("Vineyard — Free Bootstrap 4
Template by Colorlib"): a transparent nav over the hero (brand "Vineyard
Christian Church", uppercase white links, "Menu" hamburger on mobile), a
full-height mountain-photo hero with a light mint-green overlay
(`#2f994f` at 20% opacity) and right-aligned content (white circular play
button + "Watch our latest sermons", bold condensed uppercase headline
"Loving God, Loving Others, Serving God With All Your Heart", subheadline
"Submit your presence to the creator of the universe"); a ministries
section (left column of 6 icon rows — Daily Prayers, Church Community,
Teaching, Helpers, Wedding, Events — each with a 100px mint circle icon,
right a tall book photo); a counter split (left photo with a circular
video play button, right "We are church that believes in Jesus Christ" +
4 animated counters — Members 70000, Pastors 1000, Donation 100000,
Churches 100); a light-grey `#f8f9fa` sermons section ("Experience God's
Presence" / "Sermon for Today", sermon image left, title + meta + two
buttons right: mint "Watch Sermons" + black "Download Sermons"); a 4-image
Instagram strip with hover overlay; a photo-background testimonial section
("Inspirational Testimony" with circular member photos and quote badges);
an events section with 3 image cards (title, calendar/venue meta, "Read
more" button); a blog section ("Our Blog" / "Recent Blog", 3 entries with
meta + title + photo + excerpt); and a dark `#171717` footer (brand +
socials, About links, Connect links, Service Hours) with a copyright bar.

Brand color: mint green `#aee6bf` (links, nav hover, buttons, service icon
circles, counter numbers, section subheadings, footer links). Headings use
the condensed **Barlow Condensed** font; body uses **Poppins**.

## Design tokens (from `https://preview.colorlib.com/theme/vineyard/`)

- **Brand accent:** `#aee6bf` (mint green) — `a` links + hover, nav-link
  hover, navbar-toggler hover, `.btn.btn-primary` solid buttons, `.services
.icon` circles, `.ftco-counter .text strong.number`, `.heading-section
.subheading`, footer widget links, `#2f994f` overlay sibling.
- **Overlay green:** `#2f994f` — hero `.overlay` at `opacity: .2`
  (inner-page heroes `.hero-wrap-2` use `.3`); single-page recreation uses
  `.2`.
- **Headings:** `rgba(0, 0, 0, 0.8)`, font-family `"Barlow Condensed",
Arial, sans-serif`, weight 400/500/700 (`.heading-section h2` 34px → 28px
  mobile, 700, uppercase, `letter-spacing: 2px`; `.event-wrap .text h2`
  24px 500; `.slider-text h1` 50px 700 white uppercase `letter-spacing:
3px`).
- **Body text:** `#999999` (Poppins 16px, line-height 1.8); footer text
  `rgba(255, 255, 255, 0.7)`.
- **Section background light:** `#f8f9fa` (`.bg-light` — sermons and events
  sections).
- **Footer background:** `#171717` (`.ftco-footer`; note `.ftco-bg-dark`
  `#3c312e` is overridden by the later `.ftco-footer` rule — use
  `#171717`).
- **Fonts (Google Fonts `<link>` in `index.html`):** `"Poppins"` (300/400/
  500/600, body + UI) and `"Barlow Condensed"` (400/600/700, all headings).
  The source self-hosts both via Cloudflare — recreate with Google Fonts.
- **Buttons (`border-radius: 3px`, no shadow):**
  - `.btn.btn-primary` — solid `#aee6bf`, 1px `#aee6bf` border, white text;
    hover: transparent bg, `#aee6bf` text. Used for hero-less CTAs,
    "Watch Sermons", "Read more".
  - `.btn.btn-black` — solid `#000000`, white text; hover: transparent bg,
    mint text. Used for "Download Sermons".
  - Footer newsletter `.btn-primary` — white bg/white 2px border (unused on
    index — footer has no form on this template).
- **Section paddings:** `.ftco-section` default `padding: 7em 0`
  (mobile 6em); `ftco-no-pt`/`ftco-no-pb` zero out top/bottom (ministries
  section is `no-pt no-pb`; events section is `no-pt`; footer is
  `ftco-footer ftco-bg-dark ftco-section` with `padding: 7em 0 4em 0`).

## Design reference (replication findings)

- **Original:** ColorLib "Vineyard" — church website template
  (source: https://colorlib.com/wp/template/vineyard/). Listed in
  TEMPLATES.md line 526 (Bootstrap section); duplicate row at line 1306 —
  mark every copy `[x]` when done. Screenshot: `vineyard-free-template.jpg`
  (1200×946, reviewed visually in the browser: mountain hero with mint
  wash, white uppercase nav, "VINEYARD" condensed logo, white play button
  - "Watch our latest sermons", mint circular service icons, tall pale
    image block right; screenshot is cropped below the ministries section —
    the preview DOM is authoritative for the rest).
- **Live preview URL:** https://preview.colorlib.com/theme/vineyard/
  (reachable, title "Vineyard - Free Bootstrap 4 Template by Colorlib").
  HTML saved to `/tmp/vineyard.html` (43 KB); stylesheet
  `https://preview.colorlib.com/theme/vineyard/css/style.css` saved to
  `/tmp/vineyard.css` (70 KB). Both references agree on the mint-green
  `#aee6bf` accent, white sections, dark `#171717` footer.
- **Navbar:** `nav.navbar.ftco_navbar` — `background: transparent`,
  `position: absolute; top: 20px` over the hero (mobile: solid `#000000`,
  static); `.scrolled` state adds white bg. Brand: "Vineyard" +
  `<span>Christian Church</span>` (recreate as "Parish" + "Christian
  Church"; the source logo is text, not an image). Links (12px uppercase
  600, `letter-spacing: 1px`, white, hover `#aee6bf`): Home (active) ·
  About · Ministries · Sermons · Events · Blog · Contact. Mobile toggler
  text: "Menu" (hamburger icon).
- **Hero:** `.hero-wrap` — `height: 800px`, `background-image:
url('images/bg_1.jpg')` (mountains), `background-position: top center`;
  `.overlay` `background: #2f994f; opacity: .2`. Content
  `.row.no-gutters.slider-text.js-fullheight.align-items-end.justify-
content-end`, `col-md-8 text-justify` right-aligned: play button (70px
  white circle + `ion-ios-play` → lucide `Play`) + "Watch our latest
  sermons" (`.icon-wrap` link, title next to circle); `h1` "Loving God,
  Loving Others, Serving God With All Your Heart"; `h3.subheading`
  "Submit your presence to the creator of the universe" (18px Poppins,
  `rgba(255,255,255,0.9)`).
- **Ministries** `section.ftco-section.ftco-no-pt.ftco-no-pb` — row: left
  `col-lg-6 py-4 py-md-5` with SIX `.d-flex.services` rows (text-right on
  desktop, icon on the right via `order-md-last`): Daily Prayers
  (`flaticon-praying`), Church Community (`.services.active` — white
  circle, `flaticon-church`), Teaching (`flaticon-bible`), Helpers
  (`flaticon-social-care`), Wedding (`flaticon-rings`), Events
  (flaticon). Each: `.icon` 100px circle `background: #aee6bf` (active:
  `#fff`), `h3.heading` 16px 600 uppercase `#000000` + lorem `p`. Right
  `col-lg-6`: tall `img` `images/about.jpg` (hands holding a "HOLY
  SCRIPTURES" book photo).
- **Counter** `section.ftco-counter#section-counter` — row: left `col-md-6
.img` (`images/about-2.jpg` — wooden cross on wall) with 100px white
  circular `.icon-video` play link (YouTube); right `col-md-6`: `.heading-
section` `h2` "We are church that believes in Jesus Christ" + lorem `p`;
  then 4 `.counter-wrap` columns (`.block-18.text-center`): `strong.number`
  (Barlow Condensed 600 28px `#aee6bf`, animate from `data-number`:
  70000 Members · 1000 Pastors · 100000 Donation · 100 Churches) + `span`
  label (14px `rgba(0,0,0,0.7)`). Recreate as static numbers (count-up
  optional; must be jsdom-safe).
- **Sermons** `section.ftco-section.bg-light` — centered `.heading-section`
  `span.subheading` "Experience God's Presence" (14px 600 uppercase
  `#aee6bf`) + `h2` "Sermon for Today"; `.sermon-wrap` row: left image
  (`images/sermon-1.jpg`), right `.text.py-4`: `h2` "Lord is Sufficient
  for all of our needs" (link), `.meta` (Sermon from: Felix Gonner ·
  Categories: God, Pray · On Sunday 13 Jan, 2019), lorem `p`, buttons:
  `a.btn.btn-primary` "Watch Sermons" (play icon) + `a.btn.btn-black`
  "Download Sermons" (download icon).
- **Instagram strip** `section.instagram.ftco-section.ftco-no-pt.ftco-no-
pb` — `container-fluid px-md-0`, `.row.no-gutters` of 4
  `.insta-img.img` tiles (`images/insta-1..4.jpg`); hover shows a 50px
  mint circle with instagram icon (inline SVG — lucide has no brand
  icons).
- **Testimony** `section.ftco-section.testimony-section.img` — inline
  `background-image: url(images/bg_3.jpg)` + `.overlay`; centered white
  heading `h2` "Inspirational Testimony"; `.carousel-testimony` (owl, 3+
  slides): `.testimony-wrap.text-center` with `.user-img` 130px circle
  photo (`images/person_1.jpg` etc.) + `.quote` 40px white circle (quote
  icon) overlapping, `.text` quote `p`, `.name` "John Cooper" (Barlow
  Condensed 600 18px uppercase white), `.position` "Member" (18px
  `rgba(255,255,255,0.9)`). Carousel may render statically (one visible
  testimonial) or with simple prev/next — jsdom-safe.
- **Events** `section.ftco-section.ftco-no-pt.bg-light` — `container-fluid
px-0`, `.row.no-gutters` of 3 `.event-wrap.event-wrap-full` (`col-md-3`):
  image (`images/event-1..3.jpg`) + `.text`: `h2` "How To Recover The
  Cutting Edge" (link), `.meta` (calendar icon "Monday, 8:00 Am -
  Tuesday, 8:00 Pm" · my_location "Spring Church" · location_city "203
  Fake St. Mountain View, San Francisco, California, USA"), `a.btn.btn-
primary` "Read more". SOURCE QUIRK: the section heading row (subheading
  "Events" + `h2` "Upcoming Events") sits AFTER the cards in the DOM —
  recreate the heading ABOVE the cards (matches the pattern of every other
  section; documented deviation).
- **Blog** `section.ftco-section` — centered `.heading-section` subheading
  "Our Blog" + `h2` "Recent Blog"; `.row` of 3 `.col-md-4.blog-entry`:
  `.meta` row (Aug 5, 2019 · Admin · chat icon + "3"), `h3.heading` "Know
  About Our God Who Created This Universe" (link), photo
  (`images/image_1..3.jpg`), excerpt `p`.
- **Footer** `footer.ftco-footer.ftco-bg-dark.ftco-section`
  (`background: #171717; padding: 7em 0 4em`) — 4 `.ftco-footer-widget`
  columns: (1) `h2.ftco-heading-2` "Vineyard Church" → "Parish Church" +
  blurb + `.ftco-footer-social` 3 × 50px circles (`rgba(255,255,255,0.05)`,
  26px icons): twitter · facebook · instagram (inline SVG); (2) "About":
  7 links with `ion-ios-arrow-forward` chevrons (Staff · Beliefs · History
  · Mission · Wedding & Funerals · Jobs & Internship · Fellowships);
  (3) "Connect": 7 links (Home Groups · Recovery Groups · Memberships ·
  Children & Students · Volunteer · Counseling · Assistance); (4) `h2`
  "Service Hours" + `.opening-hours` `h4` "Services Hours" + times
  (Saturday Prayer Meeting — 10:00 am to 11:30 am; Sunday Service — 8:30
  am to 11:30 am). Bottom bar: "Copyright © <year> All rights reserved |
  This template is made with ❤ by <link>" — reword for Parish with the
  MANDATORY Component Dock link (`https://www.componentdock.com/`), no
  ColorLib credit.

## Requirements

### Requirement: Transparent navbar with brand and links

The system SHALL render a transparent navbar over the hero with a brand,
uppercase links and a mobile menu.

#### Scenario: Desktop navbar

- **GIVEN** the Parish app is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL be transparent, positioned over the hero
- **AND** the brand SHALL read "Parish" with "Christian Church" beside it
- **AND** uppercase white links SHALL follow: Home · About · Ministries ·
  Sermons · Events · Blog · Contact (Home active)
- **AND** links SHALL turn mint `#aee6bf` on hover

#### Scenario: Mobile menu

- **GIVEN** the navbar is rendered
- **WHEN** the viewport is narrower than the desktop breakpoint
- **THEN** a "Menu" hamburger button SHALL open a stacked menu panel with
  `aria-expanded` reflecting the open state and a close control

### Requirement: Full-height photo hero

The system SHALL render a full-height hero with a background photo, mint
overlay, play button and headline.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** it loads
- **THEN** it SHALL be 800px tall with a full-bleed mountain photo
  background and a `#2f994f` overlay at 20% opacity
- **AND** content SHALL sit right-aligned: a 70px white circular play
  button with a play icon and "Watch our latest sermons" label, the bold
  uppercase condensed headline "Loving God, Loving Others, Serving God
  With All Your Heart" (50px, white, letter-spaced) and the subheadline
  "Submit your presence to the creator of the universe"

### Requirement: Ministries icon list

The system SHALL render a ministries section with six icon rows and a photo.

#### Scenario: Ministry rows

- **GIVEN** the ministries section is rendered
- **WHEN** it loads
- **THEN** six rows SHALL stack on the left — Daily Prayers, Church
  Community, Teaching, Helpers, Wedding, Events — each with a 100px
  circular icon badge (mint `#aee6bf`; Church Community badge white), an
  uppercase 16px title and a short description
- **AND** a tall photo SHALL sit on the right (hands holding a scripture
  book)

### Requirement: Counter split with stats

The system SHALL render a two-column counter section with a video image
and four statistics.

#### Scenario: Counter content

- **GIVEN** the counter section is rendered
- **WHEN** it loads
- **THEN** a photo with a 100px white circular play button SHALL sit on
  the left
- **AND** the right column SHALL show the heading "We are church that
  believes in Jesus Christ" with a paragraph
- **AND** four stats SHALL follow: 70,000 Members · 1,000 Pastors ·
  100,000 Donation · 100 Churches, numbers in condensed mint `#aee6bf`
  28px, labels 14px

### Requirement: Sermon of the day

The system SHALL render a light-grey sermons section with a sermon image,
meta and two buttons.

#### Scenario: Sermon content

- **GIVEN** the sermons section is rendered
- **WHEN** it loads
- **THEN** the centered heading SHALL show the mint uppercase subheading
  "Experience God's Presence" and "Sermon for Today"
- **AND** a sermon photo SHALL sit on the left with title "Lord is
  Sufficient for all of our needs", meta (Sermon from: Felix Gonner ·
  Categories: God, Pray · On Sunday 13 Jan, 2019), a paragraph, a mint
  "Watch Sermons" button (play icon) and a black "Download Sermons"
  button (download icon) on the right

### Requirement: Instagram strip

The system SHALL render a 4-image Instagram strip with hover overlays.

#### Scenario: Instagram tiles

- **GIVEN** the Instagram section is rendered
- **WHEN** it loads
- **THEN** four square image tiles SHALL sit in a row (stacking on small
  screens)
- **AND** hovering a tile SHALL reveal a mint circular Instagram icon
  (inline SVG) overlay

### Requirement: Inspirational testimony

The system SHALL render a photo-background testimonial section with member
quotes.

#### Scenario: Testimonial content

- **GIVEN** the testimony section is rendered
- **WHEN** it loads
- **THEN** the centered white heading SHALL read "Inspirational
  Testimony" over a background photo with overlay
- **AND** each testimonial SHALL show a 130px circular member photo with a
  white quote badge, a quote paragraph, the member name (uppercase
  condensed, e.g. "John Cooper") and position (e.g. "Member")

### Requirement: Upcoming events

The system SHALL render an events section with three image cards and meta.

#### Scenario: Event cards

- **GIVEN** the events section is rendered
- **WHEN** it loads
- **THEN** the heading SHALL show the mint uppercase subheading "Events"
  and "Upcoming Events" ABOVE the cards (source renders it below —
  documented deviation)
- **AND** three cards SHALL follow, each with a photo, a title (e.g. "How
  To Recover The Cutting Edge"), meta (calendar icon + "Monday, 8:00 Am -
  Tuesday, 8:00 Pm", map-pin icon + "Spring Church", building icon + "203
  Fake St. Mountain View, San Francisco, California, USA") and a mint
  "Read more" button

### Requirement: Recent blog

The system SHALL render a blog section with three entries.

#### Scenario: Blog entries

- **GIVEN** the blog section is rendered
- **WHEN** it loads
- **THEN** the heading SHALL show the mint uppercase subheading "Our Blog"
  and "Recent Blog"
- **AND** three entries SHALL follow, each with a meta row (date "Aug 5,
  2019" · "Admin" · chat icon + comment count), a title (e.g. "Know About
  Our God Who Created This Universe"), a photo and an excerpt paragraph

### Requirement: Dark footer with widgets and copyright

The system SHALL render a dark footer with four widget columns, socials
and a copyright bar.

#### Scenario: Footer widgets

- **GIVEN** the footer is rendered
- **WHEN** it loads
- **THEN** it SHALL show a "Parish Church" column (brand blurb + three
  50px circular social icons — Twitter, Facebook, Instagram as inline
  SVGs), an "About" column (Staff · Beliefs · History · Mission · Wedding
  & Funerals · Jobs & Internship · Fellowships, with chevron icons), a
  "Connect" column (Home Groups · Recovery Groups · Memberships · Children
  & Students · Volunteer · Counseling · Assistance) and a "Service Hours"
  column ("Services Hours" heading with Saturday Prayer Meeting — 10:00 am
  to 11:30 am and Sunday Service — 8:30 am to 11:30 am)

#### Scenario: Copyright bar

- **GIVEN** the footer's lower area loads
- **THEN** the bottom bar SHALL read "© 2026 Parish. All rights reserved."
  with a "Made with ❤" credit line linking to
  `https://www.componentdock.com/` (mandatory, no ColorLib credit)

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper
landmarks and a document title.

#### Scenario: Full page render

- **GIVEN** the Parish app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the navbar + hero in the banner
  landmark, the ministries + counter + sermons + instagram + testimony +
  events + blog sections in the main landmark, and the footer in the
  contentinfo landmark
- **AND** the document title SHALL be "Parish — Church Template"
- **AND** the page SHALL be fully responsive from 320px to 1920px (navbar
  collapses to the mobile menu, hero text scales, ministry rows / counter
  / sermons / events / blog collapse to 1–2 columns, instagram tiles
  stack, footer columns stack)

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] Typecheck, lint, and 100% coverage tests pass for `apps/parish`
      (`scripts/verify-app.sh parish` in FAST_MODE; full `npm run gate` in
      CI).
- [ ] Visual fidelity: transparent navbar (brand "Parish Christian
      Church", uppercase white links + mint hover, mobile "Menu"
      hamburger), hero (800px mountain photo + `#2f994f` 20% overlay +
      white play circle + "Watch our latest sermons" + 50px condensed
      headline + subheadline), ministries (6 mint-circle icon rows +
      right photo), counter (video image + heading + 4 mint-number stats),
      sermons (`#f8f9fa` + image + meta + mint Watch / black Download
      buttons), instagram (4 tiles + hover overlay), testimony (bg photo +
      white heading + circular member photos), events (3 cards, heading
      ABOVE cards), blog (3 entries with meta), footer (`#171717`, 4
      columns + socials + Component Dock credit) match the Vineyard
      preview 1:1.
- [ ] Design tokens in `@theme`: brand mint `#aee6bf`; overlay green
      `#2f994f` (20%); headings `rgba(0,0,0,0.8)`; body `#999999`; section
      bg `#f8f9fa`; footer bg `#171717`; footer text
      `rgba(255,255,255,0.7)`; Poppins + Barlow Condensed via Google
      Fonts `<link>` in `index.html`.
- [ ] Buttons: radius 3px; primary = solid mint `#aee6bf` white text →
      transparent/mint on hover; black = solid `#000` white text →
      transparent/mint on hover.
- [ ] Placeholder images use `picsum.photos/seed/parish-<n>/<w>/<h>` (hero
      mountains, ministries book photo, counter cross photo, sermon
      photo, 4 insta tiles, 2+ testimonial portraits, 3 event photos, 3
      blog photos); icons from lucide-react (play, download, calendar,
      map-pin, building-2, quote, message-square, heart-handshake, church,
      book-open, gem, megaphone, menu, x); brand socials (twitter,
      facebook, instagram) as inline SVGs; no ColorLib assets copied.
- [ ] PR description states source template (ColorLib "Vineyard"), preview
      URL (https://preview.colorlib.com/theme/vineyard/), design tokens,
      and what differs (name, placeholder images, paraphrased copy,
      events heading moved above cards, single page only).
