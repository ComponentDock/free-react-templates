# Template: Medico (Medical / Health Care Template)

## Purpose

Medico is a single-page medical-clinic template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Docmed" entry in TEMPLATES.md (listed under **Bootstrap (216)**
at line 376; duplicate rows at line 1837 under **Health Fitness (72)** and
line 2230 under **Medical (32)**), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The reference is a clean, professional, light-and-blue medical site:
a light top bar (#F5FBFF) with social icons left and contact info right;
a white main header (logo, centered nav — Home, Department, Blog, Pages
▾, Doctors, Contact — and a solid-blue "Make an Appointment" button); a
full-height hero slider (2 slides, 700px, doctor photos) with a big
300-weight Poppins headline "Health care / For Hole Family" (70px, dark
#1F1F1F, "Health care" bolded) and a blue-gradient "Check Our Services"
button; a light-blue (#83C4FF) services band of 3 white-text cards
(icon in a 75px #5DB2FF circle, title, blurb, white-outline button:
"Apply For a Bed", a phone number, "Make an Appointment"); a white
welcome split (two overlapping photos left, "Welcome to Docmed" /
"Best Care For Your Good Health" right with checklist items and a
gradient "Learn More" button); an "Our Departments" grid of 6 white
cards (photo, title — Eye Care, Physical Therapy, Dental Care,
Diagnostic Test, Skin Surgery, Surgery Service — blurb and a #5DB2FF
"Learn More" link, soft shadow, 5px top radius); a full-width
testimonial slider on a background photo (quote + author "Asana
Korim"); a light-blue (#F5FBFF) tabs band ("Excellent Services" /
"Qualified Doctors" / "Emergency Departments") each pairing an
icon + heading + paragraph with a photo; an "Expert Doctors" grid of
6 photo cards (name + specialty on a #F5FBFF strip); a full-width
emergency CTA band (2 half-width photo panels, blue overlay: "For Any
Emergency Contact" with a phone pill button and "Make an Online
Appointment" with an appointment pill button); and a dark footer
(#1F1F1F) with logo + about + social links, "Departments" and "Useful
Links" link columns, an "Address" widget, and a black copyright bar.
The brand accent is a vivid blue #009DFF (appointment button) with a
secondary #5DB2FF (icon circles, learn-more links) and a signature
blue gradient #0181f5 → #5db2ff (primary buttons); body and headings
use Poppins. Medico recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib
assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Docmed" — Medical HTML Template
  (source: https://colorlib.com/wp/template/docmed/). Listed in
  TEMPLATES.md under **Bootstrap (216)** (line 376; duplicate rows at
  line 1837 under Health Fitness (72) and line 2230 under Medical
  (32)).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/docmed/`
  (HTTP 200). DOM fetched and analyzed (`/tmp/docmed-preview.html`,
  46 KB); stylesheet
  `https://preview.colorlib.com/theme/docmed/css/style.min.css`
  (69 KB, minified) extracted for tokens; screenshot
  (`docmed-free-template.jpg`, 1200×946, TEMPLATES.md) reviewed
  visually in the browser. All references verified live. Note: the
  TEMPLATES.md screenshot shows an OLDER variant of the template (top
  bar with a centered search field, shield-cross logo); the live DOM
  (current version) is the source of truth for structure and tokens.
- **Section order (1:1 from the preview DOM):**
  1. Header: `div.header-top_area` (background #F5FBFF, padding 12px 0) → `div.social_media_links` (left; LinkedIn, Facebook, Twitter,
     Instagram icons) + `div.short_contact_list` (right-aligned
     contact info: phone/email text); `div.main-header-area`
     (background #fff, padding 18px 0) → `div.logo` (image → recreate
     as text wordmark "Medico"), nav `ul` (.main-menu, centered,
     padding 12px 0) — Home, Department, blog, single-blog, elements,
     about, Doctors, Contact (links #727272, 15px, weight 500,
     capitalize, inline-block margin 0 10px), and `div.book_btn`
     (margin-left 30px) → `a` "Make an Appointment" (background
     #009DFF, white, radius 4px, padding 12px 26px, 14px).
  2. Hero `div.slider_area` → `div.swiper.slider_active` → 2 ×
     `div.swiper-slide.single_slider.d-flex.align-items-center`
     (`slider_bg_1` / `slider_bg_2`; height 700px, cover background
     images): `div.slider_text` — `h3` with `span` "Health care"
     (font-weight 700) + `<br>` "For Hole Family" (Poppins, 70px,
     weight 300, #1F1F1F, capitalize, letter-spacing 2px), `p`
     "In healthcare sector, service excellence is the facility of the
     hospital as healthcare service provider to consistently."
     (#727272, 18px, margin-top 10px, margin-bottom 40px), `a.boxed-
btn3` "Check Our Services" (gradient linear-gradient(to right,
     #0181f5 0%, #5db2ff 100%), white, radius 4px, padding 18px 44px,
     15px weight 500, capitalize).
  3. Services `div.service_area` (background #83C4FF): `div.container
.p-0` → `div.row.g-0` → 3 × `div.col-xl-4.col-md-4` →
     `div.single_service` (padding 40px 30px): `div.icon` → `i`
     (flaticon; 75×75, background #5DB2FF, white 35px icon,
     border-radius 50%), `h3` (white, 26px, weight 500) — "Hospitality",
     "Emergency Care", "Chamber Service", `p` (white, 16px, line-height
     28px, margin-top 10px, margin-bottom 26px): "Clinical excellence
     must be the priority for any health care service provider.",
     `a.boxed-btn3-white` (white text, 1px solid #fff border,
     border-radius 5px, padding 9px 24px, 15px, capitalize) — "Apply
     For a Bed", "+10 672 356 3567", "Make an Appointment".
  4. Welcome `div.welcome_docmed_area` (padding-top 120px,
     padding-bottom 220px): `div.welcome_thumb` (left column) → two
     overlapping images `div.thumb_1` + `div.thumb_2`; `div.col-xl-6`
     → `div.welcome_docmed_info` (padding-left 90px): `h2` "Welcome to
     Docmed" (18px, weight 400, #1F1F1F, padding-bottom 9px), `h3`
     "Best Care For Your <br> Good Health" (36px, weight 500), `p`
     (#727272, 16px, line-height 28px) + `ul` of 2 checklist items
     ("Apartments frequently or motionless.", "Duis aute irure dolor
     in reprehenderit in voluptat…") each with a right-chevron icon
     (`i.flaticon-right`, #727272 16px line-height 28px), `a.boxed-
btn3` "Learn More" (blue gradient button).
  5. Departments `div.our_department_area`: `div.section_title.text-
center.mb-55` — `h3` "Our Departments" (36px, weight 500,
     #1F1F1F, padding-bottom 15px), `p` (#727272, 16px, line-height
     28px): "Esteem spirit temper too say adieus who direct esteem.
     …"; 6 × `div.single_department` (col-xl-4 col-md-6 col-lg-4,
     background #fff, margin-bottom 30px, box-shadow 0 6px 10px
     rgba(0,0,0,0.04)): `div.department_thumb` (image, overflow
     hidden, border-top-left/right-radius 5px), `div.department_
content` (padding 22px 30px 24px): `h4` — "Eye Care", "Physical
     Therapy", "Dental Care", "Diagnostic Test", "Skin Surgery",
     "Surgery Service", `p` "Esteem spirit temper too say adieus who
     direct esteem.", `a.learn_more` "Learn More" (color #5DB2FF,
     16px).
  6. Testimonials `div.testmonial_area` → `div.swiper` → 2 ×
     `div.swiper-slide.single-testmonial.testmonial_bg_1/2.overlay2`
     (background cover image, position top, padding 180px 0): centered
     `div.testmonial_info.text-center` — quote mark, quote text,
     `div.testmonial_author` "Asana Korim" (+ role line; author name
     repeated on both slides in the DOM).
  7. Tabs `div.business_tabs_area` (background #F5FBFF): `ul.nav`
     tablist — "Excellent Services" (active), "Qualified Doctors",
     "Emergency Departments"; `div.tab-content` → 3 panes, each
     `div.row.align-items-center`: `div.business_info` — `div.icon`
     (75×75 circle #5DB2FF white icon), `h3` (20px, weight 500,
     #1F1F1F, margin-top 16px, margin-bottom 14px) — "Comprehensive
     Medical Services" / "Expert Physicians You Can Trust" / "24/7
     Emergency Medical Care", `p` (#727272, line-height 28px); +
     `div.business_thumb` (photo, padding-top 20px).
  8. Expert doctors `div.expert_doctors_area` (padding-top 120px,
     padding-bottom 120px): `div.doctors_title.mb-55` → `h3` "Expert
     Doctors" (36px, weight 500, #1F1F1F); 6 × `div.single_expert`
     (swiper slides in the original; recreate as a responsive grid):
     `div.expert_thumb` (photo, border-top-left/right-radius 5px,
     overflow hidden), `div.experts_name.text-center` (background
     #F5FBFF, padding-top 16px, padding-bottom 18px): `h4` "Mirazul
     Alom", `p` "Neurologist" (all six repeats in the DOM are the same
     placeholder pair — vary the names for realism).
  9. Emergency CTA band (inside `main`, after a `container-fluid p-0`
     wrapper): `div.row.g-0` → 2 × `div.col-xl-6` →
     `div.single_emergency.d-flex.align-items-center.justify-content-
center` (`emergency_bg_1` / `emergency_bg_2` cover images,
     `.overlay_skyblue` overlay, padding 91px 0): `div.info` — `h3`
     "For Any Emergency Contact" / "Make an Online Appointment" + `p`
     "Esteem spirit temper too say adieus."; `div.info_button` →
     `a.boxed-btn3-white` (border-radius 30px pill): "+10 378 4673
     467" / "Make an Appointment".
  10. Footer `footer.footer`: `div.footer_top` (background #1F1F1F,
      padding-top 145px, padding-bottom 129px) → 4 `div.footer_widget`:
      (a) col-xl-4 — logo (image → text wordmark, white, 22px, weight
      400, capitalize, margin-bottom 40px), `p` "Firmament morning
      sixth subdue darkness creeping gathered divide.", `div.socail_
links` → LinkedIn / Facebook / Twitter / Instagram icons; (b)
      col-xl-2 offset-xl-1 — `h3.footer_title` "Departments" (22px,
      weight 400, white, capitalize, margin-bottom 40px) + links:
      Eye Care, Skin Care, Pathology, Medicine, Dental, About; (c)
      col-xl-2 — "Useful Links": About, Blog, About, Contact,
      Appointment; (d) col-xl-3 — "Address": "200, D-block, Green lane
      USA / +10 367 467 8934 / docmed@contact.com". Widget links:
      #BABABA, 16px, line-height 42px. `div.copy-right_text`
      (background #000, padding-bottom 30px): "Copyright © <year> All
      rights reserved | This template is made with <heart> by Colorlib"
      (paraphrase).
- **Design tokens (extracted from style.min.css):**
  - Brand color: **`#009DFF`** vivid blue — `.book_btn a` background
    ("Make an Appointment" header button).
  - Secondary blue: **`#5DB2FF`** — `.icon i` circle backgrounds,
    `.department_content a.learn_more` color, gradient end.
  - Signature gradient: `linear-gradient(to right, #0181f5 0%,
#5db2ff 100%)` — `.boxed-btn3` (hero "Check Our Services",
    welcome "Learn More") background.
  - Service band: **`#83C4FF`** — `.service_area` background (white
    text cards on top).
  - Light section background: **`#F5FBFF`** — `.header-top_area`,
    `.business_tabs_area`, `.experts_name`.
  - Text: `#1F1F1F` (headings: slider h3, section_title h3, business
    h3, doctors h3, welcome h2), `#727272` (nav links, body copy,
    welcome checklist), white (text on blue/dark sections), `#BABABA`
    (footer widget links).
  - Surfaces: `#fff` header/section/card background, `#1F1F1F`
    footer_top, `#000` copyright bar.
  - Card shadow: `0 6px 10px rgba(0,0,0,0.04)` (department cards);
    radii: 5px (department/expert thumbs top corners, white outline
    buttons), 4px (gradient + appointment buttons), 30px (emergency
    pill buttons), 50% (icon circles).
  - Font: **Poppins** (body + headings; available on Google Fonts).
  - Headings: section_title h3 36px 500 #1F1F1F (padding-bottom
    15px); slider h3 70px 300 #1F1F1F capitalize letter-spacing 2px
    (span bold 700); single_service h3 26px 500 white; business h3
    20px 500; welcome h2 18px 400; footer_title 22px 400 white.
  - Buttons: `.boxed-btn3` — gradient bg, white, 15px 500, radius
    4px, padding 18px 44px; `.boxed-btn3-white` — white text, 1px
    solid #fff border, radius 5px, padding 9px 24px, 15px 400;
    `.book_btn a` — #009DFF bg, white, 14px, radius 4px, padding
    12px 26px; `.info_button a` — radius 30px (pill).
  - Icon circles: `.icon i` — 75×75, #5DB2FF bg, white 35px icon,
    border-radius 50%.
  - Spacing rhythm: welcome area 120/220px; experts area 120/120px;
    testimonial slide padding 180px 0; emergency panel padding 91px 0;
    footer_top 145/129px; slider height 700px; hero button margin-
    bottom 40px on p.
- **Visual design (screenshot, 1200×946):** clean medical one-pager in
  whites and blues. Top bar: light strip with social icons left, search
  field center, contact right (older variant — live DOM drops the
  search field); white main nav with "Docmed" shield-cross logo, dark
  gray links, solid blue "Make an Appointment" button. Hero: large
  stock photo of a smiling doctor in a white coat with a stethoscope on
  a blurred clinic background, big dark headline "Health Care" +
  "For Hole Family" (weight contrast: "Health Care" bold), subtext, and
  a rectangular blue-gradient "Check Our Services" button. Below: a
  light-blue band with 3 white-text service cards (icon circles, title,
  blurb, outline buttons) with a subtle drop shadow onto the white
  section below. The screenshot crops before Welcome/Departments/
  Testimonials/Tabs/Doctors/Emergency/Footer — those were captured from
  the live DOM/CSS instead. Brand #009DFF / #5DB2FF accents, #83C4FF
  service band, #F5FBFF light tints, #1F1F1F headings, dark #1F1F1F
  footer with #000 copyright bar.
- **Recreation decisions:** hero/department/expert/welcome/testimonial/
  tab/emergency photos → seeded picsum placeholders
  (`picsum.photos/seed/medico-<n>/<w>/<h>`: hero 1920×700, welcome
  thumbs 400×500 + 300×400, department cards 600×400, testimonial bg
  1920×700, tab photos 600×500, expert cards 400×350, emergency panels
  1920×400); icons → lucide-react (Stethoscope, Ambulance, BedDouble,
  HeartPulse, Activity, Hospital, Syringe, Pill, Phone, Mail,
  CheckCircle2, Menu, X, ChevronDown/Left/Right, Quote; NOTE: lucide
  has no FirstAid — use Cross or BriefcaseMedical; brand icons
  LinkedIn/Facebook/Twitter/Instagram as inline SVG — lucide removed
  brand icons); fonts → Google Fonts `<link>` (Poppins 300/400/500/700);
  logo → text wordmark "Medico"; hero slider → simple accessible
  carousel (prev/next + auto-advance is a faithful equivalent, no new
  dependency); testimonials slider → same; tabs → accessible tablist
  (aria-selected/aria-controls); experts → responsive grid of 6 cards
  (not a swiper) with varied doctor names/specialties; no assets copied.

Medico lives in `apps/medico` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Header and top bar

The system SHALL render a light top bar with social links and contact
info, and a white main header with a text logo, a horizontal nav menu
and a blue appointment button.

#### Scenario: Top bar content

- **GIVEN** the Medico page is rendered
- **WHEN** the top bar is displayed
- **THEN** it SHALL show social icon links (LinkedIn, Facebook,
  Twitter, Instagram) on the left
- **AND** it SHALL show contact info (phone/email) on the right

#### Scenario: Main header content

- **GIVEN** the page is rendered
- **WHEN** the main header is displayed
- **THEN** it SHALL show the logo wordmark "Medico" on the left
- **AND** it SHALL show the nav links Home, Department, Blog, Pages,
  Doctors and Contact
- **AND** it SHALL show a "Make an Appointment" button with a
  `#009DFF` background

#### Scenario: Mobile menu

- **GIVEN** the mobile viewport is active
- **WHEN** the user clicks the burger toggle
- **THEN** a menu panel SHALL open with the nav links

### Requirement: Hero slider

The system SHALL render a full-height hero slider with a large headline,
subtext and a gradient CTA button.

#### Scenario: Hero content

- **GIVEN** the Medico page is rendered
- **WHEN** the hero slider is displayed
- **THEN** it SHALL show the headline "Health care" (bold) and
  "For Hole Family" in 70px light-weight Poppins
- **AND** it SHALL show the subtext about healthcare service
  excellence
- **AND** it SHALL show a "Check Our Services" button with the blue
  gradient `#0181f5 → #5db2ff`

#### Scenario: Slide navigation

- **GIVEN** the hero has two slides
- **WHEN** the user clicks the next/prev control
- **THEN** the visible slide SHALL change
- **AND** slide indicators SHALL reflect the active slide

### Requirement: Services band

The system SHALL render three white-text service cards on a light-blue
background.

#### Scenario: Service cards

- **GIVEN** the services section is displayed
- **THEN** it SHALL show 3 cards on the `#83C4FF` background
- **AND** each card SHALL show a circular icon (75px, `#5DB2FF`), a
  white title (Hospitality, Emergency Care, Chamber Service), a white
  blurb and a white-outline button
- **AND** the buttons SHALL read "Apply For a Bed", "+10 672 356 3567"
  and "Make an Appointment"

### Requirement: Welcome section

The system SHALL render a split section with overlapping photos on the
left and an intro with a checklist and CTA on the right.

#### Scenario: Welcome content

- **GIVEN** the welcome section is displayed
- **WHEN** the right column is shown
- **THEN** it SHALL show "Welcome to Medico" (small uppercase-style
  lead), the heading "Best Care For Your Good Health"
- **AND** it SHALL show an intro paragraph and a checklist of 2 items
  with chevron icons
- **AND** it SHALL show a gradient "Learn More" button

### Requirement: Departments grid

The system SHALL render a centered section title and a grid of six
department cards.

#### Scenario: Department cards

- **GIVEN** the departments section is displayed
- **THEN** it SHALL show the centered title "Our Departments" with a
  subtitle paragraph
- **AND** it SHALL show 6 cards, each with a photo (5px top radius),
  a title (Eye Care, Physical Therapy, Dental Care, Diagnostic Test,
  Skin Surgery, Surgery Service), a blurb and a `#5DB2FF` "Learn More"
  link
- **AND** each card SHALL have the shadow
  `0 6px 10px rgba(0,0,0,0.04)`

### Requirement: Testimonials slider

The system SHALL render a full-width testimonial slider on a background
photo.

#### Scenario: Testimonial slides

- **GIVEN** the testimonials section is displayed
- **WHEN** the slider is shown
- **THEN** it SHALL show a quote with an author name ("Asana Korim")
  centered over a cover background image
- **AND** the user SHALL be able to navigate between the two slides

### Requirement: Tabs band

The system SHALL render three tabs on a light-blue background, each
pairing icon + heading + paragraph with a photo.

#### Scenario: Tab switching

- **GIVEN** the tabs section is displayed
- **THEN** it SHALL show the tab labels "Excellent Services",
  "Qualified Doctors" and "Emergency Departments" with the first active
- **WHEN** the user activates a tab
- **THEN** the matching panel SHALL show an icon, a heading
  ("Comprehensive Medical Services" / "Expert Physicians You Can
  Trust" / "24/7 Emergency Medical Care"), a paragraph and a photo

### Requirement: Expert doctors grid

The system SHALL render a title and a grid of six doctor cards.

#### Scenario: Doctor cards

- **GIVEN** the expert doctors section is displayed
- **THEN** it SHALL show the title "Expert Doctors"
- **AND** it SHALL show 6 cards, each with a photo (5px top radius)
  and a name + specialty strip on the `#F5FBFF` background

### Requirement: Emergency CTA band

The system SHALL render two half-width emergency panels with pill
buttons.

#### Scenario: Emergency panels

- **GIVEN** the emergency band is displayed
- **THEN** the left panel SHALL show "For Any Emergency Contact" with
  the pill button "+10 378 4673 467"
- **AND** the right panel SHALL show "Make an Online Appointment" with
  the pill button "Make an Appointment"

### Requirement: Footer

The system SHALL render a dark footer with logo/about/social, two link
columns, an address widget and a copyright bar.

#### Scenario: Footer widgets

- **GIVEN** the footer is displayed
- **THEN** it SHALL show the "Medico" wordmark with an about paragraph
  and social icons
- **AND** it SHALL show a "Departments" link column (Eye Care, Skin
  Care, Pathology, Medicine, Dental, About)
- **AND** it SHALL show a "Useful Links" column (About, Blog, Contact,
  Appointment)
- **AND** it SHALL show an "Address" widget with street, phone and
  email lines

#### Scenario: Copyright bar

- **GIVEN** the footer is displayed
- **WHEN** the bottom bar is shown
- **THEN** it SHALL show the line "Copyright © <year> All rights
  reserved | This template is made with <heart> by Colorlib"
- **AND** the bar SHALL have a `#000` background

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Medico app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark,
  all sections in the main landmark, and the footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Medico — Medical / Health Care
  Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-medico`.
- [ ] App renders all sections 1:1 in the order above (top bar →
      header → hero slider → services → welcome → departments →
      testimonials → tabs → expert doctors → emergency band → footer).
- [ ] Design tokens match the reference: brand `#009DFF`, secondary
      `#5DB2FF`, gradient `#0181f5 → #5db2ff`, service band `#83C4FF`,
      light bg `#F5FBFF`, headings `#1F1F1F`, body/nav `#727272`,
      footer `#1F1F1F`, copyright `#000`, footer links `#BABABA`;
      Poppins everywhere.
- [ ] Header: `#F5FBFF` top bar (social left, contact right), white
      main bar with "Medico" wordmark, nav (Home, Department, Blog,
      Pages, Doctors, Contact), `#009DFF` "Make an Appointment"
      button; mobile burger opens the menu panel.
- [ ] Hero: 700px slider with 2 slides (cover photos), 70px Poppins
      300 headline ("Health care" bold + "For Hole Family"), subtext,
      gradient "Check Our Services" button; prev/next controls work.
- [ ] Services: `#83C4FF` band, 3 white-text cards with 75px `#5DB2FF`
      icon circles and white-outline buttons ("Apply For a Bed",
      phone number, "Make an Appointment").
- [ ] Welcome: 2 overlapping photos left, right column with "Welcome
      to Medico" lead, "Best Care For Your Good Health" heading, intro + checklist with chevrons, gradient "Learn More" button.
- [ ] Departments: centered "Our Departments" title, 6 cards with 5px
      top-radius photos, titles, blurbs, `#5DB2FF` "Learn More" links,
      shadow `0 6px 10px rgba(0,0,0,0.04)`.
- [ ] Testimonials: cover-background slider, centered quote + author,
      prev/next navigation between the 2 slides.
- [ ] Tabs: `#F5FBFF` band, 3 accessible tabs (Excellent Services /
      Qualified Doctors / Emergency Departments), panels with icon +
      heading + paragraph + photo.
- [ ] Expert doctors: "Expert Doctors" title, 6 cards (5px top-radius
      photo, `#F5FBFF` name/specialty strip); names vary.
- [ ] Emergency band: 2 half-width photo panels with blue overlay,
      pill buttons (radius 30px) with phone number / "Make an
      Appointment".
- [ ] Footer: `#1F1F1F` top with 4 widgets (logo+about+social,
      Departments links, Useful Links, Address), `#000` copyright bar.
- [ ] Fonts (Poppins 300/400/500/700) loaded via Google Fonts
      `<link>`; no font or image assets copied from the original.
- [ ] All images are seeded picsum placeholders
      (`picsum.photos/seed/medico-<n>/<w>/<h>`); logo recreated as text
      wordmark; brand icons (LinkedIn/Facebook/Twitter/Instagram) as
      inline SVG.
- [ ] `vite.config.ts` registers `injectUiSource()` (see conventions).
- [ ] 100% Vitest coverage on `apps/medico` (lines/functions/branches/
      statements).
- [ ] PR description includes: source template (ColorLib "Docmed"),
      preview URL (https://preview.colorlib.com/theme/docmed/ —
      reachable), design tokens used, what differs (name, placeholder
      images, text logo, Google-font substitution).
