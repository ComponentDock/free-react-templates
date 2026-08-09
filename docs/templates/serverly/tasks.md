# Serverly (ColorLib Bhost) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-serverly` by an implementer stream.

## Design notes

- **Original:** ColorLib "Bhost" — free web hosting website template.
  Source: https://colorlib.com/wp/template/bhost/.
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/bhost/`
  (HTTP 200, 32.3KB) + stylesheets `styles/main_styles.css` (20.9KB) and
  `styles/responsive.css` (5.2KB, CRLF line endings). Full rendered DOM
  extracted; structure below is from the DOM + CSS tokens. Screenshot
  `bhost-free-template.jpg` (1200×946) confirms: dark navy hero with faint
  chart/graph background, circular server icon, white headline "Choose the
  perfect hosting", white pill domain search with gradient SEARCH button and
  .com dropdown, white domain-pricing strip below, then white "Why Choose
  us?" section; header = white "bHost" logo, centered nav, utility links
  (Webmail/Chat/Login), purple gradient phone pill; blue-purple gradient
  accents, modern hosting aesthetic.
- **Structure observed (1:1):**
  1. `header trans_400` (absolute, transparent): logo `<span>b</span>Host`
     (28.3px/700 white, span #416ecc), `main_nav` (Home / About us /
     Services / News / Contact), `header_links` (Webmail, Chat, Login),
     `.phone` pill (radius 22px, gradient #487fee→#b632fa, "652-345 3222
     11"), hamburger → full-screen menu (bg #020c22). Scrolled: bg #020c22,
     border-bottom 1px #b334fa.
  2. `home` (892px; parallax bg `images/index.jpg`): `home_icon` (63px
     circle, server SVG), `home_title` "Choose the perfect hosting"
     (60px/600/white), `domain_search`: white pill input (70px, radius
     35px, placeholder "Your domain name") + `domain_search_dropdown`
     (319×70, bg #ece3fd, .com/.io/.net) + gradient button 193×70
     "search".
  3. `domain_pricing` (white card, margin-top -80px, radius 50px, height
     140px): .com $3.99 / .net $1.99 / .org $2.99 / .io $3.99 / .info
     $13.99; dot+TLD 30px/600 #03dd03, price 18px #808080, name colors
     #005cc3/#a736df/#fa9900/#df36b9/#242424.
  4. `why` (white, 42/100): "Why Choose us?" + subtitle, 3 `icon_box_1`
     (col-lg-4, icon 158px + title 24px + text 14px): Server Protection,
     CloudFlare Integration, 30 Day Money-back.
  5. `pricing` (white): "The package 4 you" + subtitle; 3 `pricing_item`
     (col-lg-4): white card border 2px #f1f6f9, `pricing_title_background`
     218px inline SVG wave gradient grad_1 #487fee→#b632fa (hover grad_2
     #9cb9f6→#d691fc), title 14px/600 uppercase white (beginner /
     recommended / professional), price 48px/500 white + span 24px +
     `<div>` Always / Per Month, 5 check-list features (13px check_svg +
     14px/500 #92a4b8: 2 E-mail Addresses, 25 GB Space, 24h Live Support,
     Documentation inside, SEO Plan), `pricing_button` white pill 193×72
     radius 36px uppercase "order plan" (hover bg #ffc016, white text);
     card hover: gradient bg visible, shadow 0 21px 29px rgba(0,0,0,.41),
     list/check white; `pricing_text` lorem below.
  6. `c_right` (white, pt 111): split — "Choose the best service" +
     paragraph + `content_list_1` 3 bullets + "order plan" button left,
     `pic_1.png` right.
  7. `c_left` (white, 105/154): split — "The best servers" + `content_list_2`
     3 numbered items (01./02./03.) + "order plan" button left, `pic_2.png`
     right.
  8. `footer`: `footer_phone` gradient bar ("Need Help? Call Us 24/7" 18px
     - phone "652-345 3222 11" 36px with icon); `footer_content` bg #21263a
       (149/51): 3 link columns — Hosting Packages (Cloud Hosting, Web
       Hosting, Reseller Hosting, VPS Hosting, Dedicated Servers, Windows
       Hosting, Linux Servers), Our Services (Web Design, Logo Design,
       Domains Register, Search Advertising, Email Marketing), Useful Links
       (About Us, Testimonials, Services, News, Contact); 4th col: footer
       logo "bHost", footer_info (Address 1481 Creekside Lane Avila Beach,
       CA 931 / Phone +53 345 7953 32453 / E-mail yourmail@gmail.com),
       `cards` (5 payment images), `social`; `copyright_bar` bg #181d2e 44px.
- **Design tokens:** Gradient **#487fee→#b632fa** (phone pill, search
  button, wave headers, pricing hover bg, footer phone bar, button hover
  sweep). Dark navy #020c22 (header scrolled, menu), #21263a (footer),
  #181d2e (copyright). White cards/text; #f1f6f9 card border; #92a4b8
  secondary; #6b6b6b placeholder; #808080 domain prices; #ffc016 hover
  accent; TLD colors #03dd03/#005cc3/#a736df/#fa9900/#df36b9/#242424; logo
  accent #416ecc; border #b334fa. Font **'Montserrat'** (300–900, Google
  Fonts `<link>`). Buttons `.button` 193×72 radius 36px uppercase 14px/700
  white with gradient ::before sweep; search button 193×70 radius 35px
  solid gradient; pricing button white → #ffc016 hover. h2 base 36px; hero
  60px/600; price 48px/500 (+24px span); footer phone 36px; icon titles
  24px; footer titles 18px/600. Spacing: home 892px; why 42/100; pricing
  row mt 104px; c_right pt 111; c_left 105/154; footer 149/51; domain
  strip mt -80px.
- **Recreation decisions:** repo-standard navbar (transparent over hero →
  dark #020c22 scrolled) + "Serverly" logo (accent "S" #416ecc) + nav +
  utility links + gradient phone pill + hamburger full-screen menu; hero
  dark section (static gradient/photo, no parallax lib) + lucide Server
  icon + headline + domain search bar (input + dropdown .com/.io/.net +
  gradient search button) + white overlapping domain strip (5 TLDs,
  per-item colors); Why Choose us 3 features (lucide ShieldCheck, Cloud,
  RotateCcw); pricing 3 wave-header cards (Free / $29.90 / $59.90, inline
  SVG gradient wave, 5 checks, order-plan pill, hover gradient + yellow
  button); two split sections (bullet list / numbered 01-03) with
  order-plan buttons; dark footer (gradient phone bar, 3 link columns,
  contact info + payment placeholders + social, copyright bar); picsum
  seeds `serverly-N`; Montserrat via `<link>`; lucide-react icons.

## Tasks / todo outline

1. Scaffold `apps/serverly` (copy simplest existing app; package
   `@free-react-templates/serverly`; `npm install` at root to register the
   workspace in package-lock.json; `injectUiSource()` in vite.config.ts).
2. `src/index.css`: `@theme` tokens — gradient blue #487fee → purple
   #b632fa, dark navy #020c22/#21263a/#181d2e, accent yellow #ffc016,
   secondary #92a4b8, font Montserrat (300–900), pill radii.
3. `Header.tsx` (transparent over hero, dark on scroll): "Serverly" logo
   (accent S), nav (Home active, About us, Services, News, Contact),
   utility links (Webmail, Chat, Login), gradient phone pill, hamburger →
   full-screen menu.
4. `Hero.tsx` (dark): server icon, "Choose the perfect hosting", domain
   search — input + extension dropdown (.com/.io/.net) + gradient search
   button (submit without reload).
5. `DomainPricing.tsx`: white overlapping strip, 5 TLDs with prices and
   per-item colors.
6. `WhyChooseUs.tsx`: "Why Choose us?" + subtitle + 3 icon feature cards
   (Server Protection, CloudFlare Integration, 30 Day Money-back).
7. `Pricing.tsx`: "The package 4 you" + 3 wave-header plan cards (Free /
   $29.90 / $59.90) — inline SVG gradient wave, price + period, 5
   check-list features, "order plan" pill; hover: gradient bg + shadow +
   yellow button.
8. `SplitFeatures.tsx`: two alternating split sections — "Choose the best
   service" (bullet list) and "The best servers" (numbered 01./02./03.),
   each with image + "order plan" button.
9. `Footer.tsx` (dark): gradient "Need Help? Call Us 24/7" phone bar, 3
   link columns (Hosting Packages, Our Services, Useful Links), contact
   info + payment card placeholders + social icons, copyright bar.
10. `App.tsx` composition (order 1:1), document title "Serverly — Web
    Hosting".
11. Tests per component (scenario-style), 100% coverage; run
    `npm run verify:app -- serverly`.
12. Commit `feat: serverly — web hosting template (ColorLib Bhost)`, push
    `feat/template-serverly`, open + immediately squash-merge PR,
    re-dispatch `Deploy to Surge.sh -f app=serverly` if needed, mark `[x]`
    in TEMPLATES.md with surge URL, `npm run readme:status`.
