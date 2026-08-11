# Template: Shiply (Logistics / Transportation Template)

## Purpose

Shiply is a logistics-and-transport landing page template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Logistics" template design (see TEMPLATES.md — appears 3×:
lines 442, 1083, 2965; all three rows point to the same source, one prep
covers all; verified with `grep -c 'wp/template/logistics/'` = 3), built
under a DIFFERENT name (Shiply — "ship" (freight) + -ly, matching the
project's naming pattern: Stayly, Roadly, Ridely) per the monorepo naming
mandate (never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/logistics/ (Bootstrap / Business /
Transportation categories; title "Logistics — Colorlib Website Template").
Preview URL: https://preview.colorlib.com/theme/logistics/ — the TEMPLATES.md
slug `logistics` matches the live preview slug (verified HTTP 200).

## Design reference (replication findings)

- **Original:** ColorLib "Logistics". An orange-and-charcoal freight company
  one-pager: an absolute transparent navbar over the hero (white "Logistics"
  wordmark left, uppercase 14px menu right — Home active, About Us, Services
  with a dropdown, Industries, Blog, Contact); a full-viewport hero over a
  cargo-ship photo with a `rgba(0,0,0,0.4)` overlay (centered uppercase
  4rem white "Worldwide Freight Services" + a square orange "Get Started!"
  button); a 3-column strip that OVERLAPS the hero bottom by -100px (left
  orange `#f89d13` "Best Prices" card with a circular white-bordered icon,
  middle dark `#343a40` "Get Free Quote" mini-form, right darker orange
  `#e18a07` "24/7 Support" card); a white "What We Offer" section (3
  icon-left rows: Air Freight / Ocean Freight / Ground Shipping); an image
  services carousel (5 slides: Storage, Air Transports, Cargo Transports,
  Cargo Ship, Ware Housing — photo + bottom gradient + hover-reveal caption);
  a light-grey "More Services" section (6 icon rows: Air Air Freight, Ocean
  Freight, Ground Shipping, Warehousing, Storage, Delivery Van); a
  parallax-fixed photo CTA band (90px circular play button that grows on
  hover + "View Our Services By Watching This Short Video"); a "Testimonials"
  carousel (4 slides: circular avatar + name + italic quote); an "Our Blog"
  section (2 horizontal post cards with meta line); a centered "Try Our
  Services" CTA; and a `#333333` footer (3 link widgets + Follow Us social
  icons + Subscribe Newsletter input/button + copyright bar).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/logistics/
  (HTTP 200, ~23.3 KB HTML fetched; `css/style.css` ~23.6 KB parsed for
  tokens; computed styles verified live in the browser: `.free-quote` renders
  `#343a40` because Bootstrap's `.bg-dark` utility uses `!important` and
  overrides the template's `.free-quote { background: #eb9007 }`; `.bg-light`
  similarly renders `#f8f9fa` not the template's `#ccc`). The page imports
  bootstrap.min, aos, owl.carousel, magnific-popup, jquery-ui,
  bootstrap-datepicker, flaticon, icomoon — site is jQuery + Bootstrap 4 +
  owl-carousel + AOS + stellar + magnific-popup, NOT Tailwind. Hero and video
  band backgrounds are inline `style="background-image: url(images/...)"` —
  recreate as CSS background images.
- **Screenshot note:** `logistics-free-template.jpg` (1200×946) MATCHES the
  live template: cargo ship (MSC containers) hero photo with dark overlay,
  "WORLDWIDE FREIGHT SERVICES" + orange "GET STARTED!"; below, the 3-column
  overlap strip (orange / dark grey form / orange); white body. The live
  preview DOM + parsed stylesheet are the authoritative reference; the
  screenshot confirms the same design.

### Section structure (from the live DOM, top to bottom)

1. `div.site-wrap` wrapper (offcanvas state toggles the mobile menu).
2. `div.site-mobile-menu` (off-canvas right panel, width 300px, bg `#fff`,
   translateX(110%) closed → 0 open, shadow `-10px 0 20px -10px
rgba(0,0,0,0.1)`, z-index 2000): header with a close control (icon-close2
   → lucide X, 30px); body with the same nav links — `a` 20px `#212529`,
   hover/active `#f89d13`; sub-links 16px padding-left 40px.
3. `header.site-navbar.py-3` (position absolute, width 100%, z-index 1999,
   transparent over the hero) > `div.container` > row:
   - `div.col-11.col-xl-2`: `h1.mb-0 > a.text-white.h2.mb-0` — brand
     "Logistics" (→ "Shiply"), white h2.
   - `div.col-12.col-md-10.d-none.d-xl-block` > `nav.site-navigation` >
     `ul.site-menu`: Home (`li.active`), About Us, Services (`li.has-children`
     with dropdown), Industries, Blog, Contact — `a` 14px uppercase,
     letter-spacing .1em, color #fff; hover + active `#f89d13`.
     - `ul.dropdown` (Services): bg `#fff`, border-top 2px solid `#f89d13`,
       links `#343a40` 16px, hover bg `#f4f5f9` + color `#25262a`, active
       `#f89d13` — items: Air Freight, Ocean Freight, Ground Shipping,
       Warehousing, Storage.
   - Mobile trigger: `a.site-menu-toggle` (hamburger icon, white) visible
     below xl — opens the off-canvas menu (client-side state).
4. `div.site-blocks-cover.overlay` (inline bg `images/hero_bg_1.jpg`, cover,
   center; `::before` overlay rgba(0,0,0,0.4); min-height 600px /
   calc(100vh)) > container > centered `div.col-md-8` (fade-up on load):
   - `h1.text-white.font-weight-light.mb-5.text-uppercase.font-weight-bold`
     "Worldwide Freight Services" — 4rem/900 white (2rem ≤ 991.98px),
     uppercase, margin-bottom 40px.
   - `p > a.btn.btn-primary.py-3.px-5.text-white` "Get Started!" — square
     (radius 0), uppercase, letter-spacing .2em, bg `#f89d13`; hover in
     cover context: transparent bg + 2px white border + white text.
5. `div.container > div.row.align-items-center.no-gutters.align-items-stretch.overlap-section`
   (margin-top -100px, z-index 9; the strip overlapping the hero bottom):
   - `div.col-md-4` > `div.feature-1.pricing.h-100.text-center` — bg `#f89d13`,
     padding 30px 50px, color rgba(255,255,255,0.6), font-size 15px:
     `div.icon` (80×80px circle, 2px solid rgba(255,255,255,0.5) border,
     centered) with `span.icon-dollar` (35px white → lucide BadgeDollarSign /
     DollarSign); `h2.heading.my-4` "Best Prices" — 22px uppercase white;
     `p` blurb (paraphrase).
   - `div.col-md-4` > `div.free-quote.bg-dark.h-100` — bg `#343a40`
     (Bootstrap bg-dark, verified computed), padding 30px 50px:
     `h2.heading.my-4.text-center` "Get Free Quote" (22px uppercase white);
     `form` (method post → client-side): `div.form-group` — `label` "Name" +
     `input.form-control` (height 43px, radius 0, transparent bg, 2px solid
     rgba(255,255,255,0.5) border, white text, italic 13px
     rgba(255,255,255,0.4) placeholder "Enter Name"; focus → 2px solid #fff);
     same for "Email" / "Enter Email"; submit `button.btn.btn-primary.py-2.px-4.btn-block`
     "Get Quote" (square orange). Submit → success state.
   - `div.col-md-4` > `div.feature-3.pricing.h-100.text-center` — bg
     `#e18a07`, same card shape: circular `span.icon-phone` (→ lucide Phone),
     `h2.heading.my-4` "24/7 Support", `p` blurb.
6. `div.site-section` (padding 2.5em 0 → 5em/80px desktop; white):
   - centered `div.col-md-7.text-center.border-primary` (mb 5rem): `h2.mb-0.text-primary`
     "What We Offer" — uppercase, weight 700, color `#f89d13`, with the
     `.border-primary:after` 80×3px `#f89d13` underline bar centered 3px
     below; `p.color-black-opacity-5` sub-line ("Lorem ipsum dolor sit amet."
     → paraphrase).
   - `div.row.align-items-stretch`: 3 × `div.col-md-6.col-lg-4.mb-4.mb-lg-0`
     > `div.unit-4.d-flex`: `div.unit-4-icon.mr-4` (span 3rem/48px,
     > `text-primary` `#f89d13`; flaticon-travel / flaticon-sea-ship-with-
     > containers / flaticon-frontal-truck → lucide Plane, Ship, Truck);
     > `h3` 20px (Air Freight / Ocean Freight / Ground Shipping); `p` blurb;
     > `p.mb-0 > a` "Learn More" (→ `#f89d13`, hover underline).
7. `div.site-section.block-13` (position relative, z-index 1) — image
   services carousel (owl-carousel `nonloop-block-13` → client-side state):
   5 × `a.unit-1.text-center` slides:
   - `img` (img_1..5.jpg → picsum seeds; object-fit cover, scale 1 →
     1.05 on hover).
   - `div.unit-1-text` (absolute, bottom -90px → 30px on hover, width 100%,
     color #fff): `h3.unit-1-heading` 1.5rem — Storage / Air Transports /
     Cargo Transports / Cargo Ship / Ware Housing; `p.px-5` (opacity 0 →
     1 on hover, rgba(255,255,255,0.5)).
   - `.unit-1:after` gradient overlay: transparent 0–18% → rgba(0,0,0,0.8)
     99–100% bottom.
   - Carousel controls: prev/next arrows centered below the carousel
     (bottom -90px, padding 20px, font-size 30px, color #000; disabled →
     opacity .2). Recreate as client-side carousel (index state + arrows).
8. `div.site-section.bg-light` (bg `#f8f9fa` — Bootstrap bg-light wins via
   !important, verified computed):
   - centered `div.col-md-7.text-center.border-primary` (mb 5rem): `h2.font-weight-light.text-primary`
     "More Services" + underline bar; `p.color-black-opacity-5` "We Offer
     The Following Services".
   - `div.row.align-items-stretch`: 6 × `div.col-md-6.col-lg-4.mb-4.mb-lg-4`
     > `div.unit-4.d-flex` — icons: flaticon-travel (→ Plane), sea-ship
     > (→ Ship), frontal-truck (→ Truck), flaticon-barn (→ Warehouse),
     > flaticon-platform (→ Boxes/Container), flaticon-car (→ Car); h3 20px —
     > "Air Air Freight" (source typo → "Air Freight" in recreation, flag in
     > PR), Ocean Freight, Ground Shipping, Warehousing, Storage, Delivery
     > Van; p blurb; "Learn More" link.
9. `div.site-blocks-cover.overlay.inner-page-cover` (inline bg
   `images/hero_bg_2.jpg`, `background-attachment: fixed` parallax; height
   calc(30vh), min-height 600px; dark overlay) > centered `div.col-md-7`:
   - `a.play-single-big.mb-4.d-inline-block` — 90×90px circle, 2px solid
     #fff border, `span.icon-play` 50px white (→ lucide Play), hover grows
     to 120×120px. Source links to a Vimeo popup
     (https://vimeo.com/channels/staffpicks/93951774) via
     magnific-popup → recreate as a client-side modal (or plain link;
     no vimeo embed needed).
   - `h2.text-white.font-weight-light.mb-5.h1` "View Our Services By
     Watching This Short Video" — 4rem/300 white, mb 40px.
10. `div.site-section.border-bottom` (border-bottom 1px solid `#edf0f5`):
    - centered `div.col-md-7.text-center.border-primary`: `h2.font-weight-light.text-primary`
      "Testimonials" + underline bar.
    - `div.slide-one-item.home-slider.owl-carousel` → client-side carousel
      (4 slides): each `div.testimonial` (max-width 800px, margin 0 auto,
      text-align center): `figure.mb-4` — `img` (person_3/2/4/5.jpg →
      picsum portrait seeds; max-width 100px, border-radius 50%, margin 0
      auto) + `p` name (John Smith / Christine Aguilar / Robert Spears /
      Bruce Rogers); `blockquote` italic 1rem quote (paraphrase).
    - Controls: prev/next 50×50px circles, bg rgba(0,0,0,0.2), white 25px,
      hover bg #000, positioned at 50% left/right of the slider.
11. `div.site-section` — Blog:
    - centered `div.col-md-7.text-center.border-primary`: `h2.font-weight-light.text-primary`
      "Our Blog" + underline bar; `p.color-black-opacity-5` "See Our Daily
      News & Updates".
    - `div.row.mb-3.align-items-stretch`: 2 × `div.col-md-6.col-lg-6.mb-4`
      > `div.h-entry`: `img` (blog_1/2.jpg → picsum seeds, margin-bottom
      > 30px); `h2.font-size-regular` 20px > `a` "Warehousing Your Packages";
      > `div.meta.mb-4` — "by Theresa Winston • Jan 18, 2019 at 2:00 pm •
      > News" (#b3b3b3 14px; bullet separators); `p` excerpt (paraphrase).
12. `div.site-section.border-top` (border-top 1px solid `#edf0f5`):
    centered `div.col-md-12`: `h2.mb-5.text-black` "Try Our Services"
    (weight 300 per h2 base, black); `p.mb-0 > a.btn.btn-primary.py-3.px-5.text-white`
    "Get Started" (→ link to booking page in source; recreate as anchor/#).
13. `footer.site-footer` (bg `#333333`, padding 4em 0 → 8em desktop) >
    `div.container`:
    - `div.col-md-9` > row: 3 × `div.col-md-3` > `div` with `h2.footer-heading.mb-4`
      (16px #fff) + `ul.list-unstyled` (li mb 10px, `a` #999999 → white on
      hover):
      - "Quick Links" — About Us, Services, Testimonials, Contact Us.
      - "Products" — About Us, Services, Testimonials, Contact Us (SOURCE
        DUPLICATES Quick Links; either keep the duplicate per source or
        paraphrase distinct link sets, note in PR).
      - "Features" — About Us, Services, Testimonials, Contact Us (same
        duplication note).
    - `div.col-md-3` > "Follow Us": 4 social `a` (icon-facebook /
      icon-twitter / icon-instagram / icon-linkedin → lucide has NO brand
      icons: use inline SVG simple-icons paths), `a` #999999 hover white.
    - `div.col-md-3` > `h2.footer-heading.mb-4` "Subscribe Newsletter" +
      `form` > `div.input-group.mb-3`: `input.form-control.border-secondary.text-white.bg-transparent`
      (placeholder "Enter Email", radius 0) + `div.input-group-append` >
      `button.btn.btn-primary.text-white` "Send" (square orange). Submit →
      success state.
    - `div.row.pt-5.mt-5.text-center` > `div.col-md-12` > `div.border-top.pt-5`
      (border-top rgba(255,255,255,0.1)): `p` — source: "Copyright © <year>
      All rights reserved | This template is made with ❤ by Colorlib" →
      recreate as "© 2026 Shiply — All rights reserved" with a lucide Heart
      (#f89d13); footer `p` #737373, `a` #999999.

### Content (for copy paraphrase)

- Header: brand "SHIPLY" (white); Home (active), About Us, Services
  (dropdown: Air Freight, Ocean Freight, Ground Shipping, Warehousing,
  Storage), Industries, Blog, Contact.
- Hero: "Worldwide Freight Services" + "Get Started!".
- Overlap strip: "Best Prices" / "Get Free Quote" (Name, Email, "Get Quote")
  / "24/7 Support".
- What We Offer: Air Freight / Ocean Freight / Ground Shipping + Learn More.
- Services carousel: Storage, Air Transports, Cargo Transports, Cargo Ship,
  Ware Housing.
- More Services: Air Freight, Ocean Freight, Ground Shipping, Warehousing,
  Storage, Delivery Van.
- Video band: "View Our Services By Watching This Short Video" + play button.
- Testimonials: ×4 — quote + John Smith / Christine Aguilar / Robert Spears /
  Bruce Rogers.
- Blog: "Our Blog" / "See Our Daily News & Updates"; 2 posts "Warehousing
  Your Packages" — by Theresa Winston, Jan 18, 2019 at 2:00 pm, News.
- CTA: "Try Our Services" + "Get Started".
- Footer: Quick Links / Products / Features (About Us, Services,
  Testimonials, Contact Us each); Follow Us (4 socials); "Subscribe
  Newsletter" + Send; copyright.

## Design tokens

| Token          | Value                         | Usage                                                                                                                                                                                                                                  |
| -------------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| brand-orange   | `#f89d13`                     | primary buttons, section-heading text + 80×3px underline bar, unit-4 icons, nav hover/active, mobile menu hover/active, Learn More links, form focus border, dropdown border-top + active                                              |
| orange-dark    | `#e18a07`                     | feature-3 ("24/7 Support") card bg                                                                                                                                                                                                     |
| quote-dark     | `#343a40`                     | free-quote card bg (Bootstrap bg-dark)                                                                                                                                                                                                 |
| ink            | `#212529`                     | mobile menu links, body headings default                                                                                                                                                                                               |
| body-grey      | `#4d4d4d`                     | base body text                                                                                                                                                                                                                         |
| muted          | `#b3b3b3`                     | blog meta, footer links                                                                                                                                                                                                                |
| footer-grey    | `#999999`                     | footer links (hover → #fff)                                                                                                                                                                                                            |
| footer-text    | `#737373`                     | footer p / copyright text                                                                                                                                                                                                              |
| footer-bg      | `#333333`                     | footer background                                                                                                                                                                                                                      |
| light          | `#f8f9fa`                     | "More Services" section bg (Bootstrap bg-light)                                                                                                                                                                                        |
| white-40       | rgba(255,255,255,0.4)         | cover overlay on hero + video band                                                                                                                                                                                                     |
| unit-grad      | transparent → rgba(0,0,0,0.8) | unit-1 carousel image bottom gradient (0–18% transparent, 99–100% black 0.8)                                                                                                                                                           |
| border-light   | `#edf0f5`                     | section border-top/bottom dividers                                                                                                                                                                                                     |
| dropdown-hover | `#f4f5f9` / `#25262a`         | Services dropdown item hover bg / text                                                                                                                                                                                                 |
| font           | "Poppins"                     | everything (Google Fonts 200/300/400/700/900): brand h2, nav 14px uppercase ls .1em, hero h1 4rem/900, section h2 uppercase 700, card h3 20px, feature headings 22px uppercase, buttons 14–16px uppercase ls .2em, footer-heading 16px |

Radii: buttons and inputs are SQUARE (radius 0 — Get Started, Get Quote,
Send). Circles: feature-1/3 icon 80px (2px white-50% border), play button
90px (grows to 120px on hover), testimonial avatar max 100px (50%),
testimonial nav arrows 50px. Spacing: `.site-section` padding 2.5em 0 →
5em/80px desktop; navbar py-3; overlap-section margin-top -100px (z-index 9);
feature cards padding 30px 50px, heading mb 1.5rem (my-4); hero h1 mb 40px
(mb-5) + button py-3 px-5; unit-4 icon mr-4 (1rem) + 3rem icon; unit-1-text
bottom -90px → 30px hover, p px-5; block-13 nav bottom -90px; h-entry img
mb 30px, meta mb 4 (1.5rem) 14px; video band h2 mb-5; footer padding 4em 0 →
8em desktop, widget h2 mb-4 (1.5rem), widget li mb 10px, newsletter
input-group mb-3, copyright row pt-5 mt-5 + border-top pt-5; container
max-width 1140px (Bootstrap).

## Requirements

### Requirement: Header / Navigation

The system SHALL render a transparent absolute navbar over the hero with a
white brand, six uppercase nav links (Home active), a Services dropdown, and
an off-canvas mobile menu.

#### Scenario: Brand and nav links

- **GIVEN** the Shiply app is rendered
- **WHEN** the page loads
- **THEN** the header SHALL sit absolutely over the hero (transparent
  background)
- **AND** the brand SHALL read "Shiply" in white h2 at the left
- **AND** the nav SHALL list Home (active), About Us, Services, Industries,
  Blog, Contact in 14px uppercase white with letter-spacing .1em
- **AND** links SHALL turn brand orange on hover; the active link SHALL be
  brand orange

#### Scenario: Services dropdown

- **GIVEN** the header is rendered
- **WHEN** the Services item is hovered or focused
- **THEN** a white dropdown SHALL open with a 2px brand-orange top border
- **AND** it SHALL list Air Freight, Ocean Freight, Ground Shipping,
  Warehousing, Storage (dark grey links, brand-orange active)

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrow (below the xl breakpoint)
- **WHEN** the hamburger trigger is activated
- **THEN** a white off-canvas panel (300px, right side) SHALL slide in with
  the same nav links (20px, dark ink, brand-orange hover)
- **AND** activating the close control SHALL slide it out

### Requirement: Hero

The system SHALL render a full-viewport hero over a freight photo with a
dark overlay, an uppercase headline, and a primary CTA.

#### Scenario: Hero content

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL show a cover photo background with a
  rgba(0,0,0,0.4) overlay (min-height 100vh)
- **AND** the white uppercase heading SHALL read "Worldwide Freight
  Services" (4rem, weight 900, 2rem on small screens)
- **AND** a square orange "Get Started!" button SHALL render below it
  (uppercase, letter-spacing .2em, py-3 px-5)
- **AND** hovering the button SHALL switch it to transparent with a 2px
  white border and white text

### Requirement: Overlap strip

The system SHALL render the 3-column strip overlapping the hero bottom edge
with two orange feature cards and a dark quote form.

#### Scenario: Feature cards

- **GIVEN** the overlap strip is rendered
- **WHEN** the page loads
- **THEN** the strip SHALL overlap the hero by -100px (z-index above the
  hero)
- **AND** the left card SHALL have a `#f89d13` background with a circular
  80px icon (white border) and the uppercase white heading "Best Prices"
- **AND** the right card SHALL have a `#e18a07` background with a phone icon
  and the heading "24/7 Support"

#### Scenario: Free quote form

- **GIVEN** the overlap strip is rendered
- **WHEN** the page loads
- **THEN** the middle card SHALL have a `#343a40` background and the heading
  "Get Free Quote"
- **AND** it SHALL contain Name and Email inputs (square, transparent with a
  2px white-50% border, italic placeholders "Enter Name"/"Enter Email")
- **AND** a square orange "Get Quote" button SHALL submit the form with a
  client-side success state

### Requirement: What We Offer

The system SHALL render the "What We Offer" section with three
icon-and-text service rows.

#### Scenario: Section title

- **GIVEN** the What We Offer section is rendered
- **WHEN** the page loads
- **THEN** the uppercase brand-orange heading SHALL read "What We Offer"
  with a centered 80×3px brand-orange underline bar
- **AND** a muted sub-line SHALL render below it

#### Scenario: Service rows

- **GIVEN** the What We Offer section is rendered
- **WHEN** the page loads
- **THEN** three rows SHALL render (icon left, text right) for Air Freight,
  Ocean Freight, and Ground Shipping
- **AND** each row SHALL show a brand-orange 3rem icon (plane / ship /
  truck), a 20px title, a blurb, and a brand-orange "Learn More" link

### Requirement: Services carousel

The system SHALL render the image services carousel with five slides and
prev/next controls.

#### Scenario: Slides

- **GIVEN** the services carousel is rendered
- **WHEN** the page loads
- **THEN** five slides SHALL render, each a photo with a bottom gradient
  (transparent → rgba(0,0,0,0.8)) and a white title — Storage, Air
  Transports, Cargo Transports, Cargo Ship, Ware Housing
- **AND** the caption SHALL sit at the bottom of the image (revealed
  further + blurb shown + photo zoom on hover)

#### Scenario: Controls

- **GIVEN** the services carousel is rendered
- **WHEN** the next/prev arrows (centered below the carousel) are clicked
- **THEN** the visible slide SHALL advance/rewind client-side

### Requirement: More Services

The system SHALL render the light-grey "More Services" section with six
service rows.

#### Scenario: Service rows

- **GIVEN** the More Services section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL sit on a `#f8f9fa` background with the
  uppercase brand-orange heading "More Services" and the sub-line "We Offer
  The Following Services"
- **AND** six rows SHALL render: Air Freight, Ocean Freight, Ground
  Shipping, Warehousing, Storage, Delivery Van — each with a brand-orange
  icon, 20px title, blurb, and "Learn More" link

### Requirement: Video band

The system SHALL render the parallax video CTA band with a circular play
button and a call-to-action heading.

#### Scenario: Video CTA

- **GIVEN** the video band is rendered
- **WHEN** the page loads
- **THEN** the band SHALL show a fixed-attachment cover photo with a dark
  overlay (min-height 600px, 30vh height)
- **AND** a 90px circular play button with a 2px white border SHALL render
  (growing to 120px on hover)
- **AND** the white heading SHALL read "View Our Services By Watching This
  Short Video"

### Requirement: Testimonials

The system SHALL render a testimonial carousel with four slides.

#### Scenario: Carousel slides

- **GIVEN** the testimonial section is rendered
- **WHEN** the page loads
- **THEN** the carousel SHALL cycle through four centered slides, each with
  a circular avatar (max 100px), the person's name, and an italic quote
  (John Smith, Christine Aguilar, Robert Spears, Bruce Rogers)
- **AND** prev/next circular controls (50px, dark-20% bg) SHALL navigate
  between slides at the slider's left/right edges

### Requirement: Blog

The system SHALL render the "Our Blog" section with two post cards.

#### Scenario: Post cards

- **GIVEN** the blog section is rendered
- **WHEN** the page loads
- **THEN** the uppercase brand-orange heading SHALL read "Our Blog" with
  the sub-line "See Our Daily News & Updates"
- **AND** two post cards SHALL render, each with a photo, a 20px title
  ("Warehousing Your Packages"), a muted meta line ("by Theresa Winston •
  Jan 18, 2019 at 2:00 pm • News"), and an excerpt

### Requirement: CTA strip

The system SHALL render the centered "Try Our Services" call-to-action.

#### Scenario: CTA

- **GIVEN** the CTA strip is rendered
- **WHEN** the page loads
- **THEN** the black heading SHALL read "Try Our Services" (bordered above
  by a `#edf0f5` divider)
- **AND** a square orange "Get Started" button SHALL render below it

### Requirement: Footer

The system SHALL render the dark footer with three link widgets, social
icons, a newsletter form, and a copyright bar.

#### Scenario: Widgets and socials

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL have a `#333333` background with three link
  widgets — Quick Links, Products, Features — each listing About Us,
  Services, Testimonials, Contact Us (source duplicates; may paraphrase)
- **AND** a Follow Us widget SHALL render four social icons
- **AND** links SHALL be `#999999`, turning white on hover

#### Scenario: Newsletter form

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** a "Subscribe Newsletter" input with an orange square "Send"
  button SHALL render (transparent input, white text)
- **AND** submitting SHALL show a success state

#### Scenario: Copyright bar

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** a top-bordered copyright row SHALL read "© 2026 Shiply — All
  rights reserved" with a heart accent

## Verification checklist

- [ ] Spec validates: `npm run spec:validate`
- [ ] TDD: tests written before implementation; `npm run test:coverage` at
      100% lines/functions/branches/statements (per-app gate via
      `scripts/verify-app.sh shiply`)
- [ ] Design tokens from this spec applied in `@theme` (brand-orange
      `#f89d13`, orange-dark `#e18a07`, quote-dark `#343a40`, ink
      `#212529`, body-grey `#4d4d4d`, muted `#b3b3b3`, footer-grey
      `#999999`, footer-text `#737373`, footer-bg `#333333`, light
      `#f8f9fa`, border-light `#edf0f5`, dropdown-hover `#f4f5f9`/`#25262a`)
- [ ] Poppins loaded via Google Fonts `<link>` in index.html (200/300/400/
      700/900)
- [ ] Section structure + order matches the live DOM 1:1 (navbar → hero →
      overlap strip → What We Offer → services carousel → More Services →
      video band → testimonials → blog → CTA → footer)
- [ ] Overlap strip uses negative margin (-100px) + z-index to overlap the
      hero bottom; middle card stays `#343a40` (bg-dark), NOT the CSS-file
      `.free-quote` `#eb9007` — verified computed in the live preview
- [ ] Placeholder images via `https://picsum.photos/seed/shiply-<n>/<w>/<h>`
      (hero bg, 5 carousel photos, 4 avatars, 2 blog images, video band
      bg); NO assets copied from ColorLib
- [ ] Icons from lucide-react (Plane, Ship, Truck, Warehouse, Boxes, Car,
      Phone, BadgeDollarSign, Play, X, Menu, Heart) — social icons as
      inline SVG (lucide has no brand icons)
- [ ] Interactivity client-side only: services + testimonial carousels,
      Services dropdown, mobile off-canvas menu, quote/newsletter forms →
      success state (no owl-carousel/aos/stellar/magnific-popup/jquery)
- [ ] Deploy check: merged PR → Deploy to Surge.sh workflow green + surge
      URL returns 200
