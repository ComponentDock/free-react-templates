# Edify (ColorLib Courses) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-edify`.

## Source mapping

- **ColorLib item:** "Courses" (TEMPLATES.md — TWO copies, lines 366,
  1626; mark ALL `[x]` when done).
- **Source URL:** https://colorlib.com/wp/template/courses/
- **Preview URL:** https://preview.colorlib.com/theme/courses/
  (HTTP 200, ~40 KB DOM — live, analyzed 2026-08-10).
- **Category:** Bootstrap (216) — online-learning / education platform
  landing page.

## Reference research (done — do not redo)

### Screenshot (`courses-free-template.jpg`, 1200×946 AVIF; verified via vision)

Modern e-learning landing page. Sticky nav over a vibrant purple/indigo
gradient hero (periwinkle → magenta/purple). Logo: open-book icon + wordmark
"Courses" left; centered links Home, Courses, About, Blog, Contact; right:
orange "Join Now" button + outlined "Log In" button. Hero: headline "Online
learning platform" in large white bold text, subtext "Build skills with
courses, certificates, and degrees online from world class universities and
companies.", orange "Join for Free" CTA; right side flat vector illustration
(person pointing at a giant laptop screen with a play button, floating books
and abstract shapes). Below: 3 white rounded cards — "60+ UX courses" /
"Expert instructors" / "Life time access" (document, person, clock icons).
Then "Our featured courses" centered dark heading + course card row (photos:
smartwatch, VR controller, etc., category "User Experience"). High-contrast
purple + orange + white; Josefin Sans feel.

### Live DOM (primary reference — matches the screenshot)

Section order (all confirmed in `preview.colorlib.com/theme/courses/`):

1. `div.header-area.header-transparent` → `div.header-bottom.header-sticky` —
   logo + wordmark left; menu Home, Courses, About, Blog (with dropdowns
   Blog/Blog Details/Element), Contact; right "Join" (orange `.btn`) +
   "Log in". `.header-sticky.sticky-bar` → gradient
   `linear-gradient(#c054ff 0%, #5274ff 100%)`; mobile slicknav menu.
2. `section.slider-area` → `div.single-slider.slider-height` (min-height
   854px; bg image `../img/hero/h1_hero.png`, cover) → `div.hero__caption`:
   h1 60px/700 white "Online learning platform", p 18px white subtext,
   "Join for Free" `a.btn` (bg `#FF9F67`, radius 5px, padding 25px 38px).
3. `div.services-area` → 3 × `div.single-services.mb-30` (white, radius
   20px, shadow `0 25px 60px rgba(66,85,164,0.06)`, padding 29px 24px,
   flex): `div.features-icon` + `div.features-caption` h3 "60+ UX
   courses"/"Expert instructors"/"Life time access" + p (17px,
   `#4255A4`).
4. `div.courses-area.section-padding40.fix` — `div.section-tittle
text-center.mb-55` h2 "Our featured courses" (42px/600); `div.courses-
actives` (owl carousel) → 4 × `div.properties.pb-20` >
   `div.properties__card` (radius 10px, shadow
   `0 6px 6px rgba(2,25,65,0.08)`): `div.properties__img.overlay1` (img
   radius `10px 10px 0 0`, dark overlay on hover), `div.properties__caption`
   (category p span `#C86FFF`, h3 title "Fundamental of UX for Application
   design", p blurb `#6E7697`), `div.properties__footer` (rating stars
   `#FF7B2E` "(4.5) based on 120", price span "$135" 23px/700 `#4255A4`),
   "Find out more" `a.border-btn.border-btn2` (1px `#E2E4FF`, `#4255A4`,
   full width; hover fill `#FF9F67`).
5. `section.about-area1.fix.pt-10` — split: `div.left-content1`:
   `div.about-icon` (80px, radius 50px, gradient `#eae2fe`→`#ec7dfe`),
   `div.section-tittle.section-tittle2` h2 "Learn new skills online with
   top educators", 3 × `div.single-features` (icon + caption; h3 25px, p
   16px `#4255A4`); `div.right-content1`: `div.right-img` + `div.video-icon`
   `a` (bg `#FF9F67`, 60px, radius 50%, white ripple ring animation).
6. `div.topic-area.section-padding40` — `div.section-tittle text-center
mb-55` h2 "Explore top subjects"; `div.row` of 8 × `div.single-topic
text-center.mb-30` (col-lg-3; radius 12px; hover ::before overlay
   `rgba(66,85,164,0.7)`): `div.topic-img` + `div.topic-content-box` >
   `div.topic-content` h3 a white uppercase 20px/700 (subject name);
   below: `div.col-xl-12` + `div.section-tittle text-center.mt-20` →
   "View More Subjects" `a.border-btn2` (full-width border button).
7. `section.about-area3.fix` — split flipped: `div.right-content3`
   (image) + `div.left-content3`: h2 "Learner outcomes on courses you will
   take" + 3 × `div.single-features` (icon + caption).
8. `section.team-area.section-padding40.fix` — `div.section-tittle
text-center.mb-55` h2 "Community experts"; `div.team-active` (carousel)
   → 5 × `div.single-cat.text-center` (`div.cat-icon` avatar + `div.cat-cap`
   h5 name 24px/600 `#4255A4` — Mr. Urela, Mr. Uttom, Mr. Shakil, Mr.
   Arafat, Mr. saiful + p blurb `#57667e`).
9. `section.about-area2.fix.pb-padding` — split: `div.right-content2`
   (image) + `div.left-content2`: h2 "Take the next step toward your
   personal and professional goals with us." + p + "Join now for Free"
   `a.btn` (orange).
10. `div.footer-wrappper.footer-bg` (bg `#4255A4`) → `div.footer-area
footer-padding` (100px top): col 1 logo + blurb + `div.footer-social`;
    3 × `div.single-footer-caption` with `div.footer-tittle` "Our
    solutions" / "Support" / "Company" (links: Design & creatives,
    Telecommunication, Restaurant, Programing, Architecture);
    `div.footer-bottom-area` → `div.footer-copy-right.text-center`
    copyright bar.

## Design tokens (from preview assets/css/style.css)

- Fonts: Josefin Sans (headings; h2 42px/600/1.3, h1 60px/700, weight
  400–700) + Mulish (body 16px, line-height 30px).
- Brand violet `#C86FFF` (boxed-btn, back-top, blog date badge, course
  category, submenu hover); shades `#AE59FF` (btn hover sweep), `#c054ff` →
  `#5274ff` (sticky gradient).
- Indigo `#4255A4` (headings, footer bg, caption p, course title/price,
  topic overlay rgba(66,85,164,.7), team name); `#415094` darker variant;
  navy `#1F2B7B` (strong text).
- Accent orange `#FF9F67` (.btn, video play, border-btn); stars `#FF7B2E`.
- Light lavenders `#F9F9FF` / `#F0E9FF` / `#FBF9FF`; body text `#10285D`;
  muted `#6E7697`, team `#57667E`, meta `#999999`/`#888888`.
- Buttons: `.btn` orange radius 5px padding 25px 38px weight 600;
  `.boxed-btn` 1px `#C86FFF` uppercase letter-spacing 3px padding 18px
  44px; `.border-btn` 1px `#FF9F67` radius 5px; `.border-btn2` 1px
  `#E2E4FF` `#4255A4` full-width, hover fill `#FF9F67`.
- Cards: services radius 20px shadow `0 25px 60px rgba(66,85,164,.06)`;
  course radius 10px shadow `0 6px 6px rgba(2,25,65,.08)`, img radius
  `10px 10px 0 0`; topic radius 12px; about-icon 80px radius 50px gradient
  `#eae2fe`→`#ec7dfe`; video btn 60px radius 50% `#FF9F67`.
- Sections: `section-padding40` 100px top/bottom; footer-padding 100px
  top/13px bottom; hero min-height 854px; section-tittle h2 42px/600
  centered mb-55 (27–31px mobile).

## Implementation outline (section order 1:1)

1. **Navbar** — transparent over hero; open-book logo (lucide `BookOpen`)
   - "Edify" wordmark; links Home, Courses, About, Blog, Contact; orange
     "Join Now" Button + outlined "Log in" ButtonLink; sticky → gradient
     `#c054ff`→`#5274ff`; mobile hamburger with aria-expanded.
2. **Hero** — gradient/illustration bg (dark violet gradient + picsum
   hero image or composed art), h1 "Online learning platform" (white,
   bold), subtext, orange "Join for Free" Button; illustration right
   (picsum `seed/edify-hero/700/600`), stacks on mobile.
3. **Services** — 3 white rounded Cards (radius 20px, soft indigo shadow):
   lucide icons (FileText / UserCheck / Clock-3 or similar), titles, blurb.
4. **Featured courses** — centered "Our featured courses"; 4 Cards
   (image `seed/edify-course-<n>/600/400`, category in violet, title,
   blurb, star rating `#FF7B2E` + count, price `#4255A4` bold, "Find out
   more" border button); carousel controls or responsive grid.
5. **Learn new skills** — split: left icon (gradient rounded square) +
   h2 + 3 bullet rows (lucide icons + caption); right image + circular
   orange play ButtonLink (aria-label, ripple ring optional).
6. **Explore top subjects** — centered h2; 8 image cards (col-3 grid,
   uppercase white title overlay, hover indigo overlay radius 12px); full-
   width "View More Subjects" border button.
7. **Learner outcomes** — flipped split: image left, h2 + 3 bullet rows
   right.
8. **Community experts** — centered h2; 5 member cards (avatar initials
   or picsum portrait, name, blurb); carousel or grid.
9. **CTA** — split: h2 "Take the next step…" + paragraph + orange "Join
   now for Free" Button; image right.
10. **Footer** — `#4255A4`; brand + blurb + inline-SVG social icons;
    "Our solutions" / "Support" / "Company" link columns; copyright bar
    (paraphrase credit, no Colorlib).

## Fidelity notes

- Match the live DOM exactly: section order 1:1, violet `#C86FFF` + indigo
  `#4255A4` + orange `#FF9F67` palette, Josefin Sans/Mulish, white rounded
  cards, orange CTAs.
- Never use "Courses" as the brand; brand is "Edify".
- Placeholders: `picsum.photos/seed/edify-<n>/<w>/<h>` (hero 700×600,
  courses 600×400, topics 400×300, team 200×200).
- Icons: lucide-react (BookOpen, Menu, X, FileText, UserCheck, Clock,
  Star, Play, ChevronDown/Left/Right, ArrowRight, social fallbacks).
- Carousels (courses, team) may be static responsive grids — layout must
  not depend on JS animation; add prev/next only if trivial.
- Video play button is decorative (no real video).
- Footer contact/link data is placeholder text; paraphrase the "made with"
  credit, drop Colorlib attribution.
- TEMPLATES.md: item appears TWICE (lines 366, 1626) — implementer marks
  BOTH `[x]`.

## Commit + PR conventions

- Prep commit (this): `docs: prep Edify (ColorLib Courses) spec + research`.
- Implementation branch: `feat/template-edify`; PR title: `feat: Edify —
online learning template (ColorLib Courses)`.
- PR body: source URL, preview URL (200), tokens, differences (rename,
  placeholders, single-page anchors), TEMPLATES.md two-copy note (lines
  366 / 1626).
- After merge: surge URL `https://free-react-templates-edify.surge.sh`,
  TEMPLATES.md `[x]` on BOTH copies, `npm run readme:status`.
