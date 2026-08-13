# Sizzle (ColorLib Marco) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-sizzle`.

## Design notes (replication findings)

- **Original:** ColorLib "Marco" — warm, appetizing RESTAURANT / CAFÉ
  one-pager (source: https://colorlib.com/wp/template/marco/, Restaurant
  category). TEMPLATES.md has TWO copies of this item (lines 444, 2686 —
  mark ALL when done).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/marco/
  (HTTP 200, ~31 KB HTML; `css/main.css` ~47 KB parsed for tokens). Stack is
  jQuery + Bootstrap + Owl Carousel (reviews) + NiceSelect (reservation
  select) + Magnific Popup + Linearicons — recreate all interactivity
  client-side in React.
- **Screenshot:** `marco-free-template.jpg` (1200×946, viewed in browser) —
  dark charcoal hero with an overhead food-ingredients shot (red chili,
  zucchini, garlic, potatoes, wooden boards), circular red "MARCO" logo
  centered above white uppercase nav (HOME ABOUT MENU GALLERY BLOG PAGES
  CONTACT), eyebrow "WIDE OPTIONS OF CHOICE", headline "Delicious Recipes",
  flat red "CHECK OUR MENU" button; below fold: white "About Our Story" row
  with a burger photo.
- **New name:** Sizzle (hot-off-the-grill vibe, fits a restaurant). Single
  lowercase word, no collision with `apps/` or existing spec folders. NOT
  "marco" — never reuse the source name.
- **Visual design (DOM + CSS tokens + screenshot):** VIVID RED `#f42f2c`
  brand (`.primary-btn`, menu prices, nav hover, active filter pill,
  `.footer-widget-wrap` bg, footer subscribe btn, review dot active,
  social hover) on white / `#f9f9ff` canvas with `#222` headings + footer
  bottom bar. Single font: Poppins (headings 600, body 300, 14px, `#777`).
  All `.primary-btn` buttons radius 0 (flat), uppercase, padding `0 30px`,
  line-height 42px. Filter pill-wrap white radius 10 + soft shadow
  `rgba(153,153,153,0.2)`; active pill red. Menu cards white radius 10,
  padding 30. Reservation white form panel padding `100px 40px`, inputs
  radius 0 border `#eee`. Blog date chip `#000` bg. Section rhythm 120px 0.

## Structure (1:1, section order — from the live DOM)

1. **Header** (`header#header`, fixed, transparent over hero):
   - `header-top` (centered): circular red logo badge ("Sizzle").
   - `main-menu` (centered): nav Home, About, Menu, Gallery, Blog ▾ (Blog
     Home, Blog Single), Pages ▾ (Elements, Level 2 ▾ [Item One, Item Two]),
     Contact — white 12px uppercase 500, hover `#f42f2c`; dropdowns white +
     shadow `rgba(127,137,161,0.25)`.
   - Scroll state: bg `rgba(34,34,34,0.9)`, header-top hidden.
   - Mobile: hamburger → slide-in panel `rgba(0,0,0,0.8)` (`aria-expanded`).
2. **Banner (hero)** — bg photo `hero-bg.jpg` cover; `banner-content`: h6
   "Wide Options of Choice" (uppercase 300, letter-spacing 2px), h1
   "Delicious Recipes" (60px 700), p (max-width 515px), ONE flat red button
   "Check Our Menu" (`primary-btn text-uppercase`, → #menu; hover bg `#222`).
   NOTE: the rendered page has NO second hero button — "view full menu"
   lives in the About section only.
3. **About** (`home-about-area section-gap`, white) — left: h1 "About Our
   Story", p ("Who are in extremely love with eco friendly system…"),
   `a.primary-btn` "view full menu" (hover → red glow shadow
   `rgba(245,63,81,0.2)`); right: food photo (`about-img.jpg`).
4. **Menu** (`menu-area section-gap`, id="menu", bg `#f9f9ff`) — h1 "What
   kind of Foods we serve for you" + subtitle; `.filter-wrap` pills (All
   Menu, Breakfast, Lunch, Dinner, Budget Meal, Buffet; active = red bg);
   6 `.single-menu` cards (2×3, `col-lg-4`): image + title/price row + p —
   Cappuccion, Americano, Macchiato, Mocha, Piccolo Latte, Ristretto @ $49
   (VARY the repeated $49 + copy per card).
5. **Reservation** (`reservation-area section-gap relative`) — bg photo +
   overlay `rgba(17,22,24,0.75)`; left h1 "Reserve Your Seats to Confirm if
   You Come with Your Family" + p (white); right `.form-wrap` (white,
   padding 100px 40px): "Your Name", "Your Email Address", "Phone Number",
   "Select Date & time", select "Select Event" (Event One–Four), red
   "Make Reservation" (capitalize) — zod validation + success state.
6. **Gallery** (`gallery-area section-gap`, bg `#f9f9ff`) — h1 "Food and
   Customer Gallery"; same 6 filter pills; 6 `.single-gallery` photos
   (radius 10, hover opacity .8); client-side filtering.
7. **Reviews** (`review-area section-gap`, bg photo cover) — carousel of 4
   `.single-review`: avatar, star rating (`#ffc000`), italic quote (max-width
   555px), h4 name (VARY the repeated "Hulda Sutton"); dots 10px, active
   `#f42f2c`; client-side cycling.
8. **Blog** (`blog-area section-gap`) — h1 "Latest From Our Blog"; 4
   `.single-blog` cards (`col-lg-3`): thumb (hover zoom 1.1), `p.date` chip
   "10 Jan 2018" (#000 bg, 2px 15px, 115px), h4 title (hover `#f42f2c`),
   excerpt, meta-bottom "15 Likes" / "02 Comments" (VARY). Titles:
   "Cooking Perfect Fried Rice in minutes", "Secret of making Heart Shaped
   eggs", "How to check steak if it is tender or not", "Seaseme and black
   seed Flavored Bun Rocks".
9. **Footer** (`footer-area`) — `.footer-widget-wrap` (bg `#f42f2c`, white
   text): 3 columns — "Opening Hours" (`hr-list`: Monday–Friday / Saturday /
   Sunday "08.00 am - 10.00 pm", hairline `rgba(238,238,238,0.3)` borders),
   "Contact Us" (address "56/8, los angeles, rochy beach, Santa monica,
   United states of america - 1205" + 2 phones `.number` 24px/600 white),
   "Newsletter" ("You can trust us. we only send promo offers, not a single
   spam." + email input radius 20 bg `#f9f9ff` + subscribe pill radius 57);
   `.footer-bottom-wrap` (bg `#222`): copyright bar + social icons (35×35
   bg `#111`, hover `#f42f2c`) — Colorlib credit REPLACED with **Component
   Dock link** (https://www.componentdock.com/).

## Todo (implementation order)

- [ ] `npm run spec:validate` passes (spec: `openspec/specs/template-sizzle/`)
- [ ] Scaffold `apps/sizzle` (copy simplest existing app; package
      `@free-react-templates/sizzle`; `public/CNAME` =
      `sizzle.free.componentdock.com`; homepage
      `https://sizzle.free.componentdock.com`); run `npm install` at
      root and verify lockfile registration
- [ ] `src/index.css`: `@theme` tokens — brand `#f42f2c`, ink `#222`,
      body-text `#777`, section-bg `#f9f9ff`, overlay
      `rgba(17,22,24,0.75)`, star `#ffc000`; Poppins Google Fonts `<link>`
      in index.html
- [ ] `Header` — fixed transparent header (circular red "Sizzle" logo +
      centered nav with Blog/Pages dropdowns), scrolled state
      `rgba(34,34,34,0.9)` hides logo row, mobile hamburger toggle
- [ ] `Hero` — food-ingredient bg photo cover, h6 eyebrow + h1 (60px 700) + paragraph + flat red "Check Our Menu" button (hover `#222`)
- [ ] `About` — two columns: "About Our Story" heading + copy + "view full
      menu" button (hover red glow) + food photo
- [ ] `MenuSection` — `#f9f9ff` band, filter pills (active = red), 6 white
      coffee cards (image, name, `#f42f2c` price, blurb), client-side filter
- [ ] `Reservation` — bg photo + dark overlay, left heading/copy, white
      form (name/email/phone/date + event select + Make Reservation); zod
      validation + success state
- [ ] `Gallery` — `#f9f9ff` band, filter pills, 6 photos (radius 10,
      hover opacity .8), client-side filter
- [ ] `Reviews` — bg photo cover carousel (avatar, star rating `#ffc000`,
      italic quote, name), client-side cycling + dots
- [ ] `Blog` — 4 cards (thumb hover zoom, black date chip, title hover
      red, excerpt, Likes/Comments meta)
- [ ] `Footer` — red widget band (Opening Hours / Contact Us / Newsletter) + `#222` bottom bar with Component Dock link + social icons
- [ ] Tests per section (100% coverage) → `scripts/verify-app.sh sizzle`
- [ ] PR `feat/template-sizzle` → merge immediately; TEMPLATES.md rows
      444 + 2686 → `[x]` + surge URL + readme:status
