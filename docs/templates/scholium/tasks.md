# Scholium (ColorLib Onlineedu) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream (stream 3). The spec
> folder `openspec/specs/template-scholium/` is the claim marker —
> implementers start here.

## Design notes (replication findings)

- **Original:** ColorLib "Onlineedu" — online courses / e-learning academy
  site (source: https://colorlib.com/wp/template/onlineedu/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/onlineedu/
  (HTTP 200, full rendered DOM + `assets/css/style.css` (67KB) extracted).
  Screenshot `onlineedu-free-template.jpeg` viewed in browser: light-blue
  hero with curly-haired student photo, indigo #2d3092 accents, dark navy
  headings, lavender-tinted bands, square indigo buttons.
- **Visual design:** clean e-learning landing page. Top utility bar with an
  indigo social block; white main nav with search + Login/Register; large
  light-blue hero (student with laptop photo, headline in dark navy,
  indigo "Get Started"); white categories grid of 6 bordered icon cards;
  patterned counters band (green/blue/green/red numerals); course card grid
  (photo, title, gold stars, price); team grid with social overlays on a
  patterned band; about with layered images; testimonial carousel with
  dashed-circle avatars; blog cards with indigo date badges; very dark
  navy (#0b0b1d) footer with newsletter.
- **Structure (1:1, section order):**
  1. Preloader (skip in recreation; not user-visible content).
  2. Header:
     - Top utility bar: indigo `#2d3092` social block (padding 13px 70px) +
       email **needhelp@gmail.com** + phone **666 7475 25252**; border-bottom
       1px #eeeeee; info text #86878a Josefin Sans 16px.
     - Main bar: logo "Onlineedu" (graduation-cap icon + wordmark, logo block
       bg #f4f4f4) + nav **Home, About, Courses, Instructors, Blog, Blog
       Details, Element, Contact** + **Search Courses** input with circular
       indigo search button + **Login / Register** links. Nav links for the
       SPA: Home, About, Courses, Instructors, Blog, Contact.
  3. Hero slider (`slider-area`): 2 slides, bg `h1_hero.png` (light
     blue-tinted photo), min-height 840px. Left: eyebrow span **Popular
     Online Courses** (color #2d3092, 16px) + h1 **The New Way To Learn
     Properly in With Us!** (65px weight 700, line-height 1.2) + indigo
     **Get Started** button. Right: `heroman.png` student photo (cropped at
     right edge). Carousel dots.
  4. Categories (`categories-area`, white): span "Popular Online Courses" +
     h2 **Lets Brows All Catagori** (typo — fix to "Lets Browse All
     Categories") + 6 cards (`single-cat`, border 1px #ddd, padding
     52px 50px, hover transition .4s): **Web Design, App Development, Video
     Editing, Digital Marketing, Seo Marketing, Content Writing** — each a
     line icon, title (Sen 24px bold #250051), blurb "Sorem hpsum folor
     sixdsft amhtget, consectetur adipiscing el", **Read More >** link.
     Bottom: indigo **Find More Courses** button.
  5. Countdown band (`count-down-area pt-90 pb-60 section-bg`,
     `section_bg01.png` pattern): 4 counters, each an inline SVG icon (72px)
     - colored numeral (Sen 24px uppercase 600) + label — color-green
       #1e9d78, color-blue #2d3092, color-green, color-red #f05510; numerals
       animate (counter-up JS); visible example **1050 + Topics**.
  6. Popular Course (`popular-course section-padding30`): span **Most
     Popular Course Of This Week** + h2 **Our Popular Course** + 3 cards
     (col-xl-4): `course-img` photo, title h4 #250051 30px (**Graphic
     Design, Web Development, Digital Marketing**), 5 gold stars (#FBBA42)
     - **52 Review**, bottom bar (border-top 1px #f9f9f9): user + heart
       counts (ti-user/ti-heart, e.g. 562) + price **Free**.
  7. Team (`team-area pt-160 pb-160 section-bg`, `section_bg02.png`): span
     **More About Our Faculty** + h2 **Our Best Teachers** + 4 cards
     (photo, `team-social` icon overlay bottom, white caption name + role
     **Faculty**): **Alexa Janathon, Janathon Smith, Alexa MacCalum,
     Alexa j Watson** + **View All Faculty** button.
  8. About (`about-area section-padding2`, white): span **More About Our
     Company** + h2 **Want to know more** + paragraph + indigo **More About
     Us** button; right: layered images (`about-img`, `about-font-img`,
     `about-back-img`).
  9. Testimonial (`testimonial-area fix pt-180 pb-180 section-bg`,
     `section_bg03.png`): carousel of 2+ slides — dashed-circle round
     avatar (`testimonial-icon img`: border 3px dashed transparent, radius
     50%), quote "You can't succeed if you just do what others do and
     follow the well-worn path. You need to create a new and original path
     for yourself.", name **Clifford Frazier**, attribution
     **- Colorlib Themes** (→ "- Scholium Themes"), star rating row.
  10. Blog (`home-blog-area section-padding30`): span **Our Latest News
      From Our Blog** + h2 **Latest News From Blog** + 3 cards: photo +
      absolute date badge `blog-date` (bg #2d3092, padding 15px 34px,
      bottom-left, day + month) + title **Footprints in Time is perfect
      House in Kurashiki** + **Read more »** link.
  11. Footer (`footer-area footer-bg`, bg **#0b0b1d**): brand + blurb +
      **Let's Get Social** icons; 4 link columns — **About Us** (Online
      Learning, Careers, Press Center, Become an Instructor), **Campus**
      (Our Plans, Free Trial, Academic Solutions, Business Solutions,
      Government Solutions), **Study** (Admissions Policy, Getting Started,
      Online Application, Visa Information, Tuition Calculator), **Spport**
      (typo — fix to "Support": Support, Contact Us, System Requirements,
      Register Activation Key, Site feedback); **Stay Updated** newsletter:
      email input (border-color #f0e9ff, radius 0, height 50px) + indigo
      subscribe button; `footer-bottom` border-top 1px **#2f344f**,
      copyright **#9fa8c3** weight 300 + Colorlib credit.
- **Design tokens extracted from `style.css`:**
  - Primary **#2d3092** — `.btn` bg, `.header-social`, hero eyebrow span,
    `.blog-date`, `.color-blue` counter, active nav link color.
  - Headings **#030431** (section-tittle h2: 49px weight 600 line-height
    1.3) and **#250051** (category/course titles). Counter accents
    **#1e9d78** / **#f05510**; stars **#FBBA42**.
  - Buttons: bg #2d3092, white text, padding 27px 44px, 16px, letter-spacing
    1px, **radius 0**, hover white sweep via ::before.
  - Fonts: body **Roboto**; section titles **Josefin Sans** (49px);
    category/counter numerals **Sen** (24px bold/600 uppercase).
  - Category card: border 1px #ddd, padding 52px 50px. Course meta #b2b2b2,
    card divider 1px #f9f9f9. Newsletter border #f0e9ff. Footer
    #0b0b1d / #2f344f / #9fa8c3. Bands via `section_bg01/02/03.png`
    patterns (recreate as subtle tinted gradients).
- **Recreation name:** Scholium (distinct from existing education names:
  campus, coursely, syllabus, schola, lyceum, academy names). App folder
  `apps/scholium`, package `@free-react-templates/scholium`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/scholium-<n>/<w>/<h>`); lucide-react icons
  (BookOpen, Users, Award, GraduationCap, Star, User, Heart, Search, Mail,
  Phone, MapPin, ArrowRight, Quote, Instagram, Facebook, Twitter/X,
  Linkedin, Send, ChevronLeft, ChevronRight); Roboto + Josefin Sans + Sen
  via Google Fonts; pattern bands → subtle gradient tints; counters count up
  on scroll (IntersectionObserver); repo-standard Navbar (dark-mode toggle)
  - Footer chrome; reuse `packages/ui` (Button, ButtonLink, Badge, Card,
    cn). Fix original typos ("Lets Brows All Catagori", "Spport").

## Tasks

- [x] Write `openspec/specs/template-scholium/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/scholium` (copy the simplest existing app; rename package
      to `@free-react-templates/scholium`; `npm install` at root for lockfile;
      register `injectUiSource()` in vite.config.ts).
- [ ] TDD: tests first for Navbar, HeroSlider, Categories, Counters,
      PopularCourses, Team, About, Testimonials, Blog, Footer, App
      composition — all green at 100% coverage.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `scripts/verify-app.sh scholium` (typecheck + lint +
      knip + fallow + 100% coverage tests + build).
- [ ] Push `feat/template-scholium`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main).
