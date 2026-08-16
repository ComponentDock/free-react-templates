# Gather (ColorLib Evento) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-gather`.

## Design notes (replication findings)

- **Original:** ColorLib "Evento" — conference / event website template
  (source: https://colorlib.com/wp/template/evento/). TEMPLATES.md has
  **THREE copies** of this item (lines 1003 — Business, 1678 — Event,
  2048 — Landing Page; mark ALL THREE `[x]` when done). Do NOT confuse with
  eventotemplate / eventcon / eventz / eventalk / eventor (→ podium).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/evento/
  (HTTP 200, ~33.6 KB, title "Evento - Event Html Template"). Stylesheets:
  `assets/css/main.css` (37.4 KB) + bootstrap.min / font-awesome / et-line /
  ionicons / owl.carousel / owl.theme / animate. Google Fonts `@import` in
  main.css: **Montserrat** (400 / 500 / 700 / 900) — used for headings AND
  body. jQuery + bootstrap + owl.carousel + JS countdown drive the loader,
  hero cover slider (3 slides, numbered dots), countdown timer, mobile menu.
- **Screenshot:** `evento-free-template.jpg` — verified live in a browser
  (vision, full page): dark nav with script white "Evento" wordmark + red
  dot and small uppercase links (Home / Speakers / Events / News / Contact
  - search); hero = dark concert-crowd photo (purple/blue stage light) with
    hand-drawn red + cyan doodles, white "PREPARE YOURSELF FOR THE" over huge
    RED "CONFERENCE", white date line, red pill "BUY TICKETS NOW", numbered
    white pill (1·2·3) pagination at hero bottom; below: stark WHITE 4-column
    info bar (Date / Location / Speakers / Tickets); then DARK countdown
    section; dark footer.
- **Visual design:** energetic dark-mode music/tech-conference aesthetic —
  brand red `#f50136` on white/dark, near-black `#18181c` accents,
  light-gray `#f0f2f6` panels, dark-purple footer family, Montserrat
  everywhere, ALL buttons pill-shaped (radius 50px). Recreation brands
  itself **Gather** (script wordmark + red dot).

## Design tokens (from assets/css/main.css + live computed styles)

| Token          | Value                                                                                                                                                                                                        | Where                                                                                                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Brand red      | `#f50136`                                                                                                                                                                                                    | hero XL "conference" (90px 900 uppercase), `.btn-primary`, countdown numbers (48px 600), `.price_highlight` ribbon, `.event_title` thead bg, 30px×3px section-title markers, nav hover, active cover dot border |
| Near-black     | `#18181c`                                                                                                                                                                                                    | `.btn-primary:hover`, `.price_tag` (48px 700), speaker `.info_box` strip, sticky header bg                                                                                                                      |
| White          | `#ffffff`                                                                                                                                                                                                    | hero cover-title/date, button text, nav links, event thead text, footer titles                                                                                                                                  |
| Body gray      | `#838383`                                                                                                                                                                                                    | secondary/body text                                                                                                                                                                                             |
| Light gray     | `#f0f2f6`                                                                                                                                                                                                    | `.bg-gray` (partners), `.price_box` bg                                                                                                                                                                          |
| Hairline       | `#e2e6f1`                                                                                                                                                                                                    | light borders/dividers                                                                                                                                                                                          |
| Footer purples | `#0b031b` (footer), `#1f1039` (newsletter input), `#080113` (copyright bar)                                                                                                                                  | `footer`, `.newsletter_form .form-control`, `.copyright_footer`                                                                                                                                                 |
| Overlay        | `rgba(0,0,0,0.4)`                                                                                                                                                                                            | `.bg-img .overlay_dark` (countdown, tickets bands)                                                                                                                                                              |
| Fonts          | **'Montserrat', sans-serif** (400/500/700/900) headings AND body                                                                                                                                             | Google Fonts `<link>`s in index.html                                                                                                                                                                            |
| Buttons        | pill `border-radius: 50px`, bg `#f50136`, 1px `#f50136` border, white text, 300ms ease; hover → `#18181c` bg/border                                                                                          | hero "Buy Tickets Now", pricing "Purchase", events "Read More", tickets "buy now", newsletter "SUBSCRIBE" (btn-block)                                                                                           |
| Section titles | uppercase 36px + 30px×3px `#f50136` top marker (`::before` left); footer titles 18px                                                                                                                         | `.section_title .title`, `footer .footer_title`                                                                                                                                                                 |
| Hero XL        | `.cover-title` white 500; `.cover-xl-text` uppercase 90px 900 lh 1.1 `#f50136`; `.cover-date` white 18px uppercase                                                                                           | hero slides                                                                                                                                                                                                     |
| Section rhythm | `pt100 pb100`; countdown `bg-img pt70 pb70`; tickets `bg-img pt100 pb100`; features `mt30`; title `mb50`                                                                                                     | all sections                                                                                                                                                                                                    |
| Header         | transparent over hero (margin-top 20px); sticky → `#18181c` + `0 0 42px rgba(0,0,0,0.08)` shadow; links 12px uppercase ls 1px white hover `#f50136`; search 30px                                             | `header`, `header.sticky_header`, `header ul.menu li a.nav-link`                                                                                                                                                |
| Icons (source) | ionicons / et-line / font-awesome → lucide-react: `Calendar` `MapPin` `Users` `Ticket` (info bar), `Mic` `Rocket` `Megaphone` `Clock` (about), `Search` (nav), `Heart` (copyright), brand socials inline SVG | info boxes, about features, nav, footer socials                                                                                                                                                                 |

## Structure (1:1, section order)

1. Loader — `div.loader > .loader-outter > .loader-inner` (page-load
   spinner; optional in recreation, or a brief fade).
2. Header `header.header.navbar.fixed-top.navbar-expand-md` — transparent
   over hero, margin-top 20px; `.container`: left `a.navbar-brand.logo` —
   `img.logo.png` (160px max, WHITE script wordmark "Evento" with red dot →
   recreate as script-ish white text wordmark "Gather" + red dot); right
   `div.collapse.navbar-collapse` `ul.nav.navbar-nav.menu`: FIVE links
   (Home / Speakers / Events / News / Contact — 12px uppercase, ls 1px,
   white, padding 20px 12px, hover `#f50136`) + `li.search_btn > a` (search
   icon, 30px); mobile: `button.navbar-toggler` (hamburger) → slide-down
   menu; on scroll adds `sticky_header` → bg `#18181c`, padding 5px, shadow
   `0 0 42px rgba(0,0,0,0.08)`.
3. Hero `section#home.home-cover` — `div.cover_slider.owl-carousel.owl-theme`
   with THREE `div.cover_item` (bg image `slider.png` — crowd/concert photo):
   `div.slider_content` (positions: center / left / center) →
   `div.slider-content-inner > div.container`: `h2.cover-title`
   **"Prepare yourself for the"** (white 500) + `strong.cover-xl-text`
   **"conference"** (uppercase 90px 900 `#f50136`) + `p.cover-date`
   "12-14 February 2018 - Los Angeles, CA." (white 18px uppercase) +
   `a.btn.btn-primary.btn-rounded` **"Buy Tickets Now"** (pill). Below:
   `div.cover_nav > ul.cover_dots` — THREE numbered dots (1 / 2 / 3), active
   gets 2px `#f50136` border.
4. Info boxes `section.pt100.pb100` — `div.container > div.row`:
   FOUR `div.col-6.col-md-3` `div.icon_box_two`: `i` (56px ionicons:
   `ion-ios-calendar-outline` / `ion-ios-location-outline` /
   `ion-ios-person-outline` / ticket icon) + `div.content`:
   `h5.box_title` uppercase 500 (DATE / location / speakers / tikets) +
   `p` ("12-14 february 2018" / "Los Angeles, CA." / "Natalie James +
   guests" / "$65 early bird").
5. Countdown `section.bg-img.pt70.pb70` (bg `bg-img.png` +
   `div.overlay_dark` rgba(0,0,0,0.4)) — `div.col-12.col-md-10`:
   `h4.mb30.text-center.color-light` **"Counter until the big event"** +
   `div.countdown` (JS): FOUR `.counter_box` — `span/.counter` number
   (48px 600 `#f50136`) + `h5` label (500) [days / hours / minutes /
   seconds].
6. About `section.pt100.pb100` — `div.section_title.mb50` `h3.title`
   **"About the event"** (36px uppercase + red marker); `div.row.justify-content-center`:
   TWO `div.col-12.col-md-6` intro paragraphs; `div.row.justify-content-center.mt30`:
   FOUR `div.col-12.col-md-6.col-lg-3` `div.icon_box_one`: `i` (lnr:
   `lnr-mic` / `lnr-rocket` / `lnr-bullhorn` / `lnr-clock`) +
   `div.content` `h4`: **"9 Speakers"** / **"8 hrs Marathon"** /
   **"Live Broadcast"** / **"Early Bird"** + `p` blurb.
7. Speakers `section.pb100` — `div.section_title.mb50` `h3.title`
   **"our speakers"**; grid of EIGHT `div.speaker_box`: `div.speaker_img`
   (img `speakers/s1..s8.png`, alt "speaker name") + `div.info_box`
   (absolute bottom 25px, bg `#18181c`, padding 10px 30px):
   `h5.name` + `p.position` "CEO Company" (source reuses 3 placeholder
   names — Patricia Stone / James Oliver / Carla Banks / William Smith /
   Jessica Black / Duncan Stan; use 8 distinct names).
8. Pricing `section.pb100` — `div.section_title.mb50` `h3.title`
   **"Pricing table"**; THREE `div.price_box` (bg `#f0f2f6`, centered,
   padding 75px 30px, mb 30): first `div.price_box.active` carries
   `div.price_highlight` **"recommended"** (red ribbon, 12px 700 uppercase,
   top); `div.price_header` `h4` (24px 600: Early Bird / Start up /
   Corporate) + `h6` ("For the fast ones" / "For the begginers" / "For the
   business"); `div.price_tag` **65 / 85 / 95** (48px 700 `#18181c`) with
   `sup>$`; `div.price_features` `ul` (Early Entrance, Front seat,
   Complementary Drinks, Promo Gift); `a.btn.btn-primary.btn-rounded`
   **"Purchase"**.
9. Events `section.pb100` — `table.event_calender.table` (min-width
   1000px, horizontally scrollable wrapper): `thead.event_title` (bg
   `#f50136`, white): `th` `i.ion-ios-calendar-outline` +
   `span` **"next events calendar"**; `tbody` THREE rows: `td`
   `img` (cleander/c1..c3.png calendar thumb, alt "event") + `td.event_date`
   **14 / 18 / 22** + `span` "February" + `td` `div.event_place`:
   `h5` **"Conference in Amsterdam"** (18px 500) + `h6` **"08 AM - 04 PM"**
   (16px 500) + `p` "Speaker: Daniel Hill" + `td`
   `a.btn.btn-primary.btn-rounded` **"Read More"** + `td.buy_link`
   `a` **"buy now"** (text link).
10. Partners `section.bg-gray.pt100.pb100` (bg `#f0f2f6`) —
    `div.section_title.mb50` `h3.title` **"our partners"**; row of FIVE
    brand logos (img `brands/b1..b5.png`, alt "brand").
11. Tickets CTA `section.bg-img.pt100.pb100` (bg `tickets.png` +
    `div.overlay_dark`) — `div.section_title.mb30` `h3.title`
    **"GEt your tikets"** (source typo → "Get Your Tickets"); `div.row.justify-content-center.align-items-center`:
    `div.col-md-9.text-md-left.text-center.color-light` blurb paragraph +
    `div.col-md-3.text-md-right.text-center` `a.btn.btn-primary.btn-rounded.mt30`
    **"buy now"**.
12. Footer `footer` (bg `#0b031b`, padding 50px 0 100px) —
    `div.row.justify-content-center`: `div.col-md-4.col-12` `div.footer_box`:
    `div.footer_header > div.footer_logo` (img logo.png) +
    `div.footer_box_body`: about `p` + `ul.footer_social` FIVE links
    (ion-social: pinterest / facebook / twitter / dribbble / instagram —
    inline SVG in recreation); `div.col-12.col-md-4` `div.footer_box`:
    `div.footer_header` `h4.footer_title` **"instagram"** (18px uppercase
    white + red marker) + `div.footer_box_body` `ul.instagram_list` 3+ imgs;
    `div.col-12.col-md-4` `div.footer_box`: `h4.footer_title`
    **"subscribe to our newsletter"** + `div.newsletter_form`:
    `input.form-control` (bg `#1f1039`, placeholder "E-Mail here") +
    `button.btn.btn-rounded.btn-block.btn-primary` **"SUBSCRIBE"**.
13. Copyright bar `div.copyright_footer` (bg `#080113`, padding 15px,
    OUTSIDE `</footer>`) — centered `p`: "Copyright © <year> All rights
    reserved | This template is made with ♥ by Colorlib" (CC BY 3.0) →
    recreate as "…made with ♥ by **Component Dock**" linking
    https://www.componentdock.com/ (REQUIRED — no colorlib strings in app).

## Tasks (implementation order)

1. Scaffold `apps/gather` (copy simplest existing app; package
   `@free-react-templates/gather`; `vite.config.ts` with
   `injectUiSource()`; `public/CNAME` = `gather.free.componentdock.com`,
   `"homepage"` = `https://gather.free.componentdock.com`).
2. `npm install` at repo root (registers workspace in package-lock.json;
   verify `grep -c "free-react-templates/gather" package-lock.json`).
3. `index.css` `@theme` tokens: `--color-brand: #f50136`,
   `--color-ink: #18181c`, `--color-panel: #f0f2f6`,
   `--color-gray: #838383`, `--color-hairline: #e2e6f1`,
   `--color-footer: #0b031b`, `--color-footer-input: #1f1039`,
   `--color-copyright: #080113`, `--font-display: 'Montserrat', sans-serif`.
   Add Montserrat (400,500,700,900) Google Fonts `<link>`s to `index.html`.
   jsdom 30 has no localStorage — copy the MemoryStorage polyfill from
   `apps/cura/src/test/setup.ts` into `src/test/setup.ts`.
4. `Header.tsx` — fixed-top transparent bar (`mt-5`, min-h-12) over the
   hero: left white script-ish wordmark "Gather" (italic/serif treatment +
   brand-red dot); right 5 links (Home, Speakers, Events, News, Contact —
   text-xs uppercase tracking-[1px] white py-5 px-3, hover `text-brand`) +
   search icon (lucide `Search`, 30px); sticky on scroll (IntersectionObserver
   or scroll listener) → `bg-ink` (`#18181c`) + shadow
   (`shadow-[0_0_42px_rgba(0,0,0,0.08)]`), transition 400ms; mobile
   (< md): hamburger (lucide `Menu`) toggling a slide-down menu with the
   same links, aria-expanded.
5. `Hero.tsx` — `#home` full-width `cover_slider`: 3 slides in a
   state-driven carousel (auto-advance + dots): each slide bg image (picsum
   seed `gather-hero` ~1920×1080, dark crowd/concert vibe) with a
   `bg-black/40` overlay; content column (center/left/center variants):
   H2 "Prepare yourself for the" (white font-medium), span/strong
   "conference" (uppercase text-[90px] font-black `text-brand` leading-[1.1]),
   date line "12-14 February 2018 - Los Angeles, CA." (white text-lg
   uppercase), pill `ButtonLink` "Buy Tickets Now" (`bg-brand` rounded-full
   text-white hover:bg-ink); pagination: numbered dots 1/2/3, active gets
   2px `border-brand`; responsive: XL text scales down on mobile.
6. `InfoBar.tsx` — white section `py-[100px]`: 4 columns (grid-cols-2
   md:grid-cols-4): lucide `Calendar`/`MapPin`/`Users`/`Ticket` (56px, left)
   - uppercase font-medium title (DATE / Location / Speakers / Tickets) +
     value line ("12-14 February 2018" / "Los Angeles, CA." / "Natalie James
   - guests" / "$65 early bird").
7. `Countdown.tsx` — `bg-cover` band (picsum seed `gather-countdown`
   ~1600×600) + `bg-black/40` overlay, `py-[70px]`: centered light heading
   "Counter until the big event"; live countdown hook → 4 boxes: number
   (text-[48px] font-semibold `text-brand`) + label (font-medium): Days /
   Hours / Minutes / Seconds; freeze at zero; useEffect cleanup.
8. `About.tsx` — `py-[100px]`: `SectionTitle` "About the event" (uppercase
   text-4xl + 30px×3px `bg-brand` top marker); 2 intro paragraphs
   (md:grid-cols-2, `text-gray`); features `mt-[30px]` grid-cols-1
   md:grid-cols-2 lg:grid-cols-4: lucide `Mic` / `Rocket` / `Megaphone` /
   `Clock` + H4 ("9 Speakers" / "8 hrs Marathon" / "Live Broadcast" /
   "Early Bird") + blurb.
9. `Speakers.tsx` — `pb-[100px]`: `SectionTitle` "Our Speakers"; grid of 8
   speaker cards (grid-cols-2 md:grid-cols-4): relative photo (picsum seed
   `gather-speaker-N`, aspect-square) + absolute bottom strip `bg-ink`
   (`bottom-[25px] px-[30px] py-[10px]`): name (font-medium) + position
   ("CEO Company" — use 8 distinct placeholder names).
10. `Pricing.tsx` — `pb-[100px]`: `SectionTitle` "Pricing table"; 3 plans
    (md:grid-cols-3): card `bg-panel` centered `px-[30px] py-[75px]`
    relative: featured plan gets `bg-brand` "recommended" ribbon
    (absolute top, text-xs font-bold uppercase white); H4 plan name
    (text-2xl font-semibold) + subtitle; price `text-[48px] font-bold
text-ink` + `$` sup; feature list (lucide `Check`, items: Early
    Entrance, Front seat, Complementary Drinks, Promo Gift); pill
    ButtonLink "Purchase".
11. `Events.tsx` — `pb-[100px]`: horizontally scrollable table
    (min-w-[1000px]): thead `bg-brand` white: calendar icon + "next events
    calendar"; 3 rows: thumb (picsum seed `gather-event-N`), date
    (14/18/22 + February, `text-brand` font-bold), event info (name
    text-lg font-medium "Conference in Amsterdam", time text-base, "Speaker:
    Daniel Hill"), pill button "Read More", text link "buy now".
12. `Partners.tsx` — `bg-panel py-[100px]`: `SectionTitle` "Our Partners";
    row of 5 grayscale logos (picsum seed `gather-brand-N`, h-12, opacity
    or grayscale filter).
13. `TicketsCta.tsx` — `bg-cover` band (picsum seed `gather-tickets`
    ~1600×600) + `bg-black/40` overlay, `py-[100px]`: `SectionTitle` "Get
    Your Tickets" (white); blurb paragraph; right-aligned pill ButtonLink
    "Buy Now".
14. `Footer.tsx` — `bg-footer` (`#0b031b`) `pt-[50px] pb-[100px]`:
    3 columns (md:grid-cols-3): (1) wordmark "Gather" + about paragraph
    (`text-gray`) + 5 social icon links (inline SVG Pinterest / Facebook /
    Twitter / Dribbble / Instagram); (2) H4 "Instagram" (uppercase white
    text-lg + red marker) + 3-image grid (picsum `gather-insta-N`);
    (3) H4 "Subscribe to our newsletter" + newsletter form: email input
    (bg `#1f1039`, placeholder "E-Mail here") + full-width pill
    "SUBSCRIBE" button; validate with zod/react-hook-form pattern, success
    state after submit. Below footer: `bg-copyright` (`#080113`) bar:
    "Copyright © <year> All rights reserved | Made with ♥ by **Component
    Dock**" — link https://www.componentdock.com/.
15. `App.tsx` — compose Header + main (Hero, InfoBar, Countdown, About,
    Speakers, Pricing, Events, Partners, TicketsCta) + Footer +
    CopyrightBar; document title "Gather — Conference Template".
16. Tests: one describe per component, Gherkin-mirroring scenarios from
    spec.md; 100% coverage lines/functions/branches/statements.
17. Run `scripts/verify-app.sh gather` (typecheck + lint + knip + fallow +
    coverage + build) until green.
18. Update TEMPLATES.md lines 1003, 1678 AND 2048 `[ ]` → `[x]` (ALL THREE
    copies) with surge URL + homepage after deploy; `npm run readme:status`;
    commit `feat: Gather — conference template (ColorLib Evento)`; PR →
    main → merge immediately.

## Fidelity gotchas

- **TEMPLATES.md has THREE copies of Evento** (lines 1003, 1678, 2048) —
  ALL THREE must be marked `[x]` with the same surge URL.
- **All buttons are pill-shaped** (`border-radius: 50px`) — bg `#f50136`,
  white text, hover flips to `#18181c`. No square buttons anywhere.
- **Header is transparent over the hero** (margin-top 20px) and only turns
  `#18181c` when scrolled (`.sticky_header`) — recreate the transition,
  don't always show the dark bar.
- **The whole template is Montserrat** (400/500/700/900) — headings AND
  body; there is no second body font.
- **Hero XL word is 90px weight 900 uppercase in `#f50136`** ("conference")
  with the white 500-weight cover-title above it and an 18px uppercase white
  date line below; slides differ by content position (center / left /
  center).
- **Slider pagination is numbered (1·2·3), not arrows** — `.cover_dots`
  white pill with 3 numbers, active gets a 2px `#f50136` border.
- **Countdown numbers are `#f50136` at 48px weight 600** with weight-500
  labels; the band uses a `rgba(0,0,0,0.4)` overlay over the bg image.
- **Speaker name strip is an absolute bottom overlay** (`bottom: 25px`,
  bg `#18181c`, padding 10px 30px) ON the photo — not below it.
- **Events section is a TABLE** (min-width 1000px → horizontal scroll on
  mobile) with a `#f50136` thead — the section title lives in the thead,
  there is no separate h3.
- **Pricing**: featured plan = `.price_box.active` with the red
  "recommended" ribbon; price tag is 48px 700 `#18181c` with a `$` sup.
  Source typo "For the begginers" — fix to "beginners".
- **Tickets CTA source typo "GEt your tikets"** — fix to "Get Your
  Tickets"; its button says lowercase "buy now".
- **Copyright bar sits OUTSIDE `</footer>`** as a separate `#080113` div.
- **Footer is dark purple, not black**: `#0b031b` body, `#1f1039` input,
  `#080113` copyright bar.
- **Source repeats 3 placeholder speaker names across 8 photos** — use 8
  distinct names; positions are all "CEO Company".
- **jsdom 30 has no localStorage** — copy the MemoryStorage polyfill from
  `apps/cura/src/test/setup.ts` into `src/test/setup.ts`.
- **No ColorLib references in app code** (comments included); footer MUST
  link https://www.componentdock.com/.
