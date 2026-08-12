# Template: Vendio (E-commerce / Online Shop — Bootstrap)

## Purpose

Vendio is a single-page e-commerce / online-shop website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Sublime" website template design (see TEMPLATES.md, Bootstrap
category, line 506 — duplicate row at line 1605, same template, one app
only), built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript (strict). No ColorLib
references in app code — provenance lives in this spec, TEMPLATES.md, and the
PR.

## Design reference (replication findings)

- **Original:** ColorLib "Sublime" — free e-commerce / online-shop website
  HTML template (page title "Sublime"; source:
  https://colorlib.com/wp/template/sublime/). Single page: fixed white header
  with shop nav + cart/search, full-screen dark photo hero slider (3 slides),
  two side-by-side ad banners (discount + product), 8-product grid, full-width
  "Amazing Devices" ad, 3 benefit icon boxes, newsletter form, light footer.
- **Live preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/sublime/` (fetched `/tmp/sublime.html`,
  22,680 bytes) plus stylesheets `styles/main_styles.css`
  (`/tmp/sublime-main.css`, 24,496 bytes) and `styles/responsive.css`
  (`/tmp/sublime-responsive.css`, 5,205 bytes) and the TEMPLATES.md screenshot
  (`sublime-free-template.jpg`, 1200×946, viewed in the browser).
- **Visual design (screenshot + live DOM + CSS):** high-contrast dark hero on
  a white page. Screenshot: white fixed header with bold black wordmark
  "Sublime." and centered nav (Home, Categories, Accessories, Offers, Contact)
  plus a cart (0) icon and search icon; below it a 950px dark hero photo (a
  computer mouse lit with a pink→cyan gradient) with a white 60px headline "A
  new Online Shop experience.", lorem subtitle, an outlined white "Shop Now"
  button, and numbered slider dots "01. / 02. / 03." in the bottom-left
  corner; then a product grid with photo tiles. The DOM/CSS confirm: near-black
  ink `#1b1b1b` (logo, headings, button borders, badges), red accent `#e95a5a`
  (active slider dot, product-title hover, SALE badge), muted grays
  `#767676`/`#6c6a74`/`#787878`, all on white. All three slider slides repeat
  the same copy in the source (paraphrase/keep — implementer's choice, note in
  PR).

## Design tokens (from `styles/main_styles.css` of the live preview)

- **Ink (primary dark):** `#1b1b1b` — logo (30px/24px 700), section titles,
  `.button` borders + text (2px solid), `.newsletter_button` border + text,
  `.product_title` (18px 500), `.icon_box_title`, `.copyright`, footer social
  icons, HOT badge bg. Hover sweep on buttons fills white over the ink border.
- **Accent red:** `#e95a5a` — `.home_slider_custom_dot` active + hover,
  `.product_title a:hover`, SALE badge bg (`product_sale`).
- **Muted grays:** `#767676` nav links + dropdown links + footer text;
  `#6c6a74` `.product_price` (16px 500) + NEW badge bg; `#787878` newsletter
  input underline (2px bottom border); `#e3e3e3` newsletter `border-top: 2px`;
  `#b5b5b5`/`#a5a5a5`/`#c3c1cc` secondary text/dividers (responsive.css).
- **White:** `#ffffff` header bg (fixed), page bg, `.button_light` border +
  text (hero "Shop Now"), `.newsletter` bg, `.avds_small_inner` 2px border,
  `.footer` bg area.
- **Fonts:** primary `'Poppins', sans-serif` (`@import` Poppins 300–900 in
  main_styles.css) — used for logo, nav, headings, buttons, prices, newsletter;
  secondary `'Open Sans', sans-serif` for a few small elements (menu/search).
  Load Poppins 300–900 via Google Fonts `<link>` in `index.html` (Open Sans
  400/600 optional for parity).
- **Buttons (`.button` / `.button_light` / `.newsletter_button`):** 178×61px,
  `border: 2px solid` (ink `#1b1b1b`; hero variant white), transparent/white
  bg, 16px weight 600 text, `line-height: 57px`, `text-align: center`,
  `overflow: hidden`, cursor pointer. Hover: a white rotated panel sweeps in
  (`.button::after`, rotate3d -45deg → 0) and text color flips (dark button →
  white text; light button → ink text). Newsletter button: white bg + 2px ink
  border + ink text, same sweep. Reproduce with a white slide-in overlay
  (absolute div, rotate/translate transition) or a simplified bg-color swap —
  keep the border + text flip.
- **Header:** `position: fixed`, top 0, white bg (`#FFFFFF`), `.header_content`
  130px tall → **70px on scroll** (`.header.scrolled` class, 200ms ease);
  logo shrinks 30px → 24px. Nav links 16px 600 `#767676`, hover/active
  `#1b1b1b`, `margin-right: 46px` between items; dropdowns (`hassubs`) white
  panel, right-aligned text, links 14px 600 `#767676`. Right cluster:
  shopping-cart link (SVG bag icon + `(0)` count), search icon (opens a
  right-aligned search input panel), hamburger (mobile only → full-screen
  white page menu with links + search + social icons).
- **Hero (`.home` + `.home_slider_container`):** 950px tall, white page bg,
  container padding `130px 60px 30px`; each slide = full-bleed cover
  background photo (`images/home_slider_1.jpg` — dark studio shot with neon
  pink/cyan gradient) + content column at `top: 32.3%`, `max-width: 580px`:
  `.home_slider_title` 60px weight 600 white, `line-height: 1.2`; subtitle 14px
  400 white `line-height: 2.14`, `margin-top: 22px`; "Shop Now" `.button
.button_light` `margin-top: 40px`. Custom dots bottom-left ("01." "02."
  "03." 14px 600 white; active/hover `#e95a5a`) — the source uses
  `home_slider_custom_dot` divs (no arrows); implement with prev/next + dots,
  accessible.
- **Ads row (`.avds_container`):** height 490px, padding `0 60px`, white bg;
  two side-by-side: `.avds_small` (39.1% width, padding 30px, inner 2px white
  border) with a cover photo, a "20%" discount badge (`.avds_discount`,
  bottom-right: "20" 60px 700 ink + superscript "%" 36px + "Discount" 14px
  ink), then `.avds_small_content` (`max-width: 250px`, padding-top 57px):
  `.avds_title` 48px 600 white "Smart Phones" + `.avds_link` "See More" (14px
  400 white with a 1px white `::after` underline). `.avds_large` (60.8% width):
  cover photo + `rgba(0,0,0,0.63)` overlay panel (`padding: 51px 130px 30px
30px`): title 48px 600 white "Professional Cameras", `.avds_text` 14px white
  `line-height: 2.14`, `.avds_link` "See More".
- **Products (`.products`):** white bg, `padding-top: 99px`; grid of 4 columns
  (`.product` width `calc((100% - 90px) / 4)`, `margin-bottom: 59px`) — 8
  products, each: `.product_image` (cover photo, max-width 100%),
  `.product_extra` rotated-90° badge (66×36px, `transform-origin: top left`;
  NEW bg `#6c6a74`, SALE bg `#e95a5a`, HOT bg `#1b1b1b`, white 16px 500
  text), `.product_content` (padding `36px 0 38px`): `.product_title a` 18px
  500 ink (hover `#e95a5a`) + `.product_price` 16px 500 `#6c6a74`. Source
  items: 1 NEW, 2 SALE, 6 HOT, 8 SALE (all "$670" "Smart Phone" — paraphrase
  titles, keep price shape).
- **XL ad (`.avds_xl`):** full-width cover photo + dark overlay content:
  `.avds_title` 48px 600 white "Amazing Devices", `.avds_text` 14px white,
  `.avds_link` "See More".
- **Icon boxes (`.icon_boxes`):** white bg, `padding: 99px 0`; 3 centered
  columns: 75×75 image icon (source `icon_1.svg`–`icon_3.svg` — recreate with
  lucide `Truck`/`RotateCcw`/`Headphones` or similar), `.icon_box_title` 18px
  500 ink `margin-top: 33px`, `.icon_box_text` 14px muted `margin-top: 20px`.
  Titles: "Free Shipping Worldwide", "Free Returns", "24h Fast Support".
- **Newsletter (`.newsletter`):** white bg, `padding-bottom: 99px`,
  `border-top: 2px solid #e3e3e3`; centered: `.newsletter_title` 30px 500 ink
  "Subscribe to our newsletter", `.newsletter_text` 14px muted, form
  `margin-top: 46px`: email input 100% × 40px, no border except
  `border-bottom: 2px solid #787878`, centered text; `.newsletter_button`
  "Subscribe" (178×61, 2px ink border, white bg, 16px 600 ink,
  `margin-top: 55px`, sweep hover).
- **Footer:** the source fixes it to the viewport bottom (`position: fixed;
bottom: 0`) over a 129px transparent `.footer_overlay` spacer, with a cover
  background image (`images/footer.jpg`). Content row 129px: `.footer_logo`
  "Sublime." 30px 700 ink, `.copyright` 14px ink centered — MUST read
  "Copyright © <year> All rights reserved | Made with ♥ by Component Dock"
  with "Component Dock" linking https://www.componentdock.com/ (replacing the
  source's Colorlib credit) — and `.footer_social` right-aligned 3 icons
  (17px ink; hover white). Implement in normal document flow (static footer at
  page end) — the fixed-bottom quirk is an artifact of the source's inner-page
  layout and would cover content on long pages; note the deviation in the PR.

## Requirements

### Requirement: Header and navbar

The system SHALL render a fixed full-width white header (130px tall) with the
brand wordmark "Vendio" (30px, weight 700, ink `#1b1b1b`) on the left, a
centered nav with links Home, Categories, Accessories, Offers, Contact (16px
weight 600, `#767676`; hover/active `#1b1b1b`), and a right cluster: a cart
link with a bag icon and a visible "(0)" count, a search icon that opens a
search input panel, and (on mobile) a hamburger opening a full-screen white
menu. When the page is scrolled, the header SHALL shrink to 70px and the logo
to 24px (200ms transition).

#### Scenario: Navbar content

- **GIVEN** the page is rendered
- **WHEN** the header is inspected
- **THEN** it shows the wordmark "Vendio" and the nav links
  Home/Categories/Accessories/Offers/Contact plus a cart icon with count "(0)"
  and a search icon

#### Scenario: Shrinking header on scroll

- **GIVEN** the page is at the top
- **WHEN** the page is scrolled down
- **THEN** the header height transitions to 70px and the logo to 24px, staying
  fixed with a white background

#### Scenario: Search panel

- **GIVEN** the header is rendered
- **WHEN** the search icon is activated
- **THEN** a search input panel appears (right-aligned) and can be dismissed

#### Scenario: Mobile menu

- **GIVEN** a viewport below the desktop breakpoint
- **WHEN** the hamburger is activated
- **THEN** a full-screen white menu with the nav links, a search input, and
  social icons is shown, and the close control dismisses it

### Requirement: Hero slider

The system SHALL render a 950px-tall hero with a full-bleed dark cover
background photo (placeholder) and left-aligned content in a 580px column at
~32% height: a 60px weight-600 white headline "A new Online Shop experience.",
a 14px white subtitle paragraph, and a "Shop Now" outline button (178×61px,
2px white border, white 16px weight-600 text; on hover a white sweep fills the
button and the text turns ink). The slider SHALL cycle 3 slides (same copy,
varied placeholder photos) with numbered dots "01."/"02."/"03." bottom-left,
the active dot in accent red `#e95a5a`, and accessible prev/next or dot
controls.

#### Scenario: Hero content

- **GIVEN** the hero slider is rendered
- **WHEN** the first slide is inspected
- **THEN** it shows the headline "A new Online Shop experience.", the
  subtitle, a "Shop Now" outlined button, and the numbered dots 01/02/03 with
  01 active

#### Scenario: Slider navigation

- **GIVEN** the hero slider is rendered
- **WHEN** a dot (or next control) is activated
- **THEN** the visible slide changes and the active dot moves to the
  corresponding number in accent red

### Requirement: Ads row

The system SHALL render two side-by-side ad banners (490px tall): a small one
(~39% width, 2px white inner border) with a cover photo, a bottom-right "20 %"
discount badge (60px weight-700 ink "20" with a superscript "%" and a 14px
"Discount" label), a 48px weight-600 white title "Smart Phones" and a "See
More" link with a 1px white underline; and a large one (~61% width) with a
cover photo under a `rgba(0,0,0,0.63)` overlay containing the 48px white
title "Professional Cameras", a 14px white paragraph, and a "See More" link.

#### Scenario: Small ad banner

- **GIVEN** the ads row is rendered
- **WHEN** the small banner is inspected
- **THEN** it shows the "20 %" discount badge, the title "Smart Phones", and a
  "See More" link over the photo with the white inner border

#### Scenario: Large ad banner

- **GIVEN** the ads row is rendered
- **WHEN** the large banner is inspected
- **THEN** it shows the dark overlay panel with the title "Professional
  Cameras", a paragraph, and a "See More" link

### Requirement: Product grid

The system SHALL render a white section with a responsive 4-column grid of 8
product cards (placeholder images; titles paraphrased — source repeats "Smart
Phone", price "$670"). Each card SHALL have a cover image, an optional
rotated-90° corner badge (NEW = `#6c6a74`, SALE = `#e95a5a`, HOT = `#1b1b1b`,
white 16px text), a product title (18px weight 500 ink; hover accent red) and
a price (16px weight 500 `#6c6a74`). Badge layout per the source: item 1 NEW,
items 2 and 8 SALE, item 6 HOT, the rest plain.

#### Scenario: Product cards

- **GIVEN** the products section is rendered
- **WHEN** the grid is inspected
- **THEN** it shows 8 product cards in a 4-column grid, each with an image,
  title, and price

#### Scenario: Product badges

- **GIVEN** the product grid is rendered
- **WHEN** the badge elements are inspected
- **THEN** item 1 shows NEW, items 2 and 8 show SALE, item 6 shows HOT, each
  rotated 90° in the top-left corner with the matching badge color

#### Scenario: Product title hover

- **GIVEN** a product card is rendered
- **WHEN** the pointer hovers over its title
- **THEN** the title color changes to accent red `#e95a5a`

### Requirement: XL ad banner

The system SHALL render a full-width cover-photo banner with a dark overlay
and left-aligned content: a 48px weight-600 white title "Amazing Devices", a
14px white paragraph, and a "See More" link with a white underline.

#### Scenario: XL banner content

- **GIVEN** the XL banner is rendered
- **WHEN** it is inspected
- **THEN** it shows the title "Amazing Devices", a paragraph, and a "See More"
  link over the dark overlay

### Requirement: Icon boxes

The system SHALL render a white section with 3 centered benefit columns, each
with a 75×75 icon (lucide-react), a title 18px weight 500 ink, and a muted
14px paragraph: "Free Shipping Worldwide", "Free Returns", "24h Fast Support".

#### Scenario: Benefit boxes

- **GIVEN** the icon boxes section is rendered
- **WHEN** it is inspected
- **THEN** it shows three centered boxes titled "Free Shipping Worldwide",
  "Free Returns", and "24h Fast Support", each with an icon and a paragraph

### Requirement: Newsletter

The system SHALL render a white section with a 2px `#e3e3e3` top border,
centered: a 30px weight-500 ink title "Subscribe to our newsletter", a muted
intro paragraph, and a form with an email input (40px, no border except a 2px
`#787878` bottom line, centered text) and a "Subscribe" button (178×61px, 2px
ink border, white bg, 16px weight-600 ink; hover sweep inverts). Empty or
invalid email SHALL block submission with a validation message.

#### Scenario: Newsletter fields

- **GIVEN** the newsletter section is rendered
- **WHEN** the form is inspected
- **THEN** it shows the title, the email input, and the "Subscribe" button

#### Scenario: Email validation

- **GIVEN** the newsletter form is rendered
- **WHEN** the subscribe button is activated with an empty or invalid email
- **THEN** submission is blocked and a per-field validation error is shown

### Requirement: Footer

The system SHALL render a light footer (static, in normal document flow) with
the "Vendio" wordmark (30px weight 700 ink) on the left, a centered copyright
line "Copyright © <year> All rights reserved | Made with ♥ by Component Dock"
where "Component Dock" links https://www.componentdock.com/ (replacing the
source's Colorlib credit), and three right-aligned social icon links (17px
ink; hover white).

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** it is inspected
- **THEN** it shows the logo, the copyright line containing a link to
  https://www.componentdock.com/, and three social icon links

## Verification checklist

- [ ] `openspec/specs/template-vendio/spec.md` validated (`npm run spec:validate`)
- [ ] App folder `apps/vendio`, package `@free-react-templates/vendio`, no
      ColorLib references in app code (grep for colorlib/Sublime in apps/vendio)
- [ ] Footer links https://www.componentdock.com/
- [ ] Tests first, 100% coverage (Vitest + RTL) — `bash scripts/verify-app.sh vendio`
- [ ] Section order matches the source: header → hero slider → ads row →
      products → XL ad → icon boxes → newsletter → footer
- [ ] Tokens in `src/index.css` `@theme`: `--color-ink: #1b1b1b`,
      `--color-accent: #e95a5a`, `--color-muted: #767676`,
      `--color-price: #6c6a74`, `--color-line: #787878`; Poppins (300–900)
      Google Fonts link in `index.html`
- [ ] Buttons: 178×61px, 2px border (ink; hero variant white), 16px 600 text,
      hover white sweep + text flip; newsletter button white bg + ink border
- [ ] Header: fixed white, 130px → 70px on scroll, logo 30px → 24px; nav links
      `#767676` → `#1b1b1b` hover; cart "(0)" count; search panel; mobile
      full-screen menu
- [ ] Hero: 950px, cover photo, 60px white headline, outlined "Shop Now", 3
      slides with numbered dots 01/02/03 (active `#e95a5a`)
- [ ] Badges: NEW `#6c6a74`, SALE `#e95a5a`, HOT `#1b1b1b`, rotated 90°,
      items 1 NEW / 2+8 SALE / 6 HOT
- [ ] Placeholder images via `https://picsum.photos/seed/vendio-<n>/<w>/<h>`;
      icons from `lucide-react`
- [ ] PR description: source template, preview URL, design tokens, diffs
      (name, placeholder images, flat nav, static footer, no fixed-bottom
      footer quirk)
