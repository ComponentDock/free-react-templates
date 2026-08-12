# Template: Homestead (Real Estate / Property Template)

## Purpose

Homestead is a single-page real-estate agency template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Uptown" real-estate website template (see TEMPLATES.md,
Bootstrap section, line 524), built under a different name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The reference is a modern, light real-estate landing page with a hot-pink
(`#e86ed0`) accent on white: a transparent navbar (dark text) over a
full-width suburban-street photo hero with a centered headline "The Simplest
Way to Find Property", a white pill search bar with a circular pink search
button, and a white curved/angled divider flowing into the content; a "Our
Services" features section with four icon columns (No Downpayment / All Cash
Offer / Experts in Your Corner / Locked in Pricing); an "Exclusive Offer For
You" property-listings section with three cards (photo, overlapping white
text block with struck-through old price `800,000` + `$3,050/mo`, bed/bath/
sqft icons, title + location, pink corner arrow button); a "Work flow / How
it works" section on a photo background with a black 50% overlay and four
numbered pink-circle steps (01 Evaluate Property → 04 Have Your Property); a
"We Put People First." about split with a photo; a stats counter band (Area
Population 305 / Total Properties 1090 / Average House 209 / Total Branches
67); a "Happy Clients" testimonial carousel (Roger Scott — Marketing
Manager); an "Our Agents" grid (James Stallon — Listing — 10 Properties);
a "Recent Blog" list (image + date/admin/comments meta + excerpt); and a
near-white footer with brand + Community / About Us / Company link columns,
a "Have a Questions?" contact column (address, phone, email), social icons
and a copyright bar. The design language is white space + thin pink rules
flanking uppercase section labels, 40px black section headings, and the
signature pink used for icons, links, the search button, step circles and
card arrow buttons.

## Design tokens (from `https://preview.colorlib.com/theme/uptown/`)

- **Brand accent:** `#e86ed0` (hot pink) — links, hover states, service
  icons, `.subheading` labels + their 50px flanking rules, search button,
  property-card arrow button, step-number circles, footer accent spans.
- **Secondary accent (brand mark):** `#f7b71d` (gold) — the navbar brand
  text span (`.navbar-brand span`).
- **Font:** `"Nunito Sans", Arial, sans-serif` everywhere (body `16px`,
  `line-height: 1.8`, `font-weight: 400`); load via Google Fonts `<link>` in
  `index.html` (400/600/700). Headings use the same family (not a display
  font) with `font-weight: 400` (h1) / `600` (h2).
- **Text colors:** body `#666666`; headings `rgba(0,0,0,0.8)`; h1 hero
  `#000000`; counter numbers `#000000`; muted `rgba(0,0,0,0.6–0.7)`.
- **Container:** `max-width: 1250px`.
- **Section heading pattern** (`.heading-section`): `.subheading` label —
  `12px`, `font-weight: 600`, `letter-spacing: 2px`, `text-transform:
uppercase`, color `#e86ed0`, with `:before`/`:after` 50px × 1px pink lines
  offset ±60px; `h2` — `40px`, `font-weight: 600`, `#000`-ish (28px on
  mobile). White variant (`.heading-section-white`) for the dark "How it
  works" band: subheading `rgba(255,255,255,0.9)`, `h2` white.
- **Buttons:** no generic filled primary — the signature button is the
  hero **search button**: 70×70px circle `#e86ed0`, `border-radius: 0 50% 50%
50%` (square top-left corner), white 30px icon; the input is a white pill
  `height: 70px`, `border-radius: 40px`, `padding-left: 25px`,
  `box-shadow: 0px 5px 27px -14px rgba(0,0,0,0.28)`. Property-card arrow:
  40×40px `#e86ed0`, `border-radius: 50% 0 0 0`, white link icon.
- **Hero:** `height: 850px`, background photo `images/bg_1.jpg` (suburban
  street) with a white→transparent gradient overlay (`.overlay`:
  `linear-gradient(to bottom, white 0%, white 3%, rgba(255,255,255,0) 54%,
rgba(255,255,255,0) 100%)`); `h1` `60px`, `line-height: 1.1`, `#000`,
  `font-weight: 400`.
- **Angled divider:** `.ftco-degree-bg:before/:after` — two 50%-width,
  70px-tall white `skewY(±4deg)` strips at the section bottom (`bottom:
-30px`), creating the signature chevron/zigzag transition.
- **Navbar:** `.ftco-navbar-light` — transparent, `position: absolute; top:
20px`, `z-index: 3`; brand `#000` with gold span; links `15px` `#000`
  (hover `#e86ed0`), padding 20px horizontal; on mobile (`≤991px`) black
  background, white text.
- **Service cards** (`.services`): icon `60px` `#e86ed0` centered; `h3`
  `24px` `font-weight: 500` `#000`; body `rgba(0,0,0,0.8)`.
- **Property cards** (`.property-wrap`): image block `height: 250px`; white
  `.text` block overlapping the image (`margin-top: -50px; margin-left:
20px; width: 75%`), `box-shadow: 0px 5px 21px -14px rgba(0,0,0,0.14)`
  (hover `0px 5px 39px -14px rgba(0,0,0,0.26)`); `.price` — `orig-price`
  `#000` 16px 600, `old-price` `rgba(0,0,0,0.6)` struck through with a 1px
  black line (`:after`), `/mo` suffix `14px rgba(0,0,0,0.4)`; `ul.property_list`
  inline items 16px; `h3` 18px 600 `#000`.
- **How-it-works band** (`.services-section`): background photo
  `images/bg_2.jpg`; `.overlay` black 50% width (full-width 40% opacity on
  mobile) over the left half; step circles pink with white numbers; white
  heading variant.
- **Counter** (`#section-counter` / `.ftco-counter`): `strong.number`
  `50px`, `font-weight: 600`, `#000`; label span `18px rgba(0,0,0,0.7)`;
  `.text-border` divider `border-right: 1px solid rgba(0,0,0,0.07)` between
  items. Targets from `data-number`: 305 / 1090 / 209 / 67 (JS count-up).
- **Testimonials** (`.testimony-section`): owl-carousel cards, name + role
  (Roger Scott / Marketing Manager), person photos.
- **Agents** (`.ftco-agent`): 4 cards, `img` photo + `h3` name (James
  Stallon) + `.h-info` (location / "Listing — 10 Properties").
- **Blog** (`.blog-entry`): `.block-20.img` image link, `h3.heading` 18px
  600 `#000`, `.meta` row (date "July. 24, 2019" · "Admin" · chat icon + 3),
  excerpt `p`; `.btn-custom` link style: `uppercase`, 13px, 600,
  `letter-spacing: 2px`, `#000`.
- **Footer** (`.ftco-footer`): background `rgba(0,0,0,0.02)` (near-white),
  `padding: 7em 0`; column titles (`h2.ftco-heading-2`) 17–20px `#000`
  weight 400; links `rgba(0,0,0,0.8)` with `#e86ed0` accent spans; social
  icons 50px circles.

## Design reference (replication findings)

- **Original:** ColorLib "Uptown" — real-estate agency template
  (source: https://colorlib.com/wp/template/uptown/). Listed in
  TEMPLATES.md line 524 (Bootstrap section). Screenshot:
  `uptown-free-template.jpg` (viewed in the browser).
- **Live preview URL:** https://preview.colorlib.com/theme/uptown/ (title
  "Uptown - Free Bootstrap 4 Template by Colorlib"; reachable via curl and
  browser). HTML saved to `/tmp/prep-uptown/index.html` (41 KB); stylesheet
  `https://preview.colorlib.com/theme/uptown/css/style.css` saved to
  `/tmp/prep-uptown/style.css` (75 KB); screenshot saved to
  `/tmp/prep-uptown/uptown-screenshot.jpg`. The screenshot and live preview
  agree: photo hero + pill search, pink accent on white, four service
  columns, three property cards, dark how-it-works band, counter, agents,
  blog, near-white footer.
- **Demo brand in the preview is "Uptown"** → rename to **Homestead** (a
  homestead = a house with land, fitting the real-estate theme; text logo
  "HOMESTEAD" recreated as styled text, never the copied `img/logo.png`).
- **Section structure (1:1 from the preview DOM):**
  1. Navbar `nav.navbar.ftco_navbar` — transparent, absolute, `top: 20px`;
     `a.navbar-brand` "Uptown" (text; span styled gold `#f7b71d`) · links:
     Home (active) · About · Agent · Services · Properties · Blog · Contact
     (dark `#000` text, hover pink) · hamburger on mobile (black bg, white
     text ≤991px).
  2. Hero `section.hero-wrap.ftco-degree-bg` — 850px, `bg_1.jpg` street
     photo, white gradient overlay; centered `.slider-text`: `h1` "The
     Simplest Way to Find Property" (60px, black) · `p` lorem · search form
     `.search-location` (pill input "Search location" + circular pink
     button with white magnifier icon); a pink circular scroll-down button
     sits below the hero.
  3. Services `section.ftco-section.ftco-no-pb` — `.heading-section`:
     label "Our Services" + `h2` "The smartest way to buy a home"; 4
     `col-md-3 .services` cards (icon `flaticon-piggy-bank` /
     `flaticon-wallet` / `flaticon-file` / `flaticon-locked` → lucide
     equivalents: piggy-bank, wallet, file-text, lock) + `h3` (No
     Downpayment · All Cash Offer · Experts in Your Corner · Locked in
     Pricing) + lorem `p`.
  4. Properties `section.ftco-section.goto-here` — label "What we offer"
     - `h2` "Exclusive Offer For You"; 3 `col-md-4 .property-wrap` cards:
       `a.img` (work-1/2/3.jpg) · `.text` overlapping: `p.price`
       (`span.old-price` 800,000 struck + `span.orig-price` $3,050 + `small`
       /mo) · `ul.property_list` (bed 3 / bathtub 2 / floor-plan 1,878 sqft)
       · `h3` "The Blue Sky Home" · `span.location` "Oakland" · pink
       `a.btn-custom` arrow (40px, radius 50% 0 0 0).
  5. How it works `section.ftco-section.ftco-degree-bg.services-section.img`
     — `bg_2.jpg` + black 50% overlay; white heading variant: label "Work
     flow" + `h2` "How it works"; 4 steps (col-md-3, pink circle numbers
     01/02/03/04): Evaluate Property · Meet Your Agent · Close the Deal ·
     Have Your Property + lorem `p`.
  6. About `section.ftco-section.ftco-no-pb` — `.wrap-about.py-md-5`:
     `h2` "We Put People First." + long lorem paragraph + photo
     `images/about.jpg`.
  7. Counter `section.ftco-counter.img#section-counter` — 4
     `col-md-6.col-lg-3 .counter-wrap` blocks: `strong.number` (data-number
     305 / 1090 / 209 / 67, animated count-up) + `span` label ("Area
     Population" / "Total Properties" / "Average House" / "Total Branches");
     `border-right` divider between items.
  8. Testimonials `section.ftco-section.testimony-section` — label
     "Testimonial" + `h2` "Happy Clients"; owl-carousel cards: quote lorem
     - person photo + name "Roger Scott" + role "Marketing Manager".
  9. Agents `section.ftco-section.ftco-agent.ftco-no-pt` — label "Agents"
     - `h2` "Our Agents"; 4 `col-md-3 .staff` cards: `img` (team-1..4.jpg)
     - `h3` "James Stallon" + `.h-info` ("Listing — 10 Properties").
  10. Blog `section.ftco-section.ftco-no-pt` — label "Blog" + `h2` "Recent
      Blog"; blog entries (`col-md-4`): `.block-20.img` (image_1..3.jpg),
      `h3.heading` "Why Lead Generation is Key for Business Growth", `.meta`
      (July. 24, 2019 · Admin · chat 3), excerpt `p`.
  11. Footer `footer.ftco-footer.ftco-section` — near-white; columns:
      brand "Uptown" + blurb + social icons (twitter/facebook/instagram);
      "Community" (Search Properties · For Agents · Reviews · FAQs);
      "About Us" (Our Story · Meet the team · Careers); "Company" (About
      Us · Press · Contact · Careers); "Have a Questions?" (203 Fake St.
      Mountain View, San Francisco, California, USA · +2 392 3929 210 ·
      info@yourdomain.com). Copyright bar: "© 2026 Homestead — All rights
      reserved | This template is made with ❤ by Component Dock" linking
      https://www.componentdock.com/ (mandatory, per AGENTS.md).
- **Inner pages:** the original ships separate pages (about.html,
  agent.html, services.html, properties.html, blog.html, blog-single.html,
  contact.html) — NOT required; recreate the single index page only (nav
  links become scroll anchors or dead anchors `#`).
- **Copy:** keep the same _kind_ of content (headline + sub + CTA, card
  title + blurb). Lorem text is placeholder anyway; property names/locations
  may be paraphrased (e.g. "The Blue Sky Home" → keep or vary per card).

## Requirements

### Requirement: Transparent navbar with text logo and dark links

The system SHALL render a fixed navbar that is transparent over the hero
with a text logo and dark nav links that turn pink on hover.

#### Scenario: Desktop navbar

- **GIVEN** the Homestead app is rendered
- **WHEN** the page loads at the top
- **THEN** the navbar SHALL be transparent and positioned over the hero
  (absolute, top offset)
- **AND** the left side SHALL show the brand as styled text "HOMESTEAD"
  (recreated text — never a copied image asset) with an accent-colored span
- **AND** the right side SHALL list Home (active) · About · Agent ·
  Services · Properties · Blog · Contact as dark `#000` links
- **AND** hovering a link SHALL turn it the brand pink `#e86ed0`

#### Scenario: Mobile menu

- **GIVEN** a viewport narrower than the desktop breakpoint
- **WHEN** the hamburger toggler is tapped
- **THEN** a stacked menu panel SHALL open with `aria-expanded` reflecting
  the open state and a dark background behind the links

### Requirement: Photo hero with headline and pill search

The system SHALL render a full-width 850px hero photo with a white gradient
overlay, a centered 60px headline and a pill search form with a circular
pink search button.

#### Scenario: Hero render

- **GIVEN** the hero section is rendered
- **WHEN** it loads
- **THEN** it SHALL show a full-width background photo (suburban street
  subject, `picsum.photos/seed/homestead-<n>/...` — implementer must screen
  the seed per the seed-screening process) at ~850px height with a
  white→transparent gradient overlay
- **AND** the centered headline "The Simplest Way to Find Property" SHALL
  be ~60px, black, weight 400
- **AND** a white pill search input (70px tall, 40px radius, placeholder
  "Search location") SHALL sit below with a circular `#e86ed0` search
  button (70px, radius `0 50% 50% 50%`) holding a white magnifier icon
- **AND** the search form SHALL submit (e.g. prevent default / no-op or
  scroll to the properties section)

### Requirement: Services features section

The system SHALL render a white services section with a labeled heading and
four icon feature columns.

#### Scenario: Services render

- **GIVEN** the services section is rendered
- **WHEN** it loads
- **THEN** the section label SHALL read "Our Services" (12px uppercase
  pink with 50px pink flanking rules) above the 40px heading "The smartest
  way to buy a home"
- **AND** four columns SHALL render, each with a pink 60px icon, a 24px
  bold title and lorem text: No Downpayment (piggy-bank) · All Cash Offer
  (wallet) · Experts in Your Corner (file-text) · Locked in Pricing (lock)
- **AND** the icons SHALL come from `lucide-react` (no copied icon fonts)

### Requirement: Exclusive Offer property cards

The system SHALL render a property-listings section with three cards, each
with a photo, an overlapping white text block (prices, specs, title,
location) and a pink corner arrow button.

#### Scenario: Property cards

- **GIVEN** the properties section is rendered
- **WHEN** it loads
- **THEN** the section label SHALL read "What we offer" with the heading
  "Exclusive Offer For You"
- **AND** three cards SHALL render in a 3-column row, each with a photo
  (250px) and a white text block overlapping the photo's bottom-left
  (`-mt-12 ml-5 w-3/4`, soft shadow)
- **AND** the text block SHALL show a struck-through old price ("800,000")
  and a bold current price ("$3,050/mo" with small suffix), a spec row
  (bed 3 · bath 2 · floor-plan 1,878 sqft), a title ("The Blue Sky Home")
  and a location ("Oakland")
- **AND** a 40px `#e86ed0` arrow button with `border-radius: 50% 0 0 0`
  SHALL sit at the text block's bottom-right corner

### Requirement: How it works band

The system SHALL render a dark photo band with the white heading variant and
four numbered pink-circle steps.

#### Scenario: Steps render

- **GIVEN** the how-it-works section is rendered
- **WHEN** it loads
- **THEN** the band SHALL use a background photo with a black 50% overlay
  on the left half (full-width at ~40% opacity on mobile)
- **AND** the label SHALL read "Work flow" with a white "How it works"
  heading (white heading variant)
- **AND** four steps SHALL render in a 4-column row, each with a pink
  circle containing a number (01 · 02 · 03 · 04), a title (Evaluate
  Property · Meet Your Agent · Close the Deal · Have Your Property) and
  lorem text
- **AND** the section SHALL end with the white angled/zigzag divider
  (skewed strips) into the next section

### Requirement: About split section

The system SHALL render a two-column about section with a heading, copy and
a photo.

#### Scenario: About render

- **GIVEN** the about section is rendered
- **WHEN** it loads
- **THEN** the heading SHALL read "We Put People First."
- **AND** a paragraph of lorem copy SHALL render beside a photo
  (placeholder image)

### Requirement: Stats counter

The system SHALL render four animated stat counters with black 50px numbers
and 18px labels, divided by hairline borders.

#### Scenario: Counter render

- **GIVEN** the counter section is rendered
- **WHEN** the page loads
- **THEN** four stats SHALL render: Area Population (305) · Total
  Properties (1090) · Average House (209) · Total Branches (67)
- **AND** each stat SHALL pair a 50px black number with an 18px label
  (e.g. "Area Population")
- **AND** the numbers SHALL count up to their targets (deterministic in
  tests — test with fake timers wrapped in `act()`)
- **AND** a `border-right` hairline SHALL separate the first three items

### Requirement: Testimonials carousel

The system SHALL render a testimonials section with a labeled heading and
carousel cards (quote, photo, name, role).

#### Scenario: Testimonial cards

- **GIVEN** the testimonials section is rendered
- **WHEN** it loads
- **THEN** the label SHALL read "Testimonial" above the heading "Happy
  Clients"
- **AND** at least one quote card SHALL render with lorem text, a person
  photo, the name "Roger Scott" and the role "Marketing Manager"
- **AND** if multiple cards exist, controls SHALL cycle between them
  (or render statically — single card is acceptable for the recreation)

### Requirement: Agents grid

The system SHALL render an agents section with four photo cards (name,
listing info).

#### Scenario: Agent cards

- **GIVEN** the agents section is rendered
- **WHEN** it loads
- **THEN** the label SHALL read "Agents" above the heading "Our Agents"
- **AND** four cards SHALL render in a 4-column row, each with a photo, the
  name "James Stallon" (paraphrase per card if desired) and a listing line
  ("Listing — 10 Properties")

### Requirement: Recent Blog list

The system SHALL render a blog section with labeled heading and three
entries (image, title, meta, excerpt).

#### Scenario: Blog entries

- **GIVEN** the blog section is rendered
- **WHEN** it loads
- **THEN** the label SHALL read "Blog" above the heading "Recent Blog"
- **AND** three entries SHALL render, each with an image, an 18px bold
  title ("Why Lead Generation is Key for Business Growth" — may vary), a
  meta row (date "July. 24, 2019" · "Admin" · comment count 3) and an
  excerpt paragraph

### Requirement: Near-white footer with link columns and contact info

The system SHALL render a near-white footer with a brand column, three link
columns, a contact column and a copyright bar linking Component Dock.

#### Scenario: Footer render

- **GIVEN** the footer is rendered
- **WHEN** it loads
- **THEN** the first column SHALL show the brand "HOMESTEAD", a blurb and
  three social icon links (twitter / facebook / instagram)
- **AND** link columns SHALL render: "Community" (Search Properties · For
  Agents · Reviews · FAQs), "About Us" (Our Story · Meet the team ·
  Careers) and "Company" (About Us · Press · Contact · Careers)
- **AND** the "Have a Questions?" column SHALL show an address, a phone
  number and an email address
- **AND** the copyright bar SHALL read "© 2026 Homestead — All rights
  reserved | This template is made with ❤ by
  [Component Dock](https://www.componentdock.com/)" (the Component Dock link
  is mandatory — the ColorLib credit is never kept)

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-homestead`
- [ ] Scaffold `apps/homestead` (package `@free-react-templates/homestead`,
      homepage `https://homestead.free.componentdock.com`, `public/CNAME` =
      `homestead.free.componentdock.com`); workspace registered in
      package-lock.json
- [ ] Tests written FIRST (TDD) mirroring every Gherkin scenario above;
      100% lines/functions/branches/statements via
      `scripts/verify-app.sh homestead` (typecheck + lint + knip + fallow +
      coverage + build)
- [ ] No ColorLib reference anywhere in `apps/homestead` (comments included)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images via `https://picsum.photos/seed/homestead-<n>/<w>/<h>`
      (hero seed screened for a street/houses subject); Google Fonts
      (Nunito Sans) via `<link>`; icons from `lucide-react`
- [ ] Counter count-up tests wrapped in `act()` with fake timers
- [ ] PR description states: source (ColorLib "Uptown"), preview URL,
      design tokens, what differs (rename, placeholder images)
- [ ] After merge: mark TEMPLATES.md line 524 `[x]` with surge URL
      `https://homestead.free.componentdock.com`, run `npm run
    readme:status`, push
