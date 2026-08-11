# Template: Clinica (Medical / Hospital Landing)

## Purpose

Clinica is a single-page medical/hospital landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Medicalcenter" — free medical HTML-5 website template
(source: https://colorlib.com/wp/template/medicalcenter/), built under a
DIFFERENT name per the monorepo naming mandate (never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

> NAMING NOTE: the ColorLib source name "Medicalcenter" is FORBIDDEN as the
> app name. **Clinica** ("clinic" in Spanish/Italian — fits the hospital /
> medical-services theme; also reads as "clinical") is the new, original
> name — single lowercase word, no collision with `apps/`,
> `openspec/specs/`, `docs/templates/` or TEMPLATES.md (verified
> 2026-08-11). Source slug + preview URL are recorded below.

The original is a classic medical/hospital single-pager: a white sticky
header (logo — centered nav — blue phone button), a 900px hero on a light
blue contour-map photo with an animated rotating headline and a smiling
doctor photo, a white "Welcome To Our Hospital" about split with two
overlapping photos, a "Our Medical Services" department tab panel with six
icon tabs and a blue-gradient content pane, an "Our Medical Camp" photo
mosaic, a split testimonials band (light-blue quote side + photo side), a
three-doctor team grid with blue hover, a right-aligned underline-style
appointment form, a full-bleed 6-image gallery strip, a 3-card blog grid,
and a dark navy footer with phone, newsletter and social icons. Clinica
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Medicalcenter" — free medical HTML-5 template
  (source: https://colorlib.com/wp/template/medicalcenter/; preview page
  `<title>` reads **"Medical HTML-5 Template"**; ColorLib page title
  "Medicalcenter - Free Medical HTML Template 2026"). TEMPLATES.md lists it
  under **Bootstrap (216)** line 447 and **Medical (32)** line 2246 — two
  IDENTICAL dup rows, both `- [ ]`, nothing shipped; mark BOTH `[x]` when
  shipped. The recreation brands itself **Clinica**.
- **Live preview DOM analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/medicalcenter/` — HTTP 200, 44.9 KB
  HTML + `assets/css/style.css` 63.2 KB (plus bootstrap, owl.carousel,
  slicknav, flaticon, gijgo datepicker, animate, animated-headline,
  magnific-popup, fontawesome, themify-icons, slick, nice-select). Google
  Fonts: **'Muli'** 300/400/500/600/700/800/900 via @import in style.css —
  used for EVERYTHING (headings, body, nav, buttons, forms).
- **Section order (1:1, verified from live DOM):**
  1. **Preloader** (`div#preloader-active`) — full-screen `#f7f7f7` fixed
     layer (z-index 999999) with a 100px white circle (`border-radius:
50%`, 1px border, `border-top-color: #0f61ef`, other sides
     transparent, `animation: zoom 2000ms infinite` — rotating) and the
     logo image (max-width 55px) centered inside; fades out on load.
  2. **Header** (`header` > `.header-area` > `.main-header.header-sticky`,
     `container-fluid`, main-header padding 0 130px desktop) — one row:
     LEFT `col-xl-2` logo (`assets/img/logo/logo.png`); RIGHT `col-xl-10`
     `.menu-main` — `ul#navigation` (Home, About, Doctors, Department,
     Blog with `.submenu` [Blog, Blog Details, Element], Contact) +
     `.header-right-btn` `a.btn.header-btn` **"01654.066.456"** (blue
     gradient button, padding 18px 38px). Nav links: Muli 600, 16px,
     `#102039`, `text-transform: capitalize`, padding 39px 27px, hover
     `#0f61ef`. Submenu: 170px, `rgba(255,255,255,0.9)` bg, shadow
     `0 0 10px 3px rgba(0,0,0,0.05)`, padding 17px 0, appears on hover
     (top 80% → 100%). Sticky (`.sticky-bar` when scrolled): fixed top,
     white bg, shadow `0 10px 15px rgba(25,25,25,0.1)`, nav link padding
     shrinks to 20px 20px. Mobile: `.mobile_menu` slicknav placeholder
     (slide-down mobile menu below lg).
  3. **Hero / Slider** (`.slider-area.position-relative`, bg image
     `assets/img/hero/h1_hero.png` cover/center — light blue medical photo
     with a faint contour-line map pattern; `.slider-height` 900px;
     `.slider-active` owl carousel with TWO IDENTICAL slides) — content
     `col-xl-7`: `span` "Committed to success" (Muli 600, 18px, uppercase,
     `#396cf0`, `padding-left: 100px` with a 70px × 2px `#396cf0` line
     before, letter-spacing 0.05em); `h1.cd-headline.letters.scale` —
     **"We care about your"** (Muli 900, 70px, uppercase, `#102039`,
     line-height 1.2) + rotating `<strong class="cd-words-wrapper">`
     words **health / sushi / steak** in `#0f61ee` (animated-headline
     "letters scale" effect — the sushi/steak words are leftover copy in
     the source; see recreation decisions); `p` lorem 18px `#212025`
     (margin-bottom 50px); `a.btn.hero-btn` **"Appointment →"** (padding
     18px 63px 18px 21px). Slides carry bg photos via the `.single-slider`
     backgrounds (owl dots).
  4. **About** (`.about-area.section-padding2`) — white; LEFT `col-lg-6`
     `.about-caption`: `.section-tittle.section-tittle2` — `span` "About
     Our Company" (Muli 700, 18px, uppercase, `#396cf0`, with 50px × 2px
     line before) + `h2` "Welcome To Our Hospital" (Muli 800, 50px,
     `#030431`); `p` 16px `#64676c` line-height 1.6 (margin-bottom 35px);
     THREE stacked buttons `.about-btn1.mb-30`: `a.btn.about-btn` "Find
     Doctors .→", `a.btn.about-btn2` "Appointment →", `a.btn.about-btn2`
     "Emargency 1 →" (all padding 19px 97px 19px 20px, arrow icon at left
     43px). RIGHT `col-lg-6` `.about-img` (position relative, ~575px tall):
     `.about-font-img` (absolute z0, left 0, `d-none d-lg-block`) photo +
     `.about-back-img` (absolute, top 60px, right -180px, z1) photo with
     `border: 10px solid #f2f2f2`; on <768px both images `position:
unset` (stack).
  5. **Departments** (`.department_area.section-padding2`, bg image
     `assets/img/gallery/department.png` cover/center — light blue
     medical pattern) — centered `.section-tittle.text-center.mb-100`:
     `span` "Our Departments" + `h2` "Our Medical Services". `.nav#myTab`
     (`.depart_ment_tab`, `justify-content: space-between`, each `li`
     flex 14.4%): SIX tab buttons `.nav-link` (white bg, radius 3px,
     flex-column, padding 30px 0, centered) — flaticon icon + `h4`:
     **Dentistry** (flaticon-teeth), **Cardiology**
     (flaticon-cardiovascular), **ENT Specialists** (flaticon-ear),
     **Astrology** (flaticon-bone), **Neuroanatomy** (flaticon-lung),
     **Blood Screening** (flaticon-cell); `.active` tab = blue gradient
     bg (`linear-gradient(0deg, #24c0f1 0%, #4c9afe 100%)`) + white
     icon/h4. `.dept_main_info.white-bg` > `.tab-content#myTabContent`:
     six `.tab-pane` (first `active`), each `.row.align-items-center
.no-gutters`: LEFT `col-lg-7` `.dept_info` — blue gradient bg
     (`linear-gradient(0deg, #24c0f1 0%, #4c9afe 100%)`), padding
     172px 103px 104px 111px (responsive shrink), `h3` white Muli 600
     25px/35px "Dentist with surgical mask holding scaler near patient",
     `p` white (margin 20px 0 52px), `a.dep-btn` "Appointment→" (white
     bg, `#000` text, 16px, `border-radius: 0`, padding 20px 69px 20px
     23px, arrow icon at left 43px); RIGHT `col-lg-5` `.dept_thumb`
     photo (`department_man.png`). ALL SIX panes carry IDENTICAL copy
     (same heading/paragraph/button/image in the source).
  6. **Gallery "Medical Camp"** (`.gallery-area.section-padding30`) —
     centered `.section-tittle.text-center.mb-100` (col-lg-6): `span`
     "Our Gellary" (source typo) + `h2` "Our Medical Camp". Two
     `col-lg-6` columns: LEFT — 1 big (`gallery1.png`, `.big-img` height
     690px) + 2 small (`gallery2/3.png`, `.small-img` height 330px,
     `mb-30` each); RIGHT — 2 small (`gallery4/5.png`) + 1 big
     (`gallery6.png`). Images are `div.gallery-img` with inline
     background-image, `background-size: cover`. Hover:
     `.single-gallery::before` overlay `rgba(1,10,28,0.3)` fades in and
     the image scales 1.06 → 1 (slight zoom-out on hover).
  7. **Testimonials** (`.all-starups-area.testimonial-area.fix`,
     `display: flex`, `align-items: center`) — LEFT `.starups` (width
     50%, height 700px, bg `section_bg01.png` cover, `padding: 0 9%`,
     centered): `.h1-testimonial-active` owl carousel with ONE slide
     `.single-testimonial.text-center`: `.testimonial-top-cap` — quote
     icon image (`testimonial.png`, margin-bottom 50px) + `p` white 20px
     line-height 1.5 "I am at an age where I just want to be fit and
     healthy..."; `.testimonial-founder` (flex centered) — `founder-img`
     avatar (`Homepage_testi.png`) + `founder-text` (margin-left 20px):
     `span` "Margaret Lawson" (20px, 600, white) + `p` "Chif Photographer"
     (source typo, `#ddd` 500). RIGHT `.starups-img` (width 50%, height
     700px, bg `startup.png` cover, `background-position: left top`).
  8. **Team** (`.team-area.section-padding30`) — white; centered
     `.section-tittle.text-center.mb-100` (col-lg-6): `span` "Our
     Doctors" + `h2` "Our Specialist". THREE cards `col-xl-4` (mb-30):
     `.single-team` — `.team-img` (overflow hidden; img width 100%,
     hover `scale(1.05)`) + `.team-caption` (padding 30px 20px 30px 50px,
     white bg, `border: 1px solid #ffeff9`, border-top 0): `h3 a` name
     (Muli 700, 25px, `#161e46`) — Alvin Maxwell / Maria Smith / Angela
     Doe; `span` role (`#a5a5a5`, 14px, 300, margin-bottom 30px) —
     Creative UI Designer / Agency Manager / Designer; `.team-social` —
     FOUR 40×40 circle icon links (`border: 1px solid #fff5fb`, color
     `#9fa8c3`, radius 50%): twitter, globe, facebook, pinterest.
     Hover: `.team-caption` bg **`#0f66f8`** (blue) + name/role/social
     turn white.
  9. **Appointment form** (`.contact-form-main`, position relative) —
     RIGHT-aligned `row.justify-content-end` > `col-xl-7` `.form-wrapper`
     (bg `#f7fdff`): `.form-tittle` (padding 111px 51px 0 67px) —
     `.section-tittle.section-tittle2` `span` "Appointment Apply Form" +
     `h2` "Appointment Form"; `form#contact-form` (padding 61px 51px 115px
     69px): Row 1 — Name (`.form-box.user-icon`) | Phone (`.form-box.
email-icon`) `col-lg-6` each; Row 2 — doctor `select#select2`
     (`.select-itms`, nice-select: options "Health Law", "saiful islam",
     "Arafath Miya", "Shakil Miya", "Tamim Sharker") | Email (`.form-box.
subject-icon`); Row 3 `col-lg-12` — Message textarea
     (`.form-box.message-icon`, `#message`, height 130px, mb-65) +
     `.submit-info` `button.btn` "Submit Now →". Inputs: no bg, height
     60px, color `#112957` weight 500 capitalize, radius 0, **underline
     style: `border-bottom: 2px solid #e9f0f4`**; placeholder `#112957`
     16px weight 300; textarea letter-spacing 2px. LEFT absolute
     `.from-left` (`d-none d-lg-block`, width 46%, top 0 left 0) — tall
     image `contact_form.png` (img height 837px).
  10. **Gallery strip** (`.gallery-area.fix`, `container-fluid p-0`,
      `row.no-gutters`) — SIX `.gallery-box` cells in a mosaic:
      col-lg-3 (`gallery1.png`), col-lg-3 (`gallery2.png`), col-lg-6
      (`gallery3.png`), col-lg-6 (`gallery4.png`), col-lg-3
      (`gallery5.png`), col-lg-3 (`gallery6.png`); same
      `.single-gallery` hover overlay + scale effect, square-ish cells
      (no fixed height — full-bleed edge-to-edge strip).
  11. **Blog** (`.home_blog-area.section-padding30`) — white; centered
      `.section-tittle.text-center.mb-70` (col-lg-8): `span` "Oure recent
      news" (source typo) + `h2` "OurNews From Blog" (source typo). THREE
      cards `col-xl-4` (mb-30): `.single-blogs` — `.blog-img`
      (overflow hidden, `border-radius: 5px 5px 0 0`, img hover
      `scale(1.1)`; blog1/2/3.png) + `.blogs-cap` (bg `#fcfcfc`, padding
      34px 22px 31px 37px): `.date-info` — `span` category
      ("Health" / "Checkup" / "Operation", `#5191ff`, 14px, with 4px dot
      separator) + `p` date "Nov 30, 2020" (`#aebccb`, 14px); `h4 a`
      title (`#112957`, 24px, 800, line-height 1.4) — "Amazing Places To
      Visit In Summer" / "Developing Creativithout Losing Visual" /
      "Winter Photography Tips from Glenn"; `a.read-more1` "Read more"
      (`#c4c4c4`, 16px, 500 → hover `#0f61ef`).
  12. **Footer** (`.footer-area.section-bg`, `data-background` =
      `footer_bg.jpg` + `.footer-area { background: #11141b }` — dark
      navy over image, `footer-padding` 150/50) — `.footer-top`
      (`border-bottom: 1px solid #233148`): col 1 — `.footer-logo`
      (`logo2_footer.png`); col 2 — `.footer-tittle` h4 "About Us"
      (white, 18px, 500, uppercase, margin-bottom 38px) + `.footer-pera`
      two `p.info1` (`#bdbdbd`, line-height 1.8); col 3 (col-xl-4) —
      `.footer-number.mb-50` h4 **"+564 7885 3222"** (`#3957ff`, 30px,
      span part white) + `p` "youremail@gmail.com" (`#bdbdbd`);
      `.footer-form` newsletter (`#mc_embed_signup`): email input (bg
      `#1c242f`, height 43px, padding 10px 20px, white text, placeholder
      `#9fa6bd`) + `.form-icon` button **"Send"** (absolute right 0, bg
      `#0a0f17`, color `#3957ff`, padding 15px 22px). `.footer-bottom`
      (padding 30px/50px): `.footer-copy-right` p — "Copyright ©
      <year> All rights reserved | This template is made with ♥ by
      Colorlib" (`#bdbdbd`, 300, 16px; heart + link `#3957ff`, re-branded
      to Clinica); `.footer-social.f-right` — FOUR icons twitter,
      facebook, globe, instagram (white, 14px, `padding-left: 25px`).
  13. **Back to top** (`div#back-top`) — fixed 50×50 circle, bg
      `#0f61ef`, right 31px bottom 18px, radius 50%, white
      `fa-level-up-alt` icon, shadow `0 0 10px 3px rgba(108,98,98,0.2)`,
      z-index high.
- **Visual design (TEMPLATES.md screenshot `medicalcenter-free-template.jpg`,
  1200×946 AVIF, viewed in browser 2026-08-11):** clean, flat, trustworthy
  medical aesthetic in BLUES + WHITE. Top: white header with a blue-cross
  "Medical." logo, centered dark-blue nav, bright blue gradient CTA button.
  Hero: soft light-blue background with a faint topographic contour-line
  map pattern; left-aligned uppercase dark-navy headline "WE CARE ABOUT
  YOUR HEALTH" with a small blue kicker line above ("COMMITTED TO SUCCESS");
  blue "Appointment" button; right side a bright photo of a smiling male
  doctor in a white coat with a tablet, beside a mother and young girl.
  About: white section, left "ABOUT OUR COMPANY" + "Welcome To Our
  Hospital" (dark navy serif-ish 800), right two overlapping photos (a
  nurse in blue scrubs with surgical mask above a portrait of a smiling
  woman with a soft `#f2f2f2` frame). Department tabs are white rounded
  cards with blue icons; the active tab and content pane use a light-blue
  gradient (`#24c0f1 → #4c9afe`). Rest of the page: white sections with
  `#030431` headings, `#0f61ef` blue accents (buttons, back-to-top,
  links), a light-blue testimonial band with white text, and a DARK navy
  `#11141b` footer with `#3957ff` accent phone/links. The screenshot is
  the official preview (shows colorlib.com page chrome at top — the DOM is
  authoritative; there is NO search bar in the template).
- **Design tokens extracted from the live CSS (`assets/css/style.css`,
  verified 2026-08-11):**
  - Brand blue: **`#0f61ef`** (also spelled `#0f61ee`, `#1462f3`,
    `#559af3`, `#396cf0`, `#0f66f8`) — `.btn` gradient
    (`linear-gradient(to left, #559af3, #1462f3, #559af3)`),
    nav hover, section-title kicker lines, preloader ring, back-top,
    blog read-more hover, testimonial founder (overridden white), team
    hover bg `#0f66f8`, hero rotating word `#0f61ee`.
  - Light-blue gradient (dept): **`linear-gradient(0deg, #24c0f1 0%,
#4c9afe 100%)`** — active department tab + `.dept_info` pane.
  - Accent indigo: **`#3957ff`** — footer phone number, copyright heart
    - link, newsletter "Send" button color.
  - Headings: **`#030431`** (dark navy; section-tittle h2 50px weight
    800); hero h1 `#102039` (70px, 900, uppercase); team h3 `#161e46`;
    blog h4 `#112957`; form inputs `#112957`.
  - Body text: default p `#10285d` (16px, line-height 30px); about p
    `#64676c`; hero p `#212025`; blog cap p `#64676c`; footer `#bdbdbd`;
    roles `#a5a5a5`; dates `#aebccb`; read-more `#c4c4c4`.
  - Section backgrounds: white (about, team, blog) · `#f7fdff` (form
    wrapper) · `#fcfcfc` (blog caps) · light-blue photos (hero
    `h1_hero.png`, dept `department.png`, testimonial `section_bg01.png`)
    · dark navy `#11141b` + image (footer).
  - Buttons (`.btn`): `border: none`, padding 18px 58px 18px 19px,
    radius **6px**, white 16px text, `text-transform: capitalize`, bg
    size 200% + `background-image: linear-gradient(to left, #559af3,
#1462f3, #559af3)`, shadow `0 7px 21px rgba(0,0,0,0.12)`, arrow
    `ti-arrow-right` icon 13px at `left: 26px`, hover shifts icon
    (left 30px) + gradient position. `.about-btn2` = grey gradient
    (`#9ea0af, #7a7c8a, #9ea0af`). `.dep-btn` = white bg / `#000` text /
    radius 0 / padding 20px 69px 20px 23px.
  - Font: **'Muli', sans-serif** (300–900) — EVERYTHING (headings,
    body, nav, buttons, forms). Google Fonts: Muli 300,400,500,600,700,
    800,900 via `<link>`/@import.
  - Section rhythm: `.section-padding2` 200px top/bottom (about, dept);
    `.section-padding30` 195/180 (gallery, team, blog); footer-padding
    150/50; dept title mb-100; hero height 900px (500–700 responsive).
  - Section titles: `span` 18px 700 uppercase `#396cf0` with a 50px × 2px
    line before (left -67px); `h2` 50px 800 `#030431` (centered variant
    for section title; left-aligned `section-tittle2` for about/form).
  - Hero caption: span 18px 600 uppercase `#396cf0` with 70px × 2px line
    (padding-left 100px); h1 70px 900 `#102039`; strong word `#0f61ee`;
    p 18px `#212025` margin-bottom 50px.
  - Dept tabs: white cards, radius 3px, flex 14.4%, padding 30px 0,
    icon + h4; active = light-blue gradient + white.
  - Dept pane: gradient `#24c0f1→#4c9afe`, padding 172px 103px 104px
    111px; h3 white 25px/35px 600; p white; dep-btn white/black radius 0.
  - Gallery: `.big-img` 690px, `.small-img` 330px, `mb-30`; hover
    overlay `rgba(1,10,28,0.3)` + img scale 1.06 → 1.
  - Testimonial: `.starups` 50% / 700px / `section_bg01.png` / padding
    0 9%; quote icon img mb-50; p white 20px line-height 1.5; founder
    span 20px 600 white; founder p `#ddd`.
  - Team: caption padding 30px 20px 30px 50px, white bg, border
    `1px solid #ffeff9` (top 0); hover bg `#0f66f8` + white text;
    social 40×40 circles, border `#fff5fb`, color `#9fa8c3`.
  - Form: wrapper `#f7fdff`; inputs 60px, no bg, `#112957` 500
    capitalize, underline `border-bottom: 2px solid #e9f0f4`; textarea
    130px letter-spacing 2px; submit = gradient `.btn` "Submit Now →";
    left image width 46% height 837px.
  - Blog: img radius 5px 5px 0 0 + hover scale 1.1; cap `#fcfcfc`
    padding 34px 22px 31px 37px; category span `#5191ff` + 4px dot;
    title `#112957` 24px 800.
  - Footer: `#11141b` + `footer_bg.jpg`; top border `#233148`; pera
    `#bdbdbd`; phone `#3957ff` 30px; newsletter input `#1c242f` 43px,
    Send button `#0a0f17` / `#3957ff`; social icons white 14px
    padding-left 25px.
  - Sticky header: white bg + shadow `0 10px 15px rgba(25,25,25,0.1)`,
    link padding 20px 20px.
  - Back-top: 50×50 circle `#0f61ef`, fixed right 31px bottom 18px.
  - Preloader: `#f7f7f7`, 100px ring border-top `#0f61ef`, rotate zoom
    animation, 55px logo image.
- **KEY DIFFERENCES vs other prepped medical preps — do NOT copy:**
  - template-medico / template-medora / template-cura / template-salus /
    template-sana / template-vitalis all exist; check their specs during
    implementation and keep Clinica's identity distinct: BLUE-AND-WHITE
    hospital landing with the light-blue gradient dept tabs
    (`#24c0f1 → #4c9afe`), the 900px photo hero with rotating headline,
    the two-overlapping-photos about block, the split 50/50 testimonial
    band, the `#f7fdff` underline-form appointment section, and the dark
    `#11141b` / `#3957ff` footer.
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap
  grid (NO Bootstrap dependency); the "Medical." logo becomes a
  typographic "Clinica." wordmark (blue cross icon optional — lucide
  `Cross`/`Plus` or a simple SVG) — no image assets copied; all photos
  (hero doctor, about photos, dept thumb, 6 gallery images, testimonial
  avatar/quote, 3 team portraits, contact-form photo, 3 blog images,
  footer bg, section bg patterns) use seeded picsum placeholders
  (`picsum.photos/seed/clinica-<n>/<w>/<h>`); flaticon dept icons →
  lucide-react (Dentistry → Stethoscope or Smile, Cardiology →
  HeartPulse, ENT Specialists → Ear, Astrology → Bone, Neuroanatomy →
  Brain, Blood Screening → Droplets — source uses flaticon lung/cell for
  the last two; document the mapping in the PR); social icons (twitter,
  facebook, pinterest, instagram, globe) as inline SVG simple-icons paths
  (lucide removed brand icons); team social = 40×40 circles; the
  animated rotating headline keeps the "letters scale" rotation effect
  with health-themed words (health / healing / wellness — the source's
  "sushi"/"steak" words are obvious leftover copy; note the divergence in
  the PR); the hero carousel has two identical slides → render ONE hero
  (or an auto-rotating carousel of the same slide — either is faithful);
  dept tab panel is a real interactive tab component (6 tabs, active
  state = gradient), all six panes share the same content (source is
  identical); testimonial carousel has one slide → static; the
  appointment form validates (name, phone, doctor select, valid email,
  message) and shows a success state — the original demo is static, so
  minimal interactivity is a documented recreation choice kept in a pure
  exported function for 100%-coverage tests; the newsletter form
  validates email + shows a success message; sticky header via scroll
  listener (white bg + shadow + shrunk link padding); preloader renders
  briefly then fades out; back-to-top button scrolls to top; the source
  is multi-page (about/doctor/department/blog/contact.html) but the
  homepage contains every section — recreation is single-page with nav
  links as anchors to section ids (Doctors → team section, Department →
  dept section, Blog → blog section, Contact → form section; About →
  about section) — no extra pages. Document title "Clinica — Medical
  Template"; brand "Medical"/"Medicalcenter"/"Colorlib" → "Clinica"
  everywhere; fix source typos in copy (Our Gellary → Our Gallery, Oure
  recent news → Our Recent News, OurNews From Blog → Our News From Blog,
  Chif Photographer → Chief Photographer, Emargency 1 → Emergency 1) but
  keep section structure and content kinds 1:1. Muli (300–900) via
  Google Fonts `<link>` in `index.html`.

Clinica lives in `apps/clinica` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Preloader

The system SHALL render a full-screen `#f7f7f7` preloader with a rotating
100px ring (1px border, `border-top-color: #0f61ef`, other sides
transparent) and a centered logo mark, which SHALL fade out shortly after
the page loads.

#### Scenario: Preloader on load

- **GIVEN** the Clinica page is rendered
- **WHEN** the page loads
- **THEN** a full-screen `#f7f7f7` overlay SHALL cover the viewport with
  a rotating ring whose top border is `#0f61ef` and a centered logo mark
- **AND** the overlay SHALL fade out after the page finishes loading

### Requirement: Sticky header with nav and phone button

The system SHALL render a white header with a left logo, a centered nav
(Home, About, Doctors, Department, Blog, Contact — Blog with a submenu),
and a blue gradient phone button; on scroll the header SHALL become fixed
with a white background, shadow and compact link padding; on mobile a
slide-down menu SHALL replace the nav.

#### Scenario: Header at top of page

- **GIVEN** the Clinica page is rendered at the top of the page
- **WHEN** the header is displayed
- **THEN** the logo SHALL appear on the left (re-branded "Clinica.")
- **AND** the nav SHALL show links Home, About, Doctors, Department,
  Blog, Contact in `#102039` 600 weight, turning `#0f61ef` on hover
- **AND** Blog SHALL reveal a submenu (Blog, Blog Details, Element) on
  hover with a white translucent panel
- **AND** a blue gradient button SHALL show the phone number
  "01654.066.456" on the right

#### Scenario: Sticky header after scroll

- **GIVEN** the Clinica page is rendered
- **WHEN** the user scrolls down the page
- **THEN** the header SHALL become fixed at the top with a white
  background and a `0 10px 15px rgba(25,25,25,0.1)` shadow
- **AND** nav link padding SHALL shrink to 20px 20px

#### Scenario: Mobile menu

- **GIVEN** the Clinica page is rendered on a viewport narrower than lg
- **WHEN** the user opens the menu
- **THEN** a slide-down mobile menu SHALL list the nav links and the
  phone button SHALL remain visible

### Requirement: Hero with rotating headline

The system SHALL render a 900px hero on a light-blue contour-map photo
background with a kicker line, a 70px uppercase headline containing a
rotating highlighted word, a paragraph, and a blue gradient "Appointment"
button with an arrow icon.

#### Scenario: Hero content

- **GIVEN** the Clinica page is rendered
- **WHEN** the hero section is displayed
- **THEN** the hero SHALL be 900px tall (responsive) on a light-blue
  medical photo background with a faint contour-map pattern
- **AND** a kicker "Committed to success" SHALL appear in `#396cf0`
  uppercase with a 70px × 2px line before it
- **AND** the headline "We care about your" SHALL render at 70px weight
  900 uppercase in `#102039`
- **AND** a rotating highlighted word (health / healing / wellness)
  SHALL animate in `#0f61ee`
- **AND** a paragraph and a blue gradient "Appointment →" button SHALL
  appear below

### Requirement: About section with overlapping photos

The system SHALL render a white "Welcome To Our Hospital" section with a
left column (kicker, 50px heading, paragraph, three stacked buttons) and a
right column with two overlapping photos, the front one framed with a
`10px solid #f2f2f2` border.

#### Scenario: About layout

- **GIVEN** the Clinica page is rendered
- **WHEN** the about section is displayed
- **THEN** the kicker "About Our Company" SHALL show with a 50px line
  before it
- **AND** the heading "Welcome To Our Hospital" SHALL render at 50px
  weight 800 in `#030431`
- **AND** three buttons SHALL stack: "Find Doctors .→" (blue gradient),
  "Appointment →" (grey gradient), "Emergency 1 →" (grey gradient)
- **AND** two overlapping photos SHALL show on the right, the front one
  with a 10px `#f2f2f2` border, stacking on mobile

### Requirement: Medical services department tabs

The system SHALL render a "Our Medical Services" section on a light-blue
pattern background with six icon tab buttons (Dentistry, Cardiology, ENT
Specialists, Astrology, Neuroanatomy, Blood Screening) where the active
tab shows a light-blue gradient, and a white content panel showing a
blue-gradient text pane with a heading, paragraph, "Appointment" button
and a photo.

#### Scenario: Department tabs and pane

- **GIVEN** the Clinica page is rendered
- **WHEN** the departments section is displayed
- **THEN** the centered title "Our Departments" / "Our Medical Services"
  SHALL show (span + 50px h2)
- **AND** six tab buttons SHALL show as white rounded cards with an icon
  and a label
- **AND** the active tab SHALL show the `#24c0f1 → #4c9afe` gradient
  with white text
- **WHEN** the user clicks another tab
- **THEN** that tab SHALL become active and its content pane SHALL show
- **AND** every pane SHALL contain a blue-gradient text block (white h3
  - paragraph + white "Appointment" button with black text) and a photo
    (all six panes share the same content in the source)

### Requirement: Medical camp gallery mosaic

The system SHALL render a "Our Medical Camp" gallery with two columns
(big 690px images + small 330px images) and a dark overlay + scale effect
on hover.

#### Scenario: Gallery layout and hover

- **GIVEN** the Clinica page is rendered
- **WHEN** the gallery section is displayed
- **THEN** the centered title "Our Gallery" / "Our Medical Camp" SHALL
  show
- **AND** the left column SHALL show one big image above two small
  images, and the right column two small images above one big image
- **WHEN** the user hovers an image
- **THEN** a `rgba(1,10,28,0.3)` overlay SHALL fade in
- **AND** the image SHALL scale from 1.06 to 1

### Requirement: Split testimonials band

The system SHALL render a 50/50 split band: a light-blue photo side with
a centered white quote, a quote icon, and a founder attribution, beside a
full-height photo side.

#### Scenario: Testimonial content

- **GIVEN** the Clinica page is rendered
- **WHEN** the testimonials band is displayed
- **THEN** the left half SHALL show a quote icon, a white 20px quote
  ("I am at an age where I just want to be fit and healthy…"), and a
  founder attribution (avatar, "Margaret Lawson" in white 600, role in
  `#ddd`)
- **AND** the right half SHALL show a full-height photo, both halves
  700px tall and stacked on mobile

### Requirement: Specialist team grid

The system SHALL render a white "Our Specialist" section with three
doctor cards, each with a photo, name, role and four circular social
icons, whose caption SHALL turn blue with white text on hover.

#### Scenario: Team cards

- **GIVEN** the Clinica page is rendered
- **WHEN** the team section is displayed
- **THEN** the centered title "Our Doctors" / "Our Specialist" SHALL
  show
- **AND** three cards SHALL show (Alvin Maxwell, Maria Smith, Angela
  Doe) with a photo, 25px 700 name in `#161e46`, role in `#a5a5a5` and
  four 40×40 circular social icons
- **WHEN** the user hovers a card caption
- **THEN** its background SHALL become `#0f66f8` and the name, role and
  icons SHALL turn white

### Requirement: Appointment form

The system SHALL render a right-aligned "Appointment Form" on a
`#f7fdff` wrapper with a tall photo on the left, underline-style inputs
(Name, Phone, doctor select, Email), a Message textarea and a blue
gradient "Submit Now" button; the form SHALL validate and show a success
state on valid submit.

#### Scenario: Appointment form fields

- **GIVEN** the Clinica page is rendered
- **WHEN** the appointment section is displayed
- **THEN** the wrapper SHALL have a `#f7fdff` background with the form on
  the right (7 of 12 columns) and a tall photo on the left (hidden below
  lg)
- **AND** the title SHALL read "Appointment Apply Form" /
  "Appointment Form"
- **AND** fields SHALL appear in order: Name + Phone (side by side),
  doctor select (Health Law, saiful islam, Arafath Miya, Shakil Miya,
  Tamim Sharker), Email, Message textarea
- **AND** every field SHALL be borderless with a `2px solid #e9f0f4`
  bottom border and `#112957` text
- **AND** a blue gradient "Submit Now →" button SHALL be shown

#### Scenario: Appointment submit

- **GIVEN** the appointment form is displayed
- **WHEN** the user submits with a name, phone, doctor, valid email and
  message
- **THEN** the form SHALL show a success message
- **AND** submitting with missing or invalid fields SHALL show
  validation messages and no success message

### Requirement: Full-bleed gallery strip

The system SHALL render a full-bleed six-image mosaic (3/3/6/6/3/3
column split) below the appointment section with the same hover overlay
effect.

#### Scenario: Gallery strip

- **GIVEN** the Clinica page is rendered
- **WHEN** the page is scrolled past the appointment form
- **THEN** six gallery images SHALL fill the full viewport width edge to
  edge in a 3/3/6/6/3/3 column mosaic with no gutters
- **AND** hovering an image SHALL show the `rgba(1,10,28,0.3)` overlay
  and scale effect

### Requirement: Blog news grid

The system SHALL render a white "Our News From Blog" section with three
blog cards (image, category + date, title, Read more link) with a zoom
effect on the image and a blue Read-more hover.

#### Scenario: Blog cards

- **GIVEN** the Clinica page is rendered
- **WHEN** the blog section is displayed
- **THEN** the centered title "Our Recent News" / "Our News From Blog"
  SHALL show
- **AND** three cards SHALL show with an image (rounded top), a category
  span in `#5191ff` with a dot separator and a date in `#aebccb`, a
  24px 800 title in `#112957` and a "Read more" link in `#c4c4c4`
- **WHEN** the user hovers a card
- **THEN** its image SHALL scale to 1.1
- **AND** the "Read more" link SHALL turn `#0f61ef`

### Requirement: Dark footer with newsletter and social icons

The system SHALL render a dark `#11141b` footer over a background image
with a logo, an "About Us" column, a phone + email column with a
newsletter email input and Send button, and a bottom strip with a
re-branded copyright line and four social icons.

#### Scenario: Footer layout

- **GIVEN** the Clinica page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL have a `#11141b` background over the footer
  background image
- **AND** an "About Us" column SHALL show two paragraphs in `#bdbdbd`
- **AND** a phone column SHALL show "+564 7885 3222" (white span +
  `#3957ff` digits) and "youremail@gmail.com"
- **AND** a newsletter form SHALL show an email input (`#1c242f` fill)
  and a "Send" button (`#0a0f17` bg, `#3957ff` text) that validates the
  email and shows a success message
- **AND** the bottom strip SHALL show a centered copyright line
  re-branded to Clinica (heart and link in `#3957ff`)
- **AND** four social icons (Twitter, Facebook, Globe, Instagram) SHALL
  show in white

### Requirement: Back to top and mobile stacking

The system SHALL render a fixed 50×50 circular `#0f61ef` back-to-top
button that scrolls to the top, and SHALL collapse all multi-column
sections (hero, about, dept tabs, gallery, testimonials, team, form,
gallery strip, blog, footer) to stacked single-column layouts on small
screens matching the source's Bootstrap breakpoints.

#### Scenario: Back to top

- **GIVEN** the Clinica page is rendered
- **WHEN** the user scrolls down and clicks the circular blue button at
  the bottom right
- **THEN** the page SHALL scroll back to the top

#### Scenario: Single column below lg

- **GIVEN** the Clinica page is rendered on a viewport narrower than
  992px
- **WHEN** the page is displayed
- **THEN** the hero, about images, gallery columns, testimonial halves,
  team cards, blog cards and footer columns SHALL stack vertically
- **AND** the department tabs SHALL wrap to 2-per-row then 1-per-row,
  and the appointment form SHALL span the full width with the left photo
  hidden

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-clinica`
- [ ] `scripts/verify-app.sh clinica` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order (1:1 with source): preloader (fades out) →
      sticky header (logo, nav Home/About/Doctors/Department/Blog+
      submenu/Contact, blue phone button; sticky → white + shadow +
      compact padding; mobile slide-down menu) → 900px hero (light-blue
      contour photo bg, "Committed to success" kicker + 70px uppercase
      h1 "We care about your" + rotating word `#0f61ee` + paragraph +
      blue gradient "Appointment →") → white "Welcome To Our Hospital"
      about (kicker + 50px h2 + paragraph + 3 stacked buttons +
      2 overlapping photos with 10px `#f2f2f2` frame) → "Our Medical
      Services" dept tabs (6 white icon cards, active = light-blue
      gradient; pane = gradient text block + white "Appointment" button + photo; 6 identical panes) → "Our Medical Camp" gallery (2-col:
      big 690 + 2×small 330 per side; hover overlay `rgba(1,10,28,0.3)` + scale 1.06→1) → split testimonials (left `section_bg01` photo +
      quote icon + white 20px quote + founder; right photo; 700px,
      50/50) → "Our Specialist" team (3 cards, name/role/4 circular
      social icons; hover caption → `#0f66f8` white) → `#f7fdff`
      appointment form (right 7/12, left 46% photo; underline
      inputs Name/Phone/doctor select/Email/Message + "Submit Now →")
      → full-bleed 6-image strip (3/3/6/6/3/3) → "Our News From Blog"
      (3 cards: image + category `#5191ff` + date + title + Read more;
      hover zoom 1.1 + blue link) → dark `#11141b` footer (logo, About
      Us, phone `#3957ff` + newsletter Send, copyright strip + 4 social
      icons) → 50×50 circular `#0f61ef` back-to-top
- [ ] Brand blue `#0f61ef` in `@theme` and used via Tailwind classes
      (gradient buttons `#559af3 → #1462f3 → #559af3`, nav hover,
      preloader ring, back-top, read-more hover); dept gradient
      `#24c0f1 → #4c9afe`; accent `#3957ff`
- [ ] Headings `#030431`; hero h1 `#102039` 900; team `#161e46`; blog +
      form `#112957`; body `#10285d` / about `#64676c`; footer `#bdbdbd`;
      light backgrounds `#f7fdff` / `#fcfcfc`; footer bg `#11141b`
- [ ] Muli (300–900) via Google Fonts `<link>` in `index.html` — no
      other font
- [ ] Buttons: `.btn` gradient blue, radius 6px, padding 18px 58px 18px
      19px, arrow icon left 26px → 30px on hover; `.about-btn2` grey
      gradient; `.dep-btn` white/black radius 0
- [ ] Section titles: 50px × 2px `#396cf0` kicker line; h2 50px 800
      `#030431`; rhythm 200px / 195px / 150px paddings; hero 900px;
      gallery big 690px / small 330px; testimonial 700px
- [ ] Dept tab panel is interactive (6 tabs, active gradient), panes
      share identical content (source-faithful); rotating headline
      effect with health words (health/healing/wellness — source's
      sushi/steak words are leftovers; note in PR)
- [ ] Appointment form validates (name, phone, doctor, valid email,
      message) with success / validation messages (pure exported
      function for tests); newsletter validates email
- [ ] Placeholder images via `picsum.photos/seed/clinica-<n>/<w>/<h>`,
      icons from lucide-react (dept icons: Stethoscope/Smile, HeartPulse,
      Ear, Bone, Brain, Droplets; Menu/X; brand social icons as inline
      SVG), no copied assets
- [ ] No extra pages — nav links are anchors to section ids (single-page
      recreation of the multi-page source); source typos fixed in copy
      (Our Gellary, Oure recent news, OurNews From Blog, Chif
      Photographer, Emargency 1)
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md: mark BOTH dup rows `[x]` (Bootstrap line 447,
      Medical line 2246) + surge URL + `npm run readme:status` done by
      implementer at ship time
