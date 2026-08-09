# Template: Syllabus (Blog/News Magazine)

## Purpose

Syllabus is a single-page news-magazine template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Ednews"
design (see TEMPLATES.md — line 256, Blog section; the first unchecked item
whose prep did not exist on main), built under the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The original is a busy, classic newspaper-style portal on a deep-navy-blue
(#0C0E68) brand: a light utility top bar (location/weather, date, time, 5
social icons), a white middle header (bold navy "Ednews" logo + a banner-ad
slot with a white "READ MORE" button), a solid navy bottom nav (10 uppercase
category items, all with PAGE 1 / PAGE 2 dropdowns), a navy breaking-news
ticker row with a red "BREAKING NEWS" tag and a search field, a full-width
mosaic of four photo cards with white uppercase headline overlays, a
"TODAY FEATURED" section (one big feature + six small items, sidebar with
social follower blocks, a latest-news list and a review card), a navy
"FEATURED VIDEO" band of four video cards with circular play buttons, six
category blocks (POLITICS / SPORT / LIFESTYLE / BUSINESS / CULTURE / TECH)
each with a featured story and bordered sub-stories, a sidebar (MOST READ,
ARTICLES BY AUTHOR, REAL ESTATE banner, NEWSLETTER form), and a dark
#191919 footer with QUICK LINKS / FEATURED VIDEO / OUR WORK / RECENT POST
widgets, logo + social circles, and a #050658 bottom strip with copyright and
a category link row. Syllabus recreates that structure section-for-section
with matching layout, colors, typography, and content types (no ColorLib
assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Ednews" — free Bootstrap news/magazine website
  template (source: https://colorlib.com/wp/template/ednews/). New name:
  **syllabus** (an outline of study — an education/news motif; single word,
  no collision with `ls apps/` or existing spec folders).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/ednews/`
  (HTTP 200, ~64 KB; page title "Ednews"). Stylesheets: `common/styles.css`
  (~93 KB — custom template styles) plus `plugin-frameworks/bootstrap.css`
  and `fonts/ionicons.css` (icon font: ion-* classes for social, play,
  search, clock, eye, person, chat, chevron, navicon, heart, cloud). JS:
  jquery-3.2.1, tether, bootstrap, `common/scripts.js`. Fonts are inlined as
  `@font-face` by the preview portal (self-hosted `/cf-fonts/`): **Roboto**
  (400/600/700 — body) and **"Encode Sans Expanded"** (h1–h3 headings). In
  the recreation load both from Google Fonts `<link>` in index.html; icons
  from lucide-react + inline SVG brand icons.
- **Screenshot:** `ednews-free-template.jpg` (TEMPLATES.md line 256) —
  light-grey utility bar (Stockholm, Sweden 11°C · Thursday, 24 May, 2018
  09:00 AM · grey social icons), white header with bold dark-navy "EDNEWS"
  logo and a rectangular realestate.com.au banner ad with a black READ MORE
  button, solid deep-navy nav with white uppercase items, navy ticker with
  red BREAKING NEWS tag and a search input, then a 2×2 mosaic of photo cards
  with bold white uppercase headline overlays ("WHAT'S INCLUDED IN CONGRESS'
  $13 TRILLION SPENDING BILL" + repeated "FIVE PLACES UNDER THE FALLS AND
  ABOVE THE CLOUDS"), dark gradient overlays for readability; footer
  continues the dark navy theme. Deep navy + white + red accent is the
  palette.
- **Design tokens (extracted from `common/styles.css` + live computed
  styles):**
  - Brand primary: **#0C0E68** (deep navy) — `bg-primary` (breaking/ticker
    section, FEATURED VIDEO band), `btn-fill-primary` (NEWSLETTER SUBSCRIBE
    NOW), dropdown hover bg, `list-a-hvr-primary` hover, `.btn-fill-white`
    hover bg, social-circle hover.
  - Nav bar: **#0A2D8B** (medium navy) — `bottom-menu` background.
  - Darker navy: **#050658** — `bg-dark-primary` footer bottom strip.
  - Accent red: **#E3493D** — `btn-fill-red` (BREAKING NEWS tag, 45px,
    radius 3px, white text; hover inverts to transparent + red text).
  - Footer: **#191919** (`bg-191`) with **#ccc** text (`color-ccc`); meta
    text **#888** (`color-ash` / `color-lite-black`); grey hairlines #ccc /
    #ddd / #aaa (p-title underline, brdr-grey-1, brdr-l-grey-2,
    brdr-ash-1).
  - Social block colors: FB **#4270E8**, Twitter **#39CBF0**, Google+
    **#F63F39**, RSS **#EDAA15**.
  - Image overlays: hero cards `bg-grad-layer-6:after` =
    `linear-gradient(to top, #000 0%, rgba(0,0,0,.4) 60%)` opacity .8;
    REAL ESTATE banner `bg-layer-8:after` =
    `linear-gradient(to top, #000 0%, rgba(0,0,0,.6) 100%)` opacity .8;
    video cards `hover-video:after` = `linear-gradient(49deg, #000,
rgba(0,0,0,.4))` opacity .5 (hover .2).
  - Fonts: body **Roboto** 14px/400; headings h1–h3 **Encode Sans
    Expanded** (h4–h6 inherit Roboto bold); nav uppercase white; hero
    overlay headlines uppercase bold (`t-upper`, with a soft text-shadow).
  - Buttons: small radius (2–3px), heights 45px (`.btn-fill-*`), 35px
    (`btn-b-md`), 30px (`btn-b-sm`, font .9em); `.btn-fill-white` = white
    bg / navy border+text, hover inverts to navy bg; `.btn-fill-primary` =
    navy bg white text, hover transparent.
  - Cards: `.card-view` = white bg, radius 3px, `box-shadow: 1px 1px 4px
rgba(0,0,0,.10)`, padding 20–30px (`p-30` on widgets).
  - Section headings: `.p-title` = bold uppercase h4 with a full-width 1px
    `#ccc` underline bar 15px below; white-section variant `.p-title.in`
    (FEATURED VIDEO on navy) uses a `#777` line with a `#fff` short bar.
  - Meta rows: `ion-clock` date, `ion-android-person` author, `ion-ios-
chatbubble-outline` comment count, `ion-eye` view count — color-grey
    (#ccc) on hero cards, color-lite-black (#888) elsewhere.
  - Side story list items: `brdr-l-grey-2` = 2px solid #ccc left border +
    pl-20, h5 bold title + meta.
  - Search input (`abs-form`): transparent bg, height 35px, radius 3px,
    `border: 1px solid #777`, text #eee, right-aligned search icon.
  - Video play button: `.hover-video .icon i` = 40px circle (34px for
    `.sm`), `border: 2px solid #fff`, radius 50px, centered white play
    icon; hover shrinks icon toward top-left.
  - Spacing utilities are px-based: `ptb-50`/`ptb-30`/`ptb-10` paddings,
    `pb-20`, `pt-50`, `mtb-10/20/30`, `mb-20/30`, `p-30`, `plr-50`,
    `plr-30`.
- **Section order (1:1):**
  1. `header` — three stacked bars:
     - `top-header` (white, `border-bottom: 1px solid #ddd`, font .9em):
       left links **"Stockholm, Sweden [cloud] 15℃" · "Thursda, 24 May,
       2018" · "09:00 AM"**; right 5 grey social icons (facebook / twitter
       / pinterest / google / rss, `color-ash`).
     - `middle-header` (white, mtb-20): col-4 logo (`logo-black.png`, bold
       navy "Ednews" wordmark) + col-8 **banner ad** `banner-area` (bg
       image + dark overlay, white text, plr-30): h5 **realestate.com.au**
       - h6 **Discover the latest properties of australia** + right
         `a.btn-fill-white.btn-b-sm.plr-10` **READ MORE**.
     - `bottom-menu` (bg **#0A2D8B**, white): mobile `a.menu-nav-icon`
       (ion-navicon) + `ul.main-menu` (white uppercase, 60px line-height,
       `padding: 15px 0`): **HOME / BUSINESS / SPORT / POLITICS / TRAVEL /
       LIFESTYLE / CULTURE / TECH / VIDEO / FEATURES** — every `li.drop-
down` has an `ion-chevron-down` and `ul.drop-down-menu.drop-down-
inner` (absolute, top 60px, links #fff; items **PAGE 1 / PAGE 2**,
       `border-top: 1px solid #0C0E68`, hover bg #0C0E68).
  2. `section.pt-0.bg-primary` (navy):
     - Row 1 (`container.ptb-10`): col-md-8: `a.btn-fill-red.btn-b-md`
       **BREAKING NEWS** + `a.color-grey.hover-grey` **"8:30 AM Eight
       People have died and violent protest involving tens of
       thousands..."**; col-md-4: `form.abs-form` search (input
       placeholder **Search** + `ion-ios-search` icon button).
     - Row 2: full-width mosaic `plr-50 h-600x` (stacks on mobile):
       - left 60%: two tall side-by-side photo cards: lead **"WHAT'S
         INCLUDED IN CONGRESS' $13 TRILLION SPENDING BILL"** (bg-1,
         slider-1-550x600.jpg) + **"Five places under the falls and above
         the clouds"** (bg-2, slider-2-550x600.jpg);
       - right 40%: two stacked short cards (bg-3 slider-3-600x300.jpg,
         bg-4 slider-4-600x300.jpg) both titled **"Five places under the
         falls and above the clouds"**.
       - each card: `img-bg bg-N bg-grad-layer-6` + `abs-blr color-white
p-20`: h3.t-upper bold white title + meta list (clock **Jan 25,
         2018** / person **John Dowson** / chatbubble **15** / eye **105**;
         color-grey on the two tall cards, color-ash on the short ones).
  3. `section` (white, ptb-50) — row col-lg-8 + col-lg-4:
     - Main: h4.p-title **TODAY FEATURED**; featured item: `news-1-
700x400.jpg` + h3 **"WPP is investigating an allegation of personal
       misconduct against its chief executive Sir Martin Sorrell."** + meta
       - lorem excerpt; then 6 small items (news-2..7-250x250.jpg): h4
         **"Bahrain Grand Prix: Will Sebastian Vettel reign in the heat of
         the desert?" / "New Zealand v England: Visitors have good chance of
         Test win - Jonny Bairstow" / "Relations between Russia and the West
         are at a new low..." / "California investigators have said a car
         that plunged off a roadside cliff..." / "Facebook's chief executive
         has defended his leadership..." / "Tesla has been admonished by the
         US investigating a recent fatal crash..."** + meta.
     - Sidebar (col-lg-4):
       - `card-view.p-30` **STAY CONNECT**: 4 full-width social blocks
         (font-12, text-center, radius 5px): `bg-fb` **2135** followers /
         `bg-twtr` **5176** / `bg-gogl` **2244** / `bg-rss` **2111** (each
         with a small square icon + count + "followers"; hover → navy).
       - `card-view.p-30` second widget (the original repeats the **STAY
         CONNECT** title here — a copy-paste bug; recreate as **LATEST
         NEWS** and document the deviation): 8 latest items
         (`sided-80x`, sidebar-news-1..8-100x100.jpg): 80px thumb left +
         h5 bold title + meta (clock/eye): **"Murdoch proposes Sky News
         sale to Disney" / "Why Masteechef 'crispy' rendang caused
         uproar" / "'Nothing but holiday resort?' Revisiting 1939
         cornwell" / "UK Passport : Firm appears move to make the
         France" / "EX-health secretary being treated for bowl cancer" /
         "Pale and hungry pupils 'fill pockets with school foods'" /
         "Pendleton summer bike: 'that fill of power is addictive'" /
         "Dan carter rolls back years while pro dominance leaves
         England"**.
       - `card-view.p-30` review card: `sidebar-review-400x300.jpg` +
         h4 **"Berney Sander: Israel 'overreacted' during Gaza protest"**
         - meta + **"Judge Overseeing: 9.2/10"**.
  4. `section.bg-primary.color-white.pb-20` — **FEATURED VIDEO** band (the
     original headline is misspelled "FEATIRED VIDEO" — recreate with the
     correct spelling, h4.p-title.in white underline): 4 video cards
     (col-sm-6 col-md-3), each: `pos-relative` image video-1..4-300x300.jpg
     - `hover-video` overlay (dark gradient + centered white circular play
       icon, 40px, 2px white border) + h5.mt-15 bold title + meta (clock/eye,
       color-lite-black): **"Dan carter rolls back years while pro dominance
       leaves England" / "Josua VS Parker: Worldcup winners and a mascat" /
       "Aviation summit to be hosted April 16 & 17 at the hilton American-
       Hous" / "Srilanka has a secret lake local aren't tell you absout"**.
  5. `section.pb-20` (white, ptb-50) — row col-lg-8 + col-lg-4:
     - Main: 6 category blocks, each `card-view.p-30`:
       - h4.p-title category: **POLITICS / SPORT / LIFESTYLE / BUSINESS /
         CULTURE / TECH**;
       - row: col-sm-6 image (400x300: sport-1 / sport-1 / lifestyle-1 /
         business-1 / culture-1 / tech-1) + col-sm-6: h4.mt-30 bold title
         (**"Look beyond the revived Tiger Smitchel for a Homegrown Master
         champion"** ×2, **"The best spring outfits for an art gallery trip
         - in pictures"**, **"The thriving entrepreneurs who escaped the
           rat race"**, **"Church's Collaboration Could be a sign we are
           over 'It' trainer"**, **"EX-health secretary being treated for
           bowl cancer"**) + meta + lorem excerpt;
       - `brdr-grey-1` divider (mtb-30);
       - 4 sub-stories (2×2 col-sm-6, `brdr-l-grey-2 pl-20 mb-30`): h5
         bold title + meta (clock/eye) — repeat the template's four
         placeholder titles per block.
     - Sidebar (col-lg-4):
       - `card-view.p-30` **MOST READ**: 6 items (`sided-80x`,
         sidebar-most-read-1..6-100x100.jpg) — 80px thumb + h5 title +
         meta.
       - `card-view.p-30` **ARTICLES BY AUTHOR**: 4 authors (`sided-90x`:
         90px avatar `br-3` + h4.pt-20 bold name + h6.color-ash
         **Reporter**): **Chris Smalling / Johny Dowson / Emily Carter /
         Julia Ann**.
       - **REAL ESTATE** banner: `plr-30 ptb-50 text-center color-white
bg-7` (banner-2-300x300.jpg + `bg-layer-8` dark overlay): h3
         **REAL ESTATE** + p **"A perfect place to find your home
         residential real estate may contain either a single family"** +
         `a.btn-fill-white.btn-b-sm` **READ MORE**.
       - `card-view.mt-30.p-30.plr-40.text-center` **NEWSLETTER**: h4
         **NEWSLETTER** + p **"The best selling Magic-Magazine"** + cover
         image (100x150) + `form.form-sm` email input (placeholder "Yor
         Email" in the original — recreate as **"Your Email"**) + h6
         `button.btn-fill-primary.btn-b-sm.plr-20` **SUBSCRIBE NOW**.
  6. `footer.bg-191.pos-relative.color-ccc.pt-50` (#191919; decorative
     `bg-map` layer at opacity .1 behind the top area):
     - Row of 4: `col-lg-2` **QUICK LINKS** (Home Delivery / User
       Permissions / Download Apps / Newsletters / Subscriptions / Online
       Store) · `col-lg-4` **FEATURED VIDEO** (2 `sided-80x` items with
       `hover-video.sm` 34px play: video-1/video-2 thumbs + title + meta)
       · `col-lg-2` **OUR WORK** (In the Community / Today's Link / Our
       History / Our Events / Our Studio / Career) · `col-lg-4` **RECENT
       POST** (2 `sided-80x` items: sidebar-news-1/sidebar-news-2 thumbs
       - title + meta). Widget titles are h5.f-title bold; link lists
         `list-hover list-block list-a-ptb-5`.
     - `brdr-ash-1 opacty-4` divider (mt-20).
     - Bottom center row (text-center, ptb-30): col-sm-3 `logo-white.png`
       - col-sm-5 lorem paragraph + col-sm-4 5 social icons in 35px white
         circles (`list-radial-35`, border #aaa; hover navy).
     - `bg-dark-primary` (#050658) strip (ptb-15): left copyright
       (font-9, "Copyright © YYYY All rights reserved | This template is
       made with [heart] by Colorlib" → repo-standard credit) + right
       bottom nav links (font-11): **Home / Business / Sport / Politics /
       Travel / Lifestyle / Culture / Tech / Video**.

## Requirements

### Requirement: Header — utility bar

The system SHALL render a light utility top bar with location/weather,
date/time, and social icons.

#### Scenario: Utility bar renders

- **GIVEN** the Syllabus app is rendered
- **WHEN** the page top is displayed
- **THEN** it SHALL show "Stockholm, Sweden" with a cloud icon and a
  temperature, "Thursda, 24 May, 2018", and "09:00 AM" on the left
- **AND** five social icons (Facebook, Twitter, Pinterest, Google, RSS)
  SHALL render on the right in grey

### Requirement: Header — logo and banner ad

The system SHALL render a white middle header with the brand logo and a
banner-ad slot.

#### Scenario: Middle header renders

- **GIVEN** the page is rendered
- **WHEN** the middle header is displayed
- **THEN** it SHALL show the "Syllabus" brand wordmark on the left
- **AND** a banner-ad panel SHALL render on the right with "realestate.com.au"
  / "Discover the latest properties of australia" and a white **READ MORE**
  button

### Requirement: Header — navigation menu

The system SHALL render a solid navy bottom navigation with ten dropdown
category items.

#### Scenario: Navigation renders

- **GIVEN** the page is rendered
- **WHEN** the bottom nav is displayed
- **THEN** it SHALL have a #0A2D8B background with white uppercase links
  HOME / BUSINESS / SPORT / POLITICS / TRAVEL / LIFESTYLE / CULTURE / TECH /
  VIDEO / FEATURES
- **AND** each item SHALL open a dropdown with PAGE 1 and PAGE 2 links,
  with the dropdown hover background in brand navy #0C0E68
- **AND** a mobile toggler SHALL expose the same menu on small screens

### Requirement: Breaking-news ticker

The system SHALL render a navy breaking-news row with a red tag, a headline
link, and a search field.

#### Scenario: Ticker renders

- **GIVEN** the page is rendered
- **WHEN** the breaking-news row is displayed
- **THEN** it SHALL show a red **BREAKING NEWS** tag button
- **AND** the link text "8:30 AM Eight People have died and violent protest
  involving tens of thousands..."
- **AND** a search input with a search icon button (label "Search")

### Requirement: Hero mosaic

The system SHALL render a full-width mosaic of four photo cards with white
uppercase headline overlays.

#### Scenario: Mosaic renders

- **GIVEN** the page is rendered
- **WHEN** the hero mosaic is displayed
- **THEN** it SHALL show a large lead card "WHAT'S INCLUDED IN CONGRESS'
  $13 TRILLION SPENDING BILL" plus three cards titled "Five places under
  the falls and above the clouds" (two tall on the left, two stacked short
  on the right)
- **AND** every card SHALL have a dark bottom-up gradient overlay, white
  uppercase bold headline, and a meta row (Jan 25, 2018 · John Dowson · 15
  comments · 105 views)

### Requirement: Today featured

The system SHALL render a featured-news section with one large item, six
small items, and a sidebar.

#### Scenario: Featured section renders

- **GIVEN** the page is rendered
- **WHEN** the TODAY FEATURED section is displayed
- **THEN** it SHALL show the underlined heading "TODAY FEATURED"
- **AND** a large featured story (image, headline, meta, excerpt) about the
  WPP chief-executive investigation
- **AND** six smaller items with image, headline, and meta
- **AND** the sidebar SHALL show the STAY CONNECT social blocks (2135 /
  5176 / 2244 / 2111 followers in brand-colored blocks)

#### Scenario: Sidebar latest news renders

- **GIVEN** the page is rendered
- **WHEN** the featured section sidebar is displayed
- **THEN** it SHALL show a "LATEST NEWS" widget (replacing the original's
  duplicated "STAY CONNECT" heading — see design notes) with eight
  thumbnail items (80px thumb + title + date/views meta)
- **AND** a review card with the "Berney Sander" headline and
  "Judge Overseeing: 9.2/10"

### Requirement: Featured video band

The system SHALL render a navy band with four video cards.

#### Scenario: Video band renders

- **GIVEN** the page is rendered
- **WHEN** the FEATURED VIDEO band is displayed
- **THEN** it SHALL have a #0C0E68 background with a white underlined
  heading "FEATURED VIDEO"
- **AND** four video cards (thumb + dark hover overlay + centered white
  circular play button + bold title + date/views meta)

### Requirement: Category blocks

The system SHALL render six category blocks (POLITICS / SPORT / LIFESTYLE /
BUSINESS / CULTURE / TECH), each with a featured story and four bordered
sub-stories.

#### Scenario: Category blocks render

- **GIVEN** the page is rendered
- **WHEN** the categories section is displayed
- **THEN** it SHALL show six card blocks, each with an underlined uppercase
  category heading
- **AND** each block SHALL have a featured story (image + title + meta +
  excerpt) and a 1px divider
- **AND** four sub-stories with a 2px grey left border, bold title, and
  date/views meta

### Requirement: Sidebar widgets

The system SHALL render MOST READ, ARTICLES BY AUTHOR, REAL ESTATE, and
NEWSLETTER widgets in the categories-section sidebar.

#### Scenario: Sidebar widgets render

- **GIVEN** the page is rendered
- **WHEN** the categories sidebar is displayed
- **THEN** it SHALL show MOST READ with six thumbnail items
- **AND** ARTICLES BY AUTHOR with four reporter rows (90px avatar + name +
  "Reporter" label)
- **AND** a REAL ESTATE banner (photo background + dark overlay + READ MORE
  button)
- **AND** a NEWSLETTER card with a "Your Email" input and a navy
  **SUBSCRIBE NOW** button

### Requirement: Footer

The system SHALL render a dark footer with four link/video widgets, social
circles, and a bottom navy strip.

#### Scenario: Footer renders

- **GIVEN** the page is rendered
- **WHEN** the bottom footer is displayed
- **THEN** it SHALL have a #191919 background with a faint map texture at
  the top
- **AND** it SHALL show QUICK LINKS and OUR WORK link lists (6 items
  each), FEATURED VIDEO and RECENT POST widgets (2 thumbnail items each)
- **AND** a centered row with the white logo, a paragraph, and five social
  icons in white circles
- **AND** a #050658 bottom strip with the copyright/credit line and the
  category link row (Home / Business / Sport / Politics / Travel /
  Lifestyle / Culture / Tech / Video)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Syllabus app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, breaking-news/ticker, hero mosaic,
  TODAY FEATURED, FEATURED VIDEO band, categories + sidebar, and footer
  inside the main landmark in the original's order
- **AND** the document title SHALL be "Syllabus — News Magazine"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- syllabus` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Section order matches the original 1:1 (header [utility bar / logo+ad
      / bottom nav] → breaking ticker + search → hero mosaic → TODAY
      FEATURED → FEATURED VIDEO band → categories + sidebar → footer).
- [ ] Design tokens applied: brand navy `#0C0E68` (bg-primary sections,
      SUBSCRIBE NOW button, dropdown hover), nav `#0A2D8B`, footer `#191919` + `#050658` strip, red `#E3493D` BREAKING NEWS tag, social blocks
      #4270E8/#39CBF0/#F63F39/#EDAA15, meta #888, body Roboto / headings
      Encode Sans Expanded.
- [ ] Header renders utility bar (location · date · time + 5 grey social
      icons), logo + realestate banner ad (white READ MORE), and the navy
      10-item dropdown nav with mobile toggler.
- [ ] Breaking ticker shows red BREAKING NEWS tag, 8:30 AM headline link,
      and a labeled search field.
- [ ] Hero mosaic shows the lead story + 3 "Five places…" cards with dark
      gradient overlays, uppercase white headlines, and meta rows.
- [ ] TODAY FEATURED renders the large WPP story + 6 small items + STAY
      CONNECT (4 follower blocks) + LATEST NEWS (8 items) + review card.
- [ ] FEATURED VIDEO band renders 4 cards on navy with circular play
      buttons.
- [ ] Six category blocks (POLITICS…TECH) each with featured story +
      divider + 4 left-bordered sub-stories.
- [ ] Sidebar renders MOST READ (6), ARTICLES BY AUTHOR (4 reporters),
      REAL ESTATE banner, NEWSLETTER form with SUBSCRIBE NOW.
- [ ] Footer renders QUICK LINKS / FEATURED VIDEO / OUR WORK / RECENT POST,
      logo + paragraph + social circles, and the #050658 strip with
      credit + category links.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets); brand
      social icons are inline SVG (not lucide-react brand icons).
- [ ] PR description records source template (Ednews), preview URL, tokens,
      and renames (incl. documented deviations: corrected "FEATURED
      VIDEO"/"Your Email" spellings, LATEST NEWS heading).
