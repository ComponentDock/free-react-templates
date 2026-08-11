# Folium (ColorLib Papers) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream (stream 3). The spec
> folder `openspec/specs/template-folium/` is the claim marker —
> implementers start here.

## Design notes (replication findings)

- **Original:** ColorLib "Papers" — business / blog landing page (source:
  https://colorlib.com/wp/template/papers/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/papers/
  (HTTP 200, full rendered DOM + `css/style.css` (66KB) extracted).
  Screenshot `papers-free-template.jpg` viewed in browser: transparent dark
  navbar over a full-width hero photo (smiling woman with curly hair
  holding a phone, olive/teal overlay), white 50px headline, thin Rubik
  body text, mint-green #4ECCA3 accents, mint quote band, flip-card
  testimonials, WHITE footer (`.ftco-footer { background: #fff }` wins over
  `.ftco-bg-dark` — verified visually in the live preview).
- **Visual design:** clean minimalist business landing. Transparent navbar
  over hero photo → white intro statement → split image+text with play
  button → #fafafa quote band with mint quote overlay → 3 flip-card
  testimonials → 6 services icon cards → #fafafa blog cards → white footer.
  Square buttons, weight-300 Rubik typography, mint #4ECCA3 single accent.
- **Structure (1:1, section order):**
  1. Navbar (`navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark
ftco-navbar-light`, transparent absolute top 10px over hero): brand
     "Papers" → **Folium**; nav **Home, What We Do, The Journal, Who We
     Are, Plans & Pricing, Contact**; mobile toggler "Menu". Scrolled
     state: fixed, bg #fff, shadow 0 0 10px rgba(0,0,0,.1), links #000,
     active #4ECCA3. Link color #f0f0f0, 16px, padding 30px 20px.
  2. Hero (`ftco-cover`, bg `images/bg_1.jpg`, min-height 700px): h1
     "We create awesome templates for you." (white 50px weight 300,
     37px <992px) + subheading "A free template for Business Websites by
     Colorlib" (rgba(255,255,255,.7), weight 300, max-width 450px) +
     `btn btn-outline-white px-4 py-3` "Go Get This Template" (→ rename
     "Get Started"; original opens a reservation modal — recreate as
     scroll anchor or plain button).
  3. Intro (`ftco-section` #section-about, white, padding 7em 0): thin h1
     "For busy business professionals — A small river named Duden flows by
     their place…".
  4. Split block 1 (`ftco-section-2`, container-fluid, `row no-gutters`):
     left `img col-md-5` bg `image_4.jpg` + circular play button
     (`.button.popup-vimeo`, ion-ios-play; vimeo 45830194 — in SPA open a
     video modal with placeholder embed or link out); right
     `text col-md-6 col-lg-7` (padding 10% 7% ≥768px): h3 "Far far away,
     behind the word mountains" (margin-bottom 50px) + 2 paragraphs.
  5. Split block 2 (`section-2-blocks-wrapper-2`, row bg **#fafafa**):
     left `text col-md-5 col-lg-5 col-xl-4 ml-auto` (padding 30px 15px):
     2× (h4.text-primary "Far far away, behind the word mountains" +
     paragraph mb-4); right `img col-md-5` = `image` div (bg
     `image_5.jpg`, height 500px, margin-top/-left -70px desktop overlap)
     - `quote` div on top: bg **#4ECCA3**, color #000, font-size 24px,
       padding 80px, quote + `.author` "— Mellissa Clark" 16px.
  6. Testimonials (`ftco-section` white, h2 centered "Testimonials"):
     3 flip-cards (`.flip-container`, 427px tall, radius 4px, perspective
     1000, hover rotateY 180deg .6s; mobile shows back by default):
     - front: bg image (`image_5.jpg`/`image_6.jpg`/`image_7.jpg`) +
       bottom gradient `linear-gradient(transparent 18%, rgba(0,0,0,.8)
99%)` + `.box` bottom-left (left/right/bottom 20px): h2 name 20px
       white + p role 12px white.
     - back: bg #fff, shadow 0 0 70px -10px rgba(0,0,0,.4), centered
       quote p 18px (top 40px, padding 0 20px) + `.author` row (bottom 20px,
       left/right 20px): 40px round avatar img + name + `.position` 12px.
     - cards: **Mellissa Clark / Web Designer**, **Louise Kelly /
       Illustrator Designer**, **Aldin Powell / Web Developer**.
  7. What We Do (`ftco-section` white, h2 centered "What We Do"): 6
     `media block-6` cards (col-md-6 col-lg-4, mb-30): `.icon` (flaticon
     50px + `span.bg-after:after` 40px circle bg **#9de3cc**, z-index -1,
     margin-right 30px) + `.media-body`: h3.heading 20px + p 16px.
     Titles repeat: **Creative Performance, Reach Performance, Custom
     Development** ×2 (flaticon: bank, career, lightbulb, pie-chart,
     handshake, presentation → lucide equivalents).
  8. Our Blog (`ftco-section bg-light` = **#fafafa**, h2 centered "Our
     Blog"): 3 `block-5` cards (col-md-6 col-lg-4, height 500px, bg image
     `image_10.jpg`/`image_8.jpg`/`image_9.jpg`, bottom gradient overlay):
     absolute bottom text (padding 20px): `.subheading` "Travel" (white,
     12px uppercase, letter-spacing .1em, opacity .6) + h3.heading 20px
     bold white + `.post-meta` (12px uppercase, opacity .6): "Wellie
     Clark" + "March 20, 2018". Hover: white panel (`text:before` bg #fff)
     slides up and all text turns #000.
  9. Footer (`ftco-footer ftco-bg-dark ftco-section` → renders WHITE bg,
     border-top 1px #eeeeee, padding 8em 0): `col-md-8` 3 link columns —
     **The Restaurant** (About Us, Chefs, Events, Contact), **Communities**
     (Support, Sharing is Caring, Better Web, Good Template), **Useful
     links** (Bootstrap 4, jQuery, HTML5, Sass) — h2.ftco-heading-2 18px
     bold #000, links rgba(0,0,0,.3) 16px, hover #4ECCA3; `col-md-4`
     social circles (60px, bg rgba(255,255,255,.05), radius 50%, icon
     26px): twitter, facebook, instagram; centered copyright "made with ♥
     by Colorlib".
- **Design tokens extracted from `style.css`:**
  - Primary **#4ECCA3** (mint) — body link color, `.text-primary`,
    `.btn-primary` bg/border, quote block bg, footer link hover, active
    scrolled nav link. Lighter mint **#9de3cc** behind service icons.
  - Headings **#000**, weight 300, line-height 1.5; hero h1 white 50px.
  - Body **Rubik**, weight 300, 16px, line-height 1.8.
  - Buttons radius 0 (square), no shadow; `.btn-outline-white`: 2px border
    rgba(255,255,255,.8), hover → bg #fff + text #000; `.btn-primary`:
    bg #4ECCA3, 2px border, text #000, hover → transparent + mint text.
  - Bands: white default; **#fafafa** (`.bg-light`, quote band).
  - Flip-card front gradient + blog card overlay: transparent → rgba(0,0,0,.8).
  - Loader stroke #F96D00 (skip; preloader not user-visible).
- **Recreation name:** Folium (Latin "leaf of paper" — no collision with
  apps/ or spec folders). App folder `apps/folium`, package
  `@free-react-templates/folium`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/folium-<n>/<w>/<h>`); lucide-react icons (Play,
  Quote, TrendingUp, Target, Code, PieChart, Handshake, Presentation,
  Twitter, Facebook, Instagram, Heart); Rubik via Google Fonts; navbar
  scroll listener for transparent→white fixed; play button opens video
  modal (embedded placeholder) or links out; footer stays white with
  same-kind link columns (rename "The Restaurant" heading in spirit);
  repo-standard Navbar (dark-mode toggle) + Footer chrome from
  `packages/ui` (Button, ButtonLink, Badge, Card, cn); original Lorem
  Ipsum copy paraphrased, same content kinds; no assets copied.

## Tasks

- [x] Write `openspec/specs/template-folium/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/folium` (copy the simplest existing app; rename package
      to `@free-react-templates/folium`; `npm install` at root for lockfile;
      register `injectUiSource()` in vite.config.ts).
- [ ] TDD: tests first for Navbar, Hero, Intro, SplitBlock (play button),
      QuoteBand, Testimonials (flip cards), Services, Blog, Footer, App
      composition — all green at 100% coverage.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `scripts/verify-app.sh folium` (typecheck + lint +
      knip + fallow + 100% coverage tests + build).
- [ ] Push `feat/template-folium`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main).
