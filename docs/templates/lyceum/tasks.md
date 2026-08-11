# Lyceum (ColorLib Learnit) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-lyceum`.

## Source mapping

- **ColorLib item:** "Learnit" (TEMPLATES.md — appears 2×: lines 436, 1647;
  both rows point to the same source, one prep covers all; verified with
  `grep -c 'wp/template/learnit/'` = 2).
- **Source URL:** https://colorlib.com/wp/template/learnit/
- **Preview URL:** https://preview.colorlib.com/theme/learnit/ — **HTTP 200,
  live** (confirmed 2026-08-11, ~29.4 KB HTML, `<title>Learn IT
Education</title>`). Do not redo this lookup.
- **Preview CSS:** https://preview.colorlib.com/theme/learnit/css/style.css
  (~73 KB) — also imports bootstrap.css, font-awesome.min.css,
  vendors/linericon (Linearicons), owl-carousel, lightbox, nice-select,
  animate-css, magnific-popup, responsive.css. Site is jQuery + Bootstrap 4
  - owl-carousel + isotope + stellar (parallax) + ajaxchimp — NOT Tailwind.

## Reference research (done — do not redo)

### Screenshot (`learnit-free-template.jpg`, 1200×946)

Matches the live template: thin `#f9f9ff` top bar, white header with green
HOME active link and green logo mark, full-width photo hero with centered
white serif headline "We Ensure better education for a better world" and a
green "Get Started" button, white feature strip with 4 green-outlined icons,
start of the "Popular Free Courses" grid. The live preview DOM + parsed
stylesheet are the authoritative reference; the screenshot confirms the same
design.

### Live DOM (primary reference — section order verified against fetched HTML + parsed CSS)

1. **Top bar** `div.top_menu.row.m0` (bg `#f9f9ff`, line-height 42px):
   - LEFT `div.float-left` > `ul.list.header_social`: 4 × `li > a` —
     fa-facebook, fa-twitter, fa-dribbble, fa-behance (14px `#777`,
     margin-right 15px, hover green).
   - RIGHT `div.float-right`: `a.dn_btn` "+440 012 3654 896" +
     `a.dn_btn` "support@colorlib.com" (12px Roboto `#777`, margin-right
     30px, hover green).
2. **Header** `header.header_area` (absolute, top 0, z-index 99; sticky via
   `navbar_fixed` on scroll) > `div.main_menu` > `nav.navbar.navbar-expand-lg`
   > `div.container`:
   - `a.navbar-brand.logo_h` > `img` (img/logo.png → text brand "LYCEUM"
     with a green graduation-cap mark).
   - `button.navbar-toggler` — 3 × `span.icon-bar` hamburger (mobile menu
     via client-side state).
   - `ul.nav.navbar-nav.menu_nav.ml-auto`: Home (`li.active`), About,
     Courses ▾ (Courses, Course Details), Pages ▾ (Elements), Blog ▾ (Blog,
     Blog Details), Contact. Nav links: 500 12px/80px Roboto UPPERCASE
     `#222`, padding 0, margin-right 45px; hover/active `#4dbf1c`.
     Dropdowns: bg #fff, min-width 200px, shadow `0px 3px 16px 0px
rgba(0,0,0,0.1)`, sub-items 45px line-height, padding 0 30px,
     border-bottom 1px `#ededed`, hover bg `#4dbf1c` + white text.
3. **Hero** `section.home_banner_area` (min-height 780px, z-index 1) >
   `div.banner_inner.d-flex.align-items-center` (min-height 780px, overflow
   hidden) > `div.overlay.bg-parallax` (bg image `img/banner/home-banner.jpg`
   center/cover, absolute, height 121%, z-index -1; parallax via stellar →
   recreate as static cover) > `div.banner_content.text-center` (white):
   - `h3` "We Ensure better education <br />for a better world" — Playfair
     Display serif 42px, weight 900, mb 20px.
   - `p` 14px/24px Roboto, max-width 620px, margin auto (ipsum).
   - `a.main_btn` "Get Started" — bg `#4dbf1c`, white, Roboto 13px 500,
     padding 0 40px, line-height 48px, radius 5px, border 1px `#4dbf1c`,
     mt 40px; hover: transparent bg + green text.
4. **Finance strip** `section.finance_area` (bg `#f9f9ff`, padding 40px 0):
   4 × `col-lg-3.col-sm-6` `finance_item` > `div.media`: `div.d-flex` (pr
   25px, align-self center) > `i` 36px green (lnr-rocket / lnr-earth /
   lnr-smile / lnr-tag → lucide Rocket / Globe / Smile / Tag) +
   `div.media-body` > `h5` 18px/27px `#222`. Source repeats "Science &
   Engineering" ×4 → vary: Science & Engineering, Language Courses, Arts &
   Design, Business Studies.
5. **Courses** `section.courses_area.p_120` > `div.container`:
   - `div.main_title` (center, max-width 680px, margin 0 auto 75px): `h2`
     "Popular Free Courses" (Playfair 36px `#222` mb 12px) + `p` 14px/24px
     `#777` (ipsum).
   - `div.row.courses_inner` (margins -15px, overflow hidden, mb -30px):
     - `col-lg-9` > `div.grid_inner`: 4 × `div.grid_item` (float left, mb
       30px) — `wd55` (55.55%) / `wd44` (44.45%) / `wd44` / `wd55`:
       `div.courses_item` (relative, overflow hidden) > `img`
       (img/courses/course-1.jpg, course-2.jpg, course-4.jpg, course-5.jpg)
       - `div.hover_text` (absolute, left 0, bottom 15px, padding 0 35px):
         `a.cat` "Free" (green pill: bg `#4dbf1c`, white, padding 0 25px,
         radius 5px, line-height 30px, 14px 500, mb 20px) + `a > h4` 18px
         white mb 15px (hover green; source title "Japanease Language Class"
         ×4 → vary: Photography Masterclass, Web Design Bootcamp, Data Science
         Basics, Creative Writing Workshop) + `ul.list`: 3 × `li` (inline, mr
         16px) > `a` white 14px: lnr-users + "355", lnr-bubble + "35",
         lnr-user + "T. Robert" (vary instructor names).
     - `col-lg-3` > `div.course_item` (relative): `img`
       (img/courses/course-3.jpg — tall sidebar card) + same hover_text.
6. **Team** `section.team_area.p_120` (bg `#f9f9ff`):
   - `div.main_title`: `h2` "Meet Our Faculty" + `p` (ipsum).
   - `div.row.team_inner` (mb -30px): 4 × `col-lg-3.col-sm-6` `team_item`
     (relative, text-center, mb 30px):
     - `div.team_img` (relative): `img` (img/team/team-1..4.jpg, width
       100%) + `:before` circular overlay `rgba(255,255,255,0.65)`
       (opacity 0→1 on hover, border-radius 50%) + `div.hover` (absolute
       top 50% translateY(-50%), center, opacity 0→1): 3 × `a` 14px `#777`
       (mr 20px, hover green) — fa-facebook / fa-twitter / fa-linkedin.
     - `div.team_name` (center, mt 30px): `h4` Playfair bold 18px `#222`
       mb 5px (hover green; source "Ethel Davis" ×4 → vary: Ethel Davis,
       Stephen Kelby, Martha Bell, Jack Dyson) + `p` 14px `#777` (source
       "Managing Director (Sales)" → vary roles).
7. **Testimonials** `section.testimonials_area.p_120` >
   `div.testi_slider.owl-carousel` (max-width 945px, margin auto): 3 ×
   `div.item` (pt 50px) > `div.testi_item` (text-center, border 1px
   `#eeeeee`): `img` avatar (margin auto, margin-top -50px — overlaps card
   top) + `h4` 18px `#222` mt 20px mb 15px (source "Fannie Rowe" → vary
   names) + role `span` + `ul.list` 5 × `li > a` stars (fa-star, `#ffc000`
   14px, mb 20px) + `p` quote (max-width 760px, margin auto, mb 60px; 3
   distinct quotes). Carousel → client-side state.
8. **Packages** `section.packages_area.p_120` (bg `#f9f9ff`) >
   `div.row.packages_inner` (cols align-self center):
   - `col-lg-4` `div.packages_text`: `h3` 36px `#222` mb 20px "Choose Course
     Packages" + `p` (ipsum).
   - 2 × `col-lg-4` `div.packages_item` (bg #fff, radius 5px, text-center,
     padding 30px 55px): `div.pack_head`: `i` 140×140 circle bg `#edf8e8`,
     36px icon `#222` line-height 140px margin 0 auto 25px (lnr
     graduation-hat / lnr diamond → lucide GraduationCap / Gem; hover: bg
     `#4dbf1c` + white icon) + `h3` 24px `#222` mb 12px ("Premium" /
     "Exclusive") + `p` mb 25px ("For the individuals"); `div.pack_body` >
     `ul.list`: 3 × `li > a` `#777` line-height 50px border-bottom 1px
     `#eeeeee` (first also border-top): "Secure Online Transfer", "Unlimited
     Styles for interface", "Reliable Customer Service"; `div.pack_footer`
     (relative): `h4` 30px Roboto `#222` normal mt 40px ("£399.00"; fades to
     0 on hover) + `a.main_btn` "Join Now" (absolute top -20px left 50%
     translateX(-50%), padding 0 35px, shadow `0px 10px 30px 0px
rgba(0,0,0,0.1)`, opacity 0→1 on hover).
9. **Latest blog** `section.latest_blog_area.p_120`: `div.main_title`: `h2`
   "Latest Posts From Blog" + `p`; `div.row.latest_blog_inner`: 4 ×
   `col-lg-3.col-md-6` `l_blog_item` (mb 30px): `img.img-fluid`
   (img/latest-blog/l-blog-1..4.jpg) + `a.date` 13px `#777` block mt 20px mb
   15px "25 October, 2018 | By Mark Wiens" (vary) + `a > h4` 18px/24px `#222`
   border-bottom 1px `#eeeeee` pb 20px mb 20px hover green (source title
   ×4 → vary) + `p` snippet.
10. **Impress** `section.impress_area.p_120` (bg image
    `img/notify-bg.jpg` cover) > `div.impress_inner.text-center` (white):
    `h2` uppercase 36px mb 20px "Become an instructor" + `p` max-width 770px
    margin 0 auto 45px + `a.main_btn2` "Apply for the post" (bg #fff, color
    `#222`, Roboto 14px 500, padding 0 32px, line-height 48px, radius 5px,
    border 1px #fff; hover: bg `#4dbf1c` + white + green border).
11. **Footer** `<footer class="footer-area p_120">` (bg `#04091e`):
    - 4 × `col-lg-2.col-md-6.col-sm-6` `single-footer-widget.tp_widgets`:
      `h6.footer_title` white — "Top Products" (Managed Website, Manage
      Reputation, Power Tools, Marketing Service) · "Quick Links" (Jobs,
      Brand Assets, Investor Relations, Terms of Service) · "Features"
      (Jobs, Brand Assets, Investor Relations, Terms of Service) ·
      "Resources" (Guides, Research, Experts, Agencies); `ul.list > li` (mb
      12px) > `a` 14px `#777`, hover #fff.
    - `col-lg-4` `aside.f_widget.news_widget` (pl 15px): `div.f_title` >
      `h3.footer_title` "Newsletter" + `p` 14px/24px `#777` "Stay updated
      with our latest trends" (mb 15px) + `form.subscribe_form.relative` >
      `div.input-group.d-flex.flex-row`: `input[type=email]` (placeholder
      "Enter email address", 40px height, bg #fff, width 80%, border none,
      padding 0 15px, 14px Roboto `#777`, focus outline none) +
      `button.btn.sub-btn` (bg `linear-gradient(to right, #2c28b1 0%,
#9b5cf6 51%, #2c28b1 100%)`, background-size 200% auto, white 12px
      500, line-height 40px, padding 0 38px, radius 0 in news_widget,
      hover shifts gradient) > `span.lnr.lnr-arrow-right` (→ lucide
      ArrowRight).
    - `div.row.footer-bottom.d-flex.justify-content-between.align-items-center`:
      `p.col-lg-8.footer-text.m-0` — "Copyright © <year> All rights
      reserved | This template is made with <i class="fa fa-heart-o"> by
      Colorlib" + `div.col-lg-4.footer-social`: 4 × `a` (fa-facebook /
      fa-twitter / fa-dribbble / fa-behance).

## Design tokens (from style.css — computed)

| Token            | Value                    | Usage                                                                        |
| ---------------- | ------------------------ | ---------------------------------------------------------------------------- |
| brand-green      | `#4dbf1c`                | buttons, cat badge, active/hover nav, finance icons, hover accents, Join Now |
| gradient-primary | `#2c28b1 → #9b5cf6`      | footer newsletter sub-btn gradient (background-size 200%)                    |
| ink              | `#222222`                | headings, nav links, package titles + price, main_btn2 text                  |
| muted            | `#777777`                | main_title p, top bar, team roles, blog dates, footer links, newsletter p    |
| light-bg         | `#f9f9ff`                | top_menu, finance_area, team_area, packages_area                             |
| border-soft      | `#eeeeee`                | testimonial border, feature dividers, blog h4 border, dropdown divider       |
| star-gold        | `#ffc000`                | testimonial stars                                                            |
| pack-chip        | `#edf8e8`                | package icon circle bg                                                       |
| footer-bg        | `#04091e`                | footer background                                                            |
| team-overlay     | `rgba(255,255,255,0.65)` | team photo circular hover overlay                                            |
| dropdown-shadow  | `rgba(0,0,0,0.1)`        | dropdown + Join Now shadows                                                  |
| paper            | `#ffffff`                | hero text, overlays, cards, newsletter input                                 |
| font-heading     | "Playfair Display"       | hero h3 42px/900, main_title h2 36px, team h4 18px bold                      |
| font-body        | "Roboto"                 | everything else (nav 500 12px uppercase, buttons 13–14px 500, body 14px)     |

Radii: 5px (main_btn, main_btn2, submit_btn, cat badge, packages_item); 50%
(package icon circles, team overlay); square elsewhere. Spacing: `.p_120`
sections = 120px top/bottom (courses/team/testimonials/packages/blog/impress/
footer); finance 40px; main_title mb 75px; hero 780px min-height, h3 42px mb
20px, CTA mt 40px; nav 12px/80px, item mr 45px; dropdown 200px min-width,
45px items; grid items 55.55%/44.45% float mb 30px; hover_text bottom 15px
padding 0 35px; packages 30px 55px padding, 140px icon circles, 50px feature
rows, price 30px mt 40px; newsletter input 40px/80%; footer links 14px mb
12px.

## Implementation task outline

1. Scaffold `apps/lyceum` (copy the simplest existing app, rename package to
   `@free-react-templates/lyceum`), `npm install` at root (lockfile!),
   `injectUiSource()` in vite.config.ts, Playfair Display (700/900) + Roboto
   (400/500) Google Fonts `<link>` in index.html.
2. `src/index.css` — `@theme` tokens: `--color-brand: #4dbf1c`,
   `--color-gradient-from: #2c28b1`, `--color-gradient-to: #9b5cf6`,
   `--color-ink: #222222`, `--color-muted: #777777`, `--color-light:
#f9f9ff`, `--color-border-soft: #eeeeee`, `--color-star: #ffc000`,
   `--color-pack-chip: #edf8e8`, `--color-footer: #04091e`,
   `--color-paper: #ffffff`, `--font-heading: "Playfair Display", serif`,
   `--font-body: "Roboto", sans-serif`.
3. Components: `TopBar` (4 socials left, phone/email right),
   `Navbar` (brand text + graduation-cap mark, 6 links, 3 dropdowns, mobile
   hamburger), `Hero` (banner bg cover, serif headline, paragraph, green
   Get Started that inverts on hover), `FeatureStrip` (4 icon+title items),
   `Courses` (asymmetric 55/44 grid + sidebar card, Free badge + title +
   meta overlay), `Team` (4 cards, circular white hover overlay + socials),
   `Testimonials` (client-side carousel: 3 slides, avatar overlap, name,
   stars, quote), `Packages` (text col + 2 cards, hover: green icon circle
   - price→Join Now swap), `Blog` (4 post cards), `Impress` (bg-image CTA,
     white button inverting to green), `Footer` (4 link columns, newsletter
     form, copyright row + socials).
4. Testimonials carousel: state-based slides, prev/next + dot indicators,
   no owl-carousel dependency.
5. Newsletter form: zod email validation, block submit until valid, success
   message swaps the form (inputs unmount → assert absence after submit).
6. Mobile menu: state-based open/close, Escape/close control, focus
   handling.
7. Nav dropdowns: hover/focus-open on desktop, accessible disclosure on
   mobile.
8. Hover reveals via group-hover: course overlay (static per source, no
   hover gate needed — overlay is ALWAYS visible in this template; only the
   title color changes on hover), team circular overlay + socials
   (opacity 0→1), package price fade + Join Now fade-in.
9. Tests per section (scenario-style `it` blocks mirroring the spec
   Gherkin), 100% coverage; `npm run verify:app -- lyceum`.
10. PR: `feat: implement Lyceum (ColorLib Learnit)`, description must list
    source template, preview URL, tokens, and renames/placeholder decisions.

## Fidelity notes

- Brand green `#4dbf1c` is the single accent — buttons, active nav, Free
  badge, finance icons, hovers. Do NOT soften it.
- The footer newsletter button is the ONE gradient element: purple-blue
  `#2c28b1 → #9b5cf6` with `background-size: 200% auto` (hover shifts
  position right). Everything else in the footer is flat `#04091e` +
  `#777` links.
- Course overlays are ALWAYS visible (bottom-left, `bottom: 15px`, padding
  `0 35px`) — unlike the team overlay they do not fade in; only the h4
  turns green on hover. Do not hide them behind a hover gate.
- Team photos get a CIRCULAR white overlay (border-radius 50%) with
  centered socials — not a full-card rectangular overlay.
- Testimonial avatar overlaps the card's top border (margin-top -50px) —
  the card has `padding-top` space via `.item { padding-top: 50px }`.
  Keep that overlap; it is the section's signature look.
- Package cards: price `£399.00` (Roboto 30px normal) fades OUT while the
  green "Join Now" button (absolute, `top: -20px`, centered, soft shadow)
  fades IN on card hover. Icon circle flips `#edf8e8` → green with white
  icon. Both states must be covered by tests.
- Hero parallax (stellar `data-stellar-ratio 0.9`) → recreate as a static
  cover background; no parallax library.
- Footer copyright keeps the ColorLib attribution line ("made with <heart>
  by Colorlib") per the other templates' convention.
- lucide-react removed brand icons → inline SVG brand icons (simple-icons
  paths) for Facebook/Twitter/Dribbble/Behance/LinkedIn. Linearicons →
  lucide: rocket → Rocket, earth → Globe, smile → Smile, tag → Tag, users →
  Users, bubble → MessageCircle, user → User, graduation-hat →
  GraduationCap, diamond → Gem, arrow-right → ArrowRight, heart-o → Heart.
- "Lyceum" brand replaces "Learnit"/"Learn IT" everywhere (logo, footer,
  document title).
- All images: `https://picsum.photos/seed/lyceum-<n>/<w>/<h>` — suggested
  seed map: hero banner lyceum-1 (1600×900, cool-tone photo of students —
  add a dark overlay for white text legibility), finance (icons only — no
  images), courses grid lyceum-2..5 (640×420) + sidebar lyceum-6 (420×600),
  team lyceum-7..10 (400×400), testimonial avatars lyceum-11..13 (80×80),
  blog lyceum-14..17 (420×280), impress bg lyceum-18 (1600×700).
- Section paddings: use `py-30` (120px) on courses/team/testimonials/
  packages/blog/impress/footer; finance `py-10` (40px). main_title margins
  `mb-19` (75px) centered max-w-[680px].
