# Template: Sitewise (Web Hosting)

## Purpose

Sitewise is a web-hosting landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Hostza"
design (https://colorlib.com/wp/template/hostza/), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. "Sitewise" is a NEW
original name — the ColorLib source name is never reused in app code.

The original is a single-page web-hosting landing (Bootstrap 4, internal
brand "Hostza"): a transparent header over a deep-purple (#2e004b) hero —
left logo (green leaf/stylized-H icon + white wordmark), centered white nav
(Home / Package / Blog / Pages / Support / About / Contact), right "Log In"
link + bright-green pill "Live Chat" button; a 100vh hero with a purple
gradient + mountain-silhouette illustration at the bottom (lighter
purple/pink peaks with a faint circle behind), small green eyebrow "The Best
Domain & Hosting Provider In The Area", large white headline "Go Big with
your next Domain", and a white domain-search input ("Find your domain") with
a purple "search" button; a white "Choose your Hosting Plan" pricing section
(4 cards — Share / VPS / Wordpress / Dedicated Hosting, each with a large
colored icon, copy, "Start from $2.5/m" and a "Start Now" link); a "Core
Features" tabbed section (Features / Advanced Features tabs; feature rows
with colored icons: Free Domain for 1st Year, Free SSL Certificate, 30-Day
Money-Back Guarantee, Spam Protection, 24h Dedicated Support); a
"dedicated support" band over a photo background with a headline, a green
"Get Start Now" pill, and a green phone number; an "Our Data Centres"
section with a world-map SVG background and 4 location cards (Sydney,
Australia ×4 in the DOM — paraphrase to 4 distinct cities); a "Frequently
Ask Question" FAQ accordion (5 questions); a "Latest News" section (3 blog
cards: date "12 Jun, 2019", category "in Hosting tips", title, blurb); a
"Let's Launch your Website Now" CTA band over a photo background (Live Chat
link + green "get start now" pill + green phone number + email); and a dark
purple (#2e004b) footer (logo + blurb, "service" link column — Hosting,
Domain, Wordpress, Shared Hosting, "Navigation" column — Home, Rooms,
About, News, Newsletter signup form, copyright bar). Sitewise recreates
that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Hostza" — free web hosting website template
  (source: https://colorlib.com/wp/template/hostza/; single `- [ ]` entry in
  the hosting section of TEMPLATES.md).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/hostza/`
  (HTTP 200, ~40KB) + stylesheets `css/style.css` (~154KB, unminified SCSS
  source maps) plus bootstrap / font-awesome / flaticon / themify / owl /
  slicknav / gijgo / magnific-popup / nice-select. The rendered DOM is the
  structure ground truth below. The TEMPLATES.md screenshot
  (`hostza-free-template.jpg`, 1200×946) confirms the design above the
  fold: transparent header over the deep-purple hero, logo with green icon
  - white "Hostza" wordmark, centered white nav, "Log In" + green "Live
    Chat" pill on the right; hero = purple gradient with mountain-silhouette
    illustration at the bottom (lighter purple/pink peaks, faint circle
    behind), small green eyebrow, large white bold headline, white domain
    input + purple search button; below, a clean white "Choose your Hosting
    Plan" section. Modern sleek tech aesthetic — dark-purple top half with
    neon-green accents, white bottom half.
- **Section order (1:1):**
  1. Header (`header.header-area` — `position: absolute`, transparent,
     z-index 9, over the hero): `.logo-img` left — logo (green leaf/
     stylized-H icon + white wordmark "Hostza" → recreate as bold "Sitewise"
     - a lucide icon, e.g. Globe); centered `.main-menu` links — home,
       Package, blog, single-blog, pages, elements, Support, About, Contact
       (white; keep ~6 in the app: Home, Package, Blog, Support, About,
       Contact); right `.log_chat_area` — "log in" link (user icon) +
       `.live_chat_btn` (green pill "Live Chat" with chat icon). Mobile:
       slicknav hamburger → repo-standard mobile menu.
  2. Hero (`div.slider_area` > `.single_slider.slider_bg_1.overlay2`,
     100vh, bg `img/banner/banner.png` + `.overlay2::before` solid #2E004B
     overlay): centered `.slider_text` — eyebrow `<p>` "The Best Domain &
     Hosting Provider In The Area" (green), H3 "Go Big with your next
     Domain" (large white bold), `.find_dowmain_form` — white text input
     `placeholder="Find your domain"` + purple "search" submit button.
     Screenshot shows the purple gradient + mountain illustration bottom
     band (recreate with a purple gradient + SVG/illustrated mountain
     silhouettes in a lighter purple/pink with a faint circle behind).
  3. Pricing (`div.prising_area`): `.section_title` centered — "Choose your
     Hosting Plan" (42px, #2E004B, weight 400) + subtext ("Your domain
     control panel is designed for ease-of-use and allows for all aspects
     of your domains."); 4 `.single_prising` cards (border 1px #E0CCE6,
     radius 5px, padding 29px 23px): `.prising_icon` colored (blue
     #0181F5 / lite_blue #886CFE / pink #FF87A3 / yellow #F3C306, icon
     65px) + title (Share Hosting / VPS Hosting / Wordpress Hosting /
     Dedicated Hosting) + copy "Easy drag and drop fully customizable
     mobile friendly" + "Start from $2.5/m" + "Start Now" link.
  4. Core features (`div.core_features`, bordered top): left
     `.featuures_heading` — heading "Core Features" + subheading "Features"
     / "Advanced Features" tab pills (`.featurest_tabs .nav-tabs`, active
     tab highlighted); right `.tab-content` — 2 tab panes, each a 2-column
     grid of `.single_features` rows: `.icon` (colored: default / blue /
     pink / yellow variants) + `.features_info` — title (Free Domain for
     1st Year, Free SSL Certificate, 30-Day Money-Back Guarantee, Spam
     Protection, 24h Dedicated Support) + copy ("Our set he for firmament
     morning sixth subdue darkness..." — paraphrase; the source repeats the
     same lorem 8×, write 5-8 distinct feature blurbs).
  5. Dedicated support (`div.dedicated_support.support_bg`, bg
     `img/support/support_bg.png`): `.support_info` — heading (DOM: "Our
     set he for firmament morning sixth subdue darkness creeping gathered
     divide our let god moving. Moving in fourth air night bring upon
     you're it beast." — paraphrase into a support headline + paragraph),
     `.get_started` — green pill `.boxed_btn_green` "Get Start Now" (radius
     30px, bg #00D363, hover outline-invert) + `.phone_num` "+10 267 367
     678 2678" in green #00D363 (paraphrase the number).
  6. Data centres (`div.data_center_area`): `.section_title` centered —
     "Our Data Centres" + subtext; `img/banner/map.svg` world-map
     background + 4 location cards — DOM repeats "Sydney, Australia / It
     is a long established fact that a reader" 4× — paraphrase to 4
     distinct cities (e.g. Sydney, London, Frankfurt, Singapore) with
     short blurbs.
  7. FAQ (`div.faq_area`): `.section_title` — "Frequently Ask Question";
     accordion (`.accordion`/card pattern) with 5 items: "Is WordPress
     hosting worth it?", "What are the advantages of WordPress hosting
     over shared?", "Will you transfer my site?", "Why should I host with
     Hostza?", "How do I get started with Shared Hosting?" (paraphrase the
     brand in Q4 to Sitewise) — question + answer (lorem → paraphrase).
  8. Latest news (`div.latest_new_area`): `.section_title` — "Latest News"
     - subtext; 3 `.single_blog` cards (`img/news/1..3.png`): date "12
       Jun, 2019", category "in Hosting tips", title "Commitment to
       dedicated Support", blurb "Firmament morning sixth subdue darkness".
  9. CTA (`div.lets_launch.launch_bg_1.overlay2`, bg `img/banner/launch.png`
     - #2E004B overlay): centered `.launch_text` — heading "Let's Launch
       your Website Now" + copy; buttons: "Live Chat" link + green
       `.boxed_btn_green` "get start now" + `.phone_num` "+10 783 467 3789"
       (green) + email "hostza@support.com" (paraphrase).
  10. Footer (`footer.footer`, bg **#2E004B**, footer_top padding 145px
      129px): `.footer_widget` columns — logo + `.footer_text` blurb;
      "service" title + links (Hosting, Domain, Wordpress, Shared
      Hosting); "Navigation" title + links (Home, Rooms, About, News);
      Newsletter — "Sign Up" title + "Subscribe newsletter to get updates"
      - email input + subscribe button. Copyright bar — the source's "This
        template is made with by Colorlib" becomes the Component Dock link.
- **Design tokens:**
  - Primary brand dark purple **#2E004B** (27× in style.css) — header/footer
    backgrounds, `.overlay2::before` hero overlay, `.section_title h3`
    color, `.boxed-btn` text/border.
  - Accent green **#00D363** (26×) — eyebrow text, `.boxed_btn_green` bg
    (radius 30px, color #fff, padding 12px 30px, hover transparent +
    green border), `.phone_num` color, Live Chat button.
  - Orange **#FF5E13** (20×) — secondary accent (hover states, misc).
  - Feature/pricing icon colors: blue **#0181F5**, light purple **#886CFE**,
    pink **#FF87A3**, yellow **#F3C306**.
  - Light backgrounds: **#F9F9FF** (27×), **#F0E9FF** (12×); borders
    **#E0CCE6** (pricing cards); muted text **#919191** / **#999999** /
    **#888888**.
  - Font: **Roboto** (Google Fonts) — `font-family: "Roboto", sans-serif`
    throughout; headings 42px/400/52px (#2E004B), body ~15-16px.
  - Buttons `.boxed-btn`: white bg, #2E004B text, 1px solid #2E004B
    border, letter-spacing 3px, padding 18px 44px; hover inverts (bg
    #2E004B, white text). Green pill `.boxed_btn_green`: radius 30px, bg
    #00D363, white text, 16px, padding 12px 30px; hover outline-invert.
  - `.section_title h3`: 42px, weight 400, line-height 52px, color
    #2E004B, centered; subtext muted ~16px.
  - `.overlay2::before`: absolute full-cover `background-color: #2E004B`
    overlay over the hero/CTA photo backgrounds.
- **Recreation approach:** dark theme top (purple #2e004b header/hero/CTA
  overlay) + white bottom; sticky/absolute transparent header over hero with
  "Sitewise" logo (bold wordmark + lucide Globe), white nav (Home, Package,
  Blog, Support, About, Contact), "Log In" link + green pill "Live Chat";
  100vh hero — purple gradient bg + mountain-silhouette illustration band
  (SVG or CSS shapes, lighter purple/pink + faint circle) + green eyebrow +
  white headline + white domain-search input + purple "search" button;
  white pricing section (4 cards, colored 65px lucide icons, "Start from
  $2.5/m" + "Start Now"); Core Features tabs (2 tabs × 4-5 feature rows,
  colored icons); support band over photo (headline + green "Get Start
  Now" pill + green phone); Data Centres section with map graphic +
  location cards (4 cities); FAQ accordion (5 Q&A); Latest News (3 blog
  cards with date/category/title/blurb); CTA band over photo (heading,
  Live Chat link, green "get start now" pill, green phone + email); dark
  purple footer (logo + blurb, service + navigation link columns,
  Newsletter form, copyright bar → Component Dock). All images
  picsum-seeded (`picsum.photos/seed/sitewise-N/w/h`); Roboto via Google
  Fonts `<link>`; lucide-react icons (Globe, MessageCircle, Server, Cloud,
  Shield, etc. — probe each export before use).

## Requirements

### Requirement: Header

The system SHALL render a transparent navigation header over the hero with
a logo, white links, a Log In link, and a green Live Chat button.

#### Scenario: Navbar

- **GIVEN** the Sitewise app is rendered
- **WHEN** the page loads
- **THEN** a header SHALL overlay the hero (absolute/transparent) and show
  the brand "Sitewise" (bold wordmark + lucide icon) on the left
- **AND** it SHALL show white navigation links: Home, Package, Blog,
  Support, About, Contact
- **AND** it SHALL show a "Log In" link with a user icon on the right
- **AND** it SHALL show a green pill "Live Chat" button with a chat icon

#### Scenario: Mobile menu

- **WHEN** the viewport is narrow
- **THEN** the links SHALL collapse behind a hamburger toggle
- **AND** clicking the toggle SHALL open/close the menu

### Requirement: Hero

The system SHALL render a full-viewport hero with a purple gradient
background, eyebrow, headline, and a domain search form.

#### Scenario: Hero content

- **GIVEN** the Sitewise app is rendered
- **WHEN** the hero section displays
- **THEN** it SHALL show the green eyebrow "The Best Domain & Hosting
  Provider In The Area"
- **AND** it SHALL show the large white headline "Go Big with your next
  Domain"
- **AND** it SHALL show a domain search form: a text input
  (`placeholder="Find your domain"`) and a purple "search" submit button
- **AND** the hero SHALL sit on a deep-purple (#2e004b-tinted) background
  with a mountain-silhouette illustration band at the bottom (lighter
  purple/pink peaks + faint circle)

### Requirement: Pricing

The system SHALL render a pricing section with four hosting plan cards.

#### Scenario: Plan cards

- **GIVEN** the Sitewise app is rendered
- **WHEN** the pricing section displays
- **THEN** the centered heading SHALL read "Choose your Hosting Plan" with
  a short subtext
- **AND** four cards SHALL render (Share Hosting, VPS Hosting, Wordpress
  Hosting, Dedicated Hosting), each with a large colored icon, a short
  blurb, "Start from $2.5/m", and a "Start Now" link
- **AND** the cards SHALL have a 1px #E0CCE6 border and 5px radius

### Requirement: Core features

The system SHALL render a tabbed core-features section.

#### Scenario: Feature tabs

- **GIVEN** the Sitewise app is rendered
- **WHEN** the core-features section displays
- **THEN** the heading SHALL read "Core Features"
- **AND** two tabs SHALL be present: "Features" (active by default) and
  "Advanced Features"
- **AND** each tab SHALL show feature rows with a colored icon and a title
  - blurb (e.g. Free Domain for 1st Year, Free SSL Certificate, 30-Day
    Money-Back Guarantee, Spam Protection, 24h Dedicated Support)
- **AND** clicking the other tab SHALL switch the visible feature set

### Requirement: Dedicated support

The system SHALL render a support band over a photo background with a
headline, a green CTA, and a phone number.

#### Scenario: Support band

- **GIVEN** the Sitewise app is rendered
- **WHEN** the dedicated-support section displays
- **THEN** it SHALL sit on a cover photo background
- **AND** it SHALL show a support headline and short paragraph
- **AND** it SHALL show a green pill "Get Start Now" button
- **AND** it SHALL show a green phone number

### Requirement: Data centres

The system SHALL render a data-centres section with a map graphic and four
location cards.

#### Scenario: Location cards

- **GIVEN** the Sitewise app is rendered
- **WHEN** the data-centres section displays
- **THEN** the centered heading SHALL read "Our Data Centres" with a short
  subtext
- **AND** a map graphic SHALL be present
- **AND** four location cards SHALL render (e.g. Sydney, London, Frankfurt,
  Singapore), each with a city name and a short blurb

### Requirement: FAQ

The system SHALL render an FAQ accordion with five questions.

#### Scenario: FAQ items

- **GIVEN** the Sitewise app is rendered
- **WHEN** the FAQ section displays
- **THEN** the heading SHALL read "Frequently Ask Question"
- **AND** five question items SHALL render (e.g. "Is WordPress hosting
  worth it?", "What are the advantages of WordPress hosting over shared?",
  "Will you transfer my site?", "Why should I host with Sitewise?", "How
  do I get started with Shared Hosting?"), each expandable to show its
  answer
- **AND** clicking a question SHALL expand/collapse its answer

### Requirement: Latest news

The system SHALL render a news section with three blog cards.

#### Scenario: News cards

- **GIVEN** the Sitewise app is rendered
- **WHEN** the latest-news section displays
- **THEN** the heading SHALL read "Latest News" with a short subtext
- **AND** three cards SHALL render, each with a date (e.g. 12 Jun, 2019),
  a category (e.g. "in Hosting tips"), a title (e.g. "Commitment to
  dedicated Support"), and a short blurb

### Requirement: Call to action

The system SHALL render a "Let's Launch your Website Now" CTA band over a
photo background.

#### Scenario: CTA band

- **GIVEN** the Sitewise app is rendered
- **WHEN** the call-to-action section displays
- **THEN** it SHALL sit on a cover photo background with a dark-purple
  overlay
- **AND** it SHALL show the heading "Let's Launch your Website Now", a
  short paragraph, a "Live Chat" link, a green "get start now" pill, and a
  green phone number (plus email)

### Requirement: Footer

The system SHALL render a dark-purple footer with a blurb, link columns, a
newsletter form, and the standard credit.

#### Scenario: Footer content

- **GIVEN** the Sitewise app is rendered
- **WHEN** the footer displays
- **THEN** it SHALL have background `#2e004b`
- **AND** it SHALL show the logo, a short blurb, a "service" link column
  (Hosting, Domain, Wordpress, Shared Hosting), and a "Navigation" column
  (Home, Rooms, About, News)
- **AND** it SHALL show a Newsletter signup form ("Sign Up" title, email
  input, subscribe button)
- **AND** the copyright bar SHALL link to `https://www.componentdock.com/`

### Requirement: Page metadata

The system SHALL set a descriptive document title.

#### Scenario: Document title

- **GIVEN** the Sitewise app is rendered
- **WHEN** the document loads
- **THEN** the document title SHALL be "Sitewise — Web Hosting Template"

## Verification checklist

- [ ] `openspec/specs/template-sitewise/spec.md` exists on main with the
      full section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/sitewise/tasks.md` exists on main with design notes
      and the implementation task outline.
- [ ] Fidelity: section order matches the Hostza preview DOM 1:1 (header →
      hero → pricing → core features → dedicated support → data centres →
      FAQ → latest news → CTA → footer); hero mountain-silhouette
      illustration follows the TEMPLATES.md screenshot.
- [ ] Tokens used in the app: primary dark purple `#2E004B`, accent green
      `#00D363`, icon colors blue `#0181F5` / light purple `#886CFE` /
      pink `#FF87A3` / yellow `#F3C306`, light bgs `#F9F9FF`/`#F0E9FF`,
      border `#E0CCE6`; Roboto via Google Fonts `<link>`; green pill
      buttons (radius 30px); outlined `.boxed-btn` style (letter-spacing
      3px, hover invert).
- [ ] No ColorLib references in `apps/sitewise` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] All images picsum-seeded (`picsum.photos/seed/sitewise-N/w/h`); no
      ColorLib asset copied (banner.png, support_bg.png, launch.png,
      map.svg, news photos are references only).
- [ ] Implementer gate: `scripts/verify-app.sh sitewise` (typecheck + lint +
      100% coverage tests + build) and `npm run spec:validate`.
