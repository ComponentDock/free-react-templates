# Medico (ColorLib "Docmed") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-medico` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Docmed" — Medical HTML Template
  (source: https://colorlib.com/wp/template/docmed/). Listed in
  TEMPLATES.md under **Bootstrap (216)** (line 376; duplicate rows at
  line 1837 under **Health Fitness (72)** and line 2230 under
  **Medical (32)** — same template, one app only).
- **Preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/docmed/`. DOM fetched
  (`/tmp/docmed-preview.html`, 46 KB) + stylesheet
  (`/tmp/docmed-style.min.css`, 69 KB, minified) + screenshot
  (`docmed-free-template.jpg`, 1200×946, viewed in browser). All
  references verified live. NOTE: the screenshot shows an OLDER
  variant (top bar has a centered search field; shield-cross logo);
  the live DOM (current version) is the source of truth.
- **Visual design:** clean, professional medical one-pager in whites
  and blues. Light `#F5FBFF` top strip (social left, contact right),
  white main nav with dark gray links and a solid blue `#009DFF`
  "Make an Appointment" button. Hero: 700px slider with a smiling
  doctor photo, 70px Poppins 300 headline "Health care / For Hole
  Family" ("Health care" bolded, dark `#1F1F1F`), subtext and a blue
  gradient `#0181f5 → #5db2ff` "Check Our Services" button. Light-blue
  `#83C4FF` services band: 3 white-text cards (75px `#5DB2FF` icon
  circles, title, blurb, white-outline buttons). Welcome split with
  two overlapping photos + "Welcome to Docmed" / "Best Care For Your
  Good Health" + checklist + gradient "Learn More". Departments: 6
  white cards (photo + title + blurb + `#5DB2FF` "Learn More", shadow
  `0 6px 10px rgba(0,0,0,0.04)`, 5px top radius). Testimonials slider
  on a background photo (quote + "Asana Korim"). Tabs band on
  `#F5FBFF`: Excellent Services / Qualified Doctors / Emergency
  Departments, each icon + heading + paragraph + photo. Expert
  Doctors: 6 photo cards with `#F5FBFF` name/specialty strips.
  Emergency CTA band: 2 half-width photo panels with blue overlay and
  pill buttons (radius 30px) — phone number and "Make an Appointment".
  Dark footer `#1F1F1F` (logo + about + social, Departments links,
  Useful Links, Address) and `#000` copyright bar.
- **Structure (1:1 from the preview DOM):**
  1. Header: `div.header-top_area` (#F5FBFF, 12px 0) — social links
     left + `div.short_contact_list` (right); `div.main-header-area`
     (#fff, 18px 0) — logo (image → text wordmark "Medico"), centered
     nav (Home, Department, blog, single-blog, elements, about,
     Doctors, Contact; #727272 15px 500 capitalize, margin 0 10px),
     `div.book_btn` → `a` "Make an Appointment" (#009DFF, white, 14px,
     radius 4px, padding 12px 26px).
  2. Hero `div.slider_area` → swiper, 2 slides `single_slider
slider_bg_1/2` (700px height, cover photos): `div.slider_text` —
     h3 "Health care" (span, 700) + `<br>` "For Hole Family" (70px
     Poppins 300 #1F1F1F capitalize ls 2px), p (#727272 18px, mt 10
     mb 40), `a.boxed-btn3` "Check Our Services" (gradient #0181f5 →
     #5db2ff, white, radius 4px, padding 18px 44px, 15px 500).
  3. Services `div.service_area` (bg #83C4FF, container p-0, row g-0):
     3 × `div.single_service` (padding 40px 30px): `div.icon` `i`
     (75×75 #5DB2FF circle, white 35px icon), h3 (white 26px 500) —
     Hospitality / Emergency Care / Chamber Service, p (white 16px lh
     28, mt 10 mb 26), `a.boxed-btn3-white` (1px #fff border, radius
     5px, padding 9px 24px) — "Apply For a Bed" / "+10 672 356 3567"
     / "Make an Appointment".
  4. Welcome `div.welcome_docmed_area` (pt 120, pb 220): `div.welcome_
thumb` (thumb_1 + thumb_2 overlapping) left; `div.welcome_docmed_
info` (padding-left 90px): h2 "Welcome to Docmed" (18px 400
     #1F1F1F, pb 9), h3 "Best Care For Your <br> Good Health" (36px
     500), p (#727272 16px lh 28), ul checklist with right-chevron
     icons, `a.boxed-btn3` "Learn More".
  5. Departments `div.our_department_area`: `div.section_title.text-
center.mb-55` — h3 "Our Departments" (36px 500 #1F1F1F pb 15) +
     p (#727272); 6 × `div.single_department` (col-xl-4, #fff, mb 30,
     shadow 0 6px 10px rgba(0,0,0,0.04)): `div.department_thumb`
     (5px top radius, overflow hidden) + `div.department_content`
     (padding 22px 30px 24px): h4 (Eye Care, Physical Therapy, Dental
     Care, Diagnostic Test, Skin Surgery, Surgery Service), p lorem,
     `a.learn_more` "Learn More" (#5DB2FF 16px).
  6. Testimonials `div.testmonial_area`: swiper, 2 × `single-
testmonial testmonial_bg_1/2 overlay2` (cover bg, padding 180px
     0): centered quote + `div.testmonial_author` "Asana Korim".
  7. Tabs `div.business_tabs_area` (bg #F5FBFF): `ul.nav` — Excellent
     Services (active) / Qualified Doctors / Emergency Departments;
     panes: `div.business_info` (icon circle 75px #5DB2FF, h3 20px
     500 #1F1F1F mt 16 mb 14 — "Comprehensive Medical Services" /
     "Expert Physicians You Can Trust" / "24/7 Emergency Medical
     Care", p #727272 lh 28) + `div.business_thumb` (photo, pt 20).
  8. Expert doctors `div.expert_doctors_area` (pt 120, pb 120):
     `div.doctors_title.mb-55` h3 "Expert Doctors" (36px 500); 6 ×
     `div.single_expert` (swiper slides in the original → recreate as
     responsive grid): `div.expert_thumb` (5px top radius) +
     `div.experts_name.text-center` (#F5FBFF, pt 16 pb 18): h4
     "Mirazul Alom" + p "Neurologist" (DOM repeats the same pair 6× —
     vary names for realism).
  9. Emergency CTA band: `div.row.g-0` → 2 × col-xl-6 `div.single_
emergency d-flex align-items-center justify-content-center`
     (`emergency_bg_1/2`, overlay, padding 91px 0): `div.info` h3
     "For Any Emergency Contact" / "Make an Online Appointment" + p;
     `div.info_button` → `a.boxed-btn3-white` (border-radius 30px):
     "+10 378 4673 467" / "Make an Appointment".
  10. Footer `footer.footer`: `div.footer_top` (#1F1F1F, pt 145, pb 129) → 4 widgets — (a) logo wordmark (white 22px 400 mb 40) +
      about p + social icons (LinkedIn/Facebook/Twitter/Instagram);
      (b) col-xl-2 offset-xl-1 "Departments" links: Eye Care, Skin
      Care, Pathology, Medicine, Dental, About; (c) "Useful Links":
      About, Blog, About, Contact, Appointment; (d) "Address": "200,
      D-block, Green lane USA / +10 367 467 8934 /
      docmed@contact.com". Widget links #BABABA 16px lh 42.
      `div.copy-right_text` (#000, pb 30): "Copyright © <year> All
      rights reserved | This template is made with <heart> by
      Colorlib" (paraphrase).
- **Design tokens (from style.min.css):**
  - Brand: `#009DFF` (book_btn), secondary `#5DB2FF` (icon circles,
    learn_more links), gradient `#0181f5 → #5db2ff` (boxed-btn3),
    service band `#83C4FF`, light bg `#F5FBFF` (top bar, tabs,
    experts_name).
  - Text: `#1F1F1F` headings, `#727272` body/nav, white on blue/dark,
    `#BABABA` footer links.
  - Surfaces: `#fff` (header, cards), `#1F1F1F` footer_top, `#000`
    copyright bar.
  - Card shadow `0 6px 10px rgba(0,0,0,0.04)`; radii 5px (thumbs,
    white buttons), 4px (gradient + book buttons), 30px (pill info
    buttons), 50% (icon circles).
  - Font: Poppins (300/400/500/700) — Google Fonts.
  - Headings: section_title h3 36px 500; slider h3 70px 300 (span
    700); service h3 26px 500 white; business h3 20px 500; welcome h2
    18px 400; footer_title 22px 400 white.
  - Spacing: welcome 120/220px; experts 120/120px; testimonial 180px
    0; emergency 91px 0; footer_top 145/129px; slider 700px.

## Tasks (implementation order)

1. **Scaffold** — copy the simplest existing single-page app, rename
   package to `@free-react-templates/medico`; keep `injectUiSource()`
   in `vite.config.ts`; `npm install` at root so the lockfile
   registers the workspace (deploy CI runs `npm ci`).
2. **Theme tokens** (`src/index.css` `@theme`): brand
   `--color-brand: #009DFF`, secondary `#5DB2FF`, gradient stops
   `#0181f5`/`#5db2ff`, service band `#83C4FF`, light bg `#F5FBFF`,
   headings `#1F1F1F`, body `#727272`, footer `#1F1F1F`, copyright
   `#000`, footer links `#BABABA`; Poppins 300/400/500/700 via Google
   Fonts `<link>` in `index.html`.
3. **Header** — `#F5FBFF` top bar (social icons left, contact right),
   white main bar: "Medico" wordmark, centered nav (Home, Department,
   Blog, Pages, Doctors, Contact), `#009DFF` "Make an Appointment"
   button; mobile burger menu.
4. **Hero slider** — 700px slider, 2 slides (picsum seeds medico-1/2,
   1920×700), 70px Poppins 300 headline ("Health care" bold +
   "For Hole Family"), subtext, gradient "Check Our Services" button;
   prev/next + indicators; accessible.
5. **Services** — `#83C4FF` band, 3 white-text cards: lucide icon in
   75px `#5DB2FF` circle (Stethoscope/Ambulance/Cross or
   BriefcaseMedical — NO FirstAid in lucide), title, blurb,
   white-outline buttons ("Apply For a Bed", phone, "Make an
   Appointment").
6. **Welcome** — split: 2 overlapping photos left (medico-3 400×500,
   medico-4 300×400), right column: "Welcome to Medico" lead, "Best
   Care For Your Good Health" heading, intro + 2-item checklist with
   CheckCircle2/chevron icons, gradient "Learn More" button.
7. **Departments** — centered "Our Departments" title + subtitle; 6
   cards (medico-5..10 600×400): 5px top-radius photo, title, blurb,
   `#5DB2FF` "Learn More" link; shadow
   `0 6px 10px rgba(0,0,0,0.04)`.
8. **Testimonials** — full-width cover-background slider (medico-11
   1920×700), centered quote + author "Asana Korim" (2 slides,
   prev/next).
9. **Tabs** — `#F5FBFF` band; accessible tablist (aria-selected,
   aria-controls): Excellent Services / Qualified Doctors / Emergency
   Departments; each panel: icon circle + heading + paragraph + photo
   (medico-12..14 600×500).
10. **Expert doctors** — "Expert Doctors" title; grid of 6 cards
    (medico-15..20 400×350): photo (5px top radius) + `#F5FBFF`
    name/specialty strip; use varied doctor names/specialties.
11. **Emergency band** — 2 half-width photo panels (medico-21/22
    1920×400) with a blue overlay, h3 + p + pill button (radius 30px):
    phone / "Make an Appointment".
12. **Footer** — `#1F1F1F` top: "Medico" wordmark + about + social
    (inline SVG brand icons), Departments links, Useful Links,
    Address widget; `#000` copyright bar with the Colorlib-style
    line (paraphrased).
13. **Compose + verify** — `App.tsx` order header → hero → services →
    welcome → departments → testimonials → tabs → experts → emergency
    → footer; run `scripts/verify-app.sh medico` (typecheck + lint +
    100% coverage + build); update TEMPLATES.md `[~]` → `[x]` on ALL
    THREE Docmed rows (376, 1837, 2230) + surge URL + homepage +
    `npm run readme:status`; PR description with source template,
    preview URL, tokens, and differences.

## Pitfalls / notes

- Three dup rows in TEMPLATES.md (lines 376, 1837, 2230) — ONE app
  only (`apps/medico`); mark all three `[x]` on completion.
- The TEMPLATES.md screenshot shows an OLDER variant (search field in
  the top bar, shield-cross logo). Follow the LIVE DOM for structure;
  the screenshot is only a general visual confirmation.
- lucide-react has NO `FirstAid` icon — use `Cross` or
  `BriefcaseMedical` for the chamber-service icon. Brand icons
  (LinkedIn/Facebook/Twitter/Instagram) must be inline SVGs.
- Header nav in the original has 8 items including odd placeholder
  links ("blog", "single-blog", "elements"); the visible menu is
  Home / Department / Blog / Pages / Doctors / Contact — trim to the
  real menu items (a Pages dropdown is optional; the DOM's nav has no
  dropdown markup).
- Hero + testimonial sliders are Swiper in the original; a simple
  accessible prev/next carousel (state-driven) is a faithful
  equivalent — no new dependency.
- Experts are 6 swiper slides in the DOM with the SAME name/specialty
  repeated; vary the names for a realistic grid.
- "Hole Family" is a typo in the original headline ("Whole") — keep
  it as-is for fidelity or fix it; note the choice in the PR.
