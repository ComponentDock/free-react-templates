# Template: Vendly (e-Commerce / Fashion Store)

## Purpose

Vendly is a single-page e-commerce / fashion-store template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Shoppers" design (see TEMPLATES.md — line 493, Bootstrap category;
the same source is DUPLICATED at lines 1602 and 1729 — ALL THREE rows must be
marked `[x]` when done), built under a NEW name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a minimal white shoe/fashion e-commerce store: a top utility
bar (search input left, bordered uppercase logo center, account / wishlist /
cart-with-count icons right) over an uppercase nav (Home and About with
dropdowns, Shop, Catalogue, New Arrivals, Contact), a full-height photo hero
(hero_1.jpg, right-aligned "Finding Your Perfect Shoes" headline, lorem,
violet "Shop Now" button), a three-column perks strip (Free Shipping / Free
Returns / Customer Support with line icons), a three-card Collections grid
(Women / Children / Men photos with a bottom black gradient and white
40px labels), a light-gray "Featured Products" band with a product-card
carousel (image, name, tagline, violet `$50` price), a "Big Sale!" split
(rounded image left; "50% less in all items" heading, "By Carl Smith •
September 3, 2018" meta, lorem, "Shop Now" button right), and a white footer
(Navigations link columns, Promo card with date range, Contact Info,
Subscribe email form, centered copyright credit bar). The brand accent is
**violet `#7971ea`** on a **white `#ffffff`** background with light-gray
bands `#f8f9fa` / `#edf0f5`, the **Mukta** font family, **uppercase
letter-spaced** buttons (sharp corners, hover lift + shadow), and a clean
e-commerce aesthetic. Vendly recreates that structure section-for-section
with matching layout, colors, typography, and content types (no ColorLib
assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Shoppers" — `https://colorlib.com/wp/template/shoppers/`
  (Bootstrap category item, e-Commerce / fashion store style). TEMPLATES.md
  has **THREE copies** of this item (lines 493, 1602, 1729 — all `- [ ]`);
  mark ALL THREE `[x]` when done. None is shipped yet and no other spec
  targets this source (verified: no spec folder references
  `wp/template/shoppers/`).
- **Preview URL:** `https://preview.colorlib.com/theme/shoppers/` — **HTTP
  200** (19.3 KB), fully reachable; structure + tokens below are from this
  live DOM and its `css/style.css` (22.8 KB) + `css/bootstrap.min.css`
  (customized `$primary`). Screenshot used to confirm the visual design
  (see below).
- **Screenshot:** `shoppers-free-template.jpg` (verified via browser vision):
  minimalist clean aesthetic on white. Hero is a large soft mint/cyan
  background block with a pair of navy-blue canvas sneakers (white rubber
  soles, one standing leaning, one lying flat) on the left; "Finding Your
  Perfect Shoes" headline + lorem + violet SHOP NOW button on the right.
  Lavender/violet `#7971ea` accents: SHOP NOW button, active HOME nav link,
  the bordered "SHOPPERS" logo text, the Free Shipping truck icon. Navy blue
  appears in the sneakers and the Free Returns / Customer Support icons.
  Below the hero a white strip has three perk columns (truck / circular
  arrow / question-mark icons with uppercase headings). The screenshot cuts
  off before the footer.
- **Section structure (from the live DOM, in order):**
  1. `header.site-navbar` — two stacked rows:
     - `.site-navbar-top` (border-bottom 1px `#f3f3f4`, padding 20px 0,
       ~40px on md): left = `.site-block-top-search` form (search icon
       absolute-left, text input, placeholder "Search"); center = `.site-logo`
       (`a` uppercase, letter-spacing .2em, 20px, `#25262a`, 2px solid
       `#25262a` border — brand "Shoppers", recreate as "Vendly"); right =
       `.site-top-icons` list: user icon, heart icon, cart link with a
       `count` badge ("2", 24px circle, bg `#7971ea`, white, absolute
       top-right), plus a mobile-only hamburger toggle.
     - `nav.site-navigation` — `.site-menu` uppercase links (15px,
       letter-spacing .05em, `#25262a`, hover `#7971ea`): **Home** (has
       dropdown: Menu One / Menu Two / Menu Three / Sub Menu → nested),
       **About** (has dropdown: Menu One / Menu Two / Menu Three), **Shop**,
       **Catalogue**, **New Arrivals**, **Contact**. Home is `.active`.
       (Recreation: a simple accessible dropdown for Home/About.)
  2. `div.site-blocks-cover` — background image `images/hero_1.jpg`,
     `background-size: cover`, min-height 600px / `calc(100vh - 174px)`,
     `data-aos="fade"`. Row `justify-content-end` with `col-md-5`
     right-aligned text: `h1` "Finding Your Perfect Shoes" (30px → 50px on
     md, weight 900, `#000`), `.intro-text` `p` lorem (`#333333`, 20px,
     line-height 35px → intro 16px/1.5), and a `btn btn-sm btn-primary`
     "Shop Now" link.
  3. `div.site-section.site-section-sm.site-blocks-1` — 3 columns
     (`col-md-6 col-lg-4 d-lg-flex`, each `data-aos="fade-up"` with 0/100/200
     delay): line icon in `.icon mr-4 align-self-start`
     (`icon-truck` / `icon-refresh2` / `icon-help`) + `.text` with uppercase
     `h2` (18px, `#25262a`, letter-spacing .05em: **Free Shipping / Free
     Returns / Customer Support**) and lorem `p`. Section has
     `border-bottom: 1px solid #edf0f5`.
  4. `div.site-section.site-blocks-2` — 3 `.block-2-item` image cards
     (`col-sm-6 col-md-6 col-lg-4`, `data-aos="fade"` 0/100/200): `figure`
     image (`women.jpg` / `children.jpg` / `men.jpg`) + `.text` absolutely
     positioned bottom (padding-left 20px) over a linear gradient overlay
     (transparent → `rgba(0,0,0,0.8)`): `span.text-uppercase` "Collections"
     (12px, letter-spacing .1em, weight 900, white) + `h3` 40px white
     (**Women / Children / Men**). Hover: image `scale(1.1)`.
  5. `div.site-section.block-3.site-blocks-2.bg-light` — centered
     `.site-section-heading` "Featured Products" (30px `#25262a` with a
     40×2px `#7971ea` top bar, centered variant) then `.nonloop-block-3
owl-carousel` of `.block-4` product cards (white bg, shadow
     `0 0 30px -10px rgba(0,0,0,0.1)`, text-center): image
     (`cloth_1.jpg` / `shoe_1.jpg` / `cloth_2.jpg` / `cloth_3.jpg` /
     `shoe_1.jpg`), `h3` 20px name link, `p.mb-0` tagline, price
     `p.text-primary.font-weight-bold` `$50` (`#7971ea`). Items: **Tank Top**
     ("Finding perfect t-shirt"), **Corater** ("Finding perfect products"),
     **Polo Shirt** ("Finding perfect products"), **T-Shirt Mockup**
     ("Finding perfect products"), **Corater** ("Finding perfect products").
     (Recreation: a horizontally scrollable/carousel row of 5 cards is
     acceptable.)
  6. `div.site-section.block-8` — centered heading "Big Sale!"; row: left
     `col-lg-7` image `blog_1.jpg` (`img-fluid rounded`), right `col-lg-5`
     text-center pl-md-5: `h2` link "50% less in all items", `p.post-meta`
     ("By **Carl Smith** <span.block-8-sep>•</span> September 3, 2018",
     color `#c4c7ce`, sep margins 10px), lorem `p`, `btn btn-primary btn-sm`
     "Shop Now".
  7. `footer.site-footer` (border-top 1px `#edf0f5`, padding 4em 0):
     - `col-lg-6`: `h3.footer-heading` "Navigations" (20px `#25262a`,
       mb-4) + three link columns (`list-unstyled`, links `#5c626e`, hover
       `#7971ea`, margin-bottom 10px): **Sell online, Features, Shopping
       cart, Store builder** / **Mobile commerce, Dropshipping, Website
       development** / **Point of sale, Hardware, Software**.
     - `col-lg-3`: "Promo" heading + `.block-6` link: rounded image
       (`hero_1.jpg`), `h3.font-weight-light` "Finding Your Perfect Shoes",
       `p` "Promo from January 15 — 25, 2019".
     - `col-lg-3`: `.block-5` "Contact Info" (address "203 Fake St.
       Mountain View, San Francisco, California, USA" · phone link
       "+2 392 3929 210" · email "emailaddress@domain.com") + `.block-7`
       Subscribe form: `label.footer-heading` "Subscribe", text input
       (placeholder "Email", `form-control py-4`), submit
       `btn btn-sm btn-primary` "Send".
     - Copyright row (centered, pt-5 mt-5): "Copyright © <year> All rights
       reserved | This template is made with ❤ by Colorlib" → recreation
       credit line.
- **Behavior notes:** the featured-products row is an owl carousel
  (recreation: 5-card scrollable row); the hero is a single static panel
  (no carousel); nav dropdowns are hover/click menus; the search input and
  subscribe form have no backend (client-side only, success state for the
  subscribe form); brand social icons are absent (credit line only); all
  links are demo `#`/page anchors — recreation uses in-page anchors / `#`.
  The count badge is a static "2".

## Design tokens (extracted from `css/style.css` + bootstrap)

- Brand primary: **#7971ea** (violet/lavender; 18 uses — bootstrap
  `.btn-primary` bg/border, `.text-primary` prices, cart count badge bg,
  nav link hover, form-control focus border, `.site-section-heading`
  40×2px top bar, footer link hover).
- Dark ink: **#25262a** (logo border + text, nav links, section headings,
  perks h2, footer headings).
- Page background: **#ffffff**; light bands: `bg-light` = **#f8f9fa**
  (featured products), borders `#edf0f5` (perks bottom, footer top),
  `#f3f3f4` (top-bar bottom border), `#e6e7e9` (btn-secondary).
- Body text: **#8c92a0** (weight 300, 16px, line-height 1.7); darker text
  `#5c626e` (footer links), `#333333` (hero paragraph), `#868995`
  (navbar links), `#3d3f45` (navbar hover), `#c4c7ce` (post-meta),
  `#000000` (hero h1, btn-secondary text, selection bg).
- Fonts: **"Mukta", sans-serif** (Google Fonts, weights 300/400/700 served
  via cf-fonts in the original). Recreation: Google Fonts `<link>` in
  `index.html` for Mukta 300/400/700.
- Buttons (`.btn`): **uppercase**, letter-spacing .05em, `transition .2s`,
  relative with `top: 0`; `.btn-primary` = `#7971ea` bg + `#fff` text +
  `#7971ea` border, font-size 17px, weight 300, letter-spacing .2em;
  `.btn-sm` = 14px, padding **10px 20px**; hover = shadow
  `0 5px 20px -7px rgba(0,0,0,0.9)` + `top: -2px`. **Sharp corners
  (radius 0)** — no pill.
- Logo (`.site-logo a`): uppercase, letter-spacing .2em, 20px, `#25262a`,
  **2px solid `#25262a` border**, padding 0 10px.
- Nav (`.site-menu > li > a`): uppercase, 15px, letter-spacing .05em,
  `#25262a`, padding 10px, hover `#7971ea`.
- Hero (`.site-blocks-cover`): background image cover, min-height 600px,
  `height: calc(100vh - 174px)`; `h1` 30px (50px ≥768px) weight 900
  `#000`; `p` `#333333` 20px / line-height 35px; `.intro-text` 16px/1.5.
- Perks (`.site-blocks-1 .text h2`): uppercase 18px `#25262a`
  letter-spacing .05em; section `border-bottom: 1px solid #edf0f5`;
  icons via `.icon` (line icons, colored by `.text-primary`-style brand
  tint in the original's icomoon set — recreation: lucide icons in
  `#7971ea`).
- Collection cards (`.block-2-item`): image + absolute bottom text over
  gradient `linear-gradient(to bottom, transparent 0%, transparent 18%,
rgba(0,0,0,0.8) 99%)`; `.text > span` 12px white weight 900
  letter-spacing .1em uppercase; `h3` 40px white; hover image
  `scale(1.1)` (transition).
- Section heading (`.site-section-heading`): 30px `#25262a`, relative,
  with `:before` 40px × 2px `#7971ea` bar at top (left; centered via
  `.text-center` translateX(-50%)); rows `justify-content-center mb-5`.
- Product card (`.block-4`): white bg, shadow `0 0 30px -10px
rgba(0,0,0,0.1)`, text-center; `h3` 20px; price `#7971ea`
  font-weight-bold.
- Big Sale (`.block-8`): `.post-meta` `#c4c7ce`; `.block-8-sep` margins
  10px; image `img-fluid rounded`.
- Footer: padding 4em 0, border-top 1px `#edf0f5`; `.footer-heading` 20px
  `#25262a`; links `#5c626e` (hover `#7971ea`), margin-bottom 10px;
  `.block-5` contact list plain; subscribe input `form-control py-4`
  (height 43px, focus border `#7971ea`).
- Section rhythm: `.site-section` = `padding: 2.5em 0` (5em ≥768px);
  `.site-section-sm` = 4em 0; `site-blocks-1` and `block-3` have no extra
  vertical padding beyond `.site-section`.
- Imagery: all photos are placeholders in the recreation —
  `https://picsum.photos/seed/vendly-<n>/<w>/<h>` (deterministic per
  template; hero vendly-1, collections vendly-2 (women) / vendly-3
  (children) / vendly-4 (men), products vendly-5..9, big-sale vendly-10,
  promo vendly-11). **Picsum seeds are arbitrary — verify the hero /
  collection seeds render fashion/shoe-like subjects before shipping and
  pin a verified seed (see `docs/templates/vendly/tasks.md`).** Icons from
  `lucide-react` (search, user, heart, shopping-cart, truck, rotate-ccw,
  help-circle, menu, x, map-pin, phone, mail, heart, chevron-down); no
  ColorLib assets.

## Requirements

### Requirement: Top utility bar

The system SHALL render the store's top bar with search, logo and icon
actions.

#### Scenario: Top bar renders

- **GIVEN** the Vendly app is rendered at a desktop viewport
- **WHEN** the page is displayed
- **THEN** a top bar SHALL render with a search field (icon + text input,
  placeholder "Search") on the left
- **AND** the centered logo SHALL read "Vendly", uppercase, with a 2px
  `#25262a` border
- **AND** account, wishlist and cart icons SHALL render on the right with a
  violet `#7971ea` circular cart badge showing "2"

### Requirement: Navigation menu

The system SHALL render the uppercase navigation menu with dropdowns.

#### Scenario: Nav menu renders

- **GIVEN** the Vendly app is rendered at a desktop viewport
- **WHEN** the navigation row is displayed
- **THEN** the menu SHALL list Home, About, Shop, Catalogue, New Arrivals
  and Contact in uppercase 15px `#25262a` text
- **AND** hovering a link SHALL turn it violet `#7971ea`
- **AND** Home and About SHALL expose dropdown menus (Home: Menu One, Menu
  Two, Menu Three, Sub Menu; About: Menu One, Menu Two, Menu Three)

#### Scenario: Mobile menu

- **GIVEN** the Vendly app is rendered at a mobile viewport
- **WHEN** the hamburger toggle is activated
- **THEN** a slide-in menu SHALL open with the same links
- **AND** the toggle SHALL expose `aria-expanded` and the menu SHALL be
  keyboard-operable (close via toggle / Escape)

### Requirement: Hero

The system SHALL render a full-height photo hero with right-aligned copy.

#### Scenario: Hero renders

- **GIVEN** the Vendly app is rendered
- **WHEN** the hero section is displayed
- **THEN** a full-height (min 600px) hero SHALL render with a cover
  background image (picsum seed vendly-1)
- **AND** the right side SHALL render the 50px weight-900 `#000` headline
  "Finding Your Perfect Shoes"
- **AND** a lorem paragraph and a violet "Shop Now" button SHALL render
  below the headline

### Requirement: Perks strip

The system SHALL render three service perk columns below the hero.

#### Scenario: Perks render

- **GIVEN** the Vendly app is rendered
- **WHEN** the perks strip is displayed
- **THEN** three columns SHALL render, each with a line icon and an
  uppercase 18px heading: Free Shipping, Free Returns and Customer Support
- **AND** each column SHALL show a lorem paragraph
- **AND** the strip SHALL have a `#edf0f5` bottom border

### Requirement: Collections

The system SHALL render three image collection cards.

#### Scenario: Collections render

- **GIVEN** the Vendly app is rendered
- **WHEN** the collections section is displayed
- **THEN** three image cards SHALL render in a row (Women, Children, Men)
- **AND** each card SHALL show a white uppercase 12px "Collections" label
  and a white 40px name over a bottom black gradient
- **AND** hovering a card SHALL scale its image to 1.1

### Requirement: Featured products

The system SHALL render a light-gray band with product cards.

#### Scenario: Featured products render

- **GIVEN** the Vendly app is rendered
- **WHEN** the featured products band is displayed
- **THEN** the centered heading "Featured Products" SHALL render with a
  violet 40×2px top bar
- **AND** five white product cards SHALL render in a scrollable/carousel
  row on a `#f8f9fa` background, each with an image, a 20px name, a
  tagline and a violet bold `$50` price
- **AND** the cards SHALL be named Tank Top, Corater, Polo Shirt,
  T-Shirt Mockup and Corater

### Requirement: Big Sale

The system SHALL render the "Big Sale!" split section.

#### Scenario: Big Sale renders

- **GIVEN** the Vendly app is rendered
- **WHEN** the Big Sale section is displayed
- **THEN** the centered heading "Big Sale!" SHALL render
- **AND** a rounded image SHALL render on the left and, on the right, the
  heading "50% less in all items", the meta line "By Carl Smith •
  September 3, 2018", a lorem paragraph and a violet "Shop Now" button

### Requirement: Footer

The system SHALL render the four-part footer with subscribe form.

#### Scenario: Footer renders

- **GIVEN** the Vendly app is rendered
- **WHEN** the page is scrolled to the bottom
- **THEN** a white footer with a `#edf0f5` top border SHALL render with
  the "Navigations" heading and three link columns (Sell online, Features,
  Shopping cart, Store builder / Mobile commerce, Dropshipping, Website
  development / Point of sale, Hardware, Software)
- **AND** a "Promo" column SHALL render with a rounded image, the heading
  "Finding Your Perfect Shoes" and the line "Promo from January 15 — 25,
  2019"
- **AND** a "Contact Info" column SHALL render with the address, phone and
  email
- **AND** a "Subscribe" form SHALL render with an email input and a violet
  "Send" button, showing a success state on submit without a page reload
- **AND** a centered copyright bar SHALL render with the recreation credit
  line

### Requirement: Page composition

The system SHALL compose all sections in the original's order in a single
page.

#### Scenario: Full page render

- **GIVEN** the Vendly app is rendered
- **WHEN** the page loads
- **THEN** the sections SHALL appear in order: top bar → nav → hero →
  perks → collections → featured products → Big Sale → footer
- **AND** the document title SHALL be "Vendly — Fashion Store" (or similar
  e-commerce title)

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- vendly` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Layout matches the original 1:1: top utility bar (search / bordered
      logo / icon actions + cart badge), uppercase nav with Home/About
      dropdowns, full-height photo hero (right-aligned copy + Shop Now),
      3-col perks strip, 3 collection image cards, light-gray featured
      products band (5 cards, `$50` violet prices), Big Sale split with
      rounded image + meta line, white footer with Navigations / Promo /
      Contact Info / Subscribe form + copyright bar (8 sections in the
      order above).
- [ ] Design tokens applied: primary `#7971ea` (buttons, prices, cart
      badge, heading bars, hovers), ink `#25262a` (logo border, nav,
      headings), page white with `#f8f9fa` band and `#edf0f5` borders,
      body `#8c92a0` Mukta 300, section headings 30px with 40×2px violet
      top bar.
- [ ] Buttons uppercase letter-spaced, sharp corners, `#7971ea` bg / white
      text, hover lift (`top -2px`) + shadow; logo uppercase with 2px ink
      border; collection hover zooms image (scale 1.1).
- [ ] Featured products row scrollable/carousel; subscribe form shows a
      success state (no backend, no reload); nav mobile menu
      keyboard-operable.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets) and
      the hero/collection seeds were verified to render fashion/shoe-like
      subjects; icons from lucide-react / inline SVG.
- [ ] PR description records source (ColorLib Shoppers), preview URL
      (HTTP 200), tokens, and renames; TEMPLATES.md marks ALL THREE copies
      (lines 493, 1602, 1729) `[x]` when done.
