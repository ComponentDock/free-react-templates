# Faculty (ColorLib Universityedu) — Tasks & Design Notes

> Recreation of ColorLib "Universityedu"
> (https://colorlib.com/wp/template/universityedu/) under the NEW name
> **Faculty** (university-themed word; single lowercase word, no collision
> with `apps/`, `openspec/specs/`, `docs/templates/` or TEMPLATES.md —
> verified 2026-08-14), per the monorepo naming mandate (never reuse the
> ColorLib source name). TEMPLATES.md: primary row in Bootstrap 5 (89) at
> line 633; duplicate row in Education (43) at line 1659 (both `- [ ]`).

## Design notes (replication findings)

- **Original:** ColorLib "Universityedu" — free HTML5 UNIVERSITY / EDUCATION
  template (dark announcement top-bar with countdown, white sticky header,
  750px dark-photo hero, cream about split, programs cards, mint resources
  split, stories grid, partners strip, green CTA band, navy footer). The
  recreation brands itself **Faculty**.
- **Live preview analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/universityedu/` — HTTP 200, ~28.7 KB
  HTML + `assets/css/style.css` ~103 KB (curl; Bootstrap 5 + owl.carousel +
  slicknav + fontawesome + themify + countdown). The TEMPLATES.md
  screenshot (`universityedu-colorlib-template.jpg`, 1200×946, viewed in
  browser) matches the live render: dark countdown bar, white header,
  dark student-photo hero with green button, cream about split.
- **Visual design (screenshot):** clean professional education landing.
  Dark navy top bar (countdown "30 days 12 37 04" + "ENDS TOMORROW! Join
  Teachable for $4,800 in bonus content"); white header (serif
  UNIVERSITY/EDUCATION logo, centered menu, "Call Us" phone + socials
  right); hero = dark photo of a student with a folder outside a brick
  building under a heavy dark gradient, white "EDUCATION & SCHOOL"
  eyebrow + huge bold "SHOWCASE COURSES, EVENTS AND MORE!" + solid green
  rectangular "Get Started Now"; cream `#FCF2EB` split below (portrait
  left, "A comprehensive teaching approach" + 2 paragraphs + underlined
  green "Learn More" right). Single green accent `#007A5C`; navy `#32404D`
  text/dark bands; band rhythm white → cream → white → mint → white →
  white → green → navy.
- **Section order (1:1, verified from live DOM):**
  1. **Header** — `div.header-area`:
     - **Announcement bar** `div.header-top` (bg `#32404D`, padding 13px
       0; centered flex): `header-info-left` "ENDS TOMORROW:" (span) +
       "Join Teachable for $4,800 in bonus content"; `cd-timer#countdown`
       4 × `cd-item` (span number + p label: 40 Days · 18 Hours · 46
       Minutes · 32 Seconds; numbers `#00AC82` 20px, labels
       `rgba(255,255,255,0.7)` 14px 300); right `browse-btn browse-btn2
       ml-40 d-none d-sm-block` "Learn More" (white underline link).
       Countdown runs live via `$("#countdown").countdown(timerdate, …)`.
     - **Main header** `div.main-header` (white): `logo` (logo.png) +
       `main-menu d-none d-lg-block` nav (Home · About · Programs · Blog ▾
       [Blog, Blog Details, Elements] · Contact) + `header-right-btn`:
       `header-btn2 d-none d-xl-inline-block` "Call Us : 0 (78) 675 3674"
       (plain text — no tel: link) + `header-social d-none d-sm-block`
       (fontawesome facebook-square/twitter/linkedin/youtube …).
     - Sticky: `.sticky-bar` fixed top z 9999 shadow
       `0 10px 15px rgba(25,25,25,0.1)`.
  2. **Hero** — `slider-area position-relative` > `slider-active` >
     `single-slider slider-height hero-overly slider-bg1` (ONE static
     slide; 750px; bg `hero/h1_hero1.jpg`; overlay `rgba(50,64,77,0.3)`):
     `hero-caption` span "EDUCATION & SCHOOL" (white 24px) · h1 "SHOWCASE
     COURSES, EVENTS AND MORE!" (white 54px 900) · p lorem (white 20px) ·
     `btn_1 hero-btn` "Get Started Now" (green square, 18px, padding
     11px 20px, capitalize).
  3. **About** — `about-area section-bg section-padding` (bg `#FCF2EB`,
     100px py): `row align-items-center` — `about-img about-img1` left
     (about1.jpg) + `about-caption` right (`section-tittle m-0`: h2 "A
     comprehensive teaching approach" 40px 900 uppercase + 2 paragraphs +
     `browse-btn mt-20` "Learn More").
  4. **Programs** — `home-blog section-padding` (white): centered
     `section-tittle text-center mb-40` h2 "Programs we Offer" + p; 2 ×
     `col-lg-6` `single-blogs mb-30` cards: `blog-img` (blog1.jpg /
     blog2.jpg) + `blog-caption` h3 "Faculty of Science" / "Faculty of
     Arts" (26px 600 `#32404D`) + p + `browse-btn` "Learn More".
  5. **Essential resources** — `visit-three fix` (bg `#F2FBF9`, flex
     align-center): left `tailor-details` (width 74%, padding
     20px 40px 20px 268px desktop): `section-tittle mb-40` h2 "Essential
     resources" + p; 3 × `single-gallery mb-15` → `thumb-content-box
d-flex` → `thumb-content`: `capt` h3 "First year students" ·
     "Tuition & fees" · "International students" (24px 400) + p +
     `ti-angle-right` link (lucide ChevronRight); right `visit-team` (bg
     visit1.jpg, cover, 752px, 57% width) + `wrapper` ::after `#FFF6EE`.
  6. **Top Stories** — `class-offer-area section-padding border-bottom`
     (white, `container-fluid`): `section-tittle d-flex justify-content-
between` h2 "Top Stories" + `browse-btn mb-20` "More Stories"; 3 ×
     `col-lg-4` `properties pb-30` → `properties__card`:
     `properties__img` (class-img1..3.jpg) + `properties__caption
text-center` (padding 26px 18px 8px 22px) h3 title. Source repeats
     the SAME title ×3 ("Linguistics alumna says recognizing Indigenous
     Languages Day is crucial to our histories") → paraphrase 3 distinct
     university-story headlines.
  7. **Partners** — `brand-area section-padding` (white): centered
     `section-tittle text-center mb-60` h2 "Our Pertners" (TYPO → "Our
     Partners") + p; 6 × `single-brand` logos (brand1..4.png, some
     repeated → use 4–6 distinct).
  8. **CTA** — `visit-one fix` (bg `#007A5C`, flex align-center): left
     `visit-team` (bg + wrapper overlay) + right `tailor-details`:
     `section-tittle section-tittle2 mb-25` h2 "TRUSTED BY OVER 6000+
     STUDENTS" (white; p `#C9D6CB` 20px ×2) + `browse-btn browse-btn2
mt-20` "Join Now" (white underline).
  9. **Footer** — `footer-wrapper` (bg `#32404D` — HTML class `gray-bg`
     overridden) > `footer-area footer-padding` (100px pt / 50px pb):
     `row justify-content-between`:
     - logo col (`col-xl-2`, logo2_footer.png);
     - Quick Links (Work · Services · Products · Tips & Tricks →
       paraphrase education links);
     - Programs (Air freight · Ocean freight · Large projects → paraphrase
       e.g. Undergraduate · Postgraduate · Online Courses);
     - Resources (TYPO "Resourses" → "Resources": FAQ · Submit Ticket ·
       Contact Us);
     - Newsletter: h4 + "Subscribe newsletter to get updates." +
       `footer-form` input (white, 60px, padding 10px 20px, radius 0,
       color `#5C6168`, placeholder "Enter your email") + `form-icon`
       button (green `#007A5C`, padding 21px 30px, 60px, radius 0).
     - **Copyright** `footer-bottom-area` > `footer-copy-right
text-center`: "Copyright ©{year} All rights reserved | This
       template is made with ♥ by ColorLib" → MUST become the Component
       Dock line (link `https://www.componentdock.com/`).
  10. **Back-to-top** — `#back-top` fixed bottom-right (right 31px bottom
      18px) 50px circle green `#007A5C` (chevron-up).
- **Key CSS selectors (style.css):** `body`/`h1..h6` (Chivo), `.header-top`
  (bg #32404D, padding 13px 0), `.cd-item span` (#00AC82 20px), `.cd-item
p` (rgba(255,255,255,0.7) 14px 300), `.slider-height` (750px),
  `.hero-overly` (rgba(50,64,77,0.3)), `.slider-bg1` (bg hero/h1_hero1.jpg),
  `.hero-caption h1` (white 54px 900), `.hero-caption span` (white 24px),
  `.hero-caption p` (white 20px), `.section-bg` (#FCF2EB), `.section-tittle
  > span`(#007A5C 16px capitalize),`.section-tittle h2`(#32404D 40px 900
uppercase lh 1.2),`.section-tittle p`(#777777 18px),`.section-tittle.section-tittle2 h2`(white) /`p`(#C9D6CB 20px),`.btn_1`(bg #007A5C, radius 0, padding 11px 20px, 18px, capitalize;
hover: bg none + 1px solid #fff),`.browse-btn`(#007A5C 16px 500;
::before 2px #007A5C underline bottom -7px; hover letter-spacing 1px),`.browse-btn.browse-btn2`(white + white underline),`.visit-three`(#F2FBF9 flex),`.visit-one`(#007A5C flex),`.visit-team`(bg visit1.jpg
cover 752px 57%),`.tailor-details`(width 74%, padding 20px 40px 20px
268px),`.properties__caption`(padding 26px 18px 8px 22px),`.footer-wrapper`(bg #32404D),`.footer-tittle h4`(white 20px 600),`.footer-tittle ul li a`(#A7AEB4 16px; hover #007A5C + underline),`.footer-area .footer-form form input`(white 60px radius 0 #5C6168),`.footer-area .footer-form .form-icon button`(green #007A5C 60px padding
21px 30px radius 0),`#back-top`(50px circle green),`.sticky-bar`
  > (shadow 0 10px 15px rgba(25,25,25,0.1)).

## Design tokens (summary)

- Brand green: `#007A5C` (buttons, underline links, CTA band, newsletter
  button, back-to-top, footer link hover) · countdown numbers `#00AC82`.
- Navy ink: `#32404D` (headings, top bar, hero overlay
  `rgba(50,64,77,0.3)`, footer bg).
- Bands: cream `#FCF2EB` (about) · mint `#F2FBF9` (resources) · white
  (programs/stories/partners) · green `#007A5C` (CTA) · navy `#32404D`
  (footer). Optional: `#EFF6F0` brand-bg, `#305534` section-bg2.
- Text: body `#5D646A` 16px lh 1.6 · intro `#777777` 18px · footer links
  `#A7AEB4` 16px · newsletter input `#5C6168` · CTA intro `#C9D6CB` 20px.
- Font: Chivo (300/400/700/900) — Google Fonts `<link>` in index.html.
- Buttons: sharp (radius 0); solid green `btn_1` (18px, 11px 20px,
  capitalize, hover outline); `browse-btn` green underline link (2px bar,
  hover letter-spacing 1px) / `browse-btn2` white on dark bands.
- Spacing: section-padding 100px (70px mobile); section-tittle mb-40/60;
  cards mb-30.

## Tasks / todo outline (implementation order)

- [ ] Scaffold `apps/faculty` (copy simplest existing app, rename package
      to `@free-react-templates/faculty`, register in root
      `package-lock.json` via `npm install`, `injectUiSource()` in
      vite.config.ts).
- [ ] `src/index.css`: `@theme` tokens — `--color-brand: #007A5C`,
      `--color-brand-bright: #00AC82`, `--color-ink: #32404D`,
      `--color-cream: #FCF2EB`, `--color-mint: #F2F9F9` (#F2FBF9),
      `--color-body: #5D646A`, `--color-muted: #777777`,
      `--color-footer-link: #A7AEB4`; Chivo via Google Fonts `<link>` in
      `index.html`.
- [ ] Components (one per section, colocated tests):
  - [ ] `AnnouncementBar.tsx` — navy bar: "ENDS TOMORROW:" + offer text,
        live `Countdown` (Days/Hours/Minutes/Seconds, numbers `#00AC82`),
        "Learn More" white underline link (hidden <576px). Countdown:
        target = fixed future date (e.g. load + 30 days); fake-timer
        tests.
  - [ ] `Header.tsx` — white sticky bar (sticky + shadow on scroll): logo
        "Faculty" wordmark, desktop nav Home/About/Programs/Blog(submenu:
        Blog, Blog Details, Elements)/Contact, phone text "Call Us :
        0 (78) 675 3674" (plain text, NO tel: literal), social inline-SVG
        brand icons (hidden ≤575px), mobile menu control <lg.
  - [ ] `Hero.tsx` — 750px photo hero with dark overlay: eyebrow
        "EDUCATION & SCHOOL", h1 "SHOWCASE COURSES, EVENTS AND MORE!",
        paragraph, green "Get Started Now" button.
  - [ ] `About.tsx` — cream `#FCF2EB` split: photo left, "A comprehensive
        teaching approach" + 2 paragraphs + "Learn More" underline link
        right.
  - [ ] `Programs.tsx` — centered "Programs we Offer" + intro; 2-col grid
        of "Faculty of Science" / "Faculty of Arts" cards (photo + title +
        text + "Learn More").
  - [ ] `Resources.tsx` — mint `#F2FBF9` split: left "Essential resources" + 3 rows (First year students / Tuition & fees / International
        students, each text + ChevronRight link), right photo + overlay.
  - [ ] `Stories.tsx` — "Top Stories" + "More Stories" header row; 3-col
        grid of story cards (photo + centered title; 3 DISTINCT titles).
  - [ ] `Partners.tsx` — centered "Our Partners" (fixed typo) + intro +
        ≥4 logo placeholders in a row.
  - [ ] `CtaBand.tsx` — green `#007A5C` split: photo side + "TRUSTED BY
        OVER 6000+ STUDENTS" white heading, 2 paragraphs, "Join Now" white
        underline link.
  - [ ] `Footer.tsx` — navy `#32404D`: logo + Quick Links + Programs +
        Resources (fixed typo) + Newsletter (email input + green subscribe
        button → success state) + copyright bar "Copyright ©{year} All
        rights reserved | Made with ♥ by Component Dock"
        (https://www.componentdock.com/).
  - [ ] `BackToTop.tsx` — circular green fixed button bottom-right
        (ChevronUp), appears on scroll.
- [ ] `App.tsx` — compose in exact order: AnnouncementBar → Header → Hero →
      About → Programs → Resources → Stories → Partners → CtaBand →
      Footer → BackToTop.
- [ ] Tests: one `describe` per component mirroring the spec scenarios;
      countdown via fake timers; sticky header scroll state; newsletter
      submit → success (queryByLabelText absent); footer Component Dock
      link + no ColorLib string; 100% coverage.
- [ ] Placeholder images: `https://picsum.photos/seed/faculty-<n>/<w>/<h>`.
      Subject-critical seeds (hero student scene, about portrait, resource
      photo, story photos) — screen per the seed-screening method in the
      colorlib-template-replication skill.
- [ ] Icons: lucide-react (ChevronRight, ChevronUp, Menu, Send); social
      brand icons as inline SVG (probe every icon import with the typeof
      check — brand icons were removed from lucide).
- [ ] `scripts/verify-app.sh faculty` green (typecheck + lint + knip +
      fallow + vitest 100% + build).
- [ ] PR: branch `feat/template-faculty`, description with source template
      (ColorLib Universityedu), preview URL, design tokens, differences
      (renames, picsum placeholders `faculty-<n>`, paraphrased copy, fixed
      source typos "Our Pertners"/"Resourses", 3 distinct story titles);
      merge immediately (`gh pr merge --squash`), verify deploy + curl
      bundle.
