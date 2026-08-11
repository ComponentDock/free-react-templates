# Template: Estately (Real Estate / Property)

## Purpose

Estately is a single-page real-estate website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Mondy" website template
(source: https://colorlib.com/wp/template/mondy/ — "Mondy - Best Property
Website Template Design"), built under a DIFFERENT name (Estately —
"estate" plus the friendly "-ly" suffix matching the family convention:
Wingly, Drivly, Nestly, Bookly, Coastly, Restly, Sleeply, Dozely, Soarly,
Lodgely, Sneakly, Taply, Ascendly, Serverly, Framely, Cargoly; single
lowercase word, no collision with `apps/`, `openspec/specs/` or
`docs/templates/` — verified 2026-08-11), per the monorepo naming mandate
(never reuse the ColorLib source name), with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The source appears FOUR times in TEMPLATES.md (dup-row trap): line 457
(**Bootstrap (216)** category — the FIRST occurrence, the canonical one),
line 1314 (**Classified Ads (4)**), line 1546 (**Directory (33)**), and
line 2600 (**Real Estate (39)**) — all `- [ ]` rows of the SAME template.
ONE implementation covers all four rows (mark all `[x]` with the same
surge URL at bookkeeping time).

## Design reference (replication findings)

- **Original:** ColorLib "Mondy" — page title "Mondy | Real Estate HTML
  Template", marketing title "Mondy - Best Property Website Template
  Design". Bootstrap 4 based (bootstrap.min.css + font-awesome +
  slicknav.min.css + custom `css/style.css`). The recreation brands itself
  **Estately** but keeps the same section structure, copy kinds and
  layout.
- **Live preview DOM analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/mondy/` — HTTP 200, ~42 KB HTML
  (REACHABLE — the preview is live, not a 404). Stylesheets:
  `css/style.css` (custom, ~21 KB — the template-specific tokens live
  here), `css/bootstrap.min.css`, `css/font-awesome.min.css`,
  `css/slicknav.min.css`. Screenshot `mondy-free-template.jpg` (1200×946,
  viewed in browser) matches the live DOM (kitchen-interior hero photo →
  search panel → "Sell Faster. Save Thousands." intro visible in the
  shot).
- **Section order (1:1, verified from live DOM):**
  1. **Header/navbar** (`header.header-section`): brand logo image left
     (`img/logo.png` — the MONDY wordmark; in the recreation use a text
     logo "ESTATELY" + small "REAL ESTATE" subtitle); `nav.header-nav`
     right: `ul.main-menu` inline links — **Home** (active, 2px bottom
     border `#ff000a`) · **About** · **Buy** · **Pages** (hover dropdown
     `ul.sub-menu` white bg, shadow `2px 7px 20px rgba(0,0,0,0.15)`:
     About Us · Search Result · Property) · **News** · **Contact**; then
     `.header-right .user-panel`: plain white link **Sign in** + outlined
     white **Join us** (`border: 2px solid #fff`, min-width 130px,
     padding 8px 15px, margin-left 25px). Links white, 16px, Lato,
     uppercase not required; active/hover underline red. Mobile: menu
     collapses (slicknav in source) — hamburger toggler in recreation.
  2. **Hero** (`section.hero-section.set-bg`, `data-setbg="img/hero-bg.jpg"`,
     height 824px, padding-top 325px, bg image top center): centered
     `div.hero-warp` — dark translucent panel `background:
rgba(34,36,43,0.83)`, padding 27px 48px 31px — containing
     `form.main-search-form`:
     - `.search-type` — five radio "tabs" (hidden radio inputs +
       labels): **Buy** (checked, label bg `#ff000a` + white caret
       arrow below) · **Rent** · **Sell** · **Property Value** ·
       **Agents** (labels white, Lato 700, padding 11px 10px, margin
       right 15px).
     - `.search-input` — white text input (height 71px, padding-left
       47px, italic, placeholder "Search by state, postcode or suburb")
       - **Search** button (`button.site-btn`, red).
     - `p` disclaimer: 12px, italic, `#b6b6b6` lorem text.
  3. **Intro** (`section.intro-section.spad`, white): centered
     `.section-title` — h2 **"Sell Faster. Save Thousands."** (72px, dark
     `#322429`); then TWO alternating image+text rows (`.row`):
     - Row A (`col-lg-6 order-lg-2` image right / `col-lg-6 order-lg-1`
       text left): `.about-text` h3 **"We charge 2% total. No hidden fees
       or upfront costs."** + lorem paragraph + **Find out more** link
       (`a.readmore-btn` — 18px w700 `#ff000a`, 1px bottom border).
     - Row B (image left / text right): h3 **"How Much Can You Save? We
       work for you, not commission."** + lorem + Find out more.
  4. **Recently Add Homes** (`section.property-section`, white): centered
     `.section-title` h2 **"Recently Add Homes"** (margin-bottom 90px);
     row of THREE `col-lg-4` `div.property-item` cards, each:
     `div.pi-image` (relative) with `img` (property photo) + absolutely
     positioned `div.pi-badge` top-left (min-width 87px, height 50px,
     padding 13px 10px 0, 18px w700 white): card 1 **New** (`#ff000a`),
     card 2 **Offer** (`#ffba00`), card 3 **New**; then `h3` price
     **$469,000** / **$369,000** / **$560,000**; `h5` **"3 Bedrooms
     Townhouse"**; lorem `p`; **Find out more** link. Cards
     margin-bottom 55px.
  5. **Loan section** (`section.loan-section` > `div.loan-warp`, bg
     `#22242b`, padding 95px 0 110px): centered white `.section-title`
     (`text-white`) h2 **"See If You Qualify for a Mortgage"** + lorem p;
     `form.loan-form` (flex, max-width 878px, centered): white text input
     placeholder **"Your income"** + input placeholder **"Amount
     needed"** (height 61px, padding 10px 25px, italic, no border,
     margin-right 30px) + **Submit** button (`button.site-btn`).
  6. **Stories** (`section.stories-section.spad`, white): row —
     `col-lg-5 order-lg-2` image right (`img/about/3.jpg`), `col-lg-7
order-lg-1` `.about-text` left: h2 **"Seller Success Stories"** (72px
     line-height 1) + lorem p + **Find out more** link.
  7. **Footer** (`footer.footer-section`, bg `#22242b`, padding 110px 0
     0): row of 5 columns — `col-lg-4` `.about-widget` (border-right 2px
     `#45484e`; footer logo + p lorem + **we are hiring** button
     `a.site-btn`) and four `col-lg-2 col-md-3 col-sm-6`
     `.footer-widger` link columns, each h2 + 5 links:
     - **Company**: About us · Services · Clients · Testimonials ·
       Carrers
     - **For Buyers**: Buy with us · Papers · Clients · Testimonials ·
       Homes
     - **For Sellers**: Seel With us · What do You Need · Clients ·
       Testimonials · Guideline
     - **For Renters**: Rent with us · Guidelines · Apartments · Flats ·
       Houses
       (footer link style: 16px, `opacity: 0.7`, margin-bottom 13px; h2
       18px w500). Then `.copyright` bar (right-aligned, centered on
       mobile; 12px uppercase `#676767`): "Copyright © All rights reserved
       | This template is made with ♥ by Colorlib" → rename to Estately +
       neutral credit.
- **Visual design (TEMPLATES.md screenshot `mondy-free-template.jpg`,
  1200×946, viewed in browser 2026-08-11):** professional real-estate
  one-pager. Full-bleed hero photo of a modern kitchen (red cabinetry,
  white counters, grey floors) with a dark translucent overlay; white
  header row above (MONDY wordmark logo left, white nav center — Home
  active with red underline, "Sign in" link + white-outlined "Join us"
  button right); dark charcoal search panel in the hero middle with red
  active "Buy" tab, white search input and a red SEARCH button; small
  faint italic disclaimer under the search bar; below the fold a white
  content area beginning with the big bold dark heading "Sell Faster.
  Save Thousands." Clean corporate look, red `#ff000a` accent on white
  and charcoal `#22242b` surfaces, Lato headings + Roboto body. The
  screenshot reaches the intro heading; everything below (second intro
  row, property cards, dark loan section, stories, footer) is verified
  from the live DOM.
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-11):**
  - Brand accent red: **`#ff000a`** — `.site-btn` background, `.readmore-btn`
    text + bottom border, nav link active/hover underline (2px), search
    tab checked background, `.pi-badge.new`, sub-menu link hover.
  - Offer badge amber: **`#ffba00`** (`.pi-badge.offer`).
  - Dark charcoal: **`#22242b`** — `.loan-warp` bg, footer bg, and the
    hero search panel as `rgba(34, 36, 43, 0.83)` overlay; widget divider
    `#45484e`.
  - Headings: **`#322429`** (dark maroon-brown), weight 700. Body text:
    **`#6a6a6a`** (15px, line-height 2). Input text `#3a3a3a`; hero
    disclaimer italic `#b6b6b6`; copyright `#676767` (12px uppercase).
  - Fonts: body **'Roboto', sans-serif**; headings/nav/buttons/forms
    **'Lato', sans-serif** (Google Fonts — add BOTH `<link>`s in
    `index.html`; body weight 400, headings 700, nav/buttons use Lato).
  - Buttons (`.site-btn`): UPPERCASE, 16px, `padding: 21px 44px`,
    `min-width: 156px`, background `#ff000a`, white text, **no border
    radius** (square corners), `cursor: pointer`, hover keeps white text.
    "Join us" is an outline variant: 2px solid white border, padding
    8px 15px, min-width 130px.
  - "Find out more" link (`.readmore-btn`): 18px, weight 700, color
    `#ff000a`, `border-bottom: 1px solid #ff000a`, line-height 1
    (underline-style link, not a filled button).
  - Nav links: 16px white Lato, `border-bottom: 2px solid transparent`;
    hover/active → `border-bottom: 2px solid #ff000a`. Sub-menu: white
    bg, `box-shadow: 2px 7px 20px rgba(0, 0, 0, 0.15)`, 220px wide.
  - Search tabs: labels Lato 700 white, padding 11px 10px (checked
    `11px 30px`), checked bg `#ff000a` + small white caret triangle
    below (`.st-item label:after`).
  - Inputs: white bg, italic text, no border; search input height 71px
    padding-left 47px; loan inputs height 61px padding 10px 25px.
  - Headings scale: h2 36px base (`.section-title h2` / `.about-text h2`
    72px desktop → 38px mobile), h3 30px, h5 18px; `.section-title`
    centered, margin-bottom 65px (property section title 90px); `.spad`
    padding 110px 0.
  - Section backgrounds: hero photo + `rgba(34,36,43,0.83)` panel; intro,
    property, stories white; loan + footer `#22242b`.
  - Property badges: absolute top-left over image, min-width 87px,
    height 50px, padding 13px 10px 0, 18px w700 white text.
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap 4
  layout (NO Bootstrap dependency); section order 1:1 as above; body
  Roboto + headings/buttons Lato via Google Fonts `<link>`s in
  `index.html`; brand red `#ff000a` + charcoal `#22242b` in `@theme`
  used via Tailwind classes; images via seeded picsum placeholders
  (`picsum.photos/seed/estately-<n>/<w>/<h>` — modern-interior/kitchen
  subjects for the hero bg and the two intro rows, house-exterior shots
  for the three property cards, a generic shot for the stories row);
  icons from lucide-react (search magnifier in the search input,
  heart for the footer credit, chevron for the Pages dropdown); the
  radio "tabs" as a real radio group (hidden inputs + styled labels —
  matches the source and is accessible); the Pages dropdown can be a
  CSS-hover group or a click toggle (keep any open/close logic in a
  pure exported function for 100%-coverage tests); the hero bg image as
  a plain `<img>` or CSS background with a dark overlay layer; brand
  "Mondy"/"Colorlib" → "Estately" everywhere including the footer
  credit (neutral); document title "Estately — Real Estate". All nav
  links, Find out more links, footer links, and the search/loan forms
  are dead-ends in the recreation (single landing page) — the search
  form and loan form submit must not navigate/reload (preventDefault
  in a handler, or `onSubmit` with a no-op state).
  The logo is a text wordmark in the recreation (source uses an image).

Estately lives in `apps/estately` (package `@free-react-templates/estately`) and
uses shared components from `packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Header / Navbar

The system SHALL render a white-on-dark header with a brand wordmark on
the left, six nav links (Home active with a red underline), a Pages
dropdown, and Sign in / Join us actions on the right.

#### Scenario: Header content

- **GIVEN** the Estately page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the brand wordmark "ESTATELY" with a
  small "REAL ESTATE" subtitle on the left
- **AND** the nav SHALL show links Home (active, 2px `#ff000a` bottom
  border), About, Buy, Pages, News, Contact in white 16px Lato
- **AND** the right side SHALL show a plain "Sign in" link and an
  outlined white "Join us" button

#### Scenario: Pages dropdown

- **GIVEN** the header is rendered
- **WHEN** the Pages link is hovered (or toggled)
- **THEN** a white dropdown SHALL open listing About Us, Search Result,
  Property
- **AND** the dropdown SHALL have a soft shadow (`2px 7px 20px
rgba(0,0,0,0.15)`)

### Requirement: Hero search

The system SHALL render a full-height hero with a background photo, a dark
translucent search panel with five property-type tabs, a search input and
a Search button.

#### Scenario: Hero search panel

- **GIVEN** the Estately page is rendered
- **WHEN** the hero is visible
- **THEN** a full-bleed hero image SHALL be shown with a dark overlay
- **AND** a dark charcoal panel (`rgba(34,36,43,0.83)`) SHALL contain
  five tabs — Buy (selected, `#ff000a` background), Rent, Sell, Property
  Value, Agents
- **AND** a white text input with placeholder "Search by state, postcode
  or suburb" SHALL be shown next to a red UPPERCASE "Search" button
- **AND** a small italic disclaimer line SHALL be shown below the input

#### Scenario: Tab selection

- **GIVEN** the hero search panel is rendered
- **WHEN** a tab other than Buy is selected
- **THEN** the selected tab SHALL get the `#ff000a` background and Buy
  SHALL return to the plain style

### Requirement: Intro section

The system SHALL render a white intro section titled "Sell Faster. Save
Thousands." with two alternating image + text rows, each with a heading,
a paragraph and a "Find out more" red underline link.

#### Scenario: Intro rows

- **GIVEN** the Estately page is rendered
- **WHEN** the intro section is visible
- **THEN** the centered 72px heading "Sell Faster. Save Thousands."
  SHALL be shown
- **AND** row A SHALL show the image on the right and the text on the
  left: heading "We charge 2% total. No hidden fees or upfront costs.",
  a paragraph, and a "Find out more" link (18px w700 `#ff000a` with a
  1px bottom border)
- **AND** row B SHALL show the image on the left and the text on the
  right: heading "How Much Can You Save? We work for you, not
  commission.", a paragraph, and a "Find out more" link

### Requirement: Recently Add Homes

The system SHALL render a "Recently Add Homes" section with three property
cards, each with a photo, a top-left badge, a price, a title, a paragraph
and a "Find out more" link.

#### Scenario: Property cards

- **GIVEN** the Estately page is rendered
- **WHEN** the property section is visible
- **THEN** the centered heading "Recently Add Homes" SHALL be shown
- **AND** three cards SHALL be shown side by side on lg, each with:
  a property photo with an absolutely positioned badge (card 1 "New"
  on `#ff000a`, card 2 "Offer" on `#ffba00`, card 3 "New" on `#ff000a`),
  a price heading ($469,000 / $369,000 / $560,000), the title
  "3 Bedrooms Townhouse", a paragraph, and a "Find out more" link

### Requirement: Mortgage loan section

The system SHALL render a dark charcoal (`#22242b`) "See If You Qualify
for a Mortgage" section with two text inputs and a Submit button.

#### Scenario: Loan form

- **GIVEN** the Estately page is rendered
- **WHEN** the loan section is visible
- **THEN** the white centered heading "See If You Qualify for a
  Mortgage" SHALL be shown on the `#22242b` background with a paragraph
- **AND** a centered form SHALL show the inputs "Your income" and
  "Amount needed" (white, italic, no border) and a red UPPERCASE
  "Submit" button
- **AND** submitting the form SHALL NOT navigate or reload the page

### Requirement: Seller Success Stories

The system SHALL render a "Seller Success Stories" section with an image
on the right and text (heading, paragraph, "Find out more" link) on the
left.

#### Scenario: Stories row

- **GIVEN** the Estately page is rendered
- **WHEN** the stories section is visible
- **THEN** the 72px heading "Seller Success Stories" SHALL be shown
- **AND** an image SHALL be shown on the right and the text block on the
  left, with a "Find out more" link

### Requirement: Footer

The system SHALL render a dark footer with an about widget (logo, blurb,
"WE ARE HIRING" button), four link columns (Company, For Buyers, For
Sellers, For Renters), and a copyright bar.

#### Scenario: Footer columns

- **GIVEN** the Estately page is rendered
- **WHEN** the footer is visible
- **THEN** the footer SHALL have a `#22242b` background
- **AND** the first column SHALL show the brand, a short paragraph, and
  a "WE ARE HIRING" button (red `#ff000a`, uppercase)
- **AND** four link columns SHALL be shown with headings Company
  (About us · Services · Clients · Testimonials · Carrers), For Buyers
  (Buy with us · Papers · Clients · Testimonials · Homes), For Sellers
  (Seel With us · What do You Need · Clients · Testimonials · Guideline),
  For Renters (Rent with us · Guidelines · Apartments · Flats · Houses)
- **AND** each link SHALL be 16px with reduced opacity (0.7)

#### Scenario: Copyright bar

- **GIVEN** the footer is rendered
- **WHEN** the copyright bar is visible
- **THEN** a 12px uppercase copyright line SHALL be shown, right-aligned
  (centered on mobile), reading "Copyright © <current year>. All rights
  reserved | Made with ♥ by Estately" (neutral credit, no Colorlib
  attribution)

### Requirement: Responsive behavior

The system SHALL collapse the header into a mobile menu on small screens
and stack all multi-column layouts to single columns.

#### Scenario: Mobile navigation

- **GIVEN** the Estately page is rendered on a viewport narrower than
  the desktop breakpoint
- **WHEN** the page is displayed
- **THEN** the nav links and Join us button SHALL collapse behind a
  hamburger toggler that opens them

#### Scenario: Stacked layout

- **GIVEN** the Estately page is rendered on a small viewport
- **WHEN** the page is displayed
- **THEN** the intro rows, property cards, loan form, stories row, and
  footer columns SHALL stack to single columns
- **AND** the copyright bar SHALL center its text

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-estately`
- [ ] `scripts/verify-app.sh estately` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order (1:1 with the live DOM): header (ESTATELY
      wordmark · Home active / About / Buy / Pages dropdown [About Us,
      Search Result, Property] / News / Contact · Sign in + outlined
      Join us) → hero (photo bg + dark overlay, charcoal search panel:
      Buy checked / Rent / Sell / Property Value / Agents tabs, search
      input + red SEARCH button, italic disclaimer) → intro (Sell
      Faster. Save Thousands. + 2 alternating image/text rows with
      Find out more) → Recently Add Homes (3 cards: New $469,000 /
      Offer $369,000 / New $560,000, "3 Bedrooms Townhouse") → dark
      loan section (See If You Qualify for a Mortgage, Your income +
      Amount needed + Submit) → Seller Success Stories (image right,
      text left) → footer (#22242b, about widget + 4 link columns +
      copyright bar)
- [ ] Brand tokens in `@theme`: `#ff000a` red (buttons, links, active
      tab, New badge), `#ffba00` amber (Offer badge), `#22242b` charcoal
      (loan + footer bg, hero panel rgba(34,36,43,0.83)), headings
      `#322429`, body `#6a6a6a` — all via Tailwind classes
- [ ] Fonts: Roboto (body) + Lato (headings, nav, buttons, forms) via
      Google Fonts `<link>`s in `index.html`
- [ ] Buttons: square corners (no radius), 16px uppercase, `#ff000a` bg,
      padding 21px 44px, min-width 156px; Join us = 2px white outline;
      Find out more = 18px w700 `#ff000a` underline link
- [ ] Placeholder images via `picsum.photos/seed/estately-<n>/<w>/<h>`
      (interior/kitchen for hero + intro, house exteriors for property
      cards), icons from lucide-react, no copied assets
- [ ] Brand renamed "Mondy"/"Colorlib" → "Estately" everywhere;
      copyright credit neutral; all links/forms dead-end without
      navigation (form submit prevented)
- [ ] Search tabs are a real radio group (hidden inputs + styled
      labels) with the checked tab on `#ff000a`
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md bookkeeping at ship time: mark ALL FOUR `- [ ]` rows
      (lines ~457 Bootstrap, ~1314 Classified Ads, ~1546 Directory,
      ~2600 Real Estate) `[x]` with the same surge URL +
      `npm run readme:status` (implementer)
