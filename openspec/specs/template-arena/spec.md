# Template: Arena (Gaming / Esports Landing)

## Purpose

Arena is a single-page gaming/esports landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Beko" design (see TEMPLATES.md, Bootstrap category), built
under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a dark, neon gaming page with a red→magenta gradient accent:
a fixed navbar with brand + section links and an "Install Now" button, a
"Best Highlights of the Latest" hero over a dark illustrated background, a
client-logo carousel, an "about us in history" split, a "live stareams"
carousel of match cards (score, date, play overlay), a "Latest War Fight"
feature banner, an "All Fighter" masonry gallery, an "Upcoming Fighter"
countdown section, a dark "Pricing plans" row (Silver/Gold/Platinum), and a
dark footer with Important Link / Contact Info / Newsletter columns. Arena
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Beko" — free gaming website template
  (source: https://colorlib.com/wp/template/beko/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/beko/`
  (HTTP 200, 37.9KB) + stylesheet `css/style.css` (161.4KB). The rendered DOM is
  the reference below; the TEMPLATES.md screenshot (`beko-free-template.jpg`)
  confirms the visual design: near-black background, stark white text, hot
  pink/magenta→red gradient CTA buttons ("Install Now", "Watch Tutorial"),
  BEKO logo in white bold uppercase, hero with a 3D red gaming headset/helmet
  graphic glowing with orange rim light, condensed heavy sporty headings.
- **Section order (1:1):**
  1. Header (`main_menu single_page_menu`): fixed navbar — brand "gaming"
     (icon + wordmark), links Home / fighter / team / Blog / Single blog /
     pages / Elements / Contact, right-aligned "Install Now" `btn_1`
     gradient button.
  2. Hero (`banner_part`): background image (`img/banner_bg.png`,
     `background-size: contain`), 1020px-tall text block, H1 "Best Highlights
     of the Latest" (60px, capitalize, #fff, weight 700), lorem paragraph,
     "Install Now" (`btn_1` gradient) + "Watch Tutorial" (`btn_2` white)
     buttons; right column graphic (3D headset/helmet).
  3. Client logos (`client_logo`): owl-carousel row of
     `single_client_logo` images.
  4. About (`about_us section_padding`): "Find out about us in history"
     heading + lorem paragraph + "Install Now" + "Watch Tutorial" buttons;
     `learning_img` beside the text.
  5. Live streams (`live_stareams padding_bottom`): "live" label + "stareams"
     H2 + "install now" button; owl-carousel of `live_stareams_slide_img`
     cards — image with red→magenta gradient `:after` overlay, video play
     button (`extends_video`, popup-youtube), score "190 / 189", date "27
     june 2020", "Open War chalange" caption.
  6. Latest War (`Latest_War`): section title "Latest War Fight"; full-width
     `Latest_War_text` feature card — "Open War chalange", "27 june, 2020",
     "view fight" link, score "190 189", "Watch Tutorial" button; gradient
     `:after` overlay.
  7. Gallery (`gallery_part section_padding`): section title "All Fighter";
     masonry grid (`grid` + `grid-sizer`, isotope-style) of
     `single_gallery_item` tiles with gradient hover overlay
     (`img/gallery/gallery_item_*.png`).
  8. Upcoming war (`upcomming_war`): section title "Upcoming Fighter";
     background image (`img/event_bg.png`, `background-size: 90%`,
     no-repeat); counter card — fighter name "Dark Dragon",
     `upcomming_war_counter` countdown timer, "open" button.
  9. Pricing (`pricing_part padding_top`): section title "Pricing plans";
     3 `single_pricing_part` cards (col-lg-3) — "Silver Package" at
     $50.00 / $60.00 / $80.00, feature list ("2GB Bandwidth", "Two Account",
     "15GB Storage"), "Choose Plane" `btn_2` button; cards on dark navy
     `#0b111f` with `img/pricing_bg.png` at top.
  10. Footer (`footer_part`): dark footer (`footer_top`, 65px 0 100px) — 4
      columns: logo + about copy ("Heaven fruitful doesn't over lesser days
      appear..."), "Important Link" (WHMCS-bridge, Search Domain, My Account,
      Shopping Cart, Our Shop), "Contact Info" (Address / Phone +8880
      44338899 / Email info@colorlib.com), "Newsletter" form
      (`mail_part` + gradient `email_icon`); copyright bar "Copyright © All
      rights reserved | This template is made with Colorlib".
- **Design tokens extracted from `css/style.css`:**
  - Fonts: Google Fonts import
    `https://fonts.googleapis.com/css?family=Aclonica|Poppins:300,400,500,600`
    — **"Aclonica"** (display font: body base, headings, buttons) +
    **"Poppins"** (body text, nav, paragraphs).
  - Brand gradient: `linear-gradient(to left, #ff0000 0%, #c6019a 51%,
#ff0000 100%)` — **red #ff0000 → magenta #c6019a → red**. Applied to
    `.btn_1` (primary buttons), nav link underline (`:before`, magenta→red),
    and image-card overlays (`:after` on live-stream card images,
    `Latest_War_text`, gallery items, footer email icon).
  - Buttons: `.btn_1` = brand gradient, `padding: 18.5px 40px` (mobile 10px
    30px), `border-radius: 0` (square), font-size 15px, Aclonica 500, #fff;
    hover shifts `background-position: right center`. `.btn_2` = white
    background, same padding/radius/font; hover → `border: 1px solid
#ff0000` + white text.
  - Section titles: `.section_tittle h2` = 45px (mobile 25px),
    line-height 50px, **#fff**, weight 500, Aclonica; small label line above
    (e.g. "live" / "All Fighter").
  - Hero H1: 60px, line-height 70px, #fff, weight 700, capitalize.
  - Page theme: **dark gaming** — hero bg image, `live_stareams_bg.png` bg,
    `event_bg.png` (90% contain) bg, pricing cards `#0b111f` (dark navy),
    dark footer. White headings throughout.
  - Secondary palette present in CSS but NOT home-page brand:
    #f9f9ff, #f0e9ff, #4cd3e3, #f4e700, #f44a40 (elements/demo styles).
- **Recreation decisions:** repo-standard Navbar (site name "Arena", Home
  link, dark-mode toggle) + Footer chrome; dark theme kept as the default;
  hero = left text (H1 "Best Highlights of the Latest", copy, gradient
  "Install Now" + white "Watch Tutorial" CTAs) + seeded picsum graphic;
  client-logo carousel; about split with image + two CTAs; live-stream card
  row (image + gradient overlay + play button + score + date + match title);
  Latest War feature banner; masonry gallery with hover captions; upcoming
  fighter section with a countdown timer; 3 pricing cards on dark navy with
  feature list + "Choose Plane" button; footer with 3 link/info columns +
  newsletter (success-state form); all images picsum-seeded
  (`picsum.photos/seed/arena-N/w/h`); Google Fonts via `<link>`.

Arena lives in `apps/arena` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Arena", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Arena page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Arena" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero

The system SHALL render a full-width dark hero with a level-1 headline,
supporting copy, two call-to-action buttons, and a graphic.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a level-1 headline (e.g. "Best Highlights of the Latest") in white
- **AND** it SHALL show supporting copy
- **AND** it SHALL show two CTA buttons — a gradient primary (e.g. "Install Now") and a white secondary (e.g. "Watch Tutorial")
- **AND** it SHALL show an image/graphic on the opposite side

### Requirement: Client logos

The system SHALL render a client-logo strip with at least four logo images.

#### Scenario: Logo strip

- **GIVEN** the page is rendered
- **WHEN** the client-logo section is displayed
- **THEN** it SHALL render at least four logo images in a row

### Requirement: About section

The system SHALL render an about section with a heading, supporting copy,
two call-to-action buttons, and an image.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a heading (e.g. "Find out about us in history")
- **AND** it SHALL show at least one paragraph and the two CTAs (gradient + white)
- **AND** it SHALL show an image beside the text

### Requirement: Live streams

The system SHALL render a live-streams section with a heading, an "install
now" button, and at least two match cards.

#### Scenario: Match cards

- **GIVEN** the page is rendered
- **WHEN** the live-streams section is displayed
- **THEN** it SHALL show a section heading (e.g. "live stareams") and an install button
- **AND** it SHALL render match cards, each with an image, a gradient overlay, a play button, a score (e.g. "190 / 189"), a date (e.g. "27 june 2020"), and a match title (e.g. "Open War chalange")

### Requirement: Latest war banner

The system SHALL render a feature banner section with a heading and a
full-width war-match card.

#### Scenario: Latest war content

- **GIVEN** the page is rendered
- **WHEN** the latest-war section is displayed
- **THEN** it SHALL show a section heading (e.g. "Latest War Fight")
- **AND** it SHALL show a feature card with a match title, a date, a "view fight" link, a score, and a "Watch Tutorial" button

### Requirement: Gallery

The system SHALL render a gallery section with a heading and a masonry grid
of at least six image tiles with hover overlay captions.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show a section heading (e.g. "All Fighter")
- **AND** it SHALL render gallery tiles, each with an image and a hover overlay caption

### Requirement: Upcoming fighter

The system SHALL render an upcoming-event section with a heading, a fighter
name, a countdown timer, and an "open" button.

#### Scenario: Upcoming fighter content

- **GIVEN** the page is rendered
- **WHEN** the upcoming-fighter section is displayed
- **THEN** it SHALL show a section heading (e.g. "Upcoming Fighter")
- **AND** it SHALL show a fighter name (e.g. "Dark Dragon")
- **AND** it SHALL show a countdown timer with day/hour/minute/second blocks
- **AND** it SHALL show an "open" button

### Requirement: Pricing

The system SHALL render a pricing section with a heading and at least three
pricing cards.

#### Scenario: Pricing cards

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show a section heading (e.g. "Pricing plans")
- **AND** it SHALL render pricing cards, each with a package name (e.g. "Silver Package"), a price (e.g. "$50.00"), a feature list (e.g. "2GB Bandwidth", "Two Account", "15GB Storage"), and a "Choose Plane" button
- **AND** the cards SHALL be styled on a dark background

### Requirement: Footer

The system SHALL render a footer with the site name, link/info columns, a
newsletter form, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Arena" and link columns (e.g. Important Link, Contact Info)
- **AND** it SHALL show a newsletter form with an email input and submit button
- **AND** it SHALL show a copyright line

#### Scenario: Newsletter submit

- **GIVEN** the footer is rendered
- **WHEN** the user submits the newsletter form with a valid email
- **THEN** the form SHALL show a success message
- **AND** the email input SHALL no longer be present

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Arena app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Arena — Gaming Template"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- arena` passes: typecheck → lint → vitest (100%
      coverage) → build.
- [ ] Section order matches the original 1:1 (header → hero → client logos →
      about → live streams → latest war → gallery → upcoming fighter →
      pricing → footer).
- [ ] Design tokens applied: red→magenta brand gradient (#ff0000 → #c6019a)
      on primary buttons and card overlays, square buttons (radius 0),
      Aclonica display font + Poppins body, dark page with white headings,
      dark navy #0b111f pricing cards.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Beko), preview URL, tokens,
      and renames.
