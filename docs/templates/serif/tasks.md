# Serif (ColorLib Sensive) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-serif` by an implementer stream.

## Design notes

- **Original:** ColorLib "Sensive" — free blog website template.
  Source: https://colorlib.com/wp/template/sensive/. TEMPLATES.md has TWO
  copies (lines 286 and 2212 — mark BOTH `[x]` when done).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/sensive/`
  (HTTP 200, 25.0KB) + stylesheet `css/style.css` (26.0KB, SCSS-compiled,
  `@import` Google Fonts `Source+Sans+Pro` + `Lora:400,700`). Full rendered
  DOM extracted; structure below is from the DOM + CSS tokens. Screenshot
  `sensive-free-template.jpg` confirms the visual design: white header with
  dark serif logo + orange active link + small dark social icons; hero photo
  of a mountain landscape with autumn foliage under a cool filter, centered
  white serif text ("Tours & Travels" / "Amazing Places on earth" /
  "December 12, 2018"); 3-up featured cards with a black uppercase label bar
  ("FASHION") on the photo; left main column of large post images with white
  meta bars + black READ MORE buttons (orange arrow); right sidebar on light
  lavender #f9f9ff with orange widget-title underlines; near-black footer.
  Editorial magazine blog aesthetic: Lora serif headlines + Source Sans Pro
  body, orange-on-black accents, sharp radius-0 buttons.
- **Structure observed (1:1):**
  1. `header` → `header_area` (bg #fff; sticky: `.navbar_fixed .main_menu`
     fixed, bg #dddd, shadow 0 3px 16px rgba(0,0,0,.1), slide-down 500ms):
     `navbar-brand logo_h` (img/logo.png) left; `menu_nav` nav — Home
     (active), Archive, Category, Pages ▾ (submenu incl. Blog Details;
     hover: blue gradient #4dabff→#62ddff bg + white text), Contact — Lora
     15px/700 #3a414e, padding 30px 0, active/hover #ff9907; right
     `navbar-social` (4 ti icons: facebook, twitter-alt, instagram, skype,
     13px #222, hover #ff9907) + `search` icon; mobile hamburger.
  2. `hero-banner` (550px, hero-banner.png cover + ::after rgba(1,3,15,0.2)):
     `hero-banner__content` centered — h3 "Tours & Travels" (27px), h1
     "Amazing Places on earth" (mb 12px), h4 "December 12, 2018" (18px),
     all white.
  3. `blog-slider` (owl-carousel, 6 cards): `card blog__slide text-center`
     — img + `blog__slide__content` (padding 30px 15px): label "FASHION"
     (13px #ff9907 uppercase, bg #222, padding 4px 40px, mb 18px), h3
     "New york fashion week's continued the evolution" (#3a414e), p "2 days
     ago" (15px); notch `leftArrow`/`rightArrow` (bg #f5f9fc, hover #222).
  4. `blog-post-area section-margin` (margin 100px 0) → `.row`:
     `col-lg-8` main — 4 `single-recent-blog-post` (mb 60px): `thumb` img +
     `thumb-info` white bar (Admin | January 12,2019 | 2 Comments, 15px
     #777777, mr 22px) + `details` (pt 30px): h3 27px title, `tag-list-inline`
     "Tag: travel, life style, technology, fashion" (Lora #555555), p
     excerpt (#777777), `button` "READ MORE" (bg #222 border #222 color
     #ff9907 uppercase 13px/500 padding 12px 42px radius 0; hover bg #ff9907
     color #000022); `nav.blog-pagination` — Previous / 1 / 2 / Next.
  5. `aside` `sidebar-widgets` → `widget-wrap` (mt 80px): 4
     `single-sidebar-widget` (bg #f9f9ff, padding 48px 30px, mb 30px):
     - newsletter-widget: title "Newsletter" (20px/700 + orange ::after
       underline 4px/20%), p "Stay update with our latest", email input
       (50px, radius 0, placeholder "Enter email") + `bbtns` "SUBCRIBE"
       (bg #222, color #ff9907, uppercase 13px/500, padding 12px 20px).
     - post-category-widget: "Catgory" (sic) — implement as "Category";
       `cat-list` li (white, padding 13px 20px, mb 15px): Technology (03),
       Software (09), Lifestyle (12), Shopping (02), Food (10) — hover:
       shadow + #ff9907.
     - popular-post-widget: "Popular Post"; 3 `single-post-list` — thumb +
       `thumb-info` (Admin | Dec 15) + h6 16px/700 title (hover #ff9907):
       "Accused of assaulting flight attendant miktake alaways",
       "Tennessee outback steakhouse the worker diagnosed" ×2.
     - tag_cloud_widget: original reuses title "Popular Post" (sic) — use
       "Tags" and note in PR; pills (white, padding 3px 21px, mb 10px, mr
       6px, 14px #777777; hover bg #222 color #ff9907): project, love,
       technology, travel, software, life style, design, illustration.
  6. `footer` `footer-area` (bg #000000, padding 70px 0): 4 cols — About Us
     (h6 18px/600 #fff + lorem + Colorlib link), Newsletter (p "Stay update
     with our latest" + input bg #191919 color #555555 width 80% + click-btn
     bg #ff9907 color #222 radius 0 padding 6px 12px arrow), Instragram Feed
     (6 imgs i1..6.jpg), Follow Us (p "Let us be social" + 4 social icons
     #555555 hover #ff9907); `footer-bottom` — copyright bar → repo-standard
     footer credit.
- **Design tokens:**
  - Brand orange **#ff9907**; dark text **#3a414e**; grays #777777 /
    #797979 / #999999 / #555555; blacks #222 (buttons, labels, tag hover) /
    #000000 (footer) / #191919 (footer input) / #000022 (hover text); light
    #f9f9ff (sidebar) / #f5f9fc (slider arrows); submenu gradient #4dabff →
    #62ddff.
  - Fonts: Lora 400/700 (nav, headings, titles, tag-list) + Source Sans Pro
    (body) via Google Fonts `<link>`.
  - Buttons: radius 0 everywhere; READ MORE/SUBSCRIBE = #222 bg + #ff9907
    text, uppercase 13px/500; footer click-btn = #ff9907 bg + #222 text.
  - Hero: 550px, photo + rgba(1,3,15,0.2) overlay, centered white text.
  - Sidebar widgets: #f9f9ff bg, 20px/700 titles with orange underline.
- **Fidelity notes for the implementer:**
  - Carousel: original is Owl Carousel showing 3 cards with arrows; a simple
    auto-advancing index-based carousel (3 visible via overflow) matches.
  - Posts 1–2 and 3–4 share titles in the original (dummy content); the
    implementer may vary titles slightly but should keep 4 posts.
  - Fix the two original typos ("Catgory", duplicated "Popular Post" widget
    title, "Instragram Feed", "SUBCRIBE") with sensible names and note them
    in the PR description.
  - Newsletter + footer newsletter forms submit without reload.
  - Sticky header per repo pattern (transparent → solid on scroll).
  - No ColorLib assets: picsum-seeded images (`picsum.photos/seed/serif-N`),
    lucide-react icons, Google Fonts.

## Task outline (implementer)

1. Clone the simplest existing app (e.g. `apps/uptime`), rename package to
   `@free-react-templates/serif`, register the workspace in
   package-lock.json (npm install at root); `injectUiSource()` in
   vite.config.ts (copy pattern from any existing app).
2. `src/index.css`: `@theme` tokens — brand orange #ff9907, dark text
   #3a414e, grays #777777/#797979/#999999/#555555, blacks #222/#000000/
   #191919/#000022, light #f9f9ff/#f5f9fc, fonts Lora + Source Sans Pro,
   radius-0 buttons.
3. `Header.tsx` (white, sticky on scroll): "Serif" serif logo, nav (home
   active, Archive, Category, Pages dropdown, Contact), 4 social icons +
   search icon, mobile hamburger menu.
4. `Hero.tsx`: 550px banner (picsum photo + dark overlay), centered label /
   headline / date.
5. `FeaturedSlider.tsx`: 3-up carousel of post cards (photo, black label
   chip with orange uppercase text, serif title, meta), prev/next notch
   arrows, auto-advance.
6. `RecentPosts.tsx`: 4 posts (photo + white meta bar Admin/date/Comments,
   serif title, tag links, excerpt, READ MORE button with orange hover).
7. `Pagination.tsx`: Previous / 1 / 2 / Next links.
8. `Sidebar.tsx` (+ `NewsletterWidget.tsx`, `CategoryWidget.tsx`,
   `PopularPostWidget.tsx`, `TagCloudWidget.tsx`): #f9f9ff widgets with
   orange-underlined titles, input + black SUBSCRIBE, 5 categories with
   counts, 3 popular posts with thumbnails, 8 tag pills.
9. `Footer.tsx` (black #000000): About Us, Newsletter (input + orange arrow
   button), Instagram Feed (6 thumbs), Follow Us (social icons), copyright
   bar with repo-standard credit.
10. `App.tsx` composition (order 1:1), document title "Serif — Blog".
11. Tests per component (scenario-style), 100% coverage; run
    `npm run verify:app -- serif`.
12. Commit `feat: serif — blog template (ColorLib Sensive)`, push
    `feat/template-serif`, open + immediately squash-merge PR,
    re-dispatch `Deploy to Surge.sh -f app=serif` if needed, mark BOTH
    `[x]` lines in TEMPLATES.md (286, 2212) with surge URL,
    `npm run readme:status`.
