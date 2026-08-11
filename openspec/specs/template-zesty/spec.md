# Template: Zesty (Blog Template)

## Purpose

Zesty is a minimal food-blog home-page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Yummy"
template design (see TEMPLATES.md — appears 3×: lines 298, 1499, 2481; all
three rows point to the same source, one prep covers all; verified with
`grep -c 'wp/template/yummy/'` = 3), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/yummy/ (minimal food blog template)
Preview URL: https://preview.colorlib.com/theme/yummy/

## Design reference (replication findings)

- **Original:** ColorLib "Yummy" — minimal food blog template
  (`<title>Yummy | Template</title>`). A clean, minimal recipe-blog one-pager:
  top header with left logo + centered nav (Home / Pages dropdown / Recipes /
  Best Of / Contact) and a search trigger; a hero "page-top" block of five
  recipe cards (one large + two small on each side of a 6/3/3 grid, text
  cards overlapping the image bottom); a pink-bar-titled "Top Recipes this
  Week" section (one large card + a 2×2 grid of small thumb/left cards, each
  with a pink category pill and a hover "+" icon over the image); a
  filterable "categories" grid (5 recipe cards, filter pills Vegetarian /
  Most popular / Meat Lover / Gluten Free, mixitup-style class-based
  filtering); a pink-bar-titled "Featured Recipes" section (two horizontal
  image-left cards on a light-gray background); and a light-gray footer with
  logo + blurb, a newsletter subscribe form (white input + solid pink
  button), five social links with text labels, and the ColorLib copyright
  line. A fullscreen search overlay closes the page.
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/yummy/
  (HTTP 200, ~21.7 KB HTML fetched; `css/style.css` ~42.7 KB parsed for
  tokens — the page also imports bootstrap.min.css, font-awesome.min.css,
  nice-select.css, slicknav.min.css; jQuery + slicknav + mixitup-style
  filtering, NOT Tailwind).
- **Screenshot note:** `yummy-minimal-food-blog-website-template.jpg`
  (1200×988) does NOT match the live template — it shows an older/different
  "Yummy Blog" variant (utility bar, script logo, GET PATTERN button) and
  pixel-sampling shows a gray-dominant palette with no pink accent. The live
  preview DOM + stylesheet are the authoritative reference; the screenshot is
  not used for fidelity decisions.

### Section structure (from the live DOM, top to bottom)

1. `header.header-section` — container > `div.logo` (a > img logo) +
   `div.nav-menu` > `nav.main-menu.mobile-menu` > `ul` (Home, Pages with
   `ul.sub-menu` dropdown [About Me, Categories, Recipe, Blog, Contact],
   Recipes, Best Of, Contact) + `div.nav-right.search-switch` +
   `div#mobile-menu-wrap`. Header padding: 65px top / 30px bottom, on white.
   Nav links: 20px bold `#353535`, 2px `#FC0254` underline grows on hover
   (`a:after`, opacity 0 → 1).
2. `section.page-top-recipe` — container > row, 3 columns (order-lg-1/2/3):
   - `col-lg-6.order-lg-2` (center): `div.pt-recipe-item.large-item` —
     `div.pt-recipe-img.set-bg` (data-setbg bg image, cover, hover gradient
     overlay `::after` opacity 0.34) + `div.pt-recipe-text`: `span` category
     meta (14px 700 `#878787`, line-height 30px) + `h3` headline (700
     `#353535`, 33px line-height).
   - `col-lg-3.order-lg-1` (left): 2 × `pt-recipe-item` (img + h4 headline,
     700 `#353535`, 30px line-height).
   - `col-lg-3.order-lg-3` (right): 2 × `pt-recipe-item` (same).
   - `pt-recipe-text` is a white inline-block card with `margin-top: -56px`
     (overlaps the image bottom), padding 19px 35px 30px, centered text,
     z-index 999. Section padding-bottom 110px.
3. `section.top-recipe.spad` (bg `#F8F9FB`, padding 100px 0 60px... `.spad`
   = 100px top/bottom, overridden bottom 60px) — `div.section-title` (pink
   bar: width 470px, bg `#FC0254`, right-aligned, padding 18px 0 18px 40px,
   absolute top -57px left 0) > `h5` "Top Recipes this Week" (white 700) +
   `div.container.po-relative`:
   - `div.plus-icon` — absolute right 0, top -157px, 80×57px `#FC0254` box,
     white centered "+" (decorative, overlaps the section top edge).
   - `col-lg-6`: `div.top-recipe-item.large-item` — `div.top-recipe-img.set-bg`
     (height 514px, `::after` overlay opacity 0.5) + `div.top-recipe-text`:
     `div.cat-name` (pink pill: `#FC0254` bg, white 12px 700 uppercase,
     padding 4px 25px) + `a > h4` headline (700, mt 23px mb 20px) + `p`
     excerpt.
   - `col-lg-6`: 4 × `div.top-recipe-item` (mb 40px), each a row:
     `col-sm-4` `div.top-recipe-img.set-bg` (with `i.fa.fa-plus` hover icon)
     - `col-sm-8` `div.top-recipe-text` (cat-name pill + `a > h4` + `p`).
4. `div.categories-filter-section.spad` (bg `#F8F9FB`, centered) —
   `div.filter-item > ul`: 4 filter pills (`li.active` "Vegetarian", "Most
   popular" `.mostpopular`, "Meat Lover" `.meatlover`, "Gluten Free"
   `.glutenfree`; 700 `#353535`, padding 15px 42px, inline-block) +
   `div.cf-filter#category-filter`: 5 × `div.cf-item.mix.all[.mostpopular|
.meatlover|.glutenfree]` — width `calc(20% - 32px)` margin-right 40px
   (5-across desktop), `div.cf-item-pic > img` + `div.cf-item-text` (centered,
   padding 18px 15px 0) > `h5` title (700 `#353535`, 27px line-height).
5. `section.feature-recipe` (bg `#F8F9FB`, padding 55px 0) — `div.section-title`
   (same pink bar) > `h5` "Featured Recipes" + `div.container.po-relative`
   (plus-icon again) + row: 2 × `col-lg-6` `div.fr-item` (mb 30px) —
   `div.fr-item-img` (float left, margin-right 30px) > img +
   `div.fr-item-text` (padding 32px 0 25px): `h4` (700 `#353535`,
   line-height 30px, mb 10px) + `p` excerpt.
6. `footer.footer-section` (bg `#EAEDF2`, padding-top 70px) — container:
   - row: `col-lg-5` `div.fs-left` — `div.logo > a > img` (footer logo) + `p`
     blurb.
   - `col-lg-6.offset-lg-1`: `form.subscribe-form` (padding-top 25px, mb 38px)
     — `h3` "Subscribe to our newsletter" (700 `#353535`, mb 20px) + input
     (white 1px border, height 64px, width `calc(100% - 225px)`, italic 16px
     `#353535`, padding-left 34px, margin-right 15px) + button (solid:
     border 1px `#FC0254`, bg `#FC0254`, white 18px 700, padding 17px 40px,
     min-width 205px); then `div.social-links` — 5 × `a` (inline-block,
     margin-right 35px, mb 15px): icon + `span` label (Instagram, Pinterest,
     Facebook, Twitter, Youtube).
   - row: `col-lg-12` `div.copyright-text` (14px `#b8c1d0`, padding 50px 8px)
     — "Copyright © <year> All rights reserved | This template is made with
     <heart> by Colorlib" (original attribution).
7. `div.search-model` — fullscreen overlay (`h-100 d-flex
align-items-center justify-content-center`) with `div.search-close-switch`
   ("+" close) + `form.search-model-form > input#search-input` placeholder
   "Search here.....".

### Content (for copy paraphrase)

- Nav: Home, Pages ▾ (About Me, Categories, Recipe, Blog, Contact), Recipes,
  Best Of, Contact.
- Page-top: category meta spans + headlines — "Cannellini Aglio e Olio with
  Salmon" (large), "Raw Vegan Carrot Cake Bites with Avocado", "One Pot
  Weeknight Lasagna Soup Recipe", "Beef Burger with French Fries and Salad",
  "Raspberry Pancakes with Honey and Butter".
- Top recipes: cat-name pills (e.g. Desert) + headlines "One Pot Weeknight
  Lasagna Soup Recipe" (large), "Veggie soup with Mushrooms", "Caramel Ice
  Cream with Berries", "Freash Octopuse with lime juice" (source typo) —
  Lorem-ipsum excerpts.
- Filter grid: 5 cards titled "Sunday Brunch: Spaghetti and Eggs Recipe"
  (placeholder, same title on all 5) with mix classes mostpopular/meatlover/
  glutenfree.
- Featured: 2 × "Sunday Brunch: Spaghetti and Eggs Recipe" + excerpts.
- Footer: subscribe h3 "Subscribe to our newsletter"; socials Instagram,
  Pinterest, Facebook, Twitter, Youtube.

## Design tokens

| Token         | Value           | Usage                                                                                                    |
| ------------- | --------------- | -------------------------------------------------------------------------------------------------------- |
| brand-pink    | `#FC0254`       | section-title bars, cat-name pills, plus-icon box, subscribe button bg/border, nav hover underline (2px) |
| ink           | `#353535`       | nav links, all recipe headlines (h3/h4/h5), filter pills, subscribe h3, input text                       |
| meta-gray     | `#878787`       | page-top category `span`                                                                                 |
| section-bg    | `#F8F9FB`       | `.top-recipe`, `.categories-filter-section`, `.feature-recipe` backgrounds                               |
| footer-bg     | `#EAEDF2`       | `.footer-section` background                                                                             |
| copyright     | `#b8c1d0`       | `.copyright-text` color                                                                                  |
| paper         | `#ffffff`       | page bg, `pt-recipe-text` card, nav, subscribe input border                                              |
| hover-overlay | `rgba(0,0,0,…)` | `.pt-recipe-img::after` opacity 0.34, `.top-recipe-img::after` opacity 0.5 gradient overlays             |
| font-body     | "PT Sans"       | whole site (`font-family: "PT Sans", sans-serif`, antialiased) — headings 700                            |

Radii: none (square corners everywhere — pills are the only rounded element
via 25px horizontal padding on cat-name, not radius). Spacing: header 65px/30px
padding; `.spad` 100px section padding; section-title bar 470×auto pink with
18px vertical padding; pt-recipe-text overlaps image by -56px (padding 19px
35px 30px); top-recipe large image 514px tall; subscribe input 64px tall;
subscribe button 18px 700 with 17px 40px padding, min-width 205px; fr-item-img
float-left with 30px right margin; cf-item width calc(20% - 32px), 40px
margin-right.

## Requirements

### Requirement: Header

The system SHALL render a white top header with a logo on the left, a
centered nav, and a search trigger on the right.

#### Scenario: Logo and nav links

- **GIVEN** the Zesty app is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show a logo (text or image equivalent) on the left
- **AND** a nav SHALL list links Home, Pages, Recipes, Best Of, Contact in
  20px bold `#353535` text
- **AND** the "Pages" link SHALL open a dropdown with About Me, Categories,
  Recipe, Blog, Contact
- **AND** hovering a nav link SHALL grow a 2px `#FC0254` underline beneath it

#### Scenario: Search trigger

- **GIVEN** the header is rendered
- **WHEN** the search icon is activated
- **THEN** a fullscreen search overlay SHALL open with an input
  (placeholder "Search here.....") and a close control
- **AND** activating the close control SHALL close the overlay

#### Scenario: Mobile nav

- **GIVEN** the viewport is narrow
- **WHEN** the page loads
- **THEN** a hamburger menu SHALL be available that reveals the same nav
  links (desktop + mobile navs both render in the DOM)

### Requirement: Page-top recipes

The system SHALL render a hero block of five recipe cards in a 6/3/3 grid:
one large card in the center column and two small cards on each side.

#### Scenario: Large featured card

- **GIVEN** the page-top section is rendered
- **WHEN** the page loads
- **THEN** the center column SHALL show a large recipe card with a background
  image, a 14px 700 `#878787` category meta line, and a 700 headline
  (e.g. "Cannellini Aglio e Olio with Salmon")
- **AND** the white text card SHALL overlap the image bottom by 56px

#### Scenario: Small side cards

- **GIVEN** the page-top section is rendered
- **WHEN** the page loads
- **THEN** the left column SHALL stack two small recipe cards (image + 700
  `#353535` h4 headline)
- **AND** the right column SHALL stack two more small recipe cards

### Requirement: Top recipes

The system SHALL render a "Top Recipes this Week" section on a `#F8F9FB`
background, introduced by an overlapping pink `#FC0254` title bar.

#### Scenario: Section title bar

- **GIVEN** the top-recipe section is rendered
- **WHEN** the page loads
- **THEN** a `#FC0254` bar SHALL overlap the section's top edge, right-aligned,
  carrying the white bold title "Top Recipes this Week"
- **AND** a white "+" on an 80×57px `#FC0254` box SHALL sit at the section's
  top right edge

#### Scenario: Large + small recipe cards

- **GIVEN** the top-recipe section is rendered
- **WHEN** the page loads
- **THEN** the left half SHALL show one large card (image, pink category pill,
  700 headline, excerpt)
- **AND** the right half SHALL show a 2×2 grid of four small cards, each with
  a left image, pink category pill, 700 headline, and excerpt
- **AND** hovering a small card image SHALL reveal a "+" icon

### Requirement: Categories filter

The system SHALL render a filterable grid of five recipe cards with four
filter pills.

#### Scenario: Filter pills and grid

- **GIVEN** the categories section is rendered
- **WHEN** the page loads
- **THEN** centered pills SHALL read Vegetarian (active), Most popular, Meat
  Lover, Gluten Free in 700 `#353535` text
- **AND** five recipe cards SHALL render side by side (20% width each),
  each with an image and a centered 700 title

#### Scenario: Filtering

- **GIVEN** the categories section is rendered
- **WHEN** the "Meat Lover" pill is activated
- **THEN** only cards tagged meat-lover SHALL remain visible

### Requirement: Featured recipes

The system SHALL render a "Featured Recipes" section with two horizontal
cards on a `#F8F9FB` background, introduced by the same overlapping pink
title bar.

#### Scenario: Featured cards

- **GIVEN** the featured section is rendered
- **WHEN** the page loads
- **THEN** a `#FC0254` bar SHALL carry the white bold title "Featured Recipes"
- **AND** two cards SHALL each show an image floated left with a 30px gap, a
  700 `#353535` h4 headline, and an excerpt

### Requirement: Footer

The system SHALL render a `#EAEDF2` footer with brand blurb, subscribe form,
social links, and the ColorLib copyright line.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the left column SHALL show the logo and a short blurb paragraph
- **AND** the right column SHALL show the heading "Subscribe to our
  newsletter" with a 64px-tall white-bordered email input and a solid
  `#FC0254` submit button (white bold 18px, min-width 205px)
- **AND** five social links with text labels SHALL render: Instagram,
  Pinterest, Facebook, Twitter, Youtube
- **AND** the copyright line SHALL read "Copyright © <year> All rights
  reserved | This template is made with <heart> by Colorlib"

#### Scenario: Subscribe validation

- **GIVEN** the subscribe form is rendered
- **WHEN** an invalid email is submitted
- **THEN** the form SHALL show a validation error and SHALL NOT submit
- **WHEN** a valid email is submitted
- **THEN** the form SHALL swap to a success message (the input SHALL unmount)

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Zesty app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, the
  page-top, top-recipe, categories, and featured sections in the main
  landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Zesty — Food & Recipe Blog Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/zesty` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- zesty` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; tokens (#FC0254, #353535, #878787, #F8F9FB, #EAEDF2, #b8c1d0, #fff, PT Sans) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `zesty-<n>`, Google Fonts PT Sans link, lucide icons + inline SVG brand icons only)
- [ ] Overlapping pink section-title bars + plus-icon boxes rendered as absolutely-positioned accents (top -57px / -157px behavior)
- [ ] Filter grid implemented with client-side state (no mixitup dep); "Meat Lover" scenario passes
- [ ] Search overlay opens/closes; subscribe form validates + swaps to success (input unmounts — assert absence)
