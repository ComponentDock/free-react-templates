# Template: Salus (Medical & Hospital Template)

## Purpose

Salus is a single-page medical/hospital landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Docmed" website template design
(source: https://colorlib.com/wp/template/docmed/), built under a DIFFERENT
name (Salus — Latin for "health/well-being") per the monorepo naming mandate,
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Docmed" — medical & hospital template (category:
  Medical / Health Fitness / Bootstrap; TEMPLATES.md line 376 + dup rows
  1837, 2224 — all `- [ ]`, never shipped). The official preview
  `https://preview.colorlib.com/theme/docmed/` is LIVE (HTTP 200, ~47 KB
  HTML, title "DocMed - Medical & Hospital HTML Template"; stylesheet
  `css/style.min.css` ~71 KB parsed for tokens; swiper/glightbox/aos
  libraries for sliders). The TEMPLATES.md screenshot
  (`docmed-free-template.jpg`, 1200×946) reviewed visually in the browser
  confirms the same design.
- **Visual design (screenshot `docmed-free-template.jpg`):** clean, modern,
  trustworthy palette dominated by white + medium blues. Thin top bar
  (contact right, socials left) → white navbar (logo = blue medical cross in
  a circle + "Docmed" wordmark, centered menu Home/Department/Blog/Pages/
  Doctors/Contact, bright-blue "Make an Appointment" button right) → hero =
  large photo of a smiling doctor in a white coat with a stethoscope, dark
  sans headline "Health Care For Hole Family" (source typo; use "Whole") +
  blue "Check Our Services" button → light-blue services band with 3 white-
  text columns (bed/ambulance/briefcase icons, "Apply For A Bed" / phone /
  "Make An Appointment"). Rounded-rectangle buttons (radius 4–5px), Poppins
  sans throughout, professional medical photography.
- **Section order (1:1, from live preview DOM):**
  1. Header top bar (`header-top_area`, bg `#F5FBFF`): social icons left
     (Facebook/Instagram/LinkedIn/X, `#C7C7C7`, hover `#5DB2FF`) + contact
     right (`short_contact_list`, right-aligned: envelope icon +
     `info@docmed.com`, phone icon + `160160`).
  2. Main header (`main-header-area`, white): logo (`img/logo.png` → text
     wordmark "Salus" + cross icon), centered nav (`main-menu`): Home
     (active), Department, blog (dropdown: blog, single-blog), Pages
     (dropdown: elements, about), Doctors, Contact — links 15px/500
     `#727272` capitalize, hover/active `#1F1F1F` with scaleX underline
     ::before, dropdown = white 200px box shadow 0 0 10px
     rgba(0,0,0,0.02); right `Appointment` block: social icons +
     `book_btn` "Make an Appointment" (`#009DFF` bg, white, 12px 26px,
     radius 4px). Mobile: hamburger toggle + collapsible menu with
     submenu toggles.
  3. Hero slider (`slider_area` → swiper `slider_active`): 3 slides
     (`single_slider`, height 700px, light photo bg `banner.png`/
     `banner2.png`), each: H3 "Health care For Hole Family" (70px, Poppins
     300, letter-spacing 2px, capitalize, `#1F1F1F`), P excerpt (18px
     `#727272`), CTA `boxed-btn3` "Check Our Services" (gradient
     `#0181f5`→`#5db2ff`, white, 18px 44px, radius 4px; hover: white bg +
     `#009DFF` text + border). Swiper prev/next arrows + dot pagination.
  4. Services (`service_area`, bg `#83C4FF`, row g-0): 3 equal columns
     (`col-xl-4`, 40px 30px padding) with 50px white icons, H3 26px/500
     white, P 16px white, `boxed-btn3-white` CTA (white text, 1px white
     border, 9px 24px, radius 5px; hover: white bg + `#009DFF` text):
     - Hospitality — flaticon-electrocardiogram (→ lucide HeartPulse),
       "Apply For a Bed".
     - Emergency Care — bg `#5DB2FF` (nth-child(2)), flaticon-emergency-call
       (→ lucide Ambulance), CTA = phone "+10 672 356 3567".
     - Chamber Service — flaticon-first-aid-kit (→ lucide BriefcaseMedical/
       Stethoscope), "Make an Appointment".
  5. Welcome (`welcome_docmed_area`, padding 120px top / 220px bottom): 2
     columns — `welcome_thumb` (thumb_1 img at 60% width + thumb_2 absolute
     bottom-right, overlapping photos) + `welcome_docmed_info`: H2 "Welcome
     to Salus" (18px/400 `#1F1F1F`, 50px×2px `#5DB2FF` left underline),
     H3 "Best Care For Your Good Health" (36px/500), P 16px `#727272`
     line-height 28px, 3 checklist items with flaticon-right (→ lucide
     Check/ArrowRight): "Apartments frequently or motionless.",
     "Duis aute irure dolor in reprehenderit in voluptate.",
     "Voluptatem quia voluptas sit aspernatur.", CTA `boxed-btn3-white-2`
     "Learn More" (`#5DB2FF` text + 1px `#5DB2FF` border, 9px 24px,
     radius 5px).
  6. Departments (`our_department_area`): centered section title
     (`section_title text-center mb-55`): H3 "Our Departments" (36px/500
     `#1F1F1F` with centered 50px×2px `#5DB2FF` ::before underline) + P
     "Esteem spirit temper too say adieus who direct esteem. It esteems
     luckily or picture placing drawing." (16px `#727272`). Grid of 6
     cards (`col-xl-4 col-md-6 col-lg-4`): Eye Care, Physical Therapy,
     Dental Care, Diagnostic Test, Skin Surgery, Surgery Service. Card =
     white bg, shadow 0 6px 10px rgba(0,0,0,0.04), image top radius 5px
     (hover: scale 1.2), content padding 22px 30px 24px: title, P 16px
     `#727272`, `a.learn_more` "Learn More" (`#5DB2FF` 16px, hover
     underline).
  7. Testimonials (`testmonial_area` → swiper `testmonial_active`): 3
     slides, each `single-testmonial testmonial_bg_1/2 overlay2` (bg image
     - black overlay opacity 0.3, padding 180px 0), centered: quote icon
       (flaticon-straight-quotes → lucide Quote, white 40px), P white
       20px/32px ("Donec imperdiet congue orci consequat mattis. Donec
       rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien
       feugiat ultrices nec sed neque. Fusce ac mattis nulla. Morbi eget
       ornare dui."), author "Asana Korim" (white).
  8. Business tabs (`business_expert_area` → `business_tabs_area`, bg
     `#F5FBFF`, `border_bottom` 1px `#E8E8E8`, 60px padding): nav with 3
     tabs (`nav-item` width 33.33%, 20px `#1F1F1F`, padding 35px 0 35px
     40px, active tab = white bg): "Comprehensive Medical Services",
     "Expert Physicians You Can Trust", "24/7 Emergency Medical Care".
     Each tab-pane: `business_info` (icon in 75px circle bg `#5DB2FF`
     white 35px icon + H3 20px/500 `#1F1F1F` + P) + `business_thumb`
     image.
  9. Expert doctors (`expert_doctors_area`, padding 120px top/bottom):
     title "Expert Doctors" (36px/500 `#1F1F1F`) + swiper `expert_active`
     with 6 cards (`single_expert`): photo (top radius 5px, hover scale
     1.03) + `experts_name` (bg `#F5FBFF`, padding 16px 0 18px): name H3
     20px/500, specialty span 13px `#919191`; card hover: `experts_name`
     bg `#5DB2FF` + white text. Swiper prev/next arrows. (Source repeats
     "Mirazul Alom / Neurologist" ×6 — use varied fictional names +
     specialties.)
  10. Emergency contact (`Emergency_contact`, 2 `single_emergency` panels
      with bg images `emergency-1`/`emergency-2`, padding 91px 0, white
      text): left — H3 "For Any Emergency Contact" (26px/500) + P 13px +
      phone "+10 378 4673 467" (`info_button a`, white border pill,
      radius 30px); right — H3 "Make an Online Appointment" + P +
      `info_button a` "Make an Appointment".
  11. Footer (`footer`, bg image; `footer_top` bg `#1F1F1F`, padding
      145px top / 129px bottom): 4 columns — (a) `footer_logo` (wordmark)
      - blurb "Firmament morning sixth subdue darkness creeping gathered
        divide." + social icons; (b) "Departments" (Eye Care, Skin Care,
        Pathology, Medicine, Dental); (c) "Useful Links" (About, Blog,
        About, Contact, Appointment); (d) "Address" (200, D-block, Green
        lane USA / +10 367 467 8934 / docmed@contact.com). Footer titles
        22px/400 white capitalize mb 40px; links 16px `#BABABA` line-height
        42px, hover `#5DB2FF`. Bottom bar (`copy-right_text`, bg `#000000`):
        "Copyright © All rights reserved | This template is made with ♥ by
        Colorlib" (→ fictionalized credit).
  12. Appointment modal (`modal` #appointmentModal → `popup_box`): title
      "Make an Appointment"; form: Select Department (Eye Care, Physical
      Therapy, Dental Care), Select Doctor (Mirazul Alom, Monzul Alom,
      Azizul Islam), date input "Pick date", time input "Suitable time",
      text "Name", tel "Phone no.", email "Email" (`form-control`: 1px
      `#e5e6e9` border, radius 0, height 48px, 13px, `#999999`
      placeholder), submit `boxed-btn3` "Confirm".
- **Design tokens (extracted from `css/style.min.css`):**
  - Brand blue: `#009DFF` (header book_btn bg, boxed-btn3 hover text);
    gradient `linear-gradient(to right, #0181f5 0%, #5db2ff 100%)`
    (hero/primary CTA bg).
  - Light blues: `#5DB2FF` (learn_more, tab icon circles, newsletter
    button, active/hover states, service card 2 bg, hover text) and
    `#83C4FF` (services band bg).
  - Tints: `#F5FBFF` (header-top bar, business tabs bg, experts_name bg),
    `#f9f9ff` (mobile submenu bg).
  - Neutrals: `#1F1F1F` (headings + footer_top bg), `#000` (copyright
    bar, testimonial overlay 0.3), `#727272` (body text), `#919191` /
    `#999999` (muted/specialty/placeholder), `#BABABA` (footer links),
    `#A8A7A0` (header socials), `#C7C7C7` (top-bar socials), `#fff`
    (cards, headers, modal), `#E8E8E8` (tab border), `#e5e6e9` (form
    border).
  - Font: **"Poppins"** (200–700) for headings AND body, via Google Fonts
    (`@import url("https://fonts.googleapis.com/css?family=Poppins:200,
200i,300,300i,400,400i,500,500i,600,600i,700&display=swap")`).
  - Buttons: `.boxed-btn3` 18px 44px / radius 4px / 15px 500 / capitalize,
    gradient bg, hover white bg + `#009DFF`; `.boxed-btn3-white` &
    `.boxed-btn3-white-2` 9px 24px / radius 5px / 15px 400, outline
    variants; `.book_btn` 12px 26px / radius 4px / 14px; emergency
    `info_button` pill radius 30px.
  - Section titles: 36px/500 `#1F1F1F` with 50px×2px `#5DB2FF` ::before
    underline (centered in Departments/Expert Doctors, left in Welcome H2
    18px).
  - Cards: white, shadow 0 6px 10px rgba(0,0,0,0.04), top radius 5px,
    hover image zoom (1.2 departments / 1.03 experts).
  - Spacing rhythm: slider 700px; welcome 120/220px; departments mb-55
    title; testimonials 180px 0; tabs border 60px padding; expert doctors
    120/120px; emergency 91px 0; footer_top 145/129px.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/salus-<n>/<w>/<h>`); icons → lucide-react
  (HeartPulse, Ambulance, Stethoscope, Phone, Mail, MapPin, Clock,
  Calendar, Quote, Check, ArrowRight, ChevronDown; socials Facebook/
  Instagram/LinkedIn/X as inline SVG brand icons — lucide has no brand
  icons); Poppins via Google Fonts `<link>` in index.html; repo-standard
  shared components from `packages/ui` (Button, ButtonLink, cn). Source
  copy typo "Hole Family" → "Whole Family". Author/credit names
  fictionalized ("Colorlib" → e.g. "TemplateCraft"). The appointment modal
  is opened by every "Make an Appointment" CTA (header book_btn, Chamber
  Service card, emergency panel). Carousels (hero slider, testimonials,
  expert doctors) need prev/next + dot pagination behavior — hand-rolled
  or Swiper-style, no new heavy deps.

Salus lives in `apps/salus` and uses shared components from `packages/ui`.

## Requirements

### Requirement: Header top bar

The system SHALL render a light-blue utility bar above the header with
social icons on the left and contact info on the right.

#### Scenario: Top bar content

- **GIVEN** the Salus page is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL show at least three social icons on the left
- **AND** the top bar SHALL show an email address and a phone number on
  the right

### Requirement: Site header with navigation

The system SHALL render a white header with a logo, centered navigation
links with dropdowns, and a "Make an Appointment" button.

#### Scenario: Header content

- **GIVEN** the page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show the site name "Salus" as the logo
- **AND** the nav SHALL show links Home, Department, Blog, Pages, Doctors,
  and Contact
- **AND** the Blog and Pages links SHALL have dropdown menus
- **AND** a "Make an Appointment" button SHALL be visible on the right

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at mobile width
- **WHEN** the user presses the hamburger button
- **THEN** the collapsed menu SHALL expand to show the same links

### Requirement: Hero slider

The system SHALL render a full-width hero carousel with three slides, each
showing a headline, excerpt, and CTA button.

#### Scenario: Slide content

- **GIVEN** the page is rendered
- **WHEN** the hero slider is displayed
- **THEN** the first slide SHALL show the headline "Health Care For Whole
  Family", an excerpt, and a "Check Our Services" button

#### Scenario: Slider navigation

- **GIVEN** the hero slider is displayed
- **WHEN** the user clicks the next arrow, previous arrow, or a pagination
  dot
- **THEN** the slider SHALL advance to the corresponding slide

### Requirement: Services section

The system SHALL render a blue band with three service cards, each with an
icon, title, description, and a call-to-action.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show cards Hospitality, Emergency Care, and Chamber
  Service
- **AND** the Hospitality card SHALL have an "Apply For a Bed" button
- **AND** the Emergency Care card SHALL show a phone number
- **AND** the Chamber Service card SHALL have a "Make an Appointment"
  button

### Requirement: Welcome section

The system SHALL render a welcome section with two overlapping images on
the left and a heading, description, checklist, and "Learn More" button on
the right.

#### Scenario: Welcome content

- **GIVEN** the page is rendered
- **WHEN** the welcome section is displayed
- **THEN** it SHALL show the heading "Welcome to Salus" and "Best Care For
  Your Good Health"
- **AND** it SHALL show at least three checklist items with icons
- **AND** it SHALL show a "Learn More" button

### Requirement: Departments section

The system SHALL render a centered "Our Departments" title followed by a
grid of six department cards, each with an image, title, description, and
"Learn More" link.

#### Scenario: Department cards

- **GIVEN** the page is rendered
- **WHEN** the departments section is displayed
- **THEN** it SHALL contain the heading "Our Departments"
- **AND** it SHALL show cards for Eye Care, Physical Therapy, Dental Care,
  Diagnostic Test, Skin Surgery, and Surgery Service
- **AND** each card SHALL show a "Learn More" link

### Requirement: Testimonials slider

The system SHALL render a full-width testimonial carousel with image
background and dark overlay, each slide showing a quote icon, testimonial
text, and author name.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonial slider is displayed
- **THEN** the first slide SHALL show a quote icon, testimonial text, and
  an author name

### Requirement: Business tabs

The system SHALL render three tabs on a light background, each with an
icon, heading, paragraph, and an image.

#### Scenario: Tab switching

- **GIVEN** the business tabs section is displayed
- **WHEN** the user clicks a tab
- **THEN** the tab SHALL become active and SHALL show its icon, heading,
  paragraph, and image
- **AND** the tabs SHALL be "Comprehensive Medical Services", "Expert
  Physicians You Can Trust", and "24/7 Emergency Medical Care"

### Requirement: Expert doctors slider

The system SHALL render an "Expert Doctors" title and a carousel of doctor
cards, each with a photo, name, and specialty.

#### Scenario: Doctor cards

- **GIVEN** the page is rendered
- **WHEN** the expert doctors section is displayed
- **THEN** it SHALL contain the heading "Expert Doctors"
- **AND** it SHALL show at least four doctor cards with name and specialty

### Requirement: Emergency contact band

The system SHALL render two emergency panels with background images, the
first with an emergency heading and phone number, the second with an
appointment heading and button.

#### Scenario: Emergency panels

- **GIVEN** the page is rendered
- **WHEN** the emergency band is displayed
- **THEN** the left panel SHALL show "For Any Emergency Contact" and a
  phone number
- **AND** the right panel SHALL show "Make an Online Appointment" and a
  "Make an Appointment" button

### Requirement: Footer

The system SHALL render a dark footer with a logo/blurb column, a
Departments links column, a Useful Links column, an Address column, and a
copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the columns Departments, Useful Links, and
  Address
- **AND** the Address column SHALL show a street address, phone number,
  and email address
- **AND** the copyright bar SHALL show a copyright line

### Requirement: Appointment modal

The system SHALL render a modal dialog with an appointment form opened by
the "Make an Appointment" buttons.

#### Scenario: Modal form

- **GIVEN** the page is rendered
- **WHEN** the user clicks a "Make an Appointment" button
- **THEN** a modal dialog SHALL open with the title "Make an Appointment"
- **AND** the form SHALL include a department select, a doctor select, a
  date field, a time field, name, phone, and email inputs, and a "Confirm"
  submit button

#### Scenario: Modal close

- **GIVEN** the appointment modal is open
- **WHEN** the user clicks the close button or the backdrop
- **THEN** the modal SHALL close

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Salus app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, all
  sections in the main landmark, and the footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Salus — Medical & Hospital Template"

## Verification checklist (implementer)

- [ ] `scripts/verify-app.sh salus` passes (typecheck + lint + 100%
      coverage tests + build)
- [ ] `npm run spec:validate` passes for `openspec/specs/template-salus`
- [ ] Section order matches the reference 1:1 (Top bar → Header + nav →
      Hero slider → Services → Welcome → Departments → Testimonials →
      Business tabs → Expert doctors → Emergency band → Footer →
      Appointment modal)
- [ ] Design tokens applied via `@theme` (brand blue `#009DFF` + gradient
      `#0181f5→#5db2ff`, light blues `#5DB2FF`/`#83C4FF`, tint `#F5FBFF`,
      Poppins font, radius 4–5px buttons, `#1F1F1F` headings, `#1F1F1F`
      footer top + `#000` copyright bar)
- [ ] Carousels behave like the reference (hero 3 slides, testimonials 3
      slides, expert doctors 6 slides) with prev/next + dot pagination
- [ ] Appointment modal opens from every "Make an Appointment" CTA and
      contains the full field set
- [ ] No ColorLib assets copied; seeded picsum placeholders + lucide icons
      (brand socials as inline SVGs)
- [ ] PR description includes: source (ColorLib Docmed), preview URL,
      tokens used, differences (new name, placeholders, typo fix)
