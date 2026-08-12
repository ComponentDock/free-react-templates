# Template: Dunkly (Sports — Basketball School & Club)

> **SUPERSEDED (2026-08-12):** this prep duplicates ColorLib "Basketball",
> which shipped as **Swish** (`apps/swish`, PR #307, live at
> https://free-react-templates-swish.surge.sh) while this spec was being
> researched. Both TEMPLATES.md Basketball rows (Blog section + Sports
> section) are marked `[x]` with the swish URL. DO NOT implement Dunkly —
> delete this spec folder + `docs/templates/dunkly/` on the next main-tree
> cleanup. The research below remains valid as a fidelity reference for the
> shipped app if any fix-ups are needed.

## Purpose

Dunkly is a single-page basketball-school / sports-club website template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Basketball" design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a warm, cream-and-orange basketball academy site: a white
header with a top info bar (phone + REGISTER button), a basketball logo and
menu (Home, About us, team, gallery, Pages, blog, Contact); a tall hero
("Defend & Dominate", 80px black uppercase headline with the "Defend" part in
orange) over an illustrated background of floating basketballs, a winding
cracked road, a city skyline and a hoop; a cream "Welcome to Basketball
School" about section; an "Upcoming Event" strip with two dark-gray event
cards (photo + white-ringed date box "15 jun", time, speaker, "View Details");
a dark "Learn About Basketball" slider band with a photo carousel; a
recreational-program split; a cream player-info block ("Jequline Dodge",
"Swords Club"); an "Our Gallery / Latest Player Showcase" grid with hover
overlays; a cream "Latest News & Update" blog grid with date badges; a "Follow
Us Instagram" strip; and a cream footer with four link columns + a newsletter
widget over a dark #303030 copyright bar. Dunkly recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Basketball" — basketball school / sports club
  website template (source: https://colorlib.com/wp/template/basketball/;
  listed in TEMPLATES.md under Blog and Sports — both rows are the same
  source).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/basketball/ (HTTP
  200, full rendered DOM, 43.7KB + `css/style.css` (135.5KB) + Bootstrap 4 +
  animate.css + owl.carousel + swiper + themify-icons + flaticon +
  magnific-popup, extracted 2026-08-12 during prep). The TEMPLATES.md
  screenshot (`basketball-free-template.jpg`, 1200×946, AVIF) was converted
  to PNG and viewed in the browser and confirms the design: white header over
  a cream hero, top info bar (search, phone, REGISTER), logo "Basketball
  COLLEGE TEAM" with a line-art basketball icon, headline "DEFEND &" in
  orange over "DOMINATE" in heavy black, orange "LEARN MORE" button with an
  arrow, right-side illustration of three floating basketballs, a winding
  cracked asphalt road, a city-skyline silhouette and a faint hoop outline —
  a clean, motivational, athletic aesthetic.
- **Section order (1:1):**
  1. Header (`.header_area`): top info bar — phone "+02 213 - 256 (365)" and
     a "REGISTER" button; `.main_menu` (border-top 1px #eeeeee, `.navbar`
     padding 20px 0, white bg): logo left (`img/Logo.png` — basketball line
     icon + "Basketball COLLEGE TEAM" wordmark), nav links Home / About us /
     team / gallery / Pages (dropdown) / blog / Contact, social icons right.
     Mobile: hamburger toggler with the same links.
  2. Hero (`.banner_part`, height 800px, `display:flex; align-items:center`,
     bg `img/banner_bg.png` cover; mobile fallback bg #f0eed4): left
     `.banner_text` — h5 eyebrow (14px, uppercase, Playfair Display 600,
     #666666), h1 "Defend & Dominate" (80px, line-height 1, uppercase, Open
     Sans 900, #000; "Defend" part in an orange #ff8b23 span), paragraph
     (Duden placeholder copy), `.btn_1` "learn more" (orange #ff8b23, white
     text, 12px uppercase, padding 13px 35px; hover → white bg + orange
     text). Right side is the illustration baked into `banner_bg.png`
     (basketballs, road, skyline, hoop).
  3. About (`.about_part`, bg #fff7ef): `.about_text` — h4 kicker "About us"
     (20px, italic, Playfair Display, #ff8b23), h2 "Welcome to Basketball
     School" (25px, Playfair Display, #2a2a2a), 2 paragraphs (Duden copy),
     `.btn_1` "read more"; right image `img/about.png`.
  4. Upcoming Event (`.upcoming_event.section_padding`, cream section):
     `.section_tittle` h4 "Upcoming Event" + h2 "Land Morning Blessed"
     (36px/700); two `.upcoming_event_1` event cards (bg #454545): event
     image (`upcoming_event_1.png` / `upcoming_event_2.png`) + `.upcoming_event_text`
     date box (bg #454545, width 271px, padding 35px 22px, margin 10px, ring
     shadow `0 0 0 10px rgba(255,255,255,.5)`): h3 date "15" (28px/700 white)
     - span month "jun" (50% size, Roboto 400), time "12:00 AM - 12:30 AM",
       "Sandis peter", description paragraph, `.btn_2` "View Details" (orange,
       padding 13px 47px, 12px uppercase, border-bottom 4px solid #fdcb9e).
  5. Learn About (`.learn_about.section_padding`, bg `img/learn_about_bg.png`
     cover + #000 base, dark): `.section_tittle` h4 "free tutorial" +
     h2 "Learn About Basketball" (white); `.swiper-slide-container` carousel
     with slide images (`slider_content_1.png` / `slider_content_2.png`) and
     4 thumbnail slides (`slide_thumb_1..4.png`) in a vertical/horizontal
     thumb rail.
  6. Recreational Program (`.about_part.recreational_part`, margin-bottom
     130px): h4 "Recreational Program", h2 "Deep which above behold an woter
     set a herb dry days." (placeholder copy), `.about_text` padding-left
     110px (text right), image `img/recreational.png` left.
  7. Player Info (`.player_info.section_padding`, bg #fff7ef): player name h3
     "Jequline Dodge" (20px/700), long paragraph (Duden copy), club label
     "Swords Club", image `img/player_info.png` (club logo `club_logo.png`
     appears as a watermark/badge).
  8. Gallery (`.gallery_part`, padding-top 130px, light): `.section_tittle`
     h4 "Our Gallery" + h2 "Latest Player Showcase"; 8 `.single_gallery_item`
     tiles (full-bleed photos): hover reveals a black overlay (`:after` bg
     #000, opacity 0 → 1, scale .7 → 1) with the item title "Face is had
     place image" (white 20px) and an orange #ff8b23 underline.
  9. Blog (`.blog_part.section_padding`, bg #fff7ef): `.section_tittle`
     h4 "From The Blog" + h2 "Latest News & Update"; 4 `.single-home-blog`
     cards: image (`blog/blog_1..4.png`), date "12 march, 2019", h5 title
     "Dictumst iaculis mauris egestas Nibh netus mauris suscipit." (20px/700,
     hover → #ff8b23), category "Sports news", "2 Comments".
  10. Social (`.social_connect_part`, padding-top 130px): `.section_tittle`
      h4 "Social Media" + h2 "Follow Us Instagram"; 6 instagram images
      (`insta/instagram_1..6.png`), hover overlay with social icon (dark
      #303030 band).
  11. Footer (`.footer-area.section_padding`, bg #fff7ef): 4 link columns —
      "Top Products" (Managed Website, Manage Reputation, Power Tools,
      Marketing Service), "Quick Links" (Jobs, Brand Assets, Investor
      Relations, Terms of Service), "Features" (same 4 links), "Resources"
      (Guides, Research, Experts, Agencies) — each `.single-footer-widget`
      h4 20px/700 #2a2a2a; Newsletter widget: text "You can trust us. we only
      send promo offers," + subscribe input/button.
  12. Copyright bar (`.copyright_part`, bg #303030, padding 26px 0): white
      text "Copyright © All rights reserved | This template is made with by
      Colorlib" (Colorlib credited).
- **Design tokens extracted from `css/style.css` + computed styles:**
  - Primary orange **#ff8b23** — `.btn_1`/`.btn_2` bg, `.section_tittle h4`
    kicker text, `.about_text h4`, hero h1 `span`, `.banner_text h1 span`,
    hover colors (`.blog_part .single-home-blog .card h5:hover`, `.contact-info
a:hover`), gallery item orange underline.
  - Light peach **#fdcb9e** — `.btn_2` bottom border (4px).
  - Cream **#fff7ef** — `.about_part`, `.player_info`, `.blog_part`,
    `.footer-area` section backgrounds.
  - Hero fallback **#f0eed4** (mobile, banner bg-image none).
  - Heading charcoal **#2a2a2a** — default h1–h6 color, `.section_tittle h2`,
    footer widget h4.
  - Hero headline **#000** (Open Sans 900); dark section bases #000
    (`.learn_about` bg-image cover + black), gallery hover overlay rgba(0,0,0,1).
  - Dark grays **#454545** (`.upcoming_event_1` card + `.upcoming_event_text`
    date box), **#303030** (`.copyright_part`, social icon band), **#8a8a8a**
    (muted text, blog date badge bg), **#666666** (hero h5 eyebrow).
  - White ring shadow `0 0 0 10px rgba(255,255,255,.5)` around the event date
    box; gallery hover overlay `:after` #000 scale(.7)→1 opacity 0→1.
  - Fonts: **"Playfair Display", serif** — headings (h1–h6 default, weight
    400/700) and italic kickers (`.section_tittle h4`, `.about_text h4`,
    hero h5 eyebrow 14px/600); **"Open Sans", sans-serif** weight 900 — hero
    h1 only; **"Roboto", sans-serif** — body copy, date-box month span.
    Google Fonts via `<link>` in `index.html` (@import:
    `Open+Sans:800|Playfair+Display:400,400i,900|Roboto:300,400,500`).
  - Type scale: hero h1 80px/900/uppercase/lh 1; `.section_tittle h2`
    36px/700; `.about_text h2` 25px; kicker h4 20px italic; event date h3
    28px/700 + month span 50% Roboto 400; player name h3 20px/700; blog card
    h5 20px/700; footer widget h4 20px/700.
  - Buttons: `.btn_1` padding 13px 35px; `.btn_2` padding 13px 47px,
    border-bottom 4px solid #fdcb9e; both 12px uppercase white text, hover →
    white bg + orange text (btn_1); no border-radius (square).
  - Rhythm: `.section_padding` 130px 0 (reduced at breakpoints); `.banner_part`
    height 800px; navbar padding 20px 0 + 1px #eeeeee top border;
    `.recreational_part` margin-bottom 130px; `.social_connect_part`/
    `.gallery_part` padding-top 130px; `.copyright_part` padding 26px 0;
    event date box 271px wide, padding 35px 22px, margin 10px.
- **Visual design (screenshot `basketball-free-template.jpg`):** warm, clean,
  motivational athletic aesthetic — white nav over a soft cream hero with a
  bold black/orange split headline, an illustrated "journey to victory" scene
  (floating basketballs + uphill winding road + skyline + hoop), orange CTA
  buttons, cream alternating sections, dark charcoal event cards with
  white-ringed date boxes, a dark slider band, gallery tiles with hover
  overlays, blog cards with date badges, dark footer bar.
- **Recreation decisions:** all photos → seeded picsum placeholders
  (`picsum.photos/seed/dunkly-<n>/<w>/<h>`; verify the hero/banner subject —
  the original banner is an ILLUSTRATION (road + basketballs + skyline), so
  the hero should use a real basketball/action photo or a composed
  illustration-style treatment with a cream bg, NOT a random landscape);
  flaticon/themify icons → lucide-react (Phone, Search, Menu, X, ArrowRight,
  Facebook, Twitter, Instagram, etc.); swiper carousels (learn-about slides,
  gallery) → auto-advancing slider with thumbnails; event date box →
  day-number + month-stack layout with the white ring; blog date badge;
  forms (REGISTER, subscribe) → front-end only; original copy paraphrased
  keeping the same content kinds; no assets copied.

Dunkly lives in `apps/dunkly` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Header with top info bar and navigation

The system SHALL render a white header with a top info bar (phone + REGISTER
button), a basketball logo, nav links, and social icons, plus a mobile
hamburger menu.

#### Scenario: Header content

- **GIVEN** the Dunkly page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show a top info bar with the phone number
  "+02 213 - 256 (365)" and a "REGISTER" button
- **AND** it SHALL show the brand "Dunkly" as a logo (basketball icon +
  wordmark) on the left
- **AND** it SHALL show nav links: Home, About us, team, gallery, Pages
  (dropdown), blog, and Contact
- **AND** it SHALL show social media icons on the right

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrow (mobile)
- **WHEN** the user opens the menu
- **THEN** a hamburger menu SHALL expand to show the same nav links and the
  REGISTER button

### Requirement: Hero banner

The system SHALL render a tall hero (800px) with a cream/illustrated
background, an eyebrow, a large black/orange uppercase headline, a paragraph,
and an orange "Learn More" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show an eyebrow line above the headline
- **AND** it SHALL show the headline "Defend & Dominate" (uppercase, ~80px,
  heavy sans weight 900) with the word "Defend" in the brand orange #ff8b23
  and "Dominate" in black
- **AND** it SHALL show a short paragraph
- **AND** it SHALL show an orange "Learn More" button (12px uppercase, square
  corners, padding ~13px 35px)

### Requirement: About section

The system SHALL render a cream about section with an orange italic kicker, a
heading, two paragraphs, a "Read More" button, and a photo.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the kicker "About us" in orange italic Playfair
- **AND** it SHALL show the heading "Welcome to Basketball School"
- **AND** it SHALL show two paragraphs and an orange "Read More" button
- **AND** it SHALL show a photo on the right

### Requirement: Upcoming events

The system SHALL render an upcoming-events section with a heading and two
event cards, each with a photo, a white-ringed date box (day + month), time,
speaker name, description, and a "View Details" button.

#### Scenario: Event content

- **GIVEN** the page is rendered
- **WHEN** the upcoming-events section is displayed
- **THEN** it SHALL show the kicker "Upcoming Event" and the heading
  "Land Morning Blessed"
- **AND** it SHALL show two event cards on a dark charcoal #454545 panel
- **AND** each card SHALL show a photo, a date box with day "15" and month
  "jun" (white text on #454545 with a 10px white ring), the time
  "12:00 AM - 12:30 AM", the speaker "Sandis peter", a description, and a
  "View Details" button (orange with a 4px #fdcb9e bottom border)

### Requirement: Learn About slider band

The system SHALL render a dark section with a kicker, a white heading, and an
auto-advancing photo carousel with thumbnails.

#### Scenario: Learn About content

- **GIVEN** the page is rendered
- **WHEN** the learn-about section is displayed
- **THEN** it SHALL show the kicker "free tutorial" and the heading
  "Learn About Basketball" in white on a dark photo background
- **AND** it SHALL show a carousel of slide photos that advances
  automatically
- **AND** it SHALL show thumbnail indicators for the slides

### Requirement: Recreational program

The system SHALL render a recreational-program split with a photo on the left
and a kicker, heading, and text on the right.

#### Scenario: Recreational content

- **GIVEN** the page is rendered
- **WHEN** the recreational section is displayed
- **THEN** it SHALL show the kicker "Recreational Program" and a heading
- **AND** it SHALL show a photo on the left and the text block on the right

### Requirement: Player info

The system SHALL render a cream player-info section with a player photo, the
player name, a biography paragraph, and the club name.

#### Scenario: Player content

- **GIVEN** the page is rendered
- **WHEN** the player-info section is displayed
- **THEN** it SHALL show the player name "Jequline Dodge" (20px/700)
- **AND** it SHALL show a biography paragraph and the club name
  "Swords Club"
- **AND** it SHALL show the player photo (with a club logo badge)

### Requirement: Gallery

The system SHALL render a gallery section with a heading and eight photo
tiles that reveal a black overlay with a title and an orange underline on
hover.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show the kicker "Our Gallery" and the heading
  "Latest Player Showcase"
- **AND** it SHALL show eight photo tiles
- **AND** hovering a tile SHALL reveal a dark overlay with the item title
  (white) and an orange underline

### Requirement: Blog / news

The system SHALL render a cream blog section with a heading and four news
cards, each with a photo, a date, a title, a category, and a comment count.

#### Scenario: News content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the kicker "From The Blog" and the heading
  "Latest News & Update"
- **AND** it SHALL show four cards, each with a photo, the date
  "12 march, 2019", a title (hover → orange), the category "Sports news",
  and "2 Comments"

### Requirement: Instagram / social strip

The system SHALL render a social strip with a heading and six Instagram photo
thumbnails with hover overlays.

#### Scenario: Social content

- **GIVEN** the page is rendered
- **WHEN** the social strip is displayed
- **THEN** it SHALL show the kicker "Social Media" and the heading
  "Follow Us Instagram"
- **AND** it SHALL show six square photo thumbnails with a hover overlay
  (social icon on a dark #303030 band)

### Requirement: Footer

The system SHALL render a cream footer with four link columns, a newsletter
widget, and a dark copyright bar crediting ColorLib.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the link columns "Top Products" (Managed Website,
  Manage Reputation, Power Tools, Marketing Service), "Quick Links" (Jobs,
  Brand Assets, Investor Relations, Terms of Service), "Features", and
  "Resources" (Guides, Research, Experts, Agencies)
- **AND** it SHALL show a Newsletter widget with the text "You can trust us.
  we only send promo offers," and a subscribe input + button
- **AND** the bottom bar (bg #303030) SHALL show the copyright line
  "Copyright © All rights reserved | This template is made with by Colorlib"

#### Scenario: Newsletter submit

- **GIVEN** the newsletter form is displayed
- **WHEN** the user enters an email and submits
- **THEN** the form SHALL prevent default navigation and show a success state
  (or a front-end validation message on an invalid email)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Dunkly app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header, hero, about, upcoming events,
  learn about, recreational program, player info, gallery, blog, social
  strip, and footer in order
- **AND** the document title SHALL be "Dunkly — Basketball School Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/dunkly`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/dunkly`)
- [ ] Section order matches the reference 1:1 (header → hero → about → upcoming events → learn about → recreational program → player info → gallery → blog → social → footer)
- [ ] Design tokens from the reference used in `@theme` (primary #ff8b23, peach #fdcb9e, cream #fff7ef, charcoal #2a2a2a, darks #454545/#303030/#000, gray #8a8a8a; Playfair Display + Open Sans 900 + Roboto Google Fonts)
- [ ] Header: top info bar (phone + REGISTER), logo (basketball icon + wordmark), nav (Home/About us/team/gallery/Pages/blog/Contact) + social icons, mobile hamburger
- [ ] Hero: 800px cream/illustrated bg, eyebrow, h1 "Defend & Dominate" (80px uppercase, "Defend" orange span, "Dominate" black), paragraph, orange "Learn More" (12px uppercase, square, 13px 35px)
- [ ] About: cream bg, orange italic kicker "About us", "Welcome to Basketball School", 2 paragraphs, "Read More", right photo
- [ ] Upcoming events: "Upcoming Event" / "Land Morning Blessed", 2 dark #454545 cards (photo, white-ringed "15 jun" date box, time, "Sandis peter", description, orange "View Details" with 4px #fdcb9e bottom border)
- [ ] Learn about: dark photo bg, "free tutorial" + white "Learn About Basketball", auto-advancing photo carousel + thumbnails
- [ ] Recreational program: photo left, "Recreational Program" kicker + heading + text right
- [ ] Player info: cream bg, "Jequline Dodge", bio paragraph, "Swords Club", player photo + club badge
- [ ] Gallery: "Our Gallery" / "Latest Player Showcase", 8 photo tiles with hover black overlay + white title + orange underline
- [ ] Blog: cream bg, "From The Blog" / "Latest News & Update", 4 cards (photo, "12 march, 2019", 20px/700 title hover orange, "Sports news", "2 Comments")
- [ ] Social: "Social Media" / "Follow Us Instagram", 6 photo thumbnails with dark hover overlay
- [ ] Footer: cream bg, 4 link columns (Top Products / Quick Links / Features / Resources) + Newsletter widget (promo text + subscribe input/button), dark #303030 copyright bar with ColorLib credit
