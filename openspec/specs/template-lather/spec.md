# Template: Lather (Barber Shop)

## Purpose

Lather is a single-page barber-shop template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Barcut"
design (see TEMPLATES.md — line 212, Beauty/Salon section; unchecked item
whose prep did not exist on main), built under the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The original is a barbershop landing page with a gold-on-white luxury
aesthetic: a white header bar with nav links (Home / about / pricing /
barbers / gallery, plus Pages and Blog dropdowns) and a right-side nav
button, a full-width hero carousel with three banner photos and a static
text overlay ("For All Occasion HairStyle is a Must Try Fashion") with a
gold gradient "Watch Intro Video" play button, a white about section
("We Believe that Interior beauty Lasts Long") with photo + text + "Learn
More" button, a services grid of four photo cards ("What We Can Do for
You"), a "Select Your Style" tabbed catalogue block with four icon tabs and
a "View Gallery..." button, a barbers team row ("We Have All Famous
Barbers"), a testimonials carousel with thumbnail navigation, a
three-column pricing section ("Choose Your Package"), a blog row ("Latest
From Blog"), and a black footer with About Me / Newsletter / Follow Me
widgets. Lather recreates that structure section-for-section with matching
layout, colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Barcut" — free Bootstrap 4 barber/hair-stylist
  website template (source: https://colorlib.com/wp/template/barcut/). New
  name: **lather** (barber's lather — foamy shaving cream, a classic
  barbershop motif; single word, no collision with `ls apps/` or existing
  spec folders).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/barcut/`
  (HTTP 200, ~42KB; page title "Barcut Salon"). Stylesheets referenced:
  `css/main.css` (~76KB — custom template styles) plus linearicons,
  font-awesome.min, availability-calendar, magnific-popup, nice-select,
  owl.carousel, bootstrap, bootstrap-datepicker. JS: jquery, bootstrap,
  owl.carousel (hero + testimonials slides), magnific-popup, main.js.
  The CSS declares **"Playfair Display"** (serif — headings) and **"Roboto"**
  (sans — body/buttons), both loaded via cf-fonts @font-face; in the
  recreation load both from Google Fonts `<link>` in index.html.
- **Screenshot:** `barcut-free-template.jpg` (TEMPLATES.md line 212) —
  confirms the visual design: a clean white top with a gold gradient
  call-to-action, a large hero photo of a man getting a haircut with a
  gold "Watch Intro Video" play button, white about/services sections with
  gold accents and Playfair Display serif headings, a photo catalogue, a
  black footer bar. Gold #ba9236 is the dominant accent.
- **Section order (1:1):**
  1. `header.header-area` — white bar (`background-color: #fff`, `z-index:
999999`) with brand + collapsible nav (`id="collapsibleNavbar"`):
     top-level links **Home / about / pricing / barbers / gallery / Pages
     (dropdown: Services, Elements) / Blog (dropdown: Blog, Blog Detail) /
     Contact**, centered `justify-content-center w-100`, plus a right-side
     nav button (the header also hosts the brand image left).
  2. `section.home-banner-area.relative > div.owl-carousel.home-banner-owl`
     — full-width hero **carousel of three banner photos** (`img/banner/b1..
b3.jpg`, each `div.banner-img` with an `overlay overlay-bg` dark
     overlay); the text is a static `div.text-wrapper` overlay (not per
     slide): `h1` **"For All Occasion HairStyle is a Must Try Fashion"**, a
     lorem paragraph, a gold-gradient circular **Watch Intro Video**
     (`a#play-video.video-play-button`, opens a YouTube popup) with
     `div.video-text` "Watch Intro Video" caption below.
  3. `section.about-area.section-gap-top` — about block
     (`div.single-about.row.align-items-center`): left text
     (`about-content`, col-lg-4): `h1` **"We Believe that Interior beauty
     Lasts Long"**, a lorem paragraph, **Learn More** (`a.primary-btn`, gold
     gradient, uppercase, letter-spacing 2px); right photo (`about-thumb`,
     col-lg-7, `img/about-img.jpg`) plus an extra small `bordered-img`
     (`img/about-img2.jpg`).
  4. `section.service-area.section-gap` — services: `div.section-title`
     (`h1` **"What We Can Do for You"** + lorem sub-label) + a row of four
     `col-lg-3` `div.single-service` photo cards (image + `h4` caption):
     **Stylish Hair Cutting / Quality Gel Shave / Beard Trimming /
     Executive Wash**.
  5. `section.catalogue-area.section-gap` — "Select Your Style" tabbed
     block (`div.tab-area > div.tab-contact-wraper#horizontalTab`): `h4`
     **"Select Your Style"** + `p` "Shaveing"; a `div.jq-tab-menu` of four
     `div.jq-tab-title` icon tabs (`data-tab="1..4"`, first `.active`, some
     `.deff-bg1`); each `div.jq-tab-content` shows the same lorem text and a
     **View Gallery...** (`a.view-btn`). (The `.single-gallery .thumb
.overlay-bg` gold gradient exists in CSS for inner gallery pages but
     the homepage catalogue is this tab block.)
  6. `section.team-area.section-gap` — barbers: `div.section-title`
     **"We Have All Famous Barbers"** + a row of three `col-lg-4`
     `div.single-team-member` cards (photo `member-img` + `div.proff` h4
     name + p role): **Peter Baker / Head hair Cut Specialist, Nancy
     Holmes / Spa & Makeup Specialist, Gavin Hansen / Hair Styling Expert**.
  7. `section.testimonials-area.section-gap-top` — testimonials **carousel**
     (`.testi-slider.owl-carousel`, `data-slider-id="1"`; quote icon
     `img/testimonial/quote.png` centered above; background photo with
     `overlay overlay-bg`): each `div.testi-item` has `h4` name **Fanny
     Spencer**, a 5-star `ul.list` (fa-star), and a quote paragraph; below,
     `div.owl-thumbs.d-flex.justify-content-center` thumbnail navigation —
     `.owl-thumb-item.active .overlay-grad` uses the gold gradient.
  8. `section.price-area.section-gap-top` — pricing: `div.section-title`
     **"Choose Your Package"** + lorem sub-label + three `col-lg-4`
     `div.single-price` cards: `div.top-sec` plan name + "Standard
     Package", `div.bottom-sec` price `h1` ($79.00 / $89.00 / $99.00),
     `div.end-sec` a 5-item feature list (Basic hair Cut / Basic Shave /
     Basic Head Wash / Basic Body Massage / Basic Snacks) and **Order Now**
     (`a.primary-btn.price-btn.mt-40`, gold gradient); the middle card
     (Premium, $89.00) is `.active` — `.single-price.active` uses the gold
     gradient on its `top-sec h4` and `bottom-sec h1` and its Order Now
     button.
  9. `section.blog-area` — blog: `div.section-title` **"Latest From Blog"**
     - lorem sub-label + two `col-lg-6.mb-30` rows, each `div.single-blog`
       with `div.blog-thumb` photo (col-lg-4) and `div.blog-details`
       (col-lg-8): `div.blog-meta` (calendar date **13th Dec**, heart count
       **15**, comment count **04**), `h4 a.blog-title` **"Portable Fashion
       for women"**, and a lorem snippet. (All cards share the same title in
       the original.)
  10. `footer.footer-area.section-gap` — **black** footer
      (`background: #000000`), `div.row.footer-inner` with three
      `aside.f-widget` columns: **About Me** (`div.f-title h3` + paragraph),
      **Newsletter** (`div.news-widget`, `form.subscribe_form` email input +
      gold-gradient `button.btn.sub-btn` with lnr-arrow-right icon, form
      `id="mc_embed_signup"`), **Follow Me** (`div.social-widget` with four
      social icons fa-facebook / fa-twitter / fa-dribbble / fa-behance);
      bottom `div.ab-widget` copyright line + ColorLib credit (→
      repo-standard credit).

## Requirements

### Requirement: Header navigation

The system SHALL render a white header bar with the brand, collapsible nav
links, and a right-side nav button.

#### Scenario: Header renders

- **GIVEN** the Lather app is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show the brand label and the nav links Home / about /
  pricing / barbers / gallery / Contact
- **AND** the Pages and Blog items SHALL each open a dropdown (Services +
  Elements; Blog + Blog Detail)
- **AND** the mobile toggler SHALL have `aria-expanded` and toggle the
  collapsed menu

### Requirement: Hero banner

The system SHALL render a full-width hero carousel with a headline, subtext,
and a video-play trigger.

#### Scenario: Hero renders

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL cycle through three banner photos behind a dark overlay
- **AND** it SHALL show the static headline "For All Occasion HairStyle is a
  Must Try Fashion"
- **AND** a short descriptive paragraph
- **AND** a circular gold-gradient **Watch Intro Video** play button with a
  caption below

### Requirement: About section

The system SHALL render an about section with a photo and text plus a call
to action.

#### Scenario: About renders

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "We Believe that Interior beauty Lasts
  Long", a paragraph, and a **Learn More** gold-gradient primary button on
  the left
- **AND** it SHALL show a photo on the right plus a small bordered accent
  photo

### Requirement: Services section

The system SHALL render a grid of four photo cards beneath the section title
"What We Can Do for You".

#### Scenario: Services grid

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the title "What We Can Do for You"
- **AND** four service cards (Stylish Hair Cutting / Quality Gel Shave /
  Beard Trimming / Executive Wash), each with a photo and a caption

### Requirement: Gallery (catalogue)

The system SHALL render a "Select Your Style" tabbed block with icon tabs.

#### Scenario: Style tabs render and switch

- **GIVEN** the catalogue section is displayed
- **WHEN** the page loads
- **THEN** it SHALL show the heading "Select Your Style" and the label
  "Shaveing"
- **AND** four icon tabs with the first active
- **WHEN** the user clicks another icon tab
- **THEN** the active content panel SHALL switch to the matching tab
- **AND** each panel SHALL contain the lorem text and a **View Gallery...**
  button

### Requirement: Barbers team

The system SHALL render a barbers team row beneath the title
"We Have All Famous Barbers".

#### Scenario: Team row

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the title "We Have All Famous Barbers"
- **AND** three barber cards (Peter Baker / Nancy Holmes / Gavin Hansen),
  each with a photo, name, and role

### Requirement: Testimonials

The system SHALL render a testimonials carousel with thumbnail navigation.

#### Scenario: Testimonial carousel

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show a quote icon, a quote paragraph, a 5-star rating,
  and the author name (Fanny Spencer)
- **AND** a row of thumbnails below, with the active thumbnail using the
  gold-gradient overlay

### Requirement: Pricing

The system SHALL render three pricing packages under "Choose Your Package".

#### Scenario: Pricing cards

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the title "Choose Your Package"
- **AND** three plan cards — Basic Hair Cut & Shave $79.00, Premium Hair Cut
  & Shave $89.00, Luxury Hair Cut & Shave $99.00
- **AND** each card SHALL show a plan name, "Standard Package", the price, a
  five-item feature list, and an **Order Now** gold-gradient button
- **AND** the middle (Premium) card SHALL be highlighted, with its name and
  price in the gold gradient

### Requirement: Blog

The system SHALL render a blog row under "Latest From Blog".

#### Scenario: Blog cards

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the title "Latest From Blog"
- **AND** two blog cards, each with a thumbnail, meta line (date, hearts,
  comments), a title, and a snippet

### Requirement: Footer

The system SHALL render a black footer with About Me, Newsletter, and Follow
Me widgets.

#### Scenario: Footer renders

- **GIVEN** the page is rendered
- **WHEN** the bottom footer is displayed
- **THEN** it SHALL have a black background (#000000)
- **AND** it SHALL show the About Me widget with a paragraph
- **AND** it SHALL show the Newsletter widget with an email input and a
  gold-gradient subscribe button
- **AND** it SHALL show the Follow Me widget with four social icons
- **AND** it SHALL carry the repo-standard footer credit line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Lather app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, hero, about, services, gallery,
  barbers, testimonials, pricing, blog, and footer inside the main landmark
  in the original's order
- **AND** the document title SHALL be "Lather — Barber Shop"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- lather` passes: typecheck → lint → vitest (100%
      coverage) → build.
- [ ] Section order matches the original 1:1 (header → hero → about →
      services → gallery → barbers → testimonials → pricing → blog →
      footer).
- [ ] Design tokens applied: brand gold gradient `#ba9236 → #fdc136`
      (primary buttons, video-play button, catalogue tab accents,
      testimonials active thumb, active pricing text), solid gold variants
      `#ba9236`/`#bb9236`, headings in Playfair Display (bold #000), body in
      Roboto, white section backgrounds with light #f9f9ff / #fafaff bands,
      black #000000 footer, primary buttons pill-shaped (border-radius 50px,
      line-height 50px, padding 0 38px, uppercase letter-spacing 2px),
      `section-gap` padding 120px 0 (60px on mobile).
- [ ] Header is a white bar with brand, seven top-level nav items (Home /
      about / pricing / barbers / gallery / Pages▾ / Blog▾ / Contact) with
      two dropdowns (Services+Elements; Blog+Blog Detail), right-side nav
      button; mobile toggler has aria-expanded.
- [ ] Hero is a full-width carousel of three banner photos with dark overlay,
      static "For All Occasion HairStyle is a Must Try Fashion" headline, a
      paragraph, and a circular gold Watch Intro Video button with caption.
- [ ] About renders "We Believe that Interior beauty Lasts Long" + paragraph + Learn More gold button left, photo + bordered accent photo right.
- [ ] Services renders "What We Can Do for You" + four photo cards (Stylish
      Hair Cutting / Quality Gel Shave / Beard Trimming / Executive Wash).
- [ ] Catalogue renders "Select Your Style" + "Shaveing" + four icon tabs
      that switch content panels, each with lorem text and a View Gallery...
      button.
- [ ] Barbers renders "We Have All Famous Barbers" + three name/role cards
      (Peter Baker / Nancy Holmes / Gavin Hansen).
- [ ] Testimonials carousel shows quote icon, quote, 5 stars, author (Fanny
      Spencer), with gold active thumbnail.
- [ ] Pricing renders "Choose Your Package" + three cards (Basic/Premium/
      Luxury Hair Cut & Shave at $79/$89/$99) with 5-item feature lists,
      Order Now buttons, and the middle Premium card gold-highlighted.
- [ ] Blog renders "Latest From Blog" + two cards with thumb, meta (date/
      hearts/comments), title, snippet.
- [ ] Footer is black with About Me / Newsletter (email input + gold
      subscribe button) / Follow Me (4 social icons) widgets and
      repo-standard credit.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Barcut), preview URL, tokens,
      and renames.
