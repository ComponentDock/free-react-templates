# Iris (ColorLib "Flash") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-iris` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Flash" — photography portfolio template (source:
  https://colorlib.com/wp/template/flash/). Listed in TEMPLATES.md
  (Bootstrap section, line 400; duplicate at line 2447 under Photography —
  mark EVERY copy `[x]` when done).
- **Preview URL:** https://preview.colorlib.com/theme/flash/ — reachable
  (HTTP 200, 18.1 KB, title "Flash Photography"). Fetched:
  `/tmp/flash-preview.html`, `css/style.css` (62.5 KB →
  `/tmp/flash-style.css`), `css/responsive.css` (`/tmp/flash-responsive.css`).
  Screenshot `flash-free-template.jpg` (1200×946, viewed in browser with
  vision analysis).
- **Visual design:** dark/editorial photography portfolio. Black navbar
  (transparent over hero; solid black + fixed when scrolled; black on
  mobile) and black footer; big **PT Serif** headings (hero 80px,
  section/feature 42px) in `#222222` on white/`#f9f9ff`; body copy Roboto
  14px/24px `#777777`; single vibrant accent **`#fa333f`** (primary CTA,
  nav hover/active, newsletter submit, social/link hovers). Hero is a
  650px nature-photo card (radius 12px) pulled down (-120px) over a black
  band and the white section below; four alternating photo/text rows with
  overlapping white cards (radius 10px); services mosaic of 8
  alternating image/text cells; light `#f9f9ff` feedback panel with a
  white shadowed testimonial card; Instagram strip of 6 equal squares
  with a centered white button, overhanging the footer (-120px); black
  footer with About Me / Newsletter / Follow Me columns.
- **Fonts:** Roboto (300/400/500/700 — body, nav, buttons) + PT Serif
  (400/700 — headings). Load both via Google Fonts `<link>` in
  `index.html`.
- **Structure (1:1 from the preview DOM):**
  1. Header `header.header_area` — absolute top-0 transparent; `.main_menu`
     fixed + `background: #000` + 70px link line-height when scrolled
     (`.navbar_fixed`). Brand = logo image (camera glyph + uppercase
     wordmark) → text wordmark **Iris** (white uppercase; optional lucide
     Camera icon). Nav: Roboto 500 12px uppercase white, desktop
     line-height 120px, `margin-right: 45px`: Home (active) · About ·
     Projects ▾ (Projects / Project Details) · Pages ▾ (Elements) · Blog ▾
     (Blog / Blog Details) · Contact. Hover/active → `#fa333f`. Dropdowns:
     white bg, shadow `0 3px 16px rgba(0,0,0,0.1)`, min-width 200px,
     hover-open. Mobile (≤991px): navbar black; hamburger = 3 white bars
     (25×3px) animating to X; links line-height 40px, border-bottom
     `rgba(237,237,237,0.2)`; hero pushed down 117px.
  2. Hero `section.home_banner_area` — bg `#000`, margin-bottom 120px;
     `div.box_1620` photo bg (`img/banner/home-banner.jpg`), min-height
     650px, radius 12px, `bottom: -120px`; `banner_content` centered
     white: h3 **"Nature Photoshoot"** (PT Serif bold 80px/76px), p
     (Roboto 14px/24px, max-width 620px), `a.main_btn` **"Explore
     Gallery"** (mt 40px).
  3. Feature rows `section.home_blog_area.pad_top` (pt 120px; inner mb
     -50px) — FOUR `row.h_blog_item` (mb 50px), sides alternate
     (img-left, img-right, img-left, img-right): `h_blog_img` radius
     10px; `h_blog_text` py 60px; `h_blog_text_inner.left|.right` white
     card `padding 75px 90px`, radius 10px, `±margin 67px` overlap; h4
     **"Spreading Peace to world"** (#222, PT Serif 42px, mb 15px), p (mb
     30px), `a.main_btn2` **"Explore Gallery"**.
  4. Services `section.service_area.p_120` (py 120px) — `main_title`
     (max-width 670px, mb 75px): h2 **"Services Offered by Us"** (PT Serif
     42px #222) + p; `service_inner` row of EIGHT cells alternating
     **img(1), text(2), img(3), text(4), text(5), img(6), text(7),
     img(8)** (`col-lg-3 col-md-6 p0`): `service_img` image;
     `service_text` bg `#f9f9ff`, height 100%, `padding 95px 40px 0`, h4
     20px/27px #222 + p.
  5. Feedback `section.feedback_area.pad_bt` (pb 120px) —
     `feedback_inner.p_100` bg `#f9f9ff` radius 10px: left
     `feedback_text` (`padding 0 55px 0 95px`): h3 **"Client's Feedback"**
     (PT Serif 36px #222, mb 15px) + p; right `testi_slider_inner` white,
     radius 10px, shadow `0 10px 30px rgba(157,157,157,0.2)`, mr 95px,
     slider padding 40px — THREE identical items: round avatar + italic p
     quote + h4 **"Mark Alviro Wiens"** (18px #222) + h5 **"CEO at
     Google"** (Roboto 14px).
  6. Instagram `section.instagram_area` (relative) — `insta_btn`
     absolutely centered: `a.btn.theme_btn` **"Follow us on instagram"**
     (white bg, #222 text, radius 5px, `padding 0 45px`, line-height
     50px, Roboto 13px 500); `instagram_image` row of 6 equal `a` links
     (flex 0 0 16.667%, img width 100%, hover scale 1.05), **mb -120px**
     (overlaps footer).
  7. Footer `footer.footer_area` — bg `#000`, `padding 230px 0 120px`
     (tall top padding is where the Instagram strip overhangs):
     - About Me (`col-lg-5`): `f_title` h3 white PT Serif 18px bold (mb
       35px) + p (Roboto 14px/24px #777, mb 30px) + copyright p "Copyright
       © <year> All rights reserved | This template is made with ❤ by
       Colorlib" — KEEP the Colorlib credit (CC BY 3.0); heart → lucide
       Heart; credit link #fa333f.
     - Newsletter (`col-lg-5`): h3 + p "Stay updated with our latest
       trends"; email input (height 40px, transparent, `border 1px solid
#1e233b`, #ccc text, placeholder "Enter email address") +
       `button.sub-btn` (bg #fa333f, white, 42px wide, arrow icon → lucide
       ArrowRight, radius 0).
     - Follow Me (`col-lg-2`): h3 + p "Let us be social"; 4 social links
       (facebook, twitter, dribbble, behance — font-awesome in source →
       inline SVG brand icons; #cccccc, mr 17px, hover #fa333f).
- Inner pages (about, projects, project-details, elements, blog, blog
  details, contact) are NOT recreated — single-page index.html only.
- Images to replace with picsum: `home-banner.jpg` (hero → 1600×750
  nature landscape), `h-blog-1..4.jpg` (feature rows → 700×500),
  `service-1..4.jpg` (→ 400×400), `testi-1.jpg` (avatar → 90×90),
  `ins-1..6.jpg` (Instagram → 320×320), `logo.png` (→ text wordmark).
  Pattern: `https://picsum.photos/seed/iris-<n>/<w>/<h>`.

## Implementation tasks (implementer)

- [ ] Scaffold `apps/iris` from the simplest existing app; package
      `@free-react-templates/iris`; `npm install` at root to register the
      workspace in package-lock.json; keep `injectUiSource()` in
      `vite.config.ts`.
- [ ] `src/index.css` `@theme` tokens: `--color-brand: #fa333f`,
      `--color-ink: #222222`, `--color-body: #777777`,
      `--color-light: #f9f9ff`, `--color-border: #eeeeee`,
      `--color-input-border: #1e233b`, `--color-muted: #cccccc`,
      `--color-black: #000000`; Roboto + PT Serif via Google Fonts
      `<link>` in `index.html` (`.font-display` utility for serif
      headings).
- [ ] Shared UI: use `Button`/`ButtonLink`/`cn` from `packages/ui`;
      ArrowRight, Heart, Camera, Instagram icons from lucide-react;
      brand socials (facebook, twitter, dribbble, behance) as inline SVG
      (lucide-react removed brand glyphs).
- [ ] Components (each with colocated 100%-coverage tests):
      `Navbar` (transparent → fixed-black on scroll, 3 hover dropdowns,
      mobile hamburger → X, stacked mobile links), `Hero` (black band +
      rounded photo card with -120px overlap, serif headline, red CTA),
      `FeatureRow` (4 alternating rows, overlapping white cards,
      `main_btn2` style CTA), `Services` (title block + 8 alternating
      image/text cells), `Feedback` (light panel, left heading + white
      testimonial card, 3 slides), `InstagramStrip` (centered white
      button + 6 squares overlapping footer), `Footer` (3 columns:
      About/credit, Newsletter form with zod validation, socials).
- [ ] Tests mirror the Gherkin scenarios in
      `openspec/specs/template-iris/spec.md`; keep 100% coverage.
- [ ] `App.tsx` composes sections in order: Navbar → Hero → FeatureRows →
      Services → Feedback → InstagramStrip → Footer; document title
      "Iris — Photography Template".
- [ ] Self-review (docs/self-review.md) + `scripts/verify-app.sh iris`
      green; README status regenerated after merge.
- [ ] Commit `feat: Iris — photography template (ColorLib Flash)`; PR +
      immediate squash merge; surge deploy
      https://free-react-templates-iris.surge.sh.
