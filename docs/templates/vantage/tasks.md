# Vantage (ColorLib Biznance) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-vantage` by an implementer stream.

## Design notes

- **Original:** ColorLib "Biznance" — free business & finance website
  template. Source: https://colorlib.com/wp/template/biznance/.
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/biznance/`
  (HTTP 200, 25.1KB) + stylesheet `css/style.css` (73.0KB). Full rendered
  DOM extracted; structure below is from the DOM + CSS tokens. Screenshot
  `biznance-free-template.jpg` (1200×946) confirms: stark white header with
  black "Biznance" logo and HOME active in purple, full-width office-photo
  hero tinted purple→pink (lighter toward bottom), white uppercase headline
  "WE COMBINE BUSINESS WITH FINANCE", letter-spaced tagline "WE WORK HARD,
  WE RESULT PERFECT", coral-gradient "EXPLORE US" + mint-gradient "GET FREE
  QUOTE" buttons; clean professional Roboto look.
- **Structure observed (1:1):**
  1. `header_area` (white): logo "Biznance" (black bold; original is an
     image — recreate as text), nav `500 12px/100px Roboto` uppercase
     #222222 (Home active, About, Services, Pages ▾, Portfolio ▾,
     Portfolio Details, Elements, Blog ▾, Blog, Blog Details, Contact —
     flatten to Home / About / Services / Portfolio / Blog / Contact),
     item margin-right 45px, hover/active #8d83ff; search icon far right.
  2. `home_banner_area` (min-height 800px): `banner_inner .overlay` =
     full-bleed office photo with baked-in purple→pink tint (recreate:
     picsum office photo + CSS gradient #e187f0→#f27fd3→#a276ff→#8889ff
     overlay, light at bottom); `banner_content` white: `h3` "We Combine
     Business with Finance" (36px Roboto bold uppercase, line-height 45px,
     mb 25px), `h5` "We work hard, we result perfect" (uppercase,
     letter-spacing 2.1px), buttons mt 45px: `a.org_btn` "Explore Us" +
     `a.green_btn` "Get Free Quote".
  3. `offer_area p_120` (white): `offer_title` (centered, max-width 740px,
     mb 70px): `h5` "What we offer for you" (14px uppercase ls 2.1px
     #222) + `p` 24px/36px #777 lorem (with `<b>` keywords); 3 `offer_item`
     (col-lg-4): photo (`offer-1.jpg`…) + `offer_text` (center, border
     1px #eeeeee, padding 50px 30px, bottom radius 5px): `h4` 18px #222
     (mb 20px) + `p` #777. Hover: text block fills gradient
     #e187f0→#f27fd3→#a276ff→#8889ff, h4 → white.
  4. `feature_area p_120` (bg #f9f9ff): `main_title` (center, max-width
     720px, mb 75px): `h2` 36px Roboto #222 "Our Top Rated Features" +
     `p` 14px/24px lorem; 4 `feature_item` (col-lg-3 col-sm-6, padding
     60px 20px 60px 30px): h4 + p — Unique Design, Appropriate UX,
     Perfect Visual, Different Layout (text-only, no icons).
  5. `home_gallery_area p_120` (white): `main_title` "Our Recent Completed
     Projects" + lorem; `gallery_filter list` tabs: All Categories,
     Branding, Image Manipulation, Creative Work, Web Design, Print
     Material; 6 `h_gallery_item` (inline-block, mb 45px): `g_img_item`
     (relative, overflow hidden, radius 5px): photo (`project-1.jpg`…)
     - `:before` gradient overlay (hover) + `.light` lightbox icon
       (centered, translateY(-50%)).
  6. `home_contact_area` (full-width gradient band): left `left_img`
     (desk photo), right `h_right_form` (padding-left 95px, bg 90deg
     #e187f0→#f27fd3→#a276ff→#8889ff): `h4` "Get a free Quotation"
     (white) + form: inputs "Your name" / "Phone" / "Email address",
     textarea "Wrtie message" (original typo → "Write message"), submit
     button.
  7. `latest_blog_area p_120` (bg #f9f9ff): `main_title` "Latest Posts
     from Blog" + lorem; 3 `l_blog_item` (col-lg-4): photo (`l-post-1.jpg`
     …), `date` link 12px #777 "25 October, 2017 | By Mark Wiens", `h4`
     18px #222 (border-bottom 1px #eeeeee, pb 20px; hover #8d83ff),
     `p` excerpt #777.
  8. `footer-area section_gap` (bg #222222, pt 120px): 4 widgets
     (`footer_title` 18px/500 white, mb 28px): "About Biznance" (p #777),
     "Navigation Links" (Home, Feature, Services, Portfolio, Team, Pricing,
     Blog, Contact; links #777 → hover #8d83ff), "Newsletter" (email input
     "Email Address" + sub-btn), "InstaFeed" (8 thumbs
     `instagram/Image-01.jpg`…`Image-08.jpg`); copyright bar with
     repo-standard credit.
- **Design tokens:** Brand accent **#8d83ff** (nav hover/active, blog h4
  hover, footer links). Signature gradient **90deg #e187f0 → #f27fd3 →
  #a276ff → #8889ff** (offer hover fill, gallery hover overlay, contact
  band bg). Button gradients: `.org_btn` **to right #f766a5 → #f78762 →
  #f766a5** (pink/coral), `.green_btn` **to right #73ca96 → #98d370 →
  #73ca96** (mint); both `padding 0 40px`, `line-height 50px`,
  `border-radius 5px`, white 14px/600 uppercase **Poppins**,
  `background-size 200% auto` + hover `background-position: right center`
  (400ms slide). Fonts: **Roboto** (body, nav, headings), **Poppins**
  (buttons) via Google Fonts `<link>`. Text: #222222 headings/nav,
  #777777 body, white on dark/gradient. Section bg: white (offer, gallery),
  **#f9f9ff** (features, blog), gradient (contact), **#222222** (footer).
  Borders: 1px #eeeeee; radii: gallery 5px, offer text block bottom 5px.
  Spacing: `p_120` sections (120px), main_title mb 75px, offer_title mb
  70px, hero min-height 800px, feature_item 60px 20px 60px 30px, gallery
  item mb 45px, footer pt 120px, nav 12px/100px line-height.
- **Recreation decisions:** repo-standard white sticky navbar + "Vantage"
  text logo (black bold Roboto) + flattened uppercase nav (Home active,
  About, Services, Portfolio, Blog, Contact) + lucide Search icon +
  hamburger mobile menu; hero = picsum office photo + purple→pink gradient
  overlay + headline + tagline + two gradient buttons (50px, radius 5px,
  uppercase Poppins, 200% slide hover); offer = 3 photo cards (bordered
  text block, gradient fill + white h4 hover); features = 4 text-only tiles
  on #f9f9ff; gallery = filter tabs + 6 photo tiles with gradient hover
  overlay + lightbox icon (simple client-side category filter); contact =
  full-width gradient band, photo + form (name/phone/email/message +
  submit, zod validation per repo conventions); blog = 3 photo cards
  (date/byline, title hover #8d83ff, excerpt) on #f9f9ff; footer = #222222
  with About / Navigation Links / Newsletter / InstaFeed (8 picsum thumbs)
  - copyright bar; picsum seeds `vantage-N`; Roboto + Poppins via `<link>`;
    lucide-react icons (brand icons as inline SVG per repo convention).

## Tasks / todo outline

1. Scaffold `apps/vantage` (copy simplest existing app; package
   `@free-react-templates/vantage`; `npm install` at root to register the
   workspace in package-lock.json; `injectUiSource()` in vite.config.ts).
2. `src/index.css`: `@theme` tokens — brand purple #8d83ff, gradient
   stops #e187f0/#f27fd3/#a276ff/#8889ff, button gradients
   #f766a5/#f78762 and #73ca96/#98d370, #f9f9ff section bg, #222222
   footer/text, #777777 body, #eeeeee borders, fonts Roboto + Poppins,
   radii (5px), 120px section padding.
3. `Header.tsx` (white, sticky): "Vantage" text logo, nav (Home active
   #8d83ff, About, Services, Portfolio, Blog, Contact), search icon,
   hamburger → mobile menu.
4. `Hero.tsx` (min-height 800px): picsum office photo + purple→pink
   gradient overlay, h3 "We Combine Business with Finance", h5 "We work
   hard, we result perfect" (letter-spaced), Explore Us (pink/coral
   gradient) + Get Free Quote (mint gradient) buttons with 200% slide
   hover.
5. `Offer.tsx`: "What we offer for you" kicker + subtitle + 3 photo cards
   (bordered text block, title + blurb; hover: gradient fill + white
   title).
6. `Features.tsx` (#f9f9ff): "Our Top Rated Features" + 4 text-only tiles
   (Unique Design, Appropriate UX, Perfect Visual, Different Layout).
7. `Gallery.tsx`: "Our Recent Completed Projects" + filter tabs (All /
   Branding / Image Manipulation / Creative Work / Web Design / Print
   Material) + 6 photo tiles with gradient hover overlay + lightbox icon;
   client-side filtering.
8. `ContactQuote.tsx`: full-width pink→purple gradient band — desk photo
   left, "Get a free Quotation" + form (name/phone/email/message) with
   zod validation + submit.
9. `LatestBlog.tsx` (#f9f9ff): "Latest Posts from Blog" + 3 photo cards
   (date/byline, title hover #8d83ff, excerpt).
10. `Footer.tsx` (#222222): About Vantage / Navigation Links / Newsletter
    (email + subscribe) / InstaFeed (8 picsum thumbs) + copyright bar.
11. `App.tsx` composition (order 1:1), document title "Vantage — Business
    & Finance".
12. Tests per component (scenario-style), 100% coverage; run
    `npm run verify:app -- vantage`.
13. Commit `feat: vantage — business & finance template (ColorLib
Biznance)`, push `feat/template-vantage`, open + immediately
    squash-merge PR, re-dispatch `Deploy to Surge.sh -f app=vantage` if
    needed, mark `[x]` in TEMPLATES.md with surge URL, `npm run
readme:status`.
