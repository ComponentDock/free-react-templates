# Sitewise (ColorLib Hostza) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-sitewise` by an implementer stream.

## Design notes

- **Original:** ColorLib "Hostza" — free web hosting website template.
  Source: https://colorlib.com/wp/template/hostza/ (single `- [ ]` entry in
  TEMPLATES.md, hosting category).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/hostza/`
  (HTTP 200, ~40KB) + `css/style.css` (~154KB, unminified, SCSS source
  maps). Structure below is from the DOM + CSS tokens. Screenshot
  `hostza-free-template.jpg` (1200×946) confirms: transparent header over
  deep-purple hero; logo with green icon + white "Hostza" wordmark; centered
  white nav (Home, Package, Blog, Pages, Support, About, Contact); right
  "Log In" (user icon) + bright-green pill "Live Chat"; hero = purple
  gradient with mountain-silhouette illustration at the bottom (lighter
  purple/pink peaks + faint circle), small green eyebrow "The Best Domain &
  Hosting Provider In The Area", large white bold "Go Big With Your Next
  Domain", white domain input + purple "search" button; below, clean white
  "Choose your Hosting Plan" section. Modern sleek tech aesthetic:
  dark-purple top half + neon-green accents, white bottom half.
- **Structure observed (1:1):**
  1. `header.header-area` (absolute, transparent, z-index 9): `.logo-img`
     left (green icon + white wordmark); centered `.main-menu` white links
     (home, Package, blog, single-blog, pages, elements, Support, About,
     Contact — keep ~6: Home, Package, Blog, Support, About, Contact);
     right `.log_chat_area`: "log in" link + `.live_chat_btn` (green pill).
     Mobile: slicknav hamburger → repo-standard mobile menu.
  2. `div.slider_area` → `.single_slider.slider_bg_1.overlay2` (100vh, bg
     `img/banner/banner.png`, `.overlay2::before` = solid #2E004B overlay):
     centered `.slider_text` — green `<p>` eyebrow "The Best Domain &
     Hosting Provider In The Area", H3 "Go Big with your next Domain",
     `.find_dowmain_form` = white input `placeholder="Find your domain"`
     - purple "search" button. Screenshot adds the mountain-silhouette
       illustration band at the bottom.
  3. `div.prising_area`: `.section_title` "Choose your Hosting Plan" (42px,
     #2E004B, 400) + subtext; 4 `.single_prising` cards (1px #E0CCE6
     border, radius 5px, padding 29px 23px): `.prising_icon` (65px icon,
     colors: blue #0181F5 / lite_blue #886CFE / pink #FF87A3 / yellow
     #F3C306) + title (Share / VPS / Wordpress / Dedicated Hosting) +
     blurb + "Start from $2.5/m" + "Start Now".
  4. `div.core_features` (bordered top): left heading "Core Features" +
     `.featurest_tabs` (Features / Advanced Features pills); right
     `.tab-content` — 2 panes, each 2-col grid of `.single_features`
     rows (colored `.icon` + `.features_info` title + blurb): Free Domain
     for 1st Year, Free SSL Certificate, 30-Day Money-Back Guarantee, Spam
     Protection, 24h Dedicated Support (DOM repeats lorem 8× — write 5-8
     distinct blurbs).
  5. `div.dedicated_support.support_bg` (bg `img/support/support_bg.png`):
     `.support_info` headline + paragraph (lorem → paraphrase), `.get_started`:
     green pill `.boxed_btn_green` "Get Start Now" (radius 30px, bg
     #00D363) + `.phone_num` green "+10 267 367 678 2678" (paraphrase).
  6. `div.data_center_area`: `.section_title` "Our Data Centres" + subtext;
     `img/banner/map.svg` world map bg + 4 location cards (DOM repeats
     "Sydney, Australia" 4× — use 4 distinct cities: Sydney, London,
     Frankfurt, Singapore + blurbs).
  7. `div.faq_area`: `.section_title` "Frequently Ask Question"; accordion
     with 5 Q&A (Is WordPress hosting worth it? / What are the advantages
     of WordPress hosting over shared? / Will you transfer my site? / Why
     should I host with Sitewise? / How do I get started with Shared
     Hosting?).
  8. `div.latest_new_area`: `.section_title` "Latest News" + subtext; 3
     `.single_blog` cards (`img/news/1..3.png`): date "12 Jun, 2019",
     category "in Hosting tips", title "Commitment to dedicated Support",
     blurb.
  9. `div.lets_launch.launch_bg_1.overlay2` (bg `img/banner/launch.png` +
     #2E004B overlay): centered heading "Let's Launch your Website Now" +
     copy + "Live Chat" link + green "get start now" pill + green
     `.phone_num` "+10 783 467 3789" + email (paraphrase).
  10. `footer.footer` (bg #2E004B): logo + `.footer_text` blurb; "service"
      links (Hosting, Domain, Wordpress, Shared Hosting); "Navigation"
      links (Home, Rooms, About, News); Newsletter — "Sign Up" +
      "Subscribe newsletter to get updates" + email input + button;
      copyright bar → Component Dock link.
- **Design tokens:** Primary dark purple **#2E004B** (header/footer bg,
  hero overlay, headings, outlined-button text/border). Accent green
  **#00D363** (eyebrow, `.boxed_btn_green` bg, phone numbers, Live Chat).
  Orange **#FF5E13** (secondary accents/hovers). Icon colors: blue
  **#0181F5**, light purple **#886CFE**, pink **#FF87A3**, yellow
  **#F3C306**. Light bgs **#F9F9FF**/**#F0E9FF**, card border **#E0CCE6**,
  muted text **#919191**/**#999999**/**#888888**. Font: **Roboto** (Google
  Fonts). `.section_title h3`: 42px/400/52px #2E004B. `.boxed-btn`: white
  bg, #2E004B text, 1px solid #2E004B border, letter-spacing 3px, padding
  18px 44px, hover invert. `.boxed_btn_green`: radius 30px, bg #00D363,
  white 16px, padding 12px 30px, hover transparent + green border.
  `.overlay2::before`: full-cover #2E004B overlay over photo bgs.
- **Recreation decisions:** single-page landing with anchor nav (Home,
  Package, Blog, Support, About, Contact) + Log In + Live Chat CTA;
  transparent absolute header over hero; hero = purple gradient + SVG
  mountain silhouettes (lighter purple/pink + faint circle) + green eyebrow
  - white headline + domain search (input + purple button, non-functional
    form is fine); pricing 4-up with colored lucide icons; Core Features
    tabs (2 tabs, feature rows); support band over picsum photo; Data Centres
    (map graphic + 4 city cards); FAQ accordion (5 items, one expanded);
    3 news cards; CTA band over picsum photo with dark overlay; dark purple
    footer + newsletter; picsum seeds `sitewise-N`; Roboto via `<link>`;
    lucide-react icons (probe exports: Globe, MessageCircle, Server, Cloud,
    Shield, CreditCard, HelpCircle, MapPin, User, Phone — brand icons like
    Facebook/Twitter are NOT in lucide-react, use inline SVG if needed);
    copy paraphrased into real hosting copy (no lorem).

## Tasks / todo outline

1. Scaffold `apps/sitewise` (copy simplest existing app; package
   `@free-react-templates/sitewise`; `npm install` at root to register the
   workspace in package-lock.json; `injectUiSource()` in vite.config.ts;
   MemoryStorage polyfill in src/test/setup.ts if jsdom 30 lacks
   localStorage).
2. `src/index.css`: `@theme` tokens — brand purple #2e004b, green #00d363,
   orange #ff5e13, icon colors #0181f5/#886cfe/#ff87a3/#f3c306, light bgs
   #f9f9ff/#f0e9ff, border #e0cce6, muted #919191/#999999, font Roboto,
   green pill radius 30px.
3. `Header.tsx` (absolute/transparent over hero): "Sitewise" logo (bold
   wordmark + lucide Globe), white nav (Home, Package, Blog, Support,
   About, Contact), Log In link (user icon), green pill "Live Chat"
   (chat icon), mobile hamburger menu.
4. `Hero.tsx` (100vh, purple gradient + SVG mountain silhouettes + faint
   circle): green eyebrow, white headline "Go Big with your next Domain",
   domain search form (input + purple "search" button).
5. `Pricing.tsx`: "Choose your Hosting Plan" + subtext + 4 cards (Share /
   VPS / Wordpress / Dedicated Hosting; colored icon, blurb, "Start from
   $2.5/m", "Start Now").
6. `CoreFeatures.tsx`: "Core Features" + Features / Advanced Features tabs
   - feature rows (colored icons: Free Domain, Free SSL, Money-Back
     Guarantee, Spam Protection, 24h Support) — tab switch state.
7. `DedicatedSupport.tsx`: photo-band section + support headline +
   paragraph + green "Get Start Now" pill + green phone number.
8. `DataCentres.tsx`: "Our Data Centres" + map graphic + 4 location cards
   (Sydney, London, Frankfurt, Singapore).
9. `Faq.tsx`: "Frequently Ask Question" + 5-question accordion (expand/
   collapse, one open by default).
10. `LatestNews.tsx`: "Latest News" + 3 blog cards (date, category, title,
    blurb).
11. `CallToAction.tsx`: photo-band "Let's Launch your Website Now" + copy +
    Live Chat link + green "get start now" pill + green phone + email.
12. `Footer.tsx` (bg #2e004b): logo + blurb, service + navigation link
    columns, Newsletter form (email input + subscribe button), copyright
    bar with Component Dock link.
13. `App.tsx` composition (order 1:1), document title "Sitewise — Web
    Hosting Template".
14. Tests per component (scenario-style), 100% coverage; run
    `npm run verify:app -- sitewise`.
15. Commit `feat: sitewise — web hosting template (ColorLib Hostza)`, push
    `feat/template-sitewise`, open + immediately squash-merge PR,
    re-dispatch `Deploy to Surge.sh -f app=sitewise` if needed, mark `[x]`
    in TEMPLATES.md with surge URL, `npm run readme:status`.
