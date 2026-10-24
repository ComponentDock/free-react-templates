# Template: Drapely (Fashion & Footwear eCommerce Landing)

## Purpose

Drapely is a single-page fashion/footwear eCommerce landing template in the
`free-react-templates` monorepo. It is an original React recreation of the
ColorLib "Shopmax" free website template, built under a DIFFERENT name
(Drapely — "drape", the way fabric falls, plus the "-ly" family suffix:
Wingly, Drivly, Sneakly, Nestly, Coastly), per the monorepo naming mandate
(never reuse the ColorLib source name), with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

- **Source design:** ColorLib "Shopmax" — https://colorlib.com/wp/template/shopmax/

The source appears THREE times in `TEMPLATES.md` (rows 230, 1602, 1730 — all
lines of the same template). ONE implementation covers all three rows; they
are marked `[x]` with the same surge URL at bookkeeping time.

Why it was unbuilt until now: all three rows carried a false `[x]` pointing at
`bazaar`, an app whose own spec recreates a different design (`store`). The
row-multiplicity census (`docs/row-multiplicity.md` §2, APP-WRONG-DESIGN)
lists `shopmax` among the 17 designs with no app; the implementer queue owns
re-opening those rows. No `apps/*` folder and no prep existed for this design,
so this spec is written as part of the implementing run.

## Design reference (replication findings)

- **Original:** ColorLib "Shopmax" — page title
  "ShopMax — Colorlib e-Commerce Template". A minimal white/light-gray
  fashion storefront: boxed wordmark, centered uppercase menu, split hero,
  category collage, product grids, a second hero band, and a four-column
  footer with a promo card and newsletter form.
- **Live preview DOM analyzed (verified 2026-10-24):**
  `https://preview.colorlib.com/theme/shopmax/` — HTTP 200, ~21 KB HTML,
  REACHABLE. Stylesheets: `css/style.css` (custom, 22.7 KB) plus
  bootstrap.min / aos / jquery-ui / magnific-popup / owl.carousel and
  `fonts/icomoon/style.css`. No web-font files are shipped: the page renders
  the Bootstrap system stack (system-ui → Segoe UI → Roboto → Helvetica).
- **Screenshot:** `shopmax-free-template.jpg` (1200×946) — matches the live
  DOM above the fold (boxed logo, uppercase menu with pink active item, split
  hero with the model photo bleeding to the left edge, huge uppercase
  headline, black rectangular CTA).

### Tokens (from `css/style.css`)

| token         | value                     | used for                                          |
| ------------- | ------------------------- | ------------------------------------------------- |
| brand         | `#ee4266`                 | active nav link, section-title rule, cart badge   |
| ink           | `#25262a`                 | logo border, nav links, price, footer headings    |
| black         | `#000000`                 | hero/section headings, CTA, category pill hover   |
| body          | `#8c92a0`                 | body copy, 16px / weight 300 / line-height 1.7    |
| muted         | `#b3b3b3`                 | struck-through original price                     |
| surface       | `#f9f9f9`                 | hero band + product card backgrounds              |
| line          | `#edf0f5`                 | footer / block rules                              |
| card gray     | `#ced4da`                 | "25 items" count inside the category pill         |
| star          | `#ffc107`                 | rating stars (Bootstrap `text-warning`)           |

Type scale / shapes:

- Hero `h1`: 50px → **70px** at ≥768px, weight **900**, uppercase, black.
- Hero eyebrow (`.sub-title`): ~12px, uppercase, **letter-spacing .2em**, black.
- Section title: uppercase, black, 30px left padding + **4px solid #ee4266**
  left border (two-line variant stacks "Discover" above "The Collections").
- Logo: 20px uppercase, **letter-spacing .2em**, 2px solid `#25262a` box.
- Nav links: 15px uppercase, letter-spacing .05em, `#25262a`, hover `#ee4266`.
- CTA (`btn-black`): black bg, white text, **radius 0**, padding 12px 30px,
  uppercase 13px, hover `#333333`.
- Product card: 300px tall (sm, 40px padding) / 400px (md), bg `#f9f9f9`;
  category pill is white with black text, 10px 30px padding, no radius, and
  turns black/white on hover.
- Footer heading: 14px uppercase, letter-spacing .2em, `#25262a`.
- Prices: bold black; original price `<del>` in `#b3b3b3`.

### Section order (1:1, from the live DOM)

1. **Navbar** — white bar, boxed "ShopMax" wordmark left; centered menu:
   Home (caret) · Shop · Catalog · New Arrivals · Contact; right: search,
   wishlist, shopping-bag icon with a pink **2** badge; hamburger below lg.
2. **Hero** (`.site-blocks-cover`, bg `#f9f9f9`) — two columns: model photo
   left, bottom-aligned and flush to the band; right column centered:
   eyebrow `#New Summer Collection 2019`, `h1` "Arrivals Sales", black
   "Shop Now" button.
3. **The Collections** — section title "Discover / The Collections"; 12-col
   row: one large category card (Women, 25 items) in `col-lg-8` and two
   stacked cards (Men, Shoes) in `col-lg-4`; every card carries a white
   category pill top-left and a product photo.
4. **Popular Products** — three-column grid of 6 product cards (photo, name,
   price; four of them show a struck-through list price and one carries a
   5-star rating).
5. **Most Rated** — carousel of 5 product cards, each with a 5-star rating.
6. **Second hero band** (`.site-blocks-cover.inner-page`) — same split layout,
   eyebrow `#New Summer Collection 2019`, `h1` "New Shoes", "Shop Now".
7. **Footer** (`custom-border-top`) — four blocks: Promo (image + "Finding
   Your Perfect Shirts This Summer" + "Promo from July 15 — 25, 2019"),
   Quick Links (three sub-columns: Sell online / Features / Shopping cart /
   Store builder · Mobile commerce / Dropshipping / Website development ·
   Point of sale / Hardware / Software), Contact Info (address, phone, email)
   + a Subscribe form, then a centered copyright line.

## Requirements

### Requirement: Navbar

The system SHALL render a white navbar with a boxed wordmark, a centered
uppercase menu, search/wishlist/bag icon controls and a pink cart badge.

#### Scenario: Desktop navbar content

- **GIVEN** the Drapely page is rendered
- **WHEN** the page loads
- **THEN** the wordmark "Drapely" SHALL be shown in a 2px `#25262a` box,
  uppercase, letter-spacing .2em
- **AND** the menu SHALL list Home, Shop, Catalog, New Arrivals, Contact
- **AND** each menu link SHALL be uppercase, 15px, `#25262a`, turning
  `#ee4266` on hover
- **AND** the bag control SHALL carry a `#ee4266` badge reading "2"

#### Scenario: Mobile menu toggle

- **GIVEN** the navbar is rendered at a narrow viewport
- **WHEN** the menu button is activated
- **THEN** the mobile menu SHALL open with `aria-expanded="true"`
- **AND** activating it again SHALL close it with `aria-expanded="false"`

#### Scenario: Search toggle

- **GIVEN** the navbar is rendered
- **WHEN** the search button is activated
- **THEN** a search field labelled "Search products" SHALL be revealed
- **AND** the close control SHALL hide it again

### Requirement: Split hero bands

The system SHALL render a split hero on a `#f9f9f9` band: a fashion photo in
one column and a centered text block (eyebrow, headline, black CTA) in the
other, bottom-aligned on desktop and stacked on mobile.

#### Scenario: First hero band

- **GIVEN** the Drapely page is rendered
- **WHEN** the hero is shown
- **THEN** the eyebrow "#New Summer Collection 2019" SHALL be uppercase,
  12px, letter-spacing .2em
- **AND** the headline "Arrivals Sales" SHALL be 50px (70px at ≥768px),
  weight 900, uppercase, black
- **AND** a "Shop Now" CTA SHALL be black, white-text, radius 0,
  uppercase 13px, and link to the product grid

#### Scenario: Second hero band

- **GIVEN** the page is scrolled past the carousels
- **WHEN** the second band is shown
- **THEN** it SHALL repeat the split layout with the headline "New Shoes"
  and the same eyebrow and "Shop Now" CTA

### Requirement: The Collections

The system SHALL render a "Discover / The Collections" title followed by a
large category card and two stacked category cards, each with a white
category pill showing the name and an item count.

#### Scenario: Category collage

- **GIVEN** the page is rendered
- **WHEN** the Collections section is shown
- **THEN** the title SHALL be uppercase black text with a 4px `#ee4266`
  left border and "Discover" stacked above "The Collections"
- **AND** the large card SHALL show "Women" with "25 items"
- **AND** the stacked cards SHALL show "Men" (25 items) and "Shoes"
  (25 items)
- **AND** each pill SHALL turn black with white text on hover

### Requirement: Product grids

The system SHALL render a "Popular Products" grid of six cards and a
"Most Rated" carousel of five cards; each card SHALL show a photo on a
`#f9f9f9` tile, the product name, a bold black price, an optional
struck-through original price and optional star rating.

#### Scenario: Popular products

- **GIVEN** the page is rendered
- **WHEN** the Popular Products section is shown
- **THEN** six product cards SHALL be listed in a three-column grid
- **AND** each card SHALL show a name, a price in `#000000` bold, and — where
  the product is discounted — the original price in `#b3b3b3` struck through
- **AND** at least one card SHALL show a five-star rating

#### Scenario: Most rated carousel

- **GIVEN** the Most Rated section is shown
- **WHEN** the next control is activated
- **THEN** the visible window of three cards SHALL advance by one and wrap
  from the last product back to the first
- **AND** activating the previous control SHALL move the window back by one
  and wrap to the end of the list
- **AND** every visible card SHALL show a five-star rating

### Requirement: Footer and attribution

The system SHALL render a four-block footer (Promo, Quick Links, Contact
Info, Subscribe) above a centered copyright line that credits Component
Dock.

#### Scenario: Footer blocks

- **GIVEN** the page is rendered
- **WHEN** the footer is shown
- **THEN** the Promo block SHALL show a promo image, "Finding Your Perfect
  Shirts This Summer" and "Promo from July 15 — 25, 2019"
- **AND** the Quick Links block SHALL render three sub-columns of links
- **AND** the Contact Info block SHALL show an address, phone and email
- **AND** the Subscribe form SHALL offer an email field labelled "Email" and
  a "Send" button

#### Scenario: Subscribe confirmation

- **GIVEN** the Subscribe form is rendered
- **WHEN** the visitor submits a valid address
- **THEN** a confirmation message SHALL replace the form
- **AND** the confirmation SHALL thank the visitor for subscribing

#### Scenario: Component Dock attribution

- **GIVEN** the footer is rendered
- **WHEN** the copyright line is read
- **THEN** it SHALL contain a link to `https://www.componentdock.com/`
  labelled "Component Dock"
- **AND** no external attribution link SHALL be rendered

### Requirement: Source hygiene

The app SHALL NOT reference the source site anywhere in its code.

#### Scenario: No provenance strings in app source

- **GIVEN** the app source tree `apps/drapely`
- **WHEN** it is searched for the source site's name or domain
- **THEN** no match SHALL be found (provenance lives in this spec,
  `TEMPLATES.md` and the PR only)

### Requirement: Responsive behavior

The system SHALL remain usable from 320px to 1440px: the hero SHALL stack,
the category collage SHALL collapse to one column, product grids SHALL go to
one column, and the mobile menu SHALL replace the centered desktop menu
below the `lg` breakpoint.

#### Scenario: Narrow viewport

- **GIVEN** a 375px-wide viewport
- **WHEN** the page is rendered
- **THEN** the hero columns SHALL stack with the photo above the text
- **AND** the desktop menu SHALL be hidden in favour of the menu button

## Verification checklist

- [x] Preview DOM fetched and section order recorded (7 sections, 1:1)
- [x] Stylesheet tokens extracted (brand, ink, body, surface, type scale)
- [x] Screenshot viewed and compared with the live DOM
- [x] Tests written before implementation (one `describe` per component)
- [x] 100% lines/functions/branches/statements for `apps/drapely`
- [x] `bash scripts/verify-app.sh drapely` green
- [x] Footer links Component Dock, no source-site strings in the app
