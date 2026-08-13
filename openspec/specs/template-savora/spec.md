# Template: Savora (Restaurant)

## Purpose

Savora is a single-page restaurant website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Restauco"
website template (source: https://colorlib.com/wp/template/restauco/ —
"Restauco — Free Restaurant Website Template by ColorLib"), built under a
DIFFERENT name (Savora — "savor", to enjoy food fully, plus the "-a" ending
for a warm restaurant-brand feel; single lowercase word, no collision with
`apps/`, `openspec/specs/` or `docs/templates/` — verified 2026-08-14), per
the monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The source appears TWICE in TEMPLATES.md (dup-row trap): line 621
(**Bootstrap 5 (89)** category — the FIRST occurrence, the canonical one) and
line 2694 (**Restaurant (41)**) — both `- [ ]` rows of the SAME template. ONE
implementation covers both rows (mark all `[x]` with the same surge URL at
bookkeeping time).

## Design reference (replication findings)

- **Original:** ColorLib "Restauco" — restaurant one-pager. Bootstrap-based
  (bootstrap.min.css + owl.carousel + slicknav + gijgo datepicker +
  nice-select + fontawesome-all + themify-icons + slick + animate +
  magnific-popup) plus a custom `assets/css/style.css` (~80 KB) that carries
  the real design tokens. Brand name used in the source copy: **"Délicious"**
  (the recreation brands itself **Savora** but keeps the same section
  structure, copy kinds and layout).
- **Live preview DOM analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/restauco/` — HTTP 200, ~46 KB HTML
  (REACHABLE — the preview is live, not a 404). Stylesheets: `assets/css/`
  `style.css` (custom tokens) + `bootstrap.min.css`, `owl.carousel.min.css`,
  `slicknav.css`, `gijgo.css`, `animate.min.css`, `magnific-popup.css`,
  `fontawesome-all.min.css`, `themify-icons.css`, `slick.css`,
  `nice-select.css`. Screenshot `restauco-free-template.jpg` (1200×946,
  AVIF, viewed in the browser) matches the live DOM: split blush hero with
  a flat-lay brunch photo and a floating testimonial chip, coral pill CTAs,
  white service cards with coral line-art icons.
- **Visual design:** clean, appetizing, minimalist restaurant one-pager.
  Warm palette: coral `#FE5F41` accents on a pale blush `#FFF4F2` hero with
  stark-white content sections. Split hero: left caption on blush, right a
  top-down brunch-table photo (pancakes, eggs, salad, coffee) with a small
  white testimonial card overlapping its bottom-left corner (5 gold stars,
  avatar, "- Robert"). Section headings in a rounded geometric sans (Mitr),
  body in Raleway, dark cocoa `#4D312C` headings over warm gray `#94817E`
  body text. All CTAs are coral pills (radius 35px). The dishes section sits
  on a full-width background photo (cover) with white card tiles; booking is
  a split section (restaurant photo left, pill-form right); testimonials
  are round-avatar cards in a slider; a full-width Instagram photo strip
  precedes a light 4-column footer.
- **Section order (1:1, verified from live DOM):**
  1. **Header/nav** (`header.header-area.header-transparent`, absolute over
     the hero): logo image left; `ul.main-menu` — **Home** (index.html) ·
     **Menu** (menu.html) · **About** (about.html) · **Blog** (blog.html,
     dropdown: Blog · Blog Details) · **Element** (elements.html) ·
     **Contact** (contact.html); right: phone **+10 (78) 783 3674** and a
     **Book a Table** pill (`btn header-btn2`, outlined: white bg, coral
     border, coral text). Nav links Mitr 16px `#4D312C`, hover coral with a
     coral underline sweep; submenu dropdown has a solid coral background.
     Sticky state: solid `#FFF4F2` bar with shadow. Recreation: single-page
     anchor links (Home/Menu/About/Blog/Contact) or dead-end links; brand
     "SAVORA".
  2. **Hero slider** (`section.slider-area.slider-height`, bg `#FFF4F2`,
     ~950px tall; one static slide in the preview): left `hero-caption` —
     `h1` **"Meet, Eat & Enjoy the true test"** (source typo for "taste" —
     fix to "true taste" in the recreation, note the deviation), paragraph
     "Making a reservation at Délicious restaurant is easy and takes just a
     couple of minutes." (rephrase to Savora), buttons: **Our Menu** (`btn
hero-btn` coral pill, padding 35px 55px, shadow
     `rgba(254,95,65,0.14)`) + **Watch Video** popup link (play-button.svg
     icon + text). Right `hero-img`: `h1_hero1.jpg` (flat-lay brunch table)
     with a floating **rating chip** (white card overlapping the image:
     round avatar `user.jpg`, h3 quote "Délicious restaurant is easy and
     takes just a couple.", 5-star row, "- Robert").
  3. **Services** (`section.our-services.section-padding`): centered
     `section-tittle` **"Best way to eat healthy food"** + paragraph; 3
     `single-services` cards (white, 1px `#E6DAD8` border, radius 10px,
     padding ~47px; hover: coral shadow `rgba(254,95,65,0.1)`): coral
     line-art SVG icon + h5 title + paragraph — **Healthy Meal** · **Fast
     Food** · **Delicious Coffee**.
  4. **Most Popular Dishes** (`section.our-client.section-img-bg2`, cover
     background photo `section-bg1.jpg`): `section-tittle2` white h2
     **"Most Popular Dishes"** + paragraph; filter tabs (`nav-tabs`):
     **Full Menu · Breakfast · Lunches · Dinner · Drinks · Fastfood**; grid
     of `single-cat` cards (3-col, `col-lg-4`): `cat-img` photo with a
     **`$20` price badge** (`numbering`) overlaid, h5 dish name (Sandwich,
     Tuna steak, Hamburger …), blurb, **Order Now** link (`browse-btn`,
     coral with underline); right-aligned **Full Menu** coral pill.
  5. **Booking** (`section.three-area.top-padding`): split — left
     `honer-area` photo `woner.jpg` (owner/restaurant, col-xl-7); right
     `form-wrapper` (col-xl-4): `form-tittle` h2 **"Book a table"** +
     paragraph; `form#three-form` — **Number of guest** (text input, full
     width), **Date** (datepicker input, half), meal-time **select**
     (source options: Dinner · Brack-fast · Dinner · Dinner — recreate as a
     sensible Breakfast/Lunch/Dinner select and note the deviation), **Phone
     no.** (text input, full width), **Message** (textarea, full width),
     **Sent Request** (`submit-btn`, full-width coral pill, hover sweep to
     `#4D312C`).
  6. **Testimonials** (`section.customer-section`): centered `section-tittle`
     **"What our customer sayes"** (fix typo → "says") + paragraph;
     `customer-active` slider of `single-cat` cards (white, 1px `#E6DAD8`
     border, radius 10px): round customer photo (`customer1-3.jpg`), quote
     paragraph, **5-star rating** row, author "- Robert".
  7. **Instagram strip** (`div.location-house`): full-width `instagram-active`
     carousel of 4 food photos (`instra1-4.jpg`) — recreate as a static
     full-width row of 4 images (no carousel behaviour required).
  8. **Footer** (`footer.footer-area.footer-padding`): col 1 — footer logo +
     about paragraph ("Land behold it created good saw after she'd Our set
     living. …") + `footer-social` icons (Twitter, Facebook, LinkedIn,
     Pinterest); col 2 — **Quick Links**: Home · About · Services · Blog ·
     Contact; col 3 — **Cakes**: Blackforest · Bodhubon · Rongdhonu ·
     Meghrong; col 4 — **Contact Us**: 76/A, Green Lane, Dhanmondi, NYC ·
     phone +10 (78) 738-9083 · email restaurco89@gmail.com; bottom bar:
     "© <year> All rights reserved | This template is made with by Colorlib"
     — Colorlib credit → **Component Dock link (mandatory)**
     `https://www.componentdock.com/`.

## Design tokens

- **Brand accent:** `#FE5F41` coral — primary buttons, nav link hover +
  underline sweep, dropdown bg, footer links/social icons, star ratings,
  price badges, browse-btn underline. Hover sweep `#EC583A` (button ::before),
  social hover `#F04506`.
- **Headings:** `#4D312C` dark cocoa — font **Mitr**, weight 500.
- **Body text:** `#94817E` warm gray — font **Raleway**, 16px, lh ~1.4-1.5.
  Muted: `#5E5E5E` (copyright) / `#999999`.
- **Section backgrounds:** hero/slider `#FFF4F2` pale blush (also sticky
  header bg); dishes section on cover photo (`section-bg1.jpg`) with white
  cards; all other sections white.
- **Cards:** white bg, 1px `#E6DAD8` border, radius 10px; hover shadow
  `rgba(254,95,65,0.1)`.
- **Buttons (pills, radius 35px):** `.btn` — bg `#FE5F41`, Mitr 18px 500,
  padding 22px 32px, white text, hover sweep `#EC583A`; `.hero-btn` padding
  35px 55px + shadow `rgba(254,95,65,0.14)`; `.boxed-btn` (Book a Table) —
  white bg, 1px coral border, coral text, hover invert; `.submit-btn` —
  full-width coral pill, hover sweep `#4D312C`.
- **Form controls:** pill radius 25px, 1px `#EAEAEA` border, height 50px,
  text `#071112`.
- **Fonts (Google Fonts `<link>` in `index.html`):**
  `family=Mitr:wght@300;400;500;600;700&family=Raleway:wght@300;400;500;600;700;800;900`
  — Mitr for headings/nav/buttons, Raleway for body.
- **Section padding rhythm:** `.section-padding` 120px top/bottom;
  `.section-tittle h2` 44px Mitr 500, margin-bottom 22px, sub-p 18px
  `#94817E`.

## Requirements

### Requirement: Header navigation

- **GIVEN** the Savora page is loaded
- **WHEN** the user views the top of the page
- **THEN** the header SHALL show the Savora brand/logo left and nav links:
  Home · Menu · About · Blog · Contact, with a phone number and a **Book a
  Table** pill button on the right
- **AND** the header SHALL be transparent over the hero
- **AND** when the page scrolls, the header SHALL switch to a solid
  `#FFF4F2` sticky bar with a shadow

#### Scenario: Mobile navigation

- **GIVEN** the Savora page is rendered on a viewport narrower than the
  desktop breakpoint
- **WHEN** the user taps the hamburger toggler
- **THEN** a mobile menu SHALL open with the same links and a close control

### Requirement: Hero slider

- **GIVEN** the Savora page is loaded
- **WHEN** the user views the hero
- **THEN** a split hero SHALL render on the pale blush `#FFF4F2` background:
  headline **"Meet, Eat & Enjoy the true taste"** (source typo "test" fixed)
  left, supporting paragraph, and two CTAs — a solid coral **Our Menu** pill
  and a **Watch Video** link with a play icon
- **AND** the right half SHALL show a brunch-table photo with a floating
  white testimonial chip (avatar, short quote, 5-star rating, "- Robert")

#### Scenario: Hero buttons

- **GIVEN** the hero is displayed
- **WHEN** the user clicks **Our Menu**
- **THEN** the page SHALL scroll to the dishes section
- **AND** the **Watch Video** link SHALL be a dead-end link or open a video
  modal (no external navigation required)

### Requirement: Services section

- **GIVEN** the user scrolls to the services section
- **WHEN** the section is displayed
- **THEN** a white section SHALL show the centered heading **"Best way to
  eat healthy food"** with a paragraph
- **AND** three service cards SHALL be laid out in a row: **Healthy Meal**,
  **Fast Food**, **Delicious Coffee** — each with a coral line-art icon, h5
  title and blurb

#### Scenario: Service card hover

- **GIVEN** a service card is displayed
- **WHEN** the user hovers over it
- **THEN** the card border SHALL disappear and a coral-tinted shadow
  (`rgba(254,95,65,0.1)`) SHALL appear

### Requirement: Most Popular Dishes

- **GIVEN** the user scrolls to the dishes section
- **WHEN** the section is displayed
- **THEN** a full-width section with a background photo SHALL show the white
  heading **"Most Popular Dishes"** and filter tabs: Full Menu · Breakfast ·
  Lunches · Dinner · Drinks · Fastfood
- **AND** a 3-column grid of dish cards SHALL show photo + **$ price badge**
  - dish name + blurb + **Order Now** link

#### Scenario: Filter tabs

- **GIVEN** the dish grid is displayed
- **WHEN** the user clicks a filter tab (e.g. Breakfast)
- **THEN** the visible dish cards SHALL update to that category and the
  active tab SHALL be highlighted

### Requirement: Booking form

- **GIVEN** the user scrolls to the booking section
- **WHEN** the section is displayed
- **THEN** a split section SHALL show a restaurant photo on the left and a
  form on the right headed **"Book a table"**
- **AND** the form SHALL contain: **Number of guest** (text), **Date**
  (date input), meal-time **select**, **Phone no.** (text), **Message**
  (textarea) and a full-width **Sent Request** submit button

#### Scenario: Submit

- **GIVEN** the user has filled the booking form
- **WHEN** the user clicks **Sent Request**
- **THEN** the form SHALL NOT navigate away (dead-end submit) and SHALL
  either show a success state or clear/keep the values deterministically

### Requirement: Testimonials

- **GIVEN** the user scrolls past the booking section
- **WHEN** the testimonials section is displayed
- **THEN** the centered heading **"What our customer says"** (source typo
  "sayes" fixed) SHALL show above a row/slider of white cards — each with a
  round customer photo, quote, 5-star rating and author name

#### Scenario: Testimonial card content

- **GIVEN** a testimonial card is displayed
- **WHEN** the user reads it
- **THEN** it SHALL show a round customer photo, a quote paragraph, a
  5-star rating row and the author name

### Requirement: Instagram strip

- **GIVEN** the user scrolls past the testimonials
- **WHEN** the strip is displayed
- **THEN** a full-width row of 4 food photos SHALL render (static grid
  acceptable; no carousel behaviour required)

#### Scenario: Instagram photos

- **GIVEN** the Instagram strip is displayed
- **WHEN** the user views it
- **THEN** exactly 4 food photos SHALL render edge-to-edge in a single row
  on desktop and wrap on mobile

### Requirement: Footer

- **GIVEN** the user scrolls to the bottom of the page
- **WHEN** the footer is displayed
- **THEN** the footer SHALL show 4 columns: brand + about text + social
  icons (Twitter, Facebook, LinkedIn, Pinterest); **Quick Links** (Home ·
  About · Services · Blog · Contact); **Cakes** (Blackforest · Bodhubon ·
  Rongdhonu · Meghrong); **Contact Us** (address, phone, email)
- **AND** the bottom bar SHALL show the copyright line with a link to
  **https://www.componentdock.com/** ("Component Dock") — mandatory footer
  convention; no ColorLib credit

#### Scenario: Component Dock link

- **GIVEN** the footer is displayed
- **WHEN** the user reads the bottom bar
- **THEN** a link to **https://www.componentdock.com/** labeled
  "Component Dock" SHALL be present and no ColorLib credit SHALL appear

### Requirement: Responsive layout

- **GIVEN** the Savora page is rendered on a mobile viewport
- **WHEN** the layout reflows
- **THEN** the split hero SHALL stack (photo hidden or below text — the
  source hides `hero-img` below 576px), the services/dish grids SHALL
  collapse to single column, the booking split SHALL stack, and all pills
  SHALL remain tappable

#### Scenario: Stacked layout

- **GIVEN** the Savora page is rendered on a mobile viewport
- **WHEN** the layout reflows
- **THEN** the hero photo SHALL be hidden (matching the source below 576px)
  and every multi-column section SHALL stack to a single column with
  tappable pill buttons

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-savora`
- [ ] `scripts/verify-app.sh savora` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with the live DOM): transparent header (SAVORA
      logo · Home/Menu/About/Blog/Contact · phone + Book a Table outlined
      pill; solid `#FFF4F2` sticky on scroll) → split hero (blush `#FFF4F2`
      bg, "Meet, Eat & Enjoy the true taste" + paragraph + coral Our Menu
      pill + Watch Video play link; right brunch photo w/ floating rating
      chip: avatar, quote, 5 stars, - Robert) → services ("Best way to eat
      healthy food" + 3 white cards: Healthy Meal / Fast Food / Delicious
      Coffee, coral SVG icons, hover coral shadow) → Most Popular Dishes
      (bg photo section, white "Most Popular Dishes" + filter tabs
      Full Menu/Breakfast/Lunches/Dinner/Drinks/Fastfood + 3-col cards w/
      $ price badge + Order Now + Full Menu pill) → booking (left
      restaurant photo, right form: Number of guest / Date / meal-time
      select / Phone no. / Message / Sent Request full-width pill) →
      testimonials ("What our customer says" + round-avatar cards w/ quote,
      5 stars, author) → Instagram strip (full-width 4-photo row) → footer
      (brand + about + socials; Quick Links / Cakes / Contact Us columns;
      copyright bar with Component Dock link)
- [ ] Brand tokens in `@theme`: `#FE5F41` coral (buttons, nav hover,
      footer links, socials, stars, price badges), `#EC583A` (button hover
      sweep), `#4D312C` (headings), `#94817E` (body), `#FFF4F2` (hero +
      sticky header), `#E6DAD8` (card borders) — all via Tailwind classes
- [ ] Fonts: Mitr (headings/nav/buttons) + Raleway (body) via Google Fonts
      `<link>` in `index.html`
- [ ] Buttons: pill radius 35px everywhere; solid coral (Our Menu, Full
      Menu, Sent Request) + outlined coral (Book a Table); hover sweep
      `#EC583A` / `#4D312C`
- [ ] Placeholder images via `picsum.photos/seed/savora-<n>/<w>/<h>` (brunch
      / food subject for hero + dish cards + instagram strip — screen seeds
      before pinning; seed-screening method), icons from lucide-react
      (probe exports first — no brand icons; use inline SVG for socials)
- [ ] Brand renamed "Restauco"/"Délicious"/"Colorlib" → "Savora" everywhere;
      footer MUST link `https://www.componentdock.com/`; all links/forms
      dead-end without navigation (except the componentdock link)
- [ ] Fix source typos in the recreation: hero "true test" → "true taste",
      "What our customer sayes" → "says", meal select options normalized
      (source repeats Dinner ×3 + "Brack-fast") — note deviations in the PR
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md bookkeeping at ship time: mark ALL TWO `- [ ]` rows
      (line 621 Bootstrap 5, line 2694 Restaurant) `[x]` with the same
      surge URL + `npm run readme:status`
