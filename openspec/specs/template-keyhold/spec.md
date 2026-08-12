# Template: Keyhold (Real Estate Template)

## Purpose

Keyhold is a single-page real-estate website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Findstate" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

Keyhold recreates the ColorLib "Findstate" free Bootstrap 4 real-estate
template — a light, modern property-search landing page with a gold
(`#d4ca68`) accent, a full-bleed hero over a house photo, a 4-field property
search bar, featured property cards, a "Why Choose Us" split section, a
stats counter, city listing cards, testimonials, an agents grid, a blog
strip, and a gold footer.

## Design reference (replication findings)

- **Original:** ColorLib "Findstate" — real estate / property listing
  template (source: https://colorlib.com/wp/template/findstate/).
  TEMPLATES.md has THREE copies of this item (lines 395, 1014, 2589 — mark
  EVERY copy `[x]` when done).
- **Preview URL:** https://preview.colorlib.com/theme/findstate/ — HTTP 200,
  full rendered DOM analyzed (60 KB, title: "Findstate - Free Bootstrap 4
  Template by Colorlib"). Stylesheet `css/style.css` (~78 KB, extracted)
  plus animate, aos, bootstrap-datepicker, flaticon, icomoon, ionicons.min,
  jquery.timepicker, magnific-popup, open-iconic-bootstrap.min,
  owl.carousel.min, owl.theme.default.min. Fonts are self-hosted in the
  demo via `/cf-fonts/` (**Roboto 300/400/500/600/700**); our recreation
  loads Roboto from Google Fonts instead. Cross-checked against the
  TEMPLATES.md screenshot (`findstate-free-template.jpg`, viewed in
  browser, 1200×946) — designs match. The demo brands itself "Findstate";
  our recreation uses the NEW name **Keyhold**.
- **Section order (1:1):** Navbar (`nav.ftco-navbar` → `.ftco-navbar-light`
  #ftco-navbar, transparent, `position: absolute; top: 20px`, z-index 3,
  over the hero): brand "Findstate" left (black, weight 700, 20px) + nav
  links right — Home (active) / About / Services / Agent / Listing / Blog /
  Contact (black, weight 600, 15px, padding `.9rem 20px`, hover gold) +
  hamburger "Menu" toggle (mobile: navbar bg flips to `#000`, brand/nav
  white) → Hero (`.hero-wrap`, height 850px, bg photo
  `images/bg_2.jpg`, `data-stellar-background-ratio="0.5"`): `.overlay`
  = white gradient (rgba(255,255,255,0.71) → transparent 50% → white) +
  `.overlay-2` = gold gradient panel on the LEFT 50% of the hero (opacity
  .7: `#d4c968` → rgba(212,201,104,0.9) 36% → 0.55 50% → transparent);
  content centered (col-lg-8, text-center): h1 "Find Properties That Make
  You Money" (60px, black, weight 400, lh 1.1, `<br>` line break) + CTA
  `<a class="btn btn-primary py-3 px-4">Search Properties</a>`; mouse
  scroll indicator at the bottom (`.mouse` / `.mouse-icon` /
  `.mouse-wheel` with down arrow) → Property search bar (`.ftco-section
.ftco-no-pb` → `.search-wrap-1` → form `.search-property-1`, overlapping
  the hero bottom): 4 fields in one row — **Location** (label + text input,
  placeholder "City/Locality Name", search icon), **Property Type** (select:
  Type / Commercial / - Office / Residential / Villa / Condominium /
  Apartment), **Property Status** (select: Type / Rent / Sale), **Price
  Limit** (select: $5,000 → $2,000,000), plus gold **"Search Properties"**
  submit button (`form-control btn btn-primary`) → Featured properties
  (`.ftco-section.goto-here`): heading center — subheading "What we offer"
  (12px uppercase gold, rules each side) + h2 "Exclusive Offer For You";
  grid of 3 property cards (`.property-wrap`, col-md-4): `.img` bg photo
  (hover reveals centered circular gold link icon) + `.list-agent` strip at
  image bottom (rounded-circle agent avatar + agent name "Ben Ford" +
  Bookmark heart + Compare eye icon buttons) + `.text` (white, shadow
  0 5px 21px -14px rgba(0,0,0,0.14)): price row (strikethrough old-price
  "800,000" + gold `orig-price` "$3,050" with `<small>/mo</small>`) · h3
  title "Blue View Home" · location line with pin icon ("2854 Meadow View
  Drive, Hartford, USA") · `property_list` icons (bed 3 · bathtub 2 ·
  floor-plan "1,878 sqft"); hover shadow deepens (0 5px 39px -14px
  rgba(0,0,0,0.26)) → Why Choose Us (`.ftco-section.ftco-fullwidth`):
  heading "Services" / "Why Choose Us?"; split layout — left half = bg
  photo (`images/about.jpg`), right half = 4 stacked feature rows (`.media
.block-6.services-wrap`: circular icon + h3 + p): **No Downpayment**,
  **All Cash Offer**, **Experts in Your Corner**, **Locked in Pricing** →
  Counter (`section.ftco-counter.ftco-section.img` #section-counter, bg
  photo + gold overlay panel left 27% width, opacity .3 ≥lg): 4 stats —
  305 Area Population · 1090 Total Properties · 209 Average House · 67
  Total Branches (number 50px weight 300 gold; label 18px
  rgba(0,0,0,0.7)) → Find Properties In Your City (`.ftco-section`):
  heading "Find Properties" / "Find Properties In Your City"; grid of 6
  listing cards (`.listing-wrap.img.rounded`, col-md-4 ×2 rows): bg photo,
  gold location badge top-left ("New York, USA", bg `#d4ca68` white text,
  padding 10px, rounded), bottom text: h3 "100 Property Listing" (20px
  weight 600, white) + "See All Listing" link (white, with arrow) →
  Testimonials (`.ftco-section.testimony-section.bg-light`): heading
  "Testimonial" / "Happy Clients"; owl carousel of testimony items —
  quote paragraph + avatar circle + name "Roger Scott" + position
  "Marketing Manager" → Agents (`.ftco-section.ftco-agent`): heading
  "Agents" / "Our Agents"; 4 agent cards (`.agent`, col-md-3): photo +
  h3 name link + h-info (filing icon + "N Properties"): Ben Ford 43 ·
  John Cooper 28 · Janice Clinton 30 · Eunice Henceford 25 → Recent Blog
  (`.ftco-section.ftco-no-pt`): heading "Blog" / "Recent Blog"; 4 blog
  entries (`.blog-entry`, col-md-3): bg photo (`block-20.img`) + h3 title
  "Why Lead Generation is Key for Business Growth" + meta (October 17,
  2019 / Admin / chat 3) → Footer (`.ftco-footer.ftco-section`, **bg gold
  `#d4ca68`**, padding 7em 0): brand column (blurb + 3 social circles:
  twitter / facebook / instagram) · Community (Search Properties, For
  Agents, Reviews, FAQs) · About Us (Our Story, Meet the team, Careers) ·
  Company (About Us, Press, Contact, Careers) · "Have a Questions?"
  (address "203 Fake St. Mountain View, San Francisco, California, USA" /
  phone "+2 392 3929 210" / email "info@yourdomain.com") + copyright bar:
  "Copyright © <year> All rights reserved | This template is made with
  <heart> by Colorlib" → recreation credits Keyhold.
- **Design tokens extracted from the live preview CSS (`css/style.css`):**
  - Brand **gold `#d4ca68`** (50 uses; shade variant `#d4c968`) — primary
    CTA buttons (`.btn.btn-primary` override: bg `#d4ca68 !important`,
    border 1px `#d4ca68`, white text; hover: transparent bg + gold text),
    footer background, subheading text + the 50px rule lines either side,
    counter numbers, nav link hover, `.orig-price` price accent, listing
    location badge bg, property-card corner button bg, counter overlay
    panel.
  - Ink **`#000`** — headings (h1 60px w400 lh 1.1 / h2 40px w600), nav
    links (w600 15px), brand, card titles (h3 w600), footer heading
    `.ftco-heading-2` (17px w400).
  - Body/text grays — hero paragraph rgba(0,0,0,0.8) (lh 1.5); muted
    rgba(0,0,0,0.4) (card location, service-caption text); counter labels
    rgba(0,0,0,0.7) (18px); footer links rgba(255,255,255,0.8) on gold.
  - Light surfaces — white page; `.bg-light` `#f8f9fa` (testimonials);
    card shadows 0 5px 21px -14px rgba(0,0,0,0.14) → hover 0 5px 39px -14px
    rgba(0,0,0,0.26).
  - Section headings — `.subheading`: 12px, weight 600, uppercase,
    letter-spacing 2px, gold, with 50×1px gold rules at -60px each side;
    `.heading-section h2`: 40px weight 600 (28px ≤767px).
  - Buttons — `.btn`: radius **3px**, font-size 14px, no box-shadow; hero
    CTA padding `py-3 px-4` (≈ 1rem 1.5rem).
  - Navbar — transparent absolute top 20px; brand w700 20px; links w600
    15px padding-top/bottom .9rem + 20px sides; hover gold; mobile (≤991px):
    bg `#000`, white brand/nav, hamburger with "Menu" label.
  - Hero overlays — white gradient rgba(255,255,255,0.71) → 0 → white;
    gold left panel `#d4c968` → transparent (opacity .7, width 50%).
  - Radii — 3px buttons; Bootstrap `.rounded` (≈ 4px) listing cards + gold
    location badges; 50% circles for avatars (`rounded-circle`) and social
    icons; property-card hover link icon is a gold 40×40 circle
    (`border-radius: 50% 0 0 0` corner button on the card text, plus a
    centered circle over the image).
  - Spacing — `.ftco-section` ~7em 0 default; footer 7em 0; counter
    `.text strong.number` 50px w300; agent card h3 link weight 600; blog
    entry `.meta` links 12px (date/Admin/comment).
- **Visual design (from screenshot):** light real-estate landing page — a
  "Painted Ladies" San Francisco house photo fills the hero's right side
  and fades left into a cream/gold gradient; centered dark headline "Find
  Properties That Make You Money" with a gold rectangular "Search
  Properties" button; a horizontal white search bar with four fields
  (Location / Property Type / Property Status / Price Limit) + gold button
  sits over the hero bottom; below: a small gold circular icon + "Exclusive
  Offer For You" section with three property photo cards; the screenshot
  cuts off before the gold footer. Active nav link, buttons, and icons are
  gold (`#d4ca68`); everything else is white/black. Demo copy uses
  placeholder titles ("Why Lead Generation is Key for Business Growth",
  "Blue View Home", agent "Ben Ford") — paraphrase into
  real-estate-themed copy in the recreation.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/keyhold-<n>/<w>/<h>`); icons → lucide-react
  (social brand icons as inline SVG per repo rule — lucide-react removed
  brand icons); Roboto via Google Fonts `<link>`; no assets copied. Copy
  paraphrased but same content kinds (headline, search fields, property
  cards with price/beds/baths/sqft, features, counters, city cards,
  testimonials, agents, blog meta, footer columns).

Keyhold lives in `apps/keyhold` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Header and navigation

The system SHALL render a transparent header over the hero with a brand
wordmark, the main navigation, and a mobile menu toggle.

#### Scenario: Brand and desktop navigation

- **GIVEN** the Keyhold page is rendered on a wide viewport
- **WHEN** the header is displayed
- **THEN** the header SHALL show the "Keyhold" wordmark (black, weight 700,
  ~20px) on the left, positioned transparently over the hero (top 20px)
- **AND** the nav SHALL show links Home (active), About, Services, Agent,
  Listing, Blog, and Contact in black weight-600 text
- **AND** links SHALL turn brand gold `#d4ca68` on hover and for the active
  item

#### Scenario: Mobile menu toggle

- **GIVEN** the Keyhold page is rendered on a narrow viewport
- **WHEN** the hamburger "Menu" toggle is activated
- **THEN** a mobile menu SHALL open showing the nav links and a close
  control, over a black background with white text
- **AND** the menu SHALL close when the close control is activated

### Requirement: Hero

The system SHALL render a full-height hero with a background photo, a
white-to-transparent overlay, a left gold gradient panel, a headline, a CTA
button, and a scroll indicator.

#### Scenario: Hero content

- **GIVEN** the Keyhold page is rendered
- **WHEN** the hero section is displayed
- **THEN** the hero SHALL show a background photo (~850px tall) with a
  white gradient overlay (strong at top, fading to transparent mid-hero,
  back to white at the bottom)
- **AND** the hero SHALL show a gold gradient panel (`#d4ca68` family)
  covering the left portion at partial opacity
- **AND** the hero SHALL show the headline "Find Properties That Make You
  Money" centered, black, ~60px, weight 400
- **AND** the hero SHALL show a gold "Search Properties" button (radius
  3px, white text, transparent + gold text on hover)
- **AND** the hero SHALL show a mouse scroll indicator near the bottom
  that links to the search section

### Requirement: Property search bar

The system SHALL render a horizontal property search form with four fields
and a submit button.

#### Scenario: Search form fields

- **GIVEN** the Keyhold page is rendered
- **WHEN** the search bar below the hero is displayed
- **THEN** the form SHALL show a Location text input (placeholder
  "City/Locality Name", search icon)
- **AND** the form SHALL show a Property Type select (Type / Commercial /
  Office / Residential / Villa / Condominium / Apartment)
- **AND** the form SHALL show a Property Status select (Type / Rent / Sale)
- **AND** the form SHALL show a Price Limit select ($5,000 through
  $2,000,000)
- **AND** the form SHALL show a gold "Search Property" submit button (the
  live DOM's `input[type=submit]` reads "Search Property"; the hero CTA
  reads "Search Properties")

#### Scenario: Search form submission

- **GIVEN** the Keyhold page is rendered
- **WHEN** the search form is submitted
- **THEN** the form SHALL prevent the default page reload
- **AND** the form SHALL clear the fields and show a confirmation message

### Requirement: Featured properties

The system SHALL render an "Exclusive Offer For You" section with a
subheading, heading, and three property cards.

#### Scenario: Property card content

- **GIVEN** the Keyhold page is rendered
- **WHEN** the featured properties section is displayed
- **THEN** the section SHALL show the uppercase gold subheading "What we
  offer" with a gold rule line on each side and the h2 "Exclusive Offer For
  You"
- **AND** the section SHALL show exactly 3 property cards, each with a
  photo, a price row (struck-through old price + gold price with a
  "/mo" unit), a title, a location line with a pin icon, and a
  beds/baths/sqft icon list
- **AND** each card SHALL show an agent strip over the photo (circular
  avatar + agent name + Bookmark and Compare icon buttons)
- **AND** each card SHALL show a circular gold link icon centered over the
  photo on hover
- **AND** card shadows SHALL deepen on hover

### Requirement: Why choose us

The system SHALL render a split "Why Choose Us?" section with an image
half and four feature rows.

#### Scenario: Feature rows

- **GIVEN** the Keyhold page is rendered
- **WHEN** the Why Choose Us section is displayed
- **THEN** the section SHALL show the subheading "Services" and the h2
  "Why Choose Us?"
- **AND** the left half SHALL show a large photo
- **AND** the right half SHALL show 4 feature rows, each with a circular
  icon, a title, and a short description: No Downpayment, All Cash Offer,
  Experts in Your Corner, Locked in Pricing

### Requirement: Stats counter

The system SHALL render a photo-background counter section with four
animated stats and a gold panel.

#### Scenario: Counter stats

- **GIVEN** the Keyhold page is rendered
- **WHEN** the counter section is displayed
- **THEN** the section SHALL show a background photo with a gold overlay
  panel on the left
- **AND** the section SHALL show 4 stats with large gold numbers (50px,
  weight 300) and 18px labels: 305 Area Population · 1090 Total Properties
  · 209 Average House · 67 Total Branches
- **AND** the numbers SHALL animate up from 0 when scrolled into view

### Requirement: City listings

The system SHALL render a "Find Properties In Your City" section with six
city listing cards.

#### Scenario: City card content

- **GIVEN** the Keyhold page is rendered
- **WHEN** the city listings section is displayed
- **THEN** the section SHALL show the subheading "Find Properties" and the
  h2 "Find Properties In Your City"
- **AND** the section SHALL show 6 rounded photo cards in a 3-column grid,
  each with a gold location badge (top-left, e.g. "New York, USA"), the
  title "100 Property Listing", and a "See All Listing" link

### Requirement: Testimonials

The system SHALL render a light-background "Happy Clients" testimonial
carousel.

#### Scenario: Testimonial item

- **GIVEN** the Keyhold page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** the section SHALL show the subheading "Testimonial" and the h2
  "Happy Clients" on a light gray (`#f8f9fa`) background
- **AND** the section SHALL show a carousel of testimonial cards, each
  with a quote, a circular avatar, a name, and a position
- **AND** the carousel SHALL provide accessible next/previous controls

### Requirement: Agents

The system SHALL render an "Our Agents" section with four agent cards.

#### Scenario: Agent card content

- **GIVEN** the Keyhold page is rendered
- **WHEN** the agents section is displayed
- **THEN** the section SHALL show the subheading "Agents" and the h2 "Our
  Agents"
- **AND** the section SHALL show 4 agent cards in a row, each with a photo,
  a name link, and a "N Properties" line: Ben Ford (43), John Cooper (28),
  Janice Clinton (30), Eunice Henceford (25)

### Requirement: Blog strip

The system SHALL render a "Recent Blog" section with four blog entries.

#### Scenario: Blog entry content

- **GIVEN** the Keyhold page is rendered
- **WHEN** the blog section is displayed
- **THEN** the section SHALL show the subheading "Blog" and the h2 "Recent
  Blog"
- **AND** the section SHALL show 4 blog entries, each with a photo, a
  title, and a meta line (date, author, comment count)

### Requirement: Footer

The system SHALL render a gold footer with four link columns, a contact
column, social icons, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the Keyhold page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL have a gold `#d4ca68` background with white
  text
- **AND** the footer SHALL show a brand column (blurb + 3 social icon
  circles: Twitter, Facebook, Instagram)
- **AND** the footer SHALL show link columns Community (Search Properties,
  For Agents, Reviews, FAQs) and About Us (Our Story, Meet the team,
  Careers)
- **AND** the footer SHALL show a Company column (About Us, Press, Contact,
  Careers)
- **AND** the footer SHALL show a "Have a Questions?" column with an
  address, a phone number, and an email
- **AND** a copyright bar SHALL show the current year, "All rights
  reserved", and a credit line for the template author

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] `apps/keyhold` created from a landing/app pattern, package renamed to
      `@free-react-templates/keyhold`
- [ ] TDD: tests written first (red), then implementation (green)
- [ ] 100% coverage lines/functions/branches/statements (`npm run
  test:coverage -- --project apps/keyhold` or `scripts/verify-app.sh
  keyhold`)
- [ ] Brand gold `#d4ca68` + ink `#000` + muted rgba(0,0,0,0.4) in
      `@theme`; Roboto via Google Fonts link
- [ ] Section order matches the original 1:1 (see Design reference)
- [ ] Hero: bg photo + white gradient overlay + left gold panel; 60px
      headline; gold "Search Properties" CTA; mouse scroll indicator
- [ ] Search bar: 4 fields (Location input, Property Type / Status / Price
      Limit selects) + gold "Search Property" submit; submit prevents
      default and confirms
- [ ] Featured property cards: price (old + gold), title, location, bed /
      bath / sqft icons, agent strip with Bookmark/Compare, hover gold link
      circle + shadow deepen
- [ ] Why Choose Us split section with 4 feature rows (No Downpayment, All
      Cash Offer, Experts in Your Corner, Locked in Pricing)
- [ ] Counter: 4 stats (305 / 1090 / 209 / 67) with gold 50px numbers,
      animate on scroll into view
- [ ] City listings: 6 rounded photo cards with gold location badges and
      "See All Listing" links
- [ ] Testimonials: bg-light carousel with quote + avatar + name + position
- [ ] Agents: 4 cards (Ben Ford 43 / John Cooper 28 / Janice Clinton 30 /
      Eunice Henceford 25)
- [ ] Blog: 4 entries with photo, title, meta (date / author / comments)
- [ ] Footer: gold bg, 4 link columns + contact column + social circles +
      copyright bar
- [ ] Radii: 3px buttons; rounded (4px) city cards + badges; 50% circles
      only for avatars, social icons, and hover link icon
- [ ] Placeholder images via `picsum.photos/seed/keyhold-<n>/<w>/<h>`; no
      assets copied; social brand icons as inline SVG
- [ ] PR description: source template, preview URL, design tokens, what
      differs
- [ ] After merge: TEMPLATES.md Findstate (lines 395, 1014, 2589) `[~]` →
      `[x]` + Surge URL (`free-react-templates-keyhold.surge.sh`) +
      homepage + `npm run readme:status`
