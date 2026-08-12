# Convene (ColorLib "Eventure") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-convene` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Eventure" — event/conference template
  (source: https://colorlib.com/wp/template/eventure/). Listed in TEMPLATES.md
  (Bootstrap section, line 389; duplicate at line 1681 in the Event section —
  mark EVERY copy `[x]` when done).
- **Preview URL:** https://preview.colorlib.com/theme/eventure/ (title
  "Eventure Multi"). Fetched: `/tmp/eventure-prep/preview.html` (27 KB),
  `/tmp/eventure-prep/style.css` (72 KB). Screenshot
  `eventure-free-template.jpg` (1200×946, viewed in browser). Preview DOM and
  screenshot agree — transparent navbar over a dark crowd-photo hero, white
  countdown card overlapping the hero bottom, indigo→purple gradient buttons.
  The screenshot only shows header/hero/countdown; welcome/speakers/schedule/
  venue/pricing/footer come from the DOM.
- **Demo brand in the preview is "Eventure"** → rename to **Convene**
  (conference = a convened gathering; text logo "CONVENE" recreated as styled
  text, never the copied `img/logo.png`).
- **Visual design:** light conference landing page, indigo→purple gradient
  brand (`#2c28b1 → #9b5cf6`). Navbar transparent over the hero, gradient
  (`#141da2 → #9b5cf6`) when scrolled, white uppercase 12px links + gradient
  "Get Tickets". Hero: full-bleed crowd photo + dark overlay, centered
  uppercase "International Digital Business Event" + ghost "View More
  Details" (rgba(255,255,255,0.1) bg, 1px #7a8186 border, 5px radius).
  Countdown: white card (max-width 944px, margin-top -90px overlapping the
  hero, radius 5px) — "Next Event will Start in" + days/hours/minutes/
  seconds boxes (Heebo bold 36px #222222). Welcome: 2 columns, 36px uppercase
  h3 + 2 paragraphs + gradient CTA. Speakers: `#f9f9ff` bg, 4 photo cards,
  gradient-text names, hover social overlays (inline SVG brand icons).
  Schedule: Day 01/02/03 tabs (gradient active) + 5 media rows per day
  (thumb, 09.00 am, session title, "Speech by: …"). Venue: map panel
  (Google Map in the source → static placeholder image; source coords
  40.701083, -74.1522848) + white box (max-width 457px, padding 92px) with 3
  icon rows (location / dates / email). Pricing: `#fafcff` bg, 4 tier cards
  (Basic £39 → Enterprise £99, /mo suffix, 5 feature lines, gradient
  "Get Started" with rounded bottom 10px). Footer: `#04091e` — Top Products
  links, Newsletter (square input + gradient Subscribe), Instagram Feed grid,
  copyright bar (ColorLib credit → Component Dock link).
- **Fonts:** `"Roboto", sans-serif` (body + nav, 300/400/500) and
  `"Heebo", sans-serif` (headings, timer numbers, footer titles, 500/700) via
  Google Fonts `<link>` in `index.html`.
- **Structure (1:1 from the preview DOM):**
  1. Navbar `div.main_menu > nav.navbar` — transparent; `container.box_1620`:
     `a.navbar-brand.logo_h` (left, image → text "CONVENE") ·
     `button.navbar-toggler` (3 `.icon-bar` spans) · `ul.nav.navbar-nav
.menu_nav.ml-auto`: Home (`.active`) · About · Speakers · Pages ▾
     (Schedule, Venue, Pricing, Elements) · Blog ▾ (Blog, Blog Details) ·
     Contact · gradient `a.tickets_btn` "Get Tickets" (padding 0 28px).
     Nav links Roboto 500 12px uppercase white, line-height 80px, ~45px
     gaps; scrolled: gradient `#141da2 → #9b5cf6`.
  2. Hero `section.home_banner_area` — `min-height: 900px`, full-bleed
     `img/banner/home-banner.jpg` (crowd), centered `.banner_content`:
     `h2` "International Digital<br>Business Event" (uppercase white bold) ·
     `p` lorem · ghost `a.banner_btn` "View More Details".
  3. Countdown `section.event_time_area` (padding-bottom 120px) —
     `.event_time_inner` (white, max-width 944px, margin auto, `margin-top:
-90px`, radius 5px, padding 45px 0 50px): left `.event_text`
     (padding-left 65px): `h3` "Next Event will Start in" + `p`; right
     `.timer_inner`: `#timer.timer` — four `.timer__section` (days/hours/
     minutes/seconds): `.timer__number` (JS-filled) + `.timer__label`.
     Countdown to a fixed future target date (deterministic for tests).
  4. Welcome `section.welcome_area.pad_btm` — `.welcome_inner.row`:
     `col-lg-5 .welcome_img` (photo) · `col-lg-6 offset-lg-1 .welcome_text`:
     `h3` "Welcome to Convene" (36px uppercase) · 2 `p` · gradient
     `a.main_btn` "View More Details" (padding 0 35px).
  5. Speakers `section.team_area.p_120` — bg `#f9f9ff`; `.main_title`:
     `h2` "Meet Head Speakers" + `p` sub; 4 `col-lg-3 col-sm-6 .team_item`:
     `.team_img` photo + hover social overlay (twitter/facebook/linkedin
     inline SVGs) · `.team_name` (margin-top 20px): `h4` name (gradient
     text `#2c28b1 → #9b5cf6` 70%) + `p` role (`#777777`). Paraphrase names/
     roles ("Ethel Davis — Managing Director (Sales)" → e.g. "Ethan Cole —
     Managing Director (Sales)").
  6. Schedule `section.event_schedule_area.p_120` — `.main_title`:
     `h2` "Event Schedule" + `p` sub; tabs Day 01/02/03 (active = gradient);
     each pane ~5 `.media` rows: `div.d-flex` thumb (`img/schedule-1.jpg`)
     - `.media-body`: `h5` "09.00 am" · `h4` "Opening Ceremony" ·
       `p` "Speech by: Mark weins". Paraphrase session titles, keep row shape.
  7. Venue `section.home_map_area` — `div#mapBox2.mapBox2` (Google Map,
     data-lat 40.701083 / data-lon -74.1522848 → replace with map-style
     placeholder image) + `.home_details > .container > .box_home_details`
     (white, max-width 457px, float right, padding 92px): 3 `.media` rows —
     `lnr-home` + `h4` "California, United States" + `p` "Santa monica
     bullevard" · `lnr-clock` + `h4` "Monday to Wednesday" + `p` "17-19
     June, 218" · `lnr-envelope` + `h4` "support@colorlib.com" + `p` "Send
     us your query anytime!" (use a neutral placeholder email).
  8. Pricing `section.price_area.p_120` — bg `#fafcff`; `.main_title`:
     `h2` "Ticket Pricing" + `p` sub; 4 `col-lg-3 col-sm-6.p0 .price_item`
     (`border-top: 2px solid #fff`): `.price_text` (padding 75px 0 75px
     45px): `h3` tier (Basic/Starter/Business/Enterprise) · `h5` tagline
     (Individuals/Freelancers · Small Companies · Medium Companies · Large
     Companies) · `h2` `£39`/`£59`/`£79`/`£99` + `span /mo` · `ul.list` 5
     `li a` features (hosting-plan copy in the source — paraphrase to
     ticket features, same 5-line shape) + gradient `a.price_btn` "Get
     Started" (`border-radius: 0 0 10px 10px`, line-height 50px).
  9. Footer `footer.footer-area.p_120` — bg `#04091e`, white text: (1)
     `.tp_widgets`: `.footer_title` "Top Products" + 4 links (Managed
     Website · Manage Reputation · Power Tools · Marketing Service); (2)
     `.news_widgets`: "Newsletter" + "You can trust us. we only send promo
     offers, not a single spam." + `.input-group` email input + gradient
     "Subscribe" (`.sub-btn`); (3) `.instafeed`: "Instagram Feed" + square
     image grid. `.footer-bottom` copyright: "© 2026 Convene — All rights
     reserved | This template is made with ❤ by Component Dock" linking
     https://www.componentdock.com/ (mandatory).
- **Note:** inner pages exist in the original (about-us / speakers /
  schedule / venue / price / elements / blog / single-blog / contact) — NOT
  required; single index page only. Nav links become scroll anchors or dead
  anchors `#`; dropdowns may be static. Hero is static (no slider). Logo is
  an image asset — recreate as text. Google Map → static placeholder image.

## Implementation tasks (for the implementer stream)

1. `git fetch origin`; confirm `openspec/specs/template-convene/spec.md`
   exists on main; claim with a `[~]` mark on TEMPLATES.md lines 389 AND 1681.
2. Scaffold `apps/convene` from the simplest existing app (copy pattern,
   rename package to `@free-react-templates/convene`); register the
   workspace (`npm install` at root so `package-lock.json` updates; verify
   with `grep -c "free-react-templates/convene" package-lock.json`); keep
   `injectUiSource()` in `vite.config.ts`.
3. TDD: write tests first (Vitest + Testing Library, 100% coverage)
   mirroring the spec's Gherkin scenarios, then implement:
   - `src/components/Navbar.tsx` — transparent → gradient on scroll, text
     logo "CONVENE", white uppercase links (Home active · About · Speakers ·
     Pages ▾ · Blog ▾ · Contact), gradient "Get Tickets" CTA, Pages/Blog
     dropdowns, hamburger + `aria-expanded` on mobile.
   - `src/components/Hero.tsx` — full-bleed crowd photo (dark overlay) +
     centered uppercase headline + ghost "View More Details".
   - `src/components/Countdown.tsx` — white card overlapping the hero,
     "Next Event will Start in" + days/hours/minutes/seconds live timer to a
     fixed future date (tests use fake timers inside `act()`).
   - `src/components/Welcome.tsx` — photo + uppercase heading + 2 paragraphs
     - gradient CTA.
   - `src/components/Speakers.tsx` — `#f9f9ff` section, 4 photo cards,
     gradient-text names, roles, hover social overlays (inline SVG brand
     icons).
   - `src/components/Schedule.tsx` — Day 01/02/03 tabs (gradient active) +
     per-day session rows (thumb, time, title, "Speech by: …").
   - `src/components/Venue.tsx` — map placeholder image + white info box with
     3 icon rows.
   - `src/components/Pricing.tsx` — 4 tier cards (£39–£99, /mo, 5 features,
     gradient "Get Started" with rounded bottom).
   - `src/components/NewsletterForm.tsx` — email validation, success +
     reset, error state (used in footer).
   - `src/components/Footer.tsx` — 3 columns (Top Products, Newsletter,
     Instagram Feed grid), copyright bar with Component Dock link.
   - `src/App.tsx` — compose in order; `src/index.css` — `@theme` tokens
     (brand gradient as CSS vars: `#2c28b1`, `#9b5cf6`, `#141da2`, `#bc2bff`,
     `#7249fb`, `#04091e`, `#f9f9ff`, `#fafcff`, `#222222`, `#777777`).
4. Images: `https://picsum.photos/seed/convene-<n>/<w>/<h>` (hero crowd,
   welcome photo, 4 speaker portraits, schedule thumbs, map placeholder,
   instagram tiles); SCREEN the hero seed for a crowd/dark subject before
   pinning (picsum seeds are arbitrary — use the seed-screening method from
   the replication skill); icons from `lucide-react` (menu, x, chevron-down,
   home/clock/mail for venue rows, send) + inline SVG for the social brand
   icons.
5. Verification: `npm run spec:validate`; `scripts/verify-app.sh convene`
   (typecheck + lint + 100% coverage + build). Never touch shared files
   (package-lock only via `npm install`).
6. PR: branch `feat/template-convene`, PR to main, description must state
   source (ColorLib "Eventure"), preview URL, design tokens, what differs;
   merge immediately (`gh pr merge --squash --delete-branch`).
7. After merge: pull --rebase; mark TEMPLATES.md lines 389 AND 1681 `[x]`,
   add surge URL `https://convene.free.componentdock.com` + homepage;
   `npm run readme:status`; push.
