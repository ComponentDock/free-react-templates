# Template: Epicure (Restaurant Website Template)

## Purpose

Epicure is a single-page restaurant website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Cuisines" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Cuisines" — restaurant / fine-dining website
  template (Bootstrap 5 + tiny-slider + glightbox + AOS, by
  Colorlib; page title reads "Cuisines Restaurant Website Template by
  Colorlib").
  (source: https://colorlib.com/wp/template/cuisines/).
- **Preview URL analyzed:** https://preview.colorlib.com/theme/cuisines/
  (HTTP 200, ~30.4 KB HTML fetched + `css/style.css` ~53 KB parsed;
  `fonts/icomoon/style.css`, `css/tiny-slider.css`, `css/glightbox.min.css`
  also referenced; live DOM reviewed, screenshot reviewed in browser).
- **Screenshot analyzed:** `cuisines-free-template.jpg` (1200×946, AVIF) —
  fixed WHITE sidebar on the left (logo "CUISINES" top, vertical uppercase
  nav ABOUT US / OUR MENU / SPECIAL OFFERS / GALLERY / CONTACT US, phone
  number at the bottom); main content on the right: hero with deep indigo
  `#120078` panel behind a big uppercase white headline "YOU DON'T NEED A
  SILVER FORK TO EAT GOOD FOOD" + white "See Our Menu" and outline
  "Special Offers" buttons + dark, moody roast-chicken food photo on the
  right; below, a light-grey "SPECIAL OFFERS" section (small "OFFERS"
  eyebrow + 4 alternating image/text cells with `$9.00` prices, food
  photography on dark backgrounds); premium fine-dining editorial
  aesthetic. Sections alternate white / light-grey `#e6e6e6`; footer is
  deep indigo `#120078`.
- **Section order (1:1, from the DOM of the home page):**
  1. Preloader (`#overlayer` + `.loader` spinner, white overlay, z-index
     7100 — repo recreations usually skip/instant; keep optional).
  2. Mobile off-canvas menu (`div.site-mobile-menu`, right slide-in, width
     300px, WHITE bg, `height: calc(100vh)`, shadow
     `-10px 0 20px -10px rgba(0,0,0,0.1)` when open, z-index 2000): close
     X (rotating bars), centered logo, stacked nav links (black, hover /
     active `#120078`). Trigger: `a.burger` hamburger (3 bars 28×32,
     white variant `.light` over the hero) top-right, `position: absolute`
     top 20px right 20px, z-index 999.
  3. Fixed left sidebar (`aside.sidebar`, `width: 280px`, `height: 100vh`,
     WHITE bg, `position: fixed`, font Oswald):
     - Logo top (`div.logo`, centered, padding 20px 0 30px): `img
logo.svg` — recreate as text wordmark "EPICURE" (bold, Oswald,
       uppercase; brand `#120078`).
     - Navigation (`div.navigation`, vertically centered via
       `top: 50%; translateY(-50%)`, width 100%): `ul` of 5 links — **About
       Us / Our Menu / Special Offers / Gallery / Contact Us** — each a
       centered uppercase link, weight 700, with a 2px underline
       (`span:after`, `height: 2px`, scaleX 0→1 on hover / `.active`).
     - Quick contact (`div.quick-contact-info`, absolute bottom 20px,
       centered): caption "Book A Table" (small uppercase), phone link
       `+91-8010200777` (24px, weight 700), opening line "Mon - Sun,
       8:00AM - 11:00PM". (Recreate with placeholder-ish copy: a caption,
       a phone number, hours.)
  4. Main content (`div.main`, `width: calc(100% - 280px)`,
     `transform: translateX(280px)` — Tailwind: `ml-[280px]`):
  5. Hero (`div.hero`, `position: relative`, `padding-bottom: 10rem`):
     `:before` panel = `background-color: #120078`, `width: 70%`, left,
     top/bottom 0, `z-index: -1` (indigo block behind the intro);
     `div.hero-wrap img` = `position: absolute`, `width: 900px`,
     `z-index: -1`, `right: 0` (food photo bleeding off the right edge;
     relative on mobile). Left `div.intro` (desktop: `left: 200px`,
     `margin-top: 100px`; mobile: `left: 0`): `h1.heading` Oswald
     **5rem** uppercase WHITE — **"You don't need a silver fork to eat
     good food."** (40px mobile) + `p` 20px white + two CTAs:
     `a.btn.btn-white` "See Our Menu" (white bg, `#120078` text) and
     `a.btn.btn-outline-white` "Special Offers" (1px white border, white
     text).
  6. Special Offers (`div.section.section-1`, white bg): centered
     `col-lg-7`: `span.subheading` "Offers" (12px, uppercase, `#120078`,
     weight 700, letter-spacing .1rem) + `h3.heading` "Special Offers"
     (Oswald, **3rem**, uppercase, black). Below, `row.g-0
align-items-stretch` with `col-lg-12` rows of `div.feature-media
d-block d-lg-flex align-items-stretch`: FOUR cells per row, each 25%
     (`flex: 0 0 25%`; 100% mobile): `div.img` (bg-image cover, ~200px
     tall on mobile) / `div.text` (WHITE bg, centered, `padding:
30px`): `h3` 24px black "Lorem ipsum dolor" + blurb p + `span.price`
     `$9.00` (**`#8bc34a`**, 20px). Row 1: img, text, img, text. Row 2:
     text, img (`order-2`), text, img. (4 items total = 2 rows of 4.)
  7. About (`div.section.section-2`, white bg): `row justify-content-between
align-items-center`: left `col-lg-4`: `span.subheading` "About Us" +
     `h3.heading` "About Cuisines" (→ "About Epicure") + paragraph + `ul
.ul-check` of 4 checkmark items (icons `#8bc34a`, font icon `\f058`
     — recreate with lucide Check in `#8bc34a`) + `a.btn.btn-primary`
     "See Our Menu" (bg `#120078`, white text, hover `#0f0066`); right
     `col-lg-7`: `div.img-slider-wrap` — image slider (tiny-slider, 2
     images `hero_2.jpg` / `hero_1.jpg`) with prev/next arrow controls
     - dots (7px pills, `bottom: -60px`, active white).
  8. Testimonials (`div.section.section-3`, **bg `#e6e6e6`**): centered
     `col-lg-8`: `span.subheading` "Testimonials" + `h3.heading` "Happy
     Customers"; `div.testimonial-slider` of THREE `div.item > div
.testimonial.text-center` (text max-width 500px centered): square
     avatar `img` (`person_sq_1.jpg` / `person_sq_2.jpg`, `mb-3`) +
     `blockquote` 20px quote + `div.author`: name `span.font-weight-bold`
     (Sheena Smith / Ben Miller / Sheena Smith) + `span.position`
     "Customer". Slider: 3 items, prev/next + dots.
  9. Footer (`div.footer`, **bg `#120078`**, `color:
rgba(255,255,255,0.5)`, `padding: 7rem 0`; links white, 2px white
     underline revealed on hover):
     - `col-lg-3`: `h3.heading` "About us" (13px, Oswald, bold,
       uppercase, letter-spacing .2rem, white) + paragraph + "Read more"
       link.
     - `col-lg-2 offset-lg-1`: `h3.heading` "Links" — Home / Our Menu /
       Special Offers / Gallery / Contact.
     - `col-lg-2`: `h3.heading` "Our Menu" — Breakfast / Brunch / Dinner
       / Drinks.
     - `col-lg-4`: `h3.heading` "Opening Hours" — "Monday - Friday"
       `8:00 am — 5:00pm`; "Sunday" `8:00 am — 8:00pm`.
     - Bottom centered copyright bar: "Copyright © <year> All rights
       reserved | This template is made with <heart> by Colorlib"
       (monorepo credit, not ColorLib).
- **Design tokens extracted from the preview CSS (`css/style.css`) + live
  computed styles:**
  - Primary brand **indigo `#120078`** (22 uses; `--bs-primary`):
    `.hero:before` panel, `.btn-primary` bg/border, `.subheading` color,
    `.footer` bg, `.social-custom` icon bg, mobile menu active/hover
    link color. Hover/deep shades: `#0f0066` (btn-primary hover bg),
    `#0e0060` (btn-primary hover border). Secondary `#10495c`
    (`--bs-secondary`, minor use).
  - Accent green **`#8bc34a`**: `.feature-media .text .price` ($9.00)
    and `.ul-check li:before` check icons.
  - Neutrals: body text `#212529`; muted `#6c757d`; light `#f8f9fa`;
    borders `#e9ecef`/`#dee2e6`; testimonial section bg `#e6e6e6`;
    footer text `rgba(255,255,255,0.5)`; mobile-menu shadow
    `-10px 0 20px -10px rgba(0,0,0,0.1)`.
  - Fonts: **"Oswald"** everywhere by default (`--bs-font-sans-serif:
"Oswald", sans-serif`); headings Oswald uppercase — `.heading` 3rem,
    hero h1 5rem (40px mobile), footer `.heading` 13px bold letter-spacing
    .2rem; `.subheading` 12px uppercase letter-spacing .1rem weight 700;
    sidebar nav links uppercase weight 700; phone 24px weight 700; one
    `"Poppins", sans-serif` declaration exists in the CSS (secondary
    fallback). Load Oswald (400/500/700) via Google Fonts `<link>` in
    `index.html`.
  - Buttons: `.btn-primary` bg `#120078`, white text, hover bg `#0f0066`;
    `.btn-white` white bg / `#120078` text, `border: 1px solid
transparent`; `.btn-outline-white` `border: 1px solid #fff`, white
    text. Radius: Bootstrap 5 default (0.25rem / 4px — no radius
    override in the custom CSS).
  - Hero: `.hero` padding-bottom 10rem; `:before` indigo panel 70% width
    z-index -1; intro `left: 200px; margin-top: 100px` (desktop) / left 0
    (mobile); headline white Oswald uppercase 5rem; subtext 20px white;
    hero image absolute 900px wide right, z-index -1.
  - Sections: `.section-1`/`.section-2` white; `.section-3` `#e6e6e6`;
    `.feature-media > div` 25% each (100% mobile); `.feature-media .text`
    white, centered, padding 30px; h3 24px black; `.price` `#8bc34a`
    20px; `.subheading` 12px uppercase `#120078` letter-spacing .1rem;
    `.heading` Oswald 3rem uppercase black.
  - Testimonials: `.testimonial-text` max-width 500px centered; avatar
    square `img-fluid mb-3`; blockquote 20px; author name bold + position
    muted. Dots: 7px pills bottom -60px centered.
  - Footer: bg `#120078`, padding 7rem 0, text
    `rgba(255,255,255,0.5)`; `.heading` 13px bold uppercase
    letter-spacing .2rem white; links white with 2px white underline
    (scaleX 0→1 hover); `.footer-links li` margin-bottom 10px.
  - Sidebar: fixed 280px white, Oswald; nav links centered uppercase
    weight 700, 2px underline animation on hover/active; quick-contact
    absolute bottom 20px.
  - Mobile: burger top-right 28×32 (white variant over hero), off-canvas
    right slide-in 300px white z-index 2000 with close X.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/epicure-<n>/<w>/<h>`); icons → lucide-react
  (Menu, X, Phone, Check, ChevronLeft, ChevronRight, Heart); Oswald via
  Google Fonts `<link>` in `index.html`; brand indigo `#120078` in
  `@theme` so shared Button/ButtonLink and `text-primary` resolve
  correctly; sidebar logo is a TEXT wordmark "EPICURE" (no asset
  copying); hero panel + image layout with `relative`/`absolute`
  positioning equivalent to the `:before` + `hero-wrap` trick; image
  slider in About = simple carousel with prev/next + dots; testimonial
  slider = carousel with 3 items + dots; hero uses the single static
  headline + photo (no slider on the home hero); demo copy paraphrased
  but same kinds (fine-dining headline + CTAs, offers with prices, about
  blurb + check list, customer quotes, hours, links); footer credit per
  repo rules (Component Dock, not ColorLib).
- **What to keep 1:1:** sidebar-fixed layout (280px rail + shifted main),
  section order, indigo/white/`#e6e6e6` rhythm, Oswald uppercase
  headings, `#8bc34a` price/check accent, alternating image/text offer
  cells, dark indigo footer with white links.

## Requirements

### Requirement: Sidebar navigation

The system SHALL render a fixed white sidebar on the left with the
wordmark, five navigation links, and a quick-contact block (phone +
hours), plus a right-slide mobile menu on small viewports.

#### Scenario: Sidebar content

- **GIVEN** the Epicure page is rendered on a desktop viewport
- **WHEN** the page loads
- **THEN** a fixed white sidebar SHALL show the site wordmark "Epicure"
- **AND** the sidebar SHALL show links About Us, Our Menu, Special Offers, Gallery, and Contact Us
- **AND** the sidebar SHALL show a "Book A Table" caption, a phone number, and opening hours

#### Scenario: Nav link underline

- **GIVEN** the sidebar navigation is rendered
- **WHEN** the user hovers over a nav link
- **THEN** a 2px underline SHALL animate in beneath the link text

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at a mobile viewport
- **WHEN** the user taps the hamburger button
- **THEN** a right-slide off-canvas menu SHALL open with the wordmark and stacked navigation links
- **AND** the menu SHALL close when the user activates the close button

### Requirement: Hero

The system SHALL render a hero with an indigo background panel behind a
large white uppercase headline, a subtext line, and two call-to-action
buttons beside a food photo on the right.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the headline "You don't need a silver fork to eat good food."
- **AND** a "See Our Menu" button (white) and a "Special Offers" button (white outline)
- **AND** a food photo SHALL be positioned on the right side of the hero

#### Scenario: Hero styling

- **GIVEN** the hero is displayed
- **WHEN** the user inspects it
- **THEN** the headline SHALL be white uppercase Oswald text over an indigo `#120078` panel

### Requirement: Special Offers section

The system SHALL render a white section with an "Offers" eyebrow, the
heading "Special Offers", and two rows of four alternating image/text
cells, each text cell with a title, blurb, and a green price.

#### Scenario: Offer content

- **GIVEN** the page is rendered
- **WHEN** the special offers section is displayed
- **THEN** it SHALL show the eyebrow "Offers" above the heading "Special Offers"
- **AND** four offer cells SHALL be visible, each alternating image and text
- **AND** each text cell SHALL show a dish title, a short blurb, and a price in green (e.g. "$9.00")

### Requirement: About section

The system SHALL render an About section with an "About Us" eyebrow, the
heading "About Epicure", a paragraph, a checkmark list, a primary
button, and an image slider on the right.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the eyebrow "About Us" and the heading "About Epicure"
- **AND** a paragraph and a list of at least three checkmark items
- **AND** a "See Our Menu" button in the brand indigo color

#### Scenario: Image slider navigation

- **GIVEN** the about image slider is displayed
- **WHEN** the user activates a previous/next control or a dot
- **THEN** the slider SHALL advance to the corresponding image

### Requirement: Testimonials section

The system SHALL render a light-grey section with a "Testimonials"
eyebrow, the heading "Happy Customers", and a carousel of centered
customer quotes with avatars.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the eyebrow "Testimonials" and the heading "Happy Customers"
- **AND** at least one testimonial SHALL show a square avatar, a quote, a customer name, and the position "Customer"

#### Scenario: Testimonial carousel navigation

- **GIVEN** the testimonial carousel is displayed
- **WHEN** the user activates a navigation control
- **THEN** the carousel SHALL advance to the next testimonial

### Requirement: Footer

The system SHALL render a dark indigo footer with About, Links, Our Menu,
and Opening Hours columns, a Component Dock credit line, and a copyright
bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an "About us" column with a paragraph and a "Read more" link
- **AND** a "Links" column (Home, Our Menu, Special Offers, Gallery, Contact)
- **AND** an "Our Menu" column (Breakfast, Brunch, Dinner, Drinks)
- **AND** an "Opening Hours" column with at least two day/hour rows
- **AND** a centered copyright bar crediting Component Dock

### Requirement: Page composition

The system SHALL compose the sidebar and all sections into one page with
a main landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Epicure app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the sidebar, hero, special offers, about, testimonials, and footer in order
- **AND** the document title SHALL be "Epicure — Cuisines Template"

## Verification checklist

- [ ] `openspec/specs/template-epicure/spec.md` present with the REAL
      section list (sidebar → hero → special offers → about →
      testimonials → footer).
- [ ] Design tokens above (indigo `#120078` + `#0f0066`/`#0e0060` hover
      shades, green `#8bc34a` price/check accent, `#e6e6e6` testimonial
      bg, Oswald uppercase headings 3rem/5rem, 12px uppercase `#120078`
      subheadings, fixed 280px white sidebar with animated underline
      nav, dark indigo footer) captured in the spec.
- [ ] `docs/templates/epicure/tasks.md` has the task outline + design notes.
- [ ] `npm run spec:validate` passes for this spec.
- [ ] Implementer: TDD at 100% coverage, `bash scripts/verify-app.sh
    epicure`, PR lists source (ColorLib Cuisines), preview URL, tokens,
      and what differs.
