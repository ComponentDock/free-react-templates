# Template: Sizzle (Restaurant Template)

## Purpose

Sizzle is a restaurant one-pager in the free-react-templates monorepo. It is an
original React recreation of the ColorLib free "Marco" template design (see
TEMPLATES.md — appears 2×: lines 444 and 2686; both rows point to the same
source and are `- [ ]` — one prep covers both, mark ALL `[x]` when done;
verified with `grep -c 'wp/template/marco/'` = 2), built under a DIFFERENT
name (Sizzle — evokes hot food off the grill, fitting the restaurant theme;
single lowercase word, no collision with `apps/` or existing spec folders;
verified: no `apps/sizzle`, no `template-sizzle` spec, no `docs/templates/sizzle`)
per the monorepo naming mandate (never reuse the ColorLib source name), with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/marco/ (Restaurant category).
Preview URL: https://preview.colorlib.com/theme/marco/ (HTTP 200, ~31 KB
HTML + `css/main.css` ~47 KB fetched and parsed — the preview slug matches
the TEMPLATES.md slug, no alias).

## Design reference (replication findings)

- **Original:** ColorLib "Marco" — a warm, appetizing RESTAURANT / CAFÉ
  one-pager. A fixed transparent header floats over a dark charcoal hero of
  overhead food ingredients; the brand is a vivid red `#f42f2c` used for the
  circular logo badge, the flat rectangular CTA buttons, the price text on
  menu cards, the active filter pill, and the ENTIRE footer widget band.
  Body copy is Poppins 300 on white/`#f9f9ff` light sections. Sections:
  hero → about story → coffee menu with filter pills → reservation form →
  food gallery with filters → testimonial carousel → blog cards → red footer.
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/marco/
  (HTTP 200, ~31 KB HTML; `css/main.css` ~47 KB parsed for tokens).
  The site is jQuery + Bootstrap + Owl Carousel (reviews) + NiceSelect
  (reservation select) + Magnific Popup + Linearicons, NOT Tailwind. All
  interactivity must be recreated client-side in React.
- **Screenshot note:** `marco-free-template.jpg` (1200×946, viewed in the
  browser): dark textured charcoal hero with an overhead shot of fresh
  ingredients (red chili peppers, zucchini, garlic, potatoes, wooden boards),
  a circular red "MARCO" logo centered at the top with white uppercase nav
  (HOME ABOUT MENU GALLERY BLOG PAGES CONTACT), small uppercase eyebrow
  "WIDE OPTIONS OF CHOICE", large "Delicious Recipes" headline (serif/sans
  mix in the screenshot — the real CSS is all Poppins), a red flat
  "CHECK OUR MENU" button; below the fold a clean white "About Our Story"
  two-column row with a burger photo. The live rendered page + parsed
  stylesheet are the authoritative reference.

### Design tokens (extracted from `css/main.css`)

- **Brand (vivid red):** `#f42f2c` — `::selection`, `.primary-btn` bg,
  `.single-menu .price`, nav link hover, `.filters li.active` bg, `.footer-
widget-wrap` bg, footer subscribe `.genric-btn` bg, `.review-area` dot
  active, `.footer-bottom .social-icons li a:hover`, `.footer-text a/i`,
  `.single-blog:hover h4`, link hovers.
- **Ink (near-black):** `#222` — `h1–h6` color (Poppins 600), `.filters li`
  text, `.banner-content .primary-btn:hover` bg, `.footer-bottom-wrap` bg.
- **Body text:** `#777` — `body` (Poppins 300, 14px, line-height 1.625em).
- **Canvas / section bgs:** white `#fff` (cards, filter wrap, form wrap),
  `#f9f9ff` (light lavender — `.menu-area`, `.gallery-area`), dark overlays
  `rgba(17,22,24,0.75)` (reservation), `rgba(34,34,34,0.9)` (header on
  scroll), `#000` (blog date chip), `#111` (footer social icon bg).
- **Fonts (Google Fonts `<link>` in index.html):** `"Poppins", sans-serif`
  everywhere — headings weight 600 (`h1` 36px default; hero h1 60px 700),
  body 300.
- **Buttons — all radius 0 (flat/square):** `.primary-btn` (bg `#f42f2c`,
  white text, uppercase, 14px/500, padding `0 30px`, line-height 42px,
  `border:none`, 0.3s transition). Variants: banner button hover → bg `#222`;
  about button hover → red glow `box-shadow:0px 20px 20px 0px
rgba(245,63,81,0.2)`; reservation button `text-transform:capitalize`;
  footer subscribe `.genric-btn` radius 57px (pill).
- **Filter pills (menu + gallery):** `.filter-wrap` white, `border-radius:
10px`, `box-shadow:0px 10px 30px 0px rgba(153,153,153,0.2)`; `li` 12px/500
  `#222`, right border `#edf6ff`; `li.active` → bg `#f42f2c`, white text.
- **Cards:** `.single-menu` white, `border-radius:10px`, `padding:30px`,
  `margin-top:20px`; title+price row (`title-wrap`), price `#f42f2c`;
  `.filters-content .item img` radius 10px. `.single-gallery img` full
  width, hover `opacity:.8`. `.single-blog .thumb img` scales to 1.1 on
  hover; `.single-blog .date` chip bg `#000`, white 100 text, `padding:2px
15px`, width 115px, centered.
- **Section rhythm:** `.section-gap` padding `120px 0`.
- **Header:** `#header` fixed, transparent over hero; `.header-scrolled` →
  `background-color:rgba(34,34,34,0.9)` and hides `.header-top`; nav links
  white 12px/500 uppercase, hover `#f42f2c`; dropdowns white bg with
  `box-shadow:0px 0px 30px rgba(127,137,161,0.25)`; mobile panel bg
  `rgba(0,0,0,0.8)`.
- **Reservation form:** `.form-wrap` white, `padding:100px 40px`;
  `.form-control` radius 0, `border-color:#eee`, 13px/300, color `#999999`.
- **Reviews:** `.single-review` centered; quote italic, `max-width:555px`;
  star `.checked` color `#ffc000`; owl dots 10×10
  `rgba(244,47,44,0.2)`, active bg `#f42f2c`.
- **Footer:** widget wrap bg `#f42f2c` (white text; `h4` white; phone
  `.number` 24px/600 white); newsletter input radius 20px bg `#f9f9ff`;
  `.hr-list li` bottom border `rgba(238,238,238,0.3)`; footer-bottom bg
  `#222` (copyright + social icons 35×35 bg `#111`, hover bg `#f42f2c`).

### Section structure (from the live DOM, top to bottom)

1. `header#header` (fixed, transparent over hero):
   - `div.header-top` (centered): `div#logo` — circular red logo badge
     (recreate as a circular red "Sizzle" mark).
   - `div.main-menu` (centered): `nav#nav-menu-container > ul.nav-menu` —
     Home, About, Menu, Gallery, Blog (submenu: Blog Home, Blog Single),
     Pages (submenu: Elements, Level 2 → Item One, Item Two), Contact.
   - On scroll: `header-scrolled` → `rgba(34,34,34,0.9)`, header-top hidden.
   - `div.mobile_menu` — hamburger for <991px (client-side toggle,
     `aria-expanded`), slide-in panel `rgba(0,0,0,0.8)`.
2. `section.banner-area` (bg photo `hero-bg.jpg` cover):
   `div.banner-content` — `h6` "Wide Options of Choice" (uppercase, 300,
   letter-spacing 2px), `h1` "Delicious Recipes" (60px 700), `p` lorem
   (max-width 515px), `a.primary-btn.text-uppercase` "Check Our Menu"
   (href → #menu; hover bg `#222`).
3. `section.home-about-area.section-gap` (white, two columns):
   - left `div.home-about-left`: `h1` "About Our Story", `p` ("Who are in
     extremely love with eco friendly system…"), `a.primary-btn` "view full
     menu" (hover → red glow shadow).
   - right `div.home-about-right`: image (`about-img.jpg` — burger/food
     photo).
4. `section.menu-area.section-gap` (id="menu", bg `#f9f9ff`):
   - centered `h1` "What kind of Foods we serve for you" + subtitle `p`.
   - `div.filter-wrap.filters` pills: All Menu, Breakfast, Lunch, Dinner,
     Budget Meal, Buffet (active pill bg `#f42f2c`).
   - 6 `div.single-menu` cards (2 rows × 3, `col-lg-4`): image + `div.title-
wrap` (h4 name + span.price) + `p` description: Cappuccion, Americano,
     Macchiato, Mocha, Piccolo Latte, Ristretto — each `$49` (coffee menu;
     VARY the demo's repeated `$49`/copy slightly per card).
5. `section.reservation-area.section-gap.relative` (bg photo
   `reservation-bg.jpg` + `div.overlay-bg` `rgba(17,22,24,0.75)`):
   - left `div.reservation-left`: `h1` "Reserve Your Seats to Confirm if You
     Come with Your Family" (white) + `p` lorem.
   - right `div.reservation-right > div.form-wrap` (white, `padding:100px
40px`): `input` "Your Name", `input` "Your Email Address", `input`
     "Phone Number", `input` "Select Date & time" (date picker), `select`
     "Select Event" (Event One–Four), `a.primary-btn.text-uppercase`
     "Make Reservation" (client-side validation + success state).
6. `section.gallery-area.section-gap` (bg `#f9f9ff`):
   - centered `h1` "Food and Customer Gallery".
   - `div.filter-wrap.filters` pills (same 6 as menu).
   - 6 `div.single-gallery` images (radius 10px, hover opacity .8).
7. `section.review-area.section-gap` (bg photo `review-bg.jpg` cover):
   owl carousel of 4 `div.single-review` — avatar image, star rating
   (`#ffc000`), italic quote (max-width 555px), `h4` name "Hulda Sutton"
   (VARY names); dots 10px, active `#f42f2c`; client-side cycling.
8. `section.blog-area.section-gap`: centered `h1` "Latest From Our Blog";
   4 `div.single-blog` cards (`col-lg-3`): `div.thumb` image (hover zoom
   1.1), `p.date` chip "10 Jan 2018" (`#000` bg), `h4` title (hover
   `#f42f2c`), `p` excerpt, `div.meta-bottom` — "15 Likes" + "02 Comments"
   (VARY numbers). Titles: "Cooking Perfect Fried Rice in minutes", "Secret
   of making Heart Shaped eggs", "How to check steak if it is tender or
   not", "Seaseme and black seed Flavored Bun Rocks".
9. `footer.footer-area`:
   - `div.footer-widget-wrap` (bg `#f42f2c`, white text): 3 columns —
     `div.single-footer-widget` "Opening Hours" (`ul.hr-list`: Monday–
     Friday / Saturday / Sunday, all "08.00 am - 10.00 pm"), "Contact Us"
     (address "56/8, los angeles, rochy beach, Santa monica, United states
     of america - 1205" + two phone numbers `.number` 24px/600 white),
     "Newsletter" ("You can trust us. we only send promo offers, not a
     single spam." + email input radius 20 + subscribe button radius 57).
   - `div.footer-bottom-wrap` (bg `#222`): `div.footer-bottom` — copyright
     "Copyright © <year> All rights reserved" + social icons (35×35,
     bg `#111`, hover `#f42f2c`) — the original "made with by Colorlib"
     credit is REPLACED with the mandatory Component Dock link
     (https://www.componentdock.com/).

## Requirements

### Requirement: Header (fixed transparent nav + scroll state + mobile menu)

The system SHALL render a fixed header that floats transparently over the
hero, darkens on scroll, and provides a responsive nav.

#### Scenario: Header content

- **GIVEN** the Sizzle app is rendered
- **WHEN** the page loads
- **THEN** the header SHALL be fixed at the top, transparent over the hero
- **AND** SHALL show a centered circular red logo badge ("Sizzle") on the
  top row
- **AND** SHALL show the centered nav links Home, About, Menu, Gallery,
  Blog (submenu: Blog Home, Blog Single), Pages (submenu: Elements, Level 2
  → Item One, Item Two), Contact — white 12px uppercase, hover `#f42f2c`

#### Scenario: Scroll state

- **GIVEN** the user scrolls past the hero
- **WHEN** the header enters the scrolled state
- **THEN** the header SHALL get a `rgba(34,34,34,0.9)` background
- **AND** the logo top row SHALL be hidden

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrower than the desktop breakpoint
- **WHEN** the user opens the hamburger toggle
- **THEN** the nav SHALL be shown in a slide-in panel with an
  `aria-expanded` toggle and the links SHALL remain usable

### Requirement: Hero banner

The system SHALL render a full-width hero with a background photo, an
eyebrow, a headline, a paragraph, and one CTA.

#### Scenario: Banner content

- **GIVEN** the hero section is rendered
- **WHEN** the user is at the top of the page
- **THEN** the hero SHALL show a full-width food-ingredient background photo
  (cover)
- **AND** SHALL contain the h6 eyebrow "Wide Options of Choice" (uppercase,
  letter-spacing 2px), the h1 "Delicious Recipes" (60px 700), a paragraph
  (max-width 515px)
- **AND** SHALL show a flat red "Check Our Menu" button (white uppercase
  text, radius 0) that anchors to the menu section
- **AND** the banner button SHALL turn `#222` on hover

### Requirement: About section

The system SHALL render a two-column about section with a heading, copy, a
button, and an image.

#### Scenario: About layout

- **GIVEN** the about section is rendered
- **WHEN** the user scrolls to it
- **THEN** the left column SHALL show the h1 "About Our Story", a paragraph,
  and a "view full menu" primary button (hover → red glow shadow)
- **AND** the right column SHALL show a food photograph

### Requirement: Menu section with filter pills

The system SHALL render a light `#f9f9ff` menu section with filter pills
and coffee menu cards.

#### Scenario: Menu content

- **GIVEN** the menu section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL have a `#f9f9ff` background and the h1 "What
  kind of Foods we serve for you"
- **AND** SHALL show six filter pills (All Menu, Breakfast, Lunch, Dinner,
  Budget Meal, Buffet) in a white pill-wrap (radius 10px, soft shadow); the
  active pill SHALL be `#f42f2c` with white text
- **AND** SHALL show six white cards (radius 10px, padding 30px), each with
  an image, a coffee name, a `#f42f2c` price, and a description (Cappuccion,
  Americano, Macchiato, Mocha, Piccolo Latte, Ristretto)
- **AND** clicking a filter SHALL show only the matching cards

### Requirement: Reservation section

The system SHALL render a photo-background reservation section with a dark
overlay, a heading, and a white form.

#### Scenario: Reservation form

- **GIVEN** the reservation section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show a background photo with a
  `rgba(17,22,24,0.75)` overlay
- **AND** the left column SHALL show the h1 "Reserve Your Seats to Confirm
  if You Come with Your Family" and a paragraph (white text)
- **AND** the right column SHALL show a white form panel (padding 100px 40px)
  with inputs "Your Name", "Your Email Address", "Phone Number", "Select
  Date & time", a "Select Event" dropdown (Event One–Four), and a flat red
  "Make Reservation" button
- **AND** SHALL validate the required fields and show a success message on
  submit without navigating away

### Requirement: Gallery section

The system SHALL render a light gallery section with filter pills and a
photo grid.

#### Scenario: Gallery content

- **GIVEN** the gallery section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL have a `#f9f9ff` background and the h1 "Food
  and Customer Gallery"
- **AND** SHALL show the same six filter pills as the menu section
- **AND** SHALL show six food photos (radius 10px, hover opacity .8)
- **AND** clicking a filter SHALL show only the matching photos

### Requirement: Reviews carousel

The system SHALL render a photo-background testimonial carousel with
avatar, star rating, quote, and name.

#### Scenario: Review content

- **GIVEN** the review section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show a cover background photo
- **AND** SHALL cycle through 4 reviews (client-side), each with an avatar
  image, a star rating (`#ffc000`), an italic quote (max-width 555px), and
  a name (vary the demo's repeated "Hulda Sutton")
- **AND** SHALL show circular dots, the active one `#f42f2c`

### Requirement: Blog section

The system SHALL render a "Latest From Our Blog" section with four cards.

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section-tittle SHALL read "Latest From Our Blog"
- **AND** SHALL show four cards, each with a thumbnail (hover zoom), a
  black date chip (e.g. "10 Jan 2018"), a title (hover `#f42f2c`), an
  excerpt, and a Likes/Comments meta row (content varied between cards)

### Requirement: Footer

The system SHALL render a red footer widget band with Opening Hours,
Contact Us, and Newsletter columns, plus a dark bottom bar.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** the widget band SHALL have a `#f42f2c` background with white text
  and three columns: "Opening Hours" (day/time rows with hairline
  dividers), "Contact Us" (address + two phone numbers 24px/600), and
  "Newsletter" (promise copy + email input + subscribe button)
- **AND** the bottom bar SHALL have a `#222` background with the copyright
  line, social icon links (35px, `#111` bg, hover `#f42f2c`)
- **AND** the "made with" credit line SHALL link Component Dock
  (https://www.componentdock.com/) — the Colorlib credit is replaced

## Verification checklist

- [ ] Spec validates: `npm run spec:validate`
- [ ] TDD: tests written before implementation; `npm run test:coverage` at
      100% lines/functions/branches/statements (per-app gate via
      `scripts/verify-app.sh sizzle`)
- [ ] Design tokens from this spec applied in `@theme` (brand `#f42f2c`,
      ink `#222`, body-text `#777`, section-bg `#f9f9ff`, overlay
      `rgba(17,22,24,0.75)`, star `#ffc000`)
- [ ] Poppins (300/500/600/700) loaded via Google Fonts `<link>` in
      index.html
- [ ] Section structure + order matches the live DOM 1:1 (header → banner →
      about → menu + filters → reservation → gallery + filters → reviews →
      blog → footer)
- [ ] Placeholder images via `https://picsum.photos/seed/sizzle-<n>/<w>/<h>`
      (hero bg, about image, 6 menu images, 6 gallery images, 4 avatar
      images, 4 blog thumbs); NO assets copied from ColorLib
- [ ] Buttons flat radius 0: `.primary-btn` red bg / white uppercase text
      (banner hover → `#222`, about hover → red glow shadow, reservation
      button capitalized); footer subscribe button pill radius 57px
- [ ] Filter pill-wrap white radius 10px + soft shadow; active pill
      `#f42f2c`; menu and gallery filtering works client-side
- [ ] Menu cards white radius 10px padding 30px, `#f42f2c` prices; blog
      cards with black date chip, hover zoom + `#f42f2c` title
- [ ] Icons from lucide-react (heart/bubble for blog meta, social brand
      paths, phone/map-pin for contact). Verify every lucide export with
      the typeof probe; NO fontawesome / linearicons / themify icon fonts
- [ ] Interactivity client-side only: sticky/scrolled header, mobile menu
      toggle, menu + gallery filters, review carousel, reservation form
      validation/success (no jquery/owl/nice-select/magnific-popup)
- [ ] Footer phone numbers rendered as display strings; any `tel:`/`mailto:`
      hrefs computed at runtime from spaced literals (tel-literal redaction
      pitfall — NEVER write `tel:+...` literals in source)
- [ ] Demo-repeated content varied (menu prices/copy, review names, blog
      dates/counts) — same kinds of content, no duplicated strings
- [ ] Footer links Component Dock (https://www.componentdock.com/) —
      replaces the original "Colorlib" credit
- [ ] No colorlib.com / preview.colorlib.com strings in any app file
- [ ] TEMPLATES.md: mark BOTH marco rows `[x]` (lines 444 and 2686) +
      surge URL + readme:status when shipped
- [ ] Deploy check: merged PR → Deploy to Surge.sh workflow green + surge
      URL (sizzle.free.componentdock.com) returns 200
