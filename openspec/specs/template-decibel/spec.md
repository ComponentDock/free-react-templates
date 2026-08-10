# Template: Decibel (DJ / Music)

## Purpose

Decibel is a single-page DJ / radio station landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Deejee" DJ website template
(source: https://colorlib.com/wp/template/deejee/), built under a DIFFERENT
name (Decibel — the unit of sound intensity, a DJ/radio-themed brand,
re-branded) per the monorepo naming mandate (never reuse the ColorLib source
name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

> NOTE (prep-stream 2026-08-10): the live preview
> `https://preview.colorlib.com/theme/deejee/` returns HTTP 200 (36.0 KB
> HTML — the analysis below is from that live demo; the TEMPLATES.md
> screenshot (`deejee-free-template.jpg`, 1200×946, AVIF, viewed in a
> browser) matches the live render: dark charcoal-navy page, hot-pink
> `#e3207b` accent, DJ hero photo with blue/pink stage lighting, white
> script logo "Deejee." top-left, centered uppercase headline + pink CTA).

The reference is a DARK music/DJ site: body background `#222831`
(charcoal-navy), dark sections `#13171d`, white text, ONE hot-pink brand
accent `#e3207b` (buttons, headings underlines, card-title highlights,
carousel dots, social strip, form focus). Structure: an absolute navbar
over the hero (white script logo "Deejee." + nav with a Shows dropdown
and a nested Sub Menu); a full-viewport hero cover (DJ photo under a
`rgba(0,0,0,0.4)` overlay, centered Oswald uppercase headline "Turn On
The Feeling With Music" + pink "Download Template" button); "Upcoming
Shows" (heading with pink underline + 4 image cards with pink-highlight
titles and show time/host meta); "Featured Podcasts" retro block (1 big
card left + 2 stacked cards right, each image + pink/black highlighted
title + time); a dark "Love By Our Listeners" testimonial carousel
(white cards, circular avatars, pink active dots); "Our DJs" (6 photo
cards with centered overlay name/role/blurb/socials, image zoom on
hover); a dark "News & Events" row (3 white-boxed post cards); a pink
social-icon strip (6 icons, hover → yellow on dark pink); and a dark
footer (About + Subscribe email form, Navigations links, Follow Us
socials, "Watch Live Streaming" image with a circular white play button,
copyright bar). Decibel recreates that structure section-for-section
with matching layout, colors, typography, and content types (no ColorLib
assets — seeded picsum photos, Google Fonts, lucide-react + inline SVG
brand icons).

## Design reference (replication findings)

- **Original:** ColorLib "Deejee" — free DJ / Radio website template (page
  title "Deejee &mdash; Colorlib Website Template"). TEMPLATES.md has TWO
  dup rows for the same source: line 373 under **Bootstrap (216)** and line
  2262 under **Music (19)** — same source, ONE item; mark BOTH `[x]` at
  ship time. The recreation brands itself **Decibel** but keeps the same
  section structure, copy kinds and interaction patterns.
- **Live preview DOM analyzed (verified 2026-08-10):**
  `https://preview.colorlib.com/theme/deejee/` (HTTP 200, 36.0 KB).
  Bootstrap 4 + jQuery + owl.carousel + aos (animate-on-scroll) + magnific
  popup (lightbox) + mediaelementplayer (CSS included, no `<audio>` on this
  page) + icomoon/flaticon icon fonts; most links `href="#"` (inner pages
  exist in the demo: dj.html, shows.html, events.html, about.html,
  contact.html — single-page recreation uses `#` anchors).
- **Visual design (TEMPLATES.md screenshot `deejee-free-template.jpg`,
  1200×946, viewed in browser 2026-08-10 + live render):** dark nightlife /
  electronic-music aesthetic. Deep charcoal-navy backgrounds, white text,
  hot-pink `#e3207b` accents. Hero: big DJ photo (headphones, mixing
  console) under dramatic blue/pink stage lighting, centered white
  uppercase headline "TURN ON THE FEELING WITH MUSIC" + pink rectangular
  "Download Template" button; white script logo "Deejee" top-left, white
  nav top-right (Home, DJs, Shows, Events, About, Contact). Below the
  fold: "UPCOMING SHOWS" white uppercase heading with a thin pink
  underline, grey lorem paragraph. Oswald for headings, modern sans-serif
  (Nunito Sans) for body.
- **Section order (1:1, verified from live DOM):**
  1. `div.site-wrap` (page wrapper) → `nav.site-navbar` (ABSOLUTE, z-index
     99, over the hero):
     - Left: `<a class="site-logo">Deejee.</a>` (text wordmark — white
       script-style; per screenshot it is a script font → recreation:
       script Google font e.g. **Pacifico / Dancing Script**).
     - Right `div.site-navigation`: mobile-only hamburger
       `a.site-menu-toggle` (icon-menu) toggling the off-canvas
       `.site-mobile-menu` (header + close + `.site-nav-wrap` links, hover
       pink); desktop `ul.site-menu.js-clone-nav.d-none.d-lg-block` —
       `li.active` Home (index.html), DJs (dj.html), `li.has-children`
       Shows ▾ (`ul.dropdown.arrow-top`: Top 20 of The Week, Featured
       Artist, Interviews, nested `li.has-children` Sub Menu ▾ →
       Menu One/Two/Three), Events (events.html), About (about.html),
       Contact (contact.html). Nav link style: `rgba(255,255,255,0.6)`,
       letter-spacing .05em, padding 10px; hover white; dropdown link
       hover `#e3207b`.
  2. `div.site-blocks-cover.overlay` — HERO: inline
     `background-image: url('images/hero_bg_1.jpg')`,
     `min-height: 600px; height: calc(100vh)`, `::before` overlay
     `rgba(0,0,0,0.4)`; centered `div.col-md-7.text-center`: `h1.mb-4`
     "Turn On The Feeling With Music" (white, Oswald, 4rem, weight
     normal, letter-spacing .1em, uppercase) + `<p><a class="btn
btn-primary px-4 py-3">Download Template</a>`.
  3. `div.site-section` — "Upcoming Shows": `div.site-section-heading
.text-center.mb-5.w-border.col-md-6.mx-auto` — `h2.mb-5` "Upcoming
     Shows" (Oswald 2rem, letter-spacing .2em, uppercase, white) with
     `::after` 70×2px `#e3207b` underline + lorem paragraph; then
     `.row` of 4 × `a.unit-9` (col-md-6 col-lg-3): `div.image`
     (bg-image, height 300px, cover) + `div.unit-9-content` (absolute
     bottom): `h2` show title (inline bg `#e3207b` + `box-shadow: 10px 0
0 #e3207b` — pink highlight strip) + `span` "Friday 1:00pm &mdash;
     2:30pm" + `span` "with <host>". Cards: **This Is The Day** / with
     Wendy Matos (img_1), **Electro Party** / with Gaby Tenda (img_2),
     **Classic Hits** / with James Tenda (img_3), **Classic Songs** /
     with Troy Peters (img_4).
  4. `div.site-section` — "Featured Podcasts" (same heading block +
     lorem), then `div.site-block-retro.d-block.d-md-flex`:
     - LEFT `a.col1.unit-9.no-height` (image img_2.jpg) — 1 big card.
     - RIGHT `div.col2.ml-auto` — 2 stacked: `a.col2-row1.unit-9.
no-height` (img_3.jpg) + `a.col2-row2.unit-9.no-height`
       (img_1.jpg).
     - Each card content: `h2` "Classic Songs For Classic People"
       (pink highlight) + `span` "Friday 1:00pm &mdash; 2:30pm" (black
       highlight: inline bg `#000` + `box-shadow: 10px 0 0 #000`).
       SOURCE QUIRK: all 3 repeat the same title/time → recreation
       should use 3 DISTINCT show titles of the same kind.
  5. `div.site-section.bg-dark.block-13` — "Love By Our Listeners"
     (heading + lorem; bg `#13171d`): `div.nonloop-block-13.owl-carousel`
     — N × `div.text-center.p-3.p-md-5.bg-white` (WHITE card on dark):
     `div.mb-4` circular avatar (img person_1.jpg, `w-50 img-fluid
rounded-circle`) + `h3.font-weight-light.h5` name (e.g. Megan
     Smith) + `p.font-italic` quote. SOURCE QUIRK: 5 slides all repeat
     the same lorem quote → recreation uses 5 DISTINCT short listener
     quotes; owl dots: active dot `background: #e3207b`.
  6. `div.site-section` — "Our DJs" (heading + lorem): `.row` of 6 ×
     `div.col-md-6.col-lg-4.mb-5` > `div.team-member` (position
     relative, overflow hidden): `img` (person_1..6.jpg, img-fluid,
     hover `scale(1.1)` .3s ease) + `div.text` (ABSOLUTE centered
     overlay: top 50%, `translateY(-30%)`, padding 20px, text-align
     center, transition .5s; `::before` dark scrim fade-in on hover):
     `h2.mb-2.font-weight-light.h4` name (Megan Smith, Brooke Cagle,
     Philip Martin, …) + `span.d-block.mb-2.text-white-opacity-05` role
     ("Creative Director" — rgba(255,255,255,.5)) + `p.mb-4` blurb +
     3 social links `a.text-white.p-2` (icon-facebook, icon-twitter,
     icon-linkedin). SOURCE QUIRK: all 6 roles identical "Creative
     Director" → recreation may vary roles (DJ, Producer, Radio Host…)
     while keeping the card pattern.
  7. `div.site-section.bg-dark` — "News & Events" (heading + lorem, bg
     `#13171d`): `.row` of 3 × `div.col-md-6.col-lg-4.mb-4.mb-lg-0`:
     `a` > `img` (img_4/img_2/img_3.jpg, img-fluid) + `div.p-4.bg-white`
     (white box): `span.d-block.text-secondary.small.text-uppercase`
     date ("Jan 20th, 2019" — `#6c757d`) + `h2.h5.text-black.mb-3` >
     `a` title ("This Is The Day, Party, Party!"). SOURCE QUIRK: all 3
     posts identical → recreation uses 3 DISTINCT titles/dates.
  8. `div.bg-primary` — SOCIAL STRIP (bg `#e3207b`): 6 × `a.col-2.
text-center.py-4.social-icon.d-block` (`span.icon-* text-white` —
     facebook, twitter, instagram, linkedin, pinterest, +1 more);
     HOVER: text `#eec60a` + bg `#cf1a6f` (`.social-icon:hover`).
  9. `footer.site-footer` (padding 4em 0, page bg `#222831`; p color
     `#737373`; h2–h5 white):
     - col-lg-4: `h3.footer-heading.mb-4` "About Deejee" (1.3rem,
       uppercase, ls .1em, white, `::before` 40×2px `#e3207b` underline)
       - about paragraph; `h3.footer-heading.mb-4` "Subscribe" +
         `form.site-block-subscribe` → `div.input-group.mb-3`: input
         `form-control.border-secondary.text-white.bg-transparent`
         (height 60px, font-weight 300, placeholder "Enter your email")
       - `div.input-group-append` > `button.btn.btn-primary` "Subscribe"
         (padding 0 20px).
     - col-lg-4: "Navigations" — 2 × `ul.list-unstyled` (4 links each:
       Home, DJs, News, Top 20 of the week / About Us, Privacy Policy,
       Contact Us, Membership); "Follow Us" — 4 social icons
       (facebook, twitter, instagram, linkedin).
     - col-lg-4: `h3.footer-heading.mb-4` "Watch Live Streaming" +
       `div.block-16` > `figure` (position relative): `img.img-fluid.
rounded` (img_1.jpg) + `a.play-button.popup-vimeo` →
       `span.icon-play` (70×70 WHITE circle, absolute centered, font-size
       20px; popup-vimeo opens a Vimeo link — recreation: link only, no
       lightbox needed).
     - Bottom bar `div.row.pt-5.mt-5.text-center`: copyright `p`:
       "Copyright © <year> All rights reserved | This template is made
       with ♥ by Colorlib".
- **Design tokens extracted from the live CSS (`css/style.css` +
  `css/bootstrap.min.css`, verified 2026-08-10):**
  - Hot pink **`#e3207b`** — THE brand color (Bootstrap `$primary`
    override: `.btn-primary`, `.bg-primary`, `:focus` ring
    `rgba(227,32,123,.5)`; theme uses it for heading `::after` underline
    (70×2px), `.unit-9 h2` highlight, footer-heading `::before`
    (40×2px), `.block-13 .owl-dot.active > span`, form-control focus
    border, dropdown hover, mobile-menu link hover, `.site-block-27`
    active item).
  - Pink hovers: **`#c41969`** (btn-primary hover), **`#b91763`**
    (btn-primary active/dropdown-toggle).
  - Social hover: text **`#eec60a`** (yellow) on bg **`#cf1a6f`** (dark
    pink).
  - Page background **`#222831`** (body — the whole site is DARK);
    dark section background **`#13171d`** (`.bg-dark` override);
    hero overlay **`rgba(0,0,0,0.4)`** (`::before`).
  - Text: white **`#fff`** (headings, hero, nav hover); body
    **`rgba(255,255,255,0.5)`** (global body color — light grey);
    muted **`#737373`** (footer paragraphs); secondary/date
    **`#6c757d`** (Bootstrap `.text-secondary`); `#ccc` (podcast-entry
    separators); card text black `#000` (news titles via
    `.text-black`).
  - Fonts: **Oswald** (h1–h5, `font-family: 'Oswald', sans-serif`) —
    uppercase headings, letter-spacing .1em–.2em; **"Nunito Sans"**
    body (1.1rem, font-weight 400, line-height 1.7). Both are Google
    Fonts — use them directly. icomoon icon font → lucide-react +
    inline SVG brand icons (lucide has no brand icons).
  - Buttons (`.btn.btn-primary`, Bootstrap 4): white text on `#e3207b`,
    border `#e3207b`, border-radius .25rem (Bootstrap default — NOT
    square), hover `#c41969`; hero CTA padding px-4 py-3; footer
    Subscribe button padding 0 20px, sits in a 60px input group.
  - Section headings (`.site-section-heading h2`): Oswald 2rem,
    letter-spacing .2em, uppercase, white, `::after` 70×2px `#e3207b`
    underline below (w-border), centered, mb-5; intro paragraph below
    (body grey).
  - `.unit-9` card: image div height 300px (cover, center), content
    absolutely positioned at bottom; `h2` title = inline highlight
    strip: `background: #e3207b` + `box-shadow: 10px 0 0 #e3207b`;
    `span` time = same technique with `#000`. Hover: image scales
    (transition .3s).
  - `.team-member` card: image + absolute centered overlay
    (`translateY(-30%)`, padding 20px) with scrim `::before` fading in
    on hover; img `scale(1.1)` on hover; overlay text: h4 name (Oswald
    light), role `rgba(255,255,255,.5)` uppercase, blurb, 3 socials.
  - Testimonial card: white `bg-white`, padding p-3 p-md-5, centered;
    circular avatar (rounded-circle, w-50); h3 name (font-weight-light
    h5); italic quote; owl dots below, active pink.
  - Play button: 70×70 white circle, absolute centered, icon-play
    (font-size 20px), hover opacity 1 (default .7-ish).
  - Footer: padding 4em 0; `.footer-heading` 1.3rem uppercase ls .1em
    white + 40×2px pink `::before` underline; footer p `#737373`;
    subscribe input transparent (white text, white border, height
    60px, weight 300); copyright centered small text.
  - Rhythm: sections `padding: 3em 0`; hero `min-height: 600px;
height: calc(100vh)`; card columns 3-up (col-lg-3 shows / col-lg-4
    DJs & news), mb-5 spacing; heading blocks `col-md-6 mx-auto`
    centered.
  - Typography scale: hero h1 4rem ls .1em; section h2 2rem ls .2em;
    footer-heading 1.3rem ls .1em; unit-9 h2 ~1.5rem; team h4 1.5rem;
    testimonial h3 1.25rem; nav 1rem ls .05em; dates small uppercase.
- **Recreation decisions:** Tailwind re-implementation of the
  Bootstrap-4 grid (NO Bootstrap dependency); owl-carousel testimonials →
  small stateful carousel (useState index, prev/next or dot controls,
  pink active dot — no owl.carousel); aos fade-up → optional CSS
  animation/intersection observer (decorative — can be omitted or a
  simple fade-in); icomoon/flaticon → lucide-react (Play, Menu, X,
  Search) + inline SVG brand icons for socials; magnific popup → plain
  link (play button links to the Vimeo URL in a new tab); images →
  seeded picsum placeholders (`picsum.photos/seed/decibel-<n>/<w>/<h>` —
  source images must not be copied); Google Fonts **Oswald** (400/500/600)
  - **Nunito Sans** (400/600/700) + a script font for the logo wordmark
    (e.g. **Pacifico** or **Dancing Script**) via `<link>` in `index.html`;
    brand "Deejee" → "Decibel" (script text logo "Decibel."); document
    title "Decibel — DJ & Radio Template"; nav links `#` anchors
    (single-page recreation of the demo); fix source repetitions (3 retro
    cards identical → distinct; 5 testimonials identical → distinct; 3 news
    posts identical → distinct; vary DJ roles).

Decibel lives in `apps/decibel` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Navbar

The system SHALL render an absolute dark-transparent navbar over the hero
with a script logo, desktop nav with dropdowns, and a mobile off-canvas
menu.

#### Scenario: Desktop navbar

- **GIVEN** the page is rendered
- **THEN** a navbar SHALL be shown overlaid on the hero (z-index above the
  cover, no solid background)
- **AND** the logo SHALL be the wordmark "Decibel." in a white script font
  on the left
- **AND** the nav SHALL show links Home (active), DJs, Shows, Events,
  About, Contact in white at 60% opacity, hover full white
- **AND** the Shows link SHALL open a dropdown: Top 20 of The Week,
  Featured Artist, Interviews, Sub Menu (which opens a nested dropdown:
  Menu One, Menu Two, Menu Three)
- **AND** dropdown links SHALL turn pink `#e3207b` on hover

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrow (mobile)
- **WHEN** the hamburger toggle is clicked
- **THEN** an off-canvas mobile menu SHALL slide in with the same links
- **AND** its links SHALL turn pink `#e3207b` on hover
- **AND** a close control SHALL dismiss the menu

### Requirement: Hero cover

The system SHALL render a full-viewport hero with a photo background,
dark overlay, centered headline and a primary CTA button.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **THEN** a full-viewport-height hero (min-height 600px) SHALL be shown
  with a DJ/music photo background (seeded picsum) under a
  `rgba(0,0,0,0.4)` overlay
- **AND** the centered headline SHALL read "Turn On The Feeling With
  Music" (white, Oswald, ~4rem, letter-spacing .1em, uppercase)
- **AND** a primary button SHALL read "Download Template" (white text on
  pink `#e3207b`, rounded .25rem, padding ~px-4 py-3, hover darker pink
  `#c41969`)

### Requirement: Upcoming Shows

The system SHALL render a section with a pink-underlined heading and four
show cards (image + pink-highlighted title + time/host meta).

#### Scenario: Shows section

- **GIVEN** the shows section is rendered
- **THEN** a centered heading "Upcoming Shows" SHALL be shown (Oswald
  2rem, uppercase, letter-spacing .2em, white) with a 70×2px pink
  `#e3207b` underline and an intro paragraph below
- **AND** four show cards SHALL be shown in a row (stacking on mobile),
  each an image (height 300px, cover) with content overlaid at the bottom
- **AND** each title SHALL use the pink highlight treatment (inline pink
  background + 10px box-shadow)
- **AND** each card SHALL show a time line "Friday 1:00pm — 2:30pm" and a
  host line "with <name>"
- **AND** the cards SHALL be: This Is The Day (with Wendy Matos),
  Electro Party (with Gaby Tenda), Classic Hits (with James Tenda),
  Classic Songs (with Troy Peters)

### Requirement: Featured Podcasts retro block

The system SHALL render a retro block of three podcast cards (one large
left, two stacked right) with highlighted titles and times.

#### Scenario: Retro block

- **GIVEN** the featured podcasts section is rendered
- **THEN** a "Featured Podcasts" heading block SHALL be shown (same style
  as Upcoming Shows)
- **AND** a large card SHALL be shown on the left (image + content at
  bottom) and two smaller stacked cards on the right
- **AND** each card SHALL show a title with the pink highlight treatment
  and a time line with the black highlight treatment (inline black
  background + 10px box-shadow)
- **AND** the three card titles SHALL be DISTINCT (the source repeats
  "Classic Songs For Classic People" on all three — fix in recreation)

### Requirement: Testimonials carousel

The system SHALL render a dark section with a carousel of white
testimonial cards with circular avatars.

#### Scenario: Listener testimonials

- **GIVEN** the testimonials section is rendered
- **THEN** a dark-background (`#13171d`) section SHALL be shown with the
  centered heading "Love By Our Listeners" (pink underline + intro)
- **AND** a carousel SHALL show one white card at a time: circular avatar
  image, name (light-weight heading), and an italic quote
- **AND** dot controls SHALL be shown below with the active dot pink
  `#e3207b`
- **AND** the carousel SHALL cycle through five DISTINCT short listener
  quotes (the source repeats one lorem quote on all five slides — fix in
  recreation)

### Requirement: Our DJs

The system SHALL render six DJ cards, each a photo with a centered
overlay showing name, role, blurb and social links.

#### Scenario: DJ cards

- **GIVEN** the DJs section is rendered
- **THEN** a heading "Our DJs" SHALL be shown (pink underline + intro)
- **AND** six cards SHALL be shown in a 3-column grid (stacking on
  mobile)
- **AND** each card SHALL show a photo that scales to 1.1 on hover with a
  dark scrim fading in
- **AND** the centered overlay SHALL show the name (Oswald light), a role
  line (white at 50% opacity, e.g. "Creative Director" — recreation may
  vary roles: DJ, Producer, Radio Host), a short blurb, and three social
  icon links (Facebook, Twitter, LinkedIn)

### Requirement: News and Events

The system SHALL render a dark section with three white-boxed news post
cards.

#### Scenario: News posts

- **GIVEN** the news section is rendered
- **THEN** a dark-background (`#13171d`) section SHALL be shown with the
  heading "News & Events" (pink underline + intro)
- **AND** three post cards SHALL be shown in a row: image on top, white
  box below with an uppercase date line (small, `#6c757d`) and a black
  title
- **AND** the three posts SHALL have DISTINCT titles and dates (the
  source repeats "This Is The Day, Party, Party!" / "Jan 20th, 2019" on
  all three — fix in recreation)

### Requirement: Social strip

The system SHALL render a pink strip of six social icon links with a
yellow-on-dark-pink hover.

#### Scenario: Social strip

- **GIVEN** the page is rendered
- **THEN** a full-width strip with background `#e3207b` SHALL be shown
  with six social icons (Facebook, Twitter, Instagram, LinkedIn,
  Pinterest, and one more, e.g. YouTube) spaced equally across the width
- **WHEN** a social icon is hovered
- **THEN** the icon SHALL turn yellow `#eec60a` and the cell background
  SHALL turn dark pink `#cf1a6f`

### Requirement: Footer

The system SHALL render a dark footer with About + Subscribe form,
Navigations + Follow Us, Watch Live Streaming, and a copyright bar.

#### Scenario: Footer columns

- **GIVEN** the footer is rendered
- **THEN** a dark footer SHALL be shown with three columns:
- **AND** the first column SHALL show "About Decibel" (heading with a
  40×2px pink underline + about paragraph in `#737373`) and a
  "Subscribe" email form (transparent input, white text/border, height
  60px, placeholder "Enter your email", pink "Subscribe" button)
- **AND** the second column SHALL show "Navigations" with two link lists
  (Home, DJs, News, Top 20 of the week / About Us, Privacy Policy,
  Contact Us, Membership) and "Follow Us" with four social icons
- **AND** the third column SHALL show "Watch Live Streaming" with a
  rounded image and a centered circular white play button (70×70) that
  links to the video URL (opens in a new tab)
- **AND** the bottom bar SHALL show the centered copyright line:
  "Copyright © <current year> All rights reserved | This template is
  made with ♥ by Decibel"

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-decibel`
- [ ] `scripts/verify-app.sh decibel` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order: navbar (logo + nav + Shows ▾ dropdown with Sub
      Menu ▾ + mobile hamburger menu) → hero cover (photo + overlay +
      headline + Download Template CTA) → Upcoming Shows (heading + 4
      unit-9 cards) → Featured Podcasts (heading + retro block: 1 big + 2
      stacked cards) → Love By Our Listeners (dark testimonials carousel,
      white cards + circular avatars + pink active dots) → Our DJs (6
      overlay cards) → News & Events (dark, 3 white-boxed posts) → social
      strip (pink, 6 icons) → footer (About + Subscribe, Navigations +
      Follow Us, Watch Live Streaming, copyright bar)
- [ ] Brand color in `@theme`: pink `#e3207b` (buttons, heading
      underlines, unit-9 title highlights, owl active dot, footer-heading
      underline, dropdown hover, form focus); page bg `#222831`; dark
      section bg `#13171d`; hover pinks `#c41969` / `#b91763`; social
      hover `#eec60a` on `#cf1a6f`; hero overlay `rgba(0,0,0,0.4)`;
      body text `rgba(255,255,255,0.5)`; footer text `#737373`; date
      `#6c757d`; used via Tailwind classes
- [ ] Oswald (400/500/600) + Nunito Sans (400/600/700) + script logo font
      (Pacifico or Dancing Script) via Google Fonts `<link>` in
      `index.html`; document title "Decibel — DJ & Radio Template"
- [ ] Navbar: absolute over hero, script logo "Decibel." white; links
      Home (active) / DJs / Shows ▾ / Events / About / Contact at white
      60%, hover white; Shows dropdown (Top 20 of The Week, Featured
      Artist, Interviews, Sub Menu ▾ → Menu One/Two/Three) with pink
      hover; mobile hamburger → off-canvas menu with close
- [ ] Hero: min-height 600px / 100vh, seeded picsum DJ photo +
      `rgba(0,0,0,0.4)` overlay, h1 "Turn On The Feeling With Music"
      (Oswald 4rem, ls .1em, uppercase), pink rounded CTA "Download
      Template" (hover `#c41969`)
- [ ] Upcoming Shows: heading 2rem ls .2em uppercase + 70×2px pink
      underline + intro; 4 cards (image 300px + bottom overlay): pink
      highlight title + "Friday 1:00pm — 2:30pm" + "with <host>"; names
      This Is The Day / Electro Party / Classic Hits / Classic Songs
- [ ] Featured Podcasts: heading block + retro flex: 1 large card left, 2
      stacked right; titles pink highlight, times black highlight; 3
      DISTINCT titles
- [ ] Testimonials: bg `#13171d`, carousel of white cards (circular
      avatar + name + italic quote), 5 DISTINCT quotes, pink active dot
- [ ] Our DJs: 6 cards in 3-col grid; hover → img scale(1.1) + scrim;
      overlay: name + role (50% white) + blurb + 3 social icons
- [ ] News & Events: bg `#13171d`, 3 cards (image + white box: uppercase
      date `#6c757d` + black title), DISTINCT titles/dates
- [ ] Social strip: bg `#e3207b`, 6 icons; hover → `#eec60a` on
      `#cf1a6f`
- [ ] Footer: 3 columns (About + Subscribe form, Navigations 2×4 links +
      Follow Us, Watch Live Streaming image + 70×70 white circular play
      button linking to the video URL in a new tab) + centered copyright
      "made with ♥ by Decibel"
- [ ] Primary buttons rounded .25rem (NOT square), white text on pink,
      hover `#c41969`
- [ ] Placeholder images via `picsum.photos/seed/decibel-<n>/<w>/<h>`,
      icons from lucide-react (Play, Menu, X) + inline SVG brand icons
      for socials — no copied assets; brand "Decibel"
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` on BOTH dup rows (lines 373 and 2262) +
      surge URL + `npm run readme:status` done by implementer at ship
      time
