# Uptime (ColorLib Hostza) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-uptime` by an implementer stream.

## Design notes

- **Original:** ColorLib "Hostza" — free web hosting website template.
  Source: https://colorlib.com/wp/template/hostza/.
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/hostza/`
  (HTTP 200, 40.8KB) + stylesheet `css/style.css` (154KB, SCSS-compiled,
  `@import` Roboto 300–900 from Google Fonts). Full rendered DOM extracted;
  structure below is from the DOM + CSS tokens. Screenshot
  `hostza-free-template.jpg` (1200×946) confirms: dark-purple hero with
  low-poly mountain silhouette + faint circle, small green tagline, large
  white headline "Go Big with your next Domain", white domain input + purple
  search button; header = green logo icon + "Hostza", centered nav with green
  underline on active Home, "log in" link, green pill "Live Chat" button;
  white lower sections with dark-purple headings; flat hosting aesthetic with
  deep purple / bright green / pastel accents.
- **Structure observed (1:1):**
  1. `header` → `main-header-area` (padding 0 150px; sticky: bg #2E004B,
     padding 10px 150px, shadow 0 3px 16px rgba(0,0,0,.1), slide-down):
     `logo-img` left; `main-menu` nav — home (active), Package, blog ▾
     (blog, single-blog), pages ▾ (elements), Support, About, Contact
     (white 16px/600); right `log_chat_area`: `login` link (user icon +
     "log in", opens Sign in popup) + `live_chat_btn` boxed_btn_green
     "Live Chat"; `mobile_menu` (slicknav hamburger).
  2. `slider_area` → `single_slider slider_bg_1 overlay2` (100vh,
     banner.png + #2E004B 60% overlay): `slider_text` — p "The Best
     Domain & Hosting Provider In The Area" (18px #00D363), h3 "Go Big
     with your next Domain" (60px/400 white, lh 70px), `find_dowmain_form`:
     white input 70% (60px, radius 3px left, placeholder "Find your
     domain") + button "search" 30% (60px, bg #670080, white, radius 3px
     right).
  3. `prising_area` (pt 200 / pb 170): `section_title` h3 "Choose your
     Hosting Plan" (42px/400 #2E004B) + p 16px #919191; 4 `single_prising`
     (col-xl-3): card border 1px #E0CCE6 radius 5px padding 29px 23px;
     `prising_icon` 65px — blue #0181F5 / lite_blue #886CFE / pink
     #FF87A3 / yellow #F3C306; h3 24px/500 #2E004B (Share Hosting / VPS
     Hosting / Wordpress Hosting / Dedicated Hosting); `prise` "Start from
     $2.5/m" (span 24px/500 #2E004B); `boxed_btn_green2` "Start Now".
  4. `core_features` (pb 150): heading "Core Features" left + tabs right
     ("Features" active / "Advanced Features"; 16px #919191, active
     #2E004B + green ::before underline; ml 17px, pb 37px); each tab pane =
     2x2 grid `single_features` (mb 50): `icon` 82px circle (default bg
     #EFF7FF color #0181F5; .blue #390055; .pink #FF87A3 on #FFF7F9;
     .yellow #F3C306 on #FFFBEF; hover white on #886CFE) + h4 20px #1F1F1F
     - p 16px/28. Features (both tabs): Free Domain for 1st Year, Free SSL
       Certificate, 30-Day Money-Back Guarantee, Spam Protection.
  5. `dedicated_support support_bg` (pt/pb 200, support_bg.png cover):
     h3 "24h Dedicated Support" (42px/500 white) + p + `get_started`:
     boxed_btn_green "Get Start Now" (padding 12px 45px, mr 20px) +
     `phone_num` "+10 267 367 678 2678" (16px #00D363).
  6. `data_center_area` (pt 200): `section_title` "Our Data Centres" +
     subtitle; `location`: `pulse_group` 4 spans (10px circles #670080) +
     map.svg; `address_on_hover` cards (map-marker icon + h3 18px #1F1F1F
     "Sydney, Australia" + p).
  7. `faq_area` (pt 190): `accordion_heading` h3 "Frequently Ask Question";
     `#accordion` 5 cards — button 24px #2E004B + flaticon-info: "Is
     WordPress hosting worth it?", "What are the advantages of WordPress
     hosting over shared?", "Will you transfer my site?", "Why should I
     host with Hostza?", "How do I get started"; collapsible card-body
     lorem.
  8. `latest_new_area` (pt 200 / pb 170): `section_title` "Latest News" +
     subtitle; 3 `single_news` (col-xl-4): `thumb` img (hover scale 1.2),
     `news_meta` "12 Jun, 2019 in Hosting tips" (12px), h3 24px #2E004B
     "Commitment to dedicated Support", `news_info` p.
  9. `lets_launch launch_bg_1 overlay2` (pt/pb 180, launch.png + #2E004B
     60% overlay): h3 "Let's Launch your Website Now" + p + `chat`:
     boxed_btn_green (chat icon + "Live Chat") + boxed_btn_green2 "get
     start now".
  10. `footer` (bg #2E004B): `footer_top` (pt 145 / pb 129): 4 widgets —
      (a) logo + `footer_text` "+10 783 467 3789" / "hostza@support.com"
      (16px #B2B2B2) + `socail_links` (facebook-square, twitter,
      instagram); (b) `footer_title` "service" (22px/400 white, mb 40) +
      Hosting / Domain / Wordpress / Shared Hosting; (c) "Navigation" +
      Home / Rooms / About / News; (d) "Newsletter" + `newsletter_form`
      (white input 45px + green "Sign Up" button absolute right, white
      14px) + `newsletter_text` "Subscribe newsletter to get updates"
      (16px #BABABA); `copy-right_text`: `footer_border` (white 20% top
      border) + `copy_right` 16px #919191 "Copyright © All rights
      reserved | made with by Colorlib" → repo-standard credit.
  11. Popups (`white-popup-block mfp-hide`): `popup_box` (white, 558px,
      padding 60px 40px, radius 5px) — `#test-form` "Sign in" (email +
      password + green "Sign in") and `#test-form2` "Resistration" (email +
      password + confirm password + green "Sign Up"), each with centered
      form logo.
- **Design tokens:** Font **Roboto** 300–900 (Google Fonts `<link>`). Brand
  purple **#2E004B** (footer, sticky header, headings, plan titles, prise
  span, FAQ text, news h3, tab active, overlays 60%). Green **#00D363**
  (filled buttons, outline border/text, tagline, phone numbers, newsletter
  button, tab underline). Search purple **#670080** (search button, map
  dots). Plan icons **#0181F5/#886CFE/#FF87A3/#F3C306**; icon chips
  **#EFF7FF** (default, icon #0181F5 / .blue #390055), #FFF7F9, #FFFBEF;
  hover white-on-#886CFE. Neutrals **#919191** (subtitles, tabs, copyright),
  **#B2B2B2** (footer text), **#BABABA** (newsletter note), **#1F1F1F**
  (feature/news/address titles), **#E0CCE6** (plan border), **#F9F9FF**
  (light lavender tint). Buttons: `boxed_btn_green` filled (bg #00D363,
  white 16px, padding 12px 30px, radius 30px; hover transparent + green
  border/text), `boxed_btn_green2` outline (green border/text; hover filled
  green); domain search split bar (white 70% input + #670080 30% button,
  60px, radius 3px); newsletter 45px input + absolute green button. Headings:
  section h3 42px/400; hero 60px/400 lh 70; support 42px/500; plan/news/FAQ
  24px; feature h4 20px; footer_title 22px; prise span 24px/500. Spacing:
  hero 100vh; prising 200/170; core pb 150; support 200/200; data pt 200;
  faq pt 190; news 200/170; launch 180/180; footer_top 145/129.
- **Recreation decisions:** repo-standard navbar (transparent over hero →
  solid #2E004B sticky + shadow) + "Uptime" logo (green accent icon +
  wordmark) + nav (home active, Package, blog/pages dropdowns, Support,
  About, Contact) + "log in" link opening Sign in modal + green "Live Chat"
  pill + mobile hamburger menu; hero dark-purple section (static
  gradient/photo, no parallax lib) + green tagline + headline + domain
  search (white input + purple button, submit without reload); 4 hosting
  plan cards (4-up grid, colored lucide icon, title, text, "Start from
  $2.5/m", outline green "Start Now"); Core Features with Features/Advanced
  Features tabs (green underline active) + 2x2 grid of circle-icon features
  (hover → white on #886CFE); 24h Dedicated Support band (bg image) with
  green "Get Start Now" + phone; Our Data Centres inline SVG world map + 4
  pulsing dots + hover address cards; FAQ accordion (5 collapsible
  questions); Latest News (3 cards, thumbnail zoom hover); Launch CTA band
  (bg image + overlay) with Live Chat + get start now; dark footer #2E004B
  (contact + social, service links, navigation links, newsletter form +
  Sign Up, copyright bar); Sign in / Registration modals; picsum seeds
  `uptime-N`; Roboto via `<link>`; lucide-react icons.

## Tasks / todo outline

1. Scaffold `apps/uptime` (copy simplest existing app; package
   `@free-react-templates/uptime`; `npm install` at root to register the
   workspace in package-lock.json; `injectUiSource()` in vite.config.ts).
2. `src/index.css`: `@theme` tokens — brand purple #2E004B, green #00D363,
   search purple #670080, icon colors #0181F5/#886CFE/#FF87A3/#F3C306, chip
   bgs #EFF7FF/#FFF7F9/#FFFBEF, neutrals #919191/#B2B2B2/#BABABA/#1F1F1F,
   font Roboto (300–900), pill radii (30px buttons, 5px cards).
3. `Header.tsx` (transparent over hero → solid #2E004B sticky): "Uptime"
   logo, nav (home active, Package, blog/pages dropdowns, Support, About,
   Contact), "log in" link (opens Sign in modal), green "Live Chat" pill,
   mobile hamburger menu.
4. `Hero.tsx` (dark-purple banner bg + overlay): green tagline, "Go Big
   with your next Domain", domain search form (input + purple "search"
   button, submit without reload).
5. `HostingPlans.tsx`: "Choose your Hosting Plan" + 4 plan cards (colored
   icon, title, text, "Start from $2.5/m", outline green "Start Now").
6. `CoreFeatures.tsx`: "Core Features" heading + Features/Advanced Features
   tabs (green underline) + 2x2 feature grid (circle icon chips + title +
   text, hover → white on #886CFE).
7. `DedicatedSupport.tsx`: bg-image band, "24h Dedicated Support" + green
   "Get Start Now" + green phone number.
8. `DataCentres.tsx`: "Our Data Centres" + inline SVG world map + 4 pulsing
   dots + hover address cards (Sydney, Australia).
9. `Faq.tsx`: "Frequently Ask Question" accordion — 5 questions,
   expand/collapse with chevron/plus indicator.
10. `LatestNews.tsx`: "Latest News" + 3 cards (thumbnail zoom hover, meta,
    title, excerpt).
11. `LaunchCta.tsx`: bg-image band + overlay, "Let's Launch your Website
    Now" + Live Chat + get start now buttons.
12. `Footer.tsx` (dark #2E004B): contact + social icons, "service" and
    "Navigation" link columns, newsletter form (input + green "Sign Up"),
    copyright bar with repo-standard credit.
13. `AuthModals.tsx`: Sign in + Registration modals (email/password(+confirm)
    - green submit), opened from login link, closable.
14. `App.tsx` composition (order 1:1), document title "Uptime — Web
    Hosting".
15. Tests per component (scenario-style), 100% coverage; run
    `npm run verify:app -- uptime`.
16. Commit `feat: uptime — web hosting template (ColorLib Hostza)`, push
    `feat/template-uptime`, open + immediately squash-merge PR,
    re-dispatch `Deploy to Surge.sh -f app=uptime` if needed, mark `[x]`
    in TEMPLATES.md with surge URL, `npm run readme:status`.
