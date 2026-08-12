# Template: Vintner (Wine Shop Template)

## Purpose

Vintner is a single-page wine-shop / winery website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Wines" website template design (see TEMPLATES.md, Bootstrap
category), built under a different name with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

Vintner recreates the ColorLib "Wines" free Bootstrap wine template — an
elegant, high-contrast wine shop landing page with a deep wine-purple
(`#930077`) brand accent, a full-screen two-slide hero carousel over
vineyard/grapes photography with a dark overlay, a centered Cinzel serif
wordmark header, three wine product cards with gold ratings and hover-reveal
"Add to Cart" overlays, a light testimonial carousel, a three-post wine blog
band, and a centered minimal footer.

Vintner appears FOUR times in TEMPLATES.md (all rows are the same source
slug): line 533, line 1229, line 1611, and line 1793 — implement ONE app and
mark ALL FOUR rows `[x]` at bookkeeping.

## Design reference (replication findings)

- **Original:** ColorLib "Wines" — wine shop / winery landing template
  (source: https://colorlib.com/wp/template/wines/; TEMPLATES.md rows 533,
  1229, 1611, 1793).
- **Preview URL:** https://preview.colorlib.com/theme/wines/ — HTTP 200,
  full rendered DOM analyzed (24 KB, title "Wines — Website Template by
  Colorlib"). Stylesheet `css/style.css` (~30 KB, extracted) is the main
  theme; the page also loads bootstrap.min, owl.carousel.min,
  owl.theme.default, jquery-ui, jquery.fancybox, bootstrap-datepicker, aos,
  flaticon and icomoon icon fonts. Cross-checked against the TEMPLATES.md
  screenshot (`wines-free-template.jpg`, 1200×946, AVIF — viewed in the
  browser) — the DOM/CSS tokens and the screenshot match (hero + header
  visible in the capture; products/testimonials/blog/footer confirmed from
  the DOM). The demo brands itself "Wines"; the recreation uses the NEW
  name **Vintner**.
- **Design tokens (from `css/style.css`):**
  - Brand color: `#930077` (deep wine purple/magenta) — nav active link,
    mobile-nav hover/active, `.more` links, active carousel dots, product
    price text, sticky-nav active underline. Put in `@theme` as `brand`.
  - Rating accent: `#ffbd39` (gold) — product star ratings.
  - Buttons: pill shape `border-radius: 30px`, solid black `#000`
    background, white text (`.btn` base; "Add to Cart" is `.btn.add` with a
    shopping-bag icon).
  - Surfaces: white `#fff` (navbar, page, product card overlay, footer);
    light band `#f4f5f9` / `#edf0f5` (testimonials `bg-light` section);
    product image panel `#f3f4f5`; footer `border-top: 1px solid #efefef`;
    text dark `#25262a` / `#212529`; struck price `#ccc`.
  - Hero treatment: slides are full-viewport (`100vh`, `min-height: 700px`)
    background images with a dark `#222` overlay (`.hero-2:before`,
    `opacity` ~0.4), content centered; sub-title Cinzel 1.5rem white,
    headline Cinzel white.
  - Typography: **Cinzel** (headings, nav, logo, sub-titles, prices, post
    titles — `.section-title h2` is Cinzel 2rem weight 400), **Montserrat**
    (body/buttons/UI). The preview HTML has NO Google Fonts `<link>` (fonts
    assumed preloaded); the recreation must load both from Google Fonts
    `<link>`s in `index.html`.
  - Navbar: `background: #fff`, `font-family: Cinzel`, bold, sticky
    (`js-sticky-header`), centered links.
- **Visual design (from screenshot + live DOM):** clean white, high-contrast
  editorial layout. Top: centered logo ("WINES CO." serif wordmark with a
  small "SINCE 1985" tagline and short underline) above a white Cinzel nav
  (HOME / ABOUT / WINES / SHOP / CONTACT, active link in `#930077`). Hero:
  full-bleed close-up of hands holding dark grapes against a soft green
  vineyard bokeh, dimmed by a dark overlay; "ROYAL WINE" Cinzel label +
  large white "GRAPE WINE" headline centered; thin left/right arrows and
  bottom-center dots (active dot `#930077`). Below the fold (from DOM):
  white "Our Products" band with three wine-bottle cards on light panels
  (name, gold stars, `#930077` price, hover-reveal white overlay with
  "Add to Cart" black pill), a light-grey testimonial carousel ("Wines For
  Everyone") with round person photos, a "Wine's Blog" band with three photo
  post cards, and a centered minimal footer.
- **Section order (1:1):**
  1. `header-top` — centered logo image (`images/logo.png`) in a thin top
     band; below it the desktop nav.
  2. `site-navbar` (`py-2 js-sticky-header`, white, Cinzel bold, centered):
     Home / About / Wines / Shop / Contact; hamburger (`icon-menu`)
     toggles the mobile menu.
  3. Hero slider (`owl-carousel hero-slide owl-style`, arrows + dots):
     - Slide 1 (bg `images/hero_1.jpg`): sub-title "Royal Wine" + H1
       "Grape Wine".
     - Slide 2 (bg `images/hero_2.jpg`): sub-title "Welcome" + H1 "Wines
       For Everyone".
  4. Products (`site-section mt-5`): centered "Our Products" + lorem
     sub-line + "View All Products →" link; 3 cards
     (`wine_v_1 text-center pb-4`, images `wine_1/2/3.png`): h3 name
     ("Trius Cabernet France 2011"), price `$629.00`; hover overlay
     (`.wine-actions`, white panel fading in): name, `<del>$900.00</del>`
     (grey `#ccc`) + `$629.00` (brand `#930077`, Cinzel 20px), 4/5 gold
     stars, black pill "Add to Cart".
  5. Testimonials (`site-section bg-light` + `owl-slide-3`): sub-title
     "Welcome" + H2 "Wines For Everyone"; carousel of 4 quotes (same lorem
     quote) attributed "— Collin Miller", "— Harley Perkins", "— Levi
     Morris", "— Allie Smith" with round person photos
     (`person_1/2/3.jpg`).
  6. Blog (`site-section`): centered "Wine's Blog" + lorem sub-line +
     "View All Products →" link; 3 post cards (`post-entry-1`,
     `post-meta`): image (`img_1/2/3.jpg`), Cinzel 20px title ("What You
     Need To Know About Premium Rosecco"), lorem excerpt, meta ".8rem"
     ("Dave Rogers in News").
  7. Footer (`.footer`): centered, `.85rem`, `padding: 7rem 0`,
     `border-top: 1px solid #efefef`, copyright line + "made with by
     Colorlib" (replaced by the mandatory Component Dock link).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/vintner-<n>/<w>/<h>`; hero slides want grape/
  vineyard-style subjects — screen the seed before pinning, per the
  seed-screening method); logo → styled text wordmark "Vintner" (Cinzel,
  with a "Since" tagline) instead of the image asset; icons → lucide-react
  (menu, star, shopping-bag, arrow-right, quote); Cinzel + Montserrat via
  Google Fonts `<link>`s; no assets copied. Copy paraphrased but same
  content kinds (slide label + headline, product name + price + rating +
  cart action, testimonial quote + name, post title + excerpt + meta).
  Product names/prices: keep the demo's kind of content — e.g. "Cabernet
  Sauvignon 2019", `$629.00` with an original price struck through.

## Requirements

### Requirement: Header (logo + navbar)

The system SHALL render a centered logo wordmark above a white sticky
navigation bar.

#### Scenario: Logo band

- **GIVEN** the Vintner page is rendered
- **WHEN** the header is displayed
- **THEN** the header SHALL show a centered brand wordmark "Vintner" in a
  Cinzel serif at the top of the page (above the nav)
- **AND** the wordmark SHALL have a small uppercase tagline beneath it
  (e.g. "Since 1985") with a short underline accent

#### Scenario: Desktop nav

- **GIVEN** the Vintner page is rendered at desktop width
- **WHEN** the navigation bar is displayed
- **THEN** the nav SHALL have a white background and Cinzel bold links
  Home, About, Wines, Shop, and Contact, centered
- **AND** the active (current-page) link SHALL be colored `#930077`
- **AND** the nav SHALL stick to the top when the page scrolls

#### Scenario: Mobile nav

- **GIVEN** the Vintner page is rendered at mobile width
- **WHEN** the hamburger icon is clicked
- **THEN** a slide-in mobile menu SHALL open listing the same five links
- **AND** the menu SHALL have an accessible toggle with `aria-expanded`
  state and a close control
- **AND** the mobile menu links SHALL turn `#930077` on hover/active

### Requirement: Hero slider

The system SHALL render a full-screen two-slide hero carousel with a dark
overlay, centered Cinzel headline + sub-title, arrows, and dots.

#### Scenario: Slide 1

- **GIVEN** the Vintner page is rendered
- **WHEN** the hero slider is displayed and the first slide is active
- **THEN** the slide SHALL fill the viewport height (100vh, min-height
  700px) with a background photo
- **AND** the slide SHALL have a dark `#222` overlay dimming the photo
- **AND** the slide SHALL show the centered sub-title "Royal Wine" in
  Cinzel white (1.5rem) above the headline
- **AND** the slide SHALL show the centered headline "Grape Wine" in large
  white Cinzel

#### Scenario: Slide 2

- **GIVEN** the Vintner page is rendered
- **WHEN** the second slide is shown
- **THEN** the slide SHALL show the centered sub-title "Welcome"
- **AND** the slide SHALL show the centered headline "Wines For Everyone"

#### Scenario: Carousel controls

- **GIVEN** the hero slider is rendered
- **WHEN** the user interacts with the slider
- **THEN** the slider SHALL show left/right arrow controls and bottom-center
  pagination dots
- **AND** the active dot SHALL be `#930077` and inactive dots grey
- **AND** slides SHALL advance automatically (e.g. every 5s) and on arrow
  click

### Requirement: Products

The system SHALL render a white "Our Products" band with three wine product
cards whose hover overlay reveals rating, price, and an Add to Cart button.

#### Scenario: Section heading

- **GIVEN** the Vintner page is rendered
- **WHEN** the products section is displayed
- **THEN** the section SHALL show the centered Cinzel heading "Our
  Products" with a short sub-line beneath it
- **AND** the section SHALL show a "View All Products" text link with a
  right arrow icon

#### Scenario: Product cards

- **GIVEN** the products section is rendered
- **WHEN** the section is displayed
- **THEN** the section SHALL show three product cards in a 3-column grid
  (2 on tablet, 1 on mobile)
- **AND** each card SHALL show a wine bottle image on a light `#f3f4f5`
  panel, a product name heading (e.g. "Cabernet Sauvignon 2019"), and the
  sale price `$629.00`
- **AND** each card SHALL reveal a white overlay on hover showing the
  product name, the original price struck through in grey `#ccc` (e.g.
  `$900.00`) next to the sale price in `#930077`, a 4-of-5 gold `#ffbd39`
  star rating, and a black pill "Add to Cart" button with a shopping-bag
  icon

### Requirement: Testimonials

The system SHALL render a light-grey testimonials section with a quote
carousel.

#### Scenario: Section heading

- **GIVEN** the Vintner page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** the section SHALL have the light background (`#f4f5f9`) of the
  source's `bg-light` band
- **AND** the section SHALL show the centered sub-title "Welcome" above the
  centered Cinzel heading "Wines For Everyone"

#### Scenario: Quote carousel

- **GIVEN** the testimonials section is rendered
- **WHEN** the carousel is displayed
- **THEN** the carousel SHALL cycle through at least four testimonial
  slides
- **AND** each slide SHALL show a quote and an attribution with a round
  person photo and the name prefixed by an em dash (e.g. "— Collin
  Miller")

### Requirement: Blog

The system SHALL render a "Wine's Blog" band with three photo post cards.

#### Scenario: Post cards

- **GIVEN** the Vintner page is rendered
- **WHEN** the blog section is displayed
- **THEN** the section SHALL show the centered Cinzel heading "Wine's Blog"
  with a short sub-line and a "View All Products" text link with a right
  arrow icon
- **AND** the section SHALL show three post cards in a 3-column grid (2 on
  tablet, 1 on mobile)
- **AND** each card SHALL show a photo, a Cinzel 20px title (e.g. "What You
  Need To Know About Premium Rosé"), a short excerpt, and a small meta line
  with an author and a category (e.g. "Dave Rogers in News")

### Requirement: Footer

The system SHALL render the centered minimal footer.

#### Scenario: Footer content

- **GIVEN** the Vintner page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL be centered with small text (`.85rem`),
  generous padding (7rem top/bottom), and a `1px solid #efefef` top border
- **AND** the footer SHALL show a copyright line
- **AND** the footer SHALL link to https://www.componentdock.com/
  ("Component Dock") per the repo rule

## Verification checklist

- [ ] `scripts/verify-app.sh vintner` passes (typecheck + lint + 100%
      coverage tests + build)
- [ ] All spec scenarios implemented (`openspec/specs/template-vintner/spec.md`)
- [ ] Visual pass vs the TEMPLATES.md screenshot
      (`wines-free-template.jpg`) and the live preview
      (https://preview.colorlib.com/theme/wines/) — centered logo +
      Cinzel nav with `#930077` active link, dark-overlay hero slider,
      `#930077` accents, pill black buttons, light testimonials band
- [ ] Google Fonts: Cinzel + Montserrat loaded via `<link>` in `index.html`
- [ ] TEMPLATES.md lines 533, 1229, 1611, AND 1793 all marked `[x]`
- [ ] `public/CNAME` = `vintner.free.componentdock.com`; `homepage` =
      `https://vintner.free.componentdock.com`
