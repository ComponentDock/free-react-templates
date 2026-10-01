# Template: Tripquest (Travel Agency Landing Template)

## Purpose

Tripquest is a single-page travel agency landing website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Travel" template (see TEMPLATES.md, Travel section, line
3003), built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The reference is a classic travel-agency landing page anchored by a
full-bleed coastal hero photograph with a dark navy overlay. A translucent
fixed header sits over it: a thin utility top bar ("Visit Us" / "Buy
Tickets" left, social icons right) above a translucent main menu bar
(circular logo mark + wordmark left, uppercase white nav links right —
Home, About, Packages, Hotels, Insurence [sic in source], Blog dropdown,
Pages dropdown, Contact). The hero splits 6/4: on the left a small
uppercase eyebrow "Away from monotonous life", a giant uppercase white
h1 "Magical Travel", a white paragraph, and a square yellow "Get
Started" button; on the right a white booking widget with three tabs
(Flights / Hotels / Holidays — active tab white, inactive tabs
translucent white) whose white panel holds a stacked form (From, To,
Start, Return, Adults, Child) ending in a square yellow "Search …"
button.

Below the hero the page runs, 1:1 in this order: "Popular Destinations"
(3 photo cards — Mountain River/Paraguay $150, Dream City/Paris $250,
Cloud Mountain/Sri Lanka $350 — each with a yellow price badge that
fades in on hover together with a dark image overlay); "We Provide
Affordable Prices" (3 white package cards floating over a cover image
background — Cheap / Luxury / Camping Packages — each a 6-row list
destination + light price pill, h4 title underlined with a 1px yellow
rule); "Other issues we can help you with" (4-up service cards: image +
title + blurb — Rent a Car, Cruise Booking, To Do List, Food Features);
"Testimonial from our Clients" (light lavender section, slider of white
cards: avatar left, quote + name + star rating right); a split CTA band
(dark left half: "Did not find your Package? Feel free to ask us. We'll
make it for you" + square yellow "Request Custom Price" button; photo
right half, full-bleed); "Latest from Our Blog" (carousel of post
cards: image, Travel/Life Style tag chips, title, excerpt, date); and a
very dark navy footer (`#04091e`) with four widgets — About Agency,
Navigation Links (two link columns), Newsletter (input + square yellow
submit), InstaFeed (4-image grid) — closing with a bottom bar
(copyright left, social icons right). The recreation's copyright links
Component Dock instead of the source attribution.

The design is anchored by one signature color — golden yellow `#f8b600`
(every CTA button, nav hover, price badges, price-card underline) — on
white, with body grey `#777777`, heading charcoal `#222222`, a light
lavender testimonial band `#f9f9ff`, and a near-black navy footer
`#04091e` that also tints the hero overlay (`rgba(4, 9, 30, 0.4)`).
Typography is Poppins throughout: hero h1 60px uppercase, section h1s
centered dark with grey subtext, nav links 12px uppercase 500. Buttons
are square-cornered (radius 0), 14px uppercase 500, yellow solid with a
white/yellow-flip hover — the flat, sharp-edged look that
distinguishes this template from the rounded-card travel templates.

## Design reference (replication findings)

- **Original:** ColorLib "Travel" — travel agency landing template
  (source: https://colorlib.com/wp/template/travel/). Listed in
  TEMPLATES.md `## Travel` at line 3003; slug appears exactly once.
- **Live preview URL:** https://preview.colorlib.com/theme/travel/
  (HTTP 200, 41,945 bytes HTML, verified 2026-10-01; theme stylesheet
  `css/main.css`, 68,736 bytes). HTML saved to `/tmp/travel-preview.html`;
  theme CSS saved to `/tmp/travel-main.css`. The preview DOM is
  authoritative for section order and copy.
- **Screenshot:** `travel-free-template.jpg`
  (`https://colorlib.com/wp/wp-content/uploads/sites/2/travel-free-template.jpg`,
  reviewed visually 2026-10-01) confirms the hero treatment: aerial
  coastal photo (rocks, turquoise surf, sand) under the `rgba(4,9,30,0.4)`
  overlay; the translucent menu bar with the demo brand ("Travelista" —
  demo name only, never reused); uppercase white nav; the white booking
  card hanging from the nav on the right with tab strip and square
  yellow submit; "Popular Destinations" centered heading on white below.
- **Stylesheets in the reference:** `linearicons.css`,
  `font-awesome.min.css`, `bootstrap.css`, `magnific-popup.css`,
  `jquery-ui.css`, `nice-select.css`, `animate.min.css`,
  `owl.carousel.css`, `main.css` (theme — canonical tokens). Icon fonts
  (Linearicons + Font Awesome), jQuery, Bootstrap, owl carousel, magnific
  popup and nice-select are NEVER copied: recreation uses lucide-react
  icons, Tailwind grid, and React-state tabs/slider/carousel. The theme
  CSS uses `"Poppins", sans-serif` everywhere — load Poppins 300–700 via
  Google Fonts `<link>` in `index.html`.
- **Key theme rules (verified in main.css):**
  - `body`/headings: `font-family: "Poppins", sans-serif`; headings
    charcoal `#222222`; paragraphs grey `#777777`
  - `.banner-area { background: url(../img/hero-bg.jpg) center;
    background-size: cover }` with `.overlay-bg { background: rgba(4, 9,
    30, 0.4) }` — full-bleed photo hero + navy overlay (recreation:
    `picsum.photos` placeholder seed)
  - `.banner-left h6 { text-transform: uppercase; font-weight: 400;
    font-size: 14px; letter-spacing: 2px }` (eyebrow);
    `.banner-left h1 { margin: 20px 0; font-size: 60px; text-transform:
    uppercase }` (40px/33px/36px responsive); `.banner-left
    .primary-btn { background: #f8b600 }` hover `#222`/white
  - `.banner-right .nav-item { background: rgba(255, 255, 255, 0.25);
    text-transform: uppercase; font-weight: 600; font-size: 13px }`;
    active tab white; `.tab-content { background: #fff }`;
    `.form-wrap { padding: 40px 30px; text-align: center }`; inputs
    square (`border-radius: 0`), 13px/300, `border-color: #eee`
  - `#header { position: fixed; z-index: 997 }`; `.header-top a { color:
    #fff }` hover `#f8b600`; `.main-menu { background: rgba(255, 255,
    255, 0.15) }`; scrolled state `#header.header-scrolled {
    background-color: rgba(34, 34, 34, 0.9) }` with `.header-top`
    hidden; `.nav-menu a { color: #fff; font-weight: 500; font-size:
    12px; text-transform: uppercase }` hover `#f8b600`; submenus white
    panels, 12px links, `box-shadow: 0px 0px 30px rgba(127, 137, 161,
    0.25)`
  - `.genric-btn` (shared button system): `display: inline-block;
    line-height: 40px; padding: 0 30px; font-weight: 500; font-size:
    14px; text-transform: uppercase; border-radius: 0 !important`;
    `.primary { color: #fff; background: #f8b600 }` hover white bg +
    `#f8b600` border/color; `:hover` global `border: 1px solid #f8b600;
    color: #f8b600`; size variants e-large/large/medium/small; the
    palette also ships success `#4cd3e3`, info `#38a4ff`, warning
    `#f4e700`, danger `#f44a40` variants (primary yellow is the one
    this template uses)
  - `.single-destination .overlay-bg { background: rgba(4, 9, 30, 0.4);
    opacity: 0 }` → `:hover { opacity: 1 }`;
    `.desc .price-btn { background: #f8b600; color: #222; padding: 6px
    30px; font-size: 14px; font-weight: 600; opacity: 0 }` →
    `:hover { opacity: 1 }` (yellow price badge fades in over the
    photo)
  - `.price-area { background: url(../img/price-bg.png); background-size:
    cover }` (recreation: picsum placeholder); `.single-price {
    background: #fff; padding: 30px }`; `.single-price h4 { text-align:
    center; border-bottom: 1px solid #f8b600; padding-bottom: 20px }`;
    list `.price-btn { background: #f9f9ff; border: 1px solid #eee;
    color: #222; font-size: 14px; font-weight: 600; padding: 5px 20px }`
  - `.testimonial-area { background-color: #f9f9ff }`;
    `.single-testimonial { background-color: #fff; padding: 25px 30px
    12px 30px }`; `.thumb { margin-right: 30px }` (avatar left);
    `.home-about-area .home-about-left { padding-left: 20% }` (split
    CTA); `.footer-area { background: #04091e; padding-top: 100px }`
  - `.button-area { background: #f9f9ff }` (unused light-panel token);
    search widget button `background: #f8b600; color: #fff;
    border-bottom-right-radius: 20px` (sidebar variant — not on this
    page, noted for token completeness)

## Requirements

### Feature: Top bar + Navbar

A fixed translucent header with a utility top bar above the main menu,
turning into a solid dark bar on scroll.

#### Scenario: Top bar and main menu render as in the reference
- **Given** the page loads on a desktop viewport
- **When** the header renders over the hero
- **Then** the top bar shows "Visit Us" and "Buy Tickets" links left
  and social icons (Facebook, Twitter, Dribbble, Behance via lucide)
  right, all white, hovering to yellow `#f8b600`
- **And** the main menu bar below shows a circular logo mark +
  "tripquest" wordmark left
- **And** the nav links are uppercase white Poppins 12px/500 — Home,
  About, Packages, Hotels, Insurence, Blog (dropdown), Pages
  (dropdown), Contact — each hovering to `#f8b600`

#### Scenario: Dropdown submenus open on hover/focus
- **Given** the desktop header is visible
- **When** the user hovers (or keyboard-focuses) Blog or Pages
- **Then** a white dropdown panel opens with 12px dark links
  (Blog: Blog Home, Blog Single; Pages: Elements, Level 2 → Item One,
  Item Two) with the soft shadow `0 0 30px rgba(127, 137, 161, 0.25)`
  and yellow link hover

#### Scenario: Header goes solid dark on scroll
- **Given** the page is scrolled past the hero start
- **When** the scroll position triggers the scrolled state
- **Then** the header keeps its fixed position, the top bar hides, the
  menu bar background becomes `rgba(34, 34, 34, 0.9)`, and the menu
  bar's translucent white background turns transparent

#### Scenario: Mobile layout collapses to a hamburger
- **Given** the viewport is below the lg breakpoint
- **When** the header renders
- **Then** the desktop menu is hidden and a hamburger button (lucide
  Menu/X) toggles a nav panel listing the same links, with
  `aria-expanded` reflecting state

### Feature: Hero + booking widget

A split hero: uppercase headline + CTA left, white tabbed booking form
right, over a full-bleed coastal photo with a navy overlay.

#### Scenario: Hero copy and CTA render as in the reference
- **Given** the page loads
- **When** the hero renders
- **Then** the left column shows the uppercase eyebrow "Away from
  monotonous life" (14px, letter-spacing 2px, white)
- **And** the white uppercase h1 reads "Magical Travel" (Poppins,
  60px desktop, scaling down responsively)
- **And** a white paragraph renders below (same kind of copy: a short
  travel-planning blurb, paraphrased)
- **And** a square yellow `#f8b600` "Get Started" button (uppercase)
  renders, hovering to charcoal `#222` with white text

#### Scenario: Booking widget tabs switch between forms
- **Given** the hero renders
- **When** the booking widget is visible
- **Then** the tab strip shows Flights (active), Hotels, Holidays —
  active tab white with dark text, inactive tabs translucent white
  `rgba(255,255,255,0.25)` with white uppercase 13px/600 text
- **And** clicking/hovering a tab switches the white panel below to
  that tab's form (React state — no jQuery)
- **And** each form shows the six stacked square inputs (From, To,
  Start, Return, Adults, Child — 13px/300, `#eee` borders) ending in a
  square yellow uppercase submit ("Search flights" / "Search Hotels" /
  "Search Holidays")

#### Scenario: Hero background is a full-bleed photo with overlay
- **Given** the hero renders
- **When** the background is painted
- **Then** a full-bleed coastal-style photo (placeholder:
  `https://picsum.photos/seed/tripquest-hero/1920/1080`) sits under an
  `rgba(4, 9, 30, 0.4)` navy overlay, covering the header height too

### Feature: Popular Destinations

A centered-title section with 3 photo cards whose yellow price badge
fades in on hover with a dark overlay.

#### Scenario: Section header matches the reference pattern
- **Given** the destinations section renders
- **When** the title block is visible
- **Then** the centered charcoal Poppins h1 reads "Popular Destinations"
- **And** a centered grey `#777777` subtext paragraph renders below
  (same kind of copy, paraphrased)

#### Scenario: Destination cards show photo, title, location, and hover price
- **Given** the destinations section renders
- **When** the cards are displayed
- **Then** there are 3 cards in a 3-up desktop grid, each with a
  photo (picsum seeded `tripquest-dest-<n>`), an h4 title, and a
  location line — reference content: Mountain River / Paraguay,
  Dream City / Paris, Cloud Mountain / Sri Lanka
- **And** on hover the photo darkens with the `rgba(4, 9, 30, 0.4)`
  overlay and a yellow `#f8b600` price badge (`$150` / `$250` /
  `$350`, charcoal 14px/600, square, `padding: 6px 30px`) fades in

### Feature: Affordable price packages

3 white package cards floating over a cover-image background, each a
list of destinations with price pills.

#### Scenario: Section header and background match the reference
- **Given** the price section renders
- **When** the section is visible
- **Then** the centered h1 reads "We Provide Affordable Prices" with a
  grey subtext paragraph
- **And** the section background is a full-bleed cover photo
  (picsum seeded `tripquest-price-bg`) like the reference's image band

#### Scenario: Package cards render destination/price lists
- **Given** the price section renders
- **When** the cards are displayed
- **Then** there are 3 white cards (`padding: 30px`) — Cheap Packages,
  Luxury Packages, Camping Packages
- **And** each card's h4 title is centered with a 1px `#f8b600`
  bottom rule
- **And** each card lists 6 rows (New York, Maldives, Sri Lanka,
  Nepal, Thailand [source misspells "Thiland" — fix it], Singapore),
  each row a destination label left and a light price pill right
  (`#f9f9ff` bg, `#eee` border, charcoal 14px/600, e.g. `$1500`)

### Feature: Other issues (services grid)

A centered-title 4-up grid of image + title + blurb service cards.

#### Scenario: Service cards render as in the reference
- **Given** the services section renders
- **When** the cards are displayed
- **Then** the centered h1 reads "Other issues we can help you with"
  with grey subtext
- **And** there are 4 cards (4-up desktop, 2-up tablet, 1-up mobile):
  image on top, h4 title, grey blurb — Rent a Car, Cruise Booking,
  To Do List, Food Features (paraphrased blurbs)
- **And** the card images zoom subtly (`scale` ~1.05, 0.3s ease) on
  hover inside an `overflow: hidden` thumb

### Feature: Testimonials

A light lavender band with white slider cards: avatar, quote, name,
star rating.

#### Scenario: Testimonial slider renders as in the reference
- **Given** the testimonial section renders
- **When** the slider is visible
- **Then** the section background is `#f9f9ff` and the centered h1
  reads "Testimonial from our Clients" with grey subtext
- **And** each card is white (`padding: 25px 30px 12px`) with a
  circular avatar (picsum seeded `tripquest-face-<n>`) left, quote
  text, name h4 (Harriet Maxwell, Carolyn Craig pattern), and a
  5-star row (filled stars per reference: 4, 3, 4, 3 …)
- **And** the cards flow as a slider/carousel (React state, arrows or
  autoplay acceptable) reflowing to 1-up on mobile

### Feature: Custom package CTA

A split full-width band: dark copy panel left with yellow CTA, photo
right.

#### Scenario: Split CTA renders as in the reference
- **Given** the CTA band renders
- **When** the section is visible
- **Then** the left half carries the stacked headline "Did not find
  your Package? / Feel free to ask us. / We'll make it for you" (same
  kind of copy, paraphrased ok), a grey blurb, and a square yellow
  uppercase "Request Custom Price" button
- **And** the right half is a full-bleed photo (picsum seeded
  `tripquest-cta`) with no padding (`no-padding` in the reference)
- **And** the layout stacks text-over-image on small viewports

### Feature: Blog carousel

A centered-title carousel of post cards: image, tag chips, title,
excerpt, date.

#### Scenario: Blog cards render as in the reference
- **Given** the blog section renders
- **When** the cards are displayed
- **Then** the centered h1 reads "Latest from Our Blog" with grey
  subtext
- **And** each card shows an image (picsum seeded
  `tripquest-blog-<n>`), tag chips ("Travel", "Life Style"), an h4
  title (Low Cost Advertising, Creative Outdoor Ads, It's Classified
  How To Utilize Free pattern), a grey excerpt, and a date line
  (e.g. "31st January, 2018")
- **And** the cards flow as a carousel (React state) reflowing to 1-up
  on mobile

### Feature: Footer

A very dark navy footer with four widgets and a bottom bar whose
copyright links Component Dock.

#### Scenario: Footer widgets render as in the reference
- **Given** the footer renders
- **When** the footer is visible
- **Then** the background is `#04091e` with white widget headings
  (About Agency, Navigation Links, Newsletter, InstaFeed)
- **And** About Agency holds a grey blurb; Navigation Links shows two
  columns of links (Home, Feature, Services, Portfolio / Team, Pricing,
  Blog, Contact); Newsletter shows a blurb plus an input with a square
  yellow submit button; InstaFeed shows a 4-image grid (picsum seeded
  `tripquest-insta-<n>`)
- **And** the bottom bar shows the copyright line left and social icons
  (Facebook, Twitter, Dribbble, Behance via lucide) right

#### Scenario: Copyright links Component Dock
- **Given** the footer renders
- **When** the bottom bar is visible
- **Then** the copyright text mentions the template was made with love
  and links `https://www.componentdock.com/` branded "Component Dock"
  — never ColorLib or the source slug
- **And** no app file contains `colorlib` / `preview.colorlib.com`
  strings (provenance lives only in this spec and TEMPLATES.md)

### Feature: Design tokens & typography

The recreation exposes the reference palette and Poppins typography as
Tailwind 4 `@theme` tokens.

#### Scenario: Theme tokens match the reference palette
- **Given** the app's `src/index.css` theme
- **When** the tokens are declared
- **Then** the palette includes: yellow `#f8b600` (primary CTA,
  hovers, badges), charcoal `#222222` (headings), body grey `#777777`,
  light lavender `#f9f9ff` (testimonial band, light pills), footer
  navy `#04091e`, overlay navy `rgba(4, 9, 30, 0.4)` (or equivalent
  token), scrolled header `rgba(34, 34, 34, 0.9)`, border grey `#eee`
- **And** Poppins 300–700 loads via Google Fonts `<link>` in
  `index.html` and is the font for headings and body
- **And** primary buttons are square (radius 0), uppercase, 14px/500
  — matching the reference's sharp `genric-btn` look

## Verification checklist

- [ ] Section order 1:1 with the preview DOM: top bar + navbar → hero +
      booking tabs → Popular Destinations → Affordable Prices → Other
      issues → Testimonials → custom-package CTA → Blog → footer
- [ ] Yellow `#f8b600` is the only CTA color; hover states match the
      reference (button yellow→charcoal in hero, yellow flip in
      genric-style buttons, nav links white→yellow)
- [ ] Hero booking widget tabs (Flights/Hotels/Holidays) switch
      between three forms via React state; inputs are square with
      `#eee` borders
- [ ] Destination card hover shows the `rgba(4,9,30,0.4)` overlay +
      yellow price badge fade-in
- [ ] Price cards: white, `padding: 30px`, h4 with 1px `#f8b600`
      bottom rule, 6 destination rows with light price pills
- [ ] Testimonial band is `#f9f9ff`; cards white with avatar left +
      stars
- [ ] Footer is `#04091e` with the 4 widgets + bottom bar; copyright
      links `https://www.componentdock.com/` ("Component Dock")
- [ ] Header is fixed; on scroll the top bar hides and the menu bar
      becomes `rgba(34, 34, 34, 0.9)`
- [ ] All images are `picsum.photos/seed/tripquest-*` placeholders;
      icons from `lucide-react`; no copied assets or CSS
- [ ] Zero `colorlib` references anywhere in `apps/tripquest`
- [ ] App folder `apps/tripquest`, package
      `@free-react-templates/tripquest`, `homepage`
      `https://tripquest.free.componentdock.com`, `public/CNAME`
      `tripquest.free.componentdock.com`, lockfile registers the
      workspace
- [ ] `vite.config.ts` keeps `injectUiSource()`; tests at 100%
      coverage; `scripts/verify-app.sh tripquest` passes
