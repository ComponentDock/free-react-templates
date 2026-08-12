# Colloquy (ColorLib "The Conference") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-colloquy` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "The Conference" — free event/conference website
  template (source: https://colorlib.com/wp/template/the-conference/). Listed
  in TEMPLATES.md under **Event** (line 511); duplicate row at line 1688
  (another category) — same template, ONE app only.
- **Preview REACHABLE (HTTP 200) — SLUG HAS NO HYPHEN:**
  `https://preview.colorlib.com/theme/theconference/`. The hyphenated URL
  (`/theme/the-conference/`) returns 404; products.js registers the slug as
  `theconference` (Event category). DOM fetched (`/tmp/theconference.html`,
  22,900 bytes) + stylesheet `styles/main_styles.css`
  (`/tmp/theconference-main.css`, 22,761 bytes) + responsive.css +
  TEMPLATES.md screenshot (`theconference-free-template.jpg`, 1200×946,
  viewed in browser).
- **Aesthetic:** professional conference design, white background, brand-blue
  `#4867c0` + light-blue `#329fec` gradient accents, Raleway (300–900).
  Screenshot: white header over hero (blue geometric crystal logo mark +
  "The Conference." wordmark + date under logo + social icons), nav strip
  with "Home" highlighted dark blue, full-width hero photo of a conference
  audience (hands raised) with white left-aligned date / big title /
  location / blurb and two blue rectangular buttons ("Buy Tickets Now!"
  darker, "Find out more" lighter), intro grid of 6 image cards below.
- **Buttons:** rectangular (no radius; only the 19px pricing info circle is
  50%). `.button` = 205×52, white 14px/500 text, `::before` animated
  blue-gradient fill (`#4867c0 → #329fec`, shimmer variant
  `#4867c0 → #329fec → #4867c0`). `.pricing_button` = 180×54 white bg
  `#4c4c4c` text (transparent + white on the middle plan).
- **Middle pricing plan quirk:** the source's middle plan level label is
  literally "recommended" (not a plan name like "Standard") and the price
  reads `$29 90`. Keep as-is or rename to "Standard" — either way, note the
  deviation in the PR.
- **Parallax:** hero/pricing/CTA use `data-parallax="scroll"` with
  `data-image-src` (images/index.jpg, pricing.jpg, cta_1.jpg). In React use
  a fixed/absolute background-image layer (no plugin needed) — picsum seeds
  screened for conference/audience/stage scenes.
- **Mobile menu:** full-screen fixed overlay (100vw/100vh) with blue
  gradient bg, centered column: menu logo, 6 menu items (3px gap), close bar
  (21×3px white), social title + icons. Hamburger hidden on desktop
  (`.hamburger { display: none }` base, shown in responsive.css).

## Structure (top → bottom, single page)

1. **Header** (`.header` absolute over hero, white bg) — `.header_top`:
   logo (`.logo_image` mark + `.logo_text` "Colloquy" 34px/500 `#4867c0`,
   line-height 0.94 + `.logo_sub` tagline "August 25, 2018 - Miami Marina
   Bay") + `.header_social` icons right (FB/Twitter/Google+/LinkedIn — inline
   SVG brand icons, lucide has none) + `.hamburger` (hidden desktop).
   `.header_nav` (border-top 1px `#e9eef2`): `.main_nav` links **Home /
   About Us / Speakers / Events / News / Contact**, `.header_extra`:
   `.header_search` icon (padding 10px) + `.header_button` "Buy Tickets
   Now!" (205×52 blue gradient, white text, margin-left 26px). Mobile:
   full-screen blue-gradient overlay menu (see above).
2. **Hero** (`.home`, 100vh) — parallax audience photo + white
   left-aligned: `.home_date` "August 25, 2018" (18px/700), `.home_title`
   "2018 Public Policy Conference" (60px/500, line-height 1.2),
   `.home_location` "Miami Marina Bay, FL" (36px/500), `.home_text` blurb
   (14px/500, line-height 2.14), `.home_buttons` (margin-top 58px): "Buy
   Tickets Now!" + "Find out more" (both 205×52 gradient, 10px gap).
3. **Intro** (`.intro`, white, padding 115px 144px 67px) — 6 `.intro_item`
   cards (`width: calc((100% - 60px) / 3)`, 3-col × 2 rows, 48px row gap,
   bg `#f3f7f9`): `.intro_image` photo + `.intro_body` (padding 39px left /
   33px top / 39px bottom): `.intro_title a` 24px/500 `#4c4c4c` +
   `.intro_subtitle` grey. Hover: `.intro_body::after` blue-gradient
   full-card overlay + title/subtitle white. Titles: **Conference Program,
   Supersessions, The Speakers, Explore Sessions, Directory, Speakers
   Schedule**.
4. **Events calendar** (`.calendar_container` bg `#f0f2f6`, padding 115px
   141px 111px) — `.calendar_title` "22 april events calendar" (18px/500
   uppercase + 27×25 lucide Calendar icon, margin-left 19px), 4
   `.calendar_item` rows (padding 55px 0 61px): `.calendar_item_time`
   (margin-left 74px: 30px/500 `#4c4c4c` time + 14px/500 "08 AM - 04 PM"),
   center icon, `.calendar_item_text` (margin-left 111px: 18px/500
   `#4c4c4c` "Auditorium", 16px `#888888` event name, 14px `#888888`
   "Speaker: Daniel Hill"): **14:00 Business 101 / 15:00 About technology /
   17:00 Conference calls / 20:00 Drinks and dinner**.
5. **Pricing** (`.pricing`, parallax bg, padding 87px 0 73px) —
   `.pricing_section_title` "Choose a plan" + 3 `.pricing_item` white cards
   (text-center, padding 57px 0 70px, `::after` 4px blue-gradient top bar;
   middle `.pricing_item_mid` full gradient + white text):
   `.pricing_level` 14px uppercase (**Beginner / recommended / Professional**),
   `.pricing_price` 60px (**Free / $29 90 / $59 90**), `.pricing_list`
   (margin-top 59px; 97px mid): **3 Conference Tickets, Vip Table Drinks,
   Special PASS, VIP Dinner**, `.pricing_info` 19px `#ff8416` circle
   (margin-top 34px), `.pricing_button` "Order plan" (180×54).
6. **CTA** (`.cta`, parallax bg, padding 105px 0 101px) — `.cta_title`
   "Get your tickets now!" (48px/400 white) + `.cta_button` "Find out more"
   (centered, margin-top 27px).
7. **Footer** (`.footer`, bg `#0c081d`) — `.footer_content` (padding 108px
   0 115px): `.footer_about` (logo + 14px text + `.footer_social`:
   `.footer_social_title` "Follow us on Social Media" + `.footer_social_list`
   icon links, margin-left 42px), two `.footer_links` columns (About Us /
   Services / Speakers / Event Dates and Information / Calendar / Logistics
   / Our Partners / Testimonials / Price Plans / News / Contact),
   `.footer_extra` (bg `#050210`): "Copyright © <year> All rights reserved |
   This template is made with ♥ by **Component Dock**" — Component Dock MUST
   link https://www.componentdock.com/ (replaces source's Colorlib credit).

## Implementation tasks (implementer)

- [ ] Scaffold `apps/colloquy` from the simplest existing app; package
      `@free-react-templates/colloquy`; `npm install` at root so the lockfile
      registers the workspace; CNAME `colloquy.free.componentdock.com`;
      homepage `https://colloquy.free.componentdock.com`
- [ ] `@theme` tokens (see spec checklist) + Raleway Google Fonts link
- [ ] Components: `Header` (top row + nav + search icon + Buy Tickets Now! + mobile overlay menu), `Hero` (100vh parallax + date/title/location/
      blurb + 2 buttons), `IntroCards` (6-card grid + gradient hover),
      `Calendar` (4 schedule rows), `Pricing` (3 plans, middle highlighted),
      `Cta`, `Footer` (+ copyright bar with Component Dock link)
- [ ] Screen picsum seeds for subject-critical photos (hero audience,
      intro card images, pricing/CTA parallax bands) — pixel-metric
      screening + browser verify, pin verified seeds in spec + PR
- [ ] TDD: Vitest + RTL, 100% coverage; `bash scripts/verify-app.sh colloquy`
- [ ] PR: source = ColorLib The Conference, preview
      `https://preview.colorlib.com/theme/theconference/` (NO hyphen), tokens,
      diffs (name, placeholder images, middle-plan label "recommended" kept
      or renamed, parallax implementation)
