# Template: Skylark (Travel / Flight Booking Template)

## Purpose

Skylark is a single-page travel & flight booking website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Flyplane" template design (see TEMPLATES.md — appears 2×:
lines 582, 2982; both rows point to the same source, one prep covers all;
verified with `grep -c 'wp/template/flyplane/'` = 2), built under a
DIFFERENT name (Skylark — a bird of flight, per the monorepo naming
mandate) with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Flyplane" — travel/flight booking template
  (source: https://colorlib.com/wp/template/flyplane/). `<title>`:
  "Flyplane | Template".
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/flyplane/
  (HTTP 200, ~49 KB HTML fetched + parsed; `css/style.css` ~53.9 KB parsed
  for tokens; vendor sheets: bootstrap.min, font-awesome, elegant-icons
  (icon font for pin/phone/mail/calendar/social glyphs), barfiller,
  magnific-popup, nice-select, slick, datepicker.min, owl.carousel.min,
  slicknav.min). Site is jQuery + owl-carousel (feature slider) + slick
  (gallery slider) + slicknav (mobile menu) + nice-select (Guests select) +
  datepicker — NOT Tailwind.
- **Screenshot analyzed:** `flyplane-free-template.jpg` (1200×946,
  TEMPLATES.md line 582, verified via browser vision) — full-width hero
  photo from inside a plane cockpit overlooking mountains; centered white
  headline "Let's Make Your Best Trip Ever", white subtext, a white
  "DISCOVER NOW" button; a white search widget overlaid on the hero bottom
  (Where / Date / Guests fields + blue "SEARCH PLANE" button). Thin dark
  top strip with contact info (address, phone, email) + social icons
  right; white navbar below with "FlyPlane" logo (blue airplane icon) and
  uppercase links HOME, PAGES, BLOG, ABOUT US, CONTACTS. Below: "Special
  Offers" section with three destination photo cards; clean, adventurous,
  premium-travel aesthetic — white sections, high-quality photography,
  single periwinkle-blue accent (#4657F0) on white/navy.
- **Section order (1:1, from live preview DOM):**
  1. Header (`header.header`, `position: absolute; top: 0; width: 100%`) —
     top bar (`div.header__top`, white 15px text, dark overlay over the
     hero photo): address "84 Forest Ave, Lake Grove, New York" (pin icon),
     phone "(+12) 345-678-91012" (phone icon), email
     "contact.colorlib@gmail.com" (mail icon) on the left; 4 social icon
     links right (facebook, twitter, youtube, skype). Below it the options
     bar (`div.header__options`, white bg): logo left, menu right
     (`nav.header__menu`): Home (active), Pages ▾ (dropdown: Places, Places
     Details, Blog Details), Blog, About Us, Contacts — links 15px / 800 /
     uppercase #1D2A3B, padding 33px 30px 26px; active + hover bg
     `rgba(29,42,59,.1)` with a bottom underline bar (`a:after`).
  2. Hero (`section.hero.spad.set-bg`, bg image `img/hero.jpg`, padding-top
     315px / bottom 235px) — `div.hero__text` centered (max-width 750px):
     `h2` 75px/700 white "Let's Make Your Best Trip Ever", `p` 20px white
     "Plan and book your perfect trip with expert advice, travel tips,
     destination information and inspiration from us.", `a.primary-btn`
     "Discover Now" — white bg, #1D2A3B text, 15px / 700 / uppercase /
     letter-spacing 2px / padding 14px 32px 12px.
  3. Filter search (`div.filter-search`, `margin-top: -60px` — white form
     overlapping the hero bottom) — `form.filter__form` (white bg, shadow
     `0 20px 30px rgba(29,42,59,.1)`): three fields + submit: "Where"
     (h5 label + input placeholder "Center Point, Lo…" + right-aligned blue
     pin icon; input 38px, borderless, bottom border
     `1px rgba(29,42,59,.1)`, text #1D2A3B), "Date" (input placeholder
     "09th March, 2021" + blue calendar icon, datepicker), "Guests"
     (select: 05 / 06 / 04 / 08); submit `button` "Search Plane" — bg
     #4657F0, white text, 700 / uppercase / letter-spacing 2px.
  4. Special Offers (`section.hotPlaces.spad`, white) — header row: left
     `div.section-title` h2 "Special Offers" (50px/700 #1D2A3B,
     padding-bottom 30px, `:before` 80×6px #4657F0 bar bottom-left), right
     paragraph (20px). Body: 3 `div.places__item.hotPlaces__item` cards
     (col-lg-4, shadow `0 20px 30px rgba(29,42,59,.1)`): photo, `h4` title
     link "Known monument in the black hills of south" (20px/700 #1D2A3B),
     `p` 13px with blue pin icon + "Lake Grove, New York", blue price badge
     `div.price` "$120" (13px/700 #4657F0, bg `rgba(70,87,240,.1)`,
     padding 6px 12px 3px, absolute right 35px bottom 20px).
  5. Our Benefit (`section.benefit.spad`, bg #f4f8fb) — left `col-lg-6`
     `div.benefit__content`: section-title h2 "Our Benefit" + paragraph;
     2×2 grid of `div.benefit__item` (icon img 40px + `h4` 700 #1D2A3B +
     p): Personal Schedule, Luxury Interiors, Safe & Confidential,
     Professional Crew. Right `col-lg-6` `div.benefit__pic`: 2×2 photo
     grid (4 images).
  6. Feature Places (`section.feature.spad`, white) — centered
     `div.section-title.center_title` h2 "Feature Places" + centered
     paragraph; `div.feature__slider` (owl-carousel) of 5+ `div.feature__item`
     (col-lg-3): photo + overlapping white text box (`background #fff`,
     `width calc(100% - 60px)`, margin-top -30px, centered,
     shadow `0 20px 25px rgba(29,42,59,.1)`, padding 20px 25px): rating row
     "4.5" + yellow star (#F9B71C) + "(120k Rating)" (15px/700 #1D2A3B),
     `h5` link: blue pin icon + destination + arrow-right icon — "Phuket,
     Thailand", "Positano, Italy", "Bali, Indonesia" (+ repeats).
  7. Destination Gallery (`section.gallery.spad.set-bg`, bg
     `img/gallery/gallery-bg.jpg`, height 682px) — centered title
     "Destination Gallery" + paragraph; `div.gallery__pic__slider` (slick):
     photo slides each with huge white `h1` country name (130px/700,
     uppercase, letter-spacing 8px): America, Slovakia, Canada, Japan,
     Italy, Singapore, China, Australia, Austria, Bangladesh, Spain;
     bottom white controls bar (`div.gallery__controls`, white bg, absolute
     bottom): 11 `h5` country items (20px/700 #1D2A3B).
  8. News Latest (`section.latest.spad`, white) — left `col-lg-4`:
     section-title h2 "News Latest" + 3 `a.latest__recent__item` rows
     (thumb 90px photo + meta `ul` li "Travel" / "By Admin" + `h5` 20px/700
     #1D2A3B "The point of using Lorem psum is that it has..."). Right
     `col-lg-8`: 2 `div.blog__item` cards (col-lg-6): photo, `div.blog__date`
     badge "Oct 28, 2020" (white 13px/700, letter-spacing 2px, overlapping
     image top -16px), meta ul (Travel / By Admin), `h5` title link.
  9. Footer (`footer.footer.spad`, bg #191B26, padding 80px 0) — centered
     `col-lg-7`: footer logo, about paragraph, 4 social circle links
     (55px white circles, 20px #747E8C icons, border-radius 50%, hover →
     blue), nav links inline (Home, Pages, Blog, About Us, Contacts,
     margin-right 60px), copyright line white → replaced by the Component
     Dock attribution link.
- **Design tokens extracted from the preview CSS (computed values verified
  in the stylesheet):**
  - Font: **"Nunito Sans", sans-serif** (body; all headings inherit).
  - Ink/navy: **#1D2A3B** — section-title h2, menu links, card title links,
    rating text, hero button text, input text/placeholder.
  - Primary blue: **#4657F0** — section-title underline bar (80×6px `:before`),
    pin/calendar field icons, price badge text, Search Plane button bg,
    places-item location pin icon; badge bg `rgba(70,87,240,.1)`.
  - Star yellow: **#F9B71C** — feature rating star.
  - Muted: **#747E8C** — footer social icons.
  - Light band: **#f4f8fb** — benefit section bg.
  - Footer: **#191B26** bg, white text, white social circles.
  - Active/hover nav: bg `rgba(29,42,59,.1)` + bottom bar underline.
  - Shadows: `0 20px 30px rgba(29,42,59,.1)` (filter form, places cards);
    `0 20px 25px rgba(29,42,59,.1)` (feature card text box).
  - Inputs: borderless with `border-bottom: 1px solid rgba(29,42,59,.1)`,
    38px, 15px, #1D2A3B.
  - Buttons: sharp (radius 0), uppercase, 700, letter-spacing 2px —
    `primary-btn` white bg / #1D2A3B text / padding 14px 32px 12px;
    search submit #4657F0 bg / white text / padding 10px.
  - Radii: 0 everywhere except 50% social circles.
- **Recreation decisions:** all photos → seeded picsum
  (`https://picsum.photos/seed/skylark-<n>/<w>/<h>`): hero skylark-1,
  special-offer cards skylark-2..4, benefit photos skylark-5..8, feature
  cards skylark-9..13, gallery slides skylark-14..24, news thumbs
  skylark-25..27, blog cards skylark-28..29, gallery bg skylark-30; icons →
  lucide-react (MapPin, Phone, Mail, Facebook, Twitter, Youtube, MessageCircle,
  Calendar, Star, ArrowRight, Menu); font Nunito Sans (400/700/800) via
  Google Fonts `<link>` in `index.html`; feature + gallery sliders are
  state-based carousels (no new deps); datepicker → plain input (no dep);
  mobile menu via state + aria-expanded; footer ColorLib credit → Component
  Dock attribution (`https://www.componentdock.com/`). Tokens #1D2A3B /
  #4657F0 / #F9B71C / #747E8C / #f4f8fb / #191B26 in `@theme`. Brand
  "Flyplane" → "Skylark" everywhere (logo, document title).

Skylark lives in `apps/skylark` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Header

The system SHALL render a top info bar (contact info + social icons) over the
hero and a white options bar with the logo and a dropdown-capable nav menu.

#### Scenario: Top info bar

- **GIVEN** the Skylark page is rendered at the top of the page
- **WHEN** the page loads
- **THEN** a thin top bar SHALL overlay the hero photo with white 15px text
- **AND** it SHALL show the address "84 Forest Ave, Lake Grove, New York"
  (pin icon), phone "(+12) 345-678-91012" (phone icon), and email
  "contact.colorlib@gmail.com" (mail icon) on the left
- **AND** four social icon links (facebook, twitter, youtube, skype) SHALL
  sit on the right

#### Scenario: Options bar and menu

- **GIVEN** the header is rendered
- **WHEN** the page loads
- **THEN** a white bar SHALL show the "Skylark" logo on the left and the
  uppercase 800-weight nav links Home (active), Pages, Blog, About Us, and
  Contacts on the right, in #1D2A3B
- **AND** the active link and hovered links SHALL get the
  `rgba(29,42,59,.1)` background with a bottom underline bar

#### Scenario: Pages dropdown

- **GIVEN** the nav menu is rendered
- **WHEN** the user activates the Pages link
- **THEN** a dropdown SHALL open listing Places, Places Details, and Blog
  Details
- **AND** the trigger SHALL expose `aria-expanded` and close on outside
  click or Escape

#### Scenario: Mobile menu

- **GIVEN** a narrow viewport
- **WHEN** the user opens the mobile menu toggle
- **THEN** a slide-over menu SHALL open with the same links (including the
  Pages submenu) and a visible close control
- **AND** it SHALL close when a link is chosen or the close control is
  clicked

### Requirement: Hero

The system SHALL render a full-width photo hero with a centered white
headline, subtext, and a white CTA button.

#### Scenario: Hero content

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL show a full-width background photo with generous
  top/bottom padding
- **AND** the centered headline "Let's Make Your Best Trip Ever" SHALL
  render in white 75px/700 (scaling down on smaller viewports)
- **AND** the white 20px paragraph about planning a perfect trip SHALL
  follow
- **AND** a white "Discover Now" button (bg #ffffff, text #1D2A3B,
  uppercase, letter-spacing 2px) SHALL render below

### Requirement: Filter search

The system SHALL render a white search form overlapping the hero bottom with
Where, Date, and Guests fields and a blue Search Plane submit button.

#### Scenario: Search form content

- **GIVEN** the filter search form is rendered
- **WHEN** the page loads
- **THEN** a white form SHALL overlap the hero bottom (negative top margin,
  shadow `0 20px 30px rgba(29,42,59,.1)`)
- **AND** it SHALL contain a "Where" field (input "Center Point, Lo…" with a
  blue pin icon), a "Date" field (input "09th March, 2021" with a blue
  calendar icon), and a "Guests" select with options 05, 06, 04, 08
- **AND** the inputs SHALL be borderless with a 1px bottom border and #1D2A3B
  text
- **AND** a blue "Search Plane" submit button (bg #4657F0, white uppercase
  700 text, letter-spacing 2px) SHALL submit the form

### Requirement: Special Offers

The system SHALL render a "Special Offers" section with a title + intro
row and three destination cards with photo, title, location, and price
badge.

#### Scenario: Special Offers content

- **GIVEN** the Special Offers section is rendered
- **WHEN** the page loads
- **THEN** the left-aligned 50px heading "Special Offers" SHALL render with
  the 80×6px #4657F0 underline bar and an intro paragraph to its right
- **AND** three cards SHALL render in a responsive 3-column grid, each with
  a photo, a 20px bold #1D2A3B title link ("Known monument in the black
  hills of south"), a location line with a blue pin icon ("Lake Grove, New
  York"), and a blue price badge ("$120", #4657F0 text on
  `rgba(70,87,240,.1)`) at the card bottom-right
- **AND** the cards SHALL carry the shadow `0 20px 30px rgba(29,42,59,.1)`

### Requirement: Our Benefit

The system SHALL render an "Our Benefit" section on the #f4f8fb band with a
2×2 benefit grid and a 2×2 photo grid.

#### Scenario: Benefit content

- **GIVEN** the benefit section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL have the #f4f8fb background with the heading
  "Our Benefit" and a lead paragraph on the left
- **AND** a 2×2 grid of benefit items SHALL render (icon image + bold
  #1D2A3B heading + paragraph): Personal Schedule, Luxury Interiors, Safe &
  Confidential, Professional Crew
- **AND** the right half SHALL show a 2×2 grid of four photos

### Requirement: Feature Places

The system SHALL render a "Feature Places" section with a centered title
and a carousel of destination cards (photo + overlapping rating/destination
text box).

#### Scenario: Feature Places content

- **GIVEN** the Feature Places section is rendered
- **WHEN** the page loads
- **THEN** the centered heading "Feature Places" SHALL render with the
  centered #4657F0 underline bar and a paragraph
- **AND** a carousel SHALL cycle at least five cards, each with a photo and
  an overlapping centered white text box (negative top margin, shadow
  `0 20px 25px rgba(29,42,59,.1)`)
- **AND** each text box SHALL show a rating row "4.5" with a yellow
  (#F9B71C) star and "(120k Rating)", plus a destination link with a blue
  pin icon and arrow (Phuket, Thailand / Positano, Italy / Bali, Indonesia)
- **AND** Prev/Next controls and/or dot pagination SHALL step through the
  slides

### Requirement: Destination Gallery

The system SHALL render a photo-backed "Destination Gallery" section with a
slider of huge country-name slides and a white controls bar.

#### Scenario: Gallery content

- **GIVEN** the gallery section is rendered
- **WHEN** the page loads
- **THEN** the centered heading "Destination Gallery" SHALL render over the
  background photo with a paragraph
- **AND** a slider SHALL cycle photo slides, each overlaid with a huge
  white uppercase country name (130px, letter-spacing 8px): America,
  Slovakia, Canada, Japan, Italy, Singapore, China, Australia, Austria,
  Bangladesh, Spain
- **AND** a white controls bar at the bottom SHALL list the countries as
  20px bold #1D2A3B items, with the active item visually distinct, and
  clicking one SHALL switch the slide

### Requirement: News Latest

The system SHALL render a "News Latest" section with recent-post rows on the
left and two blog cards on the right.

#### Scenario: News content

- **GIVEN** the News Latest section is rendered
- **WHEN** the page loads
- **THEN** the left column SHALL show the heading "News Latest" and three
  recent-post rows (thumbnail + Travel / By Admin meta + 20px bold title)
- **AND** the right column SHALL show two blog cards (photo, an
  overlapping "Oct 28, 2020" date badge, Travel / By Admin meta, and a bold
  title link)

### Requirement: Footer

The system SHALL render a dark footer with logo, about text, social
circles, nav links, and a copyright bar with the Component Dock
attribution.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL have the #191B26 background with the centered
  logo and about paragraph
- **AND** four circular white social icon links (55px circles, #747E8C
  icons) SHALL render
- **AND** inline nav links SHALL list Home, Pages, Blog, About Us, Contacts
- **AND** the copyright bar SHALL show the Component Dock attribution link
  (https://www.componentdock.com/)

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Skylark app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, the
  hero, filter search, Special Offers, Our Benefit, Feature Places,
  Destination Gallery, and News Latest sections in the main landmark, and
  the footer in the contentinfo landmark
- **AND** the document title SHALL be "Skylark — Travel Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/skylark` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- skylark` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; tokens (#1D2A3B, #4657F0, #F9B71C, #747E8C, #f4f8fb, #191B26, Nunito Sans) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `skylark-<n>`, Google Fonts link, lucide icons only)
- [ ] Feature + gallery sliders implemented with client-side state, no new deps
- [ ] Filter form submits (Where / Date / Guests + Search Plane button); date field is a plain input
- [ ] Pages dropdown + mobile menu accessible (aria-expanded, Escape, outside click)
- [ ] Footer bottom bar carries the Component Dock attribution link
