# Clinica (ColorLib Medicalcenter) — Tasks & Design Notes

> Recreation of ColorLib "Medicalcenter — Free Medical HTML Template"
> (https://colorlib.com/wp/template/medicalcenter/) under the NEW name
> **Clinica** ("clinic" in Spanish/Italian — fits the hospital /
> medical-services theme), single lowercase word, no collision with
> `apps/`, `openspec/specs/` or `docs/templates/` — verified 2026-08-11),
> per the monorepo naming mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Medicalcenter" — free medical HTML-5 template
  (Medical category). Meta: "Medicalcenter is a free medical HTML template
  for hospital, clinic and doctor websites." Internal doc title: "Medical
  HTML-5 Template"; the recreation brands itself **Clinica**.
- **Demo DOM analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/medicalcenter/` (HTTP 200, 44.9 KB
  HTML + `assets/css/style.css` 63.2 KB). This is a REAL multi-section
  landing page (unlike the single-section Booking Forms family) — 13
  distinct blocks from preloader to back-to-top. The TEMPLATES.md
  screenshot (`medicalcenter-free-template.jpg`, 1200×946 AVIF, viewed in
  browser) matches the live render; it shows the colorlib.com page chrome
  at the very top (including a "Search or enter website name" bar) — that
  chrome is NOT part of the template; the DOM is authoritative (no search
  bar in the template).
- **Visual design (screenshot + live render):** clean, flat, trustworthy
  medical aesthetic in BLUES + WHITE. White sticky header ("Medical." logo
  with a blue cross, centered dark-navy nav, blue gradient phone button).
  Hero on a light-blue photo with a faint topographic contour-line map
  pattern: kicker "COMMITTED TO SUCCESS" with a blue rule, big uppercase
  dark-navy headline "WE CARE ABOUT YOUR HEALTH" with an animated rotating
  word, blue "Appointment" button, smiling doctor photo (white coat +
  tablet, with a mother and child) on the right. White about section with
  "Welcome To Our Hospital" and two overlapping photos (nurse in blue
  scrubs + smiling woman portrait with a 10px `#f2f2f2` frame). Department
  tabs: white rounded cards with blue icons; active tab + content pane use
  a light-blue gradient. Rest: white sections with `#030431` headings,
  `#0f61ef` blue accents, a light-blue testimonial band with white text,
  and a DARK navy `#11141b` footer with `#3957ff` phone/links.
- **Section order (1:1, verified live):**
  1. Preloader (`#preloader-active`) — `#f7f7f7` fixed layer, 100px
     rotating ring (`border-top-color: #0f61ef`), 55px logo mark inside;
     fades out on load.
  2. Header (`header` → `.main-header.header-sticky`) — left logo
     (col-xl-2), right nav (col-xl-10): Home, About, Doctors, Department,
     Blog (submenu: Blog, Blog Details, Element), Contact + `header-btn`
     phone "01654.066.456". Sticky on scroll: white bg + shadow
     `0 10px 15px rgba(25,25,25,0.1)` + link padding 20px 20px. Mobile:
     slicknav slide-down menu.
  3. Hero (`.slider-area`, 900px, bg `h1_hero.png` cover) — kicker span
     (18px 600 uppercase `#396cf0` + 70×2px rule), h1 70px 900 `#102039`
     uppercase + rotating word `#0f61ee` (health/sushi/steak in source),
     p 18px `#212025`, `hero-btn` "Appointment →". Two IDENTICAL owl
     slides → render one hero.
  4. About (`.about-area.section-padding2`) — left: "About Our Company" +
     "Welcome To Our Hospital" (50px 800 `#030431`) + p + 3 stacked
     buttons ("Find Doctors .→" blue gradient; "Appointment →" and
     "Emergency 1 →" grey gradient); right: `.about-font-img` (z0, left)
     - `.about-back-img` (z1, top 60px right -180px, `border: 10px solid
#f2f2f2`); stack on mobile.
  5. Departments (`.department_area.section-padding2`, bg
     `department.png` cover) — centered title "Our Departments" / "Our
     Medical Services"; 6 tabs flex 14.4% (Dentistry, Cardiology, ENT
     Specialists, Astrology, Neuroanatomy, Blood Screening) — white cards,
     radius 3px, icon + h4, active = gradient `#24c0f1 → #4c9afe` +
     white; `.dept_main_info.white-bg` pane: gradient text block (white
     h3 25px, white p, `dep-btn` white/black radius 0 "Appointment→") +
     photo. All 6 panes identical.
  6. Gallery (`.gallery-area.section-padding30`) — "Our Gellary" (typo) /
     "Our Medical Camp"; left col: big 690px + 2 small 330px; right col:
     2 small + big; hover: `rgba(1,10,28,0.3)` overlay + img scale
     1.06 → 1.
  7. Testimonials (`.all-starups-area.testimonial-area`) — left `.starups`
     50%/700px bg `section_bg01.png`: quote icon + white 20px quote +
     founder (avatar, "Margaret Lawson", "Chif Photographer" typo); right
     `.starups-img` photo.
  8. Team (`.team-area.section-padding30`) — "Our Doctors" / "Our
     Specialist"; 3 cards (Alvin Maxwell / Maria Smith / Angela Doe):
     photo + caption (white, border `#ffeff9`) name 25px 700 `#161e46`,
     role `#a5a5a5`, 4× 40px circular social icons; hover caption →
     `#0f66f8` + white text; img hover scale 1.05.
  9. Appointment form (`.contact-form-main`) — right 7/12 `#f7fdff`
     wrapper, left absolute photo 46% (837px, hidden <lg); title
     "Appointment Apply Form" / "Appointment Form"; underline inputs
     (60px, no bg, `#112957`, `border-bottom: 2px solid #e9f0f4`): Name,
     Phone, doctor select (Health Law, saiful islam, Arafath Miya, Shakil
     Miya, Tamim Sharker), Email, Message textarea (130px, letter-spacing
     2px); "Submit Now →" gradient btn.
  10. Gallery strip (`.gallery-area.fix`, container-fluid p-0, no-gutters)
      — 6 cells 3/3/6/6/3/3 mosaic, same hover effect.
  11. Blog (`.home_blog-area.section-padding30`) — "Oure recent news" /
      "OurNews From Blog" (typos); 3 cards: img (radius 5px top, hover
      scale 1.1) + `#fcfcfc` cap — category span `#5191ff` + 4px dot +
      date `#aebccb`, title 24px 800 `#112957`, "Read more" `#c4c4c4` →
      hover `#0f61ef`.
  12. Footer (`.footer-area.section-bg`, `#11141b` + `footer_bg.jpg`) —
      logo; "About Us" 2× `#bdbdbd`; phone "+564 7885 3222" (`#3957ff`
      30px) + email + newsletter (input `#1c242f` 43px, "Send" button
      `#0a0f17`/`#3957ff`); bottom: copyright (re-branded, `#3957ff`
      heart/link) + 4 white social icons (twitter, facebook, globe,
      instagram).
  13. Back to top (`#back-top`) — fixed 50×50 circle `#0f61ef`, right
      31px bottom 18px.
- **Design tokens extracted from the live CSS (`assets/css/style.css`,
  verified 2026-08-11):**
  - Brand blue: **`#0f61ef`** (variants `#0f61ee`, `#1462f3`, `#559af3`,
    `#396cf0`, `#0f66f8`) — `.btn` gradient
    `linear-gradient(to left, #559af3, #1462f3, #559af3)`, nav hover,
    kicker rules, preloader ring, back-top, team hover bg, read-more
    hover, hero rotating word.
  - Dept gradient: `linear-gradient(0deg, #24c0f1 0%, #4c9afe 100%)`.
  - Accent: `#3957ff` (footer phone, copyright, newsletter Send).
  - Headings `#030431` (50px 800 section titles); hero h1 `#102039`
    (70px 900 uppercase); team `#161e46`; blog/form `#112957`; body p
    `#10285d` (16px/30px); about p `#64676c`; hero p `#212025`; footer
    `#bdbdbd`; role `#a5a5a5`; date `#aebccb`; read-more `#c4c4c4`.
  - Bg: white; `#f7fdff` form; `#fcfcfc` blog cap; photos (hero, dept,
    testimonial); `#11141b` footer.
  - Buttons: radius 6px, padding 18px 58px 18px 19px, 16px white
    capitalize, shadow `0 7px 21px rgba(0,0,0,0.12)`, arrow at left
    26px → 30px hover; about-btn2 grey gradient; dep-btn white/black
    radius 0.
  - Font: **'Muli', sans-serif 300–900** for EVERYTHING.
  - Rhythm: section-padding2 200px; section-padding30 195/180; footer
    150/50; hero 900px; big-img 690px; small-img 330px; testimonial
    700px; dept pane padding 172px 103px 104px 111px.
- **KEY DIFFERENCES vs other medical preps — do NOT merge:** specs for
  medico, medora, cura, salus, sana, vitalis (and bastion/benevol/
  generous/itkol/nestly/ripply/roomly/sapphire/whisker/dentora/enamel/
  forma) exist — read them before implementing and keep Clinica's identity
  distinct: BLUE-AND-WHITE hospital landing, light-blue gradient dept tabs
  `#24c0f1→#4c9afe`, 900px photo hero with rotating headline, overlapping
  about photos, 50/50 split testimonial band, `#f7fdff` underline
  appointment form, dark `#11141b`/`#3957ff` footer.
- **Recreation approach:** Tailwind re-implementation (NO Bootstrap);
  "Medical." logo → typographic "Clinica." wordmark (+ optional blue cross
  icon — lucide `Cross`); all photos → seeded picsum
  (`picsum.photos/seed/clinica-<n>/<w>/<h>`); flaticon dept icons →
  lucide-react (Dentistry → Stethoscope or Smile, Cardiology → HeartPulse,
  ENT → Ear, Astrology → Bone, Neuroanatomy → Brain, Blood Screening →
  Droplets; document mapping in PR); brand social icons as inline SVG;
  rotating headline keeps the scale animation with health words
  (health/healing/wellness — sushi/steak are source leftovers; note the
  divergence); hero carousel 2 identical slides → 1 hero; dept tabs =
  real interactive component (6 tabs, identical panes — source-faithful);
  appointment form validates + success state (pure exported function);
  newsletter validates email; sticky header via scroll listener;
  preloader brief + fade out; back-to-top scrolls; single-page (nav =
  anchors to sections; source is multi-page but homepage has all
  sections); fix source copy typos (Our Gellary, Oure recent news,
  OurNews From Blog, Chif Photographer, Emargency 1); Muli via Google
  Fonts `<link>`; document title "Clinica — Medical Template".
- Accessibility: real `<label htmlFor>`/`aria-label` on icon-only
  controls, `aria-expanded` on dept tabs + mobile menu, semantic `<main>`,
  `<nav>`, focus-visible rings, `aria-hidden` on decorative arrows.

## Tasks

- [ ] Implementer: copy the simplest existing app → `apps/clinica`
      (package `@free-react-templates/clinica`), wire the Tailwind v4
      theme tokens per the spec.
- [ ] Implementer: write tests (red) per spec scenarios, then
      implementation (green) — 100% coverage (vitest + Testing Library).
- [ ] Section order: preloader → sticky header → 900px hero → about →
      departments (tabs) → gallery → testimonials → team → appointment
      form → gallery strip → blog → footer → back-to-top (1:1 with
      source).
- [ ] Header: logo left, nav (Home/About/Doctors/Department/Blog+
      submenu/Contact) right, phone button; sticky white + shadow;
      mobile slide-down menu.
- [ ] Hero: 900px light-blue photo bg; kicker with 70×2px rule; h1 70px
      900 uppercase with rotating `#0f61ee` word; paragraph; gradient
      "Appointment →" button. One hero (source has 2 identical slides).
- [ ] About: kicker + "Welcome To Our Hospital" 50px 800; 3 stacked
      buttons (1 blue gradient, 2 grey gradient); 2 overlapping photos,
      front framed `10px solid #f2f2f2`.
- [ ] Departments: 6 icon tabs (white cards, radius 3px), active =
      `#24c0f1→#4c9afe` gradient + white; pane = gradient text block +
      white dep-btn + photo; 6 identical panes; interactive tab switch.
- [ ] Gallery: 2-col mosaic (big 690 / small 330, mb-30); hover overlay
      `rgba(1,10,28,0.3)` + scale 1.06→1.
- [ ] Testimonials: 50/50 split (light-blue quote side + photo side),
      700px, quote icon + white 20px quote + founder (avatar + name +
      role), stacks on mobile.
- [ ] Team: 3 cards; caption white → hover `#0f66f8` white text; 4×
      40px circular social icons; img hover scale 1.05.
- [ ] Appointment form: right 7/12 on `#f7fdff`, left photo 46% (<lg
      hidden); underline inputs (2px `#e9f0f4` bottom border); Name,
      Phone, doctor select, Email, Message; "Submit Now →"; validate +
      success state (pure exported function).
- [ ] Gallery strip: full-bleed 3/3/6/6/3/3 mosaic, no gutters.
- [ ] Blog: 3 cards; category `#5191ff` + date; title 24px 800; Read
      more `#c4c4c4` → `#0f61ef`; img hover scale 1.1.
- [ ] Footer: `#11141b` + bg image; About Us; phone `#3957ff` + email +
      newsletter (input `#1c242f`, Send `#0a0f17`/`#3957ff`); copyright
      re-branded; 4 white social icons.
- [ ] Back-to-top: fixed 50×50 circle `#0f61ef`, scrolls to top.
- [ ] Tokens: `--color-brand #0f61ef`, dept gradient stops `#24c0f1` /
      `#4c9afe`, accent `#3957ff`, headings `#030431`, footer bg
      `#11141b`.
- [ ] Muli (300–900) via Google Fonts link in index.html; document
      title "Clinica — Medical Template"; `<main>` landmark.
- [ ] `scripts/verify-app.sh clinica` until green (typecheck + lint +
      vitest 100% + build).
- [ ] Implementer: mark `[~]` → `[x]` BOTH dup rows in TEMPLATES.md
      (Bootstrap line 447, Medical line 2246) + surge URL +
      `npm run readme:status`, PR + immediate squash merge.
