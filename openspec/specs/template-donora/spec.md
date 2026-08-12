# Template: Donora (Charity / Fundraising Template)

> **SUPERSEDED** — this ColorLib "Cause" source already shipped as
> **Altruist** (PR #316, https://free-react-templates-altruist.surge.sh).
> Do NOT implement — delete on next cleanup.

## Purpose

Donora is a single-page charity & fundraising website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Cause" website template design (see TEMPLATES.md), built under
a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Cause" — charity/fundraising template, Charity
  category (source: https://colorlib.com/wp/template/cause/). TEMPLATES.md
  has TWO copies of this item (lines 358 and 1252 — duplicate lines exist for
  some items; implementer must mark ALL copies when done).
- **Preview URL:** `https://preview.colorlib.com/theme/cause/` — HTTP 200,
  full rendered DOM (41.5 KB) fetched with curl. Page title: "Cause Charity".
  Stylesheets: `css/linearicons.css`, `css/font-awesome.min.css`,
  `css/bootstrap.css`, `css/magnific-popup.css`, `css/nice-select.css`,
  `css/animate.min.css`, `css/owl.carousel.css` + `css/main.css` (main,
  65.4 KB). Fonts are **"Playfair Display"** (serif, ALL headings h1–h6,
  `color: #000000`, `line-height: 1.2em`) + **"Roboto"** (sans-serif, body —
  16px/1.625em weight 500) via Google Fonts (Cloudflare `cf-fonts`).
- **Screenshot:** `cause-free-template-1.jpg` (1200×946, viewed in browser) —
  matches the DOM/CSS analysis: clean, modern, minimalist split hero. White
  hero left half with a big serif headline "New way to give back" + body copy
  - circular green video-play button ("Watch our intro video"); right half is
    a large photo (boy running in a grassy field) with a semi-transparent white
    donation box overlaid (label "Enter Monthly Donation Amount", amount input
    "125.00", USD, white "Donate Now" button). Nav bar: green leaf logo +
    "Cause" in bold serif, links HOME / ABOUT / CAUSES / EVENTS / BLOG / PAGES
    (dropdown arrow) / CONTACT. Below the hero: carousel arrows, then a centered
    "Our Major Causes" serif section title with placeholder paragraph. The demo
    brands itself "Cause"; our recreation uses the NEW name **Donora**.
- **Visual design (from DOM + CSS tokens + screenshot):** bright, friendly,
  green-led charity aesthetic. Brand primary is a vivid green `#61c524`
  (buttons, progress bars, hover states) with a mint/teal secondary
  `#46dbb7`; a full rainbow of accent colors is used for per-card/per-box
  accents: orange `#f9a22b`, cyan `#4cd3e3`, yellow `#f4e700`, red `#f44a40`,
  blue `#38a4ff`, purple `#a978e0`, pink `#e66686`. White page background,
  light-grey `#f9f9ff` section bands, dark navy `#04091e` footer. Serif
  Playfair Display headings (black), Roboto body text in grey `#777777`.
  Rectangular (0 radius) buttons; white cards with `#eeeeee` 1px borders.
- **Structure (1:1, index page):**
  1. Header `#header` (fixed, `padding: 14px 0`, transparent over white;
     `background: #222222` on mobile ≤1024px): logo image left, `nav#nav-menu-container` right — Home (`.menu-active`), About, Causes, Events, Blog (dropdown: Blog Home, Blog Single), Pages (dropdown: Donation, Event Details, Elements), Contact.
  2. Banner `.home-banner-area` (white bg, `.container-fluid`, two columns):
     - Left `.header-left col-lg-5` — `h1` "New way to give back" (60px,
       line-height 1), paragraph (`.pt-20 pb-20`), `.vdo-section` — circular
       play icon + "Watch our intro video" link (black text, 14px).
     - Right `.header-right col-lg-7` — `owl-banner` carousel (2× same
       `home-banner-img.jpg`), with `.form-wrap` overlay (absolute,
       `rgba(255,255,255,0.3)` bg, `padding: 40px`, width 54%): "Enter
       Monthly Donation Amount" (white text) + amount input (placeholder
       "125.00", USD suffix) + white `.primary-btn.white` "Donate Now".
  3. Causes Area `.causes-area.section-gap` — centered `.section-title`
     (`padding-bottom: 95px`): h2 "Our Major Causes" (36px) + paragraph.
     Row of 3 `.single-cause` cards (`border: 1px solid #eeeeee`):
     - `.top` (`padding: 30px`): image `.thumb` (`margin-bottom: 30px`), h3
       title (e.g. "Help Restoring Uganda's Water Pipelines Construction"),
       `.text` paragraph.
     - `.middle`: `.progress` bar at `aria-valuenow="75"` with per-card
       accent (progress-bar1 orange `#f9a22b`, progress-bar2 green
       `#61c524`, progress-bar3 purple `#a978e0`); stats row — 76% Funded,
       $7,689 Pledged, 29 Days Remaining (`.counter` numbers, h5 + 12px
       labels).
     - `.bottom` (`padding: 30px`, flex space-between): `.primary-btn
offwhite` "View Details" + `.primary-btn` "Donate Here" (green;
       card 2 uses plain, card 3 `.primary-btn3`).
  4. Collection Area `.collection-area.section-gap` (bg `#f9f9ff`) — left
     text (h2 36px "Experience How your Donation Reach Over Years" +
     paragraph) + 4 `.collection-box` cards (white bg, `padding: 20px`,
     centered): USD small label, big h3 amount (36px) with per-year accent
     colors (2015 → orange `color1` `#f9a22b`, 2016 → default dark, 2017 →
     green `color3` `#61c524`, 2018 → purple `color4` `#a978e0`), `lnr
arrow-up` icon, year label. Values: 21 M, 15 M, 23 M, 25 M.
  5. Condition Area `.condition-area.section-gap` — left `owl-condition`
     image carousel (`col-lg-6`), right `.condition-right` (`col-lg-5`,
     `offset-lg-1`): h2 36px "New way to give back" + two paragraphs +
     bullet list (4 `<li>` items, black text).
  6. Donation Area `.donation-area.section-gap-top` (relative) — background
     image `donation-bg.jpg` (cover), centered `col-lg-5`: h1 36px "Donate
     to help People Around the World" (white) + paragraph (white),
     `.text-wrap` `margin-bottom: 250px`.
  7. Donation Form Area `.donation-form-area.section-gap-bottom` —
     `margin-top: -170px` (overlaps the image band above); `.donation-box`
     (`padding: 50px`, white, shadow `0px 20px 50px 0 rgba(153,153,153,0.2)`,
     `col-lg-6`): amount input (placeholder "$20.00", `#f9f9ff` bg, 1px
     `#dddddd` border, USD suffix), two `.donation-type` radio boxes
     (`border: 1px solid #dddddd`, `padding: 20px`; Playfair label "One
     Time" / "Ongoing" + caption "Donate your amount for this session
     only"), full-width `.primary-btn w-100` "Donate Now".
  8. Brand Area `.brand-area.section-gap-bottom` — `owl-brand` logo
     carousel: 5 brand logo images (centered).
  9. Event Area `.event-area.section-gap-bottom` — left `.event-left
col-lg-5`: h1 36px "Upcoming Events" + paragraph + 3 `.single-event`
     blocks (bg `#f9f9ff`, `padding: 30px 40px`, `margin-top: 45px`;
     date line "12th September, 2018" + h4 title link). Right `.event-right
col-lg-6` (`offset-lg-1`): `owl-event` carousel (3× `e1.jpg`).
  10. Footer `.footer-area.section-gap` (bg `#04091e`, 3 columns):
      - `col-lg-5`: "About Us" h6 (white 18px 600) + paragraph; `.footer-text`
        copyright line (replace Colorlib credit with site name — CC BY 3.0
        credit not required in recreation).
      - `col-lg-5`: "Newsletter" h6 + "Stay update with our latest" + email
        input (`#f9f9ff`-style light) + arrow submit button
        (`fa-long-arrow-right`).
      - `col-lg-2 social-widget`: "Follow Us" h6 + "Let us be social" + 4
        social icon links (Facebook, Twitter, Dribbble, Behance).
- **Design tokens extracted from `css/main.css`:**
  - Brand primary green **`#61c524`** (`.primary-btn` bg, hover border/text,
    `.progress-bar2`, `.color3`); secondary mint **`#46dbb7`** (banner box
    bg, accent text).
  - Accent palette: orange **`#f9a22b`** (`.color1`, `.progress-bar1`), cyan
    **`#4cd3e3`**, yellow **`#f4e700`**, red **`#f44a40`**, blue
    **`#38a4ff`**, purple **`#a978e0`** (`.color4`, `.progress-bar3`), pink
    **`#e66686`**.
  - Backgrounds: page white; section band **`#f9f9ff`** (collection-area,
    single-event); form fields `#f9f9ff` with 1px `#dddddd` border; card
    borders **`#eeeeee`**; footer **`#04091e`** (dark navy); overlay white
    `rgba(255,255,255,0.3)` (hero form-wrap); donation band = cover image.
  - Text: headings `#000000` (Playfair Display); body **`#777777`** (Roboto
    16px/1.625em weight 500); white text on green/dark/image bands; footer h6
    white 18px weight 600.
  - Buttons `.primary-btn`: green `#61c524` bg, white 14px weight 500 text,
    `line-height: 47px`, `padding: 0 35px`, **0 radius**, 1px transparent
    border; hover = transparent bg + green text + green border. `.white`
    variant: white bg, black text, 1px white border; hover = green.
  - Section rhythm: `.section-gap` `padding: 150px 0` (60px ≤991px);
    `.section-gap-top` 150px top; section-title `padding-bottom: 95px`
    (40px mobile); h1/h2 36px (hero h1 60px), h3 30px→24px scale.
  - Cards: `.single-cause` 1px `#eeeeee` border, no shadow; `.collection-box`
    white bg, `padding: 20px`, centered; `.donation-box` white + soft shadow
    `0 20px 50px rgba(153,153,153,0.2)`.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/donora-<n>/<w>/<h>`); icons → lucide-react (Play,
  ArrowUp, ArrowRight, Facebook, Twitter, Dribbble, social/contact icons;
  lucide-react has no brand Behance — use an inline SVG or omit); fonts via
  Google Fonts `<link>` (Playfair Display + Roboto); brand green `#61c524` in
  `@theme`; carousels (banner/condition/brand/event) → simple index-based
  slider component (prev/next + dots) or static grid with arrows — no Owl
  Carousel dependency; no assets copied.

Donora lives in `apps/donora` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Header (logo + navigation)

The system SHALL render a fixed header with a logo and a horizontal
navigation menu.

#### Scenario: Header content

- **GIVEN** the Donora page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the site name "Donora" on the left
- **AND** it SHALL show a navigation menu with links Home, About, Causes,
  Events, Blog, Pages, and Contact

#### Scenario: Active link

- **GIVEN** the navigation menu is displayed
- **WHEN** the page loads
- **THEN** the Home link SHALL be marked as the active/current item

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle (repo-standard chrome)
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero banner

The system SHALL render a split hero: text + video link on the left, an
image with an overlaid donation form on the right.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero banner is displayed
- **THEN** it SHALL show the headline "New way to give back" with a supporting
  paragraph
- **AND** it SHALL show a video-play button labeled "Watch our intro video"
- **AND** the right half SHALL contain a hero image

#### Scenario: Hero donation form

- **GIVEN** the hero banner is displayed
- **WHEN** the user views the right half
- **THEN** an overlaid donation box SHALL be visible with the label "Enter
  Monthly Donation Amount"
- **AND** it SHALL contain an amount input (placeholder "125.00") with a USD
  suffix
- **AND** a "Donate Now" button SHALL submit the amount

### Requirement: Major causes cards

The system SHALL render a "Our Major Causes" section with three fundraising
cards.

#### Scenario: Section title

- **GIVEN** the causes section is displayed
- **WHEN** the page scrolls to it
- **THEN** a centered heading "Our Major Causes" SHALL be visible with a
  supporting paragraph

#### Scenario: Cause card content

- **GIVEN** a cause card is displayed
- **WHEN** the user views the card
- **THEN** it SHALL show an image, a title (e.g. "Help Restoring Uganda's
  Water Pipelines Construction"), and a short description
- **AND** a funding progress bar SHALL be shown (75% raised)
- **AND** three stats SHALL be visible: percent Funded, amount Pledged, and
  Days Remaining

#### Scenario: Cause card actions

- **GIVEN** a cause card is displayed
- **WHEN** the user views the card footer
- **THEN** "View Details" and "Donate Here" buttons SHALL be visible

### Requirement: Collection / donation history

The system SHALL render a collection area with year-by-year donation
amounts.

#### Scenario: Collection content

- **GIVEN** the collection section is displayed
- **WHEN** the page scrolls to it
- **THEN** a heading "Experience How your Donation Reach Over Years" SHALL be
  shown with a supporting paragraph
- **AND** four collection boxes SHALL be visible, each with a USD label, an
  amount (e.g. 21 M), an upward arrow icon, and a year (2015–2018)
- **AND** the amounts SHALL use per-year accent colors (orange, dark, green,
  purple)

### Requirement: Condition / about split

The system SHALL render a split section with an image carousel on the left
and text with a bullet list on the right.

#### Scenario: Condition content

- **GIVEN** the condition section is displayed
- **WHEN** the page scrolls to it
- **THEN** a carousel with at least two images SHALL be shown on the left
- **AND** the right side SHALL show the heading "New way to give back" with
  two paragraphs and a bullet list of four items

### Requirement: Donation CTA band + form

The system SHALL render a full-width donation call-to-action band followed
by an overlapping donation form card.

#### Scenario: Donation band

- **GIVEN** the donation band is displayed
- **WHEN** the page scrolls to it
- **THEN** a background-image band SHALL show the heading "Donate to help
  People Around the World" with a supporting paragraph in white text

#### Scenario: Donation form card

- **GIVEN** the donation form card is displayed
- **WHEN** the user views it
- **THEN** it SHALL overlap the band above (negative top margin)
- **AND** it SHALL contain an amount input (placeholder "$20.00", USD
  suffix)
- **AND** two radio options SHALL be selectable: "One Time" and "Ongoing",
  each with a short caption
- **AND** a full-width "Donate Now" button SHALL submit the form

### Requirement: Brand logos

The system SHALL render a brand logo strip.

#### Scenario: Brand strip

- **GIVEN** the brand section is displayed
- **WHEN** the page scrolls to it
- **THEN** at least five brand logo images SHALL be shown in a row

### Requirement: Upcoming events

The system SHALL render an events section with a text column and an image
carousel.

#### Scenario: Events content

- **GIVEN** the events section is displayed
- **WHEN** the page scrolls to it
- **THEN** a heading "Upcoming Events" SHALL be shown with a supporting
  paragraph
- **AND** three event entries SHALL be visible, each with a date (e.g. "12th
  September, 2018") and a title link
- **AND** an image carousel SHALL be shown on the right

### Requirement: Footer

The system SHALL render a dark footer with about, newsletter, and social
columns.

#### Scenario: Footer content

- **GIVEN** the footer is displayed
- **WHEN** the page loads
- **THEN** the footer SHALL show an "About Us" column with a paragraph and a
  copyright line
- **AND** a "Newsletter" column SHALL show an email input with a submit
  button
- **AND** a "Follow Us" column SHALL show social icon links
- **AND** the footer SHALL use the dark navy background (`#04091e`)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Donora app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Header in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Donora — Charity Template"

## Verification checklist

- [ ] `apps/donora` exists with package name `@free-react-templates/donora`
- [ ] `vite.config.ts` registers `injectUiSource()` (see docs/conventions.md)
- [ ] Fonts Playfair Display + Roboto loaded via Google Fonts `<link>` in index.html
- [ ] Brand green `#61c524`, mint `#46dbb7`, and accent palette (orange `#f9a22b`, purple `#a978e0`, cyan `#4cd3e3`, etc.) defined in `@theme`
- [ ] Section order matches the reference 1:1 (header → split hero + donation overlay → major causes → collection → condition split → donation CTA band + overlapping form → brand logos → upcoming events → footer)
- [ ] Per-app gate passes: `scripts/verify-app.sh donora` (typecheck + lint + 100% coverage tests + build)
- [ ] Full gate passes on merge (CI `npm run gate`), nightly sweep green
- [ ] TEMPLATES.md: mark BOTH Cause copies (lines 358, 1252) `[~]` → `[x]` + Surge URL + homepage after merge
- [ ] `npm run readme:status` regenerates README Templates status table after merge
- [ ] PR description states: source template (ColorLib Cause), preview URL, design tokens, what differs (rename, picsum placeholders, slider in place of Owl Carousel)
