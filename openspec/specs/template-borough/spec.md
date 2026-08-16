# Template: Borough (Directory & Listing)

## Purpose

Borough is a one-page local-directory/listing website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Directone" design (source:
https://colorlib.com/wp/template/directone/), built under a DIFFERENT name
(**Borough** — a town or district within a city, a fitting name for a local
directory template; a single lowercase word, kebab-case, no collision with
`apps/`, `openspec/specs/` or `docs/templates/` — verified 2026-08-16), per
the monorepo naming mandate, with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript. The page is a city directory: hero with a
category/location search bar → 12 category cards with listing counts →
"Popular Listing" card grid → red "Special Offers" band → "Our Listing" card
grid → about + animated counters → testimonial carousel → dark "How It
Works" video section with 4 steps → blog cards → dark footer. TEMPLATES.md
has **TWO copies** of Directone (lines 573 AND 1525, both `- [ ]` unchecked —
when the implementer finishes, BOTH rows get bookkept `[x]` + surge URL).
This prep: Directone → **Borough**.

## Design reference (replication findings)

- **Original:** ColorLib "Directone" — free **Bootstrap 5** "Directory &
  Listing" template (source page: https://colorlib.com/wp/template/directone/).
  Inner pages exist in the source (about/listing/blog/contact) but the
  recreation is the **one-page home** only, like every other template in the
  backlog.
- **Preview URL (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/directone/` — **HTTP 200**, 56,152 bytes
  HTML, `<title>Directone - Free Bootstrap 5 Template by Colorlib</title>`.
  NO preview-path quirk (the standard path works — verified 2026-08-16).
- **Source stack (for reference; the recreation re-implements in
  React/Tailwind):** Bootstrap 5 (`css/bootstrap.min.css` +
  `bootstrap.bundle.min.js`), **tiny-slider** (testimonial carousel
  `.carousel-testimony`, items: 1, mode carousel, speed 700, nav dots),
  **glightbox** (lightbox on listing images + the How It Works video),
  **AOS** (scroll-reveal `data-aos="fade-up"` + delays on cards), **rellax**
  (parallax on the video image), custom counter JS (animates `.counter`
  `data-count` values 0→N on scroll), icon fonts **Flaticon** (12 category
  glyphs + compass), **Font Awesome 4.7** and **Ionicons 4.5.6** (ui icons),
  Google Maps API (contact page only — not needed). **NO Google Fonts
  `<link>` in the source** — `"Nunito Sans"` is declared in the CSS but never
  loaded (renders Arial fallback live); the recreation ADDS the Google Fonts
  `<link>` in index.html.
- **Screenshot:** `directone-free-template.jpg` (1200×946, viewed in browser)
  — twilight European city photo hero with white headline + white search bar
  and a red Search button; white category cards with a single solid-red
  "active" card; dark footer. NOTE: automated vision readouts of this
  screenshot were partially unreliable (they claimed a pill-shaped search bar
  with a circular button and icon circles on the category cards, which the
  live computed styles disprove) — the **live DOM + computed styles are
  authoritative**; the screenshot corroborates the overall palette: white /
  light-gray sections + red (#ff414d) accents + dark navy footer + city-photo
  hero.
- **Section order (DOM, 1:1):**
  1. `nav.navbar.ftco-navbar-light` — transparent, **absolute over the hero**
     (`top: 51px`), `z-index: 3`
  2. `section.hero-wrap` — full-viewport hero (100vh, min-height 750px,
     `background-attachment: fixed`, inline city-photo bg) with `.overlay`
     (black, opacity .3) + centered search
  3. `section.ftco-section.ftco-no-pt.ftco-no-pb.bg-light` — 12 category
     cards in a `.services-wrap` grid (**margin-top: -80px** — overlaps the
     hero bottom)
  4. `section.ftco-section.bg-light` — "Popular Listing" (4 listing cards)
  5. `section.ftco-intro.bg-light` — "Special Offers" band (left image +
     red striped band)
  6. `section.ftco-section.bg-light` — "Our Listing" (8 listing cards)
  7. `section.ftco-section.ftco-about-section.ftco-no-pt.ftco-no-pb` —
     about text + 4 counters
  8. `section.ftco-section.testimony-section.bg-light` — testimonial
     carousel (5 slides)
  9. `section.img.v-section.ftco-section` — dark "How It Works" band
     (video + 4 steps)
  10. `section.ftco-section.bg-light` — "Recent Blog" (4 blog cards)
  11. `footer.ftco-footer` — dark `#10151c` footer + copyright bar

## Design tokens (from the reference)

| Token               | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Source                                             |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| Brand color         | **`#ff414d`** (vermilion red) — buttons, active nav link, subheadings, category count chips, icon circles, hover states, footer socials, footer link hovers                                                                                                                                                                                                                                                                                                                              | `style.css` (67 uses) + computed styles            |
| Brand hover         | **`#f03943`** (slightly darker red) — button hover / diagonal-stripe band second tone                                                                                                                                                                                                                                                                                                                                                                                                    | `.btn.btn-primary:hover`? no — `#ff414d` selectors |
| Dark navy           | **`#151c26`** — `.btn-darken` (Special Offers CTA), `.bg-darken` (copyright bar), How It Works section bg                                                                                                                                                                                                                                                                                                                                                                                | `.btn-darken`, `.bg-darken`, `.v-section .overlay` |
| Footer bg           | **`#10151c`** (near-black) — `footer.ftco-footer`, footer text `rgba(255,255,255,0.7)`, widget headings `#fff`                                                                                                                                                                                                                                                                                                                                                                           | `.ftco-footer` + computed                          |
| Light section bg    | **`#f8f9fa`** (Bootstrap `bg-light` — hero-below sections, testimonial, intro, blog)                                                                                                                                                                                                                                                                                                                                                                                                     | `bg-light` classes                                 |
| Alt card bg         | **`#f0f4f7`** (light blue-gray — How It Works step cards)                                                                                                                                                                                                                                                                                                                                                                                                                                | `.v-section .services` + computed                  |
| Text                | Body `#212529`; headings `rgba(0,0,0,0.8)`; muted `rgba(0,0,0,0.4)` (form placeholders) / `rgba(0,0,0,0.5)` (category count label); meta/review `#999999`; hero text `rgba(255,255,255,0.8)`; copyright `rgba(255,255,255,0.5)`                                                                                                                                                                                                                                                          | computed + CSS                                     |
| Font family         | **`"Nunito Sans", Arial, sans-serif`** — body + headings (Google Fonts `<link>` added by the recreation; the source declares but never loads it)                                                                                                                                                                                                                                                                                                                                         | `style.css` body rule                              |
| Heading pattern     | `.heading-section .subheading`: **13px, uppercase, `font-weight: 700`, `#ff414d`, `margin-bottom: 5px`**; `.heading-section h2`: **50px, `font-weight: 700`** (28px below lg); white variant: h2 `#fff`, subheading stays `#ff414d`                                                                                                                                                                                                                                                      | `.heading-section*` rules                          |
| Hero                | 100vh / min-height 750px, `background-attachment: fixed`, city photo + black `.overlay` opacity **.3**; h1 **64px `font-weight: 700` `#fff`** `line-height: 1.2` (40px below lg); sub **16px `rgba(255,255,255,0.8)`**; text centered                                                                                                                                                                                                                                                    | `.hero-wrap*` + computed                           |
| Navbar              | Transparent, absolute `top: 51px`; brand 31px `font-weight: 900` `#fff` + red compass glyph 40px + small line 11px uppercase 700; links **13px, 700, uppercase, `letter-spacing: 2px`, white, padding `19.2px 25px`**; active link **`#ff414d`**; "Add Listing" = `btn btn-primary rounded` red `#ff414d`                                                                                                                                                                                | `.ftco-navbar-light*` + computed                   |
| Search form         | `.search-property-1`: **white bg, `border-radius: 5px`**, `row g-0`, 4 equal columns; fields 14px borderless, placeholder `rgba(0,0,0,0.4)`; column separators `border-left: 1px solid rgba(0,0,0,0.1)`; Search button red `#ff414d`, white, **16px 700 uppercase, `border-radius: 4px`** (computed padding 16px 12px)                                                                                                                                                                   | `.search-property-1*` + computed                   |
| Category cards      | `.services`: **white, padding 30px, `border-radius: 4px`, shadow `0 5px 14px -6px rgba(0,0,0,0.07)`**, centered; glyph **60px `#ff414d`** (NO circle behind it — verified via computed styles); name 20px 600; count line 14px uppercase 600 `rgba(0,0,0,0.5)` with red count chip (bg `rgba(0,0,0,0.03)`, padding 2px 5px, radius 4px); hover/.active = card bg `#ff414d`, text white, glyph white, shadow deepens, decorative 200px circle `::after` fades in bottom-right             | `.services*` + computed                            |
| Listing cards       | `.listing-wrap`: **white, NO border-radius (0px), shadow `0 5px 21px -14px rgba(0,0,0,0.14)`, `margin-bottom: 30px`**; image 250px with hover magnifier (40px white circle, red glyph); body: category chip 12px uppercase 600 `#ff414d` + 50px red circle icon (white 30px glyph); title 22px 600; address/phone 14px with pin/phone icons; `.info-wrap2` (top border `rgba(0,0,0,0.07)`, pt 15px): "Review **5.0/5** (100)" 16px `#999999` + heart link                                | `.listing-wrap*` + computed                        |
| Special Offers band | `section.ftco-intro.bg-light`: left `col-md-4` image (300px) + right `col-md-8 .aside-stretch` = **red diagonal stripes** (`linear-gradient(129deg, #ff414d 25%, #f03943 25% 50%, #ff414d 50% 75%, #f03943 75%)`); white subheading 14px 700 uppercase + h2 `#fff` 700; CTA `.btn.btn-darken` = bg `#151c26`, white text, `padding: 16px 24px` (py-3 px-4)                                                                                                                               | `.ftco-intro*` + computed                          |
| About counters      | `.counter-wrap`: bg `rgba(0,0,0,0.03)`, `border-radius: 4px`, `padding: 30px 20px`; `.counter` number **40px 600 `#000`** (animates 0→N from `data-count`; `.number.gradient-text` is an UNDEFINED class in the source — numbers render solid black); labels 15px-ish, e.g. "Years of Experienced", "Total Listing", "Company Staf", "Happy People" (source values: 50 / 210 / 450 / 100)                                                                                                | `.counter-wrap`, `.counter` + computed             |
| Testimonial         | `.testimony-wrap`: white, `border-radius: 4px`, `padding: 35px 30px 30px`, shadow `0 5px 12px -9px rgba(0,0,0,…)`; 45px red quote circle at top-center (`top: -20px`); quote text; 80px round avatar; name 22px 600 `#000`; role 13px uppercase `#ff414d` 600; **tiny-slider carousel, 1 slide per view, dots nav**                                                                                                                                                                      | `.testimony-wrap*` + main.js                       |
| How It Works        | dark band: **`#151c26` bg + `curls.png` pattern overlay** (height 600px, opacity 1 — the pattern PNG carries the dark base); white h2 + red subheading (white-variant); video poster 600px `border-radius: 4px` with **80px white pulsing circle** (`pulse 2s infinite`) + red 50px play glyph; 4 step cards `col-md-3`: bg `#f0f4f7`, radius 4px, padding 30px, **80px red circle icon** (white 45px glyph), step title 24px 600 (mb 20px), hover = card red / circle white / glyph red | `.v-section*` + computed                           |
| Blog cards          | `.blog-entry`: white, `border-radius: 4px`, shadow `0 10px 25px -13px rgba(0,0,0,0.1)`; image 270px with `.list-team` overlay (bottom, `rgba(255,255,255,0.8)`, radius 4px: 34px round avatar + author 14px 700 + heart); text padding 30px: meta **13px `#999999`** ("Dec. 05, 2020" + "3 Comments"), title **20px 700**, excerpt                                                                                                                                                       | `.blog-entry*`, `.block-20` + computed             |
| Footer              | bg `#10151c`, text `rgba(255,255,255,0.7)`, `padding: 7em 0 0`; brand (31px 900 white + 11px small) + blurb; **40px red social circles** (white icons; hover icon → `#ff414d`); 3 link columns (Explore / Quick Links / Categories, white 20px 700 widget titles, links `rgba(255,255,255,0.7)`, hover `#ff414d`); "Have a Questions?" contact column (address / phone / email with red icons); copyright bar `bg-darken` `#151c26`, centered **13px `rgba(255,255,255,0.5)`**           | `.ftco-footer*`, `.ftco-footer-social`, computed   |
| Section rhythm      | `.ftco-section` padding **7em 0**; `.services-wrap` `margin-top: -80px`; cards `margin-bottom: 30px`; heading rows `mb-5`; counters row `py-5 g-2`                                                                                                                                                                                                                                                                                                                                       | CSS                                                |
| Mobile behavior     | Hero h1 40px below lg; section paddings tighten; category grid 12 → 6-per-row on md (`col-md-4 col-lg-2`), stack on xs; listing/blog grids `col-md-6 col-lg-3` (2-up on md); navbar collapses to toggler ("Menu" + bars, 16px uppercase); stripes band stacks below the intro image                                                                                                                                                                                                      | Bootstrap classes + media queries                  |

## Requirements

### Requirement: Page composition

The system SHALL render the one-page directory site with a navigation
landmark, a main landmark, the mandatory footer landmark, and a document
title.

#### Scenario: Full page render

- **GIVEN** the Borough app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the navbar, hero, category section, listing
  sections, Special Offers band, about section, testimonial, How It Works,
  blog, and footer inside a main landmark
- **AND** the document title SHALL be "Borough — Directory & Listing"

### Requirement: Navbar

The system SHALL render a transparent navbar overlaid on the hero with the
renamed brand, the five source links, and a red "Add Listing" button.

#### Scenario: Navbar renders over the hero

- **GIVEN** the page is rendered
- **WHEN** the top of the page loads
- **THEN** a transparent navbar SHALL sit absolutely at the top of the hero
  (the source: `position: absolute; top: 51px`)
- **AND** the brand SHALL read **"Borough"** (31px, `font-weight: 900`,
  white) with a small uppercase tagline **"Directory and Listing"** beneath
  it (the source brands "Directone" — provenance stays out of app code)
- **AND** five nav links SHALL be present — **Home, About, Listing, Blog,
  Contact** — styled 13px, `font-weight: 700`, uppercase,
  `letter-spacing: 2px`, white
- **AND** the Home link SHALL be marked active in brand red `#ff414d`
- **AND** a red **"Add Listing"** button SHALL sit on the right
  (`#ff414d` bg, white text, `border-radius: 4px`)
- **AND** below the lg breakpoint the navbar SHALL collapse behind a toggler
  labeled "Menu" (16px uppercase)

### Requirement: Hero with search form

The system SHALL render the full-viewport hero with the headline, subtext,
and the four-part search form matching the source's fields and button.

#### Scenario: Hero content and search bar render

- **GIVEN** the navbar is rendered
- **WHEN** the hero loads
- **THEN** the hero SHALL fill the viewport (100vh, min-height 750px) with a
  city photo background, a black overlay at 30% opacity, and centered white
  text
- **AND** the headline SHALL read **"Let's Explore Your Awesome City"** in
  64px `font-weight: 700` white (40px below lg)
- **AND** the subtext SHALL read **"Find great places to stay, eat, shop, or
  visit from local experts."** in 16px `rgba(255,255,255,0.8)`
- **AND** a WHITE search bar (`border-radius: 5px`) SHALL render with four
  equal columns separated by hairline left borders:
  1. a search icon + text input **"What are you looking for?"**
  2. a pin icon + text input **"Search Location"**
  3. a chevron + select **"All Categories"** with the source's 13 options
     (All Categories, Food & Drinks, Hotel, Shopping, Beauty, Fitness,
     Bar & Club, Games, Places, Circus, Theater, Sports, Health)
  4. a red **"Search"** button (`#ff414d`, white uppercase 700 text,
     `border-radius: 4px`)
- **AND** the select SHALL have an accessible label (the source uses a bare
  select — the recreation SHALL add a visually-hidden `<label>`)

### Requirement: Category cards

The system SHALL render the 12 category cards with the source's names,
counts, and the single red "active" card.

#### Scenario: Category grid renders with counts

- **GIVEN** the hero is rendered
- **WHEN** the category section loads
- **THEN** a grid SHALL render overlapping the hero bottom
  (`margin-top: -80px`) with **12 white cards** (padding 30px,
  `border-radius: 4px`, soft shadow) in 6-per-row on lg, 3-per-row on md,
  full-width on xs
- **AND** each card SHALL show a red category glyph (60px, brand `#ff414d` —
  NO circle behind it; use lucide icons mapped to the categories, e.g.
  Utensils / BedDouble / ShoppingBag / Sparkles / Dumbbell / GlassWater /
  Gamepad2 / MapPin / FerrisWheel / Clapperboard / Trophy / HeartPulse), the
  category name (20px 600), and a count line "**X** Listings" (14px uppercase
  600 muted) with the number in a red chip (bg `rgba(0,0,0,0.03)`, padding
  2px 5px, radius 4px)
- **AND** the counts SHALL match the source: Food & Drink 103, Hotels 40,
  Shopping 100, Beauty 36, Fitness 30, Bar & Club 12, Games 103, Places 40,
  Circus 100, Theater 36, Sports 30, Health 12
- **AND** exactly ONE card SHALL be active (the source marks **Hotels**) —
  solid `#ff414d` bg, white name/glyph/count
- **AND** hovering any card SHALL flip it to the same red state with a
  decorative 200px circle fading in at the bottom-right

### Requirement: Popular Listing cards

The system SHALL render the "Popular Listing" section with four listing
cards matching the source's structure.

#### Scenario: Four listing cards render

- **GIVEN** the category grid is rendered
- **WHEN** the user scrolls to the listing section
- **THEN** the section heading SHALL show subheading **"Our Listing"**
  (13px uppercase 700 `#ff414d`) and h2 **"Popular Listing"** (50px 700;
  28px below lg)
- **AND** four listing cards SHALL render in a `col-md-6 col-lg-3` grid,
  each card: white, NO radius (0px), shadow `0 5px 21px -14px
rgba(0,0,0,0.14)`, `margin-bottom: 30px`
- **AND** each card SHALL contain: a 250px image with a hover magnifier
  (40px white circle, red glyph); a category chip (12px uppercase 600 red);
  a 50px red circle icon (white 30px glyph); a title (22px 600); an address
  line with pin icon ("Suite 721 New York NY 10016"); a phone line ("+00 123
  456 7890"); and a footer row (hairline top border) with **"Review 5.0/5
  (100)"** in 16px `#999999` plus a heart link
- **AND** the four cards SHALL use the source's names: **Japanese
  Restaurant** (Food & Drinks), **Harbor Lights Hotel** (Hotel), **MS Center
  Mall of Asia** (Shopping), **Maxout Fitness Gym** (Gym Fitness)

### Requirement: Special Offers band

The system SHALL render the red striped "Special Offers" band with the
dark CTA button.

#### Scenario: Offers band renders

- **GIVEN** the listing section is rendered
- **WHEN** the user scrolls to the offers band
- **THEN** a two-column band SHALL render: a 300px image left + the **red
  diagonal-stripe band** right (`linear-gradient(129deg, #ff414d 25%,
#f03943 25% 50%, #ff414d 50% 75%, #f03943 75%)`)
- **AND** the stripe band SHALL show subheading **"Special Offers"** (14px
  uppercase 700 white) and h2 **"We Have Special Offers Every Now and
  Then"** in white 700
- **AND** a dark navy **"Show Special Offers"** button SHALL render (`#151c26`
  bg, white text, `padding: 16px 24px`; hover swaps to an outline style)

### Requirement: Our Listing grid

The system SHALL render the second listing section with eight cards in the
same card style.

#### Scenario: Eight listing cards render

- **GIVEN** the offers band is rendered
- **WHEN** the user scrolls to the next listing section
- **THEN** the heading SHALL show subheading **"Listing"** and h2 **"Our
  Listing"**
- **AND** eight listing cards SHALL render in a `col-md-6 col-lg-3` grid
  with the exact same card anatomy as the Popular Listing cards
- **AND** the category chips SHALL follow the source's order: Beauty, Bar &
  Club, Circus, Theater, Theater, Sports, Games, Places (the source reuses
  the same four names cyclically — the recreation may paraphrase the card
  titles while keeping the category chips and the same kind of content)

### Requirement: About + counters

The system SHALL render the about section with two paragraphs and four
animated counters.

#### Scenario: About section renders with counters

- **GIVEN** the Our Listing grid is rendered
- **WHEN** the user scrolls to the about section
- **THEN** a subheading **"Welcome to Borough"** and h2 **"Borough — A
  Directory & Listing"** SHALL render (the source: "Welcome to Directone" /
  "Directone A Directory & Listing" — the recreation keeps the structure
  with the renamed brand)
- **AND** two paragraphs of the source's kind of copy SHALL render (the
  "Far far away…" / "A small river named Duden…" filler text may be
  paraphrased)
- **AND** four counter cards SHALL render (bg `rgba(0,0,0,0.03)`,
  `border-radius: 4px`, `padding: 30px 20px`), each with a **40px
  `font-weight: 600` black number** and a label:
  1. **50** — Years of Experienced
  2. **210** — Total Listing
  3. **450** — Company Staf
  4. **100** — Happy People
- **AND** the numbers SHALL animate from 0 to their target when scrolled
  into view (the source uses `data-count` + JS; the recreation may use a
  small `useEffect`/IntersectionObserver — the `.number.gradient-text`
  class in the source is undefined dead CSS, so numbers are solid black)

### Requirement: Testimonial carousel

The system SHALL render the testimonial carousel with quote cards, avatars,
names, roles, and dot navigation.

#### Scenario: Testimonial slides render and navigate

- **GIVEN** the about section is rendered
- **WHEN** the user scrolls to the testimonial section
- **THEN** the heading SHALL show subheading **"Testimonial"** and h2
  **"Happy People"**
- **AND** a carousel SHALL render one card per view (the source: tiny-slider,
  5 slides; each card: white, `border-radius: 4px`, padding
  `35px 30px 30px`, shadow) with a **45px red quote circle** peeking above
  the card's top edge
- **AND** each slide SHALL show quote text (the Duden filler may be
  paraphrased), an 80px round avatar, the name **"Roger Scott"** (22px 600
  black), and the role **"Marketing Manager"** (13px uppercase `#ff414d` 600)
- **AND** dot navigation SHALL let the user move between slides
  (aria-labels on the dots — the source's tns dots are unlabeled)

### Requirement: How It Works band

The system SHALL render the dark video/step band with the pulsing play
button and four numbered step cards.

#### Scenario: How It Works renders on the dark band

- **GIVEN** the testimonial section is rendered
- **WHEN** the user scrolls to the How It Works section
- **THEN** the section SHALL render on a **dark navy `#151c26` background**
  with a subtle pattern (the source layers `curls.png`; a flat `#151c26`
  band is an acceptable equivalent) — white h2 **"How It Works"** (50px 700)
  with subheading **"Let's Find Out"** in red `#ff414d`
- **AND** a 600px video poster (`border-radius: 4px`) SHALL render with a
  centered **80px white pulsing circle** (pulse 2s infinite) containing a
  red play glyph — the play button SHALL be an accessible link/button
  (the source opens a Vimeo video via glightbox; the recreation may link the
  same or a placeholder video)
- **AND** four step cards SHALL render (`col-md-3`, bg `#f0f4f7`,
  `border-radius: 4px`, padding 30px), each with an **80px red circle icon**
  (white 45px glyph) and a step title (24px 600):
  1. **1. Choose A Category** — "A small river named Duden flows by their
     place…"
  2. **2. Find What You Want** — same kind of copy
  3. **3. Select The Best Place** — same kind of copy
  4. **4. Explore The Place** — same kind of copy
- **AND** hovering a step card SHALL flip it red with the icon circle
  turning white and the glyph turning red

### Requirement: Blog cards

The system SHALL render the "Recent Blog" section with four cards matching
the source's anatomy.

#### Scenario: Blog cards render

- **GIVEN** the How It Works band is rendered
- **WHEN** the user scrolls to the blog section
- **THEN** the heading SHALL show subheading **"Our Blog"** and h2 **"Recent
  Blog"**
- **AND** four blog cards SHALL render in a `col-md-6 col-lg-3` grid (white,
  `border-radius: 4px`, shadow `0 10px 25px -13px rgba(0,0,0,0.1)`), each
  with: a 270px image; a translucent white `.list-team` overlay at the bottom
  (34px round avatar + author **"John Dorf"** 14px 700 + heart icon); meta
  line **13px `#999999`** ("Dec. 05, 2020" + "3 Comments" link); title
  **"Explore The Best Restaurant in New York"** (20px 700); and an excerpt
  paragraph

### Requirement: Footer

The system SHALL render the dark footer with the brand, blurb, social
circles, three link columns, the contact column, and the copyright bar with
the mandatory Component Dock credit.

#### Scenario: Footer renders with all columns and credit

- **GIVEN** the blog section is rendered
- **WHEN** the user scrolls to the footer
- **THEN** the footer SHALL render on **`#10151c`** with
  `rgba(255,255,255,0.7)` text and the brand **"Borough"** (white, 31px 900)
  with the small tagline "Directory and Listing"
- **AND** three **40px red social circles** SHALL render (the source uses
  Twitter / Facebook / Instagram icon-font spans — the recreation SHALL add
  `aria-label`s; brand icons were removed from lucide-react, so use inline
  SVG glyphs)
- **AND** three link columns SHALL render with white 20px 700 titles:
  **Explore** (About Us, Account, Listing, Pricing Packages — the source
  lists "Pricing Packages" twice; the recreation SHALL list it once),
  **Quick Links** (Contact Us, Terms & Conditions, Privacy, Feedbacks),
  **Categories** (Food & Drinks, Hotels, Shopping, Beauty, Fitness, Bar &
  Club)
- **AND** a **"Have a Questions?"** column SHALL render with the address
  ("203 Fake St. Mountain View, San Francisco, California, USA"), phone
  ("+2 392 3929 210"), and email ("info@yourdomain.com") lines with red
  icons
- **AND** a dark `#151c26` copyright bar SHALL render with centered **13px**
  `rgba(255,255,255,0.5)` text: "Copyright © <current year>. All rights
  reserved." plus a **"Made with Component Dock"** line linking
  `https://www.componentdock.com/` (the source credits ColorLib — replaced
  by the monorepo mandate)

### Requirement: Responsive layout

The system SHALL reproduce the source's responsive grid behavior.

#### Scenario: Grids adapt across breakpoints

- **GIVEN** the page is rendered
- **WHEN** the viewport is at the lg breakpoint
- **THEN** the category grid SHALL show 6 cards per row and listing/blog
  grids SHALL show 4 cards per row
- **AND** at the md breakpoint the category grid SHALL show 3 per row and
  listing/blog grids 2 per row
- **AND** below md every grid SHALL stack full-width, the hero h1 SHALL drop
  to 40px, and the section paddings SHALL tighten
- **AND** the navbar SHALL collapse to the "Menu" toggler and the Special
  Offers stripe band SHALL stack below the intro image

### Requirement: Accessibility

The system SHALL expose semantic landmarks, accessible names on all
icon-only controls, a labeled select, and keyboard-operable interactivity.

#### Scenario: Screen reader exposure

- **GIVEN** the page is rendered
- **WHEN** assistive technology inspects the page
- **THEN** the page SHALL have a `<nav>` landmark, a main landmark, and a
  semantic `<footer>` landmark
- **AND** all icon-only controls SHALL have `aria-label`s (search field
  icons, listing magnifier, heart links, testimonial dots, video play
  button, footer social circles)
- **AND** the category select SHALL have an accessible label and the
  carousel SHALL expose its slides to assistive tech
- **AND** all interactive elements SHALL be focusable with a visible
  focus-visible ring

## Verification checklist

- [ ] `npm run verify:app borough` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Document title "Borough — Directory & Listing"; main + nav + footer
      landmarks
- [ ] Navbar: transparent over hero, brand "Borough" + "Directory and
      Listing" tagline, Home/About/Listing/Blog/Contact (13px 700 uppercase
      ls-2px), active Home in `#ff414d`, red "Add Listing" button, "Menu"
      toggler below lg
- [ ] Hero: 100vh city-photo bg + black overlay 0.3, h1 64px white 700
      (40px below lg), subtext, white search bar (radius 5px, 4 columns) —
      "What are you looking for?" / "Search Location" / "All Categories"
      select (13 options, labeled) / red Search button (radius 4px)
- [ ] Category grid: 12 white cards (radius 4px, padding 30px) overlapping
      the hero (-80px), red 60px glyphs (NO circle), 20px 600 names, red
      count chips, Hotels card active (solid red), red hover state
- [ ] Popular Listing: 4 cards (white, 0px radius, shadow, image 250px +
      magnifier, chip, red circle icon, 22px 600 title, address/phone, Review
      5.0/5 (100) + heart) — Japanese Restaurant / Harbor Lights Hotel / MS
      Center Mall of Asia / Maxout Fitness Gym
- [ ] Special Offers: image + red diagonal-stripe band, white subheading +
      h2, dark `#151c26` "Show Special Offers" button
- [ ] Our Listing: 8 cards, same anatomy, chips Beauty/Bar & Club/Circus/
      Theater/Theater/Sports/Games/Places
- [ ] About: subheading + h2, two paragraphs, 4 counters (50/210/450/100,
      40px 600 black) animating on scroll, labels per source
- [ ] Testimonial: "Happy People" carousel, 1-per-view, 45px red quote
      circle, avatar + Roger Scott / Marketing Manager, labeled dots
- [ ] How It Works: `#151c26` dark band, white h2 + red subheading, 600px
      video poster with pulsing white 80px play circle, 4 `#f0f4f7` step
      cards with red 80px circles, red hover state
- [ ] Blog: 4 cards (radius 4px, image 270px + list-team overlay, meta
      13px #999, 20px 700 title, excerpt)
- [ ] Footer: `#10151c`, brand + blurb, 3 red social circles (aria-labels,
      inline SVG brand glyphs), Explore/Quick Links/Categories columns
      (Pricing Packages ONCE), "Have a Questions?" contact column, copyright
      bar `#151c26` with Component Dock link
      `https://www.componentdock.com/`
- [ ] Fonts: Nunito Sans via Google Fonts `<link>` in `index.html`
- [ ] Images: picsum placeholders (`https://picsum.photos/seed/borough-<n>/…`)
      for hero, listing cards, intro, video poster, blog, avatars — NO
      ColorLib assets
- [ ] NO ColorLib reference anywhere in `apps/borough` (provenance lives
      only here + TEMPLATES.md + PR)
- [ ] TEMPLATES.md bookkeeping: BOTH Directone rows (lines 573 AND 1525) →
      `[x]` + surge URL `https://borough.free.componentdock.com` +
      `npm run readme:status`
