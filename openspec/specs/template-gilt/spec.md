# Template: Gilt (Hotel / Resort Landing)

## Purpose

Gilt is a hotel/resort landing page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Royal"
("Royal Hotel") free template (source:
https://colorlib.com/wp/template/royal/), built under a DIFFERENT name
(**Gilt** — an archaic word for gold/gilded, capturing the template's
signature GOLD `#f3c300` accent: gold primary buttons, gold facility
icons, gold star ratings, gold hover sweeps; per the monorepo naming
mandate — never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a **single-page hotel/resort landing**: a full-height
**banner hero** (800px, dark `#04091e` base + tropical-resort photo at
50% opacity with a subtle parallax, centered white copy "Away from
monotonous life" / "Relax Your Mind" and a gold **Get Started** button)
with a **dark booking bar overlaid on the hero's bottom edge** ("Book
Your Room" + Arrival/Departure date fields, Adult/Child/Number-of-Rooms
selects, gold **Book Now** button); then a **white "Hotel Accomodation"
section** (four room cards — photo with an overlaid gold Book Now button,
room name, SKY-BLUE `#52c5fd` price); a **dark "Royal Facilities"
section** (`#04091e` + dimmed night-pool photo at 15% opacity, six
translucent glassmorphism cards with gold Linearicons); a **white "About
Us / Our History / Mission & Vision" split** (copy + black **Request
Custom Price** button left, photo right); a **light `#f9f9ff" Testimonial
carousel** (white cards, 4.5 gold stars, owl-carousel with dots); a
**white "latest posts from blog"** row (three cards with tag chips, title,
excerpt, date); and a **dark footer** (`#04091e`, 142px padding, four
columns: About Agency / Navigation Links / Newsletter + InstaFeed, plus a
copyright bar with social icons). Section padding rhythm: `section_gap`
= 120px top/bottom; section titles 36px/45px weight 600; buttons are
SHARP-cornered (radius 0), uppercase, with the signature **sliding sweep
hover** (`:before`translates from -100% to 0 — a solid fill wipes across
the button); the primary gold is`#f3c300`(hover sweep`#f8b100`),
titles `#222222`, body `#777777`14px/24px weight 300, Poppins
300–700 via Google Fonts. Gilt recreates the structure section-for-section
with matching layout, tokens, typography, and content kinds (no ColorLib
assets copied; Linearicons/FontAwesome replaced by`lucide-react`
equivalents; photos by picsum placeholders).

> NAMING NOTE: the ColorLib source name "Royal" is FORBIDDEN as the app
> name. **Gilt** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are
> recorded below.

> PREVIEW URL: `https://preview.colorlib.com/theme/royal/` is REACHABLE
> (HTTP 200, `<title>Royal Hotel</title>`, 32KB HTML) — no nested-path
> quirk this time.

## Design reference (replication findings)

- **Original:** ColorLib "Royal" (Royal Hotel). Listed in TEMPLATES.md
  at **line 491** under the R section AND duplicated at **line 1926**
  (identical row, same `wp/template/royal/` URL — the slug appears
  exactly TWICE; when the template ships, BOTH rows must be marked
  `[x]` + the same surge URL).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** HTTP 200,
  32KB HTML, `<title>Royal Hotel</title>`. Stylesheets: `css/style.css`
  (61KB — the theme; token source), `css/bootstrap.css` (Bootstrap 4
  base), `vendors/linericon/style.css` (Linearicons glyph font),
  `css/font-awesome.min.css` (stars/calendar/social glyphs),
  `vendors/owl-carousel/owl.carousel.min.css` (testimonial slider),
  `vendors/bootstrap-datepicker/bootstrap-datetimepicker.min.css`,
  `vendors/nice-select/css/nice-select.css` (custom selects).
  JS: jquery-3.2.1, popper, bootstrap, owl-carousel, nice-select,
  bootstrap-datepicker, stellar (parallax), jquery.ajaxchimp +
  mail-script (newsletter). Structure, copy, and tokens below are from
  the live DOM + `css/style.css` + the TEMPLATES.md screenshot
  (2026-08-14).
- **Screenshot (TEMPLATES.md `royal-free-template.jpg`, 1200×946) —
  viewed 2026-08-14:** crop shows white header (gold crown logo +
  "ROYAL HOTEL" black uppercase; small uppercase grey menu HOME / ABOUT
  US / ACCOMODATION / GALLERY / BLOG / ELEMENTS / CONTACT), full-width
  tropical-resort hero (palm trees, pool, lounge chairs, ocean view;
  dark gradient overlay; white "Relax Your Mind" + gold GET STARTED),
  dark navy booking bar overlaid on the hero bottom (BOOK YOUR ROOM
  left; date/Adult/Child fields + gold BOOK NOW right), then the top of
  the white "Hotel Accomodation" section (36px dark heading + light-grey
  sub). The crop cuts off at the rooms; the LIVE page is authoritative
  for the rest. CONSISTENT with the live DOM on everything both show.
- **Visual design (live DOM + computed styles):** high-contrast
  gold-on-dark + white layout. GOLD `#f3c300` = the single accent
  (primary buttons, facility icons, star ratings, footer-link hover,
  tag-chip sweep); DARK `#04091e` = hero base, booking bar, facilities
  band, footer; near-black `#222222` = titles + the secondary black
  button; SKY BLUE `#52c5fd` = prices, active nav link, blog-title
  hover; body `#777777`; light band `#f9f9ff` = testimonial section.
  Poppins everywhere; sharp (radius-0) uppercase buttons with a sliding
  sweep hover; rounded (10px) photo cards; glassmorphism facility cards.
- **Section order (1:1 from live DOM):**
  1. **Header / navbar** — `header.header_area` ABSOLUTE at top
     (z-index 20, full width); `nav.navbar` white bg, padding 0 25px;
     left logo image (gold crown + wordmark — recreate as lucide
     `Crown` + the NEW name); right menu (`menu_nav ml-auto`): **Home**
     (active), **About us**, **Accomodation** (single-m typo, keep),
     **Gallery**, **Blog** (dropdown → **Blog Details**), **Elemests**
     (source typo, keep), **Contact**. Links 12px/80px weight 500,
     uppercase, `#222222`; active `#52c5fd`. Mobile: hamburger
     (3 × `icon-bar` spans).
  2. **Banner hero** — `section.banner_area` bg `#04091e` (z-index 1);
     `div.booking_table` (min-height 800px, relative, overflow hidden,
     flex align-items-center) > `div.overlay.bg-parallax`
     (banner_bg.jpg cover, opacity 0.5, stellar parallax) >
     `div.container` > `div.banner_content.text-center` (white, mb 94px,
     mt 106px): `h6` "Away from monotonous life" (14px/30px, uppercase,
     letter-spacing 1.4px, weight 400), `h2` "Relax Your Mind"
     (60px/60px, weight 700), `p` (14px/24px weight 300, lorem — "If you
     are looking at blank cassettes on the web…"), `a.btn.theme_btn`
     **Get Started** (gold, white text).
  3. **Booking bar** — `div.hotel_booking_area.position` (absolute,
     bottom 0, full width) > `div.hotel_booking_table` (bg `#04091e`,
     flex align-items-center, padding 40px 50px 30px): `col-md-3` `h2`
     **"Book<br>Your Room"** (24px/30px, uppercase, white) +
     `col-md-9` `div.boking_table` (margin-left -50px) > row of 3 ×
     `col-md-4` `book_tabel_item`:
     a. **Arrival Date** + **Departure Date** text inputs (calendar
     glyph `fa-calendar` absolute right 20px, `#777777`),
     b. **Adult** + **Child** selects (nice-select custom dropdowns),
     c. **Number of Rooms** select + `a.book_now_btn` **Book Now**
     (full-width gold, `#222222` text).
  4. **Accomodation** — `section.accomodation_area.section_gap` (white):
     `div.section_title.text-center` (mb 75px): `h2.title_color`
     **"Hotel Accomodation"** (36px/45px, weight 600, `#222222`;
     single-m typo KEEP) + `p` (14px/30px `#777777`, "We all live in an
     age that belongs to the young at heart…"). `div.row.mb_30` of 4 ×
     `col-lg-3.col-sm-6` `div.accomodation_item.text-center` (mb 30px):
     `div.hotel_img` (relative, mb 10px, overflow hidden,
     border-radius 10px; img 0.4s linear; hover scale(1.19)) with
     `a.btn.theme_btn` **Book Now** ABSOLUTE bottom 20px, centered,
     max-width 128px, padding 5px 25px; then `a > h4.sec_h4` room name
     (18px/38px weight 600 `#222222`), `h5` price (24px/28px weight 600
     **SKY BLUE `#52c5fd`**, `small` 14px weight 300 "/night"):
     **Double Deluxe Room $250**, **Single Deluxe Room $200**,
     **Honeymoon Suit $750**, **Economy Double $200**.
  5. **Facilities** — `section.facilities_area.section_gap` (bg
     `#04091e`, z-index 1, overflow hidden) > `div.overlay.bg-parallax`
     (facilites_bg.jpg cover, opacity 0.15) > container >
     `div.section_title.text-center`: `h2.title_w` **"Royal Facilities"**
     (36px WHITE) + `p` (light text). Row of 6 ×
     `col-lg-4.col-md-6` `div.facilities_item` (border 1px solid
     `#777777`, border-radius 10px, bg `rgba(249,249,255,0.102)`
     glassmorphism, padding 31px 40px 37px, white text, mb 30px):
     `h4.sec_h4` (white, pb 18px) with gold `i` (24px, `#f3c300`, pr
     20px) + `p` (14px/24px). Source icons (Linearicons): `lnr-dinner`
     → **Restaurant**, `lnr-bicycle` → **Sports CLub** (typo KEEP),
     `lnr-shirt` → **Swimming Pool**, `lnr-car` → **Rent a Car**,
     `lnr-construction` → **Gymnesium** (typo KEEP), `lnr-coffee-cup`
     → **Bar**. NOTE: the source icon choices are odd (shirt for a
     pool, construction for a gym) — replace with lucide equivalents;
     prefer semantically sensible icons (Waves/Utensils/Bike/Car/
     Dumbbell/Coffee) while keeping one icon per card.
  6. **About** — `section.about_history_area.section_gap` (white) >
     `div.row`: `col-md-6.d_flex.align-items-center` >
     `div.about_content` (padding-right 60px): `h2.title.title_color`
     **"About Us<br>Our History<br>Mission & Vision"** (36px/45px
     weight 600 `#222222`, three lines) + `p` (14px, padding 18px 0
     30px, `#777777`, "inappropriate behavior is often laughed off…")
     - `a.button_hover.theme_btn_two` **Request Custom Price** (black
       `#222222` bg, white uppercase 14px weight 500, padding 5px 29px,
       gold sweep hover); `col-md-6` > `img.img-fluid` (about_bg.jpg).
       Content LEFT, photo RIGHT (per DOM).
  7. **Testimonial** — `section.testimonial_area.section_gap` (bg
     `#f9f9ff`) > section_title `h2.title_color` **"Testimonial from
     our Clients"** + `p`. `div.testimonial_slider` (owl-carousel) —
     FOUR `div.media.testimonial_item` slides (white bg, border 1px
     `#eeeeee`, padding 40px): `img.rounded-circle` avatar (mr 30px) +
     `div.media-body` (padding-left 20px): `p` (14px/24px `#8c8d9e`,
     pb 15px, "As conscious traveling Paupers we must always be
     concerned about our dear Mother Earth…"), `a > h4.sec_h4`
     **Fanny Spencer**, `div.star` of 5 links — 4 × `fa-star` + 1 ×
     `fa-star-half-o` (4.5 stars, gold `#f3c300` 14px). All four slides
     are IDENTICAL (same avatar, name, copy) in the source. Owl dots
     navigation. Recreate with React state (one slide visible + dots).
  8. **Blog** — `section.latest_blog_area.section_gap` (white) >
     section_title `h2.title_color` **"latest posts from blog"**
     (lowercase as authored) + `p`. Row of 3 × `col-lg-4.col-md-6`
     `div.single-recent-blog-post` (mb 30px): `div.thumb` (overflow
     hidden; img 0.7s hover scale) + `div.details` (padding-top 30px):
     `div.tags` — 2 × `a.button_hover.tag_btn` (12px weight 500, border
     1px `#eeeeee`, padding 1px 18px, `#222222`, gold sweep hover, 2px
     gap): **Travel** / **Life Style**; `a > h4.sec_h4` title
     (18px/38px `#222222`, hover `#52c5fd`); `p` excerpt (14px);
     `h6.date.title_color` **"31st January,2018"** (13px, `#222222`).
     Posts: **Low Cost Advertising**, **Creative Outdoor Ads**,
     **It S Classified How To Utilize Free** (source capitalization
     quirk KEEP).
  9. **Footer** — `footer.footer-area.section_gap` (bg `#04091e`,
     padding 142px 0) > row of 4 × `col-lg-3.col-md-6.col-sm-6`
     `div.single-footer-widget`: (a) **About Agency** (`h6.footer_title`
     16px uppercase white mb 28px + `p` `#777`), (b) **Navigation
     Links** (two lists × 4 links: Home/Feature/Services/Portfolio +
     Team/Pricing/Blog/Contact; 25px line-height, `#777`, hover gold),
     (c) **Newsletter** (`p` + email input + gold `button.sub-btn`
     with `lnr-location` glyph — lucide `Send`), (d) **InstaFeed** (8
     images, 5px margins grid). Bottom: `div.border_line` + row
     `footer-bottom` (flex, space-between): `p.footer-text` copyright
     "© <year> All rights reserved | This template is made with ♥ by
     [Colorlib]" (REPLACE the Colorlib attribution with the new name +
     the mandatory Component Dock link) + `div.footer-social`
     (`fa-facebook`, `fa-twitter`, `fa-dribbble`, `fa-behance` →
     lucide `Facebook`/`Twitter`/`Dribbble`/`Behance`).
  - Footer MUST link https://www.componentdock.com/ per repo rule.

## Design tokens

- **Font:** Poppins 300/400/500/600/700 via Google Fonts
  (`https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700`).
  Body: 14px/24px, weight 300, `#777777`.
- **Brand palette:**
  - `#f3c300` GOLD — primary accent: buttons, facility icons, stars,
    footer-link hover, sweep hover fill
  - `#f8b100` GOLD-HOVER — the sweep fill / hover shade
  - `#04091e` NEAR-BLACK-NAVY — hero base, booking bar, facilities
    band, footer bg
  - `#222222` NEAR-BLACK — titles, secondary button bg, tag text
  - `#777777` GREY — body text, footer text, input text/placeholders
  - `#52c5fd` SKY BLUE — room prices, active nav link, link hovers
  - `#f9f9ff` LIGHT-LAVENDER — testimonial section bg
  - `#eeeeee` — card borders (testimonial, tag chips)
  - `#2b3146` — booking input borders on dark
  - `#8c8d9e` — testimonial body text
  - `rgba(249,249,255,0.102)` — facility card translucent fill
- **Headings:** section title `h2` 36px/45px weight 600; banner `h2`
  60px/60px weight 700; `sec_h4` 18px/38px weight 600; booking `h2`
  24px/30px uppercase; `footer_title` 16px uppercase weight 600;
  banner `h6` 14px uppercase letter-spacing 1.4px weight 400.
- **Buttons — signature (SHARP, sweep hover):** `border-radius: 0`;
  `transition: all 0.3s linear`; overflow hidden; `:before` absolute
  full-size fill `#f8b100` translated -100% → 0 on hover (a gold wipe
  across the button). Variants:
  - `.theme_btn` (Get Started, room-card Book Now): bg `#f3c300`,
    WHITE text, uppercase 14px weight 600, padding 5px 30px (room card:
    5px 25px, max-width 128px)
  - `.theme_btn_two` (Request Custom Price): bg `#222222`, white text,
    uppercase 14px weight 500, padding 5px 29px
  - `.book_now_btn` (booking bar): full-width block, bg `#f3c300`,
    `#222222` text, uppercase 14px weight 500, padding 5px 20px
- **Cards:** `border-radius: 10px` (hotel_img, facilities_item);
  facilities_item = 1px solid `#777777` border + translucent
  `rgba(249,249,255,0.102)` fill (glassmorphism on dark photo), padding
  31px 40px 37px; testimonial_item = white, 1px `#eeeeee`, padding 40px.
- **Image hovers:** hotel_img img scale(1.19) @ 0.4s; blog thumb img
  scale @ 0.7s (overflow hidden containers).
- **Spacing:** `section_gap` 120px 0; section_title mb 75px; footer
  padding 142px 0; banner_content mt 106px mb 94px; banner min-height
  800px; accomodation cards mb 30px; room price `small` 14px weight 300.
- **Inputs (booking bar):** transparent bg, 1px solid `#2b3146`,
  radius 0, 13px `#777777`, line-height 38px, padding 0 20px; calendar
  glyph absolute right 20px `#777777` (lucide `Calendar`).
- **Selects:** nice-select custom dropdowns with placeholders
  "Adult", "Child", "Number of Rooms" (source option lists contain
  placeholder junk: Adult → Old/Younger/Potato; Child → Child/Baby/
  Child; Rooms → Room 01/02/03 — use sensible options, see quirks).
- **Navbar:** white bg, padding 0 25px; links 12px/80px weight 500
  uppercase `#222222`; active `#52c5fd`; header absolute over hero.
- **Icons:** lucide-react ONLY (Crown logo, Calendar, Send, Facebook,
  Twitter, Dribbble, Behance, Star/StarHalf for ratings, Utensils/Bike/
  Car/Dumbbell/Coffee/Waves for facilities) — NO Linearicons /
  FontAwesome / Ionicons.
- **Images:** `https://picsum.photos/seed/gilt-<n>/<w>/<h>` placeholders
  (hero ~1600×900, rooms 4× ~600×450, facilities bg ~1600×900, about
  ~800×600, avatars ~120×120, blog 3× ~600×400, instafeed 8× ~150×150).

## Requirements

### Requirement: Page structure

The system SHALL render the Gilt page as a single-column landing page in
this order: header/navbar, banner hero (with the overlaid booking bar),
Accomodation, Facilities, About, Testimonial, Blog, footer. Sections
SHALL use the `section_gap` rhythm (120px vertical padding) except where
noted, and the page SHALL be light except for the dark hero/booking/
facilities/footer bands.

#### Scenario: Default render

- **GIVEN** the Gilt page is rendered
- **WHEN** the user views the page
- **THEN** the page SHALL render the sections in the order above
- **AND** the body SHALL use Poppins 14px/24px weight 300 `#777777`
- **AND** the primary accent SHALL be gold `#f3c300` with `#222222`
  titles and `#04091e` dark bands
- **AND** a footer SHALL render at the bottom (see "Footer" requirement)

### Requirement: Navbar

The system SHALL render an absolute white navbar over the hero with a
logo (crown icon + template name) on the left and uppercase links on the
right: Home (active), About us, Accomodation, Gallery, Blog (with a
Blog Details dropdown), Elemests, Contact. Links SHALL be 12px weight
500 uppercase `#222222`, the active link `#52c5fd`. On mobile the links
SHALL collapse behind a hamburger toggle with `aria-expanded`.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered on a desktop viewport
- **WHEN** the user looks at the header
- **THEN** a logo SHALL render on the left
- **AND** links SHALL read Home, About us, Accomodation, Gallery, Blog,
  Elemests, Contact ("Accomodation" and "Elemests" spellings are source
  artifacts and MUST be kept)
- **AND** the Home link SHALL be styled as active in `#52c5fd`

#### Scenario: Blog dropdown

- **GIVEN** the navbar is rendered
- **WHEN** the user activates the Blog link
- **THEN** a submenu SHALL open with a "Blog Details" link
- **AND** the toggle SHALL expose `aria-expanded`/`aria-haspopup`

### Requirement: Banner hero

The system SHALL render a dark `#04091e` hero, min-height 800px, with a
full-cover resort photo at 50% opacity behind centered white copy:
uppercase tagline "Away from monotonous life", headline "Relax Your
Mind" (60px weight 700), a body paragraph, and a gold "Get Started"
button (uppercase, white text, sharp corners, gold sweep hover).

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the user views the top of the page
- **THEN** a tagline SHALL read "Away from monotonous life" (uppercase,
  letter-spaced, white)
- **AND** a headline SHALL read "Relax Your Mind" in large bold white
- **AND** a paragraph of placeholder copy SHALL render below it
- **AND** a gold "Get Started" button SHALL render centered

### Requirement: Booking bar

The system SHALL render a dark `#04091e` booking bar overlaid on the
bottom of the hero: "Book Your Room" (uppercase, two lines) on the left;
on the right an Arrival Date input, a Departure Date input (both with
calendar icons), Adult / Child / Number of Rooms selects, and a
full-width gold "Book Now" button. Inputs SHALL be transparent with 1px
`#2b3146` borders, radius 0, 13px `#777777` text.

#### Scenario: Booking form renders

- **GIVEN** the hero is rendered
- **WHEN** the user scrolls to the bottom of the hero
- **THEN** a booking bar SHALL overlay the hero's bottom edge
- **AND** it SHALL contain Arrival Date and Departure Date fields with
  calendar icons
- **AND** Adult, Child and Number of Rooms selects
- **AND** a full-width gold "Book Now" button
- **AND** the heading SHALL read "Book Your Room" (with a line break
  between "Book" and "Your Room")

### Requirement: Accomodation section

The system SHALL render a white section titled "Hotel Accomodation"
(single-m typo kept) with four room cards in a 4-column grid (2-up on
small screens): each card SHALL show a photo with a gold "Book Now"
button overlaid at the bottom center (image zooms to scale(1.19) on
hover), a room name, and a sky-blue price with a "/night" suffix.

#### Scenario: Room cards

- **GIVEN** the Accomodation section is rendered
- **WHEN** the user views the room grid
- **THEN** four cards SHALL render: Double Deluxe Room $250/night,
  Single Deluxe Room $200/night, Honeymoon Suit $750/night, Economy
  Double $200/night
- **AND** each card SHALL show a "Book Now" button overlaid on its photo
- **AND** each price SHALL be `#52c5fd` sky blue, 24px weight 600, with
  a lighter "/night" suffix

### Requirement: Facilities section

The system SHALL render a dark `#04091e` section (dimmed night-pool
photo at 15% opacity behind) titled "Royal Facilities" in white, with
six translucent glassmorphism cards (1px `#777777` border, 10px radius,
`rgba(249,249,255,0.102)` fill): a gold icon, a white title, and a
14px paragraph each. Titles SHALL read Restaurant, Sports CLub (typo
kept), Swimming Pool, Rent a Car, Gymnesium (typo kept), Bar.

#### Scenario: Facility cards

- **GIVEN** the Facilities section is rendered
- **WHEN** the user views the facility grid
- **THEN** the section background SHALL be dark `#04091e` with a dimmed
  photo overlay
- **AND** the heading SHALL read "Royal Facilities" in white
- **AND** six cards SHALL render with gold icons and the titles above
- **AND** the source typos "Sports CLub" and "Gymnesium" SHALL be kept

### Requirement: About section

The system SHALL render a white split section with the content column on
the LEFT and a photo on the RIGHT. The content SHALL be a three-line
title "About Us / Our History / Mission & Vision" (36px weight 600),
a paragraph, and a black "Request Custom Price" button (uppercase white
text, gold sweep hover).

#### Scenario: About split

- **GIVEN** the About section is rendered
- **WHEN** the user views it
- **THEN** the title SHALL read "About Us", "Our History" and "Mission
  & Vision" on three lines
- **AND** a paragraph SHALL render below the title
- **AND** a black "Request Custom Price" button SHALL render
- **AND** the photo SHALL sit on the right of the content

### Requirement: Testimonial section

The system SHALL render a light `#f9f9ff` section titled "Testimonial
from our Clients" with a carousel of white cards: each card SHALL show
a round avatar, a quote paragraph, the name "Fanny Spencer", and a
4.5-star gold rating (four full stars + one half star). The carousel
SHALL show one card at a time with dot navigation.

#### Scenario: Testimonial carousel

- **GIVEN** the Testimonial section is rendered
- **WHEN** the user views it
- **THEN** the heading SHALL read "Testimonial from our Clients"
- **AND** a testimonial card SHALL render with an avatar, quote, name
  "Fanny Spencer" and a 4.5-star gold rating
- **AND** dot navigation SHALL allow switching between slides

### Requirement: Blog section

The system SHALL render a white section titled "latest posts from blog"
(lowercase as authored) with three post cards, each showing a photo,
two tag chips ("Travel" and "Life Style" — bordered 12px uppercase-free
chips with a gold sweep hover), a title, an excerpt, and a date
"31st January,2018". Titles SHALL read Low Cost Advertising, Creative
Outdoor Ads, and It S Classified How To Utilize Free (source
capitalization kept).

#### Scenario: Blog cards

- **GIVEN** the Blog section is rendered
- **WHEN** the user views the blog grid
- **THEN** the heading SHALL read "latest posts from blog"
- **AND** three cards SHALL render with the titles above
- **AND** each card SHALL show Travel and Life Style tag chips
- **AND** each card SHALL show the date "31st January,2018"

### Requirement: Footer

The system SHALL render a dark `#04091e` footer (142px padding) with
four columns: About Agency (title + paragraph), Navigation Links (two
lists of four links), Newsletter (paragraph + email input + gold submit
button), InstaFeed (8-image grid). A bottom bar SHALL contain a
copyright line and four social icons. The footer SHALL link
https://www.componentdock.com/ ("Component Dock"), replacing any
external attribution links, and no app code SHALL reference ColorLib.

#### Scenario: Footer columns

- **GIVEN** the page is fully rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a dark footer SHALL render with About Agency, Navigation
  Links, Newsletter and InstaFeed columns
- **AND** the newsletter form SHALL have an email input and a gold
  submit button
- **AND** the bottom bar SHALL show a copyright line and four social
  icons

#### Scenario: Component Dock attribution

- **GIVEN** the page is fully rendered
- **WHEN** the user views the footer
- **THEN** a link to `https://www.componentdock.com/` SHALL render
- **AND** no app code SHALL reference ColorLib (provenance lives only
  in this spec, TEMPLATES.md, and the PR)

## Source quirks (keep as authored)

- "Accomodation" (single m) in the nav + section heading
- "Sports CLub" and "Gymnesium" facility titles
- "Elemests" nav link (source typo for Elements)
- "latest posts from blog" lowercase heading
- "It S Classified How To Utilize Free" blog title capitalization
- Booking selects in the source carry placeholder-junk options
  (Adult → Old/Younger/Potato; Child → Child/Baby/Child; Rooms → Room
  01/02/03) — recreate with sensible options (Adult/Child/Room 01–03)
  since the junk values are clearly demo placeholders; keep the
  nice-select-style custom dropdown look
- Facilities icon choices are odd in the source (shirt for Swimming
  Pool, construction for Gymnesium) — use semantically sensible lucide
  icons instead while keeping one gold icon per card

## Verification checklist

- [ ] `scripts/verify-app.sh gilt` green: typecheck + lint + vitest
      100% coverage (lines/functions/branches/statements) + build
- [ ] `npm run spec:validate` passes for `template-gilt`
- [ ] Section order 1:1 with the live reference (navbar → hero →
      booking bar → Accomodation → Facilities → About → Testimonial →
      Blog → footer)
- [ ] Tokens in `@theme`: gold `#f3c300` / `#f8b100`, dark `#04091e`,
      `#222222`, `#777777`, sky blue `#52c5fd`, `#f9f9ff`, `#eeeeee`,
      `#2b3146`, `#8c8d9e`
- [ ] Signature sharp buttons (radius 0, uppercase) with the gold sweep
      hover (`:before` translateX -100% → 0) on Get Started, Book Now
      (room cards), Request Custom Price, and tag chips
- [ ] Hero: 800px min-height, dark base + 50%-opacity photo, white
      "Relax Your Mind", gold Get Started
- [ ] Booking bar overlaid on hero bottom: date inputs with calendar
      icons, Adult/Child/Rooms selects, full-width gold Book Now
- [ ] Room cards: 4 cards, hover zoom (scale 1.19), overlaid Book Now,
      sky-blue prices with "/night" suffix
- [ ] Facilities: dark band + 15% photo, 6 glassmorphism cards, gold
      lucide icons, typos "Sports CLub"/"Gymnesium" kept
- [ ] About: content left + photo right, three-line title, black
      "Request Custom Price" button
- [ ] Testimonial: `#f9f9ff` band, carousel with dot navigation, 4.5
      gold stars (4 full + 1 half)
- [ ] Blog: 3 cards, Travel/Life Style chips (bordered, sweep hover),
      dates "31st January,2018", lowercase heading kept
- [ ] Footer: 4 columns + newsletter form (email + gold submit) +
      8-image InstaFeed + copyright bar with 4 social icons
- [ ] No ColorLib references in app code; footer links
      https://www.componentdock.com/
- [ ] `public/CNAME` = `gilt.free.componentdock.com`; `"homepage"` =
      `https://gilt.free.componentdock.com`; `injectUiSource()` present
      in vite.config.ts; `package-lock.json` registers the workspace
- [ ] TEMPLATES.md bookkeeping: mark BOTH Royal rows (lines 491 and
      1926 — duplicate slug) `[x]` + surge URL when shipped
- [ ] lucide-react icons only (Crown, Calendar, Send, Star, StarHalf,
      Facebook, Twitter, Dribbble, Behance, Utensils, Bike, Car,
      Dumbbell, Coffee, Waves) — NO Linearicons/FontAwesome
