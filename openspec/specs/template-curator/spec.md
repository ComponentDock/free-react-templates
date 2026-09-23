# Template: Curator (Creative Portfolio Grid)

## Purpose

Curator is a creative portfolio / design-resources single-page template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib "Reopen" free template (source:
https://colorlib.com/wp/template/reopen/), built under a DIFFERENT name
(**Curator**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4
+ TypeScript.

The original is a jQuery + Isotope masonry-grid portfolio site with
PrettyPhoto lightbox, SmartMenus navigation, and CarouFredSel carousel.
The live preview at
https://preview.colorlib.com/theme/reopen/ renders a single-page layout
with: centered logo + top navigation bar (Home, About, Story, Blog,
Contact with sub-menu, More), a large hero heading ("Handpicked design
resources crafted with much ♥ and care for every detail" / "free
downloads only on fridays"), a masonry/portfolio grid of 9 items (mix of
1/3 and 2/3 width tiles with category labels and type badges), a load-more
arrow, and a minimal footer with copyright + social icons.

## Naming

The ColorLib source name "Reopen" is FORBIDDEN as the app name. **Curator**
is the new, original name — single lowercase word, kebab-case, no collision
with `apps/`, `openspec/specs/`, `docs/templates/`, or any TEMPLATES.md
name (verified: zero hits for `curator` in TEMPLATES.md, `ls apps/`,
`openspec/specs/`, `docs/templates/`). It reflects the curated
design-resources theme of the template. Source slug: `reopen`. Preview URL:
https://preview.colorlib.com/theme/reopen/

## Design reference (replication findings)

- **Original:** ColorLib "Reopen" (page title: "Reopen - Html Responsive
  Template"). Listed in TEMPLATES.md. Source:
  https://colorlib.com/wp/template/reopen/
- **Live preview — REACHABLE (verified):**
  https://preview.colorlib.com/theme/reopen/ returns HTML (262 lines,
  `<title>Reopen - Html Responsive Template</title>`). Author: DryThemes.
  Stylesheets: `css/clear.css`, `css/common.css`, `css/font-awesome.min.css`,
  `css/carouFredSel.css`, `css/prettyPhoto.css`, `css/sm-clean.css`,
  `style.css` (1,448 lines — ALL custom styling). Scripts: jQuery,
  jquery.fitvids, SmartMenus, Isotope, imagesloaded, CarouFredSel,
  jquery.mousewheel, jquery.touchSwipe, jquery.easing, PrettyPhoto,
  NiceScroll, main.js. Fonts: **Roboto** (300, 400, 500, 700) from
  Cloudflare Fonts CDN.
- **Live DOM structure (from fetched HTML + CSS):**
  - `body.page` →
    - `table.doc-loader` — loading spinner (ajax-document-loader.gif),
      hidden after page load.
    - `div.menu-wraper` — sticky top menu bar:
      - `div.menu-logo` — centered logo image (`reopenDefaultLogo.png`)
      - `nav#header-main-menu.big-menu` → `ul.main-menu.sm.sm-clean`:
        Home, About, Story, Blog, Contact (with sub-menu: Contact + Map),
        More
    - `div.body-wrapper` →
      - `div.header-holder` — large header area with logo image
        (`reopenDefaultLogo.png`) + hamburger toggle (3-line icon)
      - `div.block.content-1170` — hero text: `<h1.entry-title>` "Handpicked
        **design resources** crafted with much <span class="fa fa-heart"></span>
        and care for every detail" + `<p.page-desc>` "free downloads only on
        fridays"
      - `div.grid#portfolio` — Isotope masonry grid with `.grid-sizer`:
        9 portfolio items, each `div.grid-item.element-item`:
          - `p_one_third` items (7): Smartphone/GALLERY, Doodle/VIDEO,
            Starlight/ARTICLE, Open Book/VIDEO, Burger/VIDEO,
            Printscreen/ARTICLE, Bottle/ARTICLE
          - `p_two_third` items (1): Foster/GALLERY
          - `p_one_third` item (1): Book/VIDEO
        Each item: `<a>` with `<img>` + `div.portfolio-text-holder`
        containing `p.portfolio-text` (category) and `p.portfolio-type`
        (type badge). Links go to: prettyPhoto gallery, Vimeo/YouTube
        video, or single.html article.
      - `div.block` — load-more button: centered arrow image
        (`loadMoreArrow.png`) with hover scale effect
      - `footer.footer` → `div.content-970`:
        - `ul` →
          - `li.copyright-footer` — copyright line with Colorlib credit
          - `li.social-footer` — social icons: Twitter, Behance, Dribbble,
            Facebook, RSS (Font Awesome)
- **Behaviors (from CSS + JS):**
  - **Isotope masonry:** Grid items arranged in a masonry layout with
    `.grid-sizer` for column width. Items are `p_one_third` (33.33%) or
    `p_two_third` (66.66%).
  - **PrettyPhoto lightbox:** Gallery items open in a PrettyPhoto lightbox
    overlay. Video items open Vimeo/YouTube in the lightbox.
  - **Portfolio overlay:** `.portfolio-text-holder` is absolutely positioned
    (top: 30px, left: 30px, bottom: 30px) inside each item. Text is
    white, category in large type, type badge in 11px grey. On hover,
    a pink `#f277ae` box-shadow pulse animation activates.
  - **Load more:** Arrow image scales down to 0.9 on hover.
  - **Hamburger toggle:** 3-line icon toggles the slide-out navigation.
  - **SmartMenus:** Dropdown sub-menu for Contact → Contact + Map.

## Design tokens

| Token               | Value                                  | Notes                                                             |
| ------------------- | -------------------------------------- | ----------------------------------------------------------------- |
| `--color-brand`     | `#f277ae`                              | Brand pink — buttons, hover effects, box-shadow pulse             |
| `--color-brand-hover` | `#e56a9e`                            | Estimated darker pink for hover (derived from brand)              |
| `--color-red`       | `#FD3137`                              | Red accent (sparingly used)                                       |
| `--color-ink`       | `#222222`                              | Primary text / headings                                           |
| `--color-muted`     | `#6f6f6f`                              | Secondary text                                                    |
| `--color-grey`      | `#9a9a9a`                              | Type badge text, lighter text                                     |
| `--color-grey-light`| `#b1b1b1`                              | Very light text                                                   |
| `--color-line`      | `#cccccc`                              | Borders / separators                                              |
| `--color-bg`        | `#fff`                                 | Page / section default background                                 |
| `--color-bg-alt`    | `#ECECEC` / `#E2E0E0` / `#eeeeee`    | Alternate section backgrounds (multiple light greys)              |
| `--color-black`     | `#000`                                 | Dark backgrounds                                                  |
| `--font-body`       | 'Roboto', sans-serif                   | Google Fonts 300/400/500/700 — all text                           |
| `--grid-col-1/3`    | 33.33%                                 | `.p_one_third` column width                                       |
| `--grid-col-2/3`    | 66.66%                                 | `.p_two_third` column width                                       |
| `--grid-gap`        | 0 (border-collapse on images)          | Grid items have no visible gap — edge-to-edge                     |
| `--overlay-padding` | 30px                                   | Portfolio text holder inset from edges                            |
| `--btn-radius`      | 2px                                    | Contact form submit button                                        |
| `--btn-pulse`       | box-shadow 0→10px rgba(242,119,174,0.4)→0 | Portfolio item hover animation (pink glow pulse)              |

## Requirements

### Requirement: Page shell

The system SHALL render a single-page creative portfolio layout with a
centered logo, top navigation, hero heading, masonry portfolio grid,
load-more control, and a minimal footer.

#### Scenario: Desktop layout

- **GIVEN** the Curator app is rendered on a desktop viewport
- **THEN** the page SHALL display a centered logo at the top
- **AND** a horizontal navigation bar below the logo with links:
  Home, About, Story, Blog, Contact (with sub-menu), More
- **AND** a large hero heading centered below the nav
- **AND** a masonry grid of portfolio items
- **AND** a load-more arrow below the grid
- **AND** a minimal footer with copyright and social icons
- **AND** the body font SHALL be Roboto (300/400/500/700 from Google Fonts)

#### Scenario: Responsive layout

- **GIVEN** a viewport at or below 768px
- **THEN** the navigation SHALL collapse to a hamburger toggle
- **AND** the grid items SHALL stack vertically (full-width)
- **AND** no horizontal overflow SHALL occur

### Requirement: Header and navigation

The system SHALL render a centered logo with a top navigation bar that
collapses to a hamburger on mobile, with a dropdown sub-menu for Contact.

#### Scenario: Header rendering

- **GIVEN** the Curator app is rendered on desktop
- **THEN** a centered logo image SHALL display at the top of the page
- **AND** a horizontal nav bar SHALL display below with links: Home,
  About, Story, Blog, Contact, More
- **AND** Contact SHALL have a sub-menu item "Contact + Map"

#### Scenario: Mobile hamburger

- **GIVEN** a mobile viewport
- **THEN** the navigation links SHALL be hidden
- **AND** a 3-line hamburger toggle SHALL be visible
- **WHEN** the user clicks the hamburger
- **THEN** the navigation SHALL slide in / expand

### Requirement: Hero section

The system SHALL render a large centered hero heading with a bold keyword
and a subtitle.

#### Scenario: Hero content

- **GIVEN** the Curator app is rendered
- **THEN** the hero heading SHALL read "Handpicked **design resources**
  crafted with much ♥ and care for every detail" (with "design resources"
  in bold and a heart icon)
- **AND** a subtitle below SHALL read "free downloads only on fridays"
- **AND** the heading SHALL be centered and use a large font size

### Requirement: Portfolio masonry grid

The system SHALL render a masonry-style grid of portfolio items with
category labels and type badges, using a mix of 1/3 and 2/3 column widths.

#### Scenario: Grid layout

- **GIVEN** the Curator app is rendered on desktop
- **THEN** a masonry grid SHALL display 9 portfolio items
- **AND** items SHALL use column widths of either 33.33% (p_one_third) or
  66.66% (p_two_third)
- **AND** the grid SHALL arrange items in a masonry/brick pattern

#### Scenario: Portfolio item rendering

- **GIVEN** a portfolio item is rendered
- **THEN** it SHALL display a background image (picsum.photos placeholder)
- **AND** an overlay text holder SHALL show the category name (e.g.
  "SMARTPHONE", "BOOK", "DOODLE") in white text
- **AND** a type badge SHALL show below the category (e.g. "GALLERY",
  "VIDEO", "ARTICLE") in 11px grey text
- **AND** the overlay SHALL be positioned with 30px inset from all edges

#### Scenario: Portfolio item hover

- **WHEN** the user hovers over a portfolio item
- **THEN** a pink `#f277ae` box-shadow pulse animation SHALL activate
  (0 → 10px spread → 0, with rgba pink glow)

#### Scenario: Portfolio item links

- **GIVEN** a portfolio item links to a gallery
- **WHEN** the user clicks the item
- **THEN** it SHALL open a lightbox/modal showing the full image
- **GIVEN** a portfolio item links to a video
- **WHEN** the user clicks the item
- **THEN** it SHALL open an embedded video player (YouTube/Vimeo)

### Requirement: Load more control

The system SHALL render a centered load-more arrow that scales on hover.

#### Scenario: Load more rendering

- **GIVEN** the grid is rendered with all items
- **THEN** a centered arrow icon/image SHALL display below the grid
- **WHEN** the user hovers over the arrow
- **THEN** the arrow SHALL scale down to 0.9× (with 0.2s linear transition)

### Requirement: Footer

The system SHALL render a minimal footer with copyright text and social
media icon links. The footer MUST include the Component Dock attribution.

#### Scenario: Footer content

- **GIVEN** the Footer is rendered
- **THEN** a copyright line SHALL display
- **AND** social media icon links SHALL render: Twitter, Behance,
  Dribbble, Facebook, RSS (use lucide-react icons replacing Font Awesome)
- **AND** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics, semantic HTML elements,
and focus-visible rings on interactive elements.

#### Scenario: Semantics

- **GIVEN** the Curator app is rendered
- **THEN** all sections SHALL use semantic elements (`<header>`,
  `<nav>`, `<section>`, `<footer>`)
- **AND** all images SHALL have descriptive alt text
- **AND** the hamburger toggle SHALL expose `aria-expanded` and
  `aria-controls`
- **AND** visible focus-visible rings SHALL appear on all interactive
  elements

## Verification checklist

- [ ] `npm run verify:app -- curator` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/reopen/: centered logo, top
      nav, hero heading, masonry grid with 9 items (category + type
      badges), load-more arrow, minimal footer with social icons.
- [ ] Behavior check: hamburger opens/closes mobile nav, portfolio items
      show hover animation, lightbox/modal works for gallery items,
      video embed works for video items, responsive stacking at 768px.
- [ ] Responsive check at 768px (grid stacks, nav collapses, no overflow).
- [ ] Footer links to https://www.componentdock.com/ (Component Dock).
